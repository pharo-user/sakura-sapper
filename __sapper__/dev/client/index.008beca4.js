import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as add_location, k as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.63faf486.js';

var successkid = "/client/465898c830bb9d2c.jpg";

/* src/routes/index.svelte generated by Svelte v3.38.3 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let h3;
	let t1;
	let t2;
	let a;
	let t3;

	const block = {
		c: function create() {
			t0 = space();
			h3 = element("h3");
			t1 = text("SAKURA NETWORK App is installed");
			t2 = space();
			a = element("a");
			t3 = text("Access Sakura.eco");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-vudyt2\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h3 = claim_element(nodes, "H3", {});
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, "SAKURA NETWORK App is installed");
			h3_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			t3 = claim_text(a_nodes, "Access Sakura.eco");
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "SAKURA NETWORK Shopify App";
			add_location(h3, file, 42, 0, 516);
			attr_dev(a, "href", ".\\login");
			add_location(a, file, 44, 0, 558);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h3, anchor);
			append_dev(h3, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, a, anchor);
			append_dev(a, t3);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h3);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(a);
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
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ successkid });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDA4YmVjYTQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvaW1hZ2VzL3N1Y2Nlc3NraWQuanBnIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiL2NsaWVudC80NjU4OThjODMwYmI5ZDJjLmpwZ1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUJBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
