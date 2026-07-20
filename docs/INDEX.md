# INDEX.md

> **Tipo de documento:** Sistema — Mapa maestro
> **Versión:** 1.5
> **Fecha de creación:** 2026-07-18
> **Última actualización:** 2026-07-20
> **Estado:** Vivo
> **Depende de:** CONTEXT.md (debe leerse después de este)

---

## Objetivo

INDEX.md es el mapa completo de la documentación del proyecto Butay. Permite
saber, de un vistazo, qué documentos existen, en qué categoría y fase se
ubican, qué versión tienen, si están aprobados o en borrador, y de qué
otros documentos dependen. Es la respuesta a "¿qué existe y dónde está?" —
CONTEXT.md responde a "¿en qué punto estamos ahora?".

## Cuándo debe actualizarse

- Cada vez que se crea un documento nuevo.
- Cada vez que un documento cambia de versión o de estado (borrador →
  aprobado → obsoleto).
- Cada vez que se establece o se modifica una relación de dependencia
  entre documentos.

## Reglas de uso

1. Ningún documento se considera "oficial" hasta que aparece registrado
   aquí.
2. El estado mostrado aquí debe coincidir siempre con el estado real del
   documento — si hay discrepancia, se corrige INDEX.md inmediatamente.
3. No se elimina una fila cuando un documento queda obsoleto: se marca
   como `Obsoleto` y se sustituye por su versión vigente en una fila nueva.
4. La fase asignada a cada documento debe ser coherente con el roadmap
   definido en la arquitectura del proyecto.

## Estructura preparada para crecer

A medida que el proyecto avance de fase, este índice crecerá añadiendo
filas, nunca reestructurando las columnas existentes. Convención de
nombres de archivo recomendada para que la lista se mantenga ordenada
visualmente incluso sin carpetas reales (la base de conocimiento de un
Proyecto de Claude, y la mayoría de repositorios de IA, almacenan archivos
en una lista plana):

```
00_SISTEMA_[nombre].md           → documentos de sistema (este grupo)
01_ESTRATEGIA_[nombre].md        → Fase 1
02_MARCA_[nombre].md             → Fase 2
03_PRODUCTO_[nombre].md          → Fase 3 (Product Strategy)
04_IDENTIDAD_VISUAL_[nombre].md  → Fase 4 (Identidad Visual / Design System)
05_OPERACIONES_[nombre].md       → Fase 5
06_DIGITAL_WEB_[nombre].md       → Fase 6
07_MARKETING_[nombre].md         → Fase 7
```

> **Nota (Decisión 012):** el orden de las Fases 3 y 4 se corrigió el
> 2026-07-19 para coincidir con la Arquitectura del proyecto Butay
> (v1.0). Antes de esa corrección, este índice tenía Identidad Visual en
> Fase 3 y Producto en Fase 4 — el orden correcto es el que se muestra
> arriba.

Los cinco documentos base (CONTEXT, INDEX, DECISIONS, GLOSSARY, CHANGELOG)
son la excepción: mantienen su nombre corto y estándar porque son
reconocibles por convención entre distintas herramientas de IA.

`00_SYSTEM_WORKFLOW.md` es una **segunda excepción**, registrada por
instrucción explícita del fundador (Decisión 017): usa nomenclatura en
inglés en lugar de `00_SISTEMA_metodologia.md` por decisión deliberada,
no por error.

Los **documentos técnicos de desarrollo** —`WEB_HANDOFF.md`,
`CLAUDE_CODE.md`, `FRONTEND_ARCHITECTURE.md` y
`DEVELOPMENT_ROADMAP.md`— son una **tercera categoría de excepción**
(Decisión 021): en mayúsculas, en inglés, sin numeración de fase,
porque su destinatario principal es Claude Code, no el sistema de
fases de marca/producto. Viven en la misma carpeta plana que el resto
de documentos; no se ha detectado necesidad real de agruparlos en una
subcarpeta propia, y hacerlo ahora sin necesidad probada rompería la
convención de carpeta plana ya establecida sin aportar valor.

## Buenas prácticas

- Ordenar cada tabla por categoría/fase, no por fecha de creación.
- Usar siempre los mismos textos de estado: `Aprobado`, `En borrador`,
  `Pendiente`, `Obsoleto`.
- Revisar este documento antes de generar cualquier documento nuevo, para
  evitar duplicados.
- Un documento con estado `Obsoleto` nunca se borra del índice: conserva
  el rastro histórico del proyecto.

---

## Documentos de sistema (memoria permanente)

| Documento | Versión | Estado | Última actualización | Depende de |
|---|---|---|---|---|
| CONTEXT.md | 1.6 | Vivo | 2026-07-20 | — |
| INDEX.md | 1.5 | Vivo | 2026-07-20 | CONTEXT.md |
| DECISIONS.md | 1.2 | Vivo | 2026-07-20 | — |
| GLOSSARY.md | 0.9 | Vivo | 2026-07-20 | DECISIONS.md |
| CHANGELOG.md | 1.6 | Vivo | 2026-07-20 | INDEX.md |
| 00_SYSTEM_WORKFLOW.md | 1.0 | Approved / Congelado (Decisión 022) | 2026-07-20 | CONTEXT, INDEX, DECISIONS, GLOSSARY, CHANGELOG |

## Documentos de Fase 1 (Fundamentos estratégicos)

| Documento | Archivo | Versión | Estado | Última actualización | Depende de |
|---|---|---|---|---|---|
| Visión, Misión y Valores | 01_ESTRATEGIA_vision_mision_valores.md | 1.0 | Aprobado | 2026-07-19 | CONTEXT, DECISIONS, GLOSSARY |
| Mercado y Público Objetivo | 01_ESTRATEGIA_mercado_publico_objetivo.md | 1.0 | Aprobado | 2026-07-19 | Visión, Misión y Valores |
| Análisis de Competencia | 01_ESTRATEGIA_analisis_competencia.md | 1.0 | Aprobado | 2026-07-19 | Visión, Misión y Valores; Mercado y Público Objetivo |
| Posicionamiento de Marca | 01_ESTRATEGIA_posicionamiento_marca.md | 1.0 | Aprobado | 2026-07-19 | Los tres anteriores |

## Documentos de Fase 3 (Product Strategy)

| Documento | Archivo | Versión | Estado | Última actualización | Depende de |
|---|---|---|---|---|---|
| Product Strategy (consolida Especificación del catálogo + Materiales y proveedores + Fichas técnicas del roadmap original; Product DNA, arquitectura de catálogo, colecciones, drops, ciclo de vida, calidad, precios, escalabilidad, evolución) | 03_PRODUCTO_product_strategy.md | 1.0 | Approved / Congelado (Decisión 020) | 2026-07-19 | Brand Bible (v1.0); los cuatro documentos de Fase 1 |
| Informe de cierre de Fase 3 | 03_PRODUCTO_informe_cierre_fase3.md | 1.0 | Final | 2026-07-19 | Product Strategy (v1.0) |

## Documentos técnicos de desarrollo (para Claude Code)

| Documento | Archivo | Versión | Estado | Última actualización | Depende de |
|---|---|---|---|---|---|
| Handoff técnico de transición | WEB_HANDOFF.md | 1.0 | Final | 2026-07-19 | Product Strategy (v1.0); Brand Bible (v1.0) |
| Puerta de entrada técnica para Claude Code | CLAUDE_CODE.md | 1.1 | Final | 2026-07-20 | WEB_HANDOFF.md; Brand Bible (v1.0); Product Strategy (v1.0); 00_SYSTEM_WORKFLOW.md (v1.0, Approved) |
| Arquitectura de frontend | FRONTEND_ARCHITECTURE.md | 1.0 | Final | 2026-07-20 | CLAUDE_CODE.md; WEB_HANDOFF.md; Product Strategy (v1.0) |
| Plan de desarrollo por fases | DEVELOPMENT_ROADMAP.md | 1.1 | Final en estructura, vivo en su seguimiento de estado — Fase 1 en curso | 2026-07-20 | CLAUDE_CODE.md; FRONTEND_ARCHITECTURE.md; WEB_HANDOFF.md |

## Documentos de Fase 2 (Identidad de marca conceptual)

| Documento | Archivo | Versión | Estado | Última actualización | Depende de |
|---|---|---|---|---|---|
| Brand Bible (consolida Personalidad/tono de voz + Territorio narrativo; incorpora el naming ya resuelto como contexto) | 02_MARCA_brand_bible.md | 1.0 | Approved / Congelado (Decisión 016) | 2026-07-19 | Los cuatro documentos de Fase 1 |
| Informe de cierre de Fase 2 | 02_MARCA_informe_cierre_fase2.md | 1.0 | Final | 2026-07-19 | Brand Bible (v1.0) |

Este documento fue el primero en aplicar el **bloque de cierre
estándar** (Dependencias, Documentos derivados, Decisiones
relacionadas, Estado del documento, Próxima fase recomendada), obligatorio
desde el Brand Bible en adelante para todos los documentos raíz del
proyecto. *(Ref. Decisión 013)*

## Documentos por fase (roadmap)

| Fase | Documento raíz previsto | Estado |
|---|---|---|
| 0 — Arquitectura | Arquitectura del proyecto Butay (v1.0) | Aprobado |
| 1 — Fundamentos estratégicos | Visión, misión y valores | Aprobado |
| 1 | Mercado y público objetivo | Aprobado |
| 1 | Análisis de competencia | Aprobado |
| 1 | Posicionamiento de marca | Aprobado |
| 2 — Identidad de marca (conceptual) | Naming | Aprobado (Decisión 009) |
| 2 | Brand Bible (personalidad, tono de voz y territorio narrativo) | Aprobado (v1.0, Decisión 016) — Fase 2 cerrada |
| 3 — Product Strategy | Product Strategy (Product DNA, catálogo, colecciones, drops, ciclo de vida, calidad, precios, escalabilidad, evolución) | Aprobado (v1.0, Decisión 020) — Fase 3 cerrada |
| 4 — Identidad Visual (Design System) | Manual de marca | Pendiente |
| 4 | Paleta de color | Pendiente |
| 4 | Sistema tipográfico | Pendiente |
| 5 — Operaciones | Pricing y costes | Pendiente |
| 5 | Stock y logística | Pendiente |
| 5 | Legal y fiscal | Pendiente |
| 6 — Digital / Web | Especificación técnica de la web | Pendiente |
| 6 | Esquema de datos del e-commerce | Pendiente |
| 6 | Guía de fotografía de producto | Pendiente |
| 7 — Marketing / Lanzamiento | Plan de marketing | Pendiente |
| 7 | Calendario de contenido | Pendiente |
| 7 | Estrategia de redes sociales | Pendiente |

## Notas

Esta tabla se ampliará documento por documento a medida que cada fase se
active. No se crean documentos de fases futuras por adelantado: aparecen
aquí como `Pendiente` únicamente como mapa de lo que existirá.

El roadmap original de la Fase 2 preveía "Personalidad y tono de voz" y
"Territorio narrativo" como documentos independientes. Por Decisión 011,
ambos se consolidan en un único documento raíz: el **Brand Bible**.

El orden de las Fases 3 (Product Strategy) y 4 (Identidad Visual /
Design System) se corrigió por Decisión 012, tras detectarse que este
índice no coincidía con la Arquitectura del proyecto Butay (v1.0).

La Fase 2 se cerró formalmente el 2026-07-19 con la aprobación del
Brand Bible (v1.0, Decisión 016). Ver
`02_MARCA_informe_cierre_fase2.md` para el informe completo.

La Fase 3 (Product Strategy) se cerró formalmente el 2026-07-19 con la
aprobación de Product Strategy (v1.0, Decisión 020). El roadmap
original preveía tres documentos separados ("Especificación del
catálogo", "Materiales y proveedores", "Fichas técnicas"); por Decisión
018 se consolidaron en un único documento raíz, mismo patrón que aplicó
el Brand Bible en la Fase 2. Ver `03_PRODUCTO_informe_cierre_fase3.md`
para el informe completo. La Fase 4 no se ha iniciado — el fundador
priorizó generar `WEB_HANDOFF.md` para el desarrollo web con Claude
Code.

El 2026-07-20 se completó la entrega técnica ("Developer Handoff") para
Claude Code: `CLAUDE_CODE.md`, `FRONTEND_ARCHITECTURE.md` y
`DEVELOPMENT_ROADMAP.md` (Decisión 021), además de una auditoría
completa de toda la documentación existente (ver nota de auditoría en
CONTEXT.md). El desarrollo web todavía no ha comenzado — su inicio
requiere confirmación explícita del fundador.
