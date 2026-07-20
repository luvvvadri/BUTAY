# 00_SYSTEM_WORKFLOW.md

> **Tipo de documento:** Sistema — Normativa metodológica
> **Versión:** 1.0
> **Fecha de creación:** 2026-07-19
> **Última actualización:** 2026-07-20
> **Estado:** Approved (equivalente a Congelado — ver GLOSSARY.md)
> **Aprobación:** Decisión 022 — normativa oficial y vinculante del proyecto Butay a partir de esta versión
> **Depende de:** CONTEXT.md, INDEX.md, DECISIONS.md, GLOSSARY.md, CHANGELOG.md

---

## Objetivo

Definir la metodología oficial que debe seguir cualquier persona o
inteligencia artificial que trabaje en el proyecto Butay. Es normativa
interna, de consulta obligatoria antes de cualquier tarea — no una
sugerencia. Este documento no define contenido de marca: define cómo se
produce, revisa y aprueba ese contenido.

## Cuándo debe actualizarse

- Al aprobarse una mejora metodológica explícitamente propuesta y
  aceptada por el fundador.
- Nunca por conveniencia puntual de una fase o tarea concreta.

## Reglas de uso

1. Consulta obligatoria antes de cualquier tarea, para cualquier
   persona o IA que trabaje en Butay.
2. Prevalece sobre cualquier atajo sugerido dentro de una conversación
   puntual, salvo instrucción explícita del fundador que lo modifique
   formalmente (y quede registrada en DECISIONS.md).
3. Es normativa de proceso, no de contenido.

## Estructura preparada para crecer

Se mantienen las doce secciones fijas de este documento; una sección
nueva solo se añade mediante una decisión formal en DECISIONS.md, nunca
por ampliación silenciosa.

## Buenas prácticas

- Releer este documento al abrir cualquier fase nueva, no solo confiar
  en haberlo leído una vez.
- Si una etapa parece innecesaria para una tarea pequeña, señalarlo y
  pedir confirmación de saltarla — nunca saltarla en silencio.
- Nota de nomenclatura: este documento rompe deliberadamente la
  convención de nombres de INDEX.md (`00_SISTEMA_[nombre].md`) porque el
  fundador especificó el nombre `00_SYSTEM_WORKFLOW.md` de forma
  explícita. Queda registrado en INDEX.md como segunda excepción a la
  convención, junto a los cinco documentos de sistema originales.

---

## 1. Filosofía de trabajo del proyecto

Butay no se construye documento a documento de forma aislada — se
construye como un sistema donde cada pieza es defendible ante cualquiera
que pregunte "¿por qué esto es así?". Quien trabaje en el proyecto actúa
como un equipo delegado multidisciplinar (ver sección 2), no como quien
simplemente redacta lo que se le pide.

Reglas de fondo:

- Nunca improvisar.
- Nunca generar contenido solo por completarlo.
- Toda decisión debe tener una justificación estratégica rastreable a
  un documento existente o a una decisión registrada en DECISIONS.md.
- El fundador es la autoridad final. El equipo delegado ejecuta,
  propone y audita — no sustituye su criterio en decisiones de fondo.

**Síntesis:** si una pieza de trabajo no tiene una razón estratégica
rastreable a un documento o decisión, no se produce.

## 2. Roles y responsabilidades

| Rol | Responsabilidad |
|---|---|
| Director de Marca | Garantiza coherencia con personalidad, tono, valores y posicionamiento ya aprobados. |
| Director de Producto | Define y protege la lógica estratégica de catálogo, colecciones y ciclo de vida — no diseños concretos. |
| Director Creativo | Eleva la calidad emocional y expresiva del contenido sin romper la coherencia ni la arquitectura aprobada. |
| Project Manager | Aplica el protocolo obligatorio, gestiona versiones y dependencias, evita que se salte una etapa del workflow. |
| Consultor Estratégico | Cuestiona la propia propuesta: detecta huecos, riesgos a largo plazo y contradicciones antes de avanzar. |
| Arquitecto Documental | Diseña índices, mantiene la trazabilidad y la sincronía entre CONTEXT, INDEX, DECISIONS, GLOSSARY y CHANGELOG. |
| Director Técnico | Garantiza la viabilidad técnica de cualquier decisión de desarrollo y la coherencia entre la documentación técnica (`CLAUDE_CODE.md`, `FRONTEND_ARCHITECTURE.md`, `DEVELOPMENT_ROADMAP.md`) y el código real. |
| Fundador | Única autoridad de aprobación. Resuelve cualquier incertidumbre que ningún rol anterior pueda decidir por él. |

Estos roles conviven en una misma tarea: por ejemplo, diseñar un índice
exige al Arquitecto Documental proponerlo, al Consultor Estratégico
cuestionarlo, y al Director de Marca comprobar que no contradice la voz
ya aprobada — antes de presentarlo al fundador.

**Rol añadido — Director Técnico (Decisión 022).**

- **Responsabilidades.** Traducir las decisiones ya aprobadas de marca
  y producto (Brand Bible, Product Strategy) a decisiones técnicas
  coherentes; mantener `CLAUDE_CODE.md` y `FRONTEND_ARCHITECTURE.md`
  sincronizados con el estado real del código; señalar cuándo una
  necesidad técnica choca con una restricción de marca o producto, en
  vez de resolverlo por su cuenta.
- **Cuándo interviene.** En cualquier decisión de arquitectura técnica,
  stack, o convención de código nueva; al revisar si una tarea de
  desarrollo está realmente prevista en `DEVELOPMENT_ROADMAP.md`; al
  cerrar cada fase técnica del roadmap, con el mismo espíritu de
  autoauditoría que el resto de fases del proyecto.
- **Qué documentos revisa.** `CLAUDE_CODE.md`, `FRONTEND_ARCHITECTURE.md`,
  `DEVELOPMENT_ROADMAP.md` y `WEB_HANDOFF.md` — nunca decide sobre
  Brand Bible o Product Strategy, solo los interpreta técnicamente.
- **Relación con el Director de Marca.** Son pares, no jerárquicos: el
  Director Técnico no puede aprobar una implementación que el Director
  de Marca señale como incoherente con la voz o el mensaje de Butay, y
  el Director de Marca no puede exigir una implementación técnicamente
  inviable sin pasar por el Director Técnico primero. Cualquier
  desacuerdo entre ambos se eleva al fundador, igual que el resto de
  conflictos entre roles.

**Síntesis:** cada tarea debe poder identificar qué rol la ejecuta y qué
rol la auditaría antes de darla por buena; en tareas de desarrollo, ese
rol auditor es el Director Técnico.

## 3. Protocolo obligatorio antes de cualquier tarea

1. Leer CONTEXT.md.
2. Leer INDEX.md.
3. Consultar toda la documentación relacionada con la tarea.
4. Comprobar DECISIONS.md.
5. Comprobar GLOSSARY.md si existen términos relevantes.
6. Revisar CHANGELOG.md si puede afectar al trabajo.
7. Identificar dependencias entre documentos.
8. Comprobar que no existen contradicciones.

Si se detecta cualquier inconsistencia: **detenerse**, explicarla con
precisión, y no continuar hasta que quede resuelta. Nunca inventar
información para rellenar huecos.

**Síntesis:** ninguna tarea empieza sin pasar por estos ocho pasos, sin
excepción por urgencia percibida.

## 4. Las 10 etapas de trabajo

| Etapa | Nombre | Qué produce |
|---|---|---|
| 1 | Comprensión | Resumen del objetivo, documentos a usar, decisiones condicionantes, documentos futuros dependientes. No se avanza todavía. |
| 2 | Arquitectura | Índice propuesto (sin contenido), justificación, riesgos, dependencias, información heredada y a heredar, autocrítica de la propia propuesta. |
| 3 | Aprobación | Se espera aprobación explícita del índice antes de redactar una sola línea de contenido. |
| 4 | Entrevista (condicional) | Solo si falta información no deducible de la documentación existente. Preguntas agrupadas por módulos, nunca repitiendo lo ya respondido. |
| 5 | Redacción | Contenido completo, con calidad profesional, coherencia absoluta, sin relleno ni repetición, y síntesis accionable al final de cada apartado. |
| 6 | Autoauditoría | Revisión de coherencia, claridad, contradicciones, redundancias, riesgos futuros, escalabilidad, calidad y cumplimiento del objetivo. Se proponen mejoras, no se aplican todavía. |
| 7 | Release Candidate | Se aplican solo las mejoras aprobadas. Segunda auditoría completa. |
| 8 | Versión oficial | Aprobación expresa del fundador. El documento pasa a v1.0, estado `Approved` / `Congelado`. |
| 9 | Actualización documental | Se actualiza únicamente lo que se ve afectado (INDEX, CONTEXT, DECISIONS, CHANGELOG, GLOSSARY si corresponde). |
| 10 | Informe de cierre | Objetivo, documentos creados y modificados, decisiones tomadas, riesgos pendientes, dependencias, lecciones aprendidas, estado del proyecto, próxima fase recomendada y sus requisitos de inicio. |

**Síntesis:** no se salta ninguna etapa ni se combinan dos en una sin
aprobación explícita del fundador.

## 5. Reglas de aprobación

- Solo el fundador aprueba: la arquitectura/índice (fin de la Etapa 2),
  el contenido definitivo (fin de la Etapa 7, antes de pasar a la Etapa
  8), y la apertura de cualquier fase nueva.
- Ninguna fase se abre automáticamente al cerrarse la anterior.
- Ninguna versión pasa a `Approved` / `Congelado` sin aprobación
  explícita.
- Toda aprobación relevante para la dirección del proyecto se registra
  en DECISIONS.md.

**Síntesis:** sin una aprobación explícita y registrada, un documento no
es fuente definitiva, por completo que parezca.

## 6. Reglas de auditoría

- Autoauditoría obligatoria al final de la Etapa 5 y de nuevo en la
  Etapa 7.
- Debe comprobar, como mínimo: coherencia, claridad, contradicciones,
  redundancias, riesgos futuros, escalabilidad, calidad de la
  redacción, cumplimiento del objetivo, y dependencias con otros
  documentos.
- Las mejoras detectadas se proponen antes de aplicarse — nunca se
  aplican de forma silenciosa.

**Síntesis:** ningún documento avanza de etapa sin haber pasado, como
mínimo, una auditoría explícita y visible para el fundador.

## 7. Reglas de actualización documental

- Se actualiza únicamente lo que se ve afectado; nunca se toca
  documentación no relacionada "por si acaso".
- CONTEXT.md se reescribe, no acumula. INDEX.md refleja siempre el
  estado real. DECISIONS.md y CHANGELOG.md son append-only. GLOSSARY.md
  mantiene una sola definición por término.
- Toda decisión de fondo se registra en DECISIONS.md antes o junto con
  el cambio documental que la aplica.

**Síntesis:** si un cambio no se refleja en el sistema documental, para
el proyecto no ha ocurrido.

## 8. Convenciones de calidad

- Calidad suficiente para diseñadores, desarrolladores, fotógrafos,
  equipos de marketing, inversores, colaboradores y futuras IA.
- Cada apartado de un documento raíz termina con una síntesis
  accionable.
- Principios, no reglas excesivamente rígidas.
- Sin relleno; sin repetir conceptos ya establecidos en otro apartado u
  otro documento — se referencia, no se duplica.
- Ejemplos ilustrativos siempre marcados como tales, nunca como copy
  final aprobado.
- Los documentos raíz cierran con el bloque de cierre estándar
  (Dependencias, Documentos derivados, Decisiones relacionadas, Estado
  del documento, Próxima fase recomendada) — Decisión 013.
- Español para la documentación interna; inglés para la voz de marca de
  cara al cliente — Decisión 014.

**Síntesis:** un documento que no podría entregarse tal cual a un
colaborador nuevo sin explicación adicional no está terminado.

## 9. Principios permanentes del proyecto

- La documentación es la única fuente oficial de verdad.
- Nunca se contradicen decisiones aprobadas.
- Si una decisión cambia, se actualiza toda la documentación afectada.
- Calidad sobre velocidad.
- Coherencia sobre creatividad.
- Claridad sobre complejidad.
- Ante la duda, preguntar.
- Toda mejora metodológica se propone antes de aplicarse.

**Síntesis:** estos ocho principios priman sobre cualquier instrucción
puntual que los contradiga, incluida una petición de ir más rápido.

## 10. Cómo actuar ante incertidumbre o contradicciones

- Detenerse de inmediato.
- Explicar la incertidumbre o contradicción con precisión: qué
  documentos entran en conflicto, o qué información concreta falta.
- No continuar hasta que quede resuelta explícitamente.
- Nunca inventar información para rellenar huecos — ni datos, ni
  decisiones, ni voz de marca.
- Si dos documentos contradicen, decide DECISIONS.md: la decisión
  activa más reciente sobre ese tema prevalece.
- Si la contradicción no está resuelta en DECISIONS.md tampoco, se
  eleva al fundador — nunca se decide por inferencia.

**Síntesis:** detenerse ante la duda no es un fallo del proceso, es el
proceso funcionando correctamente.

## 11. Flujo de cierre de una fase

Corresponde a las etapas 6 a 10 de la sección 4, aplicadas de forma
encadenada:

1. Autoauditoría (Etapa 6) → mejoras propuestas, no aplicadas todavía.
2. Release Candidate (Etapa 7) → se aplican solo las mejoras aprobadas;
   segunda auditoría.
3. Versión oficial (Etapa 8) → aprobación expresa del fundador, estado
   `Approved` / `Congelado`.
4. Actualización documental (Etapa 9) → solo los documentos afectados.
5. Informe de cierre (Etapa 10) → documento propio, formato fijo (ver
   Etapa 10 en la sección 4).

Una fase se considera cerrada únicamente cuando existe informe de
cierre **y** el documento raíz de la fase está en estado `Approved` /
`Congelado`. Ninguna de las dos condiciones sustituye a la otra.

**Síntesis:** sin informe de cierre, la fase no está cerrada, aunque el
contenido ya esté aprobado.

## 12. Flujo de apertura de una nueva fase

Corresponde a las etapas 1 a 4 de la sección 4:

1. Requiere un objetivo de fase explícito del fundador — nunca se
   infiere ni se asume.
2. Comprensión (Etapa 1) y Arquitectura (Etapa 2) se completan y se
   presentan juntas o por separado, según lo pida el fundador.
3. Aprobación (Etapa 3): no se redacta contenido hasta la aprobación
   explícita del índice.
4. Entrevista (Etapa 4): solo si falta información no deducible de la
   documentación existente.

Una fase no se abre automáticamente al cerrarse la anterior — regla ya
aplicada entre la Fase 1 y la Fase 2, y entre la Fase 2 y la Fase 3.

**Síntesis:** ninguna fase empieza a redactarse sin haber pasado, como
mínimo, por Comprensión y Arquitectura aprobadas por el fundador.
