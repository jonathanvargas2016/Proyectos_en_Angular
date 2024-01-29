import { createAction, props } from "@ngrx/store";

export const updatePurchase = createAction(
    '[total] total',
    props<{ subtotal: number }>()
)