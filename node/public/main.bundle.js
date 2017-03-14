webpackJsonp([1,5],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsService = (function () {
    function CommentsService(http) {
        this.http = http;
    }
    CommentsService.prototype.addComment = function (newComment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/comment', JSON.stringify(newComment), { headers: headers }).map(function (res) { return res.json(); });
    };
    CommentsService.prototype.getComments = function (channelId) {
        return this.http.get('api/comment/' + channelId).map(function (res) { return res.json(); });
    };
    CommentsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], CommentsService);
    return CommentsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/comments.service.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VotesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VotesService = (function () {
    function VotesService(http) {
        this.http = http;
    }
    VotesService.prototype.addVote = function (newVote) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/vote', JSON.stringify(newVote), { headers: headers }).map(function (res) { return res.json(); });
    };
    VotesService.prototype.getVotes = function (channelId) {
        return this.http.get('api/vote/' + channelId).map(function (res) { return res.json(); });
    };
    VotesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], VotesService);
    return VotesService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/votes.service.js.map

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 448;


/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(582);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/main.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_channels_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_votes_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comments_service__ = __webpack_require__(135);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(659),
            styles: [__webpack_require__(637)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_channels_service__["a" /* ChannelsService */], __WEBPACK_IMPORTED_MODULE_2__services_votes_service__["a" /* VotesService */], __WEBPACK_IMPORTED_MODULE_3__services_comments_service__["a" /* CommentsService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/app.component.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_channels_channels_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_charts_charts_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_not_found_page_not_found_component__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_vote_vote_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_get_started_get_started_component__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_channels_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_votes_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_comments_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts_ng2_charts__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts_ng2_charts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_channels_channels_component__["a" /* ChannelsComponent */] },
    { path: 'chart/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_charts_charts_component__["a" /* ChartsComponent */] },
    { path: 'v/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_vote_vote_component__["a" /* VoteComponent */] },
    { path: 'get-started', component: __WEBPACK_IMPORTED_MODULE_11__components_get_started_get_started_component__["a" /* GetStartedComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] } // Not something above
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_channels_channels_component__["a" /* ChannelsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_charts_charts_component__["a" /* ChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_vote_vote_component__["a" /* VoteComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_get_started_get_started_component__["a" /* GetStartedComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_15_ng2_charts_ng2_charts__["ChartsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_channels_service__["a" /* ChannelsService */],
                __WEBPACK_IMPORTED_MODULE_13__services_votes_service__["a" /* VotesService */],
                __WEBPACK_IMPORTED_MODULE_14__services_comments_service__["a" /* CommentsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/app.module.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_channels_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_underscore__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChannelsComponent = (function () {
    function ChannelsComponent(channelsService, router) {
        this.channelsService = channelsService;
        this.router = router;
        this.storedChannels = [];
        this.retrieve();
    }
    ChannelsComponent.prototype.ngOnInit = function () {
    };
    // Return time from now, i.e. "3 days ago"
    ChannelsComponent.prototype.daysAgo = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(new Date(date)).fromNow();
    };
    ChannelsComponent.prototype.addToStorage = function (title) {
        var arr = __WEBPACK_IMPORTED_MODULE_4_underscore__["filter"](this.storedChannels, function (e) { return e.title == title; });
        if (!(arr.length > 0)) {
            this.storedChannels.push({
                title: title,
                lastJoin: (new Date()).toISOString()
            });
        }
    };
    // Not used
    ChannelsComponent.prototype.removeOne = function (title) {
        var _this = this;
        this.storedChannels.forEach(function (element, index) {
            if (element.title == title) {
                _this.storedChannels.splice(index, 1);
                _this.store();
                return;
            }
        });
    };
    ChannelsComponent.prototype.removeAll = function () {
        this.storedChannels = [];
        localStorage.removeItem('channels');
    };
    ChannelsComponent.prototype.store = function () {
        localStorage.setItem('channels', JSON.stringify(this.storedChannels));
    };
    ChannelsComponent.prototype.retrieve = function () {
        var chan = JSON.parse(localStorage.getItem('channels'));
        if (chan) {
            this.storedChannels = chan;
        }
    };
    // e : title
    ChannelsComponent.prototype.addChannel = function (title) {
        var _this = this;
        var newChannel = {
            title: title
        };
        this.channelsService.addChannel(newChannel).subscribe(function (newChannelId) {
            _this.router.navigate(['/v/' + newChannelId]);
        });
    };
    ChannelsComponent.prototype.checkChannel = function (title) {
        var _this = this;
        this.channelsService.getChannels().subscribe(function (channels) {
            var chan = channels.filter(function (x) { return x.title == title; }); //Filter results
            _this.addToStorage(title);
            _this.store();
            if (chan.length == 0) {
                _this.addChannel(title);
            }
            else {
                _this.router.navigate(['/v/' + chan[0]._id]);
            }
        });
    };
    ChannelsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-channels',
            template: __webpack_require__(660),
            styles: [__webpack_require__(638)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_channels_service__["a" /* ChannelsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_channels_service__["a" /* ChannelsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], ChannelsComponent);
    return ChannelsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/channels.component.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_channels_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_votes_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comments_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChartsComponent = (function () {
    function ChartsComponent(route, router, votesService, channelsService, commentsService) {
        this.route = route;
        this.router = router;
        this.votesService = votesService;
        this.channelsService = channelsService;
        this.commentsService = commentsService;
        this.pieChartLabels = [":( Sad", ":/ Meh", ":| Average", ":) Good", ":D Happy"];
        this.pieChartData = [0, 0, 0, 0, 0];
        this.pieChartType = "pie";
        this.pieChartColors = [{ backgroundColor: ["#8c3b5d", "#ff7b00", "#f1c500", "#5b90e5", "#1fbc99"] }];
        this.lineChartDataDay = [{
                data: [],
                label: "Average mood level"
            }];
        this.lineChartDataWeek = [{
                data: [],
                label: "Average mood level"
            }];
        this.lineChartDataMonth = [{
                data: [],
                label: "Average mood level"
            }];
        this.lineChartLabelsDay = [];
        this.lineChartLabelsWeek = [];
        this.lineChartLabelsMonth = [];
        this.lineChartOptions = {
            responsive: true,
            spanGaps: false
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartColors = [{
                backgroundColor: "transparent",
                borderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
            }];
        this.channelId = route.snapshot.params['id'];
        this.verifyChannel(this.channelId);
        this.period = "global"; // default value
        this.timeStart = new Date();
        this.timeEnd = new Date();
        this.commentList = [];
    }
    // Gets group data (votes + comments)
    ChartsComponent.prototype.ngOnInit = function () {
        this.getVotes(this.channelId);
        this.getComments(this.channelId);
    };
    // Toggle visibility on the comments
    ChartsComponent.prototype.showComment = function (i) {
        this.commentList[i] = !this.commentList[i];
    };
    // formatData on period change
    ChartsComponent.prototype.periodOnChange = function (event) {
        this.period = event;
        this.formatData(this.votes, this.comments);
    };
    // formatData once everything is loaded
    ChartsComponent.prototype.loadData = function () {
        if (this.votes != undefined && this.comments != undefined)
            this.formatData(this.votes, this.comments);
    };
    // Creating the .cvs file
    ChartsComponent.prototype.exportData = function () {
        var argV = ["userId", "time", "status"];
        var argC = ["userId", "time", "message"];
        var csv = 'data:text/csv;charset=utf-8,' + argV.join(";") + "\n";
        this.votes.forEach(function (element) {
            csv += element.userId + ";" + element.time.toISOString() + ";" + element.status + "\n";
        });
        csv += argC.join(";") + "\n";
        this.comments.forEach(function (element) {
            csv += element.userId + ";" + element.time.toISOString() + ";" + element.message + "\n";
        });
        var link = document.createElement('a');
        link.setAttribute('href', encodeURI(csv));
        link.setAttribute('download', this.filename());
        link.click();
    };
    // Unique filename, change it to whatever you like
    ChartsComponent.prototype.filename = function () {
        return this.channelTitle + "_" + __WEBPACK_IMPORTED_MODULE_6_moment__().format() + ".csv";
    };
    // Get the channel's comments
    ChartsComponent.prototype.getComments = function (channelId) {
        var _this = this;
        this.commentsService.getComments(channelId).subscribe(function (comments) {
            var tableau = [];
            comments.forEach(function (e) {
                e.time = new Date(e.time); // Change ISO date format into JavaScript date object
                tableau.push(e);
            });
            _this.comments = comments;
            _this.loadData();
        });
    };
    // Get the channel's votes
    ChartsComponent.prototype.getVotes = function (channelId) {
        var _this = this;
        this.votesService.getVotes(channelId).subscribe(function (votes) {
            var tableau = [];
            votes.forEach(function (e) {
                e.time = new Date(e.time); // Change ISO date format into JavaScript date object
                tableau.push(e);
            });
            _this.votes = votes;
            _this.timeStart = votes[0].time;
            _this.loadData();
        });
    };
    // Get the vote count in a period (does not count duplicates)
    ChartsComponent.prototype.getVoteCount = function (element) {
        var slice = element.slice(1, element.length);
        var sum = [];
        slice.forEach(function (e) {
            sum.push(e.length);
        });
        return sum.reduce(function (acc, val) {
            return acc + val;
        }, 0);
    };
    ChartsComponent.prototype.getVotePercentage = function (element, i) {
        var total = this.getVoteCount(element);
        return (total != 0) ? Math.round(element[i].length / total * 100) : 0;
    };
    ChartsComponent.prototype.getAverageScore = function (voteList) {
        if (voteList != undefined) {
            var sum_1 = 0;
            var count_1 = 0;
            voteList.forEach(function (element) {
                for (var i = 1; i < 6; i++) {
                    sum_1 += element.votes[i].length * i;
                    count_1 += element.votes[i].length;
                }
            });
            return Math.round(sum_1 / count_1 * 10) / 10 || 0; // Rounded to one decimal, if 0 votes return 0
        }
    };
    ChartsComponent.prototype.getBestAverageScore = function (voteList) {
        if (voteList != undefined) {
            var res_1 = 0;
            var sum_2;
            var count_2;
            var average_1;
            voteList.forEach(function (element) {
                sum_2 = 0;
                count_2 = 0;
                for (var i = 1; i < 6; i++) {
                    sum_2 += element.votes[i].length * i;
                    count_2 += element.votes[i].length;
                }
                average_1 = Math.round(sum_2 / count_2 * 10) / 10 || 0;
                if (average_1 > res_1) {
                    res_1 = average_1;
                }
                if (res_1 == 5) {
                    return res_1;
                }
            });
            return res_1;
        }
    };
    ChartsComponent.prototype.getWorstAverageScore = function (voteList) {
        if (voteList != undefined) {
            var res_2 = 5;
            var sum_3;
            var count_3;
            var average_2;
            voteList.forEach(function (element) {
                sum_3 = 0;
                count_3 = 0;
                for (var i = 1; i < 6; i++) {
                    sum_3 += element.votes[i].length * i;
                    count_3 += element.votes[i].length;
                }
                average_2 = Math.round(sum_3 / count_3 * 10) / 10 || 0;
                if (average_2 != 0 && average_2 < res_2) {
                    res_2 = average_2;
                }
                if (res_2 == 1) {
                    return res_2;
                }
            });
            return res_2;
        }
    };
    ChartsComponent.prototype.getMostRecentMood = function (voteList, i) {
        var _this = this;
        if (voteList != undefined) {
            var res_3 = "Date not found";
            voteList.slice().forEach(function (element) {
                if (i == _this.getAverageScore([element])) {
                    res_3 = element.date;
                }
            });
            return res_3;
        }
    };
    ChartsComponent.prototype.getAverageScore_Rounded = function (voteList) {
        return Math.round(this.getAverageScore(voteList));
    };
    ChartsComponent.prototype.getBestAverageScore_Rounded = function (voteList) {
        return Math.round(this.getBestAverageScore(voteList));
    };
    ChartsComponent.prototype.getWorstAverageScore_Rounded = function (voteList) {
        return Math.round(this.getWorstAverageScore(voteList));
    };
    // Format votes and comments
    ChartsComponent.prototype.formatData = function (votes, comments) {
        var _this = this;
        var dates = [];
        if (this.period == "global") {
            var tmp = __WEBPACK_IMPORTED_MODULE_5_underscore__["uniq"](votes.slice().reverse(), function (e) { return e.userId; }); // Unique userId
            var tmp2 = __WEBPACK_IMPORTED_MODULE_5_underscore__["groupBy"](tmp, function (e) { return e.status; }); // Group by status  
            var arrFlatten_1 = [];
            __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](tmp2, function (e, index) {
                arrFlatten_1[index] = e;
            });
            dates.push({
                date: this.timeStart,
                format: "global",
                votes: arrFlatten_1,
                comments: comments
            });
        }
        else if (this.period == "day") {
            var startDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.timeStart).clone().startOf('day');
            var endDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.timeEnd).clone().startOf('day');
            while (startDate.diff(endDate) < 1) {
                dates.push({
                    date: startDate.clone().toDate(),
                    votes: [],
                    comments: []
                });
                startDate.add(1, 'd'); // Adding one day
            }
            var votesCursor_1 = 0;
            var commentsCursor_1 = 0;
            dates.forEach(function (element) {
                while (votesCursor_1 < votes.length && __WEBPACK_IMPORTED_MODULE_6_moment__(element.date).diff(__WEBPACK_IMPORTED_MODULE_6_moment__(votes[votesCursor_1].time).startOf('day')) == 0) {
                    element.votes.push(votes[votesCursor_1]);
                    votesCursor_1++;
                }
                while (commentsCursor_1 < comments.length && __WEBPACK_IMPORTED_MODULE_6_moment__(element.date).diff(__WEBPACK_IMPORTED_MODULE_6_moment__(comments[commentsCursor_1].time).startOf('day')) == 0) {
                    element.comments.push(comments[commentsCursor_1]);
                    commentsCursor_1++;
                }
            });
            var res_4 = [];
            dates.forEach(function (element) {
                var tmp = __WEBPACK_IMPORTED_MODULE_5_underscore__["uniq"](element.votes.reverse(), function (e) { return e.userId; });
                var tmp2 = __WEBPACK_IMPORTED_MODULE_5_underscore__["groupBy"](tmp, function (e) { return e.status; });
                var arrFlatten = [];
                __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](tmp2, function (e, index) {
                    arrFlatten[index] = e;
                });
                res_4.push({
                    date: element.date,
                    format: 'day',
                    votes: arrFlatten,
                    comments: element.comments
                });
            });
            dates = res_4;
        }
        else if (this.period == "week") {
            var startDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.timeStart).clone().startOf('week');
            var endDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.timeEnd).clone().startOf('week');
            while (startDate.isoWeeks() <= endDate.isoWeeks()) {
                dates.push({
                    date: startDate.clone().add(1, 'd').toDate(),
                    votes: [],
                    comments: []
                });
                startDate.add(1, 'w'); // Adding one week
            }
            var votesCursor_2 = 0;
            var commentsCursor_2 = 0;
            dates.forEach(function (element) {
                while (votesCursor_2 < votes.length && __WEBPACK_IMPORTED_MODULE_6_moment__(element.date).startOf('week').diff(__WEBPACK_IMPORTED_MODULE_6_moment__(votes[votesCursor_2].time).startOf('week')) == 0) {
                    element.votes.push(votes[votesCursor_2]);
                    votesCursor_2++;
                }
                while (commentsCursor_2 < comments.length && __WEBPACK_IMPORTED_MODULE_6_moment__(element.date).startOf('week').diff(__WEBPACK_IMPORTED_MODULE_6_moment__(comments[commentsCursor_2].time).startOf('week')) == 0) {
                    element.comments.push(comments[commentsCursor_2]);
                    commentsCursor_2++;
                }
            });
            var res_5 = [];
            dates.forEach(function (element) {
                var tmp = __WEBPACK_IMPORTED_MODULE_5_underscore__["uniq"](element.votes.reverse(), function (e) { return e.userId; });
                var tmp2 = __WEBPACK_IMPORTED_MODULE_5_underscore__["groupBy"](tmp, function (e) { return e.status; });
                var arrFlatten = [];
                __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](tmp2, function (e, index) {
                    arrFlatten[index] = e;
                });
                res_5.push({
                    date: element.date,
                    format: 'week',
                    votes: arrFlatten,
                    comments: element.comments
                });
            });
            dates = res_5;
        }
        else if (this.period == "month") {
            var startDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.timeStart).clone().startOf('month');
            var endDate = __WEBPACK_IMPORTED_MODULE_6_moment__(this.timeEnd).clone().startOf('month');
            while (startDate.month() <= endDate.month()) {
                dates.push({
                    date: startDate.clone().toDate(),
                    votes: [],
                    comments: []
                });
                startDate.add(1, 'month'); // Adding one month
            }
            var votesCursor_3 = 0;
            var commentsCursor_3 = 0;
            dates.forEach(function (element) {
                while (votesCursor_3 < votes.length && __WEBPACK_IMPORTED_MODULE_6_moment__(element.date).startOf('month').diff(__WEBPACK_IMPORTED_MODULE_6_moment__(votes[votesCursor_3].time).startOf('month')) == 0) {
                    element.votes.push(votes[votesCursor_3]);
                    votesCursor_3++;
                }
                while (commentsCursor_3 < comments.length && __WEBPACK_IMPORTED_MODULE_6_moment__(element.date).startOf('month').diff(__WEBPACK_IMPORTED_MODULE_6_moment__(comments[commentsCursor_3].time).startOf('month')) == 0) {
                    element.comments.push(comments[commentsCursor_3]);
                    commentsCursor_3++;
                }
            });
            var res_6 = [];
            dates.forEach(function (element) {
                var tmp = __WEBPACK_IMPORTED_MODULE_5_underscore__["uniq"](element.votes.reverse(), function (e) { return e.userId; });
                var tmp2 = __WEBPACK_IMPORTED_MODULE_5_underscore__["groupBy"](tmp, function (e) { return e.status; });
                var arrFlatten = [];
                __WEBPACK_IMPORTED_MODULE_5_underscore__["each"](tmp2, function (e, index) {
                    arrFlatten[index] = e;
                });
                res_6.push({
                    date: element.date,
                    format: 'month',
                    votes: arrFlatten,
                    comments: element.comments
                });
            });
            dates = res_6;
        }
        // Filling with empty arrays for ngFor
        var max;
        this.commentList = [];
        dates.forEach(function (element) {
            max = 0;
            for (var i = 0; i < 6; i++) {
                if (element.votes[i] == undefined) {
                    element.votes[i] = [];
                }
                if (element.votes[i].length > max) {
                    max = element.votes[i].length;
                }
            }
            element.votes[0] = max; // get the max vote count
            _this.commentList.push(false); // Comments are not shown
        });
        this.voteList = dates.reverse();
        var average = [];
        var abscisse = [];
        if (this.period != "global") {
            average = this.getAverageScoreByPeriod(this.voteList); //humeur moyenne sur chaque periode
            abscisse = [];
            abscisse = this.getDates(this.voteList);
            if (this.period == "day") {
                this.lineChartDataDay = [{
                        data: average,
                        label: 'Average Mood Level'
                    }];
                this.lineChartLabelsDay = abscisse;
            }
            else if (this.period == "week") {
                this.lineChartDataWeek = [{
                        data: average,
                        label: 'Average Mood Level'
                    }];
                this.lineChartLabelsWeek = abscisse;
            }
            else if (this.period == "month") {
                this.lineChartDataMonth = [{
                        data: average,
                        label: 'Average Mood Level'
                    }];
                this.lineChartLabelsMonth = abscisse;
            }
        }
        else {
            for (var i = 1; i < 6; i++) {
                average.push(this.getVotePercentage(this.voteList[0].votes, i)); //pourcentage de chaque humeur
            }
            this.pieChartData = average;
        }
    };
    ChartsComponent.prototype.getDates = function (voteList) {
        var date = new String();
        var dates = [];
        voteList.forEach(function (e) {
            date = __WEBPACK_IMPORTED_MODULE_6_moment__(e.date).format("DD/MM/YYYY");
            dates.push(date);
        });
        return dates;
    };
    ChartsComponent.prototype.getAverageScoreByPeriod = function (voteList) {
        var average = [];
        var temp = [];
        for (var i = 0; i < voteList.length - 1; i++) {
            temp = voteList.slice(i, i + 1);
            average.push(this.getAverageScore(temp));
        }
        average.push(this.getWorstAverageScore(voteList.slice(voteList.length - 1)));
        return average;
    };
    ChartsComponent.prototype.getSmiley = function (i) {
        var smiley;
        if (i == 1) {
            smiley = ":(";
        }
        else if (i == 2) {
            smiley = ":/";
        }
        else if (i == 3) {
            smiley = ":|";
        }
        else if (i == 4) {
            smiley = ":)";
        }
        else if (i == 5) {
            smiley = ":D";
        }
        return smiley;
    };
    ChartsComponent.prototype.getSmileyBgColor = function (i) {
        var color;
        if (i == 1) {
            color = "#8c3b5d";
        }
        else if (i == 2) {
            color = "#ff7b00";
        }
        else if (i == 3) {
            color = "#f1c500";
        }
        else if (i == 4) {
            color = "#5b90e5";
        }
        else if (i == 5) {
            color = "#1fbc99";
        }
        return color;
    };
    ChartsComponent.prototype.verifyChannel = function (channelId) {
        var _this = this;
        this.channelsService.getChannel(channelId).subscribe(function (data) {
            if (data == null) {
                _this.errorId();
            }
            else {
                _this.channelTitle = data.title;
            }
        }, function (error) {
            _this.errorId();
        });
    };
    // Bad channelId
    ChartsComponent.prototype.errorId = function () {
        console.log('Error with channelId');
        console.log('Redirecting...');
        this.router.navigate(['/404']); // Or redirect to index ['/']
    };
    ChartsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(661),
            styles: [__webpack_require__(639)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_votes_service__["a" /* VotesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_votes_service__["a" /* VotesService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_channels_service__["a" /* ChannelsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_channels_service__["a" /* ChannelsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_comments_service__["a" /* CommentsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_comments_service__["a" /* CommentsService */]) === 'function' && _e) || Object])
    ], ChartsComponent);
    return ChartsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/charts.component.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(662),
            styles: [__webpack_require__(640)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/footer.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetStartedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetStartedComponent = (function () {
    function GetStartedComponent() {
    }
    GetStartedComponent.prototype.ngOnInit = function () {
    };
    GetStartedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-get-started',
            template: __webpack_require__(663),
            styles: [__webpack_require__(641)]
        }), 
        __metadata('design:paramtypes', [])
    ], GetStartedComponent);
    return GetStartedComponent;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/get-started.component.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(664),
            styles: [__webpack_require__(642)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/page-not-found.component.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_channels_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_votes_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comments_service__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VoteComponent = (function () {
    function VoteComponent(route, router, votesService, channelsService, commentsService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.votesService = votesService;
        this.channelsService = channelsService;
        this.commentsService = commentsService;
        this.channelId = route.snapshot.params['id'];
        this.verifyChannel(this.channelId);
        this.mood = [];
        this.moodReset();
        this.message = '';
        this.submitted = true;
        new Fingerprint2().get(function (result) {
            _this.fingerprintId = result;
        });
    }
    VoteComponent.prototype.ngOnInit = function () {
    };
    VoteComponent.prototype.toggle = function (j) {
        this.moodReset();
        this.mood[j] = true;
        this.vote = j + 1;
    };
    VoteComponent.prototype.moodReset = function () {
        for (var i = 0; i < 5; i++) {
            this.mood[i] = false;
        }
    };
    VoteComponent.prototype.submitData = function () {
        if (this.vote != null) {
            this.addVote();
        }
        if (this.message != null) {
            this.addComment();
        }
        this.submitted = true;
    };
    VoteComponent.prototype.addVote = function () {
        var _this = this;
        var newVote = {
            channelId: this.channelId,
            userId: this.fingerprintId,
            time: new Date(),
            status: this.vote
        };
        this.moodReset();
        this.votesService.addVote(newVote).subscribe(function (data) {
            _this.submitted = false;
        });
    };
    VoteComponent.prototype.addComment = function () {
        var _this = this;
        if (this.message.length == 0) {
            return;
        }
        if (this.message.length > 500) {
            this.message = this.message.substring(0, 501);
        }
        var newComment = {
            channelId: this.channelId,
            userId: this.fingerprintId,
            time: new Date(),
            message: this.message
        };
        this.message = '';
        this.commentsService.addComment(newComment).subscribe(function (data) {
            _this.submitted = false;
        });
    };
    VoteComponent.prototype.getSmiley = function (i) {
        var smiley;
        if (i == 1) {
            smiley = ":(";
        }
        else if (i == 2) {
            smiley = ":/";
        }
        else if (i == 3) {
            smiley = ":|";
        }
        else if (i == 4) {
            smiley = ":)";
        }
        else if (i == 5) {
            smiley = ":D";
        }
        return smiley;
    };
    VoteComponent.prototype.verifyChannel = function (channelId) {
        var _this = this;
        this.channelsService.getChannel(channelId).subscribe(function (data) {
            if (data == null) {
                _this.errorId();
            }
            else {
                _this.channelTitle = data.title;
            }
        }, function (error) {
            _this.errorId();
        });
    };
    // Bad channelId
    VoteComponent.prototype.errorId = function () {
        console.log('Error with channelId');
        console.log('Redirecting...');
        this.router.navigate(['/404']); // Or redirect to index ['/']
    };
    VoteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vote',
            template: __webpack_require__(665),
            styles: [__webpack_require__(643)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_votes_service__["a" /* VotesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_votes_service__["a" /* VotesService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_channels_service__["a" /* ChannelsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_channels_service__["a" /* ChannelsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_comments_service__["a" /* CommentsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_comments_service__["a" /* CommentsService */]) === 'function' && _e) || Object])
    ], VoteComponent);
    return VoteComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/vote.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/environment.js.map

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "body {\r\n    background-color: #F1F1F1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "div {\r\n  text-align: center;\r\n}\r\n.wrapper{\r\n  min-height: 100vh;\r\n}\r\np {\r\n  margin-bottom: 0 !important;\r\n}\r\n.list-group {\r\n  padding-right: 0 !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".mood-1 {\r\n    background: #8c3b5d;\r\n}\r\n.mood-2 {\r\n    background: #ff7b00;\r\n}\r\n.mood-3 {\r\n    background: #f1c500;\r\n}\r\n.mood-4 {\r\n    background: #5b90e5;\r\n}\r\n.mood-5 {\r\n    background: #1fbc99;\r\n}\r\n.mood{\r\n    color: white;\r\n    text-align: center;\r\n    padding-top: 25px;\r\n    padding-bottom: 20px;\r\n    border-radius: 6px;\r\n}\r\n.list-group-item { \r\n    word-wrap: break-word; \r\n}\r\n.min{\r\n    opacity: 0.6;\r\n}\r\n\r\n.mood-card-1 {\r\n    border-color: #8c3b5d;\r\n}\r\n.mood-card-1 > .card-header {\r\n    color: white;\r\n    background: #8c3b5d;\r\n}\r\n\r\n.mood-card-2 {\r\n    border-color: #ff7b00;\r\n}\r\n.mood-card-2 > .card-header {\r\n    color: white;\r\n    background: #ff7b00;\r\n}\r\n\r\n.mood-card-3 {\r\n    border-color: #f1c500;\r\n}\r\n.mood-card-3 > .card-header {\r\n    color: white;\r\n    background: #f1c500;\r\n}\r\n\r\n.mood-card-4 {\r\n    border-color: #5b90e5;\r\n}\r\n.mood-card-4 > .card-header {\r\n    color: white;\r\n    background: #5b90e5;\r\n}\r\n\r\n.mood-card-5 {\r\n    border-color: #1fbc99;\r\n}\r\n.mood-card-5 > .card-header {\r\n    color: white;\r\n    background: #1fbc99;\r\n}\r\n.wrapper{\r\n  min-height: 100vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".footer {\r\n    background: #28292b;\r\n    color: rgba(255,255,255,.5);\r\n    text-align: left;\r\n}\r\n\r\na {\r\n    color: rgba(255,255,255,.5);\r\n    text-decoration: none;\r\n}\r\na:hover {\r\n    color: rgba(255,255,255, 1);\r\n    -webkit-transition: color .25s ease;\r\n    transition: color .25s ease;\r\n}\r\n.nomargin {\r\n    margin: 0 0 0 0;\r\n}\r\nul {\r\n  list-style-type: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".wrapper{\r\n  min-height: 100vh;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "div { \r\n\tmin-height: 100vh; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".mood-1 {\r\n    background: #8c3b5d;\r\n}\r\n.mood-2 {\r\n    background: #ff7b00;\r\n}\r\n.mood-3 {\r\n    background: #f1c500;\r\n}\r\n.mood-4 {\r\n    background: #5b90e5;\r\n}\r\n.mood-5 {\r\n    background: #1fbc99;\r\n}\r\n.jumbotron{\r\n    color: white;\r\n    text-align: center;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.jumbotron:hover{\r\n    transform: scale(1.1);\r\n    -moz-transform: scale(1.1);\r\n    -ms-transform: scale(1.1);\r\n    -webkit-transform: scale(1.1);\r\n    -o-transform: scale(1.1);\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    box-shadow: 0px 0px 50px #000000;\r\n}\r\n\r\n.jumbotron:active{\r\n     transform: scale(1.3);\r\n    -moz-transform: scale(1.3);\r\n    -ms-transform: scale(1.3);\r\n    -webkit-transform: scale(1.3);\r\n    -o-transform: scale(1.3);\r\n    -webkit-transition: all 0.2s;\r\n    transition: all 0.2s;\r\n}\r\n.resizeBar{\r\n    width: 100%; \r\n    height: 50px;\r\n}\r\n.activ{\r\n    transform: scale(1.1);\r\n    -moz-transform: scale(1.1);\r\n    -ms-transform: scale(1.1);\r\n    -webkit-transform: scale(1.1);\r\n    -o-transform: scale(1.1);\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    box-shadow: 0px 0px 50px #000000;\r\n}\r\n.progress-bar > h4{\r\n    margin-top:10px;\r\n}\r\n\r\ntextarea{\r\n    resize: none;\r\n}\r\n.nomargin {\r\n    margin: 0 0 0 0 !important;\r\n}\r\n.wrapper{\r\n  min-height: 100vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 322,
	"./af.js": 322,
	"./ar": 328,
	"./ar-dz": 323,
	"./ar-dz.js": 323,
	"./ar-ly": 324,
	"./ar-ly.js": 324,
	"./ar-ma": 325,
	"./ar-ma.js": 325,
	"./ar-sa": 326,
	"./ar-sa.js": 326,
	"./ar-tn": 327,
	"./ar-tn.js": 327,
	"./ar.js": 328,
	"./az": 329,
	"./az.js": 329,
	"./be": 330,
	"./be.js": 330,
	"./bg": 331,
	"./bg.js": 331,
	"./bn": 332,
	"./bn.js": 332,
	"./bo": 333,
	"./bo.js": 333,
	"./br": 334,
	"./br.js": 334,
	"./bs": 335,
	"./bs.js": 335,
	"./ca": 336,
	"./ca.js": 336,
	"./cs": 337,
	"./cs.js": 337,
	"./cv": 338,
	"./cv.js": 338,
	"./cy": 339,
	"./cy.js": 339,
	"./da": 340,
	"./da.js": 340,
	"./de": 342,
	"./de-at": 341,
	"./de-at.js": 341,
	"./de.js": 342,
	"./dv": 343,
	"./dv.js": 343,
	"./el": 344,
	"./el.js": 344,
	"./en-au": 345,
	"./en-au.js": 345,
	"./en-ca": 346,
	"./en-ca.js": 346,
	"./en-gb": 347,
	"./en-gb.js": 347,
	"./en-ie": 348,
	"./en-ie.js": 348,
	"./en-nz": 349,
	"./en-nz.js": 349,
	"./eo": 350,
	"./eo.js": 350,
	"./es": 352,
	"./es-do": 351,
	"./es-do.js": 351,
	"./es.js": 352,
	"./et": 353,
	"./et.js": 353,
	"./eu": 354,
	"./eu.js": 354,
	"./fa": 355,
	"./fa.js": 355,
	"./fi": 356,
	"./fi.js": 356,
	"./fo": 357,
	"./fo.js": 357,
	"./fr": 360,
	"./fr-ca": 358,
	"./fr-ca.js": 358,
	"./fr-ch": 359,
	"./fr-ch.js": 359,
	"./fr.js": 360,
	"./fy": 361,
	"./fy.js": 361,
	"./gd": 362,
	"./gd.js": 362,
	"./gl": 363,
	"./gl.js": 363,
	"./he": 364,
	"./he.js": 364,
	"./hi": 365,
	"./hi.js": 365,
	"./hr": 366,
	"./hr.js": 366,
	"./hu": 367,
	"./hu.js": 367,
	"./hy-am": 368,
	"./hy-am.js": 368,
	"./id": 369,
	"./id.js": 369,
	"./is": 370,
	"./is.js": 370,
	"./it": 371,
	"./it.js": 371,
	"./ja": 372,
	"./ja.js": 372,
	"./jv": 373,
	"./jv.js": 373,
	"./ka": 374,
	"./ka.js": 374,
	"./kk": 375,
	"./kk.js": 375,
	"./km": 376,
	"./km.js": 376,
	"./ko": 377,
	"./ko.js": 377,
	"./ky": 378,
	"./ky.js": 378,
	"./lb": 379,
	"./lb.js": 379,
	"./lo": 380,
	"./lo.js": 380,
	"./lt": 381,
	"./lt.js": 381,
	"./lv": 382,
	"./lv.js": 382,
	"./me": 383,
	"./me.js": 383,
	"./mi": 384,
	"./mi.js": 384,
	"./mk": 385,
	"./mk.js": 385,
	"./ml": 386,
	"./ml.js": 386,
	"./mr": 387,
	"./mr.js": 387,
	"./ms": 389,
	"./ms-my": 388,
	"./ms-my.js": 388,
	"./ms.js": 389,
	"./my": 390,
	"./my.js": 390,
	"./nb": 391,
	"./nb.js": 391,
	"./ne": 392,
	"./ne.js": 392,
	"./nl": 394,
	"./nl-be": 393,
	"./nl-be.js": 393,
	"./nl.js": 394,
	"./nn": 395,
	"./nn.js": 395,
	"./pa-in": 396,
	"./pa-in.js": 396,
	"./pl": 397,
	"./pl.js": 397,
	"./pt": 399,
	"./pt-br": 398,
	"./pt-br.js": 398,
	"./pt.js": 399,
	"./ro": 400,
	"./ro.js": 400,
	"./ru": 401,
	"./ru.js": 401,
	"./se": 402,
	"./se.js": 402,
	"./si": 403,
	"./si.js": 403,
	"./sk": 404,
	"./sk.js": 404,
	"./sl": 405,
	"./sl.js": 405,
	"./sq": 406,
	"./sq.js": 406,
	"./sr": 408,
	"./sr-cyrl": 407,
	"./sr-cyrl.js": 407,
	"./sr.js": 408,
	"./ss": 409,
	"./ss.js": 409,
	"./sv": 410,
	"./sv.js": 410,
	"./sw": 411,
	"./sw.js": 411,
	"./ta": 412,
	"./ta.js": 412,
	"./te": 413,
	"./te.js": 413,
	"./tet": 414,
	"./tet.js": 414,
	"./th": 415,
	"./th.js": 415,
	"./tl-ph": 416,
	"./tl-ph.js": 416,
	"./tlh": 417,
	"./tlh.js": 417,
	"./tr": 418,
	"./tr.js": 418,
	"./tzl": 419,
	"./tzl.js": 419,
	"./tzm": 421,
	"./tzm-latn": 420,
	"./tzm-latn.js": 420,
	"./tzm.js": 421,
	"./uk": 422,
	"./uk.js": 422,
	"./uz": 423,
	"./uz.js": 423,
	"./vi": 424,
	"./vi.js": 424,
	"./x-pseudo": 425,
	"./x-pseudo.js": 425,
	"./yo": 426,
	"./yo.js": 426,
	"./zh-cn": 427,
	"./zh-cn.js": 427,
	"./zh-hk": 428,
	"./zh-hk.js": 428,
	"./zh-tw": 429,
	"./zh-tw.js": 429
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 647;


/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container wrapper\">\r\n    <h1>ZZMood</h1>\r\n    <p class=\"text-muted\">A mood and ROTI measurement tool</p>\r\n    <br>\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"form-group col-md-6\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Group name here\" (keyup.enter)=\"checkChannel($event.target.value)\" autofocus>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div *ngIf=\"storedChannels.length > 0\" class=\"justify-content-center\">\r\n        <h5>Recent selections:</h5>\r\n        <br>\r\n        <div class=\"list-group col-md-6 offset-md-3\">\r\n            <div class=\"list-group-item list-group-item-action\" *ngFor=\"let item of storedChannels\" (click)=\"checkChannel(item.title)\">\r\n                <div class=\"d-flex w-100 justify-content-between\">\r\n                    <p>{{item.title}}</p>\r\n                    <small class=\"text-muted\">{{daysAgo(item.lastJoin)}}</small>\r\n                </div>\r\n            </div>\r\n            <div class=\"list-group-item list-group-item-action list-group-item-warning\" (click)=\"removeAll()\">\r\n                Clear\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n</div>"

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = "<div class=\"container wrapper\">\r\n    <br>\r\n    <div class=\"row\">\r\n        <h3>Analytics - <b>{{channelTitle}}</b></h3>\r\n    </div>\r\n    <div class=\"row\">\r\n        From {{timeStart | date:'longDate'}} to {{timeEnd | date:'longDate'}}\r\n    </div>\r\n    <hr>\r\n    <div class=\"row justify-content-md-center\" *ngIf=\"period != 'global'\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card mood-card-{{getAverageScore_Rounded(voteList)}}\">\r\n                <div class=\"card-header\">\r\n                    Average\r\n                </div>\r\n                <div class=\"card-block\" [ngSwitch]=\"getAverageScore_Rounded(voteList)\">\r\n                    <h4 class=\"card-title\">{{getSmiley(getAverageScore_Rounded(voteList))}} - {{getAverageScore(voteList)}}</h4>\r\n                    <p class=\"card-text\" *ngSwitchCase=\"1\">The mood is TERRIBLE!</p>\r\n                    <p class=\"card-text\" *ngSwitchCase=\"2\">It can be better.</p>\r\n                    <p class=\"card-text\" *ngSwitchCase=\"3\">It's fine.</p>\r\n                    <p class=\"card-text\" *ngSwitchCase=\"4\">Mood is good.</p>\r\n                    <p class=\"card-text\" *ngSwitchCase=\"5\">Everything is perfect!</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card mood-card-{{getBestAverageScore_Rounded(voteList)}}\">\r\n                <div class=\"card-header\">\r\n                    Best\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">{{getSmiley(getBestAverageScore_Rounded(voteList))}} - {{getBestAverageScore(voteList)}}</h4>\r\n                    <p class=\"card-text\">Most recent: {{getMostRecentMood(voteList, getBestAverageScore(voteList)) | date:'fullDate' }}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <div class=\"card mood-card-{{getWorstAverageScore_Rounded(voteList)}}\">\r\n                <div class=\"card-header\">\r\n                    Worst\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">{{getSmiley(getWorstAverageScore_Rounded(voteList))}} - {{getWorstAverageScore(voteList)}}</h4>\r\n                    <p class=\"card-text\">Most recent: {{getMostRecentMood(voteList, getWorstAverageScore(voteList)) | date:'fullDate' }}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row justify-content-md-center\">\r\n        <div class=\"col-md-5\" *ngIf=\"period == 'global'\">\r\n            <canvas baseChart [data]=\"pieChartData\" [colors]=\"pieChartColors\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\">\r\n            </canvas>\r\n        </div>\r\n        <div class=\"col-md-7\" *ngIf=\"period == 'day'\">\r\n            <canvas baseChart [datasets]=\"lineChartDataDay\" [colors]=\"lineChartColors\" [labels]=\"lineChartLabelsDay\" [options]=\"lineChartOptions\"\r\n                [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\">\r\n                </canvas>\r\n        </div>\r\n        <div class=\"col-md-7\" *ngIf=\"period == 'week'\">\r\n            <canvas baseChart [datasets]=\"lineChartDataWeek\" [colors]=\"lineChartColors\" [labels]=\"lineChartLabelsWeek\" [options]=\"lineChartOptions\"\r\n                [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\">\r\n                </canvas>\r\n        </div>\r\n        <div class=\"col-md-7\" *ngIf=\"period == 'month'\">\r\n            <canvas baseChart [datasets]=\"lineChartDataMonth\" [colors]=\"lineChartColors\" [labels]=\"lineChartLabelsMonth\" [options]=\"lineChartOptions\"\r\n                [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\">\r\n                </canvas>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    <div class=\"row form-inline\">\r\n        <label class=\"mr-sm-2\" for=\"inlineFormCustomSelect\">Period: </label>\r\n        <select id=\"inlineFormCustomSelect\" class=\"mb-2 mr-sm-2 mb-sm-0 custom-select form-control form-control-sm\" (change)=\"periodOnChange($event.target.value)\">\r\n                    <option value=\"global\">Global</option>\r\n                    <option value=\"day\">Day</option>\r\n                    <option value=\"week\">Week</option>\r\n                    <option value=\"month\">Month</option>\r\n        </select>\r\n        <button (click)=\"exportData()\" type=\"button\" class=\"btn btn-secondary btn-sm\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i> Export data (.csv)</button>\r\n    </div>\r\n    <br>\r\n    <div class=\"container\">\r\n        <div class=\"row\" *ngFor=\"let item of voteList; let i = index;\">\r\n            <div class=\"col-sm-10 offset-md-1\">\r\n                <div class=\"card mood-card-{{getAverageScore([item]) | number : '1.0-0'}}\">\r\n                    <div class=\"card-block\">\r\n                        <h4 class=\"card-title\">{{item.date | date:'fullDate'}}</h4>\r\n                        <h6 class=\"card-subtitle mb-2 text-muted\" *ngIf=\"period != 'global'\">{{period}} {{voteList.length-i}}</h6>\r\n                        <div class=\"card-text\">\r\n                            <p>Total votes: <b>{{getVoteCount(item.votes)}}</b>, Average: <b>{{getAverageScore([item])}}</b></p>\r\n                            <div class=\"row justify-content-md-center\">\r\n                                <div class=\"col-md-2\" *ngFor=\"let i of [1,2,3,4,5]\" [ngClass]=\"{ 'min' : (item.votes[0] == 0 || item.votes[i].length < item.votes[0]) }\">\r\n                                    <div class=\"mood mood-{{i}}\">\r\n                                        <h5 class=\"display-4\">{{getSmiley(i)}}</h5>\r\n                                        <br>\r\n                                        <p>\r\n                                            {{item.votes[i].length}} ({{getVotePercentage(item.votes, i)}}%)\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <a href=\"javascript:void(0)\" class=\"card-link\" *ngIf=\"item.comments.length > 0\" (click)=\"showComment(i)\">\r\n                        See comments ({{item.comments.length}})\r\n                    </a>\r\n                    </div>\r\n                    <ul class=\"list-group list-group-flush\" [style.display]=\"commentList[i] ? 'block'  : 'none'\">\r\n                        <li class=\"list-group-item\" *ngFor=\"let c of item.comments.reverse()\">\r\n                            {{c.message}}\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <br>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" role=\"contentinfo\">\r\n    <br>\r\n    <div class=\"row nomargin justify-content-center\">\r\n        <div class=\"col-md-3\">\r\n            ZZMood\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <ul>\r\n                <li>\r\n                    <a routerLink=\"/\" routerLinkActive=\"active\">\r\n                        <i class=\"fa fa-home\" aria-hidden=\"true\"></i> Homepage\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a routerLink=\"/get-started\" routerLinkActive=\"active\">\r\n                        <i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i> Get Started\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"https://github.com/yaminzn/mood\" target=\"_blank\">\r\n                        <i class=\"fa fa-github\" aria-hidden=\"true\"></i> GitHub Repo\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = "<div class=\"container wrapper\">\n    <br>\n    <h2>Get started</h2>\n    <br>\n    <h5>Homepage</h5>\n    Enter the group's name to access the vote page.<br>\n    Recent inputs are saved on the device.<br>\n    <hr>\n    <h5>Vote page</h5>\n    Votes and comments are two separate entities. One can be used regardless of the other.<br>\n    Votes are weighted from 1 to 5. If there's any mistake in your vote, revote and your last one will be considered.<br>\n    For the comments, press enter to submit it.<br>\n    <hr>\n    <h5>Chart page</h5>\n    The default period is \"global\". Other statistics such as \"average mood\" will show up in the other periods.<br>\n    Period's timeframe and comments are sorted by most recent.<br>\n</div>"

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br><h2>Error 404, page not found</h2></div>"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <br>\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-md-center\">\r\n            <h4>You are voting for: <b>{{channelTitle}}</b></h4>\r\n        </div>\r\n        <br>\r\n        <form (ngSubmit)=\"submitData()\">\r\n            <div class=\"row justify-content-md-center\">\r\n                <div class=\"col-md-2\" *ngFor=\"let i of [1,2,3,4,5]\" (click)=\"toggle(i-1)\">\r\n                    <div class=\"jumbotron mood-{{i}}\" [ngClass]=\"{ 'activ' : mood[i-1] }\">\r\n                        <h1 class=\"display-3\">{{getSmiley(i)}}</h1>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"feedback\">Feedback:</label>\r\n                        <textarea class=\"form-control\" id=\"feedback\" name=\"message\" rows=\"4\" [(ngModel)]=\"message\" maxlength=\"500\" placeholder=\"Send an anonymous message\"\r\n                            (keydown.enter)=\"$event.preventDefault()\" (keydown.enter)=\"submitData()\"></textarea>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n    </div>\r\n\r\n    <br>\r\n    <div class=\"container-fluid\" [hidden]=\"submitted\">\r\n        <div class=\"progress\">\r\n            <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-success resizeBar\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\"\r\n                aria-valuemax=\"100\">\r\n                <h4>Data submitted!</h4>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br>\r\n\r\n\r\n<div class=\"row justify-content-md-center nomargin\">\r\n    <div class=\"col-md-2\">\r\n        <a routerLink=\"/\" routerLinkActive=\"active\">\r\n            <button type=\"button\" class=\"btn btn-primary\">< Go back</button>\r\n        </a>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n        <a routerLink=\"/chart/{{channelId}}\" routerLinkActive=\"active\">\r\n            <button type=\"button\" class=\"btn btn-success\">See results ></button>\r\n        </a>\r\n    </div>\r\n</div>\r\n<br>\r\n</div>"

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(449);


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChannelsService = (function () {
    function ChannelsService(http) {
        this.http = http;
    }
    ChannelsService.prototype.getChannels = function () {
        return this.http.get('api/channels').map(function (res) { return res.json(); });
    };
    ChannelsService.prototype.getChannel = function (channelId) {
        return this.http.get('api/channel/' + channelId).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    ChannelsService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ChannelsService.prototype.addChannel = function (newChannel) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/channel', JSON.stringify(newChannel), { headers: headers }).map(function (res) { return res.json(); });
    };
    ChannelsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ChannelsService);
    return ChannelsService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Yami/Desktop/Projet 2e année/node/zzmood/src/channels.service.js.map

/***/ })

},[689]);
//# sourceMappingURL=main.bundle.js.map