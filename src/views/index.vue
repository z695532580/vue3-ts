<template>
    <countComp :form="form" @click="clickThis"></countComp>
    <p>子组件传递的值为：{{childNum}}</p>
    <el-button type="primary" @click="add">count++：{{ form.count }}</el-button>
</template>
	
<script setup lang="ts">
import countComp from "@/components/child.vue";
import { log } from "console";
import { reactive ,ref, Ref } from "vue";

components: {
    countComp;
}
const childNum=ref(0) as Ref;

const nameArr = reactive(["wang", "li", "zhao", "qian"]);

const form = reactive({
    count: 0,
    name: "",
});

function add() {
    form.count++;
    form.name = nameArr[form.count % 4];
}

function clickThis(num:number) {
    childNum.value = ref(num);
}

interface IChild {
    age?: number;
    name:string;
    readonly x:number;
}

const child:IChild = {
   // age: 0,
    name: "",
    x: 1,
};

// child.x = 2;

</script>
	
<style lang="less">
</style>