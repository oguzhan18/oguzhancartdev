import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IconService } from 'src/app/core/icon.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input()
  icon: string | undefined;

  iconsRegistered: Observable<boolean>;

  constructor(private iconService: IconService) {
    this.iconsRegistered = this.iconService.iconsRegistered;
  }
}
