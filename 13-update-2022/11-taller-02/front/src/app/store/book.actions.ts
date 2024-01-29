import { createAction, props } from "@ngrx/store";


export const increaseCount = createAction(
    '[count] increase'
)

export const decreaseCount = createAction(
    '[count] decrease'
)

export const initialState = createAction(
    '[count] initial',
    props<{ value: number }>()
)

