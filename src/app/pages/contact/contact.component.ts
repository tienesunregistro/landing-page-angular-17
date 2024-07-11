import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  
  contactForm!: FormGroup;  // con la admiración nos comprometemos a que nunca va a ser nulo

  constructor(private formBuilder: FormBuilder){
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]]

    });
  }
  ngOnInit(): void {
    
  }

  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm);
  }

  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

}
