import { Component, OnInit } from '@angular/core';
import { Employee, DataService } from '../services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    Employees: Employee[] = [];
    selection!: Employee;
    criteria = '';

    constructor(private readonly dataSVc: DataService) { }

    ngOnInit(): void {
        this.dataSVc.getEmployees()
        .subscribe( Employees => {
            this.Employees = [...Employees]
        })
    }


    updateEmployee(Employee: Employee):void {
        this.dataSVc.updateEmployee(Employee).subscribe( res => {
            const tempArray = this.Employees.filter(item => item.employeeid != Employee.employeeid);
            this.Employees = [...tempArray, Employee];
            this.onClear();
        })

    }

    addNewEmployee(Employee: string): void {
        // this.Employees.push(Employee);
        this.dataSVc.addNewEmployee(Employee).subscribe( res => {
            this.Employees.push(res)
        });
    }

    onEmployeeSelected(Employee: Employee): void {
        console.log("Employee -> ", Employee);
        this.selection = Employee;
    } 

    onEmployeeDelete(id: number): void {
        console.log('id', id);
        if (confirm('Are you sure?')){
            this.dataSVc.deleteEmployee(""+id).subscribe( () => {
                const tempArray = this.Employees.filter(Employee => Employee.employeeid != id);
                this.Employees = [...tempArray];
                this.onClear();
            });
        }
    }

    onClear(): void {
        this.selection = {
            employeeid: 0,
            lastname: '',
            firstname:''
        };
    }

}
