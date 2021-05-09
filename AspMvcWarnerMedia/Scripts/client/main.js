(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+vJW":
/*!*******************************************************************!*\
  !*** ./src/app/components/title-detail/title-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: TitleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleDetailComponent", function() { return TitleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _callback_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../callback.pipe */ "hjlE");




function TitleDetailComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataItem_r3.name);
} }
function TitleDetailComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataItem_r4.titleName);
} }
function TitleDetailComponent_p_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dataItem_r5.description, " ");
} }
class TitleDetailComponent {
    constructor(service) {
        this.service = service;
        this.TitleId = 0;
        this.TitleName = "";
        this.TitleTypeId = 0;
        this.ReleaseYear = 0;
        //ProcessedDateTimeUTC: Time;
        this.AwardsList = [];
        this.TitleGenreList = [];
        this.TitleOtherNamesList = [];
        this.TitleParticipatesList = [];
        this.TitleStoryLineList = [];
        this.AwardsCount = 0;
        this.ParticipateCount = 0;
    }
    ngOnInit() {
        this.loadTitleDetailsList();
        //this.FilterTitle.bind(this);
    }
    loadTitleDetailsList() {
        this.service.getAllTitle_Awards(this.objTitle.titleId).subscribe((data) => {
            this.AwardsList = data;
            this.AwardsCount = data.length;
        });
        this.service.getAllTitle_Genre(this.objTitle.titleId).subscribe((data) => {
            this.TitleGenreList = data;
        });
        this.service.getAllTitle_OtherNames(this.objTitle.titleId).subscribe((data) => {
            this.TitleOtherNamesList = data;
        });
        this.service.getAllTitle_StoryLines(this.objTitle.titleId).subscribe((data) => {
            this.TitleStoryLineList = data;
        });
        this.service.getAllTitle_Participant(this.objTitle.titleId).subscribe((data) => {
            this.TitleParticipatesList = data;
            this.ParticipateCount = data.length;
        });
        this.TitleId = this.objTitle.titleId;
        this.TitleName = this.objTitle.titleName;
        this.ReleaseYear = this.objTitle.releaseYear;
    }
    //FilterTitle(title: any) {
    //  return title.titleName != this.TitleName;
    //}
    FilterTitle(title, filter) {
        return title.titleName != filter;
    }
}
TitleDetailComponent.ɵfac = function TitleDetailComponent_Factory(t) { return new (t || TitleDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
TitleDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleDetailComponent, selectors: [["app-title-detail"]], inputs: { objTitle: "objTitle" }, decls: 41, vars: 11, consts: [[1, "d-flex", "flex-row", "bd-highlight", "mb-3"], [1, "form-froup", "row", 2, "width", "70%"], [1, "control-group"], [1, "col-sm-4", "col-form-label"], [1, "col-sm-6"], [1, "col-form-label"], [4, "ngFor", "ngForOf"], [1, "col-sm-8"], [1, "ml-3", "bd-highlight", 2, "width", "90%"], [1, "border", "border-info", "rounded"]], template: function TitleDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Released:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "# Awards:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "# Participants:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Genre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TitleDetailComponent_tr_30_Template, 3, 1, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Other Names:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TitleDetailComponent_tr_35_Template, 3, 1, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Story Line:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TitleDetailComponent_p_40_Template, 3, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.objTitle.titleName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.objTitle.releaseYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.AwardsCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ParticipateCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.TitleGenreList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](36, 7, ctx.TitleOtherNamesList, ctx.FilterTitle, ctx.TitleName));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.TitleStoryLineList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_callback_pipe__WEBPACK_IMPORTED_MODULE_3__["CallbackPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aXRsZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Temp\ASPMvcAngular\CrossroadDev\AspMvcWarnerMedia\AspMvcWarnerMedia\Client\src\main.ts */"zUnb");


/***/ }),

/***/ "3/1x":
/*!*********************************************************************!*\
  !*** ./src/app/components/title/show-title/show-title.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShowTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTitleComponent", function() { return ShowTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/shared.service */ "qS8V");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _title_detail_title_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../title-detail/title-detail.component */ "+vJW");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");






function ShowTitleComponent_app_title_detail_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-title-detail", 14);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("objTitle", ctx_r0.SelectedTitle);
} }
function ShowTitleComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowTitleComponent_tr_30_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const dataItem_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showClick(dataItem_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "path", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "path", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "path", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "path", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "path", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "path", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "path", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "path", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "path", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "path", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "path", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "path", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "path", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "path", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "path", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "path", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "path", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "path", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "path", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "path", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "path", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "path", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "path", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "path", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "path", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "path", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "path", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "path", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "path", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "path", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "path", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "path", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "path", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "path", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "path", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "path", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "path", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "path", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "path", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](160, "path", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "path", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "path", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "path", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "path", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "path", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "path", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "path", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "path", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "path", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "path", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "path", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "path", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "path", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "path", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "path", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "path", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "path", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "path", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "path", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "path", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "path", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "path", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "path", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "path", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "path", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "path", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "path", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "path", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "path", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "path", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "path", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "path", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "path", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "path", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "path", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "path", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "path", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "path", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "path", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "path", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "path", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "path", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "path", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "path", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "path", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "path", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "path", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "path", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "path", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "path", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "path", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "path", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "path", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "path", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "path", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "path", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "path", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "path", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "path", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "path", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "path", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "path", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "path", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "path", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "path", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "path", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "path", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "path", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "path", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "path", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "path", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "path", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "path", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "path", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "path", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "path", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "path", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "path", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "path", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "path", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "path", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "path", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "path", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "path", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "path", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "path", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "path", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "path", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "path", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "path", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "path", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "path", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "path", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "path", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "path", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "path", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "path", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "path", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "path", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "path", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "path", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](273, "path", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "path", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "path", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "path", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](277, "path", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "path", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "path", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "path", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "path", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "path", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "path", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "path", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "path", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "path", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "path", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "path", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "path", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "path", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "path", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "path", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "path", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "path", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "path", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "path", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "path", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "path", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "path", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "path", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "path", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "path", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "path", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "path", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "path", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "path", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "path", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](308, "path", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "path", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "path", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "path", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "path", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "path", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "path", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "path", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "path", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "path", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "path", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "path", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "path", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "path", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "path", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "path", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "path", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](325, "path", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](326, "path", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "path", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "path", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "path", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "path", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "path", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "path", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "path", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "path", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "path", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "path", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "path", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "path", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "path", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "path", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "path", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "path", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](343, "path", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "path", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "path", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](346, "path", 351);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "path", 352);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "path", 353);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](349, "path", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "path", 355);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](351, "path", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "path", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "path", 358);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "path", 359);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "path", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "path", 361);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "path", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "path", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "path", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "path", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "path", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](362, "path", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "path", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "path", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](365, "path", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "path", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "path", 372);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](368, "path", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "path", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "path", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "path", 376);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "path", 377);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "path", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](374, "path", 379);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "path", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "path", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "path", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "path", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "path", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "path", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "path", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "path", 387);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](383, "path", 388);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "path", 389);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "path", 390);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "path", 391);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](387, "path", 392);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "path", 393);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "path", 394);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](390, "path", 395);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](391, "path", 396);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "path", 397);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "path", 398);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "path", 399);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "path", 400);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "path", 401);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "path", 402);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "path", 403);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](399, "path", 404);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "path", 405);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "path", 406);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "path", 407);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](403, "path", 408);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "path", 409);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "path", 410);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](406, "path", 411);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "path", 412);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](408, "path", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "path", 414);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "path", 415);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "path", 416);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](412, "path", 417);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "path", 418);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "path", 419);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "path", 420);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "path", 421);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "path", 422);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](418, "path", 423);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "path", 424);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "path", 425);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](421, "path", 426);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "path", 427);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](423, "path", 428);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "path", 429);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](425, "path", 430);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "path", 431);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "path", 432);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](428, "path", 433);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "path", 434);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "path", 435);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "path", 436);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](432, "path", 437);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "path", 438);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](434, "path", 439);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](435, "path", 440);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "path", 441);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "path", 442);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](438, "path", 443);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "path", 444);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "path", 445);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "path", 446);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "path", 447);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "path", 448);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](444, "path", 449);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](445, "path", 450);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "path", 451);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "path", 452);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](448, "path", 453);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "path", 454);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](450, "path", 455);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](451, "path", 456);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](452, "path", 457);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](453, "path", 458);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "path", 459);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](455, "path", 460);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "path", 461);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "path", 462);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](458, "path", 463);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](459, "path", 464);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](460, "path", 465);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "path", 466);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](462, "path", 467);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](463, "path", 468);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "path", 469);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](465, "path", 470);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "path", 471);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](467, "path", 472);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](468, "path", 473);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](469, "path", 474);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "path", 475);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "path", 476);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](472, "path", 477);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](473, "path", 478);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "path", 479);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](475, "path", 480);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](476, "path", 481);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](477, "path", 482);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](478, "path", 483);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "path", 484);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "path", 485);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](481, "path", 486);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](482, "path", 487);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "path", 488);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](484, "path", 489);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](485, "path", 490);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](486, "path", 491);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "path", 492);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](488, "path", 493);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](489, "path", 494);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](490, "path", 495);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](491, "path", 496);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](492, "path", 497);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](493, "path", 498);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](494, "path", 499);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "path", 500);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](496, "path", 501);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dataItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataItem_r2.titleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataItem_r2.titleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataItem_r2.releaseYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dataItem_r2.processedDateTimeUTC);
} }
class ShowTitleComponent {
    constructor(service) {
        this.service = service;
        this.SearchTerm = "";
        this.TitleList = [];
        this.TitleListWithoutFilter = [];
        this.Term = "";
        this.ModalTitle = "";
        this.ActivateShowTitleDetailsComp = false;
    }
    ngOnInit() {
        this.refreshTitleList();
    }
    showClick(item) {
        this.SelectedTitle = item;
        this.ModalTitle = "Title - " + this.SelectedTitle.titleName;
        this.ActivateShowTitleDetailsComp = true;
    }
    closeClick() {
        this.ActivateShowTitleDetailsComp = false;
        this.refreshTitleList();
    }
    refreshTitleList() {
        this.service.getTitleList().subscribe(data => {
            this.TitleList = data;
            this.TitleListWithoutFilter = data;
        });
    }
    sortResult(prop, asc) {
        this.TitleList = this.TitleListWithoutFilter.sort(function (a, b) {
            if (asc) {
                return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
            }
            else {
                return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
            }
        });
    }
}
ShowTitleComponent.ɵfac = function ShowTitleComponent_Factory(t) { return new (t || ShowTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
ShowTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowTitleComponent, selectors: [["app-show-title"]], decls: 32, vars: 7, consts: [["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "objTitle", 4, "ngIf"], [1, "wrap"], [1, "search"], ["type", "text", "placeholder", "What are you looking for?", 1, "SearchTerm", 3, "ngModel", "ngModelChange"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [3, "objTitle"], ["type", "button", "data-toggle", "modal", "data-target", "#exampleModal", "data-backdrop", "static", "data-keyboard", "false", 1, "btn", "btn-light", "mr-1", 3, "click"], ["width", "1em", "height", "1em", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "desc", "Created with imagetracer.js version 1.2.4"], ["fill", "rgb(0,0,0)", "stroke", "rgb(0,0,0)", "stroke-width", "1", "opacity", "0", "d", "M 0 0 L 470 0.5 L 451.5 1 L 450.5 2 L 423.5 4 L 374.5 13 L 318.5 30 L 282.5 45 Q 189.7 89.2 125 161.5 Q 71.7 219.7 38 297.5 L 21 343.5 L 12 376.5 L 3 426.5 L 0.5 458 L 0 0 Z "], ["fill", "rgb(0,0,0)", "stroke", "rgb(0,0,0)", "stroke-width", "1", "opacity", "0", "d", "M 507.5 0 L 980 0 L 980 675 L 471.5 488 L 471 490.5 L 658 998 L 0 998 L 0 520.5 L 1 520.5 L 1 532.5 L 2 533.5 L 3 551.5 L 11 596.5 Q 22.9 648.1 43 691.5 Q 86 783.5 156.5 848 Q 224.4 911.6 319.5 948 L 360.5 961 L 412.5 972 L 434.5 974 L 435.5 975 L 444.5 975 L 445.5 976 L 458.5 976 L 459.5 977 L 516.5 977 L 517.5 976 L 530.5 976 L 531.5 975 L 540.5 975 L 541.5 974 L 550.5 974 L 557.5 972 L 563.5 972 L 595.5 966 L 610 962 L 610 958.5 Q 597.3 929.5 588 898 L 537.5 907 L 518.5 908 L 517.5 909 L 478.5 910 L 477.5 909 L 458.5 909 L 457.5 908 L 437.5 907 L 436.5 906 L 430.5 906 L 401.5 901 L 366.5 892 L 320.5 875 Q 239.7 838.8 183 778.5 Q 125.5 719 93 634.5 L 82 600.5 L 73 560.5 L 70 532.5 L 69 531.5 L 69 520.5 L 68 519.5 L 67 476.5 L 68 475.5 L 68 457.5 L 69 456.5 L 70 437.5 L 78 392.5 L 91 348.5 L 108 307.5 Q 145.7 230.2 206.5 176 Q 264.9 122.4 346.5 92 L 374.5 83 L 425.5 72 L 450.5 70 L 451.5 69 L 463.5 69 L 464.5 68 L 511.5 68 L 512.5 69 L 525.5 69 L 526.5 70 L 550.5 72 L 594.5 81 Q 635.4 92.1 670.5 109 Q 741.5 144 793 198.5 Q 851.3 258.7 884 344.5 L 894 375.5 L 901 404.5 L 905 427.5 L 907 451.5 L 908 452.5 L 908 466.5 L 909 467.5 L 909 509.5 L 908 510.5 L 907 534.5 L 906 535.5 L 906 542.5 L 905 543.5 L 902 567.5 L 892 609 L 956 632 L 966 593.5 L 973 553.5 L 975 526.5 L 976 525.5 L 976 508.5 L 977 507.5 L 977 470.5 L 976 469.5 L 976 451.5 L 975 450.5 L 973 423.5 L 966 383.5 L 956 345.5 Q 947 316 935 289.5 Q 892.3 196.2 821.5 131 Q 760.7 73.8 678.5 38 L 631.5 21 L 593.5 11 L 553.5 4 L 537.5 3 L 536.5 2 L 525.5 2 L 524.5 1 L 507.5 1 L 507.5 0 Z M 311 167 L 302 169 L 290 176 L 281 191 L 278 203 L 278 776 L 282 790 L 286 797 Q 293 807 307 810 L 324 810 L 343 803 L 515 705 L 515 701 L 439 496 L 439 482 Q 441 472 447 467 Q 454 459 466 456 L 477 456 L 487 459 L 764 562 L 770 560 L 838 520 Q 849 511 854 496 L 854 482 Q 851 471 844 464 L 825 449 L 349 178 L 326 168 L 311 167 Z M 895 757 L 889 760 L 887 763 L 891 765 L 896 758 L 895 757 Z M 749 900 L 747 902 L 749 902 L 749 900 Z "], ["fill", "rgb(0,0,0)", "stroke", "rgb(0,0,0)", "stroke-width", "1", "opacity", "0", "d", "M 979.5 677 L 980 998 L 659 997.5 L 740.5 846 L 880.5 985 L 972 892.5 L 833 753.5 L 833 752 L 979.5 677 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 470.5 0 L 507 0.5 L 470.5 1 L 470.5 0 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 451.5 1 L 463 1.5 L 451.5 2 L 451.5 1 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 514.5 1 L 525 1.5 L 514.5 2 L 514.5 1 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 440.5 2 L 448 2.5 L 440.5 3 L 440.5 2 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 528.5 2 L 537 2.5 L 528.5 3 L 528.5 2 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 431.5 3 L 437 3.5 L 431.5 4 L 431.5 3 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 539.5 3 L 546 3.5 L 539.5 4 L 539.5 3 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 423.5 4 L 429 4.5 L 423.5 5 L 423.5 4 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 548.5 4 L 554 4.5 L 548.5 5 L 548.5 4 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 416.5 5 L 421 5.5 L 416.5 6 L 416.5 5 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 556.5 5 L 561 5.5 L 556.5 6 L 556.5 5 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 409.5 6 L 414 6.5 L 409.5 7 L 409.5 6 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 563.5 6 L 567 6.5 L 563.5 7 L 563.5 6 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 403.5 7 L 408 7.5 L 403.5 8 L 403.5 7 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 569.5 7 L 574 7.5 L 569.5 8 L 569.5 7 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 398.5 8 L 402 8.5 L 398.5 9 L 398.5 8 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 575.5 8 L 579 8.5 L 575.5 9 L 575.5 8 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 393.5 9 L 397 9.5 L 393.5 10 L 393.5 9 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 580.5 9 L 584 9.5 L 580.5 10 L 580.5 9 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 388.5 10 L 392 10.5 L 388.5 11 L 388.5 10 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 585.5 10 L 589 10.5 L 585.5 11 L 585.5 10 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 383.5 11 L 387 11.5 L 383.5 12 L 383.5 11 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 590.5 11 L 594 11.5 L 590.5 12 L 590.5 11 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 379.5 12 L 382 12.5 L 379.5 13 L 379.5 12 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 595.5 12 L 598 12.5 L 595.5 13 L 595.5 12 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 374.5 13 L 378 13.5 L 363.5 17 L 363.5 16 L 374.5 13 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 599.5 13 L 602 13.5 L 599.5 14 L 599.5 13 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 603.5 14 L 614 16.5 L 611.5 17 L 603.5 15 L 603.5 14 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 359.5 17 L 362 17.5 L 359.5 18 L 359.5 17 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 615.5 17 L 618 17.5 L 615.5 18 L 615.5 17 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 355.5 18 L 358 18.5 L 352.5 20 L 352.5 19 L 355.5 18 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 619.5 18 L 625 19.5 L 622.5 20 L 619.5 19 L 619.5 18 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 348.5 20 L 351 20.5 L 345.5 22 L 345.5 21 L 348.5 20 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 629.5 21 L 638 23.5 L 635.5 24 L 629.5 22 L 629.5 21 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 648.5 27 L 658 30.5 L 656.5 31 L 648.5 28 L 648.5 27 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 324.5 28 L 326 28.5 L 311.5 34 L 311.5 33 L 324.5 28 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 659.5 31 L 685 41.5 L 683.5 42 L 661.5 33 L 659.5 31 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 308.5 34 L 310 34.5 L 306.5 36 L 306.5 35 L 308.5 34 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 303.5 36 L 305 36.5 L 301.5 38 L 301.5 37 L 303.5 36 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 298.5 38 L 300 38.5 L 294.5 41 L 294.5 40 L 298.5 38 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 291.5 41 L 293 41.5 L 285.5 45 L 285.5 44 L 291.5 41 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 686.5 42 L 696 46.5 L 694.5 47 L 686.5 43 L 686.5 42 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 282.5 45 L 284 45.5 L 257.5 59 L 258.5 57 L 282.5 45 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 699.5 48 L 712 54.5 L 710.5 54 L 699.5 49 L 699.5 48 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 713.5 55 Q 790.1 94.9 846 155.5 Q 895.8 208.2 929 277.5 L 928 277.5 Q 888 194.5 824.5 135 L 779.5 97 Q 749.9 74.1 714.5 57 L 713.5 55 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 255.5 59 L 254.5 61 L 248.5 64 L 249.5 62 L 255.5 59 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 246.5 64 L 245.5 66 Q 177.3 104.3 127 160.5 Q 79.6 212.1 47.5 279 L 47 277.5 Q 90.5 188.5 160.5 126 Q 199.2 90.7 246.5 64 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 469.5 67 L 508 67.5 L 469.5 68 L 469.5 67 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 453.5 68 L 464 68.5 L 453.5 69 L 453.5 68 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 512.5 68 L 523 68.5 L 512.5 69 L 512.5 68 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 443.5 69 L 451 69.5 L 443.5 70 L 443.5 69 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 526.5 69 L 534 69.5 L 526.5 70 L 526.5 69 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 434.5 70 L 441 70.5 L 434.5 71 L 434.5 70 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 536.5 70 L 542 70.5 L 536.5 71 L 536.5 70 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 427.5 71 L 433 71.5 L 427.5 72 L 427.5 71 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 544.5 71 L 549 71.5 L 544.5 72 L 544.5 71 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 420.5 72 L 425 72.5 L 420.5 73 L 420.5 72 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 551.5 72 L 556 72.5 L 551.5 73 L 551.5 72 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 414.5 73 L 419 73.5 L 409.5 75 L 409.5 74 L 414.5 73 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 557.5 73 L 562 73.5 L 557.5 74 L 557.5 73 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 563.5 74 L 567 74.5 L 563.5 75 L 563.5 74 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 404.5 75 L 408 75.5 L 404.5 76 L 404.5 75 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 568.5 75 L 572 75.5 L 568.5 76 L 568.5 75 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 400.5 76 L 403 76.5 L 400.5 77 L 400.5 76 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 573.5 76 L 577 76.5 L 573.5 77 L 573.5 76 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 395.5 77 L 399 77.5 L 395.5 78 L 395.5 77 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 578.5 77 L 586 78.5 L 582.5 79 L 578.5 78 L 578.5 77 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 390.5 78 L 394 78.5 L 387.5 80 L 387.5 79 L 390.5 78 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 587.5 79 L 590 79.5 L 587.5 80 L 587.5 79 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 382.5 80 L 386 80.5 L 379.5 82 L 379.5 81 L 382.5 80 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 591.5 80 L 594 80.5 L 591.5 81 L 591.5 80 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 595.5 81 L 608 84.5 L 605.5 85 L 595.5 82 L 595.5 81 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 375.5 82 L 378 82.5 L 375.5 83 L 375.5 82 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 371.5 83 L 374 83.5 L 365.5 86 L 365.5 85 L 371.5 83 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 609.5 85 L 632 92.5 L 630.5 93 L 609.5 86 L 609.5 85 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 352.5 89 L 355 89.5 L 350.5 91 L 350.5 90 L 352.5 89 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 344.5 92 L 346 92.5 L 339.5 95 L 339.5 94 L 344.5 92 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 633.5 93 L 645 97.5 L 643.5 98 L 633.5 94 L 633.5 93 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 336.5 95 L 338 95.5 L 329.5 99 L 329.5 98 L 336.5 95 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 646.5 98 L 650 99.5 L 648.5 100 L 646.5 98 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 326.5 99 L 328 99.5 L 315.5 105 L 315.5 104 L 326.5 99 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 651.5 100 L 670 108.5 L 668.5 109 L 651.5 101 L 651.5 100 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 310.5 106 L 312 106.5 Q 231.7 144.2 176 206.5 Q 140.1 245.6 114.5 295 L 115 293.5 Q 145.5 233.5 191.5 189 Q 242 138.5 310.5 106 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 681.5 114 Q 748.4 148.6 797 201.5 Q 843.5 250.5 873 316.5 L 872 316.5 Q 837 238.5 778.5 184 L 739.5 151 Q 713.5 131 682.5 116 L 681.5 114 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 310.5 167 L 320 167.5 L 310.5 168 L 310.5 167 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 304.5 168 L 308 168.5 Q 293.7 171.2 287 181.5 L 280.5 196 L 280 193.5 L 284 184.5 L 290 176 L 304.5 168 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 321.5 168 L 329 169.5 L 326.5 170 L 321.5 169 L 321.5 168 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 333.5 171 L 348.5 178 L 824.5 449 L 844 463.5 L 852 476.5 L 851 476.5 Q 846.2 463.8 835.5 457 L 348.5 179 L 333.5 172 L 333.5 171 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 279.5 197 L 280 200.5 L 279 200.5 L 279.5 197 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 278.5 202 L 279 207.5 L 278 207.5 L 278.5 202 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 929.5 279 L 938 297.5 L 937 297.5 L 929 280.5 L 929.5 279 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 46.5 280 L 47 281.5 L 38.5 299 L 38 297.5 L 46.5 280 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 113.5 296 L 113 297.5 L 108.5 307 L 108 305.5 L 113.5 296 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 938.5 299 L 946 317.5 L 945 317.5 L 938 300.5 L 938.5 299 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 37.5 300 L 38 301.5 L 36.5 304 L 36 302.5 L 37.5 300 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 35.5 305 L 36 306.5 L 32.5 314 L 32 312.5 L 35.5 305 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 107.5 308 L 108 309.5 L 97.5 332 L 97 330.5 L 107.5 308 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 31.5 315 L 32 316.5 L 29.5 322 L 29 320.5 L 31.5 315 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 873.5 318 L 879 330.5 L 878 330.5 L 873 319.5 L 873.5 318 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 946.5 319 L 951 331.5 L 950 331.5 L 946.5 319 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 28.5 323 L 29 324.5 L 21.5 346 L 21 343.5 L 28.5 323 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 879.5 332 L 881 335.5 L 880 335.5 L 879.5 332 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 96.5 333 L 97 334.5 L 91.5 348 L 91 346.5 L 96.5 333 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 951.5 333 L 956 347.5 L 955 347.5 L 951 335.5 L 951.5 333 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 881.5 337 L 884 343.5 L 883 343.5 L 881.5 337 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 20.5 347 L 21 349.5 L 18.5 356 L 18 353.5 L 20.5 347 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 885.5 348 L 891 364.5 L 890 364.5 L 885.5 348 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 90.5 349 L 91 350.5 L 86.5 363 L 86 360.5 L 90.5 349 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 956.5 349 L 960 361.5 L 959 361.5 L 956.5 349 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 17.5 357 L 18 359.5 L 17 359.5 L 17.5 357 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 16.5 361 L 17 363.5 L 12.5 380 L 12 376.5 L 16.5 361 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 960.5 363 L 962 369.5 L 961 369.5 L 960.5 363 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 891.5 366 L 894 374.5 L 893 374.5 L 891.5 366 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 84.5 367 L 85 369.5 L 83.5 373 L 83 370.5 L 84.5 367 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 962.5 371 L 963 373.5 L 962 373.5 L 962.5 371 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 82.5 374 L 83 376.5 L 80.5 384 L 80 381.5 L 82.5 374 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 963.5 375 L 964 377.5 L 963 377.5 L 963.5 375 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 894.5 376 L 895 378.5 L 894 378.5 L 894.5 376 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 964.5 379 L 966 386.5 L 965 386.5 L 964.5 379 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 895.5 380 L 899 394.5 L 898 394.5 L 895.5 380 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 11.5 381 L 12 384.5 L 10.5 389 L 10 385.5 L 11.5 381 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 79.5 385 L 80 387.5 L 79 387.5 L 79.5 385 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 966.5 388 L 967 391.5 L 966 391.5 L 966.5 388 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 78.5 389 L 79 391.5 L 78 391.5 L 78.5 389 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 9.5 390 L 10 393.5 L 9 393.5 L 9.5 390 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 77.5 393 L 78 396.5 L 77 396.5 L 77.5 393 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 967.5 393 L 968 396.5 L 967 396.5 L 967.5 393 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 8.5 395 L 9 398.5 L 8 398.5 L 8.5 395 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 899.5 396 L 901 403.5 L 900 403.5 L 899.5 396 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 76.5 398 L 77 400.5 L 76 400.5 L 76.5 398 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 968.5 398 L 969 401.5 L 968 401.5 L 968.5 398 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 7.5 400 L 8 404.5 L 7 404.5 L 7.5 400 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 75.5 402 L 76 405.5 L 75 405.5 L 75.5 402 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 969.5 404 L 970 407.5 L 969 407.5 L 969.5 404 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 901.5 405 L 902 408.5 L 901 408.5 L 901.5 405 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 6.5 406 L 7 410.5 L 6 410.5 L 6.5 406 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 74.5 407 L 75 410.5 L 74 410.5 L 74.5 407 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 902.5 410 L 903 414.5 L 902 414.5 L 902.5 410 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 970.5 410 L 971 413.5 L 970 413.5 L 970.5 410 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 5.5 412 L 6 416.5 L 5 416.5 L 5.5 412 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 73.5 412 L 74 416.5 L 73 416.5 L 73.5 412 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 903.5 416 L 904 420.5 L 903 420.5 L 903.5 416 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 971.5 416 L 972 421.5 L 971 421.5 L 971.5 416 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 72.5 418 L 73 422.5 L 72 422.5 L 72.5 418 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 4.5 419 L 5 423.5 L 4 423.5 L 4.5 419 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 904.5 422 L 905 426.5 L 904 426.5 L 904.5 422 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 972.5 423 L 973 428.5 L 972 428.5 L 972.5 423 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 71.5 424 L 72 429.5 L 71 429.5 L 71.5 424 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 3.5 426 L 4 432.5 L 3 432.5 L 3.5 426 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 905.5 428 L 906 433.5 L 905 433.5 L 905.5 428 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 70.5 431 L 71 436.5 L 70 436.5 L 70.5 431 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 973.5 431 L 974 437.5 L 973 437.5 L 973.5 431 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 2.5 434 L 3 441.5 L 2 441.5 L 2.5 434 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 906.5 435 L 907 441.5 L 906 441.5 L 906.5 435 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 69.5 439 L 70 445.5 L 69 445.5 L 69.5 439 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 974.5 440 L 975 448.5 L 974 448.5 L 974.5 440 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 907.5 444 L 908 451.5 L 907 451.5 L 907.5 444 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 1.5 445 L 2 453.5 L 1 453.5 L 1.5 445 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 68.5 448 L 69 456.5 L 68 456.5 L 68.5 448 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 975.5 451 L 976 463.5 L 975 463.5 L 975.5 451 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 467.5 455 L 476 455.5 L 467.5 456 L 467.5 455 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 908.5 455 L 909 466.5 L 908 466.5 L 908.5 455 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 462.5 456 L 465 456.5 Q 453.5 459 447 466.5 L 441.5 475 L 441 473.5 L 449.5 463 L 462.5 456 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 477.5 456 L 486 458.5 L 484.5 459 L 477.5 457 L 477.5 456 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 0.5 458 L 1 473.5 L 0 473.5 L 0.5 458 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 487.5 459 L 494 461.5 L 492.5 462 L 487.5 460 L 487.5 459 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 67.5 461 L 68 475.5 L 67 475.5 L 67.5 461 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 498.5 463 L 505 465.5 L 503.5 466 L 498.5 464 L 498.5 463 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 506.5 466 L 513 468.5 L 511.5 469 L 506.5 467 L 506.5 466 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 514.5 469 L 524 472.5 L 522.5 473 L 514.5 470 L 514.5 469 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 976.5 470 L 977 507.5 L 976 507.5 L 976.5 470 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 909.5 472 L 910 504.5 L 909 504.5 L 909.5 472 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 525.5 473 L 543 479.5 L 541.5 480 L 527.5 475 L 525.5 473 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 440.5 476 L 441 477.5 L 439.5 481 L 439 478.5 L 440.5 476 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 544.5 480 L 554 483.5 L 552.5 484 L 544.5 481 L 544.5 480 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 853.5 481 L 854 485.5 L 853 485.5 L 853.5 481 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 438.5 482 L 440 498.5 L 439 498.5 Q 436.2 492.2 438.5 482 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 555.5 484 L 562 486.5 L 560.5 487 L 555.5 485 L 555.5 484 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 563.5 487 L 581 493.5 L 579.5 494 L 565.5 489 L 563.5 487 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 471.5 488 L 474 495.5 L 473 495.5 L 471.5 488 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 473.5 489 L 483 492.5 L 481.5 493 L 473.5 490 L 473.5 489 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 853.5 492 L 854 495.5 L 853 495.5 L 853.5 492 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 484.5 493 L 491 495.5 L 489.5 496 L 484.5 494 L 484.5 493 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 582.5 494 L 589 496.5 L 587.5 497 L 582.5 495 L 582.5 494 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 492.5 496 L 502 499.5 L 500.5 500 L 492.5 497 L 492.5 496 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 474.5 497 L 477 503.5 L 476 503.5 L 474.5 497 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 590.5 497 L 600 500.5 L 598.5 501 L 590.5 498 L 590.5 497 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 852.5 497 L 853 499.5 Q 847.9 512.4 837.5 520 L 769.5 560 L 763.5 562 L 753 557.5 L 754.5 557 L 765.5 561 L 830.5 524 L 845 511.5 L 852.5 497 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 440.5 500 L 447 517.5 L 446 517.5 L 440.5 500 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 503.5 500 L 510 502.5 L 508.5 503 L 503.5 501 L 503.5 500 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 67.5 501 L 68 516.5 L 67 516.5 L 67.5 501 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 601.5 501 L 608 503.5 L 606.5 504 L 601.5 502 L 601.5 501 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 511.5 503 L 521 506.5 L 519.5 507 L 511.5 504 L 511.5 503 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 0.5 504 L 1 519.5 L 0 519.5 L 0.5 504 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 477.5 505 L 481 514.5 L 480 514.5 L 477.5 505 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 612.5 505 L 619 507.5 L 617.5 508 L 612.5 506 L 612.5 505 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 522.5 507 L 529 509.5 L 527.5 510 L 522.5 508 L 522.5 507 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 620.5 508 L 630 511.5 L 628.5 512 L 620.5 509 L 620.5 508 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 530.5 510 L 540 513.5 L 538.5 514 L 530.5 511 L 530.5 510 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 908.5 510 L 909 521.5 L 908 521.5 L 908.5 510 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 631.5 512 L 638 514.5 L 636.5 515 L 631.5 513 L 631.5 512 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 975.5 513 L 976 525.5 L 975 525.5 L 975.5 513 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 541.5 514 L 548 516.5 L 546.5 517 L 541.5 515 L 541.5 514 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 639.5 515 L 646 517.5 L 644.5 518 L 639.5 516 L 639.5 515 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 481.5 516 L 484 522.5 L 483 522.5 L 481.5 516 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 549.5 517 L 559 520.5 L 557.5 521 L 549.5 518 L 549.5 517 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 447.5 519 L 454 536.5 L 453 536.5 L 447.5 519 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 650.5 519 L 657 521.5 L 655.5 522 L 650.5 520 L 650.5 519 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 68.5 520 L 69 528.5 L 68 528.5 L 68.5 520 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 560.5 521 L 567 523.5 L 565.5 524 L 560.5 522 L 560.5 521 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 658.5 522 L 665 524.5 L 663.5 525 L 658.5 523 L 658.5 522 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 1.5 524 L 2 532.5 L 1 532.5 L 1.5 524 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 484.5 524 L 488 533.5 L 487 533.5 L 484.5 524 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 568.5 524 L 578 527.5 L 576.5 528 L 568.5 525 L 568.5 524 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 907.5 524 L 908 532.5 L 907 532.5 L 907.5 524 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 666.5 525 L 676 528.5 L 674.5 529 L 666.5 526 L 666.5 525 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 579.5 528 L 586 530.5 L 584.5 531 L 579.5 529 L 579.5 528 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 974.5 528 L 975 536.5 L 974 536.5 L 974.5 528 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 677.5 529 L 687 532.5 L 685.5 533 L 677.5 530 L 677.5 529 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 69.5 532 L 70 538.5 L 69 538.5 L 69.5 532 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 590.5 532 L 597 534.5 L 595.5 535 L 590.5 533 L 590.5 532 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 688.5 533 L 695 535.5 L 693.5 536 L 688.5 534 L 688.5 533 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 488.5 535 L 491 541.5 L 490 541.5 L 488.5 535 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 598.5 535 L 605 537.5 L 603.5 538 L 598.5 536 L 598.5 535 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 906.5 535 L 907 540.5 L 906 540.5 L 906.5 535 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 2.5 536 L 3 542.5 L 2 542.5 L 2.5 536 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 696.5 536 L 714 542.5 L 712.5 543 L 698.5 538 L 696.5 536 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 454.5 538 L 461 555.5 L 460 555.5 L 454.5 538 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 609.5 539 L 616 541.5 L 614.5 542 L 609.5 540 L 609.5 539 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 973.5 539 L 974 545.5 L 973 545.5 L 973.5 539 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 70.5 540 L 71 545.5 L 70 545.5 L 70.5 540 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 617.5 542 L 624 544.5 L 622.5 545 L 617.5 543 L 617.5 542 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 491.5 543 L 495 552.5 L 494 552.5 L 491.5 543 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 715.5 543 L 733 549.5 L 731.5 550 L 717.5 545 L 715.5 543 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 905.5 543 L 906 548.5 L 905 548.5 L 905.5 543 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 3.5 545 L 4 551.5 L 3 551.5 L 3.5 545 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 628.5 546 L 635 548.5 L 633.5 549 L 628.5 547 L 628.5 546 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 71.5 548 L 72 552.5 L 71 552.5 L 71.5 548 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 972.5 548 L 973 553.5 L 972 553.5 L 972.5 548 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 636.5 549 L 646 552.5 L 644.5 553 L 636.5 550 L 636.5 549 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 734.5 550 L 752 556.5 L 750.5 557 L 736.5 552 L 734.5 550 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 904.5 550 L 905 554.5 L 904 554.5 L 904.5 550 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 4.5 553 L 5 558.5 L 4 558.5 L 4.5 553 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 647.5 553 L 654 555.5 L 652.5 556 L 647.5 554 L 647.5 553 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 72.5 554 L 73 558.5 L 72 558.5 L 72.5 554 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 495.5 554 L 498 560.5 L 497 560.5 L 495.5 554 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 655.5 556 L 665 559.5 L 663.5 560 L 655.5 557 L 655.5 556 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 903.5 556 L 904 560.5 L 903 560.5 L 903.5 556 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 971.5 556 L 972 560.5 L 971 560.5 L 971.5 556 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 461.5 557 L 468 574.5 L 467 574.5 L 461.5 557 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 5.5 560 L 6 565.5 L 5 565.5 L 5.5 560 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 666.5 560 L 673 562.5 L 671.5 563 L 666.5 561 L 666.5 560 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 73.5 561 L 74 564.5 L 73 564.5 L 73.5 561 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 498.5 562 L 501 568.5 L 500 568.5 L 498.5 562 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 902.5 562 L 903 566.5 L 902 566.5 L 902.5 562 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 674.5 563 L 684 566.5 L 682.5 567 L 674.5 564 L 674.5 563 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 970.5 563 L 971 567.5 L 970 567.5 L 970.5 563 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 74.5 566 L 75 569.5 L 74 569.5 L 74.5 566 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 6.5 567 L 7 571.5 L 6 571.5 L 6.5 567 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 685.5 567 L 692 569.5 L 690.5 570 L 685.5 568 L 685.5 567 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 901.5 568 L 902 571.5 L 901 571.5 L 901.5 568 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 969.5 569 L 970 573.5 L 969 573.5 L 969.5 569 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 693.5 570 L 703 573.5 L 701.5 574 L 693.5 571 L 693.5 570 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 75.5 571 L 76 574.5 L 75 574.5 L 75.5 571 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 7.5 573 L 8 576.5 L 7 576.5 L 7.5 573 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 502.5 573 L 505 579.5 L 504 579.5 L 502.5 573 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 900.5 573 L 901 576.5 L 900 576.5 L 900.5 573 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 704.5 574 L 711 576.5 L 709.5 577 L 704.5 575 L 704.5 574 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 968.5 575 L 969 578.5 L 968 578.5 L 968.5 575 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 76.5 576 L 77 579.5 L 76 579.5 L 76.5 576 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 468.5 576 L 475 593.5 L 474 593.5 L 468.5 576 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 712.5 577 L 722 580.5 L 720.5 581 L 712.5 578 L 712.5 577 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 8.5 578 L 11 591.5 L 10 591.5 L 8 582.5 L 8.5 578 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 899.5 578 L 900 580.5 L 899 580.5 L 899.5 578 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 967.5 580 L 968 583.5 L 967 583.5 L 967.5 580 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 77.5 581 L 78 583.5 L 77 583.5 L 77.5 581 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 505.5 581 L 508 587.5 L 507 587.5 L 505.5 581 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 723.5 581 L 730 583.5 L 728.5 584 L 723.5 582 L 723.5 581 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 898.5 582 L 899 584.5 L 898 584.5 L 898.5 582 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 731.5 584 L 741 587.5 L 739.5 588 L 731.5 585 L 731.5 584 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 78.5 585 L 79 587.5 L 78 587.5 L 78.5 585 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 966.5 585 L 967 588.5 L 966 588.5 L 966.5 585 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 897.5 586 L 898 589.5 L 895.5 597 L 895 594.5 L 897.5 586 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 742.5 588 L 749 590.5 L 747.5 591 L 742.5 589 L 742.5 588 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 79.5 589 L 81 595.5 L 80 595.5 L 79.5 589 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 965.5 590 L 966 593.5 L 965 593.5 L 965.5 590 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 750.5 591 L 760 594.5 L 758.5 595 L 750.5 592 L 750.5 591 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 509.5 592 L 512 598.5 L 511 598.5 L 509.5 592 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 11.5 593 L 12 596.5 L 11 596.5 L 11.5 593 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 475.5 595 L 482 612.5 L 481 612.5 L 475.5 595 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 761.5 595 L 768 597.5 L 766.5 598 L 761.5 596 L 761.5 595 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 964.5 595 L 965 597.5 L 964 597.5 L 964.5 595 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 81.5 597 L 82 599.5 L 81 599.5 L 81.5 597 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 12.5 598 L 13 600.5 L 12 600.5 L 12.5 598 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 769.5 598 L 779 601.5 L 777.5 602 L 769.5 599 L 769.5 598 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 894.5 598 L 895 600.5 L 894 600.5 L 894.5 598 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 963.5 599 L 964 602.5 L 959.5 618 L 959 615.5 L 963.5 599 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 512.5 600 L 515 606.5 L 514 606.5 L 512.5 600 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 82.5 601 L 84 606.5 L 83 606.5 L 82.5 601 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 13.5 602 L 14 604.5 L 13 604.5 L 13.5 602 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 780.5 602 L 787 604.5 L 785.5 605 L 780.5 603 L 780.5 602 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 893.5 602 L 894 604.5 L 893 607.5 L 899 610.5 L 897.5 611 L 892 609 L 893.5 602 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 788.5 605 L 798 608.5 L 796.5 609 L 788.5 606 L 788.5 605 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 14.5 606 L 15 608.5 L 14 608.5 L 14.5 606 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 799.5 609 L 806 611.5 L 804.5 612 L 799.5 610 L 799.5 609 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 15.5 610 L 16 612.5 L 15 612.5 L 15.5 610 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 85.5 611 L 93 633.5 L 92 633.5 L 85 613.5 L 85.5 611 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 516.5 611 L 519 617.5 L 518 617.5 L 516.5 611 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 807.5 612 L 817 615.5 L 815.5 616 L 807.5 613 L 807.5 612 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 903.5 612 L 910 614.5 L 908.5 615 L 903.5 613 L 903.5 612 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 16.5 614 L 17 616.5 L 16 616.5 L 16.5 614 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 482.5 614 L 489 631.5 L 488 631.5 L 482.5 614 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 911.5 615 L 929 621.5 L 927.5 622 L 913.5 617 L 911.5 615 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 818.5 616 L 825 618.5 L 823.5 619 L 818.5 617 L 818.5 616 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 17.5 618 L 19 623.5 L 18 623.5 L 17.5 618 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 519.5 619 L 522 625.5 L 521 625.5 L 519.5 619 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 826.5 619 L 836 622.5 L 834.5 623 L 826.5 620 L 826.5 619 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 958.5 619 L 959 621.5 L 957.5 625 L 957 622.5 L 958.5 619 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 930.5 622 L 937 624.5 L 935.5 625 L 930.5 623 L 930.5 622 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 837.5 623 L 844 625.5 L 842.5 626 L 837.5 624 L 837.5 623 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 19.5 625 L 22 633.5 L 21 633.5 L 19.5 625 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 938.5 625 L 948 628.5 L 946.5 629 L 938.5 626 L 938.5 625 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 845.5 626 L 855 629.5 L 853.5 630 L 845.5 627 L 845.5 626 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 956.5 626 L 957 628.5 L 956 632 L 949 629.5 L 950.5 629 L 954.5 631 L 956.5 626 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 522.5 627 L 526 636.5 L 525 636.5 L 522.5 627 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 856.5 630 L 863 632.5 L 861.5 633 L 856.5 631 L 856.5 630 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 489.5 633 L 496 650.5 L 495 650.5 L 489.5 633 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 864.5 633 L 874 636.5 L 872.5 637 L 864.5 634 L 864.5 633 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 93.5 635 Q 108.7 676.8 131 711.5 Q 159.9 757.6 198.5 794 Q 234.8 828.7 280 854.5 L 278.5 854 Q 221.5 822 179 775.5 Q 151.8 746.2 130 711.5 L 105 665.5 L 94 639.5 L 93.5 635 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 875.5 637 L 882 639.5 L 880.5 640 L 875.5 638 L 875.5 637 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 526.5 638 L 529 644.5 L 528 644.5 L 526.5 638 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 883.5 640 L 890 642.5 L 888.5 643 L 883.5 641 L 883.5 640 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 894.5 644 L 901 646.5 L 899.5 647 L 894.5 645 L 894.5 644 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 529.5 646 L 533 655.5 L 532 655.5 L 529.5 646 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 902.5 647 L 909 649.5 L 907.5 650 L 902.5 648 L 902.5 647 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 27.5 650 L 31 659.5 L 30 659.5 L 27.5 650 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 910.5 650 L 920 653.5 L 918.5 654 L 910.5 651 L 910.5 650 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 496.5 652 L 503 669.5 L 502 669.5 L 496.5 652 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 921.5 654 L 928 656.5 L 926.5 657 L 921.5 655 L 921.5 654 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 533.5 657 L 536 663.5 L 535 663.5 L 533.5 657 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 929.5 657 L 939 660.5 L 937.5 661 L 929.5 658 L 929.5 657 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 31.5 661 L 39 679.5 L 38 679.5 L 32 665.5 L 31.5 661 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 940.5 661 L 947 663.5 L 945.5 664 L 940.5 662 L 940.5 661 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 536.5 665 L 540 674.5 L 539 674.5 L 536.5 665 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 951.5 665 L 958 667.5 L 956.5 668 L 951.5 666 L 951.5 665 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 959.5 668 L 969 671.5 L 967.5 672 L 959.5 669 L 959.5 668 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 503.5 671 L 510 688.5 L 509 688.5 L 503.5 671 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 970.5 672 L 977 674.5 L 975.5 675 L 970.5 673 L 970.5 672 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 978.5 675 Q 980.8 674.3 980 676.5 L 956.5 689 L 957.5 687 L 979 676.5 L 978.5 675 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 540.5 676 L 543 682.5 L 542 682.5 L 540.5 676 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 39.5 681 L 43 688.5 L 42 688.5 L 39.5 681 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 543.5 684 L 547 693.5 L 546 693.5 L 543.5 684 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 43.5 690 L 60 722.5 L 58 721.5 L 43 691.5 L 43.5 690 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 510.5 690 L 515 702.5 L 514 702.5 L 510.5 690 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 952.5 690 L 951.5 692 L 925.5 705 L 926.5 703 L 952.5 690 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 547.5 695 L 550 701.5 L 549 701.5 L 547.5 695 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 550.5 703 L 554 712.5 L 553 712.5 L 550.5 703 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 513.5 704 L 515 704.5 L 351.5 798 L 332.5 807 L 332.5 806 L 358.5 793 L 513.5 704 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 921.5 706 L 920.5 708 L 894.5 721 L 895.5 719 L 921.5 706 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 554.5 714 L 557 720.5 L 556 720.5 L 554.5 714 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 892.5 721 L 891.5 723 L 865.5 736 L 866.5 734 L 892.5 721 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 557.5 722 L 561 731.5 L 560 731.5 L 557.5 722 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 60.5 724 Q 98.6 792.4 153.5 844 Q 212.9 901.1 294 936.5 L 292.5 937 Q 195.7 893.7 129 820.5 Q 88.2 777.5 60.5 724 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 561.5 733 L 564 739.5 L 563 739.5 L 561.5 733 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 861.5 737 L 860.5 739 L 836.5 751 L 837.5 749 L 861.5 737 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 564.5 741 L 568 750.5 L 567 750.5 L 564.5 741 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 568.5 752 L 571 758.5 L 570 758.5 L 568.5 752 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 832.5 752 L 972 893.5 L 879.5 985 L 740 846.5 L 729.5 866 L 730 864.5 L 740.5 845 L 879.5 984 L 971 892.5 L 832 753.5 L 832.5 752 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 894.5 757 L 896 757.5 L 890.5 765 L 887 762.5 L 888.5 760 L 894.5 757 Z M 893 759 L 890 761 Q 887 760 888 763 L 891 764 L 894 760 L 893 759 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 571.5 760 L 575 769.5 L 574 769.5 L 571.5 760 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 278.5 769 L 279 775.5 L 278 775.5 L 278.5 769 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 575.5 771 L 578 777.5 L 577 777.5 L 575.5 771 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 279.5 777 L 281 783.5 L 280 783.5 L 279.5 777 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 578.5 779 L 582 788.5 L 581 788.5 L 578.5 779 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 281.5 785 Q 284.9 796.6 293.5 803 L 305 808.5 L 302.5 809 Q 291.8 805.2 286 796.5 L 282 789.5 L 281.5 785 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 582.5 790 L 585 796.5 L 584 796.5 L 582.5 790 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 585.5 798 L 589 807.5 L 588 807.5 L 585.5 798 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 325.5 808 L 328 808.5 L 325.5 809 L 325.5 808 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 306.5 809 L 311 809.5 L 306.5 810 L 306.5 809 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 319.5 809 L 324 809.5 L 319.5 810 L 319.5 809 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 589.5 809 L 592 815.5 L 591 815.5 L 589.5 809 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 592.5 817 L 595 823.5 L 594 823.5 L 592.5 817 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 595.5 825 L 599 834.5 L 598 834.5 L 595.5 825 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 599.5 836 L 602 842.5 L 601 842.5 L 599.5 836 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 602.5 844 L 606 853.5 L 605 853.5 L 602.5 844 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 281.5 855 L 289 859.5 L 287.5 859 Q 281.9 858.2 281.5 855 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 606.5 855 L 609 861.5 L 608 861.5 L 606.5 855 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 290.5 860 L 309 869.5 L 307.5 870 L 291.5 862 L 290.5 860 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 609.5 863 L 613 872.5 L 612 872.5 L 609.5 863 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 728.5 867 L 728 868.5 L 706.5 909 L 707 907.5 L 728.5 867 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 310.5 870 L 320 874.5 L 318.5 875 L 310.5 871 L 310.5 870 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 613.5 874 L 616 880.5 L 615 880.5 L 613.5 874 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 321.5 875 L 327 877.5 L 325.5 878 L 321.5 876 L 321.5 875 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 328.5 878 L 337 881.5 L 335.5 882 L 328.5 879 L 328.5 878 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 338.5 882 L 345 884.5 L 343.5 885 L 338.5 883 L 338.5 882 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 616.5 882 L 620 891.5 L 619 891.5 L 616.5 882 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 346.5 885 L 366 891.5 L 363.5 892 L 348.5 887 L 346.5 885 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 367.5 892 L 373 893.5 L 370.5 894 L 367.5 893 L 367.5 892 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 620.5 893 L 623 899.5 L 622 899.5 L 620.5 893 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 374.5 894 L 380 895.5 L 377.5 896 L 374.5 895 L 374.5 894 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 381.5 896 L 384 896.5 L 381.5 897 L 381.5 896 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 385.5 897 L 388 897.5 L 385.5 898 L 385.5 897 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 389.5 898 L 392 898.5 L 389.5 899 L 389.5 898 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 583.5 898 Q 589.4 895.9 588 900.5 L 590 905.5 L 589 905.5 L 587 899 L 579.5 900 L 579.5 899 L 583.5 898 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 393.5 899 L 397 899.5 L 393.5 900 L 393.5 899 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 398.5 900 L 401 900.5 L 398.5 901 L 398.5 900 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 575.5 900 L 578 900.5 L 575.5 901 L 575.5 900 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 748.5 900 L 749 902 L 747 901.5 L 748.5 900 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 402.5 901 L 406 901.5 L 402.5 902 L 402.5 901 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 569.5 901 L 574 901.5 L 569.5 902 L 569.5 901 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 407.5 902 L 417 903.5 L 412.5 904 L 407.5 903 L 407.5 902 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 564.5 902 L 568 902.5 L 564.5 903 L 564.5 902 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 559.5 903 L 563 903.5 L 559.5 904 L 559.5 903 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 418.5 904 L 423 904.5 L 418.5 905 L 418.5 904 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 553.5 904 L 558 904.5 L 553.5 905 L 553.5 904 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 624.5 904 L 627 910.5 L 626 910.5 L 624.5 904 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 424.5 905 L 430 905.5 L 424.5 906 L 424.5 905 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 546.5 905 L 551 905.5 L 546.5 906 L 546.5 905 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 431.5 906 L 437 906.5 L 431.5 907 L 431.5 906 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 538.5 906 L 544 906.5 L 538.5 907 L 538.5 906 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 439.5 907 L 446 907.5 L 439.5 908 L 439.5 907 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 529.5 907 L 536 907.5 L 529.5 908 L 529.5 907 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 590.5 907 L 594 916.5 L 593 916.5 L 590.5 907 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 449.5 908 L 458 908.5 L 449.5 909 L 449.5 908 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 518.5 908 L 527 908.5 L 518.5 909 L 518.5 908 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 462.5 909 L 478 909.5 L 462.5 910 L 462.5 909 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 496.5 909 L 514 909.5 L 496.5 910 L 496.5 909 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 705.5 910 L 705 911.5 L 683.5 952 L 684 950.5 L 705.5 910 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 627.5 912 L 631 921.5 L 630 921.5 L 627.5 912 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 594.5 918 L 598 927.5 L 597 927.5 L 594.5 918 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 631.5 923 L 634 929.5 L 633 929.5 L 631.5 923 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 598.5 929 L 601 935.5 L 600 935.5 L 598.5 929 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 634.5 931 L 638 940.5 L 637 940.5 L 634.5 931 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 295.5 937 L 306 941.5 L 304.5 942 L 295.5 938 L 295.5 937 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 601.5 937 L 605 946.5 L 604 946.5 L 601.5 937 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 307.5 942 L 311 943.5 L 309.5 944 L 307.5 942 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 638.5 942 L 641 948.5 L 640 948.5 L 638.5 942 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 312.5 944 L 333 951.5 L 331.5 952 L 314.5 946 L 312.5 944 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 605.5 948 L 608 954.5 L 607 954.5 L 605.5 948 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 641.5 950 L 644 956.5 L 643 956.5 L 641.5 950 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 334.5 952 L 349 956.5 L 346.5 957 L 334.5 953 L 334.5 952 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 682.5 953 L 682 954.5 L 660.5 995 L 661 993.5 L 682.5 953 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 608.5 956 L 610 961.5 L 609 961.5 L 608.5 956 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 350.5 957 L 356 958.5 L 353.5 959 L 350.5 958 L 350.5 957 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 644.5 958 L 648 967.5 L 647 967.5 L 644.5 958 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 357.5 959 L 367 961.5 L 364.5 962 L 357.5 960 L 357.5 959 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 368.5 962 L 380 964.5 L 376.5 965 L 368.5 963 L 368.5 962 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 605.5 962 L 608 962.5 L 605.5 963 L 605.5 962 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 601.5 963 L 604 963.5 L 601.5 964 L 601.5 963 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 597.5 964 L 600 964.5 L 597.5 965 L 597.5 964 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 381.5 965 L 384 965.5 L 381.5 966 L 381.5 965 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 592.5 965 L 596 965.5 L 592.5 966 L 592.5 965 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 385.5 966 L 389 966.5 L 385.5 967 L 385.5 966 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 587.5 966 L 591 966.5 L 587.5 967 L 587.5 966 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 390.5 967 L 394 967.5 L 390.5 968 L 390.5 967 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 583.5 967 L 586 967.5 L 583.5 968 L 583.5 967 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 395.5 968 L 399 968.5 L 395.5 969 L 395.5 968 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 577.5 968 L 582 968.5 L 577.5 969 L 577.5 968 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 400.5 969 L 405 969.5 L 400.5 970 L 400.5 969 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 571.5 969 L 576 969.5 L 571.5 970 L 571.5 969 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 648.5 969 L 651 975.5 L 650 975.5 L 648.5 969 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 406.5 970 L 411 970.5 L 406.5 971 L 406.5 970 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 566.5 970 L 570 970.5 L 566.5 971 L 566.5 970 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 412.5 971 L 417 971.5 L 412.5 972 L 412.5 971 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 559.5 971 L 564 971.5 L 559.5 972 L 559.5 971 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 419.5 972 L 425 972.5 L 419.5 973 L 419.5 972 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 552.5 972 L 557 972.5 L 552.5 973 L 552.5 972 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 426.5 973 L 433 973.5 L 426.5 974 L 426.5 973 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 544.5 973 L 551 973.5 L 544.5 974 L 544.5 973 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 435.5 974 L 443 974.5 L 435.5 975 L 435.5 974 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 534.5 974 L 541 974.5 L 534.5 975 L 534.5 974 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 445.5 975 L 455 975.5 L 445.5 976 L 445.5 975 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 521.5 975 L 531 975.5 L 521.5 976 L 521.5 975 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 459.5 976 L 478 976.5 L 459.5 977 L 459.5 976 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 497.5 976 L 517 976.5 L 497.5 977 L 497.5 976 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 651.5 977 L 655 986.5 L 654 986.5 L 651.5 977 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 655.5 988 L 658 994.5 L 657 994.5 L 655.5 988 Z "], ["fill", "rgb(126,126,126)", "stroke", "rgb(126,126,126)", "stroke-width", "1", "opacity", "1", "d", "M 658 996 L 660 996.5 L 658 997.5 L 658 996 Z "], ["fill", "rgb(0,0,0)", "stroke", "rgb(0,0,0)", "stroke-width", "1", "opacity", "1", "d", "M 463.5 1 L 513.5 1 L 514.5 2 L 527.5 2 L 528.5 3 L 547.5 4 L 548.5 5 L 555.5 5 L 556.5 6 L 574.5 8 L 625.5 20 L 678.5 39 Q 774.9 81.1 842 152.5 Q 908.3 221.2 946 318.5 L 960 362.5 L 971 414.5 L 971 421.5 L 974 438.5 L 974 448.5 L 975 449.5 L 975 463.5 L 976 464.5 L 976 512.5 L 975 513.5 L 975 527.5 L 974 528.5 L 973 547.5 L 972 548.5 L 972 555.5 L 971 556.5 L 969 574.5 L 959 618.5 L 954.5 631 L 899.5 611 L 893 607.5 L 901 576.5 L 906 548.5 L 906 541.5 L 908 532.5 L 908 522.5 L 909 521.5 L 909 505.5 L 910 504.5 L 910 472.5 L 909 471.5 L 909 455.5 L 908 454.5 L 907 435.5 L 899 391.5 L 887 350.5 L 873 315.5 Q 836.2 235.8 775.5 180 Q 719 126.5 640.5 95 L 601.5 82 L 555.5 72 L 534.5 70 L 533.5 69 L 523.5 69 L 522.5 68 L 508.5 68 L 507.5 67 L 469.5 67 L 468.5 68 L 453.5 68 L 452.5 69 L 434.5 70 L 390.5 78 L 352.5 89 L 321.5 101 Q 243.6 135.6 188 192.5 Q 127.1 253.1 93 340.5 L 81 377.5 L 71 424.5 L 69 447.5 L 68 448.5 L 68 460.5 L 67 461.5 L 67 516.5 L 68 517.5 L 68 528.5 L 69 529.5 L 69 538.5 L 70 539.5 L 71 552.5 L 79 592.5 L 91 631.5 L 105 665.5 Q 141.9 743.1 201.5 798 Q 262.2 855.3 348.5 887 L 393.5 900 L 431.5 907 L 448.5 908 L 449.5 909 L 461.5 909 L 462.5 910 L 513.5 910 L 514.5 909 L 526.5 909 L 527.5 908 L 535.5 908 L 536.5 907 L 557.5 905 L 587 899 L 608 955.5 L 609 962 L 582.5 968 L 552.5 972 L 551.5 973 L 544.5 973 L 543.5 974 L 521.5 975 L 520.5 976 L 478.5 977 L 477.5 976 L 455.5 976 L 454.5 975 L 433.5 974 L 432.5 973 L 417.5 972 L 384.5 966 L 333.5 952 L 294.5 937 Q 199.4 894.6 133 823.5 Q 68.2 755.8 31 660.5 L 17 617.5 L 7 572.5 L 4 545.5 L 3 544.5 L 3 536.5 L 2 535.5 L 2 524.5 L 1 523.5 L 0 474.5 L 1 473.5 L 1 454.5 L 2 453.5 L 2 442.5 L 3 441.5 L 4 424.5 L 12 380.5 Q 24.8 325.3 47 279.5 Q 90.1 190.6 159.5 128 Q 219.6 72.6 300.5 38 L 344.5 22 L 382.5 12 L 421.5 5 L 428.5 5 L 437.5 3 L 447.5 3 L 448.5 2 L 462.5 2 L 463.5 1 Z "], ["fill", "rgb(0,0,0)", "stroke", "rgb(0,0,0)", "stroke-width", "1", "opacity", "1", "d", "M 308.5 168 L 320.5 168 L 329.5 170 L 348.5 179 L 824.5 450 Q 838 457 847 468.5 L 853 480.5 L 854 491.5 Q 850.3 509.8 837.5 519 L 769.5 559 L 763.5 561 L 483.5 457 L 475.5 455 L 467.5 455 Q 452.7 457.7 445 467.5 L 439 478.5 Q 436.7 485.2 438 495.5 L 515 703.5 L 342.5 802 L 328.5 808 L 318.5 810 L 311.5 810 Q 310.2 807.8 305.5 809 L 296.5 805 L 288 797.5 L 281 784.5 L 278 768.5 L 278 208.5 L 282 190.5 Q 286.2 180.2 294.5 174 L 308.5 168 Z "], ["fill", "rgb(0,0,0)", "stroke", "rgb(0,0,0)", "stroke-width", "1", "opacity", "1", "d", "M 472.5 489 L 931.5 659 L 969.5 672 L 979 676.5 L 832 752 L 832 753.5 L 971 892.5 L 879.5 984 L 740.5 845 L 739 846.5 L 666 982.5 L 660 996 Q 657 997.3 658 993.5 L 474 496.5 L 472.5 489 Z "], ["fill", "rgb(0,0,0)", "stroke", "rgb(0,0,0)", "stroke-width", "1", "opacity", "1", "d", "M 892.5 759 L 894 759.5 L 890.5 764 L 888 762.5 Q 887.3 760.3 889.5 761 L 892.5 759 Z "]], template: function ShowTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowTitleComponent_Template_button_click_6_listener() { return ctx.closeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ShowTitleComponent_app_title_detail_10_Template, 1, 1, "app-title-detail", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search by Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ShowTitleComponent_Template_input_ngModelChange_15_listener($event) { return ctx.Term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "TitleId");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Title Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Release Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Processed DateTime (UTC)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ShowTitleComponent_tr_30_Template, 497, 4, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ModalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ActivateShowTitleDetailsComp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Term);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 4, ctx.TitleList, ctx.Term));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _title_detail_title_detail_component__WEBPACK_IMPORTED_MODULE_4__["TitleDetailComponent"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXRpdGxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'myapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 0, consts: [[1, "container"], [1, "d-flex", "justify-content-center"], [1, "navbar", "navbar-expand-sm", "bg-light", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "home", "Button", "", 1, "m-1", "btn", "btn-light", "btn-outline-primary"], ["routerLink", "titles", "Button", "", 1, "m-1", "btn", "btn-light", "btn-outline-primary"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Warner Media (Crossroads Demo App)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Title Search Portal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Titles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_pathLocation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pathLocation.component */ "of7e");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/title/title.component */ "bwXy");
/* harmony import */ var _components_title_show_title_show_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/title/show-title/show-title.component */ "3/1x");
/* harmony import */ var _components_title_detail_title_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/title-detail/title-detail.component */ "+vJW");
/* harmony import */ var _service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/shared.service */ "qS8V");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _components_callback_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/callback.pipe */ "hjlE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"], useValue: '/' },
        _service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_pathLocation_component__WEBPACK_IMPORTED_MODULE_4__["PathLocationComponent"],
        _components_title_title_component__WEBPACK_IMPORTED_MODULE_5__["TitleComponent"],
        _components_title_show_title_show_title_component__WEBPACK_IMPORTED_MODULE_6__["ShowTitleComponent"],
        _components_title_detail_title_detail_component__WEBPACK_IMPORTED_MODULE_7__["TitleDetailComponent"],
        _components_callback_pipe__WEBPACK_IMPORTED_MODULE_12__["CallbackPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"]] }); })();


/***/ }),

/***/ "bwXy":
/*!*****************************************************!*\
  !*** ./src/app/components/title/title.component.ts ***!
  \*****************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _show_title_show_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-title/show-title.component */ "3/1x");


class TitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], decls: 1, vars: 0, template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-show-title");
    } }, directives: [_show_title_show_title_component__WEBPACK_IMPORTED_MODULE_1__["ShowTitleComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aXRsZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "hjlE":
/*!*********************************************!*\
  !*** ./src/app/components/callback.pipe.ts ***!
  \*********************************************/
/*! exports provided: CallbackPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackPipe", function() { return CallbackPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CallbackPipe {
    transform(items, callback, filter) {
        if (!items || !callback) {
            return items;
        }
        return items.filter(item => callback(item, filter));
    }
}
CallbackPipe.ɵfac = function CallbackPipe_Factory(t) { return new (t || CallbackPipe)(); };
CallbackPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "callback", type: CallbackPipe, pure: false });


/***/ }),

/***/ "iunA":
/*!**********************************************!*\
  !*** ./src/app/components/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 1, vars: 0, consts: [["src", "../../images/Warner Media Logo_00001.jfif", 2, "text-align", "center"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, encapsulation: 2 });


/***/ }),

/***/ "of7e":
/*!******************************************************!*\
  !*** ./src/app/components/pathLocation.component.ts ***!
  \******************************************************/
/*! exports provided: PathLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathLocationComponent", function() { return PathLocationComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PathLocationComponent {
    constructor(location) {
        this.location = location;
    }
}
PathLocationComponent.ɵfac = function PathLocationComponent_Factory(t) { return new (t || PathLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"])); };
PathLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PathLocationComponent, selectors: [["path-location"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"], {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["PathLocationStrategy"]
            }
        ])], decls: 13, vars: 2, template: function PathLocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "PathLocationStrategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Current URL is: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Normalize: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "/foo/bar/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " is: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.location.path());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.location.normalize("foo/bar"));
    } }, encapsulation: 2 });


/***/ }),

/***/ "qS8V":
/*!*******************************************!*\
  !*** ./src/app/service/shared.service.ts ***!
  \*******************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class SharedService {
    constructor(http) {
        this.http = http;
        this.APIUrl = "http://localhost:62615/api";
        this.ImagesUrl = "http://localhost:62615/images";
    }
    getTitleNames() {
        return this.http.get(this.APIUrl + '/title/getAllTitleNames');
    }
    getTitleList() {
        return this.http.get(this.APIUrl + '/title/gettitles');
    }
    addTitle(val) {
        return this.http.post(this.APIUrl + '/title/createtitle', val);
    }
    putTitle(val) {
        return this.http.put(this.APIUrl + '/title/updatetitle', val);
    }
    deleteTitle(val) {
        return this.http.delete(this.APIUrl + '/title/deletetitle?titleId=' + val);
    }
    getAllTitle_Awards(val) {
        return this.http.get(this.APIUrl + '/award/getAllByTitle?titleId=' + val);
    }
    getAllTitle_OtherNames(val) {
        return this.http.get(this.APIUrl + '/otherName/getAllByTitle?titleId=' + val);
    }
    getAllTitle_StoryLines(val) {
        return this.http.get(this.APIUrl + '/storyLine/getAllByTitle?titleId=' + val);
    }
    getAllTitle_Genre(val) {
        return this.http.get(this.APIUrl + '/genre/getAllByTitle?titleId=' + val);
    }
    getAllTitle_Participant(val) {
        return this.http.get(this.APIUrl + '/participant/getAllByTitle?titleId=' + val);
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home.component */ "iunA");
/* harmony import */ var _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/title/title.component */ "bwXy");
/* harmony import */ var _components_title_detail_title_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/title-detail/title-detail.component */ "+vJW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    //{ path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'titles', component: _components_title_title_component__WEBPACK_IMPORTED_MODULE_2__["TitleComponent"] },
    { path: 'titleDetails', component: _components_title_detail_title_detail_component__WEBPACK_IMPORTED_MODULE_3__["TitleDetailComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map