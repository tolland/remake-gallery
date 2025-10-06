import "./DKem_M_z.js";
import "./DjWsevqn.js";
import { aa as from_html, ag as sibling, ab as first_child, af as append } from "./CrzjONjd.js";
import { I as ImageComparison } from "./BvYxiWhA.js";
const metadata = {
  "title": "Mona Lisa Study",
  "date": "2025-10-04",
  "callout": "Following Da Vinci's brushstrokes through X-ray analysis",
  "tags": ["gimp", "oil-painting", "renaissance"],
  "original": "images/mona-lisa/Mona_Lisa.jpg",
  "reproduction": "images/mona-lisa/500px-Gioconda_copia_del_Museo_del_Prado_restaurada.png"
};
const { title, date, callout, tags, original, reproduction } = metadata;
var root = from_html(
  `<p>The idea for <em>Remake Gallery</em> was inspired by the story of the <strong>Prado Mona Lisa</strong> — a painting long dismissed as a copy, until modern imaging revealed that its underdrawing matched Leonardo’s <em>Mona Lisa</em> stroke for stroke.
It turned out not to be a forgery at all, but a <strong>contemporaneous study</strong>, likely painted by one of Leonardo’s students alongside the master himself.</p> <!>`,
  1
);
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
//# sourceMappingURL=DvuIBw5S.js.map
