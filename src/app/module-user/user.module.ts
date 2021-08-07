import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import { SplitNamePipe } from '../shared/filters/split-name.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CdkAccordionModule} from '@angular/cdk/accordion';


@NgModule({
  declarations: [
    UserComponent,
    SplitNamePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    CdkAccordionModule
  ]
})
export class UserModule { }
