<template>
  <div class="login">
    <div class="mask">
      <div class="left">
        <img
          src="	http://bw.gsruiying.com.cn/admin/view_admin/img/sw.e11bce53.jpg"
          alt=""
        />
      </div>
      <div class="right">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <div class="bawei">
            <img
              class="bawei"
              src="	http://bw.gsruiying.com.cn/admin/view_admin/img/logo.4d95a494.png"
              alt=""
            />
          </div>
          <el-form-item label="用户名" prop="account">
            <el-input
              type="text"
              v-model="ruleForm.account"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input
              @keyup.enter.native="submitForm('ruleForm')"
              type="password"
              v-model="ruleForm.pwd"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Login } from "../api/index";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (/^\w{5}$/.test(value)) {
          callback();
        } else {
          callback(new Error("用户名输入不正确"));
        }
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (/^\w{8}$/.test(value)) {
          callback();
        } else {
          callback(new Error("密码输入不正确"));
        }
      }
    };

    return {
      ruleForm: {
        account: "",
        pwd: "",
        imgcode: "",
      },
      rules: {
        account: [{ validator: validateUser, trigger: ["blur", "change"] }],
        pwd: [{ validator: validatePass, trigger: ["blur", "change"] }],
      },
    };
  },
  methods: {
    ...mapMutations("token", ["getToken"]),
    ...mapMutations("list", ["getList"]),
    // ...mapMutations("token", ["getUser"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Login({ ...this.ruleForm }).then((res) => {
            console.log(res);
            if (res.data.status == 200) {
              this.getToken(res.data.data.token);
              this.getList(res.data.data.menus)
              // this.getUser(res.data.data.user_info.account);
              this.$message({
                message: "登陆成功！",
                type: "success",
              });
              this.$router.push("/");
            } else {
              this.$message({
                message: "登陆失败，请重新登录！",
                type: "warning",
              });
            }
            // console.log(res);
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" >
.login {
  width: 100%;
  height: 100%;
  background: url("../../public/24.jpg") no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .mask {
    min-width: 768px;
    height: 350px;
    background-color: white;
    display: flex;
    .left {
      width: 50%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-items: center;
      .el-form {
        width: 100%;
        // height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
      }
    }
    .bawei {
      // width: 200px;
      height: 75px;
      margin: 20px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>