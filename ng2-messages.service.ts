import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MessagesService {

  private _messages:any;

  private messagesSubject = new Subject<any>();
  public messages = this.messagesSubject.asObservable();

  constructor(){
    this._messages={
      success:{},
      info:{},
      warning:{},
      error:{}
    }
  }

  //if we just want to subscribe
  subscribe(fn:any){
    return this.messages.subscribe(fn);
  }

  private guid(){
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  add(type,msg){
    let guid=this.guid();
    this._messages[type][guid]=msg;
    this.messagesSubject.next(this._messages);
    return guid;
  }

  remove(id):any{
    let info=Object.keys(this._messages.info);
    if(info.indexOf(id)>-1){
      delete this._messages.info[id];
      return this.messagesSubject.next(this._messages);
    }
    let success=Object.keys(this._messages.success);
    if(success.indexOf(id)>-1){
      delete this._messages.success[id];
      return this.messagesSubject.next(this._messages);
    }
    let error=Object.keys(this._messages.error);
    if(error.indexOf(id)>-1){
      delete this._messages.error[id];
      return this.messagesSubject.next(this._messages);
    }
    let warning=Object.keys(this._messages.warning);
    if(warning.indexOf(id)>-1){
      delete this._messages.warning[id];
      return this.messagesSubject.next(this._messages);
    }
    console.error("message not found",id);

  }

  info(msg){
    return this.add('info',msg);
  }

  error(msg){
    return this.add('error',msg);
  }

  warning(msg){
    return this.add('warning',msg);
  }

  success(msg){
    return this.add('success',msg);
  }


}
