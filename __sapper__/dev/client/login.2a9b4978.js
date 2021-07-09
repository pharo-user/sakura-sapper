import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as validate_slots, C as onMount, D as globals, e as space, f as element, t as text, q as query_selector_all, g as detach_dev, h as claim_space, j as claim_element, k as children, l as claim_text, m as add_location, n as attr_dev, o as insert_dev, p as append_dev, E as set_input_value, F as listen_dev, u as noop, G as run_all } from './client.2ab7eb9e.js';

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
	let br0;
	let t1;
	let br1;
	let t2;
	let h1;
	let t3;
	let t4;
	let div1;
	let div0;
	let input0;
	let t5;
	let br2;
	let t6;
	let input1;
	let t7;
	let br3;
	let t8;
	let button0;
	let t9;
	let t10;
	let br4;
	let t11;
	let button1;
	let t12;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			br0 = element("br");
			t1 = space();
			br1 = element("br");
			t2 = space();
			h1 = element("h1");
			t3 = text("CONNECT TO SAKURA.ECO");
			t4 = space();
			div1 = element("div");
			div0 = element("div");
			input0 = element("input");
			t5 = space();
			br2 = element("br");
			t6 = space();
			input1 = element("input");
			t7 = space();
			br3 = element("br");
			t8 = space();
			button0 = element("button");
			t9 = text("Sign In");
			t10 = space();
			br4 = element("br");
			t11 = space();
			button1 = element("button");
			t12 = text("Test");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1bel8ov\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			br0 = claim_element(nodes, "BR", {});
			t1 = claim_space(nodes);
			br1 = claim_element(nodes, "BR", {});
			t2 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t3 = claim_text(h1_nodes, "CONNECT TO SAKURA.ECO");
			h1_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			input0 = claim_element(div0_nodes, "INPUT", { placeholder: true, class: true });
			t5 = claim_space(div0_nodes);
			br2 = claim_element(div0_nodes, "BR", {});
			t6 = claim_space(div0_nodes);
			input1 = claim_element(div0_nodes, "INPUT", { placeholder: true, class: true });
			t7 = claim_space(div0_nodes);
			br3 = claim_element(div0_nodes, "BR", {});
			t8 = claim_space(div0_nodes);
			button0 = claim_element(div0_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t9 = claim_text(button0_nodes, "Sign In");
			button0_nodes.forEach(detach_dev);
			t10 = claim_space(div0_nodes);
			br4 = claim_element(div0_nodes, "BR", {});
			t11 = claim_space(div0_nodes);
			button1 = claim_element(div0_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t12 = claim_text(button1_nodes, "Test");
			button1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Login";
			add_location(br0, file, 83, 0, 1381);
			add_location(br1, file, 84, 0, 1388);
			attr_dev(h1, "class", "svelte-5qlnod");
			add_location(h1, file, 85, 0, 1395);
			attr_dev(input0, "placeholder", "Email");
			attr_dev(input0, "class", "svelte-5qlnod");
			add_location(input0, file, 88, 8, 1450);
			add_location(br2, file, 89, 8, 1505);
			attr_dev(input1, "placeholder", "Password");
			attr_dev(input1, "class", "svelte-5qlnod");
			add_location(input1, file, 90, 8, 1520);
			add_location(br3, file, 91, 8, 1581);
			attr_dev(button0, "class", "svelte-5qlnod");
			add_location(button0, file, 92, 8, 1596);
			add_location(br4, file, 95, 8, 1673);
			attr_dev(button1, "class", "svelte-5qlnod");
			add_location(button1, file, 96, 8, 1688);
			attr_dev(div0, "class", "svelte-5qlnod");
			add_location(div0, file, 87, 4, 1436);
			attr_dev(div1, "class", "svelte-5qlnod");
			add_location(div1, file, 86, 0, 1426);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, br0, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, br1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, input0);
			set_input_value(input0, /*email*/ ctx[0]);
			append_dev(div0, t5);
			append_dev(div0, br2);
			append_dev(div0, t6);
			append_dev(div0, input1);
			set_input_value(input1, /*password*/ ctx[1]);
			append_dev(div0, t7);
			append_dev(div0, br3);
			append_dev(div0, t8);
			append_dev(div0, button0);
			append_dev(button0, t9);
			append_dev(div0, t10);
			append_dev(div0, br4);
			append_dev(div0, t11);
			append_dev(div0, button1);
			append_dev(button1, t12);

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
			if (detaching) detach_dev(br0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(br1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(div1);
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

	async function login() {
		console.log("login");
		let r = await doLogin(email, password);
		console.log(r);

		if (r.status == "success") {
			goto("/dashboard");
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uMmE5YjQ5NzguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2xvZ2luLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9sb2dpbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvTG9naW4oZW1haWwsIHBhc3N3b3JkKSB7XG5cbiAgbGV0IHVybCA9IFwiaHR0cHM6Ly9zYWt1cmEuZWNvL2FwaS91c2VyL2xvZ2luXCI7XG4gIGxldCBkYXRhID0geyAnZW1haWwnIDogZW1haWwsICdwYXNzd29yZCcgOiBwYXNzd29yZCB9O1xuXG4gIHJldHVybiBhd2FpdCBmZXRjaCggdXJsICwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pXG4gICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgICAgLnRoZW4oKGQpID0+IHtcbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRvR2V0QXJ0aWNsZXMoaWQpIHtcblxuICBsZXQgdXJsID0gXCJodHRwczovL3Nha3VyYS5lY28vYXBpL3dpZGdldC9hcnRpY2xlcy9cIitpZDtcblxuICByZXR1cm4gYXdhaXQgZmV0Y2goIHVybCAsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyB9KVxuICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcbiAgICAgIC50aGVuKChkKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0pXG59XG4iLCJcbjxzdHlsZT5cblxuICAgIGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY0RjQ7XG4gICAgICAgIHBhZGRpbmc6IDglO1xuICAgIH1cblxuICAgIGRpdiBkaXYge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNEY0O1xuICAgICAgICBwYWRkaW5nOiAwIDA7XG4gICAgICAgIG1hcmdpbjogMCAwO1xuICAgIH1cblxuICAgIC8qOmdsb2JhbChib2R5KXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjZGNEY0O1xuICAgIH0qL1xuXG5cdGgxIHtcblx0XHRjb2xvcjogYmxhY2s7XG5cdFx0Zm9udC1mYW1pbHk6ICdNb250c2VycmF0Jztcblx0XHRmb250LXdlaWdodDogJ2JvbGQnO1xuXHRcdGZvbnQtc2l6ZTogMmVtO1xuXHR9XG5cblx0aW5wdXQge1xuICAgICAgd2lkdGg6IDgwJTtcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICBib3JkZXI6IG5vbmU7XG5cdH1cblxuXHRidXR0b24ge1xuXHQgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xuXHQgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQyODI4O1xuICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICB3aWR0aDogODYlO1xuICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgbWFyZ2luOiA4cHggMDtcblx0fVxuXG4gICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODkzODM4O1xuICAgIH1cblxuICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQyODI4O1xuICAgICB9XG5cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGRvTG9naW4gfSBmcm9tICcuL19sb2dpbic7XG4gIGltcG9ydCB7IGRvR2V0QXJ0aWNsZXMgfSBmcm9tICcuL19sb2dpbic7XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5cbiAgbGV0IGVtYWlsID0gJyc7XG4gIGxldCBwYXNzd29yZCA9ICcnO1xuXG5cdGZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgICBsZXQgciA9IGRvR2V0QXJ0aWNsZXMoMTIzKTtcbiAgICBjb25zb2xlLmxvZyhyKTtcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBsb2dpbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luJyk7XG4gICAgICAgIGxldCByID0gYXdhaXQgZG9Mb2dpbihlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgaWYgKHIuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZ290bygnL2Rhc2hib2FyZCcpO1xuICAgICAgICB9XG5cdH1cbjwvc2NyaXB0PlxuXG5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+TG9naW48L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxiciAvPlxuPGJyIC8+XG48aDE+Q09OTkVDVCBUTyBTQUtVUkEuRUNPPC9oMT5cbjxkaXY+XG4gICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gb246Y2xpY2t8b25jZT17bG9naW59PlxuICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gb246Y2xpY2t8b25jZT17dGVzdH0+XG4gICAgICAgICAgICBUZXN0XG4gICAgICAgIDwv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
