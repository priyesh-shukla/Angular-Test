import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  { "path": "", component: LoginComponent },
  { "path": "register", component: RegisterComponent},
  { "path": "user-list", component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
