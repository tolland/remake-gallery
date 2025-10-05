import "../chunks/DKem_M_z.js";
import "../chunks/DjWsevqn.js";
import { aE as push, aa as from_html, ab as first_child, ae as template_effect, af as append, aF as pop, ad as child, aj as reset, ag as sibling } from "../chunks/CrzjONjd.js";
import { s as set_text } from "../chunks/BGne8WoB.js";
import { i as init } from "../chunks/BHpvPBTq.js";
import { s as stores, p as page$2 } from "../chunks/DzTkw2I9.js";
const page$1 = {
  get error() {
    return page$2.error;
  },
  get status() {
    return page$2.status;
  }
};
({
  check: stores.updated.check
});
const page = page$1;
var root = from_html(`<h1> </h1> <p> </p>`, 1);
function Error$1($$anchor, $$props) {
  push($$props, false);
  init();
  var fragment = root();
  var h1 = first_child(fragment);
  var text = child(h1, true);
  reset(h1);
  var p = sibling(h1, 2);
  var text_1 = child(p, true);
  reset(p);
  template_effect(() => {
    var _a;
    set_text(text, page.status);
    set_text(text_1, (_a = page.error) == null ? void 0 : _a.message);
  });
  append($$anchor, fragment);
  pop();
}
export {
  Error$1 as component
};
//# sourceMappingURL=1.gNJ4YbF1.js.map
