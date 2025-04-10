const __vite__fileDeps = ["assets/index-DrEFeciN.js", "assets/index-BfJtgWou.js", "assets/index-CUA7x2ci.css"],
    __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
import {
    u as $1,
    v as Mu,
    j as Fr,
    k as oa,
    w as Yr,
    U as Lu,
    _ as U1
} from "./index-BfJtgWou.js";
var ju = {},
    aa = {},
    Me = {},
    Hd = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });

    function e(f, p) {
        var y = f >>> 16 & 65535,
            m = f & 65535,
            b = p >>> 16 & 65535,
            P = p & 65535;
        return m * P + (y * P + m * b << 16 >>> 0) | 0
    }
    i.mul = Math.imul || e;

    function t(f, p) {
        return f + p | 0
    }
    i.add = t;

    function s(f, p) {
        return f - p | 0
    }
    i.sub = s;

    function o(f, p) {
        return f << p | f >>> 32 - p
    }
    i.rotl = o;

    function c(f, p) {
        return f << 32 - p | f >>> p
    }
    i.rotr = c;

    function d(f) {
        return typeof f == "number" && isFinite(f) && Math.floor(f) === f
    }
    i.isInteger = Number.isInteger || d, i.MAX_SAFE_INTEGER = 9007199254740991, i.isSafeInteger = function(f) {
        return i.isInteger(f) && f >= -i.MAX_SAFE_INTEGER && f <= i.MAX_SAFE_INTEGER
    }
})(Hd);
Object.defineProperty(Me, "__esModule", {
    value: !0
});
var Bd = Hd;

function M1(i, e) {
    return e === void 0 && (e = 0), (i[e + 0] << 8 | i[e + 1]) << 16 >> 16
}
Me.readInt16BE = M1;

function L1(i, e) {
    return e === void 0 && (e = 0), (i[e + 0] << 8 | i[e + 1]) >>> 0
}
Me.readUint16BE = L1;

function j1(i, e) {
    return e === void 0 && (e = 0), (i[e + 1] << 8 | i[e]) << 16 >> 16
}
Me.readInt16LE = j1;

function q1(i, e) {
    return e === void 0 && (e = 0), (i[e + 1] << 8 | i[e]) >>> 0
}
Me.readUint16LE = q1;

function Kd(i, e, t) {
    return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = i >>> 8, e[t + 1] = i >>> 0, e
}
Me.writeUint16BE = Kd;
Me.writeInt16BE = Kd;

function kd(i, e, t) {
    return e === void 0 && (e = new Uint8Array(2)), t === void 0 && (t = 0), e[t + 0] = i >>> 0, e[t + 1] = i >>> 8, e
}
Me.writeUint16LE = kd;
Me.writeInt16LE = kd;

function du(i, e) {
    return e === void 0 && (e = 0), i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3]
}
Me.readInt32BE = du;

function pu(i, e) {
    return e === void 0 && (e = 0), (i[e] << 24 | i[e + 1] << 16 | i[e + 2] << 8 | i[e + 3]) >>> 0
}
Me.readUint32BE = pu;

function gu(i, e) {
    return e === void 0 && (e = 0), i[e + 3] << 24 | i[e + 2] << 16 | i[e + 1] << 8 | i[e]
}
Me.readInt32LE = gu;

function yu(i, e) {
    return e === void 0 && (e = 0), (i[e + 3] << 24 | i[e + 2] << 16 | i[e + 1] << 8 | i[e]) >>> 0
}
Me.readUint32LE = yu;

function Zo(i, e, t) {
    return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = i >>> 24, e[t + 1] = i >>> 16, e[t + 2] = i >>> 8, e[t + 3] = i >>> 0, e
}
Me.writeUint32BE = Zo;
Me.writeInt32BE = Zo;

function ea(i, e, t) {
    return e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0), e[t + 0] = i >>> 0, e[t + 1] = i >>> 8, e[t + 2] = i >>> 16, e[t + 3] = i >>> 24, e
}
Me.writeUint32LE = ea;
Me.writeInt32LE = ea;

function F1(i, e) {
    e === void 0 && (e = 0);
    var t = du(i, e),
        s = du(i, e + 4);
    return t * 4294967296 + s - (s >> 31) * 4294967296
}
Me.readInt64BE = F1;

function z1(i, e) {
    e === void 0 && (e = 0);
    var t = pu(i, e),
        s = pu(i, e + 4);
    return t * 4294967296 + s
}
Me.readUint64BE = z1;

function H1(i, e) {
    e === void 0 && (e = 0);
    var t = gu(i, e),
        s = gu(i, e + 4);
    return s * 4294967296 + t - (t >> 31) * 4294967296
}
Me.readInt64LE = H1;

function B1(i, e) {
    e === void 0 && (e = 0);
    var t = yu(i, e),
        s = yu(i, e + 4);
    return s * 4294967296 + t
}
Me.readUint64LE = B1;

function Vd(i, e, t) {
    return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), Zo(i / 4294967296 >>> 0, e, t), Zo(i >>> 0, e, t + 4), e
}
Me.writeUint64BE = Vd;
Me.writeInt64BE = Vd;

function Wd(i, e, t) {
    return e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0), ea(i >>> 0, e, t), ea(i / 4294967296 >>> 0, e, t + 4), e
}
Me.writeUint64LE = Wd;
Me.writeInt64LE = Wd;

function K1(i, e, t) {
    if (t === void 0 && (t = 0), i % 8 !== 0) throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (i / 8 > e.length - t) throw new Error("readUintBE: array is too short for the given bitLength");
    for (var s = 0, o = 1, c = i / 8 + t - 1; c >= t; c--) s += e[c] * o, o *= 256;
    return s
}
Me.readUintBE = K1;

function k1(i, e, t) {
    if (t === void 0 && (t = 0), i % 8 !== 0) throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (i / 8 > e.length - t) throw new Error("readUintLE: array is too short for the given bitLength");
    for (var s = 0, o = 1, c = t; c < t + i / 8; c++) s += e[c] * o, o *= 256;
    return s
}
Me.readUintLE = k1;

function V1(i, e, t, s) {
    if (t === void 0 && (t = new Uint8Array(i / 8)), s === void 0 && (s = 0), i % 8 !== 0) throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!Bd.isSafeInteger(e)) throw new Error("writeUintBE value must be an integer");
    for (var o = 1, c = i / 8 + s - 1; c >= s; c--) t[c] = e / o & 255, o *= 256;
    return t
}
Me.writeUintBE = V1;

function W1(i, e, t, s) {
    if (t === void 0 && (t = new Uint8Array(i / 8)), s === void 0 && (s = 0), i % 8 !== 0) throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!Bd.isSafeInteger(e)) throw new Error("writeUintLE value must be an integer");
    for (var o = 1, c = s; c < s + i / 8; c++) t[c] = e / o & 255, o *= 256;
    return t
}
Me.writeUintLE = W1;

function G1(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
    return t.getFloat32(e)
}
Me.readFloat32BE = G1;

function Y1(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
    return t.getFloat32(e, !0)
}
Me.readFloat32LE = Y1;

function J1(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
    return t.getFloat64(e)
}
Me.readFloat64BE = J1;

function Q1(i, e) {
    e === void 0 && (e = 0);
    var t = new DataView(i.buffer, i.byteOffset, i.byteLength);
    return t.getFloat64(e, !0)
}
Me.readFloat64LE = Q1;

function X1(i, e, t) {
    e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
    var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return s.setFloat32(t, i), e
}
Me.writeFloat32BE = X1;

function Z1(i, e, t) {
    e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
    var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return s.setFloat32(t, i, !0), e
}
Me.writeFloat32LE = Z1;

function eb(i, e, t) {
    e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
    var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return s.setFloat64(t, i), e
}
Me.writeFloat64BE = eb;

function tb(i, e, t) {
    e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
    var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return s.setFloat64(t, i, !0), e
}
Me.writeFloat64LE = tb;
var Cr = {};
Object.defineProperty(Cr, "__esModule", {
    value: !0
});

function rb(i) {
    for (var e = 0; e < i.length; e++) i[e] = 0;
    return i
}
Cr.wipe = rb;
Object.defineProperty(aa, "__esModule", {
    value: !0
});
var Xt = Me,
    vu = Cr,
    ib = 20;

function nb(i, e, t) {
    for (var s = 1634760805, o = 857760878, c = 2036477234, d = 1797285236, f = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], p = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], y = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], m = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], b = t[19] << 24 | t[18] << 16 | t[17] << 8 | t[16], P = t[23] << 24 | t[22] << 16 | t[21] << 8 | t[20], O = t[27] << 24 | t[26] << 16 | t[25] << 8 | t[24], S = t[31] << 24 | t[30] << 16 | t[29] << 8 | t[28], K = e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0], B = e[7] << 24 | e[6] << 16 | e[5] << 8 | e[4], Z = e[11] << 24 | e[10] << 16 | e[9] << 8 | e[8], $ = e[15] << 24 | e[14] << 16 | e[13] << 8 | e[12], L = s, I = o, C = c, A = d, h = f, _ = p, ee = y, ne = m, ue = b, ge = P, ye = O, D = S, R = K, X = B, J = Z, k = $, V = 0; V < ib; V += 2) L = L + h | 0, R ^= L, R = R >>> 16 | R << 16, ue = ue + R | 0, h ^= ue, h = h >>> 20 | h << 12, I = I + _ | 0, X ^= I, X = X >>> 16 | X << 16, ge = ge + X | 0, _ ^= ge, _ = _ >>> 20 | _ << 12, C = C + ee | 0, J ^= C, J = J >>> 16 | J << 16, ye = ye + J | 0, ee ^= ye, ee = ee >>> 20 | ee << 12, A = A + ne | 0, k ^= A, k = k >>> 16 | k << 16, D = D + k | 0, ne ^= D, ne = ne >>> 20 | ne << 12, C = C + ee | 0, J ^= C, J = J >>> 24 | J << 8, ye = ye + J | 0, ee ^= ye, ee = ee >>> 25 | ee << 7, A = A + ne | 0, k ^= A, k = k >>> 24 | k << 8, D = D + k | 0, ne ^= D, ne = ne >>> 25 | ne << 7, I = I + _ | 0, X ^= I, X = X >>> 24 | X << 8, ge = ge + X | 0, _ ^= ge, _ = _ >>> 25 | _ << 7, L = L + h | 0, R ^= L, R = R >>> 24 | R << 8, ue = ue + R | 0, h ^= ue, h = h >>> 25 | h << 7, L = L + _ | 0, k ^= L, k = k >>> 16 | k << 16, ye = ye + k | 0, _ ^= ye, _ = _ >>> 20 | _ << 12, I = I + ee | 0, R ^= I, R = R >>> 16 | R << 16, D = D + R | 0, ee ^= D, ee = ee >>> 20 | ee << 12, C = C + ne | 0, X ^= C, X = X >>> 16 | X << 16, ue = ue + X | 0, ne ^= ue, ne = ne >>> 20 | ne << 12, A = A + h | 0, J ^= A, J = J >>> 16 | J << 16, ge = ge + J | 0, h ^= ge, h = h >>> 20 | h << 12, C = C + ne | 0, X ^= C, X = X >>> 24 | X << 8, ue = ue + X | 0, ne ^= ue, ne = ne >>> 25 | ne << 7, A = A + h | 0, J ^= A, J = J >>> 24 | J << 8, ge = ge + J | 0, h ^= ge, h = h >>> 25 | h << 7, I = I + ee | 0, R ^= I, R = R >>> 24 | R << 8, D = D + R | 0, ee ^= D, ee = ee >>> 25 | ee << 7, L = L + _ | 0, k ^= L, k = k >>> 24 | k << 8, ye = ye + k | 0, _ ^= ye, _ = _ >>> 25 | _ << 7;
    Xt.writeUint32LE(L + s | 0, i, 0), Xt.writeUint32LE(I + o | 0, i, 4), Xt.writeUint32LE(C + c | 0, i, 8), Xt.writeUint32LE(A + d | 0, i, 12), Xt.writeUint32LE(h + f | 0, i, 16), Xt.writeUint32LE(_ + p | 0, i, 20), Xt.writeUint32LE(ee + y | 0, i, 24), Xt.writeUint32LE(ne + m | 0, i, 28), Xt.writeUint32LE(ue + b | 0, i, 32), Xt.writeUint32LE(ge + P | 0, i, 36), Xt.writeUint32LE(ye + O | 0, i, 40), Xt.writeUint32LE(D + S | 0, i, 44), Xt.writeUint32LE(R + K | 0, i, 48), Xt.writeUint32LE(X + B | 0, i, 52), Xt.writeUint32LE(J + Z | 0, i, 56), Xt.writeUint32LE(k + $ | 0, i, 60)
}

function Gd(i, e, t, s, o) {
    if (o === void 0 && (o = 0), i.length !== 32) throw new Error("ChaCha: key size must be 32 bytes");
    if (s.length < t.length) throw new Error("ChaCha: destination is shorter than source");
    var c, d;
    if (o === 0) {
        if (e.length !== 8 && e.length !== 12) throw new Error("ChaCha nonce must be 8 or 12 bytes");
        c = new Uint8Array(16), d = c.length - e.length, c.set(e, d)
    } else {
        if (e.length !== 16) throw new Error("ChaCha nonce with counter must be 16 bytes");
        c = e, d = o
    }
    for (var f = new Uint8Array(64), p = 0; p < t.length; p += 64) {
        nb(f, c, i);
        for (var y = p; y < p + 64 && y < t.length; y++) s[y] = t[y] ^ f[y - p];
        ob(c, 0, d)
    }
    return vu.wipe(f), o === 0 && vu.wipe(c), s
}
aa.streamXOR = Gd;

function sb(i, e, t, s) {
    return s === void 0 && (s = 0), vu.wipe(t), Gd(i, e, t, t, s)
}
aa.stream = sb;

function ob(i, e, t) {
    for (var s = 1; t--;) s = s + (i[e] & 255) | 0, i[e] = s & 255, s >>>= 8, e++;
    if (s > 0) throw new Error("ChaCha: counter overflow")
}
var Yd = {},
    zi = {};
Object.defineProperty(zi, "__esModule", {
    value: !0
});

function ab(i, e, t) {
    return ~(i - 1) & e | i - 1 & t
}
zi.select = ab;

function cb(i, e) {
    return (i | 0) - (e | 0) - 1 >>> 31 & 1
}
zi.lessOrEqual = cb;

function Jd(i, e) {
    if (i.length !== e.length) return 0;
    for (var t = 0, s = 0; s < i.length; s++) t |= i[s] ^ e[s];
    return 1 & t - 1 >>> 8
}
zi.compare = Jd;

function ub(i, e) {
    return i.length === 0 || e.length === 0 ? !1 : Jd(i, e) !== 0
}
zi.equal = ub;
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = zi,
        t = Cr;
    i.DIGEST_LENGTH = 16;
    var s = function() {
        function d(f) {
            this.digestLength = i.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
            var p = f[0] | f[1] << 8;
            this._r[0] = p & 8191;
            var y = f[2] | f[3] << 8;
            this._r[1] = (p >>> 13 | y << 3) & 8191;
            var m = f[4] | f[5] << 8;
            this._r[2] = (y >>> 10 | m << 6) & 7939;
            var b = f[6] | f[7] << 8;
            this._r[3] = (m >>> 7 | b << 9) & 8191;
            var P = f[8] | f[9] << 8;
            this._r[4] = (b >>> 4 | P << 12) & 255, this._r[5] = P >>> 1 & 8190;
            var O = f[10] | f[11] << 8;
            this._r[6] = (P >>> 14 | O << 2) & 8191;
            var S = f[12] | f[13] << 8;
            this._r[7] = (O >>> 11 | S << 5) & 8065;
            var K = f[14] | f[15] << 8;
            this._r[8] = (S >>> 8 | K << 8) & 8191, this._r[9] = K >>> 5 & 127, this._pad[0] = f[16] | f[17] << 8, this._pad[1] = f[18] | f[19] << 8, this._pad[2] = f[20] | f[21] << 8, this._pad[3] = f[22] | f[23] << 8, this._pad[4] = f[24] | f[25] << 8, this._pad[5] = f[26] | f[27] << 8, this._pad[6] = f[28] | f[29] << 8, this._pad[7] = f[30] | f[31] << 8
        }
        return d.prototype._blocks = function(f, p, y) {
            for (var m = this._fin ? 0 : 2048, b = this._h[0], P = this._h[1], O = this._h[2], S = this._h[3], K = this._h[4], B = this._h[5], Z = this._h[6], $ = this._h[7], L = this._h[8], I = this._h[9], C = this._r[0], A = this._r[1], h = this._r[2], _ = this._r[3], ee = this._r[4], ne = this._r[5], ue = this._r[6], ge = this._r[7], ye = this._r[8], D = this._r[9]; y >= 16;) {
                var R = f[p + 0] | f[p + 1] << 8;
                b += R & 8191;
                var X = f[p + 2] | f[p + 3] << 8;
                P += (R >>> 13 | X << 3) & 8191;
                var J = f[p + 4] | f[p + 5] << 8;
                O += (X >>> 10 | J << 6) & 8191;
                var k = f[p + 6] | f[p + 7] << 8;
                S += (J >>> 7 | k << 9) & 8191;
                var V = f[p + 8] | f[p + 9] << 8;
                K += (k >>> 4 | V << 12) & 8191, B += V >>> 1 & 8191;
                var te = f[p + 10] | f[p + 11] << 8;
                Z += (V >>> 14 | te << 2) & 8191;
                var ie = f[p + 12] | f[p + 13] << 8;
                $ += (te >>> 11 | ie << 5) & 8191;
                var De = f[p + 14] | f[p + 15] << 8;
                L += (ie >>> 8 | De << 8) & 8191, I += De >>> 5 | m;
                var oe = 0,
                    Se = oe;
                Se += b * C, Se += P * (5 * D), Se += O * (5 * ye), Se += S * (5 * ge), Se += K * (5 * ue), oe = Se >>> 13, Se &= 8191, Se += B * (5 * ne), Se += Z * (5 * ee), Se += $ * (5 * _), Se += L * (5 * h), Se += I * (5 * A), oe += Se >>> 13, Se &= 8191;
                var le = oe;
                le += b * A, le += P * C, le += O * (5 * D), le += S * (5 * ye), le += K * (5 * ge), oe = le >>> 13, le &= 8191, le += B * (5 * ue), le += Z * (5 * ne), le += $ * (5 * ee), le += L * (5 * _), le += I * (5 * h), oe += le >>> 13, le &= 8191;
                var Ae = oe;
                Ae += b * h, Ae += P * A, Ae += O * C, Ae += S * (5 * D), Ae += K * (5 * ye), oe = Ae >>> 13, Ae &= 8191, Ae += B * (5 * ge), Ae += Z * (5 * ue), Ae += $ * (5 * ne), Ae += L * (5 * ee), Ae += I * (5 * _), oe += Ae >>> 13, Ae &= 8191;
                var z = oe;
                z += b * _, z += P * h, z += O * A, z += S * C, z += K * (5 * D), oe = z >>> 13, z &= 8191, z += B * (5 * ye), z += Z * (5 * ge), z += $ * (5 * ue), z += L * (5 * ne), z += I * (5 * ee), oe += z >>> 13, z &= 8191;
                var F = oe;
                F += b * ee, F += P * _, F += O * h, F += S * A, F += K * C, oe = F >>> 13, F &= 8191, F += B * (5 * D), F += Z * (5 * ye), F += $ * (5 * ge), F += L * (5 * ue), F += I * (5 * ne), oe += F >>> 13, F &= 8191;
                var U = oe;
                U += b * ne, U += P * ee, U += O * _, U += S * h, U += K * A, oe = U >>> 13, U &= 8191, U += B * C, U += Z * (5 * D), U += $ * (5 * ye), U += L * (5 * ge), U += I * (5 * ue), oe += U >>> 13, U &= 8191;
                var l = oe;
                l += b * ue, l += P * ne, l += O * ee, l += S * _, l += K * h, oe = l >>> 13, l &= 8191, l += B * A, l += Z * C, l += $ * (5 * D), l += L * (5 * ye), l += I * (5 * ge), oe += l >>> 13, l &= 8191;
                var T = oe;
                T += b * ge, T += P * ue, T += O * ne, T += S * ee, T += K * _, oe = T >>> 13, T &= 8191, T += B * h, T += Z * A, T += $ * C, T += L * (5 * D), T += I * (5 * ye), oe += T >>> 13, T &= 8191;
                var se = oe;
                se += b * ye, se += P * ge, se += O * ue, se += S * ne, se += K * ee, oe = se >>> 13, se &= 8191, se += B * _, se += Z * h, se += $ * A, se += L * C, se += I * (5 * D), oe += se >>> 13, se &= 8191;
                var he = oe;
                he += b * D, he += P * ye, he += O * ge, he += S * ue, he += K * ne, oe = he >>> 13, he &= 8191, he += B * ee, he += Z * _, he += $ * h, he += L * A, he += I * C, oe += he >>> 13, he &= 8191, oe = (oe << 2) + oe | 0, oe = oe + Se | 0, Se = oe & 8191, oe = oe >>> 13, le += oe, b = Se, P = le, O = Ae, S = z, K = F, B = U, Z = l, $ = T, L = se, I = he, p += 16, y -= 16
            }
            this._h[0] = b, this._h[1] = P, this._h[2] = O, this._h[3] = S, this._h[4] = K, this._h[5] = B, this._h[6] = Z, this._h[7] = $, this._h[8] = L, this._h[9] = I
        }, d.prototype.finish = function(f, p) {
            p === void 0 && (p = 0);
            var y = new Uint16Array(10),
                m, b, P, O;
            if (this._leftover) {
                for (O = this._leftover, this._buffer[O++] = 1; O < 16; O++) this._buffer[O] = 0;
                this._fin = 1, this._blocks(this._buffer, 0, 16)
            }
            for (m = this._h[1] >>> 13, this._h[1] &= 8191, O = 2; O < 10; O++) this._h[O] += m, m = this._h[O] >>> 13, this._h[O] &= 8191;
            for (this._h[0] += m * 5, m = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += m, m = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += m, y[0] = this._h[0] + 5, m = y[0] >>> 13, y[0] &= 8191, O = 1; O < 10; O++) y[O] = this._h[O] + m, m = y[O] >>> 13, y[O] &= 8191;
            for (y[9] -= 8192, b = (m ^ 1) - 1, O = 0; O < 10; O++) y[O] &= b;
            for (b = ~b, O = 0; O < 10; O++) this._h[O] = this._h[O] & b | y[O];
            for (this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, P = this._h[0] + this._pad[0], this._h[0] = P & 65535, O = 1; O < 8; O++) P = (this._h[O] + this._pad[O] | 0) + (P >>> 16) | 0, this._h[O] = P & 65535;
            return f[p + 0] = this._h[0] >>> 0, f[p + 1] = this._h[0] >>> 8, f[p + 2] = this._h[1] >>> 0, f[p + 3] = this._h[1] >>> 8, f[p + 4] = this._h[2] >>> 0, f[p + 5] = this._h[2] >>> 8, f[p + 6] = this._h[3] >>> 0, f[p + 7] = this._h[3] >>> 8, f[p + 8] = this._h[4] >>> 0, f[p + 9] = this._h[4] >>> 8, f[p + 10] = this._h[5] >>> 0, f[p + 11] = this._h[5] >>> 8, f[p + 12] = this._h[6] >>> 0, f[p + 13] = this._h[6] >>> 8, f[p + 14] = this._h[7] >>> 0, f[p + 15] = this._h[7] >>> 8, this._finished = !0, this
        }, d.prototype.update = function(f) {
            var p = 0,
                y = f.length,
                m;
            if (this._leftover) {
                m = 16 - this._leftover, m > y && (m = y);
                for (var b = 0; b < m; b++) this._buffer[this._leftover + b] = f[p + b];
                if (y -= m, p += m, this._leftover += m, this._leftover < 16) return this;
                this._blocks(this._buffer, 0, 16), this._leftover = 0
            }
            if (y >= 16 && (m = y - y % 16, this._blocks(f, p, m), p += m, y -= m), y) {
                for (var b = 0; b < y; b++) this._buffer[this._leftover + b] = f[p + b];
                this._leftover += y
            }
            return this
        }, d.prototype.digest = function() {
            if (this._finished) throw new Error("Poly1305 was finished");
            var f = new Uint8Array(16);
            return this.finish(f), f
        }, d.prototype.clean = function() {
            return t.wipe(this._buffer), t.wipe(this._r), t.wipe(this._h), t.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
        }, d
    }();
    i.Poly1305 = s;

    function o(d, f) {
        var p = new s(d);
        p.update(f);
        var y = p.digest();
        return p.clean(), y
    }
    i.oneTimeAuth = o;

    function c(d, f) {
        return d.length !== i.DIGEST_LENGTH || f.length !== i.DIGEST_LENGTH ? !1 : e.equal(d, f)
    }
    i.equal = c
})(Yd);
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = aa,
        t = Yd,
        s = Cr,
        o = Me,
        c = zi;
    i.KEY_LENGTH = 32, i.NONCE_LENGTH = 12, i.TAG_LENGTH = 16;
    var d = new Uint8Array(16),
        f = function() {
            function p(y) {
                if (this.nonceLength = i.NONCE_LENGTH, this.tagLength = i.TAG_LENGTH, y.length !== i.KEY_LENGTH) throw new Error("ChaCha20Poly1305 needs 32-byte key");
                this._key = new Uint8Array(y)
            }
            return p.prototype.seal = function(y, m, b, P) {
                if (y.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                var O = new Uint8Array(16);
                O.set(y, O.length - y.length);
                var S = new Uint8Array(32);
                e.stream(this._key, O, S, 4);
                var K = m.length + this.tagLength,
                    B;
                if (P) {
                    if (P.length !== K) throw new Error("ChaCha20Poly1305: incorrect destination length");
                    B = P
                } else B = new Uint8Array(K);
                return e.streamXOR(this._key, O, m, B, 4), this._authenticate(B.subarray(B.length - this.tagLength, B.length), S, B.subarray(0, B.length - this.tagLength), b), s.wipe(O), B
            }, p.prototype.open = function(y, m, b, P) {
                if (y.length > 16) throw new Error("ChaCha20Poly1305: incorrect nonce length");
                if (m.length < this.tagLength) return null;
                var O = new Uint8Array(16);
                O.set(y, O.length - y.length);
                var S = new Uint8Array(32);
                e.stream(this._key, O, S, 4);
                var K = new Uint8Array(this.tagLength);
                if (this._authenticate(K, S, m.subarray(0, m.length - this.tagLength), b), !c.equal(K, m.subarray(m.length - this.tagLength, m.length))) return null;
                var B = m.length - this.tagLength,
                    Z;
                if (P) {
                    if (P.length !== B) throw new Error("ChaCha20Poly1305: incorrect destination length");
                    Z = P
                } else Z = new Uint8Array(B);
                return e.streamXOR(this._key, O, m.subarray(0, m.length - this.tagLength), Z, 4), s.wipe(O), Z
            }, p.prototype.clean = function() {
                return s.wipe(this._key), this
            }, p.prototype._authenticate = function(y, m, b, P) {
                var O = new t.Poly1305(m);
                P && (O.update(P), P.length % 16 > 0 && O.update(d.subarray(P.length % 16))), O.update(b), b.length % 16 > 0 && O.update(d.subarray(b.length % 16));
                var S = new Uint8Array(8);
                P && o.writeUint64LE(P.length, S), O.update(S), o.writeUint64LE(b.length, S), O.update(S);
                for (var K = O.digest(), B = 0; B < K.length; B++) y[B] = K[B];
                O.clean(), s.wipe(K), s.wipe(S)
            }, p
        }();
    i.ChaCha20Poly1305 = f
})(ju);
var Qd = {},
    As = {},
    qu = {};
Object.defineProperty(qu, "__esModule", {
    value: !0
});

function hb(i) {
    return typeof i.saveState < "u" && typeof i.restoreState < "u" && typeof i.cleanSavedState < "u"
}
qu.isSerializableHash = hb;
Object.defineProperty(As, "__esModule", {
    value: !0
});
var ri = qu,
    lb = zi,
    fb = Cr,
    Xd = function() {
        function i(e, t) {
            this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
            var s = new Uint8Array(this.blockSize);
            t.length > this.blockSize ? this._inner.update(t).finish(s).clean() : s.set(t);
            for (var o = 0; o < s.length; o++) s[o] ^= 54;
            this._inner.update(s);
            for (var o = 0; o < s.length; o++) s[o] ^= 106;
            this._outer.update(s), ri.isSerializableHash(this._inner) && ri.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), fb.wipe(s)
        }
        return i.prototype.reset = function() {
            if (!ri.isSerializableHash(this._inner) || !ri.isSerializableHash(this._outer)) throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");
            return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
        }, i.prototype.clean = function() {
            ri.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), ri.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
        }, i.prototype.update = function(e) {
            return this._inner.update(e), this
        }, i.prototype.finish = function(e) {
            return this._finished ? (this._outer.finish(e), this) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0, this)
        }, i.prototype.digest = function() {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e
        }, i.prototype.saveState = function() {
            if (!ri.isSerializableHash(this._inner)) throw new Error("hmac: can't saveState() because hash doesn't implement it");
            return this._inner.saveState()
        }, i.prototype.restoreState = function(e) {
            if (!ri.isSerializableHash(this._inner) || !ri.isSerializableHash(this._outer)) throw new Error("hmac: can't restoreState() because hash doesn't implement it");
            return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
        }, i.prototype.cleanSavedState = function(e) {
            if (!ri.isSerializableHash(this._inner)) throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");
            this._inner.cleanSavedState(e)
        }, i
    }();
As.HMAC = Xd;

function db(i, e, t) {
    var s = new Xd(i, e);
    s.update(t);
    var o = s.digest();
    return s.clean(), o
}
As.hmac = db;
As.equal = lb.equal;
Object.defineProperty(Qd, "__esModule", {
    value: !0
});
var sf = As,
    of = Cr,
    pb = function() {
        function i(e, t, s, o) {
            s === void 0 && (s = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = o;
            var c = sf.hmac(this._hash, s, t);
            this._hmac = new sf.HMAC(e, c), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
        }
        return i.prototype._fillBuffer = function() {
            this._counter[0]++;
            var e = this._counter[0];
            if (e === 0) throw new Error("hkdf: cannot expand more");
            this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
        }, i.prototype.expand = function(e) {
            for (var t = new Uint8Array(e), s = 0; s < t.length; s++) this._bufpos === this._buffer.length && this._fillBuffer(), t[s] = this._buffer[this._bufpos++];
            return t
        }, i.prototype.clean = function() {
            this._hmac.clean(), of .wipe(this._buffer), of .wipe(this._counter), this._bufpos = 0
        }, i
    }(),
    gb = Qd.HKDF = pb,
    Hn = {},
    ca = {},
    ua = {};
Object.defineProperty(ua, "__esModule", {
    value: !0
});
ua.BrowserRandomSource = void 0;
const af = 65536;
class yb {
    constructor() {
        this.isAvailable = !1, this.isInstantiated = !1;
        const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
        e && e.getRandomValues !== void 0 && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
    }
    randomBytes(e) {
        if (!this.isAvailable || !this._crypto) throw new Error("Browser random byte generator is not available.");
        const t = new Uint8Array(e);
        for (let s = 0; s < t.length; s += af) this._crypto.getRandomValues(t.subarray(s, s + Math.min(t.length - s, af)));
        return t
    }
}
ua.BrowserRandomSource = yb;

function vb(i) {
    throw new Error('Could not dynamically require "' + i + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var ha = {};
Object.defineProperty(ha, "__esModule", {
    value: !0
});
ha.NodeRandomSource = void 0;
const mb = Cr;
class wb {
    constructor() {
        if (this.isAvailable = !1, this.isInstantiated = !1, typeof vb < "u") {
            const e = $1;
            e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
        }
    }
    randomBytes(e) {
        if (!this.isAvailable || !this._crypto) throw new Error("Node.js random byte generator is not available.");
        let t = this._crypto.randomBytes(e);
        if (t.length !== e) throw new Error("NodeRandomSource: got fewer bytes than requested");
        const s = new Uint8Array(e);
        for (let o = 0; o < s.length; o++) s[o] = t[o];
        return (0, mb.wipe)(t), s
    }
}
ha.NodeRandomSource = wb;
Object.defineProperty(ca, "__esModule", {
    value: !0
});
ca.SystemRandomSource = void 0;
const bb = ua,
    _b = ha;
class Eb {
    constructor() {
        if (this.isAvailable = !1, this.name = "", this._source = new bb.BrowserRandomSource, this._source.isAvailable) {
            this.isAvailable = !0, this.name = "Browser";
            return
        }
        if (this._source = new _b.NodeRandomSource, this._source.isAvailable) {
            this.isAvailable = !0, this.name = "Node";
            return
        }
    }
    randomBytes(e) {
        if (!this.isAvailable) throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(e)
    }
}
ca.SystemRandomSource = Eb;
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.randomStringForEntropy = i.randomString = i.randomUint32 = i.randomBytes = i.defaultRandomSource = void 0;
    const e = ca,
        t = Me,
        s = Cr;
    i.defaultRandomSource = new e.SystemRandomSource;

    function o(y, m = i.defaultRandomSource) {
        return m.randomBytes(y)
    }
    i.randomBytes = o;

    function c(y = i.defaultRandomSource) {
        const m = o(4, y),
            b = (0, t.readUint32LE)(m);
        return (0, s.wipe)(m), b
    }
    i.randomUint32 = c;
    const d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    function f(y, m = d, b = i.defaultRandomSource) {
        if (m.length < 2) throw new Error("randomString charset is too short");
        if (m.length > 256) throw new Error("randomString charset is too long");
        let P = "";
        const O = m.length,
            S = 256 - 256 % O;
        for (; y > 0;) {
            const K = o(Math.ceil(y * 256 / S), b);
            for (let B = 0; B < K.length && y > 0; B++) {
                const Z = K[B];
                Z < S && (P += m.charAt(Z % O), y--)
            }(0, s.wipe)(K)
        }
        return P
    }
    i.randomString = f;

    function p(y, m = d, b = i.defaultRandomSource) {
        const P = Math.ceil(y / (Math.log(m.length) / Math.LN2));
        return f(P, m, b)
    }
    i.randomStringForEntropy = p
})(Hn);
var la = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = Me,
        t = Cr;
    i.DIGEST_LENGTH = 32, i.BLOCK_SIZE = 64;
    var s = function() {
        function f() {
            this.digestLength = i.DIGEST_LENGTH, this.blockSize = i.BLOCK_SIZE, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return f.prototype._initState = function() {
            this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
        }, f.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, f.prototype.clean = function() {
            t.wipe(this._buffer), t.wipe(this._temp), this.reset()
        }, f.prototype.update = function(p, y) {
            if (y === void 0 && (y = p.length), this._finished) throw new Error("SHA256: can't update because hash was finished.");
            var m = 0;
            if (this._bytesHashed += y, this._bufferLength > 0) {
                for (; this._bufferLength < this.blockSize && y > 0;) this._buffer[this._bufferLength++] = p[m++], y--;
                this._bufferLength === this.blockSize && (c(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (y >= this.blockSize && (m = c(this._temp, this._state, p, m, y), y %= this.blockSize); y > 0;) this._buffer[this._bufferLength++] = p[m++], y--;
            return this
        }, f.prototype.finish = function(p) {
            if (!this._finished) {
                var y = this._bytesHashed,
                    m = this._bufferLength,
                    b = y / 536870912 | 0,
                    P = y << 3,
                    O = y % 64 < 56 ? 64 : 128;
                this._buffer[m] = 128;
                for (var S = m + 1; S < O - 8; S++) this._buffer[S] = 0;
                e.writeUint32BE(b, this._buffer, O - 8), e.writeUint32BE(P, this._buffer, O - 4), c(this._temp, this._state, this._buffer, 0, O), this._finished = !0
            }
            for (var S = 0; S < this.digestLength / 4; S++) e.writeUint32BE(this._state[S], p, S * 4);
            return this
        }, f.prototype.digest = function() {
            var p = new Uint8Array(this.digestLength);
            return this.finish(p), p
        }, f.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                state: new Int32Array(this._state),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, f.prototype.restoreState = function(p) {
            return this._state.set(p.state), this._bufferLength = p.bufferLength, p.buffer && this._buffer.set(p.buffer), this._bytesHashed = p.bytesHashed, this._finished = !1, this
        }, f.prototype.cleanSavedState = function(p) {
            t.wipe(p.state), p.buffer && t.wipe(p.buffer), p.bufferLength = 0, p.bytesHashed = 0
        }, f
    }();
    i.SHA256 = s;
    var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

    function c(f, p, y, m, b) {
        for (; b >= 64;) {
            for (var P = p[0], O = p[1], S = p[2], K = p[3], B = p[4], Z = p[5], $ = p[6], L = p[7], I = 0; I < 16; I++) {
                var C = m + I * 4;
                f[I] = e.readUint32BE(y, C)
            }
            for (var I = 16; I < 64; I++) {
                var A = f[I - 2],
                    h = (A >>> 17 | A << 15) ^ (A >>> 19 | A << 13) ^ A >>> 10;
                A = f[I - 15];
                var _ = (A >>> 7 | A << 25) ^ (A >>> 18 | A << 14) ^ A >>> 3;
                f[I] = (h + f[I - 7] | 0) + (_ + f[I - 16] | 0)
            }
            for (var I = 0; I < 64; I++) {
                var h = (((B >>> 6 | B << 26) ^ (B >>> 11 | B << 21) ^ (B >>> 25 | B << 7)) + (B & Z ^ ~B & $) | 0) + (L + (o[I] + f[I] | 0) | 0) | 0,
                    _ = ((P >>> 2 | P << 30) ^ (P >>> 13 | P << 19) ^ (P >>> 22 | P << 10)) + (P & O ^ P & S ^ O & S) | 0;
                L = $, $ = Z, Z = B, B = K + h | 0, K = S, S = O, O = P, P = h + _ | 0
            }
            p[0] += P, p[1] += O, p[2] += S, p[3] += K, p[4] += B, p[5] += Z, p[6] += $, p[7] += L, m += 64, b -= 64
        }
        return m
    }

    function d(f) {
        var p = new s;
        p.update(f);
        var y = p.digest();
        return p.clean(), y
    }
    i.hash = d
})(la);
var Fu = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.sharedKey = i.generateKeyPair = i.generateKeyPairFromSeed = i.scalarMultBase = i.scalarMult = i.SHARED_KEY_LENGTH = i.SECRET_KEY_LENGTH = i.PUBLIC_KEY_LENGTH = void 0;
    const e = Hn,
        t = Cr;
    i.PUBLIC_KEY_LENGTH = 32, i.SECRET_KEY_LENGTH = 32, i.SHARED_KEY_LENGTH = 32;

    function s(I) {
        const C = new Float64Array(16);
        if (I)
            for (let A = 0; A < I.length; A++) C[A] = I[A];
        return C
    }
    const o = new Uint8Array(32);
    o[0] = 9;
    const c = s([56129, 1]);

    function d(I) {
        let C = 1;
        for (let A = 0; A < 16; A++) {
            let h = I[A] + C + 65535;
            C = Math.floor(h / 65536), I[A] = h - C * 65536
        }
        I[0] += C - 1 + 37 * (C - 1)
    }

    function f(I, C, A) {
        const h = ~(A - 1);
        for (let _ = 0; _ < 16; _++) {
            const ee = h & (I[_] ^ C[_]);
            I[_] ^= ee, C[_] ^= ee
        }
    }

    function p(I, C) {
        const A = s(),
            h = s();
        for (let _ = 0; _ < 16; _++) h[_] = C[_];
        d(h), d(h), d(h);
        for (let _ = 0; _ < 2; _++) {
            A[0] = h[0] - 65517;
            for (let ne = 1; ne < 15; ne++) A[ne] = h[ne] - 65535 - (A[ne - 1] >> 16 & 1), A[ne - 1] &= 65535;
            A[15] = h[15] - 32767 - (A[14] >> 16 & 1);
            const ee = A[15] >> 16 & 1;
            A[14] &= 65535, f(h, A, 1 - ee)
        }
        for (let _ = 0; _ < 16; _++) I[2 * _] = h[_] & 255, I[2 * _ + 1] = h[_] >> 8
    }

    function y(I, C) {
        for (let A = 0; A < 16; A++) I[A] = C[2 * A] + (C[2 * A + 1] << 8);
        I[15] &= 32767
    }

    function m(I, C, A) {
        for (let h = 0; h < 16; h++) I[h] = C[h] + A[h]
    }

    function b(I, C, A) {
        for (let h = 0; h < 16; h++) I[h] = C[h] - A[h]
    }

    function P(I, C, A) {
        let h, _, ee = 0,
            ne = 0,
            ue = 0,
            ge = 0,
            ye = 0,
            D = 0,
            R = 0,
            X = 0,
            J = 0,
            k = 0,
            V = 0,
            te = 0,
            ie = 0,
            De = 0,
            oe = 0,
            Se = 0,
            le = 0,
            Ae = 0,
            z = 0,
            F = 0,
            U = 0,
            l = 0,
            T = 0,
            se = 0,
            he = 0,
            Ee = 0,
            He = 0,
            ke = 0,
            Le = 0,
            dt = 0,
            pt = 0,
            qe = A[0],
            Ie = A[1],
            Ne = A[2],
            $e = A[3],
            Fe = A[4],
            Pe = A[5],
            Ue = A[6],
            _e = A[7],
            Oe = A[8],
            Be = A[9],
            xe = A[10],
            Ve = A[11],
            Ge = A[12],
            Ze = A[13],
            et = A[14],
            Je = A[15];
        h = C[0], ee += h * qe, ne += h * Ie, ue += h * Ne, ge += h * $e, ye += h * Fe, D += h * Pe, R += h * Ue, X += h * _e, J += h * Oe, k += h * Be, V += h * xe, te += h * Ve, ie += h * Ge, De += h * Ze, oe += h * et, Se += h * Je, h = C[1], ne += h * qe, ue += h * Ie, ge += h * Ne, ye += h * $e, D += h * Fe, R += h * Pe, X += h * Ue, J += h * _e, k += h * Oe, V += h * Be, te += h * xe, ie += h * Ve, De += h * Ge, oe += h * Ze, Se += h * et, le += h * Je, h = C[2], ue += h * qe, ge += h * Ie, ye += h * Ne, D += h * $e, R += h * Fe, X += h * Pe, J += h * Ue, k += h * _e, V += h * Oe, te += h * Be, ie += h * xe, De += h * Ve, oe += h * Ge, Se += h * Ze, le += h * et, Ae += h * Je, h = C[3], ge += h * qe, ye += h * Ie, D += h * Ne, R += h * $e, X += h * Fe, J += h * Pe, k += h * Ue, V += h * _e, te += h * Oe, ie += h * Be, De += h * xe, oe += h * Ve, Se += h * Ge, le += h * Ze, Ae += h * et, z += h * Je, h = C[4], ye += h * qe, D += h * Ie, R += h * Ne, X += h * $e, J += h * Fe, k += h * Pe, V += h * Ue, te += h * _e, ie += h * Oe, De += h * Be, oe += h * xe, Se += h * Ve, le += h * Ge, Ae += h * Ze, z += h * et, F += h * Je, h = C[5], D += h * qe, R += h * Ie, X += h * Ne, J += h * $e, k += h * Fe, V += h * Pe, te += h * Ue, ie += h * _e, De += h * Oe, oe += h * Be, Se += h * xe, le += h * Ve, Ae += h * Ge, z += h * Ze, F += h * et, U += h * Je, h = C[6], R += h * qe, X += h * Ie, J += h * Ne, k += h * $e, V += h * Fe, te += h * Pe, ie += h * Ue, De += h * _e, oe += h * Oe, Se += h * Be, le += h * xe, Ae += h * Ve, z += h * Ge, F += h * Ze, U += h * et, l += h * Je, h = C[7], X += h * qe, J += h * Ie, k += h * Ne, V += h * $e, te += h * Fe, ie += h * Pe, De += h * Ue, oe += h * _e, Se += h * Oe, le += h * Be, Ae += h * xe, z += h * Ve, F += h * Ge, U += h * Ze, l += h * et, T += h * Je, h = C[8], J += h * qe, k += h * Ie, V += h * Ne, te += h * $e, ie += h * Fe, De += h * Pe, oe += h * Ue, Se += h * _e, le += h * Oe, Ae += h * Be, z += h * xe, F += h * Ve, U += h * Ge, l += h * Ze, T += h * et, se += h * Je, h = C[9], k += h * qe, V += h * Ie, te += h * Ne, ie += h * $e, De += h * Fe, oe += h * Pe, Se += h * Ue, le += h * _e, Ae += h * Oe, z += h * Be, F += h * xe, U += h * Ve, l += h * Ge, T += h * Ze, se += h * et, he += h * Je, h = C[10], V += h * qe, te += h * Ie, ie += h * Ne, De += h * $e, oe += h * Fe, Se += h * Pe, le += h * Ue, Ae += h * _e, z += h * Oe, F += h * Be, U += h * xe, l += h * Ve, T += h * Ge, se += h * Ze, he += h * et, Ee += h * Je, h = C[11], te += h * qe, ie += h * Ie, De += h * Ne, oe += h * $e, Se += h * Fe, le += h * Pe, Ae += h * Ue, z += h * _e, F += h * Oe, U += h * Be, l += h * xe, T += h * Ve, se += h * Ge, he += h * Ze, Ee += h * et, He += h * Je, h = C[12], ie += h * qe, De += h * Ie, oe += h * Ne, Se += h * $e, le += h * Fe, Ae += h * Pe, z += h * Ue, F += h * _e, U += h * Oe, l += h * Be, T += h * xe, se += h * Ve, he += h * Ge, Ee += h * Ze, He += h * et, ke += h * Je, h = C[13], De += h * qe, oe += h * Ie, Se += h * Ne, le += h * $e, Ae += h * Fe, z += h * Pe, F += h * Ue, U += h * _e, l += h * Oe, T += h * Be, se += h * xe, he += h * Ve, Ee += h * Ge, He += h * Ze, ke += h * et, Le += h * Je, h = C[14], oe += h * qe, Se += h * Ie, le += h * Ne, Ae += h * $e, z += h * Fe, F += h * Pe, U += h * Ue, l += h * _e, T += h * Oe, se += h * Be, he += h * xe, Ee += h * Ve, He += h * Ge, ke += h * Ze, Le += h * et, dt += h * Je, h = C[15], Se += h * qe, le += h * Ie, Ae += h * Ne, z += h * $e, F += h * Fe, U += h * Pe, l += h * Ue, T += h * _e, se += h * Oe, he += h * Be, Ee += h * xe, He += h * Ve, ke += h * Ge, Le += h * Ze, dt += h * et, pt += h * Je, ee += 38 * le, ne += 38 * Ae, ue += 38 * z, ge += 38 * F, ye += 38 * U, D += 38 * l, R += 38 * T, X += 38 * se, J += 38 * he, k += 38 * Ee, V += 38 * He, te += 38 * ke, ie += 38 * Le, De += 38 * dt, oe += 38 * pt, _ = 1, h = ee + _ + 65535, _ = Math.floor(h / 65536), ee = h - _ * 65536, h = ne + _ + 65535, _ = Math.floor(h / 65536), ne = h - _ * 65536, h = ue + _ + 65535, _ = Math.floor(h / 65536), ue = h - _ * 65536, h = ge + _ + 65535, _ = Math.floor(h / 65536), ge = h - _ * 65536, h = ye + _ + 65535, _ = Math.floor(h / 65536), ye = h - _ * 65536, h = D + _ + 65535, _ = Math.floor(h / 65536), D = h - _ * 65536, h = R + _ + 65535, _ = Math.floor(h / 65536), R = h - _ * 65536, h = X + _ + 65535, _ = Math.floor(h / 65536), X = h - _ * 65536, h = J + _ + 65535, _ = Math.floor(h / 65536), J = h - _ * 65536, h = k + _ + 65535, _ = Math.floor(h / 65536), k = h - _ * 65536, h = V + _ + 65535, _ = Math.floor(h / 65536), V = h - _ * 65536, h = te + _ + 65535, _ = Math.floor(h / 65536), te = h - _ * 65536, h = ie + _ + 65535, _ = Math.floor(h / 65536), ie = h - _ * 65536, h = De + _ + 65535, _ = Math.floor(h / 65536), De = h - _ * 65536, h = oe + _ + 65535, _ = Math.floor(h / 65536), oe = h - _ * 65536, h = Se + _ + 65535, _ = Math.floor(h / 65536), Se = h - _ * 65536, ee += _ - 1 + 37 * (_ - 1), _ = 1, h = ee + _ + 65535, _ = Math.floor(h / 65536), ee = h - _ * 65536, h = ne + _ + 65535, _ = Math.floor(h / 65536), ne = h - _ * 65536, h = ue + _ + 65535, _ = Math.floor(h / 65536), ue = h - _ * 65536, h = ge + _ + 65535, _ = Math.floor(h / 65536), ge = h - _ * 65536, h = ye + _ + 65535, _ = Math.floor(h / 65536), ye = h - _ * 65536, h = D + _ + 65535, _ = Math.floor(h / 65536), D = h - _ * 65536, h = R + _ + 65535, _ = Math.floor(h / 65536), R = h - _ * 65536, h = X + _ + 65535, _ = Math.floor(h / 65536), X = h - _ * 65536, h = J + _ + 65535, _ = Math.floor(h / 65536), J = h - _ * 65536, h = k + _ + 65535, _ = Math.floor(h / 65536), k = h - _ * 65536, h = V + _ + 65535, _ = Math.floor(h / 65536), V = h - _ * 65536, h = te + _ + 65535, _ = Math.floor(h / 65536), te = h - _ * 65536, h = ie + _ + 65535, _ = Math.floor(h / 65536), ie = h - _ * 65536, h = De + _ + 65535, _ = Math.floor(h / 65536), De = h - _ * 65536, h = oe + _ + 65535, _ = Math.floor(h / 65536), oe = h - _ * 65536, h = Se + _ + 65535, _ = Math.floor(h / 65536), Se = h - _ * 65536, ee += _ - 1 + 37 * (_ - 1), I[0] = ee, I[1] = ne, I[2] = ue, I[3] = ge, I[4] = ye, I[5] = D, I[6] = R, I[7] = X, I[8] = J, I[9] = k, I[10] = V, I[11] = te, I[12] = ie, I[13] = De, I[14] = oe, I[15] = Se
    }

    function O(I, C) {
        P(I, C, C)
    }

    function S(I, C) {
        const A = s();
        for (let h = 0; h < 16; h++) A[h] = C[h];
        for (let h = 253; h >= 0; h--) O(A, A), h !== 2 && h !== 4 && P(A, A, C);
        for (let h = 0; h < 16; h++) I[h] = A[h]
    }

    function K(I, C) {
        const A = new Uint8Array(32),
            h = new Float64Array(80),
            _ = s(),
            ee = s(),
            ne = s(),
            ue = s(),
            ge = s(),
            ye = s();
        for (let J = 0; J < 31; J++) A[J] = I[J];
        A[31] = I[31] & 127 | 64, A[0] &= 248, y(h, C);
        for (let J = 0; J < 16; J++) ee[J] = h[J];
        _[0] = ue[0] = 1;
        for (let J = 254; J >= 0; --J) {
            const k = A[J >>> 3] >>> (J & 7) & 1;
            f(_, ee, k), f(ne, ue, k), m(ge, _, ne), b(_, _, ne), m(ne, ee, ue), b(ee, ee, ue), O(ue, ge), O(ye, _), P(_, ne, _), P(ne, ee, ge), m(ge, _, ne), b(_, _, ne), O(ee, _), b(ne, ue, ye), P(_, ne, c), m(_, _, ue), P(ne, ne, _), P(_, ue, ye), P(ue, ee, h), O(ee, ge), f(_, ee, k), f(ne, ue, k)
        }
        for (let J = 0; J < 16; J++) h[J + 16] = _[J], h[J + 32] = ne[J], h[J + 48] = ee[J], h[J + 64] = ue[J];
        const D = h.subarray(32),
            R = h.subarray(16);
        S(D, D), P(R, R, D);
        const X = new Uint8Array(32);
        return p(X, R), X
    }
    i.scalarMult = K;

    function B(I) {
        return K(I, o)
    }
    i.scalarMultBase = B;

    function Z(I) {
        if (I.length !== i.SECRET_KEY_LENGTH) throw new Error(`x25519: seed must be ${i.SECRET_KEY_LENGTH} bytes`);
        const C = new Uint8Array(I);
        return {
            publicKey: B(C),
            secretKey: C
        }
    }
    i.generateKeyPairFromSeed = Z;

    function $(I) {
        const C = (0, e.randomBytes)(32, I),
            A = Z(C);
        return (0, t.wipe)(C), A
    }
    i.generateKeyPair = $;

    function L(I, C, A = !1) {
        if (I.length !== i.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect secret key length");
        if (C.length !== i.PUBLIC_KEY_LENGTH) throw new Error("X25519: incorrect public key length");
        const h = K(I, C);
        if (A) {
            let _ = 0;
            for (let ee = 0; ee < h.length; ee++) _ |= h[ee];
            if (_ === 0) throw new Error("X25519: invalid shared key")
        }
        return h
    }
    i.sharedKey = L
})(Fu);

function zu(i) {
    return globalThis.Buffer != null ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : i
}

function Zd(i = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? zu(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i)
}

function mu(i, e) {
    e || (e = i.reduce((o, c) => o + c.length, 0));
    const t = Zd(e);
    let s = 0;
    for (const o of i) t.set(o, s), s += o.length;
    return zu(t)
}

function Db(i, e) {
    if (i.length >= 255) throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
    for (var o = 0; o < i.length; o++) {
        var c = i.charAt(o),
            d = c.charCodeAt(0);
        if (t[d] !== 255) throw new TypeError(c + " is ambiguous");
        t[d] = o
    }
    var f = i.length,
        p = i.charAt(0),
        y = Math.log(f) / Math.log(256),
        m = Math.log(256) / Math.log(f);

    function b(S) {
        if (S instanceof Uint8Array || (ArrayBuffer.isView(S) ? S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength) : Array.isArray(S) && (S = Uint8Array.from(S))), !(S instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (S.length === 0) return "";
        for (var K = 0, B = 0, Z = 0, $ = S.length; Z !== $ && S[Z] === 0;) Z++, K++;
        for (var L = ($ - Z) * m + 1 >>> 0, I = new Uint8Array(L); Z !== $;) {
            for (var C = S[Z], A = 0, h = L - 1;
                (C !== 0 || A < B) && h !== -1; h--, A++) C += 256 * I[h] >>> 0, I[h] = C % f >>> 0, C = C / f >>> 0;
            if (C !== 0) throw new Error("Non-zero carry");
            B = A, Z++
        }
        for (var _ = L - B; _ !== L && I[_] === 0;) _++;
        for (var ee = p.repeat(K); _ < L; ++_) ee += i.charAt(I[_]);
        return ee
    }

    function P(S) {
        if (typeof S != "string") throw new TypeError("Expected String");
        if (S.length === 0) return new Uint8Array;
        var K = 0;
        if (S[K] !== " ") {
            for (var B = 0, Z = 0; S[K] === p;) B++, K++;
            for (var $ = (S.length - K) * y + 1 >>> 0, L = new Uint8Array($); S[K];) {
                var I = t[S.charCodeAt(K)];
                if (I === 255) return;
                for (var C = 0, A = $ - 1;
                    (I !== 0 || C < Z) && A !== -1; A--, C++) I += f * L[A] >>> 0, L[A] = I % 256 >>> 0, I = I / 256 >>> 0;
                if (I !== 0) throw new Error("Non-zero carry");
                Z = C, K++
            }
            if (S[K] !== " ") {
                for (var h = $ - Z; h !== $ && L[h] === 0;) h++;
                for (var _ = new Uint8Array(B + ($ - h)), ee = B; h !== $;) _[ee++] = L[h++];
                return _
            }
        }
    }

    function O(S) {
        var K = P(S);
        if (K) return K;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: b,
        decodeUnsafe: P,
        decode: O
    }
}
var Sb = Db,
    Ib = Sb;
const xb = i => {
        if (i instanceof Uint8Array && i.constructor.name === "Uint8Array") return i;
        if (i instanceof ArrayBuffer) return new Uint8Array(i);
        if (ArrayBuffer.isView(i)) return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
        throw new Error("Unknown type, must be binary type")
    },
    Pb = i => new TextEncoder().encode(i),
    Ob = i => new TextDecoder().decode(i);
class Cb {
    constructor(e, t, s) {
        this.name = e, this.prefix = t, this.baseEncode = s
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class Ab {
    constructor(e, t, s) {
        if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        } else throw Error("Can only multibase decode strings")
    }
    or(e) {
        return ep(this, e)
    }
}
class Tb {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return ep(this, e)
    }
    decode(e) {
        const t = e[0],
            s = this.decoders[t];
        if (s) return s.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const ep = (i, e) => new Tb({ ...i.decoders || {
        [i.prefix]: i
    },
    ...e.decoders || {
        [e.prefix]: e
    }
});
class Rb {
    constructor(e, t, s, o) {
        this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = o, this.encoder = new Cb(e, t, s), this.decoder = new Ab(e, t, o)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const fa = ({
        name: i,
        prefix: e,
        encode: t,
        decode: s
    }) => new Rb(i, e, t, s),
    Ts = ({
        prefix: i,
        name: e,
        alphabet: t
    }) => {
        const {
            encode: s,
            decode: o
        } = Ib(t, e);
        return fa({
            prefix: i,
            name: e,
            encode: s,
            decode: c => xb(o(c))
        })
    },
    Nb = (i, e, t, s) => {
        const o = {};
        for (let m = 0; m < e.length; ++m) o[e[m]] = m;
        let c = i.length;
        for (; i[c - 1] === "=";) --c;
        const d = new Uint8Array(c * t / 8 | 0);
        let f = 0,
            p = 0,
            y = 0;
        for (let m = 0; m < c; ++m) {
            const b = o[i[m]];
            if (b === void 0) throw new SyntaxError(`Non-${s} character`);
            p = p << t | b, f += t, f >= 8 && (f -= 8, d[y++] = 255 & p >> f)
        }
        if (f >= t || 255 & p << 8 - f) throw new SyntaxError("Unexpected end of data");
        return d
    },
    $b = (i, e, t) => {
        const s = e[e.length - 1] === "=",
            o = (1 << t) - 1;
        let c = "",
            d = 0,
            f = 0;
        for (let p = 0; p < i.length; ++p)
            for (f = f << 8 | i[p], d += 8; d > t;) d -= t, c += e[o & f >> d];
        if (d && (c += e[o & f << t - d]), s)
            for (; c.length * t & 7;) c += "=";
        return c
    },
    Gt = ({
        name: i,
        prefix: e,
        bitsPerChar: t,
        alphabet: s
    }) => fa({
        prefix: e,
        name: i,
        encode(o) {
            return $b(o, s, t)
        },
        decode(o) {
            return Nb(o, s, t, i)
        }
    }),
    Ub = fa({
        prefix: "\0",
        name: "identity",
        encode: i => Ob(i),
        decode: i => Pb(i)
    }),
    Mb = Object.freeze(Object.defineProperty({
        __proto__: null,
        identity: Ub
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Lb = Gt({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1
    }),
    jb = Object.freeze(Object.defineProperty({
        __proto__: null,
        base2: Lb
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    qb = Gt({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3
    }),
    Fb = Object.freeze(Object.defineProperty({
        __proto__: null,
        base8: qb
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    zb = Ts({
        prefix: "9",
        name: "base10",
        alphabet: "0123456789"
    }),
    Hb = Object.freeze(Object.defineProperty({
        __proto__: null,
        base10: zb
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Bb = Gt({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    Kb = Gt({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    }),
    kb = Object.freeze(Object.defineProperty({
        __proto__: null,
        base16: Bb,
        base16upper: Kb
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Vb = Gt({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    Wb = Gt({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    Gb = Gt({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    Yb = Gt({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    Jb = Gt({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    Qb = Gt({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    Xb = Gt({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    Zb = Gt({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    e_ = Gt({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    }),
    t_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        base32: Vb,
        base32hex: Jb,
        base32hexpad: Xb,
        base32hexpadupper: Zb,
        base32hexupper: Qb,
        base32pad: Gb,
        base32padupper: Yb,
        base32upper: Wb,
        base32z: e_
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    r_ = Ts({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    i_ = Ts({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }),
    n_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        base36: r_,
        base36upper: i_
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    s_ = Ts({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    o_ = Ts({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    }),
    a_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        base58btc: s_,
        base58flickr: o_
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    c_ = Gt({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    u_ = Gt({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    h_ = Gt({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    l_ = Gt({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    }),
    f_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        base64: c_,
        base64pad: u_,
        base64url: h_,
        base64urlpad: l_
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    tp = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    d_ = tp.reduce((i, e, t) => (i[t] = e, i), []),
    p_ = tp.reduce((i, e, t) => (i[e.codePointAt(0)] = t, i), []);

function g_(i) {
    return i.reduce((e, t) => (e += d_[t], e), "")
}

function y_(i) {
    const e = [];
    for (const t of i) {
        const s = p_[t.codePointAt(0)];
        if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
        e.push(s)
    }
    return new Uint8Array(e)
}
const v_ = fa({
        prefix: "🚀",
        name: "base256emoji",
        encode: g_,
        decode: y_
    }),
    m_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        base256emoji: v_
    }, Symbol.toStringTag, {
        value: "Module"
    }));
new TextEncoder;
new TextDecoder;
const cf = { ...Mb,
    ...jb,
    ...Fb,
    ...Hb,
    ...kb,
    ...t_,
    ...n_,
    ...a_,
    ...f_,
    ...m_
};

function rp(i, e, t, s) {
    return {
        name: i,
        prefix: e,
        encoder: {
            name: i,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: s
        }
    }
}
const uf = rp("utf8", "u", i => "u" + new TextDecoder("utf8").decode(i), i => new TextEncoder().encode(i.substring(1))),
    kc = rp("ascii", "a", i => {
        let e = "a";
        for (let t = 0; t < i.length; t++) e += String.fromCharCode(i[t]);
        return e
    }, i => {
        i = i.substring(1);
        const e = Zd(i.length);
        for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t);
        return e
    }),
    ip = {
        utf8: uf,
        "utf-8": uf,
        hex: cf.base16,
        latin1: kc,
        ascii: kc,
        binary: kc,
        ...cf
    };

function mr(i, e = "utf8") {
    const t = ip[e];
    if (!t) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? zu(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`)
}

function ur(i, e = "utf8") {
    const t = ip[e];
    if (!t) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString("utf8") : t.encoder.encode(i).substring(1)
}
var hf = function(i, e, t) {
        if (t || arguments.length === 2)
            for (var s = 0, o = e.length, c; s < o; s++)(c || !(s in e)) && (c || (c = Array.prototype.slice.call(e, 0, s)), c[s] = e[s]);
        return i.concat(c || Array.prototype.slice.call(e))
    },
    w_ = function() {
        function i(e, t, s) {
            this.name = e, this.version = t, this.os = s, this.type = "browser"
        }
        return i
    }(),
    b_ = function() {
        function i(e) {
            this.version = e, this.type = "node", this.name = "node", this.os = process.platform
        }
        return i
    }(),
    __ = function() {
        function i(e, t, s, o) {
            this.name = e, this.version = t, this.os = s, this.bot = o, this.type = "bot-device"
        }
        return i
    }(),
    E_ = function() {
        function i() {
            this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
        }
        return i
    }(),
    D_ = function() {
        function i() {
            this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
        }
        return i
    }(),
    S_ = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
    I_ = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
    lf = 3,
    x_ = [
        ["aol", /AOLShield\/([0-9\._]+)/],
        ["edge", /Edge\/([0-9\._]+)/],
        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
        ["silk", /\bSilk\/([0-9._-]+)\b/],
        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
        ["fxios", /FxiOS\/([0-9\.]+)/],
        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
        ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
        ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
        ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
        ["ie", /MSIE\s(7\.0)/],
        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
        ["android", /Android\s([0-9\.]+)/],
        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
        ["safari", /Version\/([0-9\._]+).*Safari/],
        ["facebook", /FB[AS]V\/([0-9\.]+)/],
        ["instagram", /Instagram\s([0-9\.]+)/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
        ["curl", /^curl\/([0-9\.]+)$/],
        ["searchbot", S_]
    ],
    ff = [
        ["iOS", /iP(hone|od|ad)/],
        ["Android OS", /Android/],
        ["BlackBerry OS", /BlackBerry|BB10/],
        ["Windows Mobile", /IEMobile/],
        ["Amazon OS", /Kindle/],
        ["Windows 3.11", /Win16/],
        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
        ["Windows 98", /(Windows 98)|(Win98)/],
        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
        ["Windows Server 2003", /(Windows NT 5.2)/],
        ["Windows Vista", /(Windows NT 6.0)/],
        ["Windows 7", /(Windows NT 6.1)/],
        ["Windows 8", /(Windows NT 6.2)/],
        ["Windows 8.1", /(Windows NT 6.3)/],
        ["Windows 10", /(Windows NT 10.0)/],
        ["Windows ME", /Windows ME/],
        ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
        ["Open BSD", /OpenBSD/],
        ["Sun OS", /SunOS/],
        ["Chrome OS", /CrOS/],
        ["Linux", /(Linux)|(X11)/],
        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
        ["QNX", /QNX/],
        ["BeOS", /BeOS/],
        ["OS/2", /OS\/2/]
    ];

function P_(i) {
    return i ? df(i) : typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative" ? new D_ : typeof navigator < "u" ? df(navigator.userAgent) : A_()
}

function O_(i) {
    return i !== "" && x_.reduce(function(e, t) {
        var s = t[0],
            o = t[1];
        if (e) return e;
        var c = o.exec(i);
        return !!c && [s, c]
    }, !1)
}

function df(i) {
    var e = O_(i);
    if (!e) return null;
    var t = e[0],
        s = e[1];
    if (t === "searchbot") return new E_;
    var o = s[1] && s[1].split(".").join("_").split("_").slice(0, 3);
    o ? o.length < lf && (o = hf(hf([], o, !0), T_(lf - o.length), !0)) : o = [];
    var c = o.join("."),
        d = C_(i),
        f = I_.exec(i);
    return f && f[1] ? new __(t, c, d, f[1]) : new w_(t, c, d)
}

function C_(i) {
    for (var e = 0, t = ff.length; e < t; e++) {
        var s = ff[e],
            o = s[0],
            c = s[1],
            d = c.exec(i);
        if (d) return o
    }
    return null
}

function A_() {
    var i = typeof process < "u" && process.version;
    return i ? new b_(process.version.slice(1)) : null
}

function T_(i) {
    for (var e = [], t = 0; t < i; t++) e.push("0");
    return e
}
var ve = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var wu = function(i, e) {
    return wu = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(t, s) {
        t.__proto__ = s
    } || function(t, s) {
        for (var o in s) s.hasOwnProperty(o) && (t[o] = s[o])
    }, wu(i, e)
};

function R_(i, e) {
    wu(i, e);

    function t() {
        this.constructor = i
    }
    i.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t)
}
var bu = function() {
    return bu = Object.assign || function(e) {
        for (var t, s = 1, o = arguments.length; s < o; s++) {
            t = arguments[s];
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c])
        }
        return e
    }, bu.apply(this, arguments)
};

function N_(i, e) {
    var t = {};
    for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && e.indexOf(s) < 0 && (t[s] = i[s]);
    if (i != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, s = Object.getOwnPropertySymbols(i); o < s.length; o++) e.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(i, s[o]) && (t[s[o]] = i[s[o]]);
    return t
}

function $_(i, e, t, s) {
    var o = arguments.length,
        c = o < 3 ? e : s === null ? s = Object.getOwnPropertyDescriptor(e, t) : s,
        d;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(i, e, t, s);
    else
        for (var f = i.length - 1; f >= 0; f--)(d = i[f]) && (c = (o < 3 ? d(c) : o > 3 ? d(e, t, c) : d(e, t)) || c);
    return o > 3 && c && Object.defineProperty(e, t, c), c
}

function U_(i, e) {
    return function(t, s) {
        e(t, s, i)
    }
}

function M_(i, e) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(i, e)
}

function L_(i, e, t, s) {
    function o(c) {
        return c instanceof t ? c : new t(function(d) {
            d(c)
        })
    }
    return new(t || (t = Promise))(function(c, d) {
        function f(m) {
            try {
                y(s.next(m))
            } catch (b) {
                d(b)
            }
        }

        function p(m) {
            try {
                y(s.throw(m))
            } catch (b) {
                d(b)
            }
        }

        function y(m) {
            m.done ? c(m.value) : o(m.value).then(f, p)
        }
        y((s = s.apply(i, e || [])).next())
    })
}

function j_(i, e) {
    var t = {
            label: 0,
            sent: function() {
                if (c[0] & 1) throw c[1];
                return c[1]
            },
            trys: [],
            ops: []
        },
        s, o, c, d;
    return d = {
        next: f(0),
        throw: f(1),
        return: f(2)
    }, typeof Symbol == "function" && (d[Symbol.iterator] = function() {
        return this
    }), d;

    function f(y) {
        return function(m) {
            return p([y, m])
        }
    }

    function p(y) {
        if (s) throw new TypeError("Generator is already executing.");
        for (; t;) try {
            if (s = 1, o && (c = y[0] & 2 ? o.return : y[0] ? o.throw || ((c = o.return) && c.call(o), 0) : o.next) && !(c = c.call(o, y[1])).done) return c;
            switch (o = 0, c && (y = [y[0] & 2, c.value]), y[0]) {
                case 0:
                case 1:
                    c = y;
                    break;
                case 4:
                    return t.label++, {
                        value: y[1],
                        done: !1
                    };
                case 5:
                    t.label++, o = y[1], y = [0];
                    continue;
                case 7:
                    y = t.ops.pop(), t.trys.pop();
                    continue;
                default:
                    if (c = t.trys, !(c = c.length > 0 && c[c.length - 1]) && (y[0] === 6 || y[0] === 2)) {
                        t = 0;
                        continue
                    }
                    if (y[0] === 3 && (!c || y[1] > c[0] && y[1] < c[3])) {
                        t.label = y[1];
                        break
                    }
                    if (y[0] === 6 && t.label < c[1]) {
                        t.label = c[1], c = y;
                        break
                    }
                    if (c && t.label < c[2]) {
                        t.label = c[2], t.ops.push(y);
                        break
                    }
                    c[2] && t.ops.pop(), t.trys.pop();
                    continue
            }
            y = e.call(i, t)
        } catch (m) {
            y = [6, m], o = 0
        } finally {
            s = c = 0
        }
        if (y[0] & 5) throw y[1];
        return {
            value: y[0] ? y[1] : void 0,
            done: !0
        }
    }
}

function q_(i, e, t, s) {
    s === void 0 && (s = t), i[s] = e[t]
}

function F_(i, e) {
    for (var t in i) t !== "default" && !e.hasOwnProperty(t) && (e[t] = i[t])
}

function _u(i) {
    var e = typeof Symbol == "function" && Symbol.iterator,
        t = e && i[e],
        s = 0;
    if (t) return t.call(i);
    if (i && typeof i.length == "number") return {
        next: function() {
            return i && s >= i.length && (i = void 0), {
                value: i && i[s++],
                done: !i
            }
        }
    };
    throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function np(i, e) {
    var t = typeof Symbol == "function" && i[Symbol.iterator];
    if (!t) return i;
    var s = t.call(i),
        o, c = [],
        d;
    try {
        for (;
            (e === void 0 || e-- > 0) && !(o = s.next()).done;) c.push(o.value)
    } catch (f) {
        d = {
            error: f
        }
    } finally {
        try {
            o && !o.done && (t = s.return) && t.call(s)
        } finally {
            if (d) throw d.error
        }
    }
    return c
}

function z_() {
    for (var i = [], e = 0; e < arguments.length; e++) i = i.concat(np(arguments[e]));
    return i
}

function H_() {
    for (var i = 0, e = 0, t = arguments.length; e < t; e++) i += arguments[e].length;
    for (var s = Array(i), o = 0, e = 0; e < t; e++)
        for (var c = arguments[e], d = 0, f = c.length; d < f; d++, o++) s[o] = c[d];
    return s
}

function Ss(i) {
    return this instanceof Ss ? (this.v = i, this) : new Ss(i)
}

function B_(i, e, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var s = t.apply(i, e || []),
        o, c = [];
    return o = {}, d("next"), d("throw"), d("return"), o[Symbol.asyncIterator] = function() {
        return this
    }, o;

    function d(P) {
        s[P] && (o[P] = function(O) {
            return new Promise(function(S, K) {
                c.push([P, O, S, K]) > 1 || f(P, O)
            })
        })
    }

    function f(P, O) {
        try {
            p(s[P](O))
        } catch (S) {
            b(c[0][3], S)
        }
    }

    function p(P) {
        P.value instanceof Ss ? Promise.resolve(P.value.v).then(y, m) : b(c[0][2], P)
    }

    function y(P) {
        f("next", P)
    }

    function m(P) {
        f("throw", P)
    }

    function b(P, O) {
        P(O), c.shift(), c.length && f(c[0][0], c[0][1])
    }
}

function K_(i) {
    var e, t;
    return e = {}, s("next"), s("throw", function(o) {
        throw o
    }), s("return"), e[Symbol.iterator] = function() {
        return this
    }, e;

    function s(o, c) {
        e[o] = i[o] ? function(d) {
            return (t = !t) ? {
                value: Ss(i[o](d)),
                done: o === "return"
            } : c ? c(d) : d
        } : c
    }
}

function k_(i) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = i[Symbol.asyncIterator],
        t;
    return e ? e.call(i) : (i = typeof _u == "function" ? _u(i) : i[Symbol.iterator](), t = {}, s("next"), s("throw"), s("return"), t[Symbol.asyncIterator] = function() {
        return this
    }, t);

    function s(c) {
        t[c] = i[c] && function(d) {
            return new Promise(function(f, p) {
                d = i[c](d), o(f, p, d.done, d.value)
            })
        }
    }

    function o(c, d, f, p) {
        Promise.resolve(p).then(function(y) {
            c({
                value: y,
                done: f
            })
        }, d)
    }
}

function V_(i, e) {
    return Object.defineProperty ? Object.defineProperty(i, "raw", {
        value: e
    }) : i.raw = e, i
}

function W_(i) {
    if (i && i.__esModule) return i;
    var e = {};
    if (i != null)
        for (var t in i) Object.hasOwnProperty.call(i, t) && (e[t] = i[t]);
    return e.default = i, e
}

function G_(i) {
    return i && i.__esModule ? i : {
        default: i
    }
}

function Y_(i, e) {
    if (!e.has(i)) throw new TypeError("attempted to get private field on non-instance");
    return e.get(i)
}

function J_(i, e, t) {
    if (!e.has(i)) throw new TypeError("attempted to set private field on non-instance");
    return e.set(i, t), t
}
const Q_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        get __assign() {
            return bu
        },
        __asyncDelegator: K_,
        __asyncGenerator: B_,
        __asyncValues: k_,
        __await: Ss,
        __awaiter: L_,
        __classPrivateFieldGet: Y_,
        __classPrivateFieldSet: J_,
        __createBinding: q_,
        __decorate: $_,
        __exportStar: F_,
        __extends: R_,
        __generator: j_,
        __importDefault: G_,
        __importStar: W_,
        __makeTemplateObject: V_,
        __metadata: M_,
        __param: U_,
        __read: np,
        __rest: N_,
        __spread: z_,
        __spreadArrays: H_,
        __values: _u
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Si = Mu(Q_);
var Vc = {},
    ds = {},
    pf;

function X_() {
    if (pf) return ds;
    pf = 1, Object.defineProperty(ds, "__esModule", {
        value: !0
    }), ds.delay = void 0;

    function i(e) {
        return new Promise(t => {
            setTimeout(() => {
                t(!0)
            }, e)
        })
    }
    return ds.delay = i, ds
}
var nn = {},
    Wc = {},
    sn = {},
    gf;

function Z_() {
    return gf || (gf = 1, Object.defineProperty(sn, "__esModule", {
        value: !0
    }), sn.ONE_THOUSAND = sn.ONE_HUNDRED = void 0, sn.ONE_HUNDRED = 100, sn.ONE_THOUSAND = 1e3), sn
}
var Gc = {},
    yf;

function eE() {
    return yf || (yf = 1, function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ONE_YEAR = i.FOUR_WEEKS = i.THREE_WEEKS = i.TWO_WEEKS = i.ONE_WEEK = i.THIRTY_DAYS = i.SEVEN_DAYS = i.FIVE_DAYS = i.THREE_DAYS = i.ONE_DAY = i.TWENTY_FOUR_HOURS = i.TWELVE_HOURS = i.SIX_HOURS = i.THREE_HOURS = i.ONE_HOUR = i.SIXTY_MINUTES = i.THIRTY_MINUTES = i.TEN_MINUTES = i.FIVE_MINUTES = i.ONE_MINUTE = i.SIXTY_SECONDS = i.THIRTY_SECONDS = i.TEN_SECONDS = i.FIVE_SECONDS = i.ONE_SECOND = void 0, i.ONE_SECOND = 1, i.FIVE_SECONDS = 5, i.TEN_SECONDS = 10, i.THIRTY_SECONDS = 30, i.SIXTY_SECONDS = 60, i.ONE_MINUTE = i.SIXTY_SECONDS, i.FIVE_MINUTES = i.ONE_MINUTE * 5, i.TEN_MINUTES = i.ONE_MINUTE * 10, i.THIRTY_MINUTES = i.ONE_MINUTE * 30, i.SIXTY_MINUTES = i.ONE_MINUTE * 60, i.ONE_HOUR = i.SIXTY_MINUTES, i.THREE_HOURS = i.ONE_HOUR * 3, i.SIX_HOURS = i.ONE_HOUR * 6, i.TWELVE_HOURS = i.ONE_HOUR * 12, i.TWENTY_FOUR_HOURS = i.ONE_HOUR * 24, i.ONE_DAY = i.TWENTY_FOUR_HOURS, i.THREE_DAYS = i.ONE_DAY * 3, i.FIVE_DAYS = i.ONE_DAY * 5, i.SEVEN_DAYS = i.ONE_DAY * 7, i.THIRTY_DAYS = i.ONE_DAY * 30, i.ONE_WEEK = i.SEVEN_DAYS, i.TWO_WEEKS = i.ONE_WEEK * 2, i.THREE_WEEKS = i.ONE_WEEK * 3, i.FOUR_WEEKS = i.ONE_WEEK * 4, i.ONE_YEAR = i.ONE_DAY * 365
    }(Gc)), Gc
}
var vf;

function sp() {
    return vf || (vf = 1, function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const e = Si;
        e.__exportStar(Z_(), i), e.__exportStar(eE(), i)
    }(Wc)), Wc
}
var mf;

function tE() {
    if (mf) return nn;
    mf = 1, Object.defineProperty(nn, "__esModule", {
        value: !0
    }), nn.fromMiliseconds = nn.toMiliseconds = void 0;
    const i = sp();

    function e(s) {
        return s * i.ONE_THOUSAND
    }
    nn.toMiliseconds = e;

    function t(s) {
        return Math.floor(s / i.ONE_THOUSAND)
    }
    return nn.fromMiliseconds = t, nn
}
var wf;

function rE() {
    return wf || (wf = 1, function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const e = Si;
        e.__exportStar(X_(), i), e.__exportStar(tE(), i)
    }(Vc)), Vc
}
var $n = {},
    bf;

function iE() {
    if (bf) return $n;
    bf = 1, Object.defineProperty($n, "__esModule", {
        value: !0
    }), $n.Watch = void 0;
    class i {
        constructor() {
            this.timestamps = new Map
        }
        start(t) {
            if (this.timestamps.has(t)) throw new Error(`Watch already started for label: ${t}`);
            this.timestamps.set(t, {
                started: Date.now()
            })
        }
        stop(t) {
            const s = this.get(t);
            if (typeof s.elapsed < "u") throw new Error(`Watch already stopped for label: ${t}`);
            const o = Date.now() - s.started;
            this.timestamps.set(t, {
                started: s.started,
                elapsed: o
            })
        }
        get(t) {
            const s = this.timestamps.get(t);
            if (typeof s > "u") throw new Error(`No timestamp found for label: ${t}`);
            return s
        }
        elapsed(t) {
            const s = this.get(t);
            return s.elapsed || Date.now() - s.started
        }
    }
    return $n.Watch = i, $n.default = i, $n
}
var Yc = {},
    ps = {},
    _f;

function nE() {
    if (_f) return ps;
    _f = 1, Object.defineProperty(ps, "__esModule", {
        value: !0
    }), ps.IWatch = void 0;
    class i {}
    return ps.IWatch = i, ps
}
var Ef;

function sE() {
    return Ef || (Ef = 1, function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Si.__exportStar(nE(), i)
    }(Yc)), Yc
}(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    const e = Si;
    e.__exportStar(rE(), i), e.__exportStar(iE(), i), e.__exportStar(sE(), i), e.__exportStar(sp(), i)
})(ve);
var ht = {};
Object.defineProperty(ht, "__esModule", {
    value: !0
});
ht.getLocalStorage = ht.getLocalStorageOrThrow = ht.getCrypto = ht.getCryptoOrThrow = op = ht.getLocation = ht.getLocationOrThrow = Bu = ht.getNavigator = ht.getNavigatorOrThrow = Hu = ht.getDocument = ht.getDocumentOrThrow = ht.getFromWindowOrThrow = ht.getFromWindow = void 0;

function un(i) {
    let e;
    return typeof window < "u" && typeof window[i] < "u" && (e = window[i]), e
}
ht.getFromWindow = un;

function Bn(i) {
    const e = un(i);
    if (!e) throw new Error(`${i} is not defined in Window`);
    return e
}
ht.getFromWindowOrThrow = Bn;

function oE() {
    return Bn("document")
}
ht.getDocumentOrThrow = oE;

function aE() {
    return un("document")
}
var Hu = ht.getDocument = aE;

function cE() {
    return Bn("navigator")
}
ht.getNavigatorOrThrow = cE;

function uE() {
    return un("navigator")
}
var Bu = ht.getNavigator = uE;

function hE() {
    return Bn("location")
}
ht.getLocationOrThrow = hE;

function lE() {
    return un("location")
}
var op = ht.getLocation = lE;

function fE() {
    return Bn("crypto")
}
ht.getCryptoOrThrow = fE;

function dE() {
    return un("crypto")
}
ht.getCrypto = dE;

function pE() {
    return Bn("localStorage")
}
ht.getLocalStorageOrThrow = pE;

function gE() {
    return un("localStorage")
}
ht.getLocalStorage = gE;
var Ku = {};
Object.defineProperty(Ku, "__esModule", {
    value: !0
});
var ap = Ku.getWindowMetadata = void 0;
const Df = ht;

function yE() {
    let i, e;
    try {
        i = Df.getDocumentOrThrow(), e = Df.getLocationOrThrow()
    } catch {
        return null
    }

    function t() {
        const b = i.getElementsByTagName("link"),
            P = [];
        for (let O = 0; O < b.length; O++) {
            const S = b[O],
                K = S.getAttribute("rel");
            if (K && K.toLowerCase().indexOf("icon") > -1) {
                const B = S.getAttribute("href");
                if (B)
                    if (B.toLowerCase().indexOf("https:") === -1 && B.toLowerCase().indexOf("http:") === -1 && B.indexOf("//") !== 0) {
                        let Z = e.protocol + "//" + e.host;
                        if (B.indexOf("/") === 0) Z += B;
                        else {
                            const $ = e.pathname.split("/");
                            $.pop();
                            const L = $.join("/");
                            Z += L + "/" + B
                        }
                        P.push(Z)
                    } else if (B.indexOf("//") === 0) {
                    const Z = e.protocol + B;
                    P.push(Z)
                } else P.push(B)
            }
        }
        return P
    }

    function s(...b) {
        const P = i.getElementsByTagName("meta");
        for (let O = 0; O < P.length; O++) {
            const S = P[O],
                K = ["itemprop", "property", "name"].map(B => S.getAttribute(B)).filter(B => B ? b.includes(B) : !1);
            if (K.length && K) {
                const B = S.getAttribute("content");
                if (B) return B
            }
        }
        return ""
    }

    function o() {
        let b = s("name", "og:site_name", "og:title", "twitter:title");
        return b || (b = i.title), b
    }

    function c() {
        return s("description", "og:description", "twitter:description", "keywords")
    }
    const d = o(),
        f = c(),
        p = e.origin,
        y = t();
    return {
        description: f,
        url: p,
        icons: y,
        name: d
    }
}
ap = Ku.getWindowMetadata = yE;
var Is = {},
    vE = i => encodeURIComponent(i).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`),
    cp = "%[a-f0-9]{2}",
    Sf = new RegExp("(" + cp + ")|([^%]+?)", "gi"),
    If = new RegExp("(" + cp + ")+", "gi");

function Eu(i, e) {
    try {
        return [decodeURIComponent(i.join(""))]
    } catch {}
    if (i.length === 1) return i;
    e = e || 1;
    var t = i.slice(0, e),
        s = i.slice(e);
    return Array.prototype.concat.call([], Eu(t), Eu(s))
}

function mE(i) {
    try {
        return decodeURIComponent(i)
    } catch {
        for (var e = i.match(Sf) || [], t = 1; t < e.length; t++) i = Eu(e, t).join(""), e = i.match(Sf) || [];
        return i
    }
}

function wE(i) {
    for (var e = {
            "%FE%FF": "��",
            "%FF%FE": "��"
        }, t = If.exec(i); t;) {
        try {
            e[t[0]] = decodeURIComponent(t[0])
        } catch {
            var s = mE(t[0]);
            s !== t[0] && (e[t[0]] = s)
        }
        t = If.exec(i)
    }
    e["%C2"] = "�";
    for (var o = Object.keys(e), c = 0; c < o.length; c++) {
        var d = o[c];
        i = i.replace(new RegExp(d, "g"), e[d])
    }
    return i
}
var bE = function(i) {
        if (typeof i != "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof i + "`");
        try {
            return i = i.replace(/\+/g, " "), decodeURIComponent(i)
        } catch {
            return wE(i)
        }
    },
    _E = (i, e) => {
        if (!(typeof i == "string" && typeof e == "string")) throw new TypeError("Expected the arguments to be of type `string`");
        if (e === "") return [i];
        const t = i.indexOf(e);
        return t === -1 ? [i] : [i.slice(0, t), i.slice(t + e.length)]
    },
    EE = function(i, e) {
        for (var t = {}, s = Object.keys(i), o = Array.isArray(e), c = 0; c < s.length; c++) {
            var d = s[c],
                f = i[d];
            (o ? e.indexOf(d) !== -1 : e(d, f, i)) && (t[d] = f)
        }
        return t
    };
(function(i) {
    const e = vE,
        t = bE,
        s = _E,
        o = EE,
        c = $ => $ == null,
        d = Symbol("encodeFragmentIdentifier");

    function f($) {
        switch ($.arrayFormat) {
            case "index":
                return L => (I, C) => {
                    const A = I.length;
                    return C === void 0 || $.skipNull && C === null || $.skipEmptyString && C === "" ? I : C === null ? [...I, [m(L, $), "[", A, "]"].join("")] : [...I, [m(L, $), "[", m(A, $), "]=", m(C, $)].join("")]
                };
            case "bracket":
                return L => (I, C) => C === void 0 || $.skipNull && C === null || $.skipEmptyString && C === "" ? I : C === null ? [...I, [m(L, $), "[]"].join("")] : [...I, [m(L, $), "[]=", m(C, $)].join("")];
            case "colon-list-separator":
                return L => (I, C) => C === void 0 || $.skipNull && C === null || $.skipEmptyString && C === "" ? I : C === null ? [...I, [m(L, $), ":list="].join("")] : [...I, [m(L, $), ":list=", m(C, $)].join("")];
            case "comma":
            case "separator":
            case "bracket-separator":
                {
                    const L = $.arrayFormat === "bracket-separator" ? "[]=" : "=";
                    return I => (C, A) => A === void 0 || $.skipNull && A === null || $.skipEmptyString && A === "" ? C : (A = A === null ? "" : A, C.length === 0 ? [
                        [m(I, $), L, m(A, $)].join("")
                    ] : [
                        [C, m(A, $)].join($.arrayFormatSeparator)
                    ])
                }
            default:
                return L => (I, C) => C === void 0 || $.skipNull && C === null || $.skipEmptyString && C === "" ? I : C === null ? [...I, m(L, $)] : [...I, [m(L, $), "=", m(C, $)].join("")]
        }
    }

    function p($) {
        let L;
        switch ($.arrayFormat) {
            case "index":
                return (I, C, A) => {
                    if (L = /\[(\d*)\]$/.exec(I), I = I.replace(/\[\d*\]$/, ""), !L) {
                        A[I] = C;
                        return
                    }
                    A[I] === void 0 && (A[I] = {}), A[I][L[1]] = C
                };
            case "bracket":
                return (I, C, A) => {
                    if (L = /(\[\])$/.exec(I), I = I.replace(/\[\]$/, ""), !L) {
                        A[I] = C;
                        return
                    }
                    if (A[I] === void 0) {
                        A[I] = [C];
                        return
                    }
                    A[I] = [].concat(A[I], C)
                };
            case "colon-list-separator":
                return (I, C, A) => {
                    if (L = /(:list)$/.exec(I), I = I.replace(/:list$/, ""), !L) {
                        A[I] = C;
                        return
                    }
                    if (A[I] === void 0) {
                        A[I] = [C];
                        return
                    }
                    A[I] = [].concat(A[I], C)
                };
            case "comma":
            case "separator":
                return (I, C, A) => {
                    const h = typeof C == "string" && C.includes($.arrayFormatSeparator),
                        _ = typeof C == "string" && !h && b(C, $).includes($.arrayFormatSeparator);
                    C = _ ? b(C, $) : C;
                    const ee = h || _ ? C.split($.arrayFormatSeparator).map(ne => b(ne, $)) : C === null ? C : b(C, $);
                    A[I] = ee
                };
            case "bracket-separator":
                return (I, C, A) => {
                    const h = /(\[\])$/.test(I);
                    if (I = I.replace(/\[\]$/, ""), !h) {
                        A[I] = C && b(C, $);
                        return
                    }
                    const _ = C === null ? [] : C.split($.arrayFormatSeparator).map(ee => b(ee, $));
                    if (A[I] === void 0) {
                        A[I] = _;
                        return
                    }
                    A[I] = [].concat(A[I], _)
                };
            default:
                return (I, C, A) => {
                    if (A[I] === void 0) {
                        A[I] = C;
                        return
                    }
                    A[I] = [].concat(A[I], C)
                }
        }
    }

    function y($) {
        if (typeof $ != "string" || $.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string")
    }

    function m($, L) {
        return L.encode ? L.strict ? e($) : encodeURIComponent($) : $
    }

    function b($, L) {
        return L.decode ? t($) : $
    }

    function P($) {
        return Array.isArray($) ? $.sort() : typeof $ == "object" ? P(Object.keys($)).sort((L, I) => Number(L) - Number(I)).map(L => $[L]) : $
    }

    function O($) {
        const L = $.indexOf("#");
        return L !== -1 && ($ = $.slice(0, L)), $
    }

    function S($) {
        let L = "";
        const I = $.indexOf("#");
        return I !== -1 && (L = $.slice(I)), L
    }

    function K($) {
        $ = O($);
        const L = $.indexOf("?");
        return L === -1 ? "" : $.slice(L + 1)
    }

    function B($, L) {
        return L.parseNumbers && !Number.isNaN(Number($)) && typeof $ == "string" && $.trim() !== "" ? $ = Number($) : L.parseBooleans && $ !== null && ($.toLowerCase() === "true" || $.toLowerCase() === "false") && ($ = $.toLowerCase() === "true"), $
    }

    function Z($, L) {
        L = Object.assign({
            decode: !0,
            sort: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ",",
            parseNumbers: !1,
            parseBooleans: !1
        }, L), y(L.arrayFormatSeparator);
        const I = p(L),
            C = Object.create(null);
        if (typeof $ != "string" || ($ = $.trim().replace(/^[?#&]/, ""), !$)) return C;
        for (const A of $.split("&")) {
            if (A === "") continue;
            let [h, _] = s(L.decode ? A.replace(/\+/g, " ") : A, "=");
            _ = _ === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(L.arrayFormat) ? _ : b(_, L), I(b(h, L), _, C)
        }
        for (const A of Object.keys(C)) {
            const h = C[A];
            if (typeof h == "object" && h !== null)
                for (const _ of Object.keys(h)) h[_] = B(h[_], L);
            else C[A] = B(h, L)
        }
        return L.sort === !1 ? C : (L.sort === !0 ? Object.keys(C).sort() : Object.keys(C).sort(L.sort)).reduce((A, h) => {
            const _ = C[h];
            return _ && typeof _ == "object" && !Array.isArray(_) ? A[h] = P(_) : A[h] = _, A
        }, Object.create(null))
    }
    i.extract = K, i.parse = Z, i.stringify = ($, L) => {
        if (!$) return "";
        L = Object.assign({
            encode: !0,
            strict: !0,
            arrayFormat: "none",
            arrayFormatSeparator: ","
        }, L), y(L.arrayFormatSeparator);
        const I = _ => L.skipNull && c($[_]) || L.skipEmptyString && $[_] === "",
            C = f(L),
            A = {};
        for (const _ of Object.keys($)) I(_) || (A[_] = $[_]);
        const h = Object.keys(A);
        return L.sort !== !1 && h.sort(L.sort), h.map(_ => {
            const ee = $[_];
            return ee === void 0 ? "" : ee === null ? m(_, L) : Array.isArray(ee) ? ee.length === 0 && L.arrayFormat === "bracket-separator" ? m(_, L) + "[]" : ee.reduce(C(_), []).join("&") : m(_, L) + "=" + m(ee, L)
        }).filter(_ => _.length > 0).join("&")
    }, i.parseUrl = ($, L) => {
        L = Object.assign({
            decode: !0
        }, L);
        const [I, C] = s($, "#");
        return Object.assign({
            url: I.split("?")[0] || "",
            query: Z(K($), L)
        }, L && L.parseFragmentIdentifier && C ? {
            fragmentIdentifier: b(C, L)
        } : {})
    }, i.stringifyUrl = ($, L) => {
        L = Object.assign({
            encode: !0,
            strict: !0,
            [d]: !0
        }, L);
        const I = O($.url).split("?")[0] || "",
            C = i.extract($.url),
            A = i.parse(C, {
                sort: !1
            }),
            h = Object.assign(A, $.query);
        let _ = i.stringify(h, L);
        _ && (_ = `?${_}`);
        let ee = S($.url);
        return $.fragmentIdentifier && (ee = `#${L[d]?m($.fragmentIdentifier,L):$.fragmentIdentifier}`), `${I}${_}${ee}`
    }, i.pick = ($, L, I) => {
        I = Object.assign({
            parseFragmentIdentifier: !0,
            [d]: !1
        }, I);
        const {
            url: C,
            query: A,
            fragmentIdentifier: h
        } = i.parseUrl($, I);
        return i.stringifyUrl({
            url: C,
            query: o(A, L),
            fragmentIdentifier: h
        }, I)
    }, i.exclude = ($, L, I) => {
        const C = Array.isArray(L) ? A => !L.includes(A) : (A, h) => !L(A, h);
        return i.pick($, C, I)
    }
})(Is);
const DE = {
        waku: {
            publish: "waku_publish",
            batchPublish: "waku_batchPublish",
            subscribe: "waku_subscribe",
            batchSubscribe: "waku_batchSubscribe",
            subscription: "waku_subscription",
            unsubscribe: "waku_unsubscribe",
            batchUnsubscribe: "waku_batchUnsubscribe",
            batchFetchMessages: "waku_batchFetchMessages"
        },
        irn: {
            publish: "irn_publish",
            batchPublish: "irn_batchPublish",
            subscribe: "irn_subscribe",
            batchSubscribe: "irn_batchSubscribe",
            subscription: "irn_subscription",
            unsubscribe: "irn_unsubscribe",
            batchUnsubscribe: "irn_batchUnsubscribe",
            batchFetchMessages: "irn_batchFetchMessages"
        },
        iridium: {
            publish: "iridium_publish",
            batchPublish: "iridium_batchPublish",
            subscribe: "iridium_subscribe",
            batchSubscribe: "iridium_batchSubscribe",
            subscription: "iridium_subscription",
            unsubscribe: "iridium_unsubscribe",
            batchUnsubscribe: "iridium_batchUnsubscribe",
            batchFetchMessages: "iridium_batchFetchMessages"
        }
    },
    SE = ":";

function IE(i) {
    const [e, t] = i.split(SE);
    return {
        namespace: e,
        reference: t
    }
}

function xE(i, e = []) {
    const t = [];
    return Object.keys(i).forEach(s => {
        if (e.length && !e.includes(s)) return;
        const o = i[s];
        t.push(...o.accounts)
    }), t
}

function up(i, e) {
    return i.includes(":") ? [i] : e.chains || []
}
const hp = "base10",
    cr = "base16",
    Du = "base64pad",
    ku = "utf8",
    lp = 0,
    hn = 1,
    PE = 0,
    xf = 1,
    Su = 12,
    Vu = 32;

function OE() {
    const i = Fu.generateKeyPair();
    return {
        privateKey: ur(i.secretKey, cr),
        publicKey: ur(i.publicKey, cr)
    }
}

function Iu() {
    const i = Hn.randomBytes(Vu);
    return ur(i, cr)
}

function CE(i, e) {
    const t = Fu.sharedKey(mr(i, cr), mr(e, cr), !0),
        s = new gb(la.SHA256, t).expand(Vu);
    return ur(s, cr)
}

function AE(i) {
    const e = la.hash(mr(i, cr));
    return ur(e, cr)
}

function Fn(i) {
    const e = la.hash(mr(i, ku));
    return ur(e, cr)
}

function TE(i) {
    return mr(`${i}`, hp)
}

function Rs(i) {
    return Number(ur(i, hp))
}

function RE(i) {
    const e = TE(typeof i.type < "u" ? i.type : lp);
    if (Rs(e) === hn && typeof i.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const t = typeof i.senderPublicKey < "u" ? mr(i.senderPublicKey, cr) : void 0,
        s = typeof i.iv < "u" ? mr(i.iv, cr) : Hn.randomBytes(Su),
        o = new ju.ChaCha20Poly1305(mr(i.symKey, cr)).seal(s, mr(i.message, ku));
    return $E({
        type: e,
        sealed: o,
        iv: s,
        senderPublicKey: t
    })
}

function NE(i) {
    const e = new ju.ChaCha20Poly1305(mr(i.symKey, cr)),
        {
            sealed: t,
            iv: s
        } = ta(i.encoded),
        o = e.open(s, t);
    if (o === null) throw new Error("Failed to decrypt");
    return ur(o, ku)
}

function $E(i) {
    if (Rs(i.type) === hn) {
        if (typeof i.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return ur(mu([i.type, i.senderPublicKey, i.iv, i.sealed]), Du)
    }
    return ur(mu([i.type, i.iv, i.sealed]), Du)
}

function ta(i) {
    const e = mr(i, Du),
        t = e.slice(PE, xf),
        s = xf;
    if (Rs(t) === hn) {
        const f = s + Vu,
            p = f + Su,
            y = e.slice(s, f),
            m = e.slice(f, p),
            b = e.slice(p);
        return {
            type: t,
            sealed: b,
            iv: m,
            senderPublicKey: y
        }
    }
    const o = s + Su,
        c = e.slice(s, o),
        d = e.slice(o);
    return {
        type: t,
        sealed: d,
        iv: c
    }
}

function UE(i, e) {
    const t = ta(i);
    return fp({
        type: Rs(t.type),
        senderPublicKey: typeof t.senderPublicKey < "u" ? ur(t.senderPublicKey, cr) : void 0,
        receiverPublicKey: e == null ? void 0 : e.receiverPublicKey
    })
}

function fp(i) {
    const e = (i == null ? void 0 : i.type) || lp;
    if (e === hn) {
        if (typeof(i == null ? void 0 : i.senderPublicKey) > "u") throw new Error("missing sender public key");
        if (typeof(i == null ? void 0 : i.receiverPublicKey) > "u") throw new Error("missing receiver public key")
    }
    return {
        type: e,
        senderPublicKey: i == null ? void 0 : i.senderPublicKey,
        receiverPublicKey: i == null ? void 0 : i.receiverPublicKey
    }
}

function Pf(i) {
    return i.type === hn && typeof i.senderPublicKey == "string" && typeof i.receiverPublicKey == "string"
}
var ME = Object.defineProperty,
    Of = Object.getOwnPropertySymbols,
    LE = Object.prototype.hasOwnProperty,
    jE = Object.prototype.propertyIsEnumerable,
    Cf = (i, e, t) => e in i ? ME(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    Af = (i, e) => {
        for (var t in e || (e = {})) LE.call(e, t) && Cf(i, t, e[t]);
        if (Of)
            for (var t of Of(e)) jE.call(e, t) && Cf(i, t, e[t]);
        return i
    };
const qE = "ReactNative",
    Or = {
        reactNative: "react-native",
        node: "node",
        browser: "browser",
        unknown: "unknown"
    },
    FE = "js";

function Wu() {
    return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
}

function Kn() {
    return !Hu() && !!Bu() && navigator.product === qE
}

function kn() {
    return !Wu() && !!Bu() && !!Hu()
}

function Ns() {
    return Kn() ? Or.reactNative : Wu() ? Or.node : kn() ? Or.browser : Or.unknown
}

function zE() {
    var i;
    try {
        return Kn() && typeof global < "u" && typeof(global == null ? void 0 : global.Application) < "u" ? (i = global.Application) == null ? void 0 : i.applicationId : void 0
    } catch {
        return
    }
}

function HE(i, e) {
    let t = Is.parse(i);
    return t = Af(Af({}, t), e), i = Is.stringify(t), i
}

function BE() {
    return ap() || {
        name: "",
        description: "",
        url: "",
        icons: [""]
    }
}

function KE() {
    if (Ns() === Or.reactNative && typeof global < "u" && typeof(global == null ? void 0 : global.Platform) < "u") {
        const {
            OS: t,
            Version: s
        } = global.Platform;
        return [t, s].join("-")
    }
    const i = P_();
    if (i === null) return "unknown";
    const e = i.os ? i.os.replace(" ", "").toLowerCase() : "unknown";
    return i.type === "browser" ? [e, i.name, i.version].join("-") : [e, i.version].join("-")
}

function kE() {
    var i;
    const e = Ns();
    return e === Or.browser ? [e, ((i = op()) == null ? void 0 : i.host) || "unknown"].join(":") : e
}

function VE(i, e, t) {
    const s = KE(),
        o = kE();
    return [
        [i, e].join("-"), [FE, t].join("-"), s, o
    ].join("/")
}

function WE({
    protocol: i,
    version: e,
    relayUrl: t,
    sdkVersion: s,
    auth: o,
    projectId: c,
    useOnCloseEvent: d,
    bundleId: f
}) {
    const p = t.split("?"),
        y = VE(i, e, s),
        m = {
            auth: o,
            ua: y,
            projectId: c,
            useOnCloseEvent: d || void 0,
            origin: f || void 0
        },
        b = HE(p[1] || "", m);
    return p[0] + "?" + b
}

function an(i, e) {
    return i.filter(t => e.includes(t)).length === i.length
}

function dp(i) {
    return Object.fromEntries(i.entries())
}

function pp(i) {
    return new Map(Object.entries(i))
}

function jn(i = ve.FIVE_MINUTES, e) {
    const t = ve.toMiliseconds(i || ve.FIVE_MINUTES);
    let s, o, c;
    return {
        resolve: d => {
            c && s && (clearTimeout(c), s(d))
        },
        reject: d => {
            c && o && (clearTimeout(c), o(d))
        },
        done: () => new Promise((d, f) => {
            c = setTimeout(() => {
                f(new Error(e))
            }, t), s = d, o = f
        })
    }
}

function xs(i, e, t) {
    return new Promise(async (s, o) => {
        const c = setTimeout(() => o(new Error(t)), e);
        try {
            const d = await i;
            s(d)
        } catch (d) {
            o(d)
        }
        clearTimeout(c)
    })
}

function gp(i, e) {
    if (typeof e == "string" && e.startsWith(`${i}:`)) return e;
    if (i.toLowerCase() === "topic") {
        if (typeof e != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${e}`
    } else if (i.toLowerCase() === "id") {
        if (typeof e != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${e}`
    }
    throw new Error(`Unknown expirer target type: ${i}`)
}

function GE(i) {
    return gp("topic", i)
}

function YE(i) {
    return gp("id", i)
}

function yp(i) {
    const [e, t] = i.split(":"), s = {
        id: void 0,
        topic: void 0
    };
    if (e === "topic" && typeof t == "string") s.topic = t;
    else if (e === "id" && Number.isInteger(Number(t))) s.id = Number(t);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${t}`);
    return s
}

function Pr(i, e) {
    return ve.fromMiliseconds((e || Date.now()) + ve.toMiliseconds(i))
}

function ji(i) {
    return Date.now() >= ve.toMiliseconds(i)
}

function Nt(i, e) {
    return `${i}${e?`:${e}`:""}`
}

function Jc(i = [], e = []) {
    return [...new Set([...i, ...e])]
}
async function JE({
    id: i,
    topic: e,
    wcDeepLink: t
}) {
    try {
        if (!t) return;
        const s = typeof t == "string" ? JSON.parse(t) : t;
        let o = s == null ? void 0 : s.href;
        if (typeof o != "string") return;
        o.endsWith("/") && (o = o.slice(0, -1));
        const c = `${o}/wc?requestId=${i}&sessionTopic=${e}`,
            d = Ns();
        d === Or.browser ? c.startsWith("https://") ? window.open(c, "_blank", "noreferrer noopener") : window.open(c, "_self", "noreferrer noopener") : d === Or.reactNative && typeof(global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(c)
    } catch (s) {
        console.error(s)
    }
}
async function QE(i, e) {
    try {
        return await i.getItem(e) || (kn() ? localStorage.getItem(e) : void 0)
    } catch (t) {
        console.error(t)
    }
}
const XE = "irn";

function xu(i) {
    return (i == null ? void 0 : i.relay) || {
        protocol: XE
    }
}

function Jo(i) {
    const e = DE[i];
    if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${i}`);
    return e
}
var ZE = Object.defineProperty,
    eD = Object.defineProperties,
    tD = Object.getOwnPropertyDescriptors,
    Tf = Object.getOwnPropertySymbols,
    rD = Object.prototype.hasOwnProperty,
    iD = Object.prototype.propertyIsEnumerable,
    Rf = (i, e, t) => e in i ? ZE(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    nD = (i, e) => {
        for (var t in e || (e = {})) rD.call(e, t) && Rf(i, t, e[t]);
        if (Tf)
            for (var t of Tf(e)) iD.call(e, t) && Rf(i, t, e[t]);
        return i
    },
    sD = (i, e) => eD(i, tD(e));

function oD(i, e = "-") {
    const t = {},
        s = "relay" + e;
    return Object.keys(i).forEach(o => {
        if (o.startsWith(s)) {
            const c = o.replace(s, ""),
                d = i[o];
            t[c] = d
        }
    }), t
}

function Nf(i) {
    i = i.includes("wc://") ? i.replace("wc://", "") : i, i = i.includes("wc:") ? i.replace("wc:", "") : i;
    const e = i.indexOf(":"),
        t = i.indexOf("?") !== -1 ? i.indexOf("?") : void 0,
        s = i.substring(0, e),
        o = i.substring(e + 1, t).split("@"),
        c = typeof t < "u" ? i.substring(t) : "",
        d = Is.parse(c);
    return {
        protocol: s,
        topic: aD(o[0]),
        version: parseInt(o[1], 10),
        symKey: d.symKey,
        relay: oD(d),
        expiryTimestamp: d.expiryTimestamp ? parseInt(d.expiryTimestamp, 10) : void 0
    }
}

function aD(i) {
    return i.startsWith("//") ? i.substring(2) : i
}

function cD(i, e = "-") {
    const t = "relay",
        s = {};
    return Object.keys(i).forEach(o => {
        const c = t + e + o;
        i[o] && (s[c] = i[o])
    }), s
}

function uD(i) {
    return `${i.protocol}:${i.topic}@${i.version}?` + Is.stringify(sD(nD({
        symKey: i.symKey
    }, cD(i.relay)), {
        expiryTimestamp: i.expiryTimestamp
    }))
}

function Vn(i) {
    const e = [];
    return i.forEach(t => {
        const [s, o] = t.split(":");
        e.push(`${s}:${o}`)
    }), e
}

function hD(i) {
    const e = [];
    return Object.values(i).forEach(t => {
        e.push(...Vn(t.accounts))
    }), e
}

function lD(i, e) {
    const t = [];
    return Object.values(i).forEach(s => {
        Vn(s.accounts).includes(e) && t.push(...s.methods)
    }), t
}

function fD(i, e) {
    const t = [];
    return Object.values(i).forEach(s => {
        Vn(s.accounts).includes(e) && t.push(...s.events)
    }), t
}

function Gu(i) {
    return i.includes(":")
}

function bs(i) {
    return Gu(i) ? i.split(":")[0] : i
}
const dD = {
        INVALID_METHOD: {
            message: "Invalid method.",
            code: 1001
        },
        INVALID_EVENT: {
            message: "Invalid event.",
            code: 1002
        },
        INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003
        },
        INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004
        },
        INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005
        },
        UNAUTHORIZED_METHOD: {
            message: "Unauthorized method.",
            code: 3001
        },
        UNAUTHORIZED_EVENT: {
            message: "Unauthorized event.",
            code: 3002
        },
        UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004
        },
        USER_REJECTED: {
            message: "User rejected.",
            code: 5e3
        },
        USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001
        },
        USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002
        },
        USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003
        },
        UNSUPPORTED_CHAINS: {
            message: "Unsupported chains.",
            code: 5100
        },
        UNSUPPORTED_METHODS: {
            message: "Unsupported methods.",
            code: 5101
        },
        UNSUPPORTED_EVENTS: {
            message: "Unsupported events.",
            code: 5102
        },
        UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103
        },
        UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104
        },
        USER_DISCONNECTED: {
            message: "User disconnected.",
            code: 6e3
        },
        SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3
        },
        WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001
        }
    },
    pD = {
        NOT_INITIALIZED: {
            message: "Not initialized.",
            code: 1
        },
        NO_MATCHING_KEY: {
            message: "No matching key.",
            code: 2
        },
        RESTORE_WILL_OVERRIDE: {
            message: "Restore will override.",
            code: 3
        },
        RESUBSCRIBED: {
            message: "Resubscribed.",
            code: 4
        },
        MISSING_OR_INVALID: {
            message: "Missing or invalid.",
            code: 5
        },
        EXPIRED: {
            message: "Expired.",
            code: 6
        },
        UNKNOWN_TYPE: {
            message: "Unknown type.",
            code: 7
        },
        MISMATCHED_TOPIC: {
            message: "Mismatched topic.",
            code: 8
        },
        NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9
        }
    };

function ae(i, e) {
    const {
        message: t,
        code: s
    } = pD[i];
    return {
        message: e ? `${t} ${e}` : t,
        code: s
    }
}

function mt(i, e) {
    const {
        message: t,
        code: s
    } = dD[i];
    return {
        message: e ? `${t} ${e}` : t,
        code: s
    }
}

function si(i, e) {
    return Array.isArray(i) ? typeof e < "u" && i.length ? i.every(e) : !0 : !1
}

function Ps(i) {
    return Object.getPrototypeOf(i) === Object.prototype && Object.keys(i).length
}

function ar(i) {
    return typeof i > "u"
}

function Vt(i, e) {
    return e && ar(i) ? !0 : typeof i == "string" && !!i.trim().length
}

function Yu(i, e) {
    return e && ar(i) ? !0 : typeof i == "number" && !isNaN(i)
}

function gD(i, e) {
    const {
        requiredNamespaces: t
    } = e, s = Object.keys(i.namespaces), o = Object.keys(t);
    let c = !0;
    return an(o, s) ? (s.forEach(d => {
        const {
            accounts: f,
            methods: p,
            events: y
        } = i.namespaces[d], m = Vn(f), b = t[d];
        (!an(up(d, b), m) || !an(b.methods, p) || !an(b.events, y)) && (c = !1)
    }), c) : !1
}

function ra(i) {
    return Vt(i, !1) && i.includes(":") ? i.split(":").length === 2 : !1
}

function yD(i) {
    if (Vt(i, !1) && i.includes(":")) {
        const e = i.split(":");
        if (e.length === 3) {
            const t = e[0] + ":" + e[1];
            return !!e[2] && ra(t)
        }
    }
    return !1
}

function vD(i) {
    if (Vt(i, !1)) try {
        return typeof new URL(i) < "u"
    } catch {
        return !1
    }
    return !1
}

function mD(i) {
    var e;
    return (e = i == null ? void 0 : i.proposer) == null ? void 0 : e.publicKey
}

function wD(i) {
    return i == null ? void 0 : i.topic
}

function bD(i, e) {
    let t = null;
    return Vt(i == null ? void 0 : i.publicKey, !1) || (t = ae("MISSING_OR_INVALID", `${e} controller public key should be a string`)), t
}

function $f(i) {
    let e = !0;
    return si(i) ? i.length && (e = i.every(t => Vt(t, !1))) : e = !1, e
}

function _D(i, e, t) {
    let s = null;
    return si(e) && e.length ? e.forEach(o => {
        s || ra(o) || (s = mt("UNSUPPORTED_CHAINS", `${t}, chain ${o} should be a string and conform to "namespace:chainId" format`))
    }) : ra(i) || (s = mt("UNSUPPORTED_CHAINS", `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), s
}

function ED(i, e, t) {
    let s = null;
    return Object.entries(i).forEach(([o, c]) => {
        if (s) return;
        const d = _D(o, up(o, c), `${e} ${t}`);
        d && (s = d)
    }), s
}

function DD(i, e) {
    let t = null;
    return si(i) ? i.forEach(s => {
        t || yD(s) || (t = mt("UNSUPPORTED_ACCOUNTS", `${e}, account ${s} should be a string and conform to "namespace:chainId:address" format`))
    }) : t = mt("UNSUPPORTED_ACCOUNTS", `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), t
}

function SD(i, e) {
    let t = null;
    return Object.values(i).forEach(s => {
        if (t) return;
        const o = DD(s == null ? void 0 : s.accounts, `${e} namespace`);
        o && (t = o)
    }), t
}

function ID(i, e) {
    let t = null;
    return $f(i == null ? void 0 : i.methods) ? $f(i == null ? void 0 : i.events) || (t = mt("UNSUPPORTED_EVENTS", `${e}, events should be an array of strings or empty array for no events`)) : t = mt("UNSUPPORTED_METHODS", `${e}, methods should be an array of strings or empty array for no methods`), t
}

function vp(i, e) {
    let t = null;
    return Object.values(i).forEach(s => {
        if (t) return;
        const o = ID(s, `${e}, namespace`);
        o && (t = o)
    }), t
}

function xD(i, e, t) {
    let s = null;
    if (i && Ps(i)) {
        const o = vp(i, e);
        o && (s = o);
        const c = ED(i, e, t);
        c && (s = c)
    } else s = ae("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
    return s
}

function Qc(i, e) {
    let t = null;
    if (i && Ps(i)) {
        const s = vp(i, e);
        s && (t = s);
        const o = SD(i, e);
        o && (t = o)
    } else t = ae("MISSING_OR_INVALID", `${e}, namespaces should be an object with data`);
    return t
}

function mp(i) {
    return Vt(i.protocol, !0)
}

function PD(i, e) {
    let t = !1;
    return e && !i ? t = !0 : i && si(i) && i.length && i.forEach(s => {
        t = mp(s)
    }), t
}

function OD(i) {
    return typeof i == "number"
}

function vr(i) {
    return typeof i < "u" && typeof i !== null
}

function CD(i) {
    return !(!i || typeof i != "object" || !i.code || !Yu(i.code, !1) || !i.message || !Vt(i.message, !1))
}

function AD(i) {
    return !(ar(i) || !Vt(i.method, !1))
}

function TD(i) {
    return !(ar(i) || ar(i.result) && ar(i.error) || !Yu(i.id, !1) || !Vt(i.jsonrpc, !1))
}

function RD(i) {
    return !(ar(i) || !Vt(i.name, !1))
}

function Uf(i, e) {
    return !(!ra(e) || !hD(i).includes(e))
}

function ND(i, e, t) {
    return Vt(t, !1) ? lD(i, e).includes(t) : !1
}

function $D(i, e, t) {
    return Vt(t, !1) ? fD(i, e).includes(t) : !1
}

function Mf(i, e, t) {
    let s = null;
    const o = UD(i),
        c = MD(e),
        d = Object.keys(o),
        f = Object.keys(c),
        p = Lf(Object.keys(i)),
        y = Lf(Object.keys(e)),
        m = p.filter(b => !y.includes(b));
    return m.length && (s = ae("NON_CONFORMING_NAMESPACES", `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${m.toString()}
      Received: ${Object.keys(e).toString()}`)), an(d, f) || (s = ae("NON_CONFORMING_NAMESPACES", `${t} namespaces chains don't satisfy required namespaces.
      Required: ${d.toString()}
      Approved: ${f.toString()}`)), Object.keys(e).forEach(b => {
        if (!b.includes(":") || s) return;
        const P = Vn(e[b].accounts);
        P.includes(b) || (s = ae("NON_CONFORMING_NAMESPACES", `${t} namespaces accounts don't satisfy namespace accounts for ${b}
        Required: ${b}
        Approved: ${P.toString()}`))
    }), d.forEach(b => {
        s || (an(o[b].methods, c[b].methods) ? an(o[b].events, c[b].events) || (s = ae("NON_CONFORMING_NAMESPACES", `${t} namespaces events don't satisfy namespace events for ${b}`)) : s = ae("NON_CONFORMING_NAMESPACES", `${t} namespaces methods don't satisfy namespace methods for ${b}`))
    }), s
}

function UD(i) {
    const e = {};
    return Object.keys(i).forEach(t => {
        var s;
        t.includes(":") ? e[t] = i[t] : (s = i[t].chains) == null || s.forEach(o => {
            e[o] = {
                methods: i[t].methods,
                events: i[t].events
            }
        })
    }), e
}

function Lf(i) {
    return [...new Set(i.map(e => e.includes(":") ? e.split(":")[0] : e))]
}

function MD(i) {
    const e = {};
    return Object.keys(i).forEach(t => {
        if (t.includes(":")) e[t] = i[t];
        else {
            const s = Vn(i[t].accounts);
            s == null || s.forEach(o => {
                e[o] = {
                    accounts: i[t].accounts.filter(c => c.includes(`${o}:`)),
                    methods: i[t].methods,
                    events: i[t].events
                }
            })
        }
    }), e
}

function LD(i, e) {
    return Yu(i, !1) && i <= e.max && i >= e.min
}

function jf() {
    const i = Ns();
    return new Promise(e => {
        switch (i) {
            case Or.browser:
                e(jD());
                break;
            case Or.reactNative:
                e(qD());
                break;
            case Or.node:
                e(FD());
                break;
            default:
                e(!0)
        }
    })
}

function jD() {
    return kn() && (navigator == null ? void 0 : navigator.onLine)
}
async function qD() {
    if (Kn() && typeof global < "u" && global != null && global.NetInfo) {
        const i = await (global == null ? void 0 : global.NetInfo.fetch());
        return i == null ? void 0 : i.isConnected
    }
    return !0
}

function FD() {
    return !0
}

function zD(i) {
    switch (Ns()) {
        case Or.browser:
            HD(i);
            break;
        case Or.reactNative:
            BD(i);
            break
    }
}

function HD(i) {
    !Kn() && kn() && (window.addEventListener("online", () => i(!0)), window.addEventListener("offline", () => i(!1)))
}

function BD(i) {
    Kn() && typeof global < "u" && global != null && global.NetInfo && (global == null || global.NetInfo.addEventListener(e => i(e == null ? void 0 : e.isConnected)))
}
const Xc = {};
let Bo = class {
    static get(e) {
        return Xc[e]
    }
    static set(e, t) {
        Xc[e] = t
    }
    static delete(e) {
        delete Xc[e]
    }
};
const KD = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    kD = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    VD = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function WD(i, e) {
    if (i === "__proto__" || i === "constructor" && e && typeof e == "object" && "prototype" in e) {
        GD(i);
        return
    }
    return e
}

function GD(i) {
    console.warn(`[destr] Dropping "${i}" key to prevent prototype pollution.`)
}

function Ko(i, e = {}) {
    if (typeof i != "string") return i;
    const t = i.trim();
    if (i[0] === '"' && i.endsWith('"') && !i.includes("\\")) return t.slice(1, -1);
    if (t.length <= 9) {
        const s = t.toLowerCase();
        if (s === "true") return !0;
        if (s === "false") return !1;
        if (s === "undefined") return;
        if (s === "null") return null;
        if (s === "nan") return Number.NaN;
        if (s === "infinity") return Number.POSITIVE_INFINITY;
        if (s === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!VD.test(i)) {
        if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
        return i
    }
    try {
        if (KD.test(i) || kD.test(i)) {
            if (e.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(i, WD)
        }
        return JSON.parse(i)
    } catch (s) {
        if (e.strict) throw s;
        return i
    }
}

function YD(i) {
    return !i || typeof i.then != "function" ? Promise.resolve(i) : i
}

function kt(i, ...e) {
    try {
        return YD(i(...e))
    } catch (t) {
        return Promise.reject(t)
    }
}

function JD(i) {
    const e = typeof i;
    return i === null || e !== "object" && e !== "function"
}

function QD(i) {
    const e = Object.getPrototypeOf(i);
    return !e || e.isPrototypeOf(Object)
}

function Qo(i) {
    if (JD(i)) return String(i);
    if (QD(i) || Array.isArray(i)) return JSON.stringify(i);
    if (typeof i.toJSON == "function") return Qo(i.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}

function wp() {
    if (typeof Buffer === void 0) throw new TypeError("[unstorage] Buffer is not supported!")
}
const Pu = "base64:";

function XD(i) {
    if (typeof i == "string") return i;
    wp();
    const e = Buffer.from(i).toString("base64");
    return Pu + e
}

function ZD(i) {
    return typeof i != "string" || !i.startsWith(Pu) ? i : (wp(), Buffer.from(i.slice(Pu.length), "base64"))
}

function yr(i) {
    return i ? i.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
}

function e3(...i) {
    return yr(i.join(":"))
}

function ko(i) {
    return i = yr(i), i ? i + ":" : ""
}
const t3 = "memory",
    r3 = () => {
        const i = new Map;
        return {
            name: t3,
            options: {},
            hasItem(e) {
                return i.has(e)
            },
            getItem(e) {
                return i.get(e) ? ? null
            },
            getItemRaw(e) {
                return i.get(e) ? ? null
            },
            setItem(e, t) {
                i.set(e, t)
            },
            setItemRaw(e, t) {
                i.set(e, t)
            },
            removeItem(e) {
                i.delete(e)
            },
            getKeys() {
                return Array.from(i.keys())
            },
            clear() {
                i.clear()
            },
            dispose() {
                i.clear()
            }
        }
    };

function i3(i = {}) {
    const e = {
            mounts: {
                "": i.driver || r3()
            },
            mountpoints: [""],
            watching: !1,
            watchListeners: [],
            unwatch: {}
        },
        t = y => {
            for (const m of e.mountpoints)
                if (y.startsWith(m)) return {
                    base: m,
                    relativeKey: y.slice(m.length),
                    driver: e.mounts[m]
                };
            return {
                base: "",
                relativeKey: y,
                driver: e.mounts[""]
            }
        },
        s = (y, m) => e.mountpoints.filter(b => b.startsWith(y) || m && y.startsWith(b)).map(b => ({
            relativeBase: y.length > b.length ? y.slice(b.length) : void 0,
            mountpoint: b,
            driver: e.mounts[b]
        })),
        o = (y, m) => {
            if (e.watching) {
                m = yr(m);
                for (const b of e.watchListeners) b(y, m)
            }
        },
        c = async () => {
            if (!e.watching) {
                e.watching = !0;
                for (const y in e.mounts) e.unwatch[y] = await qf(e.mounts[y], o, y)
            }
        },
        d = async () => {
            if (e.watching) {
                for (const y in e.unwatch) await e.unwatch[y]();
                e.unwatch = {}, e.watching = !1
            }
        },
        f = (y, m, b) => {
            const P = new Map,
                O = S => {
                    let K = P.get(S.base);
                    return K || (K = {
                        driver: S.driver,
                        base: S.base,
                        items: []
                    }, P.set(S.base, K)), K
                };
            for (const S of y) {
                const K = typeof S == "string",
                    B = yr(K ? S : S.key),
                    Z = K ? void 0 : S.value,
                    $ = K || !S.options ? m : { ...m,
                        ...S.options
                    },
                    L = t(B);
                O(L).items.push({
                    key: B,
                    value: Z,
                    relativeKey: L.relativeKey,
                    options: $
                })
            }
            return Promise.all([...P.values()].map(S => b(S))).then(S => S.flat())
        },
        p = {
            hasItem(y, m = {}) {
                y = yr(y);
                const {
                    relativeKey: b,
                    driver: P
                } = t(y);
                return kt(P.hasItem, b, m)
            },
            getItem(y, m = {}) {
                y = yr(y);
                const {
                    relativeKey: b,
                    driver: P
                } = t(y);
                return kt(P.getItem, b, m).then(O => Ko(O))
            },
            getItems(y, m) {
                return f(y, m, b => b.driver.getItems ? kt(b.driver.getItems, b.items.map(P => ({
                    key: P.relativeKey,
                    options: P.options
                })), m).then(P => P.map(O => ({
                    key: e3(b.base, O.key),
                    value: Ko(O.value)
                }))) : Promise.all(b.items.map(P => kt(b.driver.getItem, P.relativeKey, P.options).then(O => ({
                    key: P.key,
                    value: Ko(O)
                })))))
            },
            getItemRaw(y, m = {}) {
                y = yr(y);
                const {
                    relativeKey: b,
                    driver: P
                } = t(y);
                return P.getItemRaw ? kt(P.getItemRaw, b, m) : kt(P.getItem, b, m).then(O => ZD(O))
            },
            async setItem(y, m, b = {}) {
                if (m === void 0) return p.removeItem(y);
                y = yr(y);
                const {
                    relativeKey: P,
                    driver: O
                } = t(y);
                O.setItem && (await kt(O.setItem, P, Qo(m), b), O.watch || o("update", y))
            },
            async setItems(y, m) {
                await f(y, m, async b => {
                    if (b.driver.setItems) return kt(b.driver.setItems, b.items.map(P => ({
                        key: P.relativeKey,
                        value: Qo(P.value),
                        options: P.options
                    })), m);
                    b.driver.setItem && await Promise.all(b.items.map(P => kt(b.driver.setItem, P.relativeKey, Qo(P.value), P.options)))
                })
            },
            async setItemRaw(y, m, b = {}) {
                if (m === void 0) return p.removeItem(y, b);
                y = yr(y);
                const {
                    relativeKey: P,
                    driver: O
                } = t(y);
                if (O.setItemRaw) await kt(O.setItemRaw, P, m, b);
                else if (O.setItem) await kt(O.setItem, P, XD(m), b);
                else return;
                O.watch || o("update", y)
            },
            async removeItem(y, m = {}) {
                typeof m == "boolean" && (m = {
                    removeMeta: m
                }), y = yr(y);
                const {
                    relativeKey: b,
                    driver: P
                } = t(y);
                P.removeItem && (await kt(P.removeItem, b, m), (m.removeMeta || m.removeMata) && await kt(P.removeItem, b + "$", m), P.watch || o("remove", y))
            },
            async getMeta(y, m = {}) {
                typeof m == "boolean" && (m = {
                    nativeOnly: m
                }), y = yr(y);
                const {
                    relativeKey: b,
                    driver: P
                } = t(y), O = Object.create(null);
                if (P.getMeta && Object.assign(O, await kt(P.getMeta, b, m)), !m.nativeOnly) {
                    const S = await kt(P.getItem, b + "$", m).then(K => Ko(K));
                    S && typeof S == "object" && (typeof S.atime == "string" && (S.atime = new Date(S.atime)), typeof S.mtime == "string" && (S.mtime = new Date(S.mtime)), Object.assign(O, S))
                }
                return O
            },
            setMeta(y, m, b = {}) {
                return this.setItem(y + "$", m, b)
            },
            removeMeta(y, m = {}) {
                return this.removeItem(y + "$", m)
            },
            async getKeys(y, m = {}) {
                y = ko(y);
                const b = s(y, !0);
                let P = [];
                const O = [];
                for (const S of b) {
                    const B = (await kt(S.driver.getKeys, S.relativeBase, m)).map(Z => S.mountpoint + yr(Z)).filter(Z => !P.some($ => Z.startsWith($)));
                    O.push(...B), P = [S.mountpoint, ...P.filter(Z => !Z.startsWith(S.mountpoint))]
                }
                return y ? O.filter(S => S.startsWith(y) && !S.endsWith("$")) : O.filter(S => !S.endsWith("$"))
            },
            async clear(y, m = {}) {
                y = ko(y), await Promise.all(s(y, !1).map(async b => {
                    if (b.driver.clear) return kt(b.driver.clear, b.relativeBase, m);
                    if (b.driver.removeItem) {
                        const P = await b.driver.getKeys(b.relativeBase || "", m);
                        return Promise.all(P.map(O => b.driver.removeItem(O, m)))
                    }
                }))
            },
            async dispose() {
                await Promise.all(Object.values(e.mounts).map(y => Ff(y)))
            },
            async watch(y) {
                return await c(), e.watchListeners.push(y), async () => {
                    e.watchListeners = e.watchListeners.filter(m => m !== y), e.watchListeners.length === 0 && await d()
                }
            },
            async unwatch() {
                e.watchListeners = [], await d()
            },
            mount(y, m) {
                if (y = ko(y), y && e.mounts[y]) throw new Error(`already mounted at ${y}`);
                return y && (e.mountpoints.push(y), e.mountpoints.sort((b, P) => P.length - b.length)), e.mounts[y] = m, e.watching && Promise.resolve(qf(m, o, y)).then(b => {
                    e.unwatch[y] = b
                }).catch(console.error), p
            },
            async unmount(y, m = !0) {
                y = ko(y), !(!y || !e.mounts[y]) && (e.watching && y in e.unwatch && (e.unwatch[y](), delete e.unwatch[y]), m && await Ff(e.mounts[y]), e.mountpoints = e.mountpoints.filter(b => b !== y), delete e.mounts[y])
            },
            getMount(y = "") {
                y = yr(y) + ":";
                const m = t(y);
                return {
                    driver: m.driver,
                    base: m.base
                }
            },
            getMounts(y = "", m = {}) {
                return y = yr(y), s(y, m.parents).map(P => ({
                    driver: P.driver,
                    base: P.mountpoint
                }))
            }
        };
    return p
}

function qf(i, e, t) {
    return i.watch ? i.watch((s, o) => e(s, t + o)) : () => {}
}
async function Ff(i) {
    typeof i.dispose == "function" && await kt(i.dispose)
}

function ln(i) {
    return new Promise((e, t) => {
        i.oncomplete = i.onsuccess = () => e(i.result), i.onabort = i.onerror = () => t(i.error)
    })
}

function bp(i, e) {
    const t = indexedDB.open(i);
    t.onupgradeneeded = () => t.result.createObjectStore(e);
    const s = ln(t);
    return (o, c) => s.then(d => c(d.transaction(e, o).objectStore(e)))
}
let Zc;

function $s() {
    return Zc || (Zc = bp("keyval-store", "keyval")), Zc
}

function zf(i, e = $s()) {
    return e("readonly", t => ln(t.get(i)))
}

function n3(i, e, t = $s()) {
    return t("readwrite", s => (s.put(e, i), ln(s.transaction)))
}

function s3(i, e = $s()) {
    return e("readwrite", t => (t.delete(i), ln(t.transaction)))
}

function o3(i = $s()) {
    return i("readwrite", e => (e.clear(), ln(e.transaction)))
}

function a3(i, e) {
    return i.openCursor().onsuccess = function() {
        this.result && (e(this.result), this.result.continue())
    }, ln(i.transaction)
}

function c3(i = $s()) {
    return i("readonly", e => {
        if (e.getAllKeys) return ln(e.getAllKeys());
        const t = [];
        return a3(e, s => t.push(s.key)).then(() => t)
    })
}
const u3 = i => JSON.stringify(i, (e, t) => typeof t == "bigint" ? t.toString() + "n" : t),
    h3 = i => {
        const e = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            t = i.replace(e, '$1"$2n"$3');
        return JSON.parse(t, (s, o) => typeof o == "string" && o.match(/^\d+n$/) ? BigInt(o.substring(0, o.length - 1)) : o)
    };

function Us(i) {
    if (typeof i != "string") throw new Error(`Cannot safe json parse value of type ${typeof i}`);
    try {
        return h3(i)
    } catch {
        return i
    }
}

function cn(i) {
    return typeof i == "string" ? i : u3(i) || ""
}
const l3 = "idb-keyval";
var f3 = (i = {}) => {
    const e = i.base && i.base.length > 0 ? `${i.base}:` : "",
        t = o => e + o;
    let s;
    return i.dbName && i.storeName && (s = bp(i.dbName, i.storeName)), {
        name: l3,
        options: i,
        async hasItem(o) {
            return !(typeof await zf(t(o), s) > "u")
        },
        async getItem(o) {
            return await zf(t(o), s) ? ? null
        },
        setItem(o, c) {
            return n3(t(o), c, s)
        },
        removeItem(o) {
            return s3(t(o), s)
        },
        getKeys() {
            return c3(s)
        },
        clear() {
            return o3(s)
        }
    }
};
const d3 = "WALLET_CONNECT_V2_INDEXED_DB",
    p3 = "keyvaluestorage";
let g3 = class {
    constructor() {
        this.indexedDb = i3({
            driver: f3({
                dbName: d3,
                storeName: p3
            })
        })
    }
    async getKeys() {
        return this.indexedDb.getKeys()
    }
    async getEntries() {
        return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
    }
    async getItem(e) {
        const t = await this.indexedDb.getItem(e);
        if (t !== null) return t
    }
    async setItem(e, t) {
        await this.indexedDb.setItem(e, cn(t))
    }
    async removeItem(e) {
        await this.indexedDb.removeItem(e)
    }
};
var eu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Xo = {
        exports: {}
    };
(function() {
    let i;

    function e() {}
    i = e, i.prototype.getItem = function(t) {
        return this.hasOwnProperty(t) ? String(this[t]) : null
    }, i.prototype.setItem = function(t, s) {
        this[t] = String(s)
    }, i.prototype.removeItem = function(t) {
        delete this[t]
    }, i.prototype.clear = function() {
        const t = this;
        Object.keys(t).forEach(function(s) {
            t[s] = void 0, delete t[s]
        })
    }, i.prototype.key = function(t) {
        return t = t || 0, Object.keys(this)[t]
    }, i.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }), typeof eu < "u" && eu.localStorage ? Xo.exports = eu.localStorage : typeof window < "u" && window.localStorage ? Xo.exports = window.localStorage : Xo.exports = new e
})();

function y3(i) {
    var e;
    return [i[0], Us((e = i[1]) != null ? e : "")]
}
class v3 {
    constructor() {
        this.localStorage = Xo.exports
    }
    async getKeys() {
        return Object.keys(this.localStorage)
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(y3)
    }
    async getItem(e) {
        const t = this.localStorage.getItem(e);
        if (t !== null) return Us(t)
    }
    async setItem(e, t) {
        this.localStorage.setItem(e, cn(t))
    }
    async removeItem(e) {
        this.localStorage.removeItem(e)
    }
}
const m3 = "wc_storage_version",
    Hf = 1,
    w3 = async (i, e, t) => {
        const s = m3,
            o = await e.getItem(s);
        if (o && o >= Hf) {
            t(e);
            return
        }
        const c = await i.getKeys();
        if (!c.length) {
            t(e);
            return
        }
        const d = [];
        for (; c.length;) {
            const f = c.shift();
            if (!f) continue;
            const p = f.toLowerCase();
            if (p.includes("wc@") || p.includes("walletconnect") || p.includes("wc_") || p.includes("wallet_connect")) {
                const y = await i.getItem(f);
                await e.setItem(f, y), d.push(f)
            }
        }
        await e.setItem(s, Hf), t(e), b3(i, d)
    },
    b3 = async (i, e) => {
        e.length && e.forEach(async t => {
            await i.removeItem(t)
        })
    };
let _3 = class {
    constructor() {
        this.initialized = !1, this.setInitialized = t => {
            this.storage = t, this.initialized = !0
        };
        const e = new v3;
        this.storage = e;
        try {
            const t = new g3;
            w3(e, t, this.setInitialized)
        } catch {
            this.initialized = !0
        }
    }
    async getKeys() {
        return await this.initialize(), this.storage.getKeys()
    }
    async getEntries() {
        return await this.initialize(), this.storage.getEntries()
    }
    async getItem(e) {
        return await this.initialize(), this.storage.getItem(e)
    }
    async setItem(e, t) {
        return await this.initialize(), this.storage.setItem(e, t)
    }
    async removeItem(e) {
        return await this.initialize(), this.storage.removeItem(e)
    }
    async initialize() {
        this.initialized || await new Promise(e => {
            const t = setInterval(() => {
                this.initialized && (clearInterval(t), e())
            }, 20)
        })
    }
};
var Wn = {},
    gs = {},
    tu = {},
    ys = {};
let fn = class {};
const E3 = Object.freeze(Object.defineProperty({
        __proto__: null,
        IEvents: fn
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    D3 = Mu(E3);
var Bf;

function S3() {
    if (Bf) return ys;
    Bf = 1, Object.defineProperty(ys, "__esModule", {
        value: !0
    }), ys.IHeartBeat = void 0;
    const i = D3;
    class e extends i.IEvents {
        constructor(s) {
            super()
        }
    }
    return ys.IHeartBeat = e, ys
}
var Kf;

function _p() {
    return Kf || (Kf = 1, function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Si.__exportStar(S3(), i)
    }(tu)), tu
}
var ru = {},
    on = {},
    kf;

function I3() {
    if (kf) return on;
    kf = 1, Object.defineProperty(on, "__esModule", {
        value: !0
    }), on.HEARTBEAT_EVENTS = on.HEARTBEAT_INTERVAL = void 0;
    const i = ve;
    return on.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, on.HEARTBEAT_EVENTS = {
        pulse: "heartbeat_pulse"
    }, on
}
var Vf;

function Ep() {
    return Vf || (Vf = 1, function(i) {
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), Si.__exportStar(I3(), i)
    }(ru)), ru
}
var Wf;

function x3() {
    if (Wf) return gs;
    Wf = 1, Object.defineProperty(gs, "__esModule", {
        value: !0
    }), gs.HeartBeat = void 0;
    const i = Si,
        e = Fr,
        t = ve,
        s = _p(),
        o = Ep();
    class c extends s.IHeartBeat {
        constructor(f) {
            super(f), this.events = new e.EventEmitter, this.interval = o.HEARTBEAT_INTERVAL, this.interval = (f == null ? void 0 : f.interval) || o.HEARTBEAT_INTERVAL
        }
        static init(f) {
            return i.__awaiter(this, void 0, void 0, function*() {
                const p = new c(f);
                return yield p.init(), p
            })
        }
        init() {
            return i.__awaiter(this, void 0, void 0, function*() {
                yield this.initialize()
            })
        }
        stop() {
            clearInterval(this.intervalRef)
        }
        on(f, p) {
            this.events.on(f, p)
        }
        once(f, p) {
            this.events.once(f, p)
        }
        off(f, p) {
            this.events.off(f, p)
        }
        removeListener(f, p) {
            this.events.removeListener(f, p)
        }
        initialize() {
            return i.__awaiter(this, void 0, void 0, function*() {
                this.intervalRef = setInterval(() => this.pulse(), t.toMiliseconds(this.interval))
            })
        }
        pulse() {
            this.events.emit(o.HEARTBEAT_EVENTS.pulse)
        }
    }
    return gs.HeartBeat = c, gs
}(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    const e = Si;
    e.__exportStar(x3(), i), e.__exportStar(_p(), i), e.__exportStar(Ep(), i)
})(Wn);

function P3(i) {
    try {
        return JSON.stringify(i)
    } catch {
        return '"[Circular]"'
    }
}
var O3 = C3;

function C3(i, e, t) {
    var s = t && t.stringify || P3,
        o = 1;
    if (typeof i == "object" && i !== null) {
        var c = e.length + o;
        if (c === 1) return i;
        var d = new Array(c);
        d[0] = s(i);
        for (var f = 1; f < c; f++) d[f] = s(e[f]);
        return d.join(" ")
    }
    if (typeof i != "string") return i;
    var p = e.length;
    if (p === 0) return i;
    for (var y = "", m = 1 - o, b = -1, P = i && i.length || 0, O = 0; O < P;) {
        if (i.charCodeAt(O) === 37 && O + 1 < P) {
            switch (b = b > -1 ? b : 0, i.charCodeAt(O + 1)) {
                case 100:
                case 102:
                    if (m >= p || e[m] == null) break;
                    b < O && (y += i.slice(b, O)), y += Number(e[m]), b = O + 2, O++;
                    break;
                case 105:
                    if (m >= p || e[m] == null) break;
                    b < O && (y += i.slice(b, O)), y += Math.floor(Number(e[m])), b = O + 2, O++;
                    break;
                case 79:
                case 111:
                case 106:
                    if (m >= p || e[m] === void 0) break;
                    b < O && (y += i.slice(b, O));
                    var S = typeof e[m];
                    if (S === "string") {
                        y += "'" + e[m] + "'", b = O + 2, O++;
                        break
                    }
                    if (S === "function") {
                        y += e[m].name || "<anonymous>", b = O + 2, O++;
                        break
                    }
                    y += s(e[m]), b = O + 2, O++;
                    break;
                case 115:
                    if (m >= p) break;
                    b < O && (y += i.slice(b, O)), y += String(e[m]), b = O + 2, O++;
                    break;
                case 37:
                    b < O && (y += i.slice(b, O)), y += "%", b = O + 2, O++, m--;
                    break
            }++m
        }++O
    }
    return b === -1 ? i : (b < P && (y += i.slice(b)), y)
}
const Gf = O3;
var A3 = ni;
const Os = F3().console || {},
    T3 = {
        mapHttpRequest: Vo,
        mapHttpResponse: Vo,
        wrapRequestSerializer: iu,
        wrapResponseSerializer: iu,
        wrapErrorSerializer: iu,
        req: Vo,
        res: Vo,
        err: M3
    };

function R3(i, e) {
    return Array.isArray(i) ? i.filter(function(s) {
        return s !== "!stdSerializers.err"
    }) : i === !0 ? Object.keys(e) : !1
}

function ni(i) {
    i = i || {}, i.browser = i.browser || {};
    const e = i.browser.transmit;
    if (e && typeof e.send != "function") throw Error("pino: transmit option must have a send function");
    const t = i.browser.write || Os;
    i.browser.write && (i.browser.asObject = !0);
    const s = i.serializers || {},
        o = R3(i.browser.serialize, s);
    let c = i.browser.serialize;
    Array.isArray(i.browser.serialize) && i.browser.serialize.indexOf("!stdSerializers.err") > -1 && (c = !1);
    const d = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof t == "function" && (t.error = t.fatal = t.warn = t.info = t.debug = t.trace = t), i.enabled === !1 && (i.level = "silent");
    const f = i.level || "info",
        p = Object.create(t);
    p.log || (p.log = Cs), Object.defineProperty(p, "levelVal", {
        get: m
    }), Object.defineProperty(p, "level", {
        get: b,
        set: P
    });
    const y = {
        transmit: e,
        serialize: o,
        asObject: i.browser.asObject,
        levels: d,
        timestamp: L3(i)
    };
    p.levels = ni.levels, p.level = f, p.setMaxListeners = p.getMaxListeners = p.emit = p.addListener = p.on = p.prependListener = p.once = p.prependOnceListener = p.removeListener = p.removeAllListeners = p.listeners = p.listenerCount = p.eventNames = p.write = p.flush = Cs, p.serializers = s, p._serialize = o, p._stdErrSerialize = c, p.child = O, e && (p._logEvent = Ou());

    function m() {
        return this.level === "silent" ? 1 / 0 : this.levels.values[this.level]
    }

    function b() {
        return this._level
    }

    function P(S) {
        if (S !== "silent" && !this.levels.values[S]) throw Error("unknown level " + S);
        this._level = S, Un(y, p, "error", "log"), Un(y, p, "fatal", "error"), Un(y, p, "warn", "error"), Un(y, p, "info", "log"), Un(y, p, "debug", "log"), Un(y, p, "trace", "log")
    }

    function O(S, K) {
        if (!S) throw new Error("missing bindings for child Pino");
        K = K || {}, o && S.serializers && (K.serializers = S.serializers);
        const B = K.serializers;
        if (o && B) {
            var Z = Object.assign({}, s, B),
                $ = i.browser.serialize === !0 ? Object.keys(Z) : o;
            delete S.serializers, da([S], $, Z, this._stdErrSerialize)
        }

        function L(I) {
            this._childLevel = (I._childLevel | 0) + 1, this.error = Mn(I, S, "error"), this.fatal = Mn(I, S, "fatal"), this.warn = Mn(I, S, "warn"), this.info = Mn(I, S, "info"), this.debug = Mn(I, S, "debug"), this.trace = Mn(I, S, "trace"), Z && (this.serializers = Z, this._serialize = $), e && (this._logEvent = Ou([].concat(I._logEvent.bindings, S)))
        }
        return L.prototype = this, new L(this)
    }
    return p
}
ni.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
    }
};
ni.stdSerializers = T3;
ni.stdTimeFunctions = Object.assign({}, {
    nullTime: Dp,
    epochTime: Sp,
    unixTime: j3,
    isoTime: q3
});

function Un(i, e, t, s) {
    const o = Object.getPrototypeOf(e);
    e[t] = e.levelVal > e.levels.values[t] ? Cs : o[t] ? o[t] : Os[t] || Os[s] || Cs, N3(i, e, t)
}

function N3(i, e, t) {
    !i.transmit && e[t] === Cs || (e[t] = function(s) {
        return function() {
            const c = i.timestamp(),
                d = new Array(arguments.length),
                f = Object.getPrototypeOf && Object.getPrototypeOf(this) === Os ? Os : this;
            for (var p = 0; p < d.length; p++) d[p] = arguments[p];
            if (i.serialize && !i.asObject && da(d, this._serialize, this.serializers, this._stdErrSerialize), i.asObject ? s.call(f, $3(this, t, d, c)) : s.apply(f, d), i.transmit) {
                const y = i.transmit.level || e.level,
                    m = ni.levels.values[y],
                    b = ni.levels.values[t];
                if (b < m) return;
                U3(this, {
                    ts: c,
                    methodLevel: t,
                    methodValue: b,
                    transmitLevel: y,
                    transmitValue: ni.levels.values[i.transmit.level || e.level],
                    send: i.transmit.send,
                    val: e.levelVal
                }, d)
            }
        }
    }(e[t]))
}

function $3(i, e, t, s) {
    i._serialize && da(t, i._serialize, i.serializers, i._stdErrSerialize);
    const o = t.slice();
    let c = o[0];
    const d = {};
    s && (d.time = s), d.level = ni.levels.values[e];
    let f = (i._childLevel | 0) + 1;
    if (f < 1 && (f = 1), c !== null && typeof c == "object") {
        for (; f-- && typeof o[0] == "object";) Object.assign(d, o.shift());
        c = o.length ? Gf(o.shift(), o) : void 0
    } else typeof c == "string" && (c = Gf(o.shift(), o));
    return c !== void 0 && (d.msg = c), d
}

function da(i, e, t, s) {
    for (const o in i)
        if (s && i[o] instanceof Error) i[o] = ni.stdSerializers.err(i[o]);
        else if (typeof i[o] == "object" && !Array.isArray(i[o]))
        for (const c in i[o]) e && e.indexOf(c) > -1 && c in t && (i[o][c] = t[c](i[o][c]))
}

function Mn(i, e, t) {
    return function() {
        const s = new Array(1 + arguments.length);
        s[0] = e;
        for (var o = 1; o < s.length; o++) s[o] = arguments[o - 1];
        return i[t].apply(this, s)
    }
}

function U3(i, e, t) {
    const s = e.send,
        o = e.ts,
        c = e.methodLevel,
        d = e.methodValue,
        f = e.val,
        p = i._logEvent.bindings;
    da(t, i._serialize || Object.keys(i.serializers), i.serializers, i._stdErrSerialize === void 0 ? !0 : i._stdErrSerialize), i._logEvent.ts = o, i._logEvent.messages = t.filter(function(y) {
        return p.indexOf(y) === -1
    }), i._logEvent.level.label = c, i._logEvent.level.value = d, s(c, i._logEvent, f), i._logEvent = Ou(p)
}

function Ou(i) {
    return {
        ts: 0,
        messages: [],
        bindings: i || [],
        level: {
            label: "",
            value: 0
        }
    }
}

function M3(i) {
    const e = {
        type: i.constructor.name,
        msg: i.message,
        stack: i.stack
    };
    for (const t in i) e[t] === void 0 && (e[t] = i[t]);
    return e
}

function L3(i) {
    return typeof i.timestamp == "function" ? i.timestamp : i.timestamp === !1 ? Dp : Sp
}

function Vo() {
    return {}
}

function iu(i) {
    return i
}

function Cs() {}

function Dp() {
    return !1
}

function Sp() {
    return Date.now()
}

function j3() {
    return Math.round(Date.now() / 1e3)
}

function q3() {
    return new Date(Date.now()).toISOString()
}

function F3() {
    function i(e) {
        return typeof e < "u" && e
    }
    try {
        return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
            get: function() {
                return delete Object.prototype.globalThis, this.globalThis = this
            },
            configurable: !0
        }), globalThis
    } catch {
        return i(self) || i(window) || i(this) || {}
    }
}
const pa = oa(A3),
    z3 = {
        level: "info"
    },
    Ms = "custom_context";
var H3 = Object.defineProperty,
    B3 = Object.defineProperties,
    K3 = Object.getOwnPropertyDescriptors,
    Yf = Object.getOwnPropertySymbols,
    k3 = Object.prototype.hasOwnProperty,
    V3 = Object.prototype.propertyIsEnumerable,
    Jf = (i, e, t) => e in i ? H3(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    W3 = (i, e) => {
        for (var t in e || (e = {})) k3.call(e, t) && Jf(i, t, e[t]);
        if (Yf)
            for (var t of Yf(e)) V3.call(e, t) && Jf(i, t, e[t]);
        return i
    },
    G3 = (i, e) => B3(i, K3(e));

function ga(i) {
    return G3(W3({}, i), {
        level: (i == null ? void 0 : i.level) || z3.level
    })
}

function Y3(i, e = Ms) {
    return i[e] || ""
}

function J3(i, e, t = Ms) {
    return i[t] = e, i
}

function wr(i, e = Ms) {
    let t = "";
    return typeof i.bindings > "u" ? t = Y3(i, e) : t = i.bindings().context || "", t
}

function Q3(i, e, t = Ms) {
    const s = wr(i, t);
    return s.trim() ? `${s}/${e}` : e
}

function br(i, e, t = Ms) {
    const s = Q3(i, e, t),
        o = i.child({
            context: s
        });
    return J3(o, s, t)
}
class X3 extends fn {
    constructor(e) {
        super(), this.opts = e, this.protocol = "wc", this.version = 2
    }
}
let Z3 = class extends fn {
        constructor(e, t) {
            super(), this.core = e, this.logger = t, this.records = new Map
        }
    },
    e6 = class {
        constructor(e, t) {
            this.logger = e, this.core = t
        }
    },
    t6 = class extends fn {
        constructor(e, t) {
            super(), this.relayer = e, this.logger = t
        }
    },
    r6 = class extends fn {
        constructor(e) {
            super()
        }
    },
    i6 = class {
        constructor(e, t, s, o) {
            this.core = e, this.logger = t, this.name = s
        }
    };
class n6 extends fn {
    constructor(e, t) {
        super(), this.relayer = e, this.logger = t
    }
}
let s6 = class extends fn {
        constructor(e, t) {
            super(), this.core = e, this.logger = t
        }
    },
    o6 = class {
        constructor(e, t) {
            this.projectId = e, this.logger = t
        }
    },
    a6 = class {
        constructor(e, t) {
            this.projectId = e, this.logger = t
        }
    },
    c6 = class {
        constructor(e) {
            this.opts = e, this.protocol = "wc", this.version = 2
        }
    },
    u6 = class {
        constructor(e) {
            this.client = e
        }
    };
var Ju = {},
    Ip = {};
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var e = Me,
        t = Cr;
    i.DIGEST_LENGTH = 64, i.BLOCK_SIZE = 128;
    var s = function() {
        function f() {
            this.digestLength = i.DIGEST_LENGTH, this.blockSize = i.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return f.prototype._initState = function() {
            this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
        }, f.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, f.prototype.clean = function() {
            t.wipe(this._buffer), t.wipe(this._tempHi), t.wipe(this._tempLo), this.reset()
        }, f.prototype.update = function(p, y) {
            if (y === void 0 && (y = p.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
            var m = 0;
            if (this._bytesHashed += y, this._bufferLength > 0) {
                for (; this._bufferLength < i.BLOCK_SIZE && y > 0;) this._buffer[this._bufferLength++] = p[m++], y--;
                this._bufferLength === this.blockSize && (c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (y >= this.blockSize && (m = c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, p, m, y), y %= this.blockSize); y > 0;) this._buffer[this._bufferLength++] = p[m++], y--;
            return this
        }, f.prototype.finish = function(p) {
            if (!this._finished) {
                var y = this._bytesHashed,
                    m = this._bufferLength,
                    b = y / 536870912 | 0,
                    P = y << 3,
                    O = y % 128 < 112 ? 128 : 256;
                this._buffer[m] = 128;
                for (var S = m + 1; S < O - 8; S++) this._buffer[S] = 0;
                e.writeUint32BE(b, this._buffer, O - 8), e.writeUint32BE(P, this._buffer, O - 4), c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, O), this._finished = !0
            }
            for (var S = 0; S < this.digestLength / 8; S++) e.writeUint32BE(this._stateHi[S], p, S * 8), e.writeUint32BE(this._stateLo[S], p, S * 8 + 4);
            return this
        }, f.prototype.digest = function() {
            var p = new Uint8Array(this.digestLength);
            return this.finish(p), p
        }, f.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, f.prototype.restoreState = function(p) {
            return this._stateHi.set(p.stateHi), this._stateLo.set(p.stateLo), this._bufferLength = p.bufferLength, p.buffer && this._buffer.set(p.buffer), this._bytesHashed = p.bytesHashed, this._finished = !1, this
        }, f.prototype.cleanSavedState = function(p) {
            t.wipe(p.stateHi), t.wipe(p.stateLo), p.buffer && t.wipe(p.buffer), p.bufferLength = 0, p.bytesHashed = 0
        }, f
    }();
    i.SHA512 = s;
    var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

    function c(f, p, y, m, b, P, O) {
        for (var S = y[0], K = y[1], B = y[2], Z = y[3], $ = y[4], L = y[5], I = y[6], C = y[7], A = m[0], h = m[1], _ = m[2], ee = m[3], ne = m[4], ue = m[5], ge = m[6], ye = m[7], D, R, X, J, k, V, te, ie; O >= 128;) {
            for (var De = 0; De < 16; De++) {
                var oe = 8 * De + P;
                f[De] = e.readUint32BE(b, oe), p[De] = e.readUint32BE(b, oe + 4)
            }
            for (var De = 0; De < 80; De++) {
                var Se = S,
                    le = K,
                    Ae = B,
                    z = Z,
                    F = $,
                    U = L,
                    l = I,
                    T = C,
                    se = A,
                    he = h,
                    Ee = _,
                    He = ee,
                    ke = ne,
                    Le = ue,
                    dt = ge,
                    pt = ye;
                if (D = C, R = ye, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = ($ >>> 14 | ne << 18) ^ ($ >>> 18 | ne << 14) ^ (ne >>> 9 | $ << 23), R = (ne >>> 14 | $ << 18) ^ (ne >>> 18 | $ << 14) ^ ($ >>> 9 | ne << 23), k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, D = $ & L ^ ~$ & I, R = ne & ue ^ ~ne & ge, k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, D = o[De * 2], R = o[De * 2 + 1], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, D = f[De % 16], R = p[De % 16], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, X = te & 65535 | ie << 16, J = k & 65535 | V << 16, D = X, R = J, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = (S >>> 28 | A << 4) ^ (A >>> 2 | S << 30) ^ (A >>> 7 | S << 25), R = (A >>> 28 | S << 4) ^ (S >>> 2 | A << 30) ^ (S >>> 7 | A << 25), k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, D = S & K ^ S & B ^ K & B, R = A & h ^ A & _ ^ h & _, k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, T = te & 65535 | ie << 16, pt = k & 65535 | V << 16, D = z, R = He, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = X, R = J, k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, z = te & 65535 | ie << 16, He = k & 65535 | V << 16, K = Se, B = le, Z = Ae, $ = z, L = F, I = U, C = l, S = T, h = se, _ = he, ee = Ee, ne = He, ue = ke, ge = Le, ye = dt, A = pt, De % 16 === 15)
                    for (var oe = 0; oe < 16; oe++) D = f[oe], R = p[oe], k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = f[(oe + 9) % 16], R = p[(oe + 9) % 16], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, X = f[(oe + 1) % 16], J = p[(oe + 1) % 16], D = (X >>> 1 | J << 31) ^ (X >>> 8 | J << 24) ^ X >>> 7, R = (J >>> 1 | X << 31) ^ (J >>> 8 | X << 24) ^ (J >>> 7 | X << 25), k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, X = f[(oe + 14) % 16], J = p[(oe + 14) % 16], D = (X >>> 19 | J << 13) ^ (J >>> 29 | X << 3) ^ X >>> 6, R = (J >>> 19 | X << 13) ^ (X >>> 29 | J << 3) ^ (J >>> 6 | X << 26), k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, f[oe] = te & 65535 | ie << 16, p[oe] = k & 65535 | V << 16
            }
            D = S, R = A, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = y[0], R = m[0], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, y[0] = S = te & 65535 | ie << 16, m[0] = A = k & 65535 | V << 16, D = K, R = h, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = y[1], R = m[1], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, y[1] = K = te & 65535 | ie << 16, m[1] = h = k & 65535 | V << 16, D = B, R = _, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = y[2], R = m[2], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, y[2] = B = te & 65535 | ie << 16, m[2] = _ = k & 65535 | V << 16, D = Z, R = ee, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = y[3], R = m[3], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, y[3] = Z = te & 65535 | ie << 16, m[3] = ee = k & 65535 | V << 16, D = $, R = ne, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = y[4], R = m[4], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, y[4] = $ = te & 65535 | ie << 16, m[4] = ne = k & 65535 | V << 16, D = L, R = ue, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = y[5], R = m[5], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, y[5] = L = te & 65535 | ie << 16, m[5] = ue = k & 65535 | V << 16, D = I, R = ge, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = y[6], R = m[6], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, y[6] = I = te & 65535 | ie << 16, m[6] = ge = k & 65535 | V << 16, D = C, R = ye, k = R & 65535, V = R >>> 16, te = D & 65535, ie = D >>> 16, D = y[7], R = m[7], k += R & 65535, V += R >>> 16, te += D & 65535, ie += D >>> 16, V += k >>> 16, te += V >>> 16, ie += te >>> 16, y[7] = C = te & 65535 | ie << 16, m[7] = ye = k & 65535 | V << 16, P += 128, O -= 128
        }
        return P
    }

    function d(f) {
        var p = new s;
        p.update(f);
        var y = p.digest();
        return p.clean(), y
    }
    i.hash = d
})(Ip);
(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.convertSecretKeyToX25519 = i.convertPublicKeyToX25519 = i.verify = i.sign = i.extractPublicKeyFromSecretKey = i.generateKeyPair = i.generateKeyPairFromSeed = i.SEED_LENGTH = i.SECRET_KEY_LENGTH = i.PUBLIC_KEY_LENGTH = i.SIGNATURE_LENGTH = void 0;
    const e = Hn,
        t = Ip,
        s = Cr;
    i.SIGNATURE_LENGTH = 64, i.PUBLIC_KEY_LENGTH = 32, i.SECRET_KEY_LENGTH = 64, i.SEED_LENGTH = 32;

    function o(z) {
        const F = new Float64Array(16);
        if (z)
            for (let U = 0; U < z.length; U++) F[U] = z[U];
        return F
    }
    const c = new Uint8Array(32);
    c[0] = 9;
    const d = o(),
        f = o([1]),
        p = o([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        y = o([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
        m = o([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
        b = o([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
        P = o([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

    function O(z, F) {
        for (let U = 0; U < 16; U++) z[U] = F[U] | 0
    }

    function S(z) {
        let F = 1;
        for (let U = 0; U < 16; U++) {
            let l = z[U] + F + 65535;
            F = Math.floor(l / 65536), z[U] = l - F * 65536
        }
        z[0] += F - 1 + 37 * (F - 1)
    }

    function K(z, F, U) {
        const l = ~(U - 1);
        for (let T = 0; T < 16; T++) {
            const se = l & (z[T] ^ F[T]);
            z[T] ^= se, F[T] ^= se
        }
    }

    function B(z, F) {
        const U = o(),
            l = o();
        for (let T = 0; T < 16; T++) l[T] = F[T];
        S(l), S(l), S(l);
        for (let T = 0; T < 2; T++) {
            U[0] = l[0] - 65517;
            for (let he = 1; he < 15; he++) U[he] = l[he] - 65535 - (U[he - 1] >> 16 & 1), U[he - 1] &= 65535;
            U[15] = l[15] - 32767 - (U[14] >> 16 & 1);
            const se = U[15] >> 16 & 1;
            U[14] &= 65535, K(l, U, 1 - se)
        }
        for (let T = 0; T < 16; T++) z[2 * T] = l[T] & 255, z[2 * T + 1] = l[T] >> 8
    }

    function Z(z, F) {
        let U = 0;
        for (let l = 0; l < 32; l++) U |= z[l] ^ F[l];
        return (1 & U - 1 >>> 8) - 1
    }

    function $(z, F) {
        const U = new Uint8Array(32),
            l = new Uint8Array(32);
        return B(U, z), B(l, F), Z(U, l)
    }

    function L(z) {
        const F = new Uint8Array(32);
        return B(F, z), F[0] & 1
    }

    function I(z, F) {
        for (let U = 0; U < 16; U++) z[U] = F[2 * U] + (F[2 * U + 1] << 8);
        z[15] &= 32767
    }

    function C(z, F, U) {
        for (let l = 0; l < 16; l++) z[l] = F[l] + U[l]
    }

    function A(z, F, U) {
        for (let l = 0; l < 16; l++) z[l] = F[l] - U[l]
    }

    function h(z, F, U) {
        let l, T, se = 0,
            he = 0,
            Ee = 0,
            He = 0,
            ke = 0,
            Le = 0,
            dt = 0,
            pt = 0,
            qe = 0,
            Ie = 0,
            Ne = 0,
            $e = 0,
            Fe = 0,
            Pe = 0,
            Ue = 0,
            _e = 0,
            Oe = 0,
            Be = 0,
            xe = 0,
            Ve = 0,
            Ge = 0,
            Ze = 0,
            et = 0,
            Je = 0,
            er = 0,
            hr = 0,
            Jr = 0,
            tr = 0,
            oi = 0,
            Pi = 0,
            Bi = 0,
            Et = U[0],
            gt = U[1],
            Dt = U[2],
            St = U[3],
            bt = U[4],
            yt = U[5],
            $t = U[6],
            Ut = U[7],
            It = U[8],
            Mt = U[9],
            xt = U[10],
            Ct = U[11],
            Pt = U[12],
            ut = U[13],
            Lt = U[14],
            jt = U[15];
        l = F[0], se += l * Et, he += l * gt, Ee += l * Dt, He += l * St, ke += l * bt, Le += l * yt, dt += l * $t, pt += l * Ut, qe += l * It, Ie += l * Mt, Ne += l * xt, $e += l * Ct, Fe += l * Pt, Pe += l * ut, Ue += l * Lt, _e += l * jt, l = F[1], he += l * Et, Ee += l * gt, He += l * Dt, ke += l * St, Le += l * bt, dt += l * yt, pt += l * $t, qe += l * Ut, Ie += l * It, Ne += l * Mt, $e += l * xt, Fe += l * Ct, Pe += l * Pt, Ue += l * ut, _e += l * Lt, Oe += l * jt, l = F[2], Ee += l * Et, He += l * gt, ke += l * Dt, Le += l * St, dt += l * bt, pt += l * yt, qe += l * $t, Ie += l * Ut, Ne += l * It, $e += l * Mt, Fe += l * xt, Pe += l * Ct, Ue += l * Pt, _e += l * ut, Oe += l * Lt, Be += l * jt, l = F[3], He += l * Et, ke += l * gt, Le += l * Dt, dt += l * St, pt += l * bt, qe += l * yt, Ie += l * $t, Ne += l * Ut, $e += l * It, Fe += l * Mt, Pe += l * xt, Ue += l * Ct, _e += l * Pt, Oe += l * ut, Be += l * Lt, xe += l * jt, l = F[4], ke += l * Et, Le += l * gt, dt += l * Dt, pt += l * St, qe += l * bt, Ie += l * yt, Ne += l * $t, $e += l * Ut, Fe += l * It, Pe += l * Mt, Ue += l * xt, _e += l * Ct, Oe += l * Pt, Be += l * ut, xe += l * Lt, Ve += l * jt, l = F[5], Le += l * Et, dt += l * gt, pt += l * Dt, qe += l * St, Ie += l * bt, Ne += l * yt, $e += l * $t, Fe += l * Ut, Pe += l * It, Ue += l * Mt, _e += l * xt, Oe += l * Ct, Be += l * Pt, xe += l * ut, Ve += l * Lt, Ge += l * jt, l = F[6], dt += l * Et, pt += l * gt, qe += l * Dt, Ie += l * St, Ne += l * bt, $e += l * yt, Fe += l * $t, Pe += l * Ut, Ue += l * It, _e += l * Mt, Oe += l * xt, Be += l * Ct, xe += l * Pt, Ve += l * ut, Ge += l * Lt, Ze += l * jt, l = F[7], pt += l * Et, qe += l * gt, Ie += l * Dt, Ne += l * St, $e += l * bt, Fe += l * yt, Pe += l * $t, Ue += l * Ut, _e += l * It, Oe += l * Mt, Be += l * xt, xe += l * Ct, Ve += l * Pt, Ge += l * ut, Ze += l * Lt, et += l * jt, l = F[8], qe += l * Et, Ie += l * gt, Ne += l * Dt, $e += l * St, Fe += l * bt, Pe += l * yt, Ue += l * $t, _e += l * Ut, Oe += l * It, Be += l * Mt, xe += l * xt, Ve += l * Ct, Ge += l * Pt, Ze += l * ut, et += l * Lt, Je += l * jt, l = F[9], Ie += l * Et, Ne += l * gt, $e += l * Dt, Fe += l * St, Pe += l * bt, Ue += l * yt, _e += l * $t, Oe += l * Ut, Be += l * It, xe += l * Mt, Ve += l * xt, Ge += l * Ct, Ze += l * Pt, et += l * ut, Je += l * Lt, er += l * jt, l = F[10], Ne += l * Et, $e += l * gt, Fe += l * Dt, Pe += l * St, Ue += l * bt, _e += l * yt, Oe += l * $t, Be += l * Ut, xe += l * It, Ve += l * Mt, Ge += l * xt, Ze += l * Ct, et += l * Pt, Je += l * ut, er += l * Lt, hr += l * jt, l = F[11], $e += l * Et, Fe += l * gt, Pe += l * Dt, Ue += l * St, _e += l * bt, Oe += l * yt, Be += l * $t, xe += l * Ut, Ve += l * It, Ge += l * Mt, Ze += l * xt, et += l * Ct, Je += l * Pt, er += l * ut, hr += l * Lt, Jr += l * jt, l = F[12], Fe += l * Et, Pe += l * gt, Ue += l * Dt, _e += l * St, Oe += l * bt, Be += l * yt, xe += l * $t, Ve += l * Ut, Ge += l * It, Ze += l * Mt, et += l * xt, Je += l * Ct, er += l * Pt, hr += l * ut, Jr += l * Lt, tr += l * jt, l = F[13], Pe += l * Et, Ue += l * gt, _e += l * Dt, Oe += l * St, Be += l * bt, xe += l * yt, Ve += l * $t, Ge += l * Ut, Ze += l * It, et += l * Mt, Je += l * xt, er += l * Ct, hr += l * Pt, Jr += l * ut, tr += l * Lt, oi += l * jt, l = F[14], Ue += l * Et, _e += l * gt, Oe += l * Dt, Be += l * St, xe += l * bt, Ve += l * yt, Ge += l * $t, Ze += l * Ut, et += l * It, Je += l * Mt, er += l * xt, hr += l * Ct, Jr += l * Pt, tr += l * ut, oi += l * Lt, Pi += l * jt, l = F[15], _e += l * Et, Oe += l * gt, Be += l * Dt, xe += l * St, Ve += l * bt, Ge += l * yt, Ze += l * $t, et += l * Ut, Je += l * It, er += l * Mt, hr += l * xt, Jr += l * Ct, tr += l * Pt, oi += l * ut, Pi += l * Lt, Bi += l * jt, se += 38 * Oe, he += 38 * Be, Ee += 38 * xe, He += 38 * Ve, ke += 38 * Ge, Le += 38 * Ze, dt += 38 * et, pt += 38 * Je, qe += 38 * er, Ie += 38 * hr, Ne += 38 * Jr, $e += 38 * tr, Fe += 38 * oi, Pe += 38 * Pi, Ue += 38 * Bi, T = 1, l = se + T + 65535, T = Math.floor(l / 65536), se = l - T * 65536, l = he + T + 65535, T = Math.floor(l / 65536), he = l - T * 65536, l = Ee + T + 65535, T = Math.floor(l / 65536), Ee = l - T * 65536, l = He + T + 65535, T = Math.floor(l / 65536), He = l - T * 65536, l = ke + T + 65535, T = Math.floor(l / 65536), ke = l - T * 65536, l = Le + T + 65535, T = Math.floor(l / 65536), Le = l - T * 65536, l = dt + T + 65535, T = Math.floor(l / 65536), dt = l - T * 65536, l = pt + T + 65535, T = Math.floor(l / 65536), pt = l - T * 65536, l = qe + T + 65535, T = Math.floor(l / 65536), qe = l - T * 65536, l = Ie + T + 65535, T = Math.floor(l / 65536), Ie = l - T * 65536, l = Ne + T + 65535, T = Math.floor(l / 65536), Ne = l - T * 65536, l = $e + T + 65535, T = Math.floor(l / 65536), $e = l - T * 65536, l = Fe + T + 65535, T = Math.floor(l / 65536), Fe = l - T * 65536, l = Pe + T + 65535, T = Math.floor(l / 65536), Pe = l - T * 65536, l = Ue + T + 65535, T = Math.floor(l / 65536), Ue = l - T * 65536, l = _e + T + 65535, T = Math.floor(l / 65536), _e = l - T * 65536, se += T - 1 + 37 * (T - 1), T = 1, l = se + T + 65535, T = Math.floor(l / 65536), se = l - T * 65536, l = he + T + 65535, T = Math.floor(l / 65536), he = l - T * 65536, l = Ee + T + 65535, T = Math.floor(l / 65536), Ee = l - T * 65536, l = He + T + 65535, T = Math.floor(l / 65536), He = l - T * 65536, l = ke + T + 65535, T = Math.floor(l / 65536), ke = l - T * 65536, l = Le + T + 65535, T = Math.floor(l / 65536), Le = l - T * 65536, l = dt + T + 65535, T = Math.floor(l / 65536), dt = l - T * 65536, l = pt + T + 65535, T = Math.floor(l / 65536), pt = l - T * 65536, l = qe + T + 65535, T = Math.floor(l / 65536), qe = l - T * 65536, l = Ie + T + 65535, T = Math.floor(l / 65536), Ie = l - T * 65536, l = Ne + T + 65535, T = Math.floor(l / 65536), Ne = l - T * 65536, l = $e + T + 65535, T = Math.floor(l / 65536), $e = l - T * 65536, l = Fe + T + 65535, T = Math.floor(l / 65536), Fe = l - T * 65536, l = Pe + T + 65535, T = Math.floor(l / 65536), Pe = l - T * 65536, l = Ue + T + 65535, T = Math.floor(l / 65536), Ue = l - T * 65536, l = _e + T + 65535, T = Math.floor(l / 65536), _e = l - T * 65536, se += T - 1 + 37 * (T - 1), z[0] = se, z[1] = he, z[2] = Ee, z[3] = He, z[4] = ke, z[5] = Le, z[6] = dt, z[7] = pt, z[8] = qe, z[9] = Ie, z[10] = Ne, z[11] = $e, z[12] = Fe, z[13] = Pe, z[14] = Ue, z[15] = _e
    }

    function _(z, F) {
        h(z, F, F)
    }

    function ee(z, F) {
        const U = o();
        let l;
        for (l = 0; l < 16; l++) U[l] = F[l];
        for (l = 253; l >= 0; l--) _(U, U), l !== 2 && l !== 4 && h(U, U, F);
        for (l = 0; l < 16; l++) z[l] = U[l]
    }

    function ne(z, F) {
        const U = o();
        let l;
        for (l = 0; l < 16; l++) U[l] = F[l];
        for (l = 250; l >= 0; l--) _(U, U), l !== 1 && h(U, U, F);
        for (l = 0; l < 16; l++) z[l] = U[l]
    }

    function ue(z, F) {
        const U = o(),
            l = o(),
            T = o(),
            se = o(),
            he = o(),
            Ee = o(),
            He = o(),
            ke = o(),
            Le = o();
        A(U, z[1], z[0]), A(Le, F[1], F[0]), h(U, U, Le), C(l, z[0], z[1]), C(Le, F[0], F[1]), h(l, l, Le), h(T, z[3], F[3]), h(T, T, y), h(se, z[2], F[2]), C(se, se, se), A(he, l, U), A(Ee, se, T), C(He, se, T), C(ke, l, U), h(z[0], he, Ee), h(z[1], ke, He), h(z[2], He, Ee), h(z[3], he, ke)
    }

    function ge(z, F, U) {
        for (let l = 0; l < 4; l++) K(z[l], F[l], U)
    }

    function ye(z, F) {
        const U = o(),
            l = o(),
            T = o();
        ee(T, F[2]), h(U, F[0], T), h(l, F[1], T), B(z, l), z[31] ^= L(U) << 7
    }

    function D(z, F, U) {
        O(z[0], d), O(z[1], f), O(z[2], f), O(z[3], d);
        for (let l = 255; l >= 0; --l) {
            const T = U[l / 8 | 0] >> (l & 7) & 1;
            ge(z, F, T), ue(F, z), ue(z, z), ge(z, F, T)
        }
    }

    function R(z, F) {
        const U = [o(), o(), o(), o()];
        O(U[0], m), O(U[1], b), O(U[2], f), h(U[3], m, b), D(z, U, F)
    }

    function X(z) {
        if (z.length !== i.SEED_LENGTH) throw new Error(`ed25519: seed must be ${i.SEED_LENGTH} bytes`);
        const F = (0, t.hash)(z);
        F[0] &= 248, F[31] &= 127, F[31] |= 64;
        const U = new Uint8Array(32),
            l = [o(), o(), o(), o()];
        R(l, F), ye(U, l);
        const T = new Uint8Array(64);
        return T.set(z), T.set(U, 32), {
            publicKey: U,
            secretKey: T
        }
    }
    i.generateKeyPairFromSeed = X;

    function J(z) {
        const F = (0, e.randomBytes)(32, z),
            U = X(F);
        return (0, s.wipe)(F), U
    }
    i.generateKeyPair = J;

    function k(z) {
        if (z.length !== i.SECRET_KEY_LENGTH) throw new Error(`ed25519: secret key must be ${i.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(z.subarray(32))
    }
    i.extractPublicKeyFromSecretKey = k;
    const V = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

    function te(z, F) {
        let U, l, T, se;
        for (l = 63; l >= 32; --l) {
            for (U = 0, T = l - 32, se = l - 12; T < se; ++T) F[T] += U - 16 * F[l] * V[T - (l - 32)], U = Math.floor((F[T] + 128) / 256), F[T] -= U * 256;
            F[T] += U, F[l] = 0
        }
        for (U = 0, T = 0; T < 32; T++) F[T] += U - (F[31] >> 4) * V[T], U = F[T] >> 8, F[T] &= 255;
        for (T = 0; T < 32; T++) F[T] -= U * V[T];
        for (l = 0; l < 32; l++) F[l + 1] += F[l] >> 8, z[l] = F[l] & 255
    }

    function ie(z) {
        const F = new Float64Array(64);
        for (let U = 0; U < 64; U++) F[U] = z[U];
        for (let U = 0; U < 64; U++) z[U] = 0;
        te(z, F)
    }

    function De(z, F) {
        const U = new Float64Array(64),
            l = [o(), o(), o(), o()],
            T = (0, t.hash)(z.subarray(0, 32));
        T[0] &= 248, T[31] &= 127, T[31] |= 64;
        const se = new Uint8Array(64);
        se.set(T.subarray(32), 32);
        const he = new t.SHA512;
        he.update(se.subarray(32)), he.update(F);
        const Ee = he.digest();
        he.clean(), ie(Ee), R(l, Ee), ye(se, l), he.reset(), he.update(se.subarray(0, 32)), he.update(z.subarray(32)), he.update(F);
        const He = he.digest();
        ie(He);
        for (let ke = 0; ke < 32; ke++) U[ke] = Ee[ke];
        for (let ke = 0; ke < 32; ke++)
            for (let Le = 0; Le < 32; Le++) U[ke + Le] += He[ke] * T[Le];
        return te(se.subarray(32), U), se
    }
    i.sign = De;

    function oe(z, F) {
        const U = o(),
            l = o(),
            T = o(),
            se = o(),
            he = o(),
            Ee = o(),
            He = o();
        return O(z[2], f), I(z[1], F), _(T, z[1]), h(se, T, p), A(T, T, z[2]), C(se, z[2], se), _(he, se), _(Ee, he), h(He, Ee, he), h(U, He, T), h(U, U, se), ne(U, U), h(U, U, T), h(U, U, se), h(U, U, se), h(z[0], U, se), _(l, z[0]), h(l, l, se), $(l, T) && h(z[0], z[0], P), _(l, z[0]), h(l, l, se), $(l, T) ? -1 : (L(z[0]) === F[31] >> 7 && A(z[0], d, z[0]), h(z[3], z[0], z[1]), 0)
    }

    function Se(z, F, U) {
        const l = new Uint8Array(32),
            T = [o(), o(), o(), o()],
            se = [o(), o(), o(), o()];
        if (U.length !== i.SIGNATURE_LENGTH) throw new Error(`ed25519: signature must be ${i.SIGNATURE_LENGTH} bytes`);
        if (oe(se, z)) return !1;
        const he = new t.SHA512;
        he.update(U.subarray(0, 32)), he.update(z), he.update(F);
        const Ee = he.digest();
        return ie(Ee), D(T, se, Ee), R(se, U.subarray(32)), ue(T, se), ye(l, T), !Z(U, l)
    }
    i.verify = Se;

    function le(z) {
        let F = [o(), o(), o(), o()];
        if (oe(F, z)) throw new Error("Ed25519: invalid public key");
        let U = o(),
            l = o(),
            T = F[1];
        C(U, f, T), A(l, f, T), ee(l, l), h(U, U, l);
        let se = new Uint8Array(32);
        return B(se, U), se
    }
    i.convertPublicKeyToX25519 = le;

    function Ae(z) {
        const F = (0, t.hash)(z.subarray(0, 32));
        F[0] &= 248, F[31] &= 127, F[31] |= 64;
        const U = new Uint8Array(F.subarray(0, 32));
        return (0, s.wipe)(F), U
    }
    i.convertSecretKeyToX25519 = Ae
})(Ju);
const h6 = "EdDSA",
    l6 = "JWT",
    xp = ".",
    Pp = "base64url",
    f6 = "utf8",
    d6 = "utf8",
    p6 = ":",
    g6 = "did",
    y6 = "key",
    Qf = "base58btc",
    v6 = "z",
    m6 = "K36",
    w6 = 32;

function ia(i) {
    return ur(mr(cn(i), f6), Pp)
}

function Op(i) {
    const e = mr(m6, Qf),
        t = v6 + ur(mu([e, i]), Qf);
    return [g6, y6, t].join(p6)
}

function b6(i) {
    return ur(i, Pp)
}

function _6(i) {
    return mr([ia(i.header), ia(i.payload)].join(xp), d6)
}

function E6(i) {
    return [ia(i.header), ia(i.payload), b6(i.signature)].join(xp)
}

function Xf(i = Hn.randomBytes(w6)) {
    return Ju.generateKeyPairFromSeed(i)
}
async function D6(i, e, t, s, o = ve.fromMiliseconds(Date.now())) {
    const c = {
            alg: h6,
            typ: l6
        },
        d = Op(s.publicKey),
        f = o + t,
        p = {
            iss: d,
            sub: i,
            aud: e,
            iat: o,
            exp: f
        },
        y = _6({
            header: c,
            payload: p
        }),
        m = Ju.sign(s.secretKey, y);
    return E6({
        header: c,
        payload: p,
        signature: m
    })
}
const S6 = "PARSE_ERROR",
    I6 = "INVALID_REQUEST",
    x6 = "METHOD_NOT_FOUND",
    P6 = "INVALID_PARAMS",
    Cp = "INTERNAL_ERROR",
    Qu = "SERVER_ERROR",
    O6 = [-32700, -32600, -32601, -32602, -32603],
    Ds = {
        [S6]: {
            code: -32700,
            message: "Parse error"
        },
        [I6]: {
            code: -32600,
            message: "Invalid Request"
        },
        [x6]: {
            code: -32601,
            message: "Method not found"
        },
        [P6]: {
            code: -32602,
            message: "Invalid params"
        },
        [Cp]: {
            code: -32603,
            message: "Internal error"
        },
        [Qu]: {
            code: -32e3,
            message: "Server error"
        }
    },
    Ap = Qu;

function C6(i) {
    return O6.includes(i)
}

function Zf(i) {
    return Object.keys(Ds).includes(i) ? Ds[i] : Ds[Ap]
}

function A6(i) {
    const e = Object.values(Ds).find(t => t.code === i);
    return e || Ds[Ap]
}

function Tp(i, e, t) {
    return i.message.includes("getaddrinfo ENOTFOUND") || i.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${t} RPC url at ${e}`) : i
}
var Rp = {},
    mi = {},
    ed;

function T6() {
    if (ed) return mi;
    ed = 1, Object.defineProperty(mi, "__esModule", {
        value: !0
    }), mi.isBrowserCryptoAvailable = mi.getSubtleCrypto = mi.getBrowerCrypto = void 0;

    function i() {
        return (Yr === null || Yr === void 0 ? void 0 : Yr.crypto) || (Yr === null || Yr === void 0 ? void 0 : Yr.msCrypto) || {}
    }
    mi.getBrowerCrypto = i;

    function e() {
        const s = i();
        return s.subtle || s.webkitSubtle
    }
    mi.getSubtleCrypto = e;

    function t() {
        return !!i() && !!e()
    }
    return mi.isBrowserCryptoAvailable = t, mi
}
var wi = {},
    td;

function R6() {
    if (td) return wi;
    td = 1, Object.defineProperty(wi, "__esModule", {
        value: !0
    }), wi.isBrowser = wi.isNode = wi.isReactNative = void 0;

    function i() {
        return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative"
    }
    wi.isReactNative = i;

    function e() {
        return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
    }
    wi.isNode = e;

    function t() {
        return !i() && !e()
    }
    return wi.isBrowser = t, wi
}(function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    const e = Si;
    e.__exportStar(T6(), i), e.__exportStar(R6(), i)
})(Rp);

function Xu(i = 3) {
    const e = Date.now() * Math.pow(10, i),
        t = Math.floor(Math.random() * Math.pow(10, i));
    return e + t
}

function Np(i = 6) {
    return BigInt(Xu(i))
}

function zn(i, e, t) {
    return {
        id: t || Xu(),
        jsonrpc: "2.0",
        method: i,
        params: e
    }
}

function ya(i, e) {
    return {
        id: i,
        jsonrpc: "2.0",
        result: e
    }
}

function va(i, e, t) {
    return {
        id: i,
        jsonrpc: "2.0",
        error: N6(e, t)
    }
}

function N6(i, e) {
    return typeof i > "u" ? Zf(Cp) : (typeof i == "string" && (i = Object.assign(Object.assign({}, Zf(Qu)), {
        message: i
    })), typeof e < "u" && (i.data = e), C6(i.code) && (i = A6(i.code)), i)
}
class $6 {}
class U6 extends $6 {
    constructor() {
        super()
    }
}
class M6 extends U6 {
    constructor(e) {
        super()
    }
}
const L6 = "^https?:",
    j6 = "^wss?:";

function q6(i) {
    const e = i.match(new RegExp(/^\w+:/, "gi"));
    if (!(!e || !e.length)) return e[0]
}

function $p(i, e) {
    const t = q6(i);
    return typeof t > "u" ? !1 : new RegExp(e).test(t)
}

function rd(i) {
    return $p(i, L6)
}

function id(i) {
    return $p(i, j6)
}

function F6(i) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(i)
}

function Up(i) {
    return typeof i == "object" && "id" in i && "jsonrpc" in i && i.jsonrpc === "2.0"
}

function Zu(i) {
    return Up(i) && "method" in i
}

function ma(i) {
    return Up(i) && (Di(i) || Gr(i))
}

function Di(i) {
    return "result" in i
}

function Gr(i) {
    return "error" in i
}
class Ii extends M6 {
    constructor(e) {
        super(e), this.events = new Fr.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
    }
    async connect(e = this.connection) {
        await this.open(e)
    }
    async disconnect() {
        await this.close()
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async request(e, t) {
        return this.requestStrict(zn(e.method, e.params || [], e.id || Np().toString()), t)
    }
    async requestStrict(e, t) {
        return new Promise(async (s, o) => {
            if (!this.connection.connected) try {
                await this.open()
            } catch (c) {
                o(c)
            }
            this.events.on(`${e.id}`, c => {
                Gr(c) ? o(c.error) : s(c.result)
            });
            try {
                await this.connection.send(e, t)
            } catch (c) {
                o(c)
            }
        })
    }
    setConnection(e = this.connection) {
        return e
    }
    onPayload(e) {
        this.events.emit("payload", e), ma(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
            type: e.method,
            data: e.params
        })
    }
    onClose(e) {
        e && e.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
    }
    async open(e = this.connection) {
        this.connection === e && this.connection.connected || (this.connection.connected && this.close(), typeof e == "string" && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
    }
}
const z6 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"),
    H6 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u",
    nd = i => i.split("?")[0],
    sd = 10,
    B6 = z6();
let K6 = class {
    constructor(e) {
        if (this.url = e, this.events = new Fr.EventEmitter, this.registering = !1, !id(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        this.url = e
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async open(e = this.url) {
        await this.register(e)
    }
    async close() {
        return new Promise((e, t) => {
            if (typeof this.socket > "u") {
                t(new Error("Connection already closed"));
                return
            }
            this.socket.onclose = s => {
                this.onClose(s), e()
            }, this.socket.close()
        })
    }
    async send(e) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(cn(e))
        } catch (t) {
            this.onError(e.id, t)
        }
    }
    register(e = this.url) {
        if (!id(e)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((s, o) => {
                this.events.once("register_error", c => {
                    this.resetMaxListeners(), o(c)
                }), this.events.once("open", () => {
                    if (this.resetMaxListeners(), typeof this.socket > "u") return o(new Error("WebSocket connection is missing or invalid"));
                    s(this.socket)
                })
            })
        }
        return this.url = e, this.registering = !0, new Promise((t, s) => {
            const o = new URLSearchParams(e).get("origin"),
                c = Rp.isReactNative() ? {
                    headers: {
                        origin: o
                    }
                } : {
                    rejectUnauthorized: !F6(e)
                },
                d = new B6(e, [], c);
            H6() ? d.onerror = f => {
                const p = f;
                s(this.emitError(p.error))
            } : d.on("error", f => {
                s(this.emitError(f))
            }), d.onopen = () => {
                this.onOpen(d), t(d)
            }
        })
    }
    onOpen(e) {
        e.onmessage = t => this.onPayload(t), e.onclose = t => this.onClose(t), this.socket = e, this.registering = !1, this.events.emit("open")
    }
    onClose(e) {
        this.socket = void 0, this.registering = !1, this.events.emit("close", e)
    }
    onPayload(e) {
        if (typeof e.data > "u") return;
        const t = typeof e.data == "string" ? Us(e.data) : e.data;
        this.events.emit("payload", t)
    }
    onError(e, t) {
        const s = this.parseError(t),
            o = s.message || s.toString(),
            c = va(e, o);
        this.events.emit("payload", c)
    }
    parseError(e, t = this.url) {
        return Tp(e, nd(t), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > sd && this.events.setMaxListeners(sd)
    }
    emitError(e) {
        const t = this.parseError(new Error((e == null ? void 0 : e.message) || `WebSocket connection failed for host: ${nd(this.url)}`));
        return this.events.emit("register_error", t), t
    }
};
var na = {
    exports: {}
};
na.exports;
(function(i, e) {
    var t = 200,
        s = "__lodash_hash_undefined__",
        o = 1,
        c = 2,
        d = 9007199254740991,
        f = "[object Arguments]",
        p = "[object Array]",
        y = "[object AsyncFunction]",
        m = "[object Boolean]",
        b = "[object Date]",
        P = "[object Error]",
        O = "[object Function]",
        S = "[object GeneratorFunction]",
        K = "[object Map]",
        B = "[object Number]",
        Z = "[object Null]",
        $ = "[object Object]",
        L = "[object Promise]",
        I = "[object Proxy]",
        C = "[object RegExp]",
        A = "[object Set]",
        h = "[object String]",
        _ = "[object Symbol]",
        ee = "[object Undefined]",
        ne = "[object WeakMap]",
        ue = "[object ArrayBuffer]",
        ge = "[object DataView]",
        ye = "[object Float32Array]",
        D = "[object Float64Array]",
        R = "[object Int8Array]",
        X = "[object Int16Array]",
        J = "[object Int32Array]",
        k = "[object Uint8Array]",
        V = "[object Uint8ClampedArray]",
        te = "[object Uint16Array]",
        ie = "[object Uint32Array]",
        De = /[\\^$.*+?()[\]{}|]/g,
        oe = /^\[object .+?Constructor\]$/,
        Se = /^(?:0|[1-9]\d*)$/,
        le = {};
    le[ye] = le[D] = le[R] = le[X] = le[J] = le[k] = le[V] = le[te] = le[ie] = !0, le[f] = le[p] = le[ue] = le[m] = le[ge] = le[b] = le[P] = le[O] = le[K] = le[B] = le[$] = le[C] = le[A] = le[h] = le[ne] = !1;
    var Ae = typeof Yr == "object" && Yr && Yr.Object === Object && Yr,
        z = typeof self == "object" && self && self.Object === Object && self,
        F = Ae || z || Function("return this")(),
        U = e && !e.nodeType && e,
        l = U && !0 && i && !i.nodeType && i,
        T = l && l.exports === U,
        se = T && Ae.process,
        he = function() {
            try {
                return se && se.binding && se.binding("util")
            } catch {}
        }(),
        Ee = he && he.isTypedArray;

    function He(E, M) {
        for (var Q = -1, fe = E == null ? 0 : E.length, ot = 0, Te = []; ++Q < fe;) {
            var lt = E[Q];
            M(lt, Q, E) && (Te[ot++] = lt)
        }
        return Te
    }

    function ke(E, M) {
        for (var Q = -1, fe = M.length, ot = E.length; ++Q < fe;) E[ot + Q] = M[Q];
        return E
    }

    function Le(E, M) {
        for (var Q = -1, fe = E == null ? 0 : E.length; ++Q < fe;)
            if (M(E[Q], Q, E)) return !0;
        return !1
    }

    function dt(E, M) {
        for (var Q = -1, fe = Array(E); ++Q < E;) fe[Q] = M(Q);
        return fe
    }

    function pt(E) {
        return function(M) {
            return E(M)
        }
    }

    function qe(E, M) {
        return E.has(M)
    }

    function Ie(E, M) {
        return E == null ? void 0 : E[M]
    }

    function Ne(E) {
        var M = -1,
            Q = Array(E.size);
        return E.forEach(function(fe, ot) {
            Q[++M] = [ot, fe]
        }), Q
    }

    function $e(E, M) {
        return function(Q) {
            return E(M(Q))
        }
    }

    function Fe(E) {
        var M = -1,
            Q = Array(E.size);
        return E.forEach(function(fe) {
            Q[++M] = fe
        }), Q
    }
    var Pe = Array.prototype,
        Ue = Function.prototype,
        _e = Object.prototype,
        Oe = F["__core-js_shared__"],
        Be = Ue.toString,
        xe = _e.hasOwnProperty,
        Ve = function() {
            var E = /[^.]+$/.exec(Oe && Oe.keys && Oe.keys.IE_PROTO || "");
            return E ? "Symbol(src)_1." + E : ""
        }(),
        Ge = _e.toString,
        Ze = RegExp("^" + Be.call(xe).replace(De, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        et = T ? F.Buffer : void 0,
        Je = F.Symbol,
        er = F.Uint8Array,
        hr = _e.propertyIsEnumerable,
        Jr = Pe.splice,
        tr = Je ? Je.toStringTag : void 0,
        oi = Object.getOwnPropertySymbols,
        Pi = et ? et.isBuffer : void 0,
        Bi = $e(Object.keys, Object),
        Et = _r(F, "DataView"),
        gt = _r(F, "Map"),
        Dt = _r(F, "Promise"),
        St = _r(F, "Set"),
        bt = _r(F, "WeakMap"),
        yt = _r(Object, "create"),
        $t = ci(Et),
        Ut = ci(gt),
        It = ci(Dt),
        Mt = ci(St),
        xt = ci(bt),
        Ct = Je ? Je.prototype : void 0,
        Pt = Ct ? Ct.valueOf : void 0;

    function ut(E) {
        var M = -1,
            Q = E == null ? 0 : E.length;
        for (this.clear(); ++M < Q;) {
            var fe = E[M];
            this.set(fe[0], fe[1])
        }
    }

    function Lt() {
        this.__data__ = yt ? yt(null) : {}, this.size = 0
    }

    function jt(E) {
        var M = this.has(E) && delete this.__data__[E];
        return this.size -= M ? 1 : 0, M
    }

    function _a(E) {
        var M = this.__data__;
        if (yt) {
            var Q = M[E];
            return Q === s ? void 0 : Q
        }
        return xe.call(M, E) ? M[E] : void 0
    }

    function Ea(E) {
        var M = this.__data__;
        return yt ? M[E] !== void 0 : xe.call(M, E)
    }

    function Da(E, M) {
        var Q = this.__data__;
        return this.size += this.has(E) ? 0 : 1, Q[E] = yt && M === void 0 ? s : M, this
    }
    ut.prototype.clear = Lt, ut.prototype.delete = jt, ut.prototype.get = _a, ut.prototype.has = Ea, ut.prototype.set = Da;

    function Ar(E) {
        var M = -1,
            Q = E == null ? 0 : E.length;
        for (this.clear(); ++M < Q;) {
            var fe = E[M];
            this.set(fe[0], fe[1])
        }
    }

    function Sa() {
        this.__data__ = [], this.size = 0
    }

    function Ia(E) {
        var M = this.__data__,
            Q = Ki(M, E);
        if (Q < 0) return !1;
        var fe = M.length - 1;
        return Q == fe ? M.pop() : Jr.call(M, Q, 1), --this.size, !0
    }

    function xa(E) {
        var M = this.__data__,
            Q = Ki(M, E);
        return Q < 0 ? void 0 : M[Q][1]
    }

    function Pa(E) {
        return Ki(this.__data__, E) > -1
    }

    function Oa(E, M) {
        var Q = this.__data__,
            fe = Ki(Q, E);
        return fe < 0 ? (++this.size, Q.push([E, M])) : Q[fe][1] = M, this
    }
    Ar.prototype.clear = Sa, Ar.prototype.delete = Ia, Ar.prototype.get = xa, Ar.prototype.has = Pa, Ar.prototype.set = Oa;

    function ai(E) {
        var M = -1,
            Q = E == null ? 0 : E.length;
        for (this.clear(); ++M < Q;) {
            var fe = E[M];
            this.set(fe[0], fe[1])
        }
    }

    function pn() {
        this.size = 0, this.__data__ = {
            hash: new ut,
            map: new(gt || Ar),
            string: new ut
        }
    }

    function Ca(E) {
        var M = Oi(this, E).delete(E);
        return this.size -= M ? 1 : 0, M
    }

    function gn(E) {
        return Oi(this, E).get(E)
    }

    function Aa(E) {
        return Oi(this, E).has(E)
    }

    function Ta(E, M) {
        var Q = Oi(this, E),
            fe = Q.size;
        return Q.set(E, M), this.size += Q.size == fe ? 0 : 1, this
    }
    ai.prototype.clear = pn, ai.prototype.delete = Ca, ai.prototype.get = gn, ai.prototype.has = Aa, ai.prototype.set = Ta;

    function yn(E) {
        var M = -1,
            Q = E == null ? 0 : E.length;
        for (this.__data__ = new ai; ++M < Q;) this.add(E[M])
    }

    function js(E) {
        return this.__data__.set(E, s), this
    }

    function qs(E) {
        return this.__data__.has(E)
    }
    yn.prototype.add = yn.prototype.push = js, yn.prototype.has = qs;

    function zr(E) {
        var M = this.__data__ = new Ar(E);
        this.size = M.size
    }

    function Ra() {
        this.__data__ = new Ar, this.size = 0
    }

    function Na(E) {
        var M = this.__data__,
            Q = M.delete(E);
        return this.size = M.size, Q
    }

    function $a(E) {
        return this.__data__.get(E)
    }

    function Ua(E) {
        return this.__data__.has(E)
    }

    function Fs(E, M) {
        var Q = this.__data__;
        if (Q instanceof Ar) {
            var fe = Q.__data__;
            if (!gt || fe.length < t - 1) return fe.push([E, M]), this.size = ++Q.size, this;
            Q = this.__data__ = new ai(fe)
        }
        return Q.set(E, M), this.size = Q.size, this
    }
    zr.prototype.clear = Ra, zr.prototype.delete = Na, zr.prototype.get = $a, zr.prototype.has = Ua, zr.prototype.set = Fs;

    function zs(E, M) {
        var Q = wn(E),
            fe = !Q && Zs(E),
            ot = !Q && !fe && Jn(E),
            Te = !Q && !fe && !ot && ro(E),
            lt = Q || fe || ot || Te,
            qt = lt ? dt(E.length, String) : [],
            Qe = qt.length;
        for (var at in E)(M || xe.call(E, at)) && !(lt && (at == "length" || ot && (at == "offset" || at == "parent") || Te && (at == "buffer" || at == "byteLength" || at == "byteOffset") || Gs(at, Qe))) && qt.push(at);
        return qt
    }

    function Ki(E, M) {
        for (var Q = E.length; Q--;)
            if (Xs(E[Q][0], M)) return Q;
        return -1
    }

    function Gn(E, M, Q) {
        var fe = M(E);
        return wn(E) ? fe : ke(fe, Q(E))
    }

    function ki(E) {
        return E == null ? E === void 0 ? ee : Z : tr && tr in Object(E) ? Vs(E) : ja(E)
    }

    function Yn(E) {
        return Wi(E) && ki(E) == f
    }

    function Vi(E, M, Q, fe, ot) {
        return E === M ? !0 : E == null || M == null || !Wi(E) && !Wi(M) ? E !== E && M !== M : Hs(E, M, Q, fe, Vi, ot)
    }

    function Hs(E, M, Q, fe, ot, Te) {
        var lt = wn(E),
            qt = wn(M),
            Qe = lt ? p : Qr(E),
            at = qt ? p : Qr(M);
        Qe = Qe == f ? $ : Qe, at = at == f ? $ : at;
        var At = Qe == $,
            lr = at == $,
            Ft = Qe == at;
        if (Ft && Jn(E)) {
            if (!Jn(M)) return !1;
            lt = !0, At = !1
        }
        if (Ft && !At) return Te || (Te = new zr), lt || ro(E) ? vn(E, M, Q, fe, ot, Te) : La(E, M, Qe, Q, fe, ot, Te);
        if (!(Q & o)) {
            var ft = At && xe.call(E, "__wrapped__"),
                rr = lr && xe.call(M, "__wrapped__");
            if (ft || rr) {
                var Hr = ft ? E.value() : E,
                    Tr = rr ? M.value() : M;
                return Te || (Te = new zr), ot(Hr, Tr, Q, fe, Te)
            }
        }
        return Ft ? (Te || (Te = new zr), ks(E, M, Q, fe, ot, Te)) : !1
    }

    function Ma(E) {
        if (!to(E) || Js(E)) return !1;
        var M = bn(E) ? Ze : oe;
        return M.test(ci(E))
    }

    function Bs(E) {
        return Wi(E) && eo(E.length) && !!le[ki(E)]
    }

    function Ks(E) {
        if (!Qs(E)) return Bi(E);
        var M = [];
        for (var Q in Object(E)) xe.call(E, Q) && Q != "constructor" && M.push(Q);
        return M
    }

    function vn(E, M, Q, fe, ot, Te) {
        var lt = Q & o,
            qt = E.length,
            Qe = M.length;
        if (qt != Qe && !(lt && Qe > qt)) return !1;
        var at = Te.get(E);
        if (at && Te.get(M)) return at == M;
        var At = -1,
            lr = !0,
            Ft = Q & c ? new yn : void 0;
        for (Te.set(E, M), Te.set(M, E); ++At < qt;) {
            var ft = E[At],
                rr = M[At];
            if (fe) var Hr = lt ? fe(rr, ft, At, M, E, Te) : fe(ft, rr, At, E, M, Te);
            if (Hr !== void 0) {
                if (Hr) continue;
                lr = !1;
                break
            }
            if (Ft) {
                if (!Le(M, function(Tr, Xr) {
                        if (!qe(Ft, Xr) && (ft === Tr || ot(ft, Tr, Q, fe, Te))) return Ft.push(Xr)
                    })) {
                    lr = !1;
                    break
                }
            } else if (!(ft === rr || ot(ft, rr, Q, fe, Te))) {
                lr = !1;
                break
            }
        }
        return Te.delete(E), Te.delete(M), lr
    }

    function La(E, M, Q, fe, ot, Te, lt) {
        switch (Q) {
            case ge:
                if (E.byteLength != M.byteLength || E.byteOffset != M.byteOffset) return !1;
                E = E.buffer, M = M.buffer;
            case ue:
                return !(E.byteLength != M.byteLength || !Te(new er(E), new er(M)));
            case m:
            case b:
            case B:
                return Xs(+E, +M);
            case P:
                return E.name == M.name && E.message == M.message;
            case C:
            case h:
                return E == M + "";
            case K:
                var qt = Ne;
            case A:
                var Qe = fe & o;
                if (qt || (qt = Fe), E.size != M.size && !Qe) return !1;
                var at = lt.get(E);
                if (at) return at == M;
                fe |= c, lt.set(E, M);
                var At = vn(qt(E), qt(M), fe, ot, Te, lt);
                return lt.delete(E), At;
            case _:
                if (Pt) return Pt.call(E) == Pt.call(M)
        }
        return !1
    }

    function ks(E, M, Q, fe, ot, Te) {
        var lt = Q & o,
            qt = mn(E),
            Qe = qt.length,
            at = mn(M),
            At = at.length;
        if (Qe != At && !lt) return !1;
        for (var lr = Qe; lr--;) {
            var Ft = qt[lr];
            if (!(lt ? Ft in M : xe.call(M, Ft))) return !1
        }
        var ft = Te.get(E);
        if (ft && Te.get(M)) return ft == M;
        var rr = !0;
        Te.set(E, M), Te.set(M, E);
        for (var Hr = lt; ++lr < Qe;) {
            Ft = qt[lr];
            var Tr = E[Ft],
                Xr = M[Ft];
            if (fe) var Qn = lt ? fe(Xr, Tr, Ft, M, E, Te) : fe(Tr, Xr, Ft, E, M, Te);
            if (!(Qn === void 0 ? Tr === Xr || ot(Tr, Xr, Q, fe, Te) : Qn)) {
                rr = !1;
                break
            }
            Hr || (Hr = Ft == "constructor")
        }
        if (rr && !Hr) {
            var Gi = E.constructor,
                Bt = M.constructor;
            Gi != Bt && "constructor" in E && "constructor" in M && !(typeof Gi == "function" && Gi instanceof Gi && typeof Bt == "function" && Bt instanceof Bt) && (rr = !1)
        }
        return Te.delete(E), Te.delete(M), rr
    }

    function mn(E) {
        return Gn(E, za, Ws)
    }

    function Oi(E, M) {
        var Q = E.__data__;
        return Ys(M) ? Q[typeof M == "string" ? "string" : "hash"] : Q.map
    }

    function _r(E, M) {
        var Q = Ie(E, M);
        return Ma(Q) ? Q : void 0
    }

    function Vs(E) {
        var M = xe.call(E, tr),
            Q = E[tr];
        try {
            E[tr] = void 0;
            var fe = !0
        } catch {}
        var ot = Ge.call(E);
        return fe && (M ? E[tr] = Q : delete E[tr]), ot
    }
    var Ws = oi ? function(E) {
            return E == null ? [] : (E = Object(E), He(oi(E), function(M) {
                return hr.call(E, M)
            }))
        } : st,
        Qr = ki;
    (Et && Qr(new Et(new ArrayBuffer(1))) != ge || gt && Qr(new gt) != K || Dt && Qr(Dt.resolve()) != L || St && Qr(new St) != A || bt && Qr(new bt) != ne) && (Qr = function(E) {
        var M = ki(E),
            Q = M == $ ? E.constructor : void 0,
            fe = Q ? ci(Q) : "";
        if (fe) switch (fe) {
            case $t:
                return ge;
            case Ut:
                return K;
            case It:
                return L;
            case Mt:
                return A;
            case xt:
                return ne
        }
        return M
    });

    function Gs(E, M) {
        return M = M ? ? d, !!M && (typeof E == "number" || Se.test(E)) && E > -1 && E % 1 == 0 && E < M
    }

    function Ys(E) {
        var M = typeof E;
        return M == "string" || M == "number" || M == "symbol" || M == "boolean" ? E !== "__proto__" : E === null
    }

    function Js(E) {
        return !!Ve && Ve in E
    }

    function Qs(E) {
        var M = E && E.constructor,
            Q = typeof M == "function" && M.prototype || _e;
        return E === Q
    }

    function ja(E) {
        return Ge.call(E)
    }

    function ci(E) {
        if (E != null) {
            try {
                return Be.call(E)
            } catch {}
            try {
                return E + ""
            } catch {}
        }
        return ""
    }

    function Xs(E, M) {
        return E === M || E !== E && M !== M
    }
    var Zs = Yn(function() {
            return arguments
        }()) ? Yn : function(E) {
            return Wi(E) && xe.call(E, "callee") && !hr.call(E, "callee")
        },
        wn = Array.isArray;

    function qa(E) {
        return E != null && eo(E.length) && !bn(E)
    }
    var Jn = Pi || nt;

    function Fa(E, M) {
        return Vi(E, M)
    }

    function bn(E) {
        if (!to(E)) return !1;
        var M = ki(E);
        return M == O || M == S || M == y || M == I
    }

    function eo(E) {
        return typeof E == "number" && E > -1 && E % 1 == 0 && E <= d
    }

    function to(E) {
        var M = typeof E;
        return E != null && (M == "object" || M == "function")
    }

    function Wi(E) {
        return E != null && typeof E == "object"
    }
    var ro = Ee ? pt(Ee) : Bs;

    function za(E) {
        return qa(E) ? zs(E) : Ks(E)
    }

    function st() {
        return []
    }

    function nt() {
        return !1
    }
    i.exports = Fa
})(na, na.exports);
var k6 = na.exports;
const V6 = oa(k6);

function W6(i, e) {
    return e = e || {}, new Promise(function(t, s) {
        var o = new XMLHttpRequest,
            c = [],
            d = [],
            f = {},
            p = function() {
                return {
                    ok: (o.status / 100 | 0) == 2,
                    statusText: o.statusText,
                    status: o.status,
                    url: o.responseURL,
                    text: function() {
                        return Promise.resolve(o.responseText)
                    },
                    json: function() {
                        return Promise.resolve(o.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([o.response]))
                    },
                    clone: p,
                    headers: {
                        keys: function() {
                            return c
                        },
                        entries: function() {
                            return d
                        },
                        get: function(m) {
                            return f[m.toLowerCase()]
                        },
                        has: function(m) {
                            return m.toLowerCase() in f
                        }
                    }
                }
            };
        for (var y in o.open(e.method || "get", i, !0), o.onload = function() {
                o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(m, b, P) {
                    c.push(b = b.toLowerCase()), d.push([b, P]), f[b] = f[b] ? f[b] + "," + P : P
                }), t(p())
            }, o.onerror = s, o.withCredentials = e.credentials == "include", e.headers) o.setRequestHeader(y, e.headers[y]);
        o.send(e.body || null)
    })
}
const G6 = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: W6
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    od = Mu(G6);
var Y6 = self.fetch || (self.fetch = od.default || od);
const J6 = oa(Y6);
var Q6 = {};

function X6(i, e) {
    if (i.length >= 255) throw new TypeError("Alphabet too long");
    for (var t = new Uint8Array(256), s = 0; s < t.length; s++) t[s] = 255;
    for (var o = 0; o < i.length; o++) {
        var c = i.charAt(o),
            d = c.charCodeAt(0);
        if (t[d] !== 255) throw new TypeError(c + " is ambiguous");
        t[d] = o
    }
    var f = i.length,
        p = i.charAt(0),
        y = Math.log(f) / Math.log(256),
        m = Math.log(256) / Math.log(f);

    function b(S) {
        if (S instanceof Uint8Array || (ArrayBuffer.isView(S) ? S = new Uint8Array(S.buffer, S.byteOffset, S.byteLength) : Array.isArray(S) && (S = Uint8Array.from(S))), !(S instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (S.length === 0) return "";
        for (var K = 0, B = 0, Z = 0, $ = S.length; Z !== $ && S[Z] === 0;) Z++, K++;
        for (var L = ($ - Z) * m + 1 >>> 0, I = new Uint8Array(L); Z !== $;) {
            for (var C = S[Z], A = 0, h = L - 1;
                (C !== 0 || A < B) && h !== -1; h--, A++) C += 256 * I[h] >>> 0, I[h] = C % f >>> 0, C = C / f >>> 0;
            if (C !== 0) throw new Error("Non-zero carry");
            B = A, Z++
        }
        for (var _ = L - B; _ !== L && I[_] === 0;) _++;
        for (var ee = p.repeat(K); _ < L; ++_) ee += i.charAt(I[_]);
        return ee
    }

    function P(S) {
        if (typeof S != "string") throw new TypeError("Expected String");
        if (S.length === 0) return new Uint8Array;
        var K = 0;
        if (S[K] !== " ") {
            for (var B = 0, Z = 0; S[K] === p;) B++, K++;
            for (var $ = (S.length - K) * y + 1 >>> 0, L = new Uint8Array($); S[K];) {
                var I = t[S.charCodeAt(K)];
                if (I === 255) return;
                for (var C = 0, A = $ - 1;
                    (I !== 0 || C < Z) && A !== -1; A--, C++) I += f * L[A] >>> 0, L[A] = I % 256 >>> 0, I = I / 256 >>> 0;
                if (I !== 0) throw new Error("Non-zero carry");
                Z = C, K++
            }
            if (S[K] !== " ") {
                for (var h = $ - Z; h !== $ && L[h] === 0;) h++;
                for (var _ = new Uint8Array(B + ($ - h)), ee = B; h !== $;) _[ee++] = L[h++];
                return _
            }
        }
    }

    function O(S) {
        var K = P(S);
        if (K) return K;
        throw new Error(`Non-${e} character`)
    }
    return {
        encode: b,
        decodeUnsafe: P,
        decode: O
    }
}
var Z6 = X6,
    e2 = Z6;
const Mp = i => {
        if (i instanceof Uint8Array && i.constructor.name === "Uint8Array") return i;
        if (i instanceof ArrayBuffer) return new Uint8Array(i);
        if (ArrayBuffer.isView(i)) return new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
        throw new Error("Unknown type, must be binary type")
    },
    t2 = i => new TextEncoder().encode(i),
    r2 = i => new TextDecoder().decode(i);
class i2 {
    constructor(e, t, s) {
        this.name = e, this.prefix = t, this.baseEncode = s
    }
    encode(e) {
        if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class n2 {
    constructor(e, t, s) {
        if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = t.codePointAt(0), this.baseDecode = s
    }
    decode(e) {
        if (typeof e == "string") {
            if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(e.slice(this.prefix.length))
        } else throw Error("Can only multibase decode strings")
    }
    or(e) {
        return Lp(this, e)
    }
}
class s2 {
    constructor(e) {
        this.decoders = e
    }
    or(e) {
        return Lp(this, e)
    }
    decode(e) {
        const t = e[0],
            s = this.decoders[t];
        if (s) return s.decode(e);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const Lp = (i, e) => new s2({ ...i.decoders || {
        [i.prefix]: i
    },
    ...e.decoders || {
        [e.prefix]: e
    }
});
class o2 {
    constructor(e, t, s, o) {
        this.name = e, this.prefix = t, this.baseEncode = s, this.baseDecode = o, this.encoder = new i2(e, t, s), this.decoder = new n2(e, t, o)
    }
    encode(e) {
        return this.encoder.encode(e)
    }
    decode(e) {
        return this.decoder.decode(e)
    }
}
const wa = ({
        name: i,
        prefix: e,
        encode: t,
        decode: s
    }) => new o2(i, e, t, s),
    Ls = ({
        prefix: i,
        name: e,
        alphabet: t
    }) => {
        const {
            encode: s,
            decode: o
        } = e2(t, e);
        return wa({
            prefix: i,
            name: e,
            encode: s,
            decode: c => Mp(o(c))
        })
    },
    a2 = (i, e, t, s) => {
        const o = {};
        for (let m = 0; m < e.length; ++m) o[e[m]] = m;
        let c = i.length;
        for (; i[c - 1] === "=";) --c;
        const d = new Uint8Array(c * t / 8 | 0);
        let f = 0,
            p = 0,
            y = 0;
        for (let m = 0; m < c; ++m) {
            const b = o[i[m]];
            if (b === void 0) throw new SyntaxError(`Non-${s} character`);
            p = p << t | b, f += t, f >= 8 && (f -= 8, d[y++] = 255 & p >> f)
        }
        if (f >= t || 255 & p << 8 - f) throw new SyntaxError("Unexpected end of data");
        return d
    },
    c2 = (i, e, t) => {
        const s = e[e.length - 1] === "=",
            o = (1 << t) - 1;
        let c = "",
            d = 0,
            f = 0;
        for (let p = 0; p < i.length; ++p)
            for (f = f << 8 | i[p], d += 8; d > t;) d -= t, c += e[o & f >> d];
        if (d && (c += e[o & f << t - d]), s)
            for (; c.length * t & 7;) c += "=";
        return c
    },
    Yt = ({
        name: i,
        prefix: e,
        bitsPerChar: t,
        alphabet: s
    }) => wa({
        prefix: e,
        name: i,
        encode(o) {
            return c2(o, s, t)
        },
        decode(o) {
            return a2(o, s, t, i)
        }
    }),
    u2 = wa({
        prefix: "\0",
        name: "identity",
        encode: i => r2(i),
        decode: i => t2(i)
    });
var h2 = Object.freeze({
    __proto__: null,
    identity: u2
});
const l2 = Yt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var f2 = Object.freeze({
    __proto__: null,
    base2: l2
});
const d2 = Yt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var p2 = Object.freeze({
    __proto__: null,
    base8: d2
});
const g2 = Ls({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var y2 = Object.freeze({
    __proto__: null,
    base10: g2
});
const v2 = Yt({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    m2 = Yt({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    });
var w2 = Object.freeze({
    __proto__: null,
    base16: v2,
    base16upper: m2
});
const b2 = Yt({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    _2 = Yt({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    E2 = Yt({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    D2 = Yt({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    S2 = Yt({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    I2 = Yt({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    x2 = Yt({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    P2 = Yt({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    O2 = Yt({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    });
var C2 = Object.freeze({
    __proto__: null,
    base32: b2,
    base32upper: _2,
    base32pad: E2,
    base32padupper: D2,
    base32hex: S2,
    base32hexupper: I2,
    base32hexpad: x2,
    base32hexpadupper: P2,
    base32z: O2
});
const A2 = Ls({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    T2 = Ls({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
var R2 = Object.freeze({
    __proto__: null,
    base36: A2,
    base36upper: T2
});
const N2 = Ls({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    $2 = Ls({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
var U2 = Object.freeze({
    __proto__: null,
    base58btc: N2,
    base58flickr: $2
});
const M2 = Yt({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    L2 = Yt({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    j2 = Yt({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    q2 = Yt({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    });
var F2 = Object.freeze({
    __proto__: null,
    base64: M2,
    base64pad: L2,
    base64url: j2,
    base64urlpad: q2
});
const jp = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    z2 = jp.reduce((i, e, t) => (i[t] = e, i), []),
    H2 = jp.reduce((i, e, t) => (i[e.codePointAt(0)] = t, i), []);

function B2(i) {
    return i.reduce((e, t) => (e += z2[t], e), "")
}

function K2(i) {
    const e = [];
    for (const t of i) {
        const s = H2[t.codePointAt(0)];
        if (s === void 0) throw new Error(`Non-base256emoji character: ${t}`);
        e.push(s)
    }
    return new Uint8Array(e)
}
const k2 = wa({
    prefix: "🚀",
    name: "base256emoji",
    encode: B2,
    decode: K2
});
var V2 = Object.freeze({
        __proto__: null,
        base256emoji: k2
    }),
    W2 = qp,
    ad = 128,
    G2 = 127,
    Y2 = ~G2,
    J2 = Math.pow(2, 31);

function qp(i, e, t) {
    e = e || [], t = t || 0;
    for (var s = t; i >= J2;) e[t++] = i & 255 | ad, i /= 128;
    for (; i & Y2;) e[t++] = i & 255 | ad, i >>>= 7;
    return e[t] = i | 0, qp.bytes = t - s + 1, e
}
var Q2 = Cu,
    X2 = 128,
    cd = 127;

function Cu(i, s) {
    var t = 0,
        s = s || 0,
        o = 0,
        c = s,
        d, f = i.length;
    do {
        if (c >= f) throw Cu.bytes = 0, new RangeError("Could not decode varint");
        d = i[c++], t += o < 28 ? (d & cd) << o : (d & cd) * Math.pow(2, o), o += 7
    } while (d >= X2);
    return Cu.bytes = c - s, t
}
var Z2 = Math.pow(2, 7),
    eS = Math.pow(2, 14),
    tS = Math.pow(2, 21),
    rS = Math.pow(2, 28),
    iS = Math.pow(2, 35),
    nS = Math.pow(2, 42),
    sS = Math.pow(2, 49),
    oS = Math.pow(2, 56),
    aS = Math.pow(2, 63),
    cS = function(i) {
        return i < Z2 ? 1 : i < eS ? 2 : i < tS ? 3 : i < rS ? 4 : i < iS ? 5 : i < nS ? 6 : i < sS ? 7 : i < oS ? 8 : i < aS ? 9 : 10
    },
    uS = {
        encode: W2,
        decode: Q2,
        encodingLength: cS
    },
    Fp = uS;
const ud = (i, e, t = 0) => (Fp.encode(i, e, t), e),
    hd = i => Fp.encodingLength(i),
    Au = (i, e) => {
        const t = e.byteLength,
            s = hd(i),
            o = s + hd(t),
            c = new Uint8Array(o + t);
        return ud(i, c, 0), ud(t, c, s), c.set(e, o), new hS(i, t, e, c)
    };
class hS {
    constructor(e, t, s, o) {
        this.code = e, this.size = t, this.digest = s, this.bytes = o
    }
}
const zp = ({
    name: i,
    code: e,
    encode: t
}) => new lS(i, e, t);
class lS {
    constructor(e, t, s) {
        this.name = e, this.code = t, this.encode = s
    }
    digest(e) {
        if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array ? Au(this.code, t) : t.then(s => Au(this.code, s))
        } else throw Error("Unknown type, must be binary type")
    }
}
const Hp = i => async e => new Uint8Array(await crypto.subtle.digest(i, e)),
    fS = zp({
        name: "sha2-256",
        code: 18,
        encode: Hp("SHA-256")
    }),
    dS = zp({
        name: "sha2-512",
        code: 19,
        encode: Hp("SHA-512")
    });
var pS = Object.freeze({
    __proto__: null,
    sha256: fS,
    sha512: dS
});
const Bp = 0,
    gS = "identity",
    Kp = Mp,
    yS = i => Au(Bp, Kp(i)),
    vS = {
        code: Bp,
        name: gS,
        encode: Kp,
        digest: yS
    };
var mS = Object.freeze({
    __proto__: null,
    identity: vS
});
new TextEncoder, new TextDecoder;
const ld = { ...h2,
    ...f2,
    ...p2,
    ...y2,
    ...w2,
    ...C2,
    ...R2,
    ...U2,
    ...F2,
    ...V2
};
({ ...pS,
    ...mS
});

function kp(i) {
    return globalThis.Buffer != null ? new Uint8Array(i.buffer, i.byteOffset, i.byteLength) : i
}

function wS(i = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? kp(globalThis.Buffer.allocUnsafe(i)) : new Uint8Array(i)
}

function Vp(i, e, t, s) {
    return {
        name: i,
        prefix: e,
        encoder: {
            name: i,
            prefix: e,
            encode: t
        },
        decoder: {
            decode: s
        }
    }
}
const fd = Vp("utf8", "u", i => "u" + new TextDecoder("utf8").decode(i), i => new TextEncoder().encode(i.substring(1))),
    nu = Vp("ascii", "a", i => {
        let e = "a";
        for (let t = 0; t < i.length; t++) e += String.fromCharCode(i[t]);
        return e
    }, i => {
        i = i.substring(1);
        const e = wS(i.length);
        for (let t = 0; t < i.length; t++) e[t] = i.charCodeAt(t);
        return e
    }),
    bS = {
        utf8: fd,
        "utf-8": fd,
        hex: ld.base16,
        latin1: nu,
        ascii: nu,
        binary: nu,
        ...ld
    };

function _S(i, e = "utf8") {
    const t = bS[e];
    if (!t) throw new Error(`Unsupported encoding "${e}"`);
    return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? kp(globalThis.Buffer.from(i, "utf-8")) : t.decoder.decode(`${t.prefix}${i}`)
}
const Wp = "wc",
    ES = 2,
    eh = "core",
    qi = `${Wp}@2:${eh}:`,
    DS = {
        name: eh,
        logger: "error"
    },
    SS = {
        database: ":memory:"
    },
    IS = "crypto",
    dd = "client_ed25519_seed",
    xS = ve.ONE_DAY,
    PS = "keychain",
    OS = "0.3",
    CS = "messages",
    AS = "0.3",
    TS = ve.SIX_HOURS,
    RS = "publisher",
    Gp = "irn",
    NS = "error",
    Yp = "wss://relay.walletconnect.com",
    pd = "wss://relay.walletconnect.org",
    $S = "relayer",
    Zt = {
        message: "relayer_message",
        message_ack: "relayer_message_ack",
        connect: "relayer_connect",
        disconnect: "relayer_disconnect",
        error: "relayer_error",
        connection_stalled: "relayer_connection_stalled",
        transport_closed: "relayer_transport_closed",
        publish: "relayer_publish"
    },
    US = "_subscription",
    bi = {
        payload: "payload",
        connect: "connect",
        disconnect: "disconnect",
        error: "error"
    },
    MS = ve.ONE_SECOND,
    LS = "2.11.2",
    jS = 1e4,
    qS = "0.3",
    FS = "WALLETCONNECT_CLIENT_ID",
    Wr = {
        created: "subscription_created",
        deleted: "subscription_deleted",
        expired: "subscription_expired",
        disabled: "subscription_disabled",
        sync: "subscription_sync",
        resubscribed: "subscription_resubscribed"
    },
    zS = "subscription",
    HS = "0.3",
    BS = ve.FIVE_SECONDS * 1e3,
    KS = "pairing",
    kS = "0.3",
    vs = {
        wc_pairingDelete: {
            req: {
                ttl: ve.ONE_DAY,
                prompt: !1,
                tag: 1e3
            },
            res: {
                ttl: ve.ONE_DAY,
                prompt: !1,
                tag: 1001
            }
        },
        wc_pairingPing: {
            req: {
                ttl: ve.THIRTY_SECONDS,
                prompt: !1,
                tag: 1002
            },
            res: {
                ttl: ve.THIRTY_SECONDS,
                prompt: !1,
                tag: 1003
            }
        },
        unregistered_method: {
            req: {
                ttl: ve.ONE_DAY,
                prompt: !1,
                tag: 0
            },
            res: {
                ttl: ve.ONE_DAY,
                prompt: !1,
                tag: 0
            }
        }
    },
    _s = {
        create: "pairing_create",
        expire: "pairing_expire",
        delete: "pairing_delete",
        ping: "pairing_ping"
    },
    ii = {
        created: "history_created",
        updated: "history_updated",
        deleted: "history_deleted",
        sync: "history_sync"
    },
    VS = "history",
    WS = "0.3",
    GS = "expirer",
    qr = {
        created: "expirer_created",
        deleted: "expirer_deleted",
        expired: "expirer_expired",
        sync: "expirer_sync"
    },
    YS = "0.3",
    su = "verify-api",
    qn = "https://verify.walletconnect.com",
    Tu = "https://verify.walletconnect.org",
    JS = [qn, Tu],
    QS = "echo",
    XS = "https://echo.walletconnect.com";
class ZS {
    constructor(e, t) {
        this.core = e, this.logger = t, this.keychain = new Map, this.name = PS, this.version = OS, this.initialized = !1, this.storagePrefix = qi, this.init = async () => {
            if (!this.initialized) {
                const s = await this.getKeyChain();
                typeof s < "u" && (this.keychain = s), this.initialized = !0
            }
        }, this.has = s => (this.isInitialized(), this.keychain.has(s)), this.set = async (s, o) => {
            this.isInitialized(), this.keychain.set(s, o), await this.persist()
        }, this.get = s => {
            this.isInitialized();
            const o = this.keychain.get(s);
            if (typeof o > "u") {
                const {
                    message: c
                } = ae("NO_MATCHING_KEY", `${this.name}: ${s}`);
                throw new Error(c)
            }
            return o
        }, this.del = async s => {
            this.isInitialized(), this.keychain.delete(s), await this.persist()
        }, this.core = e, this.logger = br(t, this.name)
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(e) {
        await this.core.storage.setItem(this.storageKey, dp(e))
    }
    async getKeyChain() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? pp(e) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ae("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class eI {
    constructor(e, t, s) {
        this.core = e, this.logger = t, this.name = IS, this.initialized = !1, this.init = async () => {
            this.initialized || (await this.keychain.init(), this.initialized = !0)
        }, this.hasKeys = o => (this.isInitialized(), this.keychain.has(o)), this.getClientId = async () => {
            this.isInitialized();
            const o = await this.getClientSeed(),
                c = Xf(o);
            return Op(c.publicKey)
        }, this.generateKeyPair = () => {
            this.isInitialized();
            const o = OE();
            return this.setPrivateKey(o.publicKey, o.privateKey)
        }, this.signJWT = async o => {
            this.isInitialized();
            const c = await this.getClientSeed(),
                d = Xf(c),
                f = Iu();
            return await D6(f, o, xS, d)
        }, this.generateSharedKey = (o, c, d) => {
            this.isInitialized();
            const f = this.getPrivateKey(o),
                p = CE(f, c);
            return this.setSymKey(p, d)
        }, this.setSymKey = async (o, c) => {
            this.isInitialized();
            const d = c || AE(o);
            return await this.keychain.set(d, o), d
        }, this.deleteKeyPair = async o => {
            this.isInitialized(), await this.keychain.del(o)
        }, this.deleteSymKey = async o => {
            this.isInitialized(), await this.keychain.del(o)
        }, this.encode = async (o, c, d) => {
            this.isInitialized();
            const f = fp(d),
                p = cn(c);
            if (Pf(f)) {
                const P = f.senderPublicKey,
                    O = f.receiverPublicKey;
                o = await this.generateSharedKey(P, O)
            }
            const y = this.getSymKey(o),
                {
                    type: m,
                    senderPublicKey: b
                } = f;
            return RE({
                type: m,
                symKey: y,
                message: p,
                senderPublicKey: b
            })
        }, this.decode = async (o, c, d) => {
            this.isInitialized();
            const f = UE(c, d);
            if (Pf(f)) {
                const p = f.receiverPublicKey,
                    y = f.senderPublicKey;
                o = await this.generateSharedKey(p, y)
            }
            try {
                const p = this.getSymKey(o),
                    y = NE({
                        symKey: p,
                        encoded: c
                    });
                return Us(y)
            } catch (p) {
                this.logger.error(`Failed to decode message from topic: '${o}', clientId: '${await this.getClientId()}'`), this.logger.error(p)
            }
        }, this.getPayloadType = o => {
            const c = ta(o);
            return Rs(c.type)
        }, this.getPayloadSenderPublicKey = o => {
            const c = ta(o);
            return c.senderPublicKey ? ur(c.senderPublicKey, cr) : void 0
        }, this.core = e, this.logger = br(t, this.name), this.keychain = s || new ZS(this.core, this.logger)
    }
    get context() {
        return wr(this.logger)
    }
    async setPrivateKey(e, t) {
        return await this.keychain.set(e, t), e
    }
    getPrivateKey(e) {
        return this.keychain.get(e)
    }
    async getClientSeed() {
        let e = "";
        try {
            e = this.keychain.get(dd)
        } catch {
            e = Iu(), await this.keychain.set(dd, e)
        }
        return _S(e, "base16")
    }
    getSymKey(e) {
        return this.keychain.get(e)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ae("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class tI extends e6 {
    constructor(e, t) {
        super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = CS, this.version = AS, this.initialized = !1, this.storagePrefix = qi, this.init = async () => {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const s = await this.getRelayerMessages();
                    typeof s < "u" && (this.messages = s), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (s) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s)
                } finally {
                    this.initialized = !0
                }
            }
        }, this.set = async (s, o) => {
            this.isInitialized();
            const c = Fn(o);
            let d = this.messages.get(s);
            return typeof d > "u" && (d = {}), typeof d[c] < "u" || (d[c] = o, this.messages.set(s, d), await this.persist()), c
        }, this.get = s => {
            this.isInitialized();
            let o = this.messages.get(s);
            return typeof o > "u" && (o = {}), o
        }, this.has = (s, o) => {
            this.isInitialized();
            const c = this.get(s),
                d = Fn(o);
            return typeof c[d] < "u"
        }, this.del = async s => {
            this.isInitialized(), this.messages.delete(s), await this.persist()
        }, this.logger = br(e, this.name), this.core = t
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setRelayerMessages(e) {
        await this.core.storage.setItem(this.storageKey, dp(e))
    }
    async getRelayerMessages() {
        const e = await this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? pp(e) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ae("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class rI extends t6 {
    constructor(e, t) {
        super(e, t), this.relayer = e, this.logger = t, this.events = new Fr.EventEmitter, this.name = RS, this.queue = new Map, this.publishTimeout = ve.toMiliseconds(ve.TEN_SECONDS * 2), this.needsTransportRestart = !1, this.publish = async (s, o, c) => {
            var d;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: s,
                    message: o,
                    opts: c
                }
            });
            try {
                const f = (c == null ? void 0 : c.ttl) || TS,
                    p = xu(c),
                    y = (c == null ? void 0 : c.prompt) || !1,
                    m = (c == null ? void 0 : c.tag) || 0,
                    b = (c == null ? void 0 : c.id) || Np().toString(),
                    P = {
                        topic: s,
                        message: o,
                        opts: {
                            ttl: f,
                            relay: p,
                            prompt: y,
                            tag: m,
                            id: b
                        }
                    },
                    O = setTimeout(() => this.queue.set(b, P), this.publishTimeout);
                try {
                    await await xs(this.rpcPublish(s, o, f, p, y, m, b), this.publishTimeout, `Failed to publish payload, please try again. id:${b} tag:${m}`), this.removeRequestFromQueue(b), this.relayer.events.emit(Zt.publish, P)
                } catch (S) {
                    if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (d = c == null ? void 0 : c.internal) != null && d.throwOnFailedPublish) throw this.removeRequestFromQueue(b), S;
                    return
                } finally {
                    clearTimeout(O)
                }
                this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: s,
                        message: o,
                        opts: c
                    }
                })
            } catch (f) {
                throw this.logger.debug("Failed to Publish Payload"), this.logger.error(f), f
            }
        }, this.on = (s, o) => {
            this.events.on(s, o)
        }, this.once = (s, o) => {
            this.events.once(s, o)
        }, this.off = (s, o) => {
            this.events.off(s, o)
        }, this.removeListener = (s, o) => {
            this.events.removeListener(s, o)
        }, this.relayer = e, this.logger = br(t, this.name), this.registerEventListeners()
    }
    get context() {
        return wr(this.logger)
    }
    rpcPublish(e, t, s, o, c, d, f) {
        var p, y, m, b;
        const P = {
            method: Jo(o.protocol).publish,
            params: {
                topic: e,
                message: t,
                ttl: s,
                prompt: c,
                tag: d
            },
            id: f
        };
        return ar((p = P.params) == null ? void 0 : p.prompt) && ((y = P.params) == null || delete y.prompt), ar((m = P.params) == null ? void 0 : m.tag) && ((b = P.params) == null || delete b.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: P
        }), this.relayer.request(P)
    }
    removeRequestFromQueue(e) {
        this.queue.delete(e)
    }
    checkQueue() {
        this.queue.forEach(async e => {
            const {
                topic: t,
                message: s,
                opts: o
            } = e;
            await this.publish(t, s, o)
        })
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Wn.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1, this.relayer.events.emit(Zt.connection_stalled);
                return
            }
            this.checkQueue()
        }), this.relayer.on(Zt.message_ack, e => {
            this.removeRequestFromQueue(e.id.toString())
        })
    }
}
class iI {
    constructor() {
        this.map = new Map, this.set = (e, t) => {
            const s = this.get(e);
            this.exists(e, t) || this.map.set(e, [...s, t])
        }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
            if (typeof t > "u") {
                this.map.delete(e);
                return
            }
            if (!this.map.has(e)) return;
            const s = this.get(e);
            if (!this.exists(e, t)) return;
            const o = s.filter(c => c !== t);
            if (!o.length) {
                this.map.delete(e);
                return
            }
            this.map.set(e, o)
        }, this.clear = () => {
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var nI = Object.defineProperty,
    sI = Object.defineProperties,
    oI = Object.getOwnPropertyDescriptors,
    gd = Object.getOwnPropertySymbols,
    aI = Object.prototype.hasOwnProperty,
    cI = Object.prototype.propertyIsEnumerable,
    yd = (i, e, t) => e in i ? nI(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    ms = (i, e) => {
        for (var t in e || (e = {})) aI.call(e, t) && yd(i, t, e[t]);
        if (gd)
            for (var t of gd(e)) cI.call(e, t) && yd(i, t, e[t]);
        return i
    },
    ou = (i, e) => sI(i, oI(e));
class uI extends n6 {
    constructor(e, t) {
        super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new iI, this.events = new Fr.EventEmitter, this.name = zS, this.version = HS, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = qi, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
        }, this.subscribe = async (s, o) => {
            await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: s,
                    opts: o
                }
            });
            try {
                const c = xu(o),
                    d = {
                        topic: s,
                        relay: c
                    };
                this.pending.set(s, d);
                const f = await this.rpcSubscribe(s, c);
                return this.onSubscribe(f, d), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: s,
                        opts: o
                    }
                }), f
            } catch (c) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(c), c
            }
        }, this.unsubscribe = async (s, o) => {
            await this.restartToComplete(), this.isInitialized(), typeof(o == null ? void 0 : o.id) < "u" ? await this.unsubscribeById(s, o.id, o) : await this.unsubscribeByTopic(s, o)
        }, this.isSubscribed = async s => {
            if (this.topics.includes(s)) return !0;
            const o = `${this.pendingSubscriptionWatchLabel}_${s}`;
            return await new Promise((c, d) => {
                const f = new ve.Watch;
                f.start(o);
                const p = setInterval(() => {
                    !this.pending.has(s) && this.topics.includes(s) && (clearInterval(p), f.stop(o), c(!0)), f.elapsed(o) >= BS && (clearInterval(p), f.stop(o), d(new Error("Subscription resolution timeout")))
                }, this.pollingInterval)
            }).catch(() => !1)
        }, this.on = (s, o) => {
            this.events.on(s, o)
        }, this.once = (s, o) => {
            this.events.once(s, o)
        }, this.off = (s, o) => {
            this.events.off(s, o)
        }, this.removeListener = (s, o) => {
            this.events.removeListener(s, o)
        }, this.restart = async () => {
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
        }, this.relayer = e, this.logger = br(t, this.name), this.clientId = ""
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(e, t) {
        let s = !1;
        try {
            s = this.getSubscription(e).topic === t
        } catch {}
        return s
    }
    onEnable() {
        this.cached = [], this.initialized = !0
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
    }
    async unsubscribeByTopic(e, t) {
        const s = this.topicMap.get(e);
        await Promise.all(s.map(async o => await this.unsubscribeById(e, o, t)))
    }
    async unsubscribeById(e, t, s) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: e,
                id: t,
                opts: s
            }
        });
        try {
            const o = xu(s);
            await this.rpcUnsubscribe(e, t, o);
            const c = mt("USER_DISCONNECTED", `${this.name}, ${e}`);
            await this.onUnsubscribe(e, t, c), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: e,
                    id: t,
                    opts: s
                }
            })
        } catch (o) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(o), o
        }
    }
    async rpcSubscribe(e, t) {
        const s = {
            method: Jo(t.protocol).subscribe,
            params: {
                topic: e
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            await await xs(this.relayer.request(s), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Zt.connection_stalled)
        }
        return Fn(e + this.clientId)
    }
    async rpcBatchSubscribe(e) {
        if (!e.length) return;
        const t = e[0].relay,
            s = {
                method: Jo(t.protocol).batchSubscribe,
                params: {
                    topics: e.map(o => o.topic)
                }
            };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        });
        try {
            return await await xs(this.relayer.request(s), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Zt.connection_stalled)
        }
    }
    rpcUnsubscribe(e, t, s) {
        const o = {
            method: Jo(s.protocol).unsubscribe,
            params: {
                topic: e,
                id: t
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: o
        }), this.relayer.request(o)
    }
    onSubscribe(e, t) {
        this.setSubscription(e, ou(ms({}, t), {
            id: e
        })), this.pending.delete(t.topic)
    }
    onBatchSubscribe(e) {
        e.length && e.forEach(t => {
            this.setSubscription(t.id, ms({}, t)), this.pending.delete(t.topic)
        })
    }
    async onUnsubscribe(e, t, s) {
        this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, s), await this.relayer.messages.del(e)
    }
    async setRelayerSubscriptions(e) {
        await this.relayer.core.storage.setItem(this.storageKey, e)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(e, t) {
        this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: e,
            subscription: t
        }), this.addSubscription(e, t))
    }
    addSubscription(e, t) {
        this.subscriptions.set(e, ms({}, t)), this.topicMap.set(t.topic, e), this.events.emit(Wr.created, t)
    }
    getSubscription(e) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: e
        });
        const t = this.subscriptions.get(e);
        if (!t) {
            const {
                message: s
            } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s)
        }
        return t
    }
    deleteSubscription(e, t) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: e,
            reason: t
        });
        const s = this.getSubscription(e);
        this.subscriptions.delete(e), this.topicMap.delete(s.topic, e), this.events.emit(Wr.deleted, ou(ms({}, s), {
            reason: t
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(Wr.sync)
    }
    async reset() {
        if (this.cached.length) {
            const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let t = 0; t < e; t++) {
                const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(s)
            }
        }
        this.events.emit(Wr.resubscribed)
    }
    async restore() {
        try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
                const {
                    message: t
                } = ae("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t)
            }
            this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
        }
    }
    async batchSubscribe(e) {
        if (!e.length) return;
        const t = await this.rpcBatchSubscribe(e);
        si(t) && this.onBatchSubscribe(t.map((s, o) => ou(ms({}, e[o]), {
            id: s
        })))
    }
    async onConnect() {
        this.restartInProgress || (await this.restart(), this.onEnable())
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
        const e = [];
        this.pending.forEach(t => {
            e.push(t)
        }), await this.batchSubscribe(e)
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(Wn.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending()
        }), this.relayer.on(Zt.connect, async () => {
            await this.onConnect()
        }), this.relayer.on(Zt.disconnect, () => {
            this.onDisconnect()
        }), this.events.on(Wr.created, async e => {
            const t = Wr.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist()
        }), this.events.on(Wr.deleted, async e => {
            const t = Wr.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), await this.persist()
        })
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ae("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise(e => {
            const t = setInterval(() => {
                this.restartInProgress || (clearInterval(t), e())
            }, this.pollingInterval)
        })
    }
}
var hI = Object.defineProperty,
    vd = Object.getOwnPropertySymbols,
    lI = Object.prototype.hasOwnProperty,
    fI = Object.prototype.propertyIsEnumerable,
    md = (i, e, t) => e in i ? hI(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    dI = (i, e) => {
        for (var t in e || (e = {})) lI.call(e, t) && md(i, t, e[t]);
        if (vd)
            for (var t of vd(e)) fI.call(e, t) && md(i, t, e[t]);
        return i
    };
class pI extends r6 {
    constructor(e) {
        super(e), this.protocol = "wc", this.version = 2, this.events = new Fr.EventEmitter, this.name = $S, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.request = async t => {
            this.logger.debug("Publishing Request Payload");
            const s = t.id;
            try {
                await this.toEstablishConnection();
                const o = this.provider.request(t);
                return this.requestsInFlight.set(s, {
                    promise: o,
                    request: t
                }), await o
            } catch (o) {
                throw this.logger.debug("Failed to Publish Request"), this.logger.error(o), o
            } finally {
                this.requestsInFlight.delete(s)
            }
        }, this.onPayloadHandler = t => {
            this.onProviderPayload(t)
        }, this.onConnectHandler = () => {
            this.events.emit(Zt.connect)
        }, this.onDisconnectHandler = () => {
            this.onProviderDisconnect()
        }, this.onProviderErrorHandler = t => {
            this.logger.error(t), this.events.emit(Zt.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
        }, this.registerProviderListeners = () => {
            this.provider.on(bi.payload, this.onPayloadHandler), this.provider.on(bi.connect, this.onConnectHandler), this.provider.on(bi.disconnect, this.onDisconnectHandler), this.provider.on(bi.error, this.onProviderErrorHandler)
        }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? br(e.logger, this.name) : pa(ga({
            level: e.logger || NS
        })), this.messages = new tI(this.logger, e.core), this.subscriber = new uI(this, this.logger), this.publisher = new rI(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || Yp, this.projectId = e.projectId, this.bundleId = zE(), this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${pd}...`), await this.restartTransport(pd)
        }
        this.initialized = !0, setTimeout(async () => {
            this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
        }, jS)
    }
    get context() {
        return wr(this.logger)
    }
    get connected() {
        return this.provider.connection.connected
    }
    get connecting() {
        return this.provider.connection.connecting
    }
    async publish(e, t, s) {
        this.isInitialized(), await this.publisher.publish(e, t, s), await this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now()
        })
    }
    async subscribe(e, t) {
        var s;
        this.isInitialized();
        let o = ((s = this.subscriber.topicMap.get(e)) == null ? void 0 : s[0]) || "";
        if (o) return o;
        let c;
        const d = f => {
            f.topic === e && (this.subscriber.off(Wr.created, d), c())
        };
        return await Promise.all([new Promise(f => {
            c = f, this.subscriber.on(Wr.created, d)
        }), new Promise(async f => {
            o = await this.subscriber.subscribe(e, t), f()
        })]), o
    }
    async unsubscribe(e, t) {
        this.isInitialized(), await this.subscriber.unsubscribe(e, t)
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async transportClose() {
        this.requestsInFlight.size > 0 && (this.logger.debug("Waiting for all in-flight requests to finish before closing transport..."), this.requestsInFlight.forEach(async e => {
            await e.promise
        })), this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await xs(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
    }
    async transportOpen(e) {
        if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
            e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
            try {
                await Promise.all([new Promise(t => {
                    if (!this.initialized) return t();
                    this.subscriber.once(Wr.resubscribed, () => {
                        t()
                    })
                }), new Promise(async (t, s) => {
                    try {
                        await xs(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                    } catch (o) {
                        s(o);
                        return
                    }
                    t()
                })])
            } catch (t) {
                this.logger.error(t);
                const s = t;
                if (!this.isConnectionStalled(s.message)) throw t;
                this.provider.events.emit(bi.disconnect)
            } finally {
                this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
            }
        }
    }
    async restartTransport(e) {
        await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!await jf()) throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    isConnectionStalled(e) {
        return this.staleConnectionErrors.some(t => e.includes(t))
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const e = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new Ii(new K6(WE({
            sdkVersion: LS,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: e,
            useOnCloseEvent: !0,
            bundleId: this.bundleId
        }))), this.registerProviderListeners()
    }
    async recordMessageEvent(e) {
        const {
            topic: t,
            message: s
        } = e;
        await this.messages.set(t, s)
    }
    async shouldIgnoreMessageEvent(e) {
        const {
            topic: t,
            message: s
        } = e;
        if (!s || s.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
        if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
        const o = this.messages.has(t, s);
        return o && this.logger.debug(`Ignoring duplicate message: ${s}`), o
    }
    async onProviderPayload(e) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: e
            }), Zu(e)) {
            if (!e.method.endsWith(US)) return;
            const t = e.params,
                {
                    topic: s,
                    message: o,
                    publishedAt: c
                } = t.data,
                d = {
                    topic: s,
                    message: o,
                    publishedAt: c
                };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(dI({
                type: "event",
                event: t.id
            }, d)), this.events.emit(t.id, d), await this.acknowledgePayload(e), await this.onMessageEvent(d)
        } else ma(e) && this.events.emit(Zt.message_ack, e)
    }
    async onMessageEvent(e) {
        await this.shouldIgnoreMessageEvent(e) || (this.events.emit(Zt.message, e), await this.recordMessageEvent(e))
    }
    async acknowledgePayload(e) {
        const t = ya(e.id, !0);
        await this.provider.connection.send(t)
    }
    unregisterProviderListeners() {
        this.provider.off(bi.payload, this.onPayloadHandler), this.provider.off(bi.connect, this.onConnectHandler), this.provider.off(bi.disconnect, this.onDisconnectHandler), this.provider.off(bi.error, this.onProviderErrorHandler)
    }
    async registerEventListeners() {
        this.events.on(Zt.connection_stalled, () => {
            this.restartTransport().catch(t => this.logger.error(t))
        });
        let e = await jf();
        zD(async t => {
            this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch(s => this.logger.error(s)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch(s => this.logger.error(s))))
        })
    }
    onProviderDisconnect() {
        this.events.emit(Zt.disconnect), this.attemptToReconnect()
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
            await this.restartTransport().catch(e => this.logger.error(e))
        }, ve.toMiliseconds(MS)))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ae("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    async toEstablishConnection() {
        if (await this.confirmOnlineStateOrThrow(), !this.connected) {
            if (this.connectionAttemptInProgress) return await new Promise(e => {
                const t = setInterval(() => {
                    this.connected && (clearInterval(t), e())
                }, this.connectionStatusPollingInterval)
            });
            await this.restartTransport()
        }
    }
}
var gI = Object.defineProperty,
    wd = Object.getOwnPropertySymbols,
    yI = Object.prototype.hasOwnProperty,
    vI = Object.prototype.propertyIsEnumerable,
    bd = (i, e, t) => e in i ? gI(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    _d = (i, e) => {
        for (var t in e || (e = {})) yI.call(e, t) && bd(i, t, e[t]);
        if (wd)
            for (var t of wd(e)) vI.call(e, t) && bd(i, t, e[t]);
        return i
    };
class ba extends i6 {
    constructor(e, t, s, o = qi, c = void 0) {
        super(e, t, s, o), this.core = e, this.logger = t, this.name = s, this.map = new Map, this.version = qS, this.cached = [], this.initialized = !1, this.storagePrefix = qi, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(d => {
                this.getKey && d !== null && !ar(d) ? this.map.set(this.getKey(d), d) : mD(d) ? this.map.set(d.id, d) : wD(d) && this.map.set(d.topic, d)
            }), this.cached = [], this.initialized = !0)
        }, this.set = async (d, f) => {
            this.isInitialized(), this.map.has(d) ? await this.update(d, f) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: d,
                value: f
            }), this.map.set(d, f), await this.persist())
        }, this.get = d => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
            type: "method",
            method: "get",
            key: d
        }), this.getData(d)), this.getAll = d => (this.isInitialized(), d ? this.values.filter(f => Object.keys(d).every(p => V6(f[p], d[p]))) : this.values), this.update = async (d, f) => {
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: d,
                update: f
            });
            const p = _d(_d({}, this.getData(d)), f);
            this.map.set(d, p), await this.persist()
        }, this.delete = async (d, f) => {
            this.isInitialized(), this.map.has(d) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: d,
                reason: f
            }), this.map.delete(d), await this.persist())
        }, this.logger = br(t, this.name), this.storagePrefix = o, this.getKey = c
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    async setDataStore(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(e) {
        const t = this.map.get(e);
        if (!t) {
            const {
                message: s
            } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(s), new Error(s)
        }
        return t
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
                const {
                    message: t
                } = ae("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t)
            }
            this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ae("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class mI {
    constructor(e, t) {
        this.core = e, this.logger = t, this.name = KS, this.version = kS, this.events = new Lu, this.initialized = !1, this.storagePrefix = qi, this.ignoredPayloadTypes = [hn], this.registeredMethods = [], this.init = async () => {
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
        }, this.register = ({
            methods: s
        }) => {
            this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...s])]
        }, this.create = async () => {
            this.isInitialized();
            const s = Iu(),
                o = await this.core.crypto.setSymKey(s),
                c = Pr(ve.FIVE_MINUTES),
                d = {
                    protocol: Gp
                },
                f = {
                    topic: o,
                    expiry: c,
                    relay: d,
                    active: !1
                },
                p = uD({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: o,
                    symKey: s,
                    relay: d,
                    expiryTimestamp: c
                });
            return await this.pairings.set(o, f), await this.core.relayer.subscribe(o), this.core.expirer.set(o, c), {
                topic: o,
                uri: p
            }
        }, this.pair = async s => {
            this.isInitialized(), this.isValidPair(s);
            const {
                topic: o,
                symKey: c,
                relay: d,
                expiryTimestamp: f
            } = Nf(s.uri);
            let p;
            if (this.pairings.keys.includes(o) && (p = this.pairings.get(o), p.active)) throw new Error(`Pairing already exists: ${o}. Please try again with a new connection URI.`);
            const y = f || Pr(ve.FIVE_MINUTES),
                m = {
                    topic: o,
                    relay: d,
                    expiry: y,
                    active: !1
                };
            return await this.pairings.set(o, m), this.core.expirer.set(o, y), s.activatePairing && await this.activate({
                topic: o
            }), this.events.emit(_s.create, m), this.core.crypto.keychain.has(o) || (await this.core.crypto.setSymKey(c, o), await this.core.relayer.subscribe(o, {
                relay: d
            })), m
        }, this.activate = async ({
            topic: s
        }) => {
            this.isInitialized();
            const o = Pr(ve.THIRTY_DAYS);
            await this.pairings.update(s, {
                active: !0,
                expiry: o
            }), this.core.expirer.set(s, o)
        }, this.ping = async s => {
            this.isInitialized(), await this.isValidPing(s);
            const {
                topic: o
            } = s;
            if (this.pairings.keys.includes(o)) {
                const c = await this.sendRequest(o, "wc_pairingPing", {}),
                    {
                        done: d,
                        resolve: f,
                        reject: p
                    } = jn();
                this.events.once(Nt("pairing_ping", c), ({
                    error: y
                }) => {
                    y ? p(y) : f()
                }), await d()
            }
        }, this.updateExpiry = async ({
            topic: s,
            expiry: o
        }) => {
            this.isInitialized(), await this.pairings.update(s, {
                expiry: o
            })
        }, this.updateMetadata = async ({
            topic: s,
            metadata: o
        }) => {
            this.isInitialized(), await this.pairings.update(s, {
                peerMetadata: o
            })
        }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async s => {
            this.isInitialized(), await this.isValidDisconnect(s);
            const {
                topic: o
            } = s;
            this.pairings.keys.includes(o) && (await this.sendRequest(o, "wc_pairingDelete", mt("USER_DISCONNECTED")), await this.deletePairing(o))
        }, this.sendRequest = async (s, o, c) => {
            const d = zn(o, c),
                f = await this.core.crypto.encode(s, d),
                p = vs[o].req;
            return this.core.history.set(s, d), this.core.relayer.publish(s, f, p), d.id
        }, this.sendResult = async (s, o, c) => {
            const d = ya(s, c),
                f = await this.core.crypto.encode(o, d),
                p = await this.core.history.get(o, s),
                y = vs[p.request.method].res;
            await this.core.relayer.publish(o, f, y), await this.core.history.resolve(d)
        }, this.sendError = async (s, o, c) => {
            const d = va(s, c),
                f = await this.core.crypto.encode(o, d),
                p = await this.core.history.get(o, s),
                y = vs[p.request.method] ? vs[p.request.method].res : vs.unregistered_method.res;
            await this.core.relayer.publish(o, f, y), await this.core.history.resolve(d)
        }, this.deletePairing = async (s, o) => {
            await this.core.relayer.unsubscribe(s), await Promise.all([this.pairings.delete(s, mt("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(s), o ? Promise.resolve() : this.core.expirer.del(s)])
        }, this.cleanup = async () => {
            const s = this.pairings.getAll().filter(o => ji(o.expiry));
            await Promise.all(s.map(o => this.deletePairing(o.topic)))
        }, this.onRelayEventRequest = s => {
            const {
                topic: o,
                payload: c
            } = s;
            switch (c.method) {
                case "wc_pairingPing":
                    return this.onPairingPingRequest(o, c);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(o, c);
                default:
                    return this.onUnknownRpcMethodRequest(o, c)
            }
        }, this.onRelayEventResponse = async s => {
            const {
                topic: o,
                payload: c
            } = s, d = (await this.core.history.get(o, c.id)).request.method;
            switch (d) {
                case "wc_pairingPing":
                    return this.onPairingPingResponse(o, c);
                default:
                    return this.onUnknownRpcMethodResponse(d)
            }
        }, this.onPairingPingRequest = async (s, o) => {
            const {
                id: c
            } = o;
            try {
                this.isValidPing({
                    topic: s
                }), await this.sendResult(c, s, !0), this.events.emit(_s.ping, {
                    id: c,
                    topic: s
                })
            } catch (d) {
                await this.sendError(c, s, d), this.logger.error(d)
            }
        }, this.onPairingPingResponse = (s, o) => {
            const {
                id: c
            } = o;
            setTimeout(() => {
                Di(o) ? this.events.emit(Nt("pairing_ping", c), {}) : Gr(o) && this.events.emit(Nt("pairing_ping", c), {
                    error: o.error
                })
            }, 500)
        }, this.onPairingDeleteRequest = async (s, o) => {
            const {
                id: c
            } = o;
            try {
                this.isValidDisconnect({
                    topic: s
                }), await this.deletePairing(s), this.events.emit(_s.delete, {
                    id: c,
                    topic: s
                })
            } catch (d) {
                await this.sendError(c, s, d), this.logger.error(d)
            }
        }, this.onUnknownRpcMethodRequest = async (s, o) => {
            const {
                id: c,
                method: d
            } = o;
            try {
                if (this.registeredMethods.includes(d)) return;
                const f = mt("WC_METHOD_UNSUPPORTED", d);
                await this.sendError(c, s, f), this.logger.error(f)
            } catch (f) {
                await this.sendError(c, s, f), this.logger.error(f)
            }
        }, this.onUnknownRpcMethodResponse = s => {
            this.registeredMethods.includes(s) || this.logger.error(mt("WC_METHOD_UNSUPPORTED", s))
        }, this.isValidPair = s => {
            var o;
            if (!vr(s)) {
                const {
                    message: d
                } = ae("MISSING_OR_INVALID", `pair() params: ${s}`);
                throw new Error(d)
            }
            if (!vD(s.uri)) {
                const {
                    message: d
                } = ae("MISSING_OR_INVALID", `pair() uri: ${s.uri}`);
                throw new Error(d)
            }
            const c = Nf(s.uri);
            if (!((o = c == null ? void 0 : c.relay) != null && o.protocol)) {
                const {
                    message: d
                } = ae("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                throw new Error(d)
            }
            if (!(c != null && c.symKey)) {
                const {
                    message: d
                } = ae("MISSING_OR_INVALID", "pair() uri#symKey");
                throw new Error(d)
            }
            if (c != null && c.expiryTimestamp && ve.toMiliseconds(c == null ? void 0 : c.expiryTimestamp) < Date.now()) {
                const {
                    message: d
                } = ae("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                throw new Error(d)
            }
        }, this.isValidPing = async s => {
            if (!vr(s)) {
                const {
                    message: c
                } = ae("MISSING_OR_INVALID", `ping() params: ${s}`);
                throw new Error(c)
            }
            const {
                topic: o
            } = s;
            await this.isValidPairingTopic(o)
        }, this.isValidDisconnect = async s => {
            if (!vr(s)) {
                const {
                    message: c
                } = ae("MISSING_OR_INVALID", `disconnect() params: ${s}`);
                throw new Error(c)
            }
            const {
                topic: o
            } = s;
            await this.isValidPairingTopic(o)
        }, this.isValidPairingTopic = async s => {
            if (!Vt(s, !1)) {
                const {
                    message: o
                } = ae("MISSING_OR_INVALID", `pairing topic should be a string: ${s}`);
                throw new Error(o)
            }
            if (!this.pairings.keys.includes(s)) {
                const {
                    message: o
                } = ae("NO_MATCHING_KEY", `pairing topic doesn't exist: ${s}`);
                throw new Error(o)
            }
            if (ji(this.pairings.get(s).expiry)) {
                await this.deletePairing(s);
                const {
                    message: o
                } = ae("EXPIRED", `pairing topic: ${s}`);
                throw new Error(o)
            }
        }, this.core = e, this.logger = br(t, this.name), this.pairings = new ba(this.core, this.logger, this.name, this.storagePrefix)
    }
    get context() {
        return wr(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ae("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(Zt.message, async e => {
            const {
                topic: t,
                message: s
            } = e;
            if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))) return;
            const o = await this.core.crypto.decode(t, s);
            try {
                Zu(o) ? (this.core.history.set(t, o), this.onRelayEventRequest({
                    topic: t,
                    payload: o
                })) : ma(o) && (await this.core.history.resolve(o), await this.onRelayEventResponse({
                    topic: t,
                    payload: o
                }), this.core.history.delete(t, o.id))
            } catch (c) {
                this.logger.error(c)
            }
        })
    }
    registerExpirerEvents() {
        this.core.expirer.on(qr.expired, async e => {
            const {
                topic: t
            } = yp(e.target);
            t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(_s.expire, {
                topic: t
            }))
        })
    }
}
class wI extends Z3 {
    constructor(e, t) {
        super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new Fr.EventEmitter, this.name = VS, this.version = WS, this.cached = [], this.initialized = !1, this.storagePrefix = qi, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(s => this.records.set(s.id, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.set = (s, o, c) => {
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                    type: "method",
                    method: "set",
                    topic: s,
                    request: o,
                    chainId: c
                }), this.records.has(o.id)) return;
            const d = {
                id: o.id,
                topic: s,
                request: {
                    method: o.method,
                    params: o.params || null
                },
                chainId: c,
                expiry: Pr(ve.THIRTY_DAYS)
            };
            this.records.set(d.id, d), this.events.emit(ii.created, d)
        }, this.resolve = async s => {
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                    type: "method",
                    method: "update",
                    response: s
                }), !this.records.has(s.id)) return;
            const o = await this.getRecord(s.id);
            typeof o.response > "u" && (o.response = Gr(s) ? {
                error: s.error
            } : {
                result: s.result
            }, this.records.set(o.id, o), this.events.emit(ii.updated, o))
        }, this.get = async (s, o) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
            type: "method",
            method: "get",
            topic: s,
            id: o
        }), await this.getRecord(o)), this.delete = (s, o) => {
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: o
            }), this.values.forEach(c => {
                if (c.topic === s) {
                    if (typeof o < "u" && c.id !== o) return;
                    this.records.delete(c.id), this.events.emit(ii.deleted, c)
                }
            })
        }, this.exists = async (s, o) => (this.isInitialized(), this.records.has(o) ? (await this.getRecord(o)).topic === s : !1), this.on = (s, o) => {
            this.events.on(s, o)
        }, this.once = (s, o) => {
            this.events.once(s, o)
        }, this.off = (s, o) => {
            this.events.off(s, o)
        }, this.removeListener = (s, o) => {
            this.events.removeListener(s, o)
        }, this.logger = br(t, this.name)
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const e = [];
        return this.values.forEach(t => {
            if (typeof t.response < "u") return;
            const s = {
                topic: t.topic,
                request: zn(t.request.method, t.request.params, t.id),
                chainId: t.chainId
            };
            return e.push(s)
        }), e
    }
    async setJsonRpcRecords(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(e) {
        this.isInitialized();
        const t = this.records.get(e);
        if (!t) {
            const {
                message: s
            } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw new Error(s)
        }
        return t
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(ii.sync)
    }
    async restore() {
        try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
                const {
                    message: t
                } = ae("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t)
            }
            this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
        }
    }
    registerEventListeners() {
        this.events.on(ii.created, e => {
            const t = ii.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist()
        }), this.events.on(ii.updated, e => {
            const t = ii.updated;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist()
        }), this.events.on(ii.deleted, e => {
            const t = ii.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                record: e
            }), this.persist()
        }), this.core.heartbeat.on(Wn.HEARTBEAT_EVENTS.pulse, () => {
            this.cleanup()
        })
    }
    cleanup() {
        try {
            this.records.forEach(e => {
                ve.toMiliseconds(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
            })
        } catch (e) {
            this.logger.warn(e)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ae("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class bI extends s6 {
    constructor(e, t) {
        super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new Fr.EventEmitter, this.name = GS, this.version = YS, this.cached = [], this.initialized = !1, this.storagePrefix = qi, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(s => this.expirations.set(s.target, s)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.has = s => {
            try {
                const o = this.formatTarget(s);
                return typeof this.getExpiration(o) < "u"
            } catch {
                return !1
            }
        }, this.set = (s, o) => {
            this.isInitialized();
            const c = this.formatTarget(s),
                d = {
                    target: c,
                    expiry: o
                };
            this.expirations.set(c, d), this.checkExpiry(c, d), this.events.emit(qr.created, {
                target: c,
                expiration: d
            })
        }, this.get = s => {
            this.isInitialized();
            const o = this.formatTarget(s);
            return this.getExpiration(o)
        }, this.del = s => {
            if (this.isInitialized(), this.has(s)) {
                const o = this.formatTarget(s),
                    c = this.getExpiration(o);
                this.expirations.delete(o), this.events.emit(qr.deleted, {
                    target: o,
                    expiration: c
                })
            }
        }, this.on = (s, o) => {
            this.events.on(s, o)
        }, this.once = (s, o) => {
            this.events.once(s, o)
        }, this.off = (s, o) => {
            this.events.off(s, o)
        }, this.removeListener = (s, o) => {
            this.events.removeListener(s, o)
        }, this.logger = br(t, this.name)
    }
    get context() {
        return wr(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(e) {
        if (typeof e == "string") return GE(e);
        if (typeof e == "number") return YE(e);
        const {
            message: t
        } = ae("UNKNOWN_TYPE", `Target type: ${typeof e}`);
        throw new Error(t)
    }
    async setExpirations(e) {
        await this.core.storage.setItem(this.storageKey, e)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(qr.sync)
    }
    async restore() {
        try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
                const {
                    message: t
                } = ae("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(t), new Error(t)
            }
            this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (e) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
        }
    }
    getExpiration(e) {
        const t = this.expirations.get(e);
        if (!t) {
            const {
                message: s
            } = ae("NO_MATCHING_KEY", `${this.name}: ${e}`);
            throw this.logger.error(s), new Error(s)
        }
        return t
    }
    checkExpiry(e, t) {
        const {
            expiry: s
        } = t;
        ve.toMiliseconds(s) - Date.now() <= 0 && this.expire(e, t)
    }
    expire(e, t) {
        this.expirations.delete(e), this.events.emit(qr.expired, {
            target: e,
            expiration: t
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
    }
    registerEventListeners() {
        this.core.heartbeat.on(Wn.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(qr.created, e => {
            const t = qr.created;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist()
        }), this.events.on(qr.expired, e => {
            const t = qr.expired;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist()
        }), this.events.on(qr.deleted, e => {
            const t = qr.deleted;
            this.logger.info(`Emitting ${t}`), this.logger.debug({
                type: "event",
                event: t,
                data: e
            }), this.persist()
        })
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ae("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
    }
}
class _I extends o6 {
    constructor(e, t) {
        super(e, t), this.projectId = e, this.logger = t, this.name = su, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async s => {
            if (this.verifyDisabled || Kn() || !kn()) return;
            const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
            this.verifyUrl !== o && this.removeIframe(), this.verifyUrl = o;
            try {
                await this.createIframe()
            } catch (c) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(c)
            }
            if (!this.initialized) {
                this.removeIframe(), this.verifyUrl = Tu;
                try {
                    await this.createIframe()
                } catch (c) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(c), this.verifyDisabled = !0
                }
            }
        }, this.register = async s => {
            this.initialized ? this.sendPost(s.attestationId) : (this.addToQueue(s.attestationId), await this.init())
        }, this.resolve = async s => {
            if (this.isDevEnv) return "";
            const o = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
            let c;
            try {
                c = await this.fetchAttestation(s.attestationId, o)
            } catch (d) {
                this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${o}`), this.logger.info(d), c = await this.fetchAttestation(s.attestationId, Tu)
            }
            return c
        }, this.fetchAttestation = async (s, o) => {
            this.logger.info(`resolving attestation: ${s} from url: ${o}`);
            const c = this.startAbortTimer(ve.ONE_SECOND * 2),
                d = await fetch(`${o}/attestation/${s}`, {
                    signal: this.abortController.signal
                });
            return clearTimeout(c), d.status === 200 ? await d.json() : void 0
        }, this.addToQueue = s => {
            this.queue.push(s)
        }, this.processQueue = () => {
            this.queue.length !== 0 && (this.queue.forEach(s => this.sendPost(s)), this.queue = [])
        }, this.sendPost = s => {
            var o;
            try {
                if (!this.iframe) return;
                (o = this.iframe.contentWindow) == null || o.postMessage(s, "*"), this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`)
            } catch {}
        }, this.createIframe = async () => {
            let s;
            const o = c => {
                c.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", o), s())
            };
            await Promise.race([new Promise(c => {
                if (document.getElementById(su)) return c();
                window.addEventListener("message", o);
                const d = document.createElement("iframe");
                d.id = su, d.src = `${this.verifyUrl}/${this.projectId}`, d.style.display = "none", document.body.append(d), this.iframe = d, s = c
            }), new Promise((c, d) => setTimeout(() => {
                window.removeEventListener("message", o), d("verify iframe load timeout")
            }, ve.toMiliseconds(ve.FIVE_SECONDS)))])
        }, this.removeIframe = () => {
            this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
        }, this.getVerifyUrl = s => {
            let o = s || qn;
            return JS.includes(o) || (this.logger.info(`verify url: ${o}, not included in trusted list, assigning default: ${qn}`), o = qn), o
        }, this.logger = br(t, this.name), this.verifyUrl = qn, this.abortController = new AbortController, this.isDevEnv = Wu() && Q6.IS_VITEST
    }
    get context() {
        return wr(this.logger)
    }
    startAbortTimer(e) {
        return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), ve.toMiliseconds(e))
    }
}
class EI extends a6 {
    constructor(e, t) {
        super(e, t), this.projectId = e, this.logger = t, this.context = QS, this.registerDeviceToken = async s => {
            const {
                clientId: o,
                token: c,
                notificationType: d,
                enableEncrypted: f = !1
            } = s, p = `${XS}/${this.projectId}/clients`;
            await J6(p, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    client_id: o,
                    type: d,
                    token: c,
                    always_raw: f
                })
            })
        }, this.logger = br(t, this.context)
    }
}
var DI = Object.defineProperty,
    Ed = Object.getOwnPropertySymbols,
    SI = Object.prototype.hasOwnProperty,
    II = Object.prototype.propertyIsEnumerable,
    Dd = (i, e, t) => e in i ? DI(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    Sd = (i, e) => {
        for (var t in e || (e = {})) SI.call(e, t) && Dd(i, t, e[t]);
        if (Ed)
            for (var t of Ed(e)) II.call(e, t) && Dd(i, t, e[t]);
        return i
    };
class th extends X3 {
    constructor(e) {
        super(e), this.protocol = Wp, this.version = ES, this.name = eh, this.events = new Fr.EventEmitter, this.initialized = !1, this.on = (s, o) => this.events.on(s, o), this.once = (s, o) => this.events.once(s, o), this.off = (s, o) => this.events.off(s, o), this.removeListener = (s, o) => this.events.removeListener(s, o), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || Yp, this.customStoragePrefix = e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
        const t = typeof(e == null ? void 0 : e.logger) < "u" && typeof(e == null ? void 0 : e.logger) != "string" ? e.logger : pa(ga({
            level: (e == null ? void 0 : e.logger) || DS.logger
        }));
        this.logger = br(t, this.name), this.heartbeat = new Wn.HeartBeat, this.crypto = new eI(this, this.logger, e == null ? void 0 : e.keychain), this.history = new wI(this, this.logger), this.expirer = new bI(this, this.logger), this.storage = e != null && e.storage ? e.storage : new _3(Sd(Sd({}, SS), e == null ? void 0 : e.storageOptions)), this.relayer = new pI({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new mI(this, this.logger), this.verify = new _I(this.projectId || "", this.logger), this.echoClient = new EI(this.projectId || "", this.logger)
    }
    static async init(e) {
        const t = new th(e);
        await t.initialize();
        const s = await t.crypto.getClientId();
        return await t.storage.setItem(FS, s), t
    }
    get context() {
        return wr(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
        } catch (e) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
        }
    }
}
const xI = th,
    Jp = "wc",
    Qp = 2,
    Xp = "client",
    rh = `${Jp}@${Qp}:${Xp}:`,
    au = {
        name: Xp,
        logger: "error",
        controller: !1,
        relayUrl: "wss://relay.walletconnect.com"
    },
    Id = "WALLETCONNECT_DEEPLINK_CHOICE",
    PI = "proposal",
    Zp = "Proposal expired",
    OI = "session",
    Wo = ve.SEVEN_DAYS,
    CI = "engine",
    _i = {
        wc_sessionPropose: {
            req: {
                ttl: ve.FIVE_MINUTES,
                prompt: !0,
                tag: 1100
            },
            res: {
                ttl: ve.FIVE_MINUTES,
                prompt: !1,
                tag: 1101
            }
        },
        wc_sessionSettle: {
            req: {
                ttl: ve.FIVE_MINUTES,
                prompt: !1,
                tag: 1102
            },
            res: {
                ttl: ve.FIVE_MINUTES,
                prompt: !1,
                tag: 1103
            }
        },
        wc_sessionUpdate: {
            req: {
                ttl: ve.ONE_DAY,
                prompt: !1,
                tag: 1104
            },
            res: {
                ttl: ve.ONE_DAY,
                prompt: !1,
                tag: 1105
            }
        },
        wc_sessionExtend: {
            req: {
                ttl: ve.ONE_DAY,
                prompt: !1,
                tag: 1106
            },
            res: {
                ttl: ve.ONE_DAY,
                prompt: !1,
                tag: 1107
            }
        },
        wc_sessionRequest: {
            req: {
                ttl: ve.FIVE_MINUTES,
                prompt: !0,
                tag: 1108
            },
            res: {
                ttl: ve.FIVE_MINUTES,
                prompt: !1,
                tag: 1109
            }
        },
        wc_sessionEvent: {
            req: {
                ttl: ve.FIVE_MINUTES,
                prompt: !0,
                tag: 1110
            },
            res: {
                ttl: ve.FIVE_MINUTES,
                prompt: !1,
                tag: 1111
            }
        },
        wc_sessionDelete: {
            req: {
                ttl: ve.ONE_DAY,
                prompt: !1,
                tag: 1112
            },
            res: {
                ttl: ve.ONE_DAY,
                prompt: !1,
                tag: 1113
            }
        },
        wc_sessionPing: {
            req: {
                ttl: ve.THIRTY_SECONDS,
                prompt: !1,
                tag: 1114
            },
            res: {
                ttl: ve.THIRTY_SECONDS,
                prompt: !1,
                tag: 1115
            }
        }
    },
    cu = {
        min: ve.FIVE_MINUTES,
        max: ve.SEVEN_DAYS
    },
    Ei = {
        idle: "IDLE",
        active: "ACTIVE"
    },
    AI = "request",
    TI = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var RI = Object.defineProperty,
    NI = Object.defineProperties,
    $I = Object.getOwnPropertyDescriptors,
    xd = Object.getOwnPropertySymbols,
    UI = Object.prototype.hasOwnProperty,
    MI = Object.prototype.propertyIsEnumerable,
    Pd = (i, e, t) => e in i ? RI(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    or = (i, e) => {
        for (var t in e || (e = {})) UI.call(e, t) && Pd(i, t, e[t]);
        if (xd)
            for (var t of xd(e)) MI.call(e, t) && Pd(i, t, e[t]);
        return i
    },
    Ln = (i, e) => NI(i, $I(e));
class LI extends u6 {
    constructor(e) {
        super(e), this.name = CI, this.events = new Lu, this.initialized = !1, this.ignoredPayloadTypes = [hn], this.requestQueue = {
            state: Ei.idle,
            queue: []
        }, this.sessionRequestQueue = {
            state: Ei.idle,
            queue: []
        }, this.requestQueueDelay = ve.ONE_SECOND, this.init = async () => {
            this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                methods: Object.keys(_i)
            }), this.initialized = !0, setTimeout(() => {
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
            }, ve.toMiliseconds(this.requestQueueDelay)))
        }, this.connect = async t => {
            await this.isInitialized();
            const s = Ln(or({}, t), {
                requiredNamespaces: t.requiredNamespaces || {},
                optionalNamespaces: t.optionalNamespaces || {}
            });
            await this.isValidConnect(s);
            const {
                pairingTopic: o,
                requiredNamespaces: c,
                optionalNamespaces: d,
                sessionProperties: f,
                relays: p
            } = s;
            let y = o,
                m, b = !1;
            if (y && (b = this.client.core.pairing.pairings.get(y).active), !y || !b) {
                const {
                    topic: I,
                    uri: C
                } = await this.client.core.pairing.create();
                y = I, m = C
            }
            const P = await this.client.core.crypto.generateKeyPair(),
                O = _i.wc_sessionPropose.req.ttl || ve.FIVE_MINUTES,
                S = Pr(O),
                K = or({
                    requiredNamespaces: c,
                    optionalNamespaces: d,
                    relays: p ? ? [{
                        protocol: Gp
                    }],
                    proposer: {
                        publicKey: P,
                        metadata: this.client.metadata
                    },
                    expiryTimestamp: S
                }, f && {
                    sessionProperties: f
                }),
                {
                    reject: B,
                    resolve: Z,
                    done: $
                } = jn(O, Zp);
            if (this.events.once(Nt("session_connect"), async ({
                    error: I,
                    session: C
                }) => {
                    if (I) B(I);
                    else if (C) {
                        C.self.publicKey = P;
                        const A = Ln(or({}, C), {
                            requiredNamespaces: K.requiredNamespaces,
                            optionalNamespaces: K.optionalNamespaces
                        });
                        await this.client.session.set(C.topic, A), await this.setExpiry(C.topic, C.expiry), y && await this.client.core.pairing.updateMetadata({
                            topic: y,
                            metadata: C.peer.metadata
                        }), Z(A)
                    }
                }), !y) {
                const {
                    message: I
                } = ae("NO_MATCHING_KEY", `connect() pairing topic: ${y}`);
                throw new Error(I)
            }
            const L = await this.sendRequest({
                topic: y,
                method: "wc_sessionPropose",
                params: K,
                throwOnFailedPublish: !0
            });
            return await this.setProposal(L, or({
                id: L
            }, K)), {
                uri: m,
                approval: $
            }
        }, this.pair = async t => (await this.isInitialized(), await this.client.core.pairing.pair(t)), this.approve = async t => {
            await this.isInitialized(), await this.isValidApprove(t);
            const {
                id: s,
                relayProtocol: o,
                namespaces: c,
                sessionProperties: d
            } = t, f = this.client.proposal.get(s);
            let {
                pairingTopic: p,
                proposer: y,
                requiredNamespaces: m,
                optionalNamespaces: b
            } = f;
            p = p || "";
            const P = await this.client.core.crypto.generateKeyPair(),
                O = y.publicKey,
                S = await this.client.core.crypto.generateSharedKey(P, O);
            p && s && (await this.client.core.pairing.updateMetadata({
                topic: p,
                metadata: y.metadata
            }), await this.sendResult({
                id: s,
                topic: p,
                result: {
                    relay: {
                        protocol: o ? ? "irn"
                    },
                    responderPublicKey: P
                }
            }), await this.client.proposal.delete(s, mt("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                topic: p
            }));
            const K = or({
                relay: {
                    protocol: o ? ? "irn"
                },
                namespaces: c,
                pairingTopic: p,
                controller: {
                    publicKey: P,
                    metadata: this.client.metadata
                },
                expiry: Pr(Wo)
            }, d && {
                sessionProperties: d
            });
            await this.client.core.relayer.subscribe(S);
            const B = Ln(or({}, K), {
                topic: S,
                requiredNamespaces: m,
                optionalNamespaces: b,
                pairingTopic: p,
                acknowledged: !1,
                self: K.controller,
                peer: {
                    publicKey: y.publicKey,
                    metadata: y.metadata
                },
                controller: P
            });
            await this.client.session.set(S, B);
            try {
                await this.sendRequest({
                    topic: S,
                    method: "wc_sessionSettle",
                    params: K,
                    throwOnFailedPublish: !0
                })
            } catch (Z) {
                throw this.client.logger.error(Z), this.client.session.delete(S, mt("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(S), Z
            }
            return await this.setExpiry(S, Pr(Wo)), {
                topic: S,
                acknowledged: () => new Promise(Z => setTimeout(() => Z(this.client.session.get(S)), 500))
            }
        }, this.reject = async t => {
            await this.isInitialized(), await this.isValidReject(t);
            const {
                id: s,
                reason: o
            } = t, {
                pairingTopic: c
            } = this.client.proposal.get(s);
            c && (await this.sendError(s, c, o), await this.client.proposal.delete(s, mt("USER_DISCONNECTED")))
        }, this.update = async t => {
            await this.isInitialized(), await this.isValidUpdate(t);
            const {
                topic: s,
                namespaces: o
            } = t, c = await this.sendRequest({
                topic: s,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: o
                }
            }), {
                done: d,
                resolve: f,
                reject: p
            } = jn();
            return this.events.once(Nt("session_update", c), ({
                error: y
            }) => {
                y ? p(y) : f()
            }), await this.client.session.update(s, {
                namespaces: o
            }), {
                acknowledged: d
            }
        }, this.extend = async t => {
            await this.isInitialized(), await this.isValidExtend(t);
            const {
                topic: s
            } = t, o = await this.sendRequest({
                topic: s,
                method: "wc_sessionExtend",
                params: {}
            }), {
                done: c,
                resolve: d,
                reject: f
            } = jn();
            return this.events.once(Nt("session_extend", o), ({
                error: p
            }) => {
                p ? f(p) : d()
            }), await this.setExpiry(s, Pr(Wo)), {
                acknowledged: c
            }
        }, this.request = async t => {
            await this.isInitialized(), await this.isValidRequest(t);
            const {
                chainId: s,
                request: o,
                topic: c,
                expiry: d = _i.wc_sessionRequest.req.ttl
            } = t, f = Xu(), {
                done: p,
                resolve: y,
                reject: m
            } = jn(d, "Request expired. Please try again.");
            return this.events.once(Nt("session_request", f), ({
                error: b,
                result: P
            }) => {
                b ? m(b) : y(P)
            }), await Promise.all([new Promise(async b => {
                await this.sendRequest({
                    clientRpcId: f,
                    topic: c,
                    method: "wc_sessionRequest",
                    params: {
                        request: Ln(or({}, o), {
                            expiryTimestamp: Pr(d)
                        }),
                        chainId: s
                    },
                    expiry: d,
                    throwOnFailedPublish: !0
                }).catch(P => m(P)), this.client.events.emit("session_request_sent", {
                    topic: c,
                    request: o,
                    chainId: s,
                    id: f
                }), b()
            }), new Promise(async b => {
                const P = await QE(this.client.core.storage, Id);
                JE({
                    id: f,
                    topic: c,
                    wcDeepLink: P
                }), b()
            }), p()]).then(b => b[2])
        }, this.respond = async t => {
            await this.isInitialized(), await this.isValidRespond(t);
            const {
                topic: s,
                response: o
            } = t, {
                id: c
            } = o;
            Di(o) ? await this.sendResult({
                id: c,
                topic: s,
                result: o.result,
                throwOnFailedPublish: !0
            }) : Gr(o) && await this.sendError(c, s, o.error), this.cleanupAfterResponse(t)
        }, this.ping = async t => {
            await this.isInitialized(), await this.isValidPing(t);
            const {
                topic: s
            } = t;
            if (this.client.session.keys.includes(s)) {
                const o = await this.sendRequest({
                        topic: s,
                        method: "wc_sessionPing",
                        params: {}
                    }),
                    {
                        done: c,
                        resolve: d,
                        reject: f
                    } = jn();
                this.events.once(Nt("session_ping", o), ({
                    error: p
                }) => {
                    p ? f(p) : d()
                }), await c()
            } else this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({
                topic: s
            })
        }, this.emit = async t => {
            await this.isInitialized(), await this.isValidEmit(t);
            const {
                topic: s,
                event: o,
                chainId: c
            } = t;
            await this.sendRequest({
                topic: s,
                method: "wc_sessionEvent",
                params: {
                    event: o,
                    chainId: c
                }
            })
        }, this.disconnect = async t => {
            await this.isInitialized(), await this.isValidDisconnect(t);
            const {
                topic: s
            } = t;
            if (this.client.session.keys.includes(s)) await this.sendRequest({
                topic: s,
                method: "wc_sessionDelete",
                params: mt("USER_DISCONNECTED"),
                throwOnFailedPublish: !0
            }), await this.deleteSession({
                topic: s,
                emitEvent: !1
            });
            else if (this.client.core.pairing.pairings.keys.includes(s)) await this.client.core.pairing.disconnect({
                topic: s
            });
            else {
                const {
                    message: o
                } = ae("MISMATCHED_TOPIC", `Session or pairing topic not found: ${s}`);
                throw new Error(o)
            }
        }, this.find = t => (this.isInitialized(), this.client.session.getAll().filter(s => gD(s, t))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.cleanupDuplicatePairings = async t => {
            if (t.pairingTopic) try {
                const s = this.client.core.pairing.pairings.get(t.pairingTopic),
                    o = this.client.core.pairing.pairings.getAll().filter(c => {
                        var d, f;
                        return ((d = c.peerMetadata) == null ? void 0 : d.url) && ((f = c.peerMetadata) == null ? void 0 : f.url) === t.peer.metadata.url && c.topic && c.topic !== s.topic
                    });
                if (o.length === 0) return;
                this.client.logger.info(`Cleaning up ${o.length} duplicate pairing(s)`), await Promise.all(o.map(c => this.client.core.pairing.disconnect({
                    topic: c.topic
                }))), this.client.logger.info("Duplicate pairings clean up finished")
            } catch (s) {
                this.client.logger.error(s)
            }
        }, this.deleteSession = async t => {
            const {
                topic: s,
                expirerHasDeleted: o = !1,
                emitEvent: c = !0,
                id: d = 0
            } = t, {
                self: f
            } = this.client.session.get(s);
            await this.client.core.relayer.unsubscribe(s), await this.client.session.delete(s, mt("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(f.publicKey) && await this.client.core.crypto.deleteKeyPair(f.publicKey), this.client.core.crypto.keychain.has(s) && await this.client.core.crypto.deleteSymKey(s), o || this.client.core.expirer.del(s), this.client.core.storage.removeItem(Id).catch(p => this.client.logger.warn(p)), this.getPendingSessionRequests().forEach(p => {
                p.topic === s && this.deletePendingSessionRequest(p.id, mt("USER_DISCONNECTED"))
            }), c && this.client.events.emit("session_delete", {
                id: d,
                topic: s
            })
        }, this.deleteProposal = async (t, s) => {
            await Promise.all([this.client.proposal.delete(t, mt("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(t)])
        }, this.deletePendingSessionRequest = async (t, s, o = !1) => {
            await Promise.all([this.client.pendingRequest.delete(t, s), o ? Promise.resolve() : this.client.core.expirer.del(t)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(c => c.id !== t), o && (this.sessionRequestQueue.state = Ei.idle, this.client.events.emit("session_request_expire", {
                id: t
            }))
        }, this.setExpiry = async (t, s) => {
            this.client.session.keys.includes(t) && await this.client.session.update(t, {
                expiry: s
            }), this.client.core.expirer.set(t, s)
        }, this.setProposal = async (t, s) => {
            await this.client.proposal.set(t, s), this.client.core.expirer.set(t, Pr(_i.wc_sessionPropose.req.ttl))
        }, this.setPendingSessionRequest = async t => {
            const {
                id: s,
                topic: o,
                params: c,
                verifyContext: d
            } = t, f = c.request.expiryTimestamp || Pr(_i.wc_sessionRequest.req.ttl);
            await this.client.pendingRequest.set(s, {
                id: s,
                topic: o,
                params: c,
                verifyContext: d
            }), f && this.client.core.expirer.set(s, f)
        }, this.sendRequest = async t => {
            const {
                topic: s,
                method: o,
                params: c,
                expiry: d,
                relayRpcId: f,
                clientRpcId: p,
                throwOnFailedPublish: y
            } = t, m = zn(o, c, p);
            if (kn() && TI.includes(o)) {
                const O = Fn(JSON.stringify(m));
                this.client.core.verify.register({
                    attestationId: O
                })
            }
            const b = await this.client.core.crypto.encode(s, m),
                P = _i[o].req;
            return d && (P.ttl = d), f && (P.id = f), this.client.core.history.set(s, m), y ? (P.internal = Ln(or({}, P.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(s, b, P)) : this.client.core.relayer.publish(s, b, P).catch(O => this.client.logger.error(O)), m.id
        }, this.sendResult = async t => {
            const {
                id: s,
                topic: o,
                result: c,
                throwOnFailedPublish: d
            } = t, f = ya(s, c), p = await this.client.core.crypto.encode(o, f), y = await this.client.core.history.get(o, s), m = _i[y.request.method].res;
            d ? (m.internal = Ln(or({}, m.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(o, p, m)) : this.client.core.relayer.publish(o, p, m).catch(b => this.client.logger.error(b)), await this.client.core.history.resolve(f)
        }, this.sendError = async (t, s, o) => {
            const c = va(t, o),
                d = await this.client.core.crypto.encode(s, c),
                f = await this.client.core.history.get(s, t),
                p = _i[f.request.method].res;
            this.client.core.relayer.publish(s, d, p), await this.client.core.history.resolve(c)
        }, this.cleanup = async () => {
            const t = [],
                s = [];
            this.client.session.getAll().forEach(o => {
                let c = !1;
                ji(o.expiry) && (c = !0), this.client.core.crypto.keychain.has(o.topic) || (c = !0), c && t.push(o.topic)
            }), this.client.proposal.getAll().forEach(o => {
                ji(o.expiryTimestamp) && s.push(o.id)
            }), await Promise.all([...t.map(o => this.deleteSession({
                topic: o
            })), ...s.map(o => this.deleteProposal(o))])
        }, this.onRelayEventRequest = async t => {
            this.requestQueue.queue.push(t), await this.processRequestsQueue()
        }, this.processRequestsQueue = async () => {
            if (this.requestQueue.state === Ei.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                this.requestQueue.state = Ei.active;
                const t = this.requestQueue.queue.shift();
                if (t) try {
                    this.processRequest(t), await new Promise(s => setTimeout(s, 300))
                } catch (s) {
                    this.client.logger.warn(s)
                }
            }
            this.requestQueue.state = Ei.idle
        }, this.processRequest = t => {
            const {
                topic: s,
                payload: o
            } = t, c = o.method;
            switch (c) {
                case "wc_sessionPropose":
                    return this.onSessionProposeRequest(s, o);
                case "wc_sessionSettle":
                    return this.onSessionSettleRequest(s, o);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateRequest(s, o);
                case "wc_sessionExtend":
                    return this.onSessionExtendRequest(s, o);
                case "wc_sessionPing":
                    return this.onSessionPingRequest(s, o);
                case "wc_sessionDelete":
                    return this.onSessionDeleteRequest(s, o);
                case "wc_sessionRequest":
                    return this.onSessionRequest(s, o);
                case "wc_sessionEvent":
                    return this.onSessionEventRequest(s, o);
                default:
                    return this.client.logger.info(`Unsupported request method ${c}`)
            }
        }, this.onRelayEventResponse = async t => {
            const {
                topic: s,
                payload: o
            } = t, c = (await this.client.core.history.get(s, o.id)).request.method;
            switch (c) {
                case "wc_sessionPropose":
                    return this.onSessionProposeResponse(s, o);
                case "wc_sessionSettle":
                    return this.onSessionSettleResponse(s, o);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(s, o);
                case "wc_sessionExtend":
                    return this.onSessionExtendResponse(s, o);
                case "wc_sessionPing":
                    return this.onSessionPingResponse(s, o);
                case "wc_sessionRequest":
                    return this.onSessionRequestResponse(s, o);
                default:
                    return this.client.logger.info(`Unsupported response method ${c}`)
            }
        }, this.onRelayEventUnknownPayload = t => {
            const {
                topic: s
            } = t, {
                message: o
            } = ae("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(o)
        }, this.onSessionProposeRequest = async (t, s) => {
            const {
                params: o,
                id: c
            } = s;
            try {
                this.isValidConnect(or({}, s.params));
                const d = o.expiryTimestamp || Pr(_i.wc_sessionPropose.req.ttl),
                    f = or({
                        id: c,
                        pairingTopic: t,
                        expiryTimestamp: d
                    }, o);
                await this.setProposal(c, f);
                const p = Fn(JSON.stringify(s)),
                    y = await this.getVerifyContext(p, f.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: c,
                    params: f,
                    verifyContext: y
                })
            } catch (d) {
                await this.sendError(c, t, d), this.client.logger.error(d)
            }
        }, this.onSessionProposeResponse = async (t, s) => {
            const {
                id: o
            } = s;
            if (Di(s)) {
                const {
                    result: c
                } = s;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: c
                });
                const d = this.client.proposal.get(o);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: d
                });
                const f = d.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: f
                });
                const p = c.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: p
                });
                const y = await this.client.core.crypto.generateSharedKey(f, p);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: y
                });
                const m = await this.client.core.relayer.subscribe(y);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: m
                }), await this.client.core.pairing.activate({
                    topic: t
                })
            } else Gr(s) && (await this.client.proposal.delete(o, mt("USER_DISCONNECTED")), this.events.emit(Nt("session_connect"), {
                error: s.error
            }))
        }, this.onSessionSettleRequest = async (t, s) => {
            const {
                id: o,
                params: c
            } = s;
            try {
                this.isValidSessionSettleRequest(c);
                const {
                    relay: d,
                    controller: f,
                    expiry: p,
                    namespaces: y,
                    sessionProperties: m,
                    pairingTopic: b
                } = s.params, P = or({
                    topic: t,
                    relay: d,
                    expiry: p,
                    namespaces: y,
                    acknowledged: !0,
                    pairingTopic: b,
                    requiredNamespaces: {},
                    optionalNamespaces: {},
                    controller: f.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: f.publicKey,
                        metadata: f.metadata
                    }
                }, m && {
                    sessionProperties: m
                });
                await this.sendResult({
                    id: s.id,
                    topic: t,
                    result: !0
                }), this.events.emit(Nt("session_connect"), {
                    session: P
                }), this.cleanupDuplicatePairings(P)
            } catch (d) {
                await this.sendError(o, t, d), this.client.logger.error(d)
            }
        }, this.onSessionSettleResponse = async (t, s) => {
            const {
                id: o
            } = s;
            Di(s) ? (await this.client.session.update(t, {
                acknowledged: !0
            }), this.events.emit(Nt("session_approve", o), {})) : Gr(s) && (await this.client.session.delete(t, mt("USER_DISCONNECTED")), this.events.emit(Nt("session_approve", o), {
                error: s.error
            }))
        }, this.onSessionUpdateRequest = async (t, s) => {
            const {
                params: o,
                id: c
            } = s;
            try {
                const d = `${t}_session_update`,
                    f = Bo.get(d);
                if (f && this.isRequestOutOfSync(f, c)) {
                    this.client.logger.info(`Discarding out of sync request - ${c}`);
                    return
                }
                this.isValidUpdate(or({
                    topic: t
                }, o)), await this.client.session.update(t, {
                    namespaces: o.namespaces
                }), await this.sendResult({
                    id: c,
                    topic: t,
                    result: !0
                }), this.client.events.emit("session_update", {
                    id: c,
                    topic: t,
                    params: o
                }), Bo.set(d, c)
            } catch (d) {
                await this.sendError(c, t, d), this.client.logger.error(d)
            }
        }, this.isRequestOutOfSync = (t, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(t.toString().slice(0, -3)), this.onSessionUpdateResponse = (t, s) => {
            const {
                id: o
            } = s;
            Di(s) ? this.events.emit(Nt("session_update", o), {}) : Gr(s) && this.events.emit(Nt("session_update", o), {
                error: s.error
            })
        }, this.onSessionExtendRequest = async (t, s) => {
            const {
                id: o
            } = s;
            try {
                this.isValidExtend({
                    topic: t
                }), await this.setExpiry(t, Pr(Wo)), await this.sendResult({
                    id: o,
                    topic: t,
                    result: !0
                }), this.client.events.emit("session_extend", {
                    id: o,
                    topic: t
                })
            } catch (c) {
                await this.sendError(o, t, c), this.client.logger.error(c)
            }
        }, this.onSessionExtendResponse = (t, s) => {
            const {
                id: o
            } = s;
            Di(s) ? this.events.emit(Nt("session_extend", o), {}) : Gr(s) && this.events.emit(Nt("session_extend", o), {
                error: s.error
            })
        }, this.onSessionPingRequest = async (t, s) => {
            const {
                id: o
            } = s;
            try {
                this.isValidPing({
                    topic: t
                }), await this.sendResult({
                    id: o,
                    topic: t,
                    result: !0
                }), this.client.events.emit("session_ping", {
                    id: o,
                    topic: t
                })
            } catch (c) {
                await this.sendError(o, t, c), this.client.logger.error(c)
            }
        }, this.onSessionPingResponse = (t, s) => {
            const {
                id: o
            } = s;
            setTimeout(() => {
                Di(s) ? this.events.emit(Nt("session_ping", o), {}) : Gr(s) && this.events.emit(Nt("session_ping", o), {
                    error: s.error
                })
            }, 500)
        }, this.onSessionDeleteRequest = async (t, s) => {
            const {
                id: o
            } = s;
            try {
                this.isValidDisconnect({
                    topic: t,
                    reason: s.params
                }), await Promise.all([new Promise(c => {
                    this.client.core.relayer.once(Zt.publish, async () => {
                        c(await this.deleteSession({
                            topic: t,
                            id: o
                        }))
                    })
                }), this.sendResult({
                    id: o,
                    topic: t,
                    result: !0
                }), this.cleanupPendingSentRequestsForTopic({
                    topic: t,
                    error: mt("USER_DISCONNECTED")
                })])
            } catch (c) {
                this.client.logger.error(c)
            }
        }, this.onSessionRequest = async (t, s) => {
            const {
                id: o,
                params: c
            } = s;
            try {
                this.isValidRequest(or({
                    topic: t
                }, c));
                const d = Fn(JSON.stringify(zn("wc_sessionRequest", c, o))),
                    f = this.client.session.get(t),
                    p = await this.getVerifyContext(d, f.peer.metadata),
                    y = {
                        id: o,
                        topic: t,
                        params: c,
                        verifyContext: p
                    };
                await this.setPendingSessionRequest(y), this.addSessionRequestToSessionRequestQueue(y), this.processSessionRequestQueue()
            } catch (d) {
                await this.sendError(o, t, d), this.client.logger.error(d)
            }
        }, this.onSessionRequestResponse = (t, s) => {
            const {
                id: o
            } = s;
            Di(s) ? this.events.emit(Nt("session_request", o), {
                result: s.result
            }) : Gr(s) && this.events.emit(Nt("session_request", o), {
                error: s.error
            })
        }, this.onSessionEventRequest = async (t, s) => {
            const {
                id: o,
                params: c
            } = s;
            try {
                const d = `${t}_session_event_${c.event.name}`,
                    f = Bo.get(d);
                if (f && this.isRequestOutOfSync(f, o)) {
                    this.client.logger.info(`Discarding out of sync request - ${o}`);
                    return
                }
                this.isValidEmit(or({
                    topic: t
                }, c)), this.client.events.emit("session_event", {
                    id: o,
                    topic: t,
                    params: c
                }), Bo.set(d, o)
            } catch (d) {
                await this.sendError(o, t, d), this.client.logger.error(d)
            }
        }, this.addSessionRequestToSessionRequestQueue = t => {
            this.sessionRequestQueue.queue.push(t)
        }, this.cleanupAfterResponse = t => {
            this.deletePendingSessionRequest(t.response.id, {
                message: "fulfilled",
                code: 0
            }), setTimeout(() => {
                this.sessionRequestQueue.state = Ei.idle, this.processSessionRequestQueue()
            }, ve.toMiliseconds(this.requestQueueDelay))
        }, this.cleanupPendingSentRequestsForTopic = ({
            topic: t,
            error: s
        }) => {
            const o = this.client.core.history.pending;
            o.length > 0 && o.filter(c => c.topic === t && c.request.method === "wc_sessionRequest").forEach(c => {
                this.events.emit(Nt("session_request", c.request.id), {
                    error: s
                })
            })
        }, this.processSessionRequestQueue = () => {
            if (this.sessionRequestQueue.state === Ei.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            const t = this.sessionRequestQueue.queue[0];
            if (!t) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = Ei.active, this.client.events.emit("session_request", t)
            } catch (s) {
                this.client.logger.error(s)
            }
        }, this.onPairingCreated = t => {
            if (t.active) return;
            const s = this.client.proposal.getAll().find(o => o.pairingTopic === t.topic);
            s && this.onSessionProposeRequest(t.topic, zn("wc_sessionPropose", {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer,
                sessionProperties: s.sessionProperties
            }, s.id))
        }, this.isValidConnect = async t => {
            if (!vr(t)) {
                const {
                    message: p
                } = ae("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
                throw new Error(p)
            }
            const {
                pairingTopic: s,
                requiredNamespaces: o,
                optionalNamespaces: c,
                sessionProperties: d,
                relays: f
            } = t;
            if (ar(s) || await this.isValidPairingTopic(s), !PD(f, !0)) {
                const {
                    message: p
                } = ae("MISSING_OR_INVALID", `connect() relays: ${f}`);
                throw new Error(p)
            }!ar(o) && Ps(o) !== 0 && this.validateNamespaces(o, "requiredNamespaces"), !ar(c) && Ps(c) !== 0 && this.validateNamespaces(c, "optionalNamespaces"), ar(d) || this.validateSessionProps(d, "sessionProperties")
        }, this.validateNamespaces = (t, s) => {
            const o = xD(t, "connect()", s);
            if (o) throw new Error(o.message)
        }, this.isValidApprove = async t => {
            if (!vr(t)) throw new Error(ae("MISSING_OR_INVALID", `approve() params: ${t}`).message);
            const {
                id: s,
                namespaces: o,
                relayProtocol: c,
                sessionProperties: d
            } = t;
            await this.isValidProposalId(s);
            const f = this.client.proposal.get(s),
                p = Qc(o, "approve()");
            if (p) throw new Error(p.message);
            const y = Mf(f.requiredNamespaces, o, "approve()");
            if (y) throw new Error(y.message);
            if (!Vt(c, !0)) {
                const {
                    message: m
                } = ae("MISSING_OR_INVALID", `approve() relayProtocol: ${c}`);
                throw new Error(m)
            }
            ar(d) || this.validateSessionProps(d, "sessionProperties")
        }, this.isValidReject = async t => {
            if (!vr(t)) {
                const {
                    message: c
                } = ae("MISSING_OR_INVALID", `reject() params: ${t}`);
                throw new Error(c)
            }
            const {
                id: s,
                reason: o
            } = t;
            if (await this.isValidProposalId(s), !CD(o)) {
                const {
                    message: c
                } = ae("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(o)}`);
                throw new Error(c)
            }
        }, this.isValidSessionSettleRequest = t => {
            if (!vr(t)) {
                const {
                    message: y
                } = ae("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
                throw new Error(y)
            }
            const {
                relay: s,
                controller: o,
                namespaces: c,
                expiry: d
            } = t;
            if (!mp(s)) {
                const {
                    message: y
                } = ae("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(y)
            }
            const f = bD(o, "onSessionSettleRequest()");
            if (f) throw new Error(f.message);
            const p = Qc(c, "onSessionSettleRequest()");
            if (p) throw new Error(p.message);
            if (ji(d)) {
                const {
                    message: y
                } = ae("EXPIRED", "onSessionSettleRequest()");
                throw new Error(y)
            }
        }, this.isValidUpdate = async t => {
            if (!vr(t)) {
                const {
                    message: p
                } = ae("MISSING_OR_INVALID", `update() params: ${t}`);
                throw new Error(p)
            }
            const {
                topic: s,
                namespaces: o
            } = t;
            await this.isValidSessionTopic(s);
            const c = this.client.session.get(s),
                d = Qc(o, "update()");
            if (d) throw new Error(d.message);
            const f = Mf(c.requiredNamespaces, o, "update()");
            if (f) throw new Error(f.message)
        }, this.isValidExtend = async t => {
            if (!vr(t)) {
                const {
                    message: o
                } = ae("MISSING_OR_INVALID", `extend() params: ${t}`);
                throw new Error(o)
            }
            const {
                topic: s
            } = t;
            await this.isValidSessionTopic(s)
        }, this.isValidRequest = async t => {
            if (!vr(t)) {
                const {
                    message: p
                } = ae("MISSING_OR_INVALID", `request() params: ${t}`);
                throw new Error(p)
            }
            const {
                topic: s,
                request: o,
                chainId: c,
                expiry: d
            } = t;
            await this.isValidSessionTopic(s);
            const {
                namespaces: f
            } = this.client.session.get(s);
            if (!Uf(f, c)) {
                const {
                    message: p
                } = ae("MISSING_OR_INVALID", `request() chainId: ${c}`);
                throw new Error(p)
            }
            if (!AD(o)) {
                const {
                    message: p
                } = ae("MISSING_OR_INVALID", `request() ${JSON.stringify(o)}`);
                throw new Error(p)
            }
            if (!ND(f, c, o.method)) {
                const {
                    message: p
                } = ae("MISSING_OR_INVALID", `request() method: ${o.method}`);
                throw new Error(p)
            }
            if (d && !LD(d, cu)) {
                const {
                    message: p
                } = ae("MISSING_OR_INVALID", `request() expiry: ${d}. Expiry must be a number (in seconds) between ${cu.min} and ${cu.max}`);
                throw new Error(p)
            }
        }, this.isValidRespond = async t => {
            var s;
            if (!vr(t)) {
                const {
                    message: d
                } = ae("MISSING_OR_INVALID", `respond() params: ${t}`);
                throw new Error(d)
            }
            const {
                topic: o,
                response: c
            } = t;
            try {
                await this.isValidSessionTopic(o)
            } catch (d) {
                throw (s = t == null ? void 0 : t.response) != null && s.id && this.cleanupAfterResponse(t), d
            }
            if (!TD(c)) {
                const {
                    message: d
                } = ae("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(c)}`);
                throw new Error(d)
            }
        }, this.isValidPing = async t => {
            if (!vr(t)) {
                const {
                    message: o
                } = ae("MISSING_OR_INVALID", `ping() params: ${t}`);
                throw new Error(o)
            }
            const {
                topic: s
            } = t;
            await this.isValidSessionOrPairingTopic(s)
        }, this.isValidEmit = async t => {
            if (!vr(t)) {
                const {
                    message: f
                } = ae("MISSING_OR_INVALID", `emit() params: ${t}`);
                throw new Error(f)
            }
            const {
                topic: s,
                event: o,
                chainId: c
            } = t;
            await this.isValidSessionTopic(s);
            const {
                namespaces: d
            } = this.client.session.get(s);
            if (!Uf(d, c)) {
                const {
                    message: f
                } = ae("MISSING_OR_INVALID", `emit() chainId: ${c}`);
                throw new Error(f)
            }
            if (!RD(o)) {
                const {
                    message: f
                } = ae("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
                throw new Error(f)
            }
            if (!$D(d, c, o.name)) {
                const {
                    message: f
                } = ae("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(o)}`);
                throw new Error(f)
            }
        }, this.isValidDisconnect = async t => {
            if (!vr(t)) {
                const {
                    message: o
                } = ae("MISSING_OR_INVALID", `disconnect() params: ${t}`);
                throw new Error(o)
            }
            const {
                topic: s
            } = t;
            await this.isValidSessionOrPairingTopic(s)
        }, this.getVerifyContext = async (t, s) => {
            const o = {
                verified: {
                    verifyUrl: s.verifyUrl || qn,
                    validation: "UNKNOWN",
                    origin: s.url || ""
                }
            };
            try {
                const c = await this.client.core.verify.resolve({
                    attestationId: t,
                    verifyUrl: s.verifyUrl
                });
                c && (o.verified.origin = c.origin, o.verified.isScam = c.isScam, o.verified.validation = c.origin === new URL(s.url).origin ? "VALID" : "INVALID")
            } catch (c) {
                this.client.logger.info(c)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(o)}`), o
        }, this.validateSessionProps = (t, s) => {
            Object.values(t).forEach(o => {
                if (!Vt(o, !1)) {
                    const {
                        message: c
                    } = ae("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(o)}`);
                    throw new Error(c)
                }
            })
        }
    }
    async isInitialized() {
        if (!this.initialized) {
            const {
                message: e
            } = ae("NOT_INITIALIZED", this.name);
            throw new Error(e)
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(Zt.message, async e => {
            const {
                topic: t,
                message: s
            } = e;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s))) return;
            const o = await this.client.core.crypto.decode(t, s);
            try {
                Zu(o) ? (this.client.core.history.set(t, o), this.onRelayEventRequest({
                    topic: t,
                    payload: o
                })) : ma(o) ? (await this.client.core.history.resolve(o), await this.onRelayEventResponse({
                    topic: t,
                    payload: o
                }), this.client.core.history.delete(t, o.id)) : this.onRelayEventUnknownPayload({
                    topic: t,
                    payload: o
                })
            } catch (c) {
                this.client.logger.error(c)
            }
        })
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(qr.expired, async e => {
            const {
                topic: t,
                id: s
            } = yp(e.target);
            if (s && this.client.pendingRequest.keys.includes(s)) return await this.deletePendingSessionRequest(s, ae("EXPIRED"), !0);
            t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                topic: t,
                expirerHasDeleted: !0
            }), this.client.events.emit("session_expire", {
                topic: t
            })) : s && (await this.deleteProposal(s, !0), this.client.events.emit("proposal_expire", {
                id: s
            }))
        })
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(_s.create, e => this.onPairingCreated(e))
    }
    isValidPairingTopic(e) {
        if (!Vt(e, !1)) {
            const {
                message: t
            } = ae("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const {
                message: t
            } = ae("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (ji(this.client.core.pairing.pairings.get(e).expiry)) {
            const {
                message: t
            } = ae("EXPIRED", `pairing topic: ${e}`);
            throw new Error(t)
        }
    }
    async isValidSessionTopic(e) {
        if (!Vt(e, !1)) {
            const {
                message: t
            } = ae("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
            throw new Error(t)
        }
        if (!this.client.session.keys.includes(e)) {
            const {
                message: t
            } = ae("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (ji(this.client.session.get(e).expiry)) {
            await this.deleteSession({
                topic: e
            });
            const {
                message: t
            } = ae("EXPIRED", `session topic: ${e}`);
            throw new Error(t)
        }
        if (!this.client.core.crypto.keychain.has(e)) {
            const {
                message: t
            } = ae("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
            throw await this.deleteSession({
                topic: e
            }), new Error(t)
        }
    }
    async isValidSessionOrPairingTopic(e) {
        if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
        else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
        else if (Vt(e, !1)) {
            const {
                message: t
            } = ae("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
            throw new Error(t)
        } else {
            const {
                message: t
            } = ae("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
            throw new Error(t)
        }
    }
    async isValidProposalId(e) {
        if (!OD(e)) {
            const {
                message: t
            } = ae("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
            throw new Error(t)
        }
        if (!this.client.proposal.keys.includes(e)) {
            const {
                message: t
            } = ae("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
            throw new Error(t)
        }
        if (ji(this.client.proposal.get(e).expiryTimestamp)) {
            await this.deleteProposal(e);
            const {
                message: t
            } = ae("EXPIRED", `proposal id: ${e}`);
            throw new Error(t)
        }
    }
}
class jI extends ba {
    constructor(e, t) {
        super(e, t, PI, rh), this.core = e, this.logger = t
    }
}
let qI = class extends ba {
    constructor(e, t) {
        super(e, t, OI, rh), this.core = e, this.logger = t
    }
};
class FI extends ba {
    constructor(e, t) {
        super(e, t, AI, rh, s => s.id), this.core = e, this.logger = t
    }
}
let zI = class eg extends c6 {
    constructor(e) {
        super(e), this.protocol = Jp, this.version = Qp, this.name = au.name, this.events = new Fr.EventEmitter, this.on = (s, o) => this.events.on(s, o), this.once = (s, o) => this.events.once(s, o), this.off = (s, o) => this.events.off(s, o), this.removeListener = (s, o) => this.events.removeListener(s, o), this.removeAllListeners = s => this.events.removeAllListeners(s), this.connect = async s => {
            try {
                return await this.engine.connect(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.pair = async s => {
            try {
                return await this.engine.pair(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.approve = async s => {
            try {
                return await this.engine.approve(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.reject = async s => {
            try {
                return await this.engine.reject(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.update = async s => {
            try {
                return await this.engine.update(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.extend = async s => {
            try {
                return await this.engine.extend(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.request = async s => {
            try {
                return await this.engine.request(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.respond = async s => {
            try {
                return await this.engine.respond(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.ping = async s => {
            try {
                return await this.engine.ping(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.emit = async s => {
            try {
                return await this.engine.emit(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.disconnect = async s => {
            try {
                return await this.engine.disconnect(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.find = s => {
            try {
                return this.engine.find(s)
            } catch (o) {
                throw this.logger.error(o.message), o
            }
        }, this.getPendingSessionRequests = () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.name = (e == null ? void 0 : e.name) || au.name, this.metadata = (e == null ? void 0 : e.metadata) || BE();
        const t = typeof(e == null ? void 0 : e.logger) < "u" && typeof(e == null ? void 0 : e.logger) != "string" ? e.logger : pa(ga({
            level: (e == null ? void 0 : e.logger) || au.logger
        }));
        this.core = (e == null ? void 0 : e.core) || new xI(e), this.logger = br(t, this.name), this.session = new qI(this.core, this.logger), this.proposal = new jI(this.core, this.logger), this.pendingRequest = new FI(this.core, this.logger), this.engine = new LI(this)
    }
    static async init(e) {
        const t = new eg(e);
        return await t.initialize(), t
    }
    get context() {
        return wr(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }), this.logger.info("SignClient Initialization Success")
        } catch (e) {
            throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
        }
    }
};
var Ru = {
    exports: {}
};
(function(i, e) {
    var t = typeof self < "u" ? self : Yr,
        s = function() {
            function c() {
                this.fetch = !1, this.DOMException = t.DOMException
            }
            return c.prototype = t, new c
        }();
    (function(c) {
        (function(d) {
            var f = {
                searchParams: "URLSearchParams" in c,
                iterable: "Symbol" in c && "iterator" in Symbol,
                blob: "FileReader" in c && "Blob" in c && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in c,
                arrayBuffer: "ArrayBuffer" in c
            };

            function p(D) {
                return D && DataView.prototype.isPrototypeOf(D)
            }
            if (f.arrayBuffer) var y = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                m = ArrayBuffer.isView || function(D) {
                    return D && y.indexOf(Object.prototype.toString.call(D)) > -1
                };

            function b(D) {
                if (typeof D != "string" && (D = String(D)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(D)) throw new TypeError("Invalid character in header field name");
                return D.toLowerCase()
            }

            function P(D) {
                return typeof D != "string" && (D = String(D)), D
            }

            function O(D) {
                var R = {
                    next: function() {
                        var X = D.shift();
                        return {
                            done: X === void 0,
                            value: X
                        }
                    }
                };
                return f.iterable && (R[Symbol.iterator] = function() {
                    return R
                }), R
            }

            function S(D) {
                this.map = {}, D instanceof S ? D.forEach(function(R, X) {
                    this.append(X, R)
                }, this) : Array.isArray(D) ? D.forEach(function(R) {
                    this.append(R[0], R[1])
                }, this) : D && Object.getOwnPropertyNames(D).forEach(function(R) {
                    this.append(R, D[R])
                }, this)
            }
            S.prototype.append = function(D, R) {
                D = b(D), R = P(R);
                var X = this.map[D];
                this.map[D] = X ? X + ", " + R : R
            }, S.prototype.delete = function(D) {
                delete this.map[b(D)]
            }, S.prototype.get = function(D) {
                return D = b(D), this.has(D) ? this.map[D] : null
            }, S.prototype.has = function(D) {
                return this.map.hasOwnProperty(b(D))
            }, S.prototype.set = function(D, R) {
                this.map[b(D)] = P(R)
            }, S.prototype.forEach = function(D, R) {
                for (var X in this.map) this.map.hasOwnProperty(X) && D.call(R, this.map[X], X, this)
            }, S.prototype.keys = function() {
                var D = [];
                return this.forEach(function(R, X) {
                    D.push(X)
                }), O(D)
            }, S.prototype.values = function() {
                var D = [];
                return this.forEach(function(R) {
                    D.push(R)
                }), O(D)
            }, S.prototype.entries = function() {
                var D = [];
                return this.forEach(function(R, X) {
                    D.push([X, R])
                }), O(D)
            }, f.iterable && (S.prototype[Symbol.iterator] = S.prototype.entries);

            function K(D) {
                if (D.bodyUsed) return Promise.reject(new TypeError("Already read"));
                D.bodyUsed = !0
            }

            function B(D) {
                return new Promise(function(R, X) {
                    D.onload = function() {
                        R(D.result)
                    }, D.onerror = function() {
                        X(D.error)
                    }
                })
            }

            function Z(D) {
                var R = new FileReader,
                    X = B(R);
                return R.readAsArrayBuffer(D), X
            }

            function $(D) {
                var R = new FileReader,
                    X = B(R);
                return R.readAsText(D), X
            }

            function L(D) {
                for (var R = new Uint8Array(D), X = new Array(R.length), J = 0; J < R.length; J++) X[J] = String.fromCharCode(R[J]);
                return X.join("")
            }

            function I(D) {
                if (D.slice) return D.slice(0);
                var R = new Uint8Array(D.byteLength);
                return R.set(new Uint8Array(D)), R.buffer
            }

            function C() {
                return this.bodyUsed = !1, this._initBody = function(D) {
                    this._bodyInit = D, D ? typeof D == "string" ? this._bodyText = D : f.blob && Blob.prototype.isPrototypeOf(D) ? this._bodyBlob = D : f.formData && FormData.prototype.isPrototypeOf(D) ? this._bodyFormData = D : f.searchParams && URLSearchParams.prototype.isPrototypeOf(D) ? this._bodyText = D.toString() : f.arrayBuffer && f.blob && p(D) ? (this._bodyArrayBuffer = I(D.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(D) || m(D)) ? this._bodyArrayBuffer = I(D) : this._bodyText = D = Object.prototype.toString.call(D) : this._bodyText = "", this.headers.get("content-type") || (typeof D == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(D) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, f.blob && (this.blob = function() {
                    var D = K(this);
                    if (D) return D;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? K(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(Z)
                }), this.text = function() {
                    var D = K(this);
                    if (D) return D;
                    if (this._bodyBlob) return $(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(L(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, f.formData && (this.formData = function() {
                    return this.text().then(ee)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var A = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function h(D) {
                var R = D.toUpperCase();
                return A.indexOf(R) > -1 ? R : D
            }

            function _(D, R) {
                R = R || {};
                var X = R.body;
                if (D instanceof _) {
                    if (D.bodyUsed) throw new TypeError("Already read");
                    this.url = D.url, this.credentials = D.credentials, R.headers || (this.headers = new S(D.headers)), this.method = D.method, this.mode = D.mode, this.signal = D.signal, !X && D._bodyInit != null && (X = D._bodyInit, D.bodyUsed = !0)
                } else this.url = String(D);
                if (this.credentials = R.credentials || this.credentials || "same-origin", (R.headers || !this.headers) && (this.headers = new S(R.headers)), this.method = h(R.method || this.method || "GET"), this.mode = R.mode || this.mode || null, this.signal = R.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && X) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(X)
            }
            _.prototype.clone = function() {
                return new _(this, {
                    body: this._bodyInit
                })
            };

            function ee(D) {
                var R = new FormData;
                return D.trim().split("&").forEach(function(X) {
                    if (X) {
                        var J = X.split("="),
                            k = J.shift().replace(/\+/g, " "),
                            V = J.join("=").replace(/\+/g, " ");
                        R.append(decodeURIComponent(k), decodeURIComponent(V))
                    }
                }), R
            }

            function ne(D) {
                var R = new S,
                    X = D.replace(/\r?\n[\t ]+/g, " ");
                return X.split(/\r?\n/).forEach(function(J) {
                    var k = J.split(":"),
                        V = k.shift().trim();
                    if (V) {
                        var te = k.join(":").trim();
                        R.append(V, te)
                    }
                }), R
            }
            C.call(_.prototype);

            function ue(D, R) {
                R || (R = {}), this.type = "default", this.status = R.status === void 0 ? 200 : R.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in R ? R.statusText : "OK", this.headers = new S(R.headers), this.url = R.url || "", this._initBody(D)
            }
            C.call(ue.prototype), ue.prototype.clone = function() {
                return new ue(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new S(this.headers),
                    url: this.url
                })
            }, ue.error = function() {
                var D = new ue(null, {
                    status: 0,
                    statusText: ""
                });
                return D.type = "error", D
            };
            var ge = [301, 302, 303, 307, 308];
            ue.redirect = function(D, R) {
                if (ge.indexOf(R) === -1) throw new RangeError("Invalid status code");
                return new ue(null, {
                    status: R,
                    headers: {
                        location: D
                    }
                })
            }, d.DOMException = c.DOMException;
            try {
                new d.DOMException
            } catch {
                d.DOMException = function(R, X) {
                    this.message = R, this.name = X;
                    var J = Error(R);
                    this.stack = J.stack
                }, d.DOMException.prototype = Object.create(Error.prototype), d.DOMException.prototype.constructor = d.DOMException
            }

            function ye(D, R) {
                return new Promise(function(X, J) {
                    var k = new _(D, R);
                    if (k.signal && k.signal.aborted) return J(new d.DOMException("Aborted", "AbortError"));
                    var V = new XMLHttpRequest;

                    function te() {
                        V.abort()
                    }
                    V.onload = function() {
                        var ie = {
                            status: V.status,
                            statusText: V.statusText,
                            headers: ne(V.getAllResponseHeaders() || "")
                        };
                        ie.url = "responseURL" in V ? V.responseURL : ie.headers.get("X-Request-URL");
                        var De = "response" in V ? V.response : V.responseText;
                        X(new ue(De, ie))
                    }, V.onerror = function() {
                        J(new TypeError("Network request failed"))
                    }, V.ontimeout = function() {
                        J(new TypeError("Network request failed"))
                    }, V.onabort = function() {
                        J(new d.DOMException("Aborted", "AbortError"))
                    }, V.open(k.method, k.url, !0), k.credentials === "include" ? V.withCredentials = !0 : k.credentials === "omit" && (V.withCredentials = !1), "responseType" in V && f.blob && (V.responseType = "blob"), k.headers.forEach(function(ie, De) {
                        V.setRequestHeader(De, ie)
                    }), k.signal && (k.signal.addEventListener("abort", te), V.onreadystatechange = function() {
                        V.readyState === 4 && k.signal.removeEventListener("abort", te)
                    }), V.send(typeof k._bodyInit > "u" ? null : k._bodyInit)
                })
            }
            return ye.polyfill = !0, c.fetch || (c.fetch = ye, c.Headers = S, c.Request = _, c.Response = ue), d.Headers = S, d.Request = _, d.Response = ue, d.fetch = ye, Object.defineProperty(d, "__esModule", {
                value: !0
            }), d
        })({})
    })(s), s.fetch.ponyfill = !0, delete s.fetch.polyfill;
    var o = s;
    e = o.fetch, e.default = o.fetch, e.fetch = o.fetch, e.Headers = o.Headers, e.Request = o.Request, e.Response = o.Response, i.exports = e
})(Ru, Ru.exports);
var HI = Ru.exports;
const Od = oa(HI),
    BI = {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    KI = "POST",
    Cd = {
        headers: BI,
        method: KI
    },
    Ad = 10;
class Hi {
    constructor(e, t = !1) {
        if (this.url = e, this.disableProviderPing = t, this.events = new Fr.EventEmitter, this.isAvailable = !1, this.registering = !1, !rd(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
        this.url = e, this.disableProviderPing = t
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    async open(e = this.url) {
        await this.register(e)
    }
    async close() {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose()
    }
    async send(e, t) {
        this.isAvailable || await this.register();
        try {
            const s = cn(e),
                c = await (await Od(this.url, Object.assign(Object.assign({}, Cd), {
                    body: s
                }))).json();
            this.onPayload({
                data: c
            })
        } catch (s) {
            this.onError(e.id, s)
        }
    }
    async register(e = this.url) {
        if (!rd(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
        if (this.registering) {
            const t = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((s, o) => {
                this.events.once("register_error", c => {
                    this.resetMaxListeners(), o(c)
                }), this.events.once("open", () => {
                    if (this.resetMaxListeners(), typeof this.isAvailable > "u") return o(new Error("HTTP connection is missing or invalid"));
                    s()
                })
            })
        }
        this.url = e, this.registering = !0;
        try {
            if (!this.disableProviderPing) {
                const t = cn({
                    id: 1,
                    jsonrpc: "2.0",
                    method: "test",
                    params: []
                });
                await Od(e, Object.assign(Object.assign({}, Cd), {
                    body: t
                }))
            }
            this.onOpen()
        } catch (t) {
            const s = this.parseError(t);
            throw this.events.emit("register_error", s), this.onClose(), s
        }
    }
    onOpen() {
        this.isAvailable = !0, this.registering = !1, this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1, this.registering = !1, this.events.emit("close")
    }
    onPayload(e) {
        if (typeof e.data > "u") return;
        const t = typeof e.data == "string" ? Us(e.data) : e.data;
        this.events.emit("payload", t)
    }
    onError(e, t) {
        const s = this.parseError(t),
            o = s.message || s.toString(),
            c = va(e, o);
        this.events.emit("payload", c)
    }
    parseError(e, t = this.url) {
        return Tp(e, t, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Ad && this.events.setMaxListeners(Ad)
    }
}
const Td = "error",
    kI = "wss://relay.walletconnect.com",
    VI = "wc",
    WI = "universal_provider",
    Rd = `${VI}@2:${WI}:`,
    GI = "https://rpc.walletconnect.com/v1/",
    xi = {
        DEFAULT_CHAIN_CHANGED: "default_chain_changed"
    };
var ws = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    Nu = {
        exports: {}
    };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(i, e) {
    (function() {
        var t, s = "4.17.21",
            o = 200,
            c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            d = "Expected a function",
            f = "Invalid `variable` option passed into `_.template`",
            p = "__lodash_hash_undefined__",
            y = 500,
            m = "__lodash_placeholder__",
            b = 1,
            P = 2,
            O = 4,
            S = 1,
            K = 2,
            B = 1,
            Z = 2,
            $ = 4,
            L = 8,
            I = 16,
            C = 32,
            A = 64,
            h = 128,
            _ = 256,
            ee = 512,
            ne = 30,
            ue = "...",
            ge = 800,
            ye = 16,
            D = 1,
            R = 2,
            X = 3,
            J = 1 / 0,
            k = 9007199254740991,
            V = 17976931348623157e292,
            te = NaN,
            ie = 4294967295,
            De = ie - 1,
            oe = ie >>> 1,
            Se = [
                ["ary", h],
                ["bind", B],
                ["bindKey", Z],
                ["curry", L],
                ["curryRight", I],
                ["flip", ee],
                ["partial", C],
                ["partialRight", A],
                ["rearg", _]
            ],
            le = "[object Arguments]",
            Ae = "[object Array]",
            z = "[object AsyncFunction]",
            F = "[object Boolean]",
            U = "[object Date]",
            l = "[object DOMException]",
            T = "[object Error]",
            se = "[object Function]",
            he = "[object GeneratorFunction]",
            Ee = "[object Map]",
            He = "[object Number]",
            ke = "[object Null]",
            Le = "[object Object]",
            dt = "[object Promise]",
            pt = "[object Proxy]",
            qe = "[object RegExp]",
            Ie = "[object Set]",
            Ne = "[object String]",
            $e = "[object Symbol]",
            Fe = "[object Undefined]",
            Pe = "[object WeakMap]",
            Ue = "[object WeakSet]",
            _e = "[object ArrayBuffer]",
            Oe = "[object DataView]",
            Be = "[object Float32Array]",
            xe = "[object Float64Array]",
            Ve = "[object Int8Array]",
            Ge = "[object Int16Array]",
            Ze = "[object Int32Array]",
            et = "[object Uint8Array]",
            Je = "[object Uint8ClampedArray]",
            er = "[object Uint16Array]",
            hr = "[object Uint32Array]",
            Jr = /\b__p \+= '';/g,
            tr = /\b(__p \+=) '' \+/g,
            oi = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            Pi = /&(?:amp|lt|gt|quot|#39);/g,
            Bi = /[&<>"']/g,
            Et = RegExp(Pi.source),
            gt = RegExp(Bi.source),
            Dt = /<%-([\s\S]+?)%>/g,
            St = /<%([\s\S]+?)%>/g,
            bt = /<%=([\s\S]+?)%>/g,
            yt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            $t = /^\w*$/,
            Ut = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            It = /[\\^$.*+?()[\]{}|]/g,
            Mt = RegExp(It.source),
            xt = /^\s+/,
            Ct = /\s/,
            Pt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ut = /\{\n\/\* \[wrapped with (.+)\] \*/,
            Lt = /,? & /,
            jt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            _a = /[()=,{}\[\]\/\s]/,
            Ea = /\\(\\)?/g,
            Da = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            Ar = /\w*$/,
            Sa = /^[-+]0x[0-9a-f]+$/i,
            Ia = /^0b[01]+$/i,
            xa = /^\[object .+?Constructor\]$/,
            Pa = /^0o[0-7]+$/i,
            Oa = /^(?:0|[1-9]\d*)$/,
            ai = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            pn = /($^)/,
            Ca = /['\n\r\u2028\u2029\\]/g,
            gn = "\\ud800-\\udfff",
            Aa = "\\u0300-\\u036f",
            Ta = "\\ufe20-\\ufe2f",
            yn = "\\u20d0-\\u20ff",
            js = Aa + Ta + yn,
            qs = "\\u2700-\\u27bf",
            zr = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Ra = "\\xac\\xb1\\xd7\\xf7",
            Na = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            $a = "\\u2000-\\u206f",
            Ua = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Fs = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            zs = "\\ufe0e\\ufe0f",
            Ki = Ra + Na + $a + Ua,
            Gn = "['’]",
            ki = "[" + gn + "]",
            Yn = "[" + Ki + "]",
            Vi = "[" + js + "]",
            Hs = "\\d+",
            Ma = "[" + qs + "]",
            Bs = "[" + zr + "]",
            Ks = "[^" + gn + Ki + Hs + qs + zr + Fs + "]",
            vn = "\\ud83c[\\udffb-\\udfff]",
            La = "(?:" + Vi + "|" + vn + ")",
            ks = "[^" + gn + "]",
            mn = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Oi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            _r = "[" + Fs + "]",
            Vs = "\\u200d",
            Ws = "(?:" + Bs + "|" + Ks + ")",
            Qr = "(?:" + _r + "|" + Ks + ")",
            Gs = "(?:" + Gn + "(?:d|ll|m|re|s|t|ve))?",
            Ys = "(?:" + Gn + "(?:D|LL|M|RE|S|T|VE))?",
            Js = La + "?",
            Qs = "[" + zs + "]?",
            ja = "(?:" + Vs + "(?:" + [ks, mn, Oi].join("|") + ")" + Qs + Js + ")*",
            ci = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            Xs = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            Zs = Qs + Js + ja,
            wn = "(?:" + [Ma, mn, Oi].join("|") + ")" + Zs,
            qa = "(?:" + [ks + Vi + "?", Vi, mn, Oi, ki].join("|") + ")",
            Jn = RegExp(Gn, "g"),
            Fa = RegExp(Vi, "g"),
            bn = RegExp(vn + "(?=" + vn + ")|" + qa + Zs, "g"),
            eo = RegExp([_r + "?" + Bs + "+" + Gs + "(?=" + [Yn, _r, "$"].join("|") + ")", Qr + "+" + Ys + "(?=" + [Yn, _r + Ws, "$"].join("|") + ")", _r + "?" + Ws + "+" + Gs, _r + "+" + Ys, Xs, ci, Hs, wn].join("|"), "g"),
            to = RegExp("[" + Vs + gn + js + zs + "]"),
            Wi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            ro = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            za = -1,
            st = {};
        st[Be] = st[xe] = st[Ve] = st[Ge] = st[Ze] = st[et] = st[Je] = st[er] = st[hr] = !0, st[le] = st[Ae] = st[_e] = st[F] = st[Oe] = st[U] = st[T] = st[se] = st[Ee] = st[He] = st[Le] = st[qe] = st[Ie] = st[Ne] = st[Pe] = !1;
        var nt = {};
        nt[le] = nt[Ae] = nt[_e] = nt[Oe] = nt[F] = nt[U] = nt[Be] = nt[xe] = nt[Ve] = nt[Ge] = nt[Ze] = nt[Ee] = nt[He] = nt[Le] = nt[qe] = nt[Ie] = nt[Ne] = nt[$e] = nt[et] = nt[Je] = nt[er] = nt[hr] = !0, nt[T] = nt[se] = nt[Pe] = !1;
        var E = {
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s"
            },
            M = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            Q = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            },
            fe = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            ot = parseFloat,
            Te = parseInt,
            lt = typeof ws == "object" && ws && ws.Object === Object && ws,
            qt = typeof self == "object" && self && self.Object === Object && self,
            Qe = lt || qt || Function("return this")(),
            at = e && !e.nodeType && e,
            At = at && !0 && i && !i.nodeType && i,
            lr = At && At.exports === at,
            Ft = lr && lt.process,
            ft = function() {
                try {
                    var j = At && At.require && At.require("util").types;
                    return j || Ft && Ft.binding && Ft.binding("util")
                } catch {}
            }(),
            rr = ft && ft.isArrayBuffer,
            Hr = ft && ft.isDate,
            Tr = ft && ft.isMap,
            Xr = ft && ft.isRegExp,
            Qn = ft && ft.isSet,
            Gi = ft && ft.isTypedArray;

        function Bt(j, W, H) {
            switch (H.length) {
                case 0:
                    return j.call(W);
                case 1:
                    return j.call(W, H[0]);
                case 2:
                    return j.call(W, H[0], H[1]);
                case 3:
                    return j.call(W, H[0], H[1], H[2])
            }
            return j.apply(W, H)
        }

        function ig(j, W, H, de) {
            for (var Ce = -1, tt = j == null ? 0 : j.length; ++Ce < tt;) {
                var zt = j[Ce];
                W(de, zt, H(zt), j)
            }
            return de
        }

        function Rr(j, W) {
            for (var H = -1, de = j == null ? 0 : j.length; ++H < de && W(j[H], H, j) !== !1;);
            return j
        }

        function ng(j, W) {
            for (var H = j == null ? 0 : j.length; H-- && W(j[H], H, j) !== !1;);
            return j
        }

        function sh(j, W) {
            for (var H = -1, de = j == null ? 0 : j.length; ++H < de;)
                if (!W(j[H], H, j)) return !1;
            return !0
        }

        function Ci(j, W) {
            for (var H = -1, de = j == null ? 0 : j.length, Ce = 0, tt = []; ++H < de;) {
                var zt = j[H];
                W(zt, H, j) && (tt[Ce++] = zt)
            }
            return tt
        }

        function io(j, W) {
            var H = j == null ? 0 : j.length;
            return !!H && _n(j, W, 0) > -1
        }

        function Ha(j, W, H) {
            for (var de = -1, Ce = j == null ? 0 : j.length; ++de < Ce;)
                if (H(W, j[de])) return !0;
            return !1
        }

        function vt(j, W) {
            for (var H = -1, de = j == null ? 0 : j.length, Ce = Array(de); ++H < de;) Ce[H] = W(j[H], H, j);
            return Ce
        }

        function Ai(j, W) {
            for (var H = -1, de = W.length, Ce = j.length; ++H < de;) j[Ce + H] = W[H];
            return j
        }

        function Ba(j, W, H, de) {
            var Ce = -1,
                tt = j == null ? 0 : j.length;
            for (de && tt && (H = j[++Ce]); ++Ce < tt;) H = W(H, j[Ce], Ce, j);
            return H
        }

        function sg(j, W, H, de) {
            var Ce = j == null ? 0 : j.length;
            for (de && Ce && (H = j[--Ce]); Ce--;) H = W(H, j[Ce], Ce, j);
            return H
        }

        function Ka(j, W) {
            for (var H = -1, de = j == null ? 0 : j.length; ++H < de;)
                if (W(j[H], H, j)) return !0;
            return !1
        }
        var og = ka("length");

        function ag(j) {
            return j.split("")
        }

        function cg(j) {
            return j.match(jt) || []
        }

        function oh(j, W, H) {
            var de;
            return H(j, function(Ce, tt, zt) {
                if (W(Ce, tt, zt)) return de = tt, !1
            }), de
        }

        function no(j, W, H, de) {
            for (var Ce = j.length, tt = H + (de ? 1 : -1); de ? tt-- : ++tt < Ce;)
                if (W(j[tt], tt, j)) return tt;
            return -1
        }

        function _n(j, W, H) {
            return W === W ? bg(j, W, H) : no(j, ah, H)
        }

        function ug(j, W, H, de) {
            for (var Ce = H - 1, tt = j.length; ++Ce < tt;)
                if (de(j[Ce], W)) return Ce;
            return -1
        }

        function ah(j) {
            return j !== j
        }

        function ch(j, W) {
            var H = j == null ? 0 : j.length;
            return H ? Wa(j, W) / H : te
        }

        function ka(j) {
            return function(W) {
                return W == null ? t : W[j]
            }
        }

        function Va(j) {
            return function(W) {
                return j == null ? t : j[W]
            }
        }

        function uh(j, W, H, de, Ce) {
            return Ce(j, function(tt, zt, ct) {
                H = de ? (de = !1, tt) : W(H, tt, zt, ct)
            }), H
        }

        function hg(j, W) {
            var H = j.length;
            for (j.sort(W); H--;) j[H] = j[H].value;
            return j
        }

        function Wa(j, W) {
            for (var H, de = -1, Ce = j.length; ++de < Ce;) {
                var tt = W(j[de]);
                tt !== t && (H = H === t ? tt : H + tt)
            }
            return H
        }

        function Ga(j, W) {
            for (var H = -1, de = Array(j); ++H < j;) de[H] = W(H);
            return de
        }

        function lg(j, W) {
            return vt(W, function(H) {
                return [H, j[H]]
            })
        }

        function hh(j) {
            return j && j.slice(0, ph(j) + 1).replace(xt, "")
        }

        function Er(j) {
            return function(W) {
                return j(W)
            }
        }

        function Ya(j, W) {
            return vt(W, function(H) {
                return j[H]
            })
        }

        function Xn(j, W) {
            return j.has(W)
        }

        function lh(j, W) {
            for (var H = -1, de = j.length; ++H < de && _n(W, j[H], 0) > -1;);
            return H
        }

        function fh(j, W) {
            for (var H = j.length; H-- && _n(W, j[H], 0) > -1;);
            return H
        }

        function fg(j, W) {
            for (var H = j.length, de = 0; H--;) j[H] === W && ++de;
            return de
        }
        var dg = Va(E),
            pg = Va(M);

        function gg(j) {
            return "\\" + fe[j]
        }

        function yg(j, W) {
            return j == null ? t : j[W]
        }

        function En(j) {
            return to.test(j)
        }

        function vg(j) {
            return Wi.test(j)
        }

        function mg(j) {
            for (var W, H = []; !(W = j.next()).done;) H.push(W.value);
            return H
        }

        function Ja(j) {
            var W = -1,
                H = Array(j.size);
            return j.forEach(function(de, Ce) {
                H[++W] = [Ce, de]
            }), H
        }

        function dh(j, W) {
            return function(H) {
                return j(W(H))
            }
        }

        function Ti(j, W) {
            for (var H = -1, de = j.length, Ce = 0, tt = []; ++H < de;) {
                var zt = j[H];
                (zt === W || zt === m) && (j[H] = m, tt[Ce++] = H)
            }
            return tt
        }

        function so(j) {
            var W = -1,
                H = Array(j.size);
            return j.forEach(function(de) {
                H[++W] = de
            }), H
        }

        function wg(j) {
            var W = -1,
                H = Array(j.size);
            return j.forEach(function(de) {
                H[++W] = [de, de]
            }), H
        }

        function bg(j, W, H) {
            for (var de = H - 1, Ce = j.length; ++de < Ce;)
                if (j[de] === W) return de;
            return -1
        }

        function _g(j, W, H) {
            for (var de = H + 1; de--;)
                if (j[de] === W) return de;
            return de
        }

        function Dn(j) {
            return En(j) ? Dg(j) : og(j)
        }

        function Br(j) {
            return En(j) ? Sg(j) : ag(j)
        }

        function ph(j) {
            for (var W = j.length; W-- && Ct.test(j.charAt(W)););
            return W
        }
        var Eg = Va(Q);

        function Dg(j) {
            for (var W = bn.lastIndex = 0; bn.test(j);) ++W;
            return W
        }

        function Sg(j) {
            return j.match(bn) || []
        }

        function Ig(j) {
            return j.match(eo) || []
        }
        var xg = function j(W) {
                W = W == null ? Qe : Sn.defaults(Qe.Object(), W, Sn.pick(Qe, ro));
                var H = W.Array,
                    de = W.Date,
                    Ce = W.Error,
                    tt = W.Function,
                    zt = W.Math,
                    ct = W.Object,
                    Qa = W.RegExp,
                    Pg = W.String,
                    Nr = W.TypeError,
                    oo = H.prototype,
                    Og = tt.prototype,
                    In = ct.prototype,
                    ao = W["__core-js_shared__"],
                    co = Og.toString,
                    it = In.hasOwnProperty,
                    Cg = 0,
                    gh = function() {
                        var r = /[^.]+$/.exec(ao && ao.keys && ao.keys.IE_PROTO || "");
                        return r ? "Symbol(src)_1." + r : ""
                    }(),
                    uo = In.toString,
                    Ag = co.call(ct),
                    Tg = Qe._,
                    Rg = Qa("^" + co.call(it).replace(It, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    ho = lr ? W.Buffer : t,
                    Ri = W.Symbol,
                    lo = W.Uint8Array,
                    yh = ho ? ho.allocUnsafe : t,
                    fo = dh(ct.getPrototypeOf, ct),
                    vh = ct.create,
                    mh = In.propertyIsEnumerable,
                    po = oo.splice,
                    wh = Ri ? Ri.isConcatSpreadable : t,
                    Zn = Ri ? Ri.iterator : t,
                    Yi = Ri ? Ri.toStringTag : t,
                    go = function() {
                        try {
                            var r = en(ct, "defineProperty");
                            return r({}, "", {}), r
                        } catch {}
                    }(),
                    Ng = W.clearTimeout !== Qe.clearTimeout && W.clearTimeout,
                    $g = de && de.now !== Qe.Date.now && de.now,
                    Ug = W.setTimeout !== Qe.setTimeout && W.setTimeout,
                    yo = zt.ceil,
                    vo = zt.floor,
                    Xa = ct.getOwnPropertySymbols,
                    Mg = ho ? ho.isBuffer : t,
                    bh = W.isFinite,
                    Lg = oo.join,
                    jg = dh(ct.keys, ct),
                    Ht = zt.max,
                    Jt = zt.min,
                    qg = de.now,
                    Fg = W.parseInt,
                    _h = zt.random,
                    zg = oo.reverse,
                    Za = en(W, "DataView"),
                    es = en(W, "Map"),
                    ec = en(W, "Promise"),
                    xn = en(W, "Set"),
                    ts = en(W, "WeakMap"),
                    rs = en(ct, "create"),
                    mo = ts && new ts,
                    Pn = {},
                    Hg = tn(Za),
                    Bg = tn(es),
                    Kg = tn(ec),
                    kg = tn(xn),
                    Vg = tn(ts),
                    wo = Ri ? Ri.prototype : t,
                    is = wo ? wo.valueOf : t,
                    Eh = wo ? wo.toString : t;

                function v(r) {
                    if (Ot(r) && !Re(r) && !(r instanceof Ye)) {
                        if (r instanceof $r) return r;
                        if (it.call(r, "__wrapped__")) return Dl(r)
                    }
                    return new $r(r)
                }
                var On = function() {
                    function r() {}
                    return function(n) {
                        if (!_t(n)) return {};
                        if (vh) return vh(n);
                        r.prototype = n;
                        var a = new r;
                        return r.prototype = t, a
                    }
                }();

                function bo() {}

                function $r(r, n) {
                    this.__wrapped__ = r, this.__actions__ = [], this.__chain__ = !!n, this.__index__ = 0, this.__values__ = t
                }
                v.templateSettings = {
                    escape: Dt,
                    evaluate: St,
                    interpolate: bt,
                    variable: "",
                    imports: {
                        _: v
                    }
                }, v.prototype = bo.prototype, v.prototype.constructor = v, $r.prototype = On(bo.prototype), $r.prototype.constructor = $r;

                function Ye(r) {
                    this.__wrapped__ = r, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = ie, this.__views__ = []
                }

                function Wg() {
                    var r = new Ye(this.__wrapped__);
                    return r.__actions__ = fr(this.__actions__), r.__dir__ = this.__dir__, r.__filtered__ = this.__filtered__, r.__iteratees__ = fr(this.__iteratees__), r.__takeCount__ = this.__takeCount__, r.__views__ = fr(this.__views__), r
                }

                function Gg() {
                    if (this.__filtered__) {
                        var r = new Ye(this);
                        r.__dir__ = -1, r.__filtered__ = !0
                    } else r = this.clone(), r.__dir__ *= -1;
                    return r
                }

                function Yg() {
                    var r = this.__wrapped__.value(),
                        n = this.__dir__,
                        a = Re(r),
                        u = n < 0,
                        g = a ? r.length : 0,
                        w = ay(0, g, this.__views__),
                        x = w.start,
                        N = w.end,
                        q = N - x,
                        G = u ? N : x - 1,
                        Y = this.__iteratees__,
                        re = Y.length,
                        ce = 0,
                        pe = Jt(q, this.__takeCount__);
                    if (!a || !u && g == q && pe == q) return Vh(r, this.__actions__);
                    var we = [];
                    e: for (; q-- && ce < pe;) {
                        G += n;
                        for (var ze = -1, be = r[G]; ++ze < re;) {
                            var We = Y[ze],
                                Xe = We.iteratee,
                                Ir = We.type,
                                sr = Xe(be);
                            if (Ir == R) be = sr;
                            else if (!sr) {
                                if (Ir == D) continue e;
                                break e
                            }
                        }
                        we[ce++] = be
                    }
                    return we
                }
                Ye.prototype = On(bo.prototype), Ye.prototype.constructor = Ye;

                function Ji(r) {
                    var n = -1,
                        a = r == null ? 0 : r.length;
                    for (this.clear(); ++n < a;) {
                        var u = r[n];
                        this.set(u[0], u[1])
                    }
                }

                function Jg() {
                    this.__data__ = rs ? rs(null) : {}, this.size = 0
                }

                function Qg(r) {
                    var n = this.has(r) && delete this.__data__[r];
                    return this.size -= n ? 1 : 0, n
                }

                function Xg(r) {
                    var n = this.__data__;
                    if (rs) {
                        var a = n[r];
                        return a === p ? t : a
                    }
                    return it.call(n, r) ? n[r] : t
                }

                function Zg(r) {
                    var n = this.__data__;
                    return rs ? n[r] !== t : it.call(n, r)
                }

                function e0(r, n) {
                    var a = this.__data__;
                    return this.size += this.has(r) ? 0 : 1, a[r] = rs && n === t ? p : n, this
                }
                Ji.prototype.clear = Jg, Ji.prototype.delete = Qg, Ji.prototype.get = Xg, Ji.prototype.has = Zg, Ji.prototype.set = e0;

                function ui(r) {
                    var n = -1,
                        a = r == null ? 0 : r.length;
                    for (this.clear(); ++n < a;) {
                        var u = r[n];
                        this.set(u[0], u[1])
                    }
                }

                function t0() {
                    this.__data__ = [], this.size = 0
                }

                function r0(r) {
                    var n = this.__data__,
                        a = _o(n, r);
                    if (a < 0) return !1;
                    var u = n.length - 1;
                    return a == u ? n.pop() : po.call(n, a, 1), --this.size, !0
                }

                function i0(r) {
                    var n = this.__data__,
                        a = _o(n, r);
                    return a < 0 ? t : n[a][1]
                }

                function n0(r) {
                    return _o(this.__data__, r) > -1
                }

                function s0(r, n) {
                    var a = this.__data__,
                        u = _o(a, r);
                    return u < 0 ? (++this.size, a.push([r, n])) : a[u][1] = n, this
                }
                ui.prototype.clear = t0, ui.prototype.delete = r0, ui.prototype.get = i0, ui.prototype.has = n0, ui.prototype.set = s0;

                function hi(r) {
                    var n = -1,
                        a = r == null ? 0 : r.length;
                    for (this.clear(); ++n < a;) {
                        var u = r[n];
                        this.set(u[0], u[1])
                    }
                }

                function o0() {
                    this.size = 0, this.__data__ = {
                        hash: new Ji,
                        map: new(es || ui),
                        string: new Ji
                    }
                }

                function a0(r) {
                    var n = No(this, r).delete(r);
                    return this.size -= n ? 1 : 0, n
                }

                function c0(r) {
                    return No(this, r).get(r)
                }

                function u0(r) {
                    return No(this, r).has(r)
                }

                function h0(r, n) {
                    var a = No(this, r),
                        u = a.size;
                    return a.set(r, n), this.size += a.size == u ? 0 : 1, this
                }
                hi.prototype.clear = o0, hi.prototype.delete = a0, hi.prototype.get = c0, hi.prototype.has = u0, hi.prototype.set = h0;

                function Qi(r) {
                    var n = -1,
                        a = r == null ? 0 : r.length;
                    for (this.__data__ = new hi; ++n < a;) this.add(r[n])
                }

                function l0(r) {
                    return this.__data__.set(r, p), this
                }

                function f0(r) {
                    return this.__data__.has(r)
                }
                Qi.prototype.add = Qi.prototype.push = l0, Qi.prototype.has = f0;

                function Kr(r) {
                    var n = this.__data__ = new ui(r);
                    this.size = n.size
                }

                function d0() {
                    this.__data__ = new ui, this.size = 0
                }

                function p0(r) {
                    var n = this.__data__,
                        a = n.delete(r);
                    return this.size = n.size, a
                }

                function g0(r) {
                    return this.__data__.get(r)
                }

                function y0(r) {
                    return this.__data__.has(r)
                }

                function v0(r, n) {
                    var a = this.__data__;
                    if (a instanceof ui) {
                        var u = a.__data__;
                        if (!es || u.length < o - 1) return u.push([r, n]), this.size = ++a.size, this;
                        a = this.__data__ = new hi(u)
                    }
                    return a.set(r, n), this.size = a.size, this
                }
                Kr.prototype.clear = d0, Kr.prototype.delete = p0, Kr.prototype.get = g0, Kr.prototype.has = y0, Kr.prototype.set = v0;

                function Dh(r, n) {
                    var a = Re(r),
                        u = !a && rn(r),
                        g = !a && !u && Li(r),
                        w = !a && !u && !g && Rn(r),
                        x = a || u || g || w,
                        N = x ? Ga(r.length, Pg) : [],
                        q = N.length;
                    for (var G in r)(n || it.call(r, G)) && !(x && (G == "length" || g && (G == "offset" || G == "parent") || w && (G == "buffer" || G == "byteLength" || G == "byteOffset") || pi(G, q))) && N.push(G);
                    return N
                }

                function Sh(r) {
                    var n = r.length;
                    return n ? r[lc(0, n - 1)] : t
                }

                function m0(r, n) {
                    return $o(fr(r), Xi(n, 0, r.length))
                }

                function w0(r) {
                    return $o(fr(r))
                }

                function tc(r, n, a) {
                    (a !== t && !kr(r[n], a) || a === t && !(n in r)) && li(r, n, a)
                }

                function ns(r, n, a) {
                    var u = r[n];
                    (!(it.call(r, n) && kr(u, a)) || a === t && !(n in r)) && li(r, n, a)
                }

                function _o(r, n) {
                    for (var a = r.length; a--;)
                        if (kr(r[a][0], n)) return a;
                    return -1
                }

                function b0(r, n, a, u) {
                    return Ni(r, function(g, w, x) {
                        n(u, g, a(g), x)
                    }), u
                }

                function Ih(r, n) {
                    return r && ei(n, Kt(n), r)
                }

                function _0(r, n) {
                    return r && ei(n, pr(n), r)
                }

                function li(r, n, a) {
                    n == "__proto__" && go ? go(r, n, {
                        configurable: !0,
                        enumerable: !0,
                        value: a,
                        writable: !0
                    }) : r[n] = a
                }

                function rc(r, n) {
                    for (var a = -1, u = n.length, g = H(u), w = r == null; ++a < u;) g[a] = w ? t : Mc(r, n[a]);
                    return g
                }

                function Xi(r, n, a) {
                    return r === r && (a !== t && (r = r <= a ? r : a), n !== t && (r = r >= n ? r : n)), r
                }

                function Ur(r, n, a, u, g, w) {
                    var x, N = n & b,
                        q = n & P,
                        G = n & O;
                    if (a && (x = g ? a(r, u, g, w) : a(r)), x !== t) return x;
                    if (!_t(r)) return r;
                    var Y = Re(r);
                    if (Y) {
                        if (x = uy(r), !N) return fr(r, x)
                    } else {
                        var re = Qt(r),
                            ce = re == se || re == he;
                        if (Li(r)) return Yh(r, N);
                        if (re == Le || re == le || ce && !g) {
                            if (x = q || ce ? {} : pl(r), !N) return q ? X0(r, _0(x, r)) : Q0(r, Ih(x, r))
                        } else {
                            if (!nt[re]) return g ? r : {};
                            x = hy(r, re, N)
                        }
                    }
                    w || (w = new Kr);
                    var pe = w.get(r);
                    if (pe) return pe;
                    w.set(r, x), Bl(r) ? r.forEach(function(be) {
                        x.add(Ur(be, n, a, be, r, w))
                    }) : zl(r) && r.forEach(function(be, We) {
                        x.set(We, Ur(be, n, a, We, r, w))
                    });
                    var we = G ? q ? Ec : _c : q ? pr : Kt,
                        ze = Y ? t : we(r);
                    return Rr(ze || r, function(be, We) {
                        ze && (We = be, be = r[We]), ns(x, We, Ur(be, n, a, We, r, w))
                    }), x
                }

                function E0(r) {
                    var n = Kt(r);
                    return function(a) {
                        return xh(a, r, n)
                    }
                }

                function xh(r, n, a) {
                    var u = a.length;
                    if (r == null) return !u;
                    for (r = ct(r); u--;) {
                        var g = a[u],
                            w = n[g],
                            x = r[g];
                        if (x === t && !(g in r) || !w(x)) return !1
                    }
                    return !0
                }

                function Ph(r, n, a) {
                    if (typeof r != "function") throw new Nr(d);
                    return ls(function() {
                        r.apply(t, a)
                    }, n)
                }

                function ss(r, n, a, u) {
                    var g = -1,
                        w = io,
                        x = !0,
                        N = r.length,
                        q = [],
                        G = n.length;
                    if (!N) return q;
                    a && (n = vt(n, Er(a))), u ? (w = Ha, x = !1) : n.length >= o && (w = Xn, x = !1, n = new Qi(n));
                    e: for (; ++g < N;) {
                        var Y = r[g],
                            re = a == null ? Y : a(Y);
                        if (Y = u || Y !== 0 ? Y : 0, x && re === re) {
                            for (var ce = G; ce--;)
                                if (n[ce] === re) continue e;
                            q.push(Y)
                        } else w(n, re, u) || q.push(Y)
                    }
                    return q
                }
                var Ni = el(Zr),
                    Oh = el(nc, !0);

                function D0(r, n) {
                    var a = !0;
                    return Ni(r, function(u, g, w) {
                        return a = !!n(u, g, w), a
                    }), a
                }

                function Eo(r, n, a) {
                    for (var u = -1, g = r.length; ++u < g;) {
                        var w = r[u],
                            x = n(w);
                        if (x != null && (N === t ? x === x && !Sr(x) : a(x, N))) var N = x,
                            q = w
                    }
                    return q
                }

                function S0(r, n, a, u) {
                    var g = r.length;
                    for (a = je(a), a < 0 && (a = -a > g ? 0 : g + a), u = u === t || u > g ? g : je(u), u < 0 && (u += g), u = a > u ? 0 : kl(u); a < u;) r[a++] = n;
                    return r
                }

                function Ch(r, n) {
                    var a = [];
                    return Ni(r, function(u, g, w) {
                        n(u, g, w) && a.push(u)
                    }), a
                }

                function Wt(r, n, a, u, g) {
                    var w = -1,
                        x = r.length;
                    for (a || (a = fy), g || (g = []); ++w < x;) {
                        var N = r[w];
                        n > 0 && a(N) ? n > 1 ? Wt(N, n - 1, a, u, g) : Ai(g, N) : u || (g[g.length] = N)
                    }
                    return g
                }
                var ic = tl(),
                    Ah = tl(!0);

                function Zr(r, n) {
                    return r && ic(r, n, Kt)
                }

                function nc(r, n) {
                    return r && Ah(r, n, Kt)
                }

                function Do(r, n) {
                    return Ci(n, function(a) {
                        return gi(r[a])
                    })
                }

                function Zi(r, n) {
                    n = Ui(n, r);
                    for (var a = 0, u = n.length; r != null && a < u;) r = r[ti(n[a++])];
                    return a && a == u ? r : t
                }

                function Th(r, n, a) {
                    var u = n(r);
                    return Re(r) ? u : Ai(u, a(r))
                }

                function ir(r) {
                    return r == null ? r === t ? Fe : ke : Yi && Yi in ct(r) ? oy(r) : wy(r)
                }

                function sc(r, n) {
                    return r > n
                }

                function I0(r, n) {
                    return r != null && it.call(r, n)
                }

                function x0(r, n) {
                    return r != null && n in ct(r)
                }

                function P0(r, n, a) {
                    return r >= Jt(n, a) && r < Ht(n, a)
                }

                function oc(r, n, a) {
                    for (var u = a ? Ha : io, g = r[0].length, w = r.length, x = w, N = H(w), q = 1 / 0, G = []; x--;) {
                        var Y = r[x];
                        x && n && (Y = vt(Y, Er(n))), q = Jt(Y.length, q), N[x] = !a && (n || g >= 120 && Y.length >= 120) ? new Qi(x && Y) : t
                    }
                    Y = r[0];
                    var re = -1,
                        ce = N[0];
                    e: for (; ++re < g && G.length < q;) {
                        var pe = Y[re],
                            we = n ? n(pe) : pe;
                        if (pe = a || pe !== 0 ? pe : 0, !(ce ? Xn(ce, we) : u(G, we, a))) {
                            for (x = w; --x;) {
                                var ze = N[x];
                                if (!(ze ? Xn(ze, we) : u(r[x], we, a))) continue e
                            }
                            ce && ce.push(we), G.push(pe)
                        }
                    }
                    return G
                }

                function O0(r, n, a, u) {
                    return Zr(r, function(g, w, x) {
                        n(u, a(g), w, x)
                    }), u
                }

                function os(r, n, a) {
                    n = Ui(n, r), r = ml(r, n);
                    var u = r == null ? r : r[ti(Lr(n))];
                    return u == null ? t : Bt(u, r, a)
                }

                function Rh(r) {
                    return Ot(r) && ir(r) == le
                }

                function C0(r) {
                    return Ot(r) && ir(r) == _e
                }

                function A0(r) {
                    return Ot(r) && ir(r) == U
                }

                function as(r, n, a, u, g) {
                    return r === n ? !0 : r == null || n == null || !Ot(r) && !Ot(n) ? r !== r && n !== n : T0(r, n, a, u, as, g)
                }

                function T0(r, n, a, u, g, w) {
                    var x = Re(r),
                        N = Re(n),
                        q = x ? Ae : Qt(r),
                        G = N ? Ae : Qt(n);
                    q = q == le ? Le : q, G = G == le ? Le : G;
                    var Y = q == Le,
                        re = G == Le,
                        ce = q == G;
                    if (ce && Li(r)) {
                        if (!Li(n)) return !1;
                        x = !0, Y = !1
                    }
                    if (ce && !Y) return w || (w = new Kr), x || Rn(r) ? ll(r, n, a, u, g, w) : ny(r, n, q, a, u, g, w);
                    if (!(a & S)) {
                        var pe = Y && it.call(r, "__wrapped__"),
                            we = re && it.call(n, "__wrapped__");
                        if (pe || we) {
                            var ze = pe ? r.value() : r,
                                be = we ? n.value() : n;
                            return w || (w = new Kr), g(ze, be, a, u, w)
                        }
                    }
                    return ce ? (w || (w = new Kr), sy(r, n, a, u, g, w)) : !1
                }

                function R0(r) {
                    return Ot(r) && Qt(r) == Ee
                }

                function ac(r, n, a, u) {
                    var g = a.length,
                        w = g,
                        x = !u;
                    if (r == null) return !w;
                    for (r = ct(r); g--;) {
                        var N = a[g];
                        if (x && N[2] ? N[1] !== r[N[0]] : !(N[0] in r)) return !1
                    }
                    for (; ++g < w;) {
                        N = a[g];
                        var q = N[0],
                            G = r[q],
                            Y = N[1];
                        if (x && N[2]) {
                            if (G === t && !(q in r)) return !1
                        } else {
                            var re = new Kr;
                            if (u) var ce = u(G, Y, q, r, n, re);
                            if (!(ce === t ? as(Y, G, S | K, u, re) : ce)) return !1
                        }
                    }
                    return !0
                }

                function Nh(r) {
                    if (!_t(r) || py(r)) return !1;
                    var n = gi(r) ? Rg : xa;
                    return n.test(tn(r))
                }

                function N0(r) {
                    return Ot(r) && ir(r) == qe
                }

                function $0(r) {
                    return Ot(r) && Qt(r) == Ie
                }

                function U0(r) {
                    return Ot(r) && Fo(r.length) && !!st[ir(r)]
                }

                function $h(r) {
                    return typeof r == "function" ? r : r == null ? gr : typeof r == "object" ? Re(r) ? Lh(r[0], r[1]) : Mh(r) : rf(r)
                }

                function cc(r) {
                    if (!hs(r)) return jg(r);
                    var n = [];
                    for (var a in ct(r)) it.call(r, a) && a != "constructor" && n.push(a);
                    return n
                }

                function M0(r) {
                    if (!_t(r)) return my(r);
                    var n = hs(r),
                        a = [];
                    for (var u in r) u == "constructor" && (n || !it.call(r, u)) || a.push(u);
                    return a
                }

                function uc(r, n) {
                    return r < n
                }

                function Uh(r, n) {
                    var a = -1,
                        u = dr(r) ? H(r.length) : [];
                    return Ni(r, function(g, w, x) {
                        u[++a] = n(g, w, x)
                    }), u
                }

                function Mh(r) {
                    var n = Sc(r);
                    return n.length == 1 && n[0][2] ? yl(n[0][0], n[0][1]) : function(a) {
                        return a === r || ac(a, r, n)
                    }
                }

                function Lh(r, n) {
                    return xc(r) && gl(n) ? yl(ti(r), n) : function(a) {
                        var u = Mc(a, r);
                        return u === t && u === n ? Lc(a, r) : as(n, u, S | K)
                    }
                }

                function So(r, n, a, u, g) {
                    r !== n && ic(n, function(w, x) {
                        if (g || (g = new Kr), _t(w)) L0(r, n, x, a, So, u, g);
                        else {
                            var N = u ? u(Oc(r, x), w, x + "", r, n, g) : t;
                            N === t && (N = w), tc(r, x, N)
                        }
                    }, pr)
                }

                function L0(r, n, a, u, g, w, x) {
                    var N = Oc(r, a),
                        q = Oc(n, a),
                        G = x.get(q);
                    if (G) {
                        tc(r, a, G);
                        return
                    }
                    var Y = w ? w(N, q, a + "", r, n, x) : t,
                        re = Y === t;
                    if (re) {
                        var ce = Re(q),
                            pe = !ce && Li(q),
                            we = !ce && !pe && Rn(q);
                        Y = q, ce || pe || we ? Re(N) ? Y = N : Tt(N) ? Y = fr(N) : pe ? (re = !1, Y = Yh(q, !0)) : we ? (re = !1, Y = Jh(q, !0)) : Y = [] : fs(q) || rn(q) ? (Y = N, rn(N) ? Y = Vl(N) : (!_t(N) || gi(N)) && (Y = pl(q))) : re = !1
                    }
                    re && (x.set(q, Y), g(Y, q, u, w, x), x.delete(q)), tc(r, a, Y)
                }

                function jh(r, n) {
                    var a = r.length;
                    if (a) return n += n < 0 ? a : 0, pi(n, a) ? r[n] : t
                }

                function qh(r, n, a) {
                    n.length ? n = vt(n, function(w) {
                        return Re(w) ? function(x) {
                            return Zi(x, w.length === 1 ? w[0] : w)
                        } : w
                    }) : n = [gr];
                    var u = -1;
                    n = vt(n, Er(me()));
                    var g = Uh(r, function(w, x, N) {
                        var q = vt(n, function(G) {
                            return G(w)
                        });
                        return {
                            criteria: q,
                            index: ++u,
                            value: w
                        }
                    });
                    return hg(g, function(w, x) {
                        return J0(w, x, a)
                    })
                }

                function j0(r, n) {
                    return Fh(r, n, function(a, u) {
                        return Lc(r, u)
                    })
                }

                function Fh(r, n, a) {
                    for (var u = -1, g = n.length, w = {}; ++u < g;) {
                        var x = n[u],
                            N = Zi(r, x);
                        a(N, x) && cs(w, Ui(x, r), N)
                    }
                    return w
                }

                function q0(r) {
                    return function(n) {
                        return Zi(n, r)
                    }
                }

                function hc(r, n, a, u) {
                    var g = u ? ug : _n,
                        w = -1,
                        x = n.length,
                        N = r;
                    for (r === n && (n = fr(n)), a && (N = vt(r, Er(a))); ++w < x;)
                        for (var q = 0, G = n[w], Y = a ? a(G) : G;
                            (q = g(N, Y, q, u)) > -1;) N !== r && po.call(N, q, 1), po.call(r, q, 1);
                    return r
                }

                function zh(r, n) {
                    for (var a = r ? n.length : 0, u = a - 1; a--;) {
                        var g = n[a];
                        if (a == u || g !== w) {
                            var w = g;
                            pi(g) ? po.call(r, g, 1) : pc(r, g)
                        }
                    }
                    return r
                }

                function lc(r, n) {
                    return r + vo(_h() * (n - r + 1))
                }

                function F0(r, n, a, u) {
                    for (var g = -1, w = Ht(yo((n - r) / (a || 1)), 0), x = H(w); w--;) x[u ? w : ++g] = r, r += a;
                    return x
                }

                function fc(r, n) {
                    var a = "";
                    if (!r || n < 1 || n > k) return a;
                    do n % 2 && (a += r), n = vo(n / 2), n && (r += r); while (n);
                    return a
                }

                function Ke(r, n) {
                    return Cc(vl(r, n, gr), r + "")
                }

                function z0(r) {
                    return Sh(Nn(r))
                }

                function H0(r, n) {
                    var a = Nn(r);
                    return $o(a, Xi(n, 0, a.length))
                }

                function cs(r, n, a, u) {
                    if (!_t(r)) return r;
                    n = Ui(n, r);
                    for (var g = -1, w = n.length, x = w - 1, N = r; N != null && ++g < w;) {
                        var q = ti(n[g]),
                            G = a;
                        if (q === "__proto__" || q === "constructor" || q === "prototype") return r;
                        if (g != x) {
                            var Y = N[q];
                            G = u ? u(Y, q, N) : t, G === t && (G = _t(Y) ? Y : pi(n[g + 1]) ? [] : {})
                        }
                        ns(N, q, G), N = N[q]
                    }
                    return r
                }
                var Hh = mo ? function(r, n) {
                        return mo.set(r, n), r
                    } : gr,
                    B0 = go ? function(r, n) {
                        return go(r, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: qc(n),
                            writable: !0
                        })
                    } : gr;

                function K0(r) {
                    return $o(Nn(r))
                }

                function Mr(r, n, a) {
                    var u = -1,
                        g = r.length;
                    n < 0 && (n = -n > g ? 0 : g + n), a = a > g ? g : a, a < 0 && (a += g), g = n > a ? 0 : a - n >>> 0, n >>>= 0;
                    for (var w = H(g); ++u < g;) w[u] = r[u + n];
                    return w
                }

                function k0(r, n) {
                    var a;
                    return Ni(r, function(u, g, w) {
                        return a = n(u, g, w), !a
                    }), !!a
                }

                function Io(r, n, a) {
                    var u = 0,
                        g = r == null ? u : r.length;
                    if (typeof n == "number" && n === n && g <= oe) {
                        for (; u < g;) {
                            var w = u + g >>> 1,
                                x = r[w];
                            x !== null && !Sr(x) && (a ? x <= n : x < n) ? u = w + 1 : g = w
                        }
                        return g
                    }
                    return dc(r, n, gr, a)
                }

                function dc(r, n, a, u) {
                    var g = 0,
                        w = r == null ? 0 : r.length;
                    if (w === 0) return 0;
                    n = a(n);
                    for (var x = n !== n, N = n === null, q = Sr(n), G = n === t; g < w;) {
                        var Y = vo((g + w) / 2),
                            re = a(r[Y]),
                            ce = re !== t,
                            pe = re === null,
                            we = re === re,
                            ze = Sr(re);
                        if (x) var be = u || we;
                        else G ? be = we && (u || ce) : N ? be = we && ce && (u || !pe) : q ? be = we && ce && !pe && (u || !ze) : pe || ze ? be = !1 : be = u ? re <= n : re < n;
                        be ? g = Y + 1 : w = Y
                    }
                    return Jt(w, De)
                }

                function Bh(r, n) {
                    for (var a = -1, u = r.length, g = 0, w = []; ++a < u;) {
                        var x = r[a],
                            N = n ? n(x) : x;
                        if (!a || !kr(N, q)) {
                            var q = N;
                            w[g++] = x === 0 ? 0 : x
                        }
                    }
                    return w
                }

                function Kh(r) {
                    return typeof r == "number" ? r : Sr(r) ? te : +r
                }

                function Dr(r) {
                    if (typeof r == "string") return r;
                    if (Re(r)) return vt(r, Dr) + "";
                    if (Sr(r)) return Eh ? Eh.call(r) : "";
                    var n = r + "";
                    return n == "0" && 1 / r == -J ? "-0" : n
                }

                function $i(r, n, a) {
                    var u = -1,
                        g = io,
                        w = r.length,
                        x = !0,
                        N = [],
                        q = N;
                    if (a) x = !1, g = Ha;
                    else if (w >= o) {
                        var G = n ? null : ry(r);
                        if (G) return so(G);
                        x = !1, g = Xn, q = new Qi
                    } else q = n ? [] : N;
                    e: for (; ++u < w;) {
                        var Y = r[u],
                            re = n ? n(Y) : Y;
                        if (Y = a || Y !== 0 ? Y : 0, x && re === re) {
                            for (var ce = q.length; ce--;)
                                if (q[ce] === re) continue e;
                            n && q.push(re), N.push(Y)
                        } else g(q, re, a) || (q !== N && q.push(re), N.push(Y))
                    }
                    return N
                }

                function pc(r, n) {
                    return n = Ui(n, r), r = ml(r, n), r == null || delete r[ti(Lr(n))]
                }

                function kh(r, n, a, u) {
                    return cs(r, n, a(Zi(r, n)), u)
                }

                function xo(r, n, a, u) {
                    for (var g = r.length, w = u ? g : -1;
                        (u ? w-- : ++w < g) && n(r[w], w, r););
                    return a ? Mr(r, u ? 0 : w, u ? w + 1 : g) : Mr(r, u ? w + 1 : 0, u ? g : w)
                }

                function Vh(r, n) {
                    var a = r;
                    return a instanceof Ye && (a = a.value()), Ba(n, function(u, g) {
                        return g.func.apply(g.thisArg, Ai([u], g.args))
                    }, a)
                }

                function gc(r, n, a) {
                    var u = r.length;
                    if (u < 2) return u ? $i(r[0]) : [];
                    for (var g = -1, w = H(u); ++g < u;)
                        for (var x = r[g], N = -1; ++N < u;) N != g && (w[g] = ss(w[g] || x, r[N], n, a));
                    return $i(Wt(w, 1), n, a)
                }

                function Wh(r, n, a) {
                    for (var u = -1, g = r.length, w = n.length, x = {}; ++u < g;) {
                        var N = u < w ? n[u] : t;
                        a(x, r[u], N)
                    }
                    return x
                }

                function yc(r) {
                    return Tt(r) ? r : []
                }

                function vc(r) {
                    return typeof r == "function" ? r : gr
                }

                function Ui(r, n) {
                    return Re(r) ? r : xc(r, n) ? [r] : El(rt(r))
                }
                var V0 = Ke;

                function Mi(r, n, a) {
                    var u = r.length;
                    return a = a === t ? u : a, !n && a >= u ? r : Mr(r, n, a)
                }
                var Gh = Ng || function(r) {
                    return Qe.clearTimeout(r)
                };

                function Yh(r, n) {
                    if (n) return r.slice();
                    var a = r.length,
                        u = yh ? yh(a) : new r.constructor(a);
                    return r.copy(u), u
                }

                function mc(r) {
                    var n = new r.constructor(r.byteLength);
                    return new lo(n).set(new lo(r)), n
                }

                function W0(r, n) {
                    var a = n ? mc(r.buffer) : r.buffer;
                    return new r.constructor(a, r.byteOffset, r.byteLength)
                }

                function G0(r) {
                    var n = new r.constructor(r.source, Ar.exec(r));
                    return n.lastIndex = r.lastIndex, n
                }

                function Y0(r) {
                    return is ? ct(is.call(r)) : {}
                }

                function Jh(r, n) {
                    var a = n ? mc(r.buffer) : r.buffer;
                    return new r.constructor(a, r.byteOffset, r.length)
                }

                function Qh(r, n) {
                    if (r !== n) {
                        var a = r !== t,
                            u = r === null,
                            g = r === r,
                            w = Sr(r),
                            x = n !== t,
                            N = n === null,
                            q = n === n,
                            G = Sr(n);
                        if (!N && !G && !w && r > n || w && x && q && !N && !G || u && x && q || !a && q || !g) return 1;
                        if (!u && !w && !G && r < n || G && a && g && !u && !w || N && a && g || !x && g || !q) return -1
                    }
                    return 0
                }

                function J0(r, n, a) {
                    for (var u = -1, g = r.criteria, w = n.criteria, x = g.length, N = a.length; ++u < x;) {
                        var q = Qh(g[u], w[u]);
                        if (q) {
                            if (u >= N) return q;
                            var G = a[u];
                            return q * (G == "desc" ? -1 : 1)
                        }
                    }
                    return r.index - n.index
                }

                function Xh(r, n, a, u) {
                    for (var g = -1, w = r.length, x = a.length, N = -1, q = n.length, G = Ht(w - x, 0), Y = H(q + G), re = !u; ++N < q;) Y[N] = n[N];
                    for (; ++g < x;)(re || g < w) && (Y[a[g]] = r[g]);
                    for (; G--;) Y[N++] = r[g++];
                    return Y
                }

                function Zh(r, n, a, u) {
                    for (var g = -1, w = r.length, x = -1, N = a.length, q = -1, G = n.length, Y = Ht(w - N, 0), re = H(Y + G), ce = !u; ++g < Y;) re[g] = r[g];
                    for (var pe = g; ++q < G;) re[pe + q] = n[q];
                    for (; ++x < N;)(ce || g < w) && (re[pe + a[x]] = r[g++]);
                    return re
                }

                function fr(r, n) {
                    var a = -1,
                        u = r.length;
                    for (n || (n = H(u)); ++a < u;) n[a] = r[a];
                    return n
                }

                function ei(r, n, a, u) {
                    var g = !a;
                    a || (a = {});
                    for (var w = -1, x = n.length; ++w < x;) {
                        var N = n[w],
                            q = u ? u(a[N], r[N], N, a, r) : t;
                        q === t && (q = r[N]), g ? li(a, N, q) : ns(a, N, q)
                    }
                    return a
                }

                function Q0(r, n) {
                    return ei(r, Ic(r), n)
                }

                function X0(r, n) {
                    return ei(r, fl(r), n)
                }

                function Po(r, n) {
                    return function(a, u) {
                        var g = Re(a) ? ig : b0,
                            w = n ? n() : {};
                        return g(a, r, me(u, 2), w)
                    }
                }

                function Cn(r) {
                    return Ke(function(n, a) {
                        var u = -1,
                            g = a.length,
                            w = g > 1 ? a[g - 1] : t,
                            x = g > 2 ? a[2] : t;
                        for (w = r.length > 3 && typeof w == "function" ? (g--, w) : t, x && nr(a[0], a[1], x) && (w = g < 3 ? t : w, g = 1), n = ct(n); ++u < g;) {
                            var N = a[u];
                            N && r(n, N, u, w)
                        }
                        return n
                    })
                }

                function el(r, n) {
                    return function(a, u) {
                        if (a == null) return a;
                        if (!dr(a)) return r(a, u);
                        for (var g = a.length, w = n ? g : -1, x = ct(a);
                            (n ? w-- : ++w < g) && u(x[w], w, x) !== !1;);
                        return a
                    }
                }

                function tl(r) {
                    return function(n, a, u) {
                        for (var g = -1, w = ct(n), x = u(n), N = x.length; N--;) {
                            var q = x[r ? N : ++g];
                            if (a(w[q], q, w) === !1) break
                        }
                        return n
                    }
                }

                function Z0(r, n, a) {
                    var u = n & B,
                        g = us(r);

                    function w() {
                        var x = this && this !== Qe && this instanceof w ? g : r;
                        return x.apply(u ? a : this, arguments)
                    }
                    return w
                }

                function rl(r) {
                    return function(n) {
                        n = rt(n);
                        var a = En(n) ? Br(n) : t,
                            u = a ? a[0] : n.charAt(0),
                            g = a ? Mi(a, 1).join("") : n.slice(1);
                        return u[r]() + g
                    }
                }

                function An(r) {
                    return function(n) {
                        return Ba(ef(Zl(n).replace(Jn, "")), r, "")
                    }
                }

                function us(r) {
                    return function() {
                        var n = arguments;
                        switch (n.length) {
                            case 0:
                                return new r;
                            case 1:
                                return new r(n[0]);
                            case 2:
                                return new r(n[0], n[1]);
                            case 3:
                                return new r(n[0], n[1], n[2]);
                            case 4:
                                return new r(n[0], n[1], n[2], n[3]);
                            case 5:
                                return new r(n[0], n[1], n[2], n[3], n[4]);
                            case 6:
                                return new r(n[0], n[1], n[2], n[3], n[4], n[5]);
                            case 7:
                                return new r(n[0], n[1], n[2], n[3], n[4], n[5], n[6])
                        }
                        var a = On(r.prototype),
                            u = r.apply(a, n);
                        return _t(u) ? u : a
                    }
                }

                function ey(r, n, a) {
                    var u = us(r);

                    function g() {
                        for (var w = arguments.length, x = H(w), N = w, q = Tn(g); N--;) x[N] = arguments[N];
                        var G = w < 3 && x[0] !== q && x[w - 1] !== q ? [] : Ti(x, q);
                        if (w -= G.length, w < a) return al(r, n, Oo, g.placeholder, t, x, G, t, t, a - w);
                        var Y = this && this !== Qe && this instanceof g ? u : r;
                        return Bt(Y, this, x)
                    }
                    return g
                }

                function il(r) {
                    return function(n, a, u) {
                        var g = ct(n);
                        if (!dr(n)) {
                            var w = me(a, 3);
                            n = Kt(n), a = function(N) {
                                return w(g[N], N, g)
                            }
                        }
                        var x = r(n, a, u);
                        return x > -1 ? g[w ? n[x] : x] : t
                    }
                }

                function nl(r) {
                    return di(function(n) {
                        var a = n.length,
                            u = a,
                            g = $r.prototype.thru;
                        for (r && n.reverse(); u--;) {
                            var w = n[u];
                            if (typeof w != "function") throw new Nr(d);
                            if (g && !x && Ro(w) == "wrapper") var x = new $r([], !0)
                        }
                        for (u = x ? u : a; ++u < a;) {
                            w = n[u];
                            var N = Ro(w),
                                q = N == "wrapper" ? Dc(w) : t;
                            q && Pc(q[0]) && q[1] == (h | L | C | _) && !q[4].length && q[9] == 1 ? x = x[Ro(q[0])].apply(x, q[3]) : x = w.length == 1 && Pc(w) ? x[N]() : x.thru(w)
                        }
                        return function() {
                            var G = arguments,
                                Y = G[0];
                            if (x && G.length == 1 && Re(Y)) return x.plant(Y).value();
                            for (var re = 0, ce = a ? n[re].apply(this, G) : Y; ++re < a;) ce = n[re].call(this, ce);
                            return ce
                        }
                    })
                }

                function Oo(r, n, a, u, g, w, x, N, q, G) {
                    var Y = n & h,
                        re = n & B,
                        ce = n & Z,
                        pe = n & (L | I),
                        we = n & ee,
                        ze = ce ? t : us(r);

                    function be() {
                        for (var We = arguments.length, Xe = H(We), Ir = We; Ir--;) Xe[Ir] = arguments[Ir];
                        if (pe) var sr = Tn(be),
                            xr = fg(Xe, sr);
                        if (u && (Xe = Xh(Xe, u, g, pe)), w && (Xe = Zh(Xe, w, x, pe)), We -= xr, pe && We < G) {
                            var Rt = Ti(Xe, sr);
                            return al(r, n, Oo, be.placeholder, a, Xe, Rt, N, q, G - We)
                        }
                        var Vr = re ? a : this,
                            vi = ce ? Vr[r] : r;
                        return We = Xe.length, N ? Xe = by(Xe, N) : we && We > 1 && Xe.reverse(), Y && q < We && (Xe.length = q), this && this !== Qe && this instanceof be && (vi = ze || us(vi)), vi.apply(Vr, Xe)
                    }
                    return be
                }

                function sl(r, n) {
                    return function(a, u) {
                        return O0(a, r, n(u), {})
                    }
                }

                function Co(r, n) {
                    return function(a, u) {
                        var g;
                        if (a === t && u === t) return n;
                        if (a !== t && (g = a), u !== t) {
                            if (g === t) return u;
                            typeof a == "string" || typeof u == "string" ? (a = Dr(a), u = Dr(u)) : (a = Kh(a), u = Kh(u)), g = r(a, u)
                        }
                        return g
                    }
                }

                function wc(r) {
                    return di(function(n) {
                        return n = vt(n, Er(me())), Ke(function(a) {
                            var u = this;
                            return r(n, function(g) {
                                return Bt(g, u, a)
                            })
                        })
                    })
                }

                function Ao(r, n) {
                    n = n === t ? " " : Dr(n);
                    var a = n.length;
                    if (a < 2) return a ? fc(n, r) : n;
                    var u = fc(n, yo(r / Dn(n)));
                    return En(n) ? Mi(Br(u), 0, r).join("") : u.slice(0, r)
                }

                function ty(r, n, a, u) {
                    var g = n & B,
                        w = us(r);

                    function x() {
                        for (var N = -1, q = arguments.length, G = -1, Y = u.length, re = H(Y + q), ce = this && this !== Qe && this instanceof x ? w : r; ++G < Y;) re[G] = u[G];
                        for (; q--;) re[G++] = arguments[++N];
                        return Bt(ce, g ? a : this, re)
                    }
                    return x
                }

                function ol(r) {
                    return function(n, a, u) {
                        return u && typeof u != "number" && nr(n, a, u) && (a = u = t), n = yi(n), a === t ? (a = n, n = 0) : a = yi(a), u = u === t ? n < a ? 1 : -1 : yi(u), F0(n, a, u, r)
                    }
                }

                function To(r) {
                    return function(n, a) {
                        return typeof n == "string" && typeof a == "string" || (n = jr(n), a = jr(a)), r(n, a)
                    }
                }

                function al(r, n, a, u, g, w, x, N, q, G) {
                    var Y = n & L,
                        re = Y ? x : t,
                        ce = Y ? t : x,
                        pe = Y ? w : t,
                        we = Y ? t : w;
                    n |= Y ? C : A, n &= ~(Y ? A : C), n & $ || (n &= ~(B | Z));
                    var ze = [r, n, g, pe, re, we, ce, N, q, G],
                        be = a.apply(t, ze);
                    return Pc(r) && wl(be, ze), be.placeholder = u, bl(be, r, n)
                }

                function bc(r) {
                    var n = zt[r];
                    return function(a, u) {
                        if (a = jr(a), u = u == null ? 0 : Jt(je(u), 292), u && bh(a)) {
                            var g = (rt(a) + "e").split("e"),
                                w = n(g[0] + "e" + (+g[1] + u));
                            return g = (rt(w) + "e").split("e"), +(g[0] + "e" + (+g[1] - u))
                        }
                        return n(a)
                    }
                }
                var ry = xn && 1 / so(new xn([, -0]))[1] == J ? function(r) {
                    return new xn(r)
                } : Hc;

                function cl(r) {
                    return function(n) {
                        var a = Qt(n);
                        return a == Ee ? Ja(n) : a == Ie ? wg(n) : lg(n, r(n))
                    }
                }

                function fi(r, n, a, u, g, w, x, N) {
                    var q = n & Z;
                    if (!q && typeof r != "function") throw new Nr(d);
                    var G = u ? u.length : 0;
                    if (G || (n &= ~(C | A), u = g = t), x = x === t ? x : Ht(je(x), 0), N = N === t ? N : je(N), G -= g ? g.length : 0, n & A) {
                        var Y = u,
                            re = g;
                        u = g = t
                    }
                    var ce = q ? t : Dc(r),
                        pe = [r, n, a, u, g, Y, re, w, x, N];
                    if (ce && vy(pe, ce), r = pe[0], n = pe[1], a = pe[2], u = pe[3], g = pe[4], N = pe[9] = pe[9] === t ? q ? 0 : r.length : Ht(pe[9] - G, 0), !N && n & (L | I) && (n &= ~(L | I)), !n || n == B) var we = Z0(r, n, a);
                    else n == L || n == I ? we = ey(r, n, N) : (n == C || n == (B | C)) && !g.length ? we = ty(r, n, a, u) : we = Oo.apply(t, pe);
                    var ze = ce ? Hh : wl;
                    return bl(ze(we, pe), r, n)
                }

                function ul(r, n, a, u) {
                    return r === t || kr(r, In[a]) && !it.call(u, a) ? n : r
                }

                function hl(r, n, a, u, g, w) {
                    return _t(r) && _t(n) && (w.set(n, r), So(r, n, t, hl, w), w.delete(n)), r
                }

                function iy(r) {
                    return fs(r) ? t : r
                }

                function ll(r, n, a, u, g, w) {
                    var x = a & S,
                        N = r.length,
                        q = n.length;
                    if (N != q && !(x && q > N)) return !1;
                    var G = w.get(r),
                        Y = w.get(n);
                    if (G && Y) return G == n && Y == r;
                    var re = -1,
                        ce = !0,
                        pe = a & K ? new Qi : t;
                    for (w.set(r, n), w.set(n, r); ++re < N;) {
                        var we = r[re],
                            ze = n[re];
                        if (u) var be = x ? u(ze, we, re, n, r, w) : u(we, ze, re, r, n, w);
                        if (be !== t) {
                            if (be) continue;
                            ce = !1;
                            break
                        }
                        if (pe) {
                            if (!Ka(n, function(We, Xe) {
                                    if (!Xn(pe, Xe) && (we === We || g(we, We, a, u, w))) return pe.push(Xe)
                                })) {
                                ce = !1;
                                break
                            }
                        } else if (!(we === ze || g(we, ze, a, u, w))) {
                            ce = !1;
                            break
                        }
                    }
                    return w.delete(r), w.delete(n), ce
                }

                function ny(r, n, a, u, g, w, x) {
                    switch (a) {
                        case Oe:
                            if (r.byteLength != n.byteLength || r.byteOffset != n.byteOffset) return !1;
                            r = r.buffer, n = n.buffer;
                        case _e:
                            return !(r.byteLength != n.byteLength || !w(new lo(r), new lo(n)));
                        case F:
                        case U:
                        case He:
                            return kr(+r, +n);
                        case T:
                            return r.name == n.name && r.message == n.message;
                        case qe:
                        case Ne:
                            return r == n + "";
                        case Ee:
                            var N = Ja;
                        case Ie:
                            var q = u & S;
                            if (N || (N = so), r.size != n.size && !q) return !1;
                            var G = x.get(r);
                            if (G) return G == n;
                            u |= K, x.set(r, n);
                            var Y = ll(N(r), N(n), u, g, w, x);
                            return x.delete(r), Y;
                        case $e:
                            if (is) return is.call(r) == is.call(n)
                    }
                    return !1
                }

                function sy(r, n, a, u, g, w) {
                    var x = a & S,
                        N = _c(r),
                        q = N.length,
                        G = _c(n),
                        Y = G.length;
                    if (q != Y && !x) return !1;
                    for (var re = q; re--;) {
                        var ce = N[re];
                        if (!(x ? ce in n : it.call(n, ce))) return !1
                    }
                    var pe = w.get(r),
                        we = w.get(n);
                    if (pe && we) return pe == n && we == r;
                    var ze = !0;
                    w.set(r, n), w.set(n, r);
                    for (var be = x; ++re < q;) {
                        ce = N[re];
                        var We = r[ce],
                            Xe = n[ce];
                        if (u) var Ir = x ? u(Xe, We, ce, n, r, w) : u(We, Xe, ce, r, n, w);
                        if (!(Ir === t ? We === Xe || g(We, Xe, a, u, w) : Ir)) {
                            ze = !1;
                            break
                        }
                        be || (be = ce == "constructor")
                    }
                    if (ze && !be) {
                        var sr = r.constructor,
                            xr = n.constructor;
                        sr != xr && "constructor" in r && "constructor" in n && !(typeof sr == "function" && sr instanceof sr && typeof xr == "function" && xr instanceof xr) && (ze = !1)
                    }
                    return w.delete(r), w.delete(n), ze
                }

                function di(r) {
                    return Cc(vl(r, t, xl), r + "")
                }

                function _c(r) {
                    return Th(r, Kt, Ic)
                }

                function Ec(r) {
                    return Th(r, pr, fl)
                }
                var Dc = mo ? function(r) {
                    return mo.get(r)
                } : Hc;

                function Ro(r) {
                    for (var n = r.name + "", a = Pn[n], u = it.call(Pn, n) ? a.length : 0; u--;) {
                        var g = a[u],
                            w = g.func;
                        if (w == null || w == r) return g.name
                    }
                    return n
                }

                function Tn(r) {
                    var n = it.call(v, "placeholder") ? v : r;
                    return n.placeholder
                }

                function me() {
                    var r = v.iteratee || Fc;
                    return r = r === Fc ? $h : r, arguments.length ? r(arguments[0], arguments[1]) : r
                }

                function No(r, n) {
                    var a = r.__data__;
                    return dy(n) ? a[typeof n == "string" ? "string" : "hash"] : a.map
                }

                function Sc(r) {
                    for (var n = Kt(r), a = n.length; a--;) {
                        var u = n[a],
                            g = r[u];
                        n[a] = [u, g, gl(g)]
                    }
                    return n
                }

                function en(r, n) {
                    var a = yg(r, n);
                    return Nh(a) ? a : t
                }

                function oy(r) {
                    var n = it.call(r, Yi),
                        a = r[Yi];
                    try {
                        r[Yi] = t;
                        var u = !0
                    } catch {}
                    var g = uo.call(r);
                    return u && (n ? r[Yi] = a : delete r[Yi]), g
                }
                var Ic = Xa ? function(r) {
                        return r == null ? [] : (r = ct(r), Ci(Xa(r), function(n) {
                            return mh.call(r, n)
                        }))
                    } : Bc,
                    fl = Xa ? function(r) {
                        for (var n = []; r;) Ai(n, Ic(r)), r = fo(r);
                        return n
                    } : Bc,
                    Qt = ir;
                (Za && Qt(new Za(new ArrayBuffer(1))) != Oe || es && Qt(new es) != Ee || ec && Qt(ec.resolve()) != dt || xn && Qt(new xn) != Ie || ts && Qt(new ts) != Pe) && (Qt = function(r) {
                    var n = ir(r),
                        a = n == Le ? r.constructor : t,
                        u = a ? tn(a) : "";
                    if (u) switch (u) {
                        case Hg:
                            return Oe;
                        case Bg:
                            return Ee;
                        case Kg:
                            return dt;
                        case kg:
                            return Ie;
                        case Vg:
                            return Pe
                    }
                    return n
                });

                function ay(r, n, a) {
                    for (var u = -1, g = a.length; ++u < g;) {
                        var w = a[u],
                            x = w.size;
                        switch (w.type) {
                            case "drop":
                                r += x;
                                break;
                            case "dropRight":
                                n -= x;
                                break;
                            case "take":
                                n = Jt(n, r + x);
                                break;
                            case "takeRight":
                                r = Ht(r, n - x);
                                break
                        }
                    }
                    return {
                        start: r,
                        end: n
                    }
                }

                function cy(r) {
                    var n = r.match(ut);
                    return n ? n[1].split(Lt) : []
                }

                function dl(r, n, a) {
                    n = Ui(n, r);
                    for (var u = -1, g = n.length, w = !1; ++u < g;) {
                        var x = ti(n[u]);
                        if (!(w = r != null && a(r, x))) break;
                        r = r[x]
                    }
                    return w || ++u != g ? w : (g = r == null ? 0 : r.length, !!g && Fo(g) && pi(x, g) && (Re(r) || rn(r)))
                }

                function uy(r) {
                    var n = r.length,
                        a = new r.constructor(n);
                    return n && typeof r[0] == "string" && it.call(r, "index") && (a.index = r.index, a.input = r.input), a
                }

                function pl(r) {
                    return typeof r.constructor == "function" && !hs(r) ? On(fo(r)) : {}
                }

                function hy(r, n, a) {
                    var u = r.constructor;
                    switch (n) {
                        case _e:
                            return mc(r);
                        case F:
                        case U:
                            return new u(+r);
                        case Oe:
                            return W0(r, a);
                        case Be:
                        case xe:
                        case Ve:
                        case Ge:
                        case Ze:
                        case et:
                        case Je:
                        case er:
                        case hr:
                            return Jh(r, a);
                        case Ee:
                            return new u;
                        case He:
                        case Ne:
                            return new u(r);
                        case qe:
                            return G0(r);
                        case Ie:
                            return new u;
                        case $e:
                            return Y0(r)
                    }
                }

                function ly(r, n) {
                    var a = n.length;
                    if (!a) return r;
                    var u = a - 1;
                    return n[u] = (a > 1 ? "& " : "") + n[u], n = n.join(a > 2 ? ", " : " "), r.replace(Pt, `{
/* [wrapped with ` + n + `] */
`)
                }

                function fy(r) {
                    return Re(r) || rn(r) || !!(wh && r && r[wh])
                }

                function pi(r, n) {
                    var a = typeof r;
                    return n = n ? ? k, !!n && (a == "number" || a != "symbol" && Oa.test(r)) && r > -1 && r % 1 == 0 && r < n
                }

                function nr(r, n, a) {
                    if (!_t(a)) return !1;
                    var u = typeof n;
                    return (u == "number" ? dr(a) && pi(n, a.length) : u == "string" && n in a) ? kr(a[n], r) : !1
                }

                function xc(r, n) {
                    if (Re(r)) return !1;
                    var a = typeof r;
                    return a == "number" || a == "symbol" || a == "boolean" || r == null || Sr(r) ? !0 : $t.test(r) || !yt.test(r) || n != null && r in ct(n)
                }

                function dy(r) {
                    var n = typeof r;
                    return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? r !== "__proto__" : r === null
                }

                function Pc(r) {
                    var n = Ro(r),
                        a = v[n];
                    if (typeof a != "function" || !(n in Ye.prototype)) return !1;
                    if (r === a) return !0;
                    var u = Dc(a);
                    return !!u && r === u[0]
                }

                function py(r) {
                    return !!gh && gh in r
                }
                var gy = ao ? gi : Kc;

                function hs(r) {
                    var n = r && r.constructor,
                        a = typeof n == "function" && n.prototype || In;
                    return r === a
                }

                function gl(r) {
                    return r === r && !_t(r)
                }

                function yl(r, n) {
                    return function(a) {
                        return a == null ? !1 : a[r] === n && (n !== t || r in ct(a))
                    }
                }

                function yy(r) {
                    var n = jo(r, function(u) {
                            return a.size === y && a.clear(), u
                        }),
                        a = n.cache;
                    return n
                }

                function vy(r, n) {
                    var a = r[1],
                        u = n[1],
                        g = a | u,
                        w = g < (B | Z | h),
                        x = u == h && a == L || u == h && a == _ && r[7].length <= n[8] || u == (h | _) && n[7].length <= n[8] && a == L;
                    if (!(w || x)) return r;
                    u & B && (r[2] = n[2], g |= a & B ? 0 : $);
                    var N = n[3];
                    if (N) {
                        var q = r[3];
                        r[3] = q ? Xh(q, N, n[4]) : N, r[4] = q ? Ti(r[3], m) : n[4]
                    }
                    return N = n[5], N && (q = r[5], r[5] = q ? Zh(q, N, n[6]) : N, r[6] = q ? Ti(r[5], m) : n[6]), N = n[7], N && (r[7] = N), u & h && (r[8] = r[8] == null ? n[8] : Jt(r[8], n[8])), r[9] == null && (r[9] = n[9]), r[0] = n[0], r[1] = g, r
                }

                function my(r) {
                    var n = [];
                    if (r != null)
                        for (var a in ct(r)) n.push(a);
                    return n
                }

                function wy(r) {
                    return uo.call(r)
                }

                function vl(r, n, a) {
                    return n = Ht(n === t ? r.length - 1 : n, 0),
                        function() {
                            for (var u = arguments, g = -1, w = Ht(u.length - n, 0), x = H(w); ++g < w;) x[g] = u[n + g];
                            g = -1;
                            for (var N = H(n + 1); ++g < n;) N[g] = u[g];
                            return N[n] = a(x), Bt(r, this, N)
                        }
                }

                function ml(r, n) {
                    return n.length < 2 ? r : Zi(r, Mr(n, 0, -1))
                }

                function by(r, n) {
                    for (var a = r.length, u = Jt(n.length, a), g = fr(r); u--;) {
                        var w = n[u];
                        r[u] = pi(w, a) ? g[w] : t
                    }
                    return r
                }

                function Oc(r, n) {
                    if (!(n === "constructor" && typeof r[n] == "function") && n != "__proto__") return r[n]
                }
                var wl = _l(Hh),
                    ls = Ug || function(r, n) {
                        return Qe.setTimeout(r, n)
                    },
                    Cc = _l(B0);

                function bl(r, n, a) {
                    var u = n + "";
                    return Cc(r, ly(u, _y(cy(u), a)))
                }

                function _l(r) {
                    var n = 0,
                        a = 0;
                    return function() {
                        var u = qg(),
                            g = ye - (u - a);
                        if (a = u, g > 0) {
                            if (++n >= ge) return arguments[0]
                        } else n = 0;
                        return r.apply(t, arguments)
                    }
                }

                function $o(r, n) {
                    var a = -1,
                        u = r.length,
                        g = u - 1;
                    for (n = n === t ? u : n; ++a < n;) {
                        var w = lc(a, g),
                            x = r[w];
                        r[w] = r[a], r[a] = x
                    }
                    return r.length = n, r
                }
                var El = yy(function(r) {
                    var n = [];
                    return r.charCodeAt(0) === 46 && n.push(""), r.replace(Ut, function(a, u, g, w) {
                        n.push(g ? w.replace(Ea, "$1") : u || a)
                    }), n
                });

                function ti(r) {
                    if (typeof r == "string" || Sr(r)) return r;
                    var n = r + "";
                    return n == "0" && 1 / r == -J ? "-0" : n
                }

                function tn(r) {
                    if (r != null) {
                        try {
                            return co.call(r)
                        } catch {}
                        try {
                            return r + ""
                        } catch {}
                    }
                    return ""
                }

                function _y(r, n) {
                    return Rr(Se, function(a) {
                        var u = "_." + a[0];
                        n & a[1] && !io(r, u) && r.push(u)
                    }), r.sort()
                }

                function Dl(r) {
                    if (r instanceof Ye) return r.clone();
                    var n = new $r(r.__wrapped__, r.__chain__);
                    return n.__actions__ = fr(r.__actions__), n.__index__ = r.__index__, n.__values__ = r.__values__, n
                }

                function Ey(r, n, a) {
                    (a ? nr(r, n, a) : n === t) ? n = 1: n = Ht(je(n), 0);
                    var u = r == null ? 0 : r.length;
                    if (!u || n < 1) return [];
                    for (var g = 0, w = 0, x = H(yo(u / n)); g < u;) x[w++] = Mr(r, g, g += n);
                    return x
                }

                function Dy(r) {
                    for (var n = -1, a = r == null ? 0 : r.length, u = 0, g = []; ++n < a;) {
                        var w = r[n];
                        w && (g[u++] = w)
                    }
                    return g
                }

                function Sy() {
                    var r = arguments.length;
                    if (!r) return [];
                    for (var n = H(r - 1), a = arguments[0], u = r; u--;) n[u - 1] = arguments[u];
                    return Ai(Re(a) ? fr(a) : [a], Wt(n, 1))
                }
                var Iy = Ke(function(r, n) {
                        return Tt(r) ? ss(r, Wt(n, 1, Tt, !0)) : []
                    }),
                    xy = Ke(function(r, n) {
                        var a = Lr(n);
                        return Tt(a) && (a = t), Tt(r) ? ss(r, Wt(n, 1, Tt, !0), me(a, 2)) : []
                    }),
                    Py = Ke(function(r, n) {
                        var a = Lr(n);
                        return Tt(a) && (a = t), Tt(r) ? ss(r, Wt(n, 1, Tt, !0), t, a) : []
                    });

                function Oy(r, n, a) {
                    var u = r == null ? 0 : r.length;
                    return u ? (n = a || n === t ? 1 : je(n), Mr(r, n < 0 ? 0 : n, u)) : []
                }

                function Cy(r, n, a) {
                    var u = r == null ? 0 : r.length;
                    return u ? (n = a || n === t ? 1 : je(n), n = u - n, Mr(r, 0, n < 0 ? 0 : n)) : []
                }

                function Ay(r, n) {
                    return r && r.length ? xo(r, me(n, 3), !0, !0) : []
                }

                function Ty(r, n) {
                    return r && r.length ? xo(r, me(n, 3), !0) : []
                }

                function Ry(r, n, a, u) {
                    var g = r == null ? 0 : r.length;
                    return g ? (a && typeof a != "number" && nr(r, n, a) && (a = 0, u = g), S0(r, n, a, u)) : []
                }

                function Sl(r, n, a) {
                    var u = r == null ? 0 : r.length;
                    if (!u) return -1;
                    var g = a == null ? 0 : je(a);
                    return g < 0 && (g = Ht(u + g, 0)), no(r, me(n, 3), g)
                }

                function Il(r, n, a) {
                    var u = r == null ? 0 : r.length;
                    if (!u) return -1;
                    var g = u - 1;
                    return a !== t && (g = je(a), g = a < 0 ? Ht(u + g, 0) : Jt(g, u - 1)), no(r, me(n, 3), g, !0)
                }

                function xl(r) {
                    var n = r == null ? 0 : r.length;
                    return n ? Wt(r, 1) : []
                }

                function Ny(r) {
                    var n = r == null ? 0 : r.length;
                    return n ? Wt(r, J) : []
                }

                function $y(r, n) {
                    var a = r == null ? 0 : r.length;
                    return a ? (n = n === t ? 1 : je(n), Wt(r, n)) : []
                }

                function Uy(r) {
                    for (var n = -1, a = r == null ? 0 : r.length, u = {}; ++n < a;) {
                        var g = r[n];
                        u[g[0]] = g[1]
                    }
                    return u
                }

                function Pl(r) {
                    return r && r.length ? r[0] : t
                }

                function My(r, n, a) {
                    var u = r == null ? 0 : r.length;
                    if (!u) return -1;
                    var g = a == null ? 0 : je(a);
                    return g < 0 && (g = Ht(u + g, 0)), _n(r, n, g)
                }

                function Ly(r) {
                    var n = r == null ? 0 : r.length;
                    return n ? Mr(r, 0, -1) : []
                }
                var jy = Ke(function(r) {
                        var n = vt(r, yc);
                        return n.length && n[0] === r[0] ? oc(n) : []
                    }),
                    qy = Ke(function(r) {
                        var n = Lr(r),
                            a = vt(r, yc);
                        return n === Lr(a) ? n = t : a.pop(), a.length && a[0] === r[0] ? oc(a, me(n, 2)) : []
                    }),
                    Fy = Ke(function(r) {
                        var n = Lr(r),
                            a = vt(r, yc);
                        return n = typeof n == "function" ? n : t, n && a.pop(), a.length && a[0] === r[0] ? oc(a, t, n) : []
                    });

                function zy(r, n) {
                    return r == null ? "" : Lg.call(r, n)
                }

                function Lr(r) {
                    var n = r == null ? 0 : r.length;
                    return n ? r[n - 1] : t
                }

                function Hy(r, n, a) {
                    var u = r == null ? 0 : r.length;
                    if (!u) return -1;
                    var g = u;
                    return a !== t && (g = je(a), g = g < 0 ? Ht(u + g, 0) : Jt(g, u - 1)), n === n ? _g(r, n, g) : no(r, ah, g, !0)
                }

                function By(r, n) {
                    return r && r.length ? jh(r, je(n)) : t
                }
                var Ky = Ke(Ol);

                function Ol(r, n) {
                    return r && r.length && n && n.length ? hc(r, n) : r
                }

                function ky(r, n, a) {
                    return r && r.length && n && n.length ? hc(r, n, me(a, 2)) : r
                }

                function Vy(r, n, a) {
                    return r && r.length && n && n.length ? hc(r, n, t, a) : r
                }
                var Wy = di(function(r, n) {
                    var a = r == null ? 0 : r.length,
                        u = rc(r, n);
                    return zh(r, vt(n, function(g) {
                        return pi(g, a) ? +g : g
                    }).sort(Qh)), u
                });

                function Gy(r, n) {
                    var a = [];
                    if (!(r && r.length)) return a;
                    var u = -1,
                        g = [],
                        w = r.length;
                    for (n = me(n, 3); ++u < w;) {
                        var x = r[u];
                        n(x, u, r) && (a.push(x), g.push(u))
                    }
                    return zh(r, g), a
                }

                function Ac(r) {
                    return r == null ? r : zg.call(r)
                }

                function Yy(r, n, a) {
                    var u = r == null ? 0 : r.length;
                    return u ? (a && typeof a != "number" && nr(r, n, a) ? (n = 0, a = u) : (n = n == null ? 0 : je(n), a = a === t ? u : je(a)), Mr(r, n, a)) : []
                }

                function Jy(r, n) {
                    return Io(r, n)
                }

                function Qy(r, n, a) {
                    return dc(r, n, me(a, 2))
                }

                function Xy(r, n) {
                    var a = r == null ? 0 : r.length;
                    if (a) {
                        var u = Io(r, n);
                        if (u < a && kr(r[u], n)) return u
                    }
                    return -1
                }

                function Zy(r, n) {
                    return Io(r, n, !0)
                }

                function ev(r, n, a) {
                    return dc(r, n, me(a, 2), !0)
                }

                function tv(r, n) {
                    var a = r == null ? 0 : r.length;
                    if (a) {
                        var u = Io(r, n, !0) - 1;
                        if (kr(r[u], n)) return u
                    }
                    return -1
                }

                function rv(r) {
                    return r && r.length ? Bh(r) : []
                }

                function iv(r, n) {
                    return r && r.length ? Bh(r, me(n, 2)) : []
                }

                function nv(r) {
                    var n = r == null ? 0 : r.length;
                    return n ? Mr(r, 1, n) : []
                }

                function sv(r, n, a) {
                    return r && r.length ? (n = a || n === t ? 1 : je(n), Mr(r, 0, n < 0 ? 0 : n)) : []
                }

                function ov(r, n, a) {
                    var u = r == null ? 0 : r.length;
                    return u ? (n = a || n === t ? 1 : je(n), n = u - n, Mr(r, n < 0 ? 0 : n, u)) : []
                }

                function av(r, n) {
                    return r && r.length ? xo(r, me(n, 3), !1, !0) : []
                }

                function cv(r, n) {
                    return r && r.length ? xo(r, me(n, 3)) : []
                }
                var uv = Ke(function(r) {
                        return $i(Wt(r, 1, Tt, !0))
                    }),
                    hv = Ke(function(r) {
                        var n = Lr(r);
                        return Tt(n) && (n = t), $i(Wt(r, 1, Tt, !0), me(n, 2))
                    }),
                    lv = Ke(function(r) {
                        var n = Lr(r);
                        return n = typeof n == "function" ? n : t, $i(Wt(r, 1, Tt, !0), t, n)
                    });

                function fv(r) {
                    return r && r.length ? $i(r) : []
                }

                function dv(r, n) {
                    return r && r.length ? $i(r, me(n, 2)) : []
                }

                function pv(r, n) {
                    return n = typeof n == "function" ? n : t, r && r.length ? $i(r, t, n) : []
                }

                function Tc(r) {
                    if (!(r && r.length)) return [];
                    var n = 0;
                    return r = Ci(r, function(a) {
                        if (Tt(a)) return n = Ht(a.length, n), !0
                    }), Ga(n, function(a) {
                        return vt(r, ka(a))
                    })
                }

                function Cl(r, n) {
                    if (!(r && r.length)) return [];
                    var a = Tc(r);
                    return n == null ? a : vt(a, function(u) {
                        return Bt(n, t, u)
                    })
                }
                var gv = Ke(function(r, n) {
                        return Tt(r) ? ss(r, n) : []
                    }),
                    yv = Ke(function(r) {
                        return gc(Ci(r, Tt))
                    }),
                    vv = Ke(function(r) {
                        var n = Lr(r);
                        return Tt(n) && (n = t), gc(Ci(r, Tt), me(n, 2))
                    }),
                    mv = Ke(function(r) {
                        var n = Lr(r);
                        return n = typeof n == "function" ? n : t, gc(Ci(r, Tt), t, n)
                    }),
                    wv = Ke(Tc);

                function bv(r, n) {
                    return Wh(r || [], n || [], ns)
                }

                function _v(r, n) {
                    return Wh(r || [], n || [], cs)
                }
                var Ev = Ke(function(r) {
                    var n = r.length,
                        a = n > 1 ? r[n - 1] : t;
                    return a = typeof a == "function" ? (r.pop(), a) : t, Cl(r, a)
                });

                function Al(r) {
                    var n = v(r);
                    return n.__chain__ = !0, n
                }

                function Dv(r, n) {
                    return n(r), r
                }

                function Uo(r, n) {
                    return n(r)
                }
                var Sv = di(function(r) {
                    var n = r.length,
                        a = n ? r[0] : 0,
                        u = this.__wrapped__,
                        g = function(w) {
                            return rc(w, r)
                        };
                    return n > 1 || this.__actions__.length || !(u instanceof Ye) || !pi(a) ? this.thru(g) : (u = u.slice(a, +a + (n ? 1 : 0)), u.__actions__.push({
                        func: Uo,
                        args: [g],
                        thisArg: t
                    }), new $r(u, this.__chain__).thru(function(w) {
                        return n && !w.length && w.push(t), w
                    }))
                });

                function Iv() {
                    return Al(this)
                }

                function xv() {
                    return new $r(this.value(), this.__chain__)
                }

                function Pv() {
                    this.__values__ === t && (this.__values__ = Kl(this.value()));
                    var r = this.__index__ >= this.__values__.length,
                        n = r ? t : this.__values__[this.__index__++];
                    return {
                        done: r,
                        value: n
                    }
                }

                function Ov() {
                    return this
                }

                function Cv(r) {
                    for (var n, a = this; a instanceof bo;) {
                        var u = Dl(a);
                        u.__index__ = 0, u.__values__ = t, n ? g.__wrapped__ = u : n = u;
                        var g = u;
                        a = a.__wrapped__
                    }
                    return g.__wrapped__ = r, n
                }

                function Av() {
                    var r = this.__wrapped__;
                    if (r instanceof Ye) {
                        var n = r;
                        return this.__actions__.length && (n = new Ye(this)), n = n.reverse(), n.__actions__.push({
                            func: Uo,
                            args: [Ac],
                            thisArg: t
                        }), new $r(n, this.__chain__)
                    }
                    return this.thru(Ac)
                }

                function Tv() {
                    return Vh(this.__wrapped__, this.__actions__)
                }
                var Rv = Po(function(r, n, a) {
                    it.call(r, a) ? ++r[a] : li(r, a, 1)
                });

                function Nv(r, n, a) {
                    var u = Re(r) ? sh : D0;
                    return a && nr(r, n, a) && (n = t), u(r, me(n, 3))
                }

                function $v(r, n) {
                    var a = Re(r) ? Ci : Ch;
                    return a(r, me(n, 3))
                }
                var Uv = il(Sl),
                    Mv = il(Il);

                function Lv(r, n) {
                    return Wt(Mo(r, n), 1)
                }

                function jv(r, n) {
                    return Wt(Mo(r, n), J)
                }

                function qv(r, n, a) {
                    return a = a === t ? 1 : je(a), Wt(Mo(r, n), a)
                }

                function Tl(r, n) {
                    var a = Re(r) ? Rr : Ni;
                    return a(r, me(n, 3))
                }

                function Rl(r, n) {
                    var a = Re(r) ? ng : Oh;
                    return a(r, me(n, 3))
                }
                var Fv = Po(function(r, n, a) {
                    it.call(r, a) ? r[a].push(n) : li(r, a, [n])
                });

                function zv(r, n, a, u) {
                    r = dr(r) ? r : Nn(r), a = a && !u ? je(a) : 0;
                    var g = r.length;
                    return a < 0 && (a = Ht(g + a, 0)), zo(r) ? a <= g && r.indexOf(n, a) > -1 : !!g && _n(r, n, a) > -1
                }
                var Hv = Ke(function(r, n, a) {
                        var u = -1,
                            g = typeof n == "function",
                            w = dr(r) ? H(r.length) : [];
                        return Ni(r, function(x) {
                            w[++u] = g ? Bt(n, x, a) : os(x, n, a)
                        }), w
                    }),
                    Bv = Po(function(r, n, a) {
                        li(r, a, n)
                    });

                function Mo(r, n) {
                    var a = Re(r) ? vt : Uh;
                    return a(r, me(n, 3))
                }

                function Kv(r, n, a, u) {
                    return r == null ? [] : (Re(n) || (n = n == null ? [] : [n]), a = u ? t : a, Re(a) || (a = a == null ? [] : [a]), qh(r, n, a))
                }
                var kv = Po(function(r, n, a) {
                    r[a ? 0 : 1].push(n)
                }, function() {
                    return [
                        [],
                        []
                    ]
                });

                function Vv(r, n, a) {
                    var u = Re(r) ? Ba : uh,
                        g = arguments.length < 3;
                    return u(r, me(n, 4), a, g, Ni)
                }

                function Wv(r, n, a) {
                    var u = Re(r) ? sg : uh,
                        g = arguments.length < 3;
                    return u(r, me(n, 4), a, g, Oh)
                }

                function Gv(r, n) {
                    var a = Re(r) ? Ci : Ch;
                    return a(r, qo(me(n, 3)))
                }

                function Yv(r) {
                    var n = Re(r) ? Sh : z0;
                    return n(r)
                }

                function Jv(r, n, a) {
                    (a ? nr(r, n, a) : n === t) ? n = 1: n = je(n);
                    var u = Re(r) ? m0 : H0;
                    return u(r, n)
                }

                function Qv(r) {
                    var n = Re(r) ? w0 : K0;
                    return n(r)
                }

                function Xv(r) {
                    if (r == null) return 0;
                    if (dr(r)) return zo(r) ? Dn(r) : r.length;
                    var n = Qt(r);
                    return n == Ee || n == Ie ? r.size : cc(r).length
                }

                function Zv(r, n, a) {
                    var u = Re(r) ? Ka : k0;
                    return a && nr(r, n, a) && (n = t), u(r, me(n, 3))
                }
                var em = Ke(function(r, n) {
                        if (r == null) return [];
                        var a = n.length;
                        return a > 1 && nr(r, n[0], n[1]) ? n = [] : a > 2 && nr(n[0], n[1], n[2]) && (n = [n[0]]), qh(r, Wt(n, 1), [])
                    }),
                    Lo = $g || function() {
                        return Qe.Date.now()
                    };

                function tm(r, n) {
                    if (typeof n != "function") throw new Nr(d);
                    return r = je(r),
                        function() {
                            if (--r < 1) return n.apply(this, arguments)
                        }
                }

                function Nl(r, n, a) {
                    return n = a ? t : n, n = r && n == null ? r.length : n, fi(r, h, t, t, t, t, n)
                }

                function $l(r, n) {
                    var a;
                    if (typeof n != "function") throw new Nr(d);
                    return r = je(r),
                        function() {
                            return --r > 0 && (a = n.apply(this, arguments)), r <= 1 && (n = t), a
                        }
                }
                var Rc = Ke(function(r, n, a) {
                        var u = B;
                        if (a.length) {
                            var g = Ti(a, Tn(Rc));
                            u |= C
                        }
                        return fi(r, u, n, a, g)
                    }),
                    Ul = Ke(function(r, n, a) {
                        var u = B | Z;
                        if (a.length) {
                            var g = Ti(a, Tn(Ul));
                            u |= C
                        }
                        return fi(n, u, r, a, g)
                    });

                function Ml(r, n, a) {
                    n = a ? t : n;
                    var u = fi(r, L, t, t, t, t, t, n);
                    return u.placeholder = Ml.placeholder, u
                }

                function Ll(r, n, a) {
                    n = a ? t : n;
                    var u = fi(r, I, t, t, t, t, t, n);
                    return u.placeholder = Ll.placeholder, u
                }

                function jl(r, n, a) {
                    var u, g, w, x, N, q, G = 0,
                        Y = !1,
                        re = !1,
                        ce = !0;
                    if (typeof r != "function") throw new Nr(d);
                    n = jr(n) || 0, _t(a) && (Y = !!a.leading, re = "maxWait" in a, w = re ? Ht(jr(a.maxWait) || 0, n) : w, ce = "trailing" in a ? !!a.trailing : ce);

                    function pe(Rt) {
                        var Vr = u,
                            vi = g;
                        return u = g = t, G = Rt, x = r.apply(vi, Vr), x
                    }

                    function we(Rt) {
                        return G = Rt, N = ls(We, n), Y ? pe(Rt) : x
                    }

                    function ze(Rt) {
                        var Vr = Rt - q,
                            vi = Rt - G,
                            nf = n - Vr;
                        return re ? Jt(nf, w - vi) : nf
                    }

                    function be(Rt) {
                        var Vr = Rt - q,
                            vi = Rt - G;
                        return q === t || Vr >= n || Vr < 0 || re && vi >= w
                    }

                    function We() {
                        var Rt = Lo();
                        if (be(Rt)) return Xe(Rt);
                        N = ls(We, ze(Rt))
                    }

                    function Xe(Rt) {
                        return N = t, ce && u ? pe(Rt) : (u = g = t, x)
                    }

                    function Ir() {
                        N !== t && Gh(N), G = 0, u = q = g = N = t
                    }

                    function sr() {
                        return N === t ? x : Xe(Lo())
                    }

                    function xr() {
                        var Rt = Lo(),
                            Vr = be(Rt);
                        if (u = arguments, g = this, q = Rt, Vr) {
                            if (N === t) return we(q);
                            if (re) return Gh(N), N = ls(We, n), pe(q)
                        }
                        return N === t && (N = ls(We, n)), x
                    }
                    return xr.cancel = Ir, xr.flush = sr, xr
                }
                var rm = Ke(function(r, n) {
                        return Ph(r, 1, n)
                    }),
                    im = Ke(function(r, n, a) {
                        return Ph(r, jr(n) || 0, a)
                    });

                function nm(r) {
                    return fi(r, ee)
                }

                function jo(r, n) {
                    if (typeof r != "function" || n != null && typeof n != "function") throw new Nr(d);
                    var a = function() {
                        var u = arguments,
                            g = n ? n.apply(this, u) : u[0],
                            w = a.cache;
                        if (w.has(g)) return w.get(g);
                        var x = r.apply(this, u);
                        return a.cache = w.set(g, x) || w, x
                    };
                    return a.cache = new(jo.Cache || hi), a
                }
                jo.Cache = hi;

                function qo(r) {
                    if (typeof r != "function") throw new Nr(d);
                    return function() {
                        var n = arguments;
                        switch (n.length) {
                            case 0:
                                return !r.call(this);
                            case 1:
                                return !r.call(this, n[0]);
                            case 2:
                                return !r.call(this, n[0], n[1]);
                            case 3:
                                return !r.call(this, n[0], n[1], n[2])
                        }
                        return !r.apply(this, n)
                    }
                }

                function sm(r) {
                    return $l(2, r)
                }
                var om = V0(function(r, n) {
                        n = n.length == 1 && Re(n[0]) ? vt(n[0], Er(me())) : vt(Wt(n, 1), Er(me()));
                        var a = n.length;
                        return Ke(function(u) {
                            for (var g = -1, w = Jt(u.length, a); ++g < w;) u[g] = n[g].call(this, u[g]);
                            return Bt(r, this, u)
                        })
                    }),
                    Nc = Ke(function(r, n) {
                        var a = Ti(n, Tn(Nc));
                        return fi(r, C, t, n, a)
                    }),
                    ql = Ke(function(r, n) {
                        var a = Ti(n, Tn(ql));
                        return fi(r, A, t, n, a)
                    }),
                    am = di(function(r, n) {
                        return fi(r, _, t, t, t, n)
                    });

                function cm(r, n) {
                    if (typeof r != "function") throw new Nr(d);
                    return n = n === t ? n : je(n), Ke(r, n)
                }

                function um(r, n) {
                    if (typeof r != "function") throw new Nr(d);
                    return n = n == null ? 0 : Ht(je(n), 0), Ke(function(a) {
                        var u = a[n],
                            g = Mi(a, 0, n);
                        return u && Ai(g, u), Bt(r, this, g)
                    })
                }

                function hm(r, n, a) {
                    var u = !0,
                        g = !0;
                    if (typeof r != "function") throw new Nr(d);
                    return _t(a) && (u = "leading" in a ? !!a.leading : u, g = "trailing" in a ? !!a.trailing : g), jl(r, n, {
                        leading: u,
                        maxWait: n,
                        trailing: g
                    })
                }

                function lm(r) {
                    return Nl(r, 1)
                }

                function fm(r, n) {
                    return Nc(vc(n), r)
                }

                function dm() {
                    if (!arguments.length) return [];
                    var r = arguments[0];
                    return Re(r) ? r : [r]
                }

                function pm(r) {
                    return Ur(r, O)
                }

                function gm(r, n) {
                    return n = typeof n == "function" ? n : t, Ur(r, O, n)
                }

                function ym(r) {
                    return Ur(r, b | O)
                }

                function vm(r, n) {
                    return n = typeof n == "function" ? n : t, Ur(r, b | O, n)
                }

                function mm(r, n) {
                    return n == null || xh(r, n, Kt(n))
                }

                function kr(r, n) {
                    return r === n || r !== r && n !== n
                }
                var wm = To(sc),
                    bm = To(function(r, n) {
                        return r >= n
                    }),
                    rn = Rh(function() {
                        return arguments
                    }()) ? Rh : function(r) {
                        return Ot(r) && it.call(r, "callee") && !mh.call(r, "callee")
                    },
                    Re = H.isArray,
                    _m = rr ? Er(rr) : C0;

                function dr(r) {
                    return r != null && Fo(r.length) && !gi(r)
                }

                function Tt(r) {
                    return Ot(r) && dr(r)
                }

                function Em(r) {
                    return r === !0 || r === !1 || Ot(r) && ir(r) == F
                }
                var Li = Mg || Kc,
                    Dm = Hr ? Er(Hr) : A0;

                function Sm(r) {
                    return Ot(r) && r.nodeType === 1 && !fs(r)
                }

                function Im(r) {
                    if (r == null) return !0;
                    if (dr(r) && (Re(r) || typeof r == "string" || typeof r.splice == "function" || Li(r) || Rn(r) || rn(r))) return !r.length;
                    var n = Qt(r);
                    if (n == Ee || n == Ie) return !r.size;
                    if (hs(r)) return !cc(r).length;
                    for (var a in r)
                        if (it.call(r, a)) return !1;
                    return !0
                }

                function xm(r, n) {
                    return as(r, n)
                }

                function Pm(r, n, a) {
                    a = typeof a == "function" ? a : t;
                    var u = a ? a(r, n) : t;
                    return u === t ? as(r, n, t, a) : !!u
                }

                function $c(r) {
                    if (!Ot(r)) return !1;
                    var n = ir(r);
                    return n == T || n == l || typeof r.message == "string" && typeof r.name == "string" && !fs(r)
                }

                function Om(r) {
                    return typeof r == "number" && bh(r)
                }

                function gi(r) {
                    if (!_t(r)) return !1;
                    var n = ir(r);
                    return n == se || n == he || n == z || n == pt
                }

                function Fl(r) {
                    return typeof r == "number" && r == je(r)
                }

                function Fo(r) {
                    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= k
                }

                function _t(r) {
                    var n = typeof r;
                    return r != null && (n == "object" || n == "function")
                }

                function Ot(r) {
                    return r != null && typeof r == "object"
                }
                var zl = Tr ? Er(Tr) : R0;

                function Cm(r, n) {
                    return r === n || ac(r, n, Sc(n))
                }

                function Am(r, n, a) {
                    return a = typeof a == "function" ? a : t, ac(r, n, Sc(n), a)
                }

                function Tm(r) {
                    return Hl(r) && r != +r
                }

                function Rm(r) {
                    if (gy(r)) throw new Ce(c);
                    return Nh(r)
                }

                function Nm(r) {
                    return r === null
                }

                function $m(r) {
                    return r == null
                }

                function Hl(r) {
                    return typeof r == "number" || Ot(r) && ir(r) == He
                }

                function fs(r) {
                    if (!Ot(r) || ir(r) != Le) return !1;
                    var n = fo(r);
                    if (n === null) return !0;
                    var a = it.call(n, "constructor") && n.constructor;
                    return typeof a == "function" && a instanceof a && co.call(a) == Ag
                }
                var Uc = Xr ? Er(Xr) : N0;

                function Um(r) {
                    return Fl(r) && r >= -k && r <= k
                }
                var Bl = Qn ? Er(Qn) : $0;

                function zo(r) {
                    return typeof r == "string" || !Re(r) && Ot(r) && ir(r) == Ne
                }

                function Sr(r) {
                    return typeof r == "symbol" || Ot(r) && ir(r) == $e
                }
                var Rn = Gi ? Er(Gi) : U0;

                function Mm(r) {
                    return r === t
                }

                function Lm(r) {
                    return Ot(r) && Qt(r) == Pe
                }

                function jm(r) {
                    return Ot(r) && ir(r) == Ue
                }
                var qm = To(uc),
                    Fm = To(function(r, n) {
                        return r <= n
                    });

                function Kl(r) {
                    if (!r) return [];
                    if (dr(r)) return zo(r) ? Br(r) : fr(r);
                    if (Zn && r[Zn]) return mg(r[Zn]());
                    var n = Qt(r),
                        a = n == Ee ? Ja : n == Ie ? so : Nn;
                    return a(r)
                }

                function yi(r) {
                    if (!r) return r === 0 ? r : 0;
                    if (r = jr(r), r === J || r === -J) {
                        var n = r < 0 ? -1 : 1;
                        return n * V
                    }
                    return r === r ? r : 0
                }

                function je(r) {
                    var n = yi(r),
                        a = n % 1;
                    return n === n ? a ? n - a : n : 0
                }

                function kl(r) {
                    return r ? Xi(je(r), 0, ie) : 0
                }

                function jr(r) {
                    if (typeof r == "number") return r;
                    if (Sr(r)) return te;
                    if (_t(r)) {
                        var n = typeof r.valueOf == "function" ? r.valueOf() : r;
                        r = _t(n) ? n + "" : n
                    }
                    if (typeof r != "string") return r === 0 ? r : +r;
                    r = hh(r);
                    var a = Ia.test(r);
                    return a || Pa.test(r) ? Te(r.slice(2), a ? 2 : 8) : Sa.test(r) ? te : +r
                }

                function Vl(r) {
                    return ei(r, pr(r))
                }

                function zm(r) {
                    return r ? Xi(je(r), -k, k) : r === 0 ? r : 0
                }

                function rt(r) {
                    return r == null ? "" : Dr(r)
                }
                var Hm = Cn(function(r, n) {
                        if (hs(n) || dr(n)) {
                            ei(n, Kt(n), r);
                            return
                        }
                        for (var a in n) it.call(n, a) && ns(r, a, n[a])
                    }),
                    Wl = Cn(function(r, n) {
                        ei(n, pr(n), r)
                    }),
                    Ho = Cn(function(r, n, a, u) {
                        ei(n, pr(n), r, u)
                    }),
                    Bm = Cn(function(r, n, a, u) {
                        ei(n, Kt(n), r, u)
                    }),
                    Km = di(rc);

                function km(r, n) {
                    var a = On(r);
                    return n == null ? a : Ih(a, n)
                }
                var Vm = Ke(function(r, n) {
                        r = ct(r);
                        var a = -1,
                            u = n.length,
                            g = u > 2 ? n[2] : t;
                        for (g && nr(n[0], n[1], g) && (u = 1); ++a < u;)
                            for (var w = n[a], x = pr(w), N = -1, q = x.length; ++N < q;) {
                                var G = x[N],
                                    Y = r[G];
                                (Y === t || kr(Y, In[G]) && !it.call(r, G)) && (r[G] = w[G])
                            }
                        return r
                    }),
                    Wm = Ke(function(r) {
                        return r.push(t, hl), Bt(Gl, t, r)
                    });

                function Gm(r, n) {
                    return oh(r, me(n, 3), Zr)
                }

                function Ym(r, n) {
                    return oh(r, me(n, 3), nc)
                }

                function Jm(r, n) {
                    return r == null ? r : ic(r, me(n, 3), pr)
                }

                function Qm(r, n) {
                    return r == null ? r : Ah(r, me(n, 3), pr)
                }

                function Xm(r, n) {
                    return r && Zr(r, me(n, 3))
                }

                function Zm(r, n) {
                    return r && nc(r, me(n, 3))
                }

                function ew(r) {
                    return r == null ? [] : Do(r, Kt(r))
                }

                function tw(r) {
                    return r == null ? [] : Do(r, pr(r))
                }

                function Mc(r, n, a) {
                    var u = r == null ? t : Zi(r, n);
                    return u === t ? a : u
                }

                function rw(r, n) {
                    return r != null && dl(r, n, I0)
                }

                function Lc(r, n) {
                    return r != null && dl(r, n, x0)
                }
                var iw = sl(function(r, n, a) {
                        n != null && typeof n.toString != "function" && (n = uo.call(n)), r[n] = a
                    }, qc(gr)),
                    nw = sl(function(r, n, a) {
                        n != null && typeof n.toString != "function" && (n = uo.call(n)), it.call(r, n) ? r[n].push(a) : r[n] = [a]
                    }, me),
                    sw = Ke(os);

                function Kt(r) {
                    return dr(r) ? Dh(r) : cc(r)
                }

                function pr(r) {
                    return dr(r) ? Dh(r, !0) : M0(r)
                }

                function ow(r, n) {
                    var a = {};
                    return n = me(n, 3), Zr(r, function(u, g, w) {
                        li(a, n(u, g, w), u)
                    }), a
                }

                function aw(r, n) {
                    var a = {};
                    return n = me(n, 3), Zr(r, function(u, g, w) {
                        li(a, g, n(u, g, w))
                    }), a
                }
                var cw = Cn(function(r, n, a) {
                        So(r, n, a)
                    }),
                    Gl = Cn(function(r, n, a, u) {
                        So(r, n, a, u)
                    }),
                    uw = di(function(r, n) {
                        var a = {};
                        if (r == null) return a;
                        var u = !1;
                        n = vt(n, function(w) {
                            return w = Ui(w, r), u || (u = w.length > 1), w
                        }), ei(r, Ec(r), a), u && (a = Ur(a, b | P | O, iy));
                        for (var g = n.length; g--;) pc(a, n[g]);
                        return a
                    });

                function hw(r, n) {
                    return Yl(r, qo(me(n)))
                }
                var lw = di(function(r, n) {
                    return r == null ? {} : j0(r, n)
                });

                function Yl(r, n) {
                    if (r == null) return {};
                    var a = vt(Ec(r), function(u) {
                        return [u]
                    });
                    return n = me(n), Fh(r, a, function(u, g) {
                        return n(u, g[0])
                    })
                }

                function fw(r, n, a) {
                    n = Ui(n, r);
                    var u = -1,
                        g = n.length;
                    for (g || (g = 1, r = t); ++u < g;) {
                        var w = r == null ? t : r[ti(n[u])];
                        w === t && (u = g, w = a), r = gi(w) ? w.call(r) : w
                    }
                    return r
                }

                function dw(r, n, a) {
                    return r == null ? r : cs(r, n, a)
                }

                function pw(r, n, a, u) {
                    return u = typeof u == "function" ? u : t, r == null ? r : cs(r, n, a, u)
                }
                var Jl = cl(Kt),
                    Ql = cl(pr);

                function gw(r, n, a) {
                    var u = Re(r),
                        g = u || Li(r) || Rn(r);
                    if (n = me(n, 4), a == null) {
                        var w = r && r.constructor;
                        g ? a = u ? new w : [] : _t(r) ? a = gi(w) ? On(fo(r)) : {} : a = {}
                    }
                    return (g ? Rr : Zr)(r, function(x, N, q) {
                        return n(a, x, N, q)
                    }), a
                }

                function yw(r, n) {
                    return r == null ? !0 : pc(r, n)
                }

                function vw(r, n, a) {
                    return r == null ? r : kh(r, n, vc(a))
                }

                function mw(r, n, a, u) {
                    return u = typeof u == "function" ? u : t, r == null ? r : kh(r, n, vc(a), u)
                }

                function Nn(r) {
                    return r == null ? [] : Ya(r, Kt(r))
                }

                function ww(r) {
                    return r == null ? [] : Ya(r, pr(r))
                }

                function bw(r, n, a) {
                    return a === t && (a = n, n = t), a !== t && (a = jr(a), a = a === a ? a : 0), n !== t && (n = jr(n), n = n === n ? n : 0), Xi(jr(r), n, a)
                }

                function _w(r, n, a) {
                    return n = yi(n), a === t ? (a = n, n = 0) : a = yi(a), r = jr(r), P0(r, n, a)
                }

                function Ew(r, n, a) {
                    if (a && typeof a != "boolean" && nr(r, n, a) && (n = a = t), a === t && (typeof n == "boolean" ? (a = n, n = t) : typeof r == "boolean" && (a = r, r = t)), r === t && n === t ? (r = 0, n = 1) : (r = yi(r), n === t ? (n = r, r = 0) : n = yi(n)), r > n) {
                        var u = r;
                        r = n, n = u
                    }
                    if (a || r % 1 || n % 1) {
                        var g = _h();
                        return Jt(r + g * (n - r + ot("1e-" + ((g + "").length - 1))), n)
                    }
                    return lc(r, n)
                }
                var Dw = An(function(r, n, a) {
                    return n = n.toLowerCase(), r + (a ? Xl(n) : n)
                });

                function Xl(r) {
                    return jc(rt(r).toLowerCase())
                }

                function Zl(r) {
                    return r = rt(r), r && r.replace(ai, dg).replace(Fa, "")
                }

                function Sw(r, n, a) {
                    r = rt(r), n = Dr(n);
                    var u = r.length;
                    a = a === t ? u : Xi(je(a), 0, u);
                    var g = a;
                    return a -= n.length, a >= 0 && r.slice(a, g) == n
                }

                function Iw(r) {
                    return r = rt(r), r && gt.test(r) ? r.replace(Bi, pg) : r
                }

                function xw(r) {
                    return r = rt(r), r && Mt.test(r) ? r.replace(It, "\\$&") : r
                }
                var Pw = An(function(r, n, a) {
                        return r + (a ? "-" : "") + n.toLowerCase()
                    }),
                    Ow = An(function(r, n, a) {
                        return r + (a ? " " : "") + n.toLowerCase()
                    }),
                    Cw = rl("toLowerCase");

                function Aw(r, n, a) {
                    r = rt(r), n = je(n);
                    var u = n ? Dn(r) : 0;
                    if (!n || u >= n) return r;
                    var g = (n - u) / 2;
                    return Ao(vo(g), a) + r + Ao(yo(g), a)
                }

                function Tw(r, n, a) {
                    r = rt(r), n = je(n);
                    var u = n ? Dn(r) : 0;
                    return n && u < n ? r + Ao(n - u, a) : r
                }

                function Rw(r, n, a) {
                    r = rt(r), n = je(n);
                    var u = n ? Dn(r) : 0;
                    return n && u < n ? Ao(n - u, a) + r : r
                }

                function Nw(r, n, a) {
                    return a || n == null ? n = 0 : n && (n = +n), Fg(rt(r).replace(xt, ""), n || 0)
                }

                function $w(r, n, a) {
                    return (a ? nr(r, n, a) : n === t) ? n = 1 : n = je(n), fc(rt(r), n)
                }

                function Uw() {
                    var r = arguments,
                        n = rt(r[0]);
                    return r.length < 3 ? n : n.replace(r[1], r[2])
                }
                var Mw = An(function(r, n, a) {
                    return r + (a ? "_" : "") + n.toLowerCase()
                });

                function Lw(r, n, a) {
                    return a && typeof a != "number" && nr(r, n, a) && (n = a = t), a = a === t ? ie : a >>> 0, a ? (r = rt(r), r && (typeof n == "string" || n != null && !Uc(n)) && (n = Dr(n), !n && En(r)) ? Mi(Br(r), 0, a) : r.split(n, a)) : []
                }
                var jw = An(function(r, n, a) {
                    return r + (a ? " " : "") + jc(n)
                });

                function qw(r, n, a) {
                    return r = rt(r), a = a == null ? 0 : Xi(je(a), 0, r.length), n = Dr(n), r.slice(a, a + n.length) == n
                }

                function Fw(r, n, a) {
                    var u = v.templateSettings;
                    a && nr(r, n, a) && (n = t), r = rt(r), n = Ho({}, n, u, ul);
                    var g = Ho({}, n.imports, u.imports, ul),
                        w = Kt(g),
                        x = Ya(g, w),
                        N, q, G = 0,
                        Y = n.interpolate || pn,
                        re = "__p += '",
                        ce = Qa((n.escape || pn).source + "|" + Y.source + "|" + (Y === bt ? Da : pn).source + "|" + (n.evaluate || pn).source + "|$", "g"),
                        pe = "//# sourceURL=" + (it.call(n, "sourceURL") ? (n.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++za + "]") + `
`;
                    r.replace(ce, function(be, We, Xe, Ir, sr, xr) {
                        return Xe || (Xe = Ir), re += r.slice(G, xr).replace(Ca, gg), We && (N = !0, re += `' +
__e(` + We + `) +
'`), sr && (q = !0, re += `';
` + sr + `;
__p += '`), Xe && (re += `' +
((__t = (` + Xe + `)) == null ? '' : __t) +
'`), G = xr + be.length, be
                    }), re += `';
`;
                    var we = it.call(n, "variable") && n.variable;
                    if (!we) re = `with (obj) {
` + re + `
}
`;
                    else if (_a.test(we)) throw new Ce(f);
                    re = (q ? re.replace(Jr, "") : re).replace(tr, "$1").replace(oi, "$1;"), re = "function(" + (we || "obj") + `) {
` + (we ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (N ? ", __e = _.escape" : "") + (q ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + re + `return __p
}`;
                    var ze = tf(function() {
                        return tt(w, pe + "return " + re).apply(t, x)
                    });
                    if (ze.source = re, $c(ze)) throw ze;
                    return ze
                }

                function zw(r) {
                    return rt(r).toLowerCase()
                }

                function Hw(r) {
                    return rt(r).toUpperCase()
                }

                function Bw(r, n, a) {
                    if (r = rt(r), r && (a || n === t)) return hh(r);
                    if (!r || !(n = Dr(n))) return r;
                    var u = Br(r),
                        g = Br(n),
                        w = lh(u, g),
                        x = fh(u, g) + 1;
                    return Mi(u, w, x).join("")
                }

                function Kw(r, n, a) {
                    if (r = rt(r), r && (a || n === t)) return r.slice(0, ph(r) + 1);
                    if (!r || !(n = Dr(n))) return r;
                    var u = Br(r),
                        g = fh(u, Br(n)) + 1;
                    return Mi(u, 0, g).join("")
                }

                function kw(r, n, a) {
                    if (r = rt(r), r && (a || n === t)) return r.replace(xt, "");
                    if (!r || !(n = Dr(n))) return r;
                    var u = Br(r),
                        g = lh(u, Br(n));
                    return Mi(u, g).join("")
                }

                function Vw(r, n) {
                    var a = ne,
                        u = ue;
                    if (_t(n)) {
                        var g = "separator" in n ? n.separator : g;
                        a = "length" in n ? je(n.length) : a, u = "omission" in n ? Dr(n.omission) : u
                    }
                    r = rt(r);
                    var w = r.length;
                    if (En(r)) {
                        var x = Br(r);
                        w = x.length
                    }
                    if (a >= w) return r;
                    var N = a - Dn(u);
                    if (N < 1) return u;
                    var q = x ? Mi(x, 0, N).join("") : r.slice(0, N);
                    if (g === t) return q + u;
                    if (x && (N += q.length - N), Uc(g)) {
                        if (r.slice(N).search(g)) {
                            var G, Y = q;
                            for (g.global || (g = Qa(g.source, rt(Ar.exec(g)) + "g")), g.lastIndex = 0; G = g.exec(Y);) var re = G.index;
                            q = q.slice(0, re === t ? N : re)
                        }
                    } else if (r.indexOf(Dr(g), N) != N) {
                        var ce = q.lastIndexOf(g);
                        ce > -1 && (q = q.slice(0, ce))
                    }
                    return q + u
                }

                function Ww(r) {
                    return r = rt(r), r && Et.test(r) ? r.replace(Pi, Eg) : r
                }
                var Gw = An(function(r, n, a) {
                        return r + (a ? " " : "") + n.toUpperCase()
                    }),
                    jc = rl("toUpperCase");

                function ef(r, n, a) {
                    return r = rt(r), n = a ? t : n, n === t ? vg(r) ? Ig(r) : cg(r) : r.match(n) || []
                }
                var tf = Ke(function(r, n) {
                        try {
                            return Bt(r, t, n)
                        } catch (a) {
                            return $c(a) ? a : new Ce(a)
                        }
                    }),
                    Yw = di(function(r, n) {
                        return Rr(n, function(a) {
                            a = ti(a), li(r, a, Rc(r[a], r))
                        }), r
                    });

                function Jw(r) {
                    var n = r == null ? 0 : r.length,
                        a = me();
                    return r = n ? vt(r, function(u) {
                        if (typeof u[1] != "function") throw new Nr(d);
                        return [a(u[0]), u[1]]
                    }) : [], Ke(function(u) {
                        for (var g = -1; ++g < n;) {
                            var w = r[g];
                            if (Bt(w[0], this, u)) return Bt(w[1], this, u)
                        }
                    })
                }

                function Qw(r) {
                    return E0(Ur(r, b))
                }

                function qc(r) {
                    return function() {
                        return r
                    }
                }

                function Xw(r, n) {
                    return r == null || r !== r ? n : r
                }
                var Zw = nl(),
                    e1 = nl(!0);

                function gr(r) {
                    return r
                }

                function Fc(r) {
                    return $h(typeof r == "function" ? r : Ur(r, b))
                }

                function t1(r) {
                    return Mh(Ur(r, b))
                }

                function r1(r, n) {
                    return Lh(r, Ur(n, b))
                }
                var i1 = Ke(function(r, n) {
                        return function(a) {
                            return os(a, r, n)
                        }
                    }),
                    n1 = Ke(function(r, n) {
                        return function(a) {
                            return os(r, a, n)
                        }
                    });

                function zc(r, n, a) {
                    var u = Kt(n),
                        g = Do(n, u);
                    a == null && !(_t(n) && (g.length || !u.length)) && (a = n, n = r, r = this, g = Do(n, Kt(n)));
                    var w = !(_t(a) && "chain" in a) || !!a.chain,
                        x = gi(r);
                    return Rr(g, function(N) {
                        var q = n[N];
                        r[N] = q, x && (r.prototype[N] = function() {
                            var G = this.__chain__;
                            if (w || G) {
                                var Y = r(this.__wrapped__),
                                    re = Y.__actions__ = fr(this.__actions__);
                                return re.push({
                                    func: q,
                                    args: arguments,
                                    thisArg: r
                                }), Y.__chain__ = G, Y
                            }
                            return q.apply(r, Ai([this.value()], arguments))
                        })
                    }), r
                }

                function s1() {
                    return Qe._ === this && (Qe._ = Tg), this
                }

                function Hc() {}

                function o1(r) {
                    return r = je(r), Ke(function(n) {
                        return jh(n, r)
                    })
                }
                var a1 = wc(vt),
                    c1 = wc(sh),
                    u1 = wc(Ka);

                function rf(r) {
                    return xc(r) ? ka(ti(r)) : q0(r)
                }

                function h1(r) {
                    return function(n) {
                        return r == null ? t : Zi(r, n)
                    }
                }
                var l1 = ol(),
                    f1 = ol(!0);

                function Bc() {
                    return []
                }

                function Kc() {
                    return !1
                }

                function d1() {
                    return {}
                }

                function p1() {
                    return ""
                }

                function g1() {
                    return !0
                }

                function y1(r, n) {
                    if (r = je(r), r < 1 || r > k) return [];
                    var a = ie,
                        u = Jt(r, ie);
                    n = me(n), r -= ie;
                    for (var g = Ga(u, n); ++a < r;) n(a);
                    return g
                }

                function v1(r) {
                    return Re(r) ? vt(r, ti) : Sr(r) ? [r] : fr(El(rt(r)))
                }

                function m1(r) {
                    var n = ++Cg;
                    return rt(r) + n
                }
                var w1 = Co(function(r, n) {
                        return r + n
                    }, 0),
                    b1 = bc("ceil"),
                    _1 = Co(function(r, n) {
                        return r / n
                    }, 1),
                    E1 = bc("floor");

                function D1(r) {
                    return r && r.length ? Eo(r, gr, sc) : t
                }

                function S1(r, n) {
                    return r && r.length ? Eo(r, me(n, 2), sc) : t
                }

                function I1(r) {
                    return ch(r, gr)
                }

                function x1(r, n) {
                    return ch(r, me(n, 2))
                }

                function P1(r) {
                    return r && r.length ? Eo(r, gr, uc) : t
                }

                function O1(r, n) {
                    return r && r.length ? Eo(r, me(n, 2), uc) : t
                }
                var C1 = Co(function(r, n) {
                        return r * n
                    }, 1),
                    A1 = bc("round"),
                    T1 = Co(function(r, n) {
                        return r - n
                    }, 0);

                function R1(r) {
                    return r && r.length ? Wa(r, gr) : 0
                }

                function N1(r, n) {
                    return r && r.length ? Wa(r, me(n, 2)) : 0
                }
                return v.after = tm, v.ary = Nl, v.assign = Hm, v.assignIn = Wl, v.assignInWith = Ho, v.assignWith = Bm, v.at = Km, v.before = $l, v.bind = Rc, v.bindAll = Yw, v.bindKey = Ul, v.castArray = dm, v.chain = Al, v.chunk = Ey, v.compact = Dy, v.concat = Sy, v.cond = Jw, v.conforms = Qw, v.constant = qc, v.countBy = Rv, v.create = km, v.curry = Ml, v.curryRight = Ll, v.debounce = jl, v.defaults = Vm, v.defaultsDeep = Wm, v.defer = rm, v.delay = im, v.difference = Iy, v.differenceBy = xy, v.differenceWith = Py, v.drop = Oy, v.dropRight = Cy, v.dropRightWhile = Ay, v.dropWhile = Ty, v.fill = Ry, v.filter = $v, v.flatMap = Lv, v.flatMapDeep = jv, v.flatMapDepth = qv, v.flatten = xl, v.flattenDeep = Ny, v.flattenDepth = $y, v.flip = nm, v.flow = Zw, v.flowRight = e1, v.fromPairs = Uy, v.functions = ew, v.functionsIn = tw, v.groupBy = Fv, v.initial = Ly, v.intersection = jy, v.intersectionBy = qy, v.intersectionWith = Fy, v.invert = iw, v.invertBy = nw, v.invokeMap = Hv, v.iteratee = Fc, v.keyBy = Bv, v.keys = Kt, v.keysIn = pr, v.map = Mo, v.mapKeys = ow, v.mapValues = aw, v.matches = t1, v.matchesProperty = r1, v.memoize = jo, v.merge = cw, v.mergeWith = Gl, v.method = i1, v.methodOf = n1, v.mixin = zc, v.negate = qo, v.nthArg = o1, v.omit = uw, v.omitBy = hw, v.once = sm, v.orderBy = Kv, v.over = a1, v.overArgs = om, v.overEvery = c1, v.overSome = u1, v.partial = Nc, v.partialRight = ql, v.partition = kv, v.pick = lw, v.pickBy = Yl, v.property = rf, v.propertyOf = h1, v.pull = Ky, v.pullAll = Ol, v.pullAllBy = ky, v.pullAllWith = Vy, v.pullAt = Wy, v.range = l1, v.rangeRight = f1, v.rearg = am, v.reject = Gv, v.remove = Gy, v.rest = cm, v.reverse = Ac, v.sampleSize = Jv, v.set = dw, v.setWith = pw, v.shuffle = Qv, v.slice = Yy, v.sortBy = em, v.sortedUniq = rv, v.sortedUniqBy = iv, v.split = Lw, v.spread = um, v.tail = nv, v.take = sv, v.takeRight = ov, v.takeRightWhile = av, v.takeWhile = cv, v.tap = Dv, v.throttle = hm, v.thru = Uo, v.toArray = Kl, v.toPairs = Jl, v.toPairsIn = Ql, v.toPath = v1, v.toPlainObject = Vl, v.transform = gw, v.unary = lm, v.union = uv, v.unionBy = hv, v.unionWith = lv, v.uniq = fv, v.uniqBy = dv, v.uniqWith = pv, v.unset = yw, v.unzip = Tc, v.unzipWith = Cl, v.update = vw, v.updateWith = mw, v.values = Nn, v.valuesIn = ww, v.without = gv, v.words = ef, v.wrap = fm, v.xor = yv, v.xorBy = vv, v.xorWith = mv, v.zip = wv, v.zipObject = bv, v.zipObjectDeep = _v, v.zipWith = Ev, v.entries = Jl, v.entriesIn = Ql, v.extend = Wl, v.extendWith = Ho, zc(v, v), v.add = w1, v.attempt = tf, v.camelCase = Dw, v.capitalize = Xl, v.ceil = b1, v.clamp = bw, v.clone = pm, v.cloneDeep = ym, v.cloneDeepWith = vm, v.cloneWith = gm, v.conformsTo = mm, v.deburr = Zl, v.defaultTo = Xw, v.divide = _1, v.endsWith = Sw, v.eq = kr, v.escape = Iw, v.escapeRegExp = xw, v.every = Nv, v.find = Uv, v.findIndex = Sl, v.findKey = Gm, v.findLast = Mv, v.findLastIndex = Il, v.findLastKey = Ym, v.floor = E1, v.forEach = Tl, v.forEachRight = Rl, v.forIn = Jm, v.forInRight = Qm, v.forOwn = Xm, v.forOwnRight = Zm, v.get = Mc, v.gt = wm, v.gte = bm, v.has = rw, v.hasIn = Lc, v.head = Pl, v.identity = gr, v.includes = zv, v.indexOf = My, v.inRange = _w, v.invoke = sw, v.isArguments = rn, v.isArray = Re, v.isArrayBuffer = _m, v.isArrayLike = dr, v.isArrayLikeObject = Tt, v.isBoolean = Em, v.isBuffer = Li, v.isDate = Dm, v.isElement = Sm, v.isEmpty = Im, v.isEqual = xm, v.isEqualWith = Pm, v.isError = $c, v.isFinite = Om, v.isFunction = gi, v.isInteger = Fl, v.isLength = Fo, v.isMap = zl, v.isMatch = Cm, v.isMatchWith = Am, v.isNaN = Tm, v.isNative = Rm, v.isNil = $m, v.isNull = Nm, v.isNumber = Hl, v.isObject = _t, v.isObjectLike = Ot, v.isPlainObject = fs, v.isRegExp = Uc, v.isSafeInteger = Um, v.isSet = Bl, v.isString = zo, v.isSymbol = Sr, v.isTypedArray = Rn, v.isUndefined = Mm, v.isWeakMap = Lm, v.isWeakSet = jm, v.join = zy, v.kebabCase = Pw, v.last = Lr, v.lastIndexOf = Hy, v.lowerCase = Ow, v.lowerFirst = Cw, v.lt = qm, v.lte = Fm, v.max = D1, v.maxBy = S1, v.mean = I1, v.meanBy = x1, v.min = P1, v.minBy = O1, v.stubArray = Bc, v.stubFalse = Kc, v.stubObject = d1, v.stubString = p1, v.stubTrue = g1, v.multiply = C1, v.nth = By, v.noConflict = s1, v.noop = Hc, v.now = Lo, v.pad = Aw, v.padEnd = Tw, v.padStart = Rw, v.parseInt = Nw, v.random = Ew, v.reduce = Vv, v.reduceRight = Wv, v.repeat = $w, v.replace = Uw, v.result = fw, v.round = A1, v.runInContext = j, v.sample = Yv, v.size = Xv, v.snakeCase = Mw, v.some = Zv, v.sortedIndex = Jy, v.sortedIndexBy = Qy, v.sortedIndexOf = Xy, v.sortedLastIndex = Zy, v.sortedLastIndexBy = ev, v.sortedLastIndexOf = tv, v.startCase = jw, v.startsWith = qw, v.subtract = T1, v.sum = R1, v.sumBy = N1, v.template = Fw, v.times = y1, v.toFinite = yi, v.toInteger = je, v.toLength = kl, v.toLower = zw, v.toNumber = jr, v.toSafeInteger = zm, v.toString = rt, v.toUpper = Hw, v.trim = Bw, v.trimEnd = Kw, v.trimStart = kw, v.truncate = Vw, v.unescape = Ww, v.uniqueId = m1, v.upperCase = Gw, v.upperFirst = jc, v.each = Tl, v.eachRight = Rl, v.first = Pl, zc(v, function() {
                    var r = {};
                    return Zr(v, function(n, a) {
                        it.call(v.prototype, a) || (r[a] = n)
                    }), r
                }(), {
                    chain: !1
                }), v.VERSION = s, Rr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(r) {
                    v[r].placeholder = v
                }), Rr(["drop", "take"], function(r, n) {
                    Ye.prototype[r] = function(a) {
                        a = a === t ? 1 : Ht(je(a), 0);
                        var u = this.__filtered__ && !n ? new Ye(this) : this.clone();
                        return u.__filtered__ ? u.__takeCount__ = Jt(a, u.__takeCount__) : u.__views__.push({
                            size: Jt(a, ie),
                            type: r + (u.__dir__ < 0 ? "Right" : "")
                        }), u
                    }, Ye.prototype[r + "Right"] = function(a) {
                        return this.reverse()[r](a).reverse()
                    }
                }), Rr(["filter", "map", "takeWhile"], function(r, n) {
                    var a = n + 1,
                        u = a == D || a == X;
                    Ye.prototype[r] = function(g) {
                        var w = this.clone();
                        return w.__iteratees__.push({
                            iteratee: me(g, 3),
                            type: a
                        }), w.__filtered__ = w.__filtered__ || u, w
                    }
                }), Rr(["head", "last"], function(r, n) {
                    var a = "take" + (n ? "Right" : "");
                    Ye.prototype[r] = function() {
                        return this[a](1).value()[0]
                    }
                }), Rr(["initial", "tail"], function(r, n) {
                    var a = "drop" + (n ? "" : "Right");
                    Ye.prototype[r] = function() {
                        return this.__filtered__ ? new Ye(this) : this[a](1)
                    }
                }), Ye.prototype.compact = function() {
                    return this.filter(gr)
                }, Ye.prototype.find = function(r) {
                    return this.filter(r).head()
                }, Ye.prototype.findLast = function(r) {
                    return this.reverse().find(r)
                }, Ye.prototype.invokeMap = Ke(function(r, n) {
                    return typeof r == "function" ? new Ye(this) : this.map(function(a) {
                        return os(a, r, n)
                    })
                }), Ye.prototype.reject = function(r) {
                    return this.filter(qo(me(r)))
                }, Ye.prototype.slice = function(r, n) {
                    r = je(r);
                    var a = this;
                    return a.__filtered__ && (r > 0 || n < 0) ? new Ye(a) : (r < 0 ? a = a.takeRight(-r) : r && (a = a.drop(r)), n !== t && (n = je(n), a = n < 0 ? a.dropRight(-n) : a.take(n - r)), a)
                }, Ye.prototype.takeRightWhile = function(r) {
                    return this.reverse().takeWhile(r).reverse()
                }, Ye.prototype.toArray = function() {
                    return this.take(ie)
                }, Zr(Ye.prototype, function(r, n) {
                    var a = /^(?:filter|find|map|reject)|While$/.test(n),
                        u = /^(?:head|last)$/.test(n),
                        g = v[u ? "take" + (n == "last" ? "Right" : "") : n],
                        w = u || /^find/.test(n);
                    g && (v.prototype[n] = function() {
                        var x = this.__wrapped__,
                            N = u ? [1] : arguments,
                            q = x instanceof Ye,
                            G = N[0],
                            Y = q || Re(x),
                            re = function(We) {
                                var Xe = g.apply(v, Ai([We], N));
                                return u && ce ? Xe[0] : Xe
                            };
                        Y && a && typeof G == "function" && G.length != 1 && (q = Y = !1);
                        var ce = this.__chain__,
                            pe = !!this.__actions__.length,
                            we = w && !ce,
                            ze = q && !pe;
                        if (!w && Y) {
                            x = ze ? x : new Ye(this);
                            var be = r.apply(x, N);
                            return be.__actions__.push({
                                func: Uo,
                                args: [re],
                                thisArg: t
                            }), new $r(be, ce)
                        }
                        return we && ze ? r.apply(this, N) : (be = this.thru(re), we ? u ? be.value()[0] : be.value() : be)
                    })
                }), Rr(["pop", "push", "shift", "sort", "splice", "unshift"], function(r) {
                    var n = oo[r],
                        a = /^(?:push|sort|unshift)$/.test(r) ? "tap" : "thru",
                        u = /^(?:pop|shift)$/.test(r);
                    v.prototype[r] = function() {
                        var g = arguments;
                        if (u && !this.__chain__) {
                            var w = this.value();
                            return n.apply(Re(w) ? w : [], g)
                        }
                        return this[a](function(x) {
                            return n.apply(Re(x) ? x : [], g)
                        })
                    }
                }), Zr(Ye.prototype, function(r, n) {
                    var a = v[n];
                    if (a) {
                        var u = a.name + "";
                        it.call(Pn, u) || (Pn[u] = []), Pn[u].push({
                            name: n,
                            func: a
                        })
                    }
                }), Pn[Oo(t, Z).name] = [{
                    name: "wrapper",
                    func: t
                }], Ye.prototype.clone = Wg, Ye.prototype.reverse = Gg, Ye.prototype.value = Yg, v.prototype.at = Sv, v.prototype.chain = Iv, v.prototype.commit = xv, v.prototype.next = Pv, v.prototype.plant = Cv, v.prototype.reverse = Av, v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = Tv, v.prototype.first = v.prototype.head, Zn && (v.prototype[Zn] = Ov), v
            },
            Sn = xg();
        At ? ((At.exports = Sn)._ = Sn, at._ = Sn) : Qe._ = Sn
    }).call(ws)
})(Nu, Nu.exports);
var YI = Object.defineProperty,
    JI = Object.defineProperties,
    QI = Object.getOwnPropertyDescriptors,
    Nd = Object.getOwnPropertySymbols,
    XI = Object.prototype.hasOwnProperty,
    ZI = Object.prototype.propertyIsEnumerable,
    $d = (i, e, t) => e in i ? YI(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    Go = (i, e) => {
        for (var t in e || (e = {})) XI.call(e, t) && $d(i, t, e[t]);
        if (Nd)
            for (var t of Nd(e)) ZI.call(e, t) && $d(i, t, e[t]);
        return i
    },
    e5 = (i, e) => JI(i, QI(e));

function Fi(i, e, t) {
    var s;
    const o = IE(i);
    return ((s = e.rpcMap) == null ? void 0 : s[o.reference]) || `${GI}?chainId=${o.namespace}:${o.reference}&projectId=${t}`
}

function dn(i) {
    return i.includes(":") ? i.split(":")[1] : i
}

function tg(i) {
    return i.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
}

function t5(i, e) {
    const t = Object.keys(e.namespaces).filter(o => o.includes(i));
    if (!t.length) return [];
    const s = [];
    return t.forEach(o => {
        const c = e.namespaces[o].accounts;
        s.push(...c)
    }), s
}

function Ud(i = {}, e = {}) {
    const t = Md(i),
        s = Md(e);
    return Nu.exports.merge(t, s)
}

function Md(i) {
    var e, t, s, o;
    const c = {};
    if (!Ps(i)) return c;
    for (const [d, f] of Object.entries(i)) {
        const p = Gu(d) ? [d] : f.chains,
            y = f.methods || [],
            m = f.events || [],
            b = f.rpcMap || {},
            P = bs(d);
        c[P] = e5(Go(Go({}, c[P]), f), {
            chains: Jc(p, (e = c[P]) == null ? void 0 : e.chains),
            methods: Jc(y, (t = c[P]) == null ? void 0 : t.methods),
            events: Jc(m, (s = c[P]) == null ? void 0 : s.events),
            rpcMap: Go(Go({}, b), (o = c[P]) == null ? void 0 : o.rpcMap)
        })
    }
    return c
}

function r5(i) {
    return i.includes(":") ? i.split(":")[2] : i
}

function i5(i) {
    const e = {};
    for (const [t, s] of Object.entries(i)) {
        const o = s.methods || [],
            c = s.events || [],
            d = s.accounts || [],
            f = Gu(t) ? [t] : s.chains ? s.chains : tg(s.accounts);
        e[t] = {
            chains: f,
            methods: o,
            events: c,
            accounts: d
        }
    }
    return e
}

function uu(i) {
    return typeof i == "number" ? i : i.includes("0x") ? parseInt(i, 16) : (i = i.includes(":") ? i.split(":")[1] : i, isNaN(Number(i)) ? i : Number(i))
}
const rg = {},
    wt = i => rg[i],
    hu = (i, e) => {
        rg[i] = e
    };
class n5 {
    constructor(e) {
        this.name = "polkadot", this.namespace = e.namespace, this.events = wt("events"), this.client = wt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = dn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s, wt("disableProviderPing")))
    }
}
class s5 {
    constructor(e) {
        this.name = "eip155", this.namespace = e.namespace, this.events = wt("events"), this.client = wt("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
    }
    async request(e) {
        switch (e.request.method) {
            case "eth_requestAccounts":
                return this.getAccounts();
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(e);
            case "eth_chainId":
                return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    createHttpProvider(e, t) {
        const s = t || Fi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s, wt("disableProviderPing")))
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = parseInt(dn(t));
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }), e
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    getHttpProvider() {
        const e = this.chainId,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    async handleSwitchChain(e) {
        var t, s;
        let o = e.request.params ? (t = e.request.params[0]) == null ? void 0 : t.chainId : "0x0";
        o = o.startsWith("0x") ? o : `0x${o}`;
        const c = parseInt(o, 16);
        if (this.isChainApproved(c)) this.setDefaultChain(`${c}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
            topic: e.topic,
            request: {
                method: e.request.method,
                params: [{
                    chainId: o
                }]
            },
            chainId: (s = this.namespace.chains) == null ? void 0 : s[0]
        }), this.setDefaultChain(`${c}`);
        else throw new Error(`Failed to switch to chain 'eip155:${c}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
    }
    isChainApproved(e) {
        return this.namespace.chains.includes(`${this.name}:${e}`)
    }
}
class o5 {
    constructor(e) {
        this.name = "solana", this.namespace = e.namespace, this.events = wt("events"), this.client = wt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = dn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s, wt("disableProviderPing")))
    }
}
class a5 {
    constructor(e) {
        this.name = "cosmos", this.namespace = e.namespace, this.events = wt("events"), this.client = wt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = dn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s, wt("disableProviderPing")))
    }
}
class c5 {
    constructor(e) {
        this.name = "cip34", this.namespace = e.namespace, this.events = wt("events"), this.client = wt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            const s = this.getCardanoRPCUrl(t),
                o = dn(t);
            e[o] = this.createHttpProvider(o, s)
        }), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    getCardanoRPCUrl(e) {
        const t = this.namespace.rpcMap;
        if (t) return t[e]
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || this.getCardanoRPCUrl(e);
        if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s, wt("disableProviderPing")))
    }
}
class u5 {
    constructor(e) {
        this.name = "elrond", this.namespace = e.namespace, this.events = wt("events"), this.client = wt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = dn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s, wt("disableProviderPing")))
    }
}
class h5 {
    constructor(e) {
        this.name = "multiversx", this.namespace = e.namespace, this.events = wt("events"), this.client = wt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? [...new Set(e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]))] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            const o = dn(t);
            e[o] = this.createHttpProvider(o, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace, this.client.core.projectId);
        if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
        return new Ii(new Hi(s, wt("disableProviderPing")))
    }
}
class l5 {
    constructor(e) {
        this.name = "near", this.namespace = e.namespace, this.events = wt("events"), this.client = wt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(e) {
        this.namespace = Object.assign(this.namespace, e)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const e = this.namespace.chains[0];
        if (!e) throw new Error("ChainId not found");
        return e.split(":")[1]
    }
    request(e) {
        return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
    }
    setDefaultChain(e, t) {
        if (this.chainId = e, !this.httpProviders[e]) {
            const s = t || Fi(`${this.name}:${e}`, this.namespace);
            if (!s) throw new Error(`No RPC url provided for chainId: ${e}`);
            this.setHttpProvider(e, s)
        }
        this.events.emit(xi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const e = this.namespace.accounts;
        return e ? e.filter(t => t.split(":")[1] === this.chainId.toString()).map(t => t.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const e = {};
        return this.namespace.chains.forEach(t => {
            var s;
            e[t] = this.createHttpProvider(t, (s = this.namespace.rpcMap) == null ? void 0 : s[t])
        }), e
    }
    getHttpProvider() {
        const e = `${this.name}:${this.chainId}`,
            t = this.httpProviders[e];
        if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
        return t
    }
    setHttpProvider(e, t) {
        const s = this.createHttpProvider(e, t);
        s && (this.httpProviders[e] = s)
    }
    createHttpProvider(e, t) {
        const s = t || Fi(e, this.namespace);
        return typeof s > "u" ? void 0 : new Ii(new Hi(s, wt("disableProviderPing")))
    }
}
var f5 = Object.defineProperty,
    d5 = Object.defineProperties,
    p5 = Object.getOwnPropertyDescriptors,
    Ld = Object.getOwnPropertySymbols,
    g5 = Object.prototype.hasOwnProperty,
    y5 = Object.prototype.propertyIsEnumerable,
    jd = (i, e, t) => e in i ? f5(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    Yo = (i, e) => {
        for (var t in e || (e = {})) g5.call(e, t) && jd(i, t, e[t]);
        if (Ld)
            for (var t of Ld(e)) y5.call(e, t) && jd(i, t, e[t]);
        return i
    },
    lu = (i, e) => d5(i, p5(e));
class ih {
    constructor(e) {
        this.events = new Lu, this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = typeof(e == null ? void 0 : e.logger) < "u" && typeof(e == null ? void 0 : e.logger) != "string" ? e.logger : pa(ga({
            level: (e == null ? void 0 : e.logger) || Td
        })), this.disableProviderPing = (e == null ? void 0 : e.disableProviderPing) || !1
    }
    static async init(e) {
        const t = new ih(e);
        return await t.initialize(), t
    }
    async request(e, t, s) {
        const [o, c] = this.validateChain(t);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(o).request({
            request: Yo({}, e),
            chainId: `${o}:${c}`,
            topic: this.session.topic,
            expiry: s
        })
    }
    sendAsync(e, t, s, o) {
        const c = new Date().getTime();
        this.request(e, s, o).then(d => t(null, ya(c, d))).catch(d => t(d, void 0))
    }
    async enable() {
        if (!this.client) throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }), await this.requestAccounts()
    }
    async disconnect() {
        var e;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (e = this.session) == null ? void 0 : e.topic,
            reason: mt("USER_DISCONNECTED")
        }), await this.cleanup()
    }
    async connect(e) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
    }
    on(e, t) {
        this.events.on(e, t)
    }
    once(e, t) {
        this.events.once(e, t)
    }
    removeListener(e, t) {
        this.events.removeListener(e, t)
    }
    off(e, t) {
        this.events.off(e, t)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(e) {
        this.shouldAbortPairingAttempt = !1;
        let t = 0;
        do {
            if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
            if (t >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
            const {
                uri: s,
                approval: o
            } = await this.client.connect({
                pairingTopic: e,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            s && (this.uri = s, this.events.emit("display_uri", s)), await o().then(c => {
                this.session = c;
                const d = i5(c.namespaces);
                this.namespaces = Ud(this.namespaces, d), this.persist("namespaces", this.namespaces)
            }).catch(c => {
                if (c.message !== Zp) throw c;
                t++
            })
        } while (!this.session);
        return this.onConnect(), this.session
    }
    setDefaultChain(e, t) {
        try {
            if (!this.session) return;
            const [s, o] = this.validateChain(e);
            this.getProvider(s).setDefaultChain(o, t)
        } catch (s) {
            if (!/Please call connect/.test(s.message)) throw s
        }
    }
    async cleanupPendingPairings(e = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const t = this.client.pairing.getAll();
        if (si(t)) {
            for (const s of t) e.deletePairings ? this.client.core.expirer.set(s.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
            this.logger.info(`Inactive pairings cleared: ${t.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
            const e = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await zI.init({
            logger: this.providerOpts.logger || Td,
            relayUrl: this.providerOpts.relayUrl || kI,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }), this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
        const e = [...new Set(Object.keys(this.session.namespaces).map(t => bs(t)))];
        hu("client", this.client), hu("events", this.events), hu("disableProviderPing", this.disableProviderPing), e.forEach(t => {
            if (!this.session) return;
            const s = t5(t, this.session),
                o = tg(s),
                c = Ud(this.namespaces, this.optionalNamespaces),
                d = lu(Yo({}, c[t]), {
                    accounts: s,
                    chains: o
                });
            switch (t) {
                case "eip155":
                    this.rpcProviders[t] = new s5({
                        namespace: d
                    });
                    break;
                case "solana":
                    this.rpcProviders[t] = new o5({
                        namespace: d
                    });
                    break;
                case "cosmos":
                    this.rpcProviders[t] = new a5({
                        namespace: d
                    });
                    break;
                case "polkadot":
                    this.rpcProviders[t] = new n5({
                        namespace: d
                    });
                    break;
                case "cip34":
                    this.rpcProviders[t] = new c5({
                        namespace: d
                    });
                    break;
                case "elrond":
                    this.rpcProviders[t] = new u5({
                        namespace: d
                    });
                    break;
                case "multiversx":
                    this.rpcProviders[t] = new h5({
                        namespace: d
                    });
                    break;
                case "near":
                    this.rpcProviders[t] = new l5({
                        namespace: d
                    });
                    break
            }
        })
    }
    registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", e => {
            this.events.emit("session_ping", e)
        }), this.client.on("session_event", e => {
            const {
                params: t
            } = e, {
                event: s
            } = t;
            if (s.name === "accountsChanged") {
                const o = s.data;
                o && si(o) && this.events.emit("accountsChanged", o.map(r5))
            } else if (s.name === "chainChanged") {
                const o = t.chainId,
                    c = t.event.data,
                    d = bs(o),
                    f = uu(o) !== uu(c) ? `${d}:${uu(c)}` : o;
                this.onChainChanged(f)
            } else this.events.emit(s.name, s.data);
            this.events.emit("session_event", e)
        }), this.client.on("session_update", ({
            topic: e,
            params: t
        }) => {
            var s;
            const {
                namespaces: o
            } = t, c = (s = this.client) == null ? void 0 : s.session.get(e);
            this.session = lu(Yo({}, c), {
                namespaces: o
            }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: e,
                params: t
            })
        }), this.client.on("session_delete", async e => {
            await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", lu(Yo({}, mt("USER_DISCONNECTED")), {
                data: e.topic
            }))
        }), this.on(xi.DEFAULT_CHAIN_CHANGED, e => {
            this.onChainChanged(e, !0)
        })
    }
    getProvider(e) {
        if (!this.rpcProviders[e]) throw new Error(`Provider not found: ${e}`);
        return this.rpcProviders[e]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(e => {
            var t;
            this.getProvider(e).updateNamespace((t = this.session) == null ? void 0 : t.namespaces[e])
        })
    }
    setNamespaces(e) {
        const {
            namespaces: t,
            optionalNamespaces: s,
            sessionProperties: o
        } = e;
        t && Object.keys(t).length && (this.namespaces = t), s && Object.keys(s).length && (this.optionalNamespaces = s), this.sessionProperties = o, this.persist("namespaces", t), this.persist("optionalNamespaces", s)
    }
    validateChain(e) {
        const [t, s] = (e == null ? void 0 : e.split(":")) || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, s];
        if (t && !Object.keys(this.namespaces || {}).map(d => bs(d)).includes(t)) throw new Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
        if (t && s) return [t, s];
        const o = bs(Object.keys(this.namespaces)[0]),
            c = this.rpcProviders[o].getDefaultChain();
        return [o, c]
    }
    async requestAccounts() {
        const [e] = this.validateChain();
        return await this.getProvider(e).requestAccounts()
    }
    onChainChanged(e, t = !1) {
        if (!this.namespaces) return;
        const [s, o] = this.validateChain(e);
        o && (t || this.getProvider(s).setDefaultChain(o), this.namespaces[s] ? this.namespaces[s].defaultChain = o : this.namespaces[`${s}:${o}`] ? this.namespaces[`${s}:${o}`].defaultChain = o : this.namespaces[`${s}:${o}`] = {
            defaultChain: o
        }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", o))
    }
    onConnect() {
        this.createProviders(), this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
            deletePairings: !0
        })
    }
    persist(e, t) {
        this.client.core.storage.setItem(`${Rd}/${e}`, t)
    }
    async getFromStore(e) {
        return await this.client.core.storage.getItem(`${Rd}/${e}`)
    }
}
const v5 = ih,
    m5 = "wc",
    w5 = "ethereum_provider",
    b5 = `${m5}@2:${w5}:`,
    _5 = "https://rpc.walletconnect.com/v1/",
    $u = ["eth_sendTransaction", "personal_sign"],
    E5 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
    Uu = ["chainChanged", "accountsChanged"],
    D5 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var S5 = Object.defineProperty,
    I5 = Object.defineProperties,
    x5 = Object.getOwnPropertyDescriptors,
    qd = Object.getOwnPropertySymbols,
    P5 = Object.prototype.hasOwnProperty,
    O5 = Object.prototype.propertyIsEnumerable,
    Fd = (i, e, t) => e in i ? S5(i, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : i[e] = t,
    Es = (i, e) => {
        for (var t in e || (e = {})) P5.call(e, t) && Fd(i, t, e[t]);
        if (qd)
            for (var t of qd(e)) O5.call(e, t) && Fd(i, t, e[t]);
        return i
    },
    zd = (i, e) => I5(i, x5(e));

function sa(i) {
    return Number(i[0].split(":")[1])
}

function fu(i) {
    return `0x${i.toString(16)}`
}

function C5(i) {
    const {
        chains: e,
        optionalChains: t,
        methods: s,
        optionalMethods: o,
        events: c,
        optionalEvents: d,
        rpcMap: f
    } = i;
    if (!si(e)) throw new Error("Invalid chains");
    const p = {
            chains: e,
            methods: s || $u,
            events: c || Uu,
            rpcMap: Es({}, e.length ? {
                [sa(e)]: f[sa(e)]
            } : {})
        },
        y = c == null ? void 0 : c.filter(O => !Uu.includes(O)),
        m = s == null ? void 0 : s.filter(O => !$u.includes(O));
    if (!t && !d && !o && !(y != null && y.length) && !(m != null && m.length)) return {
        required: e.length ? p : void 0
    };
    const b = (y == null ? void 0 : y.length) && (m == null ? void 0 : m.length) || !t,
        P = {
            chains: [...new Set(b ? p.chains.concat(t || []) : t)],
            methods: [...new Set(p.methods.concat(o != null && o.length ? o : E5))],
            events: [...new Set(p.events.concat(d != null && d.length ? d : D5))],
            rpcMap: f
        };
    return {
        required: e.length ? p : void 0,
        optional: t.length ? P : void 0
    }
}
class nh {
    constructor() {
        this.events = new Fr.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = b5, this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
    }
    static async init(e) {
        const t = new nh;
        return await t.initialize(e), t
    }
    async request(e, t) {
        return await this.signer.request(e, this.formatChainId(this.chainId), t)
    }
    sendAsync(e, t, s) {
        this.signer.sendAsync(e, t, this.formatChainId(this.chainId), s)
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    async enable() {
        return this.session || await this.connect(), await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(e) {
        if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(e);
        const {
            required: t,
            optional: s
        } = C5(this.rpc);
        try {
            const o = await new Promise(async (d, f) => {
                var p;
                this.rpc.showQrModal && ((p = this.modal) == null || p.subscribeModal(y => {
                    !y.open && !this.signer.session && (this.signer.abortPairingAttempt(), f(new Error("Connection request reset. Please try again.")))
                })), await this.signer.connect(zd(Es({
                    namespaces: Es({}, t && {
                        [this.namespace]: t
                    })
                }, s && {
                    optionalNamespaces: {
                        [this.namespace]: s
                    }
                }), {
                    pairingTopic: e == null ? void 0 : e.pairingTopic
                })).then(y => {
                    d(y)
                }).catch(y => {
                    f(new Error(y.message))
                })
            });
            if (!o) return;
            const c = xE(o.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : c), this.setAccounts(c), this.events.emit("connect", {
                chainId: fu(this.chainId)
            })
        } catch (o) {
            throw this.signer.logger.error(o), o
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(), this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", e => {
            const {
                params: t
            } = e, {
                event: s
            } = t;
            s.name === "accountsChanged" ? (this.accounts = this.parseAccounts(s.data), this.events.emit("accountsChanged", this.accounts)) : s.name === "chainChanged" ? this.setChainId(this.formatChainId(s.data)) : this.events.emit(s.name, s.data), this.events.emit("session_event", e)
        }), this.signer.on("chainChanged", e => {
            const t = parseInt(e);
            this.chainId = t, this.events.emit("chainChanged", fu(this.chainId)), this.persist()
        }), this.signer.on("session_update", e => {
            this.events.emit("session_update", e)
        }), this.signer.on("session_delete", e => {
            this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", zd(Es({}, mt("USER_DISCONNECTED")), {
                data: e.topic,
                name: "USER_DISCONNECTED"
            }))
        }), this.signer.on("display_uri", e => {
            var t, s;
            this.rpc.showQrModal && ((t = this.modal) == null || t.closeModal(), (s = this.modal) == null || s.openModal({
                uri: e
            })), this.events.emit("display_uri", e)
        })
    }
    switchEthereumChain(e) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: e.toString(16)
            }]
        })
    }
    isCompatibleChainId(e) {
        return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(e) {
        return `${this.namespace}:${e}`
    }
    parseChainId(e) {
        return Number(e.split(":")[1])
    }
    setChainIds(e) {
        const t = e.filter(s => this.isCompatibleChainId(s)).map(s => this.parseChainId(s));
        t.length && (this.chainId = t[0], this.events.emit("chainChanged", fu(this.chainId)), this.persist())
    }
    setChainId(e) {
        if (this.isCompatibleChainId(e)) {
            const t = this.parseChainId(e);
            this.chainId = t, this.switchEthereumChain(t)
        }
    }
    parseAccountId(e) {
        const [t, s, o] = e.split(":");
        return {
            chainId: `${t}:${s}`,
            address: o
        }
    }
    setAccounts(e) {
        this.accounts = e.filter(t => this.parseChainId(this.parseAccountId(t).chainId) === this.chainId).map(t => this.parseAccountId(t).address), this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(e) {
        var t, s;
        const o = (t = e == null ? void 0 : e.chains) != null ? t : [],
            c = (s = e == null ? void 0 : e.optionalChains) != null ? s : [],
            d = o.concat(c);
        if (!d.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
        const f = o.length ? (e == null ? void 0 : e.methods) || $u : [],
            p = o.length ? (e == null ? void 0 : e.events) || Uu : [],
            y = (e == null ? void 0 : e.optionalMethods) || [],
            m = (e == null ? void 0 : e.optionalEvents) || [],
            b = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(d, e.projectId),
            P = (e == null ? void 0 : e.qrModalOptions) || void 0;
        return {
            chains: o == null ? void 0 : o.map(O => this.formatChainId(O)),
            optionalChains: c.map(O => this.formatChainId(O)),
            methods: f,
            events: p,
            optionalMethods: y,
            optionalEvents: m,
            rpcMap: b,
            showQrModal: !!(e != null && e.showQrModal),
            qrModalOptions: P,
            projectId: e.projectId,
            metadata: e.metadata
        }
    }
    buildRpcMap(e, t) {
        const s = {};
        return e.forEach(o => {
            s[o] = this.getRpcUrl(o, t)
        }), s
    }
    async initialize(e) {
        if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? sa(this.rpc.chains) : sa(this.rpc.optionalChains), this.signer = await v5.init({
                projectId: this.rpc.projectId,
                metadata: this.rpc.metadata,
                disableProviderPing: e.disableProviderPing,
                relayUrl: e.relayUrl,
                storageOptions: e.storageOptions
            }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
            let t;
            try {
                const {
                    WalletConnectModal: s
                } = await U1(() =>
                    import ("./index-DrEFeciN.js").then(o => o.i), __vite__mapDeps([0, 1, 2]));
                t = s
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (t) try {
                this.modal = new t(Es({
                    projectId: this.rpc.projectId
                }, this.rpc.qrModalOptions))
            } catch (s) {
                throw this.signer.logger.error(s), new Error("Could not generate WalletConnectModal Instance")
            }
        }
    }
    loadConnectOpts(e) {
        if (!e) return;
        const {
            chains: t,
            optionalChains: s,
            rpcMap: o
        } = e;
        t && si(t) && (this.rpc.chains = t.map(c => this.formatChainId(c)), t.forEach(c => {
            this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c)
        })), s && si(s) && (this.rpc.optionalChains = [], this.rpc.optionalChains = s == null ? void 0 : s.map(c => this.formatChainId(c)), s.forEach(c => {
            this.rpc.rpcMap[c] = (o == null ? void 0 : o[c]) || this.getRpcUrl(c)
        }))
    }
    getRpcUrl(e, t) {
        var s;
        return ((s = this.rpc.rpcMap) == null ? void 0 : s[e]) || `${_5}?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (!this.session) return;
        const e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
            t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
        this.setChainIds(e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts), this.setAccounts(t == null ? void 0 : t.accounts)
    }
    reset() {
        this.chainId = 1, this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(e) {
        return typeof e == "string" || e instanceof String ? [this.parseAccount(e)] : e.map(t => this.parseAccount(t))
    }
}
const W5 = nh;
export {
    W5 as EthereumProvider, D5 as OPTIONAL_EVENTS, E5 as OPTIONAL_METHODS, Uu as REQUIRED_EVENTS, $u as REQUIRED_METHODS, nh as
    default
};