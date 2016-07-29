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
var ng2_messages_service_1 = require('./ng2-messages.service');
var MessagesComponent = (function () {
    function MessagesComponent(msgs) {
        this.msgs = msgs;
        this.messages = {
            success: {},
            info: {},
            warning: {},
            error: {}
        };
    }
    MessagesComponent.prototype.asArray = function (obj) {
        var arr = [];
        for (var name_1 in obj) {
            arr.push({ message: obj[name_1], _id: name_1 });
        }
        return arr;
    };
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.msgs.subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    MessagesComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MessagesComponent.prototype.close = function (type) {
        for (var id in this.messages[type]) {
            this.msgs.remove(id);
        }
    };
    MessagesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng2messages',
            templateUrl: 'templates/ng2messages.html',
            styleUrls: ['./styles/ng2messages.css']
        }), 
        __metadata('design:paramtypes', [ng2_messages_service_1.MessagesService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=ng2-messages.component.js.map