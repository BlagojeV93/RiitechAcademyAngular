import { Component, OnInit } from '@angular/core';
import { TeacherProfileService } from '../../services/teacher-profile.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  editTeacherProfile = [];

  constructor(private teacherService: TeacherProfileService) { }

  ngOnInit() {
    this.getTeacher();
  }

  getTeacher(): void {
    this.teacherService.getTeacher()
      .subscribe(teacherProfile => {this.editTeacherProfile = teacherProfile; console.log(this.editTeacherProfile)});
}

}