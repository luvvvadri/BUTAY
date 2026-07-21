# Identidad Visual / Design System — Butay

> **Tipo de documento:** Fase 4 — Identidad Visual / Design System (documento raíz)
> **Versión:** 0.1
> **Fecha de creación:** 2026-07-21
> **Última actualización:** 2026-07-21
> **Estado:** En borrador — pendiente de autoauditoría y aprobación del fundador
> **Depende de:** Brand Bible — Butay (v1.1); Product Strategy — Butay (v1.1); FRONTEND_ARCHITECTURE.md (v1.0); DECISIONS.md; GLOSSARY.md; 00_SYSTEM_WORKFLOW.md (v1.0, Approved)
> **Arquitectura:** índice aprobado el 2026-07-21 (Etapas 1-3 del workflow: Comprensión, Arquitectura, Aprobación)
> **Aprobación:** pendiente — Etapa 6 (Autoauditoría) y Etapa 8 (Versión oficial) todavía no completadas

---

## 0. Ficha del documento

Este documento es el documento raíz de la Fase 4 del proyecto Butay
(Identidad Visual / Design System). Define la dirección visual completa
de la marca — logo, color, tipografía, fotografía, dirección artística,
aplicación en prenda, packaging y experiencia visual de la web — a
partir de dos entrevistas de identidad visual con el fundador
(identidad visual general y logo).

Consolida en un único documento raíz lo que el roadmap original de
`INDEX.md` preveía como tres piezas separadas ("Manual de marca",
"Paleta de color", "Sistema tipográfico") — mismo patrón de
consolidación ya aplicado por el Brand Bible (Decisión 011) y Product
Strategy (Decisión 018).

No define implementación técnica (tokens de Tailwind, componentes,
código) — eso corresponde a la ejecución en `butay-web` una vez este
documento esté aprobado. No define precios, materiales ni fichas
técnicas de producto — eso es Product Strategy. No define logo
definitivo, colores exactos ni tipografías concretas — ninguno de los
tres está resuelto todavía; quedan marcados `PENDIENTE DE DEFINIR` en
sus apartados correspondientes.

**Síntesis:** este documento fija la dirección visual completa de Butay
en el nivel de decisión estratégica — qué debe sentirse y por qué — no
en el nivel de ejecución — qué hex, qué fuente, qué forma de logo. Esas
decisiones de ejecución llegarán en una iteración posterior, sobre esta
misma base.

---

## 1. Cómo usar este documento

**Objetivo.** Servir de referencia única para cualquier diseñador,
fotógrafo, desarrollador o IA que traduzca la identidad conceptual de
Butay (Brand Bible) a forma visual: qué dirección seguir, qué evitar
siempre, y qué sigue abierto a definir en una iteración posterior.

**Audiencia.** Diseñadores gráficos y de producto, fotógrafos, equipos
de desarrollo (Fase 6), y cualquier IA que trabaje en fases futuras del
proyecto.

**Cuándo consultarlo.** Antes de proponer cualquier elemento visual
definitivo — logo, paleta, tipografía, fotografía de producto,
maquetación de la web. Es de consulta obligatoria antes de completar
esta misma fase (iteración de valores concretos) y antes de la Fase 6
(Digital / Web).

**Cuándo debe actualizarse.** Solo mediante una decisión formal
registrada en DECISIONS.md — nunca por conveniencia puntual de una
pieza o campaña. El apartado 15 ("Evolución del Design System") existe
precisamente para distinguir qué puede cambiar de qué no.

**Reglas de uso.**
1. Mientras el estado sea `En borrador`, ningún otro documento debe
   citarlo como fuente definitiva.
2. Todo lo marcado `PENDIENTE DE DEFINIR` no debe completarse por
   inferencia — se pregunta al fundador o se deja como bloqueante.
3. Ningún apartado de este documento puede contradecir el Brand Bible
   (v1.1) ni Product Strategy (v1.1) — este documento hereda, no
   redefine.
4. La autoridad para aprobar o modificar este documento es el fundador
   de Butay, mientras el proyecto sea unipersonal — misma regla que
   Brand Bible y Product Strategy.

**Convención de redacción.** Cada apartado termina con una **Síntesis**
en negrita. Ningún ejemplo visual concreto (color, tipografía, forma de
logo) aparece en este documento — donde la entrevista dio dirección
cualitativa sin valores finales, se registra como dirección; donde no
dio ninguna base, se marca `PENDIENTE DE DEFINIR`.

**Síntesis:** este documento manda sobre cualquier decisión visual de
Butay que ya tenga dirección fijada; donde todavía no la hay, esa
ausencia está documentada a propósito, no por descuido.

---

## 2. Herencia (Brand Bible v1.1 + Product Strategy v1.1)

Tabla resumen — no redefine, solo hereda:

| Elemento | Resumen | Fuente |
|---|---|---|
| Temperatura emocional | Cálida, tranquila, cercana — nunca fría ni agresiva | Brand Bible §16 |
| Minimalismo | Principio, no carencia — restricción visual intencionada | Brand Bible §12, §16 |
| Ausencia de ostentación | Sin logos dominantes, sin señales visuales de estatus o lujo | Brand Bible §9, §10, §12, §16 |
| El mensaje por encima del adorno | Ninguna decisión visual debe competir con la frase de la prenda | Brand Bible §16 |
| Arquetipo | El hermano mayor: presencia, no espectáculo | Brand Bible §5 |
| Visibilidad del mensaje | Tres niveles fijos: protagonista / discreto / oculto — nunca un cuarto nivel | Product Strategy §3, §13.1 |
| Durabilidad sobre tendencia | Decisiones visuales pensadas para no caducar | Product Strategy §8, §13.1 |
| Empaquetado íntimo | El packaging debe sentirse personal, nunca publicitario | Product Strategy §9, §13.1 |
| Esencia de marca | "Butay no vende ropa, vende expresión" — el arte de pensar y no saber hablar también existe | Brand Bible §4 (Decisión 026) |

Este documento no redefine ninguno de estos puntos. Cuando algo aquí
parezca nuevo, es un desarrollo de lo anterior, nunca una sustitución.

**Síntesis:** ningún apartado posterior de este documento puede
contradecir esta tabla; en caso de duda, el Brand Bible (v1.1) y
Product Strategy (v1.1) tienen prioridad.

---

## 3. Personalidad visual — "limpio, pero con alma"

La dirección visual de Butay combina dos fuerzas que no se anulan entre
sí, sino que conviven:

- **Trazos humanos y emocionales:** imperfección, cercanía, sensación
  de autor y personalidad — la marca debe sentirse hecha por personas
  para personas, nunca generada por un sistema.
- **Líneas limpias:** orden, minimalismo, claridad visual — coherente
  con el principio de restricción ya fijado en el Brand Bible (§12,
  §16).

La síntesis que el propio fundador dio a esta dirección es la más
precisa posible: **"una estética limpia, pero con alma."** No debe
sentirse fría, artificial ni excesivamente diseñada.

**Síntesis:** cualquier propuesta visual que resulte fría, impersonal o
"perfecta" en el sentido corporativo del término contradice esta
dirección, por muy pulida que esté técnicamente.

---

## 4. Territorio emocional visual

Debe transmitir: intriga, nostalgia, cercanía, reflexión — y, en el
caso específico del logo, además: calma, confianza, un pequeño punto de
misterio.

Nunca debe transmitir: arrogancia, superioridad, ego excesivo, frialdad
o distancia.

La primera impresión buscada, en palabras del fundador: *"esta marca me
entiende"* → *"esto parece algo especial"* → *"quiero saber más."* Es
una progresión de identificación a curiosidad, no de impacto visual a
deseo de compra.

**Síntesis:** cualquier pieza visual se evalúa por si genera
identificación y curiosidad emocional — no por si "llama la atención"
en el sentido publicitario del término.

---

## 5. Referencias conceptuales y qué evitar

**Referencias.** Diario personal, galería de arte, carta de amor,
librería. Butay debe sentirse íntima, emocional, con una historia
detrás — no como una tienda ni como una campaña.

*Nota de alcance:* estas son referencias conceptuales y de sensación,
no visuales o estéticas concretas — ningún logo, marca o estilo
gráfico específico se ha dado como referencia todavía (ver apartado 6,
Logo).

**Evitar activamente:** lujo excesivo, exclusividad elitista, estética
urbana agresiva. Coherente con el rechazo a la ostentación ya fijado en
el Brand Bible y con el posicionamiento "streetwear emocional" que no
compite por volumen o espectáculo (Posicionamiento de Marca, Brand
Bible §5).

La sensación que debe producir cualquier pieza, resumida por el
fundador: *"alguien consiguió expresar algo que yo también sentía."*

**Síntesis:** si una pieza visual proyecta superioridad, lujo o
agresividad en vez de conexión, no representa a Butay — sin importar
cuánto encaje con tendencias del sector.

---

## 6. Logo: rol, dirección y aplicación

**Rol.** El logo es una firma, no el protagonista. La marca debe
reconocerse antes por su mensaje y sus prendas que por el propio logo —
el logo tiene identidad propia, pero nunca debe superar al mensaje
(coherente con Brand Bible §12, §16). Se posiciona entre protagonista y
firma discreta, sin ser ninguno de los dos extremos.

**Dirección de tipo.** Pueden convivir un componente basado en texto
("Butay" escrito) y un concepto más experimental/artístico.
**PENDIENTE DE DEFINIR:** si existe además un símbolo independiente del
texto — el fundador ha dejado esto deliberadamente abierto, a la espera
de una comprensión más profunda antes de decidir.

**Personalidad.** Si el logo fuera una persona: camiseta blanca
oversize y vaqueros, habla cercana y natural, energía tranquila,
original, con personalidad propia — coherente con el arquetipo del
hermano mayor y los cinco rasgos de personalidad ya fijados (Brand
Bible §5-6).

**Sensación buscada.** Curiosidad, calma, confianza, nostalgia,
misterio (un punto, no dominante), cercanía. Nunca frío ni distante.

**Ancla conceptual.** No hay referencias visuales concretas — la única
referencia dada es conceptual: *"esta marca era bastante original
porque se acercaba a los pensamientos de la gente."* Es la misma
esencia ya incorporada al Brand Bible (§4, Decisión 026), aplicada
ahora al logo — no una idea nueva.

**Qué evitar.** Nunca debe parecer marca de lujo, marca deportiva,
marca urbana agresiva, ni marca genérica.

**Color.** Prácticamente monocromo (blanco/negro) — no usa el color de
acento del resto del sistema (ver apartado 7). Necesitará variantes
claro/oscuro para funcionar sobre prendas y fondos de distinto tono.

**Aplicación.** Principalmente packaging, web, redes sociales, y pecho
izquierdo de las prendas como firma reconocible — sin replicar la
estética de marcas deportivas de referencia (mencionadas solo como
ejemplo de ubicación, no de estilo).

*Nota de diseño a vigilar en la siguiente iteración (no resuelta
aquí):* el pecho es, culturalmente, una posición de logo asociada a
menudo con marcas deportivas — justo lo que Butay quiere evitar
parecer. Esta tensión no se resuelve en este documento; queda señalada
para cuando se aborde el diseño concreto.

**Evolución.** Equilibrio entre atemporalidad (debe poder durar
décadas) y capacidad de evolucionar si la marca crece — coherente con
"durabilidad sobre tendencia" (Product Strategy §8).

**PENDIENTE DE DEFINIR (no se infiere ni se inventa):**
- Si existe un símbolo independiente del texto.
- Si existe un monograma o versión reducida para usos a escala muy
  pequeña.
- Si el logo incorpora alguna referencia visual al origen visayo/
  filipino del nombre "Butay" — el Brand Bible (§10) ya marca este
  origen como zona sensible, a tratar con respeto y nunca como
  decoración; esta pregunta queda abierta explícitamente, no resuelta
  por defecto en ningún sentido.
- Cualquier forma, símbolo o boceto concreto — no se diseña en este
  documento.

**Síntesis:** el logo es una firma coherente con todo lo ya fijado —
cercana, tranquila, nunca dominante — pero su forma final (símbolo
sí/no, monograma sí/no, referencia cultural sí/no) sigue sin decidirse
a propósito. Ninguna propuesta de diseño debe asumir una respuesta a
estas preguntas sin volver a preguntar.

---

## 7. Sistema de color

**Dirección.** Tres capas conviviendo, no una paleta plana:

1. **Base neutra:** blanco, negro, escala de grises — el objetivo es
   que el mensaje sea siempre el protagonista, coherente con "el
   mensaje por encima del adorno" (Brand Bible §16).
2. **Capa cálida:** tonos beige, crema, marrones suaves — para
   transmitir cercanía, nostalgia e intimidad.
3. **Acentos puntuales:** colores con personalidad, usados como
   elemento puntual, no como base.

La sensación buscada, en palabras del fundador: *"una página de un
diario con un detalle que destaca."*

**Evitar.** Colores demasiado artificiales, neones, estética
corporativa.

**PENDIENTE DE DEFINIR:** valores exactos (códigos hexadecimales,
tokens concretos). Esta dirección cualitativa es la base sobre la que
se propondrán candidatos concretos en una iteración posterior, sujetos
a aprobación explícita — no se fijan aquí.

**Síntesis:** cualquier paleta final debe poder describirse como
"neutra con calidez y un detalle que destaca" — nunca como plana,
artificial o corporativa. Los valores exactos son la siguiente
iteración, no esta.

---

## 8. Sistema tipográfico

**Dirección.** Carácter editorial, emocional, reflexivo — debe recordar
a un libro, una carta, un diario personal. Sistema dual:

- **Mensajes principales** (frases en prenda, manifiesto, comunicación
  emocional): tipografía con personalidad propia.
- **Información funcional** (interfaz, datos, texto operativo):
  tipografía limpia y sencilla.

La tipografía debe ayudar a transmitir una historia, no solo comunicar
información — coherente con el principio de que toda prenda sostiene un
mensaje (Brand Bible §12).

**PENDIENTE DE DEFINIR:** familias tipográficas concretas. La Fase 1
del roadmap técnico (`DEVELOPMENT_ROADMAP.md`) ya usa una fuente
variable de sistema (Geist) como placeholder explícito, precisamente
para poder sustituirla sin tocar componentes cuando esta decisión se
cierre.

**Síntesis:** dos registros tipográficos, no uno — uno con carácter
para lo emocional, uno limpio para lo funcional. Qué fuentes exactas son
esos dos registros es la siguiente iteración.

---

## 9. Dirección fotográfica

**Sujeto.** Personas reales, momentos naturales, personas con
personalidad propia — nunca modelos de campaña tradicional.

**Encuadre.** Importancia a los detalles: prenda, manos, espaldas,
fragmentos — sin mostrar siempre el rostro completo.

**Luz.** Estudio limpio, o luz nocturna.

**Sensación.** Reflexión, nostalgia, intimidad — debe parecer la
captura de una historia personal, no una foto de producto.

**PENDIENTE DE DEFINIR:** especificaciones técnicas exactas (formato,
proporciones, tratamiento de color vs. blanco y negro, edición). La
guía de fotografía de producto operativa completa sigue siendo objeto
de la Fase 6 (`WEB_HANDOFF.md` §11, `INDEX.md` roadmap), no de este
documento.

**Síntesis:** cualquier fotografía de Butay debe poder confundirse con
una página de un diario visual, nunca con un catálogo de producto
convencional.

---

## 10. Dirección artística y elementos gráficos

**Conceptos.** Diario personal, playlist, fragmentos emocionales,
cartas — la marca debe sentirse como una recopilación de pensamientos,
emociones y momentos.

**Principio rector.** Cualquier elemento visual debe tener significado
— nunca decoración sin propósito. Coherente con el rechazo al "adorno"
ya fijado (Brand Bible §16).

**PENDIENTE DE DEFINIR:** elementos gráficos concretos (texturas,
patrones, iconografía propia, ilustración) — no se proponen en este
documento.

**Síntesis:** antes de añadir cualquier elemento gráfico, la pregunta
es si tiene un significado rastreable a uno de estos conceptos — si no,
no se añade, por bonito que sea.

---

## 11. Aplicación visual del mensaje en la prenda

Los tres niveles de visibilidad del mensaje ya están fijados y no se
tocan aquí (protagonista / discreto / oculto — Product Strategy §3,
§13.1; prohibido inventar un cuarto nivel). La entrevista de identidad
visual confirma que, en la mayoría de piezas, el nivel predominante es
**discreto** — no que sea el único nivel disponible, sino la tendencia
general de la colección.

**Técnicas de aplicación imaginadas:** serigrafía, relieve, bordado —
mezcladas según la pieza, no una técnica única para todo el catálogo.
La fabricación debe sentirse cuidada y con intención.

**PENDIENTE DE DEFINIR:** qué técnica corresponde a qué nivel de
visibilidad o a qué tipo de prenda — no se resuelve en este documento.

*Nota de alcance — no es contenido de este documento:* la filosofía de
fit y silueta (oversize como línea principal, regular fit como
alternativa, unisex) fue respondida en la misma entrevista, pero es
información de **producto**, no de sistema visual. Se traslada como
actualización pendiente a `03_PRODUCTO_product_strategy.md` (§4), no se
duplica aquí.

**Síntesis:** el nivel discreto es la tendencia predominante, no una
regla absoluta; la técnica de aplicación se decide pieza a pieza, con
intención, nunca por defecto.

---

## 12. Packaging

**Sensación buscada:** *"parece un regalo, incluso aunque yo lo haya
comprado."* Personal, especial, íntimo — coherente con el packaging
íntimo ya fijado en Product Strategy (§9, §13.1: "nota personal, no
publicidad de marca dentro de la caja").

**Referencias:** libro, carta.

**Elemento diferencial:** una nota distinta en cada pedido.

El packaging debe reforzar que Butay no vende solamente una prenda,
sino una experiencia emocional.

**PENDIENTE DE DEFINIR:** materiales concretos, formato exacto, proceso
de producción de las notas personalizadas — decisiones operativas que
corresponden a una iteración posterior y, en parte, a la Fase 5
(Operaciones).

**Síntesis:** cualquier packaging final se evalúa por si genera la
sensación de regalo personal — el material y formato exactos son la
siguiente iteración.

---

## 13. Experiencia visual de la web

**Dirección.** Editorial, galería de arte, librería, comunidad — nunca
tienda tradicional. En palabras del fundador: *"esta no parece una
tienda de ropa, parece una librería."*

**Debe incluir sensación de:** historias, contexto, narrativa, emoción
— invita a explorar, descubrir y conectar, no solo a comprar.

**Evitar.** Catálogo denso sin narrativa, diseño saturado, cualquier
cosa que se sienta como "tienda enfocada solo en vender."

*Nota de alcance:* este apartado define dirección visual y de
sensación — no sustituye a `FRONTEND_ARCHITECTURE.md` (estructura
técnica) ni implica ninguna funcionalidad nueva; la arquitectura de
información y las páginas concretas siguen siendo objeto de la Fase 6.

**PENDIENTE DE DEFINIR:** composición visual exacta (fotografía a
pantalla completa vs. composiciones editoriales), densidad de catálogo,
referencias visuales de otras webs — no se dieron referencias concretas
en la entrevista.

**Síntesis:** la web se diseña para que se sienta como una librería que
invita a curiosear, no como un catálogo de e-commerce — la ejecución
visual exacta es la siguiente iteración.

---

## 14. Lo que Butay nunca debe parecer visualmente

Nunca debe parecer:

- Una marca rica.
- Una marca visualmente saturada o excesivamente diseñada.
- Una marca enfocada únicamente en vender, sin propósito detrás.

Debe evitar transmitir: ostentación, marketing vacío, una búsqueda de
dinero por encima del significado — coherente y reforzando, sin
excepción, el principio no negociable ya fijado como permanente en el
Brand Bible (§15): la intimidad del mensaje prevalece sobre crecimiento
o margen.

**Síntesis:** ante cualquier duda sobre una pieza visual, la pregunta
que decide es la misma que ya rige toda la marca — ¿esto amplía la
conexión íntima con quien lo ve, o la sacrifica por impacto o venta? Si
es lo segundo, no se aprueba.

---

## 15. Evolución del Design System: lo permanente y lo flexible

**Permanente e innegociable** (hereda directamente lo ya fijado como
permanente en el Brand Bible §15 — este documento no añade nuevos
elementos permanentes, solo los traduce a lo visual):

- El mensaje siempre por encima del adorno visual.
- La ausencia de ostentación y de lenguaje visual de estatus o lujo.
- El logo nunca por encima del mensaje ni de la prenda.
- La regla de los tres niveles de visibilidad del mensaje (protagonista
  / discreto / oculto) — nunca un cuarto nivel.

**Flexible — puede evolucionar sin perder identidad:**

- Los valores exactos de color, tipografía y fotografía, una vez
  decididos — pueden refinarse con el tiempo sin romper la dirección
  aquí fijada.
- La forma final del logo (símbolo, monograma, referencia cultural) —
  todavía no decidida.
- Los elementos gráficos y conceptos de dirección artística concretos —
  el territorio conceptual (diario, playlist, cartas) es la base, no
  cada aplicación específica.
- La ejecución visual exacta de la web — el tono editorial es fijo, el
  diseño concreto no.

**La prueba para cualquier cambio futuro** es la misma que en el Brand
Bible y Product Strategy: ¿esto amplía la conexión emocional con quien
lo ve, o la diluye para ganar impacto visual o velocidad? Si la diluye,
no se aprueba.

**Síntesis:** lo permanente de este documento es, en realidad, lo ya
permanente del Brand Bible traducido a lo visual — nada nuevo se
declara innegociable aquí. Todo lo específicamente visual (color,
tipografía, forma del logo) es, por definición, la parte flexible y
todavía sin decidir.

---

## 16. Puentes hacia fases futuras

### 16.1 Puente hacia la Fase 6 (Digital / Web)

Este documento fija dirección, no implementación. La Fase 6 debe
heredar:

- La experiencia visual editorial/librería del apartado 13.
- La dirección fotográfica del apartado 9, traducida a especificaciones
  técnicas reales.
- Los tres niveles de visibilidad del mensaje aplicados a la interfaz.

Los valores concretos (color, tipografía, logo) deben quedar resueltos
**antes** de que la Fase 6 los implemente — `FRONTEND_ARCHITECTURE.md`
ya deja los tokens actuales marcados explícitamente como provisionales
para este propósito.

### 16.2 Puente hacia Product Strategy

La respuesta de fit y silueta recogida en la entrevista de identidad
visual (oversize como línea principal, regular fit como alternativa,
unisex) resuelve el `PENDIENTE DE DEFINIR` de fit/silueta/tallaje que
Product Strategy (§4) tenía abierto. Esta información pertenece
formalmente a Product Strategy, no a este documento — su traslado a
`03_PRODUCTO_product_strategy.md` (v1.1 → v1.2) es una actualización
pendiente y separada de esta redacción.

**Síntesis:** ninguna implementación técnica ni de producto debe
adelantarse a este documento — pero tampoco debe esperar más de lo
necesario: lo que aquí ya tiene dirección clara puede empezar a
heredarse; lo marcado `PENDIENTE DE DEFINIR` no.

---

## 17. Bloque de cierre estándar

**Dependencias** (documentos que este Design System usa como
referencia):
- Brand Bible — Butay (v1.1)
- Product Strategy — Butay (v1.1)
- FRONTEND_ARCHITECTURE.md (v1.0)
- DECISIONS.md (Decisión 027, y por herencia las decisiones 005, 006,
  009-021, 025, 026)
- GLOSSARY.md
- 00_SYSTEM_WORKFLOW.md (v1.0, Approved)

**Documentos derivados** (documentos futuros que deberán referenciar
este Design System como fuente):
- Iteración posterior de este mismo documento (valores concretos:
  color, tipografía, forma del logo).
- Fase 6 — Digital / Web: hereda los apartados 9, 11, 13 y 16.1.
- `03_PRODUCTO_product_strategy.md` (actualización pendiente, v1.1 →
  v1.2): hereda el apartado 16.2 (fit y silueta).
- `FRONTEND_ARCHITECTURE.md`: sustituirá sus tokens provisionales
  (§13-15) cuando este documento resuelva sus propios `PENDIENTE DE
  DEFINIR`.

**Decisiones relacionadas:** 027 (ver DECISIONS.md).

**Estado del documento:** `En borrador` (v0.1) — pendiente de
autoauditoría (Etapa 6) y aprobación explícita del fundador (Etapa 8).
No debe citarse todavía como fuente definitiva por ningún otro
documento.

**Próxima fase recomendada:** ninguna fase nueva se abre con este
documento. El siguiente paso es una iteración de este mismo documento
para resolver los puntos marcados `PENDIENTE DE DEFINIR` (símbolo del
logo, monograma, referencia cultural, valores exactos de color/
tipografía/fotografía) — o su aprobación tal cual, si el fundador
considera que esos vacíos pueden quedar abiertos por ahora.
