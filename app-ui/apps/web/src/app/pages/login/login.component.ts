import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouteList } from '@app/app.routes';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public displayErrorMessage = false;
  public submitted = false;

  protected formBuilder = inject(FormBuilder);
  protected route = inject(ActivatedRoute);
  protected router = inject(Router);
  protected authenticationService = inject(AuthenticationService);

  protected username = new FormControl<string>('user', [Validators.required]);
  protected password = new FormControl<string>('user', [Validators.required]);
  protected formGroup: FormGroup = this.formBuilder.group({
    username: this.username,
    password: this.password
  });

  constructor() {
    effect(() => {
      if (this.authenticationService.currentUser$() !== null) this.router.navigate([RouteList.admin]);
      else this.displayErrorMessage = true;
    });
  }

  onSubmit() {
    this.submitted = true;
    const u = this.username.value;
    const p = this.password.value;
    if (!u || !p) return;
    this.authenticationService.httpReq_authenticate(u, p);
  }
}