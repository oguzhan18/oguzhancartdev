import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileListComponent } from './profile-list/profile-list.component';

@NgModule({
  declarations: [ProfileListComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProfileListComponent],
})
export class ProfileModule {}
