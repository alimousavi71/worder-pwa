import Vue from "vue";
export default function ({ $axios }, inject) {
	$axios.onRequest((config) => {});

	$axios.onError((error) => {
		const code = parseInt(error.response && error.response.status);
		const response = error.response.data;
		if (code === 402) {
			Vue.prototype.$toast.error(response.message);
		}
		if (code === 422) {
			let errors = "";
			Object.keys(response.errors).forEach((key) => {
				const field = response.errors[key];
				if (field.length === 1) {
					errors += field.join() + "\n";
				} else {
					errors += field.join("\n");
				}
			});
			Vue.prototype.$toast.error(errors);
		} else {
			Vue.prototype.$toast.error(response.message);
		}
	});
}
