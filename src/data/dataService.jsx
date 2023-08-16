import img01 from "../assets/images/servicios/modelado-3d.png"
import img02 from "../assets/images/servicios/torre-metalica-de-estructura-electrica.png"
import img03 from "../assets/images/servicios/consejo.png"
import img04 from "../assets/images/servicios/proceso.png"
import img05 from "../assets/images/servicios/apoyo-tecnico.png"
import img06 from "../assets/images/servicios/reunion.png"
import img07 from "../assets/images/servicios/servicio1.png"
import img08 from "../assets/images/servicios/servicio2.png"
import img09 from "../assets/images/servicios/solar-panel-icon.png"
import {RouteIngenieria} from './navigation'
import {RouteLaboral} from './navigation'
export default [
  {
    title: "ENTRENAMIENTO Y CERTIFICACIÓN NDT (EQUIPOS Y PERSONAL)",
    img: img07,
    text:"Ofrecemos el servicio de entrenamiento y certificación de personal nivel 1 y 2 a través del código ASNT-SNT-TC-1A.",
    url:`${RouteLaboral}/entrenamiento-y-certificacion-ndt`
  },
  {
    title: "DISEÑO E INGENIERÍA",
    img: img01,
    text:"Las disciplinas de ingeniería incluyen: ingeniería civil, eléctrica, mecánica, de tuberías y estructural; así como especialidades avanzadas como simulación, integración empresarial, procesos de automatización integrados y modelado 3D y 4D interactivo.",
    url:`${RouteIngenieria}/diseno-e-ingenieria`
  },
  {
    title: "Fabricación y Montaje de estructuras metálicas ",
    img: img02,
    text:"Fabricación de estructuras livianas, medianas y pesadas.",
    url:`${RouteIngenieria}/fabricacion-de-montaje-de-estructuras-metalicas`
  }
  ,
  {
    title: "REPARACIÓN DE COMPONENTES",
    img: img03,
    text:`Hemos logrado desarrollar dispositivos que nos permiten una mejora considerable en la eficiencia de los procesos de soldadura. Con el objetivo de realizar un
    servicio de forma segura, oportuna, eficiente y con calidad.`,
    url:`${RouteIngenieria}/reparacion-de-componentes`
  },
  {
    title: "FABRICACIÓN DE SPOOLS Y PIEZAS ESPECIALES PARA TUBERIA",
    img: img05,
    text:`Somos especialistas en la fabricación de spools en el sur del país. Los materiales diversos en los que trabajar son de acero al carbono, acero inoxidable, cuproníquel y otras aleaciones.`,
    url:`${RouteIngenieria}/fabricacion-de-spools-y-piezas-especiales-para-tuberia`
  },
  {
    title: "SERVICIOS DE OUTSOURCING",
    img: img04,
    text:"Implementación y desarrollo de procesos integrales con una propuesta innovadora, y mejora continua, buscando ser mejores socios estratégico de nuestros clientes, para aumentar su eficiencia, eficacia y competitividad en el mercado",
    url:`${RouteLaboral}/servicios-de-outsourcing`
  },
  {
    title: "SERVICIOS DE ENSAYOS NO DESTRUCTIVOS",
    img: img06,
    text:
      `EPC INGENIERIA brinda servicios durante la fabricación y construcción, así como durante el mantenimiento de componentes o equipos industriales que ya están en servicio.`,
    url: `${RouteLaboral}/servicio-de-ensayos-no-destructivos`,
  },

  {
    title: "ALINEAMIENTO LASER DE EJES",
    img: img08,
    text:
      `El mejor sistema de alineación de ejes acoplados en la actualidad es el basado en tecnologia óptica-láser, por ofrecer una gran superioridad técnica en todos los órdenes frente al tradicional mecánico de relojes comparadores.`,
    url: `${RouteLaboral}/servicio-de-alineamiento-de-laser-de-ejes`,
  },
  {
    title: "CONSTRUCCIÓN DE PLANTAS FOTOVOLTAICAS",
    img: img09,
    text: `EPC ENERGIA, en su especialidad de servicios de energía solar y almacenamiento de energía, ayuda a sus clientes, especialmente a las empresas de Generación y Construcción (EPC), a garantizar la construcción, el mantenimiento y operación de su planta fotovoltaica cumpliendo con los más altos estándares de calidad.`,
    url: `${RouteLaboral}/construccion-y-operacion-de-plantas-solares-fotovoltaicas`,
  },
  // {
  //   title: "GESTIÓN INTEGRAL DE CAMPAMENTOS",
  //   img: img05,
  //   text:"Gestión integral de campamentos (incluye todos los servicios, de limpieza, lavandería, catering, servicios médicos, transporte y mantenimiento)",
  //   url:`${RouteLaboral}/gestion-integral-de-campamentos`
  // }
]
