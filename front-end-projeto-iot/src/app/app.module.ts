import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './registrar-usuario/register-user/register-user.component';
import { TermoDialogComponent } from './registrar-usuario/termo-dialog/termo-dialog.component';
import { LoginComponent } from './login/login.component';
import { InfoDashComponent } from './options/dashboard/info-dash/info-dash.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ComponentesComponent } from './options/componentes/componentes.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalConfiComponent } from './registrar-usuario/modal-confi/modal-confi.component';
import { ListDeviceComponent } from './options/list-device/list-device.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    TermoDialogComponent,
    LoginComponent,
    InfoDashComponent,
    SidebarComponent,
    ComponentesComponent,
    ModalConfiComponent,
    ListDeviceComponent,


  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatProgressBarModule,
    CommonModule,
    MatDatepickerModule,
    MatSelectModule,
    MatDatepickerModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatToolbarModule,
    FormsModule,
    MatTooltipModule,
    MatFormFieldModule ,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCheckboxModule,
    MatMenuModule,
    CommonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTooltipModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
