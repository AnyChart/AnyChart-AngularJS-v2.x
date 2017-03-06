[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](http://www.anychart.com)

AngularJS v2.x directives for AnyChart
=========

AngularJS v2.x directives for AnyChart provide an easy way to use [AnyChart JavaScript Charts](http://anychart.com)
with [Angular2 Framework](https://angular.io/). 

## Table of Contents

* [Download and install](#download-and-install)
* [Quick start](#quick-start)
* [Build and run](#build-and-run)
* [Package directory](#package-directory)
* [Demos overview](#demos-overview)
* [Contacts](#contacts)
* [Links](#links)
* [License](#license)

## Download and install

#### Package managers

You can install Angular2-plugin using **npm**, **bower** or **yarn**:

* `npm install anychart-angular2`
* `bower install anychart-angular2`
* `yarn add anychart-angular2`

#### Direct download
     
You can download compiled Angular2 components directly from the 
[dist](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/dist) folder.

Please, note: [components.js](https://github.com/AnyChart/AnyChart-AngularJS-2.x/blob/master/components.js) and
[components.d.ts](https://github.com/AnyChart/AnyChart-AngularJS-2.x/blob/master/components.d.ts) files 
export basic Anychart-Angular2 integration functionality.

## Quick start
Here's a basic sample that shows how to quickly create an Angular2 application with AnyChart component:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Angular Quick Start</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>

    <!-- Add zone.js (https://github.com/angular/zone.js/) -->
    <script src="node_modules/zone.js/dist/zone.js"></script>
    
    <!-- Add modules loader -->
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    
    <!-- Include anychart component -->
    <script src="node_modules/anychart/dist/anychart-bundle.min.js"></script>

    <!-- General section, this configuration adds all the requirements to run -->
    <script src="systemjs.config.js"></script>
    <script>
        //Import of application to run.
        System.import('app').catch(function(err){ console.error(err); });
    </script>
</head>

<body>
<my-app>Loading AppComponent content here ...</my-app>
</body>
</html>
```



## Build and run 
In [demos](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos) the 
[SystemJS](https://github.com/systemjs/systemjs) loader is used for 
dynamic modules loading.

1) Despite the AnyChart-Angular2 integration is available with package managers, the license allows to modify and use it freely (though you [need AnyChart license to use the library](http://anychart.com/buy) itself in commercial projects). This quick start guide clarifies the structure of integration project and explains how it works and how it can be used.

If the integration is cloned from GitHub and Node Package Manager (`npm` command) is available in command line, the following command compiles source code to **dist/** directory:

```sh
npm run build
``` 
   
2) If needed, `package.json` of demo-application can be configured to declare custom run-commands
and to add required dependencies.

3) Run `npm install` command to load all required npm modules.

4) Configure `systemjs.config.js` to declare the mapping of dependencies of
application (see any [demo](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos) 
to see the basic configuration). In 'map'-section AnyChart integration library is declared:

```
...
'anychart-angular2': 'node_modules/anychart-angular2'
```

5) In 'packages'-section anychart-angular2 library is declared:

```
'anychart-angular2': {
  main: 'index'
}
```

6) These actions allow to use anychart-angular2 integration in an application
like one described in [Quick start](#quick-start).

7) Since 'app' folder is declared in `systemjs.config.js` as application root 
directory, the application's Angular2 modules and components can be created
right there.

## Package directory

```
├── def
│   ├── anychart.d.ts
│   ...
├── dist
│   ├── anychart.directive.d.ts
│   ├── anychart.directive.js
│       ...
├── src
│   ├── anychart.directive.ts
│   ├── anychart.service.ts
│       ...
│   components.d.ts
│   components.js
│   package.json
│   LICENSE
│   README.md
│   ...
```

- **def/anychart.d.ts** -
Anychart typescript definition file. Used to correctly compile source
code to **dist/** directory.

- **dist/** -
Output directory that contains compiled `js` and `d.ts` files. The general component
declarations (**components.js** and **components.d.ts**) rely on this directory
content.

- **src/** -
Source code directory. Contains Angular2-compatible components to provide 
AnyChart integration.

- **components.d.ts** and **components.js** - 
Components definition. Relies on **dist/** directory content.
 
- **package.json** - 
Package manager configuration file. Also contains descriptions of
available run commands (including build command) and the list of dependencies. 

## Demos overview
See these samples to learn how things work:
* **[Load Data From JSON](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Load_Data_From_Json)**: Async data loading sample. Also
shows how AnychartService can be used. **Note:** this demo can be launched only from a web-server, in browser window, because of cross origin requests security issues. 
* **[Gantt Project After Draw](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Gantt_Project_After_Draw)**: Shows how to create a Gantt Project
Chart and add the after-draw handler.
* **[Gantt Resource with Instance](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Gantt_Resource_Instance_Usage)**: Shows how to use manually created 
instance of a Gantt Resource chart and how to add the after-draw handler.
* **[Line Chart After Draw](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Line_Chart_After_Draw)**: Shows how to create and use instance
of a chart and add the after-draw handler.
* **[Line Chart Data Streaming](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Line_Chart_Data_Streaming)**: Simple data streaming demo.
* **[Simple Charts On Stage](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Simple_Charts_On_Stage)**: Shows how to create and add simple 
charts on the anychart stage and how to add the after-draw handler.
* **[Simple Gantt Project](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Simple_Gantt_Project)**: Simple Gantt Project Chart demo.
* **[Simple Map](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Simple_Map)**: Simple AnyMap demo.
* **[Simple Pie](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Simple_Pie)**: Simple Pie chart demo.
* **[Simple_Stock_Area](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Simple_Stock_Area)**: Simple AnyStock demo.
* **[Software_Sales_Dashboard](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/Software_Sales_Dashboard)**: Shows how to use `anychart-stage`
 directive to build an interactive dashboard.
* **[World_Map_Instance_After_Draw](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos/World_Map_Instance_After_Draw)**: World map demo. Shows how to
 use map chart instance and how to add the after-draw handler.

## Contacts

* Web: [www.anychart.com](http://www.anychart.com)
* Email: [contact@anychart.com](mailto:contact@anychart.com)
* Twitter: [anychart](https://twitter.com/anychart)
* Facebook: [AnyCharts](https://www.facebook.com/AnyCharts)
* LinkedIn: [anychart](https://www.linkedin.com/company/anychart)

## Links

* [AnyChart Website](http://www.anychart.com)
* [Download AnyChart](http://www.anychart.com/download/)
* [AnyChart Licensing](http://www.anychart.com/buy/)
* [AnyChart Support](http://www.anychart.com/support/)
* [Report Issues](https://github.com/AnyChart/AnyChart-AngularJS-2.x/issues)
* [AnyChart Playground](http://playground.anychart.com)
* [AnyChart Documentation](http://docs.anychart.com)
* [AnyChart API Reference](http://api.anychart.com)
* [AnyChart Sample Solutions](http://www.anychart.com/solutions/)
* [AnyChart Integrations](http://www.anychart.com/integrations/)

## License

[© AnyChart.com - JavaScript charts](http://www.anychart.com). All rights reserved.








   