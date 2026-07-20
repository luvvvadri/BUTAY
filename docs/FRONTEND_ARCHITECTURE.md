# FRONTEND_ARCHITECTURE.md

> **Tipo de documento:** Documento técnico — arquitectura de frontend
> **Versión:** 1.0
> **Fecha de creación:** 2026-07-20
> **Última actualización:** 2026-07-20
> **Estado:** Final
> **Depende de:** CLAUDE_CODE.md; WEB_HANDOFF.md; Product Strategy — Butay (v1.0)

---

## Objetivo

Definir la arquitectura técnica recomendada para el frontend de la web
de Butay: cómo se organiza el proyecto, qué responsabilidad tiene cada
capa, y por qué. Es un documento de **arquitectura, no de
implementación**: no contiene código, solo la estructura y su
justificación. `CLAUDE_CODE.md` remite aquí para el detalle técnico
completo.

## Cuándo debe actualizarse

- Cuando la estructura real del proyecto diverja de lo aquí descrito.
- Al tomar una decisión arquitectónica nueva (nueva capa, cambio de
  organización de carpetas, nueva convención estructural).
- Nunca para reflejar una excepción puntual de una sola tarea — solo
  cambios de arquitectura que se espera que persistan.

## Reglas de uso

1. Es de consulta obligatoria antes de decidir dónde colocar cualquier
   archivo nuevo.
2. Las decisiones aquí descritas son técnicas, justificadas por los
   requisitos ya aprobados en Product Strategy y `WEB_HANDOFF.md` — no
   inventan alcance de producto nuevo.
3. Si una necesidad real del desarrollo choca con esta arquitectura, se
   propone el cambio aquí primero, no se improvisa una excepción en el
   código.

## Buenas prácticas

- Mantener la correspondencia entre la jerarquía de datos del catálogo
  (Categoría → Colección → Drop → SKU → Variante) y la organización de
  tipos, rutas y componentes — es el eje que ordena todo lo demás.
- Preferir menos capas y más claras a muchas capas con responsabilidad
  ambigua.

---

## 1. Stack tecnológico

Ver `CLAUDE_CODE.md` (apartado 5) para la tabla completa con
justificación. Resumen: Next.js (App Router) + TypeScript + Tailwind
CSS + Radix UI (primitivas accesibles) + Framer Motion (uso
restringido) + capa de datos propia y tipada para el catálogo. Backend
de e-commerce real `PENDIENTE DE DEFINIR`.

**Síntesis:** este documento asume ese stack como base; si cambia,
`CLAUDE_CODE.md` y este documento deben actualizarse juntos.

## 2. Estructura de carpetas

```
/src
  /app                    → rutas (App Router de Next.js)
  /components
    /ui                   → componentes base reutilizables (botón, input, badge...)
    /product              → componentes específicos de producto/catálogo
    /layout               → header, footer, navegación, contenedores de página
    /content              → componentes para renderizar contenido de marca (manifiesto, secciones editoriales)
  /content                → contenido de marca versionado como datos (copy, mensajes, textos largos)
  /data                   → capa de acceso a datos de catálogo (hoy: datos locales tipados; mañana: cliente de backend real)
  /hooks                  → lógica reutilizable con estado (filtros, media queries, etc.)
  /lib                    → utilidades puras sin estado (formateo, helpers)
  /types                  → tipos compartidos (Categoría, Colección, Drop, SKU, Variante, visibilidad de mensaje)
  /styles                 → configuración global de estilos (tokens Tailwind, fuentes)
  /i18n                   → configuración y diccionarios de internacionalización
/public
  /images                 → assets estáticos optimizables
```

**Justificación.** La separación entre `/content` (contenido de marca)
y `/components` (presentación) existe porque el Brand Bible y Product
Strategy son la fuente de verdad del contenido — aislarlo evita que el
mensaje de marca quede disperso y hardcodeado dentro de componentes,
y facilita que un cambio de copy no implique tocar lógica de
presentación. `/data` se separa de `/types` porque los tipos son
contrato (estable), mientras que el origen de los datos (hoy local,
mañana un backend) es implementación (cambiante) — separar ambos
permite sustituir el backend sin tocar los tipos ni los componentes que
los consumen.

**Síntesis:** ante la duda de dónde va un archivo nuevo, la pregunta es
si es contenido de marca (`/content`), dato de catálogo (`/data`),
tipo (`/types`), lógica con estado (`/hooks`), lógica sin estado
(`/lib`) o presentación (`/components`) — cada archivo tiene exactamente
un sitio correcto.

## 3. Organización del proyecto

El proyecto se organiza por **responsabilidad técnica**, no por
"feature" o página — con un catálogo todavía pequeño (8-15 referencias,
dos categorías, Product Strategy §4), organizar por feature
fragmentaría prematuramente algo que hoy es simple. Si el catálogo
crece de forma significativa (Product Strategy §11, sin límite
numérico de categorías), esta organización puede revisarse hacia una
estructura por dominio — no se hace antes de que esa necesidad sea
real.

**Síntesis:** organización por capa técnica mientras el proyecto es
pequeño; revisar hacia organización por dominio solo si el catálogo
crece lo suficiente para justificarlo.

## 4. Componentes

Tres niveles, sin mezclar responsabilidades entre ellos:

1. **Componentes base (`/components/ui`).** Sin conocimiento de marca
   ni de catálogo — botón, input, badge, modal. Reutilizables en
   cualquier proyecto, no solo en Butay.
2. **Componentes de dominio (`/components/product`, `/components/content`).**
   Conocen la forma de los datos de Butay (producto, colección,
   mensaje de marca) pero no dependen de una página concreta —
   tarjeta de producto, selector de variante, bloque de manifiesto.
3. **Componentes de página (`/app/**`).** Componen los dos niveles
   anteriores para una ruta concreta. No definen estilos ni lógica
   propia más allá de la composición.

**Justificación.** Esta separación permite que un cambio de estilo base
(apartado 13 de `CLAUDE_CODE.md`) no obligue a tocar lógica de
producto, y que un cambio en cómo se presenta un producto no obligue a
tocar cada página que lo usa.

**Síntesis:** ningún componente de página contiene lógica de negocio ni
estilos únicos no reutilizables — si los tiene, algo debería
extraerse a un nivel inferior.

## 5. Layouts

- Un layout raíz (header, footer, estructura general) coherente con la
  identidad "cálida, tranquila, cercana" del Brand Bible (§16).
- Layouts específicos solo donde la estructura de página realmente
  difiera (por ejemplo, ficha de producto vs. página editorial de
  manifiesto) — no se crea un layout nuevo por cada ruta si comparten
  estructura.
- Los layouts no contienen datos de catálogo — los reciben de la
  página, para mantenerlos reutilizables entre secciones.

**Síntesis:** un layout nuevo se justifica solo cuando la estructura
visual difiere de verdad, no cuando solo cambia el contenido.

## 6. Rutas

Reflejan la jerarquía del catálogo (Product Strategy §4,
`WEB_HANDOFF.md` §5 y §9):

```
/                                    → home
/manifesto (o equivalente)           → contenido editorial de marca
/catalog                             → catálogo completo
/catalog/[category]                  → por categoría (camisetas, sudaderas)
/collections/[collection]            → colección (permanente o temporal)
/product/[sku]                       → ficha de producto
/archive                             → productos archivados (Product Strategy §7)
```

El idioma de estas rutas (inglés/español) depende de la decisión
`PENDIENTE DE DEFINIR` de idioma de interfaz (Brand Bible §8) — la
estructura debe permitir prefijar por idioma (`/en/...`, `/es/...`) sin
reescritura, aunque al lanzamiento solo exista un idioma.

**Justificación.** Las rutas siguen la jerarquía de datos en vez de una
estructura de menú arbitraria, para que la URL sea siempre predecible a
partir del modelo de catálogo — reduce la necesidad de mantener un
mapa de rutas separado del modelo de datos.

**Síntesis:** cualquier ruta nueva debe poder justificarse desde la
jerarquía del catálogo o desde contenido editorial de marca — no se
crean rutas por conveniencia de navegación sin anclaje en el modelo de
datos.

## 7. Gestión de estado

Ver también `CLAUDE_CODE.md` (apartado 19).

- Datos de catálogo: se obtienen en el servidor (Server Components),
  no se duplican en estado de cliente salvo que una interacción
  concreta lo requiera (por ejemplo, selección de variante antes de
  confirmar).
- Estado de interfaz (filtros, selección de variante, apertura de
  menú): local al componente o subárbol que lo necesita.
- Estado global de cliente: se introduce solo si aparece una necesidad
  real compartida por partes no relacionadas de la interfaz (ejemplo
  futuro: carrito de compra) — no se instala una librería de estado
  global de forma preventiva.

**Justificación.** El catálogo de lanzamiento es pequeño y mayormente
de lectura; anticipar una arquitectura de estado compleja antes de
tener carrito o cuentas de usuario sería sobre-construir (apartado 7,
principio "preparado para crecer, no sobre-construido").

**Síntesis:** no existe gestor de estado global hasta que exista una
funcionalidad real (como el carrito) que lo justifique.

## 8. Utilidades

`/lib` contiene funciones puras, sin estado ni efectos secundarios:
formateo de precio (cuando exista precio real), slugs de URL a partir
del nombre de producto, ordenación de catálogo, validaciones de datos.
Se separan de `/hooks` porque no dependen del ciclo de vida de React —
son testeables de forma aislada.

**Síntesis:** si una función no necesita React para ejecutarse, vive en
`/lib`, nunca en un hook.

## 9. Hooks

`/hooks` contiene lógica reutilizable que sí depende de React (estado,
efectos): hook de filtros de catálogo, hook de media query para
responsive, hook de preferencia de movimiento reducido (apartado 20 de
`CLAUDE_CODE.md`). Un hook nunca conoce detalles de una página
concreta — si lo hace, dejó de ser reutilizable y debería vivir junto a
esa página.

**Síntesis:** un hook que solo se usa en un sitio y conoce ese sitio en
detalle no es un hook reutilizable — es lógica de página mal ubicada.

## 10. Tipos

`/types` centraliza, como fuente única, los tipos que reflejan
decisiones ya aprobadas:

- `Category`, `Collection` (con estado `permanent` / `temporary`),
  `Drop` (opcional), `SKU`, `Variant`.
- `MessageVisibility`: unión literal `'featured' | 'subtle' | 'hidden'`
  (traducción técnica de "protagonista / discreto / oculto", Product
  DNA).
- `ProductStatus`: unión literal `'active' | 'archived'` — nunca
  `deleted`, coherente con "archivar, no borrar" (Product Strategy §7).

Estos tipos no se redefinen localmente en ningún componente — se
importan siempre desde `/types`.

**Justificación.** Centralizar estos tipos es lo que hace cumplible en
la práctica una regla como "nunca se borra un producto, se archiva": si
el tipo solo admite `active` / `archived`, un desarrollador no puede
introducir accidentalmente un estado `deleted`.

**Síntesis:** los tipos del catálogo son el mecanismo técnico que hace
imposible, no solo desaconsejable, violar las reglas de producto ya
aprobadas.

## 11. Assets

- `/public/images` para assets estáticos servidos directamente;
  imágenes de producto optimizadas en build o vía el optimizador de
  imágenes del framework.
- Ningún asset de marca definitivo (logo, paleta, iconografía propia)
  se añade todavía como definitivo — la Fase 4 (Identidad Visual) no
  está aprobada. Se recomienda trabajar con placeholders claramente
  identificados como tales.

**Síntesis:** ningún asset visual se trata como "de marca final" hasta
que exista una Fase 4 aprobada que lo confirme.

## 12. Imágenes

- Formatos modernos (WebP/AVIF) con fallback automático del framework.
- Tamaños responsivos generados automáticamente, nunca una sola
  resolución servida a todos los dispositivos.
- Texto alternativo obligatorio, coherente con `CLAUDE_CODE.md`
  (apartado 15, accesibilidad).
- El volumen de imágenes crecerá con el catálogo (Product Strategy
  §11) — la estrategia de imagen debe pensarse para cientos de
  productos, no solo para los 8-15 de lanzamiento.

**Síntesis:** la estrategia de imagen se diseña para el catálogo que
Butay puede llegar a tener, no solo para el de lanzamiento.

## 13. Tipografía

`PENDIENTE DE DEFINIR` a nivel de marca — la tipografía real es objeto
de la Fase 4 (Identidad Visual / Design System), todavía no iniciada.
Recomendación técnica mientras tanto: usar una tipografía de sistema o
una fuente variable de uso libre, cargada de forma performante
(`next/font` o equivalente), fácil de sustituir por la tipografía de
marca sin tocar componentes cuando la Fase 4 la defina.

**Síntesis:** ninguna tipografía se trata como definitiva de marca
todavía; se elige por rendimiento y facilidad de sustitución futura.

## 14. Iconografía

`PENDIENTE DE DEFINIR` a nivel de estilo de marca (Fase 4). Recomendación
técnica: un set de iconos consistente (por ejemplo, Radix Icons o
Lucide), usado a través de un componente propio que envuelva la
librería — así, si la Fase 4 exige un set de iconos distinto, se
sustituye en un solo punto, no en cada uso individual.

**Síntesis:** los iconos se consumen siempre a través de un envoltorio
propio, nunca importados directamente en cada componente, para poder
sustituir el set completo en un solo lugar.

## 15. Variables globales

- Tokens de diseño (color, espaciado, tipografía, radios) centralizados
  en la configuración de Tailwind — nunca repetidos como valores
  sueltos en componentes.
- Mientras la paleta de marca no exista (Fase 4), se define una paleta
  neutra provisional en esos mismos tokens, para que sustituirla más
  adelante sea un cambio de configuración, no una reescritura de
  componentes.
- Constantes de negocio ya aprobadas (por ejemplo, los tres niveles de
  visibilidad de mensaje) se definen una sola vez en `/types` o
  `/lib`, nunca repetidas como strings sueltos.

**Síntesis:** ningún valor de diseño o de negocio ya decidido se repite
como literal disperso — vive en un solo sitio y se referencia desde
ahí.

## 16. Escalabilidad

- El modelo de datos soporta crecimiento de categorías, colecciones y
  mercados sin cambio de forma (Product Strategy §11) — añadir una
  categoría nueva es añadir datos, no reescribir tipos ni componentes.
- La capa de datos (`/data`) está aislada precisamente para poder
  sustituir "datos locales tipados" por un backend real (CMS o
  plataforma de e-commerce) sin tocar componentes ni tipos.
- La i18n se construye desde el inicio (apartado 17 de
  `CLAUDE_CODE.md`) para que añadir un idioma no sea una migración.

**Síntesis:** escalar el catálogo, el mercado o el idioma debe ser
añadir datos o configuración, nunca reescribir arquitectura.

## 17. Mantenibilidad

- Menos capas, cada una con responsabilidad clara, antes que muchas
  capas con solapamiento — facilita que una sesión nueva de Claude Code
  entienda la estructura sin explicación adicional.
- Toda regla de esta arquitectura tiene una justificación rastreable a
  un documento de marca o producto, o a una necesidad técnica explícita
  — nada se hace "porque sí".
- Los tipos como fuente única de verdad (apartado 10) son el mecanismo
  principal de mantenibilidad: reducen la posibilidad de que el código
  diverja silenciosamente de las reglas de producto.

**Síntesis:** la arquitectura se mantiene simple a propósito — cada
capa nueva debe justificar por qué no puede vivir en una ya existente.

## 18. Convenciones

Ver `CLAUDE_CODE.md` (apartado 8) para el detalle completo de
convenciones de código. Este documento añade una convención
estructural: ningún archivo se coloca fuera de las carpetas descritas
en el apartado 2 sin actualizar primero este documento.

**Síntesis:** la estructura de carpetas no crece por excepciones
puntuales — crece por actualización explícita de este documento.

## 19. Rendimiento

Ver `CLAUDE_CODE.md` (apartado 16) para las reglas completas. A nivel
arquitectónico: la separación de componentes por nivel (apartado 4) y
la carga de librerías pesadas (animación, iconos) a través de
envoltorios propios (apartados 12, 14) permiten cargar solo lo
necesario por ruta, sin arrastrar dependencias de una página a todas
las demás.

**Síntesis:** la arquitectura por capas no es solo organizativa —
existe también para poder cargar cada ruta con el mínimo peso
necesario.

---

## Bloque de cierre estándar

**Dependencias:** CLAUDE_CODE.md; WEB_HANDOFF.md; Product Strategy —
Butay (v1.0).

**Documentos derivados:** DEVELOPMENT_ROADMAP.md referencia esta
arquitectura en cada fase de desarrollo.

**Decisiones relacionadas:** 018, 019, 020, 021 (ver DECISIONS.md).

**Estado del documento:** Final. Se actualiza si la arquitectura real
diverge de lo aquí descrito, o si se aprueba la Fase 4 (Identidad
Visual) y hay que sustituir tokens/tipografía/iconografía
provisionales.

**Próxima fase recomendada:** Usar este documento junto con
`CLAUDE_CODE.md` para ejecutar `DEVELOPMENT_ROADMAP.md`, Fase 1
(Configuración del proyecto).
