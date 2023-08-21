// Type definitions for zingchart 2.9.3
// Project: https://github.com/zingchart
// Definitions by: Danny Juergens
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3;

// type KeysFrom<T, U> = { [K in keyof U]: K extends keyof T ? U[K] : never }
// interface ThingOptions extends KeysFrom<Thing, _ZingchartAngular> {}

import {default as _ZingchartAngular} from './index';

export as namespace ZingchartAngular;
export function render(config: object): null;

export interface backgroundMarker extends _ZingchartAngular.backgroundMarker {}
export interface backgroundState extends _ZingchartAngular.backgroundState {}
export interface calloutTip extends _ZingchartAngular.calloutTip {}
export interface choropleth extends _ZingchartAngular.choropleth {}
export interface contextMenu extends _ZingchartAngular.contextMenu {}
export interface contextMenuGui extends _ZingchartAngular.contextMenuGui {}
export interface crosshairX extends _ZingchartAngular.crosshairX {}
export interface crosshairY extends _ZingchartAngular.crosshairY {}
export interface gridStyles extends _ZingchartAngular.gridStyles {}
export interface guideLabel extends _ZingchartAngular.guideLabel {}
export interface highlightMarker extends _ZingchartAngular.highlightMarker {}
export interface highlightState extends _ZingchartAngular.highlightState {}
export interface hoverMarker extends _ZingchartAngular.hoverMarker {}
export interface hoverState extends _ZingchartAngular.hoverState {}
export interface itemOff extends _ZingchartAngular.itemOff {}
export interface label extends _ZingchartAngular.label {}
export interface legendItem extends _ZingchartAngular.legendItem {}
export interface legendMarker extends _ZingchartAngular.legendMarker {}
export interface link extends _ZingchartAngular.link {}
export interface minorGuide extends _ZingchartAngular.minorGuide {}
export interface minorTick extends _ZingchartAngular.minorTick {}
export interface noData extends _ZingchartAngular.noData {}
export interface node extends _ZingchartAngular.node {}
export interface pageOff extends _ZingchartAngular.pageOff {}
export interface pageOn extends _ZingchartAngular.pageOn {}
export interface pageStatus extends _ZingchartAngular.pageStatus {}
export interface plot extends _ZingchartAngular.plot {}
export interface plotLabel extends _ZingchartAngular.plotLabel {}
export interface plotRules extends _ZingchartAngular.plotRules {}
export interface refLine extends _ZingchartAngular.refLine {}
export interface scaleK extends _ZingchartAngular.scaleK {}
export interface scaleLabel extends _ZingchartAngular.scaleLabel {}
export interface scaleR extends _ZingchartAngular.scaleR {}
export interface scaleV extends _ZingchartAngular.scaleV {}
export interface scaleX extends _ZingchartAngular.scaleX {}
export interface scaleY extends _ZingchartAngular.scaleY {}
export interface scrollXScrollY extends _ZingchartAngular.scrollXScrollY {}
export interface selectedMarker extends _ZingchartAngular.selectedMarker {}
export interface selectedState extends _ZingchartAngular.selectedState {}
export interface tooltip extends _ZingchartAngular.tooltip {}
export interface tooltipRules extends _ZingchartAngular.tooltipRules {}
export interface trendDown extends _ZingchartAngular.trendDown {}
export interface trendEqual extends _ZingchartAngular.trendEqual {}
export interface trendUp extends _ZingchartAngular.trendUp {}
export interface valueBox extends _ZingchartAngular.valueBox {}
export interface valueBoxRules extends _ZingchartAngular.valueBoxRules {}
export interface globals extends _ZingchartAngular.globals {}
export interface graphset extends _ZingchartAngular.graphset {}
export interface behavior extends _ZingchartAngular.behavior {}
export interface data extends _ZingchartAngular.data {}
export interface gui extends _ZingchartAngular.gui {}
export interface history extends _ZingchartAngular.history {}
export interface refresh extends _ZingchartAngular.refresh {}
export interface series extends _ZingchartAngular.series {}
export interface theme extends _ZingchartAngular.theme {}