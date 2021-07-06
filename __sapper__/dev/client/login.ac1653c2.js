import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, y as onMount, z as globals, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, A as set_input_value, B as listen_dev, n as noop, C as run_all } from './client.05e5cfa9.js';

async function doLogin(email, password) {

  let url = "https://sakura.eco/api/user/login";
  let data = { 'email' : email, 'password' : password };

  return await fetch( url , {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((r) => r.json())
      .then((d) => {
          return d;
        })
}

/* src/routes/login.svelte generated by Svelte v3.38.3 */

const { console: console_1 } = globals;
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
			add_location(h1, file, 20, 0, 297);
			attr_dev(input0, "placeholder", "enter your email");
			add_location(input0, file, 21, 0, 328);
			attr_dev(input1, "placeholder", "enter your password");
			add_location(input1, file, 22, 0, 386);
			add_location(button, file, 24, 0, 451);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, input0, anchor);
			set_input_value(input0, /*email*/ ctx[0]);
			insert_dev(target, t3, anchor);
			insert_dev(target, input1, anchor);
			set_input_value(input1, /*password*/ ctx[1]);
			insert_dev(target, t4, anchor);
			insert_dev(target, button, anchor);
			append_dev(button, t5);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[3]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[4]),
					listen_dev(button, "click", /*login*/ ctx[2], { once: true }, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*email*/ 1 && input0.value !== /*email*/ ctx[0]) {
				set_input_value(input0, /*email*/ ctx[0]);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Login", slots, []);
	let email = "";
	let password = "";

	function login() {
		console.log("login");
		let r = doLogin(email, password);
		console.log(r);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Login> was created with unknown prop '${key}'`);
	});

	function input0_input_handler() {
		email = this.value;
		$$invalidate(0, email);
	}

	function input1_input_handler() {
		password = this.value;
		$$invalidate(1, password);
	}

	$$self.$capture_state = () => ({ doLogin, onMount, email, password, login });

	$$self.$inject_state = $$props => {
		if ("email" in $$props) $$invalidate(0, email = $$props.email);
		if ("password" in $$props) $$invalidate(1, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [email, password, login, input0_input_handler, input1_input_handler];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uYWMxNjUzYzIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2xvZ2luLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9sb2dpbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvTG9naW4oZW1haWwsIHBhc3N3b3JkKSB7XG5cbiAgbGV0IHVybCA9IFwiaHR0cHM6Ly9zYWt1cmEuZWNvL2FwaS91c2VyL2xvZ2luXCI7XG4gIGxldCBkYXRhID0geyAnZW1haWwnIDogZW1haWwsICdwYXNzd29yZCcgOiBwYXNzd29yZCB9O1xuXG4gIHJldHVybiBhd2FpdCBmZXRjaCggdXJsICwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pXG4gICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbn1cbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRvTG9naW4gfSBmcm9tICcuL19sb2dpbic7XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gIFxuICBsZXQgZW1haWwgPSAnJztcbiAgbGV0IHBhc3N3b3JkID0gJyc7XG5cblx0ZnVuY3Rpb24gbG9naW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2xvZ2luJyk7XG4gICAgbGV0IHIgPSBkb0xvZ2luKGVtYWlsLCBwYXNzd29yZClcbiAgICBjb25zb2xlLmxvZyhyKTtcblx0fVxuPC9zY3JpcHQ+XG5cblxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5BYm91dDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+Q09OTkVDVCBUTyBTQUtVUkEuRUNPPC9oMT5cbjxpbnB1dCBiaW5kOnZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJlbnRlciB5b3VyIGVtYWlsXCI+XG48aW5wdXQgYmluZDp2YWx1ZT17cGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciBwYXNzd29yZFwiPlxuXG48YnV0dG9uIG9uOmNsaWNrfG9uY2U9e2xvZ2lufT5cblx0U2lnbiBJblxuPC9idXR0b24+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBTyxlQUFlLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQy9DO0FBQ0EsRUFBRSxJQUFJLEdBQUcsR0FBRyxtQ0FBbUMsQ0FBQztBQUNoRCxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsT0FBTyxHQUFHLEtBQUssRUFBRSxVQUFVLEdBQUcsUUFBUSxFQUFFLENBQUM7QUFDeEQ7QUFDQSxFQUFFLE9BQU8sTUFBTSxLQUFLLEVBQUUsR0FBRyxHQUFHO0FBQzVCLE1BQU0sSUFBSSxFQUFFLE1BQU07QUFDbEIsTUFBTSxNQUFNLEVBQUUsTUFBTTtBQUNwQixNQUFNLE9BQU8sRUFBRTtBQUNmLFFBQVEsY0FBYyxFQUFFLGtCQUFrQjtBQUMxQyxPQUFPO0FBQ1AsTUFBTSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDaEMsS0FBSyxDQUFDO0FBQ04sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ25CLFVBQVUsT0FBTyxDQUFDLENBQUM7QUFDbkIsU0FBUyxDQUFDO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0NJbUIsR0FBSzs7O3dDQUNMLEdBQVE7Ozs7Ozs7OzsyQ0FFSixHQUFLOzs7Ozs7O3lEQUhULEdBQUs7c0NBQUwsR0FBSzs7OytEQUNMLEdBQVE7eUNBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbEJyQixLQUFLLEdBQUcsRUFBRTtLQUNWLFFBQVEsR0FBRyxFQUFFOztVQUVULEtBQUs7RUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87TUFDZixDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRO0VBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7OztFQVdFLEtBQUs7Ozs7O0VBQ0wsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
