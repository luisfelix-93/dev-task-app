import type React from "react";
import HomePage from "./pages/HomePage";
import { Home, type LucideIcon } from "lucide-react";
export interface AppRoute {
    path: string;
    label: string;
    icon: LucideIcon;
    component: React.FC;
}

export const appRoutes: AppRoute[] = [
    {
        path: "/home",
        label: "Início",
        icon: Home,
        component: HomePage
    }
]