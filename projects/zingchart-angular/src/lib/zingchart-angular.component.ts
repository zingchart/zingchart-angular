/// <reference path="../zingchart.d.ts" />
import { Component, AfterViewInit, OnDestroy, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { v4 as uuid } from 'uuid';
import constants from 'zingchart-constants';
import ZingchartAngular from 'zingchart-angular/zingchart';
const { DEFAULT_WIDTH, DEFAULT_HEIGHT, DEFAULT_OUTPUT, EVENT_NAMES, METHOD_NAMES } = constants;


@Component({
  selector: 'zingchart-angular',
  template: '',
  host: {'[id]': 'chartId'},
  styles: [':host {display: block;}'],
})
export class ZingchartAngularComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() config: ZingchartAngular.graphset;
  @Input() id: string;
  @Input() width: string | number;
  @Input() output: string;
  @Input() height: string | number;
  @Input() series: ZingchartAngular.series[];
  @Input() theme: Object;

  @Output() about_hide: EventEmitter<object> = new EventEmitter<object>();
  @Output() about_show: EventEmitter<object> = new EventEmitter<object>();
  @Output() animation_end: EventEmitter<object> = new EventEmitter<object>();
  @Output() animation_start: EventEmitter<object> = new EventEmitter<object>();
  @Output() animation_step: EventEmitter<object> = new EventEmitter<object>();
  @Output() beforedestroy: EventEmitter<object> = new EventEmitter<object>();
  @Output() bugreport_hide: EventEmitter<object> = new EventEmitter<object>();
  @Output() bugreport_show: EventEmitter<object> = new EventEmitter<object>();
  @Output() click: EventEmitter<object> = new EventEmitter<object>();
  @Output() complete: EventEmitter<object> = new EventEmitter<object>();
  @Output() data_export: EventEmitter<object> = new EventEmitter<object>();
  @Output() dataexport: EventEmitter<object> = new EventEmitter<object>();
  @Output() dataload: EventEmitter<object> = new EventEmitter<object>();
  @Output() dataparse: EventEmitter<object> = new EventEmitter<object>();
  @Output() dataready: EventEmitter<object> = new EventEmitter<object>();
  @Output() destroy: EventEmitter<object> = new EventEmitter<object>();
  @Output() dimension_change: EventEmitter<object> = new EventEmitter<object>();
  @Output() error: EventEmitter<object> = new EventEmitter<object>();
  @Output() feed_clear: EventEmitter<object> = new EventEmitter<object>();
  @Output() feed_interval_modify: EventEmitter<object> = new EventEmitter<object>();
  @Output() feed_start: EventEmitter<object> = new EventEmitter<object>();
  @Output() feed_stop: EventEmitter<object> = new EventEmitter<object>();
  @Output() gcomplete: EventEmitter<object> = new EventEmitter<object>();
  @Output() getdata: EventEmitter<object> = new EventEmitter<object>();
  @Output() gload: EventEmitter<object> = new EventEmitter<object>();
  @Output() gparse: EventEmitter<object> = new EventEmitter<object>();
  @Output() guide_mousemove: EventEmitter<object> = new EventEmitter<object>();
  @Output() guide_mouseout: EventEmitter<object> = new EventEmitter<object>();
  @Output() heatmap_mousemove: EventEmitter<object> = new EventEmitter<object>();
  @Output() history_back: EventEmitter<object> = new EventEmitter<object>();
  @Output() history_forward: EventEmitter<object> = new EventEmitter<object>();
  @Output() image_save: EventEmitter<object> = new EventEmitter<object>();
  @Output() label_click: EventEmitter<object> = new EventEmitter<object>();
  @Output() label_mousedown: EventEmitter<object> = new EventEmitter<object>();
  @Output() label_mouseout: EventEmitter<object> = new EventEmitter<object>();
  @Output() label_mouseover: EventEmitter<object> = new EventEmitter<object>();
  @Output() label_mouseup: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_hide: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_item_click: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_item_mousemove: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_item_mouseout: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_item_mouseover: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_marker_click: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_maximize: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_minimize: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_minimize_click: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_pagination_click: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_show: EventEmitter<object> = new EventEmitter<object>();
  @Output() legend_drag_mousedown: EventEmitter<object> = new EventEmitter<object>();
  @Output() lens_hide: EventEmitter<object> = new EventEmitter<object>();
  @Output() lens_show: EventEmitter<object> = new EventEmitter<object>();
  @Output() load: EventEmitter<object> = new EventEmitter<object>();
  @Output() maps_zoom: EventEmitter<object> = new EventEmitter<object>();
  @Output() menu_item_click: EventEmitter<object> = new EventEmitter<object>();
  @Output() modify: EventEmitter<object> = new EventEmitter<object>();
  @Output() modulesready: EventEmitter<object> = new EventEmitter<object>();
  @Output() mousewheel: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_add: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_click: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_deselect: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_doubleclick: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_mousedown: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_mouseout: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_mouseover: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_mouseup: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_remove: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_select: EventEmitter<object> = new EventEmitter<object>();
  @Output() node_set: EventEmitter<object> = new EventEmitter<object>();
  @Output() objectsinit: EventEmitter<object> = new EventEmitter<object>();
  @Output() objectsready: EventEmitter<object> = new EventEmitter<object>();
  @Output() overscroll: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_add: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_click: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_deselect: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_doubleclick: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_hide: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_modify: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_mouseout: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_mouseover: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_remove: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_select: EventEmitter<object> = new EventEmitter<object>();
  @Output() plot_show: EventEmitter<object> = new EventEmitter<object>();
  @Output() postzoom: EventEmitter<object> = new EventEmitter<object>();
  @Output() print: EventEmitter<object> = new EventEmitter<object>();
  @Output() reload: EventEmitter<object> = new EventEmitter<object>();
  @Output() render: EventEmitter<object> = new EventEmitter<object>();
  @Output() resize: EventEmitter<object> = new EventEmitter<object>();
  @Output() setdata: EventEmitter<object> = new EventEmitter<object>();
  @Output() shape_click: EventEmitter<object> = new EventEmitter<object>();
  @Output() shape_mousedown: EventEmitter<object> = new EventEmitter<object>();
  @Output() shape_mouseout: EventEmitter<object> = new EventEmitter<object>();
  @Output() shape_mouseover: EventEmitter<object> = new EventEmitter<object>();
  @Output() shape_mouseup: EventEmitter<object> = new EventEmitter<object>();
  @Output() source_hide: EventEmitter<object> = new EventEmitter<object>();
  @Output() source_show: EventEmitter<object> = new EventEmitter<object>();
  @Output() swipe: EventEmitter<object> = new EventEmitter<object>();
  @Output() touchemove: EventEmitter<object> = new EventEmitter<object>();
  @Output() touchend: EventEmitter<object> = new EventEmitter<object>();
  @Output() touchstart: EventEmitter<object> = new EventEmitter<object>();
  @Output() zingchart_plugins_selection_tool_mouseup: EventEmitter<object> = new EventEmitter<object>();
  @Output() zingchart_plugins_selection_tool_selection: EventEmitter<object> = new EventEmitter<object>();
  @Output() zoom: EventEmitter<object> = new EventEmitter<object>();

  chartId: string;
  chartWidth: string | number;
  chartHeight: string | number;
  defaultChartId: string;
  renderObject: Object;

  ngOnInit() {
    this.chartId = this.id || `zingchart-ng-${uuid()}`;
    METHOD_NAMES.forEach((method) => {
      this[method] = (args) => JSON.stringify(zingchart.exec(this.chartId, method, args));
    });
  }

  ngAfterViewInit() {
    let data = this.config;
    if(typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch(e) {
        throw new Error('Invalid object');
      }
    }
    if(this.id) {
      this.chartId = this.id;
    }
    if(this.series) {
      data['series'] = this.series;
    }
    this.chartWidth = this.width || DEFAULT_WIDTH;
    this.chartHeight = this.height || DEFAULT_HEIGHT;
    this.output = this.output || DEFAULT_OUTPUT;
    
    this.renderObject = {
      id: this.chartId,
      data: data,
      width: this.chartWidth,
      height: this.chartHeight,
      output: this.output,
    }
    if(this.theme) {
      this.renderObject['defaults'] = this.theme;
    }

    // Setup event listeners before rendering
    EVENT_NAMES.forEach((event) => {
      if(this[event] && this[event].observers && this[event].observers.length) {
        zingchart.bind(this.chartId, event, ((result) => {
          this[event].emit(result);
        }));
      }
    });
    
    zingchart.render(this.renderObject);
  }
  
  ngOnDestroy() {
    zingchart.exec(this.chartId, 'destroy');  
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.config) {
      zingchart.exec(this.chartId, 'setdata', {
        data: changes.config.currentValue,
      });
    } else if(changes.series) {
      this.config.series = changes.series.currentValue;
      zingchart.exec(this.chartId, 'setseriesdata', {
        graphid: 0,
        data: this.config.series,
      });
    } else if(changes.width || changes.height) {
      const width = (changes.width && changes.width.currentValue) || this.width;
      const height = (changes.height && changes.height.currentValue) || this.height;
      zingchart.exec(this.chartId, 'resize', {
        width,
        height,
      });
    }
  }

}
