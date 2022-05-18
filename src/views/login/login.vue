<template>
   
    <div ref="vantaRef" class="login_bg">
        <div class="login_form">
            <div class="title">
                <span>欢迎回来</span>
            </div>
            <div class="form_content">
                <el-form :model="form" label-width="80px">
                    <el-form-item label="账号：">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码：">
                        <el-input v-model="form.password" type="password" show-password></el-input>
                    </el-form-item>
                    <el-form-item label="验证码：">
                        <el-input></el-input>
                    </el-form-item>
                    <!-- <el-form-item>
                        <el-button type="primary">登录</el-button>
                    </el-form-item> -->
                </el-form>
                <div class="btn_warp">
                    <button>登录</button>
                </div>
           </div>
        </div>
    </div>
    
</template>
	
<script setup lang='ts'>
import { onMounted, ref, reactive } from "vue";
import BIRDS from "vanta/dist/vanta.birds.min.js";
import * as THREE from "vanta/vendor/three.r119.min.js";


components:{}

const vantaRef = ref<HTMLDivElement>();

const form = reactive({
    username: "",
    password: "",   
});

onMounted(() => {
    BIRDS({
        THREE: THREE,
        el: vantaRef.value as HTMLDivElement,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
    });
});

</script>
	
<style lang="less">
.login_bg{
  width: 100%;
  height: 100vh;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_form{
      border: 1px solid #8d92d33d;
      border-radius:6px ;
      width: 450px;
      background: #13253adb;
      .title{
          user-select: none;
          width: 100%;
          height: 60px;
          line-height: 60px;
          text-align: center;
          border-bottom: 1px solid #8d92d33d;
          color: #fff;
          font-size: 18px;
        //   span{
        //       margin-left: 20px;
        //   }
      }
      .form_content{
          padding: 20px;
          padding-top: 30px;
          padding-right: 30px;
          .el-form{
              .el-form-item{
                  .el-form-item__label{
                      color: #fff;
                  }
              }
          }
          .btn_warp{
              width: 100%;
              height: 70px;
              display: flex;
              justify-content: center;
              user-select: none;
              transition: .1s;
              align-items: center;
             
              button{
                  background: #4093ff;
                  color: #fff;
                  padding: 8px 15px;
                  width: 50%;
                  border: none;
                  border-radius: 4px;
                  cursor: pointer;
                  &:focus,&:hover{
                      background: #79bbff;
                  }
                 
              }
          }
      }

  }
}


</style>