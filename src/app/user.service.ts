import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {Http} from '@angular/http';

@Injectable()
export class UserService {
  private isUserLoggedIn;
  private username;
  configURL = 'https://iostest.bixly.com.';
  constructor() { 
  this.isUserLoggedIn = false;
  }
  
  setUserLoggedIn(){
	  
	  this.isUserLoggedIn = true;
	  
  }
  getUserLoggedIn(){
	  return this.isUserLoggedIn;
  }
  
 
}
