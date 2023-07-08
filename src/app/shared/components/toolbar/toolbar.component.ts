import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/core/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements AfterViewInit {
  @ViewChild(MatToolbar)
  toolbar!: MatToolbar;

  theme: Observable<string>;
  hasScrolled = false;

  constructor(private renderer: Renderer2, private themeService: ThemeService) {
    this.theme = this.themeService.theme;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.toggleVisibility();
    this.hasScrolled = true;
  }

  ngAfterViewInit() {
    this.renderer.addClass(
      // eslint-disable-next-line no-underscore-dangle
      this.toolbar._elementRef.nativeElement,
      'animate__animated'
    );
    this.toggleVisibility();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  private toggleVisibility() {
    const scrollTop = document.scrollingElement?.scrollTop;
    const clientHeight = document.scrollingElement?.clientHeight;
    if (scrollTop === undefined || clientHeight === undefined) {
      return;
    }
    // eslint-disable-next-line no-underscore-dangle
    const toolbarElement = this.toolbar._elementRef
      .nativeElement as HTMLElement;
    const fadeInAnimation = 'animate__fadeInDown';
    const fadeOutAnimation = 'animate__fadeOutUp';
    const hideClass = 'hide';
    const threshold = 200;
    if (scrollTop + threshold > clientHeight) {
      this.renderer.removeClass(toolbarElement, fadeOutAnimation);
      this.renderer.removeClass(toolbarElement, hideClass);
      this.renderer.addClass(toolbarElement, fadeInAnimation);
    } else if (this.hasScrolled) {
      this.renderer.removeClass(toolbarElement, fadeInAnimation);
      this.renderer.addClass(toolbarElement, fadeOutAnimation);
    }
  }
}
