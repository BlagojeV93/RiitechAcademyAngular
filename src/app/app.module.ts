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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { TeacherProfileComponent } from './TeacherViews/teacher-profile/teacher-profile.component';
import { EditCourseComponent } from './TeacherViews/edit-course/edit-course.component';
import { EditProfileComponent } from './TeacherViews/edit-profile/edit-profile.component';
import { TeacherProfileService } from './services/teacher-profile.service'; 

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
    SignupComponent,
    TeacherProfileComponent,
    EditCourseComponent,
    EditProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    TeacherProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
