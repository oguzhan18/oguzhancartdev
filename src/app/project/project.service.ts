import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    const projectsUrl = ['assets', 'data', 'projects.json'].join('/');
    return this.http.get<Project[]>(projectsUrl);
  }
}
