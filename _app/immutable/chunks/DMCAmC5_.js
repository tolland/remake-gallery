import "./DKem_M_z.js";
import "./DjWsevqn.js";
import { aa as from_html, ag as sibling, ab as first_child, af as append } from "./CrzjONjd.js";
import { I as ImageComparison } from "./DC2eDNzl.js";
const metadata = {
  "title": "Predator movie posters",
  "date": "2020-10-28",
  "callout": "Following Da Vinci's brushstrokes through X-ray analysis",
  "tags": ["gimp", "oil-painting", "renaissance"],
  "original": "images/predator-poster-01/predator_feature-poster_584x800_6ec38255.jpeg",
  "reproduction": "images/predator-poster-01/poster_with_font.png"
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
//# sourceMappingURL=DMCAmC5_.js.map
