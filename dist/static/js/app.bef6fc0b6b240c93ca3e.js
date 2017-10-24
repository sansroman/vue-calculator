webpackJsonp([0],{

/***/ "+ESr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"displayarea"}},[_vm._v("\n  "+_vm._s(_vm.displayExp)+"\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "0Qbt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0olQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_buttonItem_vue__ = __webpack_require__("TmJz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_b8a2338a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_buttonItem_vue__ = __webpack_require__("gsvN");
function injectStyle (ssrContext) {
  __webpack_require__("BtJ0")
}
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_buttonItem_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_b8a2338a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_buttonItem_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "1Pqw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"inputzone"}},[_c('buttonItem',{attrs:{"id":"numberBtn","message":this.numbers,"height":50,"width":70},on:{"btnKeyon":_vm.numberBtnKeyon}}),_vm._v(" "),_c('buttonItem',{attrs:{"id":"calBtn","message":this.cals,"height":50,"width":70},on:{"btnKeyon":_vm.calBtnKeyon}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "AWdl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_inputzone_vue__ = __webpack_require__("v6fE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_9a8a84e0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_inputzone_vue__ = __webpack_require__("1Pqw");
function injectStyle (ssrContext) {
  __webpack_require__("Lb5M")
}
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9a8a84e0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_inputzone_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_9a8a84e0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_inputzone_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "BtJ0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "DICR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_displayarea__ = __webpack_require__("yq5W");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_inputzone__ = __webpack_require__("AWdl");
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'app',
    components: {
        displayarea: __WEBPACK_IMPORTED_MODULE_0__components_displayarea__["a" /* default */],
        inputzone: __WEBPACK_IMPORTED_MODULE_1__components_inputzone__["a" /* default */]
    },
    methods: {
        updateView(exp) {
            this.exp = exp;
        }
    },
    data: function () {
        return {
            exp: ['0']
        };
    }
});

/***/ }),

/***/ "KCWa":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Lb5M":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("DICR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_c468a804_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("VwUs");
function injectStyle (ssrContext) {
  __webpack_require__("0Qbt")
}
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_c468a804_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("MVSX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "T3dK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'displayarea',
    props: {
        exp: {
            type: Array,
            required: true,
            default: function () {
                return ['0'];
            }
        }
    },
    data() {
        return {};
    },
    computed: {
        displayExp: function () {
            let str = "";

            this.exp.forEach(function (element) {
                str += element;
            }, this);
            return str;
        }
    }
});

/***/ }),

/***/ "TmJz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'buttonItem',
    props: {
        message: {
            type: Array,
            required: true
        },
        height: {
            type: Number,
            default: 40
        },
        width: {
            type: Number,
            default: 60
        },
        margin: {
            type: Number,
            default: 10
        }
    },
    methods: {
        keyon(message) {
            this.$emit('btnKeyon', message);
        }
    }
});

/***/ }),

/***/ "VwUs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('displayarea',{attrs:{"exp":_vm.exp}}),_vm._v(" "),_c('inputzone',{on:{"changed":_vm.updateView}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "gsvN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"buttonItem"},[_c('ul',_vm._l((_vm.message),function(item){return _c('li',[_c('button',{style:({height:_vm.height+'px',width:_vm.width+'px',margin:_vm.margin+'px'}),attrs:{"type":"button"},on:{"click":function($event){_vm.keyon(item)}}},[_vm._v(_vm._s(item))])])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "v6fE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttonItem_vue__ = __webpack_require__("0olQ");
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'inputzone',
    data() {
        return {
            numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '00'],
            cals: ['^', 'ESC', 'C', '-', '+', 'sin', '*', '%', 'cos', 'tan', 'log', '='],
            ops: [],
            vals: [],
            tmpval: '',
            exp: [],
            Zmark: false,
            Pmark: false,
            opsRank: []
        };
    },
    components: {
        buttonItem: __WEBPACK_IMPORTED_MODULE_0__buttonItem_vue__["a" /* default */]
    },
    created() {},
    methods: {
        numberBtnKeyon(message) {
            if (message === "." && this.Pmark) return;
            if ((message === "0" || message === "00") && !this.Zmark) return;
            if (message === "." && !this.Pmark) {
                this.Pmark = true;
                if (!this.Zmark) {
                    this.exp.push("0");
                }
            }
            this.exp.push(message);
            this.Zmark = true;
            this.expChanged();
        },
        calBtnKeyon(message) {
            let singleMark = this.isSingleOps(message);
            if (!this.Zmark && !singleMark) return;
            switch (message) {
                case "=":
                    this.cal();
                    break;
                case "ESC":
                    this.esc();
                    break;
                case "C":
                    this.init();
                    break;
                default:
                    this.exp.push(message);
                    this.Zmark = false;
                    break;

            }

            this.expChanged();
        },
        expChanged() {
            this.$emit('changed', this.exp);
        },
        init() {
            this.ops = [];
            this.vals = [];
            this.tmpval = "";
            this.exp = [];
            this.Pmark = false;
            this.Zmark = false;
        },
        esc() {
            this.exp.pop();
        },
        cal() {
            let singleMark = false;
            this.exp.forEach(function (element) {
                if (!isNaN(element)) {
                    this.tmpval += element;
                } else {
                    if (this.isSingleOps(element)) {
                        if (this.tmpval === "") {
                            singleMark = true;
                            this.cumPush(element);
                        } else {
                            singleMark = true;
                            this.vals.push(this.tmpval);
                            this.cumPush('*');
                            this.cumPush(element);
                            this.tmpval = "";
                        }
                    } else {
                        if (singleMark) {
                            let tmpOpt = this.ops.pop();
                            let tmpVal = this.tmpval;
                            this.tmpval = "";
                            this.singleOptArithmetic(tmpVal, tmpOpt);
                            this.vals.push(tmpVal);
                            this.cumPush(element);
                            singleMark = false;
                        } else {
                            this.vals.push(this.tmpval);
                            this.cumPush(element);
                            this.tmpval = "";
                        }
                    }
                }
            }, this);
            this.vals.push(this.tmpval);
            while (this.ops.length > 0) {
                let operational = this.ops.pop();
                let svals = this.vals.pop();
                let fvals = this.vals.pop();
                let result = this.fourArithmetic(fvals, svals, operational);
                console.log(result);
                this.vals.push(result);
            }
        },
        isSingleOps(ops) {
            if ('sincostanlog'.indexOf(ops) !== -1) return true;else return false;
        },
        cumPush(ops) {
            let tmprank = this.getOpsRank(ops);
            let max = this.opsRank[this.opsRank.length - 1] || 0;
            console.log("ops:" + ops + "tmp:" + tmprank + "max:" + max);
            if (tmprank >= max) {
                this.ops.push(ops);
                this.opsRank.push(tmprank);
                return;
            } else {
                let svals = this.vals.pop();
                let fvals = this.vals.pop();
                let operational = this.ops.pop();
                this.opsRank.pop();
                let result = this.fourArithmetic(fvals, svals, operational);
                this.vals.push(result);
                console.log("exp:" + fvals + operational + svals + "=" + result);
                this.cumPush(ops);
            }
        },
        getOpsRank(ops) {
            if (this.isSingleOps(ops)) return 0;
            if ('+-'.indexOf(ops) !== -1) return 1;else if ('*%'.indexOf(ops) !== -1) return 2;else return 3;
        },
        fourArithmetic(firstVal, secondVal, operational) {
            firstVal = Number(firstVal);
            secondVal = Number(secondVal);
            let result;
            switch (operational) {
                case '+':
                    result = firstVal + secondVal;
                    break;
                case '-':
                    result = firstVal - secondVal;
                    break;
                case '*':
                    result = firstVal * secondVal;

                    break;
                case '%':
                    result = firstVal / secondVal;

                    break;
                case '^':
                    result = Math.pow(firstVal, secondVal);
                    break;
            }
            return result;
        },
        singleOptArithmetic(val, operational) {
            switch (operational) {
                case "sin":
                    val = Math.sin(val);
                    break;
                case "cos":
                    val = Math.cos(val);
                    break;
                case "tan":
                    val = Math.tan(val);
                    break;
                case "log":
                    val = Math.log2(val);
                    break;

            }
        }
    }
});

/***/ }),

/***/ "yq5W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_displayarea_vue__ = __webpack_require__("T3dK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_77a38269_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_displayarea_vue__ = __webpack_require__("+ESr");
function injectStyle (ssrContext) {
  __webpack_require__("KCWa")
}
var normalizeComponent = __webpack_require__("46Yf")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77a38269"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_displayarea_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_77a38269_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_displayarea_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

},["NHnr"]);
//# sourceMappingURL=app.bef6fc0b6b240c93ca3e.js.map