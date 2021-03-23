import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';




export class Name {
  constructor(

  public name : string
 

  ){

  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  name:Name[];

  constructor(
    private httpClient : HttpClient
  ){

  }

  ngOnInit():void{
   this.getName();
  }


  getName(){
    this.httpClient.get<any>('http://localhost:3000/').subscribe(
    response => {
      console.log(response);
      this.name = response;
    }
    );
  }
}


