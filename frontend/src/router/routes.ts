import adminRoutes from "./adminRoutes";
import userRoutes from "./userRoutes";

const routes = [
  ...adminRoutes,
  ...userRoutes
];

export default routes;
