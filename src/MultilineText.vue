<script lang="ts">
import type { VNode, FunctionalComponent } from 'vue'
import { h, Text } from 'vue'

type Props = { trimmed?: boolean }
const MultilineText: FunctionalComponent<Props> = (props, ctx) => {
	const list: VNode[] = []
	for (const node of ctx.slots.default!()) {
		if (node.type === Text && 'string' === typeof node.children) {
			const lines = node.children.split('\n')
			if (props.trimmed) {
				while ('' === lines[0]?.trim()) lines.shift()
				while ('' === lines[lines.length - 1]?.trim()) lines.pop()
			}
			if (1 < lines.length) {
				for (const line of lines) {
					line.trim() && list.push({ ...node, children: line })
					list.push(h('br', {}))
				}
				list.pop()
				continue
			}
		}
	}
	return list
}

MultilineText.props = {
	trimmed: { type: Boolean, default: false },
}

export default MultilineText
</script>
