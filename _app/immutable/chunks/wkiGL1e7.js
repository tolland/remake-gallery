import "./DKem_M_z.js";
import { aa as from_html, ab as first_child, ac as state, ad as child, ae as template_effect, af as append, ag as sibling, ah as set, F as get, ai as $window, aj as reset, ak as next } from "./CtzdOGqy.js";
import { d as delegate, e as event, s as set_text } from "./CnJ3zTFZ.js";
import { i as if_block } from "./BeSmDGmu.js";
import { s as set_attribute, a as set_style } from "./D3m62-Op.js";
import { b as bind_this } from "./CM3zvUen.js";
function handleMouseDown(_, isDragging) {
  set(isDragging, true);
}
function handleTouchMove(e, handleMove) {
  if (e.touches.length > 0) {
    handleMove(e.touches[0].clientX);
  }
}
function handleClick(e, handleMove) {
  handleMove(e.clientX);
}
function handleKeyDown(e, sliderPosition) {
  if (e.key === "ArrowLeft") {
    set(sliderPosition, Math.max(0, get(sliderPosition) - 5), true);
  } else if (e.key === "ArrowRight") {
    set(sliderPosition, Math.min(100, get(sliderPosition) + 5), true);
  }
}
function toggleMode(__1, mode) {
  set(mode, get(mode) === "side-by-side" ? "comparison" : "side-by-side", true);
}
var root_1 = from_html(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-screen"><div class="relative"><img class="w-full h-auto max-h-screen object-contain"/> <div class="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">Original</div></div> <div class="relative"><img class="w-full h-auto max-h-screen object-contain"/> <div class="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">Reproduction</div></div></div>`);
var root_2 = from_html(`<button class="relative w-full max-h-screen overflow-hidden cursor-col-resize select-none block" role="slider" aria-valuemin="0" aria-valuemax="100" type="button"><img class="w-full h-auto max-h-screen object-contain"/> <div class="absolute inset-0 overflow-hidden"><img class="w-full h-auto max-h-screen object-contain"/></div> <div class="absolute top-0 bottom-0 w-1 bg-white shadow-lg"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
             w-10 h-10 bg-white rounded-full shadow-lg
             flex items-center justify-center border-2 border-gray-300"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg></div></div> <div class="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded text-sm">Original</div> <div class="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded text-sm">Reproduction</div></button>`);
var root = from_html(`<div class="mb-4 flex justify-center"><button class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium transition-colors" aria-label="Toggle between side-by-side and comparison view"> </button></div> <!>`, 1);
function ImageComparison($$anchor, $$props) {
  let mode = state("side-by-side");
  let sliderPosition = state(50);
  let isDragging = state(false);
  let container = state(void 0);
  function handleMove(clientX) {
    if (!get(container)) return;
    const rect = get(container).getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = x / rect.width * 100;
    set(sliderPosition, Math.max(0, Math.min(100, percentage)), true);
  }
  function handleMouseUp() {
    set(isDragging, false);
  }
  function handleMouseMove(e) {
    if (!get(isDragging)) return;
    handleMove(e.clientX);
  }
  var fragment = root();
  event("mousemove", $window, handleMouseMove);
  event("mouseup", $window, handleMouseUp);
  event("touchend", $window, handleMouseUp);
  var div = first_child(fragment);
  var button = child(div);
  button.__click = [toggleMode, mode];
  var text = child(button, true);
  reset(button);
  reset(div);
  var node = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root_1();
      var div_2 = child(div_1);
      var img = child(div_2);
      next(2);
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var img_1 = child(div_3);
      next(2);
      reset(div_3);
      reset(div_1);
      template_effect(() => {
        set_attribute(img, "src", $$props.original);
        set_attribute(img, "alt", `${$$props.alt ?? ""} - original`);
        set_attribute(img_1, "src", $$props.reproduction);
        set_attribute(img_1, "alt", `${$$props.alt ?? ""} - reproduction`);
      });
      append($$anchor2, div_1);
    };
    var alternate = ($$anchor2) => {
      var button_1 = root_2();
      button_1.__mousedown = [handleMouseDown, isDragging];
      button_1.__touchstart = [handleMouseDown, isDragging];
      button_1.__touchmove = [handleTouchMove, handleMove];
      button_1.__click = [handleClick, handleMove];
      button_1.__keydown = [handleKeyDown, sliderPosition];
      var img_2 = child(button_1);
      var div_4 = sibling(img_2, 2);
      var img_3 = child(div_4);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      next(4);
      reset(button_1);
      bind_this(button_1, ($$value) => set(container, $$value), () => get(container));
      template_effect(() => {
        set_attribute(button_1, "aria-label", `${$$props.alt ?? ""} - interactive comparison slider`);
        set_attribute(button_1, "aria-valuenow", get(sliderPosition));
        set_attribute(img_2, "src", $$props.reproduction);
        set_attribute(img_2, "alt", `${$$props.alt ?? ""} - reproduction`);
        set_style(div_4, `clip-path: inset(0 ${100 - get(sliderPosition)}% 0 0);`);
        set_attribute(img_3, "src", $$props.original);
        set_attribute(img_3, "alt", $$props.alt);
        set_style(div_5, `left: ${get(sliderPosition) ?? ""}%;`);
      });
      append($$anchor2, button_1);
    };
    if_block(node, ($$render) => {
      if (get(mode) === "side-by-side") $$render(consequent);
      else $$render(alternate, false);
    });
  }
  template_effect(() => set_text(text, get(mode) === "side-by-side" ? "Switch to Comparison" : "Switch to Side-by-Side"));
  append($$anchor, fragment);
}
delegate(["click", "mousedown", "touchstart", "touchmove", "keydown"]);
export {
  ImageComparison as I
};
//# sourceMappingURL=wkiGL1e7.js.map
