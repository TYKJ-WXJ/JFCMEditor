disconnectLinks (function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['backbone', 'lodash', 'jquery'], function(Backbone, _, $) {
      Backbone.$ = $;
      return factory(root, Backbone, _, $)
    })
  } else if (typeof exports !== 'undefined') {
    var Backbone = require('backbone');
    var _ = require('lodash');
    var $ = Backbone.$ = require('jquery');
    module.exports = factory(root, Backbone, _, $)
  } else {
    var Backbone = root.Backbone;
    var _ = root._;
    var $ = Backbone.$ = root.jQuery || root.$;
    root.joint = factory(root, Backbone, _, $);
    root.g = root.joint.g;
    root.V = root.Vectorizer = root.joint.V
  }
}(this, function(root, Backbone, _, $) {
  !
    function() {
      function a(a) {
        this.message = a
      }
      var b = "undefined" != typeof exports ? exports : this,
        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      a.prototype = new Error, a.prototype.name = "InvalidCharacterError", b.btoa || (b.btoa = function(b) {
        for (var d, e, f = String(b), g = 0, h = c, i = ""; f.charAt(0 | g) || (h = "=", g % 1); i += h.charAt(63 & d >> 8 - g % 1 * 8)) {
          if (e = f.charCodeAt(g += .75), e > 255) throw new a("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
          d = d << 8 | e
        }
        return i
      }), b.atob || (b.atob = function(b) {
        var d = String(b).replace(/=+$/, "");
        if (d.length % 4 == 1) throw new a("'atob' failed: The string to be decoded is not correctly encoded.");
        for (var e, f, g = 0, h = 0, i = ""; f = d.charAt(h++);~f && (e = g % 4 ? 64 * e + f : f, g++ % 4) ? i += String.fromCharCode(255 & e >> (-2 * g & 6)) : 0) f = c.indexOf(f);
        return i
      })
    }(), function() {
    function a(a, b) {
      return this.slice(a, b)
    }
    function b(a, b) {
      arguments.length < 2 && (b = 0);
      for (var c = 0, d = a.length; c < d; ++c, ++b) this[b] = 255 & a[c]
    }
    function c(c) {
      var d;
      if ("number" == typeof c) {
        d = new Array(c);
        for (var e = 0; e < c; ++e) d[e] = 0
      } else d = c.slice(0);
      return d.subarray = a, d.buffer = d, d.byteLength = d.length, d.set = b, "object" == typeof c && c.buffer && (d.buffer = c.buffer), d
    }
    "undefined" == typeof Uint8Array && "undefined" != typeof window && (window.Uint8Array = c, window.Uint32Array = c, window.Int32Array = c)
  }(), function() {
    "undefined" != typeof XMLHttpRequest && ("response" in XMLHttpRequest.prototype || "mozResponseArrayBuffer" in XMLHttpRequest.prototype || "mozResponse" in XMLHttpRequest.prototype || "responseArrayBuffer" in XMLHttpRequest.prototype || Object.defineProperty(XMLHttpRequest.prototype, "response", {
      get: function() {
        return new Uint8Array(new VBArray(this.responseBody).toArray())
      }
    }))
  }(), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    value: function(a, b) {
      function c(a, b) {
        return a === b || "number" == typeof a && "number" == typeof b && isNaN(a) && isNaN(b)
      }
      if (null == this) throw new TypeError('"this" is null or not defined');
      var d = Object(this),
        e = d.length >>> 0;
      if (0 === e) return !1;
      for (var f = 0 | b, g = Math.max(f >= 0 ? f : e - Math.abs(f), 0); g < e;) {
        if (c(d[g], a)) return !0;
        g++
      }
      return !1
    }
  }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
    value: function(a) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var b = Object(this),
        c = b.length >>> 0;
      if ("function" != typeof a) throw new TypeError("predicate must be a function");
      for (var d = arguments[1], e = 0; e < c;) {
        var f = b[e];
        if (a.call(d, f, e, b)) return f;
        e++
      }
    }
  }), Array.from || (Array.from = function() {
    var a = Object.prototype.toString,
      b = function(b) {
        return "function" == typeof b || "[object Function]" === a.call(b)
      },
      c = function(a) {
        var b = Number(a);
        return isNaN(b) ? 0 : 0 !== b && isFinite(b) ? (b > 0 ? 1 : -1) * Math.floor(Math.abs(b)) : b
      },
      d = Math.pow(2, 53) - 1,
      e = function(a) {
        var b = c(a);
        return Math.min(Math.max(b, 0), d)
      };
    return function(a) {
      var c = this,
        d = Object(a);
      if (null == a) throw new TypeError("Array.from requires an array-like object - not null or undefined");
      var f, g = arguments.length > 1 ? arguments[1] : void 0;
      if ("undefined" != typeof g) {
        if (!b(g)) throw new TypeError("Array.from: when provided, the second argument must be a function");
        arguments.length > 2 && (f = arguments[2])
      }
      for (var h, i = e(d.length), j = b(c) ? Object(new c(i)) : new Array(i), k = 0; k < i;) h = d[k], g ? j[k] = "undefined" == typeof f ? g(h, k) : g.call(f, h, k) : j[k] = h, k += 1;
      return j.length = i, j
    }
  }()), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
    value: function(a) {
      if (null == this) throw new TypeError('"this" is null or not defined');
      var b = Object(this),
        c = b.length >>> 0;
      if ("function" != typeof a) throw new TypeError("predicate must be a function");
      for (var d = arguments[1], e = 0; e < c;) {
        var f = b[e];
        if (a.call(d, f, e, b)) return e;
        e++
      }
      return -1
    }
  }), String.prototype.includes || (String.prototype.includes = function(a, b) {
    "use strict";
    return "number" != typeof b && (b = 0), !(b + a.length > this.length) && this.indexOf(a, b) !== -1
  }), String.prototype.startsWith || (String.prototype.startsWith = function(a, b) {
    return this.substr(b || 0, a.length) === a
  }), Number.isFinite = Number.isFinite ||
    function(a) {
      return "number" == typeof a && isFinite(a)
    }, Number.isNaN = Number.isNaN ||
    function(a) {
      return a !== a
    };
  var g = function() {
    var a = {},
      b = Math,
      c = b.abs,
      d = b.cos,
      e = b.sin,
      f = b.sqrt,
      g = b.min,
      h = b.max,
      i = b.atan2,
      j = b.round,
      k = b.floor,
      l = b.PI,
      m = b.random,
      n = b.pow;
    a.bezier = {
      curveThroughPoints: function(a) {
        for (var b = this.getCurveControlPoints(a), c = ["M", a[0].x, a[0].y], d = 0; d < b[0].length; d++) c.push("C", b[0][d].x, b[0][d].y, b[1][d].x, b[1][d].y, a[d + 1].x, a[d + 1].y);
        return c
      },
      getCurveControlPoints: function(a) {
        var b, c = [],
          d = [],
          e = a.length - 1;
        if (1 == e) return c[0] = q((2 * a[0].x + a[1].x) / 3, (2 * a[0].y + a[1].y) / 3), d[0] = q(2 * c[0].x - a[0].x, 2 * c[0].y - a[0].y), [c, d];
        var f = [];
        for (b = 1; b < e - 1; b++) f[b] = 4 * a[b].x + 2 * a[b + 1].x;
        f[0] = a[0].x + 2 * a[1].x, f[e - 1] = (8 * a[e - 1].x + a[e].x) / 2;
        var g = this.getFirstControlPoints(f);
        for (b = 1; b < e - 1; ++b) f[b] = 4 * a[b].y + 2 * a[b + 1].y;
        f[0] = a[0].y + 2 * a[1].y, f[e - 1] = (8 * a[e - 1].y + a[e].y) / 2;
        var h = this.getFirstControlPoints(f);
        for (b = 0; b < e; b++) c.push(q(g[b], h[b])), b < e - 1 ? d.push(q(2 * a[b + 1].x - g[b + 1], 2 * a[b + 1].y - h[b + 1])) : d.push(q((a[e].x + g[e - 1]) / 2, (a[e].y + h[e - 1]) / 2));
        return [c, d]
      },
      getCurveDivider: function(a, b, c, d) {
        return function(e) {
          var f = p(a, b).pointAt(e),
            g = p(b, c).pointAt(e),
            h = p(c, d).pointAt(e),
            i = p(f, g).pointAt(e),
            j = p(g, h).pointAt(e),
            k = p(i, j).pointAt(e);
          return [{
            p0: a,
            p1: f,
            p2: i,
            p3: k
          }, {
            p0: k,
            p1: j,
            p2: h,
            p3: d
          }]
        }
      },
      getFirstControlPoints: function(a) {
        var b = a.length,
          c = [],
          d = [],
          e = 2;
        c[0] = a[0] / e;
        for (var f = 1; f < b; f++) d[f] = 1 / e, e = (f < b - 1 ? 4 : 3.5) - d[f], c[f] = (a[f] - c[f - 1]) / e;
        for (f = 1; f < b; f++) c[b - f - 1] -= d[b - f] * c[b - f];
        return c
      },
      getInversionSolver: function(a, b, c, d) {
        function e(a, b) {
          var c = f[a],
            d = f[b];
          return function(e) {
            var f = (a % 3 ? 3 : 1) * (b % 3 ? 3 : 1),
              g = e.x * (c.y - d.y) + e.y * (d.x - c.x) + c.x * d.y - c.y * d.x;
            return f * g
          }
        }
        var f = arguments;
        return function(c) {
          var d = 3 * e(2, 3)(b),
            f = e(1, 3)(a) / d,
            g = -e(2, 3)(a) / d,
            h = f * e(3, 1)(c) + g * (e(3, 0)(c) + e(2, 1)(c)) + e(2, 0)(c),
            i = f * e(3, 0)(c) + g * e(2, 0)(c) + e(1, 0)(c);
          return i / (i - h)
        }
      }
    };
    var o = a.Ellipse = function(a, b, c) {
      return this instanceof o ? a instanceof o ? new o(q(a), a.a, a.b) : (a = q(a), this.x = a.x, this.y = a.y, this.a = b, void(this.b = c)) : new o(a, b, c)
    };
    a.Ellipse.fromRect = function(a) {
      return a = r(a), o(a.center(), a.width / 2, a.height / 2)
    }, a.Ellipse.prototype = {
      bbox: function() {
        return r(this.x - this.a, this.y - this.b, 2 * this.a, 2 * this.b)
      },
      clone: function() {
        return o(this)
      },
      normalizedDistance: function(a) {
        var b = a.x,
          c = a.y,
          d = this.a,
          e = this.b,
          f = this.x,
          g = this.y;
        return (b - f) * (b - f) / (d * d) + (c - g) * (c - g) / (e * e)
      },
      inflate: function(a, b) {
        return void 0 === a && (a = 0), void 0 === b && (b = a), this.a += 2 * a, this.b += 2 * b, this
      },
      containsPoint: function(a) {
        return this.normalizedDistance(a) <= 1
      },
      center: function() {
        return q(this.x, this.y)
      },
      tangentTheta: function(b) {
        var c, d, e = 30,
          f = b.x,
          g = b.y,
          h = this.a,
          i = this.b,
          j = this.bbox().center(),
          k = j.x,
          l = j.y,
          m = f > j.x + h / 2,
          n = f < j.x - h / 2;
        return m || n ? (c = f > j.x ? g - e : g + e, d = h * h / (f - k) - h * h * (g - l) * (c - l) / (i * i * (f - k)) + k) : (d = g > j.y ? f + e : f - e, c = i * i / (g - l) - i * i * (f - k) * (d - k) / (h * h * (g - l)) + l), a.point(d, c).theta(b)
      },
      equals: function(a) {
        return !!a && a.x === this.x && a.y === this.y && a.a === this.a && a.b === this.b
      },
      intersectionWithLineFromCenterToPoint: function(a, b) {
        a = q(a), b && a.rotate(q(this.x, this.y), b);
        var c, d = a.x - this.x,
          e = a.y - this.y;
        if (0 === d) return c = this.bbox().pointNearestToPoint(a), b ? c.rotate(q(this.x, this.y), -b) : c;
        var g = e / d,
          h = g * g,
          i = this.a * this.a,
          j = this.b * this.b,
          k = f(1 / (1 / i + h / j));
        k = d < 0 ? -k : k;
        var l = g * k;
        return c = q(this.x + k, this.y + l), b ? c.rotate(q(this.x, this.y), -b) : c
      },
      toString: function() {
        return q(this.x, this.y).toString() + " " + this.a + " " + this.b
      }
    };
    var p = a.Line = function(a, b) {
      return this instanceof p ? a instanceof p ? p(a.start, a.end) : (this.start = q(a), void(this.end = q(b))) : new p(a, b)
    };
    a.Line.prototype = {
      bearing: function() {
        var a = w(this.start.y),
          b = w(this.end.y),
          c = this.start.x,
          f = this.end.x,
          g = w(f - c),
          h = e(g) * d(b),
          j = d(a) * e(b) - e(a) * d(b) * d(g),
          k = v(i(h, j)),
          l = ["NE", "E", "SE", "S", "SW", "W", "NW", "N"],
          m = k - 22.5;
        return m < 0 && (m += 360), m = parseInt(m / 45), l[m]
      },
      clone: function() {
        return p(this.start, this.end)
      },
      equals: function(a) {
        return !!a && this.start.x === a.start.x && this.start.y === a.start.y && this.end.x === a.end.x && this.end.y === a.end.y
      },
      intersect: function(a) {
        if (a instanceof p) {
          var b = q(this.end.x - this.start.x, this.end.y - this.start.y),
            c = q(a.end.x - a.start.x, a.end.y - a.start.y),
            d = b.x * c.y - b.y * c.x,
            e = q(a.start.x - this.start.x, a.start.y - this.start.y),
            f = e.x * c.y - e.y * c.x,
            g = e.x * b.y - e.y * b.x;
          if (0 === d || f * d < 0 || g * d < 0) return null;
          if (d > 0) {
            if (f > d || g > d) return null
          } else if (f < d || g < d) return null;
          return q(this.start.x + f * b.x / d, this.start.y + f * b.y / d)
        }
        if (a instanceof r) {
          var h, i, j = a,
            k = [j.topLine(), j.rightLine(), j.bottomLine(), j.leftLine()],
            l = [],
            m = [];
          for (i = 0; i < k.length; i++) h = this.intersect(k[i]), null !== h && m.indexOf(h.toString()) < 0 && (l.push(h), m.push(h.toString()));
          return l.length > 0 ? l : null
        }
        return null
      },
      length: function() {
        return f(this.squaredLength())
      },
      midpoint: function() {
        return q((this.start.x + this.end.x) / 2, (this.start.y + this.end.y) / 2)
      },
      pointAt: function(a) {
        var b = (1 - a) * this.start.x + a * this.end.x,
          c = (1 - a) * this.start.y + a * this.end.y;
        return q(b, c)
      },
      pointOffset: function(a) {
        return ((this.end.x - this.start.x) * (a.y - this.start.y) - (this.end.y - this.start.y) * (a.x - this.start.x)) / 2
      },
      vector: function() {
        return q(this.end.x - this.start.x, this.end.y - this.start.y)
      },
      closestPoint: function(a) {
        return this.pointAt(this.closestPointNormalizedLength(a))
      },
      closestPointNormalizedLength: function(a) {
        var b = this.vector().dot(p(this.start, a).vector());
        return Math.min(1, Math.max(0, b / this.squaredLength()))
      },
      squaredLength: function() {
        var a = this.start.x,
          b = this.start.y,
          c = this.end.x,
          d = this.end.y;
        return (a -= c) * a + (b -= d) * b
      },
      toString: function() {
        return this.start.toString() + " " + this.end.toString()
      }
    }, a.Line.prototype.intersection = a.Line.prototype.intersect;
    var q = a.Point = function(a, b) {
      if (!(this instanceof q)) return new q(a, b);
      if ("string" == typeof a) {
        var c = a.split(a.indexOf("@") === -1 ? " " : "@");
        a = parseInt(c[0], 10), b = parseInt(c[1], 10)
      } else Object(a) === a && (b = a.y, a = a.x);
      this.x = void 0 === a ? 0 : a, this.y = void 0 === b ? 0 : b
    };
    a.Point.fromPolar = function(a, b, f) {
      f = f && q(f) || q(0, 0);
      var g = c(a * d(b)),
        h = c(a * e(b)),
        i = t(v(b));
      return i < 90 ? h = -h : i < 180 ? (g = -g, h = -h) : i < 270 && (g = -g), q(f.x + g, f.y + h)
    }, a.Point.random = function(a, b, c, d) {
      return q(k(m() * (b - a + 1) + a), k(m() * (d - c + 1) + c))
    }, a.Point.prototype = {
      adhereToRect: function(a) {
        return a.containsPoint(this) ? this : (this.x = g(h(this.x, a.x), a.x + a.width), this.y = g(h(this.y, a.y), a.y + a.height), this)
      },
      bearing: function(a) {
        return p(this, a).bearing()
      },
      changeInAngle: function(a, b, c) {
        return q(this).offset(-a, -b).theta(c) - this.theta(c)
      },
      clone: function() {
        return q(this)
      },
      difference: function(a, b) {
        return Object(a) === a && (b = a.y, a = a.x), q(this.x - (a || 0), this.y - (b || 0))
      },
      distance: function(a) {
        return p(this, a).length()
      },
      squaredDistance: function(a) {
        return p(this, a).squaredLength()
      },
      equals: function(a) {
        return !!a && this.x === a.x && this.y === a.y
      },
      magnitude: function() {
        return f(this.x * this.x + this.y * this.y) || .01
      },
      manhattanDistance: function(a) {
        return c(a.x - this.x) + c(a.y - this.y)
      },
      move: function(a, b) {
        var c = w(q(a).theta(this));
        return this.offset(d(c) * b, -e(c) * b)
      },
      normalize: function(a) {
        var b = (a || 1) / this.magnitude();
        return this.scale(b, b)
      },
      offset: function(a, b) {
        return Object(a) === a && (b = a.y, a = a.x), this.x += a || 0, this.y += b || 0, this
      },
      reflection: function(a) {
        return q(a).move(this, this.distance(a))
      },
      rotate: function(a, b) {
        b = (b + 360) % 360, this.toPolar(a), this.y += w(b);
        var c = q.fromPolar(this.x, this.y, a);
        return this.x = c.x, this.y = c.y, this
      },
      round: function(a) {
        var b = n(10, a || 0);
        return this.x = j(this.x * b) / b, this.y = j(this.y * b) / b, this
      },
      scale: function(a, b, c) {
        return c = c && q(c) || q(0, 0), this.x = c.x + a * (this.x - c.x), this.y = c.y + b * (this.y - c.y), this
      },
      snapToGrid: function(a, b) {
        return this.x = u(this.x, a), this.y = u(this.y, b || a), this
      },
      theta: function(a) {
        a = q(a);
        var b = -(a.y - this.y),
          c = a.x - this.x,
          d = i(b, c);
        return d < 0 && (d = 2 * l + d), 180 * d / l
      },
      angleBetween: function(a, b) {
        var c = this.equals(a) || this.equals(b) ? NaN : this.theta(b) - this.theta(a);
        return c < 0 && (c += 360), c
      },
      vectorAngle: function(a) {
        var b = q(0, 0);
        return b.angleBetween(this, a)
      },
      toJSON: function() {
        return {
          x: this.x,
          y: this.y
        }
      },
      toPolar: function(a) {
        a = a && q(a) || q(0, 0);
        var b = this.x,
          c = this.y;
        return this.x = f((b - a.x) * (b - a.x) + (c - a.y) * (c - a.y)), this.y = w(a.theta(q(b, c))), this
      },
      toString: function() {
        return this.x + "@" + this.y
      },
      update: function(a, b) {
        return this.x = a || 0, this.y = b || 0, this
      },
      dot: function(a) {
        return a ? this.x * a.x + this.y * a.y : NaN
      },
      cross: function(a, b) {
        return a && b ? (b.x - this.x) * (a.y - this.y) - (b.y - this.y) * (a.x - this.x) : NaN
      }
    };
    var r = a.Rect = function(a, b, c, d) {
      return this instanceof r ? (Object(a) === a && (b = a.y, c = a.width, d = a.height, a = a.x), this.x = void 0 === a ? 0 : a, this.y = void 0 === b ? 0 : b, this.width = void 0 === c ? 0 : c, void(this.height = void 0 === d ? 0 : d)) : new r(a, b, c, d)
    };
    a.Rect.fromEllipse = function(a) {
      return a = o(a), r(a.x - a.a, a.y - a.b, 2 * a.a, 2 * a.b)
    }, a.Rect.prototype = {
      bbox: function(a) {
        var b = w(a || 0),
          f = c(e(b)),
          g = c(d(b)),
          h = this.width * g + this.height * f,
          i = this.width * f + this.height * g;
        return r(this.x + (this.width - h) / 2, this.y + (this.height - i) / 2, h, i)
      },
      bottomLeft: function() {
        return q(this.x, this.y + this.height)
      },
      bottomLine: function() {
        return p(this.bottomLeft(), this.corner())
      },
      bottomMiddle: function() {
        return q(this.x + this.width / 2, this.y + this.height)
      },
      center: function() {
        return q(this.x + this.width / 2, this.y + this.height / 2)
      },
      clone: function() {
        return r(this)
      },
      containsPoint: function(a) {
        return a = q(a), a.x >= this.x && a.x <= this.x + this.width && a.y >= this.y && a.y <= this.y + this.height
      },
      containsRect: function(a) {
        var b = r(this).normalize(),
          c = r(a).normalize(),
          d = b.width,
          e = b.height,
          f = c.width,
          g = c.height;
        if (!(d && e && f && g)) return !1;
        var h = b.x,
          i = b.y,
          j = c.x,
          k = c.y;
        return f += j, d += h, g += k, e += i, h <= j && f <= d && i <= k && g <= e
      },
      corner: function() {
        return q(this.x + this.width, this.y + this.height)
      },
      equals: function(a) {
        var b = r(this).normalize(),
          c = r(a).normalize();
        return b.x === c.x && b.y === c.y && b.width === c.width && b.height === c.height
      },
      intersect: function(a) {
        var b = this.origin(),
          c = this.corner(),
          d = a.origin(),
          e = a.corner();
        if (e.x <= b.x || e.y <= b.y || d.x >= c.x || d.y >= c.y) return null;
        var f = Math.max(b.x, d.x),
          g = Math.max(b.y, d.y);
        return r(f, g, Math.min(c.x, e.x) - f, Math.min(c.y, e.y) - g)
      },
      intersectionWithLineFromCenterToPoint: function(a, b) {
        a = q(a);
        var c, d = q(this.x + this.width / 2, this.y + this.height / 2);
        b && a.rotate(d, b);
        for (var e = [p(this.origin(), this.topRight()), p(this.topRight(), this.corner()), p(this.corner(), this.bottomLeft()), p(this.bottomLeft(), this.origin())], f = p(d, a), g = e.length - 1; g >= 0; --g) {
          var h = e[g].intersection(f);
          if (null !== h) {
            c = h;
            break
          }
        }
        return c && b && c.rotate(d, -b), c
      },
      leftLine: function() {
        return p(this.origin(), this.bottomLeft())
      },
      leftMiddle: function() {
        return q(this.x, this.y + this.height / 2)
      },
      moveAndExpand: function(a) {
        return this.x += a.x || 0, this.y += a.y || 0, this.width += a.width || 0, this.height += a.height || 0, this
      },
      offset: function(a, b) {
        return q.prototype.offset.call(this, a, b)
      },
      inflate: function(a, b) {
        return void 0 === a && (a = 0), void 0 === b && (b = a), this.x -= a, this.y -= b, this.width += 2 * a, this.height += 2 * b, this
      },
      normalize: function() {
        var a = this.x,
          b = this.y,
          c = this.width,
          d = this.height;
        return this.width < 0 && (a = this.x + this.width, c = -this.width), this.height < 0 && (b = this.y + this.height, d = -this.height), this.x = a, this.y = b, this.width = c, this.height = d, this
      },
      origin: function() {
        return q(this.x, this.y)
      },
      pointNearestToPoint: function(a) {
        if (a = q(a), this.containsPoint(a)) {
          var b = this.sideNearestToPoint(a);
          switch (b) {
            case "right":
              return q(this.x + this.width, a.y);
            case "left":
              return q(this.x, a.y);
            case "bottom":
              return q(a.x, this.y + this.height);
            case "top":
              return q(a.x, this.y)
          }
        }
        return a.adhereToRect(this)
      },
      rightLine: function() {
        return p(this.topRight(), this.corner())
      },
      rightMiddle: function() {
        return q(this.x + this.width, this.y + this.height / 2)
      },
      round: function(a) {
        var b = n(10, a || 0);
        return this.x = j(this.x * b) / b, this.y = j(this.y * b) / b, this.width = j(this.width * b) / b, this.height = j(this.height * b) / b, this
      },
      scale: function(a, b, c) {
        return c = this.origin().scale(a, b, c), this.x = c.x, this.y = c.y, this.width *= a, this.height *= b, this
      },
      maxRectScaleToFit: function(b, c) {
        b = a.Rect(b), c || (c = b.center());
        var d, e, f, g, h, i, j, k, l = c.x,
          m = c.y;
        d = e = f = g = h = i = j = k = 1 / 0;
        var n = b.origin();
        n.x < l && (d = (this.x - l) / (n.x - l)), n.y < m && (h = (this.y - m) / (n.y - m));
        var o = b.corner();
        o.x > l && (e = (this.x + this.width - l) / (o.x - l)), o.y > m && (i = (this.y + this.height - m) / (o.y - m));
        var p = b.topRight();
        p.x > l && (f = (this.x + this.width - l) / (p.x - l)), p.y < m && (j = (this.y - m) / (p.y - m));
        var q = b.bottomLeft();
        return q.x < l && (g = (this.x - l) / (q.x - l)), q.y > m && (k = (this.y + this.height - m) / (q.y - m)), {
          sx: Math.min(d, e, f, g),
          sy: Math.min(h, i, j, k)
        }
      },
      maxRectUniformScaleToFit: function(a, b) {
        var c = this.maxRectScaleToFit(a, b);
        return Math.min(c.sx, c.sy)
      },
      sideNearestToPoint: function(a) {
        a = q(a);
        var b = a.x - this.x,
          c = this.x + this.width - a.x,
          d = a.y - this.y,
          e = this.y + this.height - a.y,
          f = b,
          g = "left";
        return c < f && (f = c, g = "right"), d < f && (f = d, g = "top"), e < f && (f = e, g = "bottom"), g
      },
      snapToGrid: function(a, b) {
        var c = this.origin().snapToGrid(a, b),
          d = this.corner().snapToGrid(a, b);
        return this.x = c.x, this.y = c.y, this.width = d.x - c.x, this.height = d.y - c.y, this
      },
      topLine: function() {
        return p(this.origin(), this.topRight())
      },
      topMiddle: function() {
        return q(this.x + this.width / 2, this.y)
      },
      topRight: function() {
        return q(this.x + this.width, this.y)
      },
      toJSON: function() {
        return {
          x: this.x,
          y: this.y,
          width: this.width,
          height: this.height
        }
      },
      toString: function() {
        return this.origin().toString() + " " + this.corner().toString()
      },
      union: function(a) {
        a = r(a);
        var b = this.origin(),
          c = this.corner(),
          d = a.origin(),
          e = a.corner(),
          f = Math.min(b.x, d.x),
          g = Math.min(b.y, d.y),
          h = Math.max(c.x, e.x),
          i = Math.max(c.y, e.y);
        return r(f, g, h - f, i - g)
      }
    };
    var s = a.Polyline = function(a) {
      return this instanceof s ? void(this.points = Array.isArray(a) ? a.map(q) : []) : new s(a)
    };
    s.prototype = {
      pointAtLength: function(a) {
        for (var b = this.points, c = 0, d = 0, e = b.length - 1; d < e; d++) {
          var f = b[d],
            g = b[d + 1],
            h = f.distance(g);
          if (c += h, a <= c) return p(g, f).pointAt(h ? (c - a) / h : 0)
        }
        return null
      },
      length: function() {
        for (var a = this.points, b = 0, c = 0, d = a.length - 1; c < d; c++) b += a[c].distance(a[c + 1]);
        return b
      },
      closestPoint: function(a) {
        return this.pointAtLength(this.closestPointLength(a))
      },
      closestPointLength: function(a) {
        for (var b, c = this.points, d = 1 / 0, e = 0, f = 0, g = c.length - 1; f < g; f++) {
          var h = p(c[f], c[f + 1]),
            i = h.length(),
            j = h.closestPointNormalizedLength(a),
            k = h.pointAt(j),
            l = k.squaredDistance(a);
          l < d && (d = l, b = e + j * i), e += i
        }
        return b
      },
      toString: function() {
        return this.points + ""
      },
      convexHull: function() {
        var a, b, c, d = this.points;
        for (b = d.length, a = 0; a < b; a++) void 0 === c ? c = d[a] : d[a].y < c.y ? c = d[a] : d[a].y === c.y && d[a].x > c.x && (c = d[a]);
        var e = [];
        for (b = d.length, a = 0; a < b; a++) {
          var f = c.theta(d[a]);
          0 === f && (f = 360);
          var g = [d[a], a, f];
          e.push(g)
        }
        if (e.sort(function(a, b) {
            var c = a[2] - b[2];
            return 0 === c && (c = b[1] - a[1]), c
          }), e.length > 2) {
          var h = e[e.length - 1];
          e.unshift(h)
        }
        for (var i, j, k, l, m, n, o = {}, p = []; 0 !== e.length;) if (i = e.pop(), j = i[0], !o.hasOwnProperty(i[0] + "@@" + i[1])) for (var q = !1; !q;) if (p.length < 2) p.push(i), q = !0;
        else {
          k = p.pop(), l = k[0], m = p.pop(), n = m[0];
          var r = n.cross(l, j);
          if (r < 0) p.push(m), p.push(k), p.push(i), q = !0;
          else if (0 === r) {
            var t = 1e-10,
              u = l.angleBetween(n, j);
            Math.abs(u - 180) < t ? (o[k[0] + "@@" + k[1]] = l, p.push(m)) : l.equals(j) || n.equals(l) ? (o[k[0] + "@@" + k[1]] = l, p.push(m)) : Math.abs((u + 1) % 360 - 1) < t && (p.push(m), e.push(k))
          } else o[k[0] + "@@" + k[1]] = l, p.push(m)
        }
        p.length > 2 && p.pop();
        var v, w = -1;
        for (b = p.length, a = 0; a < b; a++) {
          var x = p[a][1];
          (void 0 === v || x < v) && (v = x, w = a)
        }
        var y = [];
        if (w > 0) {
          var z = p.slice(w),
            A = p.slice(0, w);
          y = z.concat(A)
        } else y = p;
        var B = [];
        for (b = y.length, a = 0; a < b; a++) B.push(y[a][0]);
        return s(B)
      }
    }, a.scale = {
      linear: function(a, b, c) {
        var d = a[1] - a[0],
          e = b[1] - b[0];
        return (c - a[0]) / d * e + b[0] || 0
      }
    };
    var t = a.normalizeAngle = function(a) {
        return a % 360 + (a < 0 ? 360 : 0)
      },
      u = a.snapToGrid = function(a, b) {
        return b * Math.round(a / b)
      },
      v = a.toDeg = function(a) {
        return 180 * a / l % 360
      },
      w = a.toRad = function(a, b) {
        return b = b || !1, a = b ? a : a % 360, a * l / 180
      };
    return a.ellipse = a.Ellipse, a.line = a.Line, a.point = a.Point, a.rect = a.Rect, a
  }();
  var V, Vectorizer;
  V = Vectorizer = function() {
    "use strict";
    var a = "object" == typeof window && !(!window.SVGAngle && !document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"));
    if (!a) return function() {
      throw new Error("SVG is required to use Vectorizer.")
    };
    var b = {
        xmlns: "http://www.w3.org/2000/svg",
        xml: "http://www.w3.org/XML/1998/namespace",
        xlink: "http://www.w3.org/1999/xlink"
      },
      c = "1.1",
      d = function(a, c, e) {
        if (!(this instanceof d)) return d.apply(Object.create(d.prototype), arguments);
        if (a) {
          if (d.isV(a) && (a = a.node), c = c || {}, d.isString(a)) {
            if ("svg" === a.toLowerCase()) a = d.createSvgDocument();
            else if ("<" === a[0]) {
              var f = d.createSvgDocument(a);
              if (f.childNodes.length > 1) {
                var g, h, i = [];
                for (g = 0, h = f.childNodes.length; g < h; g++) {
                  var j = f.childNodes[g];
                  i.push(new d(document.importNode(j, !0)))
                }
                return i
              }
              a = document.importNode(f.firstChild, !0)
            } else a = document.createElementNS(b.xmlns, a);
            d.ensureId(a)
          }
          return this.node = a, this.setAttributes(c), e && this.append(e), this
        }
      };
    d.prototype.getTransformToElement = function(a) {
      return a = d.toNode(a), a.getScreenCTM().inverse().multiply(this.node.getScreenCTM())
    }, d.prototype.transform = function(a, b) {
      var c = this.node;
      if (d.isUndefined(a)) return d.transformStringToMatrix(this.attr("transform"));
      if (b && b.absolute) return this.attr("transform", d.matrixToTransformString(a));
      var e = d.createSVGTransform(a);
      return c.transform.baseVal.appendItem(e), this
    }, d.prototype.translate = function(a, b, c) {
      c = c || {}, b = b || 0;
      var e = this.attr("transform") || "",
        f = d.parseTransformString(e);
      if (e = f.value, d.isUndefined(a)) return f.translate;
      e = e.replace(/translate\([^\)]*\)/g, "").trim();
      var g = c.absolute ? a : f.translate.tx + a,
        h = c.absolute ? b : f.translate.ty + b,
        i = "translate(" + g + "," + h + ")";
      return this.attr("transform", (i + " " + e).trim()), this
    }, d.prototype.rotate = function(a, b, c, e) {
      e = e || {};
      var f = this.attr("transform") || "",
        g = d.parseTransformString(f);
      if (f = g.value, d.isUndefined(a)) return g.rotate;
      f = f.replace(/rotate\([^\)]*\)/g, "").trim(), a %= 360;
      var h = e.absolute ? a : g.rotate.angle + a,
        i = void 0 !== b && void 0 !== c ? "," + b + "," + c : "",
        j = "rotate(" + h + i + ")";
      return this.attr("transform", (f + " " + j).trim()), this
    }, d.prototype.scale = function(a, b) {
      b = d.isUndefined(b) ? a : b;
      var c = this.attr("transform") || "",
        e = d.parseTransformString(c);
      if (c = e.value, d.isUndefined(a)) return e.scale;
      c = c.replace(/scale\([^\)]*\)/g, "").trim();
      var f = "scale(" + a + "," + b + ")";
      return this.attr("transform", (c + " " + f).trim()), this
    }, d.prototype.bbox = function(a, b) {
      var c, e = this.node,
        f = e.ownerSVGElement;
      if (!f) return g.Rect(0, 0, 0, 0);
      try {
        c = e.getBBox()
      } catch (a) {
        c = {
          x: e.clientLeft,
          y: e.clientTop,
          width: e.clientWidth,
          height: e.clientHeight
        }
      }
      if (a) return g.Rect(c);
      var h = this.getTransformToElement(b || f);
      return d.transformRect(c, h)
    }, d.prototype.getBBox = function(a) {
      var b, c = {},
        e = this.node,
        f = e.ownerSVGElement;
      if (!f) return g.Rect(0, 0, 0, 0);
      if (a && (a.target && (c.target = d.toNode(a.target)), a.recursive && (c.recursive = a.recursive)), c.recursive) {
        var h = this.children(),
          i = h.length;
        if (0 === i) return this.getBBox({
          target: c.target,
          recursive: !1
        });
        c.target || (c.target = this);
        for (var j = 0; j < i; j++) {
          var k, l = h[j];
          k = 0 === l.children().length ? l.getBBox({
            target: c.target,
            recursive: !1
          }) : l.getBBox({
            target: c.target,
            recursive: !0
          }), b = b ? b.union(k) : k
        }
        return b
      }
      try {
        b = e.getBBox()
      } catch (a) {
        b = {
          x: e.clientLeft,
          y: e.clientTop,
          width: e.clientWidth,
          height: e.clientHeight
        }
      }
      if (c.target) {
        var m = this.getTransformToElement(c.target);
        return d.transformRect(b, m)
      }
      return g.Rect(b)
    }, d.prototype.text = function(a, b) {
      a = d.sanitizeText(a), b = b || {};
      var c, e = b.eol,
        f = a.split("\n");
      a ? this.removeAttr("display") : this.attr("display", "none"), this.attr("xml:space", "preserve"), this.node.textContent = "";
      var g = this.node;
      if (b.textPath) {
        var h = this.find("defs");
        0 === h.length && (h = d("defs"), this.append(h));
        var i = Object(b.textPath) === b.textPath ? b.textPath.d : b.textPath;
        if (i) {
          var j = d("path", {
            d: i
          });
          h.append(j)
        }
        var k = d("textPath");
        !b.textPath["xlink:href"] && j && k.attr("xlink:href", "#" + j.node.id), Object(b.textPath) === b.textPath && k.attr(b.textPath), this.append(k), g = k.node
      }
      var l = 0,
        m = (void 0 !== b.x ? b.x : this.attr("x")) || 0,
        n = b.lineHeight || "1em";
      "auto" === b.lineHeight && (n = "1.5em");
      for (var o = 0, p = 0; p < f.length; p++) {
        var q = {
          class: "v-line"
        };
        0 === p ? q.dy = "0em" : (q.dy = n, q.x = m);
        var r = d("tspan", q),
          s = f.length - 1,
          t = f[p];
        if (t) {
          var u = 0;
          if (b.annotations) {
            for (var v = d.annotateString(f[p], d.isArray(b.annotations) ? b.annotations : [b.annotations], {
              offset: -l,
              includeAnnotationIndices: b.includeAnnotationIndices
            }), w = v.length - 1, x = 0; x < v.length; x++) {
              var y = v[x];
              if (d.isObject(y)) {
                var z = parseFloat(y.attrs["font-size"]);
                z && z > u && (u = z), c = d("tspan", y.attrs), b.includeAnnotationIndices && c.attr("annotations", y.annotations), y.attrs.class && c.addClass(y.attrs.class), e && x === w && p !== s && (y.t += e), c.node.textContent = y.t
              } else e && x === w && p !== s && (y += e), c = document.createTextNode(y || " ");
              r.append(c)
            }
            "auto" === b.lineHeight && u && 0 !== p && r.attr("dy", 1.2 * u + "px")
          } else e && p !== s && (t += e), r.node.textContent = t;
          0 === p && (o = u)
        } else r.addClass("v-empty-line"), r.node.style.fillOpacity = 0, r.node.style.strokeOpacity = 0, r.node.textContent = "-";
        d(g).append(r), l += t.length + 1
      }
      var A = this.attr("y");
      return null === A && this.attr("y", o || "0.8em"), this
    }, d.prototype.removeAttr = function(a) {
      var b = d.qualifyAttr(a),
        c = this.node;
      return b.ns ? c.hasAttributeNS(b.ns, b.local) && c.removeAttributeNS(b.ns, b.local) : c.hasAttribute(a) && c.removeAttribute(a), this
    }, d.prototype.attr = function(a, b) {
      if (d.isUndefined(a)) {
        for (var c = this.node.attributes, e = {}, f = 0; f < c.length; f++) e[c[f].name] = c[f].value;
        return e
      }
      if (d.isString(a) && d.isUndefined(b)) return this.node.getAttribute(a);
      if ("object" == typeof a) for (var g in a) a.hasOwnProperty(g) && this.setAttribute(g, a[g]);
      else this.setAttribute(a, b);
      return this
    }, d.prototype.remove = function() {
      return this.node.parentNode && this.node.parentNode.removeChild(this.node), this
    }, d.prototype.empty = function() {
      for (; this.node.firstChild;) this.node.removeChild(this.node.firstChild);
      return this
    }, d.prototype.setAttributes = function(a) {
      for (var b in a) a.hasOwnProperty(b) && this.setAttribute(b, a[b]);
      return this
    }, d.prototype.append = function(a) {
      d.isArray(a) || (a = [a]);
      for (var b = 0, c = a.length; b < c; b++) this.node.appendChild(d.toNode(a[b]));
      return this
    }, d.prototype.prepend = function(a) {
      var b = this.node.firstChild;
      return b ? d(b).before(a) : this.append(a)
    }, d.prototype.before = function(a) {
      var b = this.node,
        c = b.parentNode;
      if (c) {
        d.isArray(a) || (a = [a]);
        for (var e = 0, f = a.length; e < f; e++) c.insertBefore(d.toNode(a[e]), b)
      }
      return this
    }, d.prototype.appendTo = function(a) {
      return d.toNode(a).appendChild(this.node), this
    }, d.prototype.svg = function() {
      return this.node instanceof window.SVGSVGElement ? this : d(this.node.ownerSVGElement)
    }, d.prototype.defs = function() {
      var a = this.svg().node.getElementsByTagName("defs");
      return a && a.length ? d(a[0]) : void 0
    }, d.prototype.clone = function() {
      var a = d(this.node.cloneNode(!0));
      return a.node.id = d.uniqueId(), a
    }, d.prototype.findOne = function(a) {
      var b = this.node.querySelector(a);
      return b ? d(b) : void 0
    }, d.prototype.find = function(a) {
      var b = [],
        c = this.node.querySelectorAll(a);
      if (c) for (var e = 0; e < c.length; e++) b.push(d(c[e]));
      return b
    }, d.prototype.children = function() {
      for (var a = this.node.childNodes, b = [], c = 0; c < a.length; c++) {
        var e = a[c];
        1 === e.nodeType && b.push(d(a[c]))
      }
      return b
    }, d.prototype.index = function() {
      for (var a = 0, b = this.node.previousSibling; b;) 1 === b.nodeType && a++, b = b.previousSibling;
      return a
    }, d.prototype.findParentByClass = function(a, b) {
      for (var c = this.node.ownerSVGElement, e = this.node.parentNode; e && e !== b && e !== c;) {
        var f = d(e);
        if (f.hasClass(a)) return f;
        e = e.parentNode
      }
      return null
    }, d.prototype.contains = function(a) {
      var b = this.node,
        c = d.toNode(a),
        e = c && c.parentNode;
      return b === e || !! (e && 1 === e.nodeType && 16 & b.compareDocumentPosition(e))
    }, d.prototype.toLocalPoint = function(a, b) {
      var c = this.svg().node,
        d = c.createSVGPoint();
      d.x = a, d.y = b;
      try {
        var e = d.matrixTransform(c.getScreenCTM().inverse()),
          f = this.getTransformToElement(c).inverse()
      } catch (a) {
        return d
      }
      return e.matrixTransform(f)
    }, d.prototype.translateCenterToPoint = function(a) {
      var b = this.getBBox({
          target: this.svg()
        }),
        c = b.center();
      return this.translate(a.x - c.x, a.y - c.y), this
    }, d.prototype.translateAndAutoOrient = function(a, b, c) {
      var e = this.scale();
      this.attr("transform", ""), this.scale(e.sx, e.sy);
      var f = this.svg().node,
        h = this.getBBox({
          target: c || f
        }),
        i = f.createSVGTransform();
      i.setTranslate(-h.x - h.width / 2, -h.y - h.height / 2);
      var j = f.createSVGTransform(),
        k = g.point(a).changeInAngle(a.x - b.x, a.y - b.y, b);
      j.setRotate(k, 0, 0);
      var l = f.createSVGTransform(),
        m = g.point(a).move(b, h.width / 2);
      l.setTranslate(a.x + (a.x - m.x), a.y + (a.y - m.y));
      var n = this.getTransformToElement(c || f),
        o = f.createSVGTransform();
      o.setMatrix(l.matrix.multiply(j.matrix.multiply(i.matrix.multiply(n))));
      var p = d.decomposeMatrix(o.matrix);
      return this.translate(p.translateX, p.translateY), this.rotate(p.rotation), this
    }, d.prototype.animateAlongPath = function(a, b) {
      b = d.toNode(b);
      var c = d.ensureId(b),
        e = d("animateMotion", a),
        f = d("mpath", {
          "xlink:href": "#" + c
        });
      e.append(f), this.append(e);
      try {
        e.node.beginElement()
      } catch (a) {
        if ("fake" === document.documentElement.getAttribute("smiling")) {
          var g = e.node;
          g.animators = [];
          var h = g.getAttribute("id");
          h && (id2anim[h] = g);
          for (var i = getTargets(g), j = 0, k = i.length; j < k; j++) {
            var l = i[j],
              m = new Animator(g, l, j);
            animators.push(m), g.animators[j] = m, m.register()
          }
        }
      }
      return this
    }, d.prototype.hasClass = function(a) {
      return new RegExp("(\\s|^)" + a + "(\\s|$)").test(this.node.getAttribute("class"))
    }, d.prototype.addClass = function(a) {
      if (!this.hasClass(a)) {
        var b = this.node.getAttribute("class") || "";
        this.node.setAttribute("class", (b + " " + a).trim())
      }
      return this
    }, d.prototype.removeClass = function(a) {
      if (this.hasClass(a)) {
        var b = this.node.getAttribute("class").replace(new RegExp("(\\s|^)" + a + "(\\s|$)", "g"), "$2");
        this.node.setAttribute("class", b)
      }
      return this
    }, d.prototype.toggleClass = function(a, b) {
      var c = d.isUndefined(b) ? this.hasClass(a) : !b;
      return c ? this.removeClass(a) : this.addClass(a), this
    }, d.prototype.sample = function(a) {
      a = a || 1;
      for (var b, c = this.node, d = c.getTotalLength(), e = [], f = 0; f < d;) b = c.getPointAtLength(f), e.push({
        x: b.x,
        y: b.y,
        distance: f
      }), f += a;
      return e
    }, d.prototype.convertToPath = function() {
      var a = d("path");
      a.attr(this.attr());
      var b = this.convertToPathData();
      return b && a.attr("d", b), a
    }, d.prototype.convertToPathData = function() {
      var a = this.node.tagName.toUpperCase();
      switch (a) {
        case "PATH":
          return this.attr("d");
        case "LINE":
          return d.convertLineToPathData(this.node);
        case "POLYGON":
          return d.convertPolygonToPathData(this.node);
        case "POLYLINE":
          return d.convertPolylineToPathData(this.node);
        case "ELLIPSE":
          return d.convertEllipseToPathData(this.node);
        case "CIRCLE":
          return d.convertCircleToPathData(this.node);
        case "RECT":
          return d.convertRectToPathData(this.node)
      }
      throw new Error(a + " cannot be converted to PATH.")
    }, d.prototype.findIntersection = function(a, b) {
      var c = this.svg().node;
      b = b || c;
      var e = this.getBBox({
          target: b
        }),
        f = e.center();
      if (e.intersectionWithLineFromCenterToPoint(a)) {
        var h, i = this.node.localName.toUpperCase();
        if ("RECT" === i) {
          var j = g.rect(parseFloat(this.attr("x") || 0), parseFloat(this.attr("y") || 0), parseFloat(this.attr("width")), parseFloat(this.attr("height"))),
            k = this.getTransformToElement(b),
            l = d.decomposeMatrix(k),
            m = c.createSVGTransform();
          m.setRotate(-l.rotation, f.x, f.y);
          var n = d.transformRect(j, m.matrix.multiply(k));
          h = g.rect(n).intersectionWithLineFromCenterToPoint(a, l.rotation)
        } else if ("PATH" === i || "POLYGON" === i || "POLYLINE" === i || "CIRCLE" === i || "ELLIPSE" === i) {
          var o, p, q, r, s, t, u = "PATH" === i ? this : this.convertToPath(),
            v = u.sample(),
            w = 1 / 0,
            x = [];
          for (o = 0; o < v.length; o++) p = v[o], q = d.createSVGPoint(p.x, p.y), q = q.matrixTransform(this.getTransformToElement(b)), p = g.point(q), r = p.distance(f), s = 1.1 * p.distance(a), t = r + s, t < w ? (w = t, x = [{
            sample: p,
            refDistance: s
          }]) : t < w + 1 && x.push({
              sample: p,
              refDistance: s
            });
          x.sort(function(a, b) {
            return a.refDistance - b.refDistance
          }), x[0] && (h = x[0].sample)
        }
        return h
      }
    }, d.prototype.setAttribute = function(a, b) {
      var c = this.node;
      if (null === b) return this.removeAttr(a), this;
      var e = d.qualifyAttr(a);
      return e.ns ? c.setAttributeNS(e.ns, a, b) : "id" === a ? c.id = b : c.setAttribute(a, b), this
    }, d.createSvgDocument = function(a) {
      var e = '<svg xmlns="' + b.xmlns + '" xmlns:xlink="' + b.xlink + '" version="' + c + '">' + (a || "") + "</svg>",
        f = d.parseXML(e, {
          async: !1
        });
      return f.documentElement
    }, d.idCounter = 0, d.uniqueId = function() {
      return "v-" + ++d.idCounter
    }, d.toNode = function(a) {
      return d.isV(a) ? a.node : a.nodeName && a || a[0]
    }, d.ensureId = function(a) {
      return a = d.toNode(a), a.id || (a.id = d.uniqueId())
    }, d.sanitizeText = function(a) {
      return (a || "").replace(/ /g, " ")
    }, d.isUndefined = function(a) {
      return "undefined" == typeof a
    }, d.isString = function(a) {
      return "string" == typeof a
    }, d.isObject = function(a) {
      return a && "object" == typeof a
    }, d.isArray = Array.isArray, d.parseXML = function(a, b) {
      b = b || {};
      var c;
      try {
        var e = new DOMParser;
        d.isUndefined(b.async) || (e.async = b.async), c = e.parseFromString(a, "text/xml")
      } catch (a) {
        c = void 0
      }
      if (!c || c.getElementsByTagName("parsererror").length) throw new Error("Invalid XML: " + a);
      return c
    }, d.qualifyAttr = function(a) {
      if (a.indexOf(":") !== -1) {
        var c = a.split(":");
        return {
          ns: b[c[0]],
          local: c[1]
        }
      }
      return {
        ns: null,
        local: a
      }
    }, d.transformRegex = /(\w+)\(([^,)]+),?([^)]+)?\)/gi, d.transformSeparatorRegex = /[ ,]+/, d.transformationListRegex = /^(\w+)\((.*)\)/, d.transformStringToMatrix = function(a) {
      var b = d.createSVGMatrix(),
        c = a && a.match(d.transformRegex);
      if (!c) return b;
      for (var e = 0, f = c.length; e < f; e++) {
        var g = c[e],
          h = g.match(d.transformationListRegex);
        if (h) {
          var i, j, k, l, m, n = d.createSVGMatrix(),
            o = h[2].split(d.transformSeparatorRegex);
          switch (h[1].toLowerCase()) {
            case "scale":
              i = parseFloat(o[0]), j = void 0 === o[1] ? i : parseFloat(o[1]), n = n.scaleNonUniform(i, j);
              break;
            case "translate":
              k = parseFloat(o[0]), l = parseFloat(o[1]), n = n.translate(k, l);
              break;
            case "rotate":
              m = parseFloat(o[0]), k = parseFloat(o[1]) || 0, l = parseFloat(o[2]) || 0, n = 0 !== k || 0 !== l ? n.translate(k, l).rotate(m).translate(-k, -l) : n.rotate(m);
              break;
            case "skewx":
              m = parseFloat(o[0]), n = n.skewX(m);
              break;
            case "skewy":
              m = parseFloat(o[0]), n = n.skewY(m);
              break;
            case "matrix":
              n.a = parseFloat(o[0]), n.b = parseFloat(o[1]), n.c = parseFloat(o[2]), n.d = parseFloat(o[3]), n.e = parseFloat(o[4]), n.f = parseFloat(o[5]);
              break;
            default:
              continue
          }
          b = b.multiply(n)
        }
      }
      return b
    }, d.matrixToTransformString = function(a) {
      return a || (a = !0), "matrix(" + (void 0 !== a.a ? a.a : 1) + "," + (void 0 !== a.b ? a.b : 0) + "," + (void 0 !== a.c ? a.c : 0) + "," + (void 0 !== a.d ? a.d : 1) + "," + (void 0 !== a.e ? a.e : 0) + "," + (void 0 !== a.f ? a.f : 0) + ")"
    }, d.parseTransformString = function(a) {
      var b, c, e;
      if (a) {
        var f = d.transformSeparatorRegex;
        if (a.trim().indexOf("matrix") >= 0) {
          var g = d.transformStringToMatrix(a),
            h = d.decomposeMatrix(g);
          b = [h.translateX, h.translateY], e = [h.scaleX, h.scaleY], c = [h.rotation];
          var i = [];
          0 === b[0] && 0 === b[0] || i.push("translate(" + b + ")"), 1 === e[0] && 1 === e[1] || i.push("scale(" + e + ")"), 0 !== c[0] && i.push("rotate(" + c + ")"), a = i.join(" ")
        } else {
          var j = a.match(/translate\((.*?)\)/);
          j && (b = j[1].split(f));
          var k = a.match(/rotate\((.*?)\)/);
          k && (c = k[1].split(f));
          var l = a.match(/scale\((.*?)\)/);
          l && (e = l[1].split(f))
        }
      }
      var m = e && e[0] ? parseFloat(e[0]) : 1;
      return {
        value: a,
        translate: {
          tx: b && b[0] ? parseInt(b[0], 10) : 0,
          ty: b && b[1] ? parseInt(b[1], 10) : 0
        },
        rotate: {
          angle: c && c[0] ? parseInt(c[0], 10) : 0,
          cx: c && c[1] ? parseInt(c[1], 10) : void 0,
          cy: c && c[2] ? parseInt(c[2], 10) : void 0
        },
        scale: {
          sx: m,
          sy: e && e[1] ? parseFloat(e[1]) : m
        }
      }
    }, d.deltaTransformPoint = function(a, b) {
      var c = b.x * a.a + b.y * a.c + 0,
        d = b.x * a.b + b.y * a.d + 0;
      return {
        x: c,
        y: d
      }
    }, d.decomposeMatrix = function(a) {
      var b = d.deltaTransformPoint(a, {
          x: 0,
          y: 1
        }),
        c = d.deltaTransformPoint(a, {
          x: 1,
          y: 0
        }),
        e = 180 / Math.PI * Math.atan2(b.y, b.x) - 90,
        f = 180 / Math.PI * Math.atan2(c.y, c.x);
      return {
        translateX: a.e,
        translateY: a.f,
        scaleX: Math.sqrt(a.a * a.a + a.b * a.b),
        scaleY: Math.sqrt(a.c * a.c + a.d * a.d),
        skewX: e,
        skewY: f,
        rotation: e
      }
    }, d.matrixToScale = function(a) {
      var b, c, e, f;
      return a ? (b = d.isUndefined(a.a) ? 1 : a.a, f = d.isUndefined(a.d) ? 1 : a.d, c = a.b, e = a.c) : b = f = 1, {
        sx: c ? Math.sqrt(b * b + c * c) : b,
        sy: e ? Math.sqrt(e * e + f * f) : f
      }
    }, d.matrixToRotate = function(a) {
      var b = {
        x: 0,
        y: 1
      };
      return a && (b = d.deltaTransformPoint(a, b)), {
        angle: g.normalizeAngle(g.toDeg(Math.atan2(b.y, b.x)) - 90)
      }
    }, d.matrixToTranslate = function(a) {
      return {
        tx: a && a.e || 0,
        ty: a && a.f || 0
      }
    }, d.isV = function(a) {
      return a instanceof d
    }, d.isVElement = d.isV;
    var e = d("svg").node;
    return d.createSVGMatrix = function(a) {
      var b = e.createSVGMatrix();
      for (var c in a) b[c] = a[c];
      return b
    }, d.createSVGTransform = function(a) {
      return d.isUndefined(a) ? e.createSVGTransform() : (a instanceof SVGMatrix || (a = d.createSVGMatrix(a)), e.createSVGTransformFromMatrix(a))
    }, d.createSVGPoint = function(a, b) {
      var c = e.createSVGPoint();
      return c.x = a, c.y = b, c
    }, d.transformRect = function(a, b) {
      var c = e.createSVGPoint();
      c.x = a.x, c.y = a.y;
      var d = c.matrixTransform(b);
      c.x = a.x + a.width, c.y = a.y;
      var f = c.matrixTransform(b);
      c.x = a.x + a.width, c.y = a.y + a.height;
      var h = c.matrixTransform(b);
      c.x = a.x, c.y = a.y + a.height;
      var i = c.matrixTransform(b),
        j = Math.min(d.x, f.x, h.x, i.x),
        k = Math.max(d.x, f.x, h.x, i.x),
        l = Math.min(d.y, f.y, h.y, i.y),
        m = Math.max(d.y, f.y, h.y, i.y);
      return g.Rect(j, l, k - j, m - l)
    }, d.transformPoint = function(a, b) {
      return g.Point(d.createSVGPoint(a.x, a.y).matrixTransform(b))
    }, d.styleToObject = function(a) {
      for (var b = {}, c = a.split(";"), d = 0; d < c.length; d++) {
        var e = c[d],
          f = e.split("=");
        b[f[0].trim()] = f[1].trim()
      }
      return b
    }, d.createSlicePathData = function(a, b, c, d) {
      var e = 2 * Math.PI - 1e-6,
        f = a,
        g = b,
        h = c,
        i = d,
        j = (i < h && (j = h, h = i, i = j), i - h),
        k = j < Math.PI ? "0" : "1",
        l = Math.cos(h),
        m = Math.sin(h),
        n = Math.cos(i),
        o = Math.sin(i);
      return j >= e ? f ? "M0," + g + "A" + g + "," + g + " 0 1,1 0," + -g + "A" + g + "," + g + " 0 1,1 0," + g + "M0," + f + "A" + f + "," + f + " 0 1,0 0," + -f + "A" + f + "," + f + " 0 1,0 0," + f + "Z" : "M0," + g + "A" + g + "," + g + " 0 1,1 0," + -g + "A" + g + "," + g + " 0 1,1 0," + g + "Z" : f ? "M" + g * l + "," + g * m + "A" + g + "," + g + " 0 " + k + ",1 " + g * n + "," + g * o + "L" + f * n + "," + f * o + "A" + f + "," + f + " 0 " + k + ",0 " + f * l + "," + f * m + "Z" : "M" + g * l + "," + g * m + "A" + g + "," + g + " 0 " + k + ",1 " + g * n + "," + g * o + "L0,0Z"
    }, d.mergeAttrs = function(a, b) {
      for (var c in b)"class" === c ? a[c] = a[c] ? a[c] + " " + b[c] : b[c] : "style" === c ? d.isObject(a[c]) && d.isObject(b[c]) ? a[c] = d.mergeAttrs(a[c], b[c]) : d.isObject(a[c]) ? a[c] = d.mergeAttrs(a[c], d.styleToObject(b[c])) : d.isObject(b[c]) ? a[c] = d.mergeAttrs(d.styleToObject(a[c]), b[c]) : a[c] = d.mergeAttrs(d.styleToObject(a[c]), d.styleToObject(b[c])) : a[c] = b[c];
      return a
    }, d.annotateString = function(a, b, c) {
      b = b || [], c = c || {};
      for (var e, f, g, h = c.offset || 0, i = [], j = [], k = 0; k < a.length; k++) {
        f = j[k] = a[k];
        for (var l = 0; l < b.length; l++) {
          var m = b[l],
            n = m.start + h,
            o = m.end + h;
          k >= n && k < o && (d.isObject(f) ? f.attrs = d.mergeAttrs(d.mergeAttrs({}, f.attrs), m.attrs) : f = j[k] = {
            t: a[k],
            attrs: m.attrs
          }, c.includeAnnotationIndices && (f.annotations || (f.annotations = [])).push(l))
        }
        g = j[k - 1], g ? d.isObject(f) && d.isObject(g) ? JSON.stringify(f.attrs) === JSON.stringify(g.attrs) ? e.t += f.t : (i.push(e), e = f) : d.isObject(f) ? (i.push(e), e = f) : d.isObject(g) ? (i.push(e), e = f) : e = (e || "") + f : e = f
      }
      return e && i.push(e), i
    }, d.findAnnotationsAtIndex = function(a, b) {
      var c = [];
      return a && a.forEach(function(a) {
        a.start < b && b <= a.end && c.push(a)
      }), c
    }, d.findAnnotationsBetweenIndexes = function(a, b, c) {
      var d = [];
      return a && a.forEach(function(a) {
        (b >= a.start && b < a.end || c > a.start && c <= a.end || a.start >= b && a.end < c) && d.push(a)
      }), d
    }, d.shiftAnnotations = function(a, b, c) {
      return a && a.forEach(function(a) {
        a.start < b && a.end >= b ? a.end += c : a.start >= b && (a.start += c, a.end += c)
      }), a
    }, d.convertLineToPathData = function(a) {
      a = d(a);
      var b = ["M", a.attr("x1"), a.attr("y1"), "L", a.attr("x2"), a.attr("y2")].join(" ");
      return b
    }, d.convertPolygonToPathData = function(a) {
      var b = d.getPointsFromSvgNode(d(a).node);
      return b.length > 0 ? d.svgPointsToPath(b) + " Z" : null
    }, d.convertPolylineToPathData = function(a) {
      var b = d.getPointsFromSvgNode(d(a).node);
      return b.length > 0 ? d.svgPointsToPath(b) : null
    }, d.svgPointsToPath = function(a) {
      var b;
      for (b = 0; b < a.length; b++) a[b] = a[b].x + " " + a[b].y;
      return "M " + a.join(" L")
    }, d.getPointsFromSvgNode = function(a) {
      a = d.toNode(a);
      var b = [],
        c = a.points;
      if (c) for (var e = 0; e < c.numberOfItems; e++) b.push(c.getItem(e));
      return b
    }, d.KAPPA = .5522847498307935, d.convertCircleToPathData = function(a) {
      a = d(a);
      var b = parseFloat(a.attr("cx")) || 0,
        c = parseFloat(a.attr("cy")) || 0,
        e = parseFloat(a.attr("r")),
        f = e * d.KAPPA,
        g = ["M", b, c - e, "C", b + f, c - e, b + e, c - f, b + e, c, "C", b + e, c + f, b + f, c + e, b, c + e, "C", b - f, c + e, b - e, c + f, b - e, c, "C", b - e, c - f, b - f, c - e, b, c - e, "Z"].join(" ");
      return g
    }, d.convertEllipseToPathData = function(a) {
      a = d(a);
      var b = parseFloat(a.attr("cx")) || 0,
        c = parseFloat(a.attr("cy")) || 0,
        e = parseFloat(a.attr("rx")),
        f = parseFloat(a.attr("ry")) || e,
        g = e * d.KAPPA,
        h = f * d.KAPPA,
        i = ["M", b, c - f, "C", b + g, c - f, b + e, c - h, b + e, c, "C", b + e, c + h, b + g, c + f, b, c + f, "C", b - g, c + f, b - e, c + h, b - e, c, "C", b - e, c - h, b - g, c - f, b, c - f, "Z"].join(" ");
      return i
    }, d.convertRectToPathData = function(a) {
      return a = d(a), d.rectToPath({
        x: parseFloat(a.attr("x")) || 0,
        y: parseFloat(a.attr("y")) || 0,
        width: parseFloat(a.attr("width")) || 0,
        height: parseFloat(a.attr("height")) || 0,
        rx: parseFloat(a.attr("rx")) || 0,
        ry: parseFloat(a.attr("ry")) || 0
      })
    }, d.rectToPath = function(a) {
      var b, c = a.x,
        d = a.y,
        e = a.width,
        f = a.height,
        g = Math.min(a.rx || a["top-rx"] || 0, e / 2),
        h = Math.min(a.rx || a["bottom-rx"] || 0, e / 2),
        i = Math.min(a.ry || a["top-ry"] || 0, f / 2),
        j = Math.min(a.ry || a["bottom-ry"] || 0, f / 2);
      return b = g || h || i || j ? ["M", c, d + i, "v", f - i - j, "a", h, j, 0, 0, 0, h, j, "h", e - 2 * h, "a", h, j, 0, 0, 0, h, -j, "v", -(f - j - i), "a", g, i, 0, 0, 0, -g, -i, "h", -(e - 2 * g), "a", g, i, 0, 0, 0, -g, i, "Z"] : ["M", c, d, "H", c + e, "V", d + f, "H", c, "V", d, "Z"], b.join(" ")
    }, d.namespace = b, d
  }();
  var joint = {
    version: "2.0.0",
    config: {
      classNamePrefix: "joint-",
      defaultTheme: "default"
    },
    dia: {},
    ui: {},
    layout: {},
    shapes: {},
    format: {},
    connectors: {},
    highlighters: {},
    routers: {},
    mvc: {
      views: {}
    },
    setTheme: function(a, b) {
      b = b || {}, joint.util.invoke(joint.mvc.views, "setTheme", a, b), joint.mvc.View.prototype.defaultTheme = a
    },
    env: {
      _results: {},
      _tests: {
        svgforeignobject: function() {
          return !!document.createElementNS && /SVGForeignObject/.test({}.toString.call(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")))
        }
      },
      addTest: function(a, b) {
        return joint.env._tests[a] = b
      },
      test: function(a) {
        var b = joint.env._tests[a];
        if (!b) throw new Error('Test not defined ("' + a + '"). Use `joint.env.addTest(name, fn) to add a new test.`');
        var c = joint.env._results[a];
        if ("undefined" != typeof c) return c;
        try {
          c = b()
        } catch (a) {
          c = !1
        }
        return joint.env._results[a] = c, c
      }
    },
    util: {
      hashCode: function(a) {
        var b = 0;
        if (0 == a.length) return b;
        for (var c = 0; c < a.length; c++) {
          var d = a.charCodeAt(c);
          b = (b << 5) - b + d, b &= b
        }
        return b
      },
      getByPath: function(a, b, c) {
        for (var d, e = Array.isArray(b) ? b.slice() : b.split(c || "/"); e.length;) {
          if (d = e.shift(), !(Object(a) === a && d in a)) return;
          a = a[d]
        }
        return a
      },
      setByPath: function(a, b, c, d) {
        for (var e = Array.isArray(b) ? b : b.split(d || "/"), f = a, g = 0, h = e.length; g < h - 1; g++) f = f[e[g]] || (f[e[g]] = {});
        return f[e[h - 1]] = c, a
      },
      unsetByPath: function(a, b, c) {
        c = c || "/";
        var d = Array.isArray(b) ? b.slice() : b.split(c),
          e = d.pop();
        if (d.length > 0) {
          var f = joint.util.getByPath(a, d, c);
          f && delete f[e]
        } else delete a[e];
        return a
      },
      flattenObject: function(a, b, c) {
        b = b || "/";
        var d = {};
        for (var e in a) if (a.hasOwnProperty(e)) {
          var f = "object" == typeof a[e];
          if (f && c && c(a[e]) && (f = !1), f) {
            var g = this.flattenObject(a[e], b, c);
            for (var h in g) g.hasOwnProperty(h) && (d[e + b + h] = g[h])
          } else d[e] = a[e]
        }
        return d
      },
      uuid: function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
          var b = 16 * Math.random() | 0,
            c = "x" == a ? b : 3 & b | 8;
          return c.toString(16)
        })
      },
      guid: function(a) {
        return this.guid.id = this.guid.id || 1, a.id = void 0 === a.id ? "j_" + this.guid.id++ : a.id, a.id
      },
      toKebabCase: function(a) {
        return a.replace(/[A-Z]/g, "-$&").toLowerCase()
      },
      mixin: _.assign,
      supplement: _.defaults,
      deepMixin: _.mixin,
      deepSupplement: _.defaultsDeep,
      normalizeEvent: function(a) {
        var b = a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches[0];
        if (b) {
          for (var c in a) void 0 === b[c] && (b[c] = a[c]);
          return b
        }
        return a
      },
      nextFrame: function() {
        var a;
        if ("undefined" != typeof window && (a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame), !a) {
          var b = 0;
          a = function(a) {
            var c = (new Date).getTime(),
              d = Math.max(0, 16 - (c - b)),
              e = setTimeout(function() {
                a(c + d)
              }, d);
            return b = c + d, e
          }
        }
        return function(b, c) {
          return a(c ? b.bind(c) : b)
        }
      }(),
      cancelFrame: function() {
        var a, b = "undefined" != typeof window;
        return b && (a = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame), a = a || clearTimeout, b ? a.bind(window) : a
      }(),
      shapePerimeterConnectionPoint: function(a, b, c, d) {
        var e, f;
        if (!c) {
          var g = b.$(".scalable")[0],
            h = b.$(".rotatable")[0];
          g && g.firstChild ? c = g.firstChild : h && h.firstChild && (c = h.firstChild)
        }
        return c ? (f = V(c).findIntersection(d, a.paper.viewport), f || (e = V(c).getBBox({
          target: a.paper.viewport
        }))) : (e = b.model.getBBox(), f = e.intersectionWithLineFromCenterToPoint(d)), f || e.center()
      },
      parseCssNumeric: function(a, b) {
        b = b || [];
        var c = {
          value: parseFloat(a)
        };
        if (Number.isNaN(c.value)) return null;
        var d = b.join("|");
        if (joint.util.isString(a)) {
          var e = new RegExp("(\\d+)(" + d + ")$").exec(a);
          if (!e) return null;
          e[2] && (c.unit = e[2])
        }
        return c
      },
      breakText: function(a, b, c, d) {
        d = d || {};
        var e = b.width,
          f = b.height,
          g = d.svgDocument || V("svg").node,
          h = V("<text><tspan></tspan></text>").attr(c || {}).node,
          i = h.firstChild,
          j = document.createTextNode("");
        h.style.opacity = 0, h.style.display = "block", i.style.display = "block", i.appendChild(j), g.appendChild(h), d.svgDocument || document.body.appendChild(g);
        for (var k, l, m = a.split(" "), n = [], o = [], p = 0, q = 0, r = m.length; p < r; p++) {
          var s = m[p];
          if (j.data = o[q] ? o[q] + " " + s : s, i.getComputedTextLength() <= e) o[q] = j.data, k && (n[q++] = !0, k = 0);
          else {
            if (!o[q] || k) {
              var t = !! k;
              if (k = s.length - 1, t || !k) {
                if (!k) {
                  if (!o[q]) {
                    o = [];
                    break
                  }
                  m.splice(p, 2, s + m[p + 1]), r--, n[q++] = !0, p--;
                  continue
                }
                m[p] = s.substring(0, k), m[p + 1] = s.substring(k) + m[p + 1]
              } else m.splice(p, 1, s.substring(0, k), s.substring(k)), r++, q && !n[q - 1] && q--;
              p--;
              continue
            }
            q++, p--
          }
          if (void 0 !== f) {
            if (void 0 === l) {
              var u;
              u = "auto" === c.lineHeight ? {
                value: 1.5,
                unit: "em"
              } : joint.util.parseCssNumeric(c.lineHeight, ["em"]) || {
                  value: 1,
                  unit: "em"
                }, l = u.value, "em" === u.unit && (l *= h.getBBox().height)
            }
            if (l * o.length > f) {
              o.splice(Math.floor(f / l));
              break
            }
          }
        }
        return d.svgDocument ? g.removeChild(h) : document.body.removeChild(g), o.join("\n")
      },
      imageToDataUri: function(a, b) {
        if (!a || "data:" === a.substr(0, "data:".length)) return setTimeout(function() {
          b(null, a)
        }, 0);
        var c = function(b, c) {
            if (200 === b.status) {
              var d = new FileReader;
              d.onload = function(a) {
                var b = a.target.result;
                c(null, b)
              }, d.onerror = function() {
                c(new Error("Failed to load image " + a))
              }, d.readAsDataURL(b.response)
            } else c(new Error("Failed to load image " + a))
          },
          d = function(b, c) {
            var d = function(a) {
              for (var b = 32768, c = [], d = 0; d < a.length; d += b) c.push(String.fromCharCode.apply(null, a.subarray(d, d + b)));
              return c.join("")
            };
            if (200 === b.status) {
              var e = new Uint8Array(b.response),
                f = a.split(".").pop() || "png",
                g = {
                  svg: "svg+xml"
                },
                h = "data:image/" + (g[f] || f) + ";base64,",
                i = h + btoa(d(e));
              c(null, i)
            } else c(new Error("Failed to load image " + a))
          },
          e = new XMLHttpRequest;
        e.open("GET", a, !0), e.addEventListener("error", function() {
          b(new Error("Failed to load image " + a))
        }), e.responseType = window.FileReader ? "blob" : "arraybuffer", e.addEventListener("load", function() {
          window.FileReader ? c(e, b) : d(e, b)
        }), e.send()
      },
      getElementBBox: function(a) {
        var b = $(a);
        if (0 === b.length) throw new Error("Element not found");
        var c = b[0],
          d = c.ownerDocument,
          e = c.getBoundingClientRect(),
          f = 0,
          g = 0;
        if (c.ownerSVGElement) {
          var h = V(c),
            i = h.getBBox({
              target: h.svg()
            });
          f = e.width - i.width, g = e.height - i.height
        }
        return {
          x: e.left + window.pageXOffset - d.documentElement.offsetLeft + f / 2,
          y: e.top + window.pageYOffset - d.documentElement.offsetTop + g / 2,
          width: e.width - f,
          height: e.height - g
        }
      },
      sortElements: function(a, b) {
        var c = $(a),
          d = c.map(function() {
            var a = this,
              b = a.parentNode,
              c = b.insertBefore(document.createTextNode(""), a.nextSibling);
            return function() {
              if (b === this) throw new Error("You can't sort elements if any one is a descendant of another.");
              b.insertBefore(this, c), b.removeChild(c)
            }
          });
        return Array.prototype.sort.call(c, b).each(function(a) {
          d[a].call(this)
        })
      },
      setAttributesBySelector: function(a, b) {
        var c = $(a);
        joint.util.forIn(b, function(a, b) {
          var d = c.find(b).addBack().filter(b);
          joint.util.has(a, "class") && (d.addClass(a.class), a = joint.util.omit(a, "class")), d.attr(a)
        })
      },
      normalizeSides: function(a) {
        return Object(a) !== a ? (a = a || 0, {
          top: a,
          bottom: a,
          left: a,
          right: a
        }) : {
          top: a.top || 0,
          bottom: a.bottom || 0,
          left: a.left || 0,
          right: a.right || 0
        }
      },
      timing: {
        linear: function(a) {
          return a
        },
        quad: function(a) {
          return a * a
        },
        cubic: function(a) {
          return a * a * a
        },
        inout: function(a) {
          if (a <= 0) return 0;
          if (a >= 1) return 1;
          var b = a * a,
            c = b * a;
          return 4 * (a < .5 ? c : 3 * (a - b) + c - .75)
        },
        exponential: function(a) {
          return Math.pow(2, 10 * (a - 1))
        },
        bounce: function(a) {
          for (var b = 0, c = 1; 1; b += c, c /= 2) if (a >= (7 - 4 * b) / 11) {
            var d = (11 - 6 * b - 11 * a) / 4;
            return -d * d + c * c
          }
        },
        reverse: function(a) {
          return function(b) {
            return 1 - a(1 - b)
          }
        },
        reflect: function(a) {
          return function(b) {
            return .5 * (b < .5 ? a(2 * b) : 2 - a(2 - 2 * b))
          }
        },
        clamp: function(a, b, c) {
          return b = b || 0, c = c || 1, function(d) {
            var e = a(d);
            return e < b ? b : e > c ? c : e
          }
        },
        back: function(a) {
          return a || (a = 1.70158), function(b) {
            return b * b * ((a + 1) * b - a)
          }
        },
        elastic: function(a) {
          return a || (a = 1.5), function(b) {
            return Math.pow(2, 10 * (b - 1)) * Math.cos(20 * Math.PI * a / 3 * b)
          }
        }
      },
      interpolate: {
        number: function(a, b) {
          var c = b - a;
          return function(b) {
            return a + c * b
          }
        },
        object: function(a, b) {
          var c = Object.keys(a);
          return function(d) {
            var e, f, g = {};
            for (e = c.length - 1; e != -1; e--) f = c[e], g[f] = a[f] + (b[f] - a[f]) * d;
            return g
          }
        },
        hexColor: function(a, b) {
          var c = parseInt(a.slice(1), 16),
            d = parseInt(b.slice(1), 16),
            e = 255 & c,
            f = (255 & d) - e,
            g = 65280 & c,
            h = (65280 & d) - g,
            i = 16711680 & c,
            j = (16711680 & d) - i;
          return function(a) {
            var b = e + f * a & 255,
              c = g + h * a & 65280,
              d = i + j * a & 16711680;
            return "#" + (1 << 24 | b | c | d).toString(16).slice(1)
          }
        },
        unit: function(a, b) {
          var c = /(-?[0-9]*.[0-9]*)(px|em|cm|mm|in|pt|pc|%)/,
            d = c.exec(a),
            e = c.exec(b),
            f = e[1].indexOf("."),
            g = f > 0 ? e[1].length - f - 1 : 0;
          a = +d[1];
          var h = +e[1] - a,
            i = d[2];
          return function(b) {
            return (a + h * b).toFixed(g) + i
          }
        }
      },
      filter: {
        outline: function(a) {
          var b = '<filter><feFlood flood-color="${color}" flood-opacity="${opacity}" result="colored"/><feMorphology in="SourceAlpha" result="morphedOuter" operator="dilate" radius="${outerRadius}" /><feMorphology in="SourceAlpha" result="morphedInner" operator="dilate" radius="${innerRadius}" /><feComposite result="morphedOuterColored" in="colored" in2="morphedOuter" operator="in"/><feComposite operator="xor" in="morphedOuterColored" in2="morphedInner" result="outline"/><feMerge><feMergeNode in="outline"/><feMergeNode in="SourceGraphic"/></feMerge></filter>',
            c = Number.isFinite(a.margin) ? a.margin : 2,
            d = Number.isFinite(a.width) ? a.width : 1;
          return joint.util.template(b)({
            color: a.color || "blue",
            opacity: Number.isFinite(a.opacity) ? a.opacity : 1,
            outerRadius: c + d,
            innerRadius: c
          })
        },
        highlight: function(a) {
          var b = '<filter><feFlood flood-color="${color}" flood-opacity="${opacity}" result="colored"/><feMorphology result="morphed" in="SourceGraphic" operator="dilate" radius="${width}"/><feComposite result="composed" in="colored" in2="morphed" operator="in"/><feGaussianBlur result="blured" in="composed" stdDeviation="${blur}"/><feBlend in="SourceGraphic" in2="blured" mode="normal"/></filter>';
          return joint.util.template(b)({
            color: a.color || "red",
            width: Number.isFinite(a.width) ? a.width : 1,
            blur: Number.isFinite(a.blur) ? a.blur : 0,
            opacity: Number.isFinite(a.opacity) ? a.opacity : 1
          })
        },
        blur: function(a) {
          var b = Number.isFinite(a.x) ? a.x : 2;
          return joint.util.template('<filter><feGaussianBlur stdDeviation="${stdDeviation}"/></filter>')({
            stdDeviation: Number.isFinite(a.y) ? [b, a.y] : b
          })
        },
        dropShadow: function(a) {
          var b = "SVGFEDropShadowElement" in window ? '<filter><feDropShadow stdDeviation="${blur}" dx="${dx}" dy="${dy}" flood-color="${color}" flood-opacity="${opacity}"/></filter>' : '<filter><feGaussianBlur in="SourceAlpha" stdDeviation="${blur}"/><feOffset dx="${dx}" dy="${dy}" result="offsetblur"/><feFlood flood-color="${color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="${opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
          return joint.util.template(b)({
            dx: a.dx || 0,
            dy: a.dy || 0,
            opacity: Number.isFinite(a.opacity) ? a.opacity : 1,
            color: a.color || "black",
            blur: Number.isFinite(a.blur) ? a.blur : 4
          })
        },
        grayscale: function(a) {
          var b = Number.isFinite(a.amount) ? a.amount : 1;
          return joint.util.template('<filter><feColorMatrix type="matrix" values="${a} ${b} ${c} 0 0 ${d} ${e} ${f} 0 0 ${g} ${b} ${h} 0 0 0 0 0 1 0"/></filter>')({
            a: .2126 + .7874 * (1 - b),
            b: .7152 - .7152 * (1 - b),
            c: .0722 - .0722 * (1 - b),
            d: .2126 - .2126 * (1 - b),
            e: .7152 + .2848 * (1 - b),
            f: .0722 - .0722 * (1 - b),
            g: .2126 - .2126 * (1 - b),
            h: .0722 + .9278 * (1 - b)
          })
        },
        sepia: function(a) {
          var b = Number.isFinite(a.amount) ? a.amount : 1;
          return joint.util.template('<filter><feColorMatrix type="matrix" values="${a} ${b} ${c} 0 0 ${d} ${e} ${f} 0 0 ${g} ${h} ${i} 0 0 0 0 0 1 0"/></filter>')({
            a: .393 + .607 * (1 - b),
            b: .769 - .769 * (1 - b),
            c: .189 - .189 * (1 - b),
            d: .349 - .349 * (1 - b),
            e: .686 + .314 * (1 - b),
            f: .168 - .168 * (1 - b),
            g: .272 - .272 * (1 - b),
            h: .534 - .534 * (1 - b),
            i: .131 + .869 * (1 - b)
          })
        },
        saturate: function(a) {
          var b = Number.isFinite(a.amount) ? a.amount : 1;
          return joint.util.template('<filter><feColorMatrix type="saturate" values="${amount}"/></filter>')({
            amount: 1 - b
          })
        },
        hueRotate: function(a) {
          return joint.util.template('<filter><feColorMatrix type="hueRotate" values="${angle}"/></filter>')({
            angle: a.angle || 0
          })
        },
        invert: function(a) {
          var b = Number.isFinite(a.amount) ? a.amount : 1;
          return joint.util.template('<filter><feComponentTransfer><feFuncR type="table" tableValues="${amount} ${amount2}"/><feFuncG type="table" tableValues="${amount} ${amount2}"/><feFuncB type="table" tableValues="${amount} ${amount2}"/></feComponentTransfer></filter>')({
            amount: b,
            amount2: 1 - b
          })
        },
        brightness: function(a) {
          return joint.util.template('<filter><feComponentTransfer><feFuncR type="linear" slope="${amount}"/><feFuncG type="linear" slope="${amount}"/><feFuncB type="linear" slope="${amount}"/></feComponentTransfer></filter>')({
            amount: Number.isFinite(a.amount) ? a.amount : 1
          })
        },
        contrast: function(a) {
          var b = Number.isFinite(a.amount) ? a.amount : 1;
          return joint.util.template('<filter><feComponentTransfer><feFuncR type="linear" slope="${amount}" intercept="${amount2}"/><feFuncG type="linear" slope="${amount}" intercept="${amount2}"/><feFuncB type="linear" slope="${amount}" intercept="${amount2}"/></feComponentTransfer></filter>')({
            amount: b,
            amount2: .5 - b / 2
          })
        }
      },
      format: {
        number: function(a, b, c) {
          function d(a) {
            for (var b = a.length, d = [], e = 0, f = c.grouping[0]; b > 0 && f > 0;) d.push(a.substring(b -= f, b + f)), f = c.grouping[e = (e + 1) % c.grouping.length];
            return d.reverse().join(c.thousands)
          }
          c = c || {
              currency: ["$", ""],
              decimal: ".",
              thousands: ",",
              grouping: [3]
            };
          var e = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
            f = e.exec(a),
            g = f[1] || " ",
            h = f[2] || ">",
            i = f[3] || "",
            j = f[4] || "",
            k = f[5],
            l = +f[6],
            m = f[7],
            n = f[8],
            o = f[9],
            p = 1,
            q = "",
            r = "",
            s = !1;
          switch (n && (n = +n.substring(1)), (k || "0" === g && "=" === h) && (k = g = "0", h = "=", m && (l -= Math.floor((l - 1) / 4))), o) {
            case "n":
              m = !0, o = "g";
              break;
            case "%":
              p = 100, r = "%", o = "f";
              break;
            case "p":
              p = 100, r = "%", o = "r";
              break;
            case "b":
            case "o":
            case "x":
            case "X":
              "#" === j && (q = "0" + o.toLowerCase());
              break;
            case "c":
            case "d":
              s = !0, n = 0;
              break;
            case "s":
              p = -1, o = "r"
          }
          "$" === j && (q = c.currency[0], r = c.currency[1]), "r" != o || n || (o = "g"), null != n && ("g" == o ? n = Math.max(1, Math.min(21, n)) : "e" != o && "f" != o || (n = Math.max(0, Math.min(20, n))));
          var t = k && m;
          if (s && b % 1) return "";
          var u = b < 0 || 0 === b && 1 / b < 0 ? (b = -b, "-") : i,
            v = r;
          if (p < 0) {
            var w = this.prefix(b, n);
            b = w.scale(b), v = w.symbol + r
          } else b *= p;
          b = this.convert(o, b, n);
          var x = b.lastIndexOf("."),
            y = x < 0 ? b : b.substring(0, x),
            z = x < 0 ? "" : c.decimal + b.substring(x + 1);
          !k && m && c.grouping && (y = d(y));
          var A = q.length + y.length + z.length + (t ? 0 : u.length),
            B = A < l ? new Array(A = l - A + 1).join(g) : "";
          return t && (y = d(B + y)), u += q, b = y + z, ("<" === h ? u + b + B : ">" === h ? B + u + b : "^" === h ? B.substring(0, A >>= 1) + u + b + B.substring(A) : u + (t ? b : B + b)) + v
        },
        string: function(a, b) {
          for (var c, d = "{", e = !1, f = [];
               (c = a.indexOf(d)) !== -1;) {
            var g, h, i;
            if (g = a.slice(0, c), e) {
              h = g.split(":"), i = h.shift().split("."), g = b;
              for (var j = 0; j < i.length; j++) g = g[i[j]];
              h.length && (g = this.number(h, g))
            }
            f.push(g), a = a.slice(c + 1), d = (e = !e) ? "}" : "{"
          }
          return f.push(a), f.join("")
        },
        convert: function(a, b, c) {
          switch (a) {
            case "b":
              return b.toString(2);
            case "c":
              return String.fromCharCode(b);
            case "o":
              return b.toString(8);
            case "x":
              return b.toString(16);
            case "X":
              return b.toString(16).toUpperCase();
            case "g":
              return b.toPrecision(c);
            case "e":
              return b.toExponential(c);
            case "f":
              return b.toFixed(c);
            case "r":
              return (b = this.round(b, this.precision(b, c))).toFixed(Math.max(0, Math.min(20, this.precision(b * (1 + 1e-15), c))));
            default:
              return b + ""
          }
        },
        round: function(a, b) {
          return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
        },
        precision: function(a, b) {
          return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
        },
        prefix: function(a, b) {
          var c = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(function(a, b) {
              var c = Math.pow(10, 3 * Math.abs(8 - b));
              return {
                scale: b > 8 ?
                  function(a) {
                    return a / c
                  } : function(a) {
                    return a * c
                  },
                symbol: a
              }
            }),
            d = 0;
          return a && (a < 0 && (a *= -1), b && (a = this.round(a, this.precision(a, b))), d = 1 + Math.floor(1e-12 + Math.log(a) / Math.LN10), d = Math.max(-24, Math.min(24, 3 * Math.floor((d <= 0 ? d + 1 : d - 1) / 3)))), c[8 + d / 3]
        }
      },
      template: function(a) {
        var b = /<%= ([^ ]+) %>|\$\{ ?([^\{\} ]+) ?\}|\{\{([^\{\} ]+)\}\}/g;
        return function(c) {
          return c = c || {}, a.replace(b, function(a) {
            for (var b = Array.from(arguments), d = b.slice(1, 4).find(function(a) {
              return !!a
            }), e = d.split("."), f = c[e.shift()]; void 0 !== f && e.length;) f = f[e.shift()];
            return void 0 !== f ? f : ""
          })
        }
      },
      toggleFullScreen: function(a) {
        function b(a, b) {
          for (var c = ["webkit", "moz", "ms", "o", ""], d = 0; d < c.length; d++) {
            var e = c[d],
              f = e ? e + b : b.substr(0, 1).toLowerCase() + b.substr(1);
            if (void 0 !== a[f]) return joint.util.isFunction(a[f]) ? a[f]() : a[f]
          }
        }
        a = a || window.top.document.body, b(document, "FullscreenElement") || b(document, "FullScreenElement") ? b(document, "ExitFullscreen") || b(document, "CancelFullScreen") : b(a, "RequestFullscreen") || b(a, "RequestFullScreen")
      },
      addClassNamePrefix: function(a) {
        return a ? a.toString().split(" ").map(function(a) {
          return a.substr(0, joint.config.classNamePrefix.length) !== joint.config.classNamePrefix && (a = joint.config.classNamePrefix + a), a
        }).join(" ") : a
      },
      removeClassNamePrefix: function(a) {
        return a ? a.toString().split(" ").map(function(a) {
          return a.substr(0, joint.config.classNamePrefix.length) === joint.config.classNamePrefix && (a = a.substr(joint.config.classNamePrefix.length)), a
        }).join(" ") : a
      },
      wrapWith: function(a, b, c) {
        if (joint.util.isString(c)) {
          if (!joint.util.wrappers[c]) throw new Error('Unknown wrapper: "' + c + '"');
          c = joint.util.wrappers[c]
        }
        if (!joint.util.isFunction(c)) throw new Error("Wrapper must be a function.");
        this.toArray(b).forEach(function(b) {
          a[b] = c(a[b])
        })
      },
      wrappers: {
        cells: function(a) {
          return function() {
            var b = Array.from(arguments),
              c = b.length,
              d = c > 0 && b[0] || [],
              e = c > 1 && b[c - 1] || {};
            return Array.isArray(d) || (e instanceof joint.dia.Cell ? d = b : d instanceof joint.dia.Cell && (b.length > 1 && b.pop(), d = b)), e instanceof joint.dia.Cell && (e = {}), a.call(this, d, e)
          }
        }
      },
      sortedIndex: _.sortedIndexBy || _.sortedIndex,
      uniq: _.uniqBy || _.uniq,
      uniqueId: _.uniqueId,
      sortBy: _.sortBy,
      isFunction: _.isFunction,
      result: _.result,
      union: _.union,
      invoke: _.invokeMap || _.invoke,
      difference: _.difference,
      intersection: _.intersection,
      omit: _.omit,
      pick: _.pick,
      has: _.has,
      bindAll: _.bindAll,
      assign: _.assign,
      defaults: _.defaults,
      defaultsDeep: _.defaultsDeep,
      isPlainObject: _.isPlainObject,
      isEmpty: _.isEmpty,
      isEqual: _.isEqual,
      noop: function() {},
      cloneDeep: _.cloneDeep,
      toArray: _.toArray,
      flattenDeep: _.flattenDeep,
      camelCase: _.camelCase,
      groupBy: _.groupBy,
      forIn: _.forIn,
      without: _.without,
      debounce: _.debounce,
      clone: _.clone,
      isBoolean: function(a) {
        var b = Object.prototype.toString;
        return a === !0 || a === !1 || !! a && "object" == typeof a && "[object Boolean]" === b.call(a)
      },
      isObject: function(a) {
        return !!a && ("object" == typeof a || "function" == typeof a)
      },
      isNumber: function(a) {
        var b = Object.prototype.toString;
        return "number" == typeof a || !! a && "object" == typeof a && "[object Number]" === b.call(a)
      },
      isString: function(a) {
        var b = Object.prototype.toString;
        return "string" == typeof a || !! a && "object" == typeof a && "[object String]" === b.call(a)
      },
      merge: function() {
        if (_.mergeWith) {
          var a = Array.from(arguments),
            b = a[a.length - 1],
            c = this.isFunction(b) ? b : this.noop;
          return a.push(function(a, b) {
            var d = c(a, b);
            return void 0 !== d ? d : Array.isArray(a) && !Array.isArray(b) ? b : void 0
          }), _.mergeWith.apply(this, a)
        }
        return _.merge.apply(this, arguments)
      }
    }
  };
  joint.mvc.View = Backbone.View.extend({
    options: {},
    theme: null,
    themeClassNamePrefix: joint.util.addClassNamePrefix("theme-"),
    requireSetThemeOverride: !1,
    defaultTheme: joint.config.defaultTheme,
    constructor: function(a) {
      this.requireSetThemeOverride = a && !! a.theme, this.options = joint.util.assign({}, this.options, a), Backbone.View.call(this, a)
    },
    initialize: function(a) {
      joint.util.bindAll(this, "setTheme", "onSetTheme", "remove", "onRemove"), joint.mvc.views[this.cid] = this, this.setTheme(this.options.theme || this.defaultTheme), this.init()
    },
    _ensureElement: function() {
      if (this.el) this.setElement(joint.util.result(this, "el"));
      else {
        var a = joint.util.result(this, "tagName"),
          b = joint.util.assign({}, joint.util.result(this, "attributes"));
        this.id && (b.id = joint.util.result(this, "id")), this.setElement(this._createElement(a)), this._setAttributes(b)
      }
      this._ensureElClassName()
    },
    _setAttributes: function(a) {
      this.svgElement ? this.vel.attr(a) : this.$el.attr(a)
    },
    _createElement: function(a) {
      return this.svgElement ? document.createElementNS(V.namespace.xmlns, a) : document.createElement(a)
    },
    _setElement: function(a) {
      this.$el = a instanceof Backbone.$ ? a : Backbone.$(a), this.el = this.$el[0], this.svgElement && (this.vel = V(this.el))
    },
    _ensureElClassName: function() {
      var a = joint.util.result(this, "className"),
        b = joint.util.addClassNamePrefix(a);
      this.svgElement ? this.vel.removeClass(a).addClass(b) : this.$el.removeClass(a).addClass(b)
    },
    init: function() {},
    onRender: function() {},
    setTheme: function(a, b) {
      return b = b || {}, this.theme && this.requireSetThemeOverride && !b.override ? this : (this.removeThemeClassName(), this.addThemeClassName(a), this.onSetTheme(this.theme, a), this.theme = a, this)
    },
    addThemeClassName: function(a) {
      a = a || this.theme;
      var b = this.themeClassNamePrefix + a;
      return this.$el.addClass(b), this
    },
    removeThemeClassName: function(a) {
      a = a || this.theme;
      var b = this.themeClassNamePrefix + a;
      return this.$el.removeClass(b), this
    },
    onSetTheme: function(a, b) {},
    remove: function() {
      return this.onRemove(), joint.mvc.views[this.cid] = null, Backbone.View.prototype.remove.apply(this, arguments), this
    },
    onRemove: function() {},
    getEventNamespace: function() {
      return ".joint-event-ns-" + this.cid
    }
  }, {
    extend: function() {
      var a = Array.from(arguments),
        b = a[0] && joint.util.assign({}, a[0]) || {},
        c = a[1] && joint.util.assign({}, a[1]) || {},
        d = b.render || this.prototype && this.prototype.render || null;
      return b.render = function() {
        return d && d.apply(this, arguments), this.onRender(), this
      }, Backbone.View.extend.call(this, b, c)
    }
  }), joint.dia.GraphCells = Backbone.Collection.extend({
    cellNamespace: joint.shapes,
    initialize: function(a, b) {
      b.cellNamespace && (this.cellNamespace = b.cellNamespace), this.graph = b.graph
    },
    model: function(a, b) {
      var c = b.collection,
        d = c.cellNamespace,
        e = "link" === a.type ? joint.dia.Link : joint.util.getByPath(d, a.type, ".") || joint.dia.Element,
        f = new e(a, b);
      return f.graph = c.graph, f
    },
    comparator: function(a) {
      return a.get("z") || 0
    }
  }), joint.dia.Graph = Backbone.Model.extend({
    _batches: {},
    initialize: function(a, b) {
      b = b || {};
      var c = new joint.dia.GraphCells([], {
        model: b.cellModel,
        cellNamespace: b.cellNamespace,
        graph: this
      });
      Backbone.Model.prototype.set.call(this, "cells", c), c.on("all", this.trigger, this), this.on("change:z", this._sortOnChangeZ, this), this.on("batch:stop", this._onBatchStop, this), this._out = {}, this._in = {}, this._nodes = {}, this._edges = {}, c.on("add", this._restructureOnAdd, this), c.on("remove", this._restructureOnRemove, this), c.on("reset", this._restructureOnReset, this), c.on("change:source", this._restructureOnChangeSource, this), c.on("change:target", this._restructureOnChangeTarget, this), c.on("remove", this._removeCell, this)
    },
    _sortOnChangeZ: function() {
      this.hasActiveBatch("to-front") || this.hasActiveBatch("to-back") || this.get("cells").sort()
    },
    _onBatchStop: function(a) {
      var b = a && a.batchName;
      "to-front" !== b && "to-back" !== b || this.hasActiveBatch(b) || this.get("cells").sort()
    },
    _restructureOnAdd: function(a) {
      if (a.isLink()) {
        this._edges[a.id] = !0;
        var b = a.get("source"),
          c = a.get("target");
        b.id && ((this._out[b.id] || (this._out[b.id] = {}))[a.id] = !0), c.id && ((this._in[c.id] || (this._in[c.id] = {}))[a.id] = !0)
      } else this._nodes[a.id] = !0
    },
    _restructureOnRemove: function(a) {
      if (a.isLink()) {
        delete this._edges[a.id];
        var b = a.get("source"),
          c = a.get("target");
        b.id && this._out[b.id] && this._out[b.id][a.id] && delete this._out[b.id][a.id], c.id && this._in[c.id] && this._in[c.id][a.id] && delete this._in[c.id][a.id]
      } else delete this._nodes[a.id]
    },
    _restructureOnReset: function(a) {
      a = a.models, this._out = {}, this._in = {}, this._nodes = {}, this._edges = {}, a.forEach(this._restructureOnAdd, this)
    },
    _restructureOnChangeSource: function(a) {
      var b = a.previous("source");
      b.id && this._out[b.id] && delete this._out[b.id][a.id];
      var c = a.get("source");
      c.id && ((this._out[c.id] || (this._out[c.id] = {}))[a.id] = !0)
    },
    _restructureOnChangeTarget: function(a) {
      var b = a.previous("target");
      b.id && this._in[b.id] && delete this._in[b.id][a.id];
      var c = a.get("target");
      c.id && ((this._in[c.id] || (this._in[c.id] = {}))[a.id] = !0)
    },
    getOutboundEdges: function(a) {
      return this._out && this._out[a] || {}
    },
    getInboundEdges: function(a) {
      return this._in && this._in[a] || {}
    },
    toJSON: function() {
      var a = Backbone.Model.prototype.toJSON.apply(this, arguments);
      return a.cells = this.get("cells").toJSON(), a
    },
    fromJSON: function(a, b) {
      if (!a.cells) throw new Error("Graph JSON must contain cells array.");
      return this.set(a, b)
    },
    set: function(a, b, c) {
      var d;
      return "object" == typeof a ? (d = a, c = b) : (d = {})[a] = b, d.hasOwnProperty("cells") && (this.resetCells(d.cells, c), d = joint.util.omit(d, "cells")), Backbone.Model.prototype.set.call(this, d, c)
    },
    clear: function(a) {
      a = joint.util.assign({}, a, {
        clear: !0
      });
      var b = this.get("cells");
      if (0 === b.length) return this;
      this.startBatch("clear", a);
      var c = b.sortBy(function(a) {
        return a.isLink() ? 1 : 2
      });
      do c.shift().remove(a);
      while (c.length > 0);
      return this.stopBatch("clear"), this
    },
    _prepareCell: function(a, b) {
      var c;
      if (a instanceof Backbone.Model ? (c = a.attributes, a.graph || b && b.dry || (a.graph = this)) : c = a, !joint.util.isString(c.type)) throw new TypeError("dia.Graph: cell type must be a string.");
      return a
    },
    maxZIndex: function() {
      var a = this.get("cells").last();
      return a ? a.get("z") || 0 : 0
    },
    addCell: function(a, b) {
      return Array.isArray(a) ? this.addCells(a, b) : (a instanceof Backbone.Model ? a.has("z") || a.set("z", this.maxZIndex() + 1) : void 0 === a.z && (a.z = this.maxZIndex() + 1), this.get("cells").add(this._prepareCell(a, b), b || {}), this)
    },
    addCells: function(a, b) {
      return a.length && (a = joint.util.flattenDeep(a), b.position = a.length, this.startBatch("add"), a.forEach(function(a) {
        b.position--, this.addCell(a, b)
      }, this), this.stopBatch("add")), this
    },
    resetCells: function(a, b) {
      var c = joint.util.toArray(a).map(function(a) {
        return this._prepareCell(a, b)
      }, this);
      return this.get("cells").reset(c, b), this
    },
    removeCells: function(a, b) {
      return a.length && (this.startBatch("remove"), joint.util.invoke(a, "remove", b), this.stopBatch("remove")), this
    },
    _removeCell: function(a, b, c) {
      c = c || {}, c.clear || (c.disconnectLinks ? this.disconnectLinks(a, c) : this.removeLinks(a, c)), this.get("cells").remove(a, {
        silent: !0
      }), a.graph === this && (a.graph = null)
    },
    getCell: function(a) {
      return this.get("cells").get(a)
    },
    getCells: function() {
      return this.get("cells").toArray()
    },
    getElements: function() {
      return Object.keys(this._nodes).map(this.getCell, this)
    },
    getLinks: function() {
      return Object.keys(this._edges).map(this.getCell, this)
    },
    getFirstCell: function() {
      return this.get("cells").first()
    },
    getLastCell: function() {
      return this.get("cells").last()
    },
    getConnectedLinks: function(a, b) {
      b = b || {};
      var c = b.inbound,
        d = b.outbound;
      void 0 === c && void 0 === d && (c = d = !0);
      var e = [],
        f = {};
      if (d && joint.util.forIn(this.getOutboundEdges(a.id), function(a, b) {
          f[b] || (e.push(this.getCell(b)), f[b] = !0)
        }.bind(this)), c && joint.util.forIn(this.getInboundEdges(a.id), function(a, b) {
          f[b] || (e.push(this.getCell(b)), f[b] = !0)
        }.bind(this)), b.deep) {
        var g = a.getEmbeddedCells({
            deep: !0
          }),
          h = {};
        g.forEach(function(a) {
          a.isLink() && (h[a.id] = !0)
        }), g.forEach(function(a) {
          a.isLink() || (d && joint.util.forIn(this.getOutboundEdges(a.id), function(a, b) {
            f[b] || h[b] || (e.push(this.getCell(b)), f[b] = !0)
          }.bind(this)), c && joint.util.forIn(this.getInboundEdges(a.id), function(a, b) {
            f[b] || h[b] || (e.push(this.getCell(b)), f[b] = !0)
          }.bind(this)))
        }, this)
      }
      return e
    },
    getNeighbors: function(a, b) {
      b = b || {};
      var c = b.inbound,
        d = b.outbound;
      void 0 === c && void 0 === d && (c = d = !0);
      var e = this.getConnectedLinks(a, b).reduce(function(e, f) {
        var g = f.get("source"),
          h = f.get("target"),
          i = f.hasLoop(b);
        if (c && joint.util.has(g, "id") && !e[g.id]) {
          var j = this.getCell(g.id);
          !i && (!j || j === a || b.deep && j.isEmbeddedIn(a)) || (e[g.id] = j)
        }
        if (d && joint.util.has(h, "id") && !e[h.id]) {
          var k = this.getCell(h.id);
          !i && (!k || k === a || b.deep && k.isEmbeddedIn(a)) || (e[h.id] = k)
        }
        return e
      }.bind(this), {});
      return joint.util.toArray(e)
    },
    getCommonAncestor: function() {
      var a = Array.from(arguments).map(function(a) {
        for (var b = [], c = a.get("parent"); c;) b.push(c), c = this.getCell(c).get("parent");
        return b
      }, this);
      a = a.sort(function(a, b) {
        return a.length - b.length
      });
      var b = joint.util.toArray(a.shift()).find(function(b) {
        return a.every(function(a) {
          return a.includes(b)
        })
      });
      return this.getCell(b)
    },
    getSuccessors: function(a, b) {
      b = b || {};
      var c = [];
      return this.search(a, function(b) {
        b !== a && c.push(b)
      }, joint.util.assign({}, b, {
        outbound: !0
      })), c
    },
    cloneCells: function(a) {
      a = joint.util.uniq(a);
      var b = joint.util.toArray(a).reduce(function(a, b) {
        return a[b.id] = b.clone(), a
      }, {});
      return joint.util.toArray(a).forEach(function(a) {
        var c = b[a.id];
        if (c.isLink()) {
          var d = c.get("source"),
            e = c.get("target");
          d.id && b[d.id] && c.prop("source/id", b[d.id].id), e.id && b[e.id] && c.prop("target/id", b[e.id].id)
        }
        var f = a.get("parent");
        f && b[f] && c.set("parent", b[f].id);
        var g = joint.util.toArray(a.get("embeds")).reduce(function(a, c) {
          return b[c] && a.push(b[c].id), a
        }, []);
        joint.util.isEmpty(g) || c.set("embeds", g)
      }), b
    },
    cloneSubgraph: function(a, b) {
      var c = this.getSubgraph(a, b);
      return this.cloneCells(c)
    },
    getSubgraph: function(a, b) {
      b = b || {};
      var c = [],
        d = {},
        e = [],
        f = [];
      return joint.util.toArray(a).forEach(function(a) {
        if (d[a.id] || (c.push(a), d[a.id] = a, a.isLink() ? f.push(a) : e.push(a)), b.deep) {
          var g = a.getEmbeddedCells({
            deep: !0
          });
          g.forEach(function(a) {
            d[a.id] || (c.push(a), d[a.id] = a, a.isLink() ? f.push(a) : e.push(a))
          })
        }
      }), f.forEach(function(a) {
        var b = a.get("source"),
          f = a.get("target");
        if (b.id && !d[b.id]) {
          var g = this.getCell(b.id);
          c.push(g), d[g.id] = g, e.push(g)
        }
        if (f.id && !d[f.id]) {
          var h = this.getCell(f.id);
          c.push(this.getCell(f.id)), d[h.id] = h, e.push(h)
        }
      }, this), e.forEach(function(a) {
        var e = this.getConnectedLinks(a, b);
        e.forEach(function(a) {
          var b = a.get("source"),
            e = a.get("target");
          !d[a.id] && b.id && d[b.id] && e.id && d[e.id] && (c.push(a), d[a.id] = a)
        })
      }, this), c
    },
    getPredecessors: function(a, b) {
      b = b || {};
      var c = [];
      return this.search(a, function(b) {
        b !== a && c.push(b)
      }, joint.util.assign({}, b, {
        inbound: !0
      })), c
    },
    search: function(a, b, c) {
      c = c || {}, c.breadthFirst ? this.bfs(a, b, c) : this.dfs(a, b, c)
    },
    bfs: function(a, b, c) {
      c = c || {};
      var d = {},
        e = {},
        f = [];
      for (f.push(a), e[a.id] = 0; f.length > 0;) {
        var g = f.shift();
        if (!d[g.id]) {
          if (d[g.id] = !0, b(g, e[g.id]) === !1) return;
          this.getNeighbors(g, c).forEach(function(a) {
            e[a.id] = e[g.id] + 1, f.push(a)
          })
        }
      }
    },
    dfs: function(a, b, c, d, e) {
      c = c || {};
      var f = d || {},
        g = e || 0;
      b(a, g) !== !1 && (f[a.id] = !0, this.getNeighbors(a, c).forEach(function(a) {
        f[a.id] || this.dfs(a, b, c, f, g + 1)
      }, this))
    },
    getSources: function() {
      var a = [];
      return joint.util.forIn(this._nodes, function(b, c) {
        this._in[c] && !joint.util.isEmpty(this._in[c]) || a.push(this.getCell(c))
      }.bind(this)), a
    },
    getSinks: function() {
      var a = [];
      return joint.util.forIn(this._nodes, function(b, c) {
        this._out[c] && !joint.util.isEmpty(this._out[c]) || a.push(this.getCell(c))
      }.bind(this)), a
    },
    isSource: function(a) {
      return !this._in[a.id] || joint.util.isEmpty(this._in[a.id])
    },
    isSink: function(a) {
      return !this._out[a.id] || joint.util.isEmpty(this._out[a.id])
    },
    isSuccessor: function(a, b) {
      var c = !1;
      return this.search(a, function(d) {
        if (d === b && d !== a) return c = !0, !1
      }, {
        outbound: !0
      }), c
    },
    isPredecessor: function(a, b) {
      var c = !1;
      return this.search(a, function(d) {
        if (d === b && d !== a) return c = !0, !1
      }, {
        inbound: !0
      }), c
    },
    isNeighbor: function(a, b, c) {
      c = c || {};
      var d = c.inbound,
        e = c.outbound;
      void 0 === d && void 0 === e && (d = e = !0);
      var f = !1;
      return this.getConnectedLinks(a, c).forEach(function(a) {
        var c = a.get("source"),
          g = a.get("target");
        return d && joint.util.has(c, "id") && c.id === b.id ? (f = !0, !1) : e && joint.util.has(g, "id") && g.id === b.id ? (f = !0, !1) : void 0
      }), f
    },
    disconnectLinks: function(a, b) {
      this.getConnectedLinks(a).forEach(function(c) {
        c.set(c.get("source").id === a.id ? "source" : "target", {
          x: 0,
          y: 0
        }, b)
      })
    },
    removeLinks: function(a, b) {
      joint.util.invoke(this.getConnectedLinks(a), "remove", b)
    },
    findModelsFromPoint: function(a) {
      return this.getElements().filter(function(b) {
        return b.getBBox().containsPoint(a)
      })
    },
    findModelsInArea: function(a, b) {
      a = g.rect(a), b = joint.util.defaults(b || {}, {
        strict: !1
      });
      var c = b.strict ? "containsRect" : "intersect";
      return this.getElements().filter(function(b) {
        return a[c](b.getBBox())
      })
    },
    findModelsUnderElement: function(a, b) {
      b = joint.util.defaults(b || {}, {
        searchBy: "bbox"
      });
      var c = a.getBBox(),
        d = "bbox" === b.searchBy ? this.findModelsInArea(c) : this.findModelsFromPoint(c[b.searchBy]());
      return d.filter(function(b) {
        return a.id !== b.id && !b.isEmbeddedIn(a)
      })
    },
    getBBox: function(a, b) {
      return this.getCellsBBox(a || this.getElements(), b)
    },
    getCellsBBox: function(a, b) {
      return joint.util.toArray(a).reduce(function(a, c) {
        return c.isLink() ? a : a ? a.union(c.getBBox(b)) : c.getBBox(b)
      }, null)
    },
    translate: function(a, b, c) {
      var d = this.getCells().filter(function(a) {
        return !a.isEmbedded()
      });
      return joint.util.invoke(d, "translate", a, b, c), this
    },
    resize: function(a, b, c) {
      return this.resizeCells(a, b, this.getCells(), c)
    },
    resizeCells: function(a, b, c, d) {
      var e = this.getCellsBBox(c);
      if (e) {
        var f = Math.max(a / e.width, 0),
          g = Math.max(b / e.height, 0);
        joint.util.invoke(c, "scale", f, g, e.origin(), d)
      }
      return this
    },
    startBatch: function(a, b) {
      return b = b || {}, this._batches[a] = (this._batches[a] || 0) + 1, this.trigger("batch:start", joint.util.assign({}, b, {
        batchName: a
      }))
    },
    stopBatch: function(a, b) {
      return b = b || {}, this._batches[a] = (this._batches[a] || 0) - 1, this.trigger("batch:stop", joint.util.assign({}, b, {
        batchName: a
      }))
    },
    hasActiveBatch: function(a) {
      return a ? !! this._batches[a] : joint.util.toArray(this._batches).some(function(a) {
        return a > 0
      })
    }
  }), joint.util.wrapWith(joint.dia.Graph.prototype, ["resetCells", "addCells", "removeCells"], "cells"), function(a, b, c, d, e) {
    function f(a) {
      return e.isString(a) && "%" === a.slice(-1)
    }
    function g(a, b) {
      return function(c, d) {
        var e = f(c);
        c = parseFloat(c), e && (c /= 100);
        var g = {};
        if (isFinite(c)) {
          var h = e || c >= 0 && c <= 1 ? c * d[b] : Math.max(c + d[b], 0);
          g[a] = h
        }
        return g
      }
    }
    function h(a, b, d) {
      return function(e, g) {
        var h = f(e);
        e = parseFloat(e), h && (e /= 100);
        var i;
        if (isFinite(e)) {
          var j = g[d]();
          i = h || e > 0 && e < 1 ? j[a] + g[b] * e : j[a] + e
        }
        var k = c.Point();
        return k[a] = i || 0, k
      }
    }
    function i(a, b, d) {
      return function(e, g) {
        var h;
        h = "middle" === e ? g[b] / 2 : e === d ? g[b] : isFinite(e) ? e > -1 && e < 1 ? -g[b] * e : -e : f(e) ? g[b] * parseFloat(e) / 100 : 0;
        var i = c.Point();
        return i[a] = -(g[a] + h), i
      }
    }
    var j = a.dia.attributes = {
      xlinkHref: {
        set: "xlink:href"
      },
      xlinkShow: {
        set: "xlink:show"
      },
      xlinkRole: {
        set: "xlink:role"
      },
      xlinkType: {
        set: "xlink:type"
      },
      xlinkArcrole: {
        set: "xlink:arcrole"
      },
      xlinkTitle: {
        set: "xlink:title"
      },
      xlinkActuate: {
        set: "xlink:actuate"
      },
      xmlSpace: {
        set: "xml:space"
      },
      xmlBase: {
        set: "xml:base"
      },
      xmlLang: {
        set: "xml:lang"
      },
      preserveAspectRatio: {
        set: "preserveAspectRatio"
      },
      requiredExtension: {
        set: "requiredExtension"
      },
      requiredFeatures: {
        set: "requiredFeatures"
      },
      systemLanguage: {
        set: "systemLanguage"
      },
      externalResourcesRequired: {
        set: "externalResourceRequired"
      },
      filter: {
        qualify: e.isPlainObject,
        set: function(a) {
          return "url(#" + this.paper.defineFilter(a) + ")"
        }
      },
      fill: {
        qualify: e.isPlainObject,
        set: function(a) {
          return "url(#" + this.paper.defineGradient(a) + ")"
        }
      },
      stroke: {
        qualify: e.isPlainObject,
        set: function(a) {
          return "url(#" + this.paper.defineGradient(a) + ")"
        }
      },
      sourceMarker: {
        qualify: e.isPlainObject,
        set: function(a) {
          return {
            "marker-start": "url(#" + this.paper.defineMarker(a) + ")"
          }
        }
      },
      targetMarker: {
        qualify: e.isPlainObject,
        set: function(a) {
          return a = e.assign({
            transform: "rotate(180)"
          }, a), {
            "marker-end": "url(#" + this.paper.defineMarker(a) + ")"
          }
        }
      },
      vertexMarker: {
        qualify: e.isPlainObject,
        set: function(a) {
          return {
            "marker-mid": "url(#" + this.paper.defineMarker(a) + ")"
          }
        }
      },
      text: {
        set: function(b, c, e, f) {
          var g = d(e),
            h = "joint-text",
            i = g.data(h),
            j = a.util.pick(f, "lineHeight", "annotations", "textPath", "x", "eol"),
            k = j.fontSize = f["font-size"] || f.fontSize,
            l = JSON.stringify([b, j]);
          void 0 !== i && i === l || (k && e.setAttribute("font-size", k), V(e).text("" + b, j), g.data(h, l))
        }
      },
      textWrap: {
        qualify: e.isPlainObject,
        set: function(b, c, d, e) {
          var g = b.width || 0;
          f(g) ? c.width *= parseFloat(g) / 100 : g <= 0 ? c.width += g : c.width = g;
          var h = b.height || 0;
          f(h) ? c.height *= parseFloat(h) / 100 : h <= 0 ? c.height += h : c.height = h;
          var i = a.util.breakText("" + b.text, c, {
            "font-weight": e["font-weight"] || e.fontWeight,
            "font-size": e["font-size"] || e.fontSize,
            "font-family": e["font-family"] || e.fontFamily
          }, {
            svgDocument: this.paper.svg
          });
          V(d).text(i)
        }
      },
      lineHeight: {
        qualify: function(a, b, c) {
          return void 0 !== c.text
        }
      },
      textPath: {
        qualify: function(a, b, c) {
          return void 0 !== c.text
        }
      },
      annotations: {
        qualify: function(a, b, c) {
          return void 0 !== c.text
        }
      },
      port: {
        set: function(a) {
          return null === a || void 0 === a.id ? a : a.id
        }
      },
      style: {
        qualify: e.isPlainObject,
        set: function(a, b, c) {
          d(c).css(a)
        }
      },
      html: {
        set: function(a, b, c) {
          d(c).html(a + "")
        }
      },
      ref: {},
      refX: {
        position: h("x", "width", "origin")
      },
      refY: {
        position: h("y", "height", "origin")
      },
      refDx: {
        position: h("x", "width", "corner")
      },
      refDy: {
        position: h("y", "height", "corner")
      },
      refWidth: {
        set: g("width", "width")
      },
      refHeight: {
        set: g("height", "height")
      },
      refRx: {
        set: g("rx", "width")
      },
      refRy: {
        set: g("ry", "height")
      },
      refCx: {
        set: g("cx", "width")
      },
      refCy: {
        set: g("cy", "height")
      },
      xAlignment: {
        offset: i("x", "width", "right")
      },
      yAlignment: {
        offset: i("y", "height", "bottom")
      },
      resetOffset: {
        offset: function(a, b) {
          return a ? {
            x: -b.x,
            y: -b.y
          } : {
            x: 0,
            y: 0
          }
        }
      }
    };
    j.refX2 = j.refX, j.refY2 = j.refY, j["ref-x"] = j.refX, j["ref-y"] = j.refY, j["ref-dy"] = j.refDy, j["ref-dx"] = j.refDx, j["ref-width"] = j.refWidth, j["ref-height"] = j.refHeight, j["x-alignment"] = j.xAlignment, j["y-alignment"] = j.yAlignment
  }(joint, _, g, $, joint.util), joint.dia.Cell = Backbone.Model.extend({
    constructor: function(a, b) {
      var c, d = a || {};
      this.cid = joint.util.uniqueId("c"), this.attributes = {}, b && b.collection && (this.collection = b.collection), b && b.parse && (d = this.parse(d, b) || {}), (c = joint.util.result(this, "defaults")) && (d = joint.util.merge({}, c, d)), this.set(d, b), this.changed = {}, this.initialize.apply(this, arguments)
    },
    translate: function(a, b, c) {
      throw new Error("Must define a translate() method.")
    },
    toJSON: function() {
      var a = this.constructor.prototype.defaults.attrs || {},
        b = this.attributes.attrs,
        c = {};
      joint.util.forIn(b, function(b, d) {
        var e = a[d];
        joint.util.forIn(b, function(a, b) {
          joint.util.isObject(a) && !Array.isArray(a) ? joint.util.forIn(a, function(a, f) {
            e && e[b] && joint.util.isEqual(e[b][f], a) || (c[d] = c[d] || {}, (c[d][b] || (c[d][b] = {}))[f] = a)
          }) : e && joint.util.isEqual(e[b], a) || (c[d] = c[d] || {}, c[d][b] = a)
        })
      });
      var d = joint.util.cloneDeep(joint.util.omit(this.attributes, "attrs"));
      return d.attrs = c, d
    },
    initialize: function(a) {
      a && a.id || this.set("id", joint.util.uuid(), {
        silent: !0
      }), this._transitionIds = {}, this.processPorts(), this.on("change:attrs", this.processPorts, this)
    },
    processPorts: function() {
      var a = this.ports,
        b = {};
      joint.util.forIn(this.get("attrs"), function(a, c) {
        a && a.port && (void 0 !== a.port.id ? b[a.port.id] = a.port : b[a.port] = {
          id: a.port
        })
      });
      var c = {};
      if (joint.util.forIn(a, function(a, d) {
          b[d] || (c[d] = !0)
        }), this.graph && !joint.util.isEmpty(c)) {
        var d = this.graph.getConnectedLinks(this, {
          inbound: !0
        });
        d.forEach(function(a) {
          c[a.get("target").port] && a.remove()
        });
        var e = this.graph.getConnectedLinks(this, {
          outbound: !0
        });
        e.forEach(function(a) {
          c[a.get("source").port] && a.remove()
        })
      }
      this.ports = b
    },
    remove: function(a) {
      a = a || {};
      var b = this.graph;
      b && b.startBatch("remove");
      var c = this.get("parent");
      if (c) {
        var d = b && b.getCell(c);
        d.unembed(this)
      }
      return joint.util.invoke(this.getEmbeddedCells(), "remove", a), this.trigger("remove", this, this.collection, a), b && b.stopBatch("remove"), this
    },
    toFront: function(a) {
      if (this.graph) {
        a = a || {};
        var b = (this.graph.getLastCell().get("z") || 0) + 1;
        if (this.startBatch("to-front").set("z", b, a), a.deep) {
          var c = this.getEmbeddedCells({
            deep: !0,
            breadthFirst: !0
          });
          c.forEach(function(c) {
            c.set("z", ++b, a)
          })
        }
        this.stopBatch("to-front")
      }
      return this
    },
    toBack: function(a) {
      if (this.graph) {
        a = a || {};
        var b = (this.graph.getFirstCell().get("z") || 0) - 1;
        if (this.startBatch("to-back"), a.deep) {
          var c = this.getEmbeddedCells({
            deep: !0,
            breadthFirst: !0
          });
          c.reverse().forEach(function(c) {
            c.set("z", b--, a)
          })
        }
        this.set("z", b, a).stopBatch("to-back")
      }
      return this
    },
    embed: function(a, b) {
      if (this === a || this.isEmbeddedIn(a)) throw new Error("Recursive embedding not allowed.");
      this.startBatch("embed");
      var c = joint.util.assign([], this.get("embeds"));
      return c[a.isLink() ? "unshift" : "push"](a.id), a.set("parent", this.id, b), this.set("embeds", joint.util.uniq(c), b), this.stopBatch("embed"), this
    },
    unembed: function(a, b) {
      return this.startBatch("unembed"), a.unset("parent", b), this.set("embeds", joint.util.without(this.get("embeds"), a.id), b), this.stopBatch("unembed"), this
    },
    getAncestors: function() {
      var a = [],
        b = this.get("parent");
      if (!this.graph) return a;
      for (; void 0 !== b;) {
        var c = this.graph.getCell(b);
        if (void 0 === c) break;
        a.push(c), b = c.get("parent")
      }
      return a
    },
    getEmbeddedCells: function(a) {
      if (a = a || {}, this.graph) {
        var b;
        if (a.deep) if (a.breadthFirst) {
          b = [];
          for (var c = this.getEmbeddedCells(); c.length > 0;) {
            var d = c.shift();
            b.push(d), c.push.apply(c, d.getEmbeddedCells())
          }
        } else b = this.getEmbeddedCells(), b.forEach(function(c) {
          b.push.apply(b, c.getEmbeddedCells(a))
        });
        else b = joint.util.toArray(this.get("embeds")).map(this.graph.getCell, this.graph);
        return b
      }
      return []
    },
    isEmbeddedIn: function(a, b) {
      var c = joint.util.isString(a) ? a : a.id,
        d = this.get("parent");
      if (b = joint.util.defaults({
          deep: !0
        }, b), this.graph && b.deep) {
        for (; d;) {
          if (d === c) return !0;
          d = this.graph.getCell(d).get("parent")
        }
        return !1
      }
      return d === c
    },
    isEmbedded: function() {
      return !!this.get("parent")
    },
    clone: function(a) {
      if (a = a || {}, a.deep) return joint.util.toArray(joint.dia.Graph.prototype.cloneCells.call(null, [this].concat(this.getEmbeddedCells({
        deep: !0
      }))));
      var b = Backbone.Model.prototype.clone.apply(this, arguments);
      return b.set("id", joint.util.uuid()), b.unset("embeds"), b.unset("parent"), b
    },
    prop: function(a, b, c) {
      var d = "/",
        e = joint.util.isString(a);
      if (e || Array.isArray(a)) {
        if (arguments.length > 1) {
          var f, g;
          e ? (f = a, g = f.split("/")) : (f = a.join(d), g = a.slice());
          var h = g[0],
            i = g.length;
          if (c = c || {}, c.propertyPath = f, c.propertyValue = b, c.propertyPathArray = g, 1 === i) return this.set(h, b, c);
          for (var j = {}, k = j, l = h, m = 1; m < i; m++) {
            var n = g[m],
              o = Number.isFinite(e ? Number(n) : n);
            k = k[l] = o ? [] : {}, l = n
          }
          j = joint.util.setByPath(j, g, b, "/");
          var p = joint.util.merge({}, this.attributes);
          c.rewrite && joint.util.unsetByPath(p, f, "/");
          var q = joint.util.merge(p, j);
          return this.set(h, q[h], c)
        }
        return joint.util.getByPath(this.attributes, a, d)
      }
      return this.set(joint.util.merge({}, this.attributes, a), b)
    },
    removeProp: function(a, b) {
      b = b || {}, b.dirty = !0;
      var c = Array.isArray(a) ? a : a.split("/");
      if (1 === c.length) return this.unset(a, b);
      var d = c[0],
        e = c.slice(1),
        f = joint.util.merge({}, this.get(d));
      return joint.util.unsetByPath(f, e, "/"), this.set(d, f, b)
    },
    attr: function(a, b, c) {
      var d = Array.from(arguments);
      return 0 === d.length ? this.get("attrs") : (Array.isArray(a) ? d[0] = ["attrs"].concat(a) : joint.util.isString(a) ? d[0] = "attrs/" + a : d[0] = {
        attrs: a
      }, this.prop.apply(this, d))
    },
    removeAttr: function(a, b) {
      return Array.isArray(a) ? this.removeProp(["attrs"].concat(a)) : this.removeProp("attrs/" + a, b)
    },
    transition: function(a, b, c, d) {
      d = d || "/";
      var e = {
        duration: 100,
        delay: 10,
        timingFunction: joint.util.timing.linear,
        valueFunction: joint.util.interpolate.number
      };
      c = joint.util.assign(e, c);
      var f, g = 0,
        h = function(b) {
          var d, e, i;
          g = g || b, b -= g, e = b / c.duration, e < 1 ? this._transitionIds[a] = d = joint.util.nextFrame(h) : (e = 1, delete this._transitionIds[a]), i = f(c.timingFunction(e)), c.transitionId = d, this.prop(a, i, c), d || this.trigger("transition:end", this, a)
        }.bind(this),
        i = function(e) {
          this.stopTransitions(a), f = c.valueFunction(joint.util.getByPath(this.attributes, a, d), b), this._transitionIds[a] = joint.util.nextFrame(e), this.trigger("transition:start", this, a)
        }.bind(this);
      return setTimeout(i, c.delay, h)
    },
    getTransitions: function() {
      return Object.keys(this._transitionIds)
    },
    stopTransitions: function(a, b) {
      b = b || "/";
      var c = a && a.split(b);
      return Object.keys(this._transitionIds).filter(c &&
        function(a) {
          return joint.util.isEqual(c, a.split(b).slice(0, c.length))
        }).forEach(function(a) {
        joint.util.cancelFrame(this._transitionIds[a]), delete this._transitionIds[a], this.trigger("transition:end", this, a)
      }, this), this
    },
    addTo: function(a, b) {
      return a.addCell(this, b), this
    },
    findView: function(a) {
      return a.findViewByModel(this)
    },
    isElement: function() {
      return !1
    },
    isLink: function() {
      return !1
    },
    startBatch: function(a, b) {
      return this.graph && this.graph.startBatch(a, joint.util.assign({}, b, {
        cell: this
      })), this
    },
    stopBatch: function(a, b) {
      return this.graph && this.graph.stopBatch(a, joint.util.assign({}, b, {
        cell: this
      })), this
    }
  }, {
    getAttributeDefinition: function(a) {
      var b = this.attributes,
        c = joint.dia.attributes;
      return b && b[a] || c[a]
    },
    define: function(a, b, c, d) {
      c = joint.util.assign({
        defaults: joint.util.defaultsDeep({
          type: a
        }, b, this.prototype.defaults)
      }, c);
      var e = this.extend(c, d);
      return joint.util.setByPath(joint.shapes, a, e, "."), e
    }
  }), joint.dia.CellView = joint.mvc.View.extend({
    tagName: "g",
    svgElement: !0,
    className: function() {
      var a = ["cell"],
        b = this.model.get("type");
      return b && b.toLowerCase().split(".").forEach(function(b, c, d) {
        a.push("type-" + d.slice(0, c + 1).join("-"))
      }), a.join(" ")
    },
    attributes: function() {
      return {
        "model-id": this.model.id
      }
    },
    constructor: function(a) {
      a.id = a.id || joint.util.guid(this), joint.mvc.View.call(this, a)
    },
    init: function() {
      joint.util.bindAll(this, "remove", "update"), this.$el.data("view", this), this.$el.attr("data-type", this.model.get("type")), this.listenTo(this.model, "change:attrs", this.onChangeAttrs)
    },
    onChangeAttrs: function(a, b, c) {
      return c.dirty ? this.render() : this.update(a, b, c)
    },
    can: function(a) {
      var b = joint.util.isFunction(this.options.interactive) ? this.options.interactive(this) : this.options.interactive;
      return joint.util.isObject(b) && b[a] !== !1 || joint.util.isBoolean(b) && b !== !1
    },
    findBySelector: function(a, b) {
      var c = $(b || this.el);
      return "." === a ? c : c.find(a)
    },
    notify: function(a) {
      if (this.paper) {
        var b = Array.prototype.slice.call(arguments, 1);
        this.trigger.apply(this, [a].concat(b)), this.paper.trigger.apply(this.paper, [a, this].concat(b))
      }
    },
    getStrokeBBox: function(a) {
      var b = !! a;
      a = a || this.el;
      var c, d = V(a).getBBox({
        target: this.paper.viewport
      });
      return c = b ? V(a).attr("stroke-width") : this.model.attr("rect/stroke-width") || this.model.attr("circle/stroke-width") || this.model.attr("ellipse/stroke-width") || this.model.attr("path/stroke-width"), c = parseFloat(c) || 0, g.rect(d).moveAndExpand({
        x: -c / 2,
        y: -c / 2,
        width: c,
        height: c
      })
    },
    getBBox: function() {
      return this.vel.getBBox({
        target: this.paper.svg
      })
    },
    highlight: function(a, b) {
      return a = a ? this.$(a)[0] || this.el : this.el, b = b || {}, b.partial = a !== this.el, this.notify("cell:highlight", a, b), this
    },
    unhighlight: function(a, b) {
      return a = a ? this.$(a)[0] || this.el : this.el, b = b || {}, b.partial = a != this.el, this.notify("cell:unhighlight", a, b), this
    },
    findMagnet: function(a) {
      var b = this.$(a),
        c = this.$el;
      0 === b.length && (b = c);
      do {
        var d = b.attr("magnet");
        if ((d || b.is(c)) && "false" !== d) return b[0];
        b = b.parent()
      } while (b.length > 0)
    },
    getSelector: function(a, b) {
      if (a === this.el) return b;
      var c;
      if (a) {
        var d = V(a).index() + 1;
        c = a.tagName + ":nth-child(" + d + ")", b && (c += " > " + b), c = this.getSelector(a.parentNode, c)
      }
      return c
    },
    getAttributeDefinition: function(a) {
      return this.model.constructor.getAttributeDefinition(a)
    },
    setNodeAttributes: function(a, b) {
      joint.util.isEmpty(b) || (a instanceof SVGElement ? V(a).attr(b) : $(a).attr(b))
    },
    processNodeAttributes: function(a, b) {
      var c, d, e, f, g, h, i, j, k, l = [];
      for (c in b) b.hasOwnProperty(c) && (d = b[c], e = this.getAttributeDefinition(c), !e || joint.util.isFunction(e.qualify) && !e.qualify.call(this, d, a, b) ? (h || (h = {}), h[joint.util.toKebabCase(c)] = d) : (joint.util.isString(e.set) && (h || (h = {}), h[e.set] = d), null !== d && l.push(c, e)));
      for (f = 0, g = l.length; f < g; f += 2) c = l[f], e = l[f + 1], d = b[c], joint.util.isFunction(e.set) && (i || (i = {}), i[c] = d), joint.util.isFunction(e.position) && (j || (j = {}), j[c] = d), joint.util.isFunction(e.offset) && (k || (k = {}), k[c] = d);
      return {
        raw: b,
        normal: h,
        set: i,
        position: j,
        offset: k
      }
    },
    updateRelativeAttributes: function(a, b, c, d) {
      d || (d = {});
      var e, f, h, i = b.raw || {},
        j = b.normal || {},
        k = b.set,
        l = b.position,
        m = b.offset;
      for (e in k) {
        f = k[e], h = this.getAttributeDefinition(e);
        var n = h.set.call(this, f, c.clone(), a, i);
        joint.util.isObject(n) ? joint.util.assign(j, n) : void 0 !== n && (j[e] = n)
      }
      if (a instanceof HTMLElement) return void this.setNodeAttributes(a, j);
      var o = j.transform,
        p = V.transformStringToMatrix(o),
        q = g.Point(p.e, p.f);
      o && (j = joint.util.omit(j, "transform"), p.e = p.f = 0);
      var r, s, t;
      if (l || m) {
        var u = this.getNodeScale(a, d.scalableNode);
        r = u.sx, s = u.sy
      }
      var v = !1;
      for (e in l) f = l[e], h = this.getAttributeDefinition(e), t = h.position.call(this, f, c.clone(), a, i), t && (q.offset(g.Point(t).scale(r, s)), v || (v = !0));
      this.setNodeAttributes(a, j);
      var w = !1;
      if (m) {
        var x = a.getBoundingClientRect();
        if (x.width > 0 && x.height > 0) {
          var y = V.transformRect(a.getBBox(), p).scale(1 / r, 1 / s);
          for (e in m) f = m[e], h = this.getAttributeDefinition(e), t = h.offset.call(this, f, y, a, i), t && (q.offset(g.Point(t).scale(r, s)), w || (w = !0))
        }
      }(void 0 !== o || v || w) && (q.round(1), p.e = q.x, p.f = q.y, a.setAttribute("transform", V.matrixToTransformString(p)))
    },
    getNodeScale: function(a, b) {
      var c, d;
      if (b && b.contains(a)) {
        var e = b.scale();
        c = 1 / e.sx, d = 1 / e.sy
      } else c = 1, d = 1;
      return {
        sx: c,
        sy: d
      }
    },
    findNodesAttributes: function(a, b, c) {
      var d = {};
      for (var e in a) if (a.hasOwnProperty(e)) for (var f = c[e] = this.findBySelector(e, b), g = 0, h = f.length; g < h; g++) {
        var i = f[g],
          j = V.ensureId(i),
          k = a[e],
          l = d[j];
        l ? (l.merged || (l.merged = !0, l.attributes = joint.util.cloneDeep(l.attributes)), joint.util.merge(l.attributes, k)) : d[j] = {
          attributes: k,
          node: i,
          merged: !1
        }
      }
      return d
    },
    updateDOMSubtreeAttributes: function(a, b, c) {
      c || (c = {}), c.rootBBox || (c.rootBBox = g.Rect());
      var d, e, f, h, i, j = {},
        k = {},
        l = [],
        m = c.roAttributes,
        n = this.findNodesAttributes(m || b, a, j),
        o = m ? o = this.findNodesAttributes(b, a, j) : n;
      for (var p in n) if (h = n[p], f = h.attributes, e = h.node, i = this.processNodeAttributes(e, f), i.set || i.position || i.offset) {
        var q, r = o[p] && o[p].attributes,
          s = r && void 0 === f.ref ? r.ref : f.ref;
        if (s) {
          if (q = (j[s] || this.findBySelector(s, a))[0], !q) throw new Error('dia.ElementView: "' + s + '" reference does not exists.')
        } else q = null;
        d = {
          node: e,
          refNode: q,
          processedAttributes: i,
          allAttributes: r
        };
        var t = l.findIndex(function(a) {
          return a.refNode === e
        });
        t > -1 ? l.splice(t, 0, d) : l.push(d)
      } else this.setNodeAttributes(e, i.normal);
      for (var u = 0, v = l.length; u < v; u++) {
        d = l[u], e = d.node, q = d.refNode;
        var w = q ? V.ensureId(q) : "",
          x = k[w];
        x || (x = k[w] = q ? V(q).getBBox({
          target: c.rotatableNode || a
        }) : c.rootBBox), m ? (i = this.processNodeAttributes(e, d.allAttributes), this.mergeProcessedAttributes(i, d.processedAttributes)) : i = d.processedAttributes, this.updateRelativeAttributes(e, i, x, c)
      }
    },
    mergeProcessedAttributes: function(a, b) {
      a.set || (a.set = {}), a.position || (a.position = {}), a.offset || (a.offset = {}), joint.util.assign(a.set, b.set), joint.util.assign(a.position, b.position), joint.util.assign(a.offset, b.offset);
      var c = a.normal && a.normal.transform;
      void 0 !== c && b.normal && (b.normal.transform = c), a.normal = b.normal
    },
    pointerdblclick: function(a, b, c) {
      this.notify("cell:pointerdblclick", a, b, c)
    },
    pointerclick: function(a, b, c) {
      this.notify("cell:pointerclick", a, b, c)
    },
    pointerdown: function(a, b, c) {
      this.model.graph && (this.model.startBatch("pointer"), this._graph = this.model.graph), this.notify("cell:pointerdown", a, b, c)
    },
    pointermove: function(a, b, c) {
      this.notify("cell:pointermove", a, b, c)
    },
    pointerup: function(a, b, c) {
      this.notify("cell:pointerup", a, b, c), this._graph && (this._graph.stopBatch("pointer", {
        cell: this.model
      }), delete this._graph)
    },
    mouseover: function(a) {
      this.notify("cell:mouseover", a)
    },
    mouseout: function(a) {
      this.notify("cell:mouseout", a)
    },
    mouseenter: function(a) {
      this.notify("cell:mouseenter", a)
    },
    mouseleave: function(a) {
      this.notify("cell:mouseleave", a)
    },
    mousewheel: function(a, b, c, d) {
      this.notify("cell:mousewheel", a, b, c, d)
    },
    contextmenu: function(a, b, c) {
      this.notify("cell:contextmenu", a, b, c)
    },
    event: function(a, b, c, d) {
      this.notify(b, a, c, d)
    },
    setInteractivity: function(a) {
      this.options.interactive = a
    }
  }), joint.dia.Element = joint.dia.Cell.extend({
    defaults: {
      position: {
        x: 0,
        y: 0
      },
      size: {
        width: 1,
        height: 1
      },
      angle: 0
    },
    initialize: function() {
      this._initializePorts(), joint.dia.Cell.prototype.initialize.apply(this, arguments)
    },
    _initializePorts: function() {},
    isElement: function() {
      return !0
    },
    position: function(a, b, c) {
      var d = joint.util.isNumber(b);
      if (c = (d ? c : a) || {}, c.parentRelative) {
        if (!this.graph) throw new Error("Element must be part of a graph.");
        var e = this.graph.getCell(this.get("parent")),
          f = e && !e.isLink() ? e.get("position") : {
            x: 0,
            y: 0
          }
      }
      if (d) {
        if (c.parentRelative && (a += f.x, b += f.y), c.deep) {
          var h = this.get("position");
          this.translate(a - h.x, b - h.y, c)
        } else this.set("position", {
          x: a,
          y: b
        }, c);
        return this
      }
      var i = g.point(this.get("position"));
      return c.parentRelative ? i.difference(f) : i
    },
    translate: function(a, b, c) {
      if (a = a || 0, b = b || 0, 0 === a && 0 === b) return this;
      c = c || {}, c.translateBy = c.translateBy || this.id;
      var d = this.get("position") || {
          x: 0,
          y: 0
        };
      if (c.restrictedArea && c.translateBy === this.id) {
        var e = this.getBBox({
            deep: !0
          }),
          f = c.restrictedArea,
          g = d.x - e.x,
          h = d.y - e.y,
          i = Math.max(f.x + g, Math.min(f.x + f.width + g - e.width, d.x + a)),
          j = Math.max(f.y + h, Math.min(f.y + f.height + h - e.height, d.y + b));
        a = i - d.x, b = j - d.y
      }
      var k = {
        x: d.x + a,
        y: d.y + b
      };
      return c.tx = a, c.ty = b, c.transition ? (joint.util.isObject(c.transition) || (c.transition = {}), this.transition("position", k, joint.util.assign({}, c.transition, {
        valueFunction: joint.util.interpolate.object
      }))) : this.set("position", k, c), joint.util.invoke(this.getEmbeddedCells(), "translate", a, b, c), this
    },
    size: function(a, b, c) {
      var d = this.get("size");
      return void 0 === a ? {
        width: d.width,
        height: d.height
      } : (joint.util.isObject(a) && (c = b, b = joint.util.isNumber(a.height) ? a.height : d.height, a = joint.util.isNumber(a.width) ? a.width : d.width), this.resize(a, b, c))
    },
    resize: function(a, b, c) {
      if (c = c || {}, this.startBatch("resize", c), c.direction) {
        var d = this.get("size");
        switch (c.direction) {
          case "left":
          case "right":
            b = d.height;
            break;
          case "top":
          case "bottom":
            a = d.width
        }
        var e = g.normalizeAngle(this.get("angle") || 0),
          f = {
            "top-right": 0,
            right: 0,
            "top-left": 1,
            top: 1,
            "bottom-left": 2,
            left: 2,
            "bottom-right": 3,
            bottom: 3
          }[c.direction];
        c.absolute && (f += Math.floor((e + 45) / 90), f %= 4);
        var h = this.getBBox(),
          i = h[["bottomLeft", "corner", "topRight", "origin"][f]](),
          j = g.point(i).rotate(h.center(), -e),
          k = Math.sqrt(a * a + b * b) / 2,
          l = f * Math.PI / 2;
        l += Math.atan(f % 2 == 0 ? b / a : a / b), l -= g.toRad(e);
        var m = g.point.fromPolar(k, l, j),
          n = g.point(m).offset(a / -2, b / -2);
        this.set("size", {
          width: a,
          height: b
        }, c), this.position(n.x, n.y, c)
      } else this.set("size", {
        width: a,
        height: b
      }, c);
      return this.stopBatch("resize", c), this
    },
    scale: function(a, b, c, d) {
      var e = this.getBBox().scale(a, b, c);
      return this.startBatch("scale", d), this.position(e.x, e.y, d), this.resize(e.width, e.height, d), this.stopBatch("scale"), this
    },
    fitEmbeds: function(a) {
      if (a = a || {}, !this.graph) throw new Error("Element must be part of a graph.");
      var b = this.getEmbeddedCells();
      if (b.length > 0) {
        this.startBatch("fit-embeds", a), a.deep && joint.util.invoke(b, "fitEmbeds", a);
        var c = this.graph.getCellsBBox(b),
          d = joint.util.normalizeSides(a.padding);
        c.moveAndExpand({
          x: -d.left,
          y: -d.top,
          width: d.right + d.left,
          height: d.bottom + d.top
        }), this.set({
          position: {
            x: c.x,
            y: c.y
          },
          size: {
            width: c.width,
            height: c.height
          }
        }, a), this.stopBatch("fit-embeds")
      }
      return this
    },
    rotate: function(a, b, c, d) {
      if (c) {
        var e = this.getBBox().center(),
          f = this.get("size"),
          g = this.get("position");
        e.rotate(c, this.get("angle") - a);
        var h = e.x - f.width / 2 - g.x,
          i = e.y - f.height / 2 - g.y;
        this.startBatch("rotate", {
          angle: a,
          absolute: b,
          origin: c
        }), this.position(g.x + h, g.y + i, d), this.rotate(a, b, null, d), this.stopBatch("rotate")
      } else this.set("angle", b ? a : (this.get("angle") + a) % 360, d);
      return this
    },
    getBBox: function(a) {
      if (a = a || {}, a.deep && this.graph) {
        var b = this.getEmbeddedCells({
          deep: !0,
          breadthFirst: !0
        });
        return b.push(this), this.graph.getCellsBBox(b)
      }
      var c = this.get("position"),
        d = this.get("size");
      return g.rect(c.x, c.y, d.width, d.height)
    }
  }), joint.dia.ElementView = joint.dia.CellView.extend({
    _removePorts: function() {},
    _renderPorts: function() {},
    className: function() {
      var a = joint.dia.CellView.prototype.className.apply(this).split(" ");
      return a.push("element"), a.join(" ")
    },
    initialize: function() {
      joint.dia.CellView.prototype.initialize.apply(this, arguments);
      var a = this.model;
      this.listenTo(a, "change:position", this.translate), this.listenTo(a, "change:size", this.resize), this.listenTo(a, "change:angle", this.rotate), this.listenTo(a, "change:markup", this.render), this._initializePorts()
    },
    _initializePorts: function() {},
    update: function(a, b) {
      this._removePorts();
      var c = this.model,
        d = c.attr();
      this.updateDOMSubtreeAttributes(this.el, d, {
        rootBBox: g.Rect(c.size()),
        scalableNode: this.scalableNode,
        rotatableNode: this.rotatableNode,
        roAttributes: b === d ? null : b
      }), this._renderPorts()
    },
    renderMarkup: function() {
      var a = this.model.get("markup") || this.model.markup;
      if (!a) throw new Error("properties.markup is missing while the default render() implementation is used.");
      var b = joint.util.template(a)(),
        c = V(b);
      this.vel.append(c)
    },
    render: function() {
      this.$el.empty(), this.renderMarkup(), this.rotatableNode = this.vel.findOne(".rotatable");
      var a = this.scalableNode = this.vel.findOne(".scalable");
      return a && this.update(), this.resize(), this.rotate(), this.translate(), this
    },
    resize: function(a, b, c) {
      var d = this.model,
        e = d.get("size") || {
            width: 1,
            height: 1
          },
        f = d.get("angle") || 0,
        g = this.scalableNode;
      if (!g) return 0 !== f && this.rotate(), void this.update();
      var h = !1;
      g.node.getElementsByTagName("path").length > 0 && (h = !0);
      var i = g.getBBox({
          recursive: h
        }),
        j = e.width / (i.width || 1),
        k = e.height / (i.height || 1);
      g.attr("transform", "scale(" + j + "," + k + ")");
      var l = this.rotatableNode,
        m = l && l.attr("transform");
      if (m && "null" !== m) {
        l.attr("transform", m + " rotate(" + -f + "," + e.width / 2 + "," + e.height / 2 + ")");
        var n = g.getBBox({
          target: this.paper.viewport
        });
        d.set("position", {
          x: n.x,
          y: n.y
        }, c), this.rotate()
      }
      this.update()
    },
    translate: function(a, b, c) {
      var d = this.model.get("position") || {
          x: 0,
          y: 0
        };
      this.vel.attr("transform", "translate(" + d.x + "," + d.y + ")")
    },
    rotate: function() {
      var a = this.rotatableNode;
      if (a) {
        var b = this.model.get("angle") || 0,
          c = this.model.get("size") || {
              width: 1,
              height: 1
            },
          d = c.width / 2,
          e = c.height / 2;
        0 !== b ? a.attr("transform", "rotate(" + b + "," + d + "," + e + ")") : a.removeAttr("transform")
      }
    },
    getBBox: function(a) {
      if (a && a.useModelGeometry) {
        var b = this.model.getBBox().bbox(this.model.get("angle"));
        return this.paper.localToPaperRect(b)
      }
      return joint.dia.CellView.prototype.getBBox.apply(this, arguments)
    },
    prepareEmbedding: function(a) {
      a = a || {};
      var b = a.model || this.model,
        c = a.paper || this.paper,
        d = c.model;
      b.startBatch("to-front", a), b.toFront({
        deep: !0,
        ui: !0
      });
      var e = d.get("cells").max("z").get("z"),
        f = d.getConnectedLinks(b, {
          deep: !0
        });
      joint.util.invoke(f, "set", "z", e + 1, {
        ui: !0
      }), b.stopBatch("to-front");
      var g = b.get("parent");
      g && d.getCell(g).unembed(b, {
        ui: !0
      })
    },
    processEmbedding: function(a) {
      a = a || {};
      var b = a.model || this.model,
        c = a.paper || this.paper,
        d = c.options,
        e = c.model.findModelsUnderElement(b, {
          searchBy: d.findParentBy
        });
      d.frontParentOnly && (e = e.slice(-1));
      for (var f = null, g = this._candidateEmbedView, h = e.length - 1; h >= 0; h--) {
        var i = e[h];
        if (g && g.model.id == i.id) {
          f = g;
          break
        }
        var j = i.findView(c);
        if (d.validateEmbedding.call(c, this, j)) {
          f = j;
          break
        }
      }
      f && f != g && (this.clearEmbedding(), this._candidateEmbedView = f.highlight(null, {
        embedding: !0
      })), !f && g && this.clearEmbedding()
    },
    clearEmbedding: function() {
      var a = this._candidateEmbedView;
      a && (a.unhighlight(null, {
        embedding: !0
      }), this._candidateEmbedView = null)
    },
    finalizeEmbedding: function(a) {
      a = a || {};
      var b = this._candidateEmbedView,
        c = a.model || this.model,
        d = a.paper || this.paper;
      b && (b.model.embed(c, {
        ui: !0
      }), b.unhighlight(null, {
        embedding: !0
      }), delete this._candidateEmbedView), joint.util.invoke(d.model.getConnectedLinks(c, {
        deep: !0
      }), "reparent", {
        ui: !0
      })
    },
    pointerdown: function(a, b, c) {
      var d = this.paper;
      if (a.target.getAttribute("magnet") && this.can("addLinkFromMagnet") && d.options.validateMagnet.call(d, this, a.target)) {
        this.model.startBatch("add-link");
        var e = d.getDefaultLink(this, a.target);
        e.set({
          source: {
            id: this.model.id,
            selector: this.getSelector(a.target),
            port: a.target.getAttribute("port")
          },
          target: {
            x: b,
            y: c
          }
        }), d.model.addCell(e);
        var f = this._linkView = d.findViewByModel(e);
        f.pointerdown(a, b, c), f.startArrowheadMove("target", {
          whenNotAllowed: "remove"
        })
      } else this._dx = b, this._dy = c, this.restrictedArea = d.getRestrictedArea(this), joint.dia.CellView.prototype.pointerdown.apply(this, arguments), this.notify("element:pointerdown", a, b, c)
    },
    pointermove: function(a, b, c) {
      if (this._linkView) this._linkView.pointermove(a, b, c);
      else {
        var d = this.paper.options.gridSize;
        if (this.can("elementMove")) {
          var e = this.model.get("position"),
            f = g.snapToGrid(e.x, d) - e.x + g.snapToGrid(b - this._dx, d),
            h = g.snapToGrid(e.y, d) - e.y + g.snapToGrid(c - this._dy, d);
          this.model.translate(f, h, {
            restrictedArea: this.restrictedArea,
            ui: !0
          }), this.paper.options.embeddingMode && (this._inProcessOfEmbedding || (this.prepareEmbedding(), this._inProcessOfEmbedding = !0), this.processEmbedding())
        }
        this._dx = g.snapToGrid(b, d), this._dy = g.snapToGrid(c, d), joint.dia.CellView.prototype.pointermove.apply(this, arguments), this.notify("element:pointermove", a, b, c)
      }
    },
    pointerup: function(a, b, c) {
      this._linkView ? (this._linkView.pointerup(a, b, c), this._linkView = null, this.model.stopBatch("add-link")) : (this._inProcessOfEmbedding && (this.finalizeEmbedding(), this._inProcessOfEmbedding = !1), this.notify("element:pointerup", a, b, c), joint.dia.CellView.prototype.pointerup.apply(this, arguments))
    },
    mouseenter: function(a) {
      joint.dia.CellView.prototype.mouseenter.apply(this, arguments), this.notify("element:mouseenter", a)
    },
    mouseleave: function(a) {
      joint.dia.CellView.prototype.mouseleave.apply(this, arguments), this.notify("element:mouseleave", a)
    }
  }), joint.dia.Link = joint.dia.Cell.extend({
    markup: ['<path class="connection" stroke="black" d="M 0 0 0 0"/>', '<path class="marker-source" fill="black" stroke="black" d="M 0 0 0 0"/>', '<path class="marker-target" fill="black" stroke="black" d="M 0 0 0 0"/>', '<path class="connection-wrap" d="M 0 0 0 0"/>', '<g class="labels"/>', '<g class="marker-vertices"/>', '<g class="marker-arrowheads"/>', '<g class="link-tools"/>'].join(""),
    labelMarkup: ['<g class="label">', "<rect />", "<text />", "</g>"].join(""),
    toolMarkup: ['<g class="link-tool">', '<g class="tool-remove" event="remove">', '<circle r="11" />', '<path transform="scale(.8) translate(-16, -16)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z" />', "<title>Remove link.</title>", "</g>", '<g class="tool-options" event="link:options">', '<circle r="11" transform="translate(25)"/>', '<path fill="white" transform="scale(.55) translate(29, -16)" d="M31.229,17.736c0.064-0.571,0.104-1.148,0.104-1.736s-0.04-1.166-0.104-1.737l-4.377-1.557c-0.218-0.716-0.504-1.401-0.851-2.05l1.993-4.192c-0.725-0.91-1.549-1.734-2.458-2.459l-4.193,1.994c-0.647-0.347-1.334-0.632-2.049-0.849l-1.558-4.378C17.165,0.708,16.588,0.667,16,0.667s-1.166,0.041-1.737,0.105L12.707,5.15c-0.716,0.217-1.401,0.502-2.05,0.849L6.464,4.005C5.554,4.73,4.73,5.554,4.005,6.464l1.994,4.192c-0.347,0.648-0.632,1.334-0.849,2.05l-4.378,1.557C0.708,14.834,0.667,15.412,0.667,16s0.041,1.165,0.105,1.736l4.378,1.558c0.217,0.715,0.502,1.401,0.849,2.049l-1.994,4.193c0.725,0.909,1.549,1.733,2.459,2.458l4.192-1.993c0.648,0.347,1.334,0.633,2.05,0.851l1.557,4.377c0.571,0.064,1.148,0.104,1.737,0.104c0.588,0,1.165-0.04,1.736-0.104l1.558-4.377c0.715-0.218,1.399-0.504,2.049-0.851l4.193,1.993c0.909-0.725,1.733-1.549,2.458-2.458l-1.993-4.193c0.347-0.647,0.633-1.334,0.851-2.049L31.229,17.736zM16,20.871c-2.69,0-4.872-2.182-4.872-4.871c0-2.69,2.182-4.872,4.872-4.872c2.689,0,4.871,2.182,4.871,4.872C20.871,18.689,18.689,20.871,16,20.871z"/>', "<title>Link options.</title>", "</g>", "</g>"].join(""),
    vertexMarkup: ['<g class="marker-vertex-group" transform="translate(<%= x %>, <%= y %>)">', '<circle class="marker-vertex" idx="<%= idx %>" r="10" />', '<path class="marker-vertex-remove-area" idx="<%= idx %>" d="M16,5.333c-7.732,0-14,4.701-14,10.5c0,1.982,0.741,3.833,2.016,5.414L2,25.667l5.613-1.441c2.339,1.317,5.237,2.107,8.387,2.107c7.732,0,14-4.701,14-10.5C30,10.034,23.732,5.333,16,5.333z" transform="translate(5, -33)"/>', '<path class="marker-vertex-remove" idx="<%= idx %>" transform="scale(.8) translate(9.5, -37)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z">', "<title>Remove vertex.</title>", "</path>", "</g>"].join(""),
    arrowheadMarkup: ['<g class="marker-arrowhead-group marker-arrowhead-group-<%= end %>">', '<path class="marker-arrowhead" end="<%= end %>" d="M 26 0 L 0 13 L 26 26 z" />', "</g>"].join(""),
    defaults: {
      type: "link",
      source: {},
      target: {}
    },
    isLink: function() {
      return !0
    },
    disconnect: function() {
      return this.set({
        source: g.point(0, 0),
        target: g.point(0, 0)
      })
    },
    label: function(a, b, c) {
      return a = a || 0, arguments.length <= 1 ? this.prop(["labels", a]) : this.prop(["labels", a], b, c)
    },
    translate: function(a, b, c) {
      return c = c || {}, c.translateBy = c.translateBy || this.id, c.tx = a, c.ty = b, this.applyToPoints(function(c) {
        return {
          x: (c.x || 0) + a,
          y: (c.y || 0) + b
        }
      }, c)
    },
    scale: function(a, b, c, d) {
      return this.applyToPoints(function(d) {
        return g.point(d).scale(a, b, c).toJSON()
      }, d)
    },
    applyToPoints: function(a, b) {
      if (!joint.util.isFunction(a)) throw new TypeError("dia.Link: applyToPoints expects its first parameter to be a function.");
      var c = {},
        d = this.get("source");
      d.id || (c.source = a(d));
      var e = this.get("target");
      e.id || (c.target = a(e));
      var f = this.get("vertices");
      return f && f.length > 0 && (c.vertices = f.map(a)), this.set(c, b)
    },
    reparent: function(a) {
      var b;
      if (this.graph) {
        var c = this.graph.getCell(this.get("source").id),
          d = this.graph.getCell(this.get("target").id),
          e = this.graph.getCell(this.get("parent"));
        c && d && (b = this.graph.getCommonAncestor(c, d)), !e || b && b.id === e.id || e.unembed(this, a), b && b.embed(this, a)
      }
      return b
    },
    hasLoop: function(a) {
      a = a || {};
      var b = this.get("source").id,
        c = this.get("target").id;
      if (!b || !c) return !1;
      var d = b === c;
      if (!d && a.deep && this.graph) {
        var e = this.graph.getCell(b),
          f = this.graph.getCell(c);
        d = e.isEmbeddedIn(f) || f.isEmbeddedIn(e)
      }
      return d
    },
    getSourceElement: function() {
      var a = this.get("source");
      return a && a.id && this.graph && this.graph.getCell(a.id) || null
    },
    getTargetElement: function() {
      var a = this.get("target");
      return a && a.id && this.graph && this.graph.getCell(a.id) || null
    },
    getRelationshipAncestor: function() {
      var a;
      if (this.graph) {
        var b = [this, this.getSourceElement(), this.getTargetElement()].filter(function(a) {
          return !!a
        });
        a = this.graph.getCommonAncestor.apply(this.graph, b)
      }
      return a || null
    },
    isRelationshipEmbeddedIn: function(a) {
      var b = joint.util.isString(a) || joint.util.isNumber(a) ? a : a.id,
        c = this.getRelationshipAncestor();
      return !!c && (c.id === b || c.isEmbeddedIn(b))
    }
  }, {
    endsEqual: function(a, b) {
      var c = a.port === b.port || !a.port && !b.port;
      return a.id === b.id && c
    }
  }), joint.dia.LinkView = joint.dia.CellView.extend({
    className: function() {
      var a = joint.dia.CellView.prototype.className.apply(this).split(" ");
      return a.push("link"), a.join(" ")
    },
    options: {
      shortLinkLength: 100,
      doubleLinkTools: !1,
      longLinkLength: 160,
      linkToolsOffset: 40,
      doubleLinkToolsOffset: 60,
      sampleInterval: 50
    },
    _z: null,
    initialize: function(a) {
      joint.dia.CellView.prototype.initialize.apply(this, arguments), "function" != typeof this.constructor.prototype.watchSource && (this.constructor.prototype.watchSource = this.createWatcher("source"), this.constructor.prototype.watchTarget = this.createWatcher("target")), this._labelCache = {}, this._markerCache = {}, this.startListening()
    },
    startListening: function() {
      var a = this.model;
      this.listenTo(a, "change:markup", this.render), this.listenTo(a, "change:smooth change:manhattan change:router change:connector", this.update), this.listenTo(a, "change:toolMarkup", this.onToolsChange), this.listenTo(a, "change:labels change:labelMarkup", this.onLabelsChange), this.listenTo(a, "change:vertices change:vertexMarkup", this.onVerticesChange), this.listenTo(a, "change:source", this.onSourceChange), this.listenTo(a, "change:target", this.onTargetChange)
    },
    onSourceChange: function(a, b, c) {
      this.watchSource(a, b), c.translateBy && this.model.get("target").id || (c.updateConnectionOnly = !0, this.update(this.model, null, c))
    },
    onTargetChange: function(a, b, c) {
      this.watchTarget(a, b), c.translateBy || (c.updateConnectionOnly = !0, this.update(this.model, null, c))
    },
    onVerticesChange: function(a, b, c) {
      this.renderVertexMarkers(), c.translateBy && c.translateBy !== this.model.id || (c.updateConnectionOnly = !0, this.update(a, null, c))
    },
    onToolsChange: function() {
      this.renderTools().updateToolsPosition()
    },
    onLabelsChange: function(a, b, c) {
      var d = !0,
        e = this.model.previous("labels");
      if (e && "propertyPathArray" in c && "propertyValue" in c) {
        var f = c.propertyPathArray || [],
          g = f.length;
        if (g > 1) {
          var h = !! e[f[1]];
          h && (2 === g ? d = "markup" in Object(c.propertyValue) : "markup" !== f[2] && (d = !1))
        }
      }
      d ? this.renderLabels() : this.updateLabels(), this.updateLabelPositions()
    },
    render: function() {
      this.$el.empty();
      var a = this.model,
        b = a.get("markup") || a.markup,
        c = V(b);
      if (Array.isArray(c) || (c = [c]), this._V = {}, c.forEach(function(a) {
          var b = a.attr("class");
          b && (b = joint.util.removeClassNamePrefix(b), this._V[$.camelCase(b)] = a)
        }, this), !this._V.connection) throw new Error("link: no connection path in the markup");
      return this.renderTools(), this.renderVertexMarkers(), this.renderArrowheadMarkers(), this.vel.append(c), this.renderLabels(), this.watchSource(a, a.get("source")).watchTarget(a, a.get("target")).update(), this
    },
    renderLabels: function() {
      var a = this._V.labels;
      if (!a) return this;
      a.empty();
      var b = this.model,
        c = b.get("labels") || [],
        d = this._labelCache = {},
        e = c.length;
      if (0 === e) return this;
      for (var f = joint.util.template(b.get("labelMarkup") || b.labelMarkup), g = V(f()), h = 0; h < e; h++) {
        var i = c[h],
          j = i.markup,
          k = d[h] = j ? V("g").append(V(j)) : g.clone();
        k.addClass("label").attr("label-idx", h).appendTo(a)
      }
      return this.updateLabels(), this
    },
    updateLabels: function() {
      if (!this._V.labels) return this;
      for (var a = this.model.get("labels") || [], b = this.can("labelMove"), c = 0, d = a.length; c < d; c++) {
        var e = this._labelCache[c],
          f = a[c];
        e.attr("cursor", b ? "move" : "default");
        var h = f.attrs;
        f.markup || (h = joint.util.merge({
          text: {
            textAnchor: "middle",
            fontSize: 14,
            pointerEvents: "none",
            yAlignment: "middle"
          },
          rect: {
            ref: "text",
            fill: "white",
            rx: 3,
            ry: 3,
            refWidth: 1,
            refHeight: 1,
            refX: 0,
            refY: 0
          }
        }, h)), this.updateDOMSubtreeAttributes(e.node, h, {
          rootBBox: g.Rect(f.size)
        })
      }
      return this
    },
    renderTools: function() {
      if (!this._V.linkTools) return this;
      var a = $(this._V.linkTools.node).empty(),
        b = joint.util.template(this.model.get("toolMarkup") || this.model.toolMarkup),
        c = V(b());
      if (a.append(c.node), this._toolCache = c, this.options.doubleLinkTools) {
        var d;
        this.model.get("doubleToolMarkup") || this.model.doubleToolMarkup ? (b = joint.util.template(this.model.get("doubleToolMarkup") || this.model.doubleToolMarkup), d = V(b())) : d = c.clone(), a.append(d.node), this._tool2Cache = d
      }
      return this
    },
    renderVertexMarkers: function() {
      if (!this._V.markerVertices) return this;
      var a = $(this._V.markerVertices.node).empty(),
        b = joint.util.template(this.model.get("vertexMarkup") || this.model.vertexMarkup);
      return joint.util.toArray(this.model.get("vertices")).forEach(function(c, d) {
        a.append(V(b(joint.util.assign({
          idx: d
        }, c))).node)
      }), this
    },
    renderArrowheadMarkers: function() {
      if (!this._V.markerArrowheads) return this;
      var a = $(this._V.markerArrowheads.node);
      a.empty();
      var b = joint.util.template(this.model.get("arrowheadMarkup") || this.model.arrowheadMarkup);
      return this._V.sourceArrowhead = V(b({
        end: "source"
      })), this._V.targetArrowhead = V(b({
        end: "target"
      })), a.append(this._V.sourceArrowhead.node, this._V.targetArrowhead.node), this
    },
    update: function(a, b, c) {
      return c = c || {}, c.updateConnectionOnly || this.updateDOMSubtreeAttributes(this.el, this.model.attr()), this.updateConnection(c), this.updateLabelPositions(), this.updateToolsPosition(), this.updateArrowheadMarkers(), this.options.perpendicular = null, this.updatePostponed = !1, this
    },
    updateConnection: function(a) {
      a = a || {};
      var b, c = this.model;
      if (a.translateBy && c.isRelationshipEmbeddedIn(a.translateBy)) {
        var d = a.tx || 0,
          e = a.ty || 0;
        b = this.route = joint.util.toArray(this.route).map(function(a) {
          return g.point(a).offset(d, e)
        }), this._translateConnectionPoints(d, e)
      } else b = this.route = this.findRoute(c.get("vertices") || [], a), this._findConnectionPoints(b);
      var f = this.getPathData(b);
      this._V.connection.attr("d", f), this._V.connectionWrap && this._V.connectionWrap.attr("d", f), this._translateAndAutoOrientArrows(this._V.markerSource, this._V.markerTarget)
    },
    _findConnectionPoints: function(a) {
      var b, c, d, e, f = joint.util.toArray(a),
        h = f[0];
      b = this.getConnectionPoint("source", this.model.get("source"), h || this.model.get("target")).round();
      var i = f[f.length - 1];
      c = this.getConnectionPoint("target", this.model.get("target"), i || b).round();
      var j = this._markerCache;
      this._V.markerSource && (j.sourceBBox = j.sourceBBox || this._V.markerSource.getBBox(), d = g.point(b).move(h || c, j.sourceBBox.width * this._V.markerSource.scale().sx * -1).round()), this._V.markerTarget && (j.targetBBox = j.targetBBox || this._V.markerTarget.getBBox(), e = g.point(c).move(i || b, j.targetBBox.width * this._V.markerTarget.scale().sx * -1).round()), j.sourcePoint = d || b.clone(), j.targetPoint = e || c.clone(), this.sourcePoint = b, this.targetPoint = c
    },
    _translateConnectionPoints: function(a, b) {
      var c = this._markerCache;
      c.sourcePoint.offset(a, b), c.targetPoint.offset(a, b), this.sourcePoint.offset(a, b), this.targetPoint.offset(a, b)
    },
    updateLabelPositions: function() {
      if (!this._V.labels) return this;
      var a = this.model.get("labels") || [];
      if (!a.length) return this;
      var b, c = this._V.connection.node,
        d = c.getTotalLength();
      if (Number.isNaN(d)) return this;
      for (var e = 0, f = a.length; e < f; e++) {
        var h, i = a[e],
          j = i.position,
          k = joint.util.isObject(j),
          l = k ? j.distance : j,
          m = k ? j.offset : {
            x: 0,
            y: 0
          };
        if (Number.isFinite(l) ? (l = l > d ? d : l, l = l < 0 ? d + l : l, l = l > 1 ? l : d * l) : l = d / 2, h = c.getPointAtLength(l), joint.util.isObject(m)) h = g.point(h).offset(m);
        else if (Number.isFinite(m)) {
          b || (b = this._samples || this._V.connection.sample(this.options.sampleInterval));
          for (var n, o, p, q = 1 / 0, r = 0, s = b.length; r < s; r++) o = b[r], p = g.line(o, h).squaredLength(), p < q && (q = p, n = r);
          var t = b[n - 1],
            u = b[n + 1],
            v = 0;
          u ? v = g.point(h).theta(u) : t && (v = g.point(t).theta(h)), h = g.point(h).offset(m).rotate(h, v - 90)
        }
        this._labelCache[e].attr("transform", "translate(" + h.x + ", " + h.y + ")")
      }
      return this
    },
    updateToolsPosition: function() {
      if (!this._V.linkTools) return this;
      var a = "",
        b = this.options.linkToolsOffset,
        c = this.getConnectionLength();
      if (!Number.isNaN(c)) {
        c < this.options.shortLinkLength && (a = "scale(.5)", b /= 2);
        var d = this.getPointAtLength(b);
        if (this._toolCache.attr("transform", "translate(" + d.x + ", " + d.y + ") " + a), this.options.doubleLinkTools && c >= this.options.longLinkLength) {
          var e = this.options.doubleLinkToolsOffset || b;
          d = this.getPointAtLength(c - e), this._tool2Cache.attr("transform", "translate(" + d.x + ", " + d.y + ") " + a), this._tool2Cache.attr("visibility", "visible")
        } else this.options.doubleLinkTools && this._tool2Cache.attr("visibility", "hidden")
      }
      return this
    },
    updateArrowheadMarkers: function() {
      if (!this._V.markerArrowheads) return this;
      if ("none" === $.css(this._V.markerArrowheads.node, "display")) return this;
      var a = this.getConnectionLength() < this.options.shortLinkLength ? .5 : 1;
      return this._V.sourceArrowhead.scale(a), this._V.targetArrowhead.scale(a), this._translateAndAutoOrientArrows(this._V.sourceArrowhead, this._V.targetArrowhead), this
    },
    createWatcher: function(a) {
      function b(b, d) {
        d = d || {};
        var e = null,
          f = b.previous(a) || {};
        return f.id && this.stopListening(this.paper.getModelById(f.id), "change", c), d.id && (e = this.paper.getModelById(d.id), this.listenTo(e, "change", c)), c.call(this, e, {
          cacheOnly: !0
        }), this
      }
      var c = function(b, c) {
        this.onEndModelChange(a, b, c)
      };
      return b
    },
    onEndModelChange: function(a, b, c) {
      var d = !c.cacheOnly,
        e = this.model,
        f = e.get(a) || {};
      if (b) {
        var h = this.constructor.makeSelector(f),
          i = "source" == a ? "target" : "source",
          j = e.get(i) || {},
          k = j.id && this.constructor.makeSelector(j);
        if (c.handleBy === this.cid && h == k) this[a + "BBox"] = this[i + "BBox"], this[a + "View"] = this[i + "View"], this[a + "Magnet"] = this[i + "Magnet"];
        else if (c.translateBy) {
          var l = this[a + "BBox"];
          l.x += c.tx, l.y += c.ty
        } else {
          var m = this.paper.findViewByModel(f.id),
            n = m.el.querySelector(h);
          this[a + "BBox"] = m.getStrokeBBox(n), this[a + "View"] = m, this[a + "Magnet"] = n
        }
        if (c.handleBy === this.cid && c.translateBy && e.isEmbeddedIn(b) && !joint.util.isEmpty(e.get("vertices")) && (d = !1), !this.updatePostponed && j.id) {
          var o = this.paper.getModelById(j.id);
          f.id === j.id && (c.handleBy = this.cid), (c.handleBy === this.cid || c.translateBy && o.isEmbeddedIn(c.translateBy)) && (this.updatePostponed = !0, d = !1)
        }
      } else this[a + "BBox"] = g.rect(f.x || 0, f.y || 0, 1, 1), this[a + "View"] = this[a + "Magnet"] = null;
      d && (c.updateConnectionOnly = !0, this.update(e, null, c))
    },
    _translateAndAutoOrientArrows: function(a, b) {
      var c = joint.util.toArray(this.route);
      a && a.translateAndAutoOrient(this.sourcePoint, c[0] || this.targetPoint, this.paper.viewport), b && b.translateAndAutoOrient(this.targetPoint, c[c.length - 1] || this.sourcePoint, this.paper.viewport)
    },
    removeVertex: function(a) {
      var b = joint.util.assign([], this.model.get("vertices"));
      return b && b.length && (b.splice(a, 1), this.model.set("vertices", b, {
        ui: !0
      })), this
    },
    addVertex: function(a) {
      for (var b, c = (this.model.get("vertices") || []).slice(), d = c.slice(), e = this._V.connection.node.cloneNode(!1), f = e.getTotalLength(), g = 20, h = c.length + 1; h-- && (c.splice(h, 0, a), V(e).attr("d", this.getPathData(this.findRoute(c))), b = e.getTotalLength(), b - f > g);) c = d.slice();
      return h === -1 && (h = 0, c.splice(h, 0, a)), this.model.set("vertices", c, {
        ui: !0
      }), h
    },
    sendToken: function(a, b, c) {
      function d(a, b) {
        return function() {
          a.remove(), "function" == typeof b && b()
        }
      }
      var e, f;
      joint.util.isObject(b) ? (e = b.duration, f = "reverse" === b.direction) : (e = b, f = !1), e = e || 1e3;
      var g = {
        dur: e + "ms",
        repeatCount: 1,
        calcMode: "linear",
        fill: "freeze"
      };
      f && (g.keyPoints = "1;0", g.keyTimes = "0;1");
      var h = V(a),
        i = this._V.connection;
      h.appendTo(this.paper.viewport).animateAlongPath(g, i), setTimeout(d(h, c), e)
    },
    findRoute: function(a) {
      var b = joint.routers,
        c = this.model.get("router"),
        d = this.paper.options.defaultRouter;
      if (!c) if (this.model.get("manhattan")) c = {
        name: "orthogonal"
      };
      else {
        if (!d) return a;
        c = d
      }
      var e = c.args || {},
        f = joint.util.isFunction(c) ? c : b[c.name];
      if (!joint.util.isFunction(f)) throw new Error('unknown router: "' + c.name + '"');
      var g = f.call(this, a || [], e, this);
      return g
    },
    getPathData: function(a) {
      var b = joint.connectors,
        c = this.model.get("connector"),
        d = this.paper.options.defaultConnector;
      c || (c = this.model.get("smooth") ? {
        name: "smooth"
      } : d || {});
      var e = joint.util.isFunction(c) ? c : b[c.name],
        f = c.args || {};
      if (!joint.util.isFunction(e)) throw new Error('unknown connector: "' + c.name + '"');
      var g = e.call(this, this._markerCache.sourcePoint, this._markerCache.targetPoint, a || this.model.get("vertices") || {}, f, this);
      return g
    },
    getConnectionPoint: function(a, b, c) {
      var d;
      if (joint.util.isEmpty(b) && (b = {
          x: 0,
          y: 0
        }), joint.util.isEmpty(c) && (c = {
          x: 0,
          y: 0
        }), b.id) {
        var e, f = g.Rect("source" === a ? this.sourceBBox : this.targetBBox);
        if (c.id) {
          var h = g.Rect("source" === a ? this.targetBBox : this.sourceBBox);
          e = h.intersectionWithLineFromCenterToPoint(f.center()), e = e || h.center()
        } else e = g.Point(c);
        var i = this.paper.options;
        if (i.perpendicularLinks || this.options.perpendicular) {
          var j, k = f.origin(),
            l = f.corner();
          if (k.y <= e.y && e.y <= l.y) switch (j = f.sideNearestToPoint(e)) {
            case "left":
              d = g.Point(k.x, e.y);
              break;
            case "right":
              d = g.Point(l.x, e.y);
              break;
            default:
              d = f.center()
          } else if (k.x <= e.x && e.x <= l.x) switch (j = f.sideNearestToPoint(e)) {
            case "top":
              d = g.Point(e.x, k.y);
              break;
            case "bottom":
              d = g.Point(e.x, l.y);
              break;
            default:
              d = f.center()
          } else d = f.intersectionWithLineFromCenterToPoint(e), d = d || f.center()
        } else if (i.linkConnectionPoint) {
          var m = "target" === a ? this.targetView : this.sourceView,
            n = "target" === a ? this.targetMagnet : this.sourceMagnet;
          d = i.linkConnectionPoint(this, m, n, e, a)
        } else d = f.intersectionWithLineFromCenterToPoint(e), d = d || f.center()
      } else d = g.Point(b);
      return d
    },
    getConnectionLength: function() {
      return this._V.connection.node.getTotalLength()
    },
    getPointAtLength: function(a) {
      return this._V.connection.node.getPointAtLength(a)
    },
    _beforeArrowheadMove: function() {
      this._z = this.model.get("z"), this.model.toFront(), this.el.style.pointerEvents = "none", this.paper.options.markAvailable && this._markAvailableMagnets()
    },
    _afterArrowheadMove: function() {
      null !== this._z && (this.model.set("z", this._z, {
        ui: !0
      }), this._z = null), this.el.style.pointerEvents = "visiblePainted", this.paper.options.markAvailable && this._unmarkAvailableMagnets()
    },
    _createValidateConnectionArgs: function(a) {
      function b(a, b) {
        return c[f] = a, c[f + 1] = a.el === b ? void 0 : b, c
      }
      var c = [];
      c[4] = a, c[5] = this;
      var d, e = 0,
        f = 0;
      "source" === a ? (e = 2, d = "target") : (f = 2, d = "source");
      var g = this.model.get(d);
      return g.id && (c[e] = this.paper.findViewByModel(g.id), c[e + 1] = g.selector && c[e].el.querySelector(g.selector)), b
    },
    _markAvailableMagnets: function() {
      function a(a, b) {
        var c = a.paper,
          d = c.options.validateConnection;
        return d.apply(c, this._validateConnectionArgs(a, b))
      }
      var b = this.paper,
        c = b.model.getElements();
      this._marked = {};
      for (var d = 0, e = c.length; d < e; d++) {
        var f = c[d].findView(b);
        if (f) {
          var g = Array.prototype.slice.call(f.el.querySelectorAll("[magnet]"));
          "false" !== f.el.getAttribute("magnet") && g.push(f.el);
          var h = g.filter(a.bind(this, f));
          if (h.length > 0) {
            for (var i = 0, j = h.length; i < j; i++) f.highlight(h[i], {
              magnetAvailability: !0
            });
            f.highlight(null, {
              elementAvailability: !0
            }), this._marked[f.model.id] = h
          }
        }
      }
    },
    _unmarkAvailableMagnets: function() {
      for (var a, b, c = Object.keys(this._marked), d = 0, e = c.length; d < e; d++) {
        a = c[d], b = this._marked[a];
        var f = this.paper.findViewByModel(a);
        if (f) {
          for (var g = 0, h = b.length; g < h; g++) f.unhighlight(b[g], {
            magnetAvailability: !0
          });
          f.unhighlight(null, {
            elementAvailability: !0
          })
        }
      }
      this._marked = null
    },
    startArrowheadMove: function(a, b) {
      b = joint.util.defaults(b || {}, {
        whenNotAllowed: "revert"
      }), this._action = "arrowhead-move", this._whenNotAllowed = b.whenNotAllowed, this._arrowhead = a, this._initialMagnet = this[a + "Magnet"] || (this[a + "View"] ? this[a + "View"].el : null), this._initialEnd = joint.util.assign({}, this.model.get(a)) || {
          x: 0,
          y: 0
        }, this._validateConnectionArgs = this._createValidateConnectionArgs(this._arrowhead), this._beforeArrowheadMove()
    },
    pointerdown: function(a, b, c) {
      if (joint.dia.CellView.prototype.pointerdown.apply(this, arguments), this.notify("link:pointerdown", a, b, c), this._dx = b, this._dy = c, null == a.target.getAttribute("magnet")) {
        var d, e = joint.util.removeClassNamePrefix(a.target.getAttribute("class")),
          f = joint.util.removeClassNamePrefix(a.target.parentNode.getAttribute("class"));
        switch ("label" === f ? (e = f, d = a.target.parentNode) : d = a.target, e) {
          case "marker-vertex":
            this.can("vertexMove") && (this._action = "vertex-move", this._vertexIdx = a.target.getAttribute("idx"));
            break;
          case "marker-vertex-remove":
          case "marker-vertex-remove-area":
            this.can("vertexRemove") && this.removeVertex(a.target.getAttribute("idx"));
            break;
          case "marker-arrowhead":
            this.can("arrowheadMove") && this.startArrowheadMove(a.target.getAttribute("end"));
            break;
          case "label":
            this.can("labelMove") && (this._action = "label-move", this._labelIdx = parseInt(V(d).attr("label-idx"), 10), this._samples = this._V.connection.sample(1), this._linkLength = this._V.connection.node.getTotalLength());
            break;
          default:
            this.can("vertexAdd") && (this._vertexIdx = this.addVertex({
              x: b,
              y: c
            }), this._action = "vertex-move")
        }
      }
    },
    pointermove: function(a, b, c) {
      switch (this._action) {
        case "vertex-move":
          var d = joint.util.assign([], this.model.get("vertices"));
          d[this._vertexIdx] = {
            x: b,
            y: c
          }, this.model.set("vertices", d, {
            ui: !0
          });
          break;
        case "label-move":
          for (var e, f, h, i, j = {
            x: b,
            y: c
          }, k = this._samples, l = 1 / 0, m = 0, n = k.length; m < n; m++) h = k[m], i = g.line(h, j).squaredLength(), i < l && (l = i, e = h, f = m);
          var o = k[f - 1],
            p = k[f + 1],
            q = 0;
          o && p ? q = g.line(o, p).pointOffset(j) : o ? q = g.line(o, e).pointOffset(j) : p && (q = g.line(e, p).pointOffset(j)), this.model.label(this._labelIdx, {
            position: {
              distance: e.distance / this._linkLength,
              offset: q
            }
          });
          break;
        case "arrowhead-move":
          if (this.paper.options.snapLinks) {
            var r = this.paper.options.snapLinks.radius || 50,
              s = this.paper.findViewsInArea({
                x: b - r,
                y: c - r,
                width: 2 * r,
                height: 2 * r
              });
            this._closestView && this._closestView.unhighlight(this._closestEnd.selector, {
              connecting: !0,
              snapping: !0
            }), this._closestView = this._closestEnd = null;
            var t, u = Number.MAX_VALUE,
              v = g.point(b, c);
            s.forEach(function(a) {
              "false" !== a.el.getAttribute("magnet") && (t = a.model.getBBox().center().distance(v), t < r && t < u && this.paper.options.validateConnection.apply(this.paper, this._validateConnectionArgs(a, null)) && (u = t, this._closestView = a, this._closestEnd = {
                id: a.model.id
              })), a.$("[magnet]").each(function(b, c) {
                var d = V(c).getBBox({
                  target: this.paper.viewport
                });
                t = v.distance({
                  x: d.x + d.width / 2,
                  y: d.y + d.height / 2
                }), t < r && t < u && this.paper.options.validateConnection.apply(this.paper, this._validateConnectionArgs(a, c)) && (u = t, this._closestView = a, this._closestEnd = {
                  id: a.model.id,
                  selector: a.getSelector(c),
                  port: c.getAttribute("port")
                })
              }.bind(this))
            }, this), this._closestView && this._closestView.highlight(this._closestEnd.selector, {
              connecting: !0,
              snapping: !0
            }), this.model.set(this._arrowhead, this._closestEnd || {
                x: b,
                y: c
              }, {
              ui: !0
            })
          } else {
            var w = "mousemove" === a.type ? a.target : document.elementFromPoint(a.clientX, a.clientY);
            this._eventTarget !== w && (this._magnetUnderPointer && this._viewUnderPointer.unhighlight(this._magnetUnderPointer, {
              connecting: !0
            }), this._viewUnderPointer = this.paper.findView(w), this._viewUnderPointer ? (this._magnetUnderPointer = this._viewUnderPointer.findMagnet(w), this._magnetUnderPointer && this.paper.options.validateConnection.apply(this.paper, this._validateConnectionArgs(this._viewUnderPointer, this._magnetUnderPointer)) ? this._magnetUnderPointer && this._viewUnderPointer.highlight(this._magnetUnderPointer, {
                connecting: !0
              }) : this._magnetUnderPointer = null) : this._magnetUnderPointer = null), this._eventTarget = w, this.model.set(this._arrowhead, {
              x: b,
              y: c
            }, {
              ui: !0
            })
          }
      }
      this._dx = b, this._dy = c, joint.dia.CellView.prototype.pointermove.apply(this, arguments), this.notify("link:pointermove", a, b, c)
    },
    pointerup: function(a, b, c) {
      if ("label-move" === this._action) this._samples = null;
      else if ("arrowhead-move" === this._action) {
        var d, e = this.model,
          f = this.paper,
          g = f.options,
          h = this._arrowhead,
          i = this._initialEnd;
        if (g.snapLinks) this._closestView && (this._closestView.unhighlight(this._closestEnd.selector, {
          connecting: !0,
          snapping: !0
        }), d = this._closestView.findMagnet(this._closestEnd.selector)), this._closestView = this._closestEnd = null;
        else {
          var j = this._viewUnderPointer;
          if (d = this._magnetUnderPointer, this._viewUnderPointer = null, this._magnetUnderPointer = null, d) {
            j.unhighlight(d, {
              connecting: !0
            });
            var k = j.getSelector(d),
              l = d.getAttribute("port"),
              m = {
                id: j.model.id
              };
            null != l && (m.port = l), null != k && (m.selector = k), e.set(h, m, {
              ui: !0
            })
          }
        }
        if (f.linkAllowed(this)) {
          g.embeddingMode && e.reparent() && (this._z = null);
          var n = e.prop(h),
            o = n && !joint.dia.Link.endsEqual(i, n);
          o && (i.id && this.notify("link:disconnect", a, f.findViewByModel(i.id), this._initialMagnet, h), n.id && this.notify("link:connect", a, f.findViewByModel(n.id), d, h))
        } else switch (this._whenNotAllowed) {
          case "remove":
            e.remove({
              ui: !0
            });
            break;
          case "revert":
          default:
            e.set(h, i, {
              ui: !0
            })
        }
        this._afterArrowheadMove()
      }
      this._action = null, this._whenNotAllowed = null, this._initialMagnet = null, this._initialEnd = null, this._validateConnectionArgs = null, this._eventTarget = null, this.notify("link:pointerup", a, b, c), joint.dia.CellView.prototype.pointerup.apply(this, arguments)
    },
    mouseenter: function(a) {
      joint.dia.CellView.prototype.mouseenter.apply(this, arguments), this.notify("link:mouseenter", a)
    },
    mouseleave: function(a) {
      joint.dia.CellView.prototype.mouseleave.apply(this, arguments), this.notify("link:mouseleave", a)
    },
    event: function(a, b, c, d) {
      var e = V(a.target).findParentByClass("link-tool", this.el);
      e ? (a.stopPropagation(), this.can("useLinkTools") && ("remove" === b ? this.model.remove({
        ui: !0
      }) : this.notify(b, a, c, d))) : joint.dia.CellView.prototype.event.apply(this, arguments)
    }
  }, {
    makeSelector: function(a) {
      var b = '[model-id="' + a.id + '"]';
      return a.port ? b += ' [port="' + a.port + '"]' : a.selector && (b += " " + a.selector), b
    }
  }), joint.dia.Paper = joint.mvc.View.extend({
    className: "paper",
    options: {
      width: 800,
      height: 600,
      origin: {
        x: 0,
        y: 0
      },
      gridSize: 1,
      drawGrid: !1,
      background: !1,
      perpendicularLinks: !1,
      elementView: joint.dia.ElementView,
      linkView: joint.dia.LinkView,
      snapLinks: !1,
      multiLinks: !0,
      guard: function(a, b) {
        return !1
      },
      highlighting: {
        default:
          {
            name: "stroke",
            options: {
              padding: 3
            }
          }, magnetAvailability: {
          name: "addClass",
          options: {
            className: "available-magnet"
          }
        },
        elementAvailability: {
          name: "addClass",
          options: {
            className: "available-cell"
          }
        }
      },
      preventContextMenu: !0,
      preventDefaultBlankAction: !0,
      restrictTranslate: !1,
      markAvailable: !1,
      defaultLink: new joint.dia.Link,
      defaultConnector: {
        name: "normal"
      },
      defaultRouter: {
        name: "normal"
      },
      validateMagnet: function(a, b) {
        return "passive" !== b.getAttribute("magnet")
      },
      validateConnection: function(a, b, c, d, e, f) {
        return ("target" === e ? c : a) instanceof joint.dia.ElementView
      },
      embeddingMode: !1,
      validateEmbedding: function(a, b) {
        return !0
      },
      findParentBy: "bbox",
      frontParentOnly: !0,
      interactive: {
        labelMove: !1
      },
      linkPinning: !0,
      clickThreshold: 0,
      moveThreshold: 0,
      cellViewNamespace: joint.shapes,
      highlighterNamespace: joint.highlighters
    },
    events: {
      mousedown: "pointerdown",
      dblclick: "mousedblclick",
      click: "mouseclick",
      touchstart: "pointerdown",
      touchend: "mouseclick",
      touchmove: "pointermove",
      mousemove: "pointermove",
      "mouseover .joint-cell": "cellMouseover",
      "mouseout .joint-cell": "cellMouseout",
      contextmenu: "contextmenu",
      mousewheel: "mousewheel",
      DOMMouseScroll: "mousewheel",
      "mouseenter .joint-cell": "cellMouseenter",
      "mouseleave .joint-cell": "cellMouseleave",
      "mousedown .joint-cell [event]": "cellEvent",
      "touchstart .joint-cell [event]": "cellEvent"
    },
    _highlights: {},
    init: function() {
      joint.util.bindAll(this, "pointerup");
      var a = this.model = this.options.model || new joint.dia.Graph;
      this.setGrid(this.options.drawGrid), this.cloneOptions(), this.render(), this.setDimensions(), this.listenTo(a, "add", this.onCellAdded).listenTo(a, "remove", this.removeView).listenTo(a, "reset", this.resetViews).listenTo(a, "sort", this._onSort).listenTo(a, "batch:stop", this._onBatchStop), this.on("cell:highlight", this.onCellHighlight).on("cell:unhighlight", this.onCellUnhighlight).on("scale translate", this.update), this._mousemoved = 0, this._views = {}, this.$document = $(this.el.ownerDocument)
    },
    cloneOptions: function() {
      var a = this.options;
      a.origin = joint.util.assign({}, a.origin), a.defaultConnector = joint.util.assign({}, a.defaultConnector), a.highlighting = joint.util.defaultsDeep({}, a.highlighting, this.constructor.prototype.options.highlighting)
    },
    bindDocumentEvents: function() {
      var a = this.getEventNamespace();
      this.$document.on("mouseup" + a + " touchend" + a, this.pointerup)
    },
    unbindDocumentEvents: function() {
      this.$document.off(this.getEventNamespace())
    },
    render: function() {
      return this.$el.empty(), this.svg = V("svg").attr({
        width: "100%",
        height: "100%"
      }).node, this.viewport = V("g").addClass(joint.util.addClassNamePrefix("viewport")).node, this.defs = V("defs").node, V(this.svg).append([this.viewport, this.defs]), this.$background = $("<div/>").addClass(joint.util.addClassNamePrefix("paper-background")), this.options.background && this.drawBackground(this.options.background), this.$grid = $("<div/>").addClass(joint.util.addClassNamePrefix("paper-grid")), this.options.drawGrid && this.drawGrid(), this.$el.append(this.$background, this.$grid, this.svg), this
    },
    update: function() {
      return this.options.drawGrid && this.drawGrid(), this._background && this.updateBackgroundImage(this._background), this
    },
    _viewportMatrix: null,
    _viewportTransformString: null,
    matrix: function(a) {
      var b = this.viewport;
      if (void 0 === a) {
        var c = b.getAttribute("transform");
        return (this._viewportTransformString || null) === c ? a = this._viewportMatrix : (a = b.getCTM(), this._viewportMatrix = a, this._viewportTransformString = c), V.createSVGMatrix(a)
      }
      return a = V.createSVGMatrix(a), V(b).transform(a, {
        absolute: !0
      }), this._viewportMatrix = a, this._viewportTransformString = b.getAttribute("transform"), this
    },
    clientMatrix: function() {
      return V.createSVGMatrix(this.viewport.getScreenCTM())
    },
    _onSort: function() {
      this.model.hasActiveBatch("add") || this.sortViews()
    },
    _onBatchStop: function(a) {
      var b = a && a.batchName;
      "add" !== b || this.model.hasActiveBatch("add") || this.sortViews()
    },
    onRemove: function() {
      this.removeViews(), this.unbindDocumentEvents()
    },
    setDimensions: function(a, b) {
      a = this.options.width = a || this.options.width, b = this.options.height = b || this.options.height, this.$el.css({
        width: Math.round(a),
        height: Math.round(b)
      }), this.trigger("resize", a, b)
    },
    setOrigin: function(a, b) {
      return this.translate(a || 0, b || 0, {
        absolute: !0
      })
    },
    fitToContent: function(a, b, c, d) {
      joint.util.isObject(a) ? (d = a, a = d.gridWidth || 1, b = d.gridHeight || 1, c = d.padding || 0) : (d = d || {}, a = a || 1, b = b || 1, c = c || 0), c = joint.util.normalizeSides(c);
      var e = V(this.viewport).getBBox(),
        f = this.scale(),
        g = this.translate();
      e.x *= f.sx, e.y *= f.sy, e.width *= f.sx, e.height *= f.sy;
      var h = Math.max(Math.ceil((e.width + e.x) / a), 1) * a,
        i = Math.max(Math.ceil((e.height + e.y) / b), 1) * b,
        j = 0,
        k = 0;
      ("negative" == d.allowNewOrigin && e.x < 0 || "positive" == d.allowNewOrigin && e.x >= 0 || "any" == d.allowNewOrigin) && (j = Math.ceil(-e.x / a) * a, j += c.left, h += j), ("negative" == d.allowNewOrigin && e.y < 0 || "positive" == d.allowNewOrigin && e.y >= 0 || "any" == d.allowNewOrigin) && (k = Math.ceil(-e.y / b) * b, k += c.top, i += k), h += c.right, i += c.bottom, h = Math.max(h, d.minWidth || 0), i = Math.max(i, d.minHeight || 0), h = Math.min(h, d.maxWidth || Number.MAX_VALUE), i = Math.min(i, d.maxHeight || Number.MAX_VALUE);
      var l = h != this.options.width || i != this.options.height,
        m = j != g.tx || k != g.ty;
      m && this.translate(j, k), l && this.setDimensions(h, i)
    },
    scaleContentToFit: function(a) {
      var b = this.getContentBBox();
      if (b.width && b.height) {
        a = a || {}, joint.util.defaults(a, {
          padding: 0,
          preserveAspectRatio: !0,
          scaleGrid: null,
          minScale: 0,
          maxScale: Number.MAX_VALUE
        });
        var c, d = a.padding,
          e = a.minScaleX || a.minScale,
          f = a.maxScaleX || a.maxScale,
          h = a.minScaleY || a.minScale,
          i = a.maxScaleY || a.maxScale;
        if (a.fittingBBox) c = a.fittingBBox;
        else {
          var j = this.translate();
          c = {
            x: j.tx,
            y: j.ty,
            width: this.options.width,
            height: this.options.height
          }
        }
        c = g.rect(c).moveAndExpand({
          x: d,
          y: d,
          width: -2 * d,
          height: -2 * d
        });
        var k = this.scale(),
          l = c.width / b.width * k.sx,
          m = c.height / b.height * k.sy;
        if (a.preserveAspectRatio && (l = m = Math.min(l, m)), a.scaleGrid) {
          var n = a.scaleGrid;
          l = n * Math.floor(l / n), m = n * Math.floor(m / n)
        }
        l = Math.min(f, Math.max(e, l)), m = Math.min(i, Math.max(h, m)), this.scale(l, m);
        var o = this.getContentBBox(),
          p = c.x - o.x,
          q = c.y - o.y;
        this.translate(p, q)
      }
    },
    getContentBBox: function() {
      var a = this.viewport.getBoundingClientRect(),
        b = this.clientMatrix(),
        c = this.translate();
      return g.rect({
        x: a.left - b.e + c.tx,
        y: a.top - b.f + c.ty,
        width: a.width,
        height: a.height
      })
    },
    getArea: function() {
      return this.paperToLocalRect({
        x: 0,
        y: 0,
        width: this.options.width,
        height: this.options.height
      })
    },
    getRestrictedArea: function() {
      var a;
      return a = joint.util.isFunction(this.options.restrictTranslate) ? this.options.restrictTranslate.apply(this, arguments) : this.options.restrictTranslate === !0 ? this.getArea() : this.options.restrictTranslate || null
    },
    createViewForModel: function(a) {
      var b, c, d = this.options.cellViewNamespace,
        e = a.get("type") + "View",
        f = joint.util.getByPath(d, e, ".");
      a.isLink() ? (b = this.options.linkView, c = joint.dia.LinkView) : (b = this.options.elementView, c = joint.dia.ElementView);
      var g = b.prototype instanceof Backbone.View ? f || b : b.call(this, a) || f || c;
      return new g({
        model: a,
        interactive: this.options.interactive
      })
    },
    onCellAdded: function(a, b, c) {
      if (this.options.async && c.async !== !1 && joint.util.isNumber(c.position)) {
        if (this._asyncCells = this._asyncCells || [], this._asyncCells.push(a), 0 == c.position) {
          if (this._frameId) throw new Error("another asynchronous rendering in progress");
          this.asyncRenderViews(this._asyncCells, c), delete this._asyncCells
        }
      } else this.renderView(a)
    },
    removeView: function(a) {
      var b = this._views[a.id];
      return b && (b.remove(), delete this._views[a.id]), b
    },
    renderView: function(a) {
      var b = this._views[a.id] = this.createViewForModel(a);
      return V(this.viewport).append(b.el), b.paper = this, b.render(), $(b.el).find("image").on("dragstart", function() {
        return !1
      }), b
    },
    beforeRenderViews: function(a) {
      return a.sort(function(a) {
        return a.isLink() ? 1 : -1
      }), a
    },
    afterRenderViews: function() {
      this.sortViews()
    },
    resetViews: function(a, b) {
      this.removeViews();
      var c = a.models.slice();
      if (c = this.beforeRenderViews(c, b) || c, this.cancelRenderViews(), this.options.async) this.asyncRenderViews(c, b);
      else {
        for (var d = 0, e = c.length; d < e; d++) this.renderView(c[d]);
        this.sortViews()
      }
    },
    cancelRenderViews: function() {
      this._frameId && (joint.util.cancelFrame(this._frameId), delete this._frameId)
    },
    removeViews: function() {
      joint.util.invoke(this._views, "remove"), this._views = {}
    },
    asyncBatchAdded: joint.util.noop,
    asyncRenderViews: function(a, b) {
      if (this._frameId) {
        var c = this.options.async && this.options.async.batchSize || 50,
          d = a.splice(0, c);
        d.forEach(function(a) {
          a.graph === this.model && this.renderView(a)
        }, this), this.asyncBatchAdded()
      }
      a.length ? this._frameId = joint.util.nextFrame(function() {
        this.asyncRenderViews(a, b)
      }, this) : (delete this._frameId, this.afterRenderViews(b), this.trigger("render:done", b))
    },
    sortViews: function() {
      var a = $(this.viewport).children("[model-id]"),
        b = this.model.get("cells");
      joint.util.sortElements(a, function(a, c) {
        var d = b.get($(a).attr("model-id")),
          e = b.get($(c).attr("model-id"));
        return (d.get("z") || 0) > (e.get("z") || 0) ? 1 : -1
      })
    },
    scale: function(a, b, c, d) {
      if (void 0 === a) return V.matrixToScale(this.matrix());
      void 0 === b && (b = a), void 0 === c && (c = 0, d = 0);
      var e = this.translate();
      if (c || d || e.tx || e.ty) {
        var f = e.tx - c * (a - 1),
          g = e.ty - d * (b - 1);
        this.translate(f, g)
      }
      var h = this.matrix();
      return h.a = a || 0, h.d = b || 0, this.matrix(h), this.trigger("scale", a, b, c, d), this
    },
    rotate: function(a, b, c) {
      if (void 0 === a) return V.matrixToRotate(this.matrix());
      if (void 0 === b) {
        var d = this.viewport.getBBox();
        b = d.width / 2, c = d.height / 2
      }
      var e = this.matrix().translate(b, c).rotate(a).translate(-b, -c);
      return this.matrix(e), this
    },
    translate: function(a, b) {
      if (void 0 === a) return V.matrixToTranslate(this.matrix());
      var c = this.matrix();
      c.e = a || 0, c.f = b || 0, this.matrix(c);
      var d = this.translate(),
        e = this.options.origin;
      return e.x = d.tx, e.y = d.ty, this.trigger("translate", d.tx, d.ty), this.options.drawGrid && this.drawGrid(), this
    },
    findView: function(a) {
      for (var b = joint.util.isString(a) ? this.viewport.querySelector(a) : a instanceof $ ? a[0] : a; b && b !== this.el && b !== document;) {
        var c = b.getAttribute("model-id");
        if (c) return this._views[c];
        b = b.parentNode
      }
    },
    findViewByModel: function(a) {
      var b = joint.util.isString(a) || joint.util.isNumber(a) ? a : a && a.id;
      return this._views[b]
    },
    findViewsFromPoint: function(a) {
      a = g.point(a);
      var b = this.model.getElements().map(this.findViewByModel, this);
      return b.filter(function(b) {
        return b && b.vel.getBBox({
            target: this.viewport
          }).containsPoint(a)
      }, this)
    },
    findViewsInArea: function(a, b) {
      b = joint.util.defaults(b || {}, {
        strict: !1
      }), a = g.rect(a);
      var c = this.model.getElements().map(this.findViewByModel, this),
        d = b.strict ? "containsRect" : "intersect";
      return c.filter(function(b) {
        return b && a[d](b.vel.getBBox({
            target: this.viewport
          }))
      }, this)
    },
    getModelById: function(a) {
      return this.model.getCell(a)
    },
    snapToGrid: function(a, b) {
      return this.clientToLocalPoint(a, b).snapToGrid(this.options.gridSize)
    },
    localToPaperPoint: function(a, b) {
      var c = g.Point(a, b),
        d = V.transformPoint(c, this.matrix());
      return g.Point(d)
    },
    localToPaperRect: function(a, b, c, d) {
      var e = g.Rect(a, b),
        f = V.transformRect(e, this.matrix());
      return g.Rect(f)
    },
    paperToLocalPoint: function(a, b) {
      var c = g.Point(a, b),
        d = V.transformPoint(c, this.matrix().inverse());
      return g.Point(d)
    },
    paperToLocalRect: function(a, b, c, d) {
      var e = g.Rect(a, b, c, d),
        f = V.transformRect(e, this.matrix().inverse());
      return g.Rect(f)
    },
    localToClientPoint: function(a, b) {
      var c = g.Point(a, b),
        d = V.transformPoint(c, this.clientMatrix());
      return g.Point(d)
    },
    localToClientRect: function(a, b, c, d) {
      var e = g.Rect(a, b, c, d),
        f = V.transformRect(e, this.clientMatrix());
      return g.Rect(f)
    },
    clientToLocalPoint: function(a, b) {
      var c = g.Point(a, b),
        d = V.transformPoint(c, this.clientMatrix().inverse());
      return g.Point(d)
    },
    clientToLocalRect: function(a, b, c, d) {
      var e = g.Rect(a, b, c, d),
        f = V.transformRect(e, this.clientMatrix().inverse());
      return g.Rect(f)
    },
    localToPagePoint: function(a, b) {
      return this.localToPaperPoint(a, b).offset(this.pageOffset())
    },
    localToPageRect: function(a, b, c, d) {
      return this.localToPaperRect(a, b, c, d).moveAndExpand(this.pageOffset())
    },
    pageToLocalPoint: function(a, b) {
      var c = g.Point(a, b),
        d = c.difference(this.pageOffset());
      return this.paperToLocalPoint(d)
    },
    pageToLocalRect: function(a, b, c, d) {
      var e = this.pageOffset(),
        f = g.Rect(a, b, c, d);
      return f.x -= e.x, f.y -= e.y, this.paperToLocalRect(f)
    },
    clientOffset: function() {
      var a = this.svg.getBoundingClientRect();
      return g.Point(a.left, a.top)
    },
    pageOffset: function() {
      return this.clientOffset().offset(window.scrollX, window.scrollY)
    },
    linkAllowed: function(a) {
      var b;
      if (a instanceof joint.dia.Link) b = a;
      else {
        if (!(a instanceof joint.dia.LinkView)) throw new Error("Must provide link model or view.");
        b = a.model
      }
      if (!this.options.multiLinks) {
        var c = b.get("source"),
          d = b.get("target");
        if (c.id && d.id) {
          var e = b.getSourceElement();
          if (e) {
            var f = this.model.getConnectedLinks(e, {
                outbound: !0,
                inbound: !1
              }),
              g = f.filter(function(a) {
                var b = a.get("source"),
                  e = a.get("target");
                return b && b.id === c.id && (!b.port || b.port === c.port) && e && e.id === d.id && (!e.port || e.port === d.port)
              }).length;
            if (g > 1) return !1
          }
        }
      }
      return !!(this.options.linkPinning || joint.util.has(b.get("source"), "id") && joint.util.has(b.get("target"), "id"))
    },
    getDefaultLink: function(a, b) {
      return joint.util.isFunction(this.options.defaultLink) ? this.options.defaultLink.call(this, a, b) : this.options.defaultLink.clone()
    },
    resolveHighlighter: function(a) {
      a = a || {};
      var b = a.highlighter,
        c = this.options;
      if (void 0 === b) {
        var d = ["embedding", "connecting", "magnetAvailability", "elementAvailability"].find(function(b) {
          return !!a[b]
        });
        b = d && c.highlighting[d] || c.highlighting.
            default
      }
      if (!b) return !1;
      joint.util.isString(b) && (b = {
        name: b
      });
      var e = b.name,
        f = c.highlighterNamespace[e];
      if (!f) throw new Error('Unknown highlighter ("' + e + '")');
      if ("function" != typeof f.highlight) throw new Error('Highlighter ("' + e + '") is missing required highlight() method');
      if ("function" != typeof f.unhighlight) throw new Error('Highlighter ("' + e + '") is missing required unhighlight() method');
      return {
        highlighter: f,
        options: b.options || {},
        name: e
      }
    },
    onCellHighlight: function(a, b, c) {
      if (c = this.resolveHighlighter(c)) {
        b.id || (b.id = V.uniqueId());
        var d = c.name + b.id + JSON.stringify(c.options);
        if (!this._highlights[d]) {
          var e = c.highlighter;
          e.highlight(a, b, joint.util.assign({}, c.options)), this._highlights[d] = {
            cellView: a,
            magnetEl: b,
            opt: c.options,
            highlighter: e
          }
        }
      }
    },
    onCellUnhighlight: function(a, b, c) {
      if (c = this.resolveHighlighter(c)) {
        var d = c.name + b.id + JSON.stringify(c.options),
          e = this._highlights[d];
        e && (e.highlighter.unhighlight(e.cellView, e.magnetEl, e.opt), this._highlights[d] = null)
      }
    },
    mousedblclick: function(a) {
      a.preventDefault(), a = joint.util.normalizeEvent(a);
      var b = this.findView(a.target);
      if (!this.guard(a, b)) {
        var c = this.snapToGrid({
          x: a.clientX,
          y: a.clientY
        });
        b ? b.pointerdblclick(a, c.x, c.y) : this.trigger("blank:pointerdblclick", a, c.x, c.y)
      }
    },
    mouseclick: function(a) {
      if (this._mousemoved <= this.options.clickThreshold) {
        a = joint.util.normalizeEvent(a);
        var b = this.findView(a.target);
        if (this.guard(a, b)) return;
        var c = this.snapToGrid({
          x: a.clientX,
          y: a.clientY
        });
        b ? b.pointerclick(a, c.x, c.y) : this.trigger("blank:pointerclick", a, c.x, c.y)
      }
    },
    guard: function(a, b) {
      return !(!this.options.guard || !this.options.guard(a, b)) || (a.data && void 0 !== a.data.guarded ? a.data.guarded : !(b && b.model && b.model instanceof joint.dia.Cell) && (this.svg !== a.target && this.el !== a.target && !$.contains(this.svg, a.target)))
    },
    contextmenu: function(a) {
      a = joint.util.normalizeEvent(a), this.options.preventContextMenu && a.preventDefault();
      var b = this.findView(a.target);
      if (!this.guard(a, b)) {
        var c = this.snapToGrid({
          x: a.clientX,
          y: a.clientY
        });
        b ? b.contextmenu(a, c.x, c.y) : this.trigger("blank:contextmenu", a, c.x, c.y)
      }
    },
    pointerdown: function(a) {
      this.bindDocumentEvents(), a = joint.util.normalizeEvent(a);
      var b = this.findView(a.target);
      if (!this.guard(a, b)) {
        this._mousemoved = 0;
        var c = this.snapToGrid({
          x: a.clientX,
          y: a.clientY
        });
        b ? (a.preventDefault(), this.sourceView = b, b.pointerdown(a, c.x, c.y)) : (this.options.preventDefaultBlankAction && a.preventDefault(), this.trigger("blank:pointerdown", a, c.x, c.y))
      }
    },
    pointermove: function(a) {
      var b = this.sourceView;
      if (b) {
        a.preventDefault();
        var c = ++this._mousemoved;
        if (c > this.options.moveThreshold) {
          a = joint.util.normalizeEvent(a);
          var d = this.snapToGrid({
            x: a.clientX,
            y: a.clientY
          });
          b.pointermove(a, d.x, d.y)
        }
      }
    },
    pointerup: function(a) {
      this.unbindDocumentEvents(), a = joint.util.normalizeEvent(a);
      var b = this.snapToGrid({
        x: a.clientX,
        y: a.clientY
      });
      this.sourceView ? (this.sourceView.pointerup(a, b.x, b.y), this.sourceView = null) : this.trigger("blank:pointerup", a, b.x, b.y)
    },
    mousewheel: function(a) {
      a = joint.util.normalizeEvent(a);
      var b = this.findView(a.target);
      if (!this.guard(a, b)) {
        var c = a.originalEvent,
          d = this.snapToGrid({
            x: c.clientX,
            y: c.clientY
          }),
          e = Math.max(-1, Math.min(1, c.wheelDelta || -c.detail));
        b ? b.mousewheel(a, d.x, d.y, e) : this.trigger("blank:mousewheel", a, d.x, d.y, e)
      }
    },
    cellMouseover: function(a) {
      a = joint.util.normalizeEvent(a);
      var b = this.findView(a.target);
      if (b) {
        if (this.guard(a, b)) return;
        b.mouseover(a)
      }
    },
    cellMouseout: function(a) {
      a = joint.util.normalizeEvent(a);
      var b = this.findView(a.target);
      if (b) {
        if (this.guard(a, b)) return;
        b.mouseout(a)
      }
    },
    cellMouseenter: function(a) {
      a = joint.util.normalizeEvent(a);
      var b = this.findView(a.target);
      b && !this.guard(a, b) && b.mouseenter(a)
    },
    cellMouseleave: function(a) {
      a = joint.util.normalizeEvent(a);
      var b = this.findView(a.target);
      b && !this.guard(a, b) && b.mouseleave(a)
    },
    cellEvent: function(a) {
      a = joint.util.normalizeEvent(a);
      var b = a.currentTarget,
        c = b.getAttribute("event");
      if (c) {
        var d = this.findView(b);
        if (d && !this.guard(a, d)) {
          var e = this.snapToGrid({
            x: a.clientX,
            y: a.clientY
          });
          d.event(a, c, e.x, e.y)
        }
      }
    },
    setGridSize: function(a) {
      return this.options.gridSize = a, this.options.drawGrid && this.drawGrid(), this
    },
    clearGrid: function() {
      return this.$grid && this.$grid.css("backgroundImage", "none"), this
    },
    _getGriRefs: function() {
      return this._gridCache || (this._gridCache = {
        root: V("svg", {
          width: "100%",
          height: "100%"
        }, V("defs")),
        patterns: {},
        add: function(a, b) {
          V(this.root.node.childNodes[0]).append(b), this.patterns[a] = b, this.root.append(V("rect", {
            width: "100%",
            height: "100%",
            fill: "url(#" + a + ")"
          }))
        },
        get: function(a) {
          return this.patterns[a]
        },
        exist: function(a) {
          return void 0 !== this.patterns[a]
        }
      }), this._gridCache
    },
    setGrid: function(a) {
      this.clearGrid(), this._gridCache = null, this._gridSettings = [];
      var b = Array.isArray(a) ? a : [a || {}];
      return b.forEach(function(a) {
        this._gridSettings.push.apply(this._gridSettings, this._resolveDrawGridOption(a))
      }, this), this
    },
    _resolveDrawGridOption: function(a) {
      var b = this.constructor.gridPatterns;
      if (joint.util.isString(a) && Array.isArray(b[a])) return b[a].map(function(a) {
        return joint.util.assign({}, a)
      });
      var c = a || {
            args: [{}]
          },
        d = Array.isArray(c),
        e = c.name;
      if (d || e || c.markup || (e = "dot"), e && Array.isArray(b[e])) {
        var f = b[e].map(function(a) {
            return joint.util.assign({}, a)
          }),
          g = Array.isArray(c.args) ? c.args : [c.args || {}];
        joint.util.defaults(g[0], joint.util.omit(a, "args"));
        for (var h = 0; h < g.length; h++) f[h] && joint.util.assign(f[h], g[h]);
        return f
      }
      return d ? c : [c]
    },
    drawGrid: function(a) {
      var b = this.options.gridSize;
      if (b <= 1) return this.clearGrid();
      var c = Array.isArray(a) ? a : [a],
        d = this.matrix(),
        e = this._getGriRefs();
      this._gridSettings.forEach(function(a, f) {
        var g = "pattern_" + f,
          h = joint.util.merge(a, c[f], {
            sx: d.a || 1,
            sy: d.d || 1,
            ox: d.e || 0,
            oy: d.f || 0
          });
        h.width = b * (d.a || 1) * (h.scaleFactor || 1), h.height = b * (d.d || 1) * (h.scaleFactor || 1), e.exist(g) || e.add(g, V("pattern", {
          id: g,
          patternUnits: "userSpaceOnUse"
        }, V(h.markup)));
        var i = e.get(g);
        joint.util.isFunction(h.update) && h.update(i.node.childNodes[0], h);
        var j = h.ox % h.width;
        j < 0 && (j += h.width);
        var k = h.oy % h.height;
        k < 0 && (k += h.height), i.attr({
          x: j,
          y: k,
          width: h.width,
          height: h.height
        })
      });
      var f = (new XMLSerializer).serializeToString(e.root.node);
      return f = "url(data:image/svg+xml;base64," + btoa(f) + ")", this.$grid.css("backgroundImage", f), this
    },
    updateBackgroundImage: function(a) {
      a = a || {};
      var b = a.position || "center",
        c = a.size || "auto auto",
        d = this.scale(),
        e = this.translate();
      if (joint.util.isObject(b)) {
        var f = e.tx + d.sx * (b.x || 0),
          h = e.ty + d.sy * (b.y || 0);
        b = f + "px " + h + "px"
      }
      joint.util.isObject(c) && (c = g.rect(c).scale(d.sx, d.sy), c = c.width + "px " + c.height + "px"), this.$background.css({
        backgroundSize: c,
        backgroundPosition: b
      })
    },
    drawBackgroundImage: function(a, b) {
      if (!(a instanceof HTMLImageElement)) return void this.$background.css("backgroundImage", "");
      b = b || {};
      var c, d = b.size,
        e = b.repeat || "no-repeat",
        f = b.opacity || 1,
        g = Math.abs(b.quality) || 1,
        h = this.constructor.backgroundPatterns[joint.util.camelCase(e)];
      if (joint.util.isFunction(h)) {
        a.width *= g, a.height *= g;
        var i = h(a, b);
        if (!(i instanceof HTMLCanvasElement)) throw new Error("dia.Paper: background pattern must return an HTML Canvas instance");
        c = i.toDataURL("image/png"), e = "repeat", joint.util.isObject(d) ? (d.width *= i.width / a.width, d.height *= i.height / a.height) : void 0 === d && (b.size = {
            width: i.width / g,
            height: i.height / g
          })
      } else c = a.src, void 0 === d && (b.size = {
        width: a.width,
        height: a.height
      });
      this.$background.css({
        opacity: f,
        backgroundRepeat: e,
        backgroundImage: "url(" + c + ")"
      }), this.updateBackgroundImage(b)
    },
    updateBackgroundColor: function(a) {
      this.$el.css("backgroundColor", a || "")
    },
    drawBackground: function(a) {
      if (a = a || {}, this.updateBackgroundColor(a.color), a.image) {
        a = this._background = joint.util.cloneDeep(a);
        var b = document.createElement("img");
        b.onload = this.drawBackgroundImage.bind(this, b, a), b.src = a.image
      } else this.drawBackgroundImage(null), this._background = null;
      return this
    },
    setInteractivity: function(a) {
      this.options.interactive = a, joint.util.invoke(this._views, "setInteractivity", a)
    },
    isDefined: function(a) {
      return !!this.svg.getElementById(a)
    },
    defineFilter: function(a) {
      if (!joint.util.isObject(a)) throw new TypeError("dia.Paper: defineFilter() requires 1. argument to be an object.");
      var b = a.id,
        c = a.name;
      if (b || (b = c + this.svg.id + joint.util.hashCode(JSON.stringify(a))), !this.isDefined(b)) {
        var d = joint.util.filter,
          e = d[c] && d[c](a.args || {});
        if (!e) throw new Error("Non-existing filter " + c);
        var f = joint.util.assign({
          filterUnits: "objectBoundingBox",
          x: -1,
          y: -1,
          width: 3,
          height: 3
        }, a.attrs, {
          id: b
        });
        V(e, f).appendTo(this.defs)
      }
      return b
    },
    defineGradient: function(a) {
      if (!joint.util.isObject(a)) throw new TypeError("dia.Paper: defineGradient() requires 1. argument to be an object.");
      var b = a.id,
        c = a.type,
        d = a.stops;
      if (b || (b = c + this.svg.id + joint.util.hashCode(JSON.stringify(a))), !this.isDefined(b)) {
        var e = joint.util.template('<stop offset="${offset}" stop-color="${color}" stop-opacity="${opacity}"/>'),
          f = joint.util.toArray(d).map(function(a) {
            return e({
              offset: a.offset,
              color: a.color,
              opacity: Number.isFinite(a.opacity) ? a.opacity : 1
            })
          }),
          g = ["<" + c + ">", f.join(""), "</" + c + ">"].join(""),
          h = joint.util.assign({
            id: b
          }, a.attrs);
        V(g, h).appendTo(this.defs)
      }
      return b
    },
    defineMarker: function(a) {
      if (!joint.util.isObject(a)) throw new TypeError("dia.Paper: defineMarker() requires 1. argument to be an object.");
      var b = a.id;
      if (b || (b = this.svg.id + joint.util.hashCode(JSON.stringify(a))), !this.isDefined(b)) {
        var c = joint.util.omit(a, "type", "userSpaceOnUse"),
          d = V("marker", {
            id: b,
            orient: "auto",
            overflow: "visible",
            markerUnits: a.markerUnits || "userSpaceOnUse"
          }, [V(a.type || "path", c)]);
        d.appendTo(this.defs)
      }
      return b
    }
  }, {
    backgroundPatterns: {
      flipXy: function(a) {
        var b = document.createElement("canvas"),
          c = a.width,
          d = a.height;
        b.width = 2 * c, b.height = 2 * d;
        var e = b.getContext("2d");
        return e.drawImage(a, 0, 0, c, d), e.setTransform(-1, 0, 0, -1, b.width, b.height), e.drawImage(a, 0, 0, c, d), e.setTransform(-1, 0, 0, 1, b.width, 0), e.drawImage(a, 0, 0, c, d), e.setTransform(1, 0, 0, -1, 0, b.height), e.drawImage(a, 0, 0, c, d), b
      },
      flipX: function(a) {
        var b = document.createElement("canvas"),
          c = a.width,
          d = a.height;
        b.width = 2 * c, b.height = d;
        var e = b.getContext("2d");
        return e.drawImage(a, 0, 0, c, d), e.translate(2 * c, 0), e.scale(-1, 1), e.drawImage(a, 0, 0, c, d), b
      },
      flipY: function(a) {
        var b = document.createElement("canvas"),
          c = a.width,
          d = a.height;
        b.width = c, b.height = 2 * d;
        var e = b.getContext("2d");
        return e.drawImage(a, 0, 0, c, d), e.translate(0, 2 * d), e.scale(1, -1), e.drawImage(a, 0, 0, c, d), b
      },
      watermark: function(a, b) {
        b = b || {};
        var c = a.width,
          d = a.height,
          e = document.createElement("canvas");
        e.width = 3 * c, e.height = 3 * d;
        for (var f = e.getContext("2d"), h = joint.util.isNumber(b.watermarkAngle) ? -b.watermarkAngle : -20, i = g.toRad(h), j = e.width / 4, k = e.height / 4, l = 0; l < 4; l++) for (var m = 0; m < 4; m++)(l + m) % 2 > 0 && (f.setTransform(1, 0, 0, 1, (2 * l - 1) * j, (2 * m - 1) * k), f.rotate(i), f.drawImage(a, -c / 2, -d / 2, c, d));
        return e
      }
    },
    gridPatterns: {
      dot: [{
        color: "#AAAAAA",
        thickness: 1,
        markup: "rect",
        update: function(a, b) {
          V(a).attr({
            width: b.thickness * b.sx,
            height: b.thickness * b.sy,
            fill: b.color
          })
        }
      }],
      fixedDot: [{
        color: "#AAAAAA",
        thickness: 1,
        markup: "rect",
        update: function(a, b) {
          var c = b.sx <= 1 ? b.thickness * b.sx : b.thickness;
          V(a).attr({
            width: c,
            height: c,
            fill: b.color
          })
        }
      }],
      mesh: [{
        color: "#AAAAAA",
        thickness: 1,
        markup: "path",
        update: function(a, b) {
          var c, d = b.width,
            e = b.height,
            f = b.thickness;
          c = d - f >= 0 && e - f >= 0 ? ["M", d, 0, "H0 M0 0 V0", e].join(" ") : "M 0 0 0 0", V(a).attr({
            d: c,
            stroke: b.color,
            "stroke-width": b.thickness
          })
        }
      }],
      doubleMesh: [{
        color: "#AAAAAA",
        thickness: 1,
        markup: "path",
        update: function(a, b) {
          var c, d = b.width,
            e = b.height,
            f = b.thickness;
          c = d - f >= 0 && e - f >= 0 ? ["M", d, 0, "H0 M0 0 V0", e].join(" ") : "M 0 0 0 0", V(a).attr({
            d: c,
            stroke: b.color,
            "stroke-width": b.thickness
          })
        }
      }, {
        color: "#000000",
        thickness: 3,
        scaleFactor: 4,
        markup: "path",
        update: function(a, b) {
          var c, d = b.width,
            e = b.height,
            f = b.thickness;
          c = d - f >= 0 && e - f >= 0 ? ["M", d, 0, "H0 M0 0 V0", e].join(" ") : "M 0 0 0 0", V(a).attr({
            d: c,
            stroke: b.color,
            "stroke-width": b.thickness
          })
        }
      }]
    }
  }), function(a, b, c) {
    var d = function(b) {
      var d = c.cloneDeep(b) || {};
      this.ports = [], this.groups = {}, this.portLayoutNamespace = a.layout.Port, this.portLabelLayoutNamespace = a.layout.PortLabel, this._init(d)
    };
    d.prototype = {
      getPorts: function() {
        return this.ports
      },
      getGroup: function(a) {
        return this.groups[a] || {}
      },
      getPortsByGroup: function(a) {
        return this.ports.filter(function(b) {
          return b.group === a
        })
      },
      getGroupPortsMetrics: function(a, b) {
        var d = this.getGroup(a),
          e = this.getPortsByGroup(a),
          f = d.position || {},
          h = f.name,
          i = this.portLayoutNamespace;
        i[h] || (h = "left");
        var j = f.args || {},
          k = e.map(function(a) {
            return a && a.position && a.position.args
          }),
          l = i[h](k, b, j),
          m = {
            ports: e,
            result: []
          };
        return c.toArray(l).reduce(function(a, c, d) {
          var e = a.ports[d];
          return a.result.push({
            portId: e.id,
            portTransformation: c,
            labelTransformation: this._getPortLabelLayout(e, g.Point(c), b),
            portAttrs: e.attrs,
            portSize: e.size,
            labelSize: e.label.size
          }), a
        }.bind(this), m), m.result
      },
      _getPortLabelLayout: function(a, b, c) {
        var d = this.portLabelLayoutNamespace,
          e = a.label.position.name || "left";
        return d[e] ? d[e](b, c, a.label.position.args) : null
      },
      _init: function(a) {
        if (c.isObject(a.groups)) for (var b = Object.keys(a.groups), d = 0, e = b.length; d < e; d++) {
          var f = b[d];
          this.groups[f] = this._evaluateGroup(a.groups[f])
        }
        for (var g = c.toArray(a.items), h = 0, i = g.length; h < i; h++) this.ports.push(this._evaluatePort(g[h]))
      },
      _evaluateGroup: function(a) {
        return c.merge(a, {
          position: this._getPosition(a.position, !0),
          label: this._getLabel(a, !0)
        })
      },
      _evaluatePort: function(a) {
        var b = c.assign({}, a),
          d = this.getGroup(a.group);
        return b.markup = b.markup || d.markup, b.attrs = c.merge({}, d.attrs, b.attrs), b.position = this._createPositionNode(d, b), b.label = c.merge({}, d.label, this._getLabel(b)), b.z = this._getZIndex(d, b), b.size = c.assign({}, d.size, b.size), b
      },
      _getZIndex: function(a, b) {
        return c.isNumber(b.z) ? b.z : c.isNumber(a.z) || "auto" === a.z ? a.z : "auto"
      },
      _createPositionNode: function(a, b) {
        return c.merge({
          name: "left",
          args: {}
        }, a.position, {
          args: b.args
        })
      },
      _getPosition: function(a, b) {
        var d, e = {};
        c.isFunction(a) ? (d = "fn", e.fn = a) : c.isString(a) ? d = a : void 0 === a ? d = b ? "left" : null : Array.isArray(a) ? (d = "absolute", e.x = a[0], e.y = a[1]) : c.isObject(a) && (d = a.name, c.assign(e, a.args));
        var f = {
          args: e
        };
        return d && (f.name = d), f
      },
      _getLabel: function(a, b) {
        var c = a.label || {},
          d = c;
        return d.position = this._getPosition(c.position, b), d
      }
    }, c.assign(a.dia.Element.prototype, {
      _initializePorts: function() {
        this._createPortData(), this.on("change:ports", function() {
          this._processRemovedPort(), this._createPortData()
        }, this)
      },
      _processRemovedPort: function() {
        var a = this.get("ports") || {},
          b = {};
        c.toArray(a.items).forEach(function(a) {
          b[a.id] = !0
        });
        var d = this.previous("ports") || {},
          e = {};
        c.toArray(d.items).forEach(function(a) {
          b[a.id] || (e[a.id] = !0)
        });
        var f = this.graph;
        if (f && !c.isEmpty(e)) {
          var g = f.getConnectedLinks(this, {
            inbound: !0
          });
          g.forEach(function(a) {
            e[a.get("target").port] && a.remove()
          });
          var h = f.getConnectedLinks(this, {
            outbound: !0
          });
          h.forEach(function(a) {
            e[a.get("source").port] && a.remove()
          })
        }
      },
      hasPorts: function() {
        return this.prop("ports/items").length > 0
      },
      hasPort: function(a) {
        return this.getPortIndex(a) !== -1
      },
      getPorts: function() {
        return c.cloneDeep(this.prop("ports/items")) || []
      },
      getPort: function(a) {
        return c.cloneDeep(c.toArray(this.prop("ports/items")).find(function(b) {
          return b.id && b.id === a
        }))
      },
      getPortsPositions: function(a) {
        var b = this._portSettingsData.getGroupPortsMetrics(a, g.Rect(this.size()));
        return b.reduce(function(a, b) {
          var c = b.portTransformation;
          return a[b.portId] = {
            x: c.x,
            y: c.y,
            angle: c.angle
          }, a
        }, {})
      },
      getPortIndex: function(a) {
        var b = c.isObject(a) ? a.id : a;
        return this._isValidPortId(b) ? c.toArray(this.prop("ports/items")).findIndex(function(a) {
          return a.id === b
        }) : -1
      },
      addPort: function(a, b) {
        if (!c.isObject(a) || Array.isArray(a)) throw new Error("Element: addPort requires an object.");
        var d = c.assign([], this.prop("ports/items"));
        return d.push(a), this.prop("ports/items", d, b), this
      },
      portProp: function(a, b, d, e) {
        var f = this.getPortIndex(a);
        if (f === -1) throw new Error("Element: unable to find port with id " + a);
        var g = Array.prototype.slice.call(arguments, 1);
        return Array.isArray(b) ? g[0] = ["ports", "items", f].concat(b) : c.isString(b) ? g[0] = ["ports/items/", f, "/", b].join("") : (g = ["ports/items/" + f], c.isPlainObject(b) && (g.push(b), g.push(d))), this.prop.apply(this, g)
      },
      _validatePorts: function() {
        var b = this.get("ports") || {},
          d = [];
        b = b || {};
        var e = c.toArray(b.items);
        return e.forEach(function(a) {
          "object" != typeof a && d.push("Element: invalid port ", a), this._isValidPortId(a.id) || (a.id = c.uuid())
        }, this), a.util.uniq(e, "id").length !== e.length && d.push("Element: found id duplicities in ports."), d
      },
      _isValidPortId: function(a) {
        return null !== a && void 0 !== a && !c.isObject(a)
      },
      addPorts: function(a, b) {
        return a.length && this.prop("ports/items", c.assign([], this.prop("ports/items")).concat(a), b), this
      },
      removePort: function(a, b) {
        var d = b || {},
          e = c.assign([], this.prop("ports/items")),
          f = this.getPortIndex(a);
        return f !== -1 && (e.splice(f, 1), d.rewrite = !0, this.prop("ports/items", e, d)), this
      },
      _createPortData: function() {
        var a = this._validatePorts();
        if (a.length > 0) throw this.set("ports", this.previous("ports")), new Error(a.join(" "));
        var b;
        this._portSettingsData && (b = this._portSettingsData.getPorts()), this._portSettingsData = new d(this.get("ports"));
        var c = this._portSettingsData.getPorts();
        if (b) {
          var e = c.filter(function(a) {
              if (!b.find(function(b) {
                  return b.id === a.id
                })) return a
            }),
            f = b.filter(function(a) {
              if (!c.find(function(b) {
                  return b.id === a.id
                })) return a
            });
          f.length > 0 && this.trigger("ports:remove", this, f), e.length > 0 && this.trigger("ports:add", this, e)
        }
      }
    }), c.assign(a.dia.ElementView.prototype, {
      portContainerMarkup: '<g class="joint-port"/>',
      portMarkup: '<circle class="joint-port-body" r="10" fill="#FFFFFF" stroke="#000000"/>',
      portLabelMarkup: '<text class="joint-port-label" fill="#000000"/>',
      _portElementsCache: null,
      _initializePorts: function() {
        this._portElementsCache = {}, this.listenTo(this.model, "change:ports", function() {
          this._refreshPorts()
        })
      },
      _refreshPorts: function() {
        this._removePorts(), this._portElementsCache = {}, this._renderPorts()
      },
      _renderPorts: function() {
        for (var a = [], b = this._getContainerElement(), d = 0, e = b.node.childNodes.length; d < e; d++) a.push(b.node.childNodes[d]);
        var f = c.groupBy(this.model._portSettingsData.getPorts(), "z"),
          g = "auto";
        c.toArray(f[g]).forEach(function(c) {
          var d = this._getPortElement(c);
          b.append(d), a.push(d)
        }, this);
        for (var h = Object.keys(f), i = 0; i < h.length; i++) {
          var j = h[i];
          if (j !== g) {
            var k = parseInt(j, 10);
            this._appendPorts(f[j], k, a)
          }
        }
        this._updatePorts()
      },
      _getContainerElement: function() {
        return this.rotatableNode || this.vel
      },
      _appendPorts: function(a, b, d) {
        var e = this._getContainerElement(),
          f = c.toArray(a).map(this._getPortElement, this);
        d[b] || b < 0 ? V(d[Math.max(b, 0)]).before(f) : e.append(f)
      },
      _getPortElement: function(a) {
        return this._portElementsCache[a.id] ? this._portElementsCache[a.id].portElement : this._createPortElement(a)
      },
      _updatePorts: function() {
        this._updatePortGroup(void 0);
        var a = Object.keys(this.model._portSettingsData.groups);
        a.forEach(this._updatePortGroup, this)
      },
      _removePorts: function() {
        c.invoke(this._portElementsCache, "portElement.remove")
      },
      _createPortElement: function(a) {
        var b = V(this._getPortMarkup(a)),
          c = V(this._getPortLabelMarkup(a.label));
        if (b && b.length > 1) throw new Error("ElementView: Invalid port markup - multiple roots.");
        b.attr({
          port: a.id,
          "port-group": a.group
        });
        var d = V(this.portContainerMarkup).append(b).append(c);
        return this._portElementsCache[a.id] = {
          portElement: d,
          portLabelElement: c
        }, d
      },
      _updatePortGroup: function(a) {
        for (var b = g.Rect(this.model.size()), c = this.model._portSettingsData.getGroupPortsMetrics(a, b), d = 0, e = c.length; d < e; d++) {
          var f = c[d],
            h = f.portId,
            i = this._portElementsCache[h] || {},
            j = f.portTransformation;
          this.applyPortTransform(i.portElement, j), this.updateDOMSubtreeAttributes(i.portElement.node, f.portAttrs, {
            rootBBox: g.Rect(f.portSize)
          });
          var k = f.labelTransformation;
          k && (this.applyPortTransform(i.portLabelElement, k, -j.angle || 0), this.updateDOMSubtreeAttributes(i.portLabelElement.node, k.attrs, {
            rootBBox: g.Rect(f.labelSize)
          }))
        }
      },
      applyPortTransform: function(a, b, c) {
        var d = V.createSVGMatrix().rotate(c || 0).translate(b.x || 0, b.y || 0).rotate(b.angle || 0);
        a.transform(d, {
          absolute: !0
        })
      },
      _getPortMarkup: function(a) {
        return a.markup || this.model.get("portMarkup") || this.model.portMarkup || this.portMarkup
      },
      _getPortLabelMarkup: function(a) {
        return a.markup || this.model.get("portLabelMarkup") || this.model.portLabelMarkup || this.portLabelMarkup
      }
    })
  }(joint, _, joint.util), joint.dia.Element.define("basic.Generic", {
    attrs: {
      ".": {
        fill: "#ffffff",
        stroke: "none"
      }
    }
  }), joint.shapes.basic.Generic.define("basic.Rect", {
    attrs: {
      rect: {
        fill: "#ffffff",
        stroke: "#000000",
        width: 100,
        height: 60
      },
      text: {
        fill: "#000000",
        text: "",
        "font-size": 14,
        "ref-x": .5,
        "ref-y": .5,
        "text-anchor": "middle",
        "y-alignment": "middle",
        "font-family": "Arial, helvetica, sans-serif"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><rect/></g><text/></g>'
  }), joint.shapes.basic.TextView = joint.dia.ElementView.extend({
    initialize: function() {
      joint.dia.ElementView.prototype.initialize.apply(this, arguments), this.listenTo(this.model, "change:attrs", this.resize)
    }
  }), joint.shapes.basic.Generic.define("basic.Text", {
    attrs: {
      text: {
        "font-size": 18,
        fill: "#000000"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><text/></g></g>'
  }), joint.shapes.basic.Generic.define("basic.Circle", {
    size: {
      width: 60,
      height: 60
    },
    attrs: {
      circle: {
        fill: "#ffffff",
        stroke: "#000000",
        r: 30,
        cx: 30,
        cy: 30
      },
      text: {
        "font-size": 14,
        text: "",
        "text-anchor": "middle",
        "ref-x": .5,
        "ref-y": .5,
        "y-alignment": "middle",
        fill: "#000000",
        "font-family": "Arial, helvetica, sans-serif"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><circle/></g><text/></g>'
  }), joint.shapes.basic.Generic.define("basic.Ellipse", {
    size: {
      width: 60,
      height: 40
    },
    attrs: {
      ellipse: {
        fill: "#ffffff",
        stroke: "#000000",
        rx: 30,
        ry: 20,
        cx: 30,
        cy: 20
      },
      text: {
        "font-size": 14,
        text: "",
        "text-anchor": "middle",
        "ref-x": .5,
        "ref-y": .5,
        "y-alignment": "middle",
        fill: "#000000",
        "font-family": "Arial, helvetica, sans-serif"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><ellipse/></g><text/></g>'
  }), joint.shapes.basic.Generic.define("basic.Polygon", {
    size: {
      width: 60,
      height: 40
    },
    attrs: {
      polygon: {
        fill: "#ffffff",
        stroke: "#000000"
      },
      text: {
        "font-size": 14,
        text: "",
        "text-anchor": "middle",
        "ref-x": .5,
        "ref-dy": 20,
        "y-alignment": "middle",
        fill: "#000000",
        "font-family": "Arial, helvetica, sans-serif"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><polygon/></g><text/></g>'
  }), joint.shapes.basic.Generic.define("basic.Polyline", {
    size: {
      width: 60,
      height: 40
    },
    attrs: {
      polyline: {
        fill: "#ffffff",
        stroke: "#000000"
      },
      text: {
        "font-size": 14,
        text: "",
        "text-anchor": "middle",
        "ref-x": .5,
        "ref-dy": 20,
        "y-alignment": "middle",
        fill: "#000000",
        "font-family": "Arial, helvetica, sans-serif"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><polyline/></g><text/></g>'
  }), joint.shapes.basic.Generic.define("basic.Image", {
    attrs: {
      text: {
        "font-size": 14,
        text: "",
        "text-anchor": "middle",
        "ref-x": .5,
        "ref-dy": 20,
        "y-alignment": "middle",
        fill: "#000000",
        "font-family": "Arial, helvetica, sans-serif"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><image/></g><text/></g>'
  }), joint.shapes.basic.Generic.define("basic.Path", {
    size: {
      width: 60,
      height: 60
    },
    attrs: {
      path: {
        fill: "#ffffff",
        stroke: "#000000"
      },
      text: {
        "font-size": 14,
        text: "",
        "text-anchor": "middle",
        ref: "path",
        "ref-x": .5,
        "ref-dy": 10,
        fill: "#000000",
        "font-family": "Arial, helvetica, sans-serif"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><path/></g><text/></g>'
  }), joint.shapes.basic.Path.define("basic.Rhombus", {
    attrs: {
      path: {
        d: "M 30 0 L 60 30 30 60 0 30 z"
      },
      text: {
        "ref-y": .5,
        "ref-dy": null,
        "y-alignment": "middle"
      }
    }
  }), joint.shapes.basic.PortsModelInterface = {
    initialize: function() {
      this.updatePortsAttrs(), this.on("change:inPorts change:outPorts", this.updatePortsAttrs, this), this.constructor.__super__.constructor.__super__.initialize.apply(this, arguments)
    },
    updatePortsAttrs: function(a) {
      if (this._portSelectors) {
        var b = joint.util.omit(this.get("attrs"), this._portSelectors);
        this.set("attrs", b, {
          silent: !0
        })
      }
      this._portSelectors = [];
      var c = {};
      joint.util.toArray(this.get("inPorts")).forEach(function(a, b, d) {
        var e = this.getPortAttrs(a, b, d.length, ".inPorts", "in");
        this._portSelectors = this._portSelectors.concat(Object.keys(e)), joint.util.assign(c, e)
      }, this), joint.util.toArray("outPorts").forEach(function(a, b, d) {
        var e = this.getPortAttrs(a, b, d.length, ".outPorts", "out");
        this._portSelectors = this._portSelectors.concat(Object.keys(e)), joint.util.assign(c, e)
      }, this), this.attr(c, {
        silent: !0
      }), this.processPorts(), this.trigger("process:ports")
    },
    getPortSelector: function(a) {
      var b = ".inPorts",
        c = this.get("inPorts").indexOf(a);
      if (c < 0 && (b = ".outPorts", c = this.get("outPorts").indexOf(a), c < 0)) throw new Error("getPortSelector(): Port doesn't exist.");
      return b + ">g:nth-child(" + (c + 1) + ")>.port-body"
    }
  }, joint.shapes.basic.PortsViewInterface = {
    initialize: function() {
      this.listenTo(this.model, "process:ports", this.update), joint.dia.ElementView.prototype.initialize.apply(this, arguments)
    },
    update: function() {
      this.renderPorts(), joint.dia.ElementView.prototype.update.apply(this, arguments)
    },
    renderPorts: function() {
      var a = this.$(".inPorts").empty(),
        b = this.$(".outPorts").empty(),
        c = joint.util.template(this.model.portMarkup),
        d = this.model.ports || [];
      d.filter(function(a) {
        return "in" === a.type
      }).forEach(function(b, d) {
        a.append(V(c({
          id: d,
          port: b
        })).node)
      }), d.filter(function(a) {
        return "out" === a.type
      }).forEach(function(a, d) {
        b.append(V(c({
          id: d,
          port: a
        })).node)
      })
    }
  }, joint.shapes.basic.Generic.define("basic.TextBlock", {
    attrs: {
      rect: {
        fill: "#ffffff",
        stroke: "#000000",
        width: 80,
        height: 100
      },
      text: {
        fill: "#000000",
        "font-size": 14,
        "font-family": "Arial, helvetica, sans-serif"
      },
      ".content": {
        text: "",
        "ref-x": .5,
        "ref-y": .5,
        "y-alignment": "middle",
        "x-alignment": "middle"
      }
    },
    content: ""
  }, {
    markup: ['<g class="rotatable">', '<g class="scalable"><rect/></g>', joint.env.test("svgforeignobject") ? '<foreignObject class="fobj"><body xmlns="http://www.w3.org/1999/xhtml"><div class="content"/></body></foreignObject>' : '<text class="content"/>', "</g>"].join(""),
    initialize: function() {
      this.listenTo(this, "change:size", this.updateSize), this.listenTo(this, "change:content", this.updateContent), this.updateSize(this, this.get("size")), this.updateContent(this, this.get("content")), joint.shapes.basic.Generic.prototype.initialize.apply(this, arguments)
    },
    updateSize: function(a, b) {
      this.attr({
        ".fobj": joint.util.assign({}, b),
        div: {
          style: joint.util.assign({}, b)
        }
      })
    },
    updateContent: function(a, b) {
      joint.env.test("svgforeignobject") ? this.attr({
        ".content": {
          html: b
        }
      }) : this.attr({
        ".content": {
          text: b
        }
      })
    },
    setForeignObjectSize: function() {
      this.updateSize.apply(this, arguments)
    },
    setDivContent: function() {
      this.updateContent.apply(this, arguments)
    }
  }), joint.shapes.basic.TextBlockView = joint.dia.ElementView.extend({
    initialize: function() {
      joint.dia.ElementView.prototype.initialize.apply(this, arguments), this.noSVGForeignObjectElement = !joint.env.test("svgforeignobject"), joint.env.test("svgforeignobject") || this.listenTo(this.model, "change:content change:size", function(a) {
        this.updateContent(a)
      })
    },
    update: function(a, b) {
      var c = this.model;
      if (joint.env.test("svgforeignobject")) joint.dia.ElementView.prototype.update.call(this, c, b);
      else {
        var d = joint.util.omit(b || c.get("attrs"), ".content");
        joint.dia.ElementView.prototype.update.call(this, c, d), b && !joint.util.has(b, ".content") || this.updateContent(c, b)
      }
    },
    updateContent: function(a, b) {
      var c = joint.util.merge({}, (b || a.get("attrs"))[".content"]);
      c = joint.util.omit(c, "text");
      var d = joint.util.breakText(a.get("content"), a.get("size"), c, {
          svgDocument: this.paper.svg
        }),
        e = joint.util.setByPath({}, ".content", c, "/");
      e[".content"].text = d, joint.dia.ElementView.prototype.update.call(this, a, e)
    }
  }), joint.routers.manhattan = function(a, b, c, d) {
    "use strict";

    function e(a) {
      this.map = {}, this.options = a, this.mapGridSize = 100
    }
    function f() {
      this.items = [], this.hash = {}, this.values = {}, this.OPEN = 1, this.CLOSE = 2
    }
    function g(b) {
      return a.point(0 === b.x ? 0 : Math.abs(b.x) / b.x, 0 === b.y ? 0 : Math.abs(b.y) / b.y)
    }
    function h(b, c, d, e) {
      for (var f, h = [], i = g(e.difference(c)), j = c; f = b[j];) {
        var k = g(j.difference(f));
        k.equals(i) || (h.unshift(j), i = k), j = f
      }
      var l = g(a.point(j).difference(d));
      return l.equals(i) || h.unshift(j), h
    }
    function i(a, b, c) {
      var e = c.step,
        f = a.center(),
        g = d.isObject(c.directionMap) ? Object.keys(c.directionMap) : [],
        h = d.toArray(b);
      return g.reduce(function(b, d) {
        if (h.includes(d)) {
          var g = c.directionMap[d],
            i = g.x * a.width / 2,
            j = g.y * a.height / 2,
            k = f.clone().offset(i, j);
          a.containsPoint(k) && k.offset(g.x * e, g.y * e), b.push(k.snapToGrid(e))
        }
        return b
      }, [])
    }
    function j(b, c, d) {
      var e = 360 / d;
      return Math.floor(a.normalizeAngle(b.theta(c) + e / 2) / e) * e
    }
    function k(a, b) {
      var c = Math.abs(a - b);
      return c > 180 ? 360 - c : c
    }
    function l(a, b) {
      for (var c = 1 / 0, d = 0, e = b.length; d < e; d++) {
        var f = a.manhattanDistance(b[d]);
        f < c && (c = f)
      }
      return c
    }
    function m(b, c, e, g) {
      var m, n, o, p, q = g.step;
      if (b instanceof a.rect ? (m = i(b, g.startDirections, g), o = b.center().snapToGrid(q)) : (o = b.clone().snapToGrid(q), m = [o]), c instanceof a.rect ? (n = i(c, g.endDirections, g), p = c.center().snapToGrid(q)) : (p = c.clone().snapToGrid(q), n = [p]), m = m.filter(e.isPointAccessible, e), n = n.filter(e.isPointAccessible, e), m.length > 0 && n.length > 0) {
        for (var r = new f, s = {}, t = {}, u = 0, v = m.length; u < v; u++) {
          var w = m[u],
            x = w.toString();
          r.add(x, l(w, n)), t[x] = 0
        }
        for (var y, z, A = g.directions, B = A.length, C = g.maximumLoops, D = d.invoke(n, "toString"); !r.isEmpty() && C > 0;) {
          var E = r.pop(),
            F = a.point(E),
            G = t[E],
            H = I,
            I = s[E] ? j(s[E], F, B) : null != g.previousDirAngle ? g.previousDirAngle : j(o, F, B);
          if (D.indexOf(E) >= 0 && (z = k(I, j(F, p, B)), F.equals(p) || z < 180)) return g.previousDirAngle = I, h(s, F, o, p);
          for (u = 0; u < B; u++) if (y = A[u], z = k(I, y.angle), !(H && z > g.maxAllowedDirectionChange)) {
            var J = F.clone().offset(y.offsetX, y.offsetY),
              K = J.toString();
            if (!r.isClose(K) && e.isPointAccessible(J)) {
              var L = G + y.cost + g.penalties[z];
              (!r.isOpen(K) || L < t[K]) && (s[K] = F, t[K] = L, r.add(K, L + l(J, n)))
            }
          }
          C--
        }
      }
      return g.fallbackRoute(o, p, g)
    }
    function n(b) {
      b.directions = d.result(b, "directions"), b.penalties = d.result(b, "penalties"), b.paddingBox = d.result(b, "paddingBox"), d.toArray(b.directions).forEach(function(b) {
        var c = a.point(0, 0),
          d = a.point(b.offsetX, b.offsetY);
        b.angle = a.normalizeAngle(c.theta(d))
      })
    }
    function o(b, f) {
      n(f), this.options.perpendicular = !! f.perpendicular;
      for (var g = a.rect(this.sourceBBox).moveAndExpand(f.paddingBox), h = a.rect(this.targetBBox).moveAndExpand(f.paddingBox), i = new e(f).build(this.paper.model, this.model), j = d.toArray(b).map(a.point), k = [], l = g.center().snapToGrid(f.step), o = 0, p = j.length; o <= p; o++) {
        var q = null,
          r = s || g,
          s = j[o];
        if (!s) {
          s = h;
          var t = !this.model.get("source").id || !this.model.get("target").id;
          if (t && d.isFunction(f.draggingRoute)) {
            var u = r instanceof a.rect ? r.center() : r;
            q = f.draggingRoute(u, s.origin(), f)
          }
        }
        if (q = q || m(r, s, i, f), null === q) {
          if (!d.isFunction(c.routers.orthogonal)) throw new Error("Manhattan requires the orthogonal router.");
          return c.routers.orthogonal(b, f, this)
        }
        var v = q[0];
        v && v.equals(l) && q.shift(), l = q[q.length - 1] || l, Array.prototype.push.apply(k, q)
      }
      return k
    }
    var p = {
      step: 10,
      perpendicular: !0,
      excludeEnds: [],
      excludeTypes: ["basic.Text"],
      maximumLoops: 2e3,
      startDirections: ["left", "right", "top", "bottom"],
      endDirections: ["left", "right", "top", "bottom"],
      directionMap: {
        right: {
          x: 1,
          y: 0
        },
        bottom: {
          x: 0,
          y: 1
        },
        left: {
          x: -1,
          y: 0
        },
        top: {
          x: 0,
          y: -1
        }
      },
      maxAllowedDirectionChange: 90,
      paddingBox: function() {
        var a = this.step;
        return {
          x: -a,
          y: -a,
          width: 2 * a,
          height: 2 * a
        }
      },
      directions: function() {
        var a = this.step;
        return [{
          offsetX: a,
          offsetY: 0,
          cost: a
        }, {
          offsetX: 0,
          offsetY: a,
          cost: a
        }, {
          offsetX: -a,
          offsetY: 0,
          cost: a
        }, {
          offsetX: 0,
          offsetY: -a,
          cost: a
        }]
      },
      penalties: function() {
        return {
          0: 0,
          45: this.step / 2,
          90: this.step / 2
        }
      },
      fallbackRoute: function() {
        return null
      },
      draggingRoute: null
    };
    return e.prototype.build = function(a, b) {
      var c = this.options,
        e = d.toArray(c.excludeEnds).reduce(function(c, d) {
          var e = b.get(d);
          if (e) {
            var f = a.getCell(e.id);
            f && c.push(f)
          }
          return c
        }, []),
        f = [],
        g = a.getCell(b.get("source").id);
      g && (f = d.union(f, g.getAncestors().map(function(a) {
        return a.id
      })));
      var h = a.getCell(b.get("target").id);
      h && (f = d.union(f, h.getAncestors().map(function(a) {
        return a.id
      })));
      var i = this.mapGridSize;
      return a.getElements().reduce(function(a, b) {
        var g = d.toArray(c.excludeTypes).includes(b.get("type")),
          h = e.find(function(a) {
            return a.id === b.id
          }),
          j = f.includes(b.id),
          k = g || h || j;
        if (!k) for (var l = b.getBBox().moveAndExpand(c.paddingBox), m = l.origin().snapToGrid(i), n = l.corner().snapToGrid(i), o = m.x; o <= n.x; o += i) for (var p = m.y; p <= n.y; p += i) {
          var q = o + "@" + p;
          a[q] = a[q] || [], a[q].push(l)
        }
        return a
      }, this.map), this
    }, e.prototype.isPointAccessible = function(a) {
      var b = a.clone().snapToGrid(this.mapGridSize).toString();
      return d.toArray(this.map[b]).every(function(b) {
        return !b.containsPoint(a)
      })
    }, f.prototype.add = function(a, b) {
      this.hash[a] ? this.items.splice(this.items.indexOf(a), 1) : this.hash[a] = this.OPEN, this.values[a] = b;
      var d = c.util.sortedIndex(this.items, a, function(a) {
        return this.values[a]
      }.bind(this));
      this.items.splice(d, 0, a)
    }, f.prototype.remove = function(a) {
      this.hash[a] = this.CLOSE
    }, f.prototype.isOpen = function(a) {
      return this.hash[a] === this.OPEN
    }, f.prototype.isClose = function(a) {
      return this.hash[a] === this.CLOSE
    }, f.prototype.isEmpty = function() {
      return 0 === this.items.length
    }, f.prototype.pop = function() {
      var a = this.items.shift();
      return this.remove(a), a
    }, function(a, b, c) {
      return o.call(c, a, d.assign({}, p, b))
    }
  }(g, _, joint, joint.util), joint.routers.metro = function(a) {
    if (!a.isFunction(joint.routers.manhattan)) throw new Error("Metro requires the manhattan router.");
    var b = {
      diagonalCost: null,
      directions: function() {
        var a = this.step,
          b = this.diagonalCost || Math.ceil(Math.sqrt(a * a << 1));
        return [{
          offsetX: a,
          offsetY: 0,
          cost: a
        }, {
          offsetX: a,
          offsetY: a,
          cost: b
        }, {
          offsetX: 0,
          offsetY: a,
          cost: a
        }, {
          offsetX: -a,
          offsetY: a,
          cost: b
        }, {
          offsetX: -a,
          offsetY: 0,
          cost: a
        }, {
          offsetX: -a,
          offsetY: -a,
          cost: b
        }, {
          offsetX: 0,
          offsetY: -a,
          cost: a
        }, {
          offsetX: a,
          offsetY: -a,
          cost: b
        }]
      },
      maxAllowedDirectionChange: 45,
      fallbackRoute: function(a, b, c) {
        var d = a.theta(b),
          e = {
            x: b.x,
            y: a.y
          },
          f = {
            x: a.x,
            y: b.y
          };
        if (d % 180 > 90) {
          var h = e;
          e = f, f = h
        }
        var i = d % 90 < 45 ? e : f,
          j = g.line(a, i),
          k = 90 * Math.ceil(d / 90),
          l = g.point.fromPolar(j.squaredLength(), g.toRad(k + 135), i),
          m = g.line(b, l),
          n = j.intersection(m);
        return n ? [n.round(), b] : [b]
      }
    };
    return function(c, d, e) {
      return joint.routers.manhattan(c, a.assign({}, b, d), e)
    }
  }(joint.util), joint.routers.normal = function(a, b, c) {
    return a
  }, joint.routers.oneSide = function(a, b, c) {
    var d, e, f, g = b.side || "bottom",
      h = b.padding || 40,
      i = c.sourceBBox,
      j = c.targetBBox,
      k = i.center(),
      l = j.center();
    switch (g) {
      case "bottom":
        f = 1, d = "y", e = "height";
        break;
      case "top":
        f = -1, d = "y", e = "height";
        break;
      case "left":
        f = -1, d = "x", e = "width";
        break;
      case "right":
        f = 1, d = "x", e = "width";
        break;
      default:
        throw new Error("Router: invalid side")
    }
    return k[d] += f * (i[e] / 2 + h), l[d] += f * (j[e] / 2 + h), f * (k[d] - l[d]) > 0 ? l[d] = k[d] : k[d] = l[d], [k].concat(a, l)
  }, joint.routers.orthogonal = function(a) {
    function b(a, b) {
      return a.x == b.x ? a.y > b.y ? "N" : "S" : a.y == b.y ? a.x > b.x ? "W" : "E" : null
    }
    function c(a, b) {
      return a["W" == b || "E" == b ? "width" : "height"]
    }
    function d(a, b) {
      return g.rect(a).moveAndExpand({
        x: -b,
        y: -b,
        width: 2 * b,
        height: 2 * b
      })
    }
    function e(a) {
      return g.rect(a.x, a.y, 0, 0)
    }
    function f(a, b) {
      var c = Math.min(a.x, b.x),
        d = Math.min(a.y, b.y),
        e = Math.max(a.x + a.width, b.x + b.width),
        f = Math.max(a.y + a.height, b.y + b.height);
      return g.rect(c, d, e - c, f - d)
    }
    function h(a, b, c) {
      var d = g.point(a.x, b.y);
      return c.containsPoint(d) && (d = g.point(b.x, a.y)), d
    }
    function i(a, c, d) {
      var e = g.point(a.x, c.y),
        f = g.point(c.x, a.y),
        h = b(a, e),
        i = b(a, f),
        j = o[d],
        k = h == d || h != j && (i == j || i != d) ? e : f;
      return {
        points: [k],
        direction: b(k, c)
      }
    }
    function j(a, c, d) {
      var e = h(a, c, d);
      return {
        points: [e],
        direction: b(e, c)
      }
    }
    function k(d, e, f, i) {
      var j, k = {},
        l = [g.point(d.x, e.y), g.point(e.x, d.y)],
        m = l.filter(function(a) {
          return !f.containsPoint(a)
        }),
        n = m.filter(function(a) {
          return b(a, d) != i
        });
      if (n.length > 0) j = n.filter(function(a) {
        return b(d, a) == i
      }).pop(), j = j || n[0], k.points = [j], k.direction = b(j, e);
      else {
        j = a.difference(l, m)[0];
        var o = g.point(e).move(j, -c(f, i) / 2),
          p = h(o, d, f);
        k.points = [p, o], k.direction = b(o, e)
      }
      return k
    }
    function l(a, d, e, f) {
      var h = j(d, a, f),
        k = h.points[0];
      if (e.containsPoint(k)) {
        h = j(a, d, e);
        var l = h.points[0];
        if (f.containsPoint(l)) {
          var m = g.point(a).move(l, -c(e, b(a, l)) / 2),
            n = g.point(d).move(k, -c(f, b(d, k)) / 2),
            o = g.line(m, n).midpoint(),
            p = j(a, o, e),
            q = i(o, d, p.direction);
          h.points = [p.points[0], q.points[0]], h.direction = q.direction
        }
      }
      return h
    }
    function m(a, c, e, i, j) {
      var k, l, m, n = {},
        o = d(f(e, i), 1),
        q = o.center().distance(c) > o.center().distance(a),
        r = q ? c : a,
        s = q ? a : c;
      return j ? (k = g.point.fromPolar(o.width + o.height, p[j], r), k = o.pointNearestToPoint(k).move(k, -1)) : k = o.pointNearestToPoint(r).move(r, 1), l = h(k, s, o), k.round().equals(l.round()) ? (l = g.point.fromPolar(o.width + o.height, g.toRad(k.theta(r)) + Math.PI / 2, s), l = o.pointNearestToPoint(l).move(s, 1).round(), m = h(k, l, o), n.points = q ? [l, m, k] : [k, m, l]) : n.points = q ? [l, k] : [k, l], n.direction = q ? b(k, c) : b(l, c), n
    }
    function n(c, f, h) {
      var n = f.elementPadding || 20,
        o = [],
        p = d(h.sourceBBox, n),
        q = d(h.targetBBox, n);
      c = a.toArray(c).map(g.point), c.unshift(p.center()), c.push(q.center());
      for (var r, s = 0, t = c.length - 1; s < t; s++) {
        var u = null,
          v = c[s],
          w = c[s + 1],
          x = !! b(v, w);
        if (0 == s) s + 1 == t ? p.intersect(d(q, 1)) ? u = m(v, w, p, q) : x || (u = l(v, w, p, q)) : p.containsPoint(w) ? u = m(v, w, p, d(e(w), n)) : x || (u = j(v, w, p));
        else if (s + 1 == t) {
          var y = x && b(w, v) == r;
          q.containsPoint(v) || y ? u = m(v, w, d(e(v), n), q, r) : x || (u = k(v, w, q, r))
        } else x || (u = i(v, w, r));
        u ? (Array.prototype.push.apply(o, u.points), r = u.direction) : r = b(v, w), s + 1 < t && o.push(w)
      }
      return o
    }
    var o = {
        N: "S",
        S: "N",
        E: "W",
        W: "E"
      },
      p = {
        N: -Math.PI / 2 * 3,
        S: -Math.PI / 2,
        E: 0,
        W: Math.PI
      };
    return n
  }(joint.util), joint.connectors.normal = function(a, b, c) {
    var d = ["M", a.x, a.y];
    return joint.util.toArray(c).forEach(function(a) {
      d.push(a.x, a.y)
    }), d.push(b.x, b.y), d.join(" ")
  }, joint.connectors.rounded = function(a, b, c, d) {
    d = d || {};
    var e, f, h, i, j, k, l = d.radius || 10,
      m = ["M", a.x, a.y];
    return joint.util.toArray(c).forEach(function(d, n) {
      j = c[n - 1] || a, k = c[n + 1] || b, h = i || g.point(d).distance(j) / 2, i = g.point(d).distance(k) / 2, e = g.point(d).move(j, -Math.min(l, h)).round(), f = g.point(d).move(k, -Math.min(l, i)).round(), m.push(e.x, e.y, "S", d.x, d.y, f.x, f.y, "L")
    }), m.push(b.x, b.y), m.join(" ")
  }, joint.connectors.smooth = function(a, b, c) {
    var d;
    if (c.length) d = g.bezier.curveThroughPoints([a].concat(c).concat([b]));
    else {
      var e = (a.x + b.x) / 2;
      d = ["M", a.x, a.y, "C", e, a.y, e, b.y, b.x, b.y]
    }
    return d.join(" ")
  }, joint.connectors.jumpover = function(a, b, c) {
    function d(a, c, d) {
      var e = [].concat(a, d, c);
      return e.reduce(function(a, c, d) {
        var f = e[d + 1];
        return null != f && (a[d] = b.line(c, f)), a
      }, [])
    }
    function e(a) {
      var b = a.paper._jumpOverUpdateList;
      null == b && (b = a.paper._jumpOverUpdateList = [], a.paper.on("cell:pointerup", f), a.paper.model.on("reset", function() {
        b = a.paper._jumpOverUpdateList = []
      })), b.indexOf(a) < 0 && (b.push(a), a.listenToOnce(a.model, "change:connector remove", function() {
        b.splice(b.indexOf(a), 1)
      }))
    }
    function f() {
      for (var a = this._jumpOverUpdateList, b = 0; b < a.length; b++) a[b].update()
    }
    function g(a, b) {
      return c.toArray(b).reduce(function(b, c) {
        var d = a.intersection(c);
        return d && b.push(d), b
      }, [])
    }
    function h(a, c) {
      return b.line(a, c).squaredLength()
    }
    function i(a, c, d) {
      return c.reduce(function(e, f, g) {
        if (f.skip === !0) return e;
        var h = e.pop() || a,
          i = b.point(f).move(h.start, -d),
          j = b.point(f).move(h.start, +d),
          k = c[g + 1];
        if (null != k) {
          var l = j.distance(k);
          l <= d && (j = k.move(h.start, l), k.skip = !0)
        } else {
          var n = i.distance(h.end);
          if (n < 2 * d + m) return e.push(h), e
        }
        var o = j.distance(h.start);
        if (o < 2 * d + m) return e.push(h), e;
        var p = b.line(i, j);
        return p.isJump = !0, e.push(b.line(h.start, i), p, b.line(j, h.end)), e
      }, [])
    }
    function j(a, d, e) {
      var f = ["M", a[0].start.x, a[0].start.y],
        g = c.toArray(a).reduce(function(a, c) {
          if (c.isJump) {
            var f;
            if ("arc" === e) {
              f = c.start.difference(c.end);
              var g = Number(f.x < 0 && f.y < 0);
              a.push("A", d, d, 0, 0, g, c.end.x, c.end.y)
            } else if ("gap" === e) a = a.concat(["M", c.end.x, c.end.y]);
            else if ("cubic" === e) {
              f = c.start.difference(c.end);
              var h = c.start.theta(c.end),
                i = .6 * d,
                j = 1.35 * d;
              f.x < 0 && f.y < 0 && (j *= -1);
              var k = b.point(c.start.x + i, c.start.y + j).rotate(c.start, h),
                l = b.point(c.end.x - i, c.end.y + j).rotate(c.end, h);
              a.push("C", k.x, k.y, l.x, l.y, c.end.x, c.end.y)
            }
          } else a.push("L", c.end.x, c.end.y);
          return a
        }, f);
      return g.join(" ")
    }
    var k = 5,
      l = ["arc", "gap", "cubic"],
      m = 1,
      n = ["smooth"];
    return function(a, b, f, m) {
      e(this);
      var o = m.size || k,
        p = m.jump && ("" + m.jump).toLowerCase(),
        q = m.ignoreConnectors || n;
      l.indexOf(p) === -1 && (p = l[0]);
      var r = this.paper,
        s = r.model,
        t = s.getLinks();
      if (1 === t.length) return j(d(a, b, f), o, p);
      var u = this.model,
        v = t.indexOf(u),
        w = r.options.defaultConnector || {},
        x = t.filter(function(a, b) {
          var d = a.get("connector") || w;
          return !c.toArray(q).includes(d.name) && (!(b > v) || "jumpover" !== d.name)
        }),
        y = x.map(function(a) {
          return r.findViewByModel(a)
        }),
        z = d(a, b, f),
        A = y.map(function(a) {
          return null == a ? [] : a === this ? z : d(a.sourcePoint, a.targetPoint, a.route)
        }, this),
        B = z.reduce(function(a, b) {
          var c = x.reduce(function(a, c, d) {
            if (c !== u) {
              var e = g(b, A[d]);
              a.push.apply(a, e)
            }
            return a
          }, []).sort(function(a, c) {
            return h(b.start, a) - h(b.start, c)
          });
          return c.length > 0 ? a.push.apply(a, i(b, c, o)) : a.push(b), a
        }, []);
      return j(B, o, p)
    }
  }(_, g, joint.util), function(a, b, c, d) {
    function e(a, b, d) {
      var e = a.toJSON();
      return e.angle = b || 0, c.util.defaults({}, d, e)
    }
    function f(a, c, d) {
      return a.map(function(a, b, c) {
        var d = this.pointAt((b + .5) / c.length);
        return (a.dx || a.dy) && d.offset(a.dx || 0, a.dy || 0), e(d.round(), 0, a)
      }, b.line(c, d))
    }
    function g(a, c, d, f) {
      var g = c.center(),
        h = c.width / c.height,
        i = c.topMiddle(),
        j = b.Ellipse.fromRect(c);
      return a.map(function(a, b, c) {
        var k = d + f(b, c.length),
          l = i.clone().rotate(g, -k).scale(h, 1, g),
          m = a.compensateRotation ? -j.tangentTheta(l) : 0;
        return (a.dx || a.dy) && l.offset(a.dx || 0, a.dy || 0), a.dr && l.move(g, a.dr), e(l.round(), m, a)
      })
    }
    function h(a, c) {
      var e = c.x;
      d.isString(e) && (e = parseFloat(e) / 100 * a.width);
      var f = c.y;
      return d.isString(f) && (f = parseFloat(f) / 100 * a.height), b.point(e || 0, f || 0)
    }
    c.layout.Port = {
      absolute: function(a, b, c) {
        return a.map(h.bind(null, b))
      },
      fn: function(a, b, c) {
        return c.fn(a, b, c)
      },
      line: function(a, b, c) {
        var d = h(b, c.start || b.origin()),
          e = h(b, c.end || b.corner());
        return f(a, d, e)
      },
      left: function(a, b, c) {
        return f(a, b.origin(), b.bottomLeft())
      },
      right: function(a, b, c) {
        return f(a, b.topRight(), b.corner())
      },
      top: function(a, b, c) {
        return f(a, b.origin(), b.topRight())
      },
      bottom: function(a, b, c) {
        return f(a, b.bottomLeft(), b.corner())
      },
      ellipseSpread: function(a, b, c) {
        var d = c.startAngle || 0,
          e = c.step || 360 / a.length;
        return g(a, b, d, function(a) {
          return a * e
        })
      },
      ellipse: function(a, b, c) {
        var d = c.startAngle || 0,
          e = c.step || 20;
        return g(a, b, d, function(a, b) {
          return (a + .5 - b / 2) * e
        })
      }
    }
  }(_, g, joint, joint.util), function(a, b, c, d) {
    function e(a, b) {
      return d.defaultsDeep({}, a, b, {
        x: 0,
        y: 0,
        angle: 0,
        attrs: {
          ".": {
            y: "0",
            "text-anchor": "start"
          }
        }
      })
    }
    function f(a, b, c, f) {
      f = d.defaults({}, f, {
        offset: 15
      });
      var h, i, j, k, l = b.center().theta(a),
        m = g(b),
        n = f.offset,
        o = 0;
      l < m[1] || l > m[2] ? (j = ".3em", h = n, i = 0, k = "start") : l < m[0] ? (j = "0", h = 0, i = -n, c ? (o = -90, k = "start") : k = "middle") : l < m[3] ? (j = ".3em", h = -n, i = 0, k = "end") : (j = ".6em", h = 0, i = n, c ? (o = 90, k = "start") : k = "middle");
      var p = Math.round;
      return e({
        x: p(h),
        y: p(i),
        angle: o,
        attrs: {
          ".": {
            y: j,
            "text-anchor": k
          }
        }
      })
    }
    function g(a) {
      var b = a.center(),
        c = b.theta(a.origin()),
        d = b.theta(a.bottomLeft()),
        e = b.theta(a.corner()),
        f = b.theta(a.topRight());
      return [c, f, e, d]
    }
    function h(a, b, c, f) {
      var h = b.center().theta(a);
      f = d.defaults({}, f, {
        offset: 15
      });
      var i, j, k, l, m = f.offset,
        n = 0,
        o = g(b);
      h < o[1] || h > o[2] ? (k = ".3em", i = -m, j = 0, l = "end") : h < o[0] ? (k = ".6em", i = 0, j = m, c ? (n = 90, l = "start") : l = "middle") : h < o[3] ? (k = ".3em", i = m, j = 0, l = "start") : (k = "0em", i = 0, j = -m, c ? (n = -90, l = "start") : l = "middle");
      var p = Math.round;
      return e({
        x: p(i),
        y: p(j),
        angle: n,
        attrs: {
          ".": {
            y: k,
            "text-anchor": l
          }
        }
      })
    }
    function i(a, c, f) {
      f = d.defaults({}, f, {
        offset: 20
      });
      var g, h = b.point(0, 0),
        i = -a.theta(h),
        j = i,
        k = a.clone().move(h, f.offset).difference(a).round(),
        l = ".3em";
      (i + 90) % 180 === 0 ? (g = c ? "end" : "middle", c || i !== -270 || (l = "0em")) : i > -270 && i < -90 ? (g = "start", j = i - 180) : g = "end";
      var m = Math.round;
      return e({
        x: m(k.x),
        y: m(k.y),
        angle: c ? j : 0,
        attrs: {
          ".": {
            y: l,
            "text-anchor": g
          }
        }
      })
    }
    c.layout.PortLabel = {
      manual: function(a, b, c) {
        return e(c, a)
      },
      left: function(a, b, c) {
        return e(c, {
          x: -15,
          attrs: {
            ".": {
              y: ".3em",
              "text-anchor": "end"
            }
          }
        })
      },
      right: function(a, b, c) {
        return e(c, {
          x: 15,
          attrs: {
            ".": {
              y: ".3em",
              "text-anchor": "start"
            }
          }
        })
      },
      top: function(a, b, c) {
        return e(c, {
          y: -15,
          attrs: {
            ".": {
              "text-anchor": "middle"
            }
          }
        })
      },
      bottom: function(a, b, c) {
        return e(c, {
          y: 15,
          attrs: {
            ".": {
              y: ".6em",
              "text-anchor": "middle"
            }
          }
        })
      },
      outsideOriented: function(a, b, c) {
        return f(a, b, !0, c)
      },
      outside: function(a, b, c) {
        return f(a, b, !1, c)
      },
      insideOriented: function(a, b, c) {
        return h(a, b, !0, c)
      },
      inside: function(a, b, c) {
        return h(a, b, !1, c)
      },
      radial: function(a, b, c) {
        return i(a.difference(b.center()), !1, c)
      },
      radialOriented: function(a, b, c) {
        return i(a.difference(b.center()), !0, c)
      }
    }
  }(_, g, joint, joint.util), joint.highlighters.addClass = {
    className: joint.util.addClassNamePrefix("highlighted"),
    highlight: function(a, b, c) {
      var d = c || {},
        e = d.className || this.className;
      V(b).addClass(e)
    },
    unhighlight: function(a, b, c) {
      var d = c || {},
        e = d.className || this.className;
      V(b).removeClass(e)
    }
  }, joint.highlighters.opacity = {
    highlight: function(a, b) {
      V(b).addClass(joint.util.addClassNamePrefix("highlight-opacity"))
    },
    unhighlight: function(a, b) {
      V(b).removeClass(joint.util.addClassNamePrefix("highlight-opacity"))
    }
  }, joint.highlighters.stroke = {
    defaultOptions: {
      padding: 3,
      rx: 0,
      ry: 0,
      attrs: {
        "stroke-width": 3,
        stroke: "#FEB663"
      }
    },
    _views: {},
    getHighlighterId: function(a, b) {
      return a.id + JSON.stringify(b)
    },
    removeHighlighter: function(a) {
      this._views[a] && (this._views[a].remove(), this._views[a] = null)
    },
    highlight: function(a, b, c) {
      var d = this.getHighlighterId(b, c);
      if (!this._views[d]) {
        var e, f = joint.util.defaults(c || {}, this.defaultOptions),
          g = V(b);
        try {
          var h = g.convertToPathData()
        } catch (a) {
          e = g.bbox(!0), h = V.rectToPath(joint.util.assign({}, f, e))
        }
        var i = V("path").attr({
            d: h,
            "pointer-events": "none",
            "vector-effect": "non-scaling-stroke",
            fill: "none"
          }).attr(f.attrs),
          j = g.getTransformToElement(a.el),
          k = f.padding;
        if (k) {
          e || (e = g.bbox(!0));
          var l = e.x + e.width / 2,
            m = e.y + e.height / 2;
          e = V.transformRect(e, j);
          var n = Math.max(e.width, 1),
            o = Math.max(e.height, 1),
            p = (n + k) / n,
            q = (o + k) / o,
            r = V.createSVGMatrix({
              a: p,
              b: 0,
              c: 0,
              d: q,
              e: l - p * l,
              f: m - q * m
            });
          j = j.multiply(r)
        }
        i.transform(j);
        var s = this._views[d] = new joint.mvc.View({
            svgElement: !0,
            className: "highlight-stroke",
            el: i.node
          }),
          t = this.removeHighlighter.bind(this, d),
          u = a.model;
        s.listenTo(u, "remove", t), s.listenTo(u.graph, "reset", t), a.vel.append(i)
      }
    },
    unhighlight: function(a, b, c) {
      this.removeHighlighter(this.getHighlighterId(b, c))
    }
  };
  joint.dia.Element.define("erd.Entity", {
    size: {
      width: 150,
      height: 60
    },
    attrs: {
      ".outer": {
        fill: "#2ECC71",
        stroke: "#27AE60",
        "stroke-width": 2,
        points: "100,0 100,60 0,60 0,0"
      },
      ".inner": {
        fill: "#2ECC71",
        stroke: "#27AE60",
        "stroke-width": 2,
        points: "95,5 95,55 5,55 5,5",
        display: "none"
      },
      text: {
        text: "Entity",
        "font-family": "Arial",
        "font-size": 14,
        "ref-x": .5,
        "ref-y": .5,
        "y-alignment": "middle",
        "text-anchor": "middle"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><polygon class="outer"/><polygon class="inner"/></g><text/></g>'
  }), joint.shapes.erd.Entity.define("erd.WeakEntity", {
    attrs: {
      ".inner": {
        display: "auto"
      },
      text: {
        text: "Weak Entity"
      }
    }
  }), joint.dia.Element.define("erd.Relationship", {
    size: {
      width: 80,
      height: 80
    },
    attrs: {
      ".outer": {
        fill: "#3498DB",
        stroke: "#2980B9",
        "stroke-width": 2,
        points: "40,0 80,40 40,80 0,40"
      },
      ".inner": {
        fill: "#3498DB",
        stroke: "#2980B9",
        "stroke-width": 2,
        points: "40,5 75,40 40,75 5,40",
        display: "none"
      },
      text: {
        text: "Relationship",
        "font-family": "Arial",
        "font-size": 12,
        "ref-x": .5,
        "ref-y": .5,
        "y-alignment": "middle",
        "text-anchor": "middle"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><polygon class="outer"/><polygon class="inner"/></g><text/></g>'
  }), joint.shapes.erd.Relationship.define("erd.IdentifyingRelationship", {
    attrs: {
      ".inner": {
        display: "auto"
      },
      text: {
        text: "Identifying"
      }
    }
  }), joint.dia.Element.define("erd.Attribute", {
    size: {
      width: 100,
      height: 50
    },
    attrs: {
      ellipse: {
        transform: "translate(50, 25)"
      },
      ".outer": {
        stroke: "#D35400",
        "stroke-width": 2,
        cx: 0,
        cy: 0,
        rx: 50,
        ry: 25,
        fill: "#E67E22"
      },
      ".inner": {
        stroke: "#D35400",
        "stroke-width": 2,
        cx: 0,
        cy: 0,
        rx: 45,
        ry: 20,
        fill: "#E67E22",
        display: "none"
      },
      text: {
        "font-family": "Arial",
        "font-size": 14,
        "ref-x": .5,
        "ref-y": .5,
        "y-alignment": "middle",
        "text-anchor": "middle"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><ellipse class="outer"/><ellipse class="inner"/></g><text/></g>'
  }), joint.shapes.erd.Attribute.define("erd.Multivalued", {
    attrs: {
      ".inner": {
        display: "block"
      },
      text: {
        text: "multivalued"
      }
    }
  }), joint.shapes.erd.Attribute.define("erd.Derived", {
    attrs: {
      ".outer": {
        "stroke-dasharray": "3,5"
      },
      text: {
        text: "derived"
      }
    }
  }), joint.shapes.erd.Attribute.define("erd.Key", {
    attrs: {
      ellipse: {
        "stroke-width": 4
      },
      text: {
        text: "key",
        "font-weight": "800",
        "text-decoration": "underline"
      }
    }
  }), joint.shapes.erd.Attribute.define("erd.Normal", {
    attrs: {
      text: {
        text: "Normal"
      }
    }
  }), joint.dia.Element.define("erd.ISA", {
    type: "erd.ISA",
    size: {
      width: 100,
      height: 50
    },
    attrs: {
      polygon: {
        points: "0,0 50,50 100,0",
        fill: "#F1C40F",
        stroke: "#F39C12",
        "stroke-width": 2
      },
      text: {
        text: "ISA",
        "font-size": 18,
        "ref-x": .5,
        "ref-y": .3,
        "y-alignment": "middle",
        "text-anchor": "middle"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><polygon/></g><text/></g>'
  }), joint.dia.Link.define("erd.Line", {}, {
    cardinality: function(a) {
      this.set("labels", [{
        position: -20,
        attrs: {
          text: {
            dy: -8,
            text: a
          }
        }
      }])
    }
  });
  joint.shapes.basic.Circle.define("fsa.State", {
    attrs: {
      circle: {
        "stroke-width": 3
      },
      text: {
        "font-weight": "800"
      }
    }
  }), joint.dia.Element.define("fsa.StartState", {
    size: {
      width: 20,
      height: 20
    },
    attrs: {
      circle: {
        transform: "translate(10, 10)",
        r: 10,
        fill: "#000000"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><circle/></g></g>'
  }), joint.dia.Element.define("fsa.EndState", {
    size: {
      width: 20,
      height: 20
    },
    attrs: {
      ".outer": {
        transform: "translate(10, 10)",
        r: 10,
        fill: "#ffffff",
        stroke: "#000000"
      },
      ".inner": {
        transform: "translate(10, 10)",
        r: 6,
        fill: "#000000"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><circle class="outer"/><circle class="inner"/></g></g>'
  }), joint.dia.Link.define("fsa.Arrow", {
    attrs: {
      ".marker-target": {
        d: "M 10 0 L 0 5 L 10 10 z"
      }
    },
    smooth: !0
  });
  joint.dia.Element.define("org.Member", {
    size: {
      width: 180,
      height: 70
    },
    attrs: {
      rect: {
        width: 170,
        height: 60
      },
      ".card": {
        fill: "#FFFFFF",
        stroke: "#000000",
        "stroke-width": 2,
        "pointer-events": "visiblePainted",
        rx: 10,
        ry: 10
      },
      image: {
        width: 48,
        height: 48,
        ref: ".card",
        "ref-x": 10,
        "ref-y": 5
      },
      ".rank": {
        "text-decoration": "underline",
        ref: ".card",
        "ref-x": .9,
        "ref-y": .2,
        "font-family": "Courier New",
        "font-size": 14,
        "text-anchor": "end"
      },
      ".name": {
        "font-weight": "800",
        ref: ".card",
        "ref-x": .9,
        "ref-y": .6,
        "font-family": "Courier New",
        "font-size": 14,
        "text-anchor": "end"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><rect class="card"/><image/></g><text class="rank"/><text class="name"/></g>'
  }), joint.dia.Link.define("org.Arrow", {
    source: {
      selector: ".card"
    },
    target: {
      selector: ".card"
    },
    attrs: {
      ".connection": {
        stroke: "#585858",
        "stroke-width": 3
      }
    },
    z: -1
  });
  joint.shapes.basic.Generic.define("chess.KingWhite", {
    size: {
      width: 42,
      height: 38
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;"><path      d="M 22.5,11.63 L 22.5,6"      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />    <path      d="M 20,8 L 25,8"      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />    <path      d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"      style="fill:#ffffff; stroke:#000000; stroke-linecap:butt; stroke-linejoin:miter;" />    <path      d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "      style="fill:#ffffff; stroke:#000000;" />    <path      d="M 11.5,30 C 17,27 27,27 32.5,30"      style="fill:none; stroke:#000000;" />    <path      d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"      style="fill:none; stroke:#000000;" />    <path      d="M 11.5,37 C 17,34 27,34 32.5,37"      style="fill:none; stroke:#000000;" />  </g></g></g>'
  }), joint.shapes.basic.Generic.define("chess.KingBlack", {
    size: {
      width: 42,
      height: 38
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><g style="fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path       d="M 22.5,11.63 L 22.5,6"       style="fill:none; stroke:#000000; stroke-linejoin:miter;"       id="path6570" />    <path       d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"       style="fill:#000000;fill-opacity:1; stroke-linecap:butt; stroke-linejoin:miter;" />    <path       d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "       style="fill:#000000; stroke:#000000;" />    <path       d="M 20,8 L 25,8"       style="fill:none; stroke:#000000; stroke-linejoin:miter;" />    <path       d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85"       style="fill:none; stroke:#ffffff;" />    <path       d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37"       style="fill:none; stroke:#ffffff;" />  </g></g></g>'
  }), joint.shapes.basic.Generic.define("chess.QueenWhite", {
    size: {
      width: 42,
      height: 38
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"      transform="translate(-1,-1)" />    <path      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"      transform="translate(15.5,-5.5)" />    <path      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"      transform="translate(32,-1)" />    <path      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"      transform="translate(7,-4.5)" />    <path      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"      transform="translate(24,-4)" />    <path      d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z "      style="stroke-linecap:butt;" />    <path      d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z "      style="stroke-linecap:butt;" />    <path      d="M 11.5,30 C 15,29 30,29 33.5,30"      style="fill:none;" />    <path      d="M 12,33.5 C 18,32.5 27,32.5 33,33.5"      style="fill:none;" />  </g></g></g>'
  }), joint.shapes.basic.Generic.define("chess.QueenBlack", {
    size: {
      width: 42,
      height: 38
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <g style="fill:#000000; stroke:none;">      <circle cx="6"    cy="12" r="2.75" />      <circle cx="14"   cy="9"  r="2.75" />      <circle cx="22.5" cy="8"  r="2.75" />      <circle cx="31"   cy="9"  r="2.75" />      <circle cx="39"   cy="12" r="2.75" />    </g>    <path       d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"       style="stroke-linecap:butt; stroke:#000000;" />    <path       d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"       style="stroke-linecap:butt;" />    <path       d="M 11,38.5 A 35,35 1 0 0 34,38.5"       style="fill:none; stroke:#000000; stroke-linecap:butt;" />    <path       d="M 11,29 A 35,35 1 0 1 34,29"       style="fill:none; stroke:#ffffff;" />    <path       d="M 12.5,31.5 L 32.5,31.5"       style="fill:none; stroke:#ffffff;" />    <path       d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"       style="fill:none; stroke:#ffffff;" />    <path       d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"       style="fill:none; stroke:#ffffff;" />  </g></g></g>'
  }), joint.shapes.basic.Generic.define("chess.RookWhite", {
    size: {
      width: 32,
      height: 34
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path      d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "      style="stroke-linecap:butt;" />    <path      d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "      style="stroke-linecap:butt;" />    <path      d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14"      style="stroke-linecap:butt;" />    <path      d="M 34,14 L 31,17 L 14,17 L 11,14" />    <path      d="M 31,17 L 31,29.5 L 14,29.5 L 14,17"      style="stroke-linecap:butt; stroke-linejoin:miter;" />    <path      d="M 31,29.5 L 32.5,32 L 12.5,32 L 14,29.5" />    <path      d="M 11,14 L 34,14"      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />  </g></g></g>'
  }), joint.shapes.basic.Generic.define("chess.RookBlack", {
    size: {
      width: 32,
      height: 34
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path      d="M 9,39 L 36,39 L 36,36 L 9,36 L 9,39 z "      style="stroke-linecap:butt;" />    <path      d="M 12.5,32 L 14,29.5 L 31,29.5 L 32.5,32 L 12.5,32 z "      style="stroke-linecap:butt;" />    <path      d="M 12,36 L 12,32 L 33,32 L 33,36 L 12,36 z "      style="stroke-linecap:butt;" />    <path      d="M 14,29.5 L 14,16.5 L 31,16.5 L 31,29.5 L 14,29.5 z "      style="stroke-linecap:butt;stroke-linejoin:miter;" />    <path      d="M 14,16.5 L 11,14 L 34,14 L 31,16.5 L 14,16.5 z "      style="stroke-linecap:butt;" />    <path      d="M 11,14 L 11,9 L 15,9 L 15,11 L 20,11 L 20,9 L 25,9 L 25,11 L 30,11 L 30,9 L 34,9 L 34,14 L 11,14 z "      style="stroke-linecap:butt;" />    <path      d="M 12,35.5 L 33,35.5 L 33,35.5"      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />    <path      d="M 13,31.5 L 32,31.5"      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />    <path      d="M 14,29.5 L 31,29.5"      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />    <path      d="M 14,16.5 L 31,16.5"      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />    <path      d="M 11,14 L 34,14"      style="fill:none; stroke:#ffffff; stroke-width:1; stroke-linejoin:miter;" />  </g></g></g>'
  }), joint.shapes.basic.Generic.define("chess.BishopWhite", {
    size: {
      width: 38,
      height: 38
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <g style="fill:#ffffff; stroke:#000000; stroke-linecap:butt;">       <path        d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />      <path        d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />      <path        d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />    </g>    <path      d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"      style="fill:none; stroke:#000000; stroke-linejoin:miter;" />  </g></g></g>'
  }), joint.shapes.basic.Generic.define("chess.BishopBlack", {
    size: {
      width: 38,
      height: 38
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:none; fill-rule:evenodd; fill-opacity:1; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:round; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <g style="fill:#000000; stroke:#000000; stroke-linecap:butt;">       <path        d="M 9,36 C 12.39,35.03 19.11,36.43 22.5,34 C 25.89,36.43 32.61,35.03 36,36 C 36,36 37.65,36.54 39,38 C 38.32,38.97 37.35,38.99 36,38.5 C 32.61,37.53 25.89,38.96 22.5,37.5 C 19.11,38.96 12.39,37.53 9,38.5 C 7.646,38.99 6.677,38.97 6,38 C 7.354,36.06 9,36 9,36 z" />      <path        d="M 15,32 C 17.5,34.5 27.5,34.5 30,32 C 30.5,30.5 30,30 30,30 C 30,27.5 27.5,26 27.5,26 C 33,24.5 33.5,14.5 22.5,10.5 C 11.5,14.5 12,24.5 17.5,26 C 17.5,26 15,27.5 15,30 C 15,30 14.5,30.5 15,32 z" />      <path        d="M 25 8 A 2.5 2.5 0 1 1  20,8 A 2.5 2.5 0 1 1  25 8 z" />    </g>    <path       d="M 17.5,26 L 27.5,26 M 15,30 L 30,30 M 22.5,15.5 L 22.5,20.5 M 20,18 L 25,18"       style="fill:none; stroke:#ffffff; stroke-linejoin:miter;" />  </g></g></g>'
  }), joint.shapes.basic.Generic.define("chess.KnightWhite", {
    size: {
      width: 38,
      height: 37
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path      d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"      style="fill:#ffffff; stroke:#000000;" />    <path      d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"      style="fill:#ffffff; stroke:#000000;" />    <path      d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"      style="fill:#000000; stroke:#000000;" />    <path      d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"      transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"      style="fill:#000000; stroke:#000000;" />  </g></g></g>'
  }), joint.shapes.basic.Generic.define("chess.KnightBlack", {
    size: {
      width: 38,
      height: 37
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><g style="opacity:1; fill:none; fill-opacity:1; fill-rule:evenodd; stroke:#000000; stroke-width:1.5; stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;">    <path      d="M 22,10 C 32.5,11 38.5,18 38,39 L 15,39 C 15,30 25,32.5 23,18"      style="fill:#000000; stroke:#000000;" />    <path      d="M 24,18 C 24.38,20.91 18.45,25.37 16,27 C 13,29 13.18,31.34 11,31 C 9.958,30.06 12.41,27.96 11,28 C 10,28 11.19,29.23 10,30 C 9,30 5.997,31 6,26 C 6,24 12,14 12,14 C 12,14 13.89,12.1 14,10.5 C 13.27,9.506 13.5,8.5 13.5,7.5 C 14.5,6.5 16.5,10 16.5,10 L 18.5,10 C 18.5,10 19.28,8.008 21,7 C 22,7 22,10 22,10"      style="fill:#000000; stroke:#000000;" />    <path      d="M 9.5 25.5 A 0.5 0.5 0 1 1 8.5,25.5 A 0.5 0.5 0 1 1 9.5 25.5 z"      style="fill:#ffffff; stroke:#ffffff;" />    <path      d="M 15 15.5 A 0.5 1.5 0 1 1  14,15.5 A 0.5 1.5 0 1 1  15 15.5 z"      transform="matrix(0.866,0.5,-0.5,0.866,9.693,-5.173)"      style="fill:#ffffff; stroke:#ffffff;" />    <path      d="M 24.55,10.4 L 24.1,11.85 L 24.6,12 C 27.75,13 30.25,14.49 32.5,18.75 C 34.75,23.01 35.75,29.06 35.25,39 L 35.2,39.5 L 37.45,39.5 L 37.5,39 C 38,28.94 36.62,22.15 34.25,17.66 C 31.88,13.17 28.46,11.02 25.06,10.5 L 24.55,10.4 z "      style="fill:#ffffff; stroke:none;" />  </g></g></g>'
  }), joint.shapes.basic.Generic.define("chess.PawnWhite", {
    size: {
      width: 28,
      height: 33
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><path d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "  style="opacity:1; fill:#ffffff; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" /></g></g>'
  }), joint.shapes.basic.Generic.define("chess.PawnBlack", {
    size: {
      width: 28,
      height: 33
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><path d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "  style="opacity:1; fill:#000000; fill-opacity:1; fill-rule:nonzero; stroke:#000000; stroke-width:1.5; stroke-linecap:round; stroke-linejoin:miter; stroke-miterlimit:4; stroke-dasharray:none; stroke-opacity:1;" /></g></g>'
  });
  joint.shapes.basic.Generic.define("pn.Place", {
    size: {
      width: 50,
      height: 50
    },
    attrs: {
      ".root": {
        r: 25,
        fill: "#ffffff",
        stroke: "#000000",
        transform: "translate(25, 25)"
      },
      ".label": {
        "text-anchor": "middle",
        "ref-x": .5,
        "ref-y": -20,
        ref: ".root",
        fill: "#000000",
        "font-size": 12
      },
      ".tokens > circle": {
        fill: "#000000",
        r: 5
      },
      ".tokens.one > circle": {
        transform: "translate(25, 25)"
      },
      ".tokens.two > circle:nth-child(1)": {
        transform: "translate(19, 25)"
      },
      ".tokens.two > circle:nth-child(2)": {
        transform: "translate(31, 25)"
      },
      ".tokens.three > circle:nth-child(1)": {
        transform: "translate(18, 29)"
      },
      ".tokens.three > circle:nth-child(2)": {
        transform: "translate(25, 19)"
      },
      ".tokens.three > circle:nth-child(3)": {
        transform: "translate(32, 29)"
      },
      ".tokens.alot > text": {
        transform: "translate(25, 18)",
        "text-anchor": "middle",
        fill: "#000000"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><circle class="root"/><g class="tokens" /></g><text class="label"/></g>'
  }), joint.shapes.pn.PlaceView = joint.dia.ElementView.extend({}, {
    initialize: function() {
      joint.dia.ElementView.prototype.initialize.apply(this, arguments), this.model.on("change:tokens", function() {
        this.renderTokens(), this.update()
      }, this)
    },
    render: function() {
      joint.dia.ElementView.prototype.render.apply(this, arguments), this.renderTokens(), this.update()
    },
    renderTokens: function() {
      var a = this.$(".tokens").empty();
      a[0].className.baseVal = "tokens";
      var b = this.model.get("tokens");
      if (b) switch (b) {
        case 1:
          a[0].className.baseVal += " one", a.append(V("<circle/>").node);
          break;
        case 2:
          a[0].className.baseVal += " two", a.append(V("<circle/>").node, V("<circle/>").node);
          break;
        case 3:
          a[0].className.baseVal += " three", a.append(V("<circle/>").node, V("<circle/>").node, V("<circle/>").node);
          break;
        default:
          a[0].className.baseVal += " alot", a.append(V("<text/>").text(b + "").node)
      }
    }
  }), joint.shapes.basic.Generic.define("pn.Transition", {
    size: {
      width: 12,
      height: 50
    },
    attrs: {
      rect: {
        width: 12,
        height: 50,
        fill: "#000000",
        stroke: "#000000"
      },
      ".label": {
        "text-anchor": "middle",
        "ref-x": .5,
        "ref-y": -20,
        ref: "rect",
        fill: "#000000",
        "font-size": 12
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><rect class="root"/></g></g><text class="label"/>'
  }), joint.dia.Link.define("pn.Link", {
    attrs: {
      ".marker-target": {
        d: "M 10 0 L 0 5 L 10 10 z"
      }
    }
  });
  joint.shapes.basic.Generic.define("devs.Model", {
    inPorts: [],
    outPorts: [],
    size: {
      width: 80,
      height: 80
    },
    attrs: {
      ".": {
        magnet: !1
      },
      ".label": {
        text: "Model",
        "ref-x": .5,
        "ref-y": 10,
        "font-size": 18,
        "text-anchor": "middle",
        fill: "#000"
      },
      ".body": {
        "ref-width": "100%",
        "ref-height": "100%",
        stroke: "#000"
      }
    },
    ports: {
      groups: { in : {
        position: {
          name: "left"
        },
        attrs: {
          ".port-label": {
            fill: "#000"
          },
          ".port-body": {
            fill: "#fff",
            stroke: "#000",
            r: 10,
            magnet: !0
          }
        },
        label: {
          position: {
            name: "left",
            args: {
              y: 10
            }
          }
        }
      },
        out: {
          position: {
            name: "right"
          },
          attrs: {
            ".port-label": {
              fill: "#000"
            },
            ".port-body": {
              fill: "#fff",
              stroke: "#000",
              r: 10,
              magnet: !0
            }
          },
          label: {
            position: {
              name: "right",
              args: {
                y: 10
              }
            }
          }
        }
      }
    }
  }, {
    markup: '<g class="rotatable"><rect class="body"/><text class="label"/></g>',
    portMarkup: '<circle class="port-body"/>',
    portLabelMarkup: '<text class="port-label"/>',
    initialize: function() {
      joint.shapes.basic.Generic.prototype.initialize.apply(this, arguments), this.on("change:inPorts change:outPorts", this.updatePortItems, this), this.updatePortItems()
    },
    updatePortItems: function(a, b, c) {
      var d = joint.util.uniq(this.get("inPorts")),
        e = joint.util.difference(joint.util.uniq(this.get("outPorts")), d),
        f = this.createPortItems("in", d),
        g = this.createPortItems("out", e);
      this.prop("ports/items", f.concat(g), joint.util.assign({
        rewrite: !0
      }, c))
    },
    createPortItem: function(a, b) {
      return {
        id: b,
        group: a,
        attrs: {
          ".port-label": {
            text: b
          }
        }
      }
    },
    createPortItems: function(a, b) {
      return joint.util.toArray(b).map(this.createPortItem.bind(this, a))
    },
    _addGroupPort: function(a, b, c) {
      var d = this.get(b);
      return this.set(b, Array.isArray(d) ? d.concat(a) : [a], c)
    },
    addOutPort: function(a, b) {
      return this._addGroupPort(a, "outPorts", b)
    },
    addInPort: function(a, b) {
      return this._addGroupPort(a, "inPorts", b)
    },
    _removeGroupPort: function(a, b, c) {
      return this.set(b, joint.util.without(this.get(b), a), c)
    },
    removeOutPort: function(a, b) {
      return this._removeGroupPort(a, "outPorts", b)
    },
    removeInPort: function(a, b) {
      return this._removeGroupPort(a, "inPorts", b)
    },
    _changeGroup: function(a, b, c) {
      return this.prop("ports/groups/" + a, joint.util.isObject(b) ? b : {}, c)
    },
    changeInGroup: function(a, b) {
      return this._changeGroup("in", a, b)
    },
    changeOutGroup: function(a, b) {
      return this._changeGroup("out", a, b)
    }
  }), joint.shapes.devs.Model.define("devs.Atomic", {
    size: {
      width: 80,
      height: 80
    },
    attrs: {
      ".label": {
        text: "Atomic"
      }
    }
  }), joint.shapes.devs.Model.define("devs.Coupled", {
    size: {
      width: 200,
      height: 300
    },
    attrs: {
      ".label": {
        text: "Coupled"
      }
    }
  }), joint.dia.Link.define("devs.Link", {
    attrs: {
      ".connection": {
        "stroke-width": 2
      }
    }
  });
  joint.shapes.basic.Generic.define("uml.Class", {
    attrs: {
      rect: {
        width: 200
      },
      ".uml-class-name-rect": {
        stroke: "black",
        "stroke-width": 2,
        fill: "#3498db"
      },
      ".uml-class-attrs-rect": {
        stroke: "black",
        "stroke-width": 2,
        fill: "#2980b9"
      },
      ".uml-class-methods-rect": {
        stroke: "black",
        "stroke-width": 2,
        fill: "#2980b9"
      },
      ".uml-class-name-text": {
        ref: ".uml-class-name-rect",
        "ref-y": .5,
        "ref-x": .5,
        "text-anchor": "middle",
        "y-alignment": "middle",
        "font-weight": "bold",
        fill: "black",
        "font-size": 12,
        "font-family": "Times New Roman"
      },
      ".uml-class-attrs-text": {
        ref: ".uml-class-attrs-rect",
        "ref-y": 5,
        "ref-x": 5,
        fill: "black",
        "font-size": 12,
        "font-family": "Times New Roman"
      },
      ".uml-class-methods-text": {
        ref: ".uml-class-methods-rect",
        "ref-y": 5,
        "ref-x": 5,
        fill: "black",
        "font-size": 12,
        "font-family": "Times New Roman"
      }
    },
    name: [],
    attributes: [],
    methods: []
  }, {
    markup: ['<g class="rotatable">', '<g class="scalable">', '<rect class="uml-class-name-rect"/><rect class="uml-class-attrs-rect"/><rect class="uml-class-methods-rect"/>', "</g>", '<text class="uml-class-name-text"/><text class="uml-class-attrs-text"/><text class="uml-class-methods-text"/>', "</g>"].join(""),
    initialize: function() {
      this.on("change:name change:attributes change:methods", function() {
        this.updateRectangles(), this.trigger("uml-update")
      }, this), this.updateRectangles(), joint.shapes.basic.Generic.prototype.initialize.apply(this, arguments)
    },
    getClassName: function() {
      return this.get("name")
    },
    updateRectangles: function() {
      var a = this.get("attrs"),
        b = [{
          type: "name",
          text: this.getClassName()
        }, {
          type: "attrs",
          text: this.get("attributes")
        }, {
          type: "methods",
          text: this.get("methods")
        }],
        c = 0;
      b.forEach(function(b) {
        var d = Array.isArray(b.text) ? b.text : [b.text],
          e = 20 * d.length + 20;
        a[".uml-class-" + b.type + "-text"].text = d.join("\n"), a[".uml-class-" + b.type + "-rect"].height = e, a[".uml-class-" + b.type + "-rect"].transform = "translate(0," + c + ")", c += e
      })
    }
  }), joint.shapes.uml.ClassView = joint.dia.ElementView.extend({}, {
    initialize: function() {
      joint.dia.ElementView.prototype.initialize.apply(this, arguments), this.listenTo(this.model, "uml-update", function() {
        this.update(), this.resize()
      })
    }
  }), joint.shapes.uml.Class.define("uml.Abstract", {
    attrs: {
      ".uml-class-name-rect": {
        fill: "#e74c3c"
      },
      ".uml-class-attrs-rect": {
        fill: "#c0392b"
      },
      ".uml-class-methods-rect": {
        fill: "#c0392b"
      }
    }
  }, {
    getClassName: function() {
      return ["<<Abstract>>", this.get("name")]
    }
  }), joint.shapes.uml.AbstractView = joint.shapes.uml.ClassView, joint.shapes.uml.Class.define("uml.Interface", {
    attrs: {
      ".uml-class-name-rect": {
        fill: "#f1c40f"
      },
      ".uml-class-attrs-rect": {
        fill: "#f39c12"
      },
      ".uml-class-methods-rect": {
        fill: "#f39c12"
      }
    }
  }, {
    getClassName: function() {
      return ["<<Interface>>", this.get("name")]
    }
  }), joint.shapes.uml.InterfaceView = joint.shapes.uml.ClassView, joint.dia.Link.define("uml.Generalization", {
    attrs: {
      ".marker-target": {
        d: "M 20 0 L 0 10 L 20 20 z",
        fill: "white"
      }
    }
  }), joint.dia.Link.define("uml.Implementation", {
    attrs: {
      ".marker-target": {
        d: "M 20 0 L 0 10 L 20 20 z",
        fill: "white"
      },
      ".connection": {
        "stroke-dasharray": "3,3"
      }
    }
  }), joint.dia.Link.define("uml.Aggregation", {
    attrs: {
      ".marker-target": {
        d: "M 40 10 L 20 20 L 0 10 L 20 0 z",
        fill: "white"
      }
    }
  }), joint.dia.Link.define("uml.Composition", {
    attrs: {
      ".marker-target": {
        d: "M 40 10 L 20 20 L 0 10 L 20 0 z",
        fill: "black"
      }
    }
  }), joint.dia.Link.define("uml.Association"), joint.shapes.basic.Generic.define("uml.State", {
    attrs: {
      ".uml-state-body": {
        width: 200,
        height: 200,
        rx: 10,
        ry: 10,
        fill: "#ecf0f1",
        stroke: "#bdc3c7",
        "stroke-width": 3
      },
      ".uml-state-separator": {
        stroke: "#bdc3c7",
        "stroke-width": 2
      },
      ".uml-state-name": {
        ref: ".uml-state-body",
        "ref-x": .5,
        "ref-y": 5,
        "text-anchor": "middle",
        fill: "#000000",
        "font-family": "Courier New",
        "font-size": 14
      },
      ".uml-state-events": {
        ref: ".uml-state-separator",
        "ref-x": 5,
        "ref-y": 5,
        fill: "#000000",
        "font-family": "Courier New",
        "font-size": 14
      }
    },
    name: "State",
    events: []
  }, {
    markup: ['<g class="rotatable">', '<g class="scalable">', '<rect class="uml-state-body"/>', "</g>", '<path class="uml-state-separator"/>', '<text class="uml-state-name"/>', '<text class="uml-state-events"/>', "</g>"].join(""),
    initialize: function() {
      this.on({
        "change:name": this.updateName,
        "change:events": this.updateEvents,
        "change:size": this.updatePath
      }, this), this.updateName(), this.updateEvents(), this.updatePath(), joint.shapes.basic.Generic.prototype.initialize.apply(this, arguments)
    },
    updateName: function() {
      this.attr(".uml-state-name/text", this.get("name"))
    },
    updateEvents: function() {
      this.attr(".uml-state-events/text", this.get("events").join("\n"))
    },
    updatePath: function() {
      var a = "M 0 20 L " + this.get("size").width + " 20";
      this.attr(".uml-state-separator/d", a, {
        silent: !0
      })
    }
  }), joint.shapes.basic.Circle.define("uml.StartState", {
    type: "uml.StartState",
    attrs: {
      circle: {
        fill: "#34495e",
        stroke: "#2c3e50",
        "stroke-width": 2,
        rx: 1
      }
    }
  }), joint.shapes.basic.Generic.define("uml.EndState", {
    size: {
      width: 20,
      height: 20
    },
    attrs: {
      "circle.outer": {
        transform: "translate(10, 10)",
        r: 10,
        fill: "#ffffff",
        stroke: "#2c3e50"
      },
      "circle.inner": {
        transform: "translate(10, 10)",
        r: 6,
        fill: "#34495e"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><circle class="outer"/><circle class="inner"/></g></g>'
  }), joint.dia.Link.define("uml.Transition", {
    attrs: {
      ".marker-target": {
        d: "M 10 0 L 0 5 L 10 10 z",
        fill: "#34495e",
        stroke: "#2c3e50"
      },
      ".connection": {
        stroke: "#2c3e50"
      }
    }
  });
  joint.shapes.basic.Generic.define("logic.Gate", {
    size: {
      width: 80,
      height: 40
    },
    attrs: {
      ".": {
        magnet: !1
      },
      ".body": {
        width: 100,
        height: 50
      },
      circle: {
        r: 7,
        stroke: "black",
        fill: "transparent",
        "stroke-width": 2
      }
    }
  }, {
    operation: function() {
      return !0
    }
  }), joint.shapes.logic.Gate.define("logic.IO", {
    size: {
      width: 60,
      height: 30
    },
    attrs: {
      ".body": {
        fill: "white",
        stroke: "black",
        "stroke-width": 2
      },
      ".wire": {
        ref: ".body",
        "ref-y": .5,
        stroke: "black"
      },
      text: {
        fill: "black",
        ref: ".body",
        "ref-x": .5,
        "ref-y": .5,
        "y-alignment": "middle",
        "text-anchor": "middle",
        "font-weight": "bold",
        "font-variant": "small-caps",
        "text-transform": "capitalize",
        "font-size": "14px"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><rect class="body"/></g><path class="wire"/><circle/><text/></g>'
  }), joint.shapes.logic.IO.define("logic.Input", {
    attrs: {
      ".wire": {
        "ref-dx": 0,
        d: "M 0 0 L 23 0"
      },
      circle: {
        ref: ".body",
        "ref-dx": 30,
        "ref-y": .5,
        magnet: !0,
        class: "output",
        port: "out"
      },
      text: {
        text: "input"
      }
    }
  }), joint.shapes.logic.IO.define("logic.Output", {
    attrs: {
      ".wire": {
        "ref-x": 0,
        d: "M 0 0 L -23 0"
      },
      circle: {
        ref: ".body",
        "ref-x": -30,
        "ref-y": .5,
        magnet: "passive",
        class: "input",
        port: "in"
      },
      text: {
        text: "output"
      }
    }
  }), joint.shapes.logic.Gate.define("logic.Gate11", {
    attrs: {
      ".input": {
        ref: ".body",
        "ref-x": -2,
        "ref-y": .5,
        magnet: "passive",
        port: "in"
      },
      ".output": {
        ref: ".body",
        "ref-dx": 2,
        "ref-y": .5,
        magnet: !0,
        port: "out"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><circle class="input"/><circle class="output"/></g>'
  }), joint.shapes.logic.Gate.define("logic.Gate21", {
    attrs: {
      ".input1": {
        ref: ".body",
        "ref-x": -2,
        "ref-y": .3,
        magnet: "passive",
        port: "in1"
      },
      ".input2": {
        ref: ".body",
        "ref-x": -2,
        "ref-y": .7,
        magnet: "passive",
        port: "in2"
      },
      ".output": {
        ref: ".body",
        "ref-dx": 2,
        "ref-y": .5,
        magnet: !0,
        port: "out"
      }
    }
  }, {
    markup: '<g class="rotatable"><g class="scalable"><image class="body"/></g><circle class="input input1"/><circle  class="input input2"/><circle class="output"/></g>'
  }), joint.shapes.logic.Gate11.define("logic.Repeater", {
    attrs: {
      image: {
        "xlink:href": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik5PVCBBTlNJLnN2ZyIKICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDEwIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3MTQiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjAuNSA6IDAuMzMzMzMzMzMgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgwNiIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgxOSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzIuMDQ3MjQgOiAzNTAuNzg3MzkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MjYuMTgxMDkgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjc3NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI3NSA6IDQwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjE1MCA6IDYwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA2MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUzMjc1IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjUwIDogMzMuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEwMCA6IDUwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmU1NTMzIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMyIDogMjEuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjY0IDogMzIgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDMyIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI1NTciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxNi42NjY2NjcgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAyNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMjUgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjgiCiAgICAgaW5rc2NhcGU6Y3g9Ijg0LjY4NTM1MiIKICAgICBpbmtzY2FwZTpjeT0iMTUuMjg4NjI4IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtcG9pbnRzPSJ0cnVlIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM5OSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NzQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjMzIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgaWQ9IkdyaWRGcm9tUHJlMDQ2U2V0dGluZ3MiCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBvcmlnaW54PSIwcHgiCiAgICAgICBvcmlnaW55PSIwcHgiCiAgICAgICBzcGFjaW5neD0iMXB4IgogICAgICAgc3BhY2luZ3k9IjFweCIKICAgICAgIGNvbG9yPSIjMDAwMGZmIgogICAgICAgZW1wY29sb3I9IiMwMDAwZmYiCiAgICAgICBvcGFjaXR5PSIwLjIiCiAgICAgICBlbXBvcGFjaXR5PSIwLjQiCiAgICAgICBlbXBzcGFjaW5nPSI1IgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5ODg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gNzIuMTU2OTEsMjUgTCA5NSwyNSIKICAgICAgIGlkPSJwYXRoMzA1OSIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAyOS4wNDM0NzgsMjUgTCA1LjA0MzQ3ODEsMjUiCiAgICAgICBpZD0icGF0aDMwNjEiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWpvaW46bWl0ZXI7bWFya2VyOm5vbmU7c3Ryb2tlLW9wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0iTSAyOC45Njg3NSwyLjU5Mzc1IEwgMjguOTY4NzUsNSBMIDI4Ljk2ODc1LDQ1IEwgMjguOTY4NzUsNDcuNDA2MjUgTCAzMS4xMjUsNDYuMzQzNzUgTCA3Mi4xNTYyNSwyNi4zNDM3NSBMIDcyLjE1NjI1LDIzLjY1NjI1IEwgMzEuMTI1LDMuNjU2MjUgTCAyOC45Njg3NSwyLjU5Mzc1IHogTSAzMS45Njg3NSw3LjQwNjI1IEwgNjguMDkzNzUsMjUgTCAzMS45Njg3NSw0Mi41OTM3NSBMIDMxLjk2ODc1LDcuNDA2MjUgeiIKICAgICAgIGlkPSJwYXRoMjYzOCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjYyIgLz4KICA8L2c+Cjwvc3ZnPgo="
      }
    }
  }, {
    operation: function(a) {
      return a
    }
  }), joint.shapes.logic.Gate11.define("logic.Not", {
    attrs: {
      image: {
        "xlink:href": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik5PVCBBTlNJLnN2ZyIKICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDEwIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3MTQiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjAuNSA6IDAuMzMzMzMzMzMgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgwNiIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgxOSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzIuMDQ3MjQgOiAzNTAuNzg3MzkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MjYuMTgxMDkgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjc3NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI3NSA6IDQwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjE1MCA6IDYwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA2MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUzMjc1IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjUwIDogMzMuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEwMCA6IDUwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmU1NTMzIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMyIDogMjEuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjY0IDogMzIgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDMyIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI1NTciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxNi42NjY2NjcgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAyNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMjUgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjgiCiAgICAgaW5rc2NhcGU6Y3g9Ijg0LjY4NTM1MiIKICAgICBpbmtzY2FwZTpjeT0iMTUuMjg4NjI4IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtcG9pbnRzPSJ0cnVlIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM5OSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NzQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjMzIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgaWQ9IkdyaWRGcm9tUHJlMDQ2U2V0dGluZ3MiCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBvcmlnaW54PSIwcHgiCiAgICAgICBvcmlnaW55PSIwcHgiCiAgICAgICBzcGFjaW5neD0iMXB4IgogICAgICAgc3BhY2luZ3k9IjFweCIKICAgICAgIGNvbG9yPSIjMDAwMGZmIgogICAgICAgZW1wY29sb3I9IiMwMDAwZmYiCiAgICAgICBvcGFjaXR5PSIwLjIiCiAgICAgICBlbXBvcGFjaXR5PSIwLjQiCiAgICAgICBlbXBzcGFjaW5nPSI1IgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5ODg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gNzkuMTU2OTEsMjUgTCA5NSwyNSIKICAgICAgIGlkPSJwYXRoMzA1OSIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAyOS4wNDM0NzgsMjUgTCA1LjA0MzQ3ODEsMjUiCiAgICAgICBpZD0icGF0aDMwNjEiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWpvaW46bWl0ZXI7bWFya2VyOm5vbmU7c3Ryb2tlLW9wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgZD0iTSAyOC45Njg3NSwyLjU5Mzc1IEwgMjguOTY4NzUsNSBMIDI4Ljk2ODc1LDQ1IEwgMjguOTY4NzUsNDcuNDA2MjUgTCAzMS4xMjUsNDYuMzQzNzUgTCA3Mi4xNTYyNSwyNi4zNDM3NSBMIDcyLjE1NjI1LDIzLjY1NjI1IEwgMzEuMTI1LDMuNjU2MjUgTCAyOC45Njg3NSwyLjU5Mzc1IHogTSAzMS45Njg3NSw3LjQwNjI1IEwgNjguMDkzNzUsMjUgTCAzMS45Njg3NSw0Mi41OTM3NSBMIDMxLjk2ODc1LDcuNDA2MjUgeiIKICAgICAgIGlkPSJwYXRoMjYzOCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjY2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTp0eXBlPSJhcmMiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lam9pbjptaXRlcjttYXJrZXI6bm9uZTtzdHJva2Utb3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBpZD0icGF0aDI2NzEiCiAgICAgICBzb2RpcG9kaTpjeD0iNzYiCiAgICAgICBzb2RpcG9kaTpjeT0iMjUiCiAgICAgICBzb2RpcG9kaTpyeD0iNCIKICAgICAgIHNvZGlwb2RpOnJ5PSI0IgogICAgICAgZD0iTSA4MCwyNSBBIDQsNCAwIDEgMSA3MiwyNSBBIDQsNCAwIDEgMSA4MCwyNSB6IgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEsMCkiIC8+CiAgPC9nPgo8L3N2Zz4K"
      }
    }
  }, {
    operation: function(a) {
      return !a
    }
  }), joint.shapes.logic.Gate21.define("logic.Or", {
    attrs: {
      image: {
        "xlink:href": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik9SIEFOU0kuc3ZnIgogICBpbmtzY2FwZTpvdXRwdXRfZXh0ZW5zaW9uPSJvcmcuaW5rc2NhcGUub3V0cHV0LnN2Zy5pbmtzY2FwZSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjUwIDogMTUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjI1IDogMTAgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjcxNCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfej0iMSA6IDAuNSA6IDEiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMC41IDogMC4zMzMzMzMzMyA6IDEiCiAgICAgICBpZD0icGVyc3BlY3RpdmUyODA2IiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUyODE5IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjM3Mi4wNDcyNCA6IDM1MC43ODczOSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSI3NDQuMDk0NDggOiA1MjYuMTgxMDkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDUyNi4xODEwOSA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUyNzc3IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49Ijc1IDogNDAgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iMTUwIDogNjAgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDYwIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTMyNzUiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iNTAgOiAzMy4zMzMzMzMgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iMTAwIDogNTAgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDUwIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTU1MzMiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMzIgOiAyMS4zMzMzMzMgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNjQgOiAzMiA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMzIgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjU1NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDE2LjY2NjY2NyA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDI1IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAyNSA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iNCIKICAgICBpbmtzY2FwZTpjeD0iMTEzLjAwMDM5IgogICAgIGlua3NjYXBlOmN5PSIxMi44OTM3MzEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9InB4IgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImcyNTYwIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBpbmtzY2FwZTpncmlkLWJib3g9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1wb2ludHM9InRydWUiCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAwMDAiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMzk5IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijg3NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iMzciCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii00IgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgaWQ9IkdyaWRGcm9tUHJlMDQ2U2V0dGluZ3MiCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBvcmlnaW54PSIwcHgiCiAgICAgICBvcmlnaW55PSIwcHgiCiAgICAgICBzcGFjaW5neD0iMXB4IgogICAgICAgc3BhY2luZ3k9IjFweCIKICAgICAgIGNvbG9yPSIjMDAwMGZmIgogICAgICAgZW1wY29sb3I9IiMwMDAwZmYiCiAgICAgICBvcGFjaXR5PSIwLjIiCiAgICAgICBlbXBvcGFjaXR5PSIwLjQiCiAgICAgICBlbXBzcGFjaW5nPSI1IgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gNzAsMjUgYyAyMCwwIDI1LDAgMjUsMCIKICAgICAgIGlkPSJwYXRoMzA1OSIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAzMSwxNSA1LDE1IgogICAgICAgaWQ9InBhdGgzMDYxIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5ODg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMzIsMzUgNSwzNSIKICAgICAgIGlkPSJwYXRoMzk0NCIgLz4KICAgIDxnCiAgICAgICBpZD0iZzI1NjAiCiAgICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2LjUsLTM5LjUpIj4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICBkPSJNIC0yLjQwNjI1LDQ0LjUgTCAtMC40MDYyNSw0Ni45Mzc1IEMgLTAuNDA2MjUsNDYuOTM3NSA1LjI1LDUzLjkzNzU0OSA1LjI1LDY0LjUgQyA1LjI1LDc1LjA2MjQ1MSAtMC40MDYyNSw4Mi4wNjI1IC0wLjQwNjI1LDgyLjA2MjUgTCAtMi40MDYyNSw4NC41IEwgMC43NSw4NC41IEwgMTQuNzUsODQuNSBDIDE3LjE1ODA3Niw4NC41MDAwMDEgMjIuNDM5Njk5LDg0LjUyNDUxNCAyOC4zNzUsODIuMDkzNzUgQyAzNC4zMTAzMDEsNzkuNjYyOTg2IDQwLjkxMTUzNiw3NC43NTA0ODQgNDYuMDYyNSw2NS4yMTg3NSBMIDQ0Ljc1LDY0LjUgTCA0Ni4wNjI1LDYzLjc4MTI1IEMgMzUuNzU5Mzg3LDQ0LjcxNTU5IDE5LjUwNjU3NCw0NC41IDE0Ljc1LDQ0LjUgTCAwLjc1LDQ0LjUgTCAtMi40MDYyNSw0NC41IHogTSAzLjQ2ODc1LDQ3LjUgTCAxNC43NSw0Ny41IEMgMTkuNDM0MTczLDQ3LjUgMzMuMDM2ODUsNDcuMzY5NzkzIDQyLjcxODc1LDY0LjUgQyAzNy45NTE5NjQsNzIuOTI5MDc1IDMyLjE5NzQ2OSw3Ny4xODM5MSAyNyw3OS4zMTI1IEMgMjEuNjM5MzM5LDgxLjUwNzkyNCAxNy4xNTgwNzUsODEuNTAwMDAxIDE0Ljc1LDgxLjUgTCAzLjUsODEuNSBDIDUuMzczNTg4NCw3OC4zOTE1NjYgOC4yNSw3Mi40NTA2NSA4LjI1LDY0LjUgQyA4LjI1LDU2LjUyNjY0NiA1LjM0MTQ2ODYsNTAuNTk5ODE1IDMuNDY4NzUsNDcuNSB6IgogICAgICAgICBpZD0icGF0aDQ5NzMiCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NzY2NjY3NjY2NjY2NjY2NzY2NzYyIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="
      }
    }
  }, {
    operation: function(a, b) {
      return a || b
    }
  }), joint.shapes.logic.Gate21.define("logic.And", {
    attrs: {
      image: {
        "xlink:href": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9IkFORCBBTlNJLnN2ZyIKICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDEwIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3MTQiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjAuNSA6IDAuMzMzMzMzMzMgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgwNiIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgxOSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzIuMDQ3MjQgOiAzNTAuNzg3MzkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MjYuMTgxMDkgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjc3NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI3NSA6IDQwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjE1MCA6IDYwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA2MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUzMjc1IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjUwIDogMzMuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEwMCA6IDUwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmU1NTMzIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMyIDogMjEuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjY0IDogMzIgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDMyIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI4IgogICAgIGlua3NjYXBlOmN4PSI1Ni42OTgzNDgiCiAgICAgaW5rc2NhcGU6Y3k9IjI1LjMyNjg5OSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpncmlkLXBvaW50cz0idHJ1ZSIKICAgICBncmlkdG9sZXJhbmNlPSIxMDAwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzOTkiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODc0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIzMyIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIGlkPSJHcmlkRnJvbVByZTA0NlNldHRpbmdzIgogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgb3JpZ2lueD0iMHB4IgogICAgICAgb3JpZ2lueT0iMHB4IgogICAgICAgc3BhY2luZ3g9IjFweCIKICAgICAgIHNwYWNpbmd5PSIxcHgiCiAgICAgICBjb2xvcj0iIzAwMDBmZiIKICAgICAgIGVtcGNvbG9yPSIjMDAwMGZmIgogICAgICAgb3BhY2l0eT0iMC4yIgogICAgICAgZW1wb3BhY2l0eT0iMC40IgogICAgICAgZW1wc3BhY2luZz0iNSIKICAgICAgIHZpc2libGU9InRydWUiCiAgICAgICBlbmFibGVkPSJ0cnVlIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDcwLDI1IGMgMjAsMCAyNSwwIDI1LDAiCiAgICAgICBpZD0icGF0aDMwNTkiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMzEsMTUgNSwxNSIKICAgICAgIGlkPSJwYXRoMzA2MSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjk5OTk5OTg4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDMyLDM1IDUsMzUiCiAgICAgICBpZD0icGF0aDM5NDQiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZvbnQtc2l6ZTptZWRpdW07Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDt0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7bGluZS1oZWlnaHQ6bm9ybWFsO2xldHRlci1zcGFjaW5nOm5vcm1hbDt3b3JkLXNwYWNpbmc6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7ZGlyZWN0aW9uOmx0cjtibG9jay1wcm9ncmVzc2lvbjp0Yjt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozO21hcmtlcjpub25lO3Zpc2liaWxpdHk6dmlzaWJsZTtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGU7Zm9udC1mYW1pbHk6Qml0c3RyZWFtIFZlcmEgU2FuczstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOkJpdHN0cmVhbSBWZXJhIFNhbnMiCiAgICAgICBkPSJNIDMwLDUgTCAzMCw2LjQyODU3MTQgTCAzMCw0My41NzE0MjkgTCAzMCw0NSBMIDMxLjQyODU3MSw0NSBMIDUwLjQ3NjE5LDQ1IEMgNjEuNzQ0MDk4LDQ1IDcwLjQ3NjE5LDM1Ljk5OTk1NSA3MC40NzYxOSwyNSBDIDcwLjQ3NjE5LDE0LjAwMDA0NSA2MS43NDQwOTksNS4wMDAwMDAyIDUwLjQ3NjE5LDUgQyA1MC40NzYxOSw1IDUwLjQ3NjE5LDUgMzEuNDI4NTcxLDUgTCAzMCw1IHogTSAzMi44NTcxNDMsNy44NTcxNDI5IEMgNDAuODM0MjY0LDcuODU3MTQyOSA0NS45MTgzNjgsNy44NTcxNDI5IDQ4LjA5NTIzOCw3Ljg1NzE0MjkgQyA0OS4yODU3MTQsNy44NTcxNDI5IDQ5Ljg4MDk1Miw3Ljg1NzE0MjkgNTAuMTc4NTcxLDcuODU3MTQyOSBDIDUwLjMyNzM4MSw3Ljg1NzE0MjkgNTAuNDA5MjI3LDcuODU3MTQyOSA1MC40NDY0MjksNy44NTcxNDI5IEMgNTAuNDY1MDI5LDcuODU3MTQyOSA1MC40NzE1NDMsNy44NTcxNDI5IDUwLjQ3NjE5LDcuODU3MTQyOSBDIDYwLjIzNjg1Myw3Ljg1NzE0MyA2Ny4xNDI4NTcsMTUuNDk3MDk4IDY3LjE0Mjg1NywyNSBDIDY3LjE0Mjg1NywzNC41MDI5MDIgNTkuNzYwNjYyLDQyLjE0Mjg1NyA1MCw0Mi4xNDI4NTcgTCAzMi44NTcxNDMsNDIuMTQyODU3IEwgMzIuODU3MTQzLDcuODU3MTQyOSB6IgogICAgICAgaWQ9InBhdGgyODg0IgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NzY2NjY3Nzc3NzY2NjIiAvPgogIDwvZz4KPC9zdmc+Cg=="
      }
    }
  }, {
    operation: function(a, b) {
      return a && b
    }
  }), joint.shapes.logic.Gate21.define("logic.Nor", {
    attrs: {
      image: {
        "xlink:href": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik5PUiBBTlNJLnN2ZyIKICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDEwIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3MTQiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjAuNSA6IDAuMzMzMzMzMzMgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgwNiIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgxOSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzIuMDQ3MjQgOiAzNTAuNzg3MzkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MjYuMTgxMDkgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjc3NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI3NSA6IDQwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjE1MCA6IDYwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA2MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUzMjc1IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjUwIDogMzMuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEwMCA6IDUwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmU1NTMzIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMyIDogMjEuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjY0IDogMzIgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDMyIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI1NTciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxNi42NjY2NjcgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAyNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMjUgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEiCiAgICAgaW5rc2NhcGU6Y3g9Ijc4LjY3NzY0NCIKICAgICBpbmtzY2FwZTpjeT0iMjIuMTAyMzQ0IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtcG9pbnRzPSJ0cnVlIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM5OSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NzQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjM3IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItNCIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIGlkPSJHcmlkRnJvbVByZTA0NlNldHRpbmdzIgogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgb3JpZ2lueD0iMHB4IgogICAgICAgb3JpZ2lueT0iMHB4IgogICAgICAgc3BhY2luZ3g9IjFweCIKICAgICAgIHNwYWNpbmd5PSIxcHgiCiAgICAgICBjb2xvcj0iIzAwMDBmZiIKICAgICAgIGVtcGNvbG9yPSIjMDAwMGZmIgogICAgICAgb3BhY2l0eT0iMC4yIgogICAgICAgZW1wb3BhY2l0eT0iMC40IgogICAgICAgZW1wc3BhY2luZz0iNSIKICAgICAgIHZpc2libGU9InRydWUiCiAgICAgICBlbmFibGVkPSJ0cnVlIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc5LDI1IEMgOTksMjUgOTUsMjUgOTUsMjUiCiAgICAgICBpZD0icGF0aDMwNTkiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMzEsMTUgNSwxNSIKICAgICAgIGlkPSJwYXRoMzA2MSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjk5OTk5OTg4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDMyLDM1IDUsMzUiCiAgICAgICBpZD0icGF0aDM5NDQiIC8+CiAgICA8ZwogICAgICAgaWQ9ImcyNTYwIgogICAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi41LC0zOS41KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0iTSAtMi40MDYyNSw0NC41IEwgLTAuNDA2MjUsNDYuOTM3NSBDIC0wLjQwNjI1LDQ2LjkzNzUgNS4yNSw1My45Mzc1NDkgNS4yNSw2NC41IEMgNS4yNSw3NS4wNjI0NTEgLTAuNDA2MjUsODIuMDYyNSAtMC40MDYyNSw4Mi4wNjI1IEwgLTIuNDA2MjUsODQuNSBMIDAuNzUsODQuNSBMIDE0Ljc1LDg0LjUgQyAxNy4xNTgwNzYsODQuNTAwMDAxIDIyLjQzOTY5OSw4NC41MjQ1MTQgMjguMzc1LDgyLjA5Mzc1IEMgMzQuMzEwMzAxLDc5LjY2Mjk4NiA0MC45MTE1MzYsNzQuNzUwNDg0IDQ2LjA2MjUsNjUuMjE4NzUgTCA0NC43NSw2NC41IEwgNDYuMDYyNSw2My43ODEyNSBDIDM1Ljc1OTM4Nyw0NC43MTU1OSAxOS41MDY1NzQsNDQuNSAxNC43NSw0NC41IEwgMC43NSw0NC41IEwgLTIuNDA2MjUsNDQuNSB6IE0gMy40Njg3NSw0Ny41IEwgMTQuNzUsNDcuNSBDIDE5LjQzNDE3Myw0Ny41IDMzLjAzNjg1LDQ3LjM2OTc5MyA0Mi43MTg3NSw2NC41IEMgMzcuOTUxOTY0LDcyLjkyOTA3NSAzMi4xOTc0NjksNzcuMTgzOTEgMjcsNzkuMzEyNSBDIDIxLjYzOTMzOSw4MS41MDc5MjQgMTcuMTU4MDc1LDgxLjUwMDAwMSAxNC43NSw4MS41IEwgMy41LDgxLjUgQyA1LjM3MzU4ODQsNzguMzkxNTY2IDguMjUsNzIuNDUwNjUgOC4yNSw2NC41IEMgOC4yNSw1Ni41MjY2NDYgNS4zNDE0Njg2LDUwLjU5OTgxNSAzLjQ2ODc1LDQ3LjUgeiIKICAgICAgICAgaWQ9InBhdGg0OTczIgogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjc2NjY2NzY2NjY2NjY2Njc2Njc2MiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIHNvZGlwb2RpOnR5cGU9ImFyYyIKICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWpvaW46bWl0ZXI7bWFya2VyOm5vbmU7c3Ryb2tlLW9wYWNpdHk6MTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlIgogICAgICAgICBpZD0icGF0aDI2MDQiCiAgICAgICAgIHNvZGlwb2RpOmN4PSI3NSIKICAgICAgICAgc29kaXBvZGk6Y3k9IjI1IgogICAgICAgICBzb2RpcG9kaTpyeD0iNCIKICAgICAgICAgc29kaXBvZGk6cnk9IjQiCiAgICAgICAgIGQ9Ik0gNzksMjUgQSA0LDQgMCAxIDEgNzEsMjUgQSA0LDQgMCAxIDEgNzksMjUgeiIKICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI2LjUsMzkuNSkiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
      }
    }
  }, {
    operation: function(a, b) {
      return !(a || b)
    }
  }), joint.shapes.logic.Gate21.define("logic.Nand", {
    attrs: {
      image: {
        "xlink:href": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9Ik5BTkQgQU5TSS5zdmciCiAgIGlua3NjYXBlOm91dHB1dF9leHRlbnNpb249Im9yZy5pbmtzY2FwZS5vdXRwdXQuc3ZnLmlua3NjYXBlIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNCI+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMTUgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxMCA6IDEiCiAgICAgICBpZD0icGVyc3BlY3RpdmUyNzE0IiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDAuNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIwLjUgOiAwLjMzMzMzMzMzIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI4MDYiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI4MTkiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMzcyLjA0NzI0IDogMzUwLjc4NzM5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9Ijc0NC4wOTQ0OCA6IDUyNi4xODEwOSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNTI2LjE4MTA5IDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3NzciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iNzUgOiA0MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxNTAgOiA2MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNjAgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMzI3NSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI1MCA6IDMzLjMzMzMzMyA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxMDAgOiA1MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNTAgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlNTUzMyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzMiA6IDIxLjMzMzMzMyA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSI2NCA6IDMyIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAzMiA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogIDwvZGVmcz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMTYiCiAgICAgaW5rc2NhcGU6Y3g9Ijc4LjI4MzMwNyIKICAgICBpbmtzY2FwZTpjeT0iMTYuNDQyODQzIgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtcG9pbnRzPSJ0cnVlIgogICAgIGdyaWR0b2xlcmFuY2U9IjEwMDAwIgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTM5OSIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSI4NzQiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjMzIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIwIgogICAgIGlua3NjYXBlOnNuYXAtYmJveD0idHJ1ZSI+CiAgICA8aW5rc2NhcGU6Z3JpZAogICAgICAgaWQ9IkdyaWRGcm9tUHJlMDQ2U2V0dGluZ3MiCiAgICAgICB0eXBlPSJ4eWdyaWQiCiAgICAgICBvcmlnaW54PSIwcHgiCiAgICAgICBvcmlnaW55PSIwcHgiCiAgICAgICBzcGFjaW5neD0iMXB4IgogICAgICAgc3BhY2luZ3k9IjFweCIKICAgICAgIGNvbG9yPSIjMDAwMGZmIgogICAgICAgZW1wY29sb3I9IiMwMDAwZmYiCiAgICAgICBvcGFjaXR5PSIwLjIiCiAgICAgICBlbXBvcGFjaXR5PSIwLjQiCiAgICAgICBlbXBzcGFjaW5nPSI1IgogICAgICAgdmlzaWJsZT0idHJ1ZSIKICAgICAgIGVuYWJsZWQ9InRydWUiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gNzksMjUgQyA5MS44LDI1IDk1LDI1IDk1LDI1IgogICAgICAgaWQ9InBhdGgzMDU5IgogICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDMxLDE1IDUsMTUiCiAgICAgICBpZD0icGF0aDMwNjEiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS45OTk5OTk4ODtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAzMiwzNSA1LDM1IgogICAgICAgaWQ9InBhdGgzOTQ0IiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmb250LXNpemU6bWVkaXVtO2ZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc3RyZXRjaDpub3JtYWw7dGV4dC1pbmRlbnQ6MDt0ZXh0LWFsaWduOnN0YXJ0O3RleHQtZGVjb3JhdGlvbjpub25lO2xpbmUtaGVpZ2h0Om5vcm1hbDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2RpcmVjdGlvbjpsdHI7YmxvY2stcHJvZ3Jlc3Npb246dGI7d3JpdGluZy1tb2RlOmxyLXRiO3RleHQtYW5jaG9yOnN0YXJ0O2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MzttYXJrZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7ZGlzcGxheTppbmxpbmU7b3ZlcmZsb3c6dmlzaWJsZTtlbmFibGUtYmFja2dyb3VuZDphY2N1bXVsYXRlO2ZvbnQtZmFtaWx5OkJpdHN0cmVhbSBWZXJhIFNhbnM7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpCaXRzdHJlYW0gVmVyYSBTYW5zIgogICAgICAgZD0iTSAzMCw1IEwgMzAsNi40Mjg1NzE0IEwgMzAsNDMuNTcxNDI5IEwgMzAsNDUgTCAzMS40Mjg1NzEsNDUgTCA1MC40NzYxOSw0NSBDIDYxLjc0NDA5OCw0NSA3MC40NzYxOSwzNS45OTk5NTUgNzAuNDc2MTksMjUgQyA3MC40NzYxOSwxNC4wMDAwNDUgNjEuNzQ0MDk5LDUuMDAwMDAwMiA1MC40NzYxOSw1IEMgNTAuNDc2MTksNSA1MC40NzYxOSw1IDMxLjQyODU3MSw1IEwgMzAsNSB6IE0gMzIuODU3MTQzLDcuODU3MTQyOSBDIDQwLjgzNDI2NCw3Ljg1NzE0MjkgNDUuOTE4MzY4LDcuODU3MTQyOSA0OC4wOTUyMzgsNy44NTcxNDI5IEMgNDkuMjg1NzE0LDcuODU3MTQyOSA0OS44ODA5NTIsNy44NTcxNDI5IDUwLjE3ODU3MSw3Ljg1NzE0MjkgQyA1MC4zMjczODEsNy44NTcxNDI5IDUwLjQwOTIyNyw3Ljg1NzE0MjkgNTAuNDQ2NDI5LDcuODU3MTQyOSBDIDUwLjQ2NTAyOSw3Ljg1NzE0MjkgNTAuNDcxNTQzLDcuODU3MTQyOSA1MC40NzYxOSw3Ljg1NzE0MjkgQyA2MC4yMzY4NTMsNy44NTcxNDMgNjcuMTQyODU3LDE1LjQ5NzA5OCA2Ny4xNDI4NTcsMjUgQyA2Ny4xNDI4NTcsMzQuNTAyOTAyIDU5Ljc2MDY2Miw0Mi4xNDI4NTcgNTAsNDIuMTQyODU3IEwgMzIuODU3MTQzLDQyLjE0Mjg1NyBMIDMyLjg1NzE0Myw3Ljg1NzE0MjkgeiIKICAgICAgIGlkPSJwYXRoMjg4NCIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2Njc2NjY2Nzc3Nzc2NjYyIgLz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTp0eXBlPSJhcmMiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lam9pbjptaXRlcjttYXJrZXI6bm9uZTtzdHJva2Utb3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBpZD0icGF0aDQwMDgiCiAgICAgICBzb2RpcG9kaTpjeD0iNzUiCiAgICAgICBzb2RpcG9kaTpjeT0iMjUiCiAgICAgICBzb2RpcG9kaTpyeD0iNCIKICAgICAgIHNvZGlwb2RpOnJ5PSI0IgogICAgICAgZD0iTSA3OSwyNSBBIDQsNCAwIDEgMSA3MSwyNSBBIDQsNCAwIDEgMSA3OSwyNSB6IiAvPgogIDwvZz4KPC9zdmc+Cg=="
      }
    }
  }, {
    operation: function(a, b) {
      return !(a && b)
    }
  }), joint.shapes.logic.Gate21.define("logic.Xor", {
    attrs: {
      image: {
        "xlink:href": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9IlhPUiBBTlNJLnN2ZyIKICAgaW5rc2NhcGU6b3V0cHV0X2V4dGVuc2lvbj0ib3JnLmlua3NjYXBlLm91dHB1dC5zdmcuaW5rc2NhcGUiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0Ij4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSI1MCA6IDE1IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIyNSA6IDEwIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3MTQiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEgOiAwLjUgOiAxIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjAuNSA6IDAuMzMzMzMzMzMgOiAxIgogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgwNiIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjgxOSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzNzIuMDQ3MjQgOiAzNTAuNzg3MzkgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNzQ0LjA5NDQ4IDogNTI2LjE4MTA5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MjYuMTgxMDkgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMjc3NyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI3NSA6IDQwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjE1MCA6IDYwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA2MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUzMjc1IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjUwIDogMzMuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjEwMCA6IDUwIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiA1MCA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmU1NTMzIgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjMyIDogMjEuMzMzMzMzIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjY0IDogMzIgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDMyIDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI1NTciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxNi42NjY2NjcgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAyNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMjUgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICA8L2RlZnM+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjUuNjU2ODU0MiIKICAgICBpbmtzY2FwZTpjeD0iMjUuOTM4MTE2IgogICAgIGlua3NjYXBlOmN5PSIxNy4yMzAwNSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpncmlkLXBvaW50cz0idHJ1ZSIKICAgICBncmlkdG9sZXJhbmNlPSIxMDAwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzOTkiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODc0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIzMyIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIGlkPSJHcmlkRnJvbVByZTA0NlNldHRpbmdzIgogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgb3JpZ2lueD0iMHB4IgogICAgICAgb3JpZ2lueT0iMHB4IgogICAgICAgc3BhY2luZ3g9IjFweCIKICAgICAgIHNwYWNpbmd5PSIxcHgiCiAgICAgICBjb2xvcj0iIzAwMDBmZiIKICAgICAgIGVtcGNvbG9yPSIjMDAwMGZmIgogICAgICAgb3BhY2l0eT0iMC4yIgogICAgICAgZW1wb3BhY2l0eT0iMC40IgogICAgICAgZW1wc3BhY2luZz0iNSIKICAgICAgIHZpc2libGU9InRydWUiCiAgICAgICBlbmFibGVkPSJ0cnVlIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDcwLDI1IGMgMjAsMCAyNSwwIDI1LDAiCiAgICAgICBpZD0icGF0aDMwNTkiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5ODg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMzAuMzg1NzE3LDE1IEwgNC45OTk5OTk4LDE1IgogICAgICAgaWQ9InBhdGgzMDYxIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuOTk5OTk5NzY7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMzEuMzYyMDkxLDM1IEwgNC45OTk5OTk4LDM1IgogICAgICAgaWQ9InBhdGgzOTQ0IiAvPgogICAgPGcKICAgICAgIGlkPSJnMjU2MCIKICAgICAgIGlua3NjYXBlOmxhYmVsPSJMYXllciAxIgogICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYuNSwtMzkuNSkiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDM1MTYiCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0iTSAtMi4yNSw4MS41MDAwMDUgQyAtMy44NDczNzQsODQuMTQ0NDA1IC00LjUsODQuNTAwMDA1IC00LjUsODQuNTAwMDA1IEwgLTguMTU2MjUsODQuNTAwMDA1IEwgLTYuMTU2MjUsODIuMDYyNTA1IEMgLTYuMTU2MjUsODIuMDYyNTA1IC0wLjUsNzUuMDYyNDUxIC0wLjUsNjQuNSBDIC0wLjUsNTMuOTM3NTQ5IC02LjE1NjI1LDQ2LjkzNzUgLTYuMTU2MjUsNDYuOTM3NSBMIC04LjE1NjI1LDQ0LjUgTCAtNC41LDQ0LjUgQyAtMy43MTg3NSw0NS40Mzc1IC0zLjA3ODEyNSw0Ni4xNTYyNSAtMi4yODEyNSw0Ny41IEMgLTAuNDA4NTMxLDUwLjU5OTgxNSAyLjUsNTYuNTI2NjQ2IDIuNSw2NC41IEMgMi41LDcyLjQ1MDY1IC0wLjM5NjY5Nyw3OC4zNzk0MjUgLTIuMjUsODEuNTAwMDA1IHoiCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY3NjY2Njc2MiIC8+CiAgICAgIDxwYXRoCiAgICAgICAgIHN0eWxlPSJmaWxsOiMwMDAwMDA7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0iTSAtMi40MDYyNSw0NC41IEwgLTAuNDA2MjUsNDYuOTM3NSBDIC0wLjQwNjI1LDQ2LjkzNzUgNS4yNSw1My45Mzc1NDkgNS4yNSw2NC41IEMgNS4yNSw3NS4wNjI0NTEgLTAuNDA2MjUsODIuMDYyNSAtMC40MDYyNSw4Mi4wNjI1IEwgLTIuNDA2MjUsODQuNSBMIDAuNzUsODQuNSBMIDE0Ljc1LDg0LjUgQyAxNy4xNTgwNzYsODQuNTAwMDAxIDIyLjQzOTY5OSw4NC41MjQ1MTQgMjguMzc1LDgyLjA5Mzc1IEMgMzQuMzEwMzAxLDc5LjY2Mjk4NiA0MC45MTE1MzYsNzQuNzUwNDg0IDQ2LjA2MjUsNjUuMjE4NzUgTCA0NC43NSw2NC41IEwgNDYuMDYyNSw2My43ODEyNSBDIDM1Ljc1OTM4Nyw0NC43MTU1OSAxOS41MDY1NzQsNDQuNSAxNC43NSw0NC41IEwgMC43NSw0NC41IEwgLTIuNDA2MjUsNDQuNSB6IE0gMy40Njg3NSw0Ny41IEwgMTQuNzUsNDcuNSBDIDE5LjQzNDE3Myw0Ny41IDMzLjAzNjg1LDQ3LjM2OTc5MyA0Mi43MTg3NSw2NC41IEMgMzcuOTUxOTY0LDcyLjkyOTA3NSAzMi4xOTc0NjksNzcuMTgzOTEgMjcsNzkuMzEyNSBDIDIxLjYzOTMzOSw4MS41MDc5MjQgMTcuMTU4MDc1LDgxLjUwMDAwMSAxNC43NSw4MS41IEwgMy41LDgxLjUgQyA1LjM3MzU4ODQsNzguMzkxNTY2IDguMjUsNzIuNDUwNjUgOC4yNSw2NC41IEMgOC4yNSw1Ni41MjY2NDYgNS4zNDE0Njg2LDUwLjU5OTgxNSAzLjQ2ODc1LDQ3LjUgeiIKICAgICAgICAgaWQ9InBhdGg0OTczIgogICAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjc2NjY2NzY2NjY2NjY2Njc2Njc2MiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K"
      }
    }
  }, {
    operation: function(a, b) {
      return (!a || b) && (a || !b)
    }
  }), joint.shapes.logic.Gate21.define("logic.Xnor", {
    attrs: {
      image: {
        "xlink:href": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSIxMDAiCiAgIGhlaWdodD0iNTAiCiAgIGlkPSJzdmcyIgogICBzb2RpcG9kaTp2ZXJzaW9uPSIwLjMyIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjQ2IgogICB2ZXJzaW9uPSIxLjAiCiAgIHNvZGlwb2RpOmRvY25hbWU9IlhOT1IgQU5TSS5zdmciCiAgIGlua3NjYXBlOm91dHB1dF9leHRlbnNpb249Im9yZy5pbmtzY2FwZS5vdXRwdXQuc3ZnLmlua3NjYXBlIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNCI+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogMTUgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfej0iNTAgOiAxNSA6IDEiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMjUgOiAxMCA6IDEiCiAgICAgICBpZD0icGVyc3BlY3RpdmUyNzE0IiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDAuNSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxIDogMC41IDogMSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIwLjUgOiAwLjMzMzMzMzMzIDogMSIKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI4MDYiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI4MTkiCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iMzcyLjA0NzI0IDogMzUwLjc4NzM5IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9Ijc0NC4wOTQ0OCA6IDUyNi4xODEwOSA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNTI2LjE4MTA5IDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgICA8aW5rc2NhcGU6cGVyc3BlY3RpdmUKICAgICAgIGlkPSJwZXJzcGVjdGl2ZTI3NzciCiAgICAgICBpbmtzY2FwZTpwZXJzcDNkLW9yaWdpbj0iNzUgOiA0MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxNTAgOiA2MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNjAgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlMzI3NSIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSI1MCA6IDMzLjMzMzMzMyA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSIxMDAgOiA1MCA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF95PSIwIDogMTAwMCA6IDAiCiAgICAgICBpbmtzY2FwZTp2cF94PSIwIDogNTAgOiAxIgogICAgICAgc29kaXBvZGk6dHlwZT0iaW5rc2NhcGU6cGVyc3AzZCIgLz4KICAgIDxpbmtzY2FwZTpwZXJzcGVjdGl2ZQogICAgICAgaWQ9InBlcnNwZWN0aXZlNTUzMyIKICAgICAgIGlua3NjYXBlOnBlcnNwM2Qtb3JpZ2luPSIzMiA6IDIxLjMzMzMzMyA6IDEiCiAgICAgICBpbmtzY2FwZTp2cF96PSI2NCA6IDMyIDogMSIKICAgICAgIGlua3NjYXBlOnZwX3k9IjAgOiAxMDAwIDogMCIKICAgICAgIGlua3NjYXBlOnZwX3g9IjAgOiAzMiA6IDEiCiAgICAgICBzb2RpcG9kaTp0eXBlPSJpbmtzY2FwZTpwZXJzcDNkIiAvPgogICAgPGlua3NjYXBlOnBlcnNwZWN0aXZlCiAgICAgICBpZD0icGVyc3BlY3RpdmUyNTU3IgogICAgICAgaW5rc2NhcGU6cGVyc3AzZC1vcmlnaW49IjI1IDogMTYuNjY2NjY3IDogMSIKICAgICAgIGlua3NjYXBlOnZwX3o9IjUwIDogMjUgOiAxIgogICAgICAgaW5rc2NhcGU6dnBfeT0iMCA6IDEwMDAgOiAwIgogICAgICAgaW5rc2NhcGU6dnBfeD0iMCA6IDI1IDogMSIKICAgICAgIHNvZGlwb2RpOnR5cGU9Imlua3NjYXBlOnBlcnNwM2QiIC8+CiAgPC9kZWZzPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0iYmFzZSIKICAgICBwYWdlY29sb3I9IiNmZmZmZmYiCiAgICAgYm9yZGVyY29sb3I9IiM2NjY2NjYiCiAgICAgYm9yZGVyb3BhY2l0eT0iMS4wIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp6b29tPSI0IgogICAgIGlua3NjYXBlOmN4PSI5NS43MjM2NiIKICAgICBpbmtzY2FwZTpjeT0iLTI2Ljc3NTAyMyIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTpncmlkLXBvaW50cz0idHJ1ZSIKICAgICBncmlkdG9sZXJhbmNlPSIxMDAwMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEzOTkiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iODc0IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIzMyIKICAgICBpbmtzY2FwZTp3aW5kb3cteT0iMCIKICAgICBpbmtzY2FwZTpzbmFwLWJib3g9InRydWUiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIGlkPSJHcmlkRnJvbVByZTA0NlNldHRpbmdzIgogICAgICAgdHlwZT0ieHlncmlkIgogICAgICAgb3JpZ2lueD0iMHB4IgogICAgICAgb3JpZ2lueT0iMHB4IgogICAgICAgc3BhY2luZ3g9IjFweCIKICAgICAgIHNwYWNpbmd5PSIxcHgiCiAgICAgICBjb2xvcj0iIzAwMDBmZiIKICAgICAgIGVtcGNvbG9yPSIjMDAwMGZmIgogICAgICAgb3BhY2l0eT0iMC4yIgogICAgICAgZW1wb3BhY2l0eT0iMC40IgogICAgICAgZW1wc3BhY2luZz0iNSIKICAgICAgIHZpc2libGU9InRydWUiCiAgICAgICBlbmFibGVkPSJ0cnVlIiAvPgogIDwvc29kaXBvZGk6bmFtZWR2aWV3PgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTciPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyLjAwMDAwMDI0O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDc4LjMzMzMzMiwyNSBDIDkxLjY2NjY2NiwyNSA5NSwyNSA5NSwyNSIKICAgICAgIGlkPSJwYXRoMzA1OSIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS45OTk5OTk4ODtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAzMC4zODU3MTcsMTUgTCA0Ljk5OTk5OTgsMTUiCiAgICAgICBpZD0icGF0aDMwNjEiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS45OTk5OTk3NjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0iTSAzMS4zNjIwOTEsMzUgTCA0Ljk5OTk5OTgsMzUiCiAgICAgICBpZD0icGF0aDM5NDQiIC8+CiAgICA8ZwogICAgICAgaWQ9ImcyNTYwIgogICAgICAgaW5rc2NhcGU6bGFiZWw9IkxheWVyIDEiCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi41LC0zOS41KSI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoMzUxNiIKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICBkPSJNIC0yLjI1LDgxLjUwMDAwNSBDIC0zLjg0NzM3NCw4NC4xNDQ0MDUgLTQuNSw4NC41MDAwMDUgLTQuNSw4NC41MDAwMDUgTCAtOC4xNTYyNSw4NC41MDAwMDUgTCAtNi4xNTYyNSw4Mi4wNjI1MDUgQyAtNi4xNTYyNSw4Mi4wNjI1MDUgLTAuNSw3NS4wNjI0NTEgLTAuNSw2NC41IEMgLTAuNSw1My45Mzc1NDkgLTYuMTU2MjUsNDYuOTM3NSAtNi4xNTYyNSw0Ni45Mzc1IEwgLTguMTU2MjUsNDQuNSBMIC00LjUsNDQuNSBDIC0zLjcxODc1LDQ1LjQzNzUgLTMuMDc4MTI1LDQ2LjE1NjI1IC0yLjI4MTI1LDQ3LjUgQyAtMC40MDg1MzEsNTAuNTk5ODE1IDIuNSw1Ni41MjY2NDYgMi41LDY0LjUgQyAyLjUsNzIuNDUwNjUgLTAuMzk2Njk3LDc4LjM3OTQyNSAtMi4yNSw4MS41MDAwMDUgeiIKICAgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2Njc2NjY2NzYyIgLz4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2Utb3BhY2l0eToxIgogICAgICAgICBkPSJNIC0yLjQwNjI1LDQ0LjUgTCAtMC40MDYyNSw0Ni45Mzc1IEMgLTAuNDA2MjUsNDYuOTM3NSA1LjI1LDUzLjkzNzU0OSA1LjI1LDY0LjUgQyA1LjI1LDc1LjA2MjQ1MSAtMC40MDYyNSw4Mi4wNjI1IC0wLjQwNjI1LDgyLjA2MjUgTCAtMi40MDYyNSw4NC41IEwgMC43NSw4NC41IEwgMTQuNzUsODQuNSBDIDE3LjE1ODA3Niw4NC41MDAwMDEgMjIuNDM5Njk5LDg0LjUyNDUxNCAyOC4zNzUsODIuMDkzNzUgQyAzNC4zMTAzMDEsNzkuNjYyOTg2IDQwLjkxMTUzNiw3NC43NTA0ODQgNDYuMDYyNSw2NS4yMTg3NSBMIDQ0Ljc1LDY0LjUgTCA0Ni4wNjI1LDYzLjc4MTI1IEMgMzUuNzU5Mzg3LDQ0LjcxNTU5IDE5LjUwNjU3NCw0NC41IDE0Ljc1LDQ0LjUgTCAwLjc1LDQ0LjUgTCAtMi40MDYyNSw0NC41IHogTSAzLjQ2ODc1LDQ3LjUgTCAxNC43NSw0Ny41IEMgMTkuNDM0MTczLDQ3LjUgMzMuMDM2ODUsNDcuMzY5NzkzIDQyLjcxODc1LDY0LjUgQyAzNy45NTE5NjQsNzIuOTI5MDc1IDMyLjE5NzQ2OSw3Ny4xODM5MSAyNyw3OS4zMTI1IEMgMjEuNjM5MzM5LDgxLjUwNzkyNCAxNy4xNTgwNzUsODEuNTAwMDAxIDE0Ljc1LDgxLjUgTCAzLjUsODEuNSBDIDUuMzczNTg4NCw3OC4zOTE1NjYgOC4yNSw3Mi40NTA2NSA4LjI1LDY0LjUgQyA4LjI1LDU2LjUyNjY0NiA1LjM0MTQ2ODYsNTAuNTk5ODE1IDMuNDY4NzUsNDcuNSB6IgogICAgICAgICBpZD0icGF0aDQ5NzMiCiAgICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NzY2NjY3NjY2NjY2NjY2NzY2NzYyIgLz4KICAgIDwvZz4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTp0eXBlPSJhcmMiCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lam9pbjptaXRlcjttYXJrZXI6bm9uZTtzdHJva2Utb3BhY2l0eToxO3Zpc2liaWxpdHk6dmlzaWJsZTtkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO2VuYWJsZS1iYWNrZ3JvdW5kOmFjY3VtdWxhdGUiCiAgICAgICBpZD0icGF0aDM1NTEiCiAgICAgICBzb2RpcG9kaTpjeD0iNzUiCiAgICAgICBzb2RpcG9kaTpjeT0iMjUiCiAgICAgICBzb2RpcG9kaTpyeD0iNCIKICAgICAgIHNvZGlwb2RpOnJ5PSI0IgogICAgICAgZD0iTSA3OSwyNSBBIDQsNCAwIDEgMSA3MSwyNSBBIDQsNCAwIDEgMSA3OSwyNSB6IiAvPgogIDwvZz4KPC9zdmc+Cg=="
      }
    }
  }, {
    operation: function(a, b) {
      return (!a || !b) && (a || b)
    }
  }), joint.dia.Link.define("logic.Wire", {
    attrs: {
      ".connection": {
        "stroke-width": 2
      },
      ".marker-vertex": {
        r: 7
      }
    },
    router: {
      name: "orthogonal"
    },
    connector: {
      name: "rounded",
      args: {
        radius: 10
      }
    }
  }, {
    arrowheadMarkup: ['<g class="marker-arrowhead-group marker-arrowhead-group-<%= end %>">', '<circle class="marker-arrowhead" end="<%= end %>" r="7"/>', "</g>"].join(""),
    vertexMarkup: ['<g class="marker-vertex-group" transform="translate(<%= x %>, <%= y %>)">', '<circle class="marker-vertex" idx="<%= idx %>" r="10" />', '<g class="marker-vertex-remove-group">', '<path class="marker-vertex-remove-area" idx="<%= idx %>" d="M16,5.333c-7.732,0-14,4.701-14,10.5c0,1.982,0.741,3.833,2.016,5.414L2,25.667l5.613-1.441c2.339,1.317,5.237,2.107,8.387,2.107c7.732,0,14-4.701,14-10.5C30,10.034,23.732,5.333,16,5.333z" transform="translate(5, -33)"/>', '<path class="marker-vertex-remove" idx="<%= idx %>" transform="scale(.8) translate(9.5, -37)" d="M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z">', "<title>Remove vertex.</title>", "</path>", "</g>", "</g>"].join("")
  });
  if ("object" == typeof exports) var graphlib = require("graphlib"),
    dagre = require("dagre");
  graphlib = graphlib || "undefined" != typeof window && window.graphlib, dagre = dagre || "undefined" != typeof window && window.dagre, joint.layout.DirectedGraph = {
    exportElement: function(a) {
      return a.size()
    },
    exportLink: function(a) {
      var b = a.get("labelSize") || {},
        c = {
          minLen: a.get("minLen") || 1,
          weight: a.get("weight") || 1,
          labelpos: a.get("labelPosition") || "c",
          labeloffset: a.get("labelOffset") || 0,
          width: b.width || 0,
          height: b.height || 0
        };
      return c
    },
    importElement: function(a, b, c) {
      var d = this.getCell(b),
        e = c.node(b);
      a.setPosition ? a.setPosition(d, e) : d.set("position", {
        x: e.x - e.width / 2,
        y: e.y - e.height / 2
      })
    },
    importLink: function(a, b, c) {
      var d = this.getCell(b.name),
        e = c.edge(b),
        f = e.points || [];
      if ((a.setVertices || a.setLinkVertices) && (joint.util.isFunction(a.setVertices) ? a.setVertices(d, f) : d.set("vertices", f.slice(1, f.length - 1))), a.setLabels && "x" in e && "y" in e) {
        var h = {
          x: e.x,
          y: e.y
        };
        if (joint.util.isFunction(a.setLabels)) a.setLabels(d, h, f);
        else {
          var i = g.Polyline(f),
            j = i.closestPointLength(h),
            k = i.pointAtLength(j),
            l = j / i.length();
          d.label(0, {
            position: {
              distance: l,
              offset: g.Point(h).difference(k).toJSON()
            }
          })
        }
      }
    },
    layout: function(a, b) {
      var c;
      c = a instanceof joint.dia.Graph ? a : (new joint.dia.Graph).resetCells(a, {
        dry: !0
      }), a = null, b = joint.util.defaults(b || {}, {
        resizeClusters: !0,
        clusterPadding: 10,
        exportElement: this.exportElement,
        exportLink: this.exportLink
      });
      var d = c.toGraphLib({
          directed: !0,
          multigraph: !0,
          compound: !0,
          setNodeLabel: b.exportElement,
          setEdgeLabel: b.exportLink,
          setEdgeName: function(a) {
            return a.id
          }
        }),
        e = {},
        f = b.marginX || 0,
        h = b.marginY || 0;
      if (b.rankDir && (e.rankdir = b.rankDir), b.align && (e.align = b.align), b.nodeSep && (e.nodesep = b.nodeSep), b.edgeSep && (e.edgesep = b.edgeSep), b.rankSep && (e.ranksep = b.rankSep), b.ranker && (e.ranker = b.ranker), f && (e.marginx = f), h && (e.marginy = h), d.setGraph(e), dagre.layout(d, {
          debugTiming: !! b.debugTiming
        }), c.startBatch("layout"), c.fromGraphLib(d, {
          importNode: this.importElement.bind(c, b),
          importEdge: this.importLink.bind(c, b)
        }), b.resizeClusters) {
        var i = d.nodes().filter(function(a) {
          return d.children(a).length > 0
        }).map(c.getCell.bind(c)).sort(function(a, b) {
          return b.getAncestors().length - a.getAncestors().length
        });
        joint.util.invoke(i, "fitEmbeds", {
          padding: b.clusterPadding
        })
      }
      c.stopBatch("layout");
      var j = d.graph();
      return g.Rect(f, h, Math.abs(j.width - 2 * f), Math.abs(j.height - 2 * h))
    },
    fromGraphLib: function(a, b) {
      b = b || {};
      var c = b.importNode || joint.util.noop,
        d = b.importEdge || joint.util.noop,
        e = this instanceof joint.dia.Graph ? this : new joint.dia.Graph;
      return a.nodes().forEach(function(d) {
        c.call(e, d, a, e, b)
      }), a.edges().forEach(function(c) {
        d.call(e, c, a, e, b)
      }), e
    },
    toGraphLib: function(a, b) {
      b = b || {};
      for (var c = joint.util.pick(b, "directed", "compound", "multigraph"), d = new graphlib.Graph(c), e = b.setNodeLabel || joint.util.noop, f = b.setEdgeLabel || joint.util.noop, g = b.setEdgeName || joint.util.noop, h = a.get("cells"), i = 0, j = h.length; i < j; i++) {
        var k = h.at(i);
        if (k.isLink()) {
          var l = k.get("source"),
            m = k.get("target");
          if (!l.id || !m.id) break;
          d.setEdge(l.id, m.id, f(k), g(k))
        } else if (d.setNode(k.id, e(k)), d.isCompound() && k.has("parent")) {
          var n = k.get("parent");
          h.has(n) && d.setParent(k.id, n)
        }
      }
      return d
    }
  }, joint.dia.Graph.prototype.toGraphLib = function(a) {
    return joint.layout.DirectedGraph.toGraphLib(this, a)
  }, joint.dia.Graph.prototype.fromGraphLib = function(a, b) {
    return joint.layout.DirectedGraph.fromGraphLib.call(this, a, b)
  };
  "undefined" != typeof SVGPathElement && (SVGPathElement.prototype.normalizePath = function() {
    function a(a, b, c, d, e, f) {
      var g = 1 / 3,
        h = 2 / 3;
      return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
    }
    function b(a, c, d, e, f, g, h, i, j, k) {
      var l, m = 120 * Math.PI / 180,
        n = Math.PI / 180 * (+f || 0),
        o = [],
        p = function(a, b, c) {
          var d = a * Math.cos(c) - b * Math.sin(c),
            e = a * Math.sin(c) + b * Math.cos(c);
          return {
            x: d,
            y: e
          }
        };
      if (k) y = k[0], z = k[1], w = k[2], x = k[3];
      else {
        l = p(a, c, -n), a = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
        var q = (Math.cos(Math.PI / 180 * f), Math.sin(Math.PI / 180 * f), (a - i) / 2),
          r = (c - j) / 2,
          s = q * q / (d * d) + r * r / (e * e);
        s > 1 && (s = Math.sqrt(s), d = s * d, e = s * e);
        var t = d * d,
          u = e * e,
          v = (g == h ? -1 : 1) * Math.sqrt(Math.abs((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))),
          w = v * d * r / e + (a + i) / 2,
          x = v * -e * q / d + (c + j) / 2,
          y = Math.asin(((c - x) / e).toFixed(9)),
          z = Math.asin(((j - x) / e).toFixed(9));
        y = a < w ? Math.PI - y : y, z = i < w ? Math.PI - z : z, y < 0 && (y = 2 * Math.PI + y), z < 0 && (z = 2 * Math.PI + z), h && y > z && (y -= 2 * Math.PI), !h && z > y && (z -= 2 * Math.PI)
      }
      var A = z - y;
      if (Math.abs(A) > m) {
        var B = z,
          C = i,
          D = j;
        z = y + m * (h && z > y ? 1 : -1), i = w + d * Math.cos(z), j = x + e * Math.sin(z), o = b(i, j, d, e, f, 0, h, C, D, [z, B, w, x])
      }
      A = z - y;
      var E = Math.cos(y),
        F = Math.sin(y),
        G = Math.cos(z),
        H = Math.sin(z),
        I = Math.tan(A / 4),
        J = 4 / 3 * d * I,
        K = 4 / 3 * e * I,
        L = [a, c],
        M = [a + J * F, c - K * E],
        N = [i + J * H, j - K * G],
        O = [i, j];
      if (M[0] = 2 * L[0] - M[0], M[1] = 2 * L[1] - M[1], k) return [M, N, O].concat(o);
      o = [M, N, O].concat(o).join().split(",");
      for (var P = [], Q = 0, R = o.length; Q < R; Q++) P[Q] = Q % 2 ? p(o[Q - 1], o[Q], n).y : p(o[Q], o[Q + 1], n).x;
      return P
    }
    function c(a) {
      if (!a) return null;
      var b = {
          a: 7,
          c: 6,
          h: 1,
          l: 2,
          m: 2,
          q: 4,
          s: 4,
          t: 2,
          v: 1,
          z: 0
        },
        c = [];
      return String(a).replace(g, function(a, d, e) {
        var f = [],
          g = d.toLowerCase();
        for (e.replace(h, function(a, b) {
          b && f.push(+b)
        }), "m" == g && f.length > 2 && (c.push([d].concat(f.splice(0, 2))), g = "l", d = "m" == d ? "l" : "L"); f.length >= b[g] && (c.push([d].concat(f.splice(0, b[g]))), b[g]);)
          }), c
    }
    function d(a) {
      if (_.isArray(a) && _.isArray(a && a[0]) || (a = c(a)), !a || !a.length) return [["M", 0, 0]];
      var b, d = [],
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        i = 0;
      "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], g = e, h = f, i++, d[0] = ["M", e, f]);
      for (var j, k, l = i, m = a.length; l < m; l++) {
        if (d.push(j = []), k = a[l], b = k[0], b != b.toUpperCase()) switch (j[0] = b.toUpperCase(), j[0]) {
          case "A":
            j[1] = k[1], j[2] = k[2], j[3] = k[3], j[4] = k[4], j[5] = k[5], j[6] = +k[6] + e, j[7] = +k[7] + f;
            break;
          case "V":
            j[1] = +k[1] + f;
            break;
          case "H":
            j[1] = +k[1] + e;
            break;
          case "M":
            g = +k[1] + e, h = +k[2] + f;
          default:
            for (var n = 1, o = k.length; n < o; n++) j[n] = +k[n] + (n % 2 ? e : f)
        } else for (var p = 0, q = k.length; p < q; p++) j[p] = k[p];
        switch (j[0]) {
          case "Z":
            e = +g, f = +h;
            break;
          case "H":
            e = j[1];
            break;
          case "V":
            f = j[1];
            break;
          case "M":
            g = j[j.length - 2], h = j[j.length - 1];
          default:
            e = j[j.length - 2], f = j[j.length - 1]
        }
      }
      return d
    }
    function e(c) {
      function e(c, d, e) {
        var f, g;
        if (!c) return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
        switch (!(c[0] in {
          T: 1,
          Q: 1
        }) && (d.qx = d.qy = null), c[0]) {
          case "M":
            d.X = c[1], d.Y = c[2];
            break;
          case "A":
            c = ["C"].concat(b.apply(0, [d.x, d.y].concat(c.slice(1))));
            break;
          case "S":
            "C" == e || "S" == e ? (f = 2 * d.x - d.bx, g = 2 * d.y - d.by) : (f = d.x, g = d.y), c = ["C", f, g].concat(c.slice(1));
            break;
          case "T":
            "Q" == e || "T" == e ? (d.qx = 2 * d.x - d.qx, d.qy = 2 * d.y - d.qy) : (d.qx = d.x, d.qy = d.y), c = ["C"].concat(a(d.x, d.y, d.qx, d.qy, c[1], c[2]));
            break;
          case "Q":
            d.qx = c[1], d.qy = c[2], c = ["C"].concat(a(d.x, d.y, c[1], c[2], c[3], c[4]));
            break;
          case "H":
            c = ["L"].concat(c[1], d.y);
            break;
          case "V":
            c = ["L"].concat(d.x, c[1]);
            break;
          case "L":
          case "Z":
        }
        return c
      }
      function f(a, b) {
        if (a[b].length > 7) {
          a[b].shift();
          for (var c = a[b]; c.length;) i[b] = "A", a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
          a.splice(b, 1), m = g.length
        }
      }
      for (var g = d(c), h = {
        x: 0,
        y: 0,
        bx: 0,
        by: 0,
        X: 0,
        Y: 0,
        qx: null,
        qy: null
      }, i = [], j = "", k = "", l = 0, m = g.length; l < m; l++) {
        g[l] && (j = g[l][0]), "C" != j && (i[l] = j, l && (k = i[l - 1])), g[l] = e(g[l], h, k), "A" != i[l] && "C" == j && (i[l] = "C"), f(g, l);
        var n = g[l],
          o = n.length;
        h.x = n[o - 2], h.y = n[o - 1], h.bx = parseFloat(n[o - 4]) || h.x, h.by = parseFloat(n[o - 3]) || h.y
      }
      return g
    }
    var f = "\t\n\f\r   ᠎             　  ",
      g = new RegExp("([a-z])[" + f + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + f + "]*,?[" + f + "]*)+)", "ig"),
      h = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + f + "]*,?[" + f + "]*", "ig");
    return function() {
      var a = V(this);
      return a.attr("d", e(a.attr("d")).join(",").split(",").join(" ")).node
    }
  }()), function() {
    "use strict";
    "undefined" == typeof window || "SVGPathSeg" in window || (window.SVGPathSeg = function(a, b, c) {
      this.pathSegType = a, this.pathSegTypeAsLetter = b, this._owningPathSegList = c
    }, window.SVGPathSeg.prototype.classname = "SVGPathSeg", window.SVGPathSeg.PATHSEG_UNKNOWN = 0, window.SVGPathSeg.PATHSEG_CLOSEPATH = 1, window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2, window.SVGPathSeg.PATHSEG_MOVETO_REL = 3, window.SVGPathSeg.PATHSEG_LINETO_ABS = 4, window.SVGPathSeg.PATHSEG_LINETO_REL = 5, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9, window.SVGPathSeg.PATHSEG_ARC_ABS = 10, window.SVGPathSeg.PATHSEG_ARC_REL = 11, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19, window.SVGPathSeg.prototype._segmentChanged = function() {
      this._owningPathSegList && this._owningPathSegList.segmentChanged(this)
    }, window.SVGPathSegClosePath = function(a) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", a)
    }, window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegClosePath.prototype.toString = function() {
      return "[object SVGPathSegClosePath]"
    }, window.SVGPathSegClosePath.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter
    }, window.SVGPathSegClosePath.prototype.clone = function() {
      return new window.SVGPathSegClosePath((void 0))
    }, window.SVGPathSegMovetoAbs = function(a, b, c) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", a), this._x = b, this._y = c
    }, window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoAbs.prototype.toString = function() {
      return "[object SVGPathSegMovetoAbs]"
    }, window.SVGPathSegMovetoAbs.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegMovetoAbs.prototype.clone = function() {
      return new window.SVGPathSegMovetoAbs((void 0), this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegMovetoRel = function(a, b, c) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", a), this._x = b, this._y = c
    }, window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegMovetoRel.prototype.toString = function() {
      return "[object SVGPathSegMovetoRel]"
    }, window.SVGPathSegMovetoRel.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegMovetoRel.prototype.clone = function() {
      return new window.SVGPathSegMovetoRel((void 0), this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegLinetoAbs = function(a, b, c) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", a), this._x = b, this._y = c
    }, window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoAbs.prototype.toString = function() {
      return "[object SVGPathSegLinetoAbs]"
    }, window.SVGPathSegLinetoAbs.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegLinetoAbs.prototype.clone = function() {
      return new window.SVGPathSegLinetoAbs((void 0), this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegLinetoRel = function(a, b, c) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", a), this._x = b, this._y = c
    }, window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoRel.prototype.toString = function() {
      return "[object SVGPathSegLinetoRel]"
    }, window.SVGPathSegLinetoRel.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegLinetoRel.prototype.clone = function() {
      return new window.SVGPathSegLinetoRel((void 0), this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegCurvetoCubicAbs = function(a, b, c, d, e, f, g) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", a), this._x = b, this._y = c, this._x1 = d, this._y1 = e, this._x2 = f, this._y2 = g
    }, window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicAbs.prototype.toString = function() {
      return "[object SVGPathSegCurvetoCubicAbs]"
    }, window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoCubicAbs.prototype.clone = function() {
      return new window.SVGPathSegCurvetoCubicAbs((void 0), this._x, this._y, this._x1, this._y1, this._x2, this._y2)
    }, Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
      get: function() {
        return this._x1
      },
      set: function(a) {
        this._x1 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
      get: function() {
        return this._y1
      },
      set: function(a) {
        this._y1 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
      get: function() {
        return this._x2
      },
      set: function(a) {
        this._x2 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
      get: function() {
        return this._y2
      },
      set: function(a) {
        this._y2 = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegCurvetoCubicRel = function(a, b, c, d, e, f, g) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", a), this._x = b, this._y = c, this._x1 = d, this._y1 = e, this._x2 = f, this._y2 = g
    }, window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicRel.prototype.toString = function() {
      return "[object SVGPathSegCurvetoCubicRel]"
    }, window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoCubicRel.prototype.clone = function() {
      return new window.SVGPathSegCurvetoCubicRel((void 0), this._x, this._y, this._x1, this._y1, this._x2, this._y2)
    }, Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
      get: function() {
        return this._x1
      },
      set: function(a) {
        this._x1 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
      get: function() {
        return this._y1
      },
      set: function(a) {
        this._y1 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
      get: function() {
        return this._x2
      },
      set: function(a) {
        this._x2 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
      get: function() {
        return this._y2
      },
      set: function(a) {
        this._y2 = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegCurvetoQuadraticAbs = function(a, b, c, d, e) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", a), this._x = b, this._y = c, this._x1 = d, this._y1 = e
    }, window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function() {
      return "[object SVGPathSegCurvetoQuadraticAbs]"
    }, window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function() {
      return new window.SVGPathSegCurvetoQuadraticAbs((void 0), this._x, this._y, this._x1, this._y1)
    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
      get: function() {
        return this._x1
      },
      set: function(a) {
        this._x1 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
      get: function() {
        return this._y1
      },
      set: function(a) {
        this._y1 = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegCurvetoQuadraticRel = function(a, b, c, d, e) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", a), this._x = b, this._y = c, this._x1 = d, this._y1 = e
    }, window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function() {
      return "[object SVGPathSegCurvetoQuadraticRel]"
    }, window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function() {
      return new window.SVGPathSegCurvetoQuadraticRel((void 0), this._x, this._y, this._x1, this._y1)
    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
      get: function() {
        return this._x1
      },
      set: function(a) {
        this._x1 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
      get: function() {
        return this._y1
      },
      set: function(a) {
        this._y1 = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegArcAbs = function(a, b, c, d, e, f, g, h) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", a), this._x = b, this._y = c, this._r1 = d, this._r2 = e, this._angle = f, this._largeArcFlag = g, this._sweepFlag = h
    }, window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcAbs.prototype.toString = function() {
      return "[object SVGPathSegArcAbs]"
    }, window.SVGPathSegArcAbs.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
    }, window.SVGPathSegArcAbs.prototype.clone = function() {
      return new window.SVGPathSegArcAbs((void 0), this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
    }, Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
      get: function() {
        return this._r1
      },
      set: function(a) {
        this._r1 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
      get: function() {
        return this._r2
      },
      set: function(a) {
        this._r2 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
      get: function() {
        return this._angle
      },
      set: function(a) {
        this._angle = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
      get: function() {
        return this._largeArcFlag
      },
      set: function(a) {
        this._largeArcFlag = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
      get: function() {
        return this._sweepFlag
      },
      set: function(a) {
        this._sweepFlag = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegArcRel = function(a, b, c, d, e, f, g, h) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", a), this._x = b, this._y = c, this._r1 = d, this._r2 = e, this._angle = f, this._largeArcFlag = g, this._sweepFlag = h
    }, window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegArcRel.prototype.toString = function() {
      return "[object SVGPathSegArcRel]"
    }, window.SVGPathSegArcRel.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y
    }, window.SVGPathSegArcRel.prototype.clone = function() {
      return new window.SVGPathSegArcRel((void 0), this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag)
    }, Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
      get: function() {
        return this._r1
      },
      set: function(a) {
        this._r1 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
      get: function() {
        return this._r2
      },
      set: function(a) {
        this._r2 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
      get: function() {
        return this._angle
      },
      set: function(a) {
        this._angle = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
      get: function() {
        return this._largeArcFlag
      },
      set: function(a) {
        this._largeArcFlag = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
      get: function() {
        return this._sweepFlag
      },
      set: function(a) {
        this._sweepFlag = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegLinetoHorizontalAbs = function(a, b) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", a), this._x = b
    }, window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function() {
      return "[object SVGPathSegLinetoHorizontalAbs]"
    }, window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x
    }, window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function() {
      return new window.SVGPathSegLinetoHorizontalAbs((void 0), this._x)
    }, Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegLinetoHorizontalRel = function(a, b) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", a), this._x = b
    }, window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoHorizontalRel.prototype.toString = function() {
      return "[object SVGPathSegLinetoHorizontalRel]"
    }, window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x
    }, window.SVGPathSegLinetoHorizontalRel.prototype.clone = function() {
      return new window.SVGPathSegLinetoHorizontalRel((void 0), this._x)
    }, Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegLinetoVerticalAbs = function(a, b) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", a), this._y = b
    }, window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalAbs.prototype.toString = function() {
      return "[object SVGPathSegLinetoVerticalAbs]"
    }, window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._y
    }, window.SVGPathSegLinetoVerticalAbs.prototype.clone = function() {
      return new window.SVGPathSegLinetoVerticalAbs((void 0), this._y)
    }, Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegLinetoVerticalRel = function(a, b) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", a), this._y = b
    }, window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegLinetoVerticalRel.prototype.toString = function() {
      return "[object SVGPathSegLinetoVerticalRel]"
    }, window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._y
    }, window.SVGPathSegLinetoVerticalRel.prototype.clone = function() {
      return new window.SVGPathSegLinetoVerticalRel((void 0), this._y)
    }, Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegCurvetoCubicSmoothAbs = function(a, b, c, d, e) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", a), this._x = b, this._y = c, this._x2 = d, this._y2 = e
    }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function() {
      return "[object SVGPathSegCurvetoCubicSmoothAbs]"
    }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function() {
      return new window.SVGPathSegCurvetoCubicSmoothAbs((void 0), this._x, this._y, this._x2, this._y2)
    }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
      get: function() {
        return this._x2
      },
      set: function(a) {
        this._x2 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
      get: function() {
        return this._y2
      },
      set: function(a) {
        this._y2 = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegCurvetoCubicSmoothRel = function(a, b, c, d, e) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", a), this._x = b, this._y = c, this._x2 = d, this._y2 = e
    }, window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function() {
      return "[object SVGPathSegCurvetoCubicSmoothRel]"
    }, window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function() {
      return new window.SVGPathSegCurvetoCubicSmoothRel((void 0), this._x, this._y, this._x2, this._y2)
    }, Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
      get: function() {
        return this._x2
      },
      set: function(a) {
        this._x2 = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
      get: function() {
        return this._y2
      },
      set: function(a) {
        this._y2 = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegCurvetoQuadraticSmoothAbs = function(a, b, c) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", a), this._x = b, this._y = c
    }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function() {
      return "[object SVGPathSegCurvetoQuadraticSmoothAbs]"
    }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function() {
      return new window.SVGPathSegCurvetoQuadraticSmoothAbs((void 0), this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathSegCurvetoQuadraticSmoothRel = function(a, b, c) {
      window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", a), this._x = b, this._y = c
    }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype), window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function() {
      return "[object SVGPathSegCurvetoQuadraticSmoothRel]"
    }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function() {
      return this.pathSegTypeAsLetter + " " + this._x + " " + this._y
    }, window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function() {
      return new window.SVGPathSegCurvetoQuadraticSmoothRel((void 0), this._x, this._y)
    }, Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
      get: function() {
        return this._x
      },
      set: function(a) {
        this._x = a, this._segmentChanged()
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
      get: function() {
        return this._y
      },
      set: function(a) {
        this._y = a, this._segmentChanged()
      },
      enumerable: !0
    }), window.SVGPathElement.prototype.createSVGPathSegClosePath = function() {
      return new window.SVGPathSegClosePath((void 0))
    }, window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function(a, b) {
      return new window.SVGPathSegMovetoAbs((void 0), a, b)
    }, window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function(a, b) {
      return new window.SVGPathSegMovetoRel((void 0), a, b)
    }, window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function(a, b) {
      return new window.SVGPathSegLinetoAbs((void 0), a, b)
    }, window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function(a, b) {
      return new window.SVGPathSegLinetoRel((void 0), a, b)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function(a, b, c, d, e, f) {
      return new window.SVGPathSegCurvetoCubicAbs((void 0), a, b, c, d, e, f)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function(a, b, c, d, e, f) {
      return new window.SVGPathSegCurvetoCubicRel((void 0), a, b, c, d, e, f)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function(a, b, c, d) {
      return new window.SVGPathSegCurvetoQuadraticAbs((void 0), a, b, c, d)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function(a, b, c, d) {
      return new window.SVGPathSegCurvetoQuadraticRel((void 0), a, b, c, d)
    }, window.SVGPathElement.prototype.createSVGPathSegArcAbs = function(a, b, c, d, e, f, g) {
      return new window.SVGPathSegArcAbs((void 0), a, b, c, d, e, f, g)
    }, window.SVGPathElement.prototype.createSVGPathSegArcRel = function(a, b, c, d, e, f, g) {
      return new window.SVGPathSegArcRel((void 0), a, b, c, d, e, f, g)
    }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function(a) {
      return new window.SVGPathSegLinetoHorizontalAbs((void 0), a)
    }, window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function(a) {
      return new window.SVGPathSegLinetoHorizontalRel((void 0), a)
    }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function(a) {
      return new window.SVGPathSegLinetoVerticalAbs((void 0), a)
    }, window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function(a) {
      return new window.SVGPathSegLinetoVerticalRel((void 0), a)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function(a, b, c, d) {
      return new window.SVGPathSegCurvetoCubicSmoothAbs((void 0), a, b, c, d)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function(a, b, c, d) {
      return new window.SVGPathSegCurvetoCubicSmoothRel((void 0), a, b, c, d)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function(a, b) {
      return new window.SVGPathSegCurvetoQuadraticSmoothAbs((void 0), a, b)
    }, window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function(a, b) {
      return new window.SVGPathSegCurvetoQuadraticSmoothRel((void 0), a, b)
    }), "undefined" == typeof window || "SVGPathSegList" in window || (window.SVGPathSegList = function(a) {
      this._pathElement = a, this._list = this._parsePath(this._pathElement.getAttribute("d")), this._mutationObserverConfig = {
        attributes: !0,
        attributeFilter: ["d"]
      }, this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
    }, window.SVGPathSegList.prototype.classname = "SVGPathSegList", Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
      get: function() {
        return this._checkPathSynchronizedToList(), this._list.length
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
      get: function() {
        return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
      get: function() {
        return this.pathSegList
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
      get: function() {
        return this.pathSegList
      },
      enumerable: !0
    }), Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
      get: function() {
        return this.pathSegList
      },
      enumerable: !0
    }), window.SVGPathSegList.prototype._checkPathSynchronizedToList = function() {
      this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords())
    }, window.SVGPathSegList.prototype._updateListFromPathMutations = function(a) {
      if (this._pathElement) {
        var b = !1;
        a.forEach(function(a) {
          "d" == a.attributeName && (b = !0)
        }), b && (this._list = this._parsePath(this._pathElement.getAttribute("d")))
      }
    }, window.SVGPathSegList.prototype._writeListToPath = function() {
      this._pathElementMutationObserver.disconnect(), this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)), this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig)
    }, window.SVGPathSegList.prototype.segmentChanged = function(a) {
      this._writeListToPath()
    }, window.SVGPathSegList.prototype.clear = function() {
      this._checkPathSynchronizedToList(), this._list.forEach(function(a) {
        a._owningPathSegList = null
      }), this._list = [], this._writeListToPath()
    }, window.SVGPathSegList.prototype.initialize = function(a) {
      return this._checkPathSynchronizedToList(), this._list = [a], a._owningPathSegList = this, this._writeListToPath(), a
    }, window.SVGPathSegList.prototype._checkValidIndex = function(a) {
      if (isNaN(a) || a < 0 || a >= this.numberOfItems) throw "INDEX_SIZE_ERR"
    }, window.SVGPathSegList.prototype.getItem = function(a) {
      return this._checkPathSynchronizedToList(), this._checkValidIndex(a), this._list[a]
    }, window.SVGPathSegList.prototype.insertItemBefore = function(a, b) {
      return this._checkPathSynchronizedToList(), b > this.numberOfItems && (b = this.numberOfItems), a._owningPathSegList && (a = a.clone()), this._list.splice(b, 0, a), a._owningPathSegList = this, this._writeListToPath(), a
    }, window.SVGPathSegList.prototype.replaceItem = function(a, b) {
      return this._checkPathSynchronizedToList(), a._owningPathSegList && (a = a.clone()), this._checkValidIndex(b), this._list[b] = a, a._owningPathSegList = this, this._writeListToPath(), a
    }, window.SVGPathSegList.prototype.removeItem = function(a) {
      this._checkPathSynchronizedToList(), this._checkValidIndex(a);
      var b = this._list[a];
      return this._list.splice(a, 1), this._writeListToPath(), b
    }, window.SVGPathSegList.prototype.appendItem = function(a) {
      return this._checkPathSynchronizedToList(), a._owningPathSegList && (a = a.clone()), this._list.push(a), a._owningPathSegList = this, this._writeListToPath(), a
    }, window.SVGPathSegList._pathSegArrayAsString = function(a) {
      var b = "",
        c = !0;
      return a.forEach(function(a) {
        c ? (c = !1, b += a._asPathString()) : b += " " + a._asPathString()
      }), b
    }, window.SVGPathSegList.prototype._parsePath = function(a) {
      if (!a || 0 == a.length) return [];
      var b = this,
        c = function() {
          this.pathSegList = []
        };
      c.prototype.appendSegment = function(a) {
        this.pathSegList.push(a)
      };
      var d = function(a) {
        this._string = a, this._currentIndex = 0, this._endIndex = this._string.length, this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN, this._skipOptionalSpaces()
      };
      d.prototype._isCurrentSpace = function() {
        var a = this._string[this._currentIndex];
        return a <= " " && (" " == a || "\n" == a || "\t" == a || "\r" == a || "\f" == a)
      }, d.prototype._skipOptionalSpaces = function() {
        for (; this._currentIndex < this._endIndex && this._isCurrentSpace();) this._currentIndex++;
        return this._currentIndex < this._endIndex
      }, d.prototype._skipOptionalSpacesOrDelimiter = function() {
        return !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) && (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()), this._currentIndex < this._endIndex)
      }, d.prototype.hasMoreData = function() {
        return this._currentIndex < this._endIndex
      }, d.prototype.peekSegmentType = function() {
        var a = this._string[this._currentIndex];
        return this._pathSegTypeFromChar(a)
      }, d.prototype._pathSegTypeFromChar = function(a) {
        switch (a) {
          case "Z":
          case "z":
            return window.SVGPathSeg.PATHSEG_CLOSEPATH;
          case "M":
            return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
          case "m":
            return window.SVGPathSeg.PATHSEG_MOVETO_REL;
          case "L":
            return window.SVGPathSeg.PATHSEG_LINETO_ABS;
          case "l":
            return window.SVGPathSeg.PATHSEG_LINETO_REL;
          case "C":
            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
          case "c":
            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
          case "Q":
            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
          case "q":
            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
          case "A":
            return window.SVGPathSeg.PATHSEG_ARC_ABS;
          case "a":
            return window.SVGPathSeg.PATHSEG_ARC_REL;
          case "H":
            return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
          case "h":
            return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
          case "V":
            return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
          case "v":
            return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
          case "S":
            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
          case "s":
            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
          case "T":
            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
          case "t":
            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
          default:
            return window.SVGPathSeg.PATHSEG_UNKNOWN
        }
      }, d.prototype._nextCommandHelper = function(a, b) {
        return ("+" == a || "-" == a || "." == a || a >= "0" && a <= "9") && b != window.SVGPathSeg.PATHSEG_CLOSEPATH ? b == window.SVGPathSeg.PATHSEG_MOVETO_ABS ? window.SVGPathSeg.PATHSEG_LINETO_ABS : b == window.SVGPathSeg.PATHSEG_MOVETO_REL ? window.SVGPathSeg.PATHSEG_LINETO_REL : b : window.SVGPathSeg.PATHSEG_UNKNOWN
      }, d.prototype.initialCommandIsMoveTo = function() {
        if (!this.hasMoreData()) return !0;
        var a = this.peekSegmentType();
        return a == window.SVGPathSeg.PATHSEG_MOVETO_ABS || a == window.SVGPathSeg.PATHSEG_MOVETO_REL
      }, d.prototype._parseNumber = function() {
        var a = 0,
          b = 0,
          c = 1,
          d = 0,
          e = 1,
          f = 1,
          g = this._currentIndex;
        if (this._skipOptionalSpaces(), this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, e = -1), !(this._currentIndex == this._endIndex || (this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))) {
          for (var h = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) this._currentIndex++;
          if (this._currentIndex != h) for (var i = this._currentIndex - 1, j = 1; i >= h;) b += j * (this._string.charAt(i--) - "0"), j *= 10;
          if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
            if (this._currentIndex++, this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
            for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) c *= 10, d += (this._string.charAt(this._currentIndex) - "0") / c, this._currentIndex += 1
          }
          if (this._currentIndex != g && this._currentIndex + 1 < this._endIndex && ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) && "x" != this._string.charAt(this._currentIndex + 1) && "m" != this._string.charAt(this._currentIndex + 1)) {
            if (this._currentIndex++, "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, f = -1), this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") return;
            for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9";) a *= 10, a += this._string.charAt(this._currentIndex) - "0", this._currentIndex++
          }
          var k = b + d;
          if (k *= e, a && (k *= Math.pow(10, f * a)), g != this._currentIndex) return this._skipOptionalSpacesOrDelimiter(), k
        }
      }, d.prototype._parseArcFlag = function() {
        if (!(this._currentIndex >= this._endIndex)) {
          var a = !1,
            b = this._string.charAt(this._currentIndex++);
          if ("0" == b) a = !1;
          else {
            if ("1" != b) return;
            a = !0
          }
          return this._skipOptionalSpacesOrDelimiter(), a
        }
      }, d.prototype.parseSegment = function() {
        var a = this._string[this._currentIndex],
          c = this._pathSegTypeFromChar(a);
        if (c == window.SVGPathSeg.PATHSEG_UNKNOWN) {
          if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
          if (c = this._nextCommandHelper(a, this._previousCommand), c == window.SVGPathSeg.PATHSEG_UNKNOWN) return null
        } else this._currentIndex++;
        switch (this._previousCommand = c, c) {
          case window.SVGPathSeg.PATHSEG_MOVETO_REL:
            return new window.SVGPathSegMovetoRel(b, this._parseNumber(), this._parseNumber());
          case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
            return new window.SVGPathSegMovetoAbs(b, this._parseNumber(), this._parseNumber());
          case window.SVGPathSeg.PATHSEG_LINETO_REL:
            return new window.SVGPathSegLinetoRel(b, this._parseNumber(), this._parseNumber());
          case window.SVGPathSeg.PATHSEG_LINETO_ABS:
            return new window.SVGPathSegLinetoAbs(b, this._parseNumber(), this._parseNumber());
          case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
            return new window.SVGPathSegLinetoHorizontalRel(b, this._parseNumber());
          case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
            return new window.SVGPathSegLinetoHorizontalAbs(b, this._parseNumber());
          case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
            return new window.SVGPathSegLinetoVerticalRel(b, this._parseNumber());
          case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
            return new window.SVGPathSegLinetoVerticalAbs(b, this._parseNumber());
          case window.SVGPathSeg.PATHSEG_CLOSEPATH:
            return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(b);
          case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
            var d = {
              x1: this._parseNumber(),
              y1: this._parseNumber(),
              x2: this._parseNumber(),
              y2: this._parseNumber(),
              x: this._parseNumber(),
              y: this._parseNumber()
            };
            return new window.SVGPathSegCurvetoCubicRel(b, d.x, d.y, d.x1, d.y1, d.x2, d.y2);
          case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
            var d = {
              x1: this._parseNumber(),
              y1: this._parseNumber(),
              x2: this._parseNumber(),
              y2: this._parseNumber(),
              x: this._parseNumber(),
              y: this._parseNumber()
            };
            return new window.SVGPathSegCurvetoCubicAbs(b, d.x, d.y, d.x1, d.y1, d.x2, d.y2);
          case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
            var d = {
              x2: this._parseNumber(),
              y2: this._parseNumber(),
              x: this._parseNumber(),
              y: this._parseNumber()
            };
            return new window.SVGPathSegCurvetoCubicSmoothRel(b, d.x, d.y, d.x2, d.y2);
          case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
            var d = {
              x2: this._parseNumber(),
              y2: this._parseNumber(),
              x: this._parseNumber(),
              y: this._parseNumber()
            };
            return new window.SVGPathSegCurvetoCubicSmoothAbs(b, d.x, d.y, d.x2, d.y2);
          case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
            var d = {
              x1: this._parseNumber(),
              y1: this._parseNumber(),
              x: this._parseNumber(),
              y: this._parseNumber()
            };
            return new window.SVGPathSegCurvetoQuadraticRel(b, d.x, d.y, d.x1, d.y1);
          case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
            var d = {
              x1: this._parseNumber(),
              y1: this._parseNumber(),
              x: this._parseNumber(),
              y: this._parseNumber()
            };
            return new window.SVGPathSegCurvetoQuadraticAbs(b, d.x, d.y, d.x1, d.y1);
          case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
            return new window.SVGPathSegCurvetoQuadraticSmoothRel(b, this._parseNumber(), this._parseNumber());
          case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(b, this._parseNumber(), this._parseNumber());
          case window.SVGPathSeg.PATHSEG_ARC_REL:
            var d = {
              x1: this._parseNumber(),
              y1: this._parseNumber(),
              arcAngle: this._parseNumber(),
              arcLarge: this._parseArcFlag(),
              arcSweep: this._parseArcFlag(),
              x: this._parseNumber(),
              y: this._parseNumber()
            };
            return new window.SVGPathSegArcRel(b, d.x, d.y, d.x1, d.y1, d.arcAngle, d.arcLarge, d.arcSweep);
          case window.SVGPathSeg.PATHSEG_ARC_ABS:
            var d = {
              x1: this._parseNumber(),
              y1: this._parseNumber(),
              arcAngle: this._parseNumber(),
              arcLarge: this._parseArcFlag(),
              arcSweep: this._parseArcFlag(),
              x: this._parseNumber(),
              y: this._parseNumber()
            };
            return new window.SVGPathSegArcAbs(b, d.x, d.y, d.x1, d.y1, d.arcAngle, d.arcLarge, d.arcSweep);
          default:
            throw "Unknown path seg type."
        }
      };
      var e = new c,
        f = new d(a);
      if (!f.initialCommandIsMoveTo()) return [];
      for (; f.hasMoreData();) {
        var g = f.parseSegment();
        if (!g) return [];
        e.appendSegment(g)
      }
      return e.pathSegList
    })
  }();
  joint.shapes.chart = {}, joint.shapes.chart.Plot = joint.shapes.basic.Generic.extend({
    markup: ['<clipPath class="clip"><rect/></clipPath>', '<g class="rotatable">', '<g class="scalable"></g>', '<g class="background"><rect/><text/></g>', '<g class="axis">', '<g class="y-axis"><path/><g class="ticks"></g></g>', '<g class="x-axis"><path/><g class="ticks"></g></g>', '<g class="markings"></g>', "</g>", '<g class="data"><g class="series"></g></g>', '<g class="foreground">', '<rect/><text class="caption"/><text class="subcaption"/>', '<g class="legend"><g class="legend-items"></g></g>', '<line class="guideline x-guideline" /><line class="guideline y-guideline" />', "</g>", "</g>"].join(""),
    tickMarkup: '<g class="tick"><line/><text/></g>',
    pointMarkup: '<g class="point"><circle/><text/></g>',
    barMarkup: '<path class="bar"/>',
    markingMarkup: '<g class="marking"><rect/><text/></g>',
    serieMarkup: '<g><clipPath class="serie-clip"><rect/></clipPath><path/><g class="bars"></g><g class="points"></g></g>',
    legendItemMarkup: '<g class="legend-item"><circle/><text/></g>',
    defaults: joint.util.deepSupplement({
      type: "chart.Plot",
      attrs: {
        ".data path": {
          fill: "none",
          stroke: "black"
        },
        ".data .bars rect": {
          fill: "none",
          stroke: "black"
        },
        ".background rect": {
          fill: "white",
          stroke: "#e5e5e5",
          opacity: 1
        },
        ".background text": {
          fill: "black",
          text: "No data available.",
          ref: ".",
          "ref-x": .5,
          "ref-y": .5,
          "text-anchor": "middle",
          "y-alignment": "middle",
          display: "none"
        },
        ".foreground > rect": {
          fill: "white",
          stroke: "#e5e5e5",
          opacity: 0,
          "pointer-events": "none"
        },
        ".foreground .caption": {
          fill: "black",
          text: "",
          ref: ".foreground > rect",
          "ref-x": .5,
          "ref-y": 10,
          "text-anchor": "middle",
          "y-alignment": "middle",
          "font-size": 14
        },
        ".foreground .subcaption": {
          fill: "black",
          text: "",
          ref: ".foreground > rect",
          "ref-x": .5,
          "ref-y": 23,
          "text-anchor": "middle",
          "y-alignment": "middle",
          "font-size": 10
        },
        ".point": {
          display: "inline-block"
        },
        ".point circle": {
          r: 2,
          stroke: "black",
          fill: "black",
          opacity: .3
        },
        ".point text": {
          fill: "black",
          "font-size": 8,
          "text-anchor": "middle",
          display: "none"
        },
        ".axis path": {
          fill: "none",
          stroke: "black"
        },
        ".axis .tick": {
          fill: "none",
          stroke: "black"
        },
        ".y-axis .tick line": {
          fill: "none",
          stroke: "black",
          x2: 2,
          y2: 0,
          opacity: 1
        },
        ".x-axis .tick line": {
          fill: "none",
          stroke: "black",
          x2: 0,
          y2: -3,
          opacity: 1
        },
        ".y-axis .tick text": {
          fill: "black",
          stroke: "none",
          "font-size": 10,
          "text-anchor": "end"
        },
        ".x-axis .tick text": {
          fill: "black",
          stroke: "none",
          "font-size": 10,
          "text-anchor": "middle"
        },
        ".y-axis .tick text > tspan": {
          dy: "-.5em",
          x: -5
        },
        ".x-axis .tick text > tspan": {
          dy: ".5em",
          x: 0
        },
        ".axis .markings": {
          fill: "black",
          stroke: "none",
          "fill-opacity": 1
        },
        ".axis .markings text": {
          fill: "black",
          "text-anchor": "end",
          "font-size": 10,
          dy: -5,
          dx: -5
        },
        ".guideline": {
          "pointer-events": "none",
          display: "none"
        },
        ".x-guideline": {
          stroke: "black",
          visibility: "hidden"
        },
        ".y-guideline": {
          stroke: "black",
          visibility: "hidden"
        },
        ".legend": {
          "ref-x": 10,
          "ref-y": 10
        },
        ".legend-item text": {
          fill: "black",
          transform: "translate(14, 0)",
          "font-size": 11
        },
        ".legend-item circle": {
          r: 5,
          transform: "translate(5,5)"
        },
        ".legend-item": {
          cursor: "pointer"
        },
        ".legend-item.disabled circle": {
          fill: "gray"
        },
        ".legend-item.disabled text": {
          opacity: .5
        }
      }
    }, joint.shapes.basic.Generic.prototype.defaults),
    legendPosition: function(a, b) {
      b = b || {}, this.trigger("batch:start"), [".legend/ref-x", ".legend/ref-y", ".legend/ref-dx", ".legend/ref-dy", ".legend/x-alignment", ".legend/y-alignment"].forEach(function(a) {
        this.removeAttr(a, {
          silent: !0
        })
      }, this);
      var c = b.padding || 10,
        d = {
          n: {
            ".legend": {
              "ref-x": .5,
              "x-alignment": -.5,
              "ref-y": c
            }
          },
          ne: {
            ".legend": {
              "ref-dx": -c,
              "x-alignment": -.999,
              "ref-y": c
            }
          },
          e: {
            ".legend": {
              "ref-dx": -c,
              "x-alignment": -.999,
              "ref-y": .5,
              "y-alignment": -.5
            }
          },
          se: {
            ".legend": {
              "ref-dx": -c,
              "ref-dy": -c,
              "x-alignment": -.999,
              "y-alignment": -.999
            }
          },
          s: {
            ".legend": {
              "ref-x": .5,
              "ref-dy": -c,
              "x-alignment": -.5,
              "y-alignment": -.999
            }
          },
          sw: {
            ".legend": {
              "ref-x": c,
              "ref-dy": -c,
              "y-alignment": -.999
            }
          },
          w: {
            ".legend": {
              "ref-x": c,
              "ref-y": .5,
              "y-alignment": -.5
            }
          },
          nw: {
            ".legend": {
              "ref-x": c,
              "ref-y": c
            }
          },
          nnw: {
            ".legend": {
              "ref-x": c,
              "ref-y": -c,
              "y-alignment": -.999
            }
          },
          nn: {
            ".legend": {
              "ref-x": .5,
              "ref-y": -c,
              "x-alignment": -.5,
              "y-alignment": -.999
            }
          },
          nne: {
            ".legend": {
              "ref-dx": -c,
              "ref-y": -c,
              "x-alignment": -.999,
              "y-alignment": -.999
            }
          },
          nnee: {
            ".legend": {
              "ref-dx": c,
              "ref-y": -c,
              "y-alignment": -.999
            }
          },
          nee: {
            ".legend": {
              "ref-y": c,
              "ref-dx": c
            }
          },
          ee: {
            ".legend": {
              "ref-dx": c,
              "ref-y": .5,
              "y-alignment": -.5
            }
          },
          see: {
            ".legend": {
              "ref-dx": c,
              "ref-dy": -c,
              "y-alignment": -.999
            }
          },
          ssee: {
            ".legend": {
              "ref-dx": c,
              "ref-dy": c
            }
          },
          sse: {
            ".legend": {
              "ref-dx": -c,
              "ref-dy": c,
              "x-alignment": -.999
            }
          },
          ss: {
            ".legend": {
              "ref-x": .5,
              "ref-dy": c,
              "x-alignment": -.5
            }
          },
          ssw: {
            ".legend": {
              "ref-x": c,
              "ref-dy": c
            }
          },
          ssww: {
            ".legend": {
              "ref-x": -c,
              "ref-dy": c,
              "x-alignment": -.999
            }
          },
          sww: {
            ".legend": {
              "ref-x": -c,
              "ref-dy": -c,
              "x-alignment": -.999,
              "y-alignment": -.999
            }
          },
          ww: {
            ".legend": {
              "ref-x": -c,
              "ref-y": .5,
              "x-alignment": -.999,
              "y-alignment": -.5
            }
          },
          nww: {
            ".legend": {
              "ref-x": -c,
              "ref-y": c,
              "x-alignment": -.999
            }
          },
          nnww: {
            ".legend": {
              "ref-x": -c,
              "ref-y": -c,
              "x-alignment": -.999,
              "y-alignment": -.999
            }
          }
        };
      d[a] && this.attr(d[a]), this.trigger("batch:stop")
    },
    addPoint: function(a, b, c) {
      c = c || {};
      var d = this.get("series"),
        e = joint.util.toArray(d).findIndex(function(a) {
          return a.name === b
        });
      if (e === -1) throw new Error("Serie " + b + " was not found.");
      var f = joint.util.cloneDeep(d[e]);
      f.data.push(a), Number.isFinite(c.maxLen) && f.data.length > c.maxLen && f.data.shift(), d = d.slice(), d[e] = f, this.set("series", d, c)
    },
    lastPoint: function(a) {
      var b = joint.util.toArray(this.get("series")).find(function(b) {
        return b && b.name === a
      }).data;
      return b[b.length - 1]
    },
    firstPoint: function(a) {
      return joint.util.toArray(this.get("series")).find(function(b) {
        return b && b.name === a
      }).data[0]
    }
  }), joint.shapes.chart.PlotView = joint.dia.ElementView.extend({
    events: {
      mousemove: "onMouseMove",
      mouseout: "onMouseOut"
    },
    initialize: function() {
      joint.dia.ElementView.prototype.initialize.apply(this, arguments), this.listenTo(this.model, "change:series change:interpolate change:padding change:canvas change:markings change:axis", function() {
        this.update()
      }), this.on("cell:pointerdown", this.onPointerDown, this), this._disabledSeries = []
    },
    renderMarkup: function() {
      joint.dia.ElementView.prototype.renderMarkup.apply(this, arguments), this.elDataClipPath = this.$(".clip")[0], this.elDataClipPathRect = this.elDataClipPath.firstChild, this.elBackgroundRect = this.$(".background rect")[0], this.elBackgroundText = this.$(".background text")[0], this.elForeground = this.$(".foreground")[0], this.elForegroundRect = this.$(".foreground rect")[0], this.elDataSeries = this.$(".data .series")[0], this.elYAxisPath = this.$(".y-axis path")[0], this.elYAxisTicks = this.$(".y-axis .ticks")[0], this.elXAxisPath = this.$(".x-axis path")[0], this.elXAxisTicks = this.$(".x-axis .ticks")[0], this.elMarkings = this.$(".axis .markings")[0], this.elXGuideline = this.$(".x-guideline")[0], this.elYGuideline = this.$(".y-guideline")[0], this.elLegend = this.$(".legend")[0], this.elLegendItems = this.$(".legend-items")[0], this.elTick = V(this.model.tickMarkup), this.elMarking = V(this.model.markingMarkup), this.elLegendItem = V(this.model.legendItemMarkup), this.elPoint = V(this.model.pointMarkup), this.elBar = V(this.model.barMarkup), this.elSerie = V(this.model.serieMarkup), this.elDataClipPath.id = "clip_" + this.cid, V(this.$(".data")[0]).attr("clip-path", "url(#" + this.elDataClipPath.id + ")"), V(this.elMarkings).attr("clip-path", "url(#" + this.elDataClipPath.id + ")")
    },
    update: function() {
      var a = this.filterSeries();
      this.calculateStats(a);
      var b = this.model.get("size"),
        c = b.width,
        d = b.height;
      this.canvas = joint.util.assign({
        x: 0,
        y: 0,
        width: c,
        height: d
      }, this.model.get("canvas"));
      var e, f = {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        h = this.model.get("padding");
      e = joint.util.isObject(h) ? joint.util.assign({}, f, h) : void 0 !== h ? {
        top: h,
        right: 2 * h,
        bottom: 2 * h,
        left: h
      } : f, this.canvas = g.rect(this.canvas).moveAndExpand(g.rect(e.left, e.top, -e.right, -e.bottom));
      var i = {
        x: 0,
        y: 0,
        width: c,
        height: d
      };
      V(this.elDataClipPathRect).attr(i), V(this.elBackgroundRect).attr(i), V(this.elForegroundRect).attr(i), this.updateAxis(), this.updateMarkings(), this.isEmpty() ? $(this.elBackgroundText).show() : $(this.elBackgroundText).hide(), this.updateSeries(a), this.updateLegend(), joint.dia.ElementView.prototype.update.apply(this, arguments)
    },
    calculateStats: function(a) {
      a = a || this.model.get("series");
      var b = [],
        c = [],
        d = {},
        e = {},
        f = {};
      joint.util.toArray(a).forEach(function(a, g) {
        var h = f[a.name || g] || (f[a.name || g] = {});
        h.decreasingX = !0, h.decreasingY = !0, h.nonDecreasingX = !0, h.nonDecreasingY = !0;
        var i;
        joint.util.forIn(a.data, function(f) {
          h.minX = void 0 === h.minX ? f.x : Math.min(h.minX, f.x), h.maxX = void 0 === h.maxX ? f.x : Math.max(h.maxX, f.x), h.minY = void 0 === h.minY ? f.y : Math.min(h.minY, f.y), h.maxY = void 0 === h.maxY ? f.y : Math.max(h.maxY, f.y), i && (h.decreasingX = h.decreasingX && f.x < i.x, h.decreasingY = h.decreasingY && f.y < i.y, h.nonDecreasingX = h.nonDecreasingX && f.x >= i.x, h.nonDecreasingY = h.nonDecreasingY && f.y >= i.y), b.includes(f.x) || b.push(f.x), c.includes(f.y) || c.push(f.y), (d[f.x] || (d[f.x] = [])).push({
            serie: a,
            x: f.x,
            y: f.y
          }), (e[f.y] || (e[f.y] = [])).push({
            serie: a,
            x: f.x,
            y: f.y
          }), i = f
        })
      });
      var g = this.model.get("axis") || {},
        h = g["x-axis"] || {},
        i = g["y-axis"] || {};
      this.stats = {
        minX: void 0 === h.min ? b.reduce(function(a, b) {
          return b < a ? b : a
        }, 1 / 0) : h.min,
        maxX: void 0 === h.max ? b.reduce(function(a, b) {
          return b > a ? b : a
        }, -(1 / 0)) : h.max,
        minY: void 0 === i.min ? c.reduce(function(a, b) {
          return b < a ? b : a
        }, 1 / 0) : i.min,
        maxY: void 0 === i.max ? c.reduce(function(a, b) {
          return b > a ? b : a
        }, -(1 / 0)) : i.max,
        bySerie: f,
        xValues: b,
        yValues: c,
        xMap: d,
        yMap: e
      }
    },
    isEmpty: function() {
      return !this.stats.xValues.length
    },
    updateSeries: function(a) {
      if (a = a || this.model.get("series"), this.elDataSeries.textContent = "", !this.isEmpty()) {
        var b = [this.stats.minX, this.stats.maxX],
          c = [this.stats.minY, this.stats.maxY],
          d = [this.canvas.x, this.canvas.x + this.canvas.width],
          e = [this.canvas.y + this.canvas.height, this.canvas.y],
          f = this.model.get("attrs");
        joint.util.toArray(a).forEach(function(a, h) {
          var i = a.data,
            j = [],
            k = this.elSerie.clone().attr("class", a.name || "serie-" + h);
          V(this.elDataSeries).append(k), joint.util.forIn(i, function(h) {
            var i = g.scale.linear(b, d, h.x),
              k = g.scale.linear(c, e, h.y);
            j.push({
              x: i,
              y: k
            }), f[".point"] && "none" !== f[".point"].display && this.renderPoint(h, a), a.bars && this.renderBar(h, a)
          }.bind(this));
          var l = k.findOne(".serie-clip"),
            m = this.model.get("size"),
            n = this.stats.bySerie[a.name || h],
            o = g.scale.linear(b, d, n.minX),
            p = g.scale.linear(b, d, n.maxX),
            q = l.findOne("rect");
          if (q.attr(g.rect(o, 0, p - o, m.height)), !a.bars) {
            var r = k.findOne("path");
            r.attr({
              d: this.seriePathData(j, a, h),
              "clip-path": "url(#" + l.node.id + ")"
            })
          }
        }, this)
      }
    },
    seriePathClipData: function(a, b) {
      var c = 10,
        d = this.model.get("size"),
        e = a[0],
        f = ["M", e.x, e.y, "V", d.height + c];
      return f.join(" ")
    },
    renderBar: function(a, b) {
      var c = [this.stats.minX, this.stats.maxX],
        d = [this.stats.minY, this.stats.maxY],
        e = [this.canvas.x, this.canvas.x + this.canvas.width],
        f = [this.canvas.y + this.canvas.height, this.canvas.y],
        h = g.scale.linear(c, e, a.x),
        i = g.scale.linear(d, f, a.y),
        j = b.bars.barWidth || .8,
        k = j > 1 ? j : this.canvas.width / (this.stats.maxX - this.stats.minX) * j,
        l = g.scale.linear(d, f, 0) - i,
        m = a["top-rx"] || b.bars["top-rx"],
        n = a["top-ry"] || b.bars["top-ry"],
        o = a["bottom-rx"] || b.bars["bottom-rx"],
        p = a["bottom-ry"] || b.bars["bottom-ry"],
        q = {
          left: h,
          middle: h - k / 2,
          right: h - k
        }[b.bars.align || "middle"],
        r = this.elBar.clone();
      r.attr({
        "data-serie": b.name,
        "data-x": a.x,
        "data-y": a.y,
        d: V.rectToPath({
          x: q,
          y: i,
          width: k,
          height: l,
          "top-rx": m,
          "top-ry": n,
          "bottom-rx": o,
          "bottom-ry": p
        })
      });
      var s = b.name || "serie-" + this.model.get("series").indexOf(b);
      return V(this.elDataSeries).findOne("." + s + " .bars").append(r), r.node
    },
    renderPoint: function(a, b) {
      var c = [this.stats.minX, this.stats.maxX],
        d = [this.stats.minY, this.stats.maxY],
        e = [this.canvas.x, this.canvas.x + this.canvas.width],
        f = [this.canvas.y + this.canvas.height, this.canvas.y],
        h = g.scale.linear(c, e, a.x),
        i = g.scale.linear(d, f, a.y),
        j = this.elPoint.clone();
      j.attr({
        "data-serie": b.name,
        "data-x": a.x,
        "data-y": a.y
      }), j.findOne("circle").attr({
        cx: h,
        cy: i
      }), j.findOne("text").attr({
        x: h,
        dy: i
      }).text(this.pointLabel(a, b));
      var k = b.name || "serie-" + this.model.get("series").indexOf(b);
      return V(this.elDataSeries).findOne("." + k + " .points").append(j), j.node
    },
    seriePathData: function(a, b, c) {
      var d, e, f, h = void 0 === b.interpolate ? this.model.get("interpolate") : b.interpolate,
        i = a.length;
      switch (h) {
        case "bezier":
          d = g.bezier.curveThroughPoints(a);
          break;
        case "step":
          for (f = a[0], d = ["M", f.x, f.y], e = 1; e < i; e++) d.push("H", (f.x + a[e].x) / 2, "V", a[e].y), f = a[e];
          break;
        case "stepBefore":
          for (d = ["M", a[0].x, a[0].y], e = 1; e < i; e++) d.push("V", a[e].y, "H", a[e].x);
          break;
        case "stepAfter":
          for (d = ["M", a[0].x, a[0].y], e = 1; e < i; e++) d.push("H", a[e].x, "V", a[e].y);
          break;
        default:
          for (d = ["M"], e = 0; e < i; e++) d.push(a[e].x, a[e].y)
      }
      return d = this.fixPathForFill(d, a, b, c), d.join(" ")
    },
    fixPathForFill: function(a, b, c, d) {
      if (0 === b.length) return a;
      var e = this.stats.bySerie[c.name || d];
      if (!e.nonDecreasingX) return a;
      var f = 10,
        g = this.model.get("size"),
        h = b[0],
        i = b[b.length - 1],
        j = ["M", i.x, g.height + f, "H", h.x - f, "V", h.y];
      return a[0] = "L", j.concat(a)
    },
    updateAxis: function() {
      var a = this.model.get("size"),
        b = a.width,
        c = a.height,
        d = this.model.get("axis"),
        e = this.canvas.height / c;
      if (V(this.elYAxisPath).attr("d", ["M", 0, 0, "L", 0, c].join(" ")), V(this.elXAxisPath).attr("d", ["M", 0, c, "L", b, c].join(" ")), this.elXAxisTicks.textContent = "", this.elYAxisTicks.textContent = "", !this.isEmpty()) {
        for (var f = [this.stats.minX, this.stats.maxX], h = [this.stats.minY, this.stats.maxY], i = [this.canvas.x, this.canvas.x + this.canvas.width], j = [0, this.canvas.height], k = h[1] - h[0], l = d && d["y-axis"] || {}, m = d && d["x-axis"] || {}, n = k > 0 ? l.ticks - 1 || 10 : 0, o = k / n / e, p = h[0], q = 0; q < n + 1; q++) {
          var r = g.scale.linear(h, j, p),
            s = this.elTick.clone();
          s.translate(0, r), V(this.elYAxisTicks).append(s);
          var t = h[1] - (p - h[0]);
          t += g.scale.linear(j, h, this.canvas.y) - h[0], s.findOne("text").text(this.tickLabel(t, l)), p += o
        }
        this.stats.xValues.forEach(function(a, d) {
          if (d % (m.tickStep || 1) === 0) {
            var e = g.scale.linear(f, i, a);
            if (!(e > b)) {
              var h = this.elTick.clone();
              h.translate(e, c), V(this.elXAxisTicks).append(h), h.findOne("text").text(this.tickLabel(a, m))
            }
          }
        }, this)
      }
    },
    tickLabel: function(a, b) {
      if (joint.util.isFunction(b.tickFormat)) return b.tickFormat(a);
      var c = b.tickFormat || ".1f",
        d = joint.util.format.number(c, a);
      return d + (joint.util.isFunction(b.tickSuffix) ? b.tickSuffix(a) : b.tickSuffix || "")
    },
    pointLabel: function(a, b) {
      if (joint.util.isFunction(b.pointFormat)) return b.pointFormat(a);
      var c = b.pointFormat || ".1f",
        d = joint.util.format.number(c, a.y);
      return d + (b.pointSuffix || "")
    },
    updateMarkings: function() {
      function a(a, b) {
        return void 0 === a ? b : a
      }
      this.elMarkings.textContent = "";
      var b = this.model.get("markings");
      if (b && 0 !== b.length) {
        var c = this.model.get("size"),
          d = c.width,
          e = c.height,
          f = [this.stats.minX, this.stats.maxX],
          h = [this.stats.minY, this.stats.maxY],
          i = [this.canvas.x, this.canvas.x + this.canvas.width],
          j = [this.canvas.y, this.canvas.y + this.canvas.height];
        joint.util.toArray(b).forEach(function(b, c) {
          var k = b.start || b.end,
            l = b.end || b.start,
            m = Math.min(a(k.x, this.stats.minX), a(l.x, this.stats.minX)),
            n = Math.max(a(k.x, this.stats.maxX), a(l.x, this.stats.maxX)),
            o = Math.min(a(k.y, this.stats.minY), a(l.y, this.stats.minY)),
            p = Math.max(a(k.y, this.stats.maxY), a(l.y, this.stats.maxY)),
            q = void 0 === k.x || void 0 === l.x,
            r = void 0 === k.y || void 0 === l.y;
          q && (i = [0, d]), r && (j = [0, e]);
          var s = g.scale.linear(f, i, m),
            t = g.scale.linear(f, i, n),
            u = g.scale.linear(h, j, o),
            v = g.scale.linear(h, j, p),
            w = s,
            x = j[1] - v + j[0],
            y = t - s,
            z = v - u;
          y = Math.max(y, 1), z = Math.max(z, 1);
          var A = this.elMarking.clone();
          A.findOne("rect").attr({
            x: w,
            y: x,
            width: y,
            height: z
          }), A.findOne("text").text(b.label || "").attr({
            x: w + y,
            y: x
          });
          var B = A.attr("class") + " " + (b.name || "marking-" + c);
          A.attr(joint.util.assign({
            "class": B
          }, b.attrs)), V(this.elMarkings).append(A)
        }, this)
      }
    },
    updateLegend: function() {
      var a = this.model.get("series");
      this.elLegendItems.textContent = "", joint.util.toArray(a).forEach(function(a, b) {
        if ((!joint.util.isFunction(a.showLegend) || a.showLegend(a, this.stats.bySerie[a.name || b])) && a.showLegend !== !1) {
          var c = this.elLegendItem.clone();
          this._disabledSeries.includes(a.name) && c.addClass("disabled"), c.attr("data-serie", a.name), c.findOne("circle").attr({
            fill: this.getSerieColor(a.name)
          }), c.findOne("text").text(a.label || a.name), c.translate(0, b * (a.legendLabelLineHeight || 16)), V(this.elLegendItems).append(c)
        }
      }, this)
    },
    getSerieColor: function(a) {
      var b = this.model.get("attrs"),
        c = Object.keys(b).find(function(b) {
          return b.includes(a)
        });
      return c ? b[c].stroke || b[c].fill : "black"
    },
    hideSerie: function(a) {
      this._disabledSeries.includes(a) || this._disabledSeries.push(a);
      var b = this.filterSeries();
      this.update(b)
    },
    showSerie: function(a) {
      this._disabledSeries = joint.util.without(this._disabledSeries, a);
      var b = this.filterSeries();
      this.update(b)
    },
    filterSeries: function(a) {
      return a = a || this.model.get("series"), a = joint.util.toArray(a).filter(function(a) {
        return !this._disabledSeries.includes(a.name)
      }, this)
    },
    onPointerDown: function(a, b, c) {
      var d = $(a.target).closest(".legend-item")[0];
      d && (V(d).toggleClass("disabled"), V(d).hasClass("disabled") ? this.hideSerie(V(d).attr("data-serie")) : this.showSerie(V(d).attr("data-serie")))
    },
    onMouseMove: function(a) {
      this.showGuidelines(a.clientX, a.clientY, a)
    },
    onMouseOut: function(a) {
      this.hideGuidelines(), this.trigger("mouseout", a)
    },
    showGuidelines: function(a, b, c) {
      var d = this.model.get("angle"),
        e = this.model.getBBox(),
        f = g.point(V(this.paper.viewport).toLocalPoint(a, b)).rotate(e.center(), d);
      if (g.rect(e).containsPoint(f)) {
        var h = this.model.get("size"),
          i = f.x - e.x,
          j = f.y - e.y;
        V(this.elXGuideline).attr({
          x1: i,
          y1: 0,
          x2: i,
          y2: h.height,
          visibility: "visible"
        }), V(this.elYGuideline).attr({
          x1: 0,
          y1: j,
          x2: h.width,
          y2: j,
          visibility: "visible"
        });
        var k = g.scale.linear([this.canvas.x, this.canvas.x + this.canvas.width], [this.stats.minX, this.stats.maxX], i),
          l = g.scale.linear([this.canvas.y, this.canvas.y + this.canvas.height], [this.stats.minY, this.stats.maxY], j),
          m = {
            x: k,
            y: this.stats.minY + this.stats.maxY - l
          },
          n = {
            x: a,
            y: b
          },
          o = this.closestPoints(k);
        this.trigger("mouseover", m, n, o, c)
      }
    },
    closestPoints: function(a) {
      var b = joint.util.sortedIndex(this.stats.xValues, a),
        c = this.stats.xValues[b],
        d = this.stats.xValues[b - 1],
        e = void 0 === d ? c : Math.abs(a - c) < Math.abs(a - d) ? c : d;
      return this.stats.xMap[e]
    },
    hideGuidelines: function() {
      V(this.elXGuideline).attr("visibility", "hidden"), V(this.elYGuideline).attr("visibility", "hidden")
    }
  }), joint.shapes.chart.Pie = joint.shapes.basic.Generic.extend({
    markup: ['<g class="rotatable">', '<g class="scalable"></g>', '<g class="background"><rect/><text/></g>', '<g class="data"></g>', '<g class="foreground">', '<rect/><text class="caption"/><text class="subcaption"/>', '<g class="legend"><g class="legend-items"></g></g>', "</g>", "</g>"].join(""),
    sliceMarkup: '<g class="slice"/>',
    sliceFillMarkup: '<path class="slice-fill"/>',
    sliceBorderMarkup: '<path class="slice-border"/>',
    sliceInnerLabelMarkup: '<text class="slice-inner-label"/>',
    legendSerieMarkup: '<g class="legend-serie"><text/></g>',
    legendSliceMarkup: '<g class="legend-slice"><circle/><text/></g>',
    defaults: joint.util.deepSupplement({
      type: "chart.Pie",
      size: {
        width: 200,
        height: 200
      },
      pieHole: 0,
      serieDefaults: {
        startAngle: 0,
        degree: 360,
        label: null,
        showLegend: !0,
        labelLineHeight: 6
      },
      sliceDefaults: {
        innerLabel: "{percentage:.0f}%",
        innerLabelMargin: 6,
        legendLabel: "{label}: {value}",
        legendLabelLineHeight: 6,
        legendLabelMargin: 14,
        offset: 0,
        onClickEffect: {
          type: "offset",
          offset: 20
        },
        onHoverEffect: null
      },
      series: [],
      attrs: {
        ".background > rect": {
          opacity: 0
        },
        ".background > text": {
          fill: "black",
          text: "No data available.",
          ref: ".background > rect",
          "ref-x": .5,
          "ref-y": .5,
          "text-anchor": "middle",
          "y-alignment": "middle",
          display: "none"
        },
        ".foreground > rect": {
          fill: "white",
          stroke: "#e5e5e5",
          opacity: 0,
          "pointer-events": "none"
        },
        ".foreground .caption": {
          fill: "black",
          text: "",
          ref: ".foreground > rect",
          "ref-x": 2,
          "ref-y": 6,
          "text-anchor": "start",
          "y-alignment": "middle",
          "font-size": 14
        },
        ".foreground .subcaption": {
          fill: "black",
          text: "",
          ref: ".foreground > rect",
          "ref-x": 2,
          "ref-y": 18,
          "text-anchor": "start",
          "y-alignment": "middle",
          "font-size": 10
        },
        ".data": {
          ref: ".background",
          "ref-x": .5,
          "ref-y": .5
        },
        ".slice": {
          cursor: "pointer"
        },
        ".slice > .slice-fill": {
          stroke: "#ffffff",
          "stroke-width": 1,
          "fill-opacity": 1
        },
        ".slice.hover > .slice-fill": {
          "fill-opacity": .8
        },
        ".slice > .slice-border": {
          "stroke-width": 6,
          "stroke-opacity": .4,
          "fill-opacity": 1,
          fill: "none",
          display: "none"
        },
        ".slice.hover > .slice-border": {
          display: "block"
        },
        ".slice > .slice-inner-label": {
          "text-anchor": "middle",
          "font-size": "12",
          stroke: "none",
          "stroke-width": "0",
          fill: "#ffffff"
        },
        ".slice > .slice-inner-label > tspan": {
          dy: "-.5em"
        },
        ".legend": {
          "ref-dx": 20,
          "ref-y": 5
        },
        ".legend-serie text": {
          fill: "grey",
          transform: "translate(2, 0)",
          "font-size": 13
        },
        ".legend-slice": {
          cursor: "pointer"
        },
        ".legend-slice text": {
          "font-weight": "normal",
          fill: "black",
          "font-size": 11
        },
        ".legend-slice.hover text": {
          "font-weight": "bold"
        },
        ".legend-slice circle": {
          r: 5,
          transform: "translate(5,5)"
        }
      }
    }, joint.shapes.basic.Generic.prototype.defaults),
    addSlice: function(a, b, c) {
      c = c || {}, b = b || 0;
      var d = this.get("series");
      void 0 === d[b] && (d[b] = {
        data: []
      });
      var e = joint.util.cloneDeep(d[b]);
      e.data.push(a), d = d.slice(), d[b] = e, c = e.data.length > 1 ? joint.util.assign(c, {
        changedSerieIndex: b
      }) : c, this.set("series", d, c)
    },
    editSlice: function(a, b, c, d) {
      d = d || {}, c = c || 0;
      var e = this.get("series");
      if (void 0 === e[c] || void 0 === e[c].data[b]) throw new Error("Slice " + b + " on serie " + c + " was not found.");
      var f = joint.util.cloneDeep(e[c]);
      f.data[b] = joint.util.assign(f.data[b], a), e = e.slice(), e[c] = f, this.set("series", e, joint.util.assign(d, {
        changedSerieIndex: c
      }))
    }
  }), joint.shapes.chart.PieView = joint.dia.ElementView.extend({
    events: {
      "mouseover .slice": "onMouseOverSlice",
      "mouseout .slice": "onMouseOverSlice",
      "mousemove .slice": "onMouseMoveSlice",
      "mouseover .legend-slice": "onEventLegendItem",
      "mouseout .legend-slice": "onEventLegendItem"
    },
    initialize: function() {
      joint.dia.ElementView.prototype.initialize.apply(this, arguments), this.listenTo(this.model, "change:series change:serieDefaults change:sliceDefaults change:pieHole", function(a, b, c) {
        this.update(null, null, null, c.changedSerieIndex)
      }), this.on("cell:pointerclick", this.onClickSlice, this), this.on("cell:pointerclick", this.onEventLegendItem, this)
    },
    renderMarkup: function() {
      joint.dia.ElementView.prototype.renderMarkup.apply(this, arguments), this.elBackgroundRect = this.$(".background rect")[0], this.elBackgroundText = this.$(".background text")[0], this.elForegroundRect = this.$(".foreground rect")[0], this.elLegendItems = this.$(".legend-items")[0], this.elPie = this.$(".data")[0], this.elSlice = V(this.model.sliceMarkup), this.elSliceFill = V(this.model.sliceFillMarkup), this.elSliceBorder = V(this.model.sliceBorderMarkup), this.elSliceInnerLabel = V(this.model.sliceInnerLabelMarkup), this.elLegendSerie = V(this.model.legendSerieMarkup), this.elLegendSlice = V(this.model.legendSliceMarkup)
    },
    update: function(a, b, c, d) {
      var e = this.calculateSeries(d);
      d in e ? $(this.elPie).find(".serie-" + d).remove() : $(this.elPie).empty();
      var f = this.model.get("size");
      V(this.elBackgroundRect).attr(f), V(this.elForegroundRect).attr(f), e.length ? $(this.elBackgroundText).hide() : $(this.elBackgroundText).show(), joint.util.toArray(e).forEach(function(a, b) {
        void 0 !== d && d !== b || joint.util.forIn(a.data, this.updateSlice.bind(this))
      }, this), this.updateLegend(), joint.dia.ElementView.prototype.update.apply(this, arguments)
    },
    calculateSeries: function(a) {
      var b = joint.util.cloneDeep(this.model.get("series")),
        c = this.model.get("serieDefaults"),
        d = this.model.get("sliceDefaults"),
        e = this.model.get("size"),
        f = Math.min(e.width, e.height) / 2,
        h = this.model.get("pieHole");
      h = h > 1 ? h : f * h;
      var i = f,
        j = (f - h) / b.length;
      return this._series = b.map(function(b, e) {
        if (void 0 !== a && a !== e) return b;
        b = joint.util.defaults(b, c);
        var f = b.startAngle,
          h = b.data.reduce(function(a, b) {
            return a + b.value
          }, 0),
          k = b.degree / h || 0,
          l = 100 / h;
        return b.data = b.data.map(function(a, b) {
          a = joint.util.defaults(a, joint.util.omit(d, "offset", "onClickEffect", "onHoverEffect")), a.outerRadius = i, a.innerRadius = i - j, e || (a = joint.util.defaults(a, joint.util.pick(d, "offset", "onClickEffect", "onHoverEffect")), a.isOuter = !0, a.offset = a.offset > 1 ? a.offset : a.offset * a.outerRadius, a.onClickEffect.offset = a.onClickEffect.offset > 1 ? a.onClickEffect.offset : a.onClickEffect.offset * a.outerRadius), a.serieIndex = e, a.sliceIndex = b, a.innerLabelMargin = a.innerLabelMargin < -1 || a.innerLabelMargin > 1 ? a.innerLabelMargin : a.innerLabelMargin * a.outerRadius, a.percentage = a.value * l;
          var c = a.value * k;
          return a.degree = {
            angle: c,
            start: f,
            end: c + f
          }, a.rad = {
            angle: g.toRad(a.degree.angle, !0),
            start: g.toRad(a.degree.start, !0),
            end: g.toRad(a.degree.end, !0)
          }, a.middleangle = (a.rad.start + a.rad.end) / 2, f = a.degree.end, a
        }), i -= j, b
      }), this._series
    },
    updateLegend: function() {
      var a = this._series;
      this.elLegendItems.textContent = "";
      var b = 0,
        c = parseInt(this.model.attr(".legend-serie text/font-size"), 10),
        d = parseInt(this.model.attr(".legend-slice text/font-size"), 10);
      joint.util.toArray(a).forEach(function(a, e) {
        if (a.showLegend) {
          if (a.label) {
            var f = this.elLegendSerie.clone();
            a.name && f.addClass(a.name), f.attr({
              "data-serie": e
            }), f.findOne("text").text(a.label), f.translate(0, b), V(this.elLegendItems).append(f), b += c + a.labelLineHeight
          }
          joint.util.forIn(a.data, function(a, c) {
            var f = this.elLegendSlice.clone(),
              g = this.getSliceFillColor(c, e);
            a.name && f.addClass(a.name), f.attr({
              "data-serie": e,
              "data-slice": c
            }), f.findOne("text").text(joint.util.format.string(a.legendLabel, a)), f.findOne("text").translate(a.legendLabelMargin), f.translate(0, b), b += d + a.legendLabelLineHeight, joint.util.isObject(g) ? this.applyGradient(f.findOne("circle"), "fill", g) : f.findOne("circle").attr({
              fill: g
            }), V(this.elLegendItems).append(f)
          }.bind(this))
        }
      }, this)
    },
    applyGradient: function(a, b, c) {
      var d = joint.util.isString(a) ? this.findBySelector(a) : $(a),
        e = this.paper.defineGradient(c);
      d.each(function() {
        V(this).attr(b, "url(#" + e + ")")
      })
    },
    updateSlice: function(a) {
      var b = this.elSlice.clone();
      V(this.elPie).append(b);
      var c = this.elSliceFill.clone(),
        d = this.getSliceFillColor(a.sliceIndex, a.serieIndex);
      c.attr({
        fill: d,
        d: V.createSlicePathData(a.innerRadius, a.outerRadius, a.rad.start, a.rad.end)
      }), b.append(c), joint.util.isObject(d) && this.applyGradient("#" + c.attr("id"), "fill", d);
      var e = this.elSliceBorder.clone(),
        f = parseInt(this.model.attr(".slice > .slice-border/stroke-width"), 10),
        h = g.point.fromPolar(a.outerRadius + f / 2, -a.rad.start, g.point(0, 0)),
        i = g.point.fromPolar(a.outerRadius + f / 2, -a.rad.end, g.point(0, 0));
      e.attr({
        stroke: d,
        d: this.drawArc(h, i, a.outerRadius + f / 2, a.rad.start, a.rad.end)
      }), b.append(e), joint.util.isObject(d) && this.applyGradient("#" + e.attr("id"), "stroke", d);
      var j = this.elSliceInnerLabel.clone();
      j.text(joint.util.format.string(a.innerLabel, a)), b.append(j);
      var k = j.bbox(),
        l = a.outerRadius - k.width / 2 - a.innerLabelMargin;
      j.translate(l * Math.cos(-a.middleangle), -l * Math.sin(-a.middleangle)), b.attr({
        "data-serie": a.serieIndex,
        "data-slice": a.sliceIndex,
        "data-value": a.value
      });
      var m = this._series[a.serieIndex].name;
      return m && b.addClass(m), a.name && b.addClass(a.name), b.addClass("serie-" + a.serieIndex + " slice-" + a.sliceIndex), a.isOuter && (b.addClass("outer"), a.offset && (b.addClass("clicked"), this.effectOnSlice(b, a, {
        type: "offset",
        offset: a.offset
      }))), b
    },
    getSliceFillColor: function(a, b) {
      b = b || 0;
      var c = this.model.get("attrs"),
        d = Object.keys(c).find(function(c) {
          return c.indexOf(".serie-" + b + ".slice-" + a + " > .slice-fill") > -1
        });
      return d ? c[d].fill : this._series[b].data[a].fill
    },
    onMouseMoveSlice: function(a) {
      var b = V(a.currentTarget),
        c = b.attr("data-serie"),
        d = b.attr("data-slice"),
        e = this._series[c].data[d];
      this.trigger(a.type, e, a)
    },
    mouseOverSlice: function(a, b) {
      b = b || 0;
      var c = V(this.$('.slice[data-serie="' + b + '"][data-slice="' + a + '"]')[0]),
        d = this._series[b].data[a];
      c.toggleClass("hover"), d.isOuter && !joint.util.isEmpty(d.onHoverEffect) && this.effectOnSlice(c, d, d.onHoverEffect, !c.hasClass("hover"));
      var e = V(this.$('.legend-slice[data-serie="' + b + '"][data-slice="' + a + '"]')[0]);
      e && e.toggleClass("hover");
      var f = Object.keys(this.model.get("attrs")).filter(function(a) {
        return a.indexOf(".slice") > -1 || a.indexOf(".legend-slice") > -1
      });
      joint.dia.ElementView.prototype.update.call(this, this.model, joint.util.pick(this.model.get("attrs"), f))
    },
    onMouseOverSlice: function(a) {
      var b = V(a.currentTarget),
        c = b.attr("data-serie"),
        d = b.attr("data-slice");
      this.mouseOverSlice(d, c);
      var e = this._series[c].data[d];
      this.trigger(a.type, e, a)
    },
    clickSlice: function(a, b) {
      b = b || 0;
      var c = V(this.$('.slice[data-serie="' + b + '"][data-slice="' + a + '"]')[0]),
        d = this._series[b].data[a];
      d.isOuter && (c.hasClass("clicked") ? (c.removeClass("clicked"), this.model.get("series")[b].data[a].offset = 0, this.effectOnSlice(c, d, d.onClickEffect, !0)) : (c.addClass("clicked"), this.model.get("series")[b].data[a].offset = d.onClickEffect.offset, this.effectOnSlice(c, d, d.onClickEffect)))
    },
    onClickSlice: function(a) {
      var b = V($(a.target).closest(".slice.outer")[0]);
      if (b) {
        var c = b.attr("data-serie"),
          d = b.attr("data-slice");
        this.clickSlice(d, c);
        var e = this._series[c].data[d];
        this.trigger(a.type, e, a)
      }
    },
    onEventLegendItem: function(a) {
      var b = V($(a.target).closest(".legend-slice")[0]);
      if (b) {
        var c = b.attr("data-serie"),
          d = b.attr("data-slice");
        switch (a.type) {
          case "click":
            this.clickSlice(d, c);
            break;
          case "mouseover":
          case "mouseout":
            this.mouseOverSlice(d, c)
        }
      }
    },
    effectOnSlice: function(a, b, c, d) {
      switch (d = d || !1, c.type) {
        case "enlarge":
          d ? a.scale(1) : a.scale(c.scale || 1.05);
          break;
        case "offset":
          d ? a.translate(0, 0, {
            absolute: !0
          }) : a.translate(c.offset * Math.cos(-b.middleangle), -c.offset * Math.sin(-b.middleangle))
      }
    },
    svgArcMax: 2 * Math.PI - 1e-6,
    drawArc: function(a, b, c, d, e) {
      var f = 0,
        g = 1,
        h = e - d;
      return h > Math.PI && (f = 1, h >= this.svgArcMax && (f = 0, g = 0)), "M" + a.x + "," + a.y + " A" + c + "," + c + " 0 " + f + "," + g + " " + b.x + "," + b.y
    }
  }), joint.shapes.chart.Knob = joint.shapes.chart.Pie.extend({
    defaults: joint.util.deepSupplement({
      type: "chart.Knob",
      sliceDefaults: {
        legendLabel: "{value:.0f}",
        outer: {
          offsetOnClick: 0
        }
      },
      pieHole: .7,
      value: 0,
      attrs: {
        ".legend": {
          "ref-x": .5,
          "ref-y": .5,
          "ref-dx": null,
          "x-alignment": -.5,
          "y-alignment": -.5
        },
        ".legend-slice text": {
          "font-size": 30
        },
        ".legend-slice circle": {
          display: "none"
        },
        ".slice-inner-label": {
          display: "none"
        },
        ".slice-fill": {
          stroke: "none"
        }
      }
    }, joint.shapes.chart.Pie.prototype.defaults),
    initialize: function() {
      this.set("series", this.getKnobSeries(), {
        silent: !0
      }), joint.shapes.chart.Pie.prototype.initialize.apply(this, arguments), this.on("change:value change:min change:max change:fill", this.updateKnob, this)
    },
    getKnobSeries: function() {
      var a = Array.isArray(this.get("value")) ? this.get("value") : [this.get("value")],
        b = Array.isArray(this.get("fill")) ? this.get("fill") : [this.get("fill")],
        c = Array.isArray(this.get("min")) ? this.get("min") : [this.get("min")],
        d = Array.isArray(this.get("max")) ? this.get("max") : [this.get("max")],
        e = a.map(function(a, e) {
          var f = void 0 === c[e] ? c[0] : c[e],
            h = void 0 === d[e] ? d[0] : d[e],
            i = void 0 === b[e] ? b[0] : b[e];
          return {
            degree: g.scale.linear([f, h], [0, 360], a),
            data: [{
              value: a,
              fill: i
            }],
            showLegend: !(e > 0)
          }
        });
      return e
    },
    updateKnob: function() {
      this.set("series", this.getKnobSeries())
    }
  }), joint.shapes.chart.KnobView = joint.shapes.chart.PieView, joint.shapes.chart.Matrix = joint.shapes.basic.Generic.extend({
    markup: ['<g class="rotatable">', '<g class="scalable">', '<g class="background"><rect/></g>', '<g class="cells"/>', '<g class="foreground"/>', "</g>", '<g class="labels">', '<g class="rows"/>', '<g class="columns"/>', "</g>", "</g>"].join(""),
    cellMarkup: '<rect class="cell"/>',
    labelMarkup: '<text class="label"/>',
    gridLineMarkup: '<path class="grid-line"/>',
    defaults: joint.util.deepSupplement({
      type: "chart.Matrix",
      attrs: {
        ".background rect": {
          fill: "#eeeeee"
        },
        ".grid-line": {
          stroke: "white",
          "stroke-width": 2
        },
        ".label": {
          fill: "black",
          "alignment-baseline": "middle"
        },
        ".labels .rows .label": {
          "text-anchor": "end"
        },
        ".labels .columns .label": {
          "text-anchor": "start"
        }
      }
    }, joint.shapes.basic.Generic.prototype.defaults)
  }), joint.shapes.chart.MatrixView = joint.dia.ElementView.extend({
    initialize: function() {
      joint.dia.ElementView.prototype.initialize.apply(this, arguments), this.listenTo(this.model, "change:size", function() {
        this.renderLabels(), this.update()
      }), this.listenTo(this.model, "change:cells", function() {
        this.renderMarkup(), this.update()
      })
    },
    renderMarkup: function() {
      joint.dia.ElementView.prototype.renderMarkup.apply(this, arguments), this.elCells = this.$(".cells")[0], this.elRowLabels = this.$(".labels .rows")[0], this.elColumnLabels = this.$(".labels .columns")[0], this.elForeground = this.$(".foreground")[0], this.elCell = V(this.model.cellMarkup), this.elGridLine = V(this.model.gridLineMarkup);
      var a = this.model.get("cells") || [],
        b = this.model.get("size");
      this.elBackgroundRect = this.$(".background rect")[0], V(this.elBackgroundRect).attr(b);
      var c = b.height / a.length,
        d = b.width / a.length,
        e = document.createDocumentFragment();
      this.elCells.textContent = "", this.elForeground.textContent = "";
      for (var f, g, h, i, j, k = document.createDocumentFragment(), l = 0; l < a.length; l++) for (h = this.elGridLine.clone(), h.addClass("horizontal"), h.attr("d", "M 0 " + l * c + " " + b.width + " " + l * c), k.appendChild(h.node), f = a[l], g = 0; g < f.length; g++) 0 === l && (h = this.elGridLine.clone(), h.addClass("vertical"), h.attr("d", "M " + g * d + " 0 " + g * d + " " + b.height), k.appendChild(h.node)), i = f[g], i && (j = this.elCell.clone(), j.attr(joint.util.assign({
        x: g * d,
        y: l * c,
        width: d,
        height: c
      }, i)), e.appendChild(j.node));
      this.elForeground.appendChild(k), this.elCells.appendChild(e), this.renderLabels()
    },
    renderLabels: function() {
      this.elLabel = V(this.model.labelMarkup);
      var a, b, c = this.model.get("cells") || [],
        d = this.model.get("labels") || {},
        e = d.rows || [],
        f = d.columns || [],
        g = this.model.get("size"),
        h = g.height / c.length,
        i = g.width / c.length;
      this.elRowLabels.textContent = "", this.elColumnLabels.textContent = "";
      for (var j = document.createDocumentFragment(), k = 0; k < e.length; k++) a = d.rows[k], b = this.elLabel.clone(), b.text(a.text), b.attr(joint.util.assign({
        x: -(d.padding || 5),
        y: k * h + h / 2,
        "text-anchor": "end",
        "dominant-baseline": "central",
        "font-size": h,
        "data-row": k
      }, joint.util.omit(a, "text"))), j.appendChild(b.node);
      this.elRowLabels.appendChild(j);
      for (var l, m, n = document.createDocumentFragment(), o = 0; o < f.length; o++) a = d.columns[o], b = this.elLabel.clone(), l = o * i + i / 2, m = -(d.padding || 5), b.attr("x", l), b.text(a.text), b.attr(joint.util.assign({
        y: m,
        "text-anchor": "start",
        "dominant-baseline": "central",
        "font-size": i,
        "data-column": o
      }, joint.util.omit(a, "text"))), b.rotate(-90, l, m), n.appendChild(b.node);
      this.elColumnLabels.appendChild(n)
    }
  });
  joint.shapes.bpmn = {}, joint.shapes.bpmn.icons = {
    none: "",
    message: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik00NzkuOTk4LDY0SDMyQzE0LjMyOSw2NCwwLDc4LjMxMiwwLDk2djMyMGMwLDE3LjY4OCwxNC4zMjksMzIsMzIsMzJoNDQ3Ljk5OEM0OTcuNjcxLDQ0OCw1MTIsNDMzLjY4OCw1MTIsNDE2Vjk2ICBDNTEyLDc4LjMxMiw0OTcuNjcxLDY0LDQ3OS45OTgsNjR6IE00MTYsMTI4TDI1NiwyNTZMOTYsMTI4SDQxNnogTTQ0OCwzODRINjRWMTYwbDE5MiwxNjBsMTkyLTE2MFYzODR6Ii8+PC9zdmc+",
    plus: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLjUsMTRIMTR2OC41YzAsMC4yNzYtMC4yMjQsMC41LTAuNSwwLjVoLTRDOS4yMjQsMjMsOSwyMi43NzYsOSwyMi41VjE0SDAuNSAgQzAuMjI0LDE0LDAsMTMuNzc2LDAsMTMuNXYtNEMwLDkuMjI0LDAuMjI0LDksMC41LDlIOVYwLjVDOSwwLjIyNCw5LjIyNCwwLDkuNSwwaDRDMTMuNzc2LDAsMTQsMC4yMjQsMTQsMC41VjloOC41ICBDMjIuNzc2LDksMjMsOS4yMjQsMjMsOS41djRDMjMsMTMuNzc2LDIyLjc3NiwxNCwyMi41LDE0eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+",
    cross: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yMi4yNDUsNC4wMTVjMC4zMTMsMC4zMTMsMC4zMTMsMC44MjYsMCwxLjEzOWwtNi4yNzYsNi4yN2MtMC4zMTMsMC4zMTItMC4zMTMsMC44MjYsMCwxLjE0bDYuMjczLDYuMjcyICBjMC4zMTMsMC4zMTMsMC4zMTMsMC44MjYsMCwxLjE0bC0yLjI4NSwyLjI3N2MtMC4zMTQsMC4zMTItMC44MjgsMC4zMTItMS4xNDIsMGwtNi4yNzEtNi4yNzFjLTAuMzEzLTAuMzEzLTAuODI4LTAuMzEzLTEuMTQxLDAgIGwtNi4yNzYsNi4yNjdjLTAuMzEzLDAuMzEzLTAuODI4LDAuMzEzLTEuMTQxLDBsLTIuMjgyLTIuMjhjLTAuMzEzLTAuMzEzLTAuMzEzLTAuODI2LDAtMS4xNGw2LjI3OC02LjI2OSAgYzAuMzEzLTAuMzEyLDAuMzEzLTAuODI2LDAtMS4xNEwxLjcwOSw1LjE0N2MtMC4zMTQtMC4zMTMtMC4zMTQtMC44MjcsMC0xLjE0bDIuMjg0LTIuMjc4QzQuMzA4LDEuNDE3LDQuODIxLDEuNDE3LDUuMTM1LDEuNzMgIEwxMS40MDUsOGMwLjMxNCwwLjMxNCwwLjgyOCwwLjMxNCwxLjE0MSwwLjAwMWw2LjI3Ni02LjI2N2MwLjMxMi0wLjMxMiwwLjgyNi0wLjMxMiwxLjE0MSwwTDIyLjI0NSw0LjAxNXoiLz48L3N2Zz4=",
    user: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyLDIwLjk5OGgtMWMwLDAtMSwwLTEtMVYxNy41YzAtMC4yNzctMC4yMjQtMC41LTAuNS0wLjVTMTksMTcuMjIzLDE5LDE3LjUgIGwtMC4wMDgsNC4yOTVjMCwwLjYwOS0yLjAxLDIuMjA1LTYuNDkyLDIuMjA1cy02LjQ5Mi0xLjU5Ni02LjQ5Mi0yLjIwNUw2LDE3LjVDNiwxNy4yMjMsNS43NzYsMTcsNS41LDE3UzUsMTcuMjIzLDUsMTcuNXYyLjQ5OCAgYzAsMS0xLDEtMSwxSDNjMCwwLTEsMC0xLTFWMTUuNzVjMC0yLjkyMiwyLjg5Mi01LjQwMSw2LjkzLTYuMzQxYzAsMCwxLjIzNCwxLjEwNywzLjU3LDEuMTA3czMuNTctMS4xMDcsMy41Ny0xLjEwNyAgYzQuMDM4LDAuOTQsNi45MywzLjQxOSw2LjkzLDYuMzQxdjQuMjQ4QzIzLDIwLjk5OCwyMiwyMC45OTgsMjIsMjAuOTk4eiBNMTIuNDc3LDljLTIuNDg1LDAtNC41LTIuMDE1LTQuNS00LjVTOS45OTEsMCwxMi40NzcsMCAgczQuNSwyLjAxNSw0LjUsNC41UzE0Ljk2Miw5LDEyLjQ3Nyw5eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+",
    circle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gULEBE3DEP64QAAAwlJREFUaN7dmktrU0EUx38ZmmBbfEIL2hSjkYKC1EW6EDFudC+404/gE6WKSvGxERQfIH4AX1T9EOKrCrYurVrbgsZWoaBVixDbpC6ci+Fyz9ybZG478cBs7syc+Z+5c86c+c8ksCPrgW1ADtgEbARafG1+AW+AYWAIGADGWUTZAJwHxoD5GssocA7ILiTwLcADoFQHcH8pAfeB7jiBtwO3gLJF4P5S1mO02wa/C5iMEbi/TAI7bYE/Y3m5VLOs+sLAJULqrgKHIxhZBp4DT4FX2jkLGoinq1M7fg7YDmwFVATd14CjFboiy5UIs/QBOAmka/izaeCU1hE2zuVqlZ8IUfgVOAA0WViiTcBBrdM0Zm9UhTuAOYOiRzXOeJh0Ak8M484B+TAlK4BPBiU3gWSMoTqpw6g0fgFYblJww9D5dojT25IEcMeA47rUsdsQLp9FmPmURSNSOqpJS2lzUKd+ocN3IBNx5mz+oXXADwHTXX/jjMFxjy1iwtgrYJoF1lY27BMafozZaaMspYKA7XRlw7f1xt4Y5biA7bXXIGv4TW0OGNCmsQRhzCidlwTJADDlgAFTwAuhLq+AHqHyMe6IhKVHAV1C5ZBDBkhYupThPPreIQNGJTJBGXKLLw4Z8NmQu/Fb8PCkQwakBIxFRWPLvAJmhMpWh4AuFb7PKGBaqFzjkAGrhe/TSjNrQZJ1yAAJy5gCRoTKnEMGSFhGFDBoOBu7IhKWQe8wLRFLHQ6A7zCcFNNK59vvAjoqYK8DBuwTCLBhTUD8Hweahj9S2jjU297VqzrU26BVmi2yEjXRKg1PbHnpqYla7AeWxAi+GbhHHdSit2mYyN2XQQ5kQTJ6Y6qL3PUkCr2+H7v0+jcs0eueRLngGNeKa9mxY73g8JzpEtHusorAQ/7e+e7WUWIl//jSVTrK7QEu6KgW9d7tYr3B44iBWPJfkZZ8pZ4r2VngkC0HywMTLNwN5YSBcKtZWoGzernEBbyox2iJc6Np2KcGfnHisYet1CDouc2yCjbhp07MrD+3+QNxi4JkAscRswAAAABJRU5ErkJggg==",
    service: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB1RJREFUeNrMWltMVFcUHZAIRSAkSFACITRAVbQ/DVhHiRZC2y9jotFgqgmxKqShKdFCggZbEpP2h1Q/oLUg8GH0xy/LKwpDEEFsjKCM8kYkgAhTpggDMzCc7kX2mGF677w80J5khbnnntc+Zz/W2ReNxvsSQLhPWCBYGPhdTdjg7aBCCI/gVSfu+CHBfPz48ba7d+82AocOHfqT6mYIEV6Oua4CfE6YHxsbeyS49Pf3P6C6RYJ2vQTwVTtKHx+fXYRzhM0qTbYR/g4JCQmyVYSFhQXTHyMhUWXMzTzmTo3MorATHxH0eEXAriYrtCmNiop6tby8bLCdgNVqfR0ZGTlC735RaJ/EY+HhGSFhTVSIyg7CIO3mRHNzs44WOYydJuQQ/AjxhJ9hsFqt9qlwKElJSRB8nvAjIYYN+hucDMbCmMHBwZP03E/YLlUAKh8TnoSHh49NT0+vLG5paWk0JyfnPu9cJ8EUGho6cfTo0fbBwcFWRwH6+vpaYcy0yCk26Hb0zc7ObsFYaIOxaY5xqn9M2ClTgGw8wqM4LuzevXu6xMTEnitXrjTOz8/3Chfl7du3Ly5fvtyUkJDQrzRedXV1I2/KWZkCwCDrsMMWi+WV46Sk42+EhwV24VhnNpuHaY43NFct5pRtA7tw9BkZGQ/peVHIL+bDhw8/YrtKXJM4QOVrVNfV1TXKXr2d6mTK8EI+tk4KPrszNjY2mIJTiK+vb5iK+zX29vbqW1paLNRe7N271590PpF+hyq1hzpt3bpVTE5ODlDfFIU5FdfiTRxAkDKVlpY2QI2VVNvOHUIVXjJmUEcC6Rz7keGLffv2CdoMK5/AogzupCZA8aZNmwxkbEMKi18sKSmxqcF1QjohmgF6UYl3LPw7GxoYGBAbN24U+fn5puLi4qWqqqoBGdwJxZ+J2ZeEXF6U9dixYw+VdLi1tbWJF3/aycBn0aa9vb3J1q++vl4EBARAfYRM7oTSwpFzjjAeExMznJ6e/mRkZORfAoA20Mn8Re3KFAaD9zpH2MzP13GK1GcafSl+iIiICGEymd6Nh4BG7SbVNgNj8Zg7nQmwdPLkybahoaG22dnZbntu41i6u7sh7CzhM1fciZCKTUEf9M3KyhLJycnYBCGTO6FYmpqa3HKX5eXlDWysUW5wp0K0LSoqasvLyxP+/v7ixIkTQjZ3WhFAR8UbAdzgTmY/Pz9rfHy8KCgoEKOjo0I2d1pxzxhAr9e3GI3GZ87ogp0KpbriTrdv3+6ghS9XVlYaFxYWxFpxJ5QaltxMeAOOf+DAgQ4VI55mIy53hzuRx7GuNXfSsM5FwJURzhBK3HSjZ/8P3MmrQIYgxUJUcvDKx/OtW7c61ps7ObtSziHiqlEJ0AU+VqgfPI8lOjraajAYVNUGKgg7Kisra4RDwG9bnFAqZMTjcBBI3ziLA0ovQPL0cXFxg6STU84W1NPT8+DSpUtt8DY3btwwqqm2p9zJ1q+wsBAqC7uL9EQA3H+Fu+41NzdXkPELMmQhizvZeSc9bQ5OucAtATiKLsAPK+0KXCKIWW1trSBSJjIzM8EwxYULF4RM7mRf0tLSnrCX/JXwLW9CLPO4VVfKcHAj4kMvldwZ6ojzr5CywMBAsWXLFrFnz54VmjAxMSE84U4KQqziTvYFapqSktIJnkbtXjNvW+DU5ioB8vDIOrlq7Xfu3GmgINNHl47lixcvIiO3QszsuY273ElFgFXcSSVGTBFfew7eBv4GHucoAHz6Y+I1r23UgFRmED6e1QD8XZBOW7zlTk4EgE28rKioaHBnbNgnPJ+vw8UGrO8rcoVzdJ2MqKmp0ZEbC7l58yaSWacJn0LqoKCgcc1/XOg0nHqhBDt6XI+TsXvnNXdycQJpUCHouzOagTkxN9/mrKqZAE7QgloEOtR7zZ1cCFABRqpkxNgIMuKnmIsvQGaOJ9UepzLelzupjJnlzI2mpqZ28KKvcspHy2vY4I0AMrhTDOMLQhXeXbt2zftAJikd7yl3AmZAxXFK3lIJH08lUUo++aBSo+ki7vQBGaHTRBjdwJ7TghGENFqtNoAuPTvUEmFkDxN0Z7ZSkBymvlqltUj5DOQpd/Kk4HbG6pct5fuYp9xJQlk8depUK1/8P5EqgDvcydPV4g6gVMcutNmWd5IlgEvuhA8ixJl63LjU64uKinS4g+AW5niauE+wKn0vUwB3uNMcvM+RI0faQcKU0ioHDx60pVWMtmQWvj9jLFtaBXNwWmWXbBvYThiAO8TO8UIMHHAQaOIIPyEQ7d+/v9NRgN27d3exfv/AhG4D9zVgLIzJ7heJrW3SjdgVd7Jr8zsybfZUATyKU4tXVXKt9Txml2pqUdbXdDXuZPf+OySPkX+1CQBixtzmjEqfQL6tJaqtxU/ix3I9n4JaeUEInZmZGSHasVIxNTU1wx9TulTGNNGf35zN67eOFL6X4Hv+/Hkr3aN14PNEPYL5atgvjde4+1HBy3/PaXb49xwwzD/eZyP/EWAAQ3AUnjpOYHIAAAAASUVORK5CYII="
  }, joint.shapes.bpmn.IconInterface = {
    initialize: function() {
      this._parent = (this._parent || this).constructor.__super__, this._parent.initialize.apply(this, arguments), this.listenTo(this, "change:icon", this._onIconChange), this._onIconChange(this, this.get("icon") || "none")
    },
    _onIconChange: function(a, b) {
      var c = joint.shapes.bpmn.icons;
      if (!joint.util.has(c, b)) throw "BPMN: Unknown icon: " + b;
      a.attr("image/xlink:href", c[b])
    }
  }, joint.shapes.bpmn.SubProcessInterface = {
    initialize: function() {
      this._parent = (this._parent || this).constructor.__super__, this._parent.initialize.apply(this, arguments), this.listenTo(this, "change:subProcess", this._onSubProcessChange), this._onSubProcessChange(this, this.get("subProcess") || null)
    },
    _onSubProcessChange: function(a, b) {
      a.attr({
        ".sub-process": {
          visibility: b ? "visible" : "hidden",
          "data-sub-process": b || ""
        }
      })
    }
  }, joint.shapes.bpmn.ActivityView = joint.shapes.basic.TextBlockView, joint.shapes.bpmn.Activity = joint.shapes.basic.TextBlock.extend({
    markup: ['<g class="rotatable">', '<g class="scalable"><rect class="body outer"/><rect class="body inner"/></g>', joint.env.test("svgforeignobject") ? '<foreignObject class="fobj"><body xmlns="http://www.w3.org/1999/xhtml"><div class="content"/></body></foreignObject>' : '<text class="content"/>', '<path class="sub-process"/><image class="icon"/></g>'].join(""),
    defaults: joint.util.deepSupplement({
      size: {
        width: 100,
        height: 100
      },
      type: "bpmn.Activity",
      attrs: {
        rect: {
          rx: 8,
          ry: 8,
          width: 100,
          height: 100
        },
        ".body": {
          fill: "#ffffff",
          stroke: "#000000"
        },
        ".inner": {
          transform: "scale(0.9,0.9) translate(5,5)"
        },
        path: {
          d: "M 0 0 L 30 0 30 30 0 30 z M 15 4 L 15 26 M 4 15 L 26 15",
          ref: ".inner",
          "ref-x": .5,
          "ref-dy": -30,
          "x-alignment": "middle",
          stroke: "#000000",
          fill: "transparent"
        },
        image: {
          ref: ".inner",
          "ref-x": 5,
          width: 20,
          height: 20
        }
      },
      activityType: "task",
      subProcess: null
    }, joint.shapes.basic.TextBlock.prototype.defaults),
    initialize: function() {
      joint.shapes.basic.TextBlock.prototype.initialize.apply(this, arguments), this.listenTo(this, "change:activityType", this.onActivityTypeChange), this.listenTo(this, "change:subProcess", this.onSubProcessChange), this.onSubProcessChange(this, this.get("subProcess")), this.onActivityTypeChange(this, this.get("activityType"))
    },
    onActivityTypeChange: function(a, b) {
      switch (b) {
        case "task":
          a.attr({
            ".inner": {
              visibility: "hidden"
            },
            ".outer": {
              "stroke-width": 1,
              "stroke-dasharray": "none"
            },
            path: {
              ref: ".outer"
            },
            image: {
              ref: ".outer"
            }
          });
          break;
        case "transaction":
          a.attr({
            ".inner": {
              visibility: "visible"
            },
            ".outer": {
              "stroke-width": 1,
              "stroke-dasharray": "none"
            },
            path: {
              ref: ".inner"
            },
            image: {
              ref: ".inner"
            }
          });
          break;
        case "event-sub-process":
          a.attr({
            ".inner": {
              visibility: "hidden"
            },
            ".outer": {
              "stroke-width": 1,
              "stroke-dasharray": "1,2"
            },
            path: {
              ref: ".outer"
            },
            image: {
              ref: ".outer"
            }
          });
          break;
        case "call-activity":
          a.attr({
            ".inner": {
              visibility: "hidden"
            },
            ".outer": {
              "stroke-width": 5,
              "stroke-dasharray": "none"
            },
            path: {
              ref: ".outer"
            },
            image: {
              ref: ".outer"
            }
          });
          break;
        default:
          throw "BPMN: Unknown Activity Type: " + b
      }
    },
    onSubProcessChange: function(a, b) {
      b ? a.attr({
        ".fobj div": {
          style: {
            verticalAlign: "baseline",
            paddingTop: 10
          }
        },
        image: {
          "ref-dy": -25,
          "ref-y": ""
        },
        text: {
          "ref-y": 25
        }
      }) : a.attr({
        ".fobj div": {
          style: {
            verticalAlign: "middle",
            paddingTop: 0
          }
        },
        image: {
          "ref-dy": "",
          "ref-y": 5
        },
        text: {
          "ref-y": .5
        }
      })
    }
  }).extend(joint.shapes.bpmn.IconInterface).extend(joint.shapes.bpmn.SubProcessInterface), joint.shapes.bpmn.AnnotationView = joint.shapes.basic.TextBlockView, joint.shapes.bpmn.Annotation = joint.shapes.basic.TextBlock.extend({
    markup: ['<g class="rotatable">', '<g class="scalable"><rect class="body"/></g>', joint.env.test("svgforeignobject") ? '<foreignObject class="fobj"><body xmlns="http://www.w3.org/1999/xhtml"><div class="content"/></body></foreignObject>' : '<text class="content"/>', '<path class="stroke"/></g>'].join(""),
    defaults: joint.util.deepSupplement({
      size: {
        width: 100,
        height: 100
      },
      type: "bpmn.Annotation",
      attrs: {
        rect: {
          width: 100,
          height: 100
        },
        ".body": {
          "fill-opacity": .1,
          fill: "#ffffff",
          stroke: "none"
        },
        ".fobj div": {
          style: {
            textAlign: "left",
            paddingLeft: 10
          }
        },
        ".stroke": {
          stroke: "#000000",
          fill: "none",
          "stroke-width": 3
        }
      },
      wingLength: 20
    }, joint.shapes.basic.TextBlock.prototype.defaults),
    initialize: function() {
      joint.shapes.basic.TextBlock.prototype.initialize.apply(this, arguments), this.listenTo(this, "change:size", this.onSizeChange), this.onSizeChange(this, this.get("size"))
    },
    onSizeChange: function(a, b) {
      a.attr(".stroke", {
        d: a.getStrokePathData(b.width, b.height, a.get("wingLength"))
      })
    },
    getStrokePathData: function(a, b, c) {
      return c = Math.min(c, a), ["M", c, "0 L 0 0 0", b, c, b].join(" ")
    }
  }), joint.shapes.bpmn.Gateway = joint.dia.Element.extend({
    markup: '<g class="rotatable"><g class="scalable"><polygon class="body"/><image/></g></g><text class="label"/>',
    defaults: joint.util.deepSupplement({
      type: "bpmn.Gateway",
      size: {
        width: 80,
        height: 80
      },
      attrs: {
        ".body": {
          points: "40,0 80,40 40,80 0,40",
          fill: "#ffffff",
          stroke: "#000000"
        },
        ".label": {
          text: "",
          ref: ".body",
          "ref-x": .5,
          "ref-dy": 20,
          "y-alignment": "middle",
          "x-alignment": "middle",
          "font-size": 14,
          "font-family": "Arial, helvetica, sans-serif",
          fill: "#000000"
        },
        image: {
          width: 40,
          height: 40,
          "xlink:href": "",
          transform: "translate(20,20)"
        }
      }
    }, joint.dia.Element.prototype.defaults)
  }).extend(joint.shapes.bpmn.IconInterface), joint.shapes.bpmn.Event = joint.dia.Element.extend({
    markup: '<g class="rotatable"><g class="scalable"><circle class="body outer"/><circle class="body inner"/><image/></g><text class="label"/></g>',
    defaults: joint.util.deepSupplement({
      type: "bpmn.Event",
      size: {
        width: 60,
        height: 60
      },
      attrs: {
        ".body": {
          fill: "#ffffff",
          stroke: "#000000"
        },
        ".outer": {
          "stroke-width": 1,
          r: 30,
          transform: "translate(30,30)"
        },
        ".inner": {
          "stroke-width": 1,
          r: 26,
          transform: "translate(30,30)"
        },
        image: {
          width: 40,
          height: 40,
          "xlink:href": "",
          transform: "translate(10,10)"
        },
        ".label": {
          text: "",
          fill: "#000000",
          "font-family": "Arial",
          "font-size": 14,
          ref: ".outer",
          "ref-x": .5,
          "ref-dy": 20,
          "x-alignment": "middle",
          "y-alignment": "middle"
        }
      },
      eventType: "start"
    }, joint.dia.Element.prototype.defaults),
    initialize: function() {
      joint.dia.Element.prototype.initialize.apply(this, arguments), this.listenTo(this, "change:eventType", this.onEventTypeChange), this.onEventTypeChange(this, this.get("eventType"))
    },
    onEventTypeChange: function(a, b) {
      switch (b) {
        case "start":
          a.attr({
            ".inner": {
              visibility: "hidden"
            },
            ".outer": {
              "stroke-width": 1
            }
          });
          break;
        case "end":
          a.attr({
            ".inner": {
              visibility: "hidden"
            },
            ".outer": {
              "stroke-width": 5
            }
          });
          break;
        case "intermediate":
          a.attr({
            ".inner": {
              visibility: "visible"
            },
            ".outer": {
              "stroke-width": 1
            }
          });
          break;
        default:
          throw "BPMN: Unknown Event Type: " + b
      }
    }
  }).extend(joint.shapes.bpmn.IconInterface), joint.shapes.bpmn.Pool = joint.dia.Element.extend({
    markup: ['<g class="rotatable">', '<g class="scalable"><rect class="body"/></g>', '<svg overflow="hidden" class="blackbox-wrap"><text class="blackbox-label"/></svg>', '<rect class="header"/><text class="label"/>', '<g class="lanes"/>', "</g>"].join(""),
    laneMarkup: '<g class="lane"><rect class="lane-body"/><rect class="lane-header"/><text class="lane-label"/></g>',
    defaults: joint.util.deepSupplement({
      type: "bpmn.Pool",
      size: {
        width: 600,
        height: 300
      },
      attrs: {
        ".body": {
          fill: "#ffffff",
          stroke: "#000000",
          width: 500,
          height: 200,
          "pointer-events": "stroke"
        },
        ".header": {
          fill: "#ffffff",
          stroke: "#000000",
          width: 20,
          ref: ".body",
          "ref-height": 1,
          "pointer-events": "visiblePainted"
        },
        ".label": {
          fill: "#000000",
          transform: "rotate(-90)",
          ref: ".header",
          "ref-x": 10,
          "ref-y": .5,
          "font-family": "Arial",
          "font-size": 14,
          "x-alignment": "middle",
          "text-anchor": "middle"
        },
        ".lane-body": {
          fill: "#ffffff",
          stroke: "#000000",
          "pointer-events": "stroke"
        },
        ".lane-header": {
          fill: "#ffffff",
          stroke: "#000000",
          "pointer-events": "visiblePainted"
        },
        ".lane-label": {
          fill: "#000000",
          transform: "rotate(-90)",
          "text-anchor": "middle",
          "font-family": "Arial",
          "font-size": 13
        },
        ".blackbox-wrap": {
          ref: ".body",
          "ref-width": 1,
          "ref-height": 1
        },
        ".blackbox-label": {
          text: "Black Box",
          "text-anchor": "middle",
          transform: "translate(0,-7)"
        },
        ".blackbox-label > tspan": {
          dx: "50%",
          dy: "50%"
        }
      }
    }, joint.dia.Element.prototype.defaults)
  }), joint.shapes.bpmn.PoolView = joint.dia.ElementView.extend({
    options: {
      headerWidth: 20
    },
    initialize: function() {
      this.listenTo(this.model, "change:lanes", function(a, b) {
        this.renderLanes(b)
      }), joint.dia.ElementView.prototype.initialize.apply(this, arguments)
    },
    update: function() {
      return void 0 === this.lanesAttrs ? this.renderLanes(this.model.get("lanes")) : joint.dia.ElementView.prototype.update.call(this, this.model, joint.util.merge({}, this.model.get("attrs"), this.lanesAttrs || {}))
    },
    renderMarkup: function() {
      joint.dia.ElementView.prototype.renderMarkup.apply(this, arguments), this.$lanes = this.$(".lanes"), this.laneMarkup = V(this.model.laneMarkup)
    },
    renderLanes: function(a) {
      a = a || {}, this.index = 0;
      var b = void 0 === a.headerWidth ? this.options.headerWidth : a.headerWidth;
      this.lanesAttrs = {
        ".header": {
          width: b
        },
        ".label": {
          text: a.label || ""
        }
      }, this.$lanes.empty(), a.sublanes && this.renderSublanes(a.sublanes, b, 0, 1, "lanes"), this.update(this.model, joint.util.merge({}, this.model.get("attrs"), this.lanesAttrs))
    },
    calculateRatios: function(a, b) {
      for (var c = 0, d = [], e = [], f = 0, g = a.length; f < g; f++) {
        var h = a[f],
          i = h.ratio;
        Number.isFinite(i) ? (c += i / 10, e[f] = i / 10 / b) : d.push(f)
      }
      for (var j = Math.max(1 - c, 0) * b / d.length, k = 0, l = d.length; k < l; k++) e[d[k]] = j;
      return e
    },
    renderSublanes: function(a, b, c, d, e) {
      var f = this.options.headerWidth,
        g = e + "/sublanes/",
        h = this.calculateRatios(a, d);
      joint.util.toArray(a).reduce(function(a, d, e) {
        var i = "lane" + this.index,
          j = "." + i + " .lane-body",
          k = "." + i + " .lane-header",
          l = "." + i + " .lane-label";
        d.name && (i += " " + d.name);
        var m = g + e,
          n = this.laneMarkup.clone().addClass(i).attr({
            "data-lane-path": m,
            "data-lane-index": this.index
          });
        this.$lanes.append(n.node);
        var o = h[e],
          p = void 0 === d.headerWidth ? f : d.headerWidth,
          q = c + a;
        return this.lanesAttrs[j] = {
          ref: ".body",
          "ref-height": o,
          "ref-width": -b,
          "ref-x": b,
          "ref-y": q
        }, this.lanesAttrs[k] = {
          width: p,
          ref: ".body",
          "ref-height": o,
          "ref-x": b,
          "ref-y": q
        }, this.lanesAttrs[l] = {
          text: d.label,
          ref: k,
          "ref-x": 10,
          "ref-y": .5,
          "x-alignment": "middle"
        }, this.index++, d.sublanes && this.renderSublanes(d.sublanes, b + p, q, o, m), a + o
      }.bind(this), 0)
    }
  }), joint.shapes.bpmn.Group = joint.dia.Element.extend({
    markup: '<g class="rotatable"><g class="scalable"><rect class="body"/></g><rect class="label-rect"/><g class="label-group"><svg overflow="hidden" class="label-wrap"><text class="label"/></svg></g></g>',
    defaults: joint.util.deepSupplement({
      type: "bpmn.Group",
      size: {
        width: 200,
        height: 200
      },
      attrs: {
        ".body": {
          width: 200,
          height: 200,
          stroke: "#000000",
          "stroke-dasharray": "6,6",
          "stroke-width": 2,
          fill: "transparent",
          rx: 15,
          ry: 15,
          "pointer-events": "stroke"
        },
        ".label-rect": {
          ref: ".body",
          "ref-width": .6,
          "ref-x": .4,
          "ref-y": -30,
          height: 25,
          fill: "#ffffff",
          stroke: "#000000"
        },
        ".label-group": {
          ref: ".label-rect",
          "ref-x": 0,
          "ref-y": 0
        },
        ".label-wrap": {
          ref: ".label-rect",
          "ref-width": 1,
          "ref-height": 1
        },
        ".label": {
          text: "",
          x: "50%",
          y: "1.3em",
          "text-anchor": "middle",
          "font-family": "Arial",
          "font-size": 14,
          fill: "#000000"
        }
      }
    }, joint.dia.Element.prototype.defaults)
  }), joint.shapes.bpmn.DataObject = joint.dia.Element.extend({
    markup: '<g class="rotatable"><g class="scalable"><polygon class="body"/></g><text class="label"/></g>',
    defaults: joint.util.deepSupplement({
      type: "bpmn.DataObject",
      size: {
        width: 60,
        height: 80
      },
      attrs: {
        ".body": {
          points: "20,0 60,0 60,80 0,80 0,20 20,0 20,20 0,20",
          stroke: "#000000",
          fill: "#ffffff"
        },
        ".label": {
          ref: ".body",
          "ref-x": .5,
          "ref-dy": 5,
          text: "",
          "text-anchor": "middle"
        }
      }
    }, joint.dia.Element.prototype.defaults)
  }), joint.shapes.bpmn.Conversation = joint.dia.Element.extend({
    markup: '<g class="rotatable"><g class="scalable"><polygon class="body"/></g><text class="label"/><path class="sub-process"/></g>',
    defaults: joint.util.deepSupplement({
      type: "bpmn.Conversation",
      size: {
        width: 100,
        height: 100
      },
      attrs: {
        ".body": {
          points: "25,0 75,0 100,50 75,100 25,100 0,50",
          stroke: "#000000",
          fill: "#ffffff"
        },
        ".label": {
          text: "",
          ref: ".body",
          "ref-x": .5,
          "ref-dy": 5,
          "text-anchor": "middle"
        },
        path: {
          d: "M 0 0 L 30 0 30 30 0 30 z M 15 4 L 15 26 M 4 15 L 26 15",
          ref: ".body",
          "ref-x": .5,
          "ref-dy": -30,
          "x-alignment": "middle",
          fill: "#ffffff",
          stroke: "#000000",
          "fill-opacity": 0
        }
      },
      conversationType: "conversation"
    }, joint.dia.Element.prototype.defaults),
    initialize: function() {
      joint.dia.Element.prototype.initialize.apply(this, arguments), this.listenTo(this, "change:conversationType", this.onConversationTypeChange), this.onConversationTypeChange(this, this.get("conversationType"))
    },
    onConversationTypeChange: function(a, b) {
      switch (b) {
        case "conversation":
          a.attr("polygon/stroke-width", 1);
          break;
        case "call-conversation":
          a.attr("polygon/stroke-width", 4);
          break;
        default:
          throw "BPMN: Unknown Conversation Type: " + b
      }
    }
  }).extend(joint.shapes.bpmn.SubProcessInterface), joint.shapes.bpmn.Choreography = joint.shapes.basic.TextBlock.extend({
    markup: ['<g class="rotatable">', '<g class="scalable"><rect class="body"/></g>', joint.env.test("svgforeignobject") ? '<foreignObject class="fobj"><body xmlns="http://www.w3.org/1999/xhtml"><div class="content"/></body></foreignObject>' : '<text class="content"/>', '<text class="label"/><path class="sub-process"/><g class="participants"/>', "</g>"].join(""),
    participantMarkup: '<g class="participant"><rect class="participant-rect"/><text class="participant-label"/></g>',
    defaults: joint.util.deepSupplement({
      type: "bpmn.Choreography",
      size: {
        width: 60,
        height: 80
      },
      attrs: {
        rect: {},
        ".body": {
          width: 60,
          height: 80,
          stroke: "#000000",
          fill: "#ffffff"
        },
        ".label": {
          ref: ".body",
          "ref-x": .5,
          "ref-dy": 5,
          text: "",
          "text-anchor": "middle"
        },
        ".participant-rect": {
          stroke: "#000000",
          fill: "#aaaaaa",
          ref: ".body",
          "ref-width": 1
        },
        ".participant-label": {
          "text-anchor": "middle",
          ref: ".participant_0 .participant-rect",
          "ref-x": .5,
          "ref-y": .5,
          "y-alignment": "middle"
        },
        ".sub-process": {
          d: "M 0 0 L 30 0 30 30 0 30 z M 15 4 L 15 26 M 4 15 L 26 15",
          ref: ".body",
          "ref-x": .5,
          "ref-dy": -30,
          "x-alignment": "middle",
          fill: "transparent",
          stroke: "#000000"
        }
      },
      participants: [],
      initiatingParticipant: 0
    }, joint.shapes.basic.TextBlock.prototype.defaults)
  }).extend(joint.shapes.bpmn.SubProcessInterface), joint.shapes.bpmn.ChoreographyView = joint.shapes.basic.TextBlockView.extend({
    options: {
      participantHeight: 20
    },
    initialize: function() {
      this.listenTo(this.model, "change:participants", function(a, b) {
        this.renderParticipants(b)
      }), this.listenTo(this.model, "change:initiatingParticipant", this.layoutAndUpdate), joint.shapes.basic.TextBlockView.prototype.initialize.apply(this, arguments), joint.env.test("svgforeignobject") || this.stopListening(this.model, "change:content").listenTo(this.model, "change:content", function(a) {
        this.updateContent(a, this.participantsAttrs)
      })
    },
    update: function() {
      return void 0 === this.participantsAttrs ? this.renderParticipants(this.model.get("participants")) : (this.layoutAndUpdate(), this)
    },
    render: function() {
      this.participantsAttrs = void 0, joint.dia.ElementView.prototype.render.apply(this, arguments)
    },
    renderMarkup: function() {
      joint.dia.ElementView.prototype.renderMarkup.apply(this, arguments), this.$participants = this.$(".participants"), this.participantMarkup = V(this.model.participantMarkup)
    },
    renderParticipants: function(a) {
      this.$participants.empty(), this.participantsAttrs = {}, joint.util.toArray(a).forEach(function(a, b) {
        var c = "participant_" + b,
          d = "." + c;
        this.participantsAttrs[d + " .participant-rect"] = {
          height: this.options.participantHeight
        }, this.participantsAttrs[d + " .participant-label"] = {
          text: a
        }, this.$participants.append(this.participantMarkup.clone().addClass(c).node)
      }, this), this.layoutAndUpdate()
    },
    layoutAndUpdate: function() {
      var a = this.model.get("participants") || [],
        b = a.length,
        c = this.options.participantHeight,
        d = this.model.get("size").height,
        e = Math.max(0, d - c * b),
        f = 0,
        g = this.model.get("initiatingParticipant"),
        h = Math.max(joint.util.isNumber(g) ? Math.abs(g) : a.indexOf(g), 0),
        i = Math.min(h, b - 2);
      joint.util.toArray(a).forEach(function(a, b) {
        var d = ".participant_" + b;
        this.participantsAttrs[d] = {
          transform: "translate(0," + f + ")"
        }, this.participantsAttrs[d + " .participant-rect"].fill = h == b ? this.model.attr(".body/fill") : this.model.attr(".participant-rect/fill"), this.participantsAttrs[d + " .participant-rect"].stroke = h == b ? this.model.attr(".body/stroke") : this.model.attr(".participant-rect/stroke"), f += c + (i == b ? e : 0)
      }, this);
      var j = b < 2 ? 0 : i - b + 1;
      this.participantsAttrs[".sub-process"] = {
        "ref-dy": Math.max(-d, j * c - 30)
      };
      var k = b < 2 ? 0 : i + 1;
      this.participantsAttrs[".fobj div"] = {
        style: {
          height: e,
          paddingTop: c * k
        }
      }, this.participantsAttrs[".content"] = {
        "ref-y": c * k + e / 2
      };
      var l = joint.util.merge({}, this.model.get("attrs"), this.participantsAttrs || {});
      joint.util.unsetByPath(l, "div/html"), joint.shapes.basic.TextBlockView.prototype.update.call(this, this.model, l)
    }
  }), joint.shapes.bpmn.Message = joint.dia.Element.extend({
    markup: '<g class="rotatable"><g class="scalable"><polygon class="body"/></g><text class="label"/></g>',
    defaults: joint.util.deepSupplement({
      type: "bpmn.Message",
      size: {
        width: 60,
        height: 40
      },
      attrs: {
        ".body": {
          points: "0,0 60,0 60,40 0,40 0,0 60,0 30,20 0,0",
          stroke: "#000000",
          fill: "#ffffff"
        },
        ".label": {
          ref: ".body",
          "ref-x": .5,
          "ref-dy": 5,
          text: "",
          "text-anchor": "middle"
        }
      }
    }, joint.dia.Element.prototype.defaults)
  }), joint.shapes.bpmn.Flow = joint.dia.Link.extend({
    defaults: {
      type: "bpmn.Flow",
      attrs: {
        ".marker-source": {
          d: "M 0 0"
        },
        ".marker-target": {
          d: "M 10 0 L 0 5 L 10 10 z",
          fill: "#000000"
        },
        ".connection": {
          "stroke-dasharray": " ",
          "stroke-width": 1
        },
        ".connection-wrap": {
          style: "",
          onMouseOver: "",
          onMouseOut: ""
        }
      },
      flowType: "normal"
    },
    initialize: function() {
      joint.dia.Link.prototype.initialize.apply(this, arguments), this.listenTo(this, "change:flowType", this.onFlowTypeChange), this.onFlowTypeChange(this, this.get("flowType"))
    },
    onFlowTypeChange: function(a, b) {
      var c;
      switch (b) {
        case "default":
          c = {
            ".marker-source": {
              d: "M 0 5 L 20 5 M 20 0 L 10 10",
              fill: "none"
            }
          };
          break;
        case "conditional":
          c = {
            ".marker-source": {
              d: "M 20 8 L 10 0 L 0 8 L 10 16 z",
              fill: "#FFF"
            }
          };
          break;
        case "normal":
          c = {};
          break;
        case "message":
          c = {
            ".marker-target": {
              fill: "#FFF"
            },
            ".connection": {
              "stroke-dasharray": "4,4"
            }
          };
          break;
        case "association":
          c = {
            ".marker-target": {
              d: "M 0 0"
            },
            ".connection": {
              "stroke-dasharray": "4,4"
            }
          };
          break;
        case "conversation":
          c = {
            ".marker-target": {
              d: "M 0 0"
            },
            ".connection": {
              "stroke-width": "7px"
            },
            ".connection-wrap": {
              style: "stroke: #fff; stroke-width: 5px; opacity: 1;",
              onMouseOver: "var s=this.style;s.stroke='#000';s.strokeWidth=15;s.opacity=.4",
              onMouseOut: "var s=this.style;s.stroke='#fff';s.strokeWidth=5;s.opacity=1"
            }
          };
          break;
        default:
          throw "BPMN: Unknown Flow Type: " + b
      }
      a.attr(joint.util.merge({}, this.defaults.attrs, c))
    }
  });
  joint.dia.CommandManager = Backbone.Model.extend({
    defaults: {
      cmdBeforeAdd: null,
      cmdNameRegex: /^(?:add|remove|change:\w+)$/,
      applyOptionsList: ["propertyPath"],
      revertOptionsList: ["propertyPath"]
    },
    PREFIX_LENGTH: 7,
    initialize: function(a) {
      joint.util.bindAll(this, "initBatchCommand", "storeBatchCommand"), this.graph = a.graph, this.reset(), this.listen()
    },
    listen: function() {
      this.listenTo(this.graph, "all", this.addCommand, this), this.listenTo(this.graph, "batch:start", this.initBatchCommand, this), this.listenTo(this.graph, "batch:stop", this.storeBatchCommand, this)
    },
    createCommand: function(a) {
      var b = {
        action: void 0,
        data: {
          id: void 0,
          type: void 0,
          previous: {},
          next: {}
        },
        batch: a && a.batch
      };
      return b
    },
    push: function(a) {
      this.redoStack = [], a.batch ? (this.lastCmdIndex = Math.max(this.lastCmdIndex, 0), this.trigger("batch", a)) : (this.undoStack.push(a), this.trigger("add", a))
    },
    addCommand: function(a, b, c, d) {
      if ((!d || !d.dry) && this.get("cmdNameRegex").test(a) && ("function" != typeof this.get("cmdBeforeAdd") || this.get("cmdBeforeAdd").apply(this, arguments))) {
        var e = void 0,
          f = b instanceof joint.dia.Graph;
        if (this.batchCommand) {
          e = this.batchCommand[Math.max(this.lastCmdIndex, 0)];
          var g = f && !e.graphChange || e.data.id !== b.id,
            h = e.action !== a;
          if (this.lastCmdIndex >= 0 && (g || h)) {
            var i = this.batchCommand.findIndex(function(c, d) {
              return (f && c.graphChange || c.data.id === b.id) && c.action === a
            });
            i < 0 || "add" === a || "remove" === a ? e = this.createCommand({
              batch: !0
            }) : (e = this.batchCommand[i], this.batchCommand.splice(i, 1)), this.lastCmdIndex = this.batchCommand.push(e) - 1
          }
        } else e = this.createCommand({
          batch: !1
        });
        if ("add" === a || "remove" === a) return e.action = a, e.data.id = b.id, e.data.type = b.attributes.type, e.data.attributes = joint.util.merge({}, b.toJSON()), e.options = d || {}, void this.push(e);
        var j = a.substr(this.PREFIX_LENGTH);
        e.batch && e.action || (e.action = a, e.data.previous[j] = joint.util.clone(b.previous(j)), e.options = d || {}, f ? e.graphChange = !0 : (e.data.id = b.id, e.data.type = b.attributes.type)), e.data.next[j] = joint.util.clone(b.get(j)), this.push(e)
      }
    },
    initBatchCommand: function() {
      this.batchCommand ? this.batchLevel++ : (this.batchCommand = [this.createCommand({
        batch: !0
      })], this.lastCmdIndex = -1, this.batchLevel = 0)
    },
    storeBatchCommand: function() {
      if (this.batchCommand && this.batchLevel <= 0) {
        var a = this.filterBatchCommand(this.batchCommand);
        a.length > 0 && (this.redoStack = [], this.undoStack.push(a), this.trigger("add", a)), this.batchCommand = null, this.lastCmdIndex = null, this.batchLevel = null
      } else this.batchCommand && this.batchLevel > 0 && this.batchLevel--
    },
    filterBatchCommand: function(a) {
      for (var b = a.slice(), c = []; b.length > 0;) {
        var d = b.shift(),
          e = d.data.id;
        if (null != d.action && (null != e || d.graphChange)) {
          if ("add" === d.action) {
            var f = b.findIndex(function(a) {
              return "remove" === a.action && a.data && a.data.id === e
            });
            if (f >= 0) {
              b = b.filter(function(a, b) {
                return b > f || a.data.id !== e
              });
              continue
            }
          } else if ("remove" === d.action) {
            var g = b.findIndex(function(a) {
              return "add" === a.action && a.data && a.data.id == e
            });
            if (g >= 0) {
              b.splice(g, 1);
              continue
            }
          } else if (0 === d.action.indexOf("change") && joint.util.isEqual(d.data.previous, d.data.next)) continue;
          c.push(d)
        }
      }
      return c
    },
    revertCommand: function(a, b) {
      this.stopListening();
      var c;
      c = Array.isArray(a) ? this.constructor.sortBatchCommands(a) : [a];
      for (var d = this.graph, e = c.length - 1; e >= 0; e--) {
        var f = c[e],
          g = f.graphChange ? d : d.getCell(f.data.id),
          h = joint.util.assign({
            commandManager: this.id || this.cid
          }, b, joint.util.pick(f.options, this.get("revertOptionsList")));
        switch (f.action) {
          case "add":
            g.remove(h);
            break;
          case "remove":
            d.addCell(f.data.attributes, h);
            break;
          default:
            var i = f.action.substr(this.PREFIX_LENGTH);
            g.set(i, f.data.previous[i], h)
        }
      }
      this.listen()
    },
    applyCommand: function(a, b) {
      this.stopListening();
      var c;
      c = Array.isArray(a) ? this.constructor.sortBatchCommands(a) : [a];
      for (var d = this.graph, e = 0; e < c.length; e++) {
        var f = c[e],
          g = f.graphChange ? d : d.getCell(f.data.id),
          h = joint.util.assign({
            commandManager: this.id || this.cid
          }, b, joint.util.pick(f.options, this.get("applyOptionsList")));
        switch (f.action) {
          case "add":
            d.addCell(f.data.attributes, h);
            break;
          case "remove":
            g.remove(h);
            break;
          default:
            var i = f.action.substr(this.PREFIX_LENGTH);
            g.set(i, f.data.next[i], h)
        }
      }
      this.listen()
    },
    undo: function(a) {
      var b = this.undoStack.pop();
      b && (this.revertCommand(b, a), this.redoStack.push(b))
    },
    redo: function(a) {
      var b = this.redoStack.pop();
      b && (this.applyCommand(b, a), this.undoStack.push(b))
    },
    cancel: function(a) {
      this.hasUndo() && (this.revertCommand(this.undoStack.pop(), a), this.redoStack = [])
    },
    reset: function() {
      this.undoStack = [], this.redoStack = []
    },
    hasUndo: function() {
      return this.undoStack.length > 0
    },
    hasRedo: function() {
      return this.redoStack.length > 0
    }
  }, {
    sortBatchCommands: function(a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c],
          e = null;
        if ("add" === d.action) for (var f = d.data.id, g = 0; g < c; g++) if (a[g].data.id === f) {
          e = g - 1;
          break
        }
        null !== e ? b.splice(e, 0, d) : b.push(d)
      }
      return b
    }
  });
  joint.dia.Validator = Backbone.Model.extend({
    initialize: function(a) {
      this._map = {}, this._commandManager = a.commandManager, this.listenTo(this._commandManager, "add", this._onCommand)
    },
    defaults: {
      cancelInvalid: !0
    },
    _onCommand: function(a) {
      return Array.isArray(a) ? a.find(function(a) {
        return !this._validateCommand(a)
      }, this) : this._validateCommand(a)
    },
    _validateCommand: function(a) {
      if (a.options && a.options.validation === !1) return !0;
      var b;
      return joint.util.toArray(this._map[a.action]).forEach(function(c) {
        function d(f) {
          var g = c[e++];
          try {
            if (!g) return void(b = f);
            g(f, a, d)
          } catch (f) {
            d(f)
          }
        }
        var e = 0;
        d(b)
      }), !b || (this.get("cancelInvalid") && this._commandManager.cancel(), this.trigger("invalid", b), !1)
    },
    validate: function(a) {
      var b = Array.prototype.slice.call(arguments, 1);
      return b.forEach(function(b) {
        if (!joint.util.isFunction(b)) throw new Error(a + " requires callback functions.")
      }), a.split(" ").forEach(function(a) {
        (this._map[a] = this._map[a] || []).push(b)
      }, this), this
    }
  });
  joint.dia.Graph.prototype.constructTree = function(a, b, c, d) {
    d = d || [];
    var e = joint.util.isFunction(b.children) ? b.children(a) : a[b.children || "children"];
    return c || (c = b.makeElement(a), d.push(c)), joint.util.toArray(e).forEach(function(a) {
      var e = b.makeElement(a),
        f = b.makeLink(c, e);
      d.push(e, f), this.constructTree(a, b, e, d)
    }, this), d
  }, joint.dia.Graph.prototype.shortestPath = function(a, b, c) {
    c = c || {};
    var d = {};
    this.getLinks().forEach(function(a) {
      var b = a.get("source").id,
        e = a.get("target").id;
      d[b] || (d[b] = []), d[e] || (d[e] = []), d[b].push(e), c.directed || d[e].push(b)
    });
    var e = joint.alg.Dijkstra(d, a.id || a, c.weight),
      f = [],
      g = b.id || b;
    for (e[g] && f.push(g); g = e[g];) f.unshift(g);
    return f
  };
  joint.ui.PaperScroller = joint.mvc.View.extend({
    className: "paper-scroller",
    options: {
      paper: void 0,
      padding: function() {
        var a = Math.max(this.options.minVisiblePaperSize, 1) || 1,
          b = {};
        return b.left = b.right = Math.max(this.el.clientWidth - a, 0), b.top = b.bottom = Math.max(this.el.clientHeight - a, 0), b
      },
      minVisiblePaperSize: 50,
      autoResizePaper: !1,
      baseWidth: void 0,
      baseHeight: void 0,
      contentOptions: void 0,
      cursor: "default"
    },
    _padding: {
      left: 0,
      top: 0
    },
    init: function() {
      joint.util.bindAll(this, "startPanning", "stopPanning", "pan", "onBackgroundEvent");
      var a = this.options.paper,
        b = a.scale();
      this._sx = b.sx, this._sy = b.sy, void 0 === this.options.baseWidth && (this.options.baseWidth = a.options.width), void 0 === this.options.baseHeight && (this.options.baseHeight = a.options.height), this.$background = $("<div/>").addClass("paper-scroller-background").css({
        width: a.options.width,
        height: a.options.height
      }).append(a.el).appendTo(this.el), this.listenTo(a, "scale", this.onScale).listenTo(a, "resize", this.onResize).listenTo(a, "beforeprint beforeexport", this.storeScrollPosition).listenTo(a, "afterprint afterexport", this.restoreScrollPosition), this.options.autoResizePaper && (this.listenTo(a.model, "change add remove reset", this.adjustPaper), a.options.async && this.listenTo(a, "render:done", this.adjustPaper)), this.delegateBackgroundEvents(), this.setCursor(this.options.cursor)
    },
    lock: function() {
      return this.$el.css("overflow", "hidden"), this
    },
    unlock: function() {
      return this.$el.css("overflow", "scroll"), this
    },
    setCursor: function(a) {
      switch (a) {
        case "grab":
          this.$el.css("cursor", "");
          break;
        default:
          this.$el.css("cursor", a)
      }
      return this.$el.attr("data-cursor", a), this.options.cursor = a, this
    },
    delegateBackgroundEvents: function(a) {
      function b(b, c) {
        var d = a[c];
        return c.indexOf(" ") === -1 && (b[c] = joint.util.isFunction(d) ? d : this.options.paper[d]), b
      }
      function c(a) {
        this.delegate(a, {
          guarded: !1
        }, this.onBackgroundEvent)
      }
      a || (a = joint.util.result(this.options.paper, "events"));
      var d = this.paperEvents = Object.keys(a || {}).reduce(b.bind(this), {});
      return Object.keys(d).forEach(c, this), this
    },
    onBackgroundEvent: function(a) {
      if (this.$background.is(a.target)) {
        var b = this.paperEvents[a.type];
        joint.util.isFunction(b) && b.apply(this.options.paper, arguments)
      }
    },
    onResize: function() {
      this._center && this.center(this._center.x, this._center.y)
    },
    onScale: function(a, b, c, d) {
      this.adjustScale(a, b), this._sx = a, this._sy = b, (c || d) && this.center(c, d)
    },
    storeScrollPosition: function() {
      this._scrollLeftBeforePrint = this.el.scrollLeft, this._scrollTopBeforePrint = this.el.scrollTop
    },
    restoreScrollPosition: function() {
      this.el.scrollLeft = this._scrollLeftBeforePrint, this.el.scrollTop = this._scrollTopBeforePrint, this._scrollLeftBeforePrint = null, this._scrollTopBeforePrint = null
    },
    beforePaperManipulation: function() {
      (joint.env.test("msie") || joint.env.test("msedge")) && this.$el.css("visibility", "hidden")
    },
    afterPaperManipulation: function() {
      (joint.env.test("msie") || joint.env.test("msedge")) && this.$el.css("visibility", "visible")
    },
    clientToLocalPoint: function(a, b) {
      var c = this.options.paper.matrix();
      return a += this.el.scrollLeft - this._padding.left - c.e, a /= c.a, b += this.el.scrollTop - this._padding.top - c.f, b /= c.d, g.point(a, b)
    },
    localToBackgroundPoint: function(a, b) {
      var c = g.Point(a, b),
        d = this.options.paper.matrix(),
        e = this._padding;
      return V.transformPoint(c, d).offset(e.left, e.top)
    },
    adjustPaper: function() {
      this._center = this.clientToLocalPoint(this.el.clientWidth / 2, this.el.clientHeight / 2);
      var a = joint.util.assign({
        gridWidth: this.options.baseWidth,
        gridHeight: this.options.baseHeight,
        allowNewOrigin: "negative"
      }, this.options.contentOptions);
      return this.options.paper.fitToContent(this.transformContentOptions(a)), this
    },
    adjustScale: function(a, b) {
      var c = this.options.paper.options,
        d = a / this._sx,
        e = b / this._sy;
      this.options.paper.setOrigin(c.origin.x * d, c.origin.y * e), this.options.paper.setDimensions(c.width * d, c.height * e)
    },
    transformContentOptions: function(a) {
      var b = this._sx,
        c = this._sy;
      return a.gridWidth && (a.gridWidth *= b), a.gridHeight && (a.gridHeight *= c), a.minWidth && (a.minWidth *= b), a.minHeight && (a.minHeight *= c), joint.util.isObject(a.padding) ? a.padding = {
        left: (a.padding.left || 0) * b,
        right: (a.padding.right || 0) * b,
        top: (a.padding.top || 0) * c,
        bottom: (a.padding.bottom || 0) * c
      } : joint.util.isNumber(a.padding) && (a.padding = a.padding * b), a
    },
    center: function(a, b, c) {
      var d = this.options.paper.matrix(),
        e = -d.e,
        f = -d.f,
        g = e + this.options.paper.options.width,
        h = f + this.options.paper.options.height;
      void 0 === a || void 0 === b ? (a = (e + g) / 2, b = (f + h) / 2) : (a *= d.a, b *= d.d);
      var i = this.getPadding(),
        j = this.el.clientWidth / 2,
        k = this.el.clientHeight / 2,
        l = j - i.left - a + e,
        m = j - i.right + a - g,
        n = k - i.top - b + f,
        o = k - i.bottom + b - h;
      return this.addPadding(Math.max(l, 0), Math.max(m, 0), Math.max(n, 0), Math.max(o, 0)), this.scroll(a, b, void 0 !== c ? c : a || null), this
    },
    centerContent: function(a) {
      var b = V(this.options.paper.viewport).bbox(!0, this.options.paper.svg);
      return this.center(b.x + b.width / 2, b.y + b.height / 2, a), this
    },
    centerElement: function(a) {
      this.checkElement(a, "centerElement");
      var b = a.getBBox().center();
      return this.center(b.x, b.y)
    },
    scroll: function(a, b, c) {
      var d = this.options.paper.matrix(),
        e = {};
      if (joint.util.isNumber(a)) {
        var f = this.el.clientWidth / 2;
        e.scrollLeft = a - f + d.e + (this._padding.left || 0)
      }
      if (joint.util.isNumber(b)) {
        var g = this.el.clientHeight / 2;
        e.scrollTop = b - g + d.f + (this._padding.top || 0)
      }
      c && c.animation ? this.$el.animate(e, c.animation) : this.$el.prop(e)
    },
    scrollToElement: function(a, b) {
      this.checkElement(a, "scrollToElement");
      var c = a.getBBox().center(),
        d = this._sx,
        e = this._sy;
      return c.x *= d, c.y *= e, this.scroll(c.x, c.y, b)
    },
    addPadding: function(a, b, c, d) {
      var e = this.getPadding(),
        f = this._padding = {
          left: Math.round(e.left + (a || 0)),
          top: Math.round(e.top + (c || 0)),
          bottom: Math.round(e.bottom + (d || 0)),
          right: Math.round(e.right + (b || 0))
        };
      return this.$background.css({
        width: f.left + this.options.paper.options.width + f.right,
        height: f.top + this.options.paper.options.height + f.bottom
      }), this.options.paper.$el.css({
        left: f.left,
        top: f.top
      }), this
    },
    zoom: function(a, b) {
      if (void 0 === a) return this._sx;
      b = b || {};
      var c, d, e = this.clientToLocalPoint(this.el.clientWidth / 2, this.el.clientHeight / 2),
        f = a,
        g = a;
      if (b.absolute || (f += this._sx, g += this._sy), b.grid && (f = Math.round(f / b.grid) * b.grid, g = Math.round(g / b.grid) * b.grid), b.max && (f = Math.min(b.max, f), g = Math.min(b.max, g)), b.min && (f = Math.max(b.min, f), g = Math.max(b.min, g)), void 0 === b.ox || void 0 === b.oy) c = e.x, d = e.y;
      else {
        var h = f / this._sx,
          i = g / this._sy;
        c = b.ox - (b.ox - e.x) / h, d = b.oy - (b.oy - e.y) / i
      }
      return this.beforePaperManipulation(), this.options.paper.scale(f, g), this.center(c, d), this.afterPaperManipulation(), this
    },
    zoomToFit: function(a) {
      a = a || {};
      var b = this.options.paper,
        c = joint.util.assign({}, b.options.origin);
      return a.fittingBBox = a.fittingBBox || joint.util.assign({}, g.point(c), {
          width: this.$el.width(),
          height: this.$el.height()
        }), this.beforePaperManipulation(), b.scaleContentToFit(a), b.setOrigin(c.x, c.y), this.adjustPaper().centerContent(), this.afterPaperManipulation(), this
    },
    transitionClassName: "transition-in-progress",
    transitionEventName: "transitionend.paper-scroller-transition",
    transitionToPoint: function(a, b, c) {
      joint.util.isObject(a) && (c = b, b = a.y, a = a.x), c || (c = {});
      var d, e, f = this._sx,
        h = Math.max(c.scale || f, 1e-6),
        i = g.Point(a, b),
        j = this.clientToLocalPoint(this.el.clientWidth / 2, this.el.clientHeight / 2);
      if (f === h) {
        var k = j.difference(i).scale(f, f).round();
        d = "translate(" + k.x + "px," + k.y + "px)"
      } else {
        var l = h / (f - h) * i.distance(j),
          m = j.clone().move(i, l),
          n = this.localToBackgroundPoint(m).round();
        d = "scale(" + h / f + ")", e = n.x + "px " + n.y + "px"
      }
      return this.$el.addClass(this.transitionClassName), this.$background.off(this.transitionEventName).on(this.transitionEventName, function(a) {
        var b = this.paperScroller;
        b.syncTransition(this.scale, {
          x: this.x,
          y: this.y
        });
        var c = this.onTransitionEnd;
        joint.util.isFunction(c) && c.call(b, a)
      }.bind({
        paperScroller: this,
        scale: h,
        x: a,
        y: b,
        onTransitionEnd: c.onTransitionEnd
      })).css({
        transition: "transform",
        transitionDuration: c.duration || "1s",
        transitionDelay: c.delay,
        transitionTimingFunction: c.timingFunction,
        transformOrigin: e,
        transform: d
      }), this
    },
    syncTransition: function(a, b) {
      return this.beforePaperManipulation(), this.options.paper.scale(a), this.removeTransition().center(b.x, b.y), this.afterPaperManipulation(), this
    },
    removeTransition: function() {
      return this.$el.removeClass(this.transitionClassName), this.$background.off(this.transitionEventName).css({
        transition: "",
        transitionDuration: "",
        transitionDelay: "",
        transitionTimingFunction: "",
        transform: "",
        transformOrigin: ""
      }), this
    },
    transitionToRect: function(a, b) {
      a = g.Rect(a), b || (b = {});
      var c = b.maxScale || 1 / 0,
        d = b.minScale || Number.MIN_VALUE,
        e = b.scaleGrid || null,
        f = b.visibility || 1,
        h = b.center ? g.Point(b.center) : a.center(),
        i = this.el.clientWidth * f,
        j = this.el.clientHeight * f,
        k = g.Rect({
          x: h.x - i / 2,
          y: h.y - j / 2,
          width: i,
          height: j
        }),
        l = k.maxRectUniformScaleToFit(a, h);
      return l = Math.min(l, c), e && (l = Math.floor(l / e) * e), l = Math.max(d, l), this.transitionToPoint(h, joint.util.defaults({
        scale: l
      }, b))
    },
    startPanning: function(a) {
      a = joint.util.normalizeEvent(a), this._clientX = a.clientX, this._clientY = a.clientY, this.$el.addClass("is-panning"), this.trigger("pan:start", a), $(document.body).on({
        "mousemove.panning touchmove.panning": this.pan,
        "mouseup.panning touchend.panning": this.stopPanning
      }), $(window).on("mouseup.panning", this.stopPanning)
    },
    pan: function(a) {
      a = joint.util.normalizeEvent(a);
      var b = a.clientX - this._clientX,
        c = a.clientY - this._clientY;
      this.el.scrollTop -= c, this.el.scrollLeft -= b, this._clientX = a.clientX, this._clientY = a.clientY
    },
    stopPanning: function(a) {
      $(document.body).off(".panning"), $(window).off(".panning"), this.$el.removeClass("is-panning"), this.trigger("pan:stop", a)
    },
    getPadding: function() {
      var a = this.options.padding;
      return joint.util.isFunction(a) && (a = a.call(this)), joint.util.normalizeSides(a)
    },
    getVisibleArea: function() {
      var a = this.options.paper.matrix(),
        b = {
          x: this.el.scrollLeft || 0,
          y: this.el.scrollTop || 0,
          width: this.el.clientWidth,
          height: this.el.clientHeight
        },
        c = V.transformRect(b, a.inverse());
      return c.x -= (this._padding.left || 0) / this._sx, c.y -= (this._padding.top || 0) / this._sy, g.rect(c)
    },
    isElementVisible: function(a, b) {
      this.checkElement(a, "isElementVisible"), b = b || {};
      var c = b.strict ? "containsRect" : "intersect";
      return !!this.getVisibleArea()[c](a.getBBox())
    },
    isPointVisible: function(a) {
      return this.getVisibleArea().containsPoint(a)
    },
    checkElement: function(a, b) {
      if (!(a && a instanceof joint.dia.Element)) throw new TypeError("ui.PaperScroller." + b + "() accepts instance of joint.dia.Element only")
    },
    onRemove: function() {
      this.stopPanning()
    }
  }), joint.env.addTest("msie", function() {
    var a = window.navigator.userAgent;
    return a.indexOf("MSIE") !== -1 || a.indexOf("Trident") !== -1
  }), joint.env.addTest("msedge", function() {
    return /Edge\/\d+/.test(window.navigator.userAgent)
  });
  joint.ui.Selection = joint.mvc.View.extend({
    options: {
      paper: void 0,
      graph: void 0,
      boxContent: function(a) {
        return joint.util.template("<%= length %> elements selected.")({
          length: this.model.length
        })
      },
      handles: [{
        name: "remove",
        position: "nw",
        events: {
          pointerdown: "removeElements"
        }
      }, {
        name: "rotate",
        position: "sw",
        events: {
          pointerdown: "startRotating",
          pointermove: "doRotate",
          pointerup: "stopBatch"
        }
      }, {
        name: "resize",
        position: "se",
        events: {
          pointerdown: "startResizing",
          pointermove: "doResize",
          pointerup: "stopBatch"
        }
      }],
      useModelGeometry: !1,
      strictSelection: !1,
      rotateAngleGrid: 15,
      allowTranslate: !0
    },
    className: "selection",
    events: {
      "mousedown .selection-box": "onSelectionBoxPointerDown",
      "touchstart .selection-box": "onSelectionBoxPointerDown",
      "mousedown .handle": "onHandlePointerDown",
      "touchstart .handle": "onHandlePointerDown"
    },
    init: function() {
      this.options.model && (this.options.collection = this.options.model);
      var a = this.collection = this.options.collection || this.collection || new Backbone.Collection;
      if (a.comparator || (a.comparator = this.constructor.depthComparator, a.sort()), this.model = a, !this.options.paper) throw new Error("Selection: paper required");
      joint.util.defaults(this.options, {
        graph: this.options.paper.model
      }), joint.util.bindAll(this, "startSelecting", "stopSelecting", "adjustSelection", "pointerup"), $(document.body).on("mousemove.selection touchmove.selection", this.adjustSelection), $(document).on("mouseup.selection touchend.selection", this.pointerup);
      var b = this.options.paper,
        c = this.options.graph;
      this.listenTo(c, "reset", this.cancelSelection), this.listenTo(b, "scale translate", this.updateSelectionBoxes), this.listenTo(c, "remove change", function(a, b) {
        b.selection !== this.cid && this.updateSelectionBoxes()
      }), this.listenTo(a, "remove", this.onRemoveElement), this.listenTo(a, "reset", this.onResetElements), this.listenTo(a, "add", this.onAddElement), b.$el.append(this.$el), this._boxCount = 0, this.$selectionWrapper = this.createSelectionWrapper(), this.handles = [], joint.util.toArray(this.options.handles).forEach(this.addHandle, this)
    },
    cancelSelection: function() {
      this.model.reset([], {
        ui: !0
      })
    },
    addHandle: function(a) {
      this.handles.push(a);
      var b = $("<div/>", {
        "class": "handle " + (a.position || "") + " " + (a.name || ""),
        "data-action": a.name
      });
      return a.icon && b.css("background-image", "url(" + a.icon + ")"), b.html(a.content || ""), joint.util.setAttributesBySelector(b, a.attrs), this.$selectionWrapper.append(b), joint.util.forIn(a.events, function(b, c) {
        joint.util.isString(b) ? this.on("action:" + a.name + ":" + c, this[b], this) : this.on("action:" + a.name + ":" + c, b)
      }.bind(this)), this
    },
    stopSelecting: function(a) {
      var b, c = this.options.paper;
      switch (this._action) {
        case "selecting":
          var d = this.$el.offset(),
            e = this.$el.width(),
            f = this.$el.height();
          b = c.pageToLocalPoint(d.left, d.top);
          var h = c.scale();
          e /= h.sx, f /= h.sy;
          var i = g.rect(b.x, b.y, e, f),
            j = this.getElementsInSelectedArea(i),
            k = this.options.filter;
          Array.isArray(k) ? j = j.filter(function(a) {
            return !k.includes(a.model) && !k.includes(a.model.get("type"))
          }) : joint.util.isFunction(k) && (j = j.filter(function(a) {
              return !k(a.model)
            }));
          var l = j.map(function(a) {
            return a.model
          });
          this.model.reset(l, {
            ui: !0
          });
          break;
        case "translating":
          this.options.graph.stopBatch("selection-translate"), b = c.snapToGrid({
            x: a.clientX,
            y: a.clientY
          }), this.notify("selection-box:pointerup", a, b.x, b.y);
          break;
        default:
          this._action || this.cancelSelection()
      }
      this._action = null
    },
    removeHandle: function(a) {
      var b = joint.util.toArray(this.handles).findIndex(function(b) {
          return b.name === a
        }),
        c = this.handles[b];
      return c && (joint.util.forIn(c.events, function(b, c) {
        this.off("action:" + a + ":" + c)
      }.bind(this)), this.$(".handle." + a).remove(), this.handles.splice(b, 1)), this
    },
    startSelecting: function(a) {
      a = joint.util.normalizeEvent(a), this.cancelSelection();
      var b, c, d = this.options.paper.el;
      if (null != a.offsetX && null != a.offsetY && $.contains(d, a.target)) b = a.offsetX, c = a.offsetY;
      else {
        var e = $(d).offset(),
          f = d.scrollLeft,
          g = d.scrollTop;
        b = a.clientX - e.left + window.pageXOffset + f, c = a.clientY - e.top + window.pageYOffset + g
      }
      this.$el.css({
        width: 1,
        height: 1,
        left: b,
        top: c
      }), this.showLasso(), this._action = "selecting", this._clientX = a.clientX, this._clientY = a.clientY, this._offsetX = b, this._offsetY = c
    },
    changeHandle: function(a, b) {
      var c = joint.util.toArray(this.handles).find(function(b) {
        return b && b.name === a
      });
      return c && (this.removeHandle(a), this.addHandle(joint.util.merge({
        name: a
      }, c, b))), this
    },
    onSelectionBoxPointerDown: function(a) {
      a.stopPropagation(), a = joint.util.normalizeEvent(a), this.options.allowTranslate && this.startTranslatingSelection(a), this._activeElementView = this.getCellView(a.target);
      var b = this.options.paper.snapToGrid({
        x: a.clientX,
        y: a.clientY
      });
      this.notify("selection-box:pointerdown", a, b.x, b.y)
    },
    startTranslatingSelection: function(a) {
      this._action = "translating", this.options.graph.startBatch("selection-translate");
      var b = this.options.paper.snapToGrid({
        x: a.clientX,
        y: a.clientY
      });
      this._snappedClientX = b.x, this._snappedClientY = b.y
    },
    adjustSelection: function(a) {
      a = joint.util.normalizeEvent(a);
      var b, c;
      switch (this._action) {
        case "selecting":
          b = a.clientX - this._clientX, c = a.clientY - this._clientY;
          var d = parseInt(this.$el.css("left"), 10),
            e = parseInt(this.$el.css("top"), 10);
          this.$el.css({
            left: b < 0 ? this._offsetX + b : d,
            top: c < 0 ? this._offsetY + c : e,
            width: Math.abs(b),
            height: Math.abs(c)
          });
          break;
        case "translating":
          var f = this.options.paper.snapToGrid({
              x: a.clientX,
              y: a.clientY
            }),
            g = f.x,
            h = f.y;
          if (b = g - this._snappedClientX, c = h - this._snappedClientY, b || c) {
            if (this.translateSelectedElements(b, c), this.boxesUpdated) this.model.length > 1 && this.updateSelectionBoxes();
            else {
              var i = this.options.paper.scale();
              this.$el.children(".selection-box").add(this.$selectionWrapper).css({
                left: "+=" + b * i.sx,
                top: "+=" + c * i.sy
              })
            }
            this._snappedClientX = g, this._snappedClientY = h
          }
          this.notify("selection-box:pointermove", a, g, h);
          break;
        default:
          this._action && this.pointermove(a)
      }
      this.boxesUpdated = !1
    },
    translateSelectedElements: function(a, b) {
      var c = {};
      this.model.each(function(d) {
        if (!c[d.id]) {
          var e = {
            selection: this.cid
          };
          d.translate(a, b, e), d.getEmbeddedCells({
            deep: !0
          }).forEach(function(a) {
            c[a.id] = !0
          });
          var f = this.options.graph.getConnectedLinks(d);
          f.forEach(function(d) {
            c[d.id] || (d.translate(a, b, e), c[d.id] = !0)
          })
        }
      }.bind(this))
    },
    notify: function(a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      this.trigger.apply(this, [a, this._activeElementView].concat(c))
    },
    getElementsInSelectedArea: function(a) {
      var b = this.options.paper,
        c = {
          strict: this.options.strictSelection
        };
      if (this.options.useModelGeometry) {
        var d = b.model.findModelsInArea(a, c);
        return d.map(b.findViewByModel, b).filter(function(a) {
          return !!a
        })
      }
      return b.findViewsInArea(a, c)
    },
    pointerup: function(a) {
      this._action && (this.triggerAction(this._action, "pointerup", a), this.stopSelecting(a), this._activeElementView = null, this._action = null)
    },
    destroySelectionBox: function(a) {
      this.$('[data-model="' + a.get("id") + '"]').remove(), 0 === this.$el.children(".selection-box").length && this.hide(), this._boxCount = Math.max(0, this._boxCount - 1)
    },
    hide: function() {
      this.$el.removeClass("lasso selected")
    },
    showSelected: function() {
      this.$el.addClass("selected")
    },
    showLasso: function() {
      this.$el.addClass("lasso")
    },
    destroyAllSelectionBoxes: function() {
      this.hide(), this.$el.children(".selection-box").remove(), this._boxCount = 0
    },
    createSelectionBox: function(a) {
      var b = a.findView(this.options.paper);
      if (b) {
        var c = b.getBBox({
          useModelGeometry: this.options.useModelGeometry
        });
        $("<div/>").addClass("selection-box").attr("data-model", a.get("id")).css({
          left: c.x,
          top: c.y,
          width: c.width,
          height: c.height
        }).appendTo(this.el), this.showSelected(), this._boxCount++
      }
    },
    createSelectionWrapper: function() {
      var a = $("<div/>", {
          "class": "selection-wrapper"
        }),
        b = $("<div/>", {
          "class": "box"
        });
      return a.append(b), a.attr("data-selection-length", this.model.length), this.$el.prepend(a), a
    },
    updateSelectionWrapper: function() {
      var a = {
          x: 1 / 0,
          y: 1 / 0
        },
        b = {
          x: 0,
          y: 0
        };
      if (this.model.each(function(c) {
          var d = this.options.paper.findViewByModel(c);
          if (d) {
            var e = d.getBBox({
              useModelGeometry: this.options.useModelGeometry
            });
            a.x = Math.min(a.x, e.x), a.y = Math.min(a.y, e.y), b.x = Math.max(b.x, e.x + e.width), b.y = Math.max(b.y, e.y + e.height)
          }
        }.bind(this)), this.$selectionWrapper.css({
          left: a.x,
          top: a.y,
          width: b.x - a.x,
          height: b.y - a.y
        }).attr("data-selection-length", this.model.length), joint.util.isFunction(this.options.boxContent)) {
        var c = this.$(".box"),
          d = this.options.boxContent.call(this, c[0]);
        d && c.html(d)
      }
    },
    updateSelectionBoxes: function() {
      if (this._boxCount) {
        this.hide();
        for (var a = this.$el.children(".selection-box"), b = 0, c = a.length; b < c; b++) {
          var d = a[b],
            e = $(d).remove().attr("data-model"),
            f = this.model.get(e);
          f && this.createSelectionBox(f)
        }
        this.updateSelectionWrapper(), this.boxesUpdated = !0
      }
    },
    onRemove: function() {
      $(document.body).off(".selection", this.adjustSelection), $(document).off(".selection", this.pointerup)
    },
    onHandlePointerDown: function(a) {
      this._action = $(a.target).closest(".handle").attr("data-action"), this._action && (a.preventDefault(), a.stopPropagation(), a = joint.util.normalizeEvent(a), this._clientX = a.clientX, this._clientY = a.clientY, this._startClientX = this._clientX, this._startClientY = this._clientY, this.triggerAction(this._action, "pointerdown", a))
    },
    getCellView: function(a) {
      var b = this.model.get(a.getAttribute("data-model"));
      return b && b.findView(this.options.paper)
    },
    pointermove: function(a) {
      if (this._action) {
        var b = this.options.paper.snapToGrid({
            x: a.clientX,
            y: a.clientY
          }),
          c = this.options.paper.snapToGrid({
            x: this._clientX,
            y: this._clientY
          }),
          d = b.x - c.x,
          e = b.y - c.y;
        this.triggerAction(this._action, "pointermove", a, d, e, a.clientX - this._startClientX, a.clientY - this._startClientY), this._clientX = a.clientX, this._clientY = a.clientY
      }
    },
    triggerAction: function(a, b, c) {
      var d = Array.prototype.slice.call(arguments, 2);
      d.unshift("action:" + a + ":" + b), this.trigger.apply(this, d)
    },
    onRemoveElement: function(a) {
      this.destroySelectionBox(a), this.updateSelectionWrapper()
    },
    onResetElements: function(a) {
      this.destroyAllSelectionBoxes(), a.each(this.createSelectionBox.bind(this)), this.updateSelectionWrapper()
    },
    onAddElement: function(a) {
      this.createSelectionBox(a), this.updateSelectionWrapper()
    },
    removeElements: function(a) {
      var b = this.collection.toArray();
      this.cancelSelection(), this.options.graph.removeCells(b, {
        selection: this.cid
      })
    },
    startRotating: function(a) {
      this.options.graph.trigger("batch:start");
      var b = this.options.graph.getBBox(this.model.models).center(),
        c = this.options.paper.snapToGrid({
          x: a.clientX,
          y: a.clientY
        }),
        d = this.model.toArray().reduce(function(a, b) {
          return a[b.id] = g.normalizeAngle(b.get("angle") || 0), a
        }, {});
      this._rotation = {
        center: b,
        clientAngle: g.point(c).theta(b),
        initialAngles: d
      }
    },
    startResizing: function(a) {
      var b = this.options.paper,
        c = this.options.graph,
        d = b.options.gridSize,
        e = this.model.toArray(),
        f = c.getBBox(e),
        g = joint.util.invoke(e, "getBBox"),
        h = g.reduce(function(a, b) {
          return b.width < a ? b.width : a
        }, 1 / 0),
        i = g.reduce(function(a, b) {
          return b.height < a ? b.height : a
        }, 1 / 0);
      this._resize = {
        cells: c.getSubgraph(e),
        bbox: f,
        minWidth: d * f.width / h,
        minHeight: d * f.height / i
      }, c.trigger("batch:start")
    },
    doResize: function(a, b, c) {
      var d = this._resize,
        e = d.bbox,
        f = e.width,
        g = e.height,
        h = Math.max(f + b, d.minWidth),
        i = Math.max(g + c, d.minHeight);
      (Math.abs(f - h) > .001 || Math.abs(g - i) > .001) && (this.options.graph.resizeCells(h, i, d.cells, {
        selection: this.cid
      }), e.width = h, e.height = i, this.updateSelectionBoxes())
    },
    doRotate: function(a) {
      var b = this._rotation,
        c = this.options.rotateAngleGrid,
        d = this.options.paper.snapToGrid({
          x: a.clientX,
          y: a.clientY
        }),
        e = b.clientAngle - g.point(d).theta(b.center);
      Math.abs(e) > .001 && (this.model.each(function(a) {
        var d = g.snapToGrid(b.initialAngles[a.id] + e, c);
        a.rotate(d, !0, b.center, {
          selection: this.cid
        })
      }, this), this.updateSelectionBoxes())
    },
    stopBatch: function() {
      this.options.graph.trigger("batch:stop")
    },
    getAction: function() {
      return this._action
    }
  }, {
    depthComparator: function(a) {
      return a.getAncestors().length
    }
  }), joint.ui.SelectionView = joint.ui.Selection;
  joint.ui.Clipboard = Backbone.Collection.extend({
    LOCAL_STORAGE_KEY: "joint.ui.Clipboard.cells",
    defaults: {
      useLocalStorage: !0
    },
    copyElements: function(a, b, c) {
      this.options = joint.util.assign({}, this.defaults, c), c = this.options;
      var d = a.toArray(),
        e = joint.util.sortBy(b.cloneSubgraph(d, c), function(a) {
          return a.isLink() ? 2 : 1
        });
      return this.reset(e), c.useLocalStorage && window.localStorage && localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.toJSON())), d
    },
    cutElements: function(a, b, c) {
      var d = this.copyElements(a, b, c);
      return b.trigger("batch:start", {
        batchName: "cut"
      }), joint.util.invoke(d, "remove"), b.trigger("batch:stop", {
        batchName: "cut"
      }), d
    },
    pasteCells: function(a, b) {
      if (b = joint.util.defaults(b || {}, this.options), b.useLocalStorage && this.isEmpty() && window.localStorage) {
        var c = {
            cells: JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY))
          },
          d = (new joint.dia.Graph).fromJSON(c, {
            sort: !1
          });
        this.reset(d.getCells())
      }
      var e = this.map(function(a) {
        return this.modifyCell(a, b)
      }.bind(this));
      return a.trigger("batch:start", {
        batchName: "paste"
      }), a.addCells(e), a.trigger("batch:stop", {
        batchName: "paste"
      }), this.copyElements(this, a), e
    },
    clear: function() {
      this.options = {}, this.reset([]), window.localStorage && localStorage.removeItem(this.LOCAL_STORAGE_KEY)
    },
    modifyCell: function(a, b) {
      return a.unset("z"), a.isLink() && b.link && a.set(b.link), b.translate && a.translate(b.translate.dx || 20, b.translate.dy || 20), a.collection = null, a
    }
  });
  !
    function(a) {
      "use strict";
      var b = function() {
        this.options = {
          handles: [{
            name: "remove",
            position: "nw",
            events: {
              pointerdown: "removeElement"
            },
            icon: null
          }, {
            name: "direction",
            position: "se",
            events: {
              pointerdown: "directionSwap"
            },
            icon: null
          }],
          bbox: function(a) {
            var b = .5 * a.getConnectionLength();
            return a.getPointAtLength(b)
          },
          typeCssName: "type-link",
          tinyThreshold: -1,
          smallThreshold: -1,
          boxContent: !1
        }
      };
      b.prototype.directionSwap = function() {
        var a = this.options.cellView.model;
        a.set({
          source: a.get("target"),
          target: a.get("source")
        }, {
          halo: this.cid
        })
      };
      var c = function() {
        this.options = {
          handles: [{
            name: "remove",
            position: "nw",
            events: {
              pointerdown: "removeElement"
            },
            icon: null
          }, {
            name: "resize",
            position: "se",
            events: {
              pointerdown: "startResizing",
              pointermove: "doResize",
              pointerup: "stopBatch"
            },
            icon: null
          }, {
            name: "clone",
            position: "n",
            events: {
              pointerdown: "startCloning",
              pointermove: "doClone",
              pointerup: "stopCloning"
            },
            icon: null
          }, {
            name: "link",
            position: "e",
            events: {
              pointerdown: "startLinking",
              pointermove: "doLink",
              pointerup: "stopLinking"
            },
            icon: null
          }, {
            name: "fork",
            position: "ne",
            events: {
              pointerdown: "startForking",
              pointermove: "doFork",
              pointerup: "stopForking"
            },
            icon: null
          }, {
            name: "unlink",
            position: "w",
            events: {
              pointerdown: "unlinkElement"
            },
            icon: null
          }, {
            name: "rotate",
            position: "sw",
            events: {
              pointerdown: "startRotating",
              pointermove: "doRotate",
              pointerup: "stopBatch"
            },
            icon: null
          }],
          bbox: function(a, b) {
            return a.getBBox({
              useModelGeometry: b.options.useModelGeometry
            })
          },
          typeCssName: "type-element",
          tinyThreshold: 40,
          smallThreshold: 80,
          boxContent: function(b, c) {
            var d = a.util.template("x: <%= x %>, y: <%= y %>, width: <%= width %>, height: <%= height %>, angle: <%= angle %>"),
              e = b.model,
              f = e.getBBox();
            return d({
              x: Math.floor(f.x),
              y: Math.floor(f.y),
              width: Math.floor(f.width),
              height: Math.floor(f.height),
              angle: Math.floor(e.get("angle") || 0)
            })
          },
          magnet: function(a) {
            return a.el
          },
          loopLinkPreferredSide: "top",
          loopLinkWidth: 40,
          rotateAngleGrid: 15,
          linkAttributes: {},
          smoothLinks: void 0
        }
      };
      c.prototype.startLinking = function(a, b, c) {
        this.startBatch();
        var d = this.options,
          e = d.paper,
          f = d.graph,
          g = this.createLinkConnectedToSource();
        g.set({
          target: {
            x: b,
            y: c
          }
        }).addTo(f, {
          validation: !1,
          halo: this.cid,
          async: !1
        });
        var h = this._linkView = g.findView(e);
        h.startArrowheadMove("target", {
          whenNotAllowed: "remove"
        })
      }, c.prototype.startForking = function(b, c, d) {
        var e = this.options,
          f = e.paper,
          g = e.graph;
        this.startBatch();
        var h = e.clone(e.cellView.model, {
          fork: !0
        });
        if (!(h instanceof a.dia.Cell)) throw new Error('ui.Halo: option "clone" has to return a cell.');
        this.centerElementAtCursor(h, c, d), h.addTo(g, {
          halo: this.cid,
          async: !1
        });
        var i = this.createLinkConnectedToSource(),
          j = this._cloneView = h.findView(f),
          k = this.getElementMagnet(j, "target"),
          l = this.getLinkEnd(j, k);
        i.set("target", l).addTo(g, {
          halo: this.cid,
          async: !1
        }), j.pointerdown(b, c, d)
      }, c.prototype.getElementMagnet = function(b, c) {
        var d = this.options.magnet;
        if (a.util.isFunction(d)) {
          var e = d.call(this, b, c);
          if (e instanceof SVGElement) return e
        }
        throw new Error("ui.Halo: magnet() has to return an SVGElement.")
      }, c.prototype.getLinkEnd = function(a, b) {
        var c = {
          id: a.model.id
        };
        if (b !== a.el) {
          var d = b.getAttribute("port");
          d ? c.port = d : c.selector = a.getSelector(b)
        }
        return c
      }, c.prototype.createLinkConnectedToSource = function() {
        var b = this.options,
          c = b.paper,
          d = b.cellView,
          e = this.getElementMagnet(d, "source"),
          f = this.getLinkEnd(d, e),
          g = c.getDefaultLink(d, e).set("source", f);
        return g.attr(b.linkAttributes), a.util.isBoolean(b.smoothLinks) && g.set("smooth", b.smoothLinks), g
      }, c.prototype.startResizing = function(a) {
        this.startBatch(), this._flip = [1, 0, 0, 1, 1, 0, 0, 1][Math.floor(g.normalizeAngle(this.options.cellView.model.get("angle")) / 45)]
      }, c.prototype.startRotating = function(a, b, c) {
        this.startBatch();
        var d = this.options.cellView.model.getBBox().center(),
          e = g.normalizeAngle(this.options.cellView.model.get("angle"));
        this._center = d, this._rotationStartAngle = e || 0, this._clientStartAngle = g.point(b, c).theta(d)
      }, c.prototype.doResize = function(a, b, c, d, e) {
        var f = this.options.cellView.model.get("size"),
          g = Math.max(f.width + (this._flip ? d : e), 1),
          h = Math.max(f.height + (this._flip ? e : d), 1);
        this.options.cellView.model.resize(g, h, {
          absolute: !0
        })
      }, c.prototype.doRotate = function(a, b, c) {
        var d = this._clientStartAngle - g.point(b, c).theta(this._center),
          e = g.snapToGrid(this._rotationStartAngle + d, this.options.rotateAngleGrid);
        this.options.cellView.model.rotate(e, !0)
      }, c.prototype.doClone = function(a, b, c) {
        var d = this._cloneView;
        d && d.pointermove(a, b, c)
      }, c.prototype.startCloning = function(b, c, d) {
        var e = this.options;
        this.startBatch();
        var f = e.clone(e.cellView.model, {
          clone: !0
        });
        if (!(f instanceof a.dia.Cell)) throw new Error('ui.Halo: option "clone" has to return a cell.');
        this.centerElementAtCursor(f, c, d), f.addTo(e.graph, {
          halo: this.cid,
          async: !1
        }), this._cloneView = f.findView(e.paper), this._cloneView.pointerdown(b, c, d)
      }, c.prototype.centerElementAtCursor = function(a, b, c) {
        var d = a.getBBox().center(),
          e = b - d.x,
          f = c - d.y;
        a.translate(e, f)
      }, c.prototype.doFork = function(a, b, c) {
        var d = this._cloneView;
        d && d.pointermove(a, b, c)
      }, c.prototype.doLink = function(a, b, c) {
        this._linkView && this._linkView.pointermove(a, b, c)
      }, c.prototype.stopLinking = function(a) {
        this._linkView && (this._linkView.pointerup(a), this._linkView.model.hasLoop() && this.makeLoopLink(this._linkView.model), this.stopBatch(), this.triggerAction("link", "add", this._linkView.model), this._linkView = null)
      }, c.prototype.stopForking = function(a, b, c) {
        var d = this._cloneView;
        d && d.pointerup(a, b, c), this.stopBatch()
      }, c.prototype.stopCloning = function(a, b, c) {
        var d = this._cloneView;
        d && d.pointerup(a, b, c), this.stopBatch()
      }, c.prototype.unlinkElement = function(a) {
        this.startBatch(), this.options.graph.removeLinks(this.options.cellView.model), this.stopBatch()
      }, c.prototype.makeLoopLink = function(b) {
        var c, d, e = this.options.loopLinkWidth,
          f = this.options.paper.options,
          h = g.rect({
            x: 0,
            y: 0,
            width: f.width,
            height: f.height
          }),
          i = V(this.options.cellView.el).bbox(!1, this.options.paper.viewport),
          j = a.util.uniq([this.options.loopLinkPreferredSide, "top", "bottom", "left", "right"]),
          k = j.find(function(a) {
            var b, f = 0,
              j = 0;
            switch (a) {
              case "top":
                b = g.point(i.x + i.width / 2, i.y - e), f = e / 2;
                break;
              case "bottom":
                b = g.point(i.x + i.width / 2, i.y + i.height + e), f = e / 2;
                break;
              case "left":
                b = g.point(i.x - e, i.y + i.height / 2), j = e / 2;
                break;
              case "right":
                b = g.point(i.x + i.width + e, i.y + i.height / 2), j = e / 2
            }
            return c = g.point(b).offset(-f, -j), d = g.point(b).offset(f, j), h.containsPoint(c) && h.containsPoint(d)
          }, this);
        k && b.set("vertices", [c, d])
      }, a.ui.Halo = a.mvc.View.extend({
        PIE_INNER_RADIUS: 20,
        PIE_OUTER_RADIUS: 50,
        className: "halo",
        events: {
          "mousedown .handle": "onHandlePointerDown",
          "touchstart .handle": "onHandlePointerDown",
          "mousedown .pie-toggle": "onPieTogglePointerDown",
          "touchstart .pie-toggle": "onPieTogglePointerDown"
        },
        options: {
          clearAll: !0,
          clearOnBlankPointerdown: !0,
          useModelGeometry: !1,
          clone: function(a, b) {
            return a.clone().unset("z")
          },
          type: "surrounding",
          pieSliceAngle: 45,
          pieStartAngleOffset: 0,
          pieIconSize: 14,
          pieToggles: [{
            name: "default",
            position: "e"
          }]
        },
        init: function() {
          var d = this.options,
            e = d.cellView,
            f = e.model,
            g = f.isLink() ? new b : new c;
          a.util.assign(this, a.util.omit(g, "options"));
          var h = e.paper,
            i = h.model;
          a.util.defaults(d, g.options, {
            paper: h,
            graph: i
          }), a.util.bindAll(this, "pointermove", "pointerup", "render", "update"), d.clearAll && this.constructor.clear(h), this.listenTo(i, "reset", this.remove), this.listenTo(f, "remove", this.remove), this.listenTo(h, "halo:create", this.remove), d.clearOnBlankPointerdown && this.listenTo(h, "blank:pointerdown", this.remove), this.listenTo(i, "all", this.update), this.listenTo(h, "scale translate", this.update), $(document.body).on("mousemove touchmove", this.pointermove), $(document).on("mouseup touchend", this.pointerup), this.handles = [], a.util.toArray(d.handles).forEach(this.addHandle, this)
        },
        render: function() {
          var b = this.options;
          switch (this.$el.empty(), this.$handles = $("<div/>").addClass("handles").appendTo(this.el), this.$box = $("<label/>").addClass("box").appendTo(this.el), this.$pieToggles = {}, this.$el.addClass(b.type), this.$el.addClass(this.cellTypeCssClass()), this.$el.attr("data-type", b.cellView.model.get("type")), this.$handles.append(a.util.toArray(this.handles).map(this.renderHandle, this)), b.type) {
            case "toolbar":
            case "surrounding":
              this.hasHandle("fork") && this.toggleFork();
              break;
            case "pie":
              a.util.toArray(this.options.pieToggles).forEach(function(b) {
                var c = $("<div/>");
                c.addClass("pie-toggle " + (b.position || "e")), c.attr("data-name", b.name), a.util.setAttributesBySelector(c, b.attrs), c.appendTo(this.el), this.$pieToggles[b.name] = c
              }, this);
              break;
            default:
              throw new Error("ui.Halo: unknown type")
          }
          return this.update(), this.$el.addClass("animate").appendTo(b.paper.el), this.setPieIcons(), this
        },
        setPieIcons: function() {
          "pie" === this.options.type && this.$el.find(".handle").each(function(a, b) {
            var c, d = $(b),
              e = d.attr("data-action"),
              f = this.getHandle(e);
            if (!f || !f.icon) {
              var g = window.getComputedStyle(b, ":before").getPropertyValue("content");
              g && "none" !== g && (c = d.find(".slice-text-icon"), c.length > 0 && V(c[0]).text(g.replace(/['"]/g, "")));
              var h = d.css("background-image");
              if (h) {
                var i = h.match(/url\(['"]?([^'"]+)['"]?\)/);
                if (i) {
                  var j = i[1];
                  c = d.find(".slice-img-icon"), c.length > 0 && V(c[0]).attr("xlink:href", j)
                }
              }
            }
          }.bind(this))
        },
        update: function() {
          if (this.isRendered()) {
            this.updateBoxContent();
            var a = this.getBBox();
            this.$el.toggleClass("tiny", a.width < this.options.tinyThreshold && a.height < this.options.tinyThreshold), this.$el.toggleClass("small", !this.$el.hasClass("tiny") && a.width < this.options.smallThreshold && a.height < this.options.smallThreshold), this.$el.css({
              width: a.width,
              height: a.height,
              left: a.x,
              top: a.y
            }), this.hasHandle("unlink") && this.toggleUnlink()
          }
        },
        getBBox: function() {
          var b = this.options.cellView,
            c = this.options.bbox,
            d = a.util.isFunction(c) ? c(b, this) : c;
          return d = a.util.defaults({}, d, {
            x: 0,
            y: 0,
            width: 1,
            height: 1
          }), g.rect(d)
        },
        cellTypeCssClass: function() {
          return this.options.typeCssName
        },
        updateBoxContent: function() {
          var b = this.options.boxContent,
            c = this.options.cellView;
          if (a.util.isFunction(b)) {
            var d = b.call(this, c, this.$box[0]);
            d && this.$box.html(d)
          } else b ? this.$box.html(b) : this.$box.remove()
        },
        extendHandles: function(b) {
          a.util.forIn(b, function(b) {
            var c = this.getHandle(b.name);
            c && a.util.assign(c, b)
          }.bind(this))
        },
        addHandles: function(b) {
          return a.util.toArray(b).forEach(this.addHandle, this), this
        },
        addHandle: function(b) {
          var c = this.getHandle(b.name);
          return c || (this.handles.push(b), a.util.forIn(b.events, function(c, d) {
            a.util.isString(c) ? this.on("action:" + b.name + ":" + d, this[c], this) : this.on("action:" + b.name + ":" + d, c)
          }.bind(this)), this.$handles && this.renderHandle(b).appendTo(this.$handles)), this
        },
        renderHandle: function(b) {
          var c = this.getHandleIdx(b.name),
            d = $("<div/>").addClass("handle").addClass(b.name).attr("data-action", b.name).prop("draggable", !1);
          switch (this.options.type) {
            case "toolbar":
            case "surrounding":
              d.addClass(b.position), b.content && d.html(b.content);
              break;
            case "pie":
              var e = this.PIE_OUTER_RADIUS,
                f = this.PIE_INNER_RADIUS,
                h = (e + f) / 2,
                i = g.point(e, e),
                j = g.toRad(this.options.pieSliceAngle),
                k = c * j + g.toRad(this.options.pieStartAngleOffset),
                l = k + j,
                m = V.createSlicePathData(f, e, k, l),
                n = V("svg").addClass("slice-svg"),
                o = V("path").attr("d", m).translate(e, e).addClass("slice"),
                p = g.point.fromPolar(h, -k - j / 2, i),
                q = this.options.pieIconSize,
                r = V("image").attr(p).addClass("slice-img-icon");
              p.y = p.y + q - 2;
              var s = V("text", {
                "font-size": q
              }).attr(p).addClass("slice-text-icon");
              r.attr({
                width: q,
                height: q
              }), r.translate(-q / 2, -q / 2), s.translate(-q / 2, -q / 2), n.append([o, r, s]), d.append(n.node)
          }
          return b.icon && this.setHandleIcon(d, b.icon), a.util.setAttributesBySelector(d, b.attrs), d
        },
        setHandleIcon: function(a, b) {
          switch (this.options.type) {
            case "pie":
              var c = a.find(".slice-img-icon");
              V(c[0]).attr("xlink:href", b);
              break;
            case "toolbar":
            case "surrounding":
              a.css("background-image", "url(" + b + ")")
          }
        },
        removeHandles: function() {
          for (; this.handles.length;) this.removeHandle(this.handles[0].name);
          return this
        },
        removeHandle: function(b) {
          var c = this.getHandleIdx(b),
            d = this.handles[c];
          return d && (a.util.forIn(d.events, function(a, c) {
            this.off("action:" + b + ":" + c)
          }.bind(this)), this.$(".handle." + b).remove(), this.handles.splice(c, 1)), this
        },
        changeHandle: function(b, c) {
          var d = this.getHandle(b);
          return d && (this.removeHandle(b), this.addHandle(a.util.merge({
            name: b
          }, d, c))), this
        },
        hasHandle: function(a) {
          return this.getHandleIdx(a) !== -1
        },
        getHandleIdx: function(b) {
          return a.util.toArray(this.handles).findIndex(function(a) {
            return a.name === b
          })
        },
        getHandle: function(b) {
          return a.util.toArray(this.handles).find(function(a) {
            return a.name === b
          })
        },
        toggleHandle: function(a, b) {
          var c = this.getHandle(a);
          if (c) {
            var d = this.$(".handle." + a);
            void 0 === b && (b = !d.hasClass("selected")), d.toggleClass("selected", b);
            var e = b ? c.iconSelected : c.icon;
            e && this.setHandleIcon(d, e)
          }
          return this
        },
        selectHandle: function(a) {
          return this.toggleHandle(a, !0)
        },
        deselectHandle: function(a) {
          return this.toggleHandle(a, !1)
        },
        deselectAllHandles: function() {
          return a.util.toArray(this.handles).forEach(function(a) {
            this.deselectHandle(a.name)
          }, this), this
        },
        onHandlePointerDown: function(b) {
          if (this._action = $(b.target).closest(".handle").attr("data-action"), this._action) {
            b.preventDefault(), b.stopPropagation(), b = a.util.normalizeEvent(b);
            var c = this.options.paper.snapToGrid({
              x: b.clientX,
              y: b.clientY
            });
            this._localX = c.x, this._localY = c.y, this._evt = b, this.triggerAction(this._action, "pointerdown", b, c.x, c.y)
          }
        },
        onPieTogglePointerDown: function(a) {
          a.stopPropagation();
          var b = $(a.target).closest(".pie-toggle"),
            c = b.attr("data-name");
          this.isOpen(c) ? this.toggleState(c) : this.isOpen() ? (this.toggleState(), this.toggleState(c)) : this.toggleState(c)
        },
        triggerAction: function(a, b, c) {
          var d = Array.prototype.slice.call(arguments, 2);
          d.unshift("action:" + a + ":" + b), this.trigger.apply(this, d)
        },
        stopBatch: function() {
          this.options.graph.stopBatch("halo", {
            halo: this.cid
          })
        },
        startBatch: function() {
          this.options.graph.startBatch("halo", {
            halo: this.cid
          })
        },
        pointermove: function(b) {
          if (this._action) {
            b.preventDefault(), b.stopPropagation(), b = a.util.normalizeEvent(b);
            var c = this.options.paper.snapToGrid({
                x: b.clientX,
                y: b.clientY
              }),
              d = c.x - this._localX,
              e = c.y - this._localY;
            this._localX = c.x, this._localY = c.y, this._evt = b, this.triggerAction(this._action, "pointermove", b, c.x, c.y, d, e)
          }
        },
        pointerup: function(a) {
          var b = this._action;
          if (b) {
            this._action = null, this._evt = null;
            var c = this.options.paper.snapToGrid({
              x: a.clientX,
              y: a.clientY
            });
            this.triggerAction(b, "pointerup", a, c.x, c.y)
          }
        },
        onRemove: function() {
          $(document.body).off("mousemove touchmove", this.pointermove), $(document).off("mouseup touchend", this.pointerup), this._action && this._evt && this.pointerup(this._evt), this.options.graph.hasActiveBatch("halo") && this.stopBatch()
        },
        onSetTheme: function() {
          this.setPieIcons()
        },
        removeElement: function() {
          this.options.cellView.model.remove()
        },
        toggleUnlink: function() {
          var a = this.options.graph.getConnectedLinks(this.options.cellView.model).length > 0;
          this.$handles.children(".unlink").toggleClass("hidden", !a)
        },
        toggleFork: function() {
          var a = this.options.cellView.model.clone(),
            b = this.options.paper.createViewForModel(a),
            c = this.options.paper.options.validateConnection(this.options.cellView, null, b, null, "target");
          this.$handles.children(".fork").toggleClass("hidden", !c), b.remove(), a = null
        },
        toggleState: function(b) {
          if (this.isRendered()) {
            var c = this.$el;
            if (a.util.forIn(this.$pieToggles, function(a) {
                a.removeClass("open")
              }), this.isOpen()) this.trigger("state:close", b), c.removeClass("open");
            else {
              if (this.trigger("state:open", b), b) {
                var d = a.util.toArray(this.options.pieToggles).find(function(a) {
                  return a.name === b
                });
                d && c.attr({
                  "data-pie-toggle-position": d.position,
                  "data-pie-toggle-name": d.name
                }), this.$pieToggles[b].addClass("open")
              }
              c.addClass("open")
            }
          }
        },
        isOpen: function(a) {
          return !!this.isRendered() && (a ? this.$pieToggles[a].hasClass("open") : this.$el.hasClass("open"))
        },
        isRendered: function() {
          return void 0 !== this.$box
        }
      }, {
        clear: function(a) {
          a.trigger("halo:create")
        }
      })
    }(joint);
  !
    function(a, b) {
      a.ui.Toolbar = a.mvc.View.extend({
        options: {},
        align: ["left", "right"],
        className: "toolbar",
        defaultGroup: "default",
        widgets: [],
        groupViews: [],
        init: function() {
          this.tools = a.util.toArray(this.options.tools), this.groups = this.options.groups || {}
        },
        getWidgetByName: function(a) {
          return this.widgets.find(function(b) {
            return b.options.name === a
          })
        },
        getWidgets: function() {
          return this.widgets
        },
        groupsWithItemsPairs: function() {
          var b = {};
          this.tools.forEach(function(a) {
            var c = a.group || this.defaultGroup;
            b[c] = b[c] || {
                items: [],
                group: {}
              }, b[c].items.push(a), b[c].group = this.groups[c] || {}
          }, this);
          for (var c = Object.keys(b), d = [], e = 0, f = c.length; e < f; e++) {
            var g = c[e];
            d.push([g, b[g]])
          }
          var h = a.util.sortBy(d, function(a) {
            return a[1].group.index
          });
          return a.util.sortBy(h, function(a) {
            return a[1].group.align || "left"
          })
        },
        render: function() {
          var a = this.groupsWithItemsPairs(),
            b = !1;
          return a.forEach(function(a) {
            var c = a[0],
              d = a[1],
              e = this.renderGroup(c, d);
            !b && d.group.align && "right" === d.group.align && (b = !0, e.addClass("group-first")), e.appendTo(this.el)
          }, this), this
        },
        renderGroup: function(a, b) {
          var d = new c({
            name: a,
            align: b.group.align,
            items: b.items,
            references: this.options.references
          });
          return this.groupViews.push(d), d.on("all", function() {
            this.trigger.apply(this, arguments)
          }.bind(this)), d.render(), this.widgets = this.widgets.concat(d.widgets), d.$el
        },
        onRemove: function() {
          a.util.invoke(this.groupViews, "off"), a.util.invoke(this.groupViews, "remove")
        }
      });
      var c = a.mvc.View.extend({
        className: "toolbar-group",
        init: function() {
          this.widgets = []
        },
        onRender: function() {
          this.$el.attr("data-group", this.options.name), this.$el.addClass(this.options.align), this.renderItems()
        },
        renderItems: function() {
          a.util.toArray(this.options.items).forEach(function(a) {
            var b = this.createWidget(a);
            this.$el.append(b.$el)
          }, this)
        },
        createWidget: function(b) {
          var c = a.ui.Widget.create(b, this.options.references);
          return c.on("all", function(a) {
            var c = Array.prototype.slice.call(arguments, 1);
            this.trigger.apply(this, [b.name + ":" + a].concat(c))
          }.bind(this)), this.widgets.push(c), c
        },
        onRemove: function() {
          a.util.invoke(this.widgets, "off"), a.util.invoke(this.widgets, "remove")
        }
      })
    }(joint, _), function(a, b) {
    a.ui.Widget = a.mvc.View.extend({
      className: "widget",
      references: [],
      constructor: function(b, c) {
        this.availableReferences = c || {}, a.mvc.View.prototype.constructor.call(this, b)
      },
      updateAttrs: function(b) {
        a.util.setAttributesBySelector(this.$el, b)
      },
      bindEvents: function() {},
      validateReferences: function() {
        var a = this.references || [],
          b = [];
        return a.forEach(function(a) {
          void 0 === this.availableReferences[a] && b.push(a)
        }, this), b
      },
      getReference: function(a) {
        return this.availableReferences[a]
      },
      getReferences: function() {
        return this.availableReferences
      }
    }, {
      create: function(b, c) {
        var d = a.util.camelCase(a.util.isString(b) ? b : b.type);
        if (!a.util.isFunction(a.ui.widgets[d])) throw new Error('Widget: unable to find widget: "' + d + '"');
        var e = new a.ui.widgets[d](b, c),
          f = e.validateReferences(c);
        if (f.length > 0) throw new Error('Widget: "' + d + '" missing dependency: ' + f.join(", "));
        return e.render(), e.updateAttrs(b.attrs), e.bindEvents(), e.$el.attr("data-type", d), b.name && e.$el.attr("data-name", b.name), e
      }
    }), a.ui.widgets = {
      checkbox: a.ui.Widget.extend({
        tagName: "label",
        events: {
          "change .input": "onChange",
          mousedown: "pointerdown",
          touchstart: "pointerdown",
          mouseup: "pointerup",
          touchend: "pointerup"
        },
        init: function() {
          a.util.bindAll(this, "pointerup")
        },
        render: function() {
          var a = this.options,
            c = b("<span/>").text(a.label || "");
          return this.$input = b("<input/>", {
            type: "checkbox",
            "class": "input"
          }).prop("checked", !! a.value), this.$span = b("<span/>"), this.$el.append([c, this.$input, this.$span]), this
        },
        onChange: function(a) {
          this.trigger("change", !! a.target.checked, a)
        },
        pointerdown: function(c) {
          c = a.util.normalizeEvent(c), this.$el.addClass("is-in-action"), this.trigger("pointerdown", c), b(document).on("mouseup.checkbox touchend.checkbox", this.pointerup)
        },
        pointerup: function(c) {
          c = a.util.normalizeEvent(c), b(document).off("mouseup.checkbox touchend.checkbox"), this.trigger("pointerdown", c), this.$el.removeClass("is-in-action")
        }
      }),
      toggle: a.ui.Widget.extend({
        tagName: "label",
        events: {
          "change input.toggle": "onChange",
          mousedown: "pointerdown",
          touchstart: "pointerdown",
          mouseup: "pointerup",
          touchend: "pointerup"
        },
        init: function() {
          a.util.bindAll(this, "pointerup")
        },
        render: function() {
          var a = this.options,
            c = b("<span/>").text(a.label || ""),
            d = b("<span><i/></span>"),
            e = b("<input/>", {
              type: "checkbox",
              "class": "toggle"
            }).prop("checked", !! a.value),
            f = b("<div/>").addClass(a.type);
          return this.$el.append([c, f.append(e, d)]), this
        },
        onChange: function(a) {
          this.trigger("change", !! a.target.checked, a)
        },
        pointerdown: function(c) {
          c = a.util.normalizeEvent(c), this.$el.addClass("is-in-action"), this.trigger("pointerdown", c), b(document).on("mouseup.toggle touchend.toggle", this.pointerup)
        },
        pointerup: function(c) {
          c = a.util.normalizeEvent(c), b(document).off("mouseup.toggle touchend.toggle"), this.$el.removeClass("is-in-action"), this.trigger("pointerup", c)
        }
      }),
      separator: a.ui.Widget.extend({
        render: function() {
          return this.options.width && this.$el.css({
            width: this.options.width
          }), this
        }
      }),
      label: a.ui.Widget.extend({
        tagName: "label",
        render: function() {
          return this.$el.text(this.options.text), this
        }
      }),
      range: a.ui.Widget.extend({
        events: {
          "change .input": "onChange",
          "input .input": "onChange"
        },
        render: function() {
          var a, c = this.options;
          return this.$output = b("<output/>").text(c.value), a = b("<span/>").addClass("units").text(c.unit), this.$input = b("<input/>", {
            type: "range",
            name: c.type,
            min: c.min,
            max: c.max,
            step: c.step,
            "class": "input"
          }).val(c.value), this.$el.append([this.$input, this.$output, a]), this
        },
        onChange: function(a) {
          var b = parseInt(this.$input.val(), 10);
          b !== this.currentValue && (this.currentValue = b, this.$output.text(b), this.trigger("change", b, a))
        },
        setValue: function(a) {
          this.$input.val(a), this.$input.trigger("change")
        }
      }),
      selectBox: a.ui.Widget.extend({
        render: function() {
          var b = a.util.omit(this.options, "type", "group", "index");
          return this.selectBox = new a.ui.SelectBox(b), this.selectBox.render().$el.appendTo(this.el), this
        },
        bindEvents: function() {
          this.selectBox.on("all", this.trigger, this)
        }
      }),
      button: a.ui.Widget.extend({
        events: {
          mousedown: "pointerdown",
          touchstart: "pointerdown",
          click: "pointerclick",
          touchend: "pointerclick"
        },
        tagName: "button",
        render: function() {
          var a = this.options;
          return this.$el.text(a.text), this
        },
        pointerclick: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerclick", b)
        },
        pointerdown: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerdown", b)
        }
      }),
      inputText: a.ui.Widget.extend({
        events: {
          mousedown: "pointerdown",
          touchstart: "pointerdown",
          mouseup: "pointerup",
          touchend: "pointerup",
          click: "pointerclick",
          focusin: "pointerfocusin",
          focusout: "pointerfocusout"
        },
        tagName: "div",
        render: function() {
          var a = this.options;
          return this.$label = b("<label/>").text(a.label), this.$input = b("<div/>").addClass("input-wrapper").append(b("<input/>", {
            type: "text",
            "class": "input"
          }).val(a.value)), this.$el.append([this.$label, this.$input]), this
        },
        pointerclick: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerclick", b)
        },
        pointerdown: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerdown", b)
        },
        pointerup: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerup", b)
        },
        pointerfocusin: function(b) {
          b = a.util.normalizeEvent(b), this.$el.addClass("is-focused"), this.trigger("pointerfocusin", b)
        },
        pointerfocusout: function(b) {
          b = a.util.normalizeEvent(b), this.$el.removeClass("is-focused"), this.trigger("pointerfocusout", b)
        }
      }),
      inputNumber: a.ui.Widget.extend({
        events: {
          mousedown: "pointerdown",
          touchstart: "pointerdown",
          mouseup: "pointerup",
          touchend: "pointerup",
          click: "pointerclick",
          focusin: "pointerfocusin",
          focusout: "pointerfocusout"
        },
        tagName: "div",
        render: function() {
          var a = this.options;
          return this.$label = b("<label/>").text(a.label), this.$input = b("<div/>").addClass("input-wrapper").append(b("<input/>", {
            type: "number",
            "class": "number",
            max: a.max,
            min: a.min
          }).val(a.value)), this.$el.append([this.$label, this.$input]), this
        },
        pointerclick: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerclick", b)
        },
        pointerdown: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerdown", b)
        },
        pointerup: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerup", b)
        },
        pointerfocusin: function(b) {
          b = a.util.normalizeEvent(b), this.$el.addClass("is-focused"), this.trigger("pointerfocusin", b)
        },
        pointerfocusout: function(b) {
          b = a.util.normalizeEvent(b), this.$el.removeClass("is-focused"), this.trigger("pointerfocusout", b)
        }
      }),
      textarea: a.ui.Widget.extend({
        events: {
          mousedown: "pointerdown",
          touchstart: "pointerdown",
          mouseup: "pointerup",
          touchend: "pointerup",
          click: "pointerclick",
          focusin: "pointerfocusin",
          focusout: "pointerfocusout"
        },
        tagName: "div",
        render: function() {
          var a = this.options;
          return this.$label = b("<label/>").text(a.label), this.$input = b("<div/>").addClass("input-wrapper").append(b("<textarea/>", {
            "class": "textarea"
          }).text(a.value)), this.$el.append([this.$label, this.$input]), this
        },
        pointerclick: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerclick", b)
        },
        pointerdown: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerdown", b)
        },
        pointerup: function(b) {
          b = a.util.normalizeEvent(b), this.trigger("pointerup", b)
        },
        pointerfocusin: function(b) {
          b = a.util.normalizeEvent(b), this.$el.addClass("is-focused"), this.trigger("pointerfocusin", b)
        },
        pointerfocusout: function(b) {
          b = a.util.normalizeEvent(b), this.$el.removeClass("is-focused"), this.trigger("pointerfocusout", b)
        }
      }),
      selectButtonGroup: a.ui.Widget.extend({
        render: function() {
          var b = a.util.omit(this.options, "type", "group", "index");
          return this.selectButtonGroup = new a.ui.SelectButtonGroup(b), this.selectButtonGroup.render().$el.appendTo(this.el), this
        },
        bindEvents: function() {
          this.selectButtonGroup.on("all", this.trigger, this)
        }
      })
    }, a.ui.widgets.zoomIn = a.ui.widgets.button.extend({
      references: ["paperScroller"],
      options: {
        min: .2,
        max: 5,
        step: .2
      },
      pointerdown: function(b) {
        var c = this.options;
        this.getReferences().paperScroller.zoom(c.step, {
          max: c.max,
          grid: c.step
        }), a.ui.widgets.button.prototype.pointerdown.call(this, b)
      }
    }), a.ui.widgets.zoomOut = a.ui.widgets.button.extend({
      references: ["paperScroller"],
      options: {
        min: .2,
        max: 5,
        step: .2
      },
      pointerdown: function(b) {
        var c = this.options;
        this.getReferences().paperScroller.zoom(-c.step, {
          min: c.min,
          grid: c.step
        }), a.ui.widgets.button.prototype.pointerdown.call(this, b)
      }
    }), a.ui.widgets.zoomToFit = a.ui.widgets.button.extend({
      references: ["paperScroller"],
      options: {
        min: .2,
        max: 5,
        step: .2
      },
      pointerdown: function(b) {
        var c = this.options;
        this.getReferences().paperScroller.zoomToFit({
          padding: 20,
          scaleGrid: c.step,
          minScale: c.min,
          maxScale: c.max
        }), a.ui.widgets.button.prototype.pointerdown.call(this, b)
      }
    }), a.ui.widgets.zoomSlider = a.ui.widgets.range.extend({
      references: ["paperScroller"],
      options: {
        min: 20,
        max: 500,
        step: 20,
        value: 100,
        unit: " %"
      },
      bindEvents: function() {
        this.on("change", function(a) {
          this.getReferences().paperScroller.zoom(a / 100, {
            absolute: !0,
            grid: this.options.step / 100
          })
        }, this), this.getReferences().paperScroller.options.paper.on("scale", function(a) {
          this.setValue(Math.floor(100 * a))
        }, this)
      }
    }), a.ui.widgets.undo = a.ui.widgets.button.extend({
      references: ["commandManager"],
      pointerclick: function() {
        this.getReferences().commandManager.undo()
      }
    }), a.ui.widgets.redo = a.ui.widgets.button.extend({
      references: ["commandManager"],
      pointerclick: function() {
        this.getReferences().commandManager.redo()
      }
    }), a.ui.widgets.fullscreen = a.ui.widgets.button.extend({
      onRender: function() {
        var a = this.target = b(this.options.target)[0];
        a && !b.contains(window.top.document, a) && this.$el.hide()
      },
      pointerclick: function() {
        a.util.toggleFullScreen(this.target)
      }
    })
  }(joint, $);
  !
    function(a, b) {
      var c = {
        options: function() {
          return {
            columnWidth: this.options.width / 2 - 10,
            columns: 2,
            rowHeight: 80,
            resizeToFit: !0,
            dy: 10,
            dx: 10
          }
        },
        layoutGroup: function(c, d) {
          var e = this.options.layout;
          if (d = d || {}, !a.layout.GridLayout) throw new Error("joint.ui.Stencil: joint.layout.GridLayout is not available.");
          a.layout.GridLayout.layout(c, b.assign({}, e, d.layout))
        }
      };
      a.ui.Stencil = a.mvc.View.extend({
        className: "stencil",
        events: {
          "click .btn-expand": "openGroups",
          "click .btn-collapse": "closeGroups",
          "click .groups-toggle > .group-label": "openGroups",
          "click .group > .group-label": "onGroupLabelClick",
          "touchstart .group > .group-label": "onGroupLabelClick",
          "input .search": "onSearch",
          "focusin .search": "pointerFocusIn",
          "focusout .search": "pointerFocusOut"
        },
        options: {
          width: 200,
          height: 800,
          label: "Stencil",
          groups: null,
          groupsToggleButtons: !1,
          dropAnimation: !1,
          search: null,
          layout: null,
          snaplines: null,
          scaleClones: !1,
          dragStartClone: function(a) {
            return a.clone()
          },
          dragEndClone: function(a) {
            return a.clone()
          },
          layoutGroup: null,
          paperOptions: null
        },
        init: function() {
          this.setPaper(this.options.paperScroller || this.options.paper), this.graphs = {}, this.papers = {}, this.$groups = {}, b.bindAll(this, "onDrag", "onDragEnd", "onDropEnd"), $(document.body).on("mousemove.stencil touchmove.stencil", this.onDrag), $(window).on("mouseup.stencil touchend.stencil", this.onDragEnd), this.onSearch = b.debounce(this.onSearch, 200), this.delegateEvents(), this.initializeLayout()
        },
        initializeLayout: function() {
          var a = this.options.layout;
          a && (b.isFunction(a) ? this.layoutGroup = a : (this.layoutGroup = c.layoutGroup.bind(this), this.options.layout = b.isObject(a) ? a : {}, b.defaults(this.options.layout, c.options.call(this))))
        },
        setPaper: function(b) {
          var c = this.options;
          if (b instanceof a.dia.Paper) c.paperScroller = null, c.paper = b, c.graph = b.model;
          else {
            if (!("function" == typeof a.ui.PaperScroller && b instanceof a.ui.PaperScroller)) throw new Error("Stencil: paper required");
            c.paperScroller = b, c.paper = b.options.paper, c.graph = b.options.paper.model
          }
        },
        renderContent: function() {
          return $("<div/>").addClass("content")
        },
        renderPaperDrag: function() {
          return $("<div/>").addClass("stencil-paper-drag")
        },
        renderSearch: function() {
          return $("<div/>").addClass("search-wrap").append($("<input/>", {
            type: "search",
            placeholder: "search"
          }).addClass("search"))
        },
        renderToggleAll: function() {
          return [$("<div/>").addClass("groups-toggle").append($("<label/>").addClass("group-label").html(this.options.label)).append($("<button/>", {
            text: "+"
          }).addClass("btn btn-expand")).append($("<button/>", {
            text: "-"
          }).addClass("btn btn-collapse"))]
        },
        renderElementsContainer: function() {
          return $("<div/>").addClass("elements")
        },
        renderGroup: function(a) {
          a = a || {};
          var b = $("<div/>").addClass("group").attr("data-name", a.name).toggleClass("closed", !! a.closed),
            c = $("<h3/>").addClass("group-label").html(a.label || a.name),
            d = this.renderElementsContainer();
          return b.append(c, d)
        },
        render: function() {
          var c = this.options;
          this.$content = this.renderContent(), this.$paperDrag = this.renderPaperDrag(), this.$el.empty().append(this.$paperDrag, this.$content), c.search && this.$el.addClass("searchable").prepend(this.renderSearch()), c.groupsToggleButtons && this.$el.addClass("collapsible").prepend(this.renderToggleAll());
          var d = b.defaults({
              interactive: !1,
              preventDefaultBlankAction: !1
            }, c.paperOptions),
            e = Object.keys(c.groups || {});
          if (e.length > 0) {
            var f = b.sortBy(e, function(a) {
              return this[a].index
            }.bind(c.groups));
            f.forEach(function(e) {
              var f = this.options.groups[e],
                g = this.$groups[e] = this.renderGroup({
                  name: e,
                  label: f.label,
                  closed: f.closed
                }).appendTo(this.$content),
                h = new a.dia.Graph,
                i = b.assign({}, d, f.paperOptions, {
                  el: g.find(".elements"),
                  model: h,
                  width: f.width || c.width,
                  height: f.height || c.height
                }),
                j = new a.dia.Paper(i);
              this.graphs[e] = h, this.papers[e] = j
            }, this)
          } else {
            var g = this.renderElementsContainer().appendTo(this.$content),
              h = new a.dia.Graph,
              i = new a.dia.Paper(b.assign(d, {
                el: g,
                model: h,
                width: c.width,
                height: c.height
              }));
            this.graphs.__default__ = h, this.papers.__default__ = i
          }
          return this._graphDrag = new a.dia.Graph, this._paperDrag = new a.dia.Paper({
            el: this.$paperDrag,
            width: 1,
            height: 1,
            model: this._graphDrag
          }), this.startListening(), this
        },
        startListening: function() {
          this.stopListening(), b.forIn(this.papers, function(a) {
            this.listenTo(a, "cell:pointerdown", this.onDragStart)
          }.bind(this))
        },
        load: function(a, c) {
          Array.isArray(a) ? this.loadGroup(a, c) : b.isObject(a) && b.forIn(this.options.groups, function(b, c) {
              a[c] && this.loadGroup(a[c], c)
            }.bind(this))
        },
        loadGroup: function(a, b) {
          var c = this.getGraph(b);
          c.resetCells(a);
          var d = this.options.height;
          if (b && (d = this.getGroup(b).height), this.isLayoutEnabled() && this.layoutGroup(c, this.getGroup(b)), !d) {
            var e = this.getPaper(b);
            e.fitToContent({
              minWidth: e.options.width,
              gridHeight: 1,
              padding: this.options.paperPadding || 10
            })
          }
        },
        isLayoutEnabled: function() {
          return !!this.options.layout
        },
        getGraph: function(a) {
          var b = this.graphs[a || "__default__"];
          if (!b) throw new Error("Stencil: group " + a + " does not exist.");
          return b
        },
        getPaper: function(a) {
          return this.papers[a || "__default__"]
        },
        preparePaperForDragging: function(a, b, c) {
          var d = this._paperDrag,
            e = this._graphDrag;
          d.$el.addClass("dragging").appendTo(document.body);
          var f = this.options.dragStartClone(a.model).position(0, 0),
            g = 5,
            h = this.options.snaplines;
          if (h && (g += h.options.distance), h || this.options.scaleClones) {
            var i = this.options.paper.scale();
            d.scale(i.sx, i.sy), g *= Math.max(i.sx, i.sy)
          } else d.scale(1, 1);
          this.clearClone(), this.options.dropAnimation && this._paperDrag.$el.stop(!0, !0), e.resetCells([f.position(0, 0)]);
          var j = f.findView(d);
          j.stopListening(), d.fitToContent({
            padding: g,
            allowNewOrigin: "any"
          });
          var k = j.getBBox(),
            l = this._cloneGeometryBBox = j.getBBox({
              useModelGeometry: !0
            });
          this._cloneViewDeltaOrigin = l.origin().difference(k.origin()), this._cloneBBox = f.getBBox(), this._clone = f, this._cloneView = j, this._paperDragPadding = g, this._paperDragInitialOffset = this.setPaperDragOffset(b, c)
        },
        setPaperDragOffset: function(a, b) {
          var c = document.body.scrollTop || document.documentElement.scrollTop,
            d = this._cloneViewDeltaOrigin,
            e = this._cloneGeometryBBox,
            f = this._paperDragPadding || 5,
            g = {
              left: a - d.x - e.width / 2 - f,
              top: b - d.y - e.height / 2 - f + c
            };
          return this._paperDrag.$el.offset(g), g
        },
        setCloneLocalPosition: function(a, b) {
          var c = this.options.paper.clientToLocalPoint({
              x: a,
              y: b
            }),
            d = this._cloneBBox;
          return c.x -= d.width / 2, c.y -= d.height / 2, this._clone.set("position", c), c
        },
        onDragStart: function(a, b) {
          b.preventDefault(), this.options.graph.startBatch("stencil-drag"), this.$el.addClass("dragging"), this.preparePaperForDragging(a, b.clientX, b.clientY);
          var c = this.setCloneLocalPosition(b.clientX, b.clientY),
            d = this._cloneView,
            e = this.options.snaplines;
          e && (e.captureCursorOffset(this._cloneView, b, c.x, c.y), d.listenTo(this._clone, "change:position", this.onCloneSnapped.bind(this)))
        },
        onCloneSnapped: function(a, b, c) {
          if (c.snapped) {
            var d = this._cloneBBox;
            a.position(d.x + c.tx, d.y + c.ty, {
              silent: !0
            }), this._cloneView.translate(), a.set("position", b, {
              silent: !0
            }), this._cloneSnapOffset = {
              x: c.tx,
              y: c.ty
            }
          } else this._cloneSnapOffset = null
        },
        onDrag: function(a) {
          var c = this._cloneView;
          if (c) {
            a.preventDefault(), a = b.normalizeEvent(a);
            var d = a.clientX,
              e = a.clientY;
            this.setPaperDragOffset(d, e);
            var f = this.setCloneLocalPosition(d, e),
              g = this.options.paper.options.embeddingMode,
              h = this.options.snaplines,
              i = (g || h) && this.insideValidArea({
                  x: d,
                  y: e
                });
            g && (i ? c.processEmbedding({
              paper: this.options.paper
            }) : c.clearEmbedding()), h && (i ? h.snapWhileMoving(c, a, f.x, f.y) : h.hide())
          }
        },
        onDragEnd: function(a) {
          var c = this._clone;
          if (c) {
            a = b.normalizeEvent(a);
            var d = this._cloneView,
              e = this._cloneBBox,
              f = this._cloneSnapOffset,
              g = e.x,
              h = e.y;
            f && (g += f.x, h += f.y), c.position(g, h, {
              silent: !0
            });
            var i = this.options.dragEndClone(c),
              j = this.drop(a, i);
            j ? this.onDropEnd(c) : this.onDropInvalid(a, i), this.options.paper.options.embeddingMode && d && d.finalizeEmbedding({
              model: i,
              paper: this.options.paper
            }), this.options.graph.stopBatch("stencil-drag")
          }
        },
        onDropEnd: function(a) {
          this._clone === a && (this.clearClone(), this.$el.append(this._paperDrag.$el), this.$el.removeClass("dragging"), this._paperDrag.$el.removeClass("dragging"))
        },
        clearClone: function() {
          this._clone && (this._clone.remove(), this._clone = null, this._cloneView = null, this._cloneSnapOffset = null, this._paperDragInitialOffset = null, this._paperDragPadding = null)
        },
        onDropInvalid: function(a, c) {
          var d = this._clone;
          if (d) {
            a = b.normalizeEvent(a), c = c || this.options.dragEndClone(d), this.trigger("drop:invalid", a, c);
            var e = this.options.dropAnimation;
            if (e) {
              var f = b.isObject(e) ? e.duration : 150,
                g = b.isObject(e) ? e.easing : "swing";
              this._cloneView = null, this._paperDrag.$el.animate(this._paperDragInitialOffset, f, g, this.onDropEnd.bind(this, d))
            } else this.onDropEnd(d)
          }
        },
        insideValidArea: function(a) {
          var b, c = this.options.paper,
            d = this.options.paperScroller,
            e = this.getDropArea(this.$el);
          if (d) if (d.options.autoResizePaper) b = this.getDropArea(d.$el);
          else {
            var f = this.getDropArea(d.$el),
              g = this.getDropArea(c.$el);
            b = g.intersect(f)
          } else b = this.getDropArea(c.$el);
          return !(!b || !b.containsPoint(a) || e.containsPoint(a))
        },
        getDropArea: function(a) {
          var b = a.offset(),
            c = document.body.scrollTop || document.documentElement.scrollTop,
            d = document.body.scrollLeft || document.documentElement.scrollLeft;
          return g.rect({
            x: b.left + parseInt(a.css("border-left-width"), 10) - d,
            y: b.top + parseInt(a.css("border-top-width"), 10) - c,
            width: a.innerWidth(),
            height: a.innerHeight()
          })
        },
        drop: function(a, b) {
          var c = this.options.paper,
            d = this.options.graph,
            e = {
              x: a.clientX,
              y: a.clientY
            };
          if (this.insideValidArea(e)) {
            var f = c.clientToLocalPoint(e),
              h = b.getBBox();
            f.x += h.x - h.width / 2, f.y += h.y - h.height / 2;
            var i = this._cloneSnapOffset ? 1 : c.options.gridSize;
            return b.set("position", {
              x: g.snapToGrid(f.x, i),
              y: g.snapToGrid(f.y, i)
            }), b.unset("z"), d.addCell(b, {
              stencil: this.cid
            }), !0
          }
          return !1
        },
        filter: function(c, d) {
          var e = c.toLowerCase() == c,
            f = Object.keys(this.papers).reduce(function(f, g) {
              var h = this.papers[g],
                i = h.model.get("cells").filter(function(a) {
                  var f = h.findViewByModel(a),
                    g = !c || Object.keys(d).some(function(f) {
                        var g = d[f];
                        if ("*" != f && a.get("type") != f) return !1;
                        var h = g.some(function(d) {
                          var f = b.getByPath(a.attributes, d, "/");
                          return void 0 !== f && null !== f && (f = f.toString(), e && (f = f.toLowerCase()), f.indexOf(c) >= 0)
                        });
                        return h
                      });
                  return V(f.el).toggleClass("unmatched", !g), g
                }, this),
                j = !b.isEmpty(i),
                k = (new a.dia.Graph).resetCells(i);
              return this.trigger("filter", k, g, c), this.isLayoutEnabled() && this.layoutGroup(k, this.getGroup(g)), this.$groups[g] && this.$groups[g].toggleClass("unmatched", !j), h.fitToContent({
                gridWidth: 1,
                gridHeight: 1,
                padding: this.options.paperPadding || 10
              }), f || j
            }.bind(this), !1);
          this.$el.toggleClass("not-found", !f)
        },
        getGroup: function(a) {
          return this.options.groups && this.options.groups[a] || {}
        },
        onSearch: function(a) {
          this.filter(a.target.value, this.options.search)
        },
        pointerFocusIn: function() {
          this.$el.addClass("is-focused")
        },
        pointerFocusOut: function() {
          this.$el.removeClass("is-focused")
        },
        onGroupLabelClick: function(a) {
          if ("touchstart" === a.type) this._groupLabelClicked = !0;
          else if (this._groupLabelClicked && "click" === a.type) return void(this._groupLabelClicked = !1);
          var b = $(a.target).closest(".group");
          this.toggleGroup(b.data("name"))
        },
        toggleGroup: function(a) {
          this.$('.group[data-name="' + a + '"]').toggleClass("closed")
        },
        closeGroup: function(a) {
          this.$('.group[data-name="' + a + '"]').addClass("closed")
        },
        openGroup: function(a) {
          this.$('.group[data-name="' + a + '"]').removeClass("closed")
        },
        isGroupOpen: function(a) {
          return !this.$('.group[data-name="' + a + '"]').hasClass("closed")
        },
        closeGroups: function() {
          this.$(".group").addClass("closed")
        },
        openGroups: function() {
          this.$(".group").removeClass("closed")
        },
        onRemove: function() {
          b.invoke(this.papers, "remove"), this.papers = {}, this._paperDrag && (this._paperDrag.remove(), this._paperDrag = null), $(document.body).off(".stencil", this.onDrag).off(".stencil", this.onDragEnd), $(window).off(".stencil", this.onDragEnd)
        }
      })
    }(joint, joint.util);
  !
    function(a, b) {
      "use strict";
      a.ui.Inspector = a.mvc.View.extend({
        className: "inspector",
        options: {
          cellView: void 0,
          cell: void 0,
          live: !0,
          validateInput: function(a, b, c) {
            return !a.validity || a.validity.valid
          },
          renderFieldContent: void 0,
          operators: {},
          multiOpenGroups: !0,
          stateKey: function(a) {
            return a.id
          }
        },
        events: {
          "change [data-attribute]:not([data-custom-field])": "onChangeInput",
          "click .group-label": "onGroupLabelClick",
          "click .btn-list-add": "addListItem",
          "click .btn-list-del": "deleteListItem",
          "mousedown .field": "pointerdown",
          "touchstart .field": "pointerdown",
          "focusin .field": "pointerfocusin",
          "focusout .field": "pointerfocusout"
        },
        HTMLEntities: {
          lt: "<",
          gt: ">",
          amp: "&",
          nbsp: " ",
          quot: '"',
          cent: "¢",
          pound: "£",
          euro: "€",
          yen: "¥",
          copy: "©",
          reg: "®"
        },
        init: function() {
          var c = this.options.groups = this.options.groups || {};
          a.util.bindAll(this, "stopBatchCommand", "pointerup", "onContentEditableBlur", "replaceHTMLEntity"), this.widgets = {}, this._attributeKeysInUse = [], this.flatAttributes = this.flattenInputs(this.options.inputs), this._when = {}, this._bound = {};
          var d = Object.keys(this.flatAttributes).map(function(a) {
            var b = this.flatAttributes[a];
            if (b.when) {
              var c = {
                expression: b.when,
                path: a
              };
              this.extractExpressionPaths(c.expression).forEach(function(a) {
                (this._when[a] || (this._when[a] = [])).push(c)
              }, this)
            }
            return this.needsResolving(b) && (this._bound[a] = b.options), b.path = a, b
          }, this);
          for (var e in c) {
            var f = c[e];
            f && c.hasOwnProperty(e) && this.extractExpressionPaths(f.when).forEach(function(a) {
              this._when[a] || (this._when[a] = [])
            }, this)
          }
          var g = b.sortBy(d, "index");
          this.groupedFlatAttributes = b.sortBy(g, function(a) {
            var b = this.options.groups[a.group];
            return b && b.index || Number.MAX_VALUE
          }.bind(this)), this.listenTo(this.getModel(), "all", this.onCellChange, this)
        },
        cacheInputs: function() {
          var a = {};
          Array.from(this.$("[data-attribute]")).forEach(function(b) {
            var c = $(b),
              d = c.attr("data-attribute");
            a[d] = c
          }, this), this._byPath = a, this._attributeKeysInUse = this.getAttributeKeysInUse()
        },
        updateGroupsVisibility: function() {
          for (var a = this.$groups, b = 0, c = a.length; b < c; b++) {
            var d = $(a[b]),
              e = d.attr("data-name"),
              f = this.options.groups[e],
              g = 0 === d.find("> .field:not(.hidden)").length;
            d.toggleClass("empty", g);
            var h = !(!f || !f.when || this.isExpressionValid(f.when));
            d.toggleClass("hidden", h)
          }
        },
        flattenInputs: function(b) {
          return a.util.flattenObject(b, "/", function(a) {
            return "string" == typeof a.type
          })
        },
        getModel: function() {
          return this.options.cell || this.options.cellView.model
        },
        onCellChange: function(a, b, c, d) {
          if (d = d || {}, d.inspector != this.cid) switch (a) {
            case "remove":
              this.remove();
              break;
            case "change:position":
              this.updateInputPosition();
              break;
            case "change:size":
              this.updateInputSize();
              break;
            case "change:angle":
              this.updateInputAngle();
              break;
            case "change:source":
            case "change:target":
            case "change:vertices":
              break;
            default:
              var e = "change:";
              if (a.slice(0, e.length) === e) {
                var f = a.slice(e.length);
                this._attributeKeysInUse.includes(f) && this.render({
                  refresh: !0
                })
              }
          }
        },
        render: function(a) {
          var b = a && a.refresh;
          b && this.options.storeGroupsState && this.storeGroupsState(), this.$el.empty(), this.removeWidgets();
          var c, d, e = [];
          return this.groupedFlatAttributes.forEach(function(a) {
            if (c !== a.group) {
              var f = this.options.groups[a.group];
              d = this.renderGroup({
                name: a.group,
                label: f && f.label
              }), b || (f && f.closed ? this.closeGroup(d, {
                init: !0
              }) : this.openGroup(d, {
                init: !0
              })), e.push(d)
            }
            this.renderTemplate(d, a, a.path), c = a.group
          }, this), this.$document = $(this.el.ownerDocument), this.$groups = $(e), this.$el.append(e), b && this.options.restoreGroupsState && this.restoreGroupsState(), this.afterRender(), this
        },
        getAttributeKeysInUse: function() {
          var a = Object.keys(this._byPath).map(function(a) {
              return a.substring(0, a.indexOf("/")) || a
            }),
            c = b.toArray(this._bound),
            d = Object.keys(this._when);
          return b.uniq([].concat(a, c, d))
        },
        getCellAttributeValue: function(b, c) {
          var d = this.getModel(),
            e = a.util.getByPath(d.attributes, b, "/");
          if (c = c || this.flatAttributes[b], !c) return e;
          if (void 0 === e && void 0 !== c.defaultValue && (e = c.defaultValue), c.valueRegExp) {
            if (void 0 === e) throw new Error("Inspector: defaultValue must be present when valueRegExp is used.");
            var f = e.match(new RegExp(c.valueRegExp));
            e = f && f[2]
          }
          return e
        },
        resolvableTypes: ["select", "select-box", "color-palette", "select-button-group"],
        needsResolving: function(b) {
          return !!b && this.resolvableTypes.indexOf(b.type) > -1 && a.util.isString(b.options)
        },
        resolveBindings: function(c) {
          if (this.resolvableTypes.indexOf(c.type) > -1) {
            var d = c.options || [];
            a.util.isString(d) && (d = a.util.getByPath(this.getModel().attributes, d, "/") || []), a.util.isObject(d[0]) || (d = b.toArray(d).map(function(a) {
              return {
                value: a,
                content: a
              }
            })), c.items = d
          }
        },
        updateBindings: function(b) {
          var c = Object.keys(this._bound).reduce(function(a, c) {
            var d = this._bound[c];
            return 0 === b.indexOf(d) && a.push(c), a
          }.bind(this), []);
          a.util.isEmpty(c) || (c.forEach(function(a) {
            this.renderTemplate(null, this.flatAttributes[a], a, {
              replace: !0
            })
          }, this), this.afterRender())
        },
        renderFieldContent: function(c, d, e) {
          var f;
          if (a.util.isFunction(this.options.renderFieldContent) && (f = this.options.renderFieldContent(c, d, e))) return $(f).attr({
            "data-attribute": d,
            "data-type": c.type,
            "data-custom-field": !0
          });
          var g, h, i, j;
          switch (c.type) {
            case "select-box":
              h = a.util.toArray(c.items).findIndex(function(b) {
                return void 0 === b.value && b.content === e || !! a.util.isEqual(b.value, e)
              });
              var k = a.util.assign({
                theme: this.options.theme
              }, a.util.omit(c, "type", "group", "index", "selectBoxOptionsClass", "options"), {
                options: c.items,
                selected: h,
                selectBoxOptionsClass: [a.util.addClassNamePrefix("inspector-select-box-options"), c.selectBoxOptionsClass].filter(function(a) {
                  return !!a
                }).join(" ")
              });
              g = new a.ui.SelectBox(k), g.$el.attr({
                "data-attribute": d,
                "data-type": c.type
              }), g.render(), j = $("<label/>", {
                html: c.label || d
              }), f = $("<div/>").append(j, g.el), c.previewMode ? (i = g.selection, g.on("options:mouseout close", function() {
                g.selection = i, this.processInput(g.$el, {
                  previewCancel: !0,
                  dry: !0
                })
              }, this), g.on("option:hover", function(a, b) {
                g.selection = a, this.processInput(g.$el, {
                  dry: !0
                })
              }, this), g.on("option:select", function(a, b) {
                var c = void 0 === i ? void 0 : g.getSelectionValue(i),
                  d = g.getSelectionValue(a),
                  e = c === d;
                this.processInput(g.$el, {
                  previewDone: !0,
                  dry: e,
                  originalValue: c
                }), i = a
              }, this)) : g.on("option:select", function(a, b) {
                this.processInput(g.$el)
              }, this), this.widgets[d] = g;
              break;
            case "color-palette":
              h = a.util.toArray(c.items).findIndex(function(a) {
                return a.value === e || void 0 === a.value && a.content === e
              });
              var l = a.util.assign({
                theme: this.options.theme
              }, a.util.omit(c, "type", "group", "index", "options"), {
                options: c.items,
                selected: h
              });
              g = new a.ui.ColorPalette(l), g.$el.attr({
                "data-attribute": d,
                "data-type": c.type
              }), g.render(), j = $("<label/>", {
                html: c.label || d
              }), f = $("<div/>").append(j, g.el), c.previewMode ? (i = g.selection, g.on("options:mouseout close", function() {
                g.selection = i, this.processInput(g.$el, {
                  previewCancel: !0,
                  dry: !0
                })
              }, this), g.on("option:hover", function(a, b) {
                g.selection = a, this.processInput(g.$el, {
                  dry: !0
                })
              }, this), g.on("option:select", function(a, b) {
                var c = void 0 === i ? void 0 : g.getSelectionValue(i),
                  d = g.getSelectionValue(a),
                  e = c === d;
                this.processInput(g.$el, {
                  previewDone: !0,
                  dry: e,
                  originalValue: c
                }), i = a
              }, this)) : g.on("option:select", function(a, b) {
                this.processInput(g.$el)
              }, this), this.widgets[d] = g;
              break;
            case "select-button-group":
              c.multi ? (h = [], a.util.toArray(c.items).forEach(function(b, c) {
                var d = void 0 === b.value ? b.content : b.value,
                  f = a.util.toArray(e).find(function(b) {
                    return a.util.isEqual(d, b)
                  });
                f && h.push(c)
              })) : h = a.util.toArray(c.items).findIndex(function(b) {
                return !!a.util.isEqual(b.value, e) || void 0 === b.value && b.content === e
              });
              var m = a.util.assign({
                theme: this.options.theme
              }, a.util.omit(c, "type", "group", "index", "options"), {
                options: c.items,
                selected: h
              });
              g = new a.ui.SelectButtonGroup(m), g.$el.attr({
                "data-attribute": d,
                "data-type": c.type
              }), g.render(), j = $("<label/>", {
                html: c.label || d
              }), f = $("<div/>").append(j, g.el), c.previewMode ? (i = g.selection, g.on("mouseout", function() {
                g.selection = i, this.processInput(g.$el, {
                  previewCancel: !0,
                  dry: !0
                })
              }, this), g.on("option:hover", function(a, d) {
                c.multi ? g.selection = b.uniq(g.selection.concat([a])) : g.selection = a, this.processInput(g.$el, {
                  dry: !0
                })
              }, this), g.on("option:select", function(b, c) {
                var d = void 0 === i ? void 0 : g.getSelectionValue(i),
                  e = g.getSelectionValue(b),
                  f = a.util.isEqual(d, e);
                this.processInput(g.$el, {
                  previewDone: !0,
                  dry: f,
                  originalValue: d
                }), i = b
              }, this)) : g.on("option:select", function(a, b) {
                this.processInput(g.$el)
              }, this), this.widgets[d] = g;
              break;
            default:
              f = this.renderOwnFieldContent({
                options: c,
                type: c.type,
                label: c.label || d,
                attribute: d,
                value: e
              })
          }
          return f
        },
        renderGroup: function(a) {
          a = a || {};
          var b = $("<div/>").addClass("group").attr("data-name", a.name),
            c = $("<h3/>").addClass("group-label").text(a.label || a.name);
          return b.append(c)
        },
        renderOwnFieldContent: function(b) {
          var c, d, e, f, g, h, i, j;
          switch (j = $("<label/>").text(b.label), b.type) {
            case "number":
              d = $("<input/>", {
                type: "number",
                min: b.options.min,
                max: b.options.max,
                step: b.options.step
              }).val(b.value), c = [j, $("<div/>").addClass("input-wrapper").append(d)];
              break;
            case "range":
              j.addClass("with-output"), f = $("<output/>").text(b.value), g = $("<span/>").addClass("units").text(b.options.unit), d = $("<input/>", {
                type: "range",
                name: b.type,
                min: b.options.min,
                max: b.options.max,
                step: b.options.step
              }).val(b.value), d.on("change input", function() {
                f.text(d.val())
              }), c = [j, f, g, d];
              break;
            case "textarea":
              d = $("<textarea/>").text(b.value), c = [j, $("<div/>").addClass("input-wrapper").append(d)];
              break;
            case "content-editable":
              var k = a.util.isString(b.value) ? b.value.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;") : "";
              d = $("<div/>").prop("contenteditable", !0).css("display", "inline-block").html(k).on("blur", this.onContentEditableBlur), c = [j, $("<div/>").addClass("input-wrapper").append(d)];
              break;
            case "select":
              var l = b.options.items;
              d = $("<select/>"), b.options.multiple && d.prop({
                size: b.options.size || l.length,
                multiple: !0
              });
              var m = function(c) {
                return b.options.multiple ? a.util.toArray(b.value).find(function(b) {
                  return a.util.isEqual(c, b)
                }) : a.util.isEqual(c, b.value)
              };
              a.util.toArray(l).forEach(function(a) {
                var b = $("<option/>", {
                  value: a.value
                }).text(a.content);
                m(a.value) && b.attr("selected", "selected"), d.append(b)
              }), c = [j, d];
              break;
            case "toggle":
              h = $("<span><i/></span>"), d = $("<input/>", {
                type: "checkbox"
              }).prop("checked", !! b.value), e = $("<div/>").addClass(b.type), c = [j, e.append(d, h)];
              break;
            case "color":
              d = $("<input/>", {
                type: "color"
              }).val(b.value), c = [j, d];
              break;
            case "text":
              d = $("<input/>", {
                type: "text"
              }).val(b.value), c = [j, $("<div/>").addClass("input-wrapper").append(d)];
              break;
            case "object":
              d = $("<div/>"), i = $("<div/>").addClass("object-properties"), c = [j, d.append(i)];
              break;
            case "list":
              h = $("<button/>").addClass("btn-list-add").text(b.options.addButtonLabel || "+"), i = $("<div/>").addClass("list-items"), d = $("<div/>"), c = [j, d.append(h, i)]
          }
          return d && d.addClass(b.type).attr({
            "data-type": b.type,
            "data-attribute": b.attribute
          }), $.fn.append.apply($("<div>"), c).children()
        },
        onContentEditableBlur: function(a) {
          var b = $("<input/>", {
            disabled: !0,
            tabIndex: -1,
            style: {
              width: "1px",
              height: "1px",
              border: "none",
              margin: 0,
              padding: 0
            }
          }).appendTo(this.$el);
          b.focus(), b[0].setSelectionRange(0, 0), b.blur().remove(), $(a.target).trigger("change")
        },
        replaceHTMLEntity: function(a, b) {
          return this.HTMLEntities[b] || ""
        },
        renderObjectProperty: function(a) {
          a = a || {};
          var b = $("<div/>", {
            "data-property": a.property,
            "class": "object-property"
          });
          return b
        },
        renderListItem: function(a) {
          a = a || {};
          var b = $("<button/>").addClass("btn-list-del").text(a.options.removeButtonLabel || "-"),
            c = $("<div/>", {
              "data-index": a.index,
              "class": "list-item"
            });
          return c.append(b)
        },
        renderFieldContainer: function(a) {
          a = a || {};
          var b = $("<div/>", {
            "data-field": a.path,
            "class": "field " + a.type + "-field"
          });
          return b
        },
        renderTemplate: function(c, d, e, f) {
          c = c || this.$el, f = f || {}, this.resolveBindings(d);
          var g = this.renderFieldContainer({
            path: e,
            type: d.type
          });
          d.when && !this.isExpressionValid(d.when) && (g.addClass("hidden"), d.when.otherwise && d.when.otherwise.unset && this.unsetProperty(e));
          var h = this.getCellAttributeValue(e, d),
            i = this.renderFieldContent(d, e, h);
          if (g.append(i), a.util.setAttributesBySelector(g, d.attrs), "list" === d.type) a.util.toArray(h).forEach(function(a, b) {
            var c = this.renderListItem({
              index: b,
              options: d
            });
            this.renderTemplate(c, d.item, e + "/" + b), i.children(".list-items").append(c)
          }, this);
          else if ("object" === d.type) {
            d.flatAttributes = this.flattenInputs(d.properties);
            var j = Object.keys(d.flatAttributes).map(function(a) {
              var b = this[a];
              return b.path = a, b
            }, d.flatAttributes);
            j = b.sortBy(j, function(a) {
              return a.index
            }), j.forEach(function(a) {
              var b = this.renderObjectProperty({
                property: a.path
              });
              this.renderTemplate(b, a, e + "/" + a.path), i.children(".object-properties").append(b)
            }, this)
          }
          f.replace ? c.find('[data-field="' + e + '"]').replaceWith(g) : c.append(g)
        },
        updateInputPosition: function() {
          var a = this._byPath["position/x"],
            b = this._byPath["position/y"],
            c = this.getModel().get("position");
          a && a.val(c.x), b && b.val(c.y)
        },
        updateInputSize: function() {
          var a = this._byPath["size/width"],
            b = this._byPath["size/height"],
            c = this.getModel().get("size");
          a && a.val(c.width), b && b.val(c.height)
        },
        updateInputAngle: function() {
          var a = this._byPath.angle,
            b = this.getModel().get("angle");
          a && a.val(b)
        },
        validateInput: function(a, b, c) {
          switch (a) {
            case "select-box":
            case "color-palette":
            case "select-button-group":
              return !0;
            default:
              return this.options.validateInput(b, c, a)
          }
        },
        onChangeInput: function(a) {
          this.processInput($(a.target))
        },
        processInput: function(a, b) {
          var c = a.attr("data-attribute"),
            d = a.attr("data-type");
          if (this.validateInput(d, a[0], c)) {
            this.options.live && this.updateCell(a, c, b);
            var e = this.getFieldValue(a[0], d),
              f = this.parse(d, e, a[0]);
            this.trigger("change:" + c, f, a[0], b)
          }
        },
        updateDependants: function(b) {
          a.util.toArray(this._when[b]).forEach(function(a) {
            var b = this._byPath[a.path],
              c = b.closest(".field"),
              d = c.hasClass("hidden"),
              e = this.isExpressionValid(a.expression);
            c.toggleClass("hidden", !e), a.expression.otherwise && a.expression.otherwise.unset && this.options.live && (e ? d && this.updateCell(b, a.path) : (this.unsetProperty(a.path), this.renderTemplate(null, this.flatAttributes[a.path], a.path, {
              replace: !0
            }), this.afterRender()))
          }, this)
        },
        unsetProperty: function(b, c) {
          var d = this.getModel(),
            e = b.split("/"),
            f = e[0],
            g = e.slice(1).join("/");
          if (c = c || {}, c.inspector = this.cid, c["inspector_" + this.cid] = !0, "attrs" == b) d.removeAttr(g, c);
          else if (b == f) d.unset(f, c);
          else {
            var h = a.util.merge({}, d.get(f)),
              i = a.util.unsetByPath(h, g, "/");
            d.set(f, i, c)
          }
        },
        getOptions: function(a) {
          if (0 !== a.length) {
            var b = a.attr("data-attribute"),
              c = this.flatAttributes[b];
            if (!c) {
              var d = a.parent().closest("[data-attribute]"),
                e = d.attr("data-attribute");
              c = this.getOptions(d);
              var f = b.replace(e + "/", ""),
                g = c;
              c = g.item || g.flatAttributes[f], c.parent = g
            }
            return c
          }
        },
        updateCell: function(b, c, d) {
          var e = this.getModel(),
            f = {};
          b ? f[c] = b : f = this._byPath, this.startBatchCommand();
          var g = {},
            h = {};
          a.util.forIn(f, function(b, c) {
            if (!b.closest(".field").hasClass("hidden")) {
              var d, f, i = b.attr("data-type");
              switch (i) {
                case "list":
                  f = this.findParentListByPath(c), f ? (d = c.substr(f.length + 1), a.util.setByPath(g[f], d, [], "/")) : g[c] = [];
                  break;
                case "object":
                  break;
                default:
                  if (!this.validateInput(i, b[0], c)) return;
                  var j = this.getFieldValue(b[0], i),
                    k = this.parse(i, j, b[0]),
                    l = this.getOptions(b);
                  if (l.valueRegExp) {
                    var m = a.util.getByPath(e.attributes, c, "/") || l.defaultValue;
                    k = m.replace(new RegExp(l.valueRegExp), "$1" + k + "$3")
                  }
                  if (f = this.findParentListByPath(c), f && g[f]) return d = c.substr(f.length + 1), void a.util.setByPath(g[f], d, k, "/");
                  h[c] = k
              }
            }
          }.bind(this)), a.util.forIn(h, function(a, b) {
            this.setProperty(b, a, d), this.updateBindings(b), this.updateDependants(b)
          }.bind(this)), a.util.forIn(g, function(b, c) {
            this.setProperty(c, b, a.util.assign({
              rewrite: !0
            }, d)), this.updateBindings(c), this.updateDependants(c)
          }.bind(this)), this.updateGroupsVisibility(), this.stopBatchCommand()
        },
        findParentListByPath: function(a) {
          for (var b, c, d = a.split("/"), e = 0, f = d[e], g = this.flatAttributes[f]; e < d.length - 1 && (!g || "list" !== g.type);) g && "object" === g.type && (b = g.properties), c = d[++e], f += "/" + c, g = b ? b[c] : this.flatAttributes[f];
          return f !== a ? f : null
        },
        getFieldValue: function(b, c) {
          if (a.util.isFunction(this.options.getFieldValue)) {
            var d = this.options.getFieldValue(b, c);
            if (d) return d.value
          }
          var e = $(b);
          switch (c) {
            case "select-box":
            case "color-palette":
            case "select-button-group":
              var f = e.attr("data-attribute"),
                g = this.widgets[f];
              return g ? g.getSelectionValue() : a.dia.Cell.prototype.prop.call(this.getModel(), f);
            case "content-editable":
              return e.html().replace(/<br(\s*)\/*>/gi, "\n").replace(/<[p|div]\s/gi, "\n$0").replace(/(<([^>]+)>)/gi, "").replace(/&(\w+);/gi, this.replaceHTMLEntity).replace(/\n$/, "");
            default:
              return e.val()
          }
        },
        setProperty: function(b, c, d) {
          d = d || {}, d.inspector = this.cid;
          var e = a.dia.Cell.prototype.prop,
            f = this.getModel();
          d.previewDone && e.call(f, b, d.originalValue, {
            rewrite: !0,
            silent: !0
          }), void 0 === c ? a.dia.Cell.prototype.removeProp.call(f, b, d) : e.call(f, b, a.util.clone(c), d)
        },
        parse: function(a, b, c) {
          switch (a) {
            case "number":
            case "range":
              b = parseFloat(b);
              break;
            case "toggle":
              b = c.checked
          }
          return b
        },
        startBatchCommand: function() {
          this.inBatch || (this.inBatch = !0, this.getModel().startBatch("inspector", {
            cid: this.cid
          }))
        },
        stopBatchCommand: function() {
          this.inBatch && (this.getModel().stopBatch("inspector", {
            cid: this.cid
          }), this.inBatch = !1)
        },
        afterRender: function() {
          this.cacheInputs(), this.updateGroupsVisibility(), this.trigger("render")
        },
        addListItem: function(a) {
          var b = $(a.target),
            c = b.closest("[data-attribute]"),
            d = c.attr("data-attribute"),
            e = this.getOptions(c),
            f = c.children(".list-items").children(".list-item").last(),
            g = 0 === f.length ? -1 : parseInt(f.attr("data-index"), 10),
            h = g + 1,
            i = this.renderListItem({
              index: h,
              options: e
            });
          this.renderTemplate(i, e.item, d + "/" + h), b.parent().children(".list-items").append(i), i.find("input:first").focus(), this.afterRender(), this.options.live && this.updateCell()
        },
        deleteListItem: function(a) {
          var b = $(a.target).closest(".list-item");
          b.nextAll(".list-item").each(function() {
            var a = parseInt($(this).attr("data-index"), 10),
              b = a - 1;
            $(this).find("[data-field]").each(function() {
              $(this).attr("data-field", $(this).attr("data-field").replace("/" + a, "/" + b))
            }), $(this).find("[data-attribute]").each(function() {
              $(this).attr("data-attribute", $(this).attr("data-attribute").replace("/" + a, "/" + b))
            }), $(this).attr("data-index", b)
          }), b.remove(), this.afterRender(), this.options.live && this.updateCell()
        },
        bindDocumentEvents: function() {
          var a = this.getEventNamespace();
          this.$document.on("mouseup" + a + " touchend" + a, this.pointerup)
        },
        unbindDocumentEvents: function() {
          this.$document.off(this.getEventNamespace())
        },
        pointerdown: function(a) {
          this.bindDocumentEvents(), this.startBatchCommand(), this._$activeField = $(a.currentTarget).addClass("is-in-action")
        },
        pointerup: function() {
          this.unbindDocumentEvents(), this.stopBatchCommand(), this._$activeField && (this._$activeField.removeClass("is-in-action"), this._$activeField = null)
        },
        pointerfocusin: function(a) {
          a.stopPropagation(), $(a.currentTarget).addClass("is-focused")
        },
        pointerfocusout: function(a) {
          a.stopPropagation(), $(a.currentTarget).removeClass("is-focused")
        },
        onRemove: function() {
          this.unbindDocumentEvents(), this.removeWidgets(), this === this.constructor.instance && (this.constructor.instance = null)
        },
        removeWidgets: function() {
          var a = this.widgets;
          for (var b in a) a[b].remove();
          this.widgets = {}
        },
        onGroupLabelClick: function(a) {
          a.preventDefault(), this.options.multiOpenGroups || this.closeGroups();
          var b = $(a.target).closest(".group");
          this.toggleGroup(b)
        },
        toggleGroup: function(b) {
          var c = a.util.isString(b) ? this.$('.group[data-name="' + b + '"]') : $(b);
          c.hasClass("closed") ? this.openGroup(c) : this.closeGroup(c)
        },
        closeGroup: function(b, c) {
          c = c || {};
          var d = a.util.isString(b) ? this.$('.group[data-name="' + b + '"]') : $(b);
          !c.init && d.hasClass("closed") || (d.addClass("closed"), this.trigger("group:close", d.data("name"), c))
        },
        openGroup: function(b, c) {
          c = c || {};
          var d = a.util.isString(b) ? this.$('.group[data-name="' + b + '"]') : $(b);
          (c.init || d.hasClass("closed")) && (d.removeClass("closed"), this.trigger("group:open", d.data("name"), c))
        },
        closeGroups: function() {
          for (var a = 0, b = this.$groups.length; a < b; a++) this.closeGroup(this.$groups[a])
        },
        openGroups: function() {
          for (var a = 0, b = this.$groups.length; a < b; a++) this.openGroup(this.$groups[a])
        },
        COMPOSITE_OPERATORS: ["not", "and", "or", "nor"],
        PRIMITIVE_OPERATORS: ["eq", "ne", "regex", "text", "lt", "lte", "gt", "gte", "in", "nin", "equal"],
        _isComposite: function(a) {
          return b.intersection(this.COMPOSITE_OPERATORS, Object.keys(a)).length > 0
        },
        _isPrimitive: function(a) {
          var c = Object.keys(this.options.operators).concat(this.PRIMITIVE_OPERATORS);
          return b.intersection(c, Object.keys(a)).length > 0
        },
        _evalCustomPrimitive: function(a, b, c) {
          return !!this.options.operators[a].apply(this, [this.getModel(), b].concat(c))
        },
        _evalPrimitive: function(b) {
          return Object.keys(b).reduce(function(c, d) {
            var e = b[d];
            return Object.keys(e).reduce(function(b, c) {
              var f = e[c],
                g = this.getCellAttributeValue(c);
              if (a.util.isFunction(this.options.operators[d])) return this._evalCustomPrimitive(d, g, f);
              switch (d) {
                case "eq":
                  return f == g;
                case "ne":
                  return f != g;
                case "regex":
                  return new RegExp(f).test(g);
                case "text":
                  return !f || a.util.isString(g) && g.toLowerCase().indexOf(f) > -1;
                case "lt":
                  return g < f;
                case "lte":
                  return g <= f;
                case "gt":
                  return g > f;
                case "gte":
                  return g >= f;
                case "in":
                  return Array.isArray(f) && f.includes(g);
                case "nin":
                  return Array.isArray(f) && !f.includes(g);
                case "equal":
                  return a.util.isEqual(f, g);
                default:
                  return b
              }
            }.bind(this), !1)
          }.bind(this), !1)
        },
        _evalExpression: function(a) {
          return this._isPrimitive(a) ? this._evalPrimitive(a) : Object.keys(a).reduce(function(c, d) {
            var e = a[d];
            if ("not" == d) return !this._evalExpression(e);
            var f = b.toArray(e).map(this._evalExpression, this);
            switch (d) {
              case "and":
                return f.every(function(a) {
                  return !!a
                });
              case "or":
                return f.some(function(a) {
                  return !!a
                });
              case "nor":
                return !f.some(function(a) {
                  return !!a
                });
              default:
                return c
            }
          }.bind(this), !1)
        },
        _extractVariables: function(a) {
          return Array.isArray(a) || this._isComposite(a) ? b.toArray(a).reduce(function(a, b) {
            return a.concat(this._extractVariables(b))
          }.bind(this), []) : b.toArray(a).reduce(function(a, b) {
            return Object.keys(b)
          }, [])
        },
        isExpressionValid: function(b) {
          return b = a.util.omit(b, "otherwise", "dependencies"), this._evalExpression(b)
        },
        extractExpressionPaths: function(a) {
          var c = a && a.dependencies || [];
          return a = b.omit(a, "otherwise", "dependencies"), b.uniq(this._extractVariables(a).concat(c))
        },
        getGroupsStateKey: function() {
          if (a.util.isFunction(this.options.stateKey)) return this.options.stateKey(this.getModel());
          throw new Error("Inspector: Option stateKey must be a function")
        },
        storeGroupsState: function() {
          var c = this.getGroupsStateKey(),
            d = b.toArray(this.$(".group.closed"));
          a.ui.Inspector.groupStates[c] = d.map(function(a) {
            return $(a).attr("data-name")
          })
        },
        getGroupsState: function() {
          return a.ui.Inspector.groupStates[this.getGroupsStateKey()]
        },
        restoreGroupsState: function() {
          var b = function(b, c) {
              a.util.forIn(c.options.groups, function(a, c) {
                b(a, c) ? this.closeGroup(c) : this.openGroup(c)
              }.bind(c))
            },
            c = this.getGroupsStateKey();
          a.ui.Inspector.groupStates[c] ? b(function(b, d) {
            return a.ui.Inspector.groupStates[c].includes(d)
          }, this) : b(function(a) {
            return a.closed
          }, this)
        }
      }, {
        groupStates: {},
        instance: null,
        create: function(b, c) {
          c = c || {}, a.util.defaults(c, {
            restoreGroupsState: !0,
            storeGroupsState: !0
          });
          var d = c.cell || c.cellView.model,
            e = this.instance;
          return e && e.options.cell === d || (e && e.el.parentNode && (c.storeGroupsState && e.storeGroupsState(), e.updateCell(), e.remove()), e = new this(c).render(), this.instance = e, $(b).html(e.el), c.restoreGroupsState && e.restoreGroupsState()), e
        },
        close: function() {
          var a = this.instance;
          a && a.remove()
        }
      })
    }(joint, joint.util);
  joint.ui.FreeTransform = joint.mvc.View.extend({
    className: "free-transform",
    events: {
      "mousedown .resize": "startResizing",
      "mousedown .rotate": "startRotating",
      "touchstart .resize": "startResizing",
      "touchstart .rotate": "startRotating"
    },
    DIRECTIONS: ["nw", "n", "ne", "e", "se", "s", "sw", "w"],
    POSITIONS: ["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"],
    options: {
      cellView: void 0,
      rotateAngleGrid: 15,
      preserveAspectRatio: !1,
      minWidth: 0,
      minHeight: 0,
      maxWidth: 1 / 0,
      maxHeight: 1 / 0,
      allowOrthogonalResize: !0,
      allowRotation: !0,
      clearAll: !0,
      clearOnBlankPointerdown: !0
    },
    init: function() {
      var a = this.options;
      a.cellView && joint.util.defaults(a, {
        cell: a.cellView.model,
        paper: a.cellView.paper,
        graph: a.cellView.paper.model
      }), joint.util.bindAll(this, "update", "remove", "pointerup", "pointermove");
      var b = a.paper,
        c = a.graph;
      a.clearAll && this.constructor.clear(b), $(document.body).on("mousemove touchmove", this.pointermove), $(document).on("mouseup touchend", this.pointerup), this.listenTo(c, "all", this.update), this.listenTo(b, "scale translate", this.update), this.listenTo(c, "reset", this.remove), this.listenTo(a.cell, "remove", this.remove), a.clearOnBlankPointerdown && this.listenTo(b, "blank:pointerdown", this.remove), b.$el.append(this.el), this.constructor.registerInstanceToPaper(this, b)
    },
    renderHandles: function() {
      var a = $("<div/>").prop("draggable", !1),
        b = a.clone().addClass("rotate"),
        c = this.POSITIONS.map(function(b) {
          return a.clone().addClass("resize").attr("data-position", b)
        });
      this.$el.empty().append(c, b)
    },
    render: function() {
      this.renderHandles(), this.$el.attr("data-type", this.options.cell.get("type")), this.$el.toggleClass("no-orthogonal-resize", this.options.preserveAspectRatio || !this.options.allowOrthogonalResize), this.$el.toggleClass("no-rotation", !this.options.allowRotation), this.update()
    },
    update: function() {
      var a = this.options.paper.matrix(),
        b = this.options.cell.getBBox();
      b.x *= a.a, b.x += a.e, b.y *= a.d, b.y += a.f, b.width *= a.a, b.height *= a.d;
      var c = g.normalizeAngle(this.options.cell.get("angle") || 0),
        d = "rotate(" + c + "deg)";
      this.$el.css({
        width: b.width + 4,
        height: b.height + 4,
        left: b.x - 3,
        top: b.y - 3,
        transform: d,
        "-webkit-transform": d,
        "-ms-transform": d
      });
      var e = Math.floor(c * (this.DIRECTIONS.length / 360));
      if (e != this._previousDirectionsShift) {
        var f = this.DIRECTIONS.slice(e).concat(this.DIRECTIONS.slice(0, e));
        this.$(".resize").removeClass(this.DIRECTIONS.join(" ")).each(function(a, b) {
          $(b).addClass(f[a])
        }), this._previousDirectionsShift = e
      }
    },
    calculateTrueDirection: function(a) {
      var b = this.options.cell,
        c = g.normalizeAngle(b.get("angle")),
        d = this.POSITIONS.indexOf(a);
      return d += Math.floor(c * (this.POSITIONS.length / 360)), d %= this.POSITIONS.length, this.POSITIONS[d]
    },
    startResizing: function(a) {
      a.stopPropagation(), this.options.graph.startBatch("free-transform", {
        freeTransform: this.cid
      });
      var b = $(a.target).data("position"),
        c = this.calculateTrueDirection(b),
        d = 0,
        e = 0;
      b.split("-").forEach(function(a) {
        d = {
            left: -1,
            right: 1
          }[a] || d, e = {
            top: -1,
            bottom: 1
          }[a] || e
      });
      var f = this.toValidResizeDirection(b),
        h = {
          "top-right": "bottomLeft",
          "top-left": "corner",
          "bottom-left": "topRight",
          "bottom-right": "origin"
        }[f];
      this._initial = {
        angle: g.normalizeAngle(this.options.cell.get("angle") || 0),
        resizeX: d,
        resizeY: e,
        selector: h,
        direction: f,
        relativeDirection: b,
        trueDirection: c
      }, this._action = "resize", this.startOp(a.target)
    },
    toValidResizeDirection: function(a) {
      return {
          top: "top-left",
          bottom: "bottom-right",
          left: "bottom-left",
          right: "top-right"
        }[a] || a
    },
    startRotating: function(a) {
      a.stopPropagation(), this.options.graph.startBatch("free-transform", {
        freeTransform: this.cid
      });
      var b = this.options.cell.getBBox().center(),
        c = this.options.paper.snapToGrid({
          x: a.clientX,
          y: a.clientY
        });
      this._initial = {
        centerRotation: b,
        modelAngle: g.normalizeAngle(this.options.cell.get("angle") || 0),
        startAngle: g.point(c).theta(b)
      }, this._action = "rotate", this.startOp(a.target)
    },
    pointermove: function(a) {
      if (this._action) {
        a = joint.util.normalizeEvent(a);
        var b = this.options,
          c = b.paper.snapToGrid({
            x: a.clientX,
            y: a.clientY
          }),
          d = b.paper.options.gridSize,
          e = b.cell,
          f = this._initial;
        switch (this._action) {
          case "resize":
            var h = e.getBBox(),
              i = g.point(c).rotate(h.center(), f.angle),
              j = i.difference(h[f.selector]()),
              k = f.resizeX ? j.x * f.resizeX : h.width,
              l = f.resizeY ? j.y * f.resizeY : h.height;
            if (k = g.snapToGrid(k, d), l = g.snapToGrid(l, d), k = Math.max(k, b.minWidth || d), l = Math.max(l, b.minHeight || d), k = Math.min(k, b.maxWidth), l = Math.min(l, b.maxHeight), b.preserveAspectRatio) {
              var m = h.width * l / h.height,
                n = h.height * k / h.width;
              m > k ? l = n : k = m
            }
            h.width == k && h.height == l || e.resize(k, l, {
              freeTransform: this.cid,
              direction: f.direction,
              relativeDirection: f.relativeDirection,
              trueDirection: f.trueDirection,
              ui: !0,
              minWidth: b.minWidth,
              minHeight: b.minHeight,
              maxWidth: b.maxWidth,
              maxHeight: b.maxHeight,
              preserveAspectRatio: b.preserveAspectRatio
            });
            break;
          case "rotate":
            var o = f.startAngle - g.point(c).theta(f.centerRotation);
            e.rotate(g.snapToGrid(f.modelAngle + o, b.rotateAngleGrid), !0)
        }
      }
    },
    pointerup: function(a) {
      this._action && (this.stopOp(), this.options.graph.stopBatch("free-transform", {
        freeTransform: this.cid
      }), this._action = null, this._initial = null)
    },
    onRemove: function() {
      $(document.body).off("mousemove touchmove", this.pointermove), $(document).off("mouseup touchend", this.pointerup), joint.ui.FreeTransform.unregisterInstanceFromPaper(this, this.options.paper)
    },
    startOp: function(a) {
      a && ($(a).addClass("in-operation"), this._elementOp = a), this.$el.addClass("in-operation")
    },
    stopOp: function() {
      this._elementOp && ($(this._elementOp).removeClass("in-operation"), this._elementOp = null), this.$el.removeClass("in-operation")
    }
  }, {
    instancesByPaper: {},
    clear: function(a) {
      a.trigger("freetransform:create"), this.removeInstancesForPaper(a)
    },
    removeInstancesForPaper: function(a) {
      joint.util.invoke(this.getInstancesForPaper(a), "remove")
    },
    getInstancesForPaper: function(a) {
      return this.instancesByPaper[a.cid] || {}
    },
    registerInstanceToPaper: function(a, b) {
      this.instancesByPaper[b.cid] || (this.instancesByPaper[b.cid] = {}), this.instancesByPaper[b.cid][a.cid] = a
    },
    unregisterInstanceFromPaper: function(a, b) {
      this.instancesByPaper[b.cid] && (this.instancesByPaper[b.cid][a.cid] = null)
    }
  });
  joint.ui.Tooltip = joint.mvc.View.extend({
    className: "tooltip",
    options: {
      left: void 0,
      right: void 0,
      top: void 0,
      bottom: void 0,
      position: void 0,
      positionSelector: void 0,
      direction: "auto",
      minResizedWidth: 100,
      padding: 0,
      rootTarget: null,
      target: null,
      trigger: "hover",
      viewport: {
        selector: null,
        padding: 0
      },
      dataAttributePrefix: "tooltip",
      template: '<div class="tooltip-arrow"/><div class="tooltip-arrow-mask"/><div class="tooltip-content"/>'
    },
    init: function() {
      this.eventNamespace = ("." + this.className + this.cid).replace(/ /g, "_"), this.settings = {};
      var a = this.options.trigger.split(" ");
      joint.util.bindAll(this, "render", "hide", "show", "toggle", "isVisible", "position"), this.options.rootTarget ? (this.$rootTarget = $(this.options.rootTarget), a.forEach(function(a) {
        switch (a) {
          case "click":
            this.$rootTarget.on("click" + this.eventNamespace, this.options.target, this.toggle);
            break;
          case "hover":
            this.$rootTarget.on("mouseover" + this.eventNamespace, this.options.target, this.render);
            break;
          case "focus":
            this.$rootTarget.on("focusin" + this.eventNamespace, this.options.target, this.render)
        }
      }, this)) : (this.$target = $(this.options.target), a.forEach(function(a) {
        switch (a) {
          case "click":
            this.$target.on("click" + this.eventNamespace, this.toggle);
            break;
          case "hover":
            this.$target.on("mouseover" + this.eventNamespace, this.render);
            break;
          case "focus":
            this.$target.on("focusin" + this.eventNamespace, this.render)
        }
      }, this)), this.$el.append(this.options.template)
    },
    onRemove: function() {
      this.options.rootTarget ? this.$rootTarget.off(this.eventNamespace) : this.$target.off(this.eventNamespace)
    },
    hide: function() {
      var a = this.settings;
      a && (this.unbindHideActions(a.currentTarget), this.$el.removeClass(a.className), this.$el.remove())
    },
    show: function(a) {
      this.render(a || {
          target: this.options.target
        })
    },
    toggle: function(a) {
      this.isVisible() ? this.hide() : this.show(a)
    },
    isVisible: function() {
      return document.body.contains(this.el)
    },
    render: function(a) {
      var b = void 0 !== a.x && void 0 !== a.y ? a : null,
        c = $(a.target).closest(this.options.target)[0],
        d = this.settings = this.getTooltipSettings(c);
      d.currentTarget = c, this.bindHideActions(c);
      var e;
      e = b ? {
        x: b.x,
        y: b.y,
        width: 1,
        height: 1
      } : joint.util.getElementBBox(c), this.$(".tooltip-content").html(d.content), this.$el.hide(), this.$el.removeClass("left right top bottom"), this.$el.addClass(d.className), $(document.body).append(this.$el);
      var f = this.$("img");
      f.length ? f.on("load", function() {
        this.position(e), this.$el.addClass("rendered")
      }.bind(this)) : (this.position(e), this.$el.addClass("rendered"))
    },
    getTooltipSettings: function(a) {
      var b = this.loadDefinitionFromElementData(a);
      return this.evaluateOptions(a, b)
    },
    unbindHideActions: function(a) {
      var b = this.eventNamespace + ".remove";
      $(a).off(b), clearInterval(this.interval)
    },
    bindHideOnRemoveTarget: function(a) {
      clearInterval(this.interval), this.interval = setInterval(function() {
        $.contains(document, a) || (clearInterval(this.interval), this.hide())
      }.bind(this), 500)
    },
    bindHideActions: function(a) {
      var b = this.settings,
        c = $(a),
        d = this.eventNamespace + ".remove";
      this.bindHideOnRemoveTarget(a), this.options.trigger.split(" ").forEach(function(a) {
        var e = {
            hover: ["mouseout", "mousedown"],
            focus: ["focusout"]
          },
          f = e[a] || [];
        b.hideTrigger && (f = b.hideTrigger.split(" ") || []), f.forEach(function(a) {
          c.on(a + d, this.hide)
        }, this)
      }, this)
    },
    evaluateOptions: function(a, b) {
      b = b || {};
      var c = joint.util.assign({}, b, this.options);
      return joint.util.forIn(c, function(d, e) {
        var f = joint.util.isFunction(d) ? d(a) : d;
        c[e] = void 0 === f || null === f ? b[e] : f
      }), this.normalizePosition(c), c
    },
    loadDefinitionFromElementData: function(a) {
      if (!a) return {};
      var b = function(a) {
          return "left" === a || "bottom" === a || "top" === a || "right" === a
        },
        c = this.getAllAttrs(a, "data-" + this.options.dataAttributePrefix),
        d = {};
      return joint.util.forIn(c, function(a, c) {
        "" === c && (c = "content"), b(c) || (d[c] = a)
      }), d
    },
    getAllAttrs: function(a, b) {
      for (var c = b || "", d = a.attributes, e = {}, f = 0, g = d.length; f < g; f++) {
        var h = d[f];
        if (h && h.name.startsWith(c)) {
          var i = joint.util.camelCase(h.name.slice(c.length));
          e[i] = h.value
        }
      }
      return e
    },
    normalizePosition: function(a) {
      var b = a.left || a.right || a.top || a.bottom;
      !a.position && b && (a.left && (a.position = "left"), a.right && (a.position = "right"), a.top && (a.position = "top"), a.bottom && (a.position = "bottom")), !a.positionSelector && b && (a.positionSelector = b)
    },
    position: function(a) {
      var b = this.settings;
      this.$el.show(), this.$el.css("width", "auto");
      var c = this.getViewportViewBBox(),
        d = this.getTooltipBBox(a, c),
        e = {};
      "left" === b.position || "right" === b.position ? e.top = a.y + a.height / 2 - d.y : "top" === b.position || "bottom" === b.position ? e.left = a.x + a.width / 2 - d.x : e.top = a.y + a.height / 2 - d.y, this.$el.css({
        left: d.x,
        top: d.y,
        width: d.width || "auto"
      });
      var f = this.$(".tooltip-arrow, .tooltip-arrow-mask");
      f.removeAttr("style"), f.css(e), b.direction && "off" !== b.direction && this.$el.addClass("auto" === b.direction ? b.position || "left" : b.direction)
    },
    getViewportViewBBox: function() {
      var a = this.settings,
        b = a.viewport.selector ? $(a.currentTarget).closest(a.viewport.selector) : "html",
        c = joint.util.getElementBBox(b),
        d = $(window);
      a.viewport.selector || (c.width = d.width() + d.scrollLeft(), c.height = d.height() + d.scrollTop());
      var e = a.viewport.padding || 0;
      return c.x += e, c.y += e, c.width -= 2 * e, c.height -= 2 * e, c
    },
    getPosition: function(a, b, c, d) {
      var e = this.settings,
        f = e.position || "left",
        g = e.padding,
        h = Math.min(e.minResizedWidth, c.width + g),
        i = {
          left: function(f) {
            var i = {
              x: a.x + a.width + g,
              y: b.y + b.height / 2 - c.height / 2
            };
            if (f) {
              var j = d.x + d.width - i.x;
              if (j > h && j < c.width + g && (i.width = j), j < h) return e.position = "right", this.right(!1)
            }
            return i
          },
          right: function(f) {
            var i = {
              x: a.x - c.width - g,
              y: b.y + b.height / 2 - c.height / 2
            };
            if (f) {
              var j = a.x - g - d.x;
              if (j > h && j < c.width + g && (i.width = j, i.x = d.x), j < h) return e.position = "left", this.left(!1)
            }
            return i
          },
          top: function(f) {
            var h = {
              x: b.x + b.width / 2 - c.width / 2,
              y: a.y + a.height + g
            };
            if (f) {
              var i = d.y + d.height - (a.y + a.height + g);
              if (i < c.height) return e.position = "bottom", this.bottom(!1)
            }
            return h
          },
          bottom: function(f) {
            var h = {
              x: b.x + b.width / 2 - c.width / 2,
              y: a.y - c.height - g
            };
            if (f) {
              var i = a.y - g - d.y;
              if (i < c.height) return e.position = "top", this.top(!1)
            }
            return h
          }
        };
      return i[f](h > 0)
    },
    getTooltipBBox: function(a, b) {
      var c, d, e = this.measureTooltipElement();
      c = $(this.settings.positionSelector), d = c[0] ? joint.util.getElementBBox(c[0]) : a;
      var f = this.getPosition(d, a, e, b);
      f.y < b.y ? f.y = b.y : f.y + e.height > b.y + b.height && (f.y = b.y + b.height - e.height);
      var g = f.width || e.width;
      return f.x < b.x ? f.x = b.x : f.x + g > b.x + b.width && (f.x = b.x + b.width - g), f
    },
    measureTooltipElement: function() {
      var a = this.$el.clone().appendTo($("body")).css({
          left: -1e3,
          top: -500
        }),
        b = {
          width: a.outerWidth(),
          height: a.outerHeight()
        };
      return a.remove(), b
    }
  });
  joint.ui.Snaplines = joint.mvc.View.extend({
    options: {
      paper: void 0,
      distance: 10
    },
    className: "snaplines",
    init: function() {
      joint.util.bindAll(this, "hide"), this.$horizontal = $("<div>").addClass("snapline horizontal").appendTo(this.el), this.$vertical = $("<div>").addClass("snapline vertical").appendTo(this.el), this.$el.hide().appendTo(this.options.paper.el), this.startListening()
    },
    startListening: function() {
      this.stopListening(), this.listenTo(this.options.paper, "cell:pointerdown", this.captureCursorOffset), this.listenTo(this.options.paper, "cell:pointermove", this.snapWhileMoving), this.listenTo(this.options.paper.model, "batch:stop", this.onBatchStop), $(document).on("mouseup touchend", this.hide), this.filterTypes = {}, this.filterCells = {}, this.filterFunction = void 0, Array.isArray(this.options.filter) ? this.options.filter.forEach(function(a) {
        joint.util.isString(a) ? this.filterTypes[a] = !0 : this.filterCells[a.id] = !0
      }, this) : joint.util.isFunction(this.options.filter) && (this.filterFunction = this.options.filter)
    },
    onBatchStop: function(a) {
      a = a || {}, "resize" === a.batchName && this.snapWhileResizing(a.cell, a)
    },
    captureCursorOffset: function(a, b, c, d) {
      if (this.canElementMove(a)) {
        var e = a.model.get("position");
        this._cursorOffset = {
          x: c - e.x,
          y: d - e.y
        }
      }
    },
    snapWhileResizing: function(a, b) {
      if (b.ui && !b.snapped && b.direction && b.trueDirection) {
        var c = this.options.paper.findViewByModel(a);
        if (c && c.model.isElement()) {
          var d = a.getBBox(),
            e = d.bbox(a.get("angle")),
            f = e.origin(),
            h = e.corner(),
            i = g.normalizeAngle(a.get("angle")),
            j = this.options.distance,
            k = null,
            l = null,
            m = {
              vertical: 0,
              horizontal: 0
            },
            n = b.direction,
            o = b.trueDirection,
            p = b.relativeDirection;
          if (o.indexOf("right") !== -1 ? m.vertical = h.x : m.vertical = f.x, o.indexOf("bottom") !== -1 ? m.horizontal = h.y : m.horizontal = f.y, this.options.paper.model.getElements().find(function(b) {
              if (b.id === a.id || b.isEmbeddedIn(a) || this.filterTypes[b.get("type")] || this.filterCells[b.id] || this.filterFunction && this.filterFunction(b)) return !1;
              var c = b.getBBox().bbox(b.get("angle")),
                d = c.origin(),
                e = c.corner(),
                f = {
                  vertical: [d.x, e.x],
                  horizontal: [d.y, e.y]
                };
              return joint.util.forIn(f, function(a, b) {
                a = a.map(function(a) {
                  return {
                    position: a,
                    distance: Math.abs(a - m[b])
                  }
                }), a = a.filter(function(a) {
                  return a.distance < j
                }), a = joint.util.sortBy(a, function(a) {
                  return a.distance
                }), f[b] = a
              }), null === k && f.vertical.length > 0 && (k = f.vertical[0].position), null === l && f.horizontal.length > 0 && (l = f.horizontal[0].position), joint.util.isNumber(k) && joint.util.isNumber(l)
            }, this), this.hide(), joint.util.isNumber(k) || joint.util.isNumber(l)) {
            var q = 0;
            joint.util.isNumber(k) && (q = o.indexOf("right") !== -1 ? k - e.corner().x : e.origin().x - k);
            var r = 0;
            joint.util.isNumber(l) && (r = o.indexOf("bottom") !== -1 ? l - e.corner().y : e.origin().y - l);
            var s = 0,
              t = 0,
              u = !(i % 90);
            if (u) 90 === i || 270 === i ? (s = r, t = q) : (s = q, t = r);
            else {
              var v;
              v = i >= 0 && i < 90 ? 1 : i >= 90 && i < 180 ? 4 : i >= 180 && i < 270 ? 3 : 2, l && k && (r > q ? (r = 0, l = null) : (q = 0, k = null));
              var w = g.toRad(i % 90);
              q && (s = 3 === v ? q / Math.cos(w) : q / Math.sin(w)), r && (t = 3 === v ? r / Math.cos(w) : r / Math.sin(w));
              var x = 1 === v || 3 === v;
              switch (p) {
                case "top":
                case "bottom":
                  t = r ? r / (x ? Math.cos(w) : Math.sin(w)) : q / (x ? Math.sin(w) : Math.cos(w));
                  break;
                case "left":
                case "right":
                  s = q ? q / (x ? Math.cos(w) : Math.sin(w)) : r / (x ? Math.sin(w) : Math.cos(w))
              }
            }
            switch (p) {
              case "top":
              case "bottom":
                s = 0;
                break;
              case "left":
              case "right":
                t = 0
            }
            var y = this.options.paper.options.gridSize,
              z = Math.max(d.width + s, y),
              A = Math.max(d.height + t, y);
            b.minWidth && b.minWidth > y && (z = Math.max(z, b.minWidth)), b.minHeight && b.minHeight > y && (A = Math.max(A, b.minHeight)), b.maxWidth && (z = Math.min(z, b.maxWidth)), b.maxHeight && (A = Math.min(A, b.maxHeight)), b.preserveAspectRatio && (s > t ? A = z * (d.height / d.width) : z = A * (d.width / d.height)), z === d.width && A === d.height || a.resize(z, A, {
              snaplines: this.cid,
              restrictedArea: this.options.paper.getRestrictedArea(c),
              direction: n,
              relativeDirection: p,
              trueDirection: o,
              snapped: !0
            });
            var B = a.getBBox().bbox(i),
              C = 1;
            k && Math.abs(B.x - k) > C && Math.abs(B.width + B.x - k) > C && (k = null), l && Math.abs(B.y - l) > C && Math.abs(B.height + B.y - l) > C && (l = null), this.show({
              vertical: k,
              horizontal: l
            })
          }
        }
      }
    },
    canElementMove: function(a) {
      return a && a.model.isElement() && a.can("elementMove")
    },
    snapWhileMoving: function(a, b, c, d) {
      if (this.canElementMove(a)) {
        var e = a.model,
          f = e.get("position"),
          h = e.get("size"),
          i = g.rect(joint.util.assign({
            x: c - this._cursorOffset.x,
            y: d - this._cursorOffset.y
          }, h)),
          j = i.center(),
          k = i.bbox(e.get("angle")),
          l = k.origin(),
          m = k.corner(),
          n = this.options.distance,
          o = null,
          p = null,
          q = 0,
          r = 0;
        if (this.options.paper.model.getElements().find(function(a) {
            if (a === e || a.isEmbeddedIn(e) || this.filterTypes[a.get("type")] || this.filterCells[a.id] || this.filterFunction && this.filterFunction(a)) return !1;
            var b = a.getBBox().bbox(a.get("angle")),
              c = b.center(),
              d = b.origin(),
              f = b.corner();
            return null === o && (Math.abs(c.x - j.x) < n ? (o = c.x, q = .5) : Math.abs(d.x - l.x) < n ? o = d.x : Math.abs(d.x - m.x) < n ? (o = d.x, q = 1) : Math.abs(f.x - m.x) < n ? (o = f.x, q = 1) : Math.abs(f.x - l.x) < n && (o = f.x)), null === p && (Math.abs(c.y - j.y) < n ? (p = c.y, r = .5) : Math.abs(d.y - l.y) < n ? p = d.y : Math.abs(d.y - m.y) < n ? (p = d.y, r = 1) : Math.abs(f.y - m.y) < n ? (p = f.y, r = 1) : Math.abs(f.y - l.y) < n && (p = f.y)), joint.util.isNumber(o) && joint.util.isNumber(p)
          }, this), this.hide(), joint.util.isNumber(o) || joint.util.isNumber(p)) {
          joint.util.isNumber(o) && (k.x = o - q * k.width), joint.util.isNumber(p) && (k.y = p - r * k.height);
          var s = k.center(),
            t = s.x - i.width / 2,
            u = s.y - i.height / 2;
          e.translate(t - f.x, u - f.y, {
            restrictedArea: this.options.paper.getRestrictedArea(a),
            snapped: !0
          }), this.show({
            vertical: o,
            horizontal: p
          })
        }
      }
    },
    show: function(a) {
      a = a || {};
      var b = this.options.paper.matrix();
      a.horizontal ? this.$horizontal.css("top", a.horizontal * b.d + b.f).show() : this.$horizontal.hide(), a.vertical ? this.$vertical.css("left", a.vertical * b.a + b.e).show() : this.$vertical.hide(), this.$el.show()
    },
    hide: function() {
      this.$el.hide()
    },
    onRemove: function() {
      $(document).off("mouseup", this.hide)
    }
  });
  joint.ui.TextEditor = joint.mvc.View.extend({
    options: {
      text: void 0,
      newlineCharacterBBoxWidth: 10,
      placeholder: void 0,
      focus: !0,
      debug: !1,
      useNativeSelection: !0,
      annotateUrls: !1,
      urlAnnotation: {
        attrs: {
          "class": "url-annotation",
          fill: "lightblue",
          "text-decoration": "underline"
        }
      },
      textareaAttributes: {
        autocorrect: "off",
        autocomplete: "off",
        autocapitalize: "off",
        spellcheck: "false",
        tabindex: "0"
      }
    },
    className: "text-editor",
    events: {
      "keyup textarea": "onKeyup",
      "input textarea": "onInput",
      "copy textarea": "onCopy",
      "cut textarea": "onCut",
      "paste textarea": "onPaste",
      "mousedown .char-selection-box": "onMousedown",
      "dblclick .char-selection-box": "onDoubleClick",
      "click .char-selection-box": "onTripleClick"
    },
    selection: {
      start: null,
      end: null
    },
    selecting: !1,
    init: function() {
      joint.util.bindAll(this, "onMousedown", "onMousemove", "onMouseup", "onDoubleClick", "onTripleClick", "onKeydown", "onAfterPaste", "onAfterKeydown"), this.setTextElement(this.options.text), $(document.body).on("mousemove", this.onMousemove), $(document.body).on("mouseup", this.onMouseup), $(document.body).on("keydown", this.onKeydown), this.options.cellView ? this.$viewport = $(this.options.cellView.paper.viewport) : this.$viewport = $(this.options.text), this.options.annotations && this.setAnnotations(this.options.annotations)
    },
    setTextElement: function(a) {
      this.$elText && this.unbindTextElement(), this.options.text = a, this.$elText = $(a), this.$elText.on("mousedown", this.onMousedown), this.$elText.on("dblclick", this.onDoubleClick), this.$elText.on("click", this.onTripleClick)
    },
    render: function(a) {
      this.$caret = $("<div>", {
        "class": "caret"
      }), this.$selection = $("<div>"), this.$selectionBox = $("<div>", {
        "class": "char-selection-box"
      }), this.$el.append(this.$caret, this.$selection), this.$textareaContainer = $("<div>", {
        "class": "textarea-container"
      }), this.$textarea = $("<textarea>", this.options.textareaAttributes), this.textarea = this.$textarea[0], this._textContent = this.textarea.value = this.getTextContent(), this._textareaValueBeforeInput = this.textarea.value, this.$textareaContainer.append(this.textarea), this.options.focus && this.$el.append(this.$textareaContainer), $(a || document.body).append(this.$el);
      var b = V(this.options.text).bbox();
      return this.$textareaContainer.css({
        left: b.x,
        top: b.y
      }), this.focus(), V(this.options.text).attr("cursor", "text"), this.selectAll(), this
    },
    annotateURLBeforeCaret: function(a) {
      var b = this.getURLBoundary(Math.max(a - 1, 0));
      return !!b && (this.annotateURL(this.getAnnotations() || [], b[0], b[1]), !0)
    },
    hasSelection: function() {
      return joint.util.isNumber(this.selection.start) && joint.util.isNumber(this.selection.end) && this.selection.start !== this.selection.end
    },
    textContentHasChanged: function() {
      return this._textContent !== this.textarea.value
    },
    restoreTextAreaSelectionDirection: function() {
      this._selectionDirection && (this.textarea.selectionDirection = this._selectionDirection)
    },
    storeSelectionDirection: function() {
      this._selectionDirection = this.textarea.selectionDirection
    },
    onKeydown: function(a) {
      this.options.debug && console.log("onKeydown(): ", a.keyCode), this.hasSelection() && (this.deselect(), this.restoreTextAreaSelectionDirection()), setTimeout(this.onAfterKeydown, 0), this._copied = !1, this._selectionStartBeforeInput = this.textarea.selectionStart, this._selectionEndBeforeInput = this.textarea.selectionEnd
    },
    onAfterKeydown: function() {
      this.$textarea.is(":focus") && (this.storeSelectionDirection(), this.textarea.selectionStart === this.textarea.selectionEnd ? this.setCaret(this.textarea.selectionStart) : this.select(this.textarea.selectionStart, this.textarea.selectionEnd))
    },
    onKeyup: function(a) {
      this.textContentHasChanged() && this.onInput(a)
    },
    onCopy: function(a) {
      this._copied || this.copyToClipboard()
    },
    onCut: function(a) {
      this._copied || this.copyToClipboard()
    },
    copyToClipboard: function() {
      var a = document.queryCommandSupported && document.queryCommandSupported("copy");
      a && (this._copied = !0, document.execCommand("copy"))
    },
    onInput: function(a) {
      if (this.textContentHasChanged()) {
        var b = this.textarea.value.length - this._textareaValueBeforeInput.length,
          c = {
            start: this._selectionStartBeforeInput,
            end: this._selectionEndBeforeInput
          },
          d = {
            start: this.textarea.selectionStart,
            end: this.textarea.selectionEnd
          };
        this.options.debug && console.log("onInput()", a, "selectionBeforeInput", c, "selectionAfterInput", d, "diffLength", b);
        var e = this.inferTextOperationType(c, d, b),
          f = !1,
          g = this.getAnnotations();
        if (this.options.annotateUrls && "insert" === e) {
          var h = this.textarea.value.substr(c.start, b);
          this.options.debug && console.log("onInput()", "inserted text", h), /\s/.test(h) && (f = this.annotateURLBeforeCaret(c.start), f && (g = this.shiftAnnotations(g, d.end, b)))
        }
        if (g && (f || (g = this.annotate(g, c, d, b)), this.options.debug && console.log("onInput()", "modified annotations", g), this._currentAnnotationAttributes && "insert" === e)) {
          var i = {
            start: c.start,
            end: d.end,
            attrs: this._currentAnnotationAttributes
          };
          g.push(i), this._currentAnnotationAttributes = void 0, this.options.debug && console.log("onInput()", "insert annotation", i, "final annotations", g)
        }
        this._annotations = g, this.trigger("text:change", this.textarea.value, this._textareaValueBeforeInput, g, c, d), this._selectionBeforeInput = d, this._textareaValueBeforeInput = this.textarea.value, this._textContent = this.textarea.value
      }
    },
    onPaste: function(a) {
      this.options.debug && console.log("onPaste()"), this._textareaValueBeforeInput = this.textarea.value, setTimeout(this.onAfterPaste, 0)
    },
    onAfterPaste: function() {
      this.setCaret(this.textarea.selectionStart)
    },
    onMousedown: function(a) {
      if (3 !== a.originalEvent.detail) {
        this.options.debug && console.log("onMousedown()");
        var b = this.getCharNumFromEvent(a);
        this.startSelecting(), this.select(b), a.preventDefault(), a.stopPropagation()
      }
    },
    onMousemove: function(a) {
      if (this.selectionInProgress()) {
        this.options.debug && console.log("onMousemove()");
        var b = this.getCharNumFromEvent(a);
        this.storeSelectionDirection(), this.select(null, b), a.preventDefault(), a.stopPropagation()
      }
    },
    onMouseup: function(a) {
      this.selectionInProgress() && (this.options.debug && console.log("onMouseup()"), this.stopSelecting(), this.trigger("select:changed", this.selection.start, this.selection.end))
    },
    onDoubleClick: function(a) {
      this.options.debug && console.log("onDoubleClick()");
      var b = this.getCharNumFromEvent(a),
        c = this.getWordBoundary(b);
      this.select(c[0], c[1]), a.preventDefault(), a.stopPropagation()
    },
    onTripleClick: function(a) {
      3 === a.originalEvent.detail && (this.options.debug && console.log("onTripleClick()"), this.hideCaret(), this.selectAll(), a.preventDefault(), a.stopPropagation())
    },
    findAnnotationsUnderCursor: function(a, b) {
      return V.findAnnotationsAtIndex(a, b)
    },
    findAnnotationsInSelection: function(a, b, c) {
      return V.findAnnotationsBetweenIndexes(a, b, c)
    },
    inferTextOperationType: function(a, b, c) {
      return a.start === a.end && b.start === b.end && c > 0 ? "insert" : a.start === a.end && b.start === b.end && c <= 0 ? "delete-single" : a.start !== a.end && b.start === b.end && b.start === a.start ? "delete" : a.start !== a.end && b.start !== a.start ? "delete-insert" : void 0
    },
    annotate: function(a, b, c, d) {
      var e = [],
        f = this.inferTextOperationType(b, c, d);
      return joint.util.toArray(a).forEach(function(a) {
        var g, h;
        switch (f) {
          case "insert":
            a.start < b.start && b.start <= a.end ? a.end += d : a.start >= b.start && (a.start += d, a.end += d);
            break;
          case "delete-single":
            a.start < b.start && b.start <= a.end && b.start !== c.start ? a.end += d : a.start <= b.start && b.start < a.end && b.start === c.start ? a.end += d : a.start >= b.start && (a.start += d, a.end += d);
            break;
          case "delete":
            a.start <= b.start && b.start <= a.end ? b.end <= a.end ? a.end += d : a.end += c.start - a.end : a.start >= b.start && a.start < b.end ? (g = a.end - a.start, h = b.end - a.start, a.start = b.start, a.end = a.start + g - h) : a.start >= b.end && (a.start += d, a.end += d);
            break;
          case "delete-insert":
            if (a.start <= b.start && b.start <= a.end) b.start < a.end && (b.end > a.end ? a.end = c.end : a.end = c.end + (a.end - b.end));
            else if (a.start >= b.start && a.start <= b.end) {
              var i = c.start - b.start;
              h = b.end - a.start, g = a.end - a.start, a.start = b.start + i, a.end = a.start + g - h
            } else a.start >= b.start && a.end <= b.end ? a.start = a.end = 0 : a.start >= b.end && (a.start += d, a.end += d);
            break;
          default:
            this.options.debug && console.log("ui.TextEditor: Unknown text operation.")
        }
        a.end > a.start && e.push(a)
      }, this), e
    },
    shiftAnnotations: function(a, b, c) {
      return V.shiftAnnotations(a, b, c)
    },
    setCurrentAnnotation: function(a) {
      this._currentAnnotationAttributes = a
    },
    setAnnotations: function(a) {
      this._annotations = a
    },
    getAnnotations: function() {
      return this._annotations
    },
    getCombinedAnnotationAttrsAtIndex: function(a, b) {
      var c = {};
      return joint.util.toArray(b).forEach(function(b) {
        void 0 === b.start && void 0 === b.end ? V.mergeAttrs(c, b.attrs) : a >= b.start && a < b.end && V.mergeAttrs(c, b.attrs)
      }), c
    },
    getSelectionAttrs: function(a, b) {
      var c = a.start,
        d = a.end;
      if (c === d && 0 === c) return this.getCombinedAnnotationAttrsAtIndex(c, b);
      if (c === d) return this.getCombinedAnnotationAttrsAtIndex(c - 1, b);
      for (var e, f = c; f < d; f++) {
        var g = this.getCombinedAnnotationAttrsAtIndex(f, b);
        if (e && !joint.util.isEqual(e, g)) {
          e = joint.util.flattenObject(V.mergeAttrs({}, e)), g = joint.util.flattenObject(V.mergeAttrs({}, g));
          var h = {};
          joint.util.forIn(g, function(a, b) {
            e[b] === g[b] && joint.util.setByPath(h, b, a)
          }), e = h
        } else e = g
      }
      return e
    },
    getTextContent: function() {
      var a = this.options.text,
        b = V(a).find(".v-line");
      return 0 === b.length ? a.textContent : b.reduce(function(a, b, c, d) {
        var e = b.node.textContent;
        return b.hasClass("v-empty-line") && (e = ""), c === d.length - 1 ? a + e : a + e + "\n"
      }, "")
    },
    startSelecting: function() {
      this.selecting = !0
    },
    stopSelecting: function() {
      this.selecting = !1
    },
    selectionInProgress: function() {
      return this.selecting === !0
    },
    selectAll: function() {
      return this.select(0, this.getNumberOfChars())
    },
    select: function(a, b) {
      return this.options.debug && console.log("select(", a, b, ")"), void 0 === b && (b = a), joint.util.isNumber(a) && (this.selection.start = a), joint.util.isNumber(b) && (this.selection.end = b), joint.util.isNumber(this.selection.end) || (this.selection.end = this.selection.start), joint.util.isNumber(this.selection.start) && joint.util.isNumber(this.selection.end) && (this.selection.start === this.selection.end ? (this.clearSelection(), this.focus(), this.setCaret(this.selection.start)) : (this.hideCaret(), this.renderSelection(this.selection.start, this.selection.end)), this.trigger("select:change", this.selection.start, this.selection.end)), this
    },
    setTextAreaSelection: function(a, b) {
      var c = {
        start: a,
        end: b
      };
      c = this.normalizeSelectionRange(c), this.textarea.focus(), this.textarea.selectionStart = c.start, this.textarea.selectionEnd = c.end
    },
    renderSelection: function(a, b) {
      this.options.debug && console.log("renderSelection()");
      var c = {
        start: a,
        end: b
      };
      if (c = this.normalizeSelectionRange(c), this.clearSelection(), this.options.useNativeSelection) {
        this.$viewport && (this._viewportUserSelectBefore = this.$viewport.css("user-select"), this.$viewport.css({
          "-webkit-user-select": "all",
          "-moz-user-select": "all",
          "user-select": "all"
        }));
        var d = c.end - c.start;
        this.selectTextInElement(this.options.text, c.start, d)
      } else this.renderSelectionBoxes(c.start, c.end)
    },
    normalizeSelectionStartAndLength: function(a, b, c) {
      var d = a.substr(0, b),
        e = a.substr(b, c),
        f = this.countLineBreaks(d),
        g = this.countLineBreaks(e);
      b -= f, c -= g;
      var h = this.countEmptyLines(d),
        i = this.countEmptyLines(e);
      return b += h, c += h, c -= h, c += i, {
        start: b,
        length: c
      }
    },
    selectTextInElement: function(a, b, c) {
      if (joint.util.isFunction(a.selectSubString) && this.selectTextInElementUsingSelectSubString(a, b, c), !this.actualSelectionMatchesExpectedSelection(b, c)) try {
        this.selectTextInElementUsingRanges(a, b, c)
      } catch (d) {
        this.options.debug && console.log(d), joint.util.isFunction(a.selectSubString) && this.selectTextInElementUsingSelectSubString(a, b, c)
      }
    },
    selectTextInElementUsingSelectSubString: function(a, b, c) {
      var d = this.normalizeSelectionStartAndLength(this.getTextContent(), b, c);
      try {
        a.selectSubString(d.start, d.length)
      } catch (e) {
        this.options.debug && console.log(e)
      }
    },
    selectTextInElementUsingRanges: function(a, b, c) {
      var d = window.getSelection();
      d.removeAllRanges();
      var e = this.normalizeSelectionStartAndLength(this.getTextContent(), b, c);
      b = 0 + e.start, c = 0 + e.length;
      for (var f, g, h, i, j, k, l = this.getTextNodesFromDomElement(a), m = 0, n = b + c; c > 0 && l.length > 0;) f = l.shift(), h = m, i = m + f.length, (h >= b && h < n || i > b && i <= n || b >= h && b < i || n > h && n <= i) && (j = Math.max(b - h, 0), k = Math.min(j + Math.min(c, f.length), i), g = document.createRange(), g.setStart(f, j), g.setEnd(f, k), d.addRange(g), c -= k - j), m += f.length
    },
    actualSelectionMatchesExpectedSelection: function(a, b) {
      var c = window.getSelection(),
        d = c.toString(),
        e = this.getExpectedSelectedContent(a, b);
      return d = d.replace(/\s/g, " "), e === d
    },
    getExpectedSelectedContent: function(a, b) {
      var c = this.getTextContent(),
        d = c.substr(a, b);
      return d = d.replace(/(\n\r|\r|\n){2,}/g, "-"), d = d.replace(/\n\r|\r|\n/g, ""), d = d.replace(/\s/g, " ")
    },
    getTextNodesFromDomElement: function(a) {
      for (var b = [], c = 0, d = a.childNodes.length; c < d; c++) {
        var e = a.childNodes[c];
        void 0 !== e.tagName ? b = b.concat(this.getTextNodesFromDomElement(e)) : b.push(e)
      }
      return b
    },
    renderSelectionBoxes: function(a, b) {
      this.options.debug && console.log("renderSelectionBoxes()"), this.$selection.empty();
      for (var c, d, e, f = this.getFontSize(), g = this.getTextTransforms(), h = g.rotation, i = a; i < b; i++) {
        var j = this.$selectionBox.clone();
        try {
          e = this.getCharBBox(i)
        } catch (k) {
          this.trigger("select:out-of-range", a, b);
          break
        }
        d && 0 === h && Math.round(e.y) === Math.round(d.y) && Math.round(e.height) === Math.round(d.height) && Math.round(e.x) === Math.round(d.x + d.width) ? c.css({
          width: "+=" + e.width
        }) : (j.css({
          left: e.x,
          top: e.y - e.height,
          width: e.width,
          height: e.height,
          "-webkit-transform": "rotate(" + h + "deg)",
          "-webkit-transform-origin": "0% 100%",
          "-moz-transform": "rotate(" + h + "deg)",
          "-moz-transform-origin": "0% 100%"
        }), this.$selection.append(j), c = j), d = e
      }
      e && this.$textareaContainer.css({
        left: e.x,
        top: e.y - f * g.scaleY
      })
    },
    clearSelection: function() {
      return this.options.debug && console.log("clearSelection()"), this.$selection.empty(), this.options.text.selectSubString && (this.$viewport && this._viewportUserSelectBefore && this.$viewport.css({
        "-webkit-user-select": this._viewportUserSelectBefore,
        "-moz-user-select": this._viewportUserSelectBefore,
        "user-select": this._viewportUserSelectBefore
      }), window.getSelection().removeAllRanges()), this
    },
    deselect: function() {
      return this.options.debug && console.log("deselect()"), this.stopSelecting(), this.clearSelection(), this.setTextAreaSelection(this.selection.start, this.selection.end), this
    },
    getSelectionStart: function() {
      return this.selection.start
    },
    getSelectionEnd: function() {
      return this.selection.end
    },
    getSelectionRange: function() {
      return this.normalizeSelectionRange(this.selection)
    },
    normalizeSelectionRange: function(a) {
      return a = joint.util.clone(a), a.start > a.end && (a.end = [a.start, a.start = a.end][0]), a
    },
    getSelectionLength: function() {
      var a = this.getSelectionRange();
      return a.end - a.start
    },
    getSelection: function() {
      var a = this.getSelectionRange();
      return this.getTextContent().slice(a.start, a.end)
    },
    getWordBoundary: function(a) {
      for (var b = this.textarea.value, c = /\W/, d = a; d;) {
        if (c.test(b[d])) {
          d += 1;
          break
        }
        d -= 1
      }
      for (var e = this.getNumberOfChars(), f = a; f <= e && !c.test(b[f]);) f += 1;
      return d < f ? [d, f] : [f, d]
    },
    getURLBoundary: function(a) {
      for (var b = this.textarea.value, c = /\s/, d = /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/, e = a; e;) {
        if (c.test(b[e])) {
          e += 1;
          break
        }
        e -= 1
      }
      for (var f = this.getNumberOfChars(), g = a; g <= f && !c.test(b[g]);) g += 1;
      if (d.test(b.substring(e, g))) return [e, g]
    },
    annotateURL: function(a, b, c) {
      var d = this.textarea.value.substring(b, c),
        e = joint.util.assign({
          url: d
        }, this.options.urlAnnotation);
      return e.start = b, e.end = c, joint.util.isEqual(e, a[a.length - 1]) || a.push(e), a
    },
    getCharBBox: function(a) {
      if (this.isLineEnding(a)) {
        var b = this.getCharBBox(a - 1);
        return b.x = b.x2, b.y = b.y2, b.width = this.options.newlineCharacterBBoxWidth || 10, b
      }
      var c = this.realToSvgCharNum(a),
        d = this.options.text,
        e = d.getStartPositionOfChar(c),
        f = d.getEndPositionOfChar(c),
        g = d.getExtentOfChar(c);
      e = this.localToScreenCoordinates(e), f = this.localToScreenCoordinates(f);
      var h = this.getTextTransforms(),
        i = e.x,
        j = e.y,
        k = g.width * h.scaleX,
        l = g.height * h.scaleY;
      return {
        x: i,
        y: j,
        width: k,
        height: l,
        x2: f.x,
        y2: f.y
      }
    },
    realToSvgCharNum: function(a) {
      for (var b = 0, c = 0; c <= a; c++) this.isLineEnding(c) && (b += 1);
      return a - b
    },
    selectionStartToSvgCharNum: function(a) {
      return a - this.nonEmptyLinesBefore(a)
    },
    isLineEnding: function(a) {
      var b = this.textarea.value;
      return "\n" === b[a] && a > 0 && "\n" !== b[a - 1]
    },
    svgToRealCharNum: function(a) {
      for (var b = 0, c = 0; c <= a + b; c++) this.isLineEnding(c) && (b += 1);
      return a + b
    },
    localToScreenCoordinates: function(a) {
      return $(this.options.text).show(), V.transformPoint(a, this.options.text.getCTM())
    },
    getNumberOfChars: function() {
      return this.getTextContent().length
    },
    getCharNumFromEvent: function(a) {
      var b = this.options.text,
        c = a.clientX,
        d = a.clientY,
        e = V(b).toLocalPoint(c, d),
        f = b.getCharNumAtPosition(e);
      if (f < 0) return this.getNumberOfChars();
      var g = this.localToScreenCoordinates(e),
        h = this.getCharBBox(this.svgToRealCharNum(f));
      return Math.abs(h.x - g.x) < Math.abs(h.x + h.width - g.x) ? this.svgToRealCharNum(f) : this.svgToRealCharNum(f) + 1
    },
    lineNumber: function(a) {
      var b = this.textarea.value.substr(0, a);
      return this.countLineBreaks(b)
    },
    emptyLinesBefore: function(a) {
      for (var b = this.textarea.value.split(/\n\r|\r|\n/g), c = this.lineNumber(a), d = 0, e = c - 1; e >= 0; e--) b[e] || (d += 1);
      return d
    },
    countLineBreaks: function(a) {
      return (a.match(/\n\r|\r|\n/g) || []).length
    },
    countEmptyLines: function(a) {
      return (a.match(/(\n\r|\r|\n){2,}/g) || []).length
    },
    nonEmptyLinesBefore: function(a) {
      return this.lineNumber(a) - this.emptyLinesBefore(a)
    },
    isEmptyLine: function(a) {
      var b = this.textarea.value.split(/\n\r|\r|\n/g);
      return !b[a]
    },
    isEmptyLineUnderSelection: function(a) {
      var b = this.lineNumber(a);
      return this.isEmptyLine(b)
    },
    getTextTransforms: function() {
      var a = this.options.text.getCTM();
      return V.decomposeMatrix(a)
    },
    getFontSize: function() {
      return parseInt(V(this.options.text).attr("font-size"), 10)
    },
    getTextAnchor: function() {
      return V(this.options.text).attr("text-anchor") || ""
    },
    setCaret: function(a, b) {
      joint.util.isObject(a) && (b = a, a = void 0), b = b || {};
      var c = this.options.text,
        d = this.getNumberOfChars(),
        e = this.selection.start,
        f = this.textarea.value;
      "undefined" != typeof a && (a = Math.min(Math.max(a, 0), d), e = this.selection.start = this.selection.end = a), b.silent || this.trigger("caret:change", e), this.setTextAreaSelection(e, e), this.options.debug && console.log("setCaret(", a, b, ")", "selectionStart", e, "isLineEnding", this.isLineEnding(e), "isEmptyLineUnderSelection", this.isEmptyLineUnderSelection(e), "svgCharNum", this.selectionStartToSvgCharNum(e), "nonEmptyLinesBefore", this.nonEmptyLinesBefore(e));
      var g;
      try {
        var h;
        this.isEmptyLineUnderSelection(e) || !this.isLineEnding(e) && f.length !== e ? (h = this.selectionStartToSvgCharNum(e), g = c.getStartPositionOfChar(h)) : (h = this.selectionStartToSvgCharNum(e) - 1, g = c.getEndPositionOfChar(h))
      } catch (i) {
        this.trigger("caret:out-of-range", e), g = {
          x: 0,
          y: 0
        }
      }
      var j = this.localToScreenCoordinates(g),
        k = this.getTextTransforms(),
        l = k.rotation,
        m = this.getFontSize() * k.scaleY;
      return this.options.placeholder && this.$caret.toggleClass("placeholder", 0 === d), this.$caret.css({
        left: j.x,
        top: j.y + (d ? -m : 0),
        height: m,
        "line-height": m + "px",
        "font-size": m + "px",
        "-webkit-transform": "rotate(" + l + "deg)",
        "-webkit-transform-origin": "0% 100%",
        "-moz-transform": "rotate(" + l + "deg)",
        "-moz-transform-origin": "0% 100%"
      }).attr({
        "text-anchor": this.getTextAnchor()
      }).show(), this.$textareaContainer.css({
        left: j.x,
        top: j.y + (d ? -m : 0)
      }), this.focus(), this
    },
    focus: function() {
      return this.options.debug && console.log("focus()"), this.showCaret(), this
    },
    blur: function() {
      return this.options.debug && console.log("blur()"), this.hideCaret(), this
    },
    showCaret: function() {
      return this.options.debug && console.log("showCaret()"), this.$caret.show(), this
    },
    hideCaret: function() {
      return this.options.debug && console.log("hideCaret()"), this.$caret.hide(), this
    },
    unbindTextElement: function() {
      this.$elText.off("mousedown", this.onMousedown), this.$elText.off("dblclick", this.onDoubleClick), this.$elText.off("click", this.onTripleClick)
    },
    onRemove: function() {
      this.deselect(), this.unbindTextElement(), $(document.body).off("mousemove", this.onMousemove), $(document.body).off("mouseup", this.onMouseup), $(document.body).off("keydown", this.onKeydown), V(this.options.text).attr("cursor", "")
    }
  }, joint.util.assign({
    getTextElement: function(a) {
      var b = a.tagName.toUpperCase();
      if ("TEXT" === b || "TSPAN" === b || "TEXTPATH" === b) return "TEXT" === b ? a : this.getTextElement(a.parentNode)
    },
    edit: function(a, b) {
      b = b || {};
      var c = b.update !== !1;
      this.options = joint.util.assign({}, b, {
        update: c
      });
      var d = this.getTextElement(a);
      if (!d) return void(this.options.debug && console.log("ui.TextEditor: cannot find a text element."));
      this.close(), this.ed = new joint.ui.TextEditor(joint.util.assign({
        text: d
      }, b)), this.ed.on("all", this.trigger, this);
      var e;
      if (b.cellView) {
        if (e = b.cellView.paper.el, this.cellViewUnderEdit = b.cellView, this.cellViewUnderEditInteractiveOption = this.cellViewUnderEdit.options.interactive, this.cellViewUnderEdit.options.interactive = !1, b.annotationsProperty && !this.ed.getAnnotations()) {
          var f = this.cellViewUnderEdit.model.prop(b.annotationsProperty);
          f && this.ed.setAnnotations(this.deepCloneAnnotations(f))
        }
      } else {
        var g = V(d).svg();
        e = g.parentNode
      }
      return c && this.ed.on("text:change", function(a, c, e) {
        if (b.cellView) {
          var f = null;
          if (b.textProperty && (b.cellView.model.isLink() && "labels" === b.textProperty.substr(0, "labels".length) && (f = V($(V(d).node).closest(".label")[0]).index()), b.cellView.model.prop(b.textProperty, a, {
              textEditor: this.ed.cid
            })), b.annotationsProperty && b.cellView.model.prop(b.annotationsProperty, this.deepCloneAnnotations(e), {
              rewrite: !0,
              textEditor: this.ed.cid
            }), null !== f) {
            var g = V(b.cellView.el).find(".label");
            d = g[f].findOne("text"), this.ed.setTextElement(d.node)
          }
        } else V(d).text(a, e)
      }, this), this.ed.render(e), this
    },
    close: function() {
      if (this.ed) {
        if (this.ed.options.annotateUrls) {
          var a = this.ed.getSelectionStart(),
            b = this.findAnnotationsUnderCursor(),
            c = b.find(function(a) {
              return !!a.url && a
            });
          if (!c) {
            var d = this.ed.annotateURLBeforeCaret(a);
            d && this.applyAnnotations(this.getAnnotations())
          }
        }
        this.ed.remove(), this.cellViewUnderEdit && (this.cellViewUnderEdit.options.interactive = this.cellViewUnderEditInteractiveOption), this.ed = this.cellViewUnderEdit = this.cellViewUnderEditInteractiveOption = void 0
      }
    },
    applyAnnotations: function(a) {
      var b = this.options;
      if (this.ed && b.update) {
        b.cellView && b.annotationsProperty ? (b.cellView.model.prop(b.annotationsProperty, this.deepCloneAnnotations(a), {
          rewrite: !0
        }), this.ed.setAnnotations(a)) : V(this.ed.options.text).text(this.ed.getTextContent(), a);
        var c = this.getSelectionRange(),
          d = this.getSelectionLength();
        d > 0 ? this.ed.select(c.start, c.end) : this.ed.setCaret()
      }
    },
    deepCloneAnnotations: function(a) {
      try {
        return JSON.parse(JSON.stringify(a))
      } catch (b) {
        return
      }
    },
    proxy: function(a, b) {
      if (this.ed) return this.ed[a].apply(this.ed, b)
    },
    setCurrentAnnotation: function(a) {
      return this.proxy("setCurrentAnnotation", arguments)
    },
    getAnnotations: function() {
      return this.proxy("getAnnotations", arguments)
    },
    setCaret: function() {
      return this.proxy("setCaret", arguments)
    },
    deselect: function() {
      return this.proxy("deselect", arguments)
    },
    selectAll: function() {
      return this.proxy("selectAll", arguments)
    },
    select: function() {
      return this.proxy("select", arguments)
    },
    getNumberOfChars: function() {
      return this.proxy("getNumberOfChars", arguments)
    },
    getCharNumFromEvent: function() {
      return this.proxy("getCharNumFromEvent", arguments)
    },
    getWordBoundary: function() {
      return this.proxy("getWordBoundary", arguments)
    },
    findAnnotationsUnderCursor: function() {
      return this.proxy("findAnnotationsUnderCursor", [this.ed.getAnnotations(), this.ed.getSelectionStart()])
    },
    findAnnotationsInSelection: function() {
      if (this.ed) {
        var a = this.ed.getSelectionRange();
        return this.proxy("findAnnotationsInSelection", [this.ed.getAnnotations(), a.start, a.end])
      }
    },
    getSelectionAttrs: function(a) {
      if (this.ed) {
        var b = this.ed.getSelectionRange();
        return this.proxy("getSelectionAttrs", [b, a])
      }
    },
    getSelectionLength: function() {
      return this.proxy("getSelectionLength", arguments)
    },
    getSelectionRange: function() {
      return this.proxy("getSelectionRange", arguments)
    }
  }, Backbone.Events));
  joint.ui.Dialog = joint.mvc.View.extend({
    className: "dialog",
    events: {
      "click .bg": "action",
      "click .btn-close": "action",
      "click .controls button": "action",
      "mousedown .titlebar": "onDragStart",
      "touchstart .titlebar": "onDragStart"
    },
    options: {
      draggable: !1,
      closeButtonContent: "&times;",
      closeButton: !0,
      inlined: !1,
      modal: !0
    },
    init: function() {
      joint.util.bindAll(this, "onDrag", "onDragEnd")
    },
    render: function() {
      var a = $("<div/>", {
          "class": "bg",
          "data-action": "close"
        }),
        b = $("<div/>", {
          "class": "fg"
        }),
        c = $("<div/>", {
          "class": "titlebar"
        }),
        d = $("<div/>", {
          "class": "body"
        }),
        e = $("<button/>", {
          "class": "btn-close",
          "data-action": "close",
          html: this.options.closeButtonContent
        }),
        f = $("<div/>", {
          "class": "controls"
        });
      return this.$el.toggleClass("draggable", !! this.options.draggable), this.options.type && this.$el.attr("data-type", this.options.type), this.options.inlined && this.$el.addClass("inlined"), this.options.modal && this.$el.addClass("modal"), this.options.width && b.width(this.options.width), this.options.title ? c.append(this.options.title) : c.addClass("empty"), this.options.content && d.append(this.options.content), this.options.buttons && this.options.buttons.reverse().forEach(function(a) {
        var b = $("<button/>", {
          "class": "control-button",
          html: a.content,
          "data-action": a.action
        });
        a.position && b.addClass(a.position), f.append(b)
      }), b.append(c, d, f), this.options.closeButton && b.append(e), this.$el.empty().append(a, b), this
    },
    open: function(a) {
      return this.delegateEvents(), this.on("action:close", this.close, this), $(document.body).on({
        "mousemove.dialog touchmove.dialog": this.onDrag,
        "mouseup.dialog touchend.dialog": this.onDragEnd
      }), $(a || document.body).append(this.render().el), this.$el.addClass("rendered"), this
    },
    close: function() {
      return this.remove(), this
    },
    onRemove: function() {
      $(document.body).off(".dialog", this.onDrag).off(".dialog", this.onDragStart)
    },
    action: function(a) {
      var b = $(a.target).closest("[data-action]"),
        c = b.attr("data-action");
      c && this.trigger("action:" + c)
    },
    onDragStart: function(a) {
      this.options.draggable && (a = joint.util.normalizeEvent(a), this._dx = a.clientX, this._dy = a.clientY, this._dragging = !0)
    },
    onDrag: function(a) {
      if (this._dragging) {
        a = joint.util.normalizeEvent(a);
        var b = this.$(".fg"),
          c = b.offset();
        b.css({
          top: c.top + (a.clientY - this._dy),
          left: c.left + (a.clientX - this._dx),
          margin: 0
        }), this._dx = a.clientX, this._dy = a.clientY
      }
    },
    onDragEnd: function() {
      this._dragging = !1
    }
  });
  joint.ui.FlashMessage = joint.ui.Dialog.extend({
    className: joint.ui.Dialog.prototype.className + " flash-message",
    options: joint.util.merge({}, joint.ui.Dialog.prototype.options, {
      closeButton: !0,
      modal: !1,
      cascade: !0,
      closeAnimation: {
        delay: 2e3,
        duration: 200,
        easing: "swing",
        properties: {
          opacity: 0
        }
      },
      openAnimation: {
        duration: 200,
        easing: "swing",
        properties: {
          opacity: 1
        }
      }
    }),
    init: function() {
      joint.util.bindAll(this, "startCloseAnimation"), joint.ui.Dialog.prototype.init.apply(this, arguments), this.on("close:animation:complete", this.close, this)
    },
    open: function() {
      joint.ui.Dialog.prototype.open.apply(this, arguments);
      var a = this.$(".fg");
      return this._foregroundHeight = a.height(), this.addToCascade(), a.css("height", 0), this.startOpenAnimation(), this.options.closeAnimation && this.options.closeAnimation.delay && setTimeout(this.startCloseAnimation, this.options.closeAnimation.delay), this
    },
    close: function() {
      return joint.ui.Dialog.prototype.close.apply(this, arguments), this.removeFromCascade(), this
    },
    addToCascade: function() {
      if (this.options.cascade) {
        var a = this.constructor.top;
        this.$(".fg").css("top", a), this.constructor.top += this._foregroundHeight + this.constructor.padding
      }
      this.constructor.opened.push(this)
    },
    removeFromCascade: function() {
      if (this.options.cascade) {
        for (var a = this.constructor.opened, b = !1, c = 0; c < a.length; c++) {
          var d = a[c];
          if (d.options.cascade && b) {
            var e = parseInt(d.$(".fg").css("top"), 10);
            d.$(".fg").css("top", e - this._foregroundHeight - this.constructor.padding)
          }
          d === this && (b = !0)
        }
        b && (this.constructor.top -= this._foregroundHeight + this.constructor.padding)
      }
      this.constructor.opened = joint.util.without(this.constructor.opened, this)
    },
    startCloseAnimation: function() {
      this.$(".fg").animate(this.options.closeAnimation.properties, joint.util.assign({
        complete: function() {
          this.trigger("close:animation:complete")
        }.bind(this)
      }, this.options.closeAnimation))
    },
    startOpenAnimation: function() {
      var a = this.$(".fg");
      a.animate(joint.util.assign({}, this.options.openAnimation.properties, {
        height: this._foregroundHeight
      }), joint.util.assign({
        complete: function() {
          this.trigger("open:animation:complete")
        }.bind(this)
      }, this.options.openAnimation))
    }
  }, {
    top: 20,
    padding: 15,
    opened: [],
    open: function(a, b, c) {
      return c = c || {}, new joint.ui.FlashMessage(joint.util.assign({
        title: b,
        type: "info",
        content: a
      }, c)).open(c.target)
    },
    close: function() {
      joint.util.invoke(this.opened, "close")
    }
  });
  !
    function(a, b, c) {
      "use strict";
      var d = function() {
        a.util.bindAll(this, "handleKey"), this.parser = new e, this.enable()
      };
      a.util.assign(d.prototype, b.Events), d.prototype.on = function(a, c, d) {
        return b.Events.on.call(this, this.normalizeEvent(a), c, d), this
      }, d.prototype.off = function(a, c, d) {
        var e = a ? this.normalizeEvent(a) : null;
        return b.Events.off.call(this, e, c, d), this
      }, d.prototype.normalizeEvent = function(a) {
        if ("object" == typeof a) {
          for (var b = Object.keys(a), c = {}, d = 0, e = b.length; d < e; d++) {
            var f = b[d];
            c[this.normalizeEvent(f)] = a[f]
          }
          return c
        }
        return this.normalizeShortcut(a)
      }, d.prototype.normalizeShortcut = function(a) {
        if ("all" === a.toLowerCase()) return a;
        for (var b = this.parser.toEventObjectList(a), c = [], d = 0; d < b.length; d++) c.push(this.hash(b[d]));
        return c.join(" ")
      }, d.prototype.enable = function() {
        window.addEventListener ? (document.addEventListener("keydown", this.handleKey, !1), document.addEventListener("keypress", this.handleKey, !1), document.addEventListener("keyup", this.handleKey, !1)) : window.attachEvent && (document.attachEvent("keydown", this.handleKey, !1), document.attachEvent("keypress", this.handleKey, !1), document.attachEvent("keyup", this.handleKey, !1))
      }, d.prototype.disable = function() {
        window.removeEventListener ? (document.removeEventListener("keydown", this.handleKey, !1), document.removeEventListener("keypress", this.handleKey, !1), document.removeEventListener("keyup", this.handleKey, !1)) : window.detachEvent && (document.detachEvent("keydown", this.handleKey, !1), document.detachEvent("keypress", this.handleKey, !1), document.detachEvent("keyup", this.handleKey, !1))
      }, d.prototype.isActive = function(a, b) {
        return this.isModifierActive(a, b)
      }, d.prototype.isModifierActive = function(a, b) {
        for (var c = this.parser.toEventObjectList(a), d = 0; d < c.length; d++) if (c[d].modifiersCompare(b)) return !0;
        return !1
      }, d.prototype.hash = function(a) {
        var b = function(a) {
            return a ? 1 : 0
          },
          c = [a.type, ":", a.which, b(a.shiftKey), b(a.ctrlKey), b(a.altKey), b(a.metaKey)];
        return c.join("")
      }, d.prototype.handleKey = function(a) {
        if (!this.isUnsupportedElement(a)) {
          var c = l.fromNative(a);
          b.Events.trigger.call(this, this.hash(c), a)
        }
      }, d.prototype.isUnsupportedElement = function(a) {
        var b = a.target || a.srcElement;
        if (b) {
          var c = b.tagName.toUpperCase();
          return "INPUT" === c || "SELECT" === c || "TEXTAREA" === c || b.isContentEditable
        }
        return !1
      };
      var e = function() {};
      e.prototype = {
        constructor: e,
        parseEventString: function(a) {
          a = a || "";
          var b, c, d = a.split("+"),
            f = new l(0);
          for (c = 0; c < d.length; c++) {
            b = d[c];
            var g = this.getModifierPropertyName(b);
            g && (f[g] = !0), 1 !== d.length && void 0 !== g || (f.which = e.getCode(b))
          }
          return f
        },
        toEventObjectList: function(a) {
          var b = a.replace(/\s*\+\s*/gi, "+").split(" ");
          return b.map(this.composeEventObject, this)
        },
        composeEventObject: function(a) {
          var b = a.split(":"),
            c = j.KEYDOWN,
            d = b[0];
          if (b.length > 1 && (d = b[1], c = b[0]), k.indexOf(c) === -1) throw a + ": invalid shortcut definition";
          var e = this.parseEventString(d);
          return c === j.KEYUP && g[e.which] && (e[g[e.which]] = !1), e.setType(c)
        },
        getModifierPropertyName: function(a) {
          var b = f[a];
          return g[b]
        }
      }, e.getCode = function(a) {
        return i[a] || a.toUpperCase().charCodeAt(0)
      };
      var f = {
          "⇧": 16,
          shift: 16,
          "⌥": 18,
          alt: 18,
          option: 18,
          "⌃": 17,
          ctrl: 17,
          control: 17,
          "⌘": 91,
          command: 91,
          meta: 91
        },
        g = {
          16: "shiftKey",
          18: "altKey",
          17: "ctrlKey",
          91: "metaKey"
        },
        h = {
          226: "\\",
          57392: "ctrl",
          63289: "num",
          59: ";",
          61: "=",
          173: "-"
        },
        i = {
          backspace: 8,
          tab: 9,
          shift: 16,
          ctrl: 17,
          alt: 18,
          meta: 91,
          clear: 12,
          enter: 13,
          "return": 13,
          esc: 27,
          escape: 27,
          capslock: 20,
          space: 32,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          del: 46,
          "delete": 46,
          home: 36,
          end: 35,
          insert: 45,
          ins: 45,
          pageup: 33,
          pagedown: 34,
          plus: 187,
          minus: 189,
          "-": 189,
          ",": 188,
          ".": 190,
          "/": 191,
          "`": 192,
          "=": 187,
          ";": 186,
          "'": 222,
          "[": 219,
          "]": 221,
          "\\": 220,
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
          F12: 123
        },
        j = {
          KEYPRESS: "keypress",
          KEYDOWN: "keydown",
          KEYUP: "keyup"
        },
        k = [j.KEYPRESS, j.KEYDOWN, j.KEYUP],
        l = function(a, b, c, d, e, f) {
          this.which = a, this.shiftKey = b || !1, this.ctrlKey = c || !1, this.altKey = d || !1, this.metaKey = e || !1, this.type = f || j.KEYDOWN
        };
      l.fromNative = function(a) {
        var b = a.which;
        a.type === j.KEYPRESS && (b = String.fromCharCode(a.which).toUpperCase().charCodeAt(0)), h[b] && (b = e.getCode(h[b]));
        var c = new l(b, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey, a.type);
        return a.type === j.KEYUP && g[b] && (c[g[b]] = !1), c
      }, l.prototype.modifiersCompare = function(a) {
        return !(this.shiftKey && this.shiftKey !== a.shiftKey || this.ctrlKey && this.ctrlKey !== a.ctrlKey || this.altKey && this.altKey !== a.altKey || this.metaKey && this.metaKey !== a.metaKey)
      }, l.prototype.setType = function(a) {
        return this.type = a, this
      }, a.ui.Keyboard = d
    }(joint, Backbone, _);
  joint.ui.Lightbox = joint.ui.Dialog.extend({
    className: joint.ui.Dialog.prototype.className + " lightbox",
    options: joint.util.merge({}, joint.ui.Dialog.prototype.options, {
      closeButton: !0,
      modal: !0,
      closeAnimation: {
        delay: 2e3,
        duration: 200,
        easing: "swing",
        properties: {
          opacity: 0
        }
      },
      top: 100,
      windowArea: .8,
      openAnimation: !1
    }),
    init: function() {
      joint.util.bindAll(this, "startCloseAnimation", "positionAndScale"), joint.ui.Dialog.prototype.init.apply(this, arguments), this.options.image && (this.$image = $("<img/>").on("load", this.positionAndScale), this.options.content = this.$image), $(window).on("resize", this.positionAndScale), this.on("close:animation:complete", this.remove, this)
    },
    open: function() {
      return joint.ui.Dialog.prototype.open.apply(this, arguments), this.$image && this.$image.attr("src", this.options.image), this.positionAndScale(), this.startOpenAnimation(), this
    },
    positionAndScale: function() {
      var a = this.$(".fg"),
        b = this.$(".body > img"),
        c = this.options.windowArea,
        d = window.innerWidth * c;
      this.$el.css("margin-top", this.options.top);
      var e = this.$(".titlebar");
      e.css("width", d);
      var f = e.height(),
        g = window.innerHeight * c - f - this.options.top;
      e.css("width", "auto"), a.css({
        width: d,
        height: g
      });
      var h = b.width(),
        i = b.height();
      a.css({
        width: h,
        height: i
      })
    },
    close: function() {
      return this.options.closeAnimation ? this.startCloseAnimation() : joint.ui.Dialog.prototype.close.apply(this, arguments), this
    },
    onRemove: function() {
      joint.ui.Dialog.prototype.onRemove.apply(this, arguments), $(window).off("resize", this.positionAndScale), this.$image && this.$image.off("load", this.positionAndScale)
    },
    startCloseAnimation: function() {
      this.$el.animate(this.options.closeAnimation.properties, joint.util.assign({
        complete: function() {
          this.trigger("close:animation:complete")
        }.bind(this)
      }, this.options.closeAnimation))
    },
    startOpenAnimation: function() {
      this.$el.animate(joint.util.assign({}, this.options.openAnimation.properties, {
        height: this._foregroundHeight
      }), joint.util.assign({
        complete: function() {
          this.trigger("open:animation:complete")
        }.bind(this)
      }, this.options.openAnimation))
    }
  });
  joint.ui.ContextToolbar = joint.mvc.View.extend({
    className: "context-toolbar",
    eventNamespace: "context-toolbar",
    events: {
      "click .tool": "onToolPointerdown"
    },
    options: {
      padding: 20,
      autoClose: !0
    },
    init: function() {
      joint.util.bindAll(this, "onDocumentMousedown")
    },
    render: function() {
      return this.constructor.opened && this.constructor.close(), this.bind(), this.options.type && this.$el.attr("data-type", this.options.type), $(this.getRoot()).append(this.$el), this.renderContent(), this.position(), this.constructor.opened = this, this
    },
    renderContent: function() {
      var a = $("<div/>", {
        "class": "tools"
      });
      this.options.tools && joint.util.toArray(this.options.tools).forEach(function(b) {
        var c;
        c = b.icon ? $("<img/>", {
          src: b.icon
        }) : b.content;
        var d = $("<button/>", {
          "class": "tool",
          html: c,
          "data-action": b.action
        });
        b.attrs && d.attr(b.attrs), a.append(d)
      }), this.$el.append(a)
    },
    getRoot: function() {
      return this.options.root || document.documentElement
    },
    position: function() {
      var a = joint.util.getElementBBox(this.options.target),
        b = joint.util.getElementBBox(this.getRoot()),
        c = this.$el.outerWidth(),
        d = a.x + a.width / 2 - c / 2,
        e = a.y + a.height + this.options.padding;
      d -= b.x, e -= b.y, this.$el.css({
        left: d,
        top: e
      })
    },
    onRemove: function() {
      this.unbind(), this.constructor.opened = void 0
    },
    bind: function() {
      $(document).on("mousedown." + this.eventNamespace, this.onDocumentMousedown)
    },
    unbind: function() {
      return $(document).off("mousedown." + this.eventNamespace, this.onDocumentMousedown), this
    },
    onToolPointerdown: function(a) {
      var b = $(a.target).closest("[data-action]"),
        c = b.attr("data-action");
      c && this.trigger("action:" + c, a)
    },
    onDocumentMousedown: function(a) {
      if (this.options.autoClose) {
        var b = this.options.target;
        this.el.contains(a.target) || b.contains(a.target) || b === a.target || (this.constructor.close(), this.remove())
      }
    }
  }, {
    opened: void 0,
    close: function() {
      this.opened && (this.opened.remove(), this.opened = void 0)
    },
    update: function() {
      this.opened && this.opened.position()
    }
  });
  joint.ui.Popup = joint.ui.ContextToolbar.extend({
    className: "popup",
    eventNamespace: "popup",
    events: {},
    renderContent: function() {
      var a = joint.util.isFunction(this.options.content) ? this.options.content(this.el) : this.options.content;
      a && this.$el.html(a)
    }
  });
  joint.ui.SelectBox = joint.mvc.View.extend({
    className: "select-box",
    events: {
      "click .select-box-selection": "onToggle"
    },
    options: {
      options: [],
      width: void 0,
      openPolicy: "auto",
      target: null,
      keyboardNavigation: !0,
      selected: void 0,
      selectBoxOptionsClass: void 0,
      disabled: !1
    },
    init: function() {
      this.options.target = this.options.target || document.body, joint.util.bindAll(this, "onOutsideClick", "onOptionSelect"), $(document).on("click.selectBox", this.onOutsideClick), this.$el.data("view", this), void 0 === this.options.selected ? this.selection = joint.util.toArray(this.options.options).find(function(a) {
          return a.selected === !0
        }) || this.options.options[0] : this.selection = this.options.options[this.options.selected]
    },
    render: function() {
      return this.$el.empty(), this.$selection = null, this.renderSelection(this.selection), this.options.width && this.$el.css("width", this.options.width), this.options.disabled && this.disable(), this.$el.append(this.$options), this
    },
    renderOptions: function() {
      this.removeOptions();
      var a = this.options,
        b = {
          selectBoxView: this,
          parentClassName: joint.util.result(this, "className") || null,
          extraClassName: joint.util.result(a, "selectBoxOptionsClass") || null,
          options: a.options
        };
      a.width && (b.width = a.width), a.theme && (b.theme = a.theme);
      var c = this.optionsView = new this.constructor.OptionsView(b);
      c.render(), this.listenTo(c, "option:select", this.onOptionSelect), this.listenTo(c, "option:hover", this.onOptionHover), this.listenTo(c, "options:mouseout", this.onOptionsMouseOut), this.$options = c.$el, this.$optionsArrow = c.$arrow, this.$target = $(a.target)
    },
    onOptionHover: function(a, b) {
      this.trigger("option:hover", a, b)
    },
    onOptionsMouseOut: function(a) {
      this.trigger("options:mouseout", a)
    },
    onOptionSelect: function(a, b) {
      this.select(a, b)
    },
    removeOptions: function() {
      this.optionsView && (this.stopListening(this.optionsView), this.optionsView.remove(), this.optionsView = null)
    },
    renderSelection: function(a) {
      if (this.$selection || (this.$selection = $("<div/>", {
          "class": "select-box-selection"
        }), this.$el.append(this.$selection)), this.$selection.empty(), a) {
        var b = this.constructor.OptionsView.prototype.renderOptionContent.call(void 0, a);
        this.$selection.append(b)
      } else if (this.options.placeholder) {
        var c = $("<div/>", {
          "class": "select-box-placeholder",
          html: this.options.placeholder
        });
        this.$selection.append(c)
      }
    },
    onToggle: function(a) {
      this.toggle()
    },
    onOutsideClick: function(a) {
      !this.el.contains(a.target) && this.$el.hasClass("opened") && this.close()
    },
    getSelection: function() {
      return this.selection
    },
    getSelectionValue: function(a) {
      return a = a || this.selection, a && (void 0 === a.value ? a.content : a.value)
    },
    getSelectionIndex: function() {
      return joint.util.toArray(this.options.options).findIndex(function(a) {
        return a === this.selection
      })
    },
    select: function(a, b) {
      this.selection = this.options.options[a], this.renderSelection(this.selection), this.trigger("option:select", this.selection, a, b), this.close()
    },
    selectByValue: function(a, b) {
      for (var c = this.options.options || [], d = 0; d < c.length; d++) {
        var e = c[d];
        if (void 0 === e.value && e.content === a) return this.select(d, b);
        if (void 0 !== e.value && joint.util.isEqual(e.value, a)) return this.select(d, b)
      }
    },
    isOpen: function() {
      return this.$el.hasClass("opened")
    },
    toggle: function() {
      this.isOpen() ? this.close() : this.open()
    },
    position: function() {
      var a = this.$(".select-box-selection"),
        b = a.outerHeight(),
        c = a.offset(),
        d = c.left,
        e = c.top,
        f = this.$options.outerHeight(),
        g = {
          left: 0,
          top: 0
        };
      this.options.target !== document.body ? (g = this.$target.offset(), g.width = this.$target.outerWidth(), g.height = this.$target.outerHeight(), g.left -= this.$target.scrollLeft(), g.top -= this.$target.scrollTop()) : (g.width = $(window).width(), g.height = $(window).height());
      var h = d,
        i = "auto",
        j = this.options.openPolicy;
      switch ("selected" !== j || this.selection || (j = "auto"), j) {
        case "above":
          i = e - f;
          break;
        case "coverAbove":
          i = e - f + b;
          break;
        case "below":
          i = e + b;
          break;
        case "coverBelow":
          i = e;
          break;
        case "selected":
          var k = this.$options.find(".selected").position();
          i = e - k.top;
          break;
        default:
          var l = e - this.$target.scrollTop() + f > g.top + g.height;
          i = l ? e - f + b : e
      }
      h -= g.left, i -= g.top, this.$options.css({
        left: h,
        top: i
      })
    },
    open: function() {
      this.isDisabled() || (this.renderOptions(), this.$options.appendTo(this.options.target), this.$options.addClass("rendered"), this.position(), this.$el.addClass("opened"), this.respectWindowBoundaries(), this.alignOptionsArrow())
    },
    respectWindowBoundaries: function() {
      var a = this.calculateElOverflow(this.$options),
        b = {
          left: 0,
          top: 0
        };
      this.$options.outerWidth() <= this.$target.innerWidth() && (a.left && a.right || (a.left ? b.left = a.left : a.right && (b.left = -a.right))), this.$options.outerHeight() <= this.$target.innerHeight() && (a.top && a.bottom || (a.top ? b.top = a.top : a.bottom && (b.top = -a.bottom))), this.$options.css({
        left: "+=" + b.left,
        top: "+=" + b.top
      })
    },
    alignOptionsArrow: function() {
      var a = this.$el[0].getBoundingClientRect(),
        b = this.$options[0].getBoundingClientRect(),
        c = a.left + a.width / 2;
      c -= b.left, c -= this.$optionsArrow.outerWidth() / 2, this.$optionsArrow.css({
        left: c
      })
    },
    close: function() {
      this.removeOptions(), this.$el.removeClass("opened"), this.trigger("close")
    },
    onRemove: function() {
      this.removeOptions(), $(document).off(".selectBox", this.onOutsideClick)
    },
    isDisabled: function() {
      return this.$el.hasClass("disabled")
    },
    enable: function() {
      this.$el.removeClass("disabled")
    },
    disable: function() {
      this.close(), this.$el.addClass("disabled")
    },
    onSetTheme: function(a, b) {
      this.$options && (a && this.$options.removeClass(this.themeClassNamePrefix + a), this.$options.addClass(this.themeClassNamePrefix + b))
    },
    calculateElOverflow: function(a, b) {
      b || (b = window), a instanceof $ && (a = a[0]), b instanceof $ && (b = b[0]);
      var c, d = {},
        e = a.getBoundingClientRect();
      if (b === window) {
        var f = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          g = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        c = {
          width: f,
          height: g,
          left: 0,
          top: 0,
          right: f,
          bottom: g
        }
      } else c = b.getBoundingClientRect();
      return ["left", "top"].forEach(function(a) {
        d[a] = Math.min(0, e[a] - c[a])
      }), ["right", "bottom"].forEach(function(a) {
        d[a] = Math.min(0, c[a] - e[a])
      }), joint.util.forIn(d, function(a, b) {
        d[b] = Math.abs(Math.round(a))
      }), d
    }
  }, {
    OptionsView: joint.mvc.View.extend({
      events: {
        "mouseover .select-box-option": "onOptionHover",
        "click .select-box-option": "onOptionClick"
      },
      className: function() {
        var a = ["select-box-options"],
          b = this.options.parentClassName;
        return b && a.push(b), a.join(" ")
      },
      init: function() {
        joint.util.bindAll(this, "onMouseout", "onKeydown"), $(document).on({
          "keydown.selectBoxOptions": this.onKeydown,
          "mouseleave.selectBoxOptions mouseout.selectBoxOptions": this.onMouseout
        })
      },
      render: function() {
        var a = this.options.extraClassName;
        return a && this.$el.addClass(a), this.options.width && this.$el.css("width", this.options.width), joint.util.toArray(this.options.options).forEach(function(a, b) {
          var c = this.renderOption(a, b);
          this.options.selectBoxView.selection === a && c.addClass("selected hover"), this.$el.append(c)
        }, this), this.$arrow = $("<div/>").addClass("select-box-options-arrow").appendTo(this.$el), this
      },
      renderOption: function(a, b) {
        var c = this.renderOptionContent(a);
        return c.addClass("select-box-option"), c.data("index", b), c
      },
      renderOptionContent: function(a) {
        var b = $("<div/>", {
          "class": "select-box-option-content",
          html: a.content
        });
        return a.icon && b.prepend($("<img/>", {
          "class": "select-box-option-icon",
          src: a.icon
        })), b
      },
      select: function(a, b) {
        this.trigger("option:select", a, b)
      },
      hover: function(a) {
        var b = this.options.options[a];
        this.markOptionHover(a), this.trigger("option:hover", b, a)
      },
      onOptionClick: function(a) {
        var b = this.getOptionIndex(a.target);
        this.select(b, {
          ui: !0
        })
      },
      onOptionHover: function(a) {
        var b = this.getOptionIndex(a.target);
        this.hover(b)
      },
      onMouseout: function(a) {
        this.trigger("options:mouseout", a)
      },
      onKeydown: function(a) {
        var b = this.options.selectBoxView;
        if (b.options.keyboardNavigation && b.isOpen()) {
          var c;
          switch (a.which) {
            case 39:
            case 40:
              c = 1;
              break;
            case 38:
            case 37:
              c = -1;
              break;
            case 13:
              var d = this.getOptionHoverIndex();
              return void(d >= 0 && this.select(d));
            case 27:
              return b.close();
            default:
              return
          }
          a.preventDefault();
          var e = this.getOptionHoverIndex(),
            f = e + c,
            g = this.options.options;
          f < 0 && (f = g.length - 1), f >= g.length && (f = 0), this.hover(f)
        }
      },
      onRemove: function() {
        $(document).off(".selectBoxOptions")
      },
      markOptionHover: function(a) {
        this.$el.find(".hover").removeClass("hover"), $(this.$el.find(".select-box-option")[a]).addClass("hover")
      },
      getOptionHoverIndex: function() {
        return this.$el.find(".select-box-option.hover").index()
      },
      getOptionIndex: function(a) {
        return $(a).closest(".select-box-option").data("index")
      }
    })
  });
  joint.ui.ColorPalette = joint.ui.SelectBox.extend({
    className: "select-box color-palette",
    position: function() {
      var a = this.$(".select-box-selection"),
        b = a.outerHeight(),
        c = a.offset(),
        d = c.left,
        e = c.top + b;
      if (this.options.target !== document.body) {
        this.$target = this.$target || $(this.options.target);
        var f = this.$target.offset();
        d -= f.left - this.$target.scrollLeft(), e -= f.top - this.$target.scrollTop()
      }
      this.$options.css({
        left: d,
        top: e
      })
    }
  }, {
    OptionsView: joint.ui.SelectBox.OptionsView.extend({
      renderOptionContent: function(a) {
        var b = $("<div/>", {
          "class": "select-box-option-content"
        });
        return b.css("background-color", a.content), a.icon && b.prepend($("<img/>", {
          "class": "select-box-option-icon",
          src: a.icon
        })), b
      }
    })
  });
  joint.ui.SelectButtonGroup = joint.mvc.View.extend({
    className: "select-button-group",
    events: {
      "click .select-button-group-button": "onSelect",
      "mouseover .select-button-group-button": "onOptionHover",
      mouseleave: "onMouseOut",
      "mousedown .select-button-group-button": "pointerdown",
      "touchstart .select-button-group-button": "pointerdown",
      "mouseup .select-button-group-button": "pointerup",
      "touchend .select-button-group-button": "pointerup"
    },
    options: {
      buttonWidth: void 0,
      buttonHeight: void 0,
      options: [],
      disabled: !1,
      multi: !1,
      selected: void 0
    },
    init: function() {
      joint.util.bindAll(this, "onSelect", "pointerup"), this.$el.data("view", this);
      var a = this.options.multi,
        b = this.options.options,
        c = this.options.selected;
      if (void 0 === c) {
        var d = joint.util.toArray(b).filter(function(a) {
          return a && a.selected === !0
        });
        this.selection = a ? d : d[0]
      } else a ? this.selection = Array.isArray(c) ? b.filter(function(a, b) {
        return c.includes(b)
      }) : [b[c]] : this.selection = b[c]
    },
    render: function() {
      return this.renderOptions(this.selection), this.options.width && this.$el.css("width", this.options.width), this.options.disabled && this.disable(), this.$el.append(this.$options), this
    },
    renderOptions: function() {
      this.removeOptions();
      var a = this.options.multi;
      joint.util.toArray(this.options.options).forEach(function(b, c) {
        var d = a ? this.selection.includes(b) : this.selection === b,
          e = this.renderOption(b, c, d);
        this.$el.append(e), d && e.addClass("selected")
      }, this)
    },
    removeOptions: function() {
      this.$el.empty()
    },
    renderOption: function(a, b, c) {
      var d = this.renderOptionContent(a, c);
      d.data("index", b);
      var e = a.buttonWidth || this.options.buttonWidth;
      e && d.css("width", e);
      var f = a.buttonHeight || this.options.buttonHeight;
      return f && d.css("height", f), d
    },
    renderOptionContent: function(a, b) {
      var c = $("<div/>", {
        "class": "select-button-group-button",
        html: a.content
      });
      if (a.icon || b && a.iconSelected) {
        var d = $("<img/>", {
            "class": "select-button-group-button-icon",
            src: b && a.iconSelected ? a.iconSelected : a.icon
          }),
          e = a.iconWidth || this.options.iconWidth;
        e && d.css("width", e);
        var f = a.iconHeight || this.options.iconHeight;
        f && d.css("height", f), c.prepend(d)
      }
      return joint.util.setAttributesBySelector(c, a.attrs), c
    },
    getOptionIndex: function(a) {
      return $(a).closest(".select-button-group-button").data("index")
    },
    onSelect: function(a) {
      if (!this.isDisabled()) {
        var b = this.getOptionIndex(a.target);
        this.select(b, {
          ui: !0
        })
      }
    },
    onOptionHover: function(a) {
      if (!this.isDisabled()) {
        var b = this.getOptionIndex(a.target);
        this.trigger("option:hover", this.options.options[b], b)
      }
    },
    onMouseOut: function(a) {
      this.isDisabled() || this.trigger("mouseout", a)
    },
    getSelection: function() {
      return this.selection
    },
    getSelectionValue: function(a) {
      if (a = a || this.selection) return this.options.multi ? joint.util.toArray(a).map(function(a) {
        return void 0 === a.value ? a.content : a.value
      }) : void 0 === a.value ? a.content : a.value
    },
    select: function(a, b) {
      var c = this.options.options[a],
        d = $(this.$(".select-button-group-button")[a]),
        e = this.options.multi;
      if (e) {
        d.toggleClass("selected");
        var f = d.hasClass("selected");
        f ? this.selection.indexOf(c) === -1 && this.selection.push(c) : this.selection = joint.util.without(this.selection, c), c.iconSelected && d.find(".select-button-group-button-icon").attr("src", f ? c.iconSelected : c.icon)
      } else {
        this.selection = c;
        var g = this.$(".selected"),
          h = this.options.options[g.index()];
        g.removeClass("selected"), d.addClass("selected"), h && h.iconSelected && g.find(".select-button-group-button-icon").attr("src", h.icon), this.selection.iconSelected && d.find(".select-button-group-button-icon").attr("src", this.selection.iconSelected)
      }
      this.trigger("option:select", this.selection, a, b)
    },
    selectByValue: function(a, b) {
      Array.isArray(a) || (a = [a]);
      for (var c = this.options.options || [], d = 0; d < c.length; d++) {
        var e = c[d];
        if (void 0 === e.value && a.includes(e.content)) this.select(d, b);
        else if (void 0 !== e.value) {
          var f = a.find(function(a) {
            return joint.util.isEqual(a, e.value)
          });
          f && this.select(d, b)
        }
      }
    },
    deselect: function() {
      this.$(".selected").removeClass("selected"), this.options.multi ? this.selection = [] : this.selection = void 0
    },
    isDisabled: function() {
      return this.$el.hasClass("disabled")
    },
    enable: function() {
      this.$el.removeClass("disabled")
    },
    disable: function() {
      this.$el.addClass("disabled")
    },
    pointerdown: function(a) {
      var b = this.getOptionIndex(a.target),
        c = $(this.$(".select-button-group-button")[b]);
      c.addClass("is-in-action"), $(document).on("mouseup.select-button-group touchend.select-button-group", this.pointerup)
    },
    pointerup: function() {
      this.$(".is-in-action").removeClass("is-in-action"), $(document).off("mouseup.select-button-group touchend.select-button-group")
    }
  });
  joint.ui.Navigator = joint.mvc.View.extend({
    className: "navigator",
    events: {
      mousedown: "startAction",
      touchstart: "startAction"
    },
    options: {
      paperConstructor: joint.dia.Paper,
      paperOptions: {},
      zoomOptions: null,
      zoom: {
        min: .5,
        max: 2
      },
      width: 300,
      height: 200,
      padding: 10
    },
    init: function() {
      this.options.zoomOptions ? this.options.zoom = joint.util.assign({}, this.options.zoom, this.options.zoomOptions) : this.options.zoom && (this.options.zoom = joint.util.defaults({}, this.options.zoom, this.constructor.prototype.options.zoom)), joint.util.bindAll(this, "updateCurrentView", "doAction", "stopAction", "scrollTo"), this.updateCurrentView = joint.util.debounce(this.updateCurrentView, 0);
      var a = this.options.paperScroller;
      a.$el.on("scroll.navigator", this.updateCurrentView);
      var b = this.sourcePaper = a.options.paper;
      this.listenTo(b, "resize", this.updatePaper);
      var c = this.targetPaper = new this.options.paperConstructor(joint.util.merge({
        model: b.model,
        interactive: !1
      }, this.options.paperOptions));
      c.$el.on({
        "mousedown.navigator": this.scrollTo,
        "touchstart.navigator": this.scrollTo
      }), $(document.body).on({
        "mousemove.navigator touchmove.navigator": this.doAction,
        "mouseup.navigator touchend.navigator": this.stopAction
      })
    },
    render: function() {
      this.targetPaper.$el.appendTo(this.el);
      var a = this.sourcePaper.model,
        b = a.getElements().concat(a.getLinks());
      if (b.forEach(this.targetPaper.renderView, this.targetPaper), this.$currentView = $("<div>").addClass("current-view"), this.options.zoom) {
        var c = $("<div>").addClass("current-view-control");
        this.$currentView.append(c)
      }
      return this.$el.append(this.$currentView).css({
        width: this.options.width,
        height: this.options.height,
        padding: this.options.padding
      }), this.updatePaper(this.sourcePaper.options.width, this.sourcePaper.options.height), this
    },
    updatePaper: function(a, b) {
      var c = this.sourcePaper.options.origin,
        d = this.sourcePaper.scale(),
        e = this.options.width - 2 * this.options.padding,
        f = this.options.height - 2 * this.options.padding;
      a /= d.sx, b /= d.sy;
      var g = this.ratio = Math.min(e / a, f / b),
        h = c.x * g / d.sx,
        i = c.y * g / d.sy;
      a *= g, b *= g, this.targetPaper.setDimensions(a, b), this.targetPaper.setOrigin(h, i), this.targetPaper.scale(g, g), this.updateCurrentView()
    },
    updateCurrentView: function() {
      var a = this.ratio,
        b = this.sourcePaper.scale(),
        c = this.options.paperScroller,
        d = c.clientToLocalPoint(0, 0),
        e = this.targetPaper.$el.position(),
        f = this.targetPaper.translate();
      f.ty = f.ty || 0, this.currentViewGeometry = {
        top: e.top + d.y * a + f.ty,
        left: e.left + d.x * a + f.tx,
        width: c.$el.innerWidth() * a / b.sx,
        height: c.$el.innerHeight() * a / b.sy
      }, this.$currentView.css(this.currentViewGeometry)
    },
    startAction: function(a) {
      a = joint.util.normalizeEvent(a), this._action = $(a.target).hasClass("current-view-control") ? "zooming" : "panning", this._clientX = a.clientX, this._clientY = a.clientY
    },
    doAction: function(a) {
      if (this._action) {
        a = joint.util.normalizeEvent(a);
        var b = this.sourcePaper.scale(),
          c = (a.clientX - this._clientX) * b.sx,
          d = (a.clientY - this._clientY) * b.sy;
        switch (this._action) {
          case "panning":
            this.options.paperScroller.el.scrollLeft += c / this.ratio, this.options.paperScroller.el.scrollTop += d / this.ratio;
            break;
          case "zooming":
            var e = -c / this.currentViewGeometry.width;
            this.options.paperScroller.zoom(e, this.options.zoom)
        }
        this._clientX = a.clientX, this._clientY = a.clientY
      }
    },
    stopAction: function() {
      this._action = null
    },
    scrollTo: function(a) {
      a = joint.util.normalizeEvent(a);
      var b = this.targetPaper.translate();
      b.ty = b.ty || 0;
      var c, d;
      if (void 0 === a.offsetX) {
        var e = this.targetPaper.$el.offset();
        c = a.pageX - e.left, d = a.pageY - e.top
      } else c = a.offsetX, d = a.offsetY;
      var f = (c - b.tx) / this.ratio,
        g = (d - b.ty) / this.ratio;
      this.options.paperScroller.center(f, g)
    },
    onRemove: function() {
      this.targetPaper.$el.off(".navigator"), this.targetPaper.remove(), this.options.paperScroller.$el.off(".navigator"), $(document.body).off(".navigator")
    }
  });
  joint.ui.TreeLayoutView = joint.mvc.View.extend({
    MINIMAL_PREVIEW_SIZE: 10,
    className: "tree-layout",
    options: {
      previewAttrs: {
        parent: {
          rx: 2,
          ry: 2
        }
      },
      useModelGeometry: !1,
      clone: function(a) {
        return a.clone()
      },
      canInteract: function() {
        return !0
      }
    },
    init: function() {
      joint.util.bindAll(this, "onPointermove", "onPointerup"), this.toggleDefaultInteraction(!1), this.startListening(), this.render(), this.onSetTheme(null, this.theme)
    },
    startListening: function() {
      var a = this.options.paper;
      this.listenTo(a, "element:pointerdown", this.canInteract(this.onPointerdown))
    },
    toggleDefaultInteraction: function(a) {
      this.options.paper.setInteractivity(a)
    },
    render: function() {
      var a = this.options.paper;
      return this.$activeBox = $("<div>").addClass("tree-layout-box active hidden").appendTo(this.el), this.draggingPaper = new joint.dia.Paper({
        model: new joint.dia.Graph,
        interactive: !1,
        width: "100%",
        height: "100%"
      }), this.$translateBox = $("<div>").addClass("tree-layout-box translate hidden").append(this.draggingPaper.render().el).appendTo(this.el), this.$mask = $("<div>").addClass("tree-layout-mask"), this.svgViewport = V(a.viewport), this.svgPreviewChild = V("circle").attr(this.options.previewAttrs.child || {}).addClass("tree-layout-preview child"), this.svgPreviewConnection = V("path").attr(this.options.previewAttrs.link || {}).addClass("tree-layout-preview link"), this.svgPreviewParent = V("rect").attr(this.options.previewAttrs.parent || {}).addClass("tree-layout-preview parent"), this.svgPreview = V("g").addClass("tree-layout-preview-group").append([this.svgPreviewConnection, this.svgPreviewParent, this.svgPreviewChild]), this.$el.appendTo(a.el), this
    },
    onSetTheme: function(a, b) {
      var c = [this.svgPreview, this.$mask];
      c.forEach(function(c) {
        c && (a && c.removeClass(this.themeClassNamePrefix + a), c.addClass(this.themeClassNamePrefix + b))
      }, this)
    },
    onRemove: function() {
      this.svgPreview.remove()
    },
    toggleDropping: function(a) {
      this.$mask.toggleClass("dropping-not-allowed", !a), this.$translateBox.toggleClass("no-drop", !a)
    },
    canDrop: function() {
      return this.isActive() && !this.$translateBox.hasClass("no-drop")
    },
    isActive: function() {
      return !this.$translateBox.hasClass("hidden")
    },
    _startDrag: function(a, b, c) {
      var d = this.options.paper;
      this.$mask.appendTo(d.el), this.toggleDropping(!1), this.ctm = d.matrix();
      var e = a[0],
        f = e.findView(d),
        g = f.getBBox({
          useModelGeometry: this.options.useModelGeometry
        });
      this.updateBox(this.$translateBox, joint.util.defaults({
        x: b,
        y: c
      }, g)), this.updateBox(this.$activeBox, g), this.$activeBox.removeClass("hidden"), this.$translateBox.removeClass("hidden"), this.prepareDraggingPaper(e)
    },
    updateBox: function(a, b) {
      a.css({
        width: b.width,
        height: b.height,
        left: b.x,
        top: b.y
      })
    },
    positionTranslateBox: function(a) {
      var b = V.transformPoint(a, this.ctm);
      this.$translateBox.css({
        left: b.x,
        top: b.y
      })
    },
    prepareDraggingPaper: function(a) {
      var b = this.options.clone(a).position(0, 0);
      this.draggingPaper.scale(this.ctm.a, this.ctm.d), this.draggingPaper.model.resetCells([b])
    },
    _doDrag: function(a, b, c) {
      var d, e, f = this.model,
        g = {
          x: b,
          y: c
        };
      if (this.candidate && (this.candidate = null, this.hidePreview()), this.positionTranslateBox(g), d = f.getMinimalRootAreaByPoint(g), d && (e = d.findMinimalAreaByPoint(g, {
          expandBy: Math.min(f.get("siblingGap"), f.get("gap")) / 2
        })), e) {
        var h = this.findDirection(e, g),
          i = e.getLayoutSiblings(h),
          j = i.getSiblingRankByPoint(g),
          k = joint.util.toArray(a).every(function(a) {
            return this.isConnectionValid(a, i, j)
          }, this);
        k ? (this.candidate = {
          id: e.root.id,
          direction: h,
          siblingRank: j + .5
        }, this.updatePreview(i, j), this.showPreview(), this.toggleDropping(!0)) : this.toggleDropping(!1)
      } else this.toggleDropping(!0)
    },
    _finishDrag: function(a, b, c) {
      this.$mask.remove().removeClass("dropping-not-allowed"), this.candidate ? (a.forEach(function(a) {
        this.reconnectElement(a, this.candidate)
      }, this), this.candidate = null, this.model.layout({
        ui: !0
      })) : this.canDrop() && (a.forEach(function(a) {
          this.translateElement(a, b, c)
        }, this), this.model.layout({
          ui: !0
        })), this.$activeBox.addClass("hidden"), this.$translateBox.addClass("hidden"), this.hidePreview()
    },
    reconnectElement: function(a, b) {
      var c = {
          direction: b.direction,
          siblingRank: b.siblingRank,
          ui: !0
        },
        d = this.model.reconnectElement(a, b.id, c);
      if (!d) {
        var e = this.options.paper,
          f = e.getDefaultLink(a.findView(e));
        f.set({
          source: {
            id: b.id
          },
          target: {
            id: a.id
          }
        }), f.addTo(e.model, c), this.model.changeSiblingRank(a, b.siblingRank, c), this.model.changeDirection(a, b.direction, c);
        var g = this.model.getAttribute(a, "direction");
        this.model.updateDirections(a, [g, b.direction], c)
      }
    },
    translateElement: function(a, b, c) {
      var d = this.model.graph.getConnectedLinks(a, {
        inbound: !0
      });
      joint.util.invoke(d, "remove");
      var e = a.get("size");
      a.set("position", {
        x: b - e.width / 2,
        y: c - e.height / 2
      }, {
        ui: !0
      })
    },
    updatePreview: function(a, b) {
      var c = a.parentArea.root,
        d = Math.max(this.model.get("siblingGap") / 2, this.MINIMAL_PREVIEW_SIZE),
        e = {
          width: d,
          height: d
        },
        f = a.getNeighborPointFromRank(b),
        g = a.getConnectionPoints(f, {
          ignoreSiblings: !0
        }),
        h = a.getParentConnectionPoint(),
        i = a.getChildConnectionPoint(f, e);
      this.updateParentPreview(c.get("position"), c.get("size")), this.updateChildPreview(f, e), this.updateConnectionPreview(h, i, g)
    },
    showPreview: function() {
      this.svgViewport.append(this.svgPreview)
    },
    hidePreview: function() {
      this.svgPreview.remove()
    },
    updateParentPreview: function(a, b) {
      this.svgPreviewParent.attr({
        x: a.x,
        y: a.y,
        width: b.width,
        height: b.height
      })
    },
    updateChildPreview: function(a, b) {
      this.svgPreviewChild.attr({
        cx: a.x,
        cy: a.y,
        r: b.width / 2
      })
    },
    updateConnectionPreview: function(a, b, c) {
      this.svgPreviewConnection.attr({
        d: joint.connectors.rounded(a, b, c, {})
      })
    },
    findDirection: function(a, b) {
      var c, d = a.root.get("layout") || a.getType();
      switch (d) {
        case "BL-BR":
        case "TL-TR":
        case "L-R":
          return c = d.split("-"), b.x > a.rootCX ? c[1] : c[0];
        case "BL-TL":
        case "BR-TR":
        case "B-T":
          return c = d.split("-"), b.y > a.rootCY ? c[0] : c[1];
        case "L":
        case "R":
        case "T":
        case "B":
        case "TR":
        case "TL":
        case "BR":
        case "BL":
          return d;
        default:
          return a.direction
      }
    },
    isConnectionValid: function(a, b, c) {
      if (a.id == b.parentArea.root.id) return !1;
      if (this.model.graph.isSuccessor(a, b.parentArea.root)) return !1;
      var d = this.model.getLayoutArea(a);
      if (d.parentArea && d.parentArea == b.parentArea && d.direction == b.direction) {
        var e = d.siblingRank - c;
        if (0 === e || 1 === e) return !1
      }
      return !0
    },
    canInteract: function(a) {
      return function(b) {
        this.options.canInteract(b) && a.apply(this, arguments)
      }.bind(this)
    },
    startDragging: function(a) {
      var b = Array.isArray(a) ? a : [a];
      joint.util.isEmpty(b) || (this._registerPointerEvents(), this._moveCounter = 0, this._draggedElements = b)
    },
    onPointerdown: function(a) {
      this.startDragging(a.model)
    },
    onPointermove: function(a) {
      var b = this.options.paper,
        c = b.clientToLocalPoint({
          x: a.clientX,
          y: a.clientY
        });
      this._moveCounter === b.options.clickThreshold ? this._startDrag(this._draggedElements, c.x, c.y) : this._moveCounter > b.options.clickThreshold && this._doDrag(this._draggedElements, c.x, c.y), this._moveCounter++
    },
    onPointerup: function(a) {
      var b = this.options.paper;
      if (this._moveCounter >= b.options.clickThreshold) {
        var c = b.clientToLocalPoint({
          x: a.clientX,
          y: a.clientY
        });
        this._finishDrag(this._draggedElements, c.x, c.y)
      }
      this._draggedElements = null, this._unregisterPointerEvents()
    },
    _registerPointerEvents: function() {
      var a = this.getEventNamespace();
      $(document).on("mousemove" + a + " touchmove" + a, this.onPointermove).on("mouseup" + a + " touchend" + a, this.onPointerup)
    },
    _unregisterPointerEvents: function() {
      $(document).off(this.getEventNamespace())
    }
  });
  joint.ui.PathDrawer = joint.mvc.View.extend({
    tagName: "g",
    svgElement: !0,
    className: "path-drawer",
    events: {
      "mousedown .start-point": "onStartPointPointerDown",
      mousedown: "onPointerDown",
      "touchstart .start-point": "onStartPointPointerDown",
      touchstart: "onPointerDown",
      dblclick: "onDoubleClick",
      contextmenu: "onContextMenu"
    },
    options: {
      pathAttributes: {
        "class": null,
        fill: "#ffffff",
        stroke: "#000000",
        "stroke-width": 1,
        "pointer-events": "none"
      },
      startPointMarkup: '<circle r="5"/>'
    },
    init: function() {
      var a = this.svgTarget = V(this.options.target);
      this.$document = $(a.node.ownerDocument), this.action = "awaiting-input", this.render()
    },
    bindDocumentEvents: function() {
      var a = this.getEventNamespace();
      this.$document.on("mousemove" + a + " touchmove" + a, _.bind(this.onPointerMove, this)), this.$document.on("mouseup" + a + " touchend" + a, _.bind(this.onPointerUp, this))
    },
    unbindDocumentEvents: function() {
      this.$document.off(this.getEventNamespace())
    },
    onRemove: function() {
      var a = this.pathNode;
      a && V(a).remove(), this.clear()
    },
    clear: function() {
      var a = this.pathNode;
      a && a.pathSegList.numberOfItems <= 1 && V(a).remove(), this.svgStart.remove(), this.svgControl.remove(), this.pathNode = null, this.unbindDocumentEvents(), this.action = "awaiting-input", this.trigger("clear")
    },
    render: function() {
      var a = this.options;
      return this.svgPathTemplate = V("path").attr(a.pathAttributes), this.svgStart = V(a.startPointMarkup).addClass("start-point"), this.svgControl = V("path").addClass("control-path"), this.vel.append(V("rect", {
        x: 0,
        y: 0,
        width: "100%",
        height: "100%",
        fill: "transparent",
        stroke: "none"
      })), this.svgTarget.append(this.el), this
    },
    createPath: function(a, b) {
      var c = this.svgPathTemplate.clone(),
        d = this.pathNode = c.node,
        e = this.svgStart.translate(a, b, {
          absolute: !0
        });
      this.trigger("path:create", d), this.addMoveSegment(a, b), this.vel.before(c), this.vel.append(e)
    },
    closePath: function() {
      var a = this.pathNode,
        b = a.pathSegList.getItem(0),
        c = a.pathSegList.getItem(a.pathSegList.numberOfItems - 1);
      c.pathSegType == SVGPathSeg.PATHSEG_LINETO_ABS ? a.pathSegList.replaceItem(a.createSVGPathSegClosePath(), a.pathSegList.numberOfItems - 1) : (c.x = b.x, c.y = b.y, a.pathSegList.appendItem(a.createSVGPathSegClosePath())), this.finishPath("path:close")
    },
    finishPath: function(a) {
      var b = this.pathNode;
      b && this.numberOfVisibleSegments() > 0 ? (this.trigger("path:finish", b), this.trigger(a, b)) : this.trigger("path:abort", b), this.clear()
    },
    numberOfVisibleSegments: function() {
      var a = this.pathNode,
        b = a.pathSegList.numberOfItems;
      return b -= 1, a.pathSegList.getItem(a.pathSegList.numberOfItems - 1).pathSegType == SVGPathSeg.PATHSEG_CLOSEPATH && (b -= 1), b
    },
    addMoveSegment: function(a, b) {
      var c = this.pathNode,
        d = c.createSVGPathSegMovetoAbs(a, b);
      c.pathSegList.appendItem(d), this.trigger("path:segment:add", c), this.trigger("path:move-segment:add", c)
    },
    addLineSegment: function(a, b) {
      var c = this.pathNode,
        d = c.createSVGPathSegLinetoAbs(a, b);
      c.pathSegList.appendItem(d), this.trigger("path:segment:add", c), this.trigger("path:line-segment:add", c)
    },
    addCurveSegment: function(a, b, c, d, e, f) {
      var g = this.pathNode,
        h = g.createSVGPathSegCurvetoCubicAbs(a, b, c, d, e || a, f || b);
      g.pathSegList.appendItem(h), this.trigger("path:segment:add", g), this.trigger("path:curve-segment:add", g)
    },
    adjustLastSegment: function(a, b, c, d, e, f) {
      var g = this.pathNode,
        h = g.pathSegList.getItem(g.pathSegList.numberOfItems - 1);
      null !== a && (h.x = a), null !== b && (h.y = b), null !== c && (h.x1 = c), null !== d && (h.y1 = d), null !== e && (h.x2 = e), null !== f && (h.y2 = f), this.trigger("path:edit", g), this.trigger("path:last-segment:adjust", g)
    },
    removeLastSegment: function() {
      var a = this.pathNode;
      a.pathSegList.removeItem(a.pathSegList.numberOfItems - 1), this.trigger("path:edit", a), this.trigger("path:last-segment:remove", a)
    },
    findControlPoint: function(a, b) {
      var c = this.pathNode,
        d = c.pathSegList.getItem(c.pathSegList.numberOfItems - 1);
      return g.point(a, b).reflection(d)
    },
    replaceLastSegmentWithCurve: function() {
      var a = this.pathNode,
        b = a.pathSegList.getItem(a.pathSegList.numberOfItems - 1),
        c = a.pathSegList.getItem(a.pathSegList.numberOfItems - 2),
        d = a.createSVGPathSegCurvetoCubicAbs(b.x, b.y, c.x, c.y, b.x, b.y);
      a.pathSegList.replaceItem(d, a.pathSegList.numberOfItems - 1), this.trigger("path:edit", a), this.trigger("path:last-segment:replace-with-curve", a)
    },
    adjustControlPath: function(a, b, c, d) {
      var e = this.pathNode,
        f = this.svgControl.node;
      f.pathSegList.initialize(f.createSVGPathSegMovetoAbs(a, b)), f.pathSegList.appendItem(f.createSVGPathSegLinetoAbs(c, d)), this.vel.append(f), this.trigger("path:interact", e), this.trigger("path:control:adjust", e)
    },
    removeControlPath: function() {
      var a = this.pathNode,
        b = this.svgControl.node;
      b.pathSegList.clear(), this.vel.append(b), this.trigger("path:interact", a), this.trigger("path:control:remove", a)
    },
    onPointerDown: function(a) {
      var b = joint.util.normalizeEvent(a);
      if (b.stopPropagation(), !(b.which > 1) && !(b.originalEvent.detail > 1) && this.el.parentNode) {
        var c = this.vel.toLocalPoint(b.clientX, b.clientY);
        switch (this.action) {
          case "awaiting-input":
            this.createPath(c.x, c.y), this.action = "path-created", this.bindDocumentEvents();
            break;
          case "adjusting-line-end":
            this.action = "awaiting-line-end";
            break;
          case "adjusting-curve-end":
            this.action = "awaiting-curve-control-2"
        }
        this._timeStamp = b.timeStamp
      }
    },
    MOVEMENT_DETECTION_THRESHOLD: 150,
    onPointerMove: function(a) {
      var b = joint.util.normalizeEvent(a);
      if (b.stopPropagation(), "awaiting-input" != this.action) {
        var c, d, e = this.vel.toLocalPoint(b.clientX, b.clientY),
          f = this._timeStamp;
        if (f) if (f && b.timeStamp - f < this.MOVEMENT_DETECTION_THRESHOLD) switch (this.action) {
          case "path-created":
            c = this.svgStart.translate(), this.adjustControlPath(c.tx, c.ty, e.x, e.y);
            break;
          case "awaiting-line-end":
          case "adjusting-curve-control-1":
            this.adjustLastSegment(e.x, e.y);
            break;
          case "awaiting-curve-control-2":
            this.adjustLastSegment(e.x, e.y, null, null, e.x, e.y)
        } else switch (this.action) {
          case "path-created":
            this.action = "adjusting-curve-control-1";
            break;
          case "awaiting-line-end":
            this.replaceLastSegmentWithCurve(), this.action = "adjusting-curve-control-2";
            break;
          case "awaiting-curve-control-2":
            this.action = "adjusting-curve-control-2";
            break;
          case "adjusting-curve-control-1":
            c = this.svgStart.translate(), this.adjustControlPath(c.tx, c.ty, e.x, e.y);
            break;
          case "adjusting-curve-control-2":
            d = this.findControlPoint(e.x, e.y), this.adjustLastSegment(null, null, null, null, d.x, d.y), this.adjustControlPath(d.x, d.y, e.x, e.y)
        } else switch (this.action) {
          case "adjusting-line-end":
            this.adjustLastSegment(e.x, e.y);
            break;
          case "adjusting-curve-end":
            this.adjustLastSegment(e.x, e.y, null, null, e.x, e.y)
        }
      }
    },
    onPointerUp: function(a) {
      this._timeStamp = null;
      var b = joint.util.normalizeEvent(a);
      if (b.stopPropagation(), !(b.which > 1 || b.originalEvent.detail > 1)) {
        var c = this.vel.toLocalPoint(b.clientX, b.clientY);
        switch (this.action) {
          case "path-created":
          case "awaiting-line-end":
            this.addLineSegment(c.x, c.y), this.action = "adjusting-line-end";
            break;
          case "awaiting-curve-control-2":
            this.removeControlPath(), this.addLineSegment(c.x, c.y), this.action = "adjusting-line-end";
            break;
          case "adjusting-curve-control-1":
          case "adjusting-curve-control-2":
            this.addCurveSegment(c.x, c.y, c.x, c.y), this.action = "adjusting-curve-end"
        }
      }
    },
    onStartPointPointerDown: function(a) {
      var b = joint.util.normalizeEvent(a);
      b.stopPropagation(), b.which > 1 || b.originalEvent.detail > 1 || this.closePath()
    },
    onDoubleClick: function(a) {
      var b = joint.util.normalizeEvent(a);
      b.preventDefault(), b.stopPropagation(), b.which > 1 || this.pathNode && this.numberOfVisibleSegments() > 0 && (this.removeLastSegment(), this.finishPath("path:stop"))
    },
    onContextMenu: function(a) {
      var b = joint.util.normalizeEvent(a);
      b.preventDefault(), b.stopPropagation(), b.originalEvent.detail > 1 || this.pathNode && this.numberOfVisibleSegments() > 0 && (this.removeLastSegment(), this.finishPath("path:stop"))
    }
  });
  joint.ui.PathEditor = joint.mvc.View.extend({
    tagName: "g",
    svgElement: !0,
    className: "path-editor",
    events: {
      "mousedown .anchor-point": "onAnchorPointPointerDown",
      "mousedown .control-point": "onControlPointPointerDown",
      "mousedown .segment-path": "onSegmentPathPointerDown",
      "touchstart .anchor-point": "onAnchorPointPointerDown",
      "touchstart .control-point": "onControlPointPointerDown",
      "touchstart .segment-path": "onSegmentPathPointerDown",
      "dblclick .anchor-point": "onAnchorPointDoubleClick",
      "dblclick .control-point": "onControlPointDoubleClick",
      "dblclick .segment-path": "onSegmentPathDoubleClick"
    },
    options: {
      anchorPointMarkup: '<circle r="2.5"/>',
      controlPointMarkup: '<circle r="2.5"/>'
    },
    init: function() {
      var a = this.pathNode = V.toNode(this.options.pathElement).normalizePath();
      this.segList = a.pathSegList, this.svgRoot = V(a.ownerSVGElement), this.$document = $(a.ownerDocument), this.render()
    },
    bindDocumentEvents: function() {
      var a = this.getEventNamespace();
      this.$document.on("mousemove" + a + " touchmove" + a, _.bind(this.onPointerMove, this)), this.$document.on("mouseup" + a + " touchend" + a, _.bind(this.onPointerUp, this))
    },
    unbindDocumentEvents: function() {
      this.$document.off(this.getEventNamespace())
    },
    onRemove: function() {
      this.unbindDocumentEvents(), this.clear()
    },
    clear: function() {
      var a = this.vel;
      a.empty(), this.directionPaths = [], this.segmentPaths = [], this.controlPoints = [], this.anchorPoints = [], this._subPathIndices = [0], this.trigger("clear", this.pathNode)
    },
    _transformPoint: function(a, b, c) {
      return V.transformPoint(g.Point(a, b), c)
    },
    render: function() {
      this.clear();
      var a, b, c, d = this.vel,
        e = this.pathNode.getCTM(),
        f = V(this.options.anchorPointMarkup).addClass("anchor-point"),
        g = V(this.options.controlPointMarkup).addClass("control-point"),
        h = V('<path class="direction-path"/>'),
        i = V('<path class="segment-path"/>'),
        j = this.segList,
        k = this.anchorPoints,
        l = this.controlPoints,
        m = this.directionPaths,
        n = this.segmentPaths,
        o = this._subPathIndices;
      for (a = 0, b = 0, c = 0; a < j.numberOfItems; a++) {
        var p = j.getItem(a),
          q = this._transformPoint(p.x, p.y, e),
          r = q.x,
          s = q.y;
        if (p.pathSegType != SVGPathSeg.PATHSEG_CLOSEPATH && (k[a] = f.clone().attr({
            index: a,
            cx: r,
            cy: s
          })), p.pathSegType != SVGPathSeg.PATHSEG_MOVETO_ABS) {
          var t = i.clone().attr("index", a).node;
          switch (t.pathSegList.initialize(t.createSVGPathSegMovetoAbs(b, c)), p.pathSegType) {
            case SVGPathSeg.PATHSEG_CLOSEPATH:
              var u = j.getItem(o[0]),
                v = this._transformPoint(u.x, u.y, e);
              r = v.x, s = v.y, t.pathSegList.appendItem(t.createSVGPathSegLinetoAbs(r, s)), o.unshift(a + 1);
              break;
            case SVGPathSeg.PATHSEG_LINETO_ABS:
              t.pathSegList.appendItem(t.createSVGPathSegLinetoAbs(r, s));
              break;
            case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
              var w = this._transformPoint(p.x1, p.y1, e),
                x = g.clone().attr({
                  index: a,
                  "attribute-index": 1,
                  cx: w.x,
                  cy: w.y
                }),
                y = this._transformPoint(p.x2, p.y2, e),
                z = g.clone().attr({
                  index: a,
                  "attribute-index": 2,
                  cx: y.x,
                  cy: y.y
                });
              l[a] = [x, z], t.pathSegList.appendItem(t.createSVGPathSegCurvetoCubicAbs(r, s, w.x, w.y, y.x, y.y)), m[a] = [h.clone().attr("d", ["M", b, c, "L", w.x, w.y].join(" ")), h.clone().attr("d", ["M", r, s, "L", y.x, y.y].join(" "))]
          }
          n[a] = t
        }
        b = r, c = s
      }
      d.append(_.filter(n)).append(_.flatten(_.filter(m))).append(_.filter(k)).append(_.flatten(_.filter(l))), this.svgRoot.append(d)
    },
    startMoving: function(a) {
      var b = joint.util.normalizeEvent(a),
        c = this.$point = $(b.target);
      this.prevClientX = b.clientX, this.prevClientY = b.clientY;
      var d = parseInt(this.$point.attr("index"), 10);
      if (c.hasClass("anchor-point")) this.trigger("path:interact"), this.trigger("path:anchor-point:select", d);
      else if (c.hasClass("control-point")) {
        var e = this.$point.attr("attribute-index");
        this.trigger("path:interact"), this.trigger("path:control-point:select", d, e)
      } else this.trigger("path:interact"), this.trigger("path:segment:select", d);
      b.stopPropagation(), b.preventDefault(), this.pathEditedEventType = null
    },
    move: function(a) {
      var b = this.$point;
      if (b) {
        var c = joint.util.normalizeEvent(a),
          d = c.clientX - this.prevClientX,
          e = c.clientY - this.prevClientY,
          f = parseInt(b.attr("index"), 10);
        if (b.hasClass("anchor-point")) this.adjustAnchorPoint(f, d, e);
        else if (b.hasClass("control-point")) {
          var g = b.attr("attribute-index");
          this.adjustControlPoint(f, g, d, e)
        } else this.adjustAnchorPoint(f - 1, d, e), this.adjustAnchorPoint(f, d, e);
        this.prevClientX = c.clientX, this.prevClientY = c.clientY
      }
    },
    adjustControlPoint: function(a, b, c, d) {
      var e = this.pathNode.getCTM(),
        f = this.segList,
        h = f.getItem(a),
        i = this.controlPoints,
        j = e.inverse();
      j.e = 0, j.f = 0;
      var k = this._transformPoint(c, d, j),
        l = "x" + b,
        m = "y" + b;
      h[l] += k.x, h[m] += k.y;
      var n = this._transformPoint(h[l], h[m], e),
        o = i[a][b - 1].attr({
          cx: n.x,
          cy: n.y
        });
      if (o.hasClass("locked")) {
        var p = 1 == b ? a - 1 : a + 1,
          q = 1 == b ? 2 : 1,
          r = f.getItem(p),
          s = "x" + q,
          t = "y" + q,
          u = g.point(1 == b ? r.x : h.x, 1 == b ? r.y : h.y),
          v = g.point(h[l], h[m]),
          w = u.distance(g.Point(r[s], r[t])),
          x = u.move(v, w);
        r[s] = x.x, r[t] = x.y;
        var y = this._transformPoint(r[s], r[t], e);
        i[p][q - 1].attr({
          cx: y.x,
          cy: y.y
        }), this.updateDirectionPaths(p), this.updateSegmentPath(p)
      }
      this.updateDirectionPaths(a), this.updateSegmentPath(a), this.pathEditedEventType = "path:control-point:adjust"
    },
    adjustAnchorPoint: function(a, b, c) {
      var d = this.pathNode.getCTM(),
        e = this.segList,
        f = e.getItem(a),
        g = this._subPathIndices;
      f.pathSegType == SVGPathSeg.PATHSEG_CLOSEPATH && (a = _.find(g, function(b) {
        return b < a
      }), f = e.getItem(a));
      var h = this.anchorPoints,
        i = this.controlPoints,
        j = d.inverse();
      j.e = 0, j.f = 0;
      var k = this._transformPoint(b, c, j);
      f.x += k.x, f.y += k.y;
      var l = this._transformPoint(f.x, f.y, d);
      if (h[a].attr({
          cx: l.x,
          cy: l.y
        }), f.pathSegType == SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS) {
        f.x2 += k.x, f.y2 += k.y;
        var m = this._transformPoint(f.x2, f.y2, d);
        i[a][1].attr({
          cx: m.x,
          cy: m.y
        })
      }
      var n = a + 1 < e.numberOfItems ? e.getItem(a + 1) : 0;
      if (n) {
        if (n.pathSegType == SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS) {
          n.x1 += k.x, n.y1 += k.y;
          var o = this._transformPoint(n.x1, n.y1, d);
          i[a + 1][0].attr({
            cx: o.x,
            cy: o.y
          }), this.updateDirectionPaths(a + 1)
        }
        this.updateSegmentPath(a + 1)
      }
      this.updateDirectionPaths(a), this.updateSegmentPath(a), this.pathEditedEventType = "path:anchor-point:adjust"
    },
    updateDirectionPaths: function(a) {
      var b = this.pathNode.getCTM(),
        c = this.segList,
        d = c.getItem(a),
        e = this._transformPoint(d.x, d.y, b),
        f = a > 0 ? c.getItem(a - 1) : null,
        g = f ? this._transformPoint(f.x, f.y, b) : null;
      _.each(this.directionPaths[a], function(a, c) {
        c++;
        var h = this._transformPoint(d["x" + c], d["y" + c], b);
        a.attr("d", ["M", c > 1 || !f ? e.x : g.x, c > 1 || !f ? e.y : g.y, h.x, h.y].join(" "))
      }, this)
    },
    updateSegmentPath: function(a) {
      var b = this.segList,
        c = this._subPathIndices;
      if (c.includes(a)) {
        var d = _.find(c.slice().reverse(), function(b) {
            return b > a
          }) || b.numberOfItems;
        if (d--, b.getItem(d).pathSegType != SVGPathSeg.PATHSEG_CLOSEPATH) return;
        a = d
      }
      var e = this.segmentPaths[a];
      if (e) {
        var f = this.pathNode.getCTM(),
          g = b.getItem(a - 1),
          h = this._transformPoint(g.x, g.y, f),
          i = e.createSVGPathSegMovetoAbs(h.x, h.y);
        e.pathSegList.initialize(i);
        var j = b.getItem(a),
          k = this._transformPoint(j.x, j.y, f);
        switch (j.pathSegType) {
          case SVGPathSeg.PATHSEG_CLOSEPATH:
            var l = b.getItem(_.find(c, function(b) {
                return b < a
              })),
              m = this._transformPoint(l.x, l.y, f);
            i = e.createSVGPathSegLinetoAbs(m.x, m.y);
            break;
          case SVGPathSeg.PATHSEG_LINETO_ABS:
            i = e.createSVGPathSegLinetoAbs(k.x, k.y);
            break;
          case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
            var n = this._transformPoint(j.x1, j.y1, f),
              o = this._transformPoint(j.x2, j.y2, f);
            i = e.createSVGPathSegCurvetoCubicAbs(k.x, k.y, n.x, n.y, o.x, o.y)
        }
        e.pathSegList.appendItem(i)
      }
    },
    stopMoving: function() {
      if (this.$point = null, this.pathEditedEventType) {
        var a = this.pathNode;
        this.trigger("path:edit", a), this.trigger(this.pathEditedEventType, a)
      }
      this.pathEditedEventType = null
    },
    createAnchorPoint: function(a) {
      var b = joint.util.normalizeEvent(a),
        c = V(b.target).attr("index"),
        d = this.pathNode,
        e = this.segList,
        f = V(d).toLocalPoint(b.pageX, b.pageY),
        h = e.getItem(c);
      switch (h.pathSegType) {
        case SVGPathSeg.PATHSEG_CLOSEPATH:
        case SVGPathSeg.PATHSEG_LINETO_ABS:
          e.insertItemBefore(d.createSVGPathSegLinetoAbs(f.x, f.y), c);
          break;
        case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
          var i = e.getItem(c - 1),
            j = g.point(i.x, i.y),
            k = g.point(h.x1, h.y1),
            l = g.point(h.x2, h.y2),
            m = g.point(h.x, h.y),
            n = g.bezier.getInversionSolver(j, k, l, m)(f);
          if (n < 0) return;
          var o = g.bezier.getCurveDivider(j, k, l, m)(n);
          e.insertItemBefore(d.createSVGPathSegCurvetoCubicAbs(o[0].p3.x, o[0].p3.y, o[0].p1.x, o[0].p1.y, o[0].p2.x, o[0].p2.y), c), h.x1 = o[1].p1.x, h.y1 = o[1].p1.y, h.x2 = o[1].p2.x, h.y2 = o[1].p2.y
      }
      this.render(), this.trigger("path:edit", d), this.trigger("path:anchor-point:create", d)
    },
    removeAnchorPoint: function(a) {
      var b, c, d = joint.util.normalizeEvent(a),
        e = parseInt($(d.target).attr("index"), 10),
        f = this.pathNode,
        g = this.segList,
        h = g.getItem(e);
      switch (h.pathSegType) {
        case SVGPathSeg.PATHSEG_MOVETO_ABS:
          b = g.getItem(e + 1), c = f.createSVGPathSegMovetoAbs(b.x, b.y), g.replaceItem(c, e + 1), g.removeItem(e);
          break;
        case SVGPathSeg.PATHSEG_LINETO_ABS:
          g.removeItem(e);
          break;
        case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
          e + 1 <= g.numberOfItems - 1 && (b = g.getItem(e + 1), b.pathSegType == SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS && (b.x1 = h.x1, b.y1 = h.y1)), g.removeItem(e)
      }
      this.trigger("path:edit", f), this.trigger("path:anchor-point:remove", f);
      var i = g.numberOfItems;
      g.getItem(g.numberOfItems - 1).pathSegType == SVGPathSeg.PATHSEG_CLOSEPATH && (i -= 1), i < 2 && this.trigger("path:invalid", f)
    },
    lockControlPoint: function(a) {
      var b = joint.util.normalizeEvent(a),
        c = $(b.target),
        d = this.pathNode,
        e = parseInt(c.attr("index")),
        f = c.attr("attribute-index"),
        g = 1 == f ? e - 1 : e + 1,
        h = 1 == f ? 2 : 1,
        i = this.controlPoints[g];
      if (i) {
        var j = c.hasClass("locked");
        c.toggleClass("locked"), i[h - 1].toggleClass("locked"), this.trigger("path:interact"), j ? this.trigger("path:control-point:unlock", e, f) : this.trigger("path:control-point:lock", e, f), this.adjustControlPoint(e, f, 0, 0), this.trigger("path:edit", d), this.trigger(this.pathEditedEventType, d), this.pathEditedEventType = null
      }
    },
    convertSegmentPath: function(a) {
      var b, c, d = joint.util.normalizeEvent(a),
        e = V(d.target).attr("index"),
        f = this.pathNode,
        g = this.segList,
        h = g.getItem(e);
      switch (h.pathSegType) {
        case SVGPathSeg.PATHSEG_CLOSEPATH:
          b = g.getItem(e - 1), c = g.getItem(0), g.insertItemBefore(f.createSVGPathSegCurvetoCubicAbs(c.x, c.y, b.x, b.y, c.x, c.y), e);
          break;
        case SVGPathSeg.PATHSEG_LINETO_ABS:
          b = g.getItem(e - 1), g.replaceItem(f.createSVGPathSegCurvetoCubicAbs(h.x, h.y, b.x, b.y, h.x, h.y), e);
          break;
        case SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
          g.replaceItem(f.createSVGPathSegLinetoAbs(h.x, h.y), e)
      }
      this.render(), this.trigger("path:edit", f), this.trigger("path:segment:convert", f)
    },
    addClosePathSegment: function(a) {
      var b = joint.util.normalizeEvent(a),
        c = parseInt($(b.target).attr("index"), 10),
        d = this.segList;
      if (0 === c || c === d.numberOfItems - 1) {
        var e = d.getItem(d.numberOfItems - 1);
        if (e.pathSegType != SVGPathSeg.PATHSEG_CLOSEPATH) {
          var f = this.pathNode;
          d.appendItem(f.createSVGPathSegClosePath()), this.render(), this.trigger("path:edit", f), this.trigger("path:closepath-segment:add", f)
        }
      }
    },
    removeClosePathSegment: function(a) {
      var b = joint.util.normalizeEvent(a),
        c = V(b.target).attr("index"),
        d = this.segList,
        e = d.getItem(c);
      if (e.pathSegType == SVGPathSeg.PATHSEG_CLOSEPATH) {
        var f = this.pathNode;
        d.removeItem(c), this.render(), this.trigger("path:edit", f), this.trigger("path:closepath-segment:remove", f)
      }
    },
    onAnchorPointPointerDown: function(a) {
      var b = joint.util.normalizeEvent(a);
      b.stopPropagation(), 1 === b.which && (b.originalEvent.detail > 1 || (this.startMoving(b), this.bindDocumentEvents()))
    },
    onControlPointPointerDown: function(a) {
      var b = joint.util.normalizeEvent(a);
      b.stopPropagation(), 1 === b.which && (b.originalEvent.detail > 1 || (this.startMoving(b), this.bindDocumentEvents()))
    },
    onSegmentPathPointerDown: function(a) {
      var b = joint.util.normalizeEvent(a);
      b.stopPropagation(), 1 === b.which && (b.originalEvent.detail > 1 || (this.startMoving(b), this.bindDocumentEvents()))
    },
    onPointerMove: function(a) {
      var b = joint.util.normalizeEvent(a);
      b.stopPropagation(), this.move(b)
    },
    onPointerUp: function(a) {
      this.unbindDocumentEvents();
      var b = joint.util.normalizeEvent(a);
      b.stopPropagation(), this.stopMoving()
    },
    onAnchorPointDoubleClick: function(a) {
      var b = joint.util.normalizeEvent(a);
      b.stopPropagation(), b.preventDefault(), 1 === b.which && this.removeAnchorPoint(b)
    },
    onControlPointDoubleClick: function(a) {
      var b = joint.util.normalizeEvent(a);
      b.stopPropagation(), b.preventDefault(), 1 === b.which && this.lockControlPoint(b)
    },
    onSegmentPathDoubleClick: function(a) {
      var b = joint.util.normalizeEvent(a);
      b.stopPropagation(), b.preventDefault(), 1 === b.which && this.createAnchorPoint(b)
    }
  });
  joint.layout.ForceDirected = Backbone.Model.extend({
    defaults: {
      linkDistance: 10,
      linkStrength: 1,
      charge: 10
    },
    initialize: function(a) {
      this.elements = this.get("graph").getElements(), this.links = this.get("graph").getLinks(), this.cells = this.get("graph").get("cells"), this.width = this.get("width"), this.height = this.get("height"), this.gravityCenter = this.get("gravityCenter"), this.t = 1, this.energy = 1 / 0, this.progress = 0
    },
    start: function() {
      var a = this.get("width"),
        b = this.get("height");
      this.elements.forEach(function(c) {
        c.set("position", {
          x: Math.random() * a,
          y: Math.random() * b
        }), c.charge = c.get("charge") || this.get("charge"), c.weight = c.get("weight") || 1;
        var d = c.get("position");
        c.x = d.x, c.y = d.y, c.px = c.x, c.py = c.y, c.fx = 0, c.fy = 0
      }, this), this.links.forEach(function(a) {
        a.strength = a.get("strength") || this.get("linkStrength"), a.distance = a.get("distance") || this.get("linkDistance"), a.source = this.cells.get(a.get("source").id), a.target = this.cells.get(a.get("target").id)
      }, this)
    },
    step: function() {
      if (.99 * this.t < .005) return this.notifyEnd();
      var a = this.width,
        b = this.height,
        c = .1,
        d = this.gravityCenter,
        e = this.energy;
      this.energy = 0;
      var f, g, h, i, j, k, l, m, n, o, p, q = 0,
        r = 0,
        s = 0,
        t = 0,
        u = this.elements.length,
        v = this.links.length;
      for (f = 0; f < u - 1; f++) for (h = this.elements[f], q += h.x, r += h.y, g = f + 1; g < u; g++) i = this.elements[g], j = i.x - h.x, k = i.y - h.y, l = j * j + k * k, m = Math.sqrt(l), n = this.t * h.charge / l, o = n * j, p = n * k, h.fx -= o, h.fy -= p, i.fx += o, i.fy += p, this.energy += o * o + p * p;
      q += this.elements[u - 1].x, r += this.elements[u - 1].y;
      var w, x, y;
      for (f = 0; f < v; f++) w = this.links[f], h = w.source, i = w.target, j = i.x - h.x, k = i.y - h.y, l = j * j + k * k, m = Math.sqrt(l), x = this.t * w.strength * (m - w.distance) / m, o = x * j, p = x * k, y = h.weight / (h.weight + i.weight), h.x += o * (1 - y), h.y += p * (1 - y), i.x -= o * y, i.y -= p * y, this.energy += o * o + p * p;
      var z, A;
      for (f = 0; f < u; f++) {
        z = this.elements[f], A = {
          x: z.x,
          y: z.y
        }, d && (A.x += (d.x - A.x) * this.t * c, A.y += (d.y - A.y) * this.t * c), A.x += z.fx, A.y += z.fy, A.x = Math.max(0, Math.min(a, A.x)), A.y = Math.max(0, Math.min(b, A.y));
        var B = .9;
        A.x += (z.px - A.x) * B, A.y += (z.py - A.y) * B, z.px = A.x, z.py = A.y, z.fx = z.fy = 0, z.x = A.x, z.y = A.y, s += z.x, t += z.y, this.notify(z, f, A)
      }
      this.t = this.cool(this.t, this.energy, e);
      var C = q - s,
        D = r - t,
        E = Math.sqrt(C * C + D * D);
      E < 1 && this.notifyEnd()
    },
    cool: function(a, b, c) {
      return b < c ? (this.progress += 1, this.progress >= 5 ? (this.progress = 0, a / .99) : a) : (this.progress = 0, .99 * a)
    },
    notify: function(a, b, c) {
      a.set("position", c)
    },
    notifyEnd: function() {
      this.trigger("end")
    }
  });
  joint.layout = joint.layout || {}, joint.layout.GridLayout = {
    layout: function(a, b) {
      var c;
      c = a instanceof joint.dia.Graph ? a : (new joint.dia.Graph).resetCells(a, {
        dry: !0
      }), a = null, b = b || {};
      var d = c.getElements(),
        e = b.columns || 1,
        f = Math.ceil(d.length / e),
        g = b.dx || 0,
        h = b.dy || 0,
        i = void 0 === b.centre || b.centre !== !1,
        j = !! b.resizeToFit,
        k = b.marginX || 0,
        l = b.marginY || 0,
        m = [],
        n = b.columnWidth;
      if ("compact" === n) for (var o = 0; o < e; o++) {
        var p = this._elementsAtColumn(d, o, e);
        m.push(this._maxDim(p, "width") + g)
      } else {
        n && !joint.util.isString(n) || (n = this._maxDim(d, "width") + g);
        for (var q = 0; q < e; q++) m.push(n)
      }
      var r = this._accumulate(m, k),
        s = [],
        t = b.rowHeight;
      if ("compact" === t) for (var u = 0; u < f; u++) {
        var v = this._elementsAtRow(d, u, e);
        s.push(this._maxDim(v, "height") + h)
      } else {
        t && !joint.util.isString(t) || (t = this._maxDim(d, "height") + h);
        for (var w = 0; w < f; w++) s.push(t)
      }
      var x = this._accumulate(s, l);
      c.startBatch("layout"), d.forEach(function(a, c) {
        var d = c % e,
          f = Math.floor(c / e),
          k = m[d],
          l = s[f],
          n = 0,
          o = 0,
          p = a.get("size");
        if (j) {
          var q = k - 2 * g,
            t = l - 2 * h,
            u = p.height * (p.width ? q / p.width : 1),
            v = p.width * (p.height ? t / p.height : 1);
          u > l ? q = v : t = u, p = {
            width: q,
            height: t
          }, a.set("size", p, b)
        }
        i && (n = (k - p.width) / 2, o = (l - p.height) / 2), a.position(r[d] + g + n, x[f] + h + o, b)
      }), c.stopBatch("layout")
    },
    _maxDim: function(a, b) {
      return a.reduce(function(a, c) {
        return Math.max(c.get("size")[b], a)
      }, 0)
    },
    _elementsAtRow: function(a, b, c) {
      for (var d = [], e = c * b, f = e + c; e < f; e++) d.push(a[e]);
      return d
    },
    _elementsAtColumn: function(a, b, c) {
      for (var d = [], e = b, f = a.length; e < f; e += c) d.push(a[e]);
      return d
    },
    _accumulate: function(a, b) {
      return a.reduce(function(a, b, c) {
        return a.push(a[c] + b), a
      }, [b || 0])
    }
  };
  !
    function(a, b, c, d) {
      function e(b, c, d) {
        d = a.util.defaults(d || {}, {
          siblingGap: 0
        }), this.width = 0, this.height = 0, this.layoutAreas = this.sortLayoutAreas(b), this.parentArea = c, this.siblingGap = d.siblingGap, this.exists() && this.computeSize(d)
      }
      function f(b, c) {
        this.root = b;
        var d = a.util.assign({}, c, this.getRootAttributes(b, c.attributeNames)),
          e = c.gap || 0;
        a.util.defaults(d, {
          parentGap: e,
          siblingGap: e,
          firstChildGap: e
        }), this.siblingRank = d.siblingRank, this.rootOffset = d.rootOffset, this.rootMargin = d.rootMargin, this.siblingGap = d.siblingGap, this.gap = this.parentGap = d.parentGap, this.nextSiblingGap = d.nextSiblingGap, this.prevSiblingGap = d.prevSiblingGap, this.firstChildGap = d.firstChildGap, this.dx = 0, this.dy = 0, this.width = 0, this.height = 0
      }
      a.util.assign(e.prototype, {
        sortLayoutAreas: function(b) {
          var c = a.util.sortBy(b, "siblingRank");
          return c.forEach(function(a, b) {
            a.siblingRank = b
          }), c
        },
        move: function(a, b) {
          for (var c = 0, d = this.layoutAreas.length; c < d; c++) this.layoutAreas[c].dx += a, this.layoutAreas[c].dy += b
        },
        exists: function() {
          return this.layoutAreas.length > 0
        },
        sumGaps: function(a) {
          var b = Math.max(this.layoutAreas.length - 1, 0);
          return b * a
        },
        getSiblingRankByPoint: function(a) {
          if (!this.exists()) return -1;
          var b = this.findAreaByPoint(a);
          return b ? b.siblingRank - 1 : this.layoutAreas.length - 1
        },
        getFirstChildConnectionPoints: function() {
          return []
        },
        getConnectionPoints: function(a, b) {
          if (!this.exists()) return this.getFirstChildConnectionPoints(a);
          var c = {
            dx: a.x - this.parentArea.rootCX,
            dy: a.y - this.parentArea.rootCY
          };
          return this.layoutAreas[0].getRootVertices(c, b)
        },
        getParentConnectionPoint: function() {
          var a = this.parentArea,
            b = this.proxyLayoutArea("getConnectionPoint", a.rootSize),
            c = d.point(a.rootCX, a.rootCY);
          return c.offset(b.x, b.y)
        },
        getChildConnectionPoint: function(a, b) {
          var c = this.proxyLayoutArea("getConnectionPoint", b);
          return d.point(a).difference(c)
        },
        proxyLayoutArea: function(a) {
          var b = Array.prototype.slice.call(arguments, 1);
          return f.fromDirection(this.direction).prototype[a].apply(this.parentArea, b)
        }
      }), e.extend = b.Model.extend;
      var g = e.extend({
          getTopDY: function() {
            return -this.height / 2
          },
          findAreaByPoint: function(a) {
            return this.layoutAreas.find(function(b) {
              return b.rootCY > a.y
            })
          },
          computeSize: function(a) {
            this.height = this.sumGaps(a.siblingGap);
            var b = this.layoutAreas;
            this.height += b.reduce(function(a, b) {
              return a + b.height + b.prevSiblingGap + b.nextSiblingGap
            }, 0), b.reduce(function(b, c) {
              return this.width = Math.max(this.width, c.getExtendedWidth()), c.dy += b + c.getCY(), b + c.prevSiblingGap + c.height + c.nextSiblingGap + a.siblingGap
            }.bind(this), this.getTopDY())
          },
          getYTowardsParent: function() {
            return this.parentArea.rootCY
          },
          getXTowardsParent: function() {
            var a = this.parentArea;
            return a.rootCX + this.LRSign * (a.rootSize.width / 2 + a.gap)
          },
          getNeighborPointFromRank: function(a) {
            var b, c = this.siblingGap;
            if (this.exists()) {
              var d = this.layoutAreas[a],
                e = this.layoutAreas[a + 1];
              b = d ? e ? (d.y + d.height + e.y) / 2 : d.y + d.height + c / 2 : e.y - c / 2
            } else b = this.getYTowardsParent();
            return {
              x: this.getXTowardsParent(),
              y: b
            }
          }
        }),
        h = g.extend({
          direction: "L",
          LRSign: -1
        }),
        i = g.extend({
          direction: "R",
          LRSign: 1
        }),
        j = {
          getXTowardsParent: function() {
            var a = this.parentArea;
            return a.rootCX + this.LRSign * a.gap
          },
          getYTowardsParent: function() {
            var a = this.parentArea,
              b = a.getLRHeight(a.siblings) / 2;
            return b += Math.min(a.firstChildGap, this.siblingGap / 2), a.rootCY + this.TBSign * b
          },
          getFirstChildConnectionPoints: function(a) {
            return [d.point(this.parentArea.rootCX, a.y)]
          },
          getChildConnectionPoint: function(a, b) {
            return d.point(a).offset(-this.LRSign * b.width / 2, 0)
          },
          getParentConnectionPoint: function() {
            var a = this.parentArea,
              b = d.point(a.rootCX, a.rootCY);
            return b.offset(0, this.TBSign * a.rootSize.height / 2)
          }
        },
        k = {
          getTopDY: function() {
            return 0
          }
        },
        l = {
          getTopDY: function() {
            return -this.height
          }
        },
        m = g.extend({
          direction: "BR",
          LRSign: 1,
          TBSign: 1
        });
      a.util.assign(m.prototype, j, k);
      var n = g.extend({
        direction: "BL",
        LRSign: -1,
        TBSign: 1
      });
      a.util.assign(n.prototype, j, k);
      var o = g.extend({
        direction: "TR",
        LRSign: 1,
        TBSign: -1
      });
      a.util.assign(o.prototype, j, l);
      var p = g.extend({
        direction: "TL",
        LRSign: -1,
        TBSign: -1
      });
      a.util.assign(p.prototype, j, l);
      var q = e.extend({
          getLeftDX: function() {
            return -this.width / 2
          },
          findAreaByPoint: function(a) {
            return this.layoutAreas.find(function(b) {
              return b.rootCX > a.x
            })
          },
          computeSize: function(a) {
            this.width = this.sumGaps(a.siblingGap);
            var b = this.layoutAreas;
            this.width += b.reduce(function(a, b) {
              return a + b.width + b.prevSiblingGap + b.nextSiblingGap
            }, 0), b.reduce(function(b, c) {
              return this.height = Math.max(this.height, c.getExtendedHeight()), c.dx += b + c.getCX(), b + c.prevSiblingGap + c.width + c.nextSiblingGap + a.siblingGap
            }.bind(this), this.getLeftDX())
          },
          getNeighborPointFromRank: function(a) {
            var b;
            if (this.exists()) {
              var c = this.layoutAreas[a],
                d = this.layoutAreas[a + 1];
              b = c ? d ? (c.x + c.width + d.x) / 2 : c.x + c.width + this.siblingGap / 2 : d.x - this.siblingGap / 2
            } else b = this.parentArea.rootCX;
            return {
              x: b,
              y: this.getYTowardsParent()
            }
          }
        }),
        r = q.extend({
          direction: "T",
          getYTowardsParent: function() {
            var a = this.parentArea;
            return a.rootCY - a.getLRHeight() / 2 - a.gap
          }
        }),
        s = q.extend({
          direction: "B",
          getYTowardsParent: function() {
            var a = this.parentArea;
            return a.rootCY + a.getLRHeight() / 2 + a.gap
          }
        });
      a.util.assign(f, {
        create: function(a, b, c) {
          var d = f.fromDirection(a, c);
          return new d(b, c)
        },
        fromDirection: function(a, b) {
          var c;
          switch (a) {
            case "L":
              c = u;
              break;
            case "T":
              c = v;
              break;
            case "R":
              c = t;
              break;
            case "B":
              c = w;
              break;
            case "BR":
              c = x;
              break;
            case "BL":
              c = y;
              break;
            case "TR":
              c = z;
              break;
            case "TL":
              c = A;
              break;
            default:
              c = f
          }
          return c
        }
      }), a.util.assign(f.prototype, {
        direction: null,
        compute: function(a) {
          this.childAreas = a, this.computeRelativePosition(this.root, a)
        },
        getHeight: function(a, b) {
          return this.getTHeight(a) + this.getBHeight(a) + this.getLRHeight()
        },
        getWidth: function(a, b) {
          var c = Math.max(a.T.width, a.B.width) / 2,
            d = Math.max(this.getLWidth(a, b) + b.width / 2, c),
            e = Math.max(this.getRWidth(a, b) + b.width / 2, c);
          return d + e
        },
        getLRHeight: function() {
          return Math.max(this.rootSize.height, this.siblings.L.height, this.siblings.R.height)
        },
        getTHeight: function(a) {
          return a.T.height + this.getTXHeight(a)
        },
        getBHeight: function(a) {
          return a.B.height + this.getBXHeight(a)
        },
        getXLRWidth: function(a, b) {
          return this.getLWidth(a, b) + b.width + this.getRWidth(a, b)
        },
        getXRWidth: function(a, b) {
          var c = Math.max(a.BR.width, a.TR.width);
          return c > 0 && (c -= b.width / 2), c
        },
        getTXHeight: function(a) {
          var b = Math.max(a.TR.height, a.TL.height);
          return b > 0 && (b += this.firstChildGap), b
        },
        getBXHeight: function(a) {
          var b = Math.max(a.BR.height, a.BL.height);
          return b > 0 && (b += this.firstChildGap), b
        },
        getXLWidth: function(a, b) {
          var c = Math.max(a.BL.width, a.TL.width);
          return c > 0 && (c -= b.width / 2), c
        },
        getRWidth: function(a, b) {
          return Math.max(a.R.width, this.getXRWidth(a, b))
        },
        getLWidth: function(a, b) {
          return Math.max(a.L.width, this.getXLWidth(a, b))
        },
        getTBOverlap: function(a, b) {
          var c = Math.max(a.T.width, a.B.width);
          return c > 0 && (c -= b.width, c /= 2), c
        },
        getRootDX: function(a, b) {
          var c = this.getTBOverlap(a, b),
            d = Math.max(this.getLWidth(a, b), c);
          return d -= Math.max(this.getRWidth(a, b), c), d / 2
        },
        getMinimalGap: function(a) {
          return Math.min(a.siblingGap, this.firstChildGap, this.parentGap)
        },
        getBBox: function(a) {
          var b = d.rect(this),
            c = a && a.expandBy;
          return c && b.moveAndExpand({
            x: -c,
            y: -c,
            width: 2 * c,
            height: 2 * c
          }), b
        },
        containsPoint: function(a, b) {
          return this.getBBox(b).containsPoint(a)
        },
        getLayoutSiblings: function(a) {
          return this.siblings[a]
        },
        getExtendedWidth: function() {
          return this.width + this.gap + this.rootOffset
        },
        getExtendedHeight: function() {
          return this.height + this.gap + this.rootOffset
        },
        findMinimalAreaByPoint: function(a, b) {
          if (!this.containsPoint(a, b)) return null;
          var c;
          return this.childAreas.some(function(d) {
            return c = d.findMinimalAreaByPoint(a, b), !! c
          }), c || this
        },
        getType: function() {
          return Object.keys(this.siblings).reduce(function(a, b) {
            var c = this.siblings[b];
            return c.exists() ? a.concat(b) : a
          }.bind(this), []).sort().join("-")
        },
        getRootAttributes: function(b, c) {
          var d = {
              rootOffset: b.get(c.offset || "offset") || 0,
              rootMargin: b.get(c.margin || "margin") || 0,
              prevSiblingGap: b.get(c.prevSiblingGap || "prevSiblingGap") || 0,
              nextSiblingGap: b.get(c.nextSiblingGap || "nextSiblingGap") || 0
            },
            e = b.get(c.siblingRank || "siblingRank");
          a.util.isNumber(e) && (d.siblingRank = e);
          var f = b.get(c.firstChildGap || "firstChildGap");
          return a.util.isNumber(f) && (d.firstChildGap = f), d
        },
        getRootSize: function(a, b) {
          var c = a.size();
          return c[this.marginDimension] += b, c
        },
        createSiblings: function(b, c) {
          var d = a.util.groupBy(b, "direction");
          return {
            L: new h(d.L, this, c),
            T: new r(d.T, this, c),
            R: new i(d.R, this, c),
            B: new s(d.B, this, c),
            BR: new m(d.BR, this, c),
            BL: new n(d.BL, this, c),
            TR: new o(d.TR, this, c),
            TL: new p(d.TL, this, c)
          }
        },
        computeSize: function(a, b) {
          return {
            width: this.getWidth(a, b),
            height: this.getHeight(a, b)
          }
        },
        computeOrigin: function() {
          var a = this.siblings,
            b = this.rootSize,
            c = Math.max(this.getLWidth(a, b) + b.width / 2, this.getXLWidth(a, b) + b.width / 2, a.T.width / 2, a.B.width / 2);
          return {
            x: this.rootCX - c,
            y: this.rootCY - this.getTHeight(a) - this.getLRHeight() / 2
          }
        },
        moveSiblings: function(a, b) {
          if (this.hasHorizontalSiblings(a)) {
            var c = b.width / 2;
            a.L.move(-c, 0), a.R.move(c, 0)
          }
          if (this.hasVerticalSiblings(a)) {
            var d = this.getLRHeight() / 2;
            a.T.move(0, -d), a.B.move(0, d), a.BR.move(0, d), a.BL.move(0, d), a.B.move(0, this.getBXHeight(a)), a.TR.move(0, -d), a.TL.move(0, -d), a.T.move(0, -this.getTXHeight(a))
          }
        },
        moveRootToConnectionPoint: function(a) {
          var b = this.getConnectionPoint(a);
          this.dx += b.x, this.dy += b.y
        },
        computeRelativePosition: function(b, c) {
          var d = this.siblings = this.createSiblings(c, {
              siblingGap: this.siblingGap
            }),
            e = this.rootSize = this.getRootSize(b, this.rootMargin);
          a.util.assign(this, this.computeSize(d, e)), this.moveSiblings(d, e), this.moveRootToConnectionPoint(e), this.moveRootBehindSiblings(d, e), this.moveRootFromParent()
        },
        computeAbsolutePosition: function() {
          if (this.parentArea) this.rootCX = this.parentArea.rootCX + this.dx, this.rootCY = this.parentArea.rootCY + this.dy, this.level = this.parentArea.level + 1;
          else {
            var b = this.root.getBBox().center();
            this.rootCX = b.x, this.rootCY = b.y, this.level = 0
          }
          a.util.assign(this, this.computeOrigin())
        },
        hasVerticalSiblings: function(a) {
          return a.T.exists() || a.B.exists() || a.BR.exists() || a.BL.exists() || a.TR.exists() || a.TL.exists()
        },
        hasHorizontalSiblings: function(a) {
          return a.L.exists() || a.R.exists()
        },
        isSourceArea: function() {
          return !this.parentArea
        },
        isSinkArea: function() {
          return 0 === this.childAreas.length
        },
        getRootPosition: function() {
          var a = this.root.get("size");
          return {
            x: this.rootCX - a.width / 2,
            y: this.rootCY - a.height / 2
          }
        },
        getRootVertices: function(b, c) {
          if (c = c || {}, b = b || this, 0 === b[this.deltaCoordinate] || !this.parentArea) return [];
          var d, e = this.parentArea.getInnerSize();
          if (!c.ignoreSiblings && this.hasSiblingsBetweenParent()) {
            var f = this.siblings[this.oppositeDirection];
            d = this.getRelativeVerticesAvoidingSiblings(e, b, f)
          } else d = this.getRelativeVertices(e, b);
          return a.util.invoke(d, "offset", this.parentArea.rootCX, this.parentArea.rootCY)
        },
        getInnerSize: function() {
          return {
            width: this.rootSize.width,
            height: this.getLRHeight()
          }
        },
        getConnectionPoint: function() {
          return null
        },
        getRelativeVertices: function() {
          return null
        },
        moveRootFromParent: function() {},
        moveRootBehindSiblings: function() {},
        hasSiblingsBetweenParent: function() {
          return !this.isSourceArea() && this.siblings[this.oppositeDirection].exists()
        },
        getCY: function() {
          return this.height / 2 + this.prevSiblingGap
        },
        getCX: function() {
          return this.width / 2 + this.prevSiblingGap
        }
      }), f.extend = b.Model.extend;
      var t = f.extend({
          direction: "R",
          oppositeDirection: "L",
          deltaCoordinate: "dx",
          marginDimension: "height",
          getConnectionPoint: function(a) {
            return d.point(a.width / 2, 0)
          },
          moveRootBehindSiblings: function(a, b) {
            this.dx += Math.max(this.getLWidth(a, b), this.getTBOverlap(a, b)), this.dy += (this.getTHeight(a) - this.getBHeight(a)) / 2
          },
          moveRootFromParent: function() {
            this.dx += this.parentGap + this.rootOffset
          },
          getRelativeVertices: function(a, b) {
            var c = this.getConnectionPoint(a),
              d = this.parentGap / 2;
            return [c.clone().offset(d, 0), c.clone().offset(d, b.dy)]
          },
          getRelativeVerticesAvoidingSiblings: function(a, b, c) {
            var d = this.getConnectionPoint(a),
              e = c.siblingGap / 2,
              f = this.dx > 0 ? -1 : 1,
              g = b.dy + f * (c.height + e) / 2,
              h = b.dy + f * this.rootSize.height / 4,
              i = this.gap / 2,
              j = 1.5 * i + Math.max(this.getLWidth(this.siblings, this.rootSize), this.getTBOverlap(this.siblings, this.rootSize));
            return [d.clone().offset(i, 0), d.clone().offset(i, g), d.clone().offset(j, g), d.clone().offset(j, h)]
          }
        }),
        u = f.extend({
          direction: "L",
          oppositeDirection: "R",
          deltaCoordinate: "dx",
          marginDimension: "height",
          getConnectionPoint: function(a) {
            return d.point(-a.width / 2, 0)
          },
          moveRootBehindSiblings: function(a, b) {
            this.dx -= Math.max(this.getRWidth(a, b), this.getTBOverlap(a, b)), this.dy += (this.getTHeight(a) - this.getBHeight(a)) / 2
          },
          moveRootFromParent: function() {
            this.dx -= this.parentGap + this.rootOffset
          },
          getRelativeVertices: function(a, b) {
            var c = this.getConnectionPoint(a),
              d = -this.parentGap / 2;
            return [c.clone().offset(d, 0), c.clone().offset(d, b.dy)]
          },
          getRelativeVerticesAvoidingSiblings: function(a, b, c) {
            var d = this.getConnectionPoint(a),
              e = this.dx > 0 ? -1 : 1,
              f = b.dy + e * (c.height + c.siblingGap / 2) / 2,
              g = b.dy + e * this.rootSize.height / 4,
              h = this.gap / 2,
              i = 1.5 * h + Math.max(this.getRWidth(this.siblings, this.rootSize), this.getTBOverlap(this.siblings, this.rootSize));
            return [d.clone().offset(-h, 0), d.clone().offset(-h, f), d.clone().offset(-i, f), d.clone().offset(-i, g)]
          }
        }),
        v = f.extend({
          direction: "T",
          oppositeDirection: "B",
          deltaCoordinate: "dy",
          marginDimension: "width",
          getConnectionPoint: function(a) {
            return d.point(0, -a.height / 2)
          },
          moveRootBehindSiblings: function(a, b) {
            this.dx += this.getRootDX(a, b), this.hasHorizontalSiblings(a) && (this.dy -= (this.getLRHeight() - b.height) / 2), this.dy -= this.getBHeight(a)
          },
          moveRootFromParent: function() {
            this.dy -= this.parentGap + this.rootOffset
          },
          getRelativeVertices: function(a, b) {
            var c = this.getConnectionPoint(a),
              d = -this.getTXHeight(this.parentArea.siblings) - this.parentGap / 2;
            return [c.clone().offset(0, d), c.clone().offset(b.dx, d)]
          },
          getRelativeVerticesAvoidingSiblings: function(a, b) {
            var c = this.getConnectionPoint(a),
              d = this.siblings,
              e = d.B,
              f = this.getTXHeight(this.parentArea.siblings) + this.parentGap / 2,
              g = f + e.height;
            g += this.getBXHeight(this.siblings) + this.parentGap / 4;
            var h = this.dy < 0 ? -1 : 1,
              i = d[h > 0 ? "BR" : "BL"].width,
              j = b.dx;
            j += h * (Math.max(i, e.width / 2) + e.siblingGap / 4);
            var k = b.dx + h * this.rootSize.width / 4;
            return [c.clone().offset(0, -f), c.clone().offset(j, -f), c.clone().offset(j, -g), c.clone().offset(k, -g)]
          }
        }),
        w = f.extend({
          direction: "B",
          oppositeDirection: "T",
          deltaCoordinate: "dy",
          marginDimension: "width",
          getConnectionPoint: function(a) {
            return d.point(0, a.height / 2)
          },
          moveRootBehindSiblings: function(a, b) {
            this.dx += this.getRootDX(a, b), this.dy += this.getTHeight(a), this.hasHorizontalSiblings(a) && (this.dy += (this.getLRHeight() - b.height) / 2)
          },
          moveRootFromParent: function() {
            this.dy += this.parentGap + this.rootOffset
          },
          getRelativeVertices: function(a, b) {
            var c = this.getConnectionPoint(a),
              d = this.getBXHeight(this.parentArea.siblings) + this.parentGap / 2;
            return [c.clone().offset(0, d), c.clone().offset(b.dx, d)]
          },
          getRelativeVerticesAvoidingSiblings: function(a, b) {
            var c = this.getConnectionPoint(a),
              d = this.siblings,
              e = d.T,
              f = this.getBXHeight(this.parentArea.siblings) + this.parentGap / 2,
              g = f + e.height;
            g += this.getTXHeight(d) + this.parentGap / 4;
            var h = this.dy < 0 ? -1 : 1,
              i = d[h > 0 ? "TR" : "TL"].width,
              j = b.dx;
            j += h * (Math.max(i, e.width / 2) + e.siblingGap / 4);
            var k = b.dx + h * this.rootSize.width / 4;
            return [c.clone().offset(0, f), c.clone().offset(j, f), c.clone().offset(j, g), c.clone().offset(k, g)]
          }
        }),
        x = f.extend({
          direction: "BR",
          oppositeDirection: "L",
          deltaCoordinate: "dy",
          marginDimension: "height",
          getConnectionPoint: function(a) {
            return d.point(0, a.height / 2)
          },
          getCY: function() {
            return this.prevSiblingGap
          },
          moveRootBehindSiblings: function(a, b) {
            var c = Math.max(a.T.width, a.B.width);
            this.dx += Math.max(this.getLWidth(a, b), (c - b.width) / 2), this.dy += this.getTHeight(a), this.hasHorizontalSiblings(a) && (this.dy += (this.getLRHeight() - b.height) / 2)
          },
          moveRootFromParent: function() {
            var a = this.parentArea;
            a && (this.dy += a.firstChildGap), this.dx += this.rootSize.width / 2 + this.rootOffset + this.parentGap
          },
          getRelativeVertices: function(a, b) {
            var c = this.getConnectionPoint(a);
            return [c.clone().offset(0, b.dy - a.height / 2)]
          },
          getRelativeVerticesAvoidingSiblings: function(a, b, c) {
            var e = b.dx - this.rootSize.width / 4,
              f = b.dy;
            return f += Math.max(c.height, this.rootSize.height) / 2, f += this.getMinimalGap(c) / 2, [d.point(0, f), d.point(e, f)]
          }
        }),
        y = f.extend({
          direction: "BL",
          oppositeDirection: "R",
          deltaCoordinate: "dy",
          marginDimension: "height",
          getConnectionPoint: function(a) {
            return d.point(0, a.height / 2)
          },
          getCY: function() {
            return this.prevSiblingGap
          },
          moveRootBehindSiblings: function(a, b) {
            var c = Math.max(a.T.width, a.B.width);
            this.dx -= Math.max(this.getRWidth(a, b), (c - b.width) / 2), this.dy += this.getTHeight(a), this.hasHorizontalSiblings(a) && (this.dy += (this.getLRHeight() - b.height) / 2)
          },
          moveRootFromParent: function() {
            var a = this.parentArea;
            a && (this.dy += a.firstChildGap), this.dx -= this.rootSize.width / 2 + this.rootOffset + this.parentGap
          },
          getRelativeVertices: function(a, b) {
            var c = this.getConnectionPoint(a);
            return [c.clone().offset(0, b.dy - a.height / 2)]
          },
          getRelativeVerticesAvoidingSiblings: function(a, b, c) {
            var e = b.dx + this.rootSize.width / 4,
              f = b.dy;
            return f += Math.max(c.height, this.rootSize.height) / 2, f += this.getMinimalGap(c) / 2, [d.point(0, f), d.point(e, f)]
          }
        }),
        z = f.extend({
          direction: "TR",
          oppositeDirection: "L",
          deltaCoordinate: "dy",
          marginDimension: "height",
          getConnectionPoint: function(a) {
            return d.point(0, a.height / 2)
          },
          getCY: function() {
            return this.height - this.rootSize.height + this.prevSiblingGap
          },
          moveRootBehindSiblings: function(a, b) {
            this.dx += Math.max(this.getLWidth(a, b), this.getTBOverlap(a, b)), this.dy -= this.getBHeight(a), this.hasHorizontalSiblings(a) && (this.dy -= (this.getLRHeight() - b.height) / 2)
          },
          moveRootFromParent: function() {
            var a = this.parentArea;
            a && (this.dy -= a.firstChildGap), this.dx += this.rootSize.width / 2 + this.rootOffset + this.parentGap
          },
          getRelativeVertices: function(a, b) {
            var c = this.getConnectionPoint(a);
            return [c.clone().offset(0, b.dy - a.height / 2)]
          },
          getRelativeVerticesAvoidingSiblings: function(a, b, c) {
            var e = b.dx - this.rootSize.width / 4,
              f = b.dy;
            return f -= Math.max(c.height, this.rootSize.height) / 2, f -= this.getMinimalGap(c) / 2, [d.point(0, f), d.point(e, f)]
          }
        }),
        A = f.extend({
          direction: "TL",
          oppositeDirection: "R",
          deltaCoordinate: "dy",
          marginDimension: "height",
          getConnectionPoint: function(a) {
            return d.point(0, a.height / 2)
          },
          getCY: function() {
            return this.height - this.rootSize.height + this.prevSiblingGap
          },
          moveRootBehindSiblings: function(a, b) {
            this.dx -= Math.max(this.getRWidth(a, b), this.getTBOverlap(a, b)), this.dy -= this.getBHeight(a), this.hasHorizontalSiblings(a) && (this.dy -= (this.getLRHeight() - b.height) / 2)
          },
          moveRootFromParent: function() {
            var a = this.parentArea;
            a && (this.dy -= a.firstChildGap), this.dx -= this.rootSize.width / 2 + this.rootOffset + this.parentGap
          },
          getRelativeVertices: function(a, b) {
            var c = this.getConnectionPoint(a);
            return [c.clone().offset(0, b.dy - a.height / 2)]
          },
          getRelativeVerticesAvoidingSiblings: function(a, b, c) {
            var e = b.dx + this.rootSize.width / 4,
              f = b.dy;
            return f -= Math.max(c.height, this.rootSize.height) / 2, f -= this.getMinimalGap(c) / 2, [d.point(0, f), d.point(e, f)]
          }
        }),
        B = {
          rotate: function(a) {
            var b = "LRBT",
              c = b.indexOf(a[0]) - b.indexOf(a[1]);
            return function(a) {
              var d = b.indexOf(a);
              return d >= 0 ? b[(4 + d - c) % 4] : a
            }
          },
          flip: function(a) {
            var b = a[0],
              c = a[1];
            return function(a) {
              return a === b ? c : a === c ? b : a
            }
          },
          straighten: function(a) {
            return function() {
              return a[1]
            }
          }
        },
        C = b.Model.extend({
          defaults: {
            graph: void 0,
            gap: 20,
            parentGap: 20,
            siblingGap: 20,
            firstChildGap: 20,
            direction: "R",
            directionRule: B.straighten,
            updatePosition: function(a, b, c) {
              a.set("position", b, c)
            },
            updateVertices: function(a, b, c) {
              a.set("vertices", b, c)
            },
            updateAttributes: null,
            filter: null,
            attributeNames: {}
          },
          initialize: function() {
            this._cacheOptions(this.attributes), this.layoutAreas = {}
          },
          layout: function(a) {
            this.layoutAreas = {};
            for (var b = this.getGraphSources(a), c = 0, d = b.length; c < d; c++) this.layoutTree(b[c], a);
            return this.trigger("layout:done", a), this
          },
          layoutTree: function(a, b) {
            b = b || {}, b.treeLayout = !0;
            var c = this._computeLayoutAreas(a, null, b);
            return this._computeAbsolutePositions(c), this._updateCells(c, b), this
          },
          getLayoutArea: function(a) {
            return this.layoutAreas[a.id || a] || null
          },
          getRootLayoutAreas: function() {
            return this.getGraphSources().map(this.getLayoutArea, this)
          },
          getGraphSources: function(a) {
            var b = this.graph.getSources();
            return this.filter && b.length > 0 && (b = this.filter(b, null, a) || b), b
          },
          getMinimalRootAreaByPoint: function(b) {
            var c = this.getRootLayoutAreas().filter(function(a) {
              return a.containsPoint(b)
            });
            return a.util.isEmpty(c) ? null : c.reduce(function(a, b) {
              return b.width * b.height < a.min && (a.min = b.width * b.height, a.item = b), a
            }, {
              min: 1 / 0,
              item: void 0
            }).item
          },
          _computeLayoutAreas: function(a, b, c) {
            var d = b ? b.direction : this.get("direction"),
              e = a.get(this.getAttributeName("direction")) || d,
              g = f.create(e, a, this.attributes);
            g.parentArea = b, g.link = this.graph.getConnectedLinks(a, {
              inbound: !0
            })[0];
            for (var h = this._getChildren(a, c), i = [], j = 0, k = h.length; j < k; j++) i.push(this._computeLayoutAreas(h[j], g, c));
            return g.compute(i), this.layoutAreas[a.id] = g, g
          },
          _cacheOptions: function(b) {
            var c = ["updateAttributes", "updateVertices", "updatePosition", "filter"];
            c.forEach(function(c) {
              this[c] = a.util.isFunction(b[c]) ? b[c] : null
            }, this), this.graph = b.graph
          },
          _getChildren: function(a, b) {
            var c = this.graph.getNeighbors(a, {
              outbound: !0
            });
            return this.filter && c.length > 0 && (c = this.filter(c, a, b) || c), c
          },
          _computeAbsolutePositions: function(a) {
            a.computeAbsolutePosition(a);
            for (var b = 0, c = a.childAreas.length; b < c; b++) this._computeAbsolutePositions(a.childAreas[b])
          },
          _updateCells: function(a, b) {
            var c = a.root,
              d = a.link || null;
            d && (this.updatePosition && this.updatePosition(c, a.getRootPosition(), b), this.updateVertices && this.updateVertices(d, a.getRootVertices(), b)), this.changeSiblingRank(c, a.siblingRank, b), this.updateAttributes && this.updateAttributes(a, c, d, b);
            for (var e = 0, f = a.childAreas.length; e < f; e++) this._updateCells(a.childAreas[e], b)
          },
          updateDirections: function(a, b, c) {
            c = c || {};
            var d = this.getAttributeName("direction"),
              e = this.get("directionRule")(b);
            this.graph.search(a, function(a, b) {
              if (0 !== b) {
                var f = e(a.get(d));
                this.changeDirection(a, f, c)
              }
            }.bind(this), {
              outbound: !0
            })
          },
          reconnectElement: function(a, b, c) {
            c = c || {};
            var d = this.getLayoutArea(a),
              e = d.link;
            if (e) {
              e.set("source", {
                id: b.id || b
              }, c);
              var f = d.direction,
                g = c.direction || f,
                h = c.siblingRank || void 0;
              return this.changeSiblingRank(a, h, c), this.changeDirection(a, g, c), f !== g && this.updateDirections(a, [f, c.direction], c), !0
            }
            return !1
          },
          changeSiblingRank: function(a, b, c) {
            a.set(this.getAttributeName("siblingRank"), b, c)
          },
          changeDirection: function(a, b, c) {
            a.set(this.getAttributeName("direction"), b, c)
          },
          getAttributeName: function(a) {
            return this.get("attributeNames")[a] || a
          },
          getAttribute: function(a, b) {
            return a.get(this.getAttributeName(b))
          },
          prepare: function() {
            return this
          }
        }, {
          directionRules: B
        });
      a.layout.TreeLayout = C
    }(joint, Backbone, _, g);
  joint.format.gexf = {}, joint.format.gexf.toCellsArray = function(a, b, c) {
    var d = new DOMParser,
      e = d.parseFromString(a, "text/xml");
    if ("parsererror" == e.documentElement.nodeName) throw new Error("Error while parsing GEXF file.");
    var f = Array.from(e.documentElement.querySelectorAll("node")),
      g = Array.from(e.documentElement.querySelectorAll("edge")),
      h = [];
    return f.forEach(function(a) {
      var c = parseFloat(a.querySelector("size").getAttribute("value")),
        d = b({
          id: a.getAttribute("id"),
          width: c,
          height: c,
          label: a.getAttribute("label")
        });
      h.push(d)
    }), g.forEach(function(a) {
      var b = c({
        source: a.getAttribute("source"),
        target: a.getAttribute("target")
      });
      h.unshift(b)
    }), h
  };
  !
    function(a, b, c, d) {
      function e(a) {
        var b = c.Deferred(),
          e = a.attr("xlink:href") || a.attr("href");
        return d.imageToDataUri(e, function(c, d) {
          !c && d && a.attr("xlink:href", d), b.resolve()
        }), b.promise()
      }
      function f(a) {
        return (new XMLSerializer).serializeToString(a).replace(/&nbsp;/g, " ")
      }
      function g(a, c) {
        var d = a.ownerDocument,
          e = d.implementation.createDocument(null, "xml", null);
        b(a).prepend(b("style", {
          type: "text/css"
        }, [e.createCDATASection(c)]))
      }
      function h(b, d) {
        for (var e = Array.from(b.querySelectorAll("*")), f = Array.from(d.querySelectorAll("*")), g = b.ownerDocument, h = g.styleSheets.length, i = [], j = h - 1; j >= 0; j--) i[j] = g.styleSheets[j], g.styleSheets[j].disabled = !0;
        var k = {};
        e.forEach(function(b, c) {
          var d = window.getComputedStyle(b, null),
            e = {};
          a.util.forIn(d, function(a) {
            e[a] = d.getPropertyValue(a)
          }), k[c] = e
        }), h != g.styleSheets.length && i.forEach(function(a, b) {
          g.styleSheets[b] = a
        });
        for (var l = 0; l < h; l++) g.styleSheets[l].disabled = !1;
        var m = {};
        e.forEach(function(b, c) {
          var d = window.getComputedStyle(b, null),
            e = k[c],
            f = {};
          a.util.forIn(d, function(a) {
            d.getPropertyValue(a) !== e[a] && (f[a] = d.getPropertyValue(a))
          }), m[c] = f
        }), f.forEach(function(a, b) {
          c(a).css(m[b])
        })
      }
      a.dia.Paper.prototype.toSVG = function(a, i) {
        i = i || {}, this.trigger("beforeexport", i);
        var j = b(this.svg).clone(),
          k = j.findOne("." + d.addClassNamePrefix("viewport")),
          l = i.area || this.paperToLocalRect(this.getContentBBox()),
          m = i.preserveDimensions;
        m && j.attr({
          width: m.width || l.width,
          height: m.height || l.height
        }), j.removeAttr("style").attr("viewBox", [l.x, l.y, l.width, l.height].join(" ")), k.removeAttr("transform"), i.useComputedStyles !== !1 && h(this.svg, j.node);
        var n = i.stylesheet;
        if (d.isString(n) && g(j.node, n), this.trigger("afterexport", i), i.convertImagesToDataUris) {
          var o = j.find("image"),
            p = o.map(e);
          c.when.apply(c, p).then(function() {
            a(f(j.node))
          })
        } else a(f(j.node))
      }, a.dia.Paper.prototype.openAsSVG = function(a) {
        var b = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes",
          c = d.uniqueId("svg_output");
        this.toSVG(function(a) {
          var d = window.open("", c, b),
            e = "data:image/svg+xml," + encodeURIComponent(a);
          d.document.write('<img src="' + e + '" style="max-height:100%" />')
        }, d.assign({
          convertImagesToDataUris: !0
        }, a))
      }
    }(joint, V, $, joint.util);
  !
    function(a) {
      function b(a) {
        for (var b = a.data, c = a.width * a.height * 4, d = 0; d < c; d += 4) {
          var e = b[d + 3] / 255;
          b[d] *= e, b[d + 1] *= e, b[d + 2] *= e
        }
      }
      function c(a) {
        for (var b = a.data, c = a.width * a.height * 4, d = 0; d < c; d += 4) {
          var e = b[d + 3];
          0 != e && (e = 255 / e, b[d] *= e, b[d + 1] *= e, b[d + 2] *= e)
        }
      }
      function d(a, b, c, d) {
        var g = document.getElementById(a),
          h = g.naturalWidth,
          i = g.naturalHeight,
          j = document.getElementById(b);
        j.style.width = h + "px", j.style.height = i + "px", j.width = h, j.height = i;
        var k = j.getContext("2d");
        k.clearRect(0, 0, h, i), k.drawImage(g, 0, 0), isNaN(c) || c < 1 || (d ? e(b, 0, 0, h, i, c) : f(b, 0, 0, h, i, c))
      }
      function e(a, d, e, f, j, k) {
        if (!(isNaN(k) || k < 1)) {
          k |= 0;
          var l, m = document.getElementById(a),
            n = m.getContext("2d");
          try {
            try {
              l = n.getImageData(d, e, f, j)
            } catch (o) {
              try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"), l = n.getImageData(d, e, f, j)
              } catch (o) {
                throw alert("Cannot access local image"), new Error("unable to access local image data: " + o)
              }
            }
          } catch (o) {
            throw alert("Cannot access image"), new Error("unable to access image data: " + o)
          }
          b(l);
          var p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = l.data,
            O = k + k + 1,
            P = f - 1,
            Q = j - 1,
            R = k + 1,
            S = R * (R + 1) / 2,
            T = new g,
            U = T;
          for (r = 1; r < O; r++) if (U = U.next = new g, r == R) var V = U;
          U.next = T;
          var W = null,
            X = null;
          v = u = 0;
          var Y = h[k],
            Z = i[k];
          for (q = 0; q < j; q++) {
            for (E = F = G = H = w = x = y = z = 0, A = R * (I = N[u]), B = R * (J = N[u + 1]), C = R * (K = N[u + 2]), D = R * (L = N[u + 3]), w += S * I, x += S * J, y += S * K, z += S * L, U = T, r = 0; r < R; r++) U.r = I, U.g = J, U.b = K, U.a = L, U = U.next;
            for (r = 1; r < R; r++) s = u + ((P < r ? P : r) << 2), w += (U.r = I = N[s]) * (M = R - r), x += (U.g = J = N[s + 1]) * M, y += (U.b = K = N[s + 2]) * M, z += (U.a = L = N[s + 3]) * M, E += I, F += J, G += K, H += L, U = U.next;
            for (W = T, X = V, p = 0; p < f; p++) N[u] = w * Y >> Z, N[u + 1] = x * Y >> Z, N[u + 2] = y * Y >> Z, N[u + 3] = z * Y >> Z, w -= A, x -= B, y -= C, z -= D, A -= W.r, B -= W.g, C -= W.b, D -= W.a, s = v + ((s = p + k + 1) < P ? s : P) << 2, E += W.r = N[s], F += W.g = N[s + 1], G += W.b = N[s + 2], H += W.a = N[s + 3], w += E, x += F, y += G, z += H, W = W.next, A += I = X.r, B += J = X.g, C += K = X.b, D += L = X.a, E -= I, F -= J, G -= K, H -= L, X = X.next, u += 4;
            v += f
          }
          for (p = 0; p < f; p++) {
            for (F = G = H = E = x = y = z = w = 0, u = p << 2, A = R * (I = N[u]), B = R * (J = N[u + 1]), C = R * (K = N[u + 2]), D = R * (L = N[u + 3]), w += S * I, x += S * J, y += S * K, z += S * L, U = T, r = 0; r < R; r++) U.r = I, U.g = J, U.b = K, U.a = L, U = U.next;
            for (t = f, r = 1; r <= k; r++) u = t + p << 2, w += (U.r = I = N[u]) * (M = R - r), x += (U.g = J = N[u + 1]) * M, y += (U.b = K = N[u + 2]) * M, z += (U.a = L = N[u + 3]) * M, E += I, F += J, G += K, H += L, U = U.next, r < Q && (t += f);
            for (u = p, W = T, X = V, q = 0; q < j; q++) s = u << 2, N[s] = w * Y >> Z, N[s + 1] = x * Y >> Z, N[s + 2] = y * Y >> Z, N[s + 3] = z * Y >> Z, w -= A, x -= B, y -= C, z -= D, A -= W.r, B -= W.g, C -= W.b, D -= W.a, s = p + ((s = q + R) < Q ? s : Q) * f << 2, w += E += W.r = N[s], x += F += W.g = N[s + 1], y += G += W.b = N[s + 2], z += H += W.a = N[s + 3], W = W.next, A += I = X.r, B += J = X.g, C += K = X.b, D += L = X.a, E -= I, F -= J, G -= K, H -= L, X = X.next, u += f
          }
          c(l), n.putImageData(l, d, e)
        }
      }
      function f(a, b, c, d, e, f) {
        if (!(isNaN(f) || f < 1)) {
          f |= 0;
          var j, k = document.getElementById(a),
            l = k.getContext("2d");
          try {
            try {
              j = l.getImageData(b, c, d, e)
            } catch (m) {
              try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"), j = l.getImageData(b, c, d, e)
              } catch (m) {
                throw alert("Cannot access local image"), new Error("unable to access local image data: " + m)
              }
            }
          } catch (m) {
            throw alert("Cannot access image"), new Error("unable to access image data: " + m)
          }
          var n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H = j.data,
            I = f + f + 1,
            J = d - 1,
            K = e - 1,
            L = f + 1,
            M = L * (L + 1) / 2,
            N = new g,
            O = N;
          for (p = 1; p < I; p++) if (O = O.next = new g, p == L) var P = O;
          O.next = N;
          var Q = null,
            R = null;
          t = s = 0;
          var S = h[f],
            T = i[f];
          for (o = 0; o < e; o++) {
            for (A = B = C = u = v = w = 0, x = L * (D = H[s]), y = L * (E = H[s + 1]), z = L * (F = H[s + 2]), u += M * D, v += M * E, w += M * F, O = N, p = 0; p < L; p++) O.r = D, O.g = E, O.b = F, O = O.next;
            for (p = 1; p < L; p++) q = s + ((J < p ? J : p) << 2), u += (O.r = D = H[q]) * (G = L - p), v += (O.g = E = H[q + 1]) * G, w += (O.b = F = H[q + 2]) * G, A += D, B += E, C += F, O = O.next;
            for (Q = N, R = P, n = 0; n < d; n++) H[s] = u * S >> T, H[s + 1] = v * S >> T, H[s + 2] = w * S >> T, u -= x, v -= y, w -= z, x -= Q.r, y -= Q.g, z -= Q.b, q = t + ((q = n + f + 1) < J ? q : J) << 2, A += Q.r = H[q], B += Q.g = H[q + 1], C += Q.b = H[q + 2], u += A, v += B, w += C, Q = Q.next, x += D = R.r, y += E = R.g, z += F = R.b, A -= D, B -= E, C -= F, R = R.next, s += 4;
            t += d
          }
          for (n = 0; n < d; n++) {
            for (B = C = A = v = w = u = 0, s = n << 2, x = L * (D = H[s]), y = L * (E = H[s + 1]), z = L * (F = H[s + 2]), u += M * D, v += M * E, w += M * F, O = N, p = 0; p < L; p++) O.r = D, O.g = E, O.b = F, O = O.next;
            for (r = d, p = 1; p <= f; p++) s = r + n << 2, u += (O.r = D = H[s]) * (G = L - p), v += (O.g = E = H[s + 1]) * G, w += (O.b = F = H[s + 2]) * G, A += D, B += E, C += F, O = O.next, p < K && (r += d);
            for (s = n, Q = N, R = P, o = 0; o < e; o++) q = s << 2, H[q] = u * S >> T, H[q + 1] = v * S >> T, H[q + 2] = w * S >> T, u -= x, v -= y, w -= z, x -= Q.r, y -= Q.g, z -= Q.b, q = n + ((q = o + L) < K ? q : K) * d << 2, u += A += Q.r = H[q], v += B += Q.g = H[q + 1], w += C += Q.b = H[q + 2], Q = Q.next, x += D = R.r, y += E = R.g, z += F = R.b, A -= D, B -= E, C -= F, R = R.next, s += d
          }
          l.putImageData(j, b, c)
        }
      }
      function g() {
        this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
      }
      var h = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
        i = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
        j = {
          image: d,
          canvasRGBA: e,
          canvasRGB: f
        };
      "undefined" != typeof define && define.amd ? define(function() {
        return j
      }) : "undefined" != typeof module && module.exports && (module.exports = j), a.stackBlur = j
    }("undefined" != typeof window ? window : this), function(a) {
    function b(a) {
      this.ok = !1, "#" == a.charAt(0) && (a = a.substr(1, 6)), a = a.replace(/ /g, ""), a = a.toLowerCase();
      var c = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        feldspar: "d19275",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslateblue: "8470ff",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        violetred: "d02090",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32"
      };
      for (var d in c) a == d && (a = c[d]);
      for (var e = [{
        re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
        example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
        process: function(a) {
          return [parseInt(a[1]), parseInt(a[2]), parseInt(a[3])]
        }
      }, {
        re: /^(\w{2})(\w{2})(\w{2})$/,
        example: ["#00ff00", "336699"],
        process: function(a) {
          return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
        }
      }, {
        re: /^(\w{1})(\w{1})(\w{1})$/,
        example: ["#fb0", "f0f"],
        process: function(a) {
          return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
        }
      }], f = 0; f < e.length; f++) {
        var g = e[f].re,
          h = e[f].process,
          i = g.exec(a);
        i && (channels = h(i), this.r = channels[0], this.g = channels[1], this.b = channels[2], this.ok = !0)
      }
      this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
      }, this.toHex = function() {
        var a = this.r.toString(16),
          b = this.g.toString(16),
          c = this.b.toString(16);
        return 1 == a.length && (a = "0" + a), 1 == b.length && (b = "0" + b), 1 == c.length && (c = "0" + c), "#" + a + b + c
      }, this.getHelpXML = function() {
        for (var a = new Array, d = 0; d < e.length; d++) for (var f = e[d].example, g = 0; g < f.length; g++) a[a.length] = f[g];
        for (var h in c) a[a.length] = h;
        var i = document.createElement("ul");
        i.setAttribute("id", "rgbcolor-examples");
        for (var d = 0; d < a.length; d++) try {
          var j = document.createElement("li"),
            k = new b(a[d]),
            l = document.createElement("div");
          l.style.cssText = "margin: 3px; border: 1px solid black; background:" + k.toHex() + "; color:" + k.toHex(), l.appendChild(document.createTextNode("test"));
          var m = document.createTextNode(" " + a[d] + " -> " + k.toRGB() + " -> " + k.toHex());
          j.appendChild(l), j.appendChild(m), i.appendChild(j)
        } catch (n) {}
        return i
      }
    }
    "undefined" != typeof define && define.amd ? define(function() {
      return b
    }) : "undefined" != typeof module && module.exports && (module.exports = b), a.RGBColor = b
  }("undefined" != typeof window ? window : this), function(a, b) {
    "use strict";
    "undefined" != typeof define && define.amd ? define("canvgModule", ["rgbcolor", "stackblur"], b) : "undefined" != typeof module && module.exports && (module.exports = b(require("rgbcolor"), require("stackblur"))), a.canvg = b(a.RGBColor, a.stackBlur)
  }("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
      var b = [0, 0, 0],
        c = function(c, d) {
          var e = a.match(c);
          null != e && (b[d] += e.length, a = a.replace(c, " "))
        };
      return a = a.replace(/:not\(([^\)]*)\)/g, "     $1 "), a = a.replace(/{[\s\S]*/gm, " "), c(g, 1), c(h, 0), c(j, 1), c(k, 2), c(l, 1), c(m, 1), a = a.replace(/[\*\s\+>~]/g, " "), a = a.replace(/[#\.]/g, " "), c(n, 2), b.join("")
    }
    function d(d) {
      var f = {
        opts: d
      };
      f.FRAMERATE = 30, f.MAX_VIRTUAL_PIXELS = 3e4, f.log = function(a) {}, 1 == f.opts.log && "undefined" != typeof console && (f.log = function(a) {
        console.log(a)
      }), f.init = function(a) {
        var b = 0;
        f.UniqueId = function() {
          return b++, "canvg" + b
        }, f.Definitions = {}, f.Styles = {}, f.StylesSpecificity = {}, f.Animations = [], f.Images = [], f.ctx = a, f.ViewPort = new function() {
          this.viewPorts = [], this.Clear = function() {
            this.viewPorts = []
          }, this.SetCurrent = function(a, b) {
            this.viewPorts.push({
              width: a,
              height: b
            })
          }, this.RemoveCurrent = function() {
            this.viewPorts.pop()
          }, this.Current = function() {
            return this.viewPorts[this.viewPorts.length - 1]
          }, this.width = function() {
            return this.Current().width
          }, this.height = function() {
            return this.Current().height
          }, this.ComputeSize = function(a) {
            return null != a && "number" == typeof a ? a : "x" == a ? this.width() : "y" == a ? this.height() : Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2)
          }
        }
      }, f.init(), f.ImagesLoaded = function() {
        for (var a = 0; a < f.Images.length; a++) if (!f.Images[a].loaded) return !1;
        return !0
      }, f.trim = function(a) {
        return a.replace(/^\s+|\s+$/g, "")
      }, f.compressSpaces = function(a) {
        return a.replace(/[\s\r\t\n]+/gm, " ")
      }, f.ajax = function(a) {
        var b;
        return b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), b ? (b.open("GET", a, !1), b.send(null), b.responseText) : null
      }, f.parseXml = function(a) {
        if ("undefined" != typeof Windows && "undefined" != typeof Windows.Data && "undefined" != typeof Windows.Data.Xml) {
          var b = new Windows.Data.Xml.Dom.XmlDocument,
            c = new Windows.Data.Xml.Dom.XmlLoadSettings;
          return c.prohibitDtd = !1, b.loadXml(a, c), b
        }
        if (!window.DOMParser) {
          a = a.replace(/<!DOCTYPE svg[^>]*>/, "");
          var b = new ActiveXObject("Microsoft.XMLDOM");
          return b.async = "false", b.loadXML(a), b
        }
        try {
          var d = new DOMParser;
          return d.parseFromString(a, "image/svg+xml")
        } catch (e) {
          return d = new DOMParser, d.parseFromString(a, "text/xml")
        }
      }, f.Property = function(a, b) {
        this.name = a, this.value = b
      }, f.Property.prototype.getValue = function() {
        return this.value
      }, f.Property.prototype.hasValue = function() {
        return null != this.value && "" !== this.value
      }, f.Property.prototype.numValue = function() {
        if (!this.hasValue()) return 0;
        var a = parseFloat(this.value);
        return (this.value + "").match(/%$/) && (a /= 100), a
      }, f.Property.prototype.valueOrDefault = function(a) {
        return this.hasValue() ? this.value : a
      }, f.Property.prototype.numValueOrDefault = function(a) {
        return this.hasValue() ? this.numValue() : a
      }, f.Property.prototype.addOpacity = function(b) {
        var c = this.value;
        if (null != b.value && "" != b.value && "string" == typeof this.value) {
          var d = new a(this.value);
          d.ok && (c = "rgba(" + d.r + ", " + d.g + ", " + d.b + ", " + b.numValue() + ")")
        }
        return new f.Property(this.name, c)
      }, f.Property.prototype.getDefinition = function() {
        var a = this.value.match(/#([^\)'"]+)/);
        return a && (a = a[1]), a || (a = this.value), f.Definitions[a]
      }, f.Property.prototype.isUrlDefinition = function() {
        return 0 == this.value.indexOf("url(")
      }, f.Property.prototype.getFillStyleDefinition = function(a, b) {
        var c = this.getDefinition();
        if (null != c && c.createGradient) return c.createGradient(f.ctx, a, b);
        if (null != c && c.createPattern) {
          if (c.getHrefAttribute().hasValue()) {
            var d = c.attribute("patternTransform");
            c = c.getHrefAttribute().getDefinition(), d.hasValue() && (c.attribute("patternTransform", !0).value = d.value)
          }
          return c.createPattern(f.ctx, a)
        }
        return null
      }, f.Property.prototype.getDPI = function(a) {
        return 96
      }, f.Property.prototype.getEM = function(a) {
        var b = 12,
          c = new f.Property("fontSize", f.Font.Parse(f.ctx.font).fontSize);
        return c.hasValue() && (b = c.toPixels(a)), b
      }, f.Property.prototype.getUnits = function() {
        var a = this.value + "";
        return a.replace(/[0-9\.\-]/g, "")
      }, f.Property.prototype.toPixels = function(a, b) {
        if (!this.hasValue()) return 0;
        var c = this.value + "";
        if (c.match(/em$/)) return this.numValue() * this.getEM(a);
        if (c.match(/ex$/)) return this.numValue() * this.getEM(a) / 2;
        if (c.match(/px$/)) return this.numValue();
        if (c.match(/pt$/)) return this.numValue() * this.getDPI(a) * (1 / 72);
        if (c.match(/pc$/)) return 15 * this.numValue();
        if (c.match(/cm$/)) return this.numValue() * this.getDPI(a) / 2.54;
        if (c.match(/mm$/)) return this.numValue() * this.getDPI(a) / 25.4;
        if (c.match(/in$/)) return this.numValue() * this.getDPI(a);
        if (c.match(/%$/)) return this.numValue() * f.ViewPort.ComputeSize(a);
        var d = this.numValue();
        return b && d < 1 ? d * f.ViewPort.ComputeSize(a) : d
      }, f.Property.prototype.toMilliseconds = function() {
        if (!this.hasValue()) return 0;
        var a = this.value + "";
        return a.match(/s$/) ? 1e3 * this.numValue() : a.match(/ms$/) ? this.numValue() : this.numValue()
      }, f.Property.prototype.toRadians = function() {
        if (!this.hasValue()) return 0;
        var a = this.value + "";
        return a.match(/deg$/) ? this.numValue() * (Math.PI / 180) : a.match(/grad$/) ? this.numValue() * (Math.PI / 200) : a.match(/rad$/) ? this.numValue() : this.numValue() * (Math.PI / 180)
      };
      var g = {
        baseline: "alphabetic",
        "before-edge": "top",
        "text-before-edge": "top",
        middle: "middle",
        central: "middle",
        "after-edge": "bottom",
        "text-after-edge": "bottom",
        ideographic: "ideographic",
        alphabetic: "alphabetic",
        hanging: "hanging",
        mathematical: "alphabetic"
      };
      return f.Property.prototype.toTextBaseline = function() {
        return this.hasValue() ? g[this.value] : null
      }, f.Font = new function() {
        this.Styles = "normal|italic|oblique|inherit", this.Variants = "normal|small-caps|inherit", this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit", this.CreateFont = function(a, b, c, d, e, g) {
          var h = null != g ? this.Parse(g) : this.CreateFont("", "", "", "", "", f.ctx.font);
          return {
            fontFamily: e || h.fontFamily,
            fontSize: d || h.fontSize,
            fontStyle: a || h.fontStyle,
            fontWeight: c || h.fontWeight,
            fontVariant: b || h.fontVariant,
            toString: function() {
              return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ")
            }
          }
        };
        var a = this;
        this.Parse = function(b) {
          for (var c = {}, d = f.trim(f.compressSpaces(b || "")).split(" "), e = {
            fontSize: !1,
            fontStyle: !1,
            fontWeight: !1,
            fontVariant: !1
          }, g = "", h = 0; h < d.length; h++) e.fontStyle || a.Styles.indexOf(d[h]) == -1 ? e.fontVariant || a.Variants.indexOf(d[h]) == -1 ? e.fontWeight || a.Weights.indexOf(d[h]) == -1 ? e.fontSize ? "inherit" != d[h] && (g += d[h]) : ("inherit" != d[h] && (c.fontSize = d[h].split("/")[0]), e.fontStyle = e.fontVariant = e.fontWeight = e.fontSize = !0) : ("inherit" != d[h] && (c.fontWeight = d[h]), e.fontStyle = e.fontVariant = e.fontWeight = !0) : ("inherit" != d[h] && (c.fontVariant = d[h]), e.fontStyle = e.fontVariant = !0) : ("inherit" != d[h] && (c.fontStyle = d[h]), e.fontStyle = !0);
          return "" != g && (c.fontFamily = g), c
        }
      }, f.ToNumberArray = function(a) {
        for (var b = f.trim(f.compressSpaces((a || "").replace(/,/g, " "))).split(" "), c = 0; c < b.length; c++) b[c] = parseFloat(b[c]);
        return b
      }, f.Point = function(a, b) {
        this.x = a, this.y = b
      }, f.Point.prototype.angleTo = function(a) {
        return Math.atan2(a.y - this.y, a.x - this.x)
      }, f.Point.prototype.applyTransform = function(a) {
        var b = this.x * a[0] + this.y * a[2] + a[4],
          c = this.x * a[1] + this.y * a[3] + a[5];
        this.x = b, this.y = c
      }, f.CreatePoint = function(a) {
        var b = f.ToNumberArray(a);
        return new f.Point(b[0], b[1])
      }, f.CreatePath = function(a) {
        for (var b = f.ToNumberArray(a), c = [], d = 0; d < b.length; d += 2) c.push(new f.Point(b[d], b[d + 1]));
        return c
      }, f.BoundingBox = function(a, b, c, d) {
        this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN, this.x = function() {
          return this.x1
        }, this.y = function() {
          return this.y1
        }, this.width = function() {
          return this.x2 - this.x1
        }, this.height = function() {
          return this.y2 - this.y1
        }, this.addPoint = function(a, b) {
          null != a && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = a, this.x2 = a), a < this.x1 && (this.x1 = a), a > this.x2 && (this.x2 = a)), null != b && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = b, this.y2 = b), b < this.y1 && (this.y1 = b), b > this.y2 && (this.y2 = b))
        }, this.addX = function(a) {
          this.addPoint(a, null)
        }, this.addY = function(a) {
          this.addPoint(null, a)
        }, this.addBoundingBox = function(a) {
          this.addPoint(a.x1, a.y1), this.addPoint(a.x2, a.y2)
        }, this.addQuadraticCurve = function(a, b, c, d, e, f) {
          var g = a + 2 / 3 * (c - a),
            h = b + 2 / 3 * (d - b),
            i = g + 1 / 3 * (e - a),
            j = h + 1 / 3 * (f - b);
          this.addBezierCurve(a, b, g, i, h, j, e, f)
        }, this.addBezierCurve = function(a, b, c, d, e, f, g, h) {
          var j = [a, b],
            k = [c, d],
            l = [e, f],
            m = [g, h];
          for (this.addPoint(j[0], j[1]), this.addPoint(m[0], m[1]), i = 0; i <= 1; i++) {
            var n = function(a) {
                return Math.pow(1 - a, 3) * j[i] + 3 * Math.pow(1 - a, 2) * a * k[i] + 3 * (1 - a) * Math.pow(a, 2) * l[i] + Math.pow(a, 3) * m[i]
              },
              o = 6 * j[i] - 12 * k[i] + 6 * l[i],
              p = -3 * j[i] + 9 * k[i] - 9 * l[i] + 3 * m[i],
              q = 3 * k[i] - 3 * j[i];
            if (0 != p) {
              var r = Math.pow(o, 2) - 4 * q * p;
              if (!(r < 0)) {
                var s = (-o + Math.sqrt(r)) / (2 * p);
                0 < s && s < 1 && (0 == i && this.addX(n(s)), 1 == i && this.addY(n(s)));
                var t = (-o - Math.sqrt(r)) / (2 * p);
                0 < t && t < 1 && (0 == i && this.addX(n(t)), 1 == i && this.addY(n(t)))
              }
            } else {
              if (0 == o) continue;
              var u = -q / o;
              0 < u && u < 1 && (0 == i && this.addX(n(u)), 1 == i && this.addY(n(u)))
            }
          }
        }, this.isPointInBox = function(a, b) {
          return this.x1 <= a && a <= this.x2 && this.y1 <= b && b <= this.y2
        }, this.addPoint(a, b), this.addPoint(c, d)
      }, f.Transform = function(a) {
        var b = this;
        this.Type = {}, this.Type.translate = function(a) {
          this.p = f.CreatePoint(a), this.apply = function(a) {
            a.translate(this.p.x || 0, this.p.y || 0)
          }, this.unapply = function(a) {
            a.translate(-1 * this.p.x || 0, -1 * this.p.y || 0)
          }, this.applyToPoint = function(a) {
            a.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0])
          }
        }, this.Type.rotate = function(a) {
          var b = f.ToNumberArray(a);
          this.angle = new f.Property("angle", b[0]), this.cx = b[1] || 0, this.cy = b[2] || 0, this.apply = function(a) {
            a.translate(this.cx, this.cy), a.rotate(this.angle.toRadians()), a.translate(-this.cx, -this.cy)
          }, this.unapply = function(a) {
            a.translate(this.cx, this.cy), a.rotate(-1 * this.angle.toRadians()), a.translate(-this.cx, -this.cy)
          }, this.applyToPoint = function(a) {
            var b = this.angle.toRadians();
            a.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]), a.applyTransform([Math.cos(b), Math.sin(b), -Math.sin(b), Math.cos(b), 0, 0]), a.applyTransform([1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0])
          }
        }, this.Type.scale = function(a) {
          this.p = f.CreatePoint(a), this.apply = function(a) {
            a.scale(this.p.x || 1, this.p.y || this.p.x || 1)
          }, this.unapply = function(a) {
            a.scale(1 / this.p.x || 1, 1 / this.p.y || this.p.x || 1)
          }, this.applyToPoint = function(a) {
            a.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0])
          }
        }, this.Type.matrix = function(a) {
          this.m = f.ToNumberArray(a), this.apply = function(a) {
            a.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5])
          }, this.unapply = function(a) {
            var b = this.m[0],
              c = this.m[2],
              d = this.m[4],
              e = this.m[1],
              f = this.m[3],
              g = this.m[5],
              h = 0,
              i = 0,
              j = 1,
              k = 1 / (b * (f * j - g * i) - c * (e * j - g * h) + d * (e * i - f * h));
            a.transform(k * (f * j - g * i), k * (g * h - e * j), k * (d * i - c * j), k * (b * j - d * h), k * (c * g - d * f), k * (d * e - b * g))
          }, this.applyToPoint = function(a) {
            a.applyTransform(this.m)
          }
        }, this.Type.SkewBase = function(a) {
          this.base = b.Type.matrix, this.base(a), this.angle = new f.Property("angle", a)
        }, this.Type.SkewBase.prototype = new this.Type.matrix, this.Type.skewX = function(a) {
          this.base = b.Type.SkewBase, this.base(a), this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0]
        }, this.Type.skewX.prototype = new this.Type.SkewBase, this.Type.skewY = function(a) {
          this.base = b.Type.SkewBase, this.base(a), this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0]
        }, this.Type.skewY.prototype = new this.Type.SkewBase, this.transforms = [], this.apply = function(a) {
          for (var b = 0; b < this.transforms.length; b++) this.transforms[b].apply(a)
        }, this.unapply = function(a) {
          for (var b = this.transforms.length - 1; b >= 0; b--) this.transforms[b].unapply(a)
        }, this.applyToPoint = function(a) {
          for (var b = 0; b < this.transforms.length; b++) this.transforms[b].applyToPoint(a)
        };
        for (var c = f.trim(f.compressSpaces(a)).replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/), d = 0; d < c.length; d++) {
          var e = f.trim(c[d].split("(")[0]),
            g = c[d].split("(")[1].replace(")", ""),
            h = this.Type[e];
          if ("undefined" != typeof h) {
            var i = new h(g);
            i.type = e, this.transforms.push(i)
          }
        }
      }, f.AspectRatio = function(a, b, c, d, e, g, h, i, j, k) {
        b = f.compressSpaces(b), b = b.replace(/^defer\s/, "");
        var l = b.split(" ")[0] || "xMidYMid",
          m = b.split(" ")[1] || "meet",
          n = c / d,
          o = e / g,
          p = Math.min(n, o),
          q = Math.max(n, o);
        "meet" == m && (d *= p, g *= p), "slice" == m && (d *= q, g *= q), j = new f.Property("refX", j), k = new f.Property("refY", k), j.hasValue() && k.hasValue() ? a.translate(-p * j.toPixels("x"), -p * k.toPixels("y")) : (l.match(/^xMid/) && ("meet" == m && p == o || "slice" == m && q == o) && a.translate(c / 2 - d / 2, 0), l.match(/YMid$/) && ("meet" == m && p == n || "slice" == m && q == n) && a.translate(0, e / 2 - g / 2), l.match(/^xMax/) && ("meet" == m && p == o || "slice" == m && q == o) && a.translate(c - d, 0), l.match(/YMax$/) && ("meet" == m && p == n || "slice" == m && q == n) && a.translate(0, e - g)), "none" == l ? a.scale(n, o) : "meet" == m ? a.scale(p, p) : "slice" == m && a.scale(q, q), a.translate(null == h ? 0 : -h, null == i ? 0 : -i)
      }, f.Element = {}, f.EmptyProperty = new f.Property("EMPTY", ""), f.Element.ElementBase = function(a) {
        this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.children = [], this.attribute = function(a, b) {
          var c = this.attributes[a];
          return null != c ? c : (1 == b && (c = new f.Property(a, ""), this.attributes[a] = c), c || f.EmptyProperty)
        }, this.getHrefAttribute = function() {
          for (var a in this.attributes) if ("href" == a || a.match(/:href$/)) return this.attributes[a];
          return f.EmptyProperty
        }, this.style = function(a, b, c) {
          var d = this.styles[a];
          if (null != d) return d;
          var e = this.attribute(a);
          if (null != e && e.hasValue()) return this.styles[a] = e, e;
          if (1 != c) {
            var g = this.parent;
            if (null != g) {
              var h = g.style(a);
              if (null != h && h.hasValue()) return h
            }
          }
          return 1 == b && (d = new f.Property(a, ""), this.styles[a] = d), d || f.EmptyProperty
        }, this.render = function(a) {
          if ("none" != this.style("display").value && "hidden" != this.style("visibility").value) {
            if (a.save(), this.style("mask").hasValue()) {
              var b = this.style("mask").getDefinition();
              null != b && b.apply(a, this)
            } else if (this.style("filter").hasValue()) {
              var c = this.style("filter").getDefinition();
              null != c && c.apply(a, this)
            } else this.setContext(a), this.renderChildren(a), this.clearContext(a);
            a.restore()
          }
        }, this.setContext = function(a) {}, this.clearContext = function(a) {}, this.renderChildren = function(a) {
          for (var b = 0; b < this.children.length; b++) this.children[b].render(a)
        }, this.addChild = function(a, b) {
          var c = a;
          b && (c = f.CreateElement(a)), c.parent = this, "title" != c.type && this.children.push(c)
        }, this.addStylesFromStyleDefinition = function() {
          for (var b in f.Styles) if ("@" != b[0] && e(a, b)) {
            var c = f.Styles[b],
              d = f.StylesSpecificity[b];
            if (null != c) for (var g in c) {
              var h = this.stylesSpecificity[g];
              "undefined" == typeof h && (h = "000"), d > h && (this.styles[g] = c[g], this.stylesSpecificity[g] = d)
            }
          }
        };
        var b = new RegExp("^[A-Z-]+$"),
          c = function(a) {
            return b.test(a) ? a.toLowerCase() : a
          };
        if (null != a && 1 == a.nodeType) {
          for (var d = 0; d < a.attributes.length; d++) {
            var g = a.attributes[d],
              h = c(g.nodeName);
            this.attributes[h] = new f.Property(h, g.value)
          }
          if (this.addStylesFromStyleDefinition(), this.attribute("style").hasValue()) for (var i = this.attribute("style").value.split(";"), d = 0; d < i.length; d++) if ("" != f.trim(i[d])) {
            var j = i[d].split(":"),
              k = f.trim(j[0]),
              l = f.trim(j[1]);
            this.styles[k] = new f.Property(k, l)
          }
          this.attribute("id").hasValue() && null == f.Definitions[this.attribute("id").value] && (f.Definitions[this.attribute("id").value] = this);
          for (var d = 0; d < a.childNodes.length; d++) {
            var m = a.childNodes[d];
            if (1 == m.nodeType && this.addChild(m, !0), this.captureTextNodes && (3 == m.nodeType || 4 == m.nodeType)) {
              var n = m.value || m.text || m.textContent || "";
              "" != f.compressSpaces(n) && this.addChild(new f.Element.tspan(m), !1)
            }
          }
        }
      }, f.Element.RenderedElementBase = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.setContext = function(a) {
          if (this.style("fill").isUrlDefinition()) {
            var b = this.style("fill").getFillStyleDefinition(this, this.style("fill-opacity"));
            null != b && (a.fillStyle = b)
          } else if (this.style("fill").hasValue()) {
            var c = this.style("fill");
            "currentColor" == c.value && (c.value = this.style("color").value), "inherit" != c.value && (a.fillStyle = "none" == c.value ? "rgba(0,0,0,0)" : c.value)
          }
          if (this.style("fill-opacity").hasValue()) {
            var c = new f.Property("fill", a.fillStyle);
            c = c.addOpacity(this.style("fill-opacity")), a.fillStyle = c.value
          }
          if (this.style("stroke").isUrlDefinition()) {
            var b = this.style("stroke").getFillStyleDefinition(this, this.style("stroke-opacity"));
            null != b && (a.strokeStyle = b)
          } else if (this.style("stroke").hasValue()) {
            var d = this.style("stroke");
            "currentColor" == d.value && (d.value = this.style("color").value), "inherit" != d.value && (a.strokeStyle = "none" == d.value ? "rgba(0,0,0,0)" : d.value)
          }
          if (this.style("stroke-opacity").hasValue()) {
            var d = new f.Property("stroke", a.strokeStyle);
            d = d.addOpacity(this.style("stroke-opacity")), a.strokeStyle = d.value
          }
          if (this.style("stroke-width").hasValue()) {
            var e = this.style("stroke-width").toPixels();
            a.lineWidth = 0 == e ? .001 : e
          }
          if (this.style("stroke-linecap").hasValue() && (a.lineCap = this.style("stroke-linecap").value), this.style("stroke-linejoin").hasValue() && (a.lineJoin = this.style("stroke-linejoin").value), this.style("stroke-miterlimit").hasValue() && (a.miterLimit = this.style("stroke-miterlimit").value), this.style("stroke-dasharray").hasValue() && "none" != this.style("stroke-dasharray").value) {
            var g = f.ToNumberArray(this.style("stroke-dasharray").value);
            "undefined" != typeof a.setLineDash ? a.setLineDash(g) : "undefined" != typeof a.webkitLineDash ? a.webkitLineDash = g : "undefined" == typeof a.mozDash || 1 == g.length && 0 == g[0] || (a.mozDash = g);
            var h = this.style("stroke-dashoffset").numValueOrDefault(1);
            "undefined" != typeof a.lineDashOffset ? a.lineDashOffset = h : "undefined" != typeof a.webkitLineDashOffset ? a.webkitLineDashOffset = h : "undefined" != typeof a.mozDashOffset && (a.mozDashOffset = h)
          }
          if ("undefined" != typeof a.font && (a.font = f.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString()), this.style("transform", !1, !0).hasValue()) {
            var i = new f.Transform(this.style("transform", !1, !0).value);
            i.apply(a)
          }
          if (this.style("clip-path", !1, !0).hasValue()) {
            var j = this.style("clip-path", !1, !0).getDefinition();
            null != j && j.apply(a)
          }
          this.style("opacity").hasValue() && (a.globalAlpha = this.style("opacity").numValue())
        }
      }, f.Element.RenderedElementBase.prototype = new f.Element.ElementBase, f.Element.PathElementBase = function(a) {
        this.base = f.Element.RenderedElementBase, this.base(a), this.path = function(a) {
          return null != a && a.beginPath(), new f.BoundingBox
        }, this.renderChildren = function(a) {
          this.path(a), f.Mouse.checkPath(this, a), "" != a.fillStyle && ("inherit" != this.style("fill-rule").valueOrDefault("inherit") ? a.fill(this.style("fill-rule").value) : a.fill()), "" != a.strokeStyle && a.stroke();
          var b = this.getMarkers();
          if (null != b) {
            if (this.style("marker-start").isUrlDefinition()) {
              var c = this.style("marker-start").getDefinition();
              c.render(a, b[0][0], b[0][1])
            }
            if (this.style("marker-mid").isUrlDefinition()) for (var c = this.style("marker-mid").getDefinition(), d = 1; d < b.length - 1; d++) c.render(a, b[d][0], b[d][1]);
            if (this.style("marker-end").isUrlDefinition()) {
              var c = this.style("marker-end").getDefinition();
              c.render(a, b[b.length - 1][0], b[b.length - 1][1])
            }
          }
        }, this.getBoundingBox = function() {
          return this.path()
        }, this.getMarkers = function() {
          return null
        }
      }, f.Element.PathElementBase.prototype = new f.Element.RenderedElementBase, f.Element.svg = function(a) {
        this.base = f.Element.RenderedElementBase, this.base(a), this.baseClearContext = this.clearContext, this.clearContext = function(a) {
          this.baseClearContext(a), f.ViewPort.RemoveCurrent()
        }, this.baseSetContext = this.setContext, this.setContext = function(a) {
          a.strokeStyle = "rgba(0,0,0,0)", a.lineCap = "butt", a.lineJoin = "miter", a.miterLimit = 4, "undefined" != typeof a.font && "undefined" != typeof window.getComputedStyle && (a.font = window.getComputedStyle(a.canvas).getPropertyValue("font")), this.baseSetContext(a), this.attribute("x").hasValue() || (this.attribute("x", !0).value = 0), this.attribute("y").hasValue() || (this.attribute("y", !0).value = 0), a.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
          var b = f.ViewPort.width(),
            c = f.ViewPort.height();
          if (this.attribute("width").hasValue() || (this.attribute("width", !0).value = "100%"), this.attribute("height").hasValue() || (this.attribute("height", !0).value = "100%"), "undefined" == typeof this.root) {
            b = this.attribute("width").toPixels("x"), c = this.attribute("height").toPixels("y");
            var d = 0,
              e = 0;
            this.attribute("refX").hasValue() && this.attribute("refY").hasValue() && (d = -this.attribute("refX").toPixels("x"), e = -this.attribute("refY").toPixels("y")), "visible" != this.attribute("overflow").valueOrDefault("hidden") && (a.beginPath(), a.moveTo(d, e), a.lineTo(b, e), a.lineTo(b, c), a.lineTo(d, c), a.closePath(), a.clip())
          }
          if (f.ViewPort.SetCurrent(b, c), this.attribute("viewBox").hasValue()) {
            var g = f.ToNumberArray(this.attribute("viewBox").value),
              h = g[0],
              i = g[1];
            b = g[2], c = g[3], f.AspectRatio(a, this.attribute("preserveAspectRatio").value, f.ViewPort.width(), b, f.ViewPort.height(), c, h, i, this.attribute("refX").value, this.attribute("refY").value), f.ViewPort.RemoveCurrent(), f.ViewPort.SetCurrent(g[2], g[3])
          }
        }
      }, f.Element.svg.prototype = new f.Element.RenderedElementBase, f.Element.rect = function(a) {
        this.base = f.Element.PathElementBase, this.base(a), this.path = function(a) {
          var b = this.attribute("x").toPixels("x"),
            c = this.attribute("y").toPixels("y"),
            d = this.attribute("width").toPixels("x"),
            e = this.attribute("height").toPixels("y"),
            g = this.attribute("rx").toPixels("x"),
            h = this.attribute("ry").toPixels("y");
          return this.attribute("rx").hasValue() && !this.attribute("ry").hasValue() && (h = g), this.attribute("ry").hasValue() && !this.attribute("rx").hasValue() && (g = h), g = Math.min(g, d / 2), h = Math.min(h, e / 2), null != a && (a.beginPath(), a.moveTo(b + g, c), a.lineTo(b + d - g, c), a.quadraticCurveTo(b + d, c, b + d, c + h), a.lineTo(b + d, c + e - h), a.quadraticCurveTo(b + d, c + e, b + d - g, c + e), a.lineTo(b + g, c + e), a.quadraticCurveTo(b, c + e, b, c + e - h), a.lineTo(b, c + h), a.quadraticCurveTo(b, c, b + g, c), a.closePath()), new f.BoundingBox(b, c, b + d, c + e)
        }
      }, f.Element.rect.prototype = new f.Element.PathElementBase, f.Element.circle = function(a) {
        this.base = f.Element.PathElementBase, this.base(a), this.path = function(a) {
          var b = this.attribute("cx").toPixels("x"),
            c = this.attribute("cy").toPixels("y"),
            d = this.attribute("r").toPixels();
          return null != a && (a.beginPath(), a.arc(b, c, d, 0, 2 * Math.PI, !0), a.closePath()), new f.BoundingBox(b - d, c - d, b + d, c + d)
        }
      }, f.Element.circle.prototype = new f.Element.PathElementBase, f.Element.ellipse = function(a) {
        this.base = f.Element.PathElementBase, this.base(a), this.path = function(a) {
          var b = 4 * ((Math.sqrt(2) - 1) / 3),
            c = this.attribute("rx").toPixels("x"),
            d = this.attribute("ry").toPixels("y"),
            e = this.attribute("cx").toPixels("x"),
            g = this.attribute("cy").toPixels("y");
          return null != a && (a.beginPath(), a.moveTo(e, g - d), a.bezierCurveTo(e + b * c, g - d, e + c, g - b * d, e + c, g), a.bezierCurveTo(e + c, g + b * d, e + b * c, g + d, e, g + d), a.bezierCurveTo(e - b * c, g + d, e - c, g + b * d, e - c, g), a.bezierCurveTo(e - c, g - b * d, e - b * c, g - d, e, g - d), a.closePath()), new f.BoundingBox(e - c, g - d, e + c, g + d)
        }
      }, f.Element.ellipse.prototype = new f.Element.PathElementBase, f.Element.line = function(a) {
        this.base = f.Element.PathElementBase, this.base(a), this.getPoints = function() {
          return [new f.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new f.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y"))]
        }, this.path = function(a) {
          var b = this.getPoints();
          return null != a && (a.beginPath(), a.moveTo(b[0].x, b[0].y), a.lineTo(b[1].x, b[1].y)), new f.BoundingBox(b[0].x, b[0].y, b[1].x, b[1].y)
        }, this.getMarkers = function() {
          var a = this.getPoints(),
            b = a[0].angleTo(a[1]);
          return [[a[0], b], [a[1], b]]
        }
      }, f.Element.line.prototype = new f.Element.PathElementBase, f.Element.polyline = function(a) {
        this.base = f.Element.PathElementBase, this.base(a), this.points = f.CreatePath(this.attribute("points").value), this.path = function(a) {
          var b = new f.BoundingBox(this.points[0].x, this.points[0].y);
          null != a && (a.beginPath(), a.moveTo(this.points[0].x, this.points[0].y));
          for (var c = 1; c < this.points.length; c++) b.addPoint(this.points[c].x, this.points[c].y), null != a && a.lineTo(this.points[c].x, this.points[c].y);
          return b
        }, this.getMarkers = function() {
          for (var a = [], b = 0; b < this.points.length - 1; b++) a.push([this.points[b], this.points[b].angleTo(this.points[b + 1])]);
          return a.length > 0 && a.push([this.points[this.points.length - 1], a[a.length - 1][1]]), a
        }
      }, f.Element.polyline.prototype = new f.Element.PathElementBase, f.Element.polygon = function(a) {
        this.base = f.Element.polyline, this.base(a), this.basePath = this.path, this.path = function(a) {
          var b = this.basePath(a);
          return null != a && (a.lineTo(this.points[0].x, this.points[0].y), a.closePath()), b
        }
      }, f.Element.polygon.prototype = new f.Element.polyline, f.Element.path = function(a) {
        this.base = f.Element.PathElementBase, this.base(a);
        var b = this.attribute("d").value;
        b = b.replace(/,/gm, " ");
        for (var c = 0; c < 2; c++) b = b.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2");
        b = b.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2"), b = b.replace(/([0-9])([+\-])/gm, "$1 $2");
        for (var c = 0; c < 2; c++) b = b.replace(/(\.[0-9]*)(\.)/gm, "$1 $2");
        b = b.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 "), b = f.compressSpaces(b), b = f.trim(b), this.PathParser = new function(a) {
          this.tokens = a.split(" "), this.reset = function() {
            this.i = -1, this.command = "", this.previousCommand = "", this.start = new f.Point(0, 0), this.control = new f.Point(0, 0), this.current = new f.Point(0, 0), this.points = [], this.angles = []
          }, this.isEnd = function() {
            return this.i >= this.tokens.length - 1
          }, this.isCommandOrEnd = function() {
            return !!this.isEnd() || null != this.tokens[this.i + 1].match(/^[A-Za-z]$/)
          }, this.isRelativeCommand = function() {
            switch (this.command) {
              case "m":
              case "l":
              case "h":
              case "v":
              case "c":
              case "s":
              case "q":
              case "t":
              case "a":
              case "z":
                return !0
            }
            return !1
          }, this.getToken = function() {
            return this.i++, this.tokens[this.i]
          }, this.getScalar = function() {
            return parseFloat(this.getToken())
          }, this.nextCommand = function() {
            this.previousCommand = this.command, this.command = this.getToken()
          }, this.getPoint = function() {
            var a = new f.Point(this.getScalar(), this.getScalar());
            return this.makeAbsolute(a)
          }, this.getAsControlPoint = function() {
            var a = this.getPoint();
            return this.control = a, a
          }, this.getAsCurrentPoint = function() {
            var a = this.getPoint();
            return this.current = a, a
          }, this.getReflectedControlPoint = function() {
            if ("c" != this.previousCommand.toLowerCase() && "s" != this.previousCommand.toLowerCase() && "q" != this.previousCommand.toLowerCase() && "t" != this.previousCommand.toLowerCase()) return this.current;
            var a = new f.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
            return a
          }, this.makeAbsolute = function(a) {
            return this.isRelativeCommand() && (a.x += this.current.x, a.y += this.current.y), a
          }, this.addMarker = function(a, b, c) {
            null != c && this.angles.length > 0 && null == this.angles[this.angles.length - 1] && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(c)), this.addMarkerAngle(a, null == b ? null : b.angleTo(a))
          }, this.addMarkerAngle = function(a, b) {
            this.points.push(a), this.angles.push(b)
          }, this.getMarkerPoints = function() {
            return this.points
          }, this.getMarkerAngles = function() {
            for (var a = 0; a < this.angles.length; a++) if (null == this.angles[a]) for (var b = a + 1; b < this.angles.length; b++) if (null != this.angles[b]) {
              this.angles[a] = this.angles[b];
              break
            }
            return this.angles
          }
        }(b), this.path = function(a) {
          var b = this.PathParser;
          b.reset();
          var c = new f.BoundingBox;
          for (null != a && a.beginPath(); !b.isEnd();) switch (b.nextCommand(), b.command) {
            case "M":
            case "m":
              var d = b.getAsCurrentPoint();
              for (b.addMarker(d), c.addPoint(d.x, d.y), null != a && a.moveTo(d.x, d.y), b.start = b.current; !b.isCommandOrEnd();) {
                var d = b.getAsCurrentPoint();
                b.addMarker(d, b.start), c.addPoint(d.x, d.y), null != a && a.lineTo(d.x, d.y)
              }
              break;
            case "L":
            case "l":
              for (; !b.isCommandOrEnd();) {
                var e = b.current,
                  d = b.getAsCurrentPoint();
                b.addMarker(d, e), c.addPoint(d.x, d.y), null != a && a.lineTo(d.x, d.y)
              }
              break;
            case "H":
            case "h":
              for (; !b.isCommandOrEnd();) {
                var g = new f.Point((b.isRelativeCommand() ? b.current.x : 0) + b.getScalar(), b.current.y);
                b.addMarker(g, b.current), b.current = g, c.addPoint(b.current.x, b.current.y), null != a && a.lineTo(b.current.x, b.current.y)
              }
              break;
            case "V":
            case "v":
              for (; !b.isCommandOrEnd();) {
                var g = new f.Point(b.current.x, (b.isRelativeCommand() ? b.current.y : 0) + b.getScalar());
                b.addMarker(g, b.current), b.current = g, c.addPoint(b.current.x, b.current.y), null != a && a.lineTo(b.current.x, b.current.y)
              }
              break;
            case "C":
            case "c":
              for (; !b.isCommandOrEnd();) {
                var h = b.current,
                  i = b.getPoint(),
                  j = b.getAsControlPoint(),
                  k = b.getAsCurrentPoint();
                b.addMarker(k, j, i), c.addBezierCurve(h.x, h.y, i.x, i.y, j.x, j.y, k.x, k.y), null != a && a.bezierCurveTo(i.x, i.y, j.x, j.y, k.x, k.y)
              }
              break;
            case "S":
            case "s":
              for (; !b.isCommandOrEnd();) {
                var h = b.current,
                  i = b.getReflectedControlPoint(),
                  j = b.getAsControlPoint(),
                  k = b.getAsCurrentPoint();
                b.addMarker(k, j, i), c.addBezierCurve(h.x, h.y, i.x, i.y, j.x, j.y, k.x, k.y), null != a && a.bezierCurveTo(i.x, i.y, j.x, j.y, k.x, k.y)
              }
              break;
            case "Q":
            case "q":
              for (; !b.isCommandOrEnd();) {
                var h = b.current,
                  j = b.getAsControlPoint(),
                  k = b.getAsCurrentPoint();
                b.addMarker(k, j, j), c.addQuadraticCurve(h.x, h.y, j.x, j.y, k.x, k.y), null != a && a.quadraticCurveTo(j.x, j.y, k.x, k.y)
              }
              break;
            case "T":
            case "t":
              for (; !b.isCommandOrEnd();) {
                var h = b.current,
                  j = b.getReflectedControlPoint();
                b.control = j;
                var k = b.getAsCurrentPoint();
                b.addMarker(k, j, j), c.addQuadraticCurve(h.x, h.y, j.x, j.y, k.x, k.y), null != a && a.quadraticCurveTo(j.x, j.y, k.x, k.y)
              }
              break;
            case "A":
            case "a":
              for (; !b.isCommandOrEnd();) {
                var h = b.current,
                  l = b.getScalar(),
                  m = b.getScalar(),
                  n = b.getScalar() * (Math.PI / 180),
                  o = b.getScalar(),
                  p = b.getScalar(),
                  k = b.getAsCurrentPoint(),
                  q = new f.Point(Math.cos(n) * (h.x - k.x) / 2 + Math.sin(n) * (h.y - k.y) / 2, -Math.sin(n) * (h.x - k.x) / 2 + Math.cos(n) * (h.y - k.y) / 2),
                  r = Math.pow(q.x, 2) / Math.pow(l, 2) + Math.pow(q.y, 2) / Math.pow(m, 2);
                r > 1 && (l *= Math.sqrt(r), m *= Math.sqrt(r));
                var s = (o == p ? -1 : 1) * Math.sqrt((Math.pow(l, 2) * Math.pow(m, 2) - Math.pow(l, 2) * Math.pow(q.y, 2) - Math.pow(m, 2) * Math.pow(q.x, 2)) / (Math.pow(l, 2) * Math.pow(q.y, 2) + Math.pow(m, 2) * Math.pow(q.x, 2)));
                isNaN(s) && (s = 0);
                var t = new f.Point(s * l * q.y / m, s * -m * q.x / l),
                  u = new f.Point((h.x + k.x) / 2 + Math.cos(n) * t.x - Math.sin(n) * t.y, (h.y + k.y) / 2 + Math.sin(n) * t.x + Math.cos(n) * t.y),
                  v = function(a) {
                    return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2))
                  },
                  w = function(a, b) {
                    return (a[0] * b[0] + a[1] * b[1]) / (v(a) * v(b))
                  },
                  x = function(a, b) {
                    return (a[0] * b[1] < a[1] * b[0] ? -1 : 1) * Math.acos(w(a, b))
                  },
                  y = x([1, 0], [(q.x - t.x) / l, (q.y - t.y) / m]),
                  z = [(q.x - t.x) / l, (q.y - t.y) / m],
                  A = [(-q.x - t.x) / l, (-q.y - t.y) / m],
                  B = x(z, A);
                w(z, A) <= -1 && (B = Math.PI), w(z, A) >= 1 && (B = 0);
                var C = 1 - p ? 1 : -1,
                  D = y + C * (B / 2),
                  E = new f.Point(u.x + l * Math.cos(D), u.y + m * Math.sin(D));
                if (b.addMarkerAngle(E, D - C * Math.PI / 2), b.addMarkerAngle(k, D - C * Math.PI), c.addPoint(k.x, k.y), null != a) {
                  var w = l > m ? l : m,
                    F = l > m ? 1 : l / m,
                    G = l > m ? m / l : 1;
                  a.translate(u.x, u.y), a.rotate(n), a.scale(F, G), a.arc(0, 0, w, y, y + B, 1 - p), a.scale(1 / F, 1 / G), a.rotate(-n), a.translate(-u.x, -u.y)
                }
              }
              break;
            case "Z":
            case "z":
              null != a && a.closePath(), b.current = b.start
          }
          return c
        }, this.getMarkers = function() {
          for (var a = this.PathParser.getMarkerPoints(), b = this.PathParser.getMarkerAngles(), c = [], d = 0; d < a.length; d++) c.push([a[d], b[d]]);
          return c
        }
      }, f.Element.path.prototype = new f.Element.PathElementBase, f.Element.pattern = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.createPattern = function(a, b) {
          var c = this.attribute("width").toPixels("x", !0),
            d = this.attribute("height").toPixels("y", !0),
            e = new f.Element.svg;
          e.attributes.viewBox = new f.Property("viewBox", this.attribute("viewBox").value), e.attributes.width = new f.Property("width", c + "px"), e.attributes.height = new f.Property("height", d + "px"), e.attributes.transform = new f.Property("transform", this.attribute("patternTransform").value), e.children = this.children;
          var g = document.createElement("canvas");
          g.width = c, g.height = d;
          var h = g.getContext("2d");
          this.attribute("x").hasValue() && this.attribute("y").hasValue() && h.translate(this.attribute("x").toPixels("x", !0), this.attribute("y").toPixels("y", !0));
          for (var i = -1; i <= 1; i++) for (var j = -1; j <= 1; j++) h.save(), e.attributes.x = new f.Property("x", i * g.width), e.attributes.y = new f.Property("y", j * g.height), e.render(h), h.restore();
          var k = a.createPattern(g, "repeat");
          return k
        }
      }, f.Element.pattern.prototype = new f.Element.ElementBase, f.Element.marker = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.baseRender = this.render, this.render = function(a, b, c) {
          a.translate(b.x, b.y), "auto" == this.attribute("orient").valueOrDefault("auto") && a.rotate(c), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && a.scale(a.lineWidth, a.lineWidth), a.save();
          var d = new f.Element.svg;
          d.attributes.viewBox = new f.Property("viewBox", this.attribute("viewBox").value), d.attributes.refX = new f.Property("refX", this.attribute("refX").value), d.attributes.refY = new f.Property("refY", this.attribute("refY").value), d.attributes.width = new f.Property("width", this.attribute("markerWidth").value), d.attributes.height = new f.Property("height", this.attribute("markerHeight").value), d.attributes.fill = new f.Property("fill", this.attribute("fill").valueOrDefault("black")), d.attributes.stroke = new f.Property("stroke", this.attribute("stroke").valueOrDefault("none")), d.children = this.children, d.render(a), a.restore(), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && a.scale(1 / a.lineWidth, 1 / a.lineWidth), "auto" == this.attribute("orient").valueOrDefault("auto") && a.rotate(-c), a.translate(-b.x, -b.y)
        }
      }, f.Element.marker.prototype = new f.Element.ElementBase, f.Element.defs = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.render = function(a) {}
      }, f.Element.defs.prototype = new f.Element.ElementBase, f.Element.GradientBase = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.stops = [];
        for (var b = 0; b < this.children.length; b++) {
          var c = this.children[b];
          "stop" == c.type && this.stops.push(c)
        }
        this.getGradient = function() {}, this.gradientUnits = function() {
          return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox")
        }, this.attributesToInherit = ["gradientUnits"], this.inheritStopContainer = function(a) {
          for (var b = 0; b < this.attributesToInherit.length; b++) {
            var c = this.attributesToInherit[b];
            !this.attribute(c).hasValue() && a.attribute(c).hasValue() && (this.attribute(c, !0).value = a.attribute(c).value)
          }
        }, this.createGradient = function(a, b, c) {
          var d = this;
          this.getHrefAttribute().hasValue() && (d = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(d));
          var e = function(a) {
              if (c.hasValue()) {
                var b = new f.Property("color", a);
                return b.addOpacity(c).value
              }
              return a
            },
            g = this.getGradient(a, b);
          if (null == g) return e(d.stops[d.stops.length - 1].color);
          for (var h = 0; h < d.stops.length; h++) g.addColorStop(d.stops[h].offset, e(d.stops[h].color));
          if (this.attribute("gradientTransform").hasValue()) {
            var i = f.ViewPort.viewPorts[0],
              j = new f.Element.rect;
            j.attributes.x = new f.Property("x", -f.MAX_VIRTUAL_PIXELS / 3), j.attributes.y = new f.Property("y", -f.MAX_VIRTUAL_PIXELS / 3), j.attributes.width = new f.Property("width", f.MAX_VIRTUAL_PIXELS), j.attributes.height = new f.Property("height", f.MAX_VIRTUAL_PIXELS);
            var k = new f.Element.g;
            k.attributes.transform = new f.Property("transform", this.attribute("gradientTransform").value), k.children = [j];
            var l = new f.Element.svg;
            l.attributes.x = new f.Property("x", 0), l.attributes.y = new f.Property("y", 0), l.attributes.width = new f.Property("width", i.width), l.attributes.height = new f.Property("height", i.height), l.children = [k];
            var m = document.createElement("canvas");
            m.width = i.width, m.height = i.height;
            var n = m.getContext("2d");
            return n.fillStyle = g, l.render(n), n.createPattern(m, "no-repeat")
          }
          return g
        }
      }, f.Element.GradientBase.prototype = new f.Element.ElementBase, f.Element.linearGradient = function(a) {
        this.base = f.Element.GradientBase, this.base(a), this.attributesToInherit.push("x1"), this.attributesToInherit.push("y1"), this.attributesToInherit.push("x2"), this.attributesToInherit.push("y2"), this.getGradient = function(a, b) {
          var c = "objectBoundingBox" == this.gradientUnits() ? b.getBoundingBox() : null;
          this.attribute("x1").hasValue() || this.attribute("y1").hasValue() || this.attribute("x2").hasValue() || this.attribute("y2").hasValue() || (this.attribute("x1", !0).value = 0, this.attribute("y1", !0).value = 0, this.attribute("x2", !0).value = 1, this.attribute("y2", !0).value = 0);
          var d = "objectBoundingBox" == this.gradientUnits() ? c.x() + c.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x"),
            e = "objectBoundingBox" == this.gradientUnits() ? c.y() + c.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y"),
            f = "objectBoundingBox" == this.gradientUnits() ? c.x() + c.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x"),
            g = "objectBoundingBox" == this.gradientUnits() ? c.y() + c.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");
          return d == f && e == g ? null : a.createLinearGradient(d, e, f, g)
        }
      }, f.Element.linearGradient.prototype = new f.Element.GradientBase, f.Element.radialGradient = function(a) {
        this.base = f.Element.GradientBase, this.base(a), this.attributesToInherit.push("cx"), this.attributesToInherit.push("cy"), this.attributesToInherit.push("r"), this.attributesToInherit.push("fx"), this.attributesToInherit.push("fy"), this.getGradient = function(a, b) {
          var c = b.getBoundingBox();
          this.attribute("cx").hasValue() || (this.attribute("cx", !0).value = "50%"), this.attribute("cy").hasValue() || (this.attribute("cy", !0).value = "50%"), this.attribute("r").hasValue() || (this.attribute("r", !0).value = "50%");
          var d = "objectBoundingBox" == this.gradientUnits() ? c.x() + c.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x"),
            e = "objectBoundingBox" == this.gradientUnits() ? c.y() + c.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y"),
            f = d,
            g = e;
          this.attribute("fx").hasValue() && (f = "objectBoundingBox" == this.gradientUnits() ? c.x() + c.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x")), this.attribute("fy").hasValue() && (g = "objectBoundingBox" == this.gradientUnits() ? c.y() + c.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y"));
          var h = "objectBoundingBox" == this.gradientUnits() ? (c.width() + c.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels();
          return a.createRadialGradient(f, g, 0, d, e, h)
        }
      }, f.Element.radialGradient.prototype = new f.Element.GradientBase, f.Element.stop = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.offset = this.attribute("offset").numValue(), this.offset < 0 && (this.offset = 0), this.offset > 1 && (this.offset = 1);
        var b = this.style("stop-color", !0);
        "" === b.value && (b.value = "#000"), this.style("stop-opacity").hasValue() && (b = b.addOpacity(this.style("stop-opacity"))), this.color = b.value
      }, f.Element.stop.prototype = new f.Element.ElementBase, f.Element.AnimateBase = function(a) {
        this.base = f.Element.ElementBase, this.base(a), f.Animations.push(this), this.duration = 0, this.begin = this.attribute("begin").toMilliseconds(), this.maxDuration = this.begin + this.attribute("dur").toMilliseconds(), this.getProperty = function() {
          var a = this.attribute("attributeType").value,
            b = this.attribute("attributeName").value;
          return "CSS" == a ? this.parent.style(b, !0) : this.parent.attribute(b, !0)
        }, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.calcValue = function() {
          return ""
        }, this.update = function(a) {
          if (null == this.initialValue && (this.initialValue = this.getProperty().value, this.initialUnits = this.getProperty().getUnits()), this.duration > this.maxDuration) {
            if ("indefinite" == this.attribute("repeatCount").value || "indefinite" == this.attribute("repeatDur").value) this.duration = 0;
            else if ("freeze" != this.attribute("fill").valueOrDefault("remove") || this.frozen) {
              if ("remove" == this.attribute("fill").valueOrDefault("remove") && !this.removed) return this.removed = !0, this.getProperty().value = this.parent.animationFrozen ? this.parent.animationFrozenValue : this.initialValue, !0
            } else this.frozen = !0, this.parent.animationFrozen = !0, this.parent.animationFrozenValue = this.getProperty().value;
            return !1
          }
          this.duration = this.duration + a;
          var b = !1;
          if (this.begin < this.duration) {
            var c = this.calcValue();
            if (this.attribute("type").hasValue()) {
              var d = this.attribute("type").value;
              c = d + "(" + c + ")"
            }
            this.getProperty().value = c, b = !0
          }
          return b
        }, this.from = this.attribute("from"), this.to = this.attribute("to"), this.values = this.attribute("values"), this.values.hasValue() && (this.values.value = this.values.value.split(";")), this.progress = function() {
          var a = {
            progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
          };
          if (this.values.hasValue()) {
            var b = a.progress * (this.values.value.length - 1),
              c = Math.floor(b),
              d = Math.ceil(b);
            a.from = new f.Property("from", parseFloat(this.values.value[c])), a.to = new f.Property("to", parseFloat(this.values.value[d])), a.progress = (b - c) / (d - c)
          } else a.from = this.from, a.to = this.to;
          return a
        }
      }, f.Element.AnimateBase.prototype = new f.Element.ElementBase, f.Element.animate = function(a) {
        this.base = f.Element.AnimateBase, this.base(a), this.calcValue = function() {
          var a = this.progress(),
            b = a.from.numValue() + (a.to.numValue() - a.from.numValue()) * a.progress;
          return b + this.initialUnits
        }
      }, f.Element.animate.prototype = new f.Element.AnimateBase, f.Element.animateColor = function(b) {
        this.base = f.Element.AnimateBase, this.base(b), this.calcValue = function() {
          var b = this.progress(),
            c = new a(b.from.value),
            d = new a(b.to.value);
          if (c.ok && d.ok) {
            var e = c.r + (d.r - c.r) * b.progress,
              f = c.g + (d.g - c.g) * b.progress,
              g = c.b + (d.b - c.b) * b.progress;
            return "rgb(" + parseInt(e, 10) + "," + parseInt(f, 10) + "," + parseInt(g, 10) + ")"
          }
          return this.attribute("from").value
        }
      }, f.Element.animateColor.prototype = new f.Element.AnimateBase, f.Element.animateTransform = function(a) {
        this.base = f.Element.AnimateBase, this.base(a), this.calcValue = function() {
          for (var a = this.progress(), b = f.ToNumberArray(a.from.value), c = f.ToNumberArray(a.to.value), d = "", e = 0; e < b.length; e++) d += b[e] + (c[e] - b[e]) * a.progress + " ";
          return d
        }
      }, f.Element.animateTransform.prototype = new f.Element.animate, f.Element.font = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.isRTL = !1, this.isArabic = !1, this.fontFace = null, this.missingGlyph = null, this.glyphs = [];
        for (var b = 0; b < this.children.length; b++) {
          var c = this.children[b];
          "font-face" == c.type ? (this.fontFace = c, c.style("font-family").hasValue() && (f.Definitions[c.style("font-family").value] = this)) : "missing-glyph" == c.type ? this.missingGlyph = c : "glyph" == c.type && ("" != c.arabicForm ? (this.isRTL = !0, this.isArabic = !0, "undefined" == typeof this.glyphs[c.unicode] && (this.glyphs[c.unicode] = []), this.glyphs[c.unicode][c.arabicForm] = c) : this.glyphs[c.unicode] = c)
        }
      }, f.Element.font.prototype = new f.Element.ElementBase, f.Element.fontface = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.ascent = this.attribute("ascent").value, this.descent = this.attribute("descent").value, this.unitsPerEm = this.attribute("units-per-em").numValue()
      }, f.Element.fontface.prototype = new f.Element.ElementBase, f.Element.missingglyph = function(a) {
        this.base = f.Element.path, this.base(a), this.horizAdvX = 0
      }, f.Element.missingglyph.prototype = new f.Element.path, f.Element.glyph = function(a) {
        this.base = f.Element.path, this.base(a), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.unicode = this.attribute("unicode").value, this.arabicForm = this.attribute("arabic-form").value
      }, f.Element.glyph.prototype = new f.Element.path, f.Element.text = function(a) {
        this.captureTextNodes = !0, this.base = f.Element.RenderedElementBase, this.base(a), this.baseSetContext = this.setContext, this.setContext = function(a) {
          this.baseSetContext(a);
          var b = this.style("dominant-baseline").toTextBaseline();
          null == b && (b = this.style("alignment-baseline").toTextBaseline()), null != b && (a.textBaseline = b)
        }, this.getBoundingBox = function() {
          var a = this.attribute("x").toPixels("x"),
            b = this.attribute("y").toPixels("y"),
            c = this.parent.style("font-size").numValueOrDefault(f.Font.Parse(f.ctx.font).fontSize);
          return new f.BoundingBox(a, b - c, a + Math.floor(2 * c / 3) * this.children[0].getText().length, b)
        }, this.renderChildren = function(a) {
          this.x = this.attribute("x").toPixels("x"), this.y = this.attribute("y").toPixels("y"), this.attribute("dx").hasValue() && (this.x += this.attribute("dx").toPixels("x")), this.attribute("dy").hasValue() && (this.y += this.attribute("dy").toPixels("y")), this.x += this.getAnchorDelta(a, this, 0);
          for (var b = 0; b < this.children.length; b++) this.renderChild(a, this, this, b)
        }, this.getAnchorDelta = function(a, b, c) {
          var d = this.style("text-anchor").valueOrDefault("start");
          if ("start" != d) {
            for (var e = 0, f = c; f < b.children.length; f++) {
              var g = b.children[f];
              if (f > c && g.attribute("x").hasValue()) break;
              e += g.measureTextRecursive(a)
            }
            return -1 * ("end" == d ? e : e / 2)
          }
          return 0
        }, this.renderChild = function(a, b, c, d) {
          var e = c.children[d];
          e.attribute("x").hasValue() ? (e.x = e.attribute("x").toPixels("x") + b.getAnchorDelta(a, c, d), e.attribute("dx").hasValue() && (e.x += e.attribute("dx").toPixels("x"))) : (e.attribute("dx").hasValue() && (b.x += e.attribute("dx").toPixels("x")), e.x = b.x), b.x = e.x + e.measureText(a), e.attribute("y").hasValue() ? (e.y = e.attribute("y").toPixels("y"), e.attribute("dy").hasValue() && (e.y += e.attribute("dy").toPixels("y"))) : (e.attribute("dy").hasValue() && (b.y += e.attribute("dy").toPixels("y")), e.y = b.y), b.y = e.y, e.render(a);
          for (var d = 0; d < e.children.length; d++) b.renderChild(a, b, e, d)
        }
      }, f.Element.text.prototype = new f.Element.RenderedElementBase, f.Element.TextElementBase = function(a) {
        this.base = f.Element.RenderedElementBase, this.base(a), this.getGlyph = function(a, b, c) {
          var d = b[c],
            e = null;
          if (a.isArabic) {
            var f = "isolated";
            (0 == c || " " == b[c - 1]) && c < b.length - 2 && " " != b[c + 1] && (f = "terminal"), c > 0 && " " != b[c - 1] && c < b.length - 2 && " " != b[c + 1] && (f = "medial"), c > 0 && " " != b[c - 1] && (c == b.length - 1 || " " == b[c + 1]) && (f = "initial"), "undefined" != typeof a.glyphs[d] && (e = a.glyphs[d][f], null == e && "glyph" == a.glyphs[d].type && (e = a.glyphs[d]))
          } else e = a.glyphs[d];
          return null == e && (e = a.missingGlyph), e
        }, this.renderChildren = function(a) {
          var b = this.parent.style("font-family").getDefinition();
          if (null == b)"" != a.fillStyle && a.fillText(f.compressSpaces(this.getText()), this.x, this.y), "" != a.strokeStyle && a.strokeText(f.compressSpaces(this.getText()), this.x, this.y);
          else {
            var c = this.parent.style("font-size").numValueOrDefault(f.Font.Parse(f.ctx.font).fontSize),
              d = this.parent.style("font-style").valueOrDefault(f.Font.Parse(f.ctx.font).fontStyle),
              e = this.getText();
            b.isRTL && (e = e.split("").reverse().join(""));
            for (var g = f.ToNumberArray(this.parent.attribute("dx").value), h = 0; h < e.length; h++) {
              var i = this.getGlyph(b, e, h),
                j = c / b.fontFace.unitsPerEm;
              a.translate(this.x, this.y), a.scale(j, -j);
              var k = a.lineWidth;
              a.lineWidth = a.lineWidth * b.fontFace.unitsPerEm / c, "italic" == d && a.transform(1, 0, .4, 1, 0, 0), i.render(a), "italic" == d && a.transform(1, 0, -.4, 1, 0, 0), a.lineWidth = k, a.scale(1 / j, -1 / j), a.translate(-this.x, -this.y), this.x += c * (i.horizAdvX || b.horizAdvX) / b.fontFace.unitsPerEm, "undefined" == typeof g[h] || isNaN(g[h]) || (this.x += g[h])
            }
          }
        }, this.getText = function() {}, this.measureTextRecursive = function(a) {
          for (var b = this.measureText(a), c = 0; c < this.children.length; c++) b += this.children[c].measureTextRecursive(a);
          return b
        }, this.measureText = function(a) {
          var b = this.parent.style("font-family").getDefinition();
          if (null != b) {
            var c = this.parent.style("font-size").numValueOrDefault(f.Font.Parse(f.ctx.font).fontSize),
              d = 0,
              e = this.getText();
            b.isRTL && (e = e.split("").reverse().join(""));
            for (var g = f.ToNumberArray(this.parent.attribute("dx").value), h = 0; h < e.length; h++) {
              var i = this.getGlyph(b, e, h);
              d += (i.horizAdvX || b.horizAdvX) * c / b.fontFace.unitsPerEm, "undefined" == typeof g[h] || isNaN(g[h]) || (d += g[h])
            }
            return d
          }
          var j = f.compressSpaces(this.getText());
          if (!a.measureText) return 10 * j.length;
          a.save(), this.setContext(a);
          var k = a.measureText(j).width;
          return a.restore(), k
        }
      }, f.Element.TextElementBase.prototype = new f.Element.RenderedElementBase, f.Element.tspan = function(a) {
        this.captureTextNodes = !0, this.base = f.Element.TextElementBase, this.base(a), this.text = f.compressSpaces(a.value || a.text || a.textContent || ""), this.getText = function() {
          return this.children.length > 0 ? "" : this.text
        }
      }, f.Element.tspan.prototype = new f.Element.TextElementBase, f.Element.tref = function(a) {
        this.base = f.Element.TextElementBase, this.base(a), this.getText = function() {
          var a = this.getHrefAttribute().getDefinition();
          if (null != a) return a.children[0].getText()
        }
      }, f.Element.tref.prototype = new f.Element.TextElementBase, f.Element.a = function(a) {
        this.base = f.Element.TextElementBase, this.base(a), this.hasText = a.childNodes.length > 0;
        for (var b = 0; b < a.childNodes.length; b++) 3 != a.childNodes[b].nodeType && (this.hasText = !1);
        this.text = this.hasText ? a.childNodes[0].value : "", this.getText = function() {
          return this.text
        }, this.baseRenderChildren = this.renderChildren, this.renderChildren = function(a) {
          if (this.hasText) {
            this.baseRenderChildren(a);
            var b = new f.Property("fontSize", f.Font.Parse(f.ctx.font).fontSize);
            f.Mouse.checkBoundingBox(this, new f.BoundingBox(this.x, this.y - b.toPixels("y"), this.x + this.measureText(a), this.y))
          } else if (this.children.length > 0) {
            var c = new f.Element.g;
            c.children = this.children, c.parent = this, c.render(a)
          }
        }, this.onclick = function() {
          window.open(this.getHrefAttribute().value)
        }, this.onmousemove = function() {
          f.ctx.canvas.style.cursor = "pointer"
        }
      }, f.Element.a.prototype = new f.Element.TextElementBase, f.Element.image = function(a) {
        this.base = f.Element.RenderedElementBase, this.base(a);
        var b = this.getHrefAttribute().value;
        if ("" != b) {
          var c = b.match(/\.svg$/);
          if (f.Images.push(this), this.loaded = !1, c) this.img = f.ajax(b), this.loaded = !0;
          else {
            this.img = document.createElement("img"), 1 == f.opts.useCORS && (this.img.crossOrigin = "Anonymous");
            var d = this;
            this.img.onload = function() {
              d.loaded = !0
            }, this.img.onerror = function() {
              f.log('ERROR: image "' + b + '" not found'), d.loaded = !0
            }, this.img.src = b
          }
          this.renderChildren = function(a) {
            var b = this.attribute("x").toPixels("x"),
              d = this.attribute("y").toPixels("y"),
              e = this.attribute("width").toPixels("x"),
              g = this.attribute("height").toPixels("y");
            0 != e && 0 != g && (a.save(), c ? a.drawSvg(this.img, b, d, e, g) : (a.translate(b, d), f.AspectRatio(a, this.attribute("preserveAspectRatio").value, e, this.img.width, g, this.img.height, 0, 0), a.drawImage(this.img, 0, 0)), a.restore())
          }, this.getBoundingBox = function() {
            var a = this.attribute("x").toPixels("x"),
              b = this.attribute("y").toPixels("y"),
              c = this.attribute("width").toPixels("x"),
              d = this.attribute("height").toPixels("y");
            return new f.BoundingBox(a, b, a + c, b + d)
          }
        }
      }, f.Element.image.prototype = new f.Element.RenderedElementBase, f.Element.g = function(a) {
        this.base = f.Element.RenderedElementBase, this.base(a), this.getBoundingBox = function() {
          for (var a = new f.BoundingBox, b = 0; b < this.children.length; b++) a.addBoundingBox(this.children[b].getBoundingBox());
          return a
        }
      }, f.Element.g.prototype = new f.Element.RenderedElementBase, f.Element.symbol = function(a) {
        this.base = f.Element.RenderedElementBase, this.base(a), this.render = function(a) {}
      }, f.Element.symbol.prototype = new f.Element.RenderedElementBase, f.Element.style = function(a) {
        this.base = f.Element.ElementBase, this.base(a);
        for (var b = "", d = 0; d < a.childNodes.length; d++) b += a.childNodes[d].data;
        b = b.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, ""), b = f.compressSpaces(b);
        for (var e = b.split("}"), d = 0; d < e.length; d++) if ("" != f.trim(e[d])) for (var g = e[d].split("{"), h = g[0].split(","), i = g[1].split(";"), j = 0; j < h.length; j++) {
          var k = f.trim(h[j]);
          if ("" != k) {
            for (var l = f.Styles[k] || {}, m = 0; m < i.length; m++) {
              var n = i[m].indexOf(":"),
                o = i[m].substr(0, n),
                p = i[m].substr(n + 1, i[m].length - n);
              null != o && null != p && (l[f.trim(o)] = new f.Property(f.trim(o), f.trim(p)))
            }
            if (f.Styles[k] = l, f.StylesSpecificity[k] = c(k), "@font-face" == k) for (var q = l["font-family"].value.replace(/"/g, ""), r = l.src.value.split(","), s = 0; s < r.length; s++) if (r[s].indexOf('format("svg")') > 0) for (var t = r[s].indexOf("url"), u = r[s].indexOf(")", t), v = r[s].substr(t + 5, u - t - 6), w = f.parseXml(f.ajax(v)), x = w.getElementsByTagName("font"), y = 0; y < x.length; y++) {
              var z = f.CreateElement(x[y]);
              f.Definitions[q] = z
            }
          }
        }
      }, f.Element.style.prototype = new f.Element.ElementBase, f.Element.use = function(a) {
        this.base = f.Element.RenderedElementBase, this.base(a), this.baseSetContext = this.setContext, this.setContext = function(a) {
          this.baseSetContext(a), this.attribute("x").hasValue() && a.translate(this.attribute("x").toPixels("x"), 0), this.attribute("y").hasValue() && a.translate(0, this.attribute("y").toPixels("y"))
        };
        var b = this.getHrefAttribute().getDefinition();
        this.path = function(a) {
          null != b && b.path(a)
        }, this.getBoundingBox = function() {
          if (null != b) return b.getBoundingBox()
        }, this.renderChildren = function(a) {
          if (null != b) {
            var c = b;
            "symbol" == b.type && (c = new f.Element.svg, c.type = "svg", c.attributes.viewBox = new f.Property("viewBox", b.attribute("viewBox").value), c.attributes.preserveAspectRatio = new f.Property("preserveAspectRatio", b.attribute("preserveAspectRatio").value), c.attributes.overflow = new f.Property("overflow", b.attribute("overflow").value), c.children = b.children), "svg" == c.type && (this.attribute("width").hasValue() && (c.attributes.width = new f.Property("width", this.attribute("width").value)), this.attribute("height").hasValue() && (c.attributes.height = new f.Property("height", this.attribute("height").value)));
            var d = c.parent;
            c.parent = null, c.render(a), c.parent = d
          }
        }
      }, f.Element.use.prototype = new f.Element.RenderedElementBase, f.Element.mask = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.apply = function(a, b) {
          var c = this.attribute("x").toPixels("x"),
            d = this.attribute("y").toPixels("y"),
            e = this.attribute("width").toPixels("x"),
            g = this.attribute("height").toPixels("y");
          if (0 == e && 0 == g) {
            for (var h = new f.BoundingBox, i = 0; i < this.children.length; i++) h.addBoundingBox(this.children[i].getBoundingBox());
            var c = Math.floor(h.x1),
              d = Math.floor(h.y1),
              e = Math.floor(h.width()),
              g = Math.floor(h.height())
          }
          var j = b.attribute("mask").value;
          b.attribute("mask").value = "";
          var k = document.createElement("canvas");
          k.width = c + e, k.height = d + g;
          var l = k.getContext("2d");
          this.renderChildren(l);
          var m = document.createElement("canvas");
          m.width = c + e, m.height = d + g;
          var n = m.getContext("2d");
          b.render(n), n.globalCompositeOperation = "destination-in", n.fillStyle = l.createPattern(k, "no-repeat"), n.fillRect(0, 0, c + e, d + g), a.fillStyle = n.createPattern(m, "no-repeat"), a.fillRect(0, 0, c + e, d + g), b.attribute("mask").value = j
        }, this.render = function(a) {}
      }, f.Element.mask.prototype = new f.Element.ElementBase, f.Element.clipPath = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.apply = function(a) {
          var b = CanvasRenderingContext2D.prototype.beginPath;
          CanvasRenderingContext2D.prototype.beginPath = function() {};
          var c = CanvasRenderingContext2D.prototype.closePath;
          CanvasRenderingContext2D.prototype.closePath = function() {}, b.call(a);
          for (var d = 0; d < this.children.length; d++) {
            var e = this.children[d];
            if ("undefined" != typeof e.path) {
              var g = null;
              e.style("transform", !1, !0).hasValue() && (g = new f.Transform(e.style("transform", !1, !0).value), g.apply(a)), e.path(a), CanvasRenderingContext2D.prototype.closePath = c, g && g.unapply(a)
            }
          }
          c.call(a), a.clip(), CanvasRenderingContext2D.prototype.beginPath = b, CanvasRenderingContext2D.prototype.closePath = c
        }, this.render = function(a) {}
      }, f.Element.clipPath.prototype = new f.Element.ElementBase, f.Element.filter = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.apply = function(a, b) {
          var c = b.getBoundingBox(),
            d = Math.floor(c.x1),
            e = Math.floor(c.y1),
            f = Math.floor(c.width()),
            g = Math.floor(c.height()),
            h = b.style("filter").value;
          b.style("filter").value = "";
          for (var i = 0, j = 0, k = 0; k < this.children.length; k++) {
            var l = this.children[k].extraFilterDistance || 0;
            i = Math.max(i, l), j = Math.max(j, l)
          }
          var m = document.createElement("canvas");
          m.width = f + 2 * i, m.height = g + 2 * j;
          var n = m.getContext("2d");
          n.translate(-d + i, -e + j), b.render(n);
          for (var k = 0; k < this.children.length; k++)"function" == typeof this.children[k].apply && this.children[k].apply(n, 0, 0, f + 2 * i, g + 2 * j);
          a.drawImage(m, 0, 0, f + 2 * i, g + 2 * j, d - i, e - j, f + 2 * i, g + 2 * j), b.style("filter", !0).value = h
        }, this.render = function(a) {}
      }, f.Element.filter.prototype = new f.Element.ElementBase, f.Element.feDropShadow = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.addStylesFromStyleDefinition(), this.apply = function(a, b, c, d, e) {}
      }, f.Element.feDropShadow.prototype = new f.Element.ElementBase, f.Element.feMorphology = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.apply = function(a, b, c, d, e) {}
      }, f.Element.feMorphology.prototype = new f.Element.ElementBase, f.Element.feComposite = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.apply = function(a, b, c, d, e) {}
      }, f.Element.feComposite.prototype = new f.Element.ElementBase, f.Element.feColorMatrix = function(a) {
        function b(a, b, c, d, e, f) {
          return a[c * d * 4 + 4 * b + f]
        }
        function c(a, b, c, d, e, f, g) {
          a[c * d * 4 + 4 * b + f] = g
        }
        function d(a, b) {
          var c = e[a];
          return c * (c < 0 ? b - 255 : b)
        }
        this.base = f.Element.ElementBase, this.base(a);
        var e = f.ToNumberArray(this.attribute("values").value);
        switch (this.attribute("type").valueOrDefault("matrix")) {
          case "saturate":
            var g = e[0];
            e = [.213 + .787 * g, .715 - .715 * g, .072 - .072 * g, 0, 0, .213 - .213 * g, .715 + .285 * g, .072 - .072 * g, 0, 0, .213 - .213 * g, .715 - .715 * g, .072 + .928 * g, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
            break;
          case "hueRotate":
            var h = e[0] * Math.PI / 180,
              i = function(a, b, c) {
                return a + Math.cos(h) * b + Math.sin(h) * c
              };
            e = [i(.213, .787, -.213), i(.715, -.715, -.715), i(.072, -.072, .928), 0, 0, i(.213, -.213, .143), i(.715, .285, .14), i(.072, -.072, -.283), 0, 0, i(.213, -.213, -.787), i(.715, -.715, .715), i(.072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
            break;
          case "luminanceToAlpha":
            e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1]
        }
        this.apply = function(a, e, f, g, h) {
          for (var i = a.getImageData(0, 0, g, h), f = 0; f < h; f++) for (var e = 0; e < g; e++) {
            var j = b(i.data, e, f, g, h, 0),
              k = b(i.data, e, f, g, h, 1),
              l = b(i.data, e, f, g, h, 2),
              m = b(i.data, e, f, g, h, 3);
            c(i.data, e, f, g, h, 0, d(0, j) + d(1, k) + d(2, l) + d(3, m) + d(4, 1)), c(i.data, e, f, g, h, 1, d(5, j) + d(6, k) + d(7, l) + d(8, m) + d(9, 1)), c(i.data, e, f, g, h, 2, d(10, j) + d(11, k) + d(12, l) + d(13, m) + d(14, 1)), c(i.data, e, f, g, h, 3, d(15, j) + d(16, k) + d(17, l) + d(18, m) + d(19, 1))
          }
          a.clearRect(0, 0, g, h), a.putImageData(i, 0, 0)
        }
      }, f.Element.feColorMatrix.prototype = new f.Element.ElementBase, f.Element.feGaussianBlur = function(a) {
        this.base = f.Element.ElementBase, this.base(a), this.blurRadius = Math.floor(this.attribute("stdDeviation").numValue()), this.extraFilterDistance = this.blurRadius, this.apply = function(a, c, d, e, g) {
          return "undefined" == typeof b.canvasRGBA ? void f.log("ERROR: StackBlur.js must be included for blur to work") : (a.canvas.id = f.UniqueId(), a.canvas.style.display = "none", document.body.appendChild(a.canvas), b.canvasRGBA(a.canvas.id, c, d, e, g, this.blurRadius), void document.body.removeChild(a.canvas))
        }
      }, f.Element.feGaussianBlur.prototype = new f.Element.ElementBase, f.Element.title = function(a) {}, f.Element.title.prototype = new f.Element.ElementBase, f.Element.desc = function(a) {}, f.Element.desc.prototype = new f.Element.ElementBase, f.Element.MISSING = function(a) {
        f.log("ERROR: Element '" + a.nodeName + "' not yet implemented.")
      }, f.Element.MISSING.prototype = new f.Element.ElementBase, f.CreateElement = function(a) {
        var b = a.nodeName.replace(/^[^:]+:/, "");
        b = b.replace(/\-/g, "");
        var c = null;
        return c = "undefined" != typeof f.Element[b] ? new f.Element[b](a) : new f.Element.MISSING(a), c.type = a.nodeName, c
      }, f.load = function(a, b) {
        f.loadXml(a, f.ajax(b))
      }, f.loadXml = function(a, b) {
        f.loadXmlDoc(a, f.parseXml(b))
      }, f.loadXmlDoc = function(a, b) {
        f.init(a);
        var c = function(b) {
          for (var c = a.canvas; c;) b.x -= c.offsetLeft, b.y -= c.offsetTop, c = c.offsetParent;
          return window.scrollX && (b.x += window.scrollX), window.scrollY && (b.y += window.scrollY), b
        };
        1 != f.opts.ignoreMouse && (a.canvas.onclick = function(a) {
          var b = c(new f.Point(null != a ? a.clientX : event.clientX, null != a ? a.clientY : event.clientY));
          f.Mouse.onclick(b.x, b.y)
        }, a.canvas.onmousemove = function(a) {
          var b = c(new f.Point(null != a ? a.clientX : event.clientX, null != a ? a.clientY : event.clientY));
          f.Mouse.onmousemove(b.x, b.y)
        });
        var d = f.CreateElement(b.documentElement);
        d.root = !0, d.addStylesFromStyleDefinition();
        var e = !0,
          g = function() {
            f.ViewPort.Clear(), a.canvas.parentNode && f.ViewPort.SetCurrent(a.canvas.parentNode.clientWidth, a.canvas.parentNode.clientHeight), 1 != f.opts.ignoreDimensions && (d.style("width").hasValue() && (a.canvas.width = d.style("width").toPixels("x"), a.canvas.style.width = a.canvas.width + "px"), d.style("height").hasValue() && (a.canvas.height = d.style("height").toPixels("y"), a.canvas.style.height = a.canvas.height + "px"));
            var c = a.canvas.clientWidth || a.canvas.width,
              g = a.canvas.clientHeight || a.canvas.height;
            if (1 == f.opts.ignoreDimensions && d.style("width").hasValue() && d.style("height").hasValue() && (c = d.style("width").toPixels("x"), g = d.style("height").toPixels("y")), f.ViewPort.SetCurrent(c, g), null != f.opts.offsetX && (d.attribute("x", !0).value = f.opts.offsetX), null != f.opts.offsetY && (d.attribute("y", !0).value = f.opts.offsetY), null != f.opts.scaleWidth || null != f.opts.scaleHeight) {
              var h = null,
                i = null,
                j = f.ToNumberArray(d.attribute("viewBox").value);
              null != f.opts.scaleWidth && (d.attribute("width").hasValue() ? h = d.attribute("width").toPixels("x") / f.opts.scaleWidth : isNaN(j[2]) || (h = j[2] / f.opts.scaleWidth)), null != f.opts.scaleHeight && (d.attribute("height").hasValue() ? i = d.attribute("height").toPixels("y") / f.opts.scaleHeight : isNaN(j[3]) || (i = j[3] / f.opts.scaleHeight)), null == h && (h = i), null == i && (i = h), d.attribute("width", !0).value = f.opts.scaleWidth, d.attribute("height", !0).value = f.opts.scaleHeight, d.style("transform", !0, !0).value += " scale(" + 1 / h + "," + 1 / i + ")"
            }
            1 != f.opts.ignoreClear && a.clearRect(0, 0, c, g), d.render(a), e && (e = !1, "function" == typeof f.opts.renderCallback && f.opts.renderCallback(b))
          },
          h = !0;
        f.ImagesLoaded() && (h = !1, g()), f.intervalID = setInterval(function() {
          var a = !1;
          if (h && f.ImagesLoaded() && (h = !1, a = !0), 1 != f.opts.ignoreMouse && (a |= f.Mouse.hasEvents()), 1 != f.opts.ignoreAnimation) for (var b = 0; b < f.Animations.length; b++) a |= f.Animations[b].update(1e3 / f.FRAMERATE);
          "function" == typeof f.opts.forceRedraw && 1 == f.opts.forceRedraw() && (a = !0), a && (g(), f.Mouse.runEvents())
        }, 1e3 / f.FRAMERATE)
      }, f.stop = function() {
        f.intervalID && clearInterval(f.intervalID)
      }, f.Mouse = new function() {
        this.events = [], this.hasEvents = function() {
          return 0 != this.events.length
        }, this.onclick = function(a, b) {
          this.events.push({
            type: "onclick",
            x: a,
            y: b,
            run: function(a) {
              a.onclick && a.onclick()
            }
          })
        }, this.onmousemove = function(a, b) {
          this.events.push({
            type: "onmousemove",
            x: a,
            y: b,
            run: function(a) {
              a.onmousemove && a.onmousemove()
            }
          })
        }, this.eventElements = [], this.checkPath = function(a, b) {
          for (var c = 0; c < this.events.length; c++) {
            var d = this.events[c];
            b.isPointInPath && b.isPointInPath(d.x, d.y) && (this.eventElements[c] = a)
          }
        }, this.checkBoundingBox = function(a, b) {
          for (var c = 0; c < this.events.length; c++) {
            var d = this.events[c];
            b.isPointInBox(d.x, d.y) && (this.eventElements[c] = a)
          }
        }, this.runEvents = function() {
          f.ctx.canvas.style.cursor = "";
          for (var a = 0; a < this.events.length; a++) for (var b = this.events[a], c = this.eventElements[a]; c;) b.run(c), c = c.parent;
          this.events = [], this.eventElements = []
        }
      }, f
    }
    if ("undefined" != typeof Element) {
      var e, f = function(a, b, c) {
        if (null != a || null != b || null != c) {
          "string" == typeof a && (a = document.getElementById(a)), null != a.svg && a.svg.stop();
          var e = d(c || {});
          1 == a.childNodes.length && "OBJECT" == a.childNodes[0].nodeName || (a.svg = e);
          var g = a.getContext("2d");
          "undefined" != typeof b.documentElement ? e.loadXmlDoc(g, b) : "<" == b.substr(0, 1) ? e.loadXml(g, b) : e.load(g, b)
        } else for (var h = document.querySelectorAll("svg"), i = 0; i < h.length; i++) {
          var j = h[i],
            k = document.createElement("canvas");
          k.width = j.clientWidth, k.height = j.clientHeight, j.parentNode.insertBefore(k, j), j.parentNode.removeChild(j);
          var l = document.createElement("div");
          l.appendChild(j), f(k, l.innerHTML)
        }
      };
      "undefined" != typeof Element.prototype.matches ? e = function(a, b) {
        return a.matches(b)
      } : "undefined" != typeof Element.prototype.webkitMatchesSelector ? e = function(a, b) {
        return a.webkitMatchesSelector(b)
      } : "undefined" != typeof Element.prototype.mozMatchesSelector ? e = function(a, b) {
        return a.mozMatchesSelector(b)
      } : "undefined" != typeof Element.prototype.msMatchesSelector ? e = function(a, b) {
        return a.msMatchesSelector(b)
      } : "undefined" != typeof Element.prototype.oMatchesSelector ? e = function(a, b) {
        return a.oMatchesSelector(b)
      } : ("function" != typeof jQuery && "function" != typeof Zepto || (e = function(a, b) {
        return $(a).is(b)
      }), "undefined" == typeof e && (e = Sizzle.matchesSelector));
      var g = /(\[[^\]]+\])/g,
        h = /(#[^\s\+>~\.\[:]+)/g,
        j = /(\.[^\s\+>~\.\[:]+)/g,
        k = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
        l = /(:[\w-]+\([^\)]*\))/gi,
        m = /(:[^\s\+>~\.\[:]+)/g,
        n = /([^\s\+>~\.\[:]+)/g;
      return "undefined" != typeof CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.drawSvg = function(a, b, c, d, e, g) {
        var h = {
          ignoreMouse: !0,
          ignoreAnimation: !0,
          ignoreDimensions: !0,
          ignoreClear: !0,
          offsetX: b,
          offsetY: c,
          scaleWidth: d,
          scaleHeight: e
        };
        for (var i in g) g.hasOwnProperty(i) && (h[i] = g[i]);
        f(this.canvas, a, h)
      }), f
    }
  }), function(a) {
    "use strict";

    function b(a, b) {
      var c = document.createElement("canvas");
      c.width = a, c.height = b;
      var d = a - 1,
        e = b - 1,
        f = c.getContext("2d");
      try {
        f.fillStyle = "rgb(1,1,1)", f.fillRect(d, e, 1, 1);
        var g = f.getImageData(d, e, 1, 1).data;
        if (1 !== g[0] || 1 !== g[1] || 1 !== g[2]) return !1
      } catch (h) {
        return !1
      }
      return !0
    }
    function c(a, b) {
      var c = f(b),
        d = g.rect({
          x: -c.left,
          y: -c.top,
          width: c.left + c.right,
          height: c.top + c.bottom
        });
      if (b.width && b.height) {
        var e = a.width + c.left + c.right,
          h = a.height + c.top + c.bottom;
        d.scale(e / b.width, h / b.height)
      }
      return g.Rect(a).moveAndExpand(d)
    }
    function d(a) {
      var b = 1;
      if (void 0 !== a && (b = parseFloat(a), !Number.isFinite(b) || 0 === b)) throw new Error("dia.Paper: invalid raster size (" + a + ")");
      return b
    }
    function e(a, b) {
      return {
        width: Math.max(Math.round(a.width * b), 1),
        height: Math.max(Math.round(a.height * b), 1)
      }
    }
    function f(b) {
      var c = a.util.normalizeSides(b.padding);
      return b.width && b.height && (c.left + c.right >= b.width && (c.left = c.right = 0), c.top + c.bottom >= b.height && (c.top = c.bottom = 0)), c
    }
    function h(a) {
      return a.replace(/\<image[^>]*>/g, function(a) {
        var b = a.match(/href="([^"]*)"/),
          c = b && b[1],
          d = "data:image/svg+xml";
        if (c && c.substr(0, d.length) === d) {
          var e = atob(c.substr(c.indexOf(",") + 1));
          return e.substr(e.indexOf("<svg"))
        }
        return a
      })
    }
    a.dia.Paper.prototype.toDataURL = function(f, g) {
      if ("function" != typeof this.toSVG) throw new Error("The joint.format.svg.js plugin must be loaded.");
      g = g || {};
      var i = g.area || this.paperToLocalRect(this.getContentBBox()),
        j = c(i, g),
        k = a.util.isNumber(g.width) && a.util.isNumber(g.height) ? g : j,
        l = e(k, d(g.size));
      if (!b(l.width, l.height)) throw new Error("dia.Paper: raster size exceeded.");
      var m, n = new Image;
      n.onload = function() {
        function b() {
          j = document.createElement("canvas"), j.width = l.width, j.height = l.height, i = j.getContext("2d"), i.fillStyle = g.backgroundColor || "white", i.fillRect(0, 0, l.width, l.height)
        }
        function c() {
          e = j.toDataURL(g.type, g.quality), f(e), d()
        }
        function d() {
          j.svg && a.util.isFunction(j.svg.stop) && setTimeout(j.svg.stop, 1)
        }
        var e, i, j;
        b();
        try {
          i.drawImage(n, 0, 0, l.width, l.height), c()
        } catch (k) {
          if ("undefined" == typeof canvg) return void console.error("Canvas tainted. Canvg library required.");
          b();
          var o = {
            ignoreDimensions: !0,
            ignoreClear: !0,
            ignoreMouse: !0,
            ignoreAnimation: !0,
            offsetX: 0,
            offsetY: 0,
            useCORS: !0
          };
          canvg(j, m, a.util.assign(o, {
            forceRedraw: function() {
              return !this.called && (this.called = !0, !0)
            }.bind({
              called: !1
            }),
            renderCallback: function() {
              try {
                c()
              } catch (e) {
                d(), m = h(m), b(), canvg(j, m, a.util.assign(o, {
                  renderCallback: c
                }))
              }
            }
          }))
        }
      }, this.toSVG(function(a) {
        m = a, n.src = "data:image/svg+xml," + encodeURIComponent(a)
      }, {
        convertImagesToDataUris: !0,
        area: j,
        useComputedStyles: g.useComputedStyles,
        stylesheet: g.stylesheet,
        preserveDimensions: {
          width: l.width,
          height: l.height
        }
      })
    }, a.dia.Paper.prototype.toPNG = function(a, b) {
      b = b || {}, b.type = "image/png", this.toDataURL(a, b)
    }, a.dia.Paper.prototype.toJPEG = function(a, b) {
      b = b || {}, b.type = "image/jpeg", this.toDataURL(a, b)
    }, a.dia.Paper.prototype.openAsPNG = function(b) {
      var c = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes",
        d = a.util.uniqueId("png_output");
      this.toPNG(function(a) {
        var b = window.open("", d, c);
        b.document.write('<img src="' + a + '"/>')
      }, a.util.assign({
        padding: 10
      }, b))
    }
  }(joint);
  !
    function(a, b, c) {
      function d(d) {
        d = d || {}, this.trigger("beforeprint", d), this.$printArea = a("<div/>").addClass("printarea"), d.size && this.$printArea.addClass("printarea-size-" + d.size);
        var e = this.$el.clone().appendTo(this.$printArea),
          f = c.util.normalizeSides(d.padding),
          g = this.getContentBBox().moveAndExpand({
            x: -f.left,
            y: -f.top,
            width: f.left + f.right,
            height: f.top + f.bottom
          });
        b(e.find("svg")[0]).attr({
          width: "100%",
          height: "100%",
          viewBox: [g.x, g.y, g.width, g.height].join(" ")
        }), this.$detachedChildren = this.$el.children().detach(), this.$printArea.prependTo(document.body)
      }
      function e(a) {
        a = a || {}, this.$printArea.remove(), this.$el.append(this.$detachedChildren), this.$detachedChildren = null, this.$printArea = null, this.trigger("afterprint", a)
      }
      c.dia.Paper.prototype.print = function(b) {
        b = b || {}, c.util.defaults(b, {
          size: "a4",
          padding: 5
        });
        var f = d.bind(this, b),
          g = e.bind(this, b),
          h = function() {
            this.called || (this.called = !0, g(), a(window).off("afterprint", h))
          }.bind({
            called: !1
          });
        a(window).one("afterprint", h), setTimeout(h, 200), f(), window.print()
      }
    }($, V, joint);
  if ("object" == typeof exports) var WebSocketServer = require("ws").Server,
    WebSocket = require("ws"),
    url = require("url");
  WebSocket = WebSocket || "undefined" != typeof window && window.WebSocket, joint.com = joint.com || {}, joint.com.Channel = function(a) {
    if (this.options = a, !this.options || !this.options.graph) throw new Error("Channel: missing a graph.");
    this.options.ttl = this.options.ttl || 60, this.options.healthCheckInterval = this.options.healthCheckInterval || 36e5, this.options.reconnectInterval = this.options.reconnectInterval || 1e4, this.options.serverShouldSendGraph = void 0 === this.options.serverShouldSendGraph || this.options.serverShouldSendGraph, this._isClient = !! this.options.url, this._clients = [], this.messageQueue = [], this.id = this.options.id || (this._isClient ? "c_" : "s_") + joint.util.uuid(), this.state = {}, this.state[this.id] = 0, this.sites = {}, this.sites[this.id] = {
      socket: void 0,
      outgoing: [],
      ttl: this.options.ttl
    }, this.initialize()
  }, joint.util.assign(joint.com.Channel.prototype, Backbone.Events), joint.com.Channel.prototype.initialize = function() {
    this.options.graph.on("all", this.onGraphChange.bind(this)), this._isClient ? this.connectClient() : this.options.port && (this.server = new WebSocketServer({
        port: this.options.port
      }), this.server.on("connection", this.onConnection.bind(this))), this._isClient || (this._healthCheckInterval = setInterval(this.healthCheck.bind(this), this.options.healthCheckInterval))
  }, joint.com.Channel.prototype.connectClient = function() {
    var a = this.options.url + "/?channelId=" + this.id + "&state=" + JSON.stringify(this.state) + (this.options.query ? "&query=" + JSON.stringify(this.options.query) : "");
    this.options.debugLevel > 0 && this.log("connectClient", a);
    var b = new WebSocket(a);
    b.onopen = this.onConnection.bind(this, b), b.onclose = this.onClose.bind(this, b)
  }, joint.com.Channel.prototype.close = function() {
    this._reconnectTimeout && clearTimeout(this._reconnectTimeout), this._healthCheckInterval && clearInterval(this._healthCheckInterval), this._closed = !0, joint.util.forIn(this.sites, function(a) {
      a.socket && a.socket.close()
    }), this.server && this.server.close()
  }, joint.com.Channel.prototype.healthCheck = function() {
    if (this.options.debugLevel > 0) {
      var a = Object.keys(this.sites).reduce(function(a, b) {
        return a[b] = this[b].ttl, a
      }.bind(this.sites), {});
      this.log("healthCheck", a)
    }
    joint.util.forIn(this.sites, function(a, b) {
      b !== this.id && (a.socket && 1 === a.socket.readyState ? a.ttl = this.options.ttl : a.ttl -= 1, a.ttl <= 0 && (this.sites = joint.util.omit(this.sites, b), this.state = joint.util.omit(this.state, b)))
    }.bind(this))
  }, joint.com.Channel.prototype.onConnection = function(a) {
    if (this._clients.push(a), this.trigger("open", a), this._isClient) this.sites[this.id].socket = a, a.onmessage = function(b) {
      this.onMessage(a, b.data)
    }.bind(this);
    else {
      var b = url.parse(a.upgradeReq.url, !0),
        c = b.query.channelId;
      if (this.sites[c]) this.sites[c].socket = a;
      else if (this.debugLevel > 1 && this.log("new_site", c), this.sites[c] = {
          socket: a,
          outgoing: [],
          ttl: this.options.ttl
        }, this.state[c] = 0, this.options.serverShouldSendGraph) {
        var d = {
          channelId: this.id,
          state: JSON.parse(JSON.stringify(this.state)),
          action: "graph",
          graph: this.options.graph.toJSON()
        };
        this.messageQueue.push({
          type: "op",
          data: d,
          source: this.id,
          target: [c]
        }), this.send()
      }
      a.on("message", this.onMessage.bind(this, a)), a.on("close", this.onClose.bind(this, a))
    }
  }, joint.com.Channel.prototype.onClose = function(a) {
    var b = this._clients.indexOf(a);
    b !== -1 && this._clients.splice(b, 1), this._isClient && !this._closed && (this._reconnectTimeout && clearTimeout(this._reconnectTimeout), this._reconnectTimeout = setTimeout(this.connectClient.bind(this), this.options.reconnectInterval)), this.trigger("close", a)
  }, joint.com.Channel.prototype.onMessage = function(a, b) {
    this.trigger("message:received", b), this.options.debugLevel > 1 && this.log("message", b);
    try {
      b = JSON.parse(b)
    } catch (c) {
      return console.error("Channel: message parsing failed.", c)
    }
    if ("notification" == b.type) return this.trigger(b.data.event, b.data.data), this.sendNotification(b);
    var d, e, f = b.data;
    this._isClient ? (d = this.sites[this.id], f = this.receive(d, this.id, f)) : (e = this.sites[f.channelId], f = this.receive(e, f.channelId, f), d = this.sites[this.id], f = this.receive(d, this.id, f)), "graph" === f.action ? this.state[f.channelId] = f.state[f.channelId] : this.state[f.channelId] = (this.state[f.channelId] || 0) + 1, this.options.debugLevel > 1 && this.log("new state", this.state), this.execute(f), joint.util.forIn(this.sites, function(a, b) {
      b !== this.id && b !== f.channelId && this.receive(a, b, f)
    }.bind(this)), this._isClient || (b.op = f, this.messageQueue.push(b), this.broadcast(b)), this.trigger("message:processed", b)
  }, joint.com.Channel.prototype.receive = function(a, b, c) {
    if (!a) return c;
    this.options.debugLevel > 1 && this.log("receive", b, c), this.options.debugLevel > 1 && this.log("outgoing", a.outgoing), a.outgoing = a.outgoing.filter(function(a) {
      return a.state[a.channelId] >= (c.state[a.channelId] || 0)
    }), this.options.debugLevel > 1 && this.log("outgoing.length", a.outgoing.length);
    for (var d = 0; d < a.outgoing.length; d++) {
      var e = a.outgoing[d],
        f = this.transform(c, e);
      c = f[0], a.outgoing[d] = f[1]
    }
    return c
  }, joint.com.Channel.prototype.transform = function(a, b) {
    return this.options.debugLevel > 1 && this.log("transform", a, b), "change:target" === a.action && "remove" === b.action && a.cell.target.id === b.cell.id && (a.cell.target = {
      x: 0,
      y: 0
    }), "change:source" === a.action && "remove" === b.action && a.cell.source.id === b.cell.id && (a.cell.source = {
      x: 0,
      y: 0
    }), [a, b]
  }, joint.com.Channel.prototype.execute = function(a) {
    var b;
    switch (a.action) {
      case "add":
        this.options.graph.addCell(a.cell, {
          remote: !0
        });
        break;
      case "remove":
        b = this.options.graph.getCell(a.cell.id), b && b.remove({
          remote: !0,
          disconnectLinks: !0
        });
        break;
      case "graph":
        this.options.graph.fromJSON(a.graph);
        break;
      default:
        var c = a.action.substr("change:".length);
        b = this.options.graph.getCell(a.cell.id), b && b.set(c, a.cell[c], {
          remote: !0
        })
    }
  }, joint.com.Channel.prototype.broadcast = function(a) {
    this._isClient ? a.target = Object.keys(this.sites) : a.target = Object.keys(joint.util.omit(this.sites, this.id, a.source)), this.send()
  }, joint.com.Channel.prototype.send = function() {
    if (!this._paused) {
      for (var a = [], b = 0; b < this.messageQueue.length; b++) {
        var c = this.messageQueue[b];
        this.sendMessage(c) && a.push(b)
      }
      a.forEach(function(a) {
        this.messageQueue.splice(a, 1)
      }, this)
    }
  }, joint.com.Channel.prototype.sendMessage = function(a) {
    this.debugLevel > 1 && this.log("sendMessage", a);
    var b = [];
    return a.target.forEach(function(c, d) {
      var e = this.sites[c];
      return e ? void(e.socket && 1 === e.socket.readyState && (this.debugLevel > 1 && this.log("sendMessage", c, a), e.socket.send(JSON.stringify(a)), b.push(d))) : b.push(d)
    }, this), b.forEach(function(b) {
      a.target.splice(b, 1)
    }), !a.target.length
  }, joint.com.Channel.prototype.log = function(a, b) {
    var c = "Channel [" + this.id + "] " + a.toUpperCase() + ": ";
    console.log.apply(console, [c].concat(Array.prototype.slice.call(arguments, 1)))
  }, joint.com.Channel.prototype.pause = function() {
    this._paused = !0
  }, joint.com.Channel.prototype.unpause = function() {
    this._paused = !1, this.send()
  }, joint.com.Channel.prototype.notify = function(a, b) {
    var c = {
      type: "notification",
      source: this.id,
      data: {
        event: a,
        data: b
      }
    };
    this.sendNotification(c)
  }, joint.com.Channel.prototype.sendNotification = function(a) {
    this._isClient ? a.target = Object.keys(this.sites) : a.target = Object.keys(joint.util.omit(this.sites, this.id, a.source)), this.sendMessage(a)
  }, joint.com.Channel.prototype.onGraphChange = function(a, b, c, d) {
    if (!d || !d.remote) {
      var e = "add" === a || "remove" === a || "change:" === a.substr(0, "change:".length);
      if (e) {
        var f = {
            channelId: this.id,
            state: JSON.parse(JSON.stringify(this.state)),
            action: a,
            cell: b.toJSON()
          },
          g = {
            type: "op",
            data: f,
            source: this.id
          };
        this.options.debugLevel > 1 && this.log("generate", g), this.messageQueue.push(g), this.broadcast(g), this.sites[this.id].outgoing.push(f), this.state[this.id]++
      }
    }
  }, joint.com.ChannelHub = function(a) {
    if (this.options = a, !this.options.port) throw new Error("ChannelHub: missing a port.");
    this.initialize()
  }, joint.util.assign(joint.com.ChannelHub.prototype, Backbone.Events), joint.com.ChannelHub.prototype.initialize = function() {
    this.server = new WebSocketServer({
      port: this.options.port
    }), this.server.on("connection", this.onConnection.bind(this))
  }, joint.com.ChannelHub.prototype.onConnection = function(a) {
    var b = url.parse(a.upgradeReq.url, !0),
      c = {
        query: b.query
      };
    if (!this.router) throw new Error("ChannelHub: missing a router.");
    var d = !1,
      e = this.router(c, function(b, c) {
        if (b) throw new Error(b);
        c && !d && (c.onConnection(a), d = !0)
      });
    e instanceof joint.com.Channel && (e.onConnection(a), d = !0)
  }, joint.com.ChannelHub.prototype.route = function(a) {
    this.router = a
  }, joint.com.ChannelHub.prototype.close = function() {
    this.server.close()
  };
  joint.alg = joint.alg || {}, joint.alg.Dijkstra = function(a, b, c) {
    c = c ||
      function(a, b) {
        return 1
      };
    var d = {};
    d[b] = 0;
    var e = {},
      f = new joint.alg.PriorityQueue;
    for (var g in a) g !== b && (d[g] = 1 / 0), f.insert(d[g], g, g);
    for (var h, i, j, k, l = {}; !f.isEmpty();) for (h = f.remove(), l[h] = !0, i = a[h] || [], j = 0; j < i.length; j++) g = i[j], l[g] || (k = d[h] + c(h, g), k < d[g] && (d[g] = k, e[g] = h, f.updatePriority(g, k)));
    return e
  };
  joint.alg = joint.alg || {}, joint.alg.PriorityQueue = function(a) {
    a = a || {}, this.comparator = a.comparator ||
      function(a, b) {
        return a - b
      }, this.index = {}, this.data = a.data || [], this.heapify()
  }, joint.alg.PriorityQueue.prototype.isEmpty = function() {
    return 0 === this.data.length
  }, joint.alg.PriorityQueue.prototype.insert = function(a, b, c) {
    var d = {
      priority: a,
      value: b
    };
    this.data.push(d);
    var e = this.data.length - 1;
    c && (d.id = c, this.index[c] = e), this.bubbleUp(e)
  }, joint.alg.PriorityQueue.prototype.peek = function() {
    return this.data[0] && this.data[0].value
  }, joint.alg.PriorityQueue.prototype.peekPriority = function() {
    return this.data[0] && this.data[0].priority
  }, joint.alg.PriorityQueue.prototype.updatePriority = function(a, b) {
    var c = this.index[a];
    if (null === c || "undefined" == typeof c) throw new Error("Node with id " + a + " was not found in the heap.");
    var d = this.data,
      e = d[c].priority,
      f = this.comparator(b, e);
    f < 0 ? (d[c].priority = b, this.bubbleUp(c)) : f > 0 && (d[c].priority = b, this.bubbleDown(c))
  }, joint.alg.PriorityQueue.prototype.remove = function() {
    var a = this.data,
      b = a[0],
      c = a.pop();
    return this.index[a.length] = null, a.length > 0 && (a[0] = c, c.id && (this.index[c.id] = 0), this.bubbleDown(0)), b && b.value
  }, joint.alg.PriorityQueue.prototype.heapify = function() {
    for (var a = 0; a < this.data.length; a++) this.bubbleUp(a)
  }, joint.alg.PriorityQueue.prototype.bubbleUp = function(a) {
    for (var b, c, d = this.data; a > 0 && (b = a - 1 >>> 1, this.comparator(d[a].priority, d[b].priority) < 0);) c = d[b], d[b] = d[a], d[a].id && (this.index[d[a].id] = b), d[a] = c, d[a].id && (this.index[d[a].id] = a), a = b
  }, joint.alg.PriorityQueue.prototype.bubbleDown = function(a) {
    for (var b = this.data, c = b.length - 1;) {
      var d = (a << 1) + 1,
        e = d + 1,
        f = a;
      if (d <= c && this.comparator(b[d].priority, b[f].priority) < 0 && (f = d), e <= c && this.comparator(b[e].priority, b[f].priority) < 0 && (f = e), f === a) break;
      var g = b[f];
      b[f] = b[a], b[a].id && (this.index[b[a].id] = f), b[a] = g, b[a].id && (this.index[b[a].id] = a), a = f
    }
  };
  joint.storage = joint.storage || {}, joint.storage.Local = {
    prefix: "joint.storage",
    insert: function(a, b, c) {
      var d = b.id || joint.util.uuid(),
        e = this.loadIndex(a);
      e.keys.indexOf(d) === -1 && e.keys.push(d), this.setItem(this.docKey(a, d), b), this.setItem(this.indexKey(a), e), this.callback(c, null, joint.util.assign({}, b, {
        id: d
      }))
    },
    find: function(a, b, c) {
      var d = this.loadIndex(a),
        e = [];
      if (joint.util.isEmpty(b)) d.keys.forEach(function(b) {
        var d = this.getItem(this.docKey(a, b));
        d || this.callback(c, new Error("Storage incosistency. No document found for an ID " + b + " from index.")), e.push(d)
      }, this), this.callback(c, null, e);
      else if (b.id) {
        var f = this.getItem(this.docKey(a, b.id));
        this.callback(c, null, f ? [f] : [])
      } else this.callback(c, null, [])
    },
    remove: function(a, b, c) {
      var d = this.loadIndex(a);
      joint.util.isEmpty(b) ? (d.keys.forEach(function(b) {
        localStorage.removeItem(this.docKey(a, b))
      }, this), localStorage.removeItem(this.indexKey(a)), this.callback(c, null)) : b.id && (d.keys = d.keys.filter(function(a) {
          return a !== b.id
        }), localStorage.removeItem(this.docKey(a, b.id)), this.setItem(this.indexKey(a), d), this.callback(c, null))
    },
    callback: function(a, b, c) {
      a && setTimeout(function() {
        a(b, c)
      }, 1)
    },
    setItem: function(a, b) {
      localStorage.setItem(a, JSON.stringify(b))
    },
    getItem: function(a) {
      var b = localStorage.getItem(a);
      return b ? JSON.parse(b) : b
    },
    loadIndex: function(a) {
      var b = this.getItem(this.indexKey(a)) || {};
      return b.keys = b.keys || [], b
    },
    docKey: function(a, b) {
      return this.prefix + "." + a + ".docs." + b
    },
    indexKey: function(a) {
      return this.prefix + "." + a + ".index"
    }
  };
  joint.g = g;
  joint.V = joint.Vectorizer = V;
  return joint
}));
