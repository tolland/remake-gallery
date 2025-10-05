import "./DKem_M_z.js";
import "./DjWsevqn.js";
import { aa as from_html, ag as sibling, ab as first_child, af as append } from "./CrzjONjd.js";
import { I as ImageComparison } from "./Bholdvjk.js";
import "./Hdlgk5nJ.js";
const metadata = {
  "title": "Bands of Mourning",
  "date": "2022-01-02",
  "callout": "The Bands of Mourning is a book in the mistborn series of books by Brandon Sanderson.",
  "tags": ["books", "fantasy", "fiction", "science-fiction"],
  "original": "images/bands-of-mourning/91cOXqgvWhL._SL1500_.jpg",
  "reproduction": "images/bands-of-mourning/brandon_sandersone_bands_of_mourning_cover.png"
};
const { title, date, callout, tags, original, reproduction } = metadata;
var root = from_html(`<p>Regular markdown content here…</p> <h2>Process Gallery</h2> <!>`, 1);
function _page_md($$anchor) {
  var fragment = root();
  var node = sibling(first_child(fragment), 4);
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
//# sourceMappingURL=B3eLspT7.js.map
