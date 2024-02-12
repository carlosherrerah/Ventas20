import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../services/data.service';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {
  @Input() className="btn-primary";
  @Input() label!: string;
  @Input() selection!:Employee;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() updateItemEvent = new EventEmitter<Employee>();

  onAddNewItem(item: string): void {
    this.newItemEvent.emit(item);
  }

  onUpdateItem(item: Employee, change: string ): void {
    // console.log('item', item);
    // console.log('change', change);
    const Employee: Employee = {
        employeeid: item.employeeid,
        lastname: change,
        firstname: item.firstname
    };
    this.updateItemEvent.emit(Employee);
  }

}
