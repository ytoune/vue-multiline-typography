<template>
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
import { Component, Vue } from 'vue-property-decorator'
import MultilineText from '../MultilineText.vue'

@Component({ components: { MultilineText } })
export default class App extends Vue {
	get text() {
		return `
溢れた孤独に触れた指先
ここにはずっと
欲しがっていたものがあるの
何が大切かなんて
もうわかっているの本当は
		`
	}
}
</script>
