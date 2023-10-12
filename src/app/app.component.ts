import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('videoRef', {static: true}) videoRef!: ElementRef;
  title = 'ascelik-site';
  videoSrc = './assets/raf%20render%20(1).mp4';

  ngAfterViewInit(): void {
    const media = this.videoRef.nativeElement;
    media.muted = true;
    media.loop = true;
    media.autoplay = true;
  }

}
