var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MessagesService } from './ng2-messages.service';
export let MessagesComponent = class MessagesComponent {
    constructor(msgs) {
        this.msgs = msgs;
        this.messages = {
            success: {},
            info: {},
            warning: {},
            error: {}
        };
    }
    asArray(obj) {
        let arr = [];
        for (let name in obj) {
            arr.push({ message: obj[name], _id: name });
        }
        return arr;
    }
    ngOnInit() {
        this.sub = this.msgs.subscribe((messages) => {
            this.messages = messages;
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    close(type) {
        for (let id in this.messages[type]) {
            this.msgs.remove(id);
        }
    }
};
MessagesComponent = __decorate([
    Component({
        selector: 'ng2-messages',
        template: `
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
        styles: [`
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
    }), 
    __metadata('design:paramtypes', [MessagesService])
], MessagesComponent);
//# sourceMappingURL=ng2-messages.component.js.map