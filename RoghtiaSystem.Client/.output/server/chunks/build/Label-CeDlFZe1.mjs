globalThis.__timing__.logStart('Load chunks/build/Label-CeDlFZe1');import { C as useForwardExpose, P as Primitive } from '../virtual/entry.mjs';
import { defineComponent, openBlock, createBlock, unref, mergeProps, withCtx, renderSlot } from 'vue';

// node_modules/reka-ui/dist/Label/Label.js
var Label_default = /* @__PURE__ */ defineComponent({
	__name: "Label",
	props: {
		for: {
			type: String,
			required: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "label"
		}
	},
	setup(__props) {
		const props = __props;
		useForwardExpose();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), mergeProps(props, { onMousedown: _cache[0] || (_cache[0] = (event) => {
				if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
			}) }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16);
		};
	}
});

export { Label_default as L };;globalThis.__timing__.logEnd('Load chunks/build/Label-CeDlFZe1');
//# sourceMappingURL=Label-CeDlFZe1.mjs.map
