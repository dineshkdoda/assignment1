import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {SpinnerOverlayService} from '../../services/spinner-overlay.service';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss']
})
export class SpinnerOverlayComponent implements OnInit {

  constructor(private spinnerService: SpinnerOverlayService) { }

  isLoading: Subject<boolean> = this.spinnerService.isLoading;

  ngOnInit(): void {
  }

}
