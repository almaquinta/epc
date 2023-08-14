export const RootArea = "/area"
export const RootProyecto = "/proyecto"
export const RouteIngenieria = `${RootArea}/ingenieria`
export const RouteLaboral = `${RootArea}/servicios`
export default [
  { name: "inicio", url: `/` },
  { name: "nosotros", url: `/nosotros` },
  {
    name: "areas",
    url: `/areas`,
    submenu: [
      { title: "ingenieria", url: `${RouteIngenieria}` },
      { title: "servicios", url: `${RouteLaboral}` },
    ]
  },
  { name: "proyectos", url: `/proyectos` },
  { name: "clientes", url: `/clientes` },
]
