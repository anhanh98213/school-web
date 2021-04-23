import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { DAdminComponent } from './components/dashboard/d-admin/d-admin.component';
import { DManagerComponent } from './components/dashboard/d-manager/d-manager.component';
import { DLecturerComponent } from './components/dashboard/d-lecturer/d-lecturer.component';
import { DStudentComponent } from './components/dashboard/d-student/d-student.component';
import { AddMajorComponent } from './components/major/add-major/add-major.component';
import { AllMajorComponent } from './components/major/all-major/all-major.component';
import { EditMajorComponent } from './components/major/edit-major/edit-major.component';
import { DeleteMajorComponent } from './components/major/delete-major/delete-major.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    DAdminComponent,
    DManagerComponent,
    DLecturerComponent,
    DStudentComponent,
    AddMajorComponent,
    AllMajorComponent,
    EditMajorComponent,
    DeleteMajorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
