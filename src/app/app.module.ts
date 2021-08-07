import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './module-user/user.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerOverlayComponent } from './shared/components/spinner-overlay/spinner-overlay.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerInterceptor } from './shared/interceptors/spinner-interceptor';
import { OverlayModule } from '@angular/cdk/overlay';



@NgModule({
  declarations: [
    AppComponent,
    SpinnerOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    OverlayModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: SpinnerInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
