<template>
	<div>
		<MultilineText>
			hoge
			<hr />
			<p>fuga</p>
			{{
				`piyo
piyo
piyo`
			}}
		</MultilineText>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MultilineText from '../MultilineText.vue'

@Component({ components: { MultilineText } })
export default class App extends Vue {}
</script>
