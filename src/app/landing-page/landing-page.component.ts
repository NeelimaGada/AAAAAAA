import { Component, OnInit } from '@angular/core';
import { AnimationsService } from '../common/animations.service';
import { AppConstants } from '../common/app-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

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
    
  }
  
}
