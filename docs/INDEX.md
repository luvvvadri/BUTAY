# INDEX.md

> **Tipo de documento:** Sistema — Mapa maestro
> **Versión:** 2.9
> **Fecha de creación:** 2026-07-18
> **Última actualización:** 2026-07-22
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
| CONTEXT.md | 3.0 | Vivo | 2026-07-22 | — |
| INDEX.md | 2.9 | Vivo | 2026-07-22 | CONTEXT.md |
| DECISIONS.md | 1.4 | Vivo | 2026-07-21 | — |
| GLOSSARY.md | 0.9 | Vivo | 2026-07-20 | DECISIONS.md |
| CHANGELOG.md | 2.9 | Vivo | 2026-07-22 | INDEX.md |
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
| Product Strategy (consolida Especificación del catálogo + Materiales y proveedores + Fichas técnicas del roadmap original; Product DNA, arquitectura de catálogo, colecciones, drops, ciclo de vida, calidad, precios, escalabilidad, evolución) | 03_PRODUCTO_product_strategy.md | 1.1 | Approved / Congelado (Decisión 020; nota informativa Decisión 026) | 2026-07-21 | Brand Bible (v1.1); los cuatro documentos de Fase 1 |
| Informe de cierre de Fase 3 | 03_PRODUCTO_informe_cierre_fase3.md | 1.0 | Final | 2026-07-19 | Product Strategy (v1.0) |

## Documentos técnicos de desarrollo (para Claude Code)

| Documento | Archivo | Versión | Estado | Última actualización | Depende de |
|---|---|---|---|---|---|
| Handoff técnico de transición | WEB_HANDOFF.md | 1.0 | Final | 2026-07-19 | Product Strategy (v1.0); Brand Bible (v1.0) |
| Puerta de entrada técnica para Claude Code | CLAUDE_CODE.md | 1.1 | Final | 2026-07-20 | WEB_HANDOFF.md; Brand Bible (v1.0); Product Strategy (v1.0); 00_SYSTEM_WORKFLOW.md (v1.0, Approved) |
| Arquitectura de frontend | FRONTEND_ARCHITECTURE.md | 1.0 | Final | 2026-07-20 | CLAUDE_CODE.md; WEB_HANDOFF.md; Product Strategy (v1.0) |
| Plan de desarrollo por fases | DEVELOPMENT_ROADMAP.md | 1.8 | Final en estructura, vivo en su seguimiento de estado — Fases 1-6 Completas (Fases 1-5 fusionadas a `main`; Fase 6 en rama propia); Fases 7-8 con base construida, no cerradas | 2026-07-22 | CLAUDE_CODE.md; FRONTEND_ARCHITECTURE.md; WEB_HANDOFF.md |

## Documentos de Fase 2 (Identidad de marca conceptual)

| Documento | Archivo | Versión | Estado | Última actualización | Depende de |
|---|---|---|---|---|---|
| Brand Bible (consolida Personalidad/tono de voz + Territorio narrativo; incorpora el naming ya resuelto como contexto) | 02_MARCA_brand_bible.md | 1.1 | Approved / Congelado (Decisión 016; revisado por Decisión 026) | 2026-07-21 | Los cuatro documentos de Fase 1 |
| Informe de cierre de Fase 2 | 02_MARCA_informe_cierre_fase2.md | 1.0 | Final | 2026-07-19 | Brand Bible (v1.0) |

Este documento fue el primero en aplicar el **bloque de cierre
estándar** (Dependencias, Documentos derivados, Decisiones
relacionadas, Estado del documento, Próxima fase recomendada), obligatorio
desde el Brand Bible en adelante para todos los documentos raíz del
proyecto. *(Ref. Decisión 013)*

## Documentos de Fase 4 (Identidad Visual / Design System)

| Documento | Archivo | Versión | Estado | Última actualización | Depende de |
|---|---|---|---|---|---|
| Design System (consolida Manual de marca + Paleta de color + Sistema tipográfico del roadmap original; personalidad visual, logo, color, tipografía, fotografía, dirección artística, aplicación en prenda, packaging, experiencia web) | 04_IDENTIDAD_VISUAL_design_system.md | 0.1 | En borrador — pendiente de autoauditoría y aprobación (Decisión 027) | 2026-07-21 | Brand Bible (v1.1); Product Strategy (v1.1); FRONTEND_ARCHITECTURE.md (v1.0) |

Consolidación aplicada siguiendo el mismo patrón que el Brand Bible
(Decisión 011) y Product Strategy (Decisión 018): un único documento
raíz en vez de tres piezas separadas. *(Ref. Decisión 027)*

## Documentos por fase (roadmap)

| Fase | Documento raíz previsto | Estado |
|---|---|---|
| 0 — Arquitectura | Arquitectura del proyecto Butay (v1.0) | Aprobado |
| 1 — Fundamentos estratégicos | Visión, misión y valores | Aprobado |
| 1 | Mercado y público objetivo | Aprobado |
| 1 | Análisis de competencia | Aprobado |
| 1 | Posicionamiento de marca | Aprobado |
| 2 — Identidad de marca (conceptual) | Naming | Aprobado (Decisión 009) |
| 2 | Brand Bible (personalidad, tono de voz y territorio narrativo) | Aprobado (v1.1, Decisiones 016, 026) — Fase 2 cerrada |
| 3 — Product Strategy | Product Strategy (Product DNA, catálogo, colecciones, drops, ciclo de vida, calidad, precios, escalabilidad, evolución) | Aprobado (v1.1, Decisiones 020, 026) — Fase 3 cerrada |
| 4 — Identidad Visual (Design System) | Design System (personalidad visual, logo, color, tipografía, fotografía, dirección artística, prenda, packaging, web) | En borrador (v0.1, Decisión 027) — Fase 4 abierta, sin cerrar |
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
CONTEXT.md). El desarrollo web **ya ha comenzado**: la Fase 1 de
`DEVELOPMENT_ROADMAP.md` (Configuración del proyecto) está completa —
repositorio, scaffold inicial y despliegue en producción funcionando
(ver la tabla "Documentos técnicos de desarrollo" arriba y
`DEVELOPMENT_ROADMAP.md` para el detalle).

El 2026-07-21 se reabrió puntualmente la Fase 2 (marca) para una
revisión formal del Brand Bible, tras una entrevista de identidad de
marca: pasa a v1.1 (Decisión 026), enriqueciendo esencia, manifiesto,
personalidad y territorio narrativo sin sustituir nada de lo marcado
como permanente en su apartado 15, y se vuelve a cerrar en el mismo
movimiento. Product Strategy pasa a v1.1 (misma decisión) solo con una
nota informativa sobre preferencias de estilo — fit/silueta/tallaje
sigue `PENDIENTE DE DEFINIR`. No se creó ningún documento nuevo de
marca: el Brand Bible sigue siendo la única fuente de verdad.

El mismo día, 2026-07-21, se abrió formalmente la **Fase 4 (Identidad
Visual / Design System)**, tras dos entrevistas de identidad visual
(dirección general y logo) y el protocolo completo de
`00_SYSTEM_WORKFLOW.md` (Comprensión → Arquitectura → Aprobación del
índice → Redacción). Se creó `04_IDENTIDAD_VISUAL_design_system.md`
(v0.1, `En borrador`, Decisión 027), consolidando en un único documento
raíz las tres filas que el roadmap original preveía por separado
("Manual de marca", "Paleta de color", "Sistema tipográfico") — mismo
patrón que Brand Bible y Product Strategy. El documento fija dirección
visual completa sin cerrar valores concretos (color, tipografía, forma
del logo), marcados explícitamente `PENDIENTE DE DEFINIR`. La Fase 4
queda **abierta, sin cerrar**: no tiene informe de cierre ni está
`Approved`/Congelado — sigue pendiente de autoauditoría y aprobación
explícita del fundador.

También el 2026-07-21, por instrucción explícita del fundador de
priorizar el desarrollo, se inició y completó la **Fase 3 técnica de
`DEVELOPMENT_ROADMAP.md` (Sistema de componentes base)** — un track
distinto al roadmap de marca/producto (Decisión 012 aclara que ambos
usan "Fase N" para conceptos distintos). Se construyeron los
componentes base de `src/components/ui/` (botón, input, badge, modal,
tarjeta, layout, tipografía) y la infraestructura de testing del
proyecto (Vitest + Testing Library), trabajados en
`feature/fase-3-component-system` y fusionados a `main` el mismo día
vía PR #4, tras la aprobación del fundador.

Inmediatamente después, el mismo 2026-07-21, se completó la **Fase 4
técnica (Modelo de datos y capa de catálogo)**, cuya única dependencia
(Fase 1) ya estaba satisfecha. Se centralizaron en
`src/types/catalog.ts` los tipos del catálogo (`Category`,
`Collection`, `Drop`, `Sku`, `Variant`, `MessageVisibility`,
`ProductStatus`), con `status` y `type` como campos obligatorios para
que sea imposible a nivel de tipos violar las reglas de producto ya
aprobadas (activo/archivado; permanente/temporal). Se creó la capa
`/data` con 10 SKUs de prueba ficticios y sus funciones de acceso
tipadas, trabajados en `feature/fase-4-catalog-data-layer`. Ver el
apartado "Estado" de la Fase 4 en `DEVELOPMENT_ROADMAP.md`.

Tras la aprobación explícita del fundador de la arquitectura propuesta
para la **Fase 5 técnica (Layouts y navegación)**, se completó su
implementación el mismo 2026-07-21, sobre `feature/fase-5-layouts-navigation`.
Se construyeron `Drawer`/`Breadcrumb`/`EmptyState` (nivel 1) y
`Header`/`Footer`/`Navigation`/`NavLink`/`AnnouncementBar` (capa de
layout), y la estructura de rutas completa de
`FRONTEND_ARCHITECTURE.md` §6 (`src/app/(site)/`, `src/app/(shop)/`),
consumiendo exclusivamente la capa `/data` de la Fase 4 — ningún
producto hardcodeado. Ver el apartado "Estado" de la Fase 5 en
`DEVELOPMENT_ROADMAP.md`.

**Cierre y limpieza (2026-07-21).** Tras una última auditoría completa
(que corrigió un desajuste real de versión de CHANGELOG.md en la
tabla de "Documentos de sistema" de este mismo documento), el
fundador aprobó y se fusionaron a `main` el PR #5 (Fase 4) y el PR #6
(Fase 5, retargeteado de `feature/fase-4-catalog-data-layer` a `main`
tras el merge del PR #5). Ambas ramas de desarrollo se eliminaron
(local y remoto) — el repositorio queda con una única rama, `main`.

**Fase 6 técnica completa (2026-07-22) — Páginas de catálogo.** Por
instrucción explícita del fundador de construir "la primera versión
completamente navegable de Butay", se completó la Fase 6 junto con
partes sustanciales de las Fases 7 y 8 en `feature/fase-6-catalog-pages`.
Catálogo/categoría/colección quedan formalmente completos. La ficha de
producto (Fase 7) y Home/Manifiesto (Fase 8) se reconstruyeron por
completo pero **no se marcan cerradas** — la Fase 7 porque el modelo
de datos no tiene campo de mensaje/frase real de producto; la Fase 8
porque su copy es explícitamente de prueba, no contenido real del
Brand Bible vía `/content`. Ver el apartado "Estado" de la Fase 6 en
`DEVELOPMENT_ROADMAP.md` y sus notas en las Fases 7 y 8 para el
detalle completo. La rama está pendiente de PR y revisión del
fundador — no se ha fusionado a `main`.
