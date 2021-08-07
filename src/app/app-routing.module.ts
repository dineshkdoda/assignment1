import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './module-user/user/user.component';

const routes: Routes = [
  { path: "", component: UserComponent, pathMatch: "full" },
  { path: "user/:id", component: UserComponent, pathMatch: "full" },
  // otherwise redirect to home
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
