"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var MessagesService = (function () {
    function MessagesService() {
        this.messagesSubject = new Subject_1.Subject();
        this.messages = this.messagesSubject.asObservable();
        this._messages = {
            success: {},
            info: {},
            warning: {},
            error: {}
        };
    }
    //if we just want to subscribe
    MessagesService.prototype.subscribe = function (fn) {
        return this.messages.subscribe(fn);
    };
    MessagesService.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    MessagesService.prototype.add = function (type, msg) {
        var guid = this.guid();
        this._messages[type][guid] = msg;
        this.messagesSubject.next(this._messages);
        return guid;
    };
    MessagesService.prototype.remove = function (id) {
        var info = Object.keys(this._messages.info);
        if (info.includes(id)) {
            delete this._messages.info[id];
            return this.messagesSubject.next(this._messages);
        }
        var success = Object.keys(this._messages.success);
        if (success.includes(id)) {
            delete this._messages.success[id];
            return this.messagesSubject.next(this._messages);
        }
        var error = Object.keys(this._messages.error);
        if (error.includes(id)) {
            delete this._messages.error[id];
            return this.messagesSubject.next(this._messages);
        }
        var warning = Object.keys(this._messages.warning);
        if (warning.includes(id)) {
            delete this._messages.warning[id];
            return this.messagesSubject.next(this._messages);
        }
        console.error("message not found", id);
    };
    MessagesService.prototype.info = function (msg) {
        return this.add('info', msg);
    };
    MessagesService.prototype.error = function (msg) {
        return this.add('error', msg);
    };
    MessagesService.prototype.warning = function (msg) {
        return this.add('warning', msg);
    };
    MessagesService.prototype.success = function (msg) {
        return this.add('success', msg);
    };
    MessagesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MessagesService);
    return MessagesService;
}());
exports.MessagesService = MessagesService;
//# sourceMappingURL=ng2-messages.service.js.map