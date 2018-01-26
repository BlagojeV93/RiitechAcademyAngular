import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {

  teacher = "";
  

//  adminUsers = [];

//test json
  adminUsers = [{
    "_id": "5a5cc60c7facd14254714acb",
    "email": "tbd@tbd.com",
    "username": "tbd",
    "__v": 5,
    "courses": [
    "5a5cc64e7facd14254714acd",
    "5a5dca0e6b9b2d14d403039f",
    "5a5de442b787ff2467f7d57d",
    "5a5dee75628dcd5090a4b881",
    "5a69d6b3163ecb0cbb692d53"
    ],
    "type": "teacher",
    "image": "http://via.placeholder.com/250x200"
    },
    {
    "_id": "5a5ddead38f65725e87257ab",
    "email": "mar@mar.com",
    "username": "mar",
    "__v": 1,
    "lastName": "Narkovic",
    "firstName": "Narko",
    "courses": [
    "5a5cc64e7facd14254714acd"
    ],
    "type": "student",
    "image": "http://via.placeholder.com/250x200"
    },
    {
    "_id": "5a66f579ef41cd11365b4d8f",
    "email": "sujdo@gmail.com",
    "username": "sujdo",
    "__v": 0,
    "courses": [],
    "type": "student",
    "image": "http://via.placeholder.com/250x200"
    },
    {
    "_id": "5a67a1ca9a27882998ecd3e5",
    "email": null,
    "username": "vucko",
    "__v": 2,
    "firstName": "Marko",
    "lastName": "",
    "courses": [
    "5a5dca0e6b9b2d14d403039f",
    "5a5cc64e7facd14254714acd"
    ],
    "type": "student",
    "image": "http://via.placeholder.com/250x200"
    },
    {
    "_id": "5a6889d5438b0c3a4e2da4f0",
    "email": "test",
    "username": "test",
    "__v": 0,
    "courses": [],
    "type": "student",
    "image": "http://via.placeholder.com/250x200"
    },
    {
    "_id": "5a688a91438b0c3a4e2da4f1",
    "email": "blagoje",
    "username": "blagoje",
    "__v": 0,
    "courses": [],
    "type": "student",
    "image": "http://via.placeholder.com/250x200"
    },
    {
    "_id": "5a69cea9163ecb0cbb692d4b",
    "email": "admin1",
    "username": "admin1",
    "__v": 0,
    "courses": [],
    "type": "student",
    "image": "http://via.placeholder.com/250x200"
    },
    {
    "_id": "5a69cec6163ecb0cbb692d4d",
    "email": "admin1566",
    "username": "admin155",
    "__v": 0,
    "courses": [],
    "type": "student",
    "image": "http://via.placeholder.com/250x200"
    },
    {
    "_id": "5a69cef3163ecb0cbb692d50",
    "email": "dsad",
    "username": "sujdo12",
    "__v": 0,
    "courses": [],
    "type": "student",
    "image": "http://via.placeholder.com/250x200"
    },
    {
    "_id": "5a69cf15163ecb0cbb692d52",
    "email": "nesto@nesto",
    "username": "sujdo12544kjo",
    "__v": 0,
    "courses": [],
    "type": "student",
    "image": "http://via.placeholder.com/250x200"
    },
    {
    "_id": "5a69d9fc163ecb0cbb692d54",
    "email": "blaja@asd",
    "username": "blaja",
    "__v": 0,
    "courses": [],
    "type": "student",
    "image": "http://via.placeholder.com/250x200"
    }];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
   // this.getAdminUsers();
  }

  getAdminUsers(): void {
    this.adminService.getAdminUsers()
    .subscribe(adminUsers => this.adminUsers = adminUsers);
  }

}
