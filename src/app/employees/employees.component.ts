import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../services/data.service';

@Component({  // backstage = ` `
  selector: 'app-Employees',
  template: `
  <ul class="list-group">
    <li class="list-group-item mt-1" (click)="OnEmployeeSelected(Employee)"
        [ngClass]="{'active': Employee?.employeeid==selection?.employeeid}">
        {{ Employee?.employeeid }} :
        {{ Employee?.lastname | titlecase }} ,
        {{ Employee?.firstname | titlecase }}
          <button 
          *ngIf="Employee?.employeeid==selection?.employeeid"
          type="button" 
          class= "btn btn-danger float-end"
          (click) = "OnEmployeeDelete(Employee.employeeid)"
          >Delete</button>
    </li>
  </ul>
  <!-- <p>Counter: {{counterRender()}}</p> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class EmployeesComponent {
  @Input() Employee!: Employee;
  @Input() selection!: Employee;
  @Output() EmployeeSelectedEvent = new EventEmitter<Employee>();   // evento personalizado
  @Output() EmployeeDeleteEvent = new EventEmitter<number>();

  OnEmployeeSelected(Employee: Employee): void {
    this.EmployeeSelectedEvent.emit(Employee);
  }

  OnEmployeeDelete(id: number): void {
    this.EmployeeDeleteEvent.emit(id);
  }

  /*
  counterRender(): boolean{
    console.log("Render Employees");
    return true;
    
  }
  */
}
