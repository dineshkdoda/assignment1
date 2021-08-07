import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { defer, NEVER } from 'rxjs';
import { finalize, share } from 'rxjs/operators';
import { SpinnerOverlayComponent } from '../components/spinner-overlay/spinner-overlay.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerOverlayService {
  isLoading = new Subject<boolean>();
    show() {
        this.isLoading.next(true);
    }
    hide() {
         this.isLoading.next(false);
    }
}