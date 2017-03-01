[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](http://www.anychart.com)

Angular2 directives for AnyChart
=========

AngularJS v2.x directives for AnyChart provide an easy way to use [AnyChart JavaScript Charts](http://anychart.com)
with [Angular2 Framework](https://angular.io/). 

## Table of Contents

* [Download and install](#download-and-install)
* [Quick start](#quick-start)
* [Demos](#demos)
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
Despite the AnyChart-Angular2 integration is available with package managers,
the license allows to modify and use it freely. This quick start guide
clarifies the structure of integration project and explains how it works and 
can be used.

#### Package directory

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


#### Build
Since the integration is cloned from GitHub and Node Package Manager 
(npm command) is available in command line, the following command compiles
source code to **dist/** directory:
```sh
npm run build
``` 

#### Run
In [demos](https://github.com/anychart-integrations/angular2-demos) the 
[SystemJS](https://github.com/systemjs/systemjs) loader is used for 
dynamic modules loading.

1) If needed, `package.json` can be configured to declare custom run-commands
and to add required dependencies excepting already included.

2) Run `npm install` command to load all required npm modules.

3) Configure `systemjs.config.js` to declare the mapping of dependencies of
application. In 'map'-section this integration library is declared
```
...
'anychart-angular2': 'node_modules/anychart-angular2'
```

4) Also in 'packages'-section anychart-angular2 library is declared as well:
```
'anychart-angular2': {
  main: 'index'
}
```

5) These actions allow to use anychart-angular2 integration in application
like this:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Angular QuickStart</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Polyfill(s) for older browsers -->
    <script src="node_modules/core-js/client/shim.min.js"></script>

    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/anychart/dist/anychart-bundle.min.js"></script>

    <script src="systemjs.config.js"></script>
    <script>
        System.import('app').catch(function(err){ console.error(err); });
    </script>
</head>

<body>
<my-app>Loading AppComponent content here ...</my-app>
</body>
</html>
```

6) Since 'app' folder is declared in `systemjs.config.js` as application root 
directory, the application's Angular2 modules and components can be created
right there.



##Demos
Integration demos are available in
[AnyChart GitHub Demos Repository](https://github.com/anychart-integrations/angular2-demos). 



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








   