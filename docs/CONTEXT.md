# CONTEXT.md

> **Tipo de documento:** Sistema — Memoria permanente
> **Versión:** 1.6
> **Fecha de creación:** 2026-07-18
> **Última actualización:** 2026-07-20
> **Estado:** Vivo (se reescribe, no se acumula)
> **Depende de:** Ninguno (documento raíz de continuidad)

---

## Objetivo

CONTEXT.md es el punto de entrada operativo del proyecto Butay. Su función es
permitir que cualquier persona o cualquier IA (Claude Chat, Claude Cowork,
Claude Code, ChatGPT, Gemini, Cursor, Windsurf u otra) retome el trabajo en
cualquier momento sin perder contexto, leyendo un único documento corto en
lugar de reconstruir el historial completo de conversaciones.

No es un archivo histórico: es una fotografía del estado actual del
proyecto. El historial y las razones de cada cambio viven en DECISIONS.md
y CHANGELOG.md.

## Cuándo debe actualizarse

- Al cerrar cualquier sesión de trabajo en la que se apruebe, complete o
  descarte algo relevante.
- Al cambiar de fase dentro del roadmap del proyecto.
- Al aprobar un documento que estaba en borrador.
- Nunca debe quedar desactualizado por más de una sesión de trabajo.

## Reglas de uso

1. Cualquier IA o colaborador que empiece a trabajar en Butay debe leer este
   documento antes de tomar cualquier acción.
2. Este documento se **reescribe**, no se acumula: refleja siempre el
   presente, no el pasado. El pasado se registra en DECISIONS.md y
   CHANGELOG.md.
3. No debe contener el razonamiento detrás de una decisión — solo el
   resultado actual. El razonamiento vive en DECISIONS.md.
4. No se debe generar contenido de marca, branding, producto o estrategia
   basándose solo en este documento si dicho contenido no está aprobado en
   los documentos correspondientes.

## Estructura preparada para crecer

Este documento mantiene siempre las mismas cinco secciones fijas (debajo de
esta línea), independientemente de cuánto crezca el proyecto:

- Estado general
- Aprobado
- En borrador / en curso
- Próximo paso
- Notas para cualquier IA que retome el proyecto

Si el proyecto crece lo suficiente como para necesitar más detalle, ese
detalle se traslada a INDEX.md o a un documento específico — CONTEXT.md se
mantiene siempre corto (objetivo: legible en menos de dos minutos).

## Buenas prácticas

- Mantenerlo breve. Si supera una pantalla de longitud, algo debería
  moverse a INDEX.md.
- No dejar campos con fechas antiguas sin actualizar.
- Actualizarlo en el mismo momento en que se actualiza INDEX.md, nunca por
  separado.
- Evitar lenguaje ambiguo: usar "Aprobado", "En borrador" o "Pendiente",
  nunca estados intermedios sin definir.

---

## Estado general

**Fase actual:** Fase 2 y Fase 3 cerradas y aprobadas. La Fase 4
(Identidad Visual / Design System) **sigue sin abrirse**. El proyecto
completó el 2026-07-20 su entrega técnica ("Developer Handoff") para
Claude Code: `WEB_HANDOFF.md`, `CLAUDE_CODE.md`,
`FRONTEND_ARCHITECTURE.md` y `DEVELOPMENT_ROADMAP.md` (Decisión 021),
precedida de una auditoría completa de toda la documentación
existente. El desarrollo web en sí **todavía no ha comenzado** — el
roadmap técnico está listo, pero requiere confirmación explícita del
fundador para iniciar la Fase 1 de `DEVELOPMENT_ROADMAP.md`.

**Resumen:** Los cuatro documentos raíz de la Fase 1 —Visión, Misión y
Valores; Mercado y Público Objetivo; Análisis de Competencia;
Posicionamiento de Marca— están aprobados y `Congelado` (v1.0, Decisión
010). El **Brand Bible** (`02_MARCA_brand_bible.md`, v1.0, `Approved`,
Decisión 016) es el documento raíz oficial de la Fase 2. El **Product
Strategy** (`03_PRODUCTO_product_strategy.md`, v1.0, `Approved`,
Decisión 020) es el documento raíz oficial de la Fase 3: define el
Product DNA (siete criterios permanentes), la arquitectura del
catálogo, colecciones, drops, ciclo de vida, calidad, experiencia del
cliente, precios (sin cifras definitivas), escalabilidad y un apartado
propio de evolución ("lo permanente y lo flexible"), siguiendo el mismo
patrón de calidad y estructura que el Brand Bible. Ambas fases cuentan
con su informe oficial de cierre.

Se mantiene vigente el **bloque de cierre estándar** (Dependencias,
Documentos derivados, Decisiones relacionadas, Estado del documento,
Próxima fase recomendada) como convención obligatoria para todos los
documentos raíz del proyecto a partir del Brand Bible. *(Decisión 013)*

La metodología de trabajo de 10 etapas está formalizada en
`00_SYSTEM_WORKFLOW.md` (v0.1, en borrador funcionalmente en uso desde
la Fase 2), de consulta obligatoria antes de cualquier tarea futura.
*(Decisión 017)*

La Fase 3 se cerró tras una segunda ronda de revisión crítica
exhaustiva (equivalente a la aplicada al Brand Bible), que produjo una
arquitectura v1.0 de 15 apartados: fusiona "Principios para futuras
colecciones" en "Estrategia de colecciones"; fusiona los dos puentes de
fase en un único apartado con dos subapartados; añade "Evolución de
Product Strategy"; y añade notas explícitas de alcance sobre la
gobernanza del Product DNA (pendiente mientras el proyecto sea
unipersonal), el fit/silueta/tallaje (pendiente de una futura
entrevista, nunca inventado), la escalabilidad geográfica (mismos
principios que el Product DNA y el Brand Bible, sin estrategia
diferenciada por país) y el carácter no permanente de las 8-15
referencias de lanzamiento. *(Decisiones 019-020)*

Durante el cierre de la Fase 3 se detectó que CHANGELOG.md no se había
actualizado desde la auditoría de naming (2026-07-19), pese a que
INDEX.md, CONTEXT.md y DECISIONS.md sí reflejaban los cambios
posteriores. Se corrigió con una entrada consolidada que reconstruye
todo lo ocurrido entre la Fase 1 y el cierre de la Fase 3, y se
recuerda como riesgo de proceso a vigilar en fases futuras.

**Auditoría del 2026-07-20 (Developer Handoff).** Se realizó una
segunda auditoría completa, esta vez de cara a la entrega técnica del
proyecto a Claude Code. Se encontraron y corrigieron dos cosas: (1)
GLOSSARY.md describía la etiqueta `Approved` como propia solo del
Brand Bible, sin reflejar que Product Strategy también la usa desde la
Decisión 020 — corregido; (2) `00_SYSTEM_WORKFLOW.md` seguía en v0.1,
"En borrador", pese a haber gobernado ya el cierre completo de dos
fases sin objeción del fundador — señalado como pendiente de decisión
del fundador, sin corregirse todavía en ese momento. No se encontraron
referencias a archivos inexistentes ni contradicciones de contenido
entre Brand Bible, Product Strategy y el resto de documentos.

**Cierre del punto de gobernanza pendiente (2026-07-20, última sesión
de preparación).** El fundador aprobó formalmente
`00_SYSTEM_WORKFLOW.md`, que pasa a **v1.0, `Approved`** (Decisión
022) — deja de ser el punto de gobernanza abierto del proyecto. En el
mismo movimiento se añadió el rol **Director Técnico** a su tabla de
roles (responsabilidades, cuándo interviene, documentos que revisa y
relación con el Director de Marca), y se amplió `CLAUDE_CODE.md` con
dos apartados nuevos — "Testing & Quality Assurance" (Decisión 023) y
"Security & GDPR" (Decisión 024) — que cubren dos huecos detectados en
la auditoría anterior. Una última pasada de metadatos encontró y
corrigió tres fechas de "Última actualización" desincronizadas
(INDEX.md, DECISIONS.md, CHANGELOG.md, que seguían fechadas el
2026-07-19 pese a contener cambios del día siguiente) — sin más
hallazgos de fondo.

**Inicio del desarrollo — Fase 1 de `DEVELOPMENT_ROADMAP.md`
(2026-07-20).** El fundador dio la instrucción explícita de iniciar la
Fase 1 (Configuración del proyecto). El directorio de trabajo del
proyecto se trasladó de una carpeta sincronizada por OneDrive a
`C:\Users\butay\Claude\` (Decisión 025), como raíz única de `docs/` y
`butay-web/`. Se inicializó el proyecto técnico: Next.js 16 (App
Router) + TypeScript (`strict`) + Tailwind CSS v4 + ESLint + Prettier,
con la estructura de carpetas de `FRONTEND_ARCHITECTURE.md` (apartado
2), y un repositorio Git con commit inicial (`9e9b31f`). `npm run
lint`, `npm run format:check` y `npm run build` se ejecutan sin
errores. **La Fase 1 no está cerrada todavía**: falta el entregable
"pipeline de despliegue básico (previsualización por rama)", que
requiere que el fundador conecte una cuenta de GitHub y de un proveedor
de hosting — ninguna sesión de Claude Code puede hacerlo en su nombre.
Ver el apartado "Estado" de la Fase 1 en `DEVELOPMENT_ROADMAP.md` para
el detalle completo.

## Aprobado

- Arquitectura del proyecto Butay (v1.0)
- Configuración del Proyecto de Claude (v1.0)
- Estándar documental oficial (ver GLOSSARY.md, categoría "Metodología
  del proyecto")
- Infraestructura documental base (CONTEXT, INDEX, DECISIONS, GLOSSARY,
  CHANGELOG)
- Nombre de marca definitivo: **Butay** (Decisión 009)
- Visión, Misión y Valores (v1.0, Decisión 010)
- Mercado y Público Objetivo (v1.0, Decisión 010)
- Análisis de Competencia (v1.0, Decisión 010)
- Posicionamiento de Marca (v1.0, Decisión 010)
- **Brand Bible — Butay (v1.0, `Approved`, Decisión 016)**
- Informe de cierre de Fase 2 (v1.0, Final)
- **Product Strategy — Butay (v1.0, `Approved`, Decisión 020)**
- Informe de cierre de Fase 3 (v1.0, Final)
- **WEB_HANDOFF.md (v1.0, Final)**
- **CLAUDE_CODE.md (v1.1, Final)**
- **FRONTEND_ARCHITECTURE.md (v1.0, Final)**
- **DEVELOPMENT_ROADMAP.md (v1.0, Final en estructura, vivo en su seguimiento de estado)**
- **00_SYSTEM_WORKFLOW.md (v1.0, `Approved`, Decisión 022)**

## En borrador / en curso

Ninguno. No queda ningún documento de sistema, de fase cerrada, ni
técnico en estado `En borrador` o `Release Candidate`.

## Próximo paso

La Fase 1 de `DEVELOPMENT_ROADMAP.md` (Configuración del proyecto) está
en curso y solo le falta un entregable para cerrarse: el pipeline de
despliegue básico (previsualización por rama). Ese paso depende
exclusivamente del fundador — requiere conectar una cuenta de GitHub y
un proveedor de hosting compatible con Next.js (p. ej. Vercel); ninguna
sesión de Claude Code puede crear cuentas ni autorizar conexiones OAuth
en su nombre. Hasta que ese entregable exista, la Fase 1 no se
considera cerrada, y la Fase 2 (Fundamentos visuales provisionales) no
se abre — ninguna fase del roadmap técnico se abre automáticamente al
avanzar la anterior. La Fase 4 (Identidad Visual / Design System) del
roadmap de marca/producto sigue sin abrirse, en paralelo, a la espera
de instrucción explícita del fundador.

## Notas para cualquier IA que retome el proyecto

1. Lee este documento primero.
2. Después, revisa INDEX.md para saber qué otros documentos existen y en
   qué estado se encuentran.
3. No generes contenido de marca (nombre, valores, público objetivo,
   producto, identidad visual) sin autorización expresa del fundador de
   Butay.
4. Si algo en este documento contradice a DECISIONS.md, DECISIONS.md tiene
   prioridad — repórtalo como inconsistencia a resolver.
5. El Brand Bible y el Product Strategy parten del posicionamiento
   **accesible y anti-ostentación** definido en Posicionamiento de
   Marca (v1.0) — no asumir un posicionamiento premium o de lujo salvo
   que exista una decisión formal posterior en DECISIONS.md que lo
   cambie.
6. El roadmap de fases es: Fase 3 = Product Strategy, Fase 4 = Identidad
   Visual / Design System *(Decisión 012)* — no al revés.
7. Todo documento raíz redactado a partir del Brand Bible debe cerrar con
   el bloque de cierre estándar de cinco campos *(Decisión 013)*.
8. La voz de marca de cara al cliente se expresa en inglés; la
   documentación interna sigue en español *(Decisión 014)*.
9. El Brand Bible (v1.0, `Approved`) y el Product Strategy (v1.0,
   `Approved`) son fuente definitiva desde el 2026-07-19 *(Decisiones
   016, 020)* — pueden citarse y usarse para producir copy o
   especificaciones reales.
10. Ninguna fase se inicia automáticamente por haberse cerrado la
    anterior — requiere instrucción explícita del fundador. La Fase 4
    sigue sin abrirse tras el cierre de la Fase 3.
11. Antes de cualquier tarea, consulta `00_SYSTEM_WORKFLOW.md` (v1.0,
    `Approved`) — define el protocolo obligatorio, las 10 etapas de
    trabajo, los roles (incluido el Director Técnico) y las reglas de
    aprobación, auditoría y actualización documental *(Decisiones 017,
    022)*. Es normativa vinculante, no una sugerencia en borrador.
12. El **Product DNA** (siete criterios, Product Strategy §3) es el
    filtro obligatorio para cualquier producto o categoría nueva —
    Butay no excluye categorías por adelantado, solo intenciones
    equivocadas (estatus, rentabilidad pura, mensaje vacío).
13. Hay decisiones deliberadamente pendientes, no inventadas: quién
    aplica el Product DNA cuando exista un equipo; la filosofía de
    fit/silueta/tallaje; y la tensión entre "máxima calidad posible" y
    el rango de precio ya confirmado (a resolver con costes reales en
    la Fase 5). No completar estos vacíos sin una entrevista o decisión
    explícita del fundador.
14. `WEB_HANDOFF.md` es el resumen técnico de marca y producto para
    Claude Code. Cualquier dato de "Estructura prevista de la web" o
    "Funcionalidades previstas" que no derive de una decisión ya
    aprobada debe marcarse `PENDIENTE DE DEFINIR`, nunca inventarse.
15. La entrega técnica completa para el desarrollo vive en
    `CLAUDE_CODE.md`, `FRONTEND_ARCHITECTURE.md` y
    `DEVELOPMENT_ROADMAP.md` (Decisión 021) — cualquier IA que vaya a
    programar debe leerlos en ese orden antes de escribir código
    (ver `CLAUDE_CODE.md`, apartado 2).
16. `00_SYSTEM_WORKFLOW.md` fue aprobado formalmente el 2026-07-20
    (Decisión 022), tras quedar señalado como punto pendiente en dos
    auditorías sucesivas. Ya no es un borrador tolerado por uso — es
    normativa oficial igual que cualquier otro documento raíz
    `Approved`.
17. `CLAUDE_CODE.md` incluye desde el 2026-07-20 los apartados 21
    (Testing & Quality Assurance) y 22 (Security & GDPR) — principios
    técnicos obligatorios, sin imponer herramientas ni política legal
    *(Decisiones 023, 024)*. Cualquier sesión de desarrollo debe
    respetarlos igual que el resto de reglas del documento.
18. El directorio de trabajo del proyecto es, desde el 2026-07-20,
    `C:\Users\butay\Claude\` — no la antigua carpeta de OneDrive
    *(Decisión 025)*. La raíz contiene `docs/` (esta carpeta) y
    `butay-web/` (código fuente de la web, Next.js). Cualquier IA que
    retome el proyecto debe trabajar sobre esta ubicación.
19. La Fase 1 de `DEVELOPMENT_ROADMAP.md` (Configuración del proyecto)
    está en curso desde el 2026-07-20, con un único entregable
    pendiente (pipeline de despliegue) — ver el apartado "Estado" de la
    Fase 1 en ese documento antes de asumir que puede darse por
    cerrada o de abrir la Fase 2.
