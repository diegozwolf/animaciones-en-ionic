import { AnimationService, AnimationBuilder} from 'css-animator';
import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // simon angular animation
  animations: [
    trigger('myVisibility', [
      state('visible', style({
        opacity:1
      })),
      state('invisible',style({
        opacity: 0
      })),
      transition('* => *', animate('.5s'))
    ])
  ]
})
export class HomePage {
  visibleState = 'visible'
  private animator: AnimationBuilder;
  @ViewChild('myElement') myElem;
  @ViewChild('myButton',{read: ElementRef} ) myButton;
  @ViewChild('theSun') theSun;
  @ViewChild('Mountain') Mountain;

  constructor(public navCtrl: NavController, animationService: AnimationService, public renderer: Renderer) {
    this.animator = animationService.builder();
  }
  // simon animate.css
  animateElem(){
    this.animator.setType('rollOut').show(this.myElem.nativeElement)
  }
  // simon angular animation
  toggleVisible(){
    this.visibleState = (this.visibleState == 'visible') ? 'invisible' : 'visible';
  }
  changesStyle(){
    // this.renderer.setElementStyle(this.myButton.nativeElement, 'opacity', '0');
    // this.renderer.setElementStyle(this.myButton.nativeElement, 'padding', '50px');
    // this.renderer.setElementStyle(this.myButton.nativeElement, 'top', '0px');
    // this.renderer.setElementStyle(this.theSun.nativeElement, 'opacity', '0' );
    this.animator.setType('flipInX').show(this.theSun.nativeElement)
    this.renderer.setElementStyle(this.Mountain.nativeElement, 'width:', '110%')
  }
  changesStyleM(){
    this.animator.setType('bounceOut').show(this.Mountain.nativeElement)
  }
}
