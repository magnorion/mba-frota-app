(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Barra de busca -->\n<app-search-bar (sender)=\"searchResult($event)\"></app-search-bar>\n<!-- Mapa -->\n<app-mapa\n[setLat]=\"lat\" [setLng]=\"lng\" [setCarros]=\"carro\"></app-mapa>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item-ripple {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ25vcmlvbi9EZXNrdG9wL3Byb2pldG9zL2ZpYXAvZnJvbnQtYXBwLWZyb3RhL2FwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbGlzdC1pdGVtLXJpcHBsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, AppDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDialogComponent", function() { return AppDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_ListaCarro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/ListaCarro */ "./src/app/models/ListaCarro.ts");
/* harmony import */ var _services_frotas_frota_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/frotas/frota.service */ "./src/app/services/frotas/frota.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, frotaService) {
        this.dialog = dialog;
        this.frotaService = frotaService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.carros = [new _models_ListaCarro__WEBPACK_IMPORTED_MODULE_3__["ListaCarro"]('', '', '', '', '', '')];
        this.carro = null;
        this.getCars();
    };
    AppComponent.prototype.searchResult = function (location) {
        this.lat = location.lat;
        this.lng = location.lng;
        this.openDialog();
    };
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AppDialogComponent, {
            width: '300px',
            data: { carros: this.carros }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            try {
                _this.carro = res;
            }
            catch (err) {
                return null;
            }
        });
    };
    AppComponent.prototype.getCars = function () {
        var _this = this;
        this.frotaService.listaCarros()
            .subscribe(function (res) { return _this.carros =
            res.filter(function (arr) { return (arr.status !== 'ocupado' &&
                (arr.latitude !== null && arr.longitude !== null)); }); });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_frotas_frota_service__WEBPACK_IMPORTED_MODULE_4__["FrotaService"]])
    ], AppComponent);
    return AppComponent;
}());

var AppDialogComponent = /** @class */ (function () {
    function AppDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.select = null;
    }
    AppDialogComponent.prototype.selectCar = function (car) {
        this.select = car;
        this.onNoClick(this.select);
    };
    AppDialogComponent.prototype.onNoClick = function (car) {
        if (car === void 0) { car = null; }
        this.dialogRef.close(car);
    };
    AppDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog-app.html */ "./src/app/dialog-app.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], AppDialogComponent);
    return AppDialogComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mapa/mapa.component */ "./src/app/components/mapa/mapa.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




// Components


// Modules











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppDialogComponent"],
                _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__["AppMapDialogComponent"],
                _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__["MapaComponent"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__["SearchBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBvVwA_0U-j-LktaHM1_WG881p27fewF48'
                })
            ],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppDialogComponent"],
                _components_mapa_mapa_component__WEBPACK_IMPORTED_MODULE_5__["AppMapDialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/mapa/dialog-map.html":
/*!*************************************************!*\
  !*** ./src/app/components/mapa/dialog-map.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Status do carro</h1>\n<div mat-dialog-content>\n  <!-- lista de carros -->\n  <mat-list>\n    <h3 mat-subheader> {{ message }} </h3>\n  </mat-list>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Ok</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/mapa/mapa.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/mapa/mapa.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<agm-map [zoom]=\"zoom\" [latitude]=\"latitude\" [longitude]=\"longitude\">\n  <!-- marker user-->\n  <agm-marker *ngIf=\"flagUser\"\n  [latitude]=\"latitude\"\n  [longitude]=\"longitude\"\n  [iconUrl]=\"'assets/images/map-marker.png'\"></agm-marker>\n\n  <!-- marker destiny-->\n  <agm-marker *ngIf=\"flag\"\n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [iconUrl]=\"'assets/images/racing-flag.png'\"></agm-marker>\n\n  <!-- marker cars-->\n  <agm-marker *ngIf=\"flagCars\"\n  [latitude]=\"car.latitude\"\n  [longitude]=\"car.longitude\"\n  [iconUrl]=\"'assets/images/car-'+ carNumber + '.png'\"></agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "./src/app/components/mapa/mapa.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/mapa/mapa.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hZ25vcmlvbi9EZXNrdG9wL3Byb2pldG9zL2ZpYXAvZnJvbnQtYXBwLWZyb3RhL2FwcC9zcmMvYXBwL2NvbXBvbmVudHMvbWFwYS9tYXBhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYXBhL21hcGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/mapa/mapa.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/mapa/mapa.component.ts ***!
  \***************************************************/
/*! exports provided: MapaComponent, AppMapDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaComponent", function() { return MapaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMapDialogComponent", function() { return AppMapDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_ListaCarro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/ListaCarro */ "./src/app/models/ListaCarro.ts");
/* harmony import */ var src_app_services_frotas_frota_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/frotas/frota.service */ "./src/app/services/frotas/frota.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var MapaComponent = /** @class */ (function () {
    function MapaComponent(serviceCar, dialog) {
        this.serviceCar = serviceCar;
        this.dialog = dialog;
        this.flagUser = true;
        this.flag = false;
        this.flagCars = false;
        this.carNumber = 1;
        this.movingFlag = false;
    }
    Object.defineProperty(MapaComponent.prototype, "setLat", {
        set: function (value) {
            if (value !== null) {
                this.flag = true;
                this.lat = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapaComponent.prototype, "setLng", {
        set: function (value) {
            this.lng = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapaComponent.prototype, "setCarros", {
        set: function (value) {
            if (value !== null) {
                this.flagCars = true;
                this.car = value;
                this.car.latitude = '-23.574165';
                this.car.longitude = '-23.574165';
                this.carNumber = Math.floor(Math.random() * (4 - 1)) + 1;
                this.checkTravel(this.latitude, this.longitude);
                this.movingFlag = false;
                this.checkClient();
            }
        },
        enumerable: true,
        configurable: true
    });
    MapaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.zoom = 12;
        this.flag = false;
        this.car = new src_app_models_ListaCarro__WEBPACK_IMPORTED_MODULE_2__["ListaCarro"]('', '', '', '', '', '');
        // User position (FIAP)
        this.latitude = -23.574165;
        this.longitude = -46.654404;
        // Distance
        this.distancia = 0;
        navigator.geolocation.getCurrentPosition(function (pos) { return _this.getUserPosition(pos); });
    };
    MapaComponent.prototype.getUserPosition = function (position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
    };
    MapaComponent.prototype.checkTravel = function (lat, long) {
        this.serviceCar.getTravel(this.car.latitude, this.car.longitude, lat, long)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    MapaComponent.prototype.checkClient = function () {
        var _this = this;
        this.serviceCar.getClient(this.latitude, this.longitude)
            .subscribe(function (res) {
            _this.distancia = Number(res.distancia.toString()[0]);
            if (_this.distancia < 1 || _this.distancia === NaN) {
                _this.distancia = 1;
            }
            _this.openDialog("O carro est\u00E1 a " + _this.distancia + "km de dist\u00E2ncia!");
        });
    };
    MapaComponent.prototype.openDialog = function (message) {
        var _this = this;
        var dialogRef = this.dialog.open(AppMapDialogComponent, {
            width: '300px',
            data: { message: message }
        });
        dialogRef.afterClosed().subscribe(function (res) { _this.carMoving(); });
    };
    MapaComponent.prototype.carMoving = function () {
        var _this = this;
        setTimeout(function () {
            var msg;
            if (_this.movingFlag === true) {
                msg = 'Você chegou ao seu destino!';
                _this.car.latitude = _this.lat.toString();
                _this.car.longitude = _this.lng.toString();
                _this.movingFlag = null;
                _this.flagUser = true;
                _this.flag = false;
                _this.flagCars = false;
                _this.latitude = _this.lat;
                _this.longitude = _this.lng;
                _this.openDialog(msg);
            }
            else if (_this.movingFlag === false) {
                msg = 'O seu motorista acabou de chegar!';
                _this.movingFlag = true;
                _this.flagUser = false;
                _this.car.latitude = _this.latitude.toString();
                _this.car.longitude = _this.longitude.toString();
                _this.openDialog(msg);
            }
        }, (this.distancia * 1000));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('setLat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], MapaComponent.prototype, "setLat", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('setLng'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], MapaComponent.prototype, "setLng", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('setCarros'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], MapaComponent.prototype, "setCarros", null);
    MapaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapa',
            template: __webpack_require__(/*! ./mapa.component.html */ "./src/app/components/mapa/mapa.component.html"),
            styles: [__webpack_require__(/*! ./mapa.component.scss */ "./src/app/components/mapa/mapa.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_frotas_frota_service__WEBPACK_IMPORTED_MODULE_3__["FrotaService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], MapaComponent);
    return MapaComponent;
}());

var AppMapDialogComponent = /** @class */ (function () {
    function AppMapDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.message = data.message;
    }
    AppMapDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AppMapDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map-dialog',
            template: __webpack_require__(/*! ./dialog-map.html */ "./src/app/components/mapa/dialog-map.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], AppMapDialogComponent);
    return AppMapDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n  <mat-toolbar color=\"primary\">\n    <section class=\"col-md-12 pt-3\">\n      <div class=\"row d-flex justify-content-between\">\n        <!-- Campo de busca-->\n        <mat-form-field class=\"w-75\">\n          <input\n          [(ngModel)]=\"search\"\n          name=\"search\" matInput\n          (keydown)=\"searchByEnter($event)\"\n          placeholder=\"Qual a nossa proxima parada?\" value=\"\">\n        </mat-form-field>\n\n        <!-- botao de busca -->\n        <div class=\"wp-25 pt-3\">\n          <button (click)=\"searchLatLng($event)\" mat-raised-button color=\"light\">\n            <mat-icon> search </mat-icon>\n          </button>\n        </div>\n\n      </div>\n    </section>\n  </mat-toolbar>\n</form>\n"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_geolocalization_geolocalization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/geolocalization/geolocalization.service */ "./src/app/services/geolocalization/geolocalization.service.ts");



var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(service) {
        this.service = service;
        this.sender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.searchLatLng = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.search !== '') {
            this.service.getLatLng(this.search)
                .subscribe(function (res) { return _this.sendGeometry(res.results[0].geometry); });
        }
    };
    SearchBarComponent.prototype.searchByEnter = function (event) {
        if (event.keyCode === 13) {
            this.searchLatLng(event);
        }
    };
    SearchBarComponent.prototype.sendGeometry = function (location) {
        this.sender.emit(location);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchBarComponent.prototype, "sender", void 0);
    SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/components/search-bar/search-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_geolocalization_geolocalization_service__WEBPACK_IMPORTED_MODULE_2__["GeolocalizationService"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/dialog-app.html":
/*!*********************************!*\
  !*** ./src/app/dialog-app.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Escolha um carro!</h1>\n<div mat-dialog-content>\n  <!-- lista de carros -->\n  <mat-list>\n    <h3 mat-subheader>Carros Disponíveis</h3>\n    <div *ngFor=\"let carro of data.carros\">\n      <mat-list-item (click)=\"selectCar(carro);\">\n        <mat-icon mat-list-icon>directions_car</mat-icon>\n        <h4 mat-line> {{carro.placa}} </h4>\n        <p mat-line> Modelo: {{carro.modelo}} </p>\n      </mat-list-item>\n      <mat-divider></mat-divider>\n    </div>\n  </mat-list>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancelar</button>\n</div>\n"

/***/ }),

/***/ "./src/app/models/ListaCarro.ts":
/*!**************************************!*\
  !*** ./src/app/models/ListaCarro.ts ***!
  \**************************************/
/*! exports provided: ListaCarro */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCarro", function() { return ListaCarro; });
var ListaCarro = /** @class */ (function () {
    function ListaCarro(id, placa, cor, longitude, latitude, status) {
        if (cor === void 0) { cor = ''; }
        if (status === void 0) { status = ''; }
        this.id = id;
        this.placa = placa;
        this.cor = cor;
        this.longitude = longitude;
        this.latitude = latitude;
        this.status = status;
    }
    return ListaCarro;
}());



/***/ }),

/***/ "./src/app/services/frotas/frota.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/frotas/frota.service.ts ***!
  \**************************************************/
/*! exports provided: FrotaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrotaService", function() { return FrotaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FrotaService = /** @class */ (function () {
    function FrotaService(http) {
        this.http = http;
        this.url = 'http://localhost:3000';
    }
    FrotaService.prototype.listaCarros = function () {
        return this.http
            .get(this.url + "/lista-carros").pipe();
    };
    FrotaService.prototype.getTravel = function (latClient, longClient, latTravel, longTravel) {
        return this.http
            .get(this.url + "/travel", { params: {
                latitudeCliente: latClient,
                longitudeCliente: longClient,
                latitudeViagem: latTravel,
                longitudeViagem: longTravel
            } }).pipe();
    };
    FrotaService.prototype.getClient = function (latClient, longClient) {
        return this.http
            .get(this.url + "/buscar-cliente", { params: {
                latitudeCliente: latClient,
                longitudeCliente: longClient
            } }).pipe();
    };
    FrotaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FrotaService);
    return FrotaService;
}());



/***/ }),

/***/ "./src/app/services/geolocalization/geolocalization.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/geolocalization/geolocalization.service.ts ***!
  \*********************************************************************/
/*! exports provided: GeolocalizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocalizationService", function() { return GeolocalizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GeolocalizationService = /** @class */ (function () {
    function GeolocalizationService(http) {
        this.http = http;
        this.key = '7f8ba45f2a4e4a089a71f51f96d70a60';
        this.url = 'https://api.opencagedata.com/geocode/v1/json';
    }
    GeolocalizationService.prototype.getLatLng = function (location) {
        return this.http.get(this.url, { params: { q: location, key: this.key } });
    };
    GeolocalizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GeolocalizationService);
    return GeolocalizationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/magnorion/Desktop/projetos/fiap/front-app-frota/app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map