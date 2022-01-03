import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

//lazy loaded
const Profile = () => import("./components/Profile.vue");
const BoardAdmin = () => import("./components/BoardAdmin.vue");
const BoardModerator = () => import("./components/BoardModerator.vue");
const BoardUser = () => import("./components/BoardUser.vue");

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },

    {
        path: "/home",
        component: Home,
    },

    {
        path: "/login",
        component: Login,
    },

    {
        path: "/register",
        component: Register,
    },

    {
        path: "/profile",
        name: "profile",
        component: Profile,
    },

    {
        path: "/admin",
        name: "admin",
        component: BoardAdmin,
    },

    {
        path: "/mod",
        name: "moderator",
        component: BoardModerator,
    },

    {
        path: "/user",
        name: "user",
        component: BoardUser,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;