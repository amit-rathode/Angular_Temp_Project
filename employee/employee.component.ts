import { Component, input } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  inputs:['PData'],
    
})
export class EmployeeComponent {
PData:any;

// pcomponent2:any;
  
}
