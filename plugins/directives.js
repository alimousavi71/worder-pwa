import Vue from "vue";
Vue.directive("capitalizeFirst", {
	bind(el, binding) {
		const string = el.innerHTML;
		el.innerHTML = string.charAt(0).toUpperCase() + string.slice(1);
	},
});

Vue.directive("strLimit", {
	bind(el, binding) {
		const str = el.innerHTML;
		const maxLength = binding.value;
		if (str.length > maxLength) {
			el.innerHTML = str.substr(0, maxLength) + " ...";
		}
	},
});

Vue.directive("numberFormat", {
	bind(el, binding) {
		el.innerHTML = String(el.innerHTML).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
});

Vue.directive("click-outside", {
	bind(el, binding, vNode) {
		el.clickOutsideEvent = function (event) {
			// here I check that click was outside the el and his children
			if (!(el === event.target || el.contains(event.target))) {
				// and if it did, call method provided in attribute value
				vNode.context[binding.expression](event);
			}
		};
		document.body.addEventListener("click", el.clickOutsideEvent);
	},
	unbind(el) {
		document.body.removeEventListener("click", el.clickOutsideEvent);
	},
});
