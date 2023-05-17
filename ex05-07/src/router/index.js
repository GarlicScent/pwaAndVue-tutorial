import Vue from "vue";
import VueRouter from "vue-router";
import main_page from "../views/main_page.vue";
import sub_page from "../views/sub_page.vue";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{ path: "/main", component: main_page },
		{ path: "/sub", component: sub_page },
	],
});

export default router;
