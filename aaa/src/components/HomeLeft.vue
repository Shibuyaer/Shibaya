<template>
  <div class="ul">
    <div v-for="(v, i) in DataInfo" :key="i">
      <el-menu-item v-if="!v.children" :index="v.path">
        <span slot="title">{{ v.title }}</span>
      </el-menu-item>
      <el-submenu v-if="v.children" :index="v.path">
        <template slot="title">
          <span>{{ v.title }}</span>
        </template>
        <DataInfo :DataInfo="v.children" />
      </el-submenu>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataInfo",
  props: ["DataInfo"],
  data() {
    return {};
  },
  created() {
    // console.log(this.DataInfo);
  },
};
</script>

<style lang="less" >
.ul {
  width: 100%;
  height: 100%;
  background-color: #191a23;
}
</style>