/// <reference path="../zingchart.d.ts" />
import { Component, AfterViewInit, OnDestroy, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import zingchart from 'zingchart';

import { ZingchartAngularService } from './zingchart-angular.service';

const METHOD_NAMES = ["addplot", "appendseriesdata", "appendseriesvalues", "getseriesdata", "getseriesvalues", "modifyplot", "removenode", "removeplot", "set3dview", "setnodevalue", "setseriesdata", "setseriesvalues", "downloadCSV", "downloadXLS", "downloadRAW", "exportdata", "getimagedata", "print", "saveasimage", "exportimage", "addmenuitem", "addscalevalue", "destroy", "load", "modify", "reload", "removescalevalue", "resize", "setdata", "setguide", "update", "clearfeed", "getinterval", "setinterval", "startfeed", "stopfeed", "getcharttype", "getdata", "getgraphlength", "getnodelength", "getnodevalue", "getobjectinfo", "getplotlength", "getplotvalues", "getrender", "getrules", "getscales", "getversion", "getxyinfo", "get3dview", "goback", "goforward", "addnote", "removenote", "updatenote", "addobject", "removeobject", "repaintobjects", "updateobject", "addrule", "removerule", "updaterule", "Selection", "clearselection", "deselect", "getselection", "select", "setselection", "clicknode", "closemodal", "disable", "enable", "exitfullscreen", "fullscreen", "hideguide", "hidemenu", "hideplot/plothide", "legendmaximize", "legendminimize", "openmodal", "showhoverstate", "showguide", "showmenu", "showplot/plotshow", "toggleabout", "togglebugreport", "toggledimension", "togglelegend", "togglesource", "toggleplot", "hidetooltip", "locktooltip", "showtooltip", "unlocktooltip",  "viewall", "zoomin", "zoomout", "zoomto", "zoomtovalues"];
const EVENT_NAMES = [
  'about_hide',
  'about_show',
  'animation_end',
  'animation_start',
  'animation_step',
  'beforedestroy',
  'bugreport_hide',
  'bugreport_show',
  'click',
  'complete',
  'data_export',
  'dataexport',
  'dataload',
  'dataparse',
  'dataready',
  'destroy',
  'dimension_change',
  'error',
  'feed_clear',
  'feed_interval_modify',
  'feed_start',
  'feed_stop',
  'gcomplete',
  'gload',
  'gparse',
  'guide_mousemove',
  'guide_mouseout',
  'guide_mouseout',
  'heatmap.mousemove',
  'history_back',
  'history_forward',
  'image_save',
  'label_click',
  'label_mousedown',
  'label_mouseout',
  'label_mouseover',
  'label_mouseup',
  'legend_hide',
  'legend_item_click',
  'legend_item_mousemove',
  'legend_item_mouseout',
  'legend_item_mouseout',
  'legend_item_mouseover',
  'legend_marker_click',
  'legend_marker_click',
  'legend_maximize',
  'legend_minimize',
  'legend_minimize_click',
  'legend_pagination_click',
  'legend_show',
  'legend_drag_mousedown',
  'lens_hide',
  'lens_show',
  'load',
  'maps_zoom',
  'menu_item_click',
  'modify',
  'modulesready',
  'mousewheel',
  'node_add',
  'node_click',
  'node_deselect',
  'node_doubleclick',
  'node_mousedown',
  'node_mouseout',
  'node_mouseover',
  'node_mouseup',
  'node_remove',
  'node_select',
  'node_set',
  'objectsinit',
  'objectsready',
  'overscroll',
  'plot_add',
  'plot_click',
  'plot_deselect',
  'plot_doubleclick',
  'plot_hide',
  'plot_modify',
  'plot_mouseout',
  'plot_mouseover',
  'plot_remove',
  'plot_select',
  'plot_show',
  'postzoom',
  'print',
  'reload',
  'render',
  'resize',
  'setdata',
  'shape_click',
  'shape_mousedown',
  'shape_mouseout',
  'shape_mouseover',
  'shape_mouseup',
  'source_hide',
  'source_show',
  'swipe',
  'touchemove',
  'touchend',
  'touchstart',
  'zingchart_plugins_selection-tool_mouseup',
  'zingchart_plugins_selection-tool_selection',
  'zoom'
];
const DEFAULT_WIDTH = '100%';
const DEFAULT_HEIGHT = '480';

@Component({
  selector: 'zingchart-angular',
  template: `
    <div id="{{chartId}}"></div>
  `,
  styles: [],
  // providers: [
  
})
export class ZingchartAngularComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() config: zingchart.graphset;
  @Input() id: string;
  @Input() width: string | number;
  @Input() height: string | number;
  @Input() series: [zingchart.series];
  // @Input() series: any;
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
  renderObject: Object;
  
  // constructor(private service: ZingchartAngularService, private ref: ElementRef, private viewRef: ViewContainerRef) { 
  constructor(private service: ZingchartAngularService) { 
    this.service.increment();
    this.chartId = 'zingchart-ng-' + this.service.getCount();
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
    if(this.series) {
      data['series'] = this.series;
    }
    this.chartWidth = this.width || DEFAULT_WIDTH;
    this.chartHeight = this.height || DEFAULT_HEIGHT;
    this.renderObject = {
      id: this.chartId,
      data: data,
      width: this.chartWidth,
      height: this.chartHeight,
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
    this.service.decrement();
    zingchart.exec(this.chartId, 'destroy');  
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.config) {
      zingchart.exec(this.chartId, 'setdata', {
        data: changes.config.currentValue,
      });
    } else if(changes.series) {
      this.config.series = changes.series.currentValue;
      zingchart.exec(this.chartId, 'setdata', {
        data: this.config,
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
