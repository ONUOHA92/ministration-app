import { HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';


@Injectable({
  providedIn: 'root'
})
export class MessageService extends AppService {


  all(target, callback) {

    this.get(`cms/pages/fetch/enquiry`, {}).subscribe(response => {

      let status = false
      if (response.status == "success") {
        status = true
      }
      callback(response.data, status);


    }, (error: HttpErrorResponse) => callback(error, false));
  }


  create(target, body = {}, callback) {
    console.log(body)
    this.post(`cms/emails/send-mail`, body).subscribe(response => {
      let status = false
      if (response.status == "success") {
        status = true
      }
      callback(response.data, status);
      console.log(response.data, '-----info')


    }, (error: HttpErrorResponse) => callback(error, false));


  }

}
