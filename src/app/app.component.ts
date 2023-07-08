import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    OnInit,
} from '@angular/core';
import * as AOS from 'aos';
import {Observable} from 'rxjs';
import {IconService} from './core/icon.service';
import {ThemeService} from './core/theme.service';
import {Project} from './project/models/project';
import {ProjectService} from './project/project.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
    projects: Observable<Project[]>;
    theme: Observable<string>;

    constructor(
        private projectService: ProjectService,
        private themeService: ThemeService,
        private iconService: IconService
    ) {
        this.projects = this.projectService.getProjects();
        this.theme = this.themeService.theme;
    }

    ngOnInit() {
        this.iconService.registerIcons();
        this.detectStickyHeaders();
    }

    ngAfterViewInit() {
        AOS.init();
    }

    private detectStickyHeaders() {
        const stickyHeaders = document.querySelectorAll('.sticky-header');
        const observer = new IntersectionObserver(
            ([e]) => e.target.classList.toggle('is-pinned', e.intersectionRatio < 1),
            {rootMargin: '-1px 0px 0px 0px', threshold: [1]}
        );

        stickyHeaders.forEach((header) => {
            observer.observe(header);
        });
    }
}
