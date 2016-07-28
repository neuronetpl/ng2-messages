# ng2messages
Angular2 messages component for displaying messages to user.

![example](http://neuronet.it:8888/github/ng2messages.gif)


In main app component:

```javascript
import { MessagesService, MessagesComponent } from './your_path/ng2messages/ng2messages';

@Component({
  ...
  providers:[MessagesService],
  directives:[MessagesComponent]
  ...
})
```

In your main app template:
```html
<ng2messages></ng2message>

<button (click)="msg.success('You are awesome!')">Click me fast!</button>
```

In some module that want to tell something to user:
```javascript
...
import {MessagesService} from './your_path/ng2messages/ng2messages';

@Component({
  ...
})
export class YourComponent {

  constructor(public msg:MessagesService){}

  showError(msg){
    this.msg.error("There will be blood...");
  }

  showSuccess(msg){
    this.msg.success("Nice work!");
  }

  showInfo(msg){
    this.msg.info("Better remove that picture");
  }

  showWarning(msg){
    this.msg.warning("I'm warning you");
  }

}
```


(author: [dedykowane aplikacje dla firm](https://www.neuronet.pl))
