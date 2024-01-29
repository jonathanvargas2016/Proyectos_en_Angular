import { createReducer, on } from "@ngrx/store";
import { updatePurchase } from "./purchase.actions";

const subtotalPurchaseInitial: number = 0;

export const totalPurchaseReductor = createReducer(
    subtotalPurchaseInitial,
    on(updatePurchase, (state: number, action) => state = action.subtotal)
)