const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BMAbPQrc.js","../chunks/DKem_M_z.js","../chunks/CtzdOGqy.js","../chunks/CSLX3oVl.js","../assets/0.DZPHHV0g.css","../nodes/1.CH0KVfbi.js","../chunks/D-eE26PG.js","../chunks/CnJ3zTFZ.js","../chunks/DuQNM-4Y.js","../chunks/Db9BnPuS.js","../chunks/8LYuFgGJ.js","../nodes/2.Cyne4r66.js","../chunks/BbOs9S9B.js","../chunks/BeSmDGmu.js","../chunks/BAxVicZj.js","../chunks/D3m62-Op.js","../nodes/3.BkZw8TTd.js","../chunks/meGalDfu.js","../chunks/wkiGL1e7.js","../chunks/CM3zvUen.js","../nodes/4.2AP3Jrf6.js","../chunks/D_PN5m4B.js","../chunks/Danwg8Nz.js","../chunks/DEhlvQni.js","../nodes/5.reXZmvmP.js","../chunks/OF6lVI-O.js","../nodes/6.BuRopxiq.js","../chunks/kFuqKYj7.js","../nodes/7.B-uFOVIG.js","../chunks/BFHGFZ2e.js","../nodes/8.B_Zn6wjj.js","../chunks/1K7Oy3f6.js"])))=>i.map(i=>d[i]);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var _events, _instance;
import { _ as __vitePreload } from "../chunks/BbOs9S9B.js";
import { o as hydrating, p as hydrate_next, n as block, E as EFFECT_TRANSPARENT, B as create_text, w as branch, Q as current_batch, N as should_defer_append, z as hydrate_node, W as pause_effect, ah as set, aA as LEGACY_PROPS, F as get, f as flushSync, aU as define_property, S as mutable_source, aE as push, a5 as user_pre_effect, u as user_effect, ac as state, t as tick, aa as from_html, ab as first_child, ag as sibling, af as append, aF as pop, ap as comment, ad as child, aj as reset, aG as user_derived, a$ as text, ae as template_effect } from "../chunks/CtzdOGqy.js";
import { h as hydrate, m as mount, u as unmount, s as set_text } from "../chunks/CnJ3zTFZ.js";
import "../chunks/DKem_M_z.js";
import { o as onMount } from "../chunks/8LYuFgGJ.js";
import { i as if_block } from "../chunks/BeSmDGmu.js";
import { b as bind_this } from "../chunks/CM3zvUen.js";
import { p as prop } from "../chunks/DEhlvQni.js";
function component(node, get_component, render_fn) {
  if (hydrating) {
    hydrate_next();
  }
  var anchor = node;
  var component2;
  var effect;
  var offscreen_fragment = null;
  var pending_effect = null;
  function commit() {
    if (effect) {
      pause_effect(effect);
      effect = null;
    }
    if (offscreen_fragment) {
      offscreen_fragment.lastChild.remove();
      anchor.before(offscreen_fragment);
      offscreen_fragment = null;
    }
    effect = pending_effect;
    pending_effect = null;
  }
  block(() => {
    if (component2 === (component2 = get_component())) return;
    var defer = should_defer_append();
    if (component2) {
      var target = anchor;
      if (defer) {
        offscreen_fragment = document.createDocumentFragment();
        offscreen_fragment.append(target = create_text());
        if (effect) {
          current_batch.skipped_effects.add(effect);
        }
      }
      pending_effect = branch(() => render_fn(target, component2));
    }
    if (defer) {
      current_batch.add_callback(commit);
    } else {
      commit();
    }
  }, EFFECT_TRANSPARENT);
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function asClassComponent(component2) {
  return class extends Svelte4Component {
    /** @param {any} options */
    constructor(options) {
      super({
        component: component2,
        ...options
      });
    }
  };
}
class Svelte4Component {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(options) {
    /** @type {any} */
    __privateAdd(this, _events);
    /** @type {Record<string, any>} */
    __privateAdd(this, _instance);
    var _a;
    var sources = /* @__PURE__ */ new Map();
    var add_source = (key, value) => {
      var s = mutable_source(value, false, false);
      sources.set(key, s);
      return s;
    };
    const props = new Proxy(
      { ...options.props || {}, $$events: {} },
      {
        get(target, prop2) {
          return get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
        },
        has(target, prop2) {
          if (prop2 === LEGACY_PROPS) return true;
          get(sources.get(prop2) ?? add_source(prop2, Reflect.get(target, prop2)));
          return Reflect.has(target, prop2);
        },
        set(target, prop2, value) {
          set(sources.get(prop2) ?? add_source(prop2, value), value);
          return Reflect.set(target, prop2, value);
        }
      }
    );
    __privateSet(this, _instance, (options.hydrate ? hydrate : mount)(options.component, {
      target: options.target,
      anchor: options.anchor,
      props,
      context: options.context,
      intro: options.intro ?? false,
      recover: options.recover
    }));
    if (!((_a = options == null ? void 0 : options.props) == null ? void 0 : _a.$$host) || options.sync === false) {
      flushSync();
    }
    __privateSet(this, _events, props.$$events);
    for (const key of Object.keys(__privateGet(this, _instance))) {
      if (key === "$set" || key === "$destroy" || key === "$on") continue;
      define_property(this, key, {
        get() {
          return __privateGet(this, _instance)[key];
        },
        /** @param {any} value */
        set(value) {
          __privateGet(this, _instance)[key] = value;
        },
        enumerable: true
      });
    }
    __privateGet(this, _instance).$set = /** @param {Record<string, any>} next */
    (next) => {
      Object.assign(props, next);
    };
    __privateGet(this, _instance).$destroy = () => {
      unmount(__privateGet(this, _instance));
    };
  }
  /** @param {Record<string, any>} props */
  $set(props) {
    __privateGet(this, _instance).$set(props);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(event, callback) {
    __privateGet(this, _events)[event] = __privateGet(this, _events)[event] || [];
    const cb = (...args) => callback.call(this, ...args);
    __privateGet(this, _events)[event].push(cb);
    return () => {
      __privateGet(this, _events)[event] = __privateGet(this, _events)[event].filter(
        /** @param {any} fn */
        (fn) => fn !== cb
      );
    };
  }
  $destroy() {
    __privateGet(this, _instance).$destroy();
  }
}
_events = new WeakMap();
_instance = new WeakMap();
const matchers = {};
var root_4 = from_html(`<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>`);
var root$1 = from_html(`<!> <!>`, 1);
function Root($$anchor, $$props) {
  push($$props, true);
  let components = prop($$props, "components", 23, () => []), data_0 = prop($$props, "data_0", 3, null), data_1 = prop($$props, "data_1", 3, null);
  {
    user_pre_effect(() => $$props.stores.page.set($$props.page));
  }
  user_effect(() => {
    $$props.stores;
    $$props.page;
    $$props.constructors;
    components();
    $$props.form;
    data_0();
    data_1();
    $$props.stores.page.notify();
  });
  let mounted = state(false);
  let navigated = state(false);
  let title = state(null);
  onMount(() => {
    const unsubscribe = $$props.stores.page.subscribe(() => {
      if (get(mounted)) {
        set(navigated, true);
        tick().then(() => {
          set(title, document.title || "untitled page", true);
        });
      }
    });
    set(mounted, true);
    return unsubscribe;
  });
  const Pyramid_1 = user_derived(() => $$props.constructors[1]);
  var fragment = root$1();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      const Pyramid_0 = user_derived(() => $$props.constructors[0]);
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      component(node_1, () => get(Pyramid_0), ($$anchor3, Pyramid_0_1) => {
        bind_this(
          Pyramid_0_1($$anchor3, {
            get data() {
              return data_0();
            },
            get form() {
              return $$props.form;
            },
            get params() {
              return $$props.page.params;
            },
            children: ($$anchor4, $$slotProps) => {
              var fragment_2 = comment();
              var node_2 = first_child(fragment_2);
              component(node_2, () => get(Pyramid_1), ($$anchor5, Pyramid_1_1) => {
                bind_this(
                  Pyramid_1_1($$anchor5, {
                    get data() {
                      return data_1();
                    },
                    get form() {
                      return $$props.form;
                    },
                    get params() {
                      return $$props.page.params;
                    }
                  }),
                  ($$value) => components()[1] = $$value,
                  () => {
                    var _a;
                    return (_a = components()) == null ? void 0 : _a[1];
                  }
                );
              });
              append($$anchor4, fragment_2);
            },
            $$slots: { default: true }
          }),
          ($$value) => components()[0] = $$value,
          () => {
            var _a;
            return (_a = components()) == null ? void 0 : _a[0];
          }
        );
      });
      append($$anchor2, fragment_1);
    };
    var alternate = ($$anchor2) => {
      const Pyramid_0 = user_derived(() => $$props.constructors[0]);
      var fragment_3 = comment();
      var node_3 = first_child(fragment_3);
      component(node_3, () => get(Pyramid_0), ($$anchor3, Pyramid_0_2) => {
        bind_this(
          Pyramid_0_2($$anchor3, {
            get data() {
              return data_0();
            },
            get form() {
              return $$props.form;
            },
            get params() {
              return $$props.page.params;
            }
          }),
          ($$value) => components()[0] = $$value,
          () => {
            var _a;
            return (_a = components()) == null ? void 0 : _a[0];
          }
        );
      });
      append($$anchor2, fragment_3);
    };
    if_block(node, ($$render) => {
      if ($$props.constructors[1]) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  var node_4 = sibling(node, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root_4();
      var node_5 = child(div);
      {
        var consequent_1 = ($$anchor3) => {
          var text$1 = text();
          template_effect(() => set_text(text$1, get(title)));
          append($$anchor3, text$1);
        };
        if_block(node_5, ($$render) => {
          if (get(navigated)) $$render(consequent_1);
        });
      }
      reset(div);
      append($$anchor2, div);
    };
    if_block(node_4, ($$render) => {
      if (get(mounted)) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
}
const root = asClassComponent(Root);
const nodes = [
  () => __vitePreload(() => import("../nodes/0.BMAbPQrc.js"), true ? __vite__mapDeps([0,1,2,3,4]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/1.CH0KVfbi.js"), true ? __vite__mapDeps([5,1,6,2,7,8,9,10,3]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/2.Cyne4r66.js"), true ? __vite__mapDeps([11,12,1,2,7,13,14,15]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/3.BkZw8TTd.js"), true ? __vite__mapDeps([16,17,1,6,2,18,7,13,15,19]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/4.2AP3Jrf6.js"), true ? __vite__mapDeps([20,21,1,6,2,18,7,13,15,19,22,14,23,8]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/5.reXZmvmP.js"), true ? __vite__mapDeps([24,25,1,6,2,18,7,13,15,19]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/6.BuRopxiq.js"), true ? __vite__mapDeps([26,27,1,6,2,18,7,13,15,19]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/7.B-uFOVIG.js"), true ? __vite__mapDeps([28,29,1,6,2,18,7,13,15,19,22,14,23,8]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/8.B_Zn6wjj.js"), true ? __vite__mapDeps([30,31,1,6,2,18,7,13,15,19]) : void 0, import.meta.url)
];
const server_loads = [];
const dictionary = {
  "/": [2],
  "/projects/arsenal-logo": [3],
  "/projects/bands-of-mourning": [4],
  "/projects/deanna-troi": [5],
  "/projects/prado-mona-lisa": [6],
  "/projects/renegades-of-gor": [7],
  "/projects/the-president-and-mrs-roosevelt": [8]
};
const hooks = {
  handleError: (({ error }) => {
    console.error(error);
  }),
  reroute: (() => {
  }),
  transport: {}
};
const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
const hash = false;
const decode = (type, value) => decoders[type](value);
export {
  decode,
  decoders,
  dictionary,
  hash,
  hooks,
  matchers,
  nodes,
  root,
  server_loads
};
//# sourceMappingURL=app._ZW6D3z8.js.map
