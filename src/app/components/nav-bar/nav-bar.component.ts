import {AfterViewInit, Component, Input, ViewChild, ElementRef, Renderer2, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {
  SideClass = 'navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar';
  @Input() containerInside = true;
  shown = false;

  public height: number;
  public duration = 350; // ms

  public collapse = false;
  public showClass = false;
  public collapsing = false;

  @ViewChild('navbar') el: ElementRef;
  @ViewChild('mobile') mobile: ElementRef;
  @ViewChild('nav') navbar: ElementRef;
  @ViewChild('container') container: ElementRef;

  constructor(public renderer2: Renderer2) {}

  ngAfterViewInit() {
    /* bugfix - bez tego sypie ExpressionChangedAfterItHasBeenCheckedError -
    https://github.com/angular/angular/issues/6005#issuecomment-165951692 */
    setTimeout(() => {
      this.height = this.el.nativeElement.scrollHeight;
      this.collapse = true;

      if (!this.containerInside) {
        const childrens = Array.from(this.container.nativeElement.children);
        childrens.forEach(child => {
          this.navbar.nativeElement.append(child);

          this.container.nativeElement.remove();
        });

      }

      if (this.el.nativeElement.children.length === 0) {
        this.el.nativeElement.remove();
      }
    });
  }

  toggle(event: any) {
    event.preventDefault();
    if (!this.collapsing) {
      if (this.shown) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  show() {
    this.shown = true;
    this.collapse = false;
    this.collapsing = true;
    setTimeout(() => {
      this.renderer2.setStyle(this.el.nativeElement, 'height',  this.height + 'px');
    }, 10);


    setTimeout(() => {
      this.collapsing = false;
      this.collapse = true;
      this.showClass = true;
    }, this.duration);
  }

  hide() {
    this.shown = false;
    this.collapse = false;
    this.showClass = false;
    this.collapsing = true;
    setTimeout(() => {
      this.renderer2.setStyle(this.el.nativeElement, 'height',  '0px');
    }, 10);


    setTimeout(() => {
      this.collapsing = false;
      this.collapse = true;
    }, this.duration);
  }

  get displayStyle() {
    // if(!this.containerInside) {
    //  return 'flex';
    // } else {
    return '';
    // }
  }

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    let breakpoint = 0;

    if ( this.SideClass.includes('navbar-expand-xl') ) {
      breakpoint = 1200;
    } else if (this.SideClass.includes('navbar-expand-lg')) {
      breakpoint = 992;
    } else if (this.SideClass.includes('navbar-expand-md')) {
      breakpoint = 768;
    } else if (this.SideClass.includes('navbar-expand-sm')) {
      breakpoint = 576;
    } else {
      breakpoint = event.target.innerWidth + 1;
    }

    if (event.target.innerWidth < breakpoint) {
      if (!this.shown) {
        this.collapse = false;
        this.renderer2.setStyle(this.el.nativeElement, 'height',  '0px');
        this.renderer2.setStyle(this.el.nativeElement, 'opacity',  '0');
        setTimeout(() => {
          this.height = this.el.nativeElement.scrollHeight;
          this.collapse = true;
          this.renderer2.setStyle(this.el.nativeElement, 'opacity', '1');
        }, 4);
      }
    } else {
      this.collapsing = false;
      this.shown = false;
      this.showClass = false;
      this.collapse = true;
      this.renderer2.removeStyle(this.el.nativeElement, 'height');
    }
  }

  @HostListener('document:scroll', ['$event']) onScroll(event: any) {
    if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
      if (window.pageYOffset > 120) {
        this.renderer2.addClass(this.navbar.nativeElement, 'top-nav-collapse');
      } else {
        this.renderer2.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
      }
    }
  }
}
