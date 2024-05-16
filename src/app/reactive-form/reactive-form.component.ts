import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateUrl } from '../shared/Validators/url.validate';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
    // this.patchValues();
  }

  buildForm() {
    this.myForm = this.fb.group({
      name: ['John Doe'],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      websiteUrl: ['', [Validators.required, ValidateUrl]]      
    });
  }

  onSubmit() {
    // this.myForm.value has  json format
    console.log('Valid?', this.myForm.valid); // true or false
    console.log('Name', this.myForm.value.name);
    console.log('Email', this.myForm.value.email);
    console.log('Message', this.myForm.value.message);
    console.log('Website URL', this.myForm.value.websiteUrl);
  }

  onReset() {
    this.myForm.reset();
  }

  patchValues() { 
    var data = {
      name: 'John Doe',
      email: 'aniruddha291@gmail.com',
      message: 'Patch data',
      websiteUrl: ''
    }
    this.myForm.patchValue(data);
  }

  onAddMobileNumber() {
    this.addControl();
    this.onAddValidators();
  }

  onRemoveMobileNumber() {
    this.removeControl();
    // this.onRemoveValidators();
  }

  addControl() {
    this.myForm.addControl('mobileNo', this.fb.control('', Validators.required));
  }

  removeControl() {
    this.myForm.removeControl('mobileNo');
  }

  onAddValidators() {
    this.myForm.controls['mobileNo'].setValidators([Validators.minLength(10), Validators.maxLength(10)]);

    this.myForm.controls['mobileNo'].updateValueAndValidity();
  }

  onRemoveValidators() {
    this.myForm.controls['mobileNo'].setValidators(null);
    // this.myForm.controls['mobileNo'].clearValidators();

    this.myForm.controls['mobileNo'].updateValueAndValidity();
  }
}
