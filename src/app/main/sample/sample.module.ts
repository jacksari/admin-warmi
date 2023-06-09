import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { CoreCommonModule } from "@core/common.module";

import { ContentHeaderModule } from "app/layout/components/content-header/content-header.module";

import { SampleComponent } from "./sample.component";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    data: { animation: "home" },
    children: [
      {
        path: "home",
        component: HomeComponent,
        data: { animation: "home" },
      },
      {
        path: "sample",
        component: SampleComponent,
        data: { animation: "sample" },
      },
    ],
  },
];

@NgModule({
  declarations: [SampleComponent, HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
  ],
  exports: [SampleComponent, HomeComponent],
})
export class SampleModule {}
