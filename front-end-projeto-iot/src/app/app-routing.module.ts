
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComponentesComponent } from './options/componentes/componentes.component';
import { InfoDashComponent } from './options/dashboard/info-dash/info-dash.component';
import { RegisterUserComponent } from './registrar-usuario/register-user/register-user.component';
import { ListDeviceComponent } from './options/list-device/list-device.component';

const routes: Routes = [
  {path: '', component:  InfoDashComponent},
  {path: 'LOGIN', component: LoginComponent},
  {path: 'dashboard', component: InfoDashComponent},
  {path: 'list-device', component: ListDeviceComponent},
  {path: 'registrar-usuario', component: RegisterUserComponent},
  {path: 'componentes', component: ComponentesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
