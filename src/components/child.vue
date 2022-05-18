<template>
    <el-form :model="form">
        <el-form-item label="数量">{{ form.count }}</el-form-item>
        <el-form-item label="姓名">{{
            form.name ? form.name : "zhong"
        }}</el-form-item>
    </el-form>
    <el-button type="primary" @click="clickThis">点我传值</el-button>
</template>
	
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
defineProps({
    form: {
        type: Object,
        default: () => ({
            count: 1,
            name: "wang",
        }),
    },
});
const emit = defineEmits<{
    (e: "click", num: number): void;
}>();

const clickThis = () => {
    emit("click", 2);
};
</script>
	
<style>
</style>