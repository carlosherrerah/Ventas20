import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
// Template driven form

interface ContactForm {  // En que momento se usa?
  "name": string;
  "checkAdult": boolean;
  "department": string;
  "comment": string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  id!:string;
  departments = ["Marketing", "Sales", "Other"]
  model = {
    name: '',
    checkAdult: false,
    department: '',
    comment: ''
  }
  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.params.subscribe((params:Params) => {
      this.id = params['id']
    })
  }
 
  onSubmit(form: NgForm): void {
    console.log('Form values', form.value);
  }
  
}
