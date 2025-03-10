import { type Router, type LocationQueryRaw, type RouteParamsRawGeneric } from 'vue-router';

class NavigationService {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  // Navigate to a specific route
  navigateTo(routeName: string, params: RouteParamsRawGeneric = {}, query: LocationQueryRaw = {}) {
    this.router.push({ name: routeName, params, query });
  }

  // Replace the current route with a new one
  replaceRoute(
    routeName: string,
    params: RouteParamsRawGeneric = {},
    query: LocationQueryRaw = {}
  ) {
    this.router.replace({ name: routeName, params, query });
  }

  // Go back to the previous route
  goBack() {
    this.router.back();
  }

  // Reload the current route
  reload() {
    this.router.go(0);
  }

  // Navigate to a specific path
  navigateToPath(path: string, query: LocationQueryRaw = {}) {
    this.router.push({ path, query });
  }
}

let navigationService: NavigationService | null = null;

// Create an instance of NavigationService with the provided router
export function createNavigationService(router: Router) {
  navigationService = new NavigationService(router);
  return navigationService;
}

// Get the current instance of the NavigationService
export function useNavigationService(): NavigationService {
  if (!navigationService) {
    throw new Error('NavigationService has not been initialized!');
  }
  return navigationService;
}
