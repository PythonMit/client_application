import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppUser } from 'Model/AppUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dating app';
  user:AppUser [] | any;
  
  constructor(private http:HttpClient){
   
  }
  ngOnInit(): void {
  this.http.get('https://localhost:7110/api/User').subscribe({
    next: response => this.user=response,
    error:error =>console.error(error),
    complete:()=> console.log(this.user)
  });
   //throw new Error('Method not implemented.');
  }

}
