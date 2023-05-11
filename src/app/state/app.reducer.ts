import { isDevMode } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromAdmin from '../admin/store/admin.reducer';


export interface State {
  // admin: fromAdmin.State,
  router: fromRouter.RouterReducerState;


}

export const reducers: ActionReducerMap<State> = {
  // admin: fromAdmin.reducer
  router: fromRouter.routerReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
