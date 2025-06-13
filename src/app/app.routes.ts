import { Routes } from "@angular/router";
import { HomePage } from "./features/home/home-page/home-page";
import { RegisterPage } from "./features/register/register-page/register-page";
import { authGuard } from "./core/guards/auth-guard";

export const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "register",
    component: RegisterPage,
  },
  {
    path: "login",
    loadComponent: () =>
      import("./features/login/login-page/login-page").then((m) => m.LoginPage),
  },
  {
    path: "recipes",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./features/recipes/recipes-home/recipes-home").then(
        (m) => m.RecipesHome,
      ),
  },
];
