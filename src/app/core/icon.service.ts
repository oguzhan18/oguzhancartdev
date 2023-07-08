import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  iconsRegistered: BehaviorSubject<boolean>;

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) {
    this.iconsRegistered = new BehaviorSubject<boolean>(false);
  }

  async registerIcons() {
    const iconNames = await lastValueFrom(this.getIconNames());
    iconNames.forEach((name) => {
      this.iconRegistry.addSvgIcon(
        name,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          `/assets/icons/${name}.svg`
        )
      );
    });
    this.iconsRegistered.next(true);
  }

  private getIconNames(): Observable<string[]> {
    const iconsConfigUrl = ['assets', 'data', 'icons.json'].join('/');
    return this.http.get<string[]>(iconsConfigUrl);
  }
}
