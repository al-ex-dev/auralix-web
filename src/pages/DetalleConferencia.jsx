import { useParams, useNavigate } from "react-router-dom";
import { CONFERENCES } from "../utils/conferencias";
import theme from "../theme";

function ConferenceDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const conf = CONFERENCES.find(c => c.id === Number(id));
    const colors = theme.colors;

    // Botón reutilizable para acciones principales y detalles
    const BotonAccion = ({ children, onClick, as = "button", href, color, ...props }) => {
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

        if (as === "a") {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={baseStyle}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    {...props}
                >
                    {children}
                </a>
            );
        }
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
                        <BotonAccion onClick={() => navigate("/conferencias")}>
                            ← Volver a conferencias
                        </BotonAccion>
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
                        {Array.isArray(conf.resources) && conf.resources.length > 0 && (
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
                    <div
                        className="mobile-btns fade-in-text"
                        style={{
                            display: "flex",
                            gap: "1.1rem",
                            marginTop: "1.3rem",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            opacity: 0,
                            transform: "translateY(10px)"
                        }}
                    >
                        <BotonAccion
                            color={colors.button}
                            onClick={() => {/* acción inscripción */}}
                        >
                            Inscríbete
                        </BotonAccion>
                        <BotonAccion
                            color={colors.accent}
                            onClick={() => {/* acción ver programa */}}
                        >
                            Ver programa
                        </BotonAccion>
                        <BotonAccion
                            color="#232336"
                            style={{
                                background: "#fff",
                                color: colors.button,
                                border: "1.5px solid #6366f1"
                            }}
                            onClick={() => {/* acción descargar PDF */}}
                        >
                            Descargar PDF
                        </BotonAccion>
                    </div>
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
                    © {new Date().getFullYear()} Ciclo de Conferencias · Facultad de Ingenieria
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
                    div[style*="max-width: 420px"], section[style*="max-width: 420px"] {
                        padding: 1rem .5rem 1rem .5rem !important;
                        border-radius: .7rem !important;
                        max-width: 98vw !important;
                    }
                    h1 {
                        font-size: 1.05rem !important;
                    }
                    div, span, button, strong {
                        font-size: .97rem !important;
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
