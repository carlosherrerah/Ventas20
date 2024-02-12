import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Employee {
  employeeid: number;   //  _id: string;
  lastname: string;
  firstname: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly API = environment.api;

  constructor(private readonly http: HttpClient) { }

  addNewEmployee(Employee: string): Observable<Employee> { // Insert Post
    const body = {lastname:Employee}
    return this.http.post<Employee>(this.API, body);
  }

  getEmployees(): Observable<Employee[]> { // Select Get
    return this.http.get<Employee[]>(this.API);
  }

  updateEmployee(Employee: Employee): Observable<void> { // Update Put    // backstage = ` ` = acento grave
    const body = {lastname: Employee.lastname}
    return this.http.put<void>(`${this.API}/${Employee.employeeid}`, body); 
  }

  deleteEmployee(id: string): Observable<void> { // Delete Delete
    return this.http.delete<void>(`${this.API}/${id}`);
  }

}
