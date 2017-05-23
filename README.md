# Dumb-pagination for angular ^2.x apps

"Dumb" because it has only two commands: _next_ and _prev_ for navigation.

May be useful for UI components like complex forms, side-bars etc.

## Prerequisites

- Node v6.x and higher
- Angular 2.x and higher
- TypeScript
- RxJS

## Installation

```sh
npm install ngx-stepwise --save
```

## Setup

### [Angular-seed](https://github.com/mgechev/angular-seed)

```js
/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    '@angular'    : 'node_modules/@angular',
    'rxjs'        : 'node_modules/rxjs',
    'ngx-stepwise': 'node_modules/ngx-stepwise/dist/ngx-stepwise.umd.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app' : { main: 'dist/main.js',  defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router'
  ];

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);
})(this);
```

### Angular CLI

After installing use it as usual with others modules in your ng-cli projects

## Usage

Import `StepwiseModule` module into root or feature module:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StepwiseModule  } from 'ngx-stepwise';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    StepwiseModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

The main functionality belongs to only 4 directives: `stepwise-container`, `stepwise-step`, `stepwiseNext` and `stepwisePrev`

Those should be nested in the following order: `container` > `step` > `next`/`prev`

You can attach `stepwise-container` and `stepwise-step` to any html element.

`stepwise-container` directive has `pageChange` output property that emits current page.

Both `stepwiseNext` and `stepwisePrev` have optional input property which may be usefull for disabling  controls. Preferably those should be used for main html controls such as `buttons`.

## Example

`app.component.html`:

```html
<div stepwise-container (pageChange)="handlePageChange($event)">

  <h2>Current page: {{ currentPage }}</h2>

  <div stepwise-step>
    <h1>Step 1</h1>
    <button stepwiseNext>Next</button>
  </div>

  <div stepwise-step>
    <h1>Step 2</h1>
    <!-- [stepwiseNext]="false" indicates that the control will be disabled -->
    <button [stepwiseNext]="false">Next</button>
    <button stepwisePrev>Prev</button>
  </div>

  <div stepwise-step>
    <h1>Step 3</h1>
    <button [stepwisePrev]="true">Prev</button>
  </div>

</div>
```

`app.component.ts`:


```ts
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public currentPage: number;

  public ngOnInit() {
    this.currentPage = 0;
  }

  public handlePageChange(page) {
    this.currentPage = page;
  }
}
```

## Built with

- [angular](https://github.com/angular/angular)
- [rxjs](https://github.com/ReactiveX/rxjs)
- [typescript](https://github.com/microsoft/typescript)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see [the tags](https://github.com/embarq/ngx-stepwise/releases) on this repository.

## Authors

- **Igor Lee** [embarq](https://github.com/embarq) - Initial work

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
