import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBoderColor]'
})
export class BoderColorDirective {

  constructor(private el: ElementRef ) { 
    console.log('el', el);
    el.nativeElement.style.color = 'red';
    el.nativeElement.style.border = '2px solid green';
    console.log(el.nativeElement);

    
  }

}
