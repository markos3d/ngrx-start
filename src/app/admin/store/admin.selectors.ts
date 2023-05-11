import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdmin from './admin.reducer';

export const adminState = createFeatureSelector<fromAdmin.State>(fromAdmin.adminFeatureKey);

export const getSampleData = createSelector(adminState, fromAdmin.getSampleData);
