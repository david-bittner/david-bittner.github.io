import {
    a as q,
    t as te,
    c as Xo,
    b as ja
} from "../chunks/disclose-version.D0BqZj6U.js";
import "../chunks/legacy.CqJ_1lHr.js";
import {
    v as xe,
    x as Ra,
    y as $o,
    z as Pn,
    l as qo,
    A as Jo,
    B as vn,
    H as ec,
    C as Ps,
    D as ka,
    w as pr,
    I as Hr,
    F as zn,
    n as Zn,
    G as tc,
    J as Na,
    K as vs,
    L as ls,
    M as zs,
    N as us,
    O as rc,
    P as ac,
    Q as sc,
    q as nc,
    R as Tn,
    S as oc,
    T as cc,
    U as pc,
    V as ic,
    m as mc,
    W as Zs,
    X as hc,
    Y as lc,
    Z as uc,
    _ as dc,
    $ as Ts,
    a0 as gc,
    a1 as bc,
    a2 as ds,
    a3 as wn,
    a4 as fc,
    p as Ge,
    j as Ne,
    c as Oe,
    f as ht,
    i as T,
    h as P,
    r as Z,
    b as fr,
    g as U,
    s as X,
    a5 as ae,
    a6 as he,
    a7 as Ic,
    k as Lc,
    a8 as Nt
} from "../chunks/runtime.Ciweonxw.js";
import {
    d as yc,
    p as Ce,
    s as Xe,
    b as ke,
    i as Ht,
    c as Sc
} from "../chunks/props.C7AwzoKe.js";
import {
    a as Uc,
    l as gs,
    e as ue
} from "../chunks/events.CTB2I1pK.js";
import {
    i as Mt
} from "../chunks/lifecycle.B6BjwimH.js";
import {
    s as Sr,
    a as B,
    b as ee
} from "../chunks/store.DqkSHDZN.js";
import {
    o as xc
} from "../chunks/index-client.D2vHNTgQ.js";
import {
    e as Qe,
    i as ws,
    h as Jr,
    s as _a,
    d as Ha,
    a as Ga,
    b as Te,
    L as me,
    c as mt,
    f as Ie,
    g as Ue,
    j as ea,
    x as ta,
    k as gr,
    l as br,
    m as ra,
    p as Ec,
    n as Oa,
    z as Ns,
    o as Yr,
    q as Kr,
    r as Ar,
    t as Cc
} from "../chunks/stores.CivBd9eg.js";
import {
    g as de
} from "../chunks/index.GLY1y_G2.js";

function _s(e, t) {
    return t
}

function Dc(e, t, r, a) {
    for (var s = [], n = t.length, o = 0; o < n; o++) rc(t[o].e, s, !0);
    var c = n > 0 && s.length === 0 && r !== null;
    if (c) {
        var i = r.parentNode;
        ac(i), i.append(r), a.clear(), it(e, t[0].prev, t[n - 1].next)
    }
    sc(s, () => {
        for (var p = 0; p < n; p++) {
            var m = t[p];
            c || (a.delete(m.k), it(e, m.prev, m.next)), nc(m.e, !c)
        }
    })
}

function Hs(e, t, r, a, s, n = null) {
    var o = e,
        c = {
            flags: t,
            items: new Map,
            first: null
        },
        i = (t & Tn) !== 0;
    if (i) {
        var p = e;
        o = xe ? Ra(oc(p)) : p.appendChild($o())
    }
    xe && Pn();
    var m = null,
        h = !1;
    qo(() => {
        var l = r(),
            u = Jo(l) ? l : l == null ? [] : vn(l),
            L = u.length;
        if (h && L === 0) return;
        h = L === 0;
        let x = !1;
        if (xe) {
            var k = o.data === ec;
            k !== (L === 0) && (o = Ps(), Ra(o), ka(!1), x = !0)
        }
        if (xe) {
            for (var y = null, v, E = 0; E < L; E++) {
                if (pr.nodeType === 8 && pr.data === cc) {
                    o = pr, x = !0, ka(!1);
                    break
                }
                var M = u[E],
                    Y = a(M, E);
                v = Nn(pr, c, y, null, M, Y, E, s, t), c.items.set(Y, v), y = v
            }
            L > 0 && Ra(Ps())
        }
        if (!xe) {
            var V = pc;
            jc(u, c, o, s, t, (V.f & Hr) !== 0, a)
        }
        n !== null && (L === 0 ? m ? zn(m) : m = Zn(() => n(o)) : m !== null && tc(m, () => {
            m = null
        })), x && ka(!0), r()
    }), xe && (o = pr)
}

function jc(e, t, r, a, s, n, o) {
    var g, I, f, C;
    var c = (s & ic) !== 0,
        i = (s & (ls | us)) !== 0,
        p = e.length,
        m = t.items,
        h = t.first,
        l = h,
        u, L = null,
        x, k = [],
        y = [],
        v, E, M, Y;
    if (c)
        for (Y = 0; Y < p; Y += 1) v = e[Y], E = o(v, Y), M = m.get(E), M !== void 0 && ((g = M.a) == null || g.measure(), (x ?? (x = new Set)).add(M));
    for (Y = 0; Y < p; Y += 1) {
        if (v = e[Y], E = o(v, Y), M = m.get(E), M === void 0) {
            var V = l ? l.e.nodes_start : r;
            L = Nn(V, t, L, L === null ? t.first : L.next, v, E, Y, a, s), m.set(E, L), k = [], y = [], l = L.next;
            continue
        }
        if (i && Rc(M, v, Y, s), M.e.f & Hr && (zn(M.e), c && ((I = M.a) == null || I.unfix(), (x ?? (x = new Set)).delete(M))), M !== l) {
            if (u !== void 0 && u.has(M)) {
                if (k.length < y.length) {
                    var H = y[0],
                        Q;
                    L = H.prev;
                    var J = k[0],
                        se = k[k.length - 1];
                    for (Q = 0; Q < k.length; Q += 1) Gs(k[Q], H, r);
                    for (Q = 0; Q < y.length; Q += 1) u.delete(y[Q]);
                    it(t, J.prev, se.next), it(t, L, J), it(t, se, H), l = H, L = se, Y -= 1, k = [], y = []
                } else u.delete(M), Gs(M, l, r), it(t, M.prev, M.next), it(t, M, L === null ? t.first : L.next), it(t, L, M), L = M;
                continue
            }
            for (k = [], y = []; l !== null && l.k !== E;)(n || !(l.e.f & Hr)) && (u ?? (u = new Set)).add(l), y.push(l), l = l.next;
            if (l === null) continue;
            M = l
        }
        k.push(M), L = M, l = M.next
    }
    if (l !== null || u !== void 0) {
        for (var z = u === void 0 ? [] : vn(u); l !== null;)(n || !(l.e.f & Hr)) && z.push(l), l = l.next;
        var F = z.length;
        if (F > 0) {
            var re = s & Tn && p === 0 ? r : null;
            if (c) {
                for (Y = 0; Y < F; Y += 1)(f = z[Y].a) == null || f.measure();
                for (Y = 0; Y < F; Y += 1)(C = z[Y].a) == null || C.fix()
            }
            Dc(t, z, re, m)
        }
    }
    c && Na(() => {
        var A;
        if (x !== void 0)
            for (M of x)(A = M.a) == null || A.apply()
    }), vs.first = t.first && t.first.e, vs.last = L && L.e
}

function Rc(e, t, r, a) {
    a & ls && zs(e.v, t), a & us ? zs(e.i, r) : e.i = r
}

function Nn(e, t, r, a, s, n, o, c, i) {
    var p = (i & ls) !== 0,
        m = (i & hc) === 0,
        h = p ? m ? mc(s) : Zs(s) : s,
        l = i & us ? Zs(o) : o,
        u = {
            i: l,
            v: h,
            k: n,
            a: null,
            e: null,
            prev: r,
            next: a
        };
    try {
        return u.e = Zn(() => c(e, h, l), xe), u.e.prev = r && r.e, u.e.next = a && a.e, r === null ? t.first = u : (r.next = u, r.e.next = u.e), a !== null && (a.prev = u, a.e.prev = u.e), u
    } finally {}
}

function Gs(e, t, r) {
    for (var a = e.next ? e.next.e.nodes_start : r, s = t ? t.e.nodes_start : r, n = e.e.nodes_start; n !== a;) {
        var o = lc(n);
        s.before(n), n = o
    }
}

function it(e, t, r) {
    t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e)
}

function bs(e, t, r, a, s) {
    var c;
    xe && Pn();
    var n = (c = t.$$slots) == null ? void 0 : c[r],
        o = !1;
    n === !0 && (n = t.children, o = !0), n === void 0 || n(e, o ? () => a : a)
}

function ce(e) {
    if (xe) {
        var t = !1,
            r = () => {
                if (!t) {
                    if (t = !0, e.hasAttribute("value")) {
                        var a = e.value;
                        aa(e, "value", null), e.value = a
                    }
                    if (e.hasAttribute("checked")) {
                        var s = e.checked;
                        aa(e, "checked", null), e.checked = s
                    }
                }
            };
        e.__on_r = r, uc(r), Uc()
    }
}

function aa(e, t, r, a) {
    var s = e.__attributes ?? (e.__attributes = {});
    xe && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || s[t] !== (s[t] = r) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[dc] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && kc(e).includes(t) ? e[t] = r : e.setAttribute(t, r))
}
var Os = new Map;

function kc(e) {
    var t = Os.get(e.nodeName);
    if (t) return t;
    Os.set(e.nodeName, t = []);
    for (var r, a = Ts(e), s = Element.prototype; s !== a;) {
        r = gc(a);
        for (var n in r) r[n].set && t.push(n);
        a = Ts(a)
    }
    return t
}

function Mc(e, t) {
    var r = e.__className,
        a = Yc(t);
    xe && e.className === a ? e.__className = a : (r !== a || xe && e.className !== a) && (t == null ? e.removeAttribute("class") : e.className = a, e.__className = a)
}

function Yc(e) {
    return e ?? ""
}

function _n(e, t, r) {
    if (r) {
        if (e.classList.contains(t)) return;
        e.classList.add(t)
    } else {
        if (!e.classList.contains(t)) return;
        e.classList.remove(t)
    }
}

function Wa(e, t, r = t) {
    var a = bc();
    gs(e, "input", () => {
        var s = Bs(e) ? Vs(e.value) : e.value;
        r(s), a && s !== (s = t()) && (e.value = s ?? "")
    }), ds(() => {
        var s = t();
        if (xe && e.defaultValue !== e.value) {
            r(e.value);
            return
        }
        Bs(e) && s === Vs(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "")
    })
}
const Ma = new Set;

function Se(e, t, r, a, s = a) {
    var n = r.getAttribute("type") === "checkbox",
        o = e;
    let c = !1;
    if (t !== null)
        for (var i of t) o = o[i] ?? (o[i] = []);
    o.push(r), gs(r, "change", () => {
        var p = r.__value;
        n && (p = Ws(o, p, r.checked)), s(p)
    }, () => s(n ? [] : null)), ds(() => {
        var p = a();
        if (xe && r.defaultChecked !== r.checked) {
            c = !0;
            return
        }
        n ? (p = p || [], r.checked = p.includes(r.__value)) : r.checked = yc(r.__value, p)
    }), wn(() => {
        var p = o.indexOf(r);
        p !== -1 && o.splice(p, 1)
    }), Ma.has(o) || (Ma.add(o), Na(() => {
        o.sort((p, m) => p.compareDocumentPosition(m) === 4 ? -1 : 1), Ma.delete(o)
    })), Na(() => {
        if (c) {
            var p;
            if (n) p = Ws(o, p, r.checked);
            else {
                var m = o.find(h => h.checked);
                p = m == null ? void 0 : m.__value
            }
            s(p)
        }
    })
}

function ir(e, t, r = t) {
    gs(e, "change", () => {
        var a = e.checked;
        r(a)
    }), t() == null && r(!1), ds(() => {
        var a = t();
        e.checked = !!a
    })
}

function Ws(e, t, r) {
    for (var a = new Set, s = 0; s < e.length; s += 1) e[s].checked && a.add(e[s].__value);
    return r || a.delete(t), Array.from(a)
}

function Bs(e) {
    var t = e.type;
    return t === "number" || t === "range"
}

function Vs(e) {
    return e === "" ? null : +e
}

function Yt(e, t, r) {
    var a = fc(e, t);
    a && a.set && (e[t] = r, wn(() => {
        e[t] = null
    }))
}

function Gr(e, t) {
    return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}

function Kc(e, t) {
    return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
}

function Hn(e) {
    let t, r, a;
    e.length !== 2 ? (t = Gr, r = (c, i) => Gr(e(c), i), a = (c, i) => e(c) - i) : (t = e === Gr || e === Kc ? e : Ac, r = e, a = e);

    function s(c, i, p = 0, m = c.length) {
        if (p < m) {
            if (t(i, i) !== 0) return m;
            do {
                const h = p + m >>> 1;
                r(c[h], i) < 0 ? p = h + 1 : m = h
            } while (p < m)
        }
        return p
    }

    function n(c, i, p = 0, m = c.length) {
        if (p < m) {
            if (t(i, i) !== 0) return m;
            do {
                const h = p + m >>> 1;
                r(c[h], i) <= 0 ? p = h + 1 : m = h
            } while (p < m)
        }
        return p
    }

    function o(c, i, p = 0, m = c.length) {
        const h = s(c, i, p, m - 1);
        return h > p && a(c[h - 1], i) > -a(c[h], i) ? h - 1 : h
    }
    return {
        left: s,
        center: o,
        right: n
    }
}

function Ac() {
    return 0
}

function Pc(e) {
    return e === null ? NaN : +e
}
const vc = Hn(Gr),
    zc = vc.right;
Hn(Pc).center;

function Ya(e, t) {
    let r, a;
    for (const s of e) s != null && (r === void 0 ? s >= s && (r = a = s) : (r > s && (r = s), a < s && (a = s)));
    return [r, a]
}
class Ba extends Map {
    constructor(t, r = wc) {
        if (super(), Object.defineProperties(this, {
                _intern: {
                    value: new Map
                },
                _key: {
                    value: r
                }
            }), t != null)
            for (const [a, s] of t) this.set(a, s)
    }
    get(t) {
        return super.get(Qs(this, t))
    }
    has(t) {
        return super.has(Qs(this, t))
    }
    set(t, r) {
        return super.set(Zc(this, t), r)
    }
    delete(t) {
        return super.delete(Tc(this, t))
    }
}

function Qs({
    _intern: e,
    _key: t
}, r) {
    const a = t(r);
    return e.has(a) ? e.get(a) : r
}

function Zc({
    _intern: e,
    _key: t
}, r) {
    const a = t(r);
    return e.has(a) ? e.get(a) : (e.set(a, r), r)
}

function Tc({
    _intern: e,
    _key: t
}, r) {
    const a = t(r);
    return e.has(a) && (r = e.get(a), e.delete(a)), r
}

function wc(e) {
    return e !== null && typeof e == "object" ? e.valueOf() : e
}

function Nc(e) {
    return e
}

function Fs(e, t, ...r) {
    return _c(e, Nc, t, r)
}

function _c(e, t, r, a) {
    return function s(n, o) {
        if (o >= a.length) return r(n);
        const c = new Ba,
            i = a[o++];
        let p = -1;
        for (const m of n) {
            const h = i(m, ++p, n),
                l = c.get(h);
            l ? l.push(m) : c.set(h, [m])
        }
        for (const [m, h] of c) c.set(m, s(h, o));
        return t(c)
    }(e, 0)
}
const Hc = Math.sqrt(50),
    Gc = Math.sqrt(10),
    Oc = Math.sqrt(2);

function sa(e, t, r) {
    const a = (t - e) / Math.max(0, r),
        s = Math.floor(Math.log10(a)),
        n = a / Math.pow(10, s),
        o = n >= Hc ? 10 : n >= Gc ? 5 : n >= Oc ? 2 : 1;
    let c, i, p;
    return s < 0 ? (p = Math.pow(10, -s) / o, c = Math.round(e * p), i = Math.round(t * p), c / p < e && ++c, i / p > t && --i, p = -p) : (p = Math.pow(10, s) * o, c = Math.round(e / p), i = Math.round(t / p), c * p < e && ++c, i * p > t && --i), i < c && .5 <= r && r < 2 ? sa(e, t, r * 2) : [c, i, p]
}

function Or(e, t, r) {
    if (t = +t, e = +e, r = +r, !(r > 0)) return [];
    if (e === t) return [e];
    const a = t < e,
        [s, n, o] = a ? sa(t, e, r) : sa(e, t, r);
    if (!(n >= s)) return [];
    const c = n - s + 1,
        i = new Array(c);
    if (a)
        if (o < 0)
            for (let p = 0; p < c; ++p) i[p] = (n - p) / -o;
        else
            for (let p = 0; p < c; ++p) i[p] = (n - p) * o;
    else if (o < 0)
        for (let p = 0; p < c; ++p) i[p] = (s + p) / -o;
    else
        for (let p = 0; p < c; ++p) i[p] = (s + p) * o;
    return i
}

function Va(e, t, r) {
    return t = +t, e = +e, r = +r, sa(e, t, r)[2]
}

function Wc(e, t, r) {
    t = +t, e = +e, r = +r;
    const a = t < e,
        s = a ? Va(t, e, r) : Va(e, t, r);
    return (a ? -1 : 1) * (s < 0 ? 1 / -s : s)
}

function Bc(e, t, r) {
    e = +e, t = +t, r = (s = arguments.length) < 2 ? (t = e, e = 0, 1) : s < 3 ? 1 : +r;
    for (var a = -1, s = Math.max(0, Math.ceil((t - e) / r)) | 0, n = new Array(s); ++a < s;) n[a] = e + a * r;
    return n
}

function Vc(e) {
    return e
}
var Ka = 1,
    Wr = 2,
    Qa = 3,
    lr = 4,
    Xs = 1e-6;

function Qc(e) {
    return "translate(" + e + ",0)"
}

function Fc(e) {
    return "translate(0," + e + ")"
}

function Xc(e) {
    return t => +e(t)
}

function $c(e, t) {
    return t = Math.max(0, e.bandwidth() - t * 2) / 2, e.round() && (t = Math.round(t)), r => +e(r) + t
}

function qc() {
    return !this.__axis
}

function fs(e, t) {
    var r = [],
        a = null,
        s = null,
        n = 6,
        o = 6,
        c = 3,
        i = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : .5,
        p = e === Ka || e === lr ? -1 : 1,
        m = e === lr || e === Wr ? "x" : "y",
        h = e === Ka || e === Qa ? Qc : Fc;

    function l(u) {
        var L = a ?? (t.ticks ? t.ticks.apply(t, r) : t.domain()),
            x = s ?? (t.tickFormat ? t.tickFormat.apply(t, r) : Vc),
            k = Math.max(n, 0) + c,
            y = t.range(),
            v = +y[0] + i,
            E = +y[y.length - 1] + i,
            M = (t.bandwidth ? $c : Xc)(t.copy(), i),
            Y = u.selection ? u.selection() : u,
            V = Y.selectAll(".domain").data([null]),
            H = Y.selectAll(".tick").data(L, t).order(),
            Q = H.exit(),
            J = H.enter().append("g").attr("class", "tick"),
            se = H.select("line"),
            z = H.select("text");
        V = V.merge(V.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), H = H.merge(J), se = se.merge(J.append("line").attr("stroke", "currentColor").attr(m + "2", p * n)), z = z.merge(J.append("text").attr("fill", "currentColor").attr(m, p * k).attr("dy", e === Ka ? "0em" : e === Qa ? "0.71em" : "0.32em")), u !== Y && (V = V.transition(u), H = H.transition(u), se = se.transition(u), z = z.transition(u), Q = Q.transition(u).attr("opacity", Xs).attr("transform", function(F) {
            return isFinite(F = M(F)) ? h(F + i) : this.getAttribute("transform")
        }), J.attr("opacity", Xs).attr("transform", function(F) {
            var re = this.parentNode.__axis;
            return h((re && isFinite(re = re(F)) ? re : M(F)) + i)
        })), Q.remove(), V.attr("d", e === lr || e === Wr ? o ? "M" + p * o + "," + v + "H" + i + "V" + E + "H" + p * o : "M" + i + "," + v + "V" + E : o ? "M" + v + "," + p * o + "V" + i + "H" + E + "V" + p * o : "M" + v + "," + i + "H" + E), H.attr("opacity", 1).attr("transform", function(F) {
            return h(M(F) + i)
        }), se.attr(m + "2", p * n), z.attr(m, p * k).text(x), Y.filter(qc).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", e === Wr ? "start" : e === lr ? "end" : "middle"), Y.each(function() {
            this.__axis = M
        })
    }
    return l.scale = function(u) {
        return arguments.length ? (t = u, l) : t
    }, l.ticks = function() {
        return r = Array.from(arguments), l
    }, l.tickArguments = function(u) {
        return arguments.length ? (r = u == null ? [] : Array.from(u), l) : r.slice()
    }, l.tickValues = function(u) {
        return arguments.length ? (a = u == null ? null : Array.from(u), l) : a && a.slice()
    }, l.tickFormat = function(u) {
        return arguments.length ? (s = u, l) : s
    }, l.tickSize = function(u) {
        return arguments.length ? (n = o = +u, l) : n
    }, l.tickSizeInner = function(u) {
        return arguments.length ? (n = +u, l) : n
    }, l.tickSizeOuter = function(u) {
        return arguments.length ? (o = +u, l) : o
    }, l.tickPadding = function(u) {
        return arguments.length ? (c = +u, l) : c
    }, l.offset = function(u) {
        return arguments.length ? (i = +u, l) : i
    }, l
}

function Jc(e) {
    return fs(Wr, e)
}

function $s(e) {
    return fs(Qa, e)
}

function qs(e) {
    return fs(lr, e)
}
var ep = {
    value: () => {}
};

function Is() {
    for (var e = 0, t = arguments.length, r = {}, a; e < t; ++e) {
        if (!(a = arguments[e] + "") || a in r || /[\s.]/.test(a)) throw new Error("illegal type: " + a);
        r[a] = []
    }
    return new Br(r)
}

function Br(e) {
    this._ = e
}

function tp(e, t) {
    return e.trim().split(/^|\s+/).map(function(r) {
        var a = "",
            s = r.indexOf(".");
        if (s >= 0 && (a = r.slice(s + 1), r = r.slice(0, s)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
        return {
            type: r,
            name: a
        }
    })
}
Br.prototype = Is.prototype = {
    constructor: Br,
    on: function(e, t) {
        var r = this._,
            a = tp(e + "", r),
            s, n = -1,
            o = a.length;
        if (arguments.length < 2) {
            for (; ++n < o;)
                if ((s = (e = a[n]).type) && (s = rp(r[s], e.name))) return s;
            return
        }
        if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
        for (; ++n < o;)
            if (s = (e = a[n]).type) r[s] = Js(r[s], e.name, t);
            else if (t == null)
            for (s in r) r[s] = Js(r[s], e.name, null);
        return this
    },
    copy: function() {
        var e = {},
            t = this._;
        for (var r in t) e[r] = t[r].slice();
        return new Br(e)
    },
    call: function(e, t) {
        if ((s = arguments.length - 2) > 0)
            for (var r = new Array(s), a = 0, s, n; a < s; ++a) r[a] = arguments[a + 2];
        if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
        for (n = this._[e], a = 0, s = n.length; a < s; ++a) n[a].value.apply(t, r)
    },
    apply: function(e, t, r) {
        if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
        for (var a = this._[e], s = 0, n = a.length; s < n; ++s) a[s].value.apply(t, r)
    }
};

function rp(e, t) {
    for (var r = 0, a = e.length, s; r < a; ++r)
        if ((s = e[r]).name === t) return s.value
}

function Js(e, t, r) {
    for (var a = 0, s = e.length; a < s; ++a)
        if (e[a].name === t) {
            e[a] = ep, e = e.slice(0, a).concat(e.slice(a + 1));
            break
        } return r != null && e.push({
        name: t,
        value: r
    }), e
}
var Fa = "http://www.w3.org/1999/xhtml";
const en = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: Fa,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

function ba(e) {
    var t = e += "",
        r = t.indexOf(":");
    return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), en.hasOwnProperty(t) ? {
        space: en[t],
        local: e
    } : e
}

function ap(e) {
    return function() {
        var t = this.ownerDocument,
            r = this.namespaceURI;
        return r === Fa && t.documentElement.namespaceURI === Fa ? t.createElement(e) : t.createElementNS(r, e)
    }
}

function sp(e) {
    return function() {
        return this.ownerDocument.createElementNS(e.space, e.local)
    }
}

function Gn(e) {
    var t = ba(e);
    return (t.local ? sp : ap)(t)
}

function np() {}

function Ls(e) {
    return e == null ? np : function() {
        return this.querySelector(e)
    }
}

function op(e) {
    typeof e != "function" && (e = Ls(e));
    for (var t = this._groups, r = t.length, a = new Array(r), s = 0; s < r; ++s)
        for (var n = t[s], o = n.length, c = a[s] = new Array(o), i, p, m = 0; m < o; ++m)(i = n[m]) && (p = e.call(i, i.__data__, m, n)) && ("__data__" in i && (p.__data__ = i.__data__), c[m] = p);
    return new Le(a, this._parents)
}

function On(e) {
    return e == null ? [] : Array.isArray(e) ? e : Array.from(e)
}

function cp() {
    return []
}

function Wn(e) {
    return e == null ? cp : function() {
        return this.querySelectorAll(e)
    }
}

function pp(e) {
    return function() {
        return On(e.apply(this, arguments))
    }
}

function ip(e) {
    typeof e == "function" ? e = pp(e) : e = Wn(e);
    for (var t = this._groups, r = t.length, a = [], s = [], n = 0; n < r; ++n)
        for (var o = t[n], c = o.length, i, p = 0; p < c; ++p)(i = o[p]) && (a.push(e.call(i, i.__data__, p, o)), s.push(i));
    return new Le(a, s)
}

function Bn(e) {
    return function() {
        return this.matches(e)
    }
}

function Vn(e) {
    return function(t) {
        return t.matches(e)
    }
}
var mp = Array.prototype.find;

function hp(e) {
    return function() {
        return mp.call(this.children, e)
    }
}

function lp() {
    return this.firstElementChild
}

function up(e) {
    return this.select(e == null ? lp : hp(typeof e == "function" ? e : Vn(e)))
}
var dp = Array.prototype.filter;

function gp() {
    return Array.from(this.children)
}

function bp(e) {
    return function() {
        return dp.call(this.children, e)
    }
}

function fp(e) {
    return this.selectAll(e == null ? gp : bp(typeof e == "function" ? e : Vn(e)))
}

function Ip(e) {
    typeof e != "function" && (e = Bn(e));
    for (var t = this._groups, r = t.length, a = new Array(r), s = 0; s < r; ++s)
        for (var n = t[s], o = n.length, c = a[s] = [], i, p = 0; p < o; ++p)(i = n[p]) && e.call(i, i.__data__, p, n) && c.push(i);
    return new Le(a, this._parents)
}

function Qn(e) {
    return new Array(e.length)
}

function Lp() {
    return new Le(this._enter || this._groups.map(Qn), this._parents)
}

function na(e, t) {
    this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t
}
na.prototype = {
    constructor: na,
    appendChild: function(e) {
        return this._parent.insertBefore(e, this._next)
    },
    insertBefore: function(e, t) {
        return this._parent.insertBefore(e, t)
    },
    querySelector: function(e) {
        return this._parent.querySelector(e)
    },
    querySelectorAll: function(e) {
        return this._parent.querySelectorAll(e)
    }
};

function yp(e) {
    return function() {
        return e
    }
}

function Sp(e, t, r, a, s, n) {
    for (var o = 0, c, i = t.length, p = n.length; o < p; ++o)(c = t[o]) ? (c.__data__ = n[o], a[o] = c) : r[o] = new na(e, n[o]);
    for (; o < i; ++o)(c = t[o]) && (s[o] = c)
}

function Up(e, t, r, a, s, n, o) {
    var c, i, p = new Map,
        m = t.length,
        h = n.length,
        l = new Array(m),
        u;
    for (c = 0; c < m; ++c)(i = t[c]) && (l[c] = u = o.call(i, i.__data__, c, t) + "", p.has(u) ? s[c] = i : p.set(u, i));
    for (c = 0; c < h; ++c) u = o.call(e, n[c], c, n) + "", (i = p.get(u)) ? (a[c] = i, i.__data__ = n[c], p.delete(u)) : r[c] = new na(e, n[c]);
    for (c = 0; c < m; ++c)(i = t[c]) && p.get(l[c]) === i && (s[c] = i)
}

function xp(e) {
    return e.__data__
}

function Ep(e, t) {
    if (!arguments.length) return Array.from(this, xp);
    var r = t ? Up : Sp,
        a = this._parents,
        s = this._groups;
    typeof e != "function" && (e = yp(e));
    for (var n = s.length, o = new Array(n), c = new Array(n), i = new Array(n), p = 0; p < n; ++p) {
        var m = a[p],
            h = s[p],
            l = h.length,
            u = Cp(e.call(m, m && m.__data__, p, a)),
            L = u.length,
            x = c[p] = new Array(L),
            k = o[p] = new Array(L),
            y = i[p] = new Array(l);
        r(m, h, x, k, y, u, t);
        for (var v = 0, E = 0, M, Y; v < L; ++v)
            if (M = x[v]) {
                for (v >= E && (E = v + 1); !(Y = k[E]) && ++E < L;);
                M._next = Y || null
            }
    }
    return o = new Le(o, a), o._enter = c, o._exit = i, o
}

function Cp(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e)
}

function Dp() {
    return new Le(this._exit || this._groups.map(Qn), this._parents)
}

function jp(e, t, r) {
    var a = this.enter(),
        s = this,
        n = this.exit();
    return typeof e == "function" ? (a = e(a), a && (a = a.selection())) : a = a.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), r == null ? n.remove() : r(n), a && s ? a.merge(s).order() : s
}

function Rp(e) {
    for (var t = e.selection ? e.selection() : e, r = this._groups, a = t._groups, s = r.length, n = a.length, o = Math.min(s, n), c = new Array(s), i = 0; i < o; ++i)
        for (var p = r[i], m = a[i], h = p.length, l = c[i] = new Array(h), u, L = 0; L < h; ++L)(u = p[L] || m[L]) && (l[L] = u);
    for (; i < s; ++i) c[i] = r[i];
    return new Le(c, this._parents)
}

function kp() {
    for (var e = this._groups, t = -1, r = e.length; ++t < r;)
        for (var a = e[t], s = a.length - 1, n = a[s], o; --s >= 0;)(o = a[s]) && (n && o.compareDocumentPosition(n) ^ 4 && n.parentNode.insertBefore(o, n), n = o);
    return this
}

function Mp(e) {
    e || (e = Yp);

    function t(h, l) {
        return h && l ? e(h.__data__, l.__data__) : !h - !l
    }
    for (var r = this._groups, a = r.length, s = new Array(a), n = 0; n < a; ++n) {
        for (var o = r[n], c = o.length, i = s[n] = new Array(c), p, m = 0; m < c; ++m)(p = o[m]) && (i[m] = p);
        i.sort(t)
    }
    return new Le(s, this._parents).order()
}

function Yp(e, t) {
    return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
}

function Kp() {
    var e = arguments[0];
    return arguments[0] = this, e.apply(null, arguments), this
}

function Ap() {
    return Array.from(this)
}

function Pp() {
    for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
        for (var a = e[t], s = 0, n = a.length; s < n; ++s) {
            var o = a[s];
            if (o) return o
        }
    return null
}

function vp() {
    let e = 0;
    for (const t of this) ++e;
    return e
}

function zp() {
    return !this.node()
}

function Zp(e) {
    for (var t = this._groups, r = 0, a = t.length; r < a; ++r)
        for (var s = t[r], n = 0, o = s.length, c; n < o; ++n)(c = s[n]) && e.call(c, c.__data__, n, s);
    return this
}

function Tp(e) {
    return function() {
        this.removeAttribute(e)
    }
}

function wp(e) {
    return function() {
        this.removeAttributeNS(e.space, e.local)
    }
}

function Np(e, t) {
    return function() {
        this.setAttribute(e, t)
    }
}

function _p(e, t) {
    return function() {
        this.setAttributeNS(e.space, e.local, t)
    }
}

function Hp(e, t) {
    return function() {
        var r = t.apply(this, arguments);
        r == null ? this.removeAttribute(e) : this.setAttribute(e, r)
    }
}

function Gp(e, t) {
    return function() {
        var r = t.apply(this, arguments);
        r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r)
    }
}

function Op(e, t) {
    var r = ba(e);
    if (arguments.length < 2) {
        var a = this.node();
        return r.local ? a.getAttributeNS(r.space, r.local) : a.getAttribute(r)
    }
    return this.each((t == null ? r.local ? wp : Tp : typeof t == "function" ? r.local ? Gp : Hp : r.local ? _p : Np)(r, t))
}

function Fn(e) {
    return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView
}

function Wp(e) {
    return function() {
        this.style.removeProperty(e)
    }
}

function Bp(e, t, r) {
    return function() {
        this.style.setProperty(e, t, r)
    }
}

function Vp(e, t, r) {
    return function() {
        var a = t.apply(this, arguments);
        a == null ? this.style.removeProperty(e) : this.style.setProperty(e, a, r)
    }
}

function Qp(e, t, r) {
    return arguments.length > 1 ? this.each((t == null ? Wp : typeof t == "function" ? Vp : Bp)(e, t, r ?? "")) : Wt(this.node(), e)
}

function Wt(e, t) {
    return e.style.getPropertyValue(t) || Fn(e).getComputedStyle(e, null).getPropertyValue(t)
}

function Fp(e) {
    return function() {
        delete this[e]
    }
}

function Xp(e, t) {
    return function() {
        this[e] = t
    }
}

function $p(e, t) {
    return function() {
        var r = t.apply(this, arguments);
        r == null ? delete this[e] : this[e] = r
    }
}

function qp(e, t) {
    return arguments.length > 1 ? this.each((t == null ? Fp : typeof t == "function" ? $p : Xp)(e, t)) : this.node()[e]
}

function Xn(e) {
    return e.trim().split(/^|\s+/)
}

function ys(e) {
    return e.classList || new $n(e)
}

function $n(e) {
    this._node = e, this._names = Xn(e.getAttribute("class") || "")
}
$n.prototype = {
    add: function(e) {
        var t = this._names.indexOf(e);
        t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")))
    },
    remove: function(e) {
        var t = this._names.indexOf(e);
        t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")))
    },
    contains: function(e) {
        return this._names.indexOf(e) >= 0
    }
};

function qn(e, t) {
    for (var r = ys(e), a = -1, s = t.length; ++a < s;) r.add(t[a])
}

function Jn(e, t) {
    for (var r = ys(e), a = -1, s = t.length; ++a < s;) r.remove(t[a])
}

function Jp(e) {
    return function() {
        qn(this, e)
    }
}

function ei(e) {
    return function() {
        Jn(this, e)
    }
}

function ti(e, t) {
    return function() {
        (t.apply(this, arguments) ? qn : Jn)(this, e)
    }
}

function ri(e, t) {
    var r = Xn(e + "");
    if (arguments.length < 2) {
        for (var a = ys(this.node()), s = -1, n = r.length; ++s < n;)
            if (!a.contains(r[s])) return !1;
        return !0
    }
    return this.each((typeof t == "function" ? ti : t ? Jp : ei)(r, t))
}

function ai() {
    this.textContent = ""
}

function si(e) {
    return function() {
        this.textContent = e
    }
}

function ni(e) {
    return function() {
        var t = e.apply(this, arguments);
        this.textContent = t ?? ""
    }
}

function oi(e) {
    return arguments.length ? this.each(e == null ? ai : (typeof e == "function" ? ni : si)(e)) : this.node().textContent
}

function ci() {
    this.innerHTML = ""
}

function pi(e) {
    return function() {
        this.innerHTML = e
    }
}

function ii(e) {
    return function() {
        var t = e.apply(this, arguments);
        this.innerHTML = t ?? ""
    }
}

function mi(e) {
    return arguments.length ? this.each(e == null ? ci : (typeof e == "function" ? ii : pi)(e)) : this.node().innerHTML
}

function hi() {
    this.nextSibling && this.parentNode.appendChild(this)
}

function li() {
    return this.each(hi)
}

function ui() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
}

function di() {
    return this.each(ui)
}

function gi(e) {
    var t = typeof e == "function" ? e : Gn(e);
    return this.select(function() {
        return this.appendChild(t.apply(this, arguments))
    })
}

function bi() {
    return null
}

function fi(e, t) {
    var r = typeof e == "function" ? e : Gn(e),
        a = t == null ? bi : typeof t == "function" ? t : Ls(t);
    return this.select(function() {
        return this.insertBefore(r.apply(this, arguments), a.apply(this, arguments) || null)
    })
}

function Ii() {
    var e = this.parentNode;
    e && e.removeChild(this)
}

function Li() {
    return this.each(Ii)
}

function yi() {
    var e = this.cloneNode(!1),
        t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e
}

function Si() {
    var e = this.cloneNode(!0),
        t = this.parentNode;
    return t ? t.insertBefore(e, this.nextSibling) : e
}

function Ui(e) {
    return this.select(e ? Si : yi)
}

function xi(e) {
    return arguments.length ? this.property("__data__", e) : this.node().__data__
}

function Ei(e) {
    return function(t) {
        e.call(this, t, this.__data__)
    }
}

function Ci(e) {
    return e.trim().split(/^|\s+/).map(function(t) {
        var r = "",
            a = t.indexOf(".");
        return a >= 0 && (r = t.slice(a + 1), t = t.slice(0, a)), {
            type: t,
            name: r
        }
    })
}

function Di(e) {
    return function() {
        var t = this.__on;
        if (t) {
            for (var r = 0, a = -1, s = t.length, n; r < s; ++r) n = t[r], (!e.type || n.type === e.type) && n.name === e.name ? this.removeEventListener(n.type, n.listener, n.options) : t[++a] = n;
            ++a ? t.length = a : delete this.__on
        }
    }
}

function ji(e, t, r) {
    return function() {
        var a = this.__on,
            s, n = Ei(t);
        if (a) {
            for (var o = 0, c = a.length; o < c; ++o)
                if ((s = a[o]).type === e.type && s.name === e.name) {
                    this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = n, s.options = r), s.value = t;
                    return
                }
        }
        this.addEventListener(e.type, n, r), s = {
            type: e.type,
            name: e.name,
            value: t,
            listener: n,
            options: r
        }, a ? a.push(s) : this.__on = [s]
    }
}

function Ri(e, t, r) {
    var a = Ci(e + ""),
        s, n = a.length,
        o;
    if (arguments.length < 2) {
        var c = this.node().__on;
        if (c) {
            for (var i = 0, p = c.length, m; i < p; ++i)
                for (s = 0, m = c[i]; s < n; ++s)
                    if ((o = a[s]).type === m.type && o.name === m.name) return m.value
        }
        return
    }
    for (c = t ? ji : Di, s = 0; s < n; ++s) this.each(c(a[s], t, r));
    return this
}

function eo(e, t, r) {
    var a = Fn(e),
        s = a.CustomEvent;
    typeof s == "function" ? s = new s(t, r) : (s = a.document.createEvent("Event"), r ? (s.initEvent(t, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s)
}

function ki(e, t) {
    return function() {
        return eo(this, e, t)
    }
}

function Mi(e, t) {
    return function() {
        return eo(this, e, t.apply(this, arguments))
    }
}

function Yi(e, t) {
    return this.each((typeof t == "function" ? Mi : ki)(e, t))
}

function* Ki() {
    for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
        for (var a = e[t], s = 0, n = a.length, o; s < n; ++s)(o = a[s]) && (yield o)
}
var Ss = [null];

function Le(e, t) {
    this._groups = e, this._parents = t
}

function Ur() {
    return new Le([
        [document.documentElement]
    ], Ss)
}

function Ai() {
    return this
}
Le.prototype = Ur.prototype = {
    constructor: Le,
    select: op,
    selectAll: ip,
    selectChild: up,
    selectChildren: fp,
    filter: Ip,
    data: Ep,
    enter: Lp,
    exit: Dp,
    join: jp,
    merge: Rp,
    selection: Ai,
    order: kp,
    sort: Mp,
    call: Kp,
    nodes: Ap,
    node: Pp,
    size: vp,
    empty: zp,
    each: Zp,
    attr: Op,
    style: Qp,
    property: qp,
    classed: ri,
    text: oi,
    html: mi,
    raise: li,
    lower: di,
    append: gi,
    insert: fi,
    remove: Li,
    clone: Ui,
    datum: xi,
    on: Ri,
    dispatch: Yi,
    [Symbol.iterator]: Ki
};

function O(e) {
    return typeof e == "string" ? new Le([
        [document.querySelector(e)]
    ], [document.documentElement]) : new Le([
        [e]
    ], Ss)
}

function Pi(e) {
    let t;
    for (; t = e.sourceEvent;) e = t;
    return e
}

function Ut(e, t) {
    if (e = Pi(e), t === void 0 && (t = e.currentTarget), t) {
        var r = t.ownerSVGElement || t;
        if (r.createSVGPoint) {
            var a = r.createSVGPoint();
            return a.x = e.clientX, a.y = e.clientY, a = a.matrixTransform(t.getScreenCTM().inverse()), [a.x, a.y]
        }
        if (t.getBoundingClientRect) {
            var s = t.getBoundingClientRect();
            return [e.clientX - s.left - t.clientLeft, e.clientY - s.top - t.clientTop]
        }
    }
    return [e.pageX, e.pageY]
}

function vi(e) {
    return typeof e == "string" ? new Le([document.querySelectorAll(e)], [document.documentElement]) : new Le([On(e)], Ss)
}
const Xa = {
    capture: !0,
    passive: !1
};

function $a(e) {
    e.preventDefault(), e.stopImmediatePropagation()
}

function zi(e) {
    var t = e.document.documentElement,
        r = O(e).on("dragstart.drag", $a, Xa);
    "onselectstart" in t ? r.on("selectstart.drag", $a, Xa) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none")
}

function Zi(e, t) {
    var r = e.document.documentElement,
        a = O(e).on("dragstart.drag", null);
    t && (a.on("click.drag", $a, Xa), setTimeout(function() {
        a.on("click.drag", null)
    }, 0)), "onselectstart" in r ? a.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect, delete r.__noselect)
}

function Us(e, t, r) {
    e.prototype = t.prototype = r, r.constructor = e
}

function to(e, t) {
    var r = Object.create(e.prototype);
    for (var a in t) r[a] = t[a];
    return r
}

function xr() {}
var Ir = .7,
    oa = 1 / Ir,
    Ot = "\\s*([+-]?\\d+)\\s*",
    Lr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    _e = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    Ti = /^#([0-9a-f]{3,8})$/,
    wi = new RegExp(`^rgb\\(${Ot},${Ot},${Ot}\\)$`),
    Ni = new RegExp(`^rgb\\(${_e},${_e},${_e}\\)$`),
    _i = new RegExp(`^rgba\\(${Ot},${Ot},${Ot},${Lr}\\)$`),
    Hi = new RegExp(`^rgba\\(${_e},${_e},${_e},${Lr}\\)$`),
    Gi = new RegExp(`^hsl\\(${Lr},${_e},${_e}\\)$`),
    Oi = new RegExp(`^hsla\\(${Lr},${_e},${_e},${Lr}\\)$`),
    tn = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
Us(xr, He, {
    copy(e) {
        return Object.assign(new this.constructor, this, e)
    },
    displayable() {
        return this.rgb().displayable()
    },
    hex: rn,
    formatHex: rn,
    formatHex8: Wi,
    formatHsl: Bi,
    formatRgb: an,
    toString: an
});

function rn() {
    return this.rgb().formatHex()
}

function Wi() {
    return this.rgb().formatHex8()
}

function Bi() {
    return ro(this).formatHsl()
}

function an() {
    return this.rgb().formatRgb()
}

function He(e) {
    var t, r;
    return e = (e + "").trim().toLowerCase(), (t = Ti.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? sn(t) : r === 3 ? new Ee(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Pr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Pr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = wi.exec(e)) ? new Ee(t[1], t[2], t[3], 1) : (t = Ni.exec(e)) ? new Ee(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = _i.exec(e)) ? Pr(t[1], t[2], t[3], t[4]) : (t = Hi.exec(e)) ? Pr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Gi.exec(e)) ? cn(t[1], t[2] / 100, t[3] / 100, 1) : (t = Oi.exec(e)) ? cn(t[1], t[2] / 100, t[3] / 100, t[4]) : tn.hasOwnProperty(e) ? sn(tn[e]) : e === "transparent" ? new Ee(NaN, NaN, NaN, 0) : null
}

function sn(e) {
    return new Ee(e >> 16 & 255, e >> 8 & 255, e & 255, 1)
}

function Pr(e, t, r, a) {
    return a <= 0 && (e = t = r = NaN), new Ee(e, t, r, a)
}

function Vi(e) {
    return e instanceof xr || (e = He(e)), e ? (e = e.rgb(), new Ee(e.r, e.g, e.b, e.opacity)) : new Ee
}

function Dt(e, t, r, a) {
    return arguments.length === 1 ? Vi(e) : new Ee(e, t, r, a ?? 1)
}

function Ee(e, t, r, a) {
    this.r = +e, this.g = +t, this.b = +r, this.opacity = +a
}
Us(Ee, Dt, to(xr, {
    brighter(e) {
        return e = e == null ? oa : Math.pow(oa, e), new Ee(this.r * e, this.g * e, this.b * e, this.opacity)
    },
    darker(e) {
        return e = e == null ? Ir : Math.pow(Ir, e), new Ee(this.r * e, this.g * e, this.b * e, this.opacity)
    },
    rgb() {
        return this
    },
    clamp() {
        return new Ee(jt(this.r), jt(this.g), jt(this.b), ca(this.opacity))
    },
    displayable() {
        return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
    },
    hex: nn,
    formatHex: nn,
    formatHex8: Qi,
    formatRgb: on,
    toString: on
}));

function nn() {
    return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}`
}

function Qi() {
    return `#${Ct(this.r)}${Ct(this.g)}${Ct(this.b)}${Ct((isNaN(this.opacity)?1:this.opacity)*255)}`
}

function on() {
    const e = ca(this.opacity);
    return `${e===1?"rgb(":"rgba("}${jt(this.r)}, ${jt(this.g)}, ${jt(this.b)}${e===1?")":`, ${e})`}`
}

function ca(e) {
    return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}

function jt(e) {
    return Math.max(0, Math.min(255, Math.round(e) || 0))
}

function Ct(e) {
    return e = jt(e), (e < 16 ? "0" : "") + e.toString(16)
}

function cn(e, t, r, a) {
    return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Pe(e, t, r, a)
}

function ro(e) {
    if (e instanceof Pe) return new Pe(e.h, e.s, e.l, e.opacity);
    if (e instanceof xr || (e = He(e)), !e) return new Pe;
    if (e instanceof Pe) return e;
    e = e.rgb();
    var t = e.r / 255,
        r = e.g / 255,
        a = e.b / 255,
        s = Math.min(t, r, a),
        n = Math.max(t, r, a),
        o = NaN,
        c = n - s,
        i = (n + s) / 2;
    return c ? (t === n ? o = (r - a) / c + (r < a) * 6 : r === n ? o = (a - t) / c + 2 : o = (t - r) / c + 4, c /= i < .5 ? n + s : 2 - n - s, o *= 60) : c = i > 0 && i < 1 ? 0 : o, new Pe(o, c, i, e.opacity)
}

function Fi(e, t, r, a) {
    return arguments.length === 1 ? ro(e) : new Pe(e, t, r, a ?? 1)
}

function Pe(e, t, r, a) {
    this.h = +e, this.s = +t, this.l = +r, this.opacity = +a
}
Us(Pe, Fi, to(xr, {
    brighter(e) {
        return e = e == null ? oa : Math.pow(oa, e), new Pe(this.h, this.s, this.l * e, this.opacity)
    },
    darker(e) {
        return e = e == null ? Ir : Math.pow(Ir, e), new Pe(this.h, this.s, this.l * e, this.opacity)
    },
    rgb() {
        var e = this.h % 360 + (this.h < 0) * 360,
            t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
            r = this.l,
            a = r + (r < .5 ? r : 1 - r) * t,
            s = 2 * r - a;
        return new Ee(Aa(e >= 240 ? e - 240 : e + 120, s, a), Aa(e, s, a), Aa(e < 120 ? e + 240 : e - 120, s, a), this.opacity)
    },
    clamp() {
        return new Pe(pn(this.h), vr(this.s), vr(this.l), ca(this.opacity))
    },
    displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
    },
    formatHsl() {
        const e = ca(this.opacity);
        return `${e===1?"hsl(":"hsla("}${pn(this.h)}, ${vr(this.s)*100}%, ${vr(this.l)*100}%${e===1?")":`, ${e})`}`
    }
}));

function pn(e) {
    return e = (e || 0) % 360, e < 0 ? e + 360 : e
}

function vr(e) {
    return Math.max(0, Math.min(1, e || 0))
}

function Aa(e, t, r) {
    return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255
}

function Xi(e, t, r, a, s) {
    var n = e * e,
        o = n * e;
    return ((1 - 3 * e + 3 * n - o) * t + (4 - 6 * n + 3 * o) * r + (1 + 3 * e + 3 * n - 3 * o) * a + o * s) / 6
}

function $i(e) {
    var t = e.length - 1;
    return function(r) {
        var a = r <= 0 ? r = 0 : r >= 1 ? (r = 1, t - 1) : Math.floor(r * t),
            s = e[a],
            n = e[a + 1],
            o = a > 0 ? e[a - 1] : 2 * s - n,
            c = a < t - 1 ? e[a + 2] : 2 * n - s;
        return Xi((r - a / t) * t, o, s, n, c)
    }
}
const xs = e => () => e;

function qi(e, t) {
    return function(r) {
        return e + r * t
    }
}

function Ji(e, t, r) {
    return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r,
        function(a) {
            return Math.pow(e + a * t, r)
        }
}

function em(e) {
    return (e = +e) == 1 ? ao : function(t, r) {
        return r - t ? Ji(t, r, e) : xs(isNaN(t) ? r : t)
    }
}

function ao(e, t) {
    var r = t - e;
    return r ? qi(e, r) : xs(isNaN(e) ? t : e)
}
const pa = function e(t) {
    var r = em(t);

    function a(s, n) {
        var o = r((s = Dt(s)).r, (n = Dt(n)).r),
            c = r(s.g, n.g),
            i = r(s.b, n.b),
            p = ao(s.opacity, n.opacity);
        return function(m) {
            return s.r = o(m), s.g = c(m), s.b = i(m), s.opacity = p(m), s + ""
        }
    }
    return a.gamma = e, a
}(1);

function tm(e) {
    return function(t) {
        var r = t.length,
            a = new Array(r),
            s = new Array(r),
            n = new Array(r),
            o, c;
        for (o = 0; o < r; ++o) c = Dt(t[o]), a[o] = c.r || 0, s[o] = c.g || 0, n[o] = c.b || 0;
        return a = e(a), s = e(s), n = e(n), c.opacity = 1,
            function(i) {
                return c.r = a(i), c.g = s(i), c.b = n(i), c + ""
            }
    }
}
var rm = tm($i);

function am(e, t) {
    t || (t = []);
    var r = e ? Math.min(t.length, e.length) : 0,
        a = t.slice(),
        s;
    return function(n) {
        for (s = 0; s < r; ++s) a[s] = e[s] * (1 - n) + t[s] * n;
        return a
    }
}

function sm(e) {
    return ArrayBuffer.isView(e) && !(e instanceof DataView)
}

function nm(e, t) {
    var r = t ? t.length : 0,
        a = e ? Math.min(r, e.length) : 0,
        s = new Array(a),
        n = new Array(r),
        o;
    for (o = 0; o < a; ++o) s[o] = Es(e[o], t[o]);
    for (; o < r; ++o) n[o] = t[o];
    return function(c) {
        for (o = 0; o < a; ++o) n[o] = s[o](c);
        return n
    }
}

function om(e, t) {
    var r = new Date;
    return e = +e, t = +t,
        function(a) {
            return r.setTime(e * (1 - a) + t * a), r
        }
}

function Ae(e, t) {
    return e = +e, t = +t,
        function(r) {
            return e * (1 - r) + t * r
        }
}

function cm(e, t) {
    var r = {},
        a = {},
        s;
    (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
    for (s in t) s in e ? r[s] = Es(e[s], t[s]) : a[s] = t[s];
    return function(n) {
        for (s in r) a[s] = r[s](n);
        return a
    }
}
var qa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Pa = new RegExp(qa.source, "g");

function pm(e) {
    return function() {
        return e
    }
}

function im(e) {
    return function(t) {
        return e(t) + ""
    }
}

function so(e, t) {
    var r = qa.lastIndex = Pa.lastIndex = 0,
        a, s, n, o = -1,
        c = [],
        i = [];
    for (e = e + "", t = t + "";
        (a = qa.exec(e)) && (s = Pa.exec(t));)(n = s.index) > r && (n = t.slice(r, n), c[o] ? c[o] += n : c[++o] = n), (a = a[0]) === (s = s[0]) ? c[o] ? c[o] += s : c[++o] = s : (c[++o] = null, i.push({
        i: o,
        x: Ae(a, s)
    })), r = Pa.lastIndex;
    return r < t.length && (n = t.slice(r), c[o] ? c[o] += n : c[++o] = n), c.length < 2 ? i[0] ? im(i[0].x) : pm(t) : (t = i.length, function(p) {
        for (var m = 0, h; m < t; ++m) c[(h = i[m]).i] = h.x(p);
        return c.join("")
    })
}

function Es(e, t) {
    var r = typeof t,
        a;
    return t == null || r === "boolean" ? xs(t) : (r === "number" ? Ae : r === "string" ? (a = He(t)) ? (t = a, pa) : so : t instanceof He ? pa : t instanceof Date ? om : sm(t) ? am : Array.isArray(t) ? nm : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? cm : Ae)(e, t)
}

function mm(e, t) {
    return e = +e, t = +t,
        function(r) {
            return Math.round(e * (1 - r) + t * r)
        }
}
var mn = 180 / Math.PI,
    Ja = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    };

function no(e, t, r, a, s, n) {
    var o, c, i;
    return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (i = e * r + t * a) && (r -= e * i, a -= t * i), (c = Math.sqrt(r * r + a * a)) && (r /= c, a /= c, i /= c), e * a < t * r && (e = -e, t = -t, i = -i, o = -o), {
        translateX: s,
        translateY: n,
        rotate: Math.atan2(t, e) * mn,
        skewX: Math.atan(i) * mn,
        scaleX: o,
        scaleY: c
    }
}
var zr;

function hm(e) {
    const t = new(typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
    return t.isIdentity ? Ja : no(t.a, t.b, t.c, t.d, t.e, t.f)
}

function lm(e) {
    return e == null || (zr || (zr = document.createElementNS("http://www.w3.org/2000/svg", "g")), zr.setAttribute("transform", e), !(e = zr.transform.baseVal.consolidate())) ? Ja : (e = e.matrix, no(e.a, e.b, e.c, e.d, e.e, e.f))
}

function oo(e, t, r, a) {
    function s(p) {
        return p.length ? p.pop() + " " : ""
    }

    function n(p, m, h, l, u, L) {
        if (p !== h || m !== l) {
            var x = u.push("translate(", null, t, null, r);
            L.push({
                i: x - 4,
                x: Ae(p, h)
            }, {
                i: x - 2,
                x: Ae(m, l)
            })
        } else(h || l) && u.push("translate(" + h + t + l + r)
    }

    function o(p, m, h, l) {
        p !== m ? (p - m > 180 ? m += 360 : m - p > 180 && (p += 360), l.push({
            i: h.push(s(h) + "rotate(", null, a) - 2,
            x: Ae(p, m)
        })) : m && h.push(s(h) + "rotate(" + m + a)
    }

    function c(p, m, h, l) {
        p !== m ? l.push({
            i: h.push(s(h) + "skewX(", null, a) - 2,
            x: Ae(p, m)
        }) : m && h.push(s(h) + "skewX(" + m + a)
    }

    function i(p, m, h, l, u, L) {
        if (p !== h || m !== l) {
            var x = u.push(s(u) + "scale(", null, ",", null, ")");
            L.push({
                i: x - 4,
                x: Ae(p, h)
            }, {
                i: x - 2,
                x: Ae(m, l)
            })
        } else(h !== 1 || l !== 1) && u.push(s(u) + "scale(" + h + "," + l + ")")
    }
    return function(p, m) {
        var h = [],
            l = [];
        return p = e(p), m = e(m), n(p.translateX, p.translateY, m.translateX, m.translateY, h, l), o(p.rotate, m.rotate, h, l), c(p.skewX, m.skewX, h, l), i(p.scaleX, p.scaleY, m.scaleX, m.scaleY, h, l), p = m = null,
            function(u) {
                for (var L = -1, x = l.length, k; ++L < x;) h[(k = l[L]).i] = k.x(u);
                return h.join("")
            }
    }
}
var um = oo(hm, "px, ", "px)", "deg)"),
    dm = oo(lm, ", ", ")", ")"),
    gm = 1e-12;

function hn(e) {
    return ((e = Math.exp(e)) + 1 / e) / 2
}

function bm(e) {
    return ((e = Math.exp(e)) - 1 / e) / 2
}

function fm(e) {
    return ((e = Math.exp(2 * e)) - 1) / (e + 1)
}
const Im = function e(t, r, a) {
    function s(n, o) {
        var c = n[0],
            i = n[1],
            p = n[2],
            m = o[0],
            h = o[1],
            l = o[2],
            u = m - c,
            L = h - i,
            x = u * u + L * L,
            k, y;
        if (x < gm) y = Math.log(l / p) / t, k = function(H) {
            return [c + H * u, i + H * L, p * Math.exp(t * H * y)]
        };
        else {
            var v = Math.sqrt(x),
                E = (l * l - p * p + a * x) / (2 * p * r * v),
                M = (l * l - p * p - a * x) / (2 * l * r * v),
                Y = Math.log(Math.sqrt(E * E + 1) - E),
                V = Math.log(Math.sqrt(M * M + 1) - M);
            y = (V - Y) / t, k = function(H) {
                var Q = H * y,
                    J = hn(Y),
                    se = p / (r * v) * (J * fm(t * Q + Y) - bm(Y));
                return [c + se * u, i + se * L, p * J / hn(t * Q + Y)]
            }
        }
        return k.duration = y * 1e3 * t / Math.SQRT2, k
    }
    return s.rho = function(n) {
        var o = Math.max(.001, +n),
            c = o * o,
            i = c * c;
        return e(o, c, i)
    }, s
}(Math.SQRT2, 2, 4);
var Bt = 0,
    ur = 0,
    mr = 0,
    co = 1e3,
    ia, dr, ma = 0,
    Rt = 0,
    fa = 0,
    yr = typeof performance == "object" && performance.now ? performance : Date,
    po = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
        setTimeout(e, 17)
    };

function Cs() {
    return Rt || (po(Lm), Rt = yr.now() + fa)
}

function Lm() {
    Rt = 0
}

function ha() {
    this._call = this._time = this._next = null
}
ha.prototype = io.prototype = {
    constructor: ha,
    restart: function(e, t, r) {
        if (typeof e != "function") throw new TypeError("callback is not a function");
        r = (r == null ? Cs() : +r) + (t == null ? 0 : +t), !this._next && dr !== this && (dr ? dr._next = this : ia = this, dr = this), this._call = e, this._time = r, es()
    },
    stop: function() {
        this._call && (this._call = null, this._time = 1 / 0, es())
    }
};

function io(e, t, r) {
    var a = new ha;
    return a.restart(e, t, r), a
}

function ym() {
    Cs(), ++Bt;
    for (var e = ia, t; e;)(t = Rt - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
    --Bt
}

function ln() {
    Rt = (ma = yr.now()) + fa, Bt = ur = 0;
    try {
        ym()
    } finally {
        Bt = 0, Um(), Rt = 0
    }
}

function Sm() {
    var e = yr.now(),
        t = e - ma;
    t > co && (fa -= t, ma = e)
}

function Um() {
    for (var e, t = ia, r, a = 1 / 0; t;) t._call ? (a > t._time && (a = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : ia = r);
    dr = e, es(a)
}

function es(e) {
    if (!Bt) {
        ur && (ur = clearTimeout(ur));
        var t = e - Rt;
        t > 24 ? (e < 1 / 0 && (ur = setTimeout(ln, e - yr.now() - fa)), mr && (mr = clearInterval(mr))) : (mr || (ma = yr.now(), mr = setInterval(Sm, co)), Bt = 1, po(ln))
    }
}

function un(e, t, r) {
    var a = new ha;
    return t = t == null ? 0 : +t, a.restart(s => {
        a.stop(), e(s + t)
    }, t, r), a
}
var xm = Is("start", "end", "cancel", "interrupt"),
    Em = [],
    mo = 0,
    dn = 1,
    ts = 2,
    Vr = 3,
    gn = 4,
    rs = 5,
    Qr = 6;

function Ia(e, t, r, a, s, n) {
    var o = e.__transition;
    if (!o) e.__transition = {};
    else if (r in o) return;
    Cm(e, r, {
        name: t,
        index: a,
        group: s,
        on: xm,
        tween: Em,
        time: n.time,
        delay: n.delay,
        duration: n.duration,
        ease: n.ease,
        timer: null,
        state: mo
    })
}

function Ds(e, t) {
    var r = ve(e, t);
    if (r.state > mo) throw new Error("too late; already scheduled");
    return r
}

function We(e, t) {
    var r = ve(e, t);
    if (r.state > Vr) throw new Error("too late; already running");
    return r
}

function ve(e, t) {
    var r = e.__transition;
    if (!r || !(r = r[t])) throw new Error("transition not found");
    return r
}

function Cm(e, t, r) {
    var a = e.__transition,
        s;
    a[t] = r, r.timer = io(n, 0, r.time);

    function n(p) {
        r.state = dn, r.timer.restart(o, r.delay, r.time), r.delay <= p && o(p - r.delay)
    }

    function o(p) {
        var m, h, l, u;
        if (r.state !== dn) return i();
        for (m in a)
            if (u = a[m], u.name === r.name) {
                if (u.state === Vr) return un(o);
                u.state === gn ? (u.state = Qr, u.timer.stop(), u.on.call("interrupt", e, e.__data__, u.index, u.group), delete a[m]) : +m < t && (u.state = Qr, u.timer.stop(), u.on.call("cancel", e, e.__data__, u.index, u.group), delete a[m])
            } if (un(function() {
                r.state === Vr && (r.state = gn, r.timer.restart(c, r.delay, r.time), c(p))
            }), r.state = ts, r.on.call("start", e, e.__data__, r.index, r.group), r.state === ts) {
            for (r.state = Vr, s = new Array(l = r.tween.length), m = 0, h = -1; m < l; ++m)(u = r.tween[m].value.call(e, e.__data__, r.index, r.group)) && (s[++h] = u);
            s.length = h + 1
        }
    }

    function c(p) {
        for (var m = p < r.duration ? r.ease.call(null, p / r.duration) : (r.timer.restart(i), r.state = rs, 1), h = -1, l = s.length; ++h < l;) s[h].call(e, m);
        r.state === rs && (r.on.call("end", e, e.__data__, r.index, r.group), i())
    }

    function i() {
        r.state = Qr, r.timer.stop(), delete a[t];
        for (var p in a) return;
        delete e.__transition
    }
}

function Fr(e, t) {
    var r = e.__transition,
        a, s, n = !0,
        o;
    if (r) {
        t = t == null ? null : t + "";
        for (o in r) {
            if ((a = r[o]).name !== t) {
                n = !1;
                continue
            }
            s = a.state > ts && a.state < rs, a.state = Qr, a.timer.stop(), a.on.call(s ? "interrupt" : "cancel", e, e.__data__, a.index, a.group), delete r[o]
        }
        n && delete e.__transition
    }
}

function Dm(e) {
    return this.each(function() {
        Fr(this, e)
    })
}

function jm(e, t) {
    var r, a;
    return function() {
        var s = We(this, e),
            n = s.tween;
        if (n !== r) {
            a = r = n;
            for (var o = 0, c = a.length; o < c; ++o)
                if (a[o].name === t) {
                    a = a.slice(), a.splice(o, 1);
                    break
                }
        }
        s.tween = a
    }
}

function Rm(e, t, r) {
    var a, s;
    if (typeof r != "function") throw new Error;
    return function() {
        var n = We(this, e),
            o = n.tween;
        if (o !== a) {
            s = (a = o).slice();
            for (var c = {
                    name: t,
                    value: r
                }, i = 0, p = s.length; i < p; ++i)
                if (s[i].name === t) {
                    s[i] = c;
                    break
                } i === p && s.push(c)
        }
        n.tween = s
    }
}

function km(e, t) {
    var r = this._id;
    if (e += "", arguments.length < 2) {
        for (var a = ve(this.node(), r).tween, s = 0, n = a.length, o; s < n; ++s)
            if ((o = a[s]).name === e) return o.value;
        return null
    }
    return this.each((t == null ? jm : Rm)(r, e, t))
}

function js(e, t, r) {
    var a = e._id;
    return e.each(function() {
            var s = We(this, a);
            (s.value || (s.value = {}))[t] = r.apply(this, arguments)
        }),
        function(s) {
            return ve(s, a).value[t]
        }
}

function ho(e, t) {
    var r;
    return (typeof t == "number" ? Ae : t instanceof He ? pa : (r = He(t)) ? (t = r, pa) : so)(e, t)
}

function Mm(e) {
    return function() {
        this.removeAttribute(e)
    }
}

function Ym(e) {
    return function() {
        this.removeAttributeNS(e.space, e.local)
    }
}

function Km(e, t, r) {
    var a, s = r + "",
        n;
    return function() {
        var o = this.getAttribute(e);
        return o === s ? null : o === a ? n : n = t(a = o, r)
    }
}

function Am(e, t, r) {
    var a, s = r + "",
        n;
    return function() {
        var o = this.getAttributeNS(e.space, e.local);
        return o === s ? null : o === a ? n : n = t(a = o, r)
    }
}

function Pm(e, t, r) {
    var a, s, n;
    return function() {
        var o, c = r(this),
            i;
        return c == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), i = c + "", o === i ? null : o === a && i === s ? n : (s = i, n = t(a = o, c)))
    }
}

function vm(e, t, r) {
    var a, s, n;
    return function() {
        var o, c = r(this),
            i;
        return c == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), i = c + "", o === i ? null : o === a && i === s ? n : (s = i, n = t(a = o, c)))
    }
}

function zm(e, t) {
    var r = ba(e),
        a = r === "transform" ? dm : ho;
    return this.attrTween(e, typeof t == "function" ? (r.local ? vm : Pm)(r, a, js(this, "attr." + e, t)) : t == null ? (r.local ? Ym : Mm)(r) : (r.local ? Am : Km)(r, a, t))
}

function Zm(e, t) {
    return function(r) {
        this.setAttribute(e, t.call(this, r))
    }
}

function Tm(e, t) {
    return function(r) {
        this.setAttributeNS(e.space, e.local, t.call(this, r))
    }
}

function wm(e, t) {
    var r, a;

    function s() {
        var n = t.apply(this, arguments);
        return n !== a && (r = (a = n) && Tm(e, n)), r
    }
    return s._value = t, s
}

function Nm(e, t) {
    var r, a;

    function s() {
        var n = t.apply(this, arguments);
        return n !== a && (r = (a = n) && Zm(e, n)), r
    }
    return s._value = t, s
}

function _m(e, t) {
    var r = "attr." + e;
    if (arguments.length < 2) return (r = this.tween(r)) && r._value;
    if (t == null) return this.tween(r, null);
    if (typeof t != "function") throw new Error;
    var a = ba(e);
    return this.tween(r, (a.local ? wm : Nm)(a, t))
}

function Hm(e, t) {
    return function() {
        Ds(this, e).delay = +t.apply(this, arguments)
    }
}

function Gm(e, t) {
    return t = +t,
        function() {
            Ds(this, e).delay = t
        }
}

function Om(e) {
    var t = this._id;
    return arguments.length ? this.each((typeof e == "function" ? Hm : Gm)(t, e)) : ve(this.node(), t).delay
}

function Wm(e, t) {
    return function() {
        We(this, e).duration = +t.apply(this, arguments)
    }
}

function Bm(e, t) {
    return t = +t,
        function() {
            We(this, e).duration = t
        }
}

function Vm(e) {
    var t = this._id;
    return arguments.length ? this.each((typeof e == "function" ? Wm : Bm)(t, e)) : ve(this.node(), t).duration
}

function Qm(e, t) {
    if (typeof t != "function") throw new Error;
    return function() {
        We(this, e).ease = t
    }
}

function Fm(e) {
    var t = this._id;
    return arguments.length ? this.each(Qm(t, e)) : ve(this.node(), t).ease
}

function Xm(e, t) {
    return function() {
        var r = t.apply(this, arguments);
        if (typeof r != "function") throw new Error;
        We(this, e).ease = r
    }
}

function $m(e) {
    if (typeof e != "function") throw new Error;
    return this.each(Xm(this._id, e))
}

function qm(e) {
    typeof e != "function" && (e = Bn(e));
    for (var t = this._groups, r = t.length, a = new Array(r), s = 0; s < r; ++s)
        for (var n = t[s], o = n.length, c = a[s] = [], i, p = 0; p < o; ++p)(i = n[p]) && e.call(i, i.__data__, p, n) && c.push(i);
    return new $e(a, this._parents, this._name, this._id)
}

function Jm(e) {
    if (e._id !== this._id) throw new Error;
    for (var t = this._groups, r = e._groups, a = t.length, s = r.length, n = Math.min(a, s), o = new Array(a), c = 0; c < n; ++c)
        for (var i = t[c], p = r[c], m = i.length, h = o[c] = new Array(m), l, u = 0; u < m; ++u)(l = i[u] || p[u]) && (h[u] = l);
    for (; c < a; ++c) o[c] = t[c];
    return new $e(o, this._parents, this._name, this._id)
}

function eh(e) {
    return (e + "").trim().split(/^|\s+/).every(function(t) {
        var r = t.indexOf(".");
        return r >= 0 && (t = t.slice(0, r)), !t || t === "start"
    })
}

function th(e, t, r) {
    var a, s, n = eh(t) ? Ds : We;
    return function() {
        var o = n(this, e),
            c = o.on;
        c !== a && (s = (a = c).copy()).on(t, r), o.on = s
    }
}

function rh(e, t) {
    var r = this._id;
    return arguments.length < 2 ? ve(this.node(), r).on.on(e) : this.each(th(r, e, t))
}

function ah(e) {
    return function() {
        var t = this.parentNode;
        for (var r in this.__transition)
            if (+r !== e) return;
        t && t.removeChild(this)
    }
}

function sh() {
    return this.on("end.remove", ah(this._id))
}

function nh(e) {
    var t = this._name,
        r = this._id;
    typeof e != "function" && (e = Ls(e));
    for (var a = this._groups, s = a.length, n = new Array(s), o = 0; o < s; ++o)
        for (var c = a[o], i = c.length, p = n[o] = new Array(i), m, h, l = 0; l < i; ++l)(m = c[l]) && (h = e.call(m, m.__data__, l, c)) && ("__data__" in m && (h.__data__ = m.__data__), p[l] = h, Ia(p[l], t, r, l, p, ve(m, r)));
    return new $e(n, this._parents, t, r)
}

function oh(e) {
    var t = this._name,
        r = this._id;
    typeof e != "function" && (e = Wn(e));
    for (var a = this._groups, s = a.length, n = [], o = [], c = 0; c < s; ++c)
        for (var i = a[c], p = i.length, m, h = 0; h < p; ++h)
            if (m = i[h]) {
                for (var l = e.call(m, m.__data__, h, i), u, L = ve(m, r), x = 0, k = l.length; x < k; ++x)(u = l[x]) && Ia(u, t, r, x, l, L);
                n.push(l), o.push(m)
            } return new $e(n, o, t, r)
}
var ch = Ur.prototype.constructor;

function ph() {
    return new ch(this._groups, this._parents)
}

function ih(e, t) {
    var r, a, s;
    return function() {
        var n = Wt(this, e),
            o = (this.style.removeProperty(e), Wt(this, e));
        return n === o ? null : n === r && o === a ? s : s = t(r = n, a = o)
    }
}

function lo(e) {
    return function() {
        this.style.removeProperty(e)
    }
}

function mh(e, t, r) {
    var a, s = r + "",
        n;
    return function() {
        var o = Wt(this, e);
        return o === s ? null : o === a ? n : n = t(a = o, r)
    }
}

function hh(e, t, r) {
    var a, s, n;
    return function() {
        var o = Wt(this, e),
            c = r(this),
            i = c + "";
        return c == null && (i = c = (this.style.removeProperty(e), Wt(this, e))), o === i ? null : o === a && i === s ? n : (s = i, n = t(a = o, c))
    }
}

function lh(e, t) {
    var r, a, s, n = "style." + t,
        o = "end." + n,
        c;
    return function() {
        var i = We(this, e),
            p = i.on,
            m = i.value[n] == null ? c || (c = lo(t)) : void 0;
        (p !== r || s !== m) && (a = (r = p).copy()).on(o, s = m), i.on = a
    }
}

function uh(e, t, r) {
    var a = (e += "") == "transform" ? um : ho;
    return t == null ? this.styleTween(e, ih(e, a)).on("end.style." + e, lo(e)) : typeof t == "function" ? this.styleTween(e, hh(e, a, js(this, "style." + e, t))).each(lh(this._id, e)) : this.styleTween(e, mh(e, a, t), r).on("end.style." + e, null)
}

function dh(e, t, r) {
    return function(a) {
        this.style.setProperty(e, t.call(this, a), r)
    }
}

function gh(e, t, r) {
    var a, s;

    function n() {
        var o = t.apply(this, arguments);
        return o !== s && (a = (s = o) && dh(e, o, r)), a
    }
    return n._value = t, n
}

function bh(e, t, r) {
    var a = "style." + (e += "");
    if (arguments.length < 2) return (a = this.tween(a)) && a._value;
    if (t == null) return this.tween(a, null);
    if (typeof t != "function") throw new Error;
    return this.tween(a, gh(e, t, r ?? ""))
}

function fh(e) {
    return function() {
        this.textContent = e
    }
}

function Ih(e) {
    return function() {
        var t = e(this);
        this.textContent = t ?? ""
    }
}

function Lh(e) {
    return this.tween("text", typeof e == "function" ? Ih(js(this, "text", e)) : fh(e == null ? "" : e + ""))
}

function yh(e) {
    return function(t) {
        this.textContent = e.call(this, t)
    }
}

function Sh(e) {
    var t, r;

    function a() {
        var s = e.apply(this, arguments);
        return s !== r && (t = (r = s) && yh(s)), t
    }
    return a._value = e, a
}

function Uh(e) {
    var t = "text";
    if (arguments.length < 1) return (t = this.tween(t)) && t._value;
    if (e == null) return this.tween(t, null);
    if (typeof e != "function") throw new Error;
    return this.tween(t, Sh(e))
}

function xh() {
    for (var e = this._name, t = this._id, r = uo(), a = this._groups, s = a.length, n = 0; n < s; ++n)
        for (var o = a[n], c = o.length, i, p = 0; p < c; ++p)
            if (i = o[p]) {
                var m = ve(i, t);
                Ia(i, e, r, p, o, {
                    time: m.time + m.delay + m.duration,
                    delay: 0,
                    duration: m.duration,
                    ease: m.ease
                })
            } return new $e(a, this._parents, e, r)
}

function Eh() {
    var e, t, r = this,
        a = r._id,
        s = r.size();
    return new Promise(function(n, o) {
        var c = {
                value: o
            },
            i = {
                value: function() {
                    --s === 0 && n()
                }
            };
        r.each(function() {
            var p = We(this, a),
                m = p.on;
            m !== e && (t = (e = m).copy(), t._.cancel.push(c), t._.interrupt.push(c), t._.end.push(i)), p.on = t
        }), s === 0 && n()
    })
}
var Ch = 0;

function $e(e, t, r, a) {
    this._groups = e, this._parents = t, this._name = r, this._id = a
}

function uo() {
    return ++Ch
}
var Ve = Ur.prototype;
$e.prototype = {
    constructor: $e,
    select: nh,
    selectAll: oh,
    selectChild: Ve.selectChild,
    selectChildren: Ve.selectChildren,
    filter: qm,
    merge: Jm,
    selection: ph,
    transition: xh,
    call: Ve.call,
    nodes: Ve.nodes,
    node: Ve.node,
    size: Ve.size,
    empty: Ve.empty,
    each: Ve.each,
    on: rh,
    attr: zm,
    attrTween: _m,
    style: uh,
    styleTween: bh,
    text: Lh,
    textTween: Uh,
    remove: sh,
    tween: km,
    delay: Om,
    duration: Vm,
    ease: Fm,
    easeVarying: $m,
    end: Eh,
    [Symbol.iterator]: Ve[Symbol.iterator]
};

function Dh(e) {
    return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2
}
var jh = {
    time: null,
    delay: 0,
    duration: 250,
    ease: Dh
};

function Rh(e, t) {
    for (var r; !(r = e.__transition) || !(r = r[t]);)
        if (!(e = e.parentNode)) throw new Error(`transition ${t} not found`);
    return r
}

function kh(e) {
    var t, r;
    e instanceof $e ? (t = e._id, e = e._name) : (t = uo(), (r = jh).time = Cs(), e = e == null ? null : e + "");
    for (var a = this._groups, s = a.length, n = 0; n < s; ++n)
        for (var o = a[n], c = o.length, i, p = 0; p < c; ++p)(i = o[p]) && Ia(i, e, t, p, o, r || Rh(i, t));
    return new $e(a, this._parents, e, t)
}
Ur.prototype.interrupt = Dm;
Ur.prototype.transition = kh;

function Mh(e) {
    return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10)
}

function la(e, t) {
    if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
    var r, a = e.slice(0, r);
    return [a.length > 1 ? a[0] + a.slice(2) : a, +e.slice(r + 1)]
}

function Vt(e) {
    return e = la(Math.abs(e)), e ? e[1] : NaN
}

function Yh(e, t) {
    return function(r, a) {
        for (var s = r.length, n = [], o = 0, c = e[0], i = 0; s > 0 && c > 0 && (i + c + 1 > a && (c = Math.max(1, a - i)), n.push(r.substring(s -= c, s + c)), !((i += c + 1) > a));) c = e[o = (o + 1) % e.length];
        return n.reverse().join(t)
    }
}

function Kh(e) {
    return function(t) {
        return t.replace(/[0-9]/g, function(r) {
            return e[+r]
        })
    }
}
var Ah = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function ua(e) {
    if (!(t = Ah.exec(e))) throw new Error("invalid format: " + e);
    var t;
    return new Rs({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10]
    })
}
ua.prototype = Rs.prototype;

function Rs(e) {
    this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + ""
}
Rs.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type
};

function Ph(e) {
    e: for (var t = e.length, r = 1, a = -1, s; r < t; ++r) switch (e[r]) {
        case ".":
            a = s = r;
            break;
        case "0":
            a === 0 && (a = r), s = r;
            break;
        default:
            if (!+e[r]) break e;
            a > 0 && (a = 0);
            break
    }
    return a > 0 ? e.slice(0, a) + e.slice(s + 1) : e
}
var go;

function vh(e, t) {
    var r = la(e, t);
    if (!r) return e + "";
    var a = r[0],
        s = r[1],
        n = s - (go = Math.max(-8, Math.min(8, Math.floor(s / 3))) * 3) + 1,
        o = a.length;
    return n === o ? a : n > o ? a + new Array(n - o + 1).join("0") : n > 0 ? a.slice(0, n) + "." + a.slice(n) : "0." + new Array(1 - n).join("0") + la(e, Math.max(0, t + n - 1))[0]
}

function bn(e, t) {
    var r = la(e, t);
    if (!r) return e + "";
    var a = r[0],
        s = r[1];
    return s < 0 ? "0." + new Array(-s).join("0") + a : a.length > s + 1 ? a.slice(0, s + 1) + "." + a.slice(s + 1) : a + new Array(s - a.length + 2).join("0")
}
const fn = {
    "%": (e, t) => (e * 100).toFixed(t),
    b: e => Math.round(e).toString(2),
    c: e => e + "",
    d: Mh,
    e: (e, t) => e.toExponential(t),
    f: (e, t) => e.toFixed(t),
    g: (e, t) => e.toPrecision(t),
    o: e => Math.round(e).toString(8),
    p: (e, t) => bn(e * 100, t),
    r: bn,
    s: vh,
    X: e => Math.round(e).toString(16).toUpperCase(),
    x: e => Math.round(e).toString(16)
};

function In(e) {
    return e
}
var Ln = Array.prototype.map,
    yn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];

function zh(e) {
    var t = e.grouping === void 0 || e.thousands === void 0 ? In : Yh(Ln.call(e.grouping, Number), e.thousands + ""),
        r = e.currency === void 0 ? "" : e.currency[0] + "",
        a = e.currency === void 0 ? "" : e.currency[1] + "",
        s = e.decimal === void 0 ? "." : e.decimal + "",
        n = e.numerals === void 0 ? In : Kh(Ln.call(e.numerals, String)),
        o = e.percent === void 0 ? "%" : e.percent + "",
        c = e.minus === void 0 ? "−" : e.minus + "",
        i = e.nan === void 0 ? "NaN" : e.nan + "";

    function p(h) {
        h = ua(h);
        var l = h.fill,
            u = h.align,
            L = h.sign,
            x = h.symbol,
            k = h.zero,
            y = h.width,
            v = h.comma,
            E = h.precision,
            M = h.trim,
            Y = h.type;
        Y === "n" ? (v = !0, Y = "g") : fn[Y] || (E === void 0 && (E = 12), M = !0, Y = "g"), (k || l === "0" && u === "=") && (k = !0, l = "0", u = "=");
        var V = x === "$" ? r : x === "#" && /[boxX]/.test(Y) ? "0" + Y.toLowerCase() : "",
            H = x === "$" ? a : /[%p]/.test(Y) ? o : "",
            Q = fn[Y],
            J = /[defgprs%]/.test(Y);
        E = E === void 0 ? 6 : /[gprs]/.test(Y) ? Math.max(1, Math.min(21, E)) : Math.max(0, Math.min(20, E));

        function se(z) {
            var F = V,
                re = H,
                g, I, f;
            if (Y === "c") re = Q(z) + re, z = "";
            else {
                z = +z;
                var C = z < 0 || 1 / z < 0;
                if (z = isNaN(z) ? i : Q(Math.abs(z), E), M && (z = Ph(z)), C && +z == 0 && L !== "+" && (C = !1), F = (C ? L === "(" ? L : c : L === "-" || L === "(" ? "" : L) + F, re = (Y === "s" ? yn[8 + go / 3] : "") + re + (C && L === "(" ? ")" : ""), J) {
                    for (g = -1, I = z.length; ++g < I;)
                        if (f = z.charCodeAt(g), 48 > f || f > 57) {
                            re = (f === 46 ? s + z.slice(g + 1) : z.slice(g)) + re, z = z.slice(0, g);
                            break
                        }
                }
            }
            v && !k && (z = t(z, 1 / 0));
            var A = F.length + z.length + re.length,
                R = A < y ? new Array(y - A + 1).join(l) : "";
            switch (v && k && (z = t(R + z, R.length ? y - re.length : 1 / 0), R = ""), u) {
                case "<":
                    z = F + z + re + R;
                    break;
                case "=":
                    z = F + R + z + re;
                    break;
                case "^":
                    z = R.slice(0, A = R.length >> 1) + F + z + re + R.slice(A);
                    break;
                default:
                    z = R + F + z + re;
                    break
            }
            return n(z)
        }
        return se.toString = function() {
            return h + ""
        }, se
    }

    function m(h, l) {
        var u = p((h = ua(h), h.type = "f", h)),
            L = Math.max(-8, Math.min(8, Math.floor(Vt(l) / 3))) * 3,
            x = Math.pow(10, -L),
            k = yn[8 + L / 3];
        return function(y) {
            return u(x * y) + k
        }
    }
    return {
        format: p,
        formatPrefix: m
    }
}
var Zr, bo, fo;
Zh({
    thousands: ",",
    grouping: [3],
    currency: ["$", ""]
});

function Zh(e) {
    return Zr = zh(e), bo = Zr.format, fo = Zr.formatPrefix, Zr
}

function Th(e) {
    return Math.max(0, -Vt(Math.abs(e)))
}

function wh(e, t) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Vt(t) / 3))) * 3 - Vt(Math.abs(e)))
}

function Nh(e, t) {
    return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Vt(t) - Vt(e)) + 1
}

function ks(e, t) {
    switch (arguments.length) {
        case 0:
            break;
        case 1:
            this.range(e);
            break;
        default:
            this.range(t).domain(e);
            break
    }
    return this
}
const Sn = Symbol("implicit");

function Io() {
    var e = new Ba,
        t = [],
        r = [],
        a = Sn;

    function s(n) {
        let o = e.get(n);
        if (o === void 0) {
            if (a !== Sn) return a;
            e.set(n, o = t.push(n) - 1)
        }
        return r[o % r.length]
    }
    return s.domain = function(n) {
        if (!arguments.length) return t.slice();
        t = [], e = new Ba;
        for (const o of n) e.has(o) || e.set(o, t.push(o) - 1);
        return s
    }, s.range = function(n) {
        return arguments.length ? (r = Array.from(n), s) : r.slice()
    }, s.unknown = function(n) {
        return arguments.length ? (a = n, s) : a
    }, s.copy = function() {
        return Io(t, r).unknown(a)
    }, ks.apply(s, arguments), s
}

function Xr() {
    var e = Io().unknown(void 0),
        t = e.domain,
        r = e.range,
        a = 0,
        s = 1,
        n, o, c = !1,
        i = 0,
        p = 0,
        m = .5;
    delete e.unknown;

    function h() {
        var l = t().length,
            u = s < a,
            L = u ? s : a,
            x = u ? a : s;
        n = (x - L) / Math.max(1, l - i + p * 2), c && (n = Math.floor(n)), L += (x - L - n * (l - i)) * m, o = n * (1 - i), c && (L = Math.round(L), o = Math.round(o));
        var k = Bc(l).map(function(y) {
            return L + n * y
        });
        return r(u ? k.reverse() : k)
    }
    return e.domain = function(l) {
        return arguments.length ? (t(l), h()) : t()
    }, e.range = function(l) {
        return arguments.length ? ([a, s] = l, a = +a, s = +s, h()) : [a, s]
    }, e.rangeRound = function(l) {
        return [a, s] = l, a = +a, s = +s, c = !0, h()
    }, e.bandwidth = function() {
        return o
    }, e.step = function() {
        return n
    }, e.round = function(l) {
        return arguments.length ? (c = !!l, h()) : c
    }, e.padding = function(l) {
        return arguments.length ? (i = Math.min(1, p = +l), h()) : i
    }, e.paddingInner = function(l) {
        return arguments.length ? (i = Math.min(1, l), h()) : i
    }, e.paddingOuter = function(l) {
        return arguments.length ? (p = +l, h()) : p
    }, e.align = function(l) {
        return arguments.length ? (m = Math.max(0, Math.min(1, l)), h()) : m
    }, e.copy = function() {
        return Xr(t(), [a, s]).round(c).paddingInner(i).paddingOuter(p).align(m)
    }, ks.apply(h(), arguments)
}

function _h(e) {
    return function() {
        return e
    }
}

function Hh(e) {
    return +e
}
var Un = [0, 1];

function Gt(e) {
    return e
}

function as(e, t) {
    return (t -= e = +e) ? function(r) {
        return (r - e) / t
    } : _h(isNaN(t) ? NaN : .5)
}

function Gh(e, t) {
    var r;
    return e > t && (r = e, e = t, t = r),
        function(a) {
            return Math.max(e, Math.min(t, a))
        }
}

function Oh(e, t, r) {
    var a = e[0],
        s = e[1],
        n = t[0],
        o = t[1];
    return s < a ? (a = as(s, a), n = r(o, n)) : (a = as(a, s), n = r(n, o)),
        function(c) {
            return n(a(c))
        }
}

function Wh(e, t, r) {
    var a = Math.min(e.length, t.length) - 1,
        s = new Array(a),
        n = new Array(a),
        o = -1;
    for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < a;) s[o] = as(e[o], e[o + 1]), n[o] = r(t[o], t[o + 1]);
    return function(c) {
        var i = zc(e, c, 1, a) - 1;
        return n[i](s[i](c))
    }
}

function Bh(e, t) {
    return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())
}

function Vh() {
    var e = Un,
        t = Un,
        r = Es,
        a, s, n, o = Gt,
        c, i, p;

    function m() {
        var l = Math.min(e.length, t.length);
        return o !== Gt && (o = Gh(e[0], e[l - 1])), c = l > 2 ? Wh : Oh, i = p = null, h
    }

    function h(l) {
        return l == null || isNaN(l = +l) ? n : (i || (i = c(e.map(a), t, r)))(a(o(l)))
    }
    return h.invert = function(l) {
            return o(s((p || (p = c(t, e.map(a), Ae)))(l)))
        }, h.domain = function(l) {
            return arguments.length ? (e = Array.from(l, Hh), m()) : e.slice()
        }, h.range = function(l) {
            return arguments.length ? (t = Array.from(l), m()) : t.slice()
        }, h.rangeRound = function(l) {
            return t = Array.from(l), r = mm, m()
        }, h.clamp = function(l) {
            return arguments.length ? (o = l ? !0 : Gt, m()) : o !== Gt
        }, h.interpolate = function(l) {
            return arguments.length ? (r = l, m()) : r
        }, h.unknown = function(l) {
            return arguments.length ? (n = l, h) : n
        },
        function(l, u) {
            return a = l, s = u, m()
        }
}

function Qh() {
    return Vh()(Gt, Gt)
}

function Fh(e, t, r, a) {
    var s = Wc(e, t, r),
        n;
    switch (a = ua(a ?? ",f"), a.type) {
        case "s": {
            var o = Math.max(Math.abs(e), Math.abs(t));
            return a.precision == null && !isNaN(n = wh(s, o)) && (a.precision = n), fo(a, o)
        }
        case "":
        case "e":
        case "g":
        case "p":
        case "r": {
            a.precision == null && !isNaN(n = Nh(s, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = n - (a.type === "e"));
            break
        }
        case "f":
        case "%": {
            a.precision == null && !isNaN(n = Th(s)) && (a.precision = n - (a.type === "%") * 2);
            break
        }
    }
    return bo(a)
}

function Xh(e) {
    var t = e.domain;
    return e.ticks = function(r) {
        var a = t();
        return Or(a[0], a[a.length - 1], r ?? 10)
    }, e.tickFormat = function(r, a) {
        var s = t();
        return Fh(s[0], s[s.length - 1], r ?? 10, a)
    }, e.nice = function(r) {
        r == null && (r = 10);
        var a = t(),
            s = 0,
            n = a.length - 1,
            o = a[s],
            c = a[n],
            i, p, m = 10;
        for (c < o && (p = o, o = c, c = p, p = s, s = n, n = p); m-- > 0;) {
            if (p = Va(o, c, r), p === i) return a[s] = o, a[n] = c, t(a);
            if (p > 0) o = Math.floor(o / p) * p, c = Math.ceil(c / p) * p;
            else if (p < 0) o = Math.ceil(o * p) / p, c = Math.floor(c * p) / p;
            else break;
            i = p
        }
        return e
    }, e
}

function $r() {
    var e = Qh();
    return e.copy = function() {
        return Bh(e, $r())
    }, ks.apply(e, arguments), Xh(e)
}

function $h(e) {
    for (var t = e.length / 6 | 0, r = new Array(t), a = 0; a < t;) r[a] = "#" + e.slice(a * 6, ++a * 6);
    return r
}
const qh = e => rm(e[e.length - 1]);
var Jh = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffeeffffcca1dab441b6c4225ea8", "ffffeeffffcca1dab441b6c42c7fb8253494", "ffffeeffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffeeffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffeeffffd9ffffaaedf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffeeffffd9ffffaaedf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map($h);
const el = qh(Jh);

function Tr(e) {
    return function() {
        return e
    }
}

function tl(e) {
    return typeof e == "object" && "length" in e ? e : Array.from(e)
}

function xn(e, t) {
    if ((o = e.length) > 1)
        for (var r = 1, a, s, n = e[t[0]], o, c = n.length; r < o; ++r)
            for (s = n, n = e[t[r]], a = 0; a < c; ++a) n[a][1] += n[a][0] = isNaN(s[a][1]) ? s[a][0] : s[a][1]
}

function ss(e) {
    for (var t = e.length, r = new Array(t); --t >= 0;) r[t] = t;
    return r
}

function rl(e, t) {
    return e[t]
}

function al(e) {
    const t = [];
    return t.key = e, t
}

function En() {
    var e = Tr([]),
        t = ss,
        r = xn,
        a = rl;

    function s(n) {
        var o = Array.from(e.apply(this, arguments), al),
            c, i = o.length,
            p = -1,
            m;
        for (const h of n)
            for (c = 0, ++p; c < i; ++c)(o[c][p] = [0, +a(h, o[c].key, p, n)]).data = h;
        for (c = 0, m = tl(t(o)); c < i; ++c) o[m[c]].index = c;
        return r(o, m), o
    }
    return s.keys = function(n) {
        return arguments.length ? (e = typeof n == "function" ? n : Tr(Array.from(n)), s) : e
    }, s.value = function(n) {
        return arguments.length ? (a = typeof n == "function" ? n : Tr(+n), s) : a
    }, s.order = function(n) {
        return arguments.length ? (t = n == null ? ss : typeof n == "function" ? n : Tr(Array.from(n)), s) : t
    }, s.offset = function(n) {
        return arguments.length ? (r = n ?? xn, s) : r
    }, s
}

function Cn(e) {
    return ss(e).reverse()
}
const wr = e => () => e;

function sl(e, {
    sourceEvent: t,
    target: r,
    transform: a,
    dispatch: s
}) {
    Object.defineProperties(this, {
        type: {
            value: e,
            enumerable: !0,
            configurable: !0
        },
        sourceEvent: {
            value: t,
            enumerable: !0,
            configurable: !0
        },
        target: {
            value: r,
            enumerable: !0,
            configurable: !0
        },
        transform: {
            value: a,
            enumerable: !0,
            configurable: !0
        },
        _: {
            value: s
        }
    })
}

function Fe(e, t, r) {
    this.k = e, this.x = t, this.y = r
}
Fe.prototype = {
    constructor: Fe,
    scale: function(e) {
        return e === 1 ? this : new Fe(this.k * e, this.x, this.y)
    },
    translate: function(e, t) {
        return e === 0 & t === 0 ? this : new Fe(this.k, this.x + this.k * e, this.y + this.k * t)
    },
    apply: function(e) {
        return [e[0] * this.k + this.x, e[1] * this.k + this.y]
    },
    applyX: function(e) {
        return e * this.k + this.x
    },
    applyY: function(e) {
        return e * this.k + this.y
    },
    invert: function(e) {
        return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k]
    },
    invertX: function(e) {
        return (e - this.x) / this.k
    },
    invertY: function(e) {
        return (e - this.y) / this.k
    },
    rescaleX: function(e) {
        return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e))
    },
    rescaleY: function(e) {
        return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e))
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
    }
};
var da = new Fe(1, 0, 0);
Fe.prototype;

function va(e) {
    e.stopImmediatePropagation()
}

function hr(e) {
    e.preventDefault(), e.stopImmediatePropagation()
}

function nl(e) {
    return (!e.ctrlKey || e.type === "wheel") && !e.button
}

function ol() {
    var e = this;
    return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [
        [e.x, e.y],
        [e.x + e.width, e.y + e.height]
    ]) : [
        [0, 0],
        [e.width.baseVal.value, e.height.baseVal.value]
    ]) : [
        [0, 0],
        [e.clientWidth, e.clientHeight]
    ]
}

function Dn() {
    return this.__zoom || da
}

function cl(e) {
    return -e.deltaY * (e.deltaMode === 1 ? .05 : e.deltaMode ? 1 : .002) * (e.ctrlKey ? 10 : 1)
}

function pl() {
    return navigator.maxTouchPoints || "ontouchstart" in this
}

function il(e, t, r) {
    var a = e.invertX(t[0][0]) - r[0][0],
        s = e.invertX(t[1][0]) - r[1][0],
        n = e.invertY(t[0][1]) - r[0][1],
        o = e.invertY(t[1][1]) - r[1][1];
    return e.translate(s > a ? (a + s) / 2 : Math.min(0, a) || Math.max(0, s), o > n ? (n + o) / 2 : Math.min(0, n) || Math.max(0, o))
}

function za() {
    var e = nl,
        t = ol,
        r = il,
        a = cl,
        s = pl,
        n = [0, 1 / 0],
        o = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0]
        ],
        c = 250,
        i = Im,
        p = Is("start", "zoom", "end"),
        m, h, l, u = 500,
        L = 150,
        x = 0,
        k = 10;

    function y(g) {
        g.property("__zoom", Dn).on("wheel.zoom", Q, {
            passive: !1
        }).on("mousedown.zoom", J).on("dblclick.zoom", se).filter(s).on("touchstart.zoom", z).on("touchmove.zoom", F).on("touchend.zoom touchcancel.zoom", re).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
    }
    y.transform = function(g, I, f, C) {
        var A = g.selection ? g.selection() : g;
        A.property("__zoom", Dn), g !== A ? Y(g, I, f, C) : A.interrupt().each(function() {
            V(this, arguments).event(C).start().zoom(null, typeof I == "function" ? I.apply(this, arguments) : I).end()
        })
    }, y.scaleBy = function(g, I, f, C) {
        y.scaleTo(g, function() {
            var A = this.__zoom.k,
                R = typeof I == "function" ? I.apply(this, arguments) : I;
            return A * R
        }, f, C)
    }, y.scaleTo = function(g, I, f, C) {
        y.transform(g, function() {
            var A = t.apply(this, arguments),
                R = this.__zoom,
                _ = f == null ? M(A) : typeof f == "function" ? f.apply(this, arguments) : f,
                $ = R.invert(_),
                w = typeof I == "function" ? I.apply(this, arguments) : I;
            return r(E(v(R, w), _, $), A, o)
        }, f, C)
    }, y.translateBy = function(g, I, f, C) {
        y.transform(g, function() {
            return r(this.__zoom.translate(typeof I == "function" ? I.apply(this, arguments) : I, typeof f == "function" ? f.apply(this, arguments) : f), t.apply(this, arguments), o)
        }, null, C)
    }, y.translateTo = function(g, I, f, C, A) {
        y.transform(g, function() {
            var R = t.apply(this, arguments),
                _ = this.__zoom,
                $ = C == null ? M(R) : typeof C == "function" ? C.apply(this, arguments) : C;
            return r(da.translate($[0], $[1]).scale(_.k).translate(typeof I == "function" ? -I.apply(this, arguments) : -I, typeof f == "function" ? -f.apply(this, arguments) : -f), R, o)
        }, C, A)
    };

    function v(g, I) {
        return I = Math.max(n[0], Math.min(n[1], I)), I === g.k ? g : new Fe(I, g.x, g.y)
    }

    function E(g, I, f) {
        var C = I[0] - f[0] * g.k,
            A = I[1] - f[1] * g.k;
        return C === g.x && A === g.y ? g : new Fe(g.k, C, A)
    }

    function M(g) {
        return [(+g[0][0] + +g[1][0]) / 2, (+g[0][1] + +g[1][1]) / 2]
    }

    function Y(g, I, f, C) {
        g.on("start.zoom", function() {
            V(this, arguments).event(C).start()
        }).on("interrupt.zoom end.zoom", function() {
            V(this, arguments).event(C).end()
        }).tween("zoom", function() {
            var A = this,
                R = arguments,
                _ = V(A, R).event(C),
                $ = t.apply(A, R),
                w = f == null ? M($) : typeof f == "function" ? f.apply(A, R) : f,
                ge = Math.max($[1][0] - $[0][0], $[1][1] - $[0][1]),
                ne = A.__zoom,
                be = typeof I == "function" ? I.apply(A, R) : I,
                pe = i(ne.invert(w).concat(ge / ne.k), be.invert(w).concat(ge / be.k));
            return function(ie) {
                if (ie === 1) ie = be;
                else {
                    var fe = pe(ie),
                        ze = ge / fe[2];
                    ie = new Fe(ze, w[0] - fe[0] * ze, w[1] - fe[1] * ze)
                }
                _.zoom(null, ie)
            }
        })
    }

    function V(g, I, f) {
        return !f && g.__zooming || new H(g, I)
    }

    function H(g, I) {
        this.that = g, this.args = I, this.active = 0, this.sourceEvent = null, this.extent = t.apply(g, I), this.taps = 0
    }
    H.prototype = {
        event: function(g) {
            return g && (this.sourceEvent = g), this
        },
        start: function() {
            return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this
        },
        zoom: function(g, I) {
            return this.mouse && g !== "mouse" && (this.mouse[1] = I.invert(this.mouse[0])), this.touch0 && g !== "touch" && (this.touch0[1] = I.invert(this.touch0[0])), this.touch1 && g !== "touch" && (this.touch1[1] = I.invert(this.touch1[0])), this.that.__zoom = I, this.emit("zoom"), this
        },
        end: function() {
            return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this
        },
        emit: function(g) {
            var I = O(this.that).datum();
            p.call(g, this.that, new sl(g, {
                sourceEvent: this.sourceEvent,
                target: y,
                type: g,
                transform: this.that.__zoom,
                dispatch: p
            }), I)
        }
    };

    function Q(g, ...I) {
        if (!e.apply(this, arguments)) return;
        var f = V(this, I).event(g),
            C = this.__zoom,
            A = Math.max(n[0], Math.min(n[1], C.k * Math.pow(2, a.apply(this, arguments)))),
            R = Ut(g);
        if (f.wheel)(f.mouse[0][0] !== R[0] || f.mouse[0][1] !== R[1]) && (f.mouse[1] = C.invert(f.mouse[0] = R)), clearTimeout(f.wheel);
        else {
            if (C.k === A) return;
            f.mouse = [R, C.invert(R)], Fr(this), f.start()
        }
        hr(g), f.wheel = setTimeout(_, L), f.zoom("mouse", r(E(v(C, A), f.mouse[0], f.mouse[1]), f.extent, o));

        function _() {
            f.wheel = null, f.end()
        }
    }

    function J(g, ...I) {
        if (l || !e.apply(this, arguments)) return;
        var f = g.currentTarget,
            C = V(this, I, !0).event(g),
            A = O(g.view).on("mousemove.zoom", w, !0).on("mouseup.zoom", ge, !0),
            R = Ut(g, f),
            _ = g.clientX,
            $ = g.clientY;
        zi(g.view), va(g), C.mouse = [R, this.__zoom.invert(R)], Fr(this), C.start();

        function w(ne) {
            if (hr(ne), !C.moved) {
                var be = ne.clientX - _,
                    pe = ne.clientY - $;
                C.moved = be * be + pe * pe > x
            }
            C.event(ne).zoom("mouse", r(E(C.that.__zoom, C.mouse[0] = Ut(ne, f), C.mouse[1]), C.extent, o))
        }

        function ge(ne) {
            A.on("mousemove.zoom mouseup.zoom", null), Zi(ne.view, C.moved), hr(ne), C.event(ne).end()
        }
    }

    function se(g, ...I) {
        if (e.apply(this, arguments)) {
            var f = this.__zoom,
                C = Ut(g.changedTouches ? g.changedTouches[0] : g, this),
                A = f.invert(C),
                R = f.k * (g.shiftKey ? .5 : 2),
                _ = r(E(v(f, R), C, A), t.apply(this, I), o);
            hr(g), c > 0 ? O(this).transition().duration(c).call(Y, _, C, g) : O(this).call(y.transform, _, C, g)
        }
    }

    function z(g, ...I) {
        if (e.apply(this, arguments)) {
            var f = g.touches,
                C = f.length,
                A = V(this, I, g.changedTouches.length === C).event(g),
                R, _, $, w;
            for (va(g), _ = 0; _ < C; ++_) $ = f[_], w = Ut($, this), w = [w, this.__zoom.invert(w), $.identifier], A.touch0 ? !A.touch1 && A.touch0[2] !== w[2] && (A.touch1 = w, A.taps = 0) : (A.touch0 = w, R = !0, A.taps = 1 + !!m);
            m && (m = clearTimeout(m)), R && (A.taps < 2 && (h = w[0], m = setTimeout(function() {
                m = null
            }, u)), Fr(this), A.start())
        }
    }

    function F(g, ...I) {
        if (this.__zooming) {
            var f = V(this, I).event(g),
                C = g.changedTouches,
                A = C.length,
                R, _, $, w;
            for (hr(g), R = 0; R < A; ++R) _ = C[R], $ = Ut(_, this), f.touch0 && f.touch0[2] === _.identifier ? f.touch0[0] = $ : f.touch1 && f.touch1[2] === _.identifier && (f.touch1[0] = $);
            if (_ = f.that.__zoom, f.touch1) {
                var ge = f.touch0[0],
                    ne = f.touch0[1],
                    be = f.touch1[0],
                    pe = f.touch1[1],
                    ie = (ie = be[0] - ge[0]) * ie + (ie = be[1] - ge[1]) * ie,
                    fe = (fe = pe[0] - ne[0]) * fe + (fe = pe[1] - ne[1]) * fe;
                _ = v(_, Math.sqrt(ie / fe)), $ = [(ge[0] + be[0]) / 2, (ge[1] + be[1]) / 2], w = [(ne[0] + pe[0]) / 2, (ne[1] + pe[1]) / 2]
            } else if (f.touch0) $ = f.touch0[0], w = f.touch0[1];
            else return;
            f.zoom("touch", r(E(_, $, w), f.extent, o))
        }
    }

    function re(g, ...I) {
        if (this.__zooming) {
            var f = V(this, I).event(g),
                C = g.changedTouches,
                A = C.length,
                R, _;
            for (va(g), l && clearTimeout(l), l = setTimeout(function() {
                    l = null
                }, u), R = 0; R < A; ++R) _ = C[R], f.touch0 && f.touch0[2] === _.identifier ? delete f.touch0 : f.touch1 && f.touch1[2] === _.identifier && delete f.touch1;
            if (f.touch1 && !f.touch0 && (f.touch0 = f.touch1, delete f.touch1), f.touch0) f.touch0[1] = this.__zoom.invert(f.touch0[0]);
            else if (f.end(), f.taps === 2 && (_ = Ut(_, this), Math.hypot(h[0] - _[0], h[1] - _[1]) < k)) {
                var $ = O(this).on("dblclick.zoom");
                $ && $.apply(this, arguments)
            }
        }
    }
    return y.wheelDelta = function(g) {
        return arguments.length ? (a = typeof g == "function" ? g : wr(+g), y) : a
    }, y.filter = function(g) {
        return arguments.length ? (e = typeof g == "function" ? g : wr(!!g), y) : e
    }, y.touchable = function(g) {
        return arguments.length ? (s = typeof g == "function" ? g : wr(!!g), y) : s
    }, y.extent = function(g) {
        return arguments.length ? (t = typeof g == "function" ? g : wr([
            [+g[0][0], +g[0][1]],
            [+g[1][0], +g[1][1]]
        ]), y) : t
    }, y.scaleExtent = function(g) {
        return arguments.length ? (n[0] = +g[0], n[1] = +g[1], y) : [n[0], n[1]]
    }, y.translateExtent = function(g) {
        return arguments.length ? (o[0][0] = +g[0][0], o[1][0] = +g[1][0], o[0][1] = +g[0][1], o[1][1] = +g[1][1], y) : [
            [o[0][0], o[0][1]],
            [o[1][0], o[1][1]]
        ]
    }, y.constrain = function(g) {
        return arguments.length ? (r = g, y) : r
    }, y.duration = function(g) {
        return arguments.length ? (c = +g, y) : c
    }, y.interpolate = function(g) {
        return arguments.length ? (i = g, y) : i
    }, y.on = function() {
        var g = p.on.apply(p, arguments);
        return g === p ? y : g
    }, y.clickDistance = function(g) {
        return arguments.length ? (x = (g = +g) * g, y) : Math.sqrt(x)
    }, y.tapDistance = function(g) {
        return arguments.length ? (k = +g, y) : k
    }, y
}

function qr(e) {
    const t = Object.prototype.toString.call(e);
    return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : new Date(NaN)
}

function ml(e) {
    const t = qr(e).getDay();
    return t === 0 || t === 6
}

function hl(e, t) {
    const r = qr(e.start),
        a = qr(e.end);
    let s = +r > +a;
    const n = s ? +r : +a,
        o = s ? a : r;
    o.setHours(0, 0, 0, 0);
    let c = 1;
    const i = [];
    for (; + o <= n;) i.push(qr(o)), o.setDate(o.getDate() + c), o.setHours(0, 0, 0, 0);
    return s ? i.reverse() : i
}
var ll = te('<div id="container" class="svelte-12fvr1k"><button id="close" class="svelte-12fvr1k"><i class="fa-regular fa-circle-xmark"></i></button> <!></div>');

function Qt(e, t) {
    Ge(t, !1);
    let r = Ce(t, "open", 12, !1);
    const a = () => {
        r(!0)
    };
    let s = Ce(t, "onClose", 12, () => {});
    Mt();
    var n = ll(),
        o = T(n),
        c = P(o, 2);
    return bs(c, t, "default", {}), Z(n), Ne(() => _n(n, "hidden", !r())), ue("click", o, () => {
        r(!1), s()()
    }), q(e, n), Yt(t, "openPopup", a), Oe({
        openPopup: a,
        get open() {
            return r()
        },
        set open(i) {
            r(i), ht()
        },
        get onClose() {
            return s()
        },
        set onClose(i) {
            s(i), ht()
        }
    })
}
var ul = te('<ul><li class="svelte-4okb05"><b><i>Scrolle</i></b> um zu zoomen. Klicke und ziehe um die Ansicht zu verschieben.</li> <li class="svelte-4okb05"><b><i>Klicke</i></b> auf ein Kapitel um es in Amboss aufzurufen.</li> <li class="svelte-4okb05"><i><b>Rechtsklicke</b></i> auf ein Kapitel um es als gelesen zu markieren.</li> <li class="svelte-4okb05"><b>Tablets/Handys:</b> Tippe Kapitel an, um sie anzuzeigen oder zu markieren.</li> <li class="svelte-4okb05">Im <b>Menü oben rechts</b> gibt es noch mehr zu entdecken.</li></ul>');

function dl(e) {
    const t = Sr(),
        r = () => ee(Qe, "$examTypeAndYear", t),
        a = () => ee(ws, "$isFirstTimeVisitingSite", t);
    B(Qe, r()), Qt(e, {
        get open() {
            return a()
        },
        onClose: () => B(ws, !1),
        children: (s, n) => {
            var o = ul();
            q(s, o)
        },
        $$slots: {
            default: !0
        }
    })
}
var gl = te('<div class="tooltip svelte-19zolly">&nbsp; &#x24D8; <span class="tooltiptext svelte-19zolly"> </span></div>');

function bl(e, t) {
    let r = Ce(t, "tooltipText", 8);
    var a = gl(),
        s = P(T(a)),
        n = T(s, !0);
    Z(s), Z(a), Ne(() => Xe(n, r())), q(e, a)
}
var fl = te('<h3 class="svelte-1nss1s">Einstellungen</h3> <div class="svelte-1nss1s"></div> <div id="parent" class="svelte-1nss1s"><div id="centerH" class="svelte-1nss1s"><button id="changePlan" class="svelte-1nss1s">Lernplan ändern</button></div></div> <hr class="svelte-1nss1s"> <div class="svelte-1nss1s"><label><input type="checkbox"> Top-100-Kapitel hervorheben</label></div> <div class="svelte-1nss1s"><label><input type="checkbox"> Seitenanzahl anzeigen</label> <!></div> <div class="svelte-1nss1s"><label><input type="checkbox"> Tage bis Examen unten links anzeigen</label></div> <div class="svelte-1nss1s"><label><input type="checkbox"> Fortschritt in Prozent unten links anzeigen</label></div> <hr class="svelte-1nss1s"> <div class="svelte-1nss1s">Zeige die Anki-Karteikarten von <label><input type="radio" name="showLernkartenDeck"> Aus &nbsp;&nbsp;</label> <label><input type="radio" name="showLernkartenDeck"> <a href="https://next.amboss.com/de/article/B80zK3" target="_blank">Ankiphil</a> &nbsp;&nbsp;</label> <label><input type="radio" name="showLernkartenDeck"> <a href="https://linktr.ee/Anki_Germany" target="_blank">Ankizin</a></label></div> <div class="svelte-1nss1s"><label><input type="radio" name="showLernkartenType"> Nur "Highest Yield" &nbsp;&nbsp;</label> <label><input type="radio" name="showLernkartenType"> Min. 1x vom IMPP gefragt &nbsp;&nbsp;</label> <label><input type="radio" name="showLernkartenType"> Alle</label></div> <hr class="svelte-1nss1s"> <div class="svelte-1nss1s">Zeige auf der x-Achse Markierungen alle <label><input type="radio" name="WeekDividers"> Aus</label> <label><input type="radio" name="WeekDividers"> 5</label> <label><input type="radio" name="WeekDividers"> 6</label> <label><input type="radio" name="WeekDividers"> 7</label> Tage</div> <div class="svelte-1nss1s">Verschoben um <input style="display: inline" type="range" min="0" max="6" class="slider" id="shiftWeekSlider"> </div> <br> <div class="svelte-1nss1s">Fragebalken Größe: <input style="display: inline" type="range" min="50" max="300" step="10" class="slider" id="shiftXSlider"> </div> <hr class="svelte-1nss1s"> <div class="svelte-1nss1s"><div class="svelte-1nss1s">Bestimme die Relevanz von Kapiteln als <br> <label><input type="radio" name="importanceName"> Fragenanzahl</label> <br> <label><input type="radio" name="importanceName"> Fragenanzahl pro Kapitellänge</label></div></div> <br> <div class="svelte-1nss1s"><div class="svelte-1nss1s"><label><input type="radio" name="SortBy"> Nach Relevanz sortieren</label> <label><input type="radio" name="SortBy"> chronologisch wie bei Amboss</label></div> <div class="svelte-1nss1s"><label><input type="checkbox"> Nach <b>Top-Kapiteln</b> sortieren, unabhängig vom Tag</label></div></div>', 1);

function Il(e, t) {
    Ge(t, !1);
    const r = Sr(),
        a = () => ee(Jr, "$highlightTopChapters", r),
        s = () => ee(_a, "$showNumberOfPagesForChapter", r),
        n = () => ee(Ha, "$displayCountdown", r),
        o = () => ee(Ga, "$showPercentageProgress", r),
        c = () => ee(Te, "$showLernkartenzahlenDeck", r),
        i = () => ee(mt, "$showLernkartenzahlenType", r),
        p = () => ee(Ue, "$showWeekDividersEvery", r),
        m = () => ee(ea, "$shiftWeekDividersBy", r),
        h = () => ee(ta, "$xAxisPosition", r),
        l = () => ee(gr, "$importanceName", r),
        u = () => ee(br, "$sortByImppact", r),
        L = () => ee(ra, "$sortByTopChapers", r),
        x = [],
        k = [],
        y = [],
        v = [],
        E = [];
    let M = he();
    const Y = () => {
        U(M).openPopup()
    };
    let V = Ce(t, "onClose", 12, () => {});

    function H() {
        window.location.href = "/select"
    }
    return Mt(), ke(Qt(e, {
        get onClose() {
            return V()
        },
        children: (Q, J) => {
            var se = fl(),
                z = P(fr(se), 4),
                F = T(z),
                re = T(F);
            Z(F), Z(z);
            var g = P(z, 4),
                I = T(g),
                f = T(I);
            ce(f), ae(), Z(I), Z(g);
            var C = P(g, 2),
                A = T(C),
                R = T(A);
            ce(R), ae(), Z(A);
            var _ = P(A, 2);
            bl(_, {
                tooltipText: "Nur eine ungefähre Angabe!"
            }), Z(C);
            var $ = P(C, 2),
                w = T($),
                ge = T(w);
            ce(ge), ae(), Z(w), Z($);
            var ne = P($, 2),
                be = T(ne),
                pe = T(be);
            ce(pe), ae(), Z(be), Z(ne);
            var ie = P(ne, 4),
                fe = P(T(ie)),
                ze = T(fe);
            ce(ze);
            var Er;
            ae(), Z(fe);
            var Ft = P(fe, 2),
                ut = T(Ft);
            ce(ut);
            var Xt;
            ae(3), Z(Ft);
            var Cr = P(Ft, 2),
                De = T(Cr);
            ce(De);
            var $t;
            ae(2), Z(Cr), Z(ie);
            var dt = P(ie, 2),
                Me = T(dt),
                Ze = T(Me);
            ce(Ze);
            var Je;
            ae(), Z(Me);
            var et = P(Me, 2),
                Ye = T(et);
            ce(Ye);
            var tt;
            ae(), Z(et);
            var rt = P(et, 2),
                Be = T(rt);
            ce(Be);
            var Kt;
            ae(), Z(rt), Z(dt);
            var gt = P(dt, 4),
                le = P(T(gt)),
                Ke = T(le);
            ce(Ke), Ke.value = (Ke.__value = 0) == null ? "" : 0, ae(), Z(le);
            var je = P(le, 2),
                at = T(je);
            ce(at), at.value = (at.__value = 5) == null ? "" : 5, ae(), Z(je);
            var bt = P(je, 2),
                st = T(bt);
            ce(st), st.value = (st.__value = 6) == null ? "" : 6, ae(), Z(bt);
            var At = P(bt, 2),
                nt = T(At);
            ce(nt), nt.value = (nt.__value = 7) == null ? "" : 7, ae(), Z(At), ae(), Z(gt);
            var qt = P(gt, 2),
                ot = P(T(qt));
            ce(ot);
            var Dr = P(ot);
            Z(qt);
            var ct = P(qt, 4),
                Pt = P(T(ct));
            ce(Pt);
            var Jt = P(Pt);
            Z(ct);
            var vt = P(ct, 4),
                jr = T(vt),
                ft = P(T(jr), 3),
                It = T(ft);
            ce(It), It.value = (It.__value = "Imppact") == null ? "" : "Imppact", ae(), Z(ft);
            var er = P(ft, 4),
                Lt = T(er);
            ce(Lt), Lt.value = (Lt.__value = "ExamQuestionsPer10Pages") == null ? "" : "ExamQuestionsPer10Pages", ae(), Z(er), Z(jr), Z(vt);
            var Rr = P(vt, 4),
                zt = T(Rr),
                Zt = T(zt),
                yt = T(Zt);
            ce(yt), yt.value = (yt.__value = !0) == null ? "" : !0, ae(), Z(Zt);
            var tr = P(Zt, 2),
                St = T(tr);
            ce(St), St.value = (St.__value = !1) == null ? "" : !1, ae(), Z(tr), Z(zt);
            var rr = P(zt, 2),
                Tt = T(rr),
                ar = T(Tt);
            ce(ar), ae(3), Z(Tt), Z(rr), Z(Rr), Ne(() => {
                Er !== (Er = me.None) && (ze.value = (ze.__value = me.None) == null ? "" : me.None), Xt !== (Xt = me.AnkiPhil) && (ut.value = (ut.__value = me.AnkiPhil) == null ? "" : me.AnkiPhil), $t !== ($t = me.Ankizin) && (De.value = (De.__value = me.Ankizin) == null ? "" : me.Ankizin), aa(dt, "style", `color: ${(c()===me.None?"grey":"black")??""}`), Je !== (Je = Ie.HighYield) && (Ze.value = (Ze.__value = Ie.HighYield) == null ? "" : Ie.HighYield), Ze.disabled = c() === me.None, tt !== (tt = Ie.AtLeastOnce) && (Ye.value = (Ye.__value = Ie.AtLeastOnce) == null ? "" : Ie.AtLeastOnce), Ye.disabled = c() === me.None, Kt !== (Kt = Ie.All) && (Be.value = (Be.__value = Ie.All) == null ? "" : Ie.All), Be.disabled = c() === me.None, Xe(Dr, ` ${m()??""} Tage`), Xe(Jt, ` ${h()??""} px`)
            }), ue("click", re, H), ue("keypress", re, () => {}), ir(f, a, G => B(Jr, G)), ir(R, s, G => B(_a, G)), ir(ge, n, G => B(Ha, G)), ir(pe, o, G => B(Ga, G)), Se(x, [], ze, () => (me.None, c()), G => B(Te, G)), Se(x, [], ut, () => (me.AnkiPhil, c()), G => B(Te, G)), Se(x, [], De, () => (me.Ankizin, c()), G => B(Te, G)), Se(k, [], Ze, () => (Ie.HighYield, i()), G => B(mt, G)), Se(k, [], Ye, () => (Ie.AtLeastOnce, i()), G => B(mt, G)), Se(k, [], Be, () => (Ie.All, i()), G => B(mt, G)), Se(y, [], Ke, () => p(), G => B(Ue, G)), Se(y, [], at, () => p(), G => B(Ue, G)), Se(y, [], st, () => p(), G => B(Ue, G)), Se(y, [], nt, () => p(), G => B(Ue, G)), Wa(ot, m, G => B(ea, G)), Wa(Pt, h, G => B(ta, G)), Se(v, [], It, () => {
                "Imppact";
                return l()
            }, G => B(gr, G)), Se(v, [], Lt, () => {
                "ExamQuestionsPer10Pages";
                return l()
            }, G => B(gr, G)), Se(E, [], yt, () => u(), G => B(br, G)), Se(E, [], St, () => u(), G => B(br, G)), ir(ar, L, G => B(ra, G)), q(Q, se)
        },
        $$slots: {
            default: !0
        },
        $$legacy: !0
    }), Q => X(M, Q), () => U(M)), Yt(t, "openSettings", Y), Oe({
        openSettings: Y,
        get onClose() {
            return V()
        },
        set onClose(Q) {
            V(Q), ht()
        }
    })
}
var Ll = te('<h2 class="svelte-15ycuqa">Kontakt</h2> <p>Schreibt mir gerne eine E-Mail an <b>lernplan100analytics (&aelig;t) gmail.com</b></p> <p>Dubiose Zeichen natürlich durch sinnvolle ersetzen...</p> <br> <p>Ich freue mich wirklich über jede Rückmeldung (und gerne auch Fehlermeldungen oder Ideen) :&#41;</p> <p>&mdash; Johannes</p>', 1);

function yl(e, t) {
    Ge(t, !1);
    let r = he();
    const a = () => {
        U(r).openPopup()
    };
    let s = Ce(t, "onClose", 12, () => {});
    return ke(Qt(e, {
        get onClose() {
            return s()
        },
        children: (n, o) => {
            var c = Ll();
            ae(10), q(n, c)
        },
        $$slots: {
            default: !0
        },
        $$legacy: !0
    }), n => X(r, n), () => U(r)), Yt(t, "openContact", a), Oe({
        openContact: a,
        get onClose() {
            return s()
        },
        set onClose(n) {
            s(n), ht()
        }
    })
}
var Sl = te('<div id="menuContainer" class="svelte-105z081"><div id="menuList"></div></div>');

function Ul(e, t) {
    Ge(t, !1);

    function r(n) {
        const o = i => {
                n.contains(i.target) || (n.style.display = "none", c())
            },
            c = () => {
                document.removeEventListener("click", o)
            };
        document.addEventListener("click", o)
    }

    function a(n, o, c) {
        const i = O("#menuContainer");
        r(i.node()), i.style("display", "block").style("left", n.pageX + "px").style("top", n.pageY + "px");
        const p = O("svg").node().getBoundingClientRect().width,
            m = O("svg").node().getBoundingClientRect().height,
            h = n.pageX > p / 2 ? -100 : 0,
            l = n.pageY > m / 2 ? -100 : 0;
        i.style("transform", `translate(${h}%, ${l}%)`);
        const u = O("#menuList");
        u.selectAll("*").remove(), u.append("ul").style("list-style", "none").style("padding", "10px").style("margin", "0").selectAll("li").data(c).join("li").html(x => x.label).style("cursor", x => x.type === "interactive" ? "pointer" : "auto").style("padding", "7px").style("border-radius", "5px").style("margin", "7px 7px 7px 7px").style("background-color", x => x.type === "interactive" ? "rgba(0, 0, 0, 0.1)" : "none").style("margin-bottom", x => x.type === "header" ? "5px" : "0px").on("mouseover", function(x, k) {
            k.type === "interactive" && O(this).style("background-color", "rgba(0, 0, 0, 0.2")
        }).on("mouseout", function(x, k) {
            k.type === "interactive" && O(this).style("background-color", "rgba(0, 0, 0, 0.1)")
        }).on("click", (x, k) => {
            k.type === "interactive" && (k.action(x, o), O("#menuContainer").style("display", "none"))
        }), n.preventDefault()
    }
    Mt();
    var s = Sl();
    return q(e, s), Yt(t, "showContextMenu", a), Oe({
        showContextMenu: a
    })
}

function qe(e) {
    return Array.isArray ? Array.isArray(e) : So(e) === "[object Array]"
}
const xl = 1 / 0;

function El(e) {
    if (typeof e == "string") return e;
    let t = e + "";
    return t == "0" && 1 / e == -xl ? "-0" : t
}

function Cl(e) {
    return e == null ? "" : El(e)
}

function we(e) {
    return typeof e == "string"
}

function Lo(e) {
    return typeof e == "number"
}

function Dl(e) {
    return e === !0 || e === !1 || jl(e) && So(e) == "[object Boolean]"
}

function yo(e) {
    return typeof e == "object"
}

function jl(e) {
    return yo(e) && e !== null
}

function Re(e) {
    return e != null
}

function Za(e) {
    return !e.trim().length
}

function So(e) {
    return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
}
const Rl = "Incorrect 'index' type",
    kl = e => `Invalid value for key ${e}`,
    Ml = e => `Pattern length exceeds max of ${e}.`,
    Yl = e => `Missing ${e} property in key`,
    Kl = e => `Property 'weight' in key '${e}' must be a positive integer`,
    jn = Object.prototype.hasOwnProperty;
class Al {
    constructor(t) {
        this._keys = [], this._keyMap = {};
        let r = 0;
        t.forEach(a => {
            let s = Uo(a);
            this._keys.push(s), this._keyMap[s.id] = s, r += s.weight
        }), this._keys.forEach(a => {
            a.weight /= r
        })
    }
    get(t) {
        return this._keyMap[t]
    }
    keys() {
        return this._keys
    }
    toJSON() {
        return JSON.stringify(this._keys)
    }
}

function Uo(e) {
    let t = null,
        r = null,
        a = null,
        s = 1,
        n = null;
    if (we(e) || qe(e)) a = e, t = Rn(e), r = ns(e);
    else {
        if (!jn.call(e, "name")) throw new Error(Yl("name"));
        const o = e.name;
        if (a = o, jn.call(e, "weight") && (s = e.weight, s <= 0)) throw new Error(Kl(o));
        t = Rn(o), r = ns(o), n = e.getFn
    }
    return {
        path: t,
        id: r,
        weight: s,
        src: a,
        getFn: n
    }
}

function Rn(e) {
    return qe(e) ? e : e.split(".")
}

function ns(e) {
    return qe(e) ? e.join(".") : e
}

function Pl(e, t) {
    let r = [],
        a = !1;
    const s = (n, o, c) => {
        if (Re(n))
            if (!o[c]) r.push(n);
            else {
                let i = o[c];
                const p = n[i];
                if (!Re(p)) return;
                if (c === o.length - 1 && (we(p) || Lo(p) || Dl(p))) r.push(Cl(p));
                else if (qe(p)) {
                    a = !0;
                    for (let m = 0, h = p.length; m < h; m += 1) s(p[m], o, c + 1)
                } else o.length && s(p, o, c + 1)
            }
    };
    return s(e, we(t) ? t.split(".") : t, 0), a ? r : r[0]
}
const vl = {
        includeMatches: !1,
        findAllMatches: !1,
        minMatchCharLength: 1
    },
    zl = {
        isCaseSensitive: !1,
        includeScore: !1,
        keys: [],
        shouldSort: !0,
        sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
    },
    Zl = {
        location: 0,
        threshold: .6,
        distance: 100
    },
    Tl = {
        useExtendedSearch: !1,
        getFn: Pl,
        ignoreLocation: !1,
        ignoreFieldNorm: !1,
        fieldNormWeight: 1
    };
var N = {
    ...zl,
    ...vl,
    ...Zl,
    ...Tl
};
const wl = /[^ ]+/g;

function Nl(e = 1, t = 3) {
    const r = new Map,
        a = Math.pow(10, t);
    return {
        get(s) {
            const n = s.match(wl).length;
            if (r.has(n)) return r.get(n);
            const o = 1 / Math.pow(n, .5 * e),
                c = parseFloat(Math.round(o * a) / a);
            return r.set(n, c), c
        },
        clear() {
            r.clear()
        }
    }
}
class Ms {
    constructor({
        getFn: t = N.getFn,
        fieldNormWeight: r = N.fieldNormWeight
    } = {}) {
        this.norm = Nl(r, 3), this.getFn = t, this.isCreated = !1, this.setIndexRecords()
    }
    setSources(t = []) {
        this.docs = t
    }
    setIndexRecords(t = []) {
        this.records = t
    }
    setKeys(t = []) {
        this.keys = t, this._keysMap = {}, t.forEach((r, a) => {
            this._keysMap[r.id] = a
        })
    }
    create() {
        this.isCreated || !this.docs.length || (this.isCreated = !0, we(this.docs[0]) ? this.docs.forEach((t, r) => {
            this._addString(t, r)
        }) : this.docs.forEach((t, r) => {
            this._addObject(t, r)
        }), this.norm.clear())
    }
    add(t) {
        const r = this.size();
        we(t) ? this._addString(t, r) : this._addObject(t, r)
    }
    removeAt(t) {
        this.records.splice(t, 1);
        for (let r = t, a = this.size(); r < a; r += 1) this.records[r].i -= 1
    }
    getValueForItemAtKeyId(t, r) {
        return t[this._keysMap[r]]
    }
    size() {
        return this.records.length
    }
    _addString(t, r) {
        if (!Re(t) || Za(t)) return;
        let a = {
            v: t,
            i: r,
            n: this.norm.get(t)
        };
        this.records.push(a)
    }
    _addObject(t, r) {
        let a = {
            i: r,
            $: {}
        };
        this.keys.forEach((s, n) => {
            let o = s.getFn ? s.getFn(t) : this.getFn(t, s.path);
            if (Re(o)) {
                if (qe(o)) {
                    let c = [];
                    const i = [{
                        nestedArrIndex: -1,
                        value: o
                    }];
                    for (; i.length;) {
                        const {
                            nestedArrIndex: p,
                            value: m
                        } = i.pop();
                        if (Re(m))
                            if (we(m) && !Za(m)) {
                                let h = {
                                    v: m,
                                    i: p,
                                    n: this.norm.get(m)
                                };
                                c.push(h)
                            } else qe(m) && m.forEach((h, l) => {
                                i.push({
                                    nestedArrIndex: l,
                                    value: h
                                })
                            })
                    }
                    a.$[n] = c
                } else if (we(o) && !Za(o)) {
                    let c = {
                        v: o,
                        n: this.norm.get(o)
                    };
                    a.$[n] = c
                }
            }
        }), this.records.push(a)
    }
    toJSON() {
        return {
            keys: this.keys,
            records: this.records
        }
    }
}

function xo(e, t, {
    getFn: r = N.getFn,
    fieldNormWeight: a = N.fieldNormWeight
} = {}) {
    const s = new Ms({
        getFn: r,
        fieldNormWeight: a
    });
    return s.setKeys(e.map(Uo)), s.setSources(t), s.create(), s
}

function _l(e, {
    getFn: t = N.getFn,
    fieldNormWeight: r = N.fieldNormWeight
} = {}) {
    const {
        keys: a,
        records: s
    } = e, n = new Ms({
        getFn: t,
        fieldNormWeight: r
    });
    return n.setKeys(a), n.setIndexRecords(s), n
}

function Nr(e, {
    errors: t = 0,
    currentLocation: r = 0,
    expectedLocation: a = 0,
    distance: s = N.distance,
    ignoreLocation: n = N.ignoreLocation
} = {}) {
    const o = t / e.length;
    if (n) return o;
    const c = Math.abs(a - r);
    return s ? o + c / s : c ? 1 : o
}

function Hl(e = [], t = N.minMatchCharLength) {
    let r = [],
        a = -1,
        s = -1,
        n = 0;
    for (let o = e.length; n < o; n += 1) {
        let c = e[n];
        c && a === -1 ? a = n : !c && a !== -1 && (s = n - 1, s - a + 1 >= t && r.push([a, s]), a = -1)
    }
    return e[n - 1] && n - a >= t && r.push([a, n - 1]), r
}
const Et = 32;

function Gl(e, t, r, {
    location: a = N.location,
    distance: s = N.distance,
    threshold: n = N.threshold,
    findAllMatches: o = N.findAllMatches,
    minMatchCharLength: c = N.minMatchCharLength,
    includeMatches: i = N.includeMatches,
    ignoreLocation: p = N.ignoreLocation
} = {}) {
    if (t.length > Et) throw new Error(Ml(Et));
    const m = t.length,
        h = e.length,
        l = Math.max(0, Math.min(a, h));
    let u = n,
        L = l;
    const x = c > 1 || i,
        k = x ? Array(h) : [];
    let y;
    for (;
        (y = e.indexOf(t, L)) > -1;) {
        let H = Nr(t, {
            currentLocation: y,
            expectedLocation: l,
            distance: s,
            ignoreLocation: p
        });
        if (u = Math.min(H, u), L = y + m, x) {
            let Q = 0;
            for (; Q < m;) k[y + Q] = 1, Q += 1
        }
    }
    L = -1;
    let v = [],
        E = 1,
        M = m + h;
    const Y = 1 << m - 1;
    for (let H = 0; H < m; H += 1) {
        let Q = 0,
            J = M;
        for (; Q < J;) Nr(t, {
            errors: H,
            currentLocation: l + J,
            expectedLocation: l,
            distance: s,
            ignoreLocation: p
        }) <= u ? Q = J : M = J, J = Math.floor((M - Q) / 2 + Q);
        M = J;
        let se = Math.max(1, l - J + 1),
            z = o ? h : Math.min(l + J, h) + m,
            F = Array(z + 2);
        F[z + 1] = (1 << H) - 1;
        for (let g = z; g >= se; g -= 1) {
            let I = g - 1,
                f = r[e.charAt(I)];
            if (x && (k[I] = +!!f), F[g] = (F[g + 1] << 1 | 1) & f, H && (F[g] |= (v[g + 1] | v[g]) << 1 | 1 | v[g + 1]), F[g] & Y && (E = Nr(t, {
                    errors: H,
                    currentLocation: I,
                    expectedLocation: l,
                    distance: s,
                    ignoreLocation: p
                }), E <= u)) {
                if (u = E, L = I, L <= l) break;
                se = Math.max(1, 2 * l - L)
            }
        }
        if (Nr(t, {
                errors: H + 1,
                currentLocation: l,
                expectedLocation: l,
                distance: s,
                ignoreLocation: p
            }) > u) break;
        v = F
    }
    const V = {
        isMatch: L >= 0,
        score: Math.max(.001, E)
    };
    if (x) {
        const H = Hl(k, c);
        H.length ? i && (V.indices = H) : V.isMatch = !1
    }
    return V
}

function Ol(e) {
    let t = {};
    for (let r = 0, a = e.length; r < a; r += 1) {
        const s = e.charAt(r);
        t[s] = (t[s] || 0) | 1 << a - r - 1
    }
    return t
}
class Eo {
    constructor(t, {
        location: r = N.location,
        threshold: a = N.threshold,
        distance: s = N.distance,
        includeMatches: n = N.includeMatches,
        findAllMatches: o = N.findAllMatches,
        minMatchCharLength: c = N.minMatchCharLength,
        isCaseSensitive: i = N.isCaseSensitive,
        ignoreLocation: p = N.ignoreLocation
    } = {}) {
        if (this.options = {
                location: r,
                threshold: a,
                distance: s,
                includeMatches: n,
                findAllMatches: o,
                minMatchCharLength: c,
                isCaseSensitive: i,
                ignoreLocation: p
            }, this.pattern = i ? t : t.toLowerCase(), this.chunks = [], !this.pattern.length) return;
        const m = (l, u) => {
                this.chunks.push({
                    pattern: l,
                    alphabet: Ol(l),
                    startIndex: u
                })
            },
            h = this.pattern.length;
        if (h > Et) {
            let l = 0;
            const u = h % Et,
                L = h - u;
            for (; l < L;) m(this.pattern.substr(l, Et), l), l += Et;
            if (u) {
                const x = h - Et;
                m(this.pattern.substr(x), x)
            }
        } else m(this.pattern, 0)
    }
    searchIn(t) {
        const {
            isCaseSensitive: r,
            includeMatches: a
        } = this.options;
        if (r || (t = t.toLowerCase()), this.pattern === t) {
            let L = {
                isMatch: !0,
                score: 0
            };
            return a && (L.indices = [
                [0, t.length - 1]
            ]), L
        }
        const {
            location: s,
            distance: n,
            threshold: o,
            findAllMatches: c,
            minMatchCharLength: i,
            ignoreLocation: p
        } = this.options;
        let m = [],
            h = 0,
            l = !1;
        this.chunks.forEach(({
            pattern: L,
            alphabet: x,
            startIndex: k
        }) => {
            const {
                isMatch: y,
                score: v,
                indices: E
            } = Gl(t, L, x, {
                location: s + k,
                distance: n,
                threshold: o,
                findAllMatches: c,
                minMatchCharLength: i,
                includeMatches: a,
                ignoreLocation: p
            });
            y && (l = !0), h += v, y && E && (m = [...m, ...E])
        });
        let u = {
            isMatch: l,
            score: l ? h / this.chunks.length : 1
        };
        return l && a && (u.indices = m), u
    }
}
class lt {
    constructor(t) {
        this.pattern = t
    }
    static isMultiMatch(t) {
        return kn(t, this.multiRegex)
    }
    static isSingleMatch(t) {
        return kn(t, this.singleRegex)
    }
    search() {}
}

function kn(e, t) {
    const r = e.match(t);
    return r ? r[1] : null
}
class Wl extends lt {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "exact"
    }
    static get multiRegex() {
        return /^="(.*)"$/
    }
    static get singleRegex() {
        return /^=(.*)$/
    }
    search(t) {
        const r = t === this.pattern;
        return {
            isMatch: r,
            score: r ? 0 : 1,
            indices: [0, this.pattern.length - 1]
        }
    }
}
class Bl extends lt {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "inverse-exact"
    }
    static get multiRegex() {
        return /^!"(.*)"$/
    }
    static get singleRegex() {
        return /^!(.*)$/
    }
    search(t) {
        const a = t.indexOf(this.pattern) === -1;
        return {
            isMatch: a,
            score: a ? 0 : 1,
            indices: [0, t.length - 1]
        }
    }
}
class Vl extends lt {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "prefix-exact"
    }
    static get multiRegex() {
        return /^\^"(.*)"$/
    }
    static get singleRegex() {
        return /^\^(.*)$/
    }
    search(t) {
        const r = t.startsWith(this.pattern);
        return {
            isMatch: r,
            score: r ? 0 : 1,
            indices: [0, this.pattern.length - 1]
        }
    }
}
class Ql extends lt {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "inverse-prefix-exact"
    }
    static get multiRegex() {
        return /^!\^"(.*)"$/
    }
    static get singleRegex() {
        return /^!\^(.*)$/
    }
    search(t) {
        const r = !t.startsWith(this.pattern);
        return {
            isMatch: r,
            score: r ? 0 : 1,
            indices: [0, t.length - 1]
        }
    }
}
class Fl extends lt {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "suffix-exact"
    }
    static get multiRegex() {
        return /^"(.*)"\$$/
    }
    static get singleRegex() {
        return /^(.*)\$$/
    }
    search(t) {
        const r = t.endsWith(this.pattern);
        return {
            isMatch: r,
            score: r ? 0 : 1,
            indices: [t.length - this.pattern.length, t.length - 1]
        }
    }
}
class Xl extends lt {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "inverse-suffix-exact"
    }
    static get multiRegex() {
        return /^!"(.*)"\$$/
    }
    static get singleRegex() {
        return /^!(.*)\$$/
    }
    search(t) {
        const r = !t.endsWith(this.pattern);
        return {
            isMatch: r,
            score: r ? 0 : 1,
            indices: [0, t.length - 1]
        }
    }
}
class Co extends lt {
    constructor(t, {
        location: r = N.location,
        threshold: a = N.threshold,
        distance: s = N.distance,
        includeMatches: n = N.includeMatches,
        findAllMatches: o = N.findAllMatches,
        minMatchCharLength: c = N.minMatchCharLength,
        isCaseSensitive: i = N.isCaseSensitive,
        ignoreLocation: p = N.ignoreLocation
    } = {}) {
        super(t), this._bitapSearch = new Eo(t, {
            location: r,
            threshold: a,
            distance: s,
            includeMatches: n,
            findAllMatches: o,
            minMatchCharLength: c,
            isCaseSensitive: i,
            ignoreLocation: p
        })
    }
    static get type() {
        return "fuzzy"
    }
    static get multiRegex() {
        return /^"(.*)"$/
    }
    static get singleRegex() {
        return /^(.*)$/
    }
    search(t) {
        return this._bitapSearch.searchIn(t)
    }
}
class Do extends lt {
    constructor(t) {
        super(t)
    }
    static get type() {
        return "include"
    }
    static get multiRegex() {
        return /^'"(.*)"$/
    }
    static get singleRegex() {
        return /^'(.*)$/
    }
    search(t) {
        let r = 0,
            a;
        const s = [],
            n = this.pattern.length;
        for (;
            (a = t.indexOf(this.pattern, r)) > -1;) r = a + n, s.push([a, r - 1]);
        const o = !!s.length;
        return {
            isMatch: o,
            score: o ? 0 : 1,
            indices: s
        }
    }
}
const os = [Wl, Do, Vl, Ql, Xl, Fl, Bl, Co],
    Mn = os.length,
    $l = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,
    ql = "|";

function Jl(e, t = {}) {
    return e.split(ql).map(r => {
        let a = r.trim().split($l).filter(n => n && !!n.trim()),
            s = [];
        for (let n = 0, o = a.length; n < o; n += 1) {
            const c = a[n];
            let i = !1,
                p = -1;
            for (; !i && ++p < Mn;) {
                const m = os[p];
                let h = m.isMultiMatch(c);
                h && (s.push(new m(h, t)), i = !0)
            }
            if (!i)
                for (p = -1; ++p < Mn;) {
                    const m = os[p];
                    let h = m.isSingleMatch(c);
                    if (h) {
                        s.push(new m(h, t));
                        break
                    }
                }
        }
        return s
    })
}
const e0 = new Set([Co.type, Do.type]);
class t0 {
    constructor(t, {
        isCaseSensitive: r = N.isCaseSensitive,
        includeMatches: a = N.includeMatches,
        minMatchCharLength: s = N.minMatchCharLength,
        ignoreLocation: n = N.ignoreLocation,
        findAllMatches: o = N.findAllMatches,
        location: c = N.location,
        threshold: i = N.threshold,
        distance: p = N.distance
    } = {}) {
        this.query = null, this.options = {
            isCaseSensitive: r,
            includeMatches: a,
            minMatchCharLength: s,
            findAllMatches: o,
            ignoreLocation: n,
            location: c,
            threshold: i,
            distance: p
        }, this.pattern = r ? t : t.toLowerCase(), this.query = Jl(this.pattern, this.options)
    }
    static condition(t, r) {
        return r.useExtendedSearch
    }
    searchIn(t) {
        const r = this.query;
        if (!r) return {
            isMatch: !1,
            score: 1
        };
        const {
            includeMatches: a,
            isCaseSensitive: s
        } = this.options;
        t = s ? t : t.toLowerCase();
        let n = 0,
            o = [],
            c = 0;
        for (let i = 0, p = r.length; i < p; i += 1) {
            const m = r[i];
            o.length = 0, n = 0;
            for (let h = 0, l = m.length; h < l; h += 1) {
                const u = m[h],
                    {
                        isMatch: L,
                        indices: x,
                        score: k
                    } = u.search(t);
                if (L) {
                    if (n += 1, c += k, a) {
                        const y = u.constructor.type;
                        e0.has(y) ? o = [...o, ...x] : o.push(x)
                    }
                } else {
                    c = 0, n = 0, o.length = 0;
                    break
                }
            }
            if (n) {
                let h = {
                    isMatch: !0,
                    score: c / n
                };
                return a && (h.indices = o), h
            }
        }
        return {
            isMatch: !1,
            score: 1
        }
    }
}
const cs = [];

function r0(...e) {
    cs.push(...e)
}

function ps(e, t) {
    for (let r = 0, a = cs.length; r < a; r += 1) {
        let s = cs[r];
        if (s.condition(e, t)) return new s(e, t)
    }
    return new Eo(e, t)
}
const ga = {
        AND: "$and",
        OR: "$or"
    },
    is = {
        PATH: "$path",
        PATTERN: "$val"
    },
    ms = e => !!(e[ga.AND] || e[ga.OR]),
    a0 = e => !!e[is.PATH],
    s0 = e => !qe(e) && yo(e) && !ms(e),
    Yn = e => ({
        [ga.AND]: Object.keys(e).map(t => ({
            [t]: e[t]
        }))
    });

function jo(e, t, {
    auto: r = !0
} = {}) {
    const a = s => {
        let n = Object.keys(s);
        const o = a0(s);
        if (!o && n.length > 1 && !ms(s)) return a(Yn(s));
        if (s0(s)) {
            const i = o ? s[is.PATH] : n[0],
                p = o ? s[is.PATTERN] : s[i];
            if (!we(p)) throw new Error(kl(i));
            const m = {
                keyId: ns(i),
                pattern: p
            };
            return r && (m.searcher = ps(p, t)), m
        }
        let c = {
            children: [],
            operator: n[0]
        };
        return n.forEach(i => {
            const p = s[i];
            qe(p) && p.forEach(m => {
                c.children.push(a(m))
            })
        }), c
    };
    return ms(e) || (e = Yn(e)), a(e)
}

function n0(e, {
    ignoreFieldNorm: t = N.ignoreFieldNorm
}) {
    e.forEach(r => {
        let a = 1;
        r.matches.forEach(({
            key: s,
            norm: n,
            score: o
        }) => {
            const c = s ? s.weight : null;
            a *= Math.pow(o === 0 && c ? Number.EPSILON : o, (c || 1) * (t ? 1 : n))
        }), r.score = a
    })
}

function o0(e, t) {
    const r = e.matches;
    t.matches = [], Re(r) && r.forEach(a => {
        if (!Re(a.indices) || !a.indices.length) return;
        const {
            indices: s,
            value: n
        } = a;
        let o = {
            indices: s,
            value: n
        };
        a.key && (o.key = a.key.src), a.idx > -1 && (o.refIndex = a.idx), t.matches.push(o)
    })
}

function c0(e, t) {
    t.score = e.score
}

function p0(e, t, {
    includeMatches: r = N.includeMatches,
    includeScore: a = N.includeScore
} = {}) {
    const s = [];
    return r && s.push(o0), a && s.push(c0), e.map(n => {
        const {
            idx: o
        } = n, c = {
            item: t[o],
            refIndex: o
        };
        return s.length && s.forEach(i => {
            i(n, c)
        }), c
    })
}
class kt {
    constructor(t, r = {}, a) {
        this.options = {
            ...N,
            ...r
        }, this.options.useExtendedSearch, this._keyStore = new Al(this.options.keys), this.setCollection(t, a)
    }
    setCollection(t, r) {
        if (this._docs = t, r && !(r instanceof Ms)) throw new Error(Rl);
        this._myIndex = r || xo(this.options.keys, this._docs, {
            getFn: this.options.getFn,
            fieldNormWeight: this.options.fieldNormWeight
        })
    }
    add(t) {
        Re(t) && (this._docs.push(t), this._myIndex.add(t))
    }
    remove(t = () => !1) {
        const r = [];
        for (let a = 0, s = this._docs.length; a < s; a += 1) {
            const n = this._docs[a];
            t(n, a) && (this.removeAt(a), a -= 1, s -= 1, r.push(n))
        }
        return r
    }
    removeAt(t) {
        this._docs.splice(t, 1), this._myIndex.removeAt(t)
    }
    getIndex() {
        return this._myIndex
    }
    search(t, {
        limit: r = -1
    } = {}) {
        const {
            includeMatches: a,
            includeScore: s,
            shouldSort: n,
            sortFn: o,
            ignoreFieldNorm: c
        } = this.options;
        let i = we(t) ? we(this._docs[0]) ? this._searchStringList(t) : this._searchObjectList(t) : this._searchLogical(t);
        return n0(i, {
            ignoreFieldNorm: c
        }), n && i.sort(o), Lo(r) && r > -1 && (i = i.slice(0, r)), p0(i, this._docs, {
            includeMatches: a,
            includeScore: s
        })
    }
    _searchStringList(t) {
        const r = ps(t, this.options),
            {
                records: a
            } = this._myIndex,
            s = [];
        return a.forEach(({
            v: n,
            i: o,
            n: c
        }) => {
            if (!Re(n)) return;
            const {
                isMatch: i,
                score: p,
                indices: m
            } = r.searchIn(n);
            i && s.push({
                item: n,
                idx: o,
                matches: [{
                    score: p,
                    value: n,
                    norm: c,
                    indices: m
                }]
            })
        }), s
    }
    _searchLogical(t) {
        const r = jo(t, this.options),
            a = (c, i, p) => {
                if (!c.children) {
                    const {
                        keyId: h,
                        searcher: l
                    } = c, u = this._findMatches({
                        key: this._keyStore.get(h),
                        value: this._myIndex.getValueForItemAtKeyId(i, h),
                        searcher: l
                    });
                    return u && u.length ? [{
                        idx: p,
                        item: i,
                        matches: u
                    }] : []
                }
                const m = [];
                for (let h = 0, l = c.children.length; h < l; h += 1) {
                    const u = c.children[h],
                        L = a(u, i, p);
                    if (L.length) m.push(...L);
                    else if (c.operator === ga.AND) return []
                }
                return m
            },
            s = this._myIndex.records,
            n = {},
            o = [];
        return s.forEach(({
            $: c,
            i
        }) => {
            if (Re(c)) {
                let p = a(r, c, i);
                p.length && (n[i] || (n[i] = {
                    idx: i,
                    item: c,
                    matches: []
                }, o.push(n[i])), p.forEach(({
                    matches: m
                }) => {
                    n[i].matches.push(...m)
                }))
            }
        }), o
    }
    _searchObjectList(t) {
        const r = ps(t, this.options),
            {
                keys: a,
                records: s
            } = this._myIndex,
            n = [];
        return s.forEach(({
            $: o,
            i: c
        }) => {
            if (!Re(o)) return;
            let i = [];
            a.forEach((p, m) => {
                i.push(...this._findMatches({
                    key: p,
                    value: o[m],
                    searcher: r
                }))
            }), i.length && n.push({
                idx: c,
                item: o,
                matches: i
            })
        }), n
    }
    _findMatches({
        key: t,
        value: r,
        searcher: a
    }) {
        if (!Re(r)) return [];
        let s = [];
        if (qe(r)) r.forEach(({
            v: n,
            i: o,
            n: c
        }) => {
            if (!Re(n)) return;
            const {
                isMatch: i,
                score: p,
                indices: m
            } = a.searchIn(n);
            i && s.push({
                score: p,
                key: t,
                value: n,
                idx: o,
                norm: c,
                indices: m
            })
        });
        else {
            const {
                v: n,
                n: o
            } = r, {
                isMatch: c,
                score: i,
                indices: p
            } = a.searchIn(n);
            c && s.push({
                score: i,
                key: t,
                value: n,
                norm: o,
                indices: p
            })
        }
        return s
    }
}
kt.version = "7.0.0";
kt.createIndex = xo;
kt.parseIndex = _l;
kt.config = N;
kt.parseQuery = jo;
r0(t0);
var i0 = te(`<div id="header" class="svelte-e61xc8"><h3 class="svelte-e61xc8">Suche</h3></div> <div id="searchCombo" class="svelte-e61xc8"><input id="searchField" type="text" placeholder="Suche..." class="svelte-e61xc8"> <button id="searchButton" class="svelte-e61xc8"><i class="fas fa-search"></i></button></div><p>Aktuell werden nur die Kapitelnamen (und Fächer) durchsucht, damit man schnell nachschlagen kann
        an welchem Tag ein bestimmtes Kapitel drankommt.</p>`, 1);

function m0(e, t) {
    Ge(t, !1);
    let r = he(),
        a = he(),
        s, n, o, c = he();
    const i = u => {
        s = u, n = new kt(s, {
            includeScore: !0,
            threshold: 0.0,
            keys: ["Chapter", "Subject"]
        }), o = new kt(s, {
            includeMatches: !0,
            keys: ["Chapter", "Subject"]
        }), U(r).openPopup(), setTimeout(() => {
            U(a).focus()
        }, 100)
    };
    let p = Ce(t, "onClose", 12, () => {}),
        m = Ce(t, "searchCallback", 12, u => {});

    function h() {
        const u = n.search(U(c)),
            x = o.search(U(c)).filter(k => k.matches.some(y => y.value.toLowerCase().includes(U(c).toLowerCase())));
        m()(u.concat(x))
    }

    function l(u) {
        u.key === "Enter" && h()
    }
    return Mt(), ke(Qt(e, {
        get onClose() {
            return p()
        },
        children: (u, L) => {
            var x = i0(),
                k = P(fr(x), 2),
                y = T(k);
            ce(y), ke(y, E => X(a, E), () => U(a));
            var v = P(y, 2);
            Z(k), ae(4), Wa(y, () => U(c), E => X(c, E)), ue("input", y, h), ue("click", v, h), ue("keypress", v, () => {}), q(u, x)
        },
        $$slots: {
            default: !0
        },
        $$legacy: !0
    }), u => X(r, u), () => U(r)), Yt(t, "openSearch", i), Oe({
        openSearch: i,
        closeSearch: () => {
            Ic(r, U(r).open = !1)
        },
        get onClose() {
            return p()
        },
        set onClose(u) {
            p(u), ht()
        },
        get searchCallback() {
            return m()
        },
        set searchCallback(u) {
            m(u), ht()
        }
    })
}
var h0 = te('<div id="container" class="svelte-1udf73q"><!> <button id="close" class="svelte-1udf73q"><i class="fa-regular fa-circle-xmark"></i></button></div>');

function _r(e, t) {
    Ge(t, !1);
    const r = Sr(),
        a = () => ee(c, "$isFirstTimeSeeingThisMessage", r),
        s = () => ee(Oa, "$numberOfVisitsSince150523", r);
    let n = Ce(t, "cookieName", 12),
        o = Ce(t, "onlyShowIf", 12);
    const c = Ec(n(), !0);
    Mt();
    var i = h0(),
        p = T(i);
    bs(p, t, "default", {});
    var m = P(p, 2);
    return Z(i), Ne(() => _n(i, "hidden", !(a() && s() > 2 && o()))), ue("click", m, () => {
        B(c, !1)
    }), q(e, i), Oe({
        get cookieName() {
            return n()
        },
        set cookieName(h) {
            n(h), ht()
        },
        get onlyShowIf() {
            return o()
        },
        set onlyShowIf(h) {
            o(h), ht()
        }
    })
}
var l0 = te('<li><span class="svelte-2wv2g8"> </span></li>'),
    u0 = te('<div class="box svelte-2wv2g8"><!></div>'),
    d0 = te('<ul class="svelte-2wv2g8"></ul> <!>', 1);

function g0(e, t) {
    let r = Ce(t, "items", 24, () => []),
        a = Ce(t, "activeTabValue", 12, 1);
    const s = i => () => a(i);
    var n = d0(),
        o = fr(n);
    Hs(o, 5, r, _s, (i, p) => {
        var m = l0(),
            h = T(m),
            l = Lc(() => s(U(p).value)),
            u = T(h, !0);
        Z(h), Z(m), Ne(() => {
            Mc(m, `${(a()===U(p).value?"active":"")??""} svelte-2wv2g8`), Xe(u, U(p).label)
        }), ue("click", h, function(...L) {
            var x;
            (x = U(l)) == null || x.apply(this, L)
        }), q(i, m)
    }), Z(o);
    var c = P(o, 2);
    Hs(c, 1, r, _s, (i, p) => {
        var m = Xo(),
            h = fr(m);
        Ht(h, () => a() == U(p).value, l => {
            var u = u0(),
                L = T(u);
            Sc(L, () => U(p).component, (x, k) => {
                k(x, {})
            }), Z(u), q(l, u)
        }), q(i, m)
    }), q(e, n)
}
var b0 = te(`<h3 class="svelte-7anw79">Basics</h3> <ul><li class="svelte-7anw79">Scrolle um zu zoomen. Klicke und ziehe um die Ansicht zu verschieben.</li> <li class="svelte-7anw79">Klicke auf ein Kapitel um es in Amboss aufzurufen.</li> <li class="svelte-7anw79">Rechtsklicke auf ein Kapitel um es als gelesen zu markieren.</li></ul> <h3 class="svelte-7anw79">Tablets / Handys</h3> <ul><li class="svelte-7anw79">Tippe Kapitel an, um sie anzuzeigen oder zu markieren.</li></ul> <h3 class="svelte-7anw79">Nützlich & Wichtig</h3> <ul><li class="svelte-7anw79">Halte den Zeiger über einen farbigen Bereich der x-Achse um das Fach anzuzeigen.</li> <li class="svelte-7anw79">Klicke auf eine Zahl auf der x-Achse um diesen Lerntag in Amboss zu öffnen.</li> <li class="svelte-7anw79">Halte beim Markieren die 'Shift'- oder 'Strg'-Taste gedrückt, um zusätzlich alle vorherigen Tage
        zu markieren/demarkieren.</li> <li class="svelte-7anw79">Achtung: Wenn du deine Cookies / Browserverlauf o.ä. löschst, gehen deine Markierungen und
        Einstellungen verloren</li></ul>`, 1);

function f0(e) {
    var t = b0();
    ae(10), q(e, t)
}
var I0 = te('<div class="collapsible svelte-1n87fv"><h3 class="svelte-1n87fv"><button class="svelte-1n87fv"> <div class="closedArrow">&#x25BC;</div> <div class="openArrow">&#x25B3;</div></button></h3> <div class="contents"><!></div></div>');

function xt(e, t) {
    let r = Ce(t, "headerText", 8),
        a = he(!1);
    var s = I0(),
        n = T(s),
        o = T(n),
        c = T(o),
        i = P(c),
        p = P(i, 2);
    Z(o), Z(n);
    var m = P(n, 2),
        h = T(m);
    bs(h, t, "default", {}), Z(m), Z(s), Ne(() => {
        aa(o, "aria-expanded", U(a)), Xe(c, `${r()??""} `), i.hidden = U(a), p.hidden = !U(a), m.hidden = !U(a)
    }), ue("click", o, () => X(a, !U(a))), q(e, s)
}
var L0 = te('<p>Halte die <span class="key svelte-pb7sa4">Shift</span>-Taste gedrückt (<span class="key svelte-pb7sa4">Strg</span> in Firefox).</p>'),
    y0 = te("<p>Leider nein. Wäre mega, wird aber noch lange dauern bis ich das schaffe.</p>"),
    S0 = te("<p>Ja, in den Einstellungen</p>"),
    U0 = te("<p>Bitte Mail an mich, ich kümmere mich drum</p>"),
    x0 = te("<p>Nein. Amboss hat eine Anleitung wie man auf den neuesten Lernplan wechselt.</p>"),
    E0 = te(`<p>Nein, weil ich keine Vision habe wie genau das UI dafür sein soll. Wenn du eine ausgereifte
            Idee hast schreib mir gerne eine Mail.</p>`),
    C0 = te("<p>Schreib mir ne Mail, ich bekomme das sonst nicht mit!</p>"),
    D0 = te("<section><!> <!> <!> <!> <!> <!> <!></section>");

function j0(e) {
    var t = D0(),
        r = T(t);
    xt(r, {
        headerText: "Kann ich mehrere Kapitel gleichzeitig markieren?",
        children: (p, m) => {
            var h = L0();
            q(p, h)
        },
        $$slots: {
            default: !0
        }
    });
    var a = P(r, 2);
    xt(a, {
        headerText: "Kann man Kapitel / Tage verschieben?",
        children: (p, m) => {
            var h = y0();
            q(p, h)
        },
        $$slots: {
            default: !0
        }
    });
    var s = P(a, 2);
    xt(s, {
        headerText: "Kann man die Skala für die Fragen größer machen?",
        children: (p, m) => {
            var h = S0();
            q(p, h)
        },
        $$slots: {
            default: !0
        }
    });
    var n = P(s, 2);
    xt(n, {
        headerText: "Der IMPPact von Kapitel xy oder die Anzahl der Fragen stimmt nicht!",
        children: (p, m) => {
            var h = U0();
            q(p, h)
        },
        $$slots: {
            default: !0
        }
    });
    var o = P(n, 2);
    xt(o, {
        headerText: "Gibt es auch den Plan vom letzten Semester noch?",
        children: (p, m) => {
            var h = x0();
            q(p, h)
        },
        $$slots: {
            default: !0
        }
    });
    var c = P(o, 2);
    xt(c, {
        headerText: "Kann man irgendwie Pausentage anzeigen?",
        children: (p, m) => {
            var h = E0();
            q(p, h)
        },
        $$slots: {
            default: !0
        }
    });
    var i = P(c, 2);
    xt(i, {
        headerText: "Der neue Lernplan fürs nächste Examen ist online, wann gibts den hier?",
        children: (p, m) => {
            var h = C0();
            q(p, h)
        },
        $$slots: {
            default: !0
        }
    }), Z(t), q(e, t)
}
var R0 = te(`<p>Es besteht keinerlei Beziehung zur AMBOSS GmbH. Hier gibt es keine eigenständigen Inhalte, es wird
    lediglich zu den entsprechenden Kapiteln verlinkt. Alle Angaben sind ohne Gewähr.<br> Diese Seite ist nur für meine Freunde als Hilfe gedacht und verfolgt keinerlei gewerbliche Absichten.<br> Diese Seite speichert Einstellungen nur lokal im Browser. Diese "Cookies" im weiteren Sinne sind für
    die Nutzung der Webseite unbedingt erforderlich (so werden z.B. bereits markierte Kapitel auf diese
    Weise gespeichert) und lassen keinerlei Rückschlüsse auf den Benutzer zu. Es werden keine persönliche
    Daten gespeichert oder übertragen.</p> <br> <p>&copy; 2022-2025 Johannes &mdash; Frankfurt</p>`, 1);

function k0(e) {
    var t = R0();
    ae(4), q(e, t)
}
const M0 = "04.06.2025",Y0 = "30 Tage Lernplan M1 - H2025",K0 = 36,A0 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],P0 = 180,v0 = [174, 101, 116, 140, 77, 75, 98, 91, 104, 65, 64, 81, 83, 90, 122, 128, 114, 99, 46, 73, 134, 119, 57, 112, 66, 126, 161, 135, 215, 218, 155, 158, 159, 156, 156, 159],z0 = ["https://next.amboss.com/de/courses/4R03Mf/Eya8SM", "https://next.amboss.com/de/courses/4R03Mf/vyaASM", "https://next.amboss.com/de/courses/4R03Mf/Dya1hM", "https://next.amboss.com/de/courses/4R03Mf/wyahhM", "https://next.amboss.com/de/courses/4R03Mf/9yaNhM", "https://next.amboss.com/de/courses/4R03Mf/CyaqhM", "https://next.amboss.com/de/courses/4R03Mf/xyaEhM", "https://next.amboss.com/de/courses/4R03Mf/ByazhM", "https://next.amboss.com/de/courses/4R03Mf/yyad3M", "https://next.amboss.com/de/courses/4R03Mf/AyaR3M", "https://next.amboss.com/de/courses/4R03Mf/_ya53M", "https://next.amboss.com/de/courses/4R03Mf/zyar3M", "https://next.amboss.com/de/courses/4R03Mf/-yaD3M", "https://next.amboss.com/de/courses/4R03Mf/ZAaZRM", "https://next.amboss.com/de/courses/4R03Mf/0AaeRM", "https://next.amboss.com/de/courses/4R03Mf/aAaQRM", "https://next.amboss.com/de/courses/4R03Mf/YAanRM", "https://next.amboss.com/de/courses/4R03Mf/bAaHRM", "https://next.amboss.com/de/courses/4R03Mf/XAa9RM", "https://next.amboss.com/de/courses/4R03Mf/cAaaiM", "https://next.amboss.com/de/courses/4R03Mf/1Aa2iM", "https://next.amboss.com/de/courses/4R03Mf/WAaPiM", "https://next.amboss.com/de/courses/4R03Mf/dAaoiM", "https://next.amboss.com/de/courses/4R03Mf/VAaGiM", "https://next.amboss.com/de/courses/4R03Mf/eAaxiM", "https://next.amboss.com/de/courses/4R03Mf/UAabQM", "https://next.amboss.com/de/courses/4R03Mf/2AaTQM", "https://next.amboss.com/de/courses/4R03Mf/fAakQM", "https://next.amboss.com/de/courses/4R03Mf/TAa6QM", "https://next.amboss.com/de/courses/4R03Mf/gAaFQM"],Z0 = [
        {
        Day: 1,    Importance: 1,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Handbuch - Vorbereitung auf das Erste Staatsexamen / Physikum",    Length: "344",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/4R03Mf/Eya8SM/article/YJ0nsS",    Error: 0}, {        Day: 1,    Importance: 2,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Kreuztipps zum Ersten Staatsexamen",    Length: "401",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/4R03Mf/Eya8SM/article/aJ0QsS",    Error: 0}, {        Day: 1,    Importance: 3,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Die Zelle",    Length: "1894",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/4R03Mf/Eya8SM/article/0o0e0S",    Error: 0}, {        Day: 1,    Importance: 4,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Stofftransport",    Length: "1405",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/Eya8SM/article/xK0EiS",    Error: 0}, {        Day: 1,    Importance: 5,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Signaltransduktion",    Length: "1293",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/Eya8SM/article/Qp0u6S",    Error: 0}, {        Day: 1,    Importance: 6,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Ruhe- und Aktionspotenzial",    Length: "2163",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/Eya8SM/article/jp0_6S",    Error: 0}, {        Day: 1,    Importance: 7,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Leistungsphysiologie und Altern",    Length: "2417",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/Eya8SM/article/h60ckS",    Error: 0}, {        Day: 2,    Importance: 1,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Aufbau der Materie",    Length: "5925",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/vyaASM/article/hK0cTS",    Error: 0}, {        Day: 2,    Importance: 2,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Ionisierende Strahlung",    Length: "1307",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/vyaASM/article/k60mOS",    Error: 0}, {        Day: 2,    Importance: 3,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Thermodynamik",    Length: "2160",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/vyaASM/article/G60BmS",    Error: 0}, {        Day: 2,    Importance: 4,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Chemische Reaktionen",    Length: "3025",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/vyaASM/article/PK0WgS",    Error: 0}, {        Day: 2,    Importance: 5,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Redoxchemie",    Length: "1723",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/vyaASM/article/hp0c6S",    Error: 0}, {        Day: 3,    Importance: 1,    Subject: "Grundlagen der Chemie, Biochemie und Zellbiologie",    Chapter: "Grundlagen der organischen Chemie",    Length: "3660",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/4R03Mf/Dya1hM/article/4o03XS",    Error: 0}, {        Day: 3,    Importance: 2,    Subject: "Grundlagen der Chemie, Biochemie und Zellbiologie",    Chapter: "Enzyme und Biokatalyse",    Length: "2618",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/Dya1hM/article/a60QjS",    Error: 0}, {        Day: 3,    Importance: 3,    Subject: "Grundlagen der Chemie, Biochemie und Zellbiologie",    Chapter: "Biochemische Labormethoden",    Length: "1396",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/Dya1hM/article/Y60njS",    Error: 0}, {        Day: 3,    Importance: 4,    Subject: "Grundlagen der Chemie, Biochemie und Zellbiologie",    Chapter: "Zellzyklus und Tumorentstehung",    Length: "636",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/Dya1hM/article/2p0TKS",    Error: 0}, {        Day: 4,    Importance: 1,    Subject: "Grundlagen der Biochemie und Zellbiologie",    Chapter: "Aufbau von DNA und RNA",    Length: "1890",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/wyahhM/article/RK0lTS",    Error: 0}, {        Day: 4,    Importance: 2,    Subject: "Grundlagen der Biochemie und Zellbiologie",    Chapter: "Replikation und Reparaturmechanismen der DNA",    Length: "1858",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/wyahhM/article/Yp0nLS",    Error: 0}, {        Day: 4,    Importance: 3,    Subject: "Grundlagen der Biochemie und Zellbiologie",    Chapter: "Purine und Pyrimidine",    Length: "2543",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/wyahhM/article/CK0qiS",    Error: 0}, {        Day: 4,    Importance: 4,    Subject: "Grundlagen der Biochemie und Zellbiologie",    Chapter: "Genexpression und Transkription",    Length: "1964",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/wyahhM/article/0p0eLS",    Error: 0}, {        Day: 5,    Importance: 1,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Translation und Proteinbiosynthese",    Length: "1226",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/9yaNhM/article/Zp0ZLS",    Error: 0}, {        Day: 5,    Importance: 2,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Grundlagen der Mikrobiologie und Virologie",    Length: "1863",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/9yaNhM/article/b60HjS",    Error: 0}, {        Day: 5,    Importance: 3,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Bakterien",    Length: "253",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/9yaNhM/article/lp0vpS",    Error: 0}, {        Day: 6,    Importance: 1,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Allgemeine Anatomie",    Length: "1418",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/CyaqhM/article/s60tmS",    Error: 0}, {        Day: 6,    Importance: 2,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Allgemeine Histologie",    Length: "1899",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/CyaqhM/article/7604mS",    Error: 0}, {        Day: 6,    Importance: 3,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Bindegewebe",    Length: "1899",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/CyaqhM/article/Bo0zVS",    Error: 0}, {        Day: 6,    Importance: 4,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Fettgewebe",    Length: "379",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/CyaqhM/article/6p0jqS",    Error: 0}, {        Day: 6,    Importance: 5,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Knorpelgewebe",    Length: "372",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/CyaqhM/article/q60CNS",    Error: 0}, {        Day: 6,    Importance: 6,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Knochengewebe",    Length: "362",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/CyaqhM/article/2o0TYS",    Error: 0}, {        Day: 6,    Importance: 7,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Muskelgewebe",    Length: "536",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/CyaqhM/article/pp0LqS",    Error: 0}, {        Day: 6,    Importance: 8,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Glatte Muskulatur",    Length: "445",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/CyaqhM/article/8K0ORS",    Error: 0}, {        Day: 6,    Importance: 9,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Skelettmuskulatur",    Length: "2327",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/CyaqhM/article/Jp0sqS",    Error: 0}, {        Day: 6,    Importance: 10,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Bauchhöhle",    Length: "1536",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/CyaqhM/article/EK08RS",    Error: 0}, {        Day: 7,    Importance: 1,    Subject: "Verdauungssystem",    Chapter: "Übersicht des Verdauungssystems",    Length: "2678",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/qK0ChS",    Error: 0}, {        Day: 7,    Importance: 2,    Subject: "Verdauungssystem",    Chapter: "Mundhöhle",    Length: "953",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/KK0UhS",    Error: 0}, {        Day: 7,    Importance: 3,    Subject: "Verdauungssystem",    Chapter: "Zähne",    Length: "1122",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/np07JS",    Error: 0}, {        Day: 7,    Importance: 4,    Subject: "Verdauungssystem",    Chapter: "Zunge",    Length: "641",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/Lp0wJS",    Error: 0}, {        Day: 7,    Importance: 5,    Subject: "Verdauungssystem",    Chapter: "Speicheldrüsen",    Length: "1470",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/op00qS",    Error: 0}, {        Day: 7,    Importance: 6,    Subject: "Verdauungssystem",    Chapter: "Pharynx",    Length: "831",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/Kp0UqS",    Error: 0}, {        Day: 7,    Importance: 7,    Subject: "Verdauungssystem",    Chapter: "Ösophagus",    Length: "911",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/6K0jhS",    Error: 0}, {        Day: 7,    Importance: 8,    Subject: "Verdauungssystem",    Chapter: "Magen",    Length: "2130",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/XK09US",    Error: 0}, {        Day: 7,    Importance: 9,    Subject: "Verdauungssystem",    Chapter: "Dünndarm",    Length: "1928",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/pK0LhS",    Error: 0}, {        Day: 7,    Importance: 10,    Subject: "Verdauungssystem",    Chapter: "Leber",    Length: "2615",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/F60g5S",    Error: 0}, {        Day: 7,    Importance: 11,    Subject: "Verdauungssystem",    Chapter: "Gallenblase und Galle",    Length: "229",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/xyaEhM/article/t60X5S",    Error: 0}, {        Day: 8,    Importance: 1,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Pankreas",    Length: "1992",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/ByazhM/article/2K0TfS",    Error: 0}, {        Day: 8,    Importance: 2,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Zäkum und Kolon",    Length: "1411",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/ByazhM/article/rK0f3S",    Error: 0}, {        Day: 8,    Importance: 3,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Rektum und Analkanal",    Length: "1604",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/ByazhM/article/8p0OrS",    Error: 0}, {        Day: 8,    Importance: 4,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Übersicht Ernährung (Vorklinik)",    Length: "895",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/ByazhM/article/X609jS",    Error: 0}, {        Day: 8,    Importance: 5,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Kohlenhydrate",    Length: "2093",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/ByazhM/article/w60hMS",    Error: 0}, {        Day: 8,    Importance: 6,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Abbau und Synthese der Glucose",    Length: "2189",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/ByazhM/article/r60fmS",    Error: 0}, {        Day: 8,    Importance: 7,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Glykogenstoffwechsel",    Length: "184",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/ByazhM/article/I60YmS",    Error: 0}, {        Day: 9,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Aminosäuren und Proteine",    Length: "3310",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/yyad3M/article/Jo0s1S",    Error: 0}, {        Day: 9,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Aminosäurestoffwechsel",    Length: "2058",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/yyad3M/article/Mp0MJS",    Error: 0}, {        Day: 9,    Importance: 3,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Lipide",    Length: "1969",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/yyad3M/article/D601MS",    Error: 0}, {        Day: 9,    Importance: 4,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Fettsäuren und Triacylglycerine",    Length: "2662",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/yyad3M/article/B60zMS",    Error: 0}, {        Day: 9,    Importance: 5,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Cholesterin",    Length: "640",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/yyad3M/article/y60dnS",    Error: 0}, {        Day: 10,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Citratzyklus",    Length: "736",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/AyaR3M/article/3p0S6S",    Error: 0}, {        Day: 10,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Atmungskette",    Length: "2092",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/AyaR3M/article/Rp0l6S",    Error: 0}, {        Day: 10,    Importance: 3,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Energie- und Wärmehaushalt",    Length: "2525",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/AyaR3M/article/wK0hiS",    Error: 0}, {        Day: 10,    Importance: 4,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Vitamine (Vorklinik)",    Length: "501",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/AyaR3M/article/z60rnS",    Error: 0}, {        Day: 10,    Importance: 5,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Mineralstoffe",    Length: "352",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/AyaR3M/article/-60DnS",    Error: 0}, {        Day: 11,    Importance: 1,    Subject: "Grundlagen der Physik und Herz-Kreislauf",    Chapter: "Grundlagen des Rechnens",    Length: "733",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/_ya53M/article/NK0-gS",    Error: 0}, {        Day: 11,    Importance: 2,    Subject: "Grundlagen der Physik und Herz-Kreislauf",    Chapter: "Grundlagen der Mechanik",    Length: "1436",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/_ya53M/article/lK0vgS",    Error: 0}, {        Day: 11,    Importance: 3,    Subject: "Grundlagen der Physik und Herz-Kreislauf",    Chapter: "Elektrizitätslehre",    Length: "1520",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/_ya53M/article/4603OS",    Error: 0}, {        Day: 11,    Importance: 4,    Subject: "Grundlagen der Physik und Herz-Kreislauf",    Chapter: "Grundlagen des Kreislaufes",    Length: "1423",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/_ya53M/article/no07cS",    Error: 0}, {        Day: 12,    Importance: 1,    Subject: "Herz-Kreislauf",    Chapter: "Aufbau des Herzens",    Length: "1821",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/zyar3M/article/CL0q-g",    Error: 0}, {        Day: 12,    Importance: 2,    Subject: "Herz-Kreislauf",    Chapter: "Herzerregung",    Length: "4698",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/zyar3M/article/yp0dHS",    Error: 0}, {        Day: 12,    Importance: 3,    Subject: "Herz-Kreislauf",    Chapter: "Herzmechanik",    Length: "1489",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/zyar3M/article/xL0E-g",    Error: 0}, {        Day: 12,    Importance: 4,    Subject: "Herz-Kreislauf",    Chapter: "Aufbau und Funktion der Blutgefäße",    Length: "2002",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/zyar3M/article/go0FYS",    Error: 0}, {        Day: 12,    Importance: 5,    Subject: "Herz-Kreislauf",    Chapter: "Kreislaufregulation",    Length: "639",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/zyar3M/article/po0L1S",    Error: 0}, {        Day: 13,    Importance: 1,    Subject: "Atmung und Blut",    Chapter: "Atemwege und Lunge",    Length: "4451",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/-yaD3M/article/6o0j1S",    Error: 0}, {        Day: 13,    Importance: 2,    Subject: "Atmung und Blut",    Chapter: "Atemmechanik",    Length: "1509",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/-yaD3M/article/A60RnS",    Error: 0}, {        Day: 13,    Importance: 3,    Subject: "Atmung und Blut",    Chapter: "Blut und Blutzellen",    Length: "3027",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/-yaD3M/article/LK0wSS",    Error: 0}, {        Day: 13,    Importance: 4,    Subject: "Atmung und Blut",    Chapter: "Knochenmark und Blutbildung",    Length: "830",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/-yaD3M/article/qp0CqS",    Error: 0}, {        Day: 13,    Importance: 5,    Subject: "Atmung und Blut",    Chapter: "Erythrozyten",    Length: "1660",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/-yaD3M/article/960NMS",    Error: 0}, {        Day: 13,    Importance: 6,    Subject: "Atmung und Blut",    Chapter: "Hämoglobin",    Length: "659",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/-yaD3M/article/C60qMS",    Error: 0}, {        Day: 13,    Importance: 7,    Subject: "Atmung und Blut",    Chapter: "Gastransport im Blut",    Length: "1882",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/-yaD3M/article/Np0-pS",    Error: 0}, {        Day: 14,    Importance: 1,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Blutstillung und Blutgerinnung",    Length: "1553",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/ZAaZRM/article/_K05QS",    Error: 0}, {        Day: 14,    Importance: 2,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Einführung in die Immunologie",    Length: "762",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/4R03Mf/ZAaZRM/article/K60UNS",    Error: 0}, {        Day: 14,    Importance: 3,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Unspezifisches Immunsystem",    Length: "1282",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/ZAaZRM/article/660jNS",    Error: 0}, {        Day: 14,    Importance: 4,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Spezifisches Immunsystem",    Length: "1390",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/ZAaZRM/article/p60LNS",    Error: 0}, {        Day: 14,    Importance: 5,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Gewebshormone",    Length: "3800",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/ZAaZRM/article/V60GPS",    Error: 0}, {        Day: 14,    Importance: 6,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Lymphatisches System",    Length: "1332",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/ZAaZRM/article/gp0FKS",    Error: 0}, {        Day: 14,    Importance: 7,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Lymphknoten",    Length: "355",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/ZAaZRM/article/Tp06KS",    Error: 0}, {        Day: 14,    Importance: 8,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Milz",    Length: "821",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/ZAaZRM/article/fp0kKS",    Error: 0}, {        Day: 14,    Importance: 9,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Mukosa-assoziiertes lymphatisches Gewebe",    Length: "835",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/ZAaZRM/article/Sp0yKS",    Error: 0}, {        Day: 15,    Importance: 1,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Niere",    Length: "2305",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/0AaeRM/article/jo0_bS",    Error: 0}, {        Day: 15,    Importance: 2,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Nierendurchblutung und glomeruläre Filtration",    Length: "1720",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/0AaeRM/article/bJ0HsS",    Error: 0}, {        Day: 15,    Importance: 3,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Tubuläre Transportprozesse",    Length: "300",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/0AaeRM/article/_605nS",    Error: 0}, {        Day: 15,    Importance: 4,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Wasser- und Elektrolythaushalt",    Length: "1473",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/0AaeRM/article/lo0vXS",    Error: 0}, {        Day: 15,    Importance: 5,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Säure-Basen-Haushalt",    Length: "3027",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/0AaeRM/article/Io0YWS",    Error: 0}, {        Day: 15,    Importance: 6,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnleiter",    Length: "653",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/0AaeRM/article/Xp09LS",    Error: 0}, {        Day: 15,    Importance: 7,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnblase",    Length: "1131",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/0AaeRM/article/bp0HLS",    Error: 0}, {        Day: 15,    Importance: 8,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnröhre",    Length: "625",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/0AaeRM/article/ap0QLS",    Error: 0}, {        Day: 16,    Importance: 1,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Allgemeine Hormoneigenschaften",    Length: "257",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/aAaQRM/article/IK0Y3S",    Error: 0}, {        Day: 16,    Importance: 2,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Hypophyse",    Length: "2095",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/aAaQRM/article/jK0_TS",    Error: 0}, {        Day: 16,    Importance: 3,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Schilddrüse",    Length: "2228",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/aAaQRM/article/bK0HUS",    Error: 0}, {        Day: 16,    Importance: 4,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Nebenschilddrüsen",    Length: "1077",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/aAaQRM/article/Op0IpS",    Error: 0}, {        Day: 16,    Importance: 5,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Nebenniere",    Length: "3694",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/aAaQRM/article/S60y4S",    Error: 0}, {        Day: 16,    Importance: 6,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Pankreashormone",    Length: "1322",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/aAaQRM/article/kp0mpS",    Error: 0}, {        Day: 17,    Importance: 1,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Sexualhormone",    Length: "3267",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/zo0reS",    Error: 0}, {        Day: 17,    Importance: 2,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Ovar",    Length: "1465",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/m60VlS",    Error: 0}, {        Day: 17,    Importance: 3,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Tuba uterina",    Length: "519",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/M60MlS",    Error: 0}, {        Day: 17,    Importance: 4,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Uterus",    Length: "1774",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/560ilS",    Error: 0}, {        Day: 17,    Importance: 5,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Vagina und Vulva",    Length: "1237",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/n607lS",    Error: 0}, {        Day: 17,    Importance: 6,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Mamma",    Length: "681",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/L60wlS",    Error: 0}, {        Day: 17,    Importance: 7,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Hoden",    Length: "1485",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/ep0xoS",    Error: 0}, {        Day: 17,    Importance: 8,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Prostata, Bläschendrüse und Cowper-Drüse",    Length: "1193",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/dp0ooS",    Error: 0}, {        Day: 17,    Importance: 9,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Nebenhoden, Samenleiter und Samenstrang",    Length: "1064",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/Wp0PoS",    Error: 0}, {        Day: 17,    Importance: 10,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Penis, Erektion und Ejakulation",    Length: "752",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/Vp0GoS",    Error: 0}, {        Day: 17,    Importance: 11,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Geschlechtsentwicklung",    Length: "3814",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/Qo0ubS",    Error: 0}, {        Day: 17,    Importance: 12,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Sexualität und Sexualmedizin",    Length: "328",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/d60oPS",    Error: 0}, {        Day: 17,    Importance: 13,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Grundlagen der Embryologie",    Length: "2822",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/vp0ArS",    Error: 0}, {        Day: 17,    Importance: 14,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Von der Befruchtung zur Implantation",    Length: "1123",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/YAanRM/article/Dp017S",    Error: 0}, {        Day: 18,    Importance: 1,    Subject: "Entstehung neuen Lebens",    Chapter: "Embryonalentwicklung",    Length: "1658",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/bAaHRM/article/wp0h7S",    Error: 0}, {        Day: 18,    Importance: 2,    Subject: "Entstehung neuen Lebens",    Chapter: "Plazenta, Nabelschnur und Amnion",    Length: "1360",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/bAaHRM/article/Cp0q7S",    Error: 0}, {        Day: 18,    Importance: 3,    Subject: "Entstehung neuen Lebens",    Chapter: "Physiologische Aspekte prä- und postnatal",    Length: "1765",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/bAaHRM/article/9p0N7S",    Error: 0}, {        Day: 18,    Importance: 4,    Subject: "Entstehung neuen Lebens",    Chapter: "Humangenetik (Vorklinik)",    Length: "2477",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/bAaHRM/article/DK01iS",    Error: 0}, {        Day: 19,    Importance: 1,    Subject: "Obere Extremität",    Chapter: "Schulter und Schultergürtel",    Length: "2201",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/XAa9RM/article/Ro0lbS",    Error: 0}, {        Day: 19,    Importance: 2,    Subject: "Obere Extremität",    Chapter: "Oberarm und Ellenbogen",    Length: "751",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/XAa9RM/article/So0yYS",    Error: 0}, {        Day: 19,    Importance: 3,    Subject: "Obere Extremität",    Chapter: "Unterarm",    Length: "1287",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/XAa9RM/article/ho0cbS",    Error: 0}, {        Day: 19,    Importance: 4,    Subject: "Obere Extremität",    Chapter: "Hand",    Length: "1195",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/XAa9RM/article/io0JbS",    Error: 0}, {        Day: 19,    Importance: 5,    Subject: "Obere Extremität",    Chapter: "Leitungsbahnen der oberen Extremität",    Length: "2153",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/XAa9RM/article/Vo0GaS",    Error: 0}, {        Day: 20,    Importance: 1,    Subject: "Untere Extremität",    Chapter: "Becken und Hüfte",    Length: "2898",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/cAaaiM/article/f60k4S",    Error: 0}, {        Day: 20,    Importance: 2,    Subject: "Untere Extremität",    Chapter: "Oberschenkel und Knie",    Length: "1754",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/cAaaiM/article/yK0dQS",    Error: 0}, {        Day: 20,    Importance: 3,    Subject: "Untere Extremität",    Chapter: "Unterschenkel",    Length: "1873",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/cAaaiM/article/Ao0ReS",    Error: 0}, {        Day: 20,    Importance: 4,    Subject: "Untere Extremität",    Chapter: "Sprunggelenke und Fuß",    Length: "2913",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/cAaaiM/article/8o0OdS",    Error: 0}, {        Day: 20,    Importance: 5,    Subject: "Untere Extremität",    Chapter: "Leitungsbahnen der unteren Extremität",    Length: "4522",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/cAaaiM/article/uo0pdS",    Error: 0}, {        Day: 21,    Importance: 1,    Subject: "Rumpf",    Chapter: "Brustwand",    Length: "1325",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/1Aa2iM/article/tp0XrS",    Error: 0}, {        Day: 21,    Importance: 2,    Subject: "Rumpf",    Chapter: "Bauchwand",    Length: "779",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/1Aa2iM/article/cp0aoS",    Error: 0}, {        Day: 21,    Importance: 3,    Subject: "Rumpf",    Chapter: "Nacken und Rücken",    Length: "2324",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/1Aa2iM/article/up0prS",    Error: 0}, {        Day: 21,    Importance: 4,    Subject: "Rumpf",    Chapter: "Wirbelsäule",    Length: "1426",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/1Aa2iM/article/R60lkS",    Error: 0}, {        Day: 21,    Importance: 5,    Subject: "Rumpf",    Chapter: "Brusthöhle",    Length: "2870",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/1Aa2iM/article/e60xPS",    Error: 0}, {        Day: 21,    Importance: 6,    Subject: "Rumpf",    Chapter: "Beckenhöhle",    Length: "2508",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/1Aa2iM/article/T6064S",    Error: 0}, {        Day: 21,    Importance: 7,    Subject: "Rumpf",    Chapter: "Leitungsbahnen des Bauchraums",    Length: "2981",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/1Aa2iM/article/Ap0RHS",    Error: 0}, {        Day: 22,    Importance: 1,    Subject: "Kopf und Hals",    Chapter: "Übersicht der Kopf- und Halsregion",    Length: "3983",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/WAaPiM/article/360SkS",    Error: 0}, {        Day: 22,    Importance: 2,    Subject: "Kopf und Hals",    Chapter: "Muskulatur von Kopf und Hals",    Length: "1491",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/WAaPiM/article/1p02oS",    Error: 0}, {        Day: 22,    Importance: 3,    Subject: "Kopf und Hals",    Chapter: "Kehlkopf, Sprechen und Sprache",    Length: "1689",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/WAaPiM/article/mK0VSS",    Error: 0}, {        Day: 22,    Importance: 4,    Subject: "Kopf und Hals",    Chapter: "Nase und Nasennebenhöhlen",    Length: "1462",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/WAaPiM/article/SK0yfS",    Error: 0}, {        Day: 22,    Importance: 5,    Subject: "Kopf und Hals",    Chapter: "Schädel",    Length: "2287",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/WAaPiM/article/aK0QUS",    Error: 0}, {        Day: 23,    Importance: 1,    Subject: "Nervensystem",    Chapter: "Hirnnerven",    Length: "6805",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/dAaoiM/article/7o04WS",    Error: 0}, {        Day: 23,    Importance: 2,    Subject: "Nervensystem",    Chapter: "Einführung in die Neuroanatomie",    Length: "1590",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/dAaoiM/article/-p0DHS",    Error: 0}, {        Day: 23,    Importance: 3,    Subject: "Nervensystem",    Chapter: "Nervengewebe, Synapsen und Transmitter",    Length: "2609",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/dAaoiM/article/tK0XRS",    Error: 0}, {        Day: 23,    Importance: 4,    Subject: "Nervensystem",    Chapter: "Vegetatives Nervensystem",    Length: "1356",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/dAaoiM/article/oo001S",    Error: 0}, {        Day: 23,    Importance: 5,    Subject: "Nervensystem",    Chapter: "Rückenmark",    Length: "1540",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/dAaoiM/article/ro0fWS",    Error: 0}, {        Day: 23,    Importance: 6,    Subject: "Nervensystem",    Chapter: "Spinale Leitungsbahnen und Reflexe",    Length: "2821",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/dAaoiM/article/zp0rHS",    Error: 0}, {        Day: 24,    Importance: 1,    Subject: "Nervensystem",    Chapter: "Hirnstamm",    Length: "2857",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/VAaGiM/article/yo0deS",    Error: 0}, {        Day: 24,    Importance: 2,    Subject: "Nervensystem",    Chapter: "Kleinhirn",    Length: "1953",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/VAaGiM/article/YK0nUS",    Error: 0}, {        Day: 24,    Importance: 3,    Subject: "Nervensystem",    Chapter: "Zwischenhirn",    Length: "1412",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/VAaGiM/article/zK0rQS",    Error: 0}, {        Day: 24,    Importance: 4,    Subject: "Nervensystem",    Chapter: "Großhirn",    Length: "2326",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/VAaGiM/article/060ejS",    Error: 0}, {        Day: 24,    Importance: 5,    Subject: "Nervensystem",    Chapter: "Gefäßversorgung des Gehirns",    Length: "2886",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/VAaGiM/article/Q60ukS",    Error: 0}, {        Day: 24,    Importance: 6,    Subject: "Nervensystem",    Chapter: "Meningen, Liquorräume und Blut-Hirn-Schranke",    Length: "839",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/VAaGiM/article/ZJ0ZsS",    Error: 0}, {        Day: 24,    Importance: 7,    Subject: "Nervensystem",    Chapter: "Neurophysiologische Untersuchungen und Schlaf",    Length: "1833",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/VAaGiM/article/0J0esS",    Error: 0}, {        Day: 24,    Importance: 8,    Subject: "Nervensystem",    Chapter: "Limbisches System und Gedächtnis",    Length: "573",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/VAaGiM/article/U60b4S",    Error: 0}, {        Day: 25,    Importance: 1,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Grundlagen der Sensorik",    Length: "468",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/eAaxiM/article/sK0t3S",    Error: 0}, {        Day: 25,    Importance: 2,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Haut und Hautanhangsgebilde",    Length: "2635",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/eAaxiM/article/so0tWS",    Error: 0}, {        Day: 25,    Importance: 3,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Taktiles System",    Length: "2421",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/eAaxiM/article/0K0eUS",    Error: 0}, {        Day: 25,    Importance: 4,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Nozizeptives System",    Length: "2672",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/eAaxiM/article/Do01VS",    Error: 0}, {        Day: 25,    Importance: 5,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Olfaktorisches und gustatorisches System",    Length: "1943",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/eAaxiM/article/xo0EVS",    Error: 0}, {        Day: 26,    Importance: 1,    Subject: "Sinnesorgane",    Chapter: "Auge und Orbita",    Length: "1979",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/UAabQM/article/Ho0KWS",    Error: 0}, {        Day: 26,    Importance: 2,    Subject: "Sinnesorgane",    Chapter: "Optik und optische Geräte",    Length: "539",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/UAabQM/article/P60WOS",    Error: 0}, {        Day: 26,    Importance: 3,    Subject: "Sinnesorgane",    Chapter: "Visuelles System",    Length: "791",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/4R03Mf/UAabQM/article/mp0VJS",    Error: 0}, {        Day: 26,    Importance: 4,    Subject: "Sinnesorgane",    Chapter: "Ohr",    Length: "2744",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/UAabQM/article/Eo08dS",    Error: 0}, {        Day: 26,    Importance: 5,    Subject: "Sinnesorgane",    Chapter: "Akustik",    Length: "629",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/UAabQM/article/j60_kS",    Error: 0}, {        Day: 26,    Importance: 6,    Subject: "Sinnesorgane",    Chapter: "Auditives System",    Length: "1998",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/UAabQM/article/Up0bKS",    Error: 0}, {        Day: 26,    Importance: 7,    Subject: "Sinnesorgane",    Chapter: "Vestibuläres System",    Length: "1899",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/UAabQM/article/Go0BWS",    Error: 0}, {        Day: 27,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Medizinische Statistik und Testtheorie",    Length: "3823",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/4R03Mf/2AaTQM/article/Ip0YIS",    Error: 0}, {        Day: 27,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Grundlagen wissenschaftlicher Studien",    Length: "1909",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/2AaTQM/article/rp0fIS",    Error: 0}, {        Day: 27,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Gesundheit und Krankheit",    Length: "414",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/2AaTQM/article/_o05eS",    Error: 0}, {        Day: 27,    Importance: 4,    Subject: "Psychologie und Soziologie",    Chapter: "Patientenversorgung und Gesundheitssystem",    Length: "2511",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/2AaTQM/article/-K0DQS",    Error: 0}, {        Day: 28,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Lernen, Kognition und Entwicklung",    Length: "3859",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/4R03Mf/fAakQM/article/7p04IS",    Error: 0}, {        Day: 28,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Emotion und Motivation",    Length: "1150",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/fAakQM/article/Hp0KIS",    Error: 0}, {        Day: 28,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Persönlichkeit und Verhaltensstile",    Length: "915",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/fAakQM/article/sp0tIS",    Error: 0}, {        Day: 29,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Grundlagen der Demografie und Soziologie",    Length: "1094",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/4R03Mf/TAa6QM/article/Gp0BIS",    Error: 0}, {        Day: 29,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Beziehung zwischen Ärzt:innen und Patient:innen",    Length: "3503",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/4R03Mf/TAa6QM/article/OK0IgS",    Error: 0}, {        Day: 29,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Untersuchung und Gespräch",    Length: "536",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/TAa6QM/article/3K0STS",    Error: 0}, {        Day: 29,    Importance: 4,    Subject: "Psychologie und Soziologie",    Chapter: "Ärztliche Urteilsbildung und Entscheidung",    Length: "821",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/TAa6QM/article/iK0JTS",    Error: 0}, {        Day: 30,    Importance: 1,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Prävention und Gesundheitsförderung",    Length: "1538",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/4R03Mf/gAaFQM/article/HK0K3S",    Error: 0}, {        Day: 30,    Importance: 2,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Stressmodelle",    Length: "908",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/gAaFQM/article/Ep08rS",    Error: 0}, {        Day: 30,    Importance: 3,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Verhaltens- und psychodynamische Modelle",    Length: "979",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/gAaFQM/article/UK0bfS",    Error: 0}, {        Day: 30,    Importance: 4,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Psychotherapeutische Verfahren (Vorklinik)",    Length: "340",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/4R03Mf/gAaFQM/article/BK0ziS",    Error: 0}, {        Day: 30,    Importance: 5,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Umgang mit dem Sterben",    Length: "263",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/4R03Mf/gAaFQM/article/W60PPS",    Error: 0}, {        Day: 30,    Importance: 6,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Erstes Staatsexamen (schriftlicher Teil)",    Length: "232",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/4R03Mf/gAaFQM/article/x60EMS",    Error: 0}, {        Day: 30,    Importance: 7,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Erstes Staatsexamen (mündlicher Teil)",    Length: "385",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/4R03Mf/gAaFQM/article/xI0EUh",    Error: 0
    }],Ro = {
        lastUpdated: M0,    heading: Y0,    numberOfDays: K0,    pageTickValues: A0,    yFragenDomain: P0,    fragenzahl: v0,    dayUrls: z0,    data: Z0
    },T0 = "04.06.2025",w0 = "50 Tage Lernplan M1 - H2025",N0 = 50,_0 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],H0 = 160,G0 = [156, 159, 174, 101, 116, 140, 77, 75, 55, 43, 35, 56, 104, 65, 64, 81, 83, 90, 122, 66, 62, 51, 63, 49, 50, 46, 73, 80, 54, 68, 51, 57, 56, 56, 66, 60, 66, 104, 57, 135, 137, 78, 101, 117, 155, 158, 159, 156, 156, 159],O0 = ["https://next.amboss.com/de/courses/PR0WMf/0yaedM", "https://next.amboss.com/de/courses/PR0WMf/ayaQdM", "https://next.amboss.com/de/courses/PR0WMf/YyandM", "https://next.amboss.com/de/courses/PR0WMf/byaHdM", "https://next.amboss.com/de/courses/PR0WMf/Xya9dM", "https://next.amboss.com/de/courses/PR0WMf/cyaaVM", "https://next.amboss.com/de/courses/PR0WMf/1ya2VM", "https://next.amboss.com/de/courses/PR0WMf/WyaPVM", "https://next.amboss.com/de/courses/PR0WMf/dyaoVM", "https://next.amboss.com/de/courses/PR0WMf/VyaGVM", "https://next.amboss.com/de/courses/PR0WMf/eyaxVM", "https://next.amboss.com/de/courses/PR0WMf/UyabeM", "https://next.amboss.com/de/courses/PR0WMf/2yaTeM", "https://next.amboss.com/de/courses/PR0WMf/fyakeM", "https://next.amboss.com/de/courses/PR0WMf/Tya6eM", "https://next.amboss.com/de/courses/PR0WMf/gyaFeM", "https://next.amboss.com/de/courses/PR0WMf/SyayeM", "https://next.amboss.com/de/courses/PR0WMf/hyacUM", "https://next.amboss.com/de/courses/PR0WMf/3yaSUM", "https://next.amboss.com/de/courses/PR0WMf/RyalUM", "https://next.amboss.com/de/courses/PR0WMf/iyaJUM", "https://next.amboss.com/de/courses/PR0WMf/QyauUM", "https://next.amboss.com/de/courses/PR0WMf/jya_UM", "https://next.amboss.com/de/courses/PR0WMf/PyaW2M", "https://next.amboss.com/de/courses/PR0WMf/4ya32M", "https://next.amboss.com/de/courses/PR0WMf/kyam2M", "https://next.amboss.com/de/courses/PR0WMf/OyaI2M", "https://next.amboss.com/de/courses/PR0WMf/lyav2M", "https://next.amboss.com/de/courses/PR0WMf/Nya-2M", "https://next.amboss.com/de/courses/PR0WMf/myaVfM", "https://next.amboss.com/de/courses/PR0WMf/5yaifM", "https://next.amboss.com/de/courses/PR0WMf/MyaMfM", "https://next.amboss.com/de/courses/PR0WMf/nya7fM", "https://next.amboss.com/de/courses/PR0WMf/LyawfM", "https://next.amboss.com/de/courses/PR0WMf/oya0TM", "https://next.amboss.com/de/courses/PR0WMf/KyaUTM", "https://next.amboss.com/de/courses/PR0WMf/6yajTM", "https://next.amboss.com/de/courses/PR0WMf/pyaLTM", "https://next.amboss.com/de/courses/PR0WMf/JyasTM", "https://next.amboss.com/de/courses/PR0WMf/qyaCTM", "https://next.amboss.com/de/courses/PR0WMf/IyaYgM", "https://next.amboss.com/de/courses/PR0WMf/ryafgM", "https://next.amboss.com/de/courses/PR0WMf/7ya4gM", "https://next.amboss.com/de/courses/PR0WMf/HyaKgM", "https://next.amboss.com/de/courses/PR0WMf/syatgM", "https://next.amboss.com/de/courses/PR0WMf/GyaBgM", "https://next.amboss.com/de/courses/PR0WMf/tyaXSM", "https://next.amboss.com/de/courses/PR0WMf/FyagSM", "https://next.amboss.com/de/courses/PR0WMf/8yaOSM", "https://next.amboss.com/de/courses/PR0WMf/uyapSM"],W0 = [
        {
        Day: 1,    Importance: 1,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Handbuch - Vorbereitung auf das Erste Staatsexamen / Physikum",    Length: "344",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/0yaedM/article/YJ0nsS",    Error: 0}, {        Day: 1,    Importance: 2,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Kreuztipps zum Ersten Staatsexamen",    Length: "401",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/0yaedM/article/aJ0QsS",    Error: 0}, {        Day: 1,    Importance: 3,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Die Zelle",    Length: "1894",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/PR0WMf/0yaedM/article/0o0e0S",    Error: 0}, {        Day: 1,    Importance: 4,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Stofftransport",    Length: "1405",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/0yaedM/article/xK0EiS",    Error: 0}, {        Day: 1,    Importance: 5,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Signaltransduktion",    Length: "1293",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/0yaedM/article/Qp0u6S",    Error: 0}, {        Day: 1,    Importance: 6,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Ruhe- und Aktionspotenzial",    Length: "2163",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/0yaedM/article/jp0_6S",    Error: 0}, {        Day: 2,    Importance: 1,    Subject: "Grundlagen der Physiologie und Chemie",    Chapter: "Leistungsphysiologie und Altern",    Length: "2417",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/ayaQdM/article/h60ckS",    Error: 0}, {        Day: 2,    Importance: 2,    Subject: "Grundlagen der Physiologie und Chemie",    Chapter: "Aufbau der Materie",    Length: "5925",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/ayaQdM/article/hK0cTS",    Error: 0}, {        Day: 3,    Importance: 1,    Subject: "Grundlagen der Chemie und Physik",    Chapter: "Ionisierende Strahlung",    Length: "1307",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/YyandM/article/k60mOS",    Error: 0}, {        Day: 3,    Importance: 2,    Subject: "Grundlagen der Chemie und Physik",    Chapter: "Thermodynamik",    Length: "2160",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/YyandM/article/G60BmS",    Error: 0}, {        Day: 3,    Importance: 3,    Subject: "Grundlagen der Chemie und Physik",    Chapter: "Chemische Reaktionen",    Length: "3025",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/YyandM/article/PK0WgS",    Error: 0}, {        Day: 4,    Importance: 1,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Redoxchemie",    Length: "1723",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/byaHdM/article/hp0c6S",    Error: 0}, {        Day: 4,    Importance: 2,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Grundlagen der organischen Chemie",    Length: "3660",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/PR0WMf/byaHdM/article/4o03XS",    Error: 0}, {        Day: 4,    Importance: 3,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Enzyme und Biokatalyse",    Length: "2618",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/byaHdM/article/a60QjS",    Error: 0}, {        Day: 4,    Importance: 4,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Biochemische Labormethoden",    Length: "1396",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/byaHdM/article/Y60njS",    Error: 0}, {        Day: 5,    Importance: 1,    Subject: "Grundlagen der Zellbiologie",    Chapter: "Zellzyklus und Tumorentstehung",    Length: "636",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/Xya9dM/article/2p0TKS",    Error: 0}, {        Day: 5,    Importance: 2,    Subject: "Grundlagen der Zellbiologie",    Chapter: "Aufbau von DNA und RNA",    Length: "1890",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/Xya9dM/article/RK0lTS",    Error: 0}, {        Day: 5,    Importance: 3,    Subject: "Grundlagen der Zellbiologie",    Chapter: "Replikation und Reparaturmechanismen der DNA",    Length: "1858",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/Xya9dM/article/Yp0nLS",    Error: 0}, {        Day: 5,    Importance: 4,    Subject: "Grundlagen der Zellbiologie",    Chapter: "Purine und Pyrimidine",    Length: "2543",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/Xya9dM/article/CK0qiS",    Error: 0}, {        Day: 6,    Importance: 1,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Genexpression und Transkription",    Length: "1964",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/cyaaVM/article/0p0eLS",    Error: 0}, {        Day: 6,    Importance: 2,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Translation und Proteinbiosynthese",    Length: "1226",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/cyaaVM/article/Zp0ZLS",    Error: 0}, {        Day: 6,    Importance: 3,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Grundlagen der Mikrobiologie und Virologie",    Length: "1863",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/cyaaVM/article/b60HjS",    Error: 0}, {        Day: 6,    Importance: 4,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Bakterien",    Length: "253",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/cyaaVM/article/lp0vpS",    Error: 0}, {        Day: 7,    Importance: 1,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Allgemeine Anatomie",    Length: "1418",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/1ya2VM/article/s60tmS",    Error: 0}, {        Day: 7,    Importance: 2,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Allgemeine Histologie",    Length: "1899",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/1ya2VM/article/7604mS",    Error: 0}, {        Day: 7,    Importance: 3,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Bindegewebe",    Length: "1899",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/1ya2VM/article/Bo0zVS",    Error: 0}, {        Day: 7,    Importance: 4,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Fettgewebe",    Length: "379",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/1ya2VM/article/6p0jqS",    Error: 0}, {        Day: 8,    Importance: 1,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Knorpelgewebe",    Length: "372",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/WyaPVM/article/q60CNS",    Error: 0}, {        Day: 8,    Importance: 2,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Knochengewebe",    Length: "362",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/WyaPVM/article/2o0TYS",    Error: 0}, {        Day: 8,    Importance: 3,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Muskelgewebe",    Length: "536",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/WyaPVM/article/pp0LqS",    Error: 0}, {        Day: 8,    Importance: 4,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Glatte Muskulatur",    Length: "445",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/WyaPVM/article/8K0ORS",    Error: 0}, {        Day: 8,    Importance: 5,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Skelettmuskulatur",    Length: "2327",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/WyaPVM/article/Jp0sqS",    Error: 0}, {        Day: 9,    Importance: 1,    Subject: "Verdauungssystem",    Chapter: "Bauchhöhle",    Length: "1536",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/dyaoVM/article/EK08RS",    Error: 0}, {        Day: 9,    Importance: 2,    Subject: "Verdauungssystem",    Chapter: "Übersicht des Verdauungssystems",    Length: "2678",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/dyaoVM/article/qK0ChS",    Error: 0}, {        Day: 9,    Importance: 3,    Subject: "Verdauungssystem",    Chapter: "Mundhöhle",    Length: "953",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/dyaoVM/article/KK0UhS",    Error: 0}, {        Day: 9,    Importance: 4,    Subject: "Verdauungssystem",    Chapter: "Zähne",    Length: "1122",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/dyaoVM/article/np07JS",    Error: 0}, {        Day: 9,    Importance: 5,    Subject: "Verdauungssystem",    Chapter: "Zunge",    Length: "641",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/dyaoVM/article/Lp0wJS",    Error: 0}, {        Day: 9,    Importance: 6,    Subject: "Verdauungssystem",    Chapter: "Speicheldrüsen",    Length: "1470",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/dyaoVM/article/op00qS",    Error: 0}, {        Day: 10,    Importance: 1,    Subject: "Verdauungssystem",    Chapter: "Pharynx",    Length: "831",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/VyaGVM/article/Kp0UqS",    Error: 0}, {        Day: 10,    Importance: 2,    Subject: "Verdauungssystem",    Chapter: "Ösophagus",    Length: "911",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/VyaGVM/article/6K0jhS",    Error: 0}, {        Day: 10,    Importance: 3,    Subject: "Verdauungssystem",    Chapter: "Magen",    Length: "2130",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/VyaGVM/article/XK09US",    Error: 0}, {        Day: 10,    Importance: 4,    Subject: "Verdauungssystem",    Chapter: "Dünndarm",    Length: "1928",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/VyaGVM/article/pK0LhS",    Error: 0}, {        Day: 10,    Importance: 5,    Subject: "Verdauungssystem",    Chapter: "Leber",    Length: "2615",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/VyaGVM/article/F60g5S",    Error: 0}, {        Day: 11,    Importance: 1,    Subject: "Verdauungssystem",    Chapter: "Gallenblase und Galle",    Length: "229",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/eyaxVM/article/t60X5S",    Error: 0}, {        Day: 11,    Importance: 2,    Subject: "Verdauungssystem",    Chapter: "Pankreas",    Length: "1992",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/eyaxVM/article/2K0TfS",    Error: 0}, {        Day: 11,    Importance: 3,    Subject: "Verdauungssystem",    Chapter: "Zäkum und Kolon",    Length: "1411",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/eyaxVM/article/rK0f3S",    Error: 0}, {        Day: 11,    Importance: 4,    Subject: "Verdauungssystem",    Chapter: "Rektum und Analkanal",    Length: "1604",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/eyaxVM/article/8p0OrS",    Error: 0}, {        Day: 11,    Importance: 5,    Subject: "Verdauungssystem",    Chapter: "Übersicht Ernährung (Vorklinik)",    Length: "895",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/eyaxVM/article/X609jS",    Error: 0}, {        Day: 12,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Kohlenhydrate",    Length: "2093",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/UyabeM/article/w60hMS",    Error: 0}, {        Day: 12,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Abbau und Synthese der Glucose",    Length: "2189",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/UyabeM/article/r60fmS",    Error: 0}, {        Day: 12,    Importance: 3,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Glykogenstoffwechsel",    Length: "184",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/UyabeM/article/I60YmS",    Error: 0}, {        Day: 13,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Aminosäuren und Proteine",    Length: "3310",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/2yaTeM/article/Jo0s1S",    Error: 0}, {        Day: 13,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Aminosäurestoffwechsel",    Length: "2058",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/2yaTeM/article/Mp0MJS",    Error: 0}, {        Day: 14,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Lipide",    Length: "1969",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/fyakeM/article/D601MS",    Error: 0}, {        Day: 14,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Fettsäuren und Triacylglycerine",    Length: "2662",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/fyakeM/article/B60zMS",    Error: 0}, {        Day: 14,    Importance: 3,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Cholesterin",    Length: "640",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/fyakeM/article/y60dnS",    Error: 0}, {        Day: 15,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Citratzyklus",    Length: "736",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/Tya6eM/article/3p0S6S",    Error: 0}, {        Day: 15,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Atmungskette",    Length: "2092",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/Tya6eM/article/Rp0l6S",    Error: 0}, {        Day: 15,    Importance: 3,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Energie- und Wärmehaushalt",    Length: "2525",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/Tya6eM/article/wK0hiS",    Error: 0}, {        Day: 15,    Importance: 4,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Vitamine (Vorklinik)",    Length: "501",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/Tya6eM/article/z60rnS",    Error: 0}, {        Day: 15,    Importance: 5,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Mineralstoffe",    Length: "352",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/Tya6eM/article/-60DnS",    Error: 0}, {        Day: 16,    Importance: 1,    Subject: "Grundlagen der Physik",    Chapter: "Grundlagen des Rechnens",    Length: "733",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/gyaFeM/article/NK0-gS",    Error: 0}, {        Day: 16,    Importance: 2,    Subject: "Grundlagen der Physik",    Chapter: "Grundlagen der Mechanik",    Length: "1436",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/gyaFeM/article/lK0vgS",    Error: 0}, {        Day: 16,    Importance: 3,    Subject: "Grundlagen der Physik",    Chapter: "Elektrizitätslehre",    Length: "1520",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/gyaFeM/article/4603OS",    Error: 0}, {        Day: 17,    Importance: 1,    Subject: "Herz-Kreislauf",    Chapter: "Grundlagen des Kreislaufes",    Length: "1423",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/SyayeM/article/no07cS",    Error: 0}, {        Day: 17,    Importance: 2,    Subject: "Herz-Kreislauf",    Chapter: "Aufbau des Herzens",    Length: "1821",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/SyayeM/article/CL0q-g",    Error: 0}, {        Day: 17,    Importance: 3,    Subject: "Herz-Kreislauf",    Chapter: "Herzerregung",    Length: "4698",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/SyayeM/article/yp0dHS",    Error: 0}, {        Day: 17,    Importance: 4,    Subject: "Herz-Kreislauf",    Chapter: "Herzmechanik",    Length: "1489",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/SyayeM/article/xL0E-g",    Error: 0}, {        Day: 18,    Importance: 1,    Subject: "Herz-Kreislauf und Atmung",    Chapter: "Aufbau und Funktion der Blutgefäße",    Length: "2002",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/hyacUM/article/go0FYS",    Error: 0}, {        Day: 18,    Importance: 2,    Subject: "Herz-Kreislauf und Atmung",    Chapter: "Kreislaufregulation",    Length: "639",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/hyacUM/article/po0L1S",    Error: 0}, {        Day: 18,    Importance: 3,    Subject: "Herz-Kreislauf und Atmung",    Chapter: "Atemwege und Lunge",    Length: "4451",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/hyacUM/article/6o0j1S",    Error: 0}, {        Day: 18,    Importance: 4,    Subject: "Herz-Kreislauf und Atmung",    Chapter: "Atemmechanik",    Length: "1509",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/hyacUM/article/A60RnS",    Error: 0}, {        Day: 19,    Importance: 1,    Subject: "Blut",    Chapter: "Blut und Blutzellen",    Length: "3027",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/3yaSUM/article/LK0wSS",    Error: 0}, {        Day: 19,    Importance: 2,    Subject: "Blut",    Chapter: "Knochenmark und Blutbildung",    Length: "830",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/3yaSUM/article/qp0CqS",    Error: 0}, {        Day: 19,    Importance: 3,    Subject: "Blut",    Chapter: "Erythrozyten",    Length: "1660",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/3yaSUM/article/960NMS",    Error: 0}, {        Day: 19,    Importance: 4,    Subject: "Blut",    Chapter: "Hämoglobin",    Length: "659",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/3yaSUM/article/C60qMS",    Error: 0}, {        Day: 19,    Importance: 5,    Subject: "Blut",    Chapter: "Gastransport im Blut",    Length: "1882",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/3yaSUM/article/Np0-pS",    Error: 0}, {        Day: 19,    Importance: 6,    Subject: "Blut",    Chapter: "Blutstillung und Blutgerinnung",    Length: "1553",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/3yaSUM/article/_K05QS",    Error: 0}, {        Day: 20,    Importance: 1,    Subject: "Immunsystem",    Chapter: "Einführung in die Immunologie",    Length: "762",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/RyalUM/article/K60UNS",    Error: 0}, {        Day: 20,    Importance: 2,    Subject: "Immunsystem",    Chapter: "Unspezifisches Immunsystem",    Length: "1282",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/RyalUM/article/660jNS",    Error: 0}, {        Day: 20,    Importance: 3,    Subject: "Immunsystem",    Chapter: "Spezifisches Immunsystem",    Length: "1390",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/RyalUM/article/p60LNS",    Error: 0}, {        Day: 21,    Importance: 1,    Subject: "Immun- und lymphatisches System",    Chapter: "Gewebshormone",    Length: "3800",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/iyaJUM/article/V60GPS",    Error: 0}, {        Day: 21,    Importance: 2,    Subject: "Immun- und lymphatisches System",    Chapter: "Lymphatisches System",    Length: "1332",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/iyaJUM/article/gp0FKS",    Error: 0}, {        Day: 21,    Importance: 3,    Subject: "Immun- und lymphatisches System",    Chapter: "Lymphknoten",    Length: "355",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/iyaJUM/article/Tp06KS",    Error: 0}, {        Day: 21,    Importance: 4,    Subject: "Immun- und lymphatisches System",    Chapter: "Milz",    Length: "821",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/iyaJUM/article/fp0kKS",    Error: 0}, {        Day: 21,    Importance: 5,    Subject: "Immun- und lymphatisches System",    Chapter: "Mukosa-assoziiertes lymphatisches Gewebe",    Length: "835",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/iyaJUM/article/Sp0yKS",    Error: 0}, {        Day: 22,    Importance: 1,    Subject: "Niere",    Chapter: "Niere",    Length: "2305",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/QyauUM/article/jo0_bS",    Error: 0}, {        Day: 22,    Importance: 2,    Subject: "Niere",    Chapter: "Nierendurchblutung und glomeruläre Filtration",    Length: "1720",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/QyauUM/article/bJ0HsS",    Error: 0}, {        Day: 22,    Importance: 3,    Subject: "Niere",    Chapter: "Tubuläre Transportprozesse",    Length: "300",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/QyauUM/article/_605nS",    Error: 0}, {        Day: 23,    Importance: 1,    Subject: "Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Wasser- und Elektrolythaushalt",    Length: "1473",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/jya_UM/article/lo0vXS",    Error: 0}, {        Day: 23,    Importance: 2,    Subject: "Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Säure-Basen-Haushalt",    Length: "3027",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/jya_UM/article/Io0YWS",    Error: 0}, {        Day: 23,    Importance: 3,    Subject: "Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnleiter",    Length: "653",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/jya_UM/article/Xp09LS",    Error: 0}, {        Day: 23,    Importance: 4,    Subject: "Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnblase",    Length: "1131",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/jya_UM/article/bp0HLS",    Error: 0}, {        Day: 23,    Importance: 5,    Subject: "Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnröhre",    Length: "625",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/jya_UM/article/ap0QLS",    Error: 0}, {        Day: 24,    Importance: 1,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Allgemeine Hormoneigenschaften",    Length: "257",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/PyaW2M/article/IK0Y3S",    Error: 0}, {        Day: 24,    Importance: 2,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Hypophyse",    Length: "2095",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/PyaW2M/article/jK0_TS",    Error: 0}, {        Day: 24,    Importance: 3,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Schilddrüse",    Length: "2228",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/PyaW2M/article/bK0HUS",    Error: 0}, {        Day: 24,    Importance: 4,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Nebenschilddrüsen",    Length: "1077",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/PyaW2M/article/Op0IpS",    Error: 0}, {        Day: 25,    Importance: 1,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Nebenniere",    Length: "3694",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/4ya32M/article/S60y4S",    Error: 0}, {        Day: 25,    Importance: 2,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Sexualhormone",    Length: "3267",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/4ya32M/article/zo0reS",    Error: 0}, {        Day: 25,    Importance: 3,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Pankreashormone",    Length: "1322",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/4ya32M/article/kp0mpS",    Error: 0}, {        Day: 26,    Importance: 1,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Ovar",    Length: "1465",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/m60VlS",    Error: 0}, {        Day: 26,    Importance: 2,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Tuba uterina",    Length: "519",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/M60MlS",    Error: 0}, {        Day: 26,    Importance: 3,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Uterus",    Length: "1774",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/560ilS",    Error: 0}, {        Day: 26,    Importance: 4,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Vagina und Vulva",    Length: "1237",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/n607lS",    Error: 0}, {        Day: 26,    Importance: 5,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Mamma",    Length: "681",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/L60wlS",    Error: 0}, {        Day: 26,    Importance: 6,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Hoden",    Length: "1485",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/ep0xoS",    Error: 0}, {        Day: 26,    Importance: 7,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Prostata, Bläschendrüse und Cowper-Drüse",    Length: "1193",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/dp0ooS",    Error: 0}, {        Day: 26,    Importance: 8,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Nebenhoden, Samenleiter und Samenstrang",    Length: "1064",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/Wp0PoS",    Error: 0}, {        Day: 26,    Importance: 9,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Penis, Erektion und Ejakulation",    Length: "752",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/Vp0GoS",    Error: 0}, {        Day: 26,    Importance: 10,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Geschlechtsentwicklung",    Length: "3814",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/Qo0ubS",    Error: 0}, {        Day: 26,    Importance: 11,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Sexualität und Sexualmedizin",    Length: "328",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/kyam2M/article/d60oPS",    Error: 0}, {        Day: 27,    Importance: 1,    Subject: "Entstehung neuen Lebens",    Chapter: "Grundlagen der Embryologie",    Length: "2822",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/OyaI2M/article/vp0ArS",    Error: 0}, {        Day: 27,    Importance: 2,    Subject: "Entstehung neuen Lebens",    Chapter: "Von der Befruchtung zur Implantation",    Length: "1123",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/OyaI2M/article/Dp017S",    Error: 0}, {        Day: 27,    Importance: 3,    Subject: "Entstehung neuen Lebens",    Chapter: "Embryonalentwicklung",    Length: "1658",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/OyaI2M/article/wp0h7S",    Error: 0}, {        Day: 27,    Importance: 4,    Subject: "Entstehung neuen Lebens",    Chapter: "Plazenta, Nabelschnur und Amnion",    Length: "1360",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/OyaI2M/article/Cp0q7S",    Error: 0}, {        Day: 27,    Importance: 5,    Subject: "Entstehung neuen Lebens",    Chapter: "Physiologische Aspekte prä- und postnatal",    Length: "1765",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/OyaI2M/article/9p0N7S",    Error: 0}, {        Day: 27,    Importance: 6,    Subject: "Entstehung neuen Lebens",    Chapter: "Humangenetik (Vorklinik)",    Length: "2477",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/OyaI2M/article/DK01iS",    Error: 0}, {        Day: 28,    Importance: 1,    Subject: "Obere Extremität",    Chapter: "Schulter und Schultergürtel",    Length: "2201",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/lyav2M/article/Ro0lbS",    Error: 0}, {        Day: 28,    Importance: 2,    Subject: "Obere Extremität",    Chapter: "Oberarm und Ellenbogen",    Length: "751",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/lyav2M/article/So0yYS",    Error: 0}, {        Day: 28,    Importance: 3,    Subject: "Obere Extremität",    Chapter: "Unterarm",    Length: "1287",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/lyav2M/article/ho0cbS",    Error: 0}, {        Day: 28,    Importance: 4,    Subject: "Obere Extremität",    Chapter: "Hand",    Length: "1195",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/lyav2M/article/io0JbS",    Error: 0}, {        Day: 28,    Importance: 5,    Subject: "Obere Extremität",    Chapter: "Leitungsbahnen der oberen Extremität",    Length: "2153",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/lyav2M/article/Vo0GaS",    Error: 0}, {        Day: 29,    Importance: 1,    Subject: "Untere Extremität",    Chapter: "Becken und Hüfte",    Length: "2898",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/Nya-2M/article/f60k4S",    Error: 0}, {        Day: 29,    Importance: 2,    Subject: "Untere Extremität",    Chapter: "Oberschenkel und Knie",    Length: "1754",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/Nya-2M/article/yK0dQS",    Error: 0}, {        Day: 29,    Importance: 3,    Subject: "Untere Extremität",    Chapter: "Unterschenkel",    Length: "1873",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/Nya-2M/article/Ao0ReS",    Error: 0}, {        Day: 29,    Importance: 4,    Subject: "Untere Extremität",    Chapter: "Sprunggelenke und Fuß",    Length: "2913",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/Nya-2M/article/8o0OdS",    Error: 0}, {        Day: 29,    Importance: 5,    Subject: "Untere Extremität",    Chapter: "Leitungsbahnen der unteren Extremität",    Length: "4522",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/Nya-2M/article/uo0pdS",    Error: 0}, {        Day: 30,    Importance: 1,    Subject: "Rumpf",    Chapter: "Brustwand",    Length: "1325",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/myaVfM/article/tp0XrS",    Error: 0}, {        Day: 30,    Importance: 2,    Subject: "Rumpf",    Chapter: "Bauchwand",    Length: "779",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/myaVfM/article/cp0aoS",    Error: 0}, {        Day: 30,    Importance: 3,    Subject: "Rumpf",    Chapter: "Nacken und Rücken",    Length: "2324",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/myaVfM/article/up0prS",    Error: 0}, {        Day: 30,    Importance: 4,    Subject: "Rumpf",    Chapter: "Wirbelsäule",    Length: "1426",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/myaVfM/article/R60lkS",    Error: 0}, {        Day: 30,    Importance: 5,    Subject: "Rumpf",    Chapter: "Brusthöhle",    Length: "2870",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/myaVfM/article/e60xPS",    Error: 0}, {        Day: 30,    Importance: 6,    Subject: "Rumpf",    Chapter: "Beckenhöhle",    Length: "2508",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/myaVfM/article/T6064S",    Error: 0}, {        Day: 30,    Importance: 7,    Subject: "Rumpf",    Chapter: "Leitungsbahnen des Bauchraums",    Length: "2981",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/myaVfM/article/Ap0RHS",    Error: 0}, {        Day: 31,    Importance: 1,    Subject: "Kopf und Hals",    Chapter: "Übersicht der Kopf- und Halsregion",    Length: "3983",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/5yaifM/article/360SkS",    Error: 0}, {        Day: 31,    Importance: 2,    Subject: "Kopf und Hals",    Chapter: "Muskulatur von Kopf und Hals",    Length: "1491",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/5yaifM/article/1p02oS",    Error: 0}, {        Day: 31,    Importance: 3,    Subject: "Kopf und Hals",    Chapter: "Kehlkopf, Sprechen und Sprache",    Length: "1689",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/5yaifM/article/mK0VSS",    Error: 0}, {        Day: 31,    Importance: 4,    Subject: "Kopf und Hals",    Chapter: "Nase und Nasennebenhöhlen",    Length: "1462",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/5yaifM/article/SK0yfS",    Error: 0}, {        Day: 32,    Importance: 1,    Subject: "Schädel und Hirnnerven",    Chapter: "Schädel",    Length: "2287",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/MyaMfM/article/aK0QUS",    Error: 0}, {        Day: 32,    Importance: 2,    Subject: "Schädel und Hirnnerven",    Chapter: "Hirnnerven",    Length: "6805",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/MyaMfM/article/7o04WS",    Error: 0}, {        Day: 33,    Importance: 1,    Subject: "Nervensystem",    Chapter: "Einführung in die Neuroanatomie",    Length: "1590",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/nya7fM/article/-p0DHS",    Error: 0}, {        Day: 33,    Importance: 2,    Subject: "Nervensystem",    Chapter: "Nervengewebe, Synapsen und Transmitter",    Length: "2609",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/nya7fM/article/tK0XRS",    Error: 0}, {        Day: 33,    Importance: 3,    Subject: "Nervensystem",    Chapter: "Vegetatives Nervensystem",    Length: "1356",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/nya7fM/article/oo001S",    Error: 0}, {        Day: 33,    Importance: 4,    Subject: "Nervensystem",    Chapter: "Rückenmark",    Length: "1540",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/nya7fM/article/ro0fWS",    Error: 0}, {        Day: 33,    Importance: 5,    Subject: "Nervensystem",    Chapter: "Spinale Leitungsbahnen und Reflexe",    Length: "2821",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/nya7fM/article/zp0rHS",    Error: 0}, {        Day: 34,    Importance: 1,    Subject: "Nervensystem",    Chapter: "Hirnstamm",    Length: "2857",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/LyawfM/article/yo0deS",    Error: 0}, {        Day: 34,    Importance: 2,    Subject: "Nervensystem",    Chapter: "Kleinhirn",    Length: "1953",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/LyawfM/article/YK0nUS",    Error: 0}, {        Day: 34,    Importance: 3,    Subject: "Nervensystem",    Chapter: "Zwischenhirn",    Length: "1412",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/LyawfM/article/zK0rQS",    Error: 0}, {        Day: 34,    Importance: 4,    Subject: "Nervensystem",    Chapter: "Großhirn",    Length: "2326",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/LyawfM/article/060ejS",    Error: 0}, {        Day: 35,    Importance: 1,    Subject: "Nervensystem",    Chapter: "Gefäßversorgung des Gehirns",    Length: "2886",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/oya0TM/article/Q60ukS",    Error: 0}, {        Day: 35,    Importance: 2,    Subject: "Nervensystem",    Chapter: "Meningen, Liquorräume und Blut-Hirn-Schranke",    Length: "839",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/oya0TM/article/ZJ0ZsS",    Error: 0}, {        Day: 35,    Importance: 3,    Subject: "Nervensystem",    Chapter: "Neurophysiologische Untersuchungen und Schlaf",    Length: "1833",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/oya0TM/article/0J0esS",    Error: 0}, {        Day: 35,    Importance: 4,    Subject: "Nervensystem",    Chapter: "Limbisches System und Gedächtnis",    Length: "573",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/oya0TM/article/U60b4S",    Error: 0}, {        Day: 36,    Importance: 1,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Grundlagen der Sensorik",    Length: "468",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/KyaUTM/article/sK0t3S",    Error: 0}, {        Day: 36,    Importance: 2,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Haut und Hautanhangsgebilde",    Length: "2635",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/KyaUTM/article/so0tWS",    Error: 0}, {        Day: 36,    Importance: 3,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Taktiles System",    Length: "2421",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/KyaUTM/article/0K0eUS",    Error: 0}, {        Day: 36,    Importance: 4,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Nozizeptives System",    Length: "2672",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/KyaUTM/article/Do01VS",    Error: 0}, {        Day: 36,    Importance: 5,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Olfaktorisches und gustatorisches System",    Length: "1943",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/KyaUTM/article/xo0EVS",    Error: 0}, {        Day: 37,    Importance: 1,    Subject: "Sinnesorgane",    Chapter: "Auge und Orbita",    Length: "1979",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/6yajTM/article/Ho0KWS",    Error: 0}, {        Day: 37,    Importance: 2,    Subject: "Sinnesorgane",    Chapter: "Optik und optische Geräte",    Length: "539",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/6yajTM/article/P60WOS",    Error: 0}, {        Day: 37,    Importance: 3,    Subject: "Sinnesorgane",    Chapter: "Visuelles System",    Length: "791",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/PR0WMf/6yajTM/article/mp0VJS",    Error: 0}, {        Day: 38,    Importance: 1,    Subject: "Sinnesorgane",    Chapter: "Ohr",    Length: "2744",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/pyaLTM/article/Eo08dS",    Error: 0}, {        Day: 38,    Importance: 2,    Subject: "Sinnesorgane",    Chapter: "Akustik",    Length: "629",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/pyaLTM/article/j60_kS",    Error: 0}, {        Day: 38,    Importance: 3,    Subject: "Sinnesorgane",    Chapter: "Auditives System",    Length: "1998",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/pyaLTM/article/Up0bKS",    Error: 0}, {        Day: 38,    Importance: 4,    Subject: "Sinnesorgane",    Chapter: "Vestibuläres System",    Length: "1899",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/pyaLTM/article/Go0BWS",    Error: 0}, {        Day: 39,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Medizinische Statistik und Testtheorie",    Length: "3823",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/PR0WMf/JyasTM/article/Ip0YIS",    Error: 0}, {        Day: 39,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Grundlagen wissenschaftlicher Studien",    Length: "1909",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/JyasTM/article/rp0fIS",    Error: 0}, {        Day: 39,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Gesundheit und Krankheit",    Length: "414",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/JyasTM/article/_o05eS",    Error: 0}, {        Day: 39,    Importance: 4,    Subject: "Psychologie und Soziologie",    Chapter: "Patientenversorgung und Gesundheitssystem",    Length: "2511",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/JyasTM/article/-K0DQS",    Error: 0}, {        Day: 40,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Lernen, Kognition und Entwicklung",    Length: "3859",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/PR0WMf/qyaCTM/article/7p04IS",    Error: 0}, {        Day: 40,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Emotion und Motivation",    Length: "1150",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/qyaCTM/article/Hp0KIS",    Error: 0}, {        Day: 40,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Persönlichkeit und Verhaltensstile",    Length: "915",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/qyaCTM/article/sp0tIS",    Error: 0}, {        Day: 41,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Grundlagen der Demografie und Soziologie",    Length: "1094",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/PR0WMf/IyaYgM/article/Gp0BIS",    Error: 0}, {        Day: 41,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Beziehung zwischen Ärzt:innen und Patient:innen",    Length: "3503",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/PR0WMf/IyaYgM/article/OK0IgS",    Error: 0}, {        Day: 41,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Untersuchung und Gespräch",    Length: "536",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/IyaYgM/article/3K0STS",    Error: 0}, {        Day: 42,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Ärztliche Urteilsbildung und Entscheidung",    Length: "821",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/ryafgM/article/iK0JTS",    Error: 0}, {        Day: 42,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Prävention und Gesundheitsförderung",    Length: "1538",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/PR0WMf/ryafgM/article/HK0K3S",    Error: 0}, {        Day: 42,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Stressmodelle",    Length: "908",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/ryafgM/article/Ep08rS",    Error: 0}, {        Day: 42,    Importance: 4,    Subject: "Psychologie und Soziologie",    Chapter: "Verhaltens- und psychodynamische Modelle",    Length: "979",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/ryafgM/article/UK0bfS",    Error: 0}, {        Day: 43,    Importance: 1,    Subject: "Psychologie und Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Psychotherapeutische Verfahren (Vorklinik)",    Length: "340",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/PR0WMf/7ya4gM/article/BK0ziS",    Error: 0}, {        Day: 43,    Importance: 2,    Subject: "Psychologie und Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Umgang mit dem Sterben",    Length: "263",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/PR0WMf/7ya4gM/article/W60PPS",    Error: 0}, {        Day: 43,    Importance: 3,    Subject: "Psychologie und Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Erstes Staatsexamen (schriftlicher Teil)",    Length: "232",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/7ya4gM/article/x60EMS",    Error: 0}, {        Day: 43,    Importance: 4,    Subject: "Psychologie und Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Erstes Staatsexamen (mündlicher Teil)",    Length: "385",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/7ya4gM/article/xI0EUh",    Error: 0}, {        Day: 44,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Tag 44 Lernplan Physikum",    Length: "50",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/HyaKgM/article/VI0Gbh",    Error: 0}, {        Day: 45,    Importance: 1,    Subject: "Wiederholung: Physikum 2023/H Tag 1",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/syatgM/article/LZawXQ",    Error: 0}, {        Day: 46,    Importance: 1,    Subject: "Wiederholung: Physikum 2023/H Tag 2",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/GyaBgM/article/LZawXQ",    Error: 0}, {        Day: 47,    Importance: 1,    Subject: "Generalprobe: Physikum 2024/F Tag 1",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/tyaXSM/article/LZawXQ",    Error: 0}, {        Day: 48,    Importance: 1,    Subject: "Generalprobe: Physikum 2024/F Tag 2",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/FyagSM/article/LZawXQ",    Error: 0}, {        Day: 49,    Importance: 1,    Subject: "Generalprobe: Physikum 2024/H Tag 1",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/8yaOSM/article/LZawXQ",    Error: 0}, {        Day: 50,    Importance: 1,    Subject: "Generalprobe: Physikum 2024/H Tag 2",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/PR0WMf/uyapSM/article/LZawXQ",    Error: 0
    }],ko = {
        lastUpdated: T0,    heading: w0,    numberOfDays: N0,    pageTickValues: _0,    yFragenDomain: H0,    fragenzahl: G0,    dayUrls: O0,    data: W0
    },B0 = "05.06.2025",V0 = "50 Tage Fachfokus Lernplan M1 - H2025",Q0 = 50,F0 = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],X0 = 160,$0 = [39, 38, 77, 78, 78, 78, 79, 76, 75, 80, 79, 41, 113, 115, 78, 67, 67, 68, 64, 67, 58, 59, 59, 60, 65, 115, 53, 67, 58, 30, 30, 59, 65, 61, 61, 58, 70, 59, 62, 60, 118, 170, 175, 155, 155, 158, 159, 156, 156, 159],q0 = ["https://next.amboss.com/de/courses/kR0mMf/jAa_jM", "https://next.amboss.com/de/courses/kR0mMf/PAaWPM", "https://next.amboss.com/de/courses/kR0mMf/4Aa3PM", "https://next.amboss.com/de/courses/kR0mMf/kAamPM", "https://next.amboss.com/de/courses/kR0mMf/OAaIPM", "https://next.amboss.com/de/courses/kR0mMf/lAavPM", "https://next.amboss.com/de/courses/kR0mMf/NAa-PM", "https://next.amboss.com/de/courses/kR0mMf/mAaV4M", "https://next.amboss.com/de/courses/kR0mMf/5Aai4M", "https://next.amboss.com/de/courses/kR0mMf/MAaM4M", "https://next.amboss.com/de/courses/kR0mMf/nAa74M", "https://next.amboss.com/de/courses/kR0mMf/LAaw4M", "https://next.amboss.com/de/courses/kR0mMf/oAa0kM", "https://next.amboss.com/de/courses/kR0mMf/KAaUkM", "https://next.amboss.com/de/courses/kR0mMf/6AajkM", "https://next.amboss.com/de/courses/kR0mMf/pAaLkM", "https://next.amboss.com/de/courses/kR0mMf/JAaskM", "https://next.amboss.com/de/courses/kR0mMf/qAaCkM", "https://next.amboss.com/de/courses/kR0mMf/IAaYOM", "https://next.amboss.com/de/courses/kR0mMf/rAafOM", "https://next.amboss.com/de/courses/kR0mMf/7Aa4OM", "https://next.amboss.com/de/courses/kR0mMf/HAaKOM", "https://next.amboss.com/de/courses/kR0mMf/sAatOM", "https://next.amboss.com/de/courses/kR0mMf/GAaBOM", "https://next.amboss.com/de/courses/kR0mMf/tAaXlM", "https://next.amboss.com/de/courses/kR0mMf/FAaglM", "https://next.amboss.com/de/courses/kR0mMf/8AaOlM", "https://next.amboss.com/de/courses/kR0mMf/uAaplM", "https://next.amboss.com/de/courses/kR0mMf/EAa8lM", "https://next.amboss.com/de/courses/kR0mMf/vAaAlM", "https://next.amboss.com/de/courses/kR0mMf/DAa1NM", "https://next.amboss.com/de/courses/kR0mMf/wAahNM", "https://next.amboss.com/de/courses/kR0mMf/9AaNNM", "https://next.amboss.com/de/courses/kR0mMf/CAaqNM", "https://next.amboss.com/de/courses/kR0mMf/xAaENM", "https://next.amboss.com/de/courses/kR0mMf/BAazNM", "https://next.amboss.com/de/courses/kR0mMf/yAadmM", "https://next.amboss.com/de/courses/kR0mMf/AAaRmM", "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM", "https://next.amboss.com/de/courses/kR0mMf/zAarmM", "https://next.amboss.com/de/courses/kR0mMf/-AaDmM", "https://next.amboss.com/de/courses/kR0mMf/Z_aZ5M", "https://next.amboss.com/de/courses/kR0mMf/0_ae5M", "https://next.amboss.com/de/courses/kR0mMf/a_aQ5M", "https://next.amboss.com/de/courses/kR0mMf/Y_an5M", "https://next.amboss.com/de/courses/kR0mMf/b_aH5M", "https://next.amboss.com/de/courses/kR0mMf/X_a95M", "https://next.amboss.com/de/courses/kR0mMf/c_aaMM", "https://next.amboss.com/de/courses/kR0mMf/1_a2MM", "https://next.amboss.com/de/courses/kR0mMf/W_aPMM"],J0 = [
        {
        Day: 1,    Importance: 1,    Subject: "Anatomie",    Chapter: "Handbuch - M1-Fachfokus-Lernplan",    Length: "437",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/jAa_jM/article/6w0jPR",    Error: 0}, {        Day: 1,    Importance: 2,    Subject: "Anatomie",    Chapter: "Allgemeine Anatomie",    Length: "1418",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/jAa_jM/article/s60tmS",    Error: 0}, {        Day: 1,    Importance: 3,    Subject: "Anatomie",    Chapter: "Allgemeine Histologie",    Length: "1899",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/jAa_jM/article/7604mS",    Error: 0}, {        Day: 1,    Importance: 4,    Subject: "Anatomie",    Chapter: "Bindegewebe",    Length: "1899",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/jAa_jM/article/Bo0zVS",    Error: 0}, {        Day: 1,    Importance: 5,    Subject: "Anatomie",    Chapter: "Fettgewebe",    Length: "379",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/jAa_jM/article/6p0jqS",    Error: 0}, {        Day: 1,    Importance: 6,    Subject: "Anatomie",    Chapter: "Knorpelgewebe",    Length: "372",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/jAa_jM/article/q60CNS",    Error: 0}, {        Day: 1,    Importance: 7,    Subject: "Anatomie",    Chapter: "Knochengewebe",    Length: "362",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/jAa_jM/article/2o0TYS",    Error: 0}, {        Day: 1,    Importance: 8,    Subject: "Anatomie",    Chapter: "Muskelgewebe",    Length: "536",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/jAa_jM/article/pp0LqS",    Error: 0}, {        Day: 1,    Importance: 9,    Subject: "Anatomie",    Chapter: "Glatte Muskulatur",    Length: "445",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/jAa_jM/article/8K0ORS",    Error: 0}, {        Day: 1,    Importance: 10,    Subject: "Anatomie",    Chapter: "Skelettmuskulatur",    Length: "2327",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/jAa_jM/article/Jp0sqS",    Error: 0}, {        Day: 2,    Importance: 1,    Subject: "Anatomie",    Chapter: "Blut und Blutzellen",    Length: "3027",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/PAaWPM/article/LK0wSS",    Error: 0}, {        Day: 2,    Importance: 2,    Subject: "Anatomie",    Chapter: "Knochenmark und Blutbildung",    Length: "830",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/PAaWPM/article/qp0CqS",    Error: 0}, {        Day: 2,    Importance: 3,    Subject: "Anatomie",    Chapter: "Einführung in die Immunologie",    Length: "762",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/PAaWPM/article/K60UNS",    Error: 0}, {        Day: 2,    Importance: 4,    Subject: "Anatomie",    Chapter: "Unspezifisches Immunsystem",    Length: "1282",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/PAaWPM/article/660jNS",    Error: 0}, {        Day: 2,    Importance: 5,    Subject: "Anatomie",    Chapter: "Spezifisches Immunsystem",    Length: "1390",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/PAaWPM/article/p60LNS",    Error: 0}, {        Day: 2,    Importance: 6,    Subject: "Anatomie",    Chapter: "Lymphatisches System",    Length: "1332",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/PAaWPM/article/gp0FKS",    Error: 0}, {        Day: 2,    Importance: 7,    Subject: "Anatomie",    Chapter: "Lymphknoten",    Length: "355",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/PAaWPM/article/Tp06KS",    Error: 0}, {        Day: 2,    Importance: 8,    Subject: "Anatomie",    Chapter: "Milz",    Length: "821",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/PAaWPM/article/fp0kKS",    Error: 0}, {        Day: 2,    Importance: 9,    Subject: "Anatomie",    Chapter: "Mukosa-assoziiertes lymphatisches Gewebe",    Length: "835",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/PAaWPM/article/Sp0yKS",    Error: 0}, {        Day: 3,    Importance: 1,    Subject: "Anatomie",    Chapter: "Grundlagen der Embryologie",    Length: "2822",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/4Aa3PM/article/vp0ArS",    Error: 0}, {        Day: 3,    Importance: 2,    Subject: "Anatomie",    Chapter: "Von der Befruchtung zur Implantation",    Length: "1123",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/4Aa3PM/article/Dp017S",    Error: 0}, {        Day: 3,    Importance: 3,    Subject: "Anatomie",    Chapter: "Embryonalentwicklung",    Length: "1658",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/4Aa3PM/article/wp0h7S",    Error: 0}, {        Day: 3,    Importance: 4,    Subject: "Anatomie",    Chapter: "Plazenta, Nabelschnur und Amnion",    Length: "1360",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/4Aa3PM/article/Cp0q7S",    Error: 0}, {        Day: 3,    Importance: 5,    Subject: "Anatomie",    Chapter: "Physiologische Aspekte prä- und postnatal",    Length: "1765",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/4Aa3PM/article/9p0N7S",    Error: 0}, {        Day: 4,    Importance: 1,    Subject: "Anatomie",    Chapter: "Schulter und Schultergürtel",    Length: "2201",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/kAamPM/article/Ro0lbS",    Error: 0}, {        Day: 4,    Importance: 2,    Subject: "Anatomie",    Chapter: "Oberarm und Ellenbogen",    Length: "751",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/kAamPM/article/So0yYS",    Error: 0}, {        Day: 4,    Importance: 3,    Subject: "Anatomie",    Chapter: "Unterarm",    Length: "1287",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/kAamPM/article/ho0cbS",    Error: 0}, {        Day: 4,    Importance: 4,    Subject: "Anatomie",    Chapter: "Hand",    Length: "1195",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/kAamPM/article/io0JbS",    Error: 0}, {        Day: 4,    Importance: 5,    Subject: "Anatomie",    Chapter: "Leitungsbahnen der oberen Extremität",    Length: "2153",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/kAamPM/article/Vo0GaS",    Error: 0}, {        Day: 4,    Importance: 6,    Subject: "Anatomie",    Chapter: "Becken und Hüfte",    Length: "2898",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/kAamPM/article/f60k4S",    Error: 0}, {        Day: 4,    Importance: 7,    Subject: "Anatomie",    Chapter: "Oberschenkel und Knie",    Length: "1754",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/kAamPM/article/yK0dQS",    Error: 0}, {        Day: 4,    Importance: 8,    Subject: "Anatomie",    Chapter: "Unterschenkel",    Length: "1873",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/kAamPM/article/Ao0ReS",    Error: 0}, {        Day: 4,    Importance: 9,    Subject: "Anatomie",    Chapter: "Sprunggelenke und Fuß",    Length: "2913",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/kAamPM/article/8o0OdS",    Error: 0}, {        Day: 4,    Importance: 10,    Subject: "Anatomie",    Chapter: "Leitungsbahnen der unteren Extremität",    Length: "4522",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/kAamPM/article/uo0pdS",    Error: 0}, {        Day: 5,    Importance: 1,    Subject: "Anatomie",    Chapter: "Grundlagen des Kreislaufes",    Length: "1423",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/OAaIPM/article/no07cS",    Error: 0}, {        Day: 5,    Importance: 2,    Subject: "Anatomie",    Chapter: "Brusthöhle",    Length: "2870",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/OAaIPM/article/e60xPS",    Error: 0}, {        Day: 5,    Importance: 3,    Subject: "Anatomie",    Chapter: "Aufbau des Herzens",    Length: "1821",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/OAaIPM/article/CL0q-g",    Error: 0}, {        Day: 5,    Importance: 4,    Subject: "Anatomie",    Chapter: "Herzerregung",    Length: "4698",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/OAaIPM/article/yp0dHS",    Error: 0}, {        Day: 5,    Importance: 5,    Subject: "Anatomie",    Chapter: "Aufbau und Funktion der Blutgefäße",    Length: "2002",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/OAaIPM/article/go0FYS",    Error: 0}, {        Day: 5,    Importance: 6,    Subject: "Anatomie",    Chapter: "Atemwege und Lunge",    Length: "4451",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/OAaIPM/article/6o0j1S",    Error: 0}, {        Day: 6,    Importance: 1,    Subject: "Anatomie",    Chapter: "Übersicht des Verdauungssystems",    Length: "2678",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/qK0ChS",    Error: 0}, {        Day: 6,    Importance: 2,    Subject: "Anatomie",    Chapter: "Mundhöhle",    Length: "953",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/KK0UhS",    Error: 0}, {        Day: 6,    Importance: 3,    Subject: "Anatomie",    Chapter: "Zähne",    Length: "1122",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/np07JS",    Error: 0}, {        Day: 6,    Importance: 4,    Subject: "Anatomie",    Chapter: "Zunge",    Length: "641",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/Lp0wJS",    Error: 0}, {        Day: 6,    Importance: 5,    Subject: "Anatomie",    Chapter: "Speicheldrüsen",    Length: "1470",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/op00qS",    Error: 0}, {        Day: 6,    Importance: 6,    Subject: "Anatomie",    Chapter: "Pharynx",    Length: "831",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/Kp0UqS",    Error: 0}, {        Day: 6,    Importance: 7,    Subject: "Anatomie",    Chapter: "Ösophagus",    Length: "911",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/6K0jhS",    Error: 0}, {        Day: 6,    Importance: 8,    Subject: "Anatomie",    Chapter: "Bauchhöhle",    Length: "1536",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/EK08RS",    Error: 0}, {        Day: 6,    Importance: 9,    Subject: "Anatomie",    Chapter: "Magen",    Length: "2130",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/XK09US",    Error: 0}, {        Day: 6,    Importance: 10,    Subject: "Anatomie",    Chapter: "Dünndarm",    Length: "1928",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/pK0LhS",    Error: 0}, {        Day: 6,    Importance: 11,    Subject: "Anatomie",    Chapter: "Leber",    Length: "2615",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/F60g5S",    Error: 0}, {        Day: 6,    Importance: 12,    Subject: "Anatomie",    Chapter: "Gallenblase und Galle",    Length: "229",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/t60X5S",    Error: 0}, {        Day: 6,    Importance: 13,    Subject: "Anatomie",    Chapter: "Pankreas",    Length: "1992",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/2K0TfS",    Error: 0}, {        Day: 6,    Importance: 14,    Subject: "Anatomie",    Chapter: "Zäkum und Kolon",    Length: "1411",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/rK0f3S",    Error: 0}, {        Day: 6,    Importance: 15,    Subject: "Anatomie",    Chapter: "Rektum und Analkanal",    Length: "1604",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/8p0OrS",    Error: 0}, {        Day: 6,    Importance: 16,    Subject: "Anatomie",    Chapter: "Leitungsbahnen des Bauchraums",    Length: "2981",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/lAavPM/article/Ap0RHS",    Error: 0}, {        Day: 7,    Importance: 1,    Subject: "Anatomie",    Chapter: "Niere",    Length: "2305",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/NAa-PM/article/jo0_bS",    Error: 0}, {        Day: 7,    Importance: 2,    Subject: "Anatomie",    Chapter: "Tubuläre Transportprozesse",    Length: "300",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/NAa-PM/article/_605nS",    Error: 0}, {        Day: 7,    Importance: 3,    Subject: "Anatomie",    Chapter: "Harnleiter",    Length: "653",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/NAa-PM/article/Xp09LS",    Error: 0}, {        Day: 7,    Importance: 4,    Subject: "Anatomie",    Chapter: "Harnblase",    Length: "1131",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/NAa-PM/article/bp0HLS",    Error: 0}, {        Day: 7,    Importance: 5,    Subject: "Anatomie",    Chapter: "Harnröhre",    Length: "625",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/NAa-PM/article/ap0QLS",    Error: 0}, {        Day: 7,    Importance: 6,    Subject: "Anatomie",    Chapter: "Hypophyse",    Length: "2095",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/NAa-PM/article/jK0_TS",    Error: 0}, {        Day: 7,    Importance: 7,    Subject: "Anatomie",    Chapter: "Schilddrüse",    Length: "2228",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/NAa-PM/article/bK0HUS",    Error: 0}, {        Day: 7,    Importance: 8,    Subject: "Anatomie",    Chapter: "Nebenschilddrüsen",    Length: "1077",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/NAa-PM/article/Op0IpS",    Error: 0}, {        Day: 7,    Importance: 9,    Subject: "Anatomie",    Chapter: "Nebenniere",    Length: "3694",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/NAa-PM/article/S60y4S",    Error: 0}, {        Day: 8,    Importance: 1,    Subject: "Anatomie",    Chapter: "Beckenhöhle",    Length: "2508",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/T6064S",    Error: 0}, {        Day: 8,    Importance: 2,    Subject: "Anatomie",    Chapter: "Ovar",    Length: "1465",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/m60VlS",    Error: 0}, {        Day: 8,    Importance: 3,    Subject: "Anatomie",    Chapter: "Tuba uterina",    Length: "519",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/M60MlS",    Error: 0}, {        Day: 8,    Importance: 4,    Subject: "Anatomie",    Chapter: "Uterus",    Length: "1774",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/560ilS",    Error: 0}, {        Day: 8,    Importance: 5,    Subject: "Anatomie",    Chapter: "Vagina und Vulva",    Length: "1237",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/n607lS",    Error: 0}, {        Day: 8,    Importance: 6,    Subject: "Anatomie",    Chapter: "Mamma",    Length: "681",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/L60wlS",    Error: 0}, {        Day: 8,    Importance: 7,    Subject: "Anatomie",    Chapter: "Hoden",    Length: "1485",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/ep0xoS",    Error: 0}, {        Day: 8,    Importance: 8,    Subject: "Anatomie",    Chapter: "Nebenhoden, Samenleiter und Samenstrang",    Length: "1064",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/Wp0PoS",    Error: 0}, {        Day: 8,    Importance: 9,    Subject: "Anatomie",    Chapter: "Prostata, Bläschendrüse und Cowper-Drüse",    Length: "1193",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/dp0ooS",    Error: 0}, {        Day: 8,    Importance: 10,    Subject: "Anatomie",    Chapter: "Penis, Erektion und Ejakulation",    Length: "752",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/Vp0GoS",    Error: 0}, {        Day: 8,    Importance: 11,    Subject: "Anatomie",    Chapter: "Geschlechtsentwicklung",    Length: "3814",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/mAaV4M/article/Qo0ubS",    Error: 0}, {        Day: 9,    Importance: 1,    Subject: "Anatomie",    Chapter: "Nacken und Rücken",    Length: "2324",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/5Aai4M/article/up0prS",    Error: 0}, {        Day: 9,    Importance: 2,    Subject: "Anatomie",    Chapter: "Wirbelsäule",    Length: "1426",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/5Aai4M/article/R60lkS",    Error: 0}, {        Day: 9,    Importance: 3,    Subject: "Anatomie",    Chapter: "Brustwand",    Length: "1325",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/5Aai4M/article/tp0XrS",    Error: 0}, {        Day: 9,    Importance: 4,    Subject: "Anatomie",    Chapter: "Bauchwand",    Length: "779",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/5Aai4M/article/cp0aoS",    Error: 0}, {        Day: 9,    Importance: 5,    Subject: "Anatomie",    Chapter: "Übersicht der Kopf- und Halsregion",    Length: "3983",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/5Aai4M/article/360SkS",    Error: 0}, {        Day: 9,    Importance: 6,    Subject: "Anatomie",    Chapter: "Muskulatur von Kopf und Hals",    Length: "1491",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/5Aai4M/article/1p02oS",    Error: 0}, {        Day: 9,    Importance: 7,    Subject: "Anatomie",    Chapter: "Kehlkopf, Sprechen und Sprache",    Length: "1689",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/5Aai4M/article/mK0VSS",    Error: 0}, {        Day: 9,    Importance: 8,    Subject: "Anatomie",    Chapter: "Nase und Nasennebenhöhlen",    Length: "1462",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/5Aai4M/article/SK0yfS",    Error: 0}, {        Day: 9,    Importance: 9,    Subject: "Anatomie",    Chapter: "Schädel",    Length: "2287",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/5Aai4M/article/aK0QUS",    Error: 0}, {        Day: 10,    Importance: 1,    Subject: "Anatomie",    Chapter: "Einführung in die Neuroanatomie",    Length: "1590",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/MAaM4M/article/-p0DHS",    Error: 0}, {        Day: 10,    Importance: 2,    Subject: "Anatomie",    Chapter: "Hirnnerven",    Length: "6805",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/MAaM4M/article/7o04WS",    Error: 0}, {        Day: 10,    Importance: 3,    Subject: "Anatomie",    Chapter: "Nervengewebe, Synapsen und Transmitter",    Length: "2609",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/MAaM4M/article/tK0XRS",    Error: 0}, {        Day: 10,    Importance: 4,    Subject: "Anatomie",    Chapter: "Vegetatives Nervensystem",    Length: "1356",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/MAaM4M/article/oo001S",    Error: 0}, {        Day: 10,    Importance: 5,    Subject: "Anatomie",    Chapter: "Rückenmark",    Length: "1540",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/MAaM4M/article/ro0fWS",    Error: 0}, {        Day: 10,    Importance: 6,    Subject: "Anatomie",    Chapter: "Spinale Leitungsbahnen und Reflexe",    Length: "2821",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/MAaM4M/article/zp0rHS",    Error: 0}, {        Day: 11,    Importance: 1,    Subject: "Anatomie",    Chapter: "Hirnstamm",    Length: "2857",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/nAa74M/article/yo0deS",    Error: 0}, {        Day: 11,    Importance: 2,    Subject: "Anatomie",    Chapter: "Kleinhirn",    Length: "1953",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/nAa74M/article/YK0nUS",    Error: 0}, {        Day: 11,    Importance: 3,    Subject: "Anatomie",    Chapter: "Zwischenhirn",    Length: "1412",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/nAa74M/article/zK0rQS",    Error: 0}, {        Day: 11,    Importance: 4,    Subject: "Anatomie",    Chapter: "Großhirn",    Length: "2326",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/nAa74M/article/060ejS",    Error: 0}, {        Day: 11,    Importance: 5,    Subject: "Anatomie",    Chapter: "Limbisches System und Gedächtnis",    Length: "573",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/nAa74M/article/U60b4S",    Error: 0}, {        Day: 11,    Importance: 6,    Subject: "Anatomie",    Chapter: "Gefäßversorgung des Gehirns",    Length: "2886",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/nAa74M/article/Q60ukS",    Error: 0}, {        Day: 11,    Importance: 7,    Subject: "Anatomie",    Chapter: "Meningen, Liquorräume und Blut-Hirn-Schranke",    Length: "839",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/nAa74M/article/ZJ0ZsS",    Error: 0}, {        Day: 12,    Importance: 1,    Subject: "Anatomie",    Chapter: "Auge und Orbita",    Length: "1979",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/LAaw4M/article/Ho0KWS",    Error: 0}, {        Day: 12,    Importance: 2,    Subject: "Anatomie",    Chapter: "Visuelles System",    Length: "791",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/kR0mMf/LAaw4M/article/mp0VJS",    Error: 0}, {        Day: 12,    Importance: 3,    Subject: "Anatomie",    Chapter: "Olfaktorisches und gustatorisches System",    Length: "1943",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/LAaw4M/article/xo0EVS",    Error: 0}, {        Day: 12,    Importance: 4,    Subject: "Anatomie",    Chapter: "Ohr",    Length: "2744",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/LAaw4M/article/Eo08dS",    Error: 0}, {        Day: 12,    Importance: 5,    Subject: "Anatomie",    Chapter: "Auditives System",    Length: "1998",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/LAaw4M/article/Up0bKS",    Error: 0}, {        Day: 12,    Importance: 6,    Subject: "Anatomie",    Chapter: "Vestibuläres System",    Length: "1899",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/LAaw4M/article/Go0BWS",    Error: 0}, {        Day: 12,    Importance: 7,    Subject: "Anatomie",    Chapter: "Haut und Hautanhangsgebilde",    Length: "2635",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/LAaw4M/article/so0tWS",    Error: 0}, {        Day: 12,    Importance: 8,    Subject: "Anatomie",    Chapter: "Taktiles System",    Length: "2421",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/LAaw4M/article/0K0eUS",    Error: 0}, {        Day: 12,    Importance: 9,    Subject: "Anatomie",    Chapter: "Nozizeptives System",    Length: "2672",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/LAaw4M/article/Do01VS",    Error: 0}, {        Day: 13,    Importance: 1,    Subject: "Biologie",    Chapter: "Die Zelle",    Length: "1894",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/kR0mMf/oAa0kM/article/0o0e0S",    Error: 0}, {        Day: 13,    Importance: 2,    Subject: "Biologie",    Chapter: "Zellzyklus und Tumorentstehung",    Length: "636",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/oAa0kM/article/2p0TKS",    Error: 0}, {        Day: 13,    Importance: 3,    Subject: "Biologie",    Chapter: "Aufbau von DNA und RNA",    Length: "1890",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/oAa0kM/article/RK0lTS",    Error: 0}, {        Day: 13,    Importance: 4,    Subject: "Biologie",    Chapter: "Humangenetik (Vorklinik)",    Length: "2477",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/oAa0kM/article/DK01iS",    Error: 0}, {        Day: 13,    Importance: 5,    Subject: "Biologie",    Chapter: "Replikation und Reparaturmechanismen der DNA",    Length: "1858",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/oAa0kM/article/Yp0nLS",    Error: 0}, {        Day: 14,    Importance: 1,    Subject: "Biologie",    Chapter: "Genexpression und Transkription",    Length: "1964",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/KAaUkM/article/0p0eLS",    Error: 0}, {        Day: 14,    Importance: 2,    Subject: "Biologie",    Chapter: "Translation und Proteinbiosynthese",    Length: "1226",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/KAaUkM/article/Zp0ZLS",    Error: 0}, {        Day: 14,    Importance: 3,    Subject: "Biologie",    Chapter: "Grundlagen der Embryologie",    Length: "2822",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/KAaUkM/article/vp0ArS",    Error: 0}, {        Day: 14,    Importance: 4,    Subject: "Biologie",    Chapter: "Enzyme und Biokatalyse",    Length: "2618",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/KAaUkM/article/a60QjS",    Error: 0}, {        Day: 14,    Importance: 5,    Subject: "Biologie",    Chapter: "Biochemische Labormethoden",    Length: "1396",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/KAaUkM/article/Y60njS",    Error: 0}, {        Day: 14,    Importance: 6,    Subject: "Biologie",    Chapter: "Grundlagen der Mikrobiologie und Virologie",    Length: "1863",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/KAaUkM/article/b60HjS",    Error: 0}, {        Day: 14,    Importance: 7,    Subject: "Biologie",    Chapter: "Bakterien",    Length: "253",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/KAaUkM/article/lp0vpS",    Error: 0}, {        Day: 15,    Importance: 1,    Subject: "Chemie",    Chapter: "Aufbau der Materie",    Length: "5925",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/6AajkM/article/hK0cTS",    Error: 0}, {        Day: 15,    Importance: 2,    Subject: "Chemie",    Chapter: "Chemische Reaktionen",    Length: "3025",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/6AajkM/article/PK0WgS",    Error: 0}, {        Day: 15,    Importance: 3,    Subject: "Chemie",    Chapter: "Chemische Grundlagen zu Säuren und Basen",    Length: "460",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/6AajkM/article/Io0YWS#Zaaf26b6239b109d0af9a85212f713040",    Error: 0}, {        Day: 15,    Importance: 4,    Subject: "Chemie",    Chapter: "pH-Wert",    Length: "1645",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/6AajkM/article/Io0YWS#Z6fbf579968675e0abb1983b5bf89d199",    Error: 0}, {        Day: 15,    Importance: 5,    Subject: "Chemie",    Chapter: "Pufferlösung",    Length: "1455",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/6AajkM/article/Io0YWS#Z3b7a910aa741b4ff7ba2d73f12213061",    Error: 0}, {        Day: 15,    Importance: 6,    Subject: "Chemie",    Chapter: "Redoxchemie",    Length: "1723",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/6AajkM/article/hp0c6S",    Error: 0}, {        Day: 16,    Importance: 1,    Subject: "Chemie",    Chapter: "Grundlagen der organischen Chemie",    Length: "3660",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/kR0mMf/pAaLkM/article/4o03XS",    Error: 0}, {        Day: 16,    Importance: 2,    Subject: "Chemie",    Chapter: "Thermodynamik",    Length: "2160",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/pAaLkM/article/G60BmS",    Error: 0}, {        Day: 16,    Importance: 3,    Subject: "Chemie",    Chapter: "Enzyme und Biokatalyse",    Length: "2618",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/pAaLkM/article/a60QjS",    Error: 0}, {        Day: 16,    Importance: 4,    Subject: "Chemie",    Chapter: "Chemische Struktur der Kohlenhydrate",    Length: "1266",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/pAaLkM/article/w60hMS#Z768c381f33bc2a7d94687e35c1abdc18",    Error: 0}, {        Day: 16,    Importance: 5,    Subject: "Chemie",    Chapter: "Aminosäuren: Struktur und Eigenschaften",    Length: "1254",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/pAaLkM/article/Jo0s1S#Z3d2a93501d23ecf609a730566f77f0a5",    Error: 0}, {        Day: 16,    Importance: 6,    Subject: "Chemie",    Chapter: "Peptide und Proteine: Struktur und Eigenschaften",    Length: "2199",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/pAaLkM/article/Jo0s1S#Z55e62988dfd57dfa9376dbc3ce63548e",    Error: 0}, {        Day: 16,    Importance: 7,    Subject: "Chemie",    Chapter: "Chemische Struktur der Fettsäuren und Triacylglycerine",    Length: "450",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/pAaLkM/article/B60zMS#Z5811ce106b109ce5bfc6c71bd96ca9cf",    Error: 0}, {        Day: 17,    Importance: 1,    Subject: "Biochemie",    Chapter: "Aufbau von DNA und RNA",    Length: "1890",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/JAaskM/article/RK0lTS",    Error: 0}, {        Day: 17,    Importance: 2,    Subject: "Biochemie",    Chapter: "Humangenetik (Vorklinik)",    Length: "2477",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/JAaskM/article/DK01iS",    Error: 0}, {        Day: 17,    Importance: 3,    Subject: "Biochemie",    Chapter: "Replikation und Reparaturmechanismen der DNA",    Length: "1858",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/JAaskM/article/Yp0nLS",    Error: 0}, {        Day: 17,    Importance: 4,    Subject: "Biochemie",    Chapter: "Genexpression und Transkription",    Length: "1964",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/JAaskM/article/0p0eLS",    Error: 0}, {        Day: 17,    Importance: 5,    Subject: "Biochemie",    Chapter: "Translation und Proteinbiosynthese",    Length: "1226",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/JAaskM/article/Zp0ZLS",    Error: 0}, {        Day: 18,    Importance: 1,    Subject: "Biochemie",    Chapter: "Molekularbiologie der Entwicklung",    Length: "375",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/qAaCkM/article/vp0ArS#Z9ce8b734dfe6724fd6607d92acb92e26",    Error: 0}, {        Day: 18,    Importance: 2,    Subject: "Biochemie",    Chapter: "Purine und Pyrimidine",    Length: "2543",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/qAaCkM/article/CK0qiS",    Error: 0}, {        Day: 18,    Importance: 3,    Subject: "Biochemie",    Chapter: "Enzyme und Biokatalyse",    Length: "2618",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/qAaCkM/article/a60QjS",    Error: 0}, {        Day: 18,    Importance: 4,    Subject: "Biochemie",    Chapter: "Biochemische Labormethoden",    Length: "1396",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/qAaCkM/article/Y60njS",    Error: 0}, {        Day: 19,    Importance: 1,    Subject: "Biochemie",    Chapter: "Übersicht Ernährung (Vorklinik)",    Length: "895",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/IAaYOM/article/X609jS",    Error: 0}, {        Day: 19,    Importance: 2,    Subject: "Biochemie",    Chapter: "Kohlenhydrate",    Length: "2093",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/IAaYOM/article/w60hMS",    Error: 0}, {        Day: 19,    Importance: 3,    Subject: "Biochemie",    Chapter: "Abbau und Synthese der Glucose",    Length: "2189",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/IAaYOM/article/r60fmS",    Error: 0}, {        Day: 19,    Importance: 4,    Subject: "Biochemie",    Chapter: "Glykogenstoffwechsel",    Length: "184",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/IAaYOM/article/I60YmS",    Error: 0}, {        Day: 20,    Importance: 1,    Subject: "Biochemie",    Chapter: "Citratzyklus",    Length: "736",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/rAafOM/article/3p0S6S",    Error: 0}, {        Day: 20,    Importance: 2,    Subject: "Biochemie",    Chapter: "Atmungskette",    Length: "2092",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/rAafOM/article/Rp0l6S",    Error: 0}, {        Day: 20,    Importance: 3,    Subject: "Biochemie",    Chapter: "Energiehaushalt",    Length: "1117",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/rAafOM/article/wK0hiS#Zfdbc67b9335d3d84917c4df910e2740c",    Error: 0}, {        Day: 21,    Importance: 1,    Subject: "Biochemie",    Chapter: "Aminosäuren und Proteine",    Length: "3310",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/7Aa4OM/article/Jo0s1S",    Error: 0}, {        Day: 21,    Importance: 2,    Subject: "Biochemie",    Chapter: "Aminosäurestoffwechsel",    Length: "2058",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/7Aa4OM/article/Mp0MJS",    Error: 0}, {        Day: 21,    Importance: 3,    Subject: "Biochemie",    Chapter: "Muskelgewebe",    Length: "536",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/7Aa4OM/article/pp0LqS",    Error: 0}, {        Day: 21,    Importance: 4,    Subject: "Biochemie",    Chapter: "Extrazellulärmatrix",    Length: "1701",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/7Aa4OM/article/Bo0zVS#Z89df758dcab50b245ed29cc3362902f6",    Error: 0}, {        Day: 22,    Importance: 1,    Subject: "Biochemie",    Chapter: "Lipide",    Length: "1969",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/HAaKOM/article/D601MS",    Error: 0}, {        Day: 22,    Importance: 2,    Subject: "Biochemie",    Chapter: "Galle",    Length: "535",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/HAaKOM/article/t60X5S#Z307fa87b89716ce7a257e1d5969561fb",    Error: 0}, {        Day: 22,    Importance: 3,    Subject: "Biochemie",    Chapter: "Fettsäuren und Triacylglycerine",    Length: "2662",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/HAaKOM/article/B60zMS",    Error: 0}, {        Day: 22,    Importance: 4,    Subject: "Biochemie",    Chapter: "Cholesterin",    Length: "640",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/HAaKOM/article/y60dnS",    Error: 0}, {        Day: 22,    Importance: 5,    Subject: "Biochemie",    Chapter: "Grundlagen der Biotransformation",    Length: "1056",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/HAaKOM/article/F60g5S#Zb3783e69e371966ebb716957469d188c",    Error: 0}, {        Day: 23,    Importance: 1,    Subject: "Biochemie",    Chapter: "Wasser- und Elektrolythaushalt",    Length: "1473",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/sAatOM/article/lo0vXS",    Error: 0}, {        Day: 23,    Importance: 2,    Subject: "Biochemie",    Chapter: "Säure-Basen-Haushalt",    Length: "3027",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/sAatOM/article/Io0YWS",    Error: 0}, {        Day: 23,    Importance: 3,    Subject: "Biochemie",    Chapter: "Vitamine (Vorklinik)",    Length: "501",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/sAatOM/article/z60rnS",    Error: 0}, {        Day: 23,    Importance: 4,    Subject: "Biochemie",    Chapter: "Mineralstoffe",    Length: "352",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/sAatOM/article/-60DnS",    Error: 0}, {        Day: 24,    Importance: 1,    Subject: "Biochemie",    Chapter: "Glucosestoffwechsel von Erythrozyten",    Length: "826",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/GAaBOM/article/960NMS#Z02fa95d3e52cd01d69e5e4e8147e7092",    Error: 0}, {        Day: 24,    Importance: 2,    Subject: "Biochemie",    Chapter: "Glutathion",    Length: "1138",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/GAaBOM/article/960NMS#Zc1d1072f3d1c853375b294c77178ee48",    Error: 0}, {        Day: 24,    Importance: 3,    Subject: "Biochemie",    Chapter: "Hämoglobin",    Length: "659",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/GAaBOM/article/C60qMS",    Error: 0}, {        Day: 24,    Importance: 4,    Subject: "Biochemie",    Chapter: "Sauerstofftransport",    Length: "1012",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/GAaBOM/article/Np0-pS#Z5f884fab1bba1daa9b663a39864ce1ba",    Error: 0}, {        Day: 24,    Importance: 5,    Subject: "Biochemie",    Chapter: "Kohlenstoffdioxid-Transport",    Length: "1268",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/GAaBOM/article/Np0-pS#Z06c31834dcce4ea46f2daf15a04de13a",    Error: 0}, {        Day: 24,    Importance: 6,    Subject: "Biochemie",    Chapter: "Blutstillung und Blutgerinnung",    Length: "1553",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/GAaBOM/article/_K05QS",    Error: 0}, {        Day: 25,    Importance: 1,    Subject: "Biochemie",    Chapter: "Einführung in die Immunologie",    Length: "762",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/tAaXlM/article/K60UNS",    Error: 0}, {        Day: 25,    Importance: 2,    Subject: "Biochemie",    Chapter: "Unspezifisches Immunsystem",    Length: "1282",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/tAaXlM/article/660jNS",    Error: 0}, {        Day: 25,    Importance: 3,    Subject: "Biochemie",    Chapter: "Spezifisches Immunsystem",    Length: "1390",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/tAaXlM/article/p60LNS",    Error: 0}, {        Day: 25,    Importance: 4,    Subject: "Biochemie",    Chapter: "Gewebshormone",    Length: "3800",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/tAaXlM/article/V60GPS",    Error: 0}, {        Day: 25,    Importance: 5,    Subject: "Biochemie",    Chapter: "Lymphatisches System",    Length: "1332",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/tAaXlM/article/gp0FKS",    Error: 0}, {        Day: 26,    Importance: 1,    Subject: "Biochemie",    Chapter: "Allgemeine Hormoneigenschaften",    Length: "257",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/FAaglM/article/IK0Y3S",    Error: 0}, {        Day: 26,    Importance: 2,    Subject: "Biochemie",    Chapter: "Schilddrüsenhormone",    Length: "1299",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/FAaglM/article/bK0HUS#Zdeb524a5a3124177544206ecd94b3437",    Error: 0}, {        Day: 26,    Importance: 3,    Subject: "Biochemie",    Chapter: "Nebenniere",    Length: "3694",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/FAaglM/article/S60y4S",    Error: 0}, {        Day: 26,    Importance: 4,    Subject: "Biochemie",    Chapter: "Sexualhormone",    Length: "3267",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/FAaglM/article/zo0reS",    Error: 0}, {        Day: 26,    Importance: 5,    Subject: "Biochemie",    Chapter: "Pankreashormone",    Length: "1322",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/FAaglM/article/kp0mpS",    Error: 0}, {        Day: 26,    Importance: 6,    Subject: "Biochemie",    Chapter: "Neurotransmitter",    Length: "534",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/FAaglM/article/tK0XRS#Z733b85e0bbbefcf2e692f5c16b23e1d8",    Error: 0}, {        Day: 27,    Importance: 1,    Subject: "Physik",    Chapter: "Grundlagen des Rechnens",    Length: "733",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/8AaOlM/article/NK0-gS",    Error: 0}, {        Day: 27,    Importance: 2,    Subject: "Physik",    Chapter: "Grundlagen der Mechanik",    Length: "1436",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/8AaOlM/article/lK0vgS",    Error: 0}, {        Day: 27,    Importance: 3,    Subject: "Physik",    Chapter: "Atome und chemische Elemente",    Length: "1577",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/8AaOlM/article/hK0cTS#Ze6092c73e4fd777c879cf2fc265401a7",    Error: 0}, {        Day: 27,    Importance: 4,    Subject: "Physik",    Chapter: "Ionisierende Strahlung",    Length: "1307",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/8AaOlM/article/k60mOS",    Error: 0}, {        Day: 28,    Importance: 1,    Subject: "Physik",    Chapter: "Elektrizitätslehre",    Length: "1520",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/uAaplM/article/4603OS",    Error: 0}, {        Day: 28,    Importance: 2,    Subject: "Physik",    Chapter: "Physikalische Grundlagen: Stromstärke und Widerstand im Kreislaufsystem",    Length: "1639",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/uAaplM/article/no07cS#Z9326d7e327e7060f4bec020f99514a3b",    Error: 0}, {        Day: 28,    Importance: 3,    Subject: "Physik",    Chapter: "Gefäßmechanik",    Length: "966",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/uAaplM/article/go0FYS#Z305e6c13a3a1563b7a63c5c4d07f5bd1",    Error: 0}, {        Day: 28,    Importance: 4,    Subject: "Physik",    Chapter: "Darstellung der Druck-Volumen-Verhältnisse der Lunge",    Length: "264",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/uAaplM/article/A60RnS#Z3599ce8ea32d0a231dfffd3d0fb5a5db",    Error: 0}, {        Day: 28,    Importance: 5,    Subject: "Physik",    Chapter: "Lungendehnbarkeit (Compliance)",    Length: "626",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/uAaplM/article/A60RnS#Za841bd8709f5edd971debf666cd7547a",    Error: 0}, {        Day: 28,    Importance: 6,    Subject: "Physik",    Chapter: "Grundlagen Atemwegswiderstand",    Length: "604",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/uAaplM/article/A60RnS#Z922f658aa3f0fd70f35f8c796fb8ff3e",    Error: 0}, {        Day: 29,    Importance: 1,    Subject: "Physik",    Chapter: "Thermodynamik",    Length: "2160",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/EAa8lM/article/G60BmS",    Error: 0}, {        Day: 29,    Importance: 2,    Subject: "Physik",    Chapter: "Gastransport im Blut - Grundlagen",    Length: "514",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/EAa8lM/article/Np0-pS#Zba2ad07a64ef6561f6a55c5e63370746",    Error: 0}, {        Day: 29,    Importance: 3,    Subject: "Physik",    Chapter: "Optik und optische Geräte",    Length: "539",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/EAa8lM/article/P60WOS",    Error: 0}, {        Day: 29,    Importance: 4,    Subject: "Physik",    Chapter: "Dioptrischer Apparat",    Length: "671",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/kR0mMf/EAa8lM/article/mp0VJS#Z6ace187386644affb4ec9ab082115a0e",    Error: 0}, {        Day: 29,    Importance: 5,    Subject: "Physik",    Chapter: "Akustik",    Length: "629",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/EAa8lM/article/j60_kS",    Error: 0}, {        Day: 30,    Importance: 1,    Subject: "Physiologie",    Chapter: "Stofftransport",    Length: "1405",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/vAaAlM/article/xK0EiS",    Error: 0}, {        Day: 30,    Importance: 2,    Subject: "Physiologie",    Chapter: "Signaltransduktion",    Length: "1293",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/vAaAlM/article/Qp0u6S",    Error: 0}, {        Day: 30,    Importance: 3,    Subject: "Physiologie",    Chapter: "Ruhe- und Aktionspotenzial",    Length: "2163",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/vAaAlM/article/jp0_6S",    Error: 0}, {        Day: 30,    Importance: 4,    Subject: "Physiologie",    Chapter: "Kontraktion der Myofilamente",    Length: "486",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/vAaAlM/article/pp0LqS#Z3981915ea4c2ad04e384a5d7a88d8774",    Error: 0}, {        Day: 30,    Importance: 5,    Subject: "Physiologie",    Chapter: "Glatte Muskulatur",    Length: "445",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/vAaAlM/article/8K0ORS",    Error: 0}, {        Day: 31,    Importance: 1,    Subject: "Physiologie",    Chapter: "Grundlagen des Kreislaufes",    Length: "1423",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/DAa1NM/article/no07cS",    Error: 0}, {        Day: 31,    Importance: 2,    Subject: "Physiologie",    Chapter: "Herzerregung",    Length: "4698",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/DAa1NM/article/yp0dHS",    Error: 0}, {        Day: 31,    Importance: 3,    Subject: "Physiologie",    Chapter: "Herzmechanik",    Length: "1489",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/DAa1NM/article/xL0E-g",    Error: 0}, {        Day: 31,    Importance: 4,    Subject: "Physiologie",    Chapter: "Aufbau und Funktion der Blutgefäße",    Length: "2002",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/DAa1NM/article/go0FYS",    Error: 0}, {        Day: 31,    Importance: 5,    Subject: "Physiologie",    Chapter: "Kreislaufregulation",    Length: "639",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/DAa1NM/article/po0L1S",    Error: 0}, {        Day: 32,    Importance: 1,    Subject: "Physiologie",    Chapter: "Atemwege und Lunge",    Length: "4451",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/wAahNM/article/6o0j1S",    Error: 0}, {        Day: 32,    Importance: 2,    Subject: "Physiologie",    Chapter: "Atemmechanik",    Length: "1509",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/wAahNM/article/A60RnS",    Error: 0}, {        Day: 32,    Importance: 3,    Subject: "Physiologie",    Chapter: "Leistungsphysiologie und Altern",    Length: "2417",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/wAahNM/article/h60ckS",    Error: 0}, {        Day: 33,    Importance: 1,    Subject: "Physiologie",    Chapter: "Übersicht Ernährung (Vorklinik)",    Length: "895",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/X609jS",    Error: 0}, {        Day: 33,    Importance: 2,    Subject: "Physiologie",    Chapter: "Verdauung und Resorption von Kohlenhydraten",    Length: "643",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/w60hMS#Zc276b8dd3fe35b1b1ac8fd33ca87f4b9",    Error: 0}, {        Day: 33,    Importance: 3,    Subject: "Physiologie",    Chapter: "Aminosäuren und Proteine - Verdauung und Resorption",    Length: "623",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/Jo0s1S#Z0b4b9de77128fdd87924ab20f2cb41ab",    Error: 0}, {        Day: 33,    Importance: 4,    Subject: "Physiologie",    Chapter: "Lipidverdauung und -resorption",    Length: "384",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/D601MS#Z2cf9dbbf074c93b9bfc57b72b4eca782",    Error: 0}, {        Day: 33,    Importance: 5,    Subject: "Physiologie",    Chapter: "Fettsäuren und Triacylglycerine - Verdauung und Resorption",    Length: "140",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/B60zMS#Zf47efcc8f7969a759b7b57b4d5f6dc1d",    Error: 0}, {        Day: 33,    Importance: 6,    Subject: "Physiologie",    Chapter: "Verdauung, Resorption, Transport und Ausscheidung von Cholesterin",    Length: "337",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/y60dnS#Z127cb2e2af5726d7989fee90c3019ce9",    Error: 0}, {        Day: 33,    Importance: 7,    Subject: "Physiologie",    Chapter: "Mineralstoffe",    Length: "352",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/-60DnS",    Error: 0}, {        Day: 33,    Importance: 8,    Subject: "Physiologie",    Chapter: "Energie- und Wärmehaushalt",    Length: "2525",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/wK0hiS",    Error: 0}, {        Day: 33,    Importance: 9,    Subject: "Physiologie",    Chapter: "Übersicht des Verdauungssystems",    Length: "2678",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/qK0ChS",    Error: 0}, {        Day: 33,    Importance: 10,    Subject: "Physiologie",    Chapter: "Salzsäuresekretion",    Length: "205",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/XK09US#Z43f006cb72aaf5951d8329fa675cd9b2",    Error: 0}, {        Day: 33,    Importance: 11,    Subject: "Physiologie",    Chapter: "Magen - Funktion",    Length: "205",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/XK09US#Z31adbc9348c3258b6689ac7993f8dfb2",    Error: 0}, {        Day: 33,    Importance: 12,    Subject: "Physiologie",    Chapter: "Funktion des Kolons",    Length: "427",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/rK0f3S#Zebce2761d51e17f9a68f90911dd36b5f",    Error: 0}, {        Day: 33,    Importance: 13,    Subject: "Physiologie",    Chapter: "Pankreassekret",    Length: "825",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/9AaNNM/article/2K0TfS#Z37891fdf34ce330356e6ca0b19c3e7cd",    Error: 0}, {        Day: 34,    Importance: 1,    Subject: "Physiologie",    Chapter: "Blut und Blutzellen",    Length: "3027",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/CAaqNM/article/LK0wSS",    Error: 0}, {        Day: 34,    Importance: 2,    Subject: "Physiologie",    Chapter: "Erythrozyten",    Length: "1660",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/CAaqNM/article/960NMS",    Error: 0}, {        Day: 34,    Importance: 3,    Subject: "Physiologie",    Chapter: "Hämoglobin",    Length: "659",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/CAaqNM/article/C60qMS",    Error: 0}, {        Day: 34,    Importance: 4,    Subject: "Physiologie",    Chapter: "Gastransport im Blut",    Length: "1882",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/CAaqNM/article/Np0-pS",    Error: 0}, {        Day: 34,    Importance: 5,    Subject: "Physiologie",    Chapter: "Blutstillung und Blutgerinnung",    Length: "1553",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/CAaqNM/article/_K05QS",    Error: 0}, {        Day: 35,    Importance: 1,    Subject: "Physiologie",    Chapter: "Einführung in die Immunologie",    Length: "762",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/xAaENM/article/K60UNS",    Error: 0}, {        Day: 35,    Importance: 2,    Subject: "Physiologie",    Chapter: "Unspezifisches Immunsystem",    Length: "1282",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/xAaENM/article/660jNS",    Error: 0}, {        Day: 35,    Importance: 3,    Subject: "Physiologie",    Chapter: "Spezifisches Immunsystem",    Length: "1390",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/xAaENM/article/p60LNS",    Error: 0}, {        Day: 35,    Importance: 4,    Subject: "Physiologie",    Chapter: "Gewebshormone",    Length: "3800",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/xAaENM/article/V60GPS",    Error: 0}, {        Day: 35,    Importance: 5,    Subject: "Physiologie",    Chapter: "Lymphatisches System",    Length: "1332",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/xAaENM/article/gp0FKS",    Error: 0}, {        Day: 36,    Importance: 1,    Subject: "Physiologie",    Chapter: "Nierendurchblutung und glomeruläre Filtration",    Length: "1720",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/BAazNM/article/bJ0HsS",    Error: 0}, {        Day: 36,    Importance: 2,    Subject: "Physiologie",    Chapter: "Tubuläre Transportprozesse",    Length: "300",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/BAazNM/article/_605nS",    Error: 0}, {        Day: 36,    Importance: 3,    Subject: "Physiologie",    Chapter: "Wasser- und Elektrolythaushalt",    Length: "1473",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/BAazNM/article/lo0vXS",    Error: 0}, {        Day: 36,    Importance: 4,    Subject: "Physiologie",    Chapter: "Säure-Basen-Haushalt",    Length: "3027",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/BAazNM/article/Io0YWS",    Error: 0}, {        Day: 37,    Importance: 1,    Subject: "Physiologie",    Chapter: "Allgemeine Hormoneigenschaften",    Length: "257",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/yAadmM/article/IK0Y3S",    Error: 0}, {        Day: 37,    Importance: 2,    Subject: "Physiologie",    Chapter: "Hypophyse",    Length: "2095",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/yAadmM/article/jK0_TS",    Error: 0}, {        Day: 37,    Importance: 3,    Subject: "Physiologie",    Chapter: "Schilddrüse",    Length: "2228",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/yAadmM/article/bK0HUS",    Error: 0}, {        Day: 37,    Importance: 4,    Subject: "Physiologie",    Chapter: "Nebenschilddrüsen- Funktion: Calcium- und Phosphathaushalt",    Length: "692",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/yAadmM/article/Op0IpS#Z7f0406d677e59dbc39674e6b00a64597",    Error: 0}, {        Day: 37,    Importance: 5,    Subject: "Physiologie",    Chapter: "Nebenniere",    Length: "3694",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/yAadmM/article/S60y4S",    Error: 0}, {        Day: 37,    Importance: 6,    Subject: "Physiologie",    Chapter: "Sexualhormone",    Length: "3267",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/yAadmM/article/zo0reS",    Error: 0}, {        Day: 37,    Importance: 7,    Subject: "Physiologie",    Chapter: "Pankreashormone",    Length: "1322",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/yAadmM/article/kp0mpS",    Error: 0}, {        Day: 38,    Importance: 1,    Subject: "Physiologie",    Chapter: "Ovar",    Length: "1465",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/m60VlS",    Error: 0}, {        Day: 38,    Importance: 2,    Subject: "Physiologie",    Chapter: "Tuba uterina - Funktion",    Length: "140",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/M60MlS#Z898aa87cd246d26574dfb9b16ae55666",    Error: 0}, {        Day: 38,    Importance: 3,    Subject: "Physiologie",    Chapter: "Spermatogenese",    Length: "673",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/ep0xoS#Zc7759023fd476b2c1ae5197a66d40462",    Error: 0}, {        Day: 38,    Importance: 4,    Subject: "Physiologie",    Chapter: "Prostata, Bläschendrüse und Cowper-Drüse",    Length: "1193",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/dp0ooS",    Error: 0}, {        Day: 38,    Importance: 5,    Subject: "Physiologie",    Chapter: "Penis, Erektion und Ejakulation - sexuelle Erregung und Erektion",    Length: "341",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/Vp0GoS#Zf59ffbaf18ab7f55a693a0ef3922b9cd",    Error: 0}, {        Day: 38,    Importance: 6,    Subject: "Physiologie",    Chapter: "Ejakulation",    Length: "728",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/Vp0GoS#Zeb9a6785b3cb002f32087f5a253c12f8",    Error: 0}, {        Day: 38,    Importance: 7,    Subject: "Physiologie",    Chapter: "Geschlechtsentwicklung - Geschlechtsreifung bei Mann und Frau (Pubertät)",    Length: "646",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/Qo0ubS#Zcaa5b0211aa19b875fb4b606d8fdf536",    Error: 0}, {        Day: 38,    Importance: 8,    Subject: "Physiologie",    Chapter: "Sexualität und Sexualmedizin",    Length: "328",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/d60oPS",    Error: 0}, {        Day: 38,    Importance: 9,    Subject: "Physiologie",    Chapter: "Von der Befruchtung zur Implantation",    Length: "1123",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/Dp017S",    Error: 0}, {        Day: 38,    Importance: 10,    Subject: "Physiologie",    Chapter: "Embryonalentwicklung",    Length: "1658",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/wp0h7S",    Error: 0}, {        Day: 38,    Importance: 11,    Subject: "Physiologie",    Chapter: "Plazenta, Nabelschnur und Amnion",    Length: "1360",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/Cp0q7S",    Error: 0}, {        Day: 38,    Importance: 12,    Subject: "Physiologie",    Chapter: "Physiologische Aspekte prä- und postnatal",    Length: "1765",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/AAaRmM/article/9p0N7S",    Error: 0}, {        Day: 39,    Importance: 1,    Subject: "Physiologie",    Chapter: "Nervengewebe, Synapsen und Transmitter",    Length: "2609",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM/article/tK0XRS",    Error: 0}, {        Day: 39,    Importance: 2,    Subject: "Physiologie",    Chapter: "Vegetatives Nervensystem",    Length: "1356",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM/article/oo001S",    Error: 0}, {        Day: 39,    Importance: 3,    Subject: "Physiologie",    Chapter: "Spinale Leitungsbahnen und Reflexe",    Length: "2821",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM/article/zp0rHS",    Error: 0}, {        Day: 39,    Importance: 4,    Subject: "Physiologie",    Chapter: "Hirnstamm- Hirnstamm-übegreifend: Formatio reticularis",    Length: "898",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM/article/yo0deS#Z1d6b0a58782103ee8dfeea6f04dcf9f3",    Error: 0}, {        Day: 39,    Importance: 5,    Subject: "Physiologie",    Chapter: "Funktion des Kleinhirns",    Length: "210",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM/article/YK0nUS#Z4fbeababed70bfb63ef674a2924e1779",    Error: 0}, {        Day: 39,    Importance: 6,    Subject: "Physiologie",    Chapter: "Zwischenhirn",    Length: "1412",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM/article/zK0rQS",    Error: 0}, {        Day: 39,    Importance: 7,    Subject: "Physiologie",    Chapter: "Großhirn",    Length: "2326",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM/article/060ejS",    Error: 0}, {        Day: 39,    Importance: 8,    Subject: "Physiologie",    Chapter: "Meningen, Liquorräume und Blut-Hirn-Schranke",    Length: "839",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM/article/ZJ0ZsS",    Error: 0}, {        Day: 39,    Importance: 9,    Subject: "Physiologie",    Chapter: "Neurophysiologische Untersuchungen und Schlaf",    Length: "1833",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM/article/0J0esS",    Error: 0}, {        Day: 39,    Importance: 10,    Subject: "Physiologie",    Chapter: "Limbisches System und Gedächtnis",    Length: "573",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/_Aa5mM/article/U60b4S",    Error: 0}, {        Day: 40,    Importance: 1,    Subject: "Physiologie",    Chapter: "Grundlagen der Sensorik",    Length: "468",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/sK0t3S",    Error: 0}, {        Day: 40,    Importance: 2,    Subject: "Physiologie",    Chapter: "Auge und Orbita",    Length: "1979",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/Ho0KWS",    Error: 0}, {        Day: 40,    Importance: 3,    Subject: "Physiologie",    Chapter: "Visuelles System",    Length: "791",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/mp0VJS",    Error: 0}, {        Day: 40,    Importance: 4,    Subject: "Physiologie",    Chapter: "Olfaktorisches und gustatorisches System",    Length: "1943",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/xo0EVS",    Error: 0}, {        Day: 40,    Importance: 5,    Subject: "Physiologie",    Chapter: "Ohr",    Length: "2744",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/Eo08dS",    Error: 0}, {        Day: 40,    Importance: 6,    Subject: "Physiologie",    Chapter: "Auditives System",    Length: "1998",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/Up0bKS",    Error: 0}, {        Day: 40,    Importance: 7,    Subject: "Physiologie",    Chapter: "Vestibuläres System",    Length: "1899",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/Go0BWS",    Error: 0}, {        Day: 40,    Importance: 8,    Subject: "Physiologie",    Chapter: "Sprechen - Grundlagen",    Length: "498",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/mK0VSS#Z75aab1f963704ac5f7a38ef908ff855f",    Error: 0}, {        Day: 40,    Importance: 9,    Subject: "Physiologie",    Chapter: "Sprache - Grundlagen",    Length: "498",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/mK0VSS#Z42366531de9a059d0b66d8b7bf3909a3",    Error: 0}, {        Day: 40,    Importance: 10,    Subject: "Physiologie",    Chapter: "Haut und Hautanhangsgebilde",    Length: "2635",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/so0tWS",    Error: 0}, {        Day: 40,    Importance: 11,    Subject: "Physiologie",    Chapter: "Taktiles System",    Length: "2421",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/0K0eUS",    Error: 0}, {        Day: 40,    Importance: 12,    Subject: "Physiologie",    Chapter: "Nozizeptives System",    Length: "2672",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/zAarmM/article/Do01VS",    Error: 0}, {        Day: 41,    Importance: 1,    Subject: "Psychologie/ Soziologie",    Chapter: "Medizinische Statistik und Testtheorie",    Length: "3823",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/kR0mMf/-AaDmM/article/Ip0YIS",    Error: 0}, {        Day: 41,    Importance: 2,    Subject: "Psychologie/ Soziologie",    Chapter: "Grundlagen wissenschaftlicher Studien",    Length: "1909",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/-AaDmM/article/rp0fIS",    Error: 0}, {        Day: 42,    Importance: 1,    Subject: "Psychologie/ Soziologie",    Chapter: "Grundlagen der Demografie und Soziologie",    Length: "1094",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/Z_aZ5M/article/Gp0BIS",    Error: 0}, {        Day: 42,    Importance: 2,    Subject: "Psychologie/ Soziologie",    Chapter: "Gesundheit und Krankheit",    Length: "414",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/kR0mMf/Z_aZ5M/article/_o05eS",    Error: 0}, {        Day: 42,    Importance: 3,    Subject: "Psychologie/ Soziologie",    Chapter: "Patientenversorgung und Gesundheitssystem",    Length: "2511",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/Z_aZ5M/article/-K0DQS",    Error: 0}, {        Day: 42,    Importance: 4,    Subject: "Psychologie/ Soziologie",    Chapter: "Prävention und Gesundheitsförderung",    Length: "1538",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/kR0mMf/Z_aZ5M/article/HK0K3S",    Error: 0}, {        Day: 43,    Importance: 1,    Subject: "Psychologie/ Soziologie",    Chapter: "Beziehung zwischen Ärzt:innen und Patient:innen",    Length: "3503",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/kR0mMf/0_ae5M/article/OK0IgS",    Error: 0}, {        Day: 43,    Importance: 2,    Subject: "Psychologie/ Soziologie",    Chapter: "Untersuchung und Gespräch",    Length: "536",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/0_ae5M/article/3K0STS",    Error: 0}, {        Day: 43,    Importance: 3,    Subject: "Psychologie/ Soziologie",    Chapter: "Ärztliche Urteilsbildung und Entscheidung",    Length: "821",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/0_ae5M/article/iK0JTS",    Error: 0}, {        Day: 44,    Importance: 1,    Subject: "Psychologie/ Soziologie",    Chapter: "Lernen, Kognition und Entwicklung",    Length: "3859",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/kR0mMf/a_aQ5M/article/7p04IS",    Error: 0}, {        Day: 44,    Importance: 2,    Subject: "Psychologie/ Soziologie",    Chapter: "Emotion und Motivation",    Length: "1150",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/a_aQ5M/article/Hp0KIS",    Error: 0}, {        Day: 44,    Importance: 3,    Subject: "Psychologie/ Soziologie",    Chapter: "Persönlichkeit und Verhaltensstile",    Length: "915",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/a_aQ5M/article/sp0tIS",    Error: 0}, {        Day: 44,    Importance: 4,    Subject: "Psychologie/ Soziologie",    Chapter: "Stressmodelle",    Length: "908",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/a_aQ5M/article/Ep08rS",    Error: 0}, {        Day: 44,    Importance: 5,    Subject: "Psychologie/ Soziologie",    Chapter: "Verhaltens- und psychodynamische Modelle",    Length: "979",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/a_aQ5M/article/UK0bfS",    Error: 0}, {        Day: 44,    Importance: 6,    Subject: "Psychologie/ Soziologie",    Chapter: "Psychotherapeutische Verfahren (Vorklinik)",    Length: "340",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/kR0mMf/a_aQ5M/article/BK0ziS",    Error: 0}, {        Day: 44,    Importance: 7,    Subject: "Psychologie/ Soziologie",    Chapter: "Umgang mit dem Sterben",    Length: "263",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/kR0mMf/a_aQ5M/article/W60PPS",    Error: 0}, {        Day: 45,    Importance: 1,    Subject: "Wiederholung: Physikum 2023/H Tag 1",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/Y_an5M/article/LZawXQ",    Error: 0}, {        Day: 46,    Importance: 1,    Subject: "Wiederholung: Physikum 2023/H Tag 2",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/b_aH5M/article/LZawXQ",    Error: 0}, {        Day: 47,    Importance: 1,    Subject: "Generalprobe: Physikum 2024/F Tag 1",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/X_a95M/article/LZawXQ",    Error: 0}, {        Day: 48,    Importance: 1,    Subject: "Generalprobe: Physikum 2024/F Tag 2",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/c_aaMM/article/LZawXQ",    Error: 0}, {        Day: 49,    Importance: 1,    Subject: "Generalprobe: Physikum 2024/H Tag 1",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/1_a2MM/article/LZawXQ",    Error: 0}, {        Day: 50,    Importance: 1,    Subject: "Generalprobe: Physikum 2024/H Tag 2",    Chapter: "Lernplan Physikum Tage 45 bis 50",    Length: "58",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/kR0mMf/W_aPMM/article/LZawXQ",    Error: 0
    }],Mo = {
        lastUpdated: B0,    heading: V0,    numberOfDays: Q0,    pageTickValues: F0,    yFragenDomain: X0,    fragenzahl: $0,    dayUrls: q0,    data: J0
    },eu = "20.05.2025",tu = "100 Tage Lernplan M2 - H2025",ru = 100,au = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],su = 100,nu = [46, 46, 61, 83, 50, 50, 68, 90, 64, 63, 89, 85, 70, 88, 46, 46, 90, 62, 102, 88, 78, 61, 77, 45, 68, 76, 87, 75, 50, 53, 42, 52, 63, 75, 109, 66, 82, 90, 56, 101, 92, 67, 77, 60, 44, 57, 72, 49, 54, 60, 67, 74, 72, 70, 68, 67, 72, 77, 52, 49, 74, 74, 91, 94, 102, 95, 84, 96, 115, 92, 93, 91, 96, 38, 35, 40, 36, 35, 101, 76, 72, 69, 53, 108, 90, 103, 103, 105, 105, 104, 103, 105, 105, 105, 103, 104, 103, 105, 106, 105],ou = ["https://next.amboss.com/de/courses/KR0ULf/eZYx0n", "https://next.amboss.com/de/courses/KR0ULf/UZYban", "https://next.amboss.com/de/courses/KR0ULf/2ZYTan", "https://next.amboss.com/de/courses/KR0ULf/fZYkan", "https://next.amboss.com/de/courses/KR0ULf/TZY6an", "https://next.amboss.com/de/courses/KR0ULf/gZYFan", "https://next.amboss.com/de/courses/KR0ULf/SZYyan", "https://next.amboss.com/de/courses/KR0ULf/hZYcYn", "https://next.amboss.com/de/courses/KR0ULf/3ZYSYn", "https://next.amboss.com/de/courses/KR0ULf/RZYlYn", "https://next.amboss.com/de/courses/KR0ULf/iZYJYn", "https://next.amboss.com/de/courses/KR0ULf/QZYuYn", "https://next.amboss.com/de/courses/KR0ULf/jZY_Yn", "https://next.amboss.com/de/courses/KR0ULf/PZYWbn", "https://next.amboss.com/de/courses/KR0ULf/4ZY3bn", "https://next.amboss.com/de/courses/KR0ULf/kZYmbn", "https://next.amboss.com/de/courses/KR0ULf/OZYIbn", "https://next.amboss.com/de/courses/KR0ULf/lZYvbn", "https://next.amboss.com/de/courses/KR0ULf/NZY-bn", "https://next.amboss.com/de/courses/KR0ULf/mZYVXn", "https://next.amboss.com/de/courses/KR0ULf/5ZYiXn", "https://next.amboss.com/de/courses/KR0ULf/MZYMXn", "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn", "https://next.amboss.com/de/courses/KR0ULf/LZYwXn", "https://next.amboss.com/de/courses/KR0ULf/oZY0cn", "https://next.amboss.com/de/courses/KR0ULf/KZYUcn", "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn", "https://next.amboss.com/de/courses/KR0ULf/pZYLcn", "https://next.amboss.com/de/courses/KR0ULf/JZYscn", "https://next.amboss.com/de/courses/KR0ULf/qZYCcn", "https://next.amboss.com/de/courses/KR0ULf/IZYY1n", "https://next.amboss.com/de/courses/KR0ULf/rZYf1n", "https://next.amboss.com/de/courses/KR0ULf/7ZY41n", "https://next.amboss.com/de/courses/KR0ULf/HZYK1n", "https://next.amboss.com/de/courses/KR0ULf/sZYt1n", "https://next.amboss.com/de/courses/KR0ULf/GZYB1n", "https://next.amboss.com/de/courses/KR0ULf/tZYXWn", "https://next.amboss.com/de/courses/KR0ULf/FZYgWn", "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn", "https://next.amboss.com/de/courses/KR0ULf/uZYpWn", "https://next.amboss.com/de/courses/KR0ULf/EZY8Wn", "https://next.amboss.com/de/courses/KR0ULf/vZYAWn", "https://next.amboss.com/de/courses/KR0ULf/DZY1dn", "https://next.amboss.com/de/courses/KR0ULf/wZYhdn", "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn", "https://next.amboss.com/de/courses/KR0ULf/CZYqdn", "https://next.amboss.com/de/courses/KR0ULf/xZYEdn", "https://next.amboss.com/de/courses/KR0ULf/BZYzdn", "https://next.amboss.com/de/courses/KR0ULf/yZYdVn", "https://next.amboss.com/de/courses/KR0ULf/AZYRVn", "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn", "https://next.amboss.com/de/courses/KR0ULf/zZYrVn", "https://next.amboss.com/de/courses/KR0ULf/-ZYDVn", "https://next.amboss.com/de/courses/KR0ULf/Z0YZen", "https://next.amboss.com/de/courses/KR0ULf/00Yeen", "https://next.amboss.com/de/courses/KR0ULf/a0YQen", "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen", "https://next.amboss.com/de/courses/KR0ULf/b0YHen", "https://next.amboss.com/de/courses/KR0ULf/X0Y9en", "https://next.amboss.com/de/courses/KR0ULf/c0YaUn", "https://next.amboss.com/de/courses/KR0ULf/10Y2Un", "https://next.amboss.com/de/courses/KR0ULf/W0YPUn", "https://next.amboss.com/de/courses/KR0ULf/d0YoUn", "https://next.amboss.com/de/courses/KR0ULf/V0YGUn", "https://next.amboss.com/de/courses/KR0ULf/e0YxUn", "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n", "https://next.amboss.com/de/courses/KR0ULf/20YT2n", "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n", "https://next.amboss.com/de/courses/KR0ULf/T0Y62n", "https://next.amboss.com/de/courses/KR0ULf/g0YF2n", "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n", "https://next.amboss.com/de/courses/KR0ULf/h0Ycfn", "https://next.amboss.com/de/courses/KR0ULf/30YSfn", "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn", "https://next.amboss.com/de/courses/KR0ULf/i0YJfn", "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn", "https://next.amboss.com/de/courses/KR0ULf/j0Y_fn", "https://next.amboss.com/de/courses/KR0ULf/P0YWTn", "https://next.amboss.com/de/courses/KR0ULf/40Y3Tn", "https://next.amboss.com/de/courses/KR0ULf/k0YmTn", "https://next.amboss.com/de/courses/KR0ULf/O0YITn", "https://next.amboss.com/de/courses/KR0ULf/l0YvTn", "https://next.amboss.com/de/courses/KR0ULf/N0Y-Tn", "https://next.amboss.com/de/courses/KR0ULf/m0YVgn", "https://next.amboss.com/de/courses/KR0ULf/50Yign", "https://next.amboss.com/de/courses/KR0ULf/M0YMgn", "https://next.amboss.com/de/courses/KR0ULf/n0Y7gn", "https://next.amboss.com/de/courses/KR0ULf/L0Ywgn", "https://next.amboss.com/de/courses/KR0ULf/o0Y0Sn", "https://next.amboss.com/de/courses/KR0ULf/K0YUSn", "https://next.amboss.com/de/courses/KR0ULf/60YjSn", "https://next.amboss.com/de/courses/KR0ULf/p0YLSn", "https://next.amboss.com/de/courses/KR0ULf/J0YsSn", "https://next.amboss.com/de/courses/KR0ULf/q0YCSn", "https://next.amboss.com/de/courses/KR0ULf/I0YYhn", "https://next.amboss.com/de/courses/KR0ULf/r0Yfhn", "https://next.amboss.com/de/courses/KR0ULf/70Y4hn", "https://next.amboss.com/de/courses/KR0ULf/H0YKhn", "https://next.amboss.com/de/courses/KR0ULf/s0Ythn", "https://next.amboss.com/de/courses/KR0ULf/G0YBhn"],cu = [
        {
        Day: 1,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Handbuch - Vorbereitung auf das Zweite Staatsexamen",    Length: "2633",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/Wn0PHg",    Error: 0}, {        Day: 1,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Kreuztipps zum Zweiten Staatsexamen",    Length: "3508",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/UL0bCg",    Error: 0}, {        Day: 1,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Untersuchungsmethoden in der Kardiologie",    Length: "1337",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/rM0fJg",    Error: 0}, {        Day: 1,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "EKG",    Length: "2814",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/pl0LBT",    Error: 0}, {        Day: 1,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Herzrhythmusstörungen",    Length: "1378",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/7S04af",    Error: 0}, {        Day: 1,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Supraventrikuläre Extrasystolen",    Length: "173",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/sS0taf",    Error: 0}, {        Day: 1,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Vorhofflimmern",    Length: "2183",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/GS0Baf",    Error: 0}, {        Day: 1,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Sick-Sinus-Syndrom",    Length: "244",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/HS0Kaf",    Error: 0}, {        Day: 1,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "AV-Block",    Length: "787",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/I50Ylg",    Error: 0}, {        Day: 1,    Importance: 10,    Subject: "Innere Medizin",    Chapter: "AV-Knoten-Reentrytachykardie",    Length: "423",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/tS0XYf",    Error: 0}, {        Day: 1,    Importance: 11,    Subject: "Innere Medizin",    Chapter: "Atrioventrikuläre Reentrytachykardie",    Length: "301",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/eZYx0n/article/FS0gYf",    Error: 0}, {        Day: 2,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Ventrikuläre Extrasystolen",    Length: "363",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/UZYban/article/8S0OYf",    Error: 0}, {        Day: 2,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Ventrikuläre Tachykardie",    Length: "607",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/UZYban/article/ES08Yf",    Error: 0}, {        Day: 2,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Kammerflattern und -flimmern",    Length: "281",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/UZYban/article/vS0AYf",    Error: 0}, {        Day: 2,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Herzschrittmacher",    Length: "1370",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/UZYban/article/ql0CBT",    Error: 0}, {        Day: 2,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Synkope",    Length: "1395",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/UZYban/article/b50Hig",    Error: 0}, {        Day: 2,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Subclavian-Steal-Syndrom",    Length: "347",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/UZYban/article/bM0HMg",    Error: 0}, {        Day: 3,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Dyslipidämien",    Length: "904",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/2ZYTan/article/on008g",    Error: 0}, {        Day: 3,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Atherosklerose und kardiovaskuläre Prävention",    Length: "1293",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/2ZYTan/article/s70tMh",    Error: 0}, {        Day: 3,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Koronare Herzkrankheit",    Length: "2077",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/2ZYTan/article/DS01bf",    Error: 0}, {        Day: 3,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Thoraxschmerz",    Length: "535",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/2ZYTan/article/ML0Myg",    Error: 0}, {        Day: 3,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Akutes Koronarsyndrom",    Length: "925",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/2ZYTan/article/p70L5h",    Error: 0}, {        Day: 3,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Myokardinfarkt",    Length: "3469",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/KR0ULf/2ZYTan/article/wS0hbf",    Error: 0}, {        Day: 3,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Herzkatheteruntersuchung",    Length: "1485",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/2ZYTan/article/rl0fyT",    Error: 0}, {        Day: 4,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Herzinsuffizienz",    Length: "3133",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/fZYkan/article/rS0faf",    Error: 0}, {        Day: 4,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Kardiomyopathien",    Length: "904",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/fZYkan/article/yS0dXf",    Error: 0}, {        Day: 4,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Dilatative Kardiomyopathie",    Length: "640",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/fZYkan/article/AS0RXf",    Error: 0}, {        Day: 4,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Hypertrophe Kardiomyopathie",    Length: "671",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/fZYkan/article/_S05Xf",    Error: 0}, {        Day: 4,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Herzklappenerkrankungen",    Length: "957",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/fZYkan/article/-S0DXf",    Error: 0}, {        Day: 4,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Aortenklappenstenose",    Length: "1353",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/fZYkan/article/Zh0Zcf",    Error: 0}, {        Day: 4,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Aortenklappeninsuffizienz",    Length: "550",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/fZYkan/article/0h0ecf",    Error: 0}, {        Day: 4,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Mitralklappenstenose",    Length: "656",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/fZYkan/article/Yh0ncf",    Error: 0}, {        Day: 4,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "Mitralklappeninsuffizienz",    Length: "826",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/fZYkan/article/PI0W1h",    Error: 0}, {        Day: 5,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Infektiöse Endokarditis",    Length: "2220",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/TZY6an/article/CS0qbf",    Error: 0}, {        Day: 5,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Rheumatisches Fieber",    Length: "881",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/TZY6an/article/9S0Nbf",    Error: 0}, {        Day: 5,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Myokarditis",    Length: "1519",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/TZY6an/article/xS0Ebf",    Error: 0}, {        Day: 5,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Perikarditis",    Length: "1980",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/TZY6an/article/Gu0Bs3",    Error: 0}, {        Day: 5,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Coxsackievirus-Infektionen",    Length: "609",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/TZY6an/article/E408OT",    Error: 0}, {        Day: 5,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Perikarderguss und Perikardtamponade",    Length: "820",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/TZY6an/article/uh0pff",    Error: 0}, {        Day: 6,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Arterielle Hypertonie",    Length: "3641",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/gZYFan/article/Xh09cf",    Error: 0}, {        Day: 6,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Pulmonale Hypertonie",    Length: "1309",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/gZYFan/article/w50hmg",    Error: 0}, {        Day: 6,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Varikosis und chronisch-venöse Insuffizienz",    Length: "1050",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/gZYFan/article/gh0FWf",    Error: 0}, {        Day: 6,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Phlebothrombose",    Length: "2185",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/gZYFan/article/fh0kWf",    Error: 0}, {        Day: 6,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Lungenembolie",    Length: "2125",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/gZYFan/article/oh00Uf",    Error: 0}, {        Day: 7,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Periphere arterielle Verschlusskrankheit",    Length: "1931",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/SZYyan/article/ch0a1f",    Error: 0}, {        Day: 7,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Erythrozytenmorphologie und Hämoglobinvarianten",    Length: "604",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/SZYyan/article/WS0PA2",    Error: 0}, {        Day: 7,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Anämie",    Length: "1321",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/SZYyan/article/6T0j72",    Error: 0}, {        Day: 7,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Eisenmangel",    Length: "1424",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/SZYyan/article/pT0L72",    Error: 0}, {        Day: 7,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Hämolytische Anämie",    Length: "1001",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/SZYyan/article/rT0fH2",    Error: 0}, {        Day: 7,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Kugelzellanämie",    Length: "425",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/SZYyan/article/7T04H2",    Error: 0}, {        Day: 7,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Glucose-6-phosphat-Dehydrogenase-Mangel",    Length: "519",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/SZYyan/article/HT0KH2",    Error: 0}, {        Day: 7,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Sichelzellkrankheit",    Length: "669",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/SZYyan/article/GT0BH2",    Error: 0}, {        Day: 7,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "Thalassämie",    Length: "947",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/SZYyan/article/tT0Xs2",    Error: 0}, {        Day: 7,    Importance: 10,    Subject: "Innere Medizin",    Chapter: "Myelodysplastische Syndrome",    Length: "677",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/SZYyan/article/3T0Sq2",    Error: 0}, {        Day: 8,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Akute Leukämien",    Length: "1774",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/hZYcYn/article/iT0Jq2",    Error: 0}, {        Day: 8,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Myeloproliferative Neoplasien",    Length: "825",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/hZYcYn/article/lT0vI2",    Error: 0}, {        Day: 8,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Chronische myeloische Leukämie",    Length: "1100",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/hZYcYn/article/PT0WI2",    Error: 0}, {        Day: 8,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Polycythaemia vera",    Length: "688",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/hZYcYn/article/kT0mI2",    Error: 0}, {        Day: 8,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Hodgkin-Lymphom",    Length: "1481",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/hZYcYn/article/mT0Vr2",    Error: 0}, {        Day: 8,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Non-Hodgkin-Lymphome",    Length: "1580",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/hZYcYn/article/NT0-I2",    Error: 0}, {        Day: 8,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Multiples Myelom",    Length: "1511",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/hZYcYn/article/5T0ir2",    Error: 0}, {        Day: 8,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Chronische lymphatische Leukämie",    Length: "1188",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/hZYcYn/article/jT0_q2",    Error: 0}, {        Day: 8,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "MALT-Lymphom",    Length: "372",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/hZYcYn/article/LT0wr2",    Error: 0}, {        Day: 8,    Importance: 10,    Subject: "Innere Medizin",    Chapter: "Kutane Lymphome",    Length: "654",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/hZYcYn/article/oT0072",    Error: 0}, {        Day: 9,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Blutgerinnung und hämorrhagische Diathesen",    Length: "2269",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/3ZYSYn/article/8T0Os2",    Error: 0}, {        Day: 9,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Von-Willebrand-Syndrom",    Length: "534",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/3ZYSYn/article/V90GmR",    Error: 0}, {        Day: 9,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Hämophilie",    Length: "482",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/3ZYSYn/article/uT0ps2",    Error: 0}, {        Day: 9,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Antiphospholipid-Syndrom",    Length: "571",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/3ZYSYn/article/hR0c5f",    Error: 0}, {        Day: 9,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Thrombozytopenien",    Length: "818",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/3ZYSYn/article/wT0hG2",    Error: 0}, {        Day: 9,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Thrombotische Mikroangiopathie",    Length: "651",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/3ZYSYn/article/xT0EG2",    Error: 0}, {        Day: 9,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Splenomegalie",    Length: "345",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/3ZYSYn/article/KT0U72",    Error: 0}, {        Day: 9,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Asplenie",    Length: "527",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/3ZYSYn/article/v40AOT",    Error: 0}, {        Day: 10,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Klinische Untersuchung der Lunge",    Length: "724",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/RZYlYn/article/tl0XAT",    Error: 0}, {        Day: 10,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Lungenfunktionsuntersuchung",    Length: "1147",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/RZYlYn/article/Fl0gAT",    Error: 0}, {        Day: 10,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Akute Bronchitis",    Length: "532",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/RZYlYn/article/hh0cdf",    Error: 0}, {        Day: 10,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Pneumonie",    Length: "2818",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/KR0ULf/RZYlYn/article/mh0Vef",    Error: 0}, {        Day: 10,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Akute unkomplizierte Atemwegsinfektionen",    Length: "382",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/RZYlYn/article/Ax0R_R",    Error: 0}, {        Day: 10,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Legionellose",    Length: "588",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/RZYlYn/article/Vf0GO2",    Error: 0}, {        Day: 10,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Pneumocystis-jirovecii-Pneumonie",    Length: "540",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/RZYlYn/article/If0Yn2",    Error: 0}, {        Day: 10,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Tuberkulose",    Length: "3499",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/RZYlYn/article/5h0ief",    Error: 0}, {        Day: 10,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "Sarkoidose",    Length: "1416",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/RZYlYn/article/Mh0Mef",    Error: 0}, {        Day: 11,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Lungenkarzinom",    Length: "2821",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/KR0ULf/iZYJYn/article/nh07ef",    Error: 0}, {        Day: 11,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Pleuraerguss",    Length: "1492",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/iZYJYn/article/F50gNg",    Error: 0}, {        Day: 11,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Atelektase",    Length: "412",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/iZYJYn/article/sM0tJg",    Error: 0}, {        Day: 11,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Asthma bronchiale",    Length: "2224",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/iZYJYn/article/Ph0WVf",    Error: 0}, {        Day: 11,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Chronisch-obstruktive Lungenerkrankung",    Length: "3091",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/iZYJYn/article/3h0Sdf",    Error: 0}, {        Day: 11,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Interstitielle Lungenparenchymerkrankungen",    Length: "614",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/iZYJYn/article/Nh0-Vf",    Error: 0}, {        Day: 11,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Exogen-allergische Alveolitis",    Length: "564",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/iZYJYn/article/kh0mVf",    Error: 0}, {        Day: 11,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Schlafbezogene Atmungsstörungen",    Length: "858",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/iZYJYn/article/Lh0wef",    Error: 0}, {        Day: 11,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "Husten",    Length: "1561",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/iZYJYn/article/3L0Sxg",    Error: 0}, {        Day: 12,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Achalasie",    Length: "383",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/QZYuYn/article/ug0pC2",    Error: 0}, {        Day: 12,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Gastrointestinale Blutung",    Length: "1000",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/QZYuYn/article/ZS0Zy2",    Error: 0}, {        Day: 12,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Mallory-Weiss-Syndrom",    Length: "236",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/QZYuYn/article/9g0Nx2",    Error: 0}, {        Day: 12,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Gastroösophageale Refluxkrankheit",    Length: "1100",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/QZYuYn/article/vg0AC2",    Error: 0}, {        Day: 12,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Gastroduodenale Ulkuskrankheit",    Length: "1550",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/QZYuYn/article/zg0rB2",    Error: 0}, {        Day: 12,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Chronische Gastritis",    Length: "1305",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/QZYuYn/article/Ag0RB2",    Error: 0}, {        Day: 12,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Malassimilation",    Length: "680",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/QZYuYn/article/0S0ey2",    Error: 0}, {        Day: 12,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Zöliakie",    Length: "1951",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/QZYuYn/article/YS0ny2",    Error: 0}, {        Day: 12,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "Lactoseintoleranz",    Length: "519",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/QZYuYn/article/bS0Hy2",    Error: 0}, {        Day: 13,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Morbus Crohn",    Length: "2701",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/jZY_Yn/article/VS0GA2",    Error: 0}, {        Day: 13,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Colitis ulcerosa",    Length: "2113",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/jZY_Yn/article/eS0xA2",    Error: 0}, {        Day: 13,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Divertikulose, Divertikelkrankheit und Divertikulitis",    Length: "1957",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/jZY_Yn/article/1S02A2",    Error: 0}, {        Day: 13,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Reizdarmsyndrom",    Length: "405",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/jZY_Yn/article/XS09y2",    Error: 0}, {        Day: 13,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Gutartige Leberraumforderungen",    Length: "580",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/jZY_Yn/article/pS0L0f",    Error: 0}, {        Day: 13,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Leberabszess",    Length: "225",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/jZY_Yn/article/Lo0wcS",    Error: 0}, {        Day: 14,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Hepatitis A",    Length: "639",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/kS0m-2",    Error: 0}, {        Day: 14,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Hepatitis B und HBV-Infektion",    Length: "2476",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/OS0I-2",    Error: 0}, {        Day: 14,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Hepatitis C",    Length: "1603",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/lS0v-2",    Error: 0}, {        Day: 14,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Alkoholtoxischer Leberschaden",    Length: "1550",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/5S0iZf",    Error: 0}, {        Day: 14,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Autoimmunhepatitis",    Length: "565",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/JM0spg",    Error: 0}, {        Day: 14,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Primär biliäre Cholangitis",    Length: "511",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/MS0MZf",    Error: 0}, {        Day: 14,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Primär sklerosierende Cholangitis",    Length: "788",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/nS07Zf",    Error: 0}, {        Day: 14,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Morbus Wilson",    Length: "557",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/IS0Yaf",    Error: 0}, {        Day: 14,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "Hämochromatose",    Length: "596",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/qS0C0f",    Error: 0}, {        Day: 14,    Importance: 10,    Subject: "Innere Medizin",    Chapter: "Leberzirrhose",    Length: "2114",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/PS0W-2",    Error: 0}, {        Day: 14,    Importance: 11,    Subject: "Innere Medizin",    Chapter: "Portale Hypertension",    Length: "1146",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/PZYWbn/article/LS0wZf",    Error: 0}, {        Day: 15,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Ikterus und Cholestase",    Length: "1149",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/4ZY3bn/article/jS0_z2",    Error: 0}, {        Day: 15,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Akute Pankreatitis",    Length: "2144",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/4ZY3bn/article/SS0y_2",    Error: 0}, {        Day: 15,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Chronische Pankreatitis",    Length: "1454",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/4ZY3bn/article/hS0cz2",    Error: 0}, {        Day: 15,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Pankreaskarzinom",    Length: "1740",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/4ZY3bn/article/3S0Sz2",    Error: 0}, {        Day: 15,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Aszites",    Length: "1114",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/4ZY3bn/article/KS0U0f",    Error: 0}, {        Day: 16,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Hypophysenvorderlappeninsuffizienz",    Length: "810",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/kZYmbn/article/-T0Dt2",    Error: 0}, {        Day: 16,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Prolaktinom",    Length: "887",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/kZYmbn/article/0g0eF2",    Error: 0}, {        Day: 16,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Akromegalie",    Length: "536",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/kZYmbn/article/ag0QF2",    Error: 0}, {        Day: 16,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Nebennierenrindeninsuffizienz",    Length: "1041",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/kZYmbn/article/Ug0bu2",    Error: 0}, {        Day: 16,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Primärer Hyperaldosteronismus",    Length: "710",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/kZYmbn/article/2g0Tu2",    Error: 0}, {        Day: 16,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Cushing-Syndrom",    Length: "1011",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/kZYmbn/article/fg0ku2",    Error: 0}, {        Day: 16,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Phäochromozytom",    Length: "683",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/kZYmbn/article/Tg06u2",    Error: 0}, {        Day: 16,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Multiple endokrine Neoplasie",    Length: "279",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/kZYmbn/article/hg0cE2",    Error: 0}, {        Day: 17,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Struma",    Length: "640",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/OZYIbn/article/Yg0nF2",    Error: 0}, {        Day: 17,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Anti-Schilddrüsen-Antikörper",    Length: "259",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/OZYIbn/article/YM0nMg",    Error: 0}, {        Day: 17,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Hyperthyreose",    Length: "1805",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/OZYIbn/article/bg0HF2",    Error: 0}, {        Day: 17,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Hypothyreose",    Length: "1420",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/OZYIbn/article/cg0a82",    Error: 0}, {        Day: 17,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Hashimoto-Thyreoiditis",    Length: "808",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/OZYIbn/article/1g0282",    Error: 0}, {        Day: 17,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Thyreoiditis de Quervain",    Length: "356",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/OZYIbn/article/dg0o82",    Error: 0}, {        Day: 17,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Hyperparathyreoidismus",    Length: "1013",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/OZYIbn/article/gg0Fu2",    Error: 0}, {        Day: 18,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Metabolisches Syndrom",    Length: "732",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/lZYvbn/article/4g03v2",    Error: 0}, {        Day: 18,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Diabetes mellitus",    Length: "4905",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/KR0ULf/lZYvbn/article/3g0SE2",    Error: 0}, {        Day: 18,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Hyperglykämisches Koma",    Length: "1223",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/lZYvbn/article/jg0_E2",    Error: 0}, {        Day: 18,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Hypoglykämie",    Length: "767",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/lZYvbn/article/Pg0Wv2",    Error: 0}, {        Day: 19,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Diagnostik von Erkrankungen der Niere und der ableitenden Harnwege",    Length: "767",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/NZY-bn/article/kg0mv2",    Error: 0}, {        Day: 19,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Dehydratation",    Length: "472",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/NZY-bn/article/Ig0Y92",    Error: 0}, {        Day: 19,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Ödeme",    Length: "378",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/NZY-bn/article/SM0yLg",    Error: 0}, {        Day: 19,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Elektrolytstörungen Natrium",    Length: "1269",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/NZY-bn/article/rg0f92",    Error: 0}, {        Day: 19,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Elektrolytstörungen Kalium",    Length: "1102",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/NZY-bn/article/7g0492",    Error: 0}, {        Day: 19,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Elektrolytstörungen Calcium",    Length: "1971",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/NZY-bn/article/Hg0K92",    Error: 0}, {        Day: 19,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Akute Nierenschädigung",    Length: "1478",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/NZY-bn/article/Og0Iv2",    Error: 0}, {        Day: 19,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Chronische Nierenerkrankung",    Length: "1636",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/NZY-bn/article/lg0vv2",    Error: 0}, {        Day: 19,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "Transplantation",    Length: "2353",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/NZY-bn/article/gn0Fsg",    Error: 0}, {        Day: 20,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Diabetes insipidus",    Length: "753",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/mZYVXn/article/_T05t2",    Error: 0}, {        Day: 20,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Syndrom der inadäquaten ADH-Sekretion",    Length: "495",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/mZYVXn/article/zT0rt2",    Error: 0}, {        Day: 20,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Grundlagen nephrologischer Krankheitsbilder",    Length: "934",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/mZYVXn/article/mg0VD2",    Error: 0}, {        Day: 20,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Infektassoziierte Glomerulonephritiden",    Length: "795",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/mZYVXn/article/Lg0wD2",    Error: 0}, {        Day: 20,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Rapid-progressive Glomerulonephritis",    Length: "951",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/mZYVXn/article/og00w2",    Error: 0}, {        Day: 20,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Nephrotisches Syndrom",    Length: "1300",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/mZYVXn/article/Mg0MD2",    Error: 0}, {        Day: 20,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "IgA-Nephropathie",    Length: "358",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/mZYVXn/article/GE0BC3",    Error: 0}, {        Day: 20,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Renale tubuläre Partialfunktionsstörungen",    Length: "568",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/mZYVXn/article/2l0TwT",    Error: 0}, {        Day: 20,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "Proteinurie",    Length: "1091",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/mZYVXn/article/0Q0euf",    Error: 0}, {        Day: 20,    Importance: 10,    Subject: "Innere Medizin",    Chapter: "Nierenersatzverfahren",    Length: "843",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/mZYVXn/article/S50yjg",    Error: 0}, {        Day: 21,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Immunsystem",    Length: "2063",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/5ZYiXn/article/x50Emg",    Error: 0}, {        Day: 21,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Fieber und Entzündungsreaktionen",    Length: "1431",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/5ZYiXn/article/j50_Pg",    Error: 0}, {        Day: 21,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Allergische Erkrankungen",    Length: "2825",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/5ZYiXn/article/ek0x5T",    Error: 0}, {        Day: 21,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Kontaktekzem",    Length: "613",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/5ZYiXn/article/q90CoR",    Error: 0}, {        Day: 21,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Anaphylaxie und anaphylaktoide Reaktionen",    Length: "963",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/5ZYiXn/article/nt07V3",    Error: 0}, {        Day: 21,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Raynaud-Syndrom",    Length: "593",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/5ZYiXn/article/Uh0bWf",    Error: 0}, {        Day: 21,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Fibromyalgie-Syndrom",    Length: "231",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/5ZYiXn/article/2T0TJ2",    Error: 0}, {        Day: 22,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Rheumatoide Arthritis",    Length: "1954",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/MZYMXn/article/-f0DK2",    Error: 0}, {        Day: 22,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Axiale Spondylarthritis",    Length: "1196",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/MZYMXn/article/ZT0Z62",    Error: 0}, {        Day: 22,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Reaktive Arthritis",    Length: "550",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/MZYMXn/article/0T0e62",    Error: 0}, {        Day: 22,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Hyperurikämie und Gicht",    Length: "1495",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/MZYMXn/article/YT0n62",    Error: 0}, {        Day: 23,    Importance: 1,    Subject: "Innere Medizin",    Chapter: "Kollagenosen",    Length: "319",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/WT0Pp2",    Error: 0}, {        Day: 23,    Importance: 2,    Subject: "Innere Medizin",    Chapter: "Systemischer Lupus erythematodes",    Length: "2056",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/dT0op2",    Error: 0}, {        Day: 23,    Importance: 3,    Subject: "Innere Medizin",    Chapter: "Polymyositis und Dermatomyositis",    Length: "662",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/VT0Gp2",    Error: 0}, {        Day: 23,    Importance: 4,    Subject: "Innere Medizin",    Chapter: "Systemische Sklerose",    Length: "1500",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/eT0xp2",    Error: 0}, {        Day: 23,    Importance: 5,    Subject: "Innere Medizin",    Chapter: "Vaskulitiden",    Length: "848",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/fT0kJ2",    Error: 0}, {        Day: 23,    Importance: 6,    Subject: "Innere Medizin",    Chapter: "Riesenzellarteriitis",    Length: "1243",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/1T02p2",    Error: 0}, {        Day: 23,    Importance: 7,    Subject: "Innere Medizin",    Chapter: "Polymyalgia rheumatica",    Length: "698",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/I90YKR",    Error: 0}, {        Day: 23,    Importance: 8,    Subject: "Innere Medizin",    Chapter: "Granulomatose mit Polyangiitis",    Length: "1018",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/TT06J2",    Error: 0}, {        Day: 23,    Importance: 9,    Subject: "Innere Medizin",    Chapter: "Kawasaki-Syndrom",    Length: "854",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/hT0cq2",    Error: 0}, {        Day: 23,    Importance: 10,    Subject: "Innere Medizin",    Chapter: "Thrombangiitis obliterans",    Length: "314",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/2h0TWf",    Error: 0}, {        Day: 23,    Importance: 11,    Subject: "Innere Medizin",    Chapter: "Rheumatologische Antikörperdiagnostik",    Length: "377",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/nZY7Xn/article/ul0pAT",    Error: 0}, {        Day: 24,    Importance: 1,    Subject: "Infektiologie und Hygiene",    Chapter: "Mikrobiologische Untersuchungen",    Length: "595",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/n507kg",    Error: 0}, {        Day: 24,    Importance: 2,    Subject: "Infektiologie und Hygiene",    Chapter: "Blutkulturen",    Length: "741",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/7l04yT",    Error: 0}, {        Day: 24,    Importance: 3,    Subject: "Infektiologie und Hygiene",    Chapter: "Sepsis",    Length: "2795",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/xm0E3g",    Error: 0}, {        Day: 24,    Importance: 4,    Subject: "Infektiologie und Hygiene",    Chapter: "Durchfall",    Length: "652",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/6M0jpg",    Error: 0}, {        Day: 24,    Importance: 5,    Subject: "Infektiologie und Hygiene",    Chapter: "Lebensmittelvergiftung",    Length: "1079",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/Pf0Wm2",    Error: 0}, {        Day: 24,    Importance: 6,    Subject: "Infektiologie und Hygiene",    Chapter: "Norovirus-Infektion",    Length: "847",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/Gf0Bn2",    Error: 0}, {        Day: 24,    Importance: 7,    Subject: "Infektiologie und Hygiene",    Chapter: "Rotavirus-Infektion",    Length: "550",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/SJ0ytS",    Error: 0}, {        Day: 24,    Importance: 8,    Subject: "Infektiologie und Hygiene",    Chapter: "Bakterielle Durchfallerkrankungen",    Length: "1113",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/oM00pg",    Error: 0}, {        Day: 24,    Importance: 9,    Subject: "Infektiologie und Hygiene",    Chapter: "Darmpathogene E.-coli-Infektion",    Length: "993",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/yf0dK2",    Error: 0}, {        Day: 24,    Importance: 10,    Subject: "Infektiologie und Hygiene",    Chapter: "Clostridioides-difficile-Infektion",    Length: "810",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/dS0oA2",    Error: 0}, {        Day: 24,    Importance: 11,    Subject: "Infektiologie und Hygiene",    Chapter: "Amöbiasis",    Length: "931",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/6f0jM2",    Error: 0}, {        Day: 24,    Importance: 12,    Subject: "Infektiologie und Hygiene",    Chapter: "Giardiasis",    Length: "549",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/LZYwXn/article/fJ0ktS",    Error: 0}, {        Day: 25,    Importance: 1,    Subject: "Infektiologie und Hygiene",    Chapter: "Erkrankungen durch Staphylokokken",    Length: "939",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/Vl0GDT",    Error: 0}, {        Day: 25,    Importance: 2,    Subject: "Infektiologie und Hygiene",    Chapter: "Erkrankungen durch Streptokokken",    Length: "432",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/dl0oDT",    Error: 0}, {        Day: 25,    Importance: 3,    Subject: "Infektiologie und Hygiene",    Chapter: "Toxische Schocksyndrome",    Length: "414",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/yJ0d9S",    Error: 0}, {        Day: 25,    Importance: 4,    Subject: "Infektiologie und Hygiene",    Chapter: "Chlamydien-Infektionen",    Length: "930",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/ff0kl2",    Error: 0}, {        Day: 25,    Importance: 5,    Subject: "Infektiologie und Hygiene",    Chapter: "Lyme-Borreliose",    Length: "1579",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/4f03m2",    Error: 0}, {        Day: 25,    Importance: 6,    Subject: "Infektiologie und Hygiene",    Chapter: "Brucellose",    Length: "360",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/lf0vm2",    Error: 0}, {        Day: 25,    Importance: 7,    Subject: "Infektiologie und Hygiene",    Chapter: "Typhus, Paratyphus",    Length: "964",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/Qf0uN2",    Error: 0}, {        Day: 25,    Importance: 8,    Subject: "Infektiologie und Hygiene",    Chapter: "Milzbrand",    Length: "405",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/Of0Im2",    Error: 0}, {        Day: 25,    Importance: 9,    Subject: "Infektiologie und Hygiene",    Chapter: "Leptospirose",    Length: "491",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/kf0mm2",    Error: 0}, {        Day: 25,    Importance: 10,    Subject: "Infektiologie und Hygiene",    Chapter: "Diphtherie",    Length: "572",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/df0oO2",    Error: 0}, {        Day: 25,    Importance: 11,    Subject: "Infektiologie und Hygiene",    Chapter: "Listeriose",    Length: "404",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/Nf0-m2",    Error: 0}, {        Day: 25,    Importance: 12,    Subject: "Infektiologie und Hygiene",    Chapter: "Katzenkratzkrankheit",    Length: "293",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/oZY0cn/article/d80ol3",    Error: 0}, {        Day: 26,    Importance: 1,    Subject: "Infektiologie und Hygiene",    Chapter: "COVID-19",    Length: "3298",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/gG0FAh",    Error: 0}, {        Day: 26,    Importance: 2,    Subject: "Infektiologie und Hygiene",    Chapter: "Influenza",    Length: "1529",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/Bm0z3g",    Error: 0}, {        Day: 26,    Importance: 3,    Subject: "Infektiologie und Hygiene",    Chapter: "Herpesvirus-Infektionen",    Length: "1368",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/Mf0M52",    Error: 0}, {        Day: 26,    Importance: 4,    Subject: "Infektiologie und Hygiene",    Chapter: "Zytomegalievirus-Infektionen",    Length: "573",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/nf0752",    Error: 0}, {        Day: 26,    Importance: 5,    Subject: "Infektiologie und Hygiene",    Chapter: "Infektiöse Mononukleose",    Length: "911",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/Lf0w52",    Error: 0}, {        Day: 26,    Importance: 6,    Subject: "Infektiologie und Hygiene",    Chapter: "HIV-Infektion",    Length: "3459",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/mf0V52",    Error: 0}, {        Day: 26,    Importance: 7,    Subject: "Infektiologie und Hygiene",    Chapter: "Virales hämorrhagisches Fieber",    Length: "1280",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/aL0Qwg",    Error: 0}, {        Day: 26,    Importance: 8,    Subject: "Infektiologie und Hygiene",    Chapter: "Gelbfieber",    Length: "552",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/U50bjg",    Error: 0}, {        Day: 26,    Importance: 9,    Subject: "Infektiologie und Hygiene",    Chapter: "Denguefieber",    Length: "960",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/350SPg",    Error: 0}, {        Day: 26,    Importance: 10,    Subject: "Infektiologie und Hygiene",    Chapter: "Zika-Virus-Infektion",    Length: "551",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/RJ0lFS",    Error: 0}, {        Day: 26,    Importance: 11,    Subject: "Infektiologie und Hygiene",    Chapter: "Mpox",    Length: "630",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/wA0hNi",    Error: 0}, {        Day: 26,    Importance: 12,    Subject: "Infektiologie und Hygiene",    Chapter: "Tollwut",    Length: "932",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/KZYUcn/article/Gh0B2f",    Error: 0}, {        Day: 27,    Importance: 1,    Subject: "Infektiologie und Hygiene",    Chapter: "Aspergillose",    Length: "916",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/7f04n2",    Error: 0}, {        Day: 27,    Importance: 2,    Subject: "Infektiologie und Hygiene",    Chapter: "Malaria",    Length: "1757",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/Kf0UM2",    Error: 0}, {        Day: 27,    Importance: 3,    Subject: "Infektiologie und Hygiene",    Chapter: "Toxoplasmose",    Length: "616",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/pf0LM2",    Error: 0}, {        Day: 27,    Importance: 4,    Subject: "Infektiologie und Hygiene",    Chapter: "Leishmaniose",    Length: "642",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/qf0CM2",    Error: 0}, {        Day: 27,    Importance: 5,    Subject: "Infektiologie und Hygiene",    Chapter: "Chagas-Krankheit",    Length: "647",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/cK0a2S",    Error: 0}, {        Day: 27,    Importance: 6,    Subject: "Infektiologie und Hygiene",    Chapter: "Schlafkrankheit",    Length: "404",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/T506jg",    Error: 0}, {        Day: 27,    Importance: 7,    Subject: "Infektiologie und Hygiene",    Chapter: "Wurmerkrankungen",    Length: "1313",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/Ff0gL2",    Error: 0}, {        Day: 27,    Importance: 8,    Subject: "Infektiologie und Hygiene",    Chapter: "Echinokokkose",    Length: "576",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/9f0No2",    Error: 0}, {        Day: 27,    Importance: 9,    Subject: "Infektiologie und Hygiene",    Chapter: "Schistosomiasis",    Length: "823",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/xf0Eo2",    Error: 0}, {        Day: 27,    Importance: 10,    Subject: "Infektiologie und Hygiene",    Chapter: "Lepra",    Length: "612",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/Xk09mT",    Error: 0}, {        Day: 27,    Importance: 11,    Subject: "Infektiologie und Hygiene",    Chapter: "Seltene Zoonosen",    Length: "372",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/6ZYjcn/article/250Tjg",    Error: 0}, {        Day: 28,    Importance: 1,    Subject: "Infektiologie und Hygiene",    Chapter: "Antisepsis",    Length: "1086",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/pZYLcn/article/WQ0PEf",    Error: 0}, {        Day: 28,    Importance: 2,    Subject: "Infektiologie und Hygiene",    Chapter: "Nosokomiale Infektionen",    Length: "2899",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/pZYLcn/article/_f05K2",    Error: 0}, {        Day: 28,    Importance: 3,    Subject: "Infektiologie und Hygiene",    Chapter: "Lymphknotenschwellung",    Length: "1906",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/pZYLcn/article/iL0Jxg",    Error: 0}, {        Day: 28,    Importance: 4,    Subject: "Infektiologie und Hygiene",    Chapter: "Impfungen allgemein",    Length: "1934",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/pZYLcn/article/_m05Rg",    Error: 0}, {        Day: 28,    Importance: 5,    Subject: "Infektiologie und Hygiene",    Chapter: "Impfempfehlungen der STIKO",    Length: "1665",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/pZYLcn/article/zm0rRg",    Error: 0}, {        Day: 28,    Importance: 6,    Subject: "Infektiologie und Hygiene",    Chapter: "Infektionsschutzgesetz",    Length: "1554",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/pZYLcn/article/aQ0Quf",    Error: 0}, {        Day: 28,    Importance: 7,    Subject: "Infektiologie und Hygiene",    Chapter: "Wasserhygiene",    Length: "482",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/pZYLcn/article/bQ0Huf",    Error: 0}, {        Day: 29,    Importance: 1,    Subject: "Pädiatrie",    Chapter: "Das neugeborene Kind",    Length: "1532",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/a40Q3T",    Error: 0}, {        Day: 29,    Importance: 2,    Subject: "Pädiatrie",    Chapter: "Geburtstraumen",    Length: "1119",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/S40yiT",    Error: 0}, {        Day: 29,    Importance: 3,    Subject: "Pädiatrie",    Chapter: "Perinatale Asphyxie und hypoxisch-ischämische Enzephalopathie",    Length: "838",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/h40cQT",    Error: 0}, {        Day: 29,    Importance: 4,    Subject: "Pädiatrie",    Chapter: "Zerebralparese",    Length: "385",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/tM0Xqg",    Error: 0}, {        Day: 29,    Importance: 5,    Subject: "Pädiatrie",    Chapter: "Neugeboreneninfektion",    Length: "851",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/gM0FLg",    Error: 0}, {        Day: 29,    Importance: 6,    Subject: "Pädiatrie",    Chapter: "Omphalitis",    Length: "299",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/Jv0saR",    Error: 0}, {        Day: 29,    Importance: 7,    Subject: "Pädiatrie",    Chapter: "Atemnotsyndrom des Neugeborenen",    Length: "1196",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/340SQT",    Error: 0}, {        Day: 29,    Importance: 8,    Subject: "Pädiatrie",    Chapter: "Embryofetopathien durch Noxen",    Length: "457",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/V40GRT",    Error: 0}, {        Day: 29,    Importance: 9,    Subject: "Pädiatrie",    Chapter: "Embryofetopathien durch Infektionserreger",    Length: "1288",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/d40oRT",    Error: 0}, {        Day: 29,    Importance: 10,    Subject: "Pädiatrie",    Chapter: "Plötzlicher Säuglingstod",    Length: "533",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/T406iT",    Error: 0}, {        Day: 29,    Importance: 11,    Subject: "Pädiatrie",    Chapter: "Kinderschutzmedizin",    Length: "1793",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/JZYscn/article/mP0V2T",    Error: 0}, {        Day: 30,    Importance: 1,    Subject: "Pädiatrie",    Chapter: "Icterus neonatorum",    Length: "968",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/R40lQT",    Error: 0}, {        Day: 30,    Importance: 2,    Subject: "Pädiatrie",    Chapter: "Morbus haemolyticus neonatorum",    Length: "683",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/i40JQT",    Error: 0}, {        Day: 30,    Importance: 3,    Subject: "Pädiatrie",    Chapter: "Morbus haemorrhagicus neonatorum",    Length: "312",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/Q40uQT",    Error: 0}, {        Day: 30,    Importance: 4,    Subject: "Pädiatrie",    Chapter: "Hyperbilirubinämie-Syndrome",    Length: "565",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/iM0Jog",    Error: 0}, {        Day: 30,    Importance: 5,    Subject: "Pädiatrie",    Chapter: "Angeborene Störungen des Kohlenhydratstoffwechsels",    Length: "714",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/lM0vKg",    Error: 0}, {        Day: 30,    Importance: 6,    Subject: "Pädiatrie",    Chapter: "Nahrungsmittelallergie",    Length: "1327",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/QM0uog",    Error: 0}, {        Day: 30,    Importance: 7,    Subject: "Pädiatrie",    Chapter: "Entwicklung des Kindes",    Length: "1022",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/b40H3T",    Error: 0}, {        Day: 30,    Importance: 8,    Subject: "Pädiatrie",    Chapter: "Kindervorsorgeuntersuchungen",    Length: "1408",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/xH0Esh",    Error: 0}, {        Day: 30,    Importance: 9,    Subject: "Pädiatrie",    Chapter: "Enuresis und funktionelle Harninkontinenz im Kindes- und Jugendalter",    Length: "483",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/HP0KTT",    Error: 0}, {        Day: 30,    Importance: 10,    Subject: "Pädiatrie",    Chapter: "Kleinwuchs",    Length: "713",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/c40aRT",    Error: 0}, {        Day: 30,    Importance: 11,    Subject: "Pädiatrie",    Chapter: "Großwuchs",    Length: "535",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/1402RT",    Error: 0}, {        Day: 30,    Importance: 12,    Subject: "Pädiatrie",    Chapter: "Pubertät",    Length: "703",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/qZYCcn/article/PM0WKg",    Error: 0}, {        Day: 31,    Importance: 1,    Subject: "Pädiatrie",    Chapter: "Neuroblastom",    Length: "511",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/IZYY1n/article/940NlT",    Error: 0}, {        Day: 31,    Importance: 2,    Subject: "Pädiatrie",    Chapter: "Nephroblastom",    Length: "543",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/IZYY1n/article/zi0r8f",    Error: 0}, {        Day: 31,    Importance: 3,    Subject: "Pädiatrie",    Chapter: "Retinoblastom",    Length: "469",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/IZYY1n/article/C40qlT",    Error: 0}, {        Day: 31,    Importance: 4,    Subject: "Pädiatrie",    Chapter: "Lippen-Kiefer-Gaumen-Spalte",    Length: "456",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/IZYY1n/article/FM0gqg",    Error: 0}, {        Day: 31,    Importance: 5,    Subject: "Pädiatrie",    Chapter: "Zystische Fibrose",    Length: "1907",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/IZYY1n/article/L40wPT",    Error: 0}, {        Day: 31,    Importance: 6,    Subject: "Pädiatrie",    Chapter: "Adrenogenitales Syndrom",    Length: "1826",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/IZYY1n/article/W40PRT",    Error: 0}, {        Day: 31,    Importance: 7,    Subject: "Pädiatrie",    Chapter: "Seltene hereditäre Stoffwechselerkrankungen",    Length: "1214",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/IZYY1n/article/vR0AKf",    Error: 0}, {        Day: 31,    Importance: 8,    Subject: "Pädiatrie",    Chapter: "Seltene hereditäre Syndrome",    Length: "1413",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/IZYY1n/article/240TiT",    Error: 0}, {        Day: 32,    Importance: 1,    Subject: "Pädiatrie",    Chapter: "Atopische Dermatitis",    Length: "1378",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/A40RNT",    Error: 0}, {        Day: 32,    Importance: 2,    Subject: "Pädiatrie",    Chapter: "Windeldermatitis",    Length: "410",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/1J02GS",    Error: 0}, {        Day: 32,    Importance: 3,    Subject: "Pädiatrie",    Chapter: "Masern",    Length: "2137",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/r40fkT",    Error: 0}, {        Day: 32,    Importance: 4,    Subject: "Pädiatrie",    Chapter: "Scharlach",    Length: "920",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/F40gOT",    Error: 0}, {        Day: 32,    Importance: 5,    Subject: "Pädiatrie",    Chapter: "Röteln",    Length: "686",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/7404kT",    Error: 0}, {        Day: 32,    Importance: 6,    Subject: "Pädiatrie",    Chapter: "Ringelröteln",    Length: "588",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/G40BkT",    Error: 0}, {        Day: 32,    Importance: 7,    Subject: "Pädiatrie",    Chapter: "Exanthema subitum",    Length: "493",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/s40tkT",    Error: 0}, {        Day: 32,    Importance: 8,    Subject: "Pädiatrie",    Chapter: "Windpocken",    Length: "1513",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/I40YkT",    Error: 0}, {        Day: 32,    Importance: 9,    Subject: "Pädiatrie",    Chapter: "IgA-Vaskulitis",    Length: "579",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/BT0zG2",    Error: 0}, {        Day: 32,    Importance: 10,    Subject: "Pädiatrie",    Chapter: "Mumps",    Length: "665",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/H40KkT",    Error: 0}, {        Day: 32,    Importance: 11,    Subject: "Pädiatrie",    Chapter: "Pertussis",    Length: "814",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/840OOT",    Error: 0}, {        Day: 32,    Importance: 12,    Subject: "Pädiatrie",    Chapter: "Poliomyelitis",    Length: "1007",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/t40XOT",    Error: 0}, {        Day: 32,    Importance: 13,    Subject: "Pädiatrie",    Chapter: "Fieberkrampf",    Length: "662",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/rZYf1n/article/D401lT",    Error: 0}, {        Day: 33,    Importance: 1,    Subject: "Pädiatrie",    Chapter: "Akute Bronchiolitis im Säuglingsalter",    Length: "598",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/EF08P3",    Error: 0}, {        Day: 33,    Importance: 2,    Subject: "Pädiatrie",    Chapter: "Pseudokrupp",    Length: "862",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/n407PT",    Error: 0}, {        Day: 33,    Importance: 3,    Subject: "Pädiatrie",    Chapter: "Epiglottitis",    Length: "683",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/f50kjg",    Error: 0}, {        Day: 33,    Importance: 4,    Subject: "Pädiatrie",    Chapter: "Fremdkörperaspiration",    Length: "922",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/K50UOg",    Error: 0}, {        Day: 33,    Importance: 5,    Subject: "Pädiatrie",    Chapter: "Azyanotische angeborene Herzfehler",    Length: "1748",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/4403jT",    Error: 0}, {        Day: 33,    Importance: 6,    Subject: "Pädiatrie",    Chapter: "Ventrikelseptumdefekt",    Length: "592",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/ew0x3R",    Error: 0}, {        Day: 33,    Importance: 7,    Subject: "Pädiatrie",    Chapter: "Atriumseptumdefekt",    Length: "615",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/1w023R",    Error: 0}, {        Day: 33,    Importance: 8,    Subject: "Pädiatrie",    Chapter: "Zyanotische angeborene Herzfehler",    Length: "1311",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/mw0VjR",    Error: 0}, {        Day: 33,    Importance: 9,    Subject: "Pädiatrie",    Chapter: "Fallot-Tetralogie",    Length: "719",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/rw0f4R",    Error: 0}, {        Day: 33,    Importance: 10,    Subject: "Pädiatrie",    Chapter: "Choanalatresie",    Length: "301",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/M40MPT",    Error: 0}, {        Day: 33,    Importance: 11,    Subject: "Pädiatrie",    Chapter: "Ösophagusatresie",    Length: "519",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/K40U4T",    Error: 0}, {        Day: 33,    Importance: 12,    Subject: "Pädiatrie",    Chapter: "Hypertrophe Pylorusstenose",    Length: "334",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/J40s4T",    Error: 0}, {        Day: 33,    Importance: 13,    Subject: "Pädiatrie",    Chapter: "Duodenalatresie",    Length: "322",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/640j4T",    Error: 0}, {        Day: 33,    Importance: 14,    Subject: "Pädiatrie",    Chapter: "Morbus Hirschsprung",    Length: "647",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/q40C4T",    Error: 0}, {        Day: 33,    Importance: 15,    Subject: "Pädiatrie",    Chapter: "Viszerale Fehlbildungen",    Length: "674",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/p40L4T",    Error: 0}, {        Day: 33,    Importance: 16,    Subject: "Pädiatrie",    Chapter: "Nekrotisierende Enterokolitis",    Length: "751",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/o4004T",    Error: 0}, {        Day: 33,    Importance: 17,    Subject: "Pädiatrie",    Chapter: "Darminvagination",    Length: "729",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/7ZY41n/article/Ah0Rgf",    Error: 0}, {        Day: 34,    Importance: 1,    Subject: "Pädiatrie",    Chapter: "Hüftgelenkdysplasie und Hüftgelenkluxation",    Length: "657",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/HZYK1n/article/NQ0-wf",    Error: 0}, {        Day: 34,    Importance: 2,    Subject: "Pädiatrie",    Chapter: "Morbus Perthes",    Length: "1454",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/HZYK1n/article/mQ0V9f",    Error: 0}, {        Day: 34,    Importance: 3,    Subject: "Pädiatrie",    Chapter: "Epiphyseolysis capitis femoris",    Length: "761",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/HZYK1n/article/MQ0M9f",    Error: 0}, {        Day: 34,    Importance: 4,    Subject: "Pädiatrie",    Chapter: "Juvenile idiopathische Arthritis",    Length: "1166",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/HZYK1n/article/w40hlT",    Error: 0}, {        Day: 34,    Importance: 5,    Subject: "Pädiatrie",    Chapter: "Morbus Scheuermann",    Length: "231",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/HZYK1n/article/jQ0_Df",    Error: 0}, {        Day: 34,    Importance: 6,    Subject: "Pädiatrie",    Chapter: "Kraniosynostosen",    Length: "267",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/HZYK1n/article/g40FiT",    Error: 0}, {        Day: 34,    Importance: 7,    Subject: "Pädiatrie",    Chapter: "Hydrozephalus",    Length: "281",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/HZYK1n/article/EM08qg",    Error: 0}, {        Day: 34,    Importance: 8,    Subject: "Pädiatrie",    Chapter: "Fehlbildungen des kraniozervikalen Übergangs",    Length: "401",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/HZYK1n/article/Am0RRg",    Error: 0}, {        Day: 34,    Importance: 9,    Subject: "Pädiatrie",    Chapter: "Neuralrohrdefekte",    Length: "735",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/HZYK1n/article/el0xDT",    Error: 0}, {        Day: 35,    Importance: 1,    Subject: "Humangenetik",    Chapter: "Humangenetik (Klinik)",    Length: "2357",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/KR0ULf/sZYt1n/article/y50d5g",    Error: 0}, {        Day: 35,    Importance: 2,    Subject: "Humangenetik",    Chapter: "Chromosomenaberrationen",    Length: "1081",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/sZYt1n/article/e40xRT",    Error: 0}, {        Day: 35,    Importance: 3,    Subject: "Humangenetik",    Chapter: "Trisomie 21",    Length: "1198",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/sZYt1n/article/U40biT",    Error: 0}, {        Day: 35,    Importance: 4,    Subject: "Humangenetik",    Chapter: "Ehlers-Danlos-Syndrom und Marfan-Syndrom",    Length: "687",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/sZYt1n/article/hk0cnT",    Error: 0}, {        Day: 36,    Importance: 1,    Subject: "Dermatologie",    Chapter: "Grundlagen der Dermatologie",    Length: "1537",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/_405NT",    Error: 0}, {        Day: 36,    Importance: 2,    Subject: "Dermatologie",    Chapter: "Herpes zoster",    Length: "1258",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/HR0Kof",    Error: 0}, {        Day: 36,    Importance: 3,    Subject: "Dermatologie",    Chapter: "Molluscum contagiosum",    Length: "288",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/-40DNT",    Error: 0}, {        Day: 36,    Importance: 4,    Subject: "Dermatologie",    Chapter: "Impetigo contagiosa",    Length: "385",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/ak0QmT",    Error: 0}, {        Day: 36,    Importance: 5,    Subject: "Dermatologie",    Chapter: "Staphylococcal scalded skin syndrome",    Length: "450",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/Yk0nmT",    Error: 0}, {        Day: 36,    Importance: 6,    Subject: "Dermatologie",    Chapter: "Intertriginöse Dermatosen",    Length: "658",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/0k0emT",    Error: 0}, {        Day: 36,    Importance: 7,    Subject: "Dermatologie",    Chapter: "Allgemeine Mykologie",    Length: "876",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/KM0Upg",    Error: 0}, {        Day: 36,    Importance: 8,    Subject: "Dermatologie",    Chapter: "Dermatophytosen",    Length: "796",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/Hf0Kn2",    Error: 0}, {        Day: 36,    Importance: 9,    Subject: "Dermatologie",    Chapter: "Onychomykose",    Length: "513",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/-J0D9S",    Error: 0}, {        Day: 36,    Importance: 10,    Subject: "Dermatologie",    Chapter: "Kandidosen",    Length: "808",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/rf0fn2",    Error: 0}, {        Day: 36,    Importance: 11,    Subject: "Dermatologie",    Chapter: "Pityriasis versicolor",    Length: "233",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/Zk0ZmT",    Error: 0}, {        Day: 36,    Importance: 12,    Subject: "Dermatologie",    Chapter: "Skabies",    Length: "732",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/ck0a5T",    Error: 0}, {        Day: 36,    Importance: 13,    Subject: "Dermatologie",    Chapter: "Lauserkrankungen",    Length: "645",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/1k025T",    Error: 0}, {        Day: 36,    Importance: 14,    Subject: "Dermatologie",    Chapter: "Photodermatosen",    Length: "559",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/dk0o5T",    Error: 0}, {        Day: 36,    Importance: 15,    Subject: "Dermatologie",    Chapter: "Porphyrien",    Length: "910",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/mk0VoT",    Error: 0}, {        Day: 36,    Importance: 16,    Subject: "Dermatologie",    Chapter: "Angioödem",    Length: "1081",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/2k0TMT",    Error: 0}, {        Day: 36,    Importance: 17,    Subject: "Dermatologie",    Chapter: "Urtikaria",    Length: "714",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/GZYB1n/article/dD0oWR",    Error: 0}, {        Day: 37,    Importance: 1,    Subject: "Dermatologie",    Chapter: "Erythema nodosum",    Length: "512",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/Fk0gpT",    Error: 0}, {        Day: 37,    Importance: 2,    Subject: "Dermatologie",    Chapter: "Erythema exsudativum multiforme",    Length: "449",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/Tk06MT",    Error: 0}, {        Day: 37,    Importance: 3,    Subject: "Dermatologie",    Chapter: "Epidermale Nekrolyse",    Length: "641",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/Ko0U1S",    Error: 0}, {        Day: 37,    Importance: 4,    Subject: "Dermatologie",    Chapter: "Blasenbildende Autoimmundermatosen",    Length: "1897",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/jk0_nT",    Error: 0}, {        Day: 37,    Importance: 5,    Subject: "Dermatologie",    Chapter: "Psoriasis vulgaris",    Length: "1898",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/4k03LT",    Error: 0}, {        Day: 37,    Importance: 6,    Subject: "Dermatologie",    Chapter: "Lichen ruber planus",    Length: "618",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/5k0ioT",    Error: 0}, {        Day: 37,    Importance: 7,    Subject: "Dermatologie",    Chapter: "Ichthyosen",    Length: "157",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/Qk0unT",    Error: 0}, {        Day: 37,    Importance: 8,    Subject: "Dermatologie",    Chapter: "Pityriasis rosea",    Length: "301",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/Pk0WLT",    Error: 0}, {        Day: 37,    Importance: 9,    Subject: "Dermatologie",    Chapter: "Seborrhoisches Ekzem",    Length: "440",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/Vk0G5T",    Error: 0}, {        Day: 37,    Importance: 10,    Subject: "Dermatologie",    Chapter: "Acne vulgaris",    Length: "1029",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/nk07oT",    Error: 0}, {        Day: 37,    Importance: 11,    Subject: "Dermatologie",    Chapter: "Rosazea",    Length: "543",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/Lk0woT",    Error: 0}, {        Day: 37,    Importance: 12,    Subject: "Dermatologie",    Chapter: "Granulomatöse Hauterkrankungen",    Length: "265",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/tZYXWn/article/Kk0UKT",    Error: 0}, {        Day: 38,    Importance: 1,    Subject: "Dermatologie",    Chapter: "Benigne Hauttumoren",    Length: "1436",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/6k0jKT",    Error: 0}, {        Day: 38,    Importance: 2,    Subject: "Dermatologie",    Chapter: "Aktinische Keratose",    Length: "449",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/pk0LKT",    Error: 0}, {        Day: 38,    Importance: 3,    Subject: "Dermatologie",    Chapter: "Malignes Melanom",    Length: "1923",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/qk0CKT",    Error: 0}, {        Day: 38,    Importance: 4,    Subject: "Dermatologie",    Chapter: "Plattenepithelkarzinom der Haut",    Length: "1263",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/Ik0Y6T",    Error: 0}, {        Day: 38,    Importance: 5,    Subject: "Dermatologie",    Chapter: "Basalzellkarzinom",    Length: "765",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/rk0f6T",    Error: 0}, {        Day: 38,    Importance: 6,    Subject: "Dermatologie",    Chapter: "Parapsoriasis en plaques",    Length: "301",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/kk0mLT",    Error: 0}, {        Day: 38,    Importance: 7,    Subject: "Dermatologie",    Chapter: "Vitiligo",    Length: "247",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/7k046T",    Error: 0}, {        Day: 38,    Importance: 8,    Subject: "Dermatologie",    Chapter: "Alopezien",    Length: "752",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/tk0XpT",    Error: 0}, {        Day: 38,    Importance: 9,    Subject: "Dermatologie",    Chapter: "Sexuell übertragbare Infektionen",    Length: "474",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/IM0YJg",    Error: 0}, {        Day: 38,    Importance: 10,    Subject: "Dermatologie",    Chapter: "Gonorrhö",    Length: "526",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/Hk0K6T",    Error: 0}, {        Day: 38,    Importance: 11,    Subject: "Dermatologie",    Chapter: "Syphilis",    Length: "1668",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/sk0t6T",    Error: 0}, {        Day: 38,    Importance: 12,    Subject: "Dermatologie",    Chapter: "Ulcus molle",    Length: "304",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/650jOg",    Error: 0}, {        Day: 38,    Importance: 13,    Subject: "Dermatologie",    Chapter: "Sammelsurium der Dermatologie",    Length: "498",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/eM0xng",    Error: 0}, {        Day: 38,    Importance: 14,    Subject: "Dermatologie",    Chapter: "Periorale Dermatitis",    Length: "406",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/FZYgWn/article/rF0fj3",    Error: 0}, {        Day: 39,    Importance: 1,    Subject: "Anästhesie",    Chapter: "Lokalanästhetika",    Length: "658",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn/article/wN0hWg",    Error: 0}, {        Day: 39,    Importance: 2,    Subject: "Anästhesie",    Chapter: "Regionalanästhesie",    Length: "1769",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn/article/Sl0ywT",    Error: 0}, {        Day: 39,    Importance: 3,    Subject: "Anästhesie",    Chapter: "Allgemeinanästhesie",    Length: "2230",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn/article/hl0c9T",    Error: 0}, {        Day: 39,    Importance: 4,    Subject: "Anästhesie",    Chapter: "Maschinelle Beatmung",    Length: "1339",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn/article/970NLh",    Error: 0}, {        Day: 39,    Importance: 5,    Subject: "Anästhesie",    Chapter: "Rapid Sequence Induction",    Length: "1225",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn/article/gl0FwT",    Error: 0}, {        Day: 39,    Importance: 6,    Subject: "Anästhesie",    Chapter: "Inhalationsanästhetika",    Length: "721",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn/article/EN081g",    Error: 0}, {        Day: 39,    Importance: 7,    Subject: "Anästhesie",    Chapter: "Injektionsanästhetika",    Length: "536",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn/article/vN0A1g",    Error: 0}, {        Day: 39,    Importance: 8,    Subject: "Anästhesie",    Chapter: "Muskelrelaxanzien",    Length: "1012",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn/article/DN01Wg",    Error: 0}, {        Day: 39,    Importance: 9,    Subject: "Anästhesie",    Chapter: "Benzodiazepine",    Length: "598",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn/article/CN0qWg",    Error: 0}, {        Day: 39,    Importance: 10,    Subject: "Anästhesie",    Chapter: "Maligne Hyperthermie",    Length: "694",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/8ZYOWn/article/sg0t92",    Error: 0}, {        Day: 40,    Importance: 1,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Grundlagen der Schmerztherapie",    Length: "1638",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/xN0EWg",    Error: 0}, {        Day: 40,    Importance: 2,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Nicht-Opioid-Analgetika",    Length: "1031",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/BN0zWg",    Error: 0}, {        Day: 40,    Importance: 3,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Opioide",    Length: "1012",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/yN0ddg",    Error: 0}, {        Day: 40,    Importance: 4,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Pulsoxymetrie und Blutgasanalyse",    Length: "1463",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/8l0OAT",    Error: 0}, {        Day: 40,    Importance: 5,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Flüssigkeits- und Volumentherapie",    Length: "1361",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/fM0kLg",    Error: 0}, {        Day: 40,    Importance: 6,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Künstliche Ernährung",    Length: "574",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/9t0Nf3",    Error: 0}, {        Day: 40,    Importance: 7,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Transfusionen",    Length: "1991",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/2M0TLg",    Error: 0}, {        Day: 40,    Importance: 8,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Präklinische Traumaversorgung",    Length: "1498",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/4N03Yg",    Error: 0}, {        Day: 40,    Importance: 9,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Grundlagen der Reanimation",    Length: "1400",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/kN0mYg",    Error: 0}, {        Day: 40,    Importance: 10,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Reanimation - AMBOSS-SOP",    Length: "817",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/L70wmh",    Error: 0}, {        Day: 40,    Importance: 11,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Polytrauma",    Length: "778",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/uZYpWn/article/-y0D3i",    Error: 0}, {        Day: 41,    Importance: 1,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Schock",    Length: "1702",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/EZY8Wn/article/kO0msT",    Error: 0}, {        Day: 41,    Importance: 2,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Acute Respiratory Distress Syndrome",    Length: "1246",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/EZY8Wn/article/tg0XC2",    Error: 0}, {        Day: 41,    Importance: 3,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Rhabdomyolyse und Crush-Syndrom",    Length: "394",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/EZY8Wn/article/4O03sT",    Error: 0}, {        Day: 41,    Importance: 4,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Verbrennung",    Length: "1033",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/EZY8Wn/article/Jh0sUf",    Error: 0}, {        Day: 41,    Importance: 5,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Hypothermie und Erfrierungen",    Length: "1035",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/EZY8Wn/article/kK0mgS",    Error: 0}, {        Day: 41,    Importance: 6,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Thoraxtrauma",    Length: "801",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/EZY8Wn/article/8h0Off",    Error: 0}, {        Day: 41,    Importance: 7,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Pneumothorax",    Length: "2147",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/EZY8Wn/article/vh0Aff",    Error: 0}, {        Day: 41,    Importance: 8,    Subject: "Intensiv- und Notfallmedizin",    Chapter: "Intoxikation mit Kohlenstoffmonoxid oder -dioxid",    Length: "535",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/EZY8Wn/article/4h03Vf",    Error: 0}, {        Day: 42,    Importance: 1,    Subject: "Chirurgie",    Chapter: "Akute Wunden und Wundverschluss",    Length: "1464",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/ph0LUf",    Error: 0}, {        Day: 42,    Importance: 2,    Subject: "Chirurgie",    Chapter: "Chronische Wunden und Wundbehandlung",    Length: "1602",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/f70kOh",    Error: 0}, {        Day: 42,    Importance: 3,    Subject: "Chirurgie",    Chapter: "Bakterielle Infektionen von Haut und Weichgewebe",    Length: "1929",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/qh0CUf",    Error: 0}, {        Day: 42,    Importance: 4,    Subject: "Chirurgie",    Chapter: "Paronychie und Panaritium",    Length: "507",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/rh0f2f",    Error: 0}, {        Day: 42,    Importance: 5,    Subject: "Chirurgie",    Chapter: "Tetanus",    Length: "763",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/ef0xO2",    Error: 0}, {        Day: 42,    Importance: 6,    Subject: "Chirurgie",    Chapter: "Aktinomykose",    Length: "475",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/7h042f",    Error: 0}, {        Day: 42,    Importance: 7,    Subject: "Chirurgie",    Chapter: "Perioperatives Management",    Length: "2084",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/550ikg",    Error: 0}, {        Day: 42,    Importance: 8,    Subject: "Chirurgie",    Chapter: "Laparoskopische Chirurgie",    Length: "509",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/B50zmg",    Error: 0}, {        Day: 42,    Importance: 9,    Subject: "Chirurgie",    Chapter: "Koronararterielle Bypasschirurgie",    Length: "555",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/6l0jBT",    Error: 0}, {        Day: 42,    Importance: 10,    Subject: "Chirurgie",    Chapter: "Aneurysma",    Length: "511",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/Wh0P1f",    Error: 0}, {        Day: 42,    Importance: 11,    Subject: "Chirurgie",    Chapter: "Aortenaneurysma",    Length: "1235",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/dh0o1f",    Error: 0}, {        Day: 42,    Importance: 12,    Subject: "Chirurgie",    Chapter: "Aortendissektion",    Length: "1770",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/M50Mkg",    Error: 0}, {        Day: 42,    Importance: 13,    Subject: "Chirurgie",    Chapter: "Akuter arterieller Extremitätenverschluss",    Length: "1088",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/vZYAWn/article/1h021f",    Error: 0}, {        Day: 43,    Importance: 1,    Subject: "Chirurgie",    Chapter: "Schilddrüsenkarzinom",    Length: "1456",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/Vg0G82",    Error: 0}, {        Day: 43,    Importance: 2,    Subject: "Chirurgie",    Chapter: "Schilddrüsenchirurgie",    Length: "572",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/wl0h_T",    Error: 0}, {        Day: 43,    Importance: 3,    Subject: "Chirurgie",    Chapter: "Ösophagusdivertikel",    Length: "599",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/Eg08C2",    Error: 0}, {        Day: 43,    Importance: 4,    Subject: "Chirurgie",    Chapter: "Boerhaave-Syndrom",    Length: "339",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/wg0hx2",    Error: 0}, {        Day: 43,    Importance: 5,    Subject: "Chirurgie",    Chapter: "Ösophaguskarzinom",    Length: "1367",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/Cg0qx2",    Error: 0}, {        Day: 43,    Importance: 6,    Subject: "Chirurgie",    Chapter: "Zwerchfellhernie",    Length: "1585",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/Ch0qTf",    Error: 0}, {        Day: 43,    Importance: 7,    Subject: "Chirurgie",    Chapter: "Milzruptur",    Length: "1058",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/Bh0zTf",    Error: 0}, {        Day: 43,    Importance: 8,    Subject: "Chirurgie",    Chapter: "Magenkarzinom",    Length: "2155",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/-g0DB2",    Error: 0}, {        Day: 43,    Importance: 9,    Subject: "Chirurgie",    Chapter: "Neuroendokrine Neoplasien",    Length: "2467",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/_h05gf",    Error: 0}, {        Day: 43,    Importance: 10,    Subject: "Chirurgie",    Chapter: "Akutes Abdomen",    Length: "3457",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/N50-4g",    Error: 0}, {        Day: 43,    Importance: 11,    Subject: "Chirurgie",    Chapter: "Peritonitis",    Length: "842",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/GM0BJg",    Error: 0}, {        Day: 43,    Importance: 12,    Subject: "Chirurgie",    Chapter: "Ileus",    Length: "1653",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/DZY1dn/article/230T3f",    Error: 0}, {        Day: 44,    Importance: 1,    Subject: "Chirurgie",    Chapter: "Mesenteriale Ischämie",    Length: "1173",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/wZYhdn/article/cS0aA2",    Error: 0}, {        Day: 44,    Importance: 2,    Subject: "Chirurgie",    Chapter: "Appendizitis",    Length: "1719",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/wZYhdn/article/a30QSf",    Error: 0}, {        Day: 44,    Importance: 3,    Subject: "Chirurgie",    Chapter: "Kolonpolypen",    Length: "752",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/wZYhdn/article/US0b_2",    Error: 0}, {        Day: 44,    Importance: 4,    Subject: "Chirurgie",    Chapter: "Kolorektales Karzinom",    Length: "3132",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/wZYhdn/article/TS06_2",    Error: 0}, {        Day: 44,    Importance: 5,    Subject: "Chirurgie",    Chapter: "Hereditäres, nicht-polypöses Kolonkarzinom",    Length: "945",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/wZYhdn/article/fS0k_2",    Error: 0}, {        Day: 44,    Importance: 6,    Subject: "Chirurgie",    Chapter: "Obstipation",    Length: "1700",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/wZYhdn/article/CM0qIg",    Error: 0}, {        Day: 44,    Importance: 7,    Subject: "Chirurgie",    Chapter: "Darmchirurgie",    Length: "1976",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/wZYhdn/article/Cl0q_T",    Error: 0}, {        Day: 45,    Importance: 1,    Subject: "Chirurgie",    Chapter: "Cholelithiasis, Cholezystitis und Cholangitis",    Length: "2412",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/V30Ghf",    Error: 0}, {        Day: 45,    Importance: 2,    Subject: "Chirurgie",    Chapter: "Biliäre Karzinome",    Length: "555",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/e30xhf",    Error: 0}, {        Day: 45,    Importance: 3,    Subject: "Chirurgie",    Chapter: "Hepatozelluläres Karzinom",    Length: "1130",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/6S0j0f",    Error: 0}, {        Day: 45,    Importance: 4,    Subject: "Chirurgie",    Chapter: "Pankreas- und Leberchirurgie",    Length: "813",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/Bl0z_T",    Error: 0}, {        Day: 45,    Importance: 5,    Subject: "Chirurgie",    Chapter: "Anal- und Rektumprolaps",    Length: "427",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/W30Phf",    Error: 0}, {        Day: 45,    Importance: 6,    Subject: "Chirurgie",    Chapter: "Hämorrhoiden und Hämorrhoidalleiden",    Length: "901",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/c30ahf",    Error: 0}, {        Day: 45,    Importance: 7,    Subject: "Chirurgie",    Chapter: "Analvenenthrombose",    Length: "388",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/1302hf",    Error: 0}, {        Day: 45,    Importance: 8,    Subject: "Chirurgie",    Chapter: "Analfissur",    Length: "637",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/X309Sf",    Error: 0}, {        Day: 45,    Importance: 9,    Subject: "Chirurgie",    Chapter: "Analabszess und Analfistel",    Length: "676",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/b30HSf",    Error: 0}, {        Day: 45,    Importance: 10,    Subject: "Chirurgie",    Chapter: "Analkarzinom",    Length: "686",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/gS0F_2",    Error: 0}, {        Day: 45,    Importance: 11,    Subject: "Chirurgie",    Chapter: "Sinus pilonidalis",    Length: "584",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/Y30nSf",    Error: 0}, {        Day: 45,    Importance: 12,    Subject: "Chirurgie",    Chapter: "Hernien",    Length: "1410",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/030eSf",    Error: 0}, {        Day: 45,    Importance: 13,    Subject: "Chirurgie",    Chapter: "Leistenhernie",    Length: "1315",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/zh0rgf",    Error: 0}, {        Day: 45,    Importance: 14,    Subject: "Chirurgie",    Chapter: "Schenkelhernie",    Length: "499",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/9ZYNdn/article/Z30ZSf",    Error: 0}, {        Day: 46,    Importance: 1,    Subject: "Chirurgie",    Chapter: "Allgemeine Frakturlehre",    Length: "1128",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/CZYqdn/article/T3063f",    Error: 0}, {        Day: 46,    Importance: 2,    Subject: "Chirurgie",    Chapter: "Konservative Verfahren in der Frakturversorgung",    Length: "407",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/CZYqdn/article/Dl01_T",    Error: 0}, {        Day: 46,    Importance: 3,    Subject: "Chirurgie",    Chapter: "Operative Verfahren der Unfallchirurgie/Orthopädie",    Length: "1088",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/CZYqdn/article/vl0AAT",    Error: 0}, {        Day: 46,    Importance: 4,    Subject: "Chirurgie",    Chapter: "Frakturen im Kindesalter",    Length: "584",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/CZYqdn/article/g30F3f",    Error: 0}, {        Day: 46,    Importance: 5,    Subject: "Chirurgie",    Chapter: "Kompartmentsyndrom",    Length: "746",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/CZYqdn/article/330SRf",    Error: 0}, {        Day: 46,    Importance: 6,    Subject: "Chirurgie",    Chapter: "Claviculafraktur",    Length: "465",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/CZYqdn/article/i30JRf",    Error: 0}, {        Day: 46,    Importance: 7,    Subject: "Chirurgie",    Chapter: "Luxation des Akromioklavikulargelenks",    Length: "641",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/CZYqdn/article/Q30uRf",    Error: 0}, {        Day: 46,    Importance: 8,    Subject: "Chirurgie",    Chapter: "Humerusfraktur",    Length: "786",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/CZYqdn/article/j30_Rf",    Error: 0}, {        Day: 46,    Importance: 9,    Subject: "Chirurgie",    Chapter: "Distale Radiusfraktur",    Length: "763",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/CZYqdn/article/O30Iif",    Error: 0}, {        Day: 46,    Importance: 10,    Subject: "Chirurgie",    Chapter: "Schaftfrakturen des Unterarmes",    Length: "374",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/CZYqdn/article/yr0dPh",    Error: 0}, {        Day: 47,    Importance: 1,    Subject: "Chirurgie",    Chapter: "Kahnbeinfraktur",    Length: "584",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/xZYEdn/article/l30vif",    Error: 0}, {        Day: 47,    Importance: 2,    Subject: "Chirurgie",    Chapter: "Mittelhandfrakturen",    Length: "466",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/xZYEdn/article/Wl0PDT",    Error: 0}, {        Day: 47,    Importance: 3,    Subject: "Chirurgie",    Chapter: "Wirbelsäulenverletzungen",    Length: "1433",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/xZYEdn/article/M30MQf",    Error: 0}, {        Day: 47,    Importance: 4,    Subject: "Chirurgie",    Chapter: "Beckenringfrakturen",    Length: "1185",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/xZYEdn/article/n307Qf",    Error: 0}, {        Day: 47,    Importance: 5,    Subject: "Chirurgie",    Chapter: "Proximale Femurfrakturen",    Length: "1415",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/xZYEdn/article/L30wQf",    Error: 0}, {        Day: 47,    Importance: 6,    Subject: "Chirurgie",    Chapter: "Femurschaft- und distale Femurfrakturen",    Length: "589",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/xZYEdn/article/o300jf",    Error: 0}, {        Day: 47,    Importance: 7,    Subject: "Chirurgie",    Chapter: "Frakturen des Unterschenkels",    Length: "512",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/xZYEdn/article/K30Ujf",    Error: 0}, {        Day: 47,    Importance: 8,    Subject: "Chirurgie",    Chapter: "Sprunggelenksfraktur",    Length: "697",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/xZYEdn/article/630jjf",    Error: 0}, {        Day: 48,    Importance: 1,    Subject: "Orthopädie",    Chapter: "Orthopädische Untersuchungszeichen",    Length: "991",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/BZYzdn/article/zl0rzT",    Error: 0}, {        Day: 48,    Importance: 2,    Subject: "Orthopädie",    Chapter: "Arthrose",    Length: "1043",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/BZYzdn/article/bT0H62",    Error: 0}, {        Day: 48,    Importance: 3,    Subject: "Orthopädie",    Chapter: "Osteomalazie und Rachitis",    Length: "610",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/BZYzdn/article/XT0962",    Error: 0}, {        Day: 48,    Importance: 4,    Subject: "Orthopädie",    Chapter: "Osteodystrophia deformans",    Length: "513",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/BZYzdn/article/FQ0gBf",    Error: 0}, {        Day: 48,    Importance: 5,    Subject: "Orthopädie",    Chapter: "Osteoporose",    Length: "1758",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/BZYzdn/article/cT0ap2",    Error: 0}, {        Day: 48,    Importance: 6,    Subject: "Orthopädie",    Chapter: "Laborkonstellation Knochenerkrankungen",    Length: "128",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/BZYzdn/article/eQ0xEf",    Error: 0}, {        Day: 48,    Importance: 7,    Subject: "Orthopädie",    Chapter: "Seronegative Spondylarthritis",    Length: "247",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/BZYzdn/article/J30sjf",    Error: 0}, {        Day: 48,    Importance: 8,    Subject: "Orthopädie",    Chapter: "Osteomyelitis",    Length: "1030",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/BZYzdn/article/th0Xff",    Error: 0}, {        Day: 48,    Importance: 9,    Subject: "Orthopädie",    Chapter: "Spondylodiszitis",    Length: "675",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/BZYzdn/article/k-0mxi",    Error: 0}, {        Day: 48,    Importance: 10,    Subject: "Orthopädie",    Chapter: "Bakterielle Arthritis",    Length: "602",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/BZYzdn/article/0M0eMg",    Error: 0}, {        Day: 49,    Importance: 1,    Subject: "Orthopädie",    Chapter: "Benigne Knochentumoren",    Length: "1479",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/yZYdVn/article/7Q04xf",    Error: 0}, {        Day: 49,    Importance: 2,    Subject: "Orthopädie",    Chapter: "Maligne Knochentumoren",    Length: "1437",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/yZYdVn/article/HQ0Kxf",    Error: 0}, {        Day: 49,    Importance: 3,    Subject: "Orthopädie",    Chapter: "Wirbelgleiten",    Length: "784",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/yZYdVn/article/PQ0Wwf",    Error: 0}, {        Day: 49,    Importance: 4,    Subject: "Orthopädie",    Chapter: "Bandscheibenprolaps",    Length: "2216",    Imppact: 3,    Url: "https://next.amboss.com/de/courses/KR0ULf/yZYdVn/article/ji0_rf",    Error: 0}, {        Day: 49,    Importance: 5,    Subject: "Orthopädie",    Chapter: "Adoleszente idiopatische Skoliose",    Length: "931",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/yZYdVn/article/4Q03wf",    Error: 0}, {        Day: 49,    Importance: 6,    Subject: "Orthopädie",    Chapter: "Rückenschmerz",    Length: "1309",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/yZYdVn/article/nL07yg",    Error: 0}, {        Day: 50,    Importance: 1,    Subject: "Orthopädie",    Chapter: "Morbus Dupuytren",    Length: "404",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/hQ0cDf",    Error: 0}, {        Day: 50,    Importance: 2,    Subject: "Orthopädie",    Chapter: "Tendovaginitis",    Length: "465",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/3Q0SDf",    Error: 0}, {        Day: 50,    Importance: 3,    Subject: "Orthopädie",    Chapter: "Tendinopathie",    Length: "524",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/vQ0ABf",    Error: 0}, {        Day: 50,    Importance: 4,    Subject: "Orthopädie",    Chapter: "Komplexes regionales Schmerzsyndrom",    Length: "774",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/R30lRf",    Error: 0}, {        Day: 50,    Importance: 5,    Subject: "Orthopädie",    Chapter: "Thoracic-Outlet-Syndrom",    Length: "499",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/QQ0uDf",    Error: 0}, {        Day: 50,    Importance: 6,    Subject: "Orthopädie",    Chapter: "Weichteilläsionen der Schulter",    Length: "1807",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/UQ0bvf",    Error: 0}, {        Day: 50,    Importance: 7,    Subject: "Orthopädie",    Chapter: "Schultergelenkluxation",    Length: "1098",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/P30Wif",    Error: 0}, {        Day: 50,    Importance: 8,    Subject: "Orthopädie",    Chapter: "Bizepssehnenruptur",    Length: "566",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/gQ0Fvf",    Error: 0}, {        Day: 50,    Importance: 9,    Subject: "Orthopädie",    Chapter: "Luxationen des Ellenbogengelenks",    Length: "498",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/0l0evT",    Error: 0}, {        Day: 50,    Importance: 10,    Subject: "Orthopädie",    Chapter: "Radiuskopf-Subluxation",    Length: "403",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/4303if",    Error: 0}, {        Day: 50,    Importance: 11,    Subject: "Orthopädie",    Chapter: "Karpaltunnelsyndrom",    Length: "780",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/sR0tof",    Error: 0}, {        Day: 50,    Importance: 12,    Subject: "Orthopädie",    Chapter: "Sehnenverletzung der Hand",    Length: "871",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/N30-if",    Error: 0}, {        Day: 50,    Importance: 13,    Subject: "Orthopädie",    Chapter: "Sammelsurium der Unfallchirurgie und Orthopädie",    Length: "830",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/AZYRVn/article/i50JPg",    Error: 0}, {        Day: 51,    Importance: 1,    Subject: "Orthopädie",    Chapter: "Osteochondrosis dissecans",    Length: "382",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/JQ0sCf",    Error: 0}, {        Day: 51,    Importance: 2,    Subject: "Orthopädie",    Chapter: "Osteonekrosen",    Length: "926",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/rQ0fxf",    Error: 0}, {        Day: 51,    Importance: 3,    Subject: "Orthopädie",    Chapter: "Aseptische Hüftkopfnekrose im Erwachsenenalter",    Length: "285",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/5Q0i9f",    Error: 0}, {        Day: 51,    Importance: 4,    Subject: "Orthopädie",    Chapter: "Fehlstellungen der unteren Extremität",    Length: "984",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/lQ0vwf",    Error: 0}, {        Day: 51,    Importance: 5,    Subject: "Orthopädie",    Chapter: "Koxarthrose und Gonarthrose",    Length: "1109",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/LQ0w9f",    Error: 0}, {        Day: 51,    Importance: 6,    Subject: "Orthopädie",    Chapter: "Sportverletzungen",    Length: "1079",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/AM0Rrg",    Error: 0}, {        Day: 51,    Importance: 7,    Subject: "Orthopädie",    Chapter: "Meniskusruptur",    Length: "785",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/oQ00Cf",    Error: 0}, {        Day: 51,    Importance: 8,    Subject: "Orthopädie",    Chapter: "Patellaluxation",    Length: "629",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/KQ0UCf",    Error: 0}, {        Day: 51,    Importance: 9,    Subject: "Orthopädie",    Chapter: "Bandverletzungen des Knies",    Length: "1120",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/pQ0LCf",    Error: 0}, {        Day: 51,    Importance: 10,    Subject: "Orthopädie",    Chapter: "Achillessehnenruptur",    Length: "728",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/p30Ljf",    Error: 0}, {        Day: 51,    Importance: 11,    Subject: "Orthopädie",    Chapter: "Fußdeformitäten",    Length: "1624",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/qQ0CCf",    Error: 0}, {        Day: 51,    Importance: 12,    Subject: "Orthopädie",    Chapter: "Zehendeformitäten",    Length: "543",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/_ZY5Vn/article/IQ0Yxf",    Error: 0}, {        Day: 52,    Importance: 1,    Subject: "Gynäkologie",    Chapter: "Diagnostik in der Gynäkologie",    Length: "3054",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/zZYrVn/article/SN0y0g",    Error: 0}, {        Day: 52,    Importance: 2,    Subject: "Gynäkologie",    Chapter: "Fehlbildungen der weiblichen Geschlechtsorgane",    Length: "878",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/zZYrVn/article/vk0ApT",    Error: 0}, {        Day: 52,    Importance: 3,    Subject: "Gynäkologie",    Chapter: "Androgenresistenz",    Length: "503",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/zZYrVn/article/9k0NJT",    Error: 0}, {        Day: 52,    Importance: 4,    Subject: "Gynäkologie",    Chapter: "Östrogenwirkung und assoziierte Erkrankungen",    Length: "556",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/zZYrVn/article/uk0ppT",    Error: 0}, {        Day: 52,    Importance: 5,    Subject: "Gynäkologie",    Chapter: "Menstruationszyklus und Zyklusanomalien",    Length: "1460",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/zZYrVn/article/Ek08pT",    Error: 0}, {        Day: 52,    Importance: 6,    Subject: "Gynäkologie",    Chapter: "Endometriose",    Length: "1229",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/zZYrVn/article/-k0DqT",    Error: 0}, {        Day: 52,    Importance: 7,    Subject: "Gynäkologie",    Chapter: "Polyzystisches Ovarialsyndrom",    Length: "655",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/zZYrVn/article/AO0RET",    Error: 0}, {        Day: 52,    Importance: 8,    Subject: "Gynäkologie",    Chapter: "Klimakterium",    Length: "868",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/zZYrVn/article/BO0zuT",    Error: 0}, {        Day: 52,    Importance: 9,    Subject: "Gynäkologie",    Chapter: "Entzündungen des weiblichen Genitaltrakts",    Length: "1664",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/zZYrVn/article/xk0EJT",    Error: 0}, {        Day: 52,    Importance: 10,    Subject: "Gynäkologie",    Chapter: "Entzündliche und benigne Veränderungen der Mamma",    Length: "911",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/zZYrVn/article/Ak0RqT",    Error: 0}, {        Day: 53,    Importance: 1,    Subject: "Gynäkologie",    Chapter: "Mammakarzinom",    Length: "4849",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/KR0ULf/-ZYDVn/article/_k05qT",    Error: 0}, {        Day: 53,    Importance: 2,    Subject: "Gynäkologie",    Chapter: "Uterusmyom",    Length: "1520",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/-ZYDVn/article/zk0rqT",    Error: 0}, {        Day: 53,    Importance: 3,    Subject: "Gynäkologie",    Chapter: "Benigne Ovarialtumoren",    Length: "425",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/-ZYDVn/article/-H0DGh",    Error: 0}, {        Day: 53,    Importance: 4,    Subject: "Gynäkologie",    Chapter: "Maligne Ovarialtumoren",    Length: "2761",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/-ZYDVn/article/aO0QIT",    Error: 0}, {        Day: 54,    Importance: 1,    Subject: "Gynäkologie",    Chapter: "Infektion mit humanen Papillomaviren",    Length: "1428",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Z0YZen/article/zO0rET",    Error: 0}, {        Day: 54,    Importance: 2,    Subject: "Gynäkologie",    Chapter: "Zervixkarzinom",    Length: "2700",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/Z0YZen/article/ZO0ZIT",    Error: 0}, {        Day: 54,    Importance: 3,    Subject: "Gynäkologie",    Chapter: "Endometriumkarzinom",    Length: "1547",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Z0YZen/article/0O0eIT",    Error: 0}, {        Day: 54,    Importance: 4,    Subject: "Gynäkologie",    Chapter: "Vulvakarzinom",    Length: "1095",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Z0YZen/article/bO0HIT",    Error: 0}, {        Day: 55,    Importance: 1,    Subject: "Gynäkologie",    Chapter: "Schwangerschaftsabbruch",    Length: "1235",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/00Yeen/article/Dk01JT",    Error: 0}, {        Day: 55,    Importance: 2,    Subject: "Gynäkologie",    Chapter: "Sterilität, Infertilität und Impotenz",    Length: "1854",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/00Yeen/article/RM0log",    Error: 0}, {        Day: 55,    Importance: 3,    Subject: "Gynäkologie",    Chapter: "Nicht-hormonelle Kontrazeption",    Length: "861",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/00Yeen/article/Ck0qJT",    Error: 0}, {        Day: 55,    Importance: 4,    Subject: "Gynäkologie",    Chapter: "Schwangerschaft",    Length: "1950",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/00Yeen/article/dO0orT",    Error: 0}, {        Day: 55,    Importance: 5,    Subject: "Gynäkologie",    Chapter: "Vorsorgeuntersuchungen in der Schwangerschaft",    Length: "1400",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/00Yeen/article/RN0lag",    Error: 0}, {        Day: 55,    Importance: 6,    Subject: "Gynäkologie",    Chapter: "Pränataldiagnostik",    Length: "675",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/00Yeen/article/--0D-i",    Error: 0}, {        Day: 55,    Importance: 7,    Subject: "Gynäkologie",    Chapter: "Kardiotokografie (CTG)",    Length: "890",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/00Yeen/article/uG0pa3",    Error: 0}, {        Day: 55,    Importance: 8,    Subject: "Gynäkologie",    Chapter: "Mehrlingsschwangerschaft",    Length: "663",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/00Yeen/article/Yl0nvT",    Error: 0}, {        Day: 55,    Importance: 9,    Subject: "Gynäkologie",    Chapter: "Extrauteringravidität",    Length: "854",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/00Yeen/article/fO0k7T",    Error: 0}, {        Day: 55,    Importance: 10,    Subject: "Gynäkologie",    Chapter: "Fruchtwasseranomalien",    Length: "693",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/00Yeen/article/PJ0W8S",    Error: 0}, {        Day: 56,    Importance: 1,    Subject: "Gynäkologie",    Chapter: "Hypertensive Schwangerschaftserkrankungen",    Length: "1564",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/VO0GrT",    Error: 0}, {        Day: 56,    Importance: 2,    Subject: "Gynäkologie",    Chapter: "HELLP-Syndrom",    Length: "569",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/sG0t03",    Error: 0}, {        Day: 56,    Importance: 3,    Subject: "Gynäkologie",    Chapter: "Blutungen während der Schwangerschaft",    Length: "692",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/mM0V6g",    Error: 0}, {        Day: 56,    Importance: 4,    Subject: "Gynäkologie",    Chapter: "Intra- und postpartale Blutungen",    Length: "1259",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/SG0yAh",    Error: 0}, {        Day: 56,    Importance: 5,    Subject: "Gynäkologie",    Chapter: "Intrauterine Wachstumsrestriktion",    Length: "502",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/al0QvT",    Error: 0}, {        Day: 56,    Importance: 6,    Subject: "Gynäkologie",    Chapter: "Vorzeitige Plazentalösung",    Length: "812",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/UO0b7T",    Error: 0}, {        Day: 56,    Importance: 7,    Subject: "Gynäkologie",    Chapter: "Placenta praevia",    Length: "663",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/oI00dh",    Error: 0}, {        Day: 56,    Importance: 8,    Subject: "Gynäkologie",    Chapter: "Nabelschnurkomplikationen",    Length: "574",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/jJ0_FS",    Error: 0}, {        Day: 56,    Importance: 9,    Subject: "Gynäkologie",    Chapter: "Trophoblasttumoren",    Length: "618",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/2O0T7T",    Error: 0}, {        Day: 56,    Importance: 10,    Subject: "Gynäkologie",    Chapter: "Geburtsablauf",    Length: "943",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/3O0SHT",    Error: 0}, {        Day: 56,    Importance: 11,    Subject: "Gynäkologie",    Chapter: "Geburtsmechanik",    Length: "1894",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/Xl09vT",    Error: 0}, {        Day: 56,    Importance: 12,    Subject: "Gynäkologie",    Chapter: "Geburtseinleitung",    Length: "507",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/0t0eX3",    Error: 0}, {        Day: 56,    Importance: 13,    Subject: "Gynäkologie",    Chapter: "Operative Geburtshilfe",    Length: "716",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/zG0rb3",    Error: 0}, {        Day: 56,    Importance: 14,    Subject: "Gynäkologie",    Chapter: "Drohende Frühgeburt",    Length: "1060",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/gO0F7T",    Error: 0}, {        Day: 56,    Importance: 15,    Subject: "Gynäkologie",    Chapter: "Abort und intrauteriner Fruchttod",    Length: "938",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/MD0MUR",    Error: 0}, {        Day: 56,    Importance: 16,    Subject: "Gynäkologie",    Chapter: "Uterusruptur",    Length: "629",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/RO0lHT",    Error: 0}, {        Day: 56,    Importance: 17,    Subject: "Gynäkologie",    Chapter: "Wochenbett",    Length: "1404",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/a0YQen/article/iO0JHT",    Error: 0}, {        Day: 57,    Importance: 1,    Subject: "Urologie",    Chapter: "Apparative Diagnostik in der Urologie",    Length: "698",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/c50aQg",    Error: 0}, {        Day: 57,    Importance: 2,    Subject: "Urologie",    Chapter: "Kongenitale Anomalien der Nieren und ableitenden Harnwege",    Length: "808",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/Oi0I7f",    Error: 0}, {        Day: 57,    Importance: 3,    Subject: "Urologie",    Chapter: "Polyzystische Nierenerkrankung",    Length: "1258",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/li0v7f",    Error: 0}, {        Day: 57,    Importance: 4,    Subject: "Urologie",    Chapter: "Blasenekstrophie, Fehlanlagen der männlichen Harnröhre und Palmure",    Length: "480",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/Mi0MHf",    Error: 0}, {        Day: 57,    Importance: 5,    Subject: "Urologie",    Chapter: "Balanitis und Balanoposthitis",    Length: "393",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/oi00sf",    Error: 0}, {        Day: 57,    Importance: 6,    Subject: "Urologie",    Chapter: "Phimose",    Length: "480",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/_J059S",    Error: 0}, {        Day: 57,    Importance: 7,    Subject: "Urologie",    Chapter: "Hodenhochstand",    Length: "568",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/ni07Hf",    Error: 0}, {        Day: 57,    Importance: 8,    Subject: "Urologie",    Chapter: "Harninkontinenz",    Length: "537",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/ZQ0Zuf",    Error: 0}, {        Day: 57,    Importance: 9,    Subject: "Urologie",    Chapter: "Belastungsinkontinenz",    Length: "435",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/Ai0R8f",    Error: 0}, {        Day: 57,    Importance: 10,    Subject: "Urologie",    Chapter: "Dranginkontinenz",    Length: "628",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/yi0d8f",    Error: 0}, {        Day: 57,    Importance: 11,    Subject: "Urologie",    Chapter: "Harnverhalt",    Length: "695",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/Ci0qFf",    Error: 0}, {        Day: 57,    Importance: 12,    Subject: "Urologie",    Chapter: "Harnabflussstörungen",    Length: "1047",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/Ni0-7f",    Error: 0}, {        Day: 57,    Importance: 13,    Subject: "Urologie",    Chapter: "Vesikoureteraler Reflux",    Length: "816",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/-i0D8f",    Error: 0}, {        Day: 57,    Importance: 14,    Subject: "Urologie",    Chapter: "Morbus Ormond",    Length: "290",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/9h0NTf",    Error: 0}, {        Day: 57,    Importance: 15,    Subject: "Urologie",    Chapter: "Urozystitis",    Length: "962",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/7i04Gf",    Error: 0}, {        Day: 57,    Importance: 16,    Subject: "Urologie",    Chapter: "Urethritis",    Length: "284",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/ui0ptf",    Error: 0}, {        Day: 57,    Importance: 17,    Subject: "Urologie",    Chapter: "Pyelonephritis",    Length: "853",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/Hi0KGf",    Error: 0}, {        Day: 57,    Importance: 18,    Subject: "Urologie",    Chapter: "Perinephritischer Abszess",    Length: "291",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/si0tGf",    Error: 0}, {        Day: 57,    Importance: 19,    Subject: "Urologie",    Chapter: "Prostatitis",    Length: "539",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/ti0Xtf",    Error: 0}, {        Day: 57,    Importance: 20,    Subject: "Urologie",    Chapter: "Epididymitis und Orchitis",    Length: "475",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/Fi0gtf",    Error: 0}, {        Day: 57,    Importance: 21,    Subject: "Urologie",    Chapter: "Hydrocele testis, Varikozele und Spermatozele",    Length: "474",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/AJ0R9S",    Error: 0}, {        Day: 57,    Importance: 22,    Subject: "Urologie",    Chapter: "Skrotalabszess",    Length: "160",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/Y0Ynen/article/vi0Atf",    Error: 0}, {        Day: 58,    Importance: 1,    Subject: "Urologie",    Chapter: "Nierenzellkarzinom",    Length: "1236",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/Ki0Usf",    Error: 0}, {        Day: 58,    Importance: 2,    Subject: "Urologie",    Chapter: "Benignes Prostatasyndrom",    Length: "1166",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/AQ0RAf",    Error: 0}, {        Day: 58,    Importance: 3,    Subject: "Urologie",    Chapter: "Prostatakarzinom",    Length: "1006",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/Ji0ssf",    Error: 0}, {        Day: 58,    Importance: 4,    Subject: "Urologie",    Chapter: "Urothelkarzinom",    Length: "1297",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/6i0jsf",    Error: 0}, {        Day: 58,    Importance: 5,    Subject: "Urologie",    Chapter: "Maligne Hodentumoren",    Length: "938",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/Ii0YGf",    Error: 0}, {        Day: 58,    Importance: 6,    Subject: "Urologie",    Chapter: "Peniskarzinom",    Length: "334",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/ri0fGf",    Error: 0}, {        Day: 58,    Importance: 7,    Subject: "Urologie",    Chapter: "Urolithiasis",    Length: "1288",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/qg0Cw2",    Error: 0}, {        Day: 58,    Importance: 8,    Subject: "Urologie",    Chapter: "Traumatische Verletzungen der Niere und der ableitenden Harnwege",    Length: "436",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/9i0NFf",    Error: 0}, {        Day: 58,    Importance: 9,    Subject: "Urologie",    Chapter: "Hodentorsion",    Length: "621",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/Li0wHf",    Error: 0}, {        Day: 58,    Importance: 10,    Subject: "Urologie",    Chapter: "Priapismus",    Length: "468",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/xi0EFf",    Error: 0}, {        Day: 58,    Importance: 11,    Subject: "Urologie",    Chapter: "Penisruptur",    Length: "259",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/Bi0zFf",    Error: 0}, {        Day: 58,    Importance: 12,    Subject: "Urologie",    Chapter: "Störungen der Erektion und Ejakulation",    Length: "427",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/uM0pqg",    Error: 0}, {        Day: 58,    Importance: 13,    Subject: "Urologie",    Chapter: "Spermiogramm",    Length: "376",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/b0YHen/article/_i058f",    Error: 0}, {        Day: 59,    Importance: 1,    Subject: "HNO",    Chapter: "Audiometrische Verfahren in der HNO",    Length: "2089",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/NN0-Yg",    Error: 0}, {        Day: 59,    Importance: 2,    Subject: "HNO",    Chapter: "Othämatom und Otserom",    Length: "171",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/qj0CYT",    Error: 0}, {        Day: 59,    Importance: 3,    Subject: "HNO",    Chapter: "Otitis externa",    Length: "509",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/mj0VaT",    Error: 0}, {        Day: 59,    Importance: 4,    Subject: "HNO",    Chapter: "Akute Otitis media",    Length: "478",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/Mj0MaT",    Error: 0}, {        Day: 59,    Importance: 5,    Subject: "HNO",    Chapter: "Mastoiditis und Labyrinthitis",    Length: "740",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/zJ0r9S",    Error: 0}, {        Day: 59,    Importance: 6,    Subject: "HNO",    Chapter: "Tubenfunktionsstörungen",    Length: "759",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/5j0iaT",    Error: 0}, {        Day: 59,    Importance: 7,    Subject: "HNO",    Chapter: "Otosklerose",    Length: "349",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/Kj0UYT",    Error: 0}, {        Day: 59,    Importance: 8,    Subject: "HNO",    Chapter: "Chronische Otitis media",    Length: "1028",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/Lj0waT",    Error: 0}, {        Day: 59,    Importance: 9,    Subject: "HNO",    Chapter: "Glomustumor",    Length: "279",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/oj00YT",    Error: 0}, {        Day: 59,    Importance: 10,    Subject: "HNO",    Chapter: "Hörsturz",    Length: "586",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/6j0jYT",    Error: 0}, {        Day: 59,    Importance: 11,    Subject: "HNO",    Chapter: "Akustisches Trauma",    Length: "680",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/Jj0sYT",    Error: 0}, {        Day: 59,    Importance: 12,    Subject: "HNO",    Chapter: "Tinnitus",    Length: "711",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/wn0hvg",    Error: 0}, {        Day: 59,    Importance: 13,    Subject: "HNO",    Chapter: "Benigner paroxysmaler Lagerungsschwindel",    Length: "729",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/Ti06If",    Error: 0}, {        Day: 59,    Importance: 14,    Subject: "HNO",    Chapter: "Morbus Menière",    Length: "747",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/gi0FIf",    Error: 0}, {        Day: 59,    Importance: 15,    Subject: "HNO",    Chapter: "Neuropathia vestibularis",    Length: "652",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/Si0yIf",    Error: 0}, {        Day: 59,    Importance: 16,    Subject: "HNO",    Chapter: "Epistaxis",    Length: "475",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/Hj0KbT",    Error: 0}, {        Day: 59,    Importance: 17,    Subject: "HNO",    Chapter: "Tumoren der Nasenhaupthöhle und Nasennebenhöhlen",    Length: "570",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/d50oQg",    Error: 0}, {        Day: 59,    Importance: 18,    Subject: "HNO",    Chapter: "Sinusitis",    Length: "1332",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/sj0tbT",    Error: 0}, {        Day: 59,    Importance: 19,    Subject: "HNO",    Chapter: "Allergische Rhinitis",    Length: "437",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/K-0Uyi",    Error: 0}, {        Day: 59,    Importance: 20,    Subject: "HNO",    Chapter: "Gesichts- und Felsenbeinfrakturen",    Length: "1140",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/X0Y9en/article/8j0OXT",    Error: 0}, {        Day: 60,    Importance: 1,    Subject: "HNO",    Chapter: "Adenoide Vegetationen",    Length: "437",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/Dj01cT",    Error: 0}, {        Day: 60,    Importance: 2,    Subject: "HNO",    Chapter: "Juveniles Angiofibrom",    Length: "306",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/xj0EcT",    Error: 0}, {        Day: 60,    Importance: 3,    Subject: "HNO",    Chapter: "Zungenveränderungen",    Length: "333",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/9j0NcT",    Error: 0}, {        Day: 60,    Importance: 4,    Subject: "HNO",    Chapter: "Akute Angina tonsillaris",    Length: "1433",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/wj0hcT",    Error: 0}, {        Day: 60,    Importance: 5,    Subject: "HNO",    Chapter: "Peritonsillar-, Parapharyngeal- und Retropharyngealabszess",    Length: "655",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/7M04Jg",    Error: 0}, {        Day: 60,    Importance: 6,    Subject: "HNO",    Chapter: "Pharynxkarzinom",    Length: "1250",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/Cj0qcT",    Error: 0}, {        Day: 60,    Importance: 7,    Subject: "HNO",    Chapter: "Kehlkopflähmung",    Length: "731",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/_j051T",    Error: 0}, {        Day: 60,    Importance: 8,    Subject: "HNO",    Chapter: "Benigne Tumoren und Präkanzerosen des Larynx",    Length: "768",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/zj0r1T",    Error: 0}, {        Day: 60,    Importance: 9,    Subject: "HNO",    Chapter: "Larynxkarzinom",    Length: "858",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/ZP0ZWT",    Error: 0}, {        Day: 60,    Importance: 10,    Subject: "HNO",    Chapter: "Halszyste und Halsfistel",    Length: "558",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/aP0QWT",    Error: 0}, {        Day: 60,    Importance: 11,    Subject: "HNO",    Chapter: "Kopfspeicheldrüsenerkrankungen",    Length: "1240",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/bP0HWT",    Error: 0}, {        Day: 60,    Importance: 12,    Subject: "HNO",    Chapter: "Sjögren-Syndrom",    Length: "620",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/XP09WT",    Error: 0}, {        Day: 60,    Importance: 13,    Subject: "HNO",    Chapter: "Sprach- und Sprechentwicklungsstörungen",    Length: "589",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/WP0PdT",    Error: 0}, {        Day: 60,    Importance: 14,    Subject: "HNO",    Chapter: "Sammelsurium der HNO",    Length: "798",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/c0YaUn/article/a50Qig",    Error: 0}, {        Day: 61,    Importance: 1,    Subject: "Augenheilkunde",    Chapter: "Untersuchungsmethoden in der Augenheilkunde",    Length: "1152",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/aM0QMg",    Error: 0}, {        Day: 61,    Importance: 2,    Subject: "Augenheilkunde",    Chapter: "Störungen der Lidstellung",    Length: "515",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/lO0vsT",    Error: 0}, {        Day: 61,    Importance: 3,    Subject: "Augenheilkunde",    Chapter: "Entzündungen der Augenlider",    Length: "400",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/NO0-sT",    Error: 0}, {        Day: 61,    Importance: 4,    Subject: "Augenheilkunde",    Chapter: "Erkrankungen des Tränenapparats",    Length: "515",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/5O0iGT",    Error: 0}, {        Day: 61,    Importance: 5,    Subject: "Augenheilkunde",    Chapter: "Infektiöse Konjunktivitis",    Length: "514",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/MO0MGT",    Error: 0}, {        Day: 61,    Importance: 6,    Subject: "Augenheilkunde",    Chapter: "Nicht-infektiöse Konjunktivitis",    Length: "496",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/gr0Fgh",    Error: 0}, {        Day: 61,    Importance: 7,    Subject: "Augenheilkunde",    Chapter: "Allergische Konjunktivitiden",    Length: "499",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/Tr06gh",    Error: 0}, {        Day: 61,    Importance: 8,    Subject: "Augenheilkunde",    Chapter: "Degenerationen, Dystrophien und Tumoren der Konjunktiven",    Length: "725",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/nO07GT",    Error: 0}, {        Day: 61,    Importance: 9,    Subject: "Augenheilkunde",    Chapter: "Erkrankungen der Hornhaut",    Length: "809",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/9O0NuT",    Error: 0}, {        Day: 61,    Importance: 10,    Subject: "Augenheilkunde",    Chapter: "Keratitis",    Length: "871",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/oO00tT",    Error: 0}, {        Day: 61,    Importance: 11,    Subject: "Augenheilkunde",    Chapter: "Entzündungen der Sklera",    Length: "297",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/KO0UtT",    Error: 0}, {        Day: 61,    Importance: 12,    Subject: "Augenheilkunde",    Chapter: "Erkrankungen der Linse",    Length: "314",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/6O0jtT",    Error: 0}, {        Day: 61,    Importance: 13,    Subject: "Augenheilkunde",    Chapter: "Katarakt",    Length: "904",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/pO0LtT",    Error: 0}, {        Day: 61,    Importance: 14,    Subject: "Augenheilkunde",    Chapter: "Erkrankungen der Uvea",    Length: "1031",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/JO0stT",    Error: 0}, {        Day: 61,    Importance: 15,    Subject: "Augenheilkunde",    Chapter: "Aderhautmelanom",    Length: "427",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/10Y2Un/article/NM0-Kg",    Error: 0}, {        Day: 62,    Importance: 1,    Subject: "Augenheilkunde",    Chapter: "Pupillenstörungen",    Length: "448",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/qO0CtT",    Error: 0}, {        Day: 62,    Importance: 2,    Subject: "Augenheilkunde",    Chapter: "Erkrankungen des Glaskörpers",    Length: "777",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/rO0fFT",    Error: 0}, {        Day: 62,    Importance: 3,    Subject: "Augenheilkunde",    Chapter: "Endophthalmitis",    Length: "316",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/4M03Kg",    Error: 0}, {        Day: 62,    Importance: 4,    Subject: "Augenheilkunde",    Chapter: "Glaukom",    Length: "1538",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/IO0YFT",    Error: 0}, {        Day: 62,    Importance: 5,    Subject: "Augenheilkunde",    Chapter: "Erkrankungen der Netzhaut",    Length: "1428",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/sO0tFT",    Error: 0}, {        Day: 62,    Importance: 6,    Subject: "Augenheilkunde",    Chapter: "Retinale Gefäßverschlüsse",    Length: "753",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/HO0KFT",    Error: 0}, {        Day: 62,    Importance: 7,    Subject: "Augenheilkunde",    Chapter: "Netzhautablösung",    Length: "566",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/tO0X8T",    Error: 0}, {        Day: 62,    Importance: 8,    Subject: "Augenheilkunde",    Chapter: "Altersbedingte Makuladegeneration",    Length: "968",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/GO0BFT",    Error: 0}, {        Day: 62,    Importance: 9,    Subject: "Augenheilkunde",    Chapter: "Störungen der Sehbahn",    Length: "942",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/FO0g8T",    Error: 0}, {        Day: 62,    Importance: 10,    Subject: "Augenheilkunde",    Chapter: "Erkrankungen der Augenhöhle",    Length: "624",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/G50Blg",    Error: 0}, {        Day: 62,    Importance: 11,    Subject: "Augenheilkunde",    Chapter: "Horner-Syndrom",    Length: "306",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/Ui0bIf",    Error: 0}, {        Day: 62,    Importance: 12,    Subject: "Augenheilkunde",    Chapter: "Störungen der Optik",    Length: "1089",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/8O0O8T",    Error: 0}, {        Day: 62,    Importance: 13,    Subject: "Augenheilkunde",    Chapter: "Störungen der Bulbusmotilität und Strabismus",    Length: "696",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/uO0p8T",    Error: 0}, {        Day: 62,    Importance: 14,    Subject: "Augenheilkunde",    Chapter: "Störungen der optischen Wahrnehmung",    Length: "599",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/jM0_og",    Error: 0}, {        Day: 62,    Importance: 15,    Subject: "Augenheilkunde",    Chapter: "Unfall-Ophthalmologie",    Length: "796",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/W0YPUn/article/EO088T",    Error: 0}, {        Day: 63,    Importance: 1,    Subject: "Neurologie",    Chapter: "Neurologische Untersuchung",    Length: "8616",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/d0YoUn/article/o500Og",    Error: 0}, {        Day: 63,    Importance: 2,    Subject: "Neurologie",    Chapter: "Neurophysiologische Diagnostik",    Length: "813",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/d0YoUn/article/Cn0qvg",    Error: 0}, {        Day: 63,    Importance: 3,    Subject: "Neurologie",    Chapter: "Liquorpunktion",    Length: "1097",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/d0YoUn/article/-l0DzT",    Error: 0}, {        Day: 63,    Importance: 4,    Subject: "Neurologie",    Chapter: "Tremor",    Length: "441",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/d0YoUn/article/x30Ekf",    Error: 0}, {        Day: 63,    Importance: 5,    Subject: "Neurologie",    Chapter: "Parkinson-Syndrom und Parkinson-Krankheit",    Length: "2398",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/d0YoUn/article/C30qkf",    Error: 0}, {        Day: 63,    Importance: 6,    Subject: "Neurologie",    Chapter: "Atypische Parkinson-Syndrome",    Length: "673",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/d0YoUn/article/B30zkf",    Error: 0}, {        Day: 63,    Importance: 7,    Subject: "Neurologie",    Chapter: "Chorea Huntington",    Length: "811",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/d0YoUn/article/y30dOf",    Error: 0}, {        Day: 63,    Importance: 8,    Subject: "Neurologie",    Chapter: "Restless-Legs-Syndrom",    Length: "592",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/d0YoUn/article/z30rOf",    Error: 0}, {        Day: 63,    Importance: 9,    Subject: "Neurologie",    Chapter: "Grundlagen der Kleinhirnerkrankungen",    Length: "484",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/d0YoUn/article/BR0z6f",    Error: 0}, {        Day: 64,    Importance: 1,    Subject: "Neurologie",    Chapter: "Epileptische Anfälle",    Length: "1539",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/RR0l5f",    Error: 0}, {        Day: 64,    Importance: 2,    Subject: "Neurologie",    Chapter: "Status epilepticus",    Length: "591",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/FG0ga3",    Error: 0}, {        Day: 64,    Importance: 3,    Subject: "Neurologie",    Chapter: "Epilepsien und Epilepsiesyndrome",    Length: "1244",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/jR0_5f",    Error: 0}, {        Day: 64,    Importance: 4,    Subject: "Neurologie",    Chapter: "Transiente globale Amnesie",    Length: "311",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/4R03Mf",    Error: 0}, {        Day: 64,    Importance: 5,    Subject: "Neurologie",    Chapter: "Narkolepsie",    Length: "890",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/kR0mMf",    Error: 0}, {        Day: 64,    Importance: 6,    Subject: "Neurologie",    Chapter: "Vigilanzminderung",    Length: "1121",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/eR0xNf",    Error: 0}, {        Day: 64,    Importance: 7,    Subject: "Neurologie",    Chapter: "Schädel-Hirn-Trauma",    Length: "822",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/l70vNh",    Error: 0}, {        Day: 64,    Importance: 8,    Subject: "Neurologie",    Chapter: "Intrakranielle Druckerhöhung",    Length: "1406",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/r70fMh",    Error: 0}, {        Day: 64,    Importance: 9,    Subject: "Neurologie",    Chapter: "Irreversibler Hirnfunktionsausfall",    Length: "686",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/KI0Udh",    Error: 0}, {        Day: 64,    Importance: 10,    Subject: "Neurologie",    Chapter: "Epidurales Hämatom",    Length: "553",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/VR0GNf",    Error: 0}, {        Day: 64,    Importance: 11,    Subject: "Neurologie",    Chapter: "Subdurales Hämatom",    Length: "721",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/dR0oNf",    Error: 0}, {        Day: 64,    Importance: 12,    Subject: "Neurologie",    Chapter: "Subarachnoidalblutung",    Length: "1667",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/V0YGUn/article/2R0Tmf",    Error: 0}, {        Day: 65,    Importance: 1,    Subject: "Neurologie",    Chapter: "Idiopathische intrakranielle Hypertension",    Length: "513",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/e0YxUn/article/u30p4f",    Error: 0}, {        Day: 65,    Importance: 2,    Subject: "Neurologie",    Chapter: "Normaldruckhydrozephalus",    Length: "551",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/e0YxUn/article/E3084f",    Error: 0}, {        Day: 65,    Importance: 3,    Subject: "Neurologie",    Chapter: "Hirnnerven-Syndrome",    Length: "1286",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/e0YxUn/article/tR0XKf",    Error: 0}, {        Day: 65,    Importance: 4,    Subject: "Neurologie",    Chapter: "Syndrome der Schädelbasis",    Length: "768",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/e0YxUn/article/P50W4g",    Error: 0}, {        Day: 65,    Importance: 5,    Subject: "Neurologie",    Chapter: "Komplettes Querschnittsyndrom",    Length: "379",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/e0YxUn/article/Wi0Pqf",    Error: 0}, {        Day: 65,    Importance: 6,    Subject: "Neurologie",    Chapter: "Inkomplette Querschnittsyndrome",    Length: "500",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/e0YxUn/article/NR0-Mf",    Error: 0}, {        Day: 65,    Importance: 7,    Subject: "Neurologie",    Chapter: "Arteria-spinalis-anterior-Syndrom",    Length: "379",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/e0YxUn/article/5R0inf",    Error: 0}, {        Day: 65,    Importance: 8,    Subject: "Neurologie",    Chapter: "Syndrom der reaktionslosen Wachheit",    Length: "330",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/e0YxUn/article/Yi0nJf",    Error: 0}, {        Day: 65,    Importance: 9,    Subject: "Neurologie",    Chapter: "Locked-in-Syndrom",    Length: "154",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/e0YxUn/article/bi0HJf",    Error: 0}, {        Day: 66,    Importance: 1,    Subject: "Neurologie",    Chapter: "Hirntumor",    Length: "1035",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/H50Klg",    Error: 0}, {        Day: 66,    Importance: 2,    Subject: "Neurologie",    Chapter: "Astrozytome und Oligodendrogliome",    Length: "822",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/7504lg",    Error: 0}, {        Day: 66,    Importance: 3,    Subject: "Neurologie",    Chapter: "Meningeom",    Length: "568",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/I30YPf",    Error: 0}, {        Day: 66,    Importance: 4,    Subject: "Neurologie",    Chapter: "Akustikusneurinom und andere periphere Neurinome",    Length: "724",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/H30KPf",    Error: 0}, {        Day: 66,    Importance: 5,    Subject: "Neurologie",    Chapter: "Meningeosis neoplastica",    Length: "292",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/XR09lf",    Error: 0}, {        Day: 66,    Importance: 6,    Subject: "Neurologie",    Chapter: "Meningitis",    Length: "2531",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/ZR0Zlf",    Error: 0}, {        Day: 66,    Importance: 7,    Subject: "Neurologie",    Chapter: "Frühsommer-Meningoenzephalitis",    Length: "557",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/Sr0ygh",    Error: 0}, {        Day: 66,    Importance: 8,    Subject: "Neurologie",    Chapter: "Hirnabszess",    Length: "505",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/1R02Nf",    Error: 0}, {        Day: 66,    Importance: 9,    Subject: "Neurologie",    Chapter: "Herpes-simplex-Enzephalitis",    Length: "998",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/YR0nlf",    Error: 0}, {        Day: 66,    Importance: 10,    Subject: "Neurologie",    Chapter: "Creutzfeldt-Jakob-Krankheit",    Length: "416",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/cR0aNf",    Error: 0}, {        Day: 66,    Importance: 11,    Subject: "Neurologie",    Chapter: "Sammelsurium der Neurologie",    Length: "1042",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/U0Yb2n/article/l50v4g",    Error: 0}, {        Day: 67,    Importance: 1,    Subject: "Neurologie",    Chapter: "Ischämischer Schlaganfall",    Length: "3635",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/UR0bmf",    Error: 0}, {        Day: 67,    Importance: 2,    Subject: "Neurologie",    Chapter: "Intrazerebrale Blutung",    Length: "1230",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/fR0kmf",    Error: 0}, {        Day: 67,    Importance: 3,    Subject: "Neurologie",    Chapter: "Zerebrale Sinus- und Venenthrombose",    Length: "799",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/SR0ymf",    Error: 0}, {        Day: 67,    Importance: 4,    Subject: "Neurologie",    Chapter: "Karotis- und Vertebralisdissektion",    Length: "621",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/Pi0W7f",    Error: 0}, {        Day: 67,    Importance: 5,    Subject: "Neurologie",    Chapter: "Carotis-Sinus-cavernosus-Fistel",    Length: "276",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/2i0TIf",    Error: 0}, {        Day: 67,    Importance: 6,    Subject: "Neurologie",    Chapter: "Fibromuskuläre Dysplasie",    Length: "133",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/3R0S5f",    Error: 0}, {        Day: 67,    Importance: 7,    Subject: "Neurologie",    Chapter: "Migräne",    Length: "1484",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/hi0crf",    Error: 0}, {        Day: 67,    Importance: 8,    Subject: "Neurologie",    Chapter: "Spannungskopfschmerz",    Length: "440",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/3i0Srf",    Error: 0}, {        Day: 67,    Importance: 9,    Subject: "Neurologie",    Chapter: "Cluster-Kopfschmerz",    Length: "468",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/Ri0lrf",    Error: 0}, {        Day: 67,    Importance: 10,    Subject: "Neurologie",    Chapter: "Trigeminusneuralgie",    Length: "617",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/ii0Jrf",    Error: 0}, {        Day: 67,    Importance: 11,    Subject: "Neurologie",    Chapter: "Kopfschmerz bei Medikamentenübergebrauch",    Length: "315",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/dq0oxS",    Error: 0}, {        Day: 67,    Importance: 12,    Subject: "Neurologie",    Chapter: "Kopfschmerzen",    Length: "1312",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/20YT2n/article/YL0nwg",    Error: 0}, {        Day: 68,    Importance: 1,    Subject: "Neurologie",    Chapter: "Spastisches Syndrom",    Length: "285",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/vM0Aqg",    Error: 0}, {        Day: 68,    Importance: 2,    Subject: "Neurologie",    Chapter: "Multiple Sklerose",    Length: "2246",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/WR0PNf",    Error: 0}, {        Day: 68,    Importance: 3,    Subject: "Neurologie",    Chapter: "Neuromyelitis-optica-Spektrum-Erkrankungen",    Length: "396",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/OI0I1h",    Error: 0}, {        Day: 68,    Importance: 4,    Subject: "Neurologie",    Chapter: "Amyotrophe Lateralsklerose",    Length: "1231",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/LR0wnf",    Error: 0}, {        Day: 68,    Importance: 5,    Subject: "Neurologie",    Chapter: "Spinale Muskelatrophien",    Length: "518",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/MR0Mnf",    Error: 0}, {        Day: 68,    Importance: 6,    Subject: "Neurologie",    Chapter: "Myasthenia gravis",    Length: "1412",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/DR016f",    Error: 0}, {        Day: 68,    Importance: 7,    Subject: "Neurologie",    Chapter: "Myotone Syndrome",    Length: "1045",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/uR0pKf",    Error: 0}, {        Day: 68,    Importance: 8,    Subject: "Neurologie",    Chapter: "Periodische Lähmung",    Length: "213",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/ER08Kf",    Error: 0}, {        Day: 68,    Importance: 9,    Subject: "Neurologie",    Chapter: "Progressive Muskeldystrophien",    Length: "939",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/8R0OKf",    Error: 0}, {        Day: 68,    Importance: 10,    Subject: "Neurologie",    Chapter: "Stiff-Person-Syndrom",    Length: "326",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/wR0h6f",    Error: 0}, {        Day: 68,    Importance: 11,    Subject: "Neurologie",    Chapter: "Dystonie",    Length: "379",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/A30ROf",    Error: 0}, {        Day: 68,    Importance: 12,    Subject: "Neurologie",    Chapter: "Hereditäre spastische Paraplegie",    Length: "202",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/oR00Lf",    Error: 0}, {        Day: 68,    Importance: 13,    Subject: "Neurologie",    Chapter: "Friedreich-Ataxie",    Length: "505",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/f0Yk2n/article/KR0ULf",    Error: 0}, {        Day: 69,    Importance: 1,    Subject: "Neurologie",    Chapter: "Zervikale Myelopathie",    Length: "360",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/X509ig",    Error: 0}, {        Day: 69,    Importance: 2,    Subject: "Neurologie",    Chapter: "Degenerative Spinalkanalstenose",    Length: "393",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/JR0sLf",    Error: 0}, {        Day: 69,    Importance: 3,    Subject: "Neurologie",    Chapter: "Periphere Nervenläsionen",    Length: "1046",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/Zi0ZJf",    Error: 0}, {        Day: 69,    Importance: 4,    Subject: "Neurologie",    Chapter: "Nervus-radialis-Lähmung",    Length: "497",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/_R05pf",    Error: 0}, {        Day: 69,    Importance: 5,    Subject: "Neurologie",    Chapter: "Nervus-ulnaris-Lähmung",    Length: "766",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/AR0Rpf",    Error: 0}, {        Day: 69,    Importance: 6,    Subject: "Neurologie",    Chapter: "Nervus-medianus-Lähmung",    Length: "614",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/zR0rpf",    Error: 0}, {        Day: 69,    Importance: 7,    Subject: "Neurologie",    Chapter: "Neuralgische Schulteramyotrophie",    Length: "209",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/0i0eJf",    Error: 0}, {        Day: 69,    Importance: 8,    Subject: "Neurologie",    Chapter: "Periphere Fazialisparese",    Length: "1061",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/FR0gKf",    Error: 0}, {        Day: 69,    Importance: 9,    Subject: "Neurologie",    Chapter: "Polyneuropathie",    Length: "2275",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/qR0CLf",    Error: 0}, {        Day: 69,    Importance: 10,    Subject: "Neurologie",    Chapter: "Guillain-Barré-Syndrom",    Length: "1359",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/7R04of",    Error: 0}, {        Day: 69,    Importance: 11,    Subject: "Neurologie",    Chapter: "Vitamin-B12-Mangel",    Length: "1010",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/T0Y62n/article/6R0jLf",    Error: 0}, {        Day: 70,    Importance: 1,    Subject: "Psychiatrie",    Chapter: "Psychopathologischer Befund",    Length: "2074",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/pM0Lpg",    Error: 0}, {        Day: 70,    Importance: 2,    Subject: "Psychiatrie",    Chapter: "Psychotherapeutische Verfahren (Klinik)",    Length: "2238",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/PN0WYg",    Error: 0}, {        Day: 70,    Importance: 3,    Subject: "Psychiatrie",    Chapter: "Delir",    Length: "1560",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/6P0jfT",    Error: 0}, {        Day: 70,    Importance: 4,    Subject: "Psychiatrie",    Chapter: "Demenzen",    Length: "1580",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/v30A4f",    Error: 0}, {        Day: 70,    Importance: 5,    Subject: "Psychiatrie",    Chapter: "Alzheimer-Krankheit",    Length: "709",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/D301kf",    Error: 0}, {        Day: 70,    Importance: 6,    Subject: "Psychiatrie",    Chapter: "Frontotemporale Demenz",    Length: "538",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/w30hkf",    Error: 0}, {        Day: 70,    Importance: 7,    Subject: "Psychiatrie",    Chapter: "Vaskuläre Demenz",    Length: "458",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/930Nkf",    Error: 0}, {        Day: 70,    Importance: 8,    Subject: "Psychiatrie",    Chapter: "Somatoforme Störungen",    Length: "583",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/MP0M2T",    Error: 0}, {        Day: 70,    Importance: 9,    Subject: "Psychiatrie",    Chapter: "Unipolare Depression",    Length: "1603",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/PP0WUT",    Error: 0}, {        Day: 70,    Importance: 10,    Subject: "Psychiatrie",    Chapter: "Bipolare affektive Störung",    Length: "1497",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/4P03UT",    Error: 0}, {        Day: 70,    Importance: 11,    Subject: "Psychiatrie",    Chapter: "Neuromodulationsverfahren",    Length: "419",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/g0YF2n/article/wM0hIg",    Error: 0}, {        Day: 71,    Importance: 1,    Subject: "Psychiatrie",    Chapter: "Zwangsstörungen",    Length: "752",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/OP0IUT",    Error: 0}, {        Day: 71,    Importance: 2,    Subject: "Psychiatrie",    Chapter: "Reaktionen auf schwere Belastungen und Anpassungsstörungen",    Length: "1367",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/lP0vUT",    Error: 0}, {        Day: 71,    Importance: 3,    Subject: "Psychiatrie",    Chapter: "Dissoziative Störungen",    Length: "639",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/NP0-UT",    Error: 0}, {        Day: 71,    Importance: 4,    Subject: "Psychiatrie",    Chapter: "Opioide (Intoxikation und Abhängigkeit)",    Length: "636",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/Ar0RPh",    Error: 0}, {        Day: 71,    Importance: 5,    Subject: "Psychiatrie",    Chapter: "Cannabinoide",    Length: "569",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/_r05Ph",    Error: 0}, {        Day: 71,    Importance: 6,    Subject: "Psychiatrie",    Chapter: "Sedativa (Intoxikation und Abhängigkeit)",    Length: "516",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/zr0rPh",    Error: 0}, {        Day: 71,    Importance: 7,    Subject: "Psychiatrie",    Chapter: "Rauchen und Tabakkonsum",    Length: "445",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/Z70Z4h",    Error: 0}, {        Day: 71,    Importance: 8,    Subject: "Psychiatrie",    Chapter: "Psychostimulanzien",    Length: "594",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/-r0DPh",    Error: 0}, {        Day: 71,    Importance: 9,    Subject: "Psychiatrie",    Chapter: "Alkoholbezogene Störungen",    Length: "1968",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/KP0UfT",    Error: 0}, {        Day: 71,    Importance: 10,    Subject: "Psychiatrie",    Chapter: "Wernicke-Enzephalopathie",    Length: "686",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/9R0N6f",    Error: 0}, {        Day: 71,    Importance: 11,    Subject: "Psychiatrie",    Chapter: "Schizophrenie",    Length: "2523",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/S0Yy2n/article/pP0LfT",    Error: 0}, {        Day: 72,    Importance: 1,    Subject: "Psychiatrie",    Chapter: "Persönlichkeitsstörungen",    Length: "728",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/h0Ycfn/article/nP072T",    Error: 0}, {        Day: 72,    Importance: 2,    Subject: "Psychiatrie",    Chapter: "Emotional instabile Persönlichkeitsstörung",    Length: "744",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/h0Ycfn/article/LP0w2T",    Error: 0}, {        Day: 72,    Importance: 3,    Subject: "Psychiatrie",    Chapter: "Tiefgreifende Entwicklungsstörungen",    Length: "1069",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/h0Ycfn/article/IP0YTT",    Error: 0}, {        Day: 72,    Importance: 4,    Subject: "Psychiatrie",    Chapter: "Tic-Störungen",    Length: "591",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/h0Ycfn/article/sP0tTT",    Error: 0}, {        Day: 72,    Importance: 5,    Subject: "Psychiatrie",    Chapter: "Essstörungen",    Length: "1477",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/h0Ycfn/article/GP0BTT",    Error: 0}, {        Day: 72,    Importance: 6,    Subject: "Psychiatrie",    Chapter: "Angststörungen",    Length: "1126",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/h0Ycfn/article/kP0mUT",    Error: 0}, {        Day: 72,    Importance: 7,    Subject: "Psychiatrie",    Chapter: "Insomnien",    Length: "598",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/h0Ycfn/article/t70Xnh",    Error: 0}, {        Day: 72,    Importance: 8,    Subject: "Psychiatrie",    Chapter: "Parasomnien",    Length: "658",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/h0Ycfn/article/tP0XgT",    Error: 0}, {        Day: 73,    Importance: 1,    Subject: "Psychiatrie",    Chapter: "Verhaltens- und emotionale Störungen im Kindes- und Jugendalter",    Length: "593",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/30YSfn/article/_5055g",    Error: 0}, {        Day: 73,    Importance: 2,    Subject: "Psychiatrie",    Chapter: "Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung",    Length: "585",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/30YSfn/article/rP0fTT",    Error: 0}, {        Day: 73,    Importance: 3,    Subject: "Psychiatrie",    Chapter: "Geschlechtsinkongruenz",    Length: "404",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/30YSfn/article/DM01Ig",    Error: 0}, {        Day: 73,    Importance: 4,    Subject: "Psychiatrie",    Chapter: "Paraphile Störungen",    Length: "297",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/30YSfn/article/Xr09fh",    Error: 0}, {        Day: 73,    Importance: 5,    Subject: "Psychiatrie",    Chapter: "Suizidalität",    Length: "2076",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/30YSfn/article/8P0OgT",    Error: 0}, {        Day: 73,    Importance: 6,    Subject: "Psychiatrie",    Chapter: "Betreuung und Zwangsmaßnahmen",    Length: "1367",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/30YSfn/article/uP0pgT",    Error: 0}, {        Day: 74,    Importance: 1,    Subject: "Pharmakologie",    Chapter: "Pharmakologische Grundlagen",    Length: "1906",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/7N04cg",    Error: 0}, {        Day: 74,    Importance: 2,    Subject: "Pharmakologie",    Chapter: "Arzneimittelrezept",    Length: "600",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/XM09Mg",    Error: 0}, {        Day: 74,    Importance: 3,    Subject: "Pharmakologie",    Chapter: "Parasympathomimetika",    Length: "427",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/HN0Kcg",    Error: 0}, {        Day: 74,    Importance: 4,    Subject: "Pharmakologie",    Chapter: "Parasympatholytika",    Length: "622",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/sN0tcg",    Error: 0}, {        Day: 74,    Importance: 5,    Subject: "Pharmakologie",    Chapter: "Anticholinerges Syndrom",    Length: "617",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/Yt0nX3",    Error: 0}, {        Day: 74,    Importance: 6,    Subject: "Pharmakologie",    Chapter: "β2-Sympathomimetika",    Length: "277",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/GN0Bcg",    Error: 0}, {        Day: 74,    Importance: 7,    Subject: "Pharmakologie",    Chapter: "Sympathomimetika",    Length: "1042",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/tN0X1g",    Error: 0}, {        Day: 74,    Importance: 8,    Subject: "Pharmakologie",    Chapter: "Antisympathotonika",    Length: "694",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/8N0O1g",    Error: 0}, {        Day: 74,    Importance: 9,    Subject: "Pharmakologie",    Chapter: "Betablocker",    Length: "850",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/uN0p1g",    Error: 0}, {        Day: 74,    Importance: 10,    Subject: "Pharmakologie",    Chapter: "Calciumantagonisten",    Length: "601",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/cm0aeg",    Error: 0}, {        Day: 74,    Importance: 11,    Subject: "Pharmakologie",    Chapter: "RAAS-Inhibitoren",    Length: "783",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/R0Ylfn/article/1m02eg",    Error: 0}, {        Day: 75,    Importance: 1,    Subject: "Pharmakologie",    Chapter: "Amiodaron",    Length: "506",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/Xm09Vg",    Error: 0}, {        Day: 75,    Importance: 2,    Subject: "Pharmakologie",    Chapter: "Nitrate und Molsidomin",    Length: "397",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/Wm0Peg",    Error: 0}, {        Day: 75,    Importance: 3,    Subject: "Pharmakologie",    Chapter: "Phosphodiesterase-Hemmer",    Length: "432",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/em0xeg",    Error: 0}, {        Day: 75,    Importance: 4,    Subject: "Pharmakologie",    Chapter: "Herzglykoside",    Length: "657",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/Vm0Geg",    Error: 0}, {        Day: 75,    Importance: 5,    Subject: "Pharmakologie",    Chapter: "Thrombozytenaggregationshemmer",    Length: "979",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/Um0bUg",    Error: 0}, {        Day: 75,    Importance: 6,    Subject: "Pharmakologie",    Chapter: "Parenterale Antikoagulanzien",    Length: "956",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/2m0TUg",    Error: 0}, {        Day: 75,    Importance: 7,    Subject: "Pharmakologie",    Chapter: "Orale Antikoagulanzien",    Length: "1643",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/Tm06Ug",    Error: 0}, {        Day: 75,    Importance: 8,    Subject: "Pharmakologie",    Chapter: "Diuretika",    Length: "355",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/gm0FUg",    Error: 0}, {        Day: 75,    Importance: 9,    Subject: "Pharmakologie",    Chapter: "Thiaziddiuretika",    Length: "366",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/Sm0yUg",    Error: 0}, {        Day: 75,    Importance: 10,    Subject: "Pharmakologie",    Chapter: "Schleifendiuretika",    Length: "527",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/hm0c2g",    Error: 0}, {        Day: 75,    Importance: 11,    Subject: "Pharmakologie",    Chapter: "Kaliumsparende Diuretika",    Length: "499",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/3m0S2g",    Error: 0}, {        Day: 75,    Importance: 12,    Subject: "Pharmakologie",    Chapter: "Überblick über Vergiftungen",    Length: "1129",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/i0YJfn/article/Af0RK2",    Error: 0}, {        Day: 76,    Importance: 1,    Subject: "Pharmakologie",    Chapter: "Antihistaminika",    Length: "470",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn/article/Pm0Wfg",    Error: 0}, {        Day: 76,    Importance: 2,    Subject: "Pharmakologie",    Chapter: "Glucocorticoide",    Length: "895",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn/article/km0mfg",    Error: 0}, {        Day: 76,    Importance: 3,    Subject: "Pharmakologie",    Chapter: "Protonenpumpenhemmer",    Length: "245",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn/article/rm0fSg",    Error: 0}, {        Day: 76,    Importance: 4,    Subject: "Pharmakologie",    Chapter: "Lipidsenker",    Length: "1009",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn/article/am0QVg",    Error: 0}, {        Day: 76,    Importance: 5,    Subject: "Pharmakologie",    Chapter: "Antidiabetika",    Length: "1397",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn/article/7m04Sg",    Error: 0}, {        Day: 76,    Importance: 6,    Subject: "Pharmakologie",    Chapter: "Insuline",    Length: "609",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn/article/Gm0BSg",    Error: 0}, {        Day: 76,    Importance: 7,    Subject: "Pharmakologie",    Chapter: "Bisphosphonate und andere antiosteoporotische Medikamente",    Length: "570",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn/article/tm0Xhg",    Error: 0}, {        Day: 76,    Importance: 8,    Subject: "Pharmakologie",    Chapter: "Thyreostatika",    Length: "388",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn/article/Fm0ghg",    Error: 0}, {        Day: 76,    Importance: 9,    Subject: "Pharmakologie",    Chapter: "Hormonelle Kontrazeption",    Length: "1255",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn/article/Em08hg",    Error: 0}, {        Day: 76,    Importance: 10,    Subject: "Pharmakologie",    Chapter: "Pharmakotherapie in der Schwangerschaft",    Length: "455",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/Q0Yufn/article/dm0oeg",    Error: 0}, {        Day: 77,    Importance: 1,    Subject: "Pharmakologie",    Chapter: "Antipsychotika",    Length: "1484",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/j0Y_fn/article/AN0Rdg",    Error: 0}, {        Day: 77,    Importance: 2,    Subject: "Pharmakologie",    Chapter: "Antidepressiva",    Length: "1132",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/j0Y_fn/article/_N05dg",    Error: 0}, {        Day: 77,    Importance: 3,    Subject: "Pharmakologie",    Chapter: "Lithium",    Length: "852",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/j0Y_fn/article/zN0rdg",    Error: 0}, {        Day: 77,    Importance: 4,    Subject: "Pharmakologie",    Chapter: "Anfallssuppressiva",    Length: "1014",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/j0Y_fn/article/-N0Ddg",    Error: 0}, {        Day: 77,    Importance: 5,    Subject: "Pharmakologie",    Chapter: "Parkinson-Medikamente",    Length: "882",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/j0Y_fn/article/Zm0ZVg",    Error: 0}, {        Day: 78,    Importance: 1,    Subject: "Pharmakologie",    Chapter: "Antibiotika",    Length: "2716",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/P0YWTn/article/mm0VTg",    Error: 0}, {        Day: 78,    Importance: 2,    Subject: "Pharmakologie",    Chapter: "Virostatika",    Length: "786",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/P0YWTn/article/pm0Lgg",    Error: 0}, {        Day: 78,    Importance: 3,    Subject: "Pharmakologie",    Chapter: "Interferontherapie",    Length: "339",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/P0YWTn/article/1K022S",    Error: 0}, {        Day: 78,    Importance: 4,    Subject: "Pharmakologie",    Chapter: "Antimykotika",    Length: "570",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/P0YWTn/article/6m0jgg",    Error: 0}, {        Day: 78,    Importance: 5,    Subject: "Pharmakologie",    Chapter: "Immunsuppressiva",    Length: "1958",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/P0YWTn/article/qM0Cpg",    Error: 0}, {        Day: 78,    Importance: 6,    Subject: "Pharmakologie",    Chapter: "Chloroquin und Hydroxychloroquin",    Length: "228",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/P0YWTn/article/8M0Oqg",    Error: 0}, {        Day: 78,    Importance: 7,    Subject: "Pharmakologie",    Chapter: "Zytostatika",    Length: "1541",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/P0YWTn/article/4m03fg",    Error: 0}, {        Day: 78,    Importance: 8,    Subject: "Pharmakologie",    Chapter: "Medikamente der zielgerichteten Tumortherapie",    Length: "1192",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/P0YWTn/article/TE06E3",    Error: 0}, {        Day: 78,    Importance: 9,    Subject: "Pharmakologie",    Chapter: "Antiemetika",    Length: "631",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/P0YWTn/article/qm0Cgg",    Error: 0}, {        Day: 79,    Importance: 1,    Subject: "Radiologie",    Chapter: "Röntgen",    Length: "1273",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/40Y3Tn/article/in0JGg",    Error: 0}, {        Day: 79,    Importance: 2,    Subject: "Radiologie",    Chapter: "Computertomografie",    Length: "1069",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/40Y3Tn/article/KN0UXg",    Error: 0}, {        Day: 79,    Importance: 3,    Subject: "Radiologie",    Chapter: "Magnetresonanztomografie",    Length: "993",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/40Y3Tn/article/pN0LXg",    Error: 0}, {        Day: 79,    Importance: 4,    Subject: "Radiologie",    Chapter: "Strahlentherapie",    Length: "526",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/40Y3Tn/article/L50wkg",    Error: 0}, {        Day: 79,    Importance: 5,    Subject: "Radiologie",    Chapter: "Radioiodtherapie",    Length: "349",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/40Y3Tn/article/Gl0ByT",    Error: 0}, {        Day: 79,    Importance: 6,    Subject: "Radiologie",    Chapter: "Schilddrüsenszintigrafie",    Length: "544",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/40Y3Tn/article/il0J9T",    Error: 0}, {        Day: 79,    Importance: 7,    Subject: "Radiologie",    Chapter: "Knochenszintigrafie",    Length: "361",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/40Y3Tn/article/JN0sXg",    Error: 0}, {        Day: 79,    Importance: 8,    Subject: "Radiologie",    Chapter: "Ösophagusbreischluck und Störungen der Ösophagusmotilität",    Length: "320",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/40Y3Tn/article/D501mg",    Error: 0}, {        Day: 79,    Importance: 9,    Subject: "Radiologie",    Chapter: "Tag 79 M2-Lernplan - Wiederholung des Querschnittbereichs Radiologie",    Length: "166",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/40Y3Tn/article/Bq0z0h",    Error: 0}, {        Day: 80,    Importance: 1,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Arbeitsmedizinische Organe und Gesetze",    Length: "922",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/wQ0hyf",    Error: 0}, {        Day: 80,    Importance: 2,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Verhütung und Früherkennung beruflich bedingter Schäden",    Length: "479",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/9Q0Nyf",    Error: 0}, {        Day: 80,    Importance: 3,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Anerkennung von Berufskrankheiten",    Length: "339",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/yQ0dAf",    Error: 0}, {        Day: 80,    Importance: 4,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Messkriterien der Arbeitsplatzbelastung",    Length: "407",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/BQ0zyf",    Error: 0}, {        Day: 80,    Importance: 5,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Berufskrankheiten durch physikalische Belastungen",    Length: "505",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/-Q0DAf",    Error: 0}, {        Day: 80,    Importance: 6,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Erkrankungen durch Metalle",    Length: "874",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/AQ0RAf",    Error: 0}, {        Day: 80,    Importance: 7,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Erkrankungen durch organische Lösungsmittel, Insektizide, Halogenkohlenwasserstoffe, Benzol und Homologe",    Length: "987",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/zQ0rAf",    Error: 0}, {        Day: 80,    Importance: 8,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Lungenerkrankungen durch Inhalation anorganischer Stäube",    Length: "285",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/aj0Q_f",    Error: 0}, {        Day: 80,    Importance: 9,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Asbestose und Mesotheliom",    Length: "655",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/lh0vVf",    Error: 0}, {        Day: 80,    Importance: 10,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Silikose",    Length: "508",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/Oh0IVf",    Error: 0}, {        Day: 80,    Importance: 11,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Lungenerkrankungen durch Inhalation organischer Stäube",    Length: "300",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/Yj0n_f",    Error: 0}, {        Day: 80,    Importance: 12,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Erkrankungen durch Einwirkung reizender Gase",    Length: "340",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/_Q05Af",    Error: 0}, {        Day: 80,    Importance: 13,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Berufserkrankungen der Haut",    Length: "351",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/RQ0lDf",    Error: 0}, {        Day: 80,    Importance: 14,    Subject: "Arbeits- und Umweltmedizin",    Chapter: "Erkrankungen durch chlorierte und polyzyklische aromatische Kohlenwasserstoffe",    Length: "265",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/k0YmTn/article/050eig",    Error: 0}, {        Day: 81,    Importance: 1,    Subject: "Rechtsmedizin",    Chapter: "Ärztliche Rechtskunde",    Length: "3567",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/O0YITn/article/DO01uT",    Error: 0}, {        Day: 81,    Importance: 2,    Subject: "Rechtsmedizin",    Chapter: "Thanatologie",    Length: "1640",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/O0YITn/article/vP0AgT",    Error: 0}, {        Day: 81,    Importance: 3,    Subject: "Rechtsmedizin",    Chapter: "Verletzungen und Gewalteinwirkung",    Length: "827",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/O0YITn/article/9P0NST",    Error: 0}, {        Day: 82,    Importance: 1,    Subject: "Rechtsmedizin",    Chapter: "Strangulation und Ersticken",    Length: "819",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/l0YvTn/article/BP0zST",    Error: 0}, {        Day: 82,    Importance: 2,    Subject: "Rechtsmedizin",    Chapter: "Ertrinken",    Length: "566",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/l0YvTn/article/AP0RhT",    Error: 0}, {        Day: 82,    Importance: 3,    Subject: "Rechtsmedizin",    Chapter: "Zeichen thermischer Schädigungen",    Length: "663",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/l0YvTn/article/Z40Z3T",    Error: 0}, {        Day: 82,    Importance: 4,    Subject: "Rechtsmedizin",    Chapter: "Schussverletzungen",    Length: "545",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/l0YvTn/article/_P05hT",    Error: 0}, {        Day: 82,    Importance: 5,    Subject: "Rechtsmedizin",    Chapter: "Spurensicherung",    Length: "383",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/l0YvTn/article/zP0rhT",    Error: 0}, {        Day: 82,    Importance: 6,    Subject: "Rechtsmedizin",    Chapter: "Artifizielle Störungen",    Length: "166",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/l0YvTn/article/040e3T",    Error: 0}, {        Day: 83,    Importance: 1,    Subject: "Pathologie",    Chapter: "Zelluläre Veränderungen und Anpassungsreaktionen",    Length: "1155",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/N0Y-Tn/article/VP0GdT",    Error: 0}, {        Day: 83,    Importance: 2,    Subject: "Pathologie",    Chapter: "Untersuchungsmethoden in der Pathologie",    Length: "1117",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/N0Y-Tn/article/dP0odT",    Error: 0}, {        Day: 83,    Importance: 3,    Subject: "Pathologie",    Chapter: "Allgemeine Onkologie",    Length: "2188",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/N0Y-Tn/article/WM0Png",    Error: 0}, {        Day: 83,    Importance: 4,    Subject: "Pathologie",    Chapter: "Tumormarker",    Length: "469",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/N0Y-Tn/article/ol00BT",    Error: 0}, {        Day: 83,    Importance: 5,    Subject: "Pathologie",    Chapter: "Neurokutane Syndrome",    Length: "668",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/N0Y-Tn/article/Rk0lnT",    Error: 0}, {        Day: 83,    Importance: 6,    Subject: "Pathologie",    Chapter: "Paraneoplastische Syndrome",    Length: "700",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/N0Y-Tn/article/lk0vLT",    Error: 0}, {        Day: 83,    Importance: 7,    Subject: "Pathologie",    Chapter: "Systemische Amyloidose",    Length: "811",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/N0Y-Tn/article/fP0kVT",    Error: 0}, {        Day: 84,    Importance: 1,    Subject: "Epidemiologie",    Chapter: "Grundbegriffe medizinischer Forschung",    Length: "727",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/m0YVgn/article/nn07Fg",    Error: 0}, {        Day: 84,    Importance: 2,    Subject: "Epidemiologie",    Chapter: "Angewandte Statistik",    Length: "2770",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/m0YVgn/article/CI0qUh",    Error: 0}, {        Day: 84,    Importance: 3,    Subject: "Epidemiologie",    Chapter: "Epidemiologie und Wahrscheinlichkeiten",    Length: "2619",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/KR0ULf/m0YVgn/article/Xj09_f",    Error: 0}, {        Day: 84,    Importance: 4,    Subject: "Epidemiologie",    Chapter: "Studientypen der medizinischen Forschung",    Length: "2321",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/KR0ULf/m0YVgn/article/1j02zf",    Error: 0}, {        Day: 84,    Importance: 5,    Subject: "Epidemiologie",    Chapter: "Sammelsurium der Epidemiologie",    Length: "1279",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/m0YVgn/article/dr0oTh",    Error: 0}, {        Day: 84,    Importance: 6,    Subject: "Epidemiologie",    Chapter: "Diagnose- und Klassifikationssysteme",    Length: "1191",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/m0YVgn/article/dj0ozf",    Error: 0}, {        Day: 84,    Importance: 7,    Subject: "Epidemiologie",    Chapter: "Qualitätsmanagement",    Length: "559",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/m0YVgn/article/TM06Lg",    Error: 0}, {        Day: 84,    Importance: 8,    Subject: "Epidemiologie",    Chapter: "Prävention",    Length: "910",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/m0YVgn/article/Wj0Pzf",    Error: 0}, {        Day: 85,    Importance: 1,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Soziale Sicherung",    Length: "1448",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/Uj0b-f",    Error: 0}, {        Day: 85,    Importance: 2,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Gesetzliche Unfallversicherung",    Length: "731",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/jP0_eT",    Error: 0}, {        Day: 85,    Importance: 3,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Gesetzliche Krankenversicherung",    Length: "2513",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/HM0KJg",    Error: 0}, {        Day: 85,    Importance: 4,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Ökonomische Aspekte von Gesundheit und Krankheit",    Length: "427",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/2j0T-f",    Error: 0}, {        Day: 85,    Importance: 5,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Behinderung und Einschränkung der Arbeitsfähigkeit",    Length: "601",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/ej0xzf",    Error: 0}, {        Day: 85,    Importance: 6,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Grundlagen der allgemeinmedizinischen Versorgung",    Length: "1297",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/Rn0lGg",    Error: 0}, {        Day: 85,    Importance: 7,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Übersicht Geriatrie",    Length: "1203",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/On0Itg",    Error: 0}, {        Day: 85,    Importance: 8,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Palliativmedizinische Aspekte",    Length: "2663",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/3n0SGg",    Error: 0}, {        Day: 85,    Importance: 9,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Rehabilitation",    Length: "1145",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/kn0mtg",    Error: 0}, {        Day: 85,    Importance: 10,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Physikalische Therapie",    Length: "470",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/WN0PZg",    Error: 0}, {        Day: 85,    Importance: 11,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Phytotherapeutika",    Length: "948",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/Rj0lZT",    Error: 0}, {        Day: 85,    Importance: 12,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Komplementärmedizin einschließlich Naturheilkunde",    Length: "864",    Imppact: 0,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/VN0GZg",    Error: 0}, {        Day: 85,    Importance: 13,    Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation",    Chapter: "Zweites Staatsexamen",    Length: "1241",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/KR0ULf/50Yign/article/eL0x9g",    Error: 0
    }],Yo = {
        lastUpdated: eu,    heading: tu,    numberOfDays: ru,    pageTickValues: au,    yFragenDomain: su,    fragenzahl: nu,    dayUrls: ou,    data: cu
    },pu = "11.09.2024",iu = "30 Tage Lernplan M1 - F2025",mu = 36,hu = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170],lu = 180,uu = [161, 91, 107, 128, 70, 75, 97, 89, 98, 60, 61, 79, 82, 80, 117, 124, 110, 98, 42, 72, 128, 118, 57, 104, 65, 126, 147, 125, 201, 205, 155, 158, 159, 156, 156, 159],du = ["https://next.amboss.com/de/courses/0R0elf/t8aXom", "https://next.amboss.com/de/courses/0R0elf/F8agom", "https://next.amboss.com/de/courses/0R0elf/88aOom", "https://next.amboss.com/de/courses/0R0elf/u8apom", "https://next.amboss.com/de/courses/0R0elf/E8a8om", "https://next.amboss.com/de/courses/0R0elf/v8aAom", "https://next.amboss.com/de/courses/0R0elf/D8a1Km", "https://next.amboss.com/de/courses/0R0elf/w8ahKm", "https://next.amboss.com/de/courses/0R0elf/98aNKm", "https://next.amboss.com/de/courses/0R0elf/C8aqKm", "https://next.amboss.com/de/courses/0R0elf/x8aEKm", "https://next.amboss.com/de/courses/0R0elf/B8azKm", "https://next.amboss.com/de/courses/0R0elf/y8ad6m", "https://next.amboss.com/de/courses/0R0elf/A8aR6m", "https://next.amboss.com/de/courses/0R0elf/_8a56m", "https://next.amboss.com/de/courses/0R0elf/z8ar6m", "https://next.amboss.com/de/courses/0R0elf/-8aD6m", "https://next.amboss.com/de/courses/0R0elf/ZuaZpm", "https://next.amboss.com/de/courses/0R0elf/0uaepm", "https://next.amboss.com/de/courses/0R0elf/auaQpm", "https://next.amboss.com/de/courses/0R0elf/Yuanpm", "https://next.amboss.com/de/courses/0R0elf/buaHpm", "https://next.amboss.com/de/courses/0R0elf/Xua9pm", "https://next.amboss.com/de/courses/0R0elf/cuaaJm", "https://next.amboss.com/de/courses/0R0elf/1ua2Jm", "https://next.amboss.com/de/courses/0R0elf/WuaPJm", "https://next.amboss.com/de/courses/0R0elf/duaoJm", "https://next.amboss.com/de/courses/0R0elf/VuaGJm", "https://next.amboss.com/de/courses/0R0elf/euaxJm", "https://next.amboss.com/de/courses/0R0elf/Uuabqm"],gu = [
        {
        Day: 1,    Importance: 1,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Handbuch - Vorbereitung auf das Erste Staatsexamen / Physikum",    Length: "1393",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/0R0elf/t8aXom/article/YJ0nsS",    Error: 0}, {        Day: 1,    Importance: 2,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Kreuztipps zum Ersten Staatsexamen",    Length: "2440",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/0R0elf/t8aXom/article/aJ0QsS",    Error: 0}, {        Day: 1,    Importance: 3,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Die Zelle",    Length: "5440",    Imppact: 8.27,    Url: "https://next.amboss.com/de/courses/0R0elf/t8aXom/article/0o0e0S",    Error: 0}, {        Day: 1,    Importance: 4,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Stofftransport",    Length: "3382",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/0R0elf/t8aXom/article/xK0EiS",    Error: 0}, {        Day: 1,    Importance: 5,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Signaltransduktion",    Length: "2527",    Imppact: 3.33,    Url: "https://next.amboss.com/de/courses/0R0elf/t8aXom/article/Qp0u6S",    Error: 0}, {        Day: 1,    Importance: 6,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Ruhe- und Aktionspotenzial",    Length: "2711",    Imppact: 2.58,    Url: "https://next.amboss.com/de/courses/0R0elf/t8aXom/article/jp0_6S",    Error: 0}, {        Day: 1,    Importance: 7,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Leistungsphysiologie und Altern",    Length: "3403",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/0R0elf/t8aXom/article/h60ckS",    Error: 0}, {        Day: 2,    Importance: 1,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Aufbau der Materie",    Length: "6315",    Imppact: 2.92,    Url: "https://next.amboss.com/de/courses/0R0elf/F8agom/article/hK0cTS",    Error: 0}, {        Day: 2,    Importance: 2,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Ionisierende Strahlung",    Length: "2899",    Imppact: 3.25,    Url: "https://next.amboss.com/de/courses/0R0elf/F8agom/article/k60mOS",    Error: 0}, {        Day: 2,    Importance: 3,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Thermodynamik",    Length: "4570",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/0R0elf/F8agom/article/G60BmS",    Error: 0}, {        Day: 2,    Importance: 4,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Chemische Reaktionen",    Length: "4412",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/0R0elf/F8agom/article/PK0WgS",    Error: 0}, {        Day: 2,    Importance: 5,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Redoxchemie",    Length: "2453",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/0R0elf/F8agom/article/hp0c6S",    Error: 0}, {        Day: 3,    Importance: 1,    Subject: "Grundlagen der Chemie, Biochemie und Zellbiologie",    Chapter: "Grundlagen der organischen Chemie",    Length: "6356",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/0R0elf/88aOom/article/4o03XS",    Error: 0}, {        Day: 3,    Importance: 2,    Subject: "Grundlagen der Chemie, Biochemie und Zellbiologie",    Chapter: "Enzyme und Biokatalyse",    Length: "4481",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/0R0elf/88aOom/article/a60QjS",    Error: 0}, {        Day: 3,    Importance: 3,    Subject: "Grundlagen der Chemie, Biochemie und Zellbiologie",    Chapter: "Biochemische Labormethoden",    Length: "2573",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/0R0elf/88aOom/article/Y60njS",    Error: 0}, {        Day: 3,    Importance: 4,    Subject: "Grundlagen der Chemie, Biochemie und Zellbiologie",    Chapter: "Zellzyklus und Tumorentstehung",    Length: "2554",    Imppact: 3.96,    Url: "https://next.amboss.com/de/courses/0R0elf/88aOom/article/2p0TKS",    Error: 0}, {        Day: 4,    Importance: 1,    Subject: "Grundlagen der Biochemie und Zellbiologie",    Chapter: "Aufbau von DNA und RNA",    Length: "4627",    Imppact: 3.08,    Url: "https://next.amboss.com/de/courses/0R0elf/u8apom/article/RK0lTS",    Error: 0}, {        Day: 4,    Importance: 2,    Subject: "Grundlagen der Biochemie und Zellbiologie",    Chapter: "Replikation und Reparaturmechanismen der DNA",    Length: "2889",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/0R0elf/u8apom/article/Yp0nLS",    Error: 0}, {        Day: 4,    Importance: 3,    Subject: "Grundlagen der Biochemie und Zellbiologie",    Chapter: "Purine und Pyrimidine",    Length: "2876",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/0R0elf/u8apom/article/CK0qiS",    Error: 0}, {        Day: 4,    Importance: 4,    Subject: "Grundlagen der Biochemie und Zellbiologie",    Chapter: "Genexpression und Transkription",    Length: "3493",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/0R0elf/u8apom/article/0p0eLS",    Error: 0}, {        Day: 5,    Importance: 1,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Translation und Proteinbiosynthese",    Length: "4607",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/0R0elf/E8a8om/article/Zp0ZLS",    Error: 0}, {        Day: 5,    Importance: 2,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Grundlagen der Mikrobiologie und Virologie",    Length: "2663",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/0R0elf/E8a8om/article/b60HjS",    Error: 0}, {        Day: 5,    Importance: 3,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Bakterien",    Length: "2327",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/0R0elf/E8a8om/article/lp0vpS",    Error: 0}, {        Day: 6,    Importance: 1,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Allgemeine Anatomie",    Length: "2267",    Imppact: .73,    Url: "https://next.amboss.com/de/courses/0R0elf/v8aAom/article/s60tmS",    Error: 0}, {        Day: 6,    Importance: 2,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Allgemeine Histologie",    Length: "3633",    Imppact: 1.94,    Url: "https://next.amboss.com/de/courses/0R0elf/v8aAom/article/7604mS",    Error: 0}, {        Day: 6,    Importance: 3,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Bindegewebe",    Length: "2538",    Imppact: 1.35,    Url: "https://next.amboss.com/de/courses/0R0elf/v8aAom/article/Bo0zVS",    Error: 0}, {        Day: 6,    Importance: 4,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Fettgewebe",    Length: "628",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/v8aAom/article/6p0jqS",    Error: 0}, {        Day: 6,    Importance: 5,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Knorpelgewebe",    Length: "1487",    Imppact: .25,    Url: "https://next.amboss.com/de/courses/0R0elf/v8aAom/article/q60CNS",    Error: 0}, {        Day: 6,    Importance: 6,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Knochengewebe",    Length: "3310",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/0R0elf/v8aAom/article/2o0TYS",    Error: 0}, {        Day: 6,    Importance: 7,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Muskelgewebe",    Length: "2552",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/0R0elf/v8aAom/article/pp0LqS",    Error: 0}, {        Day: 6,    Importance: 8,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Glatte Muskulatur",    Length: "1294",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/0R0elf/v8aAom/article/8K0ORS",    Error: 0}, {        Day: 6,    Importance: 9,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Skelettmuskulatur",    Length: "3632",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/0R0elf/v8aAom/article/Jp0sqS",    Error: 0}, {        Day: 6,    Importance: 10,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Bauchhöhle",    Length: "1687",    Imppact: 1.02,    Url: "https://next.amboss.com/de/courses/0R0elf/v8aAom/article/EK08RS",    Error: 0}, {        Day: 7,    Importance: 1,    Subject: "Verdauungssystem",    Chapter: "Übersicht des Verdauungssystems",    Length: "3156",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/qK0ChS",    Error: 0}, {        Day: 7,    Importance: 2,    Subject: "Verdauungssystem",    Chapter: "Mundhöhle",    Length: "1098",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/KK0UhS",    Error: 0}, {        Day: 7,    Importance: 3,    Subject: "Verdauungssystem",    Chapter: "Zähne",    Length: "1609",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/np07JS",    Error: 0}, {        Day: 7,    Importance: 4,    Subject: "Verdauungssystem",    Chapter: "Zunge",    Length: "940",    Imppact: .17,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/Lp0wJS",    Error: 0}, {        Day: 7,    Importance: 5,    Subject: "Verdauungssystem",    Chapter: "Speicheldrüsen",    Length: "1674",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/op00qS",    Error: 0}, {        Day: 7,    Importance: 6,    Subject: "Verdauungssystem",    Chapter: "Pharynx",    Length: "1127",    Imppact: .06,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/Kp0UqS",    Error: 0}, {        Day: 7,    Importance: 7,    Subject: "Verdauungssystem",    Chapter: "Ösophagus",    Length: "1394",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/6K0jhS",    Error: 0}, {        Day: 7,    Importance: 8,    Subject: "Verdauungssystem",    Chapter: "Magen",    Length: "2619",    Imppact: 1.71,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/XK09US",    Error: 0}, {        Day: 7,    Importance: 9,    Subject: "Verdauungssystem",    Chapter: "Dünndarm",    Length: "2125",    Imppact: 1.1,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/pK0LhS",    Error: 0}, {        Day: 7,    Importance: 10,    Subject: "Verdauungssystem",    Chapter: "Leber",    Length: "4023",    Imppact: 1.98,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/F60g5S",    Error: 0}, {        Day: 7,    Importance: 11,    Subject: "Verdauungssystem",    Chapter: "Gallenblase und Galle",    Length: "1837",    Imppact: 1.27,    Url: "https://next.amboss.com/de/courses/0R0elf/D8a1Km/article/t60X5S",    Error: 0}, {        Day: 8,    Importance: 1,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Pankreas",    Length: "2472",    Imppact: .98,    Url: "https://next.amboss.com/de/courses/0R0elf/w8ahKm/article/2K0TfS",    Error: 0}, {        Day: 8,    Importance: 2,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Zäkum und Kolon",    Length: "2163",    Imppact: .38,    Url: "https://next.amboss.com/de/courses/0R0elf/w8ahKm/article/rK0f3S",    Error: 0}, {        Day: 8,    Importance: 3,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Rektum und Analkanal",    Length: "1684",    Imppact: .54,    Url: "https://next.amboss.com/de/courses/0R0elf/w8ahKm/article/8p0OrS",    Error: 0}, {        Day: 8,    Importance: 4,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Übersicht Ernährung",    Length: "1755",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/w8ahKm/article/X609jS",    Error: 0}, {        Day: 8,    Importance: 5,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Kohlenhydrate",    Length: "2893",    Imppact: 4.25,    Url: "https://next.amboss.com/de/courses/0R0elf/w8ahKm/article/w60hMS",    Error: 0}, {        Day: 8,    Importance: 6,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Abbau und Synthese der Glucose",    Length: "3938",    Imppact: 4.33,    Url: "https://next.amboss.com/de/courses/0R0elf/w8ahKm/article/r60fmS",    Error: 0}, {        Day: 8,    Importance: 7,    Subject: "Verdauungssystem, Ernährung und Stoffwechsel",    Chapter: "Glykogenstoffwechsel",    Length: "1194",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/0R0elf/w8ahKm/article/I60YmS",    Error: 0}, {        Day: 9,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Aminosäuren und Proteine",    Length: "3861",    Imppact: 3.83,    Url: "https://next.amboss.com/de/courses/0R0elf/98aNKm/article/Jo0s1S",    Error: 0}, {        Day: 9,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Aminosäurestoffwechsel",    Length: "2912",    Imppact: 2.5,    Url: "https://next.amboss.com/de/courses/0R0elf/98aNKm/article/Mp0MJS",    Error: 0}, {        Day: 9,    Importance: 3,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Lipide",    Length: "3684",    Imppact: 3.17,    Url: "https://next.amboss.com/de/courses/0R0elf/98aNKm/article/D601MS",    Error: 0}, {        Day: 9,    Importance: 4,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Fettsäuren und Triacylglycerine",    Length: "3655",    Imppact: 2.5,    Url: "https://next.amboss.com/de/courses/0R0elf/98aNKm/article/B60zMS",    Error: 0}, {        Day: 9,    Importance: 5,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Cholesterin",    Length: "1499",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/98aNKm/article/y60dnS",    Error: 0}, {        Day: 10,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Citratzyklus",    Length: "1238",    Imppact: 1.25,    Url: "https://next.amboss.com/de/courses/0R0elf/C8aqKm/article/3p0S6S",    Error: 0}, {        Day: 10,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Atmungskette",    Length: "2268",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/0R0elf/C8aqKm/article/Rp0l6S",    Error: 0}, {        Day: 10,    Importance: 3,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Energie- und Wärmehaushalt",    Length: "2754",    Imppact: 1.17,    Url: "https://next.amboss.com/de/courses/0R0elf/C8aqKm/article/wK0hiS",    Error: 0}, {        Day: 10,    Importance: 4,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Vitamine (Vorklinik)",    Length: "5285",    Imppact: 4.1,    Url: "https://next.amboss.com/de/courses/0R0elf/C8aqKm/article/z60rnS",    Error: 0}, {        Day: 10,    Importance: 5,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Mineralstoffe",    Length: "2310",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/0R0elf/C8aqKm/article/-60DnS",    Error: 0}, {        Day: 11,    Importance: 1,    Subject: "Grundlagen der Physik und Herz-Kreislauf",    Chapter: "Grundlagen des Rechnens",    Length: "2593",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/0R0elf/x8aEKm/article/NK0-gS",    Error: 0}, {        Day: 11,    Importance: 2,    Subject: "Grundlagen der Physik und Herz-Kreislauf",    Chapter: "Grundlagen der Mechanik",    Length: "4375",    Imppact: 3.92,    Url: "https://next.amboss.com/de/courses/0R0elf/x8aEKm/article/lK0vgS",    Error: 0}, {        Day: 11,    Importance: 3,    Subject: "Grundlagen der Physik und Herz-Kreislauf",    Chapter: "Elektrizitätslehre",    Length: "2913",    Imppact: 1.67,    Url: "https://next.amboss.com/de/courses/0R0elf/x8aEKm/article/4603OS",    Error: 0}, {        Day: 11,    Importance: 4,    Subject: "Grundlagen der Physik und Herz-Kreislauf",    Chapter: "Grundlagen des Kreislaufes",    Length: "5206",    Imppact: 2.08,    Url: "https://next.amboss.com/de/courses/0R0elf/x8aEKm/article/no07cS",    Error: 0}, {        Day: 12,    Importance: 1,    Subject: "Herz-Kreislauf",    Chapter: "Aufbau des Herzens",    Length: "5719",    Imppact: 3.5,    Url: "https://next.amboss.com/de/courses/0R0elf/B8azKm/article/CL0q-g",    Error: 0}, {        Day: 12,    Importance: 2,    Subject: "Herz-Kreislauf",    Chapter: "Herzerregung",    Length: "5051",    Imppact: 2.58,    Url: "https://next.amboss.com/de/courses/0R0elf/B8azKm/article/yp0dHS",    Error: 0}, {        Day: 12,    Importance: 3,    Subject: "Herz-Kreislauf",    Chapter: "Herzmechanik",    Length: "4078",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/0R0elf/B8azKm/article/xL0E-g",    Error: 0}, {        Day: 12,    Importance: 4,    Subject: "Herz-Kreislauf",    Chapter: "Aufbau und Funktion der Blutgefäße",    Length: "3914",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/0R0elf/B8azKm/article/go0FYS",    Error: 0}, {        Day: 12,    Importance: 5,    Subject: "Herz-Kreislauf",    Chapter: "Kreislaufregulation",    Length: "2637",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/0R0elf/B8azKm/article/po0L1S",    Error: 0}, {        Day: 13,    Importance: 1,    Subject: "Atmung und Blut",    Chapter: "Atemwege und Lunge",    Length: "5758",    Imppact: 3.58,    Url: "https://next.amboss.com/de/courses/0R0elf/y8ad6m/article/6o0j1S",    Error: 0}, {        Day: 13,    Importance: 2,    Subject: "Atmung und Blut",    Chapter: "Atemmechanik",    Length: "3080",    Imppact: 2.67,    Url: "https://next.amboss.com/de/courses/0R0elf/y8ad6m/article/A60RnS",    Error: 0}, {        Day: 13,    Importance: 3,    Subject: "Atmung und Blut",    Chapter: "Blut und Blutzellen",    Length: "3266",    Imppact: 1.92,    Url: "https://next.amboss.com/de/courses/0R0elf/y8ad6m/article/LK0wSS",    Error: 0}, {        Day: 13,    Importance: 4,    Subject: "Atmung und Blut",    Chapter: "Knochenmark und Blutbildung",    Length: "1647",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/0R0elf/y8ad6m/article/qp0CqS",    Error: 0}, {        Day: 13,    Importance: 5,    Subject: "Atmung und Blut",    Chapter: "Erythrozyten",    Length: "3056",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/0R0elf/y8ad6m/article/960NMS",    Error: 0}, {        Day: 13,    Importance: 6,    Subject: "Atmung und Blut",    Chapter: "Hämoglobin",    Length: "2539",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/0R0elf/y8ad6m/article/C60qMS",    Error: 0}, {        Day: 13,    Importance: 7,    Subject: "Atmung und Blut",    Chapter: "Gastransport im Blut",    Length: "2075",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/0R0elf/y8ad6m/article/Np0-pS",    Error: 0}, {        Day: 14,    Importance: 1,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Blutstillung und Blutgerinnung",    Length: "4115",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/0R0elf/A8aR6m/article/_K05QS",    Error: 0}, {        Day: 14,    Importance: 2,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Einführung in die Immunologie",    Length: "840",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/0R0elf/A8aR6m/article/K60UNS",    Error: 0}, {        Day: 14,    Importance: 3,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Unspezifisches Immunsystem",    Length: "5481",    Imppact: 3.67,    Url: "https://next.amboss.com/de/courses/0R0elf/A8aR6m/article/660jNS",    Error: 0}, {        Day: 14,    Importance: 4,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Spezifisches Immunsystem",    Length: "5206",    Imppact: 2.38,    Url: "https://next.amboss.com/de/courses/0R0elf/A8aR6m/article/p60LNS",    Error: 0}, {        Day: 14,    Importance: 5,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Gewebshormone",    Length: "3968",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/0R0elf/A8aR6m/article/V60GPS",    Error: 0}, {        Day: 14,    Importance: 6,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Lymphatisches System",    Length: "3426",    Imppact: 1.04,    Url: "https://next.amboss.com/de/courses/0R0elf/A8aR6m/article/gp0FKS",    Error: 0}, {        Day: 14,    Importance: 7,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Lymphknoten",    Length: "1162",    Imppact: .25,    Url: "https://next.amboss.com/de/courses/0R0elf/A8aR6m/article/Tp06KS",    Error: 0}, {        Day: 14,    Importance: 8,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Milz",    Length: "1926",    Imppact: .35,    Url: "https://next.amboss.com/de/courses/0R0elf/A8aR6m/article/fp0kKS",    Error: 0}, {        Day: 14,    Importance: 9,    Subject: "Blut, Immunsystem und Lymphatisches System",    Chapter: "Mukosa-assoziiertes lymphatisches Gewebe",    Length: "1412",    Imppact: .21,    Url: "https://next.amboss.com/de/courses/0R0elf/A8aR6m/article/Sp0yKS",    Error: 0}, {        Day: 15,    Importance: 1,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Niere",    Length: "3265",    Imppact: 1.9,    Url: "https://next.amboss.com/de/courses/0R0elf/_8a56m/article/jo0_bS",    Error: 0}, {        Day: 15,    Importance: 2,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Nierendurchblutung und glomeruläre Filtration",    Length: "3369",    Imppact: 1.67,    Url: "https://next.amboss.com/de/courses/0R0elf/_8a56m/article/bJ0HsS",    Error: 0}, {        Day: 15,    Importance: 3,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Tubuläre Transportprozesse",    Length: "3473",    Imppact: 2.23,    Url: "https://next.amboss.com/de/courses/0R0elf/_8a56m/article/_605nS",    Error: 0}, {        Day: 15,    Importance: 4,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Wasser- und Elektrolythaushalt",    Length: "3047",    Imppact: .83,    Url: "https://next.amboss.com/de/courses/0R0elf/_8a56m/article/lo0vXS",    Error: 0}, {        Day: 15,    Importance: 5,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Säure-Basen-Haushalt",    Length: "4994",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/0R0elf/_8a56m/article/Io0YWS",    Error: 0}, {        Day: 15,    Importance: 6,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnleiter",    Length: "950",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/_8a56m/article/Xp09LS",    Error: 0}, {        Day: 15,    Importance: 7,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnblase",    Length: "1555",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/_8a56m/article/bp0HLS",    Error: 0}, {        Day: 15,    Importance: 8,    Subject: "Niere, Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnröhre",    Length: "901",    Imppact: .25,    Url: "https://next.amboss.com/de/courses/0R0elf/_8a56m/article/ap0QLS",    Error: 0}, {        Day: 16,    Importance: 1,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Allgemeine Hormoneigenschaften",    Length: "1103",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/z8ar6m/article/IK0Y3S",    Error: 0}, {        Day: 16,    Importance: 2,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Hypophyse",    Length: "3534",    Imppact: 1.52,    Url: "https://next.amboss.com/de/courses/0R0elf/z8ar6m/article/jK0_TS",    Error: 0}, {        Day: 16,    Importance: 3,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Schilddrüse",    Length: "2926",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/0R0elf/z8ar6m/article/bK0HUS",    Error: 0}, {        Day: 16,    Importance: 4,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Nebenschilddrüsen",    Length: "1197",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/0R0elf/z8ar6m/article/Op0IpS",    Error: 0}, {        Day: 16,    Importance: 5,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Nebenniere",    Length: "4284",    Imppact: 3.17,    Url: "https://next.amboss.com/de/courses/0R0elf/z8ar6m/article/S60y4S",    Error: 0}, {        Day: 16,    Importance: 6,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Pankreashormone",    Length: "1875",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/0R0elf/z8ar6m/article/kp0mpS",    Error: 0}, {        Day: 17,    Importance: 1,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Sexualhormone",    Length: "3536",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/zo0reS",    Error: 0}, {        Day: 17,    Importance: 2,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Ovar",    Length: "1835",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/m60VlS",    Error: 0}, {        Day: 17,    Importance: 3,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Tuba uterina",    Length: "712",    Imppact: .08,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/M60MlS",    Error: 0}, {        Day: 17,    Importance: 4,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Uterus",    Length: "1950",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/560ilS",    Error: 0}, {        Day: 17,    Importance: 5,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Vagina und Vulva",    Length: "1440",    Imppact: .33,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/n607lS",    Error: 0}, {        Day: 17,    Importance: 6,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Mamma",    Length: "1561",    Imppact: .17,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/L60wlS",    Error: 0}, {        Day: 17,    Importance: 7,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Hoden",    Length: "2032",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/ep0xoS",    Error: 0}, {        Day: 17,    Importance: 8,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Prostata Bläschendrüse und Cowper-Drüse",    Length: "1348",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/dp0ooS",    Error: 0}, {        Day: 17,    Importance: 9,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Nebenhoden Samenleiter und Samenstrang",    Length: "1122",    Imppact: .56,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/Wp0PoS",    Error: 0}, {        Day: 17,    Importance: 10,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Penis Erektion und Ejakulation",    Length: "1754",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/Vp0GoS",    Error: 0}, {        Day: 17,    Importance: 11,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Geschlechtsentwicklung",    Length: "4129",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/Qo0ubS",    Error: 0}, {        Day: 17,    Importance: 12,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Sexualität und Sexualmedizin",    Length: "1074",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/d60oPS",    Error: 0}, {        Day: 17,    Importance: 13,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Grundlagen der Embryologie",    Length: "3531",    Imppact: .83,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/vp0ArS",    Error: 0}, {        Day: 17,    Importance: 14,    Subject: "Geschlechtsorgane, Sexualität und Entstehung neuen Lebens",    Chapter: "Von der Befruchtung zur Implantation",    Length: "2367",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/0R0elf/-8aD6m/article/Dp017S",    Error: 0}, {        Day: 18,    Importance: 1,    Subject: "Entstehung neuen Lebens",    Chapter: "Embryonalentwicklung",    Length: "3351",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/0R0elf/ZuaZpm/article/wp0h7S",    Error: 0}, {        Day: 18,    Importance: 2,    Subject: "Entstehung neuen Lebens",    Chapter: "Plazenta Nabelschnur und Amnion",    Length: "2411",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/0R0elf/ZuaZpm/article/Cp0q7S",    Error: 0}, {        Day: 18,    Importance: 3,    Subject: "Entstehung neuen Lebens",    Chapter: "Physiologische Aspekte prä- und postnatal",    Length: "3341",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/0R0elf/ZuaZpm/article/9p0N7S",    Error: 0}, {        Day: 18,    Importance: 4,    Subject: "Entstehung neuen Lebens",    Chapter: "Humangenetik (Vorklinik)",    Length: "5200",    Imppact: 3.33,    Url: "https://next.amboss.com/de/courses/0R0elf/ZuaZpm/article/DK01iS",    Error: 0}, {        Day: 19,    Importance: 1,    Subject: "Obere Extremität",    Chapter: "Schulter und Schultergürtel",    Length: "3591",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/0R0elf/0uaepm/article/Ro0lbS",    Error: 0}, {        Day: 19,    Importance: 2,    Subject: "Obere Extremität",    Chapter: "Oberarm und Ellenbogen",    Length: "1234",    Imppact: .52,    Url: "https://next.amboss.com/de/courses/0R0elf/0uaepm/article/So0yYS",    Error: 0}, {        Day: 19,    Importance: 3,    Subject: "Obere Extremität",    Chapter: "Unterarm",    Length: "1816",    Imppact: .77,    Url: "https://next.amboss.com/de/courses/0R0elf/0uaepm/article/ho0cbS",    Error: 0}, {        Day: 19,    Importance: 4,    Subject: "Obere Extremität",    Chapter: "Hand",    Length: "3013",    Imppact: 1.19,    Url: "https://next.amboss.com/de/courses/0R0elf/0uaepm/article/io0JbS",    Error: 0}, {        Day: 19,    Importance: 5,    Subject: "Obere Extremität",    Chapter: "Leitungsbahnen der oberen Extremität",    Length: "4453",    Imppact: 1.42,    Url: "https://next.amboss.com/de/courses/0R0elf/0uaepm/article/Vo0GaS",    Error: 0}, {        Day: 20,    Importance: 1,    Subject: "Untere Extremität",    Chapter: "Becken und Hüfte",    Length: "3364",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/0R0elf/auaQpm/article/f60k4S",    Error: 0}, {        Day: 20,    Importance: 2,    Subject: "Untere Extremität",    Chapter: "Oberschenkel und Knie",    Length: "3007",    Imppact: 1.77,    Url: "https://next.amboss.com/de/courses/0R0elf/auaQpm/article/yK0dQS",    Error: 0}, {        Day: 20,    Importance: 3,    Subject: "Untere Extremität",    Chapter: "Unterschenkel",    Length: "2588",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/0R0elf/auaQpm/article/Ao0ReS",    Error: 0}, {        Day: 20,    Importance: 4,    Subject: "Untere Extremität",    Chapter: "Sprunggelenke und Fuß",    Length: "4065",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/0R0elf/auaQpm/article/8o0OdS",    Error: 0}, {        Day: 20,    Importance: 5,    Subject: "Untere Extremität",    Chapter: "Leitungsbahnen der unteren Extremität",    Length: "4987",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/0R0elf/auaQpm/article/uo0pdS",    Error: 0}, {        Day: 21,    Importance: 1,    Subject: "Rumpf",    Chapter: "Brustwand",    Length: "2672",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/Yuanpm/article/tp0XrS",    Error: 0}, {        Day: 21,    Importance: 2,    Subject: "Rumpf",    Chapter: "Bauchwand",    Length: "2333",    Imppact: 1.27,    Url: "https://next.amboss.com/de/courses/0R0elf/Yuanpm/article/cp0aoS",    Error: 0}, {        Day: 21,    Importance: 3,    Subject: "Rumpf",    Chapter: "Nacken und Rücken",    Length: "2577",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/0R0elf/Yuanpm/article/up0prS",    Error: 0}, {        Day: 21,    Importance: 4,    Subject: "Rumpf",    Chapter: "Wirbelsäule",    Length: "2100",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/Yuanpm/article/R60lkS",    Error: 0}, {        Day: 21,    Importance: 5,    Subject: "Rumpf",    Chapter: "Brusthöhle",    Length: "3915",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/0R0elf/Yuanpm/article/e60xPS",    Error: 0}, {        Day: 21,    Importance: 6,    Subject: "Rumpf",    Chapter: "Beckenhöhle",    Length: "2801",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/0R0elf/Yuanpm/article/T6064S",    Error: 0}, {        Day: 21,    Importance: 7,    Subject: "Rumpf",    Chapter: "Leitungsbahnen des Bauchraums",    Length: "3481",    Imppact: 1.65,    Url: "https://next.amboss.com/de/courses/0R0elf/Yuanpm/article/Ap0RHS",    Error: 0}, {        Day: 22,    Importance: 1,    Subject: "Kopf und Hals",    Chapter: "Übersicht der Kopf- und Halsregion",    Length: "4426",    Imppact: 2.42,    Url: "https://next.amboss.com/de/courses/0R0elf/buaHpm/article/360SkS",    Error: 0}, {        Day: 22,    Importance: 2,    Subject: "Kopf und Hals",    Chapter: "Muskulatur von Kopf und Hals",    Length: "1745",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/buaHpm/article/1p02oS",    Error: 0}, {        Day: 22,    Importance: 3,    Subject: "Kopf und Hals",    Chapter: "Kehlkopf Sprechen und Sprache",    Length: "3246",    Imppact: .94,    Url: "https://next.amboss.com/de/courses/0R0elf/buaHpm/article/mK0VSS",    Error: 0}, {        Day: 22,    Importance: 4,    Subject: "Kopf und Hals",    Chapter: "Nase und Nasennebenhöhlen",    Length: "2447",    Imppact: .6,    Url: "https://next.amboss.com/de/courses/0R0elf/buaHpm/article/SK0yfS",    Error: 0}, {        Day: 22,    Importance: 5,    Subject: "Kopf und Hals",    Chapter: "Schädel",    Length: "3099",    Imppact: .6,    Url: "https://next.amboss.com/de/courses/0R0elf/buaHpm/article/aK0QUS",    Error: 0}, {        Day: 23,    Importance: 1,    Subject: "Nervensystem",    Chapter: "Hirnnerven",    Length: "7777",    Imppact: 3.83,    Url: "https://next.amboss.com/de/courses/0R0elf/Xua9pm/article/7o04WS",    Error: 0}, {        Day: 23,    Importance: 2,    Subject: "Nervensystem",    Chapter: "Einführung in die Neuroanatomie",    Length: "1685",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/0R0elf/Xua9pm/article/-p0DHS",    Error: 0}, {        Day: 23,    Importance: 3,    Subject: "Nervensystem",    Chapter: "Nervengewebe Synapsen und Transmitter",    Length: "4145",    Imppact: 1.83,    Url: "https://next.amboss.com/de/courses/0R0elf/Xua9pm/article/tK0XRS",    Error: 0}, {        Day: 23,    Importance: 4,    Subject: "Nervensystem",    Chapter: "Vegetatives Nervensystem",    Length: "3653",    Imppact: 2.33,    Url: "https://next.amboss.com/de/courses/0R0elf/Xua9pm/article/oo001S",    Error: 0}, {        Day: 23,    Importance: 5,    Subject: "Nervensystem",    Chapter: "Rückenmark",    Length: "3156",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/0R0elf/Xua9pm/article/ro0fWS",    Error: 0}, {        Day: 23,    Importance: 6,    Subject: "Nervensystem",    Chapter: "Spinale Leitungsbahnen und Reflexe",    Length: "2971",    Imppact: 1.42,    Url: "https://next.amboss.com/de/courses/0R0elf/Xua9pm/article/zp0rHS",    Error: 0}, {        Day: 24,    Importance: 1,    Subject: "Nervensystem",    Chapter: "Hirnstamm",    Length: "3523",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/0R0elf/cuaaJm/article/yo0deS",    Error: 0}, {        Day: 24,    Importance: 2,    Subject: "Nervensystem",    Chapter: "Kleinhirn",    Length: "2399",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/0R0elf/cuaaJm/article/YK0nUS",    Error: 0}, {        Day: 24,    Importance: 3,    Subject: "Nervensystem",    Chapter: "Zwischenhirn",    Length: "2415",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/0R0elf/cuaaJm/article/zK0rQS",    Error: 0}, {        Day: 24,    Importance: 4,    Subject: "Nervensystem",    Chapter: "Großhirn",    Length: "3134",    Imppact: 2.13,    Url: "https://next.amboss.com/de/courses/0R0elf/cuaaJm/article/060ejS",    Error: 0}, {        Day: 24,    Importance: 5,    Subject: "Nervensystem",    Chapter: "Gefäßversorgung des Gehirns",    Length: "3343",    Imppact: 1.38,    Url: "https://next.amboss.com/de/courses/0R0elf/cuaaJm/article/Q60ukS",    Error: 0}, {        Day: 24,    Importance: 6,    Subject: "Nervensystem",    Chapter: "Meningen Liquorräume und Blut-Hirn-Schranke",    Length: "2386",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/0R0elf/cuaaJm/article/ZJ0ZsS",    Error: 0}, {        Day: 24,    Importance: 7,    Subject: "Nervensystem",    Chapter: "Neurophysiologische Untersuchungen und Schlaf",    Length: "2276",    Imppact: 2.33,    Url: "https://next.amboss.com/de/courses/0R0elf/cuaaJm/article/0J0esS",    Error: 0}, {        Day: 24,    Importance: 8,    Subject: "Nervensystem",    Chapter: "Limbisches System und Gedächtnis",    Length: "2381",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/0R0elf/cuaaJm/article/U60b4S",    Error: 0}, {        Day: 25,    Importance: 1,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Grundlagen der Sensorik",    Length: "949",    Imppact: .33,    Url: "https://next.amboss.com/de/courses/0R0elf/1ua2Jm/article/sK0t3S",    Error: 0}, {        Day: 25,    Importance: 2,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Haut und Hautanhangsgebilde",    Length: "3982",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/0R0elf/1ua2Jm/article/so0tWS",    Error: 0}, {        Day: 25,    Importance: 3,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Taktiles System",    Length: "3060",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/0R0elf/1ua2Jm/article/0K0eUS",    Error: 0}, {        Day: 25,    Importance: 4,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Nozizeptives System",    Length: "2923",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/0R0elf/1ua2Jm/article/Do01VS",    Error: 0}, {        Day: 25,    Importance: 5,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Olfaktorisches und gustatorisches System",    Length: "2320",    Imppact: 1.67,    Url: "https://next.amboss.com/de/courses/0R0elf/1ua2Jm/article/xo0EVS",    Error: 0}, {        Day: 26,    Importance: 1,    Subject: "Sinnesorgane",    Chapter: "Auge und Orbita",    Length: "6167",    Imppact: 2.94,    Url: "https://next.amboss.com/de/courses/0R0elf/WuaPJm/article/Ho0KWS",    Error: 0}, {        Day: 26,    Importance: 2,    Subject: "Sinnesorgane",    Chapter: "Optik und optische Geräte",    Length: "2586",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/0R0elf/WuaPJm/article/P60WOS",    Error: 0}, {        Day: 26,    Importance: 3,    Subject: "Sinnesorgane",    Chapter: "Visuelles System",    Length: "4001",    Imppact: 4.38,    Url: "https://next.amboss.com/de/courses/0R0elf/WuaPJm/article/mp0VJS",    Error: 0}, {        Day: 26,    Importance: 4,    Subject: "Sinnesorgane",    Chapter: "Ohr",    Length: "3711",    Imppact: 2.04,    Url: "https://next.amboss.com/de/courses/0R0elf/WuaPJm/article/Eo08dS",    Error: 0}, {        Day: 26,    Importance: 5,    Subject: "Sinnesorgane",    Chapter: "Akustik",    Length: "2184",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/0R0elf/WuaPJm/article/j60_kS",    Error: 0}, {        Day: 26,    Importance: 6,    Subject: "Sinnesorgane",    Chapter: "Auditives System",    Length: "2932",    Imppact: 1.92,    Url: "https://next.amboss.com/de/courses/0R0elf/WuaPJm/article/Up0bKS",    Error: 0}, {        Day: 26,    Importance: 7,    Subject: "Sinnesorgane",    Chapter: "Vestibuläres System",    Length: "3749",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/0R0elf/WuaPJm/article/Go0BWS",    Error: 0}, {        Day: 27,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Medizinische Statistik und Testtheorie",    Length: "5514",    Imppact: 8.75,    Url: "https://next.amboss.com/de/courses/0R0elf/duaoJm/article/Ip0YIS",    Error: 0}, {        Day: 27,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Grundlagen wissenschaftlicher Studien",    Length: "2388",    Imppact: 3.5,    Url: "https://next.amboss.com/de/courses/0R0elf/duaoJm/article/rp0fIS",    Error: 0}, {        Day: 27,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Gesundheit und Krankheit",    Length: "1677",    Imppact: 3.98,    Url: "https://next.amboss.com/de/courses/0R0elf/duaoJm/article/_o05eS",    Error: 0}, {        Day: 27,    Importance: 4,    Subject: "Psychologie und Soziologie",    Chapter: "Patientenversorgung und Gesundheitssystem",    Length: "3465",    Imppact: 2.83,    Url: "https://next.amboss.com/de/courses/0R0elf/duaoJm/article/-K0DQS",    Error: 0}, {        Day: 28,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Lernen Kognition und Entwicklung",    Length: "4729",    Imppact: 5.67,    Url: "https://next.amboss.com/de/courses/0R0elf/VuaGJm/article/7p04IS",    Error: 0}, {        Day: 28,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Emotion und Motivation",    Length: "1884",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/0R0elf/VuaGJm/article/Hp0KIS",    Error: 0}, {        Day: 28,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Persönlichkeit und Verhaltensstile",    Length: "1222",    Imppact: 1.33,    Url: "https://next.amboss.com/de/courses/0R0elf/VuaGJm/article/sp0tIS",    Error: 0}, {        Day: 29,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Grundlagen der Demografie und Soziologie",    Length: "2001",    Imppact: 4.5,    Url: "https://next.amboss.com/de/courses/0R0elf/euaxJm/article/Gp0BIS",    Error: 0}, {        Day: 29,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Arzt-Patient-Beziehung",    Length: "4344",    Imppact: 6.25,    Url: "https://next.amboss.com/de/courses/0R0elf/euaxJm/article/OK0IgS",    Error: 0}, {        Day: 29,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Untersuchung und Gespräch",    Length: "2046",    Imppact: 2.33,    Url: "https://next.amboss.com/de/courses/0R0elf/euaxJm/article/3K0STS",    Error: 0}, {        Day: 29,    Importance: 4,    Subject: "Psychologie und Soziologie",    Chapter: "Ärztliche Urteilsbildung und Entscheidung",    Length: "2343",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/0R0elf/euaxJm/article/iK0JTS",    Error: 0}, {        Day: 30,    Importance: 1,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Prävention und Gesundheitsförderung",    Length: "2974",    Imppact: 6.35,    Url: "https://next.amboss.com/de/courses/0R0elf/Uuabqm/article/HK0K3S",    Error: 0}, {        Day: 30,    Importance: 2,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Stressmodelle",    Length: "990",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/0R0elf/Uuabqm/article/Ep08rS",    Error: 0}, {        Day: 30,    Importance: 3,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Verhaltens- und psychodynamische Modelle",    Length: "1094",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/0R0elf/Uuabqm/article/UK0bfS",    Error: 0}, {        Day: 30,    Importance: 4,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Psychotherapeutische Verfahren (Vorklinik)",    Length: "2314",    Imppact: 2.67,    Url: "https://next.amboss.com/de/courses/0R0elf/Uuabqm/article/BK0ziS",    Error: 0}, {        Day: 30,    Importance: 5,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Umgang mit dem Sterben",    Length: "583",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/0R0elf/Uuabqm/article/W60PPS",    Error: 0}, {        Day: 30,    Importance: 6,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Erstes Staatsexamen (schriftlicher Teil)",    Length: "1211",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/0R0elf/Uuabqm/article/x60EMS",    Error: 0}, {        Day: 30,    Importance: 7,    Subject: "Psychologie, Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Erstes Staatsexamen (mündlicher Teil)",    Length: "1122",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/0R0elf/Uuabqm/article/xI0EUh",    Error: 0
    }],Ko = {
        lastUpdated: pu,    heading: iu,    numberOfDays: mu,    pageTickValues: hu,    yFragenDomain: lu,    fragenzahl: uu,    dayUrls: du,    data: gu
    },bu = "09.11.2024",fu = "50 Tage Lernplan M1 - F2025",Iu = 50,Lu = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130],yu = 160,Su = [156, 159, 141, 83, 95, 118, 67, 67, 51, 37, 32, 50, 91, 53, 53, 71, 75, 70, 108, 61, 52, 45, 53, 44, 46, 36, 66, 64, 47, 60, 47, 51, 43, 47, 55, 53, 61, 83, 50, 110, 114, 68, 87, 99, 155, 158, 159, 156, 156, 159],Uu = ["https://next.amboss.com/de/courses/ZR0Zlf/_Fa5km", "https://next.amboss.com/de/courses/ZR0Zlf/zFarkm", "https://next.amboss.com/de/courses/ZR0Zlf/-FaDkm", "https://next.amboss.com/de/courses/ZR0Zlf/Z8aZOm", "https://next.amboss.com/de/courses/ZR0Zlf/08aeOm", "https://next.amboss.com/de/courses/ZR0Zlf/a8aQOm", "https://next.amboss.com/de/courses/ZR0Zlf/Y8anOm", "https://next.amboss.com/de/courses/ZR0Zlf/b8aHOm", "https://next.amboss.com/de/courses/ZR0Zlf/X8a9Om", "https://next.amboss.com/de/courses/ZR0Zlf/c8aalm", "https://next.amboss.com/de/courses/ZR0Zlf/18a2lm", "https://next.amboss.com/de/courses/ZR0Zlf/W8aPlm", "https://next.amboss.com/de/courses/ZR0Zlf/d8aolm", "https://next.amboss.com/de/courses/ZR0Zlf/V8aGlm", "https://next.amboss.com/de/courses/ZR0Zlf/e8axlm", "https://next.amboss.com/de/courses/ZR0Zlf/U8abNm", "https://next.amboss.com/de/courses/ZR0Zlf/28aTNm", "https://next.amboss.com/de/courses/ZR0Zlf/f8akNm", "https://next.amboss.com/de/courses/ZR0Zlf/T8a6Nm", "https://next.amboss.com/de/courses/ZR0Zlf/g8aFNm", "https://next.amboss.com/de/courses/ZR0Zlf/S8ayNm", "https://next.amboss.com/de/courses/ZR0Zlf/h8acmm", "https://next.amboss.com/de/courses/ZR0Zlf/38aSmm", "https://next.amboss.com/de/courses/ZR0Zlf/R8almm", "https://next.amboss.com/de/courses/ZR0Zlf/i8aJmm", "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm", "https://next.amboss.com/de/courses/ZR0Zlf/j8a_mm", "https://next.amboss.com/de/courses/ZR0Zlf/P8aW5m", "https://next.amboss.com/de/courses/ZR0Zlf/48a35m", "https://next.amboss.com/de/courses/ZR0Zlf/k8am5m", "https://next.amboss.com/de/courses/ZR0Zlf/O8aI5m", "https://next.amboss.com/de/courses/ZR0Zlf/l8av5m", "https://next.amboss.com/de/courses/ZR0Zlf/N8a-5m", "https://next.amboss.com/de/courses/ZR0Zlf/m8aVMm", "https://next.amboss.com/de/courses/ZR0Zlf/58aiMm", "https://next.amboss.com/de/courses/ZR0Zlf/M8aMMm", "https://next.amboss.com/de/courses/ZR0Zlf/n8a7Mm", "https://next.amboss.com/de/courses/ZR0Zlf/L8awMm", "https://next.amboss.com/de/courses/ZR0Zlf/o8a0nm", "https://next.amboss.com/de/courses/ZR0Zlf/K8aUnm", "https://next.amboss.com/de/courses/ZR0Zlf/68ajnm", "https://next.amboss.com/de/courses/ZR0Zlf/p8aLnm", "https://next.amboss.com/de/courses/ZR0Zlf/J8asnm", "https://next.amboss.com/de/courses/ZR0Zlf/q8aCnm", "https://next.amboss.com/de/courses/ZR0Zlf/I8aYLm", "https://next.amboss.com/de/courses/ZR0Zlf/r8afLm", "https://next.amboss.com/de/courses/ZR0Zlf/78a4Lm", "https://next.amboss.com/de/courses/ZR0Zlf/H8aKLm", "https://next.amboss.com/de/courses/ZR0Zlf/s8atLm", "https://next.amboss.com/de/courses/ZR0Zlf/G8aBLm"],xu = [
        {
        Day: 1,    Importance: 1,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Handbuch - Vorbereitung auf das Erste Staatsexamen / Physikum",    Length: "1393",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/_Fa5km/article/YJ0nsS",    Error: 0}, {        Day: 1,    Importance: 2,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Kreuztipps zum Ersten Staatsexamen",    Length: "2440",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/_Fa5km/article/aJ0QsS",    Error: 0}, {        Day: 1,    Importance: 3,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Die Zelle",    Length: "5440",    Imppact: 8.27,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/_Fa5km/article/0o0e0S",    Error: 0}, {        Day: 1,    Importance: 4,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Stofftransport",    Length: "3382",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/_Fa5km/article/xK0EiS",    Error: 0}, {        Day: 1,    Importance: 5,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Signaltransduktion",    Length: "2527",    Imppact: 3.33,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/_Fa5km/article/Qp0u6S",    Error: 0}, {        Day: 1,    Importance: 6,    Subject: "Kreuztipps & Grundlagen der Zellbiologie und Physiologie",    Chapter: "Ruhe- und Aktionspotenzial",    Length: "2711",    Imppact: 2.58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/_Fa5km/article/jp0_6S",    Error: 0}, {        Day: 2,    Importance: 1,    Subject: "Grundlagen der Physiologie und Chemie",    Chapter: "Leistungsphysiologie und Altern",    Length: "3403",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/zFarkm/article/h60ckS",    Error: 0}, {        Day: 2,    Importance: 2,    Subject: "Grundlagen der Physiologie und Chemie",    Chapter: "Aufbau der Materie",    Length: "6315",    Imppact: 2.92,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/zFarkm/article/hK0cTS",    Error: 0}, {        Day: 3,    Importance: 1,    Subject: "Grundlagen der Chemie und Physik",    Chapter: "Ionisierende Strahlung",    Length: "2899",    Imppact: 3.25,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/-FaDkm/article/k60mOS",    Error: 0}, {        Day: 3,    Importance: 2,    Subject: "Grundlagen der Chemie und Physik",    Chapter: "Thermodynamik",    Length: "4570",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/-FaDkm/article/G60BmS",    Error: 0}, {        Day: 3,    Importance: 3,    Subject: "Grundlagen der Chemie und Physik",    Chapter: "Chemische Reaktionen",    Length: "4412",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/-FaDkm/article/PK0WgS",    Error: 0}, {        Day: 4,    Importance: 1,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Redoxchemie",    Length: "2453",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Z8aZOm/article/hp0c6S",    Error: 0}, {        Day: 4,    Importance: 2,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Grundlagen der organischen Chemie",    Length: "6356",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Z8aZOm/article/4o03XS",    Error: 0}, {        Day: 4,    Importance: 3,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Enzyme und Biokatalyse",    Length: "4481",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Z8aZOm/article/a60QjS",    Error: 0}, {        Day: 4,    Importance: 4,    Subject: "Grundlagen der Chemie und Biochemie",    Chapter: "Biochemische Labormethoden",    Length: "2573",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Z8aZOm/article/Y60njS",    Error: 0}, {        Day: 5,    Importance: 1,    Subject: "Grundlagen der Zellbiologie",    Chapter: "Zellzyklus und Tumorentstehung",    Length: "2554",    Imppact: 3.96,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/08aeOm/article/2p0TKS",    Error: 0}, {        Day: 5,    Importance: 2,    Subject: "Grundlagen der Zellbiologie",    Chapter: "Aufbau von DNA und RNA",    Length: "4627",    Imppact: 3.08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/08aeOm/article/RK0lTS",    Error: 0}, {        Day: 5,    Importance: 3,    Subject: "Grundlagen der Zellbiologie",    Chapter: "Replikation und Reparaturmechanismen der DNA",    Length: "2889",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/08aeOm/article/Yp0nLS",    Error: 0}, {        Day: 5,    Importance: 4,    Subject: "Grundlagen der Zellbiologie",    Chapter: "Purine und Pyrimidine",    Length: "2876",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/08aeOm/article/CK0qiS",    Error: 0}, {        Day: 6,    Importance: 1,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Genexpression und Transkription",    Length: "3493",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/a8aQOm/article/0p0eLS",    Error: 0}, {        Day: 6,    Importance: 2,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Translation und Proteinbiosynthese",    Length: "4607",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/a8aQOm/article/Zp0ZLS",    Error: 0}, {        Day: 6,    Importance: 3,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Grundlagen der Mikrobiologie und Virologie",    Length: "2663",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/a8aQOm/article/b60HjS",    Error: 0}, {        Day: 6,    Importance: 4,    Subject: "Grundlagen der Zell- und Mikrobiologie",    Chapter: "Bakterien",    Length: "2327",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/a8aQOm/article/lp0vpS",    Error: 0}, {        Day: 7,    Importance: 1,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Allgemeine Anatomie",    Length: "2267",    Imppact: .73,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Y8anOm/article/s60tmS",    Error: 0}, {        Day: 7,    Importance: 2,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Allgemeine Histologie",    Length: "3633",    Imppact: 1.94,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Y8anOm/article/7604mS",    Error: 0}, {        Day: 7,    Importance: 3,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Bindegewebe",    Length: "2538",    Imppact: 1.35,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Y8anOm/article/Bo0zVS",    Error: 0}, {        Day: 7,    Importance: 4,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Fettgewebe",    Length: "628",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Y8anOm/article/6p0jqS",    Error: 0}, {        Day: 8,    Importance: 1,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Knorpelgewebe",    Length: "1487",    Imppact: .25,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/b8aHOm/article/q60CNS",    Error: 0}, {        Day: 8,    Importance: 2,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Knochengewebe",    Length: "3310",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/b8aHOm/article/2o0TYS",    Error: 0}, {        Day: 8,    Importance: 3,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Muskelgewebe",    Length: "2552",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/b8aHOm/article/pp0LqS",    Error: 0}, {        Day: 8,    Importance: 4,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Glatte Muskulatur",    Length: "1294",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/b8aHOm/article/8K0ORS",    Error: 0}, {        Day: 8,    Importance: 5,    Subject: "Grundlagen der Anatomie und Histologie",    Chapter: "Skelettmuskulatur",    Length: "3632",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/b8aHOm/article/Jp0sqS",    Error: 0}, {        Day: 9,    Importance: 1,    Subject: "Verdauungssystem",    Chapter: "Bauchhöhle",    Length: "1687",    Imppact: 1.02,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/X8a9Om/article/EK08RS",    Error: 0}, {        Day: 9,    Importance: 2,    Subject: "Verdauungssystem",    Chapter: "Übersicht des Verdauungssystems",    Length: "3156",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/X8a9Om/article/qK0ChS",    Error: 0}, {        Day: 9,    Importance: 3,    Subject: "Verdauungssystem",    Chapter: "Mundhöhle",    Length: "1098",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/X8a9Om/article/KK0UhS",    Error: 0}, {        Day: 9,    Importance: 4,    Subject: "Verdauungssystem",    Chapter: "Zähne",    Length: "1609",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/X8a9Om/article/np07JS",    Error: 0}, {        Day: 9,    Importance: 5,    Subject: "Verdauungssystem",    Chapter: "Zunge",    Length: "940",    Imppact: .17,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/X8a9Om/article/Lp0wJS",    Error: 0}, {        Day: 9,    Importance: 6,    Subject: "Verdauungssystem",    Chapter: "Speicheldrüsen",    Length: "1674",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/X8a9Om/article/op00qS",    Error: 0}, {        Day: 10,    Importance: 1,    Subject: "Verdauungssystem",    Chapter: "Pharynx",    Length: "1127",    Imppact: .06,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/c8aalm/article/Kp0UqS",    Error: 0}, {        Day: 10,    Importance: 2,    Subject: "Verdauungssystem",    Chapter: "Ösophagus",    Length: "1394",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/c8aalm/article/6K0jhS",    Error: 0}, {        Day: 10,    Importance: 3,    Subject: "Verdauungssystem",    Chapter: "Magen",    Length: "2619",    Imppact: 1.71,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/c8aalm/article/XK09US",    Error: 0}, {        Day: 10,    Importance: 4,    Subject: "Verdauungssystem",    Chapter: "Dünndarm",    Length: "2125",    Imppact: 1.1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/c8aalm/article/pK0LhS",    Error: 0}, {        Day: 10,    Importance: 5,    Subject: "Verdauungssystem",    Chapter: "Leber",    Length: "4023",    Imppact: 1.98,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/c8aalm/article/F60g5S",    Error: 0}, {        Day: 11,    Importance: 1,    Subject: "Verdauungssystem",    Chapter: "Gallenblase und Galle",    Length: "1837",    Imppact: 1.27,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/18a2lm/article/t60X5S",    Error: 0}, {        Day: 11,    Importance: 2,    Subject: "Verdauungssystem",    Chapter: "Pankreas",    Length: "2472",    Imppact: .98,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/18a2lm/article/2K0TfS",    Error: 0}, {        Day: 11,    Importance: 3,    Subject: "Verdauungssystem",    Chapter: "Zäkum und Kolon",    Length: "2163",    Imppact: .38,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/18a2lm/article/rK0f3S",    Error: 0}, {        Day: 11,    Importance: 4,    Subject: "Verdauungssystem",    Chapter: "Rektum und Analkanal",    Length: "1684",    Imppact: .54,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/18a2lm/article/8p0OrS",    Error: 0}, {        Day: 11,    Importance: 5,    Subject: "Verdauungssystem",    Chapter: "Übersicht Ernährung",    Length: "1755",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/18a2lm/article/X609jS",    Error: 0}, {        Day: 12,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Kohlenhydrate",    Length: "2893",    Imppact: 4.25,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/W8aPlm/article/w60hMS",    Error: 0}, {        Day: 12,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Abbau und Synthese der Glucose",    Length: "3938",    Imppact: 4.33,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/W8aPlm/article/r60fmS",    Error: 0}, {        Day: 12,    Importance: 3,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Glykogenstoffwechsel",    Length: "1194",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/W8aPlm/article/I60YmS",    Error: 0}, {        Day: 13,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Aminosäuren und Proteine",    Length: "3861",    Imppact: 3.83,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/d8aolm/article/Jo0s1S",    Error: 0}, {        Day: 13,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Aminosäurestoffwechsel",    Length: "2912",    Imppact: 2.5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/d8aolm/article/Mp0MJS",    Error: 0}, {        Day: 14,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Lipide",    Length: "3684",    Imppact: 3.17,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/V8aGlm/article/D601MS",    Error: 0}, {        Day: 14,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Fettsäuren und Triacylglycerine",    Length: "3655",    Imppact: 2.5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/V8aGlm/article/B60zMS",    Error: 0}, {        Day: 14,    Importance: 3,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Cholesterin",    Length: "1499",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/V8aGlm/article/y60dnS",    Error: 0}, {        Day: 15,    Importance: 1,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Citratzyklus",    Length: "1238",    Imppact: 1.25,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/e8axlm/article/3p0S6S",    Error: 0}, {        Day: 15,    Importance: 2,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Atmungskette",    Length: "2268",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/e8axlm/article/Rp0l6S",    Error: 0}, {        Day: 15,    Importance: 3,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Energie- und Wärmehaushalt",    Length: "2754",    Imppact: 1.17,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/e8axlm/article/wK0hiS",    Error: 0}, {        Day: 15,    Importance: 4,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Vitamine (Vorklinik)",    Length: "5285",    Imppact: 4.1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/e8axlm/article/z60rnS",    Error: 0}, {        Day: 15,    Importance: 5,    Subject: "Ernährung und Stoffwechsel",    Chapter: "Mineralstoffe",    Length: "2310",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/e8axlm/article/-60DnS",    Error: 0}, {        Day: 16,    Importance: 1,    Subject: "Grundlagen der Physik",    Chapter: "Grundlagen des Rechnens",    Length: "2593",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/U8abNm/article/NK0-gS",    Error: 0}, {        Day: 16,    Importance: 2,    Subject: "Grundlagen der Physik",    Chapter: "Grundlagen der Mechanik",    Length: "4375",    Imppact: 3.92,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/U8abNm/article/lK0vgS",    Error: 0}, {        Day: 16,    Importance: 3,    Subject: "Grundlagen der Physik",    Chapter: "Elektrizitätslehre",    Length: "2913",    Imppact: 1.67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/U8abNm/article/4603OS",    Error: 0}, {        Day: 17,    Importance: 1,    Subject: "Herz-Kreislauf",    Chapter: "Grundlagen des Kreislaufes",    Length: "5206",    Imppact: 2.08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/28aTNm/article/no07cS",    Error: 0}, {        Day: 17,    Importance: 2,    Subject: "Herz-Kreislauf",    Chapter: "Aufbau des Herzens",    Length: "5719",    Imppact: 3.5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/28aTNm/article/CL0q-g",    Error: 0}, {        Day: 17,    Importance: 3,    Subject: "Herz-Kreislauf",    Chapter: "Herzerregung",    Length: "5051",    Imppact: 2.58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/28aTNm/article/yp0dHS",    Error: 0}, {        Day: 17,    Importance: 4,    Subject: "Herz-Kreislauf",    Chapter: "Herzmechanik",    Length: "4078",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/28aTNm/article/xL0E-g",    Error: 0}, {        Day: 18,    Importance: 1,    Subject: "Herz-Kreislauf und Atmung",    Chapter: "Aufbau und Funktion der Blutgefäße",    Length: "3914",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/f8akNm/article/go0FYS",    Error: 0}, {        Day: 18,    Importance: 2,    Subject: "Herz-Kreislauf und Atmung",    Chapter: "Kreislaufregulation",    Length: "2637",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/f8akNm/article/po0L1S",    Error: 0}, {        Day: 18,    Importance: 3,    Subject: "Herz-Kreislauf und Atmung",    Chapter: "Atemwege und Lunge",    Length: "5758",    Imppact: 3.58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/f8akNm/article/6o0j1S",    Error: 0}, {        Day: 18,    Importance: 4,    Subject: "Herz-Kreislauf und Atmung",    Chapter: "Atemmechanik",    Length: "3080",    Imppact: 2.67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/f8akNm/article/A60RnS",    Error: 0}, {        Day: 19,    Importance: 1,    Subject: "Blut",    Chapter: "Blut und Blutzellen",    Length: "3266",    Imppact: 1.92,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/T8a6Nm/article/LK0wSS",    Error: 0}, {        Day: 19,    Importance: 2,    Subject: "Blut",    Chapter: "Knochenmark und Blutbildung",    Length: "1647",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/T8a6Nm/article/qp0CqS",    Error: 0}, {        Day: 19,    Importance: 3,    Subject: "Blut",    Chapter: "Erythrozyten",    Length: "3056",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/T8a6Nm/article/960NMS",    Error: 0}, {        Day: 19,    Importance: 4,    Subject: "Blut",    Chapter: "Hämoglobin",    Length: "2539",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/T8a6Nm/article/C60qMS",    Error: 0}, {        Day: 19,    Importance: 5,    Subject: "Blut",    Chapter: "Gastransport im Blut",    Length: "2075",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/T8a6Nm/article/Np0-pS",    Error: 0}, {        Day: 19,    Importance: 6,    Subject: "Blut",    Chapter: "Blutstillung und Blutgerinnung",    Length: "4115",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/T8a6Nm/article/_K05QS",    Error: 0}, {        Day: 20,    Importance: 1,    Subject: "Immunsystem",    Chapter: "Einführung in die Immunologie",    Length: "840",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/g8aFNm/article/K60UNS",    Error: 0}, {        Day: 20,    Importance: 2,    Subject: "Immunsystem",    Chapter: "Unspezifisches Immunsystem",    Length: "5481",    Imppact: 3.67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/g8aFNm/article/660jNS",    Error: 0}, {        Day: 20,    Importance: 3,    Subject: "Immunsystem",    Chapter: "Spezifisches Immunsystem",    Length: "5206",    Imppact: 2.38,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/g8aFNm/article/p60LNS",    Error: 0}, {        Day: 21,    Importance: 1,    Subject: "Immun- und lymphatisches System",    Chapter: "Gewebshormone",    Length: "3968",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/S8ayNm/article/V60GPS",    Error: 0}, {        Day: 21,    Importance: 2,    Subject: "Immun- und lymphatisches System",    Chapter: "Lymphatisches System",    Length: "3426",    Imppact: 1.04,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/S8ayNm/article/gp0FKS",    Error: 0}, {        Day: 21,    Importance: 3,    Subject: "Immun- und lymphatisches System",    Chapter: "Lymphknoten",    Length: "1162",    Imppact: .25,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/S8ayNm/article/Tp06KS",    Error: 0}, {        Day: 21,    Importance: 4,    Subject: "Immun- und lymphatisches System",    Chapter: "Milz",    Length: "1926",    Imppact: .35,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/S8ayNm/article/fp0kKS",    Error: 0}, {        Day: 21,    Importance: 5,    Subject: "Immun- und lymphatisches System",    Chapter: "Mukosa-assoziiertes lymphatisches Gewebe",    Length: "1412",    Imppact: .21,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/S8ayNm/article/Sp0yKS",    Error: 0}, {        Day: 22,    Importance: 1,    Subject: "Niere",    Chapter: "Niere",    Length: "3265",    Imppact: 1.9,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/h8acmm/article/jo0_bS",    Error: 0}, {        Day: 22,    Importance: 2,    Subject: "Niere",    Chapter: "Nierendurchblutung und glomeruläre Filtration",    Length: "3369",    Imppact: 1.67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/h8acmm/article/bJ0HsS",    Error: 0}, {        Day: 22,    Importance: 3,    Subject: "Niere",    Chapter: "Tubuläre Transportprozesse",    Length: "3473",    Imppact: 2.23,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/h8acmm/article/_605nS",    Error: 0}, {        Day: 23,    Importance: 1,    Subject: "Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Wasser- und Elektrolythaushalt",    Length: "3047",    Imppact: .83,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/38aSmm/article/lo0vXS",    Error: 0}, {        Day: 23,    Importance: 2,    Subject: "Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Säure-Basen-Haushalt",    Length: "4994",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/38aSmm/article/Io0YWS",    Error: 0}, {        Day: 23,    Importance: 3,    Subject: "Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnleiter",    Length: "950",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/38aSmm/article/Xp09LS",    Error: 0}, {        Day: 23,    Importance: 4,    Subject: "Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnblase",    Length: "1555",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/38aSmm/article/bp0HLS",    Error: 0}, {        Day: 23,    Importance: 5,    Subject: "Ableitende Harnwege und Elektrolythaushalt",    Chapter: "Harnröhre",    Length: "901",    Imppact: .25,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/38aSmm/article/ap0QLS",    Error: 0}, {        Day: 24,    Importance: 1,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Allgemeine Hormoneigenschaften",    Length: "1103",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/R8almm/article/IK0Y3S",    Error: 0}, {        Day: 24,    Importance: 2,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Hypophyse",    Length: "3534",    Imppact: 1.52,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/R8almm/article/jK0_TS",    Error: 0}, {        Day: 24,    Importance: 3,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Schilddrüse",    Length: "2926",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/R8almm/article/bK0HUS",    Error: 0}, {        Day: 24,    Importance: 4,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Nebenschilddrüsen",    Length: "1197",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/R8almm/article/Op0IpS",    Error: 0}, {        Day: 25,    Importance: 1,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Nebenniere",    Length: "4284",    Imppact: 3.17,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/i8aJmm/article/S60y4S",    Error: 0}, {        Day: 25,    Importance: 2,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Sexualhormone",    Length: "3536",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/i8aJmm/article/zo0reS",    Error: 0}, {        Day: 25,    Importance: 3,    Subject: "Hormonsystem und Endokrine Organe",    Chapter: "Pankreashormone",    Length: "1875",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/i8aJmm/article/kp0mpS",    Error: 0}, {        Day: 26,    Importance: 1,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Ovar",    Length: "1835",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/m60VlS",    Error: 0}, {        Day: 26,    Importance: 2,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Tuba uterina",    Length: "712",    Imppact: .08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/M60MlS",    Error: 0}, {        Day: 26,    Importance: 3,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Uterus",    Length: "1950",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/560ilS",    Error: 0}, {        Day: 26,    Importance: 4,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Vagina und Vulva",    Length: "1440",    Imppact: .33,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/n607lS",    Error: 0}, {        Day: 26,    Importance: 5,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Mamma",    Length: "1561",    Imppact: .17,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/L60wlS",    Error: 0}, {        Day: 26,    Importance: 6,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Hoden",    Length: "2032",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/ep0xoS",    Error: 0}, {        Day: 26,    Importance: 7,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Prostata Bläschendrüse und Cowper-Drüse",    Length: "1348",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/dp0ooS",    Error: 0}, {        Day: 26,    Importance: 8,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Nebenhoden Samenleiter und Samenstrang",    Length: "1122",    Imppact: .56,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/Wp0PoS",    Error: 0}, {        Day: 26,    Importance: 9,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Penis Erektion und Ejakulation",    Length: "1754",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/Vp0GoS",    Error: 0}, {        Day: 26,    Importance: 10,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Geschlechtsentwicklung",    Length: "4129",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/Qo0ubS",    Error: 0}, {        Day: 26,    Importance: 11,    Subject: "Geschlechtsorgane und Sexualität",    Chapter: "Sexualität und Sexualmedizin",    Length: "1074",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/Q8aumm/article/d60oPS",    Error: 0}, {        Day: 27,    Importance: 1,    Subject: "Entstehung neuen Lebens",    Chapter: "Grundlagen der Embryologie",    Length: "3531",    Imppact: .83,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/j8a_mm/article/vp0ArS",    Error: 0}, {        Day: 27,    Importance: 2,    Subject: "Entstehung neuen Lebens",    Chapter: "Von der Befruchtung zur Implantation",    Length: "2367",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/j8a_mm/article/Dp017S",    Error: 0}, {        Day: 27,    Importance: 3,    Subject: "Entstehung neuen Lebens",    Chapter: "Embryonalentwicklung",    Length: "3351",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/j8a_mm/article/wp0h7S",    Error: 0}, {        Day: 27,    Importance: 4,    Subject: "Entstehung neuen Lebens",    Chapter: "Plazenta Nabelschnur und Amnion",    Length: "2411",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/j8a_mm/article/Cp0q7S",    Error: 0}, {        Day: 27,    Importance: 5,    Subject: "Entstehung neuen Lebens",    Chapter: "Physiologische Aspekte prä- und postnatal",    Length: "3341",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/j8a_mm/article/9p0N7S",    Error: 0}, {        Day: 27,    Importance: 6,    Subject: "Entstehung neuen Lebens",    Chapter: "Humangenetik (Vorklinik)",    Length: "5200",    Imppact: 3.33,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/j8a_mm/article/DK01iS",    Error: 0}, {        Day: 28,    Importance: 1,    Subject: "Obere Extremität",    Chapter: "Schulter und Schultergürtel",    Length: "3591",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/P8aW5m/article/Ro0lbS",    Error: 0}, {        Day: 28,    Importance: 2,    Subject: "Obere Extremität",    Chapter: "Oberarm und Ellenbogen",    Length: "1234",    Imppact: .52,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/P8aW5m/article/So0yYS",    Error: 0}, {        Day: 28,    Importance: 3,    Subject: "Obere Extremität",    Chapter: "Unterarm",    Length: "1816",    Imppact: .77,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/P8aW5m/article/ho0cbS",    Error: 0}, {        Day: 28,    Importance: 4,    Subject: "Obere Extremität",    Chapter: "Hand",    Length: "3013",    Imppact: 1.19,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/P8aW5m/article/io0JbS",    Error: 0}, {        Day: 28,    Importance: 5,    Subject: "Obere Extremität",    Chapter: "Leitungsbahnen der oberen Extremität",    Length: "4453",    Imppact: 1.42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/P8aW5m/article/Vo0GaS",    Error: 0}, {        Day: 29,    Importance: 1,    Subject: "Untere Extremität",    Chapter: "Becken und Hüfte",    Length: "3364",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/48a35m/article/f60k4S",    Error: 0}, {        Day: 29,    Importance: 2,    Subject: "Untere Extremität",    Chapter: "Oberschenkel und Knie",    Length: "3007",    Imppact: 1.77,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/48a35m/article/yK0dQS",    Error: 0}, {        Day: 29,    Importance: 3,    Subject: "Untere Extremität",    Chapter: "Unterschenkel",    Length: "2588",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/48a35m/article/Ao0ReS",    Error: 0}, {        Day: 29,    Importance: 4,    Subject: "Untere Extremität",    Chapter: "Sprunggelenke und Fuß",    Length: "4065",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/48a35m/article/8o0OdS",    Error: 0}, {        Day: 29,    Importance: 5,    Subject: "Untere Extremität",    Chapter: "Leitungsbahnen der unteren Extremität",    Length: "4987",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/48a35m/article/uo0pdS",    Error: 0}, {        Day: 30,    Importance: 1,    Subject: "Rumpf",    Chapter: "Brustwand",    Length: "2672",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/k8am5m/article/tp0XrS",    Error: 0}, {        Day: 30,    Importance: 2,    Subject: "Rumpf",    Chapter: "Bauchwand",    Length: "2333",    Imppact: 1.27,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/k8am5m/article/cp0aoS",    Error: 0}, {        Day: 30,    Importance: 3,    Subject: "Rumpf",    Chapter: "Nacken und Rücken",    Length: "2577",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/k8am5m/article/up0prS",    Error: 0}, {        Day: 30,    Importance: 4,    Subject: "Rumpf",    Chapter: "Wirbelsäule",    Length: "2100",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/k8am5m/article/R60lkS",    Error: 0}, {        Day: 30,    Importance: 5,    Subject: "Rumpf",    Chapter: "Brusthöhle",    Length: "3915",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/k8am5m/article/e60xPS",    Error: 0}, {        Day: 30,    Importance: 6,    Subject: "Rumpf",    Chapter: "Beckenhöhle",    Length: "2801",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/k8am5m/article/T6064S",    Error: 0}, {        Day: 30,    Importance: 7,    Subject: "Rumpf",    Chapter: "Leitungsbahnen des Bauchraums",    Length: "3481",    Imppact: 1.65,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/k8am5m/article/Ap0RHS",    Error: 0}, {        Day: 31,    Importance: 1,    Subject: "Kopf und Hals",    Chapter: "Übersicht der Kopf- und Halsregion",    Length: "4426",    Imppact: 2.42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/O8aI5m/article/360SkS",    Error: 0}, {        Day: 31,    Importance: 2,    Subject: "Kopf und Hals",    Chapter: "Muskulatur von Kopf und Hals",    Length: "1745",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/O8aI5m/article/1p02oS",    Error: 0}, {        Day: 31,    Importance: 3,    Subject: "Kopf und Hals",    Chapter: "Kehlkopf Sprechen und Sprache",    Length: "3246",    Imppact: .94,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/O8aI5m/article/mK0VSS",    Error: 0}, {        Day: 31,    Importance: 4,    Subject: "Kopf und Hals",    Chapter: "Nase und Nasennebenhöhlen",    Length: "2447",    Imppact: .6,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/O8aI5m/article/SK0yfS",    Error: 0}, {        Day: 32,    Importance: 1,    Subject: "Schädel und Hirnnerven",    Chapter: "Schädel",    Length: "3099",    Imppact: .6,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/l8av5m/article/aK0QUS",    Error: 0}, {        Day: 32,    Importance: 2,    Subject: "Schädel und Hirnnerven",    Chapter: "Hirnnerven",    Length: "7777",    Imppact: 3.83,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/l8av5m/article/7o04WS",    Error: 0}, {        Day: 33,    Importance: 1,    Subject: "Nervensystem",    Chapter: "Einführung in die Neuroanatomie",    Length: "1685",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/N8a-5m/article/-p0DHS",    Error: 0}, {        Day: 33,    Importance: 2,    Subject: "Nervensystem",    Chapter: "Nervengewebe Synapsen und Transmitter",    Length: "4145",    Imppact: 1.83,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/N8a-5m/article/tK0XRS",    Error: 0}, {        Day: 33,    Importance: 3,    Subject: "Nervensystem",    Chapter: "Vegetatives Nervensystem",    Length: "3653",    Imppact: 2.33,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/N8a-5m/article/oo001S",    Error: 0}, {        Day: 33,    Importance: 4,    Subject: "Nervensystem",    Chapter: "Rückenmark",    Length: "3156",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/N8a-5m/article/ro0fWS",    Error: 0}, {        Day: 33,    Importance: 5,    Subject: "Nervensystem",    Chapter: "Spinale Leitungsbahnen und Reflexe",    Length: "2971",    Imppact: 1.42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/N8a-5m/article/zp0rHS",    Error: 0}, {        Day: 34,    Importance: 1,    Subject: "Nervensystem",    Chapter: "Hirnstamm",    Length: "3523",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/m8aVMm/article/yo0deS",    Error: 0}, {        Day: 34,    Importance: 2,    Subject: "Nervensystem",    Chapter: "Kleinhirn",    Length: "2399",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/m8aVMm/article/YK0nUS",    Error: 0}, {        Day: 34,    Importance: 3,    Subject: "Nervensystem",    Chapter: "Zwischenhirn",    Length: "2415",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/m8aVMm/article/zK0rQS",    Error: 0}, {        Day: 34,    Importance: 4,    Subject: "Nervensystem",    Chapter: "Großhirn",    Length: "3134",    Imppact: 2.13,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/m8aVMm/article/060ejS",    Error: 0}, {        Day: 35,    Importance: 1,    Subject: "Nervensystem",    Chapter: "Gefäßversorgung des Gehirns",    Length: "3343",    Imppact: 1.38,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/58aiMm/article/Q60ukS",    Error: 0}, {        Day: 35,    Importance: 2,    Subject: "Nervensystem",    Chapter: "Meningen Liquorräume und Blut-Hirn-Schranke",    Length: "2386",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/58aiMm/article/ZJ0ZsS",    Error: 0}, {        Day: 35,    Importance: 3,    Subject: "Nervensystem",    Chapter: "Neurophysiologische Untersuchungen und Schlaf",    Length: "2274",    Imppact: 2.33,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/58aiMm/article/0J0esS",    Error: 0}, {        Day: 35,    Importance: 4,    Subject: "Nervensystem",    Chapter: "Limbisches System und Gedächtnis",    Length: "2381",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/58aiMm/article/U60b4S",    Error: 0}, {        Day: 36,    Importance: 1,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Grundlagen der Sensorik",    Length: "949",    Imppact: .33,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/M8aMMm/article/sK0t3S",    Error: 0}, {        Day: 36,    Importance: 2,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Haut und Hautanhangsgebilde",    Length: "3982",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/M8aMMm/article/so0tWS",    Error: 0}, {        Day: 36,    Importance: 3,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Taktiles System",    Length: "3060",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/M8aMMm/article/0K0eUS",    Error: 0}, {        Day: 36,    Importance: 4,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Nozizeptives System",    Length: "2925",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/M8aMMm/article/Do01VS",    Error: 0}, {        Day: 36,    Importance: 5,    Subject: "Nervensystem und Sinnesorgane",    Chapter: "Olfaktorisches und gustatorisches System",    Length: "2320",    Imppact: 1.67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/M8aMMm/article/xo0EVS",    Error: 0}, {        Day: 37,    Importance: 1,    Subject: "Sinnesorgane",    Chapter: "Auge und Orbita",    Length: "6167",    Imppact: 2.94,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/n8a7Mm/article/Ho0KWS",    Error: 0}, {        Day: 37,    Importance: 2,    Subject: "Sinnesorgane",    Chapter: "Optik und optische Geräte",    Length: "2586",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/n8a7Mm/article/P60WOS",    Error: 0}, {        Day: 37,    Importance: 3,    Subject: "Sinnesorgane",    Chapter: "Visuelles System",    Length: "4001",    Imppact: 4.38,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/n8a7Mm/article/mp0VJS",    Error: 0}, {        Day: 38,    Importance: 1,    Subject: "Sinnesorgane",    Chapter: "Ohr",    Length: "3711",    Imppact: 2.04,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/L8awMm/article/Eo08dS",    Error: 0}, {        Day: 38,    Importance: 2,    Subject: "Sinnesorgane",    Chapter: "Akustik",    Length: "2184",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/L8awMm/article/j60_kS",    Error: 0}, {        Day: 38,    Importance: 3,    Subject: "Sinnesorgane",    Chapter: "Auditives System",    Length: "2932",    Imppact: 1.92,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/L8awMm/article/Up0bKS",    Error: 0}, {        Day: 38,    Importance: 4,    Subject: "Sinnesorgane",    Chapter: "Vestibuläres System",    Length: "3749",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/L8awMm/article/Go0BWS",    Error: 0}, {        Day: 39,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Medizinische Statistik und Testtheorie",    Length: "5514",    Imppact: 8.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/o8a0nm/article/Ip0YIS",    Error: 0}, {        Day: 39,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Grundlagen wissenschaftlicher Studien",    Length: "2388",    Imppact: 3.5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/o8a0nm/article/rp0fIS",    Error: 0}, {        Day: 39,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Gesundheit und Krankheit",    Length: "1677",    Imppact: 3.98,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/o8a0nm/article/_o05eS",    Error: 0}, {        Day: 39,    Importance: 4,    Subject: "Psychologie und Soziologie",    Chapter: "Patientenversorgung und Gesundheitssystem",    Length: "3465",    Imppact: 2.83,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/o8a0nm/article/-K0DQS",    Error: 0}, {        Day: 40,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Lernen Kognition und Entwicklung",    Length: "4729",    Imppact: 5.67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/K8aUnm/article/7p04IS",    Error: 0}, {        Day: 40,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Emotion und Motivation",    Length: "1884",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/K8aUnm/article/Hp0KIS",    Error: 0}, {        Day: 40,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Persönlichkeit und Verhaltensstile",    Length: "1222",    Imppact: 1.33,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/K8aUnm/article/sp0tIS",    Error: 0}, {        Day: 41,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Grundlagen der Demografie und Soziologie",    Length: "2001",    Imppact: 4.5,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/68ajnm/article/Gp0BIS",    Error: 0}, {        Day: 41,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Arzt-Patient-Beziehung",    Length: "4344",    Imppact: 6.25,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/68ajnm/article/OK0IgS",    Error: 0}, {        Day: 41,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Untersuchung und Gespräch",    Length: "2046",    Imppact: 2.33,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/68ajnm/article/3K0STS",    Error: 0}, {        Day: 42,    Importance: 1,    Subject: "Psychologie und Soziologie",    Chapter: "Ärztliche Urteilsbildung und Entscheidung",    Length: "2343",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/p8aLnm/article/iK0JTS",    Error: 0}, {        Day: 42,    Importance: 2,    Subject: "Psychologie und Soziologie",    Chapter: "Prävention und Gesundheitsförderung",    Length: "2974",    Imppact: 6.35,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/p8aLnm/article/HK0K3S",    Error: 0}, {        Day: 42,    Importance: 3,    Subject: "Psychologie und Soziologie",    Chapter: "Stressmodelle",    Length: "990",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/p8aLnm/article/Ep08rS",    Error: 0}, {        Day: 42,    Importance: 4,    Subject: "Psychologie und Soziologie",    Chapter: "Verhaltens- und psychodynamische Modelle",    Length: "1094",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/p8aLnm/article/UK0bfS",    Error: 0}, {        Day: 43,    Importance: 1,    Subject: "Psychologie und Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Psychotherapeutische Verfahren (Vorklinik)",    Length: "2314",    Imppact: 2.67,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/J8asnm/article/BK0ziS",    Error: 0}, {        Day: 43,    Importance: 2,    Subject: "Psychologie und Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Umgang mit dem Sterben",    Length: "583",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/J8asnm/article/W60PPS",    Error: 0}, {        Day: 43,    Importance: 3,    Subject: "Psychologie und Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Erstes Staatsexamen (schriftlicher Teil)",    Length: "1211",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/J8asnm/article/x60EMS",    Error: 0}, {        Day: 43,    Importance: 4,    Subject: "Psychologie und Soziologie & Tipps zum Ersten Staatsexamen",    Chapter: "Erstes Staatsexamen (mündlicher Teil)",    Length: "1122",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/ZR0Zlf/J8asnm/article/xI0EUh",    Error: 0
    }],Ao = {
        lastUpdated: bu,    heading: fu,    numberOfDays: Iu,    pageTickValues: Lu,    yFragenDomain: yu,    fragenzahl: Su,    dayUrls: Uu,    data: xu
    },Eu = "09.11.2024",Cu = "50 Tage Fachfokus Lernplan M1 - F2025",Du = 50,ju = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180],Ru = 160,ku = [39, 38, 77, 78, 78, 78, 79, 76, 75, 80, 40, 39, 106, 115, 64, 67, 67, 68, 64, 67, 58, 59, 59, 60, 65, 66, 53, 67, 51, 30, 30, 59, 65, 61, 61, 58, 58, 59, 62, 60, 118, 170, 175, 118, 155, 158, 159, 156, 156, 159],Mu = ["https://next.amboss.com/de/courses/aR0Qlf/3uaSIm", "https://next.amboss.com/de/courses/aR0Qlf/RualIm", "https://next.amboss.com/de/courses/aR0Qlf/iuaJIm", "https://next.amboss.com/de/courses/aR0Qlf/QuauIm", "https://next.amboss.com/de/courses/aR0Qlf/jua_Im", "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm", "https://next.amboss.com/de/courses/aR0Qlf/4ua3rm", "https://next.amboss.com/de/courses/aR0Qlf/kuamrm", "https://next.amboss.com/de/courses/aR0Qlf/OuaIrm", "https://next.amboss.com/de/courses/aR0Qlf/luavrm", "https://next.amboss.com/de/courses/aR0Qlf/Nua-rm", "https://next.amboss.com/de/courses/aR0Qlf/muaV7m", "https://next.amboss.com/de/courses/aR0Qlf/5uai7m", "https://next.amboss.com/de/courses/aR0Qlf/MuaM7m", "https://next.amboss.com/de/courses/aR0Qlf/nua77m", "https://next.amboss.com/de/courses/aR0Qlf/Luaw7m", "https://next.amboss.com/de/courses/aR0Qlf/oua0Hm", "https://next.amboss.com/de/courses/aR0Qlf/KuaUHm", "https://next.amboss.com/de/courses/aR0Qlf/6uajHm", "https://next.amboss.com/de/courses/aR0Qlf/puaLHm", "https://next.amboss.com/de/courses/aR0Qlf/JuasHm", "https://next.amboss.com/de/courses/aR0Qlf/quaCHm", "https://next.amboss.com/de/courses/aR0Qlf/IuaYsm", "https://next.amboss.com/de/courses/aR0Qlf/ruafsm", "https://next.amboss.com/de/courses/aR0Qlf/7ua4sm", "https://next.amboss.com/de/courses/aR0Qlf/HuaKsm", "https://next.amboss.com/de/courses/aR0Qlf/suatsm", "https://next.amboss.com/de/courses/aR0Qlf/GuaBsm", "https://next.amboss.com/de/courses/aR0Qlf/tuaXGm", "https://next.amboss.com/de/courses/aR0Qlf/FuagGm", "https://next.amboss.com/de/courses/aR0Qlf/8uaOGm", "https://next.amboss.com/de/courses/aR0Qlf/uuapGm", "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm", "https://next.amboss.com/de/courses/aR0Qlf/vuaAGm", "https://next.amboss.com/de/courses/aR0Qlf/Dua1tm", "https://next.amboss.com/de/courses/aR0Qlf/wuahtm", "https://next.amboss.com/de/courses/aR0Qlf/9uaNtm", "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm", "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm", "https://next.amboss.com/de/courses/aR0Qlf/Buaztm", "https://next.amboss.com/de/courses/aR0Qlf/yuadFm", "https://next.amboss.com/de/courses/aR0Qlf/AuaRFm", "https://next.amboss.com/de/courses/aR0Qlf/_ua5Fm", "https://next.amboss.com/de/courses/aR0Qlf/zuarFm", "https://next.amboss.com/de/courses/aR0Qlf/-uaDFm", "https://next.amboss.com/de/courses/aR0Qlf/ZEaZ8m", "https://next.amboss.com/de/courses/aR0Qlf/0Eae8m", "https://next.amboss.com/de/courses/aR0Qlf/aEaQ8m", "https://next.amboss.com/de/courses/aR0Qlf/YEan8m", "https://next.amboss.com/de/courses/aR0Qlf/bEaH8m"],Yu = [
        {
        Day: 1,    Importance: 1,    Subject: "Anatomie",    Chapter: "Handbuch - M1-Fachfokus-Lernplan",    Length: "1428",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/3uaSIm/article/6w0jPR",    Error: 0}, {        Day: 1,    Importance: 2,    Subject: "Anatomie",    Chapter: "Allgemeine Anatomie",    Length: "2267",    Imppact: .73,    Url: "https://next.amboss.com/de/courses/aR0Qlf/3uaSIm/article/s60tmS",    Error: 0}, {        Day: 1,    Importance: 3,    Subject: "Anatomie",    Chapter: "Allgemeine Histologie",    Length: "3633",    Imppact: 1.94,    Url: "https://next.amboss.com/de/courses/aR0Qlf/3uaSIm/article/7604mS",    Error: 0}, {        Day: 1,    Importance: 4,    Subject: "Anatomie",    Chapter: "Bindegewebe",    Length: "2538",    Imppact: 1.35,    Url: "https://next.amboss.com/de/courses/aR0Qlf/3uaSIm/article/Bo0zVS",    Error: 0}, {        Day: 1,    Importance: 5,    Subject: "Anatomie",    Chapter: "Fettgewebe",    Length: "628",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/3uaSIm/article/6p0jqS",    Error: 0}, {        Day: 1,    Importance: 6,    Subject: "Anatomie",    Chapter: "Knorpelgewebe",    Length: "1487",    Imppact: .25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/3uaSIm/article/q60CNS",    Error: 0}, {        Day: 1,    Importance: 7,    Subject: "Anatomie",    Chapter: "Knochengewebe",    Length: "3310",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/3uaSIm/article/2o0TYS",    Error: 0}, {        Day: 1,    Importance: 8,    Subject: "Anatomie",    Chapter: "Muskelgewebe",    Length: "2552",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/3uaSIm/article/pp0LqS",    Error: 0}, {        Day: 1,    Importance: 9,    Subject: "Anatomie",    Chapter: "Glatte Muskulatur",    Length: "1294",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/3uaSIm/article/8K0ORS",    Error: 0}, {        Day: 1,    Importance: 10,    Subject: "Anatomie",    Chapter: "Skelettmuskulatur",    Length: "3632",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/3uaSIm/article/Jp0sqS",    Error: 0}, {        Day: 2,    Importance: 1,    Subject: "Anatomie",    Chapter: "Blut und Blutzellen",    Length: "3266",    Imppact: 1.92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/RualIm/article/LK0wSS",    Error: 0}, {        Day: 2,    Importance: 2,    Subject: "Anatomie",    Chapter: "Knochenmark und Blutbildung",    Length: "1647",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/RualIm/article/qp0CqS",    Error: 0}, {        Day: 2,    Importance: 3,    Subject: "Anatomie",    Chapter: "Einführung in die Immunologie",    Length: "840",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/RualIm/article/K60UNS",    Error: 0}, {        Day: 2,    Importance: 4,    Subject: "Anatomie",    Chapter: "Unspezifisches Immunsystem",    Length: "5481",    Imppact: 3.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/RualIm/article/660jNS",    Error: 0}, {        Day: 2,    Importance: 5,    Subject: "Anatomie",    Chapter: "Spezifisches Immunsystem",    Length: "5206",    Imppact: 2.38,    Url: "https://next.amboss.com/de/courses/aR0Qlf/RualIm/article/p60LNS",    Error: 0}, {        Day: 2,    Importance: 6,    Subject: "Anatomie",    Chapter: "Lymphatisches System",    Length: "3426",    Imppact: 1.04,    Url: "https://next.amboss.com/de/courses/aR0Qlf/RualIm/article/gp0FKS",    Error: 0}, {        Day: 2,    Importance: 7,    Subject: "Anatomie",    Chapter: "Lymphknoten",    Length: "1162",    Imppact: .25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/RualIm/article/Tp06KS",    Error: 0}, {        Day: 2,    Importance: 8,    Subject: "Anatomie",    Chapter: "Milz",    Length: "1926",    Imppact: .35,    Url: "https://next.amboss.com/de/courses/aR0Qlf/RualIm/article/fp0kKS",    Error: 0}, {        Day: 2,    Importance: 9,    Subject: "Anatomie",    Chapter: "Mukosa-assoziiertes lymphatisches Gewebe",    Length: "1412",    Imppact: .21,    Url: "https://next.amboss.com/de/courses/aR0Qlf/RualIm/article/Sp0yKS",    Error: 0}, {        Day: 3,    Importance: 1,    Subject: "Anatomie",    Chapter: "Grundlagen der Embryologie",    Length: "3531",    Imppact: .83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/iuaJIm/article/vp0ArS",    Error: 0}, {        Day: 3,    Importance: 2,    Subject: "Anatomie",    Chapter: "Von der Befruchtung zur Implantation",    Length: "2367",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/iuaJIm/article/Dp017S",    Error: 0}, {        Day: 3,    Importance: 3,    Subject: "Anatomie",    Chapter: "Embryonalentwicklung",    Length: "3351",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/iuaJIm/article/wp0h7S",    Error: 0}, {        Day: 3,    Importance: 4,    Subject: "Anatomie",    Chapter: "Plazenta Nabelschnur und Amnion",    Length: "2411",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/iuaJIm/article/Cp0q7S",    Error: 0}, {        Day: 3,    Importance: 5,    Subject: "Anatomie",    Chapter: "Physiologische Aspekte prä- und postnatal",    Length: "3341",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/iuaJIm/article/9p0N7S",    Error: 0}, {        Day: 4,    Importance: 1,    Subject: "Anatomie",    Chapter: "Schulter und Schultergürtel",    Length: "3591",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/QuauIm/article/Ro0lbS",    Error: 0}, {        Day: 4,    Importance: 2,    Subject: "Anatomie",    Chapter: "Oberarm und Ellenbogen",    Length: "1234",    Imppact: .52,    Url: "https://next.amboss.com/de/courses/aR0Qlf/QuauIm/article/So0yYS",    Error: 0}, {        Day: 4,    Importance: 3,    Subject: "Anatomie",    Chapter: "Unterarm",    Length: "1816",    Imppact: .77,    Url: "https://next.amboss.com/de/courses/aR0Qlf/QuauIm/article/ho0cbS",    Error: 0}, {        Day: 4,    Importance: 4,    Subject: "Anatomie",    Chapter: "Hand",    Length: "3013",    Imppact: 1.19,    Url: "https://next.amboss.com/de/courses/aR0Qlf/QuauIm/article/io0JbS",    Error: 0}, {        Day: 4,    Importance: 5,    Subject: "Anatomie",    Chapter: "Leitungsbahnen der oberen Extremität",    Length: "4453",    Imppact: 1.42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/QuauIm/article/Vo0GaS",    Error: 0}, {        Day: 4,    Importance: 6,    Subject: "Anatomie",    Chapter: "Becken und Hüfte",    Length: "3364",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/QuauIm/article/f60k4S",    Error: 0}, {        Day: 4,    Importance: 7,    Subject: "Anatomie",    Chapter: "Oberschenkel und Knie",    Length: "3007",    Imppact: 1.77,    Url: "https://next.amboss.com/de/courses/aR0Qlf/QuauIm/article/yK0dQS",    Error: 0}, {        Day: 4,    Importance: 8,    Subject: "Anatomie",    Chapter: "Unterschenkel",    Length: "2588",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/QuauIm/article/Ao0ReS",    Error: 0}, {        Day: 4,    Importance: 9,    Subject: "Anatomie",    Chapter: "Sprunggelenke und Fuß",    Length: "4065",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/QuauIm/article/8o0OdS",    Error: 0}, {        Day: 4,    Importance: 10,    Subject: "Anatomie",    Chapter: "Leitungsbahnen der unteren Extremität",    Length: "4989",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/QuauIm/article/uo0pdS",    Error: 0}, {        Day: 5,    Importance: 1,    Subject: "Anatomie",    Chapter: "Grundlagen des Kreislaufes",    Length: "5206",    Imppact: 2.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/jua_Im/article/no07cS",    Error: 0}, {        Day: 5,    Importance: 2,    Subject: "Anatomie",    Chapter: "Brusthöhle",    Length: "3915",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/jua_Im/article/e60xPS",    Error: 0}, {        Day: 5,    Importance: 3,    Subject: "Anatomie",    Chapter: "Aufbau des Herzens",    Length: "5719",    Imppact: 3.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/jua_Im/article/CL0q-g",    Error: 0}, {        Day: 5,    Importance: 4,    Subject: "Anatomie",    Chapter: "Herzerregung",    Length: "5051",    Imppact: 2.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/jua_Im/article/yp0dHS",    Error: 0}, {        Day: 5,    Importance: 5,    Subject: "Anatomie",    Chapter: "Aufbau und Funktion der Blutgefäße",    Length: "3914",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/jua_Im/article/go0FYS",    Error: 0}, {        Day: 5,    Importance: 6,    Subject: "Anatomie",    Chapter: "Atemwege und Lunge",    Length: "5758",    Imppact: 3.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/jua_Im/article/6o0j1S",    Error: 0}, {        Day: 6,    Importance: 1,    Subject: "Anatomie",    Chapter: "Übersicht des Verdauungssystems",    Length: "3156",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/qK0ChS",    Error: 0}, {        Day: 6,    Importance: 2,    Subject: "Anatomie",    Chapter: "Mundhöhle",    Length: "1098",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/KK0UhS",    Error: 0}, {        Day: 6,    Importance: 3,    Subject: "Anatomie",    Chapter: "Zähne",    Length: "1609",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/np07JS",    Error: 0}, {        Day: 6,    Importance: 4,    Subject: "Anatomie",    Chapter: "Zunge",    Length: "940",    Imppact: .17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/Lp0wJS",    Error: 0}, {        Day: 6,    Importance: 5,    Subject: "Anatomie",    Chapter: "Speicheldrüsen",    Length: "1674",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/op00qS",    Error: 0}, {        Day: 6,    Importance: 6,    Subject: "Anatomie",    Chapter: "Pharynx",    Length: "1127",    Imppact: .06,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/Kp0UqS",    Error: 0}, {        Day: 6,    Importance: 7,    Subject: "Anatomie",    Chapter: "Ösophagus",    Length: "1394",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/6K0jhS",    Error: 0}, {        Day: 6,    Importance: 8,    Subject: "Anatomie",    Chapter: "Bauchhöhle",    Length: "1687",    Imppact: 1.02,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/EK08RS",    Error: 0}, {        Day: 6,    Importance: 9,    Subject: "Anatomie",    Chapter: "Magen",    Length: "2619",    Imppact: 1.71,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/XK09US",    Error: 0}, {        Day: 6,    Importance: 10,    Subject: "Anatomie",    Chapter: "Dünndarm",    Length: "2125",    Imppact: 1.1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/pK0LhS",    Error: 0}, {        Day: 6,    Importance: 11,    Subject: "Anatomie",    Chapter: "Leber",    Length: "4023",    Imppact: 1.98,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/F60g5S",    Error: 0}, {        Day: 6,    Importance: 12,    Subject: "Anatomie",    Chapter: "Gallenblase und Galle",    Length: "1837",    Imppact: 1.27,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/t60X5S",    Error: 0}, {        Day: 6,    Importance: 13,    Subject: "Anatomie",    Chapter: "Pankreas",    Length: "2472",    Imppact: .98,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/2K0TfS",    Error: 0}, {        Day: 6,    Importance: 14,    Subject: "Anatomie",    Chapter: "Zäkum und Kolon",    Length: "2163",    Imppact: .38,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/rK0f3S",    Error: 0}, {        Day: 6,    Importance: 15,    Subject: "Anatomie",    Chapter: "Rektum und Analkanal",    Length: "1684",    Imppact: .54,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/8p0OrS",    Error: 0}, {        Day: 6,    Importance: 16,    Subject: "Anatomie",    Chapter: "Leitungsbahnen des Bauchraums",    Length: "3481",    Imppact: 1.65,    Url: "https://next.amboss.com/de/courses/aR0Qlf/PuaWrm/article/Ap0RHS",    Error: 0}, {        Day: 7,    Importance: 1,    Subject: "Anatomie",    Chapter: "Niere",    Length: "3265",    Imppact: 1.9,    Url: "https://next.amboss.com/de/courses/aR0Qlf/4ua3rm/article/jo0_bS",    Error: 0}, {        Day: 7,    Importance: 2,    Subject: "Anatomie",    Chapter: "Tubuläre Transportprozesse",    Length: "3473",    Imppact: 2.23,    Url: "https://next.amboss.com/de/courses/aR0Qlf/4ua3rm/article/_605nS",    Error: 0}, {        Day: 7,    Importance: 3,    Subject: "Anatomie",    Chapter: "Harnleiter",    Length: "950",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/4ua3rm/article/Xp09LS",    Error: 0}, {        Day: 7,    Importance: 4,    Subject: "Anatomie",    Chapter: "Harnblase",    Length: "1555",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/4ua3rm/article/bp0HLS",    Error: 0}, {        Day: 7,    Importance: 5,    Subject: "Anatomie",    Chapter: "Harnröhre",    Length: "901",    Imppact: .25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/4ua3rm/article/ap0QLS",    Error: 0}, {        Day: 7,    Importance: 6,    Subject: "Anatomie",    Chapter: "Hypophyse",    Length: "3536",    Imppact: 1.52,    Url: "https://next.amboss.com/de/courses/aR0Qlf/4ua3rm/article/jK0_TS",    Error: 0}, {        Day: 7,    Importance: 7,    Subject: "Anatomie",    Chapter: "Schilddrüse",    Length: "2926",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/4ua3rm/article/bK0HUS",    Error: 0}, {        Day: 7,    Importance: 8,    Subject: "Anatomie",    Chapter: "Nebenschilddrüsen",    Length: "1197",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/4ua3rm/article/Op0IpS",    Error: 0}, {        Day: 7,    Importance: 9,    Subject: "Anatomie",    Chapter: "Nebenniere",    Length: "4284",    Imppact: 3.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/4ua3rm/article/S60y4S",    Error: 0}, {        Day: 8,    Importance: 1,    Subject: "Anatomie",    Chapter: "Beckenhöhle",    Length: "2801",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/T6064S",    Error: 0}, {        Day: 8,    Importance: 2,    Subject: "Anatomie",    Chapter: "Ovar",    Length: "1835",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/m60VlS",    Error: 0}, {        Day: 8,    Importance: 3,    Subject: "Anatomie",    Chapter: "Tuba uterina",    Length: "712",    Imppact: .08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/M60MlS",    Error: 0}, {        Day: 8,    Importance: 4,    Subject: "Anatomie",    Chapter: "Uterus",    Length: "1950",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/560ilS",    Error: 0}, {        Day: 8,    Importance: 5,    Subject: "Anatomie",    Chapter: "Vagina und Vulva",    Length: "1440",    Imppact: .33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/n607lS",    Error: 0}, {        Day: 8,    Importance: 6,    Subject: "Anatomie",    Chapter: "Mamma",    Length: "1561",    Imppact: .17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/L60wlS",    Error: 0}, {        Day: 8,    Importance: 7,    Subject: "Anatomie",    Chapter: "Hoden",    Length: "2032",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/ep0xoS",    Error: 0}, {        Day: 8,    Importance: 8,    Subject: "Anatomie",    Chapter: "Nebenhoden Samenleiter und Samenstrang",    Length: "1122",    Imppact: .56,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/Wp0PoS",    Error: 0}, {        Day: 8,    Importance: 9,    Subject: "Anatomie",    Chapter: "Prostata Bläschendrüse und Cowper-Drüse",    Length: "1348",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/dp0ooS",    Error: 0}, {        Day: 8,    Importance: 10,    Subject: "Anatomie",    Chapter: "Penis Erektion und Ejakulation",    Length: "1754",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/Vp0GoS",    Error: 0}, {        Day: 8,    Importance: 11,    Subject: "Anatomie",    Chapter: "Geschlechtsentwicklung",    Length: "4129",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/kuamrm/article/Qo0ubS",    Error: 0}, {        Day: 9,    Importance: 1,    Subject: "Anatomie",    Chapter: "Nacken und Rücken",    Length: "2577",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/OuaIrm/article/up0prS",    Error: 0}, {        Day: 9,    Importance: 2,    Subject: "Anatomie",    Chapter: "Wirbelsäule",    Length: "2100",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/OuaIrm/article/R60lkS",    Error: 0}, {        Day: 9,    Importance: 3,    Subject: "Anatomie",    Chapter: "Brustwand",    Length: "2672",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/OuaIrm/article/tp0XrS",    Error: 0}, {        Day: 9,    Importance: 4,    Subject: "Anatomie",    Chapter: "Bauchwand",    Length: "2333",    Imppact: 1.27,    Url: "https://next.amboss.com/de/courses/aR0Qlf/OuaIrm/article/cp0aoS",    Error: 0}, {        Day: 9,    Importance: 5,    Subject: "Anatomie",    Chapter: "Übersicht der Kopf- und Halsregion",    Length: "4426",    Imppact: 2.42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/OuaIrm/article/360SkS",    Error: 0}, {        Day: 9,    Importance: 6,    Subject: "Anatomie",    Chapter: "Muskulatur von Kopf und Hals",    Length: "1745",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/OuaIrm/article/1p02oS",    Error: 0}, {        Day: 9,    Importance: 7,    Subject: "Anatomie",    Chapter: "Kehlkopf Sprechen und Sprache",    Length: "3246",    Imppact: .94,    Url: "https://next.amboss.com/de/courses/aR0Qlf/OuaIrm/article/mK0VSS",    Error: 0}, {        Day: 9,    Importance: 8,    Subject: "Anatomie",    Chapter: "Nase und Nasennebenhöhlen",    Length: "2447",    Imppact: .6,    Url: "https://next.amboss.com/de/courses/aR0Qlf/OuaIrm/article/SK0yfS",    Error: 0}, {        Day: 9,    Importance: 9,    Subject: "Anatomie",    Chapter: "Schädel",    Length: "3099",    Imppact: .6,    Url: "https://next.amboss.com/de/courses/aR0Qlf/OuaIrm/article/aK0QUS",    Error: 0}, {        Day: 10,    Importance: 1,    Subject: "Anatomie",    Chapter: "Einführung in die Neuroanatomie",    Length: "1685",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/luavrm/article/-p0DHS",    Error: 0}, {        Day: 10,    Importance: 2,    Subject: "Anatomie",    Chapter: "Hirnnerven",    Length: "7777",    Imppact: 3.83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/luavrm/article/7o04WS",    Error: 0}, {        Day: 10,    Importance: 3,    Subject: "Anatomie",    Chapter: "Nervengewebe Synapsen und Transmitter",    Length: "4145",    Imppact: 1.83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/luavrm/article/tK0XRS",    Error: 0}, {        Day: 10,    Importance: 4,    Subject: "Anatomie",    Chapter: "Vegetatives Nervensystem",    Length: "3653",    Imppact: 2.33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/luavrm/article/oo001S",    Error: 0}, {        Day: 10,    Importance: 5,    Subject: "Anatomie",    Chapter: "Rückenmark",    Length: "3156",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/luavrm/article/ro0fWS",    Error: 0}, {        Day: 10,    Importance: 6,    Subject: "Anatomie",    Chapter: "Spinale Leitungsbahnen und Reflexe",    Length: "2973",    Imppact: 1.42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/luavrm/article/zp0rHS",    Error: 0}, {        Day: 11,    Importance: 1,    Subject: "Anatomie",    Chapter: "Hirnstamm",    Length: "3523",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Nua-rm/article/yo0deS",    Error: 0}, {        Day: 11,    Importance: 2,    Subject: "Anatomie",    Chapter: "Kleinhirn",    Length: "2399",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Nua-rm/article/YK0nUS",    Error: 0}, {        Day: 11,    Importance: 3,    Subject: "Anatomie",    Chapter: "Zwischenhirn",    Length: "2415",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Nua-rm/article/zK0rQS",    Error: 0}, {        Day: 11,    Importance: 4,    Subject: "Anatomie",    Chapter: "Großhirn",    Length: "3134",    Imppact: 2.13,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Nua-rm/article/060ejS",    Error: 0}, {        Day: 11,    Importance: 5,    Subject: "Anatomie",    Chapter: "Limbisches System und Gedächtnis",    Length: "2381",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Nua-rm/article/U60b4S",    Error: 0}, {        Day: 11,    Importance: 6,    Subject: "Anatomie",    Chapter: "Gefäßversorgung des Gehirns",    Length: "3343",    Imppact: 1.38,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Nua-rm/article/Q60ukS",    Error: 0}, {        Day: 11,    Importance: 7,    Subject: "Anatomie",    Chapter: "Meningen Liquorräume und Blut-Hirn-Schranke",    Length: "2388",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Nua-rm/article/ZJ0ZsS",    Error: 0}, {        Day: 12,    Importance: 1,    Subject: "Anatomie",    Chapter: "Auge und Orbita",    Length: "6167",    Imppact: 2.94,    Url: "https://next.amboss.com/de/courses/aR0Qlf/muaV7m/article/Ho0KWS",    Error: 0}, {        Day: 12,    Importance: 2,    Subject: "Anatomie",    Chapter: "Visuelles System",    Length: "4001",    Imppact: 4.38,    Url: "https://next.amboss.com/de/courses/aR0Qlf/muaV7m/article/mp0VJS",    Error: 0}, {        Day: 12,    Importance: 3,    Subject: "Anatomie",    Chapter: "Olfaktorisches und gustatorisches System",    Length: "2320",    Imppact: 1.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/muaV7m/article/xo0EVS",    Error: 0}, {        Day: 12,    Importance: 4,    Subject: "Anatomie",    Chapter: "Ohr",    Length: "3711",    Imppact: 2.04,    Url: "https://next.amboss.com/de/courses/aR0Qlf/muaV7m/article/Eo08dS",    Error: 0}, {        Day: 12,    Importance: 5,    Subject: "Anatomie",    Chapter: "Auditives System",    Length: "2932",    Imppact: 1.92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/muaV7m/article/Up0bKS",    Error: 0}, {        Day: 12,    Importance: 6,    Subject: "Anatomie",    Chapter: "Vestibuläres System",    Length: "3749",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/muaV7m/article/Go0BWS",    Error: 0}, {        Day: 12,    Importance: 7,    Subject: "Anatomie",    Chapter: "Haut und Hautanhangsgebilde",    Length: "3982",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/muaV7m/article/so0tWS",    Error: 0}, {        Day: 12,    Importance: 8,    Subject: "Anatomie",    Chapter: "Taktiles System",    Length: "3060",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/muaV7m/article/0K0eUS",    Error: 0}, {        Day: 12,    Importance: 9,    Subject: "Anatomie",    Chapter: "Nozizeptives System",    Length: "2923",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/muaV7m/article/Do01VS",    Error: 0}, {        Day: 13,    Importance: 1,    Subject: "Biologie",    Chapter: "Die Zelle",    Length: "5440",    Imppact: 8.27,    Url: "https://next.amboss.com/de/courses/aR0Qlf/5uai7m/article/0o0e0S",    Error: 0}, {        Day: 13,    Importance: 2,    Subject: "Biologie",    Chapter: "Zellzyklus und Tumorentstehung",    Length: "2554",    Imppact: 3.96,    Url: "https://next.amboss.com/de/courses/aR0Qlf/5uai7m/article/2p0TKS",    Error: 0}, {        Day: 13,    Importance: 3,    Subject: "Biologie",    Chapter: "Aufbau von DNA und RNA",    Length: "4629",    Imppact: 3.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/5uai7m/article/RK0lTS",    Error: 0}, {        Day: 13,    Importance: 4,    Subject: "Biologie",    Chapter: "Humangenetik (Vorklinik)",    Length: "5200",    Imppact: 3.33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/5uai7m/article/DK01iS",    Error: 0}, {        Day: 13,    Importance: 5,    Subject: "Biologie",    Chapter: "Replikation und Reparaturmechanismen der DNA",    Length: "2889",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/5uai7m/article/Yp0nLS",    Error: 0}, {        Day: 14,    Importance: 1,    Subject: "Biologie",    Chapter: "Genexpression und Transkription",    Length: "3493",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/MuaM7m/article/0p0eLS",    Error: 0}, {        Day: 14,    Importance: 2,    Subject: "Biologie",    Chapter: "Translation und Proteinbiosynthese",    Length: "4607",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/aR0Qlf/MuaM7m/article/Zp0ZLS",    Error: 0}, {        Day: 14,    Importance: 3,    Subject: "Biologie",    Chapter: "Grundlagen der Embryologie",    Length: "3531",    Imppact: .83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/MuaM7m/article/vp0ArS",    Error: 0}, {        Day: 14,    Importance: 4,    Subject: "Biologie",    Chapter: "Enzyme und Biokatalyse",    Length: "4481",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/MuaM7m/article/a60QjS",    Error: 0}, {        Day: 14,    Importance: 5,    Subject: "Biologie",    Chapter: "Biochemische Labormethoden",    Length: "2573",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/MuaM7m/article/Y60njS",    Error: 0}, {        Day: 14,    Importance: 6,    Subject: "Biologie",    Chapter: "Grundlagen der Mikrobiologie und Virologie",    Length: "2663",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/MuaM7m/article/b60HjS",    Error: 0}, {        Day: 14,    Importance: 7,    Subject: "Biologie",    Chapter: "Bakterien",    Length: "2327",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/MuaM7m/article/lp0vpS",    Error: 0}, {        Day: 15,    Importance: 1,    Subject: "Chemie",    Chapter: "Aufbau der Materie",    Length: "6315",    Imppact: 2.92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/nua77m/article/hK0cTS",    Error: 0}, {        Day: 15,    Importance: 2,    Subject: "Chemie",    Chapter: "Chemische Reaktionen",    Length: "4412",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/nua77m/article/PK0WgS",    Error: 0}, {        Day: 15,    Importance: 3,    Subject: "Chemie",    Chapter: "Chemische Grundlagen zu Säuren und Basen",    Length: "453",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/nua77m/article/Io0YWS#Zaaf26b6239b109d0af9a85212f713040",    Error: 0}, {        Day: 15,    Importance: 4,    Subject: "Chemie",    Chapter: "pH-Wert",    Length: "1237",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/nua77m/article/Io0YWS#Z6fbf579968675e0abb1983b5bf89d199",    Error: 0}, {        Day: 15,    Importance: 5,    Subject: "Chemie",    Chapter: "Pufferlösung",    Length: "1464",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/nua77m/article/Io0YWS#Z3b7a910aa741b4ff7ba2d73f12213061",    Error: 32}, {        Day: 15,    Importance: 6,    Subject: "Chemie",    Chapter: "Redoxchemie",    Length: "2453",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/nua77m/article/hp0c6S",    Error: 0}, {        Day: 16,    Importance: 1,    Subject: "Chemie",    Chapter: "Grundlagen der organischen Chemie",    Length: "6356",    Imppact: 5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Luaw7m/article/4o03XS",    Error: 0}, {        Day: 16,    Importance: 2,    Subject: "Chemie",    Chapter: "Thermodynamik",    Length: "4570",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Luaw7m/article/G60BmS",    Error: 0}, {        Day: 16,    Importance: 3,    Subject: "Chemie",    Chapter: "Enzyme und Biokatalyse",    Length: "4481",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Luaw7m/article/a60QjS",    Error: 0}, {        Day: 16,    Importance: 4,    Subject: "Chemie",    Chapter: "Chemische Struktur der Kohlenhydrate",    Length: "1274",    Imppact: 4.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Luaw7m/article/w60hMS#Z768c381f33bc2a7d94687e35c1abdc18",    Error: 0}, {        Day: 16,    Importance: 5,    Subject: "Chemie",    Chapter: "Aminosäuren: Struktur und Eigenschaften",    Length: "1264",    Imppact: 3.83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Luaw7m/article/Jo0s1S#Z3d2a93501d23ecf609a730566f77f0a5",    Error: 0}, {        Day: 16,    Importance: 6,    Subject: "Chemie",    Chapter: "Peptide und Proteine: Struktur und Eigenschaften",    Length: "983",    Imppact: 3.83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Luaw7m/article/Jo0s1S#Z55e62988dfd57dfa9376dbc3ce63548e",    Error: 0}, {        Day: 16,    Importance: 7,    Subject: "Chemie",    Chapter: "Chemische Struktur der Fettsäuren und Triacylglycerine",    Length: "460",    Imppact: 2.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Luaw7m/article/B60zMS#Z5811ce106b109ce5bfc6c71bd96ca9cf",    Error: 0}, {        Day: 17,    Importance: 1,    Subject: "Biochemie",    Chapter: "Aufbau von DNA und RNA",    Length: "4627",    Imppact: 3.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/oua0Hm/article/RK0lTS",    Error: 0}, {        Day: 17,    Importance: 2,    Subject: "Biochemie",    Chapter: "Humangenetik (Vorklinik)",    Length: "5200",    Imppact: 3.33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/oua0Hm/article/DK01iS",    Error: 0}, {        Day: 17,    Importance: 3,    Subject: "Biochemie",    Chapter: "Replikation und Reparaturmechanismen der DNA",    Length: "2889",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/oua0Hm/article/Yp0nLS",    Error: 0}, {        Day: 17,    Importance: 4,    Subject: "Biochemie",    Chapter: "Genexpression und Transkription",    Length: "3493",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/oua0Hm/article/0p0eLS",    Error: 0}, {        Day: 17,    Importance: 5,    Subject: "Biochemie",    Chapter: "Translation und Proteinbiosynthese",    Length: "4607",    Imppact: 4,    Url: "https://next.amboss.com/de/courses/aR0Qlf/oua0Hm/article/Zp0ZLS",    Error: 0}, {        Day: 18,    Importance: 1,    Subject: "Biochemie",    Chapter: "Molekularbiologie der Entwicklung",    Length: "385",    Imppact: .83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/KuaUHm/article/vp0ArS#Z9ce8b734dfe6724fd6607d92acb92e26",    Error: 0}, {        Day: 18,    Importance: 2,    Subject: "Biochemie",    Chapter: "Purine und Pyrimidine",    Length: "2876",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/KuaUHm/article/CK0qiS",    Error: 0}, {        Day: 18,    Importance: 3,    Subject: "Biochemie",    Chapter: "Enzyme und Biokatalyse",    Length: "4481",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/KuaUHm/article/a60QjS",    Error: 0}, {        Day: 18,    Importance: 4,    Subject: "Biochemie",    Chapter: "Biochemische Labormethoden",    Length: "2573",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/KuaUHm/article/Y60njS",    Error: 0}, {        Day: 19,    Importance: 1,    Subject: "Biochemie",    Chapter: "Übersicht Ernährung",    Length: "1755",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/6uajHm/article/X609jS",    Error: 0}, {        Day: 19,    Importance: 2,    Subject: "Biochemie",    Chapter: "Kohlenhydrate",    Length: "2893",    Imppact: 4.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/6uajHm/article/w60hMS",    Error: 0}, {        Day: 19,    Importance: 3,    Subject: "Biochemie",    Chapter: "Abbau und Synthese der Glucose",    Length: "3938",    Imppact: 4.33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/6uajHm/article/r60fmS",    Error: 0}, {        Day: 19,    Importance: 4,    Subject: "Biochemie",    Chapter: "Glykogenstoffwechsel",    Length: "1194",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/6uajHm/article/I60YmS",    Error: 0}, {        Day: 20,    Importance: 1,    Subject: "Biochemie",    Chapter: "Citratzyklus",    Length: "1238",    Imppact: 1.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/puaLHm/article/3p0S6S",    Error: 0}, {        Day: 20,    Importance: 2,    Subject: "Biochemie",    Chapter: "Atmungskette",    Length: "2268",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/puaLHm/article/Rp0l6S",    Error: 0}, {        Day: 20,    Importance: 3,    Subject: "Biochemie",    Chapter: "Energiehaushalt",    Length: "1127",    Imppact: 1.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/puaLHm/article/wK0hiS#Zfdbc67b9335d3d84917c4df910e2740c",    Error: 0}, {        Day: 21,    Importance: 1,    Subject: "Biochemie",    Chapter: "Aminosäuren und Proteine",    Length: "3861",    Imppact: 3.83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/JuasHm/article/Jo0s1S",    Error: 0}, {        Day: 21,    Importance: 2,    Subject: "Biochemie",    Chapter: "Aminosäurestoffwechsel",    Length: "2912",    Imppact: 2.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/JuasHm/article/Mp0MJS",    Error: 0}, {        Day: 21,    Importance: 3,    Subject: "Biochemie",    Chapter: "Muskelgewebe",    Length: "2552",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/JuasHm/article/pp0LqS",    Error: 0}, {        Day: 21,    Importance: 4,    Subject: "Biochemie",    Chapter: "Extrazellulärmatrix",    Length: "1709",    Imppact: 1.35,    Url: "https://next.amboss.com/de/courses/aR0Qlf/JuasHm/article/Bo0zVS#Z89df758dcab50b245ed29cc3362902f6",    Error: 0}, {        Day: 22,    Importance: 1,    Subject: "Biochemie",    Chapter: "Lipide",    Length: "3684",    Imppact: 3.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/quaCHm/article/D601MS",    Error: 0}, {        Day: 22,    Importance: 2,    Subject: "Biochemie",    Chapter: "Galle",    Length: "545",    Imppact: 1.27,    Url: "https://next.amboss.com/de/courses/aR0Qlf/quaCHm/article/t60X5S#Z307fa87b89716ce7a257e1d5969561fb",    Error: 0}, {        Day: 22,    Importance: 3,    Subject: "Biochemie",    Chapter: "Fettsäuren und Triacylglycerine",    Length: "3655",    Imppact: 2.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/quaCHm/article/B60zMS",    Error: 0}, {        Day: 22,    Importance: 4,    Subject: "Biochemie",    Chapter: "Cholesterin",    Length: "1499",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/quaCHm/article/y60dnS",    Error: 0}, {        Day: 22,    Importance: 5,    Subject: "Biochemie",    Chapter: "Grundlagen der Biotransformation",    Length: "1063",    Imppact: 1.98,    Url: "https://next.amboss.com/de/courses/aR0Qlf/quaCHm/article/F60g5S#Zb3783e69e371966ebb716957469d188c",    Error: 0}, {        Day: 23,    Importance: 1,    Subject: "Biochemie",    Chapter: "Wasser- und Elektrolythaushalt",    Length: "3047",    Imppact: .83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/IuaYsm/article/lo0vXS",    Error: 0}, {        Day: 23,    Importance: 2,    Subject: "Biochemie",    Chapter: "Säure-Basen-Haushalt",    Length: "4994",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/IuaYsm/article/Io0YWS",    Error: 0}, {        Day: 23,    Importance: 3,    Subject: "Biochemie",    Chapter: "Vitamine (Vorklinik)",    Length: "5285",    Imppact: 4.1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/IuaYsm/article/z60rnS",    Error: 0}, {        Day: 23,    Importance: 4,    Subject: "Biochemie",    Chapter: "Mineralstoffe",    Length: "2310",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/IuaYsm/article/-60DnS",    Error: 0}, {        Day: 24,    Importance: 1,    Subject: "Biochemie",    Chapter: "Glucosestoffwechsel von Erythrozyten",    Length: "834",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/aR0Qlf/ruafsm/article/960NMS#Z02fa95d3e52cd01d69e5e4e8147e7092",    Error: 0}, {        Day: 24,    Importance: 2,    Subject: "Biochemie",    Chapter: "Glutathion",    Length: "334",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/aR0Qlf/ruafsm/article/960NMS#Zc1d1072f3d1c853375b294c77178ee48",    Error: 0}, {        Day: 24,    Importance: 3,    Subject: "Biochemie",    Chapter: "Hämoglobin",    Length: "2539",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/ruafsm/article/C60qMS",    Error: 0}, {        Day: 24,    Importance: 4,    Subject: "Biochemie",    Chapter: "Sauerstofftransport",    Length: "1022",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/ruafsm/article/Np0-pS#Z5f884fab1bba1daa9b663a39864ce1ba",    Error: 0}, {        Day: 24,    Importance: 5,    Subject: "Biochemie",    Chapter: "Kohlenstoffdioxid-Transport",    Length: "279",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/ruafsm/article/Np0-pS#Z06c31834dcce4ea46f2daf15a04de13a",    Error: 0}, {        Day: 24,    Importance: 6,    Subject: "Biochemie",    Chapter: "Blutstillung und Blutgerinnung",    Length: "4115",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/ruafsm/article/_K05QS",    Error: 0}, {        Day: 25,    Importance: 1,    Subject: "Biochemie",    Chapter: "Einführung in die Immunologie",    Length: "840",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/7ua4sm/article/K60UNS",    Error: 0}, {        Day: 25,    Importance: 2,    Subject: "Biochemie",    Chapter: "Unspezifisches Immunsystem",    Length: "5481",    Imppact: 3.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/7ua4sm/article/660jNS",    Error: 0}, {        Day: 25,    Importance: 3,    Subject: "Biochemie",    Chapter: "Spezifisches Immunsystem",    Length: "5206",    Imppact: 2.38,    Url: "https://next.amboss.com/de/courses/aR0Qlf/7ua4sm/article/p60LNS",    Error: 0}, {        Day: 25,    Importance: 4,    Subject: "Biochemie",    Chapter: "Gewebshormone",    Length: "3968",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/7ua4sm/article/V60GPS",    Error: 0}, {        Day: 25,    Importance: 5,    Subject: "Biochemie",    Chapter: "Lymphatisches System",    Length: "3426",    Imppact: 1.04,    Url: "https://next.amboss.com/de/courses/aR0Qlf/7ua4sm/article/gp0FKS",    Error: 0}, {        Day: 26,    Importance: 1,    Subject: "Biochemie",    Chapter: "Allgemeine Hormoneigenschaften",    Length: "1103",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/HuaKsm/article/IK0Y3S",    Error: 0}, {        Day: 26,    Importance: 2,    Subject: "Biochemie",    Chapter: "Schilddrüsenhormone",    Length: "1304",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/HuaKsm/article/bK0HUS#Zdeb524a5a3124177544206ecd94b3437",    Error: 0}, {        Day: 26,    Importance: 3,    Subject: "Biochemie",    Chapter: "Nebenniere",    Length: "4284",    Imppact: 3.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/HuaKsm/article/S60y4S",    Error: 0}, {        Day: 26,    Importance: 4,    Subject: "Biochemie",    Chapter: "Sexualhormone",    Length: "3536",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/HuaKsm/article/zo0reS",    Error: 0}, {        Day: 26,    Importance: 5,    Subject: "Biochemie",    Chapter: "Pankreashormone",    Length: "1875",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/HuaKsm/article/kp0mpS",    Error: 0}, {        Day: 26,    Importance: 6,    Subject: "Biochemie",    Chapter: "Neurotransmitter",    Length: "545",    Imppact: 1.83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/HuaKsm/article/tK0XRS#Z733b85e0bbbefcf2e692f5c16b23e1d8",    Error: 0}, {        Day: 27,    Importance: 1,    Subject: "Physik",    Chapter: "Grundlagen des Rechnens",    Length: "2593",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/suatsm/article/NK0-gS",    Error: 0}, {        Day: 27,    Importance: 2,    Subject: "Physik",    Chapter: "Grundlagen der Mechanik",    Length: "4375",    Imppact: 3.92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/suatsm/article/lK0vgS",    Error: 0}, {        Day: 27,    Importance: 3,    Subject: "Physik",    Chapter: "Atome und chemische Elemente",    Length: "1587",    Imppact: 2.92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/suatsm/article/hK0cTS#Ze6092c73e4fd777c879cf2fc265401a7",    Error: 0}, {        Day: 27,    Importance: 4,    Subject: "Physik",    Chapter: "Ionisierende Strahlung",    Length: "2899",    Imppact: 3.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/suatsm/article/k60mOS",    Error: 0}, {        Day: 28,    Importance: 1,    Subject: "Physik",    Chapter: "Elektrizitätslehre",    Length: "2913",    Imppact: 1.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/GuaBsm/article/4603OS",    Error: 0}, {        Day: 28,    Importance: 2,    Subject: "Physik",    Chapter: "Physikalische Grundlagen: Stromstärke und Widerstand im Kreislaufsystem",    Length: "1643",    Imppact: 2.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/GuaBsm/article/no07cS#Z9326d7e327e7060f4bec020f99514a3b",    Error: 0}, {        Day: 28,    Importance: 3,    Subject: "Physik",    Chapter: "Gefäßmechanik",    Length: "978",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/GuaBsm/article/go0FYS#Z305e6c13a3a1563b7a63c5c4d07f5bd1",    Error: 0}, {        Day: 28,    Importance: 4,    Subject: "Physik",    Chapter: "Darstellung der Druck-Volumen-Verhältnisse der Lunge",    Length: "272",    Imppact: 2.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/GuaBsm/article/A60RnS#Z3599ce8ea32d0a231dfffd3d0fb5a5db",    Error: 0}, {        Day: 28,    Importance: 5,    Subject: "Physik",    Chapter: "Lungendehnbarkeit (Compliance)",    Length: "633",    Imppact: 2.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/GuaBsm/article/A60RnS#Za841bd8709f5edd971debf666cd7547a",    Error: 0}, {        Day: 28,    Importance: 6,    Subject: "Physik",    Chapter: "Grundlagen Atemwegswiderstand",    Length: "250",    Imppact: 2.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/GuaBsm/article/A60RnS#Z922f658aa3f0fd70f35f8c796fb8ff3e",    Error: 0}, {        Day: 29,    Importance: 1,    Subject: "Physik",    Chapter: "Thermodynamik",    Length: "4570",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/aR0Qlf/tuaXGm/article/G60BmS",    Error: 0}, {        Day: 29,    Importance: 2,    Subject: "Physik",    Chapter: "Gastransport im Blut - Grundlagen",    Length: "524",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/tuaXGm/article/Np0-pS#Zba2ad07a64ef6561f6a55c5e63370746",    Error: 0}, {        Day: 29,    Importance: 3,    Subject: "Physik",    Chapter: "Optik und optische Geräte",    Length: "2586",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/tuaXGm/article/P60WOS",    Error: 0}, {        Day: 29,    Importance: 4,    Subject: "Physik",    Chapter: "Dioptrischer Apparat",    Length: "682",    Imppact: 4.38,    Url: "https://next.amboss.com/de/courses/aR0Qlf/tuaXGm/article/mp0VJS#Z6ace187386644affb4ec9ab082115a0e",    Error: 0}, {        Day: 29,    Importance: 5,    Subject: "Physik",    Chapter: "Akustik",    Length: "2184",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/tuaXGm/article/j60_kS",    Error: 0}, {        Day: 30,    Importance: 1,    Subject: "Physiologie",    Chapter: "Stofftransport",    Length: "3382",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/FuagGm/article/xK0EiS",    Error: 0}, {        Day: 30,    Importance: 2,    Subject: "Physiologie",    Chapter: "Signaltransduktion",    Length: "2527",    Imppact: 3.33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/FuagGm/article/Qp0u6S",    Error: 0}, {        Day: 30,    Importance: 3,    Subject: "Physiologie",    Chapter: "Ruhe- und Aktionspotenzial",    Length: "2711",    Imppact: 2.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/FuagGm/article/jp0_6S",    Error: 0}, {        Day: 30,    Importance: 4,    Subject: "Physiologie",    Chapter: "Kontraktion der Myofilamente",    Length: "494",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/FuagGm/article/pp0LqS#Z3981915ea4c2ad04e384a5d7a88d8774",    Error: 0}, {        Day: 30,    Importance: 5,    Subject: "Physiologie",    Chapter: "Glatte Muskulatur",    Length: "1294",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/FuagGm/article/8K0ORS",    Error: 0}, {        Day: 31,    Importance: 1,    Subject: "Physiologie",    Chapter: "Grundlagen des Kreislaufes",    Length: "5206",    Imppact: 2.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/8uaOGm/article/no07cS",    Error: 0}, {        Day: 31,    Importance: 2,    Subject: "Physiologie",    Chapter: "Herzerregung",    Length: "5051",    Imppact: 2.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/8uaOGm/article/yp0dHS",    Error: 0}, {        Day: 31,    Importance: 3,    Subject: "Physiologie",    Chapter: "Herzmechanik",    Length: "4078",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/8uaOGm/article/xL0E-g",    Error: 0}, {        Day: 31,    Importance: 4,    Subject: "Physiologie",    Chapter: "Aufbau und Funktion der Blutgefäße",    Length: "3914",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/8uaOGm/article/go0FYS",    Error: 0}, {        Day: 31,    Importance: 5,    Subject: "Physiologie",    Chapter: "Kreislaufregulation",    Length: "2637",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/8uaOGm/article/po0L1S",    Error: 0}, {        Day: 32,    Importance: 1,    Subject: "Physiologie",    Chapter: "Atemwege und Lunge",    Length: "5758",    Imppact: 3.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/uuapGm/article/6o0j1S",    Error: 0}, {        Day: 32,    Importance: 2,    Subject: "Physiologie",    Chapter: "Atemmechanik",    Length: "3080",    Imppact: 2.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/uuapGm/article/A60RnS",    Error: 0}, {        Day: 32,    Importance: 3,    Subject: "Physiologie",    Chapter: "Leistungsphysiologie und Altern",    Length: "3403",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/uuapGm/article/h60ckS",    Error: 0}, {        Day: 33,    Importance: 1,    Subject: "Physiologie",    Chapter: "Übersicht Ernährung",    Length: "1755",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/X609jS",    Error: 0}, {        Day: 33,    Importance: 2,    Subject: "Physiologie",    Chapter: "Verdauung und Resorption von Kohlenhydraten",    Length: "651",    Imppact: 4.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/w60hMS#Zc276b8dd3fe35b1b1ac8fd33ca87f4b9",    Error: 0}, {        Day: 33,    Importance: 3,    Subject: "Physiologie",    Chapter: "Aminosäuren und Proteine - Verdauung und Resorption",    Length: "633",    Imppact: 3.83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/Jo0s1S#Z0b4b9de77128fdd87924ab20f2cb41ab",    Error: 0}, {        Day: 33,    Importance: 4,    Subject: "Physiologie",    Chapter: "Lipidverdauung und -resorption",    Length: "392",    Imppact: 3.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/D601MS#Z2cf9dbbf074c93b9bfc57b72b4eca782",    Error: 0}, {        Day: 33,    Importance: 5,    Subject: "Physiologie",    Chapter: "Fettsäuren und Triacylglycerine - Verdauung und Resorption",    Length: "150",    Imppact: 2.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/B60zMS#Zf47efcc8f7969a759b7b57b4d5f6dc1d",    Error: 0}, {        Day: 33,    Importance: 6,    Subject: "Physiologie",    Chapter: "Verdauung Resorption Transport und Ausscheidung von Cholesterin",    Length: "346",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/y60dnS#Z127cb2e2af5726d7989fee90c3019ce9",    Error: 0}, {        Day: 33,    Importance: 7,    Subject: "Physiologie",    Chapter: "Mineralstoffe",    Length: "2310",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/-60DnS",    Error: 0}, {        Day: 33,    Importance: 8,    Subject: "Physiologie",    Chapter: "Energie- und Wärmehaushalt",    Length: "2754",    Imppact: 1.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/wK0hiS",    Error: 0}, {        Day: 33,    Importance: 9,    Subject: "Physiologie",    Chapter: "Übersicht des Verdauungssystems",    Length: "3156",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/qK0ChS",    Error: 0}, {        Day: 33,    Importance: 10,    Subject: "Physiologie",    Chapter: "Salzsäuresekretion",    Length: "212",    Imppact: 1.71,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/XK09US#Z43f006cb72aaf5951d8329fa675cd9b2",    Error: 0}, {        Day: 33,    Importance: 11,    Subject: "Physiologie",    Chapter: "Magen - Funktion",    Length: "981",    Imppact: 1.71,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/XK09US#Z31adbc9348c3258b6689ac7993f8dfb2",    Error: 0}, {        Day: 33,    Importance: 12,    Subject: "Physiologie",    Chapter: "Funktion des Kolons",    Length: "435",    Imppact: .38,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/rK0f3S#Zebce2761d51e17f9a68f90911dd36b5f",    Error: 0}, {        Day: 33,    Importance: 13,    Subject: "Physiologie",    Chapter: "Pankreassekret",    Length: "834",    Imppact: .98,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Eua8Gm/article/2K0TfS#Z37891fdf34ce330356e6ca0b19c3e7cd",    Error: 0}, {        Day: 34,    Importance: 1,    Subject: "Physiologie",    Chapter: "Blut und Blutzellen",    Length: "3266",    Imppact: 1.92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/vuaAGm/article/LK0wSS",    Error: 0}, {        Day: 34,    Importance: 2,    Subject: "Physiologie",    Chapter: "Erythrozyten",    Length: "3056",    Imppact: 2,    Url: "https://next.amboss.com/de/courses/aR0Qlf/vuaAGm/article/960NMS",    Error: 0}, {        Day: 34,    Importance: 3,    Subject: "Physiologie",    Chapter: "Hämoglobin",    Length: "2539",    Imppact: 1.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/vuaAGm/article/C60qMS",    Error: 0}, {        Day: 34,    Importance: 4,    Subject: "Physiologie",    Chapter: "Gastransport im Blut",    Length: "2075",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/vuaAGm/article/Np0-pS",    Error: 0}, {        Day: 34,    Importance: 5,    Subject: "Physiologie",    Chapter: "Blutstillung und Blutgerinnung",    Length: "4115",    Imppact: 2.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/vuaAGm/article/_K05QS",    Error: 0}, {        Day: 35,    Importance: 1,    Subject: "Physiologie",    Chapter: "Einführung in die Immunologie",    Length: "840",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Dua1tm/article/K60UNS",    Error: 0}, {        Day: 35,    Importance: 2,    Subject: "Physiologie",    Chapter: "Unspezifisches Immunsystem",    Length: "5481",    Imppact: 3.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Dua1tm/article/660jNS",    Error: 0}, {        Day: 35,    Importance: 3,    Subject: "Physiologie",    Chapter: "Spezifisches Immunsystem",    Length: "5206",    Imppact: 2.38,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Dua1tm/article/p60LNS",    Error: 0}, {        Day: 35,    Importance: 4,    Subject: "Physiologie",    Chapter: "Gewebshormone",    Length: "3968",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Dua1tm/article/V60GPS",    Error: 0}, {        Day: 35,    Importance: 5,    Subject: "Physiologie",    Chapter: "Lymphatisches System",    Length: "3426",    Imppact: 1.04,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Dua1tm/article/gp0FKS",    Error: 0}, {        Day: 36,    Importance: 1,    Subject: "Physiologie",    Chapter: "Nierendurchblutung und glomeruläre Filtration",    Length: "3369",    Imppact: 1.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/wuahtm/article/bJ0HsS",    Error: 0}, {        Day: 36,    Importance: 2,    Subject: "Physiologie",    Chapter: "Tubuläre Transportprozesse",    Length: "3473",    Imppact: 2.23,    Url: "https://next.amboss.com/de/courses/aR0Qlf/wuahtm/article/_605nS",    Error: 0}, {        Day: 36,    Importance: 3,    Subject: "Physiologie",    Chapter: "Wasser- und Elektrolythaushalt",    Length: "3047",    Imppact: .83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/wuahtm/article/lo0vXS",    Error: 0}, {        Day: 36,    Importance: 4,    Subject: "Physiologie",    Chapter: "Säure-Basen-Haushalt",    Length: "4994",    Imppact: 2.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/wuahtm/article/Io0YWS",    Error: 0}, {        Day: 37,    Importance: 1,    Subject: "Physiologie",    Chapter: "Allgemeine Hormoneigenschaften",    Length: "1103",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/9uaNtm/article/IK0Y3S",    Error: 0}, {        Day: 37,    Importance: 2,    Subject: "Physiologie",    Chapter: "Hypophyse",    Length: "3534",    Imppact: 1.52,    Url: "https://next.amboss.com/de/courses/aR0Qlf/9uaNtm/article/jK0_TS",    Error: 0}, {        Day: 37,    Importance: 3,    Subject: "Physiologie",    Chapter: "Schilddrüse",    Length: "2926",    Imppact: 2.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/9uaNtm/article/bK0HUS",    Error: 0}, {        Day: 37,    Importance: 4,    Subject: "Physiologie",    Chapter: "Nebenschilddrüsen- Funktion: Calcium- und Phosphathaushalt",    Length: "703",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/9uaNtm/article/Op0IpS#Z7f0406d677e59dbc39674e6b00a64597",    Error: 0}, {        Day: 37,    Importance: 5,    Subject: "Physiologie",    Chapter: "Nebenniere",    Length: "4284",    Imppact: 3.17,    Url: "https://next.amboss.com/de/courses/aR0Qlf/9uaNtm/article/S60y4S",    Error: 0}, {        Day: 37,    Importance: 6,    Subject: "Physiologie",    Chapter: "Sexualhormone",    Length: "3536",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/9uaNtm/article/zo0reS",    Error: 0}, {        Day: 37,    Importance: 7,    Subject: "Physiologie",    Chapter: "Pankreashormone",    Length: "1875",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/9uaNtm/article/kp0mpS",    Error: 0}, {        Day: 38,    Importance: 1,    Subject: "Physiologie",    Chapter: "Ovar",    Length: "1835",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/m60VlS",    Error: 0}, {        Day: 38,    Importance: 2,    Subject: "Physiologie",    Chapter: "Tuba uterina - Funktion",    Length: "149",    Imppact: .08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/M60MlS#Z898aa87cd246d26574dfb9b16ae55666",    Error: 0}, {        Day: 38,    Importance: 3,    Subject: "Physiologie",    Chapter: "Spermatogenese",    Length: "682",    Imppact: 1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/ep0xoS#Zc7759023fd476b2c1ae5197a66d40462",    Error: 0}, {        Day: 38,    Importance: 4,    Subject: "Physiologie",    Chapter: "Prostata Bläschendrüse und Cowper-Drüse",    Length: "1348",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/dp0ooS",    Error: 0}, {        Day: 38,    Importance: 5,    Subject: "Physiologie",    Chapter: "Penis Erektion und Ejakulation - sexuelle Erregung und Erektion",    Length: "358",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/Vp0GoS#Zf59ffbaf18ab7f55a693a0ef3922b9cd",    Error: 0}, {        Day: 38,    Importance: 6,    Subject: "Physiologie",    Chapter: "Ejakulation",    Length: "428",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/Vp0GoS#Zeb9a6785b3cb002f32087f5a253c12f8",    Error: 0}, {        Day: 38,    Importance: 7,    Subject: "Physiologie",    Chapter: "Geschlechtsentwicklung - Geschlechtsreifung bei Mann und Frau (Pubertät)",    Length: "654",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/Qo0ubS#Zcaa5b0211aa19b875fb4b606d8fdf536",    Error: 0}, {        Day: 38,    Importance: 8,    Subject: "Physiologie",    Chapter: "Sexualität und Sexualmedizin",    Length: "1074",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/d60oPS",    Error: 0}, {        Day: 38,    Importance: 9,    Subject: "Physiologie",    Chapter: "Von der Befruchtung zur Implantation",    Length: "2367",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/Dp017S",    Error: 0}, {        Day: 38,    Importance: 10,    Subject: "Physiologie",    Chapter: "Embryonalentwicklung",    Length: "3351",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/wp0h7S",    Error: 0}, {        Day: 38,    Importance: 11,    Subject: "Physiologie",    Chapter: "Plazenta Nabelschnur und Amnion",    Length: "2411",    Imppact: .58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/Cp0q7S",    Error: 0}, {        Day: 38,    Importance: 12,    Subject: "Physiologie",    Chapter: "Physiologische Aspekte prä- und postnatal",    Length: "3341",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Cuaqtm/article/9p0N7S",    Error: 0}, {        Day: 39,    Importance: 1,    Subject: "Physiologie",    Chapter: "Nervengewebe Synapsen und Transmitter",    Length: "4145",    Imppact: 1.83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm/article/tK0XRS",    Error: 0}, {        Day: 39,    Importance: 2,    Subject: "Physiologie",    Chapter: "Vegetatives Nervensystem",    Length: "3653",    Imppact: 2.33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm/article/oo001S",    Error: 0}, {        Day: 39,    Importance: 3,    Subject: "Physiologie",    Chapter: "Spinale Leitungsbahnen und Reflexe",    Length: "2971",    Imppact: 1.42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm/article/zp0rHS",    Error: 0}, {        Day: 39,    Importance: 4,    Subject: "Physiologie",    Chapter: "Hirnstamm- Hirnstamm-übegreifend: Formatio reticularis",    Length: "906",    Imppact: .67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm/article/yo0deS#Z1d6b0a58782103ee8dfeea6f04dcf9f3",    Error: 0}, {        Day: 39,    Importance: 5,    Subject: "Physiologie",    Chapter: "Funktion des Kleinhirns",    Length: "219",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm/article/YK0nUS#Z4fbeababed70bfb63ef674a2924e1779",    Error: 0}, {        Day: 39,    Importance: 6,    Subject: "Physiologie",    Chapter: "Zwischenhirn",    Length: "2415",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm/article/zK0rQS",    Error: 0}, {        Day: 39,    Importance: 7,    Subject: "Physiologie",    Chapter: "Großhirn",    Length: "3134",    Imppact: 2.13,    Url: "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm/article/060ejS",    Error: 0}, {        Day: 39,    Importance: 8,    Subject: "Physiologie",    Chapter: "Meningen Liquorräume und Blut-Hirn-Schranke",    Length: "2386",    Imppact: .5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm/article/ZJ0ZsS",    Error: 0}, {        Day: 39,    Importance: 9,    Subject: "Physiologie",    Chapter: "Neurophysiologische Untersuchungen und Schlaf",    Length: "2274",    Imppact: 2.33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm/article/0J0esS",    Error: 0}, {        Day: 39,    Importance: 10,    Subject: "Physiologie",    Chapter: "Limbisches System und Gedächtnis",    Length: "2381",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/xuaEtm/article/U60b4S",    Error: 0}, {        Day: 40,    Importance: 1,    Subject: "Physiologie",    Chapter: "Grundlagen der Sensorik",    Length: "949",    Imppact: .33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/sK0t3S",    Error: 0}, {        Day: 40,    Importance: 2,    Subject: "Physiologie",    Chapter: "Auge und Orbita",    Length: "6167",    Imppact: 2.94,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/Ho0KWS",    Error: 0}, {        Day: 40,    Importance: 3,    Subject: "Physiologie",    Chapter: "Visuelles System",    Length: "4001",    Imppact: 4.38,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/mp0VJS",    Error: 0}, {        Day: 40,    Importance: 4,    Subject: "Physiologie",    Chapter: "Olfaktorisches und gustatorisches System",    Length: "2320",    Imppact: 1.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/xo0EVS",    Error: 0}, {        Day: 40,    Importance: 5,    Subject: "Physiologie",    Chapter: "Ohr",    Length: "3711",    Imppact: 2.04,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/Eo08dS",    Error: 0}, {        Day: 40,    Importance: 6,    Subject: "Physiologie",    Chapter: "Auditives System",    Length: "2932",    Imppact: 1.92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/Up0bKS",    Error: 0}, {        Day: 40,    Importance: 7,    Subject: "Physiologie",    Chapter: "Vestibuläres System",    Length: "3749",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/Go0BWS",    Error: 0}, {        Day: 40,    Importance: 8,    Subject: "Physiologie",    Chapter: "Sprechen - Grundlagen",    Length: "509",    Imppact: .94,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/mK0VSS#Z75aab1f963704ac5f7a38ef908ff855f",    Error: 0}, {        Day: 40,    Importance: 9,    Subject: "Physiologie",    Chapter: "Sprache - Grundlagen",    Length: "498",    Imppact: .94,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/mK0VSS#Z42366531de9a059d0b66d8b7bf3909a3",    Error: 0}, {        Day: 40,    Importance: 10,    Subject: "Physiologie",    Chapter: "Haut und Hautanhangsgebilde",    Length: "3982",    Imppact: 1.58,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/so0tWS",    Error: 0}, {        Day: 40,    Importance: 11,    Subject: "Physiologie",    Chapter: "Taktiles System",    Length: "3060",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/0K0eUS",    Error: 0}, {        Day: 40,    Importance: 12,    Subject: "Physiologie",    Chapter: "Nozizeptives System",    Length: "2923",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/Buaztm/article/Do01VS",    Error: 0}, {        Day: 41,    Importance: 1,    Subject: "Psychologie/ Soziologie",    Chapter: "Medizinische Statistik und Testtheorie",    Length: "5514",    Imppact: 8.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/yuadFm/article/Ip0YIS",    Error: 0}, {        Day: 41,    Importance: 2,    Subject: "Psychologie/ Soziologie",    Chapter: "Grundlagen wissenschaftlicher Studien",    Length: "2388",    Imppact: 3.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/yuadFm/article/rp0fIS",    Error: 0}, {        Day: 42,    Importance: 1,    Subject: "Psychologie/ Soziologie",    Chapter: "Grundlagen der Demografie und Soziologie",    Length: "2001",    Imppact: 4.5,    Url: "https://next.amboss.com/de/courses/aR0Qlf/AuaRFm/article/Gp0BIS",    Error: 0}, {        Day: 42,    Importance: 2,    Subject: "Psychologie/ Soziologie",    Chapter: "Gesundheit und Krankheit",    Length: "1677",    Imppact: 3.98,    Url: "https://next.amboss.com/de/courses/aR0Qlf/AuaRFm/article/_o05eS",    Error: 0}, {        Day: 42,    Importance: 3,    Subject: "Psychologie/ Soziologie",    Chapter: "Patientenversorgung und Gesundheitssystem",    Length: "3465",    Imppact: 2.83,    Url: "https://next.amboss.com/de/courses/aR0Qlf/AuaRFm/article/-K0DQS",    Error: 0}, {        Day: 42,    Importance: 4,    Subject: "Psychologie/ Soziologie",    Chapter: "Prävention und Gesundheitsförderung",    Length: "2974",    Imppact: 6.35,    Url: "https://next.amboss.com/de/courses/aR0Qlf/AuaRFm/article/HK0K3S",    Error: 0}, {        Day: 43,    Importance: 1,    Subject: "Psychologie/ Soziologie",    Chapter: "Arzt-Patient-Beziehung",    Length: "4344",    Imppact: 6.25,    Url: "https://next.amboss.com/de/courses/aR0Qlf/_ua5Fm/article/OK0IgS",    Error: 0}, {        Day: 43,    Importance: 2,    Subject: "Psychologie/ Soziologie",    Chapter: "Untersuchung und Gespräch",    Length: "2046",    Imppact: 2.33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/_ua5Fm/article/3K0STS",    Error: 0}, {        Day: 43,    Importance: 3,    Subject: "Psychologie/ Soziologie",    Chapter: "Ärztliche Urteilsbildung und Entscheidung",    Length: "2343",    Imppact: 1.08,    Url: "https://next.amboss.com/de/courses/aR0Qlf/_ua5Fm/article/iK0JTS",    Error: 0}, {        Day: 44,    Importance: 1,    Subject: "Psychologie/ Soziologie",    Chapter: "Lernen Kognition und Entwicklung",    Length: "4729",    Imppact: 5.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/zuarFm/article/7p04IS",    Error: 0}, {        Day: 44,    Importance: 2,    Subject: "Psychologie/ Soziologie",    Chapter: "Emotion und Motivation",    Length: "1884",    Imppact: 1.75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/zuarFm/article/Hp0KIS",    Error: 0}, {        Day: 44,    Importance: 3,    Subject: "Psychologie/ Soziologie",    Chapter: "Persönlichkeit und Verhaltensstile",    Length: "1222",    Imppact: 1.33,    Url: "https://next.amboss.com/de/courses/aR0Qlf/zuarFm/article/sp0tIS",    Error: 0}, {        Day: 44,    Importance: 4,    Subject: "Psychologie/ Soziologie",    Chapter: "Stressmodelle",    Length: "990",    Imppact: .92,    Url: "https://next.amboss.com/de/courses/aR0Qlf/zuarFm/article/Ep08rS",    Error: 0}, {        Day: 44,    Importance: 5,    Subject: "Psychologie/ Soziologie",    Chapter: "Verhaltens- und psychodynamische Modelle",    Length: "1094",    Imppact: .75,    Url: "https://next.amboss.com/de/courses/aR0Qlf/zuarFm/article/UK0bfS",    Error: 0}, {        Day: 44,    Importance: 6,    Subject: "Psychologie/ Soziologie",    Chapter: "Psychotherapeutische Verfahren (Vorklinik)",    Length: "2314",    Imppact: 2.67,    Url: "https://next.amboss.com/de/courses/aR0Qlf/zuarFm/article/BK0ziS",    Error: 0}, {        Day: 44,    Importance: 7,    Subject: "Psychologie/ Soziologie",    Chapter: "Umgang mit dem Sterben",    Length: "583",    Imppact: .42,    Url: "https://next.amboss.com/de/courses/aR0Qlf/zuarFm/article/W60PPS",    Error: 0}, {        Day: 45,    Importance: 1,    Subject: "Wiederholung: Physikum 2023/H Tag 1",    Chapter: "Tag 45 Lernplan Physikum",    Length: "0",    Imppact: -1,    Url: "https://next.amboss.com/de/courses/aR0Qlf/-uaDFm/article/eI0xbh",    Error: 0
    }],Po = {
        lastUpdated: Eu,    heading: Cu,    numberOfDays: Du,    pageTickValues: ju,    yFragenDomain: Ru,    fragenzahl: ku,    dayUrls: Mu,    data: Yu
    },
    Ku = "30.11.2025",
    







    Au = "100-Tage-Lernplan M2 – H2026",
    Pu = 100,
    vu = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    zu = 100,
    Zu = [46, 46, 61, 83, 50, 50, 68, 90, 64, 63, 89, 85, 70, 88, 46, 46, 90, 62, 102, 88, 78, 61, 77, 45, 68, 76, 87, 75, 50, 53, 42, 52, 63, 75, 109, 66, 82, 90, 56, 101, 92, 67, 77, 60, 44, 57, 72, 49, 54, 60, 67, 74, 72, 70, 68, 67, 72, 77, 52, 49, 74, 74, 91, 94, 102, 95, 84, 96, 115, 92, 93, 91, 96, 38, 35, 40, 36, 35, 101, 76, 72, 69, 53, 108, 90, 103, 103, 105, 105, 104, 103, 105, 105, 105, 103, 104, 103, 105, 106, 105],
    Tu = ["https://next.amboss.com/de/courses/AQ0RAf/IiYYGK", "https://next.amboss.com/de/courses/AQ0RAf/riYfGK", "https://next.amboss.com/de/courses/AQ0RAf/7iY4GK", "https://next.amboss.com/de/courses/AQ0RAf/HiYKGK", "https://next.amboss.com/de/courses/AQ0RAf/siYtGK", "https://next.amboss.com/de/courses/AQ0RAf/GiYBGK", "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK", "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK", "https://next.amboss.com/de/courses/AQ0RAf/8iYOtK", "https://next.amboss.com/de/courses/AQ0RAf/uiYptK", "https://next.amboss.com/de/courses/AQ0RAf/EiY8tK", "https://next.amboss.com/de/courses/AQ0RAf/viYAtK", "https://next.amboss.com/de/courses/AQ0RAf/DiY1FK", "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK", "https://next.amboss.com/de/courses/AQ0RAf/9iYNFK", "https://next.amboss.com/de/courses/AQ0RAf/CiYqFK", "https://next.amboss.com/de/courses/AQ0RAf/xiYEFK", "https://next.amboss.com/de/courses/AQ0RAf/BiYzFK", "https://next.amboss.com/de/courses/AQ0RAf/yiYd8K", "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K", "https://next.amboss.com/de/courses/AQ0RAf/_iY58K", "https://next.amboss.com/de/courses/AQ0RAf/ziYr8K", "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K", "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK", "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK", "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK", "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK", "https://next.amboss.com/de/courses/AQ0RAf/bQYHuK", "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK", "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK", "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK", "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK", "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK", "https://next.amboss.com/de/courses/AQ0RAf/VQYGEK", "https://next.amboss.com/de/courses/AQ0RAf/eQYxEK", "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK", "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK", "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK", "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK", "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK", "https://next.amboss.com/de/courses/AQ0RAf/SQYyvK", "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK", "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK", "https://next.amboss.com/de/courses/AQ0RAf/RQYlDK", "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK", "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK", "https://next.amboss.com/de/courses/AQ0RAf/jQY_DK", "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK", "https://next.amboss.com/de/courses/AQ0RAf/4QY3wK", "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK", "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK", "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK", "https://next.amboss.com/de/courses/AQ0RAf/NQY-wK", "https://next.amboss.com/de/courses/AQ0RAf/mQYV9K", "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K", "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K", "https://next.amboss.com/de/courses/AQ0RAf/nQY79K", "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K", "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK", "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK", "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK", "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK", "https://next.amboss.com/de/courses/AQ0RAf/JQYsCK", "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK", "https://next.amboss.com/de/courses/AQ0RAf/IQYYxK", "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK", "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK", "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK", "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK", "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK", "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK", "https://next.amboss.com/de/courses/AQ0RAf/FQYgBK", "https://next.amboss.com/de/courses/AQ0RAf/8QYOBK", "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK", "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK", "https://next.amboss.com/de/courses/AQ0RAf/vQYABK", "https://next.amboss.com/de/courses/AQ0RAf/DQY1yK", "https://next.amboss.com/de/courses/AQ0RAf/wQYhyK", "https://next.amboss.com/de/courses/AQ0RAf/9QYNyK", "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK", "https://next.amboss.com/de/courses/AQ0RAf/xQYEyK", "https://next.amboss.com/de/courses/AQ0RAf/BQYzyK", "https://next.amboss.com/de/courses/AQ0RAf/yQYdAK", "https://next.amboss.com/de/courses/AQ0RAf/AQYRAK", "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK", "https://next.amboss.com/de/courses/AQ0RAf/zQYrAK", "https://next.amboss.com/de/courses/AQ0RAf/-QYDAK", "https://next.amboss.com/de/courses/AQ0RAf/ZjYZ_K", "https://next.amboss.com/de/courses/AQ0RAf/0jYe_K", "https://next.amboss.com/de/courses/AQ0RAf/ajYQ_K", "https://next.amboss.com/de/courses/AQ0RAf/YjYn_K", "https://next.amboss.com/de/courses/AQ0RAf/bjYH_K", "https://next.amboss.com/de/courses/AQ0RAf/XjY9_K", "https://next.amboss.com/de/courses/AQ0RAf/cjYazK", "https://next.amboss.com/de/courses/AQ0RAf/1jY2zK", "https://next.amboss.com/de/courses/AQ0RAf/WjYPzK", "https://next.amboss.com/de/courses/AQ0RAf/djYozK", "https://next.amboss.com/de/courses/AQ0RAf/VjYGzK", "https://next.amboss.com/de/courses/AQ0RAf/ejYxzK", "https://next.amboss.com/de/courses/AQ0RAf/UjYb-K"],
    wu = [
{Day: 1, Importance: 1, Subject: "Innere Medizin", Chapter: "Handbuch - Vorbereitung auf das Zweite Staatsexamen", Length: "2626", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/Wn0PHg", Error: 0},
{Day: 1, Importance: 2, Subject: "Innere Medizin", Chapter: "Kreuztipps zum Zweiten Staatsexamen", Length: "3512", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/UL0bCg", Error: 0},
{Day: 1, Importance: 3, Subject: "Innere Medizin", Chapter: "Untersuchungsmethoden in der Kardiologie", Length: "1326", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/rM0fJg", Error: 0},
{Day: 1, Importance: 4, Subject: "Innere Medizin", Chapter: "EKG", Length: "2796", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/pl0LBT", Error: 0},
{Day: 1, Importance: 5, Subject: "Innere Medizin", Chapter: "Herzrhythmusstörungen", Length: "1388", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/7S04af", Error: 0},
{Day: 1, Importance: 6, Subject: "Innere Medizin", Chapter: "Supraventrikuläre Extrasystolen", Length: "186", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/sS0taf", Error: 0},
{Day: 1, Importance: 7, Subject: "Innere Medizin", Chapter: "Vorhofflimmern", Length: "2230", Imppact: 2.9285714285714284, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/GS0Baf", Error: 0},
{Day: 1, Importance: 8, Subject: "Innere Medizin", Chapter: "Sick-Sinus-Syndrom", Length: "257", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/HS0Kaf", Error: 0},
{Day: 1, Importance: 9, Subject: "Innere Medizin", Chapter: "AV-Block", Length: "791", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/I50Ylg", Error: 0},
{Day: 1, Importance: 10, Subject: "Innere Medizin", Chapter: "AV-Knoten-Reentrytachykardie", Length: "428", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/tS0XYf", Error: 0},
{Day: 1, Importance: 11, Subject: "Innere Medizin", Chapter: "Atrioventrikuläre Reentrytachykardie", Length: "328", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/IiYYGK/article/FS0gYf", Error: 0},
{Day: 2, Importance: 1, Subject: "Innere Medizin", Chapter: "Ventrikuläre Extrasystolen", Length: "369", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/riYfGK/article/8S0OYf", Error: 0},
{Day: 2, Importance: 2, Subject: "Innere Medizin", Chapter: "Ventrikuläre Tachykardie", Length: "604", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/riYfGK/article/ES08Yf", Error: 0},
{Day: 2, Importance: 3, Subject: "Innere Medizin", Chapter: "Kammerflattern und -flimmern", Length: "288", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/riYfGK/article/vS0AYf", Error: 0},
{Day: 2, Importance: 4, Subject: "Innere Medizin", Chapter: "Herzschrittmacher", Length: "1375", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/riYfGK/article/ql0CBT", Error: 0},
{Day: 2, Importance: 5, Subject: "Innere Medizin", Chapter: "Synkope", Length: "1392", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/riYfGK/article/b50Hig", Error: 0},
{Day: 2, Importance: 6, Subject: "Innere Medizin", Chapter: "Subclavian-Steal-Syndrom", Length: "355", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/riYfGK/article/bM0HMg", Error: 0},
{Day: 3, Importance: 1, Subject: "Innere Medizin", Chapter: "Dyslipidämien", Length: "894", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/7iY4GK/article/on008g", Error: 0},
{Day: 3, Importance: 2, Subject: "Innere Medizin", Chapter: "Atherosklerose und kardiovaskuläre Prävention", Length: "1275", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/7iY4GK/article/s70tMh", Error: 0},
{Day: 3, Importance: 3, Subject: "Innere Medizin", Chapter: "Koronare Herzkrankheit", Length: "1999", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/7iY4GK/article/DS01bf", Error: 0},
{Day: 3, Importance: 4, Subject: "Innere Medizin", Chapter: "Thoraxschmerz", Length: "559", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/7iY4GK/article/ML0Myg", Error: 0},
{Day: 3, Importance: 5, Subject: "Innere Medizin", Chapter: "Akutes Koronarsyndrom", Length: "919", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/7iY4GK/article/p70L5h", Error: 0},
{Day: 3, Importance: 6, Subject: "Innere Medizin", Chapter: "Myokardinfarkt", Length: "3415", Imppact: 2.9285714285714284, Url: "https://next.amboss.com/de/courses/AQ0RAf/7iY4GK/article/wS0hbf", Error: 0},
{Day: 3, Importance: 7, Subject: "Innere Medizin", Chapter: "Herzkatheteruntersuchung", Length: "1473", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/7iY4GK/article/rl0fyT", Error: 0},
{Day: 4, Importance: 1, Subject: "Innere Medizin", Chapter: "Herzinsuffizienz", Length: "3075", Imppact: 2.0714285714285716, Url: "https://next.amboss.com/de/courses/AQ0RAf/HiYKGK/article/rS0faf", Error: 0},
{Day: 4, Importance: 2, Subject: "Innere Medizin", Chapter: "Kardiomyopathien", Length: "857", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/HiYKGK/article/yS0dXf", Error: 0},
{Day: 4, Importance: 3, Subject: "Innere Medizin", Chapter: "Dilatative Kardiomyopathie", Length: "621", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/HiYKGK/article/AS0RXf", Error: 0},
{Day: 4, Importance: 4, Subject: "Innere Medizin", Chapter: "Hypertrophe Kardiomyopathie", Length: "751", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/HiYKGK/article/_S05Xf", Error: 0},
{Day: 4, Importance: 5, Subject: "Innere Medizin", Chapter: "Herzklappenerkrankungen", Length: "947", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/HiYKGK/article/-S0DXf", Error: 0},
{Day: 4, Importance: 6, Subject: "Innere Medizin", Chapter: "Aortenklappenstenose", Length: "1341", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/HiYKGK/article/Zh0Zcf", Error: 0},
{Day: 4, Importance: 7, Subject: "Innere Medizin", Chapter: "Aortenklappeninsuffizienz", Length: "545", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/HiYKGK/article/0h0ecf", Error: 0},
{Day: 4, Importance: 8, Subject: "Innere Medizin", Chapter: "Mitralklappenstenose", Length: "655", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/HiYKGK/article/Yh0ncf", Error: 0},
{Day: 4, Importance: 9, Subject: "Innere Medizin", Chapter: "Mitralklappeninsuffizienz", Length: "817", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/HiYKGK/article/PI0W1h", Error: 0},
{Day: 5, Importance: 1, Subject: "Innere Medizin", Chapter: "Infektiöse Endokarditis", Length: "1141", Imppact: 1.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/siYtGK/article/CS0qbf", Error: 0},
{Day: 5, Importance: 2, Subject: "Innere Medizin", Chapter: "Rheumatisches Fieber", Length: "868", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/siYtGK/article/9S0Nbf", Error: 0},
{Day: 5, Importance: 3, Subject: "Innere Medizin", Chapter: "Myokarditis", Length: "1500", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/siYtGK/article/xS0Ebf", Error: 0},
{Day: 5, Importance: 4, Subject: "Innere Medizin", Chapter: "Perikarditis", Length: "1968", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/siYtGK/article/Gu0Bs3", Error: 0},
{Day: 5, Importance: 5, Subject: "Innere Medizin", Chapter: "Coxsackievirus-Infektionen", Length: "627", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/siYtGK/article/E408OT", Error: 0},
{Day: 5, Importance: 6, Subject: "Innere Medizin", Chapter: "Perikarderguss und Perikardtamponade", Length: "824", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/siYtGK/article/uh0pff", Error: 0},
{Day: 6, Importance: 1, Subject: "Innere Medizin", Chapter: "Arterielle Hypertonie", Length: "3342", Imppact: 2.5714285714285716, Url: "https://next.amboss.com/de/courses/AQ0RAf/GiYBGK/article/Xh09cf", Error: 0},
{Day: 6, Importance: 2, Subject: "Innere Medizin", Chapter: "Pulmonale Hypertonie", Length: "1303", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/GiYBGK/article/w50hmg", Error: 0},
{Day: 6, Importance: 3, Subject: "Innere Medizin", Chapter: "Varikosis und chronisch-venöse Insuffizienz", Length: "1035", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/GiYBGK/article/gh0FWf", Error: 0},
{Day: 6, Importance: 4, Subject: "Innere Medizin", Chapter: "Phlebothrombose", Length: "2141", Imppact: 2.2857142857142856, Url: "https://next.amboss.com/de/courses/AQ0RAf/GiYBGK/article/fh0kWf", Error: 0},
{Day: 6, Importance: 5, Subject: "Innere Medizin", Chapter: "Lungenembolie", Length: "2100", Imppact: 2.357142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/GiYBGK/article/oh00Uf", Error: 0},
{Day: 7, Importance: 1, Subject: "Innere Medizin", Chapter: "Periphere arterielle Verschlusskrankheit", Length: "1874", Imppact: 2.7857142857142856, Url: "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK/article/ch0a1f", Error: 0},
{Day: 7, Importance: 2, Subject: "Innere Medizin", Chapter: "Erythrozytenmorphologie und Hämoglobinvarianten", Length: "611", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK/article/WS0PA2", Error: 0},
{Day: 7, Importance: 3, Subject: "Innere Medizin", Chapter: "Anämie", Length: "1318", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK/article/6T0j72", Error: 0},
{Day: 7, Importance: 4, Subject: "Innere Medizin", Chapter: "Eisenmangel", Length: "1409", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK/article/pT0L72", Error: 0},
{Day: 7, Importance: 5, Subject: "Innere Medizin", Chapter: "Hämolytische Anämie", Length: "1013", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK/article/rT0fH2", Error: 0},
{Day: 7, Importance: 6, Subject: "Innere Medizin", Chapter: "Kugelzellanämie", Length: "427", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK/article/7T04H2", Error: 0},
{Day: 7, Importance: 7, Subject: "Innere Medizin", Chapter: "Glucose-6-phosphat-Dehydrogenase-Mangel", Length: "524", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK/article/HT0KH2", Error: 0},
{Day: 7, Importance: 8, Subject: "Innere Medizin", Chapter: "Sichelzellkrankheit", Length: "659", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK/article/GT0BH2", Error: 0},
{Day: 7, Importance: 9, Subject: "Innere Medizin", Chapter: "Thalassämie", Length: "945", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK/article/tT0Xs2", Error: 0},
{Day: 7, Importance: 10, Subject: "Innere Medizin", Chapter: "Myelodysplastische Syndrome", Length: "674", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/tiYXtK/article/3T0Sq2", Error: 0},
{Day: 8, Importance: 1, Subject: "Innere Medizin", Chapter: "Akute Leukämien", Length: "1756", Imppact: 1.2857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK/article/iT0Jq2", Error: 0},
{Day: 8, Importance: 2, Subject: "Innere Medizin", Chapter: "Myeloproliferative Neoplasien", Length: "827", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK/article/lT0vI2", Error: 0},
{Day: 8, Importance: 3, Subject: "Innere Medizin", Chapter: "Chronische myeloische Leukämie", Length: "1093", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK/article/PT0WI2", Error: 0},
{Day: 8, Importance: 4, Subject: "Innere Medizin", Chapter: "Polycythaemia vera", Length: "692", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK/article/kT0mI2", Error: 0},
{Day: 8, Importance: 5, Subject: "Innere Medizin", Chapter: "Hodgkin-Lymphom", Length: "1472", Imppact: 1.2142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK/article/mT0Vr2", Error: 0},
{Day: 8, Importance: 6, Subject: "Innere Medizin", Chapter: "Non-Hodgkin-Lymphome", Length: "1558", Imppact: 1.2142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK/article/NT0-I2", Error: 0},
{Day: 8, Importance: 7, Subject: "Innere Medizin", Chapter: "Multiples Myelom", Length: "1442", Imppact: 1.4285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK/article/5T0ir2", Error: 0},
{Day: 8, Importance: 8, Subject: "Innere Medizin", Chapter: "Chronische lymphatische Leukämie", Length: "1179", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK/article/jT0_q2", Error: 0},
{Day: 8, Importance: 9, Subject: "Innere Medizin", Chapter: "MALT-Lymphom", Length: "382", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK/article/LT0wr2", Error: 0},
{Day: 8, Importance: 10, Subject: "Innere Medizin", Chapter: "Kutane Lymphome", Length: "657", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/FiYgtK/article/oT0072", Error: 0},
{Day: 9, Importance: 1, Subject: "Innere Medizin", Chapter: "Blutgerinnung und hämorrhagische Diathesen", Length: "2260", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/8iYOtK/article/8T0Os2", Error: 0},
{Day: 9, Importance: 2, Subject: "Innere Medizin", Chapter: "Von-Willebrand-Syndrom", Length: "531", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/8iYOtK/article/V90GmR", Error: 0},
{Day: 9, Importance: 3, Subject: "Innere Medizin", Chapter: "Hämophilie", Length: "489", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/8iYOtK/article/uT0ps2", Error: 0},
{Day: 9, Importance: 4, Subject: "Innere Medizin", Chapter: "Antiphospholipid-Syndrom", Length: "572", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/8iYOtK/article/hR0c5f", Error: 0},
{Day: 9, Importance: 5, Subject: "Innere Medizin", Chapter: "Thrombozytopenien", Length: "822", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/8iYOtK/article/wT0hG2", Error: 0},
{Day: 9, Importance: 6, Subject: "Innere Medizin", Chapter: "Thrombotische Mikroangiopathie", Length: "783", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/8iYOtK/article/xT0EG2", Error: 0},
{Day: 9, Importance: 7, Subject: "Innere Medizin", Chapter: "Splenomegalie", Length: "360", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/8iYOtK/article/KT0U72", Error: 0},
{Day: 9, Importance: 8, Subject: "Innere Medizin", Chapter: "Asplenie und Hyposplenismus", Length: "541", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/8iYOtK/article/v40AOT", Error: 0},
{Day: 10, Importance: 1, Subject: "Innere Medizin", Chapter: "Klinische Untersuchung der Lunge", Length: "716", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/tl0XAT", Error: 0},
{Day: 10, Importance: 2, Subject: "Innere Medizin", Chapter: "Lungenfunktionsuntersuchung", Length: "1130", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/Fl0gAT", Error: 0},
{Day: 10, Importance: 3, Subject: "Innere Medizin", Chapter: "Akute Bronchitis", Length: "524", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/hh0cdf", Error: 0},
{Day: 10, Importance: 4, Subject: "Innere Medizin", Chapter: "Pneumonie", Length: "1907", Imppact: 2.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/mh0Vef", Error: 0},
{Day: 10, Importance: 5, Subject: "Innere Medizin", Chapter: "Ambulant erworbene Pneumonie", Length: "1576", Imppact: 2.5714285714285716, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/wYahrQ", Error: 0},
{Day: 10, Importance: 6, Subject: "Innere Medizin", Chapter: "Nosokomiale Pneumonie", Length: "620", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/KZaUcQ", Error: 0},
{Day: 10, Importance: 7, Subject: "Innere Medizin", Chapter: "Akute unkomplizierte Atemwegsinfektionen", Length: "385", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/Ax0R_R", Error: 0},
{Day: 10, Importance: 8, Subject: "Innere Medizin", Chapter: "Legionellose", Length: "592", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/Vf0GO2", Error: 0},
{Day: 10, Importance: 9, Subject: "Innere Medizin", Chapter: "Pneumocystis-jirovecii-Pneumonie", Length: "541", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/If0Yn2", Error: 0},
{Day: 10, Importance: 10, Subject: "Innere Medizin", Chapter: "Tuberkulose", Length: "3426", Imppact: 2.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/5h0ief", Error: 0},
{Day: 10, Importance: 11, Subject: "Innere Medizin", Chapter: "Sarkoidose", Length: "1429", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/uiYptK/article/Mh0Mef", Error: 0},
{Day: 11, Importance: 1, Subject: "Innere Medizin", Chapter: "Lungenkarzinom", Length: "2774", Imppact: 4.214285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/EiY8tK/article/nh07ef", Error: 0},
{Day: 11, Importance: 2, Subject: "Innere Medizin", Chapter: "Pleuraerguss", Length: "1482", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/EiY8tK/article/F50gNg", Error: 0},
{Day: 11, Importance: 3, Subject: "Innere Medizin", Chapter: "Atelektase", Length: "412", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/EiY8tK/article/sM0tJg", Error: 0},
{Day: 11, Importance: 4, Subject: "Innere Medizin", Chapter: "Asthma bronchiale", Length: "2209", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/EiY8tK/article/Ph0WVf", Error: 0},
{Day: 11, Importance: 5, Subject: "Innere Medizin", Chapter: "Chronisch-obstruktive Lungenerkrankung", Length: "3046", Imppact: 1.7857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/EiY8tK/article/3h0Sdf", Error: 0},
{Day: 11, Importance: 6, Subject: "Innere Medizin", Chapter: "Interstitielle Lungenparenchymerkrankungen", Length: "614", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/EiY8tK/article/Nh0-Vf", Error: 0},
{Day: 11, Importance: 7, Subject: "Innere Medizin", Chapter: "Exogen-allergische Alveolitis", Length: "565", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/EiY8tK/article/kh0mVf", Error: 0},
{Day: 11, Importance: 8, Subject: "Innere Medizin", Chapter: "Schlafbezogene Atmungsstörungen", Length: "853", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/EiY8tK/article/Lh0wef", Error: 0},
{Day: 11, Importance: 9, Subject: "Innere Medizin", Chapter: "Husten", Length: "1569", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/EiY8tK/article/3L0Sxg", Error: 0},
{Day: 12, Importance: 1, Subject: "Innere Medizin", Chapter: "Achalasie", Length: "388", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/viYAtK/article/ug0pC2", Error: 0},
{Day: 12, Importance: 2, Subject: "Innere Medizin", Chapter: "Gastrointestinale Blutung", Length: "989", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/viYAtK/article/ZS0Zy2", Error: 0},
{Day: 12, Importance: 3, Subject: "Innere Medizin", Chapter: "Mallory-Weiss-Syndrom", Length: "240", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/viYAtK/article/9g0Nx2", Error: 0},
{Day: 12, Importance: 4, Subject: "Innere Medizin", Chapter: "Gastroösophageale Refluxkrankheit", Length: "1082", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/viYAtK/article/vg0AC2", Error: 0},
{Day: 12, Importance: 5, Subject: "Innere Medizin", Chapter: "Gastroduodenale Ulkuskrankheit", Length: "1525", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/viYAtK/article/zg0rB2", Error: 0},
{Day: 12, Importance: 6, Subject: "Innere Medizin", Chapter: "Chronische Gastritis", Length: "1295", Imppact: 1.2142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/viYAtK/article/Ag0RB2", Error: 0},
{Day: 12, Importance: 7, Subject: "Innere Medizin", Chapter: "Malassimilation", Length: "689", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/viYAtK/article/0S0ey2", Error: 0},
{Day: 12, Importance: 8, Subject: "Innere Medizin", Chapter: "Zöliakie", Length: "1943", Imppact: 1.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/viYAtK/article/YS0ny2", Error: 0},
{Day: 12, Importance: 9, Subject: "Innere Medizin", Chapter: "Lactoseintoleranz", Length: "523", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/viYAtK/article/bS0Hy2", Error: 0},
{Day: 13, Importance: 1, Subject: "Innere Medizin", Chapter: "Morbus Crohn", Length: "2630", Imppact: 2.4285714285714284, Url: "https://next.amboss.com/de/courses/AQ0RAf/DiY1FK/article/VS0GA2", Error: 0},
{Day: 13, Importance: 2, Subject: "Innere Medizin", Chapter: "Colitis ulcerosa", Length: "1693", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/DiY1FK/article/eS0xA2", Error: 0},
{Day: 13, Importance: 3, Subject: "Innere Medizin", Chapter: "Divertikulose, Divertikelkrankheit und Divertikulitis", Length: "1914", Imppact: 2.857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/DiY1FK/article/1S02A2", Error: 0},
{Day: 13, Importance: 4, Subject: "Innere Medizin", Chapter: "Reizdarmsyndrom", Length: "464", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/DiY1FK/article/XS09y2", Error: 0},
{Day: 13, Importance: 5, Subject: "Innere Medizin", Chapter: "Gutartige Leberraumforderungen", Length: "580", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/DiY1FK/article/pS0L0f", Error: 0},
{Day: 13, Importance: 6, Subject: "Innere Medizin", Chapter: "Leberabszess", Length: "240", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/DiY1FK/article/Lo0wcS", Error: 0},
{Day: 14, Importance: 1, Subject: "Innere Medizin", Chapter: "Hepatitis A", Length: "641", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/kS0m-2", Error: 0},
{Day: 14, Importance: 2, Subject: "Innere Medizin", Chapter: "Hepatitis B und HBV-Infektion", Length: "2431", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/OS0I-2", Error: 0},
{Day: 14, Importance: 3, Subject: "Innere Medizin", Chapter: "Hepatitis C und HCV-Infektion", Length: "1578", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/lS0v-2", Error: 0},
{Day: 14, Importance: 4, Subject: "Innere Medizin", Chapter: "Alkoholtoxischer Leberschaden", Length: "1522", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/5S0iZf", Error: 0},
{Day: 14, Importance: 5, Subject: "Innere Medizin", Chapter: "Autoimmunhepatitis", Length: "569", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/JM0spg", Error: 0},
{Day: 14, Importance: 6, Subject: "Innere Medizin", Chapter: "Primär biliäre Cholangitis", Length: "577", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/MS0MZf", Error: 0},
{Day: 14, Importance: 7, Subject: "Innere Medizin", Chapter: "Primär sklerosierende Cholangitis", Length: "809", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/nS07Zf", Error: 0},
{Day: 14, Importance: 8, Subject: "Innere Medizin", Chapter: "Morbus Wilson", Length: "581", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/IS0Yaf", Error: 0},
{Day: 14, Importance: 9, Subject: "Innere Medizin", Chapter: "Hämochromatose", Length: "953", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/qS0C0f", Error: 0},
{Day: 14, Importance: 10, Subject: "Innere Medizin", Chapter: "Leberzirrhose", Length: "2096", Imppact: 1.2142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/PS0W-2", Error: 0},
{Day: 14, Importance: 11, Subject: "Innere Medizin", Chapter: "Portale Hypertension", Length: "1158", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/wiYhFK/article/LS0wZf", Error: 0},
{Day: 15, Importance: 1, Subject: "Innere Medizin", Chapter: "Ikterus und Cholestase", Length: "1154", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/9iYNFK/article/jS0_z2", Error: 0},
{Day: 15, Importance: 2, Subject: "Innere Medizin", Chapter: "Akute Pankreatitis", Length: "2151", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/9iYNFK/article/SS0y_2", Error: 0},
{Day: 15, Importance: 3, Subject: "Innere Medizin", Chapter: "Chronische Pankreatitis", Length: "1467", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/9iYNFK/article/hS0cz2", Error: 0},
{Day: 15, Importance: 4, Subject: "Innere Medizin", Chapter: "Pankreaskarzinom", Length: "1239", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/9iYNFK/article/3S0Sz2", Error: 0},
{Day: 15, Importance: 5, Subject: "Innere Medizin", Chapter: "Aszites", Length: "1129", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/9iYNFK/article/KS0U0f", Error: 0},
{Day: 16, Importance: 1, Subject: "Innere Medizin", Chapter: "Hypophysenvorderlappeninsuffizienz", Length: "863", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/CiYqFK/article/-T0Dt2", Error: 0},
{Day: 16, Importance: 2, Subject: "Innere Medizin", Chapter: "Prolaktinom", Length: "881", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/CiYqFK/article/0g0eF2", Error: 0},
{Day: 16, Importance: 3, Subject: "Innere Medizin", Chapter: "Akromegalie", Length: "538", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/CiYqFK/article/ag0QF2", Error: 0},
{Day: 16, Importance: 4, Subject: "Innere Medizin", Chapter: "Nebennierenrindeninsuffizienz", Length: "1031", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/CiYqFK/article/Ug0bu2", Error: 0},
{Day: 16, Importance: 5, Subject: "Innere Medizin", Chapter: "Primärer Hyperaldosteronismus", Length: "626", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/CiYqFK/article/2g0Tu2", Error: 0},
{Day: 16, Importance: 6, Subject: "Innere Medizin", Chapter: "Cushing-Syndrom", Length: "1022", Imppact: 1.2857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/CiYqFK/article/fg0ku2", Error: 0},
{Day: 16, Importance: 7, Subject: "Innere Medizin", Chapter: "Phäochromozytom", Length: "688", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/CiYqFK/article/Tg06u2", Error: 0},
{Day: 16, Importance: 8, Subject: "Innere Medizin", Chapter: "Multiple endokrine Neoplasie", Length: "302", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/CiYqFK/article/hg0cE2", Error: 0},
{Day: 17, Importance: 1, Subject: "Innere Medizin", Chapter: "Struma", Length: "637", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/xiYEFK/article/Yg0nF2", Error: 0},
{Day: 17, Importance: 2, Subject: "Innere Medizin", Chapter: "Anti-Schilddrüsen-Antikörper", Length: "281", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/xiYEFK/article/YM0nMg", Error: 0},
{Day: 17, Importance: 3, Subject: "Innere Medizin", Chapter: "Hyperthyreose", Length: "1785", Imppact: 2.2857142857142856, Url: "https://next.amboss.com/de/courses/AQ0RAf/xiYEFK/article/bg0HF2", Error: 0},
{Day: 17, Importance: 4, Subject: "Innere Medizin", Chapter: "Hypothyreose", Length: "1408", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/xiYEFK/article/cg0a82", Error: 0},
{Day: 17, Importance: 5, Subject: "Innere Medizin", Chapter: "Hashimoto-Thyreoiditis", Length: "800", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/xiYEFK/article/1g0282", Error: 0},
{Day: 17, Importance: 6, Subject: "Innere Medizin", Chapter: "Thyreoiditis de Quervain", Length: "359", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/xiYEFK/article/dg0o82", Error: 0},
{Day: 17, Importance: 7, Subject: "Innere Medizin", Chapter: "Hyperparathyreoidismus", Length: "1013", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/xiYEFK/article/gg0Fu2", Error: 0},
{Day: 18, Importance: 1, Subject: "Innere Medizin", Chapter: "Metabolisches Syndrom", Length: "807", Imppact: 1.3571428571428572, Url: "https://next.amboss.com/de/courses/AQ0RAf/BiYzFK/article/4g03v2", Error: 0},
{Day: 18, Importance: 2, Subject: "Innere Medizin", Chapter: "Diabetes mellitus", Length: "4881", Imppact: 3.642857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/BiYzFK/article/3g0SE2", Error: 0},
{Day: 18, Importance: 3, Subject: "Innere Medizin", Chapter: "Hyperglykämisches Koma", Length: "1233", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/BiYzFK/article/jg0_E2", Error: 0},
{Day: 18, Importance: 4, Subject: "Innere Medizin", Chapter: "Hypoglykämie", Length: "787", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/BiYzFK/article/Pg0Wv2", Error: 0},
{Day: 19, Importance: 1, Subject: "Innere Medizin", Chapter: "Diagnostik von Erkrankungen der Niere und der ableitenden Harnwege", Length: "773", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/yiYd8K/article/kg0mv2", Error: 0},
{Day: 19, Importance: 2, Subject: "Innere Medizin", Chapter: "Dehydratation", Length: "484", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/yiYd8K/article/Ig0Y92", Error: 0},
{Day: 19, Importance: 3, Subject: "Innere Medizin", Chapter: "Ödeme", Length: "390", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/yiYd8K/article/SM0yLg", Error: 0},
{Day: 19, Importance: 4, Subject: "Innere Medizin", Chapter: "Elektrolytstörungen Natrium", Length: "1264", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/yiYd8K/article/rg0f92", Error: 0},
{Day: 19, Importance: 5, Subject: "Innere Medizin", Chapter: "Elektrolytstörungen Kalium", Length: "1133", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/yiYd8K/article/7g0492", Error: 0},
{Day: 19, Importance: 6, Subject: "Innere Medizin", Chapter: "Elektrolytstörungen Calcium", Length: "1958", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/yiYd8K/article/Hg0K92", Error: 0},
{Day: 19, Importance: 7, Subject: "Innere Medizin", Chapter: "Akute Nierenfunktionseinschränkung", Length: "1512", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/yiYd8K/article/Og0Iv2", Error: 0},
{Day: 19, Importance: 8, Subject: "Innere Medizin", Chapter: "Chronische Nierenkrankheit", Length: "1637", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/yiYd8K/article/lg0vv2", Error: 0},
{Day: 19, Importance: 9, Subject: "Innere Medizin", Chapter: "Transplantation", Length: "2359", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/yiYd8K/article/gn0Fsg", Error: 0},
{Day: 20, Importance: 1, Subject: "Innere Medizin", Chapter: "Vasopressin-assoziierte Erkrankungen (Diabetes insipidus)", Length: "757", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K/article/_T05t2", Error: 0},
{Day: 20, Importance: 2, Subject: "Innere Medizin", Chapter: "Syndrom der inadäquaten ADH-Sekretion", Length: "496", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K/article/zT0rt2", Error: 0},
{Day: 20, Importance: 3, Subject: "Innere Medizin", Chapter: "Grundlagen nephrologischer Krankheitsbilder", Length: "937", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K/article/mg0VD2", Error: 0},
{Day: 20, Importance: 4, Subject: "Innere Medizin", Chapter: "Infektassoziierte Glomerulonephritiden", Length: "783", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K/article/Lg0wD2", Error: 0},
{Day: 20, Importance: 5, Subject: "Innere Medizin", Chapter: "Rapid-progressive Glomerulonephritis", Length: "942", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K/article/og00w2", Error: 0},
{Day: 20, Importance: 6, Subject: "Innere Medizin", Chapter: "Nephrotisches Syndrom", Length: "1298", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K/article/Mg0MD2", Error: 0},
{Day: 20, Importance: 7, Subject: "Innere Medizin", Chapter: "IgA-Nephropathie", Length: "358", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K/article/GE0BC3", Error: 0},
{Day: 20, Importance: 8, Subject: "Innere Medizin", Chapter: "Renale tubuläre Partialfunktionsstörungen", Length: "579", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K/article/2l0TwT", Error: 0},
{Day: 20, Importance: 9, Subject: "Innere Medizin", Chapter: "Proteinurie", Length: "1100", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K/article/0Q0euf", Error: 0},
{Day: 20, Importance: 10, Subject: "Innere Medizin", Chapter: "Nierenersatzverfahren", Length: "849", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/AiYR8K/article/S50yjg", Error: 0},
{Day: 21, Importance: 1, Subject: "Innere Medizin", Chapter: "Immunsystem", Length: "2062", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/_iY58K/article/x50Emg", Error: 0},
{Day: 21, Importance: 2, Subject: "Innere Medizin", Chapter: "Fieber und Entzündungsreaktionen", Length: "1429", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/_iY58K/article/j50_Pg", Error: 0},
{Day: 21, Importance: 3, Subject: "Innere Medizin", Chapter: "Allergische Erkrankungen", Length: "2620", Imppact: 1.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/_iY58K/article/ek0x5T", Error: 0},
{Day: 21, Importance: 4, Subject: "Innere Medizin", Chapter: "Kontaktekzem", Length: "610", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/_iY58K/article/q90CoR", Error: 0},
{Day: 21, Importance: 5, Subject: "Innere Medizin", Chapter: "Anaphylaxie", Length: "971", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/_iY58K/article/nt07V3", Error: 0},
{Day: 21, Importance: 6, Subject: "Innere Medizin", Chapter: "Raynaud-Syndrom", Length: "594", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/_iY58K/article/Uh0bWf", Error: 0},
{Day: 21, Importance: 7, Subject: "Innere Medizin", Chapter: "Fibromyalgiesyndrom", Length: "520", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/_iY58K/article/2T0TJ2", Error: 0},
{Day: 22, Importance: 1, Subject: "Innere Medizin", Chapter: "Rheumatoide Arthritis", Length: "1905", Imppact: 2.2857142857142856, Url: "https://next.amboss.com/de/courses/AQ0RAf/ziYr8K/article/-f0DK2", Error: 0},
{Day: 22, Importance: 2, Subject: "Innere Medizin", Chapter: "Axiale Spondylarthritis", Length: "1184", Imppact: 1.7142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/ziYr8K/article/ZT0Z62", Error: 0},
{Day: 22, Importance: 3, Subject: "Innere Medizin", Chapter: "Reaktive Arthritis", Length: "548", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/ziYr8K/article/0T0e62", Error: 0},
{Day: 22, Importance: 4, Subject: "Innere Medizin", Chapter: "Psoriasis-Arthritis", Length: "482", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/ziYr8K/article/1Xa2CQ", Error: 0},
{Day: 22, Importance: 5, Subject: "Innere Medizin", Chapter: "Hyperurikämie und Gicht", Length: "1506", Imppact: 2.2857142857142856, Url: "https://next.amboss.com/de/courses/AQ0RAf/ziYr8K/article/YT0n62", Error: 0},
{Day: 23, Importance: 1, Subject: "Innere Medizin", Chapter: "Kollagenosen", Length: "329", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/WT0Pp2", Error: 0},
{Day: 23, Importance: 2, Subject: "Innere Medizin", Chapter: "Lupus erythematodes", Length: "2017", Imppact: 1.7142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/dT0op2", Error: 0},
{Day: 23, Importance: 3, Subject: "Innere Medizin", Chapter: "Polymyositis und Dermatomyositis", Length: "651", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/VT0Gp2", Error: 0},
{Day: 23, Importance: 4, Subject: "Innere Medizin", Chapter: "Systemische Sklerose", Length: "1483", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/eT0xp2", Error: 0},
{Day: 23, Importance: 5, Subject: "Innere Medizin", Chapter: "Vaskulitiden", Length: "845", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/fT0kJ2", Error: 0},
{Day: 23, Importance: 6, Subject: "Innere Medizin", Chapter: "Riesenzellarteriitis", Length: "1225", Imppact: 2.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/1T02p2", Error: 0},
{Day: 23, Importance: 7, Subject: "Innere Medizin", Chapter: "Polymyalgia rheumatica", Length: "706", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/I90YKR", Error: 0},
{Day: 23, Importance: 8, Subject: "Innere Medizin", Chapter: "Granulomatose mit Polyangiitis", Length: "1002", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/TT06J2", Error: 0},
{Day: 23, Importance: 9, Subject: "Innere Medizin", Chapter: "Kawasaki-Syndrom", Length: "841", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/hT0cq2", Error: 0},
{Day: 23, Importance: 10, Subject: "Innere Medizin", Chapter: "Thrombangiitis obliterans", Length: "328", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/2h0TWf", Error: 0},
{Day: 23, Importance: 11, Subject: "Innere Medizin", Chapter: "Rheumatologische Antikörperdiagnostik", Length: "400", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/-iYD8K/article/ul0pAT", Error: 0},
{Day: 24, Importance: 1, Subject: "Infektiologie und Hygiene", Chapter: "Mikrobiologische Untersuchungen", Length: "615", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/n507kg", Error: 0},
{Day: 24, Importance: 2, Subject: "Infektiologie und Hygiene", Chapter: "Blutkulturen", Length: "752", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/7l04yT", Error: 0},
{Day: 24, Importance: 3, Subject: "Infektiologie und Hygiene", Chapter: "Sepsis", Length: "2723", Imppact: 2.857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/xm0E3g", Error: 0},
{Day: 24, Importance: 4, Subject: "Infektiologie und Hygiene", Chapter: "Durchfall", Length: "665", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/6M0jpg", Error: 0},
{Day: 24, Importance: 5, Subject: "Infektiologie und Hygiene", Chapter: "Lebensmittelvergiftung", Length: "1090", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/Pf0Wm2", Error: 0},
{Day: 24, Importance: 6, Subject: "Infektiologie und Hygiene", Chapter: "Norovirus-Infektion", Length: "845", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/Gf0Bn2", Error: 0},
{Day: 24, Importance: 7, Subject: "Infektiologie und Hygiene", Chapter: "Rotavirus-Infektion", Length: "552", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/SJ0ytS", Error: 0},
{Day: 24, Importance: 8, Subject: "Infektiologie und Hygiene", Chapter: "Bakterielle Durchfallerkrankungen", Length: "1094", Imppact: 1.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/oM00pg", Error: 0},
{Day: 24, Importance: 9, Subject: "Infektiologie und Hygiene", Chapter: "Darmpathogene E.-coli-Infektion", Length: "991", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/yf0dK2", Error: 0},
{Day: 24, Importance: 10, Subject: "Infektiologie und Hygiene", Chapter: "Clostridioides-difficile-Infektion", Length: "806", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/dS0oA2", Error: 0},
{Day: 24, Importance: 11, Subject: "Infektiologie und Hygiene", Chapter: "Amöbiasis", Length: "922", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/6f0jM2", Error: 0},
{Day: 24, Importance: 12, Subject: "Infektiologie und Hygiene", Chapter: "Giardiasis", Length: "551", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZQYZuK/article/fJ0ktS", Error: 0},
{Day: 25, Importance: 1, Subject: "Infektiologie und Hygiene", Chapter: "Erkrankungen durch Staphylokokken", Length: "946", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/Vl0GDT", Error: 0},
{Day: 25, Importance: 2, Subject: "Infektiologie und Hygiene", Chapter: "Erkrankungen durch Streptokokken", Length: "447", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/dl0oDT", Error: 0},
{Day: 25, Importance: 3, Subject: "Infektiologie und Hygiene", Chapter: "Toxische Schocksyndrome", Length: "437", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/yJ0d9S", Error: 0},
{Day: 25, Importance: 4, Subject: "Infektiologie und Hygiene", Chapter: "Chlamydien-Infektionen", Length: "930", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/ff0kl2", Error: 0},
{Day: 25, Importance: 5, Subject: "Infektiologie und Hygiene", Chapter: "Lyme-Borreliose", Length: "1558", Imppact: 3.142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/4f03m2", Error: 0},
{Day: 25, Importance: 6, Subject: "Infektiologie und Hygiene", Chapter: "Brucellose", Length: "366", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/lf0vm2", Error: 0},
{Day: 25, Importance: 7, Subject: "Infektiologie und Hygiene", Chapter: "Typhus, Paratyphus", Length: "959", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/Qf0uN2", Error: 0},
{Day: 25, Importance: 8, Subject: "Infektiologie und Hygiene", Chapter: "Milzbrand", Length: "407", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/Of0Im2", Error: 0},
{Day: 25, Importance: 9, Subject: "Infektiologie und Hygiene", Chapter: "Leptospirose", Length: "453", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/kf0mm2", Error: 0},
{Day: 25, Importance: 10, Subject: "Infektiologie und Hygiene", Chapter: "Diphtherie", Length: "566", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/df0oO2", Error: 0},
{Day: 25, Importance: 11, Subject: "Infektiologie und Hygiene", Chapter: "Listeriose", Length: "408", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/Nf0-m2", Error: 0},
{Day: 25, Importance: 12, Subject: "Infektiologie und Hygiene", Chapter: "Katzenkratzkrankheit", Length: "303", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/0QYeuK/article/d80ol3", Error: 0},
{Day: 26, Importance: 1, Subject: "Infektiologie und Hygiene", Chapter: "COVID-19", Length: "3263", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/gG0FAh", Error: 0},
{Day: 26, Importance: 2, Subject: "Infektiologie und Hygiene", Chapter: "Influenza", Length: "1541", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/Bm0z3g", Error: 0},
{Day: 26, Importance: 3, Subject: "Infektiologie und Hygiene", Chapter: "Herpesvirus-Infektionen", Length: "1359", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/Mf0M52", Error: 0},
{Day: 26, Importance: 4, Subject: "Infektiologie und Hygiene", Chapter: "Zytomegalievirus-Infektionen", Length: "534", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/nf0752", Error: 0},
{Day: 26, Importance: 5, Subject: "Infektiologie und Hygiene", Chapter: "Infektiöse Mononukleose", Length: "896", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/Lf0w52", Error: 0},
{Day: 26, Importance: 6, Subject: "Infektiologie und Hygiene", Chapter: "HIV-Infektion", Length: "3407", Imppact: 1.8571428571428572, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/mf0V52", Error: 0},
{Day: 26, Importance: 7, Subject: "Infektiologie und Hygiene", Chapter: "Virales hämorrhagisches Fieber", Length: "1293", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/aL0Qwg", Error: 0},
{Day: 26, Importance: 8, Subject: "Infektiologie und Hygiene", Chapter: "Gelbfieber", Length: "558", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/U50bjg", Error: 0},
{Day: 26, Importance: 9, Subject: "Infektiologie und Hygiene", Chapter: "Denguefieber", Length: "949", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/350SPg", Error: 0},
{Day: 26, Importance: 10, Subject: "Infektiologie und Hygiene", Chapter: "Zika-Virus-Infektion", Length: "549", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/RJ0lFS", Error: 0},
{Day: 26, Importance: 11, Subject: "Infektiologie und Hygiene", Chapter: "Mpox", Length: "622", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/wA0hNi", Error: 0},
{Day: 26, Importance: 12, Subject: "Infektiologie und Hygiene", Chapter: "Tollwut", Length: "923", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/aQYQuK/article/Gh0B2f", Error: 0},
{Day: 27, Importance: 1, Subject: "Infektiologie und Hygiene", Chapter: "Aspergillose", Length: "918", Imppact: 1.2142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/7f04n2", Error: 0},
{Day: 27, Importance: 2, Subject: "Infektiologie und Hygiene", Chapter: "Malaria", Length: "1761", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/Kf0UM2", Error: 0},
{Day: 27, Importance: 3, Subject: "Infektiologie und Hygiene", Chapter: "Toxoplasmose", Length: "617", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/pf0LM2", Error: 0},
{Day: 27, Importance: 4, Subject: "Infektiologie und Hygiene", Chapter: "Leishmaniose", Length: "646", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/qf0CM2", Error: 0},
{Day: 27, Importance: 5, Subject: "Infektiologie und Hygiene", Chapter: "Chagas-Krankheit", Length: "637", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/cK0a2S", Error: 0},
{Day: 27, Importance: 6, Subject: "Infektiologie und Hygiene", Chapter: "Schlafkrankheit", Length: "403", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/T506jg", Error: 0},
{Day: 27, Importance: 7, Subject: "Infektiologie und Hygiene", Chapter: "Wurmerkrankungen", Length: "1296", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/Ff0gL2", Error: 0},
{Day: 27, Importance: 8, Subject: "Infektiologie und Hygiene", Chapter: "Echinokokkose", Length: "575", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/9f0No2", Error: 0},
{Day: 27, Importance: 9, Subject: "Infektiologie und Hygiene", Chapter: "Schistosomiasis", Length: "820", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/xf0Eo2", Error: 0},
{Day: 27, Importance: 10, Subject: "Infektiologie und Hygiene", Chapter: "Lepra", Length: "619", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/Xk09mT", Error: 0},
{Day: 27, Importance: 11, Subject: "Infektiologie und Hygiene", Chapter: "Seltene Zoonosen", Length: "381", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/YQYnuK/article/250Tjg", Error: 0},
{Day: 28, Importance: 1, Subject: "Infektiologie und Hygiene", Chapter: "Antisepsis", Length: "1091", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/bQYHuK/article/WQ0PEf", Error: 0},
{Day: 28, Importance: 2, Subject: "Infektiologie und Hygiene", Chapter: "Nosokomiale Infektionen", Length: "2637", Imppact: 2.142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/bQYHuK/article/_f05K2", Error: 0},
{Day: 28, Importance: 3, Subject: "Infektiologie und Hygiene", Chapter: "Lymphknotenschwellung", Length: "1917", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/bQYHuK/article/iL0Jxg", Error: 0},
{Day: 28, Importance: 4, Subject: "Infektiologie und Hygiene", Chapter: "Impfungen allgemein", Length: "1901", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/bQYHuK/article/_m05Rg", Error: 0},
{Day: 28, Importance: 5, Subject: "Infektiologie und Hygiene", Chapter: "Impfempfehlungen der STIKO", Length: "1638", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/bQYHuK/article/zm0rRg", Error: 0},
{Day: 28, Importance: 6, Subject: "Infektiologie und Hygiene", Chapter: "Infektionsschutzgesetz", Length: "1550", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/bQYHuK/article/aQ0Quf", Error: 0},
{Day: 28, Importance: 7, Subject: "Infektiologie und Hygiene", Chapter: "Wasserhygiene", Length: "502", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/bQYHuK/article/bQ0Huf", Error: 0},
{Day: 29, Importance: 1, Subject: "Pädiatrie", Chapter: "Das neugeborene Kind", Length: "827", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/a40Q3T", Error: 0},
{Day: 29, Importance: 2, Subject: "Pädiatrie", Chapter: "Geburtstraumen", Length: "1123", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/S40yiT", Error: 0},
{Day: 29, Importance: 3, Subject: "Pädiatrie", Chapter: "Perinatale Asphyxie und hypoxisch-ischämische Enzephalopathie", Length: "824", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/h40cQT", Error: 0},
{Day: 29, Importance: 4, Subject: "Pädiatrie", Chapter: "Zerebralparese", Length: "393", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/tM0Xqg", Error: 0},
{Day: 29, Importance: 5, Subject: "Pädiatrie", Chapter: "Neugeboreneninfektion", Length: "844", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/gM0FLg", Error: 0},
{Day: 29, Importance: 6, Subject: "Pädiatrie", Chapter: "Omphalitis", Length: "296", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/Jv0saR", Error: 0},
{Day: 29, Importance: 7, Subject: "Pädiatrie", Chapter: "Atemnotsyndrom des Neugeborenen", Length: "1251", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/340SQT", Error: 0},
{Day: 29, Importance: 8, Subject: "Pädiatrie", Chapter: "Embryofetopathien durch Noxen", Length: "476", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/V40GRT", Error: 0},
{Day: 29, Importance: 9, Subject: "Pädiatrie", Chapter: "Embryofetopathien durch Infektionserreger", Length: "1293", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/d40oRT", Error: 0},
{Day: 29, Importance: 10, Subject: "Pädiatrie", Chapter: "Plötzlicher Säuglingstod", Length: "535", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/T406iT", Error: 0},
{Day: 29, Importance: 11, Subject: "Pädiatrie", Chapter: "Kinderschutzmedizin", Length: "1757", Imppact: 1.2857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/XQY9uK/article/mP0V2T", Error: 0},
{Day: 30, Importance: 1, Subject: "Pädiatrie", Chapter: "Icterus neonatorum", Length: "956", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/R40lQT", Error: 0},
{Day: 30, Importance: 2, Subject: "Pädiatrie", Chapter: "Morbus haemolyticus neonatorum", Length: "685", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/i40JQT", Error: 0},
{Day: 30, Importance: 3, Subject: "Pädiatrie", Chapter: "Morbus haemorrhagicus neonatorum", Length: "318", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/Q40uQT", Error: 0},
{Day: 30, Importance: 4, Subject: "Pädiatrie", Chapter: "Hyperbilirubinämie-Syndrome", Length: "569", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/iM0Jog", Error: 0},
{Day: 30, Importance: 5, Subject: "Pädiatrie", Chapter: "Nahrungsmittelallergie", Length: "1311", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/QM0uog", Error: 0},
{Day: 30, Importance: 6, Subject: "Pädiatrie", Chapter: "Entwicklung des Kindes", Length: "1030", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/b40H3T", Error: 0},
{Day: 30, Importance: 7, Subject: "Pädiatrie", Chapter: "Kindervorsorgeuntersuchungen", Length: "863", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/xH0Esh", Error: 0},
{Day: 30, Importance: 8, Subject: "Pädiatrie", Chapter: "Enuresis und funktionelle Harninkontinenz im Kindes- und Jugendalter", Length: "497", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/HP0KTT", Error: 0},
{Day: 30, Importance: 9, Subject: "Pädiatrie", Chapter: "Kleinwuchs", Length: "725", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/c40aRT", Error: 0},
{Day: 30, Importance: 10, Subject: "Pädiatrie", Chapter: "Großwuchs", Length: "550", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/1402RT", Error: 0},
{Day: 30, Importance: 11, Subject: "Pädiatrie", Chapter: "Pubertät", Length: "714", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/cQYaEK/article/PM0WKg", Error: 0},
{Day: 31, Importance: 1, Subject: "Pädiatrie", Chapter: "Neuroblastom", Length: "511", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/940NlT", Error: 0},
{Day: 31, Importance: 2, Subject: "Pädiatrie", Chapter: "Nephroblastom", Length: "541", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/zi0r8f", Error: 0},
{Day: 31, Importance: 3, Subject: "Pädiatrie", Chapter: "Retinoblastom", Length: "477", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/C40qlT", Error: 0},
{Day: 31, Importance: 4, Subject: "Pädiatrie", Chapter: "Lippen-Kiefer-Gaumen-Spalte", Length: "459", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/FM0gqg", Error: 0},
{Day: 31, Importance: 5, Subject: "Pädiatrie", Chapter: "Zystische Fibrose", Length: "1900", Imppact: 2.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/L40wPT", Error: 0},
{Day: 31, Importance: 6, Subject: "Pädiatrie", Chapter: "Adrenogenitales Syndrom", Length: "1808", Imppact: 1.3571428571428572, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/W40PRT", Error: 0},
{Day: 31, Importance: 7, Subject: "Pädiatrie", Chapter: "Seltene hereditäre Syndrome", Length: "1023", Imppact: 1.2142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/240TiT", Error: 0},
{Day: 31, Importance: 8, Subject: "Pädiatrie", Chapter: "Hereditäre Stoffwechselerkrankungen", Length: "1060", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/_Xa50j", Error: 0},
{Day: 31, Importance: 9, Subject: "Pädiatrie", Chapter: "Hereditäre Störungen des Aminosäurestoffwechsels", Length: "1380", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/X1a92j", Error: 0},
{Day: 31, Importance: 10, Subject: "Pädiatrie", Chapter: "Hereditäre Störungen des Kohlenhydratstoffwechsels", Length: "800", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/c1aafj", Error: 0},
{Day: 31, Importance: 11, Subject: "Pädiatrie", Chapter: "Hereditäre Störungen des Fettsäurestoffwechsels", Length: "373", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/11a2fj", Error: 0},
{Day: 31, Importance: 12, Subject: "Pädiatrie", Chapter: "Hereditäre Störungen im Abbau komplexer Moleküle", Length: "847", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/1QY2EK/article/W1aPfj", Error: 0},
{Day: 32, Importance: 1, Subject: "Pädiatrie", Chapter: "Atopische Dermatitis", Length: "1440", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/A40RNT", Error: 0},
{Day: 32, Importance: 2, Subject: "Pädiatrie", Chapter: "Windeldermatitis", Length: "483", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/1J02GS", Error: 0},
{Day: 32, Importance: 3, Subject: "Pädiatrie", Chapter: "Masern", Length: "1797", Imppact: 1.7857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/r40fkT", Error: 0},
{Day: 32, Importance: 4, Subject: "Pädiatrie", Chapter: "Scharlach", Length: "925", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/F40gOT", Error: 0},
{Day: 32, Importance: 5, Subject: "Pädiatrie", Chapter: "Röteln", Length: "690", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/7404kT", Error: 0},
{Day: 32, Importance: 6, Subject: "Pädiatrie", Chapter: "Ringelröteln", Length: "606", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/G40BkT", Error: 0},
{Day: 32, Importance: 7, Subject: "Pädiatrie", Chapter: "Exanthema subitum", Length: "503", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/s40tkT", Error: 0},
{Day: 32, Importance: 8, Subject: "Pädiatrie", Chapter: "Windpocken", Length: "1507", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/I40YkT", Error: 0},
{Day: 32, Importance: 9, Subject: "Pädiatrie", Chapter: "IgA-Vaskulitis", Length: "592", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/BT0zG2", Error: 0},
{Day: 32, Importance: 10, Subject: "Pädiatrie", Chapter: "Mumps", Length: "667", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/H40KkT", Error: 0},
{Day: 32, Importance: 11, Subject: "Pädiatrie", Chapter: "Pertussis", Length: "818", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/840OOT", Error: 0},
{Day: 32, Importance: 12, Subject: "Pädiatrie", Chapter: "Poliomyelitis", Length: "983", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/t40XOT", Error: 0},
{Day: 32, Importance: 13, Subject: "Pädiatrie", Chapter: "Fieberkrampf", Length: "677", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/WQYPEK/article/D401lT", Error: 0},
{Day: 33, Importance: 1, Subject: "Pädiatrie", Chapter: "Akute Bronchiolitis im Säuglingsalter", Length: "597", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/EF08P3", Error: 0},
{Day: 33, Importance: 2, Subject: "Pädiatrie", Chapter: "Pseudokrupp", Length: "771", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/n407PT", Error: 0},
{Day: 33, Importance: 3, Subject: "Pädiatrie", Chapter: "Epiglottitis", Length: "677", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/f50kjg", Error: 0},
{Day: 33, Importance: 4, Subject: "Pädiatrie", Chapter: "Fremdkörperaspiration", Length: "912", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/K50UOg", Error: 0},
{Day: 33, Importance: 5, Subject: "Pädiatrie", Chapter: "Azyanotische angeborene Herzfehler", Length: "1749", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/4403jT", Error: 0},
{Day: 33, Importance: 6, Subject: "Pädiatrie", Chapter: "Ventrikelseptumdefekt", Length: "599", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/ew0x3R", Error: 0},
{Day: 33, Importance: 7, Subject: "Pädiatrie", Chapter: "Atriumseptumdefekt", Length: "606", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/1w023R", Error: 0},
{Day: 33, Importance: 8, Subject: "Pädiatrie", Chapter: "Zyanotische angeborene Herzfehler", Length: "1348", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/mw0VjR", Error: 0},
{Day: 33, Importance: 9, Subject: "Pädiatrie", Chapter: "Fallot-Tetralogie", Length: "746", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/rw0f4R", Error: 0},
{Day: 33, Importance: 10, Subject: "Pädiatrie", Chapter: "Choanalatresie", Length: "314", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/M40MPT", Error: 0},
{Day: 33, Importance: 11, Subject: "Pädiatrie", Chapter: "Ösophagusatresie", Length: "548", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/K40U4T", Error: 0},
{Day: 33, Importance: 12, Subject: "Pädiatrie", Chapter: "Hypertrophe Pylorusstenose", Length: "232", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/J40s4T", Error: 0},
{Day: 33, Importance: 13, Subject: "Pädiatrie", Chapter: "Duodenalatresie", Length: "353", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/640j4T", Error: 0},
{Day: 33, Importance: 14, Subject: "Pädiatrie", Chapter: "Morbus Hirschsprung", Length: "656", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/q40C4T", Error: 0},
{Day: 33, Importance: 15, Subject: "Pädiatrie", Chapter: "Viszerale Fehlbildungen", Length: "687", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/p40L4T", Error: 0},
{Day: 33, Importance: 16, Subject: "Pädiatrie", Chapter: "Nekrotisierende Enterokolitis", Length: "769", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/o4004T", Error: 0},
{Day: 33, Importance: 17, Subject: "Pädiatrie", Chapter: "Darminvagination", Length: "736", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/dQYoEK/article/Ah0Rgf", Error: 0},
{Day: 34, Importance: 1, Subject: "Pädiatrie", Chapter: "Hüftreifungsstörung (Developmental Dysplasia of the Hip)", Length: "833", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/VQYGEK/article/NQ0-wf", Error: 0},
{Day: 34, Importance: 2, Subject: "Pädiatrie", Chapter: "Morbus Perthes", Length: "1451", Imppact: 1.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/VQYGEK/article/mQ0V9f", Error: 0},
{Day: 34, Importance: 3, Subject: "Pädiatrie", Chapter: "Epiphyseolysis capitis femoris", Length: "781", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/VQYGEK/article/MQ0M9f", Error: 0},
{Day: 34, Importance: 4, Subject: "Pädiatrie", Chapter: "Juvenile idiopathische Arthritis", Length: "1174", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/VQYGEK/article/w40hlT", Error: 0},
{Day: 34, Importance: 5, Subject: "Pädiatrie", Chapter: "Morbus Scheuermann", Length: "257", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/VQYGEK/article/jQ0_Df", Error: 0},
{Day: 34, Importance: 6, Subject: "Pädiatrie", Chapter: "Kraniosynostosen", Length: "280", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/VQYGEK/article/g40FiT", Error: 0},
{Day: 34, Importance: 7, Subject: "Pädiatrie", Chapter: "Hydrozephalus", Length: "325", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/VQYGEK/article/EM08qg", Error: 0},
{Day: 34, Importance: 8, Subject: "Pädiatrie", Chapter: "Fehlbildungen des kraniozervikalen Übergangs", Length: "416", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/VQYGEK/article/Am0RRg", Error: 0},
{Day: 34, Importance: 9, Subject: "Pädiatrie", Chapter: "Neuralrohrdefekte", Length: "736", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/VQYGEK/article/el0xDT", Error: 0},
{Day: 35, Importance: 1, Subject: "Humangenetik", Chapter: "Humangenetik (Klinik)", Length: "2354", Imppact: 3.2857142857142856, Url: "https://next.amboss.com/de/courses/AQ0RAf/eQYxEK/article/y50d5g", Error: 0},
{Day: 35, Importance: 2, Subject: "Humangenetik", Chapter: "Chromosomenaberrationen", Length: "1088", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/eQYxEK/article/e40xRT", Error: 0},
{Day: 35, Importance: 3, Subject: "Humangenetik", Chapter: "Trisomie 21", Length: "1194", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/eQYxEK/article/U40biT", Error: 0},
{Day: 35, Importance: 4, Subject: "Humangenetik", Chapter: "Ehlers-Danlos-Syndrom und Marfan-Syndrom", Length: "686", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/eQYxEK/article/hk0cnT", Error: 0},
{Day: 36, Importance: 1, Subject: "Dermatologie", Chapter: "Grundlagen der Dermatologie", Length: "1488", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/_405NT", Error: 0},
{Day: 36, Importance: 2, Subject: "Dermatologie", Chapter: "Herpes zoster", Length: "1232", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/HR0Kof", Error: 0},
{Day: 36, Importance: 3, Subject: "Dermatologie", Chapter: "Molluscum contagiosum", Length: "290", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/-40DNT", Error: 0},
{Day: 36, Importance: 4, Subject: "Dermatologie", Chapter: "Impetigo contagiosa", Length: "385", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/ak0QmT", Error: 0},
{Day: 36, Importance: 5, Subject: "Dermatologie", Chapter: "Staphylococcal scalded Skin Syndrome", Length: "451", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/Yk0nmT", Error: 0},
{Day: 36, Importance: 6, Subject: "Dermatologie", Chapter: "Intertriginöse Dermatosen", Length: "658", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/0k0emT", Error: 0},
{Day: 36, Importance: 7, Subject: "Dermatologie", Chapter: "Allgemeine Mykologie", Length: "853", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/KM0Upg", Error: 0},
{Day: 36, Importance: 8, Subject: "Dermatologie", Chapter: "Dermatophytosen", Length: "777", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/Hf0Kn2", Error: 0},
{Day: 36, Importance: 9, Subject: "Dermatologie", Chapter: "Onychomykose", Length: "508", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/-J0D9S", Error: 0},
{Day: 36, Importance: 10, Subject: "Dermatologie", Chapter: "Kandidosen", Length: "807", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/rf0fn2", Error: 0},
{Day: 36, Importance: 11, Subject: "Dermatologie", Chapter: "Pityriasis versicolor", Length: "238", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/Zk0ZmT", Error: 0},
{Day: 36, Importance: 12, Subject: "Dermatologie", Chapter: "Skabies", Length: "726", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/ck0a5T", Error: 0},
{Day: 36, Importance: 13, Subject: "Dermatologie", Chapter: "Lauserkrankungen", Length: "646", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/1k025T", Error: 0},
{Day: 36, Importance: 14, Subject: "Dermatologie", Chapter: "Fotodermatosen", Length: "591", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/dk0o5T", Error: 0},
{Day: 36, Importance: 15, Subject: "Dermatologie", Chapter: "Porphyrien", Length: "912", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/mk0VoT", Error: 0},
{Day: 36, Importance: 16, Subject: "Dermatologie", Chapter: "Angioödem", Length: "1083", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/2k0TMT", Error: 0},
{Day: 36, Importance: 17, Subject: "Dermatologie", Chapter: "Urtikaria", Length: "693", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/UQYbvK/article/dD0oWR", Error: 0},
{Day: 37, Importance: 1, Subject: "Dermatologie", Chapter: "Erythema nodosum", Length: "501", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/Fk0gpT", Error: 0},
{Day: 37, Importance: 2, Subject: "Dermatologie", Chapter: "Erythema exsudativum multiforme", Length: "450", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/Tk06MT", Error: 0},
{Day: 37, Importance: 3, Subject: "Dermatologie", Chapter: "Epidermale Nekrolyse", Length: "638", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/Ko0U1S", Error: 0},
{Day: 37, Importance: 4, Subject: "Dermatologie", Chapter: "Blasenbildende Autoimmundermatosen", Length: "1876", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/jk0_nT", Error: 0},
{Day: 37, Importance: 5, Subject: "Dermatologie", Chapter: "Psoriasis vulgaris", Length: "1658", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/4k03LT", Error: 0},
{Day: 37, Importance: 6, Subject: "Dermatologie", Chapter: "Lichen ruber planus", Length: "618", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/5k0ioT", Error: 0},
{Day: 37, Importance: 7, Subject: "Dermatologie", Chapter: "Ichthyosen", Length: "173", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/Qk0unT", Error: 0},
{Day: 37, Importance: 8, Subject: "Dermatologie", Chapter: "Pityriasis rosea", Length: "305", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/Pk0WLT", Error: 0},
{Day: 37, Importance: 9, Subject: "Dermatologie", Chapter: "Seborrhoisches Ekzem", Length: "434", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/Vk0G5T", Error: 0},
{Day: 37, Importance: 10, Subject: "Dermatologie", Chapter: "Acne vulgaris", Length: "1033", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/nk07oT", Error: 0},
{Day: 37, Importance: 11, Subject: "Dermatologie", Chapter: "Rosazea", Length: "538", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/Lk0woT", Error: 0},
{Day: 37, Importance: 12, Subject: "Dermatologie", Chapter: "Granulomatöse Hauterkrankungen", Length: "284", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/2QYTvK/article/Kk0UKT", Error: 0},
{Day: 38, Importance: 1, Subject: "Dermatologie", Chapter: "Benigne Hauttumoren", Length: "1399", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/6k0jKT", Error: 0},
{Day: 38, Importance: 2, Subject: "Dermatologie", Chapter: "Aktinische Keratose", Length: "451", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/pk0LKT", Error: 0},
{Day: 38, Importance: 3, Subject: "Dermatologie", Chapter: "Malignes Melanom", Length: "1888", Imppact: 1.7142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/qk0CKT", Error: 0},
{Day: 38, Importance: 4, Subject: "Dermatologie", Chapter: "Plattenepithelkarzinom der Haut", Length: "1222", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/Ik0Y6T", Error: 0},
{Day: 38, Importance: 5, Subject: "Dermatologie", Chapter: "Basalzellkarzinom", Length: "742", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/rk0f6T", Error: 0},
{Day: 38, Importance: 6, Subject: "Dermatologie", Chapter: "Parapsoriasis en plaques", Length: "306", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/kk0mLT", Error: 0},
{Day: 38, Importance: 7, Subject: "Dermatologie", Chapter: "Vitiligo", Length: "258", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/7k046T", Error: 0},
{Day: 38, Importance: 8, Subject: "Dermatologie", Chapter: "Alopezien", Length: "771", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/tk0XpT", Error: 0},
{Day: 38, Importance: 9, Subject: "Dermatologie", Chapter: "Sexuell übertragbare Infektionen", Length: "479", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/IM0YJg", Error: 0},
{Day: 38, Importance: 10, Subject: "Dermatologie", Chapter: "Gonorrhö", Length: "491", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/Hk0K6T", Error: 0},
{Day: 38, Importance: 11, Subject: "Dermatologie", Chapter: "Syphilis", Length: "1604", Imppact: 1.2142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/sk0t6T", Error: 0},
{Day: 38, Importance: 12, Subject: "Dermatologie", Chapter: "Ulcus molle", Length: "309", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/650jOg", Error: 0},
{Day: 38, Importance: 13, Subject: "Dermatologie", Chapter: "Sammelsurium der Dermatologie", Length: "499", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/eM0xng", Error: 0},
{Day: 38, Importance: 14, Subject: "Dermatologie", Chapter: "Periorale Dermatitis", Length: "417", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/fQYkvK/article/rF0fj3", Error: 0},
{Day: 39, Importance: 1, Subject: "Anästhesie", Chapter: "Lokalanästhetika", Length: "670", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK/article/wN0hWg", Error: 0},
{Day: 39, Importance: 2, Subject: "Anästhesie", Chapter: "Regionalanästhesie", Length: "1734", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK/article/Sl0ywT", Error: 0},
{Day: 39, Importance: 3, Subject: "Anästhesie", Chapter: "Allgemeinanästhesie", Length: "2206", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK/article/hl0c9T", Error: 0},
{Day: 39, Importance: 4, Subject: "Anästhesie", Chapter: "Maschinelle Beatmung", Length: "1291", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK/article/970NLh", Error: 0},
{Day: 39, Importance: 5, Subject: "Anästhesie", Chapter: "Rapid Sequence Induction", Length: "1234", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK/article/gl0FwT", Error: 0},
{Day: 39, Importance: 6, Subject: "Anästhesie", Chapter: "Inhalationsanästhetika", Length: "729", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK/article/EN081g", Error: 0},
{Day: 39, Importance: 7, Subject: "Anästhesie", Chapter: "Injektionsanästhetika", Length: "565", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK/article/vN0A1g", Error: 0},
{Day: 39, Importance: 8, Subject: "Anästhesie", Chapter: "Muskelrelaxanzien", Length: "1020", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK/article/DN01Wg", Error: 0},
{Day: 39, Importance: 9, Subject: "Anästhesie", Chapter: "Benzodiazepine", Length: "644", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK/article/CN0qWg", Error: 0},
{Day: 39, Importance: 10, Subject: "Anästhesie", Chapter: "Maligne Hyperthermie", Length: "701", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/TQY6vK/article/sg0t92", Error: 0},
{Day: 40, Importance: 1, Subject: "Intensiv- und Notfallmedizin", Chapter: "Grundlagen der Schmerztherapie", Length: "1661", Imppact: 1.2142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/xN0EWg", Error: 0},
{Day: 40, Importance: 2, Subject: "Intensiv- und Notfallmedizin", Chapter: "Nicht-Opioid-Analgetika", Length: "1037", Imppact: 1.3571428571428572, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/BN0zWg", Error: 0},
{Day: 40, Importance: 3, Subject: "Intensiv- und Notfallmedizin", Chapter: "Opioide", Length: "1022", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/yN0ddg", Error: 0},
{Day: 40, Importance: 4, Subject: "Intensiv- und Notfallmedizin", Chapter: "Pulsoxymetrie und Blutgasanalyse", Length: "1459", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/8l0OAT", Error: 0},
{Day: 40, Importance: 5, Subject: "Intensiv- und Notfallmedizin", Chapter: "Flüssigkeits- und Volumentherapie", Length: "1373", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/fM0kLg", Error: 0},
{Day: 40, Importance: 6, Subject: "Intensiv- und Notfallmedizin", Chapter: "Künstliche Ernährung", Length: "584", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/9t0Nf3", Error: 0},
{Day: 40, Importance: 7, Subject: "Intensiv- und Notfallmedizin", Chapter: "Transfusionen", Length: "1993", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/2M0TLg", Error: 0},
{Day: 40, Importance: 8, Subject: "Intensiv- und Notfallmedizin", Chapter: "Präklinische Traumaversorgung", Length: "1502", Imppact: 1.3571428571428572, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/4N03Yg", Error: 0},
{Day: 40, Importance: 9, Subject: "Intensiv- und Notfallmedizin", Chapter: "Grundlagen der Reanimation", Length: "1372", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/kN0mYg", Error: 0},
{Day: 40, Importance: 10, Subject: "Intensiv- und Notfallmedizin", Chapter: "Reanimation - AMBOSS-SOP", Length: "822", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/L70wmh", Error: 0},
{Day: 40, Importance: 11, Subject: "Intensiv- und Notfallmedizin", Chapter: "Polytrauma", Length: "808", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/gQYFvK/article/-y0D3i", Error: 0},
{Day: 41, Importance: 1, Subject: "Intensiv- und Notfallmedizin", Chapter: "Schock", Length: "1766", Imppact: 1.2857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/SQYyvK/article/kO0msT", Error: 0},
{Day: 41, Importance: 2, Subject: "Intensiv- und Notfallmedizin", Chapter: "Acute Respiratory Distress Syndrome", Length: "1226", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/SQYyvK/article/tg0XC2", Error: 0},
{Day: 41, Importance: 3, Subject: "Intensiv- und Notfallmedizin", Chapter: "Rhabdomyolyse und Crush-Syndrom", Length: "406", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/SQYyvK/article/4O03sT", Error: 0},
{Day: 41, Importance: 4, Subject: "Intensiv- und Notfallmedizin", Chapter: "Verbrennung", Length: "1036", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/SQYyvK/article/Jh0sUf", Error: 0},
{Day: 41, Importance: 5, Subject: "Intensiv- und Notfallmedizin", Chapter: "Hypothermie und Erfrierungen", Length: "898", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/SQYyvK/article/kK0mgS", Error: 0},
{Day: 41, Importance: 6, Subject: "Intensiv- und Notfallmedizin", Chapter: "Thoraxtrauma", Length: "818", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/SQYyvK/article/8h0Off", Error: 0},
{Day: 41, Importance: 7, Subject: "Intensiv- und Notfallmedizin", Chapter: "Pneumothorax", Length: "2103", Imppact: 2.2857142857142856, Url: "https://next.amboss.com/de/courses/AQ0RAf/SQYyvK/article/vh0Aff", Error: 0},
{Day: 41, Importance: 8, Subject: "Intensiv- und Notfallmedizin", Chapter: "Intoxikation mit Kohlenstoffmonoxid oder -dioxid", Length: "550", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/SQYyvK/article/4h03Vf", Error: 0},
{Day: 42, Importance: 1, Subject: "Chirurgie", Chapter: "Akute Wunden und Wundverschluss", Length: "1449", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/ph0LUf", Error: 0},
{Day: 42, Importance: 2, Subject: "Chirurgie", Chapter: "Chronische Wunden und Wundbehandlung", Length: "1567", Imppact: 1.7857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/f70kOh", Error: 0},
{Day: 42, Importance: 3, Subject: "Chirurgie", Chapter: "Bakterielle Infektionen von Haut und Weichgewebe", Length: "1902", Imppact: 2.4285714285714284, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/qh0CUf", Error: 0},
{Day: 42, Importance: 4, Subject: "Chirurgie", Chapter: "Paronychie und Panaritium", Length: "503", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/rh0f2f", Error: 0},
{Day: 42, Importance: 5, Subject: "Chirurgie", Chapter: "Tetanus", Length: "754", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/ef0xO2", Error: 0},
{Day: 42, Importance: 6, Subject: "Chirurgie", Chapter: "Aktinomykose", Length: "480", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/7h042f", Error: 0},
{Day: 42, Importance: 7, Subject: "Chirurgie", Chapter: "Perioperatives Management", Length: "2058", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/550ikg", Error: 0},
{Day: 42, Importance: 8, Subject: "Chirurgie", Chapter: "Laparoskopische Chirurgie", Length: "520", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/B50zmg", Error: 0},
{Day: 42, Importance: 9, Subject: "Chirurgie", Chapter: "Koronararterielle Bypasschirurgie", Length: "557", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/6l0jBT", Error: 0},
{Day: 42, Importance: 10, Subject: "Chirurgie", Chapter: "Aneurysma", Length: "533", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/Wh0P1f", Error: 0},
{Day: 42, Importance: 11, Subject: "Chirurgie", Chapter: "Aortenaneurysma", Length: "1205", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/dh0o1f", Error: 0},
{Day: 42, Importance: 12, Subject: "Chirurgie", Chapter: "Aortendissektion", Length: "1743", Imppact: 1.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/M50Mkg", Error: 0},
{Day: 42, Importance: 13, Subject: "Chirurgie", Chapter: "Akuter arterieller Extremitätenverschluss", Length: "1082", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/hQYcDK/article/1h021f", Error: 0},
{Day: 43, Importance: 1, Subject: "Chirurgie", Chapter: "Schilddrüsenkarzinom", Length: "1442", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/Vg0G82", Error: 0},
{Day: 43, Importance: 2, Subject: "Chirurgie", Chapter: "Schilddrüsenchirurgie", Length: "600", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/wl0h_T", Error: 0},
{Day: 43, Importance: 3, Subject: "Chirurgie", Chapter: "Ösophagusdivertikel", Length: "600", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/Eg08C2", Error: 0},
{Day: 43, Importance: 4, Subject: "Chirurgie", Chapter: "Boerhaave-Syndrom", Length: "340", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/wg0hx2", Error: 0},
{Day: 43, Importance: 5, Subject: "Chirurgie", Chapter: "Ösophaguskarzinom", Length: "1151", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/Cg0qx2", Error: 0},
{Day: 43, Importance: 6, Subject: "Chirurgie", Chapter: "Zwerchfellhernie", Length: "1573", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/Ch0qTf", Error: 0},
{Day: 43, Importance: 7, Subject: "Chirurgie", Chapter: "Milzruptur", Length: "1052", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/Bh0zTf", Error: 0},
{Day: 43, Importance: 8, Subject: "Chirurgie", Chapter: "Magenkarzinom", Length: "2132", Imppact: 2.5714285714285716, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/-g0DB2", Error: 0},
{Day: 43, Importance: 9, Subject: "Chirurgie", Chapter: "Neuroendokrine Neoplasien", Length: "2438", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/_h05gf", Error: 0},
{Day: 43, Importance: 10, Subject: "Chirurgie", Chapter: "Akutes Abdomen", Length: "3408", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/N50-4g", Error: 0},
{Day: 43, Importance: 11, Subject: "Chirurgie", Chapter: "Peritonitis", Length: "867", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/GM0BJg", Error: 0},
{Day: 43, Importance: 12, Subject: "Chirurgie", Chapter: "Ileus", Length: "1633", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/3QYSDK/article/230T3f", Error: 0},
{Day: 44, Importance: 1, Subject: "Chirurgie", Chapter: "Mesenteriale Ischämie", Length: "1186", Imppact: 1.3571428571428572, Url: "https://next.amboss.com/de/courses/AQ0RAf/RQYlDK/article/cS0aA2", Error: 0},
{Day: 44, Importance: 2, Subject: "Chirurgie", Chapter: "Appendizitis", Length: "1679", Imppact: 1.2857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/RQYlDK/article/a30QSf", Error: 0},
{Day: 44, Importance: 3, Subject: "Chirurgie", Chapter: "Kolonpolypen", Length: "737", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/RQYlDK/article/US0b_2", Error: 0},
{Day: 44, Importance: 4, Subject: "Chirurgie", Chapter: "Kolorektales Karzinom", Length: "3040", Imppact: 2.7857142857142856, Url: "https://next.amboss.com/de/courses/AQ0RAf/RQYlDK/article/TS06_2", Error: 0},
{Day: 44, Importance: 5, Subject: "Chirurgie", Chapter: "Hereditäres, nicht-polypöses Kolonkarzinom", Length: "953", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/RQYlDK/article/fS0k_2", Error: 0},
{Day: 44, Importance: 6, Subject: "Chirurgie", Chapter: "Obstipation", Length: "1696", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/RQYlDK/article/CM0qIg", Error: 0},
{Day: 44, Importance: 7, Subject: "Chirurgie", Chapter: "Darmchirurgie", Length: "2028", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/RQYlDK/article/Cl0q_T", Error: 0},
{Day: 45, Importance: 1, Subject: "Chirurgie", Chapter: "Cholelithiasis, Cholezystitis und Cholangitis", Length: "2356", Imppact: 2.357142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/V30Ghf", Error: 0},
{Day: 45, Importance: 2, Subject: "Chirurgie", Chapter: "Biliäre Karzinome", Length: "547", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/e30xhf", Error: 0},
{Day: 45, Importance: 3, Subject: "Chirurgie", Chapter: "Hepatozelluläres Karzinom", Length: "1102", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/6S0j0f", Error: 0},
{Day: 45, Importance: 4, Subject: "Chirurgie", Chapter: "Pankreas- und Leberchirurgie", Length: "835", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/Bl0z_T", Error: 0},
{Day: 45, Importance: 5, Subject: "Chirurgie", Chapter: "Anal- und Rektumprolaps", Length: "428", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/W30Phf", Error: 0},
{Day: 45, Importance: 6, Subject: "Chirurgie", Chapter: "Hämorrhoiden und Hämorrhoidalleiden", Length: "891", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/c30ahf", Error: 0},
{Day: 45, Importance: 7, Subject: "Chirurgie", Chapter: "Analvenenthrombose", Length: "388", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/1302hf", Error: 0},
{Day: 45, Importance: 8, Subject: "Chirurgie", Chapter: "Analfissur", Length: "639", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/X309Sf", Error: 0},
{Day: 45, Importance: 9, Subject: "Chirurgie", Chapter: "Analabszess und Analfistel", Length: "684", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/b30HSf", Error: 0},
{Day: 45, Importance: 10, Subject: "Chirurgie", Chapter: "Analkarzinom", Length: "685", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/gS0F_2", Error: 0},
{Day: 45, Importance: 11, Subject: "Chirurgie", Chapter: "Sinus pilonidalis", Length: "572", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/Y30nSf", Error: 0},
{Day: 45, Importance: 12, Subject: "Chirurgie", Chapter: "Hernien", Length: "1414", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/030eSf", Error: 0},
{Day: 45, Importance: 13, Subject: "Chirurgie", Chapter: "Leistenhernie", Length: "1290", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/zh0rgf", Error: 0},
{Day: 45, Importance: 14, Subject: "Chirurgie", Chapter: "Schenkelhernie", Length: "502", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/iQYJDK/article/Z30ZSf", Error: 0},
{Day: 46, Importance: 1, Subject: "Chirurgie", Chapter: "Allgemeine Frakturlehre", Length: "1111", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK/article/T3063f", Error: 0},
{Day: 46, Importance: 2, Subject: "Chirurgie", Chapter: "Konservative Verfahren in der Frakturversorgung", Length: "429", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK/article/Dl01_T", Error: 0},
{Day: 46, Importance: 3, Subject: "Chirurgie", Chapter: "Operative Verfahren der Unfallchirurgie/Orthopädie", Length: "1073", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK/article/vl0AAT", Error: 0},
{Day: 46, Importance: 4, Subject: "Chirurgie", Chapter: "Frakturen im Kindesalter", Length: "582", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK/article/g30F3f", Error: 0},
{Day: 46, Importance: 5, Subject: "Chirurgie", Chapter: "Kompartmentsyndrom", Length: "746", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK/article/330SRf", Error: 0},
{Day: 46, Importance: 6, Subject: "Chirurgie", Chapter: "Claviculafraktur", Length: "467", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK/article/i30JRf", Error: 0},
{Day: 46, Importance: 7, Subject: "Chirurgie", Chapter: "Luxation des Akromioklavikulargelenks", Length: "638", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK/article/Q30uRf", Error: 0},
{Day: 46, Importance: 8, Subject: "Chirurgie", Chapter: "Humerusfraktur", Length: "769", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK/article/j30_Rf", Error: 0},
{Day: 46, Importance: 9, Subject: "Chirurgie", Chapter: "Distale Radiusfraktur", Length: "757", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK/article/O30Iif", Error: 0},
{Day: 46, Importance: 10, Subject: "Chirurgie", Chapter: "Schaftfrakturen des Unterarmes", Length: "381", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/QQYuDK/article/yr0dPh", Error: 0},
{Day: 47, Importance: 1, Subject: "Chirurgie", Chapter: "Kahnbeinfraktur", Length: "573", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/jQY_DK/article/l30vif", Error: 0},
{Day: 47, Importance: 2, Subject: "Chirurgie", Chapter: "Mittelhandfrakturen", Length: "469", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/jQY_DK/article/Wl0PDT", Error: 0},
{Day: 47, Importance: 3, Subject: "Chirurgie", Chapter: "Wirbelsäulenverletzungen", Length: "1417", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/jQY_DK/article/M30MQf", Error: 0},
{Day: 47, Importance: 4, Subject: "Chirurgie", Chapter: "Beckenringfrakturen", Length: "1172", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/jQY_DK/article/n307Qf", Error: 0},
{Day: 47, Importance: 5, Subject: "Chirurgie", Chapter: "Proximale Femurfrakturen", Length: "1392", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/jQY_DK/article/L30wQf", Error: 0},
{Day: 47, Importance: 6, Subject: "Chirurgie", Chapter: "Femurschaft- und distale Femurfrakturen", Length: "595", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/jQY_DK/article/o300jf", Error: 0},
{Day: 47, Importance: 7, Subject: "Chirurgie", Chapter: "Frakturen des Unterschenkels", Length: "519", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/jQY_DK/article/K30Ujf", Error: 0},
{Day: 47, Importance: 8, Subject: "Chirurgie", Chapter: "Sprunggelenksfraktur", Length: "693", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/jQY_DK/article/630jjf", Error: 0},
{Day: 48, Importance: 1, Subject: "Orthopädie", Chapter: "Orthopädische Untersuchungszeichen", Length: "952", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK/article/zl0rzT", Error: 0},
{Day: 48, Importance: 2, Subject: "Orthopädie", Chapter: "Arthrose", Length: "1063", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK/article/bT0H62", Error: 0},
{Day: 48, Importance: 3, Subject: "Orthopädie", Chapter: "Osteomalazie und Rachitis", Length: "610", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK/article/XT0962", Error: 0},
{Day: 48, Importance: 4, Subject: "Orthopädie", Chapter: "Osteodystrophia deformans", Length: "507", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK/article/FQ0gBf", Error: 0},
{Day: 48, Importance: 5, Subject: "Orthopädie", Chapter: "Osteoporose", Length: "1747", Imppact: 2.0714285714285716, Url: "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK/article/cT0ap2", Error: 0},
{Day: 48, Importance: 6, Subject: "Orthopädie", Chapter: "Laborkonstellation Knochenerkrankungen", Length: "153", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK/article/eQ0xEf", Error: 0},
{Day: 48, Importance: 7, Subject: "Orthopädie", Chapter: "Seronegative Spondylarthritis", Length: "263", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK/article/J30sjf", Error: 0},
{Day: 48, Importance: 8, Subject: "Orthopädie", Chapter: "Osteomyelitis", Length: "851", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK/article/th0Xff", Error: 0},
{Day: 48, Importance: 9, Subject: "Orthopädie", Chapter: "Spondylodiszitis", Length: "676", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK/article/k-0mxi", Error: 0},
{Day: 48, Importance: 10, Subject: "Orthopädie", Chapter: "Bakterielle Arthritis", Length: "608", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/PQYWwK/article/0M0eMg", Error: 0},
{Day: 49, Importance: 1, Subject: "Orthopädie", Chapter: "Benigne Knochen- und Knorpeltumoren", Length: "1448", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/4QY3wK/article/7Q04xf", Error: 0},
{Day: 49, Importance: 2, Subject: "Orthopädie", Chapter: "Maligne Knochen- und Knorpeltumoren", Length: "1395", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/4QY3wK/article/HQ0Kxf", Error: 0},
{Day: 49, Importance: 3, Subject: "Orthopädie", Chapter: "Spondylolisthese", Length: "774", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/4QY3wK/article/PQ0Wwf", Error: 0},
{Day: 49, Importance: 4, Subject: "Orthopädie", Chapter: "Bandscheibenprolaps", Length: "2413", Imppact: 3.5714285714285716, Url: "https://next.amboss.com/de/courses/AQ0RAf/4QY3wK/article/ji0_rf", Error: 0},
{Day: 49, Importance: 5, Subject: "Orthopädie", Chapter: "Adoleszente idiopathische Skoliose", Length: "919", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/4QY3wK/article/4Q03wf", Error: 0},
{Day: 49, Importance: 6, Subject: "Orthopädie", Chapter: "Rückenschmerzen", Length: "1311", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/4QY3wK/article/nL07yg", Error: 0},
{Day: 50, Importance: 1, Subject: "Orthopädie", Chapter: "Morbus Dupuytren", Length: "416", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/hQ0cDf", Error: 0},
{Day: 50, Importance: 2, Subject: "Orthopädie", Chapter: "Tendovaginitis", Length: "479", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/3Q0SDf", Error: 0},
{Day: 50, Importance: 3, Subject: "Orthopädie", Chapter: "Tendinopathie", Length: "526", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/vQ0ABf", Error: 0},
{Day: 50, Importance: 4, Subject: "Orthopädie", Chapter: "Komplexes regionales Schmerzsyndrom", Length: "770", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/R30lRf", Error: 0},
{Day: 50, Importance: 5, Subject: "Orthopädie", Chapter: "Thoracic-Outlet-Syndrom", Length: "510", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/QQ0uDf", Error: 0},
{Day: 50, Importance: 6, Subject: "Orthopädie", Chapter: "Schulterläsionen", Length: "780", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/UQ0bvf", Error: 0},
{Day: 50, Importance: 7, Subject: "Orthopädie", Chapter: "Rotatorenmanschettenruptur", Length: "443", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/L1awhj", Error: 0},
{Day: 50, Importance: 8, Subject: "Orthopädie", Chapter: "Schultergelenkluxation", Length: "1074", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/P30Wif", Error: 0},
{Day: 50, Importance: 9, Subject: "Orthopädie", Chapter: "Bizepssehnenruptur", Length: "578", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/gQ0Fvf", Error: 0},
{Day: 50, Importance: 10, Subject: "Orthopädie", Chapter: "Luxationen des Ellenbogengelenks", Length: "501", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/0l0evT", Error: 0},
{Day: 50, Importance: 11, Subject: "Orthopädie", Chapter: "Radiuskopf-Subluxation", Length: "412", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/4303if", Error: 0},
{Day: 50, Importance: 12, Subject: "Orthopädie", Chapter: "Karpaltunnelsyndrom", Length: "743", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/sR0tof", Error: 0},
{Day: 50, Importance: 13, Subject: "Orthopädie", Chapter: "Sehnenverletzung der Hand", Length: "876", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/N30-if", Error: 0},
{Day: 50, Importance: 14, Subject: "Orthopädie", Chapter: "Sammelsurium der Unfallchirurgie und Orthopädie", Length: "836", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/kQYmwK/article/i50JPg", Error: 0},
{Day: 51, Importance: 1, Subject: "Orthopädie", Chapter: "Osteochondrosis dissecans", Length: "395", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/JQ0sCf", Error: 0},
{Day: 51, Importance: 2, Subject: "Orthopädie", Chapter: "Osteonekrosen", Length: "926", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/rQ0fxf", Error: 0},
{Day: 51, Importance: 3, Subject: "Orthopädie", Chapter: "Aseptische Femurkopfnekrose im Erwachsenenalter", Length: "439", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/5Q0i9f", Error: 0},
{Day: 51, Importance: 4, Subject: "Orthopädie", Chapter: "Fehlstellungen der unteren Extremität", Length: "993", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/lQ0vwf", Error: 0},
{Day: 51, Importance: 5, Subject: "Orthopädie", Chapter: "Koxarthrose", Length: "887", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/LQ0w9f", Error: 0},
{Day: 51, Importance: 6, Subject: "Orthopädie", Chapter: "Gonarthrose", Length: "690", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/jba_tQ", Error: 0},
{Day: 51, Importance: 7, Subject: "Orthopädie", Chapter: "Sportverletzungen", Length: "1085", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/AM0Rrg", Error: 0},
{Day: 51, Importance: 8, Subject: "Orthopädie", Chapter: "Meniskusruptur", Length: "801", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/oQ00Cf", Error: 0},
{Day: 51, Importance: 9, Subject: "Orthopädie", Chapter: "Patellaluxation", Length: "625", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/KQ0UCf", Error: 0},
{Day: 51, Importance: 10, Subject: "Orthopädie", Chapter: "Bandverletzungen des Knies", Length: "1140", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/pQ0LCf", Error: 0},
{Day: 51, Importance: 11, Subject: "Orthopädie", Chapter: "Achillessehnenruptur", Length: "723", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/p30Ljf", Error: 0},
{Day: 51, Importance: 12, Subject: "Orthopädie", Chapter: "Fußdeformitäten", Length: "1626", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/qQ0CCf", Error: 0},
{Day: 51, Importance: 13, Subject: "Orthopädie", Chapter: "Zehendeformitäten", Length: "540", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/OQYIwK/article/IQ0Yxf", Error: 0},
{Day: 52, Importance: 1, Subject: "Gynäkologie", Chapter: "Diagnostik in der Gynäkologie", Length: "3049", Imppact: 1.7142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK/article/SN0y0g", Error: 0},
{Day: 52, Importance: 2, Subject: "Gynäkologie", Chapter: "Fehlbildungen der weiblichen Geschlechtsorgane", Length: "884", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK/article/vk0ApT", Error: 0},
{Day: 52, Importance: 3, Subject: "Gynäkologie", Chapter: "Androgenresistenz", Length: "528", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK/article/9k0NJT", Error: 0},
{Day: 52, Importance: 4, Subject: "Gynäkologie", Chapter: "Östrogenwirkung und assoziierte Erkrankungen", Length: "572", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK/article/uk0ppT", Error: 0},
{Day: 52, Importance: 5, Subject: "Gynäkologie", Chapter: "Menstruationszyklus und Zyklusanomalien", Length: "1458", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK/article/Ek08pT", Error: 0},
{Day: 52, Importance: 6, Subject: "Gynäkologie", Chapter: "Endometriose", Length: "1270", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK/article/-k0DqT", Error: 0},
{Day: 52, Importance: 7, Subject: "Gynäkologie", Chapter: "Polyzystisches Ovarialsyndrom", Length: "681", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK/article/AO0RET", Error: 0},
{Day: 52, Importance: 8, Subject: "Gynäkologie", Chapter: "Klimakterium", Length: "867", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK/article/BO0zuT", Error: 0},
{Day: 52, Importance: 9, Subject: "Gynäkologie", Chapter: "Entzündungen des weiblichen Genitaltrakts", Length: "1659", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK/article/xk0EJT", Error: 0},
{Day: 52, Importance: 10, Subject: "Gynäkologie", Chapter: "Entzündliche und benigne Veränderungen der Mamma", Length: "925", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/lQYvwK/article/Ak0RqT", Error: 0},
{Day: 53, Importance: 1, Subject: "Gynäkologie", Chapter: "Mammakarzinom", Length: "4793", Imppact: 4.142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/NQY-wK/article/_k05qT", Error: 0},
{Day: 53, Importance: 2, Subject: "Gynäkologie", Chapter: "Uterusmyom", Length: "1513", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/NQY-wK/article/zk0rqT", Error: 0},
{Day: 53, Importance: 3, Subject: "Gynäkologie", Chapter: "Benigne Ovarialtumoren", Length: "449", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/NQY-wK/article/-H0DGh", Error: 0},
{Day: 53, Importance: 4, Subject: "Gynäkologie", Chapter: "Maligne Ovarialtumoren", Length: "2736", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/NQY-wK/article/aO0QIT", Error: 0},
{Day: 54, Importance: 1, Subject: "Gynäkologie", Chapter: "Infektion mit humanen Papillomaviren", Length: "1511", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/mQYV9K/article/zO0rET", Error: 0},
{Day: 54, Importance: 2, Subject: "Gynäkologie", Chapter: "Zervixkarzinom", Length: "2587", Imppact: 1.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/mQYV9K/article/ZO0ZIT", Error: 0},
{Day: 54, Importance: 3, Subject: "Gynäkologie", Chapter: "Endometriumkarzinom", Length: "1564", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/mQYV9K/article/0O0eIT", Error: 0},
{Day: 54, Importance: 4, Subject: "Gynäkologie", Chapter: "Vulvakarzinom", Length: "1098", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/mQYV9K/article/bO0HIT", Error: 0},
{Day: 55, Importance: 1, Subject: "Gynäkologie", Chapter: "Schwangerschaftsabbruch", Length: "1243", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K/article/Dk01JT", Error: 0},
{Day: 55, Importance: 2, Subject: "Gynäkologie", Chapter: "Sterilität, Infertilität und Impotenz", Length: "1860", Imppact: 1.7142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K/article/RM0log", Error: 0},
{Day: 55, Importance: 3, Subject: "Gynäkologie", Chapter: "Nicht-hormonelle Kontrazeption", Length: "870", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K/article/Ck0qJT", Error: 0},
{Day: 55, Importance: 4, Subject: "Gynäkologie", Chapter: "Schwangerschaft", Length: "1890", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K/article/dO0orT", Error: 0},
{Day: 55, Importance: 5, Subject: "Gynäkologie", Chapter: "Vorsorgeuntersuchungen in der Schwangerschaft", Length: "1380", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K/article/RN0lag", Error: 0},
{Day: 55, Importance: 6, Subject: "Gynäkologie", Chapter: "Pränataldiagnostik", Length: "677", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K/article/--0D-i", Error: 0},
{Day: 55, Importance: 7, Subject: "Gynäkologie", Chapter: "Kardiotokografie (CTG)", Length: "896", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K/article/uG0pa3", Error: 0},
{Day: 55, Importance: 8, Subject: "Gynäkologie", Chapter: "Mehrlingsschwangerschaft", Length: "670", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K/article/Yl0nvT", Error: 0},
{Day: 55, Importance: 9, Subject: "Gynäkologie", Chapter: "Extrauteringravidität", Length: "863", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K/article/fO0k7T", Error: 0},
{Day: 55, Importance: 10, Subject: "Gynäkologie", Chapter: "Fruchtwasseranomalien", Length: "710", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/5QYi9K/article/PJ0W8S", Error: 0},
{Day: 56, Importance: 1, Subject: "Gynäkologie", Chapter: "Hypertensive Schwangerschaftserkrankungen", Length: "1561", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/VO0GrT", Error: 0},
{Day: 56, Importance: 2, Subject: "Gynäkologie", Chapter: "HELLP-Syndrom", Length: "582", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/sG0t03", Error: 0},
{Day: 56, Importance: 3, Subject: "Gynäkologie", Chapter: "Blutungen während der Schwangerschaft", Length: "708", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/mM0V6g", Error: 0},
{Day: 56, Importance: 4, Subject: "Gynäkologie", Chapter: "Intra- und postpartale Blutungen", Length: "1249", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/SG0yAh", Error: 0},
{Day: 56, Importance: 5, Subject: "Gynäkologie", Chapter: "Fetale Wachstumsrestriktion", Length: "516", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/al0QvT", Error: 0},
{Day: 56, Importance: 6, Subject: "Gynäkologie", Chapter: "Vorzeitige Plazentalösung", Length: "819", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/UO0b7T", Error: 0},
{Day: 56, Importance: 7, Subject: "Gynäkologie", Chapter: "Placenta praevia", Length: "667", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/oI00dh", Error: 0},
{Day: 56, Importance: 8, Subject: "Gynäkologie", Chapter: "Nabelschnurkomplikationen", Length: "586", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/jJ0_FS", Error: 0},
{Day: 56, Importance: 9, Subject: "Gynäkologie", Chapter: "Trophoblasttumoren", Length: "631", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/2O0T7T", Error: 0},
{Day: 56, Importance: 10, Subject: "Gynäkologie", Chapter: "Geburtsablauf", Length: "955", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/3O0SHT", Error: 0},
{Day: 56, Importance: 11, Subject: "Gynäkologie", Chapter: "Geburtsmechanik", Length: "1873", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/Xl09vT", Error: 0},
{Day: 56, Importance: 12, Subject: "Gynäkologie", Chapter: "Geburtseinleitung", Length: "517", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/0t0eX3", Error: 0},
{Day: 56, Importance: 13, Subject: "Gynäkologie", Chapter: "Operative Geburtshilfe", Length: "735", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/zG0rb3", Error: 0},
{Day: 56, Importance: 14, Subject: "Gynäkologie", Chapter: "Drohende Frühgeburt", Length: "1071", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/gO0F7T", Error: 0},
{Day: 56, Importance: 15, Subject: "Gynäkologie", Chapter: "Abort und intrauteriner Fruchttod", Length: "949", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/MD0MUR", Error: 0},
{Day: 56, Importance: 16, Subject: "Gynäkologie", Chapter: "Uterusruptur", Length: "639", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/RO0lHT", Error: 0},
{Day: 56, Importance: 17, Subject: "Gynäkologie", Chapter: "Wochenbett", Length: "1410", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/MQYM9K/article/iO0JHT", Error: 0},
{Day: 57, Importance: 1, Subject: "Urologie", Chapter: "Apparative Diagnostik in der Urologie", Length: "688", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/c50aQg", Error: 0},
{Day: 57, Importance: 2, Subject: "Urologie", Chapter: "Kongenitale Anomalien der Nieren und ableitenden Harnwege", Length: "796", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/Oi0I7f", Error: 0},
{Day: 57, Importance: 3, Subject: "Urologie", Chapter: "Polyzystische Nierenerkrankung", Length: "1253", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/li0v7f", Error: 0},
{Day: 57, Importance: 4, Subject: "Urologie", Chapter: "Blasenekstrophie, Fehlanlagen der männlichen Harnröhre und Palmure", Length: "489", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/Mi0MHf", Error: 0},
{Day: 57, Importance: 5, Subject: "Urologie", Chapter: "Balanitis und Balanoposthitis", Length: "398", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/oi00sf", Error: 0},
{Day: 57, Importance: 6, Subject: "Urologie", Chapter: "Phimose", Length: "480", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/_J059S", Error: 0},
{Day: 57, Importance: 7, Subject: "Urologie", Chapter: "Hodenhochstand", Length: "579", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/ni07Hf", Error: 0},
{Day: 57, Importance: 8, Subject: "Urologie", Chapter: "Harninkontinenz", Length: "546", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/ZQ0Zuf", Error: 0},
{Day: 57, Importance: 9, Subject: "Urologie", Chapter: "Belastungsinkontinenz", Length: "439", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/Ai0R8f", Error: 0},
{Day: 57, Importance: 10, Subject: "Urologie", Chapter: "Dranginkontinenz", Length: "635", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/yi0d8f", Error: 0},
{Day: 57, Importance: 11, Subject: "Urologie", Chapter: "Harnverhalt", Length: "695", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/Ci0qFf", Error: 0},
{Day: 57, Importance: 12, Subject: "Urologie", Chapter: "Harnabflussstörungen", Length: "1040", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/Ni0-7f", Error: 0},
{Day: 57, Importance: 13, Subject: "Urologie", Chapter: "Vesikoureteraler Reflux", Length: "811", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/-i0D8f", Error: 0},
{Day: 57, Importance: 14, Subject: "Urologie", Chapter: "Morbus Ormond", Length: "298", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/9h0NTf", Error: 0},
{Day: 57, Importance: 15, Subject: "Urologie", Chapter: "Urozystitis", Length: "970", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/7i04Gf", Error: 0},
{Day: 57, Importance: 16, Subject: "Urologie", Chapter: "Urethritis", Length: "285", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/ui0ptf", Error: 0},
{Day: 57, Importance: 17, Subject: "Urologie", Chapter: "Pyelonephritis", Length: "852", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/Hi0KGf", Error: 0},
{Day: 57, Importance: 18, Subject: "Urologie", Chapter: "Perinephritischer Abszess", Length: "301", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/si0tGf", Error: 0},
{Day: 57, Importance: 19, Subject: "Urologie", Chapter: "Prostatitis", Length: "547", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/ti0Xtf", Error: 0},
{Day: 57, Importance: 20, Subject: "Urologie", Chapter: "Epididymitis und Orchitis", Length: "456", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/Fi0gtf", Error: 0},
{Day: 57, Importance: 21, Subject: "Urologie", Chapter: "Hydrocele testis, Varikozele und Spermatozele", Length: "493", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/AJ0R9S", Error: 0},
{Day: 57, Importance: 22, Subject: "Urologie", Chapter: "Skrotalabszess", Length: "169", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/nQY79K/article/vi0Atf", Error: 0},
{Day: 58, Importance: 1, Subject: "Urologie", Chapter: "Nierenzellkarzinom", Length: "1173", Imppact: 1.8571428571428572, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/Ki0Usf", Error: 0},
{Day: 58, Importance: 2, Subject: "Urologie", Chapter: "Benignes Prostatasyndrom", Length: "1175", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/pi0Lsf", Error: 0},
{Day: 58, Importance: 3, Subject: "Urologie", Chapter: "Prostatakarzinom", Length: "1007", Imppact: 1.2857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/Ji0ssf", Error: 0},
{Day: 58, Importance: 4, Subject: "Urologie", Chapter: "Urothelkarzinom", Length: "1288", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/6i0jsf", Error: 0},
{Day: 58, Importance: 5, Subject: "Urologie", Chapter: "Maligne Hodentumoren", Length: "932", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/Ii0YGf", Error: 0},
{Day: 58, Importance: 6, Subject: "Urologie", Chapter: "Peniskarzinom", Length: "712", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/ri0fGf", Error: 0},
{Day: 58, Importance: 7, Subject: "Urologie", Chapter: "Urolithiasis", Length: "1524", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/qg0Cw2", Error: 0},
{Day: 58, Importance: 8, Subject: "Urologie", Chapter: "Traumatische Verletzungen der Niere und der ableitenden Harnwege", Length: "447", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/9i0NFf", Error: 0},
{Day: 58, Importance: 9, Subject: "Urologie", Chapter: "Hodentorsion", Length: "629", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/Li0wHf", Error: 0},
{Day: 58, Importance: 10, Subject: "Urologie", Chapter: "Priapismus", Length: "446", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/xi0EFf", Error: 0},
{Day: 58, Importance: 11, Subject: "Urologie", Chapter: "Penisruptur", Length: "261", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/Bi0zFf", Error: 0},
{Day: 58, Importance: 12, Subject: "Urologie", Chapter: "Sexuelle Funktionsstörungen", Length: "695", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/uM0pqg", Error: 0},
{Day: 58, Importance: 13, Subject: "Urologie", Chapter: "Spermiogramm", Length: "382", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/LQYw9K/article/_i058f", Error: 0},
{Day: 59, Importance: 1, Subject: "HNO", Chapter: "Audiometrische Verfahren in der HNO", Length: "2082", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/NN0-Yg", Error: 0},
{Day: 59, Importance: 2, Subject: "HNO", Chapter: "Othämatom und Otserom", Length: "207", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/qj0CYT", Error: 0},
{Day: 59, Importance: 3, Subject: "HNO", Chapter: "Otitis externa", Length: "519", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/mj0VaT", Error: 0},
{Day: 59, Importance: 4, Subject: "HNO", Chapter: "Akute Otitis media", Length: "516", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/Mj0MaT", Error: 0},
{Day: 59, Importance: 5, Subject: "HNO", Chapter: "Mastoiditis und Labyrinthitis", Length: "761", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/zJ0r9S", Error: 0},
{Day: 59, Importance: 6, Subject: "HNO", Chapter: "Tubenfunktionsstörungen", Length: "775", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/5j0iaT", Error: 0},
{Day: 59, Importance: 7, Subject: "HNO", Chapter: "Otosklerose", Length: "356", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/Kj0UYT", Error: 0},
{Day: 59, Importance: 8, Subject: "HNO", Chapter: "Chronische Otitis media", Length: "1044", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/Lj0waT", Error: 0},
{Day: 59, Importance: 9, Subject: "HNO", Chapter: "Glomustumor", Length: "301", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/oj00YT", Error: 0},
{Day: 59, Importance: 10, Subject: "HNO", Chapter: "Hörsturz", Length: "591", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/6j0jYT", Error: 0},
{Day: 59, Importance: 11, Subject: "HNO", Chapter: "Akustisches Trauma", Length: "706", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/Jj0sYT", Error: 0},
{Day: 59, Importance: 12, Subject: "HNO", Chapter: "Tinnitus", Length: "751", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/wn0hvg", Error: 0},
{Day: 59, Importance: 13, Subject: "HNO", Chapter: "Peripherer paroxysmaler Lagerungsschwindel", Length: "739", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/Ti06If", Error: 0},
{Day: 59, Importance: 14, Subject: "HNO", Chapter: "Morbus Menière", Length: "776", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/gi0FIf", Error: 0},
{Day: 59, Importance: 15, Subject: "HNO", Chapter: "Neuropathia vestibularis", Length: "672", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/Si0yIf", Error: 0},
{Day: 59, Importance: 16, Subject: "HNO", Chapter: "Epistaxis", Length: "529", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/Hj0KbT", Error: 0},
{Day: 59, Importance: 17, Subject: "HNO", Chapter: "Tumoren der Nasenhaupthöhle und Nasennebenhöhlen", Length: "555", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/d50oQg", Error: 0},
{Day: 59, Importance: 18, Subject: "HNO", Chapter: "Sinusitis", Length: "1314", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/sj0tbT", Error: 0},
{Day: 59, Importance: 19, Subject: "HNO", Chapter: "Allergische Rhinitis", Length: "430", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/K-0Uyi", Error: 0},
{Day: 59, Importance: 20, Subject: "HNO", Chapter: "Gesichts- und Felsenbeinfrakturen", Length: "1128", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/oQY0CK/article/8j0OXT", Error: 0},
{Day: 60, Importance: 1, Subject: "HNO", Chapter: "Adenoide Vegetationen", Length: "451", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/Dj01cT", Error: 0},
{Day: 60, Importance: 2, Subject: "HNO", Chapter: "Juveniles Angiofibrom", Length: "315", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/xj0EcT", Error: 0},
{Day: 60, Importance: 3, Subject: "HNO", Chapter: "Zungenveränderungen", Length: "351", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/9j0NcT", Error: 0},
{Day: 60, Importance: 4, Subject: "HNO", Chapter: "Akute bakterielle Tonsillopharyngitis", Length: "1361", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/wj0hcT", Error: 0},
{Day: 60, Importance: 5, Subject: "HNO", Chapter: "Peritonsillar-, Parapharyngeal- und Retropharyngealabszess", Length: "659", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/7M04Jg", Error: 0},
{Day: 60, Importance: 6, Subject: "HNO", Chapter: "Pharynxkarzinom", Length: "1247", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/Cj0qcT", Error: 0},
{Day: 60, Importance: 7, Subject: "HNO", Chapter: "Kehlkopflähmung", Length: "740", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/_j051T", Error: 0},
{Day: 60, Importance: 8, Subject: "HNO", Chapter: "Benigne Tumoren und Präkanzerosen des Larynx", Length: "763", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/zj0r1T", Error: 0},
{Day: 60, Importance: 9, Subject: "HNO", Chapter: "Larynxkarzinom", Length: "855", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/ZP0ZWT", Error: 0},
{Day: 60, Importance: 10, Subject: "HNO", Chapter: "Halszyste und Halsfistel", Length: "570", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/aP0QWT", Error: 0},
{Day: 60, Importance: 11, Subject: "HNO", Chapter: "Kopfspeicheldrüsenerkrankungen", Length: "1236", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/bP0HWT", Error: 0},
{Day: 60, Importance: 12, Subject: "HNO", Chapter: "Sjögren-Syndrom", Length: "620", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/XP09WT", Error: 0},
{Day: 60, Importance: 13, Subject: "HNO", Chapter: "Sprach- und Sprechentwicklungsstörungen", Length: "599", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/WP0PdT", Error: 0},
{Day: 60, Importance: 14, Subject: "HNO", Chapter: "Sammelsurium der HNO", Length: "829", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/KQYUCK/article/a50Qig", Error: 0},
{Day: 61, Importance: 1, Subject: "Augenheilkunde", Chapter: "Untersuchungsmethoden in der Augenheilkunde", Length: "1107", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/aM0QMg", Error: 0},
{Day: 61, Importance: 2, Subject: "Augenheilkunde", Chapter: "Störungen der Lidstellung", Length: "522", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/lO0vsT", Error: 0},
{Day: 61, Importance: 3, Subject: "Augenheilkunde", Chapter: "Entzündungen der Augenlider", Length: "415", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/NO0-sT", Error: 0},
{Day: 61, Importance: 4, Subject: "Augenheilkunde", Chapter: "Erkrankungen des Tränenapparats", Length: "501", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/5O0iGT", Error: 0},
{Day: 61, Importance: 5, Subject: "Augenheilkunde", Chapter: "Infektiöse Konjunktivitis", Length: "515", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/MO0MGT", Error: 0},
{Day: 61, Importance: 6, Subject: "Augenheilkunde", Chapter: "Nicht-infektiöse Konjunktivitis", Length: "513", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/gr0Fgh", Error: 0},
{Day: 61, Importance: 7, Subject: "Augenheilkunde", Chapter: "Allergische Konjunktivitiden", Length: "509", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/Tr06gh", Error: 0},
{Day: 61, Importance: 8, Subject: "Augenheilkunde", Chapter: "Degenerationen, Dystrophien und Tumoren der Konjunktiven", Length: "719", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/nO07GT", Error: 0},
{Day: 61, Importance: 9, Subject: "Augenheilkunde", Chapter: "Erkrankungen der Hornhaut", Length: "816", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/9O0NuT", Error: 0},
{Day: 61, Importance: 10, Subject: "Augenheilkunde", Chapter: "Keratitis", Length: "875", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/oO00tT", Error: 0},
{Day: 61, Importance: 11, Subject: "Augenheilkunde", Chapter: "Entzündungen der Sklera", Length: "316", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/KO0UtT", Error: 0},
{Day: 61, Importance: 12, Subject: "Augenheilkunde", Chapter: "Erkrankungen der Linse", Length: "325", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/6O0jtT", Error: 0},
{Day: 61, Importance: 13, Subject: "Augenheilkunde", Chapter: "Katarakt", Length: "999", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/pO0LtT", Error: 0},
{Day: 61, Importance: 14, Subject: "Augenheilkunde", Chapter: "Erkrankungen der Uvea", Length: "1021", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/JO0stT", Error: 0},
{Day: 61, Importance: 15, Subject: "Augenheilkunde", Chapter: "Aderhautmelanom", Length: "428", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/6QYjCK/article/NM0-Kg", Error: 0},
{Day: 62, Importance: 1, Subject: "Augenheilkunde", Chapter: "Pupillenstörungen", Length: "464", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/qO0CtT", Error: 0},
{Day: 62, Importance: 2, Subject: "Augenheilkunde", Chapter: "Sehstörungen", Length: "603", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/jM0_og", Error: 0},
{Day: 62, Importance: 3, Subject: "Augenheilkunde", Chapter: "Erkrankungen des Glaskörpers", Length: "779", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/rO0fFT", Error: 0},
{Day: 62, Importance: 4, Subject: "Augenheilkunde", Chapter: "Endophthalmitis", Length: "315", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/4M03Kg", Error: 0},
{Day: 62, Importance: 5, Subject: "Augenheilkunde", Chapter: "Glaukom", Length: "1606", Imppact: 1.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/IO0YFT", Error: 0},
{Day: 62, Importance: 6, Subject: "Augenheilkunde", Chapter: "Erkrankungen der Netzhaut", Length: "1415", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/sO0tFT", Error: 0},
{Day: 62, Importance: 7, Subject: "Augenheilkunde", Chapter: "Retinale Gefäßverschlüsse", Length: "748", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/HO0KFT", Error: 0},
{Day: 62, Importance: 8, Subject: "Augenheilkunde", Chapter: "Netzhautablösung", Length: "559", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/tO0X8T", Error: 0},
{Day: 62, Importance: 9, Subject: "Augenheilkunde", Chapter: "Altersbedingte Makuladegeneration", Length: "956", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/GO0BFT", Error: 0},
{Day: 62, Importance: 10, Subject: "Augenheilkunde", Chapter: "Störungen der Sehbahn", Length: "957", Imppact: 1.2857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/FO0g8T", Error: 0},
{Day: 62, Importance: 11, Subject: "Augenheilkunde", Chapter: "Erkrankungen der Augenhöhle", Length: "635", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/G50Blg", Error: 0},
{Day: 62, Importance: 12, Subject: "Augenheilkunde", Chapter: "Horner-Syndrom", Length: "327", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/Ui0bIf", Error: 0},
{Day: 62, Importance: 13, Subject: "Augenheilkunde", Chapter: "Störungen der Optik", Length: "1082", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/8O0O8T", Error: 0},
{Day: 62, Importance: 14, Subject: "Augenheilkunde", Chapter: "Störungen der Bulbusmotilität und Strabismus", Length: "706", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/uO0p8T", Error: 0},
{Day: 62, Importance: 15, Subject: "Augenheilkunde", Chapter: "Traumatische Augenverletzungen", Length: "847", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/pQYLCK/article/EO088T", Error: 0},
{Day: 63, Importance: 1, Subject: "Neurologie", Chapter: "Neurologische Untersuchung", Length: "8478", Imppact: 1.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/JQYsCK/article/o500Og", Error: 0},
{Day: 63, Importance: 2, Subject: "Neurologie", Chapter: "Tremor", Length: "461", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/JQYsCK/article/x30Ekf", Error: 0},
{Day: 63, Importance: 3, Subject: "Neurologie", Chapter: "Parkinson-Syndrom und Parkinson-Krankheit", Length: "2375", Imppact: 2.0714285714285716, Url: "https://next.amboss.com/de/courses/AQ0RAf/JQYsCK/article/C30qkf", Error: 0},
{Day: 63, Importance: 4, Subject: "Neurologie", Chapter: "Atypische Parkinson-Syndrome", Length: "688", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/JQYsCK/article/B30zkf", Error: 0},
{Day: 63, Importance: 5, Subject: "Neurologie", Chapter: "Normaldruckhydrozephalus", Length: "552", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/IQYYxK/article/E3084f", Error: 0},
{Day: 63, Importance: 6, Subject: "Neurologie", Chapter: "Huntington-Erkrankung", Length: "735", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/JQYsCK/article/y30dOf", Error: 0},
{Day: 63, Importance: 7, Subject: "Neurologie", Chapter: "Restless-Legs-Syndrom", Length: "611", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/JQYsCK/article/z30rOf", Error: 0},
{Day: 63, Importance: 8, Subject: "Neurologie", Chapter: "Grundlagen der Kleinhirnerkrankungen", Length: "501", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/JQYsCK/article/BR0z6f", Error: 0},
{Day: 63, Importance: 9, Subject: "Neurologie", Chapter: "Friedreich-Ataxie", Length: "511", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/KR0ULf", Error: 0},
{Day: 64, Importance: 1, Subject: "Neurologie", Chapter: "Epileptische Anfälle", Length: "1615", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/RR0l5f", Error: 0},
{Day: 64, Importance: 2, Subject: "Neurologie", Chapter: "Status epilepticus", Length: "599", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/FG0ga3", Error: 0},
{Day: 64, Importance: 3, Subject: "Neurologie", Chapter: "Epilepsien und Epilepsiesyndrome", Length: "1230", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/jR0_5f", Error: 0},
{Day: 64, Importance: 4, Subject: "Neurologie", Chapter: "Transiente globale Amnesie", Length: "321", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/4R03Mf", Error: 0},
{Day: 64, Importance: 5, Subject: "Neurologie", Chapter: "Narkolepsie", Length: "897", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/kR0mMf", Error: 0},
{Day: 64, Importance: 6, Subject: "Neurologie", Chapter: "Vigilanzminderung", Length: "1138", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/eR0xNf", Error: 0},
{Day: 64, Importance: 7, Subject: "Neurologie", Chapter: "Irreversibler Hirnfunktionsausfall", Length: "702", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/KI0Udh", Error: 0},
{Day: 64, Importance: 8, Subject: "Neurologie", Chapter: "Syndrome mit anhaltender minimaler Interaktionsfähigkeit", Length: "333", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/IQYYxK/article/bi0HJf", Error: 0},
{Day: 64, Importance: 9, Subject: "Neurologie", Chapter: "Intrakranielle Druckerhöhung", Length: "1412", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/r70fMh", Error: 0},
{Day: 64, Importance: 10, Subject: "Neurologie", Chapter: "Schädel-Hirn-Trauma", Length: "819", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/l70vNh", Error: 0},
{Day: 65, Importance: 1, Subject: "Neurologie", Chapter: "Intrazerebrale Blutung", Length: "1212", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/fR0kmf", Error: 0},
{Day: 65, Importance: 2, Subject: "Neurologie", Chapter: "Epidurales Hämatom", Length: "559", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/VR0GNf", Error: 0},
{Day: 65, Importance: 3, Subject: "Neurologie", Chapter: "Subdurales Hämatom", Length: "713", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/dR0oNf", Error: 0},
{Day: 65, Importance: 4, Subject: "Neurologie", Chapter: "Subarachnoidalblutung", Length: "1653", Imppact: 2.5714285714285716, Url: "https://next.amboss.com/de/courses/AQ0RAf/qQYCCK/article/2R0Tmf", Error: 0},
{Day: 65, Importance: 5, Subject: "Neurologie", Chapter: "Ischämischer Schlaganfall", Length: "3536", Imppact: 5.857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/UR0bmf", Error: 0},
{Day: 65, Importance: 6, Subject: "Neurologie", Chapter: "Karotis- und Vertebralisdissektion", Length: "631", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/Pi0W7f", Error: 0},
{Day: 65, Importance: 7, Subject: "Neurologie", Chapter: "Zerebrale Sinus- und Venenthrombose", Length: "799", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/SR0ymf", Error: 0},
{Day: 65, Importance: 8, Subject: "Neurologie", Chapter: "Carotis-Sinus-cavernosus-Fistel", Length: "285", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/2i0TIf", Error: 0},
{Day: 66, Importance: 1, Subject: "Neurologie", Chapter: "Kopfschmerzen", Length: "1318", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/YL0nwg", Error: 0},
{Day: 66, Importance: 2, Subject: "Neurologie", Chapter: "Migräne", Length: "1503", Imppact: 1.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/hi0crf", Error: 0},
{Day: 66, Importance: 3, Subject: "Neurologie", Chapter: "Kopfschmerz vom Spannungstyp", Length: "437", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/3i0Srf", Error: 0},
{Day: 66, Importance: 4, Subject: "Neurologie", Chapter: "Cluster-Kopfschmerz", Length: "480", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/Ri0lrf", Error: 0},
{Day: 66, Importance: 5, Subject: "Neurologie", Chapter: "Trigeminusneuralgie", Length: "617", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/ii0Jrf", Error: 0},
{Day: 66, Importance: 6, Subject: "Neurologie", Chapter: "Kopfschmerz bei Medikamentenübergebrauch", Length: "347", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/7QY4xK/article/dq0oxS", Error: 0},
{Day: 66, Importance: 7, Subject: "Neurologie", Chapter: "Idiopathische intrakranielle Hypertension", Length: "501", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/IQYYxK/article/u30p4f", Error: 0},
{Day: 66, Importance: 8, Subject: "Neurologie", Chapter: "Meningitis", Length: "2466", Imppact: 4.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK/article/ZR0Zlf", Error: 0},
{Day: 66, Importance: 9, Subject: "Neurologie", Chapter: "Liquorpunktion", Length: "1120", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/JQYsCK/article/-l0DzT", Error: 0},
{Day: 66, Importance: 10, Subject: "Neurologie", Chapter: "FSME-Virus-Infektion", Length: "552", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK/article/Sr0ygh", Error: 0},
{Day: 66, Importance: 11, Subject: "Neurologie", Chapter: "Herpes-simplex-Enzephalitis", Length: "989", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK/article/YR0nlf", Error: 0},
{Day: 66, Importance: 12, Subject: "Neurologie", Chapter: "Hirnabszess", Length: "519", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK/article/1R02Nf", Error: 0},
{Day: 66, Importance: 13, Subject: "Neurologie", Chapter: "Creutzfeldt-Jakob-Krankheit", Length: "503", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK/article/cR0aNf", Error: 0},
{Day: 67, Importance: 1, Subject: "Neurologie", Chapter: "Multiple Sklerose", Length: "2308", Imppact: 1.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/WR0PNf", Error: 0},
{Day: 67, Importance: 2, Subject: "Neurologie", Chapter: "Neuromyelitis-optica-Spektrum-Erkrankungen", Length: "408", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/OI0I1h", Error: 0},
{Day: 67, Importance: 3, Subject: "Neurologie", Chapter: "Amyotrophe Lateralsklerose", Length: "1343", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/LR0wnf", Error: 0},
{Day: 67, Importance: 4, Subject: "Neurologie", Chapter: "Spinale Muskelatrophien", Length: "498", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/MR0Mnf", Error: 0},
{Day: 67, Importance: 5, Subject: "Neurologie", Chapter: "Myasthenia gravis", Length: "1388", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/DR016f", Error: 0},
{Day: 67, Importance: 6, Subject: "Neurologie", Chapter: "Myotone Dystrophien und nicht-dystrophe Myotonien", Length: "1110", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/uR0pKf", Error: 0},
{Day: 67, Importance: 7, Subject: "Neurologie", Chapter: "Progressive Muskeldystrophien", Length: "905", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/8R0OKf", Error: 0},
{Day: 67, Importance: 8, Subject: "Neurologie", Chapter: "Stiff-Person-Syndrom", Length: "337", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/wR0h6f", Error: 0},
{Day: 67, Importance: 9, Subject: "Neurologie", Chapter: "Dystonie", Length: "399", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/A30ROf", Error: 0},
{Day: 67, Importance: 10, Subject: "Neurologie", Chapter: "Hereditäre spastische Paraplegie", Length: "212", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/HQYKxK/article/oR00Lf", Error: 0},
{Day: 68, Importance: 1, Subject: "Neurologie", Chapter: "Tumoren des zentralen Nervensystems", Length: "1026", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK/article/H50Klg", Error: 0},
{Day: 68, Importance: 2, Subject: "Neurologie", Chapter: "Gliome", Length: "870", Imppact: 1.3571428571428572, Url: "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK/article/7504lg", Error: 0},
{Day: 68, Importance: 3, Subject: "Neurologie", Chapter: "Meningeom", Length: "541", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK/article/I30YPf", Error: 0},
{Day: 68, Importance: 4, Subject: "Neurologie", Chapter: "Vestibularisschwannom und andere Neurinome", Length: "754", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK/article/H30KPf", Error: 0},
{Day: 68, Importance: 5, Subject: "Neurologie", Chapter: "Meningeosis neoplastica", Length: "306", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/rQYfxK/article/XR09lf", Error: 0},
{Day: 68, Importance: 6, Subject: "Neurologie", Chapter: "Hirnnerven-Syndrome", Length: "1263", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/IQYYxK/article/tR0XKf", Error: 0},
{Day: 68, Importance: 7, Subject: "Neurologie", Chapter: "Periphere Fazialisparese", Length: "954", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/FR0gKf", Error: 0},
{Day: 68, Importance: 8, Subject: "Neurologie", Chapter: "Syndrome der Schädelbasis", Length: "751", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/IQYYxK/article/P50W4g", Error: 0},
{Day: 68, Importance: 9, Subject: "Neurologie", Chapter: "Komplettes Querschnittsyndrom", Length: "402", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/IQYYxK/article/Wi0Pqf", Error: 0},
{Day: 68, Importance: 10, Subject: "Neurologie", Chapter: "Inkomplette Querschnittsyndrome", Length: "509", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/IQYYxK/article/NR0-Mf", Error: 0},
{Day: 68, Importance: 11, Subject: "Neurologie", Chapter: "Arteria-spinalis-anterior-Syndrom", Length: "386", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/IQYYxK/article/5R0inf", Error: 0},
{Day: 68, Importance: 12, Subject: "Neurologie", Chapter: "Zervikale Myelopathie", Length: "365", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/X509ig", Error: 0},
{Day: 68, Importance: 13, Subject: "Neurologie", Chapter: "Degenerative Spinalkanalstenose", Length: "509", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/JR0sLf", Error: 0},
{Day: 69, Importance: 1, Subject: "Neurologie", Chapter: "Neurophysiologische Diagnostik", Length: "831", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/JQYsCK/article/Cn0qvg", Error: 0},
{Day: 69, Importance: 2, Subject: "Neurologie", Chapter: "Periphere Nervenläsionen", Length: "1056", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/Zi0ZJf", Error: 0},
{Day: 69, Importance: 3, Subject: "Neurologie", Chapter: "Läsion des N. radialis", Length: "504", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/_R05pf", Error: 0},
{Day: 69, Importance: 4, Subject: "Neurologie", Chapter: "Läsion des N. ulnaris", Length: "771", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/AR0Rpf", Error: 0},
{Day: 69, Importance: 5, Subject: "Neurologie", Chapter: "Läsion des N. medianus", Length: "619", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/zR0rpf", Error: 0},
{Day: 69, Importance: 6, Subject: "Neurologie", Chapter: "Neuralgische Amyotrophie", Length: "219", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/0i0eJf", Error: 0},
{Day: 69, Importance: 7, Subject: "Neurologie", Chapter: "Polyneuropathie", Length: "2327", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/qR0CLf", Error: 0},
{Day: 69, Importance: 8, Subject: "Neurologie", Chapter: "Guillain-Barré-Syndrom", Length: "1344", Imppact: 1.7142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/7R04of", Error: 0},
{Day: 69, Importance: 9, Subject: "Neurologie", Chapter: "Vitamin-B12-Mangel", Length: "1037", Imppact: 1.6428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/sQYtxK/article/6R0jLf", Error: 0},
{Day: 70, Importance: 1, Subject: "Psychiatrie", Chapter: "Psychopathologischer Befund", Length: "2061", Imppact: 1.8571428571428572, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/pM0Lpg", Error: 0},
{Day: 70, Importance: 2, Subject: "Psychiatrie", Chapter: "Psychotherapeutische Verfahren (Klinik)", Length: "2238", Imppact: 1.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/PN0WYg", Error: 0},
{Day: 70, Importance: 3, Subject: "Psychiatrie", Chapter: "Delir", Length: "1581", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/6P0jfT", Error: 0},
{Day: 70, Importance: 4, Subject: "Psychiatrie", Chapter: "Demenzen", Length: "1598", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/v30A4f", Error: 0},
{Day: 70, Importance: 5, Subject: "Psychiatrie", Chapter: "Alzheimer-Krankheit", Length: "701", Imppact: 1.3571428571428572, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/D301kf", Error: 0},
{Day: 70, Importance: 6, Subject: "Psychiatrie", Chapter: "Frontotemporale Demenz", Length: "535", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/w30hkf", Error: 0},
{Day: 70, Importance: 7, Subject: "Psychiatrie", Chapter: "Vaskuläre Demenz", Length: "463", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/930Nkf", Error: 0},
{Day: 70, Importance: 8, Subject: "Psychiatrie", Chapter: "Somatoforme Störungen", Length: "593", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/MP0M2T", Error: 0},
{Day: 70, Importance: 9, Subject: "Psychiatrie", Chapter: "Unipolare Depression", Length: "1584", Imppact: 1.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/PP0WUT", Error: 0},
{Day: 70, Importance: 10, Subject: "Psychiatrie", Chapter: "Bipolare affektive Störung", Length: "1489", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/4P03UT", Error: 0},
{Day: 70, Importance: 11, Subject: "Psychiatrie", Chapter: "Neuromodulationsverfahren", Length: "428", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/GQYBxK/article/wM0hIg", Error: 0},
{Day: 71, Importance: 1, Subject: "Psychiatrie", Chapter: "Zwangsstörungen", Length: "751", Imppact: 1.7857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/OP0IUT", Error: 0},
{Day: 71, Importance: 2, Subject: "Psychiatrie", Chapter: "Reaktionen auf schwere Belastungen und Anpassungsstörungen", Length: "1359", Imppact: 2.857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/lP0vUT", Error: 0},
{Day: 71, Importance: 3, Subject: "Psychiatrie", Chapter: "Dissoziative Störungen", Length: "654", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/NP0-UT", Error: 0},
{Day: 71, Importance: 4, Subject: "Psychiatrie", Chapter: "Opioidbezogene Störungen", Length: "635", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/Ar0RPh", Error: 0},
{Day: 71, Importance: 5, Subject: "Psychiatrie", Chapter: "Cannabinoide", Length: "605", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/_r05Ph", Error: 0},
{Day: 71, Importance: 6, Subject: "Psychiatrie", Chapter: "Sedativa (Intoxikation und Abhängigkeit)", Length: "531", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/zr0rPh", Error: 0},
{Day: 71, Importance: 7, Subject: "Psychiatrie", Chapter: "Rauchen und Tabakkonsum", Length: "445", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/Z70Z4h", Error: 0},
{Day: 71, Importance: 8, Subject: "Psychiatrie", Chapter: "Psychostimulanzien", Length: "592", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/-r0DPh", Error: 0},
{Day: 71, Importance: 9, Subject: "Psychiatrie", Chapter: "Alkoholbezogene Störungen", Length: "1975", Imppact: 1.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/KP0UfT", Error: 0},
{Day: 71, Importance: 10, Subject: "Psychiatrie", Chapter: "Wernicke-Enzephalopathie", Length: "678", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/9R0N6f", Error: 0},
{Day: 71, Importance: 11, Subject: "Psychiatrie", Chapter: "Schizophrenie", Length: "2520", Imppact: 1.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/tQYXBK/article/pP0LfT", Error: 0},
{Day: 72, Importance: 1, Subject: "Psychiatrie", Chapter: "Persönlichkeitsstörungen", Length: "743", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/FQYgBK/article/nP072T", Error: 0},
{Day: 72, Importance: 2, Subject: "Psychiatrie", Chapter: "Borderline-Persönlichkeitsstörung", Length: "752", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/FQYgBK/article/LP0w2T", Error: 0},
{Day: 72, Importance: 3, Subject: "Psychiatrie", Chapter: "Tiefgreifende Entwicklungsstörungen", Length: "1057", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/FQYgBK/article/IP0YTT", Error: 0},
{Day: 72, Importance: 4, Subject: "Psychiatrie", Chapter: "Tic-Störungen", Length: "595", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/FQYgBK/article/sP0tTT", Error: 0},
{Day: 72, Importance: 5, Subject: "Psychiatrie", Chapter: "Essstörungen", Length: "1462", Imppact: 2.7142857142857144, Url: "https://next.amboss.com/de/courses/AQ0RAf/FQYgBK/article/GP0BTT", Error: 0},
{Day: 72, Importance: 6, Subject: "Psychiatrie", Chapter: "Angststörungen", Length: "1126", Imppact: 2.642857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/FQYgBK/article/kP0mUT", Error: 0},
{Day: 72, Importance: 7, Subject: "Psychiatrie", Chapter: "Insomnien", Length: "612", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/FQYgBK/article/t70Xnh", Error: 0},
{Day: 72, Importance: 8, Subject: "Psychiatrie", Chapter: "Parasomnien", Length: "664", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/FQYgBK/article/tP0XgT", Error: 0},
{Day: 73, Importance: 1, Subject: "Psychiatrie", Chapter: "Verhaltens- und emotionale Störungen im Kindes- und Jugendalter", Length: "608", Imppact: 1.1428571428571428, Url: "https://next.amboss.com/de/courses/AQ0RAf/8QYOBK/article/_5055g", Error: 0},
{Day: 73, Importance: 2, Subject: "Psychiatrie", Chapter: "Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung", Length: "590", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/8QYOBK/article/rP0fTT", Error: 0},
{Day: 73, Importance: 3, Subject: "Psychiatrie", Chapter: "Geschlechtsinkongruenz", Length: "423", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/8QYOBK/article/DM01Ig", Error: 0},
{Day: 73, Importance: 4, Subject: "Psychiatrie", Chapter: "Paraphile Störungen", Length: "321", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/8QYOBK/article/Xr09fh", Error: 0},
{Day: 73, Importance: 5, Subject: "Psychiatrie", Chapter: "Suizidalität", Length: "2122", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/8QYOBK/article/8P0OgT", Error: 0},
{Day: 73, Importance: 6, Subject: "Psychiatrie", Chapter: "Betreuung und Zwangsmaßnahmen", Length: "1383", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/8QYOBK/article/uP0pgT", Error: 0},
{Day: 74, Importance: 1, Subject: "Pharmakologie", Chapter: "Pharmakologische Grundlagen", Length: "1932", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/7N04cg", Error: 0},
{Day: 74, Importance: 2, Subject: "Pharmakologie", Chapter: "Arzneimittelrezept", Length: "613", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/XM09Mg", Error: 0},
{Day: 74, Importance: 3, Subject: "Pharmakologie", Chapter: "Parasympathomimetika", Length: "446", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/HN0Kcg", Error: 0},
{Day: 74, Importance: 4, Subject: "Pharmakologie", Chapter: "Parasympatholytika", Length: "637", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/sN0tcg", Error: 0},
{Day: 74, Importance: 5, Subject: "Pharmakologie", Chapter: "Anticholinerges Syndrom", Length: "628", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/Yt0nX3", Error: 0},
{Day: 74, Importance: 6, Subject: "Pharmakologie", Chapter: "β2-Sympathomimetika", Length: "290", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/GN0Bcg", Error: 0},
{Day: 74, Importance: 7, Subject: "Pharmakologie", Chapter: "Sympathomimetika", Length: "1050", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/tN0X1g", Error: 0},
{Day: 74, Importance: 8, Subject: "Pharmakologie", Chapter: "Antisympathotonika", Length: "705", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/8N0O1g", Error: 0},
{Day: 74, Importance: 9, Subject: "Pharmakologie", Chapter: "Betablocker", Length: "857", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/uN0p1g", Error: 0},
{Day: 74, Importance: 10, Subject: "Pharmakologie", Chapter: "Calciumantagonisten", Length: "602", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/cm0aeg", Error: 0},
{Day: 74, Importance: 11, Subject: "Pharmakologie", Chapter: "RAAS-Inhibitoren", Length: "778", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/uQYpBK/article/1m02eg", Error: 0},
{Day: 75, Importance: 1, Subject: "Pharmakologie", Chapter: "Amiodaron", Length: "512", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/Xm09Vg", Error: 0},
{Day: 75, Importance: 2, Subject: "Pharmakologie", Chapter: "Nitrate und Molsidomin", Length: "406", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/Wm0Peg", Error: 0},
{Day: 75, Importance: 3, Subject: "Pharmakologie", Chapter: "Phosphodiesterase-Hemmer", Length: "449", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/em0xeg", Error: 0},
{Day: 75, Importance: 4, Subject: "Pharmakologie", Chapter: "Herzglykoside", Length: "664", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/Vm0Geg", Error: 0},
{Day: 75, Importance: 5, Subject: "Pharmakologie", Chapter: "Thrombozytenaggregationshemmer", Length: "996", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/Um0bUg", Error: 0},
{Day: 75, Importance: 6, Subject: "Pharmakologie", Chapter: "Parenterale Antikoagulanzien", Length: "974", Imppact: 1.2142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/2m0TUg", Error: 0},
{Day: 75, Importance: 7, Subject: "Pharmakologie", Chapter: "Orale Antikoagulanzien", Length: "1658", Imppact: 2.7142857142857144, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/Tm06Ug", Error: 0},
{Day: 75, Importance: 8, Subject: "Pharmakologie", Chapter: "Diuretika", Length: "364", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/gm0FUg", Error: 0},
{Day: 75, Importance: 9, Subject: "Pharmakologie", Chapter: "Thiaziddiuretika", Length: "429", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/Sm0yUg", Error: 0},
{Day: 75, Importance: 10, Subject: "Pharmakologie", Chapter: "Schleifendiuretika", Length: "589", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/hm0c2g", Error: 0},
{Day: 75, Importance: 11, Subject: "Pharmakologie", Chapter: "Kaliumsparende Diuretika", Length: "564", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/3m0S2g", Error: 0},
{Day: 75, Importance: 12, Subject: "Pharmakologie", Chapter: "Überblick über Vergiftungen", Length: "1153", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/EQY8BK/article/Af0RK2", Error: 0},
{Day: 76, Importance: 1, Subject: "Pharmakologie", Chapter: "Antihistaminika", Length: "501", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/vQYABK/article/Pm0Wfg", Error: 0},
{Day: 76, Importance: 2, Subject: "Pharmakologie", Chapter: "Glucocorticoide", Length: "926", Imppact: 1.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/vQYABK/article/km0mfg", Error: 0},
{Day: 76, Importance: 3, Subject: "Pharmakologie", Chapter: "Protonenpumpenhemmer", Length: "272", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/vQYABK/article/rm0fSg", Error: 0},
{Day: 76, Importance: 4, Subject: "Pharmakologie", Chapter: "Lipidsenker", Length: "1010", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/vQYABK/article/am0QVg", Error: 0},
{Day: 76, Importance: 5, Subject: "Pharmakologie", Chapter: "Antidiabetika", Length: "1393", Imppact: 2.0714285714285716, Url: "https://next.amboss.com/de/courses/AQ0RAf/vQYABK/article/7m04Sg", Error: 0},
{Day: 76, Importance: 6, Subject: "Pharmakologie", Chapter: "Insuline", Length: "616", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/vQYABK/article/Gm0BSg", Error: 0},
{Day: 76, Importance: 7, Subject: "Pharmakologie", Chapter: "Bisphosphonate und andere antiosteoporotische Medikamente", Length: "575", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/vQYABK/article/tm0Xhg", Error: 0},
{Day: 76, Importance: 8, Subject: "Pharmakologie", Chapter: "Thyreostatika", Length: "402", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/vQYABK/article/Fm0ghg", Error: 0},
{Day: 76, Importance: 9, Subject: "Pharmakologie", Chapter: "Hormonelle Kontrazeption", Length: "1248", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/vQYABK/article/Em08hg", Error: 0},
{Day: 76, Importance: 10, Subject: "Pharmakologie", Chapter: "Pharmakotherapie in der Schwangerschaft", Length: "469", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/vQYABK/article/dm0oeg", Error: 0},
{Day: 77, Importance: 1, Subject: "Pharmakologie", Chapter: "Antipsychotika", Length: "1491", Imppact: 1.4285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/DQY1yK/article/AN0Rdg", Error: 0},
{Day: 77, Importance: 2, Subject: "Pharmakologie", Chapter: "Antidepressiva", Length: "1131", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/DQY1yK/article/_N05dg", Error: 0},
{Day: 77, Importance: 3, Subject: "Pharmakologie", Chapter: "Lithium", Length: "855", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/DQY1yK/article/zN0rdg", Error: 0},
{Day: 77, Importance: 4, Subject: "Pharmakologie", Chapter: "Anfallssuppressiva", Length: "676", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/DQY1yK/article/-N0Ddg", Error: 0},
{Day: 77, Importance: 5, Subject: "Pharmakologie", Chapter: "Parkinson-Medikamente", Length: "880", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/DQY1yK/article/Zm0ZVg", Error: 0},
{Day: 78, Importance: 1, Subject: "Pharmakologie", Chapter: "Antibiotika", Length: "2664", Imppact: 1.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/wQYhyK/article/mm0VTg", Error: 0},
{Day: 78, Importance: 2, Subject: "Pharmakologie", Chapter: "Virostatika", Length: "799", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/wQYhyK/article/pm0Lgg", Error: 0},
{Day: 78, Importance: 3, Subject: "Pharmakologie", Chapter: "Interferontherapie", Length: "356", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/wQYhyK/article/1K022S", Error: 0},
{Day: 78, Importance: 4, Subject: "Pharmakologie", Chapter: "Antimykotika", Length: "583", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/wQYhyK/article/6m0jgg", Error: 0},
{Day: 78, Importance: 5, Subject: "Pharmakologie", Chapter: "Immunsuppressiva", Length: "1954", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/wQYhyK/article/qM0Cpg", Error: 0},
{Day: 78, Importance: 6, Subject: "Pharmakologie", Chapter: "Chloroquin und Hydroxychloroquin", Length: "241", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/wQYhyK/article/8M0Oqg", Error: 0},
{Day: 78, Importance: 7, Subject: "Pharmakologie", Chapter: "Zytostatika", Length: "1559", Imppact: 1.7142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/wQYhyK/article/4m03fg", Error: 0},
{Day: 78, Importance: 8, Subject: "Pharmakologie", Chapter: "Medikamente der zielgerichteten Tumortherapie", Length: "1197", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/wQYhyK/article/TE06E3", Error: 0},
{Day: 78, Importance: 9, Subject: "Pharmakologie", Chapter: "Antiemetika", Length: "639", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/wQYhyK/article/qm0Cgg", Error: 0},
{Day: 79, Importance: 1, Subject: "Radiologie", Chapter: "Röntgen", Length: "1265", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/9QYNyK/article/in0JGg", Error: 0},
{Day: 79, Importance: 2, Subject: "Radiologie", Chapter: "Computertomografie", Length: "1064", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/9QYNyK/article/KN0UXg", Error: 0},
{Day: 79, Importance: 3, Subject: "Radiologie", Chapter: "Magnetresonanztomografie", Length: "997", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/9QYNyK/article/pN0LXg", Error: 0},
{Day: 79, Importance: 4, Subject: "Radiologie", Chapter: "Strahlentherapie", Length: "545", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/9QYNyK/article/L50wkg", Error: 0},
{Day: 79, Importance: 5, Subject: "Radiologie", Chapter: "Radioiodtherapie", Length: "362", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/9QYNyK/article/Gl0ByT", Error: 0},
{Day: 79, Importance: 6, Subject: "Radiologie", Chapter: "Schilddrüsenszintigrafie", Length: "550", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/9QYNyK/article/il0J9T", Error: 0},
{Day: 79, Importance: 7, Subject: "Radiologie", Chapter: "Knochenszintigrafie", Length: "373", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/9QYNyK/article/JN0sXg", Error: 0},
{Day: 79, Importance: 8, Subject: "Radiologie", Chapter: "Ösophagusbreischluck und Störungen der Ösophagusmotilität", Length: "330", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/9QYNyK/article/D501mg", Error: 0},
{Day: 79, Importance: 9, Subject: "Radiologie", Chapter: "Tag 79 M2-Lernplan - Wiederholung des Querschnittbereichs Radiologie", Length: "191", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/9QYNyK/article/Bq0z0h", Error: 0},
{Day: 80, Importance: 1, Subject: "Arbeits- und Umweltmedizin", Chapter: "Arbeitsmedizinische Organe und Gesetze", Length: "946", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/wQ0hyf", Error: 0},
{Day: 80, Importance: 2, Subject: "Arbeits- und Umweltmedizin", Chapter: "Verhütung und Früherkennung beruflich bedingter Schäden", Length: "498", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/9Q0Nyf", Error: 0},
{Day: 80, Importance: 3, Subject: "Arbeits- und Umweltmedizin", Chapter: "Anerkennung von Berufskrankheiten", Length: "363", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/yQ0dAf", Error: 0},
{Day: 80, Importance: 4, Subject: "Arbeits- und Umweltmedizin", Chapter: "Messkriterien der Arbeitsplatzbelastung", Length: "430", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/BQ0zyf", Error: 0},
{Day: 80, Importance: 5, Subject: "Arbeits- und Umweltmedizin", Chapter: "Berufskrankheiten durch physikalische Belastungen", Length: "516", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/-Q0DAf", Error: 0},
{Day: 80, Importance: 6, Subject: "Arbeits- und Umweltmedizin", Chapter: "Erkrankungen durch Metalle", Length: "866", Imppact: 1.0714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/AQ0RAf", Error: 0},
{Day: 80, Importance: 7, Subject: "Arbeits- und Umweltmedizin", Chapter: "Erkrankungen durch organische Lösungsmittel, Insektizide, Halogenkohlenwasserstoffe, Benzol und Homologe", Length: "961", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/zQ0rAf", Error: 0},
{Day: 80, Importance: 8, Subject: "Arbeits- und Umweltmedizin", Chapter: "Lungenerkrankungen durch Inhalation anorganischer Stäube", Length: "304", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/aj0Q_f", Error: 0},
{Day: 80, Importance: 9, Subject: "Arbeits- und Umweltmedizin", Chapter: "Asbestose und Mesotheliom", Length: "653", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/lh0vVf", Error: 0},
{Day: 80, Importance: 10, Subject: "Arbeits- und Umweltmedizin", Chapter: "Silikose", Length: "509", Imppact: 0.7857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/Oh0IVf", Error: 0},
{Day: 80, Importance: 11, Subject: "Arbeits- und Umweltmedizin", Chapter: "Lungenerkrankungen durch Inhalation organischer Stäube", Length: "316", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/Yj0n_f", Error: 0},
{Day: 80, Importance: 12, Subject: "Arbeits- und Umweltmedizin", Chapter: "Erkrankungen durch Einwirkung reizender Gase", Length: "341", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/_Q05Af", Error: 0},
{Day: 80, Importance: 13, Subject: "Arbeits- und Umweltmedizin", Chapter: "Berufserkrankungen der Haut", Length: "365", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/RQ0lDf", Error: 0},
{Day: 80, Importance: 14, Subject: "Arbeits- und Umweltmedizin", Chapter: "Erkrankungen durch chlorierte und polyzyklische aromatische Kohlenwasserstoffe", Length: "287", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/CQYqyK/article/050eig", Error: 0},
{Day: 81, Importance: 1, Subject: "Rechtsmedizin", Chapter: "Ärztliche Rechtskunde", Length: "3545", Imppact: 1.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/xQYEyK/article/DO01uT", Error: 0},
{Day: 81, Importance: 2, Subject: "Rechtsmedizin", Chapter: "Thanatologie", Length: "1647", Imppact: 2.357142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/xQYEyK/article/vP0AgT", Error: 0},
{Day: 81, Importance: 3, Subject: "Rechtsmedizin", Chapter: "Verletzungen und Gewalteinwirkung", Length: "836", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/xQYEyK/article/9P0NST", Error: 0},
{Day: 82, Importance: 1, Subject: "Rechtsmedizin", Chapter: "Strangulation und Ersticken", Length: "833", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/BQYzyK/article/BP0zST", Error: 0},
{Day: 82, Importance: 2, Subject: "Rechtsmedizin", Chapter: "Ertrinken", Length: "582", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/BQYzyK/article/AP0RhT", Error: 0},
{Day: 82, Importance: 3, Subject: "Rechtsmedizin", Chapter: "Zeichen thermischer Schädigungen", Length: "683", Imppact: 0.6428571428571429, Url: "https://next.amboss.com/de/courses/AQ0RAf/BQYzyK/article/Z40Z3T", Error: 0},
{Day: 82, Importance: 4, Subject: "Rechtsmedizin", Chapter: "Schussverletzungen", Length: "560", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/BQYzyK/article/_P05hT", Error: 0},
{Day: 82, Importance: 5, Subject: "Rechtsmedizin", Chapter: "Spurensicherung", Length: "408", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/BQYzyK/article/zP0rhT", Error: 0},
{Day: 82, Importance: 6, Subject: "Rechtsmedizin", Chapter: "Artifizielle Störungen", Length: "183", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/BQYzyK/article/040e3T", Error: 0},
{Day: 83, Importance: 1, Subject: "Pathologie", Chapter: "Zelluläre Veränderungen und Anpassungsreaktionen", Length: "1162", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/yQYdAK/article/VP0GdT", Error: 0},
{Day: 83, Importance: 2, Subject: "Pathologie", Chapter: "Untersuchungsmethoden in der Pathologie", Length: "1129", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/yQYdAK/article/dP0odT", Error: 0},
{Day: 83, Importance: 3, Subject: "Pathologie", Chapter: "Allgemeine Onkologie", Length: "2181", Imppact: 1.2142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/yQYdAK/article/WM0Png", Error: 0},
{Day: 83, Importance: 4, Subject: "Pathologie", Chapter: "Tumormarker", Length: "492", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/yQYdAK/article/ol00BT", Error: 0},
{Day: 83, Importance: 5, Subject: "Pathologie", Chapter: "Neurokutane Syndrome", Length: "679", Imppact: 0.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/yQYdAK/article/Rk0lnT", Error: 0},
{Day: 83, Importance: 6, Subject: "Pathologie", Chapter: "Paraneoplastische Syndrome", Length: "765", Imppact: 0.2857142857142857, Url: "https://next.amboss.com/de/courses/AQ0RAf/yQYdAK/article/lk0vLT", Error: 0},
{Day: 83, Importance: 7, Subject: "Pathologie", Chapter: "Systemische Amyloidose", Length: "838", Imppact: 0.5714285714285714, Url: "https://next.amboss.com/de/courses/AQ0RAf/yQYdAK/article/fP0kVT", Error: 0},
{Day: 84, Importance: 1, Subject: "Epidemiologie", Chapter: "Grundbegriffe medizinischer Forschung", Length: "743", Imppact: 0.35714285714285715, Url: "https://next.amboss.com/de/courses/AQ0RAf/AQYRAK/article/nn07Fg", Error: 0},
{Day: 84, Importance: 2, Subject: "Epidemiologie", Chapter: "Angewandte Statistik", Length: "2782", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/AQYRAK/article/CI0qUh", Error: 0},
{Day: 84, Importance: 3, Subject: "Epidemiologie", Chapter: "Epidemiologie und Wahrscheinlichkeiten", Length: "2621", Imppact: 5.071428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/AQYRAK/article/Xj09_f", Error: 0},
{Day: 84, Importance: 4, Subject: "Epidemiologie", Chapter: "Studientypen der medizinischen Forschung", Length: "2315", Imppact: 2.5, Url: "https://next.amboss.com/de/courses/AQ0RAf/AQYRAK/article/1j02zf", Error: 0},
{Day: 84, Importance: 5, Subject: "Epidemiologie", Chapter: "Sammelsurium der Epidemiologie", Length: "1299", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/AQYRAK/article/dr0oTh", Error: 0},
{Day: 84, Importance: 6, Subject: "Epidemiologie", Chapter: "Diagnose- und Klassifikationssysteme", Length: "1199", Imppact: 0.7142857142857143, Url: "https://next.amboss.com/de/courses/AQ0RAf/AQYRAK/article/dj0ozf", Error: 0},
{Day: 84, Importance: 7, Subject: "Epidemiologie", Chapter: "Qualitätsmanagement", Length: "570", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/AQYRAK/article/TM06Lg", Error: 0},
{Day: 84, Importance: 8, Subject: "Epidemiologie", Chapter: "Prävention", Length: "923", Imppact: 0.8571428571428571, Url: "https://next.amboss.com/de/courses/AQ0RAf/AQYRAK/article/Wj0Pzf", Error: 0},
{Day: 85, Importance: 1, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Soziale Sicherung", Length: "1462", Imppact: 1.4285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/Uj0b-f", Error: 0},
{Day: 85, Importance: 2, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Gesetzliche Unfallversicherung", Length: "745", Imppact: 0.9285714285714286, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/jP0_eT", Error: 0},
{Day: 85, Importance: 3, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Gesetzliche Krankenversicherung", Length: "2505", Imppact: 2.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/HM0KJg", Error: 0},
{Day: 85, Importance: 4, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Ökonomische Aspekte von Gesundheit und Krankheit", Length: "440", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/2j0T-f", Error: 0},
{Day: 85, Importance: 5, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Behinderung und Einschränkung der Arbeitsfähigkeit", Length: "622", Imppact: 0.0, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/ej0xzf", Error: 0},
{Day: 85, Importance: 6, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Grundlagen der allgemeinmedizinischen Versorgung", Length: "1310", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/Rn0lGg", Error: 0},
{Day: 85, Importance: 7, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Übersicht Geriatrie", Length: "1258", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/On0Itg", Error: 0},
{Day: 85, Importance: 8, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Palliativmedizin", Length: "2655", Imppact: 0.21428571428571427, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/3n0SGg", Error: 0},
{Day: 85, Importance: 9, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Rehabilitation", Length: "1148", Imppact: 1.7857142857142858, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/kn0mtg", Error: 0},
{Day: 85, Importance: 10, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Physikalische Therapie", Length: "782", Imppact: 0.14285714285714285, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/WN0PZg", Error: 0},
{Day: 85, Importance: 11, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Phytotherapeutika", Length: "1310", Imppact: 0.42857142857142855, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/Rj0lZT", Error: 0},
{Day: 85, Importance: 12, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Komplementärmedizin einschließlich Naturheilkunde", Length: "786", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/VN0GZg", Error: 0},
{Day: 85, Importance: 13, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Ernährungsmedizin", Length: "840", Imppact: 0.07142857142857142, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/kcamcj", Error: 0},
{Day: 85, Importance: 14, Subject: "Sozialmedizin & Alternative Heilverfahren und Rehabilitation", Chapter: "Zweites Staatsexamen", Length: "1028", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/_QY5AK/article/eL0x9g", Error: 0},
{Day: 86, Importance: 1, Subject: "Wiederholung: 2022/H Tag 1", Chapter: "Tag 86 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/zQYrAK/article/yq0dah", Error: 0},
{Day: 87, Importance: 1, Subject: "Wiederholung: 2022/H Tag 2", Chapter: "Tag 87 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/-QYDAK/article/Aq0Rah", Error: 0},
{Day: 88, Importance: 1, Subject: "Wiederholung: 2022/H Tag 3", Chapter: "Tag 88 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/ZjYZ_K/article/_q05ah", Error: 0},
{Day: 89, Importance: 1, Subject: "Wiederholung: 2023/F Tag 1", Chapter: "Tag 89 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/0jYe_K/article/zq0rah", Error: 0},
{Day: 90, Importance: 1, Subject: "Wiederholung: 2023/F Tag 2", Chapter: "Tag 90 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/ajYQ_K/article/-q0Dah", Error: 0},
{Day: 91, Importance: 1, Subject: "Wiederholung: 2023/F Tag 3", Chapter: "Tag 91 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "222", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/YjYn_K/article/ZI0ZYh", Error: 0},
{Day: 92, Importance: 1, Subject: "Generalprobe: 2023/H Tag 1", Chapter: "Tag 92 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "224", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/bjYH_K/article/0I0eYh", Error: 0},
{Day: 93, Importance: 1, Subject: "Generalprobe: 2023/H Tag 2", Chapter: "Tag 93 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "224", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/XjY9_K/article/aI0QYh", Error: 0},
{Day: 94, Importance: 1, Subject: "Generalprobe: 2023/H Tag 3", Chapter: "Tag 94 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/cjYazK/article/YI0nYh", Error: 0},
{Day: 95, Importance: 1, Subject: "Generalprobe: 2024/F Tag 1", Chapter: "Tag 95 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/1jY2zK/article/bI0HYh", Error: 0},
{Day: 96, Importance: 1, Subject: "Generalprobe: 2024/F Tag 2", Chapter: "Tag 96 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/WjYPzK/article/XI09Yh", Error: 0},
{Day: 97, Importance: 1, Subject: "Generalprobe: 2024/F Tag 3", Chapter: "Tag 97 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/djYozK/article/cI0abh", Error: 0},
{Day: 98, Importance: 1, Subject: "Generalprobe: 2024/H Tag 1", Chapter: "Tag 98 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/VjYGzK/article/1I02bh", Error: 0},
{Day: 99, Importance: 1, Subject: "Generalprobe: 2024/H Tag 2", Chapter: "Tag 99 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/ejYxzK/article/WI0Pbh", Error: 0},
{Day: 100, Importance: 1, Subject: "Generalprobe: 2024/H Tag 3", Chapter: "Tag 100 Lernplan 2. STEX – Wiederholungs- und Probe-Examenszeit", Length: "223", Imppact: 0, Url: "https://next.amboss.com/de/courses/AQ0RAf/UjYb-K/article/dI0obh", Error: 0}],
    hs = {
        lastUpdated: Ku,
        heading: Au,
        numberOfDays: Pu,
        pageTickValues: vu,
        yFragenDomain: zu,
        fragenzahl: Zu,
        dayUrls: Tu,
        data: wu
    };
var Nu = te(`<ul><li> </li> <li>Der IMPPAct gibt an, wieviele Fragen in den letzten Jahren im Schnitt zu diesem Kapitel dran
        kamen.</li> <li>Alternativ könnt ihr stattdessen auch "Fragen pro Seite" (nicht Fragen pro Kapitel) verwenden</li> <li>Je länger ein Balken, desto länger das Kapitel. Je dunkler der Balken, desto mehr Fragen wurden
        dazu gestellt.</li> <li>Die Farben auf der x-Achse haben keine tiefe Bedeutung, sie markieren nur die verschiedenen
        Fächer</li> <li>Die Länge der Kapitel wurde näherungsweise mit 175 Wörtern pro DIN A4 Seite berechnet, da die
        Überschriften, Stichpunktlisten, Tabellen und Bilder viel Platz brauchen. Dies entspricht nicht
        exakt der Anzahl der Bildschirmseiten auf eurem Computer, wenn ihr Amboss aufruft!</li> <li>Die Prozentangaben wieviel ihr schon gelesen/gekreuzt habt, beziehen sich auf die tatsächliche
        Anzahl an Seiten bzw. Fragen.</li> <li>Amboss zählt gelegentlich die IMPPacts neu aus. Wenn ihr merkt dass die Werte nicht mehr
        stimmen, schreibt mir eine Mail.</li></ul>`);









function _u(e, t) {
    Ge(t, !1);
    const r = Sr(),
        a = () => ee(Qe, "$examTypeAndYear", r);
    let s = he("???");
    switch (a()) {
        case "M1_30_old":
            X(s, Ro.lastUpdated);
            break;
        case "M1_50_old":
            X(s, ko.lastUpdated);
            break;
        case "M1_50_Fachfokus_old":
            X(s, Mo.lastUpdated);
            break;
        case "M2_100_old":
            X(s, Yo.lastUpdated);
            break;
        case "M1_30_new":
            X(s, Ko.lastUpdated);
            break;
        case "M1_50_new":
            X(s, Ao.lastUpdated);
            break;
        case "M1_50_Fachfokus_new":
            X(s, Po.lastUpdated);
            break;
        case "M2_100_new":
            X(s, hs.lastUpdated);
            break
    }
    Mt();
    var n = Nu(),
        o = T(n),
        c = T(o);
    Z(o), ae(14), Z(n), Ne(() => Xe(c, `Die Daten für diesen Lernplan wurden zuletzt am ${U(s)??""} geupdated.`)), q(e, n), Oe()
}

function Hu(e, t) {
    Ge(t, !1);
    let r = he();
    const a = () => {
        U(r).openPopup()
    };
    let s = Ce(t, "onClose", 8, () => {}),
        n = [{
            label: "FAQ",
            value: 1,
            component: j0
        }, {
            label: "Bedienung",
            value: 2,
            component: f0
        }, {
            label: "Weitere Infos",
            value: 3,
            component: _u
        }, {
            label: "Rechtliches",
            value: 4,
            component: k0
        }];
    return ke(Qt(e, {
        get onClose() {
            return s()
        },
        children: (o, c) => {
            g0(o, {
                items: n
            })
        },
        $$slots: {
            default: !0
        },
        $$legacy: !0
    }), o => X(r, o), () => U(r)), Yt(t, "open", a), Oe({
        open: a
    })
}
const Ta = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#bcbd22", "#17becf", "#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f", "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#bab0ab", "#7b68ee", "#00CCFF", "#ffa07a"];
var Gu = "@vercel/analytics",
    Ou = "1.3.2",
    Wu = () => {
        window.va || (window.va = function(...t) {
            (window.vaq = window.vaq || []).push(t)
        })
    };

function vo() {
    return typeof window < "u"
}

function zo() {
    try {
        const e = "production"
    } catch {}
    return "production"
}

function Bu(e = "auto") {
    if (e === "auto") {
        window.vam = zo();
        return
    }
    window.vam = e
}

function Vu() {
    return (vo() ? window.vam : zo()) || "production"
}

function wa() {
    return Vu() === "development"
}
var Qu = "https://va.vercel-scripts.com/v1/script.debug.js",
    Fu = "/_vercel/insights/script.js";

function Xu(e = {
    debug: !0
}) {
    var t;
    if (!vo()) return;
    Bu(e.mode), Wu(), e.beforeSend && ((t = window.va) == null || t.call(window, "beforeSend", e.beforeSend));
    const r = e.scriptSrc || (wa() ? Qu : Fu);
    if (document.head.querySelector(`script[src*="${r}"]`)) return;
    const a = document.createElement("script");
    a.src = r, a.defer = !0, a.dataset.sdkn = Gu + (e.framework ? `/${e.framework}` : ""), a.dataset.sdkv = Ou, e.disableAutoTrack && (a.dataset.disableAutoTrack = "1"), e.endpoint && (a.dataset.endpoint = e.endpoint), e.dsn && (a.dataset.dsn = e.dsn), a.onerror = () => {
        const s = wa() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${r}. ${s}`)
    }, wa() && e.debug === !1 && (a.dataset.debug = "false"), document.head.appendChild(a)
}
const $u = new Date("2025-03-11"),
    qu = new Date("2026-10-07");

function Kn(e) {
    return e.includes("M1") ? $u : e.includes("M2") ? qu : new Date
}
const An = ["Ischämischer Schlaganfall", "Epidemiologie und Wahrscheinlichkeiten", "Pneumonie", "Lungenkarzinom", "Mammakarzinom", "Meningitis", "Diabetes mellitus", "Bandscheibenprolaps", "Humangenetik (Klinik)", "Lyme-Borreliose", "Sepsis", "Vorhofflimmern", "Myokardinfarkt", "Reaktionen auf schwere Belastungen und Anpassungsstörungen", "Divertikulose, Divertikelkrankheit und Divertikulitis", "Orale Antikoagulanzien", "Periphere arterielle Verschlusskrankheit", "Subarachnoidalblutung", "Kolorektales Karzinom", "Nosokomiale Infektionen", "Studientypen der medizinischen Forschung", "Essstörungen", "Bakterielle Infektionen von Haut und Weichgewebe", "Angststörungen", "Lungenembolie", "Thanatologie", "Magenkarzinom", "Phlebothrombose", "Cholelithiasis, Cholezystitis und Cholangitis", "Hyperthyreose", "Arterielle Hypertonie", "Hyperurikämie und Gicht", "Morbus Crohn", "Zervixkarzinom", "Pneumothorax", "Antidiabetika", "Herzinsuffizienz", "Rheumatoide Arthritis", "Gesetzliche Krankenversicherung", "Riesenzellarteriitis", "Tuberkulose", "Zystische Fibrose", "Allergische Erkrankungen", "HIV-Infektion", "Psychopathologischer Befund", "Osteoporose", "Nierenzellkarzinom", "Ärztliche Rechtskunde", "Migräne", "Unipolare Depression", "Endokarditis", "Chronisch-obstruktive Lungenerkrankung", "Zwangsstörungen", "Antibiotika", "Chronische Wunden und Wundbehandlung", "Systemischer Lupus erythematodes", "Parkinson-Syndrom und Parkinson-Krankheit", "Maligne Ovarialtumoren", "Sterilität, Infertilität und Impotenz", "Zytostatika", "Infektiöse Mononukleose", "Polyneuropathie", "Guillain-Barré-Syndrom", "Herpes zoster", "Masern", "Malignes Melanom", "Diagnostik in der Gynäkologie", "Axiale Spondylarthritis", "Arthrose", "Systemische Sklerose", "Asthma bronchiale", "Epilepsien und Epilepsiesyndrome", "Rehabilitation", "Endometriose", "Sarkoidose", "Zöliakie", "Weichteilläsionen der Schulter", "Alkohol (Intoxikation und Abhängigkeit)", "Schizophrenie", "Vitamin-B12-Mangel", "Benignes Prostatasyndrom", "Astrozytome und Oligodendrogliome", "Multiple Sklerose", "Glaukom", "Psychotherapeutische Verfahren (Klinik)", "Morbus Perthes", "Antipsychotika", "Aortendissektion", "Neurologische Untersuchung", "Bakterielle Durchfallerkrankungen", "Soziale Sicherung", "Multiples Myelom", "Alzheimer-Krankheit", "Adrenogenitales Syndrom", "Präklinische Traumaversorgung", "Nicht-Opioid-Analgetika", "Metabolisches Syndrom", "Akute Leukämien", "Cushing-Syndrom", "Mesenteriale Ischämie"],
    _t = ["Medizinische Statistik und Testtheorie", "Die Zelle", "Prävention und Gesundheitsförderung", "Arzt-Patient-Beziehung", "Lernen, Kognition und Entwicklung", "Grundlagen der organischen Chemie", "Grundlagen der Demografie und Soziologie", "Visuelles System", "Abbau und Synthese der Glucose", "Kohlenhydrate", "Vitamine (Vorklinik)", "Translation und Proteinbiosynthese", "Gesundheit und Krankheit", "Zellzyklus und Tumorentstehung", "Grundlagen der Mechanik", "Aminosäuren und Proteine", "Hirnnerven", "Unspezifisches Immunsystem", "Atemwege und Lunge", "Aufbau des Herzens", "Grundlagen wissenschaftlicher Studien", "Humangenetik (Vorklinik)", "Signaltransduktion", "Ionisierende Strahlung", "Nebenniere", "Lipide", "Aufbau von DNA und RNA", "Auge und Orbita", "Aufbau der Materie", "Patientenversorgung und Gesundheitssystem"],
    Ju = {
        all: [294, 215, 212, 194, 162, 268, 376, 274, 299, 189, 199, 318, 314, 276, 304, 267, 233, 115, 356, 360, 331, 330, 377, 389, 156, 388, 357, 213, 285, 231, 0, 0, 0, 0, 0, 0],
        at_least_once: [274, 189, 191, 183, 154, 232, 267, 240, 269, 172, 167, 251, 284, 243, 259, 254, 200, 107, 95, 113, 161, 151, 321, 299, 142, 303, 355, 211, 285, 229, 0, 0, 0, 0, 0, 0],
        high_yield: [110, 71, 62, 69, 51, 77, 91, 87, 128, 80, 63, 98, 74, 100, 83, 122, 53, 33, 23, 16, 31, 48, 146, 82, 50, 128, 218, 105, 178, 130, 0, 0, 0, 0, 0, 0]
    },
    ed = {
        all: [227, 130, 134, 177, 198, 211, 111, 126, 167, 207, 140, 167, 146, 153, 189, 130, 321, 218, 219, 118, 101, 166, 138, 132, 170, 156, 157, 356, 360, 331, 263, 233, 211, 188, 201, 156, 250, 138, 357, 213, 264, 165, 87, 0, 0, 0, 0, 0, 0, 0],
        at_least_once: [211, 117, 120, 159, 187, 197, 101, 106, 117, 145, 112, 158, 124, 145, 172, 118, 244, 193, 201, 97, 92, 141, 118, 120, 164, 133, 144, 95, 113, 161, 112, 189, 171, 136, 163, 142, 172, 131, 355, 211, 264, 163, 87, 0, 0, 0, 0, 0, 0, 0],
        high_yield: [92, 33, 49, 46, 76, 67, 33, 32, 30, 59, 32, 69, 53, 75, 80, 47, 88, 56, 73, 37, 34, 41, 42, 52, 84, 32, 40, 23, 16, 31, 34, 95, 65, 43, 39, 50, 66, 62, 218, 105, 173, 89, 46, 0, 0, 0, 0, 0, 0, 0]
    },
    td = {
        all: [237, 230, 102, 716, 316, 480, 188, 167, 506, 293, 323, 318, 300, 297, 134, 326, 273, 123, 141, 72, 207, 191, 171, 132, 179, 216, 167, 91, 128, 153, 299, 219, 179, 204, 179, 188, 263, 142, 419, 400, 212, 333, 191, 350, 0, 0, 0, 0, 0, 0],
        at_least_once: [207, 200, 96, 208, 263, 337, 152, 133, 183, 244, 236, 225, 279, 272, 119, 283, 253, 117, 133, 67, 184, 183, 153, 124, 151, 204, 157, 69, 115, 135, 236, 200, 164, 186, 151, 169, 249, 136, 346, 316, 212, 330, 191, 347, 0, 0, 0, 0, 0, 0],
        high_yield: [65, 72, 23, 39, 78, 93, 47, 28, 56, 108, 57, 82, 112, 80, 37, 98, 82, 41, 58, 33, 86, 94, 68, 48, 56, 107, 63, 31, 57, 52, 92, 48, 63, 67, 56, 62, 122, 35, 116, 130, 133, 197, 121, 180, 0, 0, 0, 0, 0, 0]
    },
    rd = {
        all: [238, 74, 235, 207, 145, 262, 174, 188, 82, 313, 357, 202, 175, 238, 163, 169, 107, 185, 156, 82, 112, 170, 223, 127, 87, 141, 63, 99, 153, 109, 170, 169, 186, 94, 96, 85, 82, 92, 238, 241, 115, 270, 293, 200, 183, 40, 48, 119, 147, 59, 11, 155, 181, 105, 120, 142, 94, 177, 130, 118, 108, 206, 179, 214, 45, 255, 211, 186, 160, 294, 224, 194, 61, 362, 381, 468, 319, 739, 9, 115, 76, 43, 1, 121, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        at_least_once: [90, 36, 119, 127, 63, 194, 85, 122, 62, 210, 247, 123, 106, 139, 100, 132, 79, 150, 97, 49, 85, 114, 160, 94, 72, 89, 37, 79, 99, 68, 115, 92, 111, 66, 77, 67, 59, 68, 94, 159, 72, 183, 202, 140, 102, 30, 34, 88, 108, 48, 9, 128, 106, 70, 66, 81, 70, 98, 101, 87, 72, 158, 102, 167, 33, 182, 165, 135, 135, 230, 178, 162, 43, 124, 137, 152, 159, 207, 9, 73, 61, 32, 1, 102, 92, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        high_yield: [42, 5, 53, 47, 19, 79, 24, 30, 13, 96, 82, 33, 45, 35, 18, 53, 20, 41, 27, 15, 30, 45, 78, 51, 32, 32, 10, 33, 23, 11, 46, 29, 49, 15, 35, 19, 35, 36, 14, 70, 31, 59, 74, 52, 25, 10, 13, 36, 43, 22, 7, 33, 39, 30, 19, 23, 17, 40, 31, 17, 14, 46, 36, 77, 13, 81, 70, 73, 62, 100, 85, 83, 15, 41, 29, 48, 53, 67, 7, 24, 28, 9, 0, 36, 27, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    ad = {
        M1_30: Ju,
        M1_50: ed,
        M1_50_Fachfokus: td,
        M2_100: rd
    },
    sd = {
        all: [345, 4, 1, 4, 24, 53, 7, 160, 7, 2, 1, 1, 1, 4, 1, 73, 96, 1, 22, 32, 4, 1, 22, 1, 1, 1, 94, 452, 281, 200, 0, 0, 0, 0, 0, 0],
        at_least_once: [81, 0, 0, 0, 9, 7, 0, 22, 0, 0, 0, 0, 0, 0, 0, 6, 8, 0, 5, 5, 0, 0, 3, 0, 0, 0, 26, 108, 78, 54, 0, 0, 0, 0, 0, 0],
        high_yield: [69, 0, 0, 2, 2, 5, 0, 5, 3, 1, 0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 31, 54, 39, 25, 0, 0, 0, 0, 0, 0]
    },
    nd = {
        all: [345, 4, 1, 1, 4, 24, 53, 1, 1, 7, 161, 1, 5, 3, 2, 1, 1, 24, 1, 1, 4, 1, 1, 53, 21, 96, 1, 22, 32, 9, 1, 1, 22, 1, 1, 1, 1, 1, 94, 451, 207, 169, 106, 0, 0, 0, 0, 0, 0, 0],
        at_least_once: [81, 0, 0, 0, 0, 9, 7, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 5, 1, 8, 0, 5, 5, 0, 0, 0, 3, 0, 0, 0, 0, 0, 26, 108, 62, 36, 34, 0, 0, 0, 0, 0, 0, 0],
        high_yield: [69, 0, 0, 0, 2, 2, 5, 0, 0, 0, 5, 0, 3, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 54, 36, 16, 12, 0, 0, 0, 0, 0, 0, 0]
    },
    od = {
        all: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        at_least_once: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        high_yield: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    cd = {
        all: [577, 193, 331, 459, 352, 386, 431, 598, 230, 925, 691, 441, 338, 518, 320, 249, 262, 710, 605, 298, 306, 397, 670, 539, 412, 703, 471, 297, 958, 632, 600, 633, 862, 445, 256, 768, 671, 860, 745, 630, 668, 669, 625, 373, 358, 450, 225, 430, 536, 448, 302, 792, 416, 416, 540, 820, 577, 600, 908, 853, 667, 750, 882, 872, 291, 810, 833, 713, 508, 898, 697, 533, 325, 679, 567, 353, 338, 674, 391, 593, 314, 355, 451, 340, 395, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        at_least_once: [74, 35, 74, 57, 29, 87, 68, 111, 56, 115, 156, 75, 58, 92, 69, 78, 59, 145, 91, 43, 63, 85, 155, 85, 102, 122, 72, 99, 168, 100, 121, 132, 148, 73, 39, 152, 159, 155, 140, 127, 152, 124, 153, 102, 79, 67, 63, 96, 81, 88, 56, 141, 76, 70, 86, 114, 87, 107, 167, 179, 122, 187, 118, 181, 38, 239, 187, 156, 140, 210, 207, 157, 82, 115, 93, 62, 70, 100, 50, 128, 60, 82, 90, 92, 74, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        high_yield: [40, 6, 47, 43, 14, 59, 27, 31, 11, 56, 59, 22, 38, 22, 11, 38, 25, 41, 27, 12, 27, 32, 74, 43, 24, 54, 11, 19, 25, 13, 26, 42, 54, 14, 34, 26, 47, 38, 20, 62, 28, 34, 50, 41, 21, 18, 16, 39, 58, 39, 30, 27, 34, 25, 24, 27, 17, 40, 29, 21, 16, 47, 44, 67, 11, 71, 60, 62, 63, 87, 72, 75, 13, 23, 18, 32, 16, 22, 14, 30, 18, 15, 22, 49, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    pd = {
        M1_30: sd,
        M1_50: nd,
        M1_50_Fachfokus: od,
        M2_100: cd
    };
var id = te(`<div id="header" class="svelte-97dazg"><h3 class="svelte-97dazg"><i class="fa-solid fa-hand-holding-heart"></i></h3></div> <p class="svelte-97dazg">Da ich immer wieder mal danach gefragt werde:</p> <p class="svelte-97dazg">Wenn euch die Seite beim Lernen geholfen hat und ihr mich bei der Weiterentwicklung und Wartung
        für die nächsten Generationen unterstützen wollt (oder einfach nur Danke sagen möchtet), dann
        könnt ihr mir gerne einen Kaffee (oder Bierchen) ausgeben.</p> <a href="https://www.paypal.com/donate/?hosted_button_id=GV92Y6ZU6Z36U" target="_blank" class="svelte-97dazg">via paypal.com</a> <p class="svelte-97dazg">Unabhängig davon wird die Seite aber weiter kostenlos und werbefrei bleiben.</p> <p class="svelte-97dazg">Außerdem vielen Dank an alle, die sich die Mühe gemacht haben mir nette Mails zu schreiben. Es
        erwärmt mir das Herz zu sehen, dass diese Seite euch beim Lernen so viel geholfen hat &#x1F979;</p> <p class="svelte-97dazg">Haltet durch, bald habt ihr es geschafft!</p> <p class="svelte-97dazg">&mdash; Johannes</p>`, 1);

function md(e, t) {
    Ge(t, !1);
    let r = he();
    const a = () => {
        U(r).openPopup()
    };
    let s = Ce(t, "onClose", 8, () => {});
    return ke(Qt(e, {
        get onClose() {
            return s()
        },
        children: (n, o) => {
            var c = id();
            ae(14), q(n, c)
        },
        $$slots: {
            default: !0
        },
        $$legacy: !0
    }), n => X(r, n), () => U(r)), Yt(t, "open", a), Oe({
        open: a
    })
}
var hd = te('<p class="svelte-1pei8nd">Der neue M2 Lernplan für Frühling 2026 ist jetzt online. <br> In den Einstellungen könnt ihr zwischen dem alten und neuen Plan wechseln. <br> <br> <br> Die M1 Pläne werden folgen.</p>'),
    ld = te('<p class="svelte-1pei8nd">Ihr könnt mit einem <b>Rechtsklick Kapitel als gelesen markieren</b>. <br>Haltet dabei <b>Shift</b> gedrückt um alle Kapitel bis hierhin zu markieren. <br><b>Achtung</b>: Wenn ihr eure Cookies löscht, gehen die Markierungen aber verloren.</p>'),
    ud = te(`<p class="svelte-1pei8nd">Hast du dir schon die <b>Info</b> und <b>Einstellungen</b> in der rechten oberen Ecke
            angeschaut? <br>Wenn nicht verpasst du einige nützliche Features!</p>`),
    dd = te(`<p class="svelte-1pei8nd"><b>Wenn Dir diese Seite hilft, erzähle gerne Deinen Mitstudierenden davon, am besten auch an
                anderen Unis!</b> So haben möglichst viele Leute etwas davon. :)<br> <i>Die Seite ist komplett non-profit und wird von mir in meiner Freizeit programmiert.</i></p>`),
    gd = te('<div class="mButton svelte-1pei8nd"><i class="fa-solid fa-hand-holding-heart"></i></div>'),
    bd = te('<div id="headingAndTagline" class="svelte-1pei8nd"><h1 class="svelte-1pei8nd"> </h1></div> <svg class="svelte-1pei8nd"></svg> <div id="bottomLeftDiv" class="svelte-1pei8nd"><p class="svelte-1pei8nd"><!> <!> <!></p></div> <div id="credits" class="svelte-1pei8nd">&copy;JS&mdash;FFM</div> <div id="svg_tooltip"></div> <!> <!> <!> <!> <!> <!> <div id="InfoPopups" class="svelte-1pei8nd"><!> <!> <!> <!></div> <div id="menu" class="svelte-1pei8nd"><div class="mButton svelte-1pei8nd"><i class="fa-solid fa-magnifying-glass"></i></div> <div class="mButton svelte-1pei8nd"><i class="fa-solid fa-circle-info"></i></div> <div class="mButton svelte-1pei8nd"><i class="fa-solid fa-gears"></i></div> <div class="mButton svelte-1pei8nd"><i class="fa-solid fa-envelope"></i></div> <!></div> <!>', 1);

function jd(e, t) {
    Ge(t, !1);
    const r = Sr(),
        a = () => ee(Oa, "$numberOfVisitsSince150523", r),
        s = () => ee(Qe, "$examTypeAndYear", r),
        n = () => ee(ta, "$xAxisPosition", r),
        o = () => ee(ra, "$sortByTopChapers", r),
        c = () => ee(gr, "$importanceName", r),
        i = () => ee(_a, "$showNumberOfPagesForChapter", r),
        p = () => ee(Yr, "$greyedOutChapters", r),
        m = () => ee(Kr, "$greyedOutFragen", r),
        h = () => ee(Ar, "$greyedOutLernkarten", r),
        l = () => ee(Ns, "$zoomStatus", r),
        u = () => ee(Jr, "$highlightTopChapters", r),
        L = () => ee(Ha, "$displayCountdown", r),
        x = () => ee(Ga, "$showPercentageProgress", r);
    Xu(), B(Oa, a() + 1);
    let k = !1,
        y = he(),
        v = [];
    s() === "M1_30" && B(Qe, "M1_30_new"), s() === "M1_50" && B(Qe, "M1_50_new"), s() === "M1_50_Fachfokus" && B(Qe, "M1_50_Fachfokus_new"), s() === "M2_100" && B(Qe, "M2_100_new");
    let E = he(hs),
        M = [];
    switch (s()) {
        case "M1_30_new":
            X(E, Ko), M = _t;
            break;
        case "M1_50_new":
            X(E, Ao), M = _t;
            break;
        case "M1_50_Fachfokus_new":
            X(E, Po), M = _t;
            break;
        case "M2_100_new":
            X(E, hs), M = An;
            break;
        case "M1_30_old":
            X(E, Ro), M = _t;
            break;
        case "M1_50_old":
            X(E, ko), M = _t;
            break;
        case "M1_50_Fachfokus_old":
            X(E, Mo), M = _t;
            break;
        case "M2_100_old":
            X(E, Yo), M = An;
            break;
        default:
            console.log("Lernplan " + s() + " wurde nicht gefunden. Bitte Admin kontaktieren.");
            break
    }
    let Y = de(Te) !== me.None,
        V = [];

    function H() {
        if (Y = de(Te) !== me.None, V = [], s() != "None" && de(Te) != me.None) {
            let b;
            if (de(Te) === me.AnkiPhil) b = ad;
            else if (de(Te) === me.Ankizin) b = pd;
            else throw new Error("Unknown LernkartenDisplayDeck");
            console.log(s().split("_")[0]);
            let d = b[s().replace("_new", "").replace("_old", "")],
                S;
            if (de(mt) === Ie.All) S = d.all;
            else if (de(mt) === Ie.HighYield) S = d.high_yield;
            else if (de(mt) === Ie.AtLeastOnce) S = d.at_least_once;
            else throw new Error("Unknown LernkartenDisplayType");
            S.forEach((D, W) => {
                V.push({
                    Day: W + 1,
                    Kartenzahl: D
                })
            })
        }
        tt()
    }
    const Q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        J = 175,
        se = J * U(E).pageTickValues[U(E).pageTickValues.length - 1];
    let z = he(),
        F = he();
    Qe.subscribe(() => {
        try {
            const b = new Date;
            b.setHours(0, 0, 0, 0);
            b.setDate(b.getDate() + 1);
            const d = Kn(s());
            d.setHours(0, 0, 0, 0);
            d.setDate(d.getDate() - 1);
            const S = hl({
                    start: b,
                    end: d
                }),
                D = S.filter(W => !ml(W));
            X(z, S.length), X(F, D.length)
        } catch {}
    });
    const re = 0,
        g = 20,
        I = {
            top: 10,
            right: 30,
            bottom: n() + re,
            left: 30
        };
    let f = 600,
        C = 1280;
    const A = 16;
    let R = he(U(E).data.map(b => ({
        ...b,
        ExamQuestionsPer10Pages: b.Imppact !== -1 ? b.Imppact / (b.Length / J) * 10 : -1
    })));
    for (let b = 1; b <= U(E).numberOfDays;
        (b += 1) - 1) {
        const d = U(R).filter(S => S.Day === b).length;
        for (let S = d + 1; S <= 24;
            (S += 1) - 1) U(R).push({
            Importance: S,
            Day: b,
            Chapter: "-",
            Length: 0,
            Imppact: -1,
            ExamQuestionsPer10Pages: -1,
            Subject: "-",
            Url: "-"
        })
    }

    function _() {
        X(R, U(E).data.map(d => ({
            ...d,
            ExamQuestionsPer10Pages: d.Imppact !== -1 ? d.Imppact / (d.Length / J) * 10 : -1
        }))), v = [], v.push({
            name: U(R)[0].Subject,
            days: [1],
            color: Ta[0]
        });
        let b = 0;
        if (U(R).forEach((d, S) => {
                const D = v[v.length - 1];
                d.Subject !== D.name && (v[v.length - 1].days.push(d.Day - 1), b += 1, v.push({
                    name: d.Subject,
                    days: [d.Day],
                    color: Ta[b % Ta.length]
                }))
            }), v[v.length - 1].days.push(v[v.length - 1].days[0]), v = v.filter(d => {
                var S, D;
                return !((S = d.name) != null && S.includes("Generalprobe") || (D = d.name) != null && D.includes("Wiederholung"))
            }), o()) {
            const d = U(R).sort((oe, ye) => ye[c()] - oe[c()]),
                S = [];
            let D = 0,
                W = 1,
                j = 1;
            const K = U(E).pageTickValues[U(E).pageTickValues.length - 1] - 20;
            d.forEach(oe => {
                const ye = Object.assign({}, oe);
                ye.Day = j, ye.Importance = W, S.push(ye), D += ye.Length / 150, W += 1, D > K && (W = 1, j += 1, D = 0)
            }), X(R, S)
        }
        for (let d = 1; d <= U(E).numberOfDays;
            (d += 1) - 1) {
            const S = U(R).filter(D => D.Day === d).length;
            for (let D = S + 1; D <= 24;
                (D += 1) - 1) U(R).push({
                Importance: D,
                Day: d,
                Chapter: "-",
                Length: 0,
                Imppact: -1,
                ExamQuestionsPer10Pages: -1,
                Subject: "-",
                Url: "-"
            })
        }
        if (de(br)) {
            for (let d = 1; d <= U(E).numberOfDays;
                (d += 1) - 1) {
                const S = U(R).filter(D => D.Day === d).sort((D, W) => D[c()] - W[c()]);
                U(R).filter(D => D.Day === d).forEach((D, W) => {
                    D.Importance = S.indexOf(D) + 1
                })
            }
            X(R, U(R).sort((d, S) => d.Day * 1e3 - S.Day * 1e3 + (d.Importance - S.Importance)))
        }
        dt = En().keys(Q).value((d, S) => d.get(S).Length).order(Cn)(Fs(U(R), ([d]) => d, d => d.Day, d => d.Importance).values()).map(d => (d.forEach(S => S.data = S.data.get(d.key)), d))
    }

    function $(b, d) {
        if (d.data && d.data[c()]) {
            let S = "";
            c() === "Imppact" && (S = "IMPPact"), c() === "ExamQuestionsPer10Pages" && (S = "Relevanz"), U(y).showContextMenu(b, d, [{
                label: `<span style='font-weight: bold'>${d.data.Chapter}</span> - <span style='font-size: small; font-style: italic'>${S} ` + d.data[c()].toFixed(2) + (i() ? ", " + (d.data.Length / J).toFixed(0) + " Seiten" : "") + "</span>",
                action: () => {},
                type: "header"
            }, {
                label: "In Amboss öffnen",
                action: (D, W) => {
                    window.open(d.data.Url, "_blank").focus()
                },
                type: "interactive"
            }, {
                label: p().includes(d.data.Chapter) ? "Demarkieren" : "Markieren",
                action: (D, W) => {
                    Be(b, d, !1)
                },
                type: "interactive"
            }, {
                label: p().includes(d.data.Chapter) ? "Bis hier demarkieren" : "Bis hier markieren",
                action: (D, W) => {
                    Be(b, d, !0)
                },
                type: "interactive"
            }])
        } else d.Fragenzahl ? U(y).showContextMenu(b, d, [{
            label: d.Fragenzahl.toString() + " Fragen",
            action: () => {},
            type: "header"
        }, {
            label: m().includes(d.Day) ? "Demarkieren" : "Markieren",
            action: (S, D) => {
                Kt(b, d, !1)
            },
            type: "interactive"
        }, {
            label: m().includes(d.Day) ? "Bis hier demarkieren" : "Bis hier markieren",
            action: (S, D) => {
                Kt(b, d, !0)
            },
            type: "interactive"
        }]) : d.Kartenzahl && U(y).showContextMenu(b, d, [{
            label: d.Kartenzahl.toString() + " Anki-Karten",
            action: () => {},
            type: "header"
        }, {
            label: h().includes(d.Day) ? "Demarkieren" : "Markieren",
            action: (S, D) => {
                gt(b, d, !1)
            },
            type: "interactive"
        }, {
            label: h().includes(d.Day) ? "Bis hier demarkieren" : "Bis hier markieren",
            action: (S, D) => {
                gt(b, d, !0)
            },
            type: "interactive"
        }])
    }
    let w = Xr().domain(U(R).map(b => b.Day)).range([I.left, C - I.right]).padding(.1);
    Ue.subscribe(() => {
        ge()
    }), ea.subscribe(() => {
        ge()
    });

    function ge() {
        if (typeof window < "u") {
            const b = [];
            if (de(Ue)) {
                let d = de(Ue) + de(ea);
                d > de(Ue) && (d -= de(Ue)), d > de(Ue) && (d -= de(Ue));
                for (let S = d; S < U(E).numberOfDays; S += de(Ue)) b.push(S)
            }
            vi("#weekdividers").remove(), O("svg").append("g").attr("id", "weekdividers").selectAll("rect").data(b).join("rect").attr("x", d => w(d + 1) - w.bandwidth() / 15).attr("y", f - I.bottom).attr("height", A)
        }
    }

    function ne(b) {
        B(Ns, b.transform), le = !0, w.range([I.left, C - I.right].map(S => b.transform.k * S + b.transform.x));
        const d = w.bandwidth();
        O("svg").selectAll(".bars rect").attr("x", S => w(S.data.Day)).attr("width", d), O("svg").selectAll(".questionnumber rect").attr("x", S => w(S.Day) + (Y ? d / 2 : 0)).attr("width", Y ? d / 2 : d), O("svg").selectAll(".flashcardcount rect").attr("x", S => w(S.Day)).attr("width", d / 2), O("svg").selectAll("#subjects rect").attr("x", S => w(S.days[0])).attr("width", S => w(S.days[1] + 1) - w(S.days[0]) - w.bandwidth() / 10), de(Ue) && O("svg").selectAll("#weekdividers rect").attr("x", S => w(S + 1) - w.bandwidth() / 15).attr("width", S => 3), O("svg").selectAll(".x-axis").call(ut).selectAll("text").attr("dy", `${A/2+.5}px`), O("svg").selectAll(".x-axis2").call(Xt)
    }

    function be() {
        const b = C;
        f = window.innerHeight - g, C = window.innerWidth, pe = [
            [I.left, I.top],
            [C - I.right, f - I.top]
        ], ie = za().scaleExtent([1, 8]).translateExtent(pe).extent(pe).on("zoom", ne), Ze(), et(), tt(), w = Xr().domain(U(R).map(d => d.Day)).range([I.left, C - I.right]).padding(.1), je(), O("svg").call(ie.transform, da.translate(l().x * (C / b), l().y).scale(l().k))
    }
    let pe = [
            [I.left, I.top],
            [C - I.right, f - I.top]
        ],
        ie = za().scaleExtent([1, 8]).translateExtent(pe).extent(pe).on("zoom", ne);

    function fe(b) {
        b.call(ie)
    }
    const ze = b => b.attr("transform", `translate(${I.left},0)`).call(qs(Me).tickValues(U(E).pageTickValues.map(d => d * J)).tickFormat(d => (d / J).toFixed(0).toString())).call(d => d.select(".tick:last-of-type text").clone().attr("class", "y-axis-label-left").attr("x", 3).text("Seitenzahl")),
        Er = b => b.attr("transform", `translate(${I.left},0)`).call(qs(Je).tickValues(Or(...Ya(Je.domain()), 4)).tickFormat(d => d.toFixed(0).toString())).call(d => d.select(".tick:last-of-type text").clone().attr("class", "y-axis-label-left").attr("x", 3).text("Fragenzahl")),
        Ft = b => b.attr("transform", `translate(${C-I.right},0)`).call(Jc(Ye).tickValues(Or(...Ya(Ye.domain()), 4)).tickFormat(d => d.toFixed(0).toString())).call(d => d.select(".tick:last-of-type text").clone().attr("class", "y-axis-label-right").attr("x", -3).text("Anki-Karten")),
        ut = b => b.attr("transform", `translate(0,${f-I.bottom})`).call($s(w).tickValues(Or(...Ya(w.domain()), Math.round(C / 40 * l().k))).tickSizeInner(0).tickSizeOuter(0)),
        Xt = b => b.attr("transform", `translate(0,${f-I.bottom+A})`).call($s(w).tickValues(0).tickSizeInner(0).tickSizeOuter(0)),
        Cr = el;
    let De;
    De = b => Cr(Math.pow(b.data[c()], .6) / 2.9);
    const $t = b => M.includes(b.data.Chapter) && u() ? "#F30" : "#DDD";
    let dt = En().keys(Q).value((b, d) => b.get(d).Length).order(Cn)(Fs(U(R), ([b]) => b, b => b.Day, b => b.Importance).values()).map(b => (b.forEach(d => d.data = d.data.get(b.key)), b)),
        Me;

    function Ze() {
        Me = $r().domain([0, se]).nice().range([f - I.bottom, I.top])
    }
    Ze();
    let Je;

    function et() {
        Je = $r().domain([0, U(E).yFragenDomain]).nice().range([f - I.bottom + A, f - A - re])
    }
    et();
    let Ye;

    function tt() {
        Ye = $r().domain([0, V.reduce((b, d) => Math.max(b, d.Kartenzahl), 0)]).nice().range([f - I.bottom + A, f - A - re])
    }
    tt();
    const rt = [];
    for (let b = 0; b < U(E).numberOfDays;
        (b += 1) - 1) rt.push({
        Day: b + 1,
        Fragenzahl: U(E).fragenzahl[b]
    });

    function Be(b, d, S) {
        if (b.preventDefault(), b.shiftKey || b.ctrlKey || S) {
            if (p().includes(d.data.Chapter))
                for (const D of U(R)) {
                    if (d.data.Chapter === D.Chapter) break;
                    B(Yr, p().filter(W => W !== D.Chapter))
                } else
                    for (const D of U(R)) {
                        if (d.data.Chapter === D.Chapter) break;
                        p().push(D.Chapter)
                    }
            location.reload()
        }
        p().includes(d.data.Chapter) ? (B(Yr, p().filter(D => D !== d.data.Chapter)), O(b.target).attr("fill", D => D.data[c()] == -1 ? "#FFE" : De(D))) : (p().push(d.data.Chapter), B(Yr, p()), O(b.target).attr("fill", D => {
            if (D.data[c()] == -1) return "#FCFCFC";
            const W = He(De(D)),
                j = ((W.r + W.g + W.b) / 3).toFixed(0);
            return Dt(j, j, j, .7).toString()
        })), ct()
    }

    function Kt(b, d, S) {
        if (b.preventDefault(), b.shiftKey || b.ctrlKey || S) {
            if (m().includes(d.Day))
                for (const D of rt) {
                    if (d.Day === D.Day) break;
                    B(Kr, m().filter(W => W !== D.Day))
                } else
                    for (const D of rt) {
                        if (d.Day === D.Day) break;
                        m().push(D.Day)
                    }
            location.reload()
        }
        m().includes(d.Day) ? (B(Kr, m().filter(D => D !== d.Day)), O(b.target).attr("fill", "#fff19c")) : (m().push(d.Day), B(Kr, m()), O(b.target).attr("fill", "#DDD")), ct()
    }

    function gt(b, d, S) {
        if (b.preventDefault(), b.shiftKey || b.ctrlKey || S) {
            if (h().includes(d.Day))
                for (const D of V) {
                    if (d.Day === D.Day) break;
                    B(Ar, h().filter(W => W !== D.Day))
                } else
                    for (const D of V) {
                        if (d.Day === D.Day) break;
                        h().push(D.Day)
                    }
            location.reload()
        }
        h().includes(d.Day) ? (B(Ar, h().filter(D => D !== d.Day)), O(b.target).attr("fill", "#94cbeb")) : (h().push(d.Day), B(Ar, h()), O(b.target).attr("fill", "#BBB")), ct()
    }
    let le = !1;

    function Ke(b) {
        if (b.touches.length > 1 || b.targetTouches && b.targetTouches.length > 1) return !0
    }
    const je = () => {
        O("svg").selectAll("*").remove();
        const b = O("svg").attr("viewBox", [0, 0, C, f]).call(fe);
        var d = function(j, K) {
                O("#svg_tooltip").style("display", "block"), O(this).style("stroke", "black").raise()
            },
            S = function(j, K) {
                let oe = "",
                    ye = "",
                    Go = i() && K.data && K.data.Length ? `, ${(K.data.Length/J).toFixed(0)} Seiten` : "";
                c() === "Imppact" && (ye = "IMPPact"), c() === "ExamQuestionsPer10Pages" && (ye = "Relevanz"), K.data && K.data.Chapter && (oe = `<p style="margin: 0"><b>${K.data.Chapter}</b> - <i style="font-size:small">${ye} ${K.data[c()]!==-1?K.data[c()].toFixed(2):"n.a."}${Go}</i></p>`), K.Fragenzahl && (oe = `${K.Fragenzahl} Fragen`), K.name && (oe = K.name), K.Kartenzahl && (oe = `${K.Kartenzahl} Anki-Karten`);
                const wt = O("#svg_tooltip");
                wt.html(oe);

                function As(sr, nr, pt) {
                    function kr(or) {
                        or = or.replace(/^#/, "");
                        let cr = parseInt(or, 16),
                            Da = cr >> 16 & 255,
                            Qo = cr >> 8 & 255,
                            Fo = cr & 255;
                        return {
                            r: Da,
                            g: Qo,
                            b: Fo
                        }
                    }

                    function Ea(or, cr, Da) {
                        return "#" + ((1 << 24) + (or << 16) + (cr << 8) + Da).toString(16).slice(1).toUpperCase()
                    }
                    let Mr = kr(sr),
                        Ca = kr(nr),
                        Wo = Math.round(Mr.r * (1 - pt) + Ca.r * pt),
                        Bo = Math.round(Mr.g * (1 - pt) + Ca.g * pt),
                        Vo = Math.round(Mr.b * (1 - pt) + Ca.b * pt);
                    return Ea(Wo, Bo, Vo)
                }

                function Oo(sr) {
                    const nr = sr.match(/\d+/g),
                        pt = parseInt(nr[0]),
                        kr = parseInt(nr[1]),
                        Ea = parseInt(nr[2]);
                    return `#${pt.toString(16).padStart(2,"0")}${kr.toString(16).padStart(2,"0")}${Ea.toString(16).padStart(2,"0")}`
                }
                wt.style("background-color", () => {
                    if (K.data && K.data.Imppact && K.data.Imppact !== -1) return `${As(Oo(De(K)),"#FFFFFF",.8)}CC`;
                    if (K.color) return `${As(K.color,"#FFFFFF",.7)}BB`
                }), j.clientX < C / 2 ? j.clientY < f / 2 ? wt.style("transform", "translate(0%, 0%)").style("left", j.clientX + 12 + "px").style("top", j.clientY + 5 + "px") : wt.style("transform", "translate(0%, -100%)").style("left", j.clientX + 12 + "px").style("top", j.clientY + 5 + "px") : j.clientY < f / 2 ? wt.style("transform", "translate(-100%, 0%)").style("left", j.clientX - 10 + "px").style("top", j.clientY + 5 + "px") : wt.style("transform", "translate(-100%, -100%)").style("left", j.clientX - 10 + "px").style("top", j.clientY + 5 + "px")
            },
            D = function(j, K) {
                O("#svg_tooltip").style("display", "none"), O(this).style("stroke", $t)
            },
            W = function(j, K) {
                O("#svg_tooltip").style("display", "none"), O(this).style("stroke", "#DDD")
            };
        return b.append("g").selectAll("g").data(dt).join("g").attr("class", "bars").attr("stroke", "#DDD").attr("stroke-width", 1).call(j => j.selectAll("rect").data(K => K).join("rect").attr("fill", K => {
            if (p().includes(K.data.Chapter)) {
                if (K.data[c()] == -1) return "#FCFCFC";
                const oe = He(De(K)),
                    ye = ((oe.r + oe.g + oe.b) / 3).toFixed(0);
                return Dt(ye, ye, ye, .7).toString()
            } else return K.data[c()] == -1 ? "#FFE" : De(K)
        }).attr("x", K => w(K.data.Day)).attr("y", K => Me(K[1])).attr("width", w.bandwidth() - 1).attr("height", K => Me(K[0]) - Me(K[1])).style("cursor", "pointer").on("click", (K, oe) => {
            window.open(oe.data.Url, "_blank").focus()
        }).on("mouseover", d).on("mousemove", S).on("mouseleave", D).on("contextmenu", (K, oe) => Be(K, oe, !1)).on("touchstart", (K, oe) => {
            K.preventDefault(), le = !1, Ke(K) && (le = !0)
        }).on("touchmove", (K, oe) => {
            K.preventDefault(), le = !0
        }).on("touchend", (K, oe) => {
            K.preventDefault(), Ke(K) && (le = !0), K.touches.length <= 1 && !le && $(K, oe)
        })), u() && b.selectAll("rect").filter(j => M.includes(j.data.Chapter)).attr("stroke", $t).attr("stroke-width", 2).attr("height", j => Me(j[0]) - Me(j[1]) - 1).raise(), b.append("g").attr("class", "questionnumber").attr("stroke", "#CCC").selectAll("rect").data(rt).join("rect").attr("fill", j => m().includes(j.Day) ? "#DDD" : "#fff19c").attr("x", j => w(j.Day) + (Y ? w.bandwidth() / 2 : 0)).attr("y", j => f - I.bottom + A).attr("height", j => -(Je(0) - Je(j.Fragenzahl))).attr("width", Y ? w.bandwidth() / 2 : w.bandwidth()).on("mouseover", d).on("mousemove", S).on("mouseleave", W).on("contextmenu", (j, K) => Kt(j, K, !1)).on("touchstart", (j, K) => {
            j.preventDefault(), le = !1, Ke(j) && (le = !0)
        }).on("touchmove", (j, K) => {
            j.preventDefault(), le = !0
        }).on("touchend", (j, K) => {
            j.preventDefault(), Ke(j) && (le = !0), j.touches.length <= 1 && !le && $(j, K)
        }), b.append("g").attr("id", "subjects").selectAll("rect").data(v).join("rect").attr("fill", j => j.color).attr("x", j => w(j.days[0])).attr("y", f - I.bottom).attr("height", A).attr("width", j => w(j.days[1] + 1) - w(j.days[0]) - w.bandwidth() / 10).on("mouseover", d).on("mousemove", S).on("mouseleave", W), ge(), Y && b.append("g").attr("class", "flashcardcount").attr("stroke", "#CCC").selectAll("rect").data(V).join("rect").attr("fill", j => h().includes(j.Day) ? "#BBB" : "#81b2eb").attr("x", j => w(j.Day)).attr("y", j => f - I.bottom + A).attr("height", j => -(Ye(0) - Ye(j.Kartenzahl))).attr("width", w.bandwidth() / 2).on("mouseover", d).on("mousemove", S).on("mouseleave", W).on("contextmenu", (j, K) => gt(j, K, !1)).on("touchstart", (j, K) => {
            j.preventDefault(), le = !1, Ke(j) && (le = !0)
        }).on("touchmove", (j, K) => {
            j.preventDefault(), le = !0
        }).on("touchend", (j, K) => {
            j.preventDefault(), Ke(j) && (le = !0), j.touches.length <= 1 && !le && $(j, K)
        }), b.append("g").attr("class", "x-axis").call(ut).selectAll("text").attr("dy", `${A/2+.5}px`).on("click", (j, K) => {
            const oe = +j.target.textContent;
            window.open(U(E).dayUrls[oe - 1], "_blank").focus()
        }), b.append("g").attr("class", "x-axis2").call(Xt), b.append("g").attr("class", "y-axis").call(ze), b.append("g").attr("class", "y-axis").call(Er), Y && b.append("g").attr("class", "y-axis").call(Ft), b.node()
    };
    ta.subscribe(() => {
        typeof document < "u" && (I.bottom = n(), f = window.innerHeight - g, Ze(), et(), tt(), je())
    }), br.subscribe(() => {
        typeof document < "u" && (_(), je())
    }), Te.subscribe(() => {
        typeof document < "u" && (H(), _(), je())
    }), mt.subscribe(() => {
        typeof document < "u" && (H(), _(), je())
    }), Jr.subscribe(() => {
        typeof document < "u" && (_(), je())
    }), ra.subscribe(() => {
        typeof document < "u" && (_(), je())
    }), gr.subscribe(() => {
        typeof document < "u" && (_(), je())
    }), xc(() => {
        s() === "None" && (window.location.href = "/select"), f = window.innerHeight - g, C = window.innerWidth, pe = [
            [I.left, I.top],
            [C - I.right, f - I.top]
        ], ie = za().scaleExtent([1, 8]).translateExtent(pe).extent(pe).on("zoom", ne), Ze(), et(), tt(), w = Xr().domain(U(R).map(b => b.Day)).range([I.left, C - I.right]).padding(.1), je(), ct(), window.addEventListener("resize", be),
        window.addEventListener("keydown", e => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
            e.preventDefault();
            U(At).openSearch(U(R));
        }
        if (e.key === "Escape" || e.key === "Enter") {
            U(At).closeSearch();
        }
        }), O("svg").call(ie.transform, da.translate(l().x, l().y).scale(l().k))
    });
    let at = he(),
        bt = he(),
        st = he(),
        At = he(),
        nt = he();

    function qt(b) {
        const d = b.map(S => S.item.Chapter);
        O("svg").selectAll(".bars rect").attr("fill", S => {
            if (p().includes(S.data.Chapter)) {
                if (S.data[c()] == -1) return "#FCFCFC";
                const D = He(De(S)),
                    W = ((D.r + D.g + D.b) / 3).toFixed(0);
                return Dt(W, W, W, .7).toString()
            } else return S.data[c()] == -1 ? "#FFE" : De(S)
        }), O("svg").selectAll(".bars rect").filter(S => d.includes(S.data.Chapter)).attr("fill", "red");
        for (const S of b);
    }
    let ot = he(0),
        Dr = he(0);

    function ct() {
        let b = 0,
            d = 0;
        U(R).forEach(W => {
            b += parseInt(W.Length), p().includes(W.Chapter) && (d += parseInt(W.Length), console.log(W))
        }), X(ot, d / b * 100);
        let S = 0,
            D = 0;
        rt.forEach(W => {
            S += W.Fragenzahl, m().includes(W.Day) && (D += W.Fragenzahl)
        }), X(Dr, D / S * 100)
    }
    Mt();
    var Pt = bd(),
        Jt = fr(Pt),
        vt = T(Jt),
        jr = T(vt, !0);
    Z(vt), Z(Jt);
    var ft = P(Jt, 4),
        It = T(ft),
        er = T(It);
    Ht(er, () => typeof U(z) < "u" && typeof U(F) < "u" && L(), b => {
        var d = ja();
        Ne(() => Xe(d, `${U(z)??""} Tage (${U(F)??""} Werktage) bis ${Kn(s()).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"})??""}`)), q(b, d)
    });
    var Lt = P(er, 2);
    Ht(Lt, () => typeof U(z) < "u" && typeof U(F) < "u" && L() && typeof U(ot) < "u" && x(), b => {
        var d = ja("  —  ");
        q(b, d)
    });
    var Rr = P(Lt, 2);
    Ht(Rr, () => typeof U(ot) < "u" && x(), b => {
        var d = ja();
        const S = Nt(() => U(ot).toFixed(2) ?? ""),
            D = Nt(() => U(Dr).toFixed(1) ?? "");
        Ne(() => Xe(d, `${U(S)}% gelesen, ${U(D)}% gekreuzt`)), q(b, d)
    }), Z(It), Z(ft);
    var zt = P(ft, 6);
    ke(Hu(zt, {
        $$legacy: !0
    }), b => X(at, b), () => U(at));
    var Zt = P(zt, 2);
    ke(Il(Zt, {
        $$legacy: !0
    }), b => X(bt, b), () => U(bt));
    var yt = P(Zt, 2);
    ke(yl(yt, {
        $$legacy: !0
    }), b => X(st, b), () => U(st));
    var tr = P(yt, 2);
    ke(m0(tr, {
        searchCallback: qt,
        $$legacy: !0
    }), b => X(At, b), () => U(At));
    var St = P(tr, 2);
    Ht(St, () => k, b => {
        ke(md(b, {
            onClose: () => B(Cc, !0),
            $$legacy: !0
        }), d => X(nt, d), () => U(nt))
    });
    var rr = P(St, 2);
    dl(rr);
    var Tt = P(rr, 2),
        ar = T(Tt),
        G = Nt(() => a() > 1);
    _r(ar, {
        cookieName: "newLernplans_011225",
        get onlyShowIf() {
            return U(G)
        },
        children: (b, d) => {
            var S = hd();
            q(b, S)
        },
        $$slots: {
            default: !0
        }
    });
    var Ys = P(ar, 2),
        Zo = Nt(() => a() > 3 && p().length === 0);
    _r(Ys, {
        cookieName: "kapitelMarkieren_250624",
        get onlyShowIf() {
            return U(Zo)
        },
        children: (b, d) => {
            var S = ld();
            q(b, S)
        },
        $$slots: {
            default: !0
        }
    });
    var Ks = P(Ys, 2),
        To = Nt(() => a() > 4);
    _r(Ks, {
        cookieName: "checkoutInfoAndSettings_020824b",
        get onlyShowIf() {
            return U(To)
        },
        children: (b, d) => {
            var S = ud();
            q(b, S)
        },
        $$slots: {
            default: !0
        }
    });
    var wo = P(Ks, 2),
        No = Nt(() => a() > 6);
    _r(wo, {
        cookieName: "shareWithFriendsPlea_290624",
        get onlyShowIf() {
            return U(No)
        },
        children: (b, d) => {
            var S = dd();
            q(b, S)
        },
        $$slots: {
            default: !0
        }
    }), Z(Tt);
    var La = P(Tt, 2),
        ya = T(La),
        Sa = P(ya, 2),
        Ua = P(Sa, 2),
        xa = P(Ua, 2),
        _o = P(xa, 2);
    Ht(_o, () => k, b => {
        var d = gd();
        ue("click", d, () => U(nt).open()), ue("keypress", d, () => {}), q(b, d)
    }), Z(La);
    var Ho = P(La, 2);
    ke(Ul(Ho, {
        $$legacy: !0
    }), b => X(y, b), () => U(y)), Ne(() => Xe(jr, U(E).heading)), ue("click", ya, () => U(At).openSearch(U(R))), ue("keypress", ya, () => {}), ue("click", Sa, () => {
        U(at).open()
    }), ue("keypress", Sa, () => {}), ue("click", Ua, () => U(bt).openSettings()), ue("keypress", Ua, () => {}), ue("click", xa, () => U(st).openContact()), ue("keypress", xa, () => {}), q(e, Pt), Oe()
}
export {
    jd as component
};
