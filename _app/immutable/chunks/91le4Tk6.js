import { n as block, o as hydrating, p as hydrate_next, q as create_fragment_from_html, r as assign_nodes, v as teardown, E as EFFECT_TRANSPARENT, w as branch, x as noop, y as destroy_effect, z as hydrate_node, A as get_first_child } from "./CrzjONjd.js";
function snippet(node, get_snippet, ...args) {
  var anchor = node;
  var snippet2 = noop;
  var snippet_effect;
  block(() => {
    if (snippet2 === (snippet2 = get_snippet())) return;
    if (snippet_effect) {
      destroy_effect(snippet_effect);
      snippet_effect = null;
    }
    snippet_effect = branch(() => (
      /** @type {SnippetFn} */
      snippet2(anchor, ...args)
    ));
  }, EFFECT_TRANSPARENT);
  if (hydrating) {
    anchor = hydrate_node;
  }
}
function createRawSnippet(fn) {
  return (anchor, ...params) => {
    var _a;
    var snippet2 = fn(...params);
    var element;
    if (hydrating) {
      element = /** @type {Element} */
      hydrate_node;
      hydrate_next();
    } else {
      var html = snippet2.render().trim();
      var fragment = create_fragment_from_html(html);
      element = /** @type {Element} */
      get_first_child(fragment);
      anchor.before(element);
    }
    const result = (_a = snippet2.setup) == null ? void 0 : _a.call(snippet2, element);
    assign_nodes(element, element);
    if (typeof result === "function") {
      teardown(result);
    }
  };
}
export {
  createRawSnippet as c,
  snippet as s
};
//# sourceMappingURL=91le4Tk6.js.map
