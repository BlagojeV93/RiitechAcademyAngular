import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.scss']
})
export class AdminCoursesComponent implements OnInit {
  adminCourses = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getAdminCourses();
  }

  getAdminCourses(): void {
    this.adminService.getAdminCourses()
    .subscribe(adminCourses => this.adminCourses = adminCourses);
  }

}
