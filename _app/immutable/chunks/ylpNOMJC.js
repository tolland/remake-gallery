import "./DKem_M_z.js";
import "./DjWsevqn.js";
import { aa as from_html, ag as sibling, ab as first_child, af as append } from "./CrzjONjd.js";
import { I as ImageComparison } from "./C1MkZPrg.js";
const metadata = {
  "title": "Deanna Troi poster art",
  "date": "2022-03-27",
  "callout": "Back in the early 2000, a variety of digital art derived from the character Deanna Troi, portrayed by Marina Sirtis, appeared on sites like etsy and other digital art sites.",
  "tags": ["gimp", "oil-painting", "renaissance"],
  "thumbnail": "images/deanna-troi/thumb_original.jpg",
  "thumbnail2": "images/deanna-troi/thumb_reproduction.jpg",
  "original": "images/deanna-troi/original.jpg",
  "reproduction": "images/deanna-troi/reproduction.jpg"
};
const {
  title,
  date,
  callout,
  tags,
  thumbnail,
  thumbnail2,
  original,
  reproduction
} = metadata;
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
//# sourceMappingURL=ylpNOMJC.js.map
