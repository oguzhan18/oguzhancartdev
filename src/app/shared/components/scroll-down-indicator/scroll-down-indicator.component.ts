import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-down-indicator',
  templateUrl: './scroll-down-indicator.component.html',
  styleUrls: ['./scroll-down-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollDownIndicatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollDown() {
    window.scrollBy({
      behavior: 'smooth',
      top: window.innerHeight,
    });
  }
}
