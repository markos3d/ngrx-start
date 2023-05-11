import { NgModule, isDevMode } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, reducers } from "./app.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";

let devImports = [
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: false,
    }),
];

if (!isDevMode) {
    devImports = [];
}

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([]),
        ...devImports
    ]
})
export class AppStoreModule {

}