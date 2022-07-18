import React, { useLayoutEffect } from 'react';
import './App.css';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";


function App() {
  useLayoutEffect(() => {
    
  let root = am5.Root.new("chartdiv");
  root.dateFormatter.setAll({
    dateFormat: "yyyy-MM-dd HH:mm",
    dateFields: ["valueX", "openValueX"]
  });


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  let chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: false,
    panY: false,
    wheelX: "panX",
    wheelY: "zoomX",
    layout: root.verticalLayout
  }));

  let colors = chart.get("colors");

  // Data
  let data = [{
    category: "仕事",
    start: new Date("2022-01-23 12:34"),
    end: new Date("2022-01-28 15:34"),
    columnSettings: {
      fill: am5.Color.brighten(colors.getIndex(0), 0)
    },
    task: "会議"
    }, {
      category: "出張",
      start: new Date("2022-01-01 13:00"),
      end: new Date("2022-01-10 13:00"),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(2), 0)
      },
      task: "出張"
    },  {
      category: "試験",
      start: new Date("2022-01-01 13:00"),
      end: new Date("2022-01-03 13:00"),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(4), 0)
      },
      task: "資格試験"
    }, {
      category: "入院",
      start: new Date("2022-01-01 13:00"),
      end: new Date("2022-01-22 13:00"),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(6), 0)
      },
      task: "検査入院"
    }, {
      category: "旅行",
      start: new Date("2022-01-31"),
      end: new Date("2022-04-10"),
      columnSettings: {
        fill: am5.Color.brighten(colors.getIndex(8), 0)
      },
      task: "ハワイ"
    }];
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  let yAxis = chart.yAxes.push(
    am5xy.CategoryAxis.new(root, {
      categoryField: "category",
      renderer: am5xy.AxisRendererY.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    })
  );

  yAxis.data.setAll([
    { category: "仕事" },
    { category: "出張" },
    { category: "試験" },
    { category: "入院" },
    { category: "旅行" }
  ]);

  let xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "minute", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, {})
    })
  );


  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  let series = chart.series.push(am5xy.ColumnSeries.new(root, {
    xAxis: xAxis,
    yAxis: yAxis,
    openValueXField: "start",
    valueXField: "end",
    categoryYField: "category",
    sequencedInterpolation: true
  }));

  series.columns.template.setAll({
    templateField: "columnSettings",
    strokeOpacity: 0,
    tooltipText: "{task}:\n[bold]{openValueX}[/] - [bold]{valueX}[/]"
  });

  series.data.processor = am5.DataProcessor.new(root, {
  dateFields: ["start", "end"],
  dateFormat: "yyyy-MM-dd HH:mm"
});

  series.data.setAll(data);

  // Add scrollbars
  chart.set("scrollbarX", am5.Scrollbar.new(root, { orientation: "horizontal" }));

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear();
  chart.appear(1000, 100);

  return () => {
        root.dispose();
      };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}
export default App;