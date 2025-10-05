import "./DKem_M_z.js";
import "./D-eE26PG.js";
import { aa as from_html, ag as sibling, ab as first_child, af as append } from "./CtzdOGqy.js";
import { I as ImageComparison } from "./wkiGL1e7.js";
import { I as ImageGallery } from "./Danwg8Nz.js";
const metadata = {
  "title": "Renegades of Gor",
  "date": "2025-10-03",
  "callout": "One of the old sex and sorcery books that has had many releases since 1966, this is the most recent update to the cover art for an audible release.",
  "tags": ["books", "audiobook", "science-fiction"],
  "original": "/images/renegades-of-gor/original.jpg",
  "reproduction": "/images/renegades-of-gor/square_audible_modern.png"
};
const { title, date, callout, tags, original, reproduction } = metadata;
var root = from_html(`<p>Regular markdown content here…</p> <h2>Process Gallery</h2> <!> <!>`, 1);
function _page_md($$anchor) {
  const attempts = [
    {
      url: "/images/renegades-of-gor/s-l1600.jpg",
      title: "First Attempt",
      caption: "Colors too dark, proportions off",
      attribution: {
        source: "Image was retrieved from eBay listing",
        url: "https://www.ebay.com/itm/194258573888",
        copyright: "© 2025"
      }
    },
    {
      url: "/images/renegades-of-gor/19293852.jpg",
      title: "Second Attempt",
      caption: "Better lighting, still needs work"
    },
    {
      url: "/images/renegades-of-gor/32245702588.jpg",
      title: "Another Attempt",
      caption: "Better lighting, still needs work"
    },
    {
      url: "/images/renegades-of-gor/816kA5xUaVL._SL1500_.jpg",
      title: "Final Version",
      caption: "After multiple iterations"
    },
    {
      url: "/images/renegades-of-gor/original.jpg",
      title: "Final Version",
      caption: "After multiple iterations"
    }
  ];
  var fragment = root();
  var node = sibling(first_child(fragment), 4);
  ImageGallery(node, {
    get images() {
      return attempts;
    },
    title: "Failed Attempts & Iterations"
  });
  var node_1 = sibling(node, 2);
  ImageComparison(node_1, {
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
//# sourceMappingURL=BFHGFZ2e.js.map
