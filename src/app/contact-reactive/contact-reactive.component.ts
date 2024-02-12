import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})

export class ContactReactiveComponent implements OnInit {
  //departments = ["Marketing", "Sales", "Other"]
  departments: string[] = [];
  contactForm!: FormGroup;
  name!: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['deptos'];
    this.route.queryParams.subscribe((params: Params) => {
      this.name = params['name'];
    });
    this.contactForm = this.initForm();
    this.onPathValue();
    //this.onsetValue();

  }

  onPathValue(): void {
    this.contactForm.patchValue({ checkAdult: true });
  }

  onSubmit(): void {
    console.log('Form -> ', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.pattern("[a-zA-ZñÑ .]*")]],
      checkAdult: [false, [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]],
    });
  }
}
