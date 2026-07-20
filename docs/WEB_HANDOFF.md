# WEB_HANDOFF.md

> **Tipo de documento:** Transición técnica — punto de entrada para desarrollo web
> **Versión:** 1.0
> **Fecha de creación:** 2026-07-19
> **Última actualización:** 2026-07-19
> **Estado:** Final
> **Depende de:** Brand Bible — Butay (v1.0); Product Strategy — Butay (v1.0); Visión, Misión y Valores (v1.0); Mercado y Público Objetivo (v1.0); Posicionamiento de Marca (v1.0)
> **Destinatario principal:** Claude Code (desarrollo de la primera versión de la web de Butay)

---

## Cómo usar este documento

Este documento resume, en formato técnico y sin desarrollo narrativo, la
información imprescindible de Butay para empezar a construir la web sin
tener que leer el resto de la documentación estratégica. Es un resumen
derivado — no sustituye al Brand Bible ni a Product Strategy como fuente
de verdad; ante cualquier duda o ampliación, esos documentos prevalecen.

Toda información marcada `PENDIENTE DE DEFINIR` no debe completarse por
inferencia ni inventarse durante el desarrollo. Si el desarrollo la
necesita, debe preguntarse al fundador o registrarse como bloqueante.

---

## 1. Resumen ejecutivo de Butay

Marca de streetwear emocional y accesible. La ropa transmite mensaje —no
solo estética— bajo el arquetipo del "hermano mayor" (Kuya): presencia
cercana, no autoridad ni espectáculo. Nombre de marca: **Butay**
(visayo, Filipinas) — significa "dar/compartir". No busca posicionamiento
de lujo ni estatus; compite por profundidad de mensaje, no por volumen o
exclusividad.

Lanzamiento: camisetas y sudaderas, catálogo inicial de 8-15 referencias
(alcance de lanzamiento, no límite permanente).

## 2. Identidad de marca

- **Propósito:** la ropa como forma de transmitir arte, sentimiento y
  pensamiento.
- **Misión:** que quien lleve Butay se sienta identificado y entendido.
- **Arquetipo:** el hermano mayor — acompaña, no sermonea; no compite por
  brillar; no interrumpe; protege sin controlar.
- **Valores:** minimalismo, salud mental, amor, pensamiento/reflexión,
  autenticidad.
- **Principio no negociable:** la intimidad del mensaje prevalece sobre
  crecimiento o margen. El alcance se gana ampliando el mensaje, nunca
  diluyéndolo. Cualquier decisión de producto o web que lo contradiga no
  se implementa.
- **Manifiesto de marca** (borrador, sujeto a validación final del
  fundador antes de publicarse):
  > "We don't dress to be seen. We dress to be understood. Not the
  > loudest thing in the room. The one that gets it. [...] Wear what you
  > mean."
- **Líneas rojas de contenido:** no dar consejo clínico; no trivializar
  el sufrimiento; no estetizar el dolor sin cuidado; no usar el origen
  filipino como decoración; nunca lenguaje de estatus u ostentación.

## 3. Público objetivo

16-35 años. Buscan expresarse y sentirse acompañados — no buscan estatus.
Referencias culturales afines: R&B y pop confesional, contenido de
superación personal (crecimiento como proceso, no como logro
instantáneo). Competidores de referencia: Kanye Diaries (frases en
prenda como producto central), Takkra (sensación de marca afín).

## 4. Product Strategy (resumen)

- **Secuencia de creación:** Emoción → Mensaje → Concepto → Colección →
  Prenda → Diseño → Producción.
- **Colecciones:** línea permanente (siempre disponible, ancla del
  catálogo) + colecciones temporales (exploran mensajes nuevos sin
  romper la identidad).
- **Drops:** solo cuando hay una historia o mensaje que lo justifique.
  Nunca por escasez artificial, urgencia o FOMO.
- **Ciclo de vida:** nace superando el Product DNA; puede evolucionar si
  sigue vigente; se retira cuando deja de reflejar el mensaje de marca
  (nunca por moda pasajera); los productos retirados se **archivan, no
  se eliminan**.
- **Calidad y precio:** máxima calidad posible dentro de un precio
  accesible; se sacrifica margen antes que percepción de calidad.
  Durabilidad por encima de recompra rápida.
- **Precio (hipótesis heredada, no definitiva):** camiseta 20-25€,
  sudadera 35-40€ — cifras reales pendientes de la Fase 5 (Operaciones).
- **Experiencia de cliente:** cercana, sin presión ni urgencia. Sin
  countdowns, sin stock artificialmente limitado como táctica de venta,
  sin programas de fidelización gamificados (puntos/niveles/badges).
- **Escalabilidad:** sin límite numérico de categorías o mercados; toda
  expansión (de categoría o geográfica) pasa por el Product DNA. El
  crecimiento internacional usa exactamente los mismos principios de
  producto en todos los mercados — no hay estrategia de producto
  distinta por país.

## 5. Arquitectura del catálogo

**Jerarquía (conceptual):**

```
Categoría → Colección → Drop (opcional) → SKU → Variante (talla / color)
```

- **Categorías de lanzamiento:** camisetas y sudaderas únicamente.
- **Tamaño de catálogo inicial:** 8-15 referencias aproximadamente
  (alcance de lanzamiento, no techo permanente).
- **Colecciones:** dos estados — `permanente` y `temporal`. La web debe
  poder distinguirlos y mostrar la línea permanente como siempre
  disponible.
- **Productos retirados:** estado `archivado`, nunca eliminados;
  deben seguir siendo consultables.
- **Drops:** opcionales dentro de la jerarquía, no obligatorios para
  cada colección.

## 6. Product DNA

Filtro obligatorio de siete criterios que cualquier producto debe superar
(aplicado por el fundador; no es una funcionalidad de la web, pero
condiciona qué contenido puede publicarse):

1. Puede resumirse en una idea o mensaje claro antes de diseñarse.
2. Refuerza el propósito y la identidad de la marca.
3. Aporta valor emocional, no solo estético.
4. No existe únicamente porque pueda venderse.
5. Podría seguir teniendo sentido dentro de diez años.
6. Respeta el principio de intimidad de la marca.
7. Hace que quien la lleve se sienta identificado antes que observado.

**Visibilidad del mensaje:** toda prenda lleva mensaje siempre; varía
cómo se revela — `protagonista`, `discreto` u `oculto` (interior,
etiqueta, cuello, manga). Cada producto debería poder registrar este
atributo, relevante para cómo se presenta en su ficha.

**Exclusiones:** de intención, nunca de categoría — Butay no prohíbe
categorías de producto por adelantado (ver apartado "Requisitos para
futuras ampliaciones").

## 7. Tono de voz

- Primera persona cercana; nunca distancia clínica ni tono de experto.
- Frases cortas y directas.
- Acompaña, no da lecciones ("está bien no estar bien", no "deberías
  sentirte mejor").
- Humor cómplice, nunca a costa de quien escucha.
- Nunca presume — ni de marca, ni de producto, ni del cliente.
- Prueba rápida para cualquier microcopy: ¿lo diría un hermano mayor de
  confianza? Si no, se reescribe.

**Vocabulario a evitar activamente:** lenguaje de estatus/exclusividad
(*elite, luxury, exclusive, flex*), positividad tóxica (*good vibes
only*), tono de superioridad (*you need to, let me teach you*).

## 8. Idioma

- **Voz de marca (frases en prenda, copy emocional, naming de
  producto):** inglés.
- **Documentación interna del proyecto:** español (no aplica a la web en
  sí).
- **Comunicación funcional con el cliente** (confirmaciones de pedido,
  soporte, incidencias): puede ser en español por motivos prácticos de
  comprensión en el mercado de lanzamiento — no es una voz de marca, es
  servicio al cliente.
- **Idioma de interfaz de la web (inglés vs. español con producto en
  inglés):** `PENDIENTE DE DEFINIR` — decisión de la Fase 6, no asumir
  ninguna de las dos opciones por defecto.

## 9. Estructura prevista de la web

Derivada estrictamente de decisiones ya aprobadas. Todo lo no listado
aquí no está decidido:

- Catálogo navegable por categoría → colección → (drop) → producto,
  reflejando la jerarquía del apartado 5.
- Distinción visible entre colección permanente y colecciones
  temporales.
- Ficha de producto con capacidad de mostrar el mensaje/frase de la
  prenda y su nivel de visibilidad (protagonista / discreto / oculto).
- Archivo de productos retirados, accesible pero diferenciado del
  catálogo activo (no un simple borrado).
- El resto de la arquitectura de navegación, páginas e IA (home, checkout,
  cuentas de usuario, etc.) es **`PENDIENTE DE DEFINIR`** — no existe
  todavía una especificación técnica de la web (prevista para la Fase
  6).

## 10. Funcionalidades previstas

Derivadas estrictamente de restricciones y decisiones ya aprobadas (ver
también apartado 11, Restricciones):

- Filtrado/navegación por categoría, colección (permanente/temporal) y,
  si aplica, drop.
- Estado de producto: `activo` / `archivado` (nunca eliminación real de
  productos retirados).
- Atributo de visibilidad de mensaje por producto (protagonista /
  discreto / oculto) disponible para mostrarse en la ficha.
- El resto de funcionalidades (buscador, cuentas, wishlist, reseñas,
  recomendaciones, checkout, pasarela de pago, gestión de stock en
  tiempo real, etc.) es **`PENDIENTE DE DEFINIR`** — no inventar ni
  asumir su inclusión sin confirmación del fundador.

## 11. Información pendiente de definir

No debe completarse por inferencia durante el desarrollo:

- Especificación técnica completa de la web (páginas, flujos, checkout).
- Esquema de datos técnico del e-commerce (más allá de la jerarquía
  conceptual del apartado 5).
- Idioma de interfaz de la web.
- Filosofía de fit, silueta y tallaje (oversized/regular/ajustado,
  unisex vs. líneas por género, rango de tallas).
- Materiales concretos, proveedores y costes reales.
- Precios finales (solo existe la hipótesis del apartado 4).
- Paleta de color, tipografía y manual de marca visual (Fase 4,
  Identidad Visual / Design System — todavía no iniciada).
- Guía de fotografía de producto.
- Gobernanza de aplicación del Product DNA una vez exista equipo.

## 12. Restricciones

Mecánicas y patrones explícitamente prohibidos, por contradecir
decisiones ya aprobadas:

- **Sin mecánicas de urgencia:** no countdowns, no stock artificialmente
  limitado como táctica de presión, no badges de "solo quedan X" con
  fines de venta agresiva.
- **Sin gamificación de fidelización:** no puntos, no niveles, no
  recompensas por recompra.
- **Sin drops basados en escasez artificial o hype** — un drop solo se
  justifica por una historia o mensaje concreto.
- **Sin eliminación real de productos retirados** — solo archivado.
- **Sin lenguaje o señales visuales de estatus/lujo** en ningún punto de
  la experiencia (microcopy, packaging, comunicación).
- **Sin asumir posicionamiento premium/lujo** — el posicionamiento
  aprobado es accesible y anti-ostentación.

## 13. Requisitos para futuras ampliaciones

- Cualquier categoría de producto nueva debe superar el Product DNA
  (apartado 6) antes de incorporarse — Butay no excluye categorías por
  adelantado, solo intenciones equivocadas (estatus, rentabilidad pura,
  mensaje vacío, colaboraciones/licencias que diluyan la identidad).
- Cualquier expansión geográfica debe aplicar el mismo Product DNA y el
  mismo Brand Bible que el mercado de lanzamiento — no se diseña una
  estrategia de producto distinta por país. Solo la ejecución operativa
  (tallaje local, logística, idioma funcional) puede adaptarse por
  mercado.
- El número de referencias del catálogo no tiene techo permanente; el
  único límite es la coherencia con la identidad de marca (Product DNA).
- Toda ampliación de la web debe evitar las restricciones del apartado
  12, incluso en funcionalidades no listadas todavía como previstas.

---

## Bloque de cierre estándar

**Dependencias:** Brand Bible — Butay (v1.0); Product Strategy — Butay
(v1.0); Visión, Misión y Valores (v1.0); Mercado y Público Objetivo
(v1.0); Análisis de Competencia (v1.0); Posicionamiento de Marca (v1.0);
DECISIONS.md.

**Documentos derivados:** ninguno todavía — es en sí mismo un documento
derivado, punto de entrada para el trabajo técnico de la Fase 6.

**Decisiones relacionadas:** 005, 006, 009, 010, 011, 012, 013, 014,
016, 017, 018, 019, 020.

**Estado del documento:** Final. Se actualiza solo si el Brand Bible o
Product Strategy cambian de versión, o si se toman nuevas decisiones que
afecten a su contenido.

**Próxima fase recomendada:** Fase 4 — Identidad Visual / Design System,
según el roadmap general del proyecto. Su apertura no es automática:
requiere instrucción explícita del fundador. El desarrollo web con
Claude Code puede comenzar usando este documento como punto de entrada,
en paralelo o antes de que se abra la Fase 4.
