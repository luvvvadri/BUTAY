# CHANGELOG.md

> **Tipo de documento:** Sistema — Historial de cambios (append-only)
> **Versión:** 1.7
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
