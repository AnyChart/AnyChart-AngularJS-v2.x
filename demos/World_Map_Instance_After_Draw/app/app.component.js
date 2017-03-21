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
var components_1 = require('anychart-angular2/components');
var AppComponent = (function () {
    function AppComponent(acService) {
        this.acService = acService;
        this.mySeriesData = anychart.data.set([
            { name: "Singapore", id: "SG", area: "719", density: "7697", population: "5535000" },
            { name: "Hong Kong", id: "HK", area: "1104", density: "6571", population: "7234800" },
            { name: "Vatican City", id: "VA", area: "0.44", density: "1818", population: "800" },
            { name: "Bangladesh", id: "BD", area: "143998", density: "1109.37", population: "159747262" },
            { name: "India", id: "IN", area: "3287240", density: "390.39", population: "1283321500" },
            { name: "Israel", id: "IL", area: "22072", density: "383.69", population: "8468851" },
            { name: "Belgium", id: "BE", area: "30528", density: "370", population: "11280134" },
            { name: "Philippines", id: "PH", area: "300000", density: "342.29", population: "102687121" },
            { name: "Japan", id: "JP", area: "377944", density: "335.58", population: "126832000" },
            { name: "United Kingdom", id: "GB", area: "242910", density: "262", population: "64105700" },
            { name: "Pakistan", id: "PK", area: "803940", density: "238.93", population: "192084402" },
            { name: "Germany", id: "DE", area: "357168", density: "228", population: "81285000" },
            { name: "Italy", id: "IT", area: "301308", density: "202", population: "60762320" },
            { name: "Anguilla", id: "AI", area: "96", density: "140", population: "13452" },
            { name: "Czech Republic", id: "CZ", area: "78867", density: "133", population: "10517400" },
            { name: "Indonesia", id: "ID", area: "1904569", density: "135", population: "257080000" },
            { name: "Poland", id: "PL", area: "312685", density: "123", population: "38496000" },
            { name: "France", id: "FR", area: "543965", density: "118", population: "64149000" },
            { name: "Armenia", id: "AM", area: "29743", density: "102", population: "3024100" },
            { name: "Austria", id: "AT", area: "83879", density: "102", population: "8572895" },
            { name: "Spain", id: "ES", area: "505990", density: "92", population: "46439864" },
            { name: "Egypt", id: "EG", area: "1002450", density: "90.04", population: "90262915" },
            { name: "Greece", id: "GR", area: "131957", density: "84", population: "11123034" },
            { name: "Ukraine", id: "UA", area: "603628", density: "75", population: "45377581" },
            { name: "Senegal", id: "SN", area: "196722", density: "69", population: "13567338" },
            { name: "Bulgaria", id: "BG", area: "111002", density: "66", population: "7282041" },
            { name: "Ireland", id: "IE", area: "70273", density: "65", population: "4585400" },
            { name: "Ecuador", id: "EC", area: "255595", density: "63", population: "16168300" },
            { name: "Mexico", id: "MX", area: "1967138", density: "61", population: "119713203" },
            { name: "Tajikistan", id: "TJ", area: "143100", density: "57", population: "8160000" },
            { name: "Lithuania", id: "LT", area: "65300", density: "45", population: "2944459" },
            { name: "Madagascar", id: "MG", area: "587041", density: "35", population: "20696070" },
            { name: "Faroe Islands", id: "FO", area: "1399", density: "34", population: "48244" },
            { name: "Zimbabwe", id: "ZW", area: "390757", density: "33", population: "12973808" },
            { name: "United States", id: "US", area: "9826675", density: "32.84", population: "322686937" },
            { name: "Brazil", id: "BR", area: "8515767", density: "23.8", population: "202768562" },
            { name: "Zambia", id: "ZM", area: "752612", density: "17.4", population: "13092666" },
            { name: "Sudan", id: "SD", area: "1839542", density: "16.8", population: "30894000" },
            { name: "New Zealand", id: "NZ", area: "270467", density: "17.21", population: "4654002" },
            { name: "Angola", id: "AO", area: "1246700", density: "16.5", population: "20609294" },
            { name: "Paraguay", id: "PY", area: "406752", density: "16.4", population: "6672631" },
            { name: "Niger", id: "NE", area: "1186408", density: "14.4", population: "17129076" },
            { name: "Russia", id: "RU", area: "17098242", density: "8.42", population: "143975923" },
            { name: "Central African Republic", id: "CF", area: "622436", density: "7.42", population: "4616000" },
            { name: "Gabon", id: "GA", area: "267667", density: "6.25", population: "1672000" },
            { name: "Kazakhstan", id: "KZ", area: "2724900", density: "6.31", population: "17186000" },
            { name: "Australia", id: "AU", area: "7692024", density: "3.12", population: "23975613" },
            { name: "Mongolia", id: "MN", area: "1564100", density: "1.92", population: "3000000" },
            { name: "Greenland", id: "GL", area: "2166000", density: "0.03", population: "55984" },
            { name: "Macau", id: "MO", area: "30.3", density: "21224", population: "643100" },
            { name: "South Korea", id: "KR", area: "100210", density: "503", population: "50423955" },
            { name: "North Korea", id: "KP", area: "122762", density: "205", population: "25155000" }
        ]);
        this.myMap = anychart.map();
        this.bubbleSize = function (chart) {
            chart.maxBubbleSize(50);
            chart.minBubbleSize(2);
        };
        this.myMap.interactivity().selectionMode('none');
        var density_data = this.mySeriesData.mapAs(undefined, { 'size': ['population'] });
        var series = this.myMap.bubble(density_data);
        series.labels().enabled(false);
        series.selectionMode("none");
        series.tooltip().textWrap('byLetter').useHtml(true);
        series.tooltip().textFormatter(function () {
            return '<span style="color: #d9d9d9">Density</span>: ' + parseFloat(this.getDataValue('density')).toLocaleString() + ' pop./km&#178 <br/>' +
                '<span style="color: #d9d9d9">Population</span>: ' + parseInt(this.getDataValue('population')).toLocaleString() + '<br/>' +
                '<span style="color: #d9d9d9">Area</span>: ' + parseInt(this.getDataValue('area')).toLocaleString() + ' km&#178';
        });
        var series_choropleth = this.myMap.choropleth(density_data);
        series_choropleth.selectionMode("none");
        series_choropleth.fill('#eaeaea');
        series_choropleth.stroke('#D2D2D2');
        series_choropleth.hoverStroke('#eaeaea');
        series_choropleth.hoverFill('#D2D2D2');
        series_choropleth.labels(null);
        series_choropleth.tooltip().textWrap('byLetter').useHtml(true);
        series_choropleth.tooltip().textFormatter(function () {
            return '<span style="color: #d9d9d9">Density</span>: ' + parseFloat(this.getDataValue('density')).toLocaleString() + ' pop./km&#178 <br/>' +
                '<span style="color: #d9d9d9">Population</span>: ' + parseInt(this.getDataValue('population')).toLocaleString() + '<br/>' +
                '<span style="color: #d9d9d9">Area</span>: ' + parseInt(this.getDataValue('area')).toLocaleString() + ' km&#178';
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.acService.drawAll();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "<div anymap style=\"width: 100%; height: 600px;\" [acInstance]=\"myMap\" [acChartDraw]=\"bubblesSize\" [acData]=\"mySeriesData\" acGeoData=\"anychart.maps.world\" acTitle=\"Worlds Population by Country\"></div>",
        }), 
        __metadata('design:paramtypes', [components_1.AnychartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map