import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  valuser:string = '';
  valpass:string = '';
 
  constructor(private router: Router, private user:UserService) { }

  ngOnInit() {
  }
   validUser(){
	  if (this.valuser == 'test' && this.valpass == 'test123!'){	 
           this.user.setUserLoggedIn();	  
		   this.router.navigate(['dashboard']);
	   } 
	  else {
		  alert("Enter Valid User Id and Password");
	  }
   }
  }

