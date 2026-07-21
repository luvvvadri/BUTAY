# CHANGELOG.md

> **Tipo de documento:** Sistema — Historial de cambios (append-only)
> **Versión:** 2.9
> **Fecha de creación:** 2026-07-18
> **Última actualización:** 2026-07-21
> **Estado:** Vivo (solo se añade, nunca se reescribe)
> **Depende de:** INDEX.md (todo cambio aquí debe reflejarse en el estado
> de INDEX.md)

---

## Objetivo

CHANGELOG.md registra, en orden cronológico, **qué** documento cambió,
cuándo y en qué consistió el cambio. A diferencia de DECISIONS.md —que
explica el **porqué** de una decisión de fondo—, CHANGELOG.md es un
registro operativo y objetivo de modificaciones, útil para auditar la
evolución de la documentación con un solo vistazo.

## Cuándo debe actualizarse

- Cada vez que se crea, modifica o archiva cualquier documento del
  proyecto.
- Inmediatamente después de guardar el cambio, no de forma retroactiva.

## Reglas de uso

1. **Append-only**: las entradas nunca se editan ni se eliminan.
2. Cada entrada indica: fecha, documento afectado, versión anterior →
   versión nueva, y una descripción breve del cambio.
3. Si el cambio responde a una decisión de fondo, se referencia el número
   de la decisión correspondiente en DECISIONS.md.
4. Los cambios puramente de redacción o formato se registran aquí sin
   necesidad de una entrada en DECISIONS.md.

## Estructura preparada para crecer

Las entradas se agrupan por fecha, en orden descendente (la más reciente
arriba), para que revisar la actividad reciente no requiera desplazarse
por todo el historial. Si el archivo crece demasiado, se archivan por año
(`CHANGELOG_2026.md`, `CHANGELOG_2027.md`...) manteniendo un resumen de los
últimos cambios en `CHANGELOG.md`.

## Buenas prácticas

- Una línea por cambio, sin necesidad de prosa extensa.
- Ser consistente con los nombres de documento exactamente como aparecen
  en INDEX.md.
- No usar este archivo para explicar el razonamiento — eso pertenece a
  DECISIONS.md.

---

## Historial

### 2026-07-21 (cierre de documentación — merge de PR #5 y PR #6, limpieza de ramas)

- **Auditoría previa a la fusión.** A petición del fundador, antes de
  fusionar ningún PR se ejecutó una última auditoría completa sobre
  `feature/fase-5-layouts-navigation` (que incluye todo lo de la Fase
  4): `npm run lint`, `npm run format:check`, `npm run test`
  (109/109), `npx tsc --noEmit` y `npm run build`, los cinco sin
  errores. Se revisaron referencias cruzadas (`.md` citados en toda la
  documentación contra los archivos reales de `docs/` — sin hallazgos
  nuevos, solo las menciones ya documentadas como descartadas o
  futuras en `DECISIONS.md`), se confirmó que ningún documento
  congelado (`CLAUDE_CODE.md`, `FRONTEND_ARCHITECTURE.md`,
  `WEB_HANDOFF.md`, Brand Bible, Product Strategy, Design System,
  `00_SYSTEM_WORKFLOW.md`, `DECISIONS.md`, `GLOSSARY.md`) fue tocado
  por las ramas de las Fases 4-5, y se comprobó la numeración de notas
  de `CONTEXT.md` (1-24, sin duplicados ni huecos).
  - **Hallazgo real corregido:** la tabla "Documentos de sistema" de
    `INDEX.md` seguía mostrando `CHANGELOG.md` como v2.5, tres
    versiones por detrás de su cabecera real (v2.8) — arrastrado sin
    corregirse a través de los cierres de las Fases 3, 4 y 5.
    Corregido antes de fusionar.
  - No se encontraron cambios cosméticos que aplicar — la instrucción
    explícita del fundador fue corregir solo errores reales, no estilo.
- **PR #5** (`feature/fase-4-catalog-data-layer` → `main`) aprobado y
  fusionado.
- **PR #6** (`feature/fase-5-layouts-navigation` → `main`, retargeteado
  desde `feature/fase-4-catalog-data-layer` tras el merge del PR #5,
  mismo patrón ya usado con el PR #3) aprobado y fusionado.
- **Ramas eliminadas** (local y remoto, ya fusionadas):
  `feature/fase-4-catalog-data-layer`, `feature/fase-5-layouts-navigation`.
  Solo queda `main`.
- **CONTEXT.md** — v2.8 → v2.9. Se elimina todo el lenguaje "sin
  fusionar todavía" de los párrafos de cierre de las Fases 4 y 5; se
  añade el párrafo de cierre y limpieza de ramas; se actualiza "Estado
  general", "Próximo paso" y la nota 19.
- **INDEX.md** — v2.7 → v2.8. Se corrige la versión de CHANGELOG.md en
  la tabla "Documentos de sistema" (2.5 → 2.8); se actualiza la fila
  de `DEVELOPMENT_ROADMAP.md` (Fases 1-5 fusionadas); se elimina el
  lenguaje de ramas sin fusionar en "Notas" y se añade el párrafo de
  cierre.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de cierre.** Verificado que `main` es la única
rama del repositorio (local y remoto) tras la limpieza. Se repitieron
`npm run lint`, `npm run format:check`, `npm run test`, `npx tsc
--noEmit` y `npm run build` sobre `main` ya actualizado: los cinco sin
errores (109/109 tests, build con 23 rutas). No se registra ninguna
decisión nueva en `DECISIONS.md`: fusionar PRs ya aprobados y limpiar
ramas es ejecución administrativa de decisiones ya tomadas, mismo
criterio aplicado en el cierre equivalente de las Fases 2-3 (PR #2 y
#3).

### 2026-07-21 (cierre de la Fase 5 técnica de DEVELOPMENT_ROADMAP.md — layouts y navegación)

- **Rama `feature/fase-5-layouts-navigation`** (creada sobre
  `feature/fase-4-catalog-data-layer`; sin fusionar todavía). Tras la
  aprobación explícita del fundador de la propuesta de arquitectura
  (Etapas 1-2 del workflow — comprensión y arquitectura, presentadas y
  aprobadas en el chat, sin generar un documento nuevo), se ejecutó la
  Etapa 3 (Implementación completa) en bloques:
  1. Primitivos de nivel 1 nuevos: `Drawer` (mismo patrón que `Modal`
     — Radix Dialog, foco, Escape, retorno de foco — anclado a un
     lateral en vez de centrado), `Breadcrumb` (agnóstico de
     catálogo/marca, recibe `{label, href}[]`), `EmptyState`. Icono
     `menu` añadido al registro de `Icon`.
  2. Componentes de layout: `Header`, `Footer`, `Navigation` (única
     fuente de enlaces — Catálogo, Archivo, Manifiesto —, renderizada
     de forma responsive: nav horizontal en escritorio, `Drawer` en
     móvil; sin entrada "Collections" porque no existe una ruta índice
     aprobada, solo `/collections/[collection]`), `NavLink` (compone
     `Link` con `usePathname()` para `aria-current` y estado activo),
     `AnnouncementBar` (slot estructural, inactivo por defecto).
  3. Layout raíz reescrito (`Header` + `AnnouncementBar` + `Footer`
     envolviendo `children`, metadata con plantilla de título) y
     estados raíz (`loading.tsx`, `error.tsx`, `not-found.tsx`).
  4. Route group `(site)`: `/` y `/manifesto` (stubs estructurales).
  5. Route group `(shop)`: `/catalog`, `/catalog/[category]`,
     `/collections/[collection]`, `/product/[sku]`, `/archive` —
     todas consumiendo exclusivamente las funciones de acceso de la
     Fase 4 (`getSkus*`, `getCategories`, `getCollections`,
     `getDrops`), sin ningún producto hardcodeado. `src/lib/breadcrumb.ts`
     traduce datos de catálogo a la forma genérica que `Breadcrumb`
     espera. Los productos archivados permanecen consultables (nunca
     404), coherente con "archivar, no borrar" (Product Strategy §7).
     `catalog/[category]` y `collections/[collection]` llaman a
     `notFound()` para slugs inexistentes.
  6. `robots.ts`/`sitemap.ts`, estructurales, generados íntegramente
     desde `/data` — sin contenido ni optimización real (Fase 10).
  Resolución de una ambigüedad de alcance detectada en la Etapa 1: no
  existe una ruta `/drops` dedicada (no está en
  `FRONTEND_ARCHITECTURE.md` §6; un Drop es un nivel opcional dentro
  de una Colección, Product Strategy §6) — un drop activo se muestra
  como sección dentro de `/collections/[collection]`. Deliberadamente
  fuera de alcance (Fases 6 y 7): ningún componente de dominio
  (`components/product`) ni diseño visual pulido — las páginas de
  `(shop)` reutilizan directamente los primitivos de la Fase 3.
- **DEVELOPMENT_ROADMAP.md** — v1.6 → v1.7. La Fase 5 (Layouts y
  navegación) pasa a estado **Completa** en la tabla "Estado de
  avance" y se le añade un apartado "Estado"; se actualiza el bloque
  de cierre estándar (próxima fase recomendada: Fase 6 — Páginas de
  catálogo, sin abrirse todavía).
- **CONTEXT.md** — v2.7 → v2.8. Se añade el párrafo de cierre de la
  Fase 5 técnica en "Estado general"; se corrige la frase de apertura
  de "Estado general" para reflejar las cinco fases técnicas
  completas; se actualiza "Aprobado" (versión de
  `DEVELOPMENT_ROADMAP.md`), "Próximo paso" y las notas 19 y 23 para
  cualquier IA; se añade la nota 24 documentando el alcance
  deliberadamente excluido (componentes de dominio, ruta `/drops`).
- **INDEX.md** — v2.6 → v2.7. Se actualiza la fila de
  `DEVELOPMENT_ROADMAP.md` en "Documentos técnicos de desarrollo"
  (v1.7, Fases 1-5 Completas); se sincroniza la versión de CONTEXT.md;
  se añade nota sobre el cierre de la Fase 5 técnica.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de cierre de fase.** Se ejecutaron `npm run lint`,
`npm run format:check`, `npm run test`, `npx tsc --noEmit` y `npm run
build` sobre `butay-web/` en el estado final de
`feature/fase-5-layouts-navigation`: los cinco sin errores (109/109
tests, 23 rutas generadas, incluidas las estáticas de
`generateStaticParams` para categorías, colecciones y productos). Un
`format:check` intermedio detectó 3 archivos sin formatear
(`drawer`/`breadcrumb`/`empty-state`, un `prettier --write` por
archivo suelto anterior que no cubrió todos) — corregido antes del
cierre. Se verificaron los criterios de finalización de la Fase 5:
navegación completa operable por teclado (apertura/cierre del
`Drawer`, `Tab`/`Enter`/`Escape`, verificado por test); las rutas
siguen la jerarquía de catálogo ya fijada en
`FRONTEND_ARCHITECTURE.md` §6, no una estructura arbitraria. Se
verificaron por grep las versiones de cabecera de
`DEVELOPMENT_ROADMAP.md`, `CONTEXT.md` e `INDEX.md` contra la tabla de
`INDEX.md`: coinciden. No se registra ninguna decisión nueva en
`DECISIONS.md`: la estructura de rutas y layouts ejecuta directamente
lo ya fijado en `FRONTEND_ARCHITECTURE.md` §5-6; la resolución de
"Drops" y "Sobre Butay" fue una interpretación de arquitectura ya
aprobada, no una decisión de fondo nueva. La Fase 5 técnica queda
**Completa**, pendiente de creación de PR y revisión del fundador — no
se fusiona a `main` en este movimiento.

### 2026-07-21 (merge de PR #4 y cierre de la Fase 4 técnica de DEVELOPMENT_ROADMAP.md — modelo de datos y capa de catálogo)

- **PR #4** (`feature/fase-3-component-system` → `main`) aprobado por
  el fundador y fusionado. Rama eliminada (local y remoto). Árbol de
  trabajo verificado limpio antes de continuar.
- **Rama `feature/fase-4-catalog-data-layer`** (creada desde `main`
  tras el merge de PR #4; sin fusionar todavía). Por instrucción
  explícita del fundador de continuar el desarrollo con máxima
  autonomía, se ejecutó la Fase 4 completa en dos bloques:
  1. Tipos de catálogo (`src/types/catalog.ts`): `Category`,
     `Collection`, `Drop`, `Sku`, `Variant`, `MessageVisibility`,
     `ProductStatus`, siguiendo `FRONTEND_ARCHITECTURE.md` §10. `status`
     (`Sku`) y `type` (`Collection`) son campos obligatorios, no
     opcionales — hace imposible a nivel de tipos crear un producto sin
     estado activo/archivado o una colección sin distinguir
     permanente/temporal. `Variant.size`/`color` se modelan como
     `string` libre, no como unión de literales, porque fit/silueta/
     tallaje sigue `PENDIENTE DE DEFINIR` (Product Strategy §4) — el
     tipo no asume una filosofía de tallaje. Datos de prueba de
     categorías y colecciones (`src/data/categories.ts`,
     `collections.ts`) con sus funciones de acceso.
  2. Drops y productos (`src/data/drops.ts`, `products.ts`): 10 SKUs
     ficticios repartidos entre camisetas y sudaderas, una colección
     permanente y una temporal con un drop, los tres niveles de
     visibilidad de mensaje representados, y un producto archivado
     (alcanzable vía `getSkusByStatus('archived')`, nunca eliminado).
     Funciones de acceso: listar por categoría, por colección, por
     estado; obtener por slug. Nombres y mensajes documentados
     explícitamente como datos de prueba, no copy de marca aprobado.
  19 tests nuevos (63 en total): rango de tamaño del catálogo (8-15),
  integridad referencial entre SKU/categoría/colección/drop, cobertura
  de los tres niveles de visibilidad, alcanzabilidad del archivado, y
  comportamiento de cada función de acceso.
- **DEVELOPMENT_ROADMAP.md** — v1.5 → v1.6. La Fase 4 (Modelo de datos
  y capa de catálogo) pasa a estado **Completa** en la tabla "Estado de
  avance" y se le añade un apartado "Estado"; se actualiza el bloque de
  cierre estándar (próxima fase recomendada: Fase 5 — Layouts y
  navegación, sin abrirse todavía).
- **CONTEXT.md** — v2.6 → v2.7. Se añaden los párrafos de fusión del PR
  #4 y de cierre de la Fase 4 técnica en "Estado general"; se actualiza
  "Aprobado" (versión de `DEVELOPMENT_ROADMAP.md`), "Próximo paso" y
  las notas 19 y 23 para cualquier IA.
- **INDEX.md** — v2.5 → v2.6. Se actualiza la fila de
  `DEVELOPMENT_ROADMAP.md` en "Documentos técnicos de desarrollo"
  (v1.6, Fases 1-4 Completas, Fase 3 fusionada, Fase 4 pendiente de
  PR); se sincroniza la versión de CONTEXT.md; se añaden notas sobre el
  merge del PR #4 y el cierre de la Fase 4 técnica.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de cierre de fase.** Se ejecutaron `npm run lint`,
`npm run format:check`, `npm run test`, `npx tsc --noEmit` y `npm run
build` sobre `butay-web/` en el estado final de
`feature/fase-4-catalog-data-layer`: los cinco sin errores (63/63
tests). Al ejecutar `format:check` por primera vez tras el merge de PR
#4 aparecieron 32 archivos marcados como no formateados — investigado:
no eran cambios de contenido real (`git diff --numstat` confirmó cero
líneas añadidas o eliminadas en esos archivos), sino un artefacto de
`core.autocrlf=true` de Git en Windows al reescribir finales de línea
durante el `pull` del merge; `prettier --write .` normalizó el árbol de
trabajo sin alterar el contenido de ningún archivo (verificado por
diff antes y después). Se verificaron los criterios de finalización de
la Fase 4: imposibilidad a nivel de tipos de crear estados inválidos
(campos obligatorios, no verificación en tiempo de ejecución); los
datos de prueba cubren los tres niveles de visibilidad de mensaje. Se
verificaron por grep las versiones de cabecera de
`DEVELOPMENT_ROADMAP.md`, `CONTEXT.md` e `INDEX.md` contra la tabla de
`INDEX.md`: coinciden. No se registra ninguna decisión nueva en
`DECISIONS.md`: el modelo de datos ejecuta directamente lo ya
especificado en `FRONTEND_ARCHITECTURE.md` §10 y Product Strategy
§3-§7, sin alternativas de arquitectura nuevas evaluadas. La Fase 4
técnica queda **Completa**, pendiente de creación de PR y revisión del
fundador — no se fusiona a `main` en este movimiento.

### 2026-07-21 (cierre de la Fase 3 técnica de DEVELOPMENT_ROADMAP.md — sistema de componentes base)

- **Rama `feature/fase-3-component-system`** (creada desde `main` tras
  el cierre documental anterior; sin fusionar todavía). Por instrucción
  explícita del fundador de minimizar interacciones y priorizar el
  desarrollo, se ejecutó de forma autónoma toda la Fase 3 de
  `DEVELOPMENT_ROADMAP.md` en un único movimiento, en bloques pequeños
  y revertibles:
  1. Infraestructura de testing (previamente inexistente): Vitest +
     `@vitejs/plugin-react` + jsdom + React Testing Library + jest-dom
     + user-event; `npm run test` / `test:watch`.
  2. Primitivos de layout: `Container`, `Stack`, `Grid`, `Section` (más
     una prueba de composición conjunta).
  3. `Typography` — mapa variante→etiqueta HTML con `as` independiente
     para no romper el orden de encabezados por accesibilidad.
  4. `Button` y `Link` — variantes, tamaños, estado disabled, foco
     visible; `Link` distingue enlaces internos (`next/link`) de
     externos (`rel="noopener noreferrer"`).
  5. `Badge` y `Card`, más una segunda prueba de composición que usa
     los nueve componentes de contenido/interacción juntos en un
     layout realista, con interacción real de teclado y clic.
  6. `Input` (asociación de label vía `useId()`, estado de error con
     `aria-invalid`/`aria-describedby`) y `Modal` (envuelve
     `@radix-ui/react-dialog` — foco, Escape, retorno de foco, ARIA —
     en vez de reimplementar accesibilidad de diálogo a mano, según la
     recomendación explícita de `CLAUDE_CODE.md` §5).
  Resultado: los cinco componentes base nombrados explícitamente en
  `FRONTEND_ARCHITECTURE.md` §4.1 (botón, input, badge, modal, tarjeta
  genérica), más los primitivos de layout y tipografía, y las
  utilidades compartidas `lib/cn.ts` y `lib/spacing.ts`. 44 tests en 14
  archivos, todos pasando. Ningún componente depende de datos de
  catálogo ni de contenido de marca específico; ninguno implementa
  mecánicas prohibidas (`WEB_HANDOFF.md` §12).
- **DEVELOPMENT_ROADMAP.md** — v1.4 → v1.5. La Fase 3 (Sistema de
  componentes base) pasa a estado **Completa** en la tabla "Estado de
  avance" y se le añade un apartado "Estado", con el mismo nivel de
  detalle que las Fases 1 y 2; se actualiza el bloque de cierre
  estándar (próxima fase recomendada: Fase 4 técnica — Modelo de datos
  y capa de catálogo, sin abrirse todavía).
- **CONTEXT.md** — v2.5 → v2.6. Se añade el párrafo de cierre de la
  Fase 3 técnica en "Estado general"; se corrige la frase de apertura
  de "Estado general" para reflejar ambos tracks (marca/producto vs.
  técnico) sin conflarlos; se actualiza "Aprobado" (versión de
  `DEVELOPMENT_ROADMAP.md`), "Próximo paso" y las notas 19 y 23 para
  cualquier IA.
- **INDEX.md** — v2.4 → v2.5. Se actualiza la fila de
  `DEVELOPMENT_ROADMAP.md` en "Documentos técnicos de desarrollo"
  (v1.5, Fases 1, 2 y 3 Completas); se sincroniza la versión de
  CONTEXT.md; se añade nota sobre el cierre de la Fase 3 técnica,
  distinguiéndola explícitamente de la Fase 3 de marca/producto
  (Product Strategy) conforme a la Decisión 012.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de cierre de fase.** Se ejecutaron `npm run lint`,
`npm run format:check`, `npm run test` y `npm run build` sobre
`butay-web/` en el estado final de `feature/fase-3-component-system`:
los cuatro sin errores (44/44 tests). Se verificaron los criterios de
finalización de la Fase 3: cada componente base se usó en al menos un
caso de prueba real no aislado (las dos pruebas de composición); ningún
componente depende de datos de catálogo ni de contenido de marca
específico (verificado por inspección — todos reciben contenido por
props). Se comprobó que Vitest y Radix UI, las dos herramientas nuevas
introducidas, ya estaban explícitamente sancionadas en `CLAUDE_CODE.md`
(§21 y §5 respectivamente), por lo que no constituyen una decisión de
arquitectura no documentada — no se registra ninguna entrada nueva en
`DECISIONS.md`. Se verificaron por grep las versiones de cabecera de
`DEVELOPMENT_ROADMAP.md`, `CONTEXT.md` e `INDEX.md` contra la tabla de
`INDEX.md`: coinciden. La Fase 3 técnica queda **Completa**, pendiente
de creación de PR y revisión del fundador — no se fusiona a `main` en
este movimiento.

### 2026-07-21 (cierre de documentación — merge de PR #2 y PR #3, limpieza de ramas)

- **PR #2** (`docs/brand-bible-v1.1` → `main`) fusionado — Brand Bible
  y Product Strategy v1.1 (Decisión 026) ya en `main`.
- **PR #3** (`docs/design-system-v1.0` → `main`, retargeteado desde
  `docs/brand-bible-v1.1` tras el merge de PR #2) fusionado —
  `04_IDENTIDAD_VISUAL_design_system.md` v0.1 (Decisión 027, `En
  borrador`) ya en `main`.
- **Ramas eliminadas** (local y remoto, ya fusionadas): `docs/brand-bible-v1.1`,
  `docs/design-system-v1.0`, `feature/fase-2-foundations`. Solo queda
  `main`.
- **CONTEXT.md** — v2.4 → v2.5. Se eliminan todas las referencias a
  ramas/PRs "sin fusionar" (ya no aplican); se consolidan y reescriben
  las notas 19-23 para cualquier IA, incluida una aclaración explícita
  de que fusionar el Design System a `main` **no equivale** a su
  aprobación formal (Etapa 8 sigue pendiente); se actualiza "Próximo
  paso" para reflejar el inicio inmediato de la Fase 3 técnica.
- **INDEX.md** — v2.3 → v2.4. Versión de CONTEXT.md sincronizada.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de cierre.** Verificado por grep: sin referencias
`.md` rotas nuevas; todas las versiones de cabecera coinciden con las
tablas de `INDEX.md`; ninguna mención residual de rama o PR "sin
fusionar" en documentos vivos (`CONTEXT.md`, `INDEX.md`,
`DEVELOPMENT_ROADMAP.md`) — las menciones que quedan en `CHANGELOG.md`
son registro histórico correcto de su momento y no se tocan
(append-only). No se registra ninguna decisión nueva en `DECISIONS.md`:
fusionar PRs ya aprobados y limpiar ramas es ejecución administrativa
de decisiones ya tomadas (026, 027), no una decisión de fondo nueva.

### 2026-07-21 (revisión crítica del PR #3 — correcciones al Design System v0.1)

- **`04_IDENTIDAD_VISUAL_design_system.md`** — sin cambio de versión
  (sigue v0.1, `En borrador`; los cambios son correcciones previas a
  la primera aprobación, no una revisión formal nueva). Se corrigen
  seis hallazgos de una auditoría crítica del PR #3:
  1. §11 y §16.2 ya no afirman que la respuesta de fit/silueta de la
     entrevista "resuelve" el `PENDIENTE DE DEFINIR` de Product
     Strategy §4 — Product Strategy sigue marcándolo pendiente, y el
     documento ahora lo dice explícitamente, sin duplicarlo como
     resuelto.
  2. §12 corrige la cita de la frase "nota personal, no publicidad de
     marca dentro de la caja", mal atribuida a Product Strategy —
     pertenece a Brand Bible §14. Se revisaron el resto de citas
     cruzadas del documento; no se encontró ninguna otra mal
     atribuida (se precisó además la fila "Arquetipo" de la tabla de
     Herencia, que citaba solo Brand Bible §5 cuando la frase exacta
     está en §16).
  3. §11 distingue ahora explícitamente entre la respuesta literal del
     fundador ("nivel predominante dentro de los tres niveles ya
     existentes"), la interpretación de trabajo ("discreto") y el
     hecho de que la confirmación explícita sigue `PENDIENTE DE
     DEFINIR` — antes se presentaba la interpretación como si la
     entrevista la hubiera confirmado literalmente.
  4. La tensión entre la posición de pecho del logo y el rechazo a
     parecer marca deportiva (§6) pasa a la lista `PENDIENTE DE
     DEFINIR` con la etiqueta literal, en vez de una nota aparte sin
     esa etiqueta.
  5. El rango abreviado "009-021" en Decisiones relacionadas (§17) se
     sustituye por la lista explícita y precisa de decisiones
     realmente relacionadas (005, 006, 009, 011, 013, 016, 018, 020,
     021, 026, 027), siguiendo la convención de Brand Bible/Product
     Strategy.
  6. La fila "Esencia de marca" de la tabla de Herencia (§2) pierde
     las comillas de cita directa, para igualar el estilo del resto
     de la tabla y el de las tablas de Herencia de Brand Bible/Product
     Strategy, que nunca citan textualmente.
- **CONTEXT.md** — v2.3 → v2.4. Se corrige, de paso, un séptimo
  hallazgo detectado en la segunda auditoría (no estaba en la lista
  original): la primera frase de "Estado general" seguía afirmando
  que la Fase 4 "sigue sin abrirse", contradiciendo el propio párrafo
  de apertura de la Fase 4 más abajo en el mismo documento — mismo
  patrón de frase de apertura no actualizada ya corregido dos veces
  antes en esta sesión.
- **INDEX.md** — v2.2 → v2.3. Se sincronizan las versiones de
  CONTEXT.md y de sí mismo.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de la segunda revisión.** Se repitió la
comprobación completa: coherencia con Brand Bible, coherencia con
Product Strategy, referencias cruzadas, versiones, estado de la Fase 4
y ausencia de contenido visual definitivo (hex, tipografías, formas de
logo) — todo verificado por grep, no de memoria. Único hallazgo nuevo:
la frase de apertura de `CONTEXT.md` señalada arriba, ya corregida. No
se encontró ningún otro problema. El PR #3 queda listo para revisión;
sigue sin fusionarse.

### 2026-07-21 (apertura formal de la Fase 4 — Identidad Visual / Design System)

- **DECISIONS.md** — v1.3 → v1.4. Se añade la Decisión 027: apertura
  formal de la Fase 4 del roadmap de marca/producto y redacción de su
  documento raíz, `04_IDENTIDAD_VISUAL_design_system.md` (v0.1, `En
  borrador`), siguiendo el índice aprobado tras dos entrevistas de
  identidad visual (dirección general y logo).
- **`04_IDENTIDAD_VISUAL_design_system.md`** — creado (v0.1, `En
  borrador`). 18 apartados (0-17): personalidad visual, territorio
  emocional, referencias y qué evitar, logo (rol/dirección/aplicación),
  sistema de color, sistema tipográfico, dirección fotográfica,
  dirección artística, aplicación visual del mensaje en la prenda,
  packaging, experiencia visual de la web, qué nunca debe parecer,
  evolución (permanente/flexible), puentes hacia la Fase 6 y hacia
  Product Strategy, bloque de cierre estándar. Consolida en un único
  documento raíz lo que el roadmap original preveía como tres piezas
  separadas. Ningún valor concreto (hex, tipografía, forma de logo)
  fijado — todos marcados `PENDIENTE DE DEFINIR` explícitamente. *(Ref.
  Decisión 027)*
- **INDEX.md** — v2.1 → v2.2. Se añade la tabla "Documentos de Fase 4";
  se colapsan las tres filas previstas del roadmap ("Manual de marca",
  "Paleta de color", "Sistema tipográfico") en una sola; se añade nota
  de apertura de fase; se sincronizan las versiones de CONTEXT.md,
  DECISIONS.md y CHANGELOG.md en la tabla de documentos de sistema.
- **CONTEXT.md** — v2.2 → v2.3. Se añade el párrafo de apertura de la
  Fase 4 en "Estado general"; se corrige la versión de
  `DEVELOPMENT_ROADMAP.md` en "Aprobado" (v1.3 → v1.4, desincronizada
  desde la sesión anterior); "En borrador / en curso" deja de estar
  vacío por primera vez desde el cierre de la Fase 3; se actualiza
  "Próximo paso" y se añade la nota 22 para cualquier IA.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de apertura de fase.** Se verificó que el documento
nuevo no fija ningún valor visual definitivo (sin colores hex, sin
tipografías concretas, sin forma de logo) y que cada punto sin resolver
de la entrevista queda marcado `PENDIENTE DE DEFINIR` de forma
explícita, nunca inferido. Se revisaron `Brand Bible` y `Product
Strategy` para confirmar que el nuevo documento no contradice nada de
lo permanente en ninguno de los dos. Se detectó y corrigió, de paso,
una versión desincronizada de `DEVELOPMENT_ROADMAP.md` en `CONTEXT.md`
que arrastraba desde la sesión de cierre de la Fase 2 técnica. La Fase
4 queda **abierta, no cerrada** — sin informe de cierre ni estado
`Approved`, pendiente de autoauditoría y aprobación explícita.

### 2026-07-21 (corrección de coherencia — PR #1 se fusionó a `main` durante la sesión)

- **CONTEXT.md** — v2.1 → v2.2. El PR #1 (`feature/fase-2-foundations`)
  se fusionó a `main` externamente mientras se trabajaba en la revisión
  del Brand Bible. Se corrigen cuatro referencias que, escritas
  momentos antes en esta misma sesión, ya afirmaban "sin fusionar" —
  ahora dicen correctamente que se fusionó el 2026-07-21 y que `main`
  incluye los tokens y el envoltorio de iconografía.
- **DEVELOPMENT_ROADMAP.md** — v1.3 → v1.4. Se corrige el apartado
  "Estado" de la Fase 2 para reflejar que el PR #1 ya está fusionado.
- **INDEX.md** — v2.0 → v2.1. Se sincronizan las versiones de
  CONTEXT.md y DEVELOPMENT_ROADMAP.md.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría.** Hallazgo detectado durante la propia sesión, no
en una auditoría posterior: al comprobar el estado real del repositorio
antes de abrir el PR de la revisión del Brand Bible, se detectó que la
rama `feature/fase-2-foundations` ya no existía en el remoto — el PR #1
se había fusionado y GitHub eliminó la rama automáticamente. Como el
merge fue un merge commit normal (no squash), el historial de
`docs/brand-bible-v1.1` sigue siendo válido sin necesidad de rebase. No
se modifican las entradas anteriores del CHANGELOG que describían el PR
#1 como "sin fusionar" en su momento — son correctas como registro
histórico del estado en el instante en que se escribieron.

### 2026-07-21 (revisión formal del Brand Bible v1.0 → v1.1 — entrevista de identidad de marca)

- **DECISIONS.md** — v1.2 → v1.3. Se añade la Decisión 026: revisión
  formal del Brand Bible (v1.0 → v1.1) y nota informativa en Product
  Strategy (v1.0 → v1.1), a partir de una entrevista de identidad de
  marca. Reapertura y cierre puntual de la Fase 2 de marca en el mismo
  movimiento.
- **`02_MARCA_brand_bible.md`** — v1.0 → v1.1. Se enriquece, sin
  sustituir nada de lo permanente (apartado 15): esencia de marca
  añadida al apartado 4 (Manifiesto); segundo candidato de tagline
  provisional ("Made to express", junto a "Wear what you mean", sin
  elegir entre ambos); aspiración narrativa a diez años añadida como
  expresión emocional de la Visión de Fase 1 (que no se modifica);
  matiz de personalidad en el apartado 6, vinculado explícitamente a
  los cinco rasgos ya fijados; nota de diferenciación/reacción del
  cliente en el apartado 5; aclaración en el apartado 11 de que los
  nuevos "territorios creativos" de la entrevista son temas concretos
  dentro de los cuatro pilares narrativos ya fijos (salud mental y
  minimalismo siguen vigentes sin cambio). Bloque de cierre estándar
  actualizado. *(Ref. Decisión 026)*
- **`03_PRODUCTO_product_strategy.md`** — v1.0 → v1.1. Nota
  informativa en el apartado 4 registrando preferencias de estilo
  (casual, minimalista, oversize, streetwear) mencionadas en la misma
  entrevista — la filosofía de fit/silueta/tallaje sigue
  `PENDIENTE DE DEFINIR`, sin resolverse. Bloque de cierre estándar
  actualizado. *(Ref. Decisión 026)*
- **CONTEXT.md** — v2.0 → v2.1. Se añade el párrafo de la revisión en
  "Estado general"; se actualizan las entradas de Brand Bible/Product
  Strategy en "Aprobado" y la nota 9; se añade la nota 21 para
  cualquier IA, señalando que el trabajo vive en la rama
  `docs/brand-bible-v1.1` (sin fusionar).
- **INDEX.md** — v1.9 → v2.0. Se actualizan las filas de Brand Bible y
  Product Strategy (versión, decisiones, fecha) en las tablas de Fase 2
  y Fase 3, y en la tabla de roadmap; se añade nota en "Notas"
  documentando la reapertura/cierre puntual de la Fase 2 de marca; se
  sincroniza la versión de DECISIONS.md.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de cierre.** Se verificó que ningún elemento
marcado como permanente en el apartado 15 del Brand Bible (nombre,
principio no negociable, arquetipo del hermano mayor, cinco valores,
rechazo a la ostentación) cambió. Se verificó que la Visión de Fase 1
(`01_ESTRATEGIA_vision_mision_valores.md`) no se tocó — la nueva frase
aspiracional vive dentro del Brand Bible como expresión narrativa, no
como sustitución. No se creó `BRAND_IDENTITY.md` ni ningún documento
de marca nuevo: el Brand Bible sigue siendo la única fuente de verdad,
coherente con el patrón de consolidación ya aplicado en Decisiones 011,
018 y 021. No se tocó ningún elemento de identidad visual (logo,
color, tipografía) ni de Product Strategy más allá de la nota
informativa autorizada explícitamente. Se revisaron ambos documentos
en busca de referencias residuales a "v1.0" que debieran haberse
actualizado: no se encontró ninguna. La Fase 2 de marca queda **cerrada
de nuevo**, tras esta revisión puntual.

### 2026-07-21 (cierre oficial de la Fase 2 de DEVELOPMENT_ROADMAP.md)

- **`feature/fase-2-foundations` / PR #1** — rama de trabajo de la Fase
  2, sin fusionar a `main` todavía. Commits: tokens de diseño
  provisionales (color de acento + tipografía Geist formalizada,
  corrigiendo además un bug donde `body` nunca aplicaba la fuente ya
  cargada); envoltorio de iconografía (`src/components/ui/icon.tsx`);
  y, tras revisión de PR, dos correcciones: unificación de la escala de
  grises a `neutral` en `src/app/page.tsx` (antes usaba `zinc`,
  inconsistente con la convención documentada en `tokens.css`), y
  rediseño del envoltorio de iconos a un registro interno por nombre
  para desacoplar por completo los puntos de uso de `lucide-react`.
- **DEVELOPMENT_ROADMAP.md** — v1.2 → v1.3. La Fase 2 (Fundamentos
  visuales provisionales) pasa a estado **Completa** en la tabla
  "Estado de avance" y en su apartado "Estado"; se actualiza el bloque
  de cierre estándar (próxima fase recomendada: Fase 3, sin abrirse
  todavía).
- **CONTEXT.md** — v1.9 → v2.0. Se añade el párrafo de cierre de la
  Fase 2 en "Estado general"; se actualiza "Aprobado", "Próximo paso" y
  las notas para cualquier IA (incluida una nota nueva señalando que el
  trabajo de la Fase 2 vive en un PR todavía sin fusionar).
- **DECISIONS.md** — sin cambios. Igual que en el cierre de la Fase 1,
  no corresponde ninguna decisión nueva: los tokens y el envoltorio de
  iconos ejecutan recomendaciones ya fijadas
  (`CLAUDE_CODE.md`/`FRONTEND_ARCHITECTURE.md`), sin alternativas de
  fondo evaluadas en este cierre.
- **INDEX.md** — v1.8 → v1.9. Se actualizan las versiones de CONTEXT.md
  y CHANGELOG.md en la tabla "Documentos de sistema" — incluida la
  propia versión de INDEX.md, que había quedado desincronizada en dos
  ediciones sucesivas anteriores — y la versión/estado de
  `DEVELOPMENT_ROADMAP.md` en la tabla "Documentos técnicos de
  desarrollo" (Fases 1 y 2 Completas).
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de cierre de fase.** Se repitieron `npm run lint`,
`npm run format:check` y `npm run build` sobre `butay-web/` en el
estado final de `feature/fase-2-foundations`: los tres sin errores. Se
buscaron referencias obsoletas a "Fase 2" pendiente en `CONTEXT.md`,
`INDEX.md` y `DEVELOPMENT_ROADMAP.md`: no se encontró ninguna — las
únicas menciones restantes a "Fase 2" corresponden a la Fase 2 de
marca/producto (Identidad de marca conceptual), un concepto distinto
ya cerrado desde la Decisión 016. Se detectó y corrigió, en el mismo
movimiento, que la propia tabla "Documentos de sistema" de `INDEX.md`
no reflejaba las versiones reales de `CONTEXT.md`, `CHANGELOG.md` ni de
sí mismo — arrastrado de las dos correcciones de coherencia anteriores,
donde se bumpeó la cabecera de cada documento sin actualizar la fila
correspondiente en `INDEX.md`. Con todos los entregables y criterios de
finalización de la Fase 2 cumplidos y verificados, la fase se marca
**Completa**. El merge del PR #1 sigue pendiente de decisión del
fundador.

### 2026-07-21 (corrección de coherencia — INDEX.md desincronizado tras el cierre de la Fase 1)

- **INDEX.md** — v1.7 → v1.8. La sección "Notas" seguía afirmando "El
  desarrollo web todavía no ha comenzado — su inicio requiere
  confirmación explícita del fundador", pese a que la propia tabla
  "Documentos técnicos de desarrollo" del mismo documento ya mostraba
  `DEVELOPMENT_ROADMAP.md` como "Fase 1 Completa". Corregida para
  reflejar que el desarrollo ya ha comenzado y la Fase 1 está completa
  (repositorio, scaffold y despliegue en producción funcionando).
  Corrección de sincronización documental, no decisión de fondo — no
  genera entrada en DECISIONS.md.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría.** Se revisaron `INDEX.md` y `CONTEXT.md` en
conjunto buscando cualquier otra referencia obsoleta a que el
desarrollo web no hubiera comenzado: no se encontraron más. La única
mención similar restante (`INDEX.md`, "La Fase 4 no se ha iniciado")
es correcta — se refiere a la Fase 4 de Identidad Visual del roadmap
de marca/producto, que en efecto sigue sin abrirse.

### 2026-07-21 (corrección de coherencia — CONTEXT.md desincronizado tras el cierre de la Fase 1)

- **CONTEXT.md** — v1.7 → v1.9. Auditoría previa a la apertura de la
  Fase 2 detectó dos frases de "Estado general" que quedaron
  desactualizadas al ir añadiendo párrafos en sesiones anteriores sin
  revisar la apertura del apartado: (1) la frase inicial seguía
  afirmando que "el desarrollo web todavía no ha comenzado" y pedía
  confirmación para iniciar la Fase 1, pese a que un párrafo posterior
  del mismo documento ya registraba su cierre — corregida para reflejar
  que la Fase 1 está completa; (2) una mención a
  `00_SYSTEM_WORKFLOW.md` seguía citándolo como "v0.1, en borrador",
  pese a su aprobación formal a v1.0 `Approved` (Decisión 022) — 
  corregida a "(v1.0, `Approved`, Decisión 022)". Ambas son
  correcciones de sincronización documental, no decisiones de fondo —
  no generan entrada en DECISIONS.md.
- **INDEX.md** — v1.6 → v1.7. Se actualiza la versión de CONTEXT.md en
  la tabla "Documentos de sistema" (1.7 → 1.9) para que coincida con el
  estado real del documento.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría.** Se revisó `CONTEXT.md` completo en busca de más
referencias obsoletas a `00_SYSTEM_WORKFLOW.md` o a otros estados
superados: no se encontraron más. Se detectó, fuera del alcance
pedido, que `INDEX.md` contiene una frase equivalente y desactualizada
("El desarrollo web todavía no ha comenzado...", apartado "Notas") —
reportada al fundador, no corregida en este movimiento.

### 2026-07-21 (cierre oficial de la Fase 1 de DEVELOPMENT_ROADMAP.md)

- **Repositorio Git** — conectado a GitHub
  (`https://github.com/luvvvadri/BUTAY.git`) como remoto `origin`; la
  rama local se renombró de `master` a `main` (repo remoto vacío en el
  momento del push, sin conflicto de historial); primer `git push`
  completado. Credential helper configurado solo a nivel de
  repositorio (no global) para la autenticación del push.
- **Vercel** — proyecto importado desde el repositorio de GitHub
  (Root Directory: `butay-web/`, framework autodetectado: Next.js).
  Despliegue de producción verificado en vivo en
  `https://butay.vercel.app/` (fetch directo de la página, contenido
  confirmado). Preview Deployments por rama quedan activos por
  comportamiento por defecto de la integración GitHub↔Vercel — no se
  ejecutó una prueba en vivo de push a una rama secundaria en esta
  sesión.
- **DEVELOPMENT_ROADMAP.md** — v1.1 → v1.2. La Fase 1 (Configuración
  del proyecto) pasa a estado **Completa** en la tabla "Estado de
  avance" y en su apartado "Estado"; se actualiza el bloque de cierre
  estándar (próxima fase recomendada: Fase 2, sin abrirse todavía).
- **CONTEXT.md** — v1.6 → v1.7. Se reescribe el estado general para
  reflejar el cierre de la Fase 1 (repositorio en GitHub, despliegue en
  Vercel, URL de producción); se actualiza "Próximo paso" y la nota 19
  para cualquier IA.
- **DECISIONS.md** — sin cambios. No corresponde ninguna decisión
  nueva: conectar GitHub y Vercel es la ejecución de la recomendación
  de stack ya fijada (`CLAUDE_CODE.md` §5) y de los entregables ya
  definidos en la Decisión 021, no una elección nueva con alternativas.
- **INDEX.md** — v1.5 → v1.6. Se actualizan las versiones de CONTEXT.md
  y CHANGELOG.md en la tabla "Documentos de sistema", y la versión y
  estado de `DEVELOPMENT_ROADMAP.md` en la tabla "Documentos técnicos
  de desarrollo" (Fase 1 Completa).
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de cierre de Fase 1.** Se verificó de forma
independiente la URL de producción (`https://butay.vercel.app/`) por
fetch directo, confirmando que sirve el contenido esperado del
placeholder de la Fase 1. Se repitieron `npm run lint`, `npm run
format:check` y `npm run build` sobre `butay-web/`: los tres sin
errores. Se comprobó que el árbol de trabajo de Git está limpio antes
del commit de cierre. Se revisaron referencias cruzadas entre
documentos y numeración de versiones en INDEX.md: sin discrepancias ni
enlaces rotos. Con todos los entregables y criterios de finalización de
la Fase 1 cumplidos y verificados, la fase se marca **Completa**.

### 2026-07-20 (Fase 1 de DEVELOPMENT_ROADMAP.md — configuración técnica del proyecto)

- **DECISIONS.md** — v1.1 → v1.2. Se añade la Decisión 025: traslado del
  directorio de trabajo del proyecto de la carpeta de OneDrive a
  `C:\Users\butay\Claude\` (no sincronizada), como raíz única de
  `docs/` y `butay-web/`.
- **Estructura del proyecto** — se reorganiza a `docs/` + `butay-web/`
  + `.gitignore` + `README.md` en la raíz, según la Decisión 025. Los
  18 documentos existentes se trasladaron sin cambios de contenido
  (verificado por hash SHA-256).
- **butay-web/** — creado. Proyecto Next.js 16 (App Router) +
  TypeScript (`strict`) + Tailwind CSS v4 + ESLint, inicializado con
  `create-next-app`; se añaden Prettier, `eslint-config-prettier` y
  `prettier-plugin-tailwindcss`, integrados con ESLint sin conflicto de
  reglas; se crea la estructura de carpetas de
  `FRONTEND_ARCHITECTURE.md` (apartado 2) dentro de `src/`, vacía
  (marcada con `.gitkeep`); se limpia el contenido de plantilla
  genérico de `create-next-app` (SVGs de ejemplo, home de demostración,
  metadatos por defecto) sin introducir contenido de marca.
- **Repositorio Git** — inicializado en la raíz del proyecto; commit
  inicial `9e9b31f` (48 archivos). Identidad de Git configurada solo a
  nivel de repositorio (no global), a petición explícita del fundador.
- **DEVELOPMENT_ROADMAP.md** — v1.0 → v1.1. Se actualiza el estado de
  la Fase 1 en la tabla "Estado de avance" y se añade un apartado
  "Estado (actualizado 2026-07-20)" a la Fase 1, documentando qué
  entregables están completos y verificados (proyecto, ESLint/Prettier,
  estructura de carpetas, repositorio Git) y cuál queda pendiente
  (pipeline de despliegue / previsualización por rama, que requiere una
  cuenta de hosting del fundador). Se actualiza el bloque de cierre
  estándar (decisiones relacionadas, próxima fase recomendada).
- **CONTEXT.md** — v1.5 → v1.6. Se actualiza el estado general para
  reflejar el inicio de la Fase 1 de `DEVELOPMENT_ROADMAP.md`, su
  estado casi completo, y el bloqueo pendiente del pipeline de
  despliegue; se añade una nota nueva sobre la nueva ubicación del
  directorio de trabajo (Decisión 025).
- **INDEX.md** — v1.4 → v1.5. Se actualizan las versiones de CONTEXT.md,
  DECISIONS.md y CHANGELOG.md en la tabla "Documentos de sistema" para
  mantenerla sincronizada con el estado real.
- **CHANGELOG.md** — este mismo registro.

**Nota de auditoría de cierre de fase.** Se ejecutaron `npm run lint`,
`npm run format:check` y `npm run build` en `butay-web/`: los tres sin
errores. Se verificó que el árbol de trabajo de Git está limpio
(`git status` sin cambios pendientes tras el commit inicial). Se
comprobaron las referencias a nombres de archivo `.md` citadas en toda
la documentación contra los archivos reales de `docs/`: no se
encontraron referencias rotas — las únicas menciones a archivos
inexistentes (`CHANGELOG_2026.md`, `DECISIONS_ARCHIVE.md`,
`00_SISTEMA_metodologia.md`, los documentos técnicos fragmentados
descartados por la Decisión 021, etc.) corresponden a alternativas
futuras o descartadas ya documentadas como tales en sus propios
apartados, no a enlaces rotos. **La Fase 1 de `DEVELOPMENT_ROADMAP.md`
no se marca como cerrada**: el entregable "pipeline de despliegue
básico (previsualización por rama)" sigue pendiente de una acción del
fundador (cuenta de GitHub/hosting) que ninguna sesión de Claude Code
puede realizar en su nombre.

### 2026-07-19 (continuación — Product Strategy redactado y en Release Candidate)
- **DECISIONS.md** — se añade la Decisión 018: redacción del documento
  raíz de la Fase 3, consolidando en uno solo los tres documentos que
  el roadmap original preveía por separado.
- **03_PRODUCTO_product_strategy.md** — creado directamente en estado
  Release Candidate (v0.9), 16 apartados según el índice v2 aprobado.
  Incluye Product DNA (siete criterios + exclusiones de intención),
  arquitectura de catálogo, estrategia de colecciones y drops, ciclo de
  vida, calidad/precio (sin cifras), escalabilidad, experiencia de
  cliente y packaging, y los dos puentes hacia Fase 4 y desarrollo web.
  Pendiente de aprobación final del fundador. *(Ref. Decisión 018)*
- **GLOSSARY.md** — v0.6 → v0.7. Se añaden los términos "Product DNA",
  "Drop" y se completa "Colección"; "Línea core" remite a "Colección".
- **INDEX.md** — v1.0 → v1.1. Se añade la tabla de documentos de Fase 3;
  se consolidan las tres filas antiguas del roadmap de Fase 3 en una
  sola, reflejando la Decisión 018.
- **CONTEXT.md** — v1.1 → v1.2. Se actualiza el estado general: Fase 3
  en curso con Product Strategy en Release Candidate; se limpian notas
  obsoletas de Etapa 1/Etapa 2 ya superadas; se actualiza el próximo
  paso y se añaden dos notas nuevas (documento no aprobado todavía,
  Product DNA como filtro obligatorio).
- **CHANGELOG.md** — este mismo registro.

**Nota de autoauditoría (Director Global de Producto):** se revisó el
documento buscando contradicciones, redundancias, huecos y riesgos.
Hallazgos: (1) ninguna contradicción con documentación aprobada; (2) se
reforzaron las referencias cruzadas entre apartados (Product DNA como
filtro común en catálogo, colecciones y escalabilidad) para evitar que
quedaran como reglas aisladas; (3) se confirmó que el apartado 2
hereda por referencia la Filosofía de producto y la Voz aplicada al
producto del Brand Bible sin repetirlas; (4) se documentó como riesgo
abierto, no resuelto, la tensión entre "máxima calidad posible" (§8) y
el rango de precio ya confirmado (§10) — queda señalada para la Fase 5;
(5) se documentó como riesgo de gobernanza que el Product DNA depende
por completo del criterio del fundador mientras el proyecto sea
unipersonal, mismo riesgo ya señalado en el cierre de la Fase 2. No se
aplicó ninguna mejora que requiriera una decisión nueva del fundador.

### 2026-07-19 (continuación — metodología oficial y apertura de la Fase 3)
- **DECISIONS.md** — se añade la Decisión 017: formalización de la
  metodología de 10 etapas como documento de sistema oficial,
  `00_SYSTEM_WORKFLOW.md`.
- **00_SYSTEM_WORKFLOW.md** — creado (v0.1, En borrador). Normativa
  metodológica: filosofía de trabajo, roles y responsabilidades,
  protocolo obligatorio, las 10 etapas, reglas de aprobación, auditoría
  y actualización documental, convenciones de calidad, principios
  permanentes, gestión de incertidumbre, y flujos de cierre/apertura de
  fase. Excepción deliberada a la convención de nombres de INDEX.md.
- **INDEX.md** — v0.9 → v1.0. Se añade `00_SYSTEM_WORKFLOW.md` a la
  tabla de documentos de sistema; se corrige la tabla de documentos de
  sistema, que seguía mostrando versiones desactualizadas (0.5-0.6) de
  CONTEXT, INDEX, DECISIONS y GLOSSARY pese a sus actualizaciones
  posteriores; se registra la segunda excepción a la convención de
  nombres de archivo.
- **CONTEXT.md** — v1.0 → v1.1. Se registra la creación del workflow;
  se actualiza "En borrador/en curso" con el propio workflow y con el
  inicio de la Etapa 1 y Etapa 2 de la Fase 3 (Product Strategy); se
  añade nota para cualquier IA sobre la consulta obligatoria del
  workflow.
- **CHANGELOG.md** — v1.0 → v1.1. Este mismo registro.

**Nota de auditoría:** al actualizar INDEX.md se detectó que la tabla
"Documentos de sistema" no se había mantenido sincronizada con los
cambios de versión reales de CONTEXT.md, DECISIONS.md y GLOSSARY.md en
turnos anteriores — se corrige en este mismo cambio, consistente con la
regla de INDEX.md de no tolerar discrepancias.

### 2026-07-19 (continuación — cierre formal de la Fase 2)
- **DECISIONS.md** — se añade la Decisión 016: aprobación formal del
  Brand Bible (v0.9 → v1.0, estado `Approved`) y cierre de la Fase 2.
  No se abre la Fase 3 en la misma decisión.
- **02_MARCA_brand_bible.md** — v0.9 → v1.0. Estado: Release Candidate
  → `Approved` (equivalente a Congelado). Sin cambios de contenido
  respecto a v0.9 — solo cambio de estado y actualización del bloque de
  cierre estándar (apartado 17).
- **GLOSSARY.md** — se amplía la entrada "Documento congelado" para
  aclarar su equivalencia con la etiqueta `Approved`, usada en el Brand
  Bible por coherencia con su idioma de marca.
- **02_MARCA_informe_cierre_fase2.md** — creado (v1.0, Final). Informe
  oficial de cierre de la Fase 2: objetivo, documentos creados y
  modificados, decisiones tomadas, riesgos pendientes, dependencias
  hacia la Fase 3, lecciones aprendidas y estado general del proyecto.
- **INDEX.md** — se actualiza el estado del Brand Bible a "Aprobado
  (v1.0, Decisión 016) — Fase 2 cerrada"; se añade el Informe de cierre
  de Fase 2 a la tabla de documentos de Fase 2; se añade nota de cierre
  de fase.
- **CONTEXT.md** — se actualiza el estado general: Fase 2 cerrada y
  aprobada; el Brand Bible y el informe de cierre pasan a la lista de
  "Aprobado"; "En borrador/en curso" queda vacío; el próximo paso es
  esperar instrucción explícita del fundador para abrir la Fase 3.
- **CHANGELOG.md** — este mismo registro.

### 2026-07-19 (continuación — refinamiento de redacción: Brand Bible v0.9 Release Candidate)
- **02_MARCA_brand_bible.md** — v0.1 → v0.9 (Release Candidate). Ronda
  de refinamiento de calidad de redacción, sin cambios de arquitectura
  ni de apartados: apartado 3 con apertura más emotiva; apartado 4
  (Manifiesto) reescrito para mayor fuerza e incorpora un párrafo previo
  sobre el instante emocional que protege, además de un posible tagline
  corto ("Wear what you mean"); apartado 5 con una frase adicional que
  conecta el arquetipo con la experiencia vivida; apartado 11 incorpora
  un nuevo párrafo de "Referencias culturales" (R&B/pop confesional,
  contenido de superación personal, Kanye Diaries) sin convertirse en
  moodboard visual; apartado 13 incorpora un párrafo sobre la
  experiencia sensorial de vestir la prenda; se simplifican frases
  redundantes en los apartados 9 y 12. Es un cambio puramente de
  redacción — no requiere entrada en DECISIONS.md.
- **INDEX.md** — v0.7 → v0.8. Se actualiza el estado del Brand Bible a
  "Release Candidate (v0.9) — pendiente de aprobación final".
- **CONTEXT.md** — v0.8 → v0.9. Se actualiza el estado general y el
  próximo paso: Brand Bible en v0.9 (Release Candidate), pendiente de
  aprobación final antes de congelarse como v1.0.
- **CHANGELOG.md** — v0.8 → v0.9. Este mismo registro.

### 2026-07-19 (continuación — redacción del borrador v0.1 del Brand Bible)
- **DECISIONS.md** — v0.7 → v0.8 (implícito en la numeración de
  entradas). Se añaden las decisiones 014 (inglés como idioma principal
  de la voz de marca) y 015 (redacción del borrador v0.1 del Brand
  Bible según el índice v4).
- **02_MARCA_brand_bible.md** — creado (v0.1, En borrador). Documento
  raíz de la Fase 2, redactado siguiendo exactamente los 18 apartados
  del índice v4 aprobado, incluyendo el bloque de cierre estándar.
  Pendiente de revisión y aprobación del fundador. *(Ref. Decisiones
  011, 012, 013, 014, 015)*
- **INDEX.md** — v0.6 → v0.7. Se actualiza el estado del Brand Bible de
  "Índice aprobado (v4)" a "En borrador (v0.1) — pendiente de
  aprobación" en la tabla de Fase 2 y en el roadmap.
- **CONTEXT.md** — v0.7 → v0.8. Se actualiza el estado general y el
  próximo paso: el borrador del Brand Bible está completo y pendiente
  de revisión del fundador; no se ha avanzado a la Fase 3. Se añaden dos
  notas nuevas para cualquier IA (idioma de marca, estado no aprobado
  del Brand Bible).
- **CHANGELOG.md** — v0.7 → v0.8. Este mismo registro.

**Nota de autoauditoría:** se verificó que el contenido del Brand Bible
(v0.1) no contradice ninguno de los cuatro documentos congelados de la
Fase 1 ni las decisiones registradas en DECISIONS.md; que no se afirma
ningún dato no aprobado (materiales, precios, identidad visual quedan
explícitamente marcados como `PENDIENTE DE DEFINIR`); que el
posicionamiento accesible y anti-ostentación se mantiene en todos los
apartados: que los 18 apartados coinciden exactamente con el índice v4
aprobado; y que cada apartado cierra con una síntesis accionable.

### 2026-07-19 (continuación — arquitectura definitiva del Brand Bible: índice v4)
- **DECISIONS.md** — v0.6 → v0.7. Se añaden las decisiones 012
  (corrección del roadmap: Fase 3 = Product Strategy, Fase 4 =
  Identidad Visual / Design System) y 013 (bloque de cierre estándar
  obligatorio desde el Brand Bible en adelante).
- **INDEX.md** — v0.5 → v0.6. Se corrige el orden de las Fases 3 y 4 en
  la tabla de roadmap y en la convención de nombres de archivo; se
  actualiza el estado del Brand Bible a "Índice aprobado (v4)"; se añade
  nota sobre el bloque de cierre estándar. *(Ref. Decisiones 012, 013)*
- **CONTEXT.md** — v0.6 → v0.7. Se actualiza el estado general y el
  próximo paso: arquitectura del Brand Bible aprobada (índice v4),
  pendiente de redacción; se añaden dos notas nuevas para cualquier IA
  sobre el roadmap corregido y el bloque de cierre estándar.
  *(Ref. Decisiones 012, 013)*
- **GLOSSARY.md** — v0.5 → v0.6. Se añade el término "Bloque de cierre
  estándar" en la categoría "Metodología del proyecto".
  *(Ref. Decisión 013)*
- **CHANGELOG.md** — v0.6 → v0.7. Este mismo registro.

**Nota sobre el índice del Brand Bible:** pasó por tres rondas de
revisión crítica antes de esta arquitectura definitiva (v4, 18
apartados): v1 (propuesta inicial), v2 (autocrítica: se detectó la
ausencia de Manifiesto de marca, Estrategia de idioma, Sensibilidad y
líneas rojas, y una jerarquía incorrecta de la voz aplicada a producto),
v3 (se incorporan Filosofía de producto y Evolución de la marca, y se
fusionan los antiguos "Voz aplicada por canal" y "Ejemplos de
aplicación"), v4 (se corrigen las referencias de fase de los dos
apartados-puente conforme a la Decisión 012, y el antiguo "Anexo —
Trazabilidad" se sustituye por el bloque de cierre estándar de la
Decisión 013). El índice v4 no se ha usado todavía para redactar
contenido.

### 2026-07-19 (continuación — cierre formal de la Fase 1 y apertura del Brand Bible)
- **DECISIONS.md** — v0.5 → v0.6. Se añaden las decisiones 010 (aprobación
  formal de los cuatro documentos raíz de la Fase 1) y 011 (definición del
  Brand Bible como documento consolidado de la Fase 2).
- **01_ESTRATEGIA_vision_mision_valores.md** — v0.3 → v1.0. Estado: En
  borrador → Congelado. Sin cambios de contenido. *(Ref. Decisión 010)*
- **01_ESTRATEGIA_mercado_publico_objetivo.md** — v0.3 → v1.0. Estado: En
  borrador → Congelado. Sin cambios de contenido. *(Ref. Decisión 010)*
- **01_ESTRATEGIA_analisis_competencia.md** — v0.3 → v1.0. Estado: En
  borrador → Congelado. Sin cambios de contenido. *(Ref. Decisión 010)*
- **01_ESTRATEGIA_posicionamiento_marca.md** — v0.3 → v1.0. Estado: En
  borrador → Congelado. Sin cambios de contenido; se añade nota
  aclaratoria de que el Brand Bible parte del posicionamiento accesible
  ya aprobado, no de un posicionamiento premium/lujo. *(Ref. Decisión 010)*
- **GLOSSARY.md** — v0.4 → v0.5. Se añade el término "Brand Bible" en la
  categoría "Marca y producto". *(Ref. Decisión 011)*
- **CONTEXT.md** — v0.5 → v0.6. Se actualiza el estado general: Fase 1
  cerrada y aprobada; los cuatro documentos pasan de "En borrador/en
  curso" a "Aprobado"; se actualiza el próximo paso hacia la aprobación
  del índice del Brand Bible. *(Ref. Decisiones 010, 011)*
- **INDEX.md** — v0.4 → v0.5. Se actualiza la tabla de Fase 1 a
  `Aprobado` (v1.0); se corrige el estado de "Naming" en el roadmap a
  `Aprobado` (estaba desactualizado desde la Decisión 009); se sustituyen
  las filas de roadmap "Personalidad y tono de voz" y "Territorio
  narrativo" por una única fila "Brand Bible"; se añade la tabla de
  documentos de Fase 2. *(Ref. Decisión 011)*
- **CHANGELOG.md** — v0.5 → v0.6. Este mismo registro.

### 2026-07-18
- **CONTEXT.md** — creado (v0.1). Documento de estado inicial del
  proyecto, fase de transición 0 → 1. *(Ref. Decisión 004)*
- **INDEX.md** — creado (v0.1). Mapa maestro inicial con los cinco
  documentos de sistema y el roadmap completo de fases. *(Ref. Decisión
  004)*
- **DECISIONS.md** — creado (v0.1). Registro inicial con las decisiones
  001 a 004. *(Ref. Decisión 004)*
- **GLOSSARY.md** — creado (v0.1). Glosario inicial con términos de
  metodología definidos y términos de marca marcados como pendientes.
  *(Ref. Decisión 004)*
- **CHANGELOG.md** — creado (v0.1). Este mismo documento.
  *(Ref. Decisión 004)*

### 2026-07-18 (continuación — cierre de entrevista Fase 1)
- **01_ESTRATEGIA_vision_mision_valores.md** — creado (v0.1, En borrador).
  *(Ref. Decisión 007)*
- **01_ESTRATEGIA_mercado_publico_objetivo.md** — creado (v0.1, En
  borrador). *(Ref. Decisión 007)*
- **01_ESTRATEGIA_analisis_competencia.md** — creado (v0.1, En borrador).
  *(Ref. Decisión 007)*
- **01_ESTRATEGIA_posicionamiento_marca.md** — creado (v0.1, En
  borrador). *(Ref. Decisión 007)*
- **DECISIONS.md** — v0.1 → v0.2. Se añaden las decisiones 005, 006 y
  007 (principio no negociable, resolución de tensión alcance/intimidad,
  cierre de la entrevista de Fase 1).
- **GLOSSARY.md** — v0.1 → v0.2. Se definen los términos KUYA, Público
  objetivo, Posicionamiento y Tono de voz; se añade el término
  metodológico "Principio no negociable".
- **INDEX.md** — v0.1 → v0.2. Se añade la tabla de documentos de Fase 1
  y se actualiza su estado de `Pendiente` a `En borrador` en el roadmap.
- **CONTEXT.md** — v0.1 → v0.2. Se actualiza el estado general, lo
  aprobado, lo en borrador y el próximo paso tras el cierre de la
  entrevista de Fase 1.

### 2026-07-18 (continuación — pausa por validación de naming)
- **DECISIONS.md** — v0.2 → v0.3. Se añade la Decisión 008 (pausa de
  aprobación de Fase 1 e inicio de Fase 2 hasta validar el nombre de
  marca, por riesgo de conflicto detectado con "KUYA").
- **CONTEXT.md** — v0.2 → v0.3. Se actualiza el estado general y el
  próximo paso: exploración de alternativas de naming antes de aprobar
  la Fase 1. *(Ref. Decisión 008)*

### 2026-07-19 (continuación — nombre de marca definitivo: Butay)
- **DECISIONS.md** — v0.3 → v0.4. Se añade la Decisión 009: "Butay" se
  define como nombre de marca definitivo, en sustitución de "KUYA".
- **CONTEXT.md** — v0.3 → v0.4. Se actualiza el estado general: naming
  resuelto, pendiente de actualizar los documentos de Fase 1.
  *(Ref. Decisión 009)*
- **GLOSSARY.md** — v0.2 → v0.3. Se actualiza la entrada de marca de
  "KUYA" a "Butay", con su significado ("dar/compartir") y su relación
  con el arquetipo "hermano mayor". *(Ref. Decisión 009)*
- **01_ESTRATEGIA_vision_mision_valores.md** — v0.1 → v0.2. Se
  actualiza el nombre de marca a "Butay" en todo el documento; se añade
  nota sobre el origen del nombre y la continuidad del arquetipo
  "hermano mayor". *(Ref. Decisión 009)*
- **01_ESTRATEGIA_mercado_publico_objetivo.md** — v0.1 → v0.2. Se
  actualiza el nombre de marca a "Butay". *(Ref. Decisión 009)*
- **01_ESTRATEGIA_analisis_competencia.md** — v0.1 → v0.2. Se actualiza
  el nombre de marca a "Butay". *(Ref. Decisión 009)*
- **01_ESTRATEGIA_posicionamiento_marca.md** — v0.1 → v0.2. Se actualiza
  el nombre de marca a "Butay" en la declaración de posicionamiento y el
  resto del documento. *(Ref. Decisión 009)*
- **INDEX.md** — v0.2 → v0.3. Se actualizan versión y fecha de los
  cuatro documentos de Fase 1 tras el cambio de nombre de marca.

### 2026-07-19 (continuación — auditoría de consistencia documental)
- **CONTEXT.md** — v0.4 → v0.5. Se corrigen referencias residuales a
  "KUYA" en el Objetivo y Reglas de uso; se corrige el "Próximo paso" y
  "En borrador / en curso", que describían el renombrado como pendiente
  cuando ya se había aplicado a los cuatro documentos de Fase 1.
- **INDEX.md** — v0.3 → v0.4. Se corrige referencia residual a "KUYA" en
  el Objetivo y en la tabla de roadmap (Fase 0). Se corrige la tabla de
  "Documentos de sistema", que seguía mostrando versión 0.1 y fecha
  2026-07-18 para los cinco documentos base pese a sus actualizaciones
  posteriores.
- **DECISIONS.md** — v0.4 → v0.5. Se corrige referencia residual a
  "KUYA" en el Objetivo. El registro histórico (Decisiones 001-009) se
  mantiene sin alterar, por ser append-only.
- **GLOSSARY.md** — v0.3 → v0.4. Se corrige referencia residual a "KUYA"
  en el Objetivo.
- **01_ESTRATEGIA_vision_mision_valores.md** — v0.2 → v0.3. Se corrige
  referencia residual a "KUYA" en el Objetivo; se corrige el nombre de
  sección desactualizado ("Lo que KUYA no es") en la descripción de
  estructura del documento.
- **01_ESTRATEGIA_mercado_publico_objetivo.md** — v0.2 → v0.3. Se
  corrige referencia residual a "KUYA" en el Objetivo.
- **01_ESTRATEGIA_analisis_competencia.md** — v0.2 → v0.3. Se corrigen
  cuatro referencias residuales a "KUYA": en el Objetivo, en la Nota
  metodológica, en la tabla de competidores identificados (entrada de
  Takkra) y en Riesgo competitivo identificado.
- **01_ESTRATEGIA_posicionamiento_marca.md** — v0.2 → v0.3. Se corrigen
  dos referencias residuales a "KUYA": en el Objetivo y en Palabra de
  posicionamiento aspiracional.
- **CHANGELOG.md** — v0.4 → v0.5. Este mismo registro de auditoría.

**Nota de auditoría:** las referencias a "KUYA" dentro del registro
histórico de DECISIONS.md (Decisiones 001-008) y del historial de
CHANGELOG.md correspondiente a esas fechas se mantienen intencionalmente
sin cambios, por tratarse de documentos append-only que registran el
nombre vigente en el momento de cada decisión.

### 2026-07-19 (registro consolidado — Fase 1 a cierre de Fase 3)

**Nota de auditoría:** al preparar el cierre formal de la Fase 3 se
detectó que este archivo no se había actualizado desde la auditoría de
naming, pese a que INDEX.md, CONTEXT.md y DECISIONS.md sí registraban
los cambios posteriores. La entrada siguiente reconstruye, de forma
consolidada, todo lo ocurrido entre la aprobación de la Fase 1 y el
cierre de la Fase 3, para que CHANGELOG.md quede sincronizado con el
resto del sistema documental.

- **DECISIONS.md** — se añaden las Decisiones 010 a 020: aprobación y
  congelación de los cuatro documentos de Fase 1 (010); consolidación
  del Brand Bible como documento raíz único de la Fase 2 (011);
  corrección del orden de fases en el roadmap, Fase 3 = Product
  Strategy / Fase 4 = Identidad Visual (012); adopción del bloque de
  cierre estándar de cinco campos para todo documento raíz desde el
  Brand Bible (013); inglés como idioma principal de la voz de marca
  (014); refinamiento de redacción del Brand Bible a v0.9 RC (015);
  aprobación formal del Brand Bible v1.0 y cierre de la Fase 2 (016);
  creación de `00_SYSTEM_WORKFLOW.md` como normativa metodológica
  oficial (017); consolidación de Product Strategy como documento raíz
  único de la Fase 3, en estado Release Candidate v0.9 (018);
  actualización de la arquitectura de Product Strategy a v1.0 tras
  revisión crítica exhaustiva (019); aprobación formal de Product
  Strategy v1.0 y cierre de la Fase 3 (020).
- **02_MARCA_brand_bible.md** — creado desde cero: índice diseñado y
  revisado en cuatro rondas críticas (v1→v2→v3→v4), redactado en 18
  apartados (0-17), refinado a v0.9 (Release Candidate) y aprobado como
  **v1.0, `Approved`**. *(Ref. Decisiones 011-016)*
- **02_MARCA_informe_cierre_fase2.md** — creado (v1.0, Final). Informe
  oficial de cierre de la Fase 2. *(Ref. Decisión 016)*
- **00_SYSTEM_WORKFLOW.md** — creado (v0.1, En borrador). Formaliza la
  metodología de 10 etapas, roles, protocolo obligatorio y reglas de
  aprobación/auditoría/actualización documental usadas desde la Fase 2.
  *(Ref. Decisión 017)*
- **03_PRODUCTO_product_strategy.md** — creado desde cero: arquitectura
  diseñada y revisada (v1→v2), entrevista de fundador completada en 3
  bloques acelerados, redactado en 16 apartados como Release Candidate
  v0.9, sometido a revisión crítica exhaustiva equivalente a la del
  Brand Bible, reestructurado a 15 apartados (arquitectura v1.0: fusión
  de "Principios para futuras colecciones" en "Estrategia de
  colecciones", fusión de los dos puentes de fase en un único apartado
  con dos subapartados, nuevo apartado "Evolución de Product Strategy",
  notas de alcance sobre gobernanza del Product DNA, fit/tallaje,
  escalabilidad geográfica y carácter no permanente de las 8-15
  referencias de lanzamiento) y aprobado como **v1.0, `Approved`**.
  *(Ref. Decisiones 018-020)*
- **GLOSSARY.md** — se añaden o amplían los términos "Brand Bible",
  "Bloque de cierre estándar", "Documento congelado" (con nota de
  equivalencia con `Approved`), "Product DNA", "Drop", "Colección"
  (ampliada) y "Línea core" (redirección a "Colección").
  *(Ref. Decisiones 013, 016, 018)*
- **INDEX.md** — se registran los cuatro documentos de Fase 1 como
  `Aprobado`; se añaden las filas de Fase 2 (Brand Bible e informe de
  cierre) y Fase 3 (Product Strategy, informe de cierre y
  WEB_HANDOFF.md); se corrige el orden de fases en la convención de
  nombres de archivo; se corrige una desincronización detectada en la
  tabla "Documentos de sistema"; se actualiza el roadmap a `Aprobado`
  para las Fases 2 y 3. *(Ref. Decisiones 010-012, 016, 020)*
- **CONTEXT.md** — reescrito en varias ocasiones (no acumulativo) para
  reflejar: cierre de la Fase 1, apertura y cierre de la Fase 2,
  creación del workflow, apertura de la Fase 3, y su cierre formal.
- **03_PRODUCTO_informe_cierre_fase3.md** — creado (v1.0, Final).
  Informe oficial de cierre de la Fase 3. *(Ref. Decisión 020)*

### 2026-07-19 (cierre de la Fase 3 y preparación del handoff técnico)
- **03_PRODUCTO_product_strategy.md** — confirmado como v1.0, `Approved`.
  No se le realizan más cambios de contenido; cualquier evolución futura
  pasa por el apartado 12 ("Evolución de Product Strategy").
- **WEB_HANDOFF.md** — creado (v1.0, Final). Documento técnico de
  transición para Claude Code: resume Brand Bible y Product Strategy en
  formato estructurado, sin reflexiones extensas, marcando como
  `PENDIENTE DE DEFINIR` toda información no derivable de decisiones ya
  aprobadas. Punto de entrada oficial para el desarrollo técnico de la
  web. *(Ref. Decisión 020)*

### 2026-07-20 (auditoría completa y entrega técnica — "Developer Handoff" para Claude Code)

- **Auditoría documental completa.** Se releyeron los 15 documentos del
  proyecto (sistema, Fase 1, Fase 2, Fase 3, WEB_HANDOFF.md) contra la
  lista de archivos reales de la carpeta. No se encontraron referencias
  a archivos inexistentes ni contradicciones de fondo entre documentos.
  Dos hallazgos:
  1. **GLOSSARY.md** — el término "Documento congelado" solo
     mencionaba el Brand Bible como ejemplo de la etiqueta `Approved`,
     pese a que Product Strategy también la usa desde la Decisión 020.
     Corregido (v0.7 → v0.8).
  2. **00_SYSTEM_WORKFLOW.md** sigue en v0.1, "En borrador — pendiente
     de aprobación del fundador", pese a haber gobernado de forma
     efectiva el cierre completo de la Fase 2 y la Fase 3. No se
     corrige unilateralmente porque su propia Regla de aprobación
     exige aprobación expresa del fundador — queda señalado como
     pendiente de decisión, no como error a corregir por sí solo.
- **DECISIONS.md** — se añade la Decisión 021: consolidación de la
  documentación técnica de desarrollo en tres documentos en vez de
  fragmentarla por tema. Versión de cabecera actualizada a 1.0 para
  reflejar el volumen real de decisiones registradas (021).
- **GLOSSARY.md** — v0.7 → v0.8 (ver hallazgo 1 de la auditoría).
- **CLAUDE_CODE.md** — creado (v1.0, Final). Puerta de entrada técnica
  oficial para cualquier sesión de Claude Code: cómo trabajar, orden de
  lectura, documentos fuente y prohibidos, stack recomendado,
  filosofía y principios de arquitectura, convenciones de código,
  reglas de componentes/TypeScript/Tailwind/SEO/accesibilidad/
  rendimiento, preparación para i18n y e-commerce, gestión de estado,
  animaciones, y protocolo de inicio/cierre de sesión. *(Ref. Decisión
  021)*
- **FRONTEND_ARCHITECTURE.md** — creado (v1.0, Final). Arquitectura de
  frontend sin código: estructura de carpetas, organización,
  componentes, layouts, rutas, estado, utilidades, hooks, tipos,
  assets, tipografía, iconografía, variables globales, escalabilidad,
  mantenibilidad, convenciones y rendimiento — cada decisión
  justificada frente a Product Strategy, Brand Bible o una necesidad
  técnica explícita. *(Ref. Decisión 021)*
- **DEVELOPMENT_ROADMAP.md** — creado (v1.0, Final en estructura, vivo
  en el seguimiento de estado). Roadmap técnico puro, sin contenido de
  marca, en 13 fases (Configuración del proyecto → QA final y
  preparación para producción), cada una con objetivo, dependencias,
  documentos necesarios, entregables y criterios de finalización.
  *(Ref. Decisión 021)*
- **INDEX.md** — v1.2 → v1.3. Se añade la tabla "Documentos técnicos de
  desarrollo" (WEB_HANDOFF.md, CLAUDE_CODE.md, FRONTEND_ARCHITECTURE.md,
  DEVELOPMENT_ROADMAP.md); se registra la tercera categoría de
  excepción a la convención de nombres de archivo (Decisión 021); se
  actualiza la tabla "Documentos de sistema" con las versiones
  vigentes de CONTEXT, INDEX, DECISIONS, GLOSSARY y CHANGELOG.
- **CONTEXT.md** — v1.3 → v1.4. Se registra la finalización del
  Developer Handoff técnico y el hallazgo de auditoría sobre
  `00_SYSTEM_WORKFLOW.md`; se actualiza "Próximo paso".
- **CHANGELOG.md** — v1.3 → v1.4. Este mismo registro.

### 2026-07-20 (última sesión de preparación — aprobación del workflow y ajustes finales)

- **00_SYSTEM_WORKFLOW.md** — v0.1 (`En borrador`) → **v1.0**, estado
  `Approved`. Se añade el rol **Director Técnico** a la tabla de roles
  y responsabilidades (apartado 2), con sus responsabilidades, momento
  de intervención, documentos que revisa y relación con el Director de
  Marca. *(Ref. Decisión 022)*
- **DECISIONS.md** — se añaden las Decisiones 022 (aprobación del
  workflow y rol Director Técnico), 023 (sección "Testing & Quality
  Assurance" en CLAUDE_CODE.md) y 024 (sección "Security & GDPR" en
  CLAUDE_CODE.md). Cabecera actualizada a v1.1; se corrige además su
  "Última actualización", que había quedado en 2026-07-19 pese a la
  Decisión 021 añadida ese mismo día 20.
- **CLAUDE_CODE.md** — v1.0 → v1.1. Se añaden los apartados 21
  ("Testing & Quality Assurance") y 22 ("Security & GDPR"); se
  renumeran los apartados siguientes (Documentación de cambios,
  Metodología de trabajo, Qué hacer al comenzar/terminar sesión) de
  21-24 a 23-26; se actualiza la dependencia a `00_SYSTEM_WORKFLOW.md
  (v1.0, Approved)` y la lista de "Decisiones relacionadas" del bloque
  de cierre. *(Ref. Decisiones 022, 023, 024)*
- **Corrección de metadatos desactualizados (auditoría de esta
  sesión).** Se encontraron y corrigieron tres "Última actualización"
  desincronizadas respecto al contenido real: INDEX.md, DECISIONS.md y
  este mismo CHANGELOG.md seguían fechados el 2026-07-19 pese a
  contener cambios del 2026-07-20. Corregidos los tres.
- **INDEX.md** — v1.3 → v1.4. Se actualiza la fila de
  `00_SYSTEM_WORKFLOW.md` a v1.0/`Approved`; se actualiza la fila de
  `CLAUDE_CODE.md` a v1.1; se corrige la fecha de cabecera.
- **CONTEXT.md** — v1.4 → v1.5. Se registra la aprobación del workflow,
  el cierre del punto de gobernanza pendiente, y las adiciones a
  `CLAUDE_CODE.md`.
- **GLOSSARY.md** — v0.8 → v0.9. El término "Documento congelado" se
  amplía para incluir `00_SYSTEM_WORKFLOW.md` como ejemplo de
  normativa de sistema aprobada bajo la etiqueta `Approved`.
- **CHANGELOG.md** — v1.3 → v1.5 (se corrige en el mismo movimiento la
  desincronización de cabecera señalada arriba). Este mismo registro.
