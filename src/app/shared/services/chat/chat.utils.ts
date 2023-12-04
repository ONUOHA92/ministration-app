import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatUtils {


    // getSessionName(session: any, targetid: any){

    //     try{
    
    //       if(session.user != null){
    
    //         //first check if the identifier is the same as the active user source id
    //         // then use the targetid from the identifier
    //         return session.user.name
    //       }
    
    //       if(session.job != null){
    //         return session.job.name
    //       }
    
    //       return "Anonymous";
    
    //     }catch(e){
    
    //         return "Anonymous";
    //     }
        
        
    //   }

      getSessionName(session: any, targetid: string){

        try{
    
            if(session.target != null && session.source != null){
    
                let identifier = session.target.identifier
                let name = session.target.name

                if( identifier == targetid){
                    name = session.source.name
                }
                return name;
            }
    
          return session.job.name;

        }catch(e){
            return "Anonymous";
        }
            
    }

    //first check if the identifier is the same as the active user source id
    // then use the targetid from the identifier
    getSessionID(session: any, targetid: string){

        try{
    
            if(session.target != null && session.source != null){
    
                let identifier = session.target.identifier
                if( identifier == targetid){
                    identifier = session.source.identifier
                }
                return identifier;
            }
    
          return session.identifier;
        }catch(e){
            return null;
        }
            
    }
}
