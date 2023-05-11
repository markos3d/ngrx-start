import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AdminActions = createActionGroup({
  source: 'Admin',
  events: {
    'Load Admins': emptyProps(),
    'Load Admins Success': emptyProps()
  }
});

