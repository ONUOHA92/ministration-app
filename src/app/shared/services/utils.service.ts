import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

    compare(first_date?:string, second_date?: string){


        let first =  new Date();
         if( first_date != undefined){
             first = new Date(first_date)
         }

         let second =  new Date();
         if( second_date != undefined){
             first = new Date(second_date)
         }

        if( (new Date(first).getTime() >= new Date(second).getTime()))
        {
            return true;
        }
        return false;
    }

    isLive(){
        
    }


    convertToUrlFormat(inputString) {
        // Convert to lowercase and replace spaces with hyphens
        let urlFormatString = inputString.toLowerCase().replace(/\s+/g, '-');
      
        // Remove special characters using regular expression
        urlFormatString = urlFormatString.replace(/[^a-z0-9\-]/g, '');
      
        return urlFormatString;
      }
    

}



