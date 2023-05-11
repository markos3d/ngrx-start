import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { AdminActions } from './admin.actions';
import { map } from 'rxjs';

@Injectable()
export class AdminEffects {

  loadAdmins$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadAdmins),
      map(() => AdminActions.loadAdminsSuccess()))
  );

  constructor(private actions$: Actions) { }
}
