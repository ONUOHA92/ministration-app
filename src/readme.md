### HOW TO USE SOME IMPORTANT COMPONENTS 

> Notification modals

```
<app-alert [status]="changingValue"></app-alert>

this.changingValue.next({status:"error", message: "Are you sure you want to do this?"})
this.changingValue.next({status:"success", message: "Are you sure you want to do this?"})

```

{ headTitle: 'applications' },
    {
        title: 'Apps', icon: 'ti-write', type: 'sub', active: false,
        children: [
            { path: '/apps/chat', title: 'Chat', type: 'link' },
            { path: '/apps/calendar', title: 'Calendar', type: 'link' },
            { path: '/apps/contacts', title: 'Contacts', type: 'link' },
        ]
    },

### RUN NG

export NODE_OPTIONS=--openssl-legacy-provider
ng serve --proxy-config proxy.conf.json

{
    "/api/*": {
        "target": "https://api.ambulance.uk/api",
        "secure": true,
        "changeOrigin": true,
        "logLevel": "debug",
        "pathRewrite":{
            "^/api":""
        }
    }
}

### Terminal Commands

> ipconfig getifaddr en0
192.168.1.151

### One-Way Binding Between Child and Parent
> Data get passed from parent or source to the child or destination
```

@Input() valueModel: string
@Output() valueModelChange = new EventEmitter<string>();

<app-alert [valueModel]="value"></app-alert>

```


### Two-Way Binding Between Child and Parent
> Pass data from the child or destination back to parent or source
> Declare the below in the child component:
```

@Input() valueModel: string
@Output() valueModelChange = new EventEmitter<string>();

```

> Still in the child, Where the action needs to happen, do the below:
```
this.valueModelChange.emit("any value")
```

> The value to be emitted must be of the same type as in the output declaration

> In the parent view or component, add the below tag and then declare the method onReceiveChangedValue($event)
> that will receive the event sent
```

<app-alert (onTriggerChange)="onReceiveChangedValue($event)"></app-alert>


```


#### Passing Data through the url params
> set the route, and put the below in your view/component

```
routerLink="/jobs/{{data.id}}/view"
```
> Then in the .js file of your component do, where index is the key used in the route module as

```
/job/:index/view

```

```
ngOnInit(): void {

    let index = this.route.snapshot.params['index'];

}

```

PROXY HOST
> Production is at: https://api.ambulance.uk
```
{
    "/api/*": {
        "target": "http://localhost:8000/api", // "http://localhost:8000/api",
        "secure": false,
        "changeOrigin": true,
        "logLevel": "debug",
        "pathRewrite":{
            "^/api":""
        }
    }
}

```

Compile for Production:
```
ng build --configuration
```