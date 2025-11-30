import { g as NI, c as Lo, a as RI, O as $I } from "./ui-85e81035.js";
function GI(n, t) {
  for (var e = 0; e < t.length; e++) {
    const s = t[e];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const o in s)
        if (o !== "default" && !(o in n)) {
          const r = Object.getOwnPropertyDescriptor(s, o);
          r && Object.defineProperty(n, o, r.get ? r : {
            enumerable: !0,
            get: () => s[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const EI = 1e-7, LI = 1e-4;
class Mg {
  constructor(t, e) {
    this.backend = t, this.dataMover = e, this.data = /* @__PURE__ */ new WeakMap(), this.dataIdsCount = 0;
  }
  get(t) {
    return this.data.has(t) || this.dataMover.moveData(this.backend, t), this.data.get(t);
  }
  set(t, e) {
    this.dataIdsCount++, this.data.set(t, e);
  }
  has(t) {
    return this.data.has(t);
  }
  delete(t) {
    return this.dataIdsCount--, this.data.delete(t);
  }
  numDataIds() {
    return this.dataIdsCount;
  }
}
class Xd {
  refCount(t) {
    return _e("refCount");
  }
  incRef(t) {
    return _e("incRef");
  }
  timerAvailable() {
    return !0;
  }
  time(t) {
    return _e("time");
  }
  read(t) {
    return _e("read");
  }
  readSync(t) {
    return _e("readSync");
  }
  readToGPU(t, e) {
    return _e("readToGPU");
  }
  numDataIds() {
    return _e("numDataIds");
  }
  disposeData(t, e) {
    return _e("disposeData");
  }
  write(t, e, s) {
    return _e("write");
  }
  move(t, e, s, o, r) {
    return _e("move");
  }
  createTensorFromGPUData(t, e, s) {
    return _e("createTensorFromGPUData");
  }
  memory() {
    return _e("memory");
  }
  /** Returns the highest precision for floats in bits (e.g. 16 or 32) */
  floatPrecision() {
    return _e("floatPrecision");
  }
  /** Returns the smallest representable number.  */
  epsilon() {
    return this.floatPrecision() === 32 ? EI : LI;
  }
  dispose() {
    return _e("dispose");
  }
}
function _e(n) {
  throw new Error(`'${n}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`);
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function Pd(n) {
  let t = n.length, e = 0;
  for (; t > 0; )
    e = Math.random() * t | 0, t--, us(n, t, e);
}
function MI(n, t) {
  if (n.length !== t.length)
    throw new Error(`Array sizes must match to be shuffled together First array length was ${n.length}Second array length was ${t.length}`);
  let e = n.length, s = 0;
  for (; e > 0; )
    s = Math.random() * e | 0, e--, us(n, e, s), us(t, e, s);
}
function Fs(n, t, e) {
  return Math.max(n, Math.min(t, e));
}
function Wl(n) {
  return n % 2 === 0 ? n : n + 1;
}
function us(n, t, e) {
  const s = n[t];
  n[t] = n[e], n[e] = s;
}
function Wg(n) {
  let t = 0;
  for (let e = 0; e < n.length; e++)
    t += n[e];
  return t;
}
function WI(n, t) {
  const e = Math.random();
  return t * e + (1 - e) * n;
}
function DI(n, t) {
  let e = 0;
  for (let s = 0; s < n.length; s++) {
    const o = Number(n[s]) - Number(t[s]);
    e += o * o;
  }
  return e;
}
function v(n, t) {
  if (!n)
    throw new Error(typeof t == "string" ? t : t());
}
function Ve(n, t, e = "") {
  v(Rt(n, t), () => e + ` Shapes ${n} and ${t} must match`);
}
function Dl(n) {
  v(n != null, () => "The input to the tensor constructor must be a non-null value.");
}
function O(n) {
  if (n.length === 0)
    return 1;
  let t = n[0];
  for (let e = 1; e < n.length; e++)
    t *= n[e];
  return t;
}
function FI(n) {
  return n.length === 0;
}
function Rt(n, t) {
  if (n === t)
    return !0;
  if (n == null || t == null || n.length !== t.length)
    return !1;
  for (let e = 0; e < n.length; e++)
    if (n[e] !== t[e])
      return !1;
  return !0;
}
function go(n) {
  return n % 1 === 0;
}
function VI(n) {
  if (Math.tanh != null)
    return Math.tanh(n);
  if (n === 1 / 0)
    return 1;
  if (n === -1 / 0)
    return -1;
  {
    const t = Math.exp(2 * n);
    return (t - 1) / (t + 1);
  }
}
function el(n) {
  const t = Math.ceil(Math.sqrt(n));
  return [t, Math.ceil(n / t)];
}
function zI(n) {
  const t = new Uint32Array(n);
  for (let e = 0; e < n; ++e)
    t[e] = e;
  return Pd(t), t;
}
function ho(n, t) {
  return t <= n.length ? n : n + " ".repeat(t - n.length);
}
function td(n, t = (o) => 0, e, s) {
  return new Promise((o, r) => {
    let i = 0;
    const a = () => {
      if (n()) {
        o();
        return;
      }
      i++;
      const l = t(i);
      if (e != null && i >= e) {
        r();
        return;
      }
      s != null ? s(a, l) : setTimeout(a, l);
    };
    a();
  });
}
function Ad(n, t) {
  let e = 1, s = -1;
  for (let r = 0; r < n.length; ++r)
    if (n[r] >= 0)
      e *= n[r];
    else if (n[r] === -1) {
      if (s !== -1)
        throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);
      s = r;
    } else if (n[r] < 0)
      throw Error(`Shapes can not be < 0. Found ${n[r]} at dim ${r}`);
  if (s === -1) {
    if (t > 0 && t !== e)
      throw Error(`Size(${t}) must match the product of shape ${n}`);
    return n;
  }
  if (e === 0)
    throw Error(`Cannot infer the missing size in [${n}] when there are 0 elements`);
  if (t % e !== 0)
    throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);
  const o = n.slice();
  return o[s] = t / e, o;
}
function Ct(n, t) {
  const e = t.length;
  return n = n == null ? t.map((s, o) => o) : [].concat(n), v(n.every((s) => s >= -e && s < e), () => `All values in axis param must be in range [-${e}, ${e}) but got axis ${n}`), v(n.every((s) => go(s)), () => `All values in axis param must be integers but got axis ${n}`), n.map((s) => s < 0 ? e + s : s);
}
function gs(n, t) {
  const e = [], s = [], o = t != null && Array.isArray(t) && t.length === 0, r = t == null || o ? null : Ct(t, n).sort();
  let i = 0;
  for (let a = 0; a < n.length; ++a) {
    if (r != null) {
      if (r[i] === a && n[a] !== 1)
        throw new Error(`Can't squeeze axis ${a} since its dim '${n[a]}' is not 1`);
      (r[i] == null || r[i] > a) && n[a] === 1 && (e.push(n[a]), s.push(a)), r[i] <= a && i++;
    }
    n[a] !== 1 && (e.push(n[a]), s.push(a));
  }
  return { newShape: e, keptDims: s };
}
function xe(n, t) {
  let e = null;
  if (n == null || n === "float32")
    e = new Float32Array(t);
  else if (n === "int32")
    e = new Int32Array(t);
  else if (n === "bool")
    e = new Uint8Array(t);
  else
    throw new Error(`Unknown data type ${n}`);
  return e;
}
function oe(n, t) {
  let e = null;
  if (n == null || n === "float32")
    e = new Float32Array(t);
  else if (n === "int32")
    e = new Int32Array(t);
  else if (n === "bool")
    e = new Uint8Array(t);
  else if (n === "string")
    e = new Array(t);
  else
    throw new Error(`Unknown data type ${n}`);
  return e;
}
function Dg(n, t) {
  for (let e = 0; e < n.length; e++) {
    const s = n[e];
    if (isNaN(s) || !isFinite(s))
      throw Error(`A tensor of type ${t} being uploaded contains ${s}.`);
  }
}
function Fg(n) {
  return n === "bool" || n === "complex64" || n === "float32" || n === "int32" || n === "string";
}
function Od(n, t) {
  return !(t === "complex64" || t === "float32" && n !== "complex64" || t === "int32" && n !== "float32" && n !== "complex64" || t === "bool" && n === "bool");
}
function Ur(n) {
  if (n === "float32" || n === "int32")
    return 4;
  if (n === "complex64")
    return 8;
  if (n === "bool")
    return 1;
  throw new Error(`Unknown dtype ${n}`);
}
function Vg(n) {
  if (n == null)
    return 0;
  let t = 0;
  return n.forEach((e) => t += e.length), t;
}
function mr(n) {
  return typeof n == "string" || n instanceof String;
}
function zg(n) {
  return typeof n == "boolean";
}
function nl(n) {
  return typeof n == "number";
}
function gr(n) {
  return Array.isArray(n) ? gr(n[0]) : n instanceof Float32Array ? "float32" : n instanceof Int32Array || n instanceof Uint8Array || n instanceof Uint8ClampedArray ? "int32" : nl(n) ? "float32" : mr(n) ? "string" : zg(n) ? "bool" : "float32";
}
function Vs(n) {
  return !!(n && n.constructor && n.call && n.apply);
}
function sl(n, t) {
  for (let e = t; e < n; ++e)
    if (n % e === 0)
      return e;
  return n;
}
function dt(n) {
  const t = n.length;
  if (t < 2)
    return [];
  const e = new Array(t - 1);
  e[t - 2] = n[t - 1];
  for (let s = t - 3; s >= 0; --s)
    e[s] = e[s + 1] * n[s + 1];
  return e;
}
function Xg(n, t, e, s = !1) {
  const o = new Array();
  if (t.length === 1) {
    const r = t[0] * (s ? 2 : 1);
    for (let i = 0; i < r; i++)
      o[i] = e[n + i];
  } else {
    const r = t[0], i = t.slice(1), a = i.reduce((l, c) => l * c) * (s ? 2 : 1);
    for (let l = 0; l < r; l++)
      o[l] = Xg(n + l * a, i, e, s);
  }
  return o;
}
function Sn(n, t, e = !1) {
  if (n.length === 0)
    return t[0];
  const s = n.reduce((o, r) => o * r) * (e ? 2 : 1);
  if (s === 0)
    return [];
  if (s !== t.length)
    throw new Error(`[${n}] does not match the input size ${t.length}${e ? " for a complex tensor" : ""}.`);
  return Xg(0, n, t, e);
}
function Pg(n, t) {
  if (Array.isArray(n))
    return n;
  if (t === "float32")
    return n instanceof Float32Array ? n : new Float32Array(n);
  if (t === "int32")
    return n instanceof Int32Array ? n : new Int32Array(n);
  if (t === "bool" || t === "string")
    return Uint8Array.from(new Int32Array(n));
  throw new Error(`Unknown dtype ${t}`);
}
function Fl(n, t) {
  const e = Se(n, t);
  for (let s = 0; s < e.length; s++)
    e[s] = 1;
  return e;
}
function Se(n, t) {
  if (t == null || t === "float32" || t === "complex64")
    return new Float32Array(n);
  if (t === "int32")
    return new Int32Array(n);
  if (t === "bool")
    return new Uint8Array(n);
  throw new Error(`Unknown data type ${t}`);
}
function Kd(n, t) {
  const e = n.reduce((s, o) => s * o, 1);
  if (t == null || t === "float32")
    return Sn(n, new Float32Array(e));
  if (t === "int32")
    return Sn(n, new Int32Array(e));
  if (t === "bool")
    return Sn(n, new Uint8Array(e));
  throw new Error(`Unknown data type ${t}`);
}
function is(n) {
  n.forEach((t) => {
    v(Number.isInteger(t) && t >= 0, () => `Tensor must have a shape comprised of positive integers but got shape [${n}].`);
  });
}
function zn(n, t, e) {
  if (t === 0)
    return 0;
  if (t === 1)
    return n[0];
  let s = n[n.length - 1];
  for (let o = 0; o < n.length - 1; ++o)
    s += e[o] * n[o];
  return s;
}
function Mo(n, t, e) {
  if (t === 0)
    return [];
  if (t === 1)
    return [n];
  const s = new Array(t);
  for (let o = 0; o < s.length - 1; ++o)
    s[o] = Math.floor(n / e[o]), n -= s[o] * e[o];
  return s[s.length - 1] = n, s;
}
function ui(n) {
  return n && n.then && typeof n.then == "function";
}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const Bf = "tfjsflags";
class XI {
  // tslint:disable-next-line: no-any
  constructor(t) {
    this.global = t, this.flags = {}, this.flagRegistry = {}, this.urlFlags = {}, this.getQueryParams = PI, this.populateURLFlags();
  }
  setPlatform(t, e) {
    this.platform != null && (F().getBool("IS_TEST") || F().getBool("PROD") || console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)), this.platformName = t, this.platform = e;
  }
  registerFlag(t, e, s) {
    if (this.flagRegistry[t] = { evaluationFn: e, setHook: s }, this.urlFlags[t] != null) {
      const o = this.urlFlags[t];
      F().getBool("IS_TEST") || F().getBool("PROD") || console.warn(`Setting feature override from URL ${t}: ${o}.`), this.set(t, o);
    }
  }
  async getAsync(t) {
    return t in this.flags ? this.flags[t] : (this.flags[t] = await this.evaluateFlag(t), this.flags[t]);
  }
  get(t) {
    if (t in this.flags)
      return this.flags[t];
    const e = this.evaluateFlag(t);
    if (ui(e))
      throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);
    return this.flags[t] = e, this.flags[t];
  }
  getNumber(t) {
    return this.get(t);
  }
  getBool(t) {
    return this.get(t);
  }
  getFlags() {
    return this.flags;
  }
  // For backwards compatibility.
  get features() {
    return this.flags;
  }
  set(t, e) {
    if (this.flagRegistry[t] == null)
      throw new Error(`Cannot set flag ${t} as it has not been registered.`);
    this.flags[t] = e, this.flagRegistry[t].setHook != null && this.flagRegistry[t].setHook(e);
  }
  evaluateFlag(t) {
    if (this.flagRegistry[t] == null)
      throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);
    return this.flagRegistry[t].evaluationFn();
  }
  setFlags(t) {
    this.flags = Object.assign({}, t);
  }
  reset() {
    this.flags = {}, this.urlFlags = {}, this.populateURLFlags();
  }
  populateURLFlags() {
    if (typeof this.global > "u" || typeof this.global.location > "u" || typeof this.global.location.search > "u")
      return;
    const t = this.getQueryParams(this.global.location.search);
    Bf in t && t[Bf].split(",").forEach((s) => {
      const [o, r] = s.split(":");
      this.urlFlags[o] = OI(o, r);
    });
  }
}
function PI(n) {
  const t = {};
  return n.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, (e, ...s) => (AI(t, s[0], s[1]), s.join("="))), t;
}
function AI(n, t, e) {
  n[decodeURIComponent(t)] = decodeURIComponent(e || "");
}
function OI(n, t) {
  if (t = t.toLowerCase(), t === "true" || t === "false")
    return t === "true";
  if (`${+t}` === t)
    return +t;
  throw new Error(`Could not parse value flag value ${t} for flag ${n}.`);
}
function F() {
  return Ag;
}
let Ag = null;
function KI(n) {
  Ag = n;
}
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
let yu;
function Og() {
  if (yu == null) {
    let n;
    if (typeof window < "u")
      n = window;
    else if (typeof global < "u")
      n = global;
    else if (typeof process < "u")
      n = process;
    else if (typeof self < "u")
      n = self;
    else
      throw new Error("Could not find a global object");
    yu = n;
  }
  return yu;
}
function ZI() {
  const n = Og();
  return n._tfGlobals == null && (n._tfGlobals = /* @__PURE__ */ new Map()), n._tfGlobals;
}
function Zd(n, t) {
  const e = ZI();
  if (e.has(n))
    return e.get(n);
  {
    const s = t();
    return e.set(n, s), e.get(n);
  }
}
const Vl = "Abs", di = "Acos", hi = "Acosh", br = "Add", Bd = "AddN", Hd = "All", _d = "Any", zl = "ArgMax", Xl = "ArgMin", pi = "Asin", fi = "Asinh", mi = "Atan", gi = "Atanh", bi = "Atan2", Pl = "AvgPool", Ud = "AvgPoolGrad", Al = "AvgPool3D", Yd = "AvgPool3DGrad", Ol = "BatchMatMul", Kl = "BatchToSpaceND", Qd = "Bincount", BI = "BroadcastTo", Kg = "BroadcastArgs", xi = "Cast", yi = "Ceil", wi = "ClipByValue", Jd = "Complex", Zl = "ComplexAbs", Bl = "Concat", Hl = "Conv2D", jd = "Conv2DBackpropFilter", _l = "Conv2DBackpropInput", Ul = "Conv3D", qd = "Conv3DBackpropFilterV2", th = "Conv3DBackpropInputV2", Ii = "Cos", Ci = "Cosh", eh = "Cumprod", Yl = "Cumsum", nh = "CropAndResize", sh = "DenseBincount", oh = "DepthToSpace", Ql = "DepthwiseConv2dNative", rh = "DepthwiseConv2dNativeBackpropFilter", ih = "DepthwiseConv2dNativeBackpropInput", Zg = "Diag", Jl = "Dilation2D", ed = "Dilation2DBackpropInput", nd = "Dilation2DBackpropFilter", vi = "RealDiv", Bg = "Einsum", Si = "Elu", ah = "EluGrad", ki = "Erf", jl = "Equal", Ti = "Exp", ql = "ExpandDims", Ni = "Expm1", lh = "FFT", ch = "Fill", uh = "FlipLeftRight", Ri = "Floor", $i = "FloorDiv", tc = "FusedBatchNorm", ec = "GatherV2", Hg = "GatherNd", nc = "Greater", Gi = "GreaterEqual", Ei = "Identity", dh = "IFFT", hh = "Imag", Li = "IsFinite", Mi = "IsInf", Wi = "IsNan", sc = "LeakyRelu", oc = "Less", rc = "LessEqual", _g = "LinSpace", Di = "Log", Fi = "Log1p", ic = "LogicalAnd", ac = "LogicalNot", lc = "LogicalOr", $4 = "LogicalXor", HI = "LogSoftmax", G4 = "LowerBound", cc = "LRN", ph = "LRNGrad", uc = "Max", Vi = "Maximum", dc = "MaxPool", fh = "MaxPoolGrad", hc = "MaxPool3D", mh = "MaxPool3DGrad", Ug = "MaxPoolWithArgmax", pc = "Mean", fc = "Min", zi = "Minimum", mc = "MirrorPad", Xi = "Mod", Yg = "Multinomial", Pi = "Multiply", gc = "Neg", bc = "NotEqual", gh = "NonMaxSuppressionV3", bh = "NonMaxSuppressionV4", xh = "NonMaxSuppressionV5", xc = "OnesLike", yc = "OneHot", wc = "Pack", Ic = "PadV2", E4 = "Pool", Ai = "Pow", Cc = "Prelu", vc = "Prod", Qg = "RaggedGather", Jg = "RaggedRange", jg = "RaggedTensorToTensor", yh = "Range", wh = "Real", Oi = "Reciprocal", Ki = "Relu", Sc = "Reshape", kc = "ResizeNearestNeighbor", Ih = "ResizeNearestNeighborGrad", Tc = "ResizeBilinear", Ch = "ResizeBilinearGrad", Zi = "Relu6", Nc = "Reverse", Bi = "Round", Hi = "Rsqrt", qg = "ScatterNd", tb = "SearchSorted", Rc = "Select", _i = "Selu", $c = "Slice", Ui = "Sin", Yi = "Sinh", Qi = "Sign", Ji = "Sigmoid", ji = "Softplus", qi = "Sqrt", Gc = "Sum", Ec = "SpaceToBatchND", Lc = "SplitV", Mc = "Softmax", vh = "SparseFillEmptyRows", Sh = "SparseReshape", kh = "SparseSegmentMean", Th = "SparseSegmentSum", eb = "SparseToDense", ta = "SquaredDifference", Nh = "Square", Rh = "StridedSlice", $h = "StringNGrams", Gh = "StringSplit", Eh = "StringToHashBucketFast", ea = "Sub", na = "Tan", sa = "Tanh", oa = "Tile", Lh = "TopK", Mh = "Transform", Jo = "Transpose", Wh = "Unique", Wc = "Unpack", Dc = "UnsortedSegmentSum", L4 = "UpperBound", Fc = "ZerosLike", ra = "Step", sd = "FromPixels", Dh = "RotateWithOffset", ol = "_FusedMatMul", rl = "FusedConv2D", nb = "FusedDepthwiseConv2D";
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function rn(...n) {
  F().getBool("IS_TEST") || F().getBool("PROD") || console.warn(...n);
}
function _I(...n) {
  F().getBool("IS_TEST") || F().getBool("PROD") || console.log(...n);
}
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const sr = Zd("kernelRegistry", () => /* @__PURE__ */ new Map()), Yr = Zd("gradRegistry", () => /* @__PURE__ */ new Map());
function od(n, t) {
  const e = Fh(n, t);
  return sr.get(e);
}
function Hf(n) {
  return Yr.get(n);
}
function rd(n) {
  const t = sr.entries(), e = [];
  for (; ; ) {
    const { done: s, value: o } = t.next();
    if (s)
      break;
    const [r, i] = o, [a] = r.split("_");
    a === n && e.push(i);
  }
  return e;
}
function en(n) {
  const { kernelName: t, backendName: e } = n, s = Fh(t, e);
  sr.has(s) && rn(`The kernel '${t}' for backend '${e}' is already registered`), sr.set(s, n);
}
function UI(n) {
  const { kernelName: t } = n;
  Yr.has(t) && F().getBool("DEBUG") && rn(`Overriding the gradient for '${t}'`), Yr.set(t, n);
}
function M4(n, t) {
  const e = Fh(n, t);
  if (!sr.has(e))
    throw new Error(`The kernel '${n}' for backend '${t}' is not registered`);
  sr.delete(e);
}
function W4(n) {
  if (!Yr.has(n))
    throw new Error(`The gradient '${n}' for backend is not registered`);
  Yr.delete(n);
}
function D4(n, t) {
  rd(n).forEach((s) => {
    const o = Object.assign({}, s, { backendName: t });
    en(o);
  });
}
function Fh(n, t) {
  return `${t}_${n}`;
}
var sb = Bt, yn = null;
try {
  yn = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    13,
    2,
    96,
    0,
    1,
    127,
    96,
    4,
    127,
    127,
    127,
    127,
    1,
    127,
    3,
    7,
    6,
    0,
    1,
    1,
    1,
    1,
    1,
    6,
    6,
    1,
    127,
    1,
    65,
    0,
    11,
    7,
    50,
    6,
    3,
    109,
    117,
    108,
    0,
    1,
    5,
    100,
    105,
    118,
    95,
    115,
    0,
    2,
    5,
    100,
    105,
    118,
    95,
    117,
    0,
    3,
    5,
    114,
    101,
    109,
    95,
    115,
    0,
    4,
    5,
    114,
    101,
    109,
    95,
    117,
    0,
    5,
    8,
    103,
    101,
    116,
    95,
    104,
    105,
    103,
    104,
    0,
    0,
    10,
    191,
    1,
    6,
    4,
    0,
    35,
    0,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    126,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    127,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    128,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    129,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11,
    36,
    1,
    1,
    126,
    32,
    0,
    173,
    32,
    1,
    173,
    66,
    32,
    134,
    132,
    32,
    2,
    173,
    32,
    3,
    173,
    66,
    32,
    134,
    132,
    130,
    34,
    4,
    66,
    32,
    135,
    167,
    36,
    0,
    32,
    4,
    167,
    11
  ])), {}).exports;
} catch {
}
function Bt(n, t, e) {
  this.low = n | 0, this.high = t | 0, this.unsigned = !!e;
}
Bt.prototype.__isLong__;
Object.defineProperty(Bt.prototype, "__isLong__", { value: !0 });
function nn(n) {
  return (n && n.__isLong__) === !0;
}
Bt.isLong = nn;
var _f = {}, Uf = {};
function Wo(n, t) {
  var e, s, o;
  return t ? (n >>>= 0, (o = 0 <= n && n < 256) && (s = Uf[n], s) ? s : (e = Ht(n, (n | 0) < 0 ? -1 : 0, !0), o && (Uf[n] = e), e)) : (n |= 0, (o = -128 <= n && n < 128) && (s = _f[n], s) ? s : (e = Ht(n, n < 0 ? -1 : 0, !1), o && (_f[n] = e), e));
}
Bt.fromInt = Wo;
function wn(n, t) {
  if (isNaN(n))
    return t ? lo : In;
  if (t) {
    if (n < 0)
      return lo;
    if (n >= ob)
      return ab;
  } else {
    if (n <= -Qf)
      return Qe;
    if (n + 1 >= Qf)
      return ib;
  }
  return n < 0 ? wn(-n, t).neg() : Ht(n % or | 0, n / or | 0, t);
}
Bt.fromNumber = wn;
function Ht(n, t, e) {
  return new Bt(n, t, e);
}
Bt.fromBits = Ht;
var il = Math.pow;
function Vh(n, t, e) {
  if (n.length === 0)
    throw Error("empty string");
  if (n === "NaN" || n === "Infinity" || n === "+Infinity" || n === "-Infinity")
    return In;
  if (typeof t == "number" ? (e = t, t = !1) : t = !!t, e = e || 10, e < 2 || 36 < e)
    throw RangeError("radix");
  var s;
  if ((s = n.indexOf("-")) > 0)
    throw Error("interior hyphen");
  if (s === 0)
    return Vh(n.substring(1), t, e).neg();
  for (var o = wn(il(e, 8)), r = In, i = 0; i < n.length; i += 8) {
    var a = Math.min(8, n.length - i), l = parseInt(n.substring(i, i + a), e);
    if (a < 8) {
      var c = wn(il(e, a));
      r = r.mul(c).add(wn(l));
    } else
      r = r.mul(o), r = r.add(wn(l));
  }
  return r.unsigned = t, r;
}
Bt.fromString = Vh;
function Bn(n, t) {
  return typeof n == "number" ? wn(n, t) : typeof n == "string" ? Vh(n, t) : Ht(n.low, n.high, typeof t == "boolean" ? t : n.unsigned);
}
Bt.fromValue = Bn;
var Yf = 65536, YI = 1 << 24, or = Yf * Yf, ob = or * or, Qf = ob / 2, Jf = Wo(YI), In = Wo(0);
Bt.ZERO = In;
var lo = Wo(0, !0);
Bt.UZERO = lo;
var Yo = Wo(1);
Bt.ONE = Yo;
var rb = Wo(1, !0);
Bt.UONE = rb;
var id = Wo(-1);
Bt.NEG_ONE = id;
var ib = Ht(-1, 2147483647, !1);
Bt.MAX_VALUE = ib;
var ab = Ht(-1, -1, !0);
Bt.MAX_UNSIGNED_VALUE = ab;
var Qe = Ht(0, -2147483648, !1);
Bt.MIN_VALUE = Qe;
var tt = Bt.prototype;
tt.toInt = function() {
  return this.unsigned ? this.low >>> 0 : this.low;
};
tt.toNumber = function() {
  return this.unsigned ? (this.high >>> 0) * or + (this.low >>> 0) : this.high * or + (this.low >>> 0);
};
tt.toString = function(t) {
  if (t = t || 10, t < 2 || 36 < t)
    throw RangeError("radix");
  if (this.isZero())
    return "0";
  if (this.isNegative())
    if (this.eq(Qe)) {
      var e = wn(t), s = this.div(e), o = s.mul(e).sub(this);
      return s.toString(t) + o.toInt().toString(t);
    } else
      return "-" + this.neg().toString(t);
  for (var r = wn(il(t, 6), this.unsigned), i = this, a = ""; ; ) {
    var l = i.div(r), c = i.sub(l.mul(r)).toInt() >>> 0, u = c.toString(t);
    if (i = l, i.isZero())
      return u + a;
    for (; u.length < 6; )
      u = "0" + u;
    a = "" + u + a;
  }
};
tt.getHighBits = function() {
  return this.high;
};
tt.getHighBitsUnsigned = function() {
  return this.high >>> 0;
};
tt.getLowBits = function() {
  return this.low;
};
tt.getLowBitsUnsigned = function() {
  return this.low >>> 0;
};
tt.getNumBitsAbs = function() {
  if (this.isNegative())
    return this.eq(Qe) ? 64 : this.neg().getNumBitsAbs();
  for (var t = this.high != 0 ? this.high : this.low, e = 31; e > 0 && !(t & 1 << e); e--)
    ;
  return this.high != 0 ? e + 33 : e + 1;
};
tt.isZero = function() {
  return this.high === 0 && this.low === 0;
};
tt.eqz = tt.isZero;
tt.isNegative = function() {
  return !this.unsigned && this.high < 0;
};
tt.isPositive = function() {
  return this.unsigned || this.high >= 0;
};
tt.isOdd = function() {
  return (this.low & 1) === 1;
};
tt.isEven = function() {
  return (this.low & 1) === 0;
};
tt.equals = function(t) {
  return nn(t) || (t = Bn(t)), this.unsigned !== t.unsigned && this.high >>> 31 === 1 && t.high >>> 31 === 1 ? !1 : this.high === t.high && this.low === t.low;
};
tt.eq = tt.equals;
tt.notEquals = function(t) {
  return !this.eq(
    /* validates */
    t
  );
};
tt.neq = tt.notEquals;
tt.ne = tt.notEquals;
tt.lessThan = function(t) {
  return this.comp(
    /* validates */
    t
  ) < 0;
};
tt.lt = tt.lessThan;
tt.lessThanOrEqual = function(t) {
  return this.comp(
    /* validates */
    t
  ) <= 0;
};
tt.lte = tt.lessThanOrEqual;
tt.le = tt.lessThanOrEqual;
tt.greaterThan = function(t) {
  return this.comp(
    /* validates */
    t
  ) > 0;
};
tt.gt = tt.greaterThan;
tt.greaterThanOrEqual = function(t) {
  return this.comp(
    /* validates */
    t
  ) >= 0;
};
tt.gte = tt.greaterThanOrEqual;
tt.ge = tt.greaterThanOrEqual;
tt.compare = function(t) {
  if (nn(t) || (t = Bn(t)), this.eq(t))
    return 0;
  var e = this.isNegative(), s = t.isNegative();
  return e && !s ? -1 : !e && s ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1;
};
tt.comp = tt.compare;
tt.negate = function() {
  return !this.unsigned && this.eq(Qe) ? Qe : this.not().add(Yo);
};
tt.neg = tt.negate;
tt.add = function(t) {
  nn(t) || (t = Bn(t));
  var e = this.high >>> 16, s = this.high & 65535, o = this.low >>> 16, r = this.low & 65535, i = t.high >>> 16, a = t.high & 65535, l = t.low >>> 16, c = t.low & 65535, u = 0, d = 0, h = 0, p = 0;
  return p += r + c, h += p >>> 16, p &= 65535, h += o + l, d += h >>> 16, h &= 65535, d += s + a, u += d >>> 16, d &= 65535, u += e + i, u &= 65535, Ht(h << 16 | p, u << 16 | d, this.unsigned);
};
tt.subtract = function(t) {
  return nn(t) || (t = Bn(t)), this.add(t.neg());
};
tt.sub = tt.subtract;
tt.multiply = function(t) {
  if (this.isZero())
    return In;
  if (nn(t) || (t = Bn(t)), yn) {
    var e = yn.mul(
      this.low,
      this.high,
      t.low,
      t.high
    );
    return Ht(e, yn.get_high(), this.unsigned);
  }
  if (t.isZero())
    return In;
  if (this.eq(Qe))
    return t.isOdd() ? Qe : In;
  if (t.eq(Qe))
    return this.isOdd() ? Qe : In;
  if (this.isNegative())
    return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
  if (t.isNegative())
    return this.mul(t.neg()).neg();
  if (this.lt(Jf) && t.lt(Jf))
    return wn(this.toNumber() * t.toNumber(), this.unsigned);
  var s = this.high >>> 16, o = this.high & 65535, r = this.low >>> 16, i = this.low & 65535, a = t.high >>> 16, l = t.high & 65535, c = t.low >>> 16, u = t.low & 65535, d = 0, h = 0, p = 0, f = 0;
  return f += i * u, p += f >>> 16, f &= 65535, p += r * u, h += p >>> 16, p &= 65535, p += i * c, h += p >>> 16, p &= 65535, h += o * u, d += h >>> 16, h &= 65535, h += r * c, d += h >>> 16, h &= 65535, h += i * l, d += h >>> 16, h &= 65535, d += s * u + o * c + r * l + i * a, d &= 65535, Ht(p << 16 | f, d << 16 | h, this.unsigned);
};
tt.mul = tt.multiply;
tt.divide = function(t) {
  if (nn(t) || (t = Bn(t)), t.isZero())
    throw Error("division by zero");
  if (yn) {
    if (!this.unsigned && this.high === -2147483648 && t.low === -1 && t.high === -1)
      return this;
    var e = (this.unsigned ? yn.div_u : yn.div_s)(
      this.low,
      this.high,
      t.low,
      t.high
    );
    return Ht(e, yn.get_high(), this.unsigned);
  }
  if (this.isZero())
    return this.unsigned ? lo : In;
  var s, o, r;
  if (this.unsigned) {
    if (t.unsigned || (t = t.toUnsigned()), t.gt(this))
      return lo;
    if (t.gt(this.shru(1)))
      return rb;
    r = lo;
  } else {
    if (this.eq(Qe)) {
      if (t.eq(Yo) || t.eq(id))
        return Qe;
      if (t.eq(Qe))
        return Yo;
      var i = this.shr(1);
      return s = i.div(t).shl(1), s.eq(In) ? t.isNegative() ? Yo : id : (o = this.sub(t.mul(s)), r = s.add(o.div(t)), r);
    } else if (t.eq(Qe))
      return this.unsigned ? lo : In;
    if (this.isNegative())
      return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
    if (t.isNegative())
      return this.div(t.neg()).neg();
    r = In;
  }
  for (o = this; o.gte(t); ) {
    s = Math.max(1, Math.floor(o.toNumber() / t.toNumber()));
    for (var a = Math.ceil(Math.log(s) / Math.LN2), l = a <= 48 ? 1 : il(2, a - 48), c = wn(s), u = c.mul(t); u.isNegative() || u.gt(o); )
      s -= l, c = wn(s, this.unsigned), u = c.mul(t);
    c.isZero() && (c = Yo), r = r.add(c), o = o.sub(u);
  }
  return r;
};
tt.div = tt.divide;
tt.modulo = function(t) {
  if (nn(t) || (t = Bn(t)), yn) {
    var e = (this.unsigned ? yn.rem_u : yn.rem_s)(
      this.low,
      this.high,
      t.low,
      t.high
    );
    return Ht(e, yn.get_high(), this.unsigned);
  }
  return this.sub(this.div(t).mul(t));
};
tt.mod = tt.modulo;
tt.rem = tt.modulo;
tt.not = function() {
  return Ht(~this.low, ~this.high, this.unsigned);
};
tt.and = function(t) {
  return nn(t) || (t = Bn(t)), Ht(this.low & t.low, this.high & t.high, this.unsigned);
};
tt.or = function(t) {
  return nn(t) || (t = Bn(t)), Ht(this.low | t.low, this.high | t.high, this.unsigned);
};
tt.xor = function(t) {
  return nn(t) || (t = Bn(t)), Ht(this.low ^ t.low, this.high ^ t.high, this.unsigned);
};
tt.shiftLeft = function(t) {
  return nn(t) && (t = t.toInt()), (t &= 63) === 0 ? this : t < 32 ? Ht(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : Ht(0, this.low << t - 32, this.unsigned);
};
tt.shl = tt.shiftLeft;
tt.shiftRight = function(t) {
  return nn(t) && (t = t.toInt()), (t &= 63) === 0 ? this : t < 32 ? Ht(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : Ht(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned);
};
tt.shr = tt.shiftRight;
tt.shiftRightUnsigned = function(t) {
  if (nn(t) && (t = t.toInt()), t &= 63, t === 0)
    return this;
  var e = this.high;
  if (t < 32) {
    var s = this.low;
    return Ht(s >>> t | e << 32 - t, e >>> t, this.unsigned);
  } else
    return t === 32 ? Ht(e, 0, this.unsigned) : Ht(e >>> t - 32, 0, this.unsigned);
};
tt.shru = tt.shiftRightUnsigned;
tt.shr_u = tt.shiftRightUnsigned;
tt.toSigned = function() {
  return this.unsigned ? Ht(this.low, this.high, !1) : this;
};
tt.toUnsigned = function() {
  return this.unsigned ? this : Ht(this.low, this.high, !0);
};
tt.toBytes = function(t) {
  return t ? this.toBytesLE() : this.toBytesBE();
};
tt.toBytesLE = function() {
  var t = this.high, e = this.low;
  return [
    e & 255,
    e >>> 8 & 255,
    e >>> 16 & 255,
    e >>> 24,
    t & 255,
    t >>> 8 & 255,
    t >>> 16 & 255,
    t >>> 24
  ];
};
tt.toBytesBE = function() {
  var t = this.high, e = this.low;
  return [
    t >>> 24,
    t >>> 16 & 255,
    t >>> 8 & 255,
    t & 255,
    e >>> 24,
    e >>> 16 & 255,
    e >>> 8 & 255,
    e & 255
  ];
};
Bt.fromBytes = function(t, e, s) {
  return s ? Bt.fromBytesLE(t, e) : Bt.fromBytesBE(t, e);
};
Bt.fromBytesLE = function(t, e) {
  return new Bt(
    t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24,
    t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24,
    e
  );
};
Bt.fromBytesBE = function(t, e) {
  return new Bt(
    t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7],
    t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3],
    e
  );
};
const lb = /* @__PURE__ */ NI(sb), QI = /* @__PURE__ */ GI({
  __proto__: null,
  default: lb
}, [sb]);
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const oo = (
  // tslint:disable-next-line
  lb || QI
);
function ia(n) {
  return oo.fromString(n, !0, 16);
}
const cb = ia("c3a5c85c97cb3127"), so = ia("b492b66fbe98f273"), Me = ia("9ae16a3b2f90404f");
function ad(n) {
  return n.xor(n.shru(47));
}
function ub(n, t, e) {
  const s = n.slice(t, t + e);
  return oo.fromBytes(Array.from(s), !0, !0);
}
function Pt(n, t) {
  return ub(n, t, 8);
}
function jf(n, t) {
  return ub(n, t, 4);
}
function me(n, t) {
  return t === 0 ? n : n.shru(t).or(n.shl(64 - t));
}
function Ms(n, t, e = ia("9ddfea08eb382d69")) {
  let s = n.xor(t).mul(e);
  s = s.xor(s.shru(47));
  let o = t.xor(s).mul(e);
  return o = o.xor(o.shru(47)), o = o.mul(e), o;
}
function JI(n, t, e, s, o, r) {
  o = o.add(n), r = me(r.add(o).add(s), 21);
  const i = o;
  return o = o.add(t), o = o.add(e), r = r.add(me(o, 44)), [o.add(s), r.add(i)];
}
function Wa(n, t, e, s) {
  return JI(Pt(n, t), Pt(n, t + 8), Pt(n, t + 16), Pt(n, t + 24), e, s);
}
function jI(n, t = n.length) {
  if (t >= 8) {
    const e = Me.add(t * 2), s = Pt(n, 0).add(Me), o = Pt(n, t - 8), r = me(o, 37).mul(e).add(s), i = me(s, 25).add(o).mul(e);
    return Ms(r, i, e);
  }
  if (t >= 4) {
    const e = Me.add(t * 2), s = jf(n, 0);
    return Ms(s.shl(3).add(t), jf(n, t - 4), e);
  }
  if (t > 0) {
    const e = n[0], s = n[t >> 1], o = n[t - 1], r = e + (s << 8), i = t + (o << 2);
    return ad(Me.mul(r).xor(cb.mul(i))).mul(Me);
  }
  return Me;
}
function qI(n, t = n.length) {
  const e = Me.add(t * 2), s = Pt(n, 0).mul(so), o = Pt(n, 8), r = Pt(n, t - 8).mul(e), i = Pt(n, t - 16).mul(Me);
  return Ms(me(s.add(o), 43).add(me(r, 30)).add(i), s.add(me(o.add(Me), 18)).add(r), e);
}
function tC(n, t = n.length) {
  const e = Me.add(t * 2), s = Pt(n, 0).mul(Me), o = Pt(n, 8), r = Pt(n, t - 8).mul(e), i = Pt(n, t - 16).mul(Me), a = me(s.add(o), 43).add(me(r, 30)).add(i), l = Ms(a, s.add(me(o.add(Me), 18)).add(r), e), c = Pt(n, 16).mul(e), u = Pt(n, 24), d = a.add(Pt(n, t - 32)).mul(e), h = l.add(Pt(n, t - 24)).mul(e);
  return Ms(me(c.add(u), 43).add(me(d, 30)).add(h), c.add(me(u.add(s), 18)).add(d), e);
}
function db(n, t = n.length) {
  const e = oo.fromNumber(81, !0);
  if (t <= 32)
    return t <= 16 ? jI(n, t) : qI(n, t);
  if (t <= 64)
    return tC(n, t);
  let s = e, o = e.mul(so).add(113), r = ad(o.mul(Me).add(113)).mul(Me), i = [oo.UZERO, oo.UZERO], a = [oo.UZERO, oo.UZERO];
  s = s.mul(Me).add(Pt(n, 0));
  let l = 0;
  const c = (t - 1 >> 6) * 64, u = c + (t - 1 & 63) - 63;
  do
    s = me(s.add(o).add(i[0]).add(Pt(n, l + 8)), 37).mul(so), o = me(o.add(i[1]).add(Pt(n, l + 48)), 42).mul(so), s = s.xor(a[1]), o = o.add(i[0]).add(Pt(n, l + 40)), r = me(r.add(a[0]), 33).mul(so), i = Wa(n, l, i[1].mul(so), s.add(a[0])), a = Wa(n, l + 32, r.add(a[1]), o.add(Pt(n, l + 16))), [r, s] = [s, r], l += 64;
  while (l !== c);
  const d = so.add(r.and(255).shl(1));
  return l = u, a[0] = a[0].add(t - 1 & 63), i[0] = i[0].add(a[0]), a[0] = a[0].add(i[0]), s = me(s.add(o).add(i[0]).add(Pt(n, l + 8)), 37).mul(d), o = me(o.add(i[1]).add(Pt(n, l + 48)), 42).mul(d), s = s.xor(a[1].mul(9)), o = o.add(i[0].mul(9).add(Pt(n, l + 40))), r = me(r.add(a[0]), 33).mul(d), i = Wa(n, l, i[1].mul(d), s.add(a[0])), a = Wa(n, l + 32, r.add(a[1]), o.add(Pt(n, l + 16))), [r, s] = [s, r], Ms(Ms(i[0], a[0], d).add(ad(o).mul(cb)).add(r), Ms(i[1], a[1], d).add(s), d);
}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function bs(n, t) {
  return t === "string" ? hs(n) : Zs([n], t);
}
function eC(n, t) {
  return n instanceof Float32Array && t === "float32" || n instanceof Int32Array && t === "int32" || n instanceof Uint8Array && t === "bool";
}
function Zs(n, t) {
  if (t === "string")
    throw new Error("Cannot convert a string[] to a TypedArray");
  if (Array.isArray(n) && (n = zs(n)), F().getBool("DEBUG") && Dg(n, t), eC(n, t))
    return n;
  if (t == null || t === "float32" || t === "complex64")
    return new Float32Array(n);
  if (t === "int32")
    return new Int32Array(n);
  if (t === "bool") {
    const e = new Uint8Array(n.length);
    for (let s = 0; s < e.length; ++s)
      Math.round(n[s]) !== 0 && (e[s] = 1);
    return e;
  } else
    throw new Error(`Unknown data type ${t}`);
}
function Ce() {
  return F().platform.now();
}
function nC(n, t) {
  return F().platform.fetch(n, t);
}
function hs(n, t = "utf-8") {
  return t = t || "utf-8", F().platform.encode(n, t);
}
function ps(n, t = "utf-8") {
  return t = t || "utf-8", F().platform.decode(n, t);
}
function dn(n) {
  return F().platform.isTypedArray(n);
}
function zs(n, t = [], e = !1) {
  if (t == null && (t = []), typeof n == "boolean" || typeof n == "number" || typeof n == "string" || ui(n) || n == null || dn(n) && e)
    t.push(n);
  else if (Array.isArray(n) || dn(n))
    for (let s = 0; s < n.length; ++s)
      zs(n[s], t, e);
  else {
    let s = -1;
    for (const o of Object.keys(n))
      /^([1-9]+[0-9]*|0)$/.test(o) && (s = Math.max(s, Number(o)));
    for (let o = 0; o <= s; o++)
      zs(n[o], t, e);
  }
  return t;
}
const F4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arraysEqual: Rt,
  assert: v,
  assertNonNegativeIntegerDimensions: is,
  assertNonNull: Dl,
  assertShapesMatch: Ve,
  bytesFromStringArray: Vg,
  bytesPerElement: Ur,
  checkConversionForErrors: Dg,
  clamp: Fs,
  computeStrides: dt,
  convertBackendValuesAndArrayBuffer: Pg,
  createScalarValue: bs,
  createShuffledIndices: zI,
  decodeString: ps,
  distSquared: DI,
  encodeString: hs,
  fetch: nC,
  fingerPrint64: db,
  flatten: zs,
  getArrayFromDType: oe,
  getTypedArrayFromDType: xe,
  hasEncodingLoss: Od,
  hexToLong: ia,
  indexToLoc: Mo,
  inferDtype: gr,
  inferFromImplicitShape: Ad,
  isBoolean: zg,
  isFunction: Vs,
  isInt: go,
  isNumber: nl,
  isPromise: ui,
  isScalarShape: FI,
  isString: mr,
  isTypedArray: dn,
  isValidDtype: Fg,
  locToIndex: zn,
  makeOnesTypedArray: Fl,
  makeZerosNestedTypedArray: Kd,
  makeZerosTypedArray: Se,
  nearestDivisor: sl,
  nearestLargerEven: Wl,
  now: Ce,
  parseAxisParam: Ct,
  randUniform: WI,
  repeatedTry: td,
  rightPad: ho,
  shuffle: Pd,
  shuffleCombo: MI,
  sizeFromShape: O,
  sizeToSquarishShape: el,
  squeezeShape: gs,
  sum: Wg,
  swap: us,
  tanh: VI,
  toNestedArray: Sn,
  toTypedArray: Zs
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
class sC {
  constructor(t, e) {
    this.backendTimer = t, this.logger = e, e == null && (this.logger = new rC());
  }
  profileKernel(t, e, s) {
    let o;
    const r = () => {
      o = s();
    };
    let i;
    const a = Ce();
    if (this.backendTimer.timerAvailable())
      i = this.backendTimer.time(r);
    else {
      r();
      for (const c of o)
        c.dataSync();
      i = Promise.resolve({ kernelMs: Ce() - a });
    }
    if (F().getBool("CHECK_COMPUTATION_FOR_ERRORS"))
      for (let c = 0; c < o.length; c++) {
        const u = o[c];
        u.data().then((d) => {
          oC(d, u.dtype, t);
        });
      }
    return {
      kernelName: t,
      outputs: o,
      inputs: e,
      timeMs: i.then((c) => c.kernelMs),
      extraInfo: i.then((c) => c.getExtraProfileInfo != null ? c.getExtraProfileInfo() : "")
    };
  }
  logKernelProfile(t) {
    const { kernelName: e, outputs: s, timeMs: o, inputs: r, extraInfo: i } = t;
    s.forEach((a) => {
      Promise.all([a.data(), o, i]).then((l) => {
        this.logger.logKernelProfile(e, a, l[0], l[1], r, l[2]);
      });
    });
  }
}
function oC(n, t, e) {
  if (t !== "float32")
    return !1;
  for (let s = 0; s < n.length; s++) {
    const o = n[s];
    if (isNaN(o) || !isFinite(o))
      return console.warn(`Found ${o} in the result of '${e}'`), !0;
  }
  return !1;
}
class rC {
  logKernelProfile(t, e, s, o, r, i) {
    const a = typeof o == "number" ? ho(`${o}ms`, 9) : o.error, l = ho(t, 25), c = e.rank, u = e.size, d = ho(e.shape.toString(), 14);
    let h = "";
    for (const p in r) {
      const f = r[p];
      if (f != null) {
        const m = f.shape || e.shape, g = m.length;
        h += `${p}: ${g}D ${g > 0 ? m : ""} `;
      }
    }
    console.log(`%c${l}	%c${a}	%c${c}D ${d}	%c${u}	%c${h}	%c${i}`, "font-weight:bold", "color:red", "color:blue", "color: orange", "color: green", "color: steelblue");
  }
}
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
function iC(n, t, e) {
  const s = {}, o = {};
  for (let l = 0; l < t.length; l++)
    s[t[l].id] = !0;
  for (let l = 0; l < n.length; l++) {
    const c = n[l], u = c.inputs;
    for (const d in u) {
      const h = u[d];
      let p = !1;
      for (let f = 0; f < t.length; f++)
        if (s[h.id]) {
          c.outputs.forEach((m) => s[m.id] = !0), p = !0, o[c.id] = !0;
          break;
        }
      if (p)
        break;
    }
  }
  const r = {};
  r[e.id] = !0;
  const i = {};
  for (let l = n.length - 1; l >= 0; l--) {
    const c = n[l], u = c.inputs;
    for (let d = 0; d < c.outputs.length; d++)
      if (r[c.outputs[d].id]) {
        for (const h in u)
          r[u[h].id] = !0, i[c.id] = !0;
        break;
      }
  }
  const a = [];
  for (let l = 0; l < n.length; l++) {
    const c = n[l];
    if (o[c.id] && i[c.id]) {
      const u = {};
      for (const h in c.inputs) {
        const p = c.inputs[h];
        s[p.id] && (u[h] = p);
      }
      const d = Object.assign({}, c);
      d.inputs = u, d.outputs = c.outputs, a.push(d);
    }
  }
  return a;
}
function aC(n, t, e, s) {
  for (let o = t.length - 1; o >= 0; o--) {
    const r = t[o], i = [];
    if (r.outputs.forEach((l) => {
      const c = n[l.id];
      c != null ? i.push(c) : i.push(null);
    }), r.gradient == null)
      throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);
    const a = r.gradient(i);
    for (const l in r.inputs) {
      if (!(l in a))
        throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);
      const c = e(() => a[l]());
      if (c.dtype !== "float32")
        throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${c.dtype}'`);
      const u = r.inputs[l];
      if (!Rt(c.shape, u.shape))
        throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${l}' has shape '${c.shape}', which does not match the shape of the input '${u.shape}'`);
      if (n[u.id] == null)
        
