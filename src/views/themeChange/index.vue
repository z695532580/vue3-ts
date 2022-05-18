<template>
    <el-color-picker v-model="color" @change="changeTheme" />
</template>

<script lang="ts">
	import { reactive, toRefs } from "vue";
	import { mix } from "@/utils/index";
	export default {
		setup() {
			// 变量前缀
			const pre = "--el-color-primary";
			// 白色混合色
			const mixWhite = "#ffffff";
			// 黑色混合色
			const mixBlack = "#000000";
			const state = reactive({
			color: localStorage.getItem("primaryColor") || "#409eff",
			});
			
			/**
			 * @description: 更改主题
			 * @param {String} color 颜色
			 */
			const changeTheme = (color = state.color) => {
			const node = document.documentElement;
			// 主色调
			node.style.setProperty(pre, color);
			localStorage.setItem("primaryColor", color);
			// 这里是覆盖原有颜色的核心代码
			for (let i = 1; i < 10; i += 1) {
				node.style.setProperty(`${pre}-light-${i}`, mix(color, mixWhite, i * 0.1));
			}
			node.style.setProperty("--el-color-primary-dark", mix(color, mixBlack, 0.1));
			// 本地缓存style，样式持久化，你也可以存在后端
			localStorage.setItem("style", node.style.cssText);
			};
			
			return {
				...toRefs(state),
				changeTheme,
			}
		}
	}
</script>
