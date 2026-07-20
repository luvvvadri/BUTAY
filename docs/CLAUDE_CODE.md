# CLAUDE_CODE.md

> **Tipo de documento:** Transición técnica — puerta de entrada oficial para el desarrollo
> **Versión:** 1.1
> **Fecha de creación:** 2026-07-20
> **Última actualización:** 2026-07-20
> **Estado:** Final
> **Depende de:** WEB_HANDOFF.md; Brand Bible — Butay (v1.0); Product Strategy — Butay (v1.0); 00_SYSTEM_WORKFLOW.md (v1.0, Approved); DECISIONS.md

---

## Objetivo

Este documento es el punto de entrada técnico oficial para cualquier
sesión de Claude Code que trabaje en el desarrollo de la web de Butay.
Existe para que una sesión nueva —sin acceso al historial de
conversaciones anteriores— pueda reconstruir el contexto técnico
completo leyendo únicamente los documentos de esta carpeta.

No define identidad de marca (eso vive en el Brand Bible) ni estrategia
de producto (eso vive en Product Strategy). Define **cómo** se
construye la web: con qué stack, bajo qué principios, con qué
convenciones y con qué disciplina de proceso.

## Cuándo debe actualizarse

- Cuando se tome una decisión técnica de fondo (cambio de stack,
  cambio de arquitectura, nueva convención obligatoria).
- Al final de cada sesión de desarrollo relevante, si cambia algo que
  una sesión futura necesitaría saber.
- Nunca por conveniencia puntual de una tarea aislada.

## Reglas de uso

1. Es de lectura obligatoria antes de escribir una sola línea de
   código en el proyecto.
2. No sustituye al Brand Bible ni a Product Strategy — los resume
   técnicamente y remite a ellos para cualquier duda de fondo sobre
   marca o producto.
3. Las recomendaciones de stack y arquitectura de este documento son
   **técnicas**, no decisiones de marca: pueden ajustarse por Claude
   Code con justificación técnica, mientras no contradigan una
   restricción marcada como obligatoria.
4. Toda regla marcada como "obligatoria" en este documento no se salta
   sin aprobación explícita del fundador.

## Estructura preparada para crecer

Este documento crece por apartado, no por fragmentación en archivos
nuevos — sigue el mismo patrón de consolidación que el Brand Bible y
Product Strategy (Decisión 021). Si un apartado se vuelve
desproporcionadamente extenso frente al resto, se evalúa entonces
extraerlo como documento propio, nunca antes de que ese crecimiento sea
real.

## Buenas prácticas

- Releer este documento al empezar cada sesión nueva, no solo confiar
  en haberlo leído una vez.
- Si una convención de este documento entra en conflicto con una
  necesidad real del código, señalarlo explícitamente en vez de romper
  la convención en silencio.
- Cada apartado cierra con una **Síntesis** accionable, igual que en el
  resto de documentos raíz del proyecto.

---

## 1. Cómo debe trabajar Claude Code

Claude Code trabaja en Butay bajo la misma filosofía que ha gobernado
toda la documentación previa (`00_SYSTEM_WORKFLOW.md`, sección 1):
nunca improvisar, nunca generar código solo por completar una tarea,
y toda decisión técnica de fondo debe poder justificarse frente a este
documento, FRONTEND_ARCHITECTURE.md o DEVELOPMENT_ROADMAP.md.

Reglas de fondo:

- Antes de escribir código, comprobar que la tarea está contemplada en
  `DEVELOPMENT_ROADMAP.md`. Si no lo está, detenerse y preguntar antes
  de improvisar alcance nuevo.
- Ante cualquier duda sobre marca, mensaje o producto: consultar Brand
  Bible o Product Strategy antes de decidir por cuenta propia.
- Ante cualquier dato marcado `PENDIENTE DE DEFINIR` en `WEB_HANDOFF.md`
  o en Product Strategy: no inventarlo. Implementar la estructura de
  forma que admita esa decisión más adelante, y señalar el vacío en vez
  de rellenarlo.
- El fundador es la autoridad final también en decisiones técnicas de
  fondo (cambio de stack, arquitectura o alcance) — Claude Code propone
  y ejecuta, no decide unilateralmente cambios estructurales.

**Síntesis:** si una decisión de código no tiene justificación
rastreable a un documento de esta carpeta, no se implementa sin
preguntar primero.

## 2. Orden obligatorio de lectura de documentos

Antes de cualquier sesión de trabajo, en este orden:

1. `CONTEXT.md` — estado actual del proyecto.
2. `INDEX.md` — qué documentos existen y en qué estado.
3. Este documento, `CLAUDE_CODE.md`.
4. `WEB_HANDOFF.md` — resumen técnico de marca y producto.
5. `FRONTEND_ARCHITECTURE.md` — arquitectura técnica detallada.
6. `DEVELOPMENT_ROADMAP.md` — en qué fase del desarrollo se está y qué
   toca ahora.
7. Brand Bible y Product Strategy — solo las secciones relevantes para
   la tarea concreta, cuando `WEB_HANDOFF.md` no sea suficiente.

**Síntesis:** ninguna sesión escribe código antes de leer, como
mínimo, los puntos 1 a 4 de esta lista.

## 3. Documentos fuente

Fuente de verdad para cada tipo de información:

| Información | Documento fuente |
|---|---|
| Identidad de marca, tono, voz | Brand Bible — Butay (v1.0) |
| Estrategia de producto, catálogo, Product DNA | Product Strategy — Butay (v1.0) |
| Resumen técnico para desarrollo | WEB_HANDOFF.md |
| Metodología y proceso de trabajo | 00_SYSTEM_WORKFLOW.md |
| Decisiones de fondo y su razón | DECISIONS.md |
| Terminología del proyecto | GLOSSARY.md |
| Arquitectura técnica del frontend | FRONTEND_ARCHITECTURE.md |
| Plan de desarrollo y fases | DEVELOPMENT_ROADMAP.md |
| Estado actual del proyecto | CONTEXT.md |
| Mapa de todos los documentos | INDEX.md |

**Síntesis:** ante cualquier duda, hay exactamente un documento
responsable de la respuesta — nunca se decide por analogía si existe
una fuente directa.

## 4. Documentos que nunca debe modificar sin aprobación

Claude Code **no modifica** los siguientes documentos, salvo
instrucción explícita del fundador o para corregir una referencia rota
detectada y explicada primero:

- Brand Bible — Butay (`02_MARCA_brand_bible.md`) — `Approved`.
- Product Strategy — Butay (`03_PRODUCTO_product_strategy.md`) —
  `Approved`.
- Los cuatro documentos de Fase 1 (`01_ESTRATEGIA_*.md`) — `Congelado`.
- Los informes de cierre de fase (`02_MARCA_informe_cierre_fase2.md`,
  `03_PRODUCTO_informe_cierre_fase3.md`) — `Final`.
- `DECISIONS.md` — solo se añade (append-only), nunca se edita una
  entrada existente.
- `CHANGELOG.md` — solo se añade (append-only).

Claude Code **sí puede proponer actualizaciones** a `CONTEXT.md`,
`INDEX.md`, `GLOSSARY.md`, `CLAUDE_CODE.md`,
`FRONTEND_ARCHITECTURE.md` y `DEVELOPMENT_ROADMAP.md` cuando el
desarrollo lo justifique, siguiendo el estándar documental del
proyecto.

**Síntesis:** ante la duda de si un documento puede tocarse, la
respuesta por defecto es no — se pregunta antes de editar cualquier
documento de marca, producto o registro histórico.

## 5. Stack tecnológico recomendado

**Recomendación técnica** (no deriva de ninguna decisión de marca; se
justifica por los requisitos ya aprobados: SEO, rendimiento,
escalabilidad de catálogo, preparación para e-commerce e
internacionalización futura):

| Capa | Recomendación | Justificación |
|---|---|---|
| Framework | Next.js (App Router) | Renderizado híbrido (SSG/ISR/SSR) necesario para SEO real en páginas de catálogo y producto; ecosistema maduro para e-commerce headless futuro. |
| Lenguaje | TypeScript | El catálogo (Categoría → Colección → Drop → SKU → Variante) es una jerarquía de datos tipada por naturaleza; TypeScript reduce errores al modelarla. |
| Estilos | Tailwind CSS | Coherente con la filosofía de restricción y minimalismo del Brand Bible; permite fijar un sistema de diseño consistente por configuración, no por CSS libre. |
| Componentes UI base | Radix UI (primitivas accesibles) + componentes propios | Accesibilidad (teclado, foco, ARIA) resuelta en la base, sin depender de una librería de diseño visual que pueda imponer un estilo no acorde a la marca. |
| Animación | Framer Motion, uso restringido | El minimalismo de marca exige transiciones sutiles, no espectáculo — ver apartado 20. |
| Gestión de datos de catálogo | Capa de datos propia y tipada (ver FRONTEND_ARCHITECTURE.md); backend real de e-commerce **PENDIENTE DE DEFINIR** | La Fase 5 (Operaciones) y la Fase 6 no han decidido todavía backend de pedidos, pagos o inventario — no se asume una plataforma concreta. |
| Hosting | Vercel (o equivalente compatible con Next.js) | Alineado con el framework recomendado; despliegue simple, previsualizaciones por rama. |
| Internacionalización | `next-intl` o equivalente, integrado desde el inicio aunque solo se use un idioma al lanzamiento | El idioma de interfaz web está `PENDIENTE DE DEFINIR` (Brand Bible §8); construir sin capa de i18n obligaría a refactorizar cuando se decida. |

Ninguna de estas piezas es una decisión de marca: son recomendaciones
técnicas que Claude Code puede ajustar con justificación, siempre que
respete las restricciones marcadas como obligatorias en este
documento y en `WEB_HANDOFF.md`.

**Síntesis:** el stack recomendado es Next.js + TypeScript + Tailwind,
con capa de datos propia y tipada para el catálogo; el backend de
e-commerce real queda pendiente de una decisión de fase posterior, no
se asume ninguna plataforma.

## 6. Filosofía del desarrollo

Deriva directamente de la Filosofía de producto y el Brand Bible, y se
traduce a principios de código:

- **Restricción en la pieza, variedad en el conjunto** (Brand Bible
  §12) se traduce como: componentes simples e individualmente
  discretos; la riqueza vive en cómo se combinan (catálogo, colección),
  no en la complejidad de cada componente aislado.
- **El mensaje por encima del adorno** (Brand Bible §16) se traduce
  como: ninguna animación, transición o efecto visual debe competir con
  el contenido (frase del producto, mensaje de marca) por atención.
- **Sin ostentación** (Brand Bible, transversal) se traduce como: sin
  interfaces sobrecargadas, sin efectos "wow" gratuitos, sin patrones
  de diseño que impliquen urgencia o exclusividad (coherente con
  Product Strategy §6, §9 y `WEB_HANDOFF.md` apartado 12).
- **Durabilidad sobre tendencia** (Product Strategy §13.1) se traduce
  como: preferir patrones de código estables y bien establecidos frente
  a librerías o técnicas de moda pasajera.

**Síntesis:** cualquier decisión de código que priorice el espectáculo
visual, la urgencia de conversión o la complejidad innecesaria sobre la
claridad del mensaje contradice la filosofía del proyecto, aunque sea
técnicamente correcta.

## 7. Principios arquitectónicos

- **Separación estricta entre contenido de marca y código.** Textos de
  marca (manifiesto, mensajes, copy) se tratan como datos/contenido,
  nunca como literales hardcodeados dispersos por el código — facilita
  auditar coherencia con el Brand Bible y preparar traducciones futuras.
- **Modelo de datos fiel a la jerarquía aprobada.** Categoría →
  Colección → Drop (opcional) → SKU → Variante (Product Strategy §4,
  `WEB_HANDOFF.md` §5) se refleja literalmente en los tipos de datos,
  no se simplifica ni se reinterpreta.
- **Estados de colección y producto como ciudadanos de primera clase.**
  `permanente` / `temporal` para colecciones; `activo` / `archivado`
  para productos — nunca borrado real (Product Strategy §7,
  `WEB_HANDOFF.md` §5 y §12).
- **Preparado para crecer, no sobre-construido.** El catálogo de
  lanzamiento es pequeño (8-15 referencias, dos categorías), pero la
  arquitectura debe soportar más categorías y mercados sin reescritura
  (Product Strategy §11) — sin construir hoy funcionalidades que nadie
  ha pedido todavía.
- **Nada de deuda de marca oculta en el código.** Ninguna mecánica de
  urgencia, escasez o gamificación de fidelización se implementa nunca,
  ni siquiera "por si acaso" o "fácil de quitar después" — está
  prohibida por decisión de producto, no por preferencia estética
  (`WEB_HANDOFF.md` §12).

**Síntesis:** la arquitectura debe reflejar fielmente la jerarquía de
catálogo y los estados ya aprobados, prepararse para crecer sin
sobre-construir, y no debe permitir, ni siquiera de forma latente,
ninguna mecánica prohibida por Product Strategy.

## 8. Convenciones de código

- Nomenclatura en inglés para código (variables, funciones, tipos,
  nombres de archivo) — coherente con el idioma de la voz de marca y
  con el estándar habitual de desarrollo; comentarios de código pueden
  ser en español o inglés, con preferencia por inglés para consistencia
  con el resto del código.
- Componentes funcionales, tipados de extremo a extremo.
- Un componente, una responsabilidad — si un componente necesita
  explicarse con un "y también", se divide.
- Sin lógica de negocio dentro de componentes de presentación — se
  extrae a hooks o utilidades (ver FRONTEND_ARCHITECTURE.md).
- Formateo y linting automatizados (Prettier + ESLint), sin discusión
  de estilo caso a caso.

**Síntesis:** el código se nombra en inglés, se tipa siempre, y separa
presentación de lógica — cualquier componente que mezcle ambas cosas se
refactoriza antes de darse por terminado.

## 9. Estructura recomendada del proyecto

Ver `FRONTEND_ARCHITECTURE.md` para el detalle completo y su
justificación. Este apartado solo fija el principio rector: la
estructura de carpetas debe reflejar la jerarquía del catálogo y la
separación entre contenido de marca, lógica y presentación, no la
estructura interna de ningún framework por sí sola.

**Síntesis:** ante cualquier duda de dónde colocar un archivo nuevo, la
respuesta está en `FRONTEND_ARCHITECTURE.md`, no en la convención por
defecto de la herramienta usada.

## 10. Reglas de componentes

- Todo componente visual reutilizable vive en una capa de componentes
  base, independiente de cualquier página concreta.
- Ningún componente asume contenido de marca fijo (textos, mensajes) —
  los recibe como props o los lee de la capa de contenido, nunca
  hardcodeados dentro del componente.
- Todo componente que represente un producto debe soportar el atributo
  de visibilidad de mensaje (`protagonista` / `discreto` / `oculto`,
  Product DNA, `WEB_HANDOFF.md` §6) desde su diseño inicial, no como
  añadido posterior.
- Ningún componente implementa por defecto countdowns, badges de stock
  limitado con fines de presión de venta, ni elementos de
  gamificación — están prohibidos, no solo desaconsejados.

**Síntesis:** un componente que no pueda reutilizarse en al menos dos
contextos distintos, o que hardcodee contenido de marca, no está bien
diseñado todavía.

## 11. Reglas para reutilización

- Antes de crear un componente o utilidad nueva, comprobar si ya existe
  algo equivalente en la capa de componentes base o utilidades.
- Cualquier patrón usado tres o más veces se extrae a un componente o
  hook reutilizable — no se duplica una tercera vez.
- Las variantes de un mismo componente (tamaño, énfasis, estado) se
  resuelven por props/variantes tipadas, nunca copiando el componente
  entero para cambiar un detalle.

**Síntesis:** duplicar un patrón por tercera vez es siempre un error de
proceso, no una solución rápida válida.

## 12. Reglas de TypeScript

- `strict` mode activado desde el primer commit — no se relaja para
  avanzar más rápido.
- Prohibido `any` salvo justificación explícita en comentario y
  revisión posterior — usar `unknown` y afinar el tipo en su lugar.
- Los tipos del catálogo (Categoría, Colección, Drop, SKU, Variante,
  visibilidad de mensaje) se definen una sola vez, de forma centralizada
  (ver FRONTEND_ARCHITECTURE.md), y se importan — nunca se redefinen de
  forma local y ligeramente distinta en cada archivo.
- Los estados con valores fijos (`permanente`/`temporal`,
  `activo`/`archivado`, `protagonista`/`discreto`/`oculto`) se modelan
  como uniones de literales, no como `string` genérico.

**Síntesis:** si un tipo de catálogo se define en más de un sitio, es un
error a corregir, no una variación aceptable.

## 13. Reglas para Tailwind

- Toda decisión de color, tipografía y espaciado pasa por la
  configuración de Tailwind (`tailwind.config`), nunca por valores
  sueltos en clases arbitrarias, salvo excepción puntual justificada.
- Mientras la Fase 4 (Identidad Visual / Design System) no esté
  aprobada, la paleta y tipografía reales quedan `PENDIENTE DE
  DEFINIR` — se recomienda trabajar con una paleta neutra provisional
  (escala de grises + un acento) fácil de sustituir, nunca inventar una
  paleta de marca definitiva por cuenta propia.
- Clases utilitarias componen estilos; estilos repetidos tres o más
  veces se extraen a un componente o a una clase reutilizable vía
  `@apply`, no se copian y pegan.

**Síntesis:** ningún color o tipografía "de marca" se fija en Tailwind
hasta que exista una Fase 4 aprobada — hasta entonces, todo lo visual es
provisional y debe poder sustituirse sin tocar componentes.

## 14. Reglas SEO

Justificadas por la necesidad de descubribilidad del catálogo y del
mensaje de marca, no por ninguna decisión de marca específica:

- Renderizado en servidor (SSG/ISR) para páginas de catálogo, colección
  y producto — nunca contenido de producto renderizado solo en cliente.
- Metadatos únicos por página (título, descripción, imagen) generados a
  partir de los datos reales de producto/colección, nunca genéricos.
- URLs legibles y estables, reflejando la jerarquía del catálogo
  (categoría/colección/producto), preparadas para no romperse cuando un
  producto pase a `archivado` (Product Strategy §7).
- Datos estructurados (schema.org `Product`, `Organization`) desde el
  primer lanzamiento del catálogo.
- Un producto archivado nunca devuelve un 404 silencioso: se mantiene
  accesible o redirige de forma explícita, coherente con "archivar, no
  borrar".

**Síntesis:** ninguna página de catálogo o producto se lanza sin
metadatos propios y sin ser renderizada en servidor — el SEO no es una
fase posterior, es parte del criterio de terminado.

## 15. Reglas de accesibilidad

- Cumplimiento como mínimo de WCAG 2.1 AA en todo componente de la capa
  base.
- Navegación completa por teclado en catálogo, ficha de producto y
  cualquier interacción (filtros, variantes de talla/color).
- Contraste de color suficiente decidido como requisito, incluso antes
  de que exista una paleta de marca definitiva (Fase 4) — la paleta
  provisional debe cumplir contraste igualmente.
- Texto alternativo obligatorio en toda imagen de producto; nunca
  decorativo sin marcar como tal.
- Los tres niveles de visibilidad de mensaje (`protagonista` /
  `discreto` / `oculto`) deben ser igualmente accesibles para lectores
  de pantalla, no solo visualmente — un mensaje "oculto" visualmente no
  debe estar oculto para tecnología de asistencia salvo que así se
  decida explícitamente.

**Síntesis:** ningún componente se da por terminado si no es navegable
por teclado y no cumple contraste mínimo, aunque la paleta final de
marca todavía no exista.

## 16. Reglas de rendimiento

- Presupuesto de rendimiento orientativo: Core Web Vitals en verde
  (LCP, INP, CLS) en páginas de catálogo y producto, medido desde el
  primer despliegue, no al final del proyecto.
- Imágenes de producto optimizadas y servidas en formatos modernos
  (WebP/AVIF), con tamaños responsivos — el catálogo crecerá (Product
  Strategy §11), así que el coste de imagen por producto debe
  mantenerse bajo desde el inicio.
- Carga diferida (lazy loading) de todo contenido bajo el pliegue,
  especialmente en páginas de catálogo con múltiples productos.
- Sin animaciones ni librerías pesadas cargadas globalmente si solo se
  usan en una página — carga por ruta.

**Síntesis:** el rendimiento se mide desde el primer despliegue, no se
audita al final — un catálogo que crecerá no puede permitirse deuda de
rendimiento temprana.

## 17. Preparación para internacionalización

El idioma de interfaz de la web está explícitamente `PENDIENTE DE
DEFINIR` (Brand Bible §8, `WEB_HANDOFF.md` §8) — no se asume inglés ni
español por defecto. La arquitectura debe:

- Integrar una capa de i18n desde el inicio (ver apartado 5), aunque el
  lanzamiento use un único idioma.
- Mantener todo el contenido de marca (frases, mensajes, microcopy)
  fuera del código, en una capa de contenido/traducciones, para que
  añadir un idioma no requiera tocar componentes.
- Distinguir, como ya hace el Brand Bible (§8), entre voz de marca
  (inglés) y comunicación funcional con el cliente (potencialmente
  español en el mercado de lanzamiento) — estas dos capas de texto no
  deben mezclarse en el mismo sistema de traducción sin distinción.

**Síntesis:** se construye con capacidad de multi-idioma desde el
primer commit, sin decidir todavía cuántos ni cuáles idiomas de
interfaz habrá — esa decisión es de la Fase 6, no de Claude Code.

## 18. Preparación para e-commerce

El alcance funcional real de e-commerce (carrito, checkout, pasarela de
pago, cuentas de usuario) está `PENDIENTE DE DEFINIR` — `WEB_HANDOFF.md`
(§10, §11) no lo confirma todavía. La arquitectura debe, sin
implementar pagos reales:

- Modelar el catálogo (producto, variante, precio) de forma que
  añadir un carrito y checkout no requiera rediseñar el modelo de
  datos.
- Dejar un punto de extensión claro para un proveedor de pagos e
  inventario futuro, sin acoplar el frontend a una plataforma
  concreta todavía.
- No implementar ningún flujo de compra real, countdown de stock, ni
  gestión de inventario en tiempo real mientras no exista una decisión
  formal — coherente con las restricciones ya fijadas.

**Síntesis:** se deja la puerta abierta a e-commerce real sin
construirlo ni elegir proveedor todavía — eso depende de una decisión
de la Fase 5/6 que no se ha tomado.

## 19. Gestión del estado

- Estado de servidor (datos de catálogo, productos) gestionado con
  fetching y cacheo propios de Next.js (Server Components / React
  Query si se necesita estado de cliente adicional) — no se duplica
  estado de servidor en estado global de cliente sin necesidad.
- Estado de cliente (filtros de catálogo, carrito futuro, preferencias
  de UI) se mantiene lo más local posible; solo se eleva a estado
  global compartido cuando de verdad lo necesitan varias partes de la
  interfaz no relacionadas jerárquicamente.
- Nunca se persiste estado de negocio sensible (carrito, sesión) en
  almacenamiento del navegador sin una decisión explícita de la Fase
  de e-commerce.

**Síntesis:** el estado se mantiene lo más simple y local posible; se
introduce una librería de estado global solo cuando la necesidad es
real, nunca por adelantado.

## 20. Animaciones

Coherente con la Filosofía del desarrollo (apartado 6):

- Animaciones sutiles, funcionales (transiciones de estado, feedback de
  interacción), nunca decorativas por sí solas.
- Ninguna animación debe retrasar la lectura del mensaje o la frase de
  un producto — el contenido aparece primero, la animación lo
  acompaña, no lo precede.
- Prohibidas explícitamente las animaciones que generen sensación de
  urgencia (countdowns animados, parpadeos de "últimas unidades") —
  coherente con el rechazo a la escasez artificial (Product Strategy
  §6, §9).
- Respeto obligatorio de `prefers-reduced-motion`.

**Síntesis:** toda animación debe poder justificarse como ayuda a la
comprensión, nunca como espectáculo — y debe poder desactivarse.

## 21. Testing & Quality Assurance

Principios técnicos, sin imponer herramientas concretas — la elección
de framework de testing queda a criterio técnico de cada sesión,
mientras respete estos principios.

- **Testing unitario.** Toda función pura de `/lib` y todo hook de
  `/hooks` con lógica no trivial debe ser testeable de forma aislada,
  sin depender de red ni de estado global — es una consecuencia directa
  de mantenerlos puros (apartados 8-9 de `FRONTEND_ARCHITECTURE.md`),
  no una carga añadida.
- **Testing de componentes.** Los componentes base (`/components/ui`)
  se prueban de forma aislada, verificando estados, variantes y
  accesibilidad (foco, roles ARIA) — no su integración con datos reales
  de catálogo, que se prueba en otro nivel.
- **Testing E2E.** Cubre los flujos críticos ya definidos: navegación
  del catálogo, filtrado, ficha de producto y selección de variante.
  No cubre checkout ni pagos mientras esa funcionalidad siga
  `PENDIENTE DE DEFINIR` (apartado 18).
- **Testing manual.** Reservado para lo que el testing automatizado no
  puede verificar bien: coherencia de tono en contenido renderizado,
  calidad visual real, y verificación manual de accesibilidad con
  lector de pantalla antes de cada release relevante.
- **Accesibilidad.** Verificación automatizada (auditoría de
  accesibilidad integrada en CI) como mínimo, complementada con
  verificación manual periódica — nunca solo una de las dos.
- **Rendimiento.** Medición de Core Web Vitals como parte del proceso
  de verificación antes de cada despliegue relevante, no solo de forma
  puntual — coherente con el apartado 16 ("el rendimiento se mide desde
  el primer despliegue").
- **Responsive.** Verificación en al menos tres anchos de referencia
  (móvil, tablet, escritorio) para cualquier página o componente nuevo,
  antes de considerarlo terminado.
- **Revisión antes de producción.** Ningún cambio pasa a producción sin:
  build sin errores ni warnings de tipado; linting limpio; los tests
  automatizados existentes en verde; verificación manual de que ninguna
  mecánica prohibida (apartado 18, `WEB_HANDOFF.md` §12) se ha
  introducido de forma accidental.

**Síntesis:** el testing no es una fase aparte al final — está
integrado en los mismos criterios de terminado de cada apartado de este
documento; ningún desarrollo se da por terminado solo porque "funciona
en local".

## 22. Security & GDPR

Checklist técnico, no política legal — todo lo siguiente son
**recomendaciones técnicas** a aplicar mientras no exista una política
legal formal de Butay (fuera del alcance de este documento).

- **Variables de entorno.** Ninguna clave, token o credencial se
  escribe nunca en el código fuente ni se sube al repositorio — se
  gestionan siempre como variables de entorno, separadas por entorno
  (desarrollo/previsualización/producción).
- **Gestión de secretos.** Los secretos de producción se gestionan a
  través del proveedor de hosting/CI, nunca compartidos por canales no
  seguros ni documentados en texto plano en ningún archivo del
  proyecto.
- **Cookies.** Ninguna cookie no esencial (analítica, marketing) se
  activa antes de que exista una decisión explícita de qué herramienta
  de analítica se usa y un mecanismo de consentimiento — hoy no hay
  decisión tomada, por lo que no debe haber cookies no esenciales
  todavía.
- **Consentimiento RGPD.** Recomendación técnica: dejar preparado un
  punto de integración para un banner/gestor de consentimiento desde el
  inicio, aunque no se active hasta que exista analítica o tracking
  real que lo requiera — evita tener que añadirlo con prisa más
  adelante.
- **Datos personales.** Mientras no exista backend de e-commerce
  (apartado 18, `PENDIENTE DE DEFINIR`), la web no debe recoger ni
  almacenar datos personales de clientes más allá de lo estrictamente
  funcional (por ejemplo, un formulario de contacto) — y ese mínimo
  debe transmitirse de forma cifrada (HTTPS) y no persistirse sin
  necesidad clara.
- **Almacenamiento.** Ningún dato sensible (futuro carrito, sesión,
  datos de cliente) se persiste en almacenamiento del navegador sin
  cifrado y sin una decisión explícita de la fase de e-commerce — ver
  también `FRONTEND_ARCHITECTURE.md` (gestión de estado).
- **Autenticación futura.** No implementada todavía (no hay cuentas de
  usuario en el alcance actual). Recomendación técnica si se
  implementa más adelante: usar un proveedor de autenticación
  establecido en vez de construir gestión de contraseñas propia, y
  aplicar el principio de mínimo privilegio desde el diseño inicial.
- **Buenas prácticas de seguridad frontend.** Cabeceras de seguridad
  HTTP estándar (CSP, HSTS, X-Frame-Options o equivalentes del
  framework); sanitización de cualquier contenido que provenga de una
  fuente externa antes de renderizarlo; dependencias mantenidas al día
  mediante auditoría automatizada.

**Síntesis:** ninguna de estas prácticas requiere que exista todavía una
política de privacidad formal — son medidas técnicas preventivas que
evitan tener que reescribir código cuando esa política llegue.

## 23. Documentación de cambios

- Todo cambio técnico relevante (nueva convención, cambio de stack,
  decisión de arquitectura) se registra en `CHANGELOG.md`, siguiendo su
  estándar append-only.
- Toda decisión técnica de fondo (no un simple cambio de redacción) se
  registra en `DECISIONS.md`, con alternativas consideradas y razón —
  mismo estándar que el resto del proyecto.
- `FRONTEND_ARCHITECTURE.md` se actualiza cuando la arquitectura real
  diverge de lo documentado — nunca se deja que el código y el
  documento se desincronicen en silencio.

**Síntesis:** si un cambio técnico no queda registrado en el sistema
documental, para el proyecto no ha ocurrido — mismo principio que rige
el resto de Butay.

## 24. Metodología de trabajo

Claude Code sigue el mismo espíritu de `00_SYSTEM_WORKFLOW.md`,
adaptado a desarrollo:

1. Comprender la tarea dentro del `DEVELOPMENT_ROADMAP.md`.
2. Si la tarea no está prevista, detenerse y confirmar alcance antes de
   construir.
3. Implementar siguiendo este documento y `FRONTEND_ARCHITECTURE.md`.
4. Revisar el propio trabajo antes de darlo por terminado (coherencia
   con convenciones, accesibilidad, rendimiento, SEO).
5. Documentar cualquier cambio relevante (apartado 21).

**Síntesis:** ninguna tarea de desarrollo se da por terminada sin haber
pasado por su propia revisión de coherencia con este documento.

## 25. Qué hacer al comenzar una sesión

1. Leer `CONTEXT.md` e `INDEX.md`.
2. Leer este documento si ha pasado más de una sesión desde la última
   lectura.
3. Revisar `DEVELOPMENT_ROADMAP.md` para confirmar en qué fase de
   desarrollo se está y qué tarea sigue.
4. Comprobar `CHANGELOG.md` reciente por si algo cambió desde la última
   sesión.
5. Si algo no encaja con lo esperado, detenerse y preguntar antes de
   continuar — nunca asumir.

**Síntesis:** ninguna sesión empieza a programar sin confirmar primero
en qué fase del roadmap está el proyecto.

## 26. Qué hacer antes de terminar una sesión

1. Confirmar que el código cumple las reglas de este documento
   (componentes, tipado, accesibilidad, rendimiento, SEO).
2. Actualizar `CONTEXT.md` si el estado general del proyecto cambió.
3. Actualizar `DEVELOPMENT_ROADMAP.md` si una fase avanzó o se
   completó.
4. Registrar en `CHANGELOG.md` (y en `DECISIONS.md` si aplica) lo que
   se hizo.
5. Dejar explícitamente anotado cualquier bloqueo o decisión pendiente
   para la siguiente sesión — nunca dejarlo solo en la memoria de la
   conversación.

**Síntesis:** una sesión no termina hasta que el estado del proyecto en
los documentos coincide con el estado real del código.

---

## Bloque de cierre estándar

**Dependencias:** WEB_HANDOFF.md; Brand Bible — Butay (v1.0); Product
Strategy — Butay (v1.0); 00_SYSTEM_WORKFLOW.md; DECISIONS.md;
GLOSSARY.md.

**Documentos derivados:** FRONTEND_ARCHITECTURE.md (desarrolla en
detalle el apartado 9); DEVELOPMENT_ROADMAP.md (desarrolla en detalle
la ejecución de este documento por fases).

**Decisiones relacionadas:** 005, 006, 009, 013, 014, 016, 017, 018,
019, 020, 021, 022, 023, 024 (ver DECISIONS.md para el detalle
completo).

**Estado del documento:** Final. Fuente técnica definitiva para
cualquier sesión de Claude Code, junto con FRONTEND_ARCHITECTURE.md y
DEVELOPMENT_ROADMAP.md.

**Próxima fase recomendada:** Iniciar `DEVELOPMENT_ROADMAP.md`, Fase 1
(Configuración del proyecto), una vez el fundador confirme que el
proyecto está listo para empezar a programar.
