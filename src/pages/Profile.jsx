import { useParams, useNavigate } from "react-router-dom";
import { CYCLES, CONFERENCES } from "../utils/conferencias";

function findPersonBySlug(slug) {
    // Buscar en moderadores y ponentes de ciclos
    for (const cycle of CYCLES) {
        if (
            cycle.moderator &&
            cycle.moderator.name.replace(/\s+/g, '-').toLowerCase() === slug
        ) {
            return { ...cycle.moderator, role: "Moderador/a" };
        }
        for (const speaker of cycle.speakers) {
            if (
                speaker.name.replace(/\s+/g, '-').toLowerCase() === slug
            ) {
                return { ...speaker, role: "Ponente" };
            }
        }
    }
    // Buscar en ponentes de conferencias individuales
    for (const conf of CONFERENCES) {
        if (
            conf.speaker &&
            conf.speaker.name.replace(/\s+/g, '-').toLowerCase() === slug
        ) {
            return { ...conf.speaker, role: "Ponente" };
        }
    }
    return null;
}

function Profile() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const person = findPersonBySlug(slug);

    if (!person) {
        return (
            <div style={{
                minHeight: "100vh",
                background: "#18181b",
                color: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div>
                    <h2 style={{ color: "#a5b4fc" }}>Perfil no encontrado</h2>
                    <button
                        style={{
                            marginTop: "1.5rem",
                            padding: ".5rem 1.1rem",
                            borderRadius: "2rem",
                            border: "none",
                            background: "rgba(99,102,241,0.12)",
                            color: "#4f46e5",
                            fontWeight: 700,
                            fontSize: ".97rem",
                            cursor: "pointer"
                        }}
                        onClick={() => navigate(-1)}
                    >
                        Volver
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: "100vh",
            background: "#18181b",
            color: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                background: "#232336",
                borderRadius: "1.1rem",
                boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.18)",
                maxWidth: 420,
                width: "100%",
                padding: "2rem 1.3rem 1.5rem 1.3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {person.photo && (
                    <img
                        src={person.photo}
                        alt={person.name}
                        style={{
                            width: 90,
                            height: 90,
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "1.1rem",
                            boxShadow: "0 2px 8px 0 rgba(99,102,241,0.10)"
                        }}
                    />
                )}
                <h2 style={{ color: "#a5b4fc", fontWeight: 700, fontSize: "1.2rem", marginBottom: ".3rem" }}>
                    {person.name}
                </h2>
                {person.role && (
                    <div style={{ color: "#818cf8", fontWeight: 500, fontSize: ".97rem", marginBottom: ".3rem" }}>
                        {person.role}
                    </div>
                )}
                {person.title && (
                    <div style={{ color: "#c7d2fe", fontSize: ".97rem", marginBottom: ".3rem" }}>{person.title}</div>
                )}
                {person.bio && (
                    <div style={{ color: "#c7d2fe", fontSize: ".95rem", marginBottom: ".3rem" }}>{person.bio}</div>
                )}
                {person.universityDegree && (
                    <div style={{ color: "#c7d2fe", fontSize: ".95rem", marginBottom: ".3rem" }}>
                        <b>Grado universitario:</b> {person.universityDegree}
                    </div>
                )}
                {/* Certificaciones */}
                {Array.isArray(person.certifications) && person.certifications.length > 0 && (
                    <div style={{ margin: ".3rem 0", display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                        {person.certifications.map((cert, idx) => (
                            <span key={idx} style={{
                                background: "#312e81",
                                color: "#a5b4fc",
                                borderRadius: "1rem",
                                padding: ".18rem .7rem",
                                fontSize: ".88rem",
                                fontWeight: 500
                            }}>{cert}</span>
                        ))}
                    </div>
                )}
                {/* Maestrías */}
                {Array.isArray(person.masters) && person.masters.length > 0 && (
                    <div style={{ margin: ".3rem 0", display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                        {person.masters.map((m, idx) => (
                            <span key={idx} style={{
                                background: "#0e7490",
                                color: "#f0fdfa",
                                borderRadius: "1rem",
                                padding: ".18rem .7rem",
                                fontSize: ".88rem",
                                fontWeight: 500
                            }}>{m}</span>
                        ))}
                    </div>
                )}
                {/* Diplomas */}
                {Array.isArray(person.diplomas) && person.diplomas.length > 0 && (
                    <div style={{ margin: ".3rem 0", display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                        {person.diplomas.map((d, idx) => (
                            <span key={idx} style={{
                                background: "#a21caf",
                                color: "#fce7f3",
                                borderRadius: "1rem",
                                padding: ".18rem .7rem",
                                fontSize: ".88rem",
                                fontWeight: 500
                            }}>{d}</span>
                        ))}
                    </div>
                )}
                {/* Cursos */}
                {Array.isArray(person.courses) && person.courses.length > 0 && (
                    <div style={{ margin: ".3rem 0", display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                        {person.courses.map((c, idx) => (
                            <span key={idx} style={{
                                background: "#2563eb",
                                color: "#dbeafe",
                                borderRadius: "1rem",
                                padding: ".18rem .7rem",
                                fontSize: ".88rem",
                                fontWeight: 500
                            }}>{c}</span>
                        ))}
                    </div>
                )}
                {/* Posgrados */}
                {Array.isArray(person.postgraduates) && person.postgraduates.length > 0 && (
                    <div style={{ margin: ".3rem 0", display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                        {person.postgraduates.map((p, idx) => (
                            <span key={idx} style={{
                                background: "#be185d",
                                color: "#fce7f3",
                                borderRadius: "1rem",
                                padding: ".18rem .7rem",
                                fontSize: ".88rem",
                                fontWeight: 500
                            }}>{p}</span>
                        ))}
                    </div>
                )}
                <button
                    style={{
                        marginTop: "1.5rem",
                        padding: ".5rem 1.1rem",
                        borderRadius: "2rem",
                        border: "none",
                        background: "rgba(99,102,241,0.12)",
                        color: "#4f46e5",
                        fontWeight: 700,
                        fontSize: ".97rem",
                        cursor: "pointer"
                    }}
                    onClick={() => navigate(-1)}
                >
                    Volver
                </button>
            </div>
        </div>
    );
}

export default Profile;
