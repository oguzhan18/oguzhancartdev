import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  availableThemes = ['dark-theme', 'light-theme'];
  colorSchemeMedia: MediaQueryList;
  theme: BehaviorSubject<string> = new BehaviorSubject('light-theme');

  constructor() {
    const theme = sessionStorage.getItem(window.location.host);

    this.colorSchemeMedia = window.matchMedia?.('(prefers-color-scheme: dark)');
    this.addPrefersColorEventListener();

    if (theme) {
      this.theme.next(theme);
      this.removePrefersColorSchemaEventListener();
    } else {
      if (this.colorSchemeMedia.matches) {
        this.theme.next('dark-theme');
      }
    }
  }

  toggleTheme() {
    if (this.theme.value === 'dark-theme') {
      this.changeTheme('light-theme');
    } else {
      this.changeTheme('dark-theme');
    }
  }

  /**
   * Change the current theme. Saved in the local storage to reuse it for the next session.
   *
   * @param theme Theme name
   */
  private changeTheme(theme: string) {
    if (this.availableThemes.indexOf(theme) !== -1) {
      this.theme.next(theme);
      sessionStorage.setItem(window.location.host, theme);
      this.removePrefersColorSchemaEventListener();
    }
  }

  private addPrefersColorEventListener() {
    this.colorSchemeMedia.addEventListener(
      'change',
      this.getPrefersColorSchemeCallback(this.theme)
    );
  }

  private removePrefersColorSchemaEventListener() {
    this.colorSchemeMedia.removeEventListener(
      'change',
      this.getPrefersColorSchemeCallback(this.theme)
    );
  }

  private getPrefersColorSchemeCallback(theme: BehaviorSubject<string>) {
    return (e: MediaQueryListEvent): void => {
      const themeName = e.matches ? 'dark-theme' : 'light-theme';
      theme.next(themeName);
    };
  }
}
