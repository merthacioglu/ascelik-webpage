import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

class Renderer {
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  @ViewChild('dropdown', {static: true}) dd!: ElementRef;

  constructor(private r2: Renderer2) {
  }
  onMouseEnter() {
    this.r2.removeClass(this.dd.nativeElement, 'hidden');
  }

  onMouseLeave() {
    setTimeout(() => {
      console.log('added');
      this.r2.addClass(this.dd.nativeElement, 'hidden');
    }, 1000);
  }
}
