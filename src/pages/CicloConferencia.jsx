import { useParams, useNavigate } from "react-router-dom";
import { CYCLES } from "../utils/conferencias";
import { useEffect } from "react";

function CycleDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const cycle = CYCLES.find(c => c.id === Number(id));
    const colors = {
        h2: "#a5b4fc",
        card: "#232336",
        text: "#f3f4f6",
        accent: "#6366f1",
        button: "#4f46e5"
    };

    useEffect(() => {
        // Scroll to top on component mount
        window.scrollTo(0, 0);

        // Apply animations
        const card = document.querySelector('section[style*="max-width: 700px"]');
        if (card) {
            card.style.animation = "fadeincard 0.8s cubic-bezier(.4,0,.2,1) forwards";
        }

        const fadeInElements = document.querySelectorAll('.fade-in-text');
        fadeInElements.forEach((el, index) => {
            // Apply delay based on index for staggered effect
            el.style.animation = `fadeInText 0.6s ease-out ${0.2 + index * 0.1}s forwards`;
        });

    }, [id]);

    if (!cycle) {
        return (
            <div style={{
                minHeight: "100vh",
                minWidth: "100vw",
                width: "100vw",
                height: "100vh",
                background: "#18181b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                overflow: "hidden",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 0,
                color: "#f3f4f6"
            }}>
                <main style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                    width: "100vw"
                }}>
                    Ciclo no encontrado.
                </main>
            </div>
        );
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#18181b",
                overflowY: "auto",
                overflowX: "hidden",
                zIndex: 0
            }}
        >
            <main
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    background: "transparent",
                    padding: 0,
                    margin: 0,
                    width: "100%"
                }}
            >
                <section
                    style={{
                        background: colors.card,
                        borderRadius: "1.1rem",
                        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.18)",
                        maxWidth: 700,
                        width: "100%",
                        padding: "2.5rem 2rem 2rem 2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        opacity: 0, // Initial state for animation
                        transform: "translateY(30px)", // Initial state for animation
                        margin: "2.5rem auto 2.5rem auto"
                    }}
                >
                    {/* Botón volver */}
                    <header style={{ width: "100%", marginBottom: "1.2rem", display: "flex", alignItems: "center" }}>
                        <button
                            style={{
                                padding: ".5rem 1.1rem",
                                borderRadius: "2rem",
                                border: "none",
                                background: "rgba(99,102,241,0.12)",
                                color: colors.button,
                                fontWeight: 700,
                                fontSize: ".97rem",
                                cursor: "pointer",
                                boxShadow: "0 2px 8px 0 rgba(99,102,241,0.10)",
                                letterSpacing: ".01em",
                                transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s"
                            }}
                            onClick={() => navigate("/ciclos")}
                            aria-label="Volver a ciclos"
                        >
                            ← Volver a ciclos
                        </button>
                    </header>
                    {/* Título grande */}
                    <h1 className="fade-in-text" style={{
                        color: "#a5b4fc",
                        fontSize: "2.1rem",
                        marginBottom: ".5rem",
                        textAlign: "center",
                        fontWeight: 800,
                        letterSpacing: "-.01em",
                        lineHeight: "1.1",
                        opacity: 0, // Initial state for animation
                        transform: "translateY(10px)" // Initial state for animation
                    }}>
                        {cycle.title}
                    </h1>
                    {/* Subtítulo: fecha, formato y ubicación */}
                    <div className="fade-in-text" style={{
                        color: "#c7d2fe",
                        fontSize: "1.07rem",
                        marginBottom: "1.1rem",
                        textAlign: "center",
                        fontWeight: 500,
                        display: "flex",
                        flexDirection: "column",
                        gap: ".2rem",
                        opacity: 0, // Initial state for animation
                        transform: "translateY(10px)" // Initial state for animation
                    }}>
                        <span><strong>Fechas:</strong> {cycle.dates}</span>
                        <span><strong>Formato:</strong> {cycle.format}</span>
                        {cycle.location && (
                            <span><strong>Ubicación:</strong> {cycle.location}</span>
                        )}
                    </div>
                    {/* Descripción extendida */}
                    <div className="fade-in-text" style={{ width: "100%", marginBottom: "1.2rem", opacity: 0, transform: "translateY(10px)" }}>
                        <div style={{ marginBottom: ".7rem" }}>
                            <strong style={{ color: "#a5b4fc", display: "block", marginBottom: ".2rem" }}>Descripción</strong>
                            <div style={{ color: "#c7d2fe", fontSize: "1.05rem" }}>{cycle.description}</div>
                        </div>
                        {/* Justificación */}
                        <div style={{ marginBottom: ".7rem" }}>
                            <strong style={{ color: "#a5b4fc", display: "block", marginBottom: ".2rem" }}>Justificación</strong>
                            <div style={{ color: "#c7d2fe", fontSize: ".98rem" }}>{cycle.justification}</div>
                        </div>
                        {/* Objetivos y público objetivo */}
                        <div
                            className="mobile-flex-col"
                            style={{
                                display: "flex",
                                gap: "2rem",
                                flexWrap: "wrap",
                                marginBottom: ".7rem"
                            }}
                        >
                            <div style={{ flex: 1, minWidth: 180 }}>
                                <strong style={{ color: "#a5b4fc", display: "block", marginBottom: ".2rem" }}>Objetivos</strong>
                                <ul style={{ color: "#c7d2fe", fontSize: ".98rem", paddingLeft: "1.1em" }}>
                                    {(cycle.objectives || []).map((o, i) => <li key={i}>{o}</li>)}
                                </ul>
                            </div>
                            <div style={{ flex: 1, minWidth: 180 }}>
                                <strong style={{ color: "#a5b4fc", display: "block", marginBottom: ".2rem" }}>Público objetivo</strong>
                                <ul style={{ color: "#c7d2fe", fontSize: ".98rem", paddingLeft: "1.1em" }}>
                                    {(cycle.targetAudience || []).map((p, i) => <li key={i}>{p}</li>)}
                                </ul>
                            </div>
                        </div>
                        {/* Beneficios */}
                        <div
                            className="mobile-benefits"
                            style={{
                                marginBottom: ".7rem",
                                display: "flex",
                                gap: ".9rem",
                                flexWrap: "wrap"
                            }}
                        >
                            {(cycle.benefits || []).map((b, i) => (
                                <div
                                    className="mobile-card"
                                    key={i}
                                    style={{
                                        background: "#1e293b",
                                        borderRadius: ".7rem",
                                        padding: ".7rem 1.1rem",
                                        color: "#c7d2fe",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: ".7rem",
                                        fontSize: "1.03rem",
                                        boxShadow: "0 1px 4px 0 rgba(99,102,241,0.07)"
                                    }}
                                >
                                    <span style={{ fontSize: "1.5rem" }}>{b.icon}</span>
                                    <span>{b.text}</span>
                                </div>
                            ))}
                        </div>
                        {/* Programa detallado */}
                        <div style={{ marginBottom: ".7rem", overflowX: "auto" }}>
                            <strong style={{ color: "#a5b4fc", display: "block", marginBottom: ".2rem" }}>Programa</strong>
                            <table style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                color: "#c7d2fe",
                                fontSize: ".98rem",
                                marginTop: ".3rem",
                                minWidth: 320
                            }}>
                                <thead>
                                    <tr>
                                        <th style={{ color: "#a5b4fc", textAlign: "left", padding: ".3rem" }}>Fecha</th>
                                        <th style={{ color: "#a5b4fc", textAlign: "left", padding: ".3rem" }}>Hora</th>
                                        <th style={{ color: "#a5b4fc", textAlign: "left", padding: ".3rem" }}>Sesión</th>
                                        <th style={{ color: "#a5b4fc", textAlign: "left", padding: ".3rem" }}>Ponente</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(cycle.schedule || []).map((s, i) => (
                                        <tr key={i}>
                                            <td style={{ padding: ".3rem" }}>{s.fecha}</td>
                                            <td style={{ padding: ".3rem" }}>{s.hora}</td>
                                            <td style={{ padding: ".3rem" }}>{s.sesion}</td>
                                            <td style={{ padding: ".3rem" }}>{s.ponente}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Galería de ponentes */}
                        <div style={{ marginBottom: ".7rem" }}>
                            <strong style={{ color: "#a5b4fc", display: "block", marginBottom: ".2rem" }}>Ponentes</strong>
                            <div
                                className="mobile-speakers"
                                style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "1.2rem"
                                }}
                            >
                                {(cycle.speakers || []).map((p, i) => (
                                    <div
                                        className="mobile-card"
                                        key={i}
                                        style={{
                                            background: "#1e293b",
                                            borderRadius: ".7rem",
                                            padding: ".7rem .9rem",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: ".7rem",
                                            minWidth: 220,
                                            boxShadow: "0 1px 4px 0 rgba(99,102,241,0.07)"
                                        }}
                                    >
                                        {p.photo && (
                                            <img
                                                src={p.photo}
                                                alt={p.name}
                                                style={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                    boxShadow: "0 1px 4px 0 rgba(99,102,241,0.10)"
                                                }}
                                            />
                                        )}
                                        <div>
                                            <div
                                                style={{
                                                    color: "#a5b4fc",
                                                    fontWeight: 700,
                                                    fontSize: "1.07rem",
                                                    cursor: "pointer",
                                                    textDecoration: "none"
                                                }}
                                                onClick={() => navigate(`/profile/${p.name.replace(/\s+/g, '-').toLowerCase()}`)}
                                                tabIndex={0}
                                                role="button"
                                            >
                                                {p.name}
                                            </div>
                                            <div style={{ color: "#c7d2fe", fontSize: ".93rem" }}>{p.role || p.title || "Ponente"}</div>
                                            <div style={{ color: "#818cf8", fontSize: ".93rem" }}>{p.topic || ""}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Moderador */}
                    {cycle.moderator && (
                        <div className="fade-in-text" style={{ marginBottom: ".7rem", opacity: 0, transform: "translateY(10px)" }}>
                            <strong style={{ color: "#a5b4fc", display: "block", marginBottom: ".2rem" }}>Moderador</strong>
                            <div style={{ marginBottom: "1.1rem", display: "flex", alignItems: "center", gap: ".7rem" }}>
                                {cycle.moderator.photo && (
                                    <img
                                        src={cycle.moderator.photo}
                                        alt={cycle.moderator.name}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            boxShadow: "0 1px 4px 0 rgba(99,102,241,0.10)"
                                        }}
                                    />
                                )}
                                <span
                                    style={{
                                        color: "#a5b4fc",
                                        fontWeight: 700,
                                        fontSize: "1.07rem",
                                        cursor: "pointer",
                                        textDecoration: "none"
                                    }}
                                    onClick={() => navigate(`/profile/${cycle.moderator.name.replace(/\s+/g, '-').toLowerCase()}`)}
                                    tabIndex={0}
                                    role="button"
                                >
                                    {cycle.moderator.name}
                                </span>
                            </div>
                        </div>
                    )}
                    {/* Recursos */}
                    {Array.isArray(cycle.resources) && cycle.resources.length > 0 && (
                        <div className="fade-in-text" style={{ marginTop: ".7rem", opacity: 0, transform: "translateY(10px)" }}>
                            <strong style={{ color: "#a5b4fc" }}>Recursos:</strong>
                            <ul style={{ margin: ".5rem 0 0 0", padding: 0, listStyle: "disc inside", color: "#c7d2fe", fontSize: ".98rem" }}>
                                {cycle.resources.map((r, i) => (
                                    <li key={i}><a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: "#a5b4fc" }}>{r.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* Botones CTA */}
                    <div
                        className="mobile-btns fade-in-text"
                        style={{
                            display: "flex",
                            gap: "1.1rem",
                            marginTop: "1.3rem",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            opacity: 0, // Initial state for animation
                            transform: "translateY(10px)" // Initial state for animation
                        }}
                    >
                        <button style={{
                            background: colors.button,
                            color: "#fff",
                            border: "none",
                            borderRadius: "2rem",
                            padding: ".7rem 1.7rem",
                            fontWeight: 700,
                            fontSize: "1.07rem",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px 0 rgba(99,102,241,0.10)",
                            transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s"
                        }}>
                            Inscríbete
                        </button>
                        <button style={{
                            background: "rgba(99,102,241,0.12)",
                            color: colors.button,
                            border: "none",
                            borderRadius: "2rem",
                            padding: ".7rem 1.7rem",
                            fontWeight: 700,
                            fontSize: "1.07rem",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px 0 rgba(99,102,241,0.10)",
                            transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s"
                        }}>
                            Ver programa
                        </button>
                        <button style={{
                            background: "#fff",
                            color: colors.button,
                            border: "1.5px solid #6366f1",
                            borderRadius: "2rem",
                            padding: ".7rem 1.7rem",
                            fontWeight: 700,
                            fontSize: "1.07rem",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px 0 rgba(99,102,241,0.10)",
                            transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s"
                        }}>
                            Descargar PDF
                        </button>
                    </div>
                </section>
            </main>
            <footer
                style={{
                    width: "100vw",
                    textAlign: "center",
                    fontSize: ".93rem",
                    color: "#a5b4fc",
                    padding: ".9rem 0 .5rem 0",
                    letterSpacing: ".01em",
                    position: "static",
                    marginTop: "1.5rem"
                }}
            >
                © {new Date().getFullYear()} Ciclo de Conferencias · Facultad de Tecnología y Sociedad
            </footer>
            <style>
                {`
                html, body, #root {
                    height: 100%;
                    min-height: 100%;
                    margin: 0;
                    padding: 0;
                }
                @media (max-width: 700px) {
                    section[style*="max-width: 700px"] {
                        background: transparent !important;
                        box-shadow: none !important;
                        padding: 0 !important;
                        border-radius: 0 !important;
                        max-width: 100vw !important;
                        margin: 0 !important;
                    }
                    h1 {
                        font-size: 1.25rem !important;
                        margin-top: 1.2rem !important;
                        margin-bottom: .7rem !important;
                        text-align: left !important;
                        font-weight: 800 !important;
                    }
                    header[style] {
                        margin-bottom: 1rem !important;
                        padding-left: .5rem !important;
                    }
                    div[style*="font-size: 1.07rem"] {
                        font-size: 1rem !important;
                        text-align: left !important;
                        margin-bottom: .8rem !important;
                    }
                    section[style*="width: 100%"] {
                        margin-bottom: 1.2rem !important;
                        padding: 0 .5rem !important;
                    }
                    table {
                        font-size: .97rem !important;
                        margin-top: .5rem !important;
                    }
                    th, td {
                        padding: .25rem !important;
                    }
                    ul {
                        padding-left: 1.1em !important;
                        margin-bottom: .7rem !important;
                    }
                    .mobile-flex-col {
                        flex-direction: column !important;
                        gap: 1.2rem !important;
                    }
                    .mobile-benefits {
                        flex-direction: column !important;
                        gap: .7rem !important;
                    }
                    .mobile-speakers {
                        flex-direction: column !important;
                        gap: .7rem !important;
                    }
                    .mobile-btns {
                        flex-direction: column !important;
                        gap: .7rem !important;
                        margin-top: 1.1rem !important;
                    }
                    .mobile-card {
                        min-width: 0 !important;
                        width: 100% !important;
                        box-sizing: border-box !important;
                    }
                }
                @keyframes fadeincard {
                    from { opacity: 0; transform: translateY(30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                @keyframes fadeInText {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>
        </div>
    );
}

export default CycleDetail;