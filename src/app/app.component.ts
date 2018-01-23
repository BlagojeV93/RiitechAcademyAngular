import { Component } from '@angular/core';
// import { MyDataService } from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // constructor(private newService: MyDataService){}

  ngOnInit(){
    // this.newService.fetchData();
  }
}
