<template>
	<div>
		<MultilineTypography>
			hoge
			<hr />
			<p>fuga</p>
			{{
				`piyo
piyo
piyo`
			}}
		</MultilineTypography>
	</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MultilineTypography from '../MultilineTypography.vue'

@Component({ components: { MultilineTypography } })
export default class App extends Vue {}
</script>
