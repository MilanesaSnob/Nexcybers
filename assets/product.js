/* ============================================================
   PRODUCT — Nexcybers Training
   All page copy (EN/ES) + renderers for the restructured page
   ============================================================ */
(function () {

  /* ---------------- scalar copy ---------------- */
  const T = {
    es: {
      hero_eyebrow: "Plataforma Nexcybers Training",
      hero_h1: "Formación especializada que se mide, se mantiene vigente y <span class=\"h1-accent\">se puede verificar.</span>",
      hero_lead: "Tu equipo ya sabe no hacer clic en un correo sospechoso. La pregunta que llega después es otra: quién en tu organización comprende la norma que le aplica y puede responder por ella. Formamos a esas personas con programas construidos sobre el documento oficial de cada marco, y dejamos el registro que lo acredita.",
      hero_cta1: "Agendar una sesión",
      hero_cta2: "Ver los programas",

      s1_eyebrow: "El punto de partida",
      s1_h2: "Todo el mundo forma en lo mismo.<br>La pregunta difícil está en otra parte.",
      s1_lead: "El mercado de la formación en ciberseguridad enseña, con pocas variaciones, el mismo temario: reconocer un correo de phishing, elegir contraseñas, trabajar en remoto sin exponer la red. Es formación necesaria y conviene tenerla. Pero la norma pide dos cosas que ese temario no cubre: que la capacitación alcance a todo el personal como medida de gestión de riesgos, y que quienes dirigen la organización comprendan el marco lo suficiente para aprobarlo y supervisarlo.",

      s2_eyebrow: "Especializada",
      s2_h2: "Programas construidos sobre el documento oficial,<br>no sobre un temario genérico.",
      s2_lead: "No adaptamos un temario general a la norma de turno. Recorremos la norma en su propio orden, con su propia terminología, hasta el nivel de detalle que necesita alguien que va a tener que explicarla. Cada módulo declara las referencias normativas en las que se apoya.",

      s3_h3: "Cada programa tiene una base común y una edición por responsabilidad",
      s3_p1: "No todo el mundo necesita lo mismo, y la norma tampoco lo pide. El Programa de Cumplimiento NIS2 se estructura en dos ediciones: los módulos 1 a 6 son la base obligatoria para todo el personal, y el módulo 7 se suma para consejeros, alta dirección y mandos con responsabilidad ejecutiva. Cada edición emite su propio certificado.",
      s3_p2: "El programa de IA sigue la misma lógica sobre cuatro niveles: alfabetización general, decisiones de gestión, gobernanza y cumplimiento, y riesgo técnico. La base se desarrolla una vez y cada rol profundiza en lo que le corresponde, sin repetir contenido.",
      ed_head: "Programa de Cumplimiento NIS2",

      s4_h3: "Un programa, no una cápsula suelta",
      s4_p1: "Cada programa se organiza en secciones con estado de avance propio y combina vídeo con subtítulos, PDF navegable como presentación, texto y evaluación. El colaborador ve qué le queda, cuándo vence y puede retomar donde lo dejó.",
      s4_p2: "El progreso se calcula sobre el contenido vigente del curso, de modo que el porcentaje refleja siempre la versión actual y no la del día en que se asignó.",
      figA_head: "Módulo 3 · Gestión de riesgos",
      figA_pct: "64 % completado",

      s5_eyebrow: "A medida",
      s5_h2: "El catálogo cubre los marcos.<br>El resto lo desarrollamos nosotros.",
      s5_p1: "No todo lo que una organización necesita acreditar está en un marco publicado. Procedimientos internos, políticas propias, formación de incorporación, requisitos concretos de un cliente: nos envías el material o partimos de tu documentación, y publicamos el curso en el espacio de tu organización con la misma estructura de secciones, evaluaciones, vigencia y certificado que el resto del catálogo.",
      s5_p2: "El desarrollo lo hace nuestro equipo, no se carga por autoservicio. Eso significa que el resultado se parece a los programas del catálogo y no a una presentación reconvertida en curso.",
      s5_kicker: "Sobre esta capa se apoya el alcance real",
      s5_p3: "Los programas del catálogo ya distinguen una base para todo el personal de una edición para quienes responden por el marco. El contenido a medida alcanza a quien tu organización decida, incluido todo el personal.",
      s5_p4: "La plataforma es la misma para ambos: asignación por grupo, fechas límite, vigencia, evaluaciones, indicadores y certificados funcionan igual con un curso del catálogo que con uno desarrollado para ti.",

      s6_eyebrow: "Se mide",
      s6_h2: "Cinco preguntas, cinco cifras.",
      s6_lead: "La plataforma no informa de cuántos vídeos se reprodujeron. Informa del estado de tu programa formativo, con una definición estable que se calcula igual en pantalla que en el archivo exportado.",
      s6_h3: "Una unidad de medida, no un porcentaje de consumo",
      s6_p1: "Cada combinación de colaborador y curso asignado constituye una unidad. El Compliance Score expresa la proporción de esas unidades que se encuentran cumplidas y vigentes. Una finalización expirada deja de computar, que es precisamente la función del período de vigencia.",
      s6_p2: "El cumplimiento se desglosa por grupo, de modo que la cobertura de la dirección, de IT o de un área concreta se consulta como un dato independiente.",
      figC_head: "Reporte de cumplimiento",
      figC_meta: "32 asignaciones",

      s7_eyebrow: "Se mantiene vigente",
      s7_h2: "Un programa continuo,<br>no una campaña anual.",
      s7_p1: "Defines la vigencia de cada curso en meses. Cumplido el plazo, la finalización deja de computar, el colaborador pasa al estado «A recertificar» y vuelve a aparecer en los reportes con los recordatorios del nuevo ciclo. El historial del ciclo anterior se conserva.",
      s7_p2: "Las nuevas incorporaciones heredan las asignaciones y las fechas límite de su grupo, sin que nadie tenga que asignar curso por curso. Los recordatorios salen de forma automática antes del vencimiento y después, cada uno en el idioma del destinatario.",
      s7_p3: "Es la diferencia entre un dato de consumo y un dato de estado. Un porcentaje de finalización responde qué se hizo alguna vez; el indicador de vigencia responde qué está al día hoy, que es la única de las dos cifras que sigue significando algo un año después.",
      figD_n: "12",
      figD_l: "Meses de vigencia",
      figD_flash: "A recertificar",
      st_head: "Estado en el reporte",

      s8_eyebrow: "Se puede verificar",
      s8_h2: "La parte del expediente que viaja<br>fuera de tu organización.",
      s8_p1: "Cada finalización emite un certificado con un código que un cliente, un auditor o un responsable de compras comprueba desde una página pública, sin cuenta y sin intermediarios. La verificación confirma que el registro fue emitido por Nexcybers y muestra su estado actual, sobre los datos conservados al momento de la emisión.",
      s8_p2: "Donde más se nota es en el cuestionario de proveedor. Si tu cliente está alcanzado por NIS2 o trabaja para una administración bajo el ENS, es probable que sus requisitos de formación te lleguen por vía contractual o a través del pliego de una licitación pública. La respuesta útil no es una declaración firmada: es el reporte exportado y los códigos correspondientes.",
      s8_src: "La verificación acredita la autenticidad y el estado del registro. No constituye una certificación de conformidad normativa ni una acreditación de competencia profesional.",
      figE_head: "Certificado de finalización",
      figE_lbl: "Código",
      figE_ok: "Registro verificado · Vigente",

      s9_eyebrow: "Comparativa",
      s9_h2: "En qué nos parecemos<br>y en qué no.",
      s9_lead: "Si tu organización ya tiene un programa de concienciación, Nexcybers Training no lo reemplaza. Resuelven necesidades distintas y funcionan bien en paralelo.",
      s9_us: "Nexcybers Training",
      s9_them: "Plataforma de concienciación",
      s9_note: "Muchas organizaciones necesitan las dos cosas. Nosotros cubrimos la formación que la concienciación no alcanza.",

      s10_eyebrow: "Puesta en marcha",
      s10_h2: "Qué esfuerzo requiere de tu equipo.",

      faq_eyebrow: "Preguntas frecuentes",
      faq_h2: "Lo que suelen preguntarnos.",

      band_eyebrow: "Nexcybers Training",
      band_h2: "Comencemos por comprender tu situación actual.",
      band_p: "Te mostramos la plataforma con datos de ejemplo, revisamos qué obligaciones de capacitación alcanzan a tu organización e identificamos qué programa cubre lo que necesitas acreditar.",
      band_cta: "Agendar una sesión",

      legal: "Esta página describe requisitos normativos a partir de fuentes públicas y de nuestro propio conocimiento del producto. Las obligaciones aplicables varían según la organización, el sector y el estado de transposición de cada norma. Para orientación sobre tu situación concreta, consulta con asesoramiento jurídico. Si detectas alguna imprecisión, escríbenos y la corregimos."
    },

    en: {
      hero_eyebrow: "Nexcybers Training platform",
      hero_h1: "Specialized training that is measured, kept current and <span class=\"h1-accent\">can be verified.</span>",
      hero_lead: "Your team already knows not to click a suspicious email. The question that comes next is a different one: who in your organization understands the regulation that applies to them and can answer for it. We train those people with programs built on each framework's official document, and we leave behind the record that proves it.",
      hero_cta1: "Book a session",
      hero_cta2: "See the programs",

      s1_eyebrow: "The starting point",
      s1_h2: "Everyone trains on the same thing.<br>The hard question lies elsewhere.",
      s1_lead: "The cybersecurity training market teaches, with little variation, the same syllabus: spotting a phishing email, choosing passwords, working remotely without exposing the network. That training is necessary and worth having. But regulation asks for two things the syllabus does not cover: that training reach all staff as a risk-management measure, and that the people running the organization understand the framework well enough to approve and oversee it.",

      s2_eyebrow: "Specialized",
      s2_h2: "Programs built on the official document,<br>not on a generic syllabus.",
      s2_lead: "We do not adapt a general syllabus to whichever regulation is at hand. We walk through the regulation in its own order, in its own terminology, down to the level of detail someone needs if they will have to explain it. Every module states the regulatory references it rests on.",

      s3_h3: "Every program has a common baseline and an edition by responsibility",
      s3_p1: "Not everyone needs the same thing, and regulation does not ask for that either. The NIS2 Compliance Program is structured in two editions: modules 1 to 6 are the mandatory baseline for all staff, and module 7 is added for board members, senior management and managers with executive responsibility. Each edition issues its own certificate.",
      s3_p2: "The AI program follows the same logic across four levels: general literacy, management decisions, governance and compliance, and technical risk. The baseline is covered once and each role goes deeper into what concerns them, without repeating content.",
      ed_head: "NIS2 Compliance Program",

      s4_h3: "A program, not a standalone capsule",
      s4_p1: "Each program is organized into sections with their own progress state, and combines subtitled video, a navigable PDF presentation, text and assessment. Employees see what is left, when it expires, and can pick up where they left off.",
      s4_p2: "Progress is calculated against the course's current content, so the percentage always reflects the present version rather than the one in force the day it was assigned.",
      figA_head: "Module 3 · Risk management",
      figA_pct: "64% complete",

      s5_eyebrow: "Custom-built",
      s5_h2: "The catalog covers the frameworks.<br>We develop the rest.",
      s5_p1: "Not everything an organization needs to evidence lives in a published framework. Internal procedures, your own policies, onboarding training, a specific client requirement: you send us the material or we start from your documentation, and we publish the course in your organization's space with the same structure of sections, assessments, validity period and certificate as the rest of the catalog.",
      s5_p2: "Development is done by our team, not uploaded self-service. That means the result looks like the catalog programs and not like a slide deck converted into a course.",
      s5_kicker: "Real coverage rests on this layer",
      s5_p3: "The catalog programs already separate a baseline for all staff from an edition for those who answer for the framework. Custom content reaches whoever your organization decides, all staff included.",
      s5_p4: "The platform is the same for both: group assignment, deadlines, validity, assessments, indicators and certificates work identically for a catalog course and for one developed for you.",

      s6_eyebrow: "Measured",
      s6_h2: "Five questions, five figures.",
      s6_lead: "The platform does not report how many videos were played. It reports the state of your training program, with a stable definition calculated the same way on screen as in the exported file.",
      s6_h3: "A unit of measure, not a consumption percentage",
      s6_p1: "Each combination of employee and assigned course constitutes one unit. The Compliance Score expresses the proportion of those units that are completed and current. An expired completion stops counting, which is precisely what the validity period is for.",
      s6_p2: "Compliance breaks down by group, so coverage for the board, for IT or for a specific area can be read as an independent figure.",
      figC_head: "Compliance report",
      figC_meta: "32 assignments",

      s7_eyebrow: "Kept current",
      s7_h2: "A continuous program,<br>not an annual campaign.",
      s7_p1: "You set each course's validity in months. Once the term is up, the completion stops counting, the employee moves to \"To recertify\" and reappears in the reports with the reminders of the new cycle. The previous cycle's history is preserved.",
      s7_p2: "New joiners inherit their group's assignments and deadlines, without anyone assigning course by course. Reminders go out automatically before expiry and after it, each in the recipient's language.",
      s7_p3: "It is the difference between a consumption figure and a state figure. A completion percentage answers what was done at some point; the validity indicator answers what is current today, which is the only one of the two that still means something a year later.",
      figD_n: "12",
      figD_l: "Months of validity",
      figD_flash: "To recertify",
      st_head: "Status in the report",

      s8_eyebrow: "Verifiable",
      s8_h2: "The part of the record that travels<br>outside your organization.",
      s8_p1: "Each completion issues a certificate with a code that a client, an auditor or a procurement officer checks from a public page, with no account and no intermediaries. Verification confirms the record was issued by Nexcybers and shows its current state, based on the data retained at the time of issue.",
      s8_p2: "Where it shows most is the vendor questionnaire. If your client falls under NIS2 or works for a public administration under the ENS, their training requirements will likely reach you contractually or through the terms of a public tender. The useful answer is not a signed statement: it is the exported report and the corresponding codes.",
      s8_src: "Verification evidences the authenticity and state of the record. It does not constitute a certification of regulatory conformity nor an accreditation of professional competence.",
      figE_head: "Certificate of completion",
      figE_lbl: "Code",
      figE_ok: "Record verified · Current",

      s9_eyebrow: "Comparison",
      s9_h2: "Where we are alike<br>and where we are not.",
      s9_lead: "If your organization already runs an awareness program, Nexcybers Training does not replace it. They solve different needs and work well in parallel.",
      s9_us: "Nexcybers Training",
      s9_them: "Awareness platform",
      s9_note: "Many organizations need both. We cover the training awareness does not reach.",

      s10_eyebrow: "Rollout",
      s10_h2: "What it asks of your team.",

      faq_eyebrow: "Frequently asked",
      faq_h2: "What people usually ask us.",

      band_eyebrow: "Nexcybers Training",
      band_h2: "Let's start by understanding where you stand today.",
      band_p: "We show you the platform with sample data, review which training obligations reach your organization, and identify which program covers what you need to evidence.",
      band_cta: "Book a session",

      legal: "This page describes regulatory requirements based on public sources and on our own knowledge of the product. Applicable obligations vary by organization, sector and the transposition status of each regulation. For guidance on your specific situation, seek legal advice. If you spot an inaccuracy, write to us and we will correct it."
    }
  };

  /* ---------------- repeated blocks ---------------- */
  const RULES = [
    { es: { t: "Quién tiene que formarse", p: ["NIS2 lo plantea en dos niveles. El artículo 20.2 exige que los miembros del órgano de dirección reciban formación, para que puedan identificar riesgos y valorar las prácticas de gestión de riesgos de ciberseguridad. Y el artículo 21.2.g incluye las prácticas básicas de ciberhigiene y la formación en ciberseguridad entre las medidas mínimas que la entidad debe implantar, lo que extiende la capacitación al conjunto del personal."], s: "Directiva (UE) 2022/2555, artículos 20.2 y 21.2.g." },
      en: { t: "Who has to be trained", p: ["NIS2 frames it on two levels. Article 20.2 requires management bodies to receive training so they can identify risks and assess cybersecurity risk-management practices. Article 21.2.g includes basic cyber hygiene practices and cybersecurity training among the minimum measures an entity must implement, which extends training to all staff."], s: "Directive (EU) 2022/2555, articles 20.2 and 21.2.g." } },
    { es: { t: "Con qué profundidad, según el rol", p: ["El Esquema Nacional de Seguridad obliga a formar al personal en las materias de seguridad necesarias para el desempeño de sus funciones, y a evaluar la eficacia de las acciones formativas. La proporcionalidad por función implica que no toda la organización necesita lo mismo."], s: "Real Decreto 311/2022, Anexo II, medidas mp.per.3 y mp.per.4." },
      en: { t: "At what depth, by role", p: ["Spain's National Security Framework requires staff to be trained in the security matters needed to perform their duties, and the effectiveness of that training to be assessed. Proportionality by function means not everyone in the organization needs the same thing."], s: "Royal Decree 311/2022, Annex II, measures mp.per.3 and mp.per.4." } },
    { es: { t: "Con qué se acredita, un año después", p: ["La formación caduca antes que el expediente. Un curso completado en 2023 sigue figurando como realizado, pero un programa continuo exige repetición y una fecha de referencia que siga significando algo cuando alguien la consulte."], s: "Reglamento de Ejecución (UE) 2024/2690, para las entidades digitales comprendidas en su ámbito." },
      en: { t: "What evidences it a year later", p: ["Training expires before the record does. A course completed in 2023 still shows as done, but a continuous program requires repetition and a reference date that still means something when someone looks it up."], s: "Implementing Regulation (EU) 2024/2690, for the digital entities within its scope." } }
  ];

  const PROGRAMS = [
    { es: { tag: "Directiva (UE) 2022/2555", t: "Programa de Cumplimiento NIS2", d: "Siete módulos que recorren la Directiva desde su ámbito de aplicación y las diez medidas de gestión de riesgos hasta la ciberhigiene, la notificación de incidentes y la responsabilidad del órgano de dirección. Cada módulo cita los artículos en los que se apoya, junto con el Reglamento de Ejecución 2024/2690 y las guías técnicas de ENISA.", f: "7 módulos · 47 vídeos · 9 h 41 min · 7 cuestionarios · 80 % para aprobar" },
      en: { tag: "Directive (EU) 2022/2555", t: "NIS2 Compliance Program", d: "Seven modules covering the Directive from its scope of application and the ten risk-management measures through to cyber hygiene, incident notification and the responsibility of the management body. Each module cites the articles it rests on, alongside Implementing Regulation 2024/2690 and ENISA's technical guidance.", f: "7 modules · 47 videos · 9 h 41 min · 7 quizzes · 80% to pass" } },
    { es: { tag: "Marco voluntario del NIST", t: "NIST CSF 2.0: Fundamentos e Implementación", d: "Doce secciones que siguen el orden del documento oficial: los fundamentos, los datos y el riesgo, los tres componentes del marco —Núcleo, Perfiles y Niveles— y una sección por cada una de las seis funciones: Gobernar, Identificar, Proteger, Detectar, Responder y Recuperar. Cierra aplicando Perfil Actual, Perfil Objetivo y análisis de brechas sobre un caso real.", f: "32 vídeos · 12 secciones · 4 h 7 min · Sin requisitos técnicos previos" },
      en: { tag: "NIST voluntary framework", t: "NIST CSF 2.0: Fundamentals and Implementation", d: "Twelve sections following the order of the official document: the fundamentals, data and risk, the framework's three components — Core, Profiles and Tiers — and one section for each of the six functions: Govern, Identify, Protect, Detect, Respond and Recover. It closes by applying Current Profile, Target Profile and gap analysis to a real case.", f: "32 videos · 12 sections · 4 h 7 min · No technical prerequisites" } },
    { es: { tag: "Reglamento (UE) 2024/1689", t: "IA Responsable para Empresas", d: "Programa de alfabetización en inteligencia artificial orientado a las medidas del artículo 4 del Reglamento Europeo de IA. El Nivel 1 recorre qué es un sistema de IA y cómo funciona la IA generativa, sus límites y riesgos, el uso seguro de información y la supervisión humana, y los fundamentos del Reglamento que necesita conocer cualquier usuario.", f: "Nivel 1 · 4 secciones · Vídeos de 6 a 12 min · 2,5 a 3,5 h" },
      en: { tag: "Regulation (EU) 2024/1689", t: "Responsible AI for Companies", d: "An AI literacy program aimed at the measures in article 4 of the EU AI Act. Level 1 covers what an AI system is and how generative AI works, its limits and risks, safe handling of information and human oversight, and the fundamentals of the Regulation any user needs to know.", f: "Level 1 · 4 sections · 6 to 12 min videos · 2.5 to 3.5 h" } }
  ];

  const EDITIONS = [
    { es: { t: "Edición Empleados · módulos 1–6", d: "Todo el personal, con independencia de su rol o nivel jerárquico. 7 h 48 min." },
      en: { t: "Employee edition · modules 1–6", d: "All staff, regardless of role or seniority. 7 h 48 min." } },
    { es: { t: "Edición Directivos · módulos 1–7", d: "Suma el módulo de gobernanza y responsabilidad ejecutiva. 9 h 41 min." },
      en: { t: "Management edition · modules 1–7", d: "Adds the governance and executive responsibility module. 9 h 41 min." } },
    { es: { t: "Certificado por edición", d: "Nominal, con código de verificación individual." },
      en: { t: "A certificate per edition", d: "Named, with an individual verification code." } }
  ];

  const METRICS = [
    { n: "88 %", cls: "accent", es: { k: "Compliance Score", d: "28 de 32 asignaciones completadas" }, en: { k: "Compliance Score", d: "28 of 32 assignments completed" } },
    { n: "87 %", cls: "", es: { k: "Colaboradores capacitados", d: "27 de 31 totalmente al día" }, en: { k: "Employees trained", d: "27 of 31 fully up to date" } },
    { n: "99 %", cls: "", es: { k: "Tasa de aprobación", d: "252 de 253 evaluaciones aprobadas" }, en: { k: "Pass rate", d: "252 of 253 assessments passed" } },
    { n: "4", cls: "warn", es: { k: "Con pendientes", d: "Al menos un curso sin completar" }, en: { k: "With items pending", d: "At least one course not completed" } },
    { n: "5", cls: "", es: { k: "Próximas a vencer", d: "En los próximos tres meses" }, en: { k: "Expiring soon", d: "Within the next three months" } }
  ];

  const STATUSES = [
    { cls: "ok", es: { p: "Completado", d: "1 ago 2026 · válido hasta 1 feb 2027" }, en: { p: "Completed", d: "1 Aug 2026 · valid until 1 Feb 2027" } },
    { cls: "", es: { p: "En curso", d: "vence 25 jul 2026", warn: true }, en: { p: "In progress", d: "due 25 Jul 2026", warn: true } },
    { cls: "", es: { p: "Sin iniciar", d: "vence 13 ago 2026" }, en: { p: "Not started", d: "due 13 Aug 2026" } }
  ];

  const CMP = [
    { es: { k: "Temario", us: "Catálogo normativo especializado, más cursos desarrollados a medida", them: "Biblioteca cerrada, idéntica para todos los clientes" },
      en: { k: "Syllabus", us: "Specialized regulatory catalog, plus courses developed to order", them: "Closed library, identical for every client" } },
    { es: { k: "Destinatario", us: "Desde el órgano de dirección hasta todo el personal, según el programa", them: "Todo el personal" },
      en: { k: "Audience", us: "From the management body to all staff, depending on the program", them: "All staff" } },
    { es: { k: "Evaluación", us: "Práctica y examen, con resultado registrado por persona", them: "Cuestionario breve por módulo" },
      en: { k: "Assessment", us: "Practice and exam, with a result recorded per person", them: "Short quiz per module" } },
    { es: { k: "Estructura por audiencia", us: "Base común para todo el personal y edición para el órgano de dirección, con certificado propio", them: "Contenido único para toda la organización" },
      en: { k: "Structure by audience", us: "Common baseline for all staff and an edition for the management body, each with its own certificate", them: "A single body of content for the whole organization" } },
    { es: { k: "Referencias normativas", us: "Declaradas módulo a módulo", them: "Generales, a nivel de catálogo" },
      en: { k: "Regulatory references", us: "Declared module by module", them: "General, at catalog level" } },
    { es: { k: "Vigencia y recertificación", us: "Definida en meses por curso, con estado propio en el reporte", them: "No incluido" },
      en: { k: "Validity and recertification", us: "Set in months per course, with its own status in the report", them: "Not included" } }
  ];

  const STEPS = [
    { es: { w: "Semana 1", t: "Diagnóstico", d: "Revisamos qué obligaciones de capacitación alcanzan a tu organización y qué programa cubre lo que necesitas acreditar. Es una conversación, no un formulario." },
      en: { w: "Week 1", t: "Assessment", d: "We review which training obligations reach your organization and which program covers what you need to evidence. It is a conversation, not a form." } },
    { es: { w: "Semana 2", t: "Puesta en marcha", d: "Invitación del equipo por correo, creación de grupos y asignación de los programas con sus fechas límite y su vigencia. Sin instalación ni hardware." },
      en: { w: "Week 2", t: "Rollout", d: "Team invitations by email, group creation and program assignment with their deadlines and validity. No installation, no hardware." } },
    { es: { w: "Semana 3", t: "Primer reporte", d: "Cobertura real por grupo, primeras finalizaciones con su certificado y el archivo exportado listo para incorporarse a un expediente o responder un cuestionario de proveedor." },
      en: { w: "Week 3", t: "First report", d: "Real coverage by group, the first completions with their certificate, and the exported file ready to go into a record or answer a vendor questionnaire." } }
  ];

  const FAQ = [
    { es: { q: "¿Sustituye a nuestra plataforma de concienciación?", a: "No. La concienciación busca modificar la conducta cotidiana de todo el personal con contenidos breves y simulaciones. Nosotros formamos en el marco normativo a quienes tienen responsabilidad sobre él, y desarrollamos a medida lo que necesites para el resto. Muchas organizaciones mantienen ambas." },
      en: { q: "Does it replace our awareness platform?", a: "No. Awareness aims to change the everyday behavior of all staff with short content and simulations. We train on the regulatory framework the people who are responsible for it, and develop custom content for the rest. Many organizations keep both." } },
    { es: { q: "¿Podemos incorporar nuestros propios cursos?", a: "Sí. Actualmente la carga la realiza el equipo de Nexcybers: nos envías el material y lo publicamos en tu espacio con la misma estructura de secciones, evaluaciones y certificado." },
      en: { q: "Can we add our own courses?", a: "Yes. Uploading is currently done by the Nexcybers team: you send us the material and we publish it in your space with the same structure of sections, assessments and certificate." } },
    { es: { q: "¿Qué ocurre cuando se incorpora una persona nueva?", a: "La invitas por correo y la agregas al grupo correspondiente. Recibe automáticamente las asignaciones y fechas límite de ese grupo, sin necesidad de asignar curso por curso." },
      en: { q: "What happens when someone new joins?", a: "You invite them by email and add them to the relevant group. They automatically receive that group's assignments and deadlines, with no need to assign course by course." } },
    { es: { q: "¿Cómo se gestiona la formación que caduca?", a: "Cada curso puede tener una vigencia expresada en meses. Cumplido el plazo, el colaborador pasa al estado «A recertificar», vuelve a figurar en los reportes y recibe los recordatorios del nuevo ciclo. El historial anterior se conserva." },
      en: { q: "How is expiring training handled?", a: "Each course can have a validity expressed in months. Once the term is up, the employee moves to \"To recertify\", reappears in the reports and receives the reminders of the new cycle. The previous history is preserved." } },
    { es: { q: "¿El certificado sirve como evidencia ante un tercero?", a: "Acredita qué formación se realizó, a quién se emitió y en qué fecha, y permite comprobar la autenticidad del registro desde una página pública. La valoración de si esa evidencia resulta suficiente para un marco concreto corresponde a la autoridad o al auditor que la solicite." },
      en: { q: "Does the certificate work as evidence for a third party?", a: "It evidences which training was completed, to whom it was issued and on what date, and lets anyone check the authenticity of the record from a public page. Whether that evidence is sufficient for a specific framework is for the authority or auditor requesting it to judge." } },
    { es: { q: "¿En qué idiomas está disponible?", a: "Español e inglés, incluyendo interfaz, contenido de los cursos y notificaciones automáticas. Cada usuario define su idioma y recibe en él toda la comunicación." },
      en: { q: "Which languages is it available in?", a: "Spanish and English, covering the interface, course content and automated notifications. Each user sets their language and receives all communication in it." } },
    { es: { q: "¿Existe un límite de usuarios?", a: "No hay límite técnico de usuarios ni de grupos. Escríbenos y definimos el esquema adecuado al tamaño de tu organización." },
      en: { q: "Is there a user limit?", a: "There is no technical limit on users or groups. Write to us and we will define the right scheme for the size of your organization." } }
  ];

  const CHIPS = {
    es: ["NIS2 · NIST CSF 2.0 · IA Responsable", "Español e inglés", "Contenido a medida"],
    en: ["NIS2 · NIST CSF 2.0 · Responsible AI", "Spanish and English", "Custom content"]
  };

  const FIGA = {
    es: [{ l: "Vídeo · Medidas de gestión de riesgos", m: "12 min", i: "play" }, { l: "PDF navegable · Anexo de artículos", m: "8 pág.", i: "doc" }, { l: "Texto · Ciberhigiene aplicada", m: "6 min", i: "text" }, { l: "Evaluación · 10 preguntas", m: "80 %", i: "quiz" }],
    en: [{ l: "Video · Risk-management measures", m: "12 min", i: "play" }, { l: "Navigable PDF · Article annex", m: "8 pp.", i: "doc" }, { l: "Text · Cyber hygiene in practice", m: "6 min", i: "text" }, { l: "Assessment · 10 questions", m: "80%", i: "quiz" }]
  };

  const FIGC = {
    es: { h: ["Colaborador y curso", "Estado", "Vigencia"], rows: [["ok", "Completado", "1 feb 2027"], ["", "En curso", "25 jul 2026"], ["ok", "Completado", "9 mar 2027"], ["warn", "A recertificar", "vencido"], ["", "Sin iniciar", "13 ago 2026"]] },
    en: { h: ["Employee and course", "Status", "Valid to"], rows: [["ok", "Completed", "1 Feb 2027"], ["", "In progress", "25 Jul 2026"], ["ok", "Completed", "9 Mar 2027"], ["warn", "To recertify", "expired"], ["", "Not started", "13 Aug 2026"]] }
  };

  const ICONS = {
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/></svg>',
    text: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
    quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3 6-6"/><path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h9"/></svg>'
  };


  const TRUST = {
    es: [
      { n: "3 marcos", l: "NIS2, NIST CSF 2.0 e IA Responsable" },
      { n: "ES · EN", l: "Contenido, interfaz y notificaciones" },
      { n: "A medida", l: "Cursos sobre tu propia documentación" }
    ],
    en: [
      { n: "3 frameworks", l: "NIS2, NIST CSF 2.0 and Responsible AI" },
      { n: "ES · EN", l: "Content, interface and notifications" },
      { n: "Custom", l: "Courses built on your own documentation" }
    ]
  };

  const ICO = {
    prog: ["<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3l8 3v6c0 5-3.4 8.2-8 9-4.6-.8-8-4-8-9V6z\"/><path d=\"M9 12l2.2 2.2L15.5 10\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12h4l2.5-6 4 12 2.5-6h5\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"7\" y=\"7\" width=\"10\" height=\"10\" rx=\"2\"/><path d=\"M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2 2M16.5 16.5l2 2M18.5 5.5l-2 2M7.5 16.5l-2 2\"/></svg>"],
    rule: ["<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 20v-1.5a4 4 0 00-4-4H7a4 4 0 00-4 4V20\"/><circle cx=\"9.5\" cy=\"7\" r=\"3.2\"/><path d=\"M17 4.3a3.2 3.2 0 010 6.2M21 20v-1.4a4 4 0 00-3-3.8\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3l8 4.5-8 4.5-8-4.5z\"/><path d=\"M4 12.5L12 17l8-4.5\"/><path d=\"M4 16.8L12 21.3l8-4.5\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M12 7.5V12l3 2\"/></svg>"],
    met: ["<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"/><circle cx=\"12\" cy=\"12\" r=\"3.6\"/><path d=\"M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M16 20v-1.5a4 4 0 00-4-4H7a4 4 0 00-4 4V20\"/><circle cx=\"9.5\" cy=\"7\" r=\"3.2\"/><path d=\"M17 4.3a3.2 3.2 0 010 6.2M21 20v-1.4a4 4 0 00-3-3.8\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M8.4 12.2l2.6 2.6 4.6-5\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 4.5L21 19.5H3z\"/><path d=\"M12 10v4M12 16.6v.2\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M12 7.5V12l3 2\"/></svg>"],
    trust: ["<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3l8 4.5-8 4.5-8-4.5z\"/><path d=\"M4 12.5L12 17l8-4.5\"/><path d=\"M4 16.8L12 21.3l8-4.5\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"8.5\"/><path d=\"M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5S14.4 19.7 12 20.5c-2.4-.8-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5z\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.5 6.5a3.5 3.5 0 104.6 4.6L21 13V6h-7z\"/><path d=\"M13 11L4.6 19.4a2 2 0 102.8 2.8L15 14\"/></svg>"],
    step: ["<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"11\" cy=\"11\" r=\"6.5\"/><path d=\"M16 16l4.5 4.5\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 4.5c3.5-1.5 6 0 6 0s1.5 2.5 0 6c-1.2 2.8-4 5.3-7.5 6.8L9 14.5z\"/><path d=\"M9 14.5L6 17l1 3 2.5-3\"/><circle cx=\"15\" cy=\"9\" r=\"1.4\"/></svg>", "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 20V10M10 20V4M16 20v-7M22 20H2\"/></svg>"]
  };

  /* ---------------- helpers ---------------- */
  function lang() { const l = window.NX_currentLang || localStorage.getItem('nx_lang') || 'en'; return T[l] ? l : 'en'; }
  function set(root, key, val) { root.querySelectorAll(`[data-p="${key}"]`).forEach(el => { el.innerHTML = val; }); }
  function pick(o, l) { return o[l] || o.en || o.es; }

  /* ---------------- hero astrolabe (unchanged behaviour) ---------------- */
  function buildAstrolabe() {
    const C = 100, ns = 'http://www.w3.org/2000/svg';
    const el = (t, a) => { const n = document.createElementNS(ns, t); for (const k in a) n.setAttribute(k, a[k]); return n; };
    const radial = (deg, r1, r2, cls) => {
      const a = (deg - 90) * Math.PI / 180;
      return el('line', { x1: C + r1 * Math.cos(a), y1: C + r1 * Math.sin(a), x2: C + r2 * Math.cos(a), y2: C + r2 * Math.sin(a), class: cls });
    };
    const limb = document.getElementById('astro-limb');
    if (limb && !limb.childNodes.length) {
      for (let d = 0; d < 360; d += 5) limb.appendChild(radial(d, d % 30 === 0 ? 86 : 88.5, 92, d % 30 === 0 ? 'astro-tick major' : 'astro-tick'));
      for (let d = 0; d < 360; d += 30) {
        const a = (d - 90) * Math.PI / 180, r = 80;
        const x = C + r * Math.cos(a), y = C + r * Math.sin(a);
        const rot = (d > 90 && d < 270) ? d + 180 : d;
        const t = el('text', { x: x, y: y, class: 'astro-num', 'text-anchor': 'middle', 'dominant-baseline': 'central', transform: 'rotate(' + rot + ' ' + x.toFixed(2) + ' ' + y.toFixed(2) + ')' });
        t.textContent = d;
        limb.appendChild(t);
      }
    }
    const nums = document.getElementById('astro-numerals');
    if (nums && !nums.childNodes.length) for (let d = 7.5; d < 360; d += 15) nums.appendChild(radial(d, 63, 70, 'astro-tick'));
    const mid = document.getElementById('astro-mid');
    if (mid && !mid.childNodes.length) {
      for (let d = 0; d < 360; d += 15) mid.appendChild(radial(d, d % 45 === 0 ? 50 : 54, 58, d % 45 === 0 ? 'astro-tick major' : 'astro-tick'));
      mid.appendChild(el('circle', { cx: C, cy: C - 58, r: 2.4, class: 'astro-bead' }));
    }
    const rule = document.getElementById('astro-rule');
    if (rule && !rule.childNodes.length) {
      rule.appendChild(el('line', { x1: C, y1: C - 46, x2: C, y2: C + 46, class: 'astro-rule-bar' }));
      rule.appendChild(el('circle', { cx: C, cy: C - 46, r: 3.2, class: 'astro-bead' }));
      rule.appendChild(el('circle', { cx: C, cy: C + 46, r: 3.2, class: 'astro-bead' }));
    }
  }

  /* recertification cycle ticks */
  function buildCycle() {
    const g = document.getElementById('cy-ticks');
    if (!g || g.childNodes.length) return;
    const ns = 'http://www.w3.org/2000/svg';
    for (let i = 0; i < 12; i++) {
      const a = (i * 30 - 90) * Math.PI / 180;
      const l = document.createElementNS(ns, 'line');
      l.setAttribute('x1', (100 + 72 * Math.cos(a)).toFixed(2));
      l.setAttribute('y1', (100 + 72 * Math.sin(a)).toFixed(2));
      l.setAttribute('x2', (100 + 80 * Math.cos(a)).toFixed(2));
      l.setAttribute('y2', (100 + 80 * Math.sin(a)).toFixed(2));
      l.setAttribute('class', i % 3 === 0 ? 'pf-cy-tick on' : 'pf-cy-tick');
      g.appendChild(l);
    }
  }

  /* ---------------- renderers ---------------- */
  function render() {
    const l = lang(), d = T[l];
    Object.keys(d).forEach(k => set(document, k, d[k]));

    const tc = document.getElementById('trust-cards');
    if (tc) tc.innerHTML = TRUST[l].map((s, i) => `<div class="trust-card" data-reveal-dir="${i === 0 ? 'left' : i === 1 ? 'up' : 'right'}"><div class="tc-top"><span class="tc-ico">${ICO.trust[i]}</span><span class="tc-idx">0${i + 1}</span></div><div class="tc-n">${s.n}</div><div class="tc-l">${s.l}</div></div>`).join('');

    const rg = document.getElementById('rule-grid');
    if (rg) rg.innerHTML = RULES.map((r, i) => { const c = pick(r, l); return `<div class="p-card p-rule"><div class="pc-top"><span class="pc-ico">${ICO.rule[i]}</span><span class="pc-idx">0${i + 1}</span></div><h3>${c.t}</h3>${c.p.map(p => `<p>${p}</p>`).join('')}<p class="p-src">${c.s}</p></div>`; }).join('');

    const pg = document.getElementById('prog-grid');
    if (pg) pg.innerHTML = PROGRAMS.map((r, i) => { const c = pick(r, l); return `<article class="p-card p-prog"><div class="pc-top"><span class="pc-ico">${ICO.prog[i]}</span><span class="pc-idx">0${i + 1}</span></div><span class="p-tag">${c.tag}</span><h3>${c.t}</h3><p>${c.d}</p><div class="p-facts">${c.f}</div></article>`; }).join('');

    const ed = document.getElementById('ed-rows');
    if (ed) ed.innerHTML = EDITIONS.map(r => { const c = pick(r, l); return `<div class="p-panel-row"><b>${c.t}</b><span>${c.d}</span></div>`; }).join('');

    const fa = document.getElementById('figA-rows');
    if (fa) fa.innerHTML = FIGA[l].map((r, i) => `<div class="pf-row"><span class="pf-ic">${ICONS[r.i]}</span><span class="pf-col"><span class="pf-lbl">${r.l}</span><span class="pf-bar"><i style="--d:${i * 0.9}s"></i></span></span><span class="pf-min">${r.m}</span></div>`).join('');

    const mg = document.getElementById('met-grid');
    if (mg) mg.innerHTML = METRICS.map((m, i) => {
      const c = pick(m, l);
      const top = `<div class="pc-top"><span class="pc-ico">${ICO.met[i]}</span><span class="pc-idx">0${i + 1}</span></div>`;
      if (i === 0) return `<div class="p-card p-met ring">${top}<div class="pf-ring"><svg viewBox="0 0 104 104"><circle class="trk" cx="52" cy="52" r="46"/><circle class="val" cx="52" cy="52" r="46"/></svg><span class="num">${m.n}</span></div><div class="k">${c.k}</div><div class="d">${c.d}</div></div>`;
      return `<div class="p-card p-met ${m.cls}">${top}<div class="n">${m.n}</div><div class="k">${c.k}</div><div class="d">${c.d}</div></div>`;
    }).join('');

    const fc = document.getElementById('figC-rows');
    if (fc) {
      const data = FIGC[l];
      const widths = [72, 58, 84, 64, 76];
      fc.innerHTML = `<div class="pf-trow head"><span>${data.h[0]}</span><span>${data.h[1]}</span><span>${data.h[2]}</span></div>` +
        data.rows.map((r, i) => `<div class="pf-trow"><span class="pf-name"><span class="pf-av"></span><span class="pf-nm" style="--w:${widths[i]}%"></span></span><span class="p-pill ${r[0]}">${r[1]}</span><span class="pf-date">${r[2]}</span></div>`).join('');
    }

    const st = document.getElementById('st-rows');
    if (st) st.innerHTML = STATUSES.map(s => { const c = pick(s, l); return `<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap"><span class="p-pill ${s.cls}">${c.p}</span><span style="font-size:14px;color:${c.warn ? 'var(--warn-ink)' : 'var(--fg-mute)'}">${c.d}</span></div>`; }).join('');

    const cg = document.getElementById('cmp-grid');
    if (cg) cg.innerHTML = `<div class="p-cmp-h us"><b>${d.s9_us}</b></div><div class="p-cmp-h"><b>${d.s9_them}</b></div>` +
      CMP.map(r => { const c = pick(r, l); return `<div class="p-cmp-k">${c.k}</div><div class="p-cmp-c us">${c.us}</div><div class="p-cmp-c them">${c.them}</div>`; }).join('');

    const sg = document.getElementById('step-grid');
    if (sg) sg.innerHTML = STEPS.map((r, i) => { const c = pick(r, l); return `<article class="p-card p-step"><div class="pc-top"><span class="pc-ico">${ICO.step[i]}</span><span class="pc-idx">0${i + 1}</span></div><span class="when">${c.w}</span><h3>${c.t}</h3><p>${c.d}</p></article>`; }).join('');

    const fq = document.getElementById('faq-list');
    if (fq) fq.innerHTML = FAQ.map(r => { const c = pick(r, l); return `<details class="faq-item"><summary>${c.q}<span class="faq-mark" aria-hidden="true"></span></summary><div class="faq-a"><p>${c.a}</p></div></details>`; }).join('');

    document.querySelectorAll('.btn[data-p]').forEach(b => {
      if (!b.querySelector('.arw')) b.insertAdjacentHTML('beforeend', ' <span class="arw">→</span>');
    });

    buildAstrolabe();
    buildCycle();
  }

  const prevRender = window.NX_pageRender;
  window.NX_pageRender = function () {
    if (prevRender) prevRender();
    render();
  };
})();
