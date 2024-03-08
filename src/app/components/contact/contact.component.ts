import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent{
  contactForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _contactService: ContactService) {
    this.contactForm = this._formBuilder.group({
      firstName: _formBuilder.control('', Validators.required),
      lastName: _formBuilder.control('', Validators.required),
      email: _formBuilder.control('', [Validators.required, Validators.email]),
      subject:_formBuilder.control('', Validators.required),
      message: _formBuilder.control('', [Validators.required,Validators.minLength(10)]),
      attachement: _formBuilder.control('')
    })
  }

  /*
  * Sends an email via the contact form
  * */
  onSubmit(){
    if(this.contactForm.valid){
      this._contactService.sendContactForm(this.contactForm.value).subscribe(
        response => {
          console.log("Form submitted successfully", response);
        },
        error => {
          console.error("Error submitting form", error);
          // Handle form submission error (e.g., showing an error message)
        }
      )
    } else {
      console.log("Form not valid")
    }
  }
}
