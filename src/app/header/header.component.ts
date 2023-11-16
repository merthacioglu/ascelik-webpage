import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @ViewChildren('dropdowns') dropdowns: QueryList<ElementRef>;

  navbarElements = {
    'HOME': null,
    'CORPORATE': {
      elements: ['ABOUT US', 'CAREER'],
      index: 0
    },
    'PRODUCTS': {
      elements: ['RACK CLAD BUILDING SYSTEMS', 'TEST'],
      index: 1
    },
    'REFERENCES': null,
    'OUR PROJECTS': {
      elements: ['1', '2'],
      index: 2
    },
    'CATALOGS': null,
    'VIDEO': null,
    'CONTACT': null
  };

  constructor(private r2: Renderer2) {

  }



  onHoverNavElement(key: string): void {
    if (this.navbarElements[key] !== null){
      const index = this.navbarElements[key].index;
      this.r2.removeClass(this.dropdowns.toArray().at(index).nativeElement, 'hidden');
    }


  }

  onLeaveNavElement(): void {

    this.dropdowns.forEach(dropdownEl => {
      this.r2.addClass(dropdownEl.nativeElement, 'hidden');
    })

  }

  returnZero() {
    return 0
  }

}
