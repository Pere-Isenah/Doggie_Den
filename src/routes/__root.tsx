import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className="overflow-x-hidden">
      <Outlet />
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </div>
)
})