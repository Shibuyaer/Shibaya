import Home from "../../views/Home.vue";
export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { islogin:true }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../../views/About.vue"),
  },
];
