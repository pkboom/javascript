import Vue from "vue";

let handleOutsideClick;

export const Closable = {
  bind(element, binding, vnode) {
    handleOutsideClick = (event) => {
      event.stopPropagation();

      let { exclude, handler } = binding.value;
      let clickedOnHaha = false;

      exclude.forEach((refName) => {
        if (!clickedOnHaha) {
          clickedOnHaha = vnode.context.$refs[refName].contains(event.target);
        }
      });

      if (!element.contains(event.target) && !clickedOnHaha) {
        vnode.context[handler]();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
  },

  unbind() {
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
  },
};

// You can also make it available globally.
Vue.directive("closable", Closable);

// or
import "./Closable";
