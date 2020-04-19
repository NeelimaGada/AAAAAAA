import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationsService } from '../common/animations.service';
import { AppConstants } from '../common/app-constants';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private animSRVC:AnimationsService) { }
  
  gotoLOGIN() {
    this.animSRVC.slideToLEFT();
    this.router.navigateByUrl(AppConstants.pathSYDENY);
  }
  gotoREGISTRATION() {
    this.animSRVC.slideToLEFT();
    this.router.navigateByUrl(AppConstants.pathREGISTRATION);
  }
  gotoCONTACT(){
    this.animSRVC.slideToLEFT();
    this.router.navigateByUrl(AppConstants.pathCONTACT);
  }
    gotoCONFERENCE() {
      this.animSRVC.slideToLEFT();
      this.router.navigateByUrl(AppConstants.pathCONFERENCE)

    }
  ngOnInit(): void {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  // navigateToHome(){
  //   this.ro.navigate("")
  // }
}
