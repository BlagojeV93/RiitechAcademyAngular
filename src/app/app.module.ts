import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { AppRoutingModule } from './/app-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

import { HttpModule } from '@angular/http';
import { MyDataService } from './my-data.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CoursesComponent,
    CarouselComponent,
    CourseCardComponent,
    CourseDetailsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
