import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      input1: new FormControl(null, Validators.required),
      input2: new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
    console.log(this.myForm);
  }

  get formInput(): FormGroup {
    return this.myForm.get('input2') as FormGroup;
  }

  onAddForm() {
    const ctrl = new FormControl(null, Validators.required);
    (<FormArray>this.myForm.get('input2')).push(ctrl);
  }

  onRmForm(index: number) {
    (<FormArray>this.myForm.get('input2')).removeAt(index);
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  onClear() {
    this.myForm.reset();
  }
}
