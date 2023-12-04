import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AppService {

    all(callback){
        
        this.get(`user/list`, {}).subscribe(response => {

          let status =  false
          if(response.status == "success"){
              status = true
          }
          callback(response.data, status);

       },error => callback(error, false));
    }

    availability(callback){
        
        this.get(`fetch/job/availability/list/all`, {}).subscribe(response => {

          let status =  false
          if(response.status == "success"){
              status = true
          }
          callback(response.data, status);

      },error => callback(error, false));
    }

    send(target, options, callback){
        
      this.post(`auth/admin/${target}`, options).subscribe(response => {

        let status =  false
        if(response.status == "success"){
            status = true
        }
        callback(response.data, status);

     },error => callback(error, false));
  }

  delete(id, callback){
        
    this.get(`auth/admin/delete/${id}`, {}).subscribe(response => {

      let status =  false
      if(response.status == "success"){
          status = true
      }
      callback(response.data, status);

  },error => callback(error, false));
}

}
