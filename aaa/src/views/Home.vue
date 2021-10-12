<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="baweis">
          <img
            src="http://bw.gsruiying.com.cn/admin/view_admin/img/logo.4d95a494.png"
            alt=""
          />
        </div>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#191a23"
          text-color="#fff"
          active-text-color="#ffd04b"
          :unique-opened="true"
          :collapse="false"
          
        >
          <HomeLeft :DataInfo="list" />
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeLeft from "../components/HomeLeft.vue";
export default {
  data() {
    return {
      list: [],
    };
  },
  components: {
    HomeLeft,
  },
  created() {
    if (localStorage.getItem("vuex")) {
      this.list = JSON.parse(localStorage.getItem("vuex")).list.list;
      console.log(this.list);
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 80px !important;
}

.el-aside {
  background-color: #191a23;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.el-menu-vertical-demo {
  width: 100%;
}
::-webkit-scrollbar {
  display: none;
}
.baweis {
  width: 100%;
  height: 80px;
  margin: 10px 0;
  img {
    width: 98%;
    // height: 80%;
  }
}
</style>