import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ProjectListComponent],
})
export class ProjectModule {}
