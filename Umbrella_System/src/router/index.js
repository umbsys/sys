import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/facaltative",
      name: "facaltative",
      meta: {
        title: "facaltative",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/facaltative.vue"),
    },
    {
      path: "/accountsGuide",
      name: "accountsGuide",
      meta: {
        title: "دليل الحسابات",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/accountsGuide.vue"),
    },
    {
      path: "/NewRisk",
      name: "NewRisk",
      meta: {
        title: "New Risk",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NewRisk.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      meta: {
        title: "settings",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/settings.vue"),
    },
    {
      path: "/users",
      name: "users",
      meta: {
        title: "users",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/users.vue"),
    },
    {
      path: "/employees",
      name: "employees",
      meta: {
        title: "employees",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/employees.vue"),
    },
    {
      path: "/NewEmployee",
      name: "NewEmployee",
      meta: {
        title: "NewEmployee",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/NewEmployee.vue"),
    },
    {
      path: "/UserAuth",
      name: "UserAuth",
      meta: {
        title: "UserAuth",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/UserAuth.vue"),
    },
    {
      path: "/EditEmployee",
      name: "EditEmployee",
      meta: {
        title: "Edit Employee",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/EditEmployee.vue"),
    },
    {
      path: "/ItSupport",
      name: "ItSupport",
      meta: {
        title: "Support Center",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ItSupport.vue"),
    },
    {
      path: "/Announcements",
      name: "Announcements",
      meta: {
        title: "Announcements",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Announcements.vue"),
    },
    {
      path: "/login",
      name: "login",
      
      meta: {
        title: "login",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/login.vue"),
    },
    {
      path: "/",
      name: "Landing",
      
      meta: {
        title: "Welcome",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Landing.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/dashboard.vue"),
      meta: {
        title: "dashboard",
      },
    },
    {
      path: "/PreviewPrint",
      name: "PreviewPrint",
      meta: {
        title: "Preview Print",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PreviewPrint.vue"),
    },

    {
      path: "/Notes",
      name: "Notes",
      meta: {
        title: "Notes",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Notes.vue"),
    },
    {
      path: "/FacAllRisks",
      name: "FacAllRisks",
      meta: {
        title: "FacAllRisks",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FacAllRisks.vue"),
    },
    {
      path: "/Todo",
      name: "Todo",
      meta: {
        title: "Todo",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Todo.vue"),
    },
    {
      path: "/accounts",
      name: "accounts",
      meta: {
        title: "الحسابات",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/accounts.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      meta: {
        title: "User Profile",
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/UserProfile.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})



export default router;
