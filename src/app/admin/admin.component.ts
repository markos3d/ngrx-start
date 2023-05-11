import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminModel } from './store/admin.model';
import { AdminActions } from './store/admin.actions';
import * as AdminSelectors from './store/admin.selectors';
import { selectUrl } from '../state/router.selectors';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  store$ = inject(Store);
  samples$: Observable<AdminModel[]>;
  loadedRoute$: Observable<string>;

  constructor() {
    this.samples$ = this.store$.select(AdminSelectors.getSampleData);
    this.loadedRoute$ = this.store$.select(selectUrl);
  }

  ngOnInit(): void {
    this.store$.dispatch(AdminActions.loadAdmins());
  }
}
