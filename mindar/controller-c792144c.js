import { c as DC, O as oC } from "./ui-85e81035.js";
var pB = {};
(function() {
  var x;
  function U(C) {
    var Q = 0;
    return function() {
      return Q < C.length ? { done: !1, value: C[Q++] } : { done: !0 };
    };
  }
  var G = typeof Object.defineProperties == "function" ? Object.defineProperty : function(C, Q, E) {
    return C == Array.prototype || C == Object.prototype || (C[Q] = E.value), C;
  };
  function l(C) {
    C = [typeof globalThis == "object" && globalThis, C, typeof window == "object" && window, typeof self == "object" && self, typeof DC == "object" && DC];
    for (var Q = 0; Q < C.length; ++Q) {
      var E = C[Q];
      if (E && E.Math == Math)
        return E;
    }
    throw Error("Cannot find global object");
  }
  var f = l(this);
  function r(C, Q) {
    if (Q)
      A: {
        var E = f;
        C = C.split(".");
        for (var R = 0; R < C.length - 1; R++) {
          var s = C[R];
          if (!(s in E))
            break A;
          E = E[s];
        }
        C = C[C.length - 1], R = E[C], Q = Q(R), Q != R && Q != null && G(E, C, { configurable: !0, writable: !0, value: Q });
      }
  }
  r("Symbol", function(C) {
    function Q(M) {
      if (this instanceof Q)
        throw new TypeError("Symbol is not a constructor");
      return new E(R + (M || "") + "_" + s++, M);
    }
    function E(M, y) {
      this.g = M, G(this, "description", { configurable: !0, writable: !0, value: y });
    }
    if (C)
      return C;
    E.prototype.toString = function() {
      return this.g;
    };
    var R = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", s = 0;
    return Q;
  }), r("Symbol.iterator", function(C) {
    if (C)
      return C;
    C = Symbol("Symbol.iterator");
    for (var Q = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), E = 0; E < Q.length; E++) {
      var R = f[Q[E]];
      typeof R == "function" && typeof R.prototype[C] != "function" && G(R.prototype, C, { configurable: !0, writable: !0, value: function() {
        return T(U(this));
      } });
    }
    return C;
  });
  function T(C) {
    return C = { next: C }, C[Symbol.iterator] = function() {
      return this;
    }, C;
  }
  function V(C) {
    var Q = typeof Symbol < "u" && Symbol.iterator && C[Symbol.iterator];
    return Q ? Q.call(C) : { next: U(C) };
  }
  function RA(C) {
    if (!(C instanceof Array)) {
      C = V(C);
      for (var Q, E = []; !(Q = C.next()).done; )
        E.push(Q.value);
      C = E;
    }
    return C;
  }
  var W = typeof Object.create == "function" ? Object.create : function(C) {
    function Q() {
    }
    return Q.prototype = C, new Q();
  }, AA;
  if (typeof Object.setPrototypeOf == "function")
    AA = Object.setPrototypeOf;
  else {
    var TA;
    A: {
      var GA = { a: !0 }, lA = {};
      try {
        lA.__proto__ = GA, TA = lA.a;
        break A;
      } catch {
      }
      TA = !1;
    }
    AA = TA ? function(C, Q) {
      if (C.__proto__ = Q, C.__proto__ !== Q)
        throw new TypeError(C + " is not extensible");
      return C;
    } : null;
  }
  var hA = AA;
  function rA(C, Q) {
    if (C.prototype = W(Q.prototype), C.prototype.constructor = C, hA)
      hA(C, Q);
    else
      for (var E in Q)
        if (E != "prototype")
          if (Object.defineProperties) {
            var R = Object.getOwnPropertyDescriptor(Q, E);
            R && Object.defineProperty(C, E, R);
          } else
            C[E] = Q[E];
    C.ea = Q.prototype;
  }
  function dA() {
    this.l = !1, this.i = null, this.h = void 0, this.g = 1, this.s = this.m = 0, this.j = null;
  }
  function _A(C) {
    if (C.l)
      throw new TypeError("Generator is already running");
    C.l = !0;
  }
  dA.prototype.o = function(C) {
    this.h = C;
  };
  function H(C, Q) {
    C.j = { U: Q, V: !0 }, C.g = C.m || C.s;
  }
  dA.prototype.return = function(C) {
    this.j = { return: C }, this.g = this.s;
  };
  function d(C, Q, E) {
    return C.g = E, { value: Q };
  }
  function wA(C) {
    this.g = new dA(), this.h = C;
  }
  function ZI(C, Q) {
    _A(C.g);
    var E = C.g.i;
    return E ? CI(C, "return" in E ? E.return : function(R) {
      return { value: R, done: !0 };
    }, Q, C.g.return) : (C.g.return(Q), LA(C));
  }
  function CI(C, Q, E, R) {
    try {
      var s = Q.call(C.g.i, E);
      if (!(s instanceof Object))
        throw new TypeError("Iterator result " + s + " is not an object");
      if (!s.done)
        return C.g.l = !1, s;
      var M = s.value;
    } catch (y) {
      return C.g.i = null, H(C.g, y), LA(C);
    }
    return C.g.i = null, R.call(C.g, M), LA(C);
  }
  function LA(C) {
    for (; C.g.g; )
      try {
        var Q = C.h(C.g);
        if (Q)
          return C.g.l = !1, { value: Q.value, done: !1 };
      } catch (E) {
        C.g.h = void 0, H(C.g, E);
      }
    if (C.g.l = !1, C.g.j) {
      if (Q = C.g.j, C.g.j = null, Q.V)
        throw Q.U;
      return { value: Q.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function EI(C) {
    this.next = function(Q) {
      return _A(C.g), C.g.i ? Q = CI(C, C.g.i.next, Q, C.g.o) : (C.g.o(Q), Q = LA(C)), Q;
    }, this.throw = function(Q) {
      return _A(C.g), C.g.i ? Q = CI(C, C.g.i.throw, Q, C.g.o) : (H(C.g, Q), Q = LA(C)), Q;
    }, this.return = function(Q) {
      return ZI(C, Q);
    }, this[Symbol.iterator] = function() {
      return this;
    };
  }
  function HA(C, Q) {
    return Q = new EI(new wA(Q)), hA && C.prototype && hA(Q, C.prototype), Q;
  }
  function UA(C, Q) {
    C instanceof String && (C += "");
    var E = 0, R = !1, s = { next: function() {
      if (!R && E < C.length) {
        var M = E++;
        return { value: Q(M, C[M]), done: !1 };
      }
      return R = !0, { done: !0, value: void 0 };
    } };
    return s[Symbol.iterator] = function() {
      return s;
    }, s;
  }
  var nA = typeof Object.assign == "function" ? Object.assign : function(C, Q) {
    for (var E = 1; E < arguments.length; E++) {
      var R = arguments[E];
      if (R)
        for (var s in R)
          Object.prototype.hasOwnProperty.call(R, s) && (C[s] = R[s]);
    }
    return C;
  };
  r("Object.assign", function(C) {
    return C || nA;
  }), r("Promise", function(C) {
    function Q(y) {
      this.h = 0, this.i = void 0, this.g = [], this.o = !1;
      var k = this.j();
      try {
        y(k.resolve, k.reject);
      } catch (c) {
        k.reject(c);
      }
    }
    function E() {
      this.g = null;
    }
    function R(y) {
      return y instanceof Q ? y : new Q(function(k) {
        k(y);
      });
    }
    if (C)
      return C;
    E.prototype.h = function(y) {
      if (this.g == null) {
        this.g = [];
        var k = this;
        this.i(function() {
          k.l();
        });
      }
      this.g.push(y);
    };
    var s = f.setTimeout;
    E.prototype.i = function(y) {
      s(y, 0);
    }, E.prototype.l = function() {
      for (; this.g && this.g.length; ) {
        var y = this.g;
        this.g = [];
        for (var k = 0; k < y.length; ++k) {
          var c = y[k];
          y[k] = null;
          try {
            c();
          } catch (e) {
            this.j(e);
          }
        }
      }
      this.g = null;
    }, E.prototype.j = function(y) {
      this.i(function() {
        throw y;
      });
    }, Q.prototype.j = function() {
      function y(e) {
        return function(m) {
          c || (c = !0, e.call(k, m));
        };
      }
      var k = this, c = !1;
      return { resolve: y(this.C), reject: y(this.l) };
    }, Q.prototype.C = function(y) {
      if (y === this)
        this.l(new TypeError("A Promise cannot resolve to itself"));
      else if (y instanceof Q)
        this.F(y);
      else {
        A:
          switch (typeof y) {
            case "object":
              var k = y != null;
              break A;
            case "function":
              k = !0;
              break A;
            default:
              k = !1;
          }
        k ? this.u(y) : this.m(y);
      }
    }, Q.prototype.u = function(y) {
      var k = void 0;
      try {
        k = y.then;
      } catch (c) {
        this.l(c);
        return;
      }
      typeof k == "function" ? this.G(k, y) : this.m(y);
    }, Q.prototype.l = function(y) {
      this.s(2, y);
    }, Q.prototype.m = function(y) {
      this.s(1, y);
    }, Q.prototype.s = function(y, k) {
      if (this.h != 0)
        throw Error("Cannot settle(" + y + ", " + k + "): Promise already settled in state" + this.h);
      this.h = y, this.i = k, this.h === 2 && this.D(), this.A();
    }, Q.prototype.D = function() {
      var y = this;
      s(function() {
        if (y.B()) {
          var k = f.console;
          typeof k < "u" && k.error(y.i);
        }
      }, 1);
    }, Q.prototype.B = function() {
      if (this.o)
        return !1;
      var y = f.CustomEvent, k = f.Event, c = f.dispatchEvent;
      return typeof c > "u" ? !0 : (typeof y == "function" ? y = new y("unhandledrejection", { cancelable: !0 }) : typeof k == "function" ? y = new k("unhandledrejection", { cancelable: !0 }) : (y = f.document.createEvent("CustomEvent"), y.initCustomEvent("unhandledrejection", !1, !0, y)), y.promise = this, y.reason = this.i, c(y));
    }, Q.prototype.A = function() {
      if (this.g != null) {
        for (var y = 0; y < this.g.length; ++y)
          M.h(this.g[y]);
        this.g = null;
      }
    };
    var M = new E();
    return Q.prototype.F = function(y) {
      var k = this.j();
      y.J(k.resolve, k.reject);
    }, Q.prototype.G = function(y, k) {
      var c = this.j();
      try {
        y.call(k, c.resolve, c.reject);
      } catch (e) {
        c.reject(e);
      }
    }, Q.prototype.then = function(y, k) {
      function c(_, X) {
        return typeof _ == "function" ? function(b) {
          try {
            e(_(b));
          } catch (O) {
            m(O);
          }
        } : X;
      }
      var e, m, FA = new Q(function(_, X) {
        e = _, m = X;
      });
      return this.J(c(y, e), c(k, m)), FA;
    }, Q.prototype.catch = function(y) {
      return this.then(void 0, y);
    }, Q.prototype.J = function(y, k) {
      function c() {
        switch (e.h) {
          case 1:
            y(e.i);
            break;
          case 2:
            k(e.i);
            break;
          default:
            throw Error("Unexpected state: " + e.h);
        }
      }
      var e = this;
      this.g == null ? M.h(c) : this.g.push(c), this.o = !0;
    }, Q.resolve = R, Q.reject = function(y) {
      return new Q(function(k, c) {
        c(y);
      });
    }, Q.race = function(y) {
      return new Q(function(k, c) {
        for (var e = V(y), m = e.next(); !m.done; m = e.next())
          R(m.value).J(k, c);
      });
    }, Q.all = function(y) {
      var k = V(y), c = k.next();
      return c.done ? R([]) : new Q(function(e, m) {
        function FA(b) {
          return function(O) {
            _[b] = O, X--, X == 0 && e(_);
          };
        }
        var _ = [], X = 0;
        do
          _.push(void 0), X++, R(c.value).J(FA(_.length - 1), m), c = k.next();
        while (!c.done);
      });
    }, Q;
  }), r("Object.is", function(C) {
    return C || function(Q, E) {
      return Q === E ? Q !== 0 || 1 / Q === 1 / E : Q !== Q && E !== E;
    };
  }), r("Array.prototype.includes", function(C) {
    return C || function(Q, E) {
      var R = this;
      R instanceof String && (R = String(R));
      var s = R.length;
      for (E = E || 0, 0 > E && (E = Math.max(E + s, 0)); E < s; E++) {
        var M = R[E];
        if (M === Q || Object.is(M, Q))
          return !0;
      }
      return !1;
    };
  }), r("String.prototype.includes", function(C) {
    return C || function(Q, E) {
      if (this == null)
        throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
      if (Q instanceof RegExp)
        throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      return this.indexOf(Q, E || 0) !== -1;
    };
  }), r("Array.prototype.keys", function(C) {
    return C || function() {
      return UA(this, function(Q) {
        return Q;
      });
    };
  });
  var iI = this || self;
  function SA(C, Q) {
    C = C.split(".");
    var E = iI;
    C[0] in E || typeof E.execScript > "u" || E.execScript("var " + C[0]);
    for (var R; C.length && (R = C.shift()); )
      C.length || Q === void 0 ? E[R] && E[R] !== Object.prototype[R] ? E = E[R] : E = E[R] = {} : E[R] = Q;
  }
  function qI(C, Q) {
    return Q = String.fromCharCode.apply(null, Q), C == null ? Q : C + Q;
  }
  var TI, wg = typeof TextDecoder < "u", tI, Fg = typeof TextEncoder < "u";
  function Rg(C) {
    if (Fg)
      C = (tI || (tI = new TextEncoder())).encode(C);
    else {
      var Q = void 0;
      Q = Q === void 0 ? !1 : Q;
      for (var E = 0, R = new Uint8Array(3 * C.length), s = 0; s < C.length; s++) {
        var M = C.charCodeAt(s);
        if (128 > M)
          R[E++] = M;
        else {
          if (2048 > M)
            R[E++] = M >> 6 | 192;
          else {
            if (55296 <= M && 57343 >= M) {
              if (56319 >= M && s < C.length) {
                var y = C.charCodeAt(++s);
                if (56320 <= y && 57343 >= y) {
                  M = 1024 * (M - 55296) + y - 56320 + 65536, R[E++] = M >> 18 | 240, R[E++] = M >> 12 & 63 | 128, R[E++] = M >> 6 & 63 | 128, R[E++] = M & 63 | 128;
                  continue;
                } else
                  s--;
              }
              if (Q)
                throw Error("Found an unpaired surrogate");
              M = 65533;
            }
            R[E++] = M >> 12 | 224, R[E++] = M >> 6 & 63 | 128;
          }
          R[E++] = M & 63 | 128;
        }
      }
      C = R.subarray(0, E);
    }
    return C;
  }
  var Ng = {}, rI = null;
  function Xg(C, Q) {
    Q === void 0 && (Q = 0), sg(), Q = Ng[Q];
    for (var E = Array(Math.floor(C.length / 3)), R = Q[64] || "", s = 0, M = 0; s < C.length - 2; s += 3) {
      var y = C[s], k = C[s + 1], c = C[s + 2], e = Q[y >> 2];
      y = Q[(y & 3) << 4 | k >> 4], k = Q[(k & 15) << 2 | c >> 6], c = Q[c & 63], E[M++] = e + y + k + c;
    }
    switch (e = 0, c = R, C.length - s) {
      case 2:
        e = C[s + 1], c = Q[(e & 15) << 2] || R;
      case 1:
        C = C[s], E[M] = Q[C >> 2] + Q[(C & 3) << 4 | e >> 4] + c + R;
    }
    return E.join("");
  }
  function Og(C) {
    var Q = C.length, E = 3 * Q / 4;
    E % 3 ? E = Math.floor(E) : "=.".indexOf(C[Q - 1]) != -1 && (E = "=.".indexOf(C[Q - 2]) != -1 ? E - 2 : E - 1);
    var R = new Uint8Array(E), s = 0;
    return pg(C, function(M) {
      R[s++] = M;
    }), R.subarray(0, s);
  }
  function pg(C, Q) {
    function E(c) {
      for (; R < C.length; ) {
        var e = C.charAt(R++), m = rI[e];
        if (m != null)
          return m;
        if (!/^[\s\xa0]*$/.test(e))
          throw Error("Unknown base64 encoding at char: " + e);
      }
      return c;
    }
    sg();
    for (var R = 0; ; ) {
      var s = E(-1), M = E(0), y = E(64), k = E(64);
      if (k === 64 && s === -1)
        break;
      Q(s << 2 | M >> 4), y != 64 && (Q(M << 4 & 240 | y >> 2), k != 64 && Q(y << 6 & 192 | k));
    }
  }
  function sg() {
    if (!rI) {
      rI = {};
      for (var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), Q = ["+/=", "+/", "-_=", "-_.", "-_"], E = 0; 5 > E; E++) {
        var R = C.concat(Q[E].split(""));
        Ng[E] = R;
        for (var s = 0; s < R.length; s++) {
          var M = R[s];
          rI[M] === void 0 && (rI[M] = s);
        }
      }
    }
  }
  var ug = typeof Uint8Array.prototype.slice == "function", hg;
  function nI(C, Q, E) {
    return Q === E ? hg || (hg = new Uint8Array(0)) : ug ? C.slice(Q, E) : new Uint8Array(C.subarray(Q, E));
  }
  var aA = 0, JA = 0;
  function OA(C, Q) {
    Q = Q === void 0 ? {} : Q, Q = Q.v === void 0 ? !1 : Q.v, this.h = null, this.g = this.j = this.l = 0, this.m = !1, this.v = Q, C && eI(this, C);
  }
  function eI(C, Q) {
    Q = Q.constructor === Uint8Array ? Q : Q.constructor === ArrayBuffer ? new Uint8Array(Q) : Q.constructor === Array ? new Uint8Array(Q) : Q.constructor === String ? Og(Q) : Q instanceof Uint8Array ? new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength) : new Uint8Array(0), C.h = Q, C.l = 0, C.j = C.h.length, C.g = C.l;
  }
  OA.prototype.reset = function() {
    this.g = this.l;
  };
  function n(C) {
    for (var Q = 128, E = 0, R = 0, s = 0; 4 > s && 128 <= Q; s++)
      Q = C.h[C.g++], E |= (Q & 127) << 7 * s;
    if (128 <= Q && (Q = C.h[C.g++], E |= (Q & 127) << 28, R |= (Q & 127) >> 4), 128 <= Q)
      for (s = 0; 5 > s && 128 <= Q; s++)
        Q = C.h[C.g++], R |= (Q & 127) << 7 * s + 3;
    if (128 > Q)
      return C = E >>> 0, Q = R >>> 0, (R = Q & 2147483648) && (C = ~C + 1 >>> 0, Q = ~Q >>> 0, C == 0 && (Q = Q + 1 >>> 0)), C = 4294967296 * Q + (C >>> 0), R ? -C : C;
    C.m = !0;
  }
  OA.prototype.i = function() {
    var C = this.h, Q = C[this.g], E = Q & 127;
    return 128 > Q ? (this.g += 1, E) : (Q = C[this.g + 1], E |= (Q & 127) << 7, 128 > Q ? (this.g += 2, E) : (Q = C[this.g + 2], E |= (Q & 127) << 14, 128 > Q ? (this.g += 3, E) : (Q = C[this.g + 3], E |= (Q & 127) << 21, 128 > Q ? (this.g += 4, E) : (Q = C[this.g + 4], E |= (Q & 15) << 28, 128 > Q ? (this.g += 5, E >>> 0) : (this.g += 5, 128 <= C[this.g++] && 128 <= C[this.g++] && 128 <= C[this.g++] && 128 <= C[this.g++] && this.g++, E)))));
  }, OA.prototype.o = function() {
    var C = this.h[this.g], Q = this.h[this.g + 1], E = this.h[this.g + 2], R = this.h[this.g + 3];
    return this.g += 4, E = (C << 0 | Q << 8 | E << 16 | R << 24) >>> 0, C = 2 * (E >> 31) + 1, Q = E >>> 23 & 255, E &= 8388607, Q == 255 ? E ? NaN : 1 / 0 * C : Q == 0 ? C * Math.pow(2, -149) * E : C * Math.pow(2, Q - 150) * (E + Math.pow(2, 23));
  };
  var pA = [];
  function lI() {
    this.g = new Uint8Array(64), this.h = 0;
  }
  lI.prototype.push = function(C) {
    if (!(this.h + 1 < this.g.length)) {
      var Q = this.g;
      this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length)), this.g.set(Q);
    }
    this.g[this.h++] = C;
  }, lI.prototype.length = function() {
    return this.h;
  }, lI.prototype.end = function() {
    var C = this.g, Q = this.h;
    return this.h = 0, nI(C, 0, Q);
  };
  function $A(C, Q) {
    for (; 127 < Q; )
      C.push(Q & 127 | 128), Q >>>= 7;
    C.push(Q);
  }
  function KI(C) {
    var Q = {}, E = Q.N === void 0 ? !1 : Q.N;
    this.o = { v: Q.v === void 0 ? !1 : Q.v }, this.N = E, Q = this.o, pA.length ? (E = pA.pop(), Q && (E.v = Q.v), C && eI(E, C), C = E) : C = new OA(C, Q), this.g = C, this.m = this.g.g, this.h = this.i = this.l = -1, this.j = !1;
  }
  KI.prototype.reset = function() {
    this.g.reset(), this.h = this.l = -1;
  };
  function mA(C) {
    var Q = C.g;
    if ((Q = Q.g == Q.j) || (Q = C.j) || (Q = C.g, Q = Q.m || 0 > Q.g || Q.g > Q.j), Q)
      return !1;
    C.m = C.g.g, Q = C.g.i();
    var E = Q & 7;
    return E != 0 && E != 5 && E != 1 && E != 2 && E != 3 && E != 4 ? (C.j = !0, !1) : (C.i = Q, C.l = Q >>> 3, C.h = E, !0);
  }
  function DI(C) {
    switch (C.h) {
      case 0:
        if (C.h != 0)
          DI(C);
        else {
          for (C = C.g; C.h[C.g] & 128; )
            C.g++;
          C.g++;
        }
        break;
      case 1:
        C.h != 1 ? DI(C) : (C = C.g, C.g += 8);
        break;
      case 2:
        if (C.h != 2)
          DI(C);
        else {
          var Q = C.g.i();
          C = C.g, C.g += Q;
        }
        break;
      case 5:
        C.h != 5 ? DI(C) : (C = C.g, C.g += 4);
        break;
      case 3:
        Q = C.l;
        do {
          if (!mA(C)) {
            C.j = !0;
            break;
          }
          if (C.h == 4) {
            C.l != Q && (C.j = !0);
            break;
          }
          DI(C);
        } while (1);
        break;
      default:
        C.j = !0;
    }
  }
  function dI(C, Q, E) {
    var R = C.g.j, s = C.g.i(), M = C.g.g + s;
    if (C.g.j = M, E(Q, C), E = M - C.g.g, E !== 0)
      throw Error("Message parsing ended unexpectedly. Expected to read " + s + " bytes, instead read " + (s - E) + " bytes, either the data ended unexpectedly or the message misreported its own length");
    return C.g.g = M, C.g.j = R, Q;
  }
  function uA(C) {
    return C.g.o();
  }
  function vI(C) {
    var Q = C.g.i();
    C = C.g;
    var E = C.g;
    C.g += Q, C = C.h;
    var R;
    if (wg)
      (R = TI) || (R = TI = new TextDecoder("utf-8", { fatal: !1 })), R = R.decode(C.subarray(E, E + Q));
    else {
      Q = E + Q;
      for (var s = [], M = null, y, k, c; E < Q; )
        y = C[E++], 128 > y ? s.push(y) : 224 > y ? E >= Q ? s.push(65533) : (k = C[E++], 194 > y || (k & 192) !== 128 ? (E--, s.push(65533)) : s.push((y & 31) << 6 | k & 63)) : 240 > y ? E >= Q - 1 ? s.push(65533) : (k = C[E++], (k & 192) !== 128 || y === 224 && 160 > k || y === 237 && 160 <= k || ((R = C[E++]) & 192) !== 128 ? (E--, s.push(65533)) : s.push((y & 15) << 12 | (k & 63) << 6 | R & 63)) : 244 >= y ? E >= Q - 2 ? s.push(65533) : (k = C[E++], (k & 192) !== 128 || (y << 28) + (k - 144) >> 30 || ((R = C[E++]) & 192) !== 128 || ((c = C[E++]) & 192) !== 128 ? (E--, s.push(65533)) : (y = (y & 7) << 18 | (k & 63) << 12 | (R & 63) << 6 | c & 63, y -= 65536, s.push((y >> 10 & 1023) + 55296, (y & 1023) + 56320))) : s.push(65533), 8192 <= s.length && (M = qI(M, s), s.length = 0);
      R = qI(M, s);
    }
    return R;
  }
  function ag(C, Q, E) {
    var R = C.g.i();
    for (R = C.g.g + R; C.g.g < R; )
      E.push(Q.call(C.g));
  }
  function yg(C, Q) {
    C.h == 2 ? ag(C, OA.prototype.o, Q) : Q.push(uA(C));
  }
  function _I() {
    this.h = [], this.i = 0, this.g = new lI();
  }
  function UI(C, Q) {
    Q.length !== 0 && (C.h.push(Q), C.i += Q.length);
  }
  function $I(C) {
    var Q = C.i + C.g.length();
    if (Q === 0)
      return new Uint8Array(0);
    Q = new Uint8Array(Q);
    for (var E = C.h, R = E.length, s = 0, M = 0; M < R; M++) {
      var y = E[M];
      y.length !== 0 && (Q.set(y, s), s += y.length);
    }
    return E = C.g, R = E.h, R !== 0 && (Q.set(E.g.subarray(0, R), s), E.h = 0), C.h = [Q], Q;
  }
  function jA(C, Q, E) {
    if (E != null) {
      $A(C.g, 8 * Q + 5), C = C.g;
      var R = E;
      R = (E = 0 > R ? 1 : 0) ? -R : R, R === 0 ? 0 < 1 / R ? aA = JA = 0 : (JA = 0, aA = 2147483648) : isNaN(R) ? (JA = 0, aA = 2147483647) : 34028234663852886e22 < R ? (JA = 0, aA = (E << 31 | 2139095040) >>> 0) : 11754943508222875e-54 > R ? (R = Math.round(R / Math.pow(2, -149)), JA = 0, aA = (E << 31 | R) >>> 0) : (Q = Math.floor(Math.log(R) / Math.LN2), R *= Math.pow(2, -Q), R = Math.round(8388608 * R), 16777216 <= R && ++Q, JA = 0, aA = (E << 31 | Q + 127 << 23 | R & 8388607) >>> 0), E = aA, C.push(E >>> 0 & 255), C.push(E >>> 8 & 255), C.push(E >>> 16 & 255), C.push(E >>> 24 & 255);
    }
  }
  var BI = typeof Uint8Array == "function";
  function MI(C, Q, E) {
    if (C != null)
      return typeof C == "object" ? BI && C instanceof Uint8Array ? E(C) : jg(C, Q, E) : Q(C);
  }
  function jg(C, Q, E) {
    if (Array.isArray(C)) {
      for (var R = Array(C.length), s = 0; s < C.length; s++)
        R[s] = MI(C[s], Q, E);
      return Array.isArray(C) && C.W && YA(R), R;
    }
    R = {};
    for (s in C)
      R[s] = MI(C[s], Q, E);
    return R;
  }
  function mI(C) {
    return typeof C == "number" ? isFinite(C) ? C : String(C) : C;
  }
  var fI = { W: { value: !0, configurable: !0 } };
  function YA(C) {
    return Array.isArray(C) && !Object.isFrozen(C) && Object.defineProperties(C, fI), C;
  }
  var Ag;
  function tA(C, Q, E) {
    var R = Ag;
    Ag = null, C || (C = R), R = this.constructor.ca, C || (C = R ? [R] : []), this.j = R ? 0 : -1, this.m = this.g = null, this.h = C;
    A: {
      if (R = this.h.length, C = R - 1, R && (R = this.h[C], !(R === null || typeof R != "object" || Array.isArray(R) || BI && R instanceof Uint8Array))) {
        this.l = C - this.j, this.i = R;
        break A;
      }
      Q !== void 0 && -1 < Q ? (this.l = Math.max(Q, C + 1 - this.j), this.i = null) : this.l = Number.MAX_VALUE;
    }
    if (E)
      for (Q = 0; Q < E.length; Q++)
        C = E[Q], C < this.l ? (C += this.j, (R = this.h[C]) ? YA(R) : this.h[C] = kI) : (Kg(this), (R = this.i[C]) ? YA(R) : this.i[C] = kI);
  }
  var kI = Object.freeze(YA([]));
  function Kg(C) {
    var Q = C.l + C.j;
    C.h[Q] || (C.i = C.h[Q] = {});
  }
  function yA(C, Q, E) {
    return Q === -1 ? null : E !== void 0 && E || Q >= C.l ? C.i ? C.i[Q] : void 0 : C.h[Q + C.j];
  }
  function xA(C, Q) {
    var E = E === void 0 ? !1 : E, R = yA(C, Q, E);
    return R == null && (R = kI), R === kI && (R = YA([]), Z(C, Q, R, E)), R;
  }
  function Ig(C) {
    var Q = xA(C, 3);
    if (C.m || (C.m = {}), !C.m[3]) {
      for (var E = 0; E < Q.length; E++)
        Q[E] = +Q[E];
      C.m[3] = !0;
    }
    return Q;
  }
  function oI(C, Q, E) {
    return C = yA(C, Q), C ?? E;
  }
  function PA(C, Q, E) {
    return C = yA(C, Q), C = C == null ? C : +C, C ?? (E === void 0 ? 0 : E);
  }
  function Z(C, Q, E, R) {
    R !== void 0 && R || Q >= C.l ? (Kg(C), C.i[Q] = E) : C.h[Q + C.j] = E;
  }
  function zA(C, Q, E) {
    if (E === -1)
      return null;
    if (C.g || (C.g = {}), !C.g[E]) {
      var R = yA(C, E, !1);
      R && (C.g[E] = new Q(R));
    }
    return C.g[E];
  }
  function SI(C, Q) {
    C.g || (C.g = {});
    var E = C.g[1];
    if (!E) {
      var R = xA(C, 1);
      E = [];
      for (var s = 0; s < R.length; s++)
        E[s] = new Q(R[s]);
      C.g[1] = E;
    }
    return E;
  }
  function GI(C, Q, E) {
    var R = R === void 0 ? !1 : R;
    C.g || (C.g = {});
    var s = E && a(E);
    C.g[Q] = E, Z(C, Q, s, R);
  }
  function Ug(C, Q, E, R) {
    var s = SI(C, E);
    Q = Q || new E(), C = xA(C, 1), R != null ? (s.splice(R, 0, Q), C.splice(R, 0, a(Q))) : (s.push(Q), C.push(a(Q)));
  }
  tA.prototype.toJSON = function() {
    var C = a(this);
    return jg(C, mI, Xg);
  };
  function a(C, Q) {
    if (C.g)
      for (var E in C.g) {
        var R = C.g[E];
        if (Array.isArray(R))
          for (var s = 0; s < R.length; s++)
            R[s] && a(R[s]);
        else
          R && a(R);
      }
    return C.h;
  }
  tA.prototype.toString = function() {
    return a(this).toString();
  };
  function JI(C, Q) {
    if (C = C.o) {
      UI(Q, Q.g.end());
      for (var E = 0; E < C.length; E++)
        UI(Q, C[E]);
    }
  }
  function MA(C, Q) {
    if (Q.h == 4)
      return !1;
    var E = Q.m;
    return DI(Q), Q.N || (Q = nI(Q.g.h, E, Q.g.g), (E = C.o) ? E.push(Q) : C.o = [Q]), !0;
  }
  function wI(C) {
    tA.call(this, C, -1, Pg);
  }
  rA(wI, tA), wI.prototype.getRows = function() {
    return yA(this, 1);
  }, wI.prototype.getCols = function() {
    return yA(this, 2);
  }, wI.prototype.getPackedDataList = function() {
    return Ig(this);
  }, wI.prototype.getLayout = function() {
    return oI(this, 4, 0);
  };
  function NC(C, Q) {
    for (; mA(Q); )
      switch (Q.i) {
        case 8:
          var E = Q.g.i();
          Z(C, 1, E);
          break;
        case 16:
          E = Q.g.i(), Z(C, 2, E);
          break;
        case 29:
        case 26:
          yg(Q, C.getPackedDataList());
          break;
        case 32:
          E = n(Q.g), Z(C, 4, E);
          break;
        default:
          if (!MA(C, Q))
            return C;
      }
    return C;
  }
  var Pg = [3];
  function WA(C, Q) {
    var E = void 0;
    return new (E || (E = Promise))(function(R, s) {
      function M(c) {
        try {
          k(Q.next(c));
        } catch (e) {
          s(e);
        }
      }
      function y(c) {
        try {
          k(Q.throw(c));
        } catch (e) {
          s(e);
        }
      }
      function k(c) {
        c.done ? R(c.value) : new E(function(e) {
          e(c.value);
        }).then(M, y);
      }
      k((Q = Q.apply(C, void 0)).next());
    });
  }
  function VI(C) {
    tA.call(this, C);
  }
  rA(VI, tA);
  function Mg(C, Q) {
    for (; mA(Q); )
      switch (Q.i) {
        case 8:
          var E = Q.g.i();
          Z(C, 1, E);
          break;
        case 21:
          E = uA(Q), Z(C, 2, E);
          break;
        case 26:
          E = vI(Q), Z(C, 3, E);
          break;
        case 34:
          E = vI(Q), Z(C, 4, E);
          break;
        default:
          if (!MA(C, Q))
            return C;
      }
    return C;
  }
  function iA(C) {
    tA.call(this, C, -1, zg);
  }
  rA(iA, tA), iA.prototype.addClassification = function(C, Q) {
    return Ug(this, C, VI, Q), this;
  };
  var zg = [1];
  function ZA(C) {
    tA.call(this, C);
  }
  rA(ZA, tA);
  function FI(C, Q) {
    for (; mA(Q); )
      switch (Q.i) {
        case 13:
          var E = uA(Q);
          Z(C, 1, E);
          break;
        case 21:
          E = uA(Q), Z(C, 2, E);
          break;
        case 29:
          E = uA(Q), Z(C, 3, E);
          break;
        case 37:
          E = uA(Q), Z(C, 4, E);
          break;
        case 45:
          E = uA(Q), Z(C, 5, E);
          break;
        default:
          if (!MA(C, Q))
            return C;
      }
    return C;
  }
  function kg(C) {
    tA.call(this, C, -1, D);
  }
  rA(kg, tA);
  function p(C) {
    A: {
      var Q = new kg();
      for (C = new KI(C); mA(C); )
        switch (C.i) {
          case 10:
            var E = dI(C, new ZA(), FI);
            Ug(Q, E, ZA, void 0);
            break;
          default:
            if (!MA(Q, C))
              break A;
        }
    }
    return Q;
  }
  var D = [1];
  function kA(C) {
    tA.call(this, C);
  }
  rA(kA, tA);
  function RI(C) {
    tA.call(this, C, -1, _g);
  }
  rA(RI, tA), RI.prototype.getVertexType = function() {
    return oI(this, 1, 0);
  }, RI.prototype.getPrimitiveType = function() {
    return oI(this, 2, 0);
  }, RI.prototype.getVertexBufferList = function() {
    return Ig(this);
  }, RI.prototype.getIndexBufferList = function() {
    return xA(this, 4);
  };
  function vg(C, Q) {
    for (; mA(Q); )
      switch (Q.i) {
        case 8:
          var E = n(Q.g);
          Z(C, 1, E);
          break;
        case 16:
          E = n(Q.g), Z(C, 2, E);
          break;
        case 29:
        case 26:
          yg(Q, C.getVertexBufferList());
          break;
        case 32:
        case 34:
          E = Q;
          var R = C.getIndexBufferList();
          E.h == 2 ? ag(E, OA.prototype.i, R) : R.push(E.g.i());
          break;
        default:
          if (!MA(C, Q))
            return C;
      }
    return C;
  }
  var _g = [3, 4];
  function NI(C) {
    tA.call(this, C);
  }
  rA(NI, tA), NI.prototype.getMesh = function() {
    return zA(this, RI, 1);
  }, NI.prototype.getPoseTransformMatrix = function() {
    return zA(this, wI, 2);
  };
  function bI(C) {
    A: {
      var Q = new NI();
      for (C = new KI(C); mA(C); )
        switch (C.i) {
          case 10:
            var E = dI(C, new RI(), vg);
            GI(Q, 1, E);
            break;
          case 18:
            E = dI(C, new wI(), NC), GI(Q, 2, E);
            break;
          default:
            if (!MA(Q, C))
              break A;
        }
    }
    return Q;
  }
  function sI(C, Q, E) {
    if (E = C.createShader(E === 0 ? C.VERTEX_SHADER : C.FRAGMENT_SHADER), C.shaderSource(E, Q), C.compileShader(E), !C.getShaderParameter(E, C.COMPILE_STATUS))
      throw Error(`Could not compile WebGL shader.

` + C.getShaderInfoLog(E));
    return E;
  }
  function YI(C) {
    return SI(C, VI).map(function(Q) {
      return { index: oI(Q, 1, 0), Y: PA(Q, 2), label: yA(Q, 3) != null ? oI(Q, 3, "") : void 0, displayName: yA(Q, 4) != null ? oI(Q, 4, "") : void 0 };
    });
  }
  function QI(C) {
    return { x: PA(C, 1), y: PA(C, 2), z: PA(C, 3), visibility: yA(C, 4) != null ? PA(C, 4) : void 0 };
  }
  function cI(C, Q) {
    this.h = C, this.g = Q, this.l = 0;
  }
  function Sg(C, Q, E) {
    return $g(C, Q), typeof C.g.canvas.transferToImageBitmap == "function" ? Promise.resolve(C.g.canvas.transferToImageBitmap()) : E ? Promise.resolve(C.g.canvas) : typeof createImageBitmap == "function" ? createImageBitmap(C.g.canvas) : (C.i === void 0 && (C.i = document.createElement("canvas")), new Promise(function(R) {
      C.i.height = C.g.canvas.height, C.i.width = C.g.canvas.width, C.i.getContext("2d", {}).drawImage(C.g.canvas, 0, 0, C.g.canvas.width, C.g.canvas.height), R(C.i);
    }));
  }
  function $g(C, Q) {
    var E = C.g;
    if (C.m === void 0) {
      var R = sI(E, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, 0), s = sI(E, `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`, 1), M = E.createProgram();
      if (E.attachShader(M, R), E.attachShader(M, s), E.linkProgram(M), !E.getProgramParameter(M, E.LINK_STATUS))
        throw Error(`Could not compile WebGL program.

` + E.getProgramInfoLog(M));
      R = C.m = M, E.useProgram(R), s = E.getUniformLocation(R, "sampler0"), C.j = { I: E.getAttribLocation(R, "aVertex"), H: E.getAttribLocation(R, "aTex"), da: s }, C.s = E.createBuffer(), E.bindBuffer(E.ARRAY_BUFFER, C.s), E.enableVertexAttribArray(C.j.I), E.vertexAttribPointer(C.j.I, 2, E.FLOAT, !1, 0, 0), E.bufferData(E.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), E.STATIC_DRAW), E.bindBuffer(E.ARRAY_BUFFER, null), C.o = E.createBuffer(), E.bindBuffer(E.ARRAY_BUFFER, C.o), E.enableVertexAttribArray(C.j.H), E.vertexAttribPointer(
        C.j.H,
        2,
        E.FLOAT,
        !1,
        0,
        0
      ), E.bufferData(E.ARRAY_BUFFER, new Float32Array([0, 1, 0, 0, 1, 0, 1, 1]), E.STATIC_DRAW), E.bindBuffer(E.ARRAY_BUFFER, null), E.uniform1i(s, 0);
    }
    R = C.j, E.useProgram(C.m), E.canvas.width = Q.width, E.canvas.height = Q.height, E.viewport(0, 0, Q.width, Q.height), E.activeTexture(E.TEXTURE0), C.h.bindTexture2d(Q.glName), E.enableVertexAttribArray(R.I), E.bindBuffer(E.ARRAY_BUFFER, C.s), E.vertexAttribPointer(R.I, 2, E.FLOAT, !1, 0, 0), E.enableVertexAttribArray(R.H), E.bindBuffer(E.ARRAY_BUFFER, C.o), E.vertexAttribPointer(
      R.H,
      2,
      E.FLOAT,
      !1,
      0,
      0
    ), E.bindFramebuffer(E.DRAW_FRAMEBUFFER ? E.DRAW_FRAMEBUFFER : E.FRAMEBUFFER, null), E.clearColor(0, 0, 0, 0), E.clear(E.COLOR_BUFFER_BIT), E.colorMask(!0, !0, !0, !0), E.drawArrays(E.TRIANGLE_FAN, 0, 4), E.disableVertexAttribArray(R.I), E.disableVertexAttribArray(R.H), E.bindBuffer(E.ARRAY_BUFFER, null), C.h.bindTexture2d(0);
  }
  function XI(C) {
    this.g = C;
  }
  var gg = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]);
  function Cg(C, Q) {
    return Q + C;
  }
  function Bg(C, Q) {
    window[C] = Q;
  }
  function OI(C) {
    var Q = document.createElement("script");
    return Q.setAttribute("src", C), Q.setAttribute("crossorigin", "anonymous"), new Promise(function(E) {
      Q.addEventListener("load", function() {
        E();
      }, !1), Q.addEventListener("error", function() {
        E();
      }, !1), document.body.appendChild(Q);
    });
  }
  function XA() {
    return WA(this, function C() {
      return HA(C, function(Q) {
        switch (Q.g) {
          case 1:
            return Q.m = 2, d(Q, WebAssembly.instantiate(gg), 4);
          case 4:
            Q.g = 3, Q.m = 0;
            break;
          case 2:
            return Q.m = 0, Q.j = null, Q.return(!1);
          case 3:
            return Q.return(!0);
        }
      });
    });
  }
  function Qg(C) {
    if (this.g = C, this.listeners = {}, this.j = {}, this.F = {}, this.m = {}, this.s = {}, this.G = this.o = this.R = !0, this.C = Promise.resolve(), this.P = "", this.B = {}, this.locateFile = C && C.locateFile || Cg, typeof window == "object")
      var Q = window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/";
    else if (typeof location < "u")
      Q = location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/";
    else
      throw Error("solutions can only be loaded on a web page or in a web worker");
    if (this.S = Q, C.options) {
      Q = V(Object.keys(C.options));
      for (var E = Q.next(); !E.done; E = Q.next()) {
        E = E.value;
        var R = C.options[E].default;
        R !== void 0 && (this.j[E] = typeof R == "function" ? R() : R);
      }
    }
  }
  x = Qg.prototype, x.close = function() {
    return this.i && this.i.delete(), Promise.resolve();
  };
  function pI(C, Q) {
    return C.g.files === void 0 ? [] : typeof C.g.files == "function" ? C.g.files(Q) : C.g.files;
  }
  function AC(C) {
    return WA(C, function Q() {
      var E = this, R, s, M, y, k, c, e, m, FA, _, X;
      return HA(Q, function(b) {
        switch (b.g) {
          case 1:
            return R = E, E.R ? (s = pI(E, E.j), d(b, XA(), 2)) : b.return();
          case 2:
            if (M = b.h, typeof window == "object")
              return Bg("createMediapipeSolutionsWasm", { locateFile: E.locateFile }), Bg("createMediapipeSolutionsPackedAssets", { locateFile: E.locateFile }), c = s.filter(function(O) {
                return O.data !== void 0;
              }), e = s.filter(function(O) {
                return O.data === void 0;
              }), m = Promise.all(c.map(function(O) {
                var v = uI(R, O.url);
                if (O.path !== void 0) {
                  var IA = O.path;
                  v = v.then(function(eA) {
                    return R.overrideFile(IA, eA), Promise.resolve(eA);
                  });
                }
                return v;
              })), FA = Promise.all(e.map(function(O) {
                return O.simd === void 0 || O.simd && M || !O.simd && !M ? OI(R.locateFile(O.url, R.S)) : Promise.resolve();
              })).then(function() {
                return WA(R, function O() {
                  var v, IA, eA = this;
                  return HA(O, function(NA) {
                    if (NA.g == 1)
                      return v = window.createMediapipeSolutionsWasm, IA = window.createMediapipeSolutionsPackedAssets, d(NA, v(IA), 2);
                    eA.h = NA.h, NA.g = 0;
                  });
                });
              }), _ = function() {
                return WA(R, function O() {
                  var v = this;
                  return HA(O, function(IA) {
                    return v.g.graph && v.g.graph.url ? IA = d(IA, uI(v, v.g.graph.url), 0) : (IA.g = 0, IA = void 0), IA;
                  });
                });
              }(), d(b, Promise.all([FA, m, _]), 7);
            if (typeof importScripts != "function")
              throw Error("solutions can only be loaded on a web page or in a web worker");
            return y = s.filter(function(O) {
              return O.simd === void 0 || O.simd && M || !O.simd && !M;
            }).map(function(O) {
              return R.locateFile(O.url, R.S);
            }), importScripts.apply(null, RA(y)), d(b, createMediapipeSolutionsWasm(Module), 6);
          case 6:
            E.h = b.h, E.l = new OffscreenCanvas(1, 1), E.h.canvas = E.l, k = E.h.GL.createContext(
              E.l,
              { antialias: !1, alpha: !1, ba: typeof WebGL2RenderingContext < "u" ? 2 : 1 }
            ), E.h.GL.makeContextCurrent(k), b.g = 4;
            break;
          case 7:
            if (E.l = document.createElement("canvas"), X = E.l.getContext("webgl2", {}), !X && (X = E.l.getContext("webgl", {}), !X))
              return alert("Failed to create WebGL canvas context when passing video frame."), b.return();
            E.D = X, E.h.canvas = E.l, E.h.createContext(E.l, !0, !0, {});
          case 4:
            E.i = new E.h.SolutionWasm(), E.R = !1, b.g = 0;
        }
      });
    });
  }
  function Eg(C) {
    return WA(C, function Q() {
      var E = this, R, s, M, y, k, c, e, m;
      return HA(Q, function(FA) {
        if (FA.g == 1) {
          if (E.g.graph && E.g.graph.url && E.P === E.g.graph.url)
            return FA.return();
          if (E.o = !0, !E.g.graph || !E.g.graph.url) {
            FA.g = 2;
            return;
          }
          return E.P = E.g.graph.url, d(FA, uI(E, E.g.graph.url), 3);
        }
        for (FA.g != 2 && (R = FA.h, E.i.loadGraph(R)), s = V(Object.keys(E.B)), M = s.next(); !M.done; M = s.next())
          y = M.value, E.i.overrideFile(y, E.B[y]);
        if (E.B = {}, E.g.listeners)
          for (k = V(E.g.listeners), c = k.next(); !c.done; c = k.next())
            e = c.value, $(E, e);
        m = E.j, E.j = {}, E.setOptions(m), FA.g = 0;
      });
    });
  }
  x.reset = function() {
    return WA(this, function C() {
      var Q = this;
      return HA(C, function(E) {
        Q.i && (Q.i.reset(), Q.m = {}, Q.s = {}), E.g = 0;
      });
    });
  }, x.setOptions = function(C, Q) {
    var E = this;
    if (Q = Q || this.g.options) {
      for (var R = [], s = [], M = {}, y = V(Object.keys(C)), k = y.next(); !k.done; M = { K: M.K, L: M.L }, k = y.next()) {
        var c = k.value;
        c in this.j && this.j[c] === C[c] || (this.j[c] = C[c], k = Q[c], k !== void 0 && (k.onChange && (M.K = k.onChange, M.L = C[c], R.push(function(e) {
          return function() {
            return WA(E, function m() {
              var FA, _ = this;
              return HA(m, function(X) {
                if (X.g == 1)
                  return d(X, e.K(e.L), 2);
                FA = X.h, FA === !0 && (_.o = !0), X.g = 0;
              });
            });
          };
        }(M))), k.graphOptionXref && (c = { valueNumber: k.type === 1 ? C[c] : 0, valueBoolean: k.type === 0 ? C[c] : !1, valueString: k.type === 2 ? C[c] : "" }, k = Object.assign(Object.assign(Object.assign({}, { calculatorName: "", calculatorIndex: 0 }), k.graphOptionXref), c), s.push(k))));
      }
      (R.length !== 0 || s.length !== 0) && (this.o = !0, this.A = (this.A === void 0 ? [] : this.A).concat(s), this.u = (this.u === void 0 ? [] : this.u).concat(R));
    }
  };
  function IC(C) {
    return WA(C, function Q() {
      var E = this, R, s, M, y, k, c, e;
      return HA(Q, function(m) {
        switch (m.g) {
          case 1:
            if (!E.o)
              return m.return();
            if (!E.u) {
              m.g = 2;
              break;
            }
            R = V(E.u), s = R.next();
          case 3:
            if (s.done) {
              m.g = 5;
              break;
            }
            return M = s.value, d(m, M(), 4);
          case 4:
            s = R.next(), m.g = 3;
            break;
          case 5:
            E.u = void 0;
          case 2:
            if (E.A) {
              for (y = new E.h.GraphOptionChangeRequestList(), k = V(E.A), c = k.next(); !c.done; c = k.next())
                e = c.value, y.push_back(e);
              E.i.changeOptions(y), y.delete(), E.A = void 0;
            }
            E.o = !1, m.g = 0;
        }
      });
    });
  }
  x.initialize = function() {
    return WA(this, function C() {
      var Q = this;
      return HA(C, function(E) {
        return E.g == 1 ? d(E, AC(Q), 2) : E.g != 3 ? d(E, Eg(Q), 3) : d(E, IC(Q), 0);
      });
    });
  };
  function uI(C, Q) {
    return WA(C, function E() {
      var R = this, s, M;
      return HA(E, function(y) {
        return Q in R.F ? y.return(R.F[Q]) : (s = R.locateFile(Q, ""), M = fetch(s).then(function(k) {
          return k.arrayBuffer();
        }), R.F[Q] = M, y.return(M));
      });
    });
  }
  x.overrideFile = function(C, Q) {
    this.i ? this.i.overrideFile(C, Q) : this.B[C] = Q;
  }, x.clearOverriddenFiles = function() {
    this.B = {}, this.i && this.i.clearOverriddenFiles();
  }, x.send = function(C, Q) {
    return WA(this, function E() {
      var R = this, s, M, y, k, c, e, m, FA, _;
      return HA(E, function(X) {
        switch (X.g) {
          case 1:
            return R.g.inputs ? (s = 1e3 * (Q ?? performance.now()), d(X, R.C, 2)) : X.return();
          case 2:
            return d(X, R.initialize(), 3);
          case 3:
            for (M = new R.h.PacketDataList(), y = V(Object.keys(C)), k = y.next(); !k.done; k = y.next())
              if (c = k.value, e = R.g.inputs[c]) {
                A: {
                  var b = R, O = C[c];
                  switch (e.type) {
                    case "video":
                      var v = b.m[e.stream];
                      if (v || (v = new cI(b.h, b.D), b.m[e.stream] = v), b = v, b.l === 0 && (b.l = b.h.createTexture()), typeof HTMLVideoElement < "u" && O instanceof HTMLVideoElement) {
                        var IA = O.videoWidth;
                        v = O.videoHeight;
                      } else
                        typeof HTMLImageElement < "u" && O instanceof HTMLImageElement ? (IA = O.naturalWidth, v = O.naturalHeight) : (IA = O.width, v = O.height);
                      v = { glName: b.l, width: IA, height: v }, IA = b.g, IA.canvas.width = v.width, IA.canvas.height = v.height, IA.activeTexture(IA.TEXTURE0), b.h.bindTexture2d(b.l), IA.texImage2D(IA.TEXTURE_2D, 0, IA.RGBA, IA.RGBA, IA.UNSIGNED_BYTE, O), b.h.bindTexture2d(0), b = v;
                      break A;
                    case "detections":
                      for (v = b.m[e.stream], v || (v = new XI(b.h), b.m[e.stream] = v), b = v, b.data || (b.data = new b.g.DetectionListData()), b.data.reset(O.length), v = 0; v < O.length; ++v) {
                        IA = O[v];
                        var eA = b.data, NA = eA.setBoundingBox, fA = v, cA = IA.T, j = new kA();
                        Z(j, 1, cA.Z), Z(j, 2, cA.$), Z(j, 3, cA.height), Z(j, 4, cA.width), Z(j, 5, cA.rotation), Z(j, 6, cA.X);
                        var CA = cA = new _I();
                        jA(CA, 1, yA(j, 1)), jA(CA, 2, yA(j, 2)), jA(CA, 3, yA(j, 3)), jA(CA, 4, yA(j, 4)), jA(CA, 5, yA(j, 5));
                        var DA = yA(j, 6);
                        if (DA != null && DA != null) {
                          $A(CA.g, 48);
                          var u = CA.g, BA = DA;
                          DA = 0 > BA, BA = Math.abs(BA);
                          var oA = BA >>> 0;
                          for (BA = Math.floor((BA - oA) / 4294967296), BA >>>= 0, DA && (BA = ~BA >>> 0, oA = (~oA >>> 0) + 1, 4294967295 < oA && (oA = 0, BA++, 4294967295 < BA && (BA = 0))), aA = oA, JA = BA, DA = aA, oA = JA; 0 < oA || 127 < DA; )
                            u.push(DA & 127 | 128), DA = (DA >>> 7 | oA << 25) >>> 0, oA >>>= 7;
                          u.push(DA);
                        }
                        if (JI(j, CA), cA = $I(cA), NA.call(eA, fA, cA), IA.O)
                          for (eA = 0; eA < IA.O.length; ++eA)
                            j = IA.O[eA], CA = !!j.visibility, NA = b.data, fA = NA.addNormalizedLandmark, cA = v, j = Object.assign(Object.assign({}, j), { visibility: CA ? j.visibility : 0 }), CA = new ZA(), Z(CA, 1, j.x), Z(CA, 2, j.y), Z(CA, 3, j.z), j.visibility && Z(CA, 4, j.visibility), u = j = new _I(), jA(u, 1, yA(CA, 1)), jA(u, 2, yA(CA, 2)), jA(u, 3, yA(CA, 3)), jA(u, 4, yA(CA, 4)), jA(u, 5, yA(CA, 5)), JI(CA, u), j = $I(j), fA.call(NA, cA, j);
                        if (IA.M)
                          for (eA = 0; eA < IA.M.length; ++eA) {
                            if (NA = b.data, fA = NA.addClassification, cA = v, j = IA.M[eA], CA = new VI(), Z(CA, 2, j.Y), j.index && Z(CA, 1, j.index), j.label && Z(CA, 3, j.label), j.displayName && Z(CA, 4, j.displayName), u = j = new _I(), oA = yA(CA, 1), oA != null && oA != null)
                              if ($A(u.g, 8), DA = u.g, 0 <= oA)
                                $A(DA, oA);
                              else {
                                for (BA = 0; 9 > BA; BA++)
                                  DA.push(oA & 127 | 128), oA >>= 7;
                                DA.push(1);
                              }
                            jA(u, 2, yA(CA, 2)), DA = yA(CA, 3), DA != null && (DA = Rg(DA), $A(u.g, 26), $A(u.g, DA.length), UI(u, u.g.end()), UI(u, DA)), DA = yA(CA, 4), DA != null && (DA = Rg(DA), $A(u.g, 34), $A(u.g, DA.length), UI(u, u.g.end()), UI(u, DA)), JI(CA, u), j = $I(j), fA.call(NA, cA, j);
                          }
                      }
                      b = b.data;
                      break A;
                    default:
                      b = {};
                  }
                }
                switch (m = b, FA = e.stream, e.type) {
                  case "video":
                    M.pushTexture2d(Object.assign(Object.assign({}, m), { stream: FA, timestamp: s }));
                    break;
                  case "detections":
                    _ = m, _.stream = FA, _.timestamp = s, M.pushDetectionList(_);
                    break;
                  default:
                    throw Error("Unknown input config type: '" + e.type + "'");
                }
              }
            return R.i.send(M), d(X, R.C, 4);
          case 4:
            M.delete(), X.g = 0;
        }
      });
    });
  };
  function qA(C, Q, E) {
    return WA(C, function R() {
      var s, M, y, k, c, e, m = this, FA, _, X, b, O, v, IA, eA;
      return HA(R, function(NA) {
        switch (NA.g) {
          case 1:
            if (!E)
              return NA.return(Q);
            for (s = {}, M = 0, y = V(Object.keys(E)), k = y.next(); !k.done; k = y.next())
              c = k.value, e = E[c], typeof e != "string" && e.type === "texture" && Q[e.stream] !== void 0 && ++M;
            1 < M && (m.G = 
