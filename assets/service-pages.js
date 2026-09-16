/* ============================================================
   NEXCYBERS — service detail pages (content)
   Keyed by slug. Order of SLUGS matches NX_CONTENT[lang].services
   ============================================================ */
window.NX_SERVICE_SLUGS = [
  'cybersecurity-for-startups-smes',
  'incident-preparedness-and-response',
  'cyber-risk-assessments',
  'data-protection-information-security',
  'governance-risk-compliance',
  'cybersecurity-training'
];

window.NX_SERVICE_LABELS = {
  en: { kicker: 'Service', back: 'Back to services', crumb: 'Services', incl: 'Our services include:', goal: 'Our objective', cta: 'Book a session', top: 'Back to top' },
  es: { kicker: 'Servicio', back: 'Volver a servicios', crumb: 'Servicios', incl: 'Nuestros servicios incluyen:', goal: 'Nuestro objetivo', cta: 'Agendar sesión', top: 'Volver arriba' }
};

window.NX_SERVICE_PAGES = {
  'cybersecurity-for-startups-smes': {
    en: {
      intro: 'Startups and small businesses face unique challenges: limited resources, rapid growth, and exposure to cyber risks that can impact business continuity and customer trust. Nexcybers provides accessible and scalable solutions that support businesses at every stage of their development, integrating security from the outset.',
      items: [
        { t: 'Business-aligned cybersecurity foundations', d: 'We define a clear cybersecurity starting point aligned with business objectives and the organization’s actual risk level.' },
        { t: 'Identification of critical assets and key risks', d: 'We help identify which data, systems, and processes matter most and which risks should be addressed first.' },
        { t: 'Essential protection controls', d: 'We implement practical and effective measures such as access controls, backups, password management, and secure configurations.' },
        { t: 'Team training and awareness', d: 'We train people to recognize common threats and adopt safer digital habits in their day-to-day work.' },
        { t: 'Incident readiness and response', d: 'We establish simple guidelines to detect, respond to, and act on security incidents, reducing operational and reputational impact.' },
        { t: 'Continuous improvement and cybersecurity maturity', d: 'We support startups and SMEs as they grow, periodically reviewing risks and adapting cybersecurity measures as the business evolves.' }
      ],
      goal: 'By embedding cybersecurity from the start, organizations can reduce risks, build trust with customers and investors, and enable sustainable growth without compromising security.'
    },
    es: {
      intro: 'Las startups y pequeñas empresas enfrentan desafíos únicos: recursos limitados, crecimiento acelerado y exposición a riesgos cibernéticos que pueden afectar la continuidad del negocio y la confianza de sus clientes. En Nexcybers ofrecemos soluciones accesibles y escalables que acompañan a los negocios en cada etapa de su desarrollo, integrando la seguridad desde el inicio.',
      items: [
        { t: 'Base de ciberseguridad adaptada al negocio', d: 'Definimos un punto de partida claro en ciberseguridad, alineado con los objetivos del negocio y el nivel real de riesgo de la organización.' },
        { t: 'Identificación de activos críticos y riesgos clave', d: 'Ayudamos a identificar qué datos, sistemas y procesos son más importantes y qué riesgos deben abordarse primero.' },
        { t: 'Controles esenciales de protección', d: 'Implementamos medidas básicas y efectivas como control de accesos, copias de seguridad, gestión de contraseñas y configuraciones seguras.' },
        { t: 'Capacitación y concienciación del equipo', d: 'Formamos a las personas para reconocer amenazas comunes y adoptar hábitos digitales seguros en su trabajo diario.' },
        { t: 'Preparación para incidentes de seguridad', d: 'Establecemos lineamientos simples para detectar, responder y actuar ante incidentes, reduciendo el impacto operativo y reputacional.' },
        { t: 'Evolución y mejora continua en ciberseguridad', d: 'Acompañamos el crecimiento de la empresa, revisando periódicamente riesgos y ajustando la ciberseguridad a medida que el negocio evoluciona.' }
      ],
      goal: 'Habilitar un crecimiento sostenible y confiable, reduciendo riesgos, fortaleciendo la confianza de clientes e inversores y evitando que la seguridad sea una barrera para la innovación.'
    }
  },
  'incident-preparedness-and-response': {
    en: {
      intro: 'Cyber incidents are no longer a matter of “if” but “when.” Nexcybers helps organizations prepare so they can respond with speed and confidence when disruptions occur.',
      items: [
        { t: 'Incident Response Plan', d: 'Design and implementation of a clear, actionable incident response plan, defining phases, roles, and decision-making workflows to minimize impact, reduce response times, and support business continuity.' },
        { t: 'Incident Classification, Analysis, and Decision-Making', d: 'Establishment of criteria for detecting, classifying, and assessing incident severity, enabling rapid understanding of scope and impact and prioritizing actions based on risk.' },
        { t: 'Containment, Eradication, and Recovery', d: 'Development of practical procedures to limit incident spread, remove malicious activity, and securely restore affected systems and services, strengthening organizational resilience.' },
        { t: 'Evidence Preservation and Incident Cause and Origin Analysis', d: 'Implementation of best practices for the collection and preservation of digital evidence, along with incident origin analysis aimed at identifying its cause and preventing recurrence.' },
        { t: 'Incident Communication and Notification Readiness', d: 'Definition of internal and external communication flows to ensure effective coordination between technical teams, management, and key stakeholders and readiness for regulatory incident notification.' },
        { t: 'Training, Simulations, and Continuous Improvement', d: 'Tabletop exercises and post-incident reviews to train teams, validate procedures, and continuously improve incident response capabilities through lessons learned.' }
      ],
      goal: 'By preparing in advance, organizations can minimize downtime, limit financial and reputational damage, and recover faster, turning potential chaos into a controlled process.'
    },
    es: {
      intro: 'En el entorno actual, los incidentes cibernéticos son una realidad inevitable. En Nexcybers acompañamos a las organizaciones en su preparación para responder con rapidez, seguridad y coordinación, minimizando el impacto operativo y reputacional.',
      items: [
        { t: 'Plan integral de Respuesta a Incidentes', d: 'Diseño y formalización de un plan claro y accionable para gestionar incidentes de ciberseguridad, definiendo fases, responsabilidades y flujos de actuación que permitan minimizar el impacto, reducir los tiempos de respuesta y facilitar la recuperación del negocio.' },
        { t: 'Clasificación, análisis y toma de decisiones', d: 'Definición de criterios para la detección, clasificación y evaluación de la severidad de los incidentes, permitiendo comprender rápidamente su alcance e impacto y priorizar acciones de forma consistente y basada en riesgos.' },
        { t: 'Contención, erradicación y recuperación', d: 'Preparación de procedimientos prácticos para limitar la propagación del incidente, eliminar la causa técnica y restaurar sistemas y servicios de manera segura, fortaleciendo la resiliencia frente a amenazas futuras.' },
        { t: 'Preservación de evidencias y análisis de causa y origen del incidente', d: 'Implementación de buenas prácticas para la recolección y preservación de evidencias digitales, junto con análisis de origen del incidente orientado a identificar su causa y prevenir su recurrencia.' },
        { t: 'Comunicación y notificación de incidentes', d: 'Definición de flujos de comunicación internos y externos que faciliten la coordinación entre equipos técnicos, dirección y partes interesadas, y preparen a la organización para responder de forma ordenada ante incidentes relevantes.' },
        { t: 'Entrenamiento, simulacros y mejora continua', d: 'Ejercicios de simulación y revisiones post-incidente para entrenar a los equipos, validar los procedimientos y reforzar la capacidad de respuesta, incorporando lecciones aprendidas en políticas y procesos.' }
      ],
      goal: 'Reducir al mínimo el tiempo de inactividad, limitar daños financieros y reputacionales, y acelerar la recuperación, convirtiendo la disrupción en un proceso gestionado.'
    }
  },
  'cyber-risk-assessments': {
    en: {
      intro: 'Understanding your risks is the first step toward resilience. Nexcybers offers entry-level cybersecurity assessments designed to give small and medium-sized organizations a clear picture of their security posture.',
      items: [
        { t: 'Risk context, scope, and risk appetite definition', d: 'Definition of the organizational context, assessment scope, and risk appetite and tolerance, ensuring alignment with the organization’s strategic and business objectives.' },
        { t: 'Identification of critical assets and business impact analysis', d: 'Identification and prioritization of critical assets, processes, and data, incorporating business impact analysis to understand the operational, financial, and reputational consequences of cyber risks.' },
        { t: 'Threat, vulnerability, and risk scenario analysis', d: 'Structured analysis of relevant cyber threats and technical and organizational vulnerabilities, using realistic scenarios to understand how risks may materialize.' },
        { t: 'Cyber risk assessment and prioritization', d: 'Qualitative and, where appropriate, quantitative assessment of cyber risks, evaluating likelihood and impact to support clear, risk-based prioritization and decision-making.' },
        { t: 'Risk register and treatment options', d: 'Documentation of identified risks in a structured risk register, defining treatment options (mitigation, acceptance, transfer, or avoidance), and establishing traceability for expected residual risk.' },
        { t: 'Foundation for ongoing risk monitoring and governance', d: 'The assessment establishes the basis for subsequent cyber risk monitoring, including residual risks, key risk indicators, and review criteria to support governance and management reporting.' }
      ],
      goal: 'These assessments are lightweight but effective, enabling organizations to quickly understand where they stand and what steps to take first.'
    },
    es: {
      intro: 'Comprender los riesgos es el primer paso hacia la resiliencia. En Nexcybers ofrecemos evaluaciones de ciberseguridad para organizaciones en crecimiento, con foco en identificar y priorizar los riesgos más relevantes y transformarlos en acciones concretas.',
      items: [
        { t: 'Definición del contexto y alcance del riesgo', d: 'Definición del contexto organizacional, el alcance de la evaluación y el apetito y tolerancia al riesgo, asegurando que el análisis sea coherente con los objetivos estratégicos del negocio.' },
        { t: 'Identificación de activos críticos y análisis de impacto al negocio', d: 'Identificación y priorización de activos, procesos y datos críticos, incorporando análisis de impacto al negocio para comprender las consecuencias operativas, financieras y reputacionales de los riesgos cibernéticos.' },
        { t: 'Análisis de amenazas, vulnerabilidades y escenarios de riesgo', d: 'Evaluación estructurada de amenazas relevantes y vulnerabilidades técnicas y organizativas, utilizando escenarios realistas para entender cómo podrían materializarse los riesgos.' },
        { t: 'Evaluación y priorización de riesgos cibernéticos', d: 'Análisis cualitativo y, cuando aplica, cuantitativo de los riesgos, considerando probabilidad e impacto, y generando una priorización clara que facilite la toma de decisiones informadas.' },
        { t: 'Registro de riesgos y opciones de tratamiento', d: 'Documentación de los riesgos identificados en un registro estructurado, definiendo opciones de tratamiento (mitigación, aceptación, transferencia o evitación) y dejando trazabilidad sobre el riesgo residual esperado.' },
        { t: 'Base para monitoreo y gobernanza del riesgo', d: 'La evaluación deja definidos los elementos necesarios para el monitoreo posterior del riesgo cibernético, incluyendo riesgos residuales, métricas clave y criterios de revisión para su integración en la gobernanza y el reporting a la dirección.' }
      ],
      goal: 'Con un enfoque ágil y práctico, estas evaluaciones permiten comprender el estado real de la ciberseguridad y orientar las decisiones hacia las acciones más urgentes y efectivas.'
    }
  },
  'data-protection-information-security': {
    en: {
      intro: 'Data is one of the most valuable assets of any organization — and one of the most targeted. Nexcybers provides strategic guidance on safeguarding personal and sensitive information across both on-premise systems and cloud environments.',
      items: [
        { t: 'Information classification and governance', d: 'Identification and classification of data according to its criticality and sensitivity, defining appropriate levels of protection and establishing clear roles and responsibilities for its management, in line with information governance and privacy best practices.' },
        { t: 'Data protection throughout its lifecycle', d: 'Design and implementation of security controls to protect data at rest, in transit, and in use, incorporating encryption, access controls, and principles of minimal exposure to reduce the risk of data leakage, alteration, or unauthorized access.' },
        { t: 'Technical data protection strategies', d: 'Application of technical measures such as encryption, hashing, masking, tokenization, and segmentation, tailored to the type of information and the organization’s operational context, balancing security, regulatory compliance, and operational efficiency.' },
        { t: 'Data Loss Prevention (DLP)', d: 'Definition of strategies and controls to prevent accidental or intentional leakage of critical information, combining technical measures, processes, and staff awareness to address risky behaviors.' },
        { t: 'Information security monitoring and alerts', d: 'Advisory support in the implementation of continuous monitoring mechanisms and security alerts that enable early detection of unauthorized access, anomalous data usage, and potential security incidents.' },
        { t: 'Privacy, compliance, and data sovereignty', d: 'Alignment of information protection with regulatory and privacy requirements, considering where and how data is stored and processed, and strengthening governance, accountability, and informed decision-making.' }
      ],
      goal: 'Our goal is to ensure that privacy becomes a core business value, creating confidence among customers, employees, and partners.'
    },
    es: {
      intro: 'Los datos son el activo más valioso de una organización y, al mismo tiempo, uno de los más expuestos a los ataques cibernéticos. En Nexcybers proporcionamos orientación estratégica para garantizar la protección de datos personales y sensibles, ya sea en entornos locales o en la nube.',
      items: [
        { t: 'Clasificación y gobierno de la información', d: 'Identificación y clasificación de los datos según su criticidad y sensibilidad, definiendo niveles de protección adecuados y estableciendo roles y responsabilidades claras para su gestión, en línea con buenas prácticas de gobierno de la información y privacidad.' },
        { t: 'Protección de datos en todo su ciclo de vida', d: 'Diseño e implementación de controles de seguridad para proteger los datos en reposo, en tránsito y en uso, incorporando cifrado, control de accesos y principios de mínima exposición para reducir el riesgo de fuga, alteración o acceso no autorizado.' },
        { t: 'Estrategias técnicas de protección de datos', d: 'Aplicación de medidas técnicas como cifrado, hashing, enmascaramiento, tokenización y segmentación, adaptadas al tipo de información y al contexto operativo de la organización, equilibrando seguridad, cumplimiento normativo y operatividad.' },
        { t: 'Prevención de pérdida de datos (DLP)', d: 'Definición de estrategias y controles para prevenir la filtración accidental o intencional de información crítica, combinando medidas técnicas, procesos y concienciación del personal frente a comportamientos de riesgo.' },
        { t: 'Monitoreo y alertas de seguridad de la información', d: 'Asesoramiento en la implementación de mecanismos de monitoreo continuo y alertas de seguridad que permitan detectar accesos indebidos, usos anómalos de la información y posibles incidentes de seguridad de forma temprana.' },
        { t: 'Privacidad, cumplimiento y soberanía del dato', d: 'Alineación de la protección de la información con requisitos regulatorios y de privacidad, considerando dónde y cómo se almacenan y procesan los datos, y fortaleciendo la gobernanza, la rendición de cuentas y la toma de decisiones informada.' }
      ],
      goal: 'Convertir la privacidad en un valor esencial del negocio, fortaleciendo la confianza de clientes, empleados y socios.'
    }
  },
  'governance-risk-compliance': {
    en: {
      intro: 'Strong governance is the backbone of any cybersecurity program. At Nexcybers, we guide organizations in building a structured yet practical approach to managing cyber risks and ensuring compliance with international standards.',
      items: [
        { t: 'Cybersecurity governance', d: 'Definition of governance structures, roles, and responsibilities for cybersecurity, ensuring executive involvement and alignment between business objectives, risk management, and regulatory compliance.' },
        { t: 'Integrated cyber risk management', d: 'Identification, analysis, and assessment of cybersecurity risks, considering threats, vulnerabilities, and business impact, and establishing clear criteria for risk acceptance, mitigation, transfer, or treatment.' },
        { t: 'Policies and procedures framework', d: 'Development and review of information security policies, standards, and procedures that provide a consistent and coherent framework for risk management, compliance, and cybersecurity operations.' },
        { t: 'Regulatory and compliance alignment', d: 'Alignment of cybersecurity practices with applicable legal and regulatory requirements, supporting compliance obligations related to data protection, incident management, and information security.' },
        { t: 'Monitoring, metrics, and reporting', d: 'Definition of indicators, metrics, and monitoring mechanisms to assess the effectiveness of the cybersecurity program, inform executive management, and support risk-based decision-making.' },
        { t: 'Continuous improvement and GRC maturity', d: 'Assessment of the maturity level of the governance, risk, and compliance program, identifying improvement opportunities and defining realistic roadmaps to progressively strengthen the organization’s cybersecurity posture.' }
      ],
      goal: 'Our approach simplifies complexity and allows organizations to build resilient, accountable, and compliant operations without requiring advanced technical infrastructure.'
    },
    es: {
      intro: 'Un marco de gobernanza sólido es la base de todo programa de ciberseguridad. En Nexcybers guiamos a las organizaciones en la construcción de un enfoque estructurado pero práctico para gestionar riesgos cibernéticos y garantizar el cumplimiento de marcos legales, regulatorios y estándares internacionales.',
      items: [
        { t: 'Gobernanza de la ciberseguridad', d: 'Definición de estructuras de gobierno, roles y responsabilidades en materia de ciberseguridad, asegurando la participación de la dirección y la alineación entre los objetivos del negocio, la gestión del riesgo y el cumplimiento normativo.' },
        { t: 'Gestión integral del riesgo cibernético', d: 'Identificación, análisis y evaluación de los riesgos de ciberseguridad, considerando amenazas, vulnerabilidades e impacto al negocio, y estableciendo criterios claros para la aceptación, mitigación, transferencia o tratamiento del riesgo.' },
        { t: 'Marco de políticas y procedimientos', d: 'Desarrollo y revisión de políticas, normas y procedimientos de seguridad de la información que proporcionen un marco coherente y consistente para la gestión del riesgo, el cumplimiento y las operaciones de ciberseguridad.' },
        { t: 'Cumplimiento normativo y regulatorio', d: 'Alineación de las prácticas de ciberseguridad con los requisitos legales y regulatorios aplicables, facilitando el cumplimiento de obligaciones en materia de protección de datos, gestión de incidentes y seguridad de la información.' },
        { t: 'Monitoreo, métricas y reporting', d: 'Definición de indicadores, métricas y mecanismos de seguimiento que permitan evaluar la eficacia del programa de ciberseguridad, informar a la dirección y apoyar la toma de decisiones basada en riesgos.' },
        { t: 'Mejora continua y madurez del programa GRC', d: 'Evaluación del nivel de madurez del programa de gobierno, riesgo y cumplimiento, identificando oportunidades de mejora y estableciendo hojas de ruta realistas para fortalecer progresivamente la postura de ciberseguridad de la organización.' }
      ],
      goal: 'Nuestro enfoque simplifica la complejidad y permite a las organizaciones construir operaciones resilientes, responsables y alineadas a la normativa sin necesidad de contar con infraestructuras técnicas avanzadas.'
    }
  },
  'cybersecurity-training': {
    en: {
      intro: 'Cybersecurity begins with people. Technology alone cannot protect an organization if employees, partners, and stakeholders are not prepared to recognize and respond to digital threats. At Nexcybers, we design training programs that transform your workforce into a strong first line of defense.',
      items: [
        { t: 'Cybersecurity awareness programs', d: 'Design and implementation of organization-specific awareness programs focused on current threats such as phishing, social engineering, secure information handling, and digital best practices, reinforcing individual accountability for protecting information assets.' },
        { t: 'Role-based training and responsibilities', d: 'Targeted training based on staff roles (end users, technical staff, middle management, and executive leadership), ensuring that each profile understands its responsibilities in information security and cybersecurity.' },
        { t: 'Continuous training and periodic updates', d: 'Definition of continuous training frameworks with content regularly updated to reflect evolving threats, technological changes, and regulatory developments, in line with CIS Controls and NIST recommendations.' },
        { t: 'Integration of training into risk management', d: 'Alignment of training activities with the organization’s cybersecurity risk management strategy, strengthening preventive controls and reducing the likelihood of incidents caused by human error.' },
        { t: 'Effectiveness assessment and continuous improvement', d: 'Advisory support in defining metrics, indicators, and evaluation mechanisms to measure training effectiveness, identify knowledge gaps, and progressively improve the program.' },
        { t: 'Cybersecurity culture and compliance', d: 'Promotion of an organizational culture focused on security and regulatory compliance, integrating training as a core pillar of governance, operational resilience, and informed decision-making.' }
      ],
      goal: 'We make cybersecurity clear, practical, and accessible, promoting a culture in which everyone takes an active role in protecting information and digital security is integrated as a strategic value for growth.'
    },
    es: {
      intro: 'La verdadera ciberseguridad se construye desde las personas. En Nexcybers, ayudamos a las organizaciones a fortalecer su primera línea de defensa mediante programas de formación que desarrollan conciencia, habilidades y resiliencia frente a las amenazas digitales.',
      items: [
        { t: 'Programas de concienciación en ciberseguridad', d: 'Diseño e implementación de programas de concienciación adaptados a la organización, enfocados en amenazas actuales como phishing, ingeniería social, uso seguro de la información y buenas prácticas digitales, reforzando la responsabilidad individual en la protección de los activos de información.' },
        { t: 'Capacitación basada en roles y responsabilidades', d: 'Formación específica según el rol del personal (usuarios finales, personal técnico, mandos intermedios y dirección), asegurando que cada perfil comprenda sus responsabilidades en materia de seguridad de la información y ciberseguridad.' },
        { t: 'Formación continua y actualización periódica', d: 'Definición de esquemas de capacitación continua, con contenidos actualizados en función de la evolución de las amenazas, cambios tecnológicos y regulatorios, en línea con las recomendaciones de los CIS Controls y NIST.' },
        { t: 'Integración de la capacitación en la gestión del riesgo', d: 'Alineación de las actividades de formación con la estrategia de gestión de riesgos cibernéticos de la organización, reforzando los controles preventivos y reduciendo la probabilidad de incidentes derivados de errores humanos.' },
        { t: 'Evaluación de efectividad y mejora continua', d: 'Asesoramiento en la definición de métricas, indicadores y mecanismos de evaluación para medir la efectividad de la capacitación, identificar brechas de conocimiento y mejorar progresivamente el programa.' },
        { t: 'Cultura de ciberseguridad y cumplimiento', d: 'Promoción de una cultura organizacional orientada a la seguridad y al cumplimiento normativo, integrando la capacitación como un pilar de la gobernanza, la resiliencia operativa y la toma de decisiones informada.' }
      ],
      goal: 'Hacemos que la ciberseguridad sea clara, práctica y accesible, promoviendo una cultura donde cada persona asume un papel activo en la protección de la información y la seguridad digital se integra como un valor estratégico para el crecimiento.'
    }
  }
};
