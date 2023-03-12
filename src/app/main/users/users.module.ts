import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: "usuarios",
    data: { animation: "home" },
    children: [
      {
        path: "home",
        component: HomeComponent,
        data: { animation: "home" },
      },
      {
        path: "crear",
        component: CreateComponent,
        data: { animation: "create" },
      },
      {
        path: "**",
        redirectTo: "home",
      },
    ],
  },
];

@NgModule({
  declarations: [HomeComponent, CreateComponent],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
  ],
})
export class UsersModule {}
