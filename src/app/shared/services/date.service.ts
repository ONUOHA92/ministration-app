import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

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

    isSameDay(date1: Date, date2: Date): boolean {
        return (
          date1.getUTCFullYear() === date2.getUTCFullYear() &&
          date1.getMonth() === date2.getMonth() &&
          date1.getDate() === date2.getDate()
        );
      }
    
    getSeparatorBody(date: Date): string {
        if (this.isSameDay(date, new Date())) {
          return 'Today';
        }
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (this.isSameDay(date, yesterday)) {
          return 'Yesterday';
        }
        return date.toISOString();
      }

      getDateOrTime(date: Date): string {
        if (this.isSameDay(date, new Date())) {
          return this.formatDate(date)
        }
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (this.isSameDay(date, yesterday)) {
          return this.formatDate(yesterday)
        }
        return date.toISOString();
      }

      formatDate(date) {

        var d = new Date(date);
        return `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`
      }

      formatTime(date) {

        var d = new Date(date);
        var hh = d.getHours();
        var mm = d.getMinutes();
        var ss = d.getSeconds();
        var dd = "am";
        var h = hh;
        if (h >= 12) {
          h = hh - 12;
          dd = "pm";
        }
        if (h == 0) {
          h = 12;
        }
        let m = mm < 10 ? "0" + mm : mm;
      
        let s = ss < 10 ? "0" + ss : ss;
      
        return `${h}:${m} ${dd}`
      }

      formatAMPM(date: Date) {

          var hours = date.getHours();
          var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'pm' : 'am';

          hours = hours % 12;

          let hhs = hours ? hours : 12; // the hour '0' should be '12'
          let mms = minutes < 10 ? '0'+minutes : minutes;
          var strTime = hhs + ':' + mms + ' ' + ampm;
          
          return strTime;

      }

      formatEnUSWithOption(_date){

        var options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var date  = new Date(_date);
        
        // console.log(date.toLocaleDateString("en-US")); // 9/17/2016
        // console.log(date.toLocaleDateString("en-US", options));

        return date.toLocaleDateString("en-US", options);
      }

}



