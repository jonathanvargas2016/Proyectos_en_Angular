import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpService } from '@pichincha/angular-sdk/http';
import { CatalogueService } from '@pichincha/bb-commons/catalogues';
import { Endpoints } from '../config/endpoint.enum';
import {
  IModalDetail,
  IModalOrderDetail,
} from '../interfaces/modal-order-details.interface';
import {
  IPaymentItem,
  IPaymentOrderItems,
  IPaymentServicesResponse,
} from '../interfaces/payment.interface';
import { CustomFormatDatePipe } from '../pipes';
import {
  EMPTY_MODAL_ORDER_DETAIL,
  EMPTY_PAYMENT_ORDERS,
  formatModalCurrencyDetail,
  obfuscateDigits,
} from '../utils';
import { ModalDetailsStateService } from './modal-details-state.service';
import { ModalOrderCommonsService } from './modal-order-commons.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentOrdersService {
  private _detailsServices: {
    [key: string]: (
      orderId: string,
      typePayment: string
    ) => Promise<IPaymentServicesResponse>;
  } = {};

  private _orderItems: {
    [key: string]: (orderId: IPaymentItem) => IPaymentOrderItems | undefined;
  } = {};

  private _headers: { [key: string]: string } = {
    PPROV: 'PAPR002',
    PSAL: 'PANO002',
    PTE: 'PATE002',
  };

  private readonly _httpService = inject(HttpService);
  private readonly _modalCommonsService = inject(ModalOrderCommonsService);
  private readonly _datePipe = inject(CustomFormatDatePipe);
  private readonly _catalogueService = inject(CatalogueService);
  private readonly _modalDetailsStateService = inject(ModalDetailsStateService);
  public translateService = inject(TranslateService);

  constructor() {
    this._initService();
  }

  private _initService() {
    this._catalogueService.initCatalogues().then(() => {
      this._configurePaymentsService();
    });
  }

  private _configurePaymentsService() {
    this._detailsServices = {
      ['PAYMENT']: (orderId: string, typePayment: string) =>
        this._getPaymentOrder(orderId, typePayment),
    };
    this._orderItems = {
      ['PAYMENTORDER']: (orderDetail: IPaymentItem) => {
        return orderDetail.paymentOrderItems
          ? orderDetail.paymentOrderItems[0]
          : undefined;
      },
    };
  }

  getTypeProcess(type: string) {
    return type === 'SCHEDULED' ? 'Programado' : 'En línea';
  }

  async getPaymentDetailByOrderId(
    orderId: string,
    showOrderHistory: boolean,
    status: string,
    serviceType: string,
    amount: string,
    showOperator?: boolean
  ): Promise<IModalOrderDetail> {
    const response = await this._detailsServices['PAYMENT'](
      orderId,
      serviceType
    );

    const orderDetail: IPaymentItem = response.data || EMPTY_PAYMENT_ORDERS;
    const orderHistoryChanges =
      orderDetail?.orderHistory?.orderHistoryChanges || [];

    const { approvalHistoryChanges, rejectedlHistoryChanges } =
      this._modalCommonsService.getHistoryData(
        orderHistoryChanges,
        showOrderHistory
      );

    const orderStatus: string = status;

    const paymentOrderItem =
      this._orderItems['PAYMENTORDER'](orderDetail) || undefined;

    if (paymentOrderItem) {
      let details: IModalDetail[] = [
        ...this._modalCommonsService.getOrderOperatorDataPP(
          orderDetail.orderHistory?.orderHistoryChanges || [],
          showOperator
        ),
        {
          idElementKey: 'titleServiceType',
          idElementValue: 'titleServiceTypeValue',
          key: 'order_details.service_type',
          value: this._catalogueService.translatedServicesLabels[serviceType],
        },
        {
          idElementKey: 'titleCounterpart',
          idElementValue: 'titleCounterpartValue',
          key: 'order_details.counterpart',
          value: orderDetail.counterPart?.identificationValue || '-',
        },
        {
          idElementKey: 'titleAccountType',
          idElementValue: 'titleAccountTypeNumber',
          key: 'order_details.origin_account_type',
          value: this._getAccountType(orderDetail),
        },
        {
          idElementKey: 'titleAccountNumber',
          idElementValue: 'titleAccountNumberValue',
          key: 'order_details.origin_account_number',
          value: orderDetail.sourceProduct.productNumber || '-',
          hasSeparator: true,
        },
        ...(await this.getDetails(
          orderDetail,
          paymentOrderItem,
          serviceType,
          amount,
          response
        )),
      ];

      const dataModal: any = {
        orderId,
        showOrderHistory,
        serviceType,
        orderDetail,
        orderStatus,
        details,
        approvalHistoryChanges,
        rejectedlHistoryChanges,
        status,
      };
      return this.createModalOrderDetail(dataModal);
    }
    return EMPTY_MODAL_ORDER_DETAIL;
  }

  private async getDetails(
    orderDetail: IPaymentItem,
    paymentOrderItem: IPaymentOrderItems,
    serviceType: string,
    amount: string,
    response: IPaymentServicesResponse
  ) {
    const detailsPP: IModalDetail[] = [
      {
        idElementKey: 'titleProcessingType',
        idElementValue: 'titleProcessingTypeValue',
        key: 'order_details.processing_type',
        value: this.getTypeProcess(orderDetail.processingType.code) || '-',
      },
      {
        idElementKey: 'titleApprovalDate',
        idElementValue: 'titleApprovalDateValue',
        key: 'order_details.maximum_approval_date',
        value: this._datePipe.formatDetailDate(
          orderDetail.expirationDate,
          false
        ),
      },
      {
        idElementKey: 'titleExecutationDate',
        idElementValue: 'titleExecutationDateValue',
        key: 'order_details.execution_date',
        value: this._datePipe.formatDetailDate(
          orderDetail.executionDate,
          false
        ),
        hasSeparator: true,
      },
      {
        idElementKey: 'titleCurrency',
        idElementValue: 'titleCurrencyValue',
        key: 'order_details.currency',
        value: formatModalCurrencyDetail(paymentOrderItem.currency?.code),
      },
      {
        idElementKey: 'titleAmountToPay',
        idElementValue: 'titleAmountToPayValue',
        key: 'order_details.amount_value_to_pay',
        value: serviceType === 'PSAL' ? obfuscateDigits(amount) : amount,
        hasSeparator: true,
        makeEmphasis: true,
      },
      {
        idElementKey: 'titleNumberBeneficiary',
        idElementValue: 'titleNumberBeneficiaryValue',
        key: 'order_details.number_beneficiaries',
        value: orderDetail.paymentOrderItems?.length.toString() || '0',
        hyperlinkDetail: {
          label: await this._getTranslationText(
            'order_details.list_beneficiaries'
          ),
          icon: 'format_list_numbered',
          onClick: () => {
            this._modalDetailsStateService.updateDetails(response.data);
            this._modalDetailsStateService.openDetailsModal();
          },
        },
      },
    ];

    return detailsPP;
  }

  private createModalOrderDetail(data: any) {
    const modalOrderDetail: IModalOrderDetail = {
      orderId: data.orderId,
      hideHistory: !data.showOrderHistory,
      serviceType: data.serviceType,
      trayOrderId: data.orderDetail.trayOrderId,

      primaryButtonText: this._modalCommonsService.getApproveOrModifyText(
        data.orderStatus,
        data.showOrderHistory
      ),
      primaryButtonFunction:
        this._modalCommonsService.getApproveOrModifyFunction(
          data.orderStatus,
          data.orderId,
          () => this._modifySalaryPaymentOrder(data.orderId)
        ),
      details: data.details,
      approvalHistoryDetails: data.approvalHistoryChanges,
      rejectedHistoryDetails: data.rejectedlHistoryChanges,
      ...this._modalCommonsService.getApproverOrderDetailsCallToSecondary(
        data.orderId,
        data.status,
        this._catalogueService.translatedServicesLabels[data.serviceType]
      ),
      status: data.orderDetail.status,
    };
    return modalOrderDetail;
  }

  private _getAccountType(orderDetail: IPaymentItem): string {
    return (
      this._catalogueService.translatedAccountLabels[
        orderDetail.sourceProduct?.productType?.code
      ] || '-'
    );
  }

  private _getPaymentOrder(
    orderId: string,
    typePayment: string
  ): Promise<IPaymentServicesResponse> {
    return this._httpService.get(
      `${Endpoints.GET_PAYMENT_ORDER_DETAIL}?trayOrderId=${orderId}&moreData=paymentOrderItems,orderHistory`,
      {},
      {},
      { 'process-code': this._headers[typePayment] }
    );
  }

  private _modifySalaryPaymentOrder(_orderId: string) {
    return true;
  }

  private _getTranslationText(message: string) {
    return this.translateService
      .get(message)
      .toPromise()
      .then((res: any) => res);
  }












  private async getDetails(
    response: IPaymentServicesResponse
  ) {
    const detailsPP: IModalDetail[] = [
      {
        idElementKey: 'titleProcessingType',
        idElementValue: 'titleProcessingTypeValue',
        key: 'order_details.processing_type',
        value: "Inmediate",
      },
      {
        idElementKey: 'titleNumberBeneficiary',
        idElementValue: 'titleNumberBeneficiaryValue',
        key: 'order_details.number_beneficiaries',
        value:  '0',
        hyperlinkDetail: {
          label: "List of beneficiaries",
          icon: 'format_list_numbered',
          onClick: () => {
            this._modalDetailsStateService.updateDetails(response.data);
            this._modalDetailsStateService.openDetailsModal();
          },
        },
      },
    ];

    return detailsPP;
  }
}
