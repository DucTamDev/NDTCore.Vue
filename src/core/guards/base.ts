import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export abstract class BaseGuard {
  // Check if the user is authenticated
  protected isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
  }

  // Check if the user has the required permissions (optional)
  protected hasPermission(requiredRole: string): boolean {
    const userRole = localStorage.getItem('userRole');
    return userRole === requiredRole;
  }

  abstract canActivate(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ): void;
}
