import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from  './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TeacherProfileComponent } from './TeacherViews/teacher-profile/teacher-profile.component';
import { EditCourseComponent } from './TeacherViews/edit-course/edit-course.component';
import { EditProfileComponent } from './TeacherViews/edit-profile/edit-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'teacher-profile', component: TeacherProfileComponent },
  { path: 'teacher-edit-course', component: EditCourseComponent },
  { path: 'teacher-edit-profile', component: EditProfileComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
