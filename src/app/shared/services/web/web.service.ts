import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebService extends AppService {





  all(target, callback) {
    this.get(`get/${target}`, {}).subscribe(
      (response: any) => {
        console.log(response);

        if (response.status_code === 200) {
          console.log(response, 'response');
          callback(response.userMinistries, true);
        } else {
          console.error('Error fetching data');
          callback([], false);
        }
      },
      (error: HttpErrorResponse) => {
        console.error('HTTP error:', error);
        callback([], false);
      }
    );
  }


  getSongs(dataId: any) {
    return this.get(`ministries/${dataId}/songs`);
  }
  getbackup(dataId: any) {
    return this.get(`ministries/${dataId}/backup`);
  }


  deleteSong(songId: any, identifier, callback) {
    return this.get(`ministries/delete/${identifier}/songs/${songId}`, {}).subscribe(response => {
      let status = false
      if (response.status == "success") {
        status = true
      }
      callback(response.data, status);
    }, (error: HttpErrorResponse) => callback(error, false)
    )
  }


  // delete(target, identifier, callback) {

  //   this.get(`cms/pages/delete/${target}/${identifier}`, {}).subscribe(response => {

  //     let status = false
  //     if (response.status == "success") {
  //       status = true
  //     }
  //     callback(response.data, status);

  //   }, (error: HttpErrorResponse) => callback(error, false));
  // }





  list(target) {
    return this.get(`cms/pages/fetch/${target}`)
  }

  create(target, body = {}) {
    return this.post(`create/${target}`, body).pipe(
      tap((response) => {
        console.log('HTTP Response:', response);
      })
    )
  }


  update(target, body) {
    return this.post(`cms/pages/update/${target}`, body)

  }


  delete(target, identifier, callback) {

    this.get(`ministries/${identifier}`, {}).subscribe(response => {

      let status = false
      if (response.status == "success") {
        status = true
      }
      callback(response.data, status);

    }, (error: HttpErrorResponse) => callback(error, false));
  }

  postDelete(target, body = {}) {

    return this.post(`cms/pages/delete/${target}`, body);
  }



  fetch(target, identifier, callback) {

    this.get(`cms/pages/fetch/${target}/${identifier}`, {}).subscribe(response => {

      let status = false
      if (response.status == "success") {
        status = true
      }
      callback(response.data, status);

    }, (error: HttpErrorResponse) => callback(error, false));
  }

  images(callback) {

    this.get(`cms/pages/images/list`, {}).subscribe(response => {

      let status = false
      if (response.status == "success") {
        status = true
      }
      callback(response.data, status);

    }, (error: HttpErrorResponse) => callback(error, false));
  }

  search(target, body) {

    return this.post(`cms/pages/search/${target}`, body)
  }

}
