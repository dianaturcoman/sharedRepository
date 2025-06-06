import { Component, computed, effect, inject } from '@angular/core';
import { SharedModule } from '@repo/ui';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Role, RouteList } from '../../app.routes';
import { AuthenticationService } from '@services/authentication.service';

@Component({
  selector: 'header',
  standalone: true,
  imports: [SharedModule, RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected router = inject(Router);
  protected authenticationService = inject(AuthenticationService);
  protected routes = RouteList; // used in html

  public logoUrl = "/assets/images/logo.png";

  public username = computed(() => this.authenticationService.currentUser$()?.Username);
  public isAdmin = computed(() => this.authenticationService.currentUser$()?.Accesslevel === Role.Admin);

  public onLogout(){
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}