import { Component, OnInit } from '@angular/core'; 
import { ServiceContactMeService } from '../service-contact-me.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  email: string = '';
  message: string = '';
  constructor(private serviceContactMe: ServiceContactMeService) { }

  ngOnInit(): void {
  }

  sendEmail(email, message, name)
  {
    if(email != '' && message != '' && name != '')
    { 
      this.serviceContactMe.SendEmail(name, email, message);
    }
  }

}
