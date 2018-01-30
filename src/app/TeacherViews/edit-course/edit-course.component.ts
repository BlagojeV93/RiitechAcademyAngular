import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { NgModel } from '@angular/forms';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  editCourse = [];
  name = '';
  code = '';
  imageUrl = '';
  description = '';

  constructor(private coursesService: CoursesService, private http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCourseDetails();
  }

  getCourseDetails(): void {
    this.coursesService.getCourseDetails()
      .subscribe(course => this.editCourse = course);
  }

  editCourseSend() {
    console.log("radi");
    this.http.put(this.getJson(), {name:this.name, code:this.code, imageUrl:this.imageUrl, description:this.description}).subscribe(res => console.log(res.json()));
  }

  getJson(): string {
    let paramId = this.route.snapshot.queryParams["id"];
    return 'http://192.168.0.13:3000/v1/courses/' + paramId;
  }  
}
