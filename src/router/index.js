import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Admin from "@/views/Admin.vue";
import CreateBlog from "@/views/CreateBlog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/createBlogPost",
    name: "createBlog",
    component: CreateBlog,
    props: true
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
