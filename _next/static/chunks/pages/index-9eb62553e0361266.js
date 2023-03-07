(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    75557: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(358);
        },
      ]);
    },
    39590: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = s(85893),
        a = s(94440),
        r = s(40800),
        i = s(67798);
      let l = [
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
      function o() {
        return (0, n.jsx)("div", {
          className: "bg-white",
          children: (0, n.jsx)("div", {
            className: "mx-auto max-w-7xl",
            children: (0, n.jsxs)("div", {
              className: "mx-auto max-w-4xl divide-y divide-gray-900/10",
              children: [
                (0, n.jsx)("h2", {
                  className:
                    "text-2xl font-bold leading-10 tracking-tight text-gray-900",
                  children: "Frequently asked questions",
                }),
                (0, n.jsx)("dl", {
                  className: "mt-4 space-y-6 divide-y divide-gray-900/10",
                  children: l.map((e) =>
                    (0, n.jsx)(
                      a.p,
                      {
                        as: "div",
                        className: "pt-6",
                        children: (t) => {
                          let { open: s } = t;
                          return (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("dt", {
                                children: (0, n.jsxs)(a.p.Button, {
                                  className:
                                    "flex w-full items-start justify-between text-left text-gray-900",
                                  children: [
                                    (0, n.jsx)("span", {
                                      className:
                                        "text-base font-semibold leading-7",
                                      children: e.question,
                                    }),
                                    (0, n.jsx)("span", {
                                      className: "ml-6 flex h-7 items-center",
                                      children: s
                                        ? (0, n.jsx)(r, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          })
                                        : (0, n.jsx)(i, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true",
                                          }),
                                    }),
                                  ],
                                }),
                              }),
                              (0, n.jsx)(a.p.Panel, {
                                as: "dd",
                                className: "mt-2 pr-12",
                                children: (0, n.jsx)("p", {
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
    51448: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = s(85893);
      s(67294);
      var a = s(9008),
        r = s.n(a);
      function i(e) {
        let { title: t } = e;
        return (0, n.jsxs)(r(), {
          children: [
            (0, n.jsx)("title", {
              children: t || "Grogu AI — A better UI for ChatGPT",
            }),
            (0, n.jsx)("meta", {
              name: "title",
              content: "Grogu AI — A better UI for ChatGPT",
            }),
            (0, n.jsx)("meta", {
              name: "description",
              content:
                "Use ChatGPT with enhanced features like faster response, integrated research tools, prompt library, etc.",
            }),
            (0, n.jsx)("meta", { property: "og:type", content: "website" }),
            (0, n.jsx)("meta", {
              property: "og:url",
              content: "https://askgrogu.ai/",
            }),
            (0, n.jsx)("meta", {
              property: "og:title",
              content: "Grogu AI — A better UI for ChatGPT",
            }),
            (0, n.jsx)("meta", {
              property: "og:description",
              content:
                "Use ChatGPT with enhanced features like faster response, integrated research tools, prompt library, etc.",
            }),
            (0, n.jsx)("meta", {
              property: "og:image",
              content: "https://askgrogu.ai/poster.png",
            }),
            (0, n.jsx)("meta", {
              property: "twitter:card",
              content: "summary_large_image",
            }),
            (0, n.jsx)("meta", {
              property: "twitter:url",
              content: "https://askgrogu.ai/",
            }),
            (0, n.jsx)("meta", {
              property: "twitter:title",
              content: "Grogu AI — A better UI for ChatGPT",
            }),
            (0, n.jsx)("meta", {
              property: "twitter:description",
              content:
                "Use ChatGPT with enhanced features like faster response, integrated research tools, prompt library, etc.",
            }),
            (0, n.jsx)("meta", {
              property: "twitter:image",
              content: "https://askgrogu.ai/poster.png",
            }),
            (0, n.jsx)("meta", {
              name: "viewport",
              content: "initial-scale=1, viewport-fit=cover",
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "152x152",
              href: "/apple-icon-152x152.png",
            }),
            (0, n.jsx)("link", {
              rel: "apple-touch-icon",
              sizes: "180x180",
              href: "/apple-icon-180x180.png",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "192x192",
              href: "/android-icon-192x192.png",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "32x32",
              href: "/favicon-32x32.png",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "96x96",
              href: "/favicon-96x96.png",
            }),
            (0, n.jsx)("link", {
              rel: "icon",
              type: "image/png",
              sizes: "16x16",
              href: "/favicon-16x16.png",
            }),
            (0, n.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
            (0, n.jsx)("meta", {
              name: "msapplication-TileColor",
              content: "#ffffff",
            }),
            (0, n.jsx)("meta", {
              name: "msapplication-TileImage",
              content: "/ms-icon-144x144.png",
            }),
            (0, n.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
          ],
        });
      }
    },
    358: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return eg;
          },
        });
      var n = s(85893),
        a = s(51448),
        r = s(67294),
        i = s(906);
      let l = (e) => {
          let t = (0, i.Z)("TM_" + e);
          return t;
        },
        o = () => window.localStorage;
      var c = s(44080),
        d = s(64048);
      function x() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      function m(e) {
        let {
          closeButtonText: t,
          showCloseButton: s = !0,
          title: a,
          position: i,
          open: l,
          setOpen: o,
          hideOverflow: m = !0,
          children: u,
          wide: h,
          customZ: N,
        } = e;
        return (0, n.jsx)(c.u.Root, {
          show: l,
          as: r.Fragment,
          children: (0, n.jsx)(d.V, {
            as: "div",
            className: x("fixed inset-0 overflow-y-auto", N || "z-50 "),
            onClose: o,
            children: (0, n.jsxs)("div", {
              className: x(
                "flex justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0",
                "top" === i ? "items-start pt-28" : "items-center pt-4"
              ),
              children: [
                (0, n.jsx)(c.u.Child, {
                  as: r.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, n.jsx)(d.V.Overlay, {
                    className:
                      "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity",
                  }),
                }),
                (0, n.jsx)("span", {
                  className:
                    "hidden sm:inline-block sm:align-middle sm:h-screen",
                  "aria-hidden": "true",
                  children: "​",
                }),
                (0, n.jsx)(c.u.Child, {
                  as: r.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom:
                    "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  enterTo: "opacity-100 translate-y-0 sm:scale-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                  leaveTo:
                    "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                  children: (0, n.jsxs)("div", {
                    className: x(
                      "inline-block w-full align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:p-6",
                      m ? "overflow-hidden" : "",
                      h ? " sm:max-w-lg" : " sm:max-w-sm"
                    ),
                    children: [
                      (0, n.jsxs)("div", {
                        children: [
                          a
                            ? (0, n.jsx)(d.V.Title, {
                                as: "h3",
                                className:
                                  "text-lg text-center leading-6 font-medium text-gray-900 ",
                                children: a,
                              })
                            : null,
                          (0, n.jsx)("div", {
                            className: "mt-2 text-gray-800 text-left text-sm",
                            children: u,
                          }),
                        ],
                      }),
                      s
                        ? (0, n.jsx)("div", {
                            className: "mt-5 sm:mt-6 text-center",
                            children: (0, n.jsx)("button", {
                              type: "button",
                              className:
                                "inline-flex justify-center rounded-md border border-transparent shadow-sm px-2 py-1 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm",
                              onClick: () => o(!1),
                              children: t || "Close",
                            }),
                          })
                        : null,
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var u = s(23235),
        h = s(8193);
      let N = l("useLicenseKey");
      function A() {
        let [e, t] = (0, r.useState)(!1),
          [s, a] = (0, r.useState)(!1),
          [i, l] = N("");
        return (
          (0, r.useEffect)(() => {
            "#thankyou" === window.location.hash &&
              ((window.location.hash = ""),
              t(!0),
              setTimeout(() => {
                a(!0);
              }, 800));
          }, []),
          (0, n.jsxs)(m, {
            open: e,
            setOpen: t,
            showCloseButton: !1,
            children: [
              (0, n.jsx)("h2", {
                className: "text-center text-xl font-bold",
                children: "\uD83C\uDF89 Thank you for your purchase!",
              }),
              (0, n.jsxs)("div", {
                className: "my-2",
                children: [
                  "You will receive a receipt and a ",
                  (0, n.jsx)("b", { children: "license key" }),
                  " in your email shortly. Enter your license key here to save it:",
                ],
              }),
              (0, n.jsx)("div", {
                className: "my-4",
                children: (0, n.jsx)("input", {
                  type: "text",
                  placeholder: "Enter your license key here",
                  className:
                    "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                  value: i,
                  onChange: (e) => l(e.target.value),
                  onKeyDown: (e) => {
                    "Enter" === e.key && (e.preventDefault(), t(!1));
                  },
                }),
              }),
              (0, n.jsx)("div", {
                className: "my-2 text-center",
                children: (0, n.jsxs)("button", {
                  onClick: () => t(!1),
                  className:
                    "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1",
                  children: [
                    (0, n.jsx)(h.bzc, { className: "w-4 h-4" }),
                    (0, n.jsx)("span", { children: "Save" }),
                  ],
                }),
              }),
              (0, n.jsx)("div", {
                className: "my-2 text-center",
                children: (0, n.jsx)("button", {
                  onClick: () => t(!1),
                  className: "text-blue-500 hover:underline",
                  children: "I'll do it later",
                }),
              }),
              s &&
                (0, n.jsx)("div", {
                  className: "flex items-center justify-center",
                  children: (0, n.jsx)(u.Z, {}),
                }),
            ],
          })
        );
      }
      function p() {
        let [e, t] = (0, r.useState)(new Date()),
          s = new Date(1678435975e3);
        (0, r.useEffect)(() => {
          setInterval(() => {
            t(new Date());
          }, 1e3);
        }, [e]);
        let a = s.getTime() - e.getTime(),
          i = Math.floor(a / 864e5),
          l = Math.floor((a - 864e5 * i) / 36e5),
          o = Math.floor((a - 864e5 * i - 36e5 * l) / 6e4),
          c = ""
            .concat(i, "d ")
            .concat(l, "h ")
            .concat(o, "m ")
            .concat(
              Math.floor((a - 864e5 * i - 36e5 * l - 6e4 * o) / 1e3),
              "s"
            );
        return (0, n.jsxs)("div", {
          className: "text-xs text-center my-4 text-green-600",
          children: [
            "Early Bird Price.",
            " ",
            a <= 0
              ? null
              : (0, n.jsxs)("span", {
                  children: [
                    "Deal ends in ",
                    (0, n.jsx)("b", { children: c }),
                    ".",
                  ],
                }),
          ],
        });
      }
      let f = [
        {
          title: "Domain Check",
          description:
            "Ask AI for domain name suggestions, then check the domain availability with 1 click.",
          gif: "domain-check.gif",
        },
        {
          title: "CodePen",
          description: "Open code in CodePen editor with 1 click.",
          gif: "codepen.gif",
        },
      ];
      function E() {
        return (0, n.jsx)("div", {
          className: "bg-white",
          children: (0, n.jsx)("div", {
            className: "mx-auto max-w-7xl",
            children: (0, n.jsxs)("div", {
              className: "mx-auto max-w-4xl",
              children: [
                (0, n.jsx)("h2", {
                  className:
                    "text-2xl font-bold leading-10 tracking-tight text-gray-900",
                  children: "Available Integrations",
                }),
                (0, n.jsx)("p", {
                  children:
                    "Enhance your chat experience x10 with our integrations.",
                }),
                (0, n.jsx)("div", {
                  className: "grid grid-cols-2 gap-2 py-4",
                  children: f.map((e) =>
                    (0, n.jsxs)(
                      "div",
                      {
                        className:
                          "border border-gray-200 rounded-xl overflow-hidden shadow bg-gray-100",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "h-40 aspect-ratio-video flex items-center justify-center bg-white",
                            children: (0, n.jsx)("img", {
                              src: "/gifs/".concat(e.gif),
                              alt: e.title,
                            }),
                          }),
                          (0, n.jsxs)("div", {
                            className: "p-4",
                            children: [
                              (0, n.jsx)("div", {
                                className: "text-lg font-semibold",
                                children: e.title,
                              }),
                              (0, n.jsx)("div", {
                                className: "text-gray-500",
                                children: e.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      e.gif
                    )
                  ),
                }),
              ],
            }),
          }),
        });
      }
      var y = s(39590);
      let I = l("useLicenseKey");
      function g(e) {
        let { text: t } = e,
          [s, a] = (0, r.useState)(!1),
          [i, l] = I(""),
          o = () => {
            let e = window.prompt(
              "If you have already purchased, you will find a license key in your receipt email. If you lost the email, go to https://app.lemonsqueezy.com/my-orders/ to resend it. Enter your license key here to save it:",
              i
            );
            if (null !== e) {
              if ("" === e) {
                l("");
                return;
              }
              l(e);
            }
          };
      }
      var T = s(60155);
      function S() {
        let [e, t] = (0, r.useState)(!1);
      }
      function C(e) {
        let { messages: t, chatTitle: s } = e,
          a = t.reduce((e, t) => {
            var s;
            return (
              e +
                (null == t
                  ? void 0
                  : null === (s = t.usage) || void 0 === s
                  ? void 0
                  : s.total_tokens) || 0
            );
          }, 0);
        return (0, n.jsxs)("div", {
          className:
            "flex items-center justify-center w-full p-2 border-bottom-2 border-gray-200 shadow-bottom flex-col min-w-0",
          children: [
            (0, n.jsx)("div", {
              className: "font-semibold truncate w-full text-center px-12",
              children: s || "New Chat",
            }),
            t.length > 0
              ? (0, n.jsxs)("div", {
                  className:
                    "text-xs text-gray-400 w-full truncate text-center px-16",
                  children: [
                    t.length,
                    " message",
                    t.length > 1 ? "s" : "",
                    " ⋅ ",
                    a.toLocaleString(),
                    " token",
                    a > 1 ? "s" : "",
                    " used (~$",
                    Math.round(0.002 * a * 1e3) / 1e6,
                    ")",
                  ],
                })
              : (0, n.jsx)("div", {
                  className: "text-xs text-gray-400",
                  children: "Start a new chat",
                }),
          ],
        });
      }
      var O = s(91799),
        j = s(60357),
        b = s.n(j),
        R = s(53854);
      function v() {
        let e,
          {
            onConfirmed: t,
            children: s,
            className: a,
            disabled: i,
            defaultText: l = () => "Delete",
            confirmText: o = () =>
              (0, n.jsx)("span", {
                className: "text-red-500 text-xs hover:underline",
                children: "Sure?",
              }),
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          [c, d] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => () => clearTimeout(e), []),
          (0, r.useEffect)(
            () => (
              c &&
                (clearTimeout(e),
                (e = setTimeout(() => {
                  d(!1);
                }, 2e3))),
              () => clearTimeout(e)
            ),
            [c]
          ),
          (0, n.jsx)("button", {
            onClick: () => {
              !i && (c ? t && t() : d(!0));
            },
            className: a,
            children: c ? o({ disabled: i }) : s || l({ disabled: i }),
          })
        );
      }
      var L = s(93463),
        w = s(89583);
      function P() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      function M(e) {
        let {
            chat: t,
            onEditName: s,
            onDelete: a,
            onSelect: i,
            selected: l,
            highlightedTitle: o,
            highlightedPreview: c,
          } = e,
          [d, x] = (0, r.useState)(!1),
          [m, u] = (0, r.useState)(t.title || "New Chat"),
          N = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          u(t.title || "New Chat");
        }, [t.title]);
        let A = () => {
            x(!0),
              setTimeout(() => {
                N.current.focus(),
                  N.current.setSelectionRange(
                    (null == m ? void 0 : m.length) || 0,
                    (null == m ? void 0 : m.length) || 0
                  );
              }, 100);
          },
          p = () => {
            x(!1), u(t.title);
          },
          f = () => {
            m && (x(!1), s(m));
          };
        return (0, n.jsxs)("div", {
          className: P(
            l
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white",
            "group flex items-center rounded-mdtext-sm font-medium w-full space-x-2 justify-between overflow-hidden rounded-lg"
          ),
          children: [
            (0, n.jsxs)("button", {
              onClick: () => {
                d || i();
              },
              className:
                "flex items-center justify-start space-x-2 min-w-0 w-full px-2 py-2 text-sm",
              children: [
                (0, n.jsx)(R.wIw, {
                  className: P("text-gray-300 h-6 w-6 flex-shrink-0"),
                  "aria-hidden": "true",
                }),
                (0, n.jsxs)("div", {
                  className: "space-y-1 text-left w-full min-w-0",
                  children: [
                    d
                      ? (0, n.jsx)(L.Z, {
                          type: "text",
                          ref: N,
                          value: m,
                          onKeyDown: (e) => {
                            "Enter" === e.key && (e.preventDefault(), f()),
                              "Escape" === e.key && (e.preventDefault(), p());
                          },
                          onChange: (e) => u(e.target.value),
                          className:
                            "bg-gray-900 text-white rounded-sm px-0 py-0 border-0 ring-blue-500 focus:ring-2 ring-2 text-sm font-medium w-full",
                        })
                      : (0, n.jsx)("div", {
                          className: "text-gray-100 truncate w-full",
                          children: o || m || "New Chat",
                        }),
                    (0, n.jsx)("div", {
                      className:
                        "text-xs text-gray-400 font-normal truncate  w-full",
                      children: c || t.preview.substring(0, 50),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "pr-2",
              children: d
                ? (0, n.jsxs)("div", {
                    className: "flex items-center justify-center space-x-2",
                    children: [
                      (0, n.jsx)("button", {
                        onClick: f,
                        className:
                          "text-gray-500 hover:text-white transiton-all",
                        children: (0, n.jsx)(w.l_A, {
                          className: "w-6 h-6 sm:w-4 sm:h-4",
                        }),
                      }),
                      (0, n.jsx)("button", {
                        onClick: p,
                        className:
                          "text-gray-500 hover:text-white transiton-all",
                        children: (0, n.jsx)(w.aHS, {
                          className: "w-6 h-6 sm:w-4 sm:h-4",
                        }),
                      }),
                    ],
                  })
                : (0, n.jsxs)("div", {
                    className: "flex items-center justify-center space-x-2",
                    children: [
                      (0, n.jsx)("button", {
                        onClick: A,
                        className:
                          "text-gray-500 hover:text-white transiton-all",
                        children: (0, n.jsx)(h.QML, {
                          className: "w-6 h-6 sm:w-4 sm:h-4",
                        }),
                      }),
                      (0, n.jsx)(v, {
                        onConfirmed: a,
                        className:
                          "text-gray-500 hover:text-white transiton-all",
                        children: (0, n.jsx)(h.YK6, {
                          className: "w-6 h-6 sm:w-4 sm:h-4",
                        }),
                      }),
                    ],
                  }),
            }),
          ],
        });
      }
      function B() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      let G = (e, t) => {
        let s = {},
          a = e.filter((e) => {
            if ("" === t) return !0;
            let a = e.title.toLowerCase().includes(t.toLowerCase()),
              r = [];
            try {
              r = JSON.parse(o().getItem("CHAT_" + e.id)).messages;
            } catch (e) {
              console.error(e);
            }
            let i = r.some((e) =>
              e.content.toLowerCase().includes(t.toLowerCase())
            );
            if (((s[e.id] = {}), a)) {
              let a = [],
                r = e.title.toLowerCase().indexOf(t.toLowerCase());
              a.push(
                e.title.substring(0, r),
                (0, n.jsx)("span", {
                  className: "bg-yellow-700",
                  children: e.title.substring(r, r + t.length),
                }),
                e.title.substring(r + t.length)
              ),
                (s[e.id].title = a);
            }
            if (i) {
              let a = [],
                i = r
                  .map((e) => e.content.toLowerCase())
                  .findIndex((e) => e.toLowerCase().includes(t.toLowerCase())),
                l = r[i].content,
                o = l.toLowerCase().indexOf(t.toLowerCase()),
                c = l.substring(
                  Math.max(0, o - 10),
                  Math.min(l.length, o + 20)
                ),
                d = c.toLowerCase().indexOf(t.toLowerCase());
              a.push(
                "...",
                c.substring(0, d),
                (0, n.jsx)("span", {
                  className: "bg-yellow-700",
                  children: c.substring(d, d + t.length),
                }),
                c.substring(d + t.length),
                "..."
              ),
                (s[e.id].preview = a);
            }
            return a || i;
          });
        return { filteredChats: a, highlighted: s };
      };
      function D(e) {
        let {
            chats: t,
            chatID: s,
            onDeleteChat: a,
            onEditChatTitle: i,
            onNewChatRequested: l,
            onChatSelected: o,
            sidebarOpen: c,
            setSidebarOpen: d,
          } = e,
          [x, m] = (0, r.useState)(!1),
          [u, h] = (0, r.useState)("");
        (0, r.useEffect)(() => {
          m(!0);
        }, []);
        let N = () => {
          l(),
            d(!1),
            setTimeout(() => {
              let e = document.getElementById("chat-input-textbox");
              e && e.focus();
            }, 100);
        };
        if (!x) return null;
        let { filteredChats: A, highlighted: p } = G(t, u);
        return (0, n.jsxs)("div", {
          className:
            "jsx-7078ffb922cb3c38 flex min-h-0 flex-1 flex-col bg-gray-800",
          children: [
            (0, n.jsxs)("div", {
              id: "navbar",
              className:
                "jsx-7078ffb922cb3c38 flex flex-1 flex-col overflow-y-auto pt-5 pb-4",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "jsx-7078ffb922cb3c38  flex items-center justify-between",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "jsx-7078ffb922cb3c38 flex flex-shrink-0 items-center px-4",
                      children: (0, n.jsx)("img", {
                        src: "/favicon-192x192.png",
                        alt: " Grogu AI",
                        className: "jsx-7078ffb922cb3c38 h-8 w-auto",
                      }),
                    }),
                    (0, n.jsx)(S, {}),
                  ],
                }),
                (0, n.jsxs)("nav", {
                  className: "jsx-7078ffb922cb3c38 mt-5 flex-1 space-y-2 px-2",
                  children: [
                    (0, n.jsxs)("button", {
                      onClick: N,
                      className:
                        "jsx-7078ffb922cb3c38 " +
                        (B(
                          "bg-gray-600 text-white group flex items-center justify-center rounded-md px-2 py-2 text-sm font-medium w-full hover:bg-gray-500 transition-all"
                        ) || ""),
                      children: [
                        (0, n.jsx)(R.wIw, {
                          className: B(
                            "text-gray-300 mr-2 h-6 w-6 flex-shrink-0"
                          ),
                          "aria-hidden": "true",
                        }),
                        "New Chat",
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "jsx-7078ffb922cb3c38 relative",
                      children: (0, n.jsx)("input", {
                        type: "text",
                        placeholder: "Search chats...",
                        value: u,
                        onChange: (e) => h(e.target.value),
                        onKeyDown: (e) => {
                          27 === e.keyCode && h("");
                        },
                        className:
                          "jsx-7078ffb922cb3c38 bg-gray-700 text-white px-2 py-1 rounded-md w-full",
                      }),
                    }),
                    0 === A.length
                      ? u
                        ? (0, n.jsxs)("div", {
                            className:
                              "jsx-7078ffb922cb3c38 text-gray-500 text-center",
                            children: [
                              (0, n.jsx)("p", {
                                className: "jsx-7078ffb922cb3c38 text-sm",
                                children: "No results",
                              }),
                              (0, n.jsxs)("p", {
                                className: "jsx-7078ffb922cb3c38 text-xs",
                                children: ['No result found for "', u, '"'],
                              }),
                            ],
                          })
                        : (0, n.jsx)("div", {
                            className:
                              "jsx-7078ffb922cb3c38 flex flex-col items-center justify-center p-4 border border-dashed border-2 border-gray-500 rounded-lg",
                            children: (0, n.jsxs)("div", {
                              className:
                                "jsx-7078ffb922cb3c38 text-gray-500 text-center",
                              children: [
                                (0, n.jsx)("p", {
                                  className: "jsx-7078ffb922cb3c38 text-sm",
                                  children: "No Chats Yet",
                                }),
                                (0, n.jsx)("p", {
                                  className: "jsx-7078ffb922cb3c38 text-xs",
                                  children:
                                    "Click the button above to start a new chat",
                                }),
                              ],
                            }),
                          })
                      : null,
                    A.map((e) => {
                      var t, r;
                      return (0, n.jsx)(
                        M,
                        {
                          chat: e,
                          highlightedTitle:
                            null === (t = p[e.id]) || void 0 === t
                              ? void 0
                              : t.title,
                          highlightedPreview:
                            null === (r = p[e.id]) || void 0 === r
                              ? void 0
                              : r.preview,
                          onSelect: () => {
                            o(e), d(!1);
                          },
                          selected: e.id === s,
                          onDelete: () => {
                            a(e.id);
                          },
                          onEditName: (t) => {
                            i(e.id, t);
                          },
                        },
                        e.id
                      );
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className:
                "jsx-7078ffb922cb3c38 flex flex-col flex-shrink-0 bg-gray-700 p-4 justify-center space-y-1",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "jsx-7078ffb922cb3c38 text-xs text-gray-400 font-semibold text-center",
                  children: "askgrogu.ai \xa9 2023",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "jsx-7078ffb922cb3c38 text-xs text-gray-400 text-center",
                  children: [
                    (0, n.jsx)("a", {
                      href: "/privacy",
                      className: "jsx-7078ffb922cb3c38 hover:underline",
                      children: "Privacy",
                    }),
                    " | ",
                    (0, n.jsx)("a", {
                      href: "/terms",
                      className: "jsx-7078ffb922cb3c38 hover:underline",
                      children: "Terms",
                    }),
                    " | ",
                    (0, n.jsx)("a", {
                      href: "/faqs",
                      className: "jsx-7078ffb922cb3c38 hover:underline",
                      children: "FAQs",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(b(), {
              id: "7078ffb922cb3c38",
              children: "#navbar.jsx-7078ffb922cb3c38{color-scheme:dark}",
            }),
          ],
        });
      }
      var U = s(80243);
      function X(e) {
        let {
            chatID: t,
            chats: s,
            onDeleteChat: a,
            onEditChatTitle: i,
            onNewChatRequested: l,
            onChatSelected: o,
            children: x,
          } = e,
          [m, u] = (0, r.useState)(!1),
          [h, N] = (0, r.useState)(null);
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(c.u.Root, {
                show: m,
                as: r.Fragment,
                children: (0, n.jsxs)(d.V, {
                  as: "div",
                  className: "relative z-40 lg:hidden",
                  onClose: u,
                  children: [
                    (0, n.jsx)(c.u.Child, {
                      as: r.Fragment,
                      enter: "transition-opacity ease-linear duration-300",
                      enterFrom: "opacity-0",
                      enterTo: "opacity-100",
                      leave: "transition-opacity ease-linear duration-300",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: (0, n.jsx)("div", {
                        className: "fixed inset-0 bg-gray-600 bg-opacity-75",
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "fixed inset-0 z-40 flex",
                      children: [
                        (0, n.jsx)(c.u.Child, {
                          as: r.Fragment,
                          enter:
                            "transition ease-in-out duration-300 transform",
                          enterFrom: "-translate-x-full",
                          enterTo: "translate-x-0",
                          leave:
                            "transition ease-in-out duration-300 transform",
                          leaveFrom: "translate-x-0",
                          leaveTo: "-translate-x-full",
                          children: (0, n.jsxs)(d.V.Panel, {
                            className:
                              "relative flex w-full max-w-xs flex-1 flex-col bg-gray-800",
                            children: [
                              (0, n.jsx)(c.u.Child, {
                                as: r.Fragment,
                                enter: "ease-in-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in-out duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, n.jsx)("div", {
                                  className:
                                    "absolute top-0 right-0 -mr-12 pt-2",
                                  children: (0, n.jsxs)("button", {
                                    type: "button",
                                    className:
                                      "ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                    onClick: () => u(!1),
                                    children: [
                                      (0, n.jsx)("span", {
                                        className: "sr-only",
                                        children: "Close sidebar",
                                      }),
                                      (0, n.jsx)(U, {
                                        className: "h-6 w-6 text-white",
                                        "aria-hidden": "true",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              (0, n.jsx)(D, {
                                chatID: t,
                                chats: s,
                                onDeleteChat: a,
                                onEditChatTitle: i,
                                onNewChatRequested: l,
                                onChatSelected: o,
                                sidebarOpen: m,
                                setSidebarOpen: u,
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)("div", { className: "w-14 flex-shrink-0" }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("div", {
                className:
                  "hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col",
                children: (0, n.jsx)(D, {
                  chatID: t,
                  chats: s,
                  onDeleteChat: a,
                  onEditChatTitle: i,
                  onNewChatRequested: l,
                  onChatSelected: o,
                  sidebarOpen: m,
                  setSidebarOpen: u,
                }),
              }),
              (0, n.jsx)("div", {
                onTouchMove: (e) => {
                  if (!h) return;
                  let t = e.touches[0].clientX - h;
                  t > 40 && u(!0);
                },
                onTouchStart: (e) => {
                  e.touches[0].clientX > 50 || N(e.touches[0].clientX);
                },
                onTouchEnd: () => {
                  N(null);
                },
                className: "flex flex-1 flex-col lg:pl-80",
                children: x({ sidebarOpen: m, setSidebarOpen: u }),
              }),
            ],
          }),
        });
      }
      var H = s(57632);
      let F = l("useUserPrompts");
      function K() {
        let [e, t] = (0, r.useState)(""),
          [s, a] = (0, r.useState)(""),
          [i, l] = (0, r.useState)(""),
          [o, c] = F([]),
          [d, x] = (0, r.useState)(!1),
          m = () => {
            e &&
              i &&
              (c([
                ...o,
                { id: (0, H.Z)(), title: e, description: s, prompt: i },
              ]),
              t(""),
              a(""),
              l(""),
              x(!1));
          };
        return d
          ? (0, n.jsxs)("div", {
              children: [
                (0, n.jsx)("div", {
                  className: "font-semibold my-1",
                  children: "Title:",
                }),
                (0, n.jsx)("input", {
                  type: "text",
                  placeholder:
                    "Prompt Title (e.g., 'Domain Names Inspirations')",
                  className:
                    "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out",
                  value: e,
                  onChange: (e) => t(e.target.value),
                }),
                (0, n.jsx)("div", {
                  className: "font-semibold mb-1 mt-3",
                  children: "Description (optional):",
                }),
                (0, n.jsx)("input", {
                  type: "text",
                  placeholder: "E.g., A list of domain names based on topics",
                  className:
                    "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out",
                  value: s,
                  onChange: (e) => a(e.target.value),
                }),
                (0, n.jsxs)("div", {
                  className: " mb-1 mt-3",
                  children: [
                    (0, n.jsx)("span", {
                      className: "font-semibold ",
                      children: "Prompt:",
                    }),
                    (0, n.jsxs)("span", {
                      className: "text-xs ml-2",
                      children: [
                        "Use",
                        " ",
                        (0, n.jsx)("code", {
                          className: "text-xs bg-gray-200",
                          children: "{{your content here}}",
                        }),
                        " ",
                        "to indicate the fill in the blank part.",
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)(L.Z, {
                  className:
                    "w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-base leading-6 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out",
                  minRows: 3,
                  placeholder: "Enter your prompt here...",
                  value: i,
                  onChange: (e) => l(e.target.value),
                  onKeyDown: (e) => {
                    "Enter" === e.key && e.metaKey && (e.preventDefault(), m());
                  },
                }),
                (0, n.jsx)("div", {
                  className: "my-2 text-center",
                  children: (0, n.jsxs)("button", {
                    onClick: m,
                    className:
                      "bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex space-x-1 justify-center items-center",
                    children: [
                      (0, n.jsx)(h.Lfi, { className: "w-4 h-4" }),
                      (0, n.jsx)("span", { children: "Add Prompt" }),
                    ],
                  }),
                }),
              ],
            })
          : (0, n.jsx)("div", {
              className: "text-center",
              children: (0, n.jsxs)("button", {
                onClick: () => x(!0),
                className:
                  "text-blue-500 hover:underline inline-flex justify-center items-center font-semibold space-x-1",
                children: [
                  (0, n.jsx)(h.Lfi, { className: "w-4 h-4" }),
                  (0, n.jsx)("span", { children: "Add Prompt" }),
                ],
              }),
            });
      }
      let k = [
          {
            id: "1",
            title: "Fix Grammar Errors",
            description: "Fix grammar errors in the text",
            prompt:
              "Fix all the grammar errors in the text below. Only fix grammar errors, do not change the text style. Then explain the grammar errors in a list format.\n\n{{your content here}}",
            source: "Tony Dinh",
          },
        ],
        Y = l("useSelectedPromptLib"),
        V = l("useUserPrompts"),
        W = [{ name: "Your Prompts" }, { name: "Community Prompts" }];
      function Z() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      function J() {
        let [e, t] = Y("Your Prompts"),
          [s, a] = V([]);
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsxs)("div", {
              className: "sm:hidden",
              children: [
                (0, n.jsx)("label", {
                  htmlFor: "tabs",
                  className: "sr-only",
                  children: "Select a tab",
                }),
                (0, n.jsx)("select", {
                  id: "tabs",
                  name: "tabs",
                  className:
                    "block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm",
                  defaultValue: e,
                  children: W.map((e) =>
                    (0, n.jsx)("option", { children: e.name }, e.name)
                  ),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "hidden sm:block",
              children: (0, n.jsx)("div", {
                className: "border-b border-gray-200",
                children: (0, n.jsx)("nav", {
                  className: "-mb-px flex space-x-8",
                  "aria-label": "Tabs",
                  children: W.map((a) =>
                    (0, n.jsxs)(
                      "button",
                      {
                        onClick: () => t(a.name),
                        className: Z(
                          a.name === e
                            ? "border-blue-500 text-blue-600"
                            : "border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700",
                          "flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                        ),
                        "aria-current": a.name === e ? "page" : void 0,
                        children: [
                          a.name,
                          (0, n.jsx)("span", {
                            className: Z(
                              a.name === e
                                ? "bg-blue-100 text-blue-600"
                                : "bg-gray-100 text-gray-900",
                              "ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block"
                            ),
                            children:
                              "Your Prompts" === a.name ? s.length : k.length,
                          }),
                        ],
                      },
                      a.name
                    )
                  ),
                }),
              }),
            }),
          ],
        });
      }
      let Q = l("useSelectedPromptLib"),
        q = l("useUserPrompts");
      function _(e) {
        let { usePrompt: t } = e,
          [s, a] = (0, r.useState)(!0),
          [i, l] = (0, r.useState)(""),
          [o, c] = Q("Your Prompts"),
          [d, x] = q([]),
          m = "Your Prompts" === o ? d : k;
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("h2", {
              className: "text-center text-2xl font-bold text-gray-800",
              children: "Prompt Library",
            }),
            (0, n.jsx)(J, {}),
            (0, n.jsxs)("div", {
              className: "mt-4",
              children: [
                0 === m.length
                  ? (0, n.jsx)("div", {
                      className:
                        "text-center text-gray-500 p-4 border border-2 border-dashed border-gray-300 rounded-lg",
                      children:
                        "Your Prompts" === o
                          ? "You have no saved prompts"
                          : "This library is empty",
                    })
                  : null,
                m.map((e) =>
                  (0, n.jsxs)(
                    "div",
                    {
                      className:
                        "p-4 border border-gray-200 rounded shadow-sm mb-4 flex items-center justify-between space-x-2",
                      children: [
                        (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsx)("h3", {
                              className: "text-lg font-bold text-gray-800",
                              children: e.title,
                            }),
                            (0, n.jsx)("p", {
                              className: "text-gray-600",
                              children:
                                e.description ||
                                (0, n.jsx)("span", {
                                  className: "italic text-gray-400",
                                  children: "(No description)",
                                }),
                            }),
                            e.source
                              ? (0, n.jsxs)("p", {
                                  className: "text-gray-600 text-xs my-1",
                                  children: ["Created by: ", e.source],
                                })
                              : null,
                            "Your Prompts" === o
                              ? (0, n.jsx)(v, {
                                  onConfirmed: () => {
                                    x(d.filter((t) => t.id !== e.id));
                                  },
                                  className:
                                    "text-xs text-red-500 hover:undefined",
                                  children: "Delete",
                                })
                              : null,
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "space-y-2 text-right",
                          children: [
                            (0, n.jsx)("button", {
                              className:
                                "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap",
                              onClick: () => {
                                t(e);
                              },
                              children: "→ Use",
                            }),
                            (0, n.jsxs)("div", {
                              className: "text-xs text-gray-500",
                              children: [e.prompt.length, " characters"],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id
                  )
                ),
                (0, n.jsx)("hr", { className: "my-4" }),
                "Your Prompts" === o
                  ? (0, n.jsx)("div", {
                      className: "my-4",
                      children: (0, n.jsx)(K, {}),
                    })
                  : (0, n.jsxs)("div", {
                      className: "my-4 text-center",
                      children: [
                        (0, n.jsx)("span", {
                          children: "Contribute Prompts via: ",
                        }),
                        (0, n.jsx)("a", {
                          href: "https://github.com/trungdq88/chatgpt-prompt-templates",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          className:
                            "text-blue-500 hover:underline inline-flex justify-center items-center font-semibold space-x-1",
                          children: "GitHub",
                        }),
                        "⋅",
                        (0, n.jsx)("a", {
                          href: "https://forms.gle/1mmzLRqGKd3XBAZz8",
                          target: "_blank",
                          rel: "noreferrer noopener",
                          className:
                            "text-blue-500 hover:underline inline-flex justify-center items-center font-semibold space-x-1",
                          children: "Google Form",
                        }),
                      ],
                    }),
              ],
            }),
          ],
        });
      }
      function z(e) {
        let { usePrompt: t } = e,
          [s, a] = (0, r.useState)(!1);
        return (0, n.jsxs)("div", {
          className: "my-4 text-center",
          children: [
            (0, n.jsxs)("button", {
              onClick: () => a(!0),
              className:
                "inline-flex items-center justify-center rounded-full px-4 py-3 text-sm shadow-md bg-orange-600 text-white hover:bg-orange-500 transition-all active:bg-orange-600 group space-x-2",
              children: [
                (0, n.jsx)(w.Mp$, { className: "w-4 h-4" }),
                (0, n.jsx)("span", { children: "Prompt Library" }),
              ],
            }),
            (0, n.jsx)(m, {
              wide: !0,
              open: s,
              setOpen: a,
              children: (0, n.jsx)(_, {
                usePrompt: (e) => {
                  t(e), a(!1);
                },
              }),
            }),
          ],
        });
      }
      function $() {
        return (0, n.jsxs)("svg", {
          className: "animate-spin h-5 w-5",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            (0, n.jsx)("circle", {
              className: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "4",
            }),
            (0, n.jsx)("path", {
              className: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
            }),
          ],
        });
      }
      let ee = l("useAPIKey");
      function et(e) {
        let { onCompleted: t } = e,
          [s, a] = ee(""),
          [i, l] = (0, r.useState)(""),
          [o, c] = (0, r.useState)(!1),
          [d, x] = (0, r.useState)(!1),
          [N, A] = (0, r.useState)(!1),
          [p, f] = (0, r.useState)(s),
          [E, y] = (0, r.useState)(!1),
          I = async () => {
            A(!0);
          },
          g = async () => {
            if ((l(""), null !== p)) {
              if ("" === p) {
                a(""), A(!1), t && t();
                return;
              }
              (await S(p)) && (a(p), x(!0), A(!1), t && t());
            }
          },
          S = async (e) => {
            c(!0);
            try {
              let t = await fetch(
                "https://api.openai.com/v1/chat/completions",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(e),
                  },
                  body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: "hello" }],
                  }),
                }
              );
              if (401 === t.status)
                return (
                  c(!1),
                  l(
                    "Invalid API key. Please make sure your API key is still working properly."
                  ),
                  null
                );
              if (429 === t.status)
                return (
                  c(!1),
                  l(
                    "Your API key is not working. You need a paid account on OpenAI in order to use the ChatGPT API Key (the free trial won't work). If you already have a paid OpenAI account, check to see if you still have sufficient credits. Also, try creating a new API key and trying again. If this problem persists, please contact support."
                  ),
                  null
                );
              if (!t.ok)
                return (
                  l(
                    "Could not connect to OpenAI API with this API key. Please try again later."
                  ),
                  c(!1),
                  null
                );
              let s = await t.json();
              return c(!1), s;
            } catch (e) {
              l(
                "Could not connect to OpenAI API from your browser. This could be a network issue or adblock. Please try again or contact support. Open Developer Console to see more details."
              ),
                console.error(e);
            }
            c(!1);
          };
        return (0, n.jsxs)("div", {
          className: " mt-10 ",
          children: [
            d &&
              (0, n.jsxs)("div", {
                className: "flex items-center justify-center",
                children: [
                  (0, n.jsx)("div", {
                    className: "text-green-500 text-sm font-semibold my-2",
                    children: "Awesome! You can start chatting now!",
                  }),
                  (0, n.jsx)(u.Z, {}),
                ],
              }),
            s
              ? (0, n.jsx)("div", {
                  className: "text-sm text-center",
                  children: (0, n.jsx)("div", {
                    children: (0, n.jsxs)("button", {
                      className:
                        "text-blue-500 hover:underline font-semibold inline-flex space-x-2 disabled:text-gray-500",
                      onClick: I,
                      disabled: o,
                      children: [
                        o
                          ? (0, n.jsx)($, {})
                          : (0, n.jsx)(T.itj, { className: "w-5 h-5" }),
                        (0, n.jsxs)("span", {
                          children: [
                            "Change API Key",
                            s ? " (***".concat(s.slice(s.length - 4), ")") : "",
                          ],
                        }),
                      ],
                    }),
                  }),
                })
              : (0, n.jsxs)("div", {
                  className: "text-sm mt-10 text-center space-y-4",
                  children: [
                    (0, n.jsx)("div", {
                      children:
                        "To get started, enter your OpenAI API key below.",
                    }),
                    (0, n.jsx)("div", {
                      children: (0, n.jsxs)("button", {
                        disabled: o,
                        className:
                          "inline-flex items-center justify-center rounded-full px-4 py-3 text-sm shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-sm disabled:bg-gray-400 space-x-2",
                        onClick: I,
                        children: [
                          o
                            ? (0, n.jsx)($, {})
                            : (0, n.jsx)(T.itj, { className: "w-5 h-5" }),
                          (0, n.jsx)("span", { children: "Enter API Key" }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("div", {
                      children: (0, n.jsx)("a", {
                        className: "text-blue-500 text-xs hover:underline",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://platform.openai.com/account/api-keys",
                        children: "→ Get your API key from Open AI dashboard.",
                      }),
                    }),
                  ],
                }),
            (0, n.jsxs)(m, {
              open: N,
              setOpen: A,
              showCloseButton: !1,
              children: [
                (0, n.jsx)("h2", {
                  className: "text-center text-xl font-bold",
                  children: "Enter Your OpenAI API Key:",
                }),
                (0, n.jsx)("div", {
                  className: "my-4",
                  children: (0, n.jsx)("input", {
                    type: "text",
                    placeholder: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                    className:
                      "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
                    value: p,
                    autoComplete: "off",
                    onChange: (e) => f(e.target.value),
                    onKeyDown: (e) => {
                      "Enter" === e.key && (e.preventDefault(), g());
                    },
                    disabled: o,
                  }),
                }),
                i
                  ? (0, n.jsx)("div", {
                      className: "text-sm text-center text-red-500",
                      children: i,
                    })
                  : null,
                (0, n.jsxs)("div", {
                  className:
                    "my-2 text-center space-x-2 flex items-center justify-center",
                  children: [
                    (0, n.jsxs)("button", {
                      disabled: o,
                      onClick: () => g(),
                      className:
                        "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1 disabled:bg-gray-400",
                      children: [
                        o
                          ? (0, n.jsx)($, {})
                          : (0, n.jsx)(h.bzc, { className: "w-4 h-4" }),
                        (0, n.jsx)("span", { children: "Save" }),
                      ],
                    }),
                    (0, n.jsx)("button", {
                      disabled: o,
                      onClick: () => A(!1),
                      className:
                        "inline-flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-1",
                      children: (0, n.jsx)("span", { children: "Cancel" }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function es(e) {
        let { domain: t } = e,
          s = (e) => {
            let s = e.screenX,
              n = e.screenY;
            window.open(
              "https://instantdomainsearch.com/?q=".concat(t),
              "_blank",
              "width=600,height=300,left=".concat(s, ",top=").concat(n)
            );
          };
        return (0, n.jsx)("button", {
          onClick: s,
          className:
            "rounded-full border border-blue-500 px-2 py-0 text-xs my-0 ml-2 opacity-0 group-hover:opacity-100 hover:bg-gray-100 transition-all",
          children: "Check Domain",
        });
      }
      var en = s(51356);
      function ea(e) {
        let { rawContent: t } = e,
          [s, a] = (0, r.useState)(!1),
          i = () => {
            navigator.clipboard.writeText(t),
              a(!0),
              setTimeout(() => {
                a(!1);
              }, 2e3);
          };
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)("pre", {
              className:
                "mb-2 overflow-auto text-sm border border-gray-200 rounded bg-gray-100 p-4",
              children: t,
            }),
            (0, n.jsx)("div", {
              className: "text-center",
              children: (0, n.jsx)("button", {
                onClick: i,
                className:
                  "rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
                children: s ? "Copied!" : "Copy Content",
              }),
            }),
          ],
        });
      }
      let er = {
        js: "js",
        javascript: "js",
        ts: "js",
        typescript: "js",
        html: "html",
        css: "css",
      };
      function ei(e) {
        let { code: t, children: s, language: a } = e,
          [i, l] = (0, r.useState)(!1),
          o = () => {
            navigator.clipboard.writeText(t),
              l(!0),
              setTimeout(() => {
                l(!1);
              }, 2e3);
          };
        return (0, n.jsxs)("div", {
          children: [
            s,
            (0, n.jsxs)("div", {
              className: "text-center space-x-2",
              children: [
                (0, n.jsx)("button", {
                  onClick: o,
                  className:
                    "rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-sans",
                  children: i ? "Copied!" : "Copy Code",
                }),
                a && er.hasOwnProperty(a)
                  ? (0, n.jsxs)("form", {
                      className: "inline-block",
                      action: "https://codepen.io/pen/define",
                      method: "POST",
                      target: "_blank",
                      children: [
                        (0, n.jsx)("input", {
                          type: "hidden",
                          name: "data",
                          value: JSON.stringify({
                            title: "Code from askgrogu.ai",
                            [er[a]]: t,
                          }),
                        }),
                        (0, n.jsxs)("button", {
                          type: "submit",
                          className:
                            "rounded-full bg-white py-1 px-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 font-sans",
                          children: [
                            "Open in CodePen ",
                            (0, n.jsx)(R.x9Z, { className: "inline-block" }),
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            }),
          ],
        });
      }
      var el = s(11111),
        eo = s(63714),
        ec = s(329);
      let ed = [
        "AAA",
        "AARP",
        "ABARTH",
        "ABB",
        "ABBOTT",
        "ABBVIE",
        "ABC",
        "ABLE",
        "ABOGADO",
        "ABUDHABI",
        "AC",
        "ACADEMY",
        "ACCENTURE",
        "ACCOUNTANT",
        "ACCOUNTANTS",
        "ACO",
        "ACTOR",
        "AD",
        "ADS",
        "ADULT",
        "AE",
        "AEG",
        "AERO",
        "AETNA",
        "AF",
        "AFL",
        "AFRICA",
        "AG",
        "AGAKHAN",
        "AGENCY",
        "AI",
        "AIG",
        "AIRBUS",
        "AIRFORCE",
        "AIRTEL",
        "AKDN",
        "AL",
        "ALFAROMEO",
        "ALIBABA",
        "ALIPAY",
        "ALLFINANZ",
        "ALLSTATE",
        "ALLY",
        "ALSACE",
        "ALSTOM",
        "AM",
        "AMAZON",
        "AMERICANEXPRESS",
        "AMERICANFAMILY",
        "AMEX",
        "AMFAM",
        "AMICA",
        "AMSTERDAM",
        "ANALYTICS",
        "ANDROID",
        "ANQUAN",
        "ANZ",
        "AO",
        "AOL",
        "APARTMENTS",
        "APP",
        "APPLE",
        "AQ",
        "AQUARELLE",
        "AR",
        "ARAB",
        "ARAMCO",
        "ARCHI",
        "ARMY",
        "ARPA",
        "ART",
        "ARTE",
        "AS",
        "ASDA",
        "ASIA",
        "ASSOCIATES",
        "AT",
        "ATHLETA",
        "ATTORNEY",
        "AU",
        "AUCTION",
        "AUDI",
        "AUDIBLE",
        "AUDIO",
        "AUSPOST",
        "AUTHOR",
        "AUTO",
        "AUTOS",
        "AVIANCA",
        "AW",
        "AWS",
        "AX",
        "AXA",
        "AZ",
        "AZURE",
        "BA",
        "BABY",
        "BAIDU",
        "BANAMEX",
        "BANANAREPUBLIC",
        "BAND",
        "BANK",
        "BAR",
        "BARCELONA",
        "BARCLAYCARD",
        "BARCLAYS",
        "BAREFOOT",
        "BARGAINS",
        "BASEBALL",
        "BASKETBALL",
        "BAUHAUS",
        "BAYERN",
        "BB",
        "BBC",
        "BBT",
        "BBVA",
        "BCG",
        "BCN",
        "BD",
        "BE",
        "BEATS",
        "BEAUTY",
        "BEER",
        "BENTLEY",
        "BERLIN",
        "BEST",
        "BESTBUY",
        "BET",
        "BF",
        "BG",
        "BH",
        "BHARTI",
        "BI",
        "BIBLE",
        "BID",
        "BIKE",
        "BING",
        "BINGO",
        "BIO",
        "BIZ",
        "BJ",
        "BLACK",
        "BLACKFRIDAY",
        "BLOCKBUSTER",
        "BLOG",
        "BLOOMBERG",
        "BLUE",
        "BM",
        "BMS",
        "BMW",
        "BN",
        "BNPPARIBAS",
        "BO",
        "BOATS",
        "BOEHRINGER",
        "BOFA",
        "BOM",
        "BOND",
        "BOO",
        "BOOK",
        "BOOKING",
        "BOSCH",
        "BOSTIK",
        "BOSTON",
        "BOT",
        "BOUTIQUE",
        "BOX",
        "BR",
        "BRADESCO",
        "BRIDGESTONE",
        "BROADWAY",
        "BROKER",
        "BROTHER",
        "BRUSSELS",
        "BS",
        "BT",
        "BUILD",
        "BUILDERS",
        "BUSINESS",
        "BUY",
        "BUZZ",
        "BV",
        "BW",
        "BY",
        "BZ",
        "BZH",
        "CA",
        "CAB",
        "CAFE",
        "CAL",
        "CALL",
        "CALVINKLEIN",
        "CAM",
        "CAMERA",
        "CAMP",
        "CANON",
        "CAPETOWN",
        "CAPITAL",
        "CAPITALONE",
        "CAR",
        "CARAVAN",
        "CARDS",
        "CARE",
        "CAREER",
        "CAREERS",
        "CARS",
        "CASA",
        "CASE",
        "CASH",
        "CASINO",
        "CAT",
        "CATERING",
        "CATHOLIC",
        "CBA",
        "CBN",
        "CBRE",
        "CBS",
        "CC",
        "CD",
        "CENTER",
        "CEO",
        "CERN",
        "CF",
        "CFA",
        "CFD",
        "CG",
        "CH",
        "CHANEL",
        "CHANNEL",
        "CHARITY",
        "CHASE",
        "CHAT",
        "CHEAP",
        "CHINTAI",
        "CHRISTMAS",
        "CHROME",
        "CHURCH",
        "CI",
        "CIPRIANI",
        "CIRCLE",
        "CISCO",
        "CITADEL",
        "CITI",
        "CITIC",
        "CITY",
        "CITYEATS",
        "CK",
        "CL",
        "CLAIMS",
        "CLEANING",
        "CLICK",
        "CLINIC",
        "CLINIQUE",
        "CLOTHING",
        "CLOUD",
        "CLUB",
        "CLUBMED",
        "CM",
        "CN",
        "CO",
        "COACH",
        "CODES",
        "COFFEE",
        "COLLEGE",
        "COLOGNE",
        "COM",
        "COMCAST",
        "COMMBANK",
        "COMMUNITY",
        "COMPANY",
        "COMPARE",
        "COMPUTER",
        "COMSEC",
        "CONDOS",
        "CONSTRUCTION",
        "CONSULTING",
        "CONTACT",
        "CONTRACTORS",
        "COOKING",
        "COOKINGCHANNEL",
        "COOL",
        "COOP",
        "CORSICA",
        "COUNTRY",
        "COUPON",
        "COUPONS",
        "COURSES",
        "CPA",
        "CR",
        "CREDIT",
        "CREDITCARD",
        "CREDITUNION",
        "CRICKET",
        "CROWN",
        "CRS",
        "CRUISE",
        "CRUISES",
        "CU",
        "CUISINELLA",
        "CV",
        "CW",
        "CX",
        "CY",
        "CYMRU",
        "CYOU",
        "CZ",
        "DABUR",
        "DAD",
        "DANCE",
        "DATA",
        "DATE",
        "DATING",
        "DATSUN",
        "DAY",
        "DCLK",
        "DDS",
        "DE",
        "DEAL",
        "DEALER",
        "DEALS",
        "DEGREE",
        "DELIVERY",
        "DELL",
        "DELOITTE",
        "DELTA",
        "DEMOCRAT",
        "DENTAL",
        "DENTIST",
        "DESI",
        "DESIGN",
        "DEV",
        "DHL",
        "DIAMONDS",
        "DIET",
        "DIGITAL",
        "DIRECT",
        "DIRECTORY",
        "DISCOUNT",
        "DISCOVER",
        "DISH",
        "DIY",
        "DJ",
        "DK",
        "DM",
        "DNP",
        "DO",
        "DOCS",
        "DOCTOR",
        "DOG",
        "DOMAINS",
        "DOT",
        "DOWNLOAD",
        "DRIVE",
        "DTV",
        "DUBAI",
        "DUNLOP",
        "DUPONT",
        "DURBAN",
        "DVAG",
        "DVR",
        "DZ",
        "EARTH",
        "EAT",
        "EC",
        "ECO",
        "EDEKA",
        "EDU",
        "EDUCATION",
        "EE",
        "EG",
        "EMAIL",
        "EMERCK",
        "ENERGY",
        "ENGINEER",
        "ENGINEERING",
        "ENTERPRISES",
        "EPSON",
        "EQUIPMENT",
        "ER",
        "ERICSSON",
        "ERNI",
        "ES",
        "ESQ",
        "ESTATE",
        "ET",
        "ETISALAT",
        "EU",
        "EUROVISION",
        "EUS",
        "EVENTS",
        "EXCHANGE",
        "EXPERT",
        "EXPOSED",
        "EXPRESS",
        "EXTRASPACE",
        "FAGE",
        "FAIL",
        "FAIRWINDS",
        "FAITH",
        "FAMILY",
        "FAN",
        "FANS",
        "FARM",
        "FARMERS",
        "FASHION",
        "FAST",
        "FEDEX",
        "FEEDBACK",
        "FERRARI",
        "FERRERO",
        "FI",
        "FIAT",
        "FIDELITY",
        "FIDO",
        "FILM",
        "FINAL",
        "FINANCE",
        "FINANCIAL",
        "FIRE",
        "FIRESTONE",
        "FIRMDALE",
        "FISH",
        "FISHING",
        "FIT",
        "FITNESS",
        "FJ",
        "FK",
        "FLICKR",
        "FLIGHTS",
        "FLIR",
        "FLORIST",
        "FLOWERS",
        "FLY",
        "FM",
        "FO",
        "FOO",
        "FOOD",
        "FOODNETWORK",
        "FOOTBALL",
        "FORD",
        "FOREX",
        "FORSALE",
        "FORUM",
        "FOUNDATION",
        "FOX",
        "FR",
        "FREE",
        "FRESENIUS",
        "FRL",
        "FROGANS",
        "FRONTDOOR",
        "FRONTIER",
        "FTR",
        "FUJITSU",
        "FUN",
        "FUND",
        "FURNITURE",
        "FUTBOL",
        "FYI",
        "GA",
        "GAL",
        "GALLERY",
        "GALLO",
        "GALLUP",
        "GAME",
        "GAMES",
        "GAP",
        "GARDEN",
        "GAY",
        "GB",
        "GBIZ",
        "GD",
        "GDN",
        "GE",
        "GEA",
        "GENT",
        "GENTING",
        "GEORGE",
        "GF",
        "GG",
        "GGEE",
        "GH",
        "GI",
        "GIFT",
        "GIFTS",
        "GIVES",
        "GIVING",
        "GL",
        "GLASS",
        "GLE",
        "GLOBAL",
        "GLOBO",
        "GM",
        "GMAIL",
        "GMBH",
        "GMO",
        "GMX",
        "GN",
        "GODADDY",
        "GOLD",
        "GOLDPOINT",
        "GOLF",
        "GOO",
        "GOODYEAR",
        "GOOG",
        "GOOGLE",
        "GOP",
        "GOT",
        "GOV",
        "GP",
        "GQ",
        "GR",
        "GRAINGER",
        "GRAPHICS",
        "GRATIS",
        "GREEN",
        "GRIPE",
        "GROCERY",
        "GROUP",
        "GS",
        "GT",
        "GU",
        "GUARDIAN",
        "GUCCI",
        "GUGE",
        "GUIDE",
        "GUITARS",
        "GURU",
        "GW",
        "GY",
        "HAIR",
        "HAMBURG",
        "HANGOUT",
        "HAUS",
        "HBO",
        "HDFC",
        "HDFCBANK",
        "HEALTH",
        "HEALTHCARE",
        "HELP",
        "HELSINKI",
        "HERE",
        "HERMES",
        "HGTV",
        "HIPHOP",
        "HISAMITSU",
        "HITACHI",
        "HIV",
        "HK",
        "HKT",
        "HM",
        "HN",
        "HOCKEY",
        "HOLDINGS",
        "HOLIDAY",
        "HOMEDEPOT",
        "HOMEGOODS",
        "HOMES",
        "HOMESENSE",
        "HONDA",
        "HORSE",
        "HOSPITAL",
        "HOST",
        "HOSTING",
        "HOT",
        "HOTELES",
        "HOTELS",
        "HOTMAIL",
        "HOUSE",
        "HOW",
        "HR",
        "HSBC",
        "HT",
        "HU",
        "HUGHES",
        "HYATT",
        "HYUNDAI",
        "IBM",
        "ICBC",
        "ICE",
        "ICU",
        "ID",
        "IE",
        "IEEE",
        "IFM",
        "IKANO",
        "IL",
        "IM",
        "IMAMAT",
        "IMDB",
        "IMMO",
        "IMMOBILIEN",
        "IN",
        "INC",
        "INDUSTRIES",
        "INFINITI",
        "INFO",
        "ING",
        "INK",
        "INSTITUTE",
        "INSURANCE",
        "INSURE",
        "INT",
        "INTERNATIONAL",
        "INTUIT",
        "INVESTMENTS",
        "IO",
        "IPIRANGA",
        "IQ",
        "IR",
        "IRISH",
        "IS",
        "ISMAILI",
        "IST",
        "ISTANBUL",
        "IT",
        "ITAU",
        "ITV",
        "JAGUAR",
        "JAVA",
        "JCB",
        "JE",
        "JEEP",
        "JETZT",
        "JEWELRY",
        "JIO",
        "JLL",
        "JM",
        "JMP",
        "JNJ",
        "JO",
        "JOBS",
        "JOBURG",
        "JOT",
        "JOY",
        "JP",
        "JPMORGAN",
        "JPRS",
        "JUEGOS",
        "JUNIPER",
        "KAUFEN",
        "KDDI",
        "KE",
        "KERRYHOTELS",
        "KERRYLOGISTICS",
        "KERRYPROPERTIES",
        "KFH",
        "KG",
        "KH",
        "KI",
        "KIA",
        "KIDS",
        "KIM",
        "KINDER",
        "KINDLE",
        "KITCHEN",
        "KIWI",
        "KM",
        "KN",
        "KOELN",
        "KOMATSU",
        "KOSHER",
        "KP",
        "KPMG",
        "KPN",
        "KR",
        "KRD",
        "KRED",
        "KUOKGROUP",
        "KW",
        "KY",
        "KYOTO",
        "KZ",
        "LA",
        "LACAIXA",
        "LAMBORGHINI",
        "LAMER",
        "LANCASTER",
        "LANCIA",
        "LAND",
        "LANDROVER",
        "LANXESS",
        "LASALLE",
        "LAT",
        "LATINO",
        "LATROBE",
        "LAW",
        "LAWYER",
        "LB",
        "LC",
        "LDS",
        "LEASE",
        "LECLERC",
        "LEFRAK",
        "LEGAL",
        "LEGO",
        "LEXUS",
        "LGBT",
        "LI",
        "LIDL",
        "LIFE",
        "LIFEINSURANCE",
        "LIFESTYLE",
        "LIGHTING",
        "LIKE",
        "LILLY",
        "LIMITED",
        "LIMO",
        "LINCOLN",
        "LINDE",
        "LINK",
        "LIPSY",
        "LIVE",
        "LIVING",
        "LK",
        "LLC",
        "LLP",
        "LOAN",
        "LOANS",
        "LOCKER",
        "LOCUS",
        "LOL",
        "LONDON",
        "LOTTE",
        "LOTTO",
        "LOVE",
        "LPL",
        "LPLFINANCIAL",
        "LR",
        "LS",
        "LT",
        "LTD",
        "LTDA",
        "LU",
        "LUNDBECK",
        "LUXE",
        "LUXURY",
        "LV",
        "LY",
        "MA",
        "MACYS",
        "MADRID",
        "MAIF",
        "MAISON",
        "MAKEUP",
        "MAN",
        "MANAGEMENT",
        "MANGO",
        "MAP",
        "MARKET",
        "MARKETING",
        "MARKETS",
        "MARRIOTT",
        "MARSHALLS",
        "MASERATI",
        "MATTEL",
        "MBA",
        "MC",
        "MCKINSEY",
        "MD",
        "ME",
        "MED",
        "MEDIA",
        "MEET",
        "MELBOURNE",
        "MEME",
        "MEMORIAL",
        "MEN",
        "MENU",
        "MERCKMSD",
        "MG",
        "MH",
        "MIAMI",
        "MICROSOFT",
        "MIL",
        "MINI",
        "MINT",
        "MIT",
        "MITSUBISHI",
        "MK",
        "ML",
        "MLB",
        "MLS",
        "MM",
        "MMA",
        "MN",
        "MO",
        "MOBI",
        "MOBILE",
        "MODA",
        "MOE",
        "MOI",
        "MOM",
        "MONASH",
        "MONEY",
        "MONSTER",
        "MORMON",
        "MORTGAGE",
        "MOSCOW",
        "MOTO",
        "MOTORCYCLES",
        "MOV",
        "MOVIE",
        "MP",
        "MQ",
        "MR",
        "MS",
        "MSD",
        "MT",
        "MTN",
        "MTR",
        "MU",
        "MUSEUM",
        "MUSIC",
        "MUTUAL",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NAB",
        "NAGOYA",
        "NAME",
        "NATURA",
        "NAVY",
        "NBA",
        "NC",
        "NE",
        "NEC",
        "NET",
        "NETBANK",
        "NETFLIX",
        "NETWORK",
        "NEUSTAR",
        "NEW",
        "NEWS",
        "NEXT",
        "NEXTDIRECT",
        "NEXUS",
        "NF",
        "NFL",
        "NG",
        "NGO",
        "NHK",
        "NI",
        "NICO",
        "NIKE",
        "NIKON",
        "NINJA",
        "NISSAN",
        "NISSAY",
        "NL",
        "NO",
        "NOKIA",
        "NORTHWESTERNMUTUAL",
        "NORTON",
        "NOW",
        "NOWRUZ",
        "NOWTV",
        "NP",
        "NR",
        "NRA",
        "NRW",
        "NTT",
        "NU",
        "NYC",
        "NZ",
        "OBI",
        "OBSERVER",
        "OFFICE",
        "OKINAWA",
        "OLAYAN",
        "OLAYANGROUP",
        "OLDNAVY",
        "OLLO",
        "OM",
        "OMEGA",
        "ONE",
        "ONG",
        "ONL",
        "ONLINE",
        "OOO",
        "OPEN",
        "ORACLE",
        "ORANGE",
        "ORG",
        "ORGANIC",
        "ORIGINS",
        "OSAKA",
        "OTSUKA",
        "OTT",
        "OVH",
        "PA",
        "PAGE",
        "PANASONIC",
        "PARIS",
        "PARS",
        "PARTNERS",
        "PARTS",
        "PARTY",
        "PASSAGENS",
        "PAY",
        "PCCW",
        "PE",
        "PET",
        "PF",
        "PFIZER",
        "PG",
        "PH",
        "PHARMACY",
        "PHD",
        "PHILIPS",
        "PHONE",
        "PHOTO",
        "PHOTOGRAPHY",
        "PHOTOS",
        "PHYSIO",
        "PICS",
        "PICTET",
        "PICTURES",
        "PID",
        "PIN",
        "PING",
        "PINK",
        "PIONEER",
        "PIZZA",
        "PK",
        "PL",
        "PLACE",
        "PLAY",
        "PLAYSTATION",
        "PLUMBING",
        "PLUS",
        "PM",
        "PN",
        "PNC",
        "POHL",
        "POKER",
        "POLITIE",
        "PORN",
        "POST",
        "PR",
        "PRAMERICA",
        "PRAXI",
        "PRESS",
        "PRIME",
        "PRO",
        "PROD",
        "PRODUCTIONS",
        "PROF",
        "PROGRESSIVE",
        "PROMO",
        "PROPERTIES",
        "PROPERTY",
        "PROTECTION",
        "PRU",
        "PRUDENTIAL",
        "PS",
        "PT",
        "PUB",
        "PW",
        "PWC",
        "PY",
        "QA",
        "QPON",
        "QUEBEC",
        "QUEST",
        "RACING",
        "RADIO",
        "RE",
        "READ",
        "REALESTATE",
        "REALTOR",
        "REALTY",
        "RECIPES",
        "RED",
        "REDSTONE",
        "REDUMBRELLA",
        "REHAB",
        "REISE",
        "REISEN",
        "REIT",
        "RELIANCE",
        "REN",
        "RENT",
        "RENTALS",
        "REPAIR",
        "REPORT",
        "REPUBLICAN",
        "REST",
        "RESTAURANT",
        "REVIEW",
        "REVIEWS",
        "REXROTH",
        "RICH",
        "RICHARDLI",
        "RICOH",
        "RIL",
        "RIO",
        "RIP",
        "RO",
        "ROCHER",
        "ROCKS",
        "RODEO",
        "ROGERS",
        "ROOM",
        "RS",
        "RSVP",
        "RU",
        "RUGBY",
        "RUHR",
        "RUN",
        "RW",
        "RWE",
        "RYUKYU",
        "SA",
        "SAARLAND",
        "SAFE",
        "SAFETY",
        "SAKURA",
        "SALE",
        "SALON",
        "SAMSCLUB",
        "SAMSUNG",
        "SANDVIK",
        "SANDVIKCOROMANT",
        "SANOFI",
        "SAP",
        "SARL",
        "SAS",
        "SAVE",
        "SAXO",
        "SB",
        "SBI",
        "SBS",
        "SC",
        "SCA",
        "SCB",
        "SCHAEFFLER",
        "SCHMIDT",
        "SCHOLARSHIPS",
        "SCHOOL",
        "SCHULE",
        "SCHWARZ",
        "SCIENCE",
        "SCOT",
        "SD",
        "SE",
        "SEARCH",
        "SEAT",
        "SECURE",
        "SECURITY",
        "SEEK",
        "SELECT",
        "SENER",
        "SERVICES",
        "SEVEN",
        "SEW",
        "SEX",
        "SEXY",
        "SFR",
        "SG",
        "SH",
        "SHANGRILA",
        "SHARP",
        "SHAW",
        "SHELL",
        "SHIA",
        "SHIKSHA",
        "SHOES",
        "SHOP",
        "SHOPPING",
        "SHOUJI",
        "SHOW",
        "SHOWTIME",
        "SI",
        "SILK",
        "SINA",
        "SINGLES",
        "SITE",
        "SJ",
        "SK",
        "SKI",
        "SKIN",
        "SKY",
        "SKYPE",
        "SL",
        "SLING",
        "SM",
        "SMART",
        "SMILE",
        "SN",
        "SNCF",
        "SO",
        "SOCCER",
        "SOCIAL",
        "SOFTBANK",
        "SOFTWARE",
        "SOHU",
        "SOLAR",
        "SOLUTIONS",
        "SONG",
        "SONY",
        "SOY",
        "SPA",
        "SPACE",
        "SPORT",
        "SPOT",
        "SR",
        "SRL",
        "SS",
        "ST",
        "STADA",
        "STAPLES",
        "STAR",
        "STATEBANK",
        "STATEFARM",
        "STC",
        "STCGROUP",
        "STOCKHOLM",
        "STORAGE",
        "STORE",
        "STREAM",
        "STUDIO",
        "STUDY",
        "STYLE",
        "SU",
        "SUCKS",
        "SUPPLIES",
        "SUPPLY",
        "SUPPORT",
        "SURF",
        "SURGERY",
        "SUZUKI",
        "SV",
        "SWATCH",
        "SWISS",
        "SX",
        "SY",
        "SYDNEY",
        "SYSTEMS",
        "SZ",
        "TAB",
        "TAIPEI",
        "TALK",
        "TAOBAO",
        "TARGET",
        "TATAMOTORS",
        "TATAR",
        "TATTOO",
        "TAX",
        "TAXI",
        "TC",
        "TCI",
        "TD",
        "TDK",
        "TEAM",
        "TECH",
        "TECHNOLOGY",
        "TEL",
        "TEMASEK",
        "TENNIS",
        "TEVA",
        "TF",
        "TG",
        "TH",
        "THD",
        "THEATER",
        "THEATRE",
        "TIAA",
        "TICKETS",
        "TIENDA",
        "TIFFANY",
        "TIPS",
        "TIRES",
        "TIROL",
        "TJ",
        "TJMAXX",
        "TJX",
        "TK",
        "TKMAXX",
        "TL",
        "TM",
        "TMALL",
        "TN",
        "TO",
        "TODAY",
        "TOKYO",
        "TOOLS",
        "TOP",
        "TORAY",
        "TOSHIBA",
        "TOTAL",
        "TOURS",
        "TOWN",
        "TOYOTA",
        "TOYS",
        "TR",
        "TRADE",
        "TRADING",
        "TRAINING",
        "TRAVEL",
        "TRAVELCHANNEL",
        "TRAVELERS",
        "TRAVELERSINSURANCE",
        "TRUST",
        "TRV",
        "TT",
        "TUBE",
        "TUI",
        "TUNES",
        "TUSHU",
        "TV",
        "TVS",
        "TW",
        "TZ",
        "UA",
        "UBANK",
        "UBS",
        "UG",
        "UK",
        "UNICOM",
        "UNIVERSITY",
        "UNO",
        "UOL",
        "UPS",
        "US",
        "UY",
        "UZ",
        "VA",
        "VACATIONS",
        "VANA",
        "VANGUARD",
        "VC",
        "VE",
        "VEGAS",
        "VENTURES",
        "VERISIGN",
        "VERSICHERUNG",
        "VET",
        "VG",
        "VI",
        "VIAJES",
        "VIDEO",
        "VIG",
        "VIKING",
        "VILLAS",
        "VIN",
        "VIP",
        "VIRGIN",
        "VISA",
        "VISION",
        "VIVA",
        "VIVO",
        "VLAANDEREN",
        "VN",
        "VODKA",
        "VOLKSWAGEN",
        "VOLVO",
        "VOTE",
        "VOTING",
        "VOTO",
        "VOYAGE",
        "VU",
        "VUELOS",
        "WALES",
        "WALMART",
        "WALTER",
        "WANG",
        "WANGGOU",
        "WATCH",
        "WATCHES",
        "WEATHER",
        "WEATHERCHANNEL",
        "WEBCAM",
        "WEBER",
        "WEBSITE",
        "WED",
        "WEDDING",
        "WEIBO",
        "WEIR",
        "WF",
        "WHOSWHO",
        "WIEN",
        "WIKI",
        "WILLIAMHILL",
        "WIN",
        "WINDOWS",
        "WINE",
        "WINNERS",
        "WME",
        "WOLTERSKLUWER",
        "WOODSIDE",
        "WORK",
        "WORKS",
        "WORLD",
        "WOW",
        "WS",
        "WTC",
        "WTF",
        "XBOX",
        "XEROX",
        "XFINITY",
        "XIHUAN",
        "XIN",
        "XN--11B4C3D",
        "XN--1CK2E1B",
        "XN--1QQW23A",
        "XN--2SCRJ9C",
        "XN--30RR7Y",
        "XN--3BST00M",
        "XN--3DS443G",
        "XN--3E0B707E",
        "XN--3HCRJ9C",
        "XN--3PXU8K",
        "XN--42C2D9A",
        "XN--45BR5CYL",
        "XN--45BRJ9C",
        "XN--45Q11C",
        "XN--4DBRK0CE",
        "XN--4GBRIM",
        "XN--54B7FTA0CC",
        "XN--55QW42G",
        "XN--55QX5D",
        "XN--5SU34J936BGSG",
        "XN--5TZM5G",
        "XN--6FRZ82G",
        "XN--6QQ986B3XL",
        "XN--80ADXHKS",
        "XN--80AO21A",
        "XN--80AQECDR1A",
        "XN--80ASEHDB",
        "XN--80ASWG",
        "XN--8Y0A063A",
        "XN--90A3AC",
        "XN--90AE",
        "XN--90AIS",
        "XN--9DBQ2A",
        "XN--9ET52U",
        "XN--9KRT00A",
        "XN--B4W605FERD",
        "XN--BCK1B9A5DRE4C",
        "XN--C1AVG",
        "XN--C2BR7G",
        "XN--CCK2B3B",
        "XN--CCKWCXETD",
        "XN--CG4BKI",
        "XN--CLCHC0EA0B2G2A9GCD",
        "XN--CZR694B",
        "XN--CZRS0T",
        "XN--CZRU2D",
        "XN--D1ACJ3B",
        "XN--D1ALF",
        "XN--E1A4C",
        "XN--ECKVDTC9D",
        "XN--EFVY88H",
        "XN--FCT429K",
        "XN--FHBEI",
        "XN--FIQ228C5HS",
        "XN--FIQ64B",
        "XN--FIQS8S",
        "XN--FIQZ9S",
        "XN--FJQ720A",
        "XN--FLW351E",
        "XN--FPCRJ9C3D",
        "XN--FZC2C9E2C",
        "XN--FZYS8D69UVGM",
        "XN--G2XX48C",
        "XN--GCKR3F0F",
        "XN--GECRJ9C",
        "XN--GK3AT1E",
        "XN--H2BREG3EVE",
        "XN--H2BRJ9C",
        "XN--H2BRJ9C8C",
        "XN--HXT814E",
        "XN--I1B6B1A6A2E",
        "XN--IMR513N",
        "XN--IO0A7I",
        "XN--J1AEF",
        "XN--J1AMH",
        "XN--J6W193G",
        "XN--JLQ480N2RG",
        "XN--JVR189M",
        "XN--KCRX77D1X4A",
        "XN--KPRW13D",
        "XN--KPRY57D",
        "XN--KPUT3I",
        "XN--L1ACC",
        "XN--LGBBAT1AD8J",
        "XN--MGB9AWBF",
        "XN--MGBA3A3EJT",
        "XN--MGBA3A4F16A",
        "XN--MGBA7C0BBN0A",
        "XN--MGBAAKC7DVF",
        "XN--MGBAAM7A8H",
        "XN--MGBAB2BD",
        "XN--MGBAH1A3HJKRD",
        "XN--MGBAI9AZGQP6J",
        "XN--MGBAYH7GPA",
        "XN--MGBBH1A",
        "XN--MGBBH1A71E",
        "XN--MGBC0A9AZCG",
        "XN--MGBCA7DZDO",
        "XN--MGBCPQ6GPA1A",
        "XN--MGBERP4A5D4AR",
        "XN--MGBGU82A",
        "XN--MGBI4ECEXP",
        "XN--MGBPL2FH",
        "XN--MGBT3DHD",
        "XN--MGBTX2B",
        "XN--MGBX4CD0AB",
        "XN--MIX891F",
        "XN--MK1BU44C",
        "XN--MXTQ1M",
        "XN--NGBC5AZD",
        "XN--NGBE9E0A",
        "XN--NGBRX",
        "XN--NODE",
        "XN--NQV7F",
        "XN--NQV7FS00EMA",
        "XN--NYQY26A",
        "XN--O3CW4H",
        "XN--OGBPF8FL",
        "XN--OTU796D",
        "XN--P1ACF",
        "XN--P1AI",
        "XN--PGBS0DH",
        "XN--PSSY2U",
        "XN--Q7CE6A",
        "XN--Q9JYB4C",
        "XN--QCKA1PMC",
        "XN--QXA6A",
        "XN--QXAM",
        "XN--RHQV96G",
        "XN--ROVU88B",
        "XN--RVC1E0AM3E",
        "XN--S9BRJ9C",
        "XN--SES554G",
        "XN--T60B56A",
        "XN--TCKWE",
        "XN--TIQ49XQYJ",
        "XN--UNUP4Y",
        "XN--VERMGENSBERATER-CTB",
        "XN--VERMGENSBERATUNG-PWB",
        "XN--VHQUV",
        "XN--VUQ861B",
        "XN--W4R85EL8FHU5DNRA",
        "XN--W4RS40L",
        "XN--WGBH1C",
        "XN--WGBL6A",
        "XN--XHQ521B",
        "XN--XKC2AL3HYE2A",
        "XN--XKC2DL3A5EE0H",
        "XN--Y9A3AQ",
        "XN--YFRO4I67O",
        "XN--YGBI2AMMX",
        "XN--ZFR164B",
        "XXX",
        "XYZ",
        "YACHTS",
        "YAHOO",
        "YAMAXUN",
        "YANDEX",
        "YE",
        "YODOBASHI",
        "YOGA",
        "YOKOHAMA",
        "YOU",
        "YOUTUBE",
        "YT",
        "YUN",
        "ZA",
        "ZAPPOS",
        "ZARA",
        "ZERO",
        "ZIP",
        "ZM",
        "ZONE",
        "ZUERICH",
        "ZW",
      ];
      function ex() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return t.filter(Boolean).join(" ");
      }
      function em(e) {
        let { message: t } = e,
          [s, a] = (0, r.useState)(!1),
          i = t.content.trim(),
          l = i;
        if ("assistant" === t.role)
          try {
            JSON.parse(l), (l = "```json\n".concat(l, "\n```"));
          } catch (e) {}
        return (0, n.jsxs)("div", {
          className: ex(
            "pl-12 relative response-block scroll-mt-32",
            "assistant" === t.role ? " min-h-[60px]" : " min-h-[40px]"
          ),
          children: [
            (0, n.jsxs)("div", {
              className: "absolute top-0 left-0",
              children: [
                "user" === t.role
                  ? (0, n.jsx)("div", {
                      className:
                        "w-9 h-9 bg-gray-200 rounded-md  flex-none flex items-center justify-center text-gray-500",
                      children: (0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        className: "w-6 h-6",
                        children: (0, n.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z",
                          clipRule: "evenodd",
                        }),
                      }),
                    })
                  : (0, n.jsx)("img", {
                      src: "/favicon-192x192.png",
                      className: "w-9 h-9 rounded-md flex-none",
                    }),
                "assistant" === t.role &&
                  (0, n.jsx)("div", {
                    className: "my-1 flex items-center justify-center",
                    children: (0, n.jsx)("button", {
                      onClick: () => a(!s),
                      children: (0, n.jsx)(R.aJo, {
                        className: ex(
                          "w-4 h-4 hover:text-black transition-all",
                          s ? "text-black" : "text-gray-400"
                        ),
                      }),
                    }),
                  }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "w-full",
              children:
                "user" === t.role
                  ? (0, n.jsx)("div", {
                      className: ex(
                        "text-sm whitespace-pre-line space-y-2 inline-block",
                        "bg-blue-500 text-white px-4 py-2 rounded-lg max-w-full overflow-auto highlight-darkblue focus:outline"
                      ),
                      children: l,
                    })
                  : s
                  ? (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)("div", {
                          className: "text-gray-500 text-xs mb-1",
                          children: "Raw response:",
                        }),
                        (0, n.jsx)(ea, { rawContent: i }),
                      ],
                    })
                  : (0, n.jsx)("div", {
                      className: "prose prose-sm",
                      children: (0, n.jsx)(ec.D, {
                        children: l,
                        remarkPlugins: [eo.Z, en.Z],
                        components: {
                          li(e) {
                            let {
                                node: t,
                                inline: s,
                                className: a,
                                children: r,
                                ...i
                              } = e,
                              l = r[0],
                              o = null;
                            if (
                              l &&
                              "string" == typeof l &&
                              l
                                .trim()
                                .toLowerCase()
                                .match(
                                  /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}$/
                                )
                            ) {
                              let e = l
                                .trim()
                                .toUpperCase()
                                .split(".")
                                .slice(-1)[0];
                              ed.includes(e) &&
                                (o = (0, n.jsx)(es, { domain: l }));
                            }
                            return (0, n.jsxs)("li", {
                              className: (a || "") + (o ? " group" : ""),
                              ...i,
                              children: [r, o],
                            });
                          },
                          code(e) {
                            let {
                                node: t,
                                inline: s,
                                className: a,
                                children: r,
                                ...i
                              } = e,
                              l = /language-(\w+)/.exec(a || ""),
                              o = l ? l[1].toLowerCase() : "";
                            return s
                              ? (0, n.jsx)("code", {
                                  className:
                                    "text-sm inline border border-gray-200 rounded bg-gray-100 px-1",
                                  children: r,
                                })
                              : (0, n.jsx)(ei, {
                                  code: r[0],
                                  language: o,
                                  children: (0, n.jsx)(el.Z, {
                                    children: String(r).replace(/\n$/, ""),
                                    customStyle: {
                                      lineHeight: "1.25em",
                                      fontSize: "0.875em",
                                    },
                                    codeTagProps: {
                                      style: {
                                        lineHeight: "inherit",
                                        fontSize: "inherit",
                                      },
                                    },
                                    language: o,
                                    ...i,
                                  }),
                                });
                          },
                        },
                      }),
                    }),
            }),
          ],
        });
      }
      function eu() {
        let [e, t] = (0, r.useState)("...");
        return (
          (0, r.useEffect)(() => {
            let s = setInterval(() => {
              3 === e.length ? t("") : t(e + ".");
            }, 200);
            return () => clearInterval(s);
          }, [e]),
          (0, n.jsx)("span", { children: e })
        );
      }
      var eh = s(96486),
        eN = s.n(eh);
      let eA = "Something went wrong. Please try again.",
        ep = l("useAPIKey"),
        ef = l("useLicenseKey"),
        eE = () => {
          let e =
            "You are ChatGPT, a large language model trained by OpenAI. Answer as concisely as possible. Current date: {current_date}".replaceAll(
              "{current_date}",
              new Date().toDateString()
            );
          return { role: "system", content: e };
        };
      function ey(e) {
        let {
            chatID: t,
            chatTitle: s,
            onMessagesChanged: a,
            onNewChatPersisted: i,
            onNewChatRequested: l,
            onChatTitleUpdated: c,
          } = e,
          [d, x] = (0, r.useState)(!1),
          [m, u] = (0, r.useState)(""),
          [N, A] = (0, r.useState)(""),
          [p, f] = (0, r.useState)([]),
          [E, y] = ep(""),
          [I, T] = ef(""),
          S = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
          S.current.focus();
        }, []),
          (0, r.useEffect)(() => {
            if (t)
              try {
                let e = o().getItem("CHAT_" + t);
                if (e) {
                  let t = JSON.parse(e);
                  f(t.messages);
                }
              } catch (e) {
                console.error(e);
              }
            else f([]);
          }, [t]),
          (0, r.useEffect)(() => {
            t &&
              p.length > 0 &&
              o().setItem(
                "CHAT_" + t,
                JSON.stringify({ messages: p, chatTitle: s, chatID: t })
              );
          }, [p, t, s]),
          (0, r.useEffect)(() => {
            if ((a && a(p), p.length > 0 && !t)) {
              let e = (0, H.Z)();
              i({
                id: e,
                preview: p[p.length - 1].content,
                createdAt: new Date(),
              });
            }
            p.length > 0 &&
              (setTimeout(() => {
                let e = document.querySelectorAll(".response-block"),
                  t = e[e.length - 1];
                null == t || t.scrollIntoView({ behavior: "smooth" });
              }, 200),
              S.current.focus()),
              p.length > 1 && !s && "assistant" === p[p.length - 1].role && C();
          }, [p]);
        let C = async () => {
            let e = [
                ...p,
                {
                  role: "user",
                  content:
                    "What would be a short and relevant title for this chat? You must strictly answer with only the title, no other text is allowed.",
                },
              ].map((e) => eN().pick(e, ["role", "content"])),
              t = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer ".concat(E),
                },
                body: JSON.stringify({ model: "gpt-3.5-turbo", messages: e }),
              });
            if (!t.ok) return null;
            let s = await t.json(),
              n = s.choices[0].message.content;
            c(
              (n = n
                .trim()
                .replace(/^Title: /, "")
                .replace(/^"(.*)"$/, "$1")
                .replace(/[,.;:!?]$/, ""))
            );
          },
          O = async () => {
            if (!N) return;
            if (!E) {
              u("Please enter your OpenAI API key to get started.");
              return;
            }
            let e = [
              ...(p.length ? p : [eE()]),
              { role: "user", content: N },
            ].map((e) => eN().pick(e, ["role", "content"]));
            f(e), A(""), j(e);
          },
          j = async (e) => {
            try {
              x(!0), u("");
              let t = await fetch(
                "https://api.openai.com/v1/chat/completions",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(E),
                  },
                  body: JSON.stringify({ model: "gpt-3.5-turbo", messages: e }),
                }
              );
              if (t.status >= 400) {
                let e = await t.json();
                u(e.userMessage || eA), x(!1);
                return;
              }
              if (!t.ok) {
                u(eA), x(!1);
                return;
              }
              let s = await t.json();
              f([...e, { ...s.choices[0].message, usage: s.usage }]);
            } catch (e) {
              console.error(e), u(eA);
            }
            x(!1);
          },
          b = () => {
            let e = [...p];
            e.pop(), f(e), j(e);
          };
        return (0, n.jsxs)(
          "div",
          {
            children: [
              (0, n.jsxs)("div", {
                className: "max-w-2xl mx-auto",
                children: [
                  (0, n.jsxs)("div", {
                    className: "py-8",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "p-6 sm:p-10 flex items-center justify-center",
                        children: (0, n.jsxs)("div", {
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "flex items-center justify-center space-x-2",
                              children: [
                                (0, n.jsx)("img", {
                                  src: "/logo.png",
                                  alt: " Grogu AI",
                                  className: "rounded-lg w-12 h-12",
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "font-semibold text-4xl sm:text-5xl",
                                  children: [
                                    "Grogu",
                                    (0, n.jsx)("span", {
                                      className: "text-blue-500",
                                      children: "AI",
                                    }),
                                  ],
                                }),
                                (0, n.jsx)("span", {
                                  className:
                                    "bg-gradient-to-r from-purple-400 to-pink-500 px-3 py-1 text-xs font-semibold text-white text-center rounded-full inline-block ",
                                  children: "Beta",
                                }),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "text-center my-4 font-light text-base sm:text-xl my-4 sm:my-10",
                              children: "A better UI for ChatGPT",
                            }),
                            (0, n.jsx)("div", {
                              className: "flex items-center justify-center",
                              children: (0, n.jsxs)("div", {
                                className:
                                  "my-4 grid sm:grid-cols-2 gap-y-2 gap-x-6",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex items-center justify-start space-x-1",
                                    children: [
                                      (0, n.jsx)(h.mny, {
                                        className: "text-green-500 w-4 h-4",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "text-sm",
                                        children: "Faster response",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex items-center justify-start space-x-1",
                                    children: [
                                      (0, n.jsx)(h.mny, {
                                        className: "text-green-500 w-4 h-4",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "text-sm",
                                        children: "Chat History Search",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex items-center justify-start space-x-1",
                                    children: [
                                      (0, n.jsx)(h.mny, {
                                        className: "text-green-500 w-4 h-4",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "text-sm",
                                        children: "Prompt Library",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex items-center justify-start space-x-1",
                                    children: [
                                      (0, n.jsx)(h.mny, {
                                        className: "text-green-500 w-4 h-4",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "text-sm",
                                        children: "Run locally on browser",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex items-center justify-start space-x-1",
                                    children: [
                                      (0, n.jsx)(h.mny, {
                                        className: "text-green-500 w-4 h-4",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "text-sm",
                                        children: "No login required",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex items-center justify-start space-x-1",
                                    children: [
                                      (0, n.jsx)(h.mny, {
                                        className: "text-green-500 w-4 h-4",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "text-sm",
                                        children: "Use your own API key",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex items-center justify-start space-x-1",
                                    children: [
                                      (0, n.jsx)(h.mny, {
                                        className: "text-green-500 w-4 h-4",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "text-sm",
                                        children: "No monthly fee",
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "flex items-center justify-start space-x-1",
                                    children: [
                                      (0, n.jsx)(h.mny, {
                                        className: "text-green-500 w-4 h-4",
                                      }),
                                      (0, n.jsx)("div", {
                                        className: "text-sm",
                                        children: "...and more soon!",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            I
                              ? (0, n.jsx)("div", {
                                  className: "text-center",
                                  children: (0, n.jsx)(g, {
                                    text: "View Premium Features",
                                  }),
                                })
                              : null,
                            (0, n.jsx)(et, {
                              onCompleted: () => {
                                S.current.focus();
                              },
                            }),
                          ],
                        }),
                      }),
                      0 === p.length
                        ? (0, n.jsx)(z, {
                            usePrompt: (e) => {
                              A(e.prompt),
                                setTimeout(() => {
                                  S.current.focus();
                                  let t = e.prompt.indexOf("{{"),
                                    s = e.prompt.indexOf("}}");
                                  -1 !== t &&
                                    -1 !== s &&
                                    S.current.setSelectionRange(
                                      t,
                                      s + 2,
                                      "forward"
                                    );
                                }, 600);
                            },
                          })
                        : null,
                      p
                        .filter((e) => "system" !== e.role)
                        .map((e, t) =>
                          (0, n.jsx)(
                            "div",
                            {
                              className: "px-4 rounded-lg mb-4",
                              children: (0, n.jsx)(em, { message: e }),
                            },
                            t
                          )
                        ),
                      d
                        ? (0, n.jsx)("div", {
                            className: "p-4 rounded-lg mb-2",
                            children: (0, n.jsxs)("div", {
                              className:
                                "text-sm text-gray-500 flex items-center space-x-2",
                              children: [
                                (0, n.jsx)($, {}),
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("span", {
                                      children: "Assistant is thinking",
                                    }),
                                    (0, n.jsx)(eu, {}),
                                  ],
                                }),
                              ],
                            }),
                          })
                        : null,
                    ],
                  }),
                  m &&
                    (0, n.jsx)("div", {
                      className: "text-red-500 text-center text-sm",
                      children: m,
                    }),
                  d
                    ? null
                    : (0, n.jsxs)("div", {
                        className: "my-4 text-center w-full space-x-2",
                        children: [
                          p.length > 1 && "assistant" === p[p.length - 1].role
                            ? (0, n.jsxs)("button", {
                                onClick: b,
                                className:
                                  "inline-flex items-center justify-center rounded-full px-3 py-2 shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-xs",
                                children: [
                                  (0, n.jsx)(R.lgS, {
                                    className:
                                      "w-4 h-4 mr-1 group-hover:rotate-180 transition-all",
                                  }),
                                  (0, n.jsx)("span", {
                                    children: "Regenerate Response",
                                  }),
                                ],
                              })
                            : null,
                          p.length > 1 &&
                            (0, n.jsxs)("button", {
                              onClick: l,
                              className:
                                "inline-flex items-center justify-center rounded-full px-3 py-2 text-sm shadow-md bg-blue-600 text-white hover:bg-blue-500 transition-all active:bg-blue-600 group font-semibold text-xs",
                              children: [
                                (0, n.jsx)(h.Lfi, {
                                  className:
                                    "w-4 h-4 mr-1 group-hover:scale-125 transition-all",
                                }),
                                (0, n.jsx)("span", { children: "New Chat" }),
                              ],
                            }),
                        ],
                      }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "sticky bottom-0 left-0 right-0",
                children: (0, n.jsxs)("div", {
                  className: "max-w-2xl mx-auto w-full",
                  children: [
                    (0, n.jsx)("hr", {}),
                    (0, n.jsx)("div", {
                      className: "p-4 bg-white px-4",
                      children: (0, n.jsxs)("div", {
                        className: "pb-safe",
                        children: [
                          (0, n.jsxs)("div", {
                            className:
                              "flex items-start justify-center space-x-2 mb-2",
                            children: [
                              (0, n.jsx)(L.Z, {
                                ref: S,
                                onKeyDown: (e) => {
                                  "Enter" !== e.key ||
                                    e.shiftKey ||
                                    "ontouchstart" in window ||
                                    navigator.maxTouchPoints > 0 ||
                                    navigator.msMaxTouchPoints > 0 ||
                                    (e.preventDefault(), O());
                                },
                                id: "chat-input-textbox",
                                autoFocus: !0,
                                disabled: d,
                                value: N,
                                onChange: (e) => A(e.target.value),
                                placeholder: "Enter your message here...",
                                className:
                                  "block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:py-1.5 sm:text-sm sm:leading-6 min-h-[36px] max-h-[500px]",
                              }),
                              (0, n.jsx)("button", {
                                type: "button",
                                onClick: O,
                                disabled: d || !N,
                                className:
                                  "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-default transition-colors whitespace-nowrap",
                                children: "→ Send",
                              }),
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "text-gray-400 text-xs text-center",
                            children: "askgrogu.ai - A better UI for ChatGPT",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          },
          t
        );
      }
      let eI = l("useChatList");
      function eg() {
        let [e, t] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(""),
          [l, c] = (0, r.useState)([]),
          [d, x] = (0, r.useState)(null),
          [m, u] = eI([]);
        (0, r.useEffect)(() => {
          t(!0);
        }, []),
          (0, r.useEffect)(() => {
            s && u((e) => e.map((e) => (e.id === d ? { ...e, title: s } : e)));
          }, [s]);
        let h = (e) => {
            x(e.id), u((t) => [e, ...t]);
          },
          N = () => {
            x(null), i("");
          },
          p = (e, t) => {
            u((s) => s.map((s) => (s.id === e ? { ...s, title: t } : s)));
          },
          f = (e) => {
            u((t) => t.filter((t) => t.id !== e)),
              N(),
              setTimeout(() => {
                o().removeItem("CHAT_" + e);
              }, 100);
          },
          E = (e) => {
            i(e);
          };
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(a.Z, {}),
            (0, n.jsx)(X, {
              chatID: d,
              chats: m,
              onDeleteChat: f,
              onEditChatTitle: p,
              onNewChatRequested: N,
              onChatSelected: (e) => {
                x(e.id), i(e.title);
              },
              children: (t) => {
                let { sidebarOpen: a, setSidebarOpen: r } = t;
                return (0, n.jsxs)("main", {
                  className: "relative",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "sticky top-0 z-10 bg-white backdrop-blur",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "flex lg:hidden absolute left-1 top-0 bottom-0 items-center justify-center",
                          children: (0, n.jsxs)("button", {
                            type: "button",
                            className:
                              "inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
                            onClick: () => r(!0),
                            children: [
                              (0, n.jsx)("span", {
                                className: "sr-only",
                                children: "Open sidebar",
                              }),
                              (0, n.jsx)(O, {
                                className: "h-6 w-6",
                                "aria-hidden": "true",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "absolute right-2 top-0 bottom-0 flex items-center justify-center",
                          children: (0, n.jsx)(g, {}),
                        }),
                        e ? (0, n.jsx)(C, { chatTitle: s, messages: l }) : null,
                      ],
                    }),
                    e
                      ? (0, n.jsx)(ey, {
                          chatID: d,
                          chatTitle: s,
                          onMessagesChanged: c,
                          onNewChatPersisted: h,
                          onNewChatRequested: N,
                          onChatTitleUpdated: E,
                        })
                      : null,
                    (0, n.jsx)(A, {}),
                  ],
                });
              },
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [260, 556, 445, 617, 662, 420, 774, 888, 179], function () {
      return e((e.s = 75557));
    }),
      (_N_E = e.O());
  },
]);
