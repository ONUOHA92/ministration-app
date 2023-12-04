import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

    segment( index:number ){

        try{

            let url = document.location.href

            if( index >= 1){

                let key = 2 + index;
                let i = url.split("/")
                return i[key];
            }

        }catch(e){
            return null;
        }
    }

}



