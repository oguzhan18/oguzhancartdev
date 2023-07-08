import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileEntry } from '../models/profile-entry';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileListComponent {
  profileEntries: Observable<ProfileEntry[]>;

  constructor(private profileService: ProfileService) {
    this.profileEntries = this.profileService.getProfileEntries();
  }
}
