const routes = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "home", component: () => import("pages/HomePage.vue") }],
  },
  {
    path: "/store/:storeName",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/StorePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
