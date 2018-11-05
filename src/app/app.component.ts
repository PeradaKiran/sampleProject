import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private http:HttpClient){

  }
  ngOnInIt(){
    let obs =  this.http.get('https://jsonplaceholder.typicode.com/todos/');
    obs.subscribe(()=>console.log("got the response"));
  }
}
