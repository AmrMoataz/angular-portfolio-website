import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceContactMeService } from '../service-contact-me.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 
  contactForm: FormGroup; 
  Error: string;
  Success: string; 
  constructor(private serviceContactMe: ServiceContactMeService,
              private fb:FormBuilder) {}

  ngOnInit(): void { 
    this.Error = '';
    this. Success = '';
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get name(){
    return this.contactForm.get('name');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get message(){
    return this.contactForm.get('message');
  }

  sendEmail() { 
    this.Error = '';
    this.Success = '';
    try {
      this.serviceContactMe.SendEmail(this.name.value, this.email.value, this.message.value).subscribe(data => {
        if(data == true)
        {
          this.contactForm.reset();
          this.Success = 'Email was sent successfully';
        }
        else{
          this.Error = 'Server Error';
        }
      }, error => {
        this.Error = error;
        console.log(this.Error)
      });
    } catch (error) {
      this.Error = error;
    }
    
  }

}
