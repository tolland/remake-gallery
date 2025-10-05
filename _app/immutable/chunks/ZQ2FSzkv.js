import "./DKem_M_z.js";
import "./BzDhsVzw.js";
import { aa as from_html, ag as sibling, ab as first_child, af as append } from "./CazMajqu.js";
import { I as ImageComparison } from "./DLA7V98_.js";
import { I as ImageGallery } from "./PHAVNcza.js";
const metadata = {
  "title": "Bands of Mourning",
  "date": "2022-01-02",
  "callout": "The Bands of Mourning is a book in the mistborn series of books by Brandon Sanderson.",
  "tags": ["books", "fantasy", "fiction", "science-fiction"],
  "original": "/images/bands-of-mourning/91cOXqgvWhL._SL1500_.jpg",
  "reproduction": "/images/bands-of-mourning/brandon_sandersone_bands_of_mourning_cover.png"
};
const { title, date, callout, tags, original, reproduction } = metadata;
var root = from_html(`<p>Regular markdown content here…</p> <h2>Process Gallery</h2> <!> <!>`, 1);
function _page_md($$anchor) {
  const attempts = [
    {
      url: "/images/bands-of-mourning/s-l1600.jpg",
      title: "First Attempt",
      caption: "Colors too dark, proportions off",
      attribution: {
        source: "Image was retrieved from eBay listing",
        url: "https://www.ebay.com/itm/194258573888",
        copyright: "© 2025"
      }
    },
    {
      url: "/images/bands-of-mourning/19293852.jpg",
      title: "Second Attempt",
      caption: "Better lighting, still needs work"
    },
    {
      url: "/images/bands-of-mourning/32245702588.jpg",
      title: "Another Attempt",
      caption: "Better lighting, still needs work"
    },
    {
      url: "/images/bands-of-mourning/816kA5xUaVL._SL1500_.jpg",
      title: "Final Version",
      caption: "After multiple iterations"
    },
    {
      url: "/images/bands-of-mourning/original.jpg",
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
//# sourceMappingURL=ZQ2FSzkv.js.map
