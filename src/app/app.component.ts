import { Component } from '@angular/core';
import { trigger, query, transition, style, animate, state, group } from '@angular/animations';
import { AnimationsService } from './common/animations.service';

import { slideToLeft, slideToRight, slideToTop, slideToBottom } from './common/animations';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeTransition', [
      transition("* => slideToLeft", slideToLeft),
      transition("* => slideToRight", slideToRight),
      transition("* => slideToTop", slideToTop),
      transition("* => slideToBottom", slideToBottom),
      transition("* => slideToLeftDuplicate", slideToLeft),
      transition("* => slideToRightDuplicate", slideToRight),
      transition("* => slideToTopDuplicate", slideToTop),
      transition("* => slideToBottomDuplicate", slideToBottom),
    ])
  ],
})
export class AppComponent {

  title = 'MSETU';
  constructor(private animSRVC: AnimationsService) {

  }
    getAnimation() {
    console.log(this.animSRVC.getCurrentAnimation());
    return this.animSRVC.getCurrentAnimation();
  }

}



