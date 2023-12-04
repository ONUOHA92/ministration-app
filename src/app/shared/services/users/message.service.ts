import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends AppService {

    all(callback){
        
        this.get(`user/list`, {}).subscribe(response => {

          let status =  false
          if(response.status == "success"){
              status = true
          }
          callback(response.data, status);

       },error => callback(error, false));
    }

    send(options, callback){
        
      this.post(`create/job/assigned/message/record`, options).subscribe(response => {

        let status =  false
        if(response.status == "success"){
            status = true
        }
        callback(response.data, status);

     },error => callback(error, false));
  }
}
