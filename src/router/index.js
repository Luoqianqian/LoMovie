import { createRouter, createWebHistory } from "vue-router";
import { isMobileTerminal } from '../utils/flexible';
import pcRoutes from "./modules/pc-routes";
import mobileRoutes from "./modules/mobile-routes";

const router = createRouter({
  history: createWebHistory(),
  // routes: isMobileTerminal ? mobileRoutes : pcRoutes,
  routes: pcRoutes,
});

export default router;