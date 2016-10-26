import {Directive, AfterViewInit, ElementRef, DoCheck, Renderer} from '@angular/core';

@Directive({ selector: '[myAutofocus]' })
export class MyAutofocusDirective implements AfterViewInit, DoCheck {
    private wasFocused: boolean = false;

    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngAfterViewInit() {
        this.ngDoCheck();
    }

    ngDoCheck() {
        if (!this.wasFocused) {
            setTimeout(() => {
                this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
                this.wasFocused = true;
            }, 1);
        }
    }
}
