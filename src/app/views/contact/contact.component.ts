import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup = new FormGroup({})
  constructor(private fb: FormBuilder) { }


  ngOnInit():void {
    this.contactForm = this.fb.group({

      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      subject: new FormControl('', [Validators.required, Validators.minLength(3)]),
      message: new FormControl('', [Validators.required, Validators.minLength(11)]),
      checkbox: new FormControl('', Validators.required) 
    })

  }

  get name() { return this.contactForm.get('name') as FormControl  } 
  get email() { return this.contactForm.get('email') as FormControl  } 
  get subject() { return this.contactForm.get('subject') as FormControl  } 
  get message() { return this.contactForm.get('message') as FormControl  } 
  get checkbox() { return this.contactForm.get('checkbox') as FormControl  } 

  
  onSub() {
      console.log(this.contactForm.valid) 
  }

}
