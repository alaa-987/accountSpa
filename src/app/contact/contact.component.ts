import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  label : any ;
 showElement(eInfo:any){
   if(eInfo.target.value.length > 0){
    this.label = eInfo.target.previousElementSibling;
    this.label.classList.remove("opacity-0");
    this.label.classList.remove("animate__fadeOutDown");
    this.label.classList.add("animate__fadeInUp");
   }
   else{
    this.label = eInfo.target.previousElementSibling;
    this.label.classList.remove("animate__fadeInUp");
    this.label.classList.add("animate__fadeOutDown");
   }
 }
}
