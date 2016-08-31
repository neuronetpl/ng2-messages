import { Component,OnInit,OnDestroy } from '@angular/core';

import { MessagesService } from './ng2-messages.service';

@Component({
  selector:'ng2-messages',
  template:`
  <div class="ng2messages">
    <div class="alert alert-success ng2messages-container" role="alert" *ngIf="asArray(messages.success).length>0">
      <div class="ng2messages-close" (click)="close('success')"></div>
      <div class="ng2message" *ngFor="let msg of asArray(messages.success)">
        <div class="ng2message" [innerHtml]="msg.message"></div>
      </div>
    </div>
    <div class="alert alert-info ng2messages-container" role="alert" *ngIf="asArray(messages.info).length>0">
      <div class="ng2messages-close" (click)="close('info')"></div>
      <div class="ng2message"  *ngFor="let msg of asArray(messages.info)">
        <div class="ng2message" [innerHtml]="msg.message"></div>
      </div>
    </div>
    <div class="alert alert-warning ng2messages-container" role="alert" *ngIf="asArray(messages.warning).length>0">
      <div class="ng2messages-close" (click)="close('warning')"></div>
      <div class="ng2message"  *ngFor="let msg of asArray(messages.warning)">
        <div class="ng2message" [innerHtml]="msg.message"></div>
      </div>
    </div>
    <div class="alert alert-danger ng2messages-container" role="alert" *ngIf="asArray(messages.error).length>0">
      <div class="ng2messages-close" (click)="close('error')"></div>
      <div class="ng2message"  *ngFor="let msg of asArray(messages.error)">
        <div class="ng2message" [innerHtml]="msg.message"></div>
      </div>
    </div>
  </div>
  `,
  styles:[`
  .ng2messages-container {
    position: relative;
    display: block;
  }
  .ng2messages-close {
    display: block;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    padding: 10px;
    border: 1px solid;
    border-radius: 2px;
    opacity: 0.75;
    line-height: 10px;
  }
  .ng2messages-close:hover {
    opacity: 1;
  }
  .ng2messages-close:after {
    content: "X";
    font-weight: bold;
  }
  `]
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
