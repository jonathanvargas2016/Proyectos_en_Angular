import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction(
    "[Item List] Load items",

)

export const loadedItems = createAction(
    "[Item List] Loaded success",
    props<{ items: ItemModel[] }>()
)