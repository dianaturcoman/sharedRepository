import { NavigationExtras, Routes } from '@angular/router';
import { AuthGuard } from './pages/helpers/auth.guard';

export enum RouteList {
  home = '',
  login = 'login',
  admin = 'admin',
  user = 'user',
  logout = 'logout'
}

export enum Role {
  User = 'User',
  Admin = 'Admin'
}

export const DefaultNavigationOptions: NavigationExtras = {
  onSameUrlNavigation: 'reload',
  replaceUrl: true
}

const children: Routes = [
  {
    path: RouteList.admin,
    loadComponent: () => import('./pages/admin/admin.component').then((mod) => mod.AdminComponent),
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: RouteList.user,
    loadComponent: () => import('./pages/user/user.component').then((mod) => mod.UserComponent),
    canActivate: [AuthGuard]
  }
]

export const routes: Routes = [
    {
      path: '',
      loadComponent: () => import('./home/home.component').then((mod) => mod.HomeComponent),
      children,
      canActivate: [AuthGuard]
    },
    {
      path: RouteList.login,
      loadComponent: () => import('./pages/login/login.component').then((mod) => mod.LoginComponent),
    },
    {
      path: '**',
      loadComponent: () => import('./pages/notFound/notFound.component').then((mod) => mod.PageNotFoundComponent),
    }
  ];
