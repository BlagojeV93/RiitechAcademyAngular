import { Component, OnInit } from '@angular/core';
import { TeacherProfileService } from '../../services/teacher-profile.service';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.scss']
})
export class TeacherProfileComponent implements OnInit {
  teacherProfile = [];

  constructor(private teacherService: TeacherProfileService) { }

  ngOnInit() {
    this.getTeacher();
  }

  getTeacher(): void {
    this.teacherService.getTeacher()
      .subscribe(teacherProfile => {this.teacherProfile = teacherProfile; console.log(this.teacherProfile)});
}

}