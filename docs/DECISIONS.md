# DECISIONS.md

> **Tipo de documento:** Sistema — Registro de decisiones (append-only)
> **Versión:** 1.4
> **Fecha de creación:** 2026-07-18
> **Última actualización:** 2026-07-21
> **Estado:** Vivo (solo se añade, nunca se reescribe)
> **Depende de:** Ninguno

---

## Objetivo

DECISIONS.md registra toda decisión relevante tomada durante el desarrollo
de Butay, junto con su razón y las alternativas consideradas. Es la memoria
de "por qué" el proyecto es como es, y actúa como árbitro cuando dos
documentos parecen contradecirse: la decisión más reciente y no superada
sobre un tema prevalece.

## Cuándo debe actualizarse

- Cada vez que se tome una decisión que afecte a la dirección, estructura,
  estrategia o estándares del proyecto.
- Nunca para cambios menores de redacción o formato — esos van en
  CHANGELOG.md.
- Inmediatamente después de tomar la decisión, no al final de la sesión.

## Reglas de uso

1. **Append-only**: nunca se edita ni se borra una entrada existente. Si
   una decisión cambia, se añade una entrada nueva que referencia el
   número de la anterior y la marca como `Superada`.
2. Cada entrada debe incluir: fecha, número correlativo, decisión tomada,
   alternativas consideradas, razón, y estado (`Activa` / `Superada`).
3. Toda decisión que afecte a un término del glosario debe reflejarse
   también en GLOSSARY.md, indicando el número de decisión que la originó.
4. En caso de conflicto entre dos documentos, la decisión activa más
   reciente sobre ese tema, registrada aquí, es la que manda.

## Estructura preparada para crecer

Las entradas se numeran de forma correlativa y nunca se reutiliza un
número. Si el archivo se vuelve difícil de navegar, se puede dividir en
`DECISIONS.md` (índice + entradas recientes) y `DECISIONS_ARCHIVE.md`
(entradas antiguas), sin perder el orden correlativo ni renumerar nada.

## Buenas prácticas

- Una decisión, una entrada. No agrupar varias decisiones distintas en una
  sola entrada aunque se hayan tomado en la misma sesión.
- Ser específico en "alternativas consideradas" — es lo que evita volver a
  debatir lo mismo meses después.
- Referenciar el número de decisión (ej. "Decisión 003") desde cualquier
  otro documento que dependa de ella, en lugar de repetir el contenido.

---

## Registro

### Decisión 001 — 2026-07-18
**Decisión:** Se aprueba la arquitectura documental v1.0 del proyecto KUYA
(fases, carpetas, dependencias, sistema de memoria permanente).
**Alternativas consideradas:** Ninguna — primera decisión estructural del
proyecto.
**Razón:** Establecer un sistema antes de generar cualquier contenido de
marca, para evitar contradicciones a medida que el proyecto crezca.
**Estado:** Activa.

### Decisión 002 — 2026-07-18
**Decisión:** Se configura el Proyecto de Claude (instrucciones, base de
conocimiento; sin skills, conectores ni plugins específicos por ahora)
como cerebro operativo del proyecto KUYA v1.0.
**Alternativas consideradas:** Delegar la continuidad únicamente a la
memoria automática de la IA, sin documentación explícita.
**Razón:** La memoria automática no es auditable ni fiable a largo plazo;
se decide que la documentación explícita sea siempre la fuente de verdad,
y la memoria automática una capa complementaria.
**Estado:** Activa.

### Decisión 003 — 2026-07-18
**Decisión:** Se adopta un estándar documental propio para KUYA, en lugar
de replicar el estilo visual de `AI_START_HERE.md`. `AI_START_HERE.md`
queda definido únicamente como documento de entrada del proyecto, no como
referencia de estilo.
**Alternativas consideradas:** Replicar exactamente el formato de
`AI_START_HERE.md` en todos los documentos nuevos.
**Razón:** No se disponía del contenido de `AI_START_HERE.md` para
replicarlo con fidelidad; se prefiere un estándar propio, definido y
aplicado de forma consistente desde el origen.
**Estado:** Activa.

### Decisión 004 — 2026-07-18
**Decisión:** Se establecen los cinco documentos de sistema — CONTEXT.md,
INDEX.md, DECISIONS.md, GLOSSARY.md y CHANGELOG.md — como la
infraestructura documental base y memoria permanente del proyecto, previa
al inicio de la Fase 1.
**Alternativas consideradas:** Empezar directamente la Fase 1 sin esta
infraestructura, documentando sobre la marcha.
**Razón:** Evitar acumular contenido estratégico sin un sistema de memoria
y control de versiones ya operativo.
**Estado:** Activa.

### Decisión 005 — 2026-07-18
**Decisión:** Se establece como principio no negociable de KUYA que la
intimidad y cercanía del mensaje de marca prevalece siempre sobre la
velocidad de crecimiento o el margen económico.
**Alternativas consideradas:** Priorizar crecimiento rápido y margen
económico aunque el mensaje se generalizara con el tiempo.
**Razón:** Durante la entrevista de descubrimiento estratégico (Fase 1)
se detectó una contradicción entre la promesa de mantener el mensaje
íntimo y la negativa a sacrificar margen o velocidad de crecimiento. Al
plantear la elección de forma directa, el fundador confirmó que la
intimidad del mensaje pesa más.
**Estado:** Activa.

### Decisión 006 — 2026-07-18
**Decisión:** Se resuelve la aparente contradicción entre buscar un
público amplio y mantener una conexión profunda: KUYA perseguirá un
público amplio, pero el crecimiento de audiencia se logrará ampliando el
alcance del mensaje íntimo existente, nunca diluyéndolo o generalizándolo
para ganar volumen.
**Alternativas consideradas:** Generalizar el mensaje desde el inicio
para maximizar el alcance de público lo antes posible.
**Razón:** Mantener coherencia con la Decisión 005 — un mensaje
generalizado desde el origen contradiría el principio de intimidad ya
fijado.
**Estado:** Activa.

### Decisión 007 — 2026-07-18
**Decisión:** Se completa la entrevista de Descubrimiento Estratégico de
la Fase 1 (7 módulos) y se redactan sus cuatro documentos raíz —Visión,
Misión y Valores; Mercado y Público Objetivo; Análisis de Competencia;
Posicionamiento de Marca— en estado de borrador, pendientes de
aprobación del fundador.
**Alternativas consideradas:** Ninguna — es el cierre natural de la
Fase 1 según la arquitectura del proyecto (v1.0).
**Razón:** Formalizar en documentos raíz lo recogido en la entrevista,
antes de avanzar a la Fase 2.
**Estado:** Activa.

### Decisión 008 — 2026-07-18
**Decisión:** Se pausa la aprobación final de los cuatro documentos raíz
de la Fase 1 y el inicio de contenido de marca de la Fase 2, hasta
resolver la validación del nombre de marca. Se inicia una exploración de
alternativas de naming antes de continuar.
**Alternativas consideradas:** Continuar con "KUYA" como nombre
definitivo y posponer la validación legal a una fase posterior.
**Razón:** Se detectaron varias marcas de ropa activas usando "Kuya" en
el mismo sector (streetwear/moda urbana), incluyendo una solicitud de
marca registrada ("KUYAWEAR") para prendas de vestir presentada en 2020.
El riesgo de conflicto de marca o de confusión de mercado es real y
afecta directamente a lo construido hasta ahora en torno al nombre.
**Estado:** Activa.

### Decisión 009 — 2026-07-19
**Decisión:** Se define **"Butay"** como el nuevo nombre definitivo de
la marca, en sustitución de "KUYA". Se cierra así el proceso de naming
abierto por la Decisión 008.
**Alternativas consideradas:** Se evaluaron y descartaron, por conflicto
de marca registrada o presencia comercial activa de terceros: Unproject,
Aniki, Confidant/Confidante, Manong, Panganay, Mapagmahal, Cuore, Pact,
Takt, Tito, Mahal, Sinta y Amore. También se evaluó "Fronda" (segundo
apellido del fundador) como alternativa a "Butay", descartándose por
menor coherencia con el valor de marca "amor" y con el origen narrativo
ya construido en la Fase 1.
**Razón:** "Butay" es el segundo apellido del fundador, de origen
visayo (Filipinas), documentado con el significado "dar / compartir" —
lo que conecta de forma directa y auténtica con el valor de marca
"amor" y con el rechazo a la ostentación (Visión, Misión y Valores).
A diferencia de las alternativas descartadas, no se ha detectado
ninguna marca de ropa activa usando este nombre. El arquetipo "hermano
mayor" (herencia conceptual de "Kuya") se conserva como personalidad y
tono de la marca — no como nombre comercial — tal y como se planteó
como opción durante el proceso de naming.
**Estado:** Activa.

### Decisión 010 — 2026-07-19
**Decisión:** Se aprueban formalmente los cuatro documentos raíz de la
Fase 1 —Visión, Misión y Valores; Mercado y Público Objetivo; Análisis
de Competencia; Posicionamiento de Marca— en su versión v0.3, sin
cambios de contenido respecto al borrador. Pasan a estado `Congelado`
(v1.0) y se cierra formalmente la Fase 1.
**Alternativas consideradas:** Aprobar con ajustes previos al contenido;
posponer la aprobación e iniciar la Fase 2 en paralelo sin cerrar la
Fase 1.
**Razón:** El fundador confirmó de forma expresa la aprobación del
contenido tal como estaba redactado. Cerrar formalmente la Fase 1 es
requisito previo, según GLOSSARY.md (término "Fase": *"no se avanza de
fase sin que el documento raíz de la fase anterior esté Aprobado"*),
para iniciar cualquier documento de la Fase 2 — incluido el Brand Bible.
**Estado:** Activa.

### Decisión 011 — 2026-07-19
**Decisión:** Se define el **Brand Bible** como el documento raíz
consolidado de la Fase 2 (Identidad de marca conceptual). Sustituye a
las filas separadas "Personalidad y tono de voz" y "Territorio
narrativo" previstas originalmente en el roadmap de INDEX.md; el
Naming, ya resuelto por la Decisión 009, se incorpora como apartado de
contexto dentro del propio Brand Bible en lugar de como documento
independiente.
**Alternativas consideradas:** Mantener "Personalidad y tono de voz" y
"Territorio narrativo" como documentos independientes, con el Brand
Bible como síntesis posterior de las fases 1 a 3.
**Razón:** El fundador confirmó que prefiere un documento único y
consolidado para la Fase 2, evitando fragmentar la identidad conceptual
de marca en piezas sueltas antes de pasar a la Fase 3.
**Estado:** Activa.

### Decisión 012 — 2026-07-19
**Decisión:** Se corrige el orden del roadmap de fases: la **Fase 3** es
**Product Strategy** (especificación del catálogo, materiales y
proveedores, fichas técnicas) y la **Fase 4** es **Identidad Visual /
Design System** (manual de marca, paleta de color, sistema tipográfico).
Esto invierte el orden que tenía INDEX.md (v0.5), donde figuraban en
sentido contrario.
**Alternativas consideradas:** Mantener el orden previo de INDEX.md y
tratar la corrección como una preferencia puntual del fundador en lugar
de una corrección de roadmap.
**Razón:** El fundador señaló que INDEX.md no reflejaba el roadmap
vigente de la Arquitectura del proyecto Butay (v1.0). Se corrige
INDEX.md para que vuelva a coincidir con la fuente aprobada, y se deja
constancia formal para no repetir la desincronización. Esta corrección
afecta también a los dos apartados del Brand Bible que hacen de puente
hacia fases futuras: "Filosofía de producto" pasa a apuntar a la Fase 3
(Product Strategy) y el apartado de cierre pasa a apuntar a la Fase 4
(Identidad Visual / Design System) — antes apuntaban al revés.
**Estado:** Activa.

### Decisión 013 — 2026-07-19
**Decisión:** Se establece el **bloque de cierre estándar** —
Dependencias, Documentos derivados, Decisiones relacionadas, Estado del
documento y Próxima fase recomendada— como convención obligatoria para
todos los documentos raíz del proyecto, a partir del Brand Bible en
adelante. Este bloque sustituye a los anexos de trazabilidad ad-hoc
usados hasta ahora (como el "Anexo — Trazabilidad" previsto en el índice
del Brand Bible), que quedan absorbidos dentro del campo "Decisiones
relacionadas" del nuevo bloque.
**Alternativas consideradas:** Mantener un anexo de trazabilidad libre y
distinto en cada documento, sin una estructura fija de cinco campos.
**Razón:** El fundador quiere mejorar la trazabilidad del proyecto de
forma sistemática, no documento por documento. Un bloque de cierre
estándar y obligatorio permite a cualquier persona o IA saber, sin leer
el documento entero, de qué depende, qué depende de él, qué decisiones
lo sustentan, en qué estado está y qué fase viene después.
**Estado:** Activa.

### Decisión 014 — 2026-07-19
**Decisión:** Se confirma el **inglés** como idioma principal de la voz
de marca de cara al cliente (frases en prenda, copy de web, redes
sociales, packaging). El **español** se mantiene como idioma de toda la
documentación interna del proyecto — esta decisión no lo cambia.
**Alternativas consideradas:** Español como idioma principal para el
mercado de lanzamiento (España), reservando el inglés para una
expansión internacional futura; enfoque bilingüe desde el inicio; dejar
la cuestión pendiente de definir.
**Razón:** El fundador confirmó el inglés como idioma principal,
coherente con la entrevista original (Fase 1, Módulo 4) y con el código
estético habitual del streetwear de frases en el que Butay compite
(incluida la referencia directa, Kanye Diaries). Permite además escalar
a mercados internacionales sin depender de una traducción posterior.
**Estado:** Activa.

### Decisión 015 — 2026-07-19
**Decisión:** Se redacta el borrador v0.1 del Brand Bible de Butay
(`02_MARCA_brand_bible.md`), siguiendo exactamente el índice v4
aprobado (18 apartados). Queda en estado `En borrador — pendiente de
aprobación del fundador`; no se avanza a la Fase 3 hasta su aprobación
formal.
**Alternativas consideradas:** Ninguna — es la ejecución directa del
índice v4 ya aprobado (Decisiones 011, 012, 013, 014).
**Razón:** Cierre natural del ciclo de diseño de arquitectura de la Fase
2, siguiendo el mismo patrón que el cierre de la Fase 1 (Decisión 007):
redactar el contenido en borrador antes de someterlo a aprobación
formal.
**Estado:** Activa.

### Decisión 016 — 2026-07-19
**Decisión:** Se aprueba formalmente el Brand Bible de Butay
(`02_MARCA_brand_bible.md`), que pasa de v0.9 (Release Candidate) a
**v1.0**, con estado `Approved` (equivalente a `Congelado` en el
estándar documental del proyecto — ver nota en GLOSSARY.md). Con esta
aprobación se cierra formalmente la Fase 2 (Identidad de marca
conceptual). No se inicia la Fase 3 (Product Strategy) junto con esta
decisión: su apertura requiere una decisión explícita posterior del
fundador.
**Alternativas consideradas:** Aprobar el Brand Bible y abrir la Fase 3
en el mismo movimiento, sin cierre formal intermedio.
**Razón:** El fundador pidió expresamente cerrar la Fase 2 por completo,
con su propio informe de cierre, antes de abrir la Fase 3 — siguiendo el
mismo rigor de cierre ya aplicado a la Fase 1 (Decisión 010).
**Estado:** Activa.

### Decisión 017 — 2026-07-19
**Decisión:** Se formaliza la metodología de trabajo de 10 etapas
(Comprensión, Arquitectura, Aprobación, Entrevista, Redacción,
Autoauditoría, Release Candidate, Versión oficial, Actualización
documental, Informe de cierre) como documento de sistema oficial,
`00_SYSTEM_WORKFLOW.md`. Queda como normativa interna de consulta
obligatoria antes de cualquier tarea futura en el proyecto, en
sustitución de su existencia únicamente dentro del historial de esta
conversación. El nombre del archivo rompe deliberadamente la convención
`00_SISTEMA_[nombre].md` de INDEX.md por instrucción explícita del
fundador; queda registrado como segunda excepción, junto a los cinco
documentos de sistema originales.
**Alternativas consideradas:** Mantener la metodología solo como
instrucciones dentro de la conversación, sin convertirla en documento.
**Razón:** Evitar que la metodología se pierda si una sesión futura —
propia o de otra IA— no tiene acceso a este historial de conversación.
Es la misma lógica que llevó a crear CONTEXT.md, INDEX.md, DECISIONS.md,
GLOSSARY.md y CHANGELOG.md al principio del proyecto (Decisión 004).
**Estado:** Activa.

### Decisión 018 — 2026-07-19
**Decisión:** Se redacta y refina el documento raíz de la Fase 3,
**Product Strategy — Butay** (`03_PRODUCTO_product_strategy.md`),
siguiendo el índice v2 aprobado y las respuestas de la entrevista de la
Etapa 4 (Product DNA, arquitectura de catálogo, colecciones, drops,
ciclo de vida, calidad, precio, escalabilidad). Consolida como
documento único los tres elementos que el roadmap original preveía por
separado para la Fase 3 ("Especificación del catálogo", "Materiales y
proveedores", "Fichas técnicas") — mismo patrón que el Brand Bible
aplicó en la Fase 2. El documento pasa directamente a estado `Release
Candidate` (v0.9), tras autoauditoría, sin quedar primero en borrador
abierto — a petición del fundador de acelerar el ritmo de la fase.
**Alternativas consideradas:** Mantener "Materiales y proveedores" y
"Fichas técnicas" como documentos separados dentro de la Fase 3.
**Razón:** El fundador definió el objetivo de la fase como "diseñar el
sistema estratégico que gobernará todos los productos", no como una
colección de documentos operativos independientes; los aspectos
técnicos y de coste que esos documentos habrían cubierto quedan
explícitamente `PENDIENTE DE DEFINIR`, remitidos a trabajo operativo
posterior y a la Fase 5.
**Estado:** Activa.

### Decisión 019 — 2026-07-19
**Decisión:** Se actualiza la arquitectura de Product Strategy a la
versión v1.0 del índice, tras una revisión crítica exhaustiva
equivalente a la aplicada al Brand Bible: se fusiona "Principios para
futuras colecciones" dentro de "Estrategia de colecciones" como
checklist de cierre; se fusionan los dos puentes hacia fases futuras en
un único apartado con dos subapartados; se añade el apartado "Evolución
de Product Strategy: lo permanente y lo flexible"; se añaden notas
explícitas de alcance sobre la gobernanza del Product DNA (pendiente
mientras el proyecto sea unipersonal), el fit/silueta/tallaje
(pendiente de una futura entrevista, nunca inventado), la escalabilidad
geográfica (mismos principios que el Product DNA, sin estrategia
diferenciada por país) y el carácter no permanente de las 8-15
referencias de lanzamiento.
**Alternativas consideradas:** Mantener la arquitectura v2 sin cambios.
**Razón:** La revisión crítica detectó un hueco estructural real (sin
distinción entre lo permanente y lo flexible, a diferencia del Brand
Bible) y dos fusiones que simplifican el documento sin perder
información — el fundador las aprobó explícitamente.
**Estado:** Activa.

### Decisión 020 — 2026-07-19
**Decisión:** Se aprueba formalmente Product Strategy — Butay
(`03_PRODUCTO_product_strategy.md`), que pasa a **v1.0**, estado
`Approved` (equivalente a `Congelado`). Con esta aprobación se cierra
formalmente la Fase 3 (Product Strategy). No se inicia la Fase 4 junto
con esta decisión: el fundador ha indicado que primero se generará
`WEB_HANDOFF.md` para iniciar el desarrollo web con Claude Code.
**Alternativas consideradas:** Abrir la Fase 4 inmediatamente tras la
aprobación, sin pausa intermedia.
**Razón:** El fundador pidió expresamente priorizar el desarrollo web
antes de continuar con la Fase 4, siguiendo el mismo principio de no
avanzar de fase automáticamente ya aplicado entre la Fase 1, la Fase 2
y la Fase 3.
**Estado:** Activa.

### Decisión 021 — 2026-07-20
**Decisión:** Se prepara la entrega técnica ("Developer Handoff") del
proyecto para Claude Code mediante tres documentos nuevos y
consolidados —`CLAUDE_CODE.md`, `FRONTEND_ARCHITECTURE.md` y
`DEVELOPMENT_ROADMAP.md`— en lugar de fragmentar la documentación
técnica en documentos separados por tema (SEO, accesibilidad,
rendimiento, componentes, rutas, etc.). Se registran además como
segunda categoría de excepción a la convención de nombres de
`00_SISTEMA_[nombre].md` / `0X_FASE_[nombre].md` de INDEX.md, igual que
ya ocurría con `WEB_HANDOFF.md`: documentos técnicos de desarrollo, en
mayúsculas y en inglés, pensados para Claude Code.
**Alternativas consideradas:** Crear documentos separados para cada
tema técnico (`SEO_REQUIREMENTS.md`, `ACCESSIBILITY_GUIDELINES.md`,
`COMPONENT_GUIDELINES.md`, `ROUTING.md`, `PERFORMANCE_GUIDELINES.md`,
`CONTENT_STRUCTURE.md`, `DEVELOPMENT_RULES.md`, `DESIGN_SYSTEM_HANDOFF.md`).
**Razón:** El fundador instruyó explícitamente generar solo estos tres
documentos, consolidando su contenido — mismo patrón de consolidación
ya aplicado al Brand Bible (Decisión 011) y a Product Strategy
(Decisión 018). Fragmentar en 8-9 documentos técnicos habría repetido
el mismo riesgo que motivó ambas consolidaciones anteriores: dispersar
información que funciona mejor como un sistema único y auditable.
**Estado:** Activa.

### Decisión 022 — 2026-07-20
**Decisión:** Se aprueba formalmente `00_SYSTEM_WORKFLOW.md`, que pasa
de v0.1 (`En borrador`) a **v1.0**, estado `Approved` (equivalente a
`Congelado`). Queda como normativa metodológica oficial y vinculante
del proyecto Butay, con el mismo peso que cualquier otro documento
raíz aprobado. Se añade además un nuevo rol a su tabla de roles y
responsabilidades: **Director Técnico**, con responsabilidades,
momento de intervención, documentos que revisa y relación con el
Director de Marca definidos dentro del propio documento.
**Alternativas consideradas:** Mantener el workflow indefinidamente en
estado `En borrador` mientras se usa de facto como vinculante; exigir
una revisión de contenido antes de aprobarlo.
**Razón:** El documento ha gobernado sin objeción el cierre completo de
la Fase 2 y la Fase 3, y quedó señalado en dos auditorías sucesivas
(2026-07-19 y 2026-07-20) como el principal punto de gobernanza
pendiente del proyecto. El fundador confirma su aprobación sin cambios
de contenido, salvo la incorporación del rol Director Técnico, ya
necesaria por la existencia de `CLAUDE_CODE.md`,
`FRONTEND_ARCHITECTURE.md` y `DEVELOPMENT_ROADMAP.md` (Decisión 021).
**Estado:** Activa.

### Decisión 023 — 2026-07-20
**Decisión:** Se añade a `CLAUDE_CODE.md` la sección "Testing & Quality
Assurance" (apartado 21), estableciendo como estándar obligatorio del
proyecto la cobertura mínima de testing unitario, de componentes, E2E,
manual, accesibilidad, rendimiento y responsive, y los criterios de
revisión antes de producción — sin imponer herramientas concretas, que
quedan a criterio técnico de cada sesión de desarrollo.
**Alternativas consideradas:** Dejar el testing sin estándar
documentado, a criterio libre de cada sesión de Claude Code.
**Razón:** La auditoría del 2026-07-20 detectó que ningún documento
técnico cubría testing — hueco real señalado en la revisión crítica
previa. Fijar principios (no herramientas) evita tanto la ausencia de
disciplina de calidad como una imposición técnica prematura no pedida
por el fundador.
**Estado:** Activa.

### Decisión 024 — 2026-07-20
**Decisión:** Se añade a `CLAUDE_CODE.md` la sección "Security & GDPR"
(apartado 22), estableciendo un checklist técnico obligatorio —
variables de entorno, gestión de secretos, cookies, consentimiento
RGPD, datos personales, almacenamiento, autenticación futura y buenas
prácticas de seguridad frontend— marcado explícitamente como
recomendaciones técnicas, no como política legal.
**Alternativas consideradas:** Posponer cualquier mención a seguridad o
RGPD hasta que exista una política legal formal de Butay.
**Razón:** La auditoría del 2026-07-20 señaló la ausencia de seguridad y
RGPD como el hueco más serio detectado en toda la documentación técnica
— exponer al desarrollo a recoger datos o gestionar secretos sin
principios mínimos es un riesgo evitable desde ya, sin necesidad de
esperar a una política legal formal ni de inventarla.
**Estado:** Activa.

### Decisión 025 — 2026-07-20
**Decisión:** Se traslada el directorio de trabajo del proyecto de
`C:\Users\butay\OneDrive\Desktop\Escritorio de Claude Memorias\Butay\`
(sincronizado por OneDrive) a `C:\Users\butay\Claude\` (no
sincronizado), como raíz única del repositorio para `docs/` y
`butay-web/` a partir de la Fase 1 de `DEVELOPMENT_ROADMAP.md`
(Configuración del proyecto).
**Alternativas consideradas:** Mantener el proyecto completo dentro de
la carpeta de OneDrive ya existente, añadiendo `butay-web/` junto a
`docs/` en esa misma ubicación.
**Razón:** Inicializar un repositorio Git y un proyecto Next.js (con
`node_modules` y recompilación en caliente) dentro de una carpeta
sincronizada por OneDrive es una fuente conocida de bloqueos de
archivo, conflictos de sincronización y ralentización del entorno de
desarrollo. Planteada la disyuntiva, el fundador confirmó el traslado.
Los 18 documentos de `docs/` se copiaron y se verificaron con hash
SHA-256 antes de eliminar el origen, sin pérdida ni alteración de
contenido.
**Estado:** Activa.

### Decisión 026 — 2026-07-21
**Decisión:** Se revisa formalmente el Brand Bible — Butay
(`02_MARCA_brand_bible.md`), que pasa de v1.0 a **v1.1**, incorporando
la esencia, manifiesto, personalidad y territorio narrativo recogidos
en la entrevista de identidad de marca — como enriquecimiento de lo ya
aprobado, no como sustitución de ningún elemento marcado como
permanente en su apartado 15 (nombre, principio no negociable,
arquetipo, cinco valores, rechazo a la ostentación). Se añade un
segundo candidato de tagline provisional ("Made to express", junto al
ya existente "Wear what you mean"), sin elegir entre ambos. Para esta
revisión puntual se reabre y se vuelve a cerrar, en el mismo
movimiento, la Fase 2 del roadmap de marca/producto (Identidad de
marca conceptual). Se añade también, en Product Strategy — Butay
(`03_PRODUCTO_product_strategy.md`, v1.0 → v1.1), una nota informativa
sobre preferencias de estilo (casual, minimalista, oversize,
streetwear) mencionadas en la misma entrevista, sin resolver la
filosofía de fit/silueta/tallaje, que sigue `PENDIENTE DE DEFINIR`.
**Alternativas consideradas:** Crear un documento nuevo y paralelo
(`BRAND_IDENTITY.md`) como fuente principal de identidad de marca;
sustituir directamente la Visión de Fase 1 y los cuatro pilares
narrativos permanentes por el nuevo lenguaje de la entrevista, sin
distinguir qué era refuerzo y qué habría sido sustitución de fondo.
**Razón:** El fundador confirmó, tras revisar un índice de cambios
propuesto (Etapas 1-3 del workflow), que la información de la
entrevista debía integrarse en el Brand Bible ya existente — coherente
con el principio de fuente única de verdad (GLOSSARY.md) y con el
patrón de consolidación ya aplicado en el resto del proyecto
(Decisiones 011, 018, 021) —, y que ningún elemento permanente del
apartado 15 debía sustituirse salvo que fuera estrictamente necesario.
El análisis detallado mostró que la mayor parte de la información
nueva encaja como enriquecimiento (personalidad, territorio narrativo,
tagline) y no como contradicción real, salvo la Visión, que se
mantiene intacta en Fase 1 y se incorpora como expresión narrativa
adicional dentro del Brand Bible.
**Estado:** Activa.

### Decisión 027 — 2026-07-21
**Decisión:** Se abre formalmente la Fase 4 del roadmap de marca/
producto (Identidad Visual / Design System) y se redacta su documento
raíz, `04_IDENTIDAD_VISUAL_design_system.md` (v0.1, `En borrador`),
siguiendo el índice aprobado tras dos entrevistas de identidad visual
con el fundador (dirección visual general y logo). Consolida en un
único documento raíz lo que el roadmap original de `INDEX.md` preveía
como tres piezas separadas ("Manual de marca", "Paleta de color",
"Sistema tipográfico") — mismo patrón de consolidación aplicado por el
Brand Bible (Decisión 011) y Product Strategy (Decisión 018). El
documento fija dirección visual (personalidad, territorio emocional,
color, tipografía, fotografía, dirección artística, logo, aplicación
en prenda, packaging, experiencia web) sin cerrar valores concretos
(colores hex, tipografías, forma del logo), marcados explícitamente
`PENDIENTE DE DEFINIR`. No se abre ninguna otra fase junto con esta
decisión.
**Alternativas consideradas:** Fragmentar en tres documentos separados,
siguiendo el roadmap original de `INDEX.md`; completar los valores
concretos (color, tipografía, logo) por inferencia a partir de la
dirección cualitativa de la entrevista, en vez de dejarlos marcados
como pendientes.
**Razón:** El fundador confirmó, tras aprobar un índice de 18
apartados (Etapas 1-3 del workflow), que el documento debía redactarse
completo siguiendo exactamente ese índice, sin inventar ningún valor
que siguiera sin decidir — coherente con el principio de no completar
huecos por inferencia (`00_SYSTEM_WORKFLOW.md` §3, §10) y con el
patrón de consolidación ya aplicado dos veces en el proyecto. El
documento queda en estado `En borrador`, pendiente de autoauditoría y
aprobación explícita, no `Approved` — sigue el mismo protocolo que
gobernó la primera redacción del Brand Bible (Decisión 015).
**Estado:** Activa.
