import {
  $ as wr,
  A as m,
  D as re,
  E as ft,
  F as te,
  G as De,
  H as Ba,
  I as E,
  J as L,
  L as Pe,
  M as Ma,
  N as za,
  R as k,
  T as z,
  W as ie,
  Y as Ue,
  a as e,
  aa as Ga,
  b as f,
  c as lt,
  ca as Fe,
  d as ae,
  da as Dt,
  e as t,
  ea as b,
  f as ne,
  fa as h,
  g as jr,
  h as Ee,
  ha as ke,
  i as Wt,
  ia as ue,
  j as Et,
  ja as Ha,
  k as Qe,
  l as jt,
  m as Lr,
  n as Lt,
  r as Aa,
  t as Se,
  y as ge,
} from "./chunk-YIFMDBR7.mjs";
import { a as ct } from "./chunk-DCQLS573.mjs";
import {
  b as lr,
  d as n,
  f as Wr,
  i as Er,
  j as fe,
  l as Ia,
  n as Xe,
  o as Ne,
  p as U,
  q as we,
  r as Va,
  s as Ht,
  t as O,
  u as _t,
  v as B,
  w as K,
  x as ce,
} from "./chunk-XE4JPNOO.mjs";
import "./chunk-JR5VT52U.mjs";
import { b as T, c as N } from "./chunk-RIUMFBNJ.mjs";
var fr = (r) => r;
var mt = { ms: (r) => 1e3 * r, s: (r) => r / 1e3 };
function Ut(r, a) {
  return a ? r * (1e3 / a) : 0;
}
var _a = (r, a, s) =>
    (((1 - 3 * s + 3 * a) * r + (3 * s - 6 * a)) * r + 3 * a) * r,
  Jn = 1e-7,
  $n = 12;
function ei(r, a, s, i, c) {
  let d,
    g,
    w = 0;
  do ((g = a + (s - a) / 2), (d = _a(g, i, c) - r), d > 0 ? (s = g) : (a = g));
  while (Math.abs(d) > Jn && ++w < $n);
  return g;
}
function Dr(r, a, s, i) {
  if (r === a && s === i) return fr;
  let c = (d) => ei(d, 0, 1, r, s);
  return (d) => (d === 0 || d === 1 ? d : _a(c(d), a, i));
}
var em = {
  ease: Dr(0.25, 0.1, 0.25, 1),
  "ease-in": Dr(0.42, 0, 1, 1),
  "ease-in-out": Dr(0.42, 0, 0.58, 1),
  "ease-out": Dr(0, 0, 0.58, 1),
};
function Wa(r, a) {
  var s = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      a.indexOf(i) < 0 &&
      (s[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") {
    var c = 0;
    for (i = Object.getOwnPropertySymbols(r); c < i.length; c++)
      a.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[c]) &&
        (s[i[c]] = r[i[c]]);
  }
  return s;
}
var Sr = {};
Object.defineProperty(Sr, "__esModule", { value: !0 });
Sr.warning = function () {};
Sr.invariant = function () {};
var im = Sr.__esModule,
  om = Sr.warning,
  oi = Sr.invariant;
var si = 5;
function dt(r, a, s) {
  let i = Math.max(a - si, 0);
  return Ut(s - r(i), a - i);
}
var Pr = { stiffness: 100, damping: 10, mass: 1 },
  li = (r = Pr.stiffness, a = Pr.damping, s = Pr.mass) =>
    a / (2 * Math.sqrt(r * s));
function fi(r, a, s) {
  return (r < a && s >= a) || (r > a && s <= a);
}
var Yt = ({
    stiffness: r = Pr.stiffness,
    damping: a = Pr.damping,
    mass: s = Pr.mass,
    from: i = 0,
    to: c = 1,
    velocity: d = 0,
    restSpeed: g = 2,
    restDistance: w = 0.5,
  } = {}) => {
    d = d ? mt.s(d) : 0;
    let p = { done: !1, hasReachedTarget: !1, current: i, target: c },
      l = c - i,
      y = Math.sqrt(r / s) / 1e3,
      x = li(r, a, s),
      P;
    if (x < 1) {
      let q = y * Math.sqrt(1 - x * x);
      P = (C) =>
        c -
        Math.exp(-x * y * C) *
          (((x * y * l - d) / q) * Math.sin(q * C) + l * Math.cos(q * C));
    } else P = (q) => c - Math.exp(-y * q) * (l + (y * l - d) * q);
    return (q) => {
      p.current = P(q);
      let C = q === 0 ? d : dt(P, q, p.current),
        o = Math.abs(C) <= g,
        u = Math.abs(c - p.current) <= w;
      return ((p.done = o && u), (p.hasReachedTarget = fi(i, c, p.current)), p);
    };
  },
  Ea = ({
    from: r = 0,
    velocity: a = 0,
    power: s = 0.8,
    decay: i = 0.325,
    bounceDamping: c,
    bounceStiffness: d,
    changeTarget: g,
    min: w,
    max: p,
    restDistance: l = 0.5,
    restSpeed: y,
  }) => {
    i = mt.ms(i);
    let x = { hasReachedTarget: !1, done: !1, current: r, target: r },
      P = (R) => (w !== void 0 && R < w) || (p !== void 0 && R > p),
      q = (R) =>
        w === void 0
          ? p
          : p === void 0 || Math.abs(w - R) < Math.abs(p - R)
            ? w
            : p,
      C = s * a,
      o = r + C,
      u = g === void 0 ? o : g(o);
    ((x.target = u), u !== o && (C = u - r));
    let M = (R) => -C * Math.exp(-R / i),
      F = (R) => u + M(R),
      S = (R) => {
        let _ = M(R),
          Y = F(R);
        ((x.done = Math.abs(_) <= l), (x.current = x.done ? u : Y));
      },
      j,
      H,
      G = (R) => {
        P(x.current) &&
          ((j = R),
          (H = Yt({
            from: x.current,
            to: q(x.current),
            velocity: dt(F, R, x.current),
            damping: c,
            stiffness: d,
            restDistance: l,
            restSpeed: y,
          })));
      };
    return (
      G(0),
      (R) => {
        let _ = !1;
        return (
          !H && j === void 0 && ((_ = !0), S(R), G(R)),
          j !== void 0 && R > j
            ? ((x.hasReachedTarget = !0), H(R - j))
            : ((x.hasReachedTarget = !1), !_ && S(R), x)
        );
      }
    );
  },
  Ot = 10,
  ci = 1e4;
function ja(r, a = fr) {
  let s,
    i = Ot,
    c = r(0),
    d = [a(c.current)];
  for (; !c.done && i < ci; )
    ((c = r(i)),
      d.push(a(c.done ? c.target : c.current)),
      s === void 0 && c.hasReachedTarget && (s = i),
      (i += Ot));
  let g = i - Ot;
  return (
    d.length === 1 && d.push(c.current),
    { keyframes: d, duration: g / 1e3, overshootDuration: (s ?? g) / 1e3 }
  );
}
var mi = ["", "X", "Y", "Z"],
  di = ["translate", "scale", "rotate", "skew"];
var La = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (r) => r + "deg",
  },
  pi = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (r) => r + "px",
    },
    rotate: La,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: fr },
    skew: La,
  },
  hi = new Map(),
  gi = (r) => `--motion-${r}`,
  Za = ["x", "y", "z"];
di.forEach((r) => {
  mi.forEach((a) => {
    (Za.push(r + a), hi.set(gi(r + a), pi[r]));
  });
});
var Im = new Set(Za);
var Da = (r) => document.createElement("div").animate(r, { duration: 0.001 }),
  Ua = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Da({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Da({ opacity: [0, 1] }).finished,
  },
  Zt = {},
  ui = {};
for (let r in Ua) ui[r] = () => (Zt[r] === void 0 && (Zt[r] = Ua[r]()), Zt[r]);
function Xa(r, a) {
  var s;
  return (
    typeof r == "string"
      ? a
        ? (((s = a[r]) !== null && s !== void 0) ||
            (a[r] = document.querySelectorAll(r)),
          (r = a[r]))
        : (r = document.querySelectorAll(r))
      : r instanceof Element && (r = [r]),
    Array.from(r || [])
  );
}
function Qa(r) {
  let a = new WeakMap();
  return (s = {}) => {
    let i = new Map(),
      c = (g = 0, w = 100, p = 0, l = !1) => {
        let y = `${g}-${w}-${p}-${l}`;
        return (
          i.has(y) ||
            i.set(
              y,
              r(
                Object.assign(
                  {
                    from: g,
                    to: w,
                    velocity: p,
                    restSpeed: l ? 0.05 : 2,
                    restDistance: l ? 0.01 : 0.5,
                  },
                  s,
                ),
              ),
            ),
          i.get(y)
        );
      },
      d = (g) => (a.has(g) || a.set(g, ja(g)), a.get(g));
    return {
      createAnimation: (g, w, p, l, y) => {
        var x, P;
        let q,
          C = g.length;
        if (p && C <= 2 && g.every(xi)) {
          let u = g[C - 1],
            M = C === 1 ? null : g[0],
            F = 0,
            S = 0,
            j = y?.generator;
          if (j) {
            let { animation: R, generatorStartTime: _ } = y,
              Y = R?.startTime || _ || 0,
              I = R?.currentTime || performance.now() - Y,
              de = j(I).current;
            ((S = (x = M) !== null && x !== void 0 ? x : de),
              (C === 1 || (C === 2 && g[0] === null)) &&
                (F = dt((pe) => j(pe).current, I, de)));
          } else S = (P = M) !== null && P !== void 0 ? P : parseFloat(w());
          let H = c(S, u, F, l?.includes("scale")),
            G = d(H);
          ((q = Object.assign(Object.assign({}, G), { easing: "linear" })),
            y &&
              ((y.generator = H), (y.generatorStartTime = performance.now())));
        } else q = { easing: "ease", duration: d(c(0, 100)).overshootDuration };
        return q;
      },
    };
  };
}
var xi = (r) => typeof r != "string",
  Vm = Qa(Yt),
  Am = Qa(Ea),
  yi = { any: 0, all: 1 };
function bi(r, a, { root: s, margin: i, amount: c = "any" } = {}) {
  if (typeof IntersectionObserver > "u") return () => {};
  let d = Xa(r),
    g = new WeakMap(),
    w = (l) => {
      l.forEach((y) => {
        let x = g.get(y.target);
        if (y.isIntersecting !== !!x)
          if (y.isIntersecting) {
            let P = a(y);
            typeof P == "function" ? g.set(y.target, P) : p.unobserve(y.target);
          } else x && (x(y), g.delete(y.target));
      });
    },
    p = new IntersectionObserver(w, {
      root: s,
      rootMargin: i,
      threshold: typeof c == "number" ? c : yi[c],
    });
  return (d.forEach((l) => p.observe(l)), () => p.disconnect());
}
var pt = new WeakMap(),
  $e;
function vi(r, a) {
  if (a) {
    let { inlineSize: s, blockSize: i } = a[0];
    return { width: s, height: i };
  }
  return r instanceof SVGElement && "getBBox" in r
    ? r.getBBox()
    : { width: r.offsetWidth, height: r.offsetHeight };
}
function wi({ target: r, contentRect: a, borderBoxSize: s }) {
  var i;
  (i = pt.get(r)) === null ||
    i === void 0 ||
    i.forEach((c) => {
      c({
        target: r,
        contentSize: a,
        get size() {
          return vi(r, s);
        },
      });
    });
}
function Si(r) {
  r.forEach(wi);
}
function Pi() {
  typeof ResizeObserver < "u" && ($e = new ResizeObserver(Si));
}
function ki(r, a) {
  $e || Pi();
  let s = Xa(r);
  return (
    s.forEach((i) => {
      let c = pt.get(i);
      (c || ((c = new Set()), pt.set(i, c)), c.add(a), $e?.observe(i));
    }),
    () => {
      s.forEach((i) => {
        let c = pt.get(i);
        (c?.delete(a), c?.size || $e?.unobserve(i));
      });
    }
  );
}
var ht = new Set(),
  Ur;
function Ci() {
  ((Ur = () => {
    let r = { width: N.innerWidth, height: N.innerHeight },
      a = { target: N, size: r, contentSize: r };
    ht.forEach((s) => s(a));
  }),
    N.addEventListener("resize", Ur));
}
function qi(r) {
  return (
    ht.add(r),
    Ur || Ci(),
    () => {
      (ht.delete(r), !ht.size && Ur && (Ur = void 0));
    }
  );
}
function gt(r, a) {
  return typeof r == "function" ? qi(r) : ki(r, a);
}
function Xt(r, a, s) {
  r.dispatchEvent(new CustomEvent(a, { detail: { originalEvent: s } }));
}
function Oa(r, a, s) {
  r.dispatchEvent(new CustomEvent(a, { detail: { originalEntry: s } }));
}
var Ri = {
    isActive: (r) => !!r.inView,
    subscribe: (r, { enable: a, disable: s }, { inViewOptions: i = {} }) => {
      let { once: c } = i,
        d = Wa(i, ["once"]);
      return bi(
        r,
        (g) => {
          if ((a(), Oa(r, "viewenter", g), !c))
            return (w) => {
              (s(), Oa(r, "viewleave", w));
            };
        },
        d,
      );
    },
  },
  Ya = (r, a, s) => (i) => {
    (!i.pointerType || i.pointerType === "mouse") && (s(), Xt(r, a, i));
  },
  Ni = {
    isActive: (r) => !!r.hover,
    subscribe: (r, { enable: a, disable: s }) => {
      let i = Ya(r, "hoverstart", a),
        c = Ya(r, "hoverend", s);
      return (
        r.addEventListener("pointerenter", i),
        r.addEventListener("pointerleave", c),
        () => {
          (r.removeEventListener("pointerenter", i),
            r.removeEventListener("pointerleave", c));
        }
      );
    },
  },
  Fi = {
    isActive: (r) => !!r.press,
    subscribe: (r, { enable: a, disable: s }) => {
      let i = (d) => {
          (s(), Xt(r, "pressend", d), N.removeEventListener("pointerup", i));
        },
        c = (d) => {
          (a(), Xt(r, "pressstart", d), N.addEventListener("pointerup", i));
        };
      return (
        r.addEventListener("pointerdown", c),
        () => {
          (r.removeEventListener("pointerdown", c),
            N.removeEventListener("pointerup", i));
        }
      );
    },
  },
  Ti = { inView: Ri, hover: Ni, press: Fi },
  Bm = ["initial", "animate", ...Object.keys(Ti), "exit"];
var Ii = {
    left: (r) => `translateX(-${r}px)`,
    right: (r) => `translateX(${r}px)`,
    top: (r) => `translateY(-${r}px)`,
    bottom: (r) => `translateY(${r}px)`,
  },
  Qt =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function cr(r) {
  let {
      slots: a,
      gap: s,
      padding: i,
      paddingPerSide: c,
      paddingTop: d,
      paddingRight: g,
      paddingBottom: w,
      paddingLeft: p,
      speed: l,
      hoverFactor: y,
      direction: x,
      alignment: P,
      sizingOptions: q,
      fadeOptions: C,
      style: o,
    } = r,
    {
      fadeContent: u,
      overflow: M,
      fadeWidth: F,
      fadeInset: S,
      fadeAlpha: j,
    } = C,
    { widthType: H, heightType: G } = q,
    R = c ? `${d}px ${g}px ${w}px ${p}px` : `${i}px`,
    _ = ge.current() === ge.canvas,
    Y = lr.count(a),
    I = Y > 0;
  x === !0 && (x = "left");
  let de = x === "left" || x === "right",
    pe = jr(0),
    Ce = Ii[x],
    oe = Ee(pe, Ce),
    J = B(null),
    se = O(() => [Er(), Er()], []),
    [qe, le] = K({ parent: null, children: null }),
    Ie = [],
    Be = [],
    ze = 0,
    Ye = 0;
  (_ && ((ze = Y ? Math.floor(10 / Y) : 0), (Ye = 1)),
    !_ &&
      I &&
      qe.parent &&
      ((ze = Math.round((qe.parent / qe.children) * 2) + 1), (Ye = 1)));
  let Me = Xe(() => {
      if (I && J.current) {
        let Q = de ? J.current.offsetWidth : J.current.offsetHeight,
          Z = se[0].current
            ? de
              ? se[0].current.offsetLeft
              : se[0].current.offsetTop
            : 0,
          be =
            (se[1].current
              ? de
                ? se[1].current.offsetLeft + se[1].current.offsetWidth
                : se[1].current.offsetTop + se[1].current.offsetHeight
              : 0) -
            Z +
            s;
        le({ parent: Q, children: be });
      }
    }, []),
    $ = _ ? { contentVisibility: "auto" } : {};
  if (I) {
    if (!_) {
      let Q = B(!0);
      U(
        () => (
          Me(),
          gt(J.current, ({ contentSize: Z }) => {
            (!Q.current && (Z.width || Z.height) && Me(), (Q.current = !1));
          })
        ),
        [],
      );
    }
    Ie = lr.map(a, (Q, Z) => {
      var Ve, be, He, he;
      let ve;
      (Z === 0 && (ve = se[0]), Z === a.length - 1 && (ve = se[1]));
      let D = {
        width: H
          ? (Ve = Q.props) === null || Ve === void 0
            ? void 0
            : Ve.width
          : "100%",
        height: G
          ? (be = Q.props) === null || be === void 0
            ? void 0
            : be.height
          : "100%",
      };
      return e(ne, {
        inherit: "id",
        children: e("li", {
          ref: ve,
          style: D,
          children: Wr(
            Q,
            {
              style: {
                ...((He = Q.props) === null || He === void 0
                  ? void 0
                  : He.style),
                ...D,
                flexShrink: 0,
                ...$,
              },
              layoutId: Q.props.layoutId
                ? Q.props.layoutId + "-original-" + Z
                : void 0,
            },
            (he = Q.props) === null || he === void 0 ? void 0 : he.children,
          ),
        }),
      });
    });
  }
  if (!_)
    for (let Q = 0; Q < ze; Q++)
      Be = [
        ...Be,
        ...lr.map(a, (Z, Ve) => {
          var be, He, he, ve, D, v;
          let A = {
            width: H
              ? (be = Z.props) === null || be === void 0
                ? void 0
                : be.width
              : "100%",
            height: G
              ? (He = Z.props) === null || He === void 0
                ? void 0
                : He.height
              : "100%",
          };
          return e(
            ne,
            {
              inherit: "id",
              children: e(
                "li",
                {
                  style: A,
                  "aria-hidden": !0,
                  children: Wr(
                    Z,
                    {
                      key: Q + " " + Ve,
                      style: {
                        ...((he = Z.props) === null || he === void 0
                          ? void 0
                          : he.style),
                        width: H
                          ? (ve = Z.props) === null || ve === void 0
                            ? void 0
                            : ve.width
                          : "100%",
                        height: G
                          ? (D = Z.props) === null || D === void 0
                            ? void 0
                            : D.height
                          : "100%",
                        flexShrink: 0,
                        ...$,
                      },
                      layoutId: Z.props.layoutId
                        ? Z.props.layoutId + "-dupe-" + Q
                        : void 0,
                    },
                    (v = Z.props) === null || v === void 0
                      ? void 0
                      : v.children,
                  ),
                },
                Q + "li" + Ve,
              ),
            },
            Q + "lg" + Ve,
          );
        }),
      ];
  let X = qe.children + qe.children * Math.round(qe.parent / qe.children),
    Ge = B(null),
    nr = B(null),
    Je = B(0),
    ir = B(!1),
    pr = Et(),
    hr = B(null),
    Le = B(null);
  if (!_) {
    let Q = Lr(J);
    Qt
      ? U(() => {
          if (!(pr || !X || !l))
            return (
              (Le.current = hr.current.animate(
                { transform: [Ce(0), Ce(X)] },
                {
                  duration: (Math.abs(X) / l) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                },
              )),
              () => Le.current.cancel()
            );
        }, [y, X, l])
      : Wt((Z) => {
          if (!X || pr || Qt) return;
          (Ge.current === null && (Ge.current = Z), (Z = Z - Ge.current));
          let be = (nr.current === null ? 0 : Z - nr.current) * (l / 1e3);
          (ir.current && (be *= y),
            (Je.current += be),
            (Je.current = Qe(0, X, Je.current)),
            (nr.current = Z),
            Q && pe.set(Je.current));
        });
  }
  let gr = de ? "to right" : "to bottom",
    or = F / 2,
    zr = 100 - F / 2,
    Gr = zi(S, 0, or),
    Hr = 100 - S,
    sr = `linear-gradient(${gr}, rgba(0, 0, 0, ${j}) ${Gr}%, rgba(0, 0, 0, 1) ${or}%, rgba(0, 0, 0, 1) ${zr}%, rgba(0, 0, 0, ${j}) ${Hr}%)`;
  return I
    ? e("section", {
        style: {
          ...Ka,
          opacity: Ye,
          WebkitMaskImage: u ? sr : void 0,
          MozMaskImage: u ? sr : void 0,
          maskImage: u ? sr : void 0,
          overflow: M ? "visible" : "hidden",
          padding: R,
        },
        ref: J,
        children: f(t.ul, {
          ref: hr,
          style: {
            ...Ka,
            gap: s,
            top: x === "bottom" && Ja(X) ? -X : void 0,
            left: x === "right" && Ja(X) ? -X : void 0,
            placeItems: P,
            position: "relative",
            flexDirection: de ? "row" : "column",
            ...o,
            transform: Qt ? void 0 : oe,
            willChange: _ ? "auto" : "transform",
          },
          onMouseEnter: () => {
            ((ir.current = !0), Le.current && Le.current.updatePlaybackRate(y));
          },
          onMouseLeave: () => {
            ((ir.current = !1), Le.current && Le.current.updatePlaybackRate(1));
          },
          children: [Ie, Be],
        }),
      })
    : f("section", {
        style: Vi,
        children: [
          e("div", { style: Ai, children: "\u2728" }),
          e("p", { style: Bi, children: "Connect to Content" }),
          e("p", {
            style: Mi,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
cr.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
re(cr, {
  slots: {
    type: m.Array,
    title: "Children",
    control: { type: m.ComponentInstance },
  },
  speed: {
    type: m.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: m.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: m.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: m.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: m.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: m.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: m.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: m.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: m.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: m.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: m.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(r) {
          return r.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: m.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeInset: {
        type: m.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: m.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: m.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var Ka = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  Vi = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Ai = { fontSize: 32, marginBottom: 10 },
  Bi = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Mi = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  zi = (r, a, s) => Math.min(Math.max(r, a), s),
  Ja = (r) => typeof r == "number" && !isNaN(r);
var Gi = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
var Hi = {
    ...Gi,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column",
  },
  kr = fe((r, a) => e("div", { style: Hi, ref: a }));
var Kt,
  $a = (r) => {
    if (!Kt) {
      let a = r.forwardRef(
        ({ color: s = "currentColor", size: i = 24, ...c }, d) =>
          r.createElement(
            "svg",
            {
              ref: d,
              xmlns: "http://www.w3.org/2000/svg",
              width: i,
              height: i,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: s,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              ...c,
            },
            r.createElement("path", {
              d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
            }),
            r.createElement("polyline", { points: "9 22 9 12 15 12 15 22" }),
          ),
      );
      ((a.displayName = "Home"), (Kt = a));
    }
    return Kt;
  };
var Cr = {
    onClick: { type: m.EventHandler },
    onMouseDown: { type: m.EventHandler },
    onMouseUp: { type: m.EventHandler },
    onMouseEnter: { type: m.EventHandler },
    onMouseLeave: { type: m.EventHandler },
  },
  en = (r, a) => r.find((s) => s.toLowerCase().includes(a));
function rn(r, a, s = "", i, c) {
  if (a) return i;
  if (s == null || s?.length === 0) return null;
  let d = s.toLowerCase().replace(/-|\s/g, "");
  var g;
  return (g = c[d]) !== null && g !== void 0 ? g : en(r, d);
}
function qr(r, a, s = "", i, c) {
  let d = O(() => {
    if (s == null || s?.length === 0) return null;
    let w = s.toLowerCase().replace(/-|\s/g, "");
    var p;
    return (p = c[w]) !== null && p !== void 0 ? p : en(r, w);
  }, [i, s]);
  return a ? i : d;
}
var ut = [
    "activity",
    "airplay",
    "alert-circle",
    "alert-octagon",
    "alert-triangle",
    "align-center",
    "align-justify",
    "align-left",
    "align-right",
    "anchor",
    "aperture",
    "archive",
    "arrow-down",
    "arrow-down-circle",
    "arrow-down-left",
    "arrow-down-right",
    "arrow-left",
    "arrow-left-circle",
    "arrow-right",
    "arrow-right-circle",
    "arrow-up",
    "arrow-up-circle",
    "arrow-up-left",
    "arrow-up-right",
    "at-sign",
    "award",
    "bar-chart",
    "bar-chart-2",
    "battery",
    "battery-charging",
    "bell",
    "bell-off",
    "bluetooth",
    "bold",
    "book",
    "book-open",
    "bookmark",
    "box",
    "briefcase",
    "calendar",
    "camera",
    "camera-off",
    "cast",
    "check",
    "check-circle",
    "check-square",
    "chevron-down",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "chevrons-down",
    "chevrons-left",
    "chevrons-right",
    "chevrons-up",
    "chrome",
    "circle",
    "clipboard",
    "clock",
    "cloud",
    "cloud-drizzle",
    "cloud-lightning",
    "cloud-off",
    "cloud-rain",
    "cloud-snow",
    "code",
    "codepen",
    "codesandbox",
    "coffee",
    "columns",
    "command",
    "compass",
    "copy",
    "corner-down-left",
    "corner-down-right",
    "corner-left-down",
    "corner-left-up",
    "corner-right-down",
    "corner-right-up",
    "corner-up-left",
    "corner-up-right",
    "cpu",
    "credit-card",
    "crop",
    "crosshair",
    "database",
    "delete",
    "disc",
    "divide",
    "divide-circle",
    "divide-square",
    "dollar-sign",
    "download",
    "download-cloud",
    "dribbble",
    "droplet",
    "edit",
    "edit-2",
    "edit-3",
    "external-link",
    "eye",
    "eye-off",
    "facebook",
    "fast-forward",
    "feather",
    "figma",
    "file",
    "file-minus",
    "file-plus",
    "file-text",
    "film",
    "filter",
    "flag",
    "folder",
    "folder-minus",
    "folder-plus",
    "framer",
    "frown",
    "gift",
    "git-branch",
    "git-commit",
    "git-merge",
    "git-pull-request",
    "github",
    "gitlab",
    "globe",
    "grid",
    "hard-drive",
    "hash",
    "headphones",
    "heart",
    "help-circle",
    "hexagon",
    "home",
    "image",
    "inbox",
    "info",
    "instagram",
    "italic",
    "key",
    "layers",
    "layout",
    "life-buoy",
    "link",
    "link-2",
    "linkedin",
    "list",
    "loader",
    "lock",
    "log-in",
    "log-out",
    "mail",
    "map",
    "map-pin",
    "maximize",
    "maximize-2",
    "meh",
    "menu",
    "message-circle",
    "message-square",
    "mic",
    "mic-off",
    "minimize",
    "minimize-2",
    "minus",
    "minus-circle",
    "minus-square",
    "monitor",
    "moon",
    "more-horizontal",
    "more-vertical",
    "mouse-pointer",
    "move",
    "music",
    "navigation",
    "navigation-2",
    "octagon",
    "package",
    "paperclip",
    "pause",
    "pause-circle",
    "pen-tool",
    "percent",
    "phone",
    "phone-call",
    "phone-forwarded",
    "phone-incoming",
    "phone-missed",
    "phone-off",
    "phone-outgoing",
    "pie-chart",
    "play",
    "play-circle",
    "plus",
    "plus-circle",
    "plus-square",
    "pocket",
    "power",
    "printer",
    "radio",
    "refresh-ccw",
    "refresh-cw",
    "repeat",
    "rewind",
    "rotate-ccw",
    "rotate-cw",
    "rss",
    "save",
    "scissors",
    "search",
    "send",
    "server",
    "settings",
    "share",
    "share-2",
    "shield",
    "shield-off",
    "shopping-bag",
    "shopping-cart",
    "shuffle",
    "sidebar",
    "skip-back",
    "skip-forward",
    "slack",
    "slash",
    "sliders",
    "smartphone",
    "smile",
    "speaker",
    "square",
    "star",
    "stop-circle",
    "sun",
    "sunrise",
    "sunset",
    "tablet",
    "tag",
    "target",
    "terminal",
    "thermometer",
    "thumbs-down",
    "thumbs-up",
    "toggle-left",
    "toggle-right",
    "tool",
    "trash",
    "trash-2",
    "trello",
    "trending-down",
    "trending-up",
    "triangle",
    "truck",
    "tv",
    "twitch",
    "twitter",
    "type",
    "umbrella",
    "underline",
    "unlock",
    "upload",
    "upload-cloud",
    "user",
    "user-check",
    "user-minus",
    "user-plus",
    "user-x",
    "users",
    "video",
    "video-off",
    "voicemail",
    "volume",
    "volume-1",
    "volume-2",
    "volume-x",
    "watch",
    "wifi",
    "wifi-off",
    "wind",
    "x",
    "x-circle",
    "x-octagon",
    "x-square",
    "youtube",
    "zap",
    "zap-off",
    "zoom-in",
    "zoom-out",
  ],
  _i = "https://framer.com/m/feather-icons/",
  Wi = ut.map((r) => r.charAt(0).toUpperCase() + r.slice(1)),
  Ei = ut.reduce((r, a) => ((r[a.toLowerCase()] = a), r), {});
function Oe(r) {
  let {
      color: a,
      selectByList: s,
      iconSearch: i,
      iconSelection: c,
      onClick: d,
      onMouseDown: g,
      onMouseUp: w,
      onMouseEnter: p,
      onMouseLeave: l,
      mirrored: y,
    } = r,
    x = B(!1),
    P = qr(ut, s, i, c, Ei),
    [q, C] = K(P === "Home" ? $a(ce) : null);
  async function o() {
    let F = !0;
    try {
      let j = await import(`${_i}${P}.js@0.0.29`);
      F && C(j.default(ce));
    } catch (S) {
      (console.log(S), F && C(null));
    }
    return () => {
      F = !1;
    };
  }
  U(() => {
    o();
  }, [P]);
  let M = ge.current() === ge.canvas ? e(kr, {}) : null;
  return e("div", {
    style: { display: "contents" },
    onClick: d,
    onMouseEnter: p,
    onMouseLeave: l,
    onMouseDown: g,
    onMouseUp: w,
    children: q
      ? e(q, {
          style: {
            width: "100%",
            height: "100%",
            transform: y ? "scale(-1, 1)" : void 0,
          },
          color: a,
        })
      : M,
  });
}
Oe.displayName = "Feather";
Oe.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: !0,
  mirrored: !1,
};
re(Oe, {
  selectByList: {
    type: m.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: Oe.defaultProps.selectByList,
  },
  iconSelection: {
    type: m.Enum,
    options: ut,
    optionTitles: Wi,
    defaultValue: Oe.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: r }) => !r,
    description:
      "Find every icon name on the [Feather site](https://feathericons.com/)",
  },
  iconSearch: {
    type: m.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: r }) => r,
  },
  mirrored: {
    type: m.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: Oe.defaultProps.mirrored,
  },
  color: { type: m.Color, title: "Color", defaultValue: Oe.defaultProps.color },
  ...Cr,
});
var xt = {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Jt = {
    ...xt,
    borderRadius: 6,
    background: "rgba(136, 85, 255, 0.3)",
    color: "#85F",
    border: "1px dashed #85F",
    flexDirection: "column",
  },
  Or = {
    onClick: { type: m.EventHandler },
    onMouseEnter: { type: m.EventHandler },
    onMouseLeave: { type: m.EventHandler },
  },
  ji = {
    type: m.Number,
    title: "Font Size",
    min: 2,
    max: 200,
    step: 1,
    displayStepper: !0,
  },
  Li = {
    font: {
      type: m.Boolean,
      title: "Font",
      defaultValue: !1,
      disabledTitle: "Default",
      enabledTitle: "Custom",
    },
    fontFamily: {
      type: m.String,
      title: "Family",
      placeholder: "Inter",
      hidden: ({ font: r }) => !r,
    },
    fontWeight: {
      type: m.Enum,
      title: "Weight",
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      optionTitles: [
        "Thin",
        "Extra-light",
        "Light",
        "Regular",
        "Medium",
        "Semi-bold",
        "Bold",
        "Extra-bold",
        "Black",
      ],
      hidden: ({ font: r }) => !r,
    },
  };
function $t(r, a) {
  return tn(!0, r, a);
}
function ea(r, a) {
  return tn(!1, r, a);
}
function tn(r, a, s = !0) {
  let i = ft();
  U(() => {
    s && i === r && a();
  }, [i]);
}
var Di = () => {
    if (typeof T < "u") {
      let r = T.userAgent.toLowerCase();
      return (
        (r.indexOf("safari") > -1 ||
          r.indexOf("framermobile") > -1 ||
          r.indexOf("framerx") > -1) &&
        r.indexOf("chrome") < 0
      );
    } else return !1;
  },
  ra = () => O(() => Di(), []);
function Yr() {
  return O(() => ge.current() === ge.canvas, []);
}
function Zr(r) {
  let {
    borderRadius: a,
    isMixedBorderRadius: s,
    topLeftRadius: i,
    topRightRadius: c,
    bottomRightRadius: d,
    bottomLeftRadius: g,
  } = r;
  return O(
    () => (s ? `${i}px ${c}px ${d}px ${g}px` : `${a}px`),
    [a, s, i, c, d, g],
  );
}
var Xr = {
  borderRadius: {
    title: "Radius",
    type: m.FusedNumber,
    toggleKey: "isMixedBorderRadius",
    toggleTitles: ["Radius", "Radius per corner"],
    valueKeys: [
      "topLeftRadius",
      "topRightRadius",
      "bottomRightRadius",
      "bottomLeftRadius",
    ],
    valueLabels: ["TL", "TR", "BR", "BL"],
    min: 0,
  },
};
var Yi = {
  padding: {
    type: m.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
    title: "Padding",
  },
};
var er;
(function (r) {
  ((r.Fill = "fill"),
    (r.Contain = "contain"),
    (r.Cover = "cover"),
    (r.None = "none"),
    (r.ScaleDown = "scale-down"));
})(er || (er = {}));
var Ke;
(function (r) {
  ((r.Video = "Upload"), (r.Url = "URL"));
})(Ke || (Ke = {}));
function Zi(r) {
  let {
    width: a,
    height: s,
    topLeft: i,
    topRight: c,
    bottomRight: d,
    bottomLeft: g,
    id: w,
    children: p,
    ...l
  } = r;
  return l;
}
function rr(r) {
  let a = Zi(r);
  return e(Ki, { ...a });
}
function Xi(r) {
  let a = ft(),
    s = B(!1),
    i = Xe((g) => {
      if (!r.current) return;
      let w = (g === 1 ? 0.999 : g) * r.current.duration,
        p = Math.abs(r.current.currentTime - w) < 0.1;
      r.current.duration > 0 && !p && (r.current.currentTime = w);
    }, []),
    c = Xe(() => {
      !(
        r.current.currentTime > 0 &&
        r.current.onplaying &&
        !r.current.paused &&
        !r.current.ended &&
        r.current.readyState > r.current.HAVE_CURRENT_DATA
      ) &&
        r.current &&
        !s.current &&
        a &&
        ((s.current = !0),
        r.current
          .play()
          .catch((w) => {})
          .finally(() => (s.current = !1)));
    }, []),
    d = Xe(() => {
      !r.current || s.current || r.current.pause();
    }, []);
  return { play: c, pause: d, setProgress: i };
}
function Qi({
  playingProp: r,
  muted: a,
  loop: s,
  playsinline: i,
  controls: c,
}) {
  let [d] = K(() => r),
    [g, w] = K(!1);
  r !== d && !g && w(!0);
  let p = d && a && s && i && !c && !g,
    l;
  return (
    p ? (l = "on-viewport") : d ? (l = "on-mount") : (l = "no-autoplay"),
    l
  );
}
var nn = !1,
  Ki = Ia(function (a) {
    let {
        srcType: s,
        srcFile: i,
        srcUrl: c,
        playing: d,
        muted: g,
        playsinline: w,
        controls: p,
        progress: l,
        objectFit: y,
        backgroundColor: x,
        onSeeked: P,
        onPause: q,
        onPlay: C,
        onEnd: o,
        onClick: u,
        onMouseEnter: M,
        onMouseLeave: F,
        onMouseDown: S,
        onMouseUp: j,
        poster: H,
        posterEnabled: G,
        startTime: R,
        volume: _,
        loop: Y,
      } = a,
      I = B(),
      de = ra(),
      pe = B(null),
      Ce = B(null),
      oe = Yr(),
      J = Zr(a),
      se = oe
        ? "no-autoplay"
        : Qi({
            playingProp: d,
            muted: g,
            loop: Y,
            playsinline: w,
            controls: p,
          }),
      qe = oe ? !0 : Lr(I),
      le = R === 100 ? 99.9 : R,
      { play: Ie, pause: Be, setProgress: ze } = Xi(I);
    (U(() => {
      oe || (d ? Ie() : Be());
    }, [d]),
      U(() => {
        oe || (se === "on-viewport" && (qe ? Ie() : Be()));
      }, [se, qe]),
      U(() => {
        if (!nn) {
          nn = !0;
          return;
        }
        let $ = lt(l) ? l.get() : (l ?? 0) * 0.01;
        ze(($ ?? 0) || (le ?? 0) / 100);
      }, [le, i, c, l]),
      U(() => {
        if (lt(l)) return l.on("change", ($) => ze($));
      }, [l]),
      $t(() => {
        pe.current !== null && I.current && ((!Ce && Y) || !pe.current) && Ie();
      }),
      ea(() => {
        I.current &&
          ((Ce.current = I.current.ended),
          (pe.current = I.current.paused),
          Be());
      }));
    let Ye = O(() => {
      let $ = "";
      if (s === Ke.Url) return c + $;
      if (s === Ke.Video) return i + $;
    }, [s, i, c, le]);
    return (
      U(() => {
        de && I.current && se === "on-mount" && setTimeout(() => Ie(), 50);
      }, []),
      U(() => {
        I.current && !g && (I.current.volume = (_ ?? 0) / 100);
      }, [_]),
      e("video", {
        onClick: u,
        onMouseEnter: M,
        onMouseLeave: F,
        onMouseDown: S,
        onMouseUp: j,
        src: Ye,
        loop: Y,
        ref: I,
        onSeeked: ($) => P?.($),
        onPause: ($) => q?.($),
        onPlay: ($) => C?.($),
        onEnded: ($) => o?.($),
        autoPlay: se === "on-mount",
        poster: G ? H : void 0,
        onLoadedData: () => {
          I.current &&
            (I.current.currentTime < 0.3 && ze((le ?? 0) * 0.01),
            se === "on-mount" && Ie());
        },
        controls: p,
        muted: oe ? !0 : g,
        playsInline: w,
        style: {
          cursor: u ? "pointer" : "auto",
          width: "100%",
          height: "100%",
          borderRadius: J,
          display: "block",
          objectFit: y,
          backgroundColor: x,
          objectPosition: "50% 50%",
        },
      })
    );
  });
rr.displayName = "Video";
rr.defaultProps = {
  srcType: Ke.Url,
  srcUrl:
    "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
  srcFile: "",
  posterEnabled: !1,
  controls: !1,
  playing: !0,
  loop: !0,
  muted: !0,
  playsinline: !0,
  restartOnEnter: !1,
  objectFit: er.Cover,
  backgroundColor: "rgba(0,0,0,0)",
  radius: 0,
  volume: 25,
  startTime: 0,
};
var Ji = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu;
function $i(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function eo(r) {
  return (r.match(Ji) || []).map($i).join(" ");
}
var on = [er.Cover, er.Fill, er.Contain, er.ScaleDown, er.None];
re(rr, {
  srcType: {
    type: m.Enum,
    displaySegmentedControl: !0,
    title: "Source",
    options: [Ke.Url, Ke.Video],
  },
  srcUrl: {
    type: m.String,
    title: " ",
    placeholder: "../example.mp4",
    hidden(r) {
      return r.srcType === Ke.Video;
    },
    description:
      "Hosted video file URL. For YouTube, use the YouTube component.",
  },
  srcFile: {
    type: m.File,
    title: " ",
    allowedFileTypes: ["mp4"],
    hidden(r) {
      return r.srcType === Ke.Url;
    },
  },
  playing: {
    type: m.Boolean,
    title: "Playing",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  posterEnabled: {
    type: m.Boolean,
    title: "Poster",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  poster: { type: m.Image, title: " ", hidden: ({ posterEnabled: r }) => !r },
  backgroundColor: { type: m.Color, title: "Background" },
  ...Xr,
  startTime: {
    title: "Start Time",
    type: m.Number,
    min: 0,
    max: 100,
    step: 0.1,
    unit: "%",
  },
  loop: {
    type: m.Boolean,
    title: "Loop",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  objectFit: {
    type: m.Enum,
    title: "Fit",
    options: on,
    optionTitles: on.map(eo),
  },
  controls: {
    type: m.Boolean,
    title: "Controls",
    enabledTitle: "Show",
    disabledTitle: "Hide",
  },
  muted: {
    type: m.Boolean,
    title: "Muted",
    enabledTitle: "Yes",
    disabledTitle: "No",
  },
  volume: {
    type: m.Number,
    max: 100,
    min: 0,
    unit: "%",
    hidden: ({ muted: r }) => r,
  },
  onEnd: { type: m.EventHandler },
  onSeeked: { type: m.EventHandler },
  onPause: { type: m.EventHandler },
  onPlay: { type: m.EventHandler },
  ...Or,
});
var tr;
(function (r) {
  ((r.Normal = "Off"), (r.Auto = "On"), (r.Loop = "Loop"));
})(tr || (tr = {}));
var ar;
(function (r) {
  ((r.High = "High Quality"),
    (r.Medium = "Medium Quality"),
    (r.Low = "Low Quality"),
    (r.Off = "Off"));
})(ar || (ar = {}));
var mr;
(function (r) {
  ((r.WebP = "webp"), (r.JPG = "jpg"));
})(mr || (mr = {}));
function Rr({
  url: r,
  play: a,
  shouldMute: s,
  thumbnail: i,
  isRed: c,
  onClick: d,
  onMouseEnter: g,
  onMouseLeave: w,
  onMouseDown: p,
  onMouseUp: l,
  ...y
}) {
  let x = Yr(),
    P = a !== tr.Normal,
    q = x || (i !== ar.Off && !P),
    [C, o] = _t(() => !0, !1),
    [u, M] = _t(() => !0, !q),
    [F, S] = K(!1),
    j = Zr(y),
    H = j !== "0px 0px 0px 0px" && j !== "0px";
  if (r === "") return e(io, {});
  let G = to(r);
  if (G === void 0) return e(oo, { message: "Invalid Youtube URL." });
  let [R, _] = G,
    Y = ao(R, i, no() ? mr.WebP : mr.JPG),
    I = _.searchParams;
  return (
    I.set("iv_load_policy", "3"),
    I.set("rel", "0"),
    I.set("modestbranding", "1"),
    I.set("playsinline", "1"),
    (P || q) && I.set("autoplay", "1"),
    P && s && I.set("mute", "1"),
    a === tr.Loop && (I.set("loop", "1"), I.set("playlist", R)),
    c || I.set("color", "white"),
    f("article", {
      onPointerEnter: () => S(!0),
      onPointerLeave: () => S(!1),
      onPointerOver: o,
      onClick: M,
      style: {
        ...fo,
        borderRadius: j,
        transform: H && (u || x) ? "translateZ(0.000001px)" : "unset",
        cursor: "pointer",
        overflow: "hidden",
      },
      children: [
        C && e("link", { rel: "preconnect", href: "https://www.youtube.com" }),
        C && e("link", { rel: "preconnect", href: "https://www.google.com" }),
        e("div", {
          style: {
            ...ln,
            background: q ? `center / cover url(${Y}) no-repeat` : void 0,
          },
        }),
        u
          ? e("iframe", {
              style: ln,
              src: _.href,
              frameBorder: "0",
              allow:
                "presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
              onClick: d,
              onMouseEnter: g,
              onMouseLeave: w,
              onMouseDown: p,
              onMouseUp: l,
            })
          : e(so, { onClick: M, isHovered: F, isRed: c }),
      ],
    })
  );
}
Rr.displayName = "YouTube";
re(Rr, {
  url: { type: m.String, title: "Video" },
  play: { type: m.Enum, title: "Autoplay", options: Object.values(tr) },
  shouldMute: {
    title: "Mute",
    type: m.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    hidden(r) {
      return r.play === tr.Normal;
    },
  },
  thumbnail: {
    title: "Thumbnail",
    description: "Showing a thumbnail improves performance.",
    type: m.Enum,
    options: Object.values(ar),
    hidden(r) {
      return r.play !== tr.Normal;
    },
  },
  isRed: {
    title: "Color",
    type: m.Boolean,
    enabledTitle: "Red",
    disabledTitle: "White",
  },
  ...Xr,
  ...Or,
});
var ro = {
  url: "https://youtu.be/smPos0mJvh8",
  play: tr.Normal,
  shouldMute: !0,
  thumbnail: ar.Medium,
  isRed: !0,
};
Rr.defaultProps = ro;
function to(r) {
  let a;
  try {
    a = new URL(r);
  } catch {
    let s = ta(r);
    return [r, s];
  }
  if (
    a.hostname === "youtube.com" ||
    a.hostname === "www.youtube.com" ||
    a.hostname === "youtube-nocookie.com" ||
    a.hostname === "www.youtube-nocookie.com"
  ) {
    let s = a.pathname.slice(1).split("/");
    if (s[0] === "watch") {
      let i = a.searchParams.get("v"),
        c = ta(i);
      return [i, c];
    }
    if (s[0] === "embed") return [s[1], a];
  }
  if (a.hostname === "youtu.be") {
    let s = a.pathname.slice(1),
      i = ta(s);
    return [s, i];
  }
}
function ta(r) {
  return new URL(`https://www.youtube.com/embed/${r}`);
}
function ao(r, a, s = mr.JPG) {
  let i = mr.WebP ? "https://i.ytimg.com/vi_webp/" : "https://i.ytimg.com/vi/",
    c = mr.WebP ? "webp" : "jpg";
  switch (a) {
    case ar.Low:
      return `${i}${r}/hqdefault.${c}`;
    case ar.Medium:
      return `${i}${r}/sddefault.${c}`;
    case ar.High:
      return `${i}${r}/maxresdefault.${c}`;
    default:
      return `${i}${r}/0.${c}`;
  }
}
var sn;
function no() {
  if (!N) return !0;
  if (sn !== void 0) return sn;
  let r = document.createElement("canvas");
  return r.getContext && r.getContext("2d")
    ? r.toDataURL("image/webp").indexOf("data:image/webp") == 0
    : !1;
}
function io() {
  return e("div", {
    style: { ...Jt, overflow: "hidden" },
    children: e("div", {
      style: fn,
      children:
        "To embed a Youtube video, add the URL to the properties\xA0panel.",
    }),
  });
}
function oo({ message: r }) {
  return e("div", {
    className: "framerInternalUI-errorPlaceholder",
    style: { ...xt, overflow: "hidden" },
    children: f("div", { style: fn, children: ["Error: ", r] }),
  });
}
function so({ onClick: r, isHovered: a, isRed: s }) {
  return e("button", {
    onClick: r,
    "aria-label": "Play",
    style: lo,
    children: f("svg", {
      height: "100%",
      version: "1.1",
      viewBox: "0 0 68 48",
      width: "100%",
      children: [
        e("path", {
          d: "M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",
          fill: a ? (s ? "#f00" : "#000") : "#212121",
          fillOpacity: a && s ? 1 : 0.8,
          style: {
            transition:
              "fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)",
          },
        }),
        e("path", { d: "M 45,24 27,14 27,34", fill: "#fff" }),
      ],
    }),
  });
}
var lo = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 68,
    height: 48,
    padding: 0,
    border: "none",
    background: "transparent",
    cursor: "pointer",
  },
  fo = { position: "relative", width: "100%", height: "100%" },
  fn = { textAlign: "center", minWidth: 140 },
  ln = { position: "absolute", top: 0, left: 0, height: "100%", width: "100%" };
var yt = () => typeof document == "object";
function co() {
  if (yt()) {
    if (typeof document.hidden < "u") return "visibilitychange";
    if (typeof document.msHidden < "u") return "msvisibilitychange";
    if (typeof document.webkitHidden < "u") return "webkitvisibilitychange";
  }
}
function mo() {
  if (yt()) {
    if (typeof document.hidden < "u") return "hidden";
    if (typeof document.msHidden < "u") return "msHidden";
    if (typeof document.webkitHidden < "u") return "webkitHidden";
  }
}
function cn() {
  if (yt()) return !document[mo()];
}
function mn() {
  if (!yt()) return;
  let [r, a] = K(cn()),
    s = () => a(cn());
  return (
    U(() => {
      let i = co();
      return (
        document.addEventListener(i, s, !1),
        () => {
          document.removeEventListener(i, s);
        }
      );
    }),
    r
  );
}
function xe(r) {
  let {
      slots: a,
      startFrom: s,
      direction: i,
      effectsOptions: c,
      autoPlayControl: d,
      dragControl: g,
      alignment: w,
      gap: p,
      padding: l,
      paddingPerSide: y,
      paddingTop: x,
      paddingRight: P,
      paddingBottom: q,
      paddingLeft: C,
      itemAmount: o,
      fadeOptions: u,
      intervalControl: M,
      transitionControl: F,
      arrowOptions: S,
      borderRadius: j,
      progressOptions: H,
      style: G,
    } = r,
    {
      effectsOpacity: R,
      effectsScale: _,
      effectsRotate: Y,
      effectsPerspective: I,
      effectsHover: de,
    } = c,
    {
      fadeContent: pe,
      overflow: Ce,
      fadeWidth: oe,
      fadeInset: J,
      fadeAlpha: se,
    } = u,
    {
      showMouseControls: qe,
      arrowSize: le,
      arrowRadius: Ie,
      arrowFill: Be,
      leftArrow: ze,
      rightArrow: Ye,
      arrowShouldSpace: Me = !0,
      arrowShouldFadeIn: $ = !1,
      arrowPosition: X,
      arrowPadding: Ge,
      arrowGap: nr,
      arrowPaddingTop: Je,
      arrowPaddingRight: ir,
      arrowPaddingBottom: pr,
      arrowPaddingLeft: hr,
    } = S,
    {
      showProgressDots: Le,
      dotSize: gr,
      dotsInset: or,
      dotsRadius: zr,
      dotsPadding: Gr,
      dotsGap: Hr,
      dotsFill: sr,
      dotsBackground: Q,
      dotsActiveOpacity: Z,
      dotsOpacity: Ve,
      dotsBlur: be,
    } = H,
    He = y ? `${x}px ${P}px ${q}px ${C}px` : `${l}px`,
    he = ge.current() === ge.canvas,
    ve = lr.count(a) > 0,
    D = i === "left" || i === "right",
    v = i === "right" || i === "bottom";
  if (!ve)
    return f("section", {
      style: po,
      children: [
        e("div", { style: ho, children: "\u2B50\uFE0F" }),
        e("p", { style: go, children: "Connect to Content" }),
        e("p", {
          style: uo,
          children:
            "Add layers or components to make infinite auto-playing slideshows.",
        }),
      ],
    });
  let A = B(null),
    ye = O(() => a.map((W) => Er()), [a]),
    Nt = B(void 0),
    [ee, Nn] = K({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
    }),
    [Fn, ua] = K(!1),
    [Tn, xa] = K(d),
    [In, ya] = K(!1),
    [ur, ba] = K(!1),
    Ft = [],
    va = 4;
  he && (va = 1);
  let wa = Xe(() => {
    Lt.read(() => {
      if (ve && A.current) {
        let W = a.length - 1,
          We = D ? A.current.offsetWidth : A.current.offsetHeight,
          Ae = ye[0].current
            ? D
              ? ye[0].current.offsetLeft
              : ye[0].current.offsetTop
            : 0,
          vr =
            (ye[W].current
              ? D
                ? ye[W].current.offsetLeft + ye[W].current.offsetWidth
                : ye[W].current.offsetTop + ye[W].current.offsetHeight
              : 0) -
            Ae +
            p,
          ot = ye[0].current
            ? D
              ? ye[0].current.offsetWidth
              : ye[0].current.offsetHeight
            : 0,
          zt = ye[0].current ? ye[0].current.offsetWidth : 0,
          Gt = ye[0].current ? ye[0].current.offsetHeight : 0;
        Nn({
          parent: We,
          children: vr,
          item: ot,
          itemWidth: zt,
          itemHeight: Gt,
        });
      }
    });
  }, [ve]);
  Ht(() => {
    ve && wa();
  }, [ve, o]);
  let Tt = B(!0);
  (U(
    () =>
      gt(A.current, ({ contentSize: W }) => {
        (!Tt.current && (W.width || W.height) && (wa(), ba(!0)),
          (Tt.current = !1));
      }),
    [],
  ),
    U(() => {
      if (ur) {
        let W = setTimeout(() => ba(!1), 500);
        return () => clearTimeout(W);
      }
    }, [ur]));
  let xr = a?.length,
    nt = he ? 0 : ee?.children,
    It = ee?.item + p,
    Vn = s * It,
    [_e, _r] = K(s + xr),
    [An, Sa] = K(!1),
    Pa = mn(),
    ka = v ? 1 : -1,
    yr = jr(nt),
    Ca = D ? -s * (ee?.itemWidth + p) : -s * (ee?.itemHeight + p),
    Vt = () => ka * _e * It,
    At = he
      ? 0
      : Ee(yr, (W) => {
          let We = Qe(-nt, -nt * 2, W);
          return isNaN(We) ? 0 : We;
        }),
    Bn = Qe(0, xr, _e),
    Mn = Qe(0, -xr, _e);
  Ht(() => {
    ee?.children !== null && !Tt.current && ur && yr.set(Vt());
  }, [ee, nt, ka, Vn, _e, It, ur]);
  let qa = () => {
      he ||
        !ve ||
        !ee.parent ||
        An ||
        (yr.get() !== Vt() && jt(yr, Vt(), F),
        d &&
          Tn &&
          (Nt.current = setTimeout(() => {
            (_r(_e + 1), qa());
          }, M * 1e3)));
    },
    br = (W) => {
      _r(v ? _e - W : _e + W);
    },
    zn = (W) => {
      let We = Qe(0, xr, _e),
        Ae = Qe(0, -xr, _e),
        Ze = W - We,
        vr = W - Math.abs(Ae);
      _r(v ? _e - vr : _e + Ze);
    },
    Gn = () => {
      Sa(!0);
    },
    Hn = (W, { offset: We, velocity: Ae }) => {
      Sa(!1);
      let Ze = D ? We.x : We.y,
        vr = 200,
        ot = D ? Ae.x : Ae.y,
        zt = Ze < -ee.item / 2,
        Gt = Ze > ee.item / 2,
        Xn = Math.abs(Ze),
        st = Math.round(Xn / ee.item),
        Ta = st === 0 ? 1 : st;
      ot > vr ? br(-Ta) : ot < -vr ? br(Ta) : (zt && br(st), Gt && br(-st));
    };
  U(() => {
    if (!(!Pa || ur))
      return (qa(), () => Nt.current && clearTimeout(Nt.current));
  }, [Ft, Pa, ur]);
  let _n = 0,
    Ra = `calc(${100 / o}% - ${p}px + ${p / o}px)`;
  for (let W = 0; W < va; W++)
    Ft.push(
      ...lr.map(a, (We, Ae) => {
        let Ze;
        return (
          Ae === 0 && (Ze = ye[0]),
          Ae === a.length - 1 && (Ze = ye[1]),
          e(
            bo,
            {
              ref: ye[Ae],
              slideKey: W + Ae + "lg",
              index: W,
              width: D && o > 1 ? Ra : "100%",
              height: D ? "100%" : o > 1 ? Ra : "100%",
              size: ee,
              child: We,
              numChildren: a?.length,
              wrappedValue: At,
              childCounter: _n++,
              gap: p,
              isCanvas: he,
              isHorizontal: D,
              effectsOpacity: R,
              effectsScale: _,
              effectsRotate: Y,
              children: W + Ae,
            },
            W + Ae + "lg",
          )
        );
      }),
    );
  let Wn = D ? "to right" : "to bottom",
    Na = oe / 2,
    En = 100 - oe / 2,
    jn = yo(J, 0, Na),
    Ln = 100 - J,
    Bt = `linear-gradient(${Wn}, rgba(0, 0, 0, ${se}) ${jn}%, rgba(0, 0, 0, 1) ${Na}%, rgba(0, 0, 0, 1) ${En}%, rgba(0, 0, 0, ${se}) ${Ln}%)`,
    Mt = [],
    it = {};
  if (Le) {
    for (let W = 0; W < a?.length; W++)
      Mt.push(
        e(
          vo,
          {
            dotStyle: { ...So, width: gr, height: gr, backgroundColor: sr },
            buttonStyle: aa,
            selectedOpacity: Z,
            opacity: Ve,
            onClick: () => zn(W),
            wrappedIndex: Bn,
            wrappedIndexInverted: Mn,
            total: xr,
            index: W,
            gap: Hr,
            padding: Gr,
            isHorizontal: D,
            isInverted: v,
          },
          W,
        ),
      );
    be > 0 &&
      (it.backdropFilter =
        it.WebkitBackdropFilter =
        it.MozBackdropFilter =
          `blur(${be}px)`);
  }
  let Dn = g
      ? {
          drag: D ? "x" : "y",
          onDragStart: Gn,
          onDragEnd: Hn,
          dragDirectionLock: !0,
          values: { x: yr, y: yr },
          dragMomentum: !1,
        }
      : {},
    Un = X === "top-left" || X === "top-mid" || X === "top-right",
    On = X === "bottom-left" || X === "bottom-mid" || X === "bottom-right",
    Yn = X === "top-left" || X === "bottom-left",
    Zn = X === "top-right" || X === "bottom-right",
    Fa = X === "top-mid" || X === "bottom-mid" || X === "auto";
  return f("section", {
    style: {
      ...dn,
      padding: He,
      WebkitMaskImage: pe ? Bt : void 0,
      MozMaskImage: pe ? Bt : void 0,
      maskImage: pe ? Bt : void 0,
      opacity: ee?.item !== null ? 1 : 0,
      userSelect: "none",
    },
    onMouseEnter: () => {
      (ua(!0), de || xa(!1));
    },
    onMouseLeave: () => {
      (ua(!1), de || xa(!0));
    },
    onMouseDown: (W) => {
      (W.preventDefault(), ya(!0));
    },
    onMouseUp: () => ya(!1),
    children: [
      e("div", {
        style: {
          width: "100%",
          height: "100%",
          margin: 0,
          padding: "inherit",
          position: "absolute",
          inset: 0,
          overflow: Ce ? "visible" : "hidden",
          borderRadius: j,
          userSelect: "none",
          perspective: he ? "none" : I,
        },
        children: e(t.ul, {
          ref: A,
          ...Dn,
          style: {
            ...dn,
            gap: p,
            placeItems: w,
            x: D ? (he ? Ca : At) : 0,
            y: D ? 0 : he ? Ca : At,
            flexDirection: D ? "row" : "column",
            transformStyle: Y !== 0 && !he ? "preserve-3d" : void 0,
            cursor: g ? (In ? "grabbing" : "grab") : "auto",
            userSelect: "none",
            ...G,
          },
          children: Ft,
        }),
      }),
      f("fieldset", {
        style: { ...xo },
        "aria-label": "Slideshow pagination controls",
        className: "framer--slideshow-controls",
        children: [
          f(t.div, {
            style: {
              position: "absolute",
              display: "flex",
              flexDirection: D ? "row" : "column",
              justifyContent: Me ? "space-between" : "center",
              gap: Me ? "unset" : nr,
              opacity: $ ? 0 : 1,
              alignItems: "center",
              inset: Ge,
              top: Me ? Ge : Un ? Je : "unset",
              left: Me ? Ge : Yn ? hr : Fa ? 0 : "unset",
              right: Me ? Ge : Zn ? ir : Fa ? 0 : "unset",
              bottom: Me ? Ge : On ? pr : "unset",
            },
            animate: $ && { opacity: Fn ? 1 : 0 },
            transition: F,
            children: [
              e(t.button, {
                type: "button",
                style: {
                  ...aa,
                  backgroundColor: Be,
                  width: le,
                  height: le,
                  borderRadius: Ie,
                  rotate: D ? 0 : 90,
                  display: qe ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => br(-1),
                "aria-label": "Previous",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: e("img", {
                  width: le,
                  height: le,
                  src:
                    ze ||
                    "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                  alt: "Back Arrow",
                }),
              }),
              e(t.button, {
                type: "button",
                style: {
                  ...aa,
                  backgroundColor: Be,
                  width: le,
                  height: le,
                  borderRadius: Ie,
                  rotate: D ? 0 : 90,
                  display: qe ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => br(1),
                "aria-label": "Next",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: e("img", {
                  width: le,
                  height: le,
                  src:
                    Ye ||
                    "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                  alt: "Next Arrow",
                }),
              }),
            ],
          }),
          Mt.length > 1
            ? e("div", {
                style: {
                  ...wo,
                  left: D ? "50%" : or,
                  top: D ? "unset" : "50%",
                  transform: D ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: D ? "row" : "column",
                  bottom: D ? or : "unset",
                  borderRadius: zr,
                  backgroundColor: Q,
                  userSelect: "none",
                  ...it,
                },
                children: Mt,
              })
            : null,
        ],
      }),
    ],
  });
}
xe.defaultProps = {
  direction: "left",
  dragControl: !1,
  startFrom: 0,
  itemAmount: 1,
  infinity: !0,
  gap: 10,
  padding: 10,
  autoPlayControl: !0,
  effectsOptions: {
    effectsOpacity: 1,
    effectsScale: 1,
    effectsRotate: 0,
    effectsPerspective: 1200,
    effectsHover: !0,
  },
  transitionControl: { type: "spring", stiffness: 200, damping: 40 },
  fadeOptions: {
    fadeContent: !1,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  arrowOptions: {
    showMouseControls: !0,
    arrowShouldFadeIn: !1,
    arrowShouldSpace: !0,
    arrowFill: "rgba(0,0,0,0.2)",
    arrowSize: 40,
  },
  progressOptions: { showProgressDots: !0 },
};
re(xe, {
  slots: {
    type: m.Array,
    title: "Content",
    control: { type: m.ComponentInstance },
  },
  direction: {
    type: m.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    displaySegmentedControl: !0,
    defaultValue: xe.defaultProps.direction,
  },
  autoPlayControl: { type: m.Boolean, title: "Auto Play", defaultValue: !0 },
  intervalControl: {
    type: m.Number,
    title: "Interval",
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: !0,
    unit: "s",
    hidden: (r) => !r.autoPlayControl,
  },
  dragControl: { type: m.Boolean, title: "Draggable", defaultValue: !1 },
  startFrom: {
    type: m.Number,
    title: "Current",
    min: 0,
    max: 10,
    displayStepper: !0,
    defaultValue: xe.defaultProps.startFrom,
  },
  effectsOptions: {
    type: m.Object,
    title: "Effects",
    controls: {
      effectsOpacity: {
        type: m.Number,
        title: "Opacity",
        defaultValue: xe.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsScale: {
        type: m.Number,
        title: "Scale",
        defaultValue: xe.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsPerspective: {
        type: m.Number,
        title: "Perspective",
        defaultValue: xe.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: m.Number,
        title: "Rotate",
        defaultValue: xe.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: m.Boolean,
        title: "On Hover",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        defaultValue: xe.defaultProps.effectsOptions.effectsHover,
      },
    },
  },
  alignment: {
    type: m.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  itemAmount: {
    type: m.Number,
    title: "Items",
    min: 1,
    max: 10,
    displayStepper: !0,
    defaultValue: xe.defaultProps.itemAmount,
  },
  gap: { type: m.Number, title: "Gap", min: 0 },
  padding: {
    title: "Padding",
    type: m.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    defaultValue: 0,
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  borderRadius: {
    type: m.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
  transitionControl: {
    type: m.Transition,
    defaultValue: xe.defaultProps.transitionControl,
    title: "Transition",
  },
  fadeOptions: {
    type: m.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: m.Boolean, title: "Fade", defaultValue: !1 },
      overflow: {
        type: m.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(r) {
          return r.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: m.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeInset: {
        type: m.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: m.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(r) {
          return r.fadeContent === !1;
        },
      },
    },
  },
  arrowOptions: {
    type: m.Object,
    title: "Arrows",
    controls: {
      showMouseControls: {
        type: m.Boolean,
        title: "Show",
        defaultValue: xe.defaultProps.arrowOptions.showMouseControls,
      },
      arrowFill: {
        type: m.Color,
        title: "Fill",
        hidden: (r) => !r.showMouseControls,
        defaultValue: xe.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: {
        type: m.Image,
        title: "Previous",
        hidden: (r) => !r.showMouseControls,
      },
      rightArrow: {
        type: m.Image,
        title: "Next",
        hidden: (r) => !r.showMouseControls,
      },
      arrowSize: {
        type: m.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: xe.defaultProps.arrowOptions.arrowSize,
        hidden: (r) => !r.showMouseControls,
      },
      arrowRadius: {
        type: m.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (r) => !r.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: m.Boolean,
        title: "Fade In",
        defaultValue: !1,
        hidden: (r) => !r.showMouseControls,
      },
      arrowShouldSpace: {
        type: m.Boolean,
        title: "Distance",
        enabledTitle: "Space",
        disabledTitle: "Group",
        defaultValue: xe.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (r) => !r.showMouseControls,
      },
      arrowPosition: {
        type: m.Enum,
        title: "Position",
        options: [
          "auto",
          "top-left",
          "top-mid",
          "top-right",
          "bottom-left",
          "bottom-mid",
          "bottom-right",
        ],
        optionTitles: [
          "Center",
          "Top Left",
          "Top Middle",
          "Top Right",
          "Bottom Left",
          "Bottom Middle",
          "Bottom Right",
        ],
        hidden: (r) => !r.showMouseControls || r.arrowShouldSpace,
      },
      arrowPadding: {
        type: m.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (r) => !r.showMouseControls || !r.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: m.Number,
        title: "Top",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "bottom-mid" ||
          r.arrowPosition === "bottom-left" ||
          r.arrowPosition === "bottom-right",
      },
      arrowPaddingBottom: {
        type: m.Number,
        title: "Bottom",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "top-mid" ||
          r.arrowPosition === "top-left" ||
          r.arrowPosition === "top-right",
      },
      arrowPaddingRight: {
        type: m.Number,
        title: "Right",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "top-left" ||
          r.arrowPosition === "top-mid" ||
          r.arrowPosition === "bottom-left" ||
          r.arrowPosition === "bottom-mid",
      },
      arrowPaddingLeft: {
        type: m.Number,
        title: "Left",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (r) =>
          !r.showMouseControls ||
          r.arrowShouldSpace ||
          r.arrowPosition === "auto" ||
          r.arrowPosition === "top-right" ||
          r.arrowPosition === "top-mid" ||
          r.arrowPosition === "bottom-right" ||
          r.arrowPosition === "bottom-mid",
      },
      arrowGap: {
        type: m.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showMouseControls || r.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: m.Object,
    title: "Dots",
    controls: {
      showProgressDots: { type: m.Boolean, title: "Show", defaultValue: !1 },
      dotSize: {
        type: m.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsInset: {
        type: m.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsGap: {
        type: m.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsPadding: {
        type: m.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsFill: {
        type: m.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsBackground: {
        type: m.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsRadius: {
        type: m.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsOpacity: {
        type: m.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsActiveOpacity: {
        type: m.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
      dotsBlur: {
        type: m.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (r) => !r.showProgressDots || r.showScrollbar,
      },
    },
  },
});
var dn = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  po = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  ho = { fontSize: 32, marginBottom: 10 },
  go = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  uo = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 180,
    lineHeight: 1.5,
    textAlign: "center",
  },
  aa = {
    border: "none",
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  xo = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    pointerEvents: "none",
    userSelect: "none",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  yo = (r, a, s) => Math.min(Math.max(r, a), s),
  bo = fe(function (a, s) {
    var i, c;
    let {
        slideKey: d,
        width: g,
        height: w,
        child: p,
        size: l,
        gap: y,
        wrappedValue: x,
        numChildren: P,
        childCounter: q,
        isCanvas: C,
        effects: o,
        effectsOpacity: u,
        effectsScale: M,
        effectsRotate: F,
        isHorizontal: S,
        isLast: j,
        index: H,
      } = a,
      G = (l?.item + y) * q,
      R = [-l?.item, 0, l?.parent - l?.item + y, l?.parent].map((oe) => oe - G),
      _ = !C && Ee(x, R, [-F, 0, 0, F]),
      Y = !C && Ee(x, R, [F, 0, 0, -F]),
      I = !C && Ee(x, R, [u, 1, 1, u]),
      de = !C && Ee(x, R, [M, 1, 1, M]),
      pe = !C && Ee(x, R, [1, 1, 0, 0]),
      Ce = !C && Ee(x, (oe) => oe >= R[1] && oe <= R[2]);
    return (
      U(() => {
        if (Ce)
          return Ce.onChange((oe) => {
            s.current.setAttribute("aria-hidden", !oe);
          });
      }, []),
      e(ne, {
        inherit: "id",
        children: e("li", {
          style: { display: "contents" },
          "aria-hidden": H !== 0,
          children: Wr(
            p,
            {
              ref: s,
              key: d + "child",
              style: {
                ...((i = p.props) === null || i === void 0 ? void 0 : i.style),
                flexShrink: 0,
                userSelect: "none",
                width: g,
                height: w,
                opacity: I,
                scale: de,
                originX: S ? pe : 0.5,
                originY: S ? 0.5 : pe,
                rotateY: S ? _ : 0,
                rotateX: S ? 0 : Y,
              },
              layoutId: p.props.layoutId
                ? p.props.layoutId + "-original-" + H
                : void 0,
            },
            (c = p.props) === null || c === void 0 ? void 0 : c.children,
          ),
        }),
      })
    );
  });
function vo({
  selectedOpacity: r,
  opacity: a,
  total: s,
  index: i,
  wrappedIndex: c,
  wrappedIndexInverted: d,
  dotStyle: g,
  buttonStyle: w,
  gap: p,
  padding: l,
  isHorizontal: y,
  isInverted: x,
  ...P
}) {
  let q = c === i;
  x && (q = Math.abs(d) === i);
  let C = p / 2,
    o = !y && i > 0 ? C : l,
    u = !y && i !== s - 1 ? C : l,
    M = y && i !== s - 1 ? C : l,
    F = y && i > 0 ? C : l;
  return e("button", {
    "aria-label": `Scroll to page ${i + 1}`,
    type: "button",
    ...P,
    style: { ...w, padding: `${o}px ${M}px ${u}px ${F}px` },
    children: e(t.div, {
      style: { ...g },
      initial: !1,
      animate: { opacity: q ? r : a },
      transition: { duration: 0.3 },
    }),
  });
}
var wo = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  So = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
var Po = De(b),
  ko = { p396ZalEr: { hover: !0, pressed: !0 } },
  Co = ["p396ZalEr"];
var qo = { p396ZalEr: "framer-v-rrgs8e" };
function pn(r, ...a) {
  let s = {};
  return (a?.forEach((i) => i && Object.assign(s, r[i])), s);
}
var Ro = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  No = { delay: 0, duration: 2, ease: [0, 0, 1, 1], type: "tween" },
  Fo = { opacity: 1, rotate: 360, scale: 1, x: 0, y: 0 },
  To = (r, a) => `translate(-50%, -50%) ${a}`,
  Io = ({ value: r, children: a }) => {
    let s = Ne(ae),
      i = r ?? s.transition,
      c = O(() => ({ ...s, transition: i }), [JSON.stringify(i)]);
    return e(ae.Provider, { value: c, children: a });
  },
  Vo = ({ height: r, id: a, width: s, ...i }) => ({ ...i }),
  Ao = (r, a) => a.join("-") + r.layoutDependency,
  Bo = fe(function (r, a) {
    let { activeLocale: s } = Se(),
      { style: i, className: c, layoutId: d, variant: g, ...w } = Vo(r),
      {
        baseVariant: p,
        classNames: l,
        gestureVariant: y,
        setGestureState: x,
        setVariant: P,
        transition: q,
        variants: C,
      } = Fe({
        cycleOrder: Co,
        defaultVariant: "p396ZalEr",
        enabledGestures: ko,
        transitions: Ro,
        variant: g,
        variantClassNames: qo,
      }),
      o = Ao(r, C),
      u = B(null),
      M = we(),
      F = [];
    return e(ne, {
      id: d ?? M,
      children: e(t.div, {
        initial: g,
        animate: C,
        onHoverStart: () => x({ isHovered: !0 }),
        onHoverEnd: () => x({ isHovered: !1 }),
        onTapStart: () => x({ isPressed: !0 }),
        onTap: () => x({ isPressed: !1 }),
        onTapCancel: () => x({ isPressed: !1 }),
        className: te("framer-Uwx78", ...F, l),
        style: { display: "contents" },
        children: e(Io, {
          value: q,
          children: e(k, {
            href: " https://www.hiso33.site/en-sg/register",
            openInNewTab: !0,
            children: f(t.a, {
              ...w,
              className: `${te("framer-rrgs8e", c)} framer-cho7ny`,
              "data-framer-name": "Variant 1",
              layoutDependency: o,
              layoutId: "p396ZalEr",
              ref: a ?? u,
              style: { ...i },
              ...pn(
                {
                  "p396ZalEr-hover": { "data-framer-name": void 0 },
                  "p396ZalEr-pressed": { "data-framer-name": void 0 },
                },
                p,
                y,
              ),
              children: [
                e(Po, {
                  __framer__loop: Fo,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 0,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: No,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 449,
                    intrinsicWidth: 441,
                    pixelHeight: 449,
                    pixelWidth: 441,
                    src: "https://framerusercontent.com/images/G2C2LxGBiiSfjv7UY0YZnzPRP0.png",
                  },
                  className: "framer-1agwg7h",
                  "data-framer-name": "Button",
                  layoutDependency: o,
                  layoutId: "JvU2Aqrsk",
                }),
                e(b, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 79.5,
                    intrinsicWidth: 94,
                    pixelHeight: 159,
                    pixelWidth: 188,
                    src: "https://framerusercontent.com/images/isDm65gmbNDeq00ROhoVVHgj3w.png",
                  },
                  className: "framer-1gd8guj",
                  "data-framer-name": "Asset_2",
                  layoutDependency: o,
                  layoutId: "PucyFgNp_",
                  style: { rotate: 0 },
                  variants: { "p396ZalEr-pressed": { rotate: 31 } },
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: f(n, {
                    children: [
                      e(t.p, {
                        style: {
                          "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                          "--framer-font-family":
                            '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                          "--framer-font-size": "25px",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                        },
                        children: e(t.span, {
                          "data-text-fill": "true",
                          style: {
                            backgroundImage:
                              "linear-gradient(0deg, rgb(158, 119, 40) 0%, rgb(237, 200, 126) 100%)",
                          },
                          children: "Register An",
                        }),
                      }),
                      e(t.p, {
                        style: {
                          "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                          "--framer-font-family":
                            '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                          "--framer-font-size": "25px",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-2gxw0f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                        },
                        children: e(t.span, {
                          "data-text-fill": "true",
                          style: {
                            backgroundImage:
                              "linear-gradient(0deg, rgb(158, 119, 40) 0%, rgb(237, 200, 126) 100%)",
                          },
                          children: "Account Now!",
                        }),
                      }),
                    ],
                  }),
                  className: "framer-ehc7qa",
                  fonts: ["GF;Bebas Neue-regular"],
                  layoutDependency: o,
                  layoutId: "Lh16DnojL",
                  style: {
                    "--extracted-2gxw0f":
                      "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    "--extracted-r6o4lv":
                      "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  transformTemplate: To,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...pn(
                    {
                      "p396ZalEr-hover": {
                        children: f(n, {
                          children: [
                            e(t.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                "--framer-font-size": "27px",
                                "--framer-line-height": "1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: e(t.span, {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(0deg, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) 0%, rgb(237, 200, 126) 100%)",
                                },
                                children: "Register An",
                              }),
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                "--framer-font-size": "27px",
                                "--framer-line-height": "1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: e(t.span, {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(0deg, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) 0%, rgb(237, 200, 126) 100%)",
                                },
                                children: "Account Now!",
                              }),
                            }),
                          ],
                        }),
                      },
                    },
                    p,
                    y,
                  ),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Mo = [
    '.framer-Uwx78 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Uwx78 .framer-cho7ny { display: block; }",
    ".framer-Uwx78 .framer-rrgs8e { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 50px 0px 30px 0px; position: relative; text-decoration: none; width: 518px; }",
    ".framer-Uwx78 .framer-1agwg7h { aspect-ratio: 0.974025974025974 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 257px); overflow: visible; position: relative; width: 250px; z-index: 1; }",
    ".framer-Uwx78 .framer-1gd8guj { aspect-ratio: 1.1823899371069182 / 1; bottom: 15px; flex: none; height: var(--framer-aspect-ratio-supported, 127px); overflow: visible; position: absolute; right: 70px; width: 150px; z-index: 1; }",
    ".framer-Uwx78 .framer-ehc7qa { flex: none; height: auto; left: 50%; position: absolute; top: 54%; white-space: pre; width: auto; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Uwx78 .framer-rrgs8e { gap: 0px; } .framer-Uwx78 .framer-rrgs8e > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Uwx78 .framer-rrgs8e > :first-child { margin-left: 0px; } .framer-Uwx78 .framer-rrgs8e > :last-child { margin-right: 0px; } }",
    ".framer-Uwx78.framer-v-rrgs8e.pressed .framer-1gd8guj { bottom: 30px; right: 68px; }",
  ],
  bt = Pe(Bo, Mo, "framer-Uwx78"),
  na = bt;
bt.displayName = "CTA-Desktop";
bt.defaultProps = { height: 336.5, width: 518 };
ke(bt, [
  {
    family: "Bebas Neue",
    style: "normal",
    url: "https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXooxWtrygbi49c.woff2",
    weight: "400",
  },
]);
var zo = De(b),
  Go = { iBZwHyjVO: { hover: !0, pressed: !0 } },
  Ho = ["iBZwHyjVO"];
var _o = { iBZwHyjVO: "framer-v-1xun2zp" };
function hn(r, ...a) {
  let s = {};
  return (a?.forEach((i) => i && Object.assign(s, r[i])), s);
}
var Wo = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Eo = { delay: 0, duration: 2, ease: [0, 0, 1, 1], type: "tween" },
  jo = { opacity: 1, rotate: 360, scale: 1, x: 0, y: 0 },
  Lo = (r, a) => `translate(-50%, -50%) ${a}`,
  Do = ({ value: r, children: a }) => {
    let s = Ne(ae),
      i = r ?? s.transition,
      c = O(() => ({ ...s, transition: i }), [JSON.stringify(i)]);
    return e(ae.Provider, { value: c, children: a });
  },
  Uo = ({ height: r, id: a, width: s, ...i }) => ({ ...i }),
  Oo = (r, a) => a.join("-") + r.layoutDependency,
  Yo = fe(function (r, a) {
    let { activeLocale: s } = Se(),
      { style: i, className: c, layoutId: d, variant: g, ...w } = Uo(r),
      {
        baseVariant: p,
        classNames: l,
        gestureVariant: y,
        setGestureState: x,
        setVariant: P,
        transition: q,
        variants: C,
      } = Fe({
        cycleOrder: Ho,
        defaultVariant: "iBZwHyjVO",
        enabledGestures: Go,
        transitions: Wo,
        variant: g,
        variantClassNames: _o,
      }),
      o = Oo(r, C),
      u = B(null),
      M = we(),
      F = [];
    return e(ne, {
      id: d ?? M,
      children: e(t.div, {
        initial: g,
        animate: C,
        onHoverStart: () => x({ isHovered: !0 }),
        onHoverEnd: () => x({ isHovered: !1 }),
        onTapStart: () => x({ isPressed: !0 }),
        onTap: () => x({ isPressed: !1 }),
        onTapCancel: () => x({ isPressed: !1 }),
        className: te("framer-AuG6W", ...F, l),
        style: { display: "contents" },
        children: e(Do, {
          value: q,
          children: e(k, {
            href: " https://www.hiso33.site/en-sg/register",
            openInNewTab: !0,
            children: f(t.a, {
              ...w,
              className: `${te("framer-1xun2zp", c)} framer-1lg8j62`,
              "data-framer-name": "Variant 1",
              layoutDependency: o,
              layoutId: "iBZwHyjVO",
              ref: a ?? u,
              style: { ...i },
              ...hn(
                {
                  "iBZwHyjVO-hover": { "data-framer-name": void 0 },
                  "iBZwHyjVO-pressed": { "data-framer-name": void 0 },
                },
                p,
                y,
              ),
              children: [
                e(zo, {
                  __framer__loop: jo,
                  __framer__loopEffectEnabled: !0,
                  __framer__loopRepeatDelay: 0,
                  __framer__loopRepeatType: "loop",
                  __framer__loopTransition: Eo,
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 449,
                    intrinsicWidth: 441,
                    pixelHeight: 449,
                    pixelWidth: 441,
                    src: "https://framerusercontent.com/images/G2C2LxGBiiSfjv7UY0YZnzPRP0.png",
                  },
                  className: "framer-1mukihv",
                  "data-framer-name": "Button",
                  layoutDependency: o,
                  layoutId: "Yclx_Btls",
                }),
                e(b, {
                  background: {
                    alt: "",
                    fit: "fill",
                    intrinsicHeight: 79.5,
                    intrinsicWidth: 94,
                    pixelHeight: 159,
                    pixelWidth: 188,
                    src: "https://framerusercontent.com/images/isDm65gmbNDeq00ROhoVVHgj3w.png",
                  },
                  className: "framer-13c31wl",
                  "data-framer-name": "Asset_2",
                  layoutDependency: o,
                  layoutId: "XfQMHylYx",
                  style: { rotate: 0 },
                  variants: { "iBZwHyjVO-pressed": { rotate: -34 } },
                }),
                e(h, {
                  __fromCanvasComponent: !0,
                  children: f(n, {
                    children: [
                      e(t.p, {
                        style: {
                          "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                          "--framer-font-family":
                            '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                          "--framer-font-size": "23px",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                        },
                        children: e(t.span, {
                          "data-text-fill": "true",
                          style: {
                            backgroundImage:
                              "linear-gradient(0deg, rgb(158, 119, 40) 0%, rgb(237, 200, 126) 100%)",
                          },
                          children: "Register An",
                        }),
                      }),
                      e(t.p, {
                        style: {
                          "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                          "--framer-font-family":
                            '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                          "--framer-font-size": "23px",
                          "--framer-line-height": "1em",
                          "--framer-text-alignment": "center",
                          "--framer-text-color":
                            "var(--extracted-2gxw0f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                        },
                        children: e(t.span, {
                          "data-text-fill": "true",
                          style: {
                            backgroundImage:
                              "linear-gradient(0deg, rgb(158, 119, 40) 0%, rgb(237, 200, 126) 100%)",
                          },
                          children: "Account Now!",
                        }),
                      }),
                    ],
                  }),
                  className: "framer-etqx0g",
                  fonts: ["GF;Bebas Neue-regular"],
                  layoutDependency: o,
                  layoutId: "E6PDxRb8K",
                  style: {
                    "--extracted-2gxw0f":
                      "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    "--extracted-r6o4lv":
                      "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  transformTemplate: Lo,
                  variants: {
                    "iBZwHyjVO-hover": {
                      "--extracted-2gxw0f":
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      "--extracted-r6o4lv":
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                    },
                    "iBZwHyjVO-pressed": {
                      "--extracted-2gxw0f":
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      "--extracted-r6o4lv":
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...hn(
                    {
                      "iBZwHyjVO-hover": {
                        children: f(n, {
                          children: [
                            e(t.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                "--framer-font-size": "25px",
                                "--framer-line-height": "1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children: e(t.span, {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(0deg, rgb(158, 119, 40) 0%, rgb(237, 200, 126) 100%)",
                                },
                                children: "Register An",
                              }),
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                "--framer-font-size": "25px",
                                "--framer-line-height": "1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children: e(t.span, {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(0deg, rgb(158, 119, 40) 0%, rgb(237, 200, 126) 100%)",
                                },
                                children: "Account Now!",
                              }),
                            }),
                          ],
                        }),
                      },
                      "iBZwHyjVO-pressed": {
                        children: f(n, {
                          children: [
                            e(t.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                "--framer-font-size": "23px",
                                "--framer-line-height": "1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children: e(t.span, {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(0deg, rgb(242, 202, 121) 0%, rgb(255, 221, 153) 100%)",
                                },
                                children: "Register An",
                              }),
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector":
                                  "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                "--framer-font-size": "23px",
                                "--framer-line-height": "1em",
                                "--framer-text-alignment": "center",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children: e(t.span, {
                                "data-text-fill": "true",
                                style: {
                                  backgroundImage:
                                    "linear-gradient(0deg, rgb(242, 202, 121) 0%, rgb(255, 221, 153) 100%)",
                                },
                                children: "Account Now!",
                              }),
                            }),
                          ],
                        }),
                      },
                    },
                    p,
                    y,
                  ),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  Zo = [
    '.framer-AuG6W [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-AuG6W .framer-1lg8j62 { display: block; }",
    ".framer-AuG6W .framer-1xun2zp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 238px; justify-content: center; overflow: hidden; padding: 50px 0px 30px 0px; position: relative; text-decoration: none; width: 338px; }",
    ".framer-AuG6W .framer-1mukihv { aspect-ratio: 0.974025974025974 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 192px); overflow: visible; position: relative; width: 187px; z-index: 1; }",
    ".framer-AuG6W .framer-13c31wl { aspect-ratio: 1.1823899371069182 / 1; bottom: 15px; flex: none; height: var(--framer-aspect-ratio-supported, 78px); overflow: visible; position: absolute; right: 70px; width: 92px; z-index: 1; }",
    ".framer-AuG6W .framer-etqx0g { flex: none; height: auto; left: 50%; position: absolute; top: 54%; white-space: pre; width: auto; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-AuG6W .framer-1xun2zp { gap: 0px; } .framer-AuG6W .framer-1xun2zp > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-AuG6W .framer-1xun2zp > :first-child { margin-left: 0px; } .framer-AuG6W .framer-1xun2zp > :last-child { margin-right: 0px; } }",
  ],
  vt = Pe(Yo, Zo, "framer-AuG6W"),
  ia = vt;
vt.displayName = "CTA";
vt.defaultProps = { height: 238, width: 338 };
ke(vt, [
  {
    family: "Bebas Neue",
    style: "normal",
    url: "https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXooxWtrygbi49c.woff2",
    weight: "400",
  },
]);
var Xo = {
    HW16w2Awx: { hover: !0, pressed: !0 },
    vsT4gZPdJ: { hover: !0, pressed: !0 },
  },
  Qo = ["vsT4gZPdJ", "HW16w2Awx"];
var Ko = { HW16w2Awx: "framer-v-or8t6w", vsT4gZPdJ: "framer-v-1o403qz" };
function gn(r, ...a) {
  let s = {};
  return (a?.forEach((i) => i && Object.assign(s, r[i])), s);
}
var Jo = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  $o = ({ value: r, children: a }) => {
    let s = Ne(ae),
      i = r ?? s.transition,
      c = O(() => ({ ...s, transition: i }), [JSON.stringify(i)]);
    return e(ae.Provider, { value: c, children: a });
  },
  es = { "Variant 1": "vsT4gZPdJ", "Variant 2": "HW16w2Awx" },
  rs = ({ height: r, id: a, title: s, width: i, ...c }) => {
    var d, g, w;
    return {
      ...c,
      iG3zzSBTw:
        (d = s ?? c.iG3zzSBTw) !== null && d !== void 0 ? d : "EXPERIENCE NOW!",
      variant:
        (w = (g = es[c.variant]) !== null && g !== void 0 ? g : c.variant) !==
          null && w !== void 0
          ? w
          : "vsT4gZPdJ",
    };
  },
  ts = (r, a) => a.join("-") + r.layoutDependency,
  as = fe(function (r, a) {
    let { activeLocale: s } = Se(),
      {
        style: i,
        className: c,
        layoutId: d,
        variant: g,
        iG3zzSBTw: w,
        ...p
      } = rs(r),
      {
        baseVariant: l,
        classNames: y,
        gestureVariant: x,
        setGestureState: P,
        setVariant: q,
        transition: C,
        variants: o,
      } = Fe({
        cycleOrder: Qo,
        defaultVariant: "vsT4gZPdJ",
        enabledGestures: Xo,
        transitions: Jo,
        variant: g,
        variantClassNames: Ko,
      }),
      u = ts(r, o),
      M = B(null),
      F = we(),
      S = [];
    return e(ne, {
      id: d ?? F,
      children: e(t.div, {
        initial: g,
        animate: o,
        onHoverStart: () => P({ isHovered: !0 }),
        onHoverEnd: () => P({ isHovered: !1 }),
        onTapStart: () => P({ isPressed: !0 }),
        onTap: () => P({ isPressed: !1 }),
        onTapCancel: () => P({ isPressed: !1 }),
        className: te("framer-VUPbC", ...S, y),
        style: { display: "contents" },
        children: e($o, {
          value: C,
          children: e(k, {
            href: "www.hiso33.site",
            openInNewTab: !0,
            children: e(t.a, {
              ...p,
              className: `${te("framer-1o403qz", c)} framer-196og6m`,
              "data-border": !0,
              "data-framer-name": "Variant 1",
              layoutDependency: u,
              layoutId: "vsT4gZPdJ",
              ref: a ?? M,
              style: {
                "--border-bottom-width": "3px",
                "--border-color":
                  'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                "--border-left-width": "3px",
                "--border-right-width": "3px",
                "--border-style": "solid",
                "--border-top-width": "3px",
                background:
                  'linear-gradient(180deg, var(--token-2dd0df26-542a-4acd-afbc-726f9204dd83, rgb(161, 5, 52)) /* {"name":"wine"} */ 0%, var(--token-4ed3488b-f89b-4183-84db-f5d1aacc3fea, rgb(77, 5, 27)) /* {"name":"wine gradient"} */ 100%)',
                borderBottomLeftRadius: 44,
                borderBottomRightRadius: 44,
                borderTopLeftRadius: 44,
                borderTopRightRadius: 44,
                boxShadow: "none",
                ...i,
              },
              variants: {
                "HW16w2Awx-hover": {
                  background:
                    'linear-gradient(180deg, rgb(255, 66, 123) 3.6036036036036037%, rgb(230, 0, 69) 30.729166666666664%, var(--token-2dd0df26-542a-4acd-afbc-726f9204dd83, rgb(161, 5, 52)) /* {"name":"wine"} */ 52.669270833333336%, rgb(204, 0, 61) 100%)',
                  boxShadow: "inset 2px 3px 10px 2px rgba(255, 138, 159, 0.83)",
                },
                "HW16w2Awx-pressed": {
                  background:
                    'linear-gradient(180deg, var(--token-4ed3488b-f89b-4183-84db-f5d1aacc3fea, rgb(77, 5, 27)) /* {"name":"wine gradient"} */ 0%, rgb(51, 7, 20) 100%)',
                },
                "vsT4gZPdJ-hover": {
                  background:
                    'linear-gradient(180deg, rgb(255, 66, 123) 3.6036036036036037%, rgb(230, 0, 69) 30.729166666666664%, var(--token-2dd0df26-542a-4acd-afbc-726f9204dd83, rgb(161, 5, 52)) /* {"name":"wine"} */ 52.669270833333336%, rgb(204, 0, 61) 100%)',
                  boxShadow: "inset 2px 3px 10px 2px rgba(255, 138, 159, 0.83)",
                },
                "vsT4gZPdJ-pressed": {
                  background:
                    'linear-gradient(180deg, var(--token-4ed3488b-f89b-4183-84db-f5d1aacc3fea, rgb(77, 5, 27)) /* {"name":"wine gradient"} */ 0%, rgb(51, 7, 20) 100%)',
                },
              },
              ...gn(
                {
                  "HW16w2Awx-hover": { "data-framer-name": void 0 },
                  "HW16w2Awx-pressed": { "data-framer-name": void 0 },
                  "vsT4gZPdJ-hover": { "data-framer-name": void 0 },
                  "vsT4gZPdJ-pressed": { "data-framer-name": void 0 },
                  HW16w2Awx: { "data-framer-name": "Variant 2" },
                },
                l,
                x,
              ),
              children: e(t.div, {
                className: "framer-1swja87",
                layoutDependency: u,
                layoutId: "Hx_BQYPLw",
                children: e(h, {
                  __fromCanvasComponent: !0,
                  children: e(n, {
                    children: e(t.p, {
                      style: {
                        "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                        "--framer-font-family":
                          '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                        "--framer-font-size": "39px",
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                      },
                      children: "EXPERIENCE NOW!",
                    }),
                  }),
                  className: "framer-5r4dks",
                  fonts: ["GF;Bebas Neue-regular"],
                  layoutDependency: u,
                  layoutId: "Mwk9DiLR7",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                    "--framer-paragraph-spacing": "0px",
                    textShadow: "none",
                  },
                  text: w,
                  variants: {
                    "HW16w2Awx-hover": {
                      textShadow: "1px 1px 3px rgba(245, 197, 42, 0.88)",
                    },
                    "HW16w2Awx-pressed": {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    "vsT4gZPdJ-hover": {
                      textShadow: "1px 1px 3px rgba(245, 197, 42, 0.88)",
                    },
                    "vsT4gZPdJ-pressed": {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...gn(
                    {
                      "HW16w2Awx-pressed": {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                              "--framer-font-family":
                                '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                              "--framer-font-size": "27px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children: "EXPERIENCE NOW!",
                          }),
                        }),
                      },
                      "vsT4gZPdJ-pressed": {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                              "--framer-font-family":
                                '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                              "--framer-font-size": "39px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children: "EXPERIENCE NOW!",
                          }),
                        }),
                      },
                      HW16w2Awx: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                              "--framer-font-family":
                                '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                              "--framer-font-size": "27px",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                            },
                            children: "EXPERIENCE NOW!",
                          }),
                        }),
                      },
                    },
                    l,
                    x,
                  ),
                }),
              }),
            }),
          }),
        }),
      }),
    });
  }),
  ns = [
    '.framer-VUPbC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-VUPbC .framer-196og6m { display: block; }",
    ".framer-VUPbC .framer-1o403qz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-VUPbC .framer-1swja87 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-VUPbC .framer-5r4dks { flex: none; height: 47px; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-VUPbC .framer-1o403qz, .framer-VUPbC .framer-1swja87 { gap: 0px; } .framer-VUPbC .framer-1o403qz > *, .framer-VUPbC .framer-1swja87 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-VUPbC .framer-1o403qz > :first-child, .framer-VUPbC .framer-1swja87 > :first-child { margin-left: 0px; } .framer-VUPbC .framer-1o403qz > :last-child, .framer-VUPbC .framer-1swja87 > :last-child { margin-right: 0px; } }",
    ".framer-VUPbC.framer-v-or8t6w .framer-5r4dks { height: auto; }",
  ],
  Qr = Pe(as, ns, "framer-VUPbC"),
  oa = Qr;
Qr.displayName = "Hero Button";
Qr.defaultProps = { height: 67, width: 251 };
re(Qr, {
  variant: {
    options: ["vsT4gZPdJ", "HW16w2Awx"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: m.Enum,
  },
  iG3zzSBTw: {
    defaultValue: "EXPERIENCE NOW!",
    displayTextArea: !1,
    title: "Title",
    type: m.String,
  },
});
ke(Qr, [
  {
    family: "Bebas Neue",
    style: "normal",
    url: "https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXooxWtrygbi49c.woff2",
    weight: "400",
  },
]);
var sa,
  un = (r) => {
    if (!sa) {
      let a = new Map([
          [
            "bold",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M221.56,100.85,141.61,25.38l-.16-.15a19.93,19.93,0,0,0-26.91,0l-.17.15L34.44,100.85A20.07,20.07,0,0,0,28,115.55V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V164h24v44a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V115.55A20.07,20.07,0,0,0,221.56,100.85ZM204,204H164V160a20,20,0,0,0-20-20H112a20,20,0,0,0-20,20v44H52V117.28l76-71.75,76,71.75Z",
              }),
            ),
          ],
          [
            "duotone",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M216,115.54V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.54a8,8,0,0,1,2.62-5.92l80-75.54a8,8,0,0,1,10.77,0l80,75.54A8,8,0,0,1,216,115.54Z",
                opacity: "0.2",
              }),
              r.createElement("path", {
                d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z",
              }),
            ),
          ],
          [
            "fill",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z",
              }),
            ),
          ],
          [
            "light",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M217.47,105.24l-80-75.5-.09-.08a13.94,13.94,0,0,0-18.83,0l-.09.08-80,75.5A14,14,0,0,0,34,115.55V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V160a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V115.55A14,14,0,0,0,217.47,105.24ZM210,208a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V160a14,14,0,0,0-14-14H112a14,14,0,0,0-14,14v48a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V115.55a2,2,0,0,1,.65-1.48l.09-.08,79.94-75.48a2,2,0,0,1,2.63,0L209.26,114l.08.08a2,2,0,0,1,.66,1.48Z",
              }),
            ),
          ],
          [
            "regular",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z",
              }),
            ),
          ],
          [
            "thin",
            r.createElement(
              r.Fragment,
              null,
              r.createElement("path", {
                d: "M216.13,106.72,136.07,31.13a12,12,0,0,0-16.2.05L39.93,106.67A12,12,0,0,0,36,115.54V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V160a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V115.54A12,12,0,0,0,216.13,106.72ZM212,208a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V160a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12v48a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V115.54a4.09,4.09,0,0,1,1.36-3L125.3,37.05a4,4,0,0,1,5.33,0l80.06,75.58a4,4,0,0,1,1.31,3Z",
              }),
            ),
          ],
        ]),
        s = r.forwardRef((i, c) =>
          r.createElement("g", { ref: c, ...i }, a.get(i.weight)),
        );
      ((s.displayName = "House"), (sa = s));
    }
    return sa;
  };
var la = [
    "AddressBook",
    "AirTrafficControl",
    "Airplane",
    "AirplaneInFlight",
    "AirplaneLanding",
    "AirplaneTakeoff",
    "AirplaneTilt",
    "Airplay",
    "Alarm",
    "Alien",
    "AlignBottom",
    "AlignBottomSimple",
    "AlignCenterVertical",
    "AlignLeft",
    "AlignLeftSimple",
    "AlignRight",
    "AlignRightSimple",
    "AlignTop",
    "AlignTopSimple",
    "AmazonLogo",
    "Anchor",
    "AnchorSimple",
    "AndroidLogo",
    "AngularLogo",
    "Aperture",
    "AppStoreLogo",
    "AppWindow",
    "AppleLogo",
    "ApplePodcastsLogo",
    "Archive",
    "ArchiveBox",
    "ArchiveTray",
    "Armchair",
    "ArrowArcLeft",
    "ArrowArcRight",
    "ArrowBendDownLeft",
    "ArrowBendDownRight",
    "ArrowBendLeftDown",
    "ArrowBendLeftUp",
    "ArrowBendRightDown",
    "ArrowBendRightUp",
    "ArrowBendUpLeft",
    "ArrowBendUpRight",
    "ArrowCircleDown",
    "ArrowCircleDownLeft",
    "ArrowCircleDownRight",
    "ArrowCircleLeft",
    "ArrowCircleRight",
    "ArrowCircleUp",
    "ArrowCircleUpLeft",
    "ArrowCircleUpRight",
    "ArrowClockwise",
    "ArrowDown",
    "ArrowDownLeft",
    "ArrowDownRight",
    "ArrowElbowDownLeft",
    "ArrowElbowDownRight",
    "ArrowElbowLeft",
    "ArrowElbowLeftDown",
    "ArrowElbowLeftUp",
    "ArrowElbowRight",
    "ArrowElbowRightDown",
    "ArrowElbowRightUp",
    "ArrowElbowUpLeft",
    "ArrowElbowUpRight",
    "ArrowFatDown",
    "ArrowFatLeft",
    "ArrowFatLineDown",
    "ArrowFatLineLeft",
    "ArrowFatLineRight",
    "ArrowFatLineUp",
    "ArrowFatLinesDown",
    "ArrowFatLinesLeft",
    "ArrowFatLinesRight",
    "ArrowFatLinesUp",
    "ArrowFatRight",
    "ArrowFatUp",
    "ArrowLeft",
    "ArrowLineDown",
    "ArrowLineDownLeft",
    "ArrowLineDownRight",
    "ArrowLineLeft",
    "ArrowLineRight",
    "ArrowLineUp",
    "ArrowLineUpLeft",
    "ArrowLineUpRight",
    "ArrowRight",
    "ArrowSquareDown",
    "ArrowSquareDownLeft",
    "ArrowSquareDownRight",
    "ArrowSquareIn",
    "ArrowSquareLeft",
    "ArrowSquareOut",
    "ArrowSquareRight",
    "ArrowSquareUp",
    "ArrowSquareUpLeft",
    "ArrowSquareUpRight",
    "ArrowUDownLeft",
    "ArrowUDownRight",
    "ArrowULeftDown",
    "ArrowULeftUp",
    "ArrowURightDown",
    "ArrowURightUp",
    "ArrowUUpLeft",
    "ArrowUUpRight",
    "ArrowUp",
    "ArrowUpLeft",
    "ArrowUpRight",
    "ArrowsClockwise",
    "ArrowsDownUp",
    "ArrowsHorizontal",
    "ArrowsIn",
    "ArrowsInCardinal",
    "ArrowsInLineVertical",
    "ArrowsInSimple",
    "ArrowsLeftRight",
    "ArrowsMerge",
    "ArrowsOut",
    "ArrowsOutCardinal",
    "ArrowsOutSimple",
    "ArrowsSplit",
    "ArrowsVertical",
    "Article",
    "ArticleMedium",
    "ArticleNyTimes",
    "Asterisk",
    "AsteriskSimple",
    "At",
    "Atom",
    "Baby",
    "Backpack",
    "Backspace",
    "Bag",
    "BagSimple",
    "Balloon",
    "Bandaids",
    "Bank",
    "Barbell",
    "Barcode",
    "Barricade",
    "Baseball",
    "BaseballCap",
    "Basket",
    "Basketball",
    "Bathtub",
    "BatteryCharging",
    "BatteryEmpty",
    "BatteryFull",
    "BatteryHigh",
    "BatteryLow",
    "BatteryMedium",
    "BatteryPlus",
    "BatteryPlusVertical",
    "BatteryVerticalEmpty",
    "BatteryVerticalFull",
    "BatteryVerticalHigh",
    "BatteryVerticalLow",
    "BatteryWarning",
    "Bed",
    "BeerBottle",
    "BeerStein",
    "BehanceLogo",
    "Bell",
    "BellRinging",
    "BellSimple",
    "BellSimpleRinging",
    "BellSimpleSlash",
    "BellSimpleZ",
    "BellSlash",
    "BellZ",
    "BezierCurve",
    "Bicycle",
    "Binoculars",
    "Bird",
    "Bluetooth",
    "BluetoothConnected",
    "BluetoothSlash",
    "BluetoothX",
    "Boat",
    "Bone",
    "Book",
    "BookBookmark",
    "BookOpen",
    "BookOpenText",
    "Bookmark",
    "BookmarkSimple",
    "Bookmarks",
    "BookmarksSimple",
    "Books",
    "Boot",
    "BoundingBox",
    "BowlFood",
    "BracketsAngle",
    "BracketsCurly",
    "BracketsRound",
    "BracketsSquare",
    "Brain",
    "Brandy",
    "Bridge",
    "Briefcase",
    "BriefcaseMetal",
    "Broadcast",
    "Broom",
    "Browser",
    "Browsers",
    "Bug",
    "BugBeetle",
    "BugDroid",
    "Buildings",
    "Bus",
    "Butterfly",
    "Cactus",
    "Cake",
    "Calculator",
    "Calendar",
    "CalendarBlank",
    "CalendarCheck",
    "CalendarPlus",
    "CalendarX",
    "CallBell",
    "Camera",
    "CameraPlus",
    "CameraRotate",
    "CameraSlash",
    "Campfire",
    "Car",
    "CarProfile",
    "CarSimple",
    "Cardholder",
    "Cards",
    "CaretCircleDoubleUp",
    "CaretCircleDown",
    "CaretCircleLeft",
    "CaretCircleRight",
    "CaretCircleUp",
    "CaretCircleUpDown",
    "CaretDoubleDown",
    "CaretDoubleLeft",
    "CaretDoubleRight",
    "CaretDoubleUp",
    "CaretDown",
    "CaretLeft",
    "CaretRight",
    "CaretUp",
    "CaretUpDown",
    "Carrot",
    "CassetteTape",
    "CastleTurret",
    "Cat",
    "CellSignalFull",
    "CellSignalHigh",
    "CellSignalLow",
    "CellSignalMedium",
    "CellSignalNone",
    "CellSignalSlash",
    "CellSignalX",
    "Certificate",
    "Chair",
    "Chalkboard",
    "ChalkboardSimple",
    "ChalkboardTeacher",
    "Champagne",
    "ChargingStation",
    "ChartBar",
    "ChartBarHorizontal",
    "ChartDonut",
    "ChartLine",
    "ChartLineDown",
    "ChartLineUp",
    "ChartPie",
    "ChartPieSlice",
    "ChartPolar",
    "ChartScatter",
    "Chat",
    "ChatCentered",
    "ChatCenteredDots",
    "ChatCenteredText",
    "ChatCircle",
    "ChatCircleDots",
    "ChatCircleText",
    "ChatDots",
    "ChatTeardrop",
    "ChatTeardropDots",
    "ChatTeardropText",
    "ChatText",
    "Chats",
    "ChatsCircle",
    "ChatsTeardrop",
    "Check",
    "CheckCircle",
    "CheckFat",
    "CheckSquare",
    "CheckSquareOffset",
    "Checks",
    "Church",
    "Circle",
    "CircleDashed",
    "CircleHalf",
    "CircleHalfTilt",
    "CircleNotch",
    "CirclesFour",
    "CirclesThree",
    "CirclesThreePlus",
    "Circuitry",
    "Clipboard",
    "ClipboardText",
    "Clock",
    "ClockAfternoon",
    "ClockClockwise",
    "ClockCounterClockwise",
    "ClockCountdown",
    "ClosedCaptioning",
    "Cloud",
    "CloudArrowDown",
    "CloudArrowUp",
    "CloudCheck",
    "CloudFog",
    "CloudLightning",
    "CloudMoon",
    "CloudRain",
    "CloudSlash",
    "CloudSnow",
    "CloudSun",
    "CloudWarning",
    "CloudX",
    "Club",
    "CoatHanger",
    "CodaLogo",
    "Code",
    "CodeBlock",
    "CodeSimple",
    "CodepenLogo",
    "CodesandboxLogo",
    "Coffee",
    "Coin",
    "CoinVertical",
    "Coins",
    "Columns",
    "Command",
    "Compass",
    "CompassTool",
    "ComputerTower",
    "Confetti",
    "ContactlessPayment",
    "Control",
    "Cookie",
    "CookingPot",
    "Copy",
    "CopySimple",
    "Copyleft",
    "Copyright",
    "CornersIn",
    "CornersOut",
    "Couch",
    "Cpu",
    "CreditCard",
    "Crop",
    "Cross",
    "Crosshair",
    "CrosshairSimple",
    "Crown",
    "CrownSimple",
    "Cube",
    "CubeFocus",
    "CubeTransparent",
    "CurrencyBtc",
    "CurrencyCircleDollar",
    "CurrencyCny",
    "CurrencyDollar",
    "CurrencyDollarSimple",
    "CurrencyEth",
    "CurrencyEur",
    "CurrencyGbp",
    "CurrencyInr",
    "CurrencyJpy",
    "CurrencyKrw",
    "CurrencyKzt",
    "CurrencyNgn",
    "CurrencyRub",
    "Cursor",
    "CursorClick",
    "CursorText",
    "Cylinder",
    "Database",
    "Desktop",
    "DesktopTower",
    "Detective",
    "DevToLogo",
    "DeviceMobile",
    "DeviceMobileCamera",
    "DeviceMobileSpeaker",
    "DeviceTablet",
    "DeviceTabletCamera",
    "DeviceTabletSpeaker",
    "Devices",
    "Diamond",
    "DiamondsFour",
    "DiceFive",
    "DiceFour",
    "DiceOne",
    "DiceSix",
    "DiceThree",
    "DiceTwo",
    "Disc",
    "DiscordLogo",
    "Divide",
    "Dna",
    "Dog",
    "Door",
    "DoorOpen",
    "Dot",
    "DotOutline",
    "DotsNine",
    "DotsSix",
    "DotsSixVertical",
    "DotsThree",
    "DotsThreeCircle",
    "DotsThreeOutline",
    "DotsThreeVertical",
    "Download",
    "DownloadSimple",
    "Dress",
    "DribbbleLogo",
    "Drop",
    "DropHalf",
    "DropHalfBottom",
    "DropboxLogo",
    "Ear",
    "EarSlash",
    "Egg",
    "EggCrack",
    "Eject",
    "EjectSimple",
    "Elevator",
    "Engine",
    "Envelope",
    "EnvelopeOpen",
    "EnvelopeSimple",
    "EnvelopeSimpleOpen",
    "Equalizer",
    "Equals",
    "Eraser",
    "EscalatorDown",
    "EscalatorUp",
    "Exam",
    "Exclude",
    "ExcludeSquare",
    "Export",
    "Eye",
    "EyeClosed",
    "EyeSlash",
    "Eyedropper",
    "EyedropperSample",
    "Eyeglasses",
    "FaceMask",
    "FacebookLogo",
    "Factory",
    "Faders",
    "FadersHorizontal",
    "Fan",
    "FastForward",
    "FastForwardCircle",
    "Feather",
    "FigmaLogo",
    "File",
    "FileArchive",
    "FileArrowDown",
    "FileArrowUp",
    "FileAudio",
    "FileCloud",
    "FileCode",
    "FileCss",
    "FileCsv",
    "FileDashed",
    "FileDoc",
    "FileHtml",
    "FileImage",
    "FileJpg",
    "FileJs",
    "FileJsx",
    "FileLock",
    "FileMagnifyingGlass",
    "FileMinus",
    "FilePdf",
    "FilePlus",
    "FilePng",
    "FilePpt",
    "FileRs",
    "FileSql",
    "FileSvg",
    "FileText",
    "FileTs",
    "FileTsx",
    "FileVideo",
    "FileVue",
    "FileX",
    "FileXls",
    "FileZip",
    "Files",
    "FilmReel",
    "FilmScript",
    "FilmSlate",
    "FilmStrip",
    "Fingerprint",
    "FingerprintSimple",
    "FinnTheHuman",
    "Fire",
    "FireExtinguisher",
    "FireSimple",
    "FirstAid",
    "FirstAidKit",
    "Fish",
    "FishSimple",
    "Flag",
    "FlagBanner",
    "FlagCheckered",
    "FlagPennant",
    "Flame",
    "Flashlight",
    "Flask",
    "FloppyDisk",
    "FloppyDiskBack",
    "FlowArrow",
    "Flower",
    "FlowerLotus",
    "FlowerTulip",
    "FlyingSaucer",
    "Folder",
    "FolderDashed",
    "FolderLock",
    "FolderMinus",
    "FolderNotch",
    "FolderNotchMinus",
    "FolderNotchOpen",
    "FolderNotchPlus",
    "FolderOpen",
    "FolderPlus",
    "FolderSimple",
    "FolderSimpleDashed",
    "FolderSimpleLock",
    "FolderSimpleMinus",
    "FolderSimplePlus",
    "FolderSimpleStar",
    "FolderSimpleUser",
    "FolderStar",
    "FolderUser",
    "Folders",
    "Football",
    "Footprints",
    "ForkKnife",
    "FrameCorners",
    "FramerLogo",
    "Function",
    "Funnel",
    "FunnelSimple",
    "GameController",
    "Garage",
    "GasCan",
    "GasPump",
    "Gauge",
    "Gavel",
    "Gear",
    "GearFine",
    "GearSix",
    "GenderFemale",
    "GenderIntersex",
    "GenderMale",
    "GenderNeuter",
    "GenderNonbinary",
    "GenderTransgender",
    "Ghost",
    "Gif",
    "Gift",
    "GitBranch",
    "GitCommit",
    "GitDiff",
    "GitFork",
    "GitMerge",
    "GitPullRequest",
    "GithubLogo",
    "GitlabLogo",
    "GitlabLogoSimple",
    "Globe",
    "GlobeHemisphereEast",
    "GlobeHemisphereWest",
    "GlobeSimple",
    "GlobeStand",
    "Goggles",
    "GoodreadsLogo",
    "GoogleCardboardLogo",
    "GoogleChromeLogo",
    "GoogleDriveLogo",
    "GoogleLogo",
    "GooglePhotosLogo",
    "GooglePlayLogo",
    "GooglePodcastsLogo",
    "Gradient",
    "GraduationCap",
    "Grains",
    "GrainsSlash",
    "Graph",
    "GridFour",
    "GridNine",
    "Guitar",
    "Hamburger",
    "Hammer",
    "Hand",
    "HandCoins",
    "HandEye",
    "HandFist",
    "HandGrabbing",
    "HandHeart",
    "HandPalm",
    "HandPointing",
    "HandSoap",
    "HandSwipeLeft",
    "HandSwipeRight",
    "HandTap",
    "HandWaving",
    "Handbag",
    "HandbagSimple",
    "HandsClapping",
    "HandsPraying",
    "Handshake",
    "HardDrive",
    "HardDrives",
    "Hash",
    "HashStraight",
    "Headlights",
    "Headphones",
    "Headset",
    "Heart",
    "HeartBreak",
    "HeartHalf",
    "HeartStraight",
    "HeartStraightBreak",
    "Heartbeat",
    "Hexagon",
    "HighHeel",
    "HighlighterCircle",
    "Hoodie",
    "Horse",
    "Hourglass",
    "HourglassHigh",
    "HourglassLow",
    "HourglassMedium",
    "HourglassSimple",
    "HourglassSimpleHigh",
    "HourglassSimpleLow",
    "House",
    "HouseLine",
    "HouseSimple",
    "IceCream",
    "IdentificationBadge",
    "IdentificationCard",
    "Image",
    "ImageSquare",
    "Images",
    "ImagesSquare",
    "Infinity",
    "Info",
    "InstagramLogo",
    "Intersect",
    "IntersectSquare",
    "IntersectThree",
    "Jeep",
    "Kanban",
    "Key",
    "KeyReturn",
    "Keyboard",
    "Keyhole",
    "Knife",
    "Ladder",
    "LadderSimple",
    "Lamp",
    "Laptop",
    "Layout",
    "Leaf",
    "Lifebuoy",
    "Lightbulb",
    "LightbulbFilament",
    "Lighthouse",
    "Lightning",
    "LightningA",
    "LightningSlash",
    "LineSegment",
    "LineSegments",
    "Link",
    "LinkBreak",
    "LinkSimple",
    "LinkSimpleBreak",
    "LinkSimpleHorizontal",
    "LinkedinLogo",
    "LinuxLogo",
    "List",
    "ListBullets",
    "ListChecks",
    "ListDashes",
    "ListMagnifyingGlass",
    "ListNumbers",
    "ListPlus",
    "Lock",
    "LockKey",
    "LockKeyOpen",
    "LockLaminated",
    "LockLaminatedOpen",
    "LockOpen",
    "LockSimple",
    "LockSimpleOpen",
    "Lockers",
    "MagicWand",
    "Magnet",
    "MagnetStraight",
    "MagnifyingGlass",
    "MagnifyingGlassMinus",
    "MagnifyingGlassPlus",
    "MapPin",
    "MapPinLine",
    "MapTrifold",
    "MarkerCircle",
    "Martini",
    "MaskHappy",
    "MaskSad",
    "MathOperations",
    "Medal",
    "MedalMilitary",
    "MediumLogo",
    "Megaphone",
    "MegaphoneSimple",
    "MessengerLogo",
    "MetaLogo",
    "Metronome",
    "Microphone",
    "MicrophoneSlash",
    "MicrophoneStage",
    "MicrosoftExcelLogo",
    "MicrosoftOutlookLogo",
    "MicrosoftTeamsLogo",
    "MicrosoftWordLogo",
    "Minus",
    "MinusCircle",
    "MinusSquare",
    "Money",
    "Monitor",
    "MonitorPlay",
    "Moon",
    "MoonStars",
    "Moped",
    "MopedFront",
    "Mosque",
    "Motorcycle",
    "Mountains",
    "Mouse",
    "MouseSimple",
    "MusicNote",
    "MusicNoteSimple",
    "MusicNotes",
    "MusicNotesPlus",
    "MusicNotesSimple",
    "NavigationArrow",
    "Needle",
    "Newspaper",
    "NewspaperClipping",
    "Notches",
    "Note",
    "NoteBlank",
    "NotePencil",
    "Notebook",
    "Notepad",
    "Notification",
    "NotionLogo",
    "NumberCircleEight",
    "NumberCircleFive",
    "NumberCircleFour",
    "NumberCircleNine",
    "NumberCircleOne",
    "NumberCircleSeven",
    "NumberCircleSix",
    "NumberCircleThree",
    "NumberCircleTwo",
    "NumberCircleZero",
    "NumberEight",
    "NumberFive",
    "NumberFour",
    "NumberNine",
    "NumberOne",
    "NumberSeven",
    "NumberSix",
    "NumberSquareEight",
    "NumberSquareFive",
    "NumberSquareFour",
    "NumberSquareNine",
    "NumberSquareOne",
    "NumberSquareSeven",
    "NumberSquareSix",
    "NumberSquareThree",
    "NumberSquareTwo",
    "NumberSquareZero",
    "NumberThree",
    "NumberTwo",
    "NumberZero",
    "Nut",
    "NyTimesLogo",
    "Octagon",
    "OfficeChair",
    "Option",
    "OrangeSlice",
    "Package",
    "PaintBrush",
    "PaintBrushBroad",
    "PaintBrushHousehold",
    "PaintBucket",
    "PaintRoller",
    "Palette",
    "Pants",
    "PaperPlane",
    "PaperPlaneRight",
    "PaperPlaneTilt",
    "Paperclip",
    "PaperclipHorizontal",
    "Parachute",
    "Paragraph",
    "Parallelogram",
    "Park",
    "Password",
    "Path",
    "PatreonLogo",
    "Pause",
    "PauseCircle",
    "PawPrint",
    "PaypalLogo",
    "Peace",
    "Pen",
    "PenNib",
    "PenNibStraight",
    "Pencil",
    "PencilCircle",
    "PencilLine",
    "PencilSimple",
    "PencilSimpleLine",
    "PencilSimpleSlash",
    "PencilSlash",
    "Pentagram",
    "Pepper",
    "Percent",
    "Person",
    "PersonArmsSpread",
    "PersonSimple",
    "PersonSimpleBike",
    "PersonSimpleRun",
    "PersonSimpleThrow",
    "PersonSimpleWalk",
    "Perspective",
    "Phone",
    "PhoneCall",
    "PhoneDisconnect",
    "PhoneIncoming",
    "PhoneOutgoing",
    "PhonePlus",
    "PhoneSlash",
    "PhoneX",
    "PhosphorLogo",
    "Pi",
    "PianoKeys",
    "PictureInPicture",
    "PiggyBank",
    "Pill",
    "PinterestLogo",
    "Pinwheel",
    "Pizza",
    "Placeholder",
    "Planet",
    "Plant",
    "Play",
    "PlayCircle",
    "PlayPause",
    "Playlist",
    "Plug",
    "PlugCharging",
    "Plugs",
    "PlugsConnected",
    "Plus",
    "PlusCircle",
    "PlusMinus",
    "PlusSquare",
    "PokerChip",
    "PoliceCar",
    "Polygon",
    "Popcorn",
    "PottedPlant",
    "Power",
    "Prescription",
    "Presentation",
    "PresentationChart",
    "Printer",
    "Prohibit",
    "ProhibitInset",
    "ProjectorScreen",
    "ProjectorScreenChart",
    "Pulse",
    "PushPin",
    "PushPinSimple",
    "PushPinSimpleSlash",
    "PushPinSlash",
    "PuzzlePiece",
    "QrCode",
    "Question",
    "Queue",
    "Quotes",
    "Radical",
    "Radio",
    "RadioButton",
    "Radioactive",
    "Rainbow",
    "RainbowCloud",
    "ReadCvLogo",
    "Receipt",
    "ReceiptX",
    "Record",
    "Rectangle",
    "Recycle",
    "RedditLogo",
    "Repeat",
    "RepeatOnce",
    "Rewind",
    "RewindCircle",
    "RoadHorizon",
    "Robot",
    "Rocket",
    "RocketLaunch",
    "Rows",
    "Rss",
    "RssSimple",
    "Rug",
    "Ruler",
    "Scales",
    "Scan",
    "Scissors",
    "Scooter",
    "Screencast",
    "ScribbleLoop",
    "Scroll",
    "Seal",
    "SealCheck",
    "SealQuestion",
    "SealWarning",
    "Selection",
    "SelectionAll",
    "SelectionBackground",
    "SelectionForeground",
    "SelectionInverse",
    "SelectionPlus",
    "SelectionSlash",
    "Shapes",
    "Share",
    "ShareFat",
    "ShareNetwork",
    "Shield",
    "ShieldCheck",
    "ShieldCheckered",
    "ShieldChevron",
    "ShieldPlus",
    "ShieldSlash",
    "ShieldStar",
    "ShieldWarning",
    "ShirtFolded",
    "ShootingStar",
    "ShoppingBag",
    "ShoppingBagOpen",
    "ShoppingCart",
    "ShoppingCartSimple",
    "Shower",
    "Shrimp",
    "Shuffle",
    "ShuffleAngular",
    "ShuffleSimple",
    "Sidebar",
    "SidebarSimple",
    "Sigma",
    "SignIn",
    "SignOut",
    "Signature",
    "Signpost",
    "SimCard",
    "Siren",
    "SketchLogo",
    "SkipBack",
    "SkipBackCircle",
    "SkipForward",
    "SkipForwardCircle",
    "Skull",
    "SlackLogo",
    "Sliders",
    "SlidersHorizontal",
    "Slideshow",
    "Smiley",
    "SmileyAngry",
    "SmileyBlank",
    "SmileyMeh",
    "SmileyNervous",
    "SmileySad",
    "SmileySticker",
    "SmileyWink",
    "SmileyXEyes",
    "SnapchatLogo",
    "Sneaker",
    "SneakerMove",
    "Snowflake",
    "SoccerBall",
    "SortAscending",
    "SortDescending",
    "SoundcloudLogo",
    "Spade",
    "Sparkle",
    "SpeakerHifi",
    "SpeakerHigh",
    "SpeakerLow",
    "SpeakerNone",
    "SpeakerSimpleHigh",
    "SpeakerSimpleLow",
    "SpeakerSimpleNone",
    "SpeakerSimpleSlash",
    "SpeakerSimpleX",
    "SpeakerSlash",
    "SpeakerX",
    "Spinner",
    "SpinnerGap",
    "Spiral",
    "SplitHorizontal",
    "SplitVertical",
    "SpotifyLogo",
    "Square",
    "SquareHalf",
    "SquareHalfBottom",
    "SquareLogo",
    "SquareSplitVertical",
    "SquaresFour",
    "Stack",
    "StackOverflowLogo",
    "StackSimple",
    "Stairs",
    "Stamp",
    "Star",
    "StarAndCrescent",
    "StarFour",
    "StarHalf",
    "StarOfDavid",
    "SteeringWheel",
    "Steps",
    "Stethoscope",
    "Sticker",
    "Stool",
    "Stop",
    "StopCircle",
    "Storefront",
    "Strategy",
    "StripeLogo",
    "Student",
    "Subtitles",
    "Subtract",
    "SubtractSquare",
    "Suitcase",
    "SuitcaseRolling",
    "SuitcaseSimple",
    "Sun",
    "SunDim",
    "SunHorizon",
    "Sunglasses",
    "Swap",
    "Swatches",
    "SwimmingPool",
    "Sword",
    "Synagogue",
    "Syringe",
    "TShirt",
    "Table",
    "Tabs",
    "Tag",
    "TagChevron",
    "TagSimple",
    "Target",
    "Taxi",
    "TelegramLogo",
    "Television",
    "TelevisionSimple",
    "TennisBall",
    "Tent",
    "Terminal",
    "TerminalWindow",
    "TestTube",
    "TextAUnderline",
    "TextAa",
    "TextAlignCenter",
    "TextAlignJustify",
    "TextAlignLeft",
    "TextAlignRight",
    "TextB",
    "TextColumns",
    "TextH",
    "TextHFive",
    "TextHFour",
    "TextHOne",
    "TextHSix",
    "TextHThree",
    "TextHTwo",
    "TextIndent",
    "TextItalic",
    "TextOutdent",
    "TextStrikethrough",
    "TextT",
    "TextUnderline",
    "Textbox",
    "Thermometer",
    "ThermometerCold",
    "ThermometerHot",
    "ThermometerSimple",
    "ThumbsDown",
    "ThumbsUp",
    "Ticket",
    "TidalLogo",
    "TiktokLogo",
    "Timer",
    "Tipi",
    "ToggleLeft",
    "ToggleRight",
    "Toilet",
    "ToiletPaper",
    "Toolbox",
    "Tooth",
    "Tote",
    "ToteSimple",
    "Trademark",
    "TrademarkRegistered",
    "TrafficCone",
    "TrafficSign",
    "TrafficSignal",
    "Train",
    "TrainRegional",
    "TrainSimple",
    "Tram",
    "Translate",
    "Trash",
    "TrashSimple",
    "Tray",
    "Tree",
    "TreeEvergreen",
    "TreePalm",
    "TreeStructure",
    "TrendDown",
    "TrendUp",
    "Triangle",
    "Trophy",
    "Truck",
    "TwitchLogo",
    "TwitterLogo",
    "Umbrella",
    "UmbrellaSimple",
    "Unite",
    "UniteSquare",
    "Upload",
    "UploadSimple",
    "Usb",
    "User",
    "UserCircle",
    "UserCircleGear",
    "UserCircleMinus",
    "UserCirclePlus",
    "UserFocus",
    "UserGear",
    "UserList",
    "UserMinus",
    "UserPlus",
    "UserRectangle",
    "UserSquare",
    "UserSwitch",
    "Users",
    "UsersFour",
    "UsersThree",
    "Van",
    "Vault",
    "Vibrate",
    "Video",
    "VideoCamera",
    "VideoCameraSlash",
    "Vignette",
    "VinylRecord",
    "VirtualReality",
    "Virus",
    "Voicemail",
    "Volleyball",
    "Wall",
    "Wallet",
    "Warehouse",
    "Warning",
    "WarningCircle",
    "WarningDiamond",
    "WarningOctagon",
    "Watch",
    "WaveSawtooth",
    "WaveSine",
    "WaveSquare",
    "WaveTriangle",
    "Waveform",
    "Waves",
    "Webcam",
    "WebcamSlash",
    "WebhooksLogo",
    "WechatLogo",
    "WhatsappLogo",
    "Wheelchair",
    "WheelchairMotion",
    "WifiHigh",
    "WifiLow",
    "WifiMedium",
    "WifiNone",
    "WifiSlash",
    "WifiX",
    "Wind",
    "WindowsLogo",
    "Wine",
    "Wrench",
    "X",
    "XCircle",
    "XSquare",
    "YinYang",
    "YoutubeLogo",
  ],
  is = "https://framer.com/m/phosphor-icons/",
  xn = ["thin", "light", "regular", "bold", "fill", "duotone"],
  os = la.reduce((r, a) => ((r[a.toLowerCase()] = a), r), {});
function Te(r) {
  let {
      color: a,
      selectByList: s,
      iconSearch: i,
      iconSelection: c,
      onClick: d,
      onMouseDown: g,
      onMouseUp: w,
      onMouseEnter: p,
      onMouseLeave: l,
      weight: y,
      mirrored: x,
    } = r,
    P = B(!1),
    q = qr(la, s, i, c, os),
    [C, o] = K(q === "Home" ? un(ce) : null);
  async function u() {
    try {
      let H = await import(`${is}${q}.js@0.0.53`);
      P.current && o(H.default(ce));
    } catch {
      P.current && o(null);
    }
  }
  U(
    () => (
      (P.current = !0),
      u(),
      () => {
        P.current = !1;
      }
    ),
    [q],
  );
  let F = ge.current() === ge.canvas ? e(kr, {}) : null;
  return e(t.div, {
    style: { display: "contents" },
    onClick: d,
    onMouseEnter: p,
    onMouseLeave: l,
    onMouseDown: g,
    onMouseUp: w,
    children: C
      ? e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 256 256",
          style: {
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: a,
            color: a,
            flexShrink: 0,
            transform: x ? "scale(-1, 1)" : void 0,
          },
          focusable: "false",
          color: a,
          children: e(C, { color: a, weight: y }),
        })
      : F,
  });
}
Te.displayName = "Phosphor";
Te.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "House",
  iconSearch: "House",
  color: "#66F",
  selectByList: !0,
  weight: "regular",
  mirrored: !1,
};
re(Te, {
  selectByList: {
    type: m.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: Te.defaultProps.selectByList,
  },
  iconSelection: {
    type: m.Enum,
    options: la,
    defaultValue: Te.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: r }) => !r,
    description:
      "Find every icon name on the [Phosphor site](https://phosphoricons.com/)",
  },
  iconSearch: {
    type: m.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: r }) => r,
  },
  color: { type: m.Color, title: "Color", defaultValue: Te.defaultProps.color },
  weight: {
    type: m.Enum,
    title: "Weight",
    optionTitles: xn.map((r) => r.charAt(0).toUpperCase() + r.slice(1)),
    options: xn,
    defaultValue: Te.defaultProps.weight,
  },
  mirrored: {
    type: m.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: Te.defaultProps.mirrored,
  },
  ...Cr,
});
var ss = ue(Te),
  ls = [
    "y7KgjUna3",
    "Po8fZb_tG",
    "AKUH0ijR6",
    "yREw9QGWG",
    "ksOoaommc",
    "oWOUKUBuh",
  ];
var fs = {
  AKUH0ijR6: "framer-v-13i8jn3",
  ksOoaommc: "framer-v-1o0lp4p",
  oWOUKUBuh: "framer-v-192f1m0",
  Po8fZb_tG: "framer-v-1lddy8j",
  y7KgjUna3: "framer-v-12wgdks",
  yREw9QGWG: "framer-v-13rh0a8",
};
function Nr(r, ...a) {
  let s = {};
  return (a?.forEach((i) => i && Object.assign(s, r[i])), s);
}
var cs = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  ms = (r, a) => `translateX(-50%) ${a}`,
  ds = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Fr = { opacity: 1, rotate: 0, scale: 0.9, transition: ds, x: 22 },
  ps = ({ value: r, children: a }) => {
    let s = Ne(ae),
      i = r ?? s.transition,
      c = O(() => ({ ...s, transition: i }), [JSON.stringify(i)]);
    return e(ae.Provider, { value: c, children: a });
  },
  hs = {
    "Variant 1": "y7KgjUna3",
    "Variant 2": "Po8fZb_tG",
    "Variant 3": "AKUH0ijR6",
    "Variant 4": "yREw9QGWG",
    "Variant 5": "ksOoaommc",
    "Variant 6": "oWOUKUBuh",
  },
  gs = ({ height: r, id: a, width: s, ...i }) => {
    var c, d;
    return {
      ...i,
      variant:
        (d = (c = hs[i.variant]) !== null && c !== void 0 ? c : i.variant) !==
          null && d !== void 0
          ? d
          : "y7KgjUna3",
    };
  },
  us = (r, a) => a.join("-") + r.layoutDependency,
  xs = fe(function (r, a) {
    let { activeLocale: s } = Se(),
      { style: i, className: c, layoutId: d, variant: g, ...w } = gs(r),
      {
        baseVariant: p,
        classNames: l,
        gestureVariant: y,
        setGestureState: x,
        setVariant: P,
        transition: q,
        variants: C,
      } = Fe({
        cycleOrder: ls,
        defaultVariant: "y7KgjUna3",
        transitions: cs,
        variant: g,
        variantClassNames: fs,
      }),
      o = us(r, C),
      { activeVariantCallback: u, delay: M } = wr(p),
      F = u(async (...J) => {
        P("y7KgjUna3");
      }),
      S = u(async (...J) => {
        P("y7KgjUna3");
      }),
      j = u(async (...J) => {
        P("Po8fZb_tG");
      }),
      H = u(async (...J) => {
        P("AKUH0ijR6");
      }),
      G = u(async (...J) => {
        P("AKUH0ijR6");
      }),
      R = u(async (...J) => {
        P("yREw9QGWG");
      }),
      _ = u(async (...J) => {
        P("yREw9QGWG");
      }),
      Y = u(async (...J) => {
        P("ksOoaommc");
      }),
      I = u(async (...J) => {
        P("ksOoaommc");
      }),
      de = u(async (...J) => {
        P("oWOUKUBuh");
      }),
      pe = u(async (...J) => {
        P("oWOUKUBuh");
      }),
      Ce = B(null),
      oe = we();
    return e(ne, {
      id: d ?? oe,
      children: e(t.div, {
        initial: g,
        animate: C,
        onHoverStart: () => x({ isHovered: !0 }),
        onHoverEnd: () => x({ isHovered: !1 }),
        onTapStart: () => x({ isPressed: !0 }),
        onTap: () => x({ isPressed: !1 }),
        onTapCancel: () => x({ isPressed: !1 }),
        className: te("framer-evwYt", l),
        style: { display: "contents" },
        children: e(ps, {
          value: q,
          children: f(t.div, {
            ...w,
            className: te("framer-12wgdks", c),
            "data-framer-name": "Variant 1",
            layoutDependency: o,
            layoutId: "y7KgjUna3",
            ref: a ?? Ce,
            style: { ...i },
            ...Nr(
              {
                AKUH0ijR6: { "data-framer-name": "Variant 3" },
                ksOoaommc: { "data-framer-name": "Variant 5" },
                oWOUKUBuh: { "data-framer-name": "Variant 6" },
                Po8fZb_tG: { "data-framer-name": "Variant 2" },
                yREw9QGWG: { "data-framer-name": "Variant 4" },
              },
              p,
              y,
            ),
            children: [
              f(t.div, {
                className: "framer-1qe4lak",
                "data-framer-name": "Image",
                layoutDependency: o,
                layoutId: "Ctg2mQ7ei",
                children: [
                  ![
                    "Po8fZb_tG",
                    "AKUH0ijR6",
                    "yREw9QGWG",
                    "ksOoaommc",
                    "oWOUKUBuh",
                  ].includes(p) &&
                    e(b, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 301,
                        intrinsicWidth: 466,
                        pixelHeight: 301,
                        pixelWidth: 466,
                        src: "https://framerusercontent.com/images/iZWI4tJ1383PMTAhanmi0uk1Lo.png",
                      },
                      className: "framer-sdcksj",
                      "data-framer-name": "1",
                      layoutDependency: o,
                      layoutId: "ALAfGndjr",
                      children: e(h, {
                        __fromCanvasComponent: !0,
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                              "--framer-font-family":
                                '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "600",
                              "--framer-line-height": "1.4em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                            },
                            children:
                              "Attractive monthly promotional events for members to participate and redeem BIG bonuses",
                          }),
                        }),
                        className: "framer-yw9rkk",
                        fonts: ["Inter-SemiBold"],
                        layoutDependency: o,
                        layoutId: "pu5WRJoVS",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  p === "Po8fZb_tG" &&
                    e(b, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 301,
                        intrinsicWidth: 466,
                        pixelHeight: 301,
                        pixelWidth: 466,
                        src: "https://framerusercontent.com/images/iZWI4tJ1383PMTAhanmi0uk1Lo.png",
                      },
                      className: "framer-1f9fzj8",
                      "data-framer-name": "2",
                      layoutDependency: o,
                      layoutId: "axkfgtelA",
                      children: e(h, {
                        __fromCanvasComponent: !0,
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                              "--framer-font-family":
                                '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-line-height": "1.4em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                            },
                            children:
                              "Dedicated Account Manager assigned to each member upon registration",
                          }),
                        }),
                        className: "framer-1dktn6c",
                        fonts: ["Inter-SemiBold"],
                        layoutDependency: o,
                        layoutId: "A1mi5VREi",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  p === "AKUH0ijR6" &&
                    e(b, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 301,
                        intrinsicWidth: 466,
                        pixelHeight: 301,
                        pixelWidth: 466,
                        src: "https://framerusercontent.com/images/iZWI4tJ1383PMTAhanmi0uk1Lo.png",
                      },
                      className: "framer-1eg48pr",
                      "data-framer-name": "3",
                      layoutDependency: o,
                      layoutId: "upXfaLGbL",
                      children: e(h, {
                        __fromCanvasComponent: !0,
                        children: f(n, {
                          children: [
                            e(t.p, {
                              style: {
                                "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                "--framer-font-family":
                                  '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children:
                                "24/7 Customer Service & Finance Officers",
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                "--framer-font-family":
                                  '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children: "to assist you on",
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                "--framer-font-family":
                                  '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color":
                                  "var(--extracted-1iakedh, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children:
                                "all issues and ensure your transactions go through smoothly",
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                "--framer-font-family":
                                  '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color":
                                  "var(--extracted-14qxiz, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children: "(real human, not A.I. bot)",
                            }),
                          ],
                        }),
                        className: "framer-1cyfst9",
                        fonts: ["Inter-SemiBold"],
                        layoutDependency: o,
                        layoutId: "SuZFmxUnD",
                        style: {
                          "--extracted-14qxiz":
                            "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                          "--extracted-1iakedh":
                            "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                          "--extracted-2gxw0f":
                            "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                          "--extracted-r6o4lv":
                            "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  p === "yREw9QGWG" &&
                    e(b, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 301,
                        intrinsicWidth: 466,
                        pixelHeight: 301,
                        pixelWidth: 466,
                        src: "https://framerusercontent.com/images/iZWI4tJ1383PMTAhanmi0uk1Lo.png",
                      },
                      className: "framer-1llblne",
                      "data-framer-name": "4",
                      layoutDependency: o,
                      layoutId: "vKtSyFOf4",
                      children: e(h, {
                        __fromCanvasComponent: !0,
                        children: f(n, {
                          children: [
                            e(t.p, {
                              style: {
                                "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                "--framer-font-family":
                                  '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children: "All Transactions are processed within",
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                "--framer-font-family":
                                  '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children:
                                "3 minutes. Various common payment gateway accepted",
                            }),
                          ],
                        }),
                        className: "framer-icjckb",
                        fonts: ["Inter-SemiBold"],
                        layoutDependency: o,
                        layoutId: "SmZ8Mxk8U",
                        style: {
                          "--extracted-2gxw0f":
                            "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                          "--extracted-r6o4lv":
                            "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  p === "ksOoaommc" &&
                    e(b, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 301,
                        intrinsicWidth: 466,
                        pixelHeight: 301,
                        pixelWidth: 466,
                        src: "https://framerusercontent.com/images/iZWI4tJ1383PMTAhanmi0uk1Lo.png",
                      },
                      className: "framer-ifmb27",
                      "data-framer-name": "5",
                      layoutDependency: o,
                      layoutId: "GnQz6csUp",
                      children: e(h, {
                        __fromCanvasComponent: !0,
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                              "--framer-font-family":
                                '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-line-height": "1.4em",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                            },
                            children:
                              "Advanced data encryption system, ensuring all data and access remains confidential",
                          }),
                        }),
                        className: "framer-1jctfn0",
                        fonts: ["Inter-SemiBold"],
                        layoutDependency: o,
                        layoutId: "LjmOe6rg2",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    }),
                  p === "oWOUKUBuh" &&
                    f(b, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 301,
                        intrinsicWidth: 466,
                        pixelHeight: 301,
                        pixelWidth: 466,
                        src: "https://framerusercontent.com/images/iZWI4tJ1383PMTAhanmi0uk1Lo.png",
                      },
                      className: "framer-19cz42n",
                      "data-framer-name": "6",
                      layoutDependency: o,
                      layoutId: "DLGlYQduK",
                      children: [
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e(t.p, {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children: "Earn weekly commission",
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children: "as long as your friends",
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children: "play on our site.",
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-14qxiz, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children: "(regardless they win or lose)",
                              }),
                            ],
                          }),
                          className: "framer-145234u",
                          fonts: ["Inter-SemiBold"],
                          layoutDependency: o,
                          layoutId: "DQtt2n1n3",
                          style: {
                            "--extracted-14qxiz":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--extracted-1iakedh":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--extracted-2gxw0f":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--extracted-r6o4lv":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(k, {
                          href: "https://sg.hiso33as.com/#/login",
                          openInNewTab: !0,
                          children: e(b, {
                            as: "a",
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 23,
                              intrinsicWidth: 100,
                              pixelHeight: 46,
                              pixelWidth: 200,
                              src: "https://framerusercontent.com/images/BuJIYR8uncnOyJPFSPUUEEWz4I.gif",
                            },
                            className: "framer-lha7h9 framer-1wt3yvm",
                            "data-framer-name": "associates_icon",
                            layoutDependency: o,
                            layoutId: "xtW_ftBiC",
                            transformTemplate: ms,
                          }),
                        }),
                        e(t.div, {
                          className: "framer-1ktx8jj-container",
                          layoutDependency: o,
                          layoutId: "Ylq2dqVS5-container",
                          style: { rotate: -47 },
                          children: e(Te, {
                            color:
                              'var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) /* {"name":"Bright Gold"} */',
                            height: "100%",
                            iconSearch: "arrow",
                            iconSelection: "House",
                            id: "Ylq2dqVS5",
                            layoutId: "Ylq2dqVS5",
                            mirrored: !1,
                            selectByList: !1,
                            style: { height: "100%", width: "100%" },
                            weight: "regular",
                            width: "100%",
                          }),
                        }),
                        e(t.div, {
                          className: "framer-eoh98d",
                          layoutDependency: o,
                          layoutId: "nh3cnazQA",
                          style: {
                            backgroundColor:
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            borderBottomLeftRadius: 17,
                            borderBottomRightRadius: 17,
                            borderTopLeftRadius: 17,
                            borderTopRightRadius: 17,
                          },
                          children: e(h, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e(t.p, {
                                style: {
                                  "--font-selector":
                                    "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                  "--framer-font-size": "12px",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-2dd0df26-542a-4acd-afbc-726f9204dd83, rgb(161, 5, 52)))",
                                },
                                children: "Click Me",
                              }),
                            }),
                            className: "framer-6n5m09",
                            fonts: ["GF;Bebas Neue-regular"],
                            layoutDependency: o,
                            layoutId: "DVJqkxzms",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-2dd0df26-542a-4acd-afbc-726f9204dd83, rgb(161, 5, 52))",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              f(t.div, {
                className: "framer-ahkaeh",
                "data-framer-name": "Button",
                layoutDependency: o,
                layoutId: "YZccG1ULg",
                children: [
                  e(t.div, {
                    className: "framer-gn7csn",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "IFsXlE1Dw",
                    onTapStart: F,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileTap: Fr,
                    ...Nr({ Po8fZb_tG: { onMouseEnter: S } }, p, y),
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "19px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(99, 69, 8))",
                          },
                          children: "Simply Play & Get Extra",
                        }),
                      }),
                      className: "framer-mcnl46",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "Y2FDCVwNz",
                      style: {
                        "--extracted-r6o4lv": "rgb(99, 69, 8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-1p6fpif",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "JAUEjY63m",
                    onTapStart: j,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileTap: Fr,
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "19px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(99, 69, 8))",
                          },
                          children: "Personalized Service",
                        }),
                      }),
                      className: "framer-1a8eo9k",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "SJneP_NDE",
                      style: {
                        "--extracted-r6o4lv": "rgb(99, 69, 8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-qj6k0t",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "UptYv0Zws",
                    onTapStart: H,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileTap: Fr,
                    ...Nr({ Po8fZb_tG: { onMouseEnter: G } }, p, y),
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "19px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(99, 69, 8))",
                          },
                          children: "Top-Notch Support",
                        }),
                      }),
                      className: "framer-1jj0hz7",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "x2BPCmm5u",
                      style: {
                        "--extracted-r6o4lv": "rgb(99, 69, 8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-1da4qt7",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "SppZ4OtwB",
                    onTapStart: R,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileTap: Fr,
                    ...Nr({ AKUH0ijR6: { onMouseEnter: _ } }, p, y),
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "19px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(99, 69, 8))",
                          },
                          children: "Efficient Processes",
                        }),
                      }),
                      className: "framer-12n6odl",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "Xllyhmv1H",
                      style: {
                        "--extracted-r6o4lv": "rgb(99, 69, 8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-1isfl83",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "da9dhOINu",
                    onTapStart: Y,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileTap: Fr,
                    ...Nr({ yREw9QGWG: { onMouseEnter: I } }, p, y),
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "19px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(99, 69, 8))",
                          },
                          children: "Safe & Secure Policy",
                        }),
                      }),
                      className: "framer-jpeqc",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "cUr__eGyx",
                      style: {
                        "--extracted-r6o4lv": "rgb(99, 69, 8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-1jqk71k",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "ARh0i1cwz",
                    onTapStart: de,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileTap: Fr,
                    ...Nr({ ksOoaommc: { onMouseEnter: pe } }, p, y),
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "19px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(99, 69, 8))",
                          },
                          children: "SG #1 Referral Program",
                        }),
                      }),
                      className: "framer-1gg9rdf",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "AVCmqF_iP",
                      style: {
                        "--extracted-r6o4lv": "rgb(99, 69, 8)",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  ys = [
    '.framer-evwYt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-evwYt .framer-1wt3yvm { display: block; }",
    ".framer-evwYt .framer-12wgdks { align-content: start; align-items: start; display: flex; flex-direction: row; flex-wrap: wrap; gap: 10px; height: 416px; justify-content: flex-start; overflow: hidden; padding: 30px 0px 0px 0px; position: relative; width: 480px; }",
    ".framer-evwYt .framer-1qe4lak { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 527px; justify-content: center; left: calc(51.87500000000003% - 462px / 2); overflow: hidden; padding: 0px 0px 0px 0px; position: absolute; top: calc(32.692307692307715% - 527px / 2); width: 462px; z-index: 1; }",
    ".framer-evwYt .framer-sdcksj, .framer-evwYt .framer-1f9fzj8 { flex: none; height: 345px; overflow: visible; position: absolute; right: -82px; top: calc(66.98292220113854% - 345px / 2); width: 495px; z-index: 1; }",
    ".framer-evwYt .framer-yw9rkk { bottom: 125px; flex: none; left: 182px; position: absolute; right: 133px; top: 98px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }",
    ".framer-evwYt .framer-1dktn6c { flex: none; height: 122px; left: 182px; position: absolute; top: calc(47.536231884058% - 122px / 2); white-space: pre-wrap; width: 174px; word-break: break-word; word-wrap: break-word; }",
    ".framer-evwYt .framer-1eg48pr, .framer-evwYt .framer-1llblne, .framer-evwYt .framer-ifmb27, .framer-evwYt .framer-19cz42n { flex: none; height: 345px; left: 49px; overflow: visible; position: absolute; top: calc(67.08219711725752% - 345px / 2); width: 495px; z-index: 1; }",
    ".framer-evwYt .framer-1cyfst9 { flex: none; height: 122px; left: 182px; position: absolute; right: 115px; top: 74px; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; }",
    ".framer-evwYt .framer-icjckb, .framer-evwYt .framer-1jctfn0 { flex: none; height: 122px; position: absolute; right: 115px; top: calc(46.086956521739154% - 122px / 2); white-space: pre-wrap; width: 198px; word-break: break-word; word-wrap: break-word; }",
    ".framer-evwYt .framer-145234u { bottom: 84px; flex: none; height: 122px; position: absolute; right: 96px; white-space: pre-wrap; width: 218px; word-break: break-word; word-wrap: break-word; }",
    ".framer-evwYt .framer-lha7h9 { aspect-ratio: 4.3478260869565215 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); left: 49%; overflow: visible; position: absolute; text-decoration: none; top: 104px; width: 120px; }",
    ".framer-evwYt .framer-1ktx8jj-container { flex: none; height: 42px; position: absolute; right: 187px; top: 59px; width: 42px; }",
    ".framer-evwYt .framer-eoh98d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 2px 4px 0px 4px; position: absolute; right: 160px; top: 79px; width: min-content; }",
    ".framer-evwYt .framer-6n5m09 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-evwYt .framer-ahkaeh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 302px; justify-content: flex-start; overflow: visible; padding: 50px 0px 0px 0px; position: relative; width: 212px; }",
    ".framer-evwYt .framer-gn7csn, .framer-evwYt .framer-1p6fpif, .framer-evwYt .framer-qj6k0t, .framer-evwYt .framer-1da4qt7, .framer-evwYt .framer-1isfl83, .framer-evwYt .framer-1jqk71k { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 42px; justify-content: flex-end; overflow: hidden; padding: 0px 20px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-evwYt .framer-mcnl46, .framer-evwYt .framer-1a8eo9k, .framer-evwYt .framer-1jj0hz7, .framer-evwYt .framer-12n6odl, .framer-evwYt .framer-jpeqc, .framer-evwYt .framer-1gg9rdf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-evwYt .framer-12wgdks, .framer-evwYt .framer-1qe4lak, .framer-evwYt .framer-eoh98d, .framer-evwYt .framer-ahkaeh, .framer-evwYt .framer-gn7csn, .framer-evwYt .framer-1p6fpif, .framer-evwYt .framer-qj6k0t, .framer-evwYt .framer-1da4qt7, .framer-evwYt .framer-1isfl83, .framer-evwYt .framer-1jqk71k { gap: 0px; } .framer-evwYt .framer-12wgdks > *, .framer-evwYt .framer-eoh98d > *, .framer-evwYt .framer-gn7csn > *, .framer-evwYt .framer-1p6fpif > *, .framer-evwYt .framer-qj6k0t > *, .framer-evwYt .framer-1da4qt7 > *, .framer-evwYt .framer-1isfl83 > *, .framer-evwYt .framer-1jqk71k > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-evwYt .framer-12wgdks > :first-child, .framer-evwYt .framer-eoh98d > :first-child, .framer-evwYt .framer-gn7csn > :first-child, .framer-evwYt .framer-1p6fpif > :first-child, .framer-evwYt .framer-qj6k0t > :first-child, .framer-evwYt .framer-1da4qt7 > :first-child, .framer-evwYt .framer-1isfl83 > :first-child, .framer-evwYt .framer-1jqk71k > :first-child { margin-left: 0px; } .framer-evwYt .framer-12wgdks > :last-child, .framer-evwYt .framer-eoh98d > :last-child, .framer-evwYt .framer-gn7csn > :last-child, .framer-evwYt .framer-1p6fpif > :last-child, .framer-evwYt .framer-qj6k0t > :last-child, .framer-evwYt .framer-1da4qt7 > :last-child, .framer-evwYt .framer-1isfl83 > :last-child, .framer-evwYt .framer-1jqk71k > :last-child { margin-right: 0px; } .framer-evwYt .framer-1qe4lak > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-evwYt .framer-1qe4lak > :first-child, .framer-evwYt .framer-ahkaeh > :first-child { margin-top: 0px; } .framer-evwYt .framer-1qe4lak > :last-child, .framer-evwYt .framer-ahkaeh > :last-child { margin-bottom: 0px; } .framer-evwYt .framer-ahkaeh > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } }",
  ],
  Kr = Pe(xs, ys, "framer-evwYt"),
  fa = Kr;
((Kr.displayName = "Change Pic Mobile"),
  (Kr.defaultProps = { height: 416, width: 480 }),
  re(Kr, {
    variant: {
      options: [
        "y7KgjUna3",
        "Po8fZb_tG",
        "AKUH0ijR6",
        "yREw9QGWG",
        "ksOoaommc",
        "oWOUKUBuh",
      ],
      optionTitles: [
        "Variant 1",
        "Variant 2",
        "Variant 3",
        "Variant 4",
        "Variant 5",
        "Variant 6",
      ],
      title: "Variant",
      type: m.Enum,
    },
  }),
  ke(Kr, [
    {
      family: "Bebas Neue",
      style: "normal",
      url: "https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXooxWtrygbi49c.woff2",
      weight: "400",
    },
    ...ss,
  ]));
Dt.loadWebFontsFromSelectors([]);
var yn = [],
  bn = [
    ".framer-Y7gCV .framer-styles-preset-4ehznm:not(.rich-text-wrapper), .framer-Y7gCV .framer-styles-preset-4ehznm.rich-text-wrapper a { --framer-link-current-text-color: #111111; --framer-link-current-text-decoration: underline; --framer-link-hover-text-color: #0088ff; --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, #b88e3a); --framer-link-text-decoration: none; }",
  ],
  vn = "framer-Y7gCV";
var vs = [
    "BKwLqH_zE",
    "BoAmTNc0w",
    "teeE4bxnk",
    "ZjnY8axSo",
    "oLWU66f_Y",
    "L9pnC7Mqq",
    "z8Qzi4bxT",
    "i910fuuFh",
    "mo9n4WItl",
    "dzoiQfp0i",
    "oRfnMJhDw",
    "sbrs0ZJeV",
    "xCAqksY5n",
    "Mfmt0Bv21",
    "FP6g4fcbu",
    "eEObayyKw",
    "VfzwjbOog",
    "FUCfrh1p1",
    "ID7n2nCMa",
    "GPFzPmBb_",
    "z5XZAgOF6",
    "UWpVSKTZo",
    "I9BLrRh_k",
    "JdVvHu_jX",
    "DVrGVZUqL",
    "dh52dh7fH",
    "CszMMXPH3",
    "IR3ioyR5Y",
    "oRgG15EWJ",
    "Foi06zcdP",
    "AejDn87jJ",
    "Sh_3e4fjX",
    "hB_XW0VLF",
    "But81vgyS",
    "rHWqHP5ZR",
    "sf1FKiuaU",
  ],
  ws = "framer-3a31R",
  Ss = {
    AejDn87jJ: "framer-v-jp4r9j",
    BKwLqH_zE: "framer-v-8j8uad",
    BoAmTNc0w: "framer-v-1oy2eas",
    But81vgyS: "framer-v-dqag1t",
    CszMMXPH3: "framer-v-1eueqx2",
    dh52dh7fH: "framer-v-tbwwmr",
    DVrGVZUqL: "framer-v-1auylhz",
    dzoiQfp0i: "framer-v-vo5uku",
    eEObayyKw: "framer-v-1bv1rsu",
    Foi06zcdP: "framer-v-9b4gcl",
    FP6g4fcbu: "framer-v-ai73cq",
    FUCfrh1p1: "framer-v-14wtu9u",
    GPFzPmBb_: "framer-v-13szqn6",
    hB_XW0VLF: "framer-v-1uo7shh",
    i910fuuFh: "framer-v-1fz7dg6",
    I9BLrRh_k: "framer-v-1usa9bf",
    ID7n2nCMa: "framer-v-1t2uavz",
    IR3ioyR5Y: "framer-v-13fs2nx",
    JdVvHu_jX: "framer-v-1mr0m0h",
    L9pnC7Mqq: "framer-v-1na273f",
    Mfmt0Bv21: "framer-v-fx7pft",
    mo9n4WItl: "framer-v-xtyunx",
    oLWU66f_Y: "framer-v-1vhhgut",
    oRfnMJhDw: "framer-v-bd4did",
    oRgG15EWJ: "framer-v-1qpkefd",
    rHWqHP5ZR: "framer-v-1g1fi5i",
    sbrs0ZJeV: "framer-v-1npjx9k",
    sf1FKiuaU: "framer-v-qg1me1",
    Sh_3e4fjX: "framer-v-1y1hr25",
    teeE4bxnk: "framer-v-bu6o8l",
    UWpVSKTZo: "framer-v-40spk5",
    VfzwjbOog: "framer-v-1rv2dsy",
    xCAqksY5n: "framer-v-17bmg05",
    z5XZAgOF6: "framer-v-14z85ys",
    z8Qzi4bxT: "framer-v-17ob1sq",
    ZjnY8axSo: "framer-v-1ypczk2",
  };
function ca(r, ...a) {
  let s = {};
  return (a?.forEach((i) => i && Object.assign(s, r[i])), s);
}
var Ps = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ks = ({ value: r, children: a }) => {
    let s = Ne(ae),
      i = r ?? s.transition,
      c = O(() => ({ ...s, transition: i }), [JSON.stringify(i)]);
    return e(ae.Provider, { value: c, children: a });
  },
  Cs = t(n),
  qs = {
    "Variant 1 Mobile Opened": "GPFzPmBb_",
    "Variant 1 Mobile": "ID7n2nCMa",
    "Variant 1 Opened": "BoAmTNc0w",
    "Variant 1": "BKwLqH_zE",
    "Variant 2 Mobile Opened": "UWpVSKTZo",
    "Variant 2 Mobile": "z5XZAgOF6",
    "Variant 2 Opened": "ZjnY8axSo",
    "Variant 2": "teeE4bxnk",
    "Variant 3 Mobile Opened": "JdVvHu_jX",
    "Variant 3 Mobile": "I9BLrRh_k",
    "Variant 3 Opened": "L9pnC7Mqq",
    "Variant 3": "oLWU66f_Y",
    "Variant 4 Mobile Opened": "dh52dh7fH",
    "Variant 4 Mobile": "DVrGVZUqL",
    "Variant 4 Opened": "i910fuuFh",
    "Variant 4": "z8Qzi4bxT",
    "Variant 5 Mobile Opened": "IR3ioyR5Y",
    "Variant 5 Mobile": "CszMMXPH3",
    "Variant 5 Opened": "dzoiQfp0i",
    "Variant 5": "mo9n4WItl",
    "Variant 6 Mobile Opened": "Foi06zcdP",
    "Variant 6 Mobile": "oRgG15EWJ",
    "Variant 6 Opened": "sbrs0ZJeV",
    "Variant 6": "oRfnMJhDw",
    "Variant 7 Mobile Opened": "Sh_3e4fjX",
    "Variant 7 Mobile": "AejDn87jJ",
    "Variant 7 Opened": "Mfmt0Bv21",
    "Variant 7": "xCAqksY5n",
    "Variant 8 Mobile Opened": "But81vgyS",
    "Variant 8 Mobile": "hB_XW0VLF",
    "Variant 8 Opened": "eEObayyKw",
    "Variant 8": "FP6g4fcbu",
    "Variant 9 Mobile Opened": "sf1FKiuaU",
    "Variant 9 Mobile": "rHWqHP5ZR",
    "Variant 9 Opened": "FUCfrh1p1",
    "Variant 9": "VfzwjbOog",
  },
  Rs = ({ height: r, hover: a, id: s, tap: i, width: c, ...d }) => {
    var g, w;
    return {
      ...d,
      variant:
        (w = (g = qs[d.variant]) !== null && g !== void 0 ? g : d.variant) !==
          null && w !== void 0
          ? w
          : "BKwLqH_zE",
      wREMxD8gI: i ?? d.wREMxD8gI,
      Y2TuYCgeG: a ?? d.Y2TuYCgeG,
    };
  },
  Ns = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Fs = fe(function (r, a) {
    let { activeLocale: s, setLocale: i } = Se(),
      {
        style: c,
        className: d,
        layoutId: g,
        variant: w,
        Y2TuYCgeG: p,
        wREMxD8gI: l,
        ...y
      } = Rs(r),
      {
        baseVariant: x,
        classNames: P,
        gestureHandlers: q,
        gestureVariant: C,
        setGestureState: o,
        setVariant: u,
        variants: M,
      } = Fe({
        cycleOrder: vs,
        defaultVariant: "BKwLqH_zE",
        variant: w,
        variantClassNames: Ss,
      }),
      F = Ns(r, M),
      { activeVariantCallback: S, delay: j } = wr(x),
      H = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("BoAmTNc0w");
      }),
      G = S(async (...v) => {
        if ((o({ isHovered: !0 }), p && (await p(...v)) === !1)) return !1;
      }),
      R = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("BKwLqH_zE");
      }),
      _ = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("ZjnY8axSo");
      }),
      Y = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("teeE4bxnk");
      }),
      I = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("L9pnC7Mqq");
      }),
      de = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("oLWU66f_Y");
      }),
      pe = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("i910fuuFh");
      }),
      Ce = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("z8Qzi4bxT");
      }),
      oe = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("dzoiQfp0i");
      }),
      J = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("mo9n4WItl");
      }),
      se = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("sbrs0ZJeV");
      }),
      qe = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("oRfnMJhDw");
      }),
      le = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("Mfmt0Bv21");
      }),
      Ie = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("xCAqksY5n");
      }),
      Be = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("eEObayyKw");
      }),
      ze = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("FP6g4fcbu");
      }),
      Ye = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("FUCfrh1p1");
      }),
      Me = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("VfzwjbOog");
      }),
      $ = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("GPFzPmBb_");
      }),
      X = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("ID7n2nCMa");
      }),
      Ge = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("UWpVSKTZo");
      }),
      nr = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("z5XZAgOF6");
      }),
      Je = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("JdVvHu_jX");
      }),
      ir = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("I9BLrRh_k");
      }),
      pr = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("dh52dh7fH");
      }),
      hr = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("DVrGVZUqL");
      }),
      Le = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("IR3ioyR5Y");
      }),
      gr = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("CszMMXPH3");
      }),
      or = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("Foi06zcdP");
      }),
      zr = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("oRgG15EWJ");
      }),
      Gr = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("Sh_3e4fjX");
      }),
      Hr = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("AejDn87jJ");
      }),
      sr = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("But81vgyS");
      }),
      Q = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("hB_XW0VLF");
      }),
      Z = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("sf1FKiuaU");
      }),
      Ve = S(async (...v) => {
        if ((o({ isPressed: !1 }), l && (await l(...v)) === !1)) return !1;
        u("rHWqHP5ZR");
      }),
      be = B(null),
      He = () =>
        !![
          "BoAmTNc0w",
          "ZjnY8axSo",
          "L9pnC7Mqq",
          "i910fuuFh",
          "dzoiQfp0i",
          "sbrs0ZJeV",
          "Mfmt0Bv21",
          "eEObayyKw",
          "FUCfrh1p1",
          "GPFzPmBb_",
          "UWpVSKTZo",
          "JdVvHu_jX",
          "dh52dh7fH",
          "IR3ioyR5Y",
          "Foi06zcdP",
          "Sh_3e4fjX",
          "But81vgyS",
          "sf1FKiuaU",
        ].includes(x),
      he = we(),
      ve = [vn],
      D = Ba();
    return e(ne, {
      id: g ?? he,
      children: e(Cs, {
        animate: M,
        initial: !1,
        children: e(ks, {
          value: Ps,
          children: f(t.div, {
            ...y,
            ...q,
            className: te(ws, ...ve, "framer-8j8uad", d, P),
            "data-framer-name": "Variant 1",
            "data-highlight": !0,
            layoutDependency: F,
            layoutId: "BKwLqH_zE",
            onMouseEnter: G,
            onTap: H,
            ref: a ?? be,
            style: { ...c },
            ...ca(
              {
                AejDn87jJ: {
                  "data-framer-name": "Variant 7 Mobile",
                  onTap: Gr,
                },
                BoAmTNc0w: { "data-framer-name": "Variant 1 Opened", onTap: R },
                But81vgyS: {
                  "data-framer-name": "Variant 8 Mobile Opened",
                  onTap: Q,
                },
                CszMMXPH3: {
                  "data-framer-name": "Variant 5 Mobile",
                  onTap: Le,
                },
                dh52dh7fH: {
                  "data-framer-name": "Variant 4 Mobile Opened",
                  onTap: hr,
                },
                DVrGVZUqL: {
                  "data-framer-name": "Variant 4 Mobile",
                  onTap: pr,
                },
                dzoiQfp0i: { "data-framer-name": "Variant 5 Opened", onTap: J },
                eEObayyKw: {
                  "data-framer-name": "Variant 8 Opened",
                  onTap: ze,
                },
                Foi06zcdP: {
                  "data-framer-name": "Variant 6 Mobile Opened",
                  onTap: zr,
                },
                FP6g4fcbu: { "data-framer-name": "Variant 8", onTap: Be },
                FUCfrh1p1: {
                  "data-framer-name": "Variant 9 Opened",
                  onTap: Me,
                },
                GPFzPmBb_: {
                  "data-framer-name": "Variant 1 Mobile Opened",
                  onTap: X,
                },
                hB_XW0VLF: {
                  "data-framer-name": "Variant 8 Mobile",
                  onTap: sr,
                },
                i910fuuFh: {
                  "data-framer-name": "Variant 4 Opened",
                  onTap: Ce,
                },
                I9BLrRh_k: {
                  "data-framer-name": "Variant 3 Mobile",
                  onTap: Je,
                },
                ID7n2nCMa: { "data-framer-name": "Variant 1 Mobile", onTap: $ },
                IR3ioyR5Y: {
                  "data-framer-name": "Variant 5 Mobile Opened",
                  onTap: gr,
                },
                JdVvHu_jX: {
                  "data-framer-name": "Variant 3 Mobile Opened",
                  onTap: ir,
                },
                L9pnC7Mqq: {
                  "data-framer-name": "Variant 3 Opened",
                  onTap: de,
                },
                Mfmt0Bv21: {
                  "data-framer-name": "Variant 7 Opened",
                  onTap: Ie,
                },
                mo9n4WItl: { "data-framer-name": "Variant 5", onTap: oe },
                oLWU66f_Y: { "data-framer-name": "Variant 3", onTap: I },
                oRfnMJhDw: { "data-framer-name": "Variant 6", onTap: se },
                oRgG15EWJ: {
                  "data-framer-name": "Variant 6 Mobile",
                  onTap: or,
                },
                rHWqHP5ZR: { "data-framer-name": "Variant 9 Mobile", onTap: Z },
                sbrs0ZJeV: {
                  "data-framer-name": "Variant 6 Opened",
                  onTap: qe,
                },
                sf1FKiuaU: {
                  "data-framer-name": "Variant 9 Mobile Opened",
                  onTap: Ve,
                },
                Sh_3e4fjX: {
                  "data-framer-name": "Variant 7 Mobile Opened",
                  onTap: Hr,
                },
                teeE4bxnk: { "data-framer-name": "Variant 2", onTap: _ },
                UWpVSKTZo: {
                  "data-framer-name": "Variant 2 Mobile Opened",
                  onTap: nr,
                },
                VfzwjbOog: { "data-framer-name": "Variant 9", onTap: Ye },
                xCAqksY5n: { "data-framer-name": "Variant 7", onTap: le },
                z5XZAgOF6: {
                  "data-framer-name": "Variant 2 Mobile",
                  onTap: Ge,
                },
                z8Qzi4bxT: { "data-framer-name": "Variant 4", onTap: pe },
                ZjnY8axSo: { "data-framer-name": "Variant 2 Opened", onTap: Y },
              },
              x,
              C,
            ),
            children: [
              e(t.div, {
                className: "framer-10txcp1",
                layoutDependency: F,
                layoutId: "gbyHAxSB0",
                children: e(h, {
                  __fromCanvasComponent: !0,
                  children: e(n, {
                    children: f(t.p, {
                      style: {
                        "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                        "--framer-font-family":
                          '"Poppins", "Poppins Placeholder", sans-serif',
                        "--framer-font-weight": "600",
                        "--framer-text-alignment": "center",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                      },
                      children: [
                        e(t.span, {
                          style: {
                            "--framer-text-color":
                              "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                          },
                          children: "+ ",
                        }),
                        "What are the Benefits of Playing Hiso33 Online Casino?",
                      ],
                    }),
                  }),
                  className: "framer-xhjepc",
                  fonts: ["GF;Poppins-600"],
                  layoutDependency: F,
                  layoutId: "u5pwBKHdT",
                  style: {
                    "--extracted-1w3ko1f":
                      "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    "--extracted-r6o4lv":
                      "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  variants: {
                    AejDn87jJ: {
                      "--extracted-2gxw0f":
                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                    },
                    BoAmTNc0w: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    But81vgyS: {
                      "--extracted-2gxw0f":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    CszMMXPH3: {
                      "--extracted-2gxw0f":
                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                    },
                    dh52dh7fH: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    dzoiQfp0i: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    eEObayyKw: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    Foi06zcdP: {
                      "--extracted-2gxw0f":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    FUCfrh1p1: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    GPFzPmBb_: {
                      "--extracted-2gxw0f":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    hB_XW0VLF: {
                      "--extracted-2gxw0f":
                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                    },
                    i910fuuFh: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    ID7n2nCMa: {
                      "--extracted-2gxw0f":
                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                    },
                    IR3ioyR5Y: {
                      "--extracted-2gxw0f":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    JdVvHu_jX: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    L9pnC7Mqq: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    Mfmt0Bv21: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    rHWqHP5ZR: {
                      "--extracted-2gxw0f":
                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                    },
                    sbrs0ZJeV: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    sf1FKiuaU: {
                      "--extracted-2gxw0f":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    Sh_3e4fjX: {
                      "--extracted-2gxw0f":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    UWpVSKTZo: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                    ZjnY8axSo: {
                      "--extracted-r6o4lv":
                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...ca(
                    {
                      AejDn87jJ: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                e(t.span, {
                                  style: {
                                    "--framer-font-size": "16px",
                                    "--framer-text-color":
                                      "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                  },
                                  children: "+ ",
                                }),
                                "Payment Methods on the Hiso33 Official ",
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: "    Platform",
                            }),
                          ],
                        }),
                      },
                      BoAmTNc0w: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children:
                              "- What are the Benefits of Playing Hiso33 Online Casino?",
                          }),
                        }),
                      },
                      But81vgyS: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: [
                                e(t.span, {
                                  style: { "--framer-font-size": "16px" },
                                  children: "- ",
                                }),
                                "Are there Bonuses on the Hiso33 Official  ",
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: "    Website?",
                            }),
                          ],
                        }),
                      },
                      CszMMXPH3: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                e(t.span, {
                                  style: {
                                    "--framer-font-size": "16px",
                                    "--framer-text-color":
                                      "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                  },
                                  children: "+ ",
                                }),
                                "How can I win money at Hiso33 Global Online",
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: "    Casino?",
                            }),
                          ],
                        }),
                      },
                      dh52dh7fH: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children: [
                              e(t.span, {
                                style: { "--framer-font-size": "16px" },
                                children: "- ",
                              }),
                              "How Hiso33 Slot Works?",
                            ],
                          }),
                        }),
                      },
                      DVrGVZUqL: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-font-size": "16px",
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "How Hiso33 Slot Works?",
                            ],
                          }),
                        }),
                      },
                      dzoiQfp0i: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children:
                              "- How can I win money at Hiso33 Global Online Casino?",
                          }),
                        }),
                      },
                      eEObayyKw: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children:
                              "- Are there Bonuses on the Hiso33 Official Website?",
                          }),
                        }),
                      },
                      Foi06zcdP: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: [
                                e(t.span, {
                                  style: { "--framer-font-size": "16px" },
                                  children: "- ",
                                }),
                                "How to join Hiso33 International Online ",
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: "    Casino?",
                            }),
                          ],
                        }),
                      },
                      FP6g4fcbu: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "Are there Bonuses on the Hiso33 Official Website?",
                            ],
                          }),
                        }),
                      },
                      FUCfrh1p1: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children:
                              "- Are Hiso33 Login Details Vulnerable To Scams?",
                          }),
                        }),
                      },
                      GPFzPmBb_: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: [
                                e(t.span, {
                                  style: { "--framer-font-size": "16px" },
                                  children: "- ",
                                }),
                                " ",
                                e(t.span, {
                                  style: { "--framer-font-size": "14px" },
                                  children:
                                    "What are the Benefits of Playing Hiso33 ",
                                }),
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: "    Online Casino?",
                            }),
                          ],
                        }),
                      },
                      hB_XW0VLF: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                e(t.span, {
                                  style: {
                                    "--framer-font-size": "16px",
                                    "--framer-text-color":
                                      "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                  },
                                  children: "+ ",
                                }),
                                "Are there Bonuses on the Hiso33 Official ",
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: "    Website?",
                            }),
                          ],
                        }),
                      },
                      i910fuuFh: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children: "- How Hiso33 Slot Works?",
                          }),
                        }),
                      },
                      I9BLrRh_k: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-font-size": "16px",
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "Online Games at Hiso33 Casino",
                            ],
                          }),
                        }),
                      },
                      ID7n2nCMa: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                e(t.span, {
                                  style: {
                                    "--framer-font-size": "16px",
                                    "--framer-text-color":
                                      "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                  },
                                  children: "+ ",
                                }),
                                "What are the Benefits of Playing Hiso33 Online  ",
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: "    Casino? ",
                            }),
                          ],
                        }),
                      },
                      IR3ioyR5Y: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: [
                                e(t.span, {
                                  style: { "--framer-font-size": "16px" },
                                  children: "- ",
                                }),
                                "How can I win money at Hiso33 Global ",
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: "    Online Casino?",
                            }),
                          ],
                        }),
                      },
                      JdVvHu_jX: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children: [
                              e(t.span, {
                                style: { "--framer-font-size": "16px" },
                                children: "- ",
                              }),
                              "Online Games at Hiso33 Casino",
                            ],
                          }),
                        }),
                      },
                      L9pnC7Mqq: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children: "- Online Games at Hiso33 Casino",
                          }),
                        }),
                      },
                      Mfmt0Bv21: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children:
                              "- Payment Methods on the Hiso33 Official Platform",
                          }),
                        }),
                      },
                      mo9n4WItl: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "How can I win money at Hiso33 Global Online Casino?",
                            ],
                          }),
                        }),
                      },
                      oLWU66f_Y: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "Online Games at Hiso33 Casino",
                            ],
                          }),
                        }),
                      },
                      oRfnMJhDw: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "How to join Hiso33 International Online Casino?",
                            ],
                          }),
                        }),
                      },
                      oRgG15EWJ: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-font-size": "16px",
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "How to join Hiso33 International Online Casino?",
                            ],
                          }),
                        }),
                      },
                      rHWqHP5ZR: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                e(t.span, {
                                  style: {
                                    "--framer-font-size": "16px",
                                    "--framer-text-color":
                                      "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                  },
                                  children: "+ ",
                                }),
                                "Are Hiso33 Login Details Vulnerable To ",
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: "    Scams?",
                            }),
                          ],
                        }),
                      },
                      sbrs0ZJeV: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children:
                              "- How to join Hiso33 International Online Casino?",
                          }),
                        }),
                      },
                      sf1FKiuaU: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: [
                                e(t.span, {
                                  style: { "--framer-font-size": "16px" },
                                  children: "- ",
                                }),
                                "Are Hiso33 Login Details Vulnerable To ",
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: "    Scams?",
                            }),
                          ],
                        }),
                      },
                      Sh_3e4fjX: {
                        children: f(n, {
                          children: [
                            f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: [
                                e(t.span, {
                                  style: { "--framer-font-size": "16px" },
                                  children: "- ",
                                }),
                                "Payment Methods on the Hiso33 Official ",
                              ],
                            }),
                            e(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "14px",
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-2gxw0f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                              },
                              children: "    Platform",
                            }),
                          ],
                        }),
                      },
                      teeE4bxnk: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "Is online Gambling Hiso33 Singapore Legal?",
                            ],
                          }),
                        }),
                      },
                      UWpVSKTZo: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children: [
                              e(t.span, {
                                style: { "--framer-font-size": "16px" },
                                children: "- ",
                              }),
                              "Is online Gambling Hiso33 Singapore Legal?",
                            ],
                          }),
                        }),
                      },
                      VfzwjbOog: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "Are Hiso33 Login Details Vulnerable To Scams?",
                            ],
                          }),
                        }),
                      },
                      xCAqksY5n: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "Payment Methods on the Hiso33 Official Platform",
                            ],
                          }),
                        }),
                      },
                      z5XZAgOF6: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-font-size": "16px",
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "Is online Gambling Hiso33 Singapore Legal?",
                            ],
                          }),
                        }),
                      },
                      z8Qzi4bxT: {
                        children: e(n, {
                          children: f(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "center",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                            },
                            children: [
                              e(t.span, {
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-1w3ko1f, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                },
                                children: "+ ",
                              }),
                              "How Hiso33 Slot Works?",
                            ],
                          }),
                        }),
                      },
                      ZjnY8axSo: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                              "--framer-font-family":
                                '"Poppins", "Poppins Placeholder", sans-serif',
                              "--framer-font-weight": "600",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                            },
                            children:
                              "- Is online Gambling Hiso33 Singapore Legal?",
                          }),
                        }),
                      },
                    },
                    x,
                    C,
                  ),
                }),
              }),
              He() &&
                e(t.div, {
                  className: "framer-8rl3rr",
                  layoutDependency: F,
                  layoutId: "w0SrDWFfc",
                  children: e(h, {
                    __fromCanvasComponent: !0,
                    children: f(n, {
                      children: [
                        f(t.p, {
                          style: {
                            "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                            "--framer-font-family":
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            "--framer-font-size": "13px",
                            "--framer-line-height": "1em",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(51, 51, 51))",
                          },
                          children: [
                            "Several benefits add to the popularity of online gambling, with convenience being a significant factor. Playing online, especially on platforms like ",
                            e(k, {
                              href: "https://www.hiso33.casino/",
                              openInNewTab: !1,
                              smoothScroll: !1,
                              children: e(t.a, {
                                className: "framer-styles-preset-4ehznm",
                                "data-styles-preset": "Kg_fHJpD2",
                                children: "Hiso33",
                              }),
                            }),
                            " Casino, provides instant access to various casino games. Also, when you can enjoy games without traveling, it is super appealing.\xA0",
                          ],
                        }),
                        e(t.p, {
                          style: {
                            "--framer-font-size": "13px",
                            "--framer-line-height": "1em",
                            "--framer-text-color":
                              "var(--extracted-2gxw0f, rgb(51, 51, 51))",
                          },
                          children: e(t.br, { className: "trailing-break" }),
                        }),
                        f(t.p, {
                          style: {
                            "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                            "--framer-font-family":
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            "--framer-font-size": "13px",
                            "--framer-line-height": "1em",
                          },
                          children: [
                            "The convenience of online gaming makes it attractive and ",
                            e(k, {
                              href: "https://www.hiso33.casino/",
                              openInNewTab: !1,
                              smoothScroll: !1,
                              children: e(t.a, {
                                className: "framer-styles-preset-4ehznm",
                                "data-styles-preset": "Kg_fHJpD2",
                                children: e(t.span, {
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-e385wm, rgb(5, 99, 193))",
                                  },
                                  children: "Hiso33 fair play",
                                }),
                              }),
                            }),
                            " commitment. The platform provides a level playing field for everyone. So, users can enjoy various games while trusting that they will get a fair shot at winning.\xA0",
                          ],
                        }),
                        e(t.p, {
                          style: {
                            "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                            "--framer-font-family":
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            "--framer-font-size": "13px",
                            "--framer-line-height": "1em",
                          },
                          children: e(t.br, { className: "trailing-break" }),
                        }),
                        f(t.p, {
                          style: {
                            "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                            "--framer-font-family":
                              '"Poppins", "Poppins Placeholder", sans-serif',
                            "--framer-font-size": "13px",
                            "--framer-line-height": "1em",
                          },
                          children: [
                            e(k, {
                              href: "https://www.hiso33.casino/",
                              openInNewTab: !1,
                              smoothScroll: !1,
                              children: e(t.a, {
                                className: "framer-styles-preset-4ehznm",
                                "data-styles-preset": "Kg_fHJpD2",
                                children: e(t.span, {
                                  style: {
                                    "--framer-text-color":
                                      "var(--extracted-pwxqni, rgb(5, 99, 193))",
                                  },
                                  children: "Hiso33 online casino",
                                }),
                              }),
                            }),
                            " is not just about convenience; we ensure a trustworthy and enjoyable casino experience right from your home.",
                          ],
                        }),
                      ],
                    }),
                    className: "framer-1020up2",
                    fonts: ["GF;Poppins-regular"],
                    layoutDependency: F,
                    layoutId: "vDaOPw8ee",
                    style: {
                      "--extracted-2gxw0f": "rgb(51, 51, 51)",
                      "--extracted-e385wm": "rgb(5, 99, 193)",
                      "--extracted-pwxqni": "rgb(5, 99, 193)",
                      "--extracted-r6o4lv": "rgb(51, 51, 51)",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                    },
                    variants: {
                      BoAmTNc0w: {
                        "--extracted-1iakedh":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-ydz9fi":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      But81vgyS: {
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      dh52dh7fH: {
                        "--extracted-1iakedh":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-2gxw0f":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      dzoiQfp0i: {
                        "--extracted-1iakedh":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-2gxw0f":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      eEObayyKw: {
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      Foi06zcdP: {
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      FUCfrh1p1: {
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      GPFzPmBb_: {
                        "--extracted-1iakedh":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-ydz9fi":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      i910fuuFh: {
                        "--extracted-1iakedh":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-2gxw0f":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      IR3ioyR5Y: {
                        "--extracted-1iakedh":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-2gxw0f":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      JdVvHu_jX: {
                        "--extracted-1iakedh":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-2gxw0f":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      L9pnC7Mqq: {
                        "--extracted-1iakedh":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-2gxw0f":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      Mfmt0Bv21: {
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      sbrs0ZJeV: {
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      sf1FKiuaU: {
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      Sh_3e4fjX: {
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      UWpVSKTZo: {
                        "--extracted-1iakedh":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-e385wm":
                          "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                      ZjnY8axSo: {
                        "--extracted-1iakedh":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                        "--extracted-e385wm":
                          "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                        "--extracted-r6o4lv":
                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                      },
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                    ...ca(
                      {
                        BoAmTNc0w: {
                          children: f(n, {
                            children: [
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "Several benefits add to the popularity of online gambling, with convenience being a significant factor. Playing online, especially on platforms like ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33",
                                    }),
                                  }),
                                  " Casino, provides instant access to various casino games. Also, when you can enjoy games without traveling, it is super appealing.\xA0",
                                ],
                              }),
                              e(t.p, {
                                style: {
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, rgb(51, 51, 51))",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "The convenience of online gaming makes it attractive and ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 fair play",
                                    }),
                                  }),
                                  " commitment. The platform provides a level playing field for everyone. So, users can enjoy various games while trusting that they will get a fair shot at winning.\xA0",
                                ],
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-ydz9fi, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 online casino",
                                    }),
                                  }),
                                  " is not just about convenience; we ensure a trustworthy and enjoyable casino experience right from your home.",
                                ],
                              }),
                            ],
                          }),
                        },
                        But81vgyS: {
                          children: e(n, {
                            children: f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-line-height": "1.3em",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                "At ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 official website",
                                  }),
                                }),
                                ", members at lower levels can enjoy rewards like a set number of free spins or tokens to play with, and as you engage in more real money games, the value of these rewards gradually increases. For those reaching the top loyalty scheme levels, ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 bonuses",
                                  }),
                                }),
                                ", unique invitations to exclusive tournaments, and the chance to qualify for premium prizes become part of the enticing perks.",
                              ],
                            }),
                          }),
                        },
                        dh52dh7fH: {
                          children: f(n, {
                            children: [
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "Getting started at ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 slots",
                                    }),
                                  }),
                                  " is super easy. The slot machine relies on RNG, an algorithm for randomly generating numbers. Each number corresponds to a specific symbol on the slot machine's reels. When the RNG picks a number, the associated symbol appears on the reels, making them stop. As it says, luck plays a role in winning a slot game.\xA0",
                                ],
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  `It's important to understand that there's no concept of a slot machine being "due" for a win or following a predictable payout cycle, especially in reputable casinos where `,
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 responsible gaming",
                                    }),
                                  }),
                                  " is our priority. These ideas are more like myths than facts and can sometimes mislead players. So, when placing a ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 bet",
                                    }),
                                  }),
                                  " at a slot game, remember that the excitement comes due to uncertainty of the outcome.",
                                ],
                              }),
                            ],
                          }),
                        },
                        dzoiQfp0i: {
                          children: f(n, {
                            children: [
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "Winning real money at online casinos in Singapore is indeed possible. Nevertheless, reading about online casino rules and regulations is better than checking whether the site practices responsible gambling. Rest assured, ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 safe",
                                    }),
                                  }),
                                  " environment makes players stay within their financial limits.\xA0",
                                ],
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "The standard of depositing and withdrawal policies is the same as that of global casinos. You can find more about ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 global",
                                    }),
                                  }),
                                  " terms and conditions on our website.",
                                ],
                              }),
                            ],
                          }),
                        },
                        eEObayyKw: {
                          children: e(n, {
                            children: f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-line-height": "1.3em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                "At ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 official website",
                                  }),
                                }),
                                ", members at lower levels can enjoy rewards like a set number of free spins or tokens to play with, and as you engage in more real money games, the value of these rewards gradually increases. For those reaching the top loyalty scheme levels, ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 bonuses",
                                  }),
                                }),
                                ", unique invitations to exclusive tournaments, and the chance to qualify for premium prizes become part of the enticing perks.",
                              ],
                            }),
                          }),
                        },
                        Foi06zcdP: {
                          children: e(n, {
                            children: f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-line-height": "1.3em",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                "To join ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 International",
                                  }),
                                }),
                                ", go to the login page and provide all essential details. After providing your personal information, you will be directed to the age verification process. This process ensures legal compliance and saves minors from spending their money. We believe in responsible gambling, enhanced security, and ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 trust",
                                  }),
                                }),
                                " building.",
                              ],
                            }),
                          }),
                        },
                        FUCfrh1p1: {
                          children: e(n, {
                            children: f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-line-height": "1.3em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                "The security of ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 login",
                                  }),
                                }),
                                " details is a critical consideration, and they are not vulnerable to ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 scam",
                                  }),
                                }),
                                " because we handle all your information cautiously. Players should prioritize protection by choosing a strong and unique password and refrain from sharing their sensitive information with unauthorized individuals. Additionally, ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 security",
                                  }),
                                }),
                                " implements robust measures to safeguard account information.",
                              ],
                            }),
                          }),
                        },
                        GPFzPmBb_: {
                          children: f(n, {
                            children: [
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "Several benefits add to the popularity of online gambling, with convenience being a significant factor. Playing online, especially on platforms like ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33",
                                    }),
                                  }),
                                  " Casino, provides instant access to various casino games. Also, when you can enjoy games without traveling, it is super appealing.\xA0",
                                ],
                              }),
                              e(t.p, {
                                style: {
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, rgb(51, 51, 51))",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "The convenience of online gaming makes it attractive and ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 fair play",
                                    }),
                                  }),
                                  " commitment. The platform provides a level playing field for everyone. So, users can enjoy various games while trusting that they will get a fair shot at winning.\xA0",
                                ],
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-ydz9fi, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 online casino",
                                    }),
                                  }),
                                  " is not just about convenience; we ensure a trustworthy and enjoyable casino experience right from your home.",
                                ],
                              }),
                            ],
                          }),
                        },
                        i910fuuFh: {
                          children: f(n, {
                            children: [
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "Getting started at ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 slots",
                                    }),
                                  }),
                                  " is super easy. The slot machine relies on RNG, an algorithm for randomly generating numbers. Each number corresponds to a specific symbol on the slot machine's reels. When the RNG picks a number, the associated symbol appears on the reels, making them stop. As it says, luck plays a role in winning a slot game.\xA0",
                                ],
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  `It's important to understand that there's no concept of a slot machine being "due" for a win or following a predictable payout cycle, especially in reputable casinos where `,
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 responsible gaming",
                                    }),
                                  }),
                                  " is our priority. These ideas are more like myths than facts and can sometimes mislead players. So, when placing a ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 bet",
                                    }),
                                  }),
                                  " at a slot game, remember that the excitement comes due to uncertainty of the outcome.",
                                ],
                              }),
                            ],
                          }),
                        },
                        IR3ioyR5Y: {
                          children: f(n, {
                            children: [
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "Winning real money at online casinos in Singapore is indeed possible. Nevertheless, reading about online casino rules and regulations is better than checking whether the site practices responsible gambling. Rest assured, ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 safe",
                                    }),
                                  }),
                                  " environment makes players stay within their financial limits.\xA0",
                                ],
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "The standard of depositing and withdrawal policies is the same as that of global casinos. You can find more about ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 global",
                                    }),
                                  }),
                                  " terms and conditions on our website.",
                                ],
                              }),
                            ],
                          }),
                        },
                        JdVvHu_jX: {
                          children: f(n, {
                            children: [
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 casino",
                                    }),
                                  }),
                                  " offers a variety of popular online games to attract a diverse population. The platform features games like Mega888, MD368, M8bet, Play n' Go, Baccarat and many others. In addition, you will find various slot machine games with progressive jackpots and strategic table games such as blackjack, roulette, and poker games.\xA0",
                                ],
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "You can test your skills by using our free version of games like video poker, which is a digital spin on traditional poker. ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 games",
                                    }),
                                  }),
                                  " also include live casino games for those players seeking lifelike experiences. Download the",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: " Hiso33 app",
                                    }),
                                  }),
                                  " to discover the latest trends and games that align with your preferences.",
                                ],
                              }),
                            ],
                          }),
                        },
                        L9pnC7Mqq: {
                          children: f(n, {
                            children: [
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 casino",
                                    }),
                                  }),
                                  " offers a variety of popular online games to attract a diverse population. The platform features games like Mega888, MD368, M8bet, Play n' Go, Baccarat and many others. In addition, you will find various slot machine games with progressive jackpots and strategic table games such as blackjack, roulette, and poker games.\xA0",
                                ],
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  "You can test your skills by using our free version of games like video poker, which is a digital spin on traditional poker. ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 games",
                                    }),
                                  }),
                                  " also include live casino games for those players seeking lifelike experiences. Download the",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: " Hiso33 app",
                                    }),
                                  }),
                                  " to discover the latest trends and games that align with your preferences.",
                                ],
                              }),
                            ],
                          }),
                        },
                        Mfmt0Bv21: {
                          children: e(n, {
                            children: f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-line-height": "1.3em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                "Most online casinos, including ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 official",
                                  }),
                                }),
                                ", accept different ways for you to deposit and withdraw money. You can use regular credit or debit cards, bank transfers, e-wallets, and some casinos also accept cryptocurrencies. Each method has its own perks, cards are a favorite for most people, while online wallets can add extra security. However, when selecting a payment method, check ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 reviews",
                                  }),
                                }),
                                " for how long that method takes and if there are any fees associated.",
                              ],
                            }),
                          }),
                        },
                        sbrs0ZJeV: {
                          children: e(n, {
                            children: f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-line-height": "1.3em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                "To join ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 International",
                                  }),
                                }),
                                ", go to the login page and provide all essential details. After providing your personal information, you will be directed to the age verification process. This process ensures legal compliance and saves minors from spending their money. We believe in responsible gambling, enhanced security, and ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 trust",
                                  }),
                                }),
                                " building.",
                              ],
                            }),
                          }),
                        },
                        sf1FKiuaU: {
                          children: e(n, {
                            children: f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-line-height": "1.3em",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                "The security of ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 login",
                                  }),
                                }),
                                " details is a critical consideration, and they are not vulnerable to ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 scam",
                                  }),
                                }),
                                " because we handle all your information cautiously. Players should prioritize protection by choosing a strong and unique password and refrain from sharing their sensitive information with unauthorized individuals. Additionally, ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 security",
                                  }),
                                }),
                                " implements robust measures to safeguard account information.",
                              ],
                            }),
                          }),
                        },
                        Sh_3e4fjX: {
                          children: e(n, {
                            children: f(t.p, {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-line-height": "1.3em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                              },
                              children: [
                                "Most online casinos, including ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 official",
                                  }),
                                }),
                                ", accept different ways for you to deposit and withdraw money. You can use regular credit or debit cards, bank transfers, e-wallets, and some casinos also accept cryptocurrencies. Each method has its own perks, cards are a favorite for most people, while online wallets can add extra security. However, when selecting a payment method, check ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e(t.a, {
                                    className: "framer-styles-preset-4ehznm",
                                    "data-styles-preset": "Kg_fHJpD2",
                                    children: "Hiso33 reviews",
                                  }),
                                }),
                                " for how long that method takes and if there are any fees associated.",
                              ],
                            }),
                          }),
                        },
                        UWpVSKTZo: {
                          children: f(n, {
                            children: [
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children:
                                  "The Singapore government follows a strict approach to gambling unless the website is officially licensed. The government has taken this stance to ensure that online gambling is conducted in a controlled and safe environment.\xA0",
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, rgb(51, 51, 51))",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  e(k, {
                                    href: "https://www.hiso33sg1.com/en-sg/home",
                                    openInNewTab: !0,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: e(t.span, {
                                        style: {
                                          "--framer-text-color":
                                            "var(--extracted-e385wm, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                        },
                                        children: "Hiso33 Singapore",
                                      }),
                                    }),
                                  }),
                                  " adheres to the country's legal framework. ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 Online",
                                    }),
                                  }),
                                  " believes in responsible gameplay, and that is why we operate within the boundaries of Singapore's gambling laws. The website has obtained the necessary licenses so that its users can enjoy online gambling without worrying about any legal complications.",
                                ],
                              }),
                            ],
                          }),
                        },
                        ZjnY8axSo: {
                          children: f(n, {
                            children: [
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children:
                                  "The Singapore government follows a strict approach to gambling unless the website is officially licensed. The government has taken this stance to ensure that online gambling is conducted in a controlled and safe environment.\xA0",
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, rgb(51, 51, 51))",
                                },
                                children: e(t.br, {
                                  className: "trailing-break",
                                }),
                              }),
                              f(t.p, {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-line-height": "1.3em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19)))",
                                },
                                children: [
                                  e(k, {
                                    href: "https://www.hiso33sg1.com/en-sg/home",
                                    openInNewTab: !0,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: e(t.span, {
                                        style: {
                                          "--framer-text-color":
                                            "var(--extracted-e385wm, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)))",
                                        },
                                        children: "Hiso33 Singapore",
                                      }),
                                    }),
                                  }),
                                  " adheres to the country's legal framework. ",
                                  e(k, {
                                    href: "https://www.hiso33.casino/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e(t.a, {
                                      className: "framer-styles-preset-4ehznm",
                                      "data-styles-preset": "Kg_fHJpD2",
                                      children: "Hiso33 Online",
                                    }),
                                  }),
                                  " believes in responsible gameplay, and that is why we operate within the boundaries of Singapore's gambling laws. The website has obtained the necessary licenses so that its users can enjoy online gambling without worrying about any legal complications.",
                                ],
                              }),
                            ],
                          }),
                        },
                      },
                      x,
                      C,
                    ),
                  }),
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Ts = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-3a31R.framer-gle7xh, .framer-3a31R .framer-gle7xh { display: block; }",
    ".framer-3a31R.framer-8j8uad { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 19px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-3a31R .framer-10txcp1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-3a31R .framer-xhjepc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-3a31R .framer-8rl3rr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 455px; }",
    ".framer-3a31R .framer-1020up2 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-8j8uad, .framer-3a31R .framer-10txcp1, .framer-3a31R .framer-8rl3rr { gap: 0px; } .framer-3a31R.framer-8j8uad > *, .framer-3a31R .framer-10txcp1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-3a31R.framer-8j8uad > :first-child, .framer-3a31R .framer-10txcp1 > :first-child { margin-left: 0px; } .framer-3a31R.framer-8j8uad > :last-child, .framer-3a31R .framer-10txcp1 > :last-child { margin-right: 0px; } .framer-3a31R .framer-8rl3rr > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-3a31R .framer-8rl3rr > :first-child { margin-top: 0px; } .framer-3a31R .framer-8rl3rr > :last-child { margin-bottom: 0px; } }",
    ".framer-3a31R.framer-v-1oy2eas.framer-8j8uad { align-content: flex-start; align-items: flex-start; flex-direction: column; height: min-content; }",
    ".framer-3a31R.framer-v-1oy2eas .framer-10txcp1 { order: 0; }",
    ".framer-3a31R.framer-v-1oy2eas .framer-8rl3rr, .framer-3a31R.framer-v-1ypczk2 .framer-8rl3rr, .framer-3a31R.framer-v-1na273f .framer-8rl3rr, .framer-3a31R.framer-v-1fz7dg6 .framer-8rl3rr, .framer-3a31R.framer-v-vo5uku .framer-8rl3rr, .framer-3a31R.framer-v-fx7pft .framer-8rl3rr, .framer-3a31R.framer-v-1bv1rsu .framer-8rl3rr, .framer-3a31R.framer-v-14wtu9u .framer-8rl3rr { order: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-1oy2eas.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-1oy2eas.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-1oy2eas.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-1oy2eas.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    ".framer-3a31R.framer-v-1ypczk2.framer-8j8uad, .framer-3a31R.framer-v-1na273f.framer-8j8uad, .framer-3a31R.framer-v-1fz7dg6.framer-8j8uad, .framer-3a31R.framer-v-vo5uku.framer-8j8uad, .framer-3a31R.framer-v-fx7pft.framer-8j8uad, .framer-3a31R.framer-v-1bv1rsu.framer-8j8uad, .framer-3a31R.framer-v-14wtu9u.framer-8j8uad { align-content: flex-start; align-items: flex-start; flex-direction: column; height: min-content; justify-content: flex-start; }",
    ".framer-3a31R.framer-v-1ypczk2 .framer-10txcp1, .framer-3a31R.framer-v-1na273f .framer-10txcp1, .framer-3a31R.framer-v-1fz7dg6 .framer-10txcp1, .framer-3a31R.framer-v-vo5uku .framer-10txcp1, .framer-3a31R.framer-v-1npjx9k .framer-10txcp1, .framer-3a31R.framer-v-fx7pft .framer-10txcp1, .framer-3a31R.framer-v-1bv1rsu .framer-10txcp1, .framer-3a31R.framer-v-14wtu9u .framer-10txcp1 { justify-content: flex-start; order: 0; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-1ypczk2.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-1ypczk2.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-1ypczk2.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-1ypczk2.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-1na273f.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-1na273f.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-1na273f.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-1na273f.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-1fz7dg6.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-1fz7dg6.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-1fz7dg6.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-1fz7dg6.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-vo5uku.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-vo5uku.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-vo5uku.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-vo5uku.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    ".framer-3a31R.framer-v-1npjx9k.framer-8j8uad { align-content: flex-start; align-items: flex-start; flex-direction: column; height: min-content; justify-content: flex-start; padding: 13px 0px 13px 0px; }",
    ".framer-3a31R.framer-v-1npjx9k .framer-8rl3rr { height: 65px; order: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-1npjx9k.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-1npjx9k.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-1npjx9k.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-1npjx9k.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-fx7pft.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-fx7pft.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-fx7pft.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-fx7pft.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-1bv1rsu.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-1bv1rsu.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-1bv1rsu.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-1bv1rsu.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-14wtu9u.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-14wtu9u.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-14wtu9u.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-14wtu9u.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    ".framer-3a31R.framer-v-1t2uavz.framer-8j8uad { align-content: flex-start; align-items: flex-start; flex-wrap: wrap; height: min-content; justify-content: flex-start; width: 380px; }",
    ".framer-3a31R.framer-v-1t2uavz .framer-10txcp1, .framer-3a31R.framer-v-14z85ys .framer-10txcp1, .framer-3a31R.framer-v-1usa9bf .framer-10txcp1, .framer-3a31R.framer-v-1auylhz .framer-10txcp1, .framer-3a31R.framer-v-1qpkefd .framer-10txcp1, .framer-3a31R.framer-v-jp4r9j .framer-10txcp1, .framer-3a31R.framer-v-1uo7shh .framer-10txcp1, .framer-3a31R.framer-v-1g1fi5i .framer-10txcp1 { justify-content: flex-start; width: 380px; }",
    ".framer-3a31R.framer-v-1t2uavz .framer-xhjepc, .framer-3a31R.framer-v-13szqn6 .framer-xhjepc, .framer-3a31R.framer-v-14z85ys .framer-xhjepc, .framer-3a31R.framer-v-40spk5 .framer-xhjepc, .framer-3a31R.framer-v-1usa9bf .framer-xhjepc, .framer-3a31R.framer-v-1mr0m0h .framer-xhjepc, .framer-3a31R.framer-v-1auylhz .framer-xhjepc, .framer-3a31R.framer-v-tbwwmr .framer-xhjepc, .framer-3a31R.framer-v-13fs2nx .framer-xhjepc, .framer-3a31R.framer-v-1qpkefd .framer-xhjepc, .framer-3a31R.framer-v-9b4gcl .framer-xhjepc, .framer-3a31R.framer-v-1y1hr25 .framer-xhjepc, .framer-3a31R.framer-v-dqag1t .framer-xhjepc, .framer-3a31R.framer-v-qg1me1 .framer-xhjepc { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-3a31R.framer-v-13szqn6.framer-8j8uad { align-content: flex-start; align-items: flex-start; flex-direction: column; flex-wrap: wrap; height: min-content; width: 380px; }",
    ".framer-3a31R.framer-v-13szqn6 .framer-10txcp1, .framer-3a31R.framer-v-40spk5 .framer-10txcp1, .framer-3a31R.framer-v-1mr0m0h .framer-10txcp1, .framer-3a31R.framer-v-tbwwmr .framer-10txcp1, .framer-3a31R.framer-v-13fs2nx .framer-10txcp1, .framer-3a31R.framer-v-9b4gcl .framer-10txcp1, .framer-3a31R.framer-v-1y1hr25 .framer-10txcp1, .framer-3a31R.framer-v-dqag1t .framer-10txcp1, .framer-3a31R.framer-v-qg1me1 .framer-10txcp1 { flex-wrap: wrap; order: 0; width: 90%; }",
    ".framer-3a31R.framer-v-13szqn6 .framer-8rl3rr, .framer-3a31R.framer-v-tbwwmr .framer-8rl3rr, .framer-3a31R.framer-v-13fs2nx .framer-8rl3rr, .framer-3a31R.framer-v-9b4gcl .framer-8rl3rr, .framer-3a31R.framer-v-1y1hr25 .framer-8rl3rr, .framer-3a31R.framer-v-dqag1t .framer-8rl3rr, .framer-3a31R.framer-v-qg1me1 .framer-8rl3rr { flex-wrap: wrap; order: 1; padding: 5px; width: 95%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-13szqn6.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-13szqn6.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-13szqn6.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-13szqn6.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    ".framer-3a31R.framer-v-14z85ys.framer-8j8uad, .framer-3a31R.framer-v-1usa9bf.framer-8j8uad, .framer-3a31R.framer-v-1auylhz.framer-8j8uad, .framer-3a31R.framer-v-1eueqx2.framer-8j8uad, .framer-3a31R.framer-v-1qpkefd.framer-8j8uad, .framer-3a31R.framer-v-jp4r9j.framer-8j8uad, .framer-3a31R.framer-v-1uo7shh.framer-8j8uad, .framer-3a31R.framer-v-1g1fi5i.framer-8j8uad { align-content: flex-start; align-items: flex-start; flex-wrap: wrap; height: min-content; justify-content: flex-start; width: 360px; }",
    ".framer-3a31R.framer-v-40spk5.framer-8j8uad, .framer-3a31R.framer-v-1mr0m0h.framer-8j8uad, .framer-3a31R.framer-v-tbwwmr.framer-8j8uad, .framer-3a31R.framer-v-13fs2nx.framer-8j8uad, .framer-3a31R.framer-v-9b4gcl.framer-8j8uad, .framer-3a31R.framer-v-1y1hr25.framer-8j8uad, .framer-3a31R.framer-v-dqag1t.framer-8j8uad, .framer-3a31R.framer-v-qg1me1.framer-8j8uad { align-content: flex-start; align-items: flex-start; flex-direction: column; flex-wrap: wrap; height: min-content; width: 360px; }",
    ".framer-3a31R.framer-v-40spk5 .framer-8rl3rr, .framer-3a31R.framer-v-1mr0m0h .framer-8rl3rr { flex-wrap: wrap; order: 1; padding: 5px; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-40spk5.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-40spk5.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-40spk5.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-40spk5.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-1mr0m0h.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-1mr0m0h.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-1mr0m0h.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-1mr0m0h.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-tbwwmr.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-tbwwmr.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-tbwwmr.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-tbwwmr.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    ".framer-3a31R.framer-v-1eueqx2 .framer-10txcp1 { flex-wrap: wrap; justify-content: flex-start; width: 380px; }",
    ".framer-3a31R.framer-v-1eueqx2 .framer-xhjepc, .framer-3a31R.framer-v-jp4r9j .framer-xhjepc, .framer-3a31R.framer-v-1uo7shh .framer-xhjepc, .framer-3a31R.framer-v-1g1fi5i .framer-xhjepc { white-space: pre-wrap; width: 90%; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-13fs2nx.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-13fs2nx.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-13fs2nx.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-13fs2nx.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-9b4gcl.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-9b4gcl.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-9b4gcl.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-9b4gcl.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-1y1hr25.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-1y1hr25.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-1y1hr25.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-1y1hr25.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-dqag1t.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-dqag1t.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-dqag1t.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-dqag1t.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3a31R.framer-v-qg1me1.framer-8j8uad { gap: 0px; } .framer-3a31R.framer-v-qg1me1.framer-8j8uad > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-3a31R.framer-v-qg1me1.framer-8j8uad > :first-child { margin-top: 0px; } .framer-3a31R.framer-v-qg1me1.framer-8j8uad > :last-child { margin-bottom: 0px; } }",
    ...bn,
  ],
  Jr = Pe(Fs, Ts, "framer-3a31R"),
  me = Jr;
Jr.displayName = "FAQ1";
Jr.defaultProps = { height: 19, width: 457 };
re(Jr, {
  variant: {
    options: [
      "BKwLqH_zE",
      "BoAmTNc0w",
      "teeE4bxnk",
      "ZjnY8axSo",
      "oLWU66f_Y",
      "L9pnC7Mqq",
      "z8Qzi4bxT",
      "i910fuuFh",
      "mo9n4WItl",
      "dzoiQfp0i",
      "oRfnMJhDw",
      "sbrs0ZJeV",
      "xCAqksY5n",
      "Mfmt0Bv21",
      "FP6g4fcbu",
      "eEObayyKw",
      "VfzwjbOog",
      "FUCfrh1p1",
      "ID7n2nCMa",
      "GPFzPmBb_",
      "z5XZAgOF6",
      "UWpVSKTZo",
      "I9BLrRh_k",
      "JdVvHu_jX",
      "DVrGVZUqL",
      "dh52dh7fH",
      "CszMMXPH3",
      "IR3ioyR5Y",
      "oRgG15EWJ",
      "Foi06zcdP",
      "AejDn87jJ",
      "Sh_3e4fjX",
      "hB_XW0VLF",
      "But81vgyS",
      "rHWqHP5ZR",
      "sf1FKiuaU",
    ],
    optionTitles: [
      "Variant 1",
      "Variant 1 Opened",
      "Variant 2",
      "Variant 2 Opened",
      "Variant 3",
      "Variant 3 Opened",
      "Variant 4",
      "Variant 4 Opened",
      "Variant 5",
      "Variant 5 Opened",
      "Variant 6",
      "Variant 6 Opened",
      "Variant 7",
      "Variant 7 Opened",
      "Variant 8",
      "Variant 8 Opened",
      "Variant 9",
      "Variant 9 Opened",
      "Variant 1 Mobile",
      "Variant 1 Mobile Opened",
      "Variant 2 Mobile",
      "Variant 2 Mobile Opened",
      "Variant 3 Mobile",
      "Variant 3 Mobile Opened",
      "Variant 4 Mobile",
      "Variant 4 Mobile Opened",
      "Variant 5 Mobile",
      "Variant 5 Mobile Opened",
      "Variant 6 Mobile",
      "Variant 6 Mobile Opened",
      "Variant 7 Mobile",
      "Variant 7 Mobile Opened",
      "Variant 8 Mobile",
      "Variant 8 Mobile Opened",
      "Variant 9 Mobile",
      "Variant 9 Mobile Opened",
    ],
    title: "Variant",
    type: m.Enum,
  },
  Y2TuYCgeG: { title: "Hover", type: m.EventHandler },
  wREMxD8gI: { title: "Tap", type: m.EventHandler },
});
ke(
  Jr,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6V15vFP-KUEg.woff2",
          weight: "600",
        },
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrFJXUc1NECPY.woff2",
          weight: "400",
        },
      ],
    },
    ...Ha(yn),
  ],
  { supportsExplicitInterCodegen: !0 },
);
var Is = (r) => r,
  ma,
  wn = (r) => (
    ma ||
      (ma = Is(
        r.createElement("path", { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }),
        "Home",
      )),
    ma
  );
var Vs = "https://framer.com/m/material-icons/",
  wt = {
    AcUnit: 15,
    AccessAlarm: 15,
    AccessAlarms: 15,
    AccessTime: 15,
    AccessTimeFilled: 0,
    Accessibility: 7,
    AccessibilityNew: 0,
    Accessible: 15,
    AccessibleForward: 0,
    AccountBalance: 2,
    AccountBalanceWallet: 0,
    AccountBox: 15,
    AccountCircle: 7,
    AccountTree: 15,
    AdUnits: 15,
    Adb: 15,
    Add: 15,
    AddAPhoto: 15,
    AddAlarm: 15,
    AddAlert: 15,
    AddBox: 15,
    AddBusiness: 15,
    AddCircle: 15,
    AddCircleOutline: 0,
    AddComment: 15,
    AddIcCall: 15,
    AddLink: 15,
    AddLocation: 15,
    AddLocationAlt: 2,
    AddModerator: 15,
    AddPhotoAlternate: 0,
    AddReaction: 15,
    AddRoad: 15,
    AddShoppingCart: 2,
    AddTask: 15,
    AddToDrive: 15,
    AddToHomeScreen: 2,
    AddToPhotos: 15,
    AddToQueue: 15,
    Addchart: 15,
    Adjust: 15,
    AdminPanelSettings: 0,
    Agriculture: 15,
    Air: 15,
    AirlineSeatFlat: 2,
    AirplaneTicket: 2,
    AirplanemodeActive: 0,
    AirplanemodeInactive: 0,
    Airplay: 15,
    AirportShuttle: 2,
    Alarm: 15,
    AlarmAdd: 15,
    AlarmOff: 15,
    AlarmOn: 15,
    Album: 15,
    AlignHorizontalLeft: 0,
    AlignHorizontalRight: 0,
    AlignVerticalBottom: 0,
    AlignVerticalCenter: 0,
    AlignVerticalTop: 0,
    AllInbox: 15,
    AllInclusive: 15,
    AllOut: 15,
    AltRoute: 15,
    AlternateEmail: 2,
    Analytics: 15,
    Anchor: 15,
    Android: 15,
    Animation: 15,
    Announcement: 15,
    Aod: 15,
    Apartment: 15,
    Api: 15,
    AppBlocking: 15,
    AppRegistration: 2,
    AppSettingsAlt: 2,
    Apple: 0,
    Approval: 15,
    Apps: 15,
    Architecture: 15,
    Archive: 15,
    ArrowBack: 15,
    ArrowBackIos: 15,
    ArrowBackIosNew: 2,
    ArrowCircleDown: 2,
    ArrowCircleUp: 7,
    ArrowDownward: 7,
    ArrowDropDown: 7,
    ArrowDropDownCircle: 0,
    ArrowDropUp: 15,
    ArrowForward: 15,
    ArrowForwardIos: 2,
    ArrowLeft: 15,
    ArrowRight: 15,
    ArrowRightAlt: 7,
    ArrowUpward: 15,
    ArtTrack: 15,
    Article: 15,
    AspectRatio: 15,
    Assessment: 15,
    Assignment: 15,
    AssignmentInd: 7,
    AssignmentLate: 2,
    AssignmentReturn: 0,
    AssignmentReturned: 0,
    AssignmentTurnedIn: 0,
    Assistant: 15,
    AssistantDirection: 0,
    AssistantPhoto: 2,
    Atm: 15,
    AttachEmail: 15,
    AttachFile: 15,
    AttachMoney: 15,
    Attachment: 15,
    Attractions: 15,
    Attribution: 15,
    Audiotrack: 15,
    AutoAwesome: 15,
    AutoAwesomeMosaic: 0,
    AutoAwesomeMotion: 0,
    AutoDelete: 15,
    AutoFixHigh: 15,
    AutoFixNormal: 7,
    AutoFixOff: 15,
    AutoGraph: 15,
    AutoStories: 15,
    AutofpsSelect: 7,
    Autorenew: 15,
    AvTimer: 15,
    BabyChangingStation: 0,
    Backpack: 15,
    Backspace: 15,
    Backup: 15,
    BackupTable: 15,
    Badge: 15,
    BakeryDining: 15,
    Balcony: 15,
    Ballot: 15,
    BarChart: 15,
    BatchPrediction: 2,
    Bathroom: 15,
    Bathtub: 15,
    Battery20: 15,
    Battery30: 15,
    Battery50: 15,
    Battery60: 15,
    Battery80: 15,
    Battery90: 15,
    BatteryAlert: 15,
    BatteryCharging20: 0,
    BatteryCharging30: 0,
    BatteryCharging50: 0,
    BatteryCharging60: 0,
    BatteryCharging80: 0,
    BatteryCharging90: 0,
    BatteryChargingFull: 0,
    BatteryFull: 15,
    BatterySaver: 15,
    BatteryStd: 15,
    BatteryUnknown: 2,
    BeachAccess: 15,
    Bed: 15,
    BedroomBaby: 15,
    BedroomChild: 15,
    BedroomParent: 7,
    Bedtime: 15,
    Beenhere: 15,
    Bento: 15,
    BikeScooter: 15,
    Biotech: 15,
    Blender: 15,
    Block: 15,
    Bloodtype: 15,
    Bluetooth: 15,
    BluetoothAudio: 2,
    BluetoothConnected: 0,
    BluetoothDisabled: 0,
    BluetoothDrive: 2,
    BluetoothSearching: 0,
    BlurCircular: 15,
    BlurLinear: 15,
    BlurOff: 15,
    BlurOn: 15,
    Bolt: 15,
    Book: 15,
    BookOnline: 15,
    Bookmark: 15,
    BookmarkAdd: 15,
    BookmarkAdded: 7,
    BookmarkBorder: 2,
    BookmarkRemove: 2,
    Bookmarks: 15,
    BorderAll: 15,
    BorderBottom: 15,
    BorderClear: 15,
    BorderColor: 15,
    BorderHorizontal: 0,
    BorderInner: 15,
    BorderLeft: 15,
    BorderOuter: 15,
    BorderRight: 15,
    BorderStyle: 15,
    BorderTop: 15,
    BorderVertical: 2,
    BrandingWatermark: 0,
    BreakfastDining: 2,
    Brightness1: 15,
    Brightness2: 15,
    Brightness3: 15,
    Brightness4: 15,
    Brightness5: 15,
    Brightness6: 15,
    Brightness7: 15,
    BrightnessAuto: 2,
    BrightnessHigh: 2,
    BrightnessLow: 7,
    BrightnessMedium: 0,
    BrokenImage: 15,
    BrowserNotSupported: 0,
    BrunchDining: 15,
    Brush: 15,
    BubbleChart: 15,
    BugReport: 15,
    Build: 15,
    BuildCircle: 15,
    Bungalow: 15,
    BurstMode: 15,
    BusAlert: 15,
    Business: 15,
    BusinessCenter: 2,
    Cabin: 15,
    Cable: 15,
    Cached: 15,
    Cake: 15,
    Calculate: 15,
    CalendarToday: 7,
    CalendarViewDay: 2,
    CalendarViewMonth: 0,
    CalendarViewWeek: 0,
    Call: 15,
    CallEnd: 15,
    CallMade: 15,
    CallMerge: 15,
    CallMissed: 15,
    CallMissedOutgoing: 0,
    CallReceived: 15,
    CallSplit: 15,
    CallToAction: 15,
    Camera: 15,
    CameraAlt: 15,
    CameraEnhance: 7,
    CameraFront: 15,
    CameraIndoor: 15,
    CameraOutdoor: 7,
    CameraRear: 15,
    CameraRoll: 15,
    Cameraswitch: 15,
    Campaign: 15,
    Cancel: 15,
    CancelPresentation: 0,
    CancelScheduleSend: 0,
    CarRental: 15,
    CarRepair: 15,
    CardGiftcard: 15,
    CardMembership: 2,
    CardTravel: 15,
    Carpenter: 15,
    Cases: 15,
    Casino: 15,
    Cast: 15,
    CastConnected: 7,
    CastForEducation: 0,
    CatchingPokemon: 2,
    Category: 15,
    Celebration: 15,
    CellWifi: 15,
    CenterFocusStrong: 0,
    CenterFocusWeak: 2,
    Chair: 15,
    ChairAlt: 15,
    Chalet: 15,
    ChangeCircle: 15,
    ChangeHistory: 7,
    ChargingStation: 2,
    Chat: 15,
    ChatBubble: 15,
    ChatBubbleOutline: 0,
    Check: 15,
    CheckBox: 15,
    CheckBoxOutlineBlank: 0,
    CheckCircle: 15,
    CheckCircleOutline: 0,
    Checkroom: 15,
    ChevronLeft: 15,
    ChevronRight: 15,
    ChildCare: 15,
    ChildFriendly: 7,
    ChromeReaderMode: 0,
    Circle: 15,
    CircleNotifications: 0,
    Class: 15,
    CleanHands: 15,
    CleaningServices: 0,
    Clear: 15,
    ClearAll: 15,
    Close: 15,
    CloseFullscreen: 2,
    ClosedCaption: 7,
    ClosedCaptionOff: 0,
    Cloud: 15,
    CloudCircle: 15,
    CloudDone: 15,
    CloudDownload: 7,
    CloudOff: 15,
    CloudQueue: 15,
    CloudUpload: 15,
    Code: 15,
    CodeOff: 15,
    Coffee: 15,
    CoffeeMaker: 15,
    Collections: 15,
    CollectionsBookmark: 0,
    ColorLens: 15,
    Colorize: 15,
    Comment: 15,
    CommentBank: 15,
    Commute: 15,
    Compare: 15,
    CompareArrows: 7,
    CompassCalibration: 0,
    Compress: 15,
    Computer: 15,
    ConfirmationNumber: 0,
    ConnectedTv: 15,
    Construction: 15,
    ContactMail: 15,
    ContactPage: 15,
    ContactPhone: 15,
    ContactSupport: 2,
    Contactless: 15,
    Contacts: 15,
    ContentCopy: 15,
    ContentCut: 15,
    ContentPaste: 15,
    ContentPasteOff: 2,
    ControlCamera: 7,
    ControlPoint: 15,
    CopyAll: 15,
    Copyright: 15,
    Coronavirus: 15,
    CorporateFare: 7,
    Cottage: 15,
    Countertops: 15,
    Create: 15,
    CreateNewFolder: 2,
    CreditCard: 15,
    CreditCardOff: 7,
    CreditScore: 15,
    Crib: 15,
    Crop: 15,
    Crop169: 15,
    Crop32: 15,
    Crop54: 15,
    Crop75: 15,
    CropDin: 15,
    CropFree: 15,
    CropLandscape: 7,
    CropOriginal: 15,
    CropPortrait: 15,
    CropRotate: 15,
    CropSquare: 15,
    Dangerous: 15,
    DarkMode: 15,
    Dashboard: 15,
    DashboardCustomize: 0,
    DataSaverOff: 15,
    DataSaverOn: 15,
    DataUsage: 15,
    DateRange: 15,
    Deck: 15,
    Dehaze: 15,
    Delete: 15,
    DeleteForever: 7,
    DeleteOutline: 7,
    DeleteSweep: 15,
    DeliveryDining: 2,
    DepartureBoard: 2,
    Description: 15,
    DesignServices: 2,
    DesktopMac: 15,
    DesktopWindows: 2,
    Details: 15,
    DeveloperBoard: 2,
    DeveloperBoardOff: 0,
    DeveloperMode: 7,
    DeviceHub: 15,
    DeviceThermostat: 0,
    DeviceUnknown: 7,
    Devices: 15,
    DevicesOther: 15,
    DialerSip: 15,
    Dialpad: 15,
    Dining: 15,
    DinnerDining: 15,
    Directions: 15,
    DirectionsBike: 2,
    DirectionsBoat: 2,
    DirectionsBoatFilled: 0,
    DirectionsBus: 7,
    DirectionsBusFilled: 0,
    DirectionsCar: 7,
    DirectionsCarFilled: 0,
    DirectionsOff: 7,
    DirectionsRailway: 0,
    DirectionsRun: 7,
    DirectionsSubway: 0,
    DirectionsTransit: 0,
    DirectionsWalk: 2,
    DirtyLens: 15,
    DisabledByDefault: 0,
    DiscFull: 15,
    Dns: 15,
    DoDisturb: 15,
    DoDisturbAlt: 15,
    DoDisturbOff: 15,
    DoDisturbOn: 15,
    DoNotDisturb: 15,
    DoNotDisturbAlt: 2,
    DoNotDisturbOff: 2,
    DoNotDisturbOn: 2,
    DoNotStep: 15,
    DoNotTouch: 15,
    Dock: 15,
    DocumentScanner: 2,
    Domain: 15,
    DomainDisabled: 2,
    DomainVerification: 0,
    Done: 15,
    DoneAll: 15,
    DoneOutline: 15,
    DonutLarge: 15,
    DonutSmall: 15,
    DoorBack: 15,
    DoorFront: 15,
    DoorSliding: 15,
    Doorbell: 15,
    DoubleArrow: 15,
    DownhillSkiing: 2,
    Download: 15,
    DownloadDone: 15,
    DownloadForOffline: 0,
    Downloading: 15,
    Drafts: 15,
    DragHandle: 15,
    DragIndicator: 7,
    DriveEta: 15,
    DriveFileMove: 7,
    DriveFolderUpload: 0,
    Dry: 15,
    DryCleaning: 15,
    Duo: 15,
    Dvr: 15,
    DynamicFeed: 15,
    DynamicForm: 15,
    EMobiledata: 15,
    Earbuds: 15,
    EarbudsBattery: 2,
    East: 15,
    Eco: 15,
    EdgesensorHigh: 2,
    EdgesensorLow: 7,
    Edit: 15,
    EditAttributes: 2,
    EditLocation: 15,
    EditLocationAlt: 2,
    EditNotifications: 0,
    EditOff: 15,
    EditRoad: 15,
    EightK: 15,
    EightKPlus: 15,
    EightMp: 15,
    EightteenMp: 15,
    Eject: 15,
    Elderly: 15,
    ElectricBike: 15,
    ElectricCar: 15,
    ElectricMoped: 7,
    ElectricRickshaw: 0,
    ElectricScooter: 2,
    ElectricalServices: 0,
    Elevator: 15,
    ElevenMp: 15,
    Email: 15,
    EmojiEmotions: 7,
    EmojiEvents: 15,
    EmojiFlags: 15,
    EmojiFoodBeverage: 0,
    EmojiNature: 15,
    EmojiObjects: 15,
    EmojiPeople: 15,
    EmojiSymbols: 15,
    EmojiTransportation: 0,
    Engineering: 15,
    EnhancedEncryption: 0,
    Equalizer: 15,
    Error: 15,
    ErrorOutline: 15,
    Escalator: 15,
    EscalatorWarning: 0,
    Euro: 15,
    EuroSymbol: 15,
    EvStation: 15,
    Event: 15,
    EventAvailable: 2,
    EventBusy: 15,
    EventNote: 15,
    EventSeat: 15,
    ExitToApp: 15,
    Expand: 15,
    ExpandLess: 15,
    ExpandMore: 15,
    Explicit: 15,
    Explore: 15,
    ExploreOff: 15,
    Exposure: 15,
    Extension: 15,
    ExtensionOff: 15,
    Face: 15,
    FaceRetouchingOff: 0,
    Facebook: 15,
    FactCheck: 15,
    FamilyRestroom: 2,
    FastForward: 15,
    FastRewind: 15,
    Fastfood: 15,
    Favorite: 15,
    FavoriteBorder: 2,
    FeaturedPlayList: 0,
    FeaturedVideo: 7,
    Feed: 15,
    Feedback: 15,
    Female: 15,
    Fence: 15,
    Festival: 15,
    FiberDvr: 15,
    FiberManualRecord: 0,
    FiberNew: 15,
    FiberPin: 15,
    FiberSmartRecord: 0,
    FileCopy: 15,
    FileDownload: 15,
    FileDownloadDone: 0,
    FileDownloadOff: 2,
    FilePresent: 15,
    FileUpload: 15,
    Filter: 15,
    Filter1: 15,
    Filter2: 15,
    Filter3: 15,
    Filter4: 15,
    Filter5: 15,
    Filter6: 15,
    Filter7: 15,
    Filter8: 15,
    Filter9: 15,
    Filter9Plus: 15,
    FilterAlt: 15,
    FilterBAndW: 15,
    FilterCenterFocus: 0,
    FilterDrama: 15,
    FilterFrames: 15,
    FilterHdr: 15,
    FilterList: 15,
    FilterNone: 15,
    FilterTiltShift: 2,
    FilterVintage: 7,
    FindInPage: 15,
    FindReplace: 15,
    Fingerprint: 15,
    FireExtinguisher: 0,
    Fireplace: 15,
    FirstPage: 15,
    FitScreen: 15,
    FitnessCenter: 7,
    FiveG: 15,
    FiveK: 15,
    FiveKPlus: 15,
    FiveMp: 15,
    FivteenMp: 15,
    Flag: 15,
    Flaky: 15,
    Flare: 15,
    FlashAuto: 15,
    FlashOff: 15,
    FlashOn: 15,
    FlashlightOff: 7,
    FlashlightOn: 15,
    Flatware: 15,
    Flight: 15,
    FlightLand: 15,
    FlightTakeoff: 7,
    Flip: 15,
    FlipCameraAndroid: 0,
    FlipCameraIos: 7,
    FlipToBack: 15,
    FlipToFront: 15,
    Flourescent: 15,
    FlutterDash: 15,
    FmdBad: 15,
    FmdGood: 15,
    Folder: 15,
    FolderOpen: 15,
    FolderShared: 15,
    FolderSpecial: 7,
    FollowTheSigns: 2,
    FontDownload: 15,
    FontDownloadOff: 2,
    FoodBank: 15,
    FormatAlignCenter: 0,
    FormatAlignJustify: 0,
    FormatAlignLeft: 2,
    FormatAlignRight: 0,
    FormatBold: 15,
    FormatClear: 15,
    FormatColorFill: 2,
    FormatColorReset: 0,
    FormatColorText: 2,
    FormatIndentDecrease: 0,
    FormatIndentIncrease: 0,
    FormatItalic: 15,
    FormatLineSpacing: 0,
    FormatListBulleted: 0,
    FormatListNumbered: 0,
    FormatPaint: 15,
    FormatQuote: 15,
    FormatShapes: 15,
    FormatSize: 15,
    FormatStrikethrough: 0,
    FormatUnderlined: 0,
    Forum: 15,
    Forward: 15,
    Forward10: 15,
    Forward30: 15,
    Forward5: 15,
    ForwardToInbox: 2,
    Foundation: 15,
    FourGMobiledata: 2,
    FourGPlusMobiledata: 0,
    FourK: 15,
    FourKPlus: 15,
    FourMp: 15,
    FourteenMp: 15,
    FreeBreakfast: 7,
    Fullscreen: 15,
    FullscreenExit: 2,
    Functions: 15,
    GMobiledata: 15,
    GTranslate: 15,
    Gamepad: 15,
    Games: 15,
    Garage: 15,
    Gavel: 15,
    Gesture: 15,
    GetApp: 15,
    Gif: 15,
    GitHub: 0,
    Gite: 15,
    GolfCourse: 15,
    Google: 0,
    GppBad: 15,
    GppGood: 15,
    GppMaybe: 15,
    GpsFixed: 15,
    GpsNotFixed: 15,
    GpsOff: 15,
    Grade: 15,
    Gradient: 15,
    Grading: 15,
    Grain: 15,
    GraphicEq: 15,
    Grass: 15,
    Grid3x3: 15,
    Grid4x4: 15,
    GridGoldenratio: 2,
    GridOff: 15,
    GridOn: 15,
    GridView: 15,
    Group: 15,
    GroupAdd: 15,
    GroupWork: 15,
    Groups: 15,
    HMobiledata: 15,
    HPlusMobiledata: 2,
    Hail: 15,
    Handyman: 15,
    Hardware: 15,
    Hd: 15,
    HdrAuto: 15,
    HdrAutoSelect: 7,
    HdrEnhancedSelect: 0,
    HdrOff: 15,
    HdrOffSelect: 15,
    HdrOn: 15,
    HdrOnSelect: 15,
    HdrPlus: 15,
    HdrStrong: 15,
    HdrWeak: 15,
    Headphones: 15,
    HeadphonesBattery: 0,
    Headset: 15,
    HeadsetMic: 15,
    HeadsetOff: 15,
    Healing: 15,
    HealthAndSafety: 2,
    Hearing: 15,
    HearingDisabled: 2,
    Height: 15,
    Help: 15,
    HelpCenter: 15,
    HelpOutline: 15,
    Hevc: 15,
    HideImage: 15,
    HideSource: 15,
    HighQuality: 15,
    Highlight: 15,
    HighlightAlt: 15,
    HighlightOff: 15,
    Hiking: 15,
    History: 15,
    HistoryEdu: 15,
    HistoryToggleOff: 0,
    HolidayVillage: 2,
    Home: 15,
    HomeMax: 15,
    HomeMini: 15,
    HomeRepairService: 0,
    HomeWork: 15,
    HorizontalRule: 2,
    HorizontalSplit: 2,
    HotTub: 15,
    Hotel: 15,
    HourglassBottom: 2,
    HourglassDisabled: 0,
    HourglassEmpty: 2,
    HourglassFull: 7,
    HourglassTop: 15,
    House: 15,
    HouseSiding: 15,
    Houseboat: 15,
    HowToReg: 15,
    HowToVote: 15,
    Http: 15,
    Https: 15,
    Hvac: 15,
    IceSkating: 15,
    Icecream: 15,
    Image: 15,
    ImageAspectRatio: 0,
    ImageNotSupported: 0,
    ImageSearch: 15,
    ImagesearchRoller: 0,
    ImportContacts: 2,
    ImportExport: 15,
    ImportantDevices: 0,
    Inbox: 15,
    Info: 15,
    Input: 15,
    InsertChart: 15,
    InsertComment: 7,
    InsertDriveFile: 2,
    InsertEmoticon: 2,
    InsertInvitation: 0,
    InsertLink: 15,
    InsertPhoto: 15,
    Insights: 15,
    Instagram: 0,
    Inventory: 15,
    Inventory2: 15,
    InvertColors: 15,
    InvertColorsOff: 2,
    IosShare: 15,
    Iron: 15,
    Iso: 15,
    Kayaking: 15,
    Keyboard: 15,
    KeyboardAlt: 15,
    KeyboardArrowDown: 0,
    KeyboardArrowLeft: 0,
    KeyboardArrowRight: 0,
    KeyboardArrowUp: 2,
    KeyboardBackspace: 0,
    KeyboardCapslock: 0,
    KeyboardHide: 15,
    KeyboardReturn: 2,
    KeyboardTab: 15,
    KeyboardVoice: 7,
    KingBed: 15,
    Kitchen: 15,
    Kitesurfing: 15,
    Label: 15,
    LabelImportant: 2,
    LabelOff: 15,
    Landscape: 15,
    Language: 15,
    Laptop: 15,
    LaptopChromebook: 0,
    LaptopMac: 15,
    LaptopWindows: 7,
    LastPage: 15,
    Launch: 15,
    Layers: 15,
    LayersClear: 15,
    Leaderboard: 15,
    LeakAdd: 15,
    LeakRemove: 15,
    LegendToggle: 15,
    Lens: 15,
    LensBlur: 15,
    LibraryAdd: 15,
    LibraryAddCheck: 2,
    LibraryBooks: 15,
    LibraryMusic: 15,
    Light: 15,
    LightMode: 15,
    Lightbulb: 15,
    LineStyle: 15,
    LineWeight: 15,
    LinearScale: 15,
    Link: 15,
    LinkOff: 15,
    LinkedCamera: 15,
    LinkedIn: 0,
    Liquor: 15,
    List: 15,
    ListAlt: 15,
    LiveHelp: 15,
    LiveTv: 15,
    Living: 15,
    LocalActivity: 7,
    LocalAirport: 15,
    LocalAtm: 15,
    LocalBar: 15,
    LocalCafe: 15,
    LocalCarWash: 15,
    LocalDining: 15,
    LocalDrink: 15,
    LocalFireDepartment: 0,
    LocalFlorist: 15,
    LocalGasStation: 2,
    LocalGroceryStore: 0,
    LocalHospital: 7,
    LocalHotel: 15,
    LocalLaundryService: 0,
    LocalLibrary: 15,
    LocalMall: 15,
    LocalMovies: 15,
    LocalOffer: 15,
    LocalParking: 15,
    LocalPharmacy: 7,
    LocalPhone: 15,
    LocalPizza: 15,
    LocalPlay: 15,
    LocalPolice: 15,
    LocalPostOffice: 2,
    LocalPrintshop: 2,
    LocalSee: 15,
    LocalShipping: 7,
    LocalTaxi: 15,
    LocationCity: 15,
    LocationDisabled: 0,
    LocationOff: 15,
    LocationOn: 15,
    LocationSearching: 0,
    Lock: 15,
    LockClock: 15,
    LockOpen: 15,
    Login: 15,
    Logout: 15,
    Looks: 15,
    Looks3: 15,
    Looks4: 15,
    Looks5: 15,
    Looks6: 15,
    LooksOne: 15,
    LooksTwo: 15,
    Loop: 15,
    Loupe: 15,
    LowPriority: 15,
    Loyalty: 15,
    LteMobiledata: 7,
    LtePlusMobiledata: 0,
    Luggage: 15,
    LunchDining: 15,
    Mail: 15,
    MailOutline: 15,
    Male: 15,
    ManageAccounts: 2,
    ManageSearch: 15,
    Map: 15,
    MapsHomeWork: 15,
    MapsUgc: 15,
    Margin: 15,
    MarkAsUnread: 15,
    MarkChatRead: 15,
    MarkChatUnread: 2,
    MarkEmailRead: 7,
    MarkEmailUnread: 2,
    Markunread: 15,
    MarkunreadMailbox: 0,
    Masks: 15,
    Maximize: 15,
    MediaBluetoothOff: 0,
    MediaBluetoothOn: 0,
    Mediation: 15,
    MedicalServices: 2,
    Medication: 15,
    MeetingRoom: 15,
    Memory: 15,
    Menu: 15,
    MenuBook: 15,
    MenuOpen: 15,
    MergeType: 15,
    Message: 15,
    Mic: 15,
    MicExternalOff: 2,
    MicExternalOn: 7,
    MicNone: 15,
    MicOff: 15,
    Microwave: 15,
    MilitaryTech: 15,
    Minimize: 15,
    MissedVideoCall: 2,
    Mms: 15,
    MobileFriendly: 2,
    MobileOff: 15,
    MobileScreenShare: 0,
    MobiledataOff: 7,
    Mode: 15,
    ModeComment: 15,
    ModeEdit: 15,
    ModeEditOutline: 2,
    ModeNight: 15,
    ModeStandby: 15,
    ModelTraining: 7,
    MonetizationOn: 2,
    Money: 15,
    MoneyOff: 15,
    MoneyOffCsred: 7,
    Monitor: 15,
    MonitorWeight: 7,
    MonochromePhotos: 0,
    Mood: 15,
    MoodBad: 15,
    Moped: 15,
    More: 15,
    MoreHoriz: 15,
    MoreTime: 15,
    MoreVert: 15,
    MotionPhotosAuto: 0,
    MotionPhotosOff: 2,
    Mouse: 15,
    MoveToInbox: 15,
    Movie: 15,
    MovieCreation: 7,
    MovieFilter: 15,
    Moving: 15,
    Mp: 15,
    MultilineChart: 2,
    MultipleStop: 15,
    Museum: 15,
    MusicNote: 15,
    MusicOff: 15,
    MusicVideo: 15,
    MyLocation: 15,
    Nat: 15,
    Nature: 15,
    NaturePeople: 15,
    NavigateBefore: 2,
    NavigateNext: 15,
    Navigation: 15,
    NearMe: 15,
    NearMeDisabled: 2,
    NearbyError: 15,
    NearbyOff: 15,
    NetworkCell: 15,
    NetworkCheck: 15,
    NetworkLocked: 7,
    NetworkWifi: 15,
    NewReleases: 15,
    NextPlan: 15,
    NextWeek: 15,
    Nfc: 15,
    NightShelter: 15,
    Nightlife: 15,
    Nightlight: 15,
    NightlightRound: 2,
    NightsStay: 15,
    NineK: 15,
    NineKPlus: 15,
    NineMp: 15,
    NineteenMp: 15,
    NoAccounts: 15,
    NoBackpack: 15,
    NoCell: 15,
    NoDrinks: 15,
    NoEncryption: 15,
    NoFlash: 15,
    NoFood: 15,
    NoLuggage: 15,
    NoMeals: 15,
    NoMeetingRoom: 7,
    NoPhotography: 7,
    NoSim: 15,
    NoStroller: 15,
    NoTransfer: 15,
    NordicWalking: 7,
    North: 15,
    NorthEast: 15,
    NorthWest: 15,
    NotAccessible: 7,
    NotInterested: 7,
    NotListedLocation: 0,
    NotStarted: 15,
    Note: 15,
    NoteAdd: 15,
    NoteAlt: 15,
    Notes: 15,
    NotificationAdd: 2,
    Notifications: 7,
    NotificationsActive: 0,
    NotificationsNone: 0,
    NotificationsOff: 0,
    NotificationsPaused: 0,
    OfflineBolt: 15,
    OfflinePin: 15,
    OfflineShare: 15,
    OndemandVideo: 7,
    OneK: 15,
    OneKPlus: 15,
    OneKk: 15,
    OnlinePrediction: 0,
    Opacity: 15,
    OpenInBrowser: 7,
    OpenInFull: 15,
    OpenInNew: 15,
    OpenInNewOff: 15,
    OpenWith: 15,
    OtherHouses: 15,
    Outbound: 15,
    Outbox: 15,
    OutdoorGrill: 15,
    Outlet: 15,
    Padding: 15,
    Pages: 15,
    Pageview: 15,
    Paid: 15,
    Palette: 15,
    PanTool: 15,
    Panorama: 15,
    PanoramaFishEye: 2,
    PanoramaHorizontal: 0,
    PanoramaPhotosphere: 0,
    PanoramaVertical: 0,
    PanoramaWideAngle: 0,
    Paragliding: 15,
    Park: 15,
    PartyMode: 15,
    Password: 15,
    Pattern: 15,
    Pause: 15,
    PauseCircle: 15,
    PauseCircleFilled: 0,
    PauseCircleOutline: 0,
    PausePresentation: 0,
    Payment: 15,
    Payments: 15,
    PedalBike: 15,
    Pending: 15,
    PendingActions: 2,
    People: 15,
    PeopleAlt: 15,
    PeopleOutline: 7,
    PermCameraMic: 7,
    PermContactCalendar: 0,
    PermDataSetting: 2,
    PermIdentity: 15,
    PermMedia: 15,
    PermPhoneMsg: 15,
    PermScanWifi: 15,
    Person: 15,
    PersonAdd: 15,
    PersonAddAlt: 15,
    PersonAddAlt1: 7,
    PersonAddDisabled: 0,
    PersonOff: 15,
    PersonOutline: 7,
    PersonPin: 15,
    PersonPinCircle: 2,
    PersonRemove: 15,
    PersonRemoveAlt1: 0,
    PersonSearch: 15,
    PersonalVideo: 7,
    PestControl: 15,
    PestControlRodent: 0,
    Pets: 15,
    Phone: 15,
    PhoneAndroid: 15,
    PhoneCallback: 7,
    PhoneDisabled: 7,
    PhoneEnabled: 15,
    PhoneForwarded: 2,
    PhoneInTalk: 15,
    PhoneIphone: 15,
    PhoneLocked: 15,
    PhoneMissed: 15,
    PhonePaused: 15,
    Phonelink: 15,
    PhonelinkErase: 2,
    PhonelinkLock: 7,
    PhonelinkOff: 15,
    PhonelinkRing: 7,
    PhonelinkSetup: 2,
    Photo: 15,
    PhotoAlbum: 15,
    PhotoCamera: 15,
    PhotoCameraBack: 2,
    PhotoCameraFront: 0,
    PhotoFilter: 15,
    PhotoLibrary: 15,
    PhotoSizeSelectLarge: 0,
    PhotoSizeSelectSmall: 0,
    Piano: 15,
    PianoOff: 15,
    PictureAsPdf: 15,
    PictureInPicture: 0,
    PictureInPictureAlt: 0,
    PieChart: 15,
    PieChartOutline: 2,
    Pin: 15,
    PinDrop: 15,
    Pinterest: 0,
    PivotTableChart: 2,
    Place: 15,
    Plagiarism: 15,
    PlayArrow: 15,
    PlayCircle: 15,
    PlayCircleFilled: 0,
    PlayCircleOutline: 0,
    PlayDisabled: 15,
    PlayForWork: 15,
    PlayLesson: 15,
    PlaylistAdd: 15,
    PlaylistAddCheck: 0,
    PlaylistPlay: 15,
    Plumbing: 15,
    PlusOne: 15,
    Podcasts: 15,
    PointOfSale: 15,
    Policy: 15,
    Poll: 15,
    Pool: 15,
    PortableWifiOff: 2,
    Portrait: 15,
    PostAdd: 15,
    Power: 15,
    PowerInput: 15,
    PowerOff: 15,
    PowerSettingsNew: 0,
    PregnantWoman: 7,
    PresentToAll: 15,
    Preview: 15,
    PriceChange: 15,
    PriceCheck: 15,
    Print: 15,
    PrintDisabled: 7,
    PriorityHigh: 15,
    PrivacyTip: 15,
    Psychology: 15,
    Public: 15,
    PublicOff: 15,
    Publish: 15,
    PublishedWithChanges: 0,
    PushPin: 15,
    QrCode: 15,
    QrCode2: 15,
    QrCodeScanner: 7,
    QueryBuilder: 15,
    QueryStats: 15,
    QuestionAnswer: 2,
    Queue: 15,
    QueueMusic: 15,
    QueuePlayNext: 7,
    Quickreply: 15,
    Quiz: 15,
    RMobiledata: 15,
    Radar: 15,
    Radio: 15,
    RadioButtonChecked: 0,
    RadioButtonUnchecked: 0,
    RailwayAlert: 15,
    RamenDining: 15,
    RateReview: 15,
    RawOff: 15,
    RawOn: 15,
    ReadMore: 15,
    Receipt: 15,
    ReceiptLong: 15,
    RecentActors: 15,
    Recommend: 15,
    RecordVoiceOver: 2,
    Reddit: 0,
    Redeem: 15,
    Redo: 15,
    ReduceCapacity: 2,
    Refresh: 15,
    RememberMe: 15,
    Remove: 15,
    RemoveCircle: 15,
    RemoveCircleOutline: 0,
    RemoveDone: 15,
    RemoveFromQueue: 2,
    RemoveModerator: 2,
    RemoveRedEye: 15,
    RemoveShoppingCart: 0,
    Reorder: 15,
    Repeat: 15,
    RepeatOn: 15,
    RepeatOne: 15,
    RepeatOneOn: 15,
    Replay: 15,
    Replay10: 15,
    Replay30: 15,
    Replay5: 15,
    ReplayCircleFilled: 0,
    Reply: 15,
    ReplyAll: 15,
    Report: 15,
    ReportGmailerrorred: 0,
    ReportOff: 15,
    ReportProblem: 7,
    RequestPage: 15,
    RequestQuote: 15,
    ResetTv: 15,
    RestartAlt: 15,
    Restaurant: 15,
    RestaurantMenu: 2,
    Restore: 15,
    RestoreFromTrash: 0,
    RestorePage: 15,
    Reviews: 15,
    RiceBowl: 15,
    RingVolume: 15,
    Roofing: 15,
    Room: 15,
    RoomPreferences: 2,
    RoomService: 15,
    Rotate90DegreesCcw: 0,
    RotateLeft: 15,
    RotateRight: 15,
    Router: 15,
    Rowing: 15,
    RssFeed: 15,
    Rsvp: 15,
    Rtt: 15,
    Rule: 15,
    RuleFolder: 15,
    RunCircle: 15,
    RunningWithErrors: 0,
    RvHookup: 15,
    SafetyDivider: 7,
    Sailing: 15,
    Sanitizer: 15,
    Satellite: 15,
    Save: 15,
    SaveAlt: 15,
    SavedSearch: 15,
    Savings: 15,
    Scanner: 15,
    ScatterPlot: 15,
    Schedule: 15,
    ScheduleSend: 15,
    Schema: 15,
    School: 15,
    Science: 15,
    Score: 15,
    ScreenLockLandscape: 0,
    ScreenLockPortrait: 0,
    ScreenLockRotation: 0,
    ScreenRotation: 2,
    ScreenSearchDesktop: 0,
    ScreenShare: 15,
    Screenshot: 15,
    Sd: 15,
    SdCard: 15,
    SdCardAlert: 15,
    SdStorage: 15,
    Search: 15,
    SearchOff: 15,
    Security: 15,
    SecurityUpdate: 2,
    SecurityUpdateGood: 0,
    Segment: 15,
    SelectAll: 15,
    SelfImprovement: 2,
    Sell: 15,
    Send: 15,
    SendAndArchive: 2,
    SendToMobile: 15,
    SensorDoor: 15,
    SensorWindow: 15,
    Sensors: 15,
    SensorsOff: 15,
    SentimentNeutral: 0,
    SentimentSatisfied: 0,
    SetMeal: 15,
    Settings: 15,
    SettingsApplications: 0,
    SettingsBluetooth: 0,
    SettingsBrightness: 0,
    SettingsCell: 15,
    SettingsEthernet: 0,
    SettingsInputAntenna: 0,
    SettingsInputHdmi: 0,
    SettingsInputSvideo: 0,
    SettingsOverscan: 0,
    SettingsPhone: 7,
    SettingsPower: 7,
    SettingsRemote: 2,
    SettingsSuggest: 2,
    SettingsVoice: 7,
    SevenK: 15,
    SevenKPlus: 15,
    SevenMp: 15,
    SeventeenMp: 15,
    Share: 15,
    ShareLocation: 7,
    Shield: 15,
    Shop: 15,
    Shop2: 15,
    ShopTwo: 15,
    ShoppingBag: 15,
    ShoppingBasket: 2,
    ShoppingCart: 15,
    ShortText: 15,
    Shortcut: 15,
    ShowChart: 15,
    Shower: 15,
    Shuffle: 15,
    ShuffleOn: 15,
    ShutterSpeed: 15,
    Sick: 15,
    SignalCellular0Bar: 0,
    SignalCellular1Bar: 0,
    SignalCellular2Bar: 0,
    SignalCellular3Bar: 0,
    SignalCellular4Bar: 0,
    SignalCellularAlt: 0,
    SignalCellularNoSim: 0,
    SignalCellularNodata: 0,
    SignalCellularNull: 0,
    SignalCellularOff: 0,
    SignalWifi0Bar: 2,
    SignalWifi1Bar: 2,
    SignalWifi1BarLock: 0,
    SignalWifi2Bar: 2,
    SignalWifi2BarLock: 0,
    SignalWifi3Bar: 2,
    SignalWifi3BarLock: 0,
    SignalWifi4Bar: 2,
    SignalWifi4BarLock: 0,
    SignalWifiBad: 7,
    SignalWifiOff: 7,
    SimCard: 15,
    SimCardAlert: 15,
    SimCardDownload: 2,
    SingleBed: 15,
    Sip: 15,
    SixK: 15,
    SixKPlus: 15,
    SixMp: 15,
    SixteenMp: 15,
    SixtyFps: 15,
    SixtyFpsSelect: 2,
    Skateboarding: 7,
    SkipNext: 15,
    SkipPrevious: 15,
    Sledding: 15,
    Slideshow: 15,
    SlowMotionVideo: 2,
    SmartButton: 15,
    SmartDisplay: 15,
    SmartScreen: 15,
    SmartToy: 15,
    Smartphone: 15,
    SmokeFree: 15,
    SmokingRooms: 15,
    Sms: 15,
    SmsFailed: 15,
    SnippetFolder: 7,
    Snooze: 15,
    Snowboarding: 15,
    Snowmobile: 15,
    Snowshoeing: 15,
    Soap: 15,
    SocialDistance: 2,
    Sort: 15,
    SortByAlpha: 15,
    Source: 15,
    South: 15,
    SouthEast: 15,
    SouthWest: 15,
    Spa: 15,
    SpaceBar: 15,
    Speaker: 15,
    SpeakerGroup: 15,
    SpeakerNotes: 15,
    SpeakerNotesOff: 2,
    SpeakerPhone: 15,
    Speed: 15,
    Spellcheck: 15,
    Splitscreen: 15,
    Sports: 15,
    SportsBar: 15,
    SportsBaseball: 2,
    SportsBasketball: 0,
    SportsCricket: 7,
    SportsEsports: 7,
    SportsFootball: 2,
    SportsGolf: 15,
    SportsHandball: 2,
    SportsHockey: 15,
    SportsKabaddi: 7,
    SportsMma: 15,
    SportsMotorsports: 0,
    SportsRugby: 15,
    SportsScore: 15,
    SportsSoccer: 15,
    SportsTennis: 15,
    SportsVolleyball: 0,
    SquareFoot: 15,
    StackedBarChart: 2,
    StackedLineChart: 0,
    Stairs: 15,
    Star: 15,
    StarBorder: 15,
    StarBorderPurple500: 0,
    StarHalf: 15,
    StarOutline: 15,
    StarPurple500: 7,
    StarRate: 15,
    Stars: 15,
    StayCurrentLandscape: 0,
    StayCurrentPortrait: 0,
    StayPrimaryLandscape: 0,
    StayPrimaryPortrait: 0,
    StickyNote2: 15,
    Stop: 15,
    StopCircle: 15,
    StopScreenShare: 2,
    Storage: 15,
    Store: 15,
    StoreMallDirectory: 0,
    Storefront: 15,
    Storm: 15,
    Straighten: 15,
    Stream: 15,
    Streetview: 15,
    StrikethroughS: 2,
    Stroller: 15,
    Style: 15,
    Subject: 15,
    Subscript: 15,
    Subscriptions: 7,
    Subtitles: 15,
    SubtitlesOff: 15,
    Subway: 15,
    Summarize: 15,
    Superscript: 15,
    SupervisedUserCircle: 0,
    SupervisorAccount: 0,
    Support: 15,
    SupportAgent: 15,
    Surfing: 15,
    SurroundSound: 7,
    SwapCalls: 15,
    SwapHoriz: 15,
    SwapHorizontalCircle: 0,
    SwapVert: 15,
    SwapVerticalCircle: 0,
    Swipe: 15,
    SwitchAccount: 7,
    SwitchCamera: 15,
    SwitchLeft: 15,
    SwitchRight: 15,
    SwitchVideo: 15,
    Sync: 15,
    SyncAlt: 15,
    SyncDisabled: 15,
    SyncProblem: 15,
    SystemSecurityUpdate: 0,
    SystemUpdate: 15,
    SystemUpdateAlt: 2,
    Tab: 15,
    TabUnselected: 7,
    TableChart: 15,
    TableRows: 15,
    TableView: 15,
    Tablet: 15,
    TabletAndroid: 7,
    TabletMac: 15,
    Tag: 15,
    TagFaces: 15,
    TakeoutDining: 7,
    TapAndPlay: 15,
    Tapas: 15,
    Task: 15,
    TaskAlt: 15,
    TaxiAlert: 15,
    Telegram: 0,
    TenMp: 15,
    Terrain: 15,
    TextFields: 15,
    TextFormat: 15,
    TextRotateUp: 15,
    TextRotateVertical: 0,
    TextRotationAngleup: 0,
    TextRotationDown: 0,
    TextRotationNone: 0,
    TextSnippet: 15,
    Textsms: 15,
    Texture: 15,
    TheaterComedy: 7,
    Theaters: 15,
    Thermostat: 15,
    ThermostatAuto: 2,
    ThirteenMp: 15,
    ThirtyFps: 15,
    ThirtyFpsSelect: 2,
    ThreeDRotation: 2,
    ThreeGMobiledata: 0,
    ThreeK: 15,
    ThreeKPlus: 15,
    ThreeMp: 15,
    ThreeP: 15,
    ThreeSixty: 15,
    ThumbDown: 15,
    ThumbDownAlt: 15,
    ThumbDownOffAlt: 2,
    ThumbUp: 15,
    ThumbUpAlt: 15,
    ThumbUpOffAlt: 7,
    ThumbsUpDown: 15,
    TimeToLeave: 15,
    Timelapse: 15,
    Timeline: 15,
    Timer: 15,
    Timer10: 15,
    Timer10Select: 7,
    Timer3: 15,
    Timer3Select: 15,
    TimerOff: 15,
    TimesOneMobiledata: 0,
    Title: 15,
    Toc: 15,
    Today: 15,
    ToggleOff: 15,
    ToggleOn: 15,
    Toll: 15,
    Tonality: 15,
    Topic: 15,
    TouchApp: 15,
    Tour: 15,
    Toys: 15,
    TrackChanges: 15,
    Traffic: 15,
    Train: 15,
    Tram: 15,
    Transform: 15,
    Transgender: 15,
    TransitEnterexit: 0,
    Translate: 15,
    TravelExplore: 7,
    TrendingDown: 15,
    TrendingFlat: 15,
    TrendingUp: 15,
    TripOrigin: 15,
    Try: 15,
    Tty: 15,
    Tune: 15,
    Tungsten: 15,
    TurnedIn: 15,
    TurnedInNot: 15,
    Tv: 15,
    TvOff: 15,
    TwelveMp: 15,
    TwentyFourMp: 15,
    TwentyOneMp: 15,
    TwentyThreeMp: 7,
    TwentyTwoMp: 15,
    TwentyZeroMp: 15,
    Twitter: 0,
    TwoK: 15,
    TwoKPlus: 15,
    TwoMp: 15,
    TwoWheeler: 15,
    Umbrella: 15,
    Unarchive: 15,
    Undo: 15,
    UnfoldLess: 15,
    UnfoldMore: 15,
    Unpublished: 15,
    Unsubscribe: 15,
    Upcoming: 15,
    Update: 15,
    UpdateDisabled: 2,
    Upgrade: 15,
    Upload: 15,
    UploadFile: 15,
    Usb: 15,
    UsbOff: 15,
    Verified: 15,
    VerifiedUser: 15,
    VerticalAlignBottom: 0,
    VerticalAlignCenter: 0,
    VerticalAlignTop: 0,
    VerticalSplit: 7,
    Vibration: 15,
    VideoCall: 15,
    VideoCameraBack: 2,
    VideoCameraFront: 0,
    VideoLabel: 15,
    VideoLibrary: 15,
    VideoSettings: 7,
    VideoStable: 15,
    Videocam: 15,
    VideocamOff: 15,
    VideogameAsset: 2,
    VideogameAssetOff: 0,
    ViewAgenda: 15,
    ViewArray: 15,
    ViewCarousel: 15,
    ViewColumn: 15,
    ViewComfy: 15,
    ViewCompact: 15,
    ViewDay: 15,
    ViewHeadline: 15,
    ViewInAr: 15,
    ViewList: 15,
    ViewModule: 15,
    ViewQuilt: 15,
    ViewSidebar: 15,
    ViewStream: 15,
    ViewWeek: 15,
    Vignette: 15,
    Villa: 15,
    Visibility: 15,
    VisibilityOff: 7,
    VoiceChat: 15,
    VoiceOverOff: 15,
    Voicemail: 15,
    VolumeDown: 15,
    VolumeMute: 15,
    VolumeOff: 15,
    VolumeUp: 15,
    VolunteerActivism: 0,
    VpnKey: 15,
    VpnLock: 15,
    Vrpano: 15,
    Wallpaper: 15,
    Warning: 15,
    WarningAmber: 15,
    Wash: 15,
    Watch: 15,
    WatchLater: 15,
    Water: 15,
    WaterDamage: 15,
    WaterfallChart: 2,
    Waves: 15,
    WbAuto: 15,
    WbCloudy: 15,
    WbIncandescent: 2,
    WbIridescent: 15,
    WbShade: 15,
    WbSunny: 15,
    WbTwilight: 15,
    Wc: 15,
    Web: 15,
    WebAsset: 15,
    WebAssetOff: 15,
    Weekend: 15,
    West: 15,
    WhatsApp: 0,
    Whatshot: 15,
    WheelchairPickup: 0,
    WhereToVote: 15,
    Widgets: 15,
    Wifi: 15,
    WifiCalling: 15,
    WifiCalling3: 15,
    WifiLock: 15,
    WifiOff: 15,
    WifiProtectedSetup: 0,
    WifiTethering: 7,
    WifiTetheringOff: 0,
    Window: 15,
    WineBar: 15,
    Work: 15,
    WorkOff: 15,
    WorkOutline: 15,
    Workspaces: 15,
    WrapText: 15,
    WrongLocation: 7,
    Wysiwyg: 15,
    Yard: 15,
    YouTube: 0,
    YoutubeSearchedFor: 0,
    ZoomIn: 15,
    ZoomOut: 15,
    ZoomOutMap: 15,
  },
  St = Object.keys(wt),
  As = ["Filled", "TwoTone", "Sharp", "Rounded", "Outlined"],
  da = {
    15: [...As],
    7: ["Filled", "TwoTone", "Sharp", "Rounded"],
    2: ["Filled", "Sharp"],
  },
  Bs = Object.keys(da).map((r) => `iconStyle${r}`),
  Sn = St.reduce((r, a) => ((r[a.toLowerCase()] = a), r), {});
function Re(r) {
  let {
      color: a,
      selectByList: s,
      iconSearch: i,
      iconSelection: c,
      onClick: d,
      onMouseDown: g,
      onMouseUp: w,
      onMouseEnter: p,
      onMouseLeave: l,
      mirrored: y,
      style: x,
    } = r,
    P = B(!1),
    q = qr(St, s, i, c, Sn),
    C = Bs.map((H) => r[H]),
    o = O(() => {
      let H = wt[q];
      if (!H) return;
      let G = r[`iconStyle${H}`];
      if (G !== "Filled") return G;
    }, [...C]),
    [u, M] = K(q === "Home" ? wn(ce) : null);
  async function F() {
    if (typeof wt[q] != "number") {
      M(null);
      return;
    }
    try {
      let R = await import(`${Vs}${q}${o || ""}.js@0.0.32`);
      P.current && M(R.default(ce));
    } catch {
      P.current && M(null);
    }
  }
  U(
    () => (
      (P.current = !0),
      F(),
      () => {
        P.current = !1;
      }
    ),
    [q, ...C],
  );
  let j = ge.current() === ge.canvas ? e(kr, {}) : null;
  return e(t.div, {
    style: { display: "contents" },
    onClick: d,
    onMouseEnter: p,
    onMouseLeave: l,
    onMouseDown: g,
    onMouseUp: w,
    children: u
      ? e("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          style: {
            userSelect: "none",
            width: "100%",
            height: "100%",
            display: "inline-block",
            fill: a,
            flexShrink: 0,
            transform: y ? "scale(-1, 1)" : void 0,
            ...x,
          },
          focusable: "false",
          viewBox: "0 0 24 24",
          color: a,
          children: u,
        })
      : j,
  });
}
Re.displayName = "Material";
Re.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: "Home",
  iconSearch: "Home",
  color: "#66F",
  selectByList: !0,
  weight: "Filled",
  mirrored: !1,
};
function Ms(r, a) {
  let { selectByList: s, iconSearch: i, iconSelection: c } = r,
    d = parseInt(a),
    g = rn(St, s, i, c, Sn),
    w = wt[g];
  return !w || d === 0 ? !0 : w !== d;
}
re(Re, {
  selectByList: {
    type: m.Boolean,
    title: "Select",
    enabledTitle: "List",
    disabledTitle: "Search",
    defaultValue: Re.defaultProps.selectByList,
  },
  iconSelection: {
    type: m.Enum,
    options: St,
    defaultValue: Re.defaultProps.iconSelection,
    title: "Name",
    hidden: ({ selectByList: r }) => !r,
    description:
      "Find every icon name on the [Material site](https://fonts.google.com/icons)",
  },
  iconSearch: {
    type: m.String,
    title: "Name",
    placeholder: "Menu, Wifi, Box\u2026",
    hidden: ({ selectByList: r }) => r,
  },
  mirrored: {
    type: m.Boolean,
    enabledTitle: "Yes",
    disabledTitle: "No",
    defaultValue: Re.defaultProps.mirrored,
  },
  color: { type: m.Color, title: "Color", defaultValue: Re.defaultProps.color },
  ...Object.keys(da).reduce(
    (r, a) => (
      (r[`iconStyle${a}`] = {
        type: m.Enum,
        title: "Style",
        defaultValue: "Filled",
        options: da[a],
        hidden: (s) => Ms(s, a),
      }),
      r
    ),
    {},
  ),
  ...Cr,
});
var zs = ue(Re),
  Gs = ["wLxPJcMXV", "EJaYdKjSa", "cHpbJG1jP"];
var Hs = {
  cHpbJG1jP: "framer-v-1u29s6q",
  EJaYdKjSa: "framer-v-gqobf5",
  wLxPJcMXV: "framer-v-unx6dw",
};
function je(r, ...a) {
  let s = {};
  return (a?.forEach((i) => i && Object.assign(s, r[i])), s);
}
var _s = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Ws = ({ value: r, children: a }) => {
    let s = Ne(ae),
      i = r ?? s.transition,
      c = O(() => ({ ...s, transition: i }), [JSON.stringify(i)]);
    return e(ae.Provider, { value: c, children: a });
  },
  Es = { Desktop: "wLxPJcMXV", Phone: "cHpbJG1jP", Tablet: "EJaYdKjSa" },
  js = ({ height: r, id: a, width: s, ...i }) => {
    var c, d;
    return {
      ...i,
      variant:
        (d = (c = Es[i.variant]) !== null && c !== void 0 ? c : i.variant) !==
          null && d !== void 0
          ? d
          : "wLxPJcMXV",
    };
  },
  Ls = (r, a) => a.join("-") + r.layoutDependency,
  Ds = fe(function (r, a) {
    let { activeLocale: s } = Se(),
      { style: i, className: c, layoutId: d, variant: g, ...w } = js(r),
      {
        baseVariant: p,
        classNames: l,
        gestureVariant: y,
        setGestureState: x,
        setVariant: P,
        transition: q,
        variants: C,
      } = Fe({
        cycleOrder: Gs,
        defaultVariant: "wLxPJcMXV",
        transitions: _s,
        variant: g,
        variantClassNames: Hs,
      }),
      o = Ls(r, C),
      u = B(null),
      M = () => p === "EJaYdKjSa",
      F = we(),
      S = [];
    return e(ne, {
      id: d ?? F,
      children: e(t.div, {
        initial: g,
        animate: C,
        onHoverStart: () => x({ isHovered: !0 }),
        onHoverEnd: () => x({ isHovered: !1 }),
        onTapStart: () => x({ isPressed: !0 }),
        onTap: () => x({ isPressed: !1 }),
        onTapCancel: () => x({ isPressed: !1 }),
        className: te("framer-PNhpn", ...S, l),
        style: { display: "contents" },
        children: e(Ws, {
          value: q,
          children: f(t.footer, {
            ...w,
            className: te("framer-unx6dw", c),
            "data-border": !0,
            "data-framer-name": "Desktop",
            layoutDependency: o,
            layoutId: "wLxPJcMXV",
            ref: a ?? u,
            style: {
              "--border-bottom-width": "0px",
              "--border-color": "rgba(0, 0, 0, 0.05)",
              "--border-left-width": "0px",
              "--border-right-width": "0px",
              "--border-style": "solid",
              "--border-top-width": "1px",
              backgroundColor: "rgb(128, 91, 19)",
              ...i,
            },
            ...je(
              {
                cHpbJG1jP: { "data-framer-name": "Phone" },
                EJaYdKjSa: { "data-framer-name": "Tablet" },
              },
              p,
              y,
            ),
            children: [
              e(t.div, {
                className: "framer-1nhwf0y",
                "data-framer-name": "contact us",
                layoutDependency: o,
                layoutId: "s8VSxg3tn",
                children: e(h, {
                  __fromCanvasComponent: !0,
                  children: e(n, {
                    children: e(t.p, {
                      style: {
                        "--font-selector": "R0Y7SW50ZXItNjAw",
                        "--framer-font-family":
                          '"Inter", "Inter Placeholder", sans-serif',
                        "--framer-font-weight": "600",
                        "--framer-line-height": "1.6em",
                        "--framer-text-alignment": "left",
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                      },
                      children: "Contact Us",
                    }),
                  }),
                  className: "framer-1sda982",
                  fonts: ["GF;Inter-600"],
                  layoutDependency: o,
                  layoutId: "WMFOnAlu0",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                    "--framer-paragraph-spacing": "0px",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...je(
                    {
                      cHpbJG1jP: {
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7SW50ZXItNjAw",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-size": "15px",
                              "--framer-font-weight": "600",
                              "--framer-line-height": "1.6em",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                            },
                            children: "Contact Us",
                          }),
                        }),
                      },
                    },
                    p,
                    y,
                  ),
                }),
              }),
              f(t.div, {
                className: "framer-20l0uu",
                "data-framer-name": "Footer",
                layoutDependency: o,
                layoutId: "kxrxVCUw4",
                children: [
                  e(k, {
                    href: "www.hiso33.vip",
                    children: f(t.a, {
                      className: "framer-1jhu8jm framer-1ucjy47",
                      "data-framer-name": "Live Chat",
                      layoutDependency: o,
                      layoutId: "xwejlKD4a",
                      children: [
                        e(t.div, {
                          className: "framer-1f692t9",
                          "data-framer-name": "Chat Icon",
                          layoutDependency: o,
                          layoutId: "w1zilmqo4",
                          children: e(b, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 159,
                              intrinsicWidth: 159,
                              pixelHeight: 159,
                              pixelWidth: 159,
                              src: "https://framerusercontent.com/images/i5DBwkLPa2hyPH7X2owf9xCFQ8.png",
                            },
                            className: "framer-1qz5fuj",
                            "data-framer-name": "live chat logo",
                            layoutDependency: o,
                            layoutId: "Xp09xoWWF",
                          }),
                        }),
                        f(t.div, {
                          className: "framer-1xd1ffe",
                          "data-framer-name": "Live Chat",
                          layoutDependency: o,
                          layoutId: "oC1RR2LIU",
                          children: [
                            e(t.div, {
                              className: "framer-v01kne",
                              "data-framer-name": "live chat logo",
                              layoutDependency: o,
                              layoutId: "m0LzIoyS4",
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e(t.p, {
                                    style: {
                                      "--font-selector": "R0Y7SW50ZXItNTAw",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "500",
                                      "--framer-line-height": "1.6em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                    },
                                    children: "Live Chat",
                                  }),
                                }),
                                className: "framer-unc4s2",
                                fonts: ["GF;Inter-500"],
                                layoutDependency: o,
                                layoutId: "cOKuVGKgD",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...je(
                                  {
                                    cHpbJG1jP: {
                                      children: e(n, {
                                        children: e(t.p, {
                                          style: {
                                            "--font-selector":
                                              "R0Y7SW50ZXItNTAw",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "12px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1.6em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                          },
                                          children: "Live Chat",
                                        }),
                                      }),
                                    },
                                  },
                                  p,
                                  y,
                                ),
                              }),
                            }),
                            e(t.div, {
                              className: "framer-1m8nnbu",
                              "data-framer-name": "live chat logo",
                              layoutDependency: o,
                              layoutId: "caV9sYju7",
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e(t.p, {
                                    style: {
                                      "--font-selector": "R0Y7SW50ZXItNTAw",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "500",
                                      "--framer-line-height": "1.6em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, rgb(255, 224, 163))",
                                    },
                                    children: "on Main Web",
                                  }),
                                }),
                                className: "framer-ftfssk",
                                fonts: ["GF;Inter-500"],
                                layoutDependency: o,
                                layoutId: "e29I80tDB",
                                style: {
                                  "--extracted-r6o4lv": "rgb(255, 224, 163)",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...je(
                                  {
                                    cHpbJG1jP: {
                                      children: e(n, {
                                        children: e(t.p, {
                                          style: {
                                            "--font-selector":
                                              "R0Y7SW50ZXItNTAw",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "10px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1.6em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, rgb(255, 224, 163))",
                                          },
                                          children: "on Main Web",
                                        }),
                                      }),
                                    },
                                  },
                                  p,
                                  y,
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e(k, {
                    href: "tel://+6587308723/",
                    ...je({ cHpbJG1jP: { openInNewTab: !0 } }, p, y),
                    children: f(t.a, {
                      className: "framer-1fafr80 framer-1ucjy47",
                      "data-framer-name": "Whatsapp",
                      layoutDependency: o,
                      layoutId: "hftaXbv6x",
                      children: [
                        e(t.div, {
                          className: "framer-vz25qe",
                          "data-framer-name": "Whatsapp Icon",
                          layoutDependency: o,
                          layoutId: "LKgUwc9J9",
                          children: e(b, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 160,
                              intrinsicWidth: 159,
                              pixelHeight: 160,
                              pixelWidth: 159,
                              src: "https://framerusercontent.com/images/pI5d3vWaUWqtPX8M0UCBstSHOJw.png",
                            },
                            className: "framer-pa7z85",
                            "data-framer-name": "live chat logo",
                            layoutDependency: o,
                            layoutId: "jrKO1AWZP",
                          }),
                        }),
                        f(t.div, {
                          className: "framer-13f2s1t",
                          "data-framer-name": "Whatsapp",
                          layoutDependency: o,
                          layoutId: "TFO3ieDRl",
                          children: [
                            e(t.div, {
                              className: "framer-1vbtcyt",
                              "data-framer-name": "Whatsapp logo",
                              layoutDependency: o,
                              layoutId: "nsH6oA8_k",
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e(t.p, {
                                    style: {
                                      "--font-selector": "R0Y7SW50ZXItNTAw",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "500",
                                      "--framer-line-height": "1.6em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                    },
                                    children: "Whatsapp",
                                  }),
                                }),
                                className: "framer-1t1d9hp",
                                fonts: ["GF;Inter-500"],
                                layoutDependency: o,
                                layoutId: "I8ErbXyPI",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...je(
                                  {
                                    cHpbJG1jP: {
                                      children: e(n, {
                                        children: e(t.p, {
                                          style: {
                                            "--font-selector":
                                              "R0Y7SW50ZXItNTAw",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "12px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1.6em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                          },
                                          children: "Whatsapp",
                                        }),
                                      }),
                                    },
                                  },
                                  p,
                                  y,
                                ),
                              }),
                            }),
                            e(t.div, {
                              className: "framer-a6k08n",
                              "data-framer-name": "whatsapp number",
                              layoutDependency: o,
                              layoutId: "xhfXPLeKt",
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e(t.p, {
                                    style: {
                                      "--font-selector": "R0Y7SW50ZXItNTAw",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "500",
                                      "--framer-line-height": "1.6em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                    },
                                    children: "+65 8730 8723",
                                  }),
                                }),
                                className: "framer-m98yu9",
                                fonts: ["GF;Inter-500"],
                                layoutDependency: o,
                                layoutId: "FNiaMe7Up",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...je(
                                  {
                                    cHpbJG1jP: {
                                      children: e(n, {
                                        children: e(t.p, {
                                          style: {
                                            "--font-selector":
                                              "R0Y7SW50ZXItNTAw",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "10px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1.6em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                          },
                                          children: "+65 8730 8723",
                                        }),
                                      }),
                                    },
                                  },
                                  p,
                                  y,
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e(k, {
                    href: "mailto:HQ.HISO33@gmail.com",
                    children: f(t.a, {
                      className: "framer-3lo1r2 framer-1ucjy47",
                      "data-framer-name": "Email",
                      layoutDependency: o,
                      layoutId: "zNzbG7nzl",
                      children: [
                        e(t.div, {
                          className: "framer-1xdnfoc",
                          "data-framer-name": "Email Icon",
                          layoutDependency: o,
                          layoutId: "MQz3sgVHR",
                          children: e(b, {
                            background: {
                              alt: "",
                              fit: "fill",
                              intrinsicHeight: 160,
                              intrinsicWidth: 160,
                              pixelHeight: 160,
                              pixelWidth: 160,
                              src: "https://framerusercontent.com/images/iUqrv70YvapTk1CxvMBkF3PKasE.png",
                            },
                            className: "framer-doeyre",
                            "data-framer-name": "live chat logo",
                            layoutDependency: o,
                            layoutId: "lbLbhiCv9",
                          }),
                        }),
                        f(t.div, {
                          className: "framer-ude3gb",
                          "data-framer-name": "Email",
                          layoutDependency: o,
                          layoutId: "Ml388fSL4",
                          children: [
                            e(t.div, {
                              className: "framer-10u6i82",
                              "data-framer-name": "Email",
                              layoutDependency: o,
                              layoutId: "oeijsNwiq",
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e(t.p, {
                                    style: {
                                      "--font-selector": "R0Y7SW50ZXItNTAw",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "500",
                                      "--framer-line-height": "1.6em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                    },
                                    children: "Email",
                                  }),
                                }),
                                className: "framer-1yl2plw",
                                fonts: ["GF;Inter-500"],
                                layoutDependency: o,
                                layoutId: "uXM9Kt8oq",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...je(
                                  {
                                    cHpbJG1jP: {
                                      children: e(n, {
                                        children: e(t.p, {
                                          style: {
                                            "--font-selector":
                                              "R0Y7SW50ZXItNTAw",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "12px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1.6em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                          },
                                          children: "Email",
                                        }),
                                      }),
                                    },
                                  },
                                  p,
                                  y,
                                ),
                              }),
                            }),
                            e(t.div, {
                              className: "framer-7875j1",
                              "data-framer-name": "Email",
                              layoutDependency: o,
                              layoutId: "lMz5nF2CK",
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e(t.p, {
                                    style: {
                                      "--font-selector": "R0Y7SW50ZXItNTAw",
                                      "--framer-font-family":
                                        '"Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "500",
                                      "--framer-line-height": "1.6em",
                                      "--framer-text-alignment": "left",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                    },
                                    children: "HQ.HISO33@gmail.com",
                                  }),
                                }),
                                className: "framer-n4nyn0",
                                fonts: ["GF;Inter-500"],
                                layoutDependency: o,
                                layoutId: "VXJUsfy8P",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                                  "--framer-paragraph-spacing": "0px",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                                ...je(
                                  {
                                    cHpbJG1jP: {
                                      children: e(n, {
                                        children: e(t.p, {
                                          style: {
                                            "--font-selector":
                                              "R0Y7SW50ZXItNTAw",
                                            "--framer-font-family":
                                              '"Inter", "Inter Placeholder", sans-serif',
                                            "--framer-font-size": "10px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1.6em",
                                            "--framer-text-alignment": "left",
                                            "--framer-text-color":
                                              "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                          },
                                          children: "HQ.HISO33@gmail.com",
                                        }),
                                      }),
                                    },
                                  },
                                  p,
                                  y,
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  M() &&
                    e(t.div, {
                      className: "framer-1rnwrsq",
                      layoutDependency: o,
                      layoutId: "C2Vkf4P6a",
                      children:
                        M() &&
                        e(t.div, {
                          className: "framer-1kym0kt",
                          layoutDependency: o,
                          layoutId: "yZvCg4kug",
                        }),
                    }),
                  f(t.div, {
                    className: "framer-5ls4zp",
                    "data-framer-name": "Icons",
                    layoutDependency: o,
                    layoutId: "h3b2ACc3I",
                    children: [
                      e(k, {
                        href: "https://facebook.com/hiso33official",
                        children: e(t.a, {
                          className: "framer-x1qlye framer-1ucjy47",
                          "data-framer-name": "facebook",
                          layoutDependency: o,
                          layoutId: "ETHy3fv1a",
                          children: e(t.div, {
                            className: "framer-tt3gr1-container",
                            layoutDependency: o,
                            layoutId: "YmigeB3GY-container",
                            children: e(Re, {
                              color:
                                'var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) /* {"name":"Bright Gold"} */',
                              height: "100%",
                              iconSearch: "Home",
                              iconSelection: "Facebook",
                              iconStyle15: "Filled",
                              iconStyle2: "Filled",
                              iconStyle7: "Filled",
                              id: "YmigeB3GY",
                              layoutId: "YmigeB3GY",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                      e(k, {
                        openInNewTab: !0,
                        children: e(t.a, {
                          className: "framer-oj4l0q framer-1ucjy47",
                          "data-framer-name": "IG",
                          layoutDependency: o,
                          layoutId: "PKBfMJSYE",
                          children: e(t.div, {
                            className: "framer-53s7g3-container",
                            layoutDependency: o,
                            layoutId: "Vj7l8Aydz-container",
                            children: e(Re, {
                              color:
                                'var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) /* {"name":"Bright Gold"} */',
                              height: "100%",
                              iconSearch: "Home",
                              iconSelection: "Instagram",
                              iconStyle15: "Filled",
                              iconStyle2: "Filled",
                              iconStyle7: "Filled",
                              id: "Vj7l8Aydz",
                              layoutId: "Vj7l8Aydz",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                      e(k, {
                        href: "https://youtube.com/@Hiso33",
                        children: e(t.a, {
                          className: "framer-dalz00 framer-1ucjy47",
                          "data-framer-name": "youtube",
                          layoutDependency: o,
                          layoutId: "LDo_veuNl",
                          children: e(t.div, {
                            className: "framer-cikvu7-container",
                            layoutDependency: o,
                            layoutId: "m3KdMspt7-container",
                            children: e(Re, {
                              color:
                                'var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) /* {"name":"Bright Gold"} */',
                              height: "100%",
                              iconSearch: "Home",
                              iconSelection: "YouTube",
                              iconStyle15: "Filled",
                              iconStyle2: "Filled",
                              iconStyle7: "Filled",
                              id: "m3KdMspt7",
                              layoutId: "m3KdMspt7",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                      e(k, {
                        href: "https://twitter.com/HISO33_SG",
                        children: e(t.a, {
                          className: "framer-mewd6d framer-1ucjy47",
                          "data-framer-name": "twitter",
                          layoutDependency: o,
                          layoutId: "Ouw9C8Ahn",
                          children: e(t.div, {
                            className: "framer-h1cb3a-container",
                            layoutDependency: o,
                            layoutId: "zuMQmEWv5-container",
                            children: e(Re, {
                              color:
                                'var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) /* {"name":"Bright Gold"} */',
                              height: "100%",
                              iconSearch: "Home",
                              iconSelection: "Twitter",
                              iconStyle15: "Filled",
                              iconStyle2: "Filled",
                              iconStyle7: "Filled",
                              id: "zuMQmEWv5",
                              layoutId: "zuMQmEWv5",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                      e(k, {
                        href: "https://www.pinterest.com/hiso33sg/",
                        children: e(t.a, {
                          className: "framer-6kf2k3 framer-1ucjy47",
                          "data-framer-name": "pinterest",
                          layoutDependency: o,
                          layoutId: "Yzz_6R36s",
                          children: e(t.div, {
                            className: "framer-1xvx2jb-container",
                            layoutDependency: o,
                            layoutId: "jI_YCxOuf-container",
                            children: e(Re, {
                              color:
                                'var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) /* {"name":"Bright Gold"} */',
                              height: "100%",
                              iconSearch: "Home",
                              iconSelection: "Pinterest",
                              iconStyle15: "Filled",
                              iconStyle2: "Filled",
                              iconStyle7: "Filled",
                              id: "jI_YCxOuf",
                              layoutId: "jI_YCxOuf",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                      e(k, {
                        href: "https://www.reddit.com/user/HISO33/",
                        openInNewTab: !0,
                        children: e(t.a, {
                          className: "framer-10i3t0m framer-1ucjy47",
                          "data-framer-name": "reddit",
                          layoutDependency: o,
                          layoutId: "qQCwjBT_y",
                          children: e(t.div, {
                            className: "framer-mz0r1e-container",
                            layoutDependency: o,
                            layoutId: "C8uuxzbY2-container",
                            children: e(Re, {
                              color:
                                'var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) /* {"name":"Bright Gold"} */',
                              height: "100%",
                              iconSearch: "Home",
                              iconSelection: "Reddit",
                              iconStyle15: "Filled",
                              iconStyle2: "Filled",
                              iconStyle7: "Filled",
                              id: "C8uuxzbY2",
                              layoutId: "C8uuxzbY2",
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: "100%", width: "100%" },
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e(t.div, {
                className: "framer-u2mrcp",
                "data-border": !0,
                "data-framer-name": "Copyright",
                layoutDependency: o,
                layoutId: "Y6HsQFU1p",
                style: {
                  "--border-bottom-width": "0px",
                  "--border-color": "rgba(255, 255, 255, 0.2)",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "1px",
                },
                children: f(t.div, {
                  className: "framer-r8hfm1",
                  "data-framer-name": "Vertical",
                  layoutDependency: o,
                  layoutId: "J6ZtDCmdg",
                  children: [
                    e(t.div, {
                      className: "framer-ie4uuc",
                      layoutDependency: o,
                      layoutId: "nmPG3fudq",
                      children: e(h, {
                        __fromCanvasComponent: !0,
                        children: e(n, {
                          children: e(t.p, {
                            style: {
                              "--font-selector": "R0Y7SW50ZXItNTAw",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-size": "14px",
                              "--framer-font-weight": "500",
                              "--framer-line-height": "1.5em",
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                            },
                            children:
                              "Copyright \xA9 2017-2023 HISO33.FUN.\xA0 All rights reserved.\xA0",
                          }),
                        }),
                        className: "framer-lgy26o",
                        fonts: ["GF;Inter-500"],
                        layoutDependency: o,
                        layoutId: "jc3xvVb89",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                          "--framer-link-hover-text-color":
                            "rgba(153, 153, 153, 0.6)",
                          "--framer-link-text-decoration": "none",
                          "--framer-paragraph-spacing": "0px",
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                        ...je(
                          {
                            cHpbJG1jP: {
                              children: e(n, {
                                children: e(t.p, {
                                  style: {
                                    "--font-selector": "R0Y7SW50ZXItNTAw",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "10px",
                                    "--framer-font-weight": "500",
                                    "--framer-line-height": "1.5em",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                  },
                                  children:
                                    "Copyright \xA9 2017-2023 HISO33.FUN.\xA0 All rights reserved.\xA0",
                                }),
                              }),
                            },
                          },
                          p,
                          y,
                        ),
                      }),
                    }),
                    f(t.div, {
                      className: "framer-rd1cq5",
                      layoutDependency: o,
                      layoutId: "pfBpJOWNP",
                      children: [
                        e(t.div, {
                          className: "framer-kanmmo",
                          layoutDependency: o,
                          layoutId: "vbZjrUS8Q",
                          children: e(h, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e(t.p, {
                                style: {
                                  "--font-selector": "R0Y7SW50ZXItNjAw",
                                  "--framer-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.6em",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children: "Responsible Gaming",
                              }),
                            }),
                            className: "framer-1lud9ht",
                            fonts: ["GF;Inter-600"],
                            layoutDependency: o,
                            layoutId: "E_h8nxtOM",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                              "--framer-link-hover-text-color":
                                "rgba(153, 153, 153, 0.6)",
                              "--framer-link-text-decoration": "none",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                            ...je(
                              {
                                cHpbJG1jP: {
                                  children: e(n, {
                                    children: e(t.p, {
                                      style: {
                                        "--font-selector": "R0Y7SW50ZXItNjAw",
                                        "--framer-font-family":
                                          '"Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "10px",
                                        "--framer-font-weight": "600",
                                        "--framer-line-height": "1.6em",
                                        "--framer-text-alignment": "left",
                                        "--framer-text-color":
                                          "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                      },
                                      children: "Responsible Gaming",
                                    }),
                                  }),
                                },
                              },
                              p,
                              y,
                            ),
                          }),
                        }),
                        f(t.div, {
                          className: "framer-5046p2",
                          layoutDependency: o,
                          layoutId: "ifcuL9Str",
                          children: [
                            e(t.div, {
                              className: "framer-v4694u",
                              layoutDependency: o,
                              layoutId: "IcTqzHZwh",
                              children: e(b, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 19.5,
                                  intrinsicWidth: 15,
                                  pixelHeight: 39,
                                  pixelWidth: 30,
                                  src: "https://framerusercontent.com/images/2l2ienbvCisk7L4RzakvmpFSQHs.png",
                                },
                                className: "framer-162e8pa",
                                "data-framer-name": "$18_",
                                layoutDependency: o,
                                layoutId: "zxX_vr7vV",
                              }),
                            }),
                            e(t.div, {
                              className: "framer-h9e0r4",
                              layoutDependency: o,
                              layoutId: "YFrtUTl_X",
                              children: e(b, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 75,
                                  intrinsicWidth: 68.5,
                                  pixelHeight: 150,
                                  pixelWidth: 137,
                                  src: "https://framerusercontent.com/images/dUAIq6b7JKtwGWSfl2OSUWzbg0Y.svg",
                                },
                                className: "framer-yiduof",
                                "data-framer-name": "gamcare",
                                layoutDependency: o,
                                layoutId: "yXKPhhqzW",
                              }),
                            }),
                            e(t.div, {
                              className: "framer-1q9t7vi",
                              layoutDependency: o,
                              layoutId: "YdZceO4VQ",
                              children: e(b, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 19.5,
                                  intrinsicWidth: 23,
                                  pixelHeight: 39,
                                  pixelWidth: 46,
                                  src: "https://framerusercontent.com/images/32Q01PF9s9HRHVkj6vnnDIFI.png",
                                },
                                className: "framer-1ihnvef",
                                "data-framer-name": "begambleaware",
                                layoutDependency: o,
                                layoutId: "nOr_Y6Sh2",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Us = [
    '.framer-PNhpn [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-PNhpn .framer-1ucjy47 { display: block; }",
    ".framer-PNhpn .framer-unx6dw { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 60px 40px 30px 60px; position: relative; width: 1200px; }",
    ".framer-PNhpn .framer-1nhwf0y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 16px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 995px; }",
    ".framer-PNhpn .framer-1sda982, .framer-PNhpn .framer-unc4s2, .framer-PNhpn .framer-ftfssk, .framer-PNhpn .framer-1t1d9hp, .framer-PNhpn .framer-m98yu9, .framer-PNhpn .framer-1yl2plw, .framer-PNhpn .framer-n4nyn0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-PNhpn .framer-20l0uu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 100px; height: 54px; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-PNhpn .framer-1jhu8jm, .framer-PNhpn .framer-3lo1r2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 51px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 1px; }",
    ".framer-PNhpn .framer-1f692t9, .framer-PNhpn .framer-vz25qe, .framer-PNhpn .framer-1xdnfoc { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-PNhpn .framer-1qz5fuj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: visible; position: relative; width: 40px; }",
    ".framer-PNhpn .framer-1xd1ffe, .framer-PNhpn .framer-13f2s1t, .framer-PNhpn .framer-ude3gb { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-PNhpn .framer-v01kne, .framer-PNhpn .framer-1m8nnbu, .framer-PNhpn .framer-1vbtcyt, .framer-PNhpn .framer-a6k08n, .framer-PNhpn .framer-10u6i82, .framer-PNhpn .framer-7875j1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-PNhpn .framer-1fafr80 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 51px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 21%; }",
    ".framer-PNhpn .framer-pa7z85, .framer-PNhpn .framer-doeyre { flex: none; height: 40px; overflow: visible; position: relative; width: 40px; }",
    ".framer-PNhpn .framer-1rnwrsq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 73px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 18px; }",
    ".framer-PNhpn .framer-1kym0kt { flex: none; height: 72px; overflow: visible; position: relative; width: 31px; }",
    ".framer-PNhpn .framer-5ls4zp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 54px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 254px; }",
    ".framer-PNhpn .framer-x1qlye, .framer-PNhpn .framer-oj4l0q, .framer-PNhpn .framer-dalz00, .framer-PNhpn .framer-mewd6d, .framer-PNhpn .framer-6kf2k3, .framer-PNhpn .framer-10i3t0m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 45px; }",
    ".framer-PNhpn .framer-tt3gr1-container, .framer-PNhpn .framer-53s7g3-container, .framer-PNhpn .framer-cikvu7-container, .framer-PNhpn .framer-h1cb3a-container, .framer-PNhpn .framer-1xvx2jb-container, .framer-PNhpn .framer-mz0r1e-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 38px); position: relative; width: 35px; }",
    ".framer-PNhpn .framer-u2mrcp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1000px; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-PNhpn .framer-r8hfm1 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 409px; height: 89px; justify-content: flex-start; overflow: visible; padding: 10px 0px 10px 0px; position: relative; width: 436px; }",
    ".framer-PNhpn .framer-ie4uuc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-PNhpn .framer-lgy26o { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }",
    ".framer-PNhpn .framer-rd1cq5 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 259px; }",
    ".framer-PNhpn .framer-kanmmo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 204px; }",
    ".framer-PNhpn .framer-1lud9ht { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-PNhpn .framer-5046p2 { align-content: start; align-items: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".framer-PNhpn .framer-v4694u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 53px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: auto; }",
    ".framer-PNhpn .framer-162e8pa { aspect-ratio: 0.7692307692307693 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 46px); overflow: visible; position: relative; width: 35px; }",
    ".framer-PNhpn .framer-h9e0r4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 53px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 76px; }",
    ".framer-PNhpn .framer-yiduof { aspect-ratio: 0.9133333333333333 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: visible; position: relative; width: 36px; }",
    ".framer-PNhpn .framer-1q9t7vi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 53px; justify-content: center; overflow: visible; padding: 0px 20px 0px 0px; position: relative; width: 76px; }",
    ".framer-PNhpn .framer-1ihnvef { aspect-ratio: 1.1794871794871795 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 42px); overflow: visible; position: relative; width: 49px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PNhpn .framer-unx6dw, .framer-PNhpn .framer-1nhwf0y, .framer-PNhpn .framer-20l0uu, .framer-PNhpn .framer-1jhu8jm, .framer-PNhpn .framer-1f692t9, .framer-PNhpn .framer-1xd1ffe, .framer-PNhpn .framer-v01kne, .framer-PNhpn .framer-1m8nnbu, .framer-PNhpn .framer-1fafr80, .framer-PNhpn .framer-vz25qe, .framer-PNhpn .framer-13f2s1t, .framer-PNhpn .framer-1vbtcyt, .framer-PNhpn .framer-a6k08n, .framer-PNhpn .framer-3lo1r2, .framer-PNhpn .framer-1xdnfoc, .framer-PNhpn .framer-ude3gb, .framer-PNhpn .framer-10u6i82, .framer-PNhpn .framer-7875j1, .framer-PNhpn .framer-1rnwrsq, .framer-PNhpn .framer-5ls4zp, .framer-PNhpn .framer-x1qlye, .framer-PNhpn .framer-oj4l0q, .framer-PNhpn .framer-dalz00, .framer-PNhpn .framer-mewd6d, .framer-PNhpn .framer-6kf2k3, .framer-PNhpn .framer-10i3t0m, .framer-PNhpn .framer-r8hfm1, .framer-PNhpn .framer-ie4uuc, .framer-PNhpn .framer-rd1cq5, .framer-PNhpn .framer-kanmmo, .framer-PNhpn .framer-5046p2, .framer-PNhpn .framer-v4694u, .framer-PNhpn .framer-h9e0r4, .framer-PNhpn .framer-1q9t7vi { gap: 0px; } .framer-PNhpn .framer-unx6dw > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-PNhpn .framer-unx6dw > :first-child, .framer-PNhpn .framer-1xd1ffe > :first-child, .framer-PNhpn .framer-13f2s1t > :first-child, .framer-PNhpn .framer-ude3gb > :first-child, .framer-PNhpn .framer-rd1cq5 > :first-child, .framer-PNhpn .framer-kanmmo > :first-child { margin-top: 0px; } .framer-PNhpn .framer-unx6dw > :last-child, .framer-PNhpn .framer-1xd1ffe > :last-child, .framer-PNhpn .framer-13f2s1t > :last-child, .framer-PNhpn .framer-ude3gb > :last-child, .framer-PNhpn .framer-rd1cq5 > :last-child, .framer-PNhpn .framer-kanmmo > :last-child { margin-bottom: 0px; } .framer-PNhpn .framer-1nhwf0y > *, .framer-PNhpn .framer-1jhu8jm > *, .framer-PNhpn .framer-v01kne > *, .framer-PNhpn .framer-1m8nnbu > *, .framer-PNhpn .framer-1fafr80 > *, .framer-PNhpn .framer-1vbtcyt > *, .framer-PNhpn .framer-a6k08n > *, .framer-PNhpn .framer-3lo1r2 > *, .framer-PNhpn .framer-10u6i82 > *, .framer-PNhpn .framer-7875j1 > *, .framer-PNhpn .framer-1rnwrsq > *, .framer-PNhpn .framer-x1qlye > *, .framer-PNhpn .framer-oj4l0q > *, .framer-PNhpn .framer-dalz00 > *, .framer-PNhpn .framer-mewd6d > *, .framer-PNhpn .framer-6kf2k3 > *, .framer-PNhpn .framer-10i3t0m > *, .framer-PNhpn .framer-ie4uuc > *, .framer-PNhpn .framer-h9e0r4 > *, .framer-PNhpn .framer-1q9t7vi > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PNhpn .framer-1nhwf0y > :first-child, .framer-PNhpn .framer-20l0uu > :first-child, .framer-PNhpn .framer-1jhu8jm > :first-child, .framer-PNhpn .framer-1f692t9 > :first-child, .framer-PNhpn .framer-v01kne > :first-child, .framer-PNhpn .framer-1m8nnbu > :first-child, .framer-PNhpn .framer-1fafr80 > :first-child, .framer-PNhpn .framer-vz25qe > :first-child, .framer-PNhpn .framer-1vbtcyt > :first-child, .framer-PNhpn .framer-a6k08n > :first-child, .framer-PNhpn .framer-3lo1r2 > :first-child, .framer-PNhpn .framer-1xdnfoc > :first-child, .framer-PNhpn .framer-10u6i82 > :first-child, .framer-PNhpn .framer-7875j1 > :first-child, .framer-PNhpn .framer-1rnwrsq > :first-child, .framer-PNhpn .framer-5ls4zp > :first-child, .framer-PNhpn .framer-x1qlye > :first-child, .framer-PNhpn .framer-oj4l0q > :first-child, .framer-PNhpn .framer-dalz00 > :first-child, .framer-PNhpn .framer-mewd6d > :first-child, .framer-PNhpn .framer-6kf2k3 > :first-child, .framer-PNhpn .framer-10i3t0m > :first-child, .framer-PNhpn .framer-r8hfm1 > :first-child, .framer-PNhpn .framer-ie4uuc > :first-child, .framer-PNhpn .framer-5046p2 > :first-child, .framer-PNhpn .framer-v4694u > :first-child, .framer-PNhpn .framer-h9e0r4 > :first-child, .framer-PNhpn .framer-1q9t7vi > :first-child { margin-left: 0px; } .framer-PNhpn .framer-1nhwf0y > :last-child, .framer-PNhpn .framer-20l0uu > :last-child, .framer-PNhpn .framer-1jhu8jm > :last-child, .framer-PNhpn .framer-1f692t9 > :last-child, .framer-PNhpn .framer-v01kne > :last-child, .framer-PNhpn .framer-1m8nnbu > :last-child, .framer-PNhpn .framer-1fafr80 > :last-child, .framer-PNhpn .framer-vz25qe > :last-child, .framer-PNhpn .framer-1vbtcyt > :last-child, .framer-PNhpn .framer-a6k08n > :last-child, .framer-PNhpn .framer-3lo1r2 > :last-child, .framer-PNhpn .framer-1xdnfoc > :last-child, .framer-PNhpn .framer-10u6i82 > :last-child, .framer-PNhpn .framer-7875j1 > :last-child, .framer-PNhpn .framer-1rnwrsq > :last-child, .framer-PNhpn .framer-5ls4zp > :last-child, .framer-PNhpn .framer-x1qlye > :last-child, .framer-PNhpn .framer-oj4l0q > :last-child, .framer-PNhpn .framer-dalz00 > :last-child, .framer-PNhpn .framer-mewd6d > :last-child, .framer-PNhpn .framer-6kf2k3 > :last-child, .framer-PNhpn .framer-10i3t0m > :last-child, .framer-PNhpn .framer-r8hfm1 > :last-child, .framer-PNhpn .framer-ie4uuc > :last-child, .framer-PNhpn .framer-5046p2 > :last-child, .framer-PNhpn .framer-v4694u > :last-child, .framer-PNhpn .framer-h9e0r4 > :last-child, .framer-PNhpn .framer-1q9t7vi > :last-child { margin-right: 0px; } .framer-PNhpn .framer-20l0uu > * { margin: 0px; margin-left: calc(100px / 2); margin-right: calc(100px / 2); } .framer-PNhpn .framer-1f692t9 > *, .framer-PNhpn .framer-vz25qe > *, .framer-PNhpn .framer-1xdnfoc > *, .framer-PNhpn .framer-5ls4zp > *, .framer-PNhpn .framer-5046p2 > *, .framer-PNhpn .framer-v4694u > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-PNhpn .framer-1xd1ffe > *, .framer-PNhpn .framer-13f2s1t > *, .framer-PNhpn .framer-ude3gb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-PNhpn .framer-r8hfm1 > * { margin: 0px; margin-left: calc(409px / 2); margin-right: calc(409px / 2); } .framer-PNhpn .framer-rd1cq5 > *, .framer-PNhpn .framer-kanmmo > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-unx6dw { flex-wrap: wrap; height: 403px; width: 810px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-1nhwf0y { width: 800px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-20l0uu { gap: unset; height: 35%; justify-content: space-around; width: 696px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-1jhu8jm { flex: none; justify-content: flex-start; width: 168px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-1xd1ffe, .framer-PNhpn.framer-v-gqobf5 .framer-13f2s1t, .framer-PNhpn.framer-v-gqobf5 .framer-ude3gb, .framer-PNhpn.framer-v-1u29s6q .framer-1lud9ht { flex: 1 0 0px; width: 1px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-1fafr80 { width: 172px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-3lo1r2 { flex: none; width: 177px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-5ls4zp { flex-wrap: wrap; width: 334px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-r8hfm1 { flex: 1.5 0 0px; gap: 119px; width: 1px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-162e8pa { height: var(--framer-aspect-ratio-supported, 40px); width: 31px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-yiduof { height: var(--framer-aspect-ratio-supported, 34px); width: 31px; }",
    ".framer-PNhpn.framer-v-gqobf5 .framer-1ihnvef { height: var(--framer-aspect-ratio-supported, 36px); width: 42px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PNhpn.framer-v-gqobf5 .framer-20l0uu, .framer-PNhpn.framer-v-gqobf5 .framer-r8hfm1 { gap: 0px; } .framer-PNhpn.framer-v-gqobf5 .framer-20l0uu > *, .framer-PNhpn.framer-v-gqobf5 .framer-20l0uu > :first-child, .framer-PNhpn.framer-v-gqobf5 .framer-20l0uu > :last-child { margin: 0px; } .framer-PNhpn.framer-v-gqobf5 .framer-r8hfm1 > * { margin: 0px; margin-left: calc(119px / 2); margin-right: calc(119px / 2); } .framer-PNhpn.framer-v-gqobf5 .framer-r8hfm1 > :first-child { margin-left: 0px; } .framer-PNhpn.framer-v-gqobf5 .framer-r8hfm1 > :last-child { margin-right: 0px; } }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-unx6dw { gap: 32px; padding: 23px 18px 30px 18px; width: 390px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-1nhwf0y { width: 100%; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-20l0uu { gap: 14px; height: 56px; width: 371px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-1jhu8jm { flex: none; gap: 2px; width: min-content; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-1qz5fuj { height: var(--framer-aspect-ratio-supported, 25px); width: 25px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-1fafr80 { gap: 3px; width: min-content; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-pa7z85, .framer-PNhpn.framer-v-1u29s6q .framer-doeyre { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 25px); width: 25px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-3lo1r2 { flex: none; gap: 5px; width: min-content; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-5ls4zp { height: 28px; width: 162px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-tt3gr1-container, .framer-PNhpn.framer-v-1u29s6q .framer-53s7g3-container, .framer-PNhpn.framer-v-1u29s6q .framer-cikvu7-container, .framer-PNhpn.framer-v-1u29s6q .framer-h1cb3a-container, .framer-PNhpn.framer-v-1u29s6q .framer-1xvx2jb-container, .framer-PNhpn.framer-v-1u29s6q .framer-mz0r1e-container { height: var(--framer-aspect-ratio-supported, 33px); width: 30px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-u2mrcp { flex-wrap: wrap; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-r8hfm1 { flex: 1 0 0px; gap: 0px; order: 0; padding: 5px 0px 22px 0px; width: 1px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-ie4uuc { justify-content: center; width: 52%; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-lgy26o { overflow: hidden; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-rd1cq5 { align-content: end; align-items: end; gap: 0px; height: 21px; justify-content: flex-start; width: 170px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-kanmmo { flex-direction: row; justify-content: flex-start; width: 149px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-5046p2 { gap: 11px; padding: 0px 10px 0px 0px; width: 170px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-162e8pa { height: var(--framer-aspect-ratio-supported, 37px); width: 28px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-h9e0r4, .framer-PNhpn.framer-v-1u29s6q .framer-1q9t7vi { width: auto; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-yiduof { height: var(--framer-aspect-ratio-supported, 32px); width: 29px; }",
    ".framer-PNhpn.framer-v-1u29s6q .framer-1ihnvef { height: var(--framer-aspect-ratio-supported, 33px); width: 39px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PNhpn.framer-v-1u29s6q .framer-unx6dw, .framer-PNhpn.framer-v-1u29s6q .framer-20l0uu, .framer-PNhpn.framer-v-1u29s6q .framer-1jhu8jm, .framer-PNhpn.framer-v-1u29s6q .framer-1fafr80, .framer-PNhpn.framer-v-1u29s6q .framer-3lo1r2, .framer-PNhpn.framer-v-1u29s6q .framer-r8hfm1, .framer-PNhpn.framer-v-1u29s6q .framer-rd1cq5, .framer-PNhpn.framer-v-1u29s6q .framer-kanmmo, .framer-PNhpn.framer-v-1u29s6q .framer-5046p2 { gap: 0px; } .framer-PNhpn.framer-v-1u29s6q .framer-unx6dw > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-PNhpn.framer-v-1u29s6q .framer-unx6dw > :first-child, .framer-PNhpn.framer-v-1u29s6q .framer-rd1cq5 > :first-child { margin-top: 0px; } .framer-PNhpn.framer-v-1u29s6q .framer-unx6dw > :last-child, .framer-PNhpn.framer-v-1u29s6q .framer-rd1cq5 > :last-child { margin-bottom: 0px; } .framer-PNhpn.framer-v-1u29s6q .framer-20l0uu > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-PNhpn.framer-v-1u29s6q .framer-20l0uu > :first-child, .framer-PNhpn.framer-v-1u29s6q .framer-1jhu8jm > :first-child, .framer-PNhpn.framer-v-1u29s6q .framer-1fafr80 > :first-child, .framer-PNhpn.framer-v-1u29s6q .framer-3lo1r2 > :first-child, .framer-PNhpn.framer-v-1u29s6q .framer-r8hfm1 > :first-child, .framer-PNhpn.framer-v-1u29s6q .framer-kanmmo > :first-child, .framer-PNhpn.framer-v-1u29s6q .framer-5046p2 > :first-child { margin-left: 0px; } .framer-PNhpn.framer-v-1u29s6q .framer-20l0uu > :last-child, .framer-PNhpn.framer-v-1u29s6q .framer-1jhu8jm > :last-child, .framer-PNhpn.framer-v-1u29s6q .framer-1fafr80 > :last-child, .framer-PNhpn.framer-v-1u29s6q .framer-3lo1r2 > :last-child, .framer-PNhpn.framer-v-1u29s6q .framer-r8hfm1 > :last-child, .framer-PNhpn.framer-v-1u29s6q .framer-kanmmo > :last-child, .framer-PNhpn.framer-v-1u29s6q .framer-5046p2 > :last-child { margin-right: 0px; } .framer-PNhpn.framer-v-1u29s6q .framer-1jhu8jm > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } .framer-PNhpn.framer-v-1u29s6q .framer-1fafr80 > * { margin: 0px; margin-left: calc(3px / 2); margin-right: calc(3px / 2); } .framer-PNhpn.framer-v-1u29s6q .framer-3lo1r2 > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-PNhpn.framer-v-1u29s6q .framer-r8hfm1 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-PNhpn.framer-v-1u29s6q .framer-rd1cq5 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-PNhpn.framer-v-1u29s6q .framer-kanmmo > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PNhpn.framer-v-1u29s6q .framer-5046p2 > * { margin: 0px; margin-left: calc(11px / 2); margin-right: calc(11px / 2); } }",
  ],
  $r = Pe(Ds, Us, "framer-PNhpn"),
  Pt = $r;
$r.displayName = "Footer Dark";
$r.defaultProps = { height: 305, width: 1200 };
re($r, {
  variant: {
    options: ["wLxPJcMXV", "EJaYdKjSa", "cHpbJG1jP"],
    optionTitles: ["Desktop", "Tablet", "Phone"],
    title: "Variant",
    type: m.Enum,
  },
});
ke($r, [
  {
    family: "Inter",
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZ1rib2Bg-4.woff2",
    weight: "600",
  },
  {
    family: "Inter",
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2",
    weight: "500",
  },
  ...zs,
]);
var Os = ue(Te),
  Ys = De(t.div),
  Zs = [
    "VnzqVVRBo",
    "sB9ZnyRP1",
    "UTdU81l76",
    "BXkrs8fsx",
    "e2G4yydbD",
    "PVf4NxwTf",
  ];
var Xs = {
  BXkrs8fsx: "framer-v-11jtk16",
  e2G4yydbD: "framer-v-343m5z",
  PVf4NxwTf: "framer-v-40hkn5",
  sB9ZnyRP1: "framer-v-1f76c7g",
  UTdU81l76: "framer-v-19wl4sy",
  VnzqVVRBo: "framer-v-1pz7nci",
};
function dr(r, ...a) {
  let s = {};
  return (a?.forEach((i) => i && Object.assign(s, r[i])), s);
}
var Qs = {
    default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  },
  Pn = (r, a) => `translateY(-50%) ${a}`,
  rt = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  Ks = { opacity: 0, rotate: 0, scale: 0.5, transition: rt, x: 0, y: 0 },
  Tr = (r, a) => `perspective(1200px) ${a}`,
  Ir = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: rt,
    x: 0,
    y: 0,
  },
  Vr = { opacity: 0.001, rotate: 0, scale: 0.5, x: 0, y: 0 },
  Js = (r, a) => `translateX(-50%) ${a}`,
  Ar = { opacity: 1, rotate: 0, scale: 1.03, transition: rt },
  Br = { opacity: 1, rotate: 0, scale: 0.9, transition: rt, x: 22 },
  Mr = { opacity: 1, rotate: 0, scale: 1.05, transition: rt },
  $s = ({ value: r, children: a }) => {
    let s = Ne(ae),
      i = r ?? s.transition,
      c = O(() => ({ ...s, transition: i }), [JSON.stringify(i)]);
    return e(ae.Provider, { value: c, children: a });
  },
  el = {
    "Variant 1": "VnzqVVRBo",
    "Variant 2": "sB9ZnyRP1",
    "Variant 3": "UTdU81l76",
    "Variant 4": "BXkrs8fsx",
    "Variant 5": "e2G4yydbD",
    "Variant 6": "PVf4NxwTf",
  },
  rl = ({ height: r, id: a, width: s, ...i }) => {
    var c, d;
    return {
      ...i,
      variant:
        (d = (c = el[i.variant]) !== null && c !== void 0 ? c : i.variant) !==
          null && d !== void 0
          ? d
          : "VnzqVVRBo",
    };
  },
  tl = (r, a) => a.join("-") + r.layoutDependency,
  al = fe(function (r, a) {
    let { activeLocale: s } = Se(),
      { style: i, className: c, layoutId: d, variant: g, ...w } = rl(r),
      {
        baseVariant: p,
        classNames: l,
        gestureVariant: y,
        setGestureState: x,
        setVariant: P,
        transition: q,
        variants: C,
      } = Fe({
        cycleOrder: Zs,
        defaultVariant: "VnzqVVRBo",
        transitions: Qs,
        variant: g,
        variantClassNames: Xs,
      }),
      o = tl(r, C),
      { activeVariantCallback: u, delay: M } = wr(p),
      F = u(async (...I) => {
        P("VnzqVVRBo");
      }),
      S = u(async (...I) => {
        P("sB9ZnyRP1");
      }),
      j = u(async (...I) => {
        P("UTdU81l76");
      }),
      H = u(async (...I) => {
        P("BXkrs8fsx");
      }),
      G = u(async (...I) => {
        P("e2G4yydbD");
      }),
      R = u(async (...I) => {
        P("PVf4NxwTf");
      }),
      _ = B(null),
      Y = we();
    return e(ne, {
      id: d ?? Y,
      children: e(t.div, {
        initial: g,
        animate: C,
        onHoverStart: () => x({ isHovered: !0 }),
        onHoverEnd: () => x({ isHovered: !1 }),
        onTapStart: () => x({ isPressed: !0 }),
        onTap: () => x({ isPressed: !1 }),
        onTapCancel: () => x({ isPressed: !1 }),
        className: te("framer-nq3ng", l),
        style: { display: "contents" },
        children: e($s, {
          value: q,
          children: f(t.div, {
            ...w,
            className: te("framer-1pz7nci", c),
            "data-framer-name": "Variant 1",
            layoutDependency: o,
            layoutId: "VnzqVVRBo",
            ref: a ?? _,
            style: { ...i },
            ...dr(
              {
                BXkrs8fsx: { "data-framer-name": "Variant 4" },
                e2G4yydbD: { "data-framer-name": "Variant 5" },
                PVf4NxwTf: { "data-framer-name": "Variant 6" },
                sB9ZnyRP1: { "data-framer-name": "Variant 2" },
                UTdU81l76: { "data-framer-name": "Variant 3" },
              },
              p,
              y,
            ),
            children: [
              e(t.div, {
                className: "framer-1nidvjr",
                layoutDependency: o,
                layoutId: "J9f25cj8p",
                transformTemplate: Pn,
                children: f(Ys, {
                  __perspectiveFX: !1,
                  __smartComponentFX: !0,
                  __targetOpacity: 1,
                  animate: ie("animate", "1pribco", Ir, "1pz7nci"),
                  className: "framer-1pribco",
                  "data-framer-appear-id": "1pribco",
                  "data-framer-name": "Content 1",
                  "data-highlight": !0,
                  exit: Ks,
                  initial: ie("initial", "1pribco", Vr, "1pz7nci"),
                  layoutDependency: o,
                  layoutId: "hcAzVcYO4",
                  onTap: F,
                  transformTemplate: Ue("1pribco", Tr),
                  ...dr(
                    {
                      BXkrs8fsx: {
                        "data-framer-appear-id": "17f2mng",
                        animate: ie("animate", "17f2mng", Ir, "11jtk16"),
                        initial: ie("initial", "17f2mng", Vr, "11jtk16"),
                        transformTemplate: Ue("17f2mng", Tr),
                      },
                      e2G4yydbD: {
                        "data-framer-appear-id": "17o2a48",
                        animate: ie("animate", "17o2a48", Ir, "343m5z"),
                        initial: ie("initial", "17o2a48", Vr, "343m5z"),
                        transformTemplate: Ue("17o2a48", Tr),
                      },
                      PVf4NxwTf: {
                        "data-framer-appear-id": "1lgoct7",
                        animate: ie("animate", "1lgoct7", Ir, "40hkn5"),
                        initial: ie("initial", "1lgoct7", Vr, "40hkn5"),
                        transformTemplate: Ue("1lgoct7", Tr),
                      },
                      sB9ZnyRP1: {
                        "data-framer-appear-id": "yytf04",
                        animate: ie("animate", "yytf04", Ir, "1f76c7g"),
                        initial: ie("initial", "yytf04", Vr, "1f76c7g"),
                        transformTemplate: Ue("yytf04", Tr),
                      },
                      UTdU81l76: {
                        "data-framer-appear-id": "1u4lffq",
                        animate: ie("animate", "1u4lffq", Ir, "19wl4sy"),
                        initial: ie("initial", "1u4lffq", Vr, "19wl4sy"),
                        transformTemplate: Ue("1u4lffq", Tr),
                      },
                    },
                    p,
                    y,
                  ),
                  children: [
                    ![
                      "sB9ZnyRP1",
                      "UTdU81l76",
                      "BXkrs8fsx",
                      "e2G4yydbD",
                      "PVf4NxwTf",
                    ].includes(p) &&
                      e(b, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 562,
                          intrinsicWidth: 870,
                          pixelHeight: 562,
                          pixelWidth: 870,
                          sizes: "742px",
                          src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                          srcSet:
                            "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                        },
                        className: "framer-dzbc4l",
                        "data-framer-name": "1",
                        layoutDependency: o,
                        layoutId: "TYjqJOLv7",
                        children: e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e(t.p, {
                              style: {
                                "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                "--framer-font-family":
                                  '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                "--framer-font-size": "20px",
                                "--framer-font-weight": "600",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children:
                                "Attractive monthly promotional events for members to participate and redeem BIG bonuses",
                            }),
                          }),
                          className: "framer-udgtfk",
                          fonts: ["Inter-SemiBold"],
                          layoutDependency: o,
                          layoutId: "dqzAKTFUO",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    p === "sB9ZnyRP1" &&
                      e(b, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 562,
                          intrinsicWidth: 870,
                          pixelHeight: 562,
                          pixelWidth: 870,
                          src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                          srcSet:
                            "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                        },
                        className: "framer-1mgfez4",
                        "data-framer-name": "2",
                        layoutDependency: o,
                        layoutId: "hP7GuKY39",
                        ...dr(
                          {
                            sB9ZnyRP1: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 562,
                                intrinsicWidth: 870,
                                pixelHeight: 562,
                                pixelWidth: 870,
                                sizes: "742px",
                                src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                                srcSet:
                                  "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                              },
                            },
                          },
                          p,
                          y,
                        ),
                        children: e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e(t.p, {
                              style: {
                                "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                "--framer-font-family":
                                  '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                "--framer-font-size": "20px",
                                "--framer-font-weight": "600",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children:
                                "Dedicated Account Manager assigned to each member upon registration",
                            }),
                          }),
                          className: "framer-h143gx",
                          fonts: ["Inter-SemiBold"],
                          layoutDependency: o,
                          layoutId: "AbpOwdxA1",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    p === "UTdU81l76" &&
                      e(b, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 562,
                          intrinsicWidth: 870,
                          pixelHeight: 562,
                          pixelWidth: 870,
                          src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                          srcSet:
                            "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                        },
                        className: "framer-68vnq",
                        "data-framer-name": "3",
                        layoutDependency: o,
                        layoutId: "yBXPGgp4m",
                        ...dr(
                          {
                            UTdU81l76: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 562,
                                intrinsicWidth: 870,
                                pixelHeight: 562,
                                pixelWidth: 870,
                                sizes: "742px",
                                src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                                srcSet:
                                  "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                              },
                            },
                          },
                          p,
                          y,
                        ),
                        children: e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e(t.p, {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children:
                                  "24/7 Customer Service & Finance Officers",
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children: "to assist you on",
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-1iakedh, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children:
                                  "all issues and ensure your transactions go through smoothly",
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-14qxiz, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children: "(real human, not A.I. bot)",
                              }),
                            ],
                          }),
                          className: "framer-7y4hmv",
                          fonts: ["Inter-SemiBold"],
                          layoutDependency: o,
                          layoutId: "qw0LHRNWa",
                          style: {
                            "--extracted-14qxiz":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--extracted-1iakedh":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--extracted-2gxw0f":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--extracted-r6o4lv":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    p === "BXkrs8fsx" &&
                      e(b, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 562,
                          intrinsicWidth: 870,
                          pixelHeight: 562,
                          pixelWidth: 870,
                          src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                          srcSet:
                            "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                        },
                        className: "framer-i59ye5",
                        "data-framer-name": "4",
                        layoutDependency: o,
                        layoutId: "deo8dANk8",
                        ...dr(
                          {
                            BXkrs8fsx: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 562,
                                intrinsicWidth: 870,
                                pixelHeight: 562,
                                pixelWidth: 870,
                                sizes: "742px",
                                src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                                srcSet:
                                  "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                              },
                            },
                          },
                          p,
                          y,
                        ),
                        children: e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e(t.p, {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children:
                                  "All Transactions are processed within",
                              }),
                              e(t.p, {
                                style: {
                                  "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                  "--framer-font-family":
                                    '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-font-weight": "600",
                                  "--framer-line-height": "1.4em",
                                  "--framer-text-color":
                                    "var(--extracted-2gxw0f, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                },
                                children:
                                  "3 minutes. Various common payment gateway accepted",
                              }),
                            ],
                          }),
                          className: "framer-12mt6dy",
                          fonts: ["Inter-SemiBold"],
                          layoutDependency: o,
                          layoutId: "l8FAumrKy",
                          style: {
                            "--extracted-2gxw0f":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--extracted-r6o4lv":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    p === "e2G4yydbD" &&
                      e(b, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 562,
                          intrinsicWidth: 870,
                          pixelHeight: 562,
                          pixelWidth: 870,
                          src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                          srcSet:
                            "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                        },
                        className: "framer-abqlbo",
                        "data-framer-name": "5",
                        layoutDependency: o,
                        layoutId: "ztzMiWCzW",
                        ...dr(
                          {
                            e2G4yydbD: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 562,
                                intrinsicWidth: 870,
                                pixelHeight: 562,
                                pixelWidth: 870,
                                sizes: "742px",
                                src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                                srcSet:
                                  "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                              },
                            },
                          },
                          p,
                          y,
                        ),
                        children: e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e(t.p, {
                              style: {
                                "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                "--framer-font-family":
                                  '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                "--framer-font-size": "20px",
                                "--framer-font-weight": "600",
                                "--framer-line-height": "1.4em",
                                "--framer-text-color":
                                  "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                              },
                              children:
                                "Advanced data encryption system, ensuring all data and access remains confidential",
                            }),
                          }),
                          className: "framer-17xefr",
                          fonts: ["Inter-SemiBold"],
                          layoutDependency: o,
                          layoutId: "CDgA7Zv6l",
                          style: {
                            "--extracted-r6o4lv":
                              "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                            "--framer-paragraph-spacing": "0px",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    p === "PVf4NxwTf" &&
                      f(b, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 562,
                          intrinsicWidth: 870,
                          pixelHeight: 562,
                          pixelWidth: 870,
                          src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                          srcSet:
                            "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                        },
                        className: "framer-if05d0",
                        "data-framer-name": "6",
                        layoutDependency: o,
                        layoutId: "r1d5kBxCx",
                        ...dr(
                          {
                            PVf4NxwTf: {
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 562,
                                intrinsicWidth: 870,
                                pixelHeight: 562,
                                pixelWidth: 870,
                                sizes: "742px",
                                src: "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png",
                                srcSet:
                                  "https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png?scale-down-to=512 512w, https://framerusercontent.com/images/glnkaM9Igio8qfvnExomWSXi0.png 870w",
                              },
                            },
                          },
                          p,
                          y,
                        ),
                        children: [
                          e(h, {
                            __fromCanvasComponent: !0,
                            children: f(n, {
                              children: [
                                e(t.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                    "--framer-font-family":
                                      '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-font-weight": "600",
                                    "--framer-line-height": "1.4em",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                  },
                                  children: "Earn weekly commission",
                                }),
                                e(t.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                    "--framer-font-family":
                                      '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-font-weight": "600",
                                    "--framer-line-height": "1.4em",
                                    "--framer-text-color":
                                      "var(--extracted-2gxw0f, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                  },
                                  children: "as long as your friends",
                                }),
                                e(t.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                    "--framer-font-family":
                                      '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-font-weight": "600",
                                    "--framer-line-height": "1.4em",
                                    "--framer-text-color":
                                      "var(--extracted-1iakedh, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                  },
                                  children: "play on our site.",
                                }),
                                e(t.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                    "--framer-font-family":
                                      '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-font-weight": "600",
                                    "--framer-line-height": "1.4em",
                                    "--framer-text-color":
                                      "var(--extracted-14qxiz, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)))",
                                  },
                                  children: "(regardless they win or lose)",
                                }),
                              ],
                            }),
                            className: "framer-1xf4yj9",
                            fonts: ["Inter-SemiBold"],
                            layoutDependency: o,
                            layoutId: "HchqU8XKT",
                            style: {
                              "--extracted-14qxiz":
                                "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                              "--extracted-1iakedh":
                                "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                              "--extracted-2gxw0f":
                                "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                              "--extracted-r6o4lv":
                                "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(k, {
                            href: "https://sg.hiso33as.com/#/login",
                            openInNewTab: !0,
                            children: e(b, {
                              as: "a",
                              background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 23,
                                intrinsicWidth: 100,
                                pixelHeight: 46,
                                pixelWidth: 200,
                                src: "https://framerusercontent.com/images/BuJIYR8uncnOyJPFSPUUEEWz4I.gif",
                              },
                              className: "framer-1d6ky22 framer-hgffwk",
                              "data-framer-name": "associates_icon",
                              layoutDependency: o,
                              layoutId: "qVCiMW1k5",
                            }),
                          }),
                          e(t.div, {
                            className: "framer-1pwipuj-container",
                            layoutDependency: o,
                            layoutId: "VTz9LNjWG-container",
                            style: { rotate: -47 },
                            children: e(Te, {
                              color:
                                'var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) /* {"name":"Bright Gold"} */',
                              height: "100%",
                              iconSearch: "arrow",
                              iconSelection: "House",
                              id: "VTz9LNjWG",
                              layoutId: "VTz9LNjWG",
                              mirrored: !1,
                              selectByList: !1,
                              style: { height: "100%", width: "100%" },
                              weight: "regular",
                              width: "100%",
                            }),
                          }),
                          e(t.div, {
                            className: "framer-1voc5c4",
                            layoutDependency: o,
                            layoutId: "Bn9tMiCep",
                            style: {
                              backgroundColor:
                                "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                              borderBottomLeftRadius: 17,
                              borderBottomRightRadius: 17,
                              borderTopLeftRadius: 17,
                              borderTopRightRadius: 17,
                            },
                            transformTemplate: Js,
                            children: e(h, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e(t.p, {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "12px",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, var(--token-2dd0df26-542a-4acd-afbc-726f9204dd83, rgb(161, 5, 52)))",
                                  },
                                  children: "Click Me",
                                }),
                              }),
                              className: "framer-1grbqfe",
                              fonts: ["GF;Bebas Neue-regular"],
                              layoutDependency: o,
                              layoutId: "DABJeBBDJ",
                              style: {
                                "--extracted-r6o4lv":
                                  "var(--token-2dd0df26-542a-4acd-afbc-726f9204dd83, rgb(161, 5, 52))",
                                "--framer-link-text-color": "rgb(0, 153, 255)",
                                "--framer-link-text-decoration": "underline",
                                "--framer-paragraph-spacing": "0px",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              f(t.div, {
                className: "framer-lphxe5",
                "data-framer-name": "Navigation",
                layoutDependency: o,
                layoutId: "CR0Is4KRB",
                transformTemplate: Pn,
                children: [
                  e(t.div, {
                    className: "framer-f3jdcc",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "feFOv07rr",
                    onTap: F,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileHover: Ar,
                    whileTap: Br,
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "26px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(184, 142, 58))",
                          },
                          children: "Simply Play & Get Extra",
                        }),
                      }),
                      className: "framer-1wtgmq9",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "Ml23rfVlR",
                      style: {
                        "--extracted-r6o4lv": "rgb(184, 142, 58)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      whileHover: Mr,
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-s5mw42",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "Nwtrosur6",
                    onTap: S,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileHover: Ar,
                    whileTap: Br,
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "26px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(184, 142, 58))",
                          },
                          children: "personalized service",
                        }),
                      }),
                      className: "framer-1htbcyn",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "TQrokD9x0",
                      style: {
                        "--extracted-r6o4lv": "rgb(184, 142, 58)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      whileHover: Mr,
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-sbke39",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "CanHZoHMr",
                    onTap: j,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileHover: Ar,
                    whileTap: Br,
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "26px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(184, 142, 58))",
                          },
                          children: "top-notch support",
                        }),
                      }),
                      className: "framer-fh11z0",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "r22s7AoRg",
                      style: {
                        "--extracted-r6o4lv": "rgb(184, 142, 58)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      whileHover: Mr,
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-1kuzxgl",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "N5ENaYgbl",
                    onTap: H,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileHover: Ar,
                    whileTap: Br,
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "26px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(184, 142, 58))",
                          },
                          children: "efficient processes",
                        }),
                      }),
                      className: "framer-yccefe",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "P_888JA7i",
                      style: {
                        "--extracted-r6o4lv": "rgb(184, 142, 58)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      whileHover: Mr,
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-tz2ot7",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "hsdEpQ_86",
                    onTap: G,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileHover: Ar,
                    whileTap: Br,
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "26px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(184, 142, 58))",
                          },
                          children: "safe & secure policy",
                        }),
                      }),
                      className: "framer-5f4a31",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "aZGuqzZwi",
                      style: {
                        "--extracted-r6o4lv": "rgb(184, 142, 58)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      whileHover: Mr,
                      withExternalLayout: !0,
                    }),
                  }),
                  e(t.div, {
                    className: "framer-1sxhrj5",
                    "data-border": !0,
                    "data-highlight": !0,
                    layoutDependency: o,
                    layoutId: "hVJ_d6ErK",
                    onTap: R,
                    style: {
                      "--border-bottom-width": "2px",
                      "--border-color":
                        'var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) /* {"name":"Gold"} */',
                      "--border-left-width": "2px",
                      "--border-right-width": "2px",
                      "--border-style": "solid",
                      "--border-top-width": "2px",
                      backgroundColor:
                        "var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    whileHover: Ar,
                    whileTap: Br,
                    children: e(h, {
                      __fromCanvasComponent: !0,
                      children: e(n, {
                        children: e(t.p, {
                          style: {
                            "--font-selector": "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                            "--framer-font-family":
                              '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                            "--framer-font-size": "26px",
                            "--framer-text-alignment": "center",
                            "--framer-text-color":
                              "var(--extracted-r6o4lv, rgb(184, 142, 58))",
                          },
                          children: "SG #1 referral program",
                        }),
                      }),
                      className: "framer-1g7gh2e",
                      fonts: ["GF;Bebas Neue-regular"],
                      layoutDependency: o,
                      layoutId: "eO2rGeqeR",
                      style: {
                        "--extracted-r6o4lv": "rgb(184, 142, 58)",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        "--framer-paragraph-spacing": "0px",
                      },
                      verticalAlignment: "top",
                      whileHover: Mr,
                      withExternalLayout: !0,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  nl = [
    '.framer-nq3ng [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-nq3ng .framer-hgffwk { display: block; }",
    ".framer-nq3ng .framer-1pz7nci { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 535px; overflow: hidden; padding: 0px 0px 10px 0px; position: relative; width: 1264px; }",
    ".framer-nq3ng .framer-1nidvjr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 500px; overflow: visible; padding: 10px 10px 10px 10px; position: absolute; right: 0px; top: 50%; z-index: 1; }",
    ".framer-nq3ng .framer-1pribco { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 0px 100px 0px 0px; position: relative; width: auto; }",
    ".framer-nq3ng .framer-dzbc4l, .framer-nq3ng .framer-1mgfez4, .framer-nq3ng .framer-68vnq, .framer-nq3ng .framer-i59ye5, .framer-nq3ng .framer-abqlbo, .framer-nq3ng .framer-if05d0 { aspect-ratio: 1.5537190082644627 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 478px); overflow: visible; position: relative; width: 742px; }",
    ".framer-nq3ng .framer-udgtfk, .framer-nq3ng .framer-h143gx, .framer-nq3ng .framer-12mt6dy, .framer-nq3ng .framer-17xefr { bottom: 52px; flex: none; height: 255px; left: calc(46.36118598382751% - 262px / 2); position: absolute; white-space: pre-wrap; width: 262px; word-break: break-word; word-wrap: break-word; }",
    ".framer-nq3ng .framer-7y4hmv { bottom: 85px; flex: none; height: 255px; left: calc(46.36118598382751% - 262px / 2); position: absolute; white-space: pre-wrap; width: 262px; word-break: break-word; word-wrap: break-word; }",
    ".framer-nq3ng .framer-1xf4yj9 { bottom: 25px; flex: none; height: 255px; left: calc(47.43935309973048% - 278px / 2); position: absolute; white-space: pre-wrap; width: 278px; word-break: break-word; word-wrap: break-word; }",
    ".framer-nq3ng .framer-1d6ky22 { aspect-ratio: 4.3478260869565215 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); left: 212px; overflow: visible; position: absolute; text-decoration: none; top: 163px; width: 120px; }",
    ".framer-nq3ng .framer-1pwipuj-container { flex: none; height: 42px; left: calc(45.14824797843668% - 42px / 2); position: absolute; top: 120px; width: 42px; }",
    ".framer-nq3ng .framer-1voc5c4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 49%; overflow: visible; padding: 2px 4px 0px 4px; position: absolute; top: 140px; width: min-content; }",
    ".framer-nq3ng .framer-1grbqfe { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }",
    ".framer-nq3ng .framer-lphxe5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; left: 10px; overflow: hidden; padding: 0px 100px 0px 50px; position: absolute; top: 49%; width: 454px; z-index: 1; }",
    ".framer-nq3ng .framer-f3jdcc, .framer-nq3ng .framer-s5mw42, .framer-nq3ng .framer-sbke39, .framer-nq3ng .framer-1kuzxgl, .framer-nq3ng .framer-tz2ot7, .framer-nq3ng .framer-1sxhrj5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 50px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-nq3ng .framer-1wtgmq9, .framer-nq3ng .framer-1htbcyn, .framer-nq3ng .framer-fh11z0, .framer-nq3ng .framer-yccefe, .framer-nq3ng .framer-5f4a31, .framer-nq3ng .framer-1g7gh2e { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-nq3ng .framer-1pz7nci, .framer-nq3ng .framer-1nidvjr, .framer-nq3ng .framer-1pribco, .framer-nq3ng .framer-1voc5c4, .framer-nq3ng .framer-lphxe5, .framer-nq3ng .framer-f3jdcc, .framer-nq3ng .framer-s5mw42, .framer-nq3ng .framer-sbke39, .framer-nq3ng .framer-1kuzxgl, .framer-nq3ng .framer-tz2ot7, .framer-nq3ng .framer-1sxhrj5 { gap: 0px; } .framer-nq3ng .framer-1pz7nci > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-nq3ng .framer-1pz7nci > :first-child, .framer-nq3ng .framer-1nidvjr > :first-child, .framer-nq3ng .framer-1pribco > :first-child, .framer-nq3ng .framer-1voc5c4 > :first-child, .framer-nq3ng .framer-f3jdcc > :first-child, .framer-nq3ng .framer-s5mw42 > :first-child, .framer-nq3ng .framer-sbke39 > :first-child, .framer-nq3ng .framer-1kuzxgl > :first-child, .framer-nq3ng .framer-tz2ot7 > :first-child, .framer-nq3ng .framer-1sxhrj5 > :first-child { margin-left: 0px; } .framer-nq3ng .framer-1pz7nci > :last-child, .framer-nq3ng .framer-1nidvjr > :last-child, .framer-nq3ng .framer-1pribco > :last-child, .framer-nq3ng .framer-1voc5c4 > :last-child, .framer-nq3ng .framer-f3jdcc > :last-child, .framer-nq3ng .framer-s5mw42 > :last-child, .framer-nq3ng .framer-sbke39 > :last-child, .framer-nq3ng .framer-1kuzxgl > :last-child, .framer-nq3ng .framer-tz2ot7 > :last-child, .framer-nq3ng .framer-1sxhrj5 > :last-child { margin-right: 0px; } .framer-nq3ng .framer-1nidvjr > *, .framer-nq3ng .framer-1pribco > *, .framer-nq3ng .framer-1voc5c4 > *, .framer-nq3ng .framer-f3jdcc > *, .framer-nq3ng .framer-s5mw42 > *, .framer-nq3ng .framer-sbke39 > *, .framer-nq3ng .framer-1kuzxgl > *, .framer-nq3ng .framer-tz2ot7 > *, .framer-nq3ng .framer-1sxhrj5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-nq3ng .framer-lphxe5 > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-nq3ng .framer-lphxe5 > :first-child { margin-top: 0px; } .framer-nq3ng .framer-lphxe5 > :last-child { margin-bottom: 0px; } }",
  ],
  et = Pe(al, nl, "framer-nq3ng"),
  pa = et;
((et.displayName = "Click Change Pic"),
  (et.defaultProps = { height: 535, width: 1264 }),
  re(et, {
    variant: {
      options: [
        "VnzqVVRBo",
        "sB9ZnyRP1",
        "UTdU81l76",
        "BXkrs8fsx",
        "e2G4yydbD",
        "PVf4NxwTf",
      ],
      optionTitles: [
        "Variant 1",
        "Variant 2",
        "Variant 3",
        "Variant 4",
        "Variant 5",
        "Variant 6",
      ],
      title: "Variant",
      type: m.Enum,
    },
  }),
  ke(et, [
    {
      family: "Bebas Neue",
      style: "normal",
      url: "https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXooxWtrygbi49c.woff2",
      weight: "400",
    },
    ...Os,
  ]));
var ha = De(b),
  il = ue(oa),
  kn = De(L),
  kt = De(t.div),
  ol = ue(fa),
  sl = ue(pa),
  ll = ue(Rr),
  fl = ue(rr),
  cl = ue(xe),
  ml = ue(cr),
  dl = ue(me),
  pl = ue(na),
  hl = ue(ia),
  gl = ue(Oe),
  ul = ue(Pt);
var xl = {
    e5B24uv9A: "(min-width: 810px) and (max-width: 1199px)",
    eEbqag_vU: "(max-width: 427px)",
    RrXQBC2EQ: "(min-width: 428px) and (max-width: 809px)",
    WQLkyLRf1: "(min-width: 1200px)",
  },
  tt = () => typeof document < "u",
  Cn = "framer-qh6S5",
  yl = {
    e5B24uv9A: "framer-v-5n5ezt",
    eEbqag_vU: "framer-v-1hbve8q",
    RrXQBC2EQ: "framer-v-zqyngv",
    WQLkyLRf1: "framer-v-72rtr7",
  },
  bl = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: -150,
    y: 0,
  },
  at = { damping: 30, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  ga = (r, a) => `translateY(-50%) ${a}`,
  Ct = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: at,
    x: 0,
    y: 0,
  },
  qt = {
    opacity: 0.001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.5,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 50,
  },
  vl = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  wl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.8,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Sl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 104,
    y: 73,
  },
  qn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 24,
    y: -11,
  },
  Pl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 66,
    y: 45,
  },
  kl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: -80,
    y: 61,
  },
  Rn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: -68,
    y: 26,
  },
  Cl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: -50,
    y: 30,
  },
  ql = (r, a) => `translate(-50%, -50%) ${a}`,
  Rl = (r, a) => `translateX(-50%) ${a}`,
  Nl = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1.3,
    skewX: 0,
    skewY: 0,
    transition: at,
  },
  z1 = ct(),
  Fl = {
    "Pro Max": "RrXQBC2EQ",
    Desktop: "WQLkyLRf1",
    Phone: "eEbqag_vU",
    Tablet: "e5B24uv9A",
  },
  Tl = ({ height: r, id: a, width: s, ...i }) => {
    var c, d;
    return {
      ...i,
      variant:
        (d = (c = Fl[i.variant]) !== null && c !== void 0 ? c : i.variant) !==
          null && d !== void 0
          ? d
          : "WQLkyLRf1",
    };
  },
  Il = fe(function (r, a) {
    let { activeLocale: s, setLocale: i } = Se(),
      { style: c, className: d, layoutId: g, variant: w, ...p } = Tl(r);
    (U(() => {
      let G = ct(void 0, s);
      if (G.robots) {
        let R = document.querySelector('meta[name="robots"]');
        R
          ? R.setAttribute("content", G.robots)
          : ((R = document.createElement("meta")),
            R.setAttribute("name", "robots"),
            R.setAttribute("content", G.robots),
            document.head.appendChild(R));
      }
    }, [void 0, s]),
      Va(() => {
        let G = ct(void 0, s);
        if (((document.title = G.title || ""), G.viewport)) {
          var R;
          (R = document.querySelector('meta[name="viewport"]')) === null ||
            R === void 0 ||
            R.setAttribute("content", G.viewport);
        }
        let _ = G.bodyClassName;
        if (_) {
          let Y = document.body;
          (Y.classList.forEach(
            (I) => I.startsWith("framer-body-") && Y.classList.remove(I),
          ),
            Y.classList.add(`${G.bodyClassName}-framer-qh6S5`));
        }
        return () => {
          _ &&
            document.body.classList.remove(`${G.bodyClassName}-framer-qh6S5`);
        };
      }, [void 0, s]));
    let [l, y] = Ga(w, xl, !1),
      x = void 0,
      P = B(null),
      q = () => (tt() ? !["eEbqag_vU", "RrXQBC2EQ"].includes(l) : !0),
      C = () => !tt() || l === "eEbqag_vU",
      o = () => !tt() || l === "RrXQBC2EQ",
      u = Aa("lQwvt9U0q"),
      M = B(null),
      F = () => !!(!tt() || ["eEbqag_vU", "RrXQBC2EQ"].includes(l)),
      S = () => (tt() ? l !== "RrXQBC2EQ" : !0),
      j = we(),
      H = [];
    return (
      Ma({}),
      e(za.Provider, {
        value: { primaryVariantId: "WQLkyLRf1", variantClassNames: yl },
        children: f(ne, {
          id: g ?? j,
          children: [
            e(z, {
              breakpoint: l,
              overrides: {
                eEbqag_vU: {
                  background: {
                    alt: "",
                    fit: "stretch",
                    intrinsicHeight: 5175,
                    intrinsicWidth: 390,
                    pixelHeight: 5175,
                    pixelWidth: 390,
                    positionX: "center",
                    positionY: "center",
                    src: "https://framerusercontent.com/images/Bj5HIx9hPMuBG5Tm5yF4Md6eKkA.jpg",
                  },
                },
                RrXQBC2EQ: {
                  background: {
                    alt: "",
                    fit: "stretch",
                    intrinsicHeight: 5175,
                    intrinsicWidth: 390,
                    pixelHeight: 5175,
                    pixelWidth: 390,
                    positionX: "center",
                    positionY: "center",
                    src: "https://framerusercontent.com/images/Bj5HIx9hPMuBG5Tm5yF4Md6eKkA.jpg",
                  },
                },
              },
              children: f(b, {
                ...p,
                background: {
                  alt: "",
                  fit: "stretch",
                  intrinsicHeight: 5e3,
                  intrinsicWidth: 1200,
                  pixelHeight: 5e3,
                  pixelWidth: 1200,
                  positionX: "center",
                  positionY: "center",
                  sizes: "100vw",
                  src: "https://framerusercontent.com/images/MDcboGwjL8BVj0BY09i0n40VRQ.jpg?lossless=1",
                  srcSet:
                    "https://framerusercontent.com/images/MDcboGwjL8BVj0BY09i0n40VRQ.jpg?scale-down-to=4096&lossless=1 983w,https://framerusercontent.com/images/MDcboGwjL8BVj0BY09i0n40VRQ.jpg?lossless=1 1200w",
                },
                className: te(Cn, ...H, "framer-72rtr7", d),
                ref: a ?? P,
                style: { ...c },
                children: [
                  f("div", {
                    className: "framer-mzicto",
                    "data-framer-name": "Animated Image + Text",
                    name: "Animated Image + Text",
                    children: [
                      f("div", {
                        className: "framer-12s1rcb",
                        children: [
                          e("div", {
                            className: "framer-16pi3b7",
                            children:
                              q() &&
                              e(ha, {
                                __framer__animate: { transition: at },
                                __framer__animateOnce: !1,
                                __framer__enter: bl,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 277,
                                  intrinsicWidth: 285.5,
                                  pixelHeight: 554,
                                  pixelWidth: 571,
                                  sizes: "619px",
                                  src: "https://framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png?scale-down-to=512 512w,https://framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png 571w",
                                },
                                className:
                                  "framer-362wm6 hidden-1hbve8q hidden-zqyngv",
                                "data-framer-name": "Hero_Girl",
                                name: "Hero_Girl",
                                style: { transformPerspective: 1200 },
                              }),
                          }),
                          C() &&
                            e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  "data-framer-appear-id": "1vas95h",
                                  animate: ie(
                                    "animate",
                                    "1vas95h",
                                    Ct,
                                    "1hbve8q",
                                  ),
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 277,
                                    intrinsicWidth: 285.5,
                                    pixelHeight: 554,
                                    pixelWidth: 571,
                                    sizes: "649px",
                                    src: "https://framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png?scale-down-to=512",
                                    srcSet:
                                      "https://framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png?scale-down-to=512 512w,https://framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png 571w",
                                  },
                                  initial: ie(
                                    "initial",
                                    "1vas95h",
                                    qt,
                                    "1hbve8q",
                                  ),
                                  transformTemplate: Ue("1vas95h", ga),
                                },
                              },
                              children: e(b, {
                                animate: ie("animate", "faus57", Ct, "72rtr7"),
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 277,
                                  intrinsicWidth: 285.5,
                                  pixelHeight: 554,
                                  pixelWidth: 571,
                                  src: "https://framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png?scale-down-to=512",
                                  srcSet:
                                    "https://framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png?scale-down-to=512 512w,https://framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png 571w",
                                },
                                className:
                                  "framer-faus57 hidden-72rtr7 hidden-5n5ezt hidden-zqyngv",
                                "data-framer-appear-id": "faus57",
                                "data-framer-name": "Hero_Girl",
                                initial: ie("initial", "faus57", qt, "72rtr7"),
                                name: "Hero_Girl",
                                style: { transformPerspective: 1200 },
                                transformTemplate: Ue("faus57", ga),
                              }),
                            }),
                          o() &&
                            e(z, {
                              breakpoint: l,
                              overrides: {
                                RrXQBC2EQ: {
                                  "data-framer-appear-id": "rcx9ke",
                                  animate: ie(
                                    "animate",
                                    "rcx9ke",
                                    Ct,
                                    "zqyngv",
                                  ),
                                  initial: ie(
                                    "initial",
                                    "rcx9ke",
                                    qt,
                                    "zqyngv",
                                  ),
                                },
                              },
                              children: e(b, {
                                animate: ie("animate", "y6ybj8", Ct, "72rtr7"),
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 277,
                                  intrinsicWidth: 285.5,
                                  pixelHeight: 554,
                                  pixelWidth: 571,
                                  src: "https://framerusercontent.com/images/f5rCZIPfJIqwxYy3MvR5UfKCcA4.png",
                                },
                                className:
                                  "framer-y6ybj8 hidden-72rtr7 hidden-1hbve8q hidden-5n5ezt",
                                "data-framer-appear-id": "y6ybj8",
                                "data-framer-name": "Hero_Girl",
                                initial: ie("initial", "y6ybj8", qt, "72rtr7"),
                                name: "Hero_Girl",
                                style: { transformPerspective: 1200 },
                              }),
                            }),
                        ],
                      }),
                      e("div", {
                        className: "framer-1q3qk04",
                        "data-framer-name": "Hero Banner",
                        id: u,
                        name: "Hero Banner",
                        ref: M,
                        children: f("div", {
                          className: "framer-1ox81gm",
                          children: [
                            e("div", {
                              className: "framer-1vvur12",
                              children: e(z, {
                                breakpoint: l,
                                overrides: {
                                  e5B24uv9A: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 300,
                                      intrinsicWidth: 1200,
                                      pixelHeight: 600,
                                      pixelWidth: 2400,
                                      sizes: "392px",
                                      src: "https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=2048",
                                      srcSet:
                                        "https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=1024 1024w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=2048 2048w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif 2400w",
                                    },
                                  },
                                  eEbqag_vU: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 300,
                                      intrinsicWidth: 1200,
                                      pixelHeight: 600,
                                      pixelWidth: 2400,
                                      sizes: "218px",
                                      src: "https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=2048",
                                      srcSet:
                                        "https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=1024 1024w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=2048 2048w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif 2400w",
                                    },
                                  },
                                  RrXQBC2EQ: {
                                    background: {
                                      alt: "",
                                      fit: "fill",
                                      intrinsicHeight: 300,
                                      intrinsicWidth: 1200,
                                      pixelHeight: 600,
                                      pixelWidth: 2400,
                                      sizes: "218px",
                                      src: "https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=2048",
                                      srcSet:
                                        "https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=1024 1024w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=2048 2048w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif 2400w",
                                    },
                                  },
                                },
                                children: e(b, {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 300,
                                    intrinsicWidth: 1200,
                                    pixelHeight: 600,
                                    pixelWidth: 2400,
                                    sizes: "375px",
                                    src: "https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=2048",
                                    srcSet:
                                      "https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=512 512w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=1024 1024w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif?scale-down-to=2048 2048w,https://framerusercontent.com/images/TWrlzXqrT4xzMgVCzC2tDEa6dIg.gif 2400w",
                                  },
                                  className: "framer-1viptli",
                                  "data-framer-name":
                                    "$0624d1_1c6ad5f61485407a870f97361f43d870_mv2",
                                  name: "$0624d1_1c6ad5f61485407a870f97361f43d870_mv2",
                                }),
                              }),
                            }),
                            e("div", {
                              className: "framer-1t8pf4x",
                              children: e(z, {
                                breakpoint: l,
                                overrides: {
                                  eEbqag_vU: {
                                    children: e(n, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7QmFrYmFrIE9uZS1yZWd1bGFy",
                                          "--framer-font-family":
                                            '"Bakbak One", sans-serif',
                                          "--framer-font-size": "11px",
                                        },
                                        children: e("span", {
                                          "data-text-fill": "true",
                                          style: {
                                            backgroundImage:
                                              "linear-gradient(0deg, rgb(255, 255, 255) 0%, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) 100%)",
                                          },
                                          children:
                                            "THE EPITOME OF HIGH SOCIETY & SECURITY",
                                        }),
                                      }),
                                    }),
                                  },
                                  RrXQBC2EQ: {
                                    children: e(n, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "R0Y7QmFrYmFrIE9uZS1yZWd1bGFy",
                                          "--framer-font-family":
                                            '"Bakbak One", sans-serif',
                                          "--framer-font-size": "11px",
                                        },
                                        children: e("span", {
                                          "data-text-fill": "true",
                                          style: {
                                            backgroundImage:
                                              "linear-gradient(0deg, rgb(255, 255, 255) 0%, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) 100%)",
                                          },
                                          children:
                                            "THE EPITOME OF HIGH SOCIETY & SECURITY",
                                        }),
                                      }),
                                    }),
                                  },
                                },
                                children: e(h, {
                                  __fromCanvasComponent: !0,
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "R0Y7QmFrYmFrIE9uZS1yZWd1bGFy",
                                        "--framer-font-family":
                                          '"Bakbak One", sans-serif',
                                        "--framer-font-size": "18px",
                                      },
                                      children: e("span", {
                                        "data-text-fill": "true",
                                        style: {
                                          backgroundImage:
                                            "linear-gradient(0deg, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) 0%, var(--token-36648663-04f9-4916-b8de-3ecfd22528ab, rgb(255, 224, 163)) 100%)",
                                        },
                                        children:
                                          "THE EPITOME OF HIGH SOCIETY & SECURITY",
                                      }),
                                    }),
                                  }),
                                  className: "framer-s2i37l",
                                  fonts: ["GF;Bakbak One-regular"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            f("div", {
                              className: "framer-1o36qgc",
                              children: [
                                e(z, {
                                  breakpoint: l,
                                  overrides: {
                                    e5B24uv9A: {
                                      children: f(n, {
                                        children: [
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                              "--framer-font-family":
                                                '"Technor", "Technor Placeholder", sans-serif',
                                              "--framer-font-size": "84px",
                                              "--framer-font-weight": "600",
                                              "--framer-line-height": "0.8em",
                                              "--framer-text-color":
                                                "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                            },
                                            children: e("span", {
                                              "data-text-fill": "true",
                                              style: {
                                                backgroundImage:
                                                  "linear-gradient(46deg, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) 23.25978322072072%, rgb(255, 216, 138) 46.19228603603604%, rgb(214, 172, 88) 53.686303490990994%, rgb(166, 125, 45) 63.37098817567568%, rgba(184, 142, 58, 1) 85.26006475225223%)",
                                              },
                                              children: "JOIN THE",
                                            }),
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                              "--framer-font-family":
                                                '"Technor", "Technor Placeholder", sans-serif',
                                              "--framer-font-size": "116px",
                                              "--framer-font-weight": "600",
                                              "--framer-line-height": "0.8em",
                                              "--framer-text-color":
                                                "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                            },
                                            children: e("span", {
                                              "data-text-fill": "true",
                                              style: {
                                                backgroundImage:
                                                  "linear-gradient(46deg, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) 23.25978322072072%, rgb(255, 216, 138) 46.19228603603604%, rgb(214, 172, 88) 53.686303490990994%, rgb(166, 125, 45) 63.37098817567568%, rgba(184, 142, 58, 1) 85.26006475225223%)",
                                              },
                                              children: "ELITES",
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                    eEbqag_vU: {
                                      children: f(n, {
                                        children: [
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                              "--framer-font-family":
                                                '"Technor", "Technor Placeholder", sans-serif',
                                              "--framer-font-size": "60px",
                                              "--framer-font-weight": "600",
                                              "--framer-line-height": "0.8em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                            },
                                            children: e("span", {
                                              "data-text-fill": "true",
                                              style: {
                                                backgroundImage:
                                                  "linear-gradient(46deg, rgb(222, 172, 73) 23.2598%, rgb(255, 216, 138) 46.1923%, rgb(214, 172, 88) 53.686299999999996%, rgb(184, 136, 42) 63.371%, rgb(227, 173, 66) 75.2816%, var(--token-fbe37a84-999e-46c2-8ba1-03963d6a6ea9, rgb(255, 218, 145)) 84.8923%)",
                                              },
                                              children: "JOIN THE",
                                            }),
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                              "--framer-font-family":
                                                '"Technor", "Technor Placeholder", sans-serif',
                                              "--framer-font-size": "79px",
                                              "--framer-font-weight": "600",
                                              "--framer-line-height": "0.8em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                            },
                                            children: e("span", {
                                              "data-text-fill": "true",
                                              style: {
                                                backgroundImage:
                                                  "linear-gradient(46deg, rgb(222, 172, 73) 23.2598%, rgb(255, 216, 138) 46.1923%, rgb(214, 172, 88) 53.686299999999996%, rgb(184, 136, 42) 63.371%, rgb(227, 173, 66) 75.2816%, var(--token-fbe37a84-999e-46c2-8ba1-03963d6a6ea9, rgb(255, 218, 145)) 84.8923%)",
                                              },
                                              children: "ELITES",
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                    RrXQBC2EQ: {
                                      children: f(n, {
                                        children: [
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                              "--framer-font-family":
                                                '"Technor", "Technor Placeholder", sans-serif',
                                              "--framer-font-size": "60px",
                                              "--framer-font-weight": "600",
                                              "--framer-line-height": "0.8em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                            },
                                            children: e("span", {
                                              "data-text-fill": "true",
                                              style: {
                                                backgroundImage:
                                                  "linear-gradient(46deg, rgb(222, 172, 73) 23.2598%, rgb(255, 216, 138) 46.1923%, rgb(214, 172, 88) 53.686299999999996%, rgb(184, 136, 42) 63.371%, rgb(227, 173, 66) 75.2816%, var(--token-fbe37a84-999e-46c2-8ba1-03963d6a6ea9, rgb(255, 218, 145)) 84.8923%)",
                                              },
                                              children: "JOIN THE",
                                            }),
                                          }),
                                          e("p", {
                                            style: {
                                              "--font-selector":
                                                "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                              "--framer-font-family":
                                                '"Technor", "Technor Placeholder", sans-serif',
                                              "--framer-font-size": "79px",
                                              "--framer-font-weight": "600",
                                              "--framer-line-height": "0.8em",
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                            },
                                            children: e("span", {
                                              "data-text-fill": "true",
                                              style: {
                                                backgroundImage:
                                                  "linear-gradient(46deg, rgb(222, 172, 73) 23.2598%, rgb(255, 216, 138) 46.1923%, rgb(214, 172, 88) 53.686299999999996%, rgb(184, 136, 42) 63.371%, rgb(227, 173, 66) 75.2816%, var(--token-fbe37a84-999e-46c2-8ba1-03963d6a6ea9, rgb(255, 218, 145)) 84.8923%)",
                                              },
                                              children: "ELITES",
                                            }),
                                          }),
                                        ],
                                      }),
                                    },
                                  },
                                  children: e(h, {
                                    __fromCanvasComponent: !0,
                                    children: f(n, {
                                      children: [
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                            "--framer-font-family":
                                              '"Technor", "Technor Placeholder", sans-serif',
                                            "--framer-font-size": "92px",
                                            "--framer-font-weight": "600",
                                            "--framer-line-height": "0.8em",
                                            "--framer-text-color":
                                              "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                          },
                                          children: e("span", {
                                            "data-text-fill": "true",
                                            style: {
                                              backgroundImage:
                                                "linear-gradient(46deg, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) 23.25978322072072%, rgb(255, 216, 138) 46.19228603603604%, rgb(214, 172, 88) 53.686303490990994%, rgb(166, 125, 45) 63.37098817567568%, rgba(184, 142, 58, 1) 85.26006475225223%)",
                                            },
                                            children: "JOIN THE",
                                          }),
                                        }),
                                        e("p", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                            "--framer-font-family":
                                              '"Technor", "Technor Placeholder", sans-serif',
                                            "--framer-font-size": "122px",
                                            "--framer-font-weight": "600",
                                            "--framer-line-height": "0.8em",
                                            "--framer-text-color":
                                              "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                          },
                                          children: e("span", {
                                            "data-text-fill": "true",
                                            style: {
                                              backgroundImage:
                                                "linear-gradient(46deg, var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58)) 23.25978322072072%, rgb(255, 216, 138) 46.19228603603604%, rgb(214, 172, 88) 53.686303490990994%, rgb(166, 125, 45) 63.37098817567568%, rgba(184, 142, 58, 1) 85.26006475225223%)",
                                            },
                                            children: "ELITES",
                                          }),
                                        }),
                                      ],
                                    }),
                                    className: "framer-ipyosv",
                                    fonts: ["FS;Technor-semibold"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                                e(z, {
                                  breakpoint: l,
                                  overrides: {
                                    eEbqag_vU: {
                                      children: e(n, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                            "--framer-font-family":
                                              '"Technor", "Technor Placeholder", sans-serif',
                                            "--framer-font-size": "24px",
                                            "--framer-font-weight": "600",
                                            "--framer-line-height": "0.8em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "var(--token-fbe37a84-999e-46c2-8ba1-03963d6a6ea9, rgb(255, 218, 145))",
                                          },
                                          children: e("span", {
                                            "data-text-fill": "true",
                                            style: {
                                              backgroundImage:
                                                "linear-gradient(41deg, var(--token-fbe37a84-999e-46c2-8ba1-03963d6a6ea9, rgb(255, 218, 145)) 22.710796734234233%, rgb(209, 162, 67) 55.336528512586916%, rgb(242, 220, 174) 77.93438826853863%)",
                                            },
                                            children: "Game with the Leader",
                                          }),
                                        }),
                                      }),
                                    },
                                    RrXQBC2EQ: {
                                      children: e(n, {
                                        children: e("p", {
                                          style: {
                                            "--font-selector":
                                              "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                            "--framer-font-family":
                                              '"Technor", "Technor Placeholder", sans-serif',
                                            "--framer-font-size": "24px",
                                            "--framer-font-weight": "600",
                                            "--framer-line-height": "0.8em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "var(--token-fbe37a84-999e-46c2-8ba1-03963d6a6ea9, rgb(255, 218, 145))",
                                          },
                                          children: e("span", {
                                            "data-text-fill": "true",
                                            style: {
                                              backgroundImage:
                                                "linear-gradient(41deg, var(--token-fbe37a84-999e-46c2-8ba1-03963d6a6ea9, rgb(255, 218, 145)) 22.710796734234233%, rgb(209, 162, 67) 55.336528512586916%, rgb(242, 220, 174) 77.93438826853863%)",
                                            },
                                            children: "Game with the Leader",
                                          }),
                                        }),
                                      }),
                                    },
                                  },
                                  children: e(h, {
                                    __fromCanvasComponent: !0,
                                    children: e(n, {
                                      children: e("p", {
                                        style: {
                                          "--font-selector":
                                            "RlM7VGVjaG5vci1zZW1pYm9sZA==",
                                          "--framer-font-family":
                                            '"Technor", "Technor Placeholder", sans-serif',
                                          "--framer-font-size": "36px",
                                          "--framer-font-weight": "600",
                                          "--framer-line-height": "0.8em",
                                          "--framer-text-color":
                                            "rgb(184, 142, 58)",
                                        },
                                        children: e("span", {
                                          "data-text-fill": "true",
                                          style: {
                                            backgroundImage:
                                              "linear-gradient(90deg, var(--token-fbe37a84-999e-46c2-8ba1-03963d6a6ea9, rgb(255, 218, 145)) 0%, rgb(191, 150, 44) 22.682344356363373%, rgb(199, 158, 51) 39.189189189189186%, rgba(234, 196, 119, 1) 89.76251285283094%, rgb(190, 149, 43) 579.18361581921%)",
                                          },
                                          children: "Game with the Leader",
                                        }),
                                      }),
                                    }),
                                    className: "framer-yiw21v",
                                    fonts: ["FS;Technor-semibold"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            e("div", {
                              className: "framer-st74yz",
                              children: e(E, {
                                children: e(kn, {
                                  __framer__loop: wl,
                                  __framer__loopEffectEnabled: !0,
                                  __framer__loopRepeatDelay: 0.5,
                                  __framer__loopRepeatType: "mirror",
                                  __framer__loopTransition: vl,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: "framer-1iw41ok-container",
                                  children: e(z, {
                                    breakpoint: l,
                                    overrides: {
                                      eEbqag_vU: {
                                        style: { height: "100%" },
                                        variant: "HW16w2Awx",
                                      },
                                      RrXQBC2EQ: {
                                        style: { height: "100%" },
                                        variant: "HW16w2Awx",
                                      },
                                    },
                                    children: e(oa, {
                                      height: "100%",
                                      id: "Qs2af4XcG",
                                      iG3zzSBTw: "EXPERIENCE NOW!",
                                      layoutId: "Qs2af4XcG",
                                      style: { height: "100%", width: "100%" },
                                      variant: "vsT4gZPdJ",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  e(z, {
                    breakpoint: l,
                    overrides: {
                      e5B24uv9A: {
                        __framer__scrollDirection: {
                          direction: "down",
                          target: Pl,
                        },
                      },
                      eEbqag_vU: {
                        __framer__scrollDirection: {
                          direction: "down",
                          target: qn,
                        },
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 230,
                          intrinsicWidth: 324,
                          pixelHeight: 460,
                          pixelWidth: 648,
                          sizes: "251px",
                          src: "https://framerusercontent.com/images/QP0IKTTuP7gnhAm3nf07PyOg934.png?scale-down-to=512",
                          srcSet:
                            "https://framerusercontent.com/images/QP0IKTTuP7gnhAm3nf07PyOg934.png?scale-down-to=512 512w,https://framerusercontent.com/images/QP0IKTTuP7gnhAm3nf07PyOg934.png 648w",
                        },
                      },
                      RrXQBC2EQ: {
                        __framer__scrollDirection: {
                          direction: "down",
                          target: qn,
                        },
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 230,
                          intrinsicWidth: 324,
                          pixelHeight: 460,
                          pixelWidth: 648,
                          sizes: "251px",
                          src: "https://framerusercontent.com/images/QP0IKTTuP7gnhAm3nf07PyOg934.png?scale-down-to=512",
                          srcSet:
                            "https://framerusercontent.com/images/QP0IKTTuP7gnhAm3nf07PyOg934.png?scale-down-to=512 512w,https://framerusercontent.com/images/QP0IKTTuP7gnhAm3nf07PyOg934.png 648w",
                        },
                      },
                    },
                    children: e(ha, {
                      __framer__animate: { transition: at },
                      __framer__animateOnce: !1,
                      __framer__scrollDirection: {
                        direction: "down",
                        target: Sl,
                      },
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 230,
                        intrinsicWidth: 324,
                        pixelHeight: 460,
                        pixelWidth: 648,
                        sizes: "447px",
                        src: "https://framerusercontent.com/images/QP0IKTTuP7gnhAm3nf07PyOg934.png?scale-down-to=512",
                        srcSet:
                          "https://framerusercontent.com/images/QP0IKTTuP7gnhAm3nf07PyOg934.png?scale-down-to=512 512w,https://framerusercontent.com/images/QP0IKTTuP7gnhAm3nf07PyOg934.png 648w",
                      },
                      className: "framer-k0lbhu",
                      "data-framer-name": "Deco1",
                      name: "Deco1",
                      style: { transformPerspective: 1200 },
                    }),
                  }),
                  e(z, {
                    breakpoint: l,
                    overrides: {
                      e5B24uv9A: {
                        __framer__scrollDirection: {
                          direction: "down",
                          target: Cl,
                        },
                      },
                      eEbqag_vU: {
                        __framer__scrollDirection: {
                          direction: "down",
                          target: Rn,
                        },
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 303,
                          intrinsicWidth: 315,
                          pixelHeight: 606,
                          pixelWidth: 630,
                          sizes: "216px",
                          src: "https://framerusercontent.com/images/B0io7wznnr3GCZLEurT50UBcA.png?scale-down-to=512",
                          srcSet:
                            "https://framerusercontent.com/images/B0io7wznnr3GCZLEurT50UBcA.png?scale-down-to=512 512w,https://framerusercontent.com/images/B0io7wznnr3GCZLEurT50UBcA.png 630w",
                        },
                      },
                      RrXQBC2EQ: {
                        __framer__scrollDirection: {
                          direction: "down",
                          target: Rn,
                        },
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 303,
                          intrinsicWidth: 315,
                          pixelHeight: 606,
                          pixelWidth: 630,
                          sizes: "216px",
                          src: "https://framerusercontent.com/images/B0io7wznnr3GCZLEurT50UBcA.png?scale-down-to=512",
                          srcSet:
                            "https://framerusercontent.com/images/B0io7wznnr3GCZLEurT50UBcA.png?scale-down-to=512 512w,https://framerusercontent.com/images/B0io7wznnr3GCZLEurT50UBcA.png 630w",
                        },
                      },
                    },
                    children: e(ha, {
                      __framer__animate: { transition: at },
                      __framer__animateOnce: !1,
                      __framer__scrollDirection: {
                        direction: "down",
                        target: kl,
                      },
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __targetOpacity: 1,
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 303,
                        intrinsicWidth: 315,
                        pixelHeight: 606,
                        pixelWidth: 630,
                        sizes: "315px",
                        src: "https://framerusercontent.com/images/B0io7wznnr3GCZLEurT50UBcA.png?scale-down-to=512",
                        srcSet:
                          "https://framerusercontent.com/images/B0io7wznnr3GCZLEurT50UBcA.png?scale-down-to=512 512w,https://framerusercontent.com/images/B0io7wznnr3GCZLEurT50UBcA.png 630w",
                      },
                      className: "framer-i78ybq",
                      "data-framer-name": "Deco2",
                      name: "Deco2",
                      style: { transformPerspective: 1200 },
                    }),
                  }),
                  f(kt, {
                    __framer__styleTransformEffectEnabled: !0,
                    __framer__transformTargets: [
                      {
                        target: {
                          opacity: 0.5,
                          rotate: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 0.8,
                          skewX: 0,
                          skewY: 0,
                          x: 0,
                          y: 0,
                        },
                      },
                      {
                        target: {
                          opacity: 1,
                          rotate: 0,
                          rotateX: 0,
                          rotateY: 0,
                          scale: 1,
                          skewX: 0,
                          skewY: 0,
                          x: 0,
                          y: 0,
                        },
                      },
                    ],
                    __framer__transformTrigger: "onInView",
                    __perspectiveFX: !1,
                    __targetOpacity: 1,
                    className: "framer-1rou399",
                    "data-framer-name": "Section 2",
                    name: "Section 2",
                    style: { transformPerspective: 1200 },
                    children: [
                      f("div", {
                        className: "framer-ku9bm6",
                        "data-framer-name": "Title",
                        name: "Title",
                        children: [
                          e(z, {
                            breakpoint: l,
                            overrides: {
                              eEbqag_vU: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                      "--framer-font-family":
                                        '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                      "--framer-font-size": "25px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "Licenced & Certified by",
                                  }),
                                }),
                              },
                              RrXQBC2EQ: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                      "--framer-font-family":
                                        '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                      "--framer-font-size": "25px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "Licenced & Certified by",
                                  }),
                                }),
                              },
                            },
                            children: e(h, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "40px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                  },
                                  children: "Licenced & Certified by",
                                }),
                              }),
                              className: "framer-412zmt",
                              fonts: ["GF;Bebas Neue-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e("div", { className: "framer-aqc8z9" }),
                        ],
                      }),
                      f("div", {
                        className: "framer-1qx2sxu",
                        "data-framer-name": "Logos",
                        name: "Logos",
                        children: [
                          e("div", {
                            className: "framer-zmss27",
                            "data-framer-name": "Paggor",
                            name: "Paggor",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    intrinsicHeight: 337,
                                    intrinsicWidth: 1536,
                                    loading: "lazy",
                                    pixelHeight: 337,
                                    pixelWidth: 1536,
                                    positionX: "center",
                                    positionY: "center",
                                    sizes: "126.1574px",
                                    src: "https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png",
                                    srcSet:
                                      "https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png?scale-down-to=512 512w,https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png 1536w",
                                  },
                                },
                                RrXQBC2EQ: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    intrinsicHeight: 337,
                                    intrinsicWidth: 1536,
                                    loading: "lazy",
                                    pixelHeight: 337,
                                    pixelWidth: 1536,
                                    positionX: "center",
                                    positionY: "center",
                                    sizes: "126.1574px",
                                    src: "https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png",
                                    srcSet:
                                      "https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png?scale-down-to=512 512w,https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png 1536w",
                                  },
                                },
                              },
                              children: e(b, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 337,
                                  intrinsicWidth: 1536,
                                  pixelHeight: 337,
                                  pixelWidth: 1536,
                                  sizes: "151.3889px",
                                  src: "https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png",
                                  srcSet:
                                    "https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png?scale-down-to=512 512w,https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/l30YvclnMamh2C15pAVrpl5MY0.png 1536w",
                                },
                                className: "framer-o46orx",
                                "data-framer-name": "paggor",
                                name: "paggor",
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-81yhx4",
                            "data-framer-name": "GC",
                            name: "GC",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    intrinsicHeight: 153,
                                    intrinsicWidth: 467,
                                    loading: "lazy",
                                    pixelHeight: 153,
                                    pixelWidth: 467,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "https://framerusercontent.com/images/gZGsevr9AT9cYgLNj8DLm5Hrhk.png",
                                  },
                                },
                                RrXQBC2EQ: {
                                  background: {
                                    alt: "",
                                    fit: "fit",
                                    intrinsicHeight: 153,
                                    intrinsicWidth: 467,
                                    loading: "lazy",
                                    pixelHeight: 153,
                                    pixelWidth: 467,
                                    positionX: "center",
                                    positionY: "center",
                                    src: "https://framerusercontent.com/images/gZGsevr9AT9cYgLNj8DLm5Hrhk.png",
                                  },
                                },
                              },
                              children: e(b, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 153,
                                  intrinsicWidth: 467,
                                  pixelHeight: 153,
                                  pixelWidth: 467,
                                  src: "https://framerusercontent.com/images/gZGsevr9AT9cYgLNj8DLm5Hrhk.png",
                                },
                                className: "framer-1nzu2zg",
                                "data-framer-name": "GC",
                                name: "GC",
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-1nlukvt",
                            "data-framer-name": "GOdaddy",
                            name: "GOdaddy",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 147,
                                    intrinsicWidth: 500,
                                    loading: "lazy",
                                    pixelHeight: 147,
                                    pixelWidth: 500,
                                    src: "https://framerusercontent.com/images/fNEY6rmXc6Aa3hVNzgb9skT4pK4.png",
                                  },
                                },
                                RrXQBC2EQ: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 147,
                                    intrinsicWidth: 500,
                                    loading: "lazy",
                                    pixelHeight: 147,
                                    pixelWidth: 500,
                                    src: "https://framerusercontent.com/images/fNEY6rmXc6Aa3hVNzgb9skT4pK4.png",
                                  },
                                },
                              },
                              children: e(b, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 147,
                                  intrinsicWidth: 500,
                                  pixelHeight: 147,
                                  pixelWidth: 500,
                                  src: "https://framerusercontent.com/images/fNEY6rmXc6Aa3hVNzgb9skT4pK4.png",
                                },
                                className: "framer-8s670x",
                                "data-framer-name": "Godaddy",
                                name: "Godaddy",
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-2h43ki",
                            "data-framer-name": "TST",
                            name: "TST",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 110,
                                    intrinsicWidth: 172,
                                    loading: "lazy",
                                    pixelHeight: 110,
                                    pixelWidth: 172,
                                    src: "https://framerusercontent.com/images/YZdTtynRitq0hwNDp5xMicoNM.png",
                                  },
                                },
                                RrXQBC2EQ: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 110,
                                    intrinsicWidth: 172,
                                    loading: "lazy",
                                    pixelHeight: 110,
                                    pixelWidth: 172,
                                    src: "https://framerusercontent.com/images/YZdTtynRitq0hwNDp5xMicoNM.png",
                                  },
                                },
                              },
                              children: e(b, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 110,
                                  intrinsicWidth: 172,
                                  pixelHeight: 110,
                                  pixelWidth: 172,
                                  src: "https://framerusercontent.com/images/YZdTtynRitq0hwNDp5xMicoNM.png",
                                },
                                className: "framer-1aklu26",
                                "data-framer-name": "TST",
                                name: "TST",
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-1k5ve25",
                            "data-framer-name": "Iovation",
                            name: "Iovation",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 157,
                                    intrinsicWidth: 800,
                                    loading: "lazy",
                                    pixelHeight: 157,
                                    pixelWidth: 800,
                                    sizes: "103.7037px",
                                    src: "https://framerusercontent.com/images/wX2V89uEbfKRNeWdqdbWFaj3U.png",
                                    srcSet:
                                      "https://framerusercontent.com/images/wX2V89uEbfKRNeWdqdbWFaj3U.png?scale-down-to=512 512w,https://framerusercontent.com/images/wX2V89uEbfKRNeWdqdbWFaj3U.png 800w",
                                  },
                                },
                                RrXQBC2EQ: {
                                  background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 157,
                                    intrinsicWidth: 800,
                                    loading: "lazy",
                                    pixelHeight: 157,
                                    pixelWidth: 800,
                                    sizes: "103.7037px",
                                    src: "https://framerusercontent.com/images/wX2V89uEbfKRNeWdqdbWFaj3U.png",
                                    srcSet:
                                      "https://framerusercontent.com/images/wX2V89uEbfKRNeWdqdbWFaj3U.png?scale-down-to=512 512w,https://framerusercontent.com/images/wX2V89uEbfKRNeWdqdbWFaj3U.png 800w",
                                  },
                                },
                              },
                              children: e(b, {
                                background: {
                                  alt: "",
                                  fit: "fill",
                                  intrinsicHeight: 157,
                                  intrinsicWidth: 800,
                                  pixelHeight: 157,
                                  pixelWidth: 800,
                                  sizes: "155.625px",
                                  src: "https://framerusercontent.com/images/wX2V89uEbfKRNeWdqdbWFaj3U.png",
                                  srcSet:
                                    "https://framerusercontent.com/images/wX2V89uEbfKRNeWdqdbWFaj3U.png?scale-down-to=512 512w,https://framerusercontent.com/images/wX2V89uEbfKRNeWdqdbWFaj3U.png 800w",
                                },
                                className: "framer-up1wk3",
                                "data-framer-name": "Iovation",
                                name: "Iovation",
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  F() &&
                    e(E, {
                      children: e(L, {
                        className:
                          "framer-44aogt-container hidden-72rtr7 hidden-5n5ezt",
                        children: e(fa, {
                          height: "100%",
                          id: "MzGXb0gC5",
                          layoutId: "MzGXb0gC5",
                          style: { height: "100%", width: "100%" },
                          variant: "y7KgjUna3",
                          width: "100%",
                        }),
                      }),
                    }),
                  q() &&
                    e(E, {
                      children: e(L, {
                        className:
                          "framer-13l4pwy-container hidden-1hbve8q hidden-zqyngv",
                        children: e(pa, {
                          height: "100%",
                          id: "Mwy8m__P3",
                          layoutId: "Mwy8m__P3",
                          style: { width: "100%" },
                          variant: "VnzqVVRBo",
                          width: "100%",
                        }),
                      }),
                    }),
                  e("div", {
                    className: "framer-4set4y",
                    "data-framer-name": "Section 4",
                    name: "Section 4",
                    children: f("div", {
                      className: "framer-1diwi5u",
                      "data-framer-name": "Background",
                      name: "Background",
                      children: [
                        e(kt, {
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 0.5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.7,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: "onInView",
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-8zjap2",
                          style: { transformPerspective: 1200 },
                          children: e(E, {
                            children: e(L, {
                              className: "framer-1lij0rd-container",
                              children: e(Rr, {
                                borderRadius: 20,
                                bottomLeftRadius: 20,
                                bottomRightRadius: 20,
                                height: "100%",
                                id: "DmNy_JumO",
                                isMixedBorderRadius: !1,
                                isRed: !0,
                                layoutId: "DmNy_JumO",
                                play: "On",
                                shouldMute: !0,
                                style: { height: "100%", width: "100%" },
                                thumbnail: "Medium Quality",
                                topLeftRadius: 20,
                                topRightRadius: 20,
                                url: "https://youtu.be/OLszntbLab0",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                        f(kt, {
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 0.5,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 0.7,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: 0,
                              },
                            },
                          ],
                          __framer__transformTrigger: "onInView",
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-u3twv6",
                          style: { transformPerspective: 1200 },
                          children: [
                            e(E, {
                              children: e(L, {
                                className: "framer-13gc5uw-container",
                                children: e(rr, {
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  borderRadius: 20,
                                  bottomLeftRadius: 20,
                                  bottomRightRadius: 20,
                                  controls: !1,
                                  height: "100%",
                                  id: "BfDL6JoVm",
                                  isMixedBorderRadius: !1,
                                  layoutId: "BfDL6JoVm",
                                  loop: !1,
                                  muted: !0,
                                  objectFit: "cover",
                                  playing: !1,
                                  poster:
                                    "https://framerusercontent.com/images/vRbZ9MrlZ5AhbfdFOvSi5rJUwfQ.jpg",
                                  posterEnabled: !0,
                                  srcType: "URL",
                                  srcUrl:
                                    "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                                  startTime: 0,
                                  style: { height: "100%", width: "100%" },
                                  topLeftRadius: 20,
                                  topRightRadius: 20,
                                  volume: 25,
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-y7aud7-container",
                                children: e(rr, {
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  borderRadius: 20,
                                  bottomLeftRadius: 20,
                                  bottomRightRadius: 20,
                                  controls: !1,
                                  height: "100%",
                                  id: "aov8O7DGF",
                                  isMixedBorderRadius: !1,
                                  layoutId: "aov8O7DGF",
                                  loop: !1,
                                  muted: !0,
                                  objectFit: "cover",
                                  playing: !1,
                                  poster:
                                    "https://framerusercontent.com/images/vRbZ9MrlZ5AhbfdFOvSi5rJUwfQ.jpg",
                                  posterEnabled: !0,
                                  srcType: "URL",
                                  srcUrl:
                                    "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                                  startTime: 0,
                                  style: { height: "100%", width: "100%" },
                                  topLeftRadius: 20,
                                  topRightRadius: 20,
                                  volume: 25,
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-yjih96-container",
                                children: e(rr, {
                                  backgroundColor: "rgba(0, 0, 0, 0)",
                                  borderRadius: 20,
                                  bottomLeftRadius: 20,
                                  bottomRightRadius: 20,
                                  controls: !1,
                                  height: "100%",
                                  id: "FIf69KIAg",
                                  isMixedBorderRadius: !1,
                                  layoutId: "FIf69KIAg",
                                  loop: !1,
                                  muted: !0,
                                  objectFit: "cover",
                                  playing: !1,
                                  poster:
                                    "https://framerusercontent.com/images/vRbZ9MrlZ5AhbfdFOvSi5rJUwfQ.jpg",
                                  posterEnabled: !0,
                                  srcType: "URL",
                                  srcUrl:
                                    "https://assets.mixkit.co/videos/preview/mixkit-ice-cream-glass-of-red-soda-5094-small.mp4",
                                  startTime: 0,
                                  style: { height: "100%", width: "100%" },
                                  topLeftRadius: 20,
                                  topRightRadius: 20,
                                  volume: 25,
                                  width: "100%",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  f("div", {
                    className: "framer-16gdi7m",
                    "data-framer-name": "Slideshow",
                    name: "Slideshow",
                    children: [
                      f("div", {
                        className: "framer-3r0vqc",
                        "data-framer-name": "Title",
                        name: "Title",
                        children: [
                          e(z, {
                            breakpoint: l,
                            overrides: {
                              eEbqag_vU: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                      "--framer-font-family":
                                        '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                      "--framer-font-size": "25px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "featured promotions",
                                  }),
                                }),
                              },
                              RrXQBC2EQ: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                      "--framer-font-family":
                                        '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                      "--framer-font-size": "25px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "featured promotions",
                                  }),
                                }),
                              },
                            },
                            children: e(h, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "40px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                  },
                                  children: "featured promotions",
                                }),
                              }),
                              className: "framer-ch9iyc",
                              fonts: ["GF;Bebas Neue-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e("div", { className: "framer-abed85" }),
                        ],
                      }),
                      e("div", {
                        className: "framer-3r1ayl",
                        children: e(E, {
                          children: e(z, {
                            breakpoint: l,
                            overrides: {
                              e5B24uv9A: { transformTemplate: ql },
                              eEbqag_vU: { transformTemplate: ga },
                              RrXQBC2EQ: { transformTemplate: Rl },
                            },
                            children: e(kn, {
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 0.5,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 0.7,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: "onInView",
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: "framer-o4lx76-container",
                              style: { transformPerspective: 1200 },
                              children: e(z, {
                                breakpoint: l,
                                overrides: {
                                  eEbqag_vU: {
                                    effectsOptions: {
                                      effectsHover: !1,
                                      effectsOpacity: 0.8,
                                      effectsPerspective: 815,
                                      effectsRotate: 14,
                                      effectsScale: 1,
                                    },
                                    fadeOptions: {
                                      fadeAlpha: 0.45,
                                      fadeContent: !1,
                                      fadeInset: 0,
                                      fadeWidth: 6,
                                      overflow: !1,
                                    },
                                    progressOptions: {
                                      dotsActiveOpacity: 1,
                                      dotsBackground: "rgba(240, 239, 233, 0)",
                                      dotsBlur: 0,
                                      dotsFill:
                                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                      dotsGap: 6,
                                      dotsInset: 10,
                                      dotSize: 6,
                                      dotsOpacity: 0.4,
                                      dotsPadding: 0,
                                      dotsRadius: 0,
                                      showProgressDots: !0,
                                    },
                                    transitionControl: {
                                      damping: 40,
                                      delay: 0.3,
                                      duration: 0.3,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 3.4,
                                      stiffness: 221,
                                      type: "tween",
                                    },
                                  },
                                  RrXQBC2EQ: {
                                    effectsOptions: {
                                      effectsHover: !1,
                                      effectsOpacity: 0.8,
                                      effectsPerspective: 815,
                                      effectsRotate: 14,
                                      effectsScale: 1,
                                    },
                                    fadeOptions: {
                                      fadeAlpha: 0.45,
                                      fadeContent: !1,
                                      fadeInset: 0,
                                      fadeWidth: 6,
                                      overflow: !1,
                                    },
                                    progressOptions: {
                                      dotsActiveOpacity: 1,
                                      dotsBackground: "rgba(240, 239, 233, 0)",
                                      dotsBlur: 0,
                                      dotsFill:
                                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                      dotsGap: 6,
                                      dotsInset: 10,
                                      dotSize: 6,
                                      dotsOpacity: 0.4,
                                      dotsPadding: 0,
                                      dotsRadius: 0,
                                      showProgressDots: !0,
                                    },
                                    transitionControl: {
                                      damping: 40,
                                      delay: 0.3,
                                      duration: 0.3,
                                      ease: [0.44, 0, 0.56, 1],
                                      mass: 3.4,
                                      stiffness: 221,
                                      type: "tween",
                                    },
                                  },
                                },
                                children: e(xe, {
                                  alignment: "center",
                                  arrowOptions: {
                                    arrowFill: "rgb(33, 32, 32)",
                                    arrowGap: 10,
                                    arrowPadding: 20,
                                    arrowPaddingBottom: 0,
                                    arrowPaddingLeft: 0,
                                    arrowPaddingRight: 0,
                                    arrowPaddingTop: 0,
                                    arrowPosition: "auto",
                                    arrowRadius: 78,
                                    arrowShouldFadeIn: !1,
                                    arrowShouldSpace: !0,
                                    arrowSize: 40,
                                    showMouseControls: !1,
                                  },
                                  autoPlayControl: !0,
                                  borderRadius: 0,
                                  direction: "left",
                                  dragControl: !0,
                                  effectsOptions: {
                                    effectsHover: !1,
                                    effectsOpacity: 1,
                                    effectsPerspective: 815,
                                    effectsRotate: 35,
                                    effectsScale: 1,
                                  },
                                  fadeOptions: {
                                    fadeAlpha: 0.45,
                                    fadeContent: !0,
                                    fadeInset: 0,
                                    fadeWidth: 6,
                                    overflow: !0,
                                  },
                                  gap: 50,
                                  height: "100%",
                                  id: "WtbwiXFaa",
                                  intervalControl: 2,
                                  itemAmount: 1,
                                  layoutId: "WtbwiXFaa",
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 0,
                                  paddingTop: 0,
                                  progressOptions: {
                                    dotsActiveOpacity: 1,
                                    dotsBackground: "rgba(240, 239, 233, 0)",
                                    dotsBlur: 0,
                                    dotsFill:
                                      "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                    dotsGap: 10,
                                    dotsInset: 10,
                                    dotSize: 10,
                                    dotsOpacity: 0.4,
                                    dotsPadding: 0,
                                    dotsRadius: 62,
                                    showProgressDots: !0,
                                  },
                                  slots: [
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 600,
                                        intrinsicWidth: 1e3,
                                        pixelHeight: 600,
                                        pixelWidth: 1e3,
                                        sizes: "500px",
                                        src: "https://framerusercontent.com/images/H9u6M876f4FI89TaxieQzt1oa20.png",
                                        srcSet:
                                          "https://framerusercontent.com/images/H9u6M876f4FI89TaxieQzt1oa20.png?scale-down-to=512 512w,https://framerusercontent.com/images/H9u6M876f4FI89TaxieQzt1oa20.png 1000w",
                                      },
                                      className: "framer-b3qc31",
                                      "data-framer-name": "Banner1",
                                      name: "Banner1",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 600,
                                        intrinsicWidth: 1e3,
                                        pixelHeight: 600,
                                        pixelWidth: 1e3,
                                        sizes: "500px",
                                        src: "https://framerusercontent.com/images/U3opaVhS1hJU9VPTmpA45xdENtM.png",
                                        srcSet:
                                          "https://framerusercontent.com/images/U3opaVhS1hJU9VPTmpA45xdENtM.png?scale-down-to=512 512w,https://framerusercontent.com/images/U3opaVhS1hJU9VPTmpA45xdENtM.png 1000w",
                                      },
                                      className: "framer-1xkds5z",
                                      "data-framer-name": "Banner_2",
                                      name: "Banner_2",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 600,
                                        intrinsicWidth: 1e3,
                                        pixelHeight: 600,
                                        pixelWidth: 1e3,
                                        sizes: "500px",
                                        src: "https://framerusercontent.com/images/X7HgdSS2ZyCXCZVDA1uzZ2Vxn8.png",
                                        srcSet:
                                          "https://framerusercontent.com/images/X7HgdSS2ZyCXCZVDA1uzZ2Vxn8.png?scale-down-to=512 512w,https://framerusercontent.com/images/X7HgdSS2ZyCXCZVDA1uzZ2Vxn8.png 1000w",
                                      },
                                      className: "framer-4t40pa",
                                      "data-framer-name": "Banner_3",
                                      name: "Banner_3",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 600,
                                        intrinsicWidth: 1e3,
                                        pixelHeight: 600,
                                        pixelWidth: 1e3,
                                        sizes: "500px",
                                        src: "https://framerusercontent.com/images/KiqMU0FKlCIlprdVPMsMLCfMM.png",
                                        srcSet:
                                          "https://framerusercontent.com/images/KiqMU0FKlCIlprdVPMsMLCfMM.png?scale-down-to=512 512w,https://framerusercontent.com/images/KiqMU0FKlCIlprdVPMsMLCfMM.png 1000w",
                                      },
                                      className: "framer-1uc2ex5",
                                      "data-framer-name": "Banner_4",
                                      name: "Banner_4",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 600,
                                        intrinsicWidth: 1e3,
                                        pixelHeight: 600,
                                        pixelWidth: 1e3,
                                        sizes: "500px",
                                        src: "https://framerusercontent.com/images/Yv9ajWsjfahqBcrx8O9DwzfeaI0.png",
                                        srcSet:
                                          "https://framerusercontent.com/images/Yv9ajWsjfahqBcrx8O9DwzfeaI0.png?scale-down-to=512 512w,https://framerusercontent.com/images/Yv9ajWsjfahqBcrx8O9DwzfeaI0.png 1000w",
                                      },
                                      className: "framer-d332l4",
                                      "data-framer-name": "Banner_5",
                                      name: "Banner_5",
                                    }),
                                  ],
                                  startFrom: 0,
                                  style: { height: "100%", width: "100%" },
                                  transitionControl: {
                                    damping: 40,
                                    delay: 0.3,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 3.4,
                                    stiffness: 221,
                                    type: "spring",
                                  },
                                  width: "100%",
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  f("div", {
                    className: "framer-1j4w45f",
                    "data-framer-name": "Our Partners",
                    name: "Our Partners",
                    children: [
                      f("div", {
                        className: "framer-uyjh91",
                        "data-framer-name": "Title",
                        name: "Title",
                        children: [
                          e(z, {
                            breakpoint: l,
                            overrides: {
                              eEbqag_vU: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                      "--framer-font-family":
                                        '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                      "--framer-font-size": "25px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "Our Trusted PARTNERS",
                                  }),
                                }),
                              },
                              RrXQBC2EQ: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                      "--framer-font-family":
                                        '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                      "--framer-font-size": "25px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "Our Trusted PARTNERS",
                                  }),
                                }),
                              },
                            },
                            children: e(h, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "40px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                  },
                                  children: "Our Trusted PARTNERS",
                                }),
                              }),
                              className: "framer-1yy97md",
                              fonts: ["GF;Bebas Neue-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e("div", { className: "framer-9j6m6f" }),
                        ],
                      }),
                      f("div", {
                        className: "framer-2e2e8q",
                        "data-framer-name": "Text",
                        name: "Text",
                        children: [
                          e("div", {
                            className: "framer-12lesjh",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "CASINO",
                                    }),
                                  }),
                                },
                                RrXQBC2EQ: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "CASINO",
                                    }),
                                  }),
                                },
                              },
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                      "--framer-font-family":
                                        '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "600",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "CASINO",
                                  }),
                                }),
                                className: "framer-bgbgzo",
                                fonts: ["Inter-SemiBold"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-hf6nyk",
                            children: e("div", { className: "framer-dftfaw" }),
                          }),
                          e("div", {
                            className: "framer-12fdh5y",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "SPORTS",
                                    }),
                                  }),
                                },
                                RrXQBC2EQ: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "SPORTS",
                                    }),
                                  }),
                                },
                              },
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                      "--framer-font-family":
                                        '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "600",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "SPORTS",
                                  }),
                                }),
                                className: "framer-jpm5n3",
                                fonts: ["Inter-SemiBold"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-hgfmh2",
                            children: e("div", { className: "framer-1dg1wj0" }),
                          }),
                          e("div", {
                            className: "framer-8gkm5n",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "SLOTS",
                                    }),
                                  }),
                                },
                                RrXQBC2EQ: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "SLOTS",
                                    }),
                                  }),
                                },
                              },
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                      "--framer-font-family":
                                        '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "600",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "SLOTS",
                                  }),
                                }),
                                className: "framer-cvjqky",
                                fonts: ["Inter-SemiBold"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-4bh39l",
                            children: e("div", { className: "framer-e9ps7j" }),
                          }),
                          e("div", {
                            className: "framer-1ypic19",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "ESPORTS",
                                    }),
                                  }),
                                },
                                RrXQBC2EQ: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "ESPORTS",
                                    }),
                                  }),
                                },
                              },
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                      "--framer-font-family":
                                        '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "600",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "ESPORTS",
                                  }),
                                }),
                                className: "framer-5xvgtv",
                                fonts: ["Inter-SemiBold"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-1hws591",
                            children: e("div", { className: "framer-5sicv2" }),
                          }),
                          e("div", {
                            className: "framer-1urhin0",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "FISHING",
                                    }),
                                  }),
                                },
                                RrXQBC2EQ: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "FISHING",
                                    }),
                                  }),
                                },
                              },
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                      "--framer-font-family":
                                        '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "600",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "FISHING",
                                  }),
                                }),
                                className: "framer-1i72gq5",
                                fonts: ["Inter-SemiBold"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          q() &&
                            e("div", {
                              className:
                                "framer-c67giv hidden-1hbve8q hidden-zqyngv",
                              children: e("div", {
                                className: "framer-1v6asea",
                              }),
                            }),
                          e("div", {
                            className: "framer-j0cd8y",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "LOTTERY",
                                    }),
                                  }),
                                },
                                RrXQBC2EQ: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "LOTTERY",
                                    }),
                                  }),
                                },
                              },
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                      "--framer-font-family":
                                        '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "600",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "LOTTERY",
                                  }),
                                }),
                                className: "framer-1h1baay",
                                fonts: ["Inter-SemiBold"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                          e("div", {
                            className: "framer-w2qo9h",
                            children: e("div", { className: "framer-s9g5j9" }),
                          }),
                          e("div", {
                            className: "framer-rmw02k",
                            children: e(z, {
                              breakpoint: l,
                              overrides: {
                                eEbqag_vU: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "3D GAMES",
                                    }),
                                  }),
                                },
                                RrXQBC2EQ: {
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--font-selector":
                                          "SW50ZXItU2VtaUJvbGQ=",
                                        "--framer-font-family":
                                          '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                        "--framer-font-size": "12px",
                                        "--framer-font-weight": "600",
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                      },
                                      children: "3D GAMES",
                                    }),
                                  }),
                                },
                              },
                              children: e(h, {
                                __fromCanvasComponent: !0,
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                      "--framer-font-family":
                                        '"Inter-SemiBold", "Inter", "Inter Placeholder", sans-serif',
                                      "--framer-font-weight": "600",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "3D GAMES",
                                  }),
                                }),
                                className: "framer-ulb8hx",
                                fonts: ["Inter-SemiBold"],
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            }),
                          }),
                        ],
                      }),
                      f(kt, {
                        __framer__styleTransformEffectEnabled: !0,
                        __framer__transformTargets: [
                          {
                            target: {
                              opacity: 0.5,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 0.6,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 0,
                            },
                          },
                          {
                            target: {
                              opacity: 1,
                              rotate: 0,
                              rotateX: 0,
                              rotateY: 0,
                              scale: 1,
                              skewX: 0,
                              skewY: 0,
                              x: 0,
                              y: 0,
                            },
                          },
                        ],
                        __framer__transformTrigger: "onInView",
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-9b1785",
                        style: { transformPerspective: 1200 },
                        children: [
                          q() &&
                            e(E, {
                              children: e(L, {
                                className:
                                  "framer-13njlun-container hidden-1hbve8q hidden-zqyngv",
                                children: e(cr, {
                                  alignment: "center",
                                  direction: "left",
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !0,
                                    fadeInset: 0,
                                    fadeWidth: 25,
                                    overflow: !1,
                                  },
                                  gap: 13,
                                  height: "100%",
                                  hoverFactor: 0.7,
                                  id: "NumPdBUwO",
                                  layoutId: "NumPdBUwO",
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/KW65Ra1i7LRym0s3w1mZOKx8HzM.png",
                                      },
                                      className: "framer-2yotv0",
                                      "data-framer-name": "YGR",
                                      name: "YGR",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/0y9GM1TzokaY5TsnWrItsxIoIp8.png",
                                      },
                                      className: "framer-pf477l",
                                      "data-framer-name": "WMCasino",
                                      name: "WMCasino",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/c6rlkFvMbwQM3tLSFvaJawgI7Bc.png",
                                      },
                                      className: "framer-yjq7ck",
                                      "data-framer-name": "Tfgaming",
                                      name: "Tfgaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/65HU8lo5DfG7l6ckNDRVxSzoBE.png",
                                      },
                                      className: "framer-bpbib6",
                                      "data-framer-name": "SpadeGaming",
                                      name: "SpadeGaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/TsjW6YOcRwWeS3imtF6fr679KBo.png",
                                      },
                                      className: "framer-1fb3y9z",
                                      "data-framer-name": "SexyBaccarat",
                                      name: "SexyBaccarat",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/HyJ8tlE1yScxth7KEOCD2cdihPI.png",
                                      },
                                      className: "framer-1pwp192",
                                      "data-framer-name": "SAGaming",
                                      name: "SAGaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/lLXb9rc3rOp9NqrehJj3SIvm0c.png",
                                      },
                                      className: "framer-1qeghg5",
                                      "data-framer-name": "RoyalSlot",
                                      name: "RoyalSlot",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/HYoPdqqDQwWwvcNBqbWpPL6tPnI.png",
                                      },
                                      className: "framer-1qqoxzw",
                                      "data-framer-name": "RelaxGaming",
                                      name: "RelaxGaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/xwKlhe8IgWism7p6ypFexCpAqw.png",
                                      },
                                      className: "framer-1vuu5am",
                                      "data-framer-name": "QQKeno",
                                      name: "QQKeno",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/IXeT7azvT4XjITxnEuMAQdRRYDI.png",
                                      },
                                      className: "framer-lrp6vt",
                                      "data-framer-name": "Pussy888",
                                      name: "Pussy888",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/YFGJeFaSlIs2YJabAw7RH1LRg4.png",
                                      },
                                      className: "framer-bvlngp",
                                      "data-framer-name": "PS",
                                      name: "PS",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/4EEj7xSAowrFvPS87kGoS5FPVZs.png",
                                      },
                                      className: "framer-17fhj5a",
                                      "data-framer-name": "PlaynGo",
                                      name: "PlaynGo",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/hYDhoJmGlHqpxEihOimEqHmdHPc.png",
                                      },
                                      className: "framer-qq07cq",
                                      "data-framer-name": "NextSpin",
                                      name: "NextSpin",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/Ch0bRgaM2cfPCN093xJw6lytVs0.png",
                                      },
                                      className: "framer-1ey609z",
                                      "data-framer-name": "Mega888",
                                      name: "Mega888",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/ZL3YsGPkerYUCs1pjps91sOcs.png",
                                      },
                                      className: "framer-ocy65",
                                      "data-framer-name": "M8Bet",
                                      name: "M8Bet",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/g4MF6FDfqErLQVv6sIAoRvRo.png",
                                      },
                                      className: "framer-18w281t",
                                      "data-framer-name": "Kingmaker",
                                      name: "Kingmaker",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/rpKQpA7nsCKPmtFd2xMygsuHLV0.png",
                                      },
                                      className: "framer-p8srnl",
                                      "data-framer-name": "FaChai",
                                      name: "FaChai",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/ZnNxkFb9DZqoZek1goNL8n0oqgQ.png",
                                      },
                                      className: "framer-16ngwmu",
                                      "data-framer-name": "EvolutionGaming",
                                      name: "EvolutionGaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/lFG5KFZeagWCCqOQ5J9RVs3So.png",
                                      },
                                      className: "framer-17zqubu",
                                      "data-framer-name": "DreamGaming",
                                      name: "DreamGaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/cguuHBPw5adpjgqhdVSdXjGf6k.png",
                                      },
                                      className: "framer-1g3k328",
                                      "data-framer-name": "CQ9",
                                      name: "CQ9",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/gOY5ajfH5DQv1nFrJrYxUmHhHGI.png",
                                      },
                                      className: "framer-jwfzsy",
                                      "data-framer-name": "CMD368",
                                      name: "CMD368",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/w7i5oiQ0IwcbbQLPJ61sJLykWzQ.png",
                                      },
                                      className: "framer-1eogqpr",
                                      "data-framer-name": "$918kiss",
                                      name: "$918kiss",
                                    }),
                                  ],
                                  speed: 100,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                          F() &&
                            e(E, {
                              children: e(L, {
                                className:
                                  "framer-am98eq-container hidden-72rtr7 hidden-5n5ezt",
                                children: e(cr, {
                                  alignment: "center",
                                  direction: "left",
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !0,
                                    fadeInset: 0,
                                    fadeWidth: 25,
                                    overflow: !1,
                                  },
                                  gap: 10,
                                  height: "100%",
                                  hoverFactor: 1,
                                  id: "r6Hcihrrb",
                                  layoutId: "r6Hcihrrb",
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/KW65Ra1i7LRym0s3w1mZOKx8HzM.png",
                                      },
                                      className: "framer-1vz1zny",
                                      "data-framer-name": "YGR",
                                      name: "YGR",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/0y9GM1TzokaY5TsnWrItsxIoIp8.png",
                                      },
                                      className: "framer-1x5ss8w",
                                      "data-framer-name": "WMCasino",
                                      name: "WMCasino",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/c6rlkFvMbwQM3tLSFvaJawgI7Bc.png",
                                      },
                                      className: "framer-8mg67a",
                                      "data-framer-name": "Tfgaming",
                                      name: "Tfgaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/65HU8lo5DfG7l6ckNDRVxSzoBE.png",
                                      },
                                      className: "framer-1ecxpen",
                                      "data-framer-name": "SpadeGaming",
                                      name: "SpadeGaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/TsjW6YOcRwWeS3imtF6fr679KBo.png",
                                      },
                                      className: "framer-1l9i7va",
                                      "data-framer-name": "SexyBaccarat",
                                      name: "SexyBaccarat",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/HyJ8tlE1yScxth7KEOCD2cdihPI.png",
                                      },
                                      className: "framer-fspv4t",
                                      "data-framer-name": "SAGaming",
                                      name: "SAGaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/lLXb9rc3rOp9NqrehJj3SIvm0c.png",
                                      },
                                      className: "framer-18mf6z3",
                                      "data-framer-name": "RoyalSlot",
                                      name: "RoyalSlot",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/HYoPdqqDQwWwvcNBqbWpPL6tPnI.png",
                                      },
                                      className: "framer-jnelf3",
                                      "data-framer-name": "RelaxGaming",
                                      name: "RelaxGaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/xwKlhe8IgWism7p6ypFexCpAqw.png",
                                      },
                                      className: "framer-1kmeybz",
                                      "data-framer-name": "QQKeno",
                                      name: "QQKeno",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/IXeT7azvT4XjITxnEuMAQdRRYDI.png",
                                      },
                                      className: "framer-4efm4z",
                                      "data-framer-name": "Pussy888",
                                      name: "Pussy888",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/YFGJeFaSlIs2YJabAw7RH1LRg4.png",
                                      },
                                      className: "framer-1io3gt0",
                                      "data-framer-name": "PS",
                                      name: "PS",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/4EEj7xSAowrFvPS87kGoS5FPVZs.png",
                                      },
                                      className: "framer-18rgdwe",
                                      "data-framer-name": "PlaynGo",
                                      name: "PlaynGo",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/hYDhoJmGlHqpxEihOimEqHmdHPc.png",
                                      },
                                      className: "framer-gsiq68",
                                      "data-framer-name": "NextSpin",
                                      name: "NextSpin",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/Ch0bRgaM2cfPCN093xJw6lytVs0.png",
                                      },
                                      className: "framer-bydn5k",
                                      "data-framer-name": "Mega888",
                                      name: "Mega888",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/ZL3YsGPkerYUCs1pjps91sOcs.png",
                                      },
                                      className: "framer-xc4mc5",
                                      "data-framer-name": "M8Bet",
                                      name: "M8Bet",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/g4MF6FDfqErLQVv6sIAoRvRo.png",
                                      },
                                      className: "framer-wvn3gn",
                                      "data-framer-name": "Kingmaker",
                                      name: "Kingmaker",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/rpKQpA7nsCKPmtFd2xMygsuHLV0.png",
                                      },
                                      className: "framer-a63op4",
                                      "data-framer-name": "FaChai",
                                      name: "FaChai",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/ZnNxkFb9DZqoZek1goNL8n0oqgQ.png",
                                      },
                                      className: "framer-1pcxaz9",
                                      "data-framer-name": "EvolutionGaming",
                                      name: "EvolutionGaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/lFG5KFZeagWCCqOQ5J9RVs3So.png",
                                      },
                                      className: "framer-pxj7uh",
                                      "data-framer-name": "DreamGaming",
                                      name: "DreamGaming",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/cguuHBPw5adpjgqhdVSdXjGf6k.png",
                                      },
                                      className: "framer-equz8w",
                                      "data-framer-name": "CQ9",
                                      name: "CQ9",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/gOY5ajfH5DQv1nFrJrYxUmHhHGI.png",
                                      },
                                      className: "framer-1143s84",
                                      "data-framer-name": "CMD368",
                                      name: "CMD368",
                                    }),
                                    e(b, {
                                      background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 100,
                                        intrinsicWidth: 200,
                                        pixelHeight: 200,
                                        pixelWidth: 400,
                                        src: "https://framerusercontent.com/images/w7i5oiQ0IwcbbQLPJ61sJLykWzQ.png",
                                      },
                                      className: "framer-13k3aqi",
                                      "data-framer-name": "$918kiss",
                                      name: "$918kiss",
                                    }),
                                  ],
                                  speed: 100,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  f("div", {
                    className: "framer-mba8kr",
                    "data-framer-name": "FAQ",
                    name: "FAQ",
                    children: [
                      f("div", {
                        className: "framer-nu6df1",
                        "data-framer-name": "Title",
                        name: "Title",
                        children: [
                          e(z, {
                            breakpoint: l,
                            overrides: {
                              eEbqag_vU: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                      "--framer-font-family":
                                        '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                      "--framer-font-size": "25px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "frequently asked questions",
                                  }),
                                }),
                              },
                              RrXQBC2EQ: {
                                children: e(n, {
                                  children: e("p", {
                                    style: {
                                      "--font-selector":
                                        "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                      "--framer-font-family":
                                        '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                      "--framer-font-size": "25px",
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                    },
                                    children: "frequently asked questions",
                                  }),
                                }),
                              },
                            },
                            children: e(h, {
                              __fromCanvasComponent: !0,
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "40px",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color":
                                      "var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, rgb(128, 91, 19))",
                                  },
                                  children: "frequently asked questions",
                                }),
                              }),
                              className: "framer-9ttox8",
                              fonts: ["GF;Bebas Neue-regular"],
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          e("div", { className: "framer-cctj8a" }),
                        ],
                      }),
                      q() &&
                        f("div", {
                          className:
                            "framer-1yxoy3b hidden-1hbve8q hidden-zqyngv",
                          children: [
                            e(E, {
                              children: e(L, {
                                className: "framer-1l7p3fe-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "evdU62DBt",
                                  layoutId: "evdU62DBt",
                                  variant: "BKwLqH_zE",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-1pind0m-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "NPRO8WypG",
                                  layoutId: "NPRO8WypG",
                                  variant: "teeE4bxnk",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-1ums90g-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "Y7Ws7sBqv",
                                  layoutId: "Y7Ws7sBqv",
                                  variant: "oLWU66f_Y",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-hml6jx-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "t6u4ze5aB",
                                  layoutId: "t6u4ze5aB",
                                  variant: "z8Qzi4bxT",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-1bfib23-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "XKx2yB7ff",
                                  layoutId: "XKx2yB7ff",
                                  variant: "mo9n4WItl",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-5wy1ga-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "XmVTamMpk",
                                  layoutId: "XmVTamMpk",
                                  variant: "oRfnMJhDw",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-xr356-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "QtXozB5V1",
                                  layoutId: "QtXozB5V1",
                                  variant: "xCAqksY5n",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-1mmihnc-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "dJeM5IGwK",
                                  layoutId: "dJeM5IGwK",
                                  variant: "FP6g4fcbu",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-1n44etr-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "EdZKCK7Cm",
                                  layoutId: "EdZKCK7Cm",
                                  variant: "VfzwjbOog",
                                  width: "100%",
                                }),
                              }),
                            }),
                          ],
                        }),
                      F() &&
                        f("div", {
                          className:
                            "framer-1x4xvh hidden-72rtr7 hidden-5n5ezt",
                          "data-framer-name": "Mobile FAQ",
                          name: "Mobile FAQ",
                          children: [
                            e(E, {
                              width: "350px",
                              children: e(L, {
                                className: "framer-1p4fogz-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "riI22v9LT",
                                  layoutId: "riI22v9LT",
                                  style: { width: "100%" },
                                  variant: "ID7n2nCMa",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-139tne3-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "MqzOYv_b0",
                                  layoutId: "MqzOYv_b0",
                                  variant: "z5XZAgOF6",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-1aoqv9o-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "IakU9m9N2",
                                  layoutId: "IakU9m9N2",
                                  variant: "I9BLrRh_k",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-1d0rbj1-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "kk8HCM8KB",
                                  layoutId: "kk8HCM8KB",
                                  variant: "DVrGVZUqL",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-s6yrar-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "WlA2CuK7L",
                                  layoutId: "WlA2CuK7L",
                                  variant: "CszMMXPH3",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-b0vvgb-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "gVOUrVIW_",
                                  layoutId: "gVOUrVIW_",
                                  variant: "oRgG15EWJ",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-fgjnth-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "qrmt00gsU",
                                  layoutId: "qrmt00gsU",
                                  variant: "AejDn87jJ",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-16tk8hl-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "OEGHCA25l",
                                  layoutId: "OEGHCA25l",
                                  variant: "hB_XW0VLF",
                                  width: "100%",
                                }),
                              }),
                            }),
                            e(E, {
                              children: e(L, {
                                className: "framer-jip60n-container",
                                children: e(me, {
                                  height: "100%",
                                  id: "CxNA2BBVl",
                                  layoutId: "CxNA2BBVl",
                                  variant: "rHWqHP5ZR",
                                  width: "100%",
                                }),
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  e(z, {
                    breakpoint: l,
                    overrides: {
                      eEbqag_vU: {
                        background: {
                          alt: "",
                          fit: "stretch",
                          intrinsicHeight: 400,
                          intrinsicWidth: 390,
                          loading: "lazy",
                          pixelHeight: 400,
                          pixelWidth: 390,
                          positionX: "center",
                          positionY: "center",
                          src: "https://framerusercontent.com/images/Tf5Xd59nyPR3dSQxgr1Zls7G8Qo.png",
                        },
                      },
                      RrXQBC2EQ: {
                        background: {
                          alt: "",
                          fit: "stretch",
                          intrinsicHeight: 400,
                          intrinsicWidth: 390,
                          loading: "lazy",
                          pixelHeight: 400,
                          pixelWidth: 390,
                          positionX: "center",
                          positionY: "center",
                          src: "https://framerusercontent.com/images/Tf5Xd59nyPR3dSQxgr1Zls7G8Qo.png",
                        },
                      },
                    },
                    children: f(b, {
                      background: {
                        alt: "",
                        fit: "fill",
                        intrinsicHeight: 433,
                        intrinsicWidth: 1200,
                        loading: "lazy",
                        pixelHeight: 433,
                        pixelWidth: 1200,
                        sizes: "100vw",
                        src: "https://framerusercontent.com/images/o9o0x1Eb6hYXeglr6XXSv3kK7vI.png",
                        srcSet:
                          "https://framerusercontent.com/images/o9o0x1Eb6hYXeglr6XXSv3kK7vI.png?scale-down-to=512 512w,https://framerusercontent.com/images/o9o0x1Eb6hYXeglr6XXSv3kK7vI.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/o9o0x1Eb6hYXeglr6XXSv3kK7vI.png 1200w",
                      },
                      className: "framer-r828nw",
                      children: [
                        q() &&
                          e(E, {
                            children: e(L, {
                              className:
                                "framer-1i49rta-container hidden-1hbve8q hidden-zqyngv",
                              children: e(na, {
                                height: "100%",
                                id: "XJHApTQJR",
                                layoutId: "XJHApTQJR",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        F() &&
                          e(E, {
                            children: e(L, {
                              className:
                                "framer-xofboy-container hidden-72rtr7 hidden-5n5ezt",
                              children: e(ia, {
                                height: "100%",
                                id: "D_NWZlHOc",
                                layoutId: "D_NWZlHOc",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        e("div", {
                          className: "framer-96grgz",
                          children: e(k, {
                            href: {
                              hash: ":lQwvt9U0q",
                              webPageId: "augiA20Il",
                            },
                            openInNewTab: !1,
                            smoothScroll: !0,
                            children: f("a", {
                              className: "framer-20yad framer-lux5qc",
                              children: [
                                e(E, {
                                  children: e(L, {
                                    className: "framer-r4p704-container",
                                    whileHover: Nl,
                                    children: e(Oe, {
                                      color:
                                        "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                      height: "100%",
                                      iconSearch: "Home",
                                      iconSelection: "arrow-up",
                                      id: "IRvD6JnSA",
                                      layoutId: "IRvD6JnSA",
                                      mirrored: !1,
                                      selectByList: !0,
                                      style: { height: "100%", width: "100%" },
                                      width: "100%",
                                    }),
                                  }),
                                }),
                                e(h, {
                                  __fromCanvasComponent: !0,
                                  children: e(n, {
                                    children: e("p", {
                                      style: {
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-c833264f-ec0f-44ad-b255-ce64174e8d7c, rgb(184, 142, 58))",
                                      },
                                      children: "Back to Top",
                                    }),
                                  }),
                                  className: "framer-1jtser3",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  e("div", {
                    className: "framer-yhntnx",
                    children: f("div", {
                      className: "framer-jqzyhq",
                      children: [
                        e(z, {
                          breakpoint: l,
                          overrides: {
                            eEbqag_vU: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children:
                                    "HISO33: Singapore's Premier Online Casino and Betting Platform",
                                }),
                              }),
                            },
                            RrXQBC2EQ: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children:
                                    "HISO33: Singapore's Premier Online Casino and Betting Platform",
                                }),
                              }),
                            },
                          },
                          children: e(h, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                  "--framer-font-size": "40px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(247, 229, 213)",
                                },
                                children:
                                  "HISO33: Singapore's Premier Online Casino and Betting Platform",
                              }),
                            }),
                            className: "framer-1te2tv1",
                            fonts: ["GF;Bebas Neue-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              f("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: [
                                  "Welcome to ",
                                  e(k, {
                                    href: "https://www.hiso33sg1.com/en-sg/home",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e("a", { children: "HISO33" }),
                                  }),
                                  ", Singapore's leading online casino and betting platform. If you're a fan of live casino games, sports betting, slots, or other exciting games, HISO33 offers an unmatched gaming experience designed to meet all your entertainment needs. Join us today and see why HISO33 is the top choice for online gaming enthusiasts in Singapore.",
                                ],
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-6turqh",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(z, {
                          breakpoint: l,
                          overrides: {
                            eEbqag_vU: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Why HISO33 is the Best Choice",
                                }),
                              }),
                            },
                            RrXQBC2EQ: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Why HISO33 is the Best Choice",
                                }),
                              }),
                            },
                          },
                          children: e(h, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                  "--framer-font-size": "40px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(247, 229, 213)",
                                },
                                children: "Why HISO33 is the Best Choice",
                              }),
                            }),
                            className: "framer-1924xfc",
                            fonts: ["GF;Bebas Neue-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Wide Range of Games",
                              }),
                            }),
                          }),
                          className: "framer-1t9x7s5",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: f("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-size": "13px",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: [
                                "At ",
                                e(k, {
                                  href: "https://www.hiso33.casino/",
                                  openInNewTab: !1,
                                  smoothScroll: !1,
                                  children: e("a", { children: "HISO33" }),
                                }),
                                ", we pride ourselves on offering a diverse array of games to satisfy all types of players. Whether you enjoy the adrenaline rush of live casinos, the strategic thrill of sports betting, or the fun of spinning slot reels, we have something for everyone. Our platform is powered by leading software providers to ensure a smooth and engaging gaming experience.",
                              ],
                            }),
                          }),
                          className: "framer-118yoz1",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children:
                                  "Competitive Odds and Exclusive Promotions",
                              }),
                            }),
                          }),
                          className: "framer-1tz8brw",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              f("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: [
                                  "We understand that getting the best value is crucial in betting. That's why ",
                                  e(k, {
                                    href: "https://www.hiso33.group/",
                                    openInNewTab: !1,
                                    smoothScroll: !1,
                                    children: e("a", { children: "HISO33" }),
                                  }),
                                  " offers some of the most competitive odds in the industry. Additionally, we provide a variety of promotions and bonuses to enhance your gaming experience. From generous welcome bonuses to exciting daily and weekly promotions, we ensure our players get the most out of their time on our platform.",
                                ],
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-hcdxqj",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "User-Friendly Interface",
                              }),
                            }),
                          }),
                          className: "framer-ayjzw9",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "Our platform is designed with the user in mind, featuring an intuitive interface that's easy to navigate. Whether you're placing a bet on your favorite sports team or exploring our extensive selection of casino games, HISO33 makes the process straightforward and enjoyable.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-iei6o",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Top-Notch Security",
                              }),
                            }),
                          }),
                          className: "framer-d7ygk2",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "At HISO33, your security is our top priority. We use advanced encryption technology to protect your personal and financial information, ensuring a safe and secure gaming environment. You can focus on enjoying your gaming experience with peace of mind, knowing your data is protected.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-1bidyli",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "24/7 Customer Support",
                              }),
                            }),
                          }),
                          className: "framer-dq6dle",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "We believe that excellent customer service is essential to a great gaming experience. Our dedicated customer support team is available 24/7 to assist you with any questions or issues. Whether you need help with account registration, deposits, withdrawals, or game rules, our team is here to help.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-x0achy",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(z, {
                          breakpoint: l,
                          overrides: {
                            eEbqag_vU: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Live Casino Games at HISO33",
                                }),
                              }),
                            },
                            RrXQBC2EQ: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Live Casino Games at HISO33",
                                }),
                              }),
                            },
                          },
                          children: e(h, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                  "--framer-font-size": "40px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(247, 229, 213)",
                                },
                                children: "Live Casino Games at HISO33",
                              }),
                            }),
                            className: "framer-1jj1zfr",
                            fonts: ["GF;Bebas Neue-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Authentic Casino Experience",
                              }),
                            }),
                          }),
                          className: "framer-a7vfil",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "Experience the excitement of a real casino from the comfort of your home with our live casino games. Interact with live dealers and other players as you play popular games like blackjack, roulette, baccarat, and more. Our high-quality streaming technology ensures an immersive and authentic gaming experience.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-1djasgt",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Variety of Live Games",
                              }),
                            }),
                          }),
                          className: "framer-16we4xi",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "At HISO33, we offer a wide range of live casino games to suit every preference. Whether you're a fan of classic table games or looking for something new and exciting, our live casino section has it all. Enjoy the thrill of live gaming with the convenience of playing from anywhere.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-12e0d6a",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(z, {
                          breakpoint: l,
                          overrides: {
                            eEbqag_vU: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Sports Betting at HISO33",
                                }),
                              }),
                            },
                            RrXQBC2EQ: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Sports Betting at HISO33",
                                }),
                              }),
                            },
                          },
                          children: e(h, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                  "--framer-font-size": "40px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(247, 229, 213)",
                                },
                                children: "Sports Betting at HISO33",
                              }),
                            }),
                            className: "framer-15uok37",
                            fonts: ["GF;Bebas Neue-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Extensive Sports Coverage",
                              }),
                            }),
                          }),
                          className: "framer-u83559",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "HISO33 provides an extensive selection of sports for betting enthusiasts. Whether you're a fan of football, basketball, tennis, or e-sports, we cover a wide array of sports to keep you engaged. Our platform includes both local and international events, ensuring you never miss out on the action.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-1piw766",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Live Betting Excitement",
                              }),
                            }),
                          }),
                          className: "framer-1jcncxo",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "For those who love the thrill of live betting, HISO33 offers in-play betting options. Place bets on ongoing matches and events in real-time, with dynamic odds that change as the game progresses. Live betting adds an extra layer of excitement to your sports viewing experience.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-ar36ex",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Expert Betting Insights",
                              }),
                            }),
                          }),
                          className: "framer-ff3fxz",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "To help you make informed betting decisions, HISO33 offers expert analysis and tips on various sports. Our team of experts provides valuable insights and predictions to guide your bets, enhancing your chances of winning.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-1v4ulmb",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(z, {
                          breakpoint: l,
                          overrides: {
                            eEbqag_vU: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Slot Games at HISO33",
                                }),
                              }),
                            },
                            RrXQBC2EQ: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Slot Games at HISO33",
                                }),
                              }),
                            },
                          },
                          children: e(h, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                  "--framer-font-size": "40px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(247, 229, 213)",
                                },
                                children: "Slot Games at HISO33",
                              }),
                            }),
                            className: "framer-djbnhp",
                            fonts: ["GF;Bebas Neue-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Extensive Slot Library",
                              }),
                            }),
                          }),
                          className: "framer-4ltxtd",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "HISO33 features a wide variety of slot games from top game developers. Whether you prefer classic 3-reel slots, modern video slots with engaging themes, or progressive jackpot slots with the potential for massive payouts, our platform has it all.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-vbl0jm",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Regular Updates and New Releases",
                              }),
                            }),
                          }),
                          className: "framer-qip60j",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "We regularly update our slot game library to include the latest releases and popular titles. This ensures that our players always have access to new and exciting games. Explore our extensive selection and discover your new favorite slot game.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-6ssdt",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(z, {
                          breakpoint: l,
                          overrides: {
                            eEbqag_vU: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Getting Started with HISO33",
                                }),
                              }),
                            },
                            RrXQBC2EQ: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Getting Started with HISO33",
                                }),
                              }),
                            },
                          },
                          children: e(h, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                  "--framer-font-size": "40px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(247, 229, 213)",
                                },
                                children: "Getting Started with HISO33",
                              }),
                            }),
                            className: "framer-shwfkv",
                            fonts: ["GF;Bebas Neue-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Easy Registration",
                              }),
                            }),
                          }),
                          className: "framer-otfsjl",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "Getting started at HISO33 is quick and easy. Simply visit our website and click on the registration button. Fill in the required details, and you'll be ready to start your gaming journey in no time. Our straightforward registration process ensures you can begin enjoying our services without any hassle.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-nbyrj8",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Convenient Payment Methods",
                              }),
                            }),
                          }),
                          className: "framer-1y2x7t5",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "We offer a variety of secure and convenient payment methods for deposits and withdrawals. Choose from options like credit/debit cards, e-wallets, and bank transfers. Our secure payment system ensures your transactions are processed quickly and safely.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-dhxxig",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Promoting Responsible Gaming",
                              }),
                            }),
                          }),
                          className: "framer-1sdreiu",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "At HISO33, we promote responsible gaming. We provide tools and resources to help our players manage their gambling activities, including setting deposit limits, self-exclusion options, and access to support for gambling-related issues. We strive to ensure our platform is a safe and enjoyable environment for everyone.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-10bvvc5",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(z, {
                          breakpoint: l,
                          overrides: {
                            eEbqag_vU: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children:
                                    "Tailored Experience for Singapore Players",
                                }),
                              }),
                            },
                            RrXQBC2EQ: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children:
                                    "Tailored Experience for Singapore Players",
                                }),
                              }),
                            },
                          },
                          children: e(h, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                  "--framer-font-size": "40px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(247, 229, 213)",
                                },
                                children:
                                  "Tailored Experience for Singapore Players",
                              }),
                            }),
                            className: "framer-1r5xhpa",
                            fonts: ["GF;Bebas Neue-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Localized Services",
                              }),
                            }),
                          }),
                          className: "framer-kveg6h",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "HISO33 offers a tailored experience for players in Singapore, focusing on popular local sports and events. We provide a seamless betting experience with localized payment options and customer support in both English and Mandarin.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-1c7vmct",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: e(n, {
                            children: e("p", {
                              style: {
                                "--font-selector": "R0Y7UG9wcGlucy02MDA=",
                                "--framer-font-family":
                                  '"Poppins", "Poppins Placeholder", sans-serif',
                                "--framer-font-weight": "600",
                                "--framer-text-alignment": "left",
                                "--framer-text-color": "rgb(248, 231, 214)",
                              },
                              children: e("strong", {
                                children: "Exclusive Singapore Promotions",
                              }),
                            }),
                          }),
                          className: "framer-76w5xk",
                          fonts: ["GF;Poppins-600", "GF;Poppins-900"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "Our Singaporean players can enjoy exclusive promotions and bonuses designed specifically for them. Whether it's special offers on local events or bonuses for new players, HISO33 ensures our Singaporean community gets the best value.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                            ],
                          }),
                          className: "framer-n7e7h1",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                        e(z, {
                          breakpoint: l,
                          overrides: {
                            eEbqag_vU: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Conclusion",
                                }),
                              }),
                            },
                            RrXQBC2EQ: {
                              children: e(n, {
                                children: e("p", {
                                  style: {
                                    "--font-selector":
                                      "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                    "--framer-font-family":
                                      '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                    "--framer-font-size": "25px",
                                    "--framer-text-alignment": "left",
                                    "--framer-text-color": "rgb(247, 229, 213)",
                                  },
                                  children: "Conclusion",
                                }),
                              }),
                            },
                          },
                          children: e(h, {
                            __fromCanvasComponent: !0,
                            children: e(n, {
                              children: e("p", {
                                style: {
                                  "--font-selector":
                                    "R0Y7QmViYXMgTmV1ZS1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Bebas Neue", "Bebas Neue Placeholder", sans-serif',
                                  "--framer-font-size": "40px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(247, 229, 213)",
                                },
                                children: "Conclusion",
                              }),
                            }),
                            className: "framer-1rpt0yn",
                            fonts: ["GF;Bebas Neue-regular"],
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                        e(h, {
                          __fromCanvasComponent: !0,
                          children: f(n, {
                            children: [
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "HISO33 is the ultimate destination for online casino and sports betting in Singapore. With a wide range of games, competitive odds, and excellent customer service, we strive to provide the best gaming experience possible. Join us today and discover why HISO33 is the preferred choice for online gaming enthusiasts in Singapore.",
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children: e("br", {
                                  className: "trailing-break",
                                }),
                              }),
                              e("p", {
                                style: {
                                  "--font-selector": "R0Y7UG9wcGlucy1yZWd1bGFy",
                                  "--framer-font-family":
                                    '"Poppins", "Poppins Placeholder", sans-serif',
                                  "--framer-font-size": "13px",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color": "rgb(248, 231, 214)",
                                },
                                children:
                                  "Whether you are a seasoned bettor or new to the world of online gambling, HISO33 has everything you need to enjoy a thrilling and rewarding experience. Register now and take advantage of our exciting promotions and bonuses. We look forward to welcoming you to the HISO33 community!",
                              }),
                            ],
                          }),
                          className: "framer-1t6brnx",
                          fonts: ["GF;Poppins-regular"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  }),
                  S() &&
                    e("div", {
                      className: "framer-8rslw7 hidden-zqyngv",
                      "data-framer-name": "Features",
                      name: "Features",
                      children: e(E, {
                        children: e(L, {
                          className: "framer-n2aaul-container",
                          children: e(z, {
                            breakpoint: l,
                            overrides: {
                              e5B24uv9A: { variant: "EJaYdKjSa" },
                              eEbqag_vU: { variant: "cHpbJG1jP" },
                            },
                            children: e(Pt, {
                              height: "100%",
                              id: "IoUI53eCV",
                              layoutId: "IoUI53eCV",
                              style: { width: "100%" },
                              variant: "wLxPJcMXV",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                  o() &&
                    e("div", {
                      className:
                        "framer-1t4eide hidden-72rtr7 hidden-1hbve8q hidden-5n5ezt",
                      "data-framer-name": "Features",
                      name: "Features",
                      children: e(E, {
                        children: e(L, {
                          className: "framer-1xcqfqg-container",
                          children: e(Pt, {
                            height: "100%",
                            id: "fPZGxBm5t",
                            layoutId: "fPZGxBm5t",
                            style: { width: "100%" },
                            variant: "cHpbJG1jP",
                            width: "100%",
                          }),
                        }),
                      }),
                    }),
                ],
              }),
            }),
            e("div", { className: te(Cn, ...H), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Vl = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-qh6S5.framer-lux5qc, .framer-qh6S5 .framer-lux5qc { display: block; }",
    ".framer-qh6S5.framer-72rtr7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-qh6S5 .framer-mzicto { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 718px; justify-content: center; overflow: hidden; padding: 100px 20px 0px 20px; position: relative; width: 101%; }",
    ".framer-qh6S5 .framer-12s1rcb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 100px 700px; position: relative; width: 97%; z-index: 1; }",
    ".framer-qh6S5 .framer-16pi3b7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 408%; }",
    ".framer-qh6S5 .framer-362wm6 { aspect-ratio: 1.0306859205776173 / 1; flex: none; height: 601px; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 619px); }",
    ".framer-qh6S5 .framer-faus57 { aspect-ratio: 1.0306859205776173 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 630px); left: -58px; overflow: visible; position: absolute; top: 50%; transform: translateY(-50%); width: 649px; z-index: 1; }",
    ".framer-qh6S5 .framer-y6ybj8 { aspect-ratio: 1.0306859205776173 / 1; bottom: -14px; flex: none; height: var(--framer-aspect-ratio-supported, 633px); left: -40px; overflow: visible; position: absolute; width: 652px; z-index: 1; }",
    ".framer-qh6S5 .framer-1q3qk04 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 40px; border-top-left-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 593px; justify-content: center; left: calc(41.20561519405452% - 799px / 2); overflow: hidden; padding: 20px; position: absolute; top: calc(48.18941504178275% - 593px / 2); width: 799px; will-change: var(--framer-will-change-override, transform); z-index: 1; }",
    ".framer-qh6S5 .framer-1ox81gm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 560px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 581px; }",
    ".framer-qh6S5 .framer-1vvur12, .framer-qh6S5 .framer-4set4y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-1viptli { aspect-ratio: 4 / 1; flex: none; height: 94px; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 376px); }",
    ".framer-qh6S5 .framer-1t8pf4x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 158px; width: 581px; z-index: 1; }",
    ".framer-qh6S5 .framer-s2i37l { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25); white-space: pre; width: auto; }",
    ".framer-qh6S5 .framer-1o36qgc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 30px 0px 20px 0px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-ipyosv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; text-shadow: 2px 3px 0px rgba(245, 204, 0, 0.25); white-space: pre; width: auto; }",
    ".framer-qh6S5 .framer-yiw21v { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-qh6S5 .framer-st74yz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-1iw41ok-container { flex: none; height: 69px; position: relative; width: 50%; }",
    ".framer-qh6S5 .framer-k0lbhu { aspect-ratio: 1.4086956521739131 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 318px); left: -266px; overflow: visible; position: absolute; top: 627px; width: 447px; z-index: 1; }",
    ".framer-qh6S5 .framer-i78ybq { aspect-ratio: 1.0396039603960396 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 303px); overflow: visible; position: absolute; right: -146px; top: 684px; width: 315px; z-index: 1; }",
    ".framer-qh6S5 .framer-1rou399 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 389px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-ku9bm6, .framer-qh6S5 .framer-9b1785 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-412zmt, .framer-qh6S5 .framer-ch9iyc, .framer-qh6S5 .framer-1yy97md, .framer-qh6S5 .framer-bgbgzo, .framer-qh6S5 .framer-jpm5n3, .framer-qh6S5 .framer-cvjqky, .framer-qh6S5 .framer-5xvgtv, .framer-qh6S5 .framer-1i72gq5, .framer-qh6S5 .framer-1h1baay, .framer-qh6S5 .framer-ulb8hx, .framer-qh6S5 .framer-9ttox8, .framer-qh6S5 .framer-1jtser3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-qh6S5 .framer-aqc8z9, .framer-qh6S5 .framer-abed85, .framer-qh6S5 .framer-9j6m6f, .framer-qh6S5 .framer-cctj8a { background-color: var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, #805b13); flex: none; height: 3px; overflow: hidden; position: relative; width: 159px; }",
    ".framer-qh6S5 .framer-1qx2sxu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 75%; }",
    ".framer-qh6S5 .framer-zmss27, .framer-qh6S5 .framer-1nlukvt, .framer-qh6S5 .framer-2h43ki { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: min-content; }",
    ".framer-qh6S5 .framer-o46orx { aspect-ratio: 5.046296296296297 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); overflow: visible; position: relative; width: 151px; }",
    ".framer-qh6S5 .framer-81yhx4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: min-content; }",
    ".framer-qh6S5 .framer-1nzu2zg { aspect-ratio: 3.143939393939394 / 1; flex: none; height: 40px; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 126px); }",
    ".framer-qh6S5 .framer-8s670x { aspect-ratio: 3.2936507936507935 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: visible; position: relative; width: 132px; }",
    ".framer-qh6S5 .framer-1aklu26 { aspect-ratio: 2.3580246913580245 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: visible; position: relative; width: 94px; }",
    ".framer-qh6S5 .framer-1k5ve25 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 126px; justify-content: center; overflow: hidden; padding: 0px 20px 0px 20px; position: relative; width: min-content; }",
    ".framer-qh6S5 .framer-up1wk3 { aspect-ratio: 5.1875 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); overflow: visible; position: relative; width: 156px; }",
    ".framer-qh6S5 .framer-44aogt-container { flex: none; height: 392px; position: relative; width: 424px; }",
    ".framer-qh6S5 .framer-13l4pwy-container { flex: none; height: auto; position: relative; width: 1200px; }",
    ".framer-qh6S5 .framer-1diwi5u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 20px 24px 20px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-8zjap2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 46px 0px 20px 0px; position: relative; width: min-content; }",
    ".framer-qh6S5 .framer-1lij0rd-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 482px); position: relative; width: 856px; }",
    ".framer-qh6S5 .framer-u3twv6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-13gc5uw-container, .framer-qh6S5 .framer-y7aud7-container, .framer-qh6S5 .framer-yjih96-container { aspect-ratio: 1.7777777777777777 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 155px); position: relative; width: 276px; }",
    ".framer-qh6S5 .framer-16gdi7m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 50px 10px 50px 10px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-3r0vqc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 98%; }",
    ".framer-qh6S5 .framer-3r1ayl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 100px 0px 100px; position: relative; width: 1200px; }",
    ".framer-qh6S5 .framer-o4lx76-container { aspect-ratio: 1.6666666666666667 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 340px); position: relative; width: 567px; }",
    ".framer-qh6S5 .framer-b3qc31, .framer-qh6S5 .framer-1xkds5z, .framer-qh6S5 .framer-4t40pa, .framer-qh6S5 .framer-1uc2ex5, .framer-qh6S5 .framer-d332l4 { aspect-ratio: 1.6666666666666667 / 1; height: var(--framer-aspect-ratio-supported, 300px); overflow: visible; position: relative; width: 500px; }",
    ".framer-qh6S5 .framer-1j4w45f, .framer-qh6S5 .framer-mba8kr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 20px 50px 20px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-uyjh91, .framer-qh6S5 .framer-nu6df1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 30px 0px 50px 0px; position: relative; width: min-content; }",
    ".framer-qh6S5 .framer-2e2e8q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 54px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-12lesjh, .framer-qh6S5 .framer-12fdh5y, .framer-qh6S5 .framer-8gkm5n, .framer-qh6S5 .framer-1ypic19, .framer-qh6S5 .framer-1urhin0, .framer-qh6S5 .framer-j0cd8y, .framer-qh6S5 .framer-rmw02k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 53px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-qh6S5 .framer-hf6nyk, .framer-qh6S5 .framer-hgfmh2, .framer-qh6S5 .framer-4bh39l, .framer-qh6S5 .framer-1hws591, .framer-qh6S5 .framer-c67giv, .framer-qh6S5 .framer-w2qo9h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-qh6S5 .framer-dftfaw, .framer-qh6S5 .framer-1dg1wj0, .framer-qh6S5 .framer-e9ps7j, .framer-qh6S5 .framer-5sicv2, .framer-qh6S5 .framer-1v6asea, .framer-qh6S5 .framer-s9g5j9 { background-color: var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, #805b13); flex: none; height: 30px; overflow: hidden; position: relative; width: 3px; }",
    ".framer-qh6S5 .framer-13njlun-container { flex: none; height: 100%; position: relative; width: 80%; }",
    ".framer-qh6S5 .framer-2yotv0, .framer-qh6S5 .framer-pf477l, .framer-qh6S5 .framer-yjq7ck, .framer-qh6S5 .framer-bpbib6, .framer-qh6S5 .framer-1fb3y9z, .framer-qh6S5 .framer-1pwp192, .framer-qh6S5 .framer-1qeghg5, .framer-qh6S5 .framer-1qqoxzw, .framer-qh6S5 .framer-1vuu5am, .framer-qh6S5 .framer-lrp6vt, .framer-qh6S5 .framer-bvlngp, .framer-qh6S5 .framer-17fhj5a, .framer-qh6S5 .framer-qq07cq, .framer-qh6S5 .framer-1ey609z, .framer-qh6S5 .framer-ocy65, .framer-qh6S5 .framer-18w281t, .framer-qh6S5 .framer-p8srnl, .framer-qh6S5 .framer-16ngwmu, .framer-qh6S5 .framer-17zqubu, .framer-qh6S5 .framer-1g3k328, .framer-qh6S5 .framer-jwfzsy, .framer-qh6S5 .framer-1eogqpr { aspect-ratio: 2 / 1; height: var(--framer-aspect-ratio-supported, 56px); overflow: visible; position: relative; width: 112px; }",
    ".framer-qh6S5 .framer-am98eq-container { flex: none; height: 80px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-1vz1zny, .framer-qh6S5 .framer-1x5ss8w, .framer-qh6S5 .framer-8mg67a, .framer-qh6S5 .framer-1ecxpen, .framer-qh6S5 .framer-1l9i7va, .framer-qh6S5 .framer-18rgdwe, .framer-qh6S5 .framer-gsiq68, .framer-qh6S5 .framer-bydn5k, .framer-qh6S5 .framer-xc4mc5, .framer-qh6S5 .framer-wvn3gn, .framer-qh6S5 .framer-a63op4, .framer-qh6S5 .framer-13k3aqi { aspect-ratio: 2 / 1; height: var(--framer-aspect-ratio-supported, 51px); overflow: visible; position: relative; width: 102px; }",
    ".framer-qh6S5 .framer-fspv4t, .framer-qh6S5 .framer-18mf6z3, .framer-qh6S5 .framer-jnelf3, .framer-qh6S5 .framer-1kmeybz, .framer-qh6S5 .framer-4efm4z, .framer-qh6S5 .framer-1io3gt0, .framer-qh6S5 .framer-1pcxaz9, .framer-qh6S5 .framer-pxj7uh { aspect-ratio: 2 / 1; height: var(--framer-aspect-ratio-supported, 51px); overflow: visible; position: relative; width: 101px; }",
    ".framer-qh6S5 .framer-equz8w, .framer-qh6S5 .framer-1143s84 { aspect-ratio: 2 / 1; height: var(--framer-aspect-ratio-supported, 52px); overflow: visible; position: relative; width: 103px; }",
    ".framer-qh6S5 .framer-1yxoy3b { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-qh6S5 .framer-1l7p3fe-container, .framer-qh6S5 .framer-1pind0m-container, .framer-qh6S5 .framer-1ums90g-container, .framer-qh6S5 .framer-hml6jx-container, .framer-qh6S5 .framer-1bfib23-container, .framer-qh6S5 .framer-5wy1ga-container, .framer-qh6S5 .framer-xr356-container, .framer-qh6S5 .framer-1mmihnc-container, .framer-qh6S5 .framer-1n44etr-container, .framer-qh6S5 .framer-139tne3-container, .framer-qh6S5 .framer-1aoqv9o-container, .framer-qh6S5 .framer-1d0rbj1-container, .framer-qh6S5 .framer-s6yrar-container, .framer-qh6S5 .framer-b0vvgb-container, .framer-qh6S5 .framer-fgjnth-container, .framer-qh6S5 .framer-16tk8hl-container, .framer-qh6S5 .framer-jip60n-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-qh6S5 .framer-1x4xvh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-1p4fogz-container { flex: none; height: auto; position: relative; width: 350px; }",
    ".framer-qh6S5 .framer-r828nw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 50px 0px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-1i49rta-container { flex: none; height: auto; position: relative; width: 519px; }",
    ".framer-qh6S5 .framer-xofboy-container { flex: none; height: auto; position: relative; width: 390px; }",
    ".framer-qh6S5 .framer-96grgz { align-content: center; align-items: center; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px 30px 0px 30px; position: relative; width: 1114px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-qh6S5 .framer-20yad { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }",
    ".framer-qh6S5 .framer-r4p704-container { flex: none; height: 14px; position: relative; width: 17px; }",
    ".framer-qh6S5 .framer-yhntnx { align-content: center; align-items: center; background-color: var(--token-268b3ff2-5c1d-40e2-9772-6ec37c059874, #805b13); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 60px 20px 20px 20px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-jqzyhq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 40px 0px 40px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-1te2tv1, .framer-qh6S5 .framer-6turqh, .framer-qh6S5 .framer-1924xfc, .framer-qh6S5 .framer-1t9x7s5, .framer-qh6S5 .framer-118yoz1, .framer-qh6S5 .framer-1tz8brw, .framer-qh6S5 .framer-hcdxqj, .framer-qh6S5 .framer-ayjzw9, .framer-qh6S5 .framer-iei6o, .framer-qh6S5 .framer-d7ygk2, .framer-qh6S5 .framer-1bidyli, .framer-qh6S5 .framer-dq6dle, .framer-qh6S5 .framer-x0achy, .framer-qh6S5 .framer-1jj1zfr, .framer-qh6S5 .framer-a7vfil, .framer-qh6S5 .framer-1djasgt, .framer-qh6S5 .framer-16we4xi, .framer-qh6S5 .framer-12e0d6a, .framer-qh6S5 .framer-15uok37, .framer-qh6S5 .framer-u83559, .framer-qh6S5 .framer-1piw766, .framer-qh6S5 .framer-1jcncxo, .framer-qh6S5 .framer-ar36ex, .framer-qh6S5 .framer-ff3fxz, .framer-qh6S5 .framer-1v4ulmb, .framer-qh6S5 .framer-djbnhp, .framer-qh6S5 .framer-4ltxtd, .framer-qh6S5 .framer-vbl0jm, .framer-qh6S5 .framer-qip60j, .framer-qh6S5 .framer-6ssdt, .framer-qh6S5 .framer-shwfkv, .framer-qh6S5 .framer-otfsjl, .framer-qh6S5 .framer-nbyrj8, .framer-qh6S5 .framer-1y2x7t5, .framer-qh6S5 .framer-dhxxig, .framer-qh6S5 .framer-1sdreiu, .framer-qh6S5 .framer-10bvvc5, .framer-qh6S5 .framer-1r5xhpa, .framer-qh6S5 .framer-kveg6h, .framer-qh6S5 .framer-1c7vmct, .framer-qh6S5 .framer-76w5xk, .framer-qh6S5 .framer-n7e7h1, .framer-qh6S5 .framer-1rpt0yn, .framer-qh6S5 .framer-1t6brnx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-qh6S5 .framer-8rslw7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-n2aaul-container, .framer-qh6S5 .framer-1xcqfqg-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-qh6S5 .framer-1t4eide { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 278px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 428px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-qh6S5.framer-72rtr7, .framer-qh6S5 .framer-mzicto, .framer-qh6S5 .framer-12s1rcb, .framer-qh6S5 .framer-16pi3b7, .framer-qh6S5 .framer-1q3qk04, .framer-qh6S5 .framer-1ox81gm, .framer-qh6S5 .framer-1vvur12, .framer-qh6S5 .framer-1t8pf4x, .framer-qh6S5 .framer-1o36qgc, .framer-qh6S5 .framer-st74yz, .framer-qh6S5 .framer-1rou399, .framer-qh6S5 .framer-ku9bm6, .framer-qh6S5 .framer-1qx2sxu, .framer-qh6S5 .framer-zmss27, .framer-qh6S5 .framer-81yhx4, .framer-qh6S5 .framer-1nlukvt, .framer-qh6S5 .framer-2h43ki, .framer-qh6S5 .framer-1k5ve25, .framer-qh6S5 .framer-4set4y, .framer-qh6S5 .framer-1diwi5u, .framer-qh6S5 .framer-8zjap2, .framer-qh6S5 .framer-u3twv6, .framer-qh6S5 .framer-16gdi7m, .framer-qh6S5 .framer-3r0vqc, .framer-qh6S5 .framer-3r1ayl, .framer-qh6S5 .framer-1j4w45f, .framer-qh6S5 .framer-uyjh91, .framer-qh6S5 .framer-2e2e8q, .framer-qh6S5 .framer-12lesjh, .framer-qh6S5 .framer-hf6nyk, .framer-qh6S5 .framer-12fdh5y, .framer-qh6S5 .framer-hgfmh2, .framer-qh6S5 .framer-8gkm5n, .framer-qh6S5 .framer-4bh39l, .framer-qh6S5 .framer-1ypic19, .framer-qh6S5 .framer-1hws591, .framer-qh6S5 .framer-1urhin0, .framer-qh6S5 .framer-c67giv, .framer-qh6S5 .framer-j0cd8y, .framer-qh6S5 .framer-w2qo9h, .framer-qh6S5 .framer-rmw02k, .framer-qh6S5 .framer-9b1785, .framer-qh6S5 .framer-mba8kr, .framer-qh6S5 .framer-nu6df1, .framer-qh6S5 .framer-1yxoy3b, .framer-qh6S5 .framer-1x4xvh, .framer-qh6S5 .framer-r828nw, .framer-qh6S5 .framer-96grgz, .framer-qh6S5 .framer-20yad, .framer-qh6S5 .framer-yhntnx, .framer-qh6S5 .framer-jqzyhq, .framer-qh6S5 .framer-8rslw7, .framer-qh6S5 .framer-1t4eide { gap: 0px; } .framer-qh6S5.framer-72rtr7 > *, .framer-qh6S5 .framer-1ox81gm > *, .framer-qh6S5 .framer-1o36qgc > *, .framer-qh6S5 .framer-1rou399 > *, .framer-qh6S5 .framer-8rslw7 > *, .framer-qh6S5 .framer-1t4eide > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-qh6S5.framer-72rtr7 > :first-child, .framer-qh6S5 .framer-16pi3b7 > :first-child, .framer-qh6S5 .framer-1q3qk04 > :first-child, .framer-qh6S5 .framer-1ox81gm > :first-child, .framer-qh6S5 .framer-1vvur12 > :first-child, .framer-qh6S5 .framer-1t8pf4x > :first-child, .framer-qh6S5 .framer-1o36qgc > :first-child, .framer-qh6S5 .framer-st74yz > :first-child, .framer-qh6S5 .framer-1rou399 > :first-child, .framer-qh6S5 .framer-ku9bm6 > :first-child, .framer-qh6S5 .framer-zmss27 > :first-child, .framer-qh6S5 .framer-1nlukvt > :first-child, .framer-qh6S5 .framer-2h43ki > :first-child, .framer-qh6S5 .framer-1k5ve25 > :first-child, .framer-qh6S5 .framer-4set4y > :first-child, .framer-qh6S5 .framer-1diwi5u > :first-child, .framer-qh6S5 .framer-16gdi7m > :first-child, .framer-qh6S5 .framer-3r0vqc > :first-child, .framer-qh6S5 .framer-1j4w45f > :first-child, .framer-qh6S5 .framer-uyjh91 > :first-child, .framer-qh6S5 .framer-9b1785 > :first-child, .framer-qh6S5 .framer-mba8kr > :first-child, .framer-qh6S5 .framer-nu6df1 > :first-child, .framer-qh6S5 .framer-1yxoy3b > :first-child, .framer-qh6S5 .framer-1x4xvh > :first-child, .framer-qh6S5 .framer-r828nw > :first-child, .framer-qh6S5 .framer-yhntnx > :first-child, .framer-qh6S5 .framer-jqzyhq > :first-child, .framer-qh6S5 .framer-8rslw7 > :first-child, .framer-qh6S5 .framer-1t4eide > :first-child { margin-top: 0px; } .framer-qh6S5.framer-72rtr7 > :last-child, .framer-qh6S5 .framer-16pi3b7 > :last-child, .framer-qh6S5 .framer-1q3qk04 > :last-child, .framer-qh6S5 .framer-1ox81gm > :last-child, .framer-qh6S5 .framer-1vvur12 > :last-child, .framer-qh6S5 .framer-1t8pf4x > :last-child, .framer-qh6S5 .framer-1o36qgc > :last-child, .framer-qh6S5 .framer-st74yz > :last-child, .framer-qh6S5 .framer-1rou399 > :last-child, .framer-qh6S5 .framer-ku9bm6 > :last-child, .framer-qh6S5 .framer-zmss27 > :last-child, .framer-qh6S5 .framer-1nlukvt > :last-child, .framer-qh6S5 .framer-2h43ki > :last-child, .framer-qh6S5 .framer-1k5ve25 > :last-child, .framer-qh6S5 .framer-4set4y > :last-child, .framer-qh6S5 .framer-1diwi5u > :last-child, .framer-qh6S5 .framer-16gdi7m > :last-child, .framer-qh6S5 .framer-3r0vqc > :last-child, .framer-qh6S5 .framer-1j4w45f > :last-child, .framer-qh6S5 .framer-uyjh91 > :last-child, .framer-qh6S5 .framer-9b1785 > :last-child, .framer-qh6S5 .framer-mba8kr > :last-child, .framer-qh6S5 .framer-nu6df1 > :last-child, .framer-qh6S5 .framer-1yxoy3b > :last-child, .framer-qh6S5 .framer-1x4xvh > :last-child, .framer-qh6S5 .framer-r828nw > :last-child, .framer-qh6S5 .framer-yhntnx > :last-child, .framer-qh6S5 .framer-jqzyhq > :last-child, .framer-qh6S5 .framer-8rslw7 > :last-child, .framer-qh6S5 .framer-1t4eide > :last-child { margin-bottom: 0px; } .framer-qh6S5 .framer-mzicto > *, .framer-qh6S5 .framer-1qx2sxu > *, .framer-qh6S5 .framer-96grgz > *, .framer-qh6S5 .framer-20yad > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-qh6S5 .framer-mzicto > :first-child, .framer-qh6S5 .framer-12s1rcb > :first-child, .framer-qh6S5 .framer-1qx2sxu > :first-child, .framer-qh6S5 .framer-81yhx4 > :first-child, .framer-qh6S5 .framer-8zjap2 > :first-child, .framer-qh6S5 .framer-u3twv6 > :first-child, .framer-qh6S5 .framer-3r1ayl > :first-child, .framer-qh6S5 .framer-2e2e8q > :first-child, .framer-qh6S5 .framer-12lesjh > :first-child, .framer-qh6S5 .framer-hf6nyk > :first-child, .framer-qh6S5 .framer-12fdh5y > :first-child, .framer-qh6S5 .framer-hgfmh2 > :first-child, .framer-qh6S5 .framer-8gkm5n > :first-child, .framer-qh6S5 .framer-4bh39l > :first-child, .framer-qh6S5 .framer-1ypic19 > :first-child, .framer-qh6S5 .framer-1hws591 > :first-child, .framer-qh6S5 .framer-1urhin0 > :first-child, .framer-qh6S5 .framer-c67giv > :first-child, .framer-qh6S5 .framer-j0cd8y > :first-child, .framer-qh6S5 .framer-w2qo9h > :first-child, .framer-qh6S5 .framer-rmw02k > :first-child, .framer-qh6S5 .framer-96grgz > :first-child, .framer-qh6S5 .framer-20yad > :first-child { margin-left: 0px; } .framer-qh6S5 .framer-mzicto > :last-child, .framer-qh6S5 .framer-12s1rcb > :last-child, .framer-qh6S5 .framer-1qx2sxu > :last-child, .framer-qh6S5 .framer-81yhx4 > :last-child, .framer-qh6S5 .framer-8zjap2 > :last-child, .framer-qh6S5 .framer-u3twv6 > :last-child, .framer-qh6S5 .framer-3r1ayl > :last-child, .framer-qh6S5 .framer-2e2e8q > :last-child, .framer-qh6S5 .framer-12lesjh > :last-child, .framer-qh6S5 .framer-hf6nyk > :last-child, .framer-qh6S5 .framer-12fdh5y > :last-child, .framer-qh6S5 .framer-hgfmh2 > :last-child, .framer-qh6S5 .framer-8gkm5n > :last-child, .framer-qh6S5 .framer-4bh39l > :last-child, .framer-qh6S5 .framer-1ypic19 > :last-child, .framer-qh6S5 .framer-1hws591 > :last-child, .framer-qh6S5 .framer-1urhin0 > :last-child, .framer-qh6S5 .framer-c67giv > :last-child, .framer-qh6S5 .framer-j0cd8y > :last-child, .framer-qh6S5 .framer-w2qo9h > :last-child, .framer-qh6S5 .framer-rmw02k > :last-child, .framer-qh6S5 .framer-96grgz > :last-child, .framer-qh6S5 .framer-20yad > :last-child { margin-right: 0px; } .framer-qh6S5 .framer-12s1rcb > *, .framer-qh6S5 .framer-81yhx4 > *, .framer-qh6S5 .framer-8zjap2 > *, .framer-qh6S5 .framer-3r1ayl > *, .framer-qh6S5 .framer-2e2e8q > *, .framer-qh6S5 .framer-12lesjh > *, .framer-qh6S5 .framer-hf6nyk > *, .framer-qh6S5 .framer-12fdh5y > *, .framer-qh6S5 .framer-hgfmh2 > *, .framer-qh6S5 .framer-8gkm5n > *, .framer-qh6S5 .framer-4bh39l > *, .framer-qh6S5 .framer-1ypic19 > *, .framer-qh6S5 .framer-1hws591 > *, .framer-qh6S5 .framer-1urhin0 > *, .framer-qh6S5 .framer-c67giv > *, .framer-qh6S5 .framer-j0cd8y > *, .framer-qh6S5 .framer-w2qo9h > *, .framer-qh6S5 .framer-rmw02k > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-qh6S5 .framer-16pi3b7 > *, .framer-qh6S5 .framer-1vvur12 > *, .framer-qh6S5 .framer-1t8pf4x > *, .framer-qh6S5 .framer-st74yz > *, .framer-qh6S5 .framer-ku9bm6 > *, .framer-qh6S5 .framer-zmss27 > *, .framer-qh6S5 .framer-1nlukvt > *, .framer-qh6S5 .framer-2h43ki > *, .framer-qh6S5 .framer-1k5ve25 > *, .framer-qh6S5 .framer-4set4y > *, .framer-qh6S5 .framer-1diwi5u > *, .framer-qh6S5 .framer-16gdi7m > *, .framer-qh6S5 .framer-3r0vqc > *, .framer-qh6S5 .framer-1j4w45f > *, .framer-qh6S5 .framer-uyjh91 > *, .framer-qh6S5 .framer-9b1785 > *, .framer-qh6S5 .framer-mba8kr > *, .framer-qh6S5 .framer-nu6df1 > *, .framer-qh6S5 .framer-1yxoy3b > *, .framer-qh6S5 .framer-1x4xvh > *, .framer-qh6S5 .framer-r828nw > *, .framer-qh6S5 .framer-yhntnx > *, .framer-qh6S5 .framer-jqzyhq > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-qh6S5 .framer-1q3qk04 > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-qh6S5 .framer-u3twv6 > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } }",
    "@media (min-width: 1200px) { .framer-qh6S5 .hidden-72rtr7 { display: none !important; } }",
    "@media (max-width: 427px) { .framer-qh6S5 .hidden-1hbve8q { display: none !important; } .framer-qh6S5.framer-72rtr7, .framer-qh6S5 .framer-n2aaul-container { width: 390px; } .framer-qh6S5 .framer-mzicto { flex-direction: column; height: 985px; justify-content: flex-start; order: 0; padding: 0px; width: 100%; } .framer-qh6S5 .framer-12s1rcb { gap: 0px; height: 682px; left: -55px; order: 1; position: absolute; right: -17px; top: 315px; width: unset; } .framer-qh6S5 .framer-16pi3b7 { gap: 0px; order: 0; width: min-content; } .framer-qh6S5 .framer-faus57, .framer-qh6S5 .framer-1jtser3 { order: 1; } .framer-qh6S5 .framer-1q3qk04 { align-content: center; align-items: center; border-bottom-right-radius: 40px; border-top-right-radius: 40px; gap: 0px; height: 379px; left: 0px; order: 0; padding: 0px; top: 34px; width: 100%; } .framer-qh6S5 .framer-1ox81gm { height: 490px; order: 0; width: 122%; } .framer-qh6S5 .framer-1vvur12 { border-bottom-left-radius: 19px; border-bottom-right-radius: 19px; border-top-left-radius: 19px; border-top-right-radius: 19px; gap: 5px; padding: 8px; width: min-content; will-change: var(--framer-will-change-override, transform); } .framer-qh6S5 .framer-1viptli { aspect-ratio: unset; height: 46px; order: 0; width: 218px; } .framer-qh6S5 .framer-1t8pf4x { gap: 5px; left: 50%; right: unset; top: 27%; transform: translate(-50%, -50%); width: 100%; } .framer-qh6S5 .framer-s2i37l { order: 0; text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25); } .framer-qh6S5 .framer-1o36qgc { padding: 15px 0px 15px 0px; } .framer-qh6S5 .framer-ipyosv { text-shadow: unset; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-qh6S5 .framer-st74yz { aspect-ratio: 3.095744680851064 / 1; border-bottom-left-radius: 39px; border-bottom-right-radius: 39px; border-top-left-radius: 39px; border-top-right-radius: 39px; height: var(--framer-aspect-ratio-supported, 123px); padding: 0px 0px 62px 0px; width: 80%; will-change: var(--framer-will-change-override, transform); } .framer-qh6S5 .framer-1iw41ok-container { height: 100%; width: auto; } .framer-qh6S5 .framer-k0lbhu { height: var(--framer-aspect-ratio-supported, 178px); left: -149px; order: 1; top: 882px; width: 251px; } .framer-qh6S5 .framer-i78ybq { height: var(--framer-aspect-ratio-supported, 208px); order: 2; right: -158px; top: 832px; width: 216px; } .framer-qh6S5 .framer-1rou399 { gap: 5px; height: min-content; justify-content: flex-start; order: 3; padding: 0px 0px 20px 0px; width: 104%; } .framer-qh6S5 .framer-ku9bm6 { height: 66px; width: 99%; } .framer-qh6S5 .framer-aqc8z9, .framer-qh6S5 .framer-abed85, .framer-qh6S5 .framer-9j6m6f, .framer-qh6S5 .framer-cctj8a { width: 100px; } .framer-qh6S5 .framer-1qx2sxu { gap: 6px; width: 99%; } .framer-qh6S5 .framer-zmss27 { gap: 0px; padding: 0px 5px 0px 5px; } .framer-qh6S5 .framer-o46orx { height: var(--framer-aspect-ratio-supported, 25px); width: 126px; } .framer-qh6S5 .framer-81yhx4, .framer-qh6S5 .framer-1nlukvt { padding: 0px 5px 0px 5px; } .framer-qh6S5 .framer-1nzu2zg { height: 28px; width: var(--framer-aspect-ratio-supported, 88px); } .framer-qh6S5 .framer-8s670x { height: var(--framer-aspect-ratio-supported, 28px); width: 92px; } .framer-qh6S5 .framer-2h43ki, .framer-qh6S5 .framer-1diwi5u { padding: 0px 10px 0px 10px; } .framer-qh6S5 .framer-1aklu26 { height: var(--framer-aspect-ratio-supported, 30px); width: 71px; } .framer-qh6S5 .framer-1k5ve25 { height: min-content; padding: 5px; } .framer-qh6S5 .framer-up1wk3 { aspect-ratio: 5.175 / 1; height: var(--framer-aspect-ratio-supported, 20px); width: 104px; } .framer-qh6S5 .framer-44aogt-container { order: 4; } .framer-qh6S5 .framer-4set4y { order: 6; padding: 50px 0px 50px 0px; } .framer-qh6S5 .framer-8zjap2 { padding: 0px; width: 100%; } .framer-qh6S5 .framer-1lij0rd-container { height: var(--framer-aspect-ratio-supported, 208px); order: 0; width: 100%; } .framer-qh6S5 .framer-u3twv6 { width: 111%; } .framer-qh6S5 .framer-13gc5uw-container { height: var(--framer-aspect-ratio-supported, 68px); order: 0; width: 120px; } .framer-qh6S5 .framer-y7aud7-container { height: var(--framer-aspect-ratio-supported, 68px); order: 1; width: 120px; } .framer-qh6S5 .framer-yjih96-container { height: var(--framer-aspect-ratio-supported, 68px); order: 2; width: 120px; } .framer-qh6S5 .framer-16gdi7m { order: 7; padding: 0px 10px 20px 10px; } .framer-qh6S5 .framer-3r0vqc { height: min-content; width: 99%; } .framer-qh6S5 .framer-3r1ayl { height: 272px; min-width: 391px; padding: 0px; width: min-content; } .framer-qh6S5 .framer-o4lx76-container { height: var(--framer-aspect-ratio-supported, 236px); left: -1px; position: absolute; right: 0px; top: 50%; transform: translateY(-50%); width: unset; z-index: 1; } .framer-qh6S5 .framer-1j4w45f { gap: 0px; order: 8; padding: 0px 20px 20px 20px; } .framer-qh6S5 .framer-uyjh91, .framer-qh6S5 .framer-nu6df1 { order: 0; padding: 19px 0px 19px 0px; } .framer-qh6S5 .framer-2e2e8q { flex-wrap: wrap; gap: 6px; height: min-content; order: 1; width: 97%; } .framer-qh6S5 .framer-12lesjh, .framer-qh6S5 .framer-12fdh5y, .framer-qh6S5 .framer-8gkm5n, .framer-qh6S5 .framer-1ypic19, .framer-qh6S5 .framer-1urhin0, .framer-qh6S5 .framer-j0cd8y, .framer-qh6S5 .framer-rmw02k { height: min-content; } .framer-qh6S5 .framer-dftfaw, .framer-qh6S5 .framer-1dg1wj0, .framer-qh6S5 .framer-e9ps7j, .framer-qh6S5 .framer-5sicv2, .framer-qh6S5 .framer-s9g5j9 { height: 20px; width: 2px; } .framer-qh6S5 .framer-9b1785 { gap: 0px; height: min-content; order: 2; width: 399px; } .framer-qh6S5 .framer-mba8kr { gap: 0px; order: 9; padding: 0px 20px 20px 20px; } .framer-qh6S5 .framer-1x4xvh { order: 2; } .framer-qh6S5 .framer-r828nw { height: 302px; order: 10; padding: 0px; } .framer-qh6S5 .framer-xofboy-container, .framer-qh6S5 .framer-96grgz { width: 100%; } .framer-qh6S5 .framer-20yad, .framer-qh6S5 .framer-r4p704-container { order: 0; } .framer-qh6S5 .framer-yhntnx { order: 12; padding: 60px 10px 20px 10px; } .framer-qh6S5 .framer-jqzyhq { padding: 0px 20px 0px 20px; } .framer-qh6S5 .framer-8rslw7 { order: 13; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-qh6S5 .framer-mzicto, .framer-qh6S5 .framer-12s1rcb, .framer-qh6S5 .framer-16pi3b7, .framer-qh6S5 .framer-1q3qk04, .framer-qh6S5 .framer-1vvur12, .framer-qh6S5 .framer-1t8pf4x, .framer-qh6S5 .framer-1rou399, .framer-qh6S5 .framer-1qx2sxu, .framer-qh6S5 .framer-zmss27, .framer-qh6S5 .framer-1j4w45f, .framer-qh6S5 .framer-2e2e8q, .framer-qh6S5 .framer-9b1785, .framer-qh6S5 .framer-mba8kr { gap: 0px; } .framer-qh6S5 .framer-mzicto > *, .framer-qh6S5 .framer-16pi3b7 > *, .framer-qh6S5 .framer-1q3qk04 > *, .framer-qh6S5 .framer-zmss27 > *, .framer-qh6S5 .framer-1j4w45f > *, .framer-qh6S5 .framer-9b1785 > *, .framer-qh6S5 .framer-mba8kr > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-qh6S5 .framer-mzicto > :first-child, .framer-qh6S5 .framer-16pi3b7 > :first-child, .framer-qh6S5 .framer-1q3qk04 > :first-child, .framer-qh6S5 .framer-1vvur12 > :first-child, .framer-qh6S5 .framer-1t8pf4x > :first-child, .framer-qh6S5 .framer-1rou399 > :first-child, .framer-qh6S5 .framer-zmss27 > :first-child, .framer-qh6S5 .framer-1j4w45f > :first-child, .framer-qh6S5 .framer-9b1785 > :first-child, .framer-qh6S5 .framer-mba8kr > :first-child { margin-top: 0px; } .framer-qh6S5 .framer-mzicto > :last-child, .framer-qh6S5 .framer-16pi3b7 > :last-child, .framer-qh6S5 .framer-1q3qk04 > :last-child, .framer-qh6S5 .framer-1vvur12 > :last-child, .framer-qh6S5 .framer-1t8pf4x > :last-child, .framer-qh6S5 .framer-1rou399 > :last-child, .framer-qh6S5 .framer-zmss27 > :last-child, .framer-qh6S5 .framer-1j4w45f > :last-child, .framer-qh6S5 .framer-9b1785 > :last-child, .framer-qh6S5 .framer-mba8kr > :last-child { margin-bottom: 0px; } .framer-qh6S5 .framer-12s1rcb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-qh6S5 .framer-12s1rcb > :first-child, .framer-qh6S5 .framer-1qx2sxu > :first-child, .framer-qh6S5 .framer-2e2e8q > :first-child { margin-left: 0px; } .framer-qh6S5 .framer-12s1rcb > :last-child, .framer-qh6S5 .framer-1qx2sxu > :last-child, .framer-qh6S5 .framer-2e2e8q > :last-child { margin-right: 0px; } .framer-qh6S5 .framer-1vvur12 > *, .framer-qh6S5 .framer-1t8pf4x > *, .framer-qh6S5 .framer-1rou399 > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-qh6S5 .framer-1qx2sxu > *, .framer-qh6S5 .framer-2e2e8q > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }}",
    "@media (min-width: 810px) and (max-width: 1199px) { .framer-qh6S5 .hidden-5n5ezt { display: none !important; } .framer-qh6S5.framer-72rtr7 { width: 810px; } .framer-qh6S5 .framer-12s1rcb { padding: 0px 0px 100px 600px; width: 1294px; } .framer-qh6S5 .framer-16pi3b7 { width: 127%; } .framer-qh6S5 .framer-362wm6, .framer-qh6S5 .framer-s2i37l { order: 0; } .framer-qh6S5 .framer-1q3qk04 { height: 563px; left: calc(36.84210526315791% - 610px / 2); top: calc(46.65738161559891% - 563px / 2); width: 610px; } .framer-qh6S5 .framer-1ox81gm { height: 512px; order: 0; width: 446px; } .framer-qh6S5 .framer-1vvur12 { height: 126px; } .framer-qh6S5 .framer-1viptli { height: 78%; width: var(--framer-aspect-ratio-supported, 392px); } .framer-qh6S5 .framer-1t8pf4x { left: 0px; right: 30px; top: 158px; width: unset; } .framer-qh6S5 .framer-1iw41ok-container { height: 65px; width: 57%; } .framer-qh6S5 .framer-k0lbhu { left: -263px; top: 538px; } .framer-qh6S5 .framer-i78ybq { right: -149px; top: 595px; } .framer-qh6S5 .framer-1rou399 { width: 81%; } .framer-qh6S5 .framer-1qx2sxu { width: 98%; } .framer-qh6S5 .framer-13l4pwy-container { width: 101%; } .framer-qh6S5 .framer-1diwi5u { padding: 0px 20px 0px 20px; } .framer-qh6S5 .framer-8zjap2 { width: 856px; } .framer-qh6S5 .framer-1lij0rd-container { height: var(--framer-aspect-ratio-supported, 434px); width: 90%; } .framer-qh6S5 .framer-13gc5uw-container, .framer-qh6S5 .framer-y7aud7-container, .framer-qh6S5 .framer-yjih96-container { height: var(--framer-aspect-ratio-supported, 141px); width: 250px; } .framer-qh6S5 .framer-3r1ayl { height: 362px; } .framer-qh6S5 .framer-o4lx76-container { left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); z-index: 1; } .framer-qh6S5 .framer-96grgz { width: 788px; } .framer-qh6S5 .framer-8rslw7 { align-content: flex-start; align-items: flex-start; }}",
    "@media (min-width: 428px) and (max-width: 809px) { .framer-qh6S5 .hidden-zqyngv { display: none !important; } .framer-qh6S5.framer-72rtr7 { width: 428px; } .framer-qh6S5 .framer-mzicto { flex-direction: column; height: 985px; justify-content: flex-start; order: 0; padding: 0px; width: 100%; } .framer-qh6S5 .framer-12s1rcb { gap: 0px; height: 651px; left: -36px; order: 1; position: absolute; right: -36px; top: 320px; width: unset; } .framer-qh6S5 .framer-16pi3b7 { gap: 0px; min-height: 605px; min-width: 445px; order: 0; width: min-content; } .framer-qh6S5 .framer-y6ybj8, .framer-qh6S5 .framer-1x4xvh { order: 2; } .framer-qh6S5 .framer-1q3qk04 { align-content: center; align-items: center; border-bottom-right-radius: 40px; border-top-right-radius: 40px; gap: 0px; height: 379px; left: 0px; order: 0; padding: 0px; top: 34px; width: 100%; } .framer-qh6S5 .framer-1ox81gm { height: 490px; order: 0; width: 122%; } .framer-qh6S5 .framer-1vvur12 { border-bottom-left-radius: 19px; border-bottom-right-radius: 19px; border-top-left-radius: 19px; border-top-right-radius: 19px; gap: 5px; padding: 8px; width: min-content; will-change: var(--framer-will-change-override, transform); } .framer-qh6S5 .framer-1viptli { aspect-ratio: unset; height: 46px; order: 0; width: 218px; } .framer-qh6S5 .framer-1t8pf4x { gap: 5px; left: 50%; right: unset; top: 26%; transform: translate(-50%, -50%); } .framer-qh6S5 .framer-s2i37l { text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25); } .framer-qh6S5 .framer-1o36qgc { padding: 15px 0px 15px 0px; } .framer-qh6S5 .framer-ipyosv { text-shadow: unset; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-qh6S5 .framer-st74yz { aspect-ratio: 3.095744680851064 / 1; border-bottom-left-radius: 39px; border-bottom-right-radius: 39px; border-top-left-radius: 39px; border-top-right-radius: 39px; height: var(--framer-aspect-ratio-supported, 135px); padding: 5px 0px 62px 0px; width: 80%; will-change: var(--framer-will-change-override, transform); } .framer-qh6S5 .framer-1iw41ok-container { height: 100%; width: auto; } .framer-qh6S5 .framer-k0lbhu { height: var(--framer-aspect-ratio-supported, 178px); left: -149px; order: 1; top: 882px; width: 251px; } .framer-qh6S5 .framer-i78ybq { height: var(--framer-aspect-ratio-supported, 208px); order: 2; right: -158px; top: 832px; width: 216px; } .framer-qh6S5 .framer-1rou399 { gap: 5px; height: min-content; justify-content: flex-start; order: 3; padding: 0px 0px 20px 0px; width: 104%; } .framer-qh6S5 .framer-ku9bm6 { height: 66px; width: 99%; } .framer-qh6S5 .framer-aqc8z9, .framer-qh6S5 .framer-abed85, .framer-qh6S5 .framer-9j6m6f, .framer-qh6S5 .framer-cctj8a { width: 100px; } .framer-qh6S5 .framer-1qx2sxu { gap: 9px; width: 99%; } .framer-qh6S5 .framer-zmss27 { gap: 0px; padding: 0px 5px 0px 5px; } .framer-qh6S5 .framer-o46orx { height: var(--framer-aspect-ratio-supported, 25px); width: 126px; } .framer-qh6S5 .framer-81yhx4, .framer-qh6S5 .framer-1nlukvt { padding: 0px 5px 0px 5px; } .framer-qh6S5 .framer-1nzu2zg { height: 28px; width: var(--framer-aspect-ratio-supported, 88px); } .framer-qh6S5 .framer-8s670x { height: var(--framer-aspect-ratio-supported, 28px); width: 92px; } .framer-qh6S5 .framer-2h43ki, .framer-qh6S5 .framer-jqzyhq { padding: 0px 10px 0px 10px; } .framer-qh6S5 .framer-1aklu26 { height: var(--framer-aspect-ratio-supported, 39px); width: 92px; } .framer-qh6S5 .framer-1k5ve25 { height: min-content; padding: 5px; } .framer-qh6S5 .framer-up1wk3 { aspect-ratio: 5.175 / 1; height: var(--framer-aspect-ratio-supported, 20px); width: 104px; } .framer-qh6S5 .framer-44aogt-container { order: 4; width: 465px; } .framer-qh6S5 .framer-4set4y { order: 6; padding: 50px 0px 50px 0px; } .framer-qh6S5 .framer-1diwi5u { padding: 0px 20px 0px 20px; } .framer-qh6S5 .framer-8zjap2 { padding: 0px; width: 100%; } .framer-qh6S5 .framer-1lij0rd-container { height: var(--framer-aspect-ratio-supported, 219px); order: 0; width: 100%; } .framer-qh6S5 .framer-u3twv6 { width: 111%; } .framer-qh6S5 .framer-13gc5uw-container { height: var(--framer-aspect-ratio-supported, 68px); order: 0; width: 120px; } .framer-qh6S5 .framer-y7aud7-container { height: var(--framer-aspect-ratio-supported, 68px); order: 1; width: 120px; } .framer-qh6S5 .framer-yjih96-container { height: var(--framer-aspect-ratio-supported, 68px); order: 2; width: 120px; } .framer-qh6S5 .framer-16gdi7m { order: 7; padding: 10px 0px 20px 0px; } .framer-qh6S5 .framer-3r0vqc { height: min-content; width: 99%; } .framer-qh6S5 .framer-3r1ayl { height: 265px; min-width: 429px; width: min-content; } .framer-qh6S5 .framer-o4lx76-container { aspect-ratio: 1.5616438356164384 / 1; bottom: -8px; height: var(--framer-aspect-ratio-supported, 274px); left: 50%; position: absolute; transform: translateX(-50%); width: 427px; z-index: 1; } .framer-qh6S5 .framer-1j4w45f { gap: 0px; order: 8; padding: 0px 20px 0px 20px; } .framer-qh6S5 .framer-uyjh91, .framer-qh6S5 .framer-nu6df1 { order: 0; padding: 19px 0px 19px 0px; } .framer-qh6S5 .framer-2e2e8q { flex-wrap: wrap; gap: 6px; height: min-content; order: 1; width: 86%; } .framer-qh6S5 .framer-12lesjh, .framer-qh6S5 .framer-12fdh5y, .framer-qh6S5 .framer-8gkm5n, .framer-qh6S5 .framer-1ypic19, .framer-qh6S5 .framer-1urhin0, .framer-qh6S5 .framer-j0cd8y, .framer-qh6S5 .framer-rmw02k { height: min-content; } .framer-qh6S5 .framer-dftfaw, .framer-qh6S5 .framer-1dg1wj0, .framer-qh6S5 .framer-e9ps7j, .framer-qh6S5 .framer-5sicv2, .framer-qh6S5 .framer-s9g5j9 { height: 20px; width: 2px; } .framer-qh6S5 .framer-9b1785 { gap: 0px; height: min-content; order: 2; width: 399px; } .framer-qh6S5 .framer-mba8kr { gap: 0px; order: 9; padding: 0px 20px 0px 20px; } .framer-qh6S5 .framer-r828nw { order: 10; padding: 0px; } .framer-qh6S5 .framer-xofboy-container { width: 100%; } .framer-qh6S5 .framer-96grgz { width: 426px; } .framer-qh6S5 .framer-20yad, .framer-qh6S5 .framer-r4p704-container { order: 0; } .framer-qh6S5 .framer-1jtser3 { order: 1; } .framer-qh6S5 .framer-yhntnx { order: 13; } .framer-qh6S5 .framer-1t4eide { order: 14; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-qh6S5 .framer-mzicto, .framer-qh6S5 .framer-12s1rcb, .framer-qh6S5 .framer-16pi3b7, .framer-qh6S5 .framer-1q3qk04, .framer-qh6S5 .framer-1vvur12, .framer-qh6S5 .framer-1t8pf4x, .framer-qh6S5 .framer-1rou399, .framer-qh6S5 .framer-1qx2sxu, .framer-qh6S5 .framer-zmss27, .framer-qh6S5 .framer-1j4w45f, .framer-qh6S5 .framer-2e2e8q, .framer-qh6S5 .framer-9b1785, .framer-qh6S5 .framer-mba8kr { gap: 0px; } .framer-qh6S5 .framer-mzicto > *, .framer-qh6S5 .framer-16pi3b7 > *, .framer-qh6S5 .framer-1q3qk04 > *, .framer-qh6S5 .framer-zmss27 > *, .framer-qh6S5 .framer-1j4w45f > *, .framer-qh6S5 .framer-9b1785 > *, .framer-qh6S5 .framer-mba8kr > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-qh6S5 .framer-mzicto > :first-child, .framer-qh6S5 .framer-16pi3b7 > :first-child, .framer-qh6S5 .framer-1q3qk04 > :first-child, .framer-qh6S5 .framer-1vvur12 > :first-child, .framer-qh6S5 .framer-1t8pf4x > :first-child, .framer-qh6S5 .framer-1rou399 > :first-child, .framer-qh6S5 .framer-zmss27 > :first-child, .framer-qh6S5 .framer-1j4w45f > :first-child, .framer-qh6S5 .framer-9b1785 > :first-child, .framer-qh6S5 .framer-mba8kr > :first-child { margin-top: 0px; } .framer-qh6S5 .framer-mzicto > :last-child, .framer-qh6S5 .framer-16pi3b7 > :last-child, .framer-qh6S5 .framer-1q3qk04 > :last-child, .framer-qh6S5 .framer-1vvur12 > :last-child, .framer-qh6S5 .framer-1t8pf4x > :last-child, .framer-qh6S5 .framer-1rou399 > :last-child, .framer-qh6S5 .framer-zmss27 > :last-child, .framer-qh6S5 .framer-1j4w45f > :last-child, .framer-qh6S5 .framer-9b1785 > :last-child, .framer-qh6S5 .framer-mba8kr > :last-child { margin-bottom: 0px; } .framer-qh6S5 .framer-12s1rcb > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-qh6S5 .framer-12s1rcb > :first-child, .framer-qh6S5 .framer-1qx2sxu > :first-child, .framer-qh6S5 .framer-2e2e8q > :first-child { margin-left: 0px; } .framer-qh6S5 .framer-12s1rcb > :last-child, .framer-qh6S5 .framer-1qx2sxu > :last-child, .framer-qh6S5 .framer-2e2e8q > :last-child { margin-right: 0px; } .framer-qh6S5 .framer-1vvur12 > *, .framer-qh6S5 .framer-1t8pf4x > *, .framer-qh6S5 .framer-1rou399 > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-qh6S5 .framer-1qx2sxu > * { margin: 0px; margin-left: calc(9px / 2); margin-right: calc(9px / 2); } .framer-qh6S5 .framer-2e2e8q > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }}",
  ],
  Rt = Pe(Il, Vl, "framer-qh6S5"),
  G1 = Rt;
Rt.displayName = "Home";
Rt.defaultProps = { height: 6702, width: 1200 };
ke(
  Rt,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Bakbak One",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/bakbakone/v8/zOL54pXAl6RI-p_ardnuycFuv-hHkOs.woff2",
          weight: "400",
        },
        {
          family: "Technor",
          source: "fontshare",
          style: "normal",
          url: "https://framerusercontent.com/third-party-assets/fontshare/wf/2RR55QNKFIVA2DCEDQJRXWOZKE4YYPU4/RZDLLS5TODK64HYRKXCPMNO6XI7GKFTY/DLYUQXINIV7BZZYOIGWGWXKAW6FHXPI6.woff2",
          weight: "600",
        },
        {
          family: "Bebas Neue",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXooxWtrygbi49c.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrFJXUc1NECPY.woff2",
          weight: "400",
        },
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLEj6V15vFP-KUEg.woff2",
          weight: "600",
        },
        {
          family: "Poppins",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLBT5V15vFP-KUEg.woff2",
          weight: "900",
        },
      ],
    },
    ...il,
    ...ol,
    ...sl,
    ...ll,
    ...fl,
    ...cl,
    ...ml,
    ...dl,
    ...pl,
    ...hl,
    ...gl,
    ...ul,
  ],
  { supportsExplicitInterCodegen: !0 },
);
var H1 = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"eEbqag_vU":{"layout":["fixed","auto"]},"e5B24uv9A":{"layout":["fixed","auto"]},"RrXQBC2EQ":{"layout":["fixed","auto"]}}}',
        framerResponsiveScreen: "",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1200",
        framerDisplayContentsDiv: "false",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "6702",
        framerImmutableVariables: "true",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { H1 as __FramerMetadata__, G1 as default };
//# sourceMappingURL=3hPK3XE04wryBP1XrBZjN1BXd9Ff35MczjeJdw3uLRU.NEMT2OHL.mjs.map
