import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse ,HTTP_INTERCEPTORS } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  valmsg:string= "";
  msgtitle:string= "";
  msgreci: string = "";
  arr = [];
  title = 'app';
  data:any= {};
  member: any =[];
  varr:string="test";
  rmsg:any = [];
  pmsg:any = [];
  papimsg = {
	  title: "",
	  body: "",
	  receiver: "",
	 
  }
  nmsg:string = "";
  errmsg:string = "Enter Valid Data";
  
  constructor(private http: HttpClient,private user: UserService) { }
  
 
  ngOnInit():void{
	const reqq= this.http.post('https://iostest.bixly.com/api-token-auth/', {
		  "username": "test",
		  "password":"test123!"
	  }).subscribe(
	  respo =>{
		  console.log(respo);  
  })
   const reqqqq = this.http.get('https://iostest.bixly.com/messages/', 
		    
	  ).subscribe(
	  respoo =>{
		  this.rmsg =  respoo;
		  console.log(respoo);
		 
	  })	  
}
 disp(){
	if (this.papimsg.receiver == "tomk" && this.papimsg.body != ""){
	  this.pmsg.push(this.papimsg.body);
	 
	}
     else{
	 alert(this.errmsg);
    }	
	 
 } 
  removemsg(i){
  this.rmsg.splice(i,1); 
  this.http.delete('https://iostest.bixly.com/messages/'+ this.rmsg[i].id).subscribe(data => console.log(data));
	
  }
  delmsg(j)
  {
	  this.pmsg.splice(j,1);
	  
  }

}
