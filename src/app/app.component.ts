import {Injectable} from '@angular/core';
import { Component} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
interface UserResponse {
	login: string,
	bio: string,
	company: string
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
   
}