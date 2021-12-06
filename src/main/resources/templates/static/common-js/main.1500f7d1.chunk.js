(this["webpackJsonpopenbbs-frontend"] = this["webpackJsonpopenbbs-frontend"] || []).push([[0], {
    100: function (e, t, c) {
    }, 138: function (e, t, c) {
    }, 210: function (e, t, c) {
        "use strict";
        c.r(t);
        var n = c(0), s = c.n(n), a = c(28), i = c.n(a), j = c(128), r = (c(138), c(35)), d = c(105), l = c(213),
            o = c(218), u = c(219), b = c(216), O = c(129), h = c(212), m = c(215), p = c(69), x = c(217),
            f = (c(100), c(14)), v = b.a.Option, k = function () {
                var e = Object(n.useState)("stu.pku.edu.cn"), t = Object(r.a)(e, 2), c = t[0], s = t[1],
                    a = Object(n.useState)(""), i = Object(r.a)(a, 2), j = i[0], d = i[1], l = Object(n.useState)(""),
                    o = Object(r.a)(l, 2), u = o[0], k = o[1], y = function () {
                        (function (e, t) {
                            return fetch(e, {
                                method: "post",
                                headers: {Accept: "application/json,text/plain,*/*", "Content-Type": "application/json"},
                                body: JSON.stringify(t)
                            })
                        })("/submit", {address: u, email: j}).then((function (e) {
                            return e.json()
                        })).then((function (e) {
                            var t = e.msg;
                            O.b.info(t)
                        })).catch((function (e) {
                            alert(e)
                        }))
                    }, g = Object(f.jsxs)(b.a, {
                        defaultValue: "stu.pku.edu.cn",
                        className: "select-after",
                        onChange: function (e) {
                            s(e)
                        },
                        children: [Object(f.jsx)(v, {
                            value: "stu.pku.edu.cn",
                            children: "stu.pku.edu.cn"
                        }), Object(f.jsx)(v, {
                            value: "pku.edu.cn", children: "pku.edu.cn"
                        }), Object(f.jsx)(v, {
                            value: "thu.edu.cn",
                            children: "thu.edu.cn"
                        }), Object(f.jsx)(v, {
                            value: "ruc.edu.cn", children: "ruc.edu.cn"
                        })
                        ]
                    });
                return Object(f.jsx)("div", {
                    className: "csdn", children: Object(f.jsxs)(h.a, {
                        name: "basic",
                        initialValues: {remember: !0},
                        onFinish: function (e) {
                            y()
                        },
                        autoComplete: "off",
                        children: [Object(f.jsx)(h.a.Item, {
                            label: "\u90ae\u7bb1\u5730\u5740",
                            name: "email",
                            rules: [{
                                required: !0,
                                message: "\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1\uff01\uff08\u4ec5\u9650\u5317\u5927\u3001\u6e05\u534e\u3001\u4eba\u5927\u90ae\u7bb1\u540e\u7f00\uff09"
                            }],
                            children: Object(f.jsx)(m.a, {
                                addonAfter: g,
                                placeholder: "\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1\uff08\u4ec5\u9650\u5317\u5927\u3001\u6e05\u534e\u3001\u4eba\u5927\u90ae\u7bb1\u540e\u7f00\uff09",
                                onChange: function (e) {
                                    d(e.target.value + c)
                                }
                            })
                        }), Object(f.jsx)(h.a.Item, {
                            label: "csdn\u5730\u5740",
                            name: "csdn",
                            rules: [{
                                required: !0,
                                message: "\u8bf7\u8f93\u5165\u60a8\u8981\u4e0b\u8f7d\u7684csdn\u6587\u4ef6\u5730\u5740\uff01"
                            }],
                            children: Object(f.jsx)(m.a, {
                                placeholder: "\u8bf7\u8f93\u5165\u60a8\u8981\u4e0b\u8f7d\u7684csdn\u6587\u4ef6\u5730\u5740",
                                onChange: function (e) {
                                    k(e.target.value)
                                }
                            })
                        }), Object(f.jsx)(h.a.Item, {
                            children: Object(f.jsxs)(p.a, {
                                type: "primary",
                                htmlType: "submit",
                                children: [Object(f.jsx)(x.a, {}), "\u63d0\u4ea4"]
                            })
                        })]
                    })
                })
            }, y = c(214), g = c(65), C = y.a.Step, N = function () {
                var e = function () {
                    return Object(f.jsxs)(y.a, {
                        current: 0,
                        className: "codimd-steps",
                        children: [Object(f.jsx)(C, {title: "\u586b\u5199\u4fe1\u606f"}), Object(f.jsx)(C, {
                            title: "\u70b9\u51fb\u6ce8\u518c",
                            description: "\u6ce8\u518c\u6309\u94ae\u9ed8\u8ba4\u4e3a\u7070\u8272\uff08\u5f85\u6539\uff09"
                        }), Object(f.jsx)(C, {title: "\u5b8c\u6210\u6ce8\u518c"})]
                    })
                };
                return Object(f.jsxs)("div", {
                    className: "codimd",
                    children: [Object(f.jsx)(e, {}), Object(f.jsx)(g.a, {
                        placement: "topLeft",
                        title: "\u8bf7\u6ce8\u610f\u6ce8\u518c\u6309\u94ae\u9ed8\u8ba4\u5c31\u4e3a\u7070\u8272\u7684\uff08\u5f85\u6539\uff09\uff0c\u586b\u597d\u4fe1\u606f\u540e\u70b9\u51fb\u6ce8\u518c\u5373\u53ef\u5b8c\u6210\u6ce8\u518c\u3002",
                        arrowPointAtCenter: !0,
                        children: Object(f.jsxs)(p.a, {
                            onClick: function () {
                                window.open("_black").location.href = "http://39.103.166.167:3000/"
                            },
                            className: "codimd-btn",
                            children: [Object(f.jsx)(x.a, {}), "\u70b9\u51fb\u4f53\u9a8c / codimd(\u8f7b\u91cf\u7ea7\u7684\u5728\u7ebf\u6587\u6863\u534f\u4f5c\u5de5\u5177)\u3002"]
                        })
                    })]
                })
            }, w = function () {
                var e = Object(n.useState)(!0), t = Object(r.a)(e, 2), c = t[0], s = t[1], a = Object(n.useState)("1"),
                    i = Object(r.a)(a, 2), j = i[0], b = i[1], O = function () {
                        return Object(f.jsxs)(d.a, {
                            style: {width: 300},
                            selectedKeys: [j],
                            children: [Object(f.jsx)(d.a.Item, {
                                icon: Object(f.jsx)(o.a, {}), onClick: function (e) {
                                    s(!0), b(e.key)
                                }, children: "csdn free download(csdn\u514d\u8d39\u4e0b\u8f7d)"
                            }, "1"), Object(f.jsx)(d.a.Item, {
                                icon: Object(f.jsx)(u.a, {}), onClick: function (e) {
                                    s(!1), b(e.key)
                                }, children: "codimd(\u8f7b\u91cf\u7ea7\u7684\u5728\u7ebf\u6587\u6863\u534f\u4f5c\u5de5\u5177)"
                            }, "2")]
                        })
                    };
                return Object(f.jsxs)("div", {
                    className: "App",
                    children: [Object(f.jsx)(l.a, {
                        className: "site-page-header",
                        title: "Welcome!",
                        subTitle: "Contributors: @ModestYjx,@BlueEmmaBlue"
                    }), Object(f.jsxs)("div", {
                        className: "main-wrapper",
                        children: [Object(f.jsx)(O, {}), c ? Object(f.jsx)(k, {}) : Object(f.jsx)(N, {})]
                    })]
                })
            };
        i.a.render(Object(f.jsx)(s.a.StrictMode, {children: Object(f.jsx)(j.a, {children: Object(f.jsx)(w, {})})}), document.getElementById("root"))
    }
}, [[210, 1, 2]]]);
//# sourceMappingURL=main.1500f7d1.chunk.js.map