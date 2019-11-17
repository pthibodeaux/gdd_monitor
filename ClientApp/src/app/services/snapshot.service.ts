import { Injectable, Inject } from '@angular/core';
import { RuntimeSetting } from '../models/runtimeSetting';
import { MOCK_RUNTIMESETTINGS } from '../models/mock-runtimeSettings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {
  private settingsURL : string = 'http://qa.dstransformation.com/snapshot/api/SnapshotControls/GetRuntimeSettings';

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { }

  getRuntimeSettings() : RuntimeSetting[] {
    return MOCK_RUNTIMESETTINGS;
  }

  getSettings2 (): Observable<Envelope<RuntimeSetting[]>> {
    return this.http.get<RuntimeSetting[]>(this.settingsURL)
  }
}
