import { l as lifecycle_outside_component, u as user_effect, g as get_abort_signal_outside_reaction, a as active_reaction, c as component_context, i as is_array, b as lifecycle_legacy_only, d as legacy_mode_flag, e as untrack, f as flushSync, h as getAllContexts, j as getContext, k as hasContext, s as setContext, m as settled, t as tick } from "./CazMajqu.js";
import { h as hydrate, m as mount, u as unmount } from "./B7CTb7tI.js";
import { c as createRawSnippet } from "./DIBR_YaQ.js";
function getAbortSignal() {
  var _a;
  if (active_reaction === null) {
    get_abort_signal_outside_reaction();
  }
  return ((_a = active_reaction).ac ?? (_a.ac = new AbortController())).signal;
}
function onMount(fn) {
  if (component_context === null) {
    lifecycle_outside_component();
  }
  if (legacy_mode_flag && component_context.l !== null) {
    init_update_callbacks(component_context).m.push(fn);
  } else {
    user_effect(() => {
      const cleanup = untrack(fn);
      if (typeof cleanup === "function") return (
        /** @type {() => void} */
        cleanup
      );
    });
  }
}
function onDestroy(fn) {
  if (component_context === null) {
    lifecycle_outside_component();
  }
  onMount(() => () => untrack(fn));
}
function create_custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  return new CustomEvent(type, { detail, bubbles, cancelable });
}
function createEventDispatcher() {
  const active_component_context = component_context;
  if (active_component_context === null) {
    lifecycle_outside_component();
  }
  return (type, detail, options) => {
    var _a;
    const events = (
      /** @type {Record<string, Function | Function[]>} */
      (_a = active_component_context.s.$$events) == null ? void 0 : _a[
        /** @type {string} */
        type
      ]
    );
    if (events) {
      const callbacks = is_array(events) ? events.slice() : [events];
      const event = create_custom_event(
        /** @type {string} */
        type,
        detail,
        options
      );
      for (const fn of callbacks) {
        fn.call(active_component_context.x, event);
      }
      return !event.defaultPrevented;
    }
    return true;
  };
}
function beforeUpdate(fn) {
  if (component_context === null) {
    lifecycle_outside_component();
  }
  if (component_context.l === null) {
    lifecycle_legacy_only();
  }
  init_update_callbacks(component_context).b.push(fn);
}
function afterUpdate(fn) {
  if (component_context === null) {
    lifecycle_outside_component();
  }
  if (component_context.l === null) {
    lifecycle_legacy_only();
  }
  init_update_callbacks(component_context).a.push(fn);
}
function init_update_callbacks(context) {
  var l = (
    /** @type {ComponentContextLegacy} */
    context.l
  );
  return l.u ?? (l.u = { a: [], b: [], m: [] });
}
const svelte = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterUpdate,
  beforeUpdate,
  createEventDispatcher,
  createRawSnippet,
  flushSync,
  getAbortSignal,
  getAllContexts,
  getContext,
  hasContext,
  hydrate,
  mount,
  onDestroy,
  onMount,
  setContext,
  settled,
  tick,
  unmount,
  untrack
}, Symbol.toStringTag, { value: "Module" }));
export {
  onMount as o,
  svelte as s
};
//# sourceMappingURL=CPAga2PT.js.map
