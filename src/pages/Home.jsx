import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import theme from "../theme";

function Home() {
    const navigate = useNavigate();
    const cardRef = useRef(null);

    useEffect(() => {
        if (cardRef.current) {
            cardRef.current.animate(
                [
                    { opacity: 0, transform: "translateY(40px) scale(0.98)" },
                    { opacity: 1, transform: "translateY(0) scale(1)" }
                ],
                {
                    duration: 700,
                    easing: "cubic-bezier(.4,0,.2,1)",
                    fill: "forwards"
                }
            );
        }
    }, []);

    const colors = theme.colors;

    // Botón reutilizable para acciones principales y redes sociales
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

        // Animaciones y efectos igual que .cta-btn
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
                <div
                    ref={cardRef}
                    style={{
                        background: colors.card,
                        borderRadius: "1.3rem",
                        boxShadow: `0 8px 32px 0 ${colors.badgeBg}44`,
                        maxWidth: 700,
                        width: "100%",
                        padding: "2.5rem 2rem 2.2rem 2rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        transition: "box-shadow 0.3s",
                        animation: "fadeincard 0.8s cubic-bezier(.4,0,.2,1)",
                        margin: "2.5rem auto 2.5rem auto",
                        boxSizing: "border-box"
                    }}
                >
                    <h1
                        style={{
                            color: colors.h2,
                            fontSize: "2.1rem",
                            marginBottom: ".7rem",
                            textAlign: "center",
                            fontWeight: 800,
                            letterSpacing: "-.01em",
                            lineHeight: "1.1"
                        }}
                    >
                        Portal de Ciclos y Conferencias UPLA
                    </h1>
                    {/* Tarjetas de información estilo CicloConferencia */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.1rem",
                        width: "100%",
                        marginBottom: "1.2rem"
                    }}>
                        <div style={{
                            borderRadius: ".8rem",
                            padding: "1.1rem 1.1rem",
                            boxShadow: `0 2px 8px 0 ${colors.badgeBg}11`
                        }}>
                            <span style={{ color: colors.h2, fontWeight: 700, fontSize: "1.09rem" }}>Concepto</span>
                            <div style={{ marginTop: ".3rem", color: colors.text }}>
                                Portal web desarrollado por estudiantes de la Facultad de Ingeniería de Sistemas y Computación de la Universidad Peruana Los Andes (UPLA), dedicado a la difusión y consulta de ciclos y conferencias académicas.
                            </div>
                        </div>
                        <div style={{
                            borderRadius: ".8rem",
                            padding: "1.1rem 1.1rem",
                            boxShadow: `0 2px 8px 0 ${colors.badgeBg}11`
                        }}>
                            <span style={{ color: colors.h2, fontWeight: 700, fontSize: "1.09rem" }}>Objetivo</span>
                            <div style={{ marginTop: ".3rem", color: colors.text }}>
                                Facilitar el acceso a información relevante sobre ciclos de conferencias y conferencias individuales, conectando a la comunidad académica y profesional con oportunidades de aprendizaje y networking.
                            </div>
                        </div>
                        <div style={{
                            borderRadius: ".8rem",
                            padding: "1.1rem 1.1rem",
                            boxShadow: `0 2px 8px 0 ${colors.badgeBg}11`
                        }}>
                            <span style={{ color: colors.h2, fontWeight: 700, fontSize: "1.09rem" }}>Desarrollador</span>
                            <div style={{ marginTop: ".3rem", color: colors.text }}>
                                Creado por <span style={{ fontWeight: 700 }}>Auralix</span>.
                            </div>
                        </div>
                        <div style={{
                            borderRadius: ".8rem",
                            padding: "1.1rem 1.1rem",
                            boxShadow: `0 2px 8px 0 ${colors.badgeBg}11`
                        }}>
                            <span style={{ color: colors.h2, fontWeight: 700, fontSize: "1.09rem" }}>Contacto y sugerencias</span>
                            <div style={{ marginTop: ".3rem", color: colors.text }}>
                                ¿Tienes dudas, sugerencias o deseas colaborar? Escríbenos a:&nbsp;
                                <a href="mailto:contacto@ciclodeconferencias.com" style={{ color: colors.accent, textDecoration: "underline" }}>contacto@ciclodeconferencias.com</a>
                                <br />
                                También puedes sugerir mejoras o reportar problemas a través de nuestras redes sociales.
                            </div>
                        </div>
                        <div style={{
                            borderRadius: ".8rem",
                            padding: "1.1rem 1.1rem",
                            boxShadow: `0 2px 8px 0 ${colors.badgeBg}11`
                        }}>
                            <span style={{ color: colors.h2, fontWeight: 700, fontSize: "1.09rem" }}>Redes sociales</span>
                            <div style={{
                                display: "flex",
                                gap: "1.2rem",
                                marginTop: ".5rem",
                                flexWrap: "wrap",
                                justifyContent: "center" // Centrado horizontal
                            }}>
                                <BotonAccion
                                    as="a"
                                    href="https://twitter.com/ciclodeconf"
                                    color={colors.accent}
                                >
                                    Twitter
                                </BotonAccion>
                                <BotonAccion
                                    as="a"
                                    href="https://facebook.com/auralixpe"
                                    color={colors.accent}
                                >
                                    Facebook
                                </BotonAccion>
                                <BotonAccion
                                    as="a"
                                    href="https://instagram.com/auralixpe"
                                    color={colors.accent}
                                >
                                    Instagram
                                </BotonAccion>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        width: "100%",
                        marginBottom: "1.1rem",
                        borderRadius: ".9rem",
                        padding: "1rem 1.2rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: ".8rem"
                    }}>
                        <span style={{ color: colors.h2, fontWeight: 700, fontSize: "1.08rem" }}>
                            Acciones principales
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", gap: ".7rem" }}>
                            <BotonAccion onClick={() => navigate("/ciclos")}>
                                Ver ciclos de conferencias
                            </BotonAccion>
                        </div>
                    </div>
                </div>
                <footer
                    style={{
                        width: "100vw",
                        textAlign: "center",
                        fontSize: ".97rem",
                        color: colors.h2,
                        padding: ".9rem 0 .5rem 0",
                        letterSpacing: ".01em",
                        position: "static",
                        marginTop: "1.5rem",
                        background: "transparent"
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
                *, *:before, *:after {
                    box-sizing: inherit;
                }
                .cta-btn {
                    outline: none !important;
                    box-shadow: 0 2px 8px 0 ${colors.badgeBg}22;
                    position: relative;
                    transition: box-shadow 0.2s, filter 0.2s, transform 0.15s;
                }
                .cta-btn:focus {
                    outline: none !important;
                    box-shadow: 0 0 0 3px ${colors.h2}55, 0 2px 8px 0 ${colors.badgeBg}22;
                }
                .cta-btn:hover {
                    filter: brightness(1.08);
                    transform: translateY(-2px) scale(1.04);
                    box-shadow: 0 6px 24px 0 ${colors.badgeBg}33,
                                0 0 12px 2px ${colors.h2}88,
                                0 0 24px 4px ${colors.accent}55;
                    z-index: 1;
                }
                .cta-btn:active {
                    transform: scale(0.97);
                    box-shadow: 0 1px 4px 0 ${colors.badgeBg}22;
                }
                @keyframes fadeincard {
                    from { opacity: 0; transform: translateY(30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                @media (max-width: 700px) {
                    div[style*="max-width: 700px"] {
                        max-width: 100vw !important;
                        width: 100% !important;
                        padding: 1.2rem 0.5rem 1.2rem 0.5rem !important;
                        margin: 1rem 0 1rem 0 !important;
                        box-sizing: border-box !important;
                    }
                    h1 {
                        font-size: 1.3rem !important;
                    }
                }
                @media (max-width: 400px) {
                    div[style*="max-width: 700px"] {
                        padding: .7rem .2rem .7rem .2rem !important;
                    }
                    h1 {
                        font-size: 1.1rem !important;
                    }
                }
                `}
            </style>
        </div>
    );
}

export default Home;