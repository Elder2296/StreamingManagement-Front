import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
//localhost:4200/auth/
const routes: Routes =[
{
  path:'',//<-
  component: LayoutPageComponent,
  children:[
    { path:'login', component: LoginPageComponent},
    { path:'registro', component: RegisterPageComponent},
    { path:'**', redirectTo: 'login' } //si quiere ingresar a cualquier otro redigira                 
  ]                    
}                    
];

@NgModule(
{
declarations:[],
imports:[
RouterModule.forChild(routes)                    
],
exports:[
RouterModule                    
]
}
)
export class AuthRoutingModule{}