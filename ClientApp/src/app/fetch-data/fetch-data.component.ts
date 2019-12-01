import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RuntimeSetting } from '../models/runtimeSetting';
import { SnapshotService } from '../services/snapshot.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})

export class FetchDataComponent implements OnInit {
  public forecasts: WeatherForecast[];
  public settings: RuntimeSetting[];

  constructor(private http: HttpClient,  @Inject('BASE_URL') private baseUrl: string, private snapshotService: SnapshotService) {
    // alert(baseUrl + 'weatherforecast');
  }

  ngOnInit(): void {
    //this.getSettings();
    this.getSettingsViaObservable();
    this.http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  getSettingsViaObservable(): void {
    this.snapshotService.getSettings2()
        .subscribe(s => 
          {
            this.settings = s.resultContent;
            console.log(JSON.stringify(this.settings));
          }
          );
  }
  getSettings(): void {
    try {
      this.http.get<ResultEnvelope>('http://qa.dstransformation.com/snapshot/api/SnapshotControls/GetRuntimeSettings').subscribe(result => {
        this.settings = result.resultContent as RuntimeSetting[];
        console.log('@@@@ ' + JSON.stringify(this.settings[0]));
        //alert(this.settings[0].settingname);
        //this.forecasts = result;
      }, error => console.error(error));
  
    } catch (error) {
    }
  }
}


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
interface ResultEnvelope {
  resultContent: object;
}
// interface RuntimeSetting {
//   applicationname: string;
//   settingname: string;
//   settingvalue: string;
// }
