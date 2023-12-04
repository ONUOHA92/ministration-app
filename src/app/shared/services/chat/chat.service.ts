// import { Injectable } from '@angular/core';
// import { io } from 'socket.io-client';
// import { Observable, Subject } from 'rxjs';

// import * as Rx from 'rxjs/Rx';
// import { AuthenticationService } from '../auth.service';
// import { Chat } from './chat.model';
// import { environment } from 'src/environments/environment.prod';

// @Injectable({
//     providedIn: 'root'
// })
// export class ChatService {
//      private url = environment.socket
//     private socket;

//     private data: Payload = new Payload;

//     public transact = new Transacts();

//     constructor(private authService: AuthenticationService) {

//         try {
//             this.socket = io(this.url, { transports: ['websocket', 'polling', 'flashsocket'] });
//             // this.socket = io(this.url);
//         } catch (e) {


//         }

//         /**
//          * Set the user ID as the target of the message
//          */
//         this.transact.sourceid = "";

//         this.payload();
//     }

//     getIdentifier() {
//         return this.authService.identifier()
//     }

//     public history(sourceid, targetid, is_group: number, broadcaster = "") {
//         try {
//             this.data.sourceid = sourceid
//             this.data.targetid = targetid;
//             this.data.message = "load_history"
//             this.data.is_group = is_group
//             this.socket.emit(broadcaster, this.data);
//         } catch (e) {

//         }
//     }

//     public send(message, source = "", target = "", channel: string = null, is_group: number = 0, broadcaster: string = 'broadcaster') {

//         try {
//             this.data.sourceid = source
//             this.data.targetid = target;
//             this.data.message = message
//             this.data.is_group = is_group
//             this.data.channel = channel

//             console.log("Payload--->", this.data)

//             this.socket.emit(broadcaster, this.data);
//         } catch (e) {

//         }
//     }

//     public sendTask(data) {
//         try {
//             this.socket.emit("calendar_event_listener", data);
//         } catch (e) {

//         }
//     }

//     public listener() {
//         this.socket.on("web_target_update", (message) => {
//             console.log("trying ", message);
//         });
//     }

//     disconnect(target) {

//         this.socket.off(target, function (data) { })
//         this.socket.removeAllListeners(target);
//     }

//     _connect(target): Subject<MessageEvent> {

//         let observable = new Observable(observer => {
//             this.socket.on(target, function (data) {
//                 // console.log("Received message from Websocket Server")
//                 observer.next(data);
//             })
//             return () => {
//                 this.socket.disconnect();
//             }
//         });
//         // We define our Observer which will listen to messages

//         let observer = {
//             next: (data: Object) => {
//                 this.socket.emit('web_target_update', JSON.stringify(data));
//             },
//         };

//         return Subject.create(observer, observable);
//     }

//     connect(target) {

//         return Observable.create(observer => {

//             this.socket.on(target, function (data) {
//                 // console.log("Received message from Websocket Server")
//                 observer.next(data);
//             })

//         });
//     }

//     public socketExceptions = () => {


//         this.socket.on('connect_error', function (err) {
//             // handle server error here
//             console.log('Error connecting to server');
//         });
//     }

//     public payload() {


//         let user = this.authService.currentUser();
//         console.log("User check::", user);
//         return this.data
//     }
// }

// class Transacts {
//     public sourceid: any = 'xxtest1'; //this app id
//     public targetid: any = 'yytest1'; //where message goes to. it will by dynamic
// }

// class Payload extends Chat { }