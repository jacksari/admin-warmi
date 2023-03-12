import { CoreMenu } from "@core/types";

export const menu: CoreMenu[] = [
  {
    id: "home",
    title: "Home",
    translate: "MENU.HOME",
    type: "item",
    icon: "home",
    url: "home",
  },
  {
    id: "sample",
    title: "Sample",
    translate: "MENU.SAMPLE",
    type: "item",
    icon: "file",
    url: "sample",
  },

  {
    id: "charts-maps",
    type: "section",
    title: "Opciones",
    icon: "bar-chart-2",
   
    children: [
      {
        id: "usuarios",
        title: "Usuarios",
        type: "collapsible",
        icon: "pie-chart",
        // translate: "MENU.USUARIOS",
        badge: {
          title: "2",
          
          classes: "badge-light-danger badge-pill",
        },
        children: [
          {
            id: "usuarios.index",
            title: "Listar",
            // translate: "MENU.USUARIOS.HOME",
            type: "item",
            icon: "circle",
            url: "usuarios/home",
          },
          {
            id: "usuarios.create",
            title: "Crear",
            // translate: "MENU.USUARIOS.CREATE",
            type: "item",
            icon: "circle",
            url: "usuarios/crear",
          },
        ],
      },
    ],
  },
];
