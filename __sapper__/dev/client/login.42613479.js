import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as validate_slots, C as onMount, D as globals, e as space, f as element, t as text, q as query_selector_all, g as detach_dev, h as claim_space, j as claim_element, k as children, l as claim_text, m as add_location, n as attr_dev, o as insert_dev, p as append_dev, E as set_input_value, F as listen_dev, u as noop, G as run_all } from './client.69b16685.js';

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

async function doGetArticles(id) {

  let url = "https://sakura.eco/api/widget/articles/"+id;

  return await fetch( url , {
      mode: 'cors' })
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
	let button0;
	let t5;
	let t6;
	let button1;
	let t7;
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
			button0 = element("button");
			t5 = text("Sign In");
			t6 = space();
			button1 = element("button");
			t7 = text("Test");
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
			button0 = claim_element(nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			t5 = claim_text(button0_nodes, "Sign In");
			button0_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			button1 = claim_element(nodes, "BUTTON", {});
			var button1_nodes = children(button1);
			t7 = claim_text(button1_nodes, "Test");
			button1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 26, 0, 441);
			attr_dev(input0, "placeholder", "enter your email");
			add_location(input0, file, 27, 0, 472);
			attr_dev(input1, "placeholder", "enter your password");
			add_location(input1, file, 28, 0, 530);
			add_location(button0, file, 30, 0, 595);
			add_location(button1, file, 33, 0, 645);
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
			insert_dev(target, button0, anchor);
			append_dev(button0, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, button1, anchor);
			append_dev(button1, t7);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "input", /*input0_input_handler*/ ctx[4]),
					listen_dev(input1, "input", /*input1_input_handler*/ ctx[5]),
					listen_dev(button0, "click", /*login*/ ctx[3], { once: true }, false, false),
					listen_dev(button1, "click", /*test*/ ctx[2], { once: true }, false, false)
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
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(button1);
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

	function test() {
		console.log("test");
		let r = doGetArticles(123);
		console.log(r);
	}

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

	$$self.$capture_state = () => ({
		doLogin,
		doGetArticles,
		onMount,
		email,
		password,
		test,
		login
	});

	$$self.$inject_state = $$props => {
		if ("email" in $$props) $$invalidate(0, email = $$props.email);
		if ("password" in $$props) $$invalidate(1, password = $$props.password);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [email, password, test, login, input0_input_handler, input1_input_handler];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uNDI2MTM0NzkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2xvZ2luLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9sb2dpbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvTG9naW4oZW1haWwsIHBhc3N3b3JkKSB7XG5cbiAgbGV0IHVybCA9IFwiaHR0cHM6Ly9zYWt1cmEuZWNvL2FwaS91c2VyL2xvZ2luXCI7XG4gIGxldCBkYXRhID0geyAnZW1haWwnIDogZW1haWwsICdwYXNzd29yZCcgOiBwYXNzd29yZCB9O1xuXG4gIHJldHVybiBhd2FpdCBmZXRjaCggdXJsICwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pXG4gICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvR2V0QXJ0aWNsZXMoaWQpIHtcblxuICBsZXQgdXJsID0gXCJodHRwczovL3Nha3VyYS5lY28vYXBpL3dpZGdldC9hcnRpY2xlcy9cIitpZDtcblxuICByZXR1cm4gYXdhaXQgZmV0Y2goIHVybCAsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyB9KVxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKChkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG59XG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgeyBkb0xvZ2luIH0gZnJvbSAnLi9fbG9naW4nO1xuICBpbXBvcnQgeyBkb0dldEFydGljbGVzIH0gZnJvbSAnLi9fbG9naW4nO1xuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuICBcbiAgbGV0IGVtYWlsID0gJyc7XG4gIGxldCBwYXNzd29yZCA9ICcnO1xuXG5cdGZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICBsZXQgciA9IGRvR2V0QXJ0aWNsZXMoMTIzKTtcbiAgICBjb25zb2xlLmxvZyhyKTtcblx0fVxuXHRmdW5jdGlvbiBsb2dpbigpIHtcbiAgICBjb25zb2xlLmxvZygnbG9naW4nKTtcbiAgICBsZXQgciA9IGRvTG9naW4oZW1haWwsIHBhc3N3b3JkKTtcbiAgICBjb25zb2xlLmxvZyhyKTtcblx0fVxuPC9zY3JpcHQ+XG5cblxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5BYm91dDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+Q09OTkVDVCBUTyBTQUtVUkEuRUNPPC9oMT5cbjxpbnB1dCBiaW5kOnZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJlbnRlciB5b3VyIGVtYWlsXCI+XG48aW5wdXQgYmluZDp2YWx1ZT17cGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwiZW50ZXIgeW91ciBwYXNzd29yZFwiPlxuXG48YnV0dG9uIG9uOmNsaWNrfG9uY2U9e2xvZ2lufT5cblx0U2lnbiBJblxuPC9idXR0b24+XG48YnV0dG9uIG9uOmNsaWNrfG9uY2U9e3Rlc3R9PlxuXHRUZXN0XG48L2J1dHRvbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFPLGVBQWUsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDL0M7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHLG1DQUFtQyxDQUFDO0FBQ2hELEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxPQUFPLEdBQUcsS0FBSyxFQUFFLFVBQVUsR0FBRyxRQUFRLEVBQUUsQ0FBQztBQUN4RDtBQUNBLEVBQUUsT0FBTyxNQUFNLEtBQUssRUFBRSxHQUFHLEdBQUc7QUFDNUIsTUFBTSxJQUFJLEVBQUUsTUFBTTtBQUNsQixNQUFNLE1BQU0sRUFBRSxNQUFNO0FBQ3BCLE1BQU0sT0FBTyxFQUFFO0FBQ2YsUUFBUSxjQUFjLEVBQUUsa0JBQWtCO0FBQzFDLE9BQU87QUFDUCxNQUFNLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztBQUNoQyxLQUFLLENBQUM7QUFDTixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7QUFDbkIsVUFBVSxPQUFPLENBQUMsQ0FBQztBQUNuQixTQUFTLENBQUM7QUFDVixDQUFDO0FBQ0Q7QUFDTyxlQUFlLGFBQWEsQ0FBQyxFQUFFLEVBQUU7QUFDeEM7QUFDQSxFQUFFLElBQUksR0FBRyxHQUFHLHlDQUF5QyxDQUFDLEVBQUUsQ0FBQztBQUN6RDtBQUNBLEVBQUUsT0FBTyxNQUFNLEtBQUssRUFBRSxHQUFHLEdBQUc7QUFDNUIsTUFBTSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7QUFDckIsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzFCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO0FBQ25CLFVBQVUsT0FBTyxDQUFDLENBQUM7QUFDbkIsU0FBUyxDQUFDO0FBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0NGbUIsR0FBSzs7O3dDQUNMLEdBQVE7Ozs7Ozs7Ozs7Ozs0Q0FFSixHQUFLOzJDQUdMLEdBQUk7Ozs7Ozs7eURBTlIsR0FBSztzQ0FBTCxHQUFLOzs7K0RBQ0wsR0FBUTt5Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXZCckIsS0FBSyxHQUFHLEVBQUU7S0FDVixRQUFRLEdBQUcsRUFBRTs7VUFFVCxJQUFJO0VBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNO01BQ2QsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHO0VBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O1VBRVAsS0FBSztFQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTztNQUNmLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVE7RUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0VBV0UsS0FBSzs7Ozs7RUFDTCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
