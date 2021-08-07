import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { SpinnerOverlayService } from '../services/spinner-overlay.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(public spinnerOverlayService: SpinnerOverlayService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const spinnerSubscription: Subscription = this.spinnerOverlayService.spinner$.subscribe();
    // return next.handle(req).pipe(finalize(() => spinnerSubscription.unsubscribe()));
     this.spinnerOverlayService.show();
     return timer(1000).pipe(switchMap( () =>next.handle(req).pipe(finalize(() => this.spinnerOverlayService.hide()))));
  }
}