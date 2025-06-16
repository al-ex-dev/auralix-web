import { useParams, useNavigate } from "react-router-dom";
import { CONFERENCES } from "../utils/conferencias";

function ConferenceDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const conf = CONFERENCES.find(c => c.id === Number(id));
    const colors = {
        h2: "#a5b4fc",
        card: "#232336",
        text: "#f3f4f6",
        accent: "#6366f1",
        button: "#4f46e5",
        badgeBg: conf?.status ? "#166534" : "#27272a",
        badgeColor: conf?.status ? "#bbf7d0" : "#a1a1aa",
        bg: "#18181b"
    };

    if (!conf) {
        return (
            <div style={{
                minHeight: "100vh",
                minWidth: "100vw",
                width: "100vw",
                height: "100vh",
                background: colors.bg,
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
                    No hay conferencias individuales registradas para este ciclo.
                </main>
            </div>
        );
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                background: colors.bg,
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
                        maxWidth: 420,
                        width: "100%",
                        padding: "2rem 1.3rem 1.5rem 1.3rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        animation: "fadeincard 0.8s cubic-bezier(.4,0,.2,1)"
                    }}
                >
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
                                transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s",
                                animation: "fadeInButton 0.8s ease-in-out"
                            }}
                            onClick={() => navigate("/conferencias")}
                        >
                            ← Volver a conferencias
                        </button>
                    </header>
                    <h1 style={{ color: colors.h2, fontSize: "1.25rem", marginBottom: ".6rem", textAlign: "center", fontWeight: 700 }}>
                        {conf.name}
                    </h1>
                    <section style={{ width: "100%", marginBottom: ".7rem" }}>
                        {/* Speaker */}
                        <div style={{ marginBottom: "1.1rem", display: "flex", alignItems: "center", gap: ".7rem" }}>
                            {conf.speaker.photo && (
                                <img
                                    src={conf.speaker.photo}
                                    alt={conf.speaker.name}
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
                                onClick={() => navigate(`/profile/${conf.speaker.name.replace(/\s+/g, '-').toLowerCase()}`)}
                                tabIndex={0}
                                role="button"
                            >
                                {conf.speaker.name}
                            </span>
                        </div>
                        {/* Summary */}
                        <div style={{ marginBottom: ".7rem" }}>
                            <strong style={{ color: "#a5b4fc", display: "block", marginBottom: ".2rem" }}>Resumen de la conferencia</strong>
                            <div style={{ color: "#c7d2fe", fontSize: ".98rem" }}>{conf.description}</div>
                        </div>
                        {/* Date and Status */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "1.2rem", marginBottom: ".7rem" }}>
                            <div style={{ color: "#c7d2fe", fontSize: ".97rem" }}>
                                <strong style={{ color: "#a5b4fc" }}>Fecha y hora:</strong> {conf.date}
                            </div>
                            <div>
                                <strong style={{ color: "#a5b4fc" }}>Estado:</strong>
                                <span style={{
                                    color: colors.badgeColor,
                                    background: colors.badgeBg,
                                    borderRadius: "1rem",
                                    padding: ".2rem .7rem",
                                    fontWeight: 500,
                                    marginLeft: ".5rem"
                                }}>
                                    {conf.status ? "En proceso" : "Finalizado"}
                                </span>
                            </div>
                        </div>
                        {/* Resources */}
                        {conf.resources.length > 0 && (
                            <div style={{ marginTop: ".7rem" }}>
                                <strong style={{ color: "#a5b4fc" }}>Recursos:</strong>
                                <ul style={{ margin: ".5rem 0 0 0", padding: 0, listStyle: "disc inside", color: "#c7d2fe", fontSize: ".98rem" }}>
                                    {conf.resources.map((r, i) => (
                                        <li key={i}><a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: "#a5b4fc" }}>{r.name}</a></li>
                                    ))}
                                </ul>
                            </div>
                        )}
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
                        position: "absolute",
                        left: 0,
                        bottom: 0
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
                    div[style*="max-width: 420px"] {
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
                @keyframes fadeInButton {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                `}
            </style>
        </div>
    );
}

export default ConferenceDetail;
