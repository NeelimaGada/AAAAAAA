import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    //jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches
var curind =0;
var nxtind=1;
var currentid=1;
var field="#field";
$(".next").click(function(){
    curind=curind+1;
    nxtind=nxtind+1;
    currentid=currentid+1;
	if(animating) return false;
	animating = true;
    this.curidname=field+curind;
    this.nxtidname=field+nxtind;
    // current_fs=$( "fieldset" ).get( 0 );
	// next_fs=$( "fieldset" ).get( 1 );
    // alert(next_fs.attributes.id)
	current_fs = $(this.curidname).parent();
	next_fs = $(this.nxtidname).parent();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
    current_fs.hide();
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			// scale = 1 - (1 - now) * 0;
			//2. bring next_fs from the right(50%)
			left = (now * 5)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({
				// 'left': left,
			 'opacity': opacity});
		}, 
		duration: 500, 
		complete: function(){
			
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	// if(animating) return false;
	// animating = true;
	
	// current_fs = $(this).parent();
	// previous_fs = $(this).parent().prev();
	curind=curind-1;
    nxtind=nxtind-1;
	if(animating) return false;
	animating = true;
    this.curidname=field+currentid;
    this.previousidname=field+nxtind;
    // current_fs=$( "fieldset" ).get( 0 );
	// next_fs=$( "fieldset" ).get( 1 );
    // alert(next_fs.attributes.id)
	current_fs = $(this.curidname).parent();
	// next_fs = $(nxtidname).parent();
    previous_fs=$(this.previousidname).parent();
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
    current_fs.hide();
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			// scale = 0.8 + (1 - now) * 0;
			//2. take current_fs to the right(50%) - from 0%
			// left = ((1-now) * 5)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			
			current_fs.css({
                'transform': 'scale('+scale+')',
                'position': 'absolute'
                 });
            previous_fs.css({
				'left': left ,
				'opacity': opacity});
		}, 
		duration: 500, 
		complete: function(){
			
			animating = false;
            currentid=currentid-1;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})



  }

}
