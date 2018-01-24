import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  courses: Course[];
  constructor(private coursesService: CoursesService){}

  ngOnInit() {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.coursesService.getAllCourses()
      .subscribe(courses => this.courses = courses);
  }
}
