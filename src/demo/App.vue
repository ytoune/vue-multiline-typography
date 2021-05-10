<template type="html">
	<div>
		<p>
			<MultilineText>
				hoge
				<hr />
				<p>fuga</p>
				{{ text }}
			</MultilineText>
		</p>
		<p>
			<MultilineText trimmed>{{ text }}</MultilineText>
		</p>
		<p>{{ text }}</p>
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MultilineText from '../MultilineText.vue'

export default defineComponent({
	name: 'App',
	components: { MultilineText },
	computed: {
		text() {
			return `
溢れた孤独に触れた指先
ここにはずっと
欲しがっていたものがあるの
何が大切かなんて
もうわかっているの本当は
`
		},
	},
})
</script>
