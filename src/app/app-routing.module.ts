import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

import { SampleModule } from "./main/sample/sample.module";
import { UsersModule } from "./main/users/users.module";

const appRoutes: Routes = [
  //   {
  //     path: "pages",
  //     loadChildren: () =>
  //       import("./main/pages/pages.module").then((m) => m.PagesModule),
  //   },
//   {
//     path: "/home",
//     canActivate: [AuthGuard],
//     redirectTo: "/home",
//     pathMatch: "full",
//   },
  //   {
  //     path: "**",
  //     redirectTo: "/pages/miscellaneous/error", //Error 404 - Page not found
  //   },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: "enabled", // Add options right here
      relativeLinkResolution: "legacy",
    }),
    SampleModule,
    UsersModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
