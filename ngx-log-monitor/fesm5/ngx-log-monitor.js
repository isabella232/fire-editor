import { __assign } from 'tslib';
import { ChangeDetectionStrategy, Component, Input, NgZone, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ normalizeLogMessage = function (msg) {
    return (__assign({}, msg, { type: (msg.type ? msg.type : 'LOG'), timestamp: (msg.timestamp ? msg.timestamp : new Date().toLocaleString()) }));
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogMonitorComponent = /** @class */ (function () {
    function LogMonitorComponent(zone) {
        this.zone = zone;
        this.history = [];
        this.theme = 'dark';
        this.icons = true;
        this.customClass = 'log-container';
        this.animated = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    LogMonitorComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes["history"]) {
            this.history = changes["history"].currentValue.map(normalizeLogMessage);
        }
        if (changes["logStream"] && changes["logStream"].currentValue) {
            this.zone.run(function () {
                var /** @type {?} */ normalizedMsg = normalizeLogMessage(changes["logStream"].currentValue);
                _this.history.push(normalizedMsg);
                setTimeout(function () { return _this.scrollToBottom(); });
            });
        }
    };
    /**
     * @return {?}
     */
    LogMonitorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.scrollToBottom();
    };
    /**
     * @return {?}
     */
    LogMonitorComponent.prototype.scrollToBottom = /**
     * @return {?}
     */
    function () {
        this.container.nativeElement.scrollTop = this.container.nativeElement.scrollHeight;
    };
    LogMonitorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'log-monitor',
                    template: "\n<div *ngIf=\"title\" class=\"title-bar\" [ngClass]=\"theme+'-theme'\">&#9002; {{title}}</div>\n<div\n  #container\n  class=\"container\"\n  [ngClass]=\"theme+'-theme'\"\n>\n  <span\n    class=\"msg-item {{'msg-'+(log.type.toLowerCase())}}\"\n    *ngFor=\"let log of history\"\n    [ngClass]=\"{'animated': animated}\"\n  >\n    <span *ngIf=\"icons\" [ngSwitch]=\"log.type\">\n      <ng-container *ngSwitchCase=\"'ERR'\">&#10008;</ng-container>\n      <ng-container *ngSwitchCase=\"'SUCCESS'\">&#10004;</ng-container>\n      <ng-container *ngSwitchCase=\"'LOG'\">&#10097;</ng-container>\n      <ng-container *ngSwitchCase=\"'WARN'\">&#8252;</ng-container>\n      <ng-container *ngSwitchCase=\"'INFO'\">&#8505;</ng-container>\n    </span>\n\n    [{{log.timestamp}}]: {{log.message}}\n  </span>\n\n</div>\n",
                    styles: [".container{position:relative;width:100%;height:100%;padding-top:5px;padding-bottom:5px;overflow-y:auto;font-family:\"Lucida Console\",Monaco,monospace,sans-serif}.animated{-webkit-animation:260ms fadein;animation:260ms fadein}@-webkit-keyframes fadein{from{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fadein{from{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}.title-bar{padding:5px;font-weight:600}.dark-theme.title-bar{border-bottom:1px solid #3c3c3c;background:#1f1f1f}.light-theme.title-bar{border-bottom:1px solid #a8acad;background:#dbdfe0}.msg-item{display:block;margin-left:6px;font-size:.85em}.msg-list{margin:0;height:100%}.light-theme{color:#212121;background:#ecf0f1}.light-theme .msg-info{color:#2980b9}.light-theme .msg-err{color:#c0392b}.light-theme .msg-success{color:#27ae60}.light-theme .msg-warn{color:#f39c12}.dark-theme{color:#ecf0f1;background:#212121}.dark-theme .msg-info{color:#3498db}.dark-theme .msg-err{color:#e74c3c}.dark-theme .msg-success{color:#2ecc71}.dark-theme .msg-warn{color:#f1c40f}"],
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    LogMonitorComponent.ctorParameters = function () { return [
        { type: NgZone, },
    ]; };
    LogMonitorComponent.propDecorators = {
        "title": [{ type: Input },],
        "logStream": [{ type: Input },],
        "history": [{ type: Input },],
        "theme": [{ type: Input },],
        "icons": [{ type: Input },],
        "customClass": [{ type: Input },],
        "animated": [{ type: Input },],
        "container": [{ type: ViewChild, args: ['container',] },],
    };
    return LogMonitorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogMonitorModule = /** @class */ (function () {
    function LogMonitorModule() {
    }
    LogMonitorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [LogMonitorComponent],
                    exports: [LogMonitorComponent]
                },] },
    ];
    return LogMonitorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { LogMonitorComponent, LogMonitorModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWxvZy1tb25pdG9yLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbG9nLW1vbml0b3IvbGliL2hlbHBlcnMvbG9nLW1lc3NhZ2UuaGVscGVyLnRzIiwibmc6Ly9uZ3gtbG9nLW1vbml0b3IvbGliL2xvZy1tb25pdG9yLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWxvZy1tb25pdG9yL2xpYi9sb2ctbW9uaXRvci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dNZXNzYWdlfSBmcm9tICcuLi9tb2RlbHMvbG9nLW1lc3NhZ2UubW9kZWwnO1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplTG9nTWVzc2FnZSA9IChtc2c6IExvZ01lc3NhZ2UpOiBMb2dNZXNzYWdlID0+ICh7XG4gIC4uLm1zZyxcbiAgdHlwZTogKG1zZy50eXBlID8gbXNnLnR5cGUgOiAnTE9HJyksXG4gIHRpbWVzdGFtcDogKG1zZy50aW1lc3RhbXAgPyBtc2cudGltZXN0YW1wIDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpIClcbn0pO1xuIiwiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TG9nTWVzc2FnZX0gZnJvbSAnLi9tb2RlbHMvbG9nLW1lc3NhZ2UubW9kZWwnO1xuaW1wb3J0IHtub3JtYWxpemVMb2dNZXNzYWdlfSBmcm9tICcuL2hlbHBlcnMvbG9nLW1lc3NhZ2UuaGVscGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbG9nLW1vbml0b3InLFxuICB0ZW1wbGF0ZTogYFxuPGRpdiAqbmdJZj1cInRpdGxlXCIgY2xhc3M9XCJ0aXRsZS1iYXJcIiBbbmdDbGFzc109XCJ0aGVtZSsnLXRoZW1lJ1wiPiYjOTAwMjsge3t0aXRsZX19PC9kaXY+XG48ZGl2XG4gICNjb250YWluZXJcbiAgY2xhc3M9XCJjb250YWluZXJcIlxuICBbbmdDbGFzc109XCJ0aGVtZSsnLXRoZW1lJ1wiXG4+XG4gIDxzcGFuXG4gICAgY2xhc3M9XCJtc2ctaXRlbSB7eydtc2ctJysobG9nLnR5cGUudG9Mb3dlckNhc2UoKSl9fVwiXG4gICAgKm5nRm9yPVwibGV0IGxvZyBvZiBoaXN0b3J5XCJcbiAgICBbbmdDbGFzc109XCJ7J2FuaW1hdGVkJzogYW5pbWF0ZWR9XCJcbiAgPlxuICAgIDxzcGFuICpuZ0lmPVwiaWNvbnNcIiBbbmdTd2l0Y2hdPVwibG9nLnR5cGVcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidFUlInXCI+JiMxMDAwODs8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidTVUNDRVNTJ1wiPiYjMTAwMDQ7PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInTE9HJ1wiPiYjMTAwOTc7PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInV0FSTidcIj4mIzgyNTI7PC9uZy1jb250YWluZXI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInSU5GTydcIj4mIzg1MDU7PC9uZy1jb250YWluZXI+XG4gICAgPC9zcGFuPlxuXG4gICAgW3t7bG9nLnRpbWVzdGFtcH19XToge3tsb2cubWVzc2FnZX19XG4gIDwvc3Bhbj5cblxuPC9kaXY+XG5gLFxuICBzdHlsZXM6IFtgLmNvbnRhaW5lcntwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BhZGRpbmctdG9wOjVweDtwYWRkaW5nLWJvdHRvbTo1cHg7b3ZlcmZsb3cteTphdXRvO2ZvbnQtZmFtaWx5OlwiTHVjaWRhIENvbnNvbGVcIixNb25hY28sbW9ub3NwYWNlLHNhbnMtc2VyaWZ9LmFuaW1hdGVkey13ZWJraXQtYW5pbWF0aW9uOjI2MG1zIGZhZGVpbjthbmltYXRpb246MjYwbXMgZmFkZWlufUAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW57ZnJvbXtvcGFjaXR5OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTEwcHgpfXRve29wYWNpdHk6MTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfX1Aa2V5ZnJhbWVzIGZhZGVpbntmcm9te29wYWNpdHk6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xMHB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTBweCl9dG97b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9fS50aXRsZS1iYXJ7cGFkZGluZzo1cHg7Zm9udC13ZWlnaHQ6NjAwfS5kYXJrLXRoZW1lLnRpdGxlLWJhcntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjM2MzYzNjO2JhY2tncm91bmQ6IzFmMWYxZn0ubGlnaHQtdGhlbWUudGl0bGUtYmFye2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNhOGFjYWQ7YmFja2dyb3VuZDojZGJkZmUwfS5tc2ctaXRlbXtkaXNwbGF5OmJsb2NrO21hcmdpbi1sZWZ0OjZweDtmb250LXNpemU6Ljg1ZW19Lm1zZy1saXN0e21hcmdpbjowO2hlaWdodDoxMDAlfS5saWdodC10aGVtZXtjb2xvcjojMjEyMTIxO2JhY2tncm91bmQ6I2VjZjBmMX0ubGlnaHQtdGhlbWUgLm1zZy1pbmZve2NvbG9yOiMyOTgwYjl9LmxpZ2h0LXRoZW1lIC5tc2ctZXJye2NvbG9yOiNjMDM5MmJ9LmxpZ2h0LXRoZW1lIC5tc2ctc3VjY2Vzc3tjb2xvcjojMjdhZTYwfS5saWdodC10aGVtZSAubXNnLXdhcm57Y29sb3I6I2YzOWMxMn0uZGFyay10aGVtZXtjb2xvcjojZWNmMGYxO2JhY2tncm91bmQ6IzIxMjEyMX0uZGFyay10aGVtZSAubXNnLWluZm97Y29sb3I6IzM0OThkYn0uZGFyay10aGVtZSAubXNnLWVycntjb2xvcjojZTc0YzNjfS5kYXJrLXRoZW1lIC5tc2ctc3VjY2Vzc3tjb2xvcjojMmVjYzcxfS5kYXJrLXRoZW1lIC5tc2ctd2Fybntjb2xvcjojZjFjNDBmfWBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMb2dNb25pdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcblxuICBASW5wdXQoKSB0aXRsZTtcbiAgQElucHV0KCkgbG9nU3RyZWFtOiBMb2dNZXNzYWdlO1xuICBASW5wdXQoKSBoaXN0b3J5OiBMb2dNZXNzYWdlW10gPSBbXTtcbiAgQElucHV0KCkgdGhlbWU6ICdkYXJrJyB8ICdsaWdodCcgPSAnZGFyayc7XG4gIEBJbnB1dCgpIGljb25zID0gdHJ1ZTtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnbG9nLWNvbnRhaW5lcic7XG4gIEBJbnB1dCgpIGFuaW1hdGVkID0gdHJ1ZTtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJykgY29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cbiAgICBpZiAoY2hhbmdlcy5oaXN0b3J5KSB7XG4gICAgICB0aGlzLmhpc3RvcnkgPSBjaGFuZ2VzLmhpc3RvcnkuY3VycmVudFZhbHVlLm1hcChub3JtYWxpemVMb2dNZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5sb2dTdHJlYW0gJiYgY2hhbmdlcy5sb2dTdHJlYW0uY3VycmVudFZhbHVlKSB7XG5cbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkTXNnID0gbm9ybWFsaXplTG9nTWVzc2FnZShjaGFuZ2VzLmxvZ1N0cmVhbS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB0aGlzLmhpc3RvcnkucHVzaChub3JtYWxpemVkTXNnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNjcm9sbFRvQm90dG9tKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgfVxuXG4gIHByaXZhdGUgc2Nyb2xsVG9Cb3R0b20oKSB7XG4gICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodDtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9nTW9uaXRvckNvbXBvbmVudCB9IGZyb20gJy4vbG9nLW1vbml0b3IuY29tcG9uZW50JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTG9nTW9uaXRvckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtMb2dNb25pdG9yQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBMb2dNb25pdG9yTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRU8scUJBQU0sbUJBQW1CLEdBQUcsVUFBQyxHQUFlO0lBQWlCLHFCQUMvRCxHQUFHLElBQ04sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsRUFDbkMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFFO0NBQ3pFLENBQUM7Ozs7OztBQ05IO0lBdURFLDZCQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTt1QkFQQyxFQUFFO3FCQUNBLE1BQU07cUJBQ3hCLElBQUk7MkJBQ0UsZUFBZTt3QkFDbEIsSUFBSTtLQUdhOzs7OztJQUVyQyx5Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBY0M7UUFaQyxJQUFJLE9BQU8sYUFBVTtZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sWUFBUyxZQUFZLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDdEU7UUFFRCxJQUFJLE9BQU8saUJBQWMsT0FBTyxjQUFXLFlBQVksRUFBRTtZQUV2RCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixxQkFBTSxhQUFhLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxjQUFXLFlBQVksQ0FBQyxDQUFDO2dCQUMxRSxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDakMsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxFQUFFLEdBQUEsQ0FBQyxDQUFDO2FBQ3pDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDdkI7Ozs7SUFFTyw0Q0FBYzs7OztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDOzs7Z0JBaEV0RixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSx1eUJBd0JYO29CQUNDLE1BQU0sRUFBRSxDQUFDLDhzQ0FBNHNDLENBQUM7b0JBQ3R0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBdENRLE1BQU07OzswQkF5Q1osS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxTQUFTLFNBQUMsV0FBVzs7OEJBckR4Qjs7Ozs7OztBQ0FBOzs7O2dCQUlDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztpQkFDL0I7OzJCQVJEOzs7Ozs7Ozs7Ozs7Ozs7In0=