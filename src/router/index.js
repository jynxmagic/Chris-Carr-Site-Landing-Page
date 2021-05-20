import { createWebHistory, createRouter } from "vue-router";

const HomeView = () => import("@/views/Home.vue");
const AdminView = () => import("@/views/Admin.vue");
const CreateBlogView = () => import("@/views/CreateBlog.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminView,
  },
  {
    path: "/createBlogPost",
    name: "createBlog",
    component: CreateBlogView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
