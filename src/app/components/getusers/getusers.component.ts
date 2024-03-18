import { Component, Input, OnInit } from '@angular/core';
import { AppUser } from 'Model/AppUser';

@Component({
  selector: 'app-getusers',
  templateUrl: './getusers.component.html',
  styleUrls: ['./getusers.component.scss']
})
export class GetusersComponent implements OnInit{
@Input() user:AppUser [] |any;

constructor(){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
}
