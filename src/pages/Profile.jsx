import { useParams, useNavigate } from "react-router-dom";
import { CYCLES, CONFERENCES } from "../utils/conferencias";
import theme from "../theme";

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
    const colors = theme.colors;

    // Botón reutilizable para volver
    const BotonAccion = ({ children, onClick, color, ...props }) => {
        const baseStyle = {
            padding: ".5rem 1.1rem",
            borderRadius: "2rem",
            border: "none",
            background: "rgba(99,102,241,0.12)",
            color: color || colors.button,
            fontWeight: 700,
            fontSize: ".97rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px 0 rgba(99,102,241,0.10)",
            letterSpacing: ".01em",
            transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s",
            textDecoration: "none",
            display: "inline-block",
            outline: "none"
        };

        const handleMouseOver = e => {
            e.currentTarget.style.background = color || colors.button;
            e.currentTarget.style.color = colors.buttonText;
            e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
            e.currentTarget.style.boxShadow = `0 6px 24px 0 ${colors.badgeBg}33,
                0 0 12px 2px ${colors.h2}88,
                0 0 24px 4px ${colors.accent}55`;
            e.currentTarget.style.zIndex = 1;
        };
        const handleMouseOut = e => {
            e.currentTarget.style.background = "rgba(99,102,241,0.12)";
            e.currentTarget.style.color = color || colors.button;
            e.currentTarget.style.transform = "none";
            e.currentTarget.style.boxShadow = "0 2px 8px 0 rgba(99,102,241,0.10)";
            e.currentTarget.style.zIndex = 0;
        };
        const handleMouseDown = e => {
            e.currentTarget.style.transform = "scale(0.97)";
            e.currentTarget.style.boxShadow = "0 1px 4px 0 " + colors.badgeBg + "22";
        };
        const handleMouseUp = e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 2px 8px 0 rgba(99,102,241,0.10)";
        };

        return (
            <button
                className="cta-btn"
                style={baseStyle}
                onClick={onClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                {...props}
            >
                {children}
            </button>
        );
    };

    if (!person) {
        return (
            <div style={{
                minHeight: "100vh",
                background: colors.bg,
                color: colors.text,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div>
                    <h2 style={{ color: colors.h2 }}>Perfil no encontrado</h2>
                    <BotonAccion
                        style={{ marginTop: "1.5rem" }}
                        onClick={() => navigate(-1)}
                    >
                        Volver
                    </BotonAccion>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: "100vh",
            background: colors.bg,
            color: colors.text,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                background: colors.card,
                borderRadius: "1.1rem",
                boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.18)",
                maxWidth: 420,
                width: "100%",
                padding: "2rem 1.3rem 1.5rem 1.3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                animation: "fadeincard 0.8s cubic-bezier(.4,0,.2,1)"
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
                <h2 style={{ color: colors.h2, fontWeight: 700, fontSize: "1.2rem", marginBottom: ".3rem" }}>
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
                                color: colors.h2,
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
                <BotonAccion
                    style={{ marginTop: "1.5rem" }}
                    onClick={() => navigate(-1)}
                >
                    Volver
                </BotonAccion>
            </div>
            <style>
                {`
                @media (max-width: 600px) {
                    div[style*="max-width: 420px"] {
                        padding: 1rem .5rem 1rem .5rem !important;
                        border-radius: .7rem !important;
                        max-width: 98vw !important;
                    }
                    h2 {
                        font-size: 1.05rem !important;
                    }
                    div, span, button {
                        font-size: .97rem !important;
                    }
                }
                @keyframes fadeincard {
                    from { opacity: 0; transform: translateY(30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                `}
            </style>
        </div>
    );
}

export default Profile;
