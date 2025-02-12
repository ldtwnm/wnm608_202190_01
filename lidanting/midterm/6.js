// Avoid `console` errors in browsers that lack a console.
(function() {
    for (var a, e = function() {}, b = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profileEnd table time timeEnd timeStamp trace warn".split(" "), c = b.length, d = window.console = window.console || {}; c--;)
        a = b[c],
        d[a] || (d[a] = e)
})();

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, a, c, b, d) {
        return jQuery.easing[jQuery.easing.def](e, a, c, b, d)
    },
    easeInQuad: function(e, a, c, b, d) {
        return b * (a /= d) * a + c
    },
    easeOutQuad: function(e, a, c, b, d) {
        return -b * (a /= d) * (a - 2) + c
    },
    easeInOutQuad: function(e, a, c, b, d) {
        return 1 > (a /= d / 2) ? b / 2 * a * a + c : -b / 2 * (--a * (a - 2) - 1) + c
    },
    easeInCubic: function(e, a, c, b, d) {
        return b * (a /= d) * a * a + c
    },
    easeOutCubic: function(e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a + 1) + c
    },
    easeInOutCubic: function(e, a, c, b, d) {
        return 1 > (a /= d / 2) ? b / 2 * a * a * a + c : b / 2 * ((a -= 2) * a * a + 2) + c
    },
    easeInQuart: function(e, a, c, b, d) {
        return b * (a /= d) * a * a * a + c
    },
    easeOutQuart: function(e, a, c, b, d) {
        return -b * ((a = a / d - 1) * a * a * a - 1) + c
    },
    easeInOutQuart: function(e, a, c, b, d) {
        return 1 > (a /= d / 2) ? b / 2 * a * a * a * a + c : -b / 2 * ((a -= 2) * a * a * a - 2) + c
    },
    easeInQuint: function(e, a, c, b, d) {
        return b * (a /= d) * a * a * a * a + c
    },
    easeOutQuint: function(e, a, c, b, d) {
        return b * ((a = a / d - 1) * a * a * a * a + 1) + c
    },
    easeInOutQuint: function(e, a, c, b, d) {
        return 1 > (a /= d / 2) ? b / 2 * a * a * a * a * a + c : b / 2 * ((a -= 2) * a * a * a * a + 2) + c
    },
    easeInSine: function(e, a, c, b, d) {
        return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
    },
    easeOutSine: function(e, a, c, b, d) {
        return b * Math.sin(a / d * (Math.PI / 2)) + c
    },
    easeInOutSine: function(e, a, c, b, d) {
        return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
    },
    easeInExpo: function(e, a, c, b, d) {
        return 0 == a ? c : b * Math.pow(2, 10 * (a / d - 1)) + c
    },
    easeOutExpo: function(e, a, c, b, d) {
        return a == d ? c + b : b * (-Math.pow(2, -10 * a / d) + 1) + c
    },
    easeInOutExpo: function(e, a, c, b, d) {
        return 0 == a ? c : a == d ? c + b : 1 > (a /= d / 2) ? b / 2 * Math.pow(2, 10 * (a - 1)) + c : b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
    },
    easeInCirc: function(e, a, c, b, d) {
        return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
    },
    easeOutCirc: function(e, a, c, b, d) {
        return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
    },
    easeInOutCirc: function(e, a, c, b, d) {
        return 1 > (a /= d / 2) ? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c : b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
    },
    easeInElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (0 == a)
            return c;
        if (1 == (a /= d))
            return c + b;
        f || (f = .3 * d);
        g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
        return -(g * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f)) + c
    },
    easeOutElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (0 == a)
            return c;
        if (1 == (a /= d))
            return c + b;
        f || (f = .3 * d);
        g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
        return g * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - e) * Math.PI / f) + b + c
    },
    easeInOutElastic: function(e, a, c, b, d) {
        e = 1.70158;
        var f = 0,
            g = b;
        if (0 == a)
            return c;
        if (2 == (a /= d / 2))
            return c + b;
        f || (f = .3 * d * 1.5);
        g < Math.abs(b) ? (g = b, e = f / 4) : e = f / (2 * Math.PI) * Math.asin(b / g);
        return 1 > a ? -.5 * g * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f) + c : g * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a * d - e) * Math.PI / f) * .5 + b + c
    },
    easeInBack: function(e, a, c, b, d, f) {
        void 0 == f && (f = 1.70158);
        return b * (a /= d) * a * ((f + 1) * a - f) + c
    },
    easeOutBack: function(e, a, c, b, d, f) {
        void 0 == f && (f = 1.70158);
        return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
    },
    easeInOutBack: function(e, a, c, b, d, f) {
        void 0 == f && (f = 1.70158);
        return 1 > (a /= d / 2) ? b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c : b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
    },
    easeInBounce: function(e, a, c, b, d) {
        return b - jQuery.easing.easeOutBounce(e, d - a, 0, b, d) + c
    },
    easeOutBounce: function(e, a, c, b, d) {
        return (a /= d) < 1 / 2.75 ? 7.5625 * b * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c
    },
    easeInOutBounce: function(e, a, c, b, d) {
        return a < d / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * a, 0, b, d) + c : .5 * jQuery.easing.easeOutBounce(e, 2 * a - d, 0, b, d) + .5 * b + c
    }
});

/*!
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license.
 * Copyright 2007, 2013 Brian Cherne
 */
(function(e) {
    e.fn.hoverIntent = function(t, n, r) {
        var i = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        if (typeof t === "object") {
            i = e.extend(i, t)
        } else if (e.isFunction(n)) {
            i = e.extend(i, {
                over: t,
                out: n,
                selector: r
            })
        } else {
            i = e.extend(i, {
                over: t,
                out: t,
                selector: n
            })
        }
        var s,
            o,
            u,
            a;
        var f = function(e) {
            s = e.pageX;
            o = e.pageY
        };
        var l = function(t, n) {
            n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
            if (Math.abs(u - s) + Math.abs(a - o) < i.sensitivity) {
                e(n).off("mousemove.hoverIntent", f);
                n.hoverIntent_s = 1;
                return i.over.apply(n, [t])
            } else {
                u = s;
                a = o;
                n.hoverIntent_t = setTimeout(function() {
                    l(t, n)
                }, i.interval)
            }
        };
        var c = function(e, t) {
            t.hoverIntent_t = clearTimeout(t.hoverIntent_t);
            t.hoverIntent_s = 0;
            return i.out.apply(t, [e])
        };
        var h = function(t) {
            var n = jQuery.extend({}, t);
            var r = this;
            if (r.hoverIntent_t) {
                r.hoverIntent_t = clearTimeout(r.hoverIntent_t)
            }
            if (t.type == "mouseenter") {
                u = n.pageX;
                a = n.pageY;
                e(r).on("mousemove.hoverIntent", f);
                if (r.hoverIntent_s != 1) {
                    r.hoverIntent_t = setTimeout(function() {
                        l(n, r)
                    }, i.interval)
                }
            } else {
                e(r).off("mousemove.hoverIntent", f);
                if (r.hoverIntent_s == 1) {
                    r.hoverIntent_t = setTimeout(function() {
                        c(n, r)
                    }, i.timeout)
                }
            }
        };
        return this.on({
            "mouseenter.hoverIntent": h,
            "mouseleave.hoverIntent": h
        }, i.selector)
    }
})(jQuery);

/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */

(function(c) {
    var h = function() {
        var e = function() {
                var b = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                b && c(window).load(function() {
                    c("body").children().on("click", c.noop)
                });
                return b
            }(),
            h = function() {
                var b = document.documentElement.style;
                return "behavior" in b && "fill" in b && /iemobile/i.test(navigator.userAgent)
            }(),
            m = function(b, a) {
                var c = "sf-js-enabled";
                a.cssArrows && (c += " sf-arrows");
                b.toggleClass(c)
            },
            q = function(b, a) {
                return b.find("li." + a.pathClass).slice(0, a.pathLevels).addClass(a.hoverClass + " sf-breadcrumb").filter(function() {
                    return c(this).children(a.popUpSelector).hide().show().length
                }).removeClass(a.pathClass)
            },
            n = function(b) {
                var a = b.css("ms-touch-action");
                b.css("ms-touch-action", "pan-y" === a ? "auto" : "pan-y")
            },
            r = function(b) {
                var a = c(this),
                    d = a.siblings(b.data.popUpSelector);
                0 < d.length && d.is(":hidden") && (a.one("click.superfish", !1), "MSPointerDown" === b.type ? a.trigger("focus") : c.proxy(k, a.parent("li"))())
            },
            k = function() {
                var b = c(this),
                    a = g(b);
                clearTimeout(a.sfTimer);
                b.siblings().superfish("hide").end().superfish("show")
            },
            l = function() {
                var b = c(this),
                    a = g(b);
                e ? c.proxy(p, b, a)() : (clearTimeout(a.sfTimer), a.sfTimer = setTimeout(c.proxy(p, b, a), a.delay))
            },
            p = function(b) {
                b.retainPath = -1 < c.inArray(this[0], b.$path);
                this.superfish("hide");
                this.parents("." + b.hoverClass).length || (b.onIdle.call(this.closest(".sf-js-enabled")), b.$path.length && c.proxy(k, b.$path)())
            },
            g = function(b) {
                return b.closest(".sf-js-enabled").data("sf-options")
            };
        return {
            hide: function(b) {
                if (this.length) {
                    var a = g(this);
                    if (!a)
                        return this;
                    var d = !0 === a.retainPath ? a.$path : "",
                        d = this.find("li." + a.hoverClass).add(this).not(d).removeClass(a.hoverClass).children(a.popUpSelector),
                        e = a.speedOut;
                    b && (d.show(), e = 0);
                    a.retainPath = !1;
                    a.onBeforeHide.call(d);
                    d.stop(!0, !0).animate(a.animationOut, e, function() {
                        var b = c(this);
                        a.onHide.call(b)
                    })
                }
                return this
            },
            show: function() {
                var b = g(this);
                if (!b)
                    return this;
                var a = this.addClass(b.hoverClass).children(b.popUpSelector);
                b.onBeforeShow.call(a);
                a.stop(!0, !0).animate(b.animation, b.speed, function() {
                    b.onShow.call(a)
                });
                return this
            },
            destroy: function() {
                return this.each(function() {
                    var b = c(this),
                        a = b.data("sf-options"),
                        d;
                    if (!a)
                        return !1;
                    d = b.find(a.popUpSelector).parent("li");
                    clearTimeout(a.sfTimer);
                    m(b, a);
                    d.children("a").toggleClass("sf-with-ul");
                    n(b);
                    b.off(".superfish").off(".hoverIntent");
                    d.children(a.popUpSelector).attr("style", function(a, b) {
                        return b.replace(/display[^;]+;?/g, "")
                    });
                    a.$path.removeClass(a.hoverClass + " sf-breadcrumb").addClass(a.pathClass);
                    b.find("." + a.hoverClass).removeClass(a.hoverClass);
                    a.onDestroy.call(b);
                    b.removeData("sf-options")
                })
            },
            init: function(b) {
                return this.each(function() {
                    var a = c(this);
                    if (a.data("sf-options"))
                        return !1;
                    var d = c.extend({}, c.fn.superfish.defaults, b),
                        g = a.find(d.popUpSelector).parent("li");
                    d.$path = q(a, d);
                    a.data("sf-options", d);
                    m(a, d);
                    g.children("a").toggleClass("sf-with-ul");
                    n(a);
                    var f = "li:has(" + d.popUpSelector + ")";
                    if (c.fn.hoverIntent && !d.disableHI)
                        a.hoverIntent(k, l, f);
                    else
                        a.on("mouseenter.superfish", f, k).on("mouseleave.superfish", f, l);
                    f = "MSPointerDown.superfish";
                    e || (f += " touchend.superfish");
                    h && (f += " mousedown.superfish");
                    a.on("focusin.superfish", "li", k).on("focusout.superfish", "li", l).on(f, "a", d, r);
                    g.not(".sf-breadcrumb").superfish("hide", !0);
                    d.onInit.call(this)
                })
            }
        }
    }();
    c.fn.superfish = function(e, s) {
        return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== typeof e && e ? c.error("Method " + e + " does not exist on jQuery.fn.superfish") : h.init.apply(this, arguments)
    };
    c.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 100,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: c.noop,
        onBeforeShow: c.noop,
        onShow: c.noop,
        onBeforeHide: c.noop,
        onHide: c.noop,
        onIdle: c.noop,
        onDestroy: c.noop
    };
    c.fn.extend({
        hideSuperfishUl: h.hide,
        showSuperfishUl: h.show
    })
})(jQuery);

/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function(a) {
    a.fn.fitText = function(e, f) {
        var g = e || 1,
            b = a.extend({
                minFontSize: Number.NEGATIVE_INFINITY,
                maxFontSize: Number.POSITIVE_INFINITY
            }, f);
        return this.each(function() {
            var c = a(this),
                d = function() {
                    c.css("font-size", Math.max(Math.min(c.width() / (10 * g), parseFloat(b.maxFontSize)), parseFloat(b.minFontSize)))
                };
            d();
            a(window).on("resize.fittext orientationchange.fittext", d)
        })
    }
})(jQuery);

// jQuery RoyalSlider plugin. Custom build. Copyright Dmitry Semenov, http://dimsemenov.com 
// jquery.royalslider v9.5.1
(function(n) {
    function u(b, f) {
        var c,
            a = this,
            e = window.navigator,
            g = e.userAgent.toLowerCase();
        a.uid = n.rsModules.uid++;
        a.ns = ".rs" + a.uid;
        var d = document.createElement("div").style,
            h = ["webkit", "Moz", "ms", "O"],
            k = "",
            l = 0,
            r;
        for (c = 0; c < h.length; c++)
            r = h[c],
            !k && r + "Transform" in d && (k = r),
            r = r.toLowerCase(),
            window.requestAnimationFrame || (window.requestAnimationFrame = window[r + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r + "CancelAnimationFrame"] || window[r + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
        (window.requestAnimationFrame = function(a, b) {
            var c = (new Date).getTime(),
                d = Math.max(0, 16 - (c - l)),
                e = window.setTimeout(function() {
                    a(c + d)
                }, d);
            l = c + d;
            return e
        });
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        });
        a.isIPAD = g.match(/(ipad)/);
        a.isIOS = a.isIPAD || g.match(/(iphone|ipod)/);
        c = function(a) {
            a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) ||
            [];
            return {
                browser: a[1] || "",
                version: a[2] || "0"
            }
        }(g);
        h = {};
        c.browser && (h[c.browser] = !0, h.version = c.version);
        h.chrome && (h.webkit = !0);
        a._a = h;
        a.isAndroid = -1 < g.indexOf("android");
        a.slider = n(b);
        a.ev = n(a);
        a._b = n(document);
        a.st = n.extend({}, n.fn.royalSlider.defaults, f);
        a._c = a.st.transitionSpeed;
        a._d = 0;
        !a.st.allowCSS3 || h.webkit && !a.st.allowCSS3OnWebkit || (c = k + (k ? "T" : "t"), a._e = c + "ransform" in d && c + "ransition" in d, a._e && (a._f = k + (k ? "P" : "p") + "erspective" in d));
        k = k.toLowerCase();
        a._g = "-" + k + "-";
        a._h = "vertical" === a.st.slidesOrientation ?
        !1 : !0;
        a._i = a._h ? "left" : "top";
        a._j = a._h ? "width" : "height";
        a._k = -1;
        a._l = "fade" === a.st.transitionType ? !1 : !0;
        a._l || (a.st.sliderDrag = !1, a._m = 10);
        a._n = "z-index:0; display:none; opacity:0;";
        a._o = 0;
        a._p = 0;
        a._q = 0;
        n.each(n.rsModules, function(b, c) {
            "uid" !== b && c.call(a)
        });
        a.slides = [];
        a._r = 0;
        (a.st.slides ? n(a.st.slides) : a.slider.children().detach()).each(function() {
            a._s(this, !0)
        });
        a.st.randomizeSlides && a.slides.sort(function() {
            return 0.5 - Math.random()
        });
        a.numSlides = a.slides.length;
        a._t();
        a.st.startSlideId ? a.st.startSlideId >
        a.numSlides - 1 && (a.st.startSlideId = a.numSlides - 1) : a.st.startSlideId = 0;
        a._o = a.staticSlideId = a.currSlideId = a._u = a.st.startSlideId;
        a.currSlide = a.slides[a.currSlideId];
        a._v = 0;
        a.pointerMultitouch = !1;
        a.slider.addClass((a._h ? "rsHor" : "rsVer") + (a._l ? "" : " rsFade"));
        d = '<div class="rsOverflow"><div class="rsContainer">';
        a.slidesSpacing = a.st.slidesSpacing;
        a._w = (a._h ? a.slider.width() : a.slider.height()) + a.st.slidesSpacing;
        a._x = Boolean(0 < a._y);
        1 >= a.numSlides && (a._z = !1);
        a._a1 = a._z && a._l ? 2 === a.numSlides ? 1 : 2 : 0;
        a._b1 =
        6 > a.numSlides ? a.numSlides : 6;
        a._c1 = 0;
        a._d1 = 0;
        a.slidesJQ = [];
        for (c = 0; c < a.numSlides; c++)
            a.slidesJQ.push(n('<div style="' + (a._l ? "" : c !== a.currSlideId ? a._n : "z-index:0;") + '" class="rsSlide "></div>'));
        a._e1 = d = n(d + "</div></div>");
        var m = a.ns,
            k = function(b, c, d, e, f) {
                a._j1 = b + c + m;
                a._k1 = b + d + m;
                a._l1 = b + e + m;
                f && (a._m1 = b + f + m)
            };
        c = e.pointerEnabled;
        a.pointerEnabled = c || e.msPointerEnabled;
        a.pointerEnabled ? (a.hasTouch = !1, a._n1 = 0.2, a.pointerMultitouch = Boolean(1 < e[(c ? "m" : "msM") + "axTouchPoints"]), c ? k("pointer", "down", "move", "up",
        "cancel") : k("MSPointer", "Down", "Move", "Up", "Cancel")) : (a.isIOS ? a._j1 = a._k1 = a._l1 = a._m1 = "" : k("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (a.hasTouch = !0, a._j1 += " touchstart" + m, a._k1 += " touchmove" + m, a._l1 += " touchend" + m, a._m1 += " touchcancel" + m, a._n1 = 0.5, a.st.sliderTouch && (a._f1 = !0)) : (a.hasTouch = !1, a._n1 = 0.2));
        a.st.sliderDrag && (a._f1 = !0, h.msie || h.opera ? a._g1 = a._h1 = "move" : h.mozilla ? (a._g1 = "-moz-grab", a._h1 = "-moz-grabbing") : h.webkit && -1 != e.platform.indexOf("Mac") && (a._g1 =
        "-webkit-grab", a._h1 = "-webkit-grabbing"), a._i1());
        a.slider.html(d);
        a._o1 = a.st.controlsInside ? a._e1 : a.slider;
        a._p1 = a._e1.children(".rsContainer");
        a.pointerEnabled && a._p1.css((c ? "" : "-ms-") + "touch-action", a._h ? "pan-y" : "pan-x");
        a._q1 = n('<div class="rsPreloader"></div>');
        e = a._p1.children(".rsSlide");
        a._r1 = a.slidesJQ[a.currSlideId];
        a._s1 = 0;
        a._e ? (a._t1 = "transition-property", a._u1 = "transition-duration", a._v1 = "transition-timing-function", a._w1 = a._x1 = a._g + "transform", a._f ? (h.webkit && !h.chrome && a.slider.addClass("rsWebkit3d"),
        a._y1 = "translate3d(", a._z1 = "px, ", a._a2 = "px, 0px)") : (a._y1 = "translate(", a._z1 = "px, ", a._a2 = "px)"), a._l ? a._p1[a._g + a._t1] = a._g + "transform" : (h = {}, h[a._g + a._t1] = "opacity", h[a._g + a._u1] = a.st.transitionSpeed + "ms", h[a._g + a._v1] = a.st.css3easeInOut, e.css(h))) : (a._x1 = "left", a._w1 = "top");
        var p;
        n(window).on("resize" + a.ns, function() {
            p && clearTimeout(p);
            p = setTimeout(function() {
                a.updateSliderSize()
            }, 50)
        });
        a.ev.trigger("rsAfterPropsSetup");
        a.updateSliderSize();
        a.st.keyboardNavEnabled && a._b2();
        a.st.arrowsNavHideOnTouch &&
        (a.hasTouch || a.pointerMultitouch) && (a.st.arrowsNav = !1);
        a.st.arrowsNav && (e = a._o1, n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e), a._c2 = e.children(".rsArrowLeft").click(function(b) {
            b.preventDefault();
            a.prev()
        }), a._d2 = e.children(".rsArrowRight").click(function(b) {
            b.preventDefault();
            a.next()
        }), a.st.arrowsNavAutoHide && !a.hasTouch && (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"), e.one("mousemove.arrowshover",
        function() {
            a._c2.removeClass("rsHidden");
            a._d2.removeClass("rsHidden")
        }), e.hover(function() {
            a._e2 || (a._c2.removeClass("rsHidden"), a._d2.removeClass("rsHidden"))
        }, function() {
            a._e2 || (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"))
        })), a.ev.on("rsOnUpdateNav", function() {
            a._f2()
        }), a._f2());
        if (a._f1)
            a._p1.on(a._j1, function(b) {
                a._g2(b)
            });
        else
            a.dragSuccess = !1;
        var q = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
        a._p1.click(function(b) {
            if (!a.dragSuccess) {
                var c = n(b.target).attr("class");
                if (-1 !== n.inArray(c, q) && a.toggleVideo())
                    return !1;
                if (a.st.navigateByClick && !a._h2) {
                    if (n(b.target).closest(".rsNoDrag", a._r1).length)
                        return !0;
                    a._i2(b)
                }
                a.ev.trigger("rsSlideClick", b)
            }
        }).on("click.rs", "a", function(b) {
            if (a.dragSuccess)
                return !1;
            a._h2 = !0;
            setTimeout(function() {
                a._h2 = !1
            }, 3)
        });
        a.ev.trigger("rsAfterInit")
    }
    n.rsModules || (n.rsModules = {
        uid: 0
    });
    u.prototype = {
        constructor: u,
        _i2: function(b) {
            b = b[this._h ? "pageX" : "pageY"] - this._j2;
            b >= this._q ? this.next() : 0 > b && this.prev()
        },
        _t: function() {
            var b;
            b = this.st.numImagesToPreload;
            if (this._z = this.st.loop)
                2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1);
            this._z && 0 < b && (4 >= this.numSlides ? b = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (b = Math.floor((this.numSlides - 1) / 2)));
            this._y = b
        },
        _s: function(b, f) {
            function c(b, c) {
                c ? g.images.push(b.attr(c)) : g.images.push(b.text());
                if (h) {
                    h = !1;
                    g.caption = "src" === c ? b.attr("alt") : b.contents();
                    g.image = g.images[0];
                    g.videoURL = b.attr("data-rsVideo");
                    var d = b.attr("data-rsw"),
                        e = b.attr("data-rsh");
                    "undefined" !== typeof d && !1 !== d && "undefined" !== typeof e && !1 !== e ? (g.iW = parseInt(d, 10), g.iH = parseInt(e, 10)) : a.st.imgWidth && a.st.imgHeight && (g.iW = a.st.imgWidth, g.iH = a.st.imgHeight)
                }
            }
            var a = this,
                e,
                g = {},
                d,
                h = !0;
            b = n(b);
            a._k2 = b;
            a.ev.trigger("rsBeforeParseNode", [b, g]);
            if (!g.stopParsing)
                return b = a._k2, g.id = a._r, g.contentAdded = !1, a._r++, g.images = [], g.isBig = !1, g.hasCover || (b.hasClass("rsImg") ? (d = b, e = !0) : (d = b.find(".rsImg"), d.length && (e = !0)), e ? (g.bigImage = d.eq(0).attr("data-rsBigImg"), d.each(function() {
                    var a = n(this);
                    a.is("a") ? c(a, "href") : a.is("img") ? c(a, "src") : c(a)
                })) : b.is("img") && (b.addClass("rsImg rsMainSlideImage"), c(b, "src"))), d = b.find(".rsCaption"), d.length && (g.caption = d.remove()), g.content = b, a.ev.trigger("rsAfterParseNode", [b, g]), f && a.slides.push(g), 0 === g.images.length && (g.isLoaded = !0, g.isRendered = !1, g.isLoading = !1, g.images = null), g
        },
        _b2: function() {
            var b = this,
                f,
                c,
                a = function(a) {
                    37 === a ? b.prev() : 39 === a && b.next()
                };
            b._b.on("keydown" + b.ns, function(e) {
                b._l2 || (c = e.keyCode, 37 !== c && 39 !== c || f || (a(c), f = setInterval(function() {
                    a(c)
                },
                700)))
            }).on("keyup" + b.ns, function(a) {
                f && (clearInterval(f), f = null)
            })
        },
        goTo: function(b, f) {
            b !== this.currSlideId && this._m2(b, this.st.transitionSpeed, !0, !f)
        },
        destroy: function(b) {
            this.ev.trigger("rsBeforeDestroy");
            this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1);
            this._p1.off(this._j1 + " click");
            this.slider.data("royalSlider", null);
            n.removeData(this.slider, "royalSlider");
            n(window).off("resize" + this.ns);
            this.loadingTimeout && clearTimeout(this.loadingTimeout);
            b && this.slider.remove();
            this.ev = this.slider = this.slides = null
        },
        _n2: function(b, f) {
            function c(c, f, g) {
                c.isAdded ? (a(f, c), e(f, c)) : (g || (g = d.slidesJQ[f]), c.holder ? g = c.holder : (g = d.slidesJQ[f] = n(g), c.holder = g), c.appendOnLoaded = !1, e(f, c, g), a(f, c), d._p2(c, g, b), c.isAdded = !0)
            }
            function a(a, c) {
                c.contentAdded || (d.setItemHtml(c, b), b || (c.contentAdded = !0))
            }
            function e(a, b, c) {
                d._l && (c || (c = d.slidesJQ[a]), c.css(d._i, (a + d._d1 + p) * d._w))
            }
            function g(a) {
                if (l) {
                    if (a > r - 1)
                        return g(a - r);
                    if (0 > a)
                        return g(r + a)
                }
                return a
            }
            var d = this,
                h,
                k,
                l = d._z,
                r = d.numSlides;
            if (!isNaN(f))
                return g(f);
            var m = d.currSlideId,
                p,
                q = b ? Math.abs(d._o2 - d.currSlideId) >= d.numSlides - 1 ? 0 : 1 : d._y,
                s = Math.min(2, q),
                v = !1,
                u = !1,
                t;
            for (k = m; k < m + 1 + s; k++)
                if (t = g(k), (h = d.slides[t]) && (!h.isAdded || !h.positionSet)) {
                    v = !0;
                    break
                }
            for (k = m - 1; k > m - 1 - s; k--)
                if (t = g(k), (h = d.slides[t]) && (!h.isAdded || !h.positionSet)) {
                    u = !0;
                    break
                }
            if (v)
                for (k = m; k < m + q + 1; k++)
                    t = g(k),
                    p = Math.floor((d._u - (m - k)) / d.numSlides) * d.numSlides,
                    (h = d.slides[t]) && c(h, t);
            if (u)
                for (k = m - 1; k > m - 1 - q; k--)
                    t = g(k),
                    p = Math.floor((d._u - (m - k)) / r) * r,
                    (h = d.slides[t]) && c(h, t);
            if (!b)
                for (s = g(m - q),
                m = g(m + q), q = s > m ? 0 : s, k = 0; k < r; k++)
                    s > m && k > s - 1 || !(k < q || k > m) || (h = d.slides[k]) && h.holder && (h.holder.detach(), h.isAdded = !1)
        },
        setItemHtml: function(b, f) {
            var c = this,
                a = function() {
                    if (!b.images)
                        b.isRendered = !0,
                        b.isLoaded = !0,
                        b.isLoading = !1,
                        d(!0);
                    else if (!b.isLoading) {
                        var a,
                            f;
                        b.content.hasClass("rsImg") ? (a = b.content, f = !0) : a = b.content.find(".rsImg:not(img)");
                        a && !a.is("img") && a.each(function() {
                            var a = n(this),
                                c = '<img class="rsImg" src="' + (a.is("a") ? a.attr("href") : a.text()) + '" />';
                            f ? b.content = n(c) : a.replaceWith(c)
                        });
                        a = f ? b.content : b.content.find("img.rsImg");
                        k();
                        a.eq(0).addClass("rsMainSlideImage");
                        b.iW && b.iH && (b.isLoaded || c._q2(b), d());
                        b.isLoading = !0;
                        if (b.isBig)
                            n("<img />").on("load.rs error.rs", function(a) {
                                n(this).off("load.rs error.rs");
                                e([this], !0)
                            }).attr("src", b.image);
                        else {
                            b.loaded = [];
                            b.numStartedLoad = 0;
                            a = function(a) {
                                n(this).off("load.rs error.rs");
                                b.loaded.push(this);
                                b.loaded.length === b.numStartedLoad && e(b.loaded, !1)
                            };
                            for (var g = 0; g < b.images.length; g++) {
                                var h = n("<img />");
                                b.numStartedLoad++;
                                h.on("load.rs error.rs",
                                a).attr("src", b.images[g])
                            }
                        }
                    }
                },
                e = function(a, c) {
                    if (a.length) {
                        var d = a[0];
                        if (c !== b.isBig)
                            (d = b.holder.children()) && 1 < d.length && l();
                        else if (b.iW && b.iH)
                            g();
                        else if (b.iW = d.width, b.iH = d.height, b.iW && b.iH)
                            g();
                        else {
                            var e = new Image;
                            e.onload = function() {
                                e.width ? (b.iW = e.width, b.iH = e.height, g()) : setTimeout(function() {
                                    e.width && (b.iW = e.width, b.iH = e.height);
                                    g()
                                }, 1E3)
                            };
                            e.src = d.src
                        }
                    } else
                        g()
                },
                g = function() {
                    b.isLoaded = !0;
                    b.isLoading = !1;
                    d();
                    l();
                    h()
                },
                d = function() {
                    if (!b.isAppended && c.ev) {
                        var a = c.st.visibleNearby,
                            d = b.id - c._o;
                        f || b.appendOnLoaded || !c.st.fadeinLoadedSlide || 0 !== d && (!(a || c._r2 || c._l2) || -1 !== d && 1 !== d) || (a = {
                            visibility: "visible",
                            opacity: 0
                        }, a[c._g + "transition"] = "opacity 400ms ease-in-out", b.content.css(a), setTimeout(function() {
                            b.content.css("opacity", 1)
                        }, 16));
                        b.holder.find(".rsPreloader").length ? b.holder.append(b.content) : b.holder.html(b.content);
                        b.isAppended = !0;
                        b.isLoaded && (c._q2(b), h());
                        b.sizeReady || (b.sizeReady = !0, setTimeout(function() {
                            c.ev.trigger("rsMaybeSizeReady", b)
                        }, 100))
                    }
                },
                h = function() {
                    !b.loadedTriggered &&
                    c.ev && (b.isLoaded = b.loadedTriggered = !0, b.holder.trigger("rsAfterContentSet"), c.ev.trigger("rsAfterContentSet", b))
                },
                k = function() {
                    c.st.usePreloader && b.holder.html(c._q1.clone())
                },
                l = function(a) {
                    c.st.usePreloader && (a = b.holder.find(".rsPreloader"), a.length && a.remove())
                };
            b.isLoaded ? d() : f ? !c._l && b.images && b.iW && b.iH ? a() : (b.holder.isWaiting = !0, k(), b.holder.slideId = -99) : a()
        },
        _p2: function(b, f, c) {
            this._p1.append(b.holder);
            b.appendOnLoaded = !1
        },
        _g2: function(b, f) {
            var c = this,
                a,
                e = "touchstart" === b.type;
            c._s2 = e;
            c.ev.trigger("rsDragStart");
            if (n(b.target).closest(".rsNoDrag", c._r1).length)
                return c.dragSuccess = !1, !0;
            !f && c._r2 && (c._t2 = !0, c._u2());
            c.dragSuccess = !1;
            if (c._l2)
                e && (c._v2 = !0);
            else {
                e && (c._v2 = !1);
                c._w2();
                if (e) {
                    var g = b.originalEvent.touches;
                    if (g && 0 < g.length)
                        a = g[0],
                        1 < g.length && (c._v2 = !0);
                    else
                        return
                } else
                    b.preventDefault(),
                    a = b,
                    c.pointerEnabled && (a = a.originalEvent);
                c._l2 = !0;
                c._b.on(c._k1, function(a) {
                    c._x2(a, f)
                }).on(c._l1, function(a) {
                    c._y2(a, f)
                });
                c._z2 = "";
                c._a3 = !1;
                c._b3 = a.pageX;
                c._c3 = a.pageY;
                c._d3 = c._v = (f ? c._e3 : c._h) ? a.pageX : a.pageY;
                c._f3 = 0;
                c._g3 = 0;
                c._h3 = f ? c._i3 : c._p;
                c._j3 = (new Date).getTime();
                if (e)
                    c._e1.on(c._m1, function(a) {
                        c._y2(a, f)
                    })
            }
        },
        _k3: function(b, f) {
            if (this._l3) {
                var c = this._m3,
                    a = b.pageX - this._b3,
                    e = b.pageY - this._c3,
                    g = this._h3 + a,
                    d = this._h3 + e,
                    h = f ? this._e3 : this._h,
                    g = h ? g : d,
                    d = this._z2;
                this._a3 = !0;
                this._b3 = b.pageX;
                this._c3 = b.pageY;
                "x" === d && 0 !== a ? this._f3 = 0 < a ? 1 : -1 : "y" === d && 0 !== e && (this._g3 = 0 < e ? 1 : -1);
                d = h ? this._b3 : this._c3;
                a = h ? a : e;
                f ? g > this._n3 ? g = this._h3 + a * this._n1 : g < this._o3 && (g = this._h3 + a * this._n1) : this._z || (0 >= this.currSlideId &&
                0 < d - this._d3 && (g = this._h3 + a * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > d - this._d3 && (g = this._h3 + a * this._n1));
                this._h3 = g;
                200 < c - this._j3 && (this._j3 = c, this._v = d);
                f ? this._q3(this._h3) : this._l && this._p3(this._h3)
            }
        },
        _x2: function(b, f) {
            var c = this,
                a,
                e = "touchmove" === b.type;
            if (!c._s2 || e) {
                if (e) {
                    if (c._r3)
                        return;
                    var g = b.originalEvent.touches;
                    if (g) {
                        if (1 < g.length)
                            return;
                        a = g[0]
                    } else
                        return
                } else
                    a = b,
                    c.pointerEnabled && (a = a.originalEvent);
                c._a3 || (c._e && (f ? c._s3 : c._p1).css(c._g + c._u1, "0s"), function h() {
                    c._l2 && (c._t3 =
                    requestAnimationFrame(h), c._u3 && c._k3(c._u3, f))
                }());
                if (c._l3)
                    b.preventDefault(),
                    c._m3 = (new Date).getTime(),
                    c._u3 = a;
                else if (g = f ? c._e3 : c._h, a = Math.abs(a.pageX - c._b3) - Math.abs(a.pageY - c._c3) - (g ? -7 : 7), 7 < a) {
                    if (g)
                        b.preventDefault(),
                        c._z2 = "x";
                    else if (e) {
                        c._v3(b);
                        return
                    }
                    c._l3 = !0
                } else if (-7 > a) {
                    if (!g)
                        b.preventDefault(),
                        c._z2 = "y";
                    else if (e) {
                        c._v3(b);
                        return
                    }
                    c._l3 = !0
                }
            }
        },
        _v3: function(b, f) {
            this._r3 = !0;
            this._a3 = this._l2 = !1;
            this._y2(b)
        },
        _y2: function(b, f) {
            function c(a) {
                return 100 > a ? 100 : 500 < a ? 500 : a
            }
            function a(a, b) {
                if (e._l ||
                f)
                    h = (-e._u - e._d1) * e._w,
                    k = Math.abs(e._p - h),
                    e._c = k / b,
                    a && (e._c += 250),
                    e._c = c(e._c),
                    e._x3(h, !1)
            }
            var e = this,
                g,
                d,
                h,
                k;
            g = -1 < b.type.indexOf("touch");
            if (!e._s2 || g)
                if (e._s2 = !1, e.ev.trigger("rsDragRelease"), e._u3 = null, e._l2 = !1, e._r3 = !1, e._l3 = !1, e._m3 = 0, cancelAnimationFrame(e._t3), e._a3 && (f ? e._q3(e._h3) : e._l && e._p3(e._h3)), e._b.off(e._k1).off(e._l1), g && e._e1.off(e._m1), e._i1(), !e._a3 && !e._v2 && f && e._w3) {
                    var l = n(b.target).closest(".rsNavItem");
                    l.length && e.goTo(l.index())
                } else {
                    d = f ? e._e3 : e._h;
                    if (!e._a3 || "y" === e._z2 &&
                    d || "x" === e._z2 && !d)
                        if (!f && e._t2) {
                            e._t2 = !1;
                            if (e.st.navigateByClick) {
                                e._i2(e.pointerEnabled ? b.originalEvent : b);
                                e.dragSuccess = !0;
                                return
                            }
                            e.dragSuccess = !0
                        } else {
                            e._t2 = !1;
                            e.dragSuccess = !1;
                            return
                        }
                    else
                        e.dragSuccess = !0;
                    e._t2 = !1;
                    e._z2 = "";
                    var r = e.st.minSlideOffset;
                    g = g ? b.originalEvent.changedTouches[0] : e.pointerEnabled ? b.originalEvent : b;
                    var m = d ? g.pageX : g.pageY,
                        p = e._d3;
                    g = e._v;
                    var q = e.currSlideId,
                        s = e.numSlides,
                        v = d ? e._f3 : e._g3,
                        u = e._z;
                    Math.abs(m - p);
                    g = m - g;
                    d = (new Date).getTime() - e._j3;
                    d = Math.abs(g) / d;
                    if (0 === v || 1 >=
                    s)
                        a(!0, d);
                    else {
                        if (!u && !f)
                            if (0 >= q) {
                                if (0 < v) {
                                    a(!0, d);
                                    return
                                }
                            } else if (q >= s - 1 && 0 > v) {
                                a(!0, d);
                                return
                            }
                        if (f) {
                            h = e._i3;
                            if (h > e._n3)
                                h = e._n3;
                            else if (h < e._o3)
                                h = e._o3;
                            else {
                                m = d * d / 0.006;
                                l = -e._i3;
                                p = e._y3 - e._z3 + e._i3;
                                0 < g && m > l ? (l += e._z3 / (15 / (m / d * 0.003)), d = d * l / m, m = l) : 0 > g && m > p && (p += e._z3 / (15 / (m / d * 0.003)), d = d * p / m, m = p);
                                l = Math.max(Math.round(d / 0.003), 50);
                                h += m * (0 > g ? -1 : 1);
                                if (h > e._n3) {
                                    e._a4(h, l, !0, e._n3, 200);
                                    return
                                }
                                if (h < e._o3) {
                                    e._a4(h, l, !0, e._o3, 200);
                                    return
                                }
                            }
                            e._a4(h, l, !0)
                        } else
                            l = function(a) {
                                var b = Math.floor(a / e._w);
                                a - b * e._w >
                                r && b++;
                                return b
                            },
                            p + r < m ? 0 > v ? a(!1, d) : (l = l(m - p), e._m2(e.currSlideId - l, c(Math.abs(e._p - (-e._u - e._d1 + l) * e._w) / d), !1, !0, !0)) : p - r > m ? 0 < v ? a(!1, d) : (l = l(p - m), e._m2(e.currSlideId + l, c(Math.abs(e._p - (-e._u - e._d1 - l) * e._w) / d), !1, !0, !0)) : a(!1, d)
                    }
                }
        },
        _p3: function(b) {
            b = this._p = b;
            this._e ? this._p1.css(this._x1, this._y1 + (this._h ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, b)
        },
        updateSliderSize: function(b) {
            var f,
                c;
            if (this.st.autoScaleSlider) {
                var a = this.st.autoScaleSliderWidth,
                    e = this.st.autoScaleSliderHeight;
                this.st.autoScaleHeight ? (f = this.slider.width(), f != this.width && (this.slider.css("height", e / a * f), f = this.slider.width()), c = this.slider.height()) : (c = this.slider.height(), c != this.height && (this.slider.css("width", a / e * c), c = this.slider.height()), f = this.slider.width())
            } else
                f = this.slider.width(),
                c = this.slider.height();
            if (b || f != this.width || c != this.height) {
                this.width = f;
                this.height = c;
                this._b4 = f;
                this._c4 = c;
                this.ev.trigger("rsBeforeSizeSet");
                this.ev.trigger("rsAfterSizePropSet");
                this._e1.css({
                    width: this._b4,
                    height: this._c4
                });
                this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing;
                this._d4 = this.st.imageScalePadding;
                for (f = 0; f < this.slides.length; f++)
                    b = this.slides[f],
                    b.positionSet = !1,
                    b && b.images && b.isLoaded && (b.isRendered = !1, this._q2(b));
                if (this._e4)
                    for (f = 0; f < this._e4.length; f++)
                        b = this._e4[f],
                        b.holder.css(this._i, (b.id + this._d1) * this._w);
                this._n2();
                this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w));
                this.ev.trigger("rsOnUpdateNav")
            }
            this._j2 = this._e1.offset();
            this._j2 =
            this._j2[this._i]
        },
        appendSlide: function(b, f) {
            var c = this._s(b);
            if (isNaN(f) || f > this.numSlides)
                f = this.numSlides;
            this.slides.splice(f, 0, c);
            this.slidesJQ.splice(f, 0, n('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>'));
            f < this.currSlideId && this.currSlideId++;
            this.ev.trigger("rsOnAppendSlide", [c, f]);
            this._f4(f);
            f === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
        },
        removeSlide: function(b) {
            var f = this.slides[b];
            f && (f.holder && f.holder.remove(), b < this.currSlideId && this.currSlideId--,
            this.slides.splice(b, 1), this.slidesJQ.splice(b, 1), this.ev.trigger("rsOnRemoveSlide", [b]), this._f4(b), b === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
        },
        _f4: function(b) {
            var f = this;
            b = f.numSlides;
            b = 0 >= f._u ? 0 : Math.floor(f._u / b);
            f.numSlides = f.slides.length;
            0 === f.numSlides ? (f.currSlideId = f._d1 = f._u = 0, f.currSlide = f._g4 = null) : f._u = b * f.numSlides + f.currSlideId;
            for (b = 0; b < f.numSlides; b++)
                f.slides[b].id = b;
            f.currSlide = f.slides[f.currSlideId];
            f._r1 = f.slidesJQ[f.currSlideId];
            f.currSlideId >= f.numSlides ?
            f.goTo(f.numSlides - 1) : 0 > f.currSlideId && f.goTo(0);
            f._t();
            f._l && f._z && f._p1.css(f._g + f._u1, "0ms");
            f._h4 && clearTimeout(f._h4);
            f._h4 = setTimeout(function() {
                f._l && f._p3((-f._u - f._d1) * f._w);
                f._n2();
                f._l || f._r1.css({
                    display: "block",
                    opacity: 1
                })
            }, 14);
            f.ev.trigger("rsOnUpdateNav")
        },
        _i1: function() {
            this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
        },
        _w2: function() {
            this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) :
            (this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
        },
        next: function(b) {
            this._m2("next", this.st.transitionSpeed, !0, !b)
        },
        prev: function(b) {
            this._m2("prev", this.st.transitionSpeed, !0, !b)
        },
        _m2: function(b, f, c, a, e) {
            var g = this,
                d,
                h,
                k;
            g.ev.trigger("rsBeforeMove", [b, a]);
            k = "next" === b ? g.currSlideId + 1 : "prev" === b ? g.currSlideId - 1 : b = parseInt(b, 10);
            if (!g._z) {
                if (0 > k) {
                    g._i4("left", !a);
                    return
                }
                if (k >= g.numSlides) {
                    g._i4("right", !a);
                    return
                }
            }
            g._r2 && (g._u2(!0), c = !1);
            h = k - g.currSlideId;
            k = g._o2 = g.currSlideId;
            var l = g.currSlideId + h;
            a = g._u;
            var n;
            g._z ? (l = g._n2(!1, l), a += h) : a = l;
            g._o = l;
            g._g4 = g.slidesJQ[g.currSlideId];
            g._u = a;
            g.currSlideId = g._o;
            g.currSlide = g.slides[g.currSlideId];
            g._r1 = g.slidesJQ[g.currSlideId];
            var l = g.st.slidesDiff,
                m = Boolean(0 < h);
            h = Math.abs(h);
            var p = Math.floor(k / g._y),
                q = Math.floor((k + (m ? l : -l)) / g._y),
                p = (m ? Math.max(p, q) : Math.min(p, q)) * g._y + (m ? g._y - 1 : 0);
            p > g.numSlides - 1 ? p = g.numSlides - 1 : 0 > p && (p = 0);
            k = m ? p - k : k - p;
            k > g._y && (k = g._y);
            if (h > k + l)
                for (g._d1 += (h - (k + l)) * (m ? -1 : 1), f *= 1.4, k = 0; k < g.numSlides; k++)
                    g.slides[k].positionSet =
                    !1;
            g._c = f;
            g._n2(!0);
            e || (n = !0);
            d = (-a - g._d1) * g._w;
            n ? setTimeout(function() {
                g._j4 = !1;
                g._x3(d, b, !1, c);
                g.ev.trigger("rsOnUpdateNav")
            }, 0) : (g._x3(d, b, !1, c), g.ev.trigger("rsOnUpdateNav"))
        },
        _f2: function() {
            this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId ===
            this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
        },
        _x3: function(b, f, c, a, e) {
            function g() {
                var a;
                h && (a = h.data("rsTimeout")) && (h !== k && h.css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                }), clearTimeout(a), h.data("rsTimeout", ""));
                if (a = k.data("rsTimeout"))
                    clearTimeout(a),
                    k.data("rsTimeout", "")
            }
            var d = this,
                h,
                k,
                l = {};
            isNaN(d._c) && (d._c = 400);
            d._p = d._h3 = b;
            d.ev.trigger("rsBeforeAnimStart");
            d._e ? d._l ? (d._c = parseInt(d._c, 10), c = d._g + d._v1, l[d._g + d._u1] = d._c + "ms", l[c] = a ? n.rsCSS3Easing[d.st.easeInOut] :
            n.rsCSS3Easing[d.st.easeOut], d._p1.css(l), a || !d.hasTouch ? setTimeout(function() {
                d._p3(b)
            }, 5) : d._p3(b)) : (d._c = d.st.transitionSpeed, h = d._g4, k = d._r1, k.data("rsTimeout") && k.css("opacity", 0), g(), h && h.data("rsTimeout", setTimeout(function() {
                l[d._g + d._u1] = "0ms";
                l.zIndex = 0;
                l.display = "none";
                h.data("rsTimeout", "");
                h.css(l);
                setTimeout(function() {
                    h.css("opacity", 0)
                }, 16)
            }, d._c + 60)), l.display = "block", l.zIndex = d._m, l.opacity = 0, l[d._g + d._u1] = "0ms", l[d._g + d._v1] = n.rsCSS3Easing[d.st.easeInOut], k.css(l), k.data("rsTimeout",
            setTimeout(function() {
                k.css(d._g + d._u1, d._c + "ms");
                k.data("rsTimeout", setTimeout(function() {
                    k.css("opacity", 1);
                    k.data("rsTimeout", "")
                }, 20))
            }, 20))) : d._l ? (l[d._h ? d._x1 : d._w1] = b + "px", d._p1.animate(l, d._c, a ? d.st.easeInOut : d.st.easeOut)) : (h = d._g4, k = d._r1, k.stop(!0, !0).css({
                opacity: 0,
                display: "block",
                zIndex: d._m
            }), d._c = d.st.transitionSpeed, k.animate({
                opacity: 1
            }, d._c, d.st.easeInOut), g(), h && h.data("rsTimeout", setTimeout(function() {
                h.stop(!0, !0).css({
                    opacity: 0,
                    display: "none",
                    zIndex: 0
                })
            }, d._c + 60)));
            d._r2 = !0;
            d.loadingTimeout && clearTimeout(d.loadingTimeout);
            d.loadingTimeout = e ? setTimeout(function() {
                d.loadingTimeout = null;
                e.call()
            }, d._c + 60) : setTimeout(function() {
                d.loadingTimeout = null;
                d._k4(f)
            }, d._c + 60)
        },
        _u2: function(b) {
            this._r2 = !1;
            clearTimeout(this.loadingTimeout);
            if (this._l)
                if (!this._e)
                    this._p1.stop(!0),
                    this._p = parseInt(this._p1.css(this._x1), 10);
                else {
                    if (!b) {
                        b = this._p;
                        var f = this._h3 = this._l4();
                        this._p1.css(this._g + this._u1, "0ms");
                        b !== f && this._p3(f)
                    }
                }
            else
                20 < this._m ? this._m = 10 : this._m++
        },
        _l4: function() {
            var b =
                window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
                f = 0 === b[0].indexOf("matrix3d");
            return parseInt(b[this._h ? f ? 12 : 4 : f ? 13 : 5], 10)
        },
        _m4: function(b, f) {
            return this._e ? this._y1 + (f ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2 : b
        },
        _k4: function(b) {
            this._l || (this._r1.css("z-index", 0), this._m = 10);
            this._r2 = !1;
            this.staticSlideId = this.currSlideId;
            this._n2();
            this._n4 = !1;
            this.ev.trigger("rsAfterSlideChange")
        },
        _i4: function(b, f) {
            var c = this,
                a = (-c._u - c._d1) *
                c._w;
            if (0 !== c.numSlides && !c._r2)
                if (c.st.loopRewind)
                    c.goTo("left" === b ? c.numSlides - 1 : 0, f);
                else if (c._l) {
                    c._c = 200;
                    var e = function() {
                        c._r2 = !1
                    };
                    c._x3(a + ("left" === b ? 30 : -30), "", !1, !0, function() {
                        c._r2 = !1;
                        c._x3(a, "", !1, !0, e)
                    })
                }
        },
        _q2: function(b, f) {
            if (!b.isRendered) {
                var c = b.content,
                    a = "rsMainSlideImage",
                    e,
                    g = this.st.imageAlignCenter,
                    d = this.st.imageScaleMode,
                    h;
                b.videoURL && (a = "rsVideoContainer", "fill" !== d ? e = !0 : (h = c, h.hasClass(a) || (h = h.find("." + a)), h.css({
                    width: "100%",
                    height: "100%"
                }), a = "rsMainSlideImage"));
                c.hasClass(a) ||
                (c = c.find("." + a));
                if (c) {
                    var k = b.iW,
                        l = b.iH;
                    b.isRendered = !0;
                    if ("none" !== d || g) {
                        a = "fill" !== d ? this._d4 : 0;
                        h = this._b4 - 2 * a;
                        var n = this._c4 - 2 * a,
                            m,
                            p,
                            q = {};
                        "fit-if-smaller" === d && (k > h || l > n) && (d = "fit");
                        if ("fill" === d || "fit" === d)
                            m = h / k,
                            p = n / l,
                            m = "fill" == d ? m > p ? m : p : "fit" == d ? m < p ? m : p : 1,
                            k = Math.ceil(k * m, 10),
                            l = Math.ceil(l * m, 10);
                        "none" !== d && (q.width = k, q.height = l, e && c.find(".rsImg").css({
                            width: "100%",
                            height: "100%"
                        }));
                        g && (q.marginLeft = Math.floor((h - k) / 2) + a, q.marginTop = Math.floor((n - l) / 2) + a);
                        c.css(q)
                    }
                }
            }
        }
    };
    n.rsProto = u.prototype;
    n.fn.royalSlider = function(b) {
        var f = arguments;
        return this.each(function() {
            var c = n(this);
            if ("object" !== typeof b && b) {
                if ((c = c.data("royalSlider")) && c[b])
                    return c[b].apply(c, Array.prototype.slice.call(f, 1))
            } else
                c.data("royalSlider") || c.data("royalSlider", new u(c, b))
        })
    };
    n.fn.royalSlider.defaults = {
        slidesSpacing: 8,
        startSlideId: 0,
        loop: !1,
        loopRewind: !1,
        numImagesToPreload: 4,
        fadeinLoadedSlide: !0,
        slidesOrientation: "horizontal",
        transitionType: "move",
        transitionSpeed: 600,
        controlNavigation: "bullets",
        controlsInside: !0,
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        navigateByClick: !0,
        randomizeSlides: !1,
        sliderDrag: !0,
        sliderTouch: !0,
        keyboardNavEnabled: !1,
        fadeInAfterLoaded: !0,
        allowCSS3: !0,
        allowCSS3OnWebkit: !0,
        addActiveClass: !1,
        autoHeight: !1,
        easeOut: "easeOutSine",
        easeInOut: "easeInOutSine",
        minSlideOffset: 10,
        imageScaleMode: "fit-if-smaller",
        imageAlignCenter: !0,
        imageScalePadding: 4,
        usePreloader: !0,
        autoScaleSlider: !1,
        autoScaleSliderWidth: 800,
        autoScaleSliderHeight: 400,
        autoScaleHeight: !0,
        arrowsNavHideOnTouch: !1,
        globalCaption: !1,
        slidesDiff: 2
    };
    n.rsCSS3Easing = {
        easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
    };
    n.extend(jQuery.easing, {
        easeInOutSine: function(b, f, c, a, e) {
            return -a / 2 * (Math.cos(Math.PI * f / e) - 1) + c
        },
        easeOutSine: function(b, f, c, a, e) {
            return a * Math.sin(f / e * (Math.PI / 2)) + c
        },
        easeOutCubic: function(b, f, c, a, e) {
            return a * ((f = f / e - 1) * f * f + 1) + c
        }
    })
})(jQuery, window);
// jquery.rs.bullets v1.0.1
(function(c) {
    c.extend(c.rsProto, {
        _i5: function() {
            var a = this;
            "bullets" === a.st.controlNavigation && (a.ev.one("rsAfterPropsSetup", function() {
                a._j5 = !0;
                a.slider.addClass("rsWithBullets");
                for (var b = '<div class="rsNav rsBullets">', e = 0; e < a.numSlides; e++)
                    b += '<div class="rsNavItem rsBullet"><span></span></div>';
                a._k5 = b = c(b + "</div>");
                a._l5 = b.appendTo(a.slider).children();
                a._k5.on("click.rs", ".rsNavItem", function(b) {
                    a._m5 || a.goTo(c(this).index())
                })
            }), a.ev.on("rsOnAppendSlide", function(b, c, d) {
                d >= a.numSlides ? a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') :
                a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');
                a._l5 = a._k5.children()
            }), a.ev.on("rsOnRemoveSlide", function(b, c) {
                var d = a._l5.eq(c);
                d && d.length && (d.remove(), a._l5 = a._k5.children())
            }), a.ev.on("rsOnUpdateNav", function() {
                var b = a.currSlideId;
                a._n5 && a._n5.removeClass("rsNavSelected");
                b = a._l5.eq(b);
                b.addClass("rsNavSelected");
                a._n5 = b
            }))
        }
    });
    c.rsModules.bullets = c.rsProto._i5
})(jQuery);
// jquery.rs.thumbnails v1.0.6
(function(g) {
    g.extend(g.rsProto, {
        _h6: function() {
            var a = this;
            "thumbnails" === a.st.controlNavigation && (a._i6 = {
                drag: !0,
                touch: !0,
                orientation: "horizontal",
                navigation: !0,
                arrows: !0,
                arrowLeft: null,
                arrowRight: null,
                spacing: 4,
                arrowsAutoHide: !1,
                appendSpan: !1,
                transitionSpeed: 600,
                autoCenter: !0,
                fitInViewport: !0,
                firstMargin: !0,
                paddingTop: 0,
                paddingBottom: 0
            }, a.st.thumbs = g.extend({}, a._i6, a.st.thumbs), a._j6 = !0, !1 === a.st.thumbs.firstMargin ? a.st.thumbs.firstMargin = 0 : !0 === a.st.thumbs.firstMargin && (a.st.thumbs.firstMargin =
            a.st.thumbs.spacing), a.ev.on("rsBeforeParseNode", function(a, b, c) {
                b = g(b);
                c.thumbnail = b.find(".rsTmb").remove();
                c.thumbnail.length ? c.thumbnail = g(document.createElement("div")).append(c.thumbnail).html() : (c.thumbnail = b.attr("data-rsTmb"), c.thumbnail || (c.thumbnail = b.find(".rsImg").attr("data-rsTmb")), c.thumbnail = c.thumbnail ? '<img src="' + c.thumbnail + '"/>' : "")
            }), a.ev.one("rsAfterPropsSetup", function() {
                a._k6()
            }), a._n5 = null, a.ev.on("rsOnUpdateNav", function() {
                var e = g(a._l5[a.currSlideId]);
                e !== a._n5 && (a._n5 &&
                (a._n5.removeClass("rsNavSelected"), a._n5 = null), a._l6 && a._m6(a.currSlideId), a._n5 = e.addClass("rsNavSelected"))
            }), a.ev.on("rsOnAppendSlide", function(e, b, c) {
                e = "<div" + a._n6 + ' class="rsNavItem rsThumb">' + a._o6 + b.thumbnail + "</div>";
                c >= a.numSlides ? a._s3.append(e) : a._l5.eq(c).before(e);
                a._l5 = a._s3.children();
                a.updateThumbsSize()
            }), a.ev.on("rsOnRemoveSlide", function(e, b) {
                var c = a._l5.eq(b);
                c && (c.remove(), a._l5 = a._s3.children(), a.updateThumbsSize())
            }))
        },
        _k6: function() {
            var a = this,
                e = "rsThumbs",
                b = a.st.thumbs,
                c = "",
                f,
                d,
                h = b.spacing;
            a._j5 = !0;
            a._e3 = "vertical" === b.orientation ? !1 : !0;
            a._n6 = f = h ? ' style="margin-' + (a._e3 ? "right" : "bottom") + ":" + h + 'px;"' : "";
            a._i3 = 0;
            a._p6 = !1;
            a._m5 = !1;
            a._l6 = !1;
            a._q6 = b.arrows && b.navigation;
            d = a._e3 ? "Hor" : "Ver";
            a.slider.addClass("rsWithThumbs rsWithThumbs" + d);
            c += '<div class="rsNav rsThumbs rsThumbs' + d + '"><div class="' + e + 'Container">';
            a._o6 = b.appendSpan ? '<span class="thumbIco"></span>' : "";
            for (var k = 0; k < a.numSlides; k++)
                d = a.slides[k],
                c += "<div" + f + ' class="rsNavItem rsThumb">' + d.thumbnail + a._o6 +
                "</div>";
            c = g(c + "</div></div>");
            f = {};
            b.paddingTop && (f[a._e3 ? "paddingTop" : "paddingLeft"] = b.paddingTop);
            b.paddingBottom && (f[a._e3 ? "paddingBottom" : "paddingRight"] = b.paddingBottom);
            c.css(f);
            a._s3 = g(c).find("." + e + "Container");
            a._q6 && (e += "Arrow", b.arrowLeft ? a._r6 = b.arrowLeft : (a._r6 = g('<div class="' + e + " " + e + 'Left"><div class="' + e + 'Icn"></div></div>'), c.append(a._r6)), b.arrowRight ? a._s6 = b.arrowRight : (a._s6 = g('<div class="' + e + " " + e + 'Right"><div class="' + e + 'Icn"></div></div>'), c.append(a._s6)), a._r6.click(function() {
                var b =
                (Math.floor(a._i3 / a._t6) + a._u6) * a._t6 + a._v6;
                a._a4(b > a._n3 ? a._n3 : b)
            }), a._s6.click(function() {
                var b = (Math.floor(a._i3 / a._t6) - a._u6) * a._t6 + a._v6;
                a._a4(b < a._o3 ? a._o3 : b)
            }), b.arrowsAutoHide && !a.hasTouch && (a._r6.css("opacity", 0), a._s6.css("opacity", 0), c.one("mousemove.rsarrowshover", function() {
                a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1))
            }), c.hover(function() {
                a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1))
            }, function() {
                a._l6 && (a._r6.css("opacity", 0), a._s6.css("opacity", 0))
            })));
            a._k5 = c;
            a._l5 =
            a._s3.children();
            a.msEnabled && a.st.thumbs.navigation && a._s3.css("-ms-touch-action", a._e3 ? "pan-y" : "pan-x");
            a.slider.append(c);
            a._w3 = !0;
            a._v6 = h;
            b.navigation && a._e && a._s3.css(a._g + "transition-property", a._g + "transform");
            a._k5.on("click.rs", ".rsNavItem", function(b) {
                a._m5 || a.goTo(g(this).index())
            });
            a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function() {
                a._w6 = a._e3 ? a._c4 : a._b4;
                a.updateThumbsSize(!0)
            });
            a.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs", function(b, c) {
                a.updateThumbsSize(!0,
                c)
            })
        },
        updateThumbsSize: function(a, e) {
            var b = this,
                c = b._l5.first(),
                f = {},
                d = b._l5.length;
            b._t6 = (b._e3 ? c.outerWidth() : c.outerHeight()) + b._v6;
            b._y3 = d * b._t6 - b._v6;
            f[b._e3 ? "width" : "height"] = b._y3 + b._v6;
            b._z3 = b._e3 ? b._k5.width() : void 0 !== e ? e : b._k5.height();
            b._w3 && (b.isFullscreen || b.st.thumbs.fitInViewport) && (b._e3 ? b._c4 = b._w6 - b._k5.outerHeight() : b._b4 = b._w6 - b._k5.outerWidth());
            b._z3 && (b._o3 = -(b._y3 - b._z3) - b.st.thumbs.firstMargin, b._n3 = b.st.thumbs.firstMargin, b._u6 = Math.floor(b._z3 / b._t6), b._y3 < b._z3 ? (b.st.thumbs.autoCenter &&
            b._q3((b._z3 - b._y3) / 2), b.st.thumbs.arrows && b._r6 && (b._r6.addClass("rsThumbsArrowDisabled"), b._s6.addClass("rsThumbsArrowDisabled")), b._l6 = !1, b._m5 = !1, b._k5.off(b._j1)) : b.st.thumbs.navigation && !b._l6 && (b._l6 = !0, !b.hasTouch && b.st.thumbs.drag || b.hasTouch && b.st.thumbs.touch) && (b._m5 = !0, b._k5.on(b._j1, function(a) {
                b._g2(a, !0)
            })), b._s3.css(f), a && e && b._m6(b.currSlideId), b._e && (f[b._g + "transition-duration"] = "0ms"))
        },
        setThumbsOrientation: function(a, e) {
            this._w3 && (this.st.thumbs.orientation = a, this._k5.remove(),
            this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), e || this.updateSliderSize(!0))
        },
        _q3: function(a) {
            this._i3 = a;
            this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? a + this._z1 + 0 : 0 + this._z1 + a) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, a)
        },
        _a4: function(a, e, b, c, f) {
            var d = this;
            if (d._l6) {
                e || (e = d.st.thumbs.transitionSpeed);
                d._i3 = a;
                d._x6 && clearTimeout(d._x6);
                d._p6 && (d._e || d._s3.stop(), b = !0);
                var h = {};
                d._p6 = !0;
                d._e ? (h[d._g + "transition-duration"] = e + "ms", h[d._g + "transition-timing-function"] =
                b ? g.rsCSS3Easing[d.st.easeOut] : g.rsCSS3Easing[d.st.easeInOut], d._s3.css(h), d._q3(a)) : (h[d._e3 ? d._x1 : d._w1] = a + "px", d._s3.animate(h, e, b ? "easeOutCubic" : d.st.easeInOut));
                c && (d._i3 = c);
                d._y6();
                d._x6 = setTimeout(function() {
                    d._p6 = !1;
                    f && (d._a4(c, f, !0), f = null)
                }, e)
            }
        },
        _y6: function() {
            this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
        },
        _m6: function(a, e) {
            var b = 0,
                c,
                f = a * this._t6 + 2 * this._t6 - this._v6 + this._n3,
                d = Math.floor(this._i3 / this._t6);
            this._l6 && (this._j6 && (e = !0, this._j6 = !1), f + this._i3 > this._z3 ? (a === this.numSlides - 1 && (b = 1), d = -a + this._u6 - 2 + b, c = d * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== a ? (a - 1) * this._t6 <= -this._i3 + this._n3 && a - 1 <= this.numSlides - this._u6 && (c = (-a + 1) * this._t6 + this._n3) : c = this._n3, c !== this._i3 && (b = void 0 === c ? this._i3 : c, b > this._n3 ? this._q3(this._n3) : b < this._o3 ? this._q3(this._o3) : void 0 !== c && (e ? this._q3(c) : this._a4(c))),
            this._y6())
        }
    });
    g.rsModules.thumbnails = g.rsProto._h6
})(jQuery);
// jquery.rs.tabs v1.0.2
(function(e) {
    e.extend(e.rsProto, {
        _f6: function() {
            var a = this;
            "tabs" === a.st.controlNavigation && (a.ev.on("rsBeforeParseNode", function(a, d, b) {
                d = e(d);
                b.thumbnail = d.find(".rsTmb").remove();
                b.thumbnail.length ? b.thumbnail = e(document.createElement("div")).append(b.thumbnail).html() : (b.thumbnail = d.attr("data-rsTmb"), b.thumbnail || (b.thumbnail = d.find(".rsImg").attr("data-rsTmb")), b.thumbnail = b.thumbnail ? '<img src="' + b.thumbnail + '"/>' : "")
            }), a.ev.one("rsAfterPropsSetup", function() {
                a._g6()
            }), a.ev.on("rsOnAppendSlide",
            function(c, d, b) {
                b >= a.numSlides ? a._k5.append('<div class="rsNavItem rsTab">' + d.thumbnail + "</div>") : a._l5.eq(b).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>");
                a._l5 = a._k5.children()
            }), a.ev.on("rsOnRemoveSlide", function(c, d) {
                var b = a._l5.eq(d);
                b && (b.remove(), a._l5 = a._k5.children())
            }), a.ev.on("rsOnUpdateNav", function() {
                var c = a.currSlideId;
                a._n5 && a._n5.removeClass("rsNavSelected");
                c = a._l5.eq(c);
                c.addClass("rsNavSelected");
                a._n5 = c
            }))
        },
        _g6: function() {
            var a = this,
                c;
            a._j5 = !0;
            c = '<div class="rsNav rsTabs">';
            for (var d = 0; d < a.numSlides; d++)
                c += '<div class="rsNavItem rsTab">' + a.slides[d].thumbnail + "</div>";
            c = e(c + "</div>");
            a._k5 = c;
            a._l5 = c.children(".rsNavItem");
            a.slider.append(c);
            a._k5.click(function(b) {
                b = e(b.target).closest(".rsNavItem");
                b.length && a.goTo(b.index())
            })
        }
    });
    e.rsModules.tabs = e.rsProto._f6
})(jQuery);
// jquery.rs.fullscreen v1.0.5
(function(c) {
    c.extend(c.rsProto, {
        _q5: function() {
            var a = this;
            a._r5 = {
                enabled: !1,
                keyboardNav: !0,
                buttonFS: !0,
                nativeFS: !1,
                doubleTap: !0
            };
            a.st.fullscreen = c.extend({}, a._r5, a.st.fullscreen);
            if (a.st.fullscreen.enabled)
                a.ev.one("rsBeforeSizeSet", function() {
                    a._s5()
                })
        },
        _s5: function() {
            var a = this;
            a._t5 = !a.st.keyboardNavEnabled && a.st.fullscreen.keyboardNav;
            if (a.st.fullscreen.nativeFS) {
                a._u5 = {
                    supportsFullScreen: !1,
                    isFullScreen: function() {
                        return !1
                    },
                    requestFullScreen: function() {},
                    cancelFullScreen: function() {},
                    fullScreenEventName: "",
                    prefix: ""
                };
                var b = ["webkit", "moz", "o", "ms", "khtml"];
                if (!a.isAndroid)
                    if ("undefined" != typeof document.cancelFullScreen)
                        a._u5.supportsFullScreen = !0;
                    else
                        for (var d = 0; d < b.length; d++)
                            if (a._u5.prefix = b[d], "undefined" != typeof document[a._u5.prefix + "CancelFullScreen"]) {
                                a._u5.supportsFullScreen = !0;
                                break
                            }
                a._u5.supportsFullScreen ? (a.nativeFS = !0, a._u5.fullScreenEventName = a._u5.prefix + "fullscreenchange" + a.ns, a._u5.isFullScreen = function() {
                    switch (this.prefix) {
                    case "":
                        return document.fullScreen;
                    case "webkit":
                        return document.webkitIsFullScreen;
                    default:
                        return document[this.prefix + "FullScreen"]
                    }
                }, a._u5.requestFullScreen = function(a) {
                    return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
                }, a._u5.cancelFullScreen = function(a) {
                    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
                }) : a._u5 = !1
            }
            a.st.fullscreen.buttonFS && (a._v5 = c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs", function() {
                a.isFullscreen ? a.exitFullscreen() : a.enterFullscreen()
            }))
        },
        enterFullscreen: function(a) {
            var b = this;
            if (b._u5)
                if (a)
                    b._u5.requestFullScreen(c("html")[0]);
                else {
                    b._b.on(b._u5.fullScreenEventName, function(a) {
                        b._u5.isFullScreen() ? b.enterFullscreen(!0) : b.exitFullscreen(!0)
                    });
                    b._u5.requestFullScreen(c("html")[0]);
                    return
                }
            if (!b._w5) {
                b._w5 = !0;
                b._b.on("keyup" + b.ns + "fullscreen", function(a) {
                    27 === a.keyCode && b.exitFullscreen()
                });
                b._t5 && b._b2();
                a = c(window);
                b._x5 = a.scrollTop();
                b._y5 = a.scrollLeft();
                b._z5 = c("html").attr("style");
                b._a6 = c("body").attr("style");
                b._b6 = b.slider.attr("style");
                c("body, html").css({
                    overflow: "hidden",
                    height: "100%",
                    width: "100%",
                    margin: "0",
                    padding: "0"
                });
                b.slider.addClass("rsFullscreen");
                var d;
                for (d = 0; d < b.numSlides; d++)
                    a = b.slides[d],
                    a.isRendered = !1,
                    a.bigImage && (a.isBig = !0, a.isMedLoaded = a.isLoaded, a.isMedLoading = a.isLoading, a.medImage = a.image, a.medIW = a.iW, a.medIH = a.iH, a.slideId = -99, a.bigImage !== a.medImage && (a.sizeType = "big"), a.isLoaded = a.isBigLoaded, a.isLoading = !1, a.image = a.bigImage, a.images[0] = a.bigImage, a.iW = a.bigIW, a.iH = a.bigIH, a.isAppended = a.contentAdded =
                    !1, b._c6(a));
                b.isFullscreen = !0;
                b._w5 = !1;
                b.updateSliderSize();
                b.ev.trigger("rsEnterFullscreen")
            }
        },
        exitFullscreen: function(a) {
            var b = this;
            if (b._u5) {
                if (!a) {
                    b._u5.cancelFullScreen(c("html")[0]);
                    return
                }
                b._b.off(b._u5.fullScreenEventName)
            }
            if (!b._w5) {
                b._w5 = !0;
                b._b.off("keyup" + b.ns + "fullscreen");
                b._t5 && b._b.off("keydown" + b.ns);
                c("html").attr("style", b._z5 || "");
                c("body").attr("style", b._a6 || "");
                var d;
                for (d = 0; d < b.numSlides; d++)
                    a = b.slides[d],
                    a.isRendered = !1,
                    a.bigImage && (a.isBig = !1, a.slideId = -99, a.isBigLoaded =
                    a.isLoaded, a.isBigLoading = a.isLoading, a.bigImage = a.image, a.bigIW = a.iW, a.bigIH = a.iH, a.isLoaded = a.isMedLoaded, a.isLoading = !1, a.image = a.medImage, a.images[0] = a.medImage, a.iW = a.medIW, a.iH = a.medIH, a.isAppended = a.contentAdded = !1, b._c6(a, !0), a.bigImage !== a.medImage && (a.sizeType = "med"));
                b.isFullscreen = !1;
                a = c(window);
                a.scrollTop(b._x5);
                a.scrollLeft(b._y5);
                b._w5 = !1;
                b.slider.removeClass("rsFullscreen");
                b.updateSliderSize();
                setTimeout(function() {
                    b.updateSliderSize()
                }, 1);
                b.ev.trigger("rsExitFullscreen")
            }
        },
        _c6: function(a,
        b) {
            var d = a.isLoaded || a.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + a.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + a.image + '"></a>';
            a.content.hasClass("rsImg") ? a.content = c(d) : a.content.find(".rsImg").eq(0).replaceWith(d);
            a.isLoaded || a.isLoading || !a.holder || a.holder.html(a.content)
        }
    });
    c.rsModules.fullscreen = c.rsProto._q5
})(jQuery);
// jquery.rs.autoplay v1.0.5
(function(b) {
    b.extend(b.rsProto, {
        _x4: function() {
            var a = this,
                d;
            a._y4 = {
                enabled: !1,
                stopAtAction: !0,
                pauseOnHover: !0,
                delay: 2E3
            };
            !a.st.autoPlay && a.st.autoplay && (a.st.autoPlay = a.st.autoplay);
            a.st.autoPlay = b.extend({}, a._y4, a.st.autoPlay);
            a.st.autoPlay.enabled && (a.ev.on("rsBeforeParseNode", function(a, c, f) {
                c = b(c);
                if (d = c.attr("data-rsDelay"))
                    f.customDelay = parseInt(d, 10)
            }), a.ev.one("rsAfterInit", function() {
                a._z4()
            }), a.ev.on("rsBeforeDestroy", function() {
                a.stopAutoPlay();
                a.slider.off("mouseenter mouseleave");
                b(window).off("blur" +
                a.ns + " focus" + a.ns)
            }))
        },
        _z4: function() {
            var a = this;
            a.startAutoPlay();
            a.ev.on("rsAfterContentSet", function(b, e) {
                a._l2 || a._r2 || !a._a5 || e !== a.currSlide || a._b5()
            });
            a.ev.on("rsDragRelease", function() {
                a._a5 && a._c5 && (a._c5 = !1, a._b5())
            });
            a.ev.on("rsAfterSlideChange", function() {
                a._a5 && a._c5 && (a._c5 = !1, a.currSlide.isLoaded && a._b5())
            });
            a.ev.on("rsDragStart", function() {
                a._a5 && (a.st.autoPlay.stopAtAction ? a.stopAutoPlay() : (a._c5 = !0, a._d5()))
            });
            a.ev.on("rsBeforeMove", function(b, e, c) {
                a._a5 && (c && a.st.autoPlay.stopAtAction ?
                a.stopAutoPlay() : (a._c5 = !0, a._d5()))
            });
            a._e5 = !1;
            a.ev.on("rsVideoStop", function() {
                a._a5 && (a._e5 = !1, a._b5())
            });
            a.ev.on("rsVideoPlay", function() {
                a._a5 && (a._c5 = !1, a._d5(), a._e5 = !0)
            });
            b(window).on("blur" + a.ns, function() {
                a._a5 && (a._c5 = !0, a._d5())
            }).on("focus" + a.ns, function() {
                a._a5 && a._c5 && (a._c5 = !1, a._b5())
            });
            a.st.autoPlay.pauseOnHover && (a._f5 = !1, a.slider.hover(function() {
                a._a5 && (a._c5 = !1, a._d5(), a._f5 = !0)
            }, function() {
                a._a5 && (a._f5 = !1, a._b5())
            }))
        },
        toggleAutoPlay: function() {
            this._a5 ? this.stopAutoPlay() :
            this.startAutoPlay()
        },
        startAutoPlay: function() {
            this._a5 = !0;
            this.currSlide.isLoaded && this._b5()
        },
        stopAutoPlay: function() {
            this._e5 = this._f5 = this._c5 = this._a5 = !1;
            this._d5()
        },
        _b5: function() {
            var a = this;
            a._f5 || a._e5 || (a._g5 = !0, a._h5 && clearTimeout(a._h5), a._h5 = setTimeout(function() {
                var b;
                a._z || a.st.loopRewind || (b = !0, a.st.loopRewind = !0);
                a.next(!0);
                b && (a.st.loopRewind = !1)
            }, a.currSlide.customDelay ? a.currSlide.customDelay : a.st.autoPlay.delay))
        },
        _d5: function() {
            this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5),
            this._h5 = null))
        }
    });
    b.rsModules.autoplay = b.rsProto._x4
})(jQuery);
// jquery.rs.video v1.1.3
(function(f) {
    f.extend(f.rsProto, {
        _z6: function() {
            var a = this;
            a._a7 = {
                autoHideArrows: !0,
                autoHideControlNav: !1,
                autoHideBlocks: !1,
                autoHideCaption: !1,
                disableCSS3inFF: !0,
                youTubeCode: '<iframe src="http://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
                vimeoCode: '<iframe src="http://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            };
            a.st.video = f.extend({}, a._a7,
            a.st.video);
            a.ev.on("rsBeforeSizeSet", function() {
                a._b7 && setTimeout(function() {
                    var b = a._r1,
                        b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer");
                    a._c7 && a._c7.css({
                        width: b.width(),
                        height: b.height()
                    })
                }, 32)
            });
            var d = a._a.mozilla;
            a.ev.on("rsAfterParseNode", function(b, c, e) {
                b = f(c);
                if (e.videoURL) {
                    a.st.video.disableCSS3inFF && d && (a._e = a._f = !1);
                    c = f('<div class="rsVideoContainer"></div>');
                    var g = f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
                    b.hasClass("rsImg") ?
                    e.content = c.append(b).append(g) : e.content.find(".rsImg").wrap(c).after(g)
                }
            });
            a.ev.on("rsAfterSlideChange", function() {
                a.stopVideo()
            })
        },
        toggleVideo: function() {
            return this._b7 ? this.stopVideo() : this.playVideo()
        },
        playVideo: function() {
            var a = this;
            if (!a._b7) {
                var d = a.currSlide;
                if (!d.videoURL)
                    return !1;
                a._d7 = d;
                var b = a._e7 = d.content,
                    d = d.videoURL,
                    c,
                    e;
                d.match(/youtu\.be/i) || d.match(/youtube\.com/i) ? (e = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (e = d.match(e)) && 11 == e[7].length &&
                (c = e[7]), void 0 !== c && (a._c7 = a.st.video.youTubeCode.replace("%id%", c))) : d.match(/vimeo\.com/i) && (e = /(www\.)?vimeo.com\/(\d+)($|\/)/, (e = d.match(e)) && (c = e[2]), void 0 !== c && (a._c7 = a.st.video.vimeoCode.replace("%id%", c)));
                a.videoObj = f(a._c7);
                a.ev.trigger("rsOnCreateVideoElement", [d]);
                a.videoObj.length && (a._c7 = f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), a._c7.find(".rsPreloader").after(a.videoObj), b = b.hasClass("rsVideoContainer") ?
                b : b.find(".rsVideoContainer"), a._c7.css({
                    width: b.width(),
                    height: b.height()
                }).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function(b) {
                    a.stopVideo();
                    b.preventDefault();
                    b.stopPropagation();
                    return !1
                }), b.append(a._c7), a.isIPAD && b.addClass("rsIOSVideo"), a._f7(!1), setTimeout(function() {
                    a._c7.addClass("rsVideoActive")
                }, 10), a.ev.trigger("rsVideoPlay"), a._b7 = !0);
                return !0
            }
            return !1
        },
        stopVideo: function() {
            var a = this;
            return a._b7 ? (a.isIPAD && a.slider.find(".rsCloseVideoBtn").remove(), a._f7(!0), setTimeout(function() {
                a.ev.trigger("rsOnDestroyVideoElement",
                [a.videoObj]);
                var d = a._c7.find("iframe");
                if (d.length)
                    try {
                        d.attr("src", "")
                    } catch (b) {}
                a._c7.remove();
                a._c7 = null
            }, 16), a.ev.trigger("rsVideoStop"), a._b7 = !1, !0) : !1
        },
        _f7: function(a, d) {
            var b = [],
                c = this.st.video;
            c.autoHideArrows && (this._c2 && (b.push(this._c2, this._d2), this._e2 = !a), this._v5 && b.push(this._v5));
            c.autoHideControlNav && this._k5 && b.push(this._k5);
            c.autoHideBlocks && this._d7.animBlocks && b.push(this._d7.animBlocks);
            c.autoHideCaption && this.globalCaption && b.push(this.globalCaption);
            this.slider[a ? "removeClass" :
            "addClass"]("rsVideoPlaying");
            if (b.length)
                for (c = 0; c < b.length; c++)
                    a ? b[c].removeClass("rsHidden") : b[c].addClass("rsHidden")
        }
    });
    f.rsModules.video = f.rsProto._z6
})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function(l) {
    l.extend(l.rsProto, {
        _p4: function() {
            function m() {
                var g = a.currSlide;
                if (a.currSlide && a.currSlide.isLoaded && a._t4 !== g) {
                    if (0 < a._s4.length) {
                        for (b = 0; b < a._s4.length; b++)
                            clearTimeout(a._s4[b]);
                        a._s4 = []
                    }
                    if (0 < a._r4.length) {
                        var f;
                        for (b = 0; b < a._r4.length; b++)
                            if (f = a._r4[b])
                                a._e ? (f.block.css(a._g + a._u1, "0s"), f.block.css(f.css)) : f.block.stop(!0).css(f.css),
                                a._t4 = null,
                                g.animBlocksDisplayed = !1;
                        a._r4 = []
                    }
                    g.animBlocks && (g.animBlocksDisplayed = !0, a._t4 = g, a._u4(g.animBlocks))
                }
            }
            var a = this,
                b;
            a._q4 = {
                fadeEffect: !0,
                moveEffect: "top",
                moveOffset: 20,
                speed: 400,
                easing: "easeOutSine",
                delay: 200
            };
            a.st.block = l.extend({}, a._q4, a.st.block);
            a._r4 = [];
            a._s4 = [];
            a.ev.on("rsAfterInit", function() {
                m()
            });
            a.ev.on("rsBeforeParseNode", function(a, b, d) {
                b = l(b);
                d.animBlocks = b.find(".rsABlock").css("display", "none");
                d.animBlocks.length || (b.hasClass("rsABlock") ? d.animBlocks = b.css("display", "none") : d.animBlocks = !1)
            });
            a.ev.on("rsAfterContentSet", function(b, f) {
                f.id === a.slides[a.currSlideId].id && setTimeout(function() {
                    m()
                }, a.st.fadeinLoadedSlide ?
                300 : 0)
            });
            a.ev.on("rsAfterSlideChange", function() {
                m()
            })
        },
        _v4: function(l, a) {
            setTimeout(function() {
                l.css(a)
            }, 6)
        },
        _u4: function(m) {
            var a = this,
                b,
                g,
                f,
                d,
                h,
                e,
                n;
            a._s4 = [];
            m.each(function(m) {
                b = l(this);
                g = {};
                f = {};
                d = null;
                var c = b.attr("data-move-offset"),
                    c = c ? parseInt(c, 10) : a.st.block.moveOffset;
                if (0 < c && ((e = b.data("move-effect")) ? (e = e.toLowerCase(), "none" === e ? e = !1 : "left" !== e && "top" !== e && "bottom" !== e && "right" !== e && (e = a.st.block.moveEffect, "none" === e && (e = !1))) : e = a.st.block.moveEffect, e && "none" !== e)) {
                    var p;
                    p = "right" ===
                    e || "left" === e ? !0 : !1;
                    var k;
                    n = !1;
                    a._e ? (k = 0, h = a._x1) : (p ? isNaN(parseInt(b.css("right"), 10)) ? h = "left" : (h = "right", n = !0) : isNaN(parseInt(b.css("bottom"), 10)) ? h = "top" : (h = "bottom", n = !0), h = "margin-" + h, n && (c = -c), a._e ? k = parseInt(b.css(h), 10) : (k = b.data("rs-start-move-prop"), void 0 === k && (k = parseInt(b.css(h), 10), isNaN(k) && (k = 0), b.data("rs-start-move-prop", k))));
                    f[h] = a._m4("top" === e || "left" === e ? k - c : k + c, p);
                    g[h] = a._m4(k, p)
                }
                c = b.attr("data-fade-effect");
                if (!c)
                    c = a.st.block.fadeEffect;
                else if ("none" === c.toLowerCase() ||
                "false" === c.toLowerCase())
                    c = !1;
                c && (f.opacity = 0, g.opacity = 1);
                if (c || e)
                    d = {},
                    d.hasFade = Boolean(c),
                    Boolean(e) && (d.moveProp = h, d.hasMove = !0),
                    d.speed = b.data("speed"),
                    isNaN(d.speed) && (d.speed = a.st.block.speed),
                    d.easing = b.data("easing"),
                    d.easing || (d.easing = a.st.block.easing),
                    d.css3Easing = l.rsCSS3Easing[d.easing],
                    d.delay = b.data("delay"),
                    isNaN(d.delay) && (d.delay = a.st.block.delay * m);
                c = {};
                a._e && (c[a._g + a._u1] = "0ms");
                c.moveProp = g.moveProp;
                c.opacity = g.opacity;
                c.display = "none";
                a._r4.push({
                    block: b,
                    css: c
                });
                a._v4(b,
                f);
                a._s4.push(setTimeout(function(b, d, c, e) {
                    return function() {
                        b.css("display", "block");
                        if (c) {
                            var g = {};
                            if (a._e) {
                                var f = "";
                                c.hasMove && (f += c.moveProp);
                                c.hasFade && (c.hasMove && (f += ", "), f += "opacity");
                                g[a._g + a._t1] = f;
                                g[a._g + a._u1] = c.speed + "ms";
                                g[a._g + a._v1] = c.css3Easing;
                                b.css(g);
                                setTimeout(function() {
                                    b.css(d)
                                }, 24)
                            } else
                                setTimeout(function() {
                                    b.animate(d, c.speed, c.easing)
                                }, 16)
                        }
                        delete a._s4[e]
                    }
                }(b, g, d, m), 6 >= d.delay ? 12 : d.delay))
            })
        }
    });
    l.rsModules.animatedBlocks = l.rsProto._p4
})(jQuery);
// jquery.rs.auto-height v1.0.3
(function(b) {
    b.extend(b.rsProto, {
        _w4: function() {
            var a = this;
            if (a.st.autoHeight) {
                var b,
                    c,
                    e,
                    f = !0,
                    d = function(d) {
                        e = a.slides[a.currSlideId];
                        (b = e.holder) && (c = b.height()) && void 0 !== c && c > (a.st.minAutoHeight || 30) && (a._c4 = c, a._e || !d ? a._e1.css("height", c) : a._e1.stop(!0, !0).animate({
                            height: c
                        }, a.st.transitionSpeed), a.ev.trigger("rsAutoHeightChange", c), f && (a._e && setTimeout(function() {
                            a._e1.css(a._g + "transition", "height " + a.st.transitionSpeed + "ms ease-in-out")
                        }, 16), f = !1))
                    };
                a.ev.on("rsMaybeSizeReady.rsAutoHeight",
                function(a, b) {
                    e === b && d()
                });
                a.ev.on("rsAfterContentSet.rsAutoHeight", function(a, b) {
                    e === b && d()
                });
                a.slider.addClass("rsAutoHeight");
                a.ev.one("rsAfterInit", function() {
                    setTimeout(function() {
                        d(!1);
                        setTimeout(function() {
                            a.slider.append('<div style="clear:both; float: none;"></div>')
                        }, 16)
                    }, 16)
                });
                a.ev.on("rsBeforeAnimStart", function() {
                    d(!0)
                });
                a.ev.on("rsBeforeSizeSet", function() {
                    setTimeout(function() {
                        d(!1)
                    }, 16)
                })
            }
        }
    });
    b.rsModules.autoHeight = b.rsProto._w4
})(jQuery);
// jquery.rs.global-caption v1.0
(function(b) {
    b.extend(b.rsProto, {
        _d6: function() {
            var a = this;
            a.st.globalCaption && (a.ev.on("rsAfterInit", function() {
                a.globalCaption = b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside ? a._e1 : a.slider);
                a.globalCaption.html(a.currSlide.caption)
            }), a.ev.on("rsBeforeAnimStart", function() {
                a.globalCaption.html(a.currSlide.caption)
            }))
        }
    });
    b.rsModules.globalCaption = b.rsProto._d6
})(jQuery);
// jquery.rs.active-class v1.0.1
(function(c) {
    c.rsProto._o4 = function() {
        var b,
            a = this;
        if (a.st.addActiveClass)
            a.ev.on("rsOnUpdateNav", function() {
                b && clearTimeout(b);
                b = setTimeout(function() {
                    a._g4 && a._g4.removeClass("rsActiveSlide");
                    a._r1 && a._r1.addClass("rsActiveSlide");
                    b = null
                }, 50)
            })
    };
    c.rsModules.activeClass = c.rsProto._o4
})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function(d) {
    d.extend(d.rsProto, {
        _o5: function() {
            var a = this,
                l,
                g,
                f;
            a._p5 = {
                enabled: !1,
                change: !1,
                prefix: ""
            };
            a.st.deeplinking = d.extend({}, a._p5, a.st.deeplinking);
            if (a.st.deeplinking.enabled) {
                var k = a.st.deeplinking.change,
                    c = a.st.deeplinking.prefix,
                    e = "#" + c,
                    h = function() {
                        var b = window.location.hash;
                        return b && 0 < b.indexOf(c) && (b = parseInt(b.substring(e.length), 10), 0 <= b) ? b - 1 : -1
                    },
                    m = h();
                -1 !== m && (a.st.startSlideId = m);
                k && (d(window).on("hashchange" + a.ns, function(b) {
                    l || (b = h(), 0 > b || (b > a.numSlides - 1 && (b = a.numSlides - 1),
                    a.goTo(b)))
                }), a.ev.on("rsBeforeAnimStart", function() {
                    g && clearTimeout(g);
                    f && clearTimeout(f)
                }), a.ev.on("rsAfterSlideChange", function() {
                    g && clearTimeout(g);
                    f && clearTimeout(f);
                    f = setTimeout(function() {
                        l = !0;
                        window.location.replace(("" + window.location).split("#")[0] + e + (a.currSlideId + 1));
                        g = setTimeout(function() {
                            l = !1;
                            g = null
                        }, 60)
                    }, 400)
                }));
                a.ev.on("rsBeforeDestroy", function() {
                    g = f = null;
                    k && d(window).off("hashchange" + a.ns)
                })
            }
        }
    });
    d.rsModules.deeplinking = d.rsProto._o5
})(jQuery);
(function(d, a, l) {
    function g(b) {
        b = b || location.href;
        return "#" + b.replace(/^[^#]*#?(.*)$/, "$1")
    }
    "$:nomunge";
    var f = "hashchange",
        k = document,
        c,
        e = d.event.special,
        h = k.documentMode,
        m = "on" + f in a && (h === l || 7 < h);
    d.fn[f] = function(b) {
        return b ? this.bind(f, b) : this.trigger(f)
    };
    d.fn[f].delay = 50;
    e[f] = d.extend(e[f], {
        setup: function() {
            if (m)
                return !1;
            d(c.start)
        },
        teardown: function() {
            if (m)
                return !1;
            d(c.stop)
        }
    });
    c = function() {
        function b() {
            var c = g(),
                n = r(h);
            c !== h ? (p(h = c, n), d(a).trigger(f)) : n !== h && (location.href = location.href.replace(/#.*/,
            "") + n);
            e = setTimeout(b, d.fn[f].delay)
        }
        var c = {},
            e,
            h = g(),
            q = function(b) {
                return b
            },
            p = q,
            r = q;
        c.start = function() {
            e || b()
        };
        c.stop = function() {
            e && clearTimeout(e);
            e = l
        };
        a.attachEvent && !a.addEventListener && !m && function() {
            var a,
                e;
            c.start = function() {
                a || (e = (e = d.fn[f].src) && e + g(), a = d('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    e || p(g());
                    b()
                }).attr("src", e || "javascript:0").insertAfter("body")[0].contentWindow, k.onpropertychange = function() {
                    try {
                        "title" === event.propertyName && (a.document.title =
                        k.title)
                    } catch (b) {}
                })
            };
            c.stop = q;
            r = function() {
                return g(a.location.href)
            };
            p = function(b, e) {
                var c = a.document,
                    g = d.fn[f].domain;
                b !== e && (c.title = k.title, c.open(), g && c.write('<script>document.domain="' + g + '"\x3c/script>'), c.close(), a.location.hash = b)
            }
        }();
        return c
    }()
})(jQuery, this);
// jquery.rs.visible-nearby v1.0.2
(function(d) {
    d.rsProto._g7 = function() {
        var a = this;
        a.st.visibleNearby && a.st.visibleNearby.enabled && (a._h7 = {
            enabled: !0,
            centerArea: 0.6,
            center: !0,
            breakpoint: 0,
            breakpointCenterArea: 0.8,
            hiddenOverflow: !0,
            navigateByCenterClick: !1
        }, a.st.visibleNearby = d.extend({}, a._h7, a.st.visibleNearby), a.ev.one("rsAfterPropsSetup", function() {
            a._i7 = a._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();
            a.st.visibleNearby.hiddenOverflow || a._i7.css("overflow", "visible");
            a._o1 = a.st.controlsInside ?
            a._i7 : a.slider
        }), a.ev.on("rsAfterSizePropSet", function() {
            var b,
                c = a.st.visibleNearby;
            b = c.breakpoint && a.width < c.breakpoint ? c.breakpointCenterArea : c.centerArea;
            a._h ? (a._b4 *= b, a._i7.css({
                height: a._c4,
                width: a._b4 / b
            }), a._d = a._b4 * (1 - b) / 2 / b) : (a._c4 *= b, a._i7.css({
                height: a._c4 / b,
                width: a._b4
            }), a._d = a._c4 * (1 - b) / 2 / b);
            c.navigateByCenterClick || (a._q = a._h ? a._b4 : a._c4);
            c.center && a._e1.css("margin-" + (a._h ? "left" : "top"), a._d)
        }))
    };
    d.rsModules.visibleNearby = d.rsProto._g7
})(jQuery);

/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

(function(t) {
    function e() {}
    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }
        function n(e, i) {
            t.fn[e] = function(n) {
                if ("string" == typeof n) {
                    for (var s = o.call(arguments, 1), a = 0, u = this.length; u > a; a++) {
                        var p = this[a],
                            h = t.data(p, e);
                        if (h)
                            if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                                var f = h[n].apply(h, s);
                                if (void 0 !== f)
                                    return f
                            } else
                                r("no such method '" + n + "' for " + e + " instance");
                        else
                            r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + n + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var o = t.data(this, e);
                    o ? (o.option(n), o._init()) : (o = new i(this, n), t.data(this, e, o))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e),
                n(t, e)
            }, t.bridget
        }
    }
    var o = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i(t.jQuery)
})(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        o = function() {};
    i.addEventListener ? o = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (o = function(t, i, o) {
        t[i + o] = o.handleEvent ? function() {
            var i = e(t);
            o.handleEvent.call(o, i)
        } : function() {
            var i = e(t);
            o.call(t, i)
        },
        t.attachEvent("on" + i, t[i + o])
    });
    var n = function() {};
    i.removeEventListener ? n = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (n = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    });
    var r = {
        bind: o,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(this),
function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : r.push(t))
    }
    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== n.readyState;
        if (!e.isReady && !i) {
            e.isReady = !0;
            for (var o = 0, s = r.length; s > o; o++) {
                var a = r[o];
                a()
            }
        }
    }
    function o(o) {
        return o.bind(n, "DOMContentLoaded", i), o.bind(n, "readystatechange", i), o.bind(t, "load", i), e
    }
    var n = t.document,
        r = [];
    e.isReady = !1,
    "function" == typeof define && define.amd ? (e.isReady = "function" == typeof requirejs, define("doc-ready/doc-ready", ["eventie/eventie"], o)) : t.docReady = o(t.eventie)
}(this),
function() {
    function t() {}
    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e)
                return i;
        return -1
    }
    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var o = t.prototype,
        n = this,
        r = n.EventEmitter;
    o.getListeners = function(t) {
        var e,
            i,
            o = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in o)
                o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i])
        } else
            e = o[t] || (o[t] = []);
        return e
    },
    o.flattenListeners = function(t) {
        var e,
            i = [];
        for (e = 0; t.length > e; e += 1)
            i.push(t[e].listener);
        return i
    },
    o.getListenersAsObject = function(t) {
        var e,
            i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    },
    o.addListener = function(t, i) {
        var o,
            n = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (o in n)
            n.hasOwnProperty(o) && -1 === e(n[o], i) && n[o].push(r ? i : {
                listener: i,
                once: !1
            });
        return this
    },
    o.on = i("addListener"),
    o.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    },
    o.once = i("addOnceListener"),
    o.defineEvent = function(t) {
        return this.getListeners(t), this
    },
    o.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1)
            this.defineEvent(t[e]);
        return this
    },
    o.removeListener = function(t, i) {
        var o,
            n,
            r = this.getListenersAsObject(t);
        for (n in r)
            r.hasOwnProperty(n) && (o = e(r[n], i), -1 !== o && r[n].splice(o, 1));
        return this
    },
    o.off = i("removeListener"),
    o.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    },
    o.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    },
    o.manipulateListeners = function(t, e, i) {
        var o,
            n,
            r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (o = i.length; o--;)
                r.call(this, e, i[o]);
        else
            for (o in e)
                e.hasOwnProperty(o) && (n = e[o]) && ("function" == typeof n ? r.call(this, o, n) : s.call(this, o, n));
        return this
    },
    o.removeEvent = function(t) {
        var e,
            i = typeof t,
            o = this._getEvents();
        if ("string" === i)
            delete o[t];
        else if (t instanceof RegExp)
            for (e in o)
                o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else
            delete this._events;
        return this
    },
    o.removeAllListeners = i("removeEvent"),
    o.emitEvent = function(t, e) {
        var i,
            o,
            n,
            r,
            s = this.getListenersAsObject(t);
        for (n in s)
            if (s.hasOwnProperty(n))
                for (o = s[n].length; o--;)
                    i = s[n][o],
                    i.once === !0 && this.removeListener(t, i.listener),
                    r = i.listener.apply(this, e || []),
                    r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    },
    o.trigger = i("emitEvent"),
    o.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    },
    o.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    },
    o._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    },
    o._getEvents = function() {
        return this._events || (this._events = {})
    },
    t.noConflict = function() {
        return n.EventEmitter = r, t
    },
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}.call(this),
function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof o[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, n = 0, r = i.length; r > n; n++)
                if (e = i[n] + t, "string" == typeof o[e])
                    return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
        o = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function(t) {
    function e(t) {
        var e = parseFloat(t),
            i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function i() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, i = s.length; i > e; e++) {
            var o = s[e];
            t[o] = 0
        }
        return t
    }
    function o(t) {
        function o(t) {
            if ("string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var o = r(t);
                if ("none" === o.display)
                    return i();
                var n = {};
                n.width = t.offsetWidth,
                n.height = t.offsetHeight;
                for (var h = n.isBorderBox = !(!p || !o[p] || "border-box" !== o[p]), f = 0, c = s.length; c > f; f++) {
                    var d = s[f],
                        l = o[d];
                    l = a(t, l);
                    var y = parseFloat(l);
                    n[d] = isNaN(y) ? 0 : y
                }
                var m = n.paddingLeft + n.paddingRight,
                    g = n.paddingTop + n.paddingBottom,
                    v = n.marginLeft + n.marginRight,
                    _ = n.marginTop + n.marginBottom,
                    I = n.borderLeftWidth + n.borderRightWidth,
                    L = n.borderTopWidth + n.borderBottomWidth,
                    z = h && u,
                    S = e(o.width);
                S !== !1 && (n.width = S + (z ? 0 : m + I));
                var b = e(o.height);
                return b !== !1 && (n.height = b + (z ? 0 : g + L)), n.innerWidth = n.width - (m + I), n.innerHeight = n.height - (g + L), n.outerWidth = n.width + v, n.outerHeight = n.height + _, n
            }
        }
        function a(t, e) {
            if (n || -1 === e.indexOf("%"))
                return e;
            var i = t.style,
                o = i.left,
                r = t.runtimeStyle,
                s = r && r.left;
            return s && (r.left = t.currentStyle.left), i.left = e, e = i.pixelLeft, i.left = o, s && (r.left = s), e
        }
        var u,
            p = t("boxSizing");
        return function() {
            if (p) {
                var t = document.createElement("div");
                t.style.width = "200px",
                t.style.padding = "1px 2px 3px 4px",
                t.style.borderStyle = "solid",
                t.style.borderWidth = "1px 2px 3px 4px",
                t.style[p] = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(t);
                var o = r(t);
                u = 200 === e(o.width),
                i.removeChild(t)
            }
        }(), o
    }
    var n = t.getComputedStyle,
        r = n ? function(t) {
            return n(t, null)
        } : function(t) {
            return t.currentStyle
        },
        s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window),
function(t, e) {
    function i(t, e) {
        return t[a](e)
    }
    function o(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function n(t, e) {
        o(t);
        for (var i = t.parentNode.querySelectorAll(e), n = 0, r = i.length; r > n; n++)
            if (i[n] === t)
                return !0;
        return !1
    }
    function r(t, e) {
        return o(t), i(t, e)
    }
    var s,
        a = function() {
            if (e.matchesSelector)
                return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0, o = t.length; o > i; i++) {
                var n = t[i],
                    r = n + "MatchesSelector";
                if (e[r])
                    return r
            }
        }();
    if (a) {
        var u = document.createElement("div"),
            p = i(u, "div");
        s = p ? i : r
    } else
        s = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return s
    }) : window.matchesSelector = s
}(this, Element.prototype),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        for (var e in t)
            return !1;
        return e = null, !0
    }
    function o(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "-" + t.toLowerCase()
        })
    }
    function n(t, n, r) {
        function a(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var u = r("transition"),
            p = r("transform"),
            h = u && p,
            f = !!r("perspective"),
            c = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[u],
            d = ["transform", "transition", "transitionDuration", "transitionProperty"],
            l = function() {
                for (var t = {}, e = 0, i = d.length; i > e; e++) {
                    var o = d[e],
                        n = r(o);
                    n && n !== o && (t[o] = n)
                }
                return t
            }();
        e(a.prototype, t.prototype),
        a.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            },
            this.css({
                position: "absolute"
            })
        },
        a.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        },
        a.prototype.getSize = function() {
            this.size = n(this.element)
        },
        a.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var o = l[i] || i;
                e[o] = t[i]
            }
        },
        a.prototype.getPosition = function() {
            var t = s(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                o = e.isOriginTop,
                n = parseInt(t[i ? "left" : "right"], 10),
                r = parseInt(t[o ? "top" : "bottom"], 10);
            n = isNaN(n) ? 0 : n,
            r = isNaN(r) ? 0 : r;
            var a = this.layout.size;
            n -= i ? a.paddingLeft : a.paddingRight,
            r -= o ? a.paddingTop : a.paddingBottom,
            this.position.x = n,
            this.position.y = r
        },
        a.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {};
            e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""),
            e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""),
            this.css(i),
            this.emitEvent("layout", [this])
        };
        var y = f ? function(t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)"
        } : function(t, e) {
            return "translate(" + t + "px, " + e + "px)"
        };
        a.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                o = this.position.y,
                n = parseInt(t, 10),
                r = parseInt(e, 10),
                s = n === this.position.x && r === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning)
                return this.layoutPosition(), void 0;
            var a = t - i,
                u = e - o,
                p = {},
                h = this.layout.options;
            a = h.isOriginLeft ? a : -a,
            u = h.isOriginTop ? u : -u,
            p.transform = y(a, u),
            this.transition({
                to: p,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        },
        a.prototype.goTo = function(t, e) {
            this.setPosition(t, e),
            this.layoutPosition()
        },
        a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo,
        a.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10),
            this.position.y = parseInt(e, 10)
        },
        a.prototype._nonTransition = function(t) {
            this.css(t.to),
            t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd)
                t.onTransitionEnd[e].call(this)
        },
        a.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration))
                return this._nonTransition(t), void 0;
            var e = this._transn;
            for (var i in t.onTransitionEnd)
                e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to)
                e.ingProperties[i] = !0,
                t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var o = this.element.offsetHeight;
                o = null
            }
            this.enableTransition(t.to),
            this.css(t.to),
            this.isTransitioning = !0
        };
        var m = p && o(p) + ",opacity";
        a.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: m,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(c, this, !1))
        },
        a.prototype.transition = a.prototype[u ? "_transition" : "_nonTransition"],
        a.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        },
        a.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var g = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        a.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    o = g[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                    var n = e.onEnd[o];
                    n.call(this),
                    delete e.onEnd[o]
                }
                this.emitEvent("transitionEnd", [this])
            }
        },
        a.prototype.disableTransition = function() {
            this.removeTransitionStyles(),
            this.element.removeEventListener(c, this, !1),
            this.isTransitioning = !1
        },
        a.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t)
                e[i] = "";
            this.css(e)
        };
        var v = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return a.prototype.removeTransitionStyles = function() {
            this.css(v)
        }, a.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element),
            this.emitEvent("remove", [this])
        }, a.prototype.remove = function() {
            if (!u || !parseFloat(this.layout.options.transitionDuration))
                return this.removeElem(), void 0;
            var t = this;
            this.on("transitionEnd", function() {
                return t.removeElem(), !0
            }),
            this.hide()
        }, a.prototype.reveal = function() {
            delete this.isHidden,
            this.css({
                display: ""
            });
            var t = this.layout.options;
            this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0
            })
        }, a.prototype.hide = function() {
            this.isHidden = !0,
            this.css({
                display: ""
            });
            var t = this.layout.options;
            this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: {
                    opacity: function() {
                        this.isHidden && this.css({
                            display: "none"
                        })
                    }
                }
            })
        }, a.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, a
    }
    var r = t.getComputedStyle,
        s = r ? function(t) {
            return r(t, null)
        } : function(t) {
            return t.currentStyle
        };
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], n) : (t.Outlayer = {}, t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        return "[object Array]" === f.call(t)
    }
    function o(t) {
        var e = [];
        if (i(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var o = 0, n = t.length; n > o; o++)
                e.push(t[o]);
        else
            e.push(t);
        return e
    }
    function n(t, e) {
        var i = d(e, t);
        -1 !== i && e.splice(i, 1)
    }
    function r(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    function s(i, s, f, d, l, y) {
        function m(t, i) {
            if ("string" == typeof t && (t = a.querySelector(t)), !t || !c(t))
                return u && u.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
            this.element = t,
            this.options = e({}, this.constructor.defaults),
            this.option(i);
            var o = ++g;
            this.element.outlayerGUID = o,
            v[o] = this,
            this._create(),
            this.options.isInitLayout && this.layout()
        }
        var g = 0,
            v = {};
        return m.namespace = "outlayer", m.Item = y, m.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e(m.prototype, f.prototype), m.prototype.option = function(t) {
            e(this.options, t)
        }, m.prototype._create = function() {
            this.reloadItems(),
            this.stamps = [],
            this.stamp(this.options.stamp),
            e(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize()
        }, m.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, m.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0, r = e.length; r > n; n++) {
                var s = e[n],
                    a = new i(s, this);
                o.push(a)
            }
            return o
        }, m.prototype._filterFindItemElements = function(t) {
            t = o(t);
            for (var e = this.options.itemSelector, i = [], n = 0, r = t.length; r > n; n++) {
                var s = t[n];
                if (c(s))
                    if (e) {
                        l(s, e) && i.push(s);
                        for (var a = s.querySelectorAll(e), u = 0, p = a.length; p > u; u++)
                            i.push(a[u])
                    } else
                        i.push(s)
            }
            return i
        }, m.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++)
                t.push(this.items[e].element);
            return t
        }, m.prototype.layout = function() {
            this._resetLayout(),
            this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t),
            this._isLayoutInited = !0
        }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
            this.getSize()
        }, m.prototype.getSize = function() {
            this.size = d(this.element)
        }, m.prototype._getMeasurement = function(t, e) {
            var i,
                o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : c(o) && (i = o), this[t] = i ? d(i)[e] : o) : this[t] = 0
        }, m.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t),
            this._layoutItems(t, e),
            this._postLayout()
        }, m.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
                var n = t[i];
                n.isIgnored || e.push(n)
            }
            return e
        }, m.prototype._layoutItems = function(t, e) {
            function i() {
                o.emitEvent("layoutComplete", [o, t])
            }
            var o = this;
            if (!t || !t.length)
                return i(), void 0;
            this._itemsOn(t, "layout", i);
            for (var n = [], r = 0, s = t.length; s > r; r++) {
                var a = t[r],
                    u = this._getItemLayoutPosition(a);
                u.item = a,
                u.isInstant = e || a.isLayoutInstant,
                n.push(u)
            }
            this._processLayoutQueue(n)
        }, m.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, m.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                this._positionItem(o.item, o.x, o.y, o.isInstant)
            }
        }, m.prototype._positionItem = function(t, e, i, o) {
            o ? t.goTo(e, i) : t.moveTo(e, i)
        }, m.prototype._postLayout = function() {
            this.resizeContainer()
        }, m.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, m.prototype._getContainerSize = h, m.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                t = Math.max(t, 0),
                this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, m.prototype._itemsOn = function(t, e, i) {
            function o() {
                return n++, n === r && i.call(s), !0
            }
            for (var n = 0, r = t.length, s = this, a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                p.on(e, o)
            }
        }, m.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, m.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, m.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    this.ignore(o)
                }
            }
        }, m.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var o = t[e];
                    n(o, this.stamps),
                    this.unignore(o)
                }
        }, m.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = o(t)) : void 0
        }, m.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, m.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, m.prototype._manageStamp = h, m.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                o = d(t),
                n = {
                    left: e.left - i.left - o.marginLeft,
                    top: e.top - i.top - o.marginTop,
                    right: i.right - e.right - o.marginRight,
                    bottom: i.bottom - e.bottom - o.marginBottom
                };
            return n
        }, m.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, m.prototype.bindResize = function() {
            this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
        }, m.prototype.unbindResize = function() {
            this.isResizeBound && i.unbind(t, "resize", this),
            this.isResizeBound = !1
        }, m.prototype.onresize = function() {
            function t() {
                e.resize(),
                delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, m.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, m.prototype.needsResizeLayout = function() {
            var t = d(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, m.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, m.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, m.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i),
                this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(e, !0),
                this.reveal(e),
                this.layoutItems(i)
            }
        }, m.prototype.reveal = function(t) {
            var e = t && t.length;
            if (e)
                for (var i = 0; e > i; i++) {
                    var o = t[i];
                    o.reveal()
                }
        }, m.prototype.hide = function(t) {
            var e = t && t.length;
            if (e)
                for (var i = 0; e > i; i++) {
                    var o = t[i];
                    o.hide()
                }
        }, m.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                if (o.element === t)
                    return o
            }
        }, m.prototype.getItems = function(t) {
            if (t && t.length) {
                for (var e = [], i = 0, o = t.length; o > i; i++) {
                    var n = t[i],
                        r = this.getItem(n);
                    r && e.push(r)
                }
                return e
            }
        }, m.prototype.remove = function(t) {
            t = o(t);
            var e = this.getItems(t);
            if (e && e.length) {
                this._itemsOn(e, "remove", function() {
                    this.emitEvent("removeComplete", [this, e])
                });
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    s.remove(),
                    n(s, this.items)
                }
            }
        }, m.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "",
            t.position = "",
            t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var o = this.items[e];
                o.destroy()
            }
            this.unbindResize(),
            delete this.element.outlayerGUID,
            p && p.removeData(this.element, this.constructor.namespace)
        }, m.data = function(t) {
            var e = t && t.outlayerGUID;
            return e && v[e]
        }, m.create = function(t, i) {
            function o() {
                m.apply(this, arguments)
            }
            return Object.create ? o.prototype = Object.create(m.prototype) : e(o.prototype, m.prototype), o.prototype.constructor = o, o.defaults = e({}, m.defaults), e(o.defaults, i), o.prototype.settings = {}, o.namespace = t, o.data = m.data, o.Item = function() {
                y.apply(this, arguments)
            }, o.Item.prototype = new y, s(function() {
                for (var e = r(t), i = a.querySelectorAll(".js-" + e), n = "data-" + e + "-options", s = 0, h = i.length; h > s; s++) {
                    var f,
                        c = i[s],
                        d = c.getAttribute(n);
                    try {
                        f = d && JSON.parse(d)
                    } catch (l) {
                        u && u.error("Error parsing " + n + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + l);
                        continue
                    }
                    var y = new o(c, f);
                    p && p.data(c, t, y)
                }
            }), p && p.bridget && p.bridget(t, o), o
        }, m.Item = y, m
    }
    var a = t.document,
        u = t.console,
        p = t.jQuery,
        h = function() {},
        f = Object.prototype.toString,
        c = "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
        },
        d = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, o = t.length; o > i; i++)
                if (t[i] === e)
                    return i;
            return -1
        };
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window),
function(t) {
    function e(t) {
        function e() {
            t.Item.apply(this, arguments)
        }
        return e.prototype = new t.Item, e.prototype._create = function() {
            this.id = this.layout.itemGUID++,
            t.Item.prototype._create.call(this),
            this.sortData = {}
        }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id,
                this.sortData["original-order"] = this.id,
                this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var o = e[i];
                    this.sortData[i] = o(this.element, this)
                }
            }
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window),
function(t) {
    function e(t, e) {
        function i(t) {
            this.isotope = t,
            t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], n = 0, r = o.length; r > n; n++) {
                var s = o[n];
                i.prototype[s] = t(s)
            }
        }(), i.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight !== this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function(t, e) {
            var i = t + e,
                o = "outer" + e;
            if (this._getMeasurement(i, o), !this[i]) {
                var n = this.getFirstItemSize();
                this[i] = n && n[o] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function() {
            this.isotope.getSize(),
            this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = new i, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window),
function(t) {
    function e(t, e) {
        var o = t.create("masonry");
        return o.prototype._resetLayout = function() {
            this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;)
                this.colYs.push(0);
            this.maxY = 0
        }, o.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            this.columnWidth += this.gutter,
            this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth),
            this.cols = Math.max(this.cols, 1)
        }, o.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, o.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                o = e && 1 > e ? "round" : "ceil",
                n = Math[o](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var r = this._getColGroup(n), s = Math.min.apply(Math, r), a = i(r, s), u = {
                    x: this.columnWidth * a,
                    y: s
                }, p = s + t.size.outerHeight, h = this.cols + 1 - r.length, f = 0; h > f; f++)
                this.colYs[a + f] = p;
            return u
        }, o.prototype._getColGroup = function(t) {
            if (2 > t)
                return this.colYs;
            for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
                var n = this.colYs.slice(o, o + t);
                e[o] = Math.max.apply(Math, n)
            }
            return e
        }, o.prototype._manageStamp = function(t) {
            var i = e(t),
                o = this._getElementOffset(t),
                n = this.options.isOriginLeft ? o.left : o.right,
                r = n + i.outerWidth,
                s = Math.floor(n / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(r / this.columnWidth);
            a -= r % this.columnWidth ? 0 : 1,
            a = Math.min(this.cols - 1, a);
            for (var u = (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight, p = s; a >= p; p++)
                this.colYs[p] = Math.max(u, this.colYs[p])
        }, o.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, o.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)
                t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, o.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, o
    }
    var i = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    } : function(t, e) {
        for (var i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            if (n === e)
                return i
        }
        return -1
    };
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : t.Masonry = e(t.Outlayer, t.getSize)
}(window),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t, i) {
        var o = t.create("masonry"),
            n = o.prototype._getElementOffset,
            r = o.prototype.layout,
            s = o.prototype._getMeasurement;
        e(o.prototype, i.prototype),
        o.prototype._getElementOffset = n,
        o.prototype.layout = r,
        o.prototype._getMeasurement = s;
        var a = o.prototype.measureColumns;
        o.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems,
            a.call(this)
        };
        var u = o.prototype._manageStamp;
        return o.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft,
            this.options.isOriginTop = this.isotope.options.isOriginTop,
            u.apply(this, arguments)
        }, o
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : i(t.Isotope.LayoutMode, t.Masonry)
}(window),
function(t) {
    function e(t) {
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0,
            this.y = 0,
            this.maxY = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize(),
            0 !== this.x && t.size.outerWidth + this.x > this.isotope.size.innerWidth && (this.x = 0, this.y = this.maxY);
            var e = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += t.size.outerWidth, e
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window),
function(t) {
    function e(t) {
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : e(t.Isotope.LayoutMode)
}(window),
function(t) {
    function e(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function i(t) {
        return "[object Array]" === h.call(t)
    }
    function o(t) {
        var e = [];
        if (i(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var o = 0, n = t.length; n > o; o++)
                e.push(t[o]);
        else
            e.push(t);
        return e
    }
    function n(t, e) {
        var i = f(e, t);
        -1 !== i && e.splice(i, 1)
    }
    function r(t, i, r, u, h) {
        function f(t, e) {
            return function(i, o) {
                for (var n = 0, r = t.length; r > n; n++) {
                    var s = t[n],
                        a = i.sortData[s],
                        u = o.sortData[s];
                    if (a > u || u > a) {
                        var p = void 0 !== e[s] ? e[s] : e,
                            h = p ? 1 : -1;
                        return (a > u ? 1 : -1) * h
                    }
                }
                return 0
            }
        }
        var c = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
        c.Item = u,
        c.LayoutMode = h,
        c.prototype._create = function() {
            this.itemGUID = 0,
            this._sorters = {},
            this._getSorters(),
            t.prototype._create.call(this),
            this.modes = {},
            this.filteredItems = this.items,
            this.sortHistory = ["original-order"];
            for (var e in h.modes)
                this._initLayoutMode(e)
        },
        c.prototype.reloadItems = function() {
            this.itemGUID = 0,
            t.prototype.reloadItems.call(this)
        },
        c.prototype._itemize = function() {
            for (var e = t.prototype._itemize.apply(this, arguments), i = 0, o = e.length; o > i; i++) {
                var n = e[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(e), e
        },
        c.prototype._initLayoutMode = function(t) {
            var i = h.modes[t],
                o = this.options[t] || {};
            this.options[t] = i.options ? e(i.options, o) : o,
            this.modes[t] = new i(this)
        },
        c.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? (this.arrange(), void 0) : (this._layout(), void 0)
        },
        c.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(this.filteredItems, t),
            this._isLayoutInited = !0
        },
        c.prototype.arrange = function(t) {
            this.option(t),
            this._getIsInstant(),
            this.filteredItems = this._filter(this.items),
            this._sort(),
            this._layout()
        },
        c.prototype._init = c.prototype.arrange,
        c.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        },
        c.prototype._filter = function(t) {
            function e() {
                f.reveal(n),
                f.hide(r)
            }
            var i = this.options.filter;
            i = i || "*";
            for (var o = [], n = [], r = [], s = this._getFilterTest(i), a = 0, u = t.length; u > a; a++) {
                var p = t[a];
                if (!p.isIgnored) {
                    var h = s(p);
                    h && o.push(p),
                    h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p)
                }
            }
            var f = this;
            return this._isInstant ? this._noTransition(e) : e(), o
        },
        c.prototype._getFilterTest = function(t) {
            return s && this.options.isJQueryFiltering ? function(e) {
                return s(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return r(e.element, t)
            }
        },
        c.prototype.updateSortData = function(t) {
            this._getSorters(),
            t = o(t);
            var e = this.getItems(t);
            e = e.length ? e : this.items,
            this._updateItemsSortData(e)
        },
        c.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = d(i)
            }
        },
        c.prototype._updateItemsSortData = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var o = t[e];
                o.updateSortData()
            }
        };
        var d = function() {
            function t(t) {
                if ("string" != typeof t)
                    return t;
                var i = a(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    r = n && n[1],
                    s = e(r, o),
                    u = c.sortDataParsers[i[1]];
                return t = u ? function(t) {
                    return t && u(s(t))
                } : function(t) {
                    return t && s(t)
                }
            }
            function e(t, e) {
                var i;
                return i = t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && p(i)
                }
            }
            return t
        }();
        c.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        },
        c.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = f(e, this.options.sortAscending);
                this.filteredItems.sort(i),
                t !== this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        },
        c.prototype._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e)
                throw Error("No layout mode: " + t);
            return e.options = this.options[t], e
        },
        c.prototype._resetLayout = function() {
            t.prototype._resetLayout.call(this),
            this._mode()._resetLayout()
        },
        c.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        },
        c.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        },
        c.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        },
        c.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        },
        c.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        },
        c.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i),
                this._resetLayout(),
                this._manageStamps();
                var o = this._filterRevealAdded(e);
                this.layoutItems(i),
                this.filteredItems = o.concat(this.filteredItems)
            }
        },
        c.prototype._filterRevealAdded = function(t) {
            var e = this._noTransition(function() {
                return this._filter(t)
            });
            return this.layoutItems(e, !0), this.reveal(e), t
        },
        c.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i,
                    o,
                    n = e.length;
                for (i = 0; n > i; i++)
                    o = e[i],
                    this.element.appendChild(o.element);
                var r = this._filter(e);
                for (this._noTransition(function() {
                    this.hide(r)
                }), i = 0; n > i; i++)
                    e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; n > i; i++)
                    delete e[i].isLayoutInstant;
                this.reveal(r)
            }
        };
        var l = c.prototype.remove;
        return c.prototype.remove = function(t) {
            t = o(t);
            var e = this.getItems(t);
            if (l.call(this, t), e && e.length)
                for (var i = 0, r = e.length; r > i; i++) {
                    var s = e[i];
                    n(s, this.filteredItems)
                }
        }, c.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, c
    }
    var s = t.jQuery,
        a = String.prototype.trim ? function(t) {
            return t.trim()
        } : function(t) {
            return t.replace(/^\s+|\s+$/g, "")
        },
        u = document.documentElement,
        p = u.textContent ? function(t) {
            return t.textContent
        } : function(t) {
            return t.innerText
        },
        h = Object.prototype.toString,
        f = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, o = t.length; o > i; i++)
                if (t[i] === e)
                    return i;
            return -1
        };
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window);

/* imagesLoaded PACKAGED v3.1.4
 * MIT License*/
(function() {
    function e() {}
    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t)
                return n;
        return -1
    }
    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t,
            n,
            i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i)
                i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else
            t = i[e] || (i[e] = []);
        return t
    },
    i.flattenListeners = function(e) {
        var t,
            n = [];
        for (t = 0; e.length > t; t += 1)
            n.push(e[t].listener);
        return n
    },
    i.getListenersAsObject = function(e) {
        var t,
            n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    },
    i.addListener = function(e, n) {
        var i,
            r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r)
            r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
                listener: n,
                once: !1
            });
        return this
    },
    i.on = n("addListener"),
    i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    },
    i.once = n("addOnceListener"),
    i.defineEvent = function(e) {
        return this.getListeners(e), this
    },
    i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1)
            this.defineEvent(e[t]);
        return this
    },
    i.removeListener = function(e, n) {
        var i,
            r,
            o = this.getListenersAsObject(e);
        for (r in o)
            o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    },
    i.off = n("removeListener"),
    i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    },
    i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    },
    i.manipulateListeners = function(e, t, n) {
        var i,
            r,
            o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;)
                o.call(this, t, n[i]);
        else
            for (i in t)
                t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    },
    i.removeEvent = function(e) {
        var t,
            n = typeof e,
            i = this._getEvents();
        if ("string" === n)
            delete i[e];
        else if ("object" === n)
            for (t in i)
                i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else
            delete this._events;
        return this
    },
    i.removeAllListeners = n("removeEvent"),
    i.emitEvent = function(e, t) {
        var n,
            i,
            r,
            o,
            s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;)
                    n = s[r][i],
                    n.once === !0 && this.removeListener(e, n.listener),
                    o = n.listener.apply(this, t || []),
                    o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    },
    i.trigger = n("emitEvent"),
    i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    },
    i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    },
    i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    },
    i._getEvents = function() {
        return this._events || (this._events = {})
    },
    e.noConflict = function() {
        return r.EventEmitter = o, e
    },
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
function(e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t, n
    }
    var n = document.documentElement,
        i = function() {};
    n.addEventListener ? i = function(e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function(e, n, i) {
        e[n + i] = i.handleEvent ? function() {
            var n = t(e);
            i.handleEvent.call(i, n)
        } : function() {
            var n = t(e);
            i.call(e, n)
        },
        e.attachEvent("on" + n, e[n + i])
    });
    var r = function() {};
    n.removeEventListener ? r = function(e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (r = function(e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (i) {
            e[t + n] = void 0
        }
    });
    var o = {
        bind: i,
        unbind: r
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this),
function(e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
        return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(this, function(e, t, n) {
    function i(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function r(e) {
        return "[object Array]" === d.call(e)
    }
    function o(e) {
        var t = [];
        if (r(e))
            t = e;
        else if ("number" == typeof e.length)
            for (var n = 0, i = e.length; i > n; n++)
                t.push(e[n]);
        else
            t.push(e);
        return t
    }
    function s(e, t, n) {
        if (!(this instanceof s))
            return new s(e, t);
        "string" == typeof e && (e = document.querySelectorAll(e)),
        this.elements = o(e),
        this.options = i({}, this.options),
        "function" == typeof t ? n = t : i(this.options, t),
        n && this.on("always", n),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred);
        var r = this;
        setTimeout(function() {
            r.check()
        })
    }
    function c(e) {
        this.img = e
    }
    function f(e) {
        this.src = e,
        v[e] = this
    }
    var a = e.jQuery,
        u = e.console,
        h = u !== void 0,
        d = Object.prototype.toString;
    s.prototype = new t,
    s.prototype.options = {},
    s.prototype.getImages = function() {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
                var s = i[r];
                this.addImage(s)
            }
        }
    },
    s.prototype.addImage = function(e) {
        var t = new c(e);
        this.images.push(t)
    },
    s.prototype.check = function() {
        function e(e, r) {
            return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
        }
        var t = this,
            n = 0,
            i = this.images.length;
        if (this.hasAnyBroken = !1, !i)
            return this.complete(), void 0;
        for (var r = 0; i > r; r++) {
            var o = this.images[r];
            o.on("confirm", e),
            o.check()
        }
    },
    s.prototype.progress = function(e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function() {
            t.emit("progress", t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
    },
    s.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function() {
            if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                var n = t.hasAnyBroken ? "reject" : "resolve";
                t.jqDeferred[n](t)
            }
        })
    },
    a && (a.fn.imagesLoaded = function(e, t) {
        var n = new s(this, e, t);
        return n.jqDeferred.promise(a(this))
    }),
    c.prototype = new t,
    c.prototype.check = function() {
        var e = v[this.img.src] || new f(this.img.src);
        if (e.isConfirmed)
            return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)
            return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
        var t = this;
        e.on("confirm", function(e, n) {
            return t.confirm(e.isLoaded, n), !0
        }),
        e.check()
    },
    c.prototype.confirm = function(e, t) {
        this.isLoaded = e,
        this.emit("confirm", this, t)
    };
    var v = {};
    return f.prototype = new t, f.prototype.check = function() {
        if (!this.isChecked) {
            var e = new Image;
            n.bind(e, "load", this),
            n.bind(e, "error", this),
            e.src = this.src,
            this.isChecked = !0
        }
    }, f.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, f.prototype.onload = function(e) {
        this.confirm(!0, "onload"),
        this.unbindProxyEvents(e)
    }, f.prototype.onerror = function(e) {
        this.confirm(!1, "onerror"),
        this.unbindProxyEvents(e)
    }, f.prototype.confirm = function(e, t) {
        this.isConfirmed = !0,
        this.isLoaded = e,
        this.emit("confirm", this, t)
    }, f.prototype.unbindProxyEvents = function(e) {
        n.unbind(e.target, "load", this),
        n.unbind(e.target, "error", this)
    }, s
});

/*!
    Autosize v1.18.4 - 2014-01-11
    Automatically adjust textarea height based on user input.
    (c) 2014 Jack Moore - http://www.jacklmoore.com/autosize
    license: http://www.opensource.org/licenses/mit-license.php
*/
!function(a) {
    var b,
        c = {
            className: "autosizejs",
            append: "",
            callback: !1,
            resizeDelay: 10,
            placeholder: !0
        },
        d = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
        e = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
        f = a(d).data("autosize", !0)[0];
    f.style.lineHeight = "99px",
    "99px" === a(f).css("lineHeight") && e.push("lineHeight"),
    f.style.lineHeight = "",
    a.fn.autosize = function(d) {
        return this.length ? (d = a.extend({}, c, d || {}), f.parentNode !== document.body && a(document.body).append(f), this.each(function() {
            function c() {
                var b,
                    c = window.getComputedStyle ? window.getComputedStyle(m, null) : !1;
                c ? (b = m.getBoundingClientRect().width, 0 === b && (b = parseInt(c.width, 10)), a.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(a, d) {
                    b -= parseInt(c[d], 10)
                })) : b = Math.max(n.width(), 0),
                f.style.width = b + "px"
            }
            function g() {
                var g = {};
                if (b = m, f.className = d.className, j = parseInt(n.css("maxHeight"), 10), a.each(e, function(a, b) {
                    g[b] = n.css(b)
                }), a(f).css(g), c(), window.chrome) {
                    var h = m.style.width;
                    m.style.width = "0px";
                    {
                        m.offsetWidth
                    }
                    m.style.width = h
                }
            }
            function h() {
                var e,
                    h;
                b !== m ? g() : c(),
                f.value = !m.value && d.placeholder ? (a(m).attr("placeholder") || "") + d.append : m.value + d.append,
                f.style.overflowY = m.style.overflowY,
                h = parseInt(m.style.height, 10),
                f.scrollTop = 0,
                f.scrollTop = 9e4,
                e = f.scrollTop,
                j && e > j ? (m.style.overflowY = "scroll", e = j) : (m.style.overflowY = "hidden", k > e && (e = k)),
                e += o,
                h !== e && (m.style.height = e + "px", p && d.callback.call(m, m))
            }
            function i() {
                clearTimeout(l),
                l = setTimeout(function() {
                    var a = n.width();
                    a !== r && (r = a, h())
                }, parseInt(d.resizeDelay, 10))
            }
            var j,
                k,
                l,
                m = this,
                n = a(m),
                o = 0,
                p = a.isFunction(d.callback),
                q = {
                    height: m.style.height,
                    overflow: m.style.overflow,
                    overflowY: m.style.overflowY,
                    wordWrap: m.style.wordWrap,
                    resize: m.style.resize
                },
                r = n.width();
            n.data("autosize") || (n.data("autosize", !0), ("border-box" === n.css("box-sizing") || "border-box" === n.css("-moz-box-sizing") || "border-box" === n.css("-webkit-box-sizing")) && (o = n.outerHeight() - n.height()), k = Math.max(parseInt(n.css("minHeight"), 10) - o || 0, n.height()), n.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word",
                resize: "none" === n.css("resize") || "vertical" === n.css("resize") ? "none" : "horizontal"
            }), "onpropertychange" in m ? "oninput" in m ? n.on("input.autosize keyup.autosize", h) : n.on("propertychange.autosize", function() {
                "value" === event.propertyName && h()
            }) : n.on("input.autosize", h), d.resizeDelay !== !1 && a(window).on("resize.autosize", i), n.on("autosize.resize", h), n.on("autosize.resizeIncludeStyle", function() {
                b = null,
                h()
            }), n.on("autosize.destroy", function() {
                b = null,
                clearTimeout(l),
                a(window).off("resize", i),
                n.off("autosize").off(".autosize").css(q).removeData("autosize")
            }), h())
        })) : this
    }
}(window.jQuery || window.$);

/* BackgroundCheck
   http://kennethcachia.com/background-check v1.2.2 */
(function(r, m) {
    "function" === typeof define && define.amd ? define(m) : r.BackgroundCheck = m(r)
})(this, function() {
    function r() {
        p = g = q = null;
        k = {};
        s && clearTimeout(s)
    }
    function m(a) {
        h("debug") && console.log(a)
    }
    function l(a, b) {
        z(a, typeof b);
        return void 0 === a ? b : a
    }
    function z(a, b) {
        if (void 0 !== a && typeof a !== b)
            throw "Incorrect attribute type";
    }
    function w(a, b) {
        var d = a;
        "string" === typeof a ? d = document.querySelectorAll(a) : a && 1 === a.nodeType && (d = [a]);
        if (d && 0 !== d.length && void 0 !== d.length) {
            if (b) {
                for (var c, f = [], e = 0; e < d.length; e++)
                    if (c = d[e], f.push(c), "IMG" !== c.tagName) {
                        c = window.getComputedStyle(c).backgroundImage;
                        if (1 < c.split(/,url|, url/).length)
                            throw "Multiple backgrounds are not supported";
                        if (c && "none" !== c)
                            f[e] = {
                                img: new Image,
                                el: f[e]
                            },
                            c = c.slice(4, -1),
                            c = c.replace(/"/g, ""),
                            f[e].img.src = c,
                            m("CSS Image - " + c);
                        else
                            throw "Element is not an <img> but does not have a background-image";
                    }
                d = f
            }
            d = Array.prototype.slice.call(d)
        } else
            throw "Elements not found";
        return d
    }
    function A() {
        h("debugOverlay") ? (g.style.opacity = .5, g.style.pointerEvents = "none", document.body.appendChild(g)) : g.parentNode && g.parentNode.removeChild(g)
    }
    function B() {
        u = {
            left: 0,
            top: 0,
            right: document.body.clientWidth,
            bottom: window.innerHeight
        };
        g.width = document.body.clientWidth;
        g.height = window.innerHeight
    }
    function v(a, b, d) {
        var c;
        -1 !== a.indexOf("px") ? a = parseFloat(a) : -1 !== a.indexOf("%") ? (a = parseFloat(a), c = a / 100, a = c * b, d && (a -= d * c)) : a = b;
        return a
    }
    function C(a) {
        var b,
            d;
        if (a.nodeType)
            b = a.getBoundingClientRect(),
            b = {
                left: b.left,
                right: b.right,
                top: b.top,
                bottom: b.bottom,
                width: b.width,
                height: b.height
            },
            d = a.parentNode;
        else {
            var c = window.getComputedStyle(a.el);
            a.el.style.backgroundRepeat = "no-repeat";
            a.el.style.backgroundOrigin = "padding-box";
            var f = c.backgroundSize.split(" ");
            b = f[0];
            d = void 0 === f[1] ? "auto" : f[1];
            var e = a.el.clientWidth / a.el.clientHeight,
                h = a.img.naturalWidth / a.img.naturalHeight;
            "cover" === b ? e >= h ? (b = "100%", d = "auto") : (b = "auto", f[0] = "auto", d = "100%") : "contain" === b && (1 / e < 1 / h ? (b = "auto", f[0] = "auto", d = "100%") : (b = "100%", d = "auto"));
            b = "auto" === b ? a.img.naturalWidth : v(b, a.el.clientWidth);
            d = "auto" === d ? b / a.img.naturalWidth * a.img.naturalHeight : v(d, a.el.clientHeight);
            "auto" === f[0] && "auto" !== f[1] && (b = d / a.img.naturalHeight * a.img.naturalWidth);
            c = c.backgroundPosition;
            "top" === c ? c = "50% 0%" : "left" === c ? c = "0% 50%" : "right" === c ? c = "100% 50%" : "bottom" === c ? c = "50% 100%" : "center" === c && (c = "50% 50%");
            c = c.split(" ");
            4 === c.length ? (f = c[1], e = c[3]) : (f = c[0], e = c[1]);
            e = e || "50%";
            f = v(f, a.el.clientWidth, b);
            e = v(e, a.el.clientHeight, d);
            4 === c.length && ("right" === c[0] && (f = a.el.clientWidth - a.img.naturalWidth - f), "bottom" === c[2] && (e = a.el.clientHeight - a.img.naturalHeight - e));
            f += a.el.getBoundingClientRect().left;
            e += a.el.getBoundingClientRect().top;
            b = {
                left: Math.floor(f),
                right: Math.floor(f + b),
                top: Math.floor(e),
                bottom: Math.floor(e + d),
                width: Math.floor(b),
                height: Math.floor(d)
            };
            d = a.el;
            a = a.img
        }
        d = d.getBoundingClientRect();
        b.imageTop = 0;
        b.imageLeft = 0;
        b.imageWidth = a.naturalWidth;
        b.imageHeight = a.naturalHeight;
        a = b.imageHeight / b.height;
        b.top < d.top && (c = d.top - b.top, b.imageTop = a * c, b.imageHeight -= a * c, b.top += c, b.height -= c);
        b.left < d.left && (c = d.left - b.left, b.imageLeft += a * c, b.imageWidth -= a * c, b.width -= c, b.left += c);
        b.bottom > d.bottom && (c = b.bottom - d.bottom, b.imageHeight -= a * c, b.height -= c);
        b.right > d.right && (c = b.right - d.right, b.imageWidth -= a * c, b.width -= c);
        b.imageTop = Math.floor(b.imageTop);
        b.imageLeft = Math.floor(b.imageLeft);
        b.imageHeight = Math.floor(b.imageHeight);
        b.imageWidth = Math.floor(b.imageWidth);
        return b
    }
    function t(a, b, d) {
        var c = a.className;
        switch (d) {
        case "add":
            c += " " + b;
            break;
        case "remove":
            c = c.replace(new RegExp("(?:^|\\s)" + b + "(?!\\S)", "g"), "")
        }
        a.className = c.trim()
    }
    function x(a) {
        a = a ? [a] : h("targets");
        for (var b, d = 0; d < a.length; d++)
            b = a[d],
            b = h("changeParent") ? b.parentNode : b,
            t(b, h("classes").light, "remove"),
            t(b, h("classes").dark, "remove"),
            t(b, h("classes").complex, "remove")
    }
    function D(a) {
        var b = a.getBoundingClientRect(),
            d,
            c = 0,
            f = 0,
            e = 0,
            g = 0,
            k = h("mask");
        if (0 < b.width && 0 < b.height) {
            x(a);
            a = h("changeParent") ? a.parentNode : a;
            for (var b = p.getImageData(b.left, b.top, b.width, b.height).data, l = 0; l < b.length; l += 4)
                b[l] === k.r && b[l + 1] === k.g && b[l + 2] === k.b ? g++ : (c++, d = .2126 * b[l] + .7152 * b[l + 1] + .0722 * b[l + 2], d -= e, f += d * d, e += d / c);
            g <= b.length / 4 * (1 - h("minOverlap") / 100) && (c = Math.sqrt(f / c) / 255, e /= 255, m("Target: " + a.className + " lum: " + e + " var: " + c), t(a, e <= h("threshold") / 100 ? h("classes").dark : h("classes").light, "add"), c > h("minComplexity") / 100 && t(a, h("classes").complex, "add"))
        }
    }
    function y(a, b) {
        a = (a.nodeType ? a : a.el).getBoundingClientRect();
        b = b === u ? b : (b.nodeType ? b : b.el).getBoundingClientRect();
        return !(a.right < b.left || a.left > b.right || a.top > b.bottom || a.bottom < b.top)
    }
    function E(a) {
        for (var b = (new Date).getTime(), d = a && ("IMG" === a.tagName || a.img) ? "image" : "targets", c = a ? !1 : !0, f = h("targets").length, e, g = 0; g < f; g++)
            e = h("targets")[g],
            y(e, u) && ("targets" !== d || a && a !== e ? "image" === d && y(e, a) && D(e) : (c = !0, D(e)));
        if ("targets" === d && !c)
            throw a + " is not a target";
        a = (new Date).getTime() - b;
        m("Duration: " + a + "ms");
        a > h("maxDuration") && (console.log("BackgroundCheck - Killed"), x(), r())
    }
    function F(a) {
        var b = function(a) {
                var b = 0;
                "static" !== window.getComputedStyle(a).position && (b = parseInt(window.getComputedStyle(a).zIndex, 10) || 0, 0 <= b && b++);
                return b
            },
            d = a.parentNode,
            d = d ? b(d) : 0;
        a = b(a);
        return 1E5 * d + a
    }
    function H(a) {
        var b = !1;
        a.sort(function(a, c) {
            a = a.nodeType ? a : a.el;
            c = c.nodeType ? c : c.el;
            var f = a.compareDocumentPosition(c),
                e = 0;
            a = F(a);
            c = F(c);
            a > c && (b = !0);
            a === c && 2 === f ? e = 1 : a === c && 4 === f && (e = -1);
            return e || a - c
        });
        m("Sorted: " + b);
        b && m(a);
        return b
    }
    function n(a, b, d) {
        if (q) {
            var c = h("mask");
            m("--- BackgroundCheck ---");
            m("onLoad event: " + (d && d.src));
            !0 !== b && (p.clearRect(0, 0, g.width, g.height), p.fillStyle = "rgb(" + c.r + ", " + c.g + ", " + c.b + ")", p.fillRect(0, 0, g.width, g.height));
            b = d ? [d] : h("images");
            for (var c = H(b), f, e, k = !1, l = 0; l < b.length; l++)
                f = b[l],
                y(f, u) && (e = f.nodeType ? f : f.img, 0 === e.naturalWidth ? (k = !0, m("Loading... " + f.src), e.removeEventListener("load", n), c ? e.addEventListener("load", n.bind(null, null, !1, null)) : e.addEventListener("load", n.bind(null, a, !0, f))) : (m("Drawing: " + f.src), e = C(f), f = f.nodeType ? f : f.img, 0 < e.imageWidth && 0 < e.imageHeight && 0 < e.width && 0 < e.height ? p.drawImage(f, e.imageLeft, e.imageTop, e.imageWidth, e.imageHeight, e.left, e.top, e.width, e.height) : m("Skipping image - " + f.src + " - area too small")));
            d || k ? d && E(d) : E(a)
        }
    }
    function G(a) {
        !0 === h("windowEvents") && (s && clearTimeout(s), s = setTimeout(a, 200))
    }
    function h(a) {
        if (void 0 === k[a])
            throw "Unknown property - " + a;
        return k[a]
    }
    var I = void 0 !== window.orientation ? "orientationchange" : "resize",
        q,
        g,
        p,
        s,
        u,
        k = {};
    return {
        init: function(a) {
            if (void 0 === a || void 0 === a.targets)
                throw "Missing attributes";
            k.debug = l(a.debug, !1);
            k.debugOverlay = l(a.debugOverlay, !1);
            k.targets = w(a.targets);
            k.images = w(a.images || 'img[src^="' + window.location.protocol + "//" + window.location.hostname + '"]', !0);
            k.changeParent = l(a.changeParent, !1);
            k.threshold = l(a.threshold, 50);
            k.minComplexity = l(a.minComplexity, 30);
            k.minOverlap = l(a.minOverlap, 50);
            k.windowEvents = l(a.windowEvents, !0);
            k.maxDuration = l(a.maxDuration, 500);
            k.mask = l(a.mask, {
                r: 0,
                g: 255,
                b: 0
            });
            k.classes = l(a.classes, {
                dark: "background--dark",
                light: "background--light",
                complex: "background--complex"
            });
            void 0 === q && ((g = document.createElement("canvas")) && g.getContext ? (p = g.getContext("2d"), q = !0) : q = !1, A(), q && (g.style.position = "fixed", g.style.top = "0px", g.style.left = "0px", g.style.width = "100%", g.style.height = "100%", window.addEventListener(I, G.bind(null, function() {
                B();
                n()
            })), window.addEventListener("scroll", G.bind(null, n)), B(), n()))
        },
        destroy: r,
        refresh: n,
        set: function(a, b) {
            if (void 0 === k[a])
                throw "Unknown property - " + a;
            if (void 0 === b)
                throw "Missing value for " + a;
            if ("targets" === a || "images" === a)
                try {
                    b = w("images" !== a || b ? b : "img", "images" === a ? !0 : !1)
                } catch (d) {
                    throw d;
                }
            else
                z(b, typeof k[a]);
            x();
            k[a] = b;
            n();
            "debugOverlay" === a && A()
        },
        get: h,
        getImageData: function() {
            for (var a = h("images"), b, d = [], c = 0; c < a.length; c++)
                b = C(a[c]),
                d.push(b);
            return d
        }
    }
});

/* Vimeo Froogaloop 
https://github.com/vimeo/player-api/tree/master/javascript */

var Froogaloop = function() {
    function e(a) {
        return new e.fn.init(a)
    }
    function h(a, c, b) {
        if (!b.contentWindow.postMessage)
            return !1;
        var f = b.getAttribute("src").split("?")[0],
            a = JSON.stringify({
                method: a,
                value: c
            });
        "//" === f.substr(0, 2) && (f = window.location.protocol + f);
        b.contentWindow.postMessage(a, f)
    }
    function j(a) {
        var c,
            b;
        try {
            c = JSON.parse(a.data),
            b = c.event || c.method
        } catch (f) {}
        "ready" == b && !i && (i = !0);
        if (a.origin != k)
            return !1;
        var a = c.value,
            e = c.data,
            g = "" === g ? null : c.player_id;
        c = g ? d[g][b] : d[b];
        b = [];
        if (!c)
            return !1;
        void 0 !==
        a && b.push(a);
        e && b.push(e);
        g && b.push(g);
        return 0 < b.length ? c.apply(null, b) : c.call()
    }
    function l(a, c, b) {
        b ? (d[b] || (d[b] = {}), d[b][a] = c) : d[a] = c
    }
    var d = {},
        i = !1,
        k = "";
    e.fn = e.prototype = {
        element: null,
        init: function(a) {
            "string" === typeof a && (a = document.getElementById(a));
            this.element = a;
            a = this.element.getAttribute("src");
            "//" === a.substr(0, 2) && (a = window.location.protocol + a);
            for (var a = a.split("/"), c = "", b = 0, f = a.length; b < f; b++) {
                if (3 > b)
                    c += a[b];
                else
                    break;
                2 > b && (c += "/")
            }
            k = c;
            return this
        },
        api: function(a, c) {
            if (!this.element ||
            !a)
                return !1;
            var b = this.element,
                f = "" !== b.id ? b.id : null,
                d = !c || !c.constructor || !c.call || !c.apply ? c : null,
                e = c && c.constructor && c.call && c.apply ? c : null;
            e && l(a, e, f);
            h(a, d, b);
            return this
        },
        addEvent: function(a, c) {
            if (!this.element)
                return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null;
            l(a, c, d);
            "ready" != a ? h("addEventListener", a, b) : "ready" == a && i && c.call(null, d);
            return this
        },
        removeEvent: function(a) {
            if (!this.element)
                return !1;
            var c = this.element,
                b;
            a:
            {
                if ((b = "" !== c.id ? c.id : null) && d[b]) {
                    if (!d[b][a]) {
                        b = !1;
                        break a
                    }
                    d[b][a] = null
                } else {
                    if (!d[a]) {
                        b =
                        !1;
                        break a
                    }
                    d[a] = null
                }
                b = !0
            }"ready" != a && b && h("removeEventListener", a, c)
        }
    };
    e.fn.init.prototype = e.fn;
    window.addEventListener ? window.addEventListener("message", j, !1) : window.attachEvent("onmessage", j);
    return window.Froogaloop = window.$f = e
}();

/*  By Osvaldas Valutis, www.osvaldas.info
    Available for use under the MIT License */
(function(e, t, n, r) {
    var i = "ontouchstart" in t,
        s = i ? "touchstart" : "mousedown",
        o = i ? "touchmove" : "mousemove",
        u = i ? "touchend" : "mouseup",
        a = i ? "touchcancel" : "mouseup",
        f = function(e) {
            var t = e / 3600,
                n = Math.floor(t),
                r = e % 3600 / 60,
                i = Math.floor(r),
                s = Math.ceil(e % 3600 % 60);
            if (s > 59) {
                s = 0;
                i = Math.ceil(r)
            }
            if (i > 59) {
                i = 0;
                n = Math.ceil(t)
            }
            return (n == 0 ? "" : n > 0 && n.toString().length < 2 ? "0" + n + ":" : n + ":") + (i.toString().length < 2 ? "0" + i : i) + ":" + (s.toString().length < 2 ? "0" + s : s)
        },
        l = function(e) {
            var t = n.createElement("audio");
            return !!(t.canPlayType && t.canPlayType("audio/" + e.split(".").pop().toLowerCase() + ";").replace(/no/, ""))
        };
    e.fn.audioPlayer = function(t) {
        var t = e.extend({
                classPrefix: "audioplayer",
                strPlay: "Play",
                strPause: "Pause",
                strVolume: "Volume"
            }, t),
            n = {},
            r = {
                playPause: "playpause",
                playing: "playing",
                stopped: "stopped",
                time: "time",
                timeCurrent: "time-current",
                timeDuration: "time-duration",
                bar: "bar",
                barLoaded: "bar-loaded",
                barPlayed: "bar-played",
                volume: "volume",
                volumeButton: "volume-button",
                volumeAdjust: "volume-adjust",
                noVolume: "novolume",
                muted: "muted",
                mini: "mini"
            };
        for (var u in r)
            n[u] = t.classPrefix + "-" + r[u];
        this.each(function() {
            if (e(this).prop("tagName").toLowerCase() != "audio")
                return false;
            var r = e(this),
                u = r.attr("src"),
                c = r.get(0).getAttribute("autoplay"),
                c = c === "" || c === "autoplay" ? true : false,
                h = r.get(0).getAttribute("loop"),
                h = h === "" || h === "loop" ? true : false,
                p = false;
            if (typeof u === "undefined") {
                r.find("source").each(function() {
                    u = e(this).attr("src");
                    if (typeof u !== "undefined" && l(u)) {
                        p = true;
                        return false
                    }
                })
            } else if (l(u))
                p = true;
            var d = e('<div class="' + t.classPrefix + '">' + (p ? e("<div>").append(r.eq(0).clone()).html() : '<embed src="' + u + '" width="0" height="0" volume="100" autostart="' + c.toString() + '" loop="' + h.toString() + '" />') + '<div class="' + n.playPause + '" title="' + t.strPlay + '"><a href="#">' + t.strPlay + "</a></div></div>"),
                v = p ? d.find("audio") : d.find("embed"),
                v = v.get(0);
            if (p) {
                d.find("audio").css({
                    width: 0,
                    height: 0,
                    visibility: "hidden"
                });
                d.append('<div class="' + n.time + " " + n.timeCurrent + '"></div><div class="' + n.bar + '"><div class="' + n.barLoaded + '"></div><div class="' + n.barPlayed + '"></div></div><div class="' + n.time + " " + n.timeDuration + '"></div><div class="' + n.volume + '"><div class="' + n.volumeButton + '" title="' + t.strVolume + '"><a href="#">' + t.strVolume + '</a></div><div class="' + n.volumeAdjust + '"><div><div></div></div></div></div>');
                var m = d.find("." + n.bar),
                    g = d.find("." + n.barPlayed),
                    y = d.find("." + n.barLoaded),
                    b = d.find("." + n.timeCurrent),
                    w = d.find("." + n.timeDuration),
                    E = d.find("." + n.volumeButton),
                    S = d.find("." + n.volumeAdjust + " > div"),
                    x = 0,
                    T = function(e) {
                        theRealEvent = i ? e.originalEvent.touches[0] : e;
                        v.currentTime = Math.round(v.duration * (theRealEvent.pageX - m.offset().left) / m.width())
                    },
                    N = function(e) {
                        theRealEvent = i ? e.originalEvent.touches[0] : e;
                        v.volume = Math.abs((theRealEvent.pageY - (S.offset().top + S.height())) / S.height())
                    },
                    C = function() {
                        var e = setInterval(function() {
                            if (v.buffered.length < 1)
                                return true;
                            y.width(v.buffered.end(0) / v.duration * 100 + "%");
                            if (Math.floor(v.buffered.end(0)) >= Math.floor(v.duration))
                                clearInterval(e)
                        }, 100)
                    };
                var k = v.volume,
                    L = v.volume = .111;
                if (Math.round(v.volume * 1e3) / 1e3 == L)
                    v.volume = k;
                else
                    d.addClass(n.noVolume);
                w.html("&hellip;");
                b.html(f(0));
                v.addEventListener("loadeddata", function() {
                    C();
                    w.html(e.isNumeric(v.duration) ? f(v.duration) : "&hellip;");
                    S.find("div").height(v.volume * 100 + "%");
                    x = v.volume
                });
                v.addEventListener("timeupdate", function() {
                    b.html(f(v.currentTime));
                    g.width(v.currentTime / v.duration * 100 + "%");
                    perPlayed = v.currentTime / v.duration * 100;
                    if (perPlayed >= 55) {
                        d.addClass("dark")
                    } else {
                        d.removeClass("dark")
                    }
                });
                v.addEventListener("volumechange", function() {
                    S.find("div").height(v.volume * 100 + "%");
                    if (v.volume > 0 && d.hasClass(n.muted))
                        d.removeClass(n.muted);
                    if (v.volume <= 0 && !d.hasClass(n.muted))
                        d.addClass(n.muted)
                });
                v.addEventListener("ended", function() {
                    d.removeClass(n.playing).addClass(n.stopped)
                });
                m.on(s, function(e) {
                    T(e);
                    m.on(o, function(e) {
                        T(e)
                    })
                }).on(a, function() {
                    m.unbind(o)
                });
                E.on("click", function() {
                    if (d.hasClass(n.muted)) {
                        d.removeClass(n.muted);
                        v.volume = x
                    } else {
                        d.addClass(n.muted);
                        x = v.volume;
                        v.volume = 0
                    }
                    return false
                });
                S.on(s, function(e) {
                    N(e);
                    S.on(o, function(e) {
                        N(e)
                    })
                }).on(a, function() {
                    S.unbind(o)
                })
            } else
                d.addClass(n.mini);
            d.addClass(c ? n.playing : n.stopped);
            d.find("." + n.playPause).on("click", function() {
                if (d.hasClass(n.playing)) {
                    e(this).attr("title", t.strPlay).find("a").html(t.strPlay);
                    d.removeClass(n.playing).addClass(n.stopped);
                    p ? v.pause() : v.Stop()
                } else {
                    e(this).attr("title", t.strPause).find("a").html(t.strPause);
                    d.addClass(n.playing).removeClass(n.stopped);
                    p ? v.play() : v.Play()
                }
                return false
            });
            r.replaceWith(d)
        });
        return this
    }
})(jQuery, window, document);

/*
 * debouncedresize: special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work? 
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */

(function(a) {
    var d = a.event,
        b,
        c;
    b = d.special.debouncedresize = {
        setup: function() {
            a(this).on("resize", b.handler)
        },
        teardown: function() {
            a(this).off("resize", b.handler)
        },
        handler: function(a, f) {
            var g = this,
                h = arguments,
                e = function() {
                    a.type = "debouncedresize";
                    d.dispatch.apply(g, h)
                };
            c && clearTimeout(c);
            f ? e() : c = setTimeout(e, b.threshold)
        },
        threshold: 150
    }
})(jQuery);

/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License 
 */
(function(d) {
    d.fn.extend({
        customSelect: function(f) {
            if ("undefined" === typeof document.body.style.maxHeight)
                return this;
            f = d.extend({
                customClass: "customSelect",
                mapClass: !0,
                mapStyle: !0
            }, f);
            var b = f.customClass,
                g = function(c, e) {
                    var a = c.find(":selected"),
                        k = e.children(":first"),
                        h = a.html() || "&nbsp;";
                    k.html(h);
                    a.attr("disabled") ? e.addClass(b + "DisabledOption") : e.removeClass(b + "DisabledOption");
                    setTimeout(function() {
                        e.removeClass(b + "Open");
                        d(document).off("mouseup.customSelect")
                    }, 60)
                };
            return this.each(function() {
                var c =
                    d(this),
                    e = d("<span />").addClass(b + "Inner"),
                    a = d("<span />");
                c.after(a.append(e));
                a.addClass(b);
                f.mapClass && a.addClass(c.attr("class"));
                f.mapStyle && a.attr("style", c.attr("style"));
                c.addClass("hasCustomSelect").on("render.customSelect", function() {
                    g(c, a);
                    var d = parseInt(c.outerWidth(), 10) - (parseInt(a.outerWidth(), 10) - parseInt(a.width(), 10));
                    a.css({
                        display: "inline-block"
                    });
                    var h = a.outerHeight();
                    c.attr("disabled") ? a.addClass(b + "Disabled") : a.removeClass(b + "Disabled");
                    e.css({
                        width: d,
                        display: "inline-block"
                    });
                    c.css({
                        "-webkit-appearance": "menulist-button",
                        width: a.outerWidth(),
                        position: "absolute",
                        opacity: 0,
                        height: h,
                        fontSize: a.css("font-size")
                    })
                }).on("change.customSelect", function() {
                    a.addClass(b + "Changed");
                    g(c, a)
                }).on("keyup.customSelect", function(d) {
                    a.hasClass(b + "Open") ? 13 != d.which && 27 != d.which || g(c, a) : (c.trigger("blur.customSelect"), c.trigger("focus.customSelect"))
                }).on("mousedown.customSelect", function() {
                    a.removeClass(b + "Changed")
                }).on("mouseup.customSelect", function(e) {
                    a.hasClass(b + "Open") || (0 < d("." +
                    (b + "Open")).not(a).length && "undefined" !== typeof InstallTrigger ? c.trigger("focus.customSelect") : (a.addClass(b + "Open"), e.stopPropagation(), d(document).one("mouseup.customSelect", function(b) {
                        b.target != c.get(0) && 0 > d.inArray(b.target, c.find("*").get()) ? c.trigger("blur.customSelect") : g(c, a)
                    })))
                }).on("focus.customSelect", function() {
                    a.removeClass(b + "Changed").addClass(b + "Focus")
                }).on("blur.customSelect", function() {
                    a.removeClass(b + "Focus " + (b + "Open"))
                }).on("mouseenter.customSelect", function() {
                    a.addClass(b +
                    "Hover")
                }).on("mouseleave.customSelect", function() {
                    a.removeClass(b + "Hover")
                }).trigger("render.customSelect")
            })
        }
    })
})(jQuery);

/* Modal JS - from bootstrap */

if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
    "use strict";
    function e(e, o) {
        return this.each(function() {
            var s = t(this),
                n = s.data("bs.modal"),
                r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            n || s.data("bs.modal", n = new i(this, r)),
            "string" == typeof e ? n[e](o) : r.show && n.show(o)
        })
    }
    var i = function(e, i) {
        this.options = i,
        this.$body = t(document.body),
        this.$element = t(e),
        this.$backdrop = this.isShown = null,
        this.scrollbarWidth = 0,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.2.0",
    i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    },
    i.prototype.show = function(e) {
        var i = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o),
        this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
            var o = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            o && i.$element[0].offsetWidth,
            i.$element.addClass("in").attr("aria-hidden", !1),
            i.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? i.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(300) : i.$element.trigger("focus").trigger(s)
        }))
    },
    i.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    },
    i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    },
    i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    },
    i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.$element.trigger("hidden.bs.modal")
        })
    },
    i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    i.prototype.backdrop = function(e) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t('<div class="modal-backdrop ' + o + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var n = function() {
                i.removeBackdrop(),
                e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n()
        } else
            e && e()
    },
    i.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    },
    i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
    },
    i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    },
    i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var o = t.fn.modal;
    t.fn.modal = e,
    t.fn.modal.Constructor = i,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = o, this
    },
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var o = t(this),
            s = o.attr("href"),
            n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            r = n.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(s) && s
            }, n.data(), o.data());
        o.is("a") && i.preventDefault(),
        n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                o.is(":visible") && o.trigger("focus")
            })
        }),
        e.call(n, r, this)
    })
}(jQuery),
+function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i])
                return {
                    end: e[i]
                };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            o = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var s = function() {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(s, e), this
    },
    t(function() {
        t.support.transition = e(),
        t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery);

