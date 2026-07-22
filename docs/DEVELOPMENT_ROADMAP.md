# DEVELOPMENT_ROADMAP.md

> **Tipo de documento:** Plan técnico de desarrollo
> **Versión:** 1.9
> **Fecha de creación:** 2026-07-20
> **Última actualización:** 2026-07-22
> **Estado:** Final (vivo en su seguimiento — el estado de cada fase se actualiza a medida que avanza el desarrollo)
> **Depende de:** CLAUDE_CODE.md; FRONTEND_ARCHITECTURE.md; WEB_HANDOFF.md

---

## Objetivo

Dividir el desarrollo de la web de Butay en fases técnicas concretas,
desde la configuración inicial del proyecto hasta una primera versión
lista para producción. Este documento **no habla de branding**: asume
que la identidad de marca y la estrategia de producto ya están
definidas (Brand Bible, Product Strategy) y se limita a cómo y en qué
orden se construye la web.

## Cuándo debe actualizarse

- Al completar una fase: se marca su estado y se registra en
  `CHANGELOG.md`.
- Si el orden o el alcance de una fase cambia por una razón técnica
  real (no por conveniencia puntual).
- Al aprobarse la Fase 4 del proyecto (Identidad Visual), que puede
  añadir una fase técnica de "aplicación del Design System real" no
  prevista aquí porque todavía no existe.

## Reglas de uso

1. No se empieza una fase sin haber cumplido las dependencias y leído
   los documentos necesarios de la fase anterior.
2. Ninguna fase se da por terminada si no cumple sus criterios de
   finalización — "funciona en local" no es un criterio de
   finalización por sí solo.
3. Este roadmap es técnico: si una fase necesitara una decisión de
   marca o producto no tomada todavía, se detiene y se pregunta, no se
   improvisa.

## Estado de avance

| Fase | Estado |
|---|---|
| 1 — Configuración del proyecto | Completa |
| 2 — Fundamentos visuales provisionales | Completa |
| 3 — Sistema de componentes base | Completa |
| 4 — Modelo de datos y capa de catálogo | Completa |
| 5 — Layouts y navegación | Completa |
| 6 — Páginas de catálogo | Completa |
| 7 — Ficha de producto | Pendiente (base sustancial ya construida — ver nota) |
| 8 — Contenido editorial de marca | Pendiente (estructura ya construida con copy de prueba — ver nota) |
| 9 — Internacionalización | Pendiente |
| 10 — SEO y rendimiento | Pendiente |
| 11 — Accesibilidad | Pendiente |
| 12 — Preparación para e-commerce | Pendiente |
| 13 — QA final y preparación para producción | Pendiente |

---

## Fase 1 — Configuración del proyecto

**Objetivo.** Dejar el proyecto técnico inicializado: framework,
lenguaje, estilos, linting, formateo y estructura de carpetas de
`FRONTEND_ARCHITECTURE.md` ya creados y funcionando.

**Dependencias.** Ninguna — es la fase inicial.

**Documentos necesarios.** `CLAUDE_CODE.md`, `FRONTEND_ARCHITECTURE.md`.

**Entregables.** Proyecto Next.js + TypeScript + Tailwind inicializado;
ESLint y Prettier configurados; estructura de carpetas del apartado 2
de `FRONTEND_ARCHITECTURE.md` creada (aunque vacía); repositorio con
control de versiones; pipeline de despliegue básico (previsualización
por rama).

**Criterios de finalización.** El proyecto arranca en local y en un
entorno de previsualización; la estructura de carpetas existe y
coincide con `FRONTEND_ARCHITECTURE.md`; linting y formateo se
ejecutan sin errores en un proyecto vacío.

**Estado (actualizado 2026-07-21).** **Completa.** Todos los
entregables están cumplidos y verificados:
- Proyecto Next.js 16 (App Router) + TypeScript (`strict` activado) +
  Tailwind CSS v4 inicializado en `butay-web/`.
- ESLint y Prettier configurados e integrados sin conflicto de reglas.
- Estructura de carpetas de `FRONTEND_ARCHITECTURE.md` (apartado 2)
  creada.
- Repositorio Git inicializado en la raíz del proyecto (Decisión 025),
  conectado a GitHub (`github.com/luvvvadri/BUTAY`, rama `main`) y con
  historial empujado (`git push`).
- Pipeline de despliegue conectado: proyecto importado en Vercel desde
  el repositorio de GitHub, con "Root Directory" apuntando a
  `butay-web/`. Despliegue de producción verificado en vivo en
  `https://butay.vercel.app/` (confirmado por fetch directo de la
  página el 2026-07-21, sirviendo el contenido esperado). Vercel genera
  automáticamente un Preview Deployment por cada push a una rama
  distinta de `main` y por cada Pull Request — comportamiento por
  defecto de la integración GitHub↔Vercel una vez conectada, no
  requiere configuración adicional; no se ha ejecutado una prueba en
  vivo de un push a una rama secundaria dentro de esta sesión de
  cierre.

`npm run lint`, `npm run format:check` y `npm run build` se ejecutan
sin errores; el proyecto arranca en local y en producción. Se cumplen
todos los criterios de finalización de esta fase.

## Fase 2 — Fundamentos visuales provisionales

**Objetivo.** Definir tokens de diseño (color, tipografía, espaciado)
**provisionales**, ya que la Fase 4 del proyecto (Identidad Visual /
Design System) todavía no existe. No es "hacer el Design System de
Butay" — es dejar una base neutra y sustituible.

**Dependencias.** Fase 1 completa.

**Documentos necesarios.** `FRONTEND_ARCHITECTURE.md` (apartados 13-15).

**Entregables.** Configuración de Tailwind con paleta neutra
provisional (escala de grises + un acento), tipografía de sistema o
variable cargada de forma performante, envoltorio propio de
iconografía.

**Criterios de finalización.** Ningún color, fuente o icono se usa
directamente desde una librería externa sin pasar por esta capa de
tokens/envoltorio; el conjunto cumple contraste mínimo de
accesibilidad (`CLAUDE_CODE.md`, apartado 15) aunque sea provisional.

**Estado (actualizado 2026-07-21).** **Completa.** Todos los
entregables están cumplidos y verificados. Trabajado en
`feature/fase-2-foundations` (PR #1), fusionado a `main` el
2026-07-21:
- Tokens de color: `src/styles/tokens.css` define un acento provisional
  (`#4f46e5`, contraste ~6.3:1 sobre blanco, cumple WCAG AA) y un par
  semántico fondo/texto; la escala de grises reutiliza directamente la
  paleta `neutral` nativa de Tailwind (sin redefinirla) — aplicada de
  forma consistente en todo el proyecto tras la revisión del PR.
- Tipografía: fuente variable Geist (ya cargada vía `next/font` desde la
  Fase 1) formalizada como provisional; se corrigió además un bug real
  donde `body` nunca llegaba a aplicarla (font-family quedaba fija en
  Arial/Helvetica).
- Envoltorio de iconografía: `src/components/ui/icon.tsx` consume
  iconos por nombre (`<Icon name="arrow-right" />`) a través de un
  registro interno — ningún otro archivo del proyecto importa
  `lucide-react` directamente, tras rediseñarlo tras la revisión del
  PR para que la Fase 4 pueda sustituir el set completo tocando un solo
  archivo.
- Ningún valor visual definitivo de marca: todos los tokens están
  explícitamente comentados como provisionales en el propio código.

`npm run lint`, `npm run format:check` y `npm run build` se ejecutan
sin errores. Se cumplen todos los criterios de finalización de esta
fase.

## Fase 3 — Sistema de componentes base

**Objetivo.** Construir la capa de componentes reutilizables sin
conocimiento de marca ni de catálogo (botón, input, badge, modal,
tarjeta genérica), según los tres niveles descritos en
`FRONTEND_ARCHITECTURE.md` (apartado 4).

**Dependencias.** Fase 2 completa.

**Documentos necesarios.** `CLAUDE_CODE.md` (apartados 10-12),
`FRONTEND_ARCHITECTURE.md` (apartado 4).

**Entregables.** Componentes base documentados (props, variantes,
estados), accesibles por teclado, con contraste verificado.

**Criterios de finalización.** Cada componente base se ha usado en al
menos un caso de prueba real (no solo aislado); ninguno depende de
datos de catálogo ni de contenido de marca específico.

**Estado (actualizado 2026-07-21).** **Completa.** Trabajado en
`feature/fase-3-component-system`. Entregables:
- **Infraestructura de testing** (previamente inexistente): Vitest +
  React Testing Library + jest-dom + user-event, `npm run test` /
  `test:watch`.
- **Componentes base** en `src/components/ui/`, los cinco nombrados
  explícitamente en `FRONTEND_ARCHITECTURE.md` §4.1 (botón, input,
  badge, modal, tarjeta genérica) más los primitivos de layout y
  tipografía: `Container`, `Stack`, `Grid`, `Section`, `Typography`,
  `Button`, `Link`, `Badge`, `Card`, `Input`, `Modal` (además del
  `Icon` ya existente de la Fase 2). `Navbar`/`Footer`/`Layout`
  deliberadamente excluidos — pertenecen a la Fase 5 (Layouts y
  navegación), no a esta.
- **Modal** envuelve `@radix-ui/react-dialog` (foco, Escape, retorno de
  foco, ARIA) en vez de reimplementar accesibilidad de diálogo a mano —
  coherente con la recomendación explícita de `CLAUDE_CODE.md` §5.
- **Utilidades compartidas**: `lib/cn.ts` (combinador de clases),
  `lib/spacing.ts` (escala de espaciado tipada, mapeada a clases
  Tailwind literales para el escaneo JIT).
- Ningún componente depende de datos de catálogo ni de contenido de
  marca — todos reciben contenido por props. Ninguno implementa
  countdowns, badges de stock limitado ni gamificación.
- 44 tests, incluidas dos pruebas de composición (todos los
  primitivos de layout juntos; los nueve componentes de contenido/
  interacción juntos en un layout realista con interacción de teclado
  y clic real) — cumple el criterio "no solo aislado".
- Accesibilidad: navegación completa por teclado verificada por test
  (tab, Enter, Escape); contraste de los tokens existentes ya
  verificado en la Fase 2 (acento ~6.3:1); los tonos nuevos
  (`neutral-600`/`700` sobre fondo claro, `red-600` para error) están
  dentro de los rangos de contraste bien documentados de esas escalas
  de Tailwind — no se ejecutó una auditoría automatizada de contraste
  (p. ej. axe) en esta fase; queda como mejora recomendada para la
  Fase 11 (Accesibilidad).

`npm run lint`, `npm run format:check`, `npm run test` y `npm run
build` se ejecutan sin errores. Se cumplen los criterios de
finalización de esta fase.

## Fase 4 — Modelo de datos y capa de catálogo

**Objetivo.** Implementar los tipos y la capa de datos del catálogo:
Categoría, Colección (permanente/temporal), Drop, SKU, Variante,
visibilidad de mensaje y estado de producto (activo/archivado),
siguiendo `FRONTEND_ARCHITECTURE.md` (apartados 10-11) y Product
Strategy §4-§7.

**Dependencias.** Fase 1 completa (puede avanzar en paralelo a las
Fases 2-3).

**Documentos necesarios.** Product Strategy — Butay (§3, §4, §5, §7),
`WEB_HANDOFF.md` (§5, §6), `FRONTEND_ARCHITECTURE.md` (apartado 10).

**Entregables.** Tipos centralizados en `/types`; datos de catálogo de
prueba (8-15 referencias ficticias o reales, dos categorías) cargados a
través de la capa `/data`; funciones de acceso a catálogo (listar por
categoría, por colección, por estado).

**Criterios de finalización.** Es imposible, a nivel de tipos, crear un
producto sin estado activo/archivado, o una colección sin distinguir
permanente/temporal; los datos de prueba cubren los tres niveles de
visibilidad de mensaje.

**Estado (actualizado 2026-07-21).** **Completa.** Trabajado en
`feature/fase-4-catalog-data-layer`. Entregables:
- **Tipos centralizados** en `src/types/catalog.ts`: `Category`,
  `Collection` (`type: 'permanent' | 'temporary'`, campo obligatorio),
  `Drop` (opcional por colección), `Sku` (`status: 'active' |
  'archived'`, campo obligatorio — nunca `deleted`, coherente con
  "archivar, no borrar" de Product Strategy §7), `Variant`
  (`size`/`color` como `string` libre, no unión de literales, porque
  fit/silueta/tallaje sigue `PENDIENTE DE DEFINIR` en Product Strategy
  §4) y `MessageVisibility` (`'featured' | 'subtle' | 'hidden'`).
  `status` y `type` son campos obligatorios, no opcionales: el
  compilador impide crear un `Sku` sin estado o una `Collection` sin
  distinguir permanente/temporal — cumple el criterio de finalización
  a nivel de tipos, no solo por convención.
- **Datos de prueba** en `src/data/` (`categories.ts`, `collections.ts`,
  `drops.ts`, `products.ts`): 10 SKUs ficticios (dentro del rango 8-15
  de Product Strategy §4) repartidos entre las dos categorías de
  lanzamiento (camisetas, sudaderas), una colección permanente y una
  temporal con un drop, los tres niveles de visibilidad de mensaje
  representados, y un producto archivado (accesible por
  `getSkusByStatus('archived')`, no eliminado). Nombres y mensajes son
  marcadores de prueba, no copy de marca aprobado — documentado como
  tal en cada archivo para que ninguna sesión futura los confunda con
  contenido real.
- **Funciones de acceso** tipadas: `getCategories`/`getCategoryBySlug`,
  `getCollections`/`getCollectionBySlug`, `getDrops`/`getDropBySlug`,
  `getSkus`/`getSkuBySlug`/`getSkusByCategory`/`getSkusByCollection`/
  `getSkusByStatus`.
- 19 tests nuevos (63 en total en el proyecto) verifican los
  entregables: rango de tamaño del catálogo, referencias cruzadas
  válidas entre SKU/categoría/colección/drop, cobertura de los tres
  niveles de visibilidad, alcanzabilidad del producto archivado, y el
  comportamiento de cada función de acceso.
- La capa `/data` está aislada de `/types` (dato vs. contrato,
  `FRONTEND_ARCHITECTURE.md` §2) para poder sustituir los datos locales
  por un backend real sin tocar los tipos ni los componentes que los
  consuman en fases futuras.

`npm run lint`, `npm run format:check`, `npm run test` (63/63), `npx
tsc --noEmit` y `npm run build` se ejecutan sin errores. Se cumplen
todos los criterios de finalización de esta fase.

## Fase 5 — Layouts y navegación

**Objetivo.** Construir el layout raíz (header, footer, navegación
global) y cualquier layout específico necesario, según
`FRONTEND_ARCHITECTURE.md` (apartado 5), y la estructura de rutas del
apartado 6.

**Dependencias.** Fases 3 y 4 completas.

**Documentos necesarios.** `FRONTEND_ARCHITECTURE.md` (apartados 5-6).

**Entregables.** Layout raíz funcional; navegación entre catálogo,
colecciones y contenido editorial; estructura de rutas creada (aunque
las páginas internas estén vacías o con contenido de prueba).

**Criterios de finalización.** La navegación completa es posible por
teclado; las rutas siguen la jerarquía de catálogo definida, no una
estructura de menú arbitraria.

**Estado (actualizado 2026-07-21).** **Completa.** Trabajado en
`feature/fase-5-layouts-navigation`. Entregables:
- **Layout raíz funcional**: `Header` (wordmark de texto — sin logo
  definitivo, Fase 4 de marca sigue en borrador —, navegación),
  `AnnouncementBar` (slot estructural, inactivo por defecto, sin
  contenido aprobado) y `Footer`, envolviendo `{children}` en
  `src/app/layout.tsx`.
- **Componentes nuevos de nivel 1** (`src/components/ui/`): `Drawer`
  (mismo patrón de `Modal` — Radix Dialog, foco, Escape — anclado a un
  lateral), `Breadcrumb` (agnóstico de catálogo, recibe
  `{label, href}[]`), `EmptyState`. Icono `menu` añadido al registro de
  `Icon`.
- **Componentes nuevos de layout** (`src/components/layout/`): `Header`,
  `Footer`, `Navigation` (única fuente de enlaces, renderizada de forma
  responsive — nav horizontal en escritorio, `Drawer` en móvil; sin
  entrada "Collections" porque no existe una ruta índice aprobada para
  ella, solo `/collections/[collection]`), `NavLink` (compone `Link`
  con `usePathname()` para `aria-current` y estado activo),
  `AnnouncementBar`.
- **Estructura de rutas** según `FRONTEND_ARCHITECTURE.md` §6, usando
  route groups: `(site)` (`/`, `/manifesto`, sin Breadcrumb) y `(shop)`
  (`/catalog`, `/catalog/[category]`, `/collections/[collection]`,
  `/product/[sku]`, `/archive`, con Breadcrumb). Los ítems de
  Breadcrumb se construyen en `src/lib/breadcrumb.ts`, que traduce
  datos de la capa `/data` (Fase 4) a la forma genérica que el
  componente espera — el componente en sí nunca lee `/data`.
- **Estados**: `loading.tsx`/`error.tsx`/`not-found.tsx` raíz,
  `loading.tsx` de catálogo con skeletons, `EmptyState` reutilizado en
  catálogo/categoría/colección/archivo, `notFound()` en categoría y
  colección para slugs inexistentes. Los productos archivados **nunca**
  devuelven 404 en `/product/[sku]` — siguen consultables con una
  insignia "Archived" (Product Strategy §7).
- **SEO — solo andamiaje**: `robots.ts` y `sitemap.ts`, generados
  íntegramente desde `/data` (categorías, colecciones, productos
  activos); sin copy ni optimización real (Fase 10). `metadata` con
  plantilla de título (`%s — Butay`) en el layout raíz.
- **Integración con la Fase 4**: todas las páginas de `(shop)` consumen
  exclusivamente las funciones de acceso ya existentes
  (`getSkus`/`getSkusByCategory`/`getSkusByCollection`/`getSkusByStatus`/
  `getSkuBySlug`, análogas de categorías/colecciones/drops) — ningún
  producto hardcodeado.
- **Interpretación de alcance documentada**: no existe una ruta
  `/drops` dedicada — no está en `FRONTEND_ARCHITECTURE.md` §6 y un
  Drop es un nivel opcional dentro de una Colección (Product Strategy
  §6), no un nivel de navegación propio. Un Drop activo se muestra
  como sección dentro de `/collections/[collection]`.
- **Fuera de alcance deliberadamente** (pertenece a la Fase 6 —
  "Páginas de catálogo" — y a la Fase 7 — "Ficha de producto"): ningún
  componente de dominio nuevo (`components/product`), ninguna tarjeta
  de producto dedicada ni diseño visual pulido — las páginas de
  `(shop)` usan directamente los primitivos ya existentes de la Fase 3
  (`Card`, `Grid`, `Link`, `Typography`) para demostrar que rutas y
  datos funcionan, sin adelantar trabajo de esas fases.
- 34 archivos de test, 109 tests en total (46 nuevos desde el cierre de
  la Fase 4), incluidos los de navegación por teclado (apertura/cierre
  del `Drawer`, estado activo de `NavLink`), integridad referencial de
  `Breadcrumb`, y comportamiento de `notFound()`.

`npm run lint`, `npm run format:check`, `npm run test` (109/109), `npx
tsc --noEmit` y `npm run build` se ejecutan sin errores — 23 rutas
generadas correctamente, incluidas las estáticas por
`generateStaticParams` para categorías, colecciones y productos. Se
cumplen todos los criterios de finalización de esta fase.

## Fase 6 — Páginas de catálogo

**Objetivo.** Construir las páginas de catálogo completo, catálogo por
categoría y colección, consumiendo la capa de datos de la Fase 4 y los
componentes de la Fase 3.

**Dependencias.** Fases 4 y 5 completas.

**Documentos necesarios.** Product Strategy — Butay (§4, §5),
`FRONTEND_ARCHITECTURE.md` (apartado 6).

**Entregables.** Página de catálogo completo; página por categoría;
página por colección, distinguiendo visualmente permanente vs.
temporal.

**Criterios de finalización.** Las tres páginas se renderizan en
servidor (SSG/ISR); cada una tiene metadatos SEO propios generados a
partir de los datos reales.

**Estado (actualizado 2026-07-22).** **Completa.** Trabajado en
`feature/fase-6-catalog-pages`. Por instrucción explícita del
fundador de construir "la primera versión completamente navegable de
Butay" en un único movimiento autónomo, esta fase se ejecutó junto con
partes sustanciales de las Fases 7 y (parcialmente) 8 — ver notas de
alcance más abajo. Entregables de la Fase 6 propiamente dicha:
- **Página de catálogo completo** (`/catalog`) y **por categoría**
  (`/catalog/[category]`), con una barra de filtros
  (`CategoryFilters`) que enlaza a las rutas ya aprobadas — no un
  filtro cliente inventado.
- **Página por colección** (`/collections/[collection]`),
  distinguiendo visualmente permanente/temporal con `Badge`, y
  mostrando su drop solo cuando existe realmente (nunca inventado).
- Las tres páginas usan `generateStaticParams` (SSG) y
  `generateMetadata` con título derivado de datos reales — cumple el
  criterio de finalización literalmente.
- **Componentes nuevos reutilizables**: `ProductCard`/`ProductGrid`
  (consolidan el patrón `Card`+`Link` que Fase 5 había duplicado en
  cuatro páginas), `CollectionCard`, `CategoryFilters`,
  `SectionHeader` (nivel 1). Ninguno de un solo uso.
- Todas las páginas consumen exclusivamente las funciones de acceso ya
  existentes de `/data` — cero productos hardcodeados.

**Nota de alcance — trabajo adicional realizado en el mismo
movimiento (Fases 7 y 8, por instrucción explícita del fundador):**
- **Ficha de producto** (`/product/[sku]`) reconstruida por completo:
  `Gallery` (imágenes placeholder etiquetadas — sin fotografía real
  todavía), `VariantSelector` (selector de talla/color, interactivo,
  sin carrito ni checkout), badges de categoría/colección/archivado/
  destacado, texto explícito de estado y de nivel de visibilidad del
  mensaje, y un CTA deliberadamente deshabilitado. Los productos
  archivados siguen siendo consultables, nunca devuelven error.
  **Hueco real identificado, no resuelto:** el modelo de datos de la
  Fase 4 (`Sku`) no incluye un campo de texto para el mensaje/frase
  real de la prenda — solo su nivel de visibilidad
  (`messageVisibility`). La ficha de producto muestra el *nivel*
  ("Message visibility: featured"), no una *frase* real, porque
  inventar una frase de producto sería inventar copy de marca. Fase 7
  no se marca `Completa` en la tabla de avance por este motivo — su
  entregable "presentación del mensaje/frase del producto" está
  parcialmente cumplido.
- **Home** (`/`) y **Manifiesto** (`/manifesto`) reconstruidas con
  estructura editorial completa (`Hero`, introducción, `ValuesList`,
  `FeaturedCollections`, `FeaturedProducts`, `CTASection`) usando
  **contenido explícitamente provisional**, documentado como tal en
  cada archivo — nunca el manifiesto real (`WEB_HANDOFF.md` §2, sigue
  sin aprobación del fundador) ni copy de marca definitivo. Fase 8 no
  se marca `Completa`: su criterio de finalización exige que "todo el
  copy usado provenga literalmente del Brand Bible... a través de la
  capa `/content`" — aquí el copy es intencionadamente de prueba, no
  fuente de marca aprobada, y no pasa por una capa `/content`
  versionada de contenido real. Se deja como cimentación estructural
  para cuando la Fase 8 se aborde con contenido real.
- `ValuesList` usa los cinco nombres de valores ya aprobados (Visión,
  Misión y Valores v1.0, Decisión 010) — solo los nombres; los
  descriptores de una línea son copy de prueba, documentados como
  tales.

**Componentes nuevos totales**: `SectionHeader`, `ProductCard`,
`ProductGrid`, `CollectionCard`, `VariantSelector`, `CategoryFilters`,
`Gallery` (dominio), `Hero`, `CTASection`, `ValuesList`,
`FeaturedProducts`, `FeaturedCollections` (contenido). `NavLink` ganó
un modo `exact` (opcional, retrocompatible) para que la barra de
filtros de categoría no mantenga "All" activo en una categoría
concreta.

41 tests nuevos (150 en total en el proyecto). `npm run lint`, `npm
run format:check`, `npm run test`, `npx tsc --noEmit` y `npm run
build` se ejecutan sin errores — 23 rutas generadas. Verificación
manual en navegador (servidor de desarrollo): las siete páginas
renderizan con datos reales de `/data`; navegación por teclado, focus
visible y drawer móvil (apertura, cierre por Escape, cierre al
navegar) verificados; responsive verificado en 375px (drawer),
768px y 1280px (nav horizontal) — el breakpoint `md` de Tailwind
cambia correctamente de uno a otro.

**Auditoría y refinamiento (2026-07-22).** Por instrucción explícita
del fundador, se realizó una auditoría completa de arquitectura,
responsive (320/375/390/768/1024/1280/1440), accesibilidad, SEO y
rendimiento sobre todo lo construido en las Fases 3-6, corrigiendo los
problemas reales encontrados directamente (sin esperar aprobación,
per instrucción) y mejorando la composición visual con los tokens
provisionales existentes — sin tocar logo, tipografía ni color.
Hallazgos reales corregidos:
- **`Container`/`Section`/`Grid`/`Stack` descartaban en silencio
  cualquier prop no declarada explícitamente** (a diferencia de
  `Card`/`Button`/`Link`/`Input`, que sí reenvían `...props`).
  TypeScript no lo detectaba porque `@types/react` permite atributos
  `aria-*` en cualquier elemento JSX sin importar el tipo de props del
  componente. En la práctica, el `aria-label="Filter by category"`
  de `CategoryFilters` nunca llegaba al DOM — el landmark de
  navegación de filtros no tenía nombre accesible. Corregido en los
  cuatro primitivos, con test de regresión en cada uno.
- **`ProductCard`, `CollectionCard` y los ítems de `ValuesList`
  saltaban de h2/h1 a h4**, sin pasar por h3, en cada página que los
  usa. Corregido vía el prop `as` de `Typography` (mismo tamaño
  visual, nivel semántico correcto).
- Añadido un enlace "Skip to content" (WCAG 2.4.1), ausente hasta
  ahora — cada página obligaba a tabular por todo el header antes de
  llegar al contenido.
- Añadidas `description`, `canonical` (`alternates.canonical`) y
  etiquetas OpenGraph/Twitter en las siete rutas — antes solo existía
  `title`. Sin contenido definitivo: descripciones mínimas y factuales,
  derivadas de datos reales, no de voz de marca.
- Eliminada una entrada `arrow-right` sin uso en el registro de
  `Icon`, y el tipo `Tone`/`toneClass` duplicado idéntico entre `Link`
  y `Typography`, consolidado en `src/lib/tone.ts`.
- Composición visual: escala responsiva para `Typography`
  `variant="display"`; hover consistente en tarjetas (`Card`
  `interactive`, ya existente pero sin usar, mas `hover:shadow-md`
  añadido); `Gallery` rediseñada a imagen principal + miniaturas; la
  ficha de producto cambia su punto de quiebre de dos columnas de
  `sm` a `md` (640px resultaba angosto); la página de colección ahora
  muestra su `description` (ya existía en los datos, no se mostraba).
- 10 tests nuevos de regresión para los hallazgos anteriores (160 en
  total en el proyecto).

No se registra ninguna decisión nueva en `DECISIONS.md`: todos los
cambios son correcciones de errores reales o mejoras de composición
usando infraestructura ya aprobada, no decisiones de arquitectura o de
marca nuevas.

## Fase 7 — Ficha de producto

**Objetivo.** Construir la página de producto individual, incluyendo
selección de variante (talla/color) y presentación del mensaje según
su nivel de visibilidad.

**Dependencias.** Fase 6 completa.

**Documentos necesarios.** Product Strategy (§3, §4), `WEB_HANDOFF.md`
(§6, §9).

**Entregables.** Página de ficha de producto con selector de variante,
presentación del mensaje/frase del producto, y estado
archivado/activo reflejado visualmente.

**Criterios de finalización.** Un producto archivado sigue siendo
accesible y consultable, nunca devuelve error; los tres niveles de
visibilidad de mensaje son accesibles también para tecnología de
asistencia (`CLAUDE_CODE.md`, apartado 15).

**Nota (2026-07-22).** Gran parte de esta fase ya se construyó como
parte del cierre de la Fase 6 (ver su apartado "Estado"): selector de
variante, estado archivado/activo reflejado visualmente (nunca 404).
**No se marca `Completa`** porque el entregable "presentación del
mensaje/frase del producto" solo está cumplido a nivel de *visibilidad*
(`messageVisibility`), no de *frase real* — el tipo `Sku` (Fase 4) no
tiene un campo de texto para el mensaje de la prenda, y no se ha
inventado uno para no generar copy de marca. Completar esta fase
formalmente requiere, como mínimo, decidir si el modelo de datos debe
ampliarse con ese campo.

## Fase 8 — Contenido editorial de marca

**Objetivo.** Construir la home y cualquier página editorial (por
ejemplo, manifiesto/sobre la marca), consumiendo contenido de marca ya
aprobado (Brand Bible) a través de la capa `/content`, sin generar
contenido de marca nuevo en esta fase.

**Dependencias.** Fases 3 y 5 completas.

**Documentos necesarios.** Brand Bible — Butay (v1.0, apartados 4, 11,
13, 14).

**Entregables.** Home funcional; página editorial con el manifiesto de
marca u otro contenido ya aprobado.

**Criterios de finalización.** Ningún texto de marca está hardcodeado
dentro de un componente de presentación; todo el copy usado proviene
literalmente del Brand Bible o de una fuente de contenido versionada
equivalente.

**Nota (2026-07-22).** La estructura completa de Home y Manifiesto ya
existe (ver "Estado" de la Fase 6): `Hero`, `ValuesList`,
`FeaturedCollections`, `FeaturedProducts`, `CTASection`, y la página
editorial de manifiesto. **No se marca `Completa`**: todo el copy
usado es explícitamente de prueba (documentado como tal en cada
archivo), no proviene del Brand Bible a través de una capa `/content`
versionada — esta fase, cuando se aborde formalmente, es sustituir ese
copy por contenido real, no construir la estructura desde cero.

## Fase 9 — Internacionalización

**Objetivo.** Integrar la capa de i18n (`FRONTEND_ARCHITECTURE.md`,
`CLAUDE_CODE.md` apartado 17) de forma funcional, aunque el lanzamiento
use un único idioma.

**Dependencias.** Fases 5 a 8 completas (para tener contenido real que
internacionalizar).

**Documentos necesarios.** Brand Bible — Butay (§8), `WEB_HANDOFF.md`
(§8).

**Entregables.** Estructura de rutas preparada para prefijo de idioma;
diccionarios de traducción separados para voz de marca vs.
comunicación funcional.

**Criterios de finalización.** Añadir un segundo idioma de interfaz no
requiere tocar componentes, solo añadir contenido traducido.

## Fase 10 — SEO y rendimiento

**Objetivo.** Aplicar de forma sistemática las reglas de SEO y
rendimiento de `CLAUDE_CODE.md` (apartados 14 y 16) sobre todo lo
construido hasta ahora.

**Dependencias.** Fases 6, 7 y 8 completas.

**Documentos necesarios.** `CLAUDE_CODE.md` (apartados 14, 16).

**Entregables.** Metadatos y datos estructurados (`schema.org`) en
catálogo y producto; sitemap; imágenes optimizadas y responsivas;
medición de Core Web Vitals.

**Criterios de finalización.** Core Web Vitals en verde en catálogo y
producto; cada página relevante tiene metadatos únicos, no genéricos.

## Fase 11 — Accesibilidad

**Objetivo.** Auditoría y corrección de accesibilidad sobre todo lo
construido, más allá de lo ya verificado componente a componente.

**Dependencias.** Fases 3 a 8 completas.

**Documentos necesarios.** `CLAUDE_CODE.md` (apartado 15).

**Entregables.** Auditoría de accesibilidad (automatizada y manual);
correcciones aplicadas.

**Criterios de finalización.** Cumplimiento WCAG 2.1 AA verificado en
las rutas principales (home, catálogo, producto), no solo en
componentes aislados.

## Fase 12 — Preparación para e-commerce

**Objetivo.** Dejar puntos de extensión claros para carrito, checkout
e inventario reales, sin implementarlos — su alcance real depende de
una decisión todavía no tomada (Fase 5/6 del roadmap general del
proyecto).

**Dependencias.** Fase 4 completa.

**Documentos necesarios.** `WEB_HANDOFF.md` (§10, §11),
`CLAUDE_CODE.md` (apartado 18).

**Entregables.** Documentación de los puntos de extensión previstos
(dónde conectaría un carrito, un checkout, un proveedor de pagos);
ningún flujo de compra real implementado.

**Criterios de finalización.** Está documentado y es técnicamente claro
dónde y cómo se conectaría e-commerce real más adelante, sin que exista
código de pago ni de inventario en tiempo real.

## Fase 13 — QA final y preparación para producción

**Objetivo.** Verificación integral antes de un primer lanzamiento:
funcional, de rendimiento, de accesibilidad y de coherencia con la
documentación de marca y producto.

**Dependencias.** Todas las fases anteriores completas.

**Documentos necesarios.** Todos los documentos de esta carpeta.

**Entregables.** Checklist de QA superado; entorno de producción
configurado; plan de despliegue.

**Criterios de finalización.** Ninguna mecánica prohibida
(`WEB_HANDOFF.md` §12) está presente; todas las fases anteriores
cumplen sus propios criterios; el fundador da la aprobación explícita
de lanzamiento — el lanzamiento no es automático al completarse esta
fase, sigue el mismo principio de aprobación explícita del resto del
proyecto.

---

## Bloque de cierre estándar

**Dependencias:** CLAUDE_CODE.md; FRONTEND_ARCHITECTURE.md;
WEB_HANDOFF.md; Product Strategy — Butay (v1.0); Brand Bible — Butay
(v1.0).

**Documentos derivados:** ninguno todavía — este documento es en sí el
plan de ejecución de los dos anteriores.

**Decisiones relacionadas:** 018, 019, 020, 021, 025 (ver DECISIONS.md).

**Estado del documento:** Final en su estructura; vivo en el
seguimiento de estado de cada fase (tabla "Estado de avance"), que se
actualiza a medida que el desarrollo avanza.

**Próxima fase recomendada:** Fase 7 (Ficha de producto) para cerrar
formalmente su entregable pendiente (mensaje/frase real del
producto), o Fase 8 (Contenido editorial de marca) para sustituir el
copy de prueba de Home/Manifiesto por contenido real del Brand Bible.
Las Fases 1-6 están **Completas** — ver sus apartados "Estado"
respectivos. Conforme a la Regla de uso 1 de este documento, ninguna
fase se abre automáticamente: requiere instrucción explícita del
fundador.
