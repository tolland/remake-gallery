import "./DKem_M_z.js";
import "./DjWsevqn.js";
import { aa as from_html, ag as sibling, ab as first_child, af as append } from "./CrzjONjd.js";
import { I as ImageComparison } from "./C1MkZPrg.js";
const metadata = {
  "title": "Presidential wedding invitation",
  "date": "2025-09-30",
  "callout": "Wedding invitations follow a classic style. Typography and layout are key.",
  "tags": ["inkscape", "paper", "texture", "caligraphy"],
  "original": "images/the-president-and-mrs-roosevelt/original.jpg",
  "reproduction": "images/the-president-and-mrs-roosevelt/the-president-and-mrs-roosevelt.png"
};
const { title, date, callout, tags, original, reproduction } = metadata;
var root = from_html(`<p>Regular markdown content here…</p> <!>`, 1);
function _page_md($$anchor) {
  var fragment = root();
  var node = sibling(first_child(fragment), 2);
  ImageComparison(node, {
    get original() {
      return metadata.original;
    },
    get reproduction() {
      return metadata.reproduction;
    },
    get alt() {
      return metadata.title;
    }
  });
  append($$anchor, fragment);
}
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _page_md,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  _page_md as _,
  _page as a
};
//# sourceMappingURL=BzIa4rCN.js.map
