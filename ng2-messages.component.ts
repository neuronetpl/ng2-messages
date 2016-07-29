import { Component,OnInit,OnDestroy } from '@angular/core';

import { MessagesService } from './ng2-messages.service';

@Component({
  moduleId:module.id,
  selector:'ng2messages',
  templateUrl:'templates/ng2messages.html',
  styleUrls:['./styles/ng2messages.css']
})
export class MessagesComponent implements OnInit, OnDestroy{

  public messages:any={
    success:{},
    info:{},
    warning:{},
    error:{}
  };

  private sub:any;

  constructor(private msgs:MessagesService) {  }

  asArray(obj){
    let arr:any=[];
    for(let name in obj){
      arr.push({message:obj[name],_id:name});
    }
    return arr;
  }

  ngOnInit(){
    this.sub = this.msgs.subscribe((messages)=>{
      this.messages=messages;
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  close(type){
    for(let id in this.messages[type]){
      this.msgs.remove(id);
    }
  }

}
