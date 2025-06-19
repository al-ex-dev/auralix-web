import { useParams, useNavigate } from "react-router-dom";
import { CYCLES } from "../utils/conferencias";
import { useEffect } from "react";
import theme from "../theme"; // Añadido

function CycleDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const cycle = CYCLES.find(c => String(c.id) === String(id)); // Corrige comparación de id
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

    // Acción para el botón "Inscríbete"
    const handleInscribete = () => {
        navigate("/inscripcion");
    };

    // Acción para el botón "Ver programa"
    const handleVerPrograma = () => {
        setTimeout(() => {
            const programa = document.querySelector(".programa-table-wrapper");
            if (programa) {
                programa.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 100); // Espera a que la animación termine
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        // Espera a que el DOM esté listo antes de aplicar animaciones
        setTimeout(() => {
            const card = document.querySelector('section[style*="max-width: 700px"]');
            if (card) {
                card.style.animation = "fadeincard 0.8s cubic-bezier(.4,0,.2,1) forwards";
            }

            const fadeInElements = document.querySelectorAll('.fade-in-text');
            fadeInElements.forEach((el, index) => {
                el.style.animation = `fadeInText 0.6s ease-out ${0.2 + index * 0.1}s forwards`;
            });
        }, 0);
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
                    boxSizing: "border-box"
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
                        margin: "2.5rem auto 2.5rem auto",
                        boxSizing: "border-box"
                    }}
                >
                    {/* Botón volver */}
                    <header style={{ width: "100%", marginBottom: "1.2rem", display: "flex", alignItems: "center" }}>
                        <BotonAccion onClick={() => navigate("/ciclos")}>
                            ← Volver a ciclos
                        </BotonAccion>
                    </header>
                    {/* Título grande */}
                    <h1 className="fade-in-text" style={{
                        color: colors.h2,
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
                        color: colors.subtitle,
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
                            <strong style={{ color: colors.h2, display: "block", marginBottom: ".2rem" }}>Descripción</strong>
                            <div style={{ color: colors.text, fontSize: "1.05rem" }}>{cycle.description}</div>
                        </div>
                        {/* Justificación */}
                        <div style={{ marginBottom: ".7rem" }}>
                            <strong style={{ color: colors.h2, display: "block", marginBottom: ".2rem" }}>Justificación</strong>
                            <div style={{ color: colors.text, fontSize: ".98rem" }}>{cycle.justification}</div>
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
                                <strong style={{ color: colors.h2, display: "block", marginBottom: ".2rem" }}>Objetivos</strong>
                                <ul style={{ color: colors.text, fontSize: ".98rem", paddingLeft: "1.1em" }}>
                                    {(cycle.objectives || []).map((o, i) => <li key={i}>{o}</li>)}
                                </ul>
                            </div>
                            <div style={{ flex: 1, minWidth: 180 }}>
                                <strong style={{ color: colors.h2, display: "block", marginBottom: ".2rem" }}>Público objetivo</strong>
                                <ul style={{ color: colors.text, fontSize: ".98rem", paddingLeft: "1.1em" }}>
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
                                        color: colors.text,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: ".7rem",
                                        fontSize: "1.03rem",
                                        boxShadow: "0 1px 4px 0 rgba(99,102,241,0.07)"
                                    }}
                                >
                                    <span style={{ fontSize: "1.5rem", color: colors.benefitIcon }}>{b.icon}</span>
                                    <span>{b.text}</span>
                                </div>
                            ))}
                        </div>
                        {/* Programa detallado */}
                        <div style={{ marginBottom: ".7rem", overflowX: "auto" }}>
                            <strong style={{ color: colors.h2, display: "block", marginBottom: ".2rem" }}>Programa</strong>
                            <div className="programa-table-wrapper" style={{ width: "100%" }}>
                                <table className="programa-table" style={{
                                    width: "100%",
                                    borderCollapse: "separate",
                                    borderSpacing: 0,
                                    color: colors.text,
                                    fontSize: ".98rem",
                                    marginTop: ".3rem",
                                    minWidth: 320,
                                    background: "#232336",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow: "0 2px 12px 0 rgba(99,102,241,0.10)"
                                }}>
                                    <thead>
                                        <tr>
                                            <th style={{ color: colors.h2, textAlign: "left", padding: ".7rem .5rem", background: "#1e2233", fontWeight: 800, fontSize: "1.01rem", borderTopLeftRadius: "12px" }}>Fecha</th>
                                            <th style={{ color: colors.h2, textAlign: "left", padding: ".7rem .5rem", background: "#1e2233", fontWeight: 800, fontSize: "1.01rem" }}>Hora</th>
                                            <th style={{ color: colors.h2, textAlign: "left", padding: ".7rem .5rem", background: "#1e2233", fontWeight: 800, fontSize: "1.01rem" }}>Sesión</th>
                                            <th style={{ color: colors.h2, textAlign: "left", padding: ".7rem .5rem", background: "#1e2233", fontWeight: 800, fontSize: "1.01rem", borderTopRightRadius: "12px" }}>Ponente</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(cycle.schedule || []).map((s, i) => (
                                            <tr key={i} style={{
                                                background: i % 2 === 0 ? "#232336" : "#26263a",
                                                borderBottom: "1px solid #36365a"
                                            }}>
                                                <td style={{ padding: ".6rem .5rem", borderLeft: i === cycle.schedule.length - 1 ? "none" : undefined }}>{s.fecha}</td>
                                                <td style={{ padding: ".6rem .5rem" }}>{s.hora}</td>
                                                <td style={{ padding: ".6rem .5rem" }}>{s.sesion}</td>
                                                <td style={{ padding: ".6rem .5rem" }}>{s.ponente}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* Galería de ponentes */}
                        <div style={{ marginBottom: ".7rem" }}>
                            <strong style={{ color: colors.h2, display: "block", marginBottom: ".2rem" }}>Ponentes</strong>
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
                                                    color: colors.h2,
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
                                            <div style={{ color: colors.text, fontSize: ".93rem" }}>{p.role || p.title || "Ponente"}</div>
                                            <div style={{ color: colors.speakerTopic, fontSize: ".93rem" }}>{p.topic || ""}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Moderador */}
                    {cycle.moderator && (
                        <div className="fade-in-text" style={{ 
                            marginBottom: ".7rem", 
                            opacity: 0, 
                            transform: "translateY(10px)",
                            width: "100%",
                            alignSelf: "flex-start"
                        }}>
                            <strong style={{ color: colors.h2, display: "block", marginBottom: ".5rem" }}>Moderador</strong>
                            <div style={{ 
                                marginBottom: "1.1rem", 
                                display: "flex", 
                                alignItems: "center", 
                                gap: ".7rem",
                                background: "#1e293b",
                                padding: ".7rem",
                                borderRadius: ".7rem",
                                width: "fit-content",
                                boxShadow: "0 1px 4px 0 rgba(99,102,241,0.07)", // igual que ponentes
                                border: "1.5px solid #232336" // igual que ponentes
                            }}>
                                {cycle.moderator.photo && (
                                    <img
                                        src={`${cycle.moderator.photo}`}
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
                                        color: colors.h2,
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
                        <div className="fade-in-text" style={{ 
                            marginTop: ".7rem", 
                            opacity: 0, 
                            transform: "translateY(10px)",
                            width: "100%",
                            alignSelf: "flex-start"
                        }}>
                            <strong style={{ color: colors.h2, display: "block", marginBottom: ".5rem" }}>Recursos</strong>
                            <div className="resources-grid" style={{
                                display: "grid",
                                gap: ".5rem",
                                width: "100%"
                            }}>
                                {cycle.resources.map((r, i) => (
                                    <a 
                                        key={i} 
                                        href={r.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{ 
                                            color: colors.accent,
                                            background: "#1e293b",
                                            padding: ".7rem 1rem",
                                            borderRadius: ".7rem",
                                            textDecoration: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: ".5rem",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        <span style={{ fontSize: "1.2rem" }}>💻</span>
                                        {r.name}
                                    </a>
                                ))}
                            </div>
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
                        <BotonAccion
                            color={colors.accent}
                            onClick={handleVerPrograma}
                        >
                            Ver programa
                        </BotonAccion>
                        <BotonAccion
                            color={colors.button}
                            onClick={() => {/* acción descargar PDF */}}
                        >
                            Descargar PDF
                        </BotonAccion>
                    </div>
                </section>
            </main>
            <footer
                style={{
                    width: "100vw",
                    textAlign: "center",
                    fontSize: ".93rem",
                    color: colors.h2,
                    padding: ".9rem 0 .5rem 0",
                    letterSpacing: ".01em",
                    position: "static",
                    marginTop: "1.5rem"
                }}
            >
                © {new Date().getFullYear()} Ciclo de Conferencias · Facultad de Ingenieria
            </footer>
            <style>
                {`
                html, body, #root {
                    height: 100%;
                    min-height: 100%;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    box-sizing: border-box;
                    overflow-x: hidden;
                }
                *, *:before, *:after {
                    box-sizing: inherit;
                }
                .cta-btn {
                    outline: none !important;
                    box-shadow: 0 2px 8px 0 rgba(99,102,241,0.10);
                    position: relative;
                    transition: box-shadow 0.2s, filter 0.2s, transform 0.15s;
                }
                .cta-btn:focus {
                    outline: none !important;
                    box-shadow: 0 0 0 3px #a78bfa55, 0 2px 8px 0 rgba(99,102,241,0.10);
                }
                .cta-btn:hover {
                    filter: brightness(1.08);
                    transform: translateY(-2px) scale(1.04);
                    box-shadow: 0 6px 24px 0 rgba(99,102,241,0.18),
                                0 0 12px 2px #a78bfa88, /* Glow violeta */
                                0 0 24px 4px #7dd3fc55; /* Glow azul */
                    z-index: 1;
                }
                .cta-btn:active {
                    transform: scale(0.97);
                    box-shadow: 0 1px 4px 0 rgba(99,102,241,0.12);
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

                /* --- RESPONSIVE --- */
                @media (max-width: 600px) {
                    section[style*="max-width: 700px"] {
                        max-width: 100vw !important;
                        width: 100% !important;
                        padding: 1.2rem 0.5rem 1.2rem 0.5rem !important;
                        margin: 1rem 0 1rem 0 !important;
                        box-sizing: border-box !important;
                    }
                    .mobile-flex-col {
                        flex-direction: column !important;
                        gap: 1.1rem !important;
                    }
                    .mobile-benefits {
                        flex-direction: column !important;
                        gap: .7rem !important;
                    }
                    .mobile-speakers {
                        flex-direction: column !important;
                        gap: .7rem !important;
                    }
                    .mobile-card {
                        min-width: unset !important;
                        width: 100% !important;
                        padding: .7rem .7rem !important;
                    }
                    .resources-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .mobile-btns {
                        flex-direction: column !important;
                        gap: .7rem !important;
                    }
                    h1, .fade-in-text {
                        font-size: 1.3rem !important;
                    }
                    table {
                        font-size: .93rem !important;
                        min-width: 240px !important;
                    }
                    th, td {
                        padding: .2rem !important;
                    }
                }
                @media (max-width: 400px) {
                    section[style*="max-width: 700px"] {
                        padding: .7rem .2rem .7rem .2rem !important;
                    }
                    h1, .fade-in-text {
                        fontSize: 1.1rem !important;
                    }
                }

                .programa-table-wrapper {
                    width: 100%;
                    overflow-x: auto;
                    border-radius: 12px;
                }
                .programa-table {
                    border-radius: 12px;
                    overflow: hidden;
                }
                .programa-table th, .programa-table td {
                    transition: background 0.2s;
                }
                .programa-table tr:hover td {
                    background: #35356a !important;
                }
                /* Responsive para tabla */
                @media (max-width: 600px) {
                    .programa-table th, .programa-table td {
                        padding: .45rem .3rem !important;
                        font-size: .93rem !important;
                    }
                    .programa-table {
                        min-width: 340px !important;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default CycleDetail;