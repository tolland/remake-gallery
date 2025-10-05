import "./DKem_M_z.js";
import "./BzDhsVzw.js";
import { aa as from_html, ag as sibling, ab as first_child, af as append } from "./CazMajqu.js";
import { I as ImageComparison } from "./DLA7V98_.js";
const metadata = {
  "title": "Arsenal Football club logo",
  "date": "2020-10-22",
  "callout": "The arsenal football club logo is a nice simple design, and best suited to being recreated in a vector format. Therefore I decided to use the gimp to recreate it instead.",
  "tags": ["gimp", "logo"],
  "original": "/images/arsenal-logo/Arsenal_FC.svg.png",
  "reproduction": "/images/arsenal-logo/arsenal_logo_output.png"
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
//# sourceMappingURL=DRTmiaQj.js.map
