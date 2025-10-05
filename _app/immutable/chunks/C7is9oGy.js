import "./DKem_M_z.js";
import { o as hydrating, p as hydrate_next, z as hydrate_node, b8 as ELEMENT_NODE, n as block, E as EFFECT_TRANSPARENT, w as branch, b9 as NAMESPACE_SVG, r as assign_nodes, A as get_first_child, B as create_text, K as set_hydrating, D as set_hydrate_node, a3 as active_effect, W as pause_effect, V as resume_effect, y as destroy_effect, aE as push, ba as from_svg, ad as child, aD as comment, ab as first_child, af as append, ag as sibling, aj as reset, aF as pop, e as untrack, a8 as deep_read_state, F as get, aG as user_derived, bb as to_array, aa as from_html, ai as $window, ac as state, ah as set, ae as template_effect } from "./CrzjONjd.js";
import { b as is_raw_text_element, d as delegate, e as event, s as set_text } from "./BGne8WoB.js";
import { i as if_block } from "./DNtZK5W6.js";
import { e as each, i as index } from "./BUDHcdi1.js";
import { c as attribute_effect, s as set_attribute } from "./CBpGv3Iz.js";
import { b as base } from "./RFFOZU_P.js";
import "./DjWsevqn.js";
import { l as legacy_rest_props, p as prop, s as spread_props } from "./BEqHnlCD.js";
import { i as init } from "./BHpvPBTq.js";
function slot(anchor, $$props, name, slot_props, fallback_fn) {
  var _a;
  if (hydrating) {
    hydrate_next();
  }
  var slot_fn = (_a = $$props.$$slots) == null ? void 0 : _a[name];
  var is_interop = false;
  if (slot_fn === true) {
    slot_fn = $$props["children"];
    is_interop = true;
  }
  if (slot_fn === void 0) ;
  else {
    slot_fn(anchor, is_interop ? () => slot_props : slot_props);
  }
}
function element(node, get_tag, is_svg, render_fn, get_namespace, location) {
  let was_hydrating = hydrating;
  if (hydrating) {
    hydrate_next();
  }
  var tag;
  var current_tag;
  var element2 = null;
  if (hydrating && hydrate_node.nodeType === ELEMENT_NODE) {
    element2 = /** @type {Element} */
    hydrate_node;
    hydrate_next();
  }
  var anchor = (
    /** @type {TemplateNode} */
    hydrating ? hydrate_node : node
  );
  var effect;
  block(() => {
    const next_tag = get_tag() || null;
    var ns = NAMESPACE_SVG;
    if (next_tag === tag) return;
    if (effect) {
      if (next_tag === null) {
        pause_effect(effect, () => {
          effect = null;
          current_tag = null;
        });
      } else if (next_tag === current_tag) {
        resume_effect(effect);
      } else {
        destroy_effect(effect);
      }
    }
    if (next_tag && next_tag !== current_tag) {
      effect = branch(() => {
        element2 = hydrating ? (
          /** @type {Element} */
          element2
        ) : document.createElementNS(ns, next_tag);
        assign_nodes(element2, element2);
        if (render_fn) {
          if (hydrating && is_raw_text_element(next_tag)) {
            element2.append(document.createComment(""));
          }
          var child_anchor = (
            /** @type {TemplateNode} */
            hydrating ? get_first_child(element2) : element2.appendChild(create_text())
          );
          if (hydrating) {
            if (child_anchor === null) {
              set_hydrating(false);
            } else {
              set_hydrate_node(child_anchor);
            }
          }
          render_fn(element2, child_anchor);
        }
        active_effect.nodes_end = element2;
        anchor.before(element2);
      });
    }
    tag = next_tag;
    if (tag) current_tag = tag;
  }, EFFECT_TRANSPARENT);
  if (was_hydrating) {
    set_hydrating(true);
    set_hydrate_node(anchor);
  }
}
/**
 * @license lucide-svelte v0.544.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var root$1 = from_svg(`<svg><!><!></svg>`);
function Icon($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  const $$restProps = legacy_rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  push($$props, false);
  let name = prop($$props, "name", 8, void 0);
  let color = prop($$props, "color", 8, "currentColor");
  let size = prop($$props, "size", 8, 24);
  let strokeWidth = prop($$props, "strokeWidth", 8, 2);
  let absoluteStrokeWidth = prop($$props, "absoluteStrokeWidth", 8, false);
  let iconNode = prop($$props, "iconNode", 24, () => []);
  const mergeClasses = (...classes) => classes.filter((className, index2, array) => {
    return Boolean(className) && array.indexOf(className) === index2;
  }).join(" ");
  init();
  var svg = root$1();
  attribute_effect(
    svg,
    ($0, $1) => ({
      ...defaultAttributes,
      ...$$restProps,
      width: size(),
      height: size(),
      stroke: color(),
      "stroke-width": $0,
      class: $1
    }),
    [
      () => (deep_read_state(absoluteStrokeWidth()), deep_read_state(strokeWidth()), deep_read_state(size()), untrack(() => absoluteStrokeWidth() ? Number(strokeWidth()) * 24 / Number(size()) : strokeWidth())),
      () => (deep_read_state(name()), deep_read_state($$sanitized_props), untrack(() => mergeClasses("lucide-icon", "lucide", name() ? `lucide-${name()}` : "", $$sanitized_props.class)))
    ]
  );
  var node = child(svg);
  each(node, 1, iconNode, index, ($$anchor2, $$item) => {
    var $$array = user_derived(() => to_array(get($$item), 2));
    let tag = () => get($$array)[0];
    let attrs = () => get($$array)[1];
    var fragment = comment();
    var node_1 = first_child(fragment);
    element(node_1, tag, true, ($$element, $$anchor3) => {
      attribute_effect($$element, () => ({ ...attrs() }));
    });
    append($$anchor2, fragment);
  });
  var node_2 = sibling(node);
  slot(node_2, $$props, "default", {});
  reset(svg);
  append($$anchor, svg);
  pop();
}
function Chevron_left($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  Icon($$anchor, spread_props({ name: "chevron-left" }, () => $$sanitized_props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}
function Chevron_right($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$anchor, spread_props({ name: "chevron-right" }, () => $$sanitized_props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}
function Info($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  Icon($$anchor, spread_props({ name: "info" }, () => $$sanitized_props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}
function X($$anchor, $$props) {
  const $$sanitized_props = legacy_rest_props($$props, ["children", "$$slots", "$$events", "$$legacy"]);
  /**
   * @license lucide-svelte v0.544.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$anchor, spread_props({ name: "x" }, () => $$sanitized_props, {
    get iconNode() {
      return iconNode;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      slot(node, $$props, "default", {});
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  }));
}
var root_1 = from_html(`<h3 class="text-xl font-semibold mb-4 text-gray-800"> </h3>`);
var root_2 = from_html(`<button class="aspect-square bg-gray-100 rounded overflow-hidden cursor-pointer hover:opacity-80 transition-opacity" type="button"><img class="w-full h-full object-cover"/></button>`);
var root_4 = from_html(`<h4 class="text-lg font-semibold"> </h4>`);
var root_5 = from_html(`<p class="text-sm text-gray-300 mt-1"> </p>`);
var on_click = (_, showAttribution) => set(showAttribution, !get(showAttribution));
var root_8 = from_html(`<p><span class="text-gray-400">Source:</span> </p>`);
var root_9 = from_html(`<p><span class="text-gray-400">Copyright:</span> </p>`);
var root_10 = from_html(`<p><span class="text-gray-400">License:</span> </p>`);
var root_11 = from_html(`<p class="text-gray-400 italic mt-2"> </p>`);
var root_7 = from_html(`<div class="mt-3 text-sm space-y-1"><!> <!> <!> <!></div>`);
var root_6 = from_html(`<div class="mt-3 pt-3 border-t border-gray-700"><button class="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors" type="button"><!> </button> <!></div>`);
var root_3 = from_html(`<div class="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"><button class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors" aria-label="Close" type="button"><!></button> <button class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors" aria-label="Previous" type="button"><!></button> <button class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors" aria-label="Next" type="button"><!></button> <div class="max-w-5xl w-full flex flex-col max-h-full"><div class="flex-1 flex items-center justify-center mb-4"><img class="max-w-full max-h-[70vh] object-contain"/></div> <div class="bg-gray-900 bg-opacity-80 rounded p-4 text-white"><div class="flex justify-between items-start mb-2"><div><!> <!></div> <span class="text-sm text-gray-400"> </span></div> <!></div></div></div>`);
var root = from_html(`<div class="bg-white rounded-lg shadow-md p-6"><!> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"></div></div> <!>`, 1);
function ImageGallery($$anchor, $$props) {
  push($$props, true);
  let lightboxOpen = state(false);
  let currentIndex = state(0);
  let showAttribution = state(false);
  const currentImage = user_derived(() => $$props.images[get(currentIndex)]);
  function openLightbox(index2) {
    set(currentIndex, index2, true);
    set(lightboxOpen, true);
    set(showAttribution, false);
  }
  function closeLightbox() {
    set(lightboxOpen, false);
    set(showAttribution, false);
  }
  function goToPrevious() {
    set(currentIndex, get(currentIndex) === 0 ? $$props.images.length - 1 : get(currentIndex) - 1, true);
    set(showAttribution, false);
  }
  function goToNext() {
    set(currentIndex, get(currentIndex) === $$props.images.length - 1 ? 0 : get(currentIndex) + 1, true);
    set(showAttribution, false);
  }
  function handleKeyDown(e) {
    if (!get(lightboxOpen)) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  }
  var fragment = root();
  event("keydown", $window, handleKeyDown);
  var div = first_child(fragment);
  var node = child(div);
  {
    var consequent = ($$anchor2) => {
      var h3 = root_1();
      var text = child(h3, true);
      reset(h3);
      template_effect(() => set_text(text, $$props.title));
      append($$anchor2, h3);
    };
    if_block(node, ($$render) => {
      if ($$props.title) $$render(consequent);
    });
  }
  var div_1 = sibling(node, 2);
  each(div_1, 21, () => $$props.images, index, ($$anchor2, image, index2) => {
    var button = root_2();
    button.__click = () => openLightbox(index2);
    var img = child(button);
    reset(button);
    template_effect(() => {
      set_attribute(img, "src", `${base ?? ""}/${get(image).url ?? ""}`);
      set_attribute(img, "alt", get(image).title || `Image ${index2 + 1}`);
    });
    append($$anchor2, button);
  });
  reset(div_1);
  reset(div);
  var node_1 = sibling(div, 2);
  {
    var consequent_9 = ($$anchor2) => {
      var div_2 = root_3();
      var button_1 = child(div_2);
      button_1.__click = closeLightbox;
      var node_2 = child(button_1);
      X(node_2, { size: 32 });
      reset(button_1);
      var button_2 = sibling(button_1, 2);
      button_2.__click = goToPrevious;
      var node_3 = child(button_2);
      Chevron_left(node_3, { size: 48 });
      reset(button_2);
      var button_3 = sibling(button_2, 2);
      button_3.__click = goToNext;
      var node_4 = child(button_3);
      Chevron_right(node_4, { size: 48 });
      reset(button_3);
      var div_3 = sibling(button_3, 2);
      var div_4 = child(div_3);
      var img_1 = child(div_4);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var div_6 = child(div_5);
      var div_7 = child(div_6);
      var node_5 = child(div_7);
      {
        var consequent_1 = ($$anchor3) => {
          var h4 = root_4();
          var text_1 = child(h4, true);
          reset(h4);
          template_effect(() => set_text(text_1, get(currentImage).title));
          append($$anchor3, h4);
        };
        if_block(node_5, ($$render) => {
          if (get(currentImage).title) $$render(consequent_1);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var p = root_5();
          var text_2 = child(p, true);
          reset(p);
          template_effect(() => set_text(text_2, get(currentImage).caption));
          append($$anchor3, p);
        };
        if_block(node_6, ($$render) => {
          if (get(currentImage).caption) $$render(consequent_2);
        });
      }
      reset(div_7);
      var span = sibling(div_7, 2);
      var text_3 = child(span);
      reset(span);
      reset(div_6);
      var node_7 = sibling(div_6, 2);
      {
        var consequent_8 = ($$anchor3) => {
          var div_8 = root_6();
          var button_4 = child(div_8);
          button_4.__click = [on_click, showAttribution];
          var node_8 = child(button_4);
          Info(node_8, { size: 16 });
          var text_4 = sibling(node_8);
          reset(button_4);
          var node_9 = sibling(button_4, 2);
          {
            var consequent_7 = ($$anchor4) => {
              var div_9 = root_7();
              var node_10 = child(div_9);
              {
                var consequent_3 = ($$anchor5) => {
                  var p_1 = root_8();
                  var text_5 = sibling(child(p_1));
                  reset(p_1);
                  template_effect(() => set_text(text_5, ` ${get(currentImage).attribution.source ?? ""}`));
                  append($$anchor5, p_1);
                };
                if_block(node_10, ($$render) => {
                  var _a;
                  if ((_a = get(currentImage).attribution) == null ? void 0 : _a.source) $$render(consequent_3);
                });
              }
              var node_11 = sibling(node_10, 2);
              {
                var consequent_4 = ($$anchor5) => {
                  var p_2 = root_9();
                  var text_6 = sibling(child(p_2));
                  reset(p_2);
                  template_effect(() => set_text(text_6, ` ${get(currentImage).attribution.copyright ?? ""}`));
                  append($$anchor5, p_2);
                };
                if_block(node_11, ($$render) => {
                  var _a;
                  if ((_a = get(currentImage).attribution) == null ? void 0 : _a.copyright) $$render(consequent_4);
                });
              }
              var node_12 = sibling(node_11, 2);
              {
                var consequent_5 = ($$anchor5) => {
                  var p_3 = root_10();
                  var text_7 = sibling(child(p_3));
                  reset(p_3);
                  template_effect(() => set_text(text_7, ` ${get(currentImage).attribution.license ?? ""}`));
                  append($$anchor5, p_3);
                };
                if_block(node_12, ($$render) => {
                  var _a;
                  if ((_a = get(currentImage).attribution) == null ? void 0 : _a.license) $$render(consequent_5);
                });
              }
              var node_13 = sibling(node_12, 2);
              {
                var consequent_6 = ($$anchor5) => {
                  var p_4 = root_11();
                  var text_8 = child(p_4, true);
                  reset(p_4);
                  template_effect(() => set_text(text_8, get(currentImage).fairUse));
                  append($$anchor5, p_4);
                };
                if_block(node_13, ($$render) => {
                  if (get(currentImage).fairUse) $$render(consequent_6);
                });
              }
              reset(div_9);
              append($$anchor4, div_9);
            };
            if_block(node_9, ($$render) => {
              if (get(showAttribution)) $$render(consequent_7);
            });
          }
          reset(div_8);
          template_effect(() => set_text(text_4, ` ${get(showAttribution) ? "Hide" : "Show"} attribution & usage info`));
          append($$anchor3, div_8);
        };
        if_block(node_7, ($$render) => {
          if (get(currentImage).attribution || get(currentImage).fairUse) $$render(consequent_8);
        });
      }
      reset(div_5);
      reset(div_3);
      reset(div_2);
      template_effect(() => {
        set_attribute(img_1, "src", get(currentImage).url);
        set_attribute(img_1, "alt", get(currentImage).title || `Image ${get(currentIndex) + 1}`);
        set_text(text_3, `${get(currentIndex) + 1} / ${$$props.images.length ?? ""}`);
      });
      append($$anchor2, div_2);
    };
    if_block(node_1, ($$render) => {
      if (get(lightboxOpen)) $$render(consequent_9);
    });
  }
  append($$anchor, fragment);
  pop();
}
delegate(["click"]);
export {
  ImageGallery as I
};
//# sourceMappingURL=C7is9oGy.js.map
