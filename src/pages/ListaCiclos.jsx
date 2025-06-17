import { CYCLES } from "../utils/conferencias";
import { useNavigate } from "react-router-dom";
import theme from "../theme";

function ListaCiclos() {
    const navigate = useNavigate();
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

    return (
        <div
            style={{
                minHeight: "100vh",
                background: colors.bg,
                overflowY: "auto",
                overflowX: "hidden",
                zIndex: 0,
                width: "100%",
                boxSizing: "border-box"
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
                    paddingTop: "2.5rem",
                    boxSizing: "border-box"
                }}
            >
                <div
                    className="auralix-card"
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
                        Ciclos de Conferencias
                    </h2>
                    <ul style={{ width: "100%", listStyle: "none", padding: 0, margin: 0 }}>
                        {CYCLES.length === 0 && (
                            <li style={{
                                color: "#c7d2fe",
                                fontSize: "1.05rem",
                                textAlign: "center",
                                padding: "1.2rem 0"
                            }}>
                                No hay ciclos registrados.
                            </li>
                        )}
                        {CYCLES.map((cycle) => (
                            <li key={cycle.id} className="auralix-card-item" style={{
                                background: colors.card,
                                borderRadius: ".7rem",
                                marginBottom: ".9rem",
                                padding: "1.1rem 1rem",
                                boxShadow: "0 1px 4px 0 rgba(99,102,241,0.07)",
                                display: "flex",
                                flexDirection: "column",
                                gap: ".5rem"
                            }}>
                                {cycle.image && (
                                    <img
                                        src={cycle.image}
                                        alt={cycle.title}
                                        style={{
                                            width: "100%",
                                            height: 160,
                                            objectFit: "cover",
                                            borderRadius: ".5rem",
                                            marginBottom: ".7rem"
                                        }}
                                    />
                                )}
                                <div style={{ fontWeight: 700, color: colors.h2, fontSize: "1.07rem" }}>{cycle.title}</div>
                                <div style={{ color: "#c7d2fe", fontSize: ".97rem" }}>{cycle.description}</div>
                                <div style={{ color: "#c7d2fe", fontSize: ".97rem" }}>
                                    <strong>Fechas:</strong> {cycle.dates}
                                </div>
                                <div>
                                    <span style={{
                                        padding: ".2rem .8rem",
                                        borderRadius: "1rem",
                                        background: cycle.status ? colors.badgeBg : "#27272a",
                                        color: cycle.status ? colors.badgeColor : "#a1a1aa",
                                        fontWeight: 500,
                                        fontSize: ".95rem",
                                        whiteSpace: "nowrap"
                                    }}>
                                        {cycle.status ? "En proceso" : "Finalizado"}
                                    </span>
                                </div>
                                {cycle.moderator && (
                                    <div style={{ color: "#c7d2fe", fontSize: ".97rem", display: "flex", alignItems: "center", gap: ".5rem" }}>
                                        {cycle.moderator.photo && (
                                            <img src={cycle.moderator.photo} alt={cycle.moderator.name} style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
                                        )}
                                        <span
                                            style={{
                                                color: colors.h2,
                                                fontWeight: 700,
                                                fontSize: "1.01rem",
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
                                )}
                                <BotonAccion
                                    onClick={() => navigate(`/ciclos/${cycle.id}`)}
                                >
                                    Ver detalles del ciclo
                                </BotonAccion>
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
                    © {new Date().getFullYear()} Ciclos de Conferencias · Facultad de Ingenieria
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
                        max-width: 98vw !important;
                    }
                    h2 {
                        font-size: 1.05rem !important;
                    }
                    li {
                        font-size: .97rem !important;
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

export default ListaCiclos;
