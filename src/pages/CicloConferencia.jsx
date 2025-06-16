import { useParams, useNavigate } from "react-router-dom";
import { CYCLES } from "../utils/conferencias";

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
                        animation: "fadeincard 0.8s cubic-bezier(.4,0,.2,1)",
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
                        >
                            ← Volver a ciclos
                        </button>
                    </header>
                    {/* Título grande */}
                    <h1 style={{
                        color: "#a5b4fc",
                        fontSize: "2.1rem",
                        marginBottom: ".5rem",
                        textAlign: "center",
                        fontWeight: 800,
                        letterSpacing: "-.01em",
                        lineHeight: "1.1"
                    }}>
                        {cycle.title}
                    </h1>
                    {/* Subtítulo: fecha, formato y ubicación */}
                    <div style={{
                        color: "#c7d2fe",
                        fontSize: "1.07rem",
                        marginBottom: "1.1rem",
                        textAlign: "center",
                        fontWeight: 500,
                        display: "flex",
                        flexDirection: "column",
                        gap: ".2rem"
                    }}>
                        <span><strong>Fechas:</strong> {cycle.dates}</span>
                        <span><strong>Formato:</strong> {cycle.format}</span>
                        {cycle.location && (
                            <span><strong>Ubicación:</strong> {cycle.location}</span>
                        )}
                    </div>
                    {/* Descripción extendida */}
                    <section style={{ width: "100%", marginBottom: "1.2rem" }}>
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
                        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: ".7rem" }}>
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
                        <div style={{ marginBottom: ".7rem", display: "flex", gap: ".9rem", flexWrap: "wrap" }}>
                            {(cycle.benefits || []).map((b, i) => (
                                <div key={i} style={{
                                    background: "#1e293b",
                                    borderRadius: ".7rem",
                                    padding: ".7rem 1.1rem",
                                    color: "#c7d2fe",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: ".7rem",
                                    fontSize: "1.03rem",
                                    boxShadow: "0 1px 4px 0 rgba(99,102,241,0.07)"
                                }}>
                                    <span style={{ fontSize: "1.5rem" }}>{b.icon}</span>
                                    <span>{b.text}</span>
                                </div>
                            ))}
                        </div>
                        {/* Programa detallado */}
                        <div style={{ marginBottom: ".7rem" }}>
                            <strong style={{ color: "#a5b4fc", display: "block", marginBottom: ".2rem" }}>Programa</strong>
                            <table style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                color: "#c7d2fe",
                                fontSize: ".98rem",
                                marginTop: ".3rem"
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
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem" }}>
                                {cycle.speakers.map((p, i) => (
                                    <div key={i} style={{
                                        background: "#1e293b",
                                        borderRadius: ".7rem",
                                        padding: ".7rem .9rem",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: ".7rem",
                                        minWidth: 220,
                                        boxShadow: "0 1px 4px 0 rgba(99,102,241,0.07)"
                                    }}>
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
                        {/* Moderador */}
                        <div style={{ marginBottom: ".7rem" }}>
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
                        {/* Recursos */}
                        {Array.isArray(cycle.resources) && cycle.resources.length > 0 && (
                            <div style={{ marginTop: ".7rem" }}>
                                <strong style={{ color: "#a5b4fc" }}>Recursos:</strong>
                                <ul style={{ margin: ".5rem 0 0 0", padding: 0, listStyle: "disc inside", color: "#c7d2fe", fontSize: ".98rem" }}>
                                    {cycle.resources.map((r, i) => (
                                        <li key={i}><a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: "#a5b4fc" }}>{r.name}</a></li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {/* Botones CTA */}
                        <div style={{
                            display: "flex",
                            gap: "1.1rem",
                            marginTop: "1.3rem",
                            justifyContent: "center",
                            flexWrap: "wrap"
                        }}>
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
                </section>
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
            </main>
            <style>
                {`
                html, body, #root {
                    height: 100%;
                    min-height: 100%;
                    margin: 0;
                    padding: 0;
                }
                @media (max-width: 600px) {
                    main {
                        padding: 0 !important;
                    }
                    section[style*="max-width: 540px"] {
                        padding: 1rem .5rem 1rem .5rem !important;
                        border-radius: .7rem !important;
                    }
                    h1 {
                        font-size: 1.05rem !important;
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
