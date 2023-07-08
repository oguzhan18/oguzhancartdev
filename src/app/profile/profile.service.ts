import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileEntry } from './models/profile-entry';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfileEntries(): Observable<ProfileEntry[]> {
    const profileUrl = ['assets', 'data', 'profile.json'].join('/');
    return this.http.get<ProfileEntry[]>(profileUrl);
  }
}
