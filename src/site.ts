// Datos del sitio: una sola fuente para cabecera, portada, contacto y pie.
// Todo lo marcado PENDIENTE sale de fuentes públicas (web antigua, Instagram, Google Maps)
// y hay que confirmarlo con la clínica antes de publicar la web definitiva.
export const SITE = {
  name: 'Clínicas FASE-Valtodent',
  company: 'Valtodent S.L.U.', // PENDIENTE: confirmar razón social.
  title: 'Clínicas FASE-Valtodent | Dentista y especialidades en Valdetorres de Jarama',
  description:
    'Clínica dental, ginecología, podología, logopedia, psicología y medicina de familia en Valdetorres de Jarama (Madrid).',
  // Preview: no indexar hasta publicar la web definitiva.
  noindex: true,

  // PENDIENTE: confirmar teléfonos y si el móvil tiene WhatsApp.
  phone: '+34918415042',
  phoneDisplay: '91 841 50 42',
  mobile: '+34672095938',
  mobileDisplay: '672 09 59 38',
  whatsappUrl: null as string | null, // p. ej. 'https://wa.me/34672095938' cuando se confirme.

  // PENDIENTE: confirmar dirección exacta.
  address: {
    street: 'C/ Madrid, 41',
    postalCode: '28150',
    city: 'Valdetorres de Jarama',
    region: 'Madrid',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnicas+FASE+Valdetorres+de+Jarama',
  // Mapa de OpenStreetMap (sin cookies). Coordenadas de la ficha de Google Maps.
  map: { lat: 40.6954632, lon: -3.5131061 },

  // PENDIENTE: horario sacado de la web antigua.
  hours: [{ days: 'Lunes a viernes', time: '9:30–14:00 y 15:30–20:30' }],

  // PENDIENTE: número de registro sanitario del centro (obligatorio en la web definitiva).
  healthRegistry: null as string | null,

  instagramUrl: 'https://www.instagram.com/clinicasfasevaltodent/',
} as const;

export const NAV = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Contacto', href: '#contacto' },
] as const;

// PENDIENTE: confirmar qué especialidades siguen ofreciendo.
export const DENTAL = [
  { icon: 'dental', title: 'Odontología general', text: 'Revisiones, limpiezas, empastes y prevención para cuidar tu boca todo el año.' },
  { icon: 'sparkles', title: 'Estética dental', text: 'Blanqueamiento, carillas y contorneado gingival para una sonrisa natural.' },
  { icon: 'mood-kid', title: 'Odontología infantil', text: 'Primeras visitas y revisiones para los más pequeños, con calma y sin prisas.' },
  { icon: 'mood-smile', title: 'Ortodoncia e Invisalign', text: 'Ortodoncia tradicional y alineadores transparentes para niños y adultos.' },
  { icon: 'dental-broken', title: 'Implantología', text: 'Reposición de piezas dentales con implantes para recuperar función y estética.' },
] as const;

export const HEALTH = [
  { icon: 'gender-female', title: 'Ginecología', text: 'Revisiones, planificación familiar y anticoncepción, en cada etapa de tu vida.' },
  { icon: 'footsteps', title: 'Podología', text: 'Cuidado de los pies y tratamiento de durezas, uñas y molestias al caminar.' },
  { icon: 'messages', title: 'Logopedia', text: 'Habla, lenguaje y dificultades del aprendizaje, en niños y adultos.' },
  { icon: 'brain', title: 'Psicología', text: 'Un espacio de escucha para la ansiedad, el estrés, el duelo y otras etapas difíciles.' },
  { icon: 'stethoscope', title: 'Medicina general y de familia', text: 'Atención médica para toda la familia, sin salir del pueblo.' },
] as const;

// Sin cifras inventadas: nada de años, pacientes ni valoraciones hasta que lo confirme la clínica.
export const REASONS = [
  { icon: 'map-pin', title: 'Cerca de casa', text: 'En el centro de Valdetorres de Jarama. Sin desplazarte a Madrid.' },
  { icon: 'users', title: 'Toda la familia', text: 'De los más pequeños a los mayores, en un mismo sitio.' },
  { icon: 'heart-handshake', title: 'Atención cercana', text: 'Te escuchamos y te explicamos cada paso con calma.' },
  { icon: 'clock', title: 'Mañana y tarde', text: 'Horario partido de lunes a viernes para que encuentres tu hueco.' },
] as const;
