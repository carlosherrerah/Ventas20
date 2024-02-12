import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "../services/data.service";

@Pipe({
    name: 'filter',
})


export class FilterPipe implements PipeTransform {

    transform(Employees: Employee[], arg: string): Employee[] {
        if (!arg || arg.length<3) return Employees;
        let result:Employee[]= [];
        for (const Employee of Employees) {
            if (Employee.lastname.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                result =[...result, Employee];
            }
        }
        return result;
    }

}

