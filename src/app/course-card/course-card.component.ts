import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../my-data.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  courses = [];
  constructor(private newService: MyDataService){}

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.newService.getCourses()
        .subscribe(courses => this.courses = courses);
  }
}
