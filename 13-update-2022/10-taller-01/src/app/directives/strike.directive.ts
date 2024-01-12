import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStrike]'
})
export class StrikeDirective implements OnInit{

  @Input() appStrike: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
   
    if(this.appStrike){
      this.styleCustom("line-through")
    }

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
    this.renderer.setStyle(this.element.nativeElement, 'textDecoration', value);

  }

}
