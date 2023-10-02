import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgPath : any;
 viewImg(eInfo:any){
  // console.log(eInfo.target.previousElementSibling.firstElementChild.src);
  this.imgPath = eInfo.target.previousElementSibling.firstElementChild.src;
  document.querySelector(".popUp")?.classList.remove("d-none");
  document.querySelector(".popUp")?.classList.add("d-flex");
 }
 removeImg(eInfo:any){
  // console.log(eInfo.target.src)
  if(eInfo.target.src == undefined){
    document.querySelector(".popUp")?.classList.add("d-none");
  }
 }
}
