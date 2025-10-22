import { createElement } from 'react';
import {
  FaIndustry,
  FaTruckMoving,
  FaCubes,
  FaFileSignature,
  FaShippingFast,
  FaPencilRuler,
  FaBuilding,
  FaTools,
  FaShieldAlt,
  FaExchangeAlt
} from 'react-icons/fa';

export const faqItems = [
  {
    id: 'fabricacion',
    icon: createElement(FaIndustry),
    question: '¿Cuánto tardáis en fabricar un módulo o edificio prefabricado?',
    answer:
      'Los plazos habituales oscilan entre 8 y 16 semanas según complejidad, acabados y logística. Nuestro proceso industrializado garantiza calidad constante en cada fase.'
  },
  {
    id: 'movilidad',
    icon: createElement(FaTruckMoving),
    question: '¿Vuestros productos son móviles o fijos?',
    answer:
      'Disponemos de soluciones transportables y permanentes. Adaptamos la cimentación y las conexiones para que puedas reubicar tus módulos o fijarlos de forma definitiva.'
  },
  {
    id: 'materiales',
    icon: createElement(FaCubes),
    question: '¿Con qué materiales trabajáis?',
    answer:
      'Usamos paneles sándwich de alto aislamiento, estructuras metálicas ligeras y revestimientos sostenibles para garantizar confort térmico y acústico de primer nivel.'
  },
  {
    id: 'permisos',
    icon: createElement(FaFileSignature),
    question: '¿Necesito permiso de obras?',
    answer:
      'Depende de la normativa municipal y el uso final. Te asesoramos con la documentación técnica necesaria para agilizar licencias y trámites urbanísticos.'
  },
  {
    id: 'logistica',
    icon: createElement(FaShippingFast),
    question: '¿Gestionáis el transporte hasta la parcela?',
    answer:
      'Sí, contamos con partners logísticos especializados que se encargan del transporte, izado y colocación en la ubicación final.'
  },
  {
    id: 'personalizacion',
    icon: createElement(FaPencilRuler),
    question: '¿Se pueden personalizar los módulos?',
    answer:
      'Partimos de catálogos base pero adaptamos acabados, distribución, tecnología integrada y equipamiento según las necesidades del proyecto.'
  },
  {
    id: 'usos',
    icon: createElement(FaBuilding),
    question: '¿Qué usos pueden tener vuestros productos?',
    answer:
      'Realizamos viviendas, oficinas, espacios comerciales, hospitality, equipamientos efímeros y soluciones sanitarias modulares.'
  },
  {
    id: 'mantenimiento',
    icon: createElement(FaTools),
    question: '¿Qué mantenimiento necesitan?',
    answer:
      'El mantenimiento es mínimo: revisión anual de juntas, limpieza de filtros y chequeos eléctricos. Ofrecemos planes preventivos personalizados.'
  },
  {
    id: 'garantia',
    icon: createElement(FaShieldAlt),
    question: '¿Tienen garantía?',
    answer:
      'Todos nuestros proyectos cuentan con garantía estructural y de acabados, además de soporte técnico durante todo el ciclo de vida.'
  },
  {
    id: 'reubicacion',
    icon: createElement(FaExchangeAlt),
    question: '¿Se pueden reubicar los módulos una vez instalados?',
    answer:
      'Sí, diseñamos conexiones rápidas y estructuras atornilladas para que puedas reubicar tus módulos cuando el proyecto lo requiera.'
  }
];
