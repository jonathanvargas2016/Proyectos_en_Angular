import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStrike]'
})
export class StrikeDirective implements OnInit{

  @Input() appStrike: boolean = false;
  observer = new MutationObserver(() => this.styleCustom('none'))
  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
   this.styleCustom("none")
   this.observer.observe(this.element.nativeElement, {
    attributeFilter: ["ng-reflect-app-strike"]
   })
  }

  @HostListener("mouseenter")
  addLine() {
    this.styleCustom("line-through")
  }

  @HostListener("mouseleave")
  removeLine() {
    this.styleCustom("none")
  }

  styleCustom(value: string){

    if(this.appStrike){
      return
    }

    this.renderer.setStyle(this.element.nativeElement, 'textDecoration', value);

  }

}
