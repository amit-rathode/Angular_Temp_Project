import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

class abc{
  constructor(){
    console.log('constructor called becoz we created object of abc  class and using viewprovider we injected in App co..nt class ');
  }
  show(){
    console.log('method also called using the object')
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,EmployeeComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  viewProviders:[abc]
})

export class AppComponent {
  title = 'temp_project5';
  mycountry='pakistan';
  constructor(private _abc:abc){
    console.log('constructor called without creating object of theclass')
    
    _abc.show();
  }

  employee :any[]=[
    {id:100, name:"chandan kumar"},
    {id:101, name:"vaibhav kumar"},
    {id:102, name:"abhi kumar"},
    {id:103, name:"nayan kumar"},
    {id:104, name:"manu kumar"},
    {id:105, name:"manoj kumar"},
  ]

  
  onChange(){
    console.log("i got fired");
  }

  onChange2(){
    console.log('i too got fired');
  }

  name ="chandan kumar";

keyup(){
  console.log('key up got fired');
}

keydown(){
  console.log('key up got fired');
}



onClick(val:any){
  this.name=val;
}

/*
@HostListener('click',['$event'])
display(){
  alert('How are you ');
}

*/

_message="hello welcome";


}