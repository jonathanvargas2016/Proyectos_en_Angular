import { createReducer, on } from "@ngrx/store";
import { decreaseCount, increaseCount, initialState } from "./book.actions";

const countBooksInitial: number = 0;


export const bookReducer = createReducer(
    countBooksInitial,
    on(increaseCount, (state: number) => state + 1),
    on(decreaseCount, (state: number) => state - 1),
    on(initialState, (state: number, action) => state = action.value),
)