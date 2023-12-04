import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})
export class RequestService extends AppService {

     /**
   * 
   * @param path 
   * @param callback 
   */
  _get(path, callback){
      
    this.get(path, {}).subscribe(response => {

        let status =  false
        if(response.status == "success"){
            status = true
        }
        callback(response.data, status, response);

    },(error: HttpErrorResponse) => callback(error, false));
  }


  /**
   * 
   * @param path 
   * @param body 
   * @param callback 
   */
  _post(path, body, callback){
      
    this.post(path, body).subscribe(response => {

        let status =  false
        if(response.status == "success"){
            status = true
        }
        callback(response.data, status, response);

    },(error: HttpErrorResponse) => callback(error, false));
  }

}
