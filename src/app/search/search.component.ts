import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userName: string= "";
  response:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {

    
  }
  search(){
    let obs =  this.http.get('https://jsonplaceholder.typicode.com/todos/'+this.userName);
    obs.subscribe((response)=>{this.response=response;console.log(this.response)});
  }

}
