<script lang="ts">
import Vue, { VNode } from 'vue'
export default Vue.extend({
	functional: true,
	render(h, ctx) {
		const list: VNode[] = []
		for (const node of ctx.children) {
			if (undefined === node.tag && 'string' === typeof node.text) {
				const lines = node.text.split('\n')
				if ('' === lines[0]?.trim()) lines.shift()
				if ('' === lines[lines.length - 1]?.trim()) lines.pop()
				if (1 < lines.length) {
					for (const line of lines) {
						list.push({ text: line, isRootInsert: true, isComment: false })
						list.push(h('br', {}))
					}
					list.pop()
					continue
				}
			}
			list.push(node)
		}
		return list
	},
})
</script>
