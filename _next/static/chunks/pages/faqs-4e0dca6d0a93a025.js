(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [188],
  {
    40800: function (e, t, n) {
      let r = n(67294),
        o = r.forwardRef(function ({ title: e, titleId: t, ...n }, o) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: o,
                "aria-labelledby": t,
              },
              n
            ),
            e ? r.createElement("title", { id: t }, e) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M18 12H6",
            })
          );
        });
      e.exports = o;
    },
    67798: function (e, t, n) {
      let r = n(67294),
        o = r.forwardRef(function ({ title: e, titleId: t, ...n }, o) {
          return r.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: o,
                "aria-labelledby": t,
              },
              n
            ),
            e ? r.createElement("title", { id: t }, e) : null,
            r.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M12 6v12m6-6H6",
            })
          );
        });
      e.exports = o;
    },
    97908: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/faqs",
        function () {
          return n(79359);
        },
      ]);
    },
    39590: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(85893),
        o = n(94440),
        s = n(40800),
        a = n(67798);
      let i = [
        {
          question: "Is this app free?",
          answer:
            "askgrogu.ai is free to use with some basic features. You will need to have a working OpenAI API Key in order to use the app. When you use the API Key, you pay directly to OpenAI for the amount of credits/tokens you use. askgrogu.ai has some premium features that can be unlocked with a one-time purchase.",
        },
        {
          question: "Do I need to pay for OpenAI for a ChatGPT API Key?",
          answer:
            "Yes. You need to have an OpenAI account and a valid API key to use ChatGPT. We don't sell API keys.",
        },
        {
          question: "How does this app work?",
          answer:
            "This is a static web app, it doesn't have any backend server. When you enter your API key, it will be stored locally and securely on your browser. All API requests are sent directly from your browser to OpenAI server to interact with ChatGPT. Think of this as a HTTP client for your ChatGPT API with a lot of convenience features.",
        },
        {
          question: "How is the API key handled?",
          answer:
            "Your API is safe and stored locally on your device. This is a static app, which means that it doesn't have a backend. All the data is stored in your browser's local storage. Requests to Open AI's API is sent directly from your current browser (check the Network tab in your console if you want to see it).",
        },
        {
          question: "How many chats can I have?",
          answer:
            "You can have as many chats as you want. The only limit is your OpenAI API key's limit and your browser storage limit (technical term: Local Storage). Web browser gives you some limited data storage, the actual limit is different for each browser. Typically, you can save thousands of chat conversations without problems, but that's not guaranteed. When the browser storage runs out, you will need to delete old chats to save the new ones. We will provide a separate service to sync and backup your chats soon. Adding the website to your home screen may increase the storage capacity.",
        },
        {
          question: "How can I sync my chat conversations across devices?",
          answer:
            "At the moment, you have to export the chats and import it on another device.",
        },
        {
          question:
            "Why does sometimes Grogu AI responds differently than the default OpenAI's ChatGPT event with the same prompt?",
          answer:
            "Grogu AI uses the same underlying model as OpenAI's default chat app. For the same prompt, it can produce different responses each time. The default chat app by OpenAI may also have some initial prompt settings that are different from Grogu AI. If you don't get the response you expects, try \"Re-generate Response\" or tweaking the prompt.",
        },
        {
          question: "Can I self-host it?",
          answer:
            "Yes. After you make a purchase, you will receive a link to download the static web app and the instruction how to deploy it on your own server. Note that you will only receive the compiled code of the app, the full source code is not available for sale as the app is not open-source. You can deploy the app anywhere without having to update any code or settings.",
        },
        {
          question:
            "Do I have access to the full source code if I want to self-host?",
          answer:
            "No. The license key only grants you the permission to use and deploy the app on your own server. You do not have permissions to modify or redistribute the code. The full source code is not available for sale as the app is not open-source. You will only receive the compiled code of the app, you can deploy the app anywhere without having to update any code or settings.",
        },
        {
          question: "License Key vs. API Key",
          answer:
            "License Key is used to activate the premium features of askgrogu.ai. API Key refers to OpenAI ChatGPT API Key, and is used to connect to OpenAI's API to interact with ChatGPT. You need an API Key to use the app. The License Key is only needed if you want to use the premium features.",
        },
        {
          question: "What are the premium features?",
          answer:
            "The premium features include: Chat Search History, Access Prompt Library, Self-host Option, Integrations, etc. Check the pricing page for the latest details of all the premium features.",
        },
        {
          question: "Is there an expiration date for the License Key?",
          answer: "The license key is valid forever.",
        },
        {
          question:
            "I have purchased but forget my license key, how can I get it back?",
          answer:
            "You can go to https://app.lemonsqueezy.com/my-orders/ to access your license key.",
        },
        {
          question: "Can I get a refund?",
          answer:
            "Yes. We offer a 14-day money-back guarantee. If you're not satisfied, let us know within 14 days and we'll give you a full refund.",
        },
      ];
      function l() {
        return (0, r.jsx)("div", {
          className: "bg-white",
          children: (0, r.jsx)("div", {
            className: "mx-auto max-w-7xl",
            children: (0, r.jsxs)("div", {
              className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
              children: [
                (0, r.jsx)("h2", {
                  className:
                    "text-2xl font-bold leading-10 tracking-tight text-gray-900",
                  children: "Frequently asked questions",
                }),
                (0, r.jsx)("dl", {
                  className: "mt-4 space-y-6 divide-y divide-gray-900/10",
                  children: i.map((e) =>
                    (0, r.jsx)(
                      o.p,
                      {
                        as: "div",
                        className: "pt-6",
                        children: (t) => {
                          let { open: n } = t;
                          return (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)("dt", {
                                children: (0, r.jsxs)(o.p.Button, {
                                  className:
                                    "flex w-full items-start justify-between text-left text-gray-900",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className:
                                        "text-base font-semibold leading-7",
                                      children: e.question,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "ml-6 flex h-7 items-center",
                                      children: n
                                        ? (0, r.jsx)(s, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          })
                                        : (0, r.jsx)(a, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsx)(o.p.Panel, {
                                as: "dd",
                                className: "mt-2 pr-12",
                                children: (0, r.jsx)("p", {
                                  className:
                                    "text-base leading-7 text-gray-600",
                                  children: e.answer,
                                }),
                              }),
                            ],
                          });
                        },
                      },
                      e.question
                    )
                  ),
                }),
              ],
            }),
          }),
        });
      }
    },
    51448: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(85893);
      n(67294);
      var o = n(9008),
        s = n.n(o);
      function a(e) {
        let { title: t } = e;
        return (0, r.jsxs)(s(), {
          children: [
            (0, r.jsx)("title", {
              children: t || "Grogu AI ??? A better UI for ChatGPT",
            }),
            (0, r.jsx)("meta", {
              name: "title",
              content: "Grogu AI ??? A better UI for ChatGPT",
            }),
            (0, r.jsx)("meta", {
              name: "description",
              content:
                "Use ChatGPT with enhanced features like faster response, integrated research tools, prompt library, etc.",
            }),
            (0, r.jsx)("meta", { property: "og:type", content: "website" }),
            (0, r.jsx)("meta", {
              property: "og:url",
              content: "https://askgrogu.ai/",
            }),
            (0, r.jsx)("meta", {
              property: "og:title",
              content: "Grogu AI ??? A better UI for ChatGPT",
            }),
            (0, r.jsx)("meta", {
              property: "og:description",
              content:
                "Use ChatGPT with enhanced features like faster response, integrated research tools, prompt library, etc.",
            }),
            (0, r.jsx)("meta", {
              property: "og:image",
              content: "https://askgrogu.ai/poster.png",
            }),
            (0, r.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, r.jsx)("meta", {
              property: "twitter:url",
              content: "https://askgrogu.ai/",
            }),
            (0, r.jsx)("meta", {
              property: "twitter:title",
              content: "Grogu AI ??? A better UI for ChatGPT",
            }),
            (0, r.jsx)("meta", {
              property: "twitter:description",
              content:
                "Use ChatGPT with enhanced features like faster response, integrated research tools, prompt library, etc.",
            }),
            (0, r.jsx)("meta", {
              property: "twitter:image",
              content: "https://askgrogu.ai/poster.png",
            }),
            (0, r.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1, viewport-fit=cover",
            }),
            (0, r.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "152x152",
              href: "/apple-icon-152x152.png",
            }),
            (0, r.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/apple-icon-180x180.png",
            }),
            (0, r.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "192x192",
              href: "/android-icon-192x192.png",
            }),
            (0, r.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/favicon-32x32.png",
            }),
            (0, r.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "96x96",
              href: "/favicon-96x96.png",
            }),
            (0, r.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/favicon-16x16.png",
            }),
            (0, r.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
            (0, r.jsx)("meta", {
              name: "msapplication-TileColor",
              content: "#ffffff",
            }),
            (0, r.jsx)("meta", {
              name: "msapplication-TileImage",
              content: "/ms-icon-144x144.png",
            }),
            (0, r.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    79359: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var r = n(85893),
        o = n(51448),
        s = n(39590);
      function a() {
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "min-h-screen bg-white",
            children: [
              (0, r.jsx)(o.Z, { title: "Privacy Policy" }),
              (0, r.jsx)("div", {
                className: "py-10 ",
                children: (0, r.jsxs)("main", {
                  children: [
                    (0, r.jsx)("div", {
                      className: "my-10 text-center sticky top-0 bg-white p-4",
                      children: (0, r.jsx)("a", {
                        href: "/",
                        className: "text-blue-500 hover:underline",
                        children: "Go back to askgrogu.ai",
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "px-6",
                      children: (0, r.jsx)(s.Z, {}),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    9008: function (e, t, n) {
      e.exports = n(5443);
    },
    94440: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return O;
        },
      });
      var r,
        o,
        s,
        a = n(67294),
        i = n(32984),
        l = n(12351),
        u = n(23784),
        c = n(19946),
        d = n(61363),
        f = n(64103),
        p = n(16567),
        h = n(16723);
      function m(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      var y = n(15466),
        g = n(73781);
      let w =
        null != (s = a.startTransition)
          ? s
          : function (e) {
              e();
            };
      var v =
          (((r = v || {})[(r.Open = 0)] = "Open"),
          (r[(r.Closed = 1)] = "Closed"),
          r),
        b =
          (((o = b || {})[(o.ToggleDisclosure = 0)] = "ToggleDisclosure"),
          (o[(o.CloseDisclosure = 1)] = "CloseDisclosure"),
          (o[(o.SetButtonId = 2)] = "SetButtonId"),
          (o[(o.SetPanelId = 3)] = "SetPanelId"),
          (o[(o.LinkPanel = 4)] = "LinkPanel"),
          (o[(o.UnlinkPanel = 5)] = "UnlinkPanel"),
          o);
      let x = {
          0: (e) => ({
            ...e,
            disclosureState: (0, i.E)(e.disclosureState, { 0: 1, 1: 0 }),
          }),
          1: (e) =>
            1 === e.disclosureState ? e : { ...e, disclosureState: 1 },
          4: (e) => (!0 === e.linkedPanel ? e : { ...e, linkedPanel: !0 }),
          5: (e) => (!1 === e.linkedPanel ? e : { ...e, linkedPanel: !1 }),
          2: (e, t) =>
            e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId },
          3: (e, t) =>
            e.panelId === t.panelId ? e : { ...e, panelId: t.panelId },
        },
        k = (0, a.createContext)(null);
      function I(e) {
        let t = (0, a.useContext)(k);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Disclosure /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, I), t);
        }
        return t;
      }
      k.displayName = "DisclosureContext";
      let P = (0, a.createContext)(null);
      P.displayName = "DisclosureAPIContext";
      let j = (0, a.createContext)(null);
      function T(e, t) {
        return (0, i.E)(t.type, x, e, t);
      }
      j.displayName = "DisclosurePanelContext";
      let E = a.Fragment,
        A = l.AN.RenderStrategy | l.AN.Static,
        O = Object.assign(
          (0, l.yV)(function (e, t) {
            let { defaultOpen: n = !1, ...r } = e,
              o = (0, a.useRef)(null),
              s = (0, u.T)(
                t,
                (0, u.h)((e) => {
                  o.current = e;
                }, void 0 === e.as || e.as === a.Fragment)
              ),
              c = (0, a.useRef)(null),
              d = (0, a.useRef)(null),
              f = (0, a.useReducer)(T, {
                disclosureState: n ? 0 : 1,
                linkedPanel: !1,
                buttonRef: d,
                panelRef: c,
                buttonId: null,
                panelId: null,
              }),
              [{ disclosureState: h, buttonId: m }, w] = f,
              v = (0, g.z)((e) => {
                w({ type: 1 });
                let t = (0, y.r)(o);
                if (!t || !m) return;
                let n = e
                  ? e instanceof HTMLElement
                    ? e
                    : e.current instanceof HTMLElement
                    ? e.current
                    : t.getElementById(m)
                  : t.getElementById(m);
                null == n || n.focus();
              }),
              b = (0, a.useMemo)(() => ({ close: v }), [v]),
              x = (0, a.useMemo)(() => ({ open: 0 === h, close: v }), [h, v]);
            return a.createElement(
              k.Provider,
              { value: f },
              a.createElement(
                P.Provider,
                { value: b },
                a.createElement(
                  p.up,
                  { value: (0, i.E)(h, { 0: p.ZM.Open, 1: p.ZM.Closed }) },
                  (0, l.sY)({
                    ourProps: { ref: s },
                    theirProps: r,
                    slot: x,
                    defaultTag: E,
                    name: "Disclosure",
                  })
                )
              )
            );
          }),
          {
            Button: (0, l.yV)(function (e, t) {
              let n = (0, c.M)(),
                { id: r = `headlessui-disclosure-button-${n}`, ...o } = e,
                [s, i] = I("Disclosure.Button"),
                p = (0, a.useContext)(j),
                y = null !== p && p === s.panelId,
                w = (0, a.useRef)(null),
                v = (0, u.T)(w, t, y ? null : s.buttonRef);
              (0, a.useEffect)(() => {
                if (!y)
                  return (
                    i({ type: 2, buttonId: r }),
                    () => {
                      i({ type: 2, buttonId: null });
                    }
                  );
              }, [r, i, y]);
              let b = (0, g.z)((e) => {
                  var t;
                  if (y) {
                    if (1 === s.disclosureState) return;
                    switch (e.key) {
                      case d.R.Space:
                      case d.R.Enter:
                        e.preventDefault(),
                          e.stopPropagation(),
                          i({ type: 0 }),
                          null == (t = s.buttonRef.current) || t.focus();
                    }
                  } else
                    switch (e.key) {
                      case d.R.Space:
                      case d.R.Enter:
                        e.preventDefault(), e.stopPropagation(), i({ type: 0 });
                    }
                }),
                x = (0, g.z)((e) => {
                  e.key === d.R.Space && e.preventDefault();
                }),
                k = (0, g.z)((t) => {
                  var n;
                  (0, f.P)(t.currentTarget) ||
                    e.disabled ||
                    (y
                      ? (i({ type: 0 }),
                        null == (n = s.buttonRef.current) || n.focus())
                      : i({ type: 0 }));
                }),
                P = (0, a.useMemo)(
                  () => ({ open: 0 === s.disclosureState }),
                  [s]
                ),
                T = (function (e, t) {
                  let [n, r] = (0, a.useState)(() => m(e));
                  return (
                    (0, h.e)(() => {
                      r(m(e));
                    }, [e.type, e.as]),
                    (0, h.e)(() => {
                      n ||
                        (t.current &&
                          t.current instanceof HTMLButtonElement &&
                          !t.current.hasAttribute("type") &&
                          r("button"));
                    }, [n, t]),
                    n
                  );
                })(e, w),
                E = y
                  ? { ref: v, type: T, onKeyDown: b, onClick: k }
                  : {
                      ref: v,
                      id: r,
                      type: T,
                      "aria-expanded": e.disabled
                        ? void 0
                        : 0 === s.disclosureState,
                      "aria-controls": s.linkedPanel ? s.panelId : void 0,
                      onKeyDown: b,
                      onKeyUp: x,
                      onClick: k,
                    };
              return (0,
              l.sY)({ ourProps: E, theirProps: o, slot: P, defaultTag: "button", name: "Disclosure.Button" });
            }),
            Panel: (0, l.yV)(function (e, t) {
              let n = (0, c.M)(),
                { id: r = `headlessui-disclosure-panel-${n}`, ...o } = e,
                [s, i] = I("Disclosure.Panel"),
                { close: d } = (function e(t) {
                  let n = (0, a.useContext)(P);
                  if (null === n) {
                    let n = Error(
                      `<${t} /> is missing a parent <Disclosure /> component.`
                    );
                    throw (
                      (Error.captureStackTrace && Error.captureStackTrace(n, e),
                      n)
                    );
                  }
                  return n;
                })("Disclosure.Panel"),
                f = (0, u.T)(t, s.panelRef, (e) => {
                  w(() => i({ type: e ? 4 : 5 }));
                });
              (0, a.useEffect)(
                () => (
                  i({ type: 3, panelId: r }),
                  () => {
                    i({ type: 3, panelId: null });
                  }
                ),
                [r, i]
              );
              let h = (0, p.oJ)(),
                m =
                  null !== h
                    ? (h & p.ZM.Open) === p.ZM.Open
                    : 0 === s.disclosureState,
                y = (0, a.useMemo)(
                  () => ({ open: 0 === s.disclosureState, close: d }),
                  [s, d]
                );
              return a.createElement(
                j.Provider,
                { value: s.panelId },
                (0, l.sY)({
                  ourProps: { ref: f, id: r },
                  theirProps: o,
                  slot: y,
                  defaultTag: "div",
                  features: A,
                  visible: m,
                  name: "Disclosure.Panel",
                })
              );
            }),
          }
        );
    },
    61363: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return o;
        },
      });
      var r,
        o =
          (((r = o || {}).Space = " "),
          (r.Enter = "Enter"),
          (r.Escape = "Escape"),
          (r.Backspace = "Backspace"),
          (r.Delete = "Delete"),
          (r.ArrowLeft = "ArrowLeft"),
          (r.ArrowUp = "ArrowUp"),
          (r.ArrowRight = "ArrowRight"),
          (r.ArrowDown = "ArrowDown"),
          (r.Home = "Home"),
          (r.End = "End"),
          (r.PageUp = "PageUp"),
          (r.PageDown = "PageDown"),
          (r.Tab = "Tab"),
          r);
    },
    73781: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return s;
        },
      });
      var r = n(67294),
        o = n(3855);
      let s = function (e) {
        let t = (0, o.E)(e);
        return r.useCallback((...e) => t.current(...e), [t]);
      };
    },
    19946: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return l;
        },
      });
      var r,
        o = n(67294),
        s = n(16723),
        a = n(82180),
        i = n(77896);
      let l =
        null != (r = o.useId)
          ? r
          : function () {
              let e = (0, a.H)(),
                [t, n] = o.useState(e ? () => i.O.nextId() : null);
              return (
                (0, s.e)(() => {
                  null === t && n(i.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
    },
    16723: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return s;
        },
      });
      var r = n(67294),
        o = n(77896);
      let s = (e, t) => {
        o.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    3855: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return s;
        },
      });
      var r = n(67294),
        o = n(16723);
      function s(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, o.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    82180: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return s;
        },
      });
      var r = n(67294),
        o = n(77896);
      function s() {
        let [e, t] = (0, r.useState)(o.O.isHandoffComplete);
        return (
          e && !1 === o.O.isHandoffComplete && t(!1),
          (0, r.useEffect)(() => {
            !0 !== e && t(!0);
          }, [e]),
          (0, r.useEffect)(() => o.O.handoff(), []),
          e
        );
      }
    },
    23784: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return i;
        },
        h: function () {
          return a;
        },
      });
      var r = n(67294),
        o = n(73781);
      let s = Symbol();
      function a(e, t = !0) {
        return Object.assign(e, { [s]: t });
      }
      function i(...e) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, o.z)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[s]))
          ? void 0
          : n;
      }
    },
    16567: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZM: function () {
          return a;
        },
        oJ: function () {
          return i;
        },
        up: function () {
          return l;
        },
      });
      var r,
        o = n(67294);
      let s = (0, o.createContext)(null);
      s.displayName = "OpenClosedContext";
      var a =
        (((r = a || {})[(r.Open = 1)] = "Open"),
        (r[(r.Closed = 2)] = "Closed"),
        (r[(r.Closing = 4)] = "Closing"),
        (r[(r.Opening = 8)] = "Opening"),
        r);
      function i() {
        return (0, o.useContext)(s);
      }
      function l({ value: e, children: t }) {
        return o.createElement(s.Provider, { value: e }, t);
      }
    },
    64103: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = e.parentElement,
          n = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
        let r = (null == t ? void 0 : t.getAttribute("disabled")) === "";
        return (
          !(
            r &&
            (function (e) {
              if (!e) return !1;
              let t = e.previousElementSibling;
              for (; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1;
                t = t.previousElementSibling;
              }
              return !0;
            })(n)
          ) && r
        );
      }
      n.d(t, {
        P: function () {
          return r;
        },
      });
    },
    44067: function (e, t, n) {
      "use strict";
      function r(...e) {
        return e.filter(Boolean).join(" ");
      }
      n.d(t, {
        A: function () {
          return r;
        },
      });
    },
    77896: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return a;
        },
      });
      var r = Object.defineProperty,
        o = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        s = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
      let a = new (class {
        constructor() {
          s(this, "current", this.detect()),
            s(this, "handoffState", "pending"),
            s(this, "currentId", 0);
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      })();
    },
    32984: function (e, t, n) {
      "use strict";
      function r(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let o = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, r), o);
      }
      n.d(t, {
        E: function () {
          return r;
        },
      });
    },
    15466: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(77896);
      function o(e) {
        return r.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    12351: function (e, t, n) {
      "use strict";
      n.d(t, {
        AN: function () {
          return l;
        },
        l4: function () {
          return u;
        },
        sY: function () {
          return c;
        },
        yV: function () {
          return p;
        },
      });
      var r,
        o,
        s = n(67294),
        a = n(44067),
        i = n(32984),
        l =
          (((r = l || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        u =
          (((o = u || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function c({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: o,
        visible: s = !0,
        name: a,
      }) {
        let l = f(t, e);
        if (s) return d(l, n, r, a);
        let u = null != o ? o : 0;
        if (2 & u) {
          let { static: e = !1, ...t } = l;
          if (e) return d(t, n, r, a);
        }
        if (1 & u) {
          let { unmount: e = !0, ...t } = l;
          return (0, i.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              d({ ...t, hidden: !0, style: { display: "none" } }, n, r, a),
          });
        }
        return d(l, n, r, a);
      }
      function d(e, t = {}, n, r) {
        var o;
        let {
            as: i = n,
            children: l,
            refName: u = "ref",
            ...c
          } = m(e, ["unmount", "static"]),
          d = void 0 !== e.ref ? { [u]: e.ref } : {},
          p = "function" == typeof l ? l(t) : l;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t));
        let y = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
          e && (y["data-headlessui-state"] = n.join(" "));
        }
        if (i === s.Fragment && Object.keys(h(c)).length > 0) {
          if (!(0, s.isValidElement)(p) || (Array.isArray(p) && p.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(c).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = (0, a.A)(
            null == (o = p.props) ? void 0 : o.className,
            c.className
          );
          return (0, s.cloneElement)(
            p,
            Object.assign(
              {},
              f(p.props, h(m(c, ["ref"]))),
              y,
              d,
              (function (...e) {
                return {
                  ref: e.every((e) => null == e)
                    ? void 0
                    : (t) => {
                        for (let n of e)
                          null != n &&
                            ("function" == typeof n ? n(t) : (n.current = t));
                      },
                };
              })(p.ref, d.ref),
              e ? { className: e } : {}
            )
          );
        }
        return (0, s.createElement)(
          i,
          Object.assign(
            {},
            m(c, ["ref"]),
            i !== s.Fragment && d,
            i !== s.Fragment && y
          ),
          p
        );
      }
      function f(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function p(e) {
        var t;
        return Object.assign((0, s.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function h(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function m(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return e((e.s = 97908));
    }),
      (_N_E = e.O());
  },
]);
