import { getRouterSelectors } from "@ngrx/router-store";

export const { selectUrl, selectCurrentRoute, selectFragment, selectQueryParams, selectRouteData, selectRouteParams } = getRouterSelectors();
