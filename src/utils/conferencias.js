export const CYCLES = [
    {
        id: 1,
        title: "La Ciberseguridad en la Era Digital",
        description: "La ciberseguridad no es solo una tecnología, sino una mentalidad esencial en la transformación digital. Este ciclo de conferencias busca formar ciudadanos responsables y preparados para enfrentar los desafíos del ciberespacio.",
        dates: "12 de junio del 2025",
        image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80",
        moderator: {
            name: "Ericka Vanessa Tapullima Julca",
            role: "Moderadora",
            photo: "https://randomuser.me/api/portraits/women/65.jpg",
            certifications: ["ISO 27001", "Maestría en Gestión TI"],
            diplomas: ["Diploma en Seguridad Informática"],
            courses: ["Liderazgo en Tecnología"],
            degree: "Ingeniera de Sistemas"
        },
        speakers: [
            {
                name: "Nayeli Quispe Tica",
                title: "Especialista en Ciberseguridad",
                bio: "Graduada en 2012 en Ingeniería de Sistemas y Computación por la UNMSM. Con experiencia en seguridad de la información y buenas prácticas digitales.",
                photo: "https://randomuser.me/api/portraits/women/44.jpg",
                certifications: ["CEH", "ISO 27001"],
                masters: ["Maestría en Ciberseguridad"],
                courses: ["Curso Avanzado de Hacking Ético"],
                universityDegree: "Ingeniera de Sistemas"
            },
            {
                name: "Roy Taipe Quispe Franco",
                title: "Licenciado en Sistemas y Software",
                bio: "Graduado en 2015 en Ingeniería de Sistemas y Computación por la UCV, con posgrado en gestión de proyectos y experiencia en desarrollo de software seguro.",
                photo: "https://randomuser.me/api/portraits/men/32.jpg",
                certifications: ["Scrum Master"],
                postgraduates: ["Posgrado en Gestión de Proyectos"],
                universityDegree: "Licenciado en Sistemas"
            },
            {
                name: "Alessandro Villogas Gaspar",
                title: "Ingeniero de Sistemas y Computación",
                bio: "Graduado en 2015 por la UNCP. Especialista en ciberseguridad, protección de datos, redes seguras y hacking ético, certificado internacional CEH.",
                photo: "https://randomuser.me/api/portraits/men/33.jpg",
                certifications: ["CEH", "Maestría en Ciberseguridad"],
                diplomas: ["Diploma en Protección de Datos"],
                universityDegree: "Ingeniero de Sistemas"
            },
            {
                name: "Jordan Inga Sánchez",
                title: "Ingeniero de Sistemas e Informática",
                bio: "Graduado en 2012 por la UNSA. Con experiencia en redes y administración de sistemas seguros.",
                photo: "https://randomuser.me/api/portraits/men/34.jpg",
                universityDegree: "Ingeniero de Sistemas e Informática"
            },
            {
                name: "Franchesco Marchelo Sánchez Zuñiga",
                title: "Ingeniero en Software",
                bio: "Graduado en 2015 por la UNI. Experto en desarrollo web y móvil con certificaciones en Full Stack y Cloud Computing.",
                photo: "https://randomuser.me/api/portraits/men/35.jpg",
                certifications: ["Full Stack", "Cloud Computing"],
                courses: ["Curso de DevOps", "Curso de AWS"],
                universityDegree: "Ingeniero en Software"
            }
        ],
        resources: [
            { name: "Guía de Ciberseguridad", url: "https://www.kaspersky.com/resource-center/definitions/what-is-cyber-security" },
            { name: "Informe de amenazas cibernéticas", url: "https://www.broadcom.com/company/newsroom/press-releases?filtr=Security+Threat+Report" },
            { name: "OWASP Top Ten", url: "https://owasp.org/www-project-top-ten/" }
        ],
        objectives: [
            "Capacitar a los estudiantes en medidas básicas de protección digital, como el uso de contraseñas seguras y la identificación de amenazas comunes.",
            "Promover el pensamiento crítico frente a contenidos digitales y posibles intentos de ingeniería social.",
            "Concientizar sobre la importancia de la ciberseguridad y el manejo responsable de la información digital."
        ],
        targetAudience: [
            "Estudiantes universitarios de ingeniería",
            "Profesionales de TI",
            "Empresarios interesados en seguridad digital"
        ],
        justification: "La ciberseguridad es esencial para garantizar la privacidad, integridad y disponibilidad de la información en la sociedad digital actual, frente a amenazas como el phishing, ransomware y robo de identidad.",
        benefits: [
            { icon: "🤝", text: "Networking con expertos" },
            { icon: "📜", text: "Certificado de participación" },
            { icon: "🎥", text: "Acceso a grabaciones" },
            { icon: "💻", text: "Materiales descargables" }
        ],
        format: "Presencial",
        location: "UPLA - Facultad de Ingeniería - Auditorio 1",
        schedule: [
            { fecha: "12/06/2025", hora: "10:00", sesion: "Apertura y presentación del ciclo", ponente: "Ericka Vanessa Tapullima Julca" },
            { fecha: "12/06/2025", hora: "11:00", sesion: "Principales amenazas cibernéticas", ponente: "Nayeli Quispe Tica" },
            { fecha: "12/06/2025", hora: "12:00", sesion: "Protección de datos en entornos digitales", ponente: "Alessandro Villogas Gaspar" },
            { fecha: "12/06/2025", hora: "13:00", sesion: "Ciberseguridad en el desarrollo de software", ponente: "Franchesco Marchelo Sánchez Zuñiga" },
            { fecha: "12/06/2025", hora: "14:00", sesion: "Gestión segura de proyectos TI", ponente: "Roy Taipe Quispe Franco" },
            { fecha: "12/06/2025", hora: "15:00", sesion: "Redes y sistemas seguros", ponente: "Jordan Inga Sánchez" }
        ]
    }
];


export const CONFERENCES = [
    {
        id: 1,
        cycleId: 1,
        name: "Amenazas Modernas en Ciberseguridad",
        description: "Un repaso de las amenazas más recientes y cómo enfrentarlas.",
        date: "2024-06-20 10:00",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        speaker: {
            name: "Nayeli Quispe Tica",
            bio: "Especialista en Ciberseguridad. UNMSM.",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            certifications: ["CEH", "ISO 27001"],
            masters: ["Maestría en Ciberseguridad"],
            universityDegree: "Ingeniera de Sistemas"
        },
        status: true,
        resources: [
            { name: "Presentación PDF", url: "#" }
        ]
    },
    {
        id: 2,
        cycleId: 1,
        name: "Protección de Datos en la Nube",
        description: "Buenas prácticas y normativas para proteger la información en entornos cloud.",
        date: "2024-06-21 15:00",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
        speaker: {
            name: "Alessandro Villogas Gaspar",
            title: "Ingeniero de Sistemas y Computación",
            bio: "Graduado en 2015 por la UNCP, con estudios en Ciberseguridad y Protección de Datos, Seguridad en Redes y Hacking Ético, y certificación internacional CEH.",
            photo: "https://randomuser.me/api/portraits/men/33.jpg",
            certifications: ["CEH", "Maestría en Ciberseguridad"],
            universityDegree: "Ingeniero de Sistemas"
        },
        status: false,
        resources: []
    },
    {
        id: 3,
        cycleId: 2,
        name: "Digitalización Segura en Empresas",
        description: "Cómo implementar la transformación digital sin descuidar la seguridad.",
        date: "2024-08-10 09:00",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
        speaker: {
            name: "Luis Pérez Gómez",
            title: "Especialista en Transformación Digital",
            bio: "Experto en procesos de digitalización y seguridad en empresas.",
            photo: "https://randomuser.me/api/portraits/men/36.jpg",
            certifications: ["Maestría en Transformación Digital"],
            diplomas: ["Diploma en Innovación Empresarial"],
            universityDegree: "Ingeniero Industrial"
        },
        status: true,
        resources: []
    }
];