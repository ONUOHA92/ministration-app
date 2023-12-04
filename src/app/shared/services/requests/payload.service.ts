import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class PayloadService extends AppService {

    public TYPE_POST: string = "post";
    public TYPE_GET: string  = "get";

    request(path, data = {}, type, callback){
        

        if(type == this.TYPE_GET)
        {
            this.get(path).subscribe(response => {

                let status =  false
                if(response.status == "success"){
                    status = true
                }
                callback(response.data, status);

            }, (error: HttpErrorResponse) => callback(error, false));

        } else {

            this.post(path, data).subscribe(response => {

                let status =  false
                if(response.status == "success"){
                    status = true
                }
                callback(response.data, status);

            }, (error: HttpErrorResponse) => callback(error, false));

        }
    }

}
