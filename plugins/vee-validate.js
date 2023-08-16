import { extend, localize } from "vee-validate";
import { required, email ,min,max} from "vee-validate/dist/rules";
import fa from "vee-validate/dist/locale/fa";

extend("required", {
	...required,
});

extend("email", {
	...email,
});

extend("min", {
	...min,
});

extend("max", {
	...max,
});

localize("en", fa);
