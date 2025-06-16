import { useNavigate } from "react-router-dom";
import { CONFERENCES } from "../utils/conferencias";

function ListaConferencias() {
    const navigate = useNavigate();
    const colors = {
        h2: "#a5b4fc",
        card: "#232336",
        text: "#f3f4f6",
        button: "#4f46e5"
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#18181b",
                // Cambia overflowY de "hidden" a "auto" para permitir scroll y evitar el tambaleo si hay mucho contenido
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
                    width: "100%",
                    paddingTop: "2.5rem"
                }}
            >
                <div
                    style={{
                        background: colors.card,
                        borderRadius: "1.1rem",
                        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.18)",
                        maxWidth: 600,
                        width: "100%",
                        padding: "2.2rem 1.3rem 2rem 1.3rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        animation: "fadeincard 0.8s cubic-bezier(.4,0,.2,1)"
                    }}
                >
                    <h2 style={{
                        color: colors.h2,
                        fontSize: "1.25rem",
                        marginBottom: "1.2rem",
                        textAlign: "center",
                        fontWeight: 700,
                        animation: "fadeInText 0.8s ease-in-out"
                    }}>
                        Conferencias individuales
                    </h2>
                    <ul style={{ width: "100%", listStyle: "none", padding: 0, margin: 0 }}>
                        {CONFERENCES.length === 0 && (
                            <li style={{
                                color: "#c7d2fe",
                                fontSize: "1.05rem",
                                textAlign: "center",
                                padding: "1.2rem 0"
                            }}>
                                Aún no hay conferencias individuales registradas.
                            </li>
                        )}
                        {CONFERENCES.map((conf) => (
                            <li key={conf.id} style={{
                                background: "#232336",
                                borderRadius: ".7rem",
                                marginBottom: ".9rem",
                                padding: "1.1rem 1rem",
                                boxShadow: "0 1px 4px 0 rgba(99,102,241,0.07)",
                                display: "flex",
                                flexDirection: "column",
                                gap: ".5rem"
                            }}>
                                {conf.image && (
                                    <img
                                        src={conf.image}
                                        alt={conf.name}
                                        style={{
                                            width: "100%",
                                            height: 160,
                                            objectFit: "cover",
                                            borderRadius: ".5rem",
                                            marginBottom: ".7rem"
                                        }}
                                    />
                                )}
                                {/* Título con tamaño idéntico al de ciclo */}
                                <div style={{ fontWeight: 700, color: colors.h2, fontSize: "1.07rem" }}>{conf.name}</div>
                                <div style={{ color: "#c7d2fe", fontSize: ".97rem" }}>{conf.description}</div>
                                <div style={{ color: "#c7d2fe", fontSize: ".97rem" }}>
                                    <strong>Fecha y hora:</strong> {conf.date}
                                </div>
                                <div>
                                    <span style={{
                                        padding: ".2rem .8rem",
                                        borderRadius: "1rem",
                                        background: conf.status ? "#166534" : "#27272a",
                                        color: conf.status ? "#bbf7d0" : "#a1a1aa",
                                        fontWeight: 500,
                                        fontSize: ".95rem",
                                        whiteSpace: "nowrap"
                                    }}>
                                        {conf.status ? "En proceso" : "Finalizado"}
                                    </span>
                                </div>
                                {/* Ponente */}
                                {conf.speaker && (
                                    <div style={{ color: "#c7d2fe", fontSize: ".97rem", display: "flex", alignItems: "center", gap: ".5rem" }}>
                                        {conf.speaker.photo && (
                                            <img src={conf.speaker.photo} alt={conf.speaker.name} style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
                                        )}
                                        <span
                                            style={{
                                                color: "#a5b4fc",
                                                fontWeight: 700,
                                                fontSize: "1.01rem",
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
                                )}
                                <button
                                    style={{
                                        marginTop: ".5rem",
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
                                    onClick={() => navigate(`/conferencias/${conf.id}`)}
                                >
                                    Ver detalles de la conferencia
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
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
                    div[style*="max-width: 600px"] {
                        padding: 1rem .5rem 1rem .5rem !important;
                        border-radius: .7rem !important;
                    }
                    h2 {
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

export default ListaConferencias;
