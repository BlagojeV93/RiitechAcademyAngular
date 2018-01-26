import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from  './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin-views/admin/admin.component';
import { AdminCarouselComponent } from './admin-views/admin-carousel/admin-carousel.component';
import { AdminCoursesComponent } from './admin-views/admin-courses/admin-courses.component'
import { AdminUsersComponent } from './admin-views/admin-users/admin-users.component';
import { CoursesNewComponent } from './admin-views/courses-new/courses-new.component';
import { CoursesEditComponent } from './admin-views/courses-edit/courses-edit.component';
import { UserEditComponent } from './admin-views/user-edit/user-edit.component';
import { CarouselNewComponent } from './admin-views/carousel-new/carousel-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/courses', component: AdminCoursesComponent },
  { path: 'admin/users', component: AdminUsersComponent },
  { path: 'admin/carousel', component: AdminCarouselComponent },
  { path: 'courses/new', component: CoursesNewComponent },
  { path: 'admin/courses/edit', component: CoursesEditComponent },
  { path: 'admin/users/edit', component: UserEditComponent },
  { path: 'admin/carousel/new', component: CarouselNewComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }
