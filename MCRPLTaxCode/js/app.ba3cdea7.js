(function(t) {
    function e(e) {
        for (var n, r, s = e[0], l = e[1], c = e[2], d = 0, u = []; d < s.length; d++) r = s[d], Object.prototype.hasOwnProperty.call(a, r) && a[r] && u.push(a[r][0]), a[r] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
        h && h(e);
        while (u.length) u.shift()();
        return o.push.apply(o, c || []), i()
    }

    function i() {
        for (var t, e = 0; e < o.length; e++) {
            for (var i = o[e], n = !0, r = 1; r < i.length; r++) {
                var l = i[r];
                0 !== a[l] && (n = !1)
            }
            n && (o.splice(e--, 1), t = s(s.s = i[0]))
        }
        return t
    }
    var n = {},
        a = {
            app: 0
        },
        o = [];

    function r(t) {
        return s.p + "js/" + ({} [t] || t) + "." + {
            "chunk-2d20ec02": "81d632f4",
            "chunk-2d216b67": "228f2009",
            "chunk-e86f1494": "f8dd20e2"
        } [t] + ".js"
    }

    function s(e) {
        if (n[e]) return n[e].exports;
        var i = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, s), i.l = !0, i.exports
    }
    s.e = function(t) {
        var e = [],
            i = a[t];
        if (0 !== i)
            if (i) e.push(i[2]);
            else {
                var n = new Promise((function(e, n) {
                    i = a[t] = [e, n]
                }));
                e.push(i[2] = n);
                var o, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = r(t);
                var c = new Error;
                o = function(e) {
                    l.onerror = l.onload = null, clearTimeout(d);
                    var i = a[t];
                    if (0 !== i) {
                        if (i) {
                            var n = e && ("load" === e.type ? "missing" : e.type),
                                o = e && e.target && e.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", c.name = "ChunkLoadError", c.type = n, c.request = o, i[1](c)
                        }
                        a[t] = void 0
                    }
                };
                var d = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = o, document.head.appendChild(l)
            } return Promise.all(e)
    }, s.m = t, s.c = n, s.d = function(t, e, i) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, s.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function(t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (s.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) s.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "dist/", s.oe = function(t) {
        throw console.error(t), t
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var d = 0; d < l.length; d++) e(l[d]);
    var h = c;
    o.push([0, "chunk-vendors"]), i()
})({
    0: function(t, e, i) {
        t.exports = i("56d7")
    },
    "031a": function(t, e, i) {
        "use strict";
        i("64c6")
    },
    "034f": function(t, e, i) {
        "use strict";
        i("85ec")
    },
    "04ef": function(t, e, i) {},
    "074d": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGieWxtBlbNEgDE8RUViUCnkwITHgYpMPY49CctH8au-Ze0BOLnXHGPktCYGmA8iaRDe49kFXBpkR04aBngaEhf4U_xm5s5dqCgJ67kyrAMz7UrpLolb3PdtMV7Nh-5nBsGxdnSv5U-2fytwCAs5s5izVd154FvT0afk8YccoQibY7GNXHkjrcRH5x4Q/s600/brain%20imparied%20pink.png"
    },
    "0799": function(t, e, i) {},
    "08be": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTtD6x1eYNVvsudH-mErxpPZS1BrHYt6Gqd2MVD2qGxGh8vZ42IA3CHf4DgCkC6P2pr72MYPUW7paiTjXedeVPMBfJgRFDSVjdjwXMGhuA3tsKw3ZDlncNM9k0-KYNYQ4IBVHmSNrHlGOXFY8X05F2AcDdWN0N1Rivvf7g7q0yyNVXwbLNW6Qs-Ku5tg/s600/Vitality%20Orange.png"
    },
    "08c9": function(t, e, i) {},
    "0930": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVNwe7rUVbc-5vlbk-WlyxB0do5LOOON5joMTnXwMZd9f7gcSq2D2B3v7Q3_RLKupzDjYzaTyvD5n2wR2tdInE_etDcQh-h6e4qTRs2r27GwCF1bFpx7JRV9gqvz2L5I6Kqv3yklZck9WiMcahTo71uCIDtHlDjs5dTF11DuWw8JjuEgfpJoXvqMBZZQ/s600/Logical%20Structure%20Diagram.png"
    },
    "0d2c": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN7L1iWESUY0YvOjVmDLgh5OdImBX8SVdjJMMbm_ryRzlV4lsrUewDVctMVf2gvtkbyGMM-LCmS8HYMiTgOVIiKZMc94YUEEybXFc-xBzWbSLrglfsgK5IpO8LiSVYZlbkwfUnVH8xu2GFA7xlZoXkx7PuZFgxmuoClFnNShiBv-f_6zNjwpgJLZwG4g/s600/Classic%20blue.png"
    },
    1588: function(t, e, i) {
        "use strict";
        i("08c9")
    },
    "181c": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgod1ZqD41MKfjUnpQODwVp6GEkHJELKX-UsWtpVatYcvMNySBu-mSa7iVVI9R4ADADJW3ghi4bG_we2reYMd4BWqc3BSv9YD-ZL2YiLSd6DWaOTSMFZMFDxn06zxhs55N2jI_lY1XAbiXYtQ1hDLuFu6X-D6YgJq0MmCzD5MpP5BbKqL51dUXzXmZ_RQ/s600/dark.png"
    },
    "1a34": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyZXZliC3ItTHJdndT98XATgzOWP7Sh4lT6MpUKyB8UIdgyilYfWY5A8jJKqo7KpzbrXDJaLAlzJc2egjADCUFY8GYxqCz9JJLJB-xEHta_ZddmlDoEsHp19G0gIvkjaHSrktC1-eymCk5pXMGOfFRN13zlxsUsS0Ph4D9heJT2mgKCpOXej31v5E5oQ/s600/earth%20yellow.png"
    },
    "1b87": function(t, e, i) {},
    "241d": function(t, e, i) {
        "use strict";
        i("60c3")
    },
    2851: function(t, e, i) {
        "use strict";
        i("e8a8")
    },
    2858: function(t, e, i) {},
    "2fb5": function(t, e, i) {
        "use strict";
        i("3378")
    },
    3278: function(t, e, i) {
        "use strict";
        i("e42f")
    },
    3378: function(t, e, i) {},
    "33b0": function(t, e, i) {
        "use strict";
        i("bb30")
    },
    3556: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjFyY938Ljfx93LlYlsNgkGqcK4gM_ZYYbYPDBZS4uA_jzP1UXTdtnbfXg5ccGEgiLdtUwTC-Wlp0-F0EIYCH9YhFuQTAvwIjxeufi28Jj_DyfimcPaL7eVH_MFHEgmDIQ_s-WzVpzLHtnZma3vGn3Gnt17gjW8OS1GA-p6axn0UVouKhPWXLf9sRTBnw/s600/Default.png"
    },
    3800: function(t, e, i) {},
    "3af4": function(t, e, i) {
        "use strict";
        i("fde0")
    },
    "40c6": function(t, e, i) {
        "use strict";
        i("2858")
    },
    "42c9": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8RmCyZwWxVjMbftW88swY0t7IvguqpgRsT-ELOvttVNv0w62XoCBStZ4PUj6JcFjmYFCFROceDSOvVcrhzEqpQnGPKvNMKWWtdhyxd1ygc5jWSSdPqCEpK05FYnrpSIijDyQPd2E7oqvYZ2giB8t0Qe1nDQsiODfPyTHcpWkZUQ0Ez4cJ5Pgxraje2w/s600/Dark%202.png"
    },
    "43f9": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgF73A8in4Nxn4R-qgB3v5fkkvb0RKZ4K0KTSAeRy-XXPMNV3L8_zj7fE_L5vwpvjUFoDy4QRaP6JlC6tln2rej0MGc1KcBAjoFRfG0SXETkSrP8DE3t9VtM13kb82QBhldxtPHBUTyjX70d0FdTGTTNiVKY_1ElR2--PNo7SShXSKKdulxXT47X02enQ/s600/Classic%20green.png"
    },
    "46fd": function(t, e, i) {
        "use strict";
        i("dd40")
    },
    4934: function(t, e, i) {
        "use strict";
        i("8973")
    },
    "52db": function(t, e, i) {
        "use strict";
        i("89ba")
    },
    "550f": function(t, e, i) {},
    "56d7": function(t, e, i) {
        "use strict";
        i.r(e);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        for (var n = i("2b0e"), a = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "app"
                    }
                }, [i("router-view")], 1)
            }, o = [], r = {
                name: "App",
                components: {}
            }, s = r, l = (i("034f"), i("2877")), c = Object(l["a"])(s, a, o, !1, null, null, null), d = c.exports, h = i("8c4f"), u = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "container"
                }, [t.show ? [i("Toolbar"), i("Edit")] : t._e()], 2)
            }, p = [], f = i("5530"), m = i("1da1"), v = (i("96cf"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "toolbarContainer"
                }, [i("div", {
                    staticClass: "toolbar"
                }, [i("div", {
                    staticClass: "toolbarBlock"
                }, [i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.readonly || t.backEnd
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("execCommand", "BACK")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconhoutui-shi"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Undo")])]), i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.readonly || t.forwardEnd
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("execCommand", "FORWARD")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconqianjin1"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Redo")])]), i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.activeNodes.length <= 0 || t.hasRoot || t.hasGeneralization
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("execCommand", "INSERT_NODE")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconjiedian"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Insert sibling node")])]), i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.activeNodes.length <= 0 || t.hasGeneralization
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("execCommand", "INSERT_CHILD_NODE")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont icontianjiazijiedian"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Insert child node")])]), i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.activeNodes.length <= 0
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("execCommand", "REMOVE_NODE")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconshanchu"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Delete node")])]), i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.activeNodes.length <= 0
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showNodeImage")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconimage"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Image")])]), i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.activeNodes.length <= 0
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showNodeIcon")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconxiaolian"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Icon")])]), i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.activeNodes.length <= 0
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showNodeLink")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconchaolianjie"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Hyperlink")])]), i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.activeNodes.length <= 0
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showNodeNote")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconflow-Mark"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Remark")])]), i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.activeNodes.length <= 0
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showNodeTag")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconbiaoqian"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Label")])]), i("div", {
                    staticClass: "toolbarBtn",
                    class: {
                        disabled: t.activeNodes.length <= 0 || t.hasRoot
                    },
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("execCommand", "ADD_GENERALIZATION")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont icongaikuozonglan"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Summary")])])]), i("div", {
                    staticClass: "toolbarBlock"
                }, [i("div", {
                    staticClass: "toolbarBtn",
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showOutline")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconfuhao-dagangshu"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Show outline")])]), i("div", {
                    staticClass: "toolbarBtn",
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showBaseStyle")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconyangshi"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Basic style")])]), i("div", {
                    staticClass: "toolbarBtn",
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showTheme")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconjingzi"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Theme")])]), i("div", {
                    staticClass: "toolbarBtn",
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showStructure")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconjiegou"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Structure")])])]), i("div", {
                    staticClass: "toolbarBlock"
                }, [i("div", {
                    staticClass: "toolbarBtn",
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showImport")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont icondaoru"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Import")])]), i("div", {
                    staticClass: "toolbarBtn",
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showExport")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont icondaochu"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Export")])]), i("div", {
                    staticClass: "toolbarBtn",
                    on: {
                        click: function(e) {
                            return t.$bus.$emit("showShortcutKey")
                        }
                    }
                }, [i("span", {
                    staticClass: "icon iconfont iconjianpan"
                }), i("span", {
                    staticClass: "text"
                }, [t._v("Hot keys")])])])]), i("NodeImage"), i("NodeHyperlink"), i("NodeIcon"), i("NodeNote"), i("NodeTag"), i("Export"), i("Import")], 1)
            }), g = [], b = (i("7db0"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("el-dialog", {
                    staticClass: "nodeDialog",
                    attrs: {
                        title: "Image",
                        visible: t.dialogVisible,
                        width: "500"
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, [i("ImgUpload", {
                    ref: "ImgUpload",
                    model: {
                        value: t.img,
                        callback: function(e) {
                            t.img = e
                        },
                        expression: "img"
                    }
                }), i("div", {
                    staticClass: "imgTitleBox"
                }, [i("span", {
                    staticClass: "title"
                }, [t._v("Image Title")]), i("el-input", {
                    attrs: {
                        size: "mini"
                    },
                    model: {
                        value: t.imgTitle,
                        callback: function(e) {
                            t.imgTitle = e
                        },
                        expression: "imgTitle"
                    }
                })], 1), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    on: {
                        click: t.cancel
                    }
                }, [t._v("Cancel")]), i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.confirm
                    }
                }, [t._v("Okay")])], 1)], 1)
            }), C = [], y = (i("159b"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "imgUploadContainer"
                }, [i("div", {
                    staticClass: "imgUploadPanel"
                }, [t.value ? t._e() : i("div", {
                    staticClass: "upBtn"
                }, [i("label", {
                    staticClass: "imgUploadInputArea",
                    attrs: {
                        for: "imgUploadInput"
                    },
                    on: {
                        dragenter: function(t) {
                            t.stopPropagation(), t.preventDefault()
                        },
                        dragover: function(t) {
                            t.stopPropagation(), t.preventDefault()
                        },
                        drop: function(e) {
                            return e.stopPropagation(), e.preventDefault(), t.onDrop.apply(null, arguments)
                        }
                    }
                }, [t._v("Click here to select Image, or drag Image here")]), i("input", {
                    attrs: {
                        type: "file",
                        accept: "image/*",
                        id: "imgUploadInput"
                    },
                    on: {
                        change: t.onImgUploadInputChange
                    }
                })]), t.value ? i("div", {
                    staticClass: "uploadInfoBox"
                }, [i("div", {
                    staticClass: "previewBox",
                    style: {
                        backgroundImage: "url('" + t.value + "')"
                    }
                }), i("span", {
                    staticClass: "delBtn el-icon-close",
                    on: {
                        click: t.deleteImg
                    }
                })]) : t._e()])])
            }), x = [], w = (i("d3b7"), {
                name: "ImgUpload",
                model: {
                    prop: "value",
                    event: "change"
                },
                props: {
                    value: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        file: null
                    }
                },
                methods: {
                    onImgUploadInputChange: function(t) {
                        var e = t.target.files[0];
                        this.selectImg(e)
                    },
                    onDrop: function(t) {
                        var e = t.dataTransfer,
                            i = e.files && e.files[0];
                        this.selectImg(i)
                    },
                    selectImg: function(t) {
                        var e = this;
                        this.file = t;
                        var i = new FileReader;
                        i.readAsDataURL(t), i.onload = function(t) {
                            e.$emit("change", t.target.result)
                        }
                    },
                    getSize: function() {
                        var t = this;
                        return new Promise((function(e, i) {
                            var n = new Image;
                            n.src = t.value, n.onload = function() {
                                e({
                                    width: n.width,
                                    height: n.height
                                })
                            }, n.onerror = function(t) {
                                e({
                                    width: 0,
                                    height: 0
                                })
                            }
                        }))
                    },
                    deleteImg: function() {
                        this.$emit("change", ""), this.file = null
                    }
                }
            }), M = w, k = (i("2fb5"), Object(l["a"])(M, y, x, !1, null, "47e404d2", null)), N = k.exports, _ = {
                name: "NodeImage",
                components: {
                    ImgUpload: N
                },
                data: function() {
                    return {
                        dialogVisible: !1,
                        img: "",
                        imgTitle: "",
                        activeNodes: null
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("node_active", (function() {
                        if (t.activeNodes = arguments.length <= 1 ? void 0 : arguments[1], t.activeNodes.length > 0) {
                            var e = t.activeNodes[0];
                            t.img = e.getData("image"), t.imgTitle = e.getData("imageTitle")
                        } else t.img = "", t.imgTitle = ""
                    })), this.$bus.$on("showNodeImage", (function() {
                        t.dialogVisible = !0
                    }))
                },
                methods: {
                    cancel: function() {
                        this.dialogVisible = !1
                    },
                    confirm: function() {
                        var t = this;
                        return Object(m["a"])(regeneratorRuntime.mark((function e() {
                            var i, n, a;
                            return regeneratorRuntime.wrap((function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t.$refs.ImgUpload.getSize();
                                    case 3:
                                        i = e.sent, n = i.width, a = i.height, t.activeNodes.forEach((function(e) {
                                            e.setImage({
                                                url: t.img || "none",
                                                title: t.imgTitle,
                                                width: n,
                                                height: a
                                            })
                                        })), t.cancel(), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e["catch"](0), console.log(e.t0);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        })))()
                    }
                }
            }, z = _, D = (i("3af4"), Object(l["a"])(z, b, C, !1, null, "2a345810", null)), E = D.exports, F = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("el-dialog", {
                    staticClass: "nodeDialog",
                    attrs: {
                        title: "Hyperlink",
                        visible: t.dialogVisible,
                        width: "500"
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, [i("div", {
                    staticClass: "item"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Link")]), i("el-input", {
                    attrs: {
                        size: "mini",
                        placeholder: "For example: https://molecularconnections.com/"
                    },
                    model: {
                        value: t.link,
                        callback: function(e) {
                            t.link = e
                        },
                        expression: "link"
                    }
                })], 1), i("div", {
                    staticClass: "item"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Name")]), i("el-input", {
                    attrs: {
                        size: "mini"
                    },
                    model: {
                        value: t.linkTitle,
                        callback: function(e) {
                            t.linkTitle = e
                        },
                        expression: "linkTitle"
                    }
                })], 1), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    on: {
                        click: t.cancel
                    }
                }, [t._v("Cancel")]), i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.confirm
                    }
                }, [t._v("Okay")])], 1)])
            }, S = [], T = (i("9911"), {
                name: "NodeHyperlink",
                data: function() {
                    return {
                        dialogVisible: !1,
                        link: "",
                        linkTitle: "",
                        activeNodes: []
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("node_active", (function() {
                        if (t.activeNodes = arguments.length <= 1 ? void 0 : arguments[1], t.activeNodes.length > 0) {
                            var e = t.activeNodes[0];
                            t.link = e.getData("hyperlink"), t.linkTitle = e.getData("hyperlinkTitle")
                        } else t.link = "", t.linkTitle = ""
                    })), this.$bus.$on("showNodeLink", (function() {
                        t.activeNodes[0].mindMap.keyCommand.pause(), t.$bus.$emit("startTextEdit"), t.dialogVisible = !0
                    }))
                },
                methods: {
                    cancel: function() {
                        this.dialogVisible = !1, this.activeNodes[0].mindMap.keyCommand.recovery(), this.$bus.$emit("endTextEdit")
                    },
                    confirm: function() {
                        var t = this;
                        this.activeNodes.forEach((function(e) {
                            e.setHyperlink(t.link, t.linkTitle), t.cancel()
                        }))
                    }
                }
            }), L = T, A = (i("dbac"), Object(l["a"])(L, F, S, !1, null, "3d2f411d", null)), B = A.exports, O = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("el-dialog", {
                    staticClass: "nodeDialog",
                    attrs: {
                        title: "Icon",
                        visible: t.dialogVisible,
                        width: "500"
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, t._l(t.nodeIconList, (function(e) {
                    return i("div", {
                        key: e.name,
                        staticClass: "item"
                    }, [i("div", {
                        staticClass: "title"
                    }, [t._v(t._s(e.name))]), i("div", {
                        staticClass: "list"
                    }, t._l(e.list, (function(n) {
                        return i("div", {
                            key: n.name,
                            staticClass: "icon",
                            class: {
                                selected: t.iconList.includes(e.type + "_" + n.name)
                            },
                            domProps: {
                                innerHTML: t._s(n.icon)
                            },
                            on: {
                                click: function(i) {
                                    return t.setIcon(e.type, n.name)
                                }
                            }
                        })
                    })), 0)])
                })), 0)
            }, I = [], R = i("2909"), $ = (i("c740"), i("a434"), i("ac1f"), i("1276"), i("fd89"), i("187a"), i("ddb9"), i("1bb7"), '<svg t="1624174958075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7982" ><path d="M435.484444 251.733333v68.892445L295.822222 320.682667a168.504889 168.504889 0 0 0-2.844444 336.952889h142.506666v68.892444H295.822222a237.397333 237.397333 0 0 1 0-474.794667h139.662222z m248.945778 0a237.397333 237.397333 0 0 1 0 474.851556H544.654222v-69.006222l139.776 0.056889a168.504889 168.504889 0 0 0 2.844445-336.952889H544.597333V251.676444h139.776z m-25.827555 203.946667a34.474667 34.474667 0 0 1 0 68.892444H321.649778a34.474667 34.474667 0 0 1 0-68.892444h336.952889z" p-id="7983"></path></svg>'), j = '<svg t="1624195132675" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8792" ><path d="M152.768 985.984 152.768 49.856l434.56 0 66.816 0 234.048 267.392 0 66.816 0 601.92L152.768 985.984 152.768 985.984zM654.144 193.088l0 124.16 108.736 0L654.144 193.088 654.144 193.088zM821.312 384.064l-167.168 0L587.328 384.064 587.328 317.312 587.328 116.736 219.584 116.736 219.584 919.04l601.728 0L821.312 384.064 821.312 384.064zM386.688 517.888 319.808 517.888 319.808 450.944l66.816 0L386.624 517.888 386.688 517.888zM386.688 651.584 319.808 651.584 319.808 584.704l66.816 0L386.624 651.584 386.688 651.584zM386.688 785.344 319.808 785.344l0-66.88 66.816 0L386.624 785.344 386.688 785.344zM721.024 517.888 453.632 517.888 453.632 450.944l267.392 0L721.024 517.888 721.024 517.888zM654.144 651.584 453.632 651.584 453.632 584.704l200.512 0L654.144 651.584 654.144 651.584zM620.672 785.344l-167.04 0 0-66.88 167.04 0L620.672 785.344 620.672 785.344z" p-id="8793"></path></svg>', W = [{
                name: "Priority Icons",
                type: "priority",
                list: [{
                    name: "1",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z" fill="#E93B30"></path><path d="M580.309333 256h-75.52c-10.666667 29.824-30.165333 55.765333-58.709333 78.165333-28.416 22.314667-54.869333 37.418667-79.146667 45.397334v84.608a320 320 0 0 0 120.234667-70.698667v352.085333H580.266667V256z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "2",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M511.957333 1024C229.248 1024 0 794.752 0 512S229.248 0 511.957333 0C794.752 0 1024 229.248 1024 512s-229.248 512-512.042667 512z" fill="#FA8D2E"></path><path d="M667.946667 658.602667h-185.301334c4.864-8.533333 11.178667-17.066667 19.072-25.984 7.808-8.874667 26.453333-26.837333 55.936-53.888 29.525333-27.008 49.877333-47.786667 61.226667-62.165334 16.981333-21.717333 29.44-42.453333 37.290667-62.293333 7.808-19.84 11.776-40.746667 11.776-62.677333 0-38.570667-13.738667-70.741333-41.088-96.725334C599.466667 268.928 561.706667 256 513.834667 256c-43.690667 0-80.128 11.136-109.354667 33.578667-29.098667 22.4-46.506667 59.306667-52.010667 110.805333l93.184 9.301333c1.792-27.349333 8.405333-46.890667 19.754667-58.624 11.434667-11.776 26.837333-17.664 46.165333-17.664 19.541333 0 34.858667 5.589333 45.909334 16.768 11.136 11.264 16.682667 27.221333 16.682666 48.042667 0 18.858667-6.4 37.930667-19.242666 57.258667-9.472 14.037333-35.157333 40.533333-77.098667 79.872-52.096 48.554667-87.04 87.509333-104.704 116.821333A226.688 226.688 0 0 0 341.333333 745.429333h326.613334v-86.826666z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "3",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#2E66FA"></path><path d="M627.754667 731.733333c-29.354667 25.088-66.901333 37.632-112.725334 37.632-44.928 0-81.792-11.52-110.592-34.773333-33.066667-26.538667-49.877333-64.469333-50.304-114.133333h92.16c0.426667 21.76 7.552 38.314667 21.333334 49.664 12.288 10.88 28.117333 16.341333 47.402666 16.341333 20.309333 0 36.778667-6.101333 49.322667-18.432 12.544-12.330667 18.773333-29.568 18.773333-51.797333 0-21.290667-6.229333-38.186667-18.773333-50.773334-12.544-12.501333-29.866667-18.773333-52.138667-18.773333h-13.525333v-80.042667H512c42.112 0 63.274667-21.034667 63.274667-63.146666 0-20.309333-5.888-36.096-17.706667-47.445334a60.757333 60.757333 0 0 0-43.818667-17.066666c-17.493333 0-32 5.504-43.434666 16.298666-11.562667 10.88-17.792 25.728-18.773334 44.714667H359.68c0.981333-43.946667 16.042667-78.976 45.397333-104.96 29.354667-25.941333 65.706667-39.04 109.226667-39.04 44.928 0 81.792 13.525333 110.592 40.490667 28.8 26.922667 43.306667 61.610667 43.306667 104.149333 0 48.213333-19.413333 82.688-58.154667 103.552 43.52 23.125333 65.28 61.44 65.28 114.858667 0 48.128-15.957333 85.76-47.573333 112.682666z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "4",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M600.96 256v309.802667h60.117333v81.536h-60.16v98.218666h-90.154666v-98.218666H311.466667v-81.237334L522.666667 256h78.293333zM510.72 399.104l-112.042667 166.698667h112.042667V399.104z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "5",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 512.042667 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M470.912 343.552h175.786667V256H400.256l-47.786667 253.952 75.434667 10.837333c21.205333-23.552 45.269333-35.413333 72.021333-35.413333 21.546667 0 38.997333 7.509333 52.437334 22.4 13.312 15.018667 20.053333 37.418667 20.053333 67.328 0 31.872-6.741333 55.765333-20.181333 71.552-13.397333 15.872-29.866667 23.765333-49.237334 23.765333-17.066667 0-32.085333-6.186667-45.013333-18.432-13.013333-12.373333-20.821333-29.013333-23.466667-50.133333L341.333333 611.498667c5.546667 40.874667 22.485333 73.429333 50.730667 97.621333 28.330667 24.32 64.938667 36.437333 109.866667 36.437333 56.149333 0 100.053333-21.546667 131.754666-64.554666a176.64 176.64 0 0 0 34.816-107.52c0-48.042667-14.378667-87.210667-43.221333-117.333334-28.8-30.208-63.957333-45.312-105.514667-45.312-21.674667 0-42.922667 5.248-63.829333 15.616l14.976-82.901333z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "6",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.205333 229.248 0 512 0c282.88 0 512 229.205333 512 512.042667C1024 794.794667 794.88 1024 512 1024z" fill="#6D768D"></path><path d="M519.210667 256c36.992 0 67.626667 10.368 91.776 31.189333 24.192 20.821333 39.68 51.029333 46.293333 90.709334l-90.197333 9.984c-2.176-18.56-7.978667-32.298667-17.28-41.173334-9.258667-8.874667-21.418667-13.226667-36.224-13.226666-19.754667 0-36.437333 8.789333-50.048 26.453333-13.696 17.664-22.314667 54.613333-25.856 110.549333 23.296-27.52 52.138667-41.258667 86.656-41.258666 38.997333 0 72.362667 14.805333 100.181333 44.544 27.733333 29.696 41.685333 68.010667 41.685333 114.858666 0 49.877333-14.634667 89.856-43.818666 119.936-29.226667 30.208-66.730667 45.226667-112.554667 45.226667-49.066667 0-89.429333-19.072-121.130667-57.344C357.12 658.218667 341.333333 595.541333 341.333333 508.416c0-89.344 16.469333-153.813333 49.493334-193.194667C423.722667 275.754667 466.56 256 519.168 256z m-9.472 241.834667c-17.962667 0-33.066667 6.997333-45.525334 21.12-12.330667 14.037333-18.56 34.858667-18.56 62.293333 0 30.421333 6.912 53.76 20.906667 70.4 13.952 16.469333 29.866667 24.746667 47.786667 24.746667 17.28 0 31.701333-6.826667 43.178666-20.309334 11.52-13.525333 17.237333-35.669333 17.237334-66.56 0-31.658667-6.186667-54.869333-18.517334-69.546666a58.197333 58.197333 0 0 0-46.506666-22.144z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "7",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.752 0 512S229.248 0 512.042667 0C794.752 0 1024 229.248 1024 512s-229.248 512-511.957333 512z" fill="#6D768D"></path><path d="M673.024 273.066667H354.133333v86.869333h212.224a691.2 691.2 0 0 0-104.746666 187.989333c-26.026667 70.101333-39.978667 138.88-41.429334 206.293334h89.6c-0.298667-42.922667 6.698667-91.776 21.034667-146.474667a654.72 654.72 0 0 1 62.08-154.965333c27.136-48.554667 53.888-85.76 80.128-111.701334V273.066667z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "8",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z" fill="#6D768D"></path><path d="M512.426667 256c46.208 0 82.048 11.861333 107.605333 35.541333 25.6 23.68 38.314667 53.674667 38.314667 89.898667 0 22.613333-5.802667 42.666667-17.578667 60.330667a111.445333 111.445333 0 0 1-49.450667 40.277333c26.965333 10.837333 47.36 26.752 61.312 47.658667 13.994667 20.906667 21.034667 45.013333 21.034667 72.362666 0 45.098667-14.336 81.834667-42.965333 109.952-28.586667 28.245333-66.602667 42.368-114.090667 42.368-44.245333 0-81.066667-11.648-110.464-34.986666-34.645333-27.52-52.010667-65.28-52.010667-113.365334 0-26.368 6.528-50.645333 19.626667-72.746666 13.056-22.144 33.578667-39.210667 61.696-51.242667-24.064-10.154667-41.557333-24.192-52.48-41.941333a109.824 109.824 0 0 1-16.512-58.666667c0-36.224 12.757333-66.218667 37.973333-89.898667 25.386667-23.68 61.354667-35.541333 108.032-35.541333z m1.28 265.429333c-22.784 0-39.722667 7.978667-50.901334 23.893334-11.136 15.786667-16.64 33.066667-16.64 51.498666 0 25.984 6.485333 46.208 19.712 60.714667 13.098667 14.506667 29.525333 21.802667 49.152 21.802667 19.242667 0 35.157333-6.997333 47.786667-20.992 12.629333-13.909333 18.858667-34.048 18.858667-60.416 0-23.082667-6.314667-41.557333-19.2-55.466667a63.274667 63.274667 0 0 0-48.725334-21.034667z m-0.341334-191.488c-17.792 0-32 5.333333-42.581333 16-10.538667 10.666667-15.872 24.746667-15.872 42.325334 0 18.645333 5.248 33.152 15.701333 43.648 10.453333 10.453333 24.362667 15.658667 41.770667 15.658666 17.664 0 31.658667-5.290667 42.24-15.872 10.538667-10.581333 15.872-25.173333 15.872-43.818666 0-17.493333-5.248-31.573333-15.701333-42.154667s-24.277333-15.786667-41.429334-15.786667z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "9",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 1024C229.248 1024 0 794.794667 0 512.042667 0 229.333333 229.248 0 512 0c282.88 0 512 229.333333 512 512.042667C1024 794.794667 794.88 1024 512 1024z" fill="#6D768D"></path><path d="M497.28 256c49.365333 0 89.856 19.157333 121.429333 57.429333 31.701333 38.229333 47.488 101.205333 47.488 188.842667 0 89.173333-16.384 153.386667-49.365333 192.853333-32.853333 39.594667-75.605333 59.264-128.426667 59.264-37.888 0-68.608-10.154667-91.989333-30.506666s-38.4-50.816-45.013333-91.306667l90.112-9.984c2.261333 18.474667 8.021333 32.085333 17.28 41.088 9.173333 8.874667 21.418667 13.312 36.608 13.312 19.2 0 35.541333-8.874667 48.981333-26.752 13.44-17.749333 22.016-54.613333 25.770667-110.549333-23.466667 27.264-52.821333 40.874667-88.064 40.874666-38.314667 0-71.253333-14.72-99.114667-44.330666C355.242667 506.709333 341.333333 468.224 341.333333 420.864c0-49.493333 14.592-89.258667 43.946667-119.466667C414.549333 271.104 451.925333 256 497.237333 256z m-4.352 77.482667c-17.237333 0-31.658667 6.826667-43.008 20.437333-11.477333 13.653333-17.194667 35.84-17.194667 66.816 0 31.402667 6.229333 54.485333 18.645334 69.205333 12.458667 14.72 27.946667 22.101333 46.592 22.101334 18.005333 0 33.066667-7.082667 45.44-21.205334 12.330667-14.208 18.432-35.029333 18.432-62.506666 0-29.994667-6.912-53.376-20.821334-69.973334-13.824-16.597333-29.866667-24.874667-48.085333-24.874666z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "10",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512.042667 1024C229.248 1024 0 794.794667 0 511.957333 0 229.205333 229.248 0 512.042667 0 794.752 0 1024 229.205333 1024 511.957333 1024 794.794667 794.752 1024 512.042667 1024z" fill="#6D768D"></path><path d="M619.946667 273.066667c46.976 0 83.754667 16.042667 110.250666 48.042666 31.573333 37.973333 47.36 100.864 47.36 188.672 0 87.722667-15.829333 150.698667-47.658666 189.056-26.325333 31.616-62.976 47.36-109.952 47.36-47.274667 0-85.418667-17.237333-114.346667-51.968-28.885333-34.602667-43.392-96.426667-43.392-185.386666 0-87.168 15.872-150.016 47.701333-188.416 26.282667-31.488 62.933333-47.36 110.037334-47.36z m-207.488 12.8v452.266666H325.504V411.690667A299.904 299.904 0 0 1 213.333333 476.373333V398.933333c22.656-7.296 47.36-21.12 73.856-41.514666 26.624-20.522667 44.842667-44.288 54.784-71.552h70.485334z m207.488 60.842666c-11.306667 0-21.461333 3.413333-30.336 10.24-8.874667 6.826667-15.786667 19.157333-20.693334 36.864-6.4 22.997333-9.642667 61.653333-9.642666 115.968 0 54.442667 2.944 91.733333 8.661333 112.128 5.802667 20.352 13.098667 33.877333 21.845333 40.618667 8.789333 6.741333 18.858667 10.154667 30.165334 10.154667 11.349333 0 21.376-3.498667 30.250666-10.325334 8.874667-6.826667 15.786667-19.157333 20.693334-36.778666 6.4-22.826667 9.642667-61.354667 9.642666-115.797334 0-54.314667-2.858667-91.648-8.661333-112.042666-5.802667-20.352-13.013333-33.962667-21.76-40.789334a47.616 47.616 0 0 0-30.165333-10.24z" fill="#FFFFFF"></path></svg>'
                }]
            }, {
                name: "Schedule/progress Icon",
                type: "progress",
                list: [{
                    name: "1",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144-294.144A414.72 414.72 0 0 1 928 512c0 229.76-186.24 416-416 416z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "2",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512h416c0 229.76-186.24 416-416 416z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "3",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96V512l294.144 294.144A414.72 414.72 0 0 1 512 928z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "4",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 928c-229.76 0-416-186.24-416-416S282.24 96 512 96v832z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "5",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512l-294.144 294.144A414.72 414.72 0 0 1 96 512c0-229.76 186.24-416 416-416V512z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "6",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512H96c0-229.76 186.24-416 416-416V512z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "7",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z" fill="#12BB37"></path><path d="M512 512L217.856 217.856A414.72 414.72 0 0 1 512 96V512z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "8",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z" fill="#12BB37"></path><path d="M716.629333 341.333333h-51.328a35.072 35.072 0 0 0-28.330666 14.293334l-171.989334 233.984-77.909333-106.026667a35.2 35.2 0 0 0-28.330667-14.293333H307.413333c-7.082667 0-11.264 7.936-7.082666 13.653333l136.32 185.472a35.2 35.2 0 0 0 56.533333 0l230.4-313.429333a8.533333 8.533333 0 0 0-6.954667-13.653334z" fill="#FFFFFF"></path></svg>'
                }]
            }, {
                name: "Expression Icon",
                type: "expression",
                list: [{
                    name: "1",
                    icon: '<svg t="1624457751393" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12255"><path d="M1.097856 1.097642h1021.804717v1021.804716H1.097856z" fill="#F09495" p-id="12256"></path><path d="M1024.000214 1024H0.000214V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.195498v1019.609432z" fill="#FFFFFF" p-id="12257"></path><path d="M234.695985 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z" fill="#040000" p-id="12258"></path><path d="M234.695985 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115s28.339115 12.772559 28.339115 28.339115c0.099786 15.666342-12.672773 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617-11.774703-26.243617-26.243617-26.243617z" fill="#FFFFFF" p-id="12259"></path><path d="M776.232528 335.179887m-27.341259 0a27.341259 27.341259 0 1 0 54.682518 0 27.341259 27.341259 0 1 0-54.682518 0Z" fill="#040000" p-id="12260"></path><path d="M776.232528 363.519002c-15.666342 0-28.339115-12.772559-28.339115-28.339115 0-15.666342 12.772559-28.339115 28.339115-28.339115 15.666342 0 28.339115 12.772559 28.339115 28.339115 0 15.666342-12.772559 28.339115-28.339115 28.339115z m0-54.582732c-14.468914 0-26.243617 11.774703-26.243617 26.243617s11.774703 26.243617 26.243617 26.243617 26.243617-11.774703 26.243617-26.243617c-0.099786-14.468914-11.874488-26.243617-26.243617-26.243617z" fill="#FFFFFF" p-id="12261"></path><path d="M512.000214 671.656987c-52.58702 0-105.872539-17.961411-105.872539-52.387449S459.413194 566.882089 512.000214 566.882089s105.872539 17.961411 105.87254 52.387449S564.587234 671.656987 512.000214 671.656987z m0-74.240499c-21.952836 0-43.207172 3.592282-58.2748 9.77899-13.870201 5.68778-17.06334 11.275775-17.06334 12.07406s3.19314 6.386279 17.06334 12.07406c15.067628 6.186708 36.321965 9.77899 58.2748 9.77899s43.207172-3.592282 58.274801-9.77899c13.870201-5.68778 17.06334-11.275775 17.06334-12.07406s-3.19314-6.386279-17.06334-12.07406c-15.067628-6.286494-36.321965-9.77899-58.274801-9.77899z" fill="#040000" p-id="12262"></path></svg>'
                }, {
                    name: "2",
                    icon: '<svg t="1624457767572" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1048"><path d="M0 0h1024v1024H0z" fill="#E6A6C9" p-id="1049"></path><path d="M315.1 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM738.7 368.1c-23.9 0-43.3-19.4-43.3-43.3s19.4-43.3 43.3-43.3 43.3 19.4 43.3 43.3-19.4 43.3-43.3 43.3z m0-74.7c-17.3 0-31.3 14.1-31.3 31.3 0 17.3 14.1 31.3 31.3 31.3 17.3 0 31.3-14.1 31.3-31.3 0-17.2-14-31.3-31.3-31.3zM293.5 698.8l-14.5-1.3c0.1-0.6 1.5-14.6 15.1-27.9 17.2-16.7 45-24.8 82.7-24 4.9-0.1 10.9-10.5 16.1-19.6 8.4-14.7 19-33.1 37.9-34.3 19.4-1.2 42.2 16.4 71.5 55.4 9.9 5.2 16.5 11.2 21.8 16.1 8.4 7.7 13.1 11.9 25.1 10.8 14.9-1.4 38.9-11.1 77.5-31.4 26.8-28.4 56.4-41.4 83.5-36.6 27.9 4.9 50.6 27.6 67.5 67.5l-13.4 5.7c-14.7-34.5-34.3-54.9-56.7-58.8-22.3-3.9-47.6 7.8-71.2 33.1l-0.8 0.9-1.1 0.6c-85.6 45.1-99.4 38-120.2 19.1-5.5-5-11.2-10.2-20.1-14.7l-1.5-0.8-1-1.4c-32.2-43.2-50.4-51.6-60-51-11.1 0.7-18.8 14-26.2 27-7.6 13.2-15.4 26.9-28.8 26.9h-0.2c-78.4-1.6-83 38.3-83 38.7z" fill="#040000" p-id="1050"></path></svg>'
                }, {
                    name: "3",
                    icon: '<svg t="1624457776082" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1204" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#F7E983" p-id="1205"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1206"></path><path d="M329.174412 344.491728a38.118106 10.277919 57.6 1 0 17.355867-11.014369 38.118106 10.277919 57.6 1 0-17.355867 11.014369Z" fill="#040000" p-id="1207"></path><path d="M644.769475 355.956059a11.175989 36.321965 30 1 0 36.321965-62.911488 11.175989 36.321965 30 1 0-36.321965 62.911488Z" fill="#040000" p-id="1208"></path><path d="M569.678445 671.158059c-26.343403 0-51.190021-5.288638-70.049503-14.967843-20.755408-10.577275-32.230754-25.445332-32.230755-41.710388 0-16.265056 11.475346-31.133112 32.230755-41.710387 18.859482-9.579419 43.805886-14.967843 70.049503-14.967843s51.190021 5.288638 70.049503 14.967843c20.755408 10.577275 32.230754 25.445332 32.230754 41.710387 0 16.265056-11.475346 31.133112-32.230754 41.710388-18.859482 9.679205-43.805886 14.967843-70.049503 14.967843z m0-95.095693c-49.693237 0-84.318846 20.356266-84.318846 38.517248s34.625609 38.517248 84.318846 38.517248 84.318846-20.356266 84.318846-38.517248-34.725395-38.517248-84.318846-38.517248z" fill="#040000" p-id="1209"></path></svg>'
                }, {
                    name: "4",
                    icon: '<svg t="1624457781889" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1363" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#A6D9E2" p-id="1364"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1365"></path><path d="M376.194134 348.950302m-23.44962 0a23.44962 23.44962 0 1 0 46.89924 0 23.44962 23.44962 0 1 0-46.89924 0Z" fill="#040000" p-id="1366"></path><path d="M629.150672 348.950302m-24.647047 0a24.647047 24.647047 0 1 0 49.294095 0 24.647047 24.647047 0 1 0-49.294095 0Z" fill="#040000" p-id="1367"></path><path d="M397.847613 603.503411c13.471058 8.282206 28.738258 14.468914 43.7061 19.458195 29.835899 9.978562 62.266225 14.169558 93.299551 7.483921 21.054765-4.490353 40.213604-14.369129 56.778016-28.039758 6.785422-5.587995-2.893783-15.167414-9.579419-9.579419-46.999026 38.916391-112.258819 31.033327-163.847983 6.086922-4.590138-2.195284-9.080491-4.490353-13.371272-7.184564-7.583707-4.590138-14.468914 7.184564-6.984993 11.774703z" fill="#040000" p-id="1368"></path><path d="M627.753674 534.052621c-31.033327 24.048334-58.474371 68.253362-37.419607 106.970182 10.577275 19.35841 29.835899 32.629897 48.795167 42.708244 7.982849 4.190996 15.067628-7.883064 7.084779-12.07406-25.245761-13.271487-53.485091-35.324108-49.094524-66.557006 2.793997-20.156695 15.766127-37.319821 29.736114-51.190022 3.392711-3.392711 6.984993-6.785422 10.776847-9.77899 2.993569-2.295069 2.394855-7.483921 0-9.878776-2.893783-3.19314-6.885208-2.49464-9.878776-0.199572z" fill="#040000" p-id="1369"></path></svg>'
                }, {
                    name: "5",
                    icon: '<svg t="1624457787809" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1523" ><path d="M1.1 1.097642h1021.804716v1021.804716H1.1z" fill="#AD6F59" p-id="1524"></path><path d="M1024.002358 1024H0.002358V0h1024v1024z m-1021.804716-2.195284h1019.609433V2.195284H2.197642v1019.609432z" fill="#FFFFFF" p-id="1525"></path><path d="M411.829832 330.730879a38.118106 10.277919 57.6 1 0 17.355867-11.014368 38.118106 10.277919 57.6 1 0-17.355867 11.014368Z" fill="#040000" p-id="1526"></path><path d="M480.669675 609.989476c11.774703-25.844475 27.740401-51.788735 44.60417-73.342429 13.770415-17.462483 29.237186-33.92711 47.897096-44.803742 17.262912-10.078347 35.324108-13.67063 54.283376-6.58585 11.974274 4.390567 23.948548 14.468914 33.128825 24.547261 14.369129 15.865913 25.145975 34.625609 34.725394 53.684662 4.290782 8.581563 17.262912 0.997856 12.972131-7.583707-15.167414-30.334828-35.224323-63.763009-66.157864-80.327421-21.054765-11.37556-44.504385-11.475346-66.157864-1.895927-21.054765 9.280062-38.617034 25.644904-53.485091 42.907815-14.468914 16.863769-27.041902 35.324108-38.217891 54.582733-5.887351 10.178133-11.674917 20.555837-16.464627 31.232898-1.696355 3.692068-0.997856 7.982849 2.694212 10.277918 3.19314 1.895927 8.581563 0.898071 10.178133-2.694211z" fill="#040000" p-id="1527"></path><path d="M663.863649 338.091735a14.468914 33.727538 30 1 0 33.727538-58.417811 14.468914 33.727538 30 1 0-33.727538 58.417811Z" fill="#040000" p-id="1528"></path></svg>'
                }, {
                    name: "6",
                    icon: '<svg t="1624457794933" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1680" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#83CEE3" p-id="1681"></path><path d="M369 375.8m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="1682"></path><path d="M369 411.7c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.1 36-36 36z m0-69.1c-18.3 0-33.2 14.9-33.2 33.2S350.7 409 369 409s33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="1683"></path><path d="M672.2 333.6c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.3-7.6-13zM578.2 720.9c-12.5-96.7-33.3-154.7-55.6-155.6-8.8 3.9-22.3 17.5-37.7 60.1-10.8 29.8-18.4 62.2-23 81.6-1.2 5.1-2.1 9.1-2.9 11.8l-9.3-2.4c0.7-2.6 1.6-6.6 2.8-11.6 14.9-63 36-136.8 67.5-148.8l0.8-0.3h0.8c18.2-0.4 33.2 19.5 45.8 60.8 10.2 33.3 16.7 74.6 20.5 103.3l-9.7 1.1z" fill="#040000" p-id="1684"></path></svg>'
                }, {
                    name: "7",
                    icon: '<svg t="1624457802025" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1838" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#8CC66D" p-id="1839"></path><path d="M375.778679 404.47473a14.5 33.8 30 1 0 33.8-58.543317 14.5 33.8 30 1 0-33.8 58.543317Z" fill="#040000" p-id="1840"></path><path d="M627.220263 374.211388a43.1 11.6 57.6 1 0 19.588408-12.431182 43.1 11.6 57.6 1 0-19.588408 12.431182Z" fill="#040000" p-id="1841"></path><path d="M451.1 548.5c17.6-9.3 63.9-30 105.3-16.2 17 20.3 32.7 98.8 28.8 138.1-27.5 10.2-82.5 10.2-106.1 5.8-8.3-10.5-32.7-81.8-35.3-114.6-0.4-5.5 2.5-10.6 7.3-13.1z" fill="#040000" p-id="1842"></path></svg>'
                }, {
                    name: "8",
                    icon: '<svg t="1624457816632" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1996" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#5A74B8" p-id="1997"></path><path d="M357.7 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="1998"></path><path d="M357.7 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2 33.2-14.9 33.2-33.2-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="1999"></path><path d="M676 400m-34.6 0a34.6 34.6 0 1 0 69.2 0 34.6 34.6 0 1 0-69.2 0Z" fill="#040000" p-id="2000"></path><path d="M676 436c-19.8 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.2 36-36 36z m0-69.2c-18.3 0-33.2 14.9-33.2 33.2s14.9 33.2 33.2 33.2c18.3 0 33.2-14.9 33.2-33.2s-14.9-33.2-33.2-33.2z" fill="#FFFFFF" p-id="2001"></path><path d="M347.6 684.1c0.3-0.9 0.6-1.7 0.9-2.6 0.2-0.5 1.4-3.2 0.3-0.8 0.6-1.4 1.3-2.9 2-4.3 3.2-6.3 6-10.7 10.9-15.3 4.3-4 10.8-7.5 17.1-6.1 3.9 0.9 7.9 4.9 11.1 7.2 3.1 2.2 6.3 4.5 9.7 6.2 7.5 3.8 15.3 4.4 23.4 1.9 4.7-1.5 9.2-3.6 13.6-5.9 5-2.6 10.7-5 14.2-9.5 4.5-5.7 6.1-8.5 11.4-14.1 1-1 2-2 3.1-3 0.2-0.2 2.2-1.7 0.6-0.5 0.6-0.4 1.2-0.9 1.8-1.3 1-0.6 2.1-1.3 3.2-1.7-2 0.8 0.2 0 0.6-0.1 2.3-0.7-0.3-0.2 1.2-0.3 2.8-0.1 3.6 0 5.5 1 3.8 1.9 6.6 4.7 9.5 7.8 4.5 5 7.5 11.1 11.7 16.2 1.8 2.2 3.7 4.3 5.4 6.5 8.1 10.3 17.7 22.2 32.2 22 8.8-0.1 16.6-5.2 22.6-11.2 4.2-4.1 7.7-8.9 11-13.7 2.9-4.2 4.6-9.9 6.2-13.5 3.2-7.1 7.2-13.1 13-18.1 4.8-4.2 11.1-6.5 16.7-5.3 10.5 2.4 17.2 12.1 23.1 20.2 4.7 6.5 9.8 13 16 18.2 7.8 6.4 17.1 11.4 27.5 11.1 14.1-0.4 25.5-9.5 34.2-19.9 3-3.6 3.6-8.8 0-12.4-3.1-3.1-9.4-3.7-12.4 0-6.3 7.6-14.7 15.9-24.9 14.7-2.2-0.3-5.3-1.5-7.9-3.1-3.5-2.1-6.1-4.4-9.1-7.5-4.9-5.1-6.8-8.1-10.9-13.8-7.3-10.1-16.1-19.6-28.2-23.7-18.5-6.3-35.7 5.6-46 20.1-2.4 3.3-4.4 6.9-6.1 10.6-1.8 3.9-2.7 8.5-5.2 11.9-3.1 4.4-6.2 8.8-10.2 12.5-3 2.8-5.7 4.4-8.6 5.1-0.4 0.1-1.7 0.1 0.1 0h-2.2c2.1 0.1 0 0-0.5-0.1-0.7-0.2-1.4-0.4-2-0.6 1.8 0.7-1.8-1.1-2.4-1.5l-1.2-0.9c1.5 1.2-0.9-0.9-1.2-1.1-4.7-4.3-8.4-9.5-12.3-14.4-10.9-13.6-20.9-34-41-34.9-14.2-0.6-24.5 10.6-32.4 20.8-1.2 1.6-2.5 3.2-3.7 4.8-1.5 1.9 1.1-1.4-0.4 0.5-0.4 0.5-0.8 1.2-1.3 1.6-1.7 1.4-4.6 2.6-6.6 3.6-2.9 1.6-5.9 3.2-9 4.5-1.6 0.7-3.4 1.2-5.1 1.7-2.2 0.6-0.7 0.5-2.8 0.4-2.8 0-3.9-0.4-6.6-1.9-3.9-2.2-7.5-4.9-11.1-7.5-5.6-4-10-6.9-17-7.5-10.5-0.9-20.3 3.2-28.2 9.9-9.4 8.1-16.4 20.2-20.1 32-3.6 11.2 13.3 15.8 16.8 5.1z" fill="#040000" p-id="2002"></path></svg>'
                }, {
                    name: "9",
                    icon: '<svg t="1624457826949" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2156" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#F0884F" p-id="2157"></path><path d="M287.2 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM598 382c6.4 2.3 11.6-3.7 15.4-7.9 5.1-5.5 10.2-11 16-15.9 0.8-0.7 1.7-1.4 2.5-2.1 1.2-0.9-1.7 1.3 0.2-0.2l1.2-0.9c2.1-1.5 4.3-2.9 6.5-4.3 2-1.2 4-2.2 6.1-3.2 0.6-0.3 1.2-0.6 1.9-0.9-0.3 0.2-1.5 0.6 0.2-0.1 1.3-0.5 2.6-1 4-1.5 11.2-3.7 21.8-4 33.4-1.1 19.5 4.9 36.4 17 51.2 30.2 8.6 7.7 21.4-5 12.7-12.7-25.2-22.6-57.1-42.1-92.2-36.2-20.4 3.4-37.7 16.1-51.6 30.9-2.3 2.4-4.5 5-6.8 7.4-0.7 0.7-1.9 1.5-2.4 2.4-0.5 0.8 2.3-1.5 0.8-0.7 1.3-0.7 3.9-1.4 5.8-0.7-11.1-3.7-15.8 13.7-4.9 17.5zM505.9 527.1c3.4 0.7 6.8 1.7 10.2 2.8 6.7 2.2 10.4 3.5 16.6 7.7 1.6 1.1-0.5-0.5 0.6 0.5 0.6 0.5 1.1 1.1 1.7 1.6 1.5 1.4-0.1-0.4 0.5 0.6 0.4 0.6 0.7 1.2 1 1.8-1-2 0.1 0 0 0.5 0.1-2-0.1 0-0.1 0-0.1 0.8 0 0.7 0.1-0.5-0.1 0.4-0.1 0.7-0.3 1.1-0.6 1 0.7-0.9-0.4 1-1.6 2.5-4.6 5.4-8.1 7.8-6.8 4.6-14.4 8.2-22 11.4-7 3-7.4 11.9 0 14.8 7.4 2.8 15 5.3 22.4 8.1 3.1 1.1 4.2 1.5 6.9 2.9 1.1 0.6 2.1 1.2 3.2 1.8 1.2 0.8-0.7-0.5 0.1 0 0.4 0.3 0.8 0.7 1.1 1.1 0.6 0.8-1.1-1.2-0.2-0.2 0.8 0.9-0.3-1.4-0.1-0.2 0.1 0.9 0.2-1.9 0-0.9-0.1 0.5-0.8 1.8 0 0.2-0.2 0.5-0.5 1-0.8 1.4-0.3 0.3-0.9 1.3-0.3 0.5-0.5 0.7-1.1 1.3-1.7 1.9-6.9 7.3-15.9 12.8-24.4 18.1-8.3 5.3-0.6 18.5 7.7 13.2 9.9-6.3 20.9-12.8 28.6-21.8 4.8-5.5 8.1-12.9 4.2-19.9-3.4-6-10.5-8.9-16.6-11.4-8.6-3.5-17.5-6.2-26.2-9.5v14.8c14.4-6.1 47.2-18.8 41.2-40.3-3.5-12.9-19.4-18.9-30.8-22.6-3.4-1.1-6.9-2.1-10.5-2.9-9.1-2.2-13.3 12.5-3.6 14.6z" fill="#040000" p-id="2158"></path></svg>'
                }, {
                    name: "10",
                    icon: '<svg t="1624457835383" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2312" ><path d="M762.9 77.4H261.1L10.2 512l250.9 434.6h501.8L1013.8 512z" fill="#F6F180" p-id="2313"></path><path d="M342.9 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#040000" p-id="2314"></path><path d="M342.9 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.7 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.6-28.3-28.3-28.3z" fill="#FFFFFF" p-id="2315"></path><path d="M702 400.6m-29.5 0a29.5 29.5 0 1 0 59 0 29.5 29.5 0 1 0-59 0Z" fill="#040000" p-id="2316"></path><path d="M702 431.3c-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7 30.7 13.8 30.7 30.7-13.8 30.7-30.7 30.7z m0-59c-15.6 0-28.3 12.7-28.3 28.3s12.7 28.3 28.3 28.3 28.3-12.7 28.3-28.3-12.7-28.3-28.3-28.3z" fill="#FFFFFF" p-id="2317"></path><path d="M358.7 519.9c20 22 45.5 40.4 71.3 54.8 51.2 28.5 111.7 39.9 168 19.5 44.3-16.1 80.7-47.8 110.2-83.9 3-3.7 3.6-8.9 0-12.5-3.1-3.1-9.5-3.7-12.5 0-25.5 31.4-56.2 59.7-93.7 76-27.1 11.7-56.6 15.7-85.8 12.2-24.7-2.9-49.5-11.8-71.5-23.4-18.7-9.8-36.6-22.2-51.1-34.3-7.8-6.5-15.5-13.3-22.4-20.9-7.7-8.5-20.1 4.1-12.5 12.5z" p-id="2318"></path></svg>'
                }, {
                    name: "11",
                    icon: '<svg t="1624457841751" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2472" ><path d="M48.2 844.9c-68.5-210.6 186-782.1 409.1-795.4 6.3-0.4 12.5 0.2 18.6 1.6C665.1 94.6 985.4 515 987.1 821.3c0.1 20-12.9 37.9-22.4 43.1-162.7 89.8-605.8 179.7-884.4 30.9-15-7.9-24.2-26.1-32.1-50.4z" fill="#F0884F" p-id="2473"></path><path d="M401 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z" fill="#FFFFFF" p-id="2474"></path><path d="M408.7 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#040000" p-id="2475"></path><path d="M527.5 352.1m-52.4 0a52.4 52.4 0 1 0 104.8 0 52.4 52.4 0 1 0-104.8 0Z" fill="#FFFFFF" p-id="2476"></path><path d="M527.5 329m-29.3 0a29.3 29.3 0 1 0 58.6 0 29.3 29.3 0 1 0-58.6 0Z" fill="#040000" p-id="2477"></path><path d="M450.7 517c1.1-8.2 3.2-16.4 6.1-24.1 0.1-0.3 1-2.5 0.5-1.4s0.3-0.7 0.5-1c0.7-1.4 1.4-2.8 2.2-4.1 0.4-0.8 2.8-3.9 1.3-2.1 0.8-1 1.7-1.9 2.6-2.8 1-1-1.5 1 0.1 0 0.5-0.3 1-0.6 1.5-0.8-1.3 0.7-1.2 0.3 0 0.1 1.9-0.3-1.8 0.3 0.1 0 1.2-0.2 1.5 0.3 0-0.1 0.6 0.2 1.3 0.3 1.9 0.5 0.3 0.1-1.3-0.7 0.2 0.1 0.8 0.5 1.6 0.9 2.4 1.4 1.4 1 0-0.1 1.4 1.1 0.9 0.8 1.8 1.7 2.6 2.6 1.8 1.9 3.5 3.9 5 6.1 5.1 7.1 9.3 14.8 13.2 22.6 3.5 6.9 13.7 4.7 15.8-2.1 2.6-8.7 4.8-17.4 7.4-26.1 0.9-3.2 1.9-6.4 3.2-9.4-0.7 1.6 0.8-1.6 1.2-2.2l0.9-1.5c0.7-1.2-1.4 0.7 0.1-0.1 1.7-0.9-1.2 0.3-0.3 0.1 0.8-0.2 1-1.2 0.3-0.3-0.6 0.8 0.6 0-0.5 0.2-2 0.3 2.4 0.5-1.1 0 0.5 0.1 1.2 0.2 1.6 0.4-1.1-0.8-0.8-0.4 0.2 0.2 0.7 0.4 3.4 2.3 2.7 1.8 8.9 7.1 15.9 16.9 22.5 26 2.8 3.8 7.5 5.6 11.8 3.1 3.7-2.2 5.9-8 3.1-11.8-8.2-11.1-16.6-23-27.7-31.4-6.3-4.7-14.5-7.6-21.7-3-6.7 4.2-9.6 12.5-11.9 19.6-3.2 9.9-5.5 20-8.6 29.9 5.3-0.7 10.5-1.4 15.8-2.1-7.8-15.5-24.8-50.1-48-41.7-14.1 5.1-19.7 23-22.9 36.2-0.9 3.8-1.8 7.7-2.3 11.6-0.6 4.6 1.1 9.3 6 10.6 4.2 1 10.2-1.5 10.8-6.1z" fill="#040000" p-id="2478"></path></svg>'
                }, {
                    name: "12",
                    icon: '<svg t="1624457847424" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2632" ><path d="M485.538528 993.072489a362.00362 481.804818 3.149 1 0 52.933731-962.15464 362.00362 481.804818 3.149 1 0-52.933731 962.15464Z" fill="#AADCF0" p-id="2633"></path><path d="M688.2 334.1c-15.1 7.6-30.2 15.6-44.3 25-5.9 3.9-17 10.4-14.6 19.1 1.8 6.5 12 11.2 17.3 14.3 15.7 9.3 32.1 17.6 48.3 25.9 8.6 4.4 16.2-8.5 7.6-13-14.1-7.3-28.3-14.5-42.1-22.3-3.9-2.2-7.9-4.5-11.7-6.9-1.2-0.8-2.4-1.5-3.5-2.4-0.6-0.4-1.1-0.8-1.6-1.2 2.2 1.7-0.3-0.3-0.3-0.3-0.9 0.1-1.5-3.2-0.2 0.5 0.9 2.4 1.1 3.8 0.3 5.8 0.6-1.5-0.9 0.8-0.1 0 0.5-0.5 1-1.1 1.6-1.6 0.5-0.5 1-0.9 1.6-1.3 0.6-0.5 0 0 1.2-0.9 1.7-1.3 3.5-2.5 5.3-3.6 8.4-5.5 17.2-10.4 26-15.2 5.6-3 11.2-6 16.8-8.9 8.6-4.4 1-17.4-7.6-13zM375.8 347c13.4 6.8 26.7 14 39.5 21.9 1.8 1.2 3.7 2.3 5.5 3.5 0.9 0.6 1.7 1.2 2.6 1.8 0.9 0.6 1.9 1.4 1.6 1.1 1.1 0.9 2.1 1.9 3.1 2.8 1.2 1 0-0.3 0.1 0 0-0.2-0.8-2.4-0.3-4.1 1.5-5.5 2.3-2.7 0.8-2-0.4 0.2-0.9 0.8-1.3 1.1 1.7-1.4-1.6 1.1-2.3 1.6-3.4 2.3-6.9 4.4-10.4 6.4-14.9 8.6-30.3 16.4-45.6 24.3-8.6 4.4-1 17.4 7.6 13 15-7.7 30.1-15.4 44.8-23.8 6.2-3.6 13.8-7.3 18.7-12.7 7.6-8.3-3.8-16.6-9.9-20.9-8.7-6.1-18-11.3-27.3-16.4-6.5-3.6-13-7.1-19.6-10.4-8.6-4.5-16.3 8.5-7.6 12.8zM412.8 570.9c13.5 7.7 28.5 13.3 43.3 17.9 29.8 9.2 61.7 13.1 92.6 7.3 20.6-3.9 40-12.5 56.6-25.2 2.8-2.2 4.3-5.6 2.3-9-1.6-2.8-6.2-4.5-9-2.3-48.3 36.9-113.3 30-165.6 6.7-4.6-2.1-9.2-4.2-13.7-6.7-7.3-4.2-13.9 7.2-6.5 11.3z" fill="#040000" p-id="2634"></path><path d="M644.6 505.2c-30.1 21.5-60.6 62.5-39.1 99.8 10.7 18.6 30.3 30.9 49.1 40.1 7.8 3.8 14.6-7.9 6.8-11.7-23.6-11.5-53.7-31.4-49.4-60.9 2.8-18.9 15.8-34.6 29.5-47.2 2.5-2.3 5.1-4.6 7.8-6.7 0.5-0.4 0.9-0.7 1.4-1.1-0.4 0.3-1.2 0.9-0.1 0.1l0.9-0.6c6.9-5.1 0.2-16.8-6.9-11.8z" fill="#040000" p-id="2635"></path></svg>'
                }, {
                    name: "13",
                    icon: '<svg t="1624457855182" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2789" ><path d="M235.1 76.9c75.6-26.5 297.3-90.1 514.2-16.6 16.3 5.5 29.8 17.4 37.1 33 57.5 122.4 127.1 602.1 62.1 785.6a62.58 62.58 0 0 1-32.5 35.8c-109.5 51.8-428.1 136.7-609.3 37.2-14.4-7.9-25-21.3-29.7-37.1-41.9-140.6-37-627.7 19.1-798 6.1-18.7 20.5-33.4 39-39.9z" fill="#F9DABD" p-id="2790"></path><path d="M392.2 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z" fill="#040000" p-id="2791"></path><path d="M618.6 360.2m-35.2 0a35.2 35.2 0 1 0 70.4 0 35.2 35.2 0 1 0-70.4 0Z" fill="#040000" p-id="2792"></path><path d="M512 562.6c-36 0-65.3-29.3-65.3-65.3S476 432 512 432s65.3 29.3 65.3 65.3-29.3 65.3-65.3 65.3z m0-122.9c-31.7 0-57.6 25.8-57.6 57.6s25.8 57.6 57.6 57.6c31.7 0 57.6-25.8 57.6-57.6s-25.9-57.6-57.6-57.6z" fill="#040000" p-id="2793"></path></svg>'
                }, {
                    name: "14",
                    icon: '<svg t="1624457863444" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2947" ><path d="M178.1 971.5c38.1 15.9 98.7 26.6 171.3-12.3 3.7-2 8.4-1.6 11.6 1.1 43.3 35.9 123.3 80.8 236 10.9 3.8-2.4 8.7-2.4 12.6-0.2 41.8 23.9 191.6 58.2 246.6 14.2 4.4-3.5 9.1-6.6 14.5-8.5C1065 909.5 678.2-652 194.3 351c-37.5 77.8-38.4 94.1-71.9 211.3-27.6 96.3-29.1 231.3 1.4 348.1 7.2 27.3 27.3 49.9 54.3 61.1z" fill="#ABAAAA" p-id="2948"></path><path d="M468.9 349H418c-6.1 0-11.1-5-11.1-11.1V336c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.1-5 11.1-11.1 11.1zM643 471.9H390c-6.6 0-12-5.4-12-12s5.4-12 12-12h253c6.6 0 12 5.4 12 12s-5.4 12-12 12zM609 349h-61.2c-6 0-11-4.9-11-11v-2.1c0-6 4.9-11 11-11H609c6 0 11 4.9 11 11v2.1c0 6.1-4.9 11-11 11z" fill="#040000" p-id="2949"></path></svg>'
                }, {
                    name: "15",
                    icon: '<svg t="1624457870536" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3103" ><path d="M673.1 318.7c3.7-17.5 5.6-35.7 5.6-54.4 0-137.9-105.5-249.7-235.6-249.7S207.4 126.4 207.4 264.3c0 55.4 17.1 106.7 45.9 148.1-55.2 63.3-88.6 145.9-88.6 236.3 0 199.2 162.1 360.6 362.1 360.6 200 0 362.1-161.5 362.1-360.6 0.1-147.3-88.7-274-215.8-330z" fill="#4F8A54" p-id="3104"></path><path d="M392 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z" fill="#FFFFFF" p-id="3105"></path><path d="M386 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z" fill="#040000" p-id="3106"></path><path d="M505.6 246.2m-47.1 0a47.1 47.1 0 1 0 94.2 0 47.1 47.1 0 1 0-94.2 0Z" fill="#FFFFFF" p-id="3107"></path><path d="M501.4 252.8m-26.4 0a26.4 26.4 0 1 0 52.8 0 26.4 26.4 0 1 0-52.8 0Z" fill="#040000" p-id="3108"></path><path d="M474.3 364.8h-50.9c-6.1 0-11.1-5-11.1-11.1v-1.9c0-6.1 5-11.1 11.1-11.1h50.9c6.1 0 11.1 5 11.1 11.1v1.9c0 6.2-5 11.1-11.1 11.1z" fill="#040000" p-id="3109"></path></svg>'
                }, {
                    name: "16",
                    icon: '<svg t="1624457876371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3263" ><path d="M246.4 227.6c-166.9 101.1-461.9 344 87 564.1 1.5 0.6 2.9 1.1 4.4 1.6 80.7 27.7 392.8 165.4 641-198.1 40-58.6 38.5-136.2-3.7-193.3C892 289.5 727 201.1 429.1 182.7c-64.1-4-127.8 11.6-182.7 44.9z" fill="#CF92BE" p-id="3264"></path><path d="M617.1 393.4c-17.4 8.8-34.9 18.1-51.2 28.9-6.9 4.6-20.3 12.3-17.4 22.6 1.2 4.3 5.6 7 9 9.5 3.7 2.7 7.6 5 11.5 7.3 18.2 10.8 37.1 20.3 55.9 30 10 5.1 18.9-10 8.8-15.1-16.4-8.4-32.9-16.9-49-26-4.5-2.6-9.1-5.2-13.5-8l-4.5-3c-0.7-0.5-1.3-1-2-1.5 1.6 1.2 0.7 0.4-0.2-0.2-1.3-0.9-0.3-0.9-0.5-0.3 0.2 0.2 0.4 0.5 0.6 0.7 1 1.9 1.3 3.7 0.8 5.7 0.1-0.6 0.7-1.4-0.6 1.3 0.7-1.5-0.1 0-0.2 0.1 0.6-0.6 1.2-1.3 1.9-1.9l1.8-1.5c1.8-1.6-0.6 0.3 1.2-0.9 2-1.5 4.1-2.9 6.2-4.3 10-6.5 20.4-12.4 30.9-18 6.5-3.5 13.1-7 19.7-10.4 9.6-5 0.8-20.1-9.2-15zM323.1 408.5c15.9 8.1 31.7 16.5 46.8 26 2.2 1.4 4.3 2.8 6.5 4.2 1 0.7 1.9 1.3 2.8 2 0.5 0.3 1 0.7 1.4 1.1-1.1-0.9-0.3-0.3 0.3 0.3 1.1 1 2.2 2.2 3.3 3.1 1.4 1.1-1-1.7-0.1-0.1-0.6-1.1-0.9-4.1 0.3-6.7 2.2-4.8 0.7 0.1 0-0.5 0 0-1.1 0.9-1.3 1 2.3-1.9 0 0-0.5 0.4-0.8 0.5-1.5 1.1-2.3 1.6-4 2.7-8.1 5.1-12.3 7.5-17.3 10-35.1 19.1-52.8 28.2-10 5.1-1.2 20.2 8.8 15.1 17.5-9 35-17.9 52-27.7 7.3-4.2 15.9-8.6 21.8-14.7 9.3-9.7-4.3-19.7-11.5-24.7-10.1-7.1-20.9-13.1-31.7-19-7.6-4.2-15.2-8.2-22.9-12.1-9.7-5.2-18.6 9.9-8.6 15zM513 592.1c-12.2 0-24.6-1.4-36.3-4.3-8-2-13.9-8.2-15.4-16.2s1.7-15.8 8.4-20.5c23.2-16.3 60.5-31.9 106.2-13 6.4 2.6 11 8.3 12.3 15.1 1.3 6.7-0.8 13.6-5.7 18.3-13.5 13.1-40.9 20.6-69.5 20.6z m-37.4-32.5c-3.4 2.4-4.9 6.2-4.2 10.2 0.8 4.1 3.6 7.1 7.7 8.1 39.1 9.7 81.2 0.7 96.1-13.7 2.4-2.3 3.4-5.6 2.7-8.9-0.7-3.4-2.9-6.2-6.1-7.5-41.2-17.2-75.1-3.1-96.2 11.8z" fill="#040000" p-id="3265"></path></svg>'
                }, {
                    name: "17",
                    icon: '<svg t="1624457881793" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3419" ><path d="M1008.6 465.7c0-124.9-95.5-226.2-213.4-226.2-12 0-23.8 1.1-35.2 3.1v-3.1c0-124.9-95.5-226.2-213.4-226.2S333.4 114.6 333.4 239.5c0 2.4 0 4.8 0.1 7.2-17.1-4.7-35-7.2-53.4-7.2-117.8 0-213.4 101.3-213.4 226.2 0 92.1 51.9 171.3 126.3 206.6-13.7 29.9-21.4 63.4-21.4 98.8 0 124.9 95.5 226.2 213.4 226.2 68.8 0 130-34.5 169-88.1 39 53.6 100.2 88.1 169 88.1 117.8 0 213.4-101.3 213.4-226.2 0-41.2-10.4-79.9-28.6-113.1 60.5-39.9 100.8-111.1 100.8-192.3z" fill="#8CC66D" p-id="3420"></path><path d="M437.8 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3421"></path><path d="M649.7 400.7m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3422"></path><path d="M527.3 625.9c6.3-14.2 13.1-28.3 17.9-43 6.2-19 8.3-38.6 10.5-58.3l2.1-19.2c0.7-6.2-9-6.1-9.7 0-1.7 16.3-2.8 32.8-5.7 48.9-4.2 23.7-13.8 45-23.5 66.7-2.5 5.6 5.9 10.5 8.4 4.9z" fill="#252525" p-id="3423"></path><path d="M447.7 522.3c20.3-0.1 40.6-0.2 61-0.4l96.6-0.6c7.5 0 14.9-0.1 22.4-0.1 16.6-0.1 16.7-25.9 0-25.8-20.3 0.1-40.6 0.2-61 0.4l-96.6 0.6c-7.5 0-14.9 0.1-22.4 0.1-16.6 0.1-16.7 25.9 0 25.8z" fill="#040000" p-id="3424"></path><path d="M495.4 508.2c-10.3 3.8-9.2 20.9-9.2 29.5 0.1 16 2.1 32.3 6.1 47.8 3.5 13.7 8.7 29.9 20.6 38.7 12.9 9.5 27.6 2.1 37.6-7.9 10.2-10.3 17.8-23 24.7-35.6 11.6-21.3 20.9-43.8 29.7-66.4 3-7.8-9.5-11.1-12.5-3.4-7.4 19.1-15.3 38.1-24.7 56.4-5.9 11.5-12.2 23-20.3 33.1-2.8 3.5-5.8 6.9-9.2 9.8-1.9 1.7-1.4 1.3-3.3 2.5-1.3 0.8-2.6 1.6-3.9 2.2-0.7 0.3 1-0.2-0.8 0.3-0.6 0.2-1.2 0.3-1.8 0.5-1.1 0.3-1.2 0.2-0.5 0.1-0.6 0-1.3 0-1.9 0.1-2.2 0.1 0.6 0.5-1.8-0.2l-1.8-0.6c1.5 0.5 0.2 0.1-0.5-0.3-0.8-0.5-2.9-2.1-1.7-1.1-1-0.9-2-1.7-2.8-2.7-0.4-0.5-0.9-1-1.3-1.5 0.4 0.5 0.1 0.2-0.5-0.7-0.8-1.3-1.7-2.5-2.4-3.9-0.7-1.3-1.4-2.5-2-3.8-0.4-0.8-0.8-1.6-1.1-2.4-0.1-0.2-0.5-1.1 0 0l-0.6-1.5a86.8 86.8 0 0 1-3.3-9.8c-4.4-14.9-6.2-27.9-6.8-42.8-0.3-6.6-0.3-13.1 0.4-19.7 0.2-1.5-0.3 1.5 0.1-0.5l0.3-1.8c0.2-0.9 0.5-1.8 0.7-2.8 0.4-1.9-0.7 1.1 0.3-0.7 0.5-1-1.3 1.2-0.3 0.5-0.3 0.3-1.1 0.8-2 1.1 7.7-2.9 4.3-15.4-3.5-12.5z" fill="#040000" p-id="3425"></path></svg>'
                }, {
                    name: "18",
                    icon: '<svg t="1624457899440" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3579" ><path d="M75.4 739.8c-78.7-134.4-194-455.7 401.4-579.6 9.8-2 19.2-6.2 29.2-7.5C656.8 133 947.3 205 1000.1 578.4c42.6 223.8 29.7 392.1-822 233.6-43.1-8-80.6-34.4-102.7-72.2z" fill="#F09495" p-id="3580"></path><path d="M704.6 875.4c-129 0-301.8-20.5-526.6-62.3-43.5-8.1-81.2-34.6-103.5-72.7-19.3-32.9-44.8-84.3-57.1-142.5-13.9-65.1-8.8-125.3 15.1-179.2 54.3-122.3 203.7-209.6 444-259.6 4.1-0.9 8.3-2.1 12.3-3.4 5.5-1.7 11.1-3.4 16.9-4.2 29-3.8 75.7-5.9 133.8 5.7 54.5 10.9 105.3 31 150.8 59.9C843.7 251 888.2 296 922.7 351c39.7 63.1 66.1 139.6 78.5 227.3 8.1 42.4 15.2 87.3 12.5 127.9-2.8 42.6-16.4 75.5-41.5 100.7-42.5 42.7-120.3 65-237.8 68.1-9.6 0.2-19.6 0.4-29.8 0.4zM76.3 739.3c22 37.6 59.2 63.7 102.1 71.7 242.5 45.1 424.4 65.3 556.1 61.9 116.9-3.1 194.1-25.2 236.3-67.5 55.4-55.6 44.4-142.5 28.3-226.7C976 415.8 903.4 291.5 789.2 219c-124-78.7-248.1-69.9-283.2-65.3-5.6 0.7-11.2 2.4-16.6 4.1-4.1 1.2-8.3 2.5-12.5 3.4C237.3 211.1 88.5 298 34.5 419.6c-54.6 122.8 2.8 253 41.8 319.7z" fill="#FFFFFF" p-id="3581"></path><path d="M424.1 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3582"></path><path d="M635.9 442.5m-24.7 0a24.7 24.7 0 1 0 49.4 0 24.7 24.7 0 1 0-49.4 0Z" fill="#040000" p-id="3583"></path><path d="M426.2 543.3c17.1 7.9 36.6 26 25.5 46.1-6.9 12.5-19.8 21.2-31.7 28.4-4.5 2.7-0.4 9.8 4.1 7.1 17.4-10.5 41.6-27.6 39-51.1-1.6-14-12.4-24.8-23.5-32.3-3-2-6.1-3.9-9.3-5.4-4.8-2.1-8.9 5-4.1 7.2zM629.5 535.4c-21.8 11.7-40.6 37-25.7 61.3 8.2 13.4 22.2 22.7 35.7 30.3 4.7 2.7 8.9-4.6 4.2-7.2-15.5-8.7-39.9-23.9-36.9-45.2 1.6-11.4 10.7-20.7 19.6-27.2 2.4-1.7 4.8-3.4 7.4-4.8 4.7-2.5 0.4-9.8-4.3-7.2z" fill="#040000" p-id="3584"></path><path d="M457.2 584.6c25.6 25.6 66.7 41 101.8 28.3 18.2-6.6 33.2-19.1 45.5-33.8 4.2-5.1-3-12.4-7.3-7.3-18.5 22-43.3 38.1-73 35-18.6-1.9-36.2-10.8-50.9-22-2.9-2.2-6.1-4.8-8.8-7.5-4.7-4.7-12 2.6-7.3 7.3z" fill="#040000" p-id="3585"></path></svg>'
                }, {
                    name: "19",
                    icon: '<svg t="1624457904464" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3739" ><path d="M915.9 510.5c8.4-19 13.1-39.8 13.1-61.7 0-90-78.9-162.9-176.2-162.9-3.2 0-6.3 0.1-9.5 0.2v-0.2c0-94.8-116.2-171.6-259.6-171.6S224 191.2 224 286v2c-96.2 0-174.1 72-174.1 160.9 0 38 14.3 73 38.2 100.5-41.8 29.4-68.8 75.9-68.8 128.2 0 88.9 78 160.9 174.1 160.9 17.1 0 33.6-2.3 49.3-6.5 28.9 46.1 88.7 77.7 157.6 77.7 49.4 0 94-16.2 126-42.3 32 26.1 76.6 42.3 126 42.3 77.3 0 143-39.7 166.7-95 3.1 0.2 6.3 0.2 9.5 0.2 97.3 0 176.2-72.9 176.2-162.9 0-60.6-35.7-113.4-88.8-141.5z" fill="#5A74B8" p-id="3740"></path><path d="M357.6 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z" fill="#FEFEFD" p-id="3741"></path><path d="M357.5 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z" fill="#040000" p-id="3742"></path><path d="M531.3 449.5a46.6 73.2 0 1 0 93.2 0 46.6 73.2 0 1 0-93.2 0Z" fill="#FEFEFD" p-id="3743"></path><path d="M531.2 449.5a25.1 39.4 0 1 0 50.2 0 25.1 39.4 0 1 0-50.2 0Z" fill="#040000" p-id="3744"></path><path d="M426.7 574.6c20.9 29.9 59.7 52.2 96.2 38.6 19.2-7.2 34.7-21.2 47.6-36.9 2.8-3.5 3.4-8.3 0-11.7-2.9-2.9-8.9-3.5-11.7 0-16.5 20.2-40.9 40.9-68.1 35.5-17.3-3.4-31-13.2-42.9-25.9-2-2.2-3.9-4.4-5.8-6.7-1.6-1.9 1.1 1.5-0.4-0.6-0.2-0.2-0.3-0.5-0.5-0.7-6.2-8.7-20.6-0.4-14.4 8.4z" fill="#040000" p-id="3745"></path></svg>'
                }, {
                    name: "20",
                    icon: '<svg t="1624457910321" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3899" ><path d="M792.8 301.4c-8.2 0-16.2 0.4-24.2 1.3-12.3-81.8-129.2-145.9-271.8-145.9-137.1 0-250.5 59.3-269.9 136.6C105.3 295.5 7.4 391.2 7.4 508.9c0 119.1 100.2 215.6 223.7 215.6 5.3 0 10.6-0.2 15.8-0.5 14.4 80.5 130.4 143.2 271.3 143.2 135.9 0 248.6-58.3 269.4-134.6 1.7 0 3.4 0.1 5.1 0.1 123.6 0 223.7-96.5 223.7-215.6s-100-215.7-223.6-215.7z" fill="#F6CD50" p-id="3900"></path><path d="M435.9 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z" fill="#FAFAFA" p-id="3901"></path><path d="M588.1 431.5m-52.2 0a52.2 52.2 0 1 0 104.4 0 52.2 52.2 0 1 0-104.4 0Z" fill="#FAFAFA" p-id="3902"></path><path d="M435.9 431.5m-27.8 0a27.8 27.8 0 1 0 55.6 0 27.8 27.8 0 1 0-55.6 0Z" fill="#040000" p-id="3903"></path><path d="M601.9 407.4c-5.7 2.9-11.3 5.9-16.9 9-6.8 3.8-15.3 7.8-20.5 13.8-5.6 6.5 1.6 11.1 6.7 14.4 11.2 7.1 23.3 13 35.1 19 5.7 2.9 10.8-5.7 5.1-8.6-10.9-5.6-21.9-11.1-32.4-17.4-2.4-1.4-4.6-3.1-7-4.6 1 0.6-0.4-0.4-0.4-0.4-1.9-0.3-0.5 4.2 0.5 4.1-0.1 0-0.6 0.3 0.3-0.3 0.5-0.3 1-0.9 1.5-1.3 9.7-7.9 21.9-13.5 33.1-19.2 5.7-2.7 0.6-11.4-5.1-8.5zM406.6 547.6c11.5 14.4 27 26.7 42.7 36.3 32.2 19.8 71.2 27.2 107.6 15.4 29.5-9.6 54.6-29.1 75.5-51.6 10.8-11.6-6.6-29.1-17.5-17.5-9.4 10.1-19.5 19.7-30.8 27.7-4.6 3.2-9.3 6.2-14.2 8.9-5 2.8-9.9 5.1-14.1 6.7-4.6 1.7-9.3 3.2-14.1 4.4-2.2 0.5-4.4 1-6.6 1.4-1 0.2-2 0.3-2.9 0.5 2.6-0.4-2.1 0.2-2.5 0.3-4.1 0.4-8.3 0.5-12.5 0.4-2.2-0.1-4.4-0.2-6.6-0.4-1.1-0.1-2.2-0.2-3.2-0.3-1.5-0.2-1.4-0.2 0.1 0l-2.1-0.3c-7.8-1.3-15.4-3.4-22.8-6.2-0.9-0.4-1.8-0.7-2.8-1.1-3.1-1.2 2.3 1.1-0.7-0.3-1.5-0.7-2.9-1.3-4.4-2-3.7-1.8-7.2-3.7-10.8-5.8-5.7-3.4-11.1-7.1-16.4-11.1 3 2.3-1.1-0.9-1.8-1.5-1.1-0.9-2.1-1.7-3.1-2.6-2.1-1.8-4.2-3.7-6.3-5.6-4.4-4.1-8.7-8.4-12.4-13.1-4.2-5.2-13.1-4.3-17.5 0-5 5.1-4 12.2 0.2 17.4z" fill="#040000" p-id="3904"></path></svg>'
                }]
            }, {
                name: "Sign Icon",
                type: "sign",
                list: [{
                    name: "1",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M809.728 429.696a18.901333 18.901333 0 0 0-15.274667-12.885333l-183.466666-26.624-81.92-166.272a18.901333 18.901333 0 0 0-34.005334 0l-81.92 166.272-183.594666 26.624a19.029333 19.029333 0 0 0-10.496 32.298666l132.693333 129.536-31.274667 182.741334a18.816 18.816 0 0 0 27.477334 19.84l164.138666-86.186667 164.096 86.058667a18.773333 18.773333 0 1 0 27.434667-19.84l-31.36-182.741334 132.693333-129.408a18.901333 18.901333 0 0 0 4.778667-19.413333z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "2",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M644.565333 306.901333c32.128 0 65.834667-5.76 101.077334-17.237333a17.066667 17.066667 0 0 1 22.357333 16.213333v328.32c-1.109333 0.768 10.325333 27.093333-99.370667 19.84-109.653333-7.210667-181.76-45.098667-246.869333-45.098666-65.152 0-49.322667 2.688-74.154667 8.405333v168.064a24.746667 24.746667 0 0 1-24.490666 25.258667 22.528 22.528 0 0 1-17.28-7.253334 24.149333 24.149333 0 0 1-7.168-18.005333V281.258667C299.776 280.490667 328.106667 256 421.76 256s164.437333 50.901333 222.805333 50.901333z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "3",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M524.074667 225.408l274.517333 274.517333a17.066667 17.066667 0 0 1 0 24.149334l-274.517333 274.517333a17.066667 17.066667 0 0 1-24.149334 0l-274.517333-274.517333a17.066667 17.066667 0 0 1 0-24.149334l274.517333-274.517333a17.066667 17.066667 0 0 1 24.149334 0z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "4",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M317.866667 300.8h388.266666c9.386667 0 17.066667 7.68 17.066667 17.066667v388.266666a17.066667 17.066667 0 0 1-17.066667 17.066667h-388.266666a17.066667 17.066667 0 0 1-17.066667-17.066667v-388.266666c0-9.386667 7.68-17.066667 17.066667-17.066667z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "5",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M498.346667 279.082667L248.789333 701.44a15.829333 15.829333 0 0 0 13.653334 23.893333h499.114666a15.829333 15.829333 0 0 0 13.653334-23.893333l-249.6-422.357333a15.829333 15.829333 0 0 0-27.264 0z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "6",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z" fill="#FFFFFF"></path><path d="M634.538667 487.808L555.050667 426.24 507.306667 256a201.002667 201.002667 0 0 0-23.594667 20.394667l-0.256-0.256L525.653333 426.666667l-133.290666 59.946666a14.08 14.08 0 0 0-8.021334 15.957334l28.757334 126.378666a14.208 14.208 0 0 0 27.733333-6.229333l-26.24-115.114667 126.037333-56.704 76.416 59.136a14.250667 14.250667 0 0 0 19.968-2.474666 14.08 14.08 0 0 0-2.474666-19.797334z" fill="#6D768D"></path></svg>'
                }, {
                    name: "7",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M497.749333 798.549333l-31.445333-28.501333C313.941333 631.722667 213.333333 540.501333 213.333333 428.8a160.981333 160.981333 0 0 1 162.730667-162.730667c51.498667 0 100.906667 23.978667 133.12 61.696a177.536 177.536 0 0 1 133.162667-61.696 160.981333 160.981333 0 0 1 162.730666 162.730667c0 111.701333-100.608 202.965333-252.970666 341.333333l-31.445334 28.458667a17.066667 17.066667 0 0 1-22.912 0z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "8",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M374.656 273.194667c5.973333 4.48 12.117333 9.6 18.346667 15.36 6.272 5.717333 11.904 12.373333 16.896 19.84 2.517333 4.010667 5.504 8.490667 9.002666 13.482666a529.493333 529.493333 0 0 1 20.266667 32.213334h155.221333a169.813333 169.813333 0 0 0 9.770667-15.744c2.474667-4.48 5.248-8.96 8.234667-13.482667a460.842667 460.842667 0 0 1 23.253333-31.829333c4.992-6.229333 12.245333-12.373333 21.76-18.346667a34.261333 34.261333 0 0 0 10.112-9.728 31.274667 31.274667 0 0 0 5.248-11.989333 18.56 18.56 0 0 0-1.536-11.605334 17.664 17.664 0 0 0-10.112-8.618666c-4.48-1.493333-8.362667-2.005333-11.605333-1.493334a46.933333 46.933333 0 0 0-9.770667 2.602667c-3.242667 1.28-6.613333 2.645333-10.112 4.138667a32.426667 32.426667 0 0 1-12.757333 2.261333 26.026667 26.026667 0 0 1-12.373334-2.645333 45.653333 45.653333 0 0 1-8.96-6.357334l-8.661333-7.850666a30.336 30.336 0 0 0-11.989333-6.4c-9.984-3.968-18.005333-4.693333-24.021334-2.218667-5.973333 2.474667-11.946667 6.485333-17.962666 11.946667a88.618667 88.618667 0 0 1-11.989334 10.496 7.338667 7.338667 0 0 1-3.754666 1.493333 46.165333 46.165333 0 0 1-8.277334-5.205333 71.808 71.808 0 0 1-7.125333-4.906667 37.973333 37.973333 0 0 1-6.4-6.357333c-3.968-3.968-9.941333-6.613333-17.92-7.850667a31.061333 31.061333 0 0 0-21.76 4.138667c-8.533333 5.461333-14.506667 10.069333-18.048 13.824a29.354667 29.354667 0 0 1-15.744 7.893333 23.978667 23.978667 0 0 1-13.098667-0.768 987.733333 987.733333 0 0 0-14.634666-4.48 80.725333 80.725333 0 0 0-14.250667-2.986667 16.768 16.768 0 0 0-11.989333 2.986667c-6.997333 5.461333-9.258667 12.074667-6.741334 19.84a34.56 34.56 0 0 0 13.482667 18.346667z" fill="#FFFFFF"></path><path d="M780.757333 545.152a219.306667 219.306667 0 0 0-19.882666-65.536 224.981333 224.981333 0 0 0-33.365334-49.792 430.336 430.336 0 0 0-37.12-37.12c-14.506667-11.946667-27.264-23.296-38.272-34.048a544.512 544.512 0 0 1-27.733333-28.842667 305.28 305.28 0 0 1-22.485333-26.197333h-168.746667c-6.485333 8.490667-13.994667 17.493333-22.485333 26.965333a360.96 360.96 0 0 1-26.24 28.074667c-10.538667 10.24-22.272 21.12-35.285334 32.597333a305.493333 305.493333 0 0 0-41.6 44.16 250.026667 250.026667 0 0 0-49.493333 117.589334 216.106667 216.106667 0 0 0 1.877333 70.4 220.586667 220.586667 0 0 0 75.349334 126.549333c21.248 18.005333 47.146667 32.597333 77.653333 43.818667 30.464 11.264 65.493333 16.853333 104.96 16.853333 38.528 0 72.874667-4.864 103.125333-14.592a265.045333 265.045333 0 0 0 78.378667-39.338667c21.973333-16.469333 39.594667-35.797333 52.864-58.026666 13.226667-22.186667 22.101333-45.824 26.624-70.784 4.992-30.421333 5.632-58.026667 1.877333-82.773334z" fill="#FFFFFF"></path><path d="M593.322667 647.509333a20.48 20.48 0 0 1-11.861334 3.2h-50.133333v14.165334c0 4.266667-1.792 8.362667-5.376 12.373333a15.914667 15.914667 0 0 1-13.952 5.333333 24.917333 24.917333 0 0 1-14.336-3.882666c-3.84-2.602667-5.973333-7.210667-6.4-13.824v-14.165334h-48.725333a17.792 17.792 0 0 1-11.818667-3.882666 10.24 10.24 0 0 1-3.968-9.6c0-4.266667 1.578667-7.68 4.693333-10.24a16.768 16.768 0 0 1 11.093334-3.925334h48.682666v-24.789333h-48.682666a15.573333 15.573333 0 0 1-11.52-4.266667 13.525333 13.525333 0 0 1-4.266667-9.941333 15.36 15.36 0 0 1 4.693333-10.624 14.72 14.72 0 0 1 11.093334-4.949333h48.682666l0.725334-14.890667a1053.568 1053.568 0 0 1-40.832-42.538667l-10.752-9.898666a41.216 41.216 0 0 1-6.442667-11.690667c-1.92-4.992-0.938667-10.069333 2.858667-15.274667a13.653333 13.653333 0 0 1 15.786666-3.84c6.186667 2.090667 11.221333 4.821333 15.018667 8.106667 1.92 2.389333 5.248 5.888 10.026667 10.666667l15.061333 14.848 19.328 19.157333 22.186667-20.565333a987.605333 987.605333 0 0 1 29.397333-25.514667 21.162667 21.162667 0 0 1 14.293333-5.674667c5.290667 0 9.557333 2.133333 12.928 6.4 6.186667 7.082667 3.84 15.36-7.168 24.789334a179.072 179.072 0 0 0-12.885333 12.373333c-5.76 5.973333-11.52 11.733333-17.194667 17.408-6.698667 7.082667-14.08 14.378667-22.186666 21.973333v13.44h46.506666c6.698667 0 11.605333 1.536 14.72 4.608a14.165333 14.165333 0 0 1 4.650667 10.282667c0 4.266667-1.450667 7.936-4.309333 11.008-2.858667 3.029333-7.637333 4.352-14.336 3.84l-46.506667 0.768-0.768 24.064h45.866667c13.354667 0 20.053333 4.992 20.053333 14.933333 0.469333 4.693333-0.853333 8.106667-3.925333 10.24z" fill="#6D768D"></path></svg>'
                }, {
                    name: "9",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M512 213.333333l234.666667 341.333334h-128v213.333333h-213.333334v-213.333333h-128L512 213.333333z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "10",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M533.333333 810.666667L298.666667 469.333333h128V256h213.333333v213.333333h128l-234.666667 341.333334z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "11",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M213.333333 533.333333L554.666667 298.666667v128h213.333333v213.333333h-213.333333v128l-341.333334-234.666667z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "12",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M810.666667 533.333333L469.333333 768v-128H256v-213.333333h213.333333V298.666667l341.333334 234.666666z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "13",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M0 512c0 282.752 229.248 512 512 512s512-229.248 512-512S794.752 0 512 0 0 229.248 0 512z" fill="#6D768D"></path><path d="M571.349333 508.586667l162.389334-162.346667a44.330667 44.330667 0 1 0-62.72-62.72l-162.389334 162.389333-162.517333-162.389333a44.330667 44.330667 0 1 0-62.72 62.72l162.389333 162.389333-162.389333 162.474667a44.330667 44.330667 0 1 0 62.72 62.72l162.389333-162.346667 162.389334 162.389334a44.330667 44.330667 0 1 0 62.72-62.72l-162.261334-162.56z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "14",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C233.386667 0 0 225.877333 0 512s225.877333 512 512 512 512-225.877333 512-512S790.613333 0 512 0z" fill="#6D768D"></path><path d="M726.144 311.210667l-277.333333 305.066666-124.8-124.8c-13.866667-13.866667-41.6-13.866667-55.466667 0-13.866667 13.866667-13.866667 41.6 0 55.466667l159.445333 152.533333c13.866667 13.866667 41.6 13.866667 55.466667 0l305.066667-332.8c13.866667-13.866667 13.866667-41.6 0-55.466666-20.778667-13.866667-48.512-13.866667-62.378667 0z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "15",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M541.952 755.626667a40.618667 40.618667 0 0 1-29.824 12.373333 41.344 41.344 0 0 1-30.122667-12.373333 40.106667 40.106667 0 0 1-12.672-30.122667c0-11.605333 4.096-21.845333 12.672-30.122667a40.405333 40.405333 0 0 1 30.122667-12.714666c11.605333 0 21.546667 4.138667 29.824 12.714666a40.32 40.32 0 0 1 12.714667 30.122667c0 11.861333-4.096 21.76-12.714667 30.122667zM450.986667 241.28A77.866667 77.866667 0 0 1 512.256 213.333333c24.874667 0 45.354667 8.917333 61.354667 27.946667 15.488 18.432 23.722667 41.685333 23.722666 69.674667 0 23.765333-33.152 200.533333-44.672 329.045333h-80.128C463.146667 511.402667 426.666667 334.677333 426.666667 310.954667c0-27.392 8.277333-50.645333 24.32-69.674667z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "16",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.794667 0 512 0z" fill="#6D768D"></path><path d="M490.666667 682.666667a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m13.994666-490.752c61.397333 0 112.341333 14.634667 153.002667 43.946666 40.533333 29.269333 60.885333 72.618667 60.885333 130.133334 0 35.242667-12.373333 64.938667-29.952 89.045333-10.282667 14.677333-33.664 33.408-62.890666 56.192l-32.426667 22.357333c-15.701333 12.202667-29.696 26.453333-34.858667 42.666667-1.706667 5.546667-3.072 14.677333-3.968 24.533333-0.426667 4.949333-4.864 15.018667-15.232 15.018667h-83.328c-13.568 0-15.957333-10.581333-15.744-15.786667 1.493333-34.005333 4.608-64.213333 18.474667-80.469333 28.074667-32.896 91.904-73.813333 91.904-73.813333a104.106667 104.106667 0 0 0 23.552-24.021334c10.837333-14.933333 19.797333-31.317333 19.797333-49.237333 0-20.565333-6.016-39.338667-18.090666-56.32-12.032-16.938667-34.090667-25.386667-66.005334-25.386667-31.445333 0-53.76 10.410667-66.901333 31.274667-9.685333 15.445333-15.786667 29.610667-18.346667 45.013333-0.853333 5.461333-4.394667 16.981333-16.042666 16.981334H327.210667c-17.322667 0-21.12-11.221333-20.650667-16.64 6.272-68.138667 32.896-114.688 80-144.597334 32-20.565333 71.381333-30.890667 118.101333-30.890666z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "17",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M336.256 410.026667H253.312a40.021333 40.021333 0 0 0-39.850667 43.264l23.296 278.101333c1.706667 20.693333 19.072 36.608 39.850667 36.608h59.648c11.050667 0 20.010667-8.96 20.010667-19.968v-318.037333a19.968 19.968 0 0 0-20.010667-19.968z m434.432 0h-178.944C653.312 182.314667 548.949333 170.666667 548.949333 170.666667c-44.288 0-35.114667 34.986667-38.442666 40.832 0 84.48-68.010667 155.093333-101.034667 184.362666a39.552 39.552 0 0 0-13.226667 29.653334v322.56c0 11.008 8.96 19.925333 20.010667 19.925333h233.728c30.378667 0 58.154667-17.152 71.68-44.373333 18.176-36.736 40.448-90.112 54.656-133.973334 13.781333-42.410667 26.24-94.976 33.578667-131.968a39.850667 39.850667 0 0 0-39.253334-47.658666z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "18",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M796.16 413.909333c-31.146667-0.298667-115.626667-0.085333-146.858667-0.085333h-158.464c8.533333-7.68 15.914667-14.506667 23.594667-20.906667 29.781333-24.874667 25.813333-71.082667-14.208-88.874666-22.954667-10.24-44.970667-5.632-64 11.52-34.944 31.274667-69.632 62.677333-104.277333 93.994666a15.488 15.488 0 0 1-11.178667 4.437334c-11.221333-0.085333-26.88-0.128-46.933333-0.170667a17.066667 17.066667 0 0 0-17.109334 17.066667L256 719.701333a17.066667 17.066667 0 0 0 17.066667 17.152l49.578666-0.085333c3.968 0 7.466667 0.768 10.88 2.602667 15.829333 8.832 31.701333 17.493333 47.616 26.24a18.133333 18.133333 0 0 0 9.301334 2.346666h168.405333c6.186667 0 11.946667-0.981333 17.834667-2.56 29.44-7.253333 40.021333-30.293333 38.528-52.565333-0.768-9.728-4.266667-18.346667-9.984-26.24 19.626667-5.76 35.114667-16.213333 42.112-36.096 7.125333-20.394667 1.621333-38.4-12.672-53.333333 28.16-19.754667 34.858667-44.672 18.645333-75.648h140.458667c6.570667 0 13.013333-0.597333 19.370666-2.645334 31.957333-9.813333 48.810667-42.88 35.626667-71.552-10.154667-22.186667-28.629333-33.152-52.608-33.450666z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "19",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M270.506667 413.909333c31.146667-0.298667 115.626667-0.085333 146.858666-0.085333h158.464c-8.533333-7.68-15.914667-14.506667-23.594666-20.906667-29.781333-24.874667-25.813333-71.082667 14.208-88.874666 22.954667-10.24 44.970667-5.632 64 11.52 34.944 31.274667 69.632 62.677333 104.277333 93.994666 3.413333 2.986667 6.528 4.437333 11.178667 4.437334 11.221333-0.085333 26.88-0.128 46.933333-0.170667a17.066667 17.066667 0 0 1 17.109333 17.066667l0.682667 288.853333a17.066667 17.066667 0 0 1-17.066667 17.152l-49.578666-0.085333a22.101333 22.101333 0 0 0-10.88 2.602666c-15.829333 8.832-31.701333 17.493333-47.616 26.24a18.133333 18.133333 0 0 1-9.301334 2.346667h-168.405333a68.693333 68.693333 0 0 1-17.834667-2.56c-29.44-7.253333-40.021333-30.293333-38.528-52.565333 0.768-9.728 4.266667-18.346667 9.984-26.24-19.626667-5.76-35.114667-16.213333-42.112-36.096-7.125333-20.394667-1.621333-38.4 12.672-53.333334-28.16-19.754667-34.858667-44.672-18.645333-75.648H272.853333c-6.570667 0-13.013333-0.597333-19.370666-2.645333-31.957333-9.813333-48.810667-42.88-35.626667-71.552 10.154667-22.186667 28.629333-33.152 52.608-33.450667z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "20",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M667.733333 480.128H400v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 213.333333a155.605333 155.605333 0 0 0-155.392 155.434667v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 509.013333v292.010667a28.885333 28.885333 0 0 0 28.885333 28.885333h340.138667a28.885333 28.885333 0 0 0 28.928-28.885333V509.013333a28.885333 28.885333 0 0 0-28.928-28.885333z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "21",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M400.042667 437.461333v-111.36a97.706667 97.706667 0 0 1 97.621333-97.621333 97.706667 97.706667 0 0 1 97.578667 97.621333 28.885333 28.885333 0 0 0 57.813333 0A155.605333 155.605333 0 0 0 497.621333 170.666667a155.605333 155.605333 0 0 0-155.392 155.434666v111.36h-14.677333A28.885333 28.885333 0 0 0 298.666667 466.346667v292.010666a28.885333 28.885333 0 0 0 28.885333 28.885334h340.138667a28.885333 28.885333 0 0 0 28.928-28.885334V466.346667a28.885333 28.885333 0 0 0-28.928-28.885334H400.042667z" fill="#FFFFFF"></path><path d="M595.242667 437.461333v-111.36a97.706667 97.706667 0 0 0-97.621334-97.621333 97.706667 97.706667 0 0 0-97.578666 97.621333 28.885333 28.885333 0 0 1-57.813334 0A155.605333 155.605333 0 0 1 497.621333 170.666667a155.605333 155.605333 0 0 1 155.434667 155.434666v111.36h14.634667c16 0 28.928 12.928 28.928 28.885334v292.010666a28.885333 28.885333 0 0 1-28.928 28.885334H327.552A28.885333 28.885333 0 0 1 298.666667 758.357333V466.346667c0-15.957333 12.928-28.885333 28.885333-28.885334h267.690667z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "22",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M511.999787 512.000213m-511.999787 0a511.999787 511.999787 0 1 0 1023.999573 0 511.999787 511.999787 0 1 0-1023.999573 0Z" fill="#6D768D"></path><path d="M381.354508 364.586941c0 54.015977 29.013321 103.935957 75.946635 130.986613a152.53327 152.53327 0 0 0 151.935936 0 151.12527 151.12527 0 0 0 75.946636-130.986613A151.594604 151.594604 0 0 0 533.333111 213.333671a151.594604 151.594604 0 0 0-151.89327 151.25327zM660.479725 498.901552a185.258589 185.258589 0 0 1-127.146614 50.346646c-49.066646 0-93.866628-19.199992-127.06128-50.346646C317.141201 544.853533 255.999893 637.440161 255.999893 744.106783c0 13.183995 10.709329 23.850657 23.978657 23.850657h506.709122a23.893323 23.893323 0 0 0 23.978657-23.893323c0-106.538622-61.098641-199.25325-150.186604-245.205232z" fill="#FFFFFF"></path></svg>'
                }, {
                    name: "23",
                    icon: '<svg viewBox="0 0 1024 1024"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#6D768D"></path><path d="M445.610667 401.578667a129.322667 129.322667 0 1 0 258.645333 0 129.322667 129.322667 0 0 0-258.645333 0z m237.568 114.901333a157.354667 157.354667 0 0 1-216.362667 0 236.373333 236.373333 0 0 0-127.957333 209.706667c0 11.264 9.130667 20.394667 20.394666 20.394666h431.402667a20.394667 20.394667 0 0 0 20.394667-20.394666 236.373333 236.373333 0 0 0-127.872-209.706667zM409.813333 401.578667c0-40.362667 14.592-77.397333 38.698667-106.112a112.725333 112.725333 0 0 0-29.013333-3.925334 112.64 112.64 0 0 0-112.426667 112.469334 112.64 112.64 0 0 0 144.853333 107.648 164.693333 164.693333 0 0 1-42.112-110.08z m-18.602666 136.704a136.533333 136.533333 0 0 1-65.706667-34.474667 205.44 205.44 0 0 0-111.232 182.4c0 9.813333 7.936 17.706667 17.706667 17.706667H303.36a273.621333 273.621333 0 0 1 87.893333-165.632z" fill="#FFFFFF"></path></svg>'
                }]
            }], H = function(t) {
                var e = t.split("_"),
                    i = W.find((function(t) {
                        return t.type === e[0]
                    }));
                return i.list.find((function(t) {
                    return t.name === e[1]
                })).icon
            }, Y = {
                hyperlink: $,
                note: j,
                nodeIconList: W,
                getNodeIconListIcon: H
            }, P = {
                name: "NodeIcon",
                data: function() {
                    return {
                        nodeIconList: W,
                        dialogVisible: !1,
                        iconList: [],
                        activeNodes: []
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("node_active", (function() {
                        if (t.activeNodes = arguments.length <= 1 ? void 0 : arguments[1], t.activeNodes.length > 0) {
                            var e = t.activeNodes[0];
                            t.iconList = e.getData("icon") || []
                        } else t.iconList = []
                    })), this.$bus.$on("showNodeIcon", (function() {
                        t.dialogVisible = !0
                    }))
                },
                methods: {
                    setIcon: function(t, e) {
                        var i = this,
                            n = t + "_" + e,
                            a = this.iconList.findIndex((function(t) {
                                return t === n
                            }));
                        if (-1 !== a) this.iconList.splice(a, 1);
                        else {
                            var o = this.iconList.findIndex((function(e) {
                                return e.split("_")[0] === t
                            })); - 1 !== o ? this.iconList.splice(o, 1, n) : this.iconList.push(n)
                        }
                        this.activeNodes.forEach((function(t) {
                            t.setIcon(Object(R["a"])(i.iconList))
                        }))
                    }
                }
            }, X = P, V = (i("c8a3"), Object(l["a"])(X, O, I, !1, null, "77ac4a36", null)), G = V.exports, Z = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("el-dialog", {
                    staticClass: "nodeDialog",
                    attrs: {
                        title: "Remark",
                        visible: t.dialogVisible,
                        width: "500"
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, [i("div", {
                    ref: "noteEditor",
                    staticClass: "noteEditor"
                }), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    on: {
                        click: t.cancel
                    }
                }, [t._v("Cancel")]), i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.confirm
                    }
                }, [t._v("Okay")])], 1)])
            }, U = [], J = i("5865"), K = (i("f513"), {
                name: "NodeNote",
                data: function() {
                    return {
                        dialogVisible: !1,
                        note: "",
                        activeNodes: [],
                        editor: null
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("node_active", (function() {
                        if (t.activeNodes = arguments.length <= 1 ? void 0 : arguments[1], t.activeNodes.length > 0) {
                            var e = t.activeNodes[0];
                            t.note = e.getData("note")
                        } else t.note = ""
                    })), this.$bus.$on("showNodeNote", (function() {
                        t.$bus.$emit("startTextEdit"), t.dialogVisible = !0, t.$nextTick((function() {
                            t.initEditor()
                        }))
                    }))
                },
                methods: {
                    initEditor: function() {
                        this.editor || (this.editor = new J["a"]({
                            el: this.$refs.noteEditor,
                            height: "500px",
                            initialEditType: "markdown",
                            previewStyle: "vertical"
                        })), this.editor.setMarkdown(this.note)
                    },
                    cancel: function() {
                        this.dialogVisible = !1, this.$bus.$emit("endTextEdit")
                    },
                    confirm: function() {
                        var t = this;
                        this.note = this.editor.getMarkdown(), this.activeNodes.forEach((function(e) {
                            e.setNote(t.note)
                        })), this.cancel()
                    }
                }
            }), Q = K, q = (i("46fd"), Object(l["a"])(Q, Z, U, !1, null, "5ca1af04", null)), tt = q.exports, et = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("el-dialog", {
                    staticClass: "nodeDialog",
                    attrs: {
                        title: "Label",
                        visible: t.dialogVisible,
                        width: "500"
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, [i("el-input", {
                    attrs: {
                        disabled: t.tagArr.length >= t.max,
                        placeholder: "Please press enter to add"
                    },
                    nativeOn: {
                        keyup: function(e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.add.apply(null, arguments)
                        }
                    },
                    model: {
                        value: t.tag,
                        callback: function(e) {
                            t.tag = e
                        },
                        expression: "tag"
                    }
                }), i("div", {
                    staticClass: "tagList"
                }, t._l(t.tagArr, (function(e, n) {
                    return i("div", {
                        key: n,
                        staticClass: "tagItem",
                        style: {
                            backgroundColor: t.tagColorList[n].background,
                            color: t.tagColorList[n].color
                        }
                    }, [t._v(" " + t._s(e) + " "), i("div", {
                        staticClass: "delBtn",
                        on: {
                            click: function(e) {
                                return t.del(n)
                            }
                        }
                    }, [i("span", {
                        staticClass: "iconfont iconshanchu"
                    })])])
                })), 0), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    on: {
                        click: t.cancel
                    }
                }, [t._v("Cancel")]), i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.confirm
                    }
                }, [t._v("Okay")])], 1)], 1)
            }, it = [], nt = [{
                color: "rgb(77, 65, 0)",
                background: "rgb(255, 244, 179)"
            }, {
                color: "rgb(0, 50, 77)",
                background: "rgb(179, 229, 255)"
            }, {
                color: "rgb(77, 0, 73)",
                background: "rgb(255, 179, 251)"
            }, {
                color: "rgb(57, 77, 0)",
                background: "rgb(236, 255, 179)"
            }, {
                color: "rgb(0, 77, 47)",
                background: "rgb(179, 255, 226)"
            }], at = [{
                name: "logical Structure",
                value: "logicalStructure",
                img: i("0930")
            }, {
                name: "mind Map",
                value: "mindMap",
                img: i("9910")
            }, {
                name: "organization Structure",
                value: "organizationStructure",
                img: i("6967")
            }, {
                name: "Catalog Organization",
                value: "catalogOrganization",
                img: i("ac18")
            }], ot = ["logicalStructure", "mindMap", "catalogOrganization", "organizationStructure"], rt = [{
                name: "Default",
                value: "default",
                img: i("3556")
            }, {
                name: "Classic",
                value: "classic",
                img: i("8617")
            }, {
                name: "Minions",
                value: "minions",
                img: i("f260")
            }, {
                name: "Pink Grape",
                value: "pinkGrape",
                img: i("b2e8")
            }, {
                name: "Mint",
                value: "mint",
                img: i("db73")
            }, {
                name: "Gold",
                value: "gold",
                img: i("6ef5")
            }, {
                name: "Vitality Orange",
                value: "vitalityOrange",
                img: i("08be")
            }, {
                name: "Green Leaf",
                value: "greenLeaf",
                img: i("72ed")
            }, {
                name: "Dark 2",
                value: "dark2",
                img: i("42c9")
            }, {
                name: "Sky Green",
                value: "skyGreen",
                img: i("7f82")
            }, {
                name: "Classic 2",
                value: "classic2",
                img: i("a3a6")
            }, {
                name: "Classic 3",
                value: "classic3",
                img: i("c0d2")
            }, {
                name: "Classic 4",
                value: "classic4",
                img: i("e911")
            }, {
                name: "Classic Green",
                value: "classicGreen",
                img: i("43f9")
            }, {
                name: "Classic Blue",
                value: "classicBlue",
                img: i("0d2c")
            }, {
                name: "Blue Sky",
                value: "blueSky",
                img: i("b533")
            }, {
                name: "Brain Impaired Pink",
                value: "brainImpairedPink",
                img: i("074d")
            }, {
                name: "Dark",
                value: "dark",
                img: i("181c")
            }, {
                name: "Earth Yellow",
                value: "earthYellow",
                img: i("1a34")
            }, {
                name: "Fresh Green",
                value: "freshGreen",
                img: i("7dda")
            }, {
                name: "Fresh Red",
                value: "freshRed",
                img: i("ca62")
            }, {
                name: "Romantic Purple",
                value: "romanticPurple",
                img: i("c612")
            }], st = {
                name: "NodeTag",
                data: function() {
                    return {
                        dialogVisible: !1,
                        tagColorList: nt,
                        tagArr: [],
                        tag: "",
                        activeNodes: [],
                        max: 5
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("node_active", (function() {
                        if (t.activeNodes = arguments.length <= 1 ? void 0 : arguments[1], t.activeNodes.length > 0) {
                            var e = t.activeNodes[0];
                            t.tagArr = e.getData("tag") || []
                        } else t.tagArr = [], t.tag = ""
                    })), this.$bus.$on("showNodeTag", (function() {
                        t.$bus.$emit("startTextEdit"), t.dialogVisible = !0
                    }))
                },
                methods: {
                    add: function() {
                        this.tagArr.push(this.tag), this.tag = ""
                    },
                    del: function(t) {
                        this.tagArr.splice(t, 1)
                    },
                    cancel: function() {
                        this.dialogVisible = !1, this.$bus.$emit("endTextEdit")
                    },
                    confirm: function() {
                        var t = this;
                        this.activeNodes.forEach((function(e) {
                            e.setTag(t.tagArr)
                        })), this.cancel()
                    }
                }
            }, lt = st, ct = (i("52db"), Object(l["a"])(lt, et, it, !1, null, "74e0888a", null)), dt = ct.exports, ht = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("el-dialog", {
                    staticClass: "nodeDialog",
                    attrs: {
                        title: "Export",
                        visible: t.dialogVisible,
                        width: "500"
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, [i("div", [i("div", {
                    staticClass: "nameInputBox"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("File Name")]), i("el-input", {
                    staticStyle: {
                        width: "300px"
                    },
                    attrs: {
                        size: "mini"
                    },
                    model: {
                        value: t.fileName,
                        callback: function(e) {
                            t.fileName = e
                        },
                        expression: "fileName"
                    }
                })], 1), i("el-radio-group", {
                    model: {
                        value: t.exportType,
                        callback: function(e) {
                            t.exportType = e
                        },
                        expression: "exportType"
                    }
                }, [i("el-radio", {
                    attrs: {
                        label: "smm"
                    }
                }, [t._v("SMM file（.smm）")]), i("el-radio", {
                    attrs: {
                        label: "json"
                    }
                }, [t._v("JSON file（.json）")]), i("el-radio", {
                    attrs: {
                        label: "png"
                    }
                }, [t._v("Image file（.png）")]), i("el-radio", {
                    attrs: {
                        label: "svg"
                    }
                }, [t._v("SVG file（.svg）")]), i("el-radio", {
                    attrs: {
                        label: "pdf"
                    }
                }, [t._v("PDF file（.pdf）")])], 1), i("div", {
                    staticClass: "tip"
                }, [t._v("*Note：Use .smm to share with your teammates to update this Taxonomy")])], 1), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    on: {
                        click: t.cancel
                    }
                }, [t._v("Cancel")]), i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.confirm
                    }
                }, [t._v("Okay")])], 1)])
            }, ut = [], pt = {
                name: "Export",
                data: function() {
                    return {
                        dialogVisible: !1,
                        exportType: "smm",
                        fileName: "MCRPL Taxonomy"
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("showExport", (function() {
                        t.dialogVisible = !0
                    }))
                },
                methods: {
                    cancel: function() {
                        this.dialogVisible = !1
                    },
                    confirm: function() {
                        this.$bus.$emit("export", this.exportType, !0, this.fileName), this.$notify.info({
                            title: "Note",
                            message: "If the download has not started, please disable the adblocker and/or reload the page and try again"
                        }), this.cancel()
                    }
                }
            }, ft = pt, mt = (i("8545"), Object(l["a"])(ft, ht, ut, !1, null, "7b541106", null)), vt = mt.exports, gt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("el-dialog", {
                    staticClass: "nodeDialog",
                    attrs: {
                        title: "Import",
                        visible: t.dialogVisible,
                        width: "500"
                    },
                    on: {
                        "update:visible": function(e) {
                            t.dialogVisible = e
                        }
                    }
                }, [i("el-upload", {
                    ref: "upload",
                    attrs: {
                        action: "x",
                        "file-list": t.fileList,
                        "auto-upload": !1,
                        multiple: !1,
                        "on-change": t.onChange,
                        limit: 1,
                        "on-exceed": t.onExceed
                    }
                }, [i("el-button", {
                    attrs: {
                        slot: "trigger",
                        size: "small",
                        type: "primary"
                    },
                    slot: "trigger"
                }, [t._v("Select file")]), i("div", {
                    staticClass: "el-upload__tip",
                    attrs: {
                        slot: "tip"
                    },
                    slot: "tip"
                }, [t._v("Only .smm files can be uploaded")])], 1), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    on: {
                        click: t.cancel
                    }
                }, [t._v("Cancel")]), i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.confirm
                    }
                }, [t._v("Okay")])], 1)], 1)
            }, bt = [], Ct = i("53ca"), yt = (i("b0c0"), {
                name: "Import",
                data: function() {
                    return {
                        dialogVisible: !1,
                        fileList: []
                    }
                },
                watch: {
                    dialogVisible: function(t, e) {
                        !t && e && (this.fileList = [])
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("showImport", (function() {
                        t.dialogVisible = !0
                    }))
                },
                methods: {
                    onChange: function(t) {
                        var e = /\.smm$/;
                        e.test(t.name) ? this.fileList.push(t) : (this.$message.error("Please select .smm file"), this.fileList = [])
                    },
                    onExceed: function() {
                        this.$message.error("At most one file can be selected")
                    },
                    cancel: function() {
                        this.dialogVisible = !1
                    },
                    confirm: function() {
                        var t = this;
                        if (this.fileList.length <= 0) return this.$message.error("Please select a file to import");
                        var e = this.fileList[0],
                            i = new FileReader;
                        i.readAsText(e.raw), i.onload = function(e) {
                            try {
                                var i = JSON.parse(e.target.result);
                                if ("object" !== Object(Ct["a"])(i)) throw new Error("Wrong file content");
                                t.$bus.$emit("setData", i), t.$message.success("Import succeeded")
                            } catch (n) {
                                console.log(n), t.$message.error("File parsing failed")
                            }
                        }, this.cancel()
                    }
                }
            }), xt = yt, wt = (i("b637"), Object(l["a"])(xt, gt, bt, !1, null, "88ad7080", null)), Mt = wt.exports, kt = {
                name: "Toolbar",
                components: {
                    NodeImage: E,
                    NodeHyperlink: B,
                    NodeIcon: G,
                    NodeNote: tt,
                    NodeTag: dt,
                    Export: vt,
                    Import: Mt
                },
                data: function() {
                    return {
                        activeNodes: [],
                        backEnd: !1,
                        forwardEnd: !0,
                        readonly: !1
                    }
                },
                computed: {
                    hasRoot: function() {
                        return this.activeNodes.find((function(t) {
                            return t.isRoot
                        }))
                    },
                    hasGeneralization: function() {
                        return this.activeNodes.find((function(t) {
                            return t.isGeneralization
                        }))
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("mode_change", (function(e) {
                        t.readonly = "readonly" === e
                    })), this.$bus.$on("node_active", (function() {
                        t.activeNodes = arguments.length <= 1 ? void 0 : arguments[1]
                    })), this.$bus.$on("back_forward", (function(e, i) {
                        t.backEnd = e <= 0, t.forwardEnd = e >= i - 1
                    }))
                }
            }, Nt = kt, _t = (i("2851"), Object(l["a"])(Nt, v, g, !1, null, "644d8d4c", null)), zt = _t.exports, Dt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "editContainer"
                }, [i("div", {
                    ref: "mindMapContainer",
                    staticClass: "mindMapContainer"
                }), i("Count"), i("NavigatorToolbar", {
                    attrs: {
                        mindMap: t.mindMap
                    }
                }), i("Outline"), i("Style"), i("BaseStyle", {
                    attrs: {
                        data: t.mindMapData,
                        mindMap: t.mindMap
                    }
                }), i("Theme", {
                    attrs: {
                        mindMap: t.mindMap
                    }
                }), i("Structure", {
                    attrs: {
                        mindMap: t.mindMap
                    }
                }), i("ShortcutKey"), t.mindMap ? i("Contextmenu", {
                    attrs: {
                        mindMap: t.mindMap
                    }
                }) : t._e(), i("NodeNoteContentShow")], 1)
            }, Et = [], Ft = (i("99af"), i("d4ec")), St = i("bee2"), Tt = (i("b693"), i("1cae"), i("bbeb"), i("a1b1"), i("2bb5"), i("15e7"), function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(Ft["a"])(this, t), this.opt = e, this.mindMap = this.opt.mindMap, this.scale = 1, this.sx = 0, this.sy = 0, this.x = 0, this.y = 0, this.firstDrag = !0, this.setTransformData(this.mindMap.opt.viewData), this.bind()
                }
                return Object(St["a"])(t, [{
                    key: "bind",
                    value: function() {
                        var t = this;
                        this.mindMap.keyCommand.addShortcut("Control+=", (function() {
                            t.enlarge()
                        })), this.mindMap.keyCommand.addShortcut("Control+-", (function() {
                            t.narrow()
                        })), this.mindMap.keyCommand.addShortcut("Control+Enter", (function() {
                            t.reset()
                        })), this.mindMap.svg.on("dblclick", (function() {
                            t.reset()
                        })), this.mindMap.event.on("mousedown", (function() {
                            t.sx = t.x, t.sy = t.y
                        })), this.mindMap.event.on("drag", (function(e, i) {
                            e.ctrlKey || (t.firstDrag && (t.firstDrag = !1, t.mindMap.execCommand("CLEAR_ACTIVE_NODE")), t.x = t.sx + i.mousemoveOffset.x, t.y = t.sy + i.mousemoveOffset.y, t.transform())
                        })), this.mindMap.event.on("mouseup", (function() {
                            t.firstDrag = !0
                        })), this.mindMap.event.on("mousewheel", (function(e, i) {
                            "down" === i ? t.enlarge() : t.narrow()
                        }))
                    }
                }, {
                    key: "getTransformData",
                    value: function() {
                        return {
                            transform: this.mindMap.draw.transform(),
                            state: {
                                scale: this.scale,
                                x: this.x,
                                y: this.y,
                                sx: this.sx,
                                sy: this.sy
                            }
                        }
                    }
                }, {
                    key: "setTransformData",
                    value: function(t) {
                        var e = this;
                        t && (Object.keys(t.state).forEach((function(i) {
                            e[i] = t.state[i]
                        })), this.mindMap.draw.transform(Object(f["a"])({}, t.transform)), this.mindMap.emit("view_data_change", this.getTransformData()), this.mindMap.emit("scale", this.scale))
                    }
                }, {
                    key: "translateX",
                    value: function(t) {
                        this.x += t, this.transform()
                    }
                }, {
                    key: "translateY",
                    value: function(t) {
                        this.y += t, this.transform()
                    }
                }, {
                    key: "transform",
                    value: function() {
                        this.mindMap.draw.transform({
                            scale: this.scale,
                            translate: [this.x, this.y]
                        }), this.mindMap.emit("view_data_change", this.getTransformData())
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.scale = 1, this.x = 0, this.y = 0, this.transform()
                    }
                }, {
                    key: "narrow",
                    value: function() {
                        this.scale - this.mindMap.opt.scaleRatio > .1 ? this.scale -= this.mindMap.opt.scaleRatio : this.scale = .1, this.transform(), this.mindMap.emit("scale", this.scale)
                    }
                }, {
                    key: "enlarge",
                    value: function() {
                        this.scale += this.mindMap.opt.scaleRatio, this.transform(), this.mindMap.emit("scale", this.scale)
                    }
                }]), t
            }()), Lt = Tt, At = i("262e"), Bt = i("2caf"), Ot = i("91d2"), It = i.n(Ot), Rt = function(t) {
                Object(At["a"])(i, t);
                var e = Object(Bt["a"])(i);

                function i() {
                    var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(Ft["a"])(this, i), t = e.call(this), t.opt = n, t.mindMap = n.mindMap, t.isLeftMousedown = !1, t.mousedownPos = {
                        x: 0,
                        y: 0
                    }, t.mousemovePos = {
                        x: 0,
                        y: 0
                    }, t.mousemoveOffset = {
                        x: 0,
                        y: 0
                    }, t.bindFn(), t.bind(), t
                }
                return Object(St["a"])(i, [{
                    key: "bindFn",
                    value: function() {
                        this.onDrawClick = this.onDrawClick.bind(this), this.onMousedown = this.onMousedown.bind(this), this.onMousemove = this.onMousemove.bind(this), this.onMouseup = this.onMouseup.bind(this), this.onMousewheel = this.onMousewheel.bind(this), this.onContextmenu = this.onContextmenu.bind(this), this.onSvgMousedown = this.onSvgMousedown.bind(this)
                    }
                }, {
                    key: "bind",
                    value: function() {
                        this.mindMap.svg.on("click", this.onDrawClick), this.mindMap.el.addEventListener("mousedown", this.onMousedown), this.mindMap.svg.on("mousedown", this.onSvgMousedown), window.addEventListener("mousemove", this.onMousemove), window.addEventListener("mouseup", this.onMouseup), -1 != window.navigator.userAgent.toLowerCase().indexOf("firefox") ? this.mindMap.el.addEventListener("DOMMouseScroll", this.onMousewheel) : this.mindMap.el.addEventListener("mousewheel", this.onMousewheel), this.mindMap.svg.on("contextmenu", this.onContextmenu)
                    }
                }, {
                    key: "unbind",
                    value: function() {
                        this.mindMap.svg.off("click", this.onDrawClick), this.mindMap.el.removeEventListener("mousedown", this.onMousedown), window.removeEventListener("mousemove", this.onMousemove), window.removeEventListener("mouseup", this.onMouseup), this.mindMap.el.removeEventListener("mousewheel", this.onMousewheel), this.mindMap.svg.off("contextmenu", this.onContextmenu)
                    }
                }, {
                    key: "onDrawClick",
                    value: function(t) {
                        this.emit("draw_click", t)
                    }
                }, {
                    key: "onSvgMousedown",
                    value: function(t) {
                        this.emit("svg_mousedown", t)
                    }
                }, {
                    key: "onMousedown",
                    value: function(t) {
                        1 === t.which && (this.isLeftMousedown = !0), this.mousedownPos.x = t.clientX, this.mousedownPos.y = t.clientY, this.emit("mousedown", t, this)
                    }
                }, {
                    key: "onMousemove",
                    value: function(t) {
                        this.mousemovePos.x = t.clientX, this.mousemovePos.y = t.clientY, this.mousemoveOffset.x = t.clientX - this.mousedownPos.x, this.mousemoveOffset.y = t.clientY - this.mousedownPos.y, this.emit("mousemove", t, this), this.isLeftMousedown && this.emit("drag", t, this)
                    }
                }, {
                    key: "onMouseup",
                    value: function(t) {
                        this.isLeftMousedown = !1, this.emit("mouseup", t, this)
                    }
                }, {
                    key: "onMousewheel",
                    value: function(t) {
                        var e;
                        t.stopPropagation(), t.preventDefault(), e = (t.wheelDeltaY || t.detail) > 0 ? "up" : "down", this.emit("mousewheel", t, e, this)
                    }
                }, {
                    key: "onContextmenu",
                    value: function(t) {
                        t.preventDefault(), this.emit("contextmenu", t)
                    }
                }]), i
            }(It.a), $t = Rt, jt = i("ade3"), Wt = (i("452e"), i("657b"), i("682c")), Ht = i.n(Wt), Yt = (i("ff28"), i("c47b"), i("84e1"), ["paddingX", "paddingY"]), Pt = function() {
                function t(e, i) {
                    Object(Ft["a"])(this, t), this.ctx = e, this.themeConfig = i
                }
                return Object(St["a"])(t, [{
                    key: "updateThemeConfig",
                    value: function(t) {
                        this.themeConfig = t
                    }
                }, {
                    key: "merge",
                    value: function(t, e, i) {
                        var n = this.themeConfig.node;
                        if (e || Yt.includes(t) ? n = this.themeConfig : this.ctx.isGeneralization ? n = this.themeConfig.generalization : 0 === this.ctx.layerIndex ? n = this.themeConfig.root : 1 === this.ctx.layerIndex && (n = this.themeConfig.second), void 0 !== i ? i : this.ctx.nodeData.data.isActive) {
                            if (this.ctx.nodeData.data.activeStyle && void 0 !== this.ctx.nodeData.data.activeStyle[t]) return this.ctx.nodeData.data.activeStyle[t];
                            if (n.active && n.active[t]) return n.active[t]
                        }
                        return void 0 !== this.ctx.nodeData.data[t] ? this.ctx.nodeData.data[t] : n[t]
                    }
                }, {
                    key: "rect",
                    value: function(t) {
                        t.fill({
                            color: this.merge("fillColor")
                        }).stroke({
                            color: this.merge("borderColor"),
                            width: this.merge("borderWidth"),
                            dasharray: this.merge("borderDasharray")
                        }).radius(this.merge("borderRadius"))
                    }
                }, {
                    key: "text",
                    value: function(t) {
                        t.fill({
                            color: this.merge("color")
                        }).css({
                            "font-family": this.merge("fontFamily"),
                            "font-size": this.merge("fontSize"),
                            "font-weight": this.merge("fontWeight"),
                            "font-style": this.merge("fontStyle"),
                            "text-decoration": this.merge("textDecoration")
                        })
                    }
                }, {
                    key: "domText",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        t.style.fontFamily = this.merge("fontFamily"), t.style.fontSize = this.merge("fontSize") * e + "px", t.style.fontWeight = this.merge("fontWeight") || "normal"
                    }
                }, {
                    key: "tagText",
                    value: function(t, e) {
                        t.fill({
                            color: nt[e].color
                        }).css({
                            "font-size": "12px"
                        })
                    }
                }, {
                    key: "tagRect",
                    value: function(t, e) {
                        t.fill({
                            color: nt[e].background
                        })
                    }
                }, {
                    key: "iconNode",
                    value: function(t) {
                        t.attr({
                            fill: this.merge("color")
                        })
                    }
                }, {
                    key: "line",
                    value: function(t) {
                        t.stroke({
                            width: this.merge("lineWidth", !0),
                            color: this.merge("lineColor", !0)
                        }).fill({
                            color: "none"
                        })
                    }
                }, {
                    key: "generalizationLine",
                    value: function(t) {
                        t.stroke({
                            width: this.merge("generalizationLineWidth", !0),
                            color: this.merge("generalizationLineColor", !0)
                        }).fill({
                            color: "none"
                        })
                    }
                }, {
                    key: "iconBtn",
                    value: function(t, e) {
                        t.fill({
                            color: "#808080"
                        }), e.fill({
                            color: "#fff"
                        })
                    }
                }], [{
                    key: "setBackgroundStyle",
                    value: function(t, e) {
                        var i = e.backgroundColor,
                            n = e.backgroundImage,
                            a = e.backgroundRepeat;
                        t.style.backgroundColor = i, n && (t.style.backgroundImage = "url(".concat(n, ")"), t.style.backgroundRepeat = a)
                    }
                }]), t
            }(), Xt = Pt, Vt = (i("0495"), i("11b0"), i("03ea"), function t(e, i, n, a, o) {
                var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                    l = !1;
                if (n && (l = n(e, i, o, r, s)), !l && e.children && e.children.length > 0) {
                    var c = r + 1;
                    e.children.forEach((function(i, o) {
                        t(i, e, n, a, !1, c, o)
                    }))
                }
                a && a(e, i, o, r, s)
            }), Gt = function(t, e) {
                e(t);
                var i = [t],
                    n = !1;
                while (i.length) {
                    if (n) break;
                    var a = i.shift();
                    a.children && a.children.length && a.children.forEach((function(t) {
                        i.push(t), "stop" === e(t) && (n = !0)
                    }))
                }
            }, Zt = function(t, e, i, n) {
                var a = t / e,
                    o = [];
                if (i && n)
                    if (t <= i && e <= n) o = [t, e];
                    else {
                        var r = i / n;
                        o = a > r ? [a * n, n] : [i, i / a]
                    }
                else i ? o = t <= i ? [t, e] : [i, i / a] : n && (o = e <= n ? [t, e] : [a * n, n]);
                return o
            }, Ut = function(t) {
                t = t.replace(/<br>/gim, "\n");
                var e = document.createElement("div");
                return e.innerHTML = t, t = e.textContent, t
            }, Jt = function(t) {
                try {
                    return JSON.parse(JSON.stringify(t))
                } catch (e) {
                    return null
                }
            }, Kt = function t(e, i) {
                return e.data = Jt(i.data), e.children = [], i.children && i.children.length > 0 && i.children.forEach((function(i, n) {
                    e.children[n] = t({}, i)
                })), e
            }, Qt = function t(e, i) {
                return e.data = Jt(i.nodeData.data), e.children = [], i.children && i.children.length > 0 && i.children.forEach((function(i, n) {
                    e.children[n] = t({}, i)
                })), e
            }, qt = function(t) {
                return new Promise((function(e, i) {
                    var n = new Image;
                    n.setAttribute("crossOrigin", "anonymous"), n.onload = function() {
                        try {
                            var t = document.createElement("canvas");
                            t.width = n.width, t.height = n.height;
                            var a = t.getContext("2d");
                            a.drawImage(n, 0, 0, n.width, n.height), e(t.toDataURL())
                        } catch (o) {
                            i(o)
                        }
                    }, n.onerror = function(t) {
                        i(t)
                    }, n.src = t
                }))
            }, te = function(t, e) {
                var i = document.createElement("a");
                i.href = t, i.download = e, i.click()
            }, ee = function(t) {
                var e = arguments.length > 2 ? arguments[2] : void 0,
                    i = null;
                return function() {
                    i || (i = setTimeout((function() {
                        t.call(e), i = null
                    }), 300))
                }
            }, ie = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                    i = 0,
                    n = t.length;
                if (n <= 0) return e();
                var a = function a() {
                    i >= n ? e() : (t[i](), setTimeout((function() {
                        i++, a()
                    }), 0))
                };
                a()
            }, ne = i("8a19"), ae = '<svg t="1618141562310" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13476" width="200" height="200"><path d="M475.136 327.168v147.968h-147.968v74.24h147.968v147.968h74.24v-147.968h147.968v-74.24h-147.968v-147.968h-74.24z m36.864-222.208c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z" p-id="13477"></path></svg>', oe = '<svg t="1618141589243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13611" width="200" height="200"><path d="M512 105.472c225.28 0 407.04 181.76 407.04 407.04s-181.76 407.04-407.04 407.04-407.04-181.76-407.04-407.04 181.76-407.04 407.04-407.04z m0-74.24c-265.216 0-480.768 215.552-480.768 480.768s215.552 480.768 480.768 480.768 480.768-215.552 480.768-480.768-215.552-480.768-480.768-480.768z" p-id="13612"></path><path d="M252.928 474.624h518.144v74.24h-518.144z" p-id="13613"></path></svg>', re = {
                open: ae,
                close: oe
            }, se = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(Ft["a"])(this, t), this.nodeData = this.handleData(e.data || {}), this.uid = e.uid, this.mindMap = e.mindMap, this.renderer = e.renderer, this.draw = e.draw || null, this.themeConfig = this.mindMap.themeConfig, this.style = new Xt(this, this.themeConfig), this.isRoot = void 0 !== e.isRoot && e.isRoot, this.isGeneralization = void 0 !== e.isGeneralization && e.isGeneralization, this.generalizationBelongNode = null, this.layerIndex = void 0 === e.layerIndex ? 0 : e.layerIndex, this.width = e.width || 0, this.height = e.height || 0, this._left = e.left || 0, this._top = e.top || 0, this.customLeft = e.data.data.customLeft || void 0, this.customTop = e.data.data.customTop || void 0, this.isDrag = !1, this.parent = e.parent || null, this.children = e.children || [], this.group = null, this._imgData = null, this._iconData = null, this._textData = null, this._hyperlinkData = null, this._tagData = null, this._noteData = null, this.noteEl = null, this._expandBtn = null, this._lines = [], this._generalizationLine = null, this._generalizationNode = null, this._rectInfo = {
                        imgContentWidth: 0,
                        imgContentHeight: 0,
                        textContentWidth: 0,
                        textContentHeight: 0
                    }, this._generalizationNodeWidth = 0, this._generalizationNodeHeight = 0, this.textContentItemMargin = this.mindMap.opt.textContentMargin, this.blockContentMargin = this.mindMap.opt.imgTextMargin, this.expandBtnSize = this.mindMap.opt.expandBtnSize, this.initRender = !0, this.getSize()
                }
                return Object(St["a"])(t, [{
                    key: "left",
                    get: function() {
                        return this.customLeft || this._left
                    },
                    set: function(t) {
                        this._left = t
                    }
                }, {
                    key: "top",
                    get: function() {
                        return this.customTop || this._top
                    },
                    set: function(t) {
                        this._top = t
                    }
                }, {
                    key: "updateThemeConfig",
                    value: function() {
                        this.themeConfig = this.mindMap.themeConfig, this.style.updateThemeConfig(this.themeConfig)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.children = [], this.parent = null, this.isRoot = !1, this.layerIndex = 0, this.left = 0, this.top = 0
                    }
                }, {
                    key: "handleData",
                    value: function(t) {
                        return t.data.expand = !1 !== t.data.expand, t.data.isActive = !0 === t.data.isActive, t.children = t.children || [], t
                    }
                }, {
                    key: "hasCustomPosition",
                    value: function() {
                        return void 0 !== this.customLeft && void 0 !== this.customTop
                    }
                }, {
                    key: "ancestorHasCustomPosition",
                    value: function() {
                        var t = this;
                        while (t) {
                            if (t.hasCustomPosition()) return !0;
                            t = t.parent
                        }
                        return !1
                    }
                }, {
                    key: "addChildren",
                    value: function(t) {
                        this.children.push(t)
                    }
                }, {
                    key: "createNodeData",
                    value: function() {
                        this._imgData = this.createImgNode(), this._iconData = this.createIconNode(), this._textData = this.createTextNode(), this._hyperlinkData = this.createHyperlinkNode(), this._tagData = this.createTagNode(), this._noteData = this.createNoteNode(), this.createGeneralizationNode()
                    }
                }, {
                    key: "removeAllEvent",
                    value: function() {
                        this._noteData && this._noteData.node.off(["mouseover", "mouseout"]), this._expandBtn && this._expandBtn.off(["mouseover", "mouseout", "click"]), this.group && this.group.off(["click", "dblclick", "contextmenu", "mousedown", "mouseup"])
                    }
                }, {
                    key: "removeAllNode",
                    value: function() {
                        [this._imgData, this._iconData, this._textData, this._hyperlinkData, this._tagData, this._noteData].forEach((function(t) {
                            t && t.node && t.node.remove()
                        })), this._imgData = null, this._iconData = null, this._textData = null, this._hyperlinkData = null, this._tagData = null, this._noteData = null, this._expandBtn && (this._expandBtn.remove(), this._expandBtn = null), this.group && (this.group.clear(), this.group.remove(), this.group = null), this.removeGeneralization()
                    }
                }, {
                    key: "getSize",
                    value: function() {
                        this.removeAllNode(), this.createNodeData();
                        var t = this.getNodeRect(),
                            e = t.width,
                            i = t.height,
                            n = this.width !== e || this.height !== i;
                        return this.width = e, this.height = i, n
                    }
                }, {
                    key: "getNodeRect",
                    value: function() {
                        var t = this,
                            e = 0,
                            i = 0,
                            n = 0,
                            a = 0;
                        this._imgData && (this._rectInfo.imgContentWidth = e = this._imgData.width, this._rectInfo.imgContentHeight = i = this._imgData.height), this._iconData.length > 0 && (n += this._iconData.reduce((function(e, i) {
                            return a = Math.max(a, i.height), e + (i.width + t.textContentItemMargin)
                        }), 0)), this._textData && (n += this._textData.width, a = Math.max(a, this._textData.height)), this._hyperlinkData && (n += this._hyperlinkData.width, a = Math.max(a, this._hyperlinkData.height)), this._tagData.length > 0 && (n += this._tagData.reduce((function(e, i) {
                            return a = Math.max(a, i.height), e + (i.width + t.textContentItemMargin)
                        }), 0)), this._noteData && (n += this._noteData.width, a = Math.max(a, this._noteData.height)), this._rectInfo.textContentWidth = n, this._rectInfo.textContentHeight = a;
                        var o = i > 0 && a > 0 ? this.blockContentMargin : 0,
                            r = this.getPaddingVale(),
                            s = r.paddingX,
                            l = r.paddingY;
                        return {
                            width: Math.max(e, n) + 2 * s,
                            height: i + a + 2 * l + o
                        }
                    }
                }, {
                    key: "createImgNode",
                    value: function() {
                        var t, e = this.nodeData.data.image;
                        if (e) {
                            var i = this.getImgShowSize(),
                                n = (t = (new ne["d"]).load(e)).size.apply(t, Object(R["a"])(i));
                            return this.nodeData.data.imageTitle && n.attr("title", this.nodeData.data.imageTitle), {
                                node: n,
                                width: i[0],
                                height: i[1]
                            }
                        }
                    }
                }, {
                    key: "getImgShowSize",
                    value: function() {
                        return Zt(this.nodeData.data.imageSize.width, this.nodeData.data.imageSize.height, this.themeConfig.imgMaxWidth, this.themeConfig.imgMaxHeight)
                    }
                }, {
                    key: "createIconNode",
                    value: function() {
                        var t = this.nodeData.data;
                        if (!t.icon || t.icon.length <= 0) return [];
                        var e = this.themeConfig.iconSize;
                        return t.icon.map((function(t) {
                            return {
                                node: Object(ne["f"])(Y.getNodeIconListIcon(t)).size(e, e),
                                width: e,
                                height: e
                            }
                        }))
                    }
                }, {
                    key: "createTextNode",
                    value: function() {
                        var t = this,
                            e = new ne["c"],
                            i = this.getStyle("fontSize", this.isRoot, this.nodeData.data.isActive),
                            n = this.getStyle("lineHeight", this.isRoot, this.nodeData.data.isActive);
                        this.nodeData.data.text.split(/\n/gim).forEach((function(a, o) {
                            var r = (new ne["g"]).text(a);
                            t.style.text(r), r.y(i * n * o), e.add(r)
                        }));
                        var a = e.bbox(),
                            o = a.width,
                            r = a.height;
                        return {
                            node: e,
                            width: o,
                            height: r
                        }
                    }
                }, {
                    key: "createHyperlinkNode",
                    value: function() {
                        var t = this.nodeData.data,
                            e = t.hyperlink,
                            i = t.hyperlinkTitle;
                        if (e) {
                            var n = this.themeConfig.iconSize,
                                a = new ne["f"],
                                o = (new ne["a"]).to(e).target("_blank");
                            o.node.addEventListener("click", (function(t) {
                                t.stopPropagation()
                            })), i && o.attr("title", i), o.rect(n, n).fill({
                                color: "transparent"
                            });
                            var r = Object(ne["f"])(Y.hyperlink).size(n, n);
                            return this.style.iconNode(r), o.add(r), a.add(o), {
                                node: a,
                                width: n,
                                height: n
                            }
                        }
                    }
                }, {
                    key: "createTagNode",
                    value: function() {
                        var t = this,
                            e = this.nodeData.data.tag;
                        if (!e || e.length <= 0) return [];
                        var i = [];
                        return e.slice(0, this.mindMap.opt.maxTag).forEach((function(e, n) {
                            var a = new ne["c"],
                                o = (new ne["g"]).text(e).x(8).cy(10);
                            t.style.tagText(o, n);
                            var r = o.bbox(),
                                s = r.width,
                                l = (r.height, (new ne["e"]).size(s + 16, 20));
                            t.style.tagRect(l, n), a.add(l).add(o), i.push({
                                node: a,
                                width: s + 16,
                                height: 20
                            })
                        })), i
                    }
                }, {
                    key: "createNoteNode",
                    value: function() {
                        var t = this;
                        if (!this.nodeData.data.note) return null;
                        var e = this.themeConfig.iconSize,
                            i = (new ne["f"]).attr("cursor", "pointer");
                        i.add((new ne["e"]).size(e, e).fill({
                            color: "transparent"
                        }));
                        var n = Object(ne["f"])(Y.note).size(e, e);
                        return this.style.iconNode(n), i.add(n), this.mindMap.opt.customNoteContentShow || (this.noteEl || (this.noteEl = document.createElement("div"), this.noteEl.style.cssText = "\n                    position: absolute;\n                    padding: 10px;\n                    border-radius: 5px;\n                    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);\n                    display: none;\n                    background-color: #fff;\n                ", document.body.appendChild(this.noteEl)), this.noteEl.innerText = this.nodeData.data.note), i.on("mouseover", (function() {
                            var n = i.node.getBoundingClientRect(),
                                a = n.left,
                                o = n.top;
                            t.mindMap.opt.customNoteContentShow ? t.mindMap.opt.customNoteContentShow.show(t.nodeData.data.note, a, o + e) : (t.noteEl.style.left = a + "px", t.noteEl.style.top = o + e + "px", t.noteEl.style.display = "block")
                        })), i.on("mouseout", (function() {
                            t.mindMap.opt.customNoteContentShow ? t.mindMap.opt.customNoteContentShow.hide() : t.noteEl.style.display = "none"
                        })), {
                            node: i,
                            width: e,
                            height: e
                        }
                    }
                }, {
                    key: "layout",
                    value: function() {
                        var t = this,
                            e = this.width,
                            i = this.height,
                            n = this.textContentItemMargin,
                            a = this.getPaddingVale(),
                            o = a.paddingY;
                        this.group = new ne["c"], this.isGeneralization && this.generalizationBelongNode && this.group.addClass("generalization_" + this.generalizationBelongNode.uid), this.draw.add(this.group), this.update(!0), this.style.rect(this.group.rect(e, i));
                        var r = 0;
                        this._imgData && (r = this._imgData.height, this.group.add(this._imgData.node), this._imgData.node.cx(e / 2).y(o));
                        var s = new ne["c"],
                            l = 0,
                            c = new ne["c"];
                        if (this._iconData && this._iconData.length > 0) {
                            var d = 0;
                            this._iconData.forEach((function(e) {
                                e.node.x(l + d).y((t._rectInfo.textContentHeight - e.height) / 2), c.add(e.node), d += e.width + n
                            })), s.add(c), l += d
                        }
                        this._textData && (this._textData.node.x(l).y(0), s.add(this._textData.node), l += this._textData.width + n), this._hyperlinkData && (this._hyperlinkData.node.x(l).y((this._rectInfo.textContentHeight - this._hyperlinkData.height) / 2), s.add(this._hyperlinkData.node), l += this._hyperlinkData.width + n);
                        var h = new ne["c"];
                        if (this._tagData && this._tagData.length > 0) {
                            var u = 0;
                            this._tagData.forEach((function(e) {
                                e.node.x(l + u).y((t._rectInfo.textContentHeight - e.height) / 2), h.add(e.node), u += e.width + n
                            })), s.add(h), l += u
                        }
                        this._noteData && (this._noteData.node.x(l).y((this._rectInfo.textContentHeight - this._noteData.height) / 2), s.add(this._noteData.node), l += this._noteData.width), s.translate(e / 2 - s.bbox().width / 2, r + o + (r > 0 && this._rectInfo.textContentHeight > 0 ? this.blockContentMargin : 0)), this.group.add(s), this.group.on("click", (function(e) {
                            t.mindMap.emit("node_click", t, e), t.active(e)
                        })), this.group.on("mousedown", (function(e) {
                            e.stopPropagation(), t.mindMap.emit("node_mousedown", t, e)
                        })), this.group.on("mouseup", (function(e) {
                            e.stopPropagation(), t.mindMap.emit("node_mouseup", t, e)
                        })), this.group.on("dblclick", (function(e) {
                            t.mindMap.opt.readonly || (e.stopPropagation(), t.mindMap.emit("node_dblclick", t, e))
                        })), this.group.on("contextmenu", (function(e) {
                            t.mindMap.opt.readonly || t.isGeneralization || (e.stopPropagation(), e.preventDefault(), t.nodeData.data.isActive && t.renderer.clearActive(), t.active(e), t.mindMap.emit("node_contextmenu", e, t))
                        }))
                    }
                }, {
                    key: "active",
                    value: function(t) {
                        this.mindMap.opt.readonly || (t.stopPropagation(), this.nodeData.data.isActive || (this.mindMap.emit("before_node_active", this, this.renderer.activeNodeList), this.renderer.clearActive(), this.mindMap.execCommand("SET_NODE_ACTIVE", this, !0), this.renderer.addActiveNode(this), this.mindMap.emit("node_active", this, this.renderer.activeNodeList)))
                    }
                }, {
                    key: "renderNode",
                    value: function() {
                        this.removeAllEvent(), this.removeAllNode(), this.createNodeData(), this.layout()
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (this.group) {
                            this._expandBtn && this.nodeData.children.length <= 0 ? this.removeExpandBtn() : !this._expandBtn && this.nodeData.children.length > 0 ? this.renderExpandBtn() : this.updateExpandBtnPos(), this.renderGeneralization();
                            var e = this.group.transform();
                            t ? this.group.translate(this.left - e.translateX, this.top - e.translateY) : this.group.animate(300).translate(this.left - e.translateX, this.top - e.translateY)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.renderLine(), this.initRender ? (this.initRender = !1, this.renderNode()) : this.update(), this.children && this.children.length && !1 !== this.nodeData.data.expand && ie(this.children.map((function(t) {
                            return function() {
                                t.render()
                            }
                        })))
                    }
                }, {
                    key: "remove",
                    value: function() {
                        this.initRender = !0, this.removeAllEvent(), this.removeAllNode(), this.removeLine(), this.children && this.children.length && ie(this.children.map((function(t) {
                            return function() {
                                t.remove()
                            }
                        })))
                    }
                }, {
                    key: "hide",
                    value: function() {
                        if (this.group.hide(), this.hideGeneralization(), this.parent) {
                            var t = this.parent.children.indexOf(this);
                            this.parent._lines[t].hide()
                        }
                        this.children && this.children.length && ie(this.children.map((function(t) {
                            return function() {
                                t.hide()
                            }
                        })))
                    }
                }, {
                    key: "show",
                    value: function() {
                        if (this.group) {
                            if (this.group.show(), this.showGeneralization(), this.parent) {
                                var t = this.parent.children.indexOf(this);
                                this.parent._lines[t].show()
                            }
                            this.children && this.children.length && ie(this.children.map((function(t) {
                                return function() {
                                    t.show()
                                }
                            })))
                        }
                    }
                }, {
                    key: "renderLine",
                    value: function() {
                        var t = this;
                        if (!1 !== this.nodeData.data.expand) {
                            var e = this.nodeData.children.length;
                            e > this._lines.length ? new Array(e - this._lines.length).fill(0).forEach((function() {
                                t._lines.push(t.draw.path())
                            })) : e < this._lines.length && (this._lines.slice(e).forEach((function(t) {
                                t.remove()
                            })), this._lines = this._lines.slice(0, e)), this.renderer.layout.renderLine(this, this._lines), this._lines.forEach((function(e) {
                                t.style.line(e)
                            }))
                        }
                    }
                }, {
                    key: "removeLine",
                    value: function() {
                        this._lines.forEach((function(t) {
                            t.remove()
                        })), this._lines = []
                    }
                }, {
                    key: "checkHasGeneralization",
                    value: function() {
                        return !!this.nodeData.data.generalization
                    }
                }, {
                    key: "createGeneralizationNode",
                    value: function() {
                        !this.isGeneralization && this.checkHasGeneralization() && (this._generalizationLine || (this._generalizationLine = this.draw.path()), this._generalizationNode || (this._generalizationNode = new t({
                            data: {
                                data: this.nodeData.data.generalization
                            },
                            uid: this.mindMap.uid++,
                            renderer: this.renderer,
                            mindMap: this.mindMap,
                            draw: this.draw,
                            isGeneralization: !0
                        }), this._generalizationNodeWidth = this._generalizationNode.width, this._generalizationNodeHeight = this._generalizationNode.height, this._generalizationNode.generalizationBelongNode = this, this.nodeData.data.generalization.isActive && this.renderer.addActiveNode(this._generalizationNode)))
                    }
                }, {
                    key: "updateGeneralization",
                    value: function() {
                        this.removeGeneralization(), this.createGeneralizationNode()
                    }
                }, {
                    key: "renderGeneralization",
                    value: function() {
                        if (!this.isGeneralization) return this.checkHasGeneralization() ? void(!1 !== this.nodeData.data.expand ? (this.createGeneralizationNode(), this.renderer.layout.renderGeneralization(this, this._generalizationLine, this._generalizationNode), this.style.generalizationLine(this._generalizationLine), this._generalizationNode.render()) : this.removeGeneralization()) : (this.removeGeneralization(), this._generalizationNodeWidth = 0, void(this._generalizationNodeHeight = 0))
                    }
                }, {
                    key: "removeGeneralization",
                    value: function() {
                        this._generalizationLine && (this._generalizationLine.remove(), this._generalizationLine = null), this._generalizationNode && (this.renderer.removeActiveNode(this._generalizationNode), this._generalizationNode.remove(), this._generalizationNode = null), this.generalizationBelongNode && this.draw.find(".generalization_" + this.generalizationBelongNode.uid).remove()
                    }
                }, {
                    key: "hideGeneralization",
                    value: function() {
                        this._generalizationLine && this._generalizationLine.hide(), this._generalizationNode && this._generalizationNode.hide()
                    }
                }, {
                    key: "showGeneralization",
                    value: function() {
                        this._generalizationLine && this._generalizationLine.show(), this._generalizationNode && this._generalizationNode.show()
                    }
                }, {
                    key: "updateExpandBtnNode",
                    value: function() {
                        var t;
                        this._expandBtn && this._expandBtn.clear(), t = !1 === this.nodeData.data.expand ? re.open : re.close;
                        var e = Object(ne["f"])(t).size(this.expandBtnSize, this.expandBtnSize),
                            i = (new ne["b"]).size(this.expandBtnSize);
                        e.x(0).y(-this.expandBtnSize / 2), i.x(0).y(-this.expandBtnSize / 2), this.style.iconBtn(e, i), this._expandBtn.add(i).add(e)
                    }
                }, {
                    key: "updateExpandBtnPos",
                    value: function() {
                        this._expandBtn && this.renderer.layout.renderExpandBtn(this, this._expandBtn)
                    }
                }, {
                    key: "renderExpandBtn",
                    value: function() {
                        var t = this;
                        !this.nodeData.children || this.nodeData.children.length <= 0 || this.isRoot || (this._expandBtn = new ne["c"], this.updateExpandBtnNode(), this._expandBtn.on("mouseover", (function(e) {
                            e.stopPropagation(), t._expandBtn.css({
                                cursor: "pointer"
                            })
                        })), this._expandBtn.on("mouseout", (function(e) {
                            e.stopPropagation(), t._expandBtn.css({
                                cursor: "auto"
                            })
                        })), this._expandBtn.on("click", (function(e) {
                            e.stopPropagation(), t.mindMap.execCommand("SET_NODE_EXPAND", t, !t.nodeData.data.expand), t.mindMap.emit("expand_btn_click", t)
                        })), this.group.add(this._expandBtn), this.updateExpandBtnPos())
                    }
                }, {
                    key: "removeExpandBtn",
                    value: function() {
                        this._expandBtn && (this._expandBtn.off(["mouseover", "mouseout", "click"]), this._expandBtn.clear(), this._expandBtn.remove(), this._expandBtn = null)
                    }
                }, {
                    key: "isParent",
                    value: function(t) {
                        if (this === t) return !1;
                        var e = t.parent;
                        while (e) {
                            if (this === e) return !0;
                            e = e.parent
                        }
                        return !1
                    }
                }, {
                    key: "isBrother",
                    value: function(t) {
                        return !(!this.parent || this === t) && this.parent.children.find((function(e) {
                            return e === t
                        }))
                    }
                }, {
                    key: "getPaddingVale",
                    value: function() {
                        return {
                            paddingX: this.getStyle("paddingX", !0, this.nodeData.data.isActive),
                            paddingY: this.getStyle("paddingY", !0, this.nodeData.data.isActive)
                        }
                    }
                }, {
                    key: "getStyle",
                    value: function(t, e, i) {
                        var n = this.style.merge(t, e, i);
                        return void 0 === n ? "" : n
                    }
                }, {
                    key: "setStyle",
                    value: function(t, e, i) {
                        this.mindMap.execCommand("SET_NODE_STYLE", this, t, e, i)
                    }
                }, {
                    key: "getData",
                    value: function(t) {
                        return t ? this.nodeData.data[t] || "" : this.nodeData.data
                    }
                }, {
                    key: "setData",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.mindMap.execCommand("SET_NODE_DATA", this, t)
                    }
                }, {
                    key: "setText",
                    value: function(t) {
                        this.mindMap.execCommand("SET_NODE_TEXT", this, t)
                    }
                }, {
                    key: "setImage",
                    value: function(t) {
                        this.mindMap.execCommand("SET_NODE_IMAGE", this, t)
                    }
                }, {
                    key: "setIcon",
                    value: function(t) {
                        this.mindMap.execCommand("SET_NODE_ICON", this, t)
                    }
                }, {
                    key: "setHyperlink",
                    value: function(t, e) {
                        this.mindMap.execCommand("SET_NODE_HYPERLINK", this, t, e)
                    }
                }, {
                    key: "setNote",
                    value: function(t) {
                        this.mindMap.execCommand("SET_NODE_NOTE", this, t)
                    }
                }, {
                    key: "setTag",
                    value: function(t) {
                        this.mindMap.execCommand("SET_NODE_TAG", this, t)
                    }
                }]), t
            }(), le = se, ce = function() {
                function t(e) {
                    Object(Ft["a"])(this, t), this.renderer = e, this.mindMap = e.mindMap, this.draw = this.mindMap.draw, this.root = null
                }
                return Object(St["a"])(t, [{
                    key: "doLayout",
                    value: function() {
                        throw new Error("【computed】The method is a necessary method and needs to be rewritten by subclasses!")
                    }
                }, {
                    key: "renderLine",
                    value: function() {
                        throw new Error("【renderLine】The method is a necessary method and needs to be rewritten by subclasses!")
                    }
                }, {
                    key: "renderExpandBtn",
                    value: function() {
                        throw new Error("【renderExpandBtn】The method is a necessary method and needs to be rewritten by subclasses!")
                    }
                }, {
                    key: "renderGeneralization",
                    value: function() {}
                }, {
                    key: "createNode",
                    value: function(t, e, i, n) {
                        var a = null;
                        return t && t._node && !this.renderer.reRender ? (a = t._node, a.reset(), a.layerIndex = n) : (a = new le({
                            data: t,
                            uid: this.mindMap.uid++,
                            renderer: this.renderer,
                            mindMap: this.mindMap,
                            draw: this.draw,
                            layerIndex: n
                        }), a.getSize(), t._node = a, t.data.isActive && this.renderer.addActiveNode(a)), i ? (a.isRoot = !0, this.root = a) : (a.parent = e._node, e._node.addChildren(a)), a
                    }
                }, {
                    key: "setNodeCenter",
                    value: function(t) {
                        t.left = (this.mindMap.width - t.width) / 2, t.top = (this.mindMap.height - t.height) / 2
                    }
                }, {
                    key: "updateChildren",
                    value: function(t, e, i) {
                        var n = this;
                        t.forEach((function(t) {
                            t[e] += i, t.children && t.children.length && !t.hasCustomPosition() && n.updateChildren(t.children, e, i)
                        }))
                    }
                }, {
                    key: "quadraticCurvePath",
                    value: function(t, e, i, n) {
                        var a = t + .2 * (i - t),
                            o = e + .8 * (n - e);
                        return "M ".concat(t, ",").concat(e, " Q ").concat(a, ",").concat(o, " ").concat(i, ",").concat(n)
                    }
                }, {
                    key: "cubicBezierPath",
                    value: function(t, e, i, n) {
                        var a = t + (i - t) / 2,
                            o = e,
                            r = a,
                            s = n;
                        return "M ".concat(t, ",").concat(e, " C ").concat(a, ",").concat(o, " ").concat(r, ",").concat(s, " ").concat(i, ",").concat(n)
                    }
                }, {
                    key: "getMarginX",
                    value: function(t) {
                        return 1 === t ? this.mindMap.themeConfig.second.marginX : this.mindMap.themeConfig.node.marginX
                    }
                }, {
                    key: "getMarginY",
                    value: function(t) {
                        return 1 === t ? this.mindMap.themeConfig.second.marginY : this.mindMap.themeConfig.node.marginY
                    }
                }, {
                    key: "getNodeWidthWithGeneralization",
                    value: function(t) {
                        return Math.max(t.width, t.checkHasGeneralization() ? t._generalizationNodeWidth : 0)
                    }
                }, {
                    key: "getNodeHeightWithGeneralization",
                    value: function(t) {
                        return Math.max(t.height, t.checkHasGeneralization() ? t._generalizationNodeHeight : 0)
                    }
                }, {
                    key: "getNodeBoundaries",
                    value: function(t, e, i) {
                        var n = this.mindMap.themeConfig,
                            a = n.generalizationLineMargin,
                            o = n.generalizationNodeMargin,
                            r = function t(i) {
                                var n = 1 / 0,
                                    a = -1 / 0,
                                    r = 1 / 0,
                                    s = -1 / 0;
                                i.children && i.children.length > 0 && i.children.forEach((function(i) {
                                    var l = t(i),
                                        c = l.left,
                                        d = l.right,
                                        h = l.top,
                                        u = l.bottom,
                                        p = i.checkHasGeneralization() && i.nodeData.data.expand ? i._generalizationNodeWidth + o : 0,
                                        f = i.checkHasGeneralization() && i.nodeData.data.expand ? i._generalizationNodeHeight + o : 0;
                                    c - ("h" === e ? p : 0) < n && (n = c - ("h" === e ? p : 0)), d + ("h" === e ? p : 0) > a && (a = d + ("h" === e ? p : 0)), h < r && (r = h), u + ("v" === e ? f : 0) > s && (s = u + ("v" === e ? f : 0))
                                }));
                                var l = {
                                    left: i.left,
                                    right: i.left + i.width,
                                    top: i.top,
                                    bottom: i.top + i.height
                                };
                                return {
                                    left: l.left < n ? l.left : n,
                                    right: l.right > a ? l.right : a,
                                    top: l.top < r ? l.top : r,
                                    bottom: l.bottom > s ? l.bottom : s
                                }
                            },
                            s = r(t),
                            l = s.left,
                            c = s.right,
                            d = s.top,
                            h = s.bottom;
                        return {
                            left: l,
                            right: c,
                            top: d,
                            bottom: h,
                            generalizationLineMargin: a,
                            generalizationNodeMargin: o
                        }
                    }
                }]), t
            }(), de = ce, he = function(t) {
                Object(At["a"])(i, t);
                var e = Object(Bt["a"])(i);

                function i() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(Ft["a"])(this, i), e.call(this, t)
                }
                return Object(St["a"])(i, [{
                    key: "doLayout",
                    value: function(t) {
                        var e = this,
                            i = [function() {
                                e.computedBaseValue()
                            }, function() {
                                e.computedTopValue()
                            }, function() {
                                e.adjustTopValue()
                            }, function() {
                                t(e.root)
                            }];
                        ie(i)
                    }
                }, {
                    key: "computedBaseValue",
                    value: function() {
                        var t = this;
                        Vt(this.renderer.renderTree, null, (function(e, i, n, a) {
                            var o = t.createNode(e, i, n, a);
                            if (n ? t.setNodeCenter(o) : o.left = i._node.left + i._node.width + t.getMarginX(a), !e.data.expand) return !0
                        }), (function(e, i, n, a) {
                            var o = !1 === e.data.expand ? 0 : e._node.children.length;
                            e._node.childrenAreaHeight = o ? e._node.children.reduce((function(t, e) {
                                return t + e.height
                            }), 0) + (o + 1) * t.getMarginY(a + 1) : 0
                        }), !0, 0)
                    }
                }, {
                    key: "computedTopValue",
                    value: function() {
                        var t = this;
                        Vt(this.root, null, (function(e, i, n, a) {
                            if (e.nodeData.data.expand && e.children && e.children.length) {
                                var o = t.getMarginY(a + 1),
                                    r = e.top + e.height / 2 - e.childrenAreaHeight / 2,
                                    s = r + o;
                                e.children.forEach((function(t) {
                                    t.top = s, s += t.height + o
                                }))
                            }
                        }), null, !0)
                    }
                }, {
                    key: "adjustTopValue",
                    value: function() {
                        var t = this;
                        Vt(this.root, null, (function(e, i, n, a) {
                            if (e.nodeData.data.expand) {
                                var o = e.childrenAreaHeight - 2 * t.getMarginY(a + 1) - e.height;
                                o > 0 && t.updateBrothers(e, o / 2)
                            }
                        }), null, !0)
                    }
                }, {
                    key: "updateBrothers",
                    value: function(t, e) {
                        var i = this;
                        if (t.parent) {
                            var n = t.parent.children,
                                a = n.findIndex((function(e) {
                                    return e === t
                                }));
                            n.forEach((function(n, o) {
                                if (n !== t && !n.hasCustomPosition()) {
                                    var r = 0;
                                    o < a ? r = -e : o > a && (r = e), n.top += r, n.children && n.children.length && i.updateChildren(n.children, "top", r)
                                }
                            })), this.updateBrothers(t.parent, e)
                        }
                    }
                }, {
                    key: "renderLine",
                    value: function(t, e) {
                        var i = this;
                        if (t.children.length <= 0) return [];
                        var n = t.left,
                            a = t.top,
                            o = t.width,
                            r = t.height,
                            s = t.expandBtnSize;
                        t.children.forEach((function(l, c) {
                            var d = 0 === t.layerIndex ? n + o / 2 : n + o + s,
                                h = a + r / 2,
                                u = l.left,
                                p = l.top + l.height / 2,
                                f = "";
                            f = t.isRoot ? i.quadraticCurvePath(d, h, u, p) : i.cubicBezierPath(d, h, u, p), e[c].plot(f)
                        }))
                    }
                }, {
                    key: "renderExpandBtn",
                    value: function(t, e) {
                        var i = t.width,
                            n = t.height,
                            a = e.transform(),
                            o = a.translateX,
                            r = a.translateY;
                        e.translate(i - o, n / 2 - r)
                    }
                }, {
                    key: "renderGeneralization",
                    value: function(t, e, i) {
                        var n = this.getNodeBoundaries(t, "h"),
                            a = n.top,
                            o = n.bottom,
                            r = n.right,
                            s = n.generalizationLineMargin,
                            l = n.generalizationNodeMargin,
                            c = r + s,
                            d = a,
                            h = r + s,
                            u = o,
                            p = c + 20,
                            f = d + (u - d) / 2,
                            m = "M ".concat(c, ",").concat(d, " Q ").concat(p, ",").concat(f, " ").concat(h, ",").concat(u);
                        e.plot(m), i.left = r + l, i.top = a + (o - a - i.height) / 2
                    }
                }]), i
            }(de), ue = he, pe = (i("83d8"), function(t) {
                Object(At["a"])(i, t);
                var e = Object(Bt["a"])(i);

                function i() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(Ft["a"])(this, i), e.call(this, t)
                }
                return Object(St["a"])(i, [{
                    key: "doLayout",
                    value: function(t) {
                        var e = this,
                            i = [function() {
                                e.computedBaseValue()
                            }, function() {
                                e.computedTopValue()
                            }, function() {
                                e.adjustTopValue()
                            }, function() {
                                t(e.root)
                            }];
                        ie(i)
                    }
                }, {
                    key: "computedBaseValue",
                    value: function() {
                        var t = this;
                        Vt(this.renderer.renderTree, null, (function(e, i, n, a, o) {
                            var r = t.createNode(e, i, n, a);
                            if (n ? t.setNodeCenter(r) : (i._node.dir ? r.dir = i._node.dir : r.dir = o % 2 === 0 ? "right" : "left", r.left = "right" === r.dir ? i._node.left + i._node.width + t.getMarginX(a) : i._node.left - t.getMarginX(a) - r.width), !e.data.expand) return !0
                        }), (function(e, i, n, a) {
                            if (!e.data.expand) return e._node.leftChildrenAreaHeight = 0, void(e._node.rightChildrenAreaHeight = 0);
                            var o = 0,
                                r = 0,
                                s = 0,
                                l = 0;
                            e._node.children.forEach((function(t) {
                                "left" === t.dir ? (o++, s += t.height) : (r++, l += t.height)
                            })), e._node.leftChildrenAreaHeight = s + (o + 1) * t.getMarginY(a + 1), e._node.rightChildrenAreaHeight = l + (r + 1) * t.getMarginY(a + 1)
                        }), !0, 0)
                    }
                }, {
                    key: "computedTopValue",
                    value: function() {
                        var t = this;
                        Vt(this.root, null, (function(e, i, n, a) {
                            if (e.nodeData.data.expand && e.children && e.children.length) {
                                var o = t.getMarginY(a + 1),
                                    r = e.top + e.height / 2 + o,
                                    s = r - e.leftChildrenAreaHeight / 2,
                                    l = r - e.rightChildrenAreaHeight / 2;
                                e.children.forEach((function(t) {
                                    "left" === t.dir ? (t.top = s, s += t.height + o) : (t.top = l, l += t.height + o)
                                }))
                            }
                        }), null, !0)
                    }
                }, {
                    key: "adjustTopValue",
                    value: function() {
                        var t = this;
                        Vt(this.root, null, (function(e, i, n, a) {
                            if (e.nodeData.data.expand) {
                                var o = 2 * t.getMarginY(a + 1) + e.height,
                                    r = e.leftChildrenAreaHeight - o,
                                    s = e.rightChildrenAreaHeight - o;
                                (r > 0 || s > 0) && t.updateBrothers(e, r / 2, s / 2)
                            }
                        }), null, !0)
                    }
                }, {
                    key: "updateBrothers",
                    value: function(t, e, i) {
                        var n = this;
                        if (t.parent) {
                            var a = t.parent.children.filter((function(e) {
                                    return e.dir === t.dir
                                })),
                                o = a.findIndex((function(e) {
                                    return e === t
                                }));
                            a.forEach((function(t, a) {
                                if (!t.hasCustomPosition()) {
                                    var r = 0,
                                        s = "left" === t.dir ? e : i;
                                    a < o ? r = -s : a > o && (r = s), t.top += r, t.children && t.children.length && n.updateChildren(t.children, "top", r)
                                }
                            })), this.updateBrothers(t.parent, e, i)
                        }
                    }
                }, {
                    key: "renderLine",
                    value: function(t, e) {
                        var i = this;
                        if (t.children.length <= 0) return [];
                        var n = t.left,
                            a = t.top,
                            o = t.width,
                            r = t.height,
                            s = t.expandBtnSize;
                        t.children.forEach((function(l, c) {
                            var d = 0 === t.layerIndex ? n + o / 2 : "left" === l.dir ? n - s : n + o + 20,
                                h = a + r / 2,
                                u = "left" === l.dir ? l.left + l.width : l.left,
                                p = l.top + l.height / 2,
                                f = "";
                            f = t.isRoot ? i.quadraticCurvePath(d, h, u, p) : i.cubicBezierPath(d, h, u, p), e[c].plot(f)
                        }))
                    }
                }, {
                    key: "renderExpandBtn",
                    value: function(t, e) {
                        var i = t.width,
                            n = t.height,
                            a = t.expandBtnSize,
                            o = e.transform(),
                            r = o.translateX,
                            s = o.translateY,
                            l = ("left" === t.dir ? 0 - a : i) - r,
                            c = n / 2 - s;
                        e.translate(l, c)
                    }
                }, {
                    key: "renderGeneralization",
                    value: function(t, e, i) {
                        var n = "left" === t.dir,
                            a = this.getNodeBoundaries(t, "h", n),
                            o = a.top,
                            r = a.bottom,
                            s = a.left,
                            l = a.right,
                            c = a.generalizationLineMargin,
                            d = a.generalizationNodeMargin,
                            h = n ? s - c : l + c,
                            u = h,
                            p = o,
                            f = h,
                            m = r,
                            v = u + (n ? -20 : 20),
                            g = p + (m - p) / 2,
                            b = "M ".concat(u, ",").concat(p, " Q ").concat(v, ",").concat(g, " ").concat(f, ",").concat(m);
                        e.plot(b), i.left = h + (n ? -d : d) - (n ? i.width : 0), i.top = o + (r - o - i.height) / 2
                    }
                }]), i
            }(de)), fe = pe, me = function(t) {
                Object(At["a"])(i, t);
                var e = Object(Bt["a"])(i);

                function i() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(Ft["a"])(this, i), e.call(this, t)
                }
                return Object(St["a"])(i, [{
                    key: "doLayout",
                    value: function(t) {
                        var e = this,
                            i = [function() {
                                e.computedBaseValue()
                            }, function() {
                                e.computedLeftTopValue()
                            }, function() {
                                e.adjustLeftTopValue()
                            }, function() {
                                t(e.root)
                            }];
                        ie(i)
                    }
                }, {
                    key: "computedBaseValue",
                    value: function() {
                        var t = this;
                        Vt(this.renderer.renderTree, null, (function(e, i, n, a) {
                            var o = t.createNode(e, i, n, a);
                            if (n ? t.setNodeCenter(o) : i._node.isRoot && (o.top = i._node.top + i._node.height + t.getMarginX(a)), !e.data.expand) return !0
                        }), (function(e, i, n, a) {
                            if (n) {
                                var o = !1 === e.data.expand ? 0 : e._node.children.length;
                                e._node.childrenAreaWidth = o ? e._node.children.reduce((function(t, e) {
                                    return t + e.width
                                }), 0) + (o + 1) * t.getMarginX(a + 1) : 0
                            }
                        }), !0, 0)
                    }
                }, {
                    key: "computedLeftTopValue",
                    value: function() {
                        var t = this;
                        Vt(this.root, null, (function(e, i, n, a) {
                            if (e.nodeData.data.expand && e.children && e.children.length) {
                                var o = t.getMarginX(a + 1),
                                    r = t.getMarginY(a + 1);
                                if (n) {
                                    var s = e.left + e.width / 2 - e.childrenAreaWidth / 2,
                                        l = s + o;
                                    e.children.forEach((function(t) {
                                        t.left = l, l += t.width + o
                                    }))
                                } else {
                                    var c = e.top + e.height + r + e.expandBtnSize;
                                    e.children.forEach((function(t) {
                                        t.left = e.left + .5 * e.width, t.top = c, c += t.height + r + e.expandBtnSize
                                    }))
                                }
                            }
                        }), null, !0)
                    }
                }, {
                    key: "adjustLeftTopValue",
                    value: function() {
                        var t = this;
                        Vt(this.root, null, (function(e, i, n, a) {
                            if (e.nodeData.data.expand) {
                                if (i && i.isRoot) {
                                    var o = t.getNodeAreaWidth(e),
                                        r = o - e.width;
                                    r > 0 && t.updateBrothersLeft(e, r / 2)
                                }
                                var s = e.children.length;
                                if (i && !i.isRoot && s > 0) {
                                    var l = t.getMarginY(a + 1),
                                        c = e.children.reduce((function(t, e) {
                                            return t + e.height
                                        }), 0) + (s + 1) * l + s * e.expandBtnSize;
                                    t.updateBrothersTop(e, c)
                                }
                            }
                        }), null, !0)
                    }
                }, {
                    key: "getNodeAreaWidth",
                    value: function(t) {
                        var e = [],
                            i = function t(i, n) {
                                i.children.length ? (n += i.width / 2, i.children.forEach((function(e) {
                                    t(e, n)
                                }))) : (n += i.width, e.push(n))
                            };
                        return i(t, 0), Math.max.apply(Math, e)
                    }
                }, {
                    key: "updateBrothersLeft",
                    value: function(t, e) {
                        var i = this;
                        if (t.parent) {
                            var n = t.parent.children,
                                a = n.findIndex((function(e) {
                                    return e === t
                                }));
                            if ((0 === a || a === n.length - 1) && n.length > 1) {
                                var o = 0 === a ? -e : e;
                                t.left += o, t.children && t.children.length && !t.hasCustomPosition() && this.updateChildren(t.children, "left", o)
                            }
                            n.forEach((function(t, n) {
                                if (!t.hasCustomPosition()) {
                                    var o = 0;
                                    n < a ? o = -e : n > a && (o = e), t.left += o, t.children && t.children.length && i.updateChildren(t.children, "left", o)
                                }
                            })), this.updateBrothersLeft(t.parent, e)
                        }
                    }
                }, {
                    key: "updateBrothersTop",
                    value: function(t, e) {
                        var i = this;
                        if (t.parent && !t.parent.isRoot) {
                            var n = t.parent.children,
                                a = n.findIndex((function(e) {
                                    return e === t
                                }));
                            n.forEach((function(t, n) {
                                if (!t.hasCustomPosition()) {
                                    var o = 0;
                                    n > a && (o = e), t.top += o, t.children && t.children.length && i.updateChildren(t.children, "top", o)
                                }
                            })), this.updateBrothersTop(t.parent, e)
                        }
                    }
                }, {
                    key: "renderLine",
                    value: function(t, e) {
                        if (t.children.length <= 0) return [];
                        var i = t.left,
                            n = t.top,
                            a = t.width,
                            o = t.height,
                            r = t.expandBtnSize,
                            s = t.children.length,
                            l = this.getMarginX(t.layerIndex + 1);
                        if (t.isRoot) {
                            var c = i + a / 2,
                                d = n + o,
                                h = .7 * l,
                                u = 1 / 0,
                                p = -1 / 0;
                            t.children.forEach((function(t, i) {
                                var n = t.left + t.width / 2,
                                    a = t.top;
                                n < u && (u = n), n > p && (p = n);
                                var o = "M ".concat(n, ",").concat(d + h, " L ").concat(n, ",").concat(d + h > a ? a + t.height : a);
                                e[i].plot(o)
                            })), u = Math.min(u, c), p = Math.max(p, c);
                            var f = this.draw.path();
                            if (t.style.line(f), f.plot("M ".concat(c, ",").concat(d, " L ").concat(c, ",").concat(d + h)), t._lines.push(f), s > 0) {
                                var m = this.draw.path();
                                t.style.line(m), m.plot("M ".concat(u, ",").concat(d + h, " L ").concat(p, ",").concat(d + h)), t._lines.push(m)
                            }
                        } else {
                            var v = n + o,
                                g = -1 / 0,
                                b = t.left + .3 * t.width;
                            if (t.children.forEach((function(i, a) {
                                    var o = i.top + i.height / 2;
                                    o > g && (g = o);
                                    var r = "",
                                        s = i.left,
                                        l = i.left + i.width < b,
                                        c = !1;
                                    l ? s = i.left + i.width : i.left < b && i.left + i.width > b && (c = !0, o = i.top, g = o), o > n && o < v ? r = "M ".concat(l ? t.left : t.left + t.width, ",").concat(o, " L ").concat(s, ",").concat(o) : o < v ? (c && (o = i.top + i.height, s = b), r = "M ".concat(b, ",").concat(n, " L ").concat(b, ",").concat(o, " L ").concat(s, ",").concat(o)) : (c && (s = b), r = "M ".concat(b, ",").concat(o, " L ").concat(s, ",").concat(o)), e[a].plot(r)
                                })), s > 0) {
                                var C = this.draw.path();
                                r = s > 0 ? r : 0, t.style.line(C), g < v + r ? C.hide() : (C.plot("M ".concat(b, ",").concat(v + r, " L ").concat(b, ",").concat(g)), C.show()), t._lines.push(C)
                            }
                        }
                    }
                }, {
                    key: "renderExpandBtn",
                    value: function(t, e) {
                        var i = t.width,
                            n = t.height,
                            a = t.expandBtnSize,
                            o = t.isRoot;
                        if (!o) {
                            var r = e.transform(),
                                s = r.translateX,
                                l = r.translateY;
                            e.translate(.3 * i - a / 2 - s, n + a / 2 - l)
                        }
                    }
                }, {
                    key: "renderGeneralization",
                    value: function(t, e, i) {
                        var n = this.getNodeBoundaries(t, "h"),
                            a = n.top,
                            o = n.bottom,
                            r = n.right,
                            s = n.generalizationLineMargin,
                            l = n.generalizationNodeMargin,
                            c = r + s,
                            d = a,
                            h = r + s,
                            u = o,
                            p = c + 20,
                            f = d + (u - d) / 2,
                            m = "M ".concat(c, ",").concat(d, " Q ").concat(p, ",").concat(f, " ").concat(h, ",").concat(u);
                        e.plot(m), i.left = r + l, i.top = a + (o - a - i.height) / 2
                    }
                }]), i
            }(de), ve = me, ge = function(t) {
                Object(At["a"])(i, t);
                var e = Object(Bt["a"])(i);

                function i() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object(Ft["a"])(this, i), e.call(this, t)
                }
                return Object(St["a"])(i, [{
                    key: "doLayout",
                    value: function(t) {
                        var e = this,
                            i = [function() {
                                e.computedBaseValue()
                            }, function() {
                                e.computedLeftValue()
                            }, function() {
                                e.adjustLeftValue()
                            }, function() {
                                t(e.root)
                            }];
                        ie(i)
                    }
                }, {
                    key: "computedBaseValue",
                    value: function() {
                        var t = this;
                        Vt(this.renderer.renderTree, null, (function(e, i, n, a) {
                            var o = t.createNode(e, i, n, a);
                            if (n ? t.setNodeCenter(o) : o.top = i._node.top + i._node.height + t.getMarginX(a), !e.data.expand) return !0
                        }), (function(e, i, n, a) {
                            var o = !1 === e.data.expand ? 0 : e._node.children.length;
                            e._node.childrenAreaWidth = o ? e._node.children.reduce((function(t, e) {
                                return t + e.width
                            }), 0) + (o + 1) * t.getMarginY(a + 1) : 0
                        }), !0, 0)
                    }
                }, {
                    key: "computedLeftValue",
                    value: function() {
                        var t = this;
                        Vt(this.root, null, (function(e, i, n, a) {
                            if (e.nodeData.data.expand && e.children && e.children.length) {
                                var o = t.getMarginY(a + 1),
                                    r = e.left + e.width / 2 - e.childrenAreaWidth / 2,
                                    s = r + o;
                                e.children.forEach((function(t) {
                                    t.left = s, s += t.width + o
                                }))
                            }
                        }), null, !0)
                    }
                }, {
                    key: "adjustLeftValue",
                    value: function() {
                        var t = this;
                        Vt(this.root, null, (function(e, i, n, a) {
                            if (e.nodeData.data.expand) {
                                var o = e.childrenAreaWidth - 2 * t.getMarginY(a + 1) - e.width;
                                o > 0 && t.updateBrothers(e, o / 2)
                            }
                        }), null, !0)
                    }
                }, {
                    key: "updateBrothers",
                    value: function(t, e) {
                        var i = this;
                        if (t.parent) {
                            var n = t.parent.children,
                                a = n.findIndex((function(e) {
                                    return e === t
                                }));
                            n.forEach((function(t, n) {
                                if (!t.hasCustomPosition()) {
                                    var o = 0;
                                    n < a ? o = -e : n > a && (o = e), t.left += o, t.children && t.children.length && i.updateChildren(t.children, "left", o)
                                }
                            })), this.updateBrothers(t.parent, e)
                        }
                    }
                }, {
                    key: "renderLine",
                    value: function(t, e) {
                        if (t.children.length <= 0) return [];
                        var i = t.left,
                            n = t.top,
                            a = t.width,
                            o = t.height,
                            r = t.expandBtnSize,
                            s = t.isRoot,
                            l = i + a / 2,
                            c = n + o,
                            d = this.getMarginX(t.layerIndex + 1),
                            h = .7 * d,
                            u = 1 / 0,
                            p = -1 / 0,
                            f = t.children.length;
                        t.children.forEach((function(t, i) {
                            var n = t.left + t.width / 2,
                                a = c + h > t.top ? t.top + t.height : t.top;
                            n < u && (u = n), n > p && (p = n);
                            var o = "M ".concat(n, ",").concat(c + h, " L ").concat(n, ",").concat(a);
                            e[i].plot(o)
                        })), u = Math.min(l, u), p = Math.max(l, p);
                        var m = this.draw.path();
                        if (t.style.line(m), r = f > 0 && !s ? r : 0, m.plot("M ".concat(l, ",").concat(c + r, " L ").concat(l, ",").concat(c + h)), t._lines.push(m), f > 0) {
                            var v = this.draw.path();
                            t.style.line(v), v.plot("M ".concat(u, ",").concat(c + h, " L ").concat(p, ",").concat(c + h)), t._lines.push(v)
                        }
                    }
                }, {
                    key: "renderExpandBtn",
                    value: function(t, e) {
                        var i = t.width,
                            n = t.height,
                            a = t.expandBtnSize,
                            o = e.transform(),
                            r = o.translateX,
                            s = o.translateY;
                        e.translate(i / 2 - a / 2 - r, n + a / 2 - s)
                    }
                }, {
                    key: "renderGeneralization",
                    value: function(t, e, i) {
                        var n = this.getNodeBoundaries(t, "v"),
                            a = n.bottom,
                            o = n.left,
                            r = n.right,
                            s = n.generalizationLineMargin,
                            l = n.generalizationNodeMargin,
                            c = o,
                            d = a + s,
                            h = r,
                            u = a + s,
                            p = c + (h - c) / 2,
                            f = d + 20,
                            m = "M ".concat(c, ",").concat(d, " Q ").concat(p, ",").concat(f, " ").concat(h, ",").concat(u);
                        e.plot(m), i.top = a + l, i.left = o + (r - o - i.width) / 2
                    }
                }]), i
            }(de), be = ge, Ce = (i("4358"), function() {
                function t(e) {
                    Object(Ft["a"])(this, t), this.renderer = e, this.mindMap = e.mindMap, this.textEditNode = null, this.showTextEdit = !1, this.bindEvent()
                }
                return Object(St["a"])(t, [{
                    key: "bindEvent",
                    value: function() {
                        var t = this;
                        this.show = this.show.bind(this), this.mindMap.on("node_dblclick", this.show), this.mindMap.on("draw_click", (function() {
                            t.hideEditTextBox()
                        })), this.mindMap.on("expand_btn_click", (function() {
                            t.hideEditTextBox()
                        })), this.mindMap.on("before_node_active", (function() {
                            t.hideEditTextBox()
                        })), this.mindMap.keyCommand.addShortcut("F2", (function() {
                            t.renderer.activeNodeList.length <= 0 || t.show(t.renderer.activeNodeList[0])
                        }))
                    }
                }, {
                    key: "registerTmpShortcut",
                    value: function() {
                        var t = this;
                        this.mindMap.keyCommand.addShortcut("Enter", (function() {
                            t.hideEditTextBox()
                        }))
                    }
                }, {
                    key: "show",
                    value: function(t) {
                        this.showEditTextBox(t, t._textData.node.node.getBoundingClientRect())
                    }
                }, {
                    key: "showEditTextBox",
                    value: function(t, e) {
                        this.mindMap.emit("before_show_text_edit"), this.registerTmpShortcut(), this.textEditNode || (this.textEditNode = document.createElement("div"), this.textEditNode.style.cssText = "position:fixed;box-sizing: border-box;background-color:#fff;box-shadow: 0 0 20px rgba(0,0,0,.5);padding: 3px 5px;margin-left: -5px;margin-top: -3px;outline: none;", this.textEditNode.setAttribute("contenteditable", !0), document.body.appendChild(this.textEditNode)), t.style.domText(this.textEditNode, this.mindMap.view.scale), this.textEditNode.innerHTML = t.nodeData.data.text.split(/\n/gim).join("<br>"), this.textEditNode.style.minWidth = e.width + 10 + "px", this.textEditNode.style.minHeight = e.height + 6 + "px", this.textEditNode.style.left = e.left + "px", this.textEditNode.style.top = e.top + "px", this.textEditNode.style.display = "block", this.showTextEdit = !0, this.selectNodeText()
                    }
                }, {
                    key: "selectNodeText",
                    value: function() {
                        var t = window.getSelection(),
                            e = document.createRange();
                        e.selectNodeContents(this.textEditNode), t.removeAllRanges(), t.addRange(e)
                    }
                }, {
                    key: "hideEditTextBox",
                    value: function() {
                        var t = this;
                        this.showTextEdit && (this.renderer.activeNodeList.forEach((function(e) {
                            var i = Ut(t.textEditNode.innerHTML);
                            t.mindMap.execCommand("SET_NODE_TEXT", e, i), e.isGeneralization && e.generalizationBelongNode.updateGeneralization(), t.mindMap.render()
                        })), this.mindMap.emit("hide_text_edit", this.textEditNode, this.renderer.activeNodeList), this.textEditNode.style.display = "none", this.textEditNode.innerHTML = "", this.textEditNode.style.fontFamily = "inherit", this.textEditNode.style.fontSize = "inherit", this.textEditNode.style.fontWeight = "normal", this.showTextEdit = !1)
                    }
                }]), t
            }()), ye = {
                logicalStructure: ue,
                mindMap: fe,
                catalogOrganization: ve,
                organizationStructure: be
            }, xe = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(Ft["a"])(this, t), this.opt = e, this.mindMap = e.mindMap, this.themeConfig = this.mindMap.themeConfig, this.draw = this.mindMap.draw, this.renderTree = Ht()({}, this.mindMap.opt.data || {}), this.reRender = !1, this.activeNodeList = [], this.root = null, this.textEdit = new Ce(this), this.setLayout(), this.bindEvent(), this.registerCommands(), this.registerShortcutKeys()
                }
                return Object(St["a"])(t, [{
                    key: "setLayout",
                    value: function() {
                        this.layout = new(ye[this.mindMap.opt.layout] ? ye[this.mindMap.opt.layout] : ye.logicalStructure)(this)
                    }
                }, {
                    key: "bindEvent",
                    value: function() {
                        var t = this;
                        this.mindMap.on("draw_click", (function() {
                            t.activeNodeList.length > 0 && t.mindMap.execCommand("CLEAR_ACTIVE_NODE")
                        }))
                    }
                }, {
                    key: "registerCommands",
                    value: function() {
                        this.selectAll = this.selectAll.bind(this), this.mindMap.command.add("SELECT_ALL", this.selectAll), this.back = this.back.bind(this), this.mindMap.command.add("BACK", this.back), this.forward = this.forward.bind(this), this.mindMap.command.add("FORWARD", this.forward), this.insertNode = this.insertNode.bind(this), this.mindMap.command.add("INSERT_NODE", this.insertNode), this.insertChildNode = this.insertChildNode.bind(this), this.mindMap.command.add("INSERT_CHILD_NODE", this.insertChildNode), this.upNode = this.upNode.bind(this), this.mindMap.command.add("UP_NODE", this.upNode), this.downNode = this.downNode.bind(this), this.mindMap.command.add("DOWN_NODE", this.downNode), this.insertAfter = this.insertAfter.bind(this), this.mindMap.command.add("INSERT_AFTER", this.insertAfter), this.insertBefore = this.insertBefore.bind(this), this.mindMap.command.add("INSERT_BEFORE", this.insertBefore), this.moveNodeTo = this.moveNodeTo.bind(this), this.mindMap.command.add("MOVE_NODE_TO", this.moveNodeTo), this.removeNode = this.removeNode.bind(this), this.mindMap.command.add("REMOVE_NODE", this.removeNode), this.pasteNode = this.pasteNode.bind(this), this.mindMap.command.add("PASTE_NODE", this.pasteNode), this.cutNode = this.cutNode.bind(this), this.mindMap.command.add("CUT_NODE", this.cutNode), this.setNodeStyle = this.setNodeStyle.bind(this), this.mindMap.command.add("SET_NODE_STYLE", this.setNodeStyle), this.setNodeActive = this.setNodeActive.bind(this), this.mindMap.command.add("SET_NODE_ACTIVE", this.setNodeActive), this.clearAllActive = this.clearAllActive.bind(this), this.mindMap.command.add("CLEAR_ACTIVE_NODE", this.clearAllActive), this.setNodeExpand = this.setNodeExpand.bind(this), this.mindMap.command.add("SET_NODE_EXPAND", this.setNodeExpand), this.expandAllNode = this.expandAllNode.bind(this), this.mindMap.command.add("EXPAND_ALL", this.expandAllNode), this.unexpandAllNode = this.unexpandAllNode.bind(this), this.mindMap.command.add("UNEXPAND_ALL", this.unexpandAllNode), this.setNodeData = this.setNodeData.bind(this), this.mindMap.command.add("SET_NODE_DATA", this.setNodeData), this.setNodeText = this.setNodeText.bind(this), this.mindMap.command.add("SET_NODE_TEXT", this.setNodeText), this.setNodeImage = this.setNodeImage.bind(this), this.mindMap.command.add("SET_NODE_IMAGE", this.setNodeImage), this.setNodeIcon = this.setNodeIcon.bind(this), this.mindMap.command.add("SET_NODE_ICON", this.setNodeIcon), this.setNodeHyperlink = this.setNodeHyperlink.bind(this), this.mindMap.command.add("SET_NODE_HYPERLINK", this.setNodeHyperlink), this.setNodeNote = this.setNodeNote.bind(this), this.mindMap.command.add("SET_NODE_NOTE", this.setNodeNote), this.setNodeTag = this.setNodeTag.bind(this), this.mindMap.command.add("SET_NODE_TAG", this.setNodeTag), this.addGeneralization = this.addGeneralization.bind(this), this.mindMap.command.add("ADD_GENERALIZATION", this.addGeneralization), this.removeGeneralization = this.removeGeneralization.bind(this), this.mindMap.command.add("REMOVE_GENERALIZATION", this.removeGeneralization), this.setNodeCustomPosition = this.setNodeCustomPosition.bind(this), this.mindMap.command.add("SET_NODE_CUSTOM_POSITION", this.setNodeCustomPosition), this.resetLayout = this.resetLayout.bind(this), this.mindMap.command.add("RESET_LAYOUT", this.resetLayout)
                    }
                }, {
                    key: "registerShortcutKeys",
                    value: function() {
                        var t = this;
                        this.mindMap.keyCommand.addShortcut("Tab", (function() {
                            t.mindMap.execCommand("INSERT_CHILD_NODE")
                        })), this.insertNodeWrap = function() {
                            t.textEdit.showTextEdit || t.mindMap.execCommand("INSERT_NODE")
                        }, this.mindMap.keyCommand.addShortcut("Enter", this.insertNodeWrap), this.mindMap.keyCommand.addShortcut("Control+s", this.addGeneralization), this.toggleActiveExpand = this.toggleActiveExpand.bind(this), this.mindMap.keyCommand.addShortcut("/", this.toggleActiveExpand), this.removeNodeWrap = function() {
                            t.mindMap.execCommand("REMOVE_NODE")
                        }, this.mindMap.keyCommand.addShortcut("Del|Backspace", this.removeNodeWrap), this.mindMap.on("before_show_text_edit", (function() {
                            t.startTextEdit()
                        })), this.mindMap.on("hide_text_edit", (function() {
                            t.endTextEdit()
                        })), this.mindMap.keyCommand.addShortcut("Control+a", (function() {
                            t.mindMap.execCommand("SELECT_ALL")
                        })), this.mindMap.keyCommand.addShortcut("Control+l", this.resetLayout), this.mindMap.keyCommand.addShortcut("Control+Up", this.upNode), this.mindMap.keyCommand.addShortcut("Control+Down", this.downNode)
                    }
                }, {
                    key: "startTextEdit",
                    value: function() {
                        this.mindMap.keyCommand.save()
                    }
                }, {
                    key: "endTextEdit",
                    value: function() {
                        this.mindMap.keyCommand.restore()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        this.reRender && this.clearActive(), this.layout.doLayout((function(e) {
                            t.root = e, t.root.render()
                        })), this.mindMap.emit("node_active", null, this.activeNodeList)
                    }
                }, {
                    key: "clearActive",
                    value: function() {
                        var t = this;
                        this.activeNodeList.forEach((function(e) {
                            t.setNodeActive(e, !1)
                        })), this.activeNodeList = []
                    }
                }, {
                    key: "clearAllActive",
                    value: function() {
                        this.activeNodeList.length <= 0 || (this.clearActive(), this.mindMap.emit("node_active", null, []))
                    }
                }, {
                    key: "addActiveNode",
                    value: function(t) {
                        var e = this.findActiveNodeIndex(t); - 1 === e && this.activeNodeList.push(t)
                    }
                }, {
                    key: "removeActiveNode",
                    value: function(t) {
                        var e = this.findActiveNodeIndex(t); - 1 !== e && this.activeNodeList.splice(e, 1)
                    }
                }, {
                    key: "findActiveNodeIndex",
                    value: function(t) {
                        return this.activeNodeList.findIndex((function(e) {
                            return e === t
                        }))
                    }
                }, {
                    key: "getNodeIndex",
                    value: function(t) {
                        return t.parent ? t.parent.children.findIndex((function(e) {
                            return e === t
                        })) : 0
                    }
                }, {
                    key: "selectAll",
                    value: function() {
                        var t = this;
                        Vt(this.root, null, (function(e) {
                            e.nodeData.data.isActive || (e.nodeData.data.isActive = !0, t.addActiveNode(e), setTimeout((function() {
                                e.renderNode()
                            }), 0))
                        }), null, !0, 0, 0)
                    }
                }, {
                    key: "back",
                    value: function(t) {
                        this.clearAllActive();
                        var e = this.mindMap.command.back(t);
                        e && (this.renderTree = e, this.mindMap.reRender())
                    }
                }, {
                    key: "forward",
                    value: function(t) {
                        this.clearAllActive();
                        var e = this.mindMap.command.forward(t);
                        e && (this.renderTree = e, this.mindMap.reRender())
                    }
                }, {
                    key: "insertNode",
                    value: function() {
                        if (!(this.activeNodeList.length <= 0)) {
                            var t = this.activeNodeList[0];
                            if (t.isRoot) this.insertChildNode();
                            else {
                                var e = 1 === t.layerIndex ? "Secondary Node" : "Branch Node";
                                1 === t.layerIndex && (t.parent.initRender = !0);
                                var i = this.getNodeIndex(t);
                                t.parent.nodeData.children.splice(i + 1, 0, {
                                    data: {
                                        text: e,
                                        expand: !0
                                    },
                                    children: []
                                }), this.mindMap.render()
                            }
                        }
                    }
                }, {
                    key: "insertChildNode",
                    value: function() {
                        this.activeNodeList.length <= 0 || (this.activeNodeList.forEach((function(t, e) {
                            t.nodeData.children || (t.nodeData.children = []);
                            var i = t.isRoot ? "Secondary Node" : "Branch Node";
                            t.nodeData.children.push({
                                data: {
                                    text: i,
                                    expand: !0
                                },
                                children: []
                            }), t.isRoot && (t.initRender = !0)
                        })), this.mindMap.render())
                    }
                }, {
                    key: "upNode",
                    value: function() {
                        if (!(this.activeNodeList.length <= 0)) {
                            var t = this.activeNodeList[0];
                            if (!t.isRoot) {
                                var e = t.parent,
                                    i = e.children,
                                    n = i.findIndex((function(e) {
                                        return e === t
                                    }));
                                if (-1 !== n && 0 !== n) {
                                    var a = n - 1;
                                    i.splice(n, 1), i.splice(a, 0, t), e.nodeData.children.splice(n, 1), e.nodeData.children.splice(a, 0, t.nodeData), this.mindMap.render()
                                }
                            }
                        }
                    }
                }, {
                    key: "downNode",
                    value: function() {
                        if (!(this.activeNodeList.length <= 0)) {
                            var t = this.activeNodeList[0];
                            if (!t.isRoot) {
                                var e = t.parent,
                                    i = e.children,
                                    n = i.findIndex((function(e) {
                                        return e === t
                                    }));
                                if (-1 !== n && n !== i.length - 1) {
                                    var a = n + 1;
                                    i.splice(n, 1), i.splice(a, 0, t), e.nodeData.children.splice(n, 1), e.nodeData.children.splice(a, 0, t.nodeData), this.mindMap.render()
                                }
                            }
                        }
                    }
                }, {
                    key: "insertBefore",
                    value: function(t, e) {
                        if (!t.isRoot) {
                            var i = t.parent,
                                n = i.children,
                                a = n.findIndex((function(e) {
                                    return e === t
                                }));
                            if (-1 !== a) {
                                var o = n.findIndex((function(t) {
                                    return t === e
                                })); - 1 !== o && (a < o ? o -= 1 : o = o, n.splice(a, 1), n.splice(o, 0, t), i.nodeData.children.splice(a, 1), i.nodeData.children.splice(o, 0, t.nodeData), this.mindMap.render())
                            }
                        }
                    }
                }, {
                    key: "insertAfter",
                    value: function(t, e) {
                        if (!t.isRoot) {
                            var i = t.parent,
                                n = i.children,
                                a = n.findIndex((function(e) {
                                    return e === t
                                }));
                            if (-1 !== a) {
                                var o = n.findIndex((function(t) {
                                    return t === e
                                })); - 1 !== o && (a < o ? o = o : o += 1, n.splice(a, 1), n.splice(o, 0, t), i.nodeData.children.splice(a, 1), i.nodeData.children.splice(o, 0, t.nodeData), this.mindMap.render())
                            }
                        }
                    }
                }, {
                    key: "removeNode",
                    value: function() {
                        if (!(this.activeNodeList.length <= 0)) {
                            for (var t = 0; t < this.activeNodeList.length; t++) {
                                var e = this.activeNodeList[t];
                                if (e.isGeneralization) this.setNodeData(e.generalizationBelongNode, {
                                    generalization: null
                                }), e.generalizationBelongNode.update(), this.removeActiveNode(e), t--;
                                else {
                                    if (e.isRoot) {
                                        e.children.forEach((function(t) {
                                            t.remove()
                                        })), e.children = [], e.nodeData.children = [];
                                        break
                                    }
                                    this.removeActiveNode(e), this.removeOneNode(e), t--
                                }
                            }
                            this.mindMap.emit("node_active", null, []), this.mindMap.render()
                        }
                    }
                }, {
                    key: "removeOneNode",
                    value: function(t) {
                        var e = this.getNodeIndex(t);
                        t.remove(), t.parent.children.splice(e, 1), t.parent.nodeData.children.splice(e, 1)
                    }
                }, {
                    key: "copyNode",
                    value: function() {
                        if (!(this.activeNodeList.length <= 0)) return Qt({}, this.activeNodeList[0])
                    }
                }, {
                    key: "cutNode",
                    value: function(t) {
                        if (!(this.activeNodeList.length <= 0)) {
                            var e = this.activeNodeList[0];
                            if (e.isRoot) return null;
                            var i = Qt({}, e);
                            this.removeActiveNode(e), this.removeOneNode(e), this.mindMap.emit("node_active", null, this.activeNodeList), this.mindMap.render(), t && "function" === typeof t && t(i)
                        }
                    }
                }, {
                    key: "moveNodeTo",
                    value: function(t, e) {
                        if (!t.isRoot) {
                            var i = Qt({}, t);
                            this.removeActiveNode(t), this.removeOneNode(t), this.mindMap.emit("node_active", null, this.activeNodeList), e.nodeData.children.push(i), this.mindMap.render()
                        }
                    }
                }, {
                    key: "pasteNode",
                    value: function(t) {
                        this.activeNodeList.length <= 0 || (this.activeNodeList.forEach((function(e) {
                            e.nodeData.children.push(Jt(t))
                        })), this.mindMap.render())
                    }
                }, {
                    key: "setNodeStyle",
                    value: function(t, e, i, n) {
                        var a = {};
                        a = n ? {
                            activeStyle: Object(f["a"])(Object(f["a"])({}, t.nodeData.data.activeStyle || {}), {}, Object(jt["a"])({}, e, i))
                        } : Object(jt["a"])({}, e, i), this.setNodeDataRender(t, a)
                    }
                }, {
                    key: "setNodeActive",
                    value: function(t, e) {
                        this.setNodeData(t, {
                            isActive: e
                        }), t.renderNode()
                    }
                }, {
                    key: "setNodeExpand",
                    value: function(t, e) {
                        this.setNodeData(t, {
                            expand: e
                        }), e ? (t.children.forEach((function(t) {
                            t.render()
                        })), t.renderLine(), t.updateExpandBtnNode()) : (t.children.forEach((function(t) {
                            t.remove()
                        })), t.removeLine(), t.updateExpandBtnNode()), this.mindMap.render()
                    }
                }, {
                    key: "expandAllNode",
                    value: function() {
                        Vt(this.renderTree, null, (function(t) {
                            t.data.expand || (t.data.expand = !0)
                        }), null, !0, 0, 0), this.mindMap.render(), this.root.children.forEach((function(t) {
                            t.updateExpandBtnNode()
                        }))
                    }
                }, {
                    key: "unexpandAllNode",
                    value: function() {
                        var t = this;
                        this.root.children.forEach((function(e) {
                            t.setNodeExpand(e, !1)
                        })), Vt(this.renderTree, null, (function(t, e, i) {
                            i || (t.data.expand = !1)
                        }), null, !0, 0, 0)
                    }
                }, {
                    key: "toggleActiveExpand",
                    value: function() {
                        var t = this;
                        this.activeNodeList.forEach((function(e) {
                            e.nodeData.children.length <= 0 || t.toggleNodeExpand(e)
                        }))
                    }
                }, {
                    key: "toggleNodeExpand",
                    value: function(t) {
                        this.mindMap.execCommand("SET_NODE_EXPAND", t, !t.nodeData.data.expand)
                    }
                }, {
                    key: "setNodeText",
                    value: function(t, e) {
                        this.setNodeDataRender(t, {
                            text: e
                        })
                    }
                }, {
                    key: "setNodeImage",
                    value: function(t, e) {
                        var i = e.url,
                            n = e.title,
                            a = e.width,
                            o = e.height;
                        this.setNodeDataRender(t, {
                            image: i,
                            imageTitle: n || "",
                            imageSize: {
                                width: a,
                                height: o
                            }
                        })
                    }
                }, {
                    key: "setNodeIcon",
                    value: function(t, e) {
                        this.setNodeDataRender(t, {
                            icon: e
                        })
                    }
                }, {
                    key: "setNodeHyperlink",
                    value: function(t, e) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                        this.setNodeDataRender(t, {
                            hyperlink: e,
                            hyperlinkTitle: i
                        })
                    }
                }, {
                    key: "setNodeNote",
                    value: function(t, e) {
                        this.setNodeDataRender(t, {
                            note: e
                        })
                    }
                }, {
                    key: "setNodeTag",
                    value: function(t, e) {
                        this.setNodeDataRender(t, {
                            tag: e
                        })
                    }
                }, {
                    key: "addGeneralization",
                    value: function(t) {
                        var e = this;
                        this.activeNodeList.length <= 0 || (this.activeNodeList.forEach((function(i) {
                            i.nodeData.data.generalization || i.isRoot || (e.setNodeData(i, {
                                generalization: t || {
                                    text: "Summary"
                                }
                            }), i.update())
                        })), this.mindMap.render())
                    }
                }, {
                    key: "removeGeneralization",
                    value: function() {
                        var t = this;
                        this.activeNodeList.length <= 0 || (this.activeNodeList.forEach((function(e) {
                            e.nodeData.data.generalization && (t.setNodeData(e, {
                                generalization: null
                            }), e.update())
                        })), this.mindMap.render())
                    }
                }, {
                    key: "setNodeCustomPosition",
                    value: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                            a = [t] || !1;
                        a.forEach((function(t) {
                            e.setNodeData(t, {
                                customLeft: i,
                                customTop: n
                            })
                        }))
                    }
                }, {
                    key: "resetLayout",
                    value: function() {
                        var t = this;
                        Vt(this.root, null, (function(e) {
                            e.customLeft = void 0, e.customTop = void 0, t.setNodeData(e, {
                                customLeft: void 0,
                                customTop: void 0
                            }), t.mindMap.render()
                        }), null, !0, 0, 0)
                    }
                }, {
                    key: "setNodeData",
                    value: function(t, e) {
                        Object.keys(e).forEach((function(i) {
                            t.nodeData.data[i] = e[i]
                        }))
                    }
                }, {
                    key: "setNodeDataRender",
                    value: function(t, e) {
                        this.setNodeData(t, e);
                        var i = t.getSize();
                        t.renderNode(), i && (t.isGeneralization && t.generalizationBelongNode.updateGeneralization(), this.mindMap.render())
                    }
                }]), t
            }(), we = xe, Me = {
                paddingX: 15,
                paddingY: 5,
                imgMaxWidth: 100,
                imgMaxHeight: 100,
                iconSize: 20,
                lineWidth: 1,
                lineColor: "#549688",
                generalizationLineWidth: 1,
                generalizationLineColor: "#549688",
                generalizationLineMargin: 0,
                generalizationNodeMargin: 20,
                backgroundColor: "#fafafa",
                backgroundImage: "none",
                backgroundRepeat: "no-repeat",
                root: {
                    fillColor: "#549688",
                    fontFamily: "Microsoft YaHei, Microsoft YaHei",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    lineHeight: 1.5,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderDasharray: "none",
                    borderRadius: 5,
                    textDecoration: "none",
                    active: {
                        borderColor: "rgb(57, 80, 96)",
                        borderWidth: 3,
                        borderDasharray: "none"
                    }
                },
                second: {
                    marginX: 100,
                    marginY: 40,
                    fillColor: "#fff",
                    fontFamily: "Microsoft YaHei, Microsoft YaHei",
                    color: "#565656",
                    fontSize: 16,
                    fontWeight: "noraml",
                    fontStyle: "normal",
                    lineHeight: 1.5,
                    borderColor: "#549688",
                    borderWidth: 1,
                    borderDasharray: "none",
                    borderRadius: 5,
                    textDecoration: "none",
                    active: {
                        borderColor: "rgb(57, 80, 96)",
                        borderWidth: 3,
                        borderDasharray: "none"
                    }
                },
                node: {
                    marginX: 50,
                    marginY: 0,
                    fillColor: "transparent",
                    fontFamily: "Microsoft YaHei, Microsoft YaHei",
                    color: "#6a6d6c",
                    fontSize: 14,
                    fontWeight: "noraml",
                    fontStyle: "normal",
                    lineHeight: 1.5,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5,
                    borderDasharray: "none",
                    textDecoration: "none",
                    active: {
                        borderColor: "rgb(57, 80, 96)",
                        borderWidth: 3,
                        borderDasharray: "none"
                    }
                },
                generalization: {
                    marginX: 100,
                    marginY: 40,
                    fillColor: "#fff",
                    fontFamily: "Microsoft YaHei, Microsoft YaHei",
                    color: "#565656",
                    fontSize: 16,
                    fontWeight: "noraml",
                    fontStyle: "normal",
                    lineHeight: 1.5,
                    borderColor: "#549688",
                    borderWidth: 1,
                    borderDasharray: "none",
                    borderRadius: 5,
                    textDecoration: "none",
                    active: {
                        borderColor: "rgb(57, 80, 96)",
                        borderWidth: 3,
                        borderDasharray: "none"
                    }
                }
            }, ke = Ht()(Me, {
                lineColor: "#333",
                backgroundColor: "#d1f6ec",
                generalizationLineWidth: 1,
                generalizationLineColor: "#333",
                root: {
                    fillColor: "#1fb27d"
                },
                second: {
                    fillColor: "#fff",
                    color: "#565656",
                    borderColor: "transparent",
                    borderWidth: 0
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "#333",
                    color: "#333",
                    active: {
                        borderColor: "rgb(57, 80, 96)",
                        borderWidth: 3,
                        borderDasharray: "none"
                    }
                }
            }), Ne = Ht()(Me, {
                lineColor: "rgb(115, 161, 191)",
                backgroundColor: "rgb(251, 251, 251)",
                generalizationLineWidth: 1,
                generalizationLineColor: "#333",
                root: {
                    fillColor: "rgb(115, 161, 191)",
                    active: {
                        borderColor: "rgb(57, 80, 96)"
                    }
                },
                second: {
                    fillColor: "rgb(238, 243, 246)",
                    color: "#333",
                    borderColor: "rgb(115, 161, 191)",
                    borderWidth: 1,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(57, 80, 96)"
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#333",
                    active: {
                        borderColor: "rgb(57, 80, 96)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "#333",
                    color: "#333",
                    active: {
                        borderColor: "rgb(57, 80, 96)"
                    }
                }
            }), _e = Ht()(Me, {
                lineColor: "rgb(191, 115, 148)",
                backgroundColor: "rgb(251, 251, 251)",
                generalizationLineWidth: 1,
                generalizationLineColor: "#333",
                root: {
                    fillColor: "rgb(191, 115, 148)",
                    active: {
                        borderColor: "rgb(96, 57, 74)"
                    }
                },
                second: {
                    fillColor: "rgb(246, 238, 242)",
                    color: "#333",
                    borderColor: "rgb(191, 115, 148)",
                    borderWidth: 1,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(96, 57, 74)"
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#333",
                    active: {
                        borderColor: "rgb(96, 57, 74)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "#333",
                    color: "#333",
                    active: {
                        borderColor: "rgb(96, 57, 74)"
                    }
                }
            }), ze = Ht()(Me, {
                lineColor: "rgb(123, 115, 191)",
                backgroundColor: "rgb(251, 251, 251)",
                generalizationLineWidth: 1,
                generalizationLineColor: "#333",
                root: {
                    fillColor: "rgb(123, 115, 191)",
                    active: {
                        borderColor: "rgb(61, 57, 96)"
                    }
                },
                second: {
                    fillColor: "rgb(239, 238, 246)",
                    color: "#333",
                    borderColor: "rgb(123, 115, 191)",
                    borderWidth: 1,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(61, 57, 96)"
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#333",
                    active: {
                        borderColor: "rgb(61, 57, 96)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "#333",
                    color: "#333",
                    active: {
                        borderColor: "rgb(61, 57, 96)"
                    }
                }
            }), De = Ht()(Me, {
                lineColor: "rgb(191, 115, 115)",
                backgroundColor: "rgb(251, 251, 251)",
                generalizationLineWidth: 1,
                generalizationLineColor: "#333",
                root: {
                    fillColor: "rgb(191, 115, 115)",
                    active: {
                        borderColor: "rgb(96, 57, 57)"
                    }
                },
                second: {
                    fillColor: "rgb(246, 238, 238)",
                    color: "#333",
                    borderColor: "rgb(191, 115, 115)",
                    borderWidth: 1,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(96, 57, 57)"
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#333",
                    active: {
                        borderColor: "rgb(96, 57, 57)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "#333",
                    color: "#333",
                    active: {
                        borderColor: "rgb(96, 57, 57)"
                    }
                }
            }), Ee = Ht()(Me, {
                lineColor: "rgb(191, 147, 115)",
                backgroundColor: "rgb(251, 251, 251)",
                generalizationLineWidth: 1,
                generalizationLineColor: "#333",
                root: {
                    fillColor: "rgb(191, 147, 115)",
                    active: {
                        borderColor: "rgb(96, 73, 57)"
                    }
                },
                second: {
                    fillColor: "rgb(246, 242, 238)",
                    color: "#333",
                    borderColor: "rgb(191, 147, 115)",
                    borderWidth: 1,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(96, 73, 57)"
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#333",
                    active: {
                        borderColor: "rgb(96, 73, 57)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "#333",
                    color: "#333",
                    active: {
                        borderColor: "rgb(96, 73, 57)"
                    }
                }
            }), Fe = Ht()(Me, {
                lineColor: "#fff",
                lineWidth: 3,
                generalizationLineWidth: 3,
                generalizationLineColor: "#fff",
                backgroundColor: "rgb(58, 65, 68)",
                backgroundImage: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQzg5QTQ0NDhENzgxMUUzOENGREE4QTg0RDgzRTZDNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQzg5QTQ0NThENzgxMUUzOENGREE4QTg0RDgzRTZDNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwOEQ1NDRGOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwOEQ1NDUwOEQ3NzExRTM4Q0ZEQThBODREODNFNkM3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+e9P33AAAACVJREFUeNpisXJ0YUACTAyoAMr/+eM7EGGRZ4FQ7BycEAZAgAEAHbEGtkoQm/wAAAAASUVORK5CYII=",
                backgroundRepeat: "repeat",
                root: {
                    fillColor: "rgb(233, 223, 152)",
                    color: "#333",
                    fontSize: 24,
                    borderRadius: 21,
                    active: {
                        fillColor: "rgb(254, 219, 0)",
                        borderColor: "transparent"
                    }
                },
                second: {
                    fillColor: "rgb(164, 197, 192)",
                    borderColor: "transparent",
                    color: "#333",
                    fontSize: 16,
                    borderRadius: 10,
                    active: {
                        fillColor: "rgb(254, 219, 0)",
                        borderColor: "transparent"
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#fff",
                    fontWeight: "bold",
                    active: {
                        fillColor: "rgb(254, 219, 0)",
                        borderColor: "transparent"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "transparent",
                    color: "#333",
                    active: {
                        fillColor: "rgb(254, 219, 0)",
                        borderColor: "transparent"
                    }
                }
            }), Se = Ht()(Me, {
                lineColor: "rgb(51, 51, 51)",
                lineWidth: 2,
                generalizationLineWidth: 3,
                generalizationLineColor: "rgb(51, 51, 51)",
                backgroundColor: "#fff",
                root: {
                    fillColor: "rgb(18, 187, 55)",
                    color: "#fff",
                    fontSize: 24,
                    borderRadius: 10,
                    active: {
                        borderColor: "rgb(51, 51, 51)"
                    }
                },
                second: {
                    fillColor: "rgb(241, 242, 241)",
                    borderColor: "transparent",
                    color: "#1a1a1a",
                    fontSize: 18,
                    borderRadius: 10,
                    active: {
                        borderColor: "rgb(51, 51, 51)"
                    }
                },
                node: {
                    fontSize: 14,
                    color: "#1a1a1a",
                    active: {
                        borderColor: "rgb(51, 51, 51)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "rgb(51, 51, 51)",
                    borderWidth: 2,
                    color: "#1a1a1a",
                    active: {
                        borderColor: "rgb(18, 187, 55)"
                    }
                }
            }), Te = Ht()(Me, {
                lineColor: "rgb(94, 202, 110)",
                lineWidth: 2,
                generalizationLineWidth: 3,
                generalizationLineColor: "#1a1a1a",
                backgroundColor: "rgb(241, 241, 241)",
                root: {
                    fillColor: "rgb(255, 245, 214)",
                    color: "#1a1a1a",
                    fontSize: 24,
                    borderRadius: 10,
                    borderColor: "rgb(249, 199, 84)",
                    borderWidth: 1,
                    active: {
                        borderColor: "rgb(94, 202, 110)"
                    }
                },
                second: {
                    fillColor: "rgb(255, 245, 214)",
                    borderColor: "rgb(249, 199, 84)",
                    borderWidth: 1,
                    color: "#1a1a1a",
                    fontSize: 18,
                    borderRadius: 10,
                    active: {
                        borderColor: "rgb(94, 202, 110)"
                    }
                },
                node: {
                    fontSize: 14,
                    color: "#1a1a1a",
                    active: {
                        borderColor: "rgb(94, 202, 110)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "#1a1a1a",
                    color: "#1a1a1a",
                    borderWidth: 2,
                    active: {
                        borderColor: "rgb(94, 202, 110)"
                    }
                }
            }), Le = Ht()(Me, {
                lineColor: "rgb(30, 53, 86)",
                lineWidth: 2,
                generalizationLineWidth: 2,
                generalizationLineColor: "rgb(56, 123, 233)",
                backgroundColor: "rgb(241, 241, 241)",
                root: {
                    fillColor: "rgb(30, 53, 86)",
                    color: "#fff",
                    fontSize: 24,
                    borderRadius: 10,
                    borderColor: "rgb(189, 197, 201)",
                    borderWidth: 2,
                    active: {
                        borderColor: "rgb(169, 218, 218)"
                    }
                },
                second: {
                    fillColor: "rgb(169, 218, 218)",
                    borderColor: "rgb(30, 53, 86)",
                    borderWidth: 2,
                    color: "#fff",
                    fontSize: 18,
                    borderRadius: 10,
                    active: {
                        borderColor: "rgb(56, 123, 233)"
                    }
                },
                node: {
                    fontSize: 14,
                    color: "rgb(30, 53, 86)",
                    borderColor: "rgb(30, 53, 86)",
                    borderWidth: 1,
                    marginY: 20,
                    active: {
                        borderColor: "rgb(169, 218, 218)"
                    }
                },
                generalization: {
                    fillColor: "rgb(56, 123, 233)",
                    borderColor: "rgb(56, 123, 233)",
                    color: "#fff",
                    borderWidth: 0,
                    active: {
                        borderColor: "rgb(169, 218, 218)"
                    }
                }
            }), Ae = Ht()(Me, {
                lineColor: "rgb(17, 68, 23)",
                lineWidth: 2,
                generalizationLineWidth: 2,
                generalizationLineColor: "#fff",
                backgroundColor: "rgb(15, 16, 17)",
                root: {
                    fillColor: "rgb(28, 178, 43)",
                    color: "#fff",
                    fontSize: 24,
                    borderRadius: 10,
                    active: {
                        borderColor: "rgb(17, 68, 23)"
                    }
                },
                second: {
                    fillColor: "rgb(55, 56, 58)",
                    color: "rgb(147,148,149)",
                    fontSize: 18,
                    borderRadius: 10,
                    borderWidth: 0,
                    active: {
                        borderColor: "rgb(17, 68, 23)"
                    }
                },
                node: {
                    fontSize: 14,
                    color: "rgb(147, 148, 149)",
                    active: {
                        borderColor: "rgb(17, 68, 23)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "transparent",
                    color: "#333",
                    active: {
                        borderColor: "rgb(17, 68, 23)"
                    }
                }
            }), Be = Ht()(Me, {
                lineColor: "rgb(123, 199, 120)",
                backgroundColor: "rgb(236, 245, 231)",
                generalizationLineWidth: 2,
                generalizationLineColor: "rgb(123, 199, 120)",
                root: {
                    fillColor: "rgb(253, 244, 217)",
                    color: "#222",
                    active: {
                        borderColor: "rgb(94, 199, 248)"
                    }
                },
                second: {
                    fillColor: "rgb(253, 244, 217)",
                    color: "#222",
                    borderColor: "rgb(242, 200, 104)",
                    borderWidth: 1,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(94, 199, 248)"
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#333",
                    active: {
                        borderColor: "rgb(94, 199, 248)"
                    }
                },
                generalization: {
                    fillColor: "rgb(123, 199, 120)",
                    borderColor: "transparent",
                    borderWidth: 2,
                    color: "#fff",
                    active: {
                        borderColor: "rgb(94, 199, 248)"
                    }
                }
            }), Oe = Ht()(Me, {
                lineColor: "rgb(51, 51, 51)",
                lineWidth: 2,
                generalizationLineWidth: 2,
                generalizationLineColor: "rgb(51, 51, 51)",
                backgroundColor: "rgb(239, 248, 250)",
                root: {
                    fillColor: "rgb(255, 255, 255)",
                    color: "#222",
                    active: {
                        borderColor: "rgb(94, 199, 248)"
                    }
                },
                second: {
                    fillColor: "rgb(255, 255, 255)",
                    color: "#222",
                    borderColor: "rgb(255, 255, 255)",
                    borderWidth: 1,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(94, 199, 248)"
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#333",
                    active: {
                        borderColor: "rgb(94, 199, 248)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "rgb(51, 51, 51)",
                    color: "#333",
                    active: {
                        borderColor: "rgb(94, 199, 248)"
                    }
                }
            }), Ie = Ht()(Me, {
                lineColor: "rgb(51, 51, 51)",
                lineWidth: 3,
                generalizationLineWidth: 3,
                generalizationLineColor: "#222",
                backgroundColor: "rgb(248, 215, 49)",
                root: {
                    fillColor: "rgb(55, 165, 255)",
                    borderColor: "rgb(51, 51, 51)",
                    borderWidth: 3,
                    active: {
                        borderColor: "rgb(255, 160, 36)"
                    }
                },
                second: {
                    fillColor: "rgb(255, 160, 36)",
                    color: "#222",
                    borderColor: "rgb(51, 51, 51)",
                    borderWidth: 3,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(55, 165, 255)"
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#222",
                    active: {
                        borderColor: "rgb(55, 165, 255)"
                    }
                },
                generalization: {
                    borderColor: "#222",
                    borderWidth: 3,
                    color: "#222",
                    active: {
                        borderColor: "rgb(55, 165, 255)"
                    }
                }
            }), Re = Ht()(Me, {
                lineColor: "rgb(166, 101, 106)",
                lineWidth: 3,
                generalizationLineWidth: 3,
                generalizationLineColor: "#fff",
                backgroundColor: "rgb(255, 208, 211)",
                root: {
                    fillColor: "rgb(139, 109, 225)",
                    borderColor: "",
                    borderWidth: 0,
                    active: {
                        borderColor: "rgb(243, 104, 138)",
                        borderWidth: 2
                    }
                },
                second: {
                    fillColor: "rgb(243, 104, 138)",
                    color: "#fff",
                    borderColor: "",
                    borderWidth: 0,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(139, 109, 225)",
                        borderWidth: 2
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#222",
                    active: {
                        borderColor: "rgb(139, 109, 225)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "transparent",
                    color: "#222",
                    active: {
                        borderColor: "rgb(139, 109, 225)",
                        borderWidth: 2
                    }
                }
            }), $e = Ht()(Me, {
                lineColor: "rgb(104, 204, 202)",
                lineWidth: 3,
                generalizationLineWidth: 3,
                generalizationLineColor: "rgb(90, 206, 241)",
                backgroundColor: "rgb(239, 255, 255)",
                root: {
                    fillColor: "rgb(0, 192, 184)",
                    borderColor: "",
                    borderWidth: 0,
                    active: {
                        borderColor: "rgb(255, 160, 36)",
                        borderWidth: 3
                    }
                },
                second: {
                    fillColor: "#fff",
                    color: "#222",
                    borderColor: "rgb(184, 235, 233)",
                    borderWidth: 2,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(0, 192, 184)"
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#222",
                    active: {
                        borderColor: "rgb(0, 192, 184)"
                    }
                },
                generalization: {
                    fillColor: "rgb(90, 206, 241)",
                    borderColor: "transparent",
                    color: "#fff",
                    active: {
                        borderColor: "rgb(0, 192, 184)"
                    }
                }
            }), je = Ht()(Me, {
                lineColor: "rgb(51, 56, 62)",
                lineWidth: 3,
                generalizationLineWidth: 3,
                generalizationLineColor: "rgb(127, 93, 64)",
                backgroundColor: "#fff",
                root: {
                    fillColor: "rgb(51, 56, 62)",
                    color: "rgb(247, 208, 160)",
                    borderColor: "",
                    borderWidth: 0,
                    active: {
                        borderColor: "rgb(247, 208, 160)",
                        borderWidth: 3
                    }
                },
                second: {
                    fillColor: "rgb(239, 209, 176)",
                    color: "rgb(81, 58, 42)",
                    borderColor: "",
                    borderWidth: 0,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(51, 56, 62)",
                        borderWidth: 2
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#222",
                    active: {
                        borderColor: "rgb(0, 192, 184)"
                    }
                },
                generalization: {
                    fillColor: "rgb(127, 93, 64)",
                    borderColor: "transparent",
                    color: "rgb(255, 214, 175)",
                    active: {
                        borderColor: "rgb(51, 56, 62)"
                    }
                }
            }), We = Ht()(Me, {
                lineColor: "rgb(254, 146, 0)",
                lineWidth: 3,
                generalizationLineWidth: 3,
                generalizationLineColor: "rgb(255, 222, 69)",
                backgroundColor: "rgb(255, 246, 243)",
                root: {
                    fillColor: "rgb(255, 112, 52)",
                    color: "#fff",
                    borderColor: "",
                    borderWidth: 0,
                    active: {
                        borderColor: "rgb(51, 51, 51)",
                        borderWidth: 3
                    }
                },
                second: {
                    fillColor: "#fff",
                    color: "rgb(51, 51, 51)",
                    borderColor: "",
                    borderWidth: 0,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(255, 112, 52)",
                        borderWidth: 2
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#222",
                    active: {
                        borderColor: "rgb(255, 112, 52)"
                    }
                },
                generalization: {
                    fillColor: "rgb(255, 222, 69)",
                    borderColor: "transparent",
                    color: "rgb(51, 51, 51)",
                    active: {
                        borderColor: "rgb(255, 112, 52)"
                    }
                }
            }), He = Ht()(Me, {
                lineColor: "rgb(40, 193, 84)",
                lineWidth: 3,
                generalizationLineWidth: 3,
                generalizationLineColor: "rgb(251, 158, 0)",
                backgroundColor: "rgb(238, 255, 243)",
                root: {
                    fillColor: "rgb(25, 193, 73)",
                    color: "#fff",
                    borderColor: "",
                    borderWidth: 0,
                    active: {
                        borderColor: "#222",
                        borderWidth: 3
                    }
                },
                second: {
                    fillColor: "#fff",
                    color: "rgb(69, 149, 96)",
                    borderColor: "",
                    borderWidth: 0,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(25, 193, 73)",
                        borderWidth: 2
                    }
                },
                node: {
                    fontSize: 12,
                    color: "#222",
                    active: {
                        borderColor: "rgb(25, 193, 73)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "rgb(251, 158, 0)",
                    borderWidth: 2,
                    color: "rgb(51, 51, 51)",
                    active: {
                        borderColor: "rgb(25, 193, 73)"
                    }
                }
            }), Ye = Ht()(Me, {
                lineColor: "rgb(75, 81, 78)",
                lineWidth: 3,
                generalizationLineWidth: 3,
                generalizationLineColor: "rgb(255, 119, 34)",
                backgroundColor: "rgb(27, 31, 34)",
                root: {
                    fillColor: "rgb(36, 179, 96)",
                    color: "#fff",
                    borderColor: "",
                    borderWidth: 0,
                    active: {
                        borderColor: "rgb(254, 199, 13)",
                        borderWidth: 3
                    }
                },
                second: {
                    fillColor: "rgb(254, 199, 13)",
                    color: "rgb(0, 0, 0)",
                    borderColor: "",
                    borderWidth: 0,
                    fontSize: 14,
                    active: {
                        borderColor: "rgb(36, 179, 96)",
                        borderWidth: 2
                    }
                },
                node: {
                    fontSize: 12,
                    color: "rgb(204, 204, 204)",
                    active: {
                        borderColor: "rgb(254, 199, 13)"
                    }
                },
                generalization: {
                    fillColor: "transparent",
                    borderColor: "rgb(255, 119, 34)",
                    borderWidth: 2,
                    color: "rgb(204, 204, 204)",
                    active: {
                        borderColor: "rgb(254, 199, 13)"
                    }
                }
            }), Pe = Ht()(Me, {
                lineColor: "#fff",
                lineWidth: 3,
                generalizationLineWidth: 3,
                generalizationLineColor: "#fff",
                backgroundColor: "rgb(80, 156, 170)",
                root: {
                    fillColor: "#fff",
                    borderColor: "",
                    borderWidth: 0,
                    color: "rgb(65, 89, 158)",
                    active: {
                        borderColor: "rgb(251, 227, 188)",
                        borderWidth: 3
                    }
                },
                second: {
                    fillColor: "rgb(251, 227, 188)",
                    color: "rgb(65, 89, 158)",
                    borderColor: "",
                    borderWidth: 0,
                    fontSize: 14,
                    active: {
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                },
                node: {
                    fontSize: 12,
                    color: "rgb(65, 89, 158)",
                    active: {
                        borderColor: "rgb(251, 227, 188)"
                    }
                },
                generalization: {
                    fillColor: "#fff",
                    borderColor: "transparent",
                    color: "rgb(65, 89, 158)",
                    active: {
                        borderColor: "rgb(251, 227, 188)"
                    }
                }
            }), Xe = {
                default: Me,
                freshGreen: ke,
                blueSky: Ne,
                brainImpairedPink: _e,
                romanticPurple: ze,
                freshRed: De,
                earthYellow: Ee,
                classic: Fe,
                classic2: Se,
                classic3: Te,
                classic4: Le,
                dark: Ae,
                classicGreen: Be,
                classicBlue: Oe,
                minions: Ie,
                pinkGrape: Re,
                mint: $e,
                gold: je,
                vitalityOrange: We,
                greenLeaf: He,
                dark2: Ye,
                skyGreen: Pe
            }, Ve = {
                Backspace: 8,
                Tab: 9,
                Enter: 13,
                Shift: 16,
                Control: 17,
                Alt: 18,
                CapsLock: 20,
                Esc: 27,
                Spacebar: 32,
                PageUp: 33,
                PageDown: 34,
                End: 35,
                Home: 36,
                Insert: 45,
                Left: 37,
                Up: 38,
                Right: 39,
                Down: 40,
                Del: 46,
                NumLock: 144,
                Cmd: 91,
                CmdFF: 224,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                "`": 192,
                "=": 187,
                "-": 189,
                "/": 191,
                ".": 190
            }, Ge = 0; Ge <= 9; Ge++) Ve[Ge] = Ge + 48;
        "abcdefghijklmnopqrstuvwxyz".split("").forEach((function(t, e) {
            Ve[t] = e + 65
        }));
        var Ze = Ve,
            Ue = function() {
                function t(e) {
                    Object(Ft["a"])(this, t), this.opt = e, this.mindMap = e.mindMap, this.shortcutMap = {}, this.shortcutMapCache = {}, this.isPause = !1, this.bindEvent()
                }
                return Object(St["a"])(t, [{
                    key: "pause",
                    value: function() {
                        this.isPause = !0
                    }
                }, {
                    key: "recovery",
                    value: function() {
                        this.isPause = !1
                    }
                }, {
                    key: "save",
                    value: function() {
                        this.shortcutMapCache = this.shortcutMap, this.shortcutMap = {}
                    }
                }, {
                    key: "restore",
                    value: function() {
                        this.shortcutMap = this.shortcutMapCache, this.shortcutMapCache = {}
                    }
                }, {
                    key: "bindEvent",
                    value: function() {
                        var t = this;
                        window.addEventListener("keydown", (function(e) {
                            t.isPause || Object.keys(t.shortcutMap).forEach((function(i) {
                                t.checkKey(e, i) && (e.stopPropagation(), e.preventDefault(), t.shortcutMap[i].forEach((function(t) {
                                    t()
                                })))
                            }))
                        }))
                    }
                }, {
                    key: "checkKey",
                    value: function(t, e) {
                        var i = this.getOriginEventCodeArr(t),
                            n = this.getKeyCodeArr(e);
                        if (i.length !== n.length) return !1;
                        for (var a = function(t) {
                                var e = n.findIndex((function(e) {
                                    return e === i[t]
                                }));
                                if (-1 === e) return {
                                    v: !1
                                };
                                n.splice(e, 1)
                            }, o = 0; o < i.length; o++) {
                            var r = a(o);
                            if ("object" === Object(Ct["a"])(r)) return r.v
                        }
                        return !0
                    }
                }, {
                    key: "getOriginEventCodeArr",
                    value: function(t) {
                        var e = [];
                        return (t.ctrlKey || t.metaKey) && e.push(Ze["Control"]), t.altKey && e.push(Ze["Alt"]), t.shiftKey && e.push(Ze["Shift"]), e.includes(t.keyCode) || e.push(t.keyCode), e
                    }
                }, {
                    key: "getKeyCodeArr",
                    value: function(t) {
                        var e = t.split(/\s*\+\s*/),
                            i = [];
                        return e.forEach((function(t) {
                            i.push(Ze[t])
                        })), i
                    }
                }, {
                    key: "addShortcut",
                    value: function(t, e) {
                        var i = this;
                        t.split(/\s*\|\s*/).forEach((function(t) {
                            i.shortcutMap[t] ? i.shortcutMap[t].push(e) : i.shortcutMap[t] = [e]
                        }))
                    }
                }, {
                    key: "removeShortcut",
                    value: function(t, e) {
                        var i = this;
                        t.split(/\s*\|\s*/).forEach((function(t) {
                            if (i.shortcutMap[t])
                                if (e) {
                                    var n = i.shortcutMap[t].findIndex((function(t) {
                                        return t === e
                                    })); - 1 !== n && i.shortcutMap[t].splice(n, 1)
                                } else i.shortcutMap[t] = [], delete i.shortcutMap[t]
                        }))
                    }
                }, {
                    key: "getShortcutFn",
                    value: function(t) {
                        var e = this,
                            i = [];
                        return t.split(/\s*\|\s*/).forEach((function(t) {
                            i = e.shortcutMap[t] || []
                        })), i
                    }
                }]), t
            }(),
            Je = function() {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(Ft["a"])(this, t), this.opt = e, this.mindMap = e.mindMap, this.commands = {}, this.history = [], this.activeHistoryIndex = 0, this.registerShortcutKeys()
                }
                return Object(St["a"])(t, [{
                    key: "clearHistory",
                    value: function() {
                        this.history = [], this.activeHistoryIndex = 0, this.mindMap.emit("back_forward", 0, 0)
                    }
                }, {
                    key: "registerShortcutKeys",
                    value: function() {
                        var t = this;
                        this.mindMap.keyCommand.addShortcut("Control+z", (function() {
                            t.mindMap.execCommand("BACK")
                        })), this.mindMap.keyCommand.addShortcut("Control+y", (function() {
                            t.mindMap.execCommand("FORWARD")
                        }))
                    }
                }, {
                    key: "exec",
                    value: function(t) {
                        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                        if (this.commands[t]) {
                            if (this.commands[t].forEach((function(t) {
                                    t.apply(void 0, i)
                                })), "BACK" === t || "FORWARD" === t) return;
                            this.addHistory()
                        }
                    }
                }, {
                    key: "add",
                    value: function(t, e) {
                        this.commands[t] ? this.commands[t].push(e) : this.commands[t] = [e]
                    }
                }, {
                    key: "remove",
                    value: function(t, e) {
                        if (this.commands[t])
                            if (e) {
                                var i = this.commands[t].find((function(t) {
                                    return t === e
                                })); - 1 !== i && this.commands[t].splice(i, 1)
                            } else this.commands[t] = [], delete this.commands[t]
                    }
                }, {
                    key: "addHistory",
                    value: function() {
                        var t = this.getCopyData();
                        this.history.push(Jt(t)), this.activeHistoryIndex = this.history.length - 1, this.mindMap.emit("data_change", t), this.mindMap.emit("back_forward", this.activeHistoryIndex, this.history.length)
                    }
                }, {
                    key: "back",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        if (this.activeHistoryIndex - t >= 0) return this.activeHistoryIndex -= t, this.mindMap.emit("back_forward", this.activeHistoryIndex, this.history.length), Jt(this.history[this.activeHistoryIndex])
                    }
                }, {
                    key: "forward",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                            e = this.history.length;
                        if (this.activeHistoryIndex + t <= e - 1) return this.activeHistoryIndex += t, this.mindMap.emit("back_forward", this.activeHistoryIndex), Jt(this.history[this.activeHistoryIndex])
                    }
                }, {
                    key: "getCopyData",
                    value: function() {
                        return Kt({}, this.mindMap.renderer.renderTree)
                    }
                }]), t
            }(),
            Ke = Je,
            Qe = function(t, e) {
                var i = !1,
                    n = null,
                    a = function() {
                        i = !1, e ? t.call(e) : t()
                    };
                if ("undefined" !== typeof MutationObserver) {
                    var o = 1,
                        r = new MutationObserver(a),
                        s = document.createTextNode(o);
                    r.observe(s, {
                        characterData: !0
                    }), n = function() {
                        o = (o + 1) % 2, s.data = o
                    }
                } else n = setTimeout;
                return function(t, e) {
                    i || (i = !0, n(a, 0))
                }
            },
            qe = function() {
                function t() {
                    Object(Ft["a"])(this, t), this.has = {}, this.queue = [], this.nextTick = Qe(this.flush, this)
                }
                return Object(St["a"])(t, [{
                    key: "push",
                    value: function(t, e) {
                        this.has[t] || (this.has[t] = !0, this.queue.push({
                            name: t,
                            fn: e
                        }), this.nextTick())
                    }
                }, {
                    key: "flush",
                    value: function() {
                        var t = this,
                            e = this.queue.slice(0);
                        this.queue = [], e.forEach((function(e) {
                            var i = e.name,
                                n = e.fn;
                            t.has[i] = !1, n()
                        }))
                    }
                }]), t
            }(),
            ti = qe,
            ei = (i("611b"), i("d5c8"), i("0bf6"), i("08c92"), i("77ee")),
            ii = window.URL || window.webkitURL || window,
            ni = function() {
                function t(e) {
                    Object(Ft["a"])(this, t), this.mindMap = e.mindMap, this.exportPadding = this.mindMap.opt.exportPadding
                }
                return Object(St["a"])(t, [{
                    key: "export",
                    value: function() {
                        var t = Object(m["a"])(regeneratorRuntime.mark((function t(e) {
                            var i, n, a, o = arguments;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = !(o.length > 1 && void 0 !== o[1]) || o[1], n = o.length > 2 && void 0 !== o[2] ? o[2] : "MCRPL Taxonomy", !this[e]) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.next = 5, this[e](n);
                                    case 5:
                                        return a = t.sent, i && "pdf" !== e && te(a, n + "." + e), t.abrupt("return", a);
                                    case 10:
                                        return t.abrupt("return", null);
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "getSvgData",
                    value: function() {
                        var t = Object(m["a"])(regeneratorRuntime.mark((function t() {
                            var e, i, n, a, o, r, s, l, c, d;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return e = this.mindMap.svg, i = this.mindMap.draw, n = e.width(), a = e.height(), o = i.transform(), r = this.mindMap.el.getBoundingClientRect(), i.scale(1 / o.scaleX, 1 / o.scaleY), s = i.rbox(), e.size(s.width, s.height), i.translate(-s.x + r.left, -s.y + r.top), l = e.clone(), e.size(n, a), i.transform(o), c = l.find("image"), d = c.map(function() {
                                            var t = Object(m["a"])(regeneratorRuntime.mark((function t(e) {
                                                var i, n;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    while (1) switch (t.prev = t.next) {
                                                        case 0:
                                                            return i = e.attr("href") || e.attr("xlink:href"), t.next = 3, qt(i);
                                                        case 3:
                                                            n = t.sent, e.attr("href", n);
                                                        case 5:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }()), t.next = 17, Promise.all(d);
                                    case 17:
                                        return t.abrupt("return", {
                                            node: l,
                                            str: l.svg()
                                        });
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "svgToPng",
                    value: function(t) {
                        var e = this;
                        return new Promise((function(i, n) {
                            var a = new Image;
                            a.setAttribute("crossOrigin", "anonymous"), a.onload = Object(m["a"])(regeneratorRuntime.mark((function t() {
                                var o, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, o = document.createElement("canvas"), o.width = a.width + 2 * e.exportPadding, o.height = a.height + 2 * e.exportPadding, r = o.getContext("2d"), t.next = 7, e.drawBackgroundToCanvas(r, o.width, o.height);
                                        case 7:
                                            r.drawImage(a, 0, 0, a.width, a.height, e.exportPadding, e.exportPadding, a.width, a.height), i(o.toDataURL()), t.next = 14;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), n(t.t0);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 11]
                                ])
                            }))), a.onerror = function(t) {
                                n(t)
                            }, a.src = t
                        }))
                    }
                }, {
                    key: "drawBackgroundToCanvas",
                    value: function(t, e, i) {
                        var n = this;
                        return new Promise((function(a, o) {
                            var r = n.mindMap.themeConfig,
                                s = r.backgroundColor,
                                l = void 0 === s ? "#fff" : s,
                                c = r.backgroundImage,
                                d = r.backgroundRepeat,
                                h = void 0 === d ? "repeat" : d;
                            if (t.save(), t.rect(0, 0, e, i), t.fillStyle = l, t.fill(), t.restore(), c && "none" !== c) {
                                t.save();
                                var u = new Image;
                                u.src = c, u.onload = function() {
                                    var n = t.createPattern(u, h);
                                    t.rect(0, 0, e, i), t.fillStyle = n, t.fill(), t.restore(), a()
                                }, u.onerror = function(t) {
                                    o(t)
                                }
                            } else a()
                        }))
                    }
                }, {
                    key: "png",
                    value: function() {
                        var t = Object(m["a"])(regeneratorRuntime.mark((function t() {
                            var e, i, n, a, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.getSvgData();
                                    case 2:
                                        return e = t.sent, i = e.str, n = new Blob([i], {
                                            type: "image/svg+xml"
                                        }), a = ii.createObjectURL(n), t.next = 8, this.svgToPng(a);
                                    case 8:
                                        return o = t.sent, ii.revokeObjectURL(a), t.abrupt("return", o);
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "pdf",
                    value: function() {
                        var t = Object(m["a"])(regeneratorRuntime.mark((function t(e) {
                            var i, n, a, o, r, s;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.png();
                                    case 2:
                                        i = t.sent, n = new ei["a"]("", "pt", "a4"), a = 595, o = 841, r = a / o, s = new Image, s.onload = function() {
                                            var t, l, c = s.width,
                                                d = s.height,
                                                h = c / d;
                                            c <= a && d <= o ? (t = c, l = d) : r > h ? (t = h * o, l = o) : (t = a, l = a / h), n.addImage(i, "PNG", (a - t) / 2, (o - l) / 2, t, l), n.save(e)
                                        }, s.src = i;
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "drawBackgroundToSvg",
                    value: function(t) {
                        var e = this;
                        return new Promise(function() {
                            var i = Object(m["a"])(regeneratorRuntime.mark((function i(n, a) {
                                var o, r, s, l, c, d, h;
                                return regeneratorRuntime.wrap((function(i) {
                                    while (1) switch (i.prev = i.next) {
                                        case 0:
                                            if (o = e.mindMap.themeConfig, r = o.backgroundColor, s = void 0 === r ? "#fff" : r, l = o.backgroundImage, c = o.backgroundRepeat, d = void 0 === c ? "repeat" : c, t.css("background-color", s), !l || "none" === l) {
                                                i.next = 11;
                                                break
                                            }
                                            return i.next = 5, qt(l);
                                        case 5:
                                            h = i.sent, t.css("background-image", "url(".concat(h, ")")), t.css("background-repeat", d), n(), i.next = 12;
                                            break;
                                        case 11:
                                            n();
                                        case 12:
                                        case "end":
                                            return i.stop()
                                    }
                                }), i)
                            })));
                            return function(t, e) {
                                return i.apply(this, arguments)
                            }
                        }())
                    }
                }, {
                    key: "svg",
                    value: function() {
                        var t = Object(m["a"])(regeneratorRuntime.mark((function t() {
                            var e, i, n, a;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this.getSvgData();
                                    case 2:
                                        return e = t.sent, i = e.node, t.next = 6, this.drawBackgroundToSvg(i);
                                    case 6:
                                        return n = i.svg(), a = new Blob([n], {
                                            type: "image/svg+xml"
                                        }), t.abrupt("return", ii.createObjectURL(a));
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "json",
                    value: function() {
                        var t = this.mindMap.command.getCopyData(),
                            e = JSON.stringify(t, null, "\t"),
                            i = new Blob([e]);
                        return ii.createObjectURL(i)
                    }
                }, {
                    key: "smm",
                    value: function() {
                        return this.json()
                    }
                }]), t
            }(),
            ai = ni,
            oi = function() {
                function t(e) {
                    var i = e.mindMap;
                    Object(Ft["a"])(this, t), this.mindMap = i, this.rect = null, this.isMousedown = !1, this.mouseDownX = 0, this.mouseDownY = 0, this.mouseMoveX = 0, this.mouseMoveY = 0, this.bindEvent()
                }
                return Object(St["a"])(t, [{
                    key: "bindEvent",
                    value: function() {
                        var t = this;
                        this.checkInNodes = ee(this.checkInNodes, 500, this), this.mindMap.on("mousedown", (function(e) {
                            if (!t.mindMap.opt.readonly && (e.ctrlKey || 3 === e.which)) {
                                t.isMousedown = !0;
                                var i = t.mindMap.toPos(e.clientX, e.clientY),
                                    n = i.x,
                                    a = i.y;
                                t.mouseDownX = n, t.mouseDownY = a, t.createRect(n, a)
                            }
                        })), this.mindMap.on("mousemove", (function(e) {
                            if (!t.mindMap.opt.readonly && t.isMousedown) {
                                var i = t.mindMap.toPos(e.clientX, e.clientY),
                                    n = i.x,
                                    a = i.y;
                                t.mouseMoveX = n, t.mouseMoveY = a, Math.abs(n - t.mouseDownX) <= 10 && Math.abs(a - t.mouseDownY) <= 10 || (clearTimeout(t.autoMoveTimer), t.onMove(n, a))
                            }
                        })), this.mindMap.on("mouseup", (function(e) {
                            t.mindMap.opt.readonly || t.isMousedown && (t.mindMap.emit("node_active", null, t.mindMap.renderer.activeNodeList), clearTimeout(t.autoMoveTimer), t.isMousedown = !1, t.rect && t.rect.remove(), t.rect = null)
                        }))
                    }
                }, {
                    key: "onMove",
                    value: function(t, e) {
                        this.rect.plot([
                            [this.mouseDownX, this.mouseDownY],
                            [this.mouseMoveX, this.mouseDownY],
                            [this.mouseMoveX, this.mouseMoveY],
                            [this.mouseDownX, this.mouseMoveY]
                        ]), this.checkInNodes();
                        var i = this.mindMap.opt.selectTranslateStep,
                            n = this.mindMap.opt.selectTranslateLimit,
                            a = 0;
                        t <= this.mindMap.elRect.left + n && (this.mouseDownX += i, this.mindMap.view.translateX(i), a++), t >= this.mindMap.elRect.right - n && (this.mouseDownX -= i, this.mindMap.view.translateX(-i), a++), e <= this.mindMap.elRect.top + n && (this.mouseDownY += i, this.mindMap.view.translateY(i), a++), e >= this.mindMap.elRect.bottom - n && (this.mouseDownY -= i, this.mindMap.view.translateY(-i), a++), a > 0 && this.startAutoMove(t, e)
                    }
                }, {
                    key: "startAutoMove",
                    value: function(t, e) {
                        var i = this;
                        this.autoMoveTimer = setTimeout((function() {
                            i.onMove(t, e)
                        }), 20)
                    }
                }, {
                    key: "createRect",
                    value: function(t, e) {
                        this.rect = this.mindMap.svg.polygon().stroke({
                            color: "#0984e3"
                        }).fill({
                            color: "rgba(9,132,227,0.3)"
                        }).plot([
                            [t, e]
                        ])
                    }
                }, {
                    key: "checkInNodes",
                    value: function() {
                        var t = this,
                            e = this.mindMap.draw.transform(),
                            i = e.scaleX,
                            n = e.scaleY,
                            a = e.translateX,
                            o = e.translateY,
                            r = Math.min(this.mouseDownX, this.mouseMoveX),
                            s = Math.min(this.mouseDownY, this.mouseMoveY),
                            l = Math.max(this.mouseDownX, this.mouseMoveX),
                            c = Math.max(this.mouseDownY, this.mouseMoveY);
                        Gt(this.mindMap.renderer.root, (function(e) {
                            var d = e.left,
                                h = e.top,
                                u = e.width,
                                p = e.height,
                                f = (d + u) * i + a,
                                m = (h + p) * n + o;
                            d = d * i + a, h = h * n + o, d >= r && f <= l && h >= s && m <= c ? t.mindMap.batchExecution.push("activeNode" + e.uid, (function() {
                                e.nodeData.data.isActive || (t.mindMap.renderer.setNodeActive(e, !0), t.mindMap.renderer.addActiveNode(e))
                            })) : e.nodeData.data.isActive && t.mindMap.batchExecution.push("activeNode" + e.uid, (function() {
                                e.nodeData.data.isActive && (t.mindMap.renderer.setNodeActive(e, !1), t.mindMap.renderer.removeActiveNode(e))
                            }))
                        }))
                    }
                }]), t
            }(),
            ri = oi,
            si = function(t) {
                Object(At["a"])(i, t);
                var e = Object(Bt["a"])(i);

                function i(t) {
                    var n, a = t.mindMap;
                    return Object(Ft["a"])(this, i), n = e.call(this, a.renderer), n.mindMap = a, n.reset(), n.bindEvent(), n
                }
                return Object(St["a"])(i, [{
                    key: "reset",
                    value: function() {
                        this.node = null, this.overlapNode = null, this.prevNode = null, this.nextNode = null, this.drawTransform = null, this.clone = null, this.line = null, this.placeholder = null, this.offsetX = 0, this.offsetY = 0, this.cloneNodeLeft = 0, this.cloneNodeTop = 0, this.isMousedown = !1, this.mouseDownX = 0, this.mouseDownY = 0, this.mouseMoveX = 0, this.mouseMoveY = 0
                    }
                }, {
                    key: "bindEvent",
                    value: function() {
                        var t = this;
                        this.checkOverlapNode = ee(this.checkOverlapNode, 300, this), this.mindMap.on("node_mousedown", (function(e, i) {
                            if (!t.mindMap.opt.readonly && !e.isGeneralization && 1 === i.which && !e.isRoot) {
                                i.preventDefault(), t.drawTransform = t.mindMap.draw.transform();
                                var n = t.drawTransform,
                                    a = n.scaleX,
                                    o = n.scaleY,
                                    r = n.translateX,
                                    s = n.translateY;
                                t.offsetX = i.clientX - (e.left * a + r), t.offsetY = i.clientY - (e.top * o + s), t.node = e, t.isMousedown = !0;
                                var l = t.mindMap.toPos(i.clientX, i.clientY),
                                    c = l.x,
                                    d = l.y;
                                t.mouseDownX = c, t.mouseDownY = d
                            }
                        })), this.mindMap.on("mousemove", (function(e) {
                            if (!t.mindMap.opt.readonly && t.isMousedown) {
                                e.preventDefault();
                                var i = t.mindMap.toPos(e.clientX, e.clientY),
                                    n = i.x,
                                    a = i.y;
                                t.mouseMoveX = n, t.mouseMoveY = a, Math.abs(n - t.mouseDownX) <= 10 && Math.abs(a - t.mouseDownY) <= 10 && !t.node.isDrag || (t.mindMap.renderer.clearAllActive(), t.onMove(n, a))
                            }
                        })), this.onMouseup = this.onMouseup.bind(this), this.mindMap.on("node_mouseup", this.onMouseup), this.mindMap.on("mouseup", this.onMouseup)
                    }
                }, {
                    key: "onMouseup",
                    value: function(t) {
                        if (this.isMousedown) {
                            this.isMousedown = !1;
                            var e = this.node.isDrag;
                            if (this.node.isDrag = !1, this.node.show(), this.removeCloneNode(), this.overlapNode) this.mindMap.renderer.setNodeActive(this.overlapNode, !1), this.mindMap.execCommand("MOVE_NODE_TO", this.node, this.overlapNode);
                            else if (this.prevNode) this.mindMap.renderer.setNodeActive(this.prevNode, !1), this.mindMap.execCommand("INSERT_AFTER", this.node, this.prevNode);
                            else if (this.nextNode) this.mindMap.renderer.setNodeActive(this.nextNode, !1), this.mindMap.execCommand("INSERT_BEFORE", this.node, this.nextNode);
                            else if (e) {
                                var i = this.mindMap.toPos(t.clientX - this.offsetX, t.clientY - this.offsetY),
                                    n = i.x,
                                    a = i.y,
                                    o = this.drawTransform,
                                    r = o.scaleX,
                                    s = o.scaleY,
                                    l = o.translateX,
                                    c = o.translateY;
                                n = (n - l) / r, a = (a - c) / s, this.node.left = n, this.node.top = a, this.node.customLeft = n, this.node.customTop = a, this.mindMap.execCommand("SET_NODE_CUSTOM_POSITION", this.node, n, a), this.mindMap.render()
                            }
                            this.reset()
                        }
                    }
                }, {
                    key: "createCloneNode",
                    value: function() {
                        this.clone || (this.clone = this.node.group.clone(), this.clone.opacity(.5), this.clone.css("z-index", 99999), this.node.isDrag = !0, this.node.hide(), this.line = this.draw.path(), this.line.opacity(.5), this.node.style.line(this.line), this.placeholder = this.draw.rect().fill({
                            color: this.node.style.merge("lineColor", !0)
                        }), this.mindMap.draw.add(this.clone))
                    }
                }, {
                    key: "removeCloneNode",
                    value: function() {
                        this.clone && (this.clone.remove(), this.line.remove(), this.placeholder.remove())
                    }
                }, {
                    key: "onMove",
                    value: function(t, e) {
                        if (this.isMousedown) {
                            this.createCloneNode();
                            var i = this.drawTransform,
                                n = i.scaleX,
                                a = i.scaleY,
                                o = i.translateX,
                                r = i.translateY;
                            this.cloneNodeLeft = t - this.offsetX, this.cloneNodeTop = e - this.offsetY, t = (this.cloneNodeLeft - o) / n, e = (this.cloneNodeTop - r) / a;
                            var s = this.clone.transform();
                            this.clone.translate(t - s.translateX, e - s.translateY);
                            var l = this.node.parent;
                            this.line.plot(this.quadraticCurvePath(l.left + l.width / 2, l.top + l.height / 2, t + this.node.width / 2, e + this.node.height / 2)), this.checkOverlapNode()
                        }
                    }
                }, {
                    key: "checkOverlapNode",
                    value: function() {
                        var t = this;
                        if (this.drawTransform) {
                            var e = this.drawTransform,
                                i = e.scaleX,
                                n = e.scaleY,
                                a = e.translateX,
                                o = e.translateY,
                                r = this.cloneNodeLeft + this.node.width * i,
                                s = this.cloneNodeTop + this.node.height * i;
                            this.overlapNode = null, this.prevNode = null, this.nextNode = null, this.placeholder.size(0, 0), Gt(this.mindMap.renderer.root, (function(e) {
                                if (e.nodeData.data.isActive && t.mindMap.renderer.setNodeActive(e, !1), e !== t.node && !t.node.isParent(e) && !(t.overlapNode || t.prevNode && t.nextNode)) {
                                    var l = e.left,
                                        c = e.top,
                                        d = e.width,
                                        h = e.height,
                                        u = l,
                                        p = c,
                                        f = c + h,
                                        m = (l + d) * i + a,
                                        v = (c + h) * n + o;
                                    l = l * i + a, c = c * n + o, t.overlapNode || l <= r && m >= t.cloneNodeLeft && c <= s && v >= t.cloneNodeTop && (t.overlapNode = e), t.prevNode || t.nextNode || !t.node.isBrother(e) || l <= r && m >= t.cloneNodeLeft && (t.cloneNodeTop > v && t.cloneNodeTop <= v + 10 ? (t.prevNode = e, t.placeholder.size(e.width, 10).move(u, f)) : s < c && s >= c - 10 && (t.nextNode = e, t.placeholder.size(e.width, 10).move(u, p - 10)))
                                }
                            })), this.overlapNode && this.mindMap.renderer.setNodeActive(this.overlapNode, !0)
                        }
                    }
                }]), i
            }(de),
            li = si,
            ci = {
                readonly: !1,
                layout: "logicalStructure",
                theme: "default",
                themeConfig: {},
                scaleRatio: .1,
                maxTag: 5,
                exportPadding: 20,
                expandBtnSize: 20,
                imgTextMargin: 5,
                textContentMargin: 2,
                selectTranslateStep: 3,
                selectTranslateLimit: 20,
                customNoteContentShow: null
            },
            di = function() {
                function t() {
                    var e = this,
                        i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object(Ft["a"])(this, t), this.opt = this.handleOpt(Ht()(ci, i)), this.el = this.opt.el, this.elRect = this.el.getBoundingClientRect(), this.width = this.elRect.width, this.height = this.elRect.height, this.svg = Object(ne["f"])().addTo(this.el).size(this.width, this.height), this.draw = this.svg.group(), this.uid = 0, this.initTheme(), this.event = new $t({
                        mindMap: this
                    }), this.keyCommand = new Ue({
                        mindMap: this
                    }), this.command = new Ke({
                        mindMap: this
                    }), this.renderer = new we({
                        mindMap: this
                    }), this.view = new Lt({
                        mindMap: this,
                        draw: this.draw
                    }), this.doExport = new ai({
                        mindMap: this
                    }), this.select = new ri({
                        mindMap: this
                    }), this.drag = new li({
                        mindMap: this
                    }), this.batchExecution = new ti, this.reRender(), setTimeout((function() {
                        e.command.addHistory()
                    }), 0)
                }
                return Object(St["a"])(t, [{
                    key: "handleOpt",
                    value: function(t) {
                        return ot.includes(t.layout) || (t.layout = "logicalStructure"), t.theme = t.theme && Xe[t.theme] ? t.theme : "default", t
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        this.batchExecution.push("render", (function() {
                            t.initTheme(), t.renderer.reRender = !1, t.renderer.render()
                        }))
                    }
                }, {
                    key: "reRender",
                    value: function() {
                        var t = this;
                        this.batchExecution.push("render", (function() {
                            t.draw.clear(), t.initTheme(), t.renderer.reRender = !0, t.renderer.render()
                        }))
                    }
                }, {
                    key: "resize",
                    value: function() {
                        this.elRect = this.el.getBoundingClientRect(), this.width = this.elRect.width, this.height = this.elRect.height, this.svg.size(this.width, this.height)
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        this.event.on(t, e)
                    }
                }, {
                    key: "emit",
                    value: function(t) {
                        for (var e, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                        (e = this.event).emit.apply(e, [t].concat(n))
                    }
                }, {
                    key: "off",
                    value: function(t, e) {
                        this.event.off(t, e)
                    }
                }, {
                    key: "initTheme",
                    value: function() {
                        this.themeConfig = Ht()(Xe[this.opt.theme], this.opt.themeConfig), Xt.setBackgroundStyle(this.el, this.themeConfig)
                    }
                }, {
                    key: "setTheme",
                    value: function(t) {
                        this.renderer.clearAllActive(), this.opt.theme = t, this.reRender()
                    }
                }, {
                    key: "getTheme",
                    value: function() {
                        return this.opt.theme
                    }
                }, {
                    key: "setThemeConfig",
                    value: function(t) {
                        this.opt.themeConfig = t, this.reRender()
                    }
                }, {
                    key: "getCustomThemeConfig",
                    value: function() {
                        return this.opt.themeConfig
                    }
                }, {
                    key: "getThemeConfig",
                    value: function(t) {
                        return void 0 === t ? this.themeConfig : this.themeConfig[t]
                    }
                }, {
                    key: "getLayout",
                    value: function() {
                        return this.opt.layout
                    }
                }, {
                    key: "setLayout",
                    value: function(t) {
                        ot.includes(t) || (t = "logicalStructure"), this.opt.layout = t, this.renderer.setLayout(), this.render()
                    }
                }, {
                    key: "execCommand",
                    value: function() {
                        var t;
                        (t = this.command).exec.apply(t, arguments)
                    }
                }, {
                    key: "setData",
                    value: function(t) {
                        this.execCommand("CLEAR_ACTIVE_NODE"), this.command.clearHistory(), this.renderer.renderTree = t, this.reRender()
                    }
                }, {
                    key: "export",
                    value: function() {
                        var t = Object(m["a"])(regeneratorRuntime.mark((function t() {
                            var e, i, n = arguments;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, (e = this.doExport).export.apply(e, n);
                                    case 2:
                                        return i = t.sent, t.abrupt("return", i);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "toPos",
                    value: function(t, e) {
                        return {
                            x: t - this.elRect.left,
                            y: e - this.elRect.top
                        }
                    }
                }, {
                    key: "setMode",
                    value: function(t) {
                        ["readonly", "edit"].includes(t) && (this.opt.readonly = "readonly" === t, this.opt.readonly && this.renderer.clearAllActive(), this.emit("mode_change", t))
                    }
                }]), t
            }(),
            hi = di,
            ui = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Sidebar", {
                    ref: "sidebar",
                    attrs: {
                        title: "Outline"
                    }
                }, [i("el-tree", {
                    attrs: {
                        data: t.data,
                        props: t.defaultProps,
                        "default-expand-all": ""
                    }
                })], 1)
            },
            pi = [],
            fi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "sidebarContainer",
                    class: {
                        show: t.show
                    },
                    style: {
                        zIndex: t.zIndex
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation()
                        }
                    }
                }, [i("span", {
                    staticClass: "closeBtn el-icon-close",
                    on: {
                        click: function(e) {
                            t.show = !1
                        }
                    }
                }), t.title ? i("div", {
                    staticClass: "sidebarHeader"
                }, [t._v(" " + t._s(t.title) + " ")]) : t._e(), i("div", {
                    staticClass: "sidebarContent"
                }, [t._t("default")], 2)])
            },
            mi = [],
            vi = [{
                name: "Song Dynasty",
                value: "Song Dynasty, SimSun, Songti SC"
            }, {
                name: "Microsoft Yahei",
                value: "Microsoft Yahei, Microsoft YaHei"
            }, {
                name: "Italics",
                value: "Italics, italics_GB2312, SimKai, STKaiti"
            }, {
                name: "Black body",
                value: "Black body, SimHei, Heiti SC"
            }, {
                name: "Official script",
                value: "Official script, SimLi"
            }, {
                name: "Andale Mono",
                value: "andale mono"
            }, {
                name: "Arial",
                value: "arial, helvetica, sans-serif"
            }, {
                name: "arialBlack",
                value: "arial black, avant garde"
            }, {
                name: "Comic Sans Ms",
                value: "comic sans ms"
            }, {
                name: "Impact",
                value: "impact, chicago"
            }, {
                name: "Times New Roman",
                value: "times new roman"
            }, {
                name: "Sans-Serif",
                value: "sans-serif"
            }, {
                name: "serif",
                value: "serif"
            }],
            gi = [10, 12, 16, 18, 24, 32, 48],
            bi = [1, 1.5, 2, 2.5, 3],
            Ci = ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
            yi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            xi = [{
                name: "Solid line",
                value: "none"
            }, {
                name: "Solid line 1",
                value: "5,5"
            }, {
                name: "Solid line 2",
                value: "10,10"
            }, {
                name: "Solid line 3",
                value: "20,10,5,5,5,10"
            }, {
                name: "Solid line 4",
                value: "5, 5, 1, 5"
            }, {
                name: "Solid line 5",
                value: "15, 10, 5, 10, 15"
            }, {
                name: "Solid line 6",
                value: "1, 5"
            }],
            wi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            Mi = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            ki = [{
                name: "No repeat",
                value: "no-repeat"
            }, {
                name: "repeat",
                value: "repeat"
            }, {
                name: "Horizontal repeat",
                value: "repeat-x"
            }, {
                name: "Vertical repeat",
                value: "repeat-y"
            }],
            Ni = {
                sidebarZIndex: 1
            },
            _i = [{
                type: "Taxonomy operation",
                list: [{
                    icon: "icontianjiazijiedian",
                    name: "Insert subordinate node",
                    value: "Tab"
                }, {
                    icon: "iconjiedian",
                    name: "Insert sibling node",
                    value: "Enter"
                }, {
                    icon: "iconshangyi",
                    name: "Move node up",
                    value: "Ctrl + ↑"
                }, {
                    icon: "iconxiayi",
                    name: "Move node down",
                    value: "Ctrl + ↓"
                }, {
                    icon: "icongaikuozonglan",
                    name: "Insert Summary",
                    value: "Ctrl + S"
                }, {
                    icon: "iconzhankai",
                    name: "Expand/collapse node",
                    value: "/"
                }, {
                    icon: "iconshanchu",
                    name: "Delete node",
                    value: "Delete | Backspace"
                }, {
                    icon: "iconfuzhi",
                    name: "Copy node",
                    value: "Ctrl + C"
                }, {
                    icon: "iconjianqie",
                    name: "Cut node",
                    value: "Ctrl + X"
                }, {
                    icon: "iconniantie",
                    name: "Paste node",
                    value: "Ctrl + V"
                }, {
                    icon: "iconbianji",
                    name: "Edit node",
                    value: "F2"
                }, {
                    icon: "iconhuanhang",
                    name: "Text wrapping",
                    value: "Shift + Enter"
                }, {
                    icon: "iconhoutui-shi",
                    name: "undo",
                    value: "Ctrl + Z"
                }, {
                    icon: "iconqianjin1",
                    name: "Redo",
                    value: "Ctrl + Y"
                }, {
                    icon: "iconquanxuan",
                    name: "Select all",
                    value: "Ctrl + A"
                }, {
                    icon: "iconquanxuan",
                    name: "Multiple choice",
                    value: "Right key / Ctrl + Left key"
                }, {
                    icon: "iconzhengli",
                    name: "Auto align",
                    value: "Ctrl + L"
                }]
            }, {
                type: "Taxonomy Area",
                list: [{
                    icon: "iconfangda",
                    name: "Zoom in",
                    value: "Ctrl + +"
                }, {
                    icon: "iconsuoxiao",
                    name: "Zoom out",
                    value: "Ctrl + -"
                }, {
                    icon: "icondingwei",
                    name: "Reset",
                    value: "Ctrl + Enter"
                }]
            }],
            zi = {
                name: "Sidebar",
                props: {
                    title: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        show: !1,
                        zIndex: 0
                    }
                },
                watch: {
                    show: function(t, e) {
                        t && !e && (this.zIndex = Ni.sidebarZIndex++)
                    }
                }
            },
            Di = zi,
            Ei = (i("1588"), Object(l["a"])(Di, fi, mi, !1, null, "58b0a121", null)),
            Fi = Ei.exports,
            Si = {
                name: "Outline",
                components: {
                    Sidebar: Fi
                },
                data: function() {
                    return {
                        data: [],
                        defaultProps: {
                            label: function(t) {
                                return t.data.text
                            }
                        }
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("data_change", (function(e) {
                        t.data = [e]
                    })), this.$bus.$on("showOutline", (function() {
                        t.$refs.sidebar.show = !1, t.$nextTick((function() {
                            t.$refs.sidebar.show = !0
                        }))
                    }))
                }
            },
            Ti = Si,
            Li = Object(l["a"])(Ti, ui, pi, !1, null, "2f02d96e", null),
            Ai = Li.exports,
            Bi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Sidebar", {
                    ref: "sidebar",
                    attrs: {
                        title: "Node style"
                    }
                }, [i("div", {
                    staticClass: "styleBox"
                }, [i("el-tabs", {
                    staticClass: "tab",
                    on: {
                        "tab-click": t.handleTabClick
                    },
                    model: {
                        value: t.activeTab,
                        callback: function(e) {
                            t.activeTab = e
                        },
                        expression: "activeTab"
                    }
                }, [i("el-tab-pane", {
                    attrs: {
                        label: "Normal",
                        name: "normal"
                    }
                }), i("el-tab-pane", {
                    attrs: {
                        label: "Selected state",
                        name: "active"
                    }
                })], 1), t.activeNodes.length > 0 ? i("div", {
                    staticClass: "sidebarContent"
                }, [i("div", {
                    staticClass: "title noTop"
                }, [t._v("Font")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Font")]), i("el-select", {
                    attrs: {
                        size: "mini",
                        placeholder: ""
                    },
                    on: {
                        change: function(e) {
                            return t.update("fontFamily")
                        }
                    },
                    model: {
                        value: t.style.fontFamily,
                        callback: function(e) {
                            t.$set(t.style, "fontFamily", e)
                        },
                        expression: "style.fontFamily"
                    }
                }, t._l(t.fontFamilyList, (function(t) {
                    return i("el-option", {
                        key: t.value,
                        style: {
                            fontFamily: t.value
                        },
                        attrs: {
                            label: t.name,
                            value: t.value
                        }
                    })
                })), 1)], 1)]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Font size")]), i("el-select", {
                    staticStyle: {
                        width: "80px"
                    },
                    attrs: {
                        size: "mini",
                        placeholder: ""
                    },
                    on: {
                        change: function(e) {
                            return t.update("fontSize")
                        }
                    },
                    model: {
                        value: t.style.fontSize,
                        callback: function(e) {
                            t.$set(t.style, "fontSize", e)
                        },
                        expression: "style.fontSize"
                    }
                }, t._l(t.fontSizeList, (function(t) {
                    return i("el-option", {
                        key: t,
                        attrs: {
                            label: t,
                            value: t
                        }
                    })
                })), 1)], 1), i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Line height")]), i("el-select", {
                    staticStyle: {
                        width: "80px"
                    },
                    attrs: {
                        size: "mini",
                        placeholder: ""
                    },
                    on: {
                        change: function(e) {
                            return t.update("lineHeight")
                        }
                    },
                    model: {
                        value: t.style.lineHeight,
                        callback: function(e) {
                            t.$set(t.style, "lineHeight", e)
                        },
                        expression: "style.lineHeight"
                    }
                }, t._l(t.lineHeightList, (function(t) {
                    return i("el-option", {
                        key: t,
                        attrs: {
                            label: t,
                            value: t
                        }
                    })
                })), 1)], 1)]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "btnGroup"
                }, [i("el-tooltip", {
                    attrs: {
                        content: "Color",
                        placement: "bottom"
                    }
                }, [i("div", {
                    directives: [{
                        name: "popover",
                        rawName: "v-popover:popover",
                        arg: "popover"
                    }],
                    staticClass: "styleBtn"
                }, [t._v(" A "), i("span", {
                    staticClass: "colorShow",
                    style: {
                        backgroundColor: t.style.color || "#eee"
                    }
                })])]), i("el-tooltip", {
                    attrs: {
                        content: "Bold",
                        placement: "bottom"
                    }
                }, [i("div", {
                    staticClass: "styleBtn",
                    class: {
                        actived: "bold" === t.style.fontWeight
                    },
                    on: {
                        click: t.toggleFontWeight
                    }
                }, [t._v(" B ")])]), i("el-tooltip", {
                    attrs: {
                        content: "Italic",
                        placement: "bottom"
                    }
                }, [i("div", {
                    staticClass: "styleBtn i",
                    class: {
                        actived: "italic" === t.style.fontStyle
                    },
                    on: {
                        click: t.toggleFontStyle
                    }
                }, [t._v(" I ")])]), i("el-tooltip", {
                    attrs: {
                        content: "Underline",
                        placement: "bottom"
                    }
                }, [i("div", {
                    directives: [{
                        name: "popover",
                        rawName: "v-popover:popover2",
                        arg: "popover2"
                    }],
                    staticClass: "styleBtn u",
                    style: {
                        textDecoration: t.style.textDecoration || "none"
                    }
                }, [t._v(" U ")])])], 1), i("el-popover", {
                    ref: "popover",
                    attrs: {
                        placement: "bottom",
                        trigger: "click"
                    }
                }, [i("Color", {
                    attrs: {
                        color: t.style.color
                    },
                    on: {
                        change: t.changeFontColor
                    }
                })], 1), i("el-popover", {
                    ref: "popover2",
                    attrs: {
                        placement: "bottom",
                        trigger: "click"
                    }
                }, [i("el-radio-group", {
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        change: function(e) {
                            return t.update("textDecoration")
                        }
                    },
                    model: {
                        value: t.style.textDecoration,
                        callback: function(e) {
                            t.$set(t.style, "textDecoration", e)
                        },
                        expression: "style.textDecoration"
                    }
                }, [i("el-radio-button", {
                    attrs: {
                        label: "underline"
                    }
                }, [t._v("Down Underline")]), i("el-radio-button", {
                    attrs: {
                        label: "line-through"
                    }
                }, [t._v("Middle Underline")]), i("el-radio-button", {
                    attrs: {
                        label: "overline"
                    }
                }, [t._v("Top Underline")])], 1)], 1)], 1), i("div", {
                    staticClass: "title"
                }, [t._v("Frame")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Color")]), i("span", {
                    directives: [{
                        name: "popover",
                        rawName: "v-popover:popover3",
                        arg: "popover3"
                    }],
                    staticClass: "block",
                    style: {
                        width: "80px",
                        backgroundColor: t.style.borderColor
                    }
                }), i("el-popover", {
                    ref: "popover3",
                    attrs: {
                        placement: "bottom",
                        trigger: "click"
                    }
                }, [i("Color", {
                    attrs: {
                        color: t.style.borderColor
                    },
                    on: {
                        change: t.changeBorderColor
                    }
                })], 1)], 1), i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    directives: [{
                        name: "popover",
                        rawName: "v-popover:popover5",
                        arg: "popover5"
                    }],
                    staticClass: "name"
                }, [t._v("Style")]), i("el-select", {
                    staticStyle: {
                        width: "80px"
                    },
                    attrs: {
                        size: "mini",
                        placeholder: ""
                    },
                    on: {
                        change: function(e) {
                            return t.update("borderDasharray")
                        }
                    },
                    model: {
                        value: t.style.borderDasharray,
                        callback: function(e) {
                            t.$set(t.style, "borderDasharray", e)
                        },
                        expression: "style.borderDasharray"
                    }
                }, t._l(t.borderDasharrayList, (function(t) {
                    return i("el-option", {
                        key: t.value,
                        attrs: {
                            label: t.name,
                            value: t.value
                        }
                    })
                })), 1)], 1)]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Width")]), i("el-select", {
                    staticStyle: {
                        width: "80px"
                    },
                    attrs: {
                        size: "mini",
                        placeholder: ""
                    },
                    on: {
                        change: function(e) {
                            return t.update("borderWidth")
                        }
                    },
                    model: {
                        value: t.style.borderWidth,
                        callback: function(e) {
                            t.$set(t.style, "borderWidth", e)
                        },
                        expression: "style.borderWidth"
                    }
                }, t._l(t.borderWidthList, (function(t) {
                    return i("el-option", {
                        key: t,
                        attrs: {
                            label: t,
                            value: t
                        }
                    })
                })), 1)], 1), i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Rounded corners")]), i("el-select", {
                    staticStyle: {
                        width: "80px"
                    },
                    attrs: {
                        size: "mini",
                        placeholder: ""
                    },
                    on: {
                        change: function(e) {
                            return t.update("borderRadius")
                        }
                    },
                    model: {
                        value: t.style.borderRadius,
                        callback: function(e) {
                            t.$set(t.style, "borderRadius", e)
                        },
                        expression: "style.borderRadius"
                    }
                }, t._l(t.borderRadiusList, (function(t) {
                    return i("el-option", {
                        key: t,
                        attrs: {
                            label: t,
                            value: t
                        }
                    })
                })), 1)], 1)]), i("div", {
                    staticClass: "title"
                }, [t._v("Background")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Color")]), i("span", {
                    directives: [{
                        name: "popover",
                        rawName: "v-popover:popover4",
                        arg: "popover4"
                    }],
                    staticClass: "block",
                    style: {
                        backgroundColor: t.style.fillColor
                    }
                }), i("el-popover", {
                    ref: "popover4",
                    attrs: {
                        placement: "bottom",
                        trigger: "click"
                    }
                }, [i("Color", {
                    attrs: {
                        color: t.style.fillColor
                    },
                    on: {
                        change: t.changeFillColor
                    }
                })], 1)], 1)]), i("div", {
                    staticClass: "title noTop"
                }, [t._v("Node padding")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Level")]), i("el-slider", {
                    staticStyle: {
                        width: "200px"
                    },
                    on: {
                        change: function(e) {
                            return t.update("paddingX")
                        }
                    },
                    model: {
                        value: t.style.paddingX,
                        callback: function(e) {
                            t.$set(t.style, "paddingX", e)
                        },
                        expression: "style.paddingX"
                    }
                })], 1)]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Vertical")]), i("el-slider", {
                    staticStyle: {
                        width: "200px"
                    },
                    on: {
                        change: function(e) {
                            return t.update("paddingY")
                        }
                    },
                    model: {
                        value: t.style.paddingY,
                        callback: function(e) {
                            t.$set(t.style, "paddingY", e)
                        },
                        expression: "style.paddingY"
                    }
                })], 1)])]) : t._e()], 1)])
            },
            Oi = [],
            Ii = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [i("div", {
                    staticClass: "colorList"
                }, t._l(t.colorList, (function(e) {
                    return i("span", {
                        key: e,
                        staticClass: "colorItem",
                        style: {
                            backgroundColor: e
                        },
                        on: {
                            click: function(i) {
                                return t.clickColorItem(e)
                            }
                        }
                    })
                })), 0), i("div", {
                    staticClass: "moreColor"
                }, [i("span", [t._v("More color")]), i("el-color-picker", {
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        change: t.changeColor
                    },
                    model: {
                        value: t.selectColor,
                        callback: function(e) {
                            t.selectColor = e
                        },
                        expression: "selectColor"
                    }
                })], 1)])
            },
            Ri = [],
            $i = {
                name: "Color",
                props: {
                    color: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        colorList: Ci,
                        selectColor: ""
                    }
                },
                watch: {
                    color: function() {
                        this.selectColor = this.color
                    }
                },
                created: function() {
                    this.selectColor = this.color
                },
                methods: {
                    clickColorItem: function(t) {
                        this.$emit("change", t)
                    },
                    changeColor: function() {
                        this.$emit("change", this.selectColor)
                    }
                }
            },
            ji = $i,
            Wi = (i("031a"), Object(l["a"])(ji, Ii, Ri, !1, null, "f216261e", null)),
            Hi = Wi.exports,
            Yi = {
                name: "Style",
                components: {
                    Sidebar: Fi,
                    Color: Hi
                },
                data: function() {
                    return {
                        fontFamilyList: vi,
                        fontSizeList: gi,
                        borderWidthList: yi,
                        borderDasharrayList: xi,
                        borderRadiusList: wi,
                        lineHeightList: bi,
                        activeNodes: [],
                        activeTab: "normal",
                        style: {
                            paddingX: 0,
                            paddingY: 0,
                            color: "",
                            fontFamily: "",
                            fontSize: "",
                            lineHeight: "",
                            textDecoration: "",
                            fontWeight: "",
                            fontStyle: "",
                            borderWidth: "",
                            borderColor: "",
                            fillColor: "",
                            borderDasharray: "",
                            borderRadius: ""
                        }
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("node_active", (function() {
                        for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                        t.$refs.sidebar.show = !1, t.$nextTick((function() {
                            t.activeTab = "normal", t.activeNodes = i[1], t.$refs.sidebar.show = t.activeNodes.length > 0, t.initNodeStyle()
                        }))
                    }))
                },
                methods: {
                    handleTabClick: function() {
                        this.initNodeStyle()
                    },
                    initNodeStyle: function() {
                        var t = this;
                        this.activeNodes.length <= 0 ? this.activeTab = "normal" : ["paddingX", "paddingY", "color", "fontFamily", "fontSize", "lineHeight", "textDecoration", "fontWeight", "fontStyle", "borderWidth", "borderColor", "fillColor", "borderDasharray", "borderRadius"].forEach((function(e) {
                            t.style[e] = t.activeNodes[0].getStyle(e, !1, "active" === t.activeTab)
                        }))
                    },
                    update: function(t) {
                        var e = this;
                        this.activeNodes.forEach((function(i) {
                            i.setStyle(t, e.style[t], "active" === e.activeTab)
                        }))
                    },
                    toggleFontWeight: function() {
                        "bold" === this.style.fontWeight ? this.style.fontWeight = "normal" : this.style.fontWeight = "bold", this.update("fontWeight")
                    },
                    toggleFontStyle: function() {
                        "italic" === this.style.fontStyle ? this.style.fontStyle = "normal" : this.style.fontStyle = "italic", this.update("fontStyle")
                    },
                    changeFontColor: function(t) {
                        this.style.color = t, this.update("color")
                    },
                    changeBorderColor: function(t) {
                        this.style.borderColor = t, this.update("borderColor")
                    },
                    changeFillColor: function(t) {
                        this.style.fillColor = t, this.update("fillColor")
                    }
                }
            },
            Pi = Yi,
            Xi = (i("3278"), Object(l["a"])(Pi, Bi, Oi, !1, null, "66ea57f1", null)),
            Vi = Xi.exports,
            Gi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Sidebar", {
                    ref: "sidebar",
                    attrs: {
                        title: "Basic style"
                    }
                }, [t.data ? i("div", {
                    staticClass: "sidebarContent"
                }, [i("div", {
                    staticClass: "title noTop"
                }, [t._v("Background")]), i("div", {
                    staticClass: "row"
                }, [i("el-tabs", {
                    staticClass: "tab",
                    model: {
                        value: t.activeTab,
                        callback: function(e) {
                            t.activeTab = e
                        },
                        expression: "activeTab"
                    }
                }, [i("el-tab-pane", {
                    attrs: {
                        label: "Color",
                        name: "color"
                    }
                }, [i("Color", {
                    attrs: {
                        color: t.style.backgroundColor
                    },
                    on: {
                        change: function(e) {
                            t.update("backgroundColor", e)
                        }
                    }
                })], 1), i("el-tab-pane", {
                    attrs: {
                        label: "Image",
                        name: "image"
                    }
                }, [i("ImgUpload", {
                    staticClass: "imgUpload",
                    on: {
                        change: function(e) {
                            t.update("backgroundImage", e)
                        }
                    },
                    model: {
                        value: t.style.backgroundImage,
                        callback: function(e) {
                            t.$set(t.style, "backgroundImage", e)
                        },
                        expression: "style.backgroundImage"
                    }
                }), i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Image Repeat")]), i("el-select", {
                    staticStyle: {
                        width: "120px"
                    },
                    attrs: {
                        size: "mini",
                        placeholder: ""
                    },
                    on: {
                        change: function(e) {
                            t.update("backgroundRepeat", e)
                        }
                    },
                    model: {
                        value: t.style.backgroundRepeat,
                        callback: function(e) {
                            t.$set(t.style, "backgroundRepeat", e)
                        },
                        expression: "style.backgroundRepeat"
                    }
                }, t._l(t.backgroundRepeatList, (function(t) {
                    return i("el-option", {
                        key: t.value,
                        attrs: {
                            label: t.name,
                            value: t.value
                        }
                    })
                })), 1)], 1)], 1)], 1)], 1), i("div", {
                    staticClass: "title noTop"
                }, [t._v("Connect")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Color")]), i("span", {
                    directives: [{
                        name: "popover",
                        rawName: "v-popover:popover",
                        arg: "popover"
                    }],
                    staticClass: "block",
                    style: {
                        backgroundColor: t.style.lineColor
                    }
                }), i("el-popover", {
                    ref: "popover",
                    attrs: {
                        placement: "bottom",
                        trigger: "click"
                    }
                }, [i("Color", {
                    attrs: {
                        color: t.style.lineColor
                    },
                    on: {
                        change: function(e) {
                            t.update("lineColor", e)
                        }
                    }
                })], 1)], 1), i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Thickness")]), i("el-select", {
                    staticStyle: {
                        width: "80px"
                    },
                    attrs: {
                        size: "mini",
                        placeholder: ""
                    },
                    on: {
                        change: function(e) {
                            t.update("lineWidth", e)
                        }
                    },
                    model: {
                        value: t.style.lineWidth,
                        callback: function(e) {
                            t.$set(t.style, "lineWidth", e)
                        },
                        expression: "style.lineWidth"
                    }
                }, t._l(t.lineWidthList, (function(t) {
                    return i("el-option", {
                        key: t,
                        attrs: {
                            label: t,
                            value: t
                        }
                    })
                })), 1)], 1)]), i("div", {
                    staticClass: "title noTop"
                }, [t._v("Summary of Connect")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Color")]), i("span", {
                    directives: [{
                        name: "popover",
                        rawName: "v-popover:popover",
                        arg: "popover"
                    }],
                    staticClass: "block",
                    style: {
                        backgroundColor: t.style.generalizationLineColor
                    }
                }), i("el-popover", {
                    ref: "popover",
                    attrs: {
                        placement: "bottom",
                        trigger: "click"
                    }
                }, [i("Color", {
                    attrs: {
                        color: t.style.generalizationLineColor
                    },
                    on: {
                        change: function(e) {
                            t.update("generalizationLineColor", e)
                        }
                    }
                })], 1)], 1), i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Thickness")]), i("el-select", {
                    staticStyle: {
                        width: "80px"
                    },
                    attrs: {
                        size: "mini",
                        placeholder: ""
                    },
                    on: {
                        change: function(e) {
                            t.update("generalizationLineWidth", e)
                        }
                    },
                    model: {
                        value: t.style.generalizationLineWidth,
                        callback: function(e) {
                            t.$set(t.style, "generalizationLineWidth", e)
                        },
                        expression: "style.generalizationLineWidth"
                    }
                }, t._l(t.lineWidthList, (function(t) {
                    return i("el-option", {
                        key: t,
                        attrs: {
                            label: t,
                            value: t
                        }
                    })
                })), 1)], 1)]), i("div", {
                    staticClass: "title noTop"
                }, [t._v("Node padding")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Level")]), i("el-slider", {
                    staticStyle: {
                        width: "200px"
                    },
                    on: {
                        change: function(e) {
                            t.update("paddingX", e)
                        }
                    },
                    model: {
                        value: t.style.paddingX,
                        callback: function(e) {
                            t.$set(t.style, "paddingX", e)
                        },
                        expression: "style.paddingX"
                    }
                })], 1)]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Vertical")]), i("el-slider", {
                    staticStyle: {
                        width: "200px"
                    },
                    on: {
                        change: function(e) {
                            t.update("paddingY", e)
                        }
                    },
                    model: {
                        value: t.style.paddingY,
                        callback: function(e) {
                            t.$set(t.style, "paddingY", e)
                        },
                        expression: "style.paddingY"
                    }
                })], 1)]), i("div", {
                    staticClass: "title noTop"
                }, [t._v("Image")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Maximum Width")]), i("el-slider", {
                    staticStyle: {
                        width: "140px"
                    },
                    attrs: {
                        min: 10,
                        max: 300
                    },
                    on: {
                        change: function(e) {
                            t.update("imgMaxWidth", e)
                        }
                    },
                    model: {
                        value: t.style.imgMaxWidth,
                        callback: function(e) {
                            t.$set(t.style, "imgMaxWidth", e)
                        },
                        expression: "style.imgMaxWidth"
                    }
                })], 1)]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Maximum height")]), i("el-slider", {
                    staticStyle: {
                        width: "140px"
                    },
                    attrs: {
                        min: 10,
                        max: 300
                    },
                    on: {
                        change: function(e) {
                            t.update("imgMaxHeight", e)
                        }
                    },
                    model: {
                        value: t.style.imgMaxHeight,
                        callback: function(e) {
                            t.$set(t.style, "imgMaxHeight", e)
                        },
                        expression: "style.imgMaxHeight"
                    }
                })], 1)]), i("div", {
                    staticClass: "title noTop"
                }, [t._v("Icon")]), i("div", {
                    staticClass: "row"
                }, [i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Size")]), i("el-slider", {
                    staticStyle: {
                        width: "200px"
                    },
                    attrs: {
                        min: 12,
                        max: 50
                    },
                    on: {
                        change: function(e) {
                            t.update("iconSize", e)
                        }
                    },
                    model: {
                        value: t.style.iconSize,
                        callback: function(e) {
                            t.$set(t.style, "iconSize", e)
                        },
                        expression: "style.iconSize"
                    }
                })], 1)]), i("div", {
                    staticClass: "title noTop"
                }, [t._v("Node margin")]), i("div", {
                    staticClass: "row column"
                }, [i("el-tabs", {
                    staticClass: "tab",
                    on: {
                        "tab-click": t.initMarginStyle
                    },
                    model: {
                        value: t.marginActiveTab,
                        callback: function(e) {
                            t.marginActiveTab = e
                        },
                        expression: "marginActiveTab"
                    }
                }, [i("el-tab-pane", {
                    attrs: {
                        label: "Secondary Node",
                        name: "second"
                    }
                }), i("el-tab-pane", {
                    attrs: {
                        label: "Level 3 and above Nodes",
                        name: "node"
                    }
                })], 1), i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Level")]), i("el-slider", {
                    staticStyle: {
                        width: "200px"
                    },
                    attrs: {
                        max: 200
                    },
                    on: {
                        change: function(e) {
                            t.updateMargin("marginX", e)
                        }
                    },
                    model: {
                        value: t.style.marginX,
                        callback: function(e) {
                            t.$set(t.style, "marginX", e)
                        },
                        expression: "style.marginX"
                    }
                })], 1), i("div", {
                    staticClass: "rowItem"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Vertical")]), i("el-slider", {
                    staticStyle: {
                        width: "200px"
                    },
                    attrs: {
                        max: 200
                    },
                    on: {
                        change: function(e) {
                            t.updateMargin("marginY", e)
                        }
                    },
                    model: {
                        value: t.style.marginY,
                        callback: function(e) {
                            t.$set(t.style, "marginY", e)
                        },
                        expression: "style.marginY"
                    }
                })], 1)], 1)]) : t._e()])
            },
            Zi = [],
            Ui = function() {
                return {
                    image: "/enJFNMHnedQTYTESGfDkctCp2.jpeg",
                    imageTitle: "ImageName",
                    imageSize: {
                        width: 1e3,
                        height: 563
                    },
                    icon: ["priority_1"],
                    tag: ["Label1", "Label2"],
                    hyperlink: "https://www.molecularconnections.com/",
                    hyperlinkTitle: "MCRPL",
                    note: "MCRPL\nTaxonomy"
                }
            },
            Ji = (Object(f["a"])({
                text: "Branch Node"
            }, Ui()), Object(f["a"])({
                text: "Branch Node"
            }, Ui()), {
                root: {
                    data: {
                        text: "Root Node"
                    },
                    children: [{
                        data: {
                            text: "Secondary Node",
                            generalization: {
                                text: "Summary"
                            }
                        },
                        children: [{
                            data: {
                                text: "Branch Node"
                            },
                            children: []
                        }, {
                            data: {
                                text: "Branch Node"
                            },
                            children: []
                        }]
                    }]
                }
            }),
            Ki = Object(f["a"])(Object(f["a"])({}, Ji), {}, {
                theme: {
                    template: "vitalityOrange",
                    config: {}
                },
                layout: "logicalStructure"
            }),
            Qi = "SIMPLE_MIND_MAP_DATA",
            qi = function t(e, i) {
                return e.data = Jt(i.data), e.children = [], i.children && i.children.length > 0 && i.children.forEach((function(i, n) {
                    e.children[n] = t({}, i)
                })), e
            },
            tn = function() {
                var t = localStorage.getItem(Qi);
                if (null === t) return Jt(Ki);
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return Jt(Ki)
                }
            },
            en = function(t) {
                try {
                    var e = tn();
                    e.root = qi({}, t);
                    var i = JSON.stringify(e);
                    localStorage.setItem(Qi, i)
                } catch (n) {
                    console.log(n)
                }
            },
            nn = function(t) {
                try {
                    var e = tn();
                    e = Object(f["a"])(Object(f["a"])({}, e), t);
                    var i = JSON.stringify(e);
                    localStorage.setItem(Qi, i)
                } catch (n) {
                    console.log(n)
                }
            },
            an = {
                name: "BaseStyle",
                components: {
                    Sidebar: Fi,
                    Color: Hi,
                    ImgUpload: N
                },
                props: {
                    data: {
                        type: [Object, null],
                        default: null
                    },
                    mindMap: {
                        type: Object
                    }
                },
                data: function() {
                    return {
                        lineWidthList: Mi,
                        backgroundRepeatList: ki,
                        activeTab: "color",
                        marginActiveTab: "second",
                        style: {
                            backgroundColor: "",
                            lineColor: "",
                            lineWidth: "",
                            generalizationLineWidth: "",
                            generalizationLineColor: "",
                            paddingX: 0,
                            paddingY: 0,
                            imgMaxWidth: 0,
                            imgMaxHeight: 0,
                            iconSize: 0,
                            backgroundImage: "",
                            backgroundRepeat: "no-repeat",
                            marginX: 0,
                            marginY: 0
                        }
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("showBaseStyle", (function() {
                        t.$refs.sidebar.show = !1, t.$nextTick((function() {
                            t.$refs.sidebar.show = !0, t.initStyle()
                        }))
                    }))
                },
                methods: {
                    initStyle: function() {
                        var t = this;
                        ["backgroundColor", "lineWidth", "lineColor", "generalizationLineWidth", "generalizationLineColor", "paddingX", "paddingY", "imgMaxWidth", "imgMaxHeight", "iconSize", "backgroundImage", "backgroundRepeat"].forEach((function(e) {
                            t.style[e] = t.mindMap.getThemeConfig(e), "backgroundImage" === e && "none" === t.style[e] && (t.style[e] = "")
                        })), this.initMarginStyle()
                    },
                    initMarginStyle: function() {
                        var t = this;
                        ["marginX", "marginY"].forEach((function(e) {
                            t.style[e] = t.mindMap.getThemeConfig()[t.marginActiveTab][e]
                        }))
                    },
                    update: function(t, e) {
                        this.style[t] = "backgroundImage" === t && "none" === e ? "" : e, this.data.theme.config[t] = e, this.mindMap.setThemeConfig(this.data.theme.config), nn({
                            theme: {
                                template: this.mindMap.getTheme(),
                                config: this.data.theme.config
                            }
                        })
                    },
                    updateMargin: function(t, e) {
                        this.style[t] = e, this.data.theme.config[this.marginActiveTab] || (this.data.theme.config[this.marginActiveTab] = {}), this.data.theme.config[this.marginActiveTab][t] = e, this.mindMap.setThemeConfig(this.data.theme.config)
                    }
                }
            },
            on = an,
            rn = (i("a4c7"), Object(l["a"])(on, Gi, Zi, !1, null, "108c8c77", null)),
            sn = rn.exports,
            ln = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Sidebar", {
                    ref: "sidebar",
                    attrs: {
                        title: "Theme"
                    }
                }, [i("div", {
                    staticClass: "themeList"
                }, t._l(t.themeList, (function(e) {
                    return i("div", {
                        key: e.value,
                        staticClass: "themeItem",
                        class: {
                            active: e.value === t.theme
                        },
                        on: {
                            click: function(i) {
                                return t.useTheme(e)
                            }
                        }
                    }, [i("div", {
                        staticClass: "imgBox"
                    }, [i("img", {
                        attrs: {
                            src: e.img,
                            alt: ""
                        }
                    })]), i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.name))])])
                })), 0)])
            },
            cn = [],
            dn = {
                name: "Theme",
                components: {
                    Sidebar: Fi
                },
                props: {
                    mindMap: {
                        type: Object
                    }
                },
                data: function() {
                    return {
                        themeList: rt,
                        theme: ""
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("showTheme", (function() {
                        t.$refs.sidebar.show = !1, t.$nextTick((function() {
                            t.theme = t.mindMap.getTheme(), t.$refs.sidebar.show = !0
                        }))
                    }))
                },
                methods: {
                    useTheme: function(t) {
                        this.theme = t.value, this.mindMap.setTheme(t.value), nn({
                            theme: {
                                template: t.value,
                                config: this.mindMap.getCustomThemeConfig()
                            }
                        })
                    }
                }
            },
            hn = dn,
            un = (i("241d"), Object(l["a"])(hn, ln, cn, !1, null, "acf023ee", null)),
            pn = un.exports,
            fn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Sidebar", {
                    ref: "sidebar",
                    attrs: {
                        title: "Structure"
                    }
                }, [i("div", {
                    staticClass: "layoutList"
                }, t._l(t.layoutList, (function(e) {
                    return i("div", {
                        key: e.value,
                        staticClass: "layoutItem",
                        class: {
                            active: e.value === t.layout
                        },
                        on: {
                            click: function(i) {
                                return t.useLayout(e)
                            }
                        }
                    }, [i("div", {
                        staticClass: "imgBox"
                    }, [i("img", {
                        attrs: {
                            src: e.img,
                            alt: ""
                        }
                    })]), i("div", {
                        staticClass: "name"
                    }, [t._v(t._s(e.name))])])
                })), 0)])
            },
            mn = [],
            vn = {
                name: "Structure",
                components: {
                    Sidebar: Fi
                },
                props: {
                    mindMap: {
                        type: Object
                    }
                },
                data: function() {
                    return {
                        layoutList: at,
                        layout: ""
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("showStructure", (function() {
                        t.$refs.sidebar.show = !1, t.$nextTick((function() {
                            t.layout = t.mindMap.getLayout(), t.$refs.sidebar.show = !0
                        }))
                    }))
                },
                methods: {
                    useLayout: function(t) {
                        this.layout = t.value, this.mindMap.setLayout(t.value), nn({
                            layout: t.value
                        })
                    }
                }
            },
            gn = vn,
            bn = (i("591a"), Object(l["a"])(gn, fn, mn, !1, null, "198ed61e", null)),
            Cn = bn.exports,
            yn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "countContainer"
                }, [i("div", {
                    staticClass: "item"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Characters")]), i("span", {
                    staticClass: "value"
                }, [t._v(t._s(t.words))])]), i("div", {
                    staticClass: "item"
                }, [i("span", {
                    staticClass: "name"
                }, [t._v("Nodes")]), i("span", {
                    staticClass: "value"
                }, [t._v(t._s(t.num))])])])
            },
            xn = [],
            wn = {
                name: "Count",
                props: {},
                data: function() {
                    return {
                        words: 0,
                        num: 0
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("data_change", (function(e) {
                        t.words = 0, t.num = 0, t.walk(e)
                    }))
                },
                methods: {
                    walk: function(t) {
                        var e = this;
                        this.num++, this.words += (String(t.data.text) || "").length, t.children && t.children.length > 0 && t.children.forEach((function(t) {
                            e.walk(t)
                        }))
                    }
                }
            },
            Mn = wn,
            kn = (i("a529"), Object(l["a"])(Mn, yn, xn, !1, null, "806811fa", null)),
            Nn = kn.exports,
            _n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "navigatorContainer"
                }, [i("div", {
                    staticClass: "item"
                }, [i("el-switch", {
                    attrs: {
                        "active-text": "Read-only mode",
                        "inactive-text": "Edit mode"
                    },
                    on: {
                        change: t.readonlyChange
                    },
                    model: {
                        value: t.isReadonly,
                        callback: function(e) {
                            t.isReadonly = e
                        },
                        expression: "isReadonly"
                    }
                })], 1), i("div", {
                    staticClass: "item"
                }, [i("Scale", {
                    attrs: {
                        mindMap: t.mindMap
                    }
                })], 1), i("div", {
                    staticClass: "item"
                }, [i("Fullscreen", {
                    attrs: {
                        mindMap: t.mindMap
                    }
                })], 1)])
            },
            zn = [],
            Dn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "scaleContainer"
                }, [i("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        effect: "dark",
                        content: "Zoom out",
                        placement: "top"
                    }
                }, [i("div", {
                    staticClass: "btn el-icon-minus",
                    on: {
                        click: t.narrow
                    }
                })]), i("div", {
                    staticClass: "scaleInfo"
                }, [t._v(t._s(t.scaleNum) + "%")]), i("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        effect: "dark",
                        content: "Zoom in",
                        placement: "top"
                    }
                }, [i("div", {
                    staticClass: "btn el-icon-plus",
                    on: {
                        click: t.enlarge
                    }
                })])], 1)
            },
            En = [],
            Fn = (i("b680"), {
                name: "Scale",
                props: {
                    mindMap: {
                        type: Object
                    }
                },
                data: function() {
                    return {
                        scaleNum: 100
                    }
                },
                watch: {
                    mindMap: function(t, e) {
                        var i = this;
                        t && !e && (this.mindMap.on("scale", (function(t) {
                            i.scaleNum = i.toPer(t)
                        })), this.scaleNum = this.toPer(this.mindMap.view.scale))
                    }
                },
                methods: {
                    toPer: function(t) {
                        return (100 * t).toFixed(0)
                    },
                    narrow: function() {
                        this.mindMap.view.narrow()
                    },
                    enlarge: function() {
                        this.mindMap.view.enlarge()
                    }
                }
            }),
            Sn = Fn,
            Tn = (i("40c6"), Object(l["a"])(Sn, Dn, En, !1, null, "73837448", null)),
            Ln = Tn.exports,
            An = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "fullscreenContainer"
                }, [i("el-tooltip", {
                    staticClass: "item",
                    attrs: {
                        effect: "dark",
                        content: "Full screen",
                        placement: "top"
                    }
                }, [i("div", {
                    staticClass: "btn iconfont iconquanping",
                    on: {
                        click: t.toFullscreen
                    }
                })])], 1)
            },
            Bn = [],
            On = function() {
                return document.documentElement.requestFullScreen ? "onfullscreenchange" : document.documentElement.webkitRequestFullScreen ? "onwebkitfullscreenchange" : document.documentElement.mozRequestFullScreen ? "onmozfullscreenchange" : document.documentElement.msRequestFullscreen ? "onmsfullscreenchange" : void 0
            },
            In = On(),
            Rn = function(t) {
                t.requestFullScreen ? t.requestFullScreen() : t.webkitRequestFullScreen ? t.webkitRequestFullScreen() : t.mozRequestFullScreen && t.mozRequestFullScreen()
            },
            $n = {
                name: "Fullscreen",
                props: {
                    mindMap: {
                        type: Object
                    }
                },
                data: function() {
                    return {}
                },
                watch: {
                    mindMap: function(t, e) {}
                },
                created: function() {
                    var t = this;
                    document[In] = function(e) {
                        setTimeout((function() {
                            t.mindMap.resize()
                        }), 1e3)
                    }
                },
                methods: {
                    toFullscreen: function() {
                        Rn(this.mindMap.el)
                    }
                }
            },
            jn = $n,
            Wn = (i("616b"), Object(l["a"])(jn, An, Bn, !1, null, "5046d7c1", null)),
            Hn = Wn.exports,
            Yn = {
                name: "NavigatorToolbar",
                components: {
                    Scale: Ln,
                    Fullscreen: Hn
                },
                props: {
                    mindMap: {
                        type: Object
                    }
                },
                data: function() {
                    return {
                        isReadonly: !1
                    }
                },
                methods: {
                    readonlyChange: function(t) {
                        this.mindMap.setMode(t ? "readonly" : "edit")
                    }
                }
            },
            Pn = Yn,
            Xn = (i("970c"), Object(l["a"])(Pn, _n, zn, !1, null, "24c0e759", null)),
            Vn = Xn.exports,
            Gn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Sidebar", {
                    ref: "sidebar",
                    attrs: {
                        title: "Hot keys"
                    }
                }, [i("div", {
                    staticClass: "box"
                }, t._l(t.shortcutKeyList, (function(e) {
                    return i("div", {
                        key: e.type
                    }, [i("div", {
                        staticClass: "title"
                    }, [t._v(t._s(e.type))]), t._l(e.list, (function(e) {
                        return i("div", {
                            key: e.value,
                            staticClass: "list"
                        }, [i("div", {
                            staticClass: "item"
                        }, [e.icon ? i("span", {
                            staticClass: "icon iconfont",
                            class: [e.icon]
                        }) : t._e(), i("span", {
                            staticClass: "name"
                        }, [t._v(t._s(e.name))]), i("div", {
                            staticClass: "value"
                        }, [t._v(t._s(e.value))])])])
                    }))], 2)
                })), 0)])
            },
            Zn = [],
            Un = {
                name: "ShortcutKey",
                components: {
                    Sidebar: Fi
                },
                data: function() {
                    return {
                        shortcutKeyList: _i
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("showShortcutKey", (function() {
                        t.$refs.sidebar.show = !1, t.$nextTick((function() {
                            t.$refs.sidebar.show = !0
                        }))
                    }))
                }
            },
            Jn = Un,
            Kn = (i("33b0"), Object(l["a"])(Jn, Gn, Zn, !1, null, "630f8856", null)),
            Qn = Kn.exports,
            qn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.isShow ? i("div", {
                    staticClass: "contextmenuContainer",
                    style: {
                        left: t.left + "px",
                        top: t.top + "px"
                    }
                }, ["node" === t.type ? [i("div", {
                    staticClass: "item",
                    class: {
                        disabled: t.insertNodeBtnDisabled
                    },
                    on: {
                        click: function(e) {
                            return t.exec("INSERT_NODE", t.insertNodeBtnDisabled)
                        }
                    }
                }, [t._v(" Insert sibling node "), i("span", {
                    staticClass: "desc"
                }, [t._v("Enter")])]), i("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.exec("INSERT_CHILD_NODE")
                        }
                    }
                }, [t._v(" Insert child Node "), i("span", {
                    staticClass: "desc"
                }, [t._v("Tab")])]), i("div", {
                    staticClass: "item",
                    class: {
                        disabled: t.insertNodeBtnDisabled
                    },
                    on: {
                        click: function(e) {
                            return t.exec("ADD_GENERALIZATION")
                        }
                    }
                }, [t._v(" Insert Summary "), i("span", {
                    staticClass: "desc"
                }, [t._v("Ctrl + S")])]), i("div", {
                    staticClass: "item",
                    class: {
                        disabled: t.upNodeBtnDisabled
                    },
                    on: {
                        click: function(e) {
                            return t.exec("UP_NODE")
                        }
                    }
                }, [t._v(" Move to Top "), i("span", {
                    staticClass: "desc"
                }, [t._v("Ctrl + ↑")])]), i("div", {
                    staticClass: "item",
                    class: {
                        disabled: t.downNodeBtnDisabled
                    },
                    on: {
                        click: function(e) {
                            return t.exec("DOWN_NODE")
                        }
                    }
                }, [t._v(" Move to Down "), i("span", {
                    staticClass: "desc"
                }, [t._v("Ctrl + ↓")])]), i("div", {
                    staticClass: "item danger",
                    on: {
                        click: function(e) {
                            return t.exec("REMOVE_NODE")
                        }
                    }
                }, [t._v(" Delete node "), i("span", {
                    staticClass: "desc"
                }, [t._v("Delete")])]), i("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.exec("COPY_NODE")
                        }
                    }
                }, [t._v(" Copy Node "), i("span", {
                    staticClass: "desc"
                }, [t._v("Ctrl + C")])]), i("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.exec("CUT_NODE")
                        }
                    }
                }, [t._v(" Cut Node "), i("span", {
                    staticClass: "desc"
                }, [t._v("Ctrl + X")])]), i("div", {
                    staticClass: "item",
                    class: {
                        disabled: null === t.copyData
                    },
                    on: {
                        click: function(e) {
                            return t.exec("PASTE_NODE")
                        }
                    }
                }, [t._v(" Paste Node "), i("span", {
                    staticClass: "desc"
                }, [t._v("Ctrl + V")])])] : t._e(), "svg" === t.type ? [i("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.exec("RETURN_CENTER")
                        }
                    }
                }, [t._v("Back to Center")]), i("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.exec("EXPAND_ALL")
                        }
                    }
                }, [t._v("Expand all")]), i("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.exec("UNEXPAND_ALL")
                        }
                    }
                }, [t._v("Collapse all")]), i("div", {
                    staticClass: "item",
                    on: {
                        click: function(e) {
                            return t.exec("RESET_LAYOUT")
                        }
                    }
                }, [t._v(" Auto align "), i("span", {
                    staticClass: "desc"
                }, [t._v("Ctrl + L")])])] : t._e()], 2) : t._e()
            },
            ta = [],
            ea = {
                name: "Contextmenu",
                props: {
                    mindMap: {
                        type: Object
                    }
                },
                data: function() {
                    return {
                        isShow: !1,
                        left: 0,
                        top: 0,
                        node: null,
                        copyData: null,
                        type: "",
                        isMousedown: !1,
                        mosuedownX: 0,
                        mosuedownY: 0
                    }
                },
                computed: {
                    insertNodeBtnDisabled: function() {
                        return !this.node || this.node.isRoot
                    },
                    upNodeBtnDisabled: function() {
                        var t = this;
                        if (!this.node || this.node.isRoot) return !0;
                        var e = 0 === this.node.parent.children.findIndex((function(e) {
                            return e === t.node
                        }));
                        return e
                    },
                    downNodeBtnDisabled: function() {
                        var t = this;
                        if (!this.node || this.node.isRoot) return !0;
                        var e = this.node.parent.children,
                            i = e.findIndex((function(e) {
                                return e === t.node
                            })) === e.length - 1;
                        return i
                    }
                },
                created: function() {
                    this.$bus.$on("node_contextmenu", this.show), this.$bus.$on("node_click", this.hide), this.$bus.$on("draw_click", this.hide), this.$bus.$on("expand_btn_click", this.hide), this.$bus.$on("svg_mousedown", this.onMousedown), this.$bus.$on("mouseup", this.onMouseup), this.mindMap.keyCommand.addShortcut("Control+c", this.copy), this.mindMap.keyCommand.addShortcut("Control+v", this.paste), this.mindMap.keyCommand.addShortcut("Control+x", this.cut)
                },
                beforeDestroy: function() {
                    this.$bus.$off("node_contextmenu", this.show), this.$bus.$off("node_click", this.hide), this.$bus.$off("draw_click", this.hide), this.$bus.$off("expand_btn_click", this.hide), this.$bus.$on("svg_mousedown", this.onMousedown), this.$bus.$on("mouseup", this.onMouseup), this.mindMap.keyCommand.removeShortcut("Control+c", this.copy), this.mindMap.keyCommand.removeShortcut("Control+v", this.paste), this.mindMap.keyCommand.removeShortcut("Control+x", this.cut)
                },
                methods: {
                    show: function(t, e) {
                        this.type = "node", this.left = t.clientX + 10, this.top = t.clientY + 10, this.isShow = !0, this.node = e
                    },
                    onMousedown: function(t) {
                        3 === t.which && (this.mosuedownX = t.clientX, this.mosuedownY = t.clientY, this.isMousedown = !0)
                    },
                    onMouseup: function(t) {
                        this.isMousedown && (this.isMousedown = !1, Math.abs(this.mosuedownX - t.clientX) > 3 || Math.abs(this.mosuedownY - t.clientY) > 3 ? this.hide() : this.show2(t))
                    },
                    show2: function(t) {
                        this.type = "svg", this.left = t.clientX + 10, this.top = t.clientY + 10, this.isShow = !0
                    },
                    hide: function() {
                        this.isShow = !1, this.left = 0, this.top = 0, this.type = ""
                    },
                    exec: function(t, e) {
                        var i = this;
                        if (!e) {
                            switch (t) {
                                case "COPY_NODE":
                                    this.copyData = this.mindMap.renderer.copyNode();
                                    break;
                                case "CUT_NODE":
                                    this.$bus.$emit("execCommand", t, (function(t) {
                                        i.copyData = t
                                    }));
                                    break;
                                case "PASTE_NODE":
                                    this.$bus.$emit("execCommand", t, this.copyData);
                                    break;
                                case "RETURN_CENTER":
                                    this.mindMap.view.reset();
                                    break;
                                default:
                                    this.$bus.$emit("execCommand", t);
                                    break
                            }
                            this.hide()
                        }
                    },
                    copy: function() {
                        this.exec("COPY_NODE")
                    },
                    paste: function() {
                        this.exec("PASTE_NODE")
                    },
                    cut: function() {
                        this.exec("CUT_NODE")
                    }
                }
            },
            ia = ea,
            na = (i("9a66"), Object(l["a"])(ia, qn, ta, !1, null, "1d5c6058", null)),
            aa = na.exports,
            oa = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    ref: "noteContentViewer",
                    staticClass: "noteContentViewer",
                    style: {
                        left: this.left + "px",
                        top: this.top + "px",
                        visibility: t.show ? "visible" : "hidden"
                    }
                })
            },
            ra = [],
            sa = i("f059"),
            la = i.n(sa),
            ca = (i("fe5f"), {
                name: "NodeNoteContentShow",
                data: function() {
                    return {
                        editor: null,
                        show: !1,
                        left: 0,
                        top: 0
                    }
                },
                created: function() {
                    var t = this;
                    this.$bus.$on("showNoteContent", (function(e, i, n) {
                        t.editor.setMarkdown(e), t.left = i, t.top = n, t.show = !0
                    })), this.$bus.$on("hideNoteContent", (function() {
                        t.show = !1
                    }))
                },
                mounted: function() {
                    this.initEditor()
                },
                methods: {
                    initEditor: function() {
                        this.editor || (this.editor = new la.a({
                            el: this.$refs.noteContentViewer
                        }))
                    }
                }
            }),
            da = ca,
            ha = (i("e321"), Object(l["a"])(da, oa, ra, !1, null, "6749c3d6", null)),
            ua = ha.exports,
            pa = {
                name: "Edit",
                components: {
                    Outline: Ai,
                    Style: Vi,
                    BaseStyle: sn,
                    Theme: pn,
                    Structure: Cn,
                    Count: Nn,
                    NavigatorToolbar: Vn,
                    ShortcutKey: Qn,
                    Contextmenu: aa,
                    NodeNoteContentShow: ua
                },
                data: function() {
                    return {
                        mindMap: null,
                        mindMapData: null,
                        prevImg: "",
                        openTest: !1
                    }
                },
                mounted: function() {
                    var t = this;
                    this.getData(), this.init(), this.$bus.$on("execCommand", this.execCommand), this.$bus.$on("export", this.export), this.$bus.$on("setData", this.setData), this.$bus.$on("startTextEdit", (function() {
                        t.mindMap.renderer.startTextEdit()
                    })), this.$bus.$on("endTextEdit", (function() {
                        t.mindMap.renderer.endTextEdit()
                    })), this.openTest && setTimeout((function() {
                        t.test()
                    }), 5e3)
                },
                methods: {
                    test: function() {
                        var t = this,
                            e = {
                                data: {
                                    text: "Root Node",
                                    expand: !0,
                                    isActive: !1
                                },
                                children: []
                            };
                        setTimeout((function() {
                            e.data.text = "MCRPL", t.mindMap.setData(JSON.parse(JSON.stringify(e))), setTimeout((function() {
                                e.children.push({
                                    data: {
                                        text: "Website",
                                        expand: !0,
                                        isActive: !1
                                    },
                                    children: []
                                }), t.mindMap.setData(JSON.parse(JSON.stringify(e))), setTimeout((function() {
                                    e.children.push({
                                        data: {
                                            text: "Blog",
                                            expand: !0,
                                            isActive: !1
                                        },
                                        children: []
                                    }), t.mindMap.setData(JSON.parse(JSON.stringify(e))), setTimeout((function() {
                                        var e = {
                                            transform: {
                                                scaleX: 1,
                                                scaleY: 1,
                                                shear: 0,
                                                rotate: 0,
                                                translateX: 179,
                                                translateY: 0,
                                                originX: 0,
                                                originY: 0,
                                                a: 1,
                                                b: 0,
                                                c: 0,
                                                d: 1,
                                                e: 179,
                                                f: 0
                                            },
                                            state: {
                                                scale: 1,
                                                x: 179,
                                                y: 0,
                                                sx: 0,
                                                sy: 0
                                            }
                                        };
                                        t.mindMap.view.setTransformData(e), setTimeout((function() {
                                            var e = {
                                                transform: {
                                                    scaleX: 1.6000000000000005,
                                                    scaleY: 1.6000000000000005,
                                                    shear: 0,
                                                    rotate: 0,
                                                    translateX: -373.3000000000004,
                                                    translateY: -281.10000000000025,
                                                    originX: 0,
                                                    originY: 0,
                                                    a: 1.6000000000000005,
                                                    b: 0,
                                                    c: 0,
                                                    d: 1.6000000000000005,
                                                    e: -373.3000000000004,
                                                    f: -281.10000000000025
                                                },
                                                state: {
                                                    scale: 1.6000000000000005,
                                                    x: 179,
                                                    y: 0,
                                                    sx: 0,
                                                    sy: 0
                                                }
                                            };
                                            t.mindMap.view.setTransformData(e)
                                        }), 1e3)
                                    }), 1e3)
                                }), 1e3)
                            }), 1e3)
                        }), 1e3)
                    },
                    getData: function() {
                        var t = tn();
                        this.mindMapData = t
                    },
                    bindSaveEvent: function() {
                        this.openTest || (this.$bus.$on("data_change", (function(t) {
                            en(t)
                        })), this.$bus.$on("view_data_change", (function(t) {
                            nn({
                                view: t
                            })
                        })))
                    },
                    manualSave: function() {
                        if (!this.openTest) {
                            var t = this.mindMap.command.getCopyData();
                            en(t);
                            var e = this.mindMap.view.getTransformData();
                            nn({
                                view: e
                            })
                        }
                    },
                    init: function() {
                        var t = this,
                            e = this.mindMapData,
                            i = e.root,
                            n = e.layout,
                            a = e.theme,
                            o = e.view;
                        this.mindMap = new hi({
                            el: this.$refs.mindMapContainer,
                            data: i,
                            layout: n,
                            theme: a.template,
                            themeConfig: a.config,
                            viewData: o,
                            customNoteContentShow: {
                                show: function(e, i, n) {
                                    t.$bus.$emit("showNoteContent", e, i, n)
                                },
                                hide: function() {
                                    t.$bus.$emit("hideNoteContent")
                                }
                            }
                        }), this.mindMap.keyCommand.addShortcut("Control+s", (function() {
                            t.manualSave()
                        })), ["node_active", "data_change", "view_data_change", "back_forward", "node_contextmenu", "node_click", "draw_click", "expand_btn_click", "svg_mousedown", "mouseup", "mode_change"].forEach((function(e) {
                            t.mindMap.on(e, (function() {
                                for (var i, n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                                (i = t.$bus).$emit.apply(i, [e].concat(a))
                            }))
                        })), this.bindSaveEvent()
                    },
                    setData: function(t) {
                        this.mindMap.setData(t), this.manualSave()
                    },
                    reRender: function() {
                        this.mindMap.reRender()
                    },
                    execCommand: function() {
                        var t;
                        (t = this.mindMap).execCommand.apply(t, arguments)
                    },
                    export: function() {
                        var t = arguments,
                            e = this;
                        return Object(m["a"])(regeneratorRuntime.mark((function i() {
                            var n;
                            return regeneratorRuntime.wrap((function(i) {
                                while (1) switch (i.prev = i.next) {
                                    case 0:
                                        try {
                                            (n = e.mindMap).export.apply(n, Object(R["a"])(t))
                                        } catch (a) {
                                            console.log(a)
                                        }
                                    case 1:
                                    case "end":
                                        return i.stop()
                                }
                            }), i)
                        })))()
                    }
                }
            },
            fa = pa,
            ma = (i("ca42"), Object(l["a"])(fa, Dt, Et, !1, null, "4c611031", null)),
            va = ma.exports,
            ga = i("2f62"),
            ba = {
                name: "Index",
                components: {
                    Toolbar: zt,
                    Edit: va
                },
                data: function() {
                    return {
                        show: !1
                    }
                },
                created: function() {
                    var t = this;
                    return Object(m["a"])(regeneratorRuntime.mark((function e() {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return i = t.$loading({
                                        lock: !0,
                                        text: "Loading, please wait..."
                                    }), e.next = 3, t.getUserMindMapData();
                                case 3:
                                    t.show = !0, i.close();
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                methods: Object(f["a"])({}, Object(ga["b"])(["getUserMindMapData"]))
            },
            Ca = ba,
            ya = (i("4934"), Object(l["a"])(Ca, u, p, !1, null, "2472b14f", null)),
            xa = ya.exports;
        n["default"].use(h["a"]);
        var wa = [{
                path: "/",
                name: "Edit",
                component: xa
            }],
            Ma = new h["a"]({
                routes: wa
            }),
            ka = Ma;
        n["default"].use(ga["a"]);
        var Na = new ga["a"].Store({
                state: {
                    mindMapData: null
                },
                mutations: {
                    setMindMapData: function(t, e) {
                        t.mindMapData = e
                    }
                },
                actions: {
                    getUserMindMapData: function(t) {
                        try {
                            var e = {
                                    data: {
                                        data: {
                                            mindMapData: Ki
                                        }
                                    }
                                },
                                i = e.data;
                            t.commit("setMindMapData", i.data)
                        } catch (n) {
                            console.log(n)
                        }
                    }
                }
            }),
            _a = Na,
            za = i("5c96"),
            Da = i.n(za);
        i("0fae"), i("9c65");
        n["default"].config.productionTip = !1, n["default"].prototype.$bus = new n["default"], n["default"].use(Da.a), new n["default"]({
            render: function(t) {
                return t(d)
            },
            router: ka,
            store: _a
        }).$mount("#app")
    },
    "591a": function(t, e, i) {
        "use strict";
        i("5958")
    },
    5958: function(t, e, i) {},
    "60c3": function(t, e, i) {},
    "616b": function(t, e, i) {
        "use strict";
        i("550f")
    },
    "64c6": function(t, e, i) {},
    6967: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkBYvO0hp_NWP57K0v8y1hmYILEWw2Eemg5nICCudAE9HQdoG_C9BJRgfl1zKz1noTmbyJ1NMov06QgqOntqZUgw-UK0ym7ziZIqF7nxcx0HaswU-r-tEHN0ZXyO9o86k362H8oMcTA10I-ru54mjfNMI5Zf2fwoImuVuxr7TcESaMrsqbGUJiPsO6LA/s600/organization%20Structure.png"
    },
    "6ef5": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhm85t9cTt6HuX2MIdaQ7sffcAYIy6oB4ASyoWvvmIMEa__obGcFJCbF8mkSNtTZViZgp_PupOBGJIAojxiV7dEI_eAF_n4B2Sa3FhYOB2yxa5_i2vOs373UArqmjeB6M7WtZVS34tcHzWv7lw9zsPmQVvYnqC52zZXsbO0FDAwJtRh2tODc4lK-akygw/s600/Gold.png"
    },
    "72ed": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuOyfRhrMMd0KcSCka0Zdkvxdt-nlX_NkZ9E-HG9V0OJ9eQpqYeasWVRmvaGiOqRLq99OznbS0mggn5NLZori1JOLlu4pCP4w2G9XFDCeHvlNC0QYQiXZiMi233DSxAaRUSZNgJ129VyniuUHVDnT3NSjetCyH4ytWNcD-iv92E69kqGueiR18FpfCFA/s600/Green%20leaf.png"
    },
    "7dda": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg22tHo8o5U448G0GJvehcL_hIO4KeCVShLq_iT8ep8tO2_bAWmItI-IOlG4XA9LZ4F7i9AH7SGrBIFEXPgfCJUCccKX3i5XVWnkIW1oGabKBoT_9Nbmoshqumj333gwuvdodg3Cazq4X3UpVHLYMzZCegVqiykPxNmLswk6RhNhyFprQlHJCUEuke8dg/s600/fresh%20green.png"
    },
    "7eb3": function(t, e, i) {},
    "7f82": function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9at46FDs-t3I65u_Rf8fci86QrvlBwPjmB9evFENRxbQlecnif7211Wa6EsKzvoX5v__z4sEjgfqBsjbv-ctsh1JLEqOZDlE3zxofAC2JvvMfB63fsREnhCl-jH4RFuvjirwQTxiUu-eCxHIvOxIuOllS7fga13VpcF2PpDTU9chLGKoq8-p97pu-SQ/s600/sky%20green.png"
    },
    "7fee": function(t, e, i) {},
    8545: function(t, e, i) {
        "use strict";
        i("7fee")
    },
    "85ec": function(t, e, i) {},
    8617: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhW75uW7SO-kpsHJWJo4QhDbeGGTZXIrRr835alN7Yhzq9TVj6NeLn8ffYslUMdxCJ85hFanlF-1CANjW-Ea6eBLtBVB3rWxYkMXx6TYAS0AcjGY4GSjR5IwstAPd90X-iRocgH__f6OTdvCR6cOqUd1TdBC56OOiwus6GR-Vw4dhn9yJfB4WMJsWkwNQ/s600/Classic.png"
    },
    "88a6": function(t, e, i) {},
    8973: function(t, e, i) {},
    "89ba": function(t, e, i) {},
    "970c": function(t, e, i) {
        "use strict";
        i("7eb3")
    },
    9910: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgT9GfcBZMZ29cCzGr0Jf2iiSjeb2tnJTn1vQIQ3JEn7m_UN6hj5dCv6dX9dBNxeGOObqkvzPipXH58Q5yvgyx8xLHrA4ZJy5xHi5jiHVwUODMmjiI7yPXdE8_lpikTwq_dL4vZnJP0mqFzqChQ_OIdChLDEjFj4Jb1rEZtroPA6MLm5acXfJWRWe0g6Q/s600/mindmap.png"
    },
    "9a66": function(t, e, i) {
        "use strict";
        i("88a6")
    },
    "9c65": function(t, e, i) {},
    a3a6: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhST5Lqo1CfjG13pVYsX1ZaL3q3Zgt7IjGuUE30v_oSp69OVbTi4ipZIR3yrKxjqST6YL9KNUSbf3T_18RVmjKMoUiVO94x2yDzcdgd26JZ_9x-aIaB1ll9LDbhYY2CMwbUxK3GwmYQX1FFouqiyg_JaRlCbeJv0htY3K6qSfY6pi3SBLZNC3kAswOY5Q/s600/Classic%202.png"
    },
    a4c7: function(t, e, i) {
        "use strict";
        i("0799")
    },
    a529: function(t, e, i) {
        "use strict";
        i("b5fc")
    },
    a6b0: function(t, e, i) {},
    ac18: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_9i91tzcgcHYZ_wvweb36FG1NWZDztJBRfYmSn2DZ69fRX9ZrEhpkBYEOSEN6jyK-oCdM4k9cy0a0tNH0oxZ7-UVNjbZTKXlIJ7mw9Y5VBLjH2ykaugCEnBuR_qE8u-CJOQY4YaZq5Fr2-b5HugUeRptVlzhEGPXkWk-aO51BUoCaKj_42ohDYxiYmQ/s600/Satalog%20Organization.png"
    },
    b2e8: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDZ0tS2LRTURRzsPSox-iU_yqlzqzHsMIIkRBO1NakITECkY2qN-qexzfwql8gV-7lgtdN7TXRRxhaZglQDZu4ca-4IspGwKmnX9IJka2_Bg9GGrAo_Trza6FCczRGZTyHZb4g2luz-ES2inZo3OH5Ha4vJwb4DBlyqvDuY57drpuLxgPl9Lm4t9EbqQ/s600/Pink%20Grape.png"
    },
    b533: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5aKuk3gZzT-p33J1lCebUaBe0GaJ0Yeqvlmt4J5lgkmEnB1BDJcL5oaQ2JhvqMZ0O0rFPhjUmrCjxjqe44RUYidL5eeC1uFbY53sdQptj5HXQA2EbCvXaw-ZoghuclFy4KdMNHNib5P0tLRIIDUYGt09m-6LVSOf18TjcH37SrBlrhEp7W5NY0aRNrA/s600/blue%20sky.png"
    },
    b5fc: function(t, e, i) {},
    b637: function(t, e, i) {
        "use strict";
        i("04ef")
    },
    bb30: function(t, e, i) {},
    c0d2: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-5j7uBgMoMilln5ZehD1W-avHdcY_Ui9mO1Y3HYUNG44OGhnDWrYskXfFLkKJHEoi4vwb6qRu4uBy4LPubXKs7I-EqjMlcq7LR5Ic7qX3yPVbdSa_M5r4N3O5fFnBCOdX0NL6ZKKAX5mK0HrvWW69V5ChON0-jGpRz_guqzyceFsFvGizqu1-WYGHlQ/s600/Classic%203.png"
    },
    c612: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-o-cJOra9ZJxTe09z0zM69yQDwBiIhVGsxb9V8Bbs6fBXRVmEbMfpiOXxQKqZHgdJPn5rUjToOa9H65WJYJR1zDWvBVBfjCkqlzxuJCA_SXbZ-sk-fI_mp69mNS9EHvigCNErTpQ4fULO-QJy66ybK-HsujE5BeNqbOQRnjcf_nFgfajYnN0-nFoQ9A/s600/romantic%20purpule.png"
    },
    c8a3: function(t, e, i) {
        "use strict";
        i("1b87")
    },
    ca42: function(t, e, i) {
        "use strict";
        i("ccaa")
    },
    ca62: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXDB2U0zsC1By_GGWIUv6mQFMS9bs52Q-hq_SqNn0XDFgG7ud0cerWs2fz5VzPLug7FWdfj6_4ZE-rv1p9IQaDZNGGrW9q4JTA8p7yttTELqHukp3aYGKk9UcWIIC8iYsFNYeC8Gaio1GKdAdMNHyN30qbsqVPxAKuHrGlg3nXARe51u9ahrVBwTFlYw/s600/fresh%20red.png"
    },
    ccaa: function(t, e, i) {},
    db73: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3yJM8knATlgrUkZv8xj5h65UBt6S2Za2SGX6gZcVC_xsFS9U4AybFpkI5EjJN93wpYv5Pk0IkLiLOBsv0Wrb3PGpvqi_QJ-I--IJ2SG3hiThWIqpzdU8Addpvypw10nnCM-ikhL3t7hvVvILyDXuj4987KwmcM9DRJPB4UMRe_N65qMAUDwaEv1Jg-Q/s600/Mint.png"
    },
    dbac: function(t, e, i) {
        "use strict";
        i("a6b0")
    },
    dd40: function(t, e, i) {},
    e321: function(t, e, i) {
        "use strict";
        i("3800")
    },
    e42f: function(t, e, i) {},
    e8a8: function(t, e, i) {},
    e911: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjuKaIcJeIIis9hGofy857PPkQMoCwNnGVX6N3t6NNdQ1eg3i9fzAyolezj6ZhjG-xP24u9bJQ4UzX78BF7dOApGaYEBJfYUSo5c6fvmrFGkuZ0be72ClkTC9bzTLRTG98kIRVVqaelPougb7eK0EZJMLCNmcP5-zp26qU3LuNPd0efUTX9oKRsBP6I-Q/s600/Classic%204.png"
    },
    f260: function(t, e, i) {
        t.exports = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTp3RLmK_EMi8Cgr-uvYWbHfEx49FH9hwJOevBGZ_rdyzknT2ju1uIDzeewELxNbCvT2xRCnwroSQUQM3sm7digaQ09a_-uDnB6eDdgphIQhKBdz_PsecLrXVBXvNETtr9p8uLIEx23_0LFaOmzL37w_0hIIQgIOLt2L80dWgt0lCT_ENsVMG_alvKXQ/s600/Minions.png"
    },
    fde0: function(t, e, i) {}
});
