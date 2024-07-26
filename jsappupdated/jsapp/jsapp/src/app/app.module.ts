import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginpage/loginpage.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { JobseekerModule } from './jobseeker/jobseeker.module';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderInterceptor } from './header.interceptor';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ListComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JobseekerModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:HeaderInterceptor, multi:true}],
  bootstrap: [AppComponent],
  

  
})
export class AppModule {httpuse=HttpClient;}
