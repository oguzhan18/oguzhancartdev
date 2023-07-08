import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/project/models/project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {
  projects: Observable<Project[]>;

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
