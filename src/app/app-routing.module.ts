import { HomeComponent } from './modules/Note/components/home/home.component';
import { LoginComponent } from './modules/Login/components/login/login.component';
import { RegisterComponent } from './modules/Register/components/register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './modules/Note/components/note/note.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent},
  {path: 'home',component:HomeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
