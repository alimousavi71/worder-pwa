export default ({ app, context }, inject) => {
	inject("helper", {
		numberFormat(number) {
			return number;
			// return String(number).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,");
		},
		gotoWithBack(to) {
			localStorage.setItem("back-url", to);
			return app.router.push("/login");
		},
	});
};
