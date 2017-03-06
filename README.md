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

#### Git

AnyChart-Angular2 integration is available in [GitHub repository](https://github.com/AnyChart/AnyChart-AngularJS-2.x). 


## Quick start
Here's a basic sample that shows how to quickly create an Angular2 application with AnyChart component:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Angular QuickStart</title>
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

1) Despite the AnyChart-Angular2 integration is available with package managers,
   the license allows to modify and use it freely. This quick start guide
   clarifies the structure of integration project and explains how it works and 
   can be used.
   
   Since the integration is cloned from GitHub and Node Package Manager 
   (`npm` command) is available in command line, the following command compiles
   source code to **dist/** directory:
   ```sh
   npm run build
   ``` 
   
2) If needed, `package.json` of demo-application can be configured to declare custom run-commands
and to add required dependencies excepting already included.

3) Run `npm install` command to load all required npm modules.

4) Configure `systemjs.config.js` to declare the mapping of dependencies of
application (see any [demo](https://github.com/AnyChart/AnyChart-AngularJS-2.x/tree/master/demos) 
to realise the basic configuration). In 'map'-section this integration library is declared
```
...
'anychart-angular2': 'node_modules/anychart-angular2'
```

5) Also in 'packages'-section anychart-angular2 library is declared as well:
```
'anychart-angular2': {
  main: 'index'
}
```

6) These actions allow to use anychart-angular2 integration in application
like described in [Quick start](#quick-start).

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
Output directory that contains compiled *.js and *.d.ts files to provide
availability to use this integration as library. The general component
declarations (**components.js** and **components.d.ts**) rely on this directory
content.

- **src/** -
Source code directory. Contains Angular2-compatible components to provide 
AnyChart integration.

- **components.d.ts** and **components.js** - 
Components definition. Relies on **dist/** directory content.
 
- **package.json** - 
Package manager configuration file. Also contains descriptions of
available run commands (including build command) and list of dependencies. 


## Demos overview
See these samples to learn how things work:
* **[Anychart_Load_Data_From_Json.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Anychart_Load_Data_From_Json.html)**: Demo of async data loading. Also
shows how AnychartService can be used. **Please, note:** This demo can launched only from a web-server, in browser window,  because of cross origin requests security issues. 
* **[Custom_Stage.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Full_Custom_Stage.html)**: Demonstrates how to create and use a custom stage.
* **[Gantt_Project_After_Draw.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Gantt_Project_After_Draw.html)**: Shows how to create Gantt Project
Chart and add the after-draw handler.
* **[Gantt_Resource_Instance_Usage.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Gantt_Resource_Instance_Usage.html)**: Shows how to use manually created 
instance of a Gantt Resource chart and how to add the after-draw handler.
* **[Line_Chart_After_Draw.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Line_Chart_After_Draw.html)**: Demonstrates how to create and use instance
of a chart and add the after-draw handler.
* **[Line_Chart_Data_Streaming.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Line_Chart_Data_Streaming.html)**: Simple data-streaming demo.
* **[Simple_Charts_On_Stage.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Simple_Charts_On_Stage.html)**: Demonstrates how to create and add simple 
charts on the anychart stage and how to add the after-draw handler.
* **[Simple_Gantt_Project.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Simple_Gantt_Project.html)**: Simple Gantt Project Chart demo.
* **[Simple_Map.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Simple_Map.html)**: Simple Anymap demo.
* **[Simple_Pie.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Simple_Pie.html)**: Simple Pie chart demo.
* **[Simple_Stock_Area.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Simple_Stock_Area.html)**: Simple AnyStock demo.
* **[Software_Sales_Dashboard.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/Software_Sales_Dashboard.html)**: Demonstrates how to use `anychart-stage`
 directive to build the interactive dashboard.
* **[World_Map_Instance_After_Draw.html](https://github.com/AnyChart/AnyChart-AngularJS/blob/master/demos/World_Map_Instance_After_Draw.html)**: World map demo. Shows how to
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
* [Report Issues](http://github.com/AnyChart/anychart/issues)
* [AnyChart Playground](http://playground.anychart.com)
* [AnyChart Documentation](http://docs.anychart.com)
* [AnyChart API Reference](http://api.anychart.com)
* [AnyChart Sample Solutions](http://www.anychart.com/solutions/)
* [AnyChart Integrations](http://www.anychart.com/integrations/)

## License

[© AnyChart.com - JavaScript charts](http://www.anychart.com). All rights reserved.








   