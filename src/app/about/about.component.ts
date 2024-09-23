import { Component } from '@angular/core';
export interface student{
  id:string,
  name:string,
  address:string,
  email:string
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  students: student[]=[
    {id:'1',name:'kamal',address:'matugama',email:'kamal@gmail.com'},
    {id:'2',name:'nimal',address:'jaffna',email:'nimal@gmail.com'},
    {id:'3',name:'bimal',address:'kalurtara',email:'bimal@gmail.com'},
    {id:'4',name:'saman',address:'kalutara',email:'saman@gmail.com'}
  ];
}
