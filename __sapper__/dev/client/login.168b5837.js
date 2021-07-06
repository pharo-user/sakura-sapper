import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, y as set_input_value, z as listen_dev, n as noop, A as run_all } from './client.f460fef8.js';

/* src/routes/login.svelte generated by Svelte v3.38.3 */

const file = "src/routes/login.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let input0;
	let t3;
	let input1;
	let t4;
	let button;
	let t5;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("CONNECT TO SAKURA.ECO");
			t2 = space();
			input0 = element("input");
			t3 = space();
			input1 = element("input");
			t4 = space();
			button = element("button");
			t5 = text("Sign In");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "CONNECT TO SAKURA.ECO");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			input0 = claim_element(nodes, "INPUT", { placeholder: true });
			t3 = claim_space(nodes);
			input1 = claim_element(nodes, "INPUT", { placeholder: true });
			t4 = claim_space(nodes);
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t5 = claim_text(button_nodes, "Sign In");
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 15, 0, 172);
			attr_dev(input0, "placeholder", "enter your name");
			add_location(input0, file, 16, 0, 203);
			attr_dev(input1, "placeholder", "enter your password");
			add_location(input1, file, 17, 0, 263);
			add_location(button, file, 19, 0, 328);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, input0, anchor);
			set_input_value(input0, /*username*/ ctx[0]);
			insert_dev(target, t3, anchor);
			insert_dev(target, input1, anchor);
			set_input_value(input1, /*password*/ ctx[1]);
			insert_dev(target, t4, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t5);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[2]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[3]),
					listen_dev(button, "click", handleClick, { once: true }, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*username*/ 1 && input0.value !== /*username*/ ctx[0]) {
				set_input_value(input0, /*username*/ ctx[0]);
			}

			if (dirty & /*password*/ 2 && input1.value !== /*password*/ ctx[1]) {
				set_input_value(input1, /*password*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(input0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(input1);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(button);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function handleClick() {
	alert("no more alerts");
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Login", slots, []);
	let username = "";
	let password = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Login> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		username = this.value;
		$$invalidate(0, username);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$capture_state = () => ({ username, password, handleClick });

	$$self.$inject_state = $$props => {
		if ("username" in $$props) $$invalidate(0, username = $$props.username);
		if ("password" in $$props) $$invalidate(1, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [username, password, input0_input_handler, input1_input_handler];
}

class Login extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Login",
			options,
			id: create_fragment.name
		});
	}
}

export default Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uMTY4YjU4MzcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbG9naW4uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGxldCB1c2VybmFtZSA9ICcnO1xuICBsZXQgcGFzc3dvcmQgPSAnJztcblxuXHRmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcblx0XHRhbGVydCgnbm8gbW9yZSBhbGVydHMnKVxuXHR9XG48L3NjcmlwdD5cblxuXG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkFib3V0PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT5DT05ORUNUIFRPIFNBS1VSQS5FQ088L2gxPlxuPGlucHV0IGJpbmQ6dmFsdWU9e3VzZXJuYW1lfSBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgbmFtZVwiPlxuPGlucHV0IGJpbmQ6dmFsdWU9e3Bhc3N3b3JkfSBwbGFjZWhvbGRlcj1cImVudGVyIHlvdXIgcGFzc3dvcmRcIj5cblxuPGJ1dHRvbiBvbjpjbGlja3xvbmNlPXtoYW5kbGVDbGlja30+XG5cdFNpZ24gSW5cbjwvYnV0dG9uPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQWdCbUIsR0FBUTs7O3dDQUNSLEdBQVE7Ozs7Ozs7OztpQ0FFSixXQUFXOzs7Ozs7OytEQUhmLEdBQVE7eUNBQVIsR0FBUTs7OytEQUNSLEdBQVE7eUNBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBYmpCLFdBQVc7Q0FDbkIsS0FBSyxDQUFDLGdCQUFnQjs7Ozs7O0tBSmxCLFFBQVEsR0FBRyxFQUFFO0tBQ2IsUUFBUSxHQUFHLEVBQUU7Ozs7Ozs7O0VBY0EsUUFBUTs7Ozs7RUFDUixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
