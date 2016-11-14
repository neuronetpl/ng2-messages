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
            selector: 'ng2-messages',
            template: "\n  <div class=\"ng2messages\">\n    <div class=\"alert alert-success ng2messages-container\" role=\"alert\" *ngIf=\"asArray(messages.success).length>0\">\n      <div class=\"ng2messages-close\" (click)=\"close('success')\"></div>\n      <div class=\"ng2message\" *ngFor=\"let msg of asArray(messages.success)\">\n        <div class=\"ng2message\" [innerHtml]=\"msg.message\"></div>\n      </div>\n    </div>\n    <div class=\"alert alert-info ng2messages-container\" role=\"alert\" *ngIf=\"asArray(messages.info).length>0\">\n      <div class=\"ng2messages-close\" (click)=\"close('info')\"></div>\n      <div class=\"ng2message\"  *ngFor=\"let msg of asArray(messages.info)\">\n        <div class=\"ng2message\" [innerHtml]=\"msg.message\"></div>\n      </div>\n    </div>\n    <div class=\"alert alert-warning ng2messages-container\" role=\"alert\" *ngIf=\"asArray(messages.warning).length>0\">\n      <div class=\"ng2messages-close\" (click)=\"close('warning')\"></div>\n      <div class=\"ng2message\"  *ngFor=\"let msg of asArray(messages.warning)\">\n        <div class=\"ng2message\" [innerHtml]=\"msg.message\"></div>\n      </div>\n    </div>\n    <div class=\"alert alert-danger ng2messages-container\" role=\"alert\" *ngIf=\"asArray(messages.error).length>0\">\n      <div class=\"ng2messages-close\" (click)=\"close('error')\"></div>\n      <div class=\"ng2message\"  *ngFor=\"let msg of asArray(messages.error)\">\n        <div class=\"ng2message\" [innerHtml]=\"msg.message\"></div>\n      </div>\n    </div>\n  </div>\n  ",
            styles: ["\n  .ng2messages-container {\n    position: relative;\n    display: block;\n  }\n  .ng2messages-close {\n    display: block;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    cursor: pointer;\n    padding: 10px;\n    border: 1px solid;\n    border-radius: 2px;\n    opacity: 0.75;\n    line-height: 10px;\n  }\n  .ng2messages-close:hover {\n    opacity: 1;\n  }\n  .ng2messages-close:after {\n    content: \"X\";\n    font-weight: bold;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [ng2_messages_service_1.MessagesService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=ng2-messages.component.js.map