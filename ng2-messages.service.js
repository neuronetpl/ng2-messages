var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export let MessagesService = class MessagesService {
    constructor() {
        this.messagesSubject = new Subject();
        this.messages = this.messagesSubject.asObservable();
        this._messages = {
            success: {},
            info: {},
            warning: {},
            error: {}
        };
    }
    //if we just want to subscribe
    subscribe(fn) {
        return this.messages.subscribe(fn);
    }
    guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
    add(type, msg) {
        let guid = this.guid();
        this._messages[type][guid] = msg;
        this.messagesSubject.next(this._messages);
        return guid;
    }
    remove(id) {
        let info = Object.keys(this._messages.info);
        if (info.indexOf(id) > -1) {
            delete this._messages.info[id];
            return this.messagesSubject.next(this._messages);
        }
        let success = Object.keys(this._messages.success);
        if (success.indexOf(id) > -1) {
            delete this._messages.success[id];
            return this.messagesSubject.next(this._messages);
        }
        let error = Object.keys(this._messages.error);
        if (error.indexOf(id) > -1) {
            delete this._messages.error[id];
            return this.messagesSubject.next(this._messages);
        }
        let warning = Object.keys(this._messages.warning);
        if (warning.indexOf(id) > -1) {
            delete this._messages.warning[id];
            return this.messagesSubject.next(this._messages);
        }
        console.error("message not found", id);
    }
    info(msg) {
        return this.add('info', msg);
    }
    error(msg) {
        return this.add('error', msg);
    }
    warning(msg) {
        return this.add('warning', msg);
    }
    success(msg) {
        return this.add('success', msg);
    }
};
MessagesService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], MessagesService);
//# sourceMappingURL=ng2-messages.service.js.map