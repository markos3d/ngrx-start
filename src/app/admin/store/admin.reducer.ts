import { Action, createReducer, on } from '@ngrx/store';
import { AdminActions } from './admin.actions';
import { AdminModel } from './admin.model';

export const adminFeatureKey = 'admin';

export interface State {
  sampleData: AdminModel[],
  loading: boolean
}

export const initialState: State = {
  sampleData: [],
  loading: false
};

export const adminReducer = createReducer(
  initialState,

  on(AdminActions.loadAdmins, state => ({
    ...state,
    loading: true
  }
  )),

  on(AdminActions.loadAdminsSuccess, (state) => ({
    ...state,
    sampleData: [{ userCount: 5, userType: 'standard users', description: 'description of standard users' }],
    loading: false
  }))
);


export function reducer(state: State | undefined, action: Action) {
  return adminReducer(state, action);
}

export const getSampleData = (state: State) => state.sampleData;