import { Component, effect, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';
import {HeaderComponent} from '@components/header/header.component';
import { RouteList } from '@app/app.routes';

@Component({
  selector: 'home',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private router = inject(Router);
  public isLoggedin = false;
  protected authenticationService = inject(AuthenticationService);

 constructor(){
  effect(() => {
    if (this.authenticationService.currentUser$() !== null) this.isLoggedin = true;
    else this.isLoggedin = false;
  });
 }

  ngOnInit() {
    // if (this.isLoggedin) this.router.navigate([RouteList.admin]);
    // else this.router.navigate([RouteList.login]);
    // if (!this.isLoggedin) this.router.navigate([RouteList.login]);
  }

}