import { createRouter, createWebHistory } from "vue-router";
import { isMobileTerminal } from '../utils/flexible';
import pcRoutes from "./modules/pc-routes";
import mobileRoutes from "./modules/mobile-routes";

const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value? mobileRoutes : pcRoutes,
});

export default router;