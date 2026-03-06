import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withFetch, withXsrfConfiguration } from "@angular/common/http";
import { TranslateService, TranslateModule } from "@ngx-translate/core";
import { provideTranslateHttpLoader } from "@ngx-translate/http-loader";
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { DefaultNavigationOptions, routes } from '../app.routes';
import { importProvidersFrom, inject, NgModule } from "@angular/core";
import { ASSETS_PATH, LANGUAGES } from "@app/environments/environment";
import { AuthenticationService } from '@services/authentication.service';
import { AuthInterceptor } from "@app/helpers/auth-interceptor";
import { ErrorInterceptor } from "@app/helpers/error-interceptor";

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: LOCALE_ID, deps: [TranslateService] },
    provideRouter(routes, withComponentInputBinding(), withRouterConfig(DefaultNavigationOptions)),
    provideHttpClient(withFetch(), withXsrfConfiguration({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' })),
    provideTranslateHttpLoader({
      prefix: ASSETS_PATH + '/i18n/',
      suffix: ''
    }),
    importProvidersFrom(TranslateModule.forRoot())
  ]
})

export class AppModule {

  protected authenticationService = inject(AuthenticationService);

  constructor(private translateService: TranslateService) {

    console.debug("Starting App Module - ibs");

    // set default language
    let currentLang = LANGUAGES.EN;
    if (this.translateService.getBrowserLang() === LANGUAGES.DE) { currentLang = LANGUAGES.DE; }
    else if (this.translateService.getBrowserLang() === LANGUAGES.RO) { currentLang = LANGUAGES.RO; }
    this.translateService.use(currentLang);

    // set authentication
    this.authenticationService.autoLogin();
  }

}