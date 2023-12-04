import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService extends AppService {


  all(target, callback) {
    this.get(`cms/statistics/${target}`, {}).subscribe(response => {
      let status = false
      if (response.status == "success") {
        status = true
      }
      callback(response.data, status);


    }, (error: HttpErrorResponse) => callback(error, false));
  }
}
