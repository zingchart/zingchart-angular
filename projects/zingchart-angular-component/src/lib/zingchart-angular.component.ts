import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import zingchart from 'zingchart/es6';
import constants from 'zingchart-constants';
import * as ZingchartAngular from '../@types/zingchart';

const { DEFAULT_WIDTH, DEFAULT_HEIGHT, DEFAULT_OUTPUT, EVENT_NAMES, METHOD_NAMES } = constants;

@Component({
  selector: 'zingchart-angular',
  template: '',
  host: {'[id]': 'chartId'},
  styles: [':host {display: block;}'],
})
export class ZingchartAngularComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {
  @Input() config: ZingchartAngular.graphset | ZingchartAngular.data;
  @Input() id: string;
  @Input() width: string | number;
  @Input() height: string | number;
  @Input() output: string;
  @Input() series: ZingchartAngular.series[];
  @Input() theme: Object;

  chartId: string;
  chartHeight: string | number;
  chartWidth: string | number;
  defaultChartId: string;
  renderObject: any;

  @Output() about_hide: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() about_show: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() animation_end: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() animation_start: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() animation_step: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() beforedestroy: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() bugreport_hide: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() bugreport_show: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() complete: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() data_export: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() dataexport: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() dataload: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() dataparse: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() dataready: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() destroy: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() dimension_change: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() error: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() feed_clear: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() feed_interval_modify: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() feed_start: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() feed_stop: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() gcomplete: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() getdata: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() gload: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() gparse: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() guide_mousemove: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() guide_mouseout: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() heatmap_mousemove: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() history_back: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() history_forward: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() image_save: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() label_click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() label_mousedown: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() label_mouseout: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() label_mouseover: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() label_mouseup: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_hide: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_item_click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_item_mousemove: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_item_mouseout: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_item_mouseover: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_marker_click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_maximize: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_minimize: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_minimize_click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_pagination_click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_show: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() legend_drag_mousedown: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() lens_hide: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() lens_show: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() load: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() maps_zoom: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() menu_item_click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() modify: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() modulesready: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() mousewheel: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_add: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_deselect: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_doubleclick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_mousedown: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_mouseout: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_mouseover: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_mouseup: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_remove: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_select: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() node_set: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() objectsinit: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() objectsready: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() overscroll: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_add: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_deselect: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_doubleclick: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_hide: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_modify: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_mouseout: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_mouseover: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_remove: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_select: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() plot_show: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() postzoom: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() print: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() reload: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() render: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() resize: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() setdata: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() shape_click: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() shape_mousedown: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() shape_mouseout: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() shape_mouseover: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() shape_mouseup: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() source_hide: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() source_show: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() swipe: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() touchemove: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() touchend: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() touchstart: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() zingchart_plugins_selection_tool_mouseup: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() zingchart_plugins_selection_tool_selection: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() zoom: EventEmitter<Event> = new EventEmitter<Event>();

  ngOnInit() {
    this.chartId = this.id || `zingchart-ng-${uuid()}`;

    METHOD_NAMES.forEach((method: string) => {
      (this as any)[method] = (args: any) => JSON.stringify(zingchart.exec(this.chartId, method, args));
    });
  }

  ngAfterViewInit() {
    let data = this.config as any;
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch(e) {
        throw new Error('Invalid object');
      }
    }
    if (this.id) {
      this.chartId = this.id;
    }
    if (this.series) {
      if ('graphset' in this.config) {
        if (this.config.graphset && this.config.graphset.length === 1) {
          data['graphset'][0].series = this.series;
        }
      } else {
        data['series'] = this.series;
      }
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

    if (this.theme) {
      this.renderObject['defaults'] = this.theme;
    }

    // Setup event listeners before rendering
    EVENT_NAMES.forEach((event:string) => {
      if((this as any)[event] && (this as any)[event].observers && (this as any)[event].observers.length) {
        zingchart.bind(this.chartId, event, ((result:any) => {
          (this as any)[event].emit(result);
        }));
      }
    });

    zingchart.render(this.renderObject);
  }

  ngOnDestroy() {
    zingchart.exec(this.chartId, 'destroy');  
  }

  ngOnChanges(changes: any) {
    if (changes.config) {
      zingchart.exec(this.chartId, 'setdata', {
        data: changes.config.currentValue,
      });
    } else if (changes.series) {
      let setSeriesData = (id: string, data: any) =>{
        return zingchart.exec(id, 'setseriesdata', {
          graphid: 0,
          data: data,
        });
      }
      if ('series' in this.config) {
        this.config.series = changes.series.currentValue;
        setSeriesData(this.chartId, this.config.series);
      } else if ('graphset' in this.config) {
        if (this.config.graphset && this.config.graphset.length === 1) {
          this.config.graphset[0].series = changes.series.currentValue;
          setSeriesData(this.chartId, this.config.graphset[0].series);
        }
      }
    } else if (changes.width || changes.height) {
      const width = (changes.width && changes.width.currentValue) || this.width;
      const height =
        (changes.height && changes.height.currentValue) || this.height;
      zingchart.exec(this.chartId, 'resize', {
        width,
        height,
      });
    }
  }
}
