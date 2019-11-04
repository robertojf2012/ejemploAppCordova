import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiProvider Provider');
  }

  getUsers(){
    return this.http.get(`https://jsonplaceholder.typicode.com/users`,{
      headers: {
        'content-Type'  : 'application/json',
        'Accept'        : 'application/json'
      }
    })
  }

	createUser(name:string, movies:string[]){    
    let infoData = {
      "name":name,
      "movies": movies
    };
    return this.http.post(`https://reqres.in/api/users`, infoData, {
      headers:{
        'content-Type'  : 'application/json',
        'Accept'        : 'application/json'
      }
    });
	}
}
