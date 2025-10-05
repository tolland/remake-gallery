const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/meGalDfu.js","../chunks/DKem_M_z.js","../chunks/D-eE26PG.js","../chunks/CtzdOGqy.js","../chunks/wkiGL1e7.js","../chunks/CnJ3zTFZ.js","../chunks/BeSmDGmu.js","../chunks/D3m62-Op.js","../chunks/CM3zvUen.js","../chunks/D_PN5m4B.js","../chunks/Danwg8Nz.js","../chunks/BAxVicZj.js","../chunks/DEhlvQni.js","../chunks/DuQNM-4Y.js","../chunks/OF6lVI-O.js","../chunks/kFuqKYj7.js","../chunks/BFHGFZ2e.js","../chunks/1K7Oy3f6.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "../chunks/BbOs9S9B.js";
import "../chunks/DKem_M_z.js";
import { aa as from_html, ad as child, ag as sibling, aj as reset, ae as template_effect, af as append, aE as push, ah as set, ac as state, aF as pop, F as get, aG as user_derived } from "../chunks/CtzdOGqy.js";
import { d as delegate, s as set_text } from "../chunks/CnJ3zTFZ.js";
import { i as if_block } from "../chunks/BeSmDGmu.js";
import { e as each, i as index } from "../chunks/BAxVicZj.js";
import { s as set_attribute, b as set_class } from "../chunks/D3m62-Op.js";
async function load() {
  const projectFiles = /* @__PURE__ */ Object.assign({ "./projects/arsenal-logo/+page.md": () => __vitePreload(() => import("../chunks/meGalDfu.js").then((n) => n.a), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8]) : void 0, import.meta.url), "./projects/bands-of-mourning/+page.md": () => __vitePreload(() => import("../chunks/D_PN5m4B.js").then((n) => n.a), true ? __vite__mapDeps([9,1,2,3,4,5,6,7,8,10,11,12,13]) : void 0, import.meta.url), "./projects/deanna-troi/+page.md": () => __vitePreload(() => import("../chunks/OF6lVI-O.js").then((n) => n.a), true ? __vite__mapDeps([14,1,2,3,4,5,6,7,8]) : void 0, import.meta.url), "./projects/prado-mona-lisa/+page.md": () => __vitePreload(() => import("../chunks/kFuqKYj7.js").then((n) => n.a), true ? __vite__mapDeps([15,1,2,3,4,5,6,7,8]) : void 0, import.meta.url), "./projects/renegades-of-gor/+page.md": () => __vitePreload(() => import("../chunks/BFHGFZ2e.js").then((n) => n.a), true ? __vite__mapDeps([16,1,2,3,4,5,6,7,8,10,11,12,13]) : void 0, import.meta.url), "./projects/the-president-and-mrs-roosevelt/+page.md": () => __vitePreload(() => import("../chunks/1K7Oy3f6.js").then((n) => n.a), true ? __vite__mapDeps([17,1,2,3,4,5,6,7,8]) : void 0, import.meta.url) });
  const projects = await Promise.all(
    Object.entries(projectFiles).map(async ([path, resolver]) => {
      const module = await resolver();
      const slug = path.split("/")[2];
      return {
        slug,
        metadata: module.metadata
        // mdsvex exposes frontmatter as metadata
      };
    })
  );
  return {
    projects: projects.sort(
      (a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    )
  };
}
const _page$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  load
}, Symbol.toStringTag, { value: "Module" }));
var root$1 = from_html(`<div class="grid grid-cols-2 gap-1"><img class="w-full h-full object-cover"/> <img class="w-full h-full object-cover"/></div>`);
function ImageThumbnail($$anchor, $$props) {
  var div = root$1();
  var img = child(div);
  var img_1 = sibling(img, 2);
  reset(div);
  template_effect(() => {
    set_attribute(img, "src", $$props.original);
    set_attribute(img, "alt", $$props.alt);
    set_attribute(img_1, "src", $$props.reproduction);
    set_attribute(img_1, "alt", `${$$props.alt ?? ""} - reproduction`);
  });
  append($$anchor, div);
}
var on_click = (_, selectedTag) => set(selectedTag, null);
var on_click_1 = (__1, selectedTag, tag) => set(selectedTag, get(tag), true);
var root_1 = from_html(`<button> </button>`);
var root_3 = from_html(`<p class="text-sm text-gray-600 mb-2"> </p>`);
var root_5 = from_html(`<span class="text-xs bg-gray-100 px-2 py-1 rounded"> </span>`);
var root_4 = from_html(`<div class="flex gap-1 mt-2 flex-wrap"></div>`);
var root_2 = from_html(`<a class="border rounded-lg overflow-hidden hover:shadow-lg transition group"><div class="aspect-[4/3] overflow-hidden"><!></div> <div class="p-4"><h2 class="text-xl font-semibold mb-2 group-hover:text-blue-600 transition"> </h2> <!> <p class="text-xs text-gray-500"> </p> <!></div></a>`);
var root = from_html(`<div class="max-w-6xl mx-auto p-8"><h1 class="text-4xl font-bold mb-4">Remake Gallery</h1> <p class="text-gray-600 mb-8">Learning through reproduction</p> <div class="flex gap-2 mb-8 flex-wrap"><button>All</button> <!></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div></div>`);
function _page($$anchor, $$props) {
  push($$props, true);
  let selectedTag = state(null);
  const allTags = [
    ...new Set($$props.data.projects.flatMap((p) => p.metadata.tags || []))
  ];
  const filteredProjects = user_derived(() => get(selectedTag) ? $$props.data.projects.filter((p) => {
    var _a;
    return (_a = p.metadata.tags) == null ? void 0 : _a.includes(get(selectedTag));
  }) : $$props.data.projects);
  var div = root();
  var div_1 = sibling(child(div), 4);
  var button = child(div_1);
  button.__click = [on_click, selectedTag];
  var node = sibling(button, 2);
  each(node, 17, () => allTags, index, ($$anchor2, tag) => {
    var button_1 = root_1();
    button_1.__click = [on_click_1, selectedTag, tag];
    var text = child(button_1, true);
    reset(button_1);
    template_effect(() => {
      set_class(button_1, 1, `px-3 py-1 rounded ${get(selectedTag) === get(tag) ? "bg-blue-500 text-white" : "bg-gray-200"}`);
      set_text(text, get(tag));
    });
    append($$anchor2, button_1);
  });
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  each(div_2, 21, () => get(filteredProjects), index, ($$anchor2, project) => {
    var a = root_2();
    var div_3 = child(a);
    var node_1 = child(div_3);
    ImageThumbnail(node_1, {
      get original() {
        return get(project).metadata.original;
      },
      get reproduction() {
        return get(project).metadata.reproduction;
      },
      get alt() {
        return get(project).metadata.title;
      }
    });
    reset(div_3);
    var div_4 = sibling(div_3, 2);
    var h2 = child(div_4);
    var text_1 = child(h2, true);
    reset(h2);
    var node_2 = sibling(h2, 2);
    {
      var consequent = ($$anchor3) => {
        var p_1 = root_3();
        var text_2 = child(p_1, true);
        reset(p_1);
        template_effect(() => set_text(text_2, get(project).metadata.callout));
        append($$anchor3, p_1);
      };
      if_block(node_2, ($$render) => {
        if (get(project).metadata.callout) $$render(consequent);
      });
    }
    var p_2 = sibling(node_2, 2);
    var text_3 = child(p_2, true);
    reset(p_2);
    var node_3 = sibling(p_2, 2);
    {
      var consequent_1 = ($$anchor3) => {
        var div_5 = root_4();
        each(div_5, 21, () => get(project).metadata.tags, index, ($$anchor4, tag) => {
          var span = root_5();
          var text_4 = child(span, true);
          reset(span);
          template_effect(() => set_text(text_4, get(tag)));
          append($$anchor4, span);
        });
        reset(div_5);
        append($$anchor3, div_5);
      };
      if_block(node_3, ($$render) => {
        if (get(project).metadata.tags) $$render(consequent_1);
      });
    }
    reset(div_4);
    reset(a);
    template_effect(() => {
      set_attribute(a, "href", `/projects/${get(project).slug ?? ""}`);
      set_text(text_1, get(project).metadata.title);
      set_text(text_3, get(project).metadata.date);
    });
    append($$anchor2, a);
  });
  reset(div_2);
  reset(div);
  template_effect(() => set_class(button, 1, `px-3 py-1 rounded ${get(selectedTag) === null ? "bg-blue-500 text-white" : "bg-gray-200"}`));
  append($$anchor, div);
  pop();
}
delegate(["click"]);
export {
  _page as component,
  _page$1 as universal
};
//# sourceMappingURL=2.Cyne4r66.js.map
