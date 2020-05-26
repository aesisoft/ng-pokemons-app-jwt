import { Directive, ElementRef, HostListener, Input } from '@angular/core';
 
@Directive({
  selector: '[pkmnBorderCard]'  //selecteur Css pour le Html
})
export class BorderCardDirective {
    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#009688';
    @Input('pkmnBorderCard') borderColor: string; 

    //à l'instanciation, applique les valeurs par défaut
    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.initialColor);
    }
 
    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }
}