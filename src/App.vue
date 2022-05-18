<template>
    <router-view />
</template>
<script  lang="ts">
 	import { provide } from 'vue'
	import * as echarts from 'echarts'
	export default{
		setup() {
			provide('echarts', echarts)
		}
	}	
</script>
<style>
* {
    margin: 0;
    padding: 0;
}
#app {
    width: 100%;
    height: 100%;
}
</style>