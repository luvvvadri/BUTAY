# Informe de cierre — Fase 2 (Identidad de marca conceptual)

> **Tipo de documento:** Fase 2 — Informe de cierre (documento final, no vivo)
> **Versión:** 1.0
> **Fecha de creación:** 2026-07-19
> **Última actualización:** 2026-07-19
> **Estado:** Final
> **Depende de:** Brand Bible — Butay (v1.0); DECISIONS.md; INDEX.md; CHANGELOG.md

---

Este informe cierra formalmente la Fase 2 del proyecto Butay. No es un
documento vivo: es una fotografía fija del cierre, en el mismo espíritu
que CHANGELOG.md pero centrado en una fase completa en lugar de cambios
individuales. Si en el futuro se abren fases adicionales, se recomienda
generar un informe equivalente al cierre de cada una — Fase 1 no tuvo
uno propio porque esta práctica se estableció durante la Fase 2.

---

## Objetivo de la fase

Definir la identidad de marca conceptual de Butay —personalidad, tono
de voz y territorio narrativo— en un documento raíz único y consolidado
(el Brand Bible), que incorporase el naming ya resuelto en la Fase 1 y
sirviera de referencia de trabajo para diseñadores, desarrolladores,
fotógrafos, creadores de contenido, equipos de marketing e IA durante
los próximos años. Explícitamente fuera de alcance: identidad visual
(Fase 4) y especificación de producto (Fase 3).

## Documentos creados

- **Brand Bible — Butay** (`02_MARCA_brand_bible.md`), v1.0, `Approved`.
  Documento raíz de la Fase 2, 18 apartados según el índice v4.
- **Informe de cierre de Fase 2** (`02_MARCA_informe_cierre_fase2.md`),
  este mismo documento.

## Documentos modificados

Durante la Fase 2 se actualizaron los cinco documentos de sistema en
múltiples ocasiones para mantener la trazabilidad al día:

- **DECISIONS.md** — de v0.5 a la versión vigente; se añadieron las
  decisiones 011 a 016.
- **INDEX.md** — se corrigió el roadmap de fases (Decisión 012), se
  añadió la tabla de documentos de Fase 2, y se actualizó el estado del
  Brand Bible en cada hito (índice aprobado → borrador → Release
  Candidate → aprobado).
- **GLOSSARY.md** — se añadieron los términos "Brand Bible" y "Bloque de
  cierre estándar", y se amplió "Documento congelado" para aclarar su
  equivalencia con `Approved`.
- **CONTEXT.md** — se actualizó en cada hito de la fase, manteniendo el
  principio de "fotografía del presente" que define su propio objetivo.
- **CHANGELOG.md** — registró cada cambio de forma cronológica; es la
  fuente más granular de todo lo ocurrido durante esta fase.

Como precondición a la Fase 2 (no como parte de ella), los cuatro
documentos raíz de la Fase 1 pasaron de "En borrador" a `Congelado`
(v1.0) mediante la Decisión 010.

## Decisiones tomadas

Todas registradas en DECISIONS.md:

| # | Decisión | Resumen |
|---|---|---|
| 011 | Definición del Brand Bible | Documento consolidado de Fase 2, sustituye a "Personalidad y tono de voz" + "Territorio narrativo" por separado |
| 012 | Corrección de roadmap | Fase 3 = Product Strategy, Fase 4 = Identidad Visual / Design System (antes al revés en INDEX.md) |
| 013 | Bloque de cierre estándar | Convención obligatoria de cinco campos para todo documento raíz desde el Brand Bible en adelante |
| 014 | Idioma de marca | Inglés como idioma principal de la voz de marca de cara al cliente; español para documentación interna |
| 015 | Redacción del borrador | Se redacta la v0.1 del Brand Bible siguiendo el índice v4 |
| 016 | Aprobación formal | El Brand Bible pasa a v1.0, `Approved`; se cierra la Fase 2 |

El índice del Brand Bible pasó además por tres rondas de revisión
crítica (v1 → v2 → v3 → v4) antes de redactarse ningún contenido, y el
contenido en sí por una ronda de refinamiento de calidad (v0.1 → v0.9)
antes de la aprobación final — ninguna de estas rondas generó una
decisión formal propia porque no cambiaron dirección ni estructura, solo
calidad.

## Riesgos pendientes

- **Estrategia de idioma sin cerrar a nivel de implementación.** El
  apartado 8 del Brand Bible fija el inglés como idioma de marca, pero
  la arquitectura exacta de la web (¿interfaz en inglés o en español con
  frases de producto en inglés?) queda `PENDIENTE DE DEFINIR` para la
  Fase 6. Si no se resuelve a tiempo, puede bloquear el lanzamiento de
  la web.
- **Filosofía de producto (apartado 12) puede invadir terreno de la Fase
  3** si quien redacte la especificación de catálogo no respeta el
  límite entre "criterio permanente" y "especificación técnica". Requiere
  vigilancia activa al abrir la Fase 3.
- **Evolución de la marca (apartado 15) solo protege la identidad si se
  aplica con rigor.** Si futuras decisiones no se contrastan
  explícitamente contra la lista de "permanente vs. flexible", el
  apartado se convierte en papel mojado.
- **Ejemplos tácticos de copy (apartados 13 y 14) envejecen.** Están
  marcados como ilustrativos, pero existe el riesgo de que se traten
  como copy final aprobado si no se revisan periódicamente.
- **Gobernanza unipersonal.** Toda aprobación depende del fundador. Si el
  proyecto incorpora equipo, el Brand Bible no define todavía quién más
  podría tener autoridad de aprobación — señalado también en el
  apartado 1 del propio documento.
- **Materiales, sostenibilidad y paleta visual siguen sin decidir.** El
  Brand Bible no afirma nada al respecto (correctamente, por falta de
  decisión), pero eso significa que la Fase 3 y la Fase 4 parten de cero
  en esos puntos, sin atajos.

## Dependencias hacia la Fase 3 (Product Strategy)

- La Fase 3 hereda directamente el **apartado 12 (Filosofía de
  producto)**: los cuatro criterios permanentes que cualquier prenda
  debe cumplir.
- Hereda también el **apartado 13 (Voz aplicada al producto)** para el
  naming y los mensajes en prenda — el mecanismo central de
  diferenciación de Butay.
- Debe respetar el **Principio no negociable** y el **posicionamiento
  accesible y anti-ostentación** heredados de la Fase 1 a través del
  Brand Bible.
- El Brand Bible queda registrado como consulta obligatoria antes de
  cualquier decisión de producto (apartado 1, reglas de uso).

## Lecciones aprendidas

- **Aprobar la arquitectura antes de escribir contenido ahorra
  retrabajo.** Las tres rondas de revisión crítica del índice (v1-v4)
  detectaron huecos reales (Manifiesto, Estrategia de idioma,
  Sensibilidad y líneas rojas, Filosofía de producto, Evolución de la
  marca) antes de que existiera una sola frase de contenido que
  reescribir.
- **Las contradicciones detectadas a tiempo evitan construir sobre una
  base equivocada.** Señalar que "marca premium" no encajaba con el
  posicionamiento accesible ya aprobado evitó redactar un Brand Bible
  entero sobre una premisa incorrecta.
- **El bloqueo de gobernanza funcionó en la práctica, no solo en la
  teoría.** La regla de GLOSSARY.md ("no se avanza de fase sin que el
  documento raíz de la anterior esté Aprobado") se activó de forma
  efectiva al querer empezar la Fase 2 sin haber cerrado la Fase 1.
- **Decisiones aparentemente menores pueden ser bloqueantes reales.** La
  estrategia de idioma parecía un detalle, pero condicionaba el
  Manifiesto, el vocabulario y todos los ejemplos de copy — mejor
  resolverla explícitamente que asumir una respuesta.
- **Invertir en trazabilidad desde el principio permite auditar sin
  depender de la memoria de la conversación.** El bloque de cierre
  estándar y este mismo informe existen para que cualquier persona o IA
  pueda reconstruir el estado del proyecto leyendo documentos, no
  historial de chat.

## Estado general del proyecto

| Fase | Estado |
|---|---|
| 0 — Arquitectura | Aprobado |
| 1 — Fundamentos estratégicos | Aprobado y `Congelado` (v1.0) |
| 2 — Identidad de marca conceptual | **Aprobado y `Approved` (v1.0) — cerrada con este informe** |
| 3 — Product Strategy | Pendiente de inicio (no iniciada) |
| 4 — Identidad Visual / Design System | Pendiente |
| 5 — Operaciones | Pendiente |
| 6 — Digital / Web | Pendiente |
| 7 — Marketing / Lanzamiento | Pendiente |

La Fase 3 no se abre junto con este informe. Su inicio requiere una
instrucción explícita del fundador, siguiendo el mismo patrón de cierre
formal ya aplicado entre la Fase 1 y la Fase 2.
