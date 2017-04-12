import { Component, OnInit } from '@angular/core';
import { AnychartService } from 'anychart-angular2/components';
import { enableProdMode } from '@angular/core';

enableProdMode();

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<div anychartStage style="width: 100%; height: 521px;"></div>`,
})
export class AppComponent {

  constructor(private acService: AnychartService) {

    // Filters
    var regionFilter: any = null;
    var deviceFilter: any = null;
    var categoryFilter: any = null;

    // Charting objects
    var unitsChart: any = null;
    var regionChart: any = null;
    var deviceChart: any = null;
    var categoryChart: any = null;
    var unitSeries: any = null;
    var regionSeries: any = null;
    var deviceSeries: any = null;
    var categorySeries: any = null;

    var unitsTitle: any = null;
    var titleFilter: string = 'to filter click on bar charts below';

    // Raw dashboard data, see data format in the end of the file
    var rawData = generateData();


    function unitsSoldChart() {
      var chart: any;
      chart = anychart.area();
      chart.bounds(0, 0, '100%', '50%');
      chart.padding(15, 0, 0, 0);
      // Set chart title text
      unitsTitle = chart.title().useHtml(true).hAlign('center').enabled(true);
      unitsTitle.text('Income per Month<br><span style="color:#929292; font-size: 12px;">(' + titleFilter + ')</span>');

      // Create xAxis
      var xAxis = chart.xAxis();
      xAxis.title(false);
      xAxis.staggerMode(false);
      chart.yAxis().labels().format(function() {
        return formatMoney(parseInt(this.value), 0, '.', ',');
      });

      // Create area series
      unitSeries = chart.area();
      unitSeries.tooltip().titleFormat(function() {
        return this.x
      });
      unitSeries.tooltip().format(function() {
        return '$' + formatMoney(this.value, 0, '.', ',')
      });
      return chart;
    }


    function filterBarChart() {
      var chart: any;
      chart = anychart.bar();
      chart.title().enabled(true).fontSize(14);
      chart.padding(35, 5, 15, 15);
      chart.yAxis().enabled(false);
      return chart;
    }


    // Setup same settings for all charts
    function setupBarSeriesSettings(series: any) {
      series.tooltip().titleFormat(function() {
        return this.x
      });
      series.tooltip().format(function() {
        return '$' + formatMoney(this.value, 0, '.', ',')
      });
      series.listen('pointClick', function(e: any) {

        var series = e.target;
        var seriesName = series.name();
        var categoryName = e.iterator.get('x');


        switch (seriesName) {
          case 'regions':
            regionFilter = (regionFilter && regionFilter == categoryName) ? null : categoryName;
            break;
          case 'devices':
            deviceFilter = (deviceFilter && deviceFilter == categoryName) ? null : categoryName;
            break;
          case 'categories':
            categoryFilter = (categoryFilter && categoryFilter == categoryName) ? null : categoryName;
            break;
        }

        updateData();
      });
    }


    function updateData() {
      var hoverBarsSeriesColor = '#ffd54f';
      var unitMap = {};
      var territoryMap = {};
      var platformMap = {};
      var categoryMap = {};

      if (!(regionFilter || deviceFilter || categoryFilter)) titleFilter = 'to filter click on bar charts below';
      else {
        titleFilter = '';
        if (regionFilter) titleFilter = 'in ' + regionFilter + ' ';
        if (deviceFilter) titleFilter = titleFilter + 'on ' + deviceFilter + ' ';
        if (categoryFilter) titleFilter = titleFilter + 'in category "' + categoryFilter + '"';
      }
      unitsTitle.text('Income per Month<br><span  style="color:#929292; font-size: 12px;">(' + titleFilter + ')</span>');

      for (var i = 0, count = rawData.length; i < count; i++) {
        var dataItem = rawData[i];

        var fitTerritoryFilter = !regionFilter || (regionFilter && regionFilter == dataItem['region']);
        var fitPlatformFilter = !deviceFilter || (deviceFilter && deviceFilter == dataItem['device']);
        var fitCategoryFilter = !categoryFilter || (categoryFilter && categoryFilter == dataItem['category']);


        if (fitTerritoryFilter && fitPlatformFilter && fitCategoryFilter) {
          var unitsMapItem = unitMap[dataItem.x];
          if (unitsMapItem) {
            unitMap[dataItem.x] = [dataItem.x, unitsMapItem[1] + dataItem.value];
          } else {
            unitMap[dataItem.x] = [dataItem.x, dataItem.value];
          }
        }

        if (fitPlatformFilter && fitCategoryFilter) {
          var territoryMapItem = territoryMap[dataItem.region];
          if (territoryMapItem) {
            territoryMapItem.value += dataItem.value;
          } else {
            territoryMapItem = {x: dataItem.region, value: dataItem.value};
            territoryMap[dataItem.region] = territoryMapItem;
          }
          territoryMapItem['fill'] = territoryMapItem.x == regionFilter ? hoverBarsSeriesColor : undefined;
          territoryMapItem['stroke'] = territoryMapItem.x == regionFilter ? anychart.color.darken(hoverBarsSeriesColor) : undefined;
        }

        if (fitTerritoryFilter && fitCategoryFilter) {
          var platformMapItem = platformMap[dataItem.device];
          if (platformMapItem) {
            platformMapItem.value += dataItem.value;
          } else {
            platformMapItem = {x: dataItem.device, value: dataItem.value};
            platformMap[dataItem.device] = platformMapItem;
          }
          platformMapItem['fill'] = platformMapItem.x == deviceFilter ? hoverBarsSeriesColor : undefined;
          platformMapItem['stroke'] = platformMapItem.x == deviceFilter ? anychart.color.darken(hoverBarsSeriesColor) : undefined;
        }

        if (fitTerritoryFilter && fitPlatformFilter) {
          var categoryMapItem = categoryMap[dataItem.category];
          if (categoryMapItem) {
            categoryMapItem.value = dataItem.value;
          } else {
            categoryMapItem = {x: dataItem.category, value: dataItem.value};
            categoryMap[dataItem.category] = categoryMapItem;
          }
          categoryMapItem['fill'] = categoryMapItem.x == categoryFilter ? hoverBarsSeriesColor : undefined;
          categoryMapItem['stroke'] = categoryMapItem.x == categoryFilter ? anychart.color.darken(hoverBarsSeriesColor) : undefined;
        }
      }

      var territoryData = getValues(territoryMap);
      var platformData = getValues(platformMap);
      var categoryData = getValues(categoryMap);
      var unitData = getValues(unitMap);

      regionSeries.data(territoryData);
      deviceSeries.data(platformData);
      categorySeries.data(categoryData);
      unitSeries.data(unitData);
    }


    function generateData() {
      var data: Array<any> = [];
      var dates = [
        Date.UTC(2014, 0, 1), Date.UTC(2014, 1, 1), Date.UTC(2014, 2, 1), Date.UTC(2014, 3, 1),
        Date.UTC(2014, 4, 1), Date.UTC(2014, 5, 1), Date.UTC(2014, 6, 1),
        Date.UTC(2014, 7, 1), Date.UTC(2014, 8, 1), Date.UTC(2014, 9, 1),
        Date.UTC(2014, 10, 1), Date.UTC(2014, 11, 1)
      ];
      var territories = ['Europe', 'Asia Pacific', 'USA and Canada'];
      var platforms = ['iPhone', 'iPad', 'Desktop'];
      var categories = ['Games', 'Social Networking', 'Photo & Video'];
      var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      for (var d = 0, datesCount = dates.length; d < datesCount; d++) {
        for (var t = 0, territoriesCount = territories.length; t < territoriesCount; t++) {
          for (var p = 0, platformsCount = platforms.length; p < platformsCount; p++) {
            for (var c = 0, categoriesCount = categories.length; c < categoriesCount; c++) {
              var date = new Date(dates[d]);
              data.push({
                x: monthNames[date.getMonth()],
                value: Math.floor((Math.random() * 100) + 1),
                region: territories[t],
                device: platforms[p],
                category: categories[c]
              });
            }
          }
        }
      }

      return data;
    }


    function getValues(obj: Object) {
      var res: Array<any> = [];
      var i = 0;
      for (var key in obj) {
        res[i++] = obj[key];
      }
      return res;
    }


    function formatMoney(value: any, c: any, d: any, t: any) {
      var n = value,
          c = isNaN(c = Math.abs(c)) ? 2 : c,
          d = d == undefined ? "." : d,
          t = t == undefined ? "," : t,
          s = n < 0 ? "-" : "",
          i: any = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
          j: any = (j = i.length) > 3 ? j % 3 : 0;
      return <any> (s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : ""));
    }

    // Create Units sold chart, Area
    unitsChart = unitsSoldChart();


    // Create filter bar chart by regions
    regionChart = filterBarChart();
    regionChart.bounds(0, '50%', '33%', '50%');
    regionChart.title().text('Sales by Region');
    regionSeries = regionChart.bar();
    regionSeries.name('regions');
    setupBarSeriesSettings(regionSeries);

    // Create filter bar chart by device type
    deviceChart = filterBarChart();
    deviceChart.bounds('33%', '50%', '33%', '50%');
    deviceChart.title().text('Sales by Device Type');
    deviceSeries = deviceChart.bar();
    deviceSeries.name('devices');
    setupBarSeriesSettings(deviceSeries);

    // Create filter bar chart by device type
    categoryChart = filterBarChart();
    categoryChart.bounds('66%', '50%', '34%', '50%');
    categoryChart.title().text('Sales by Category');
    categorySeries = categoryChart.bar();
    categorySeries.name('categories');
    setupBarSeriesSettings(categorySeries);

    updateData();

    this.acService.addChart(unitsChart, undefined, 'unitsChart');
    this.acService.addChart(regionChart, undefined, 'regionChart');
    this.acService.addChart(deviceChart, undefined, 'deviceChart');
    this.acService.addChart(categoryChart, undefined, 'categoryChart');
  }



  ngAfterViewInit() {
    this.acService.drawAll();
  }
}
