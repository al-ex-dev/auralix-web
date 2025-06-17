import { useNavigate } from "react-router-dom";
import theme from "../theme";

function Sobre() {
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
                    style={{
                        background: colors.card,
                        borderRadius: "1.1rem",
                        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.18)",
                        maxWidth: 340,
                        width: "100%",
                        padding: "1.5rem 1.1rem 1.2rem 1.1rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        animation: "fadeincard 0.8s cubic-bezier(.4,0,.2,1)"
                    }}
                >
                    <h2 style={{ color: colors.h2, fontSize: "1.2rem", marginBottom: ".7rem", textAlign: "center" }}>Sobre la organización</h2>
                    <p style={{ textAlign: "center", color: "#c7d2fe", marginBottom: "1.2rem" }}>
                        Este ciclo de conferencias es organizado por la Facultad de Tecnología y Sociedad. Nuestro objetivo es difundir conocimiento y conectar a la comunidad con expertos en áreas clave de la innovación.
                    </p>
                    <h3 style={{ marginTop: "1.2rem", color: colors.h2, textAlign: "center" }}>Contacto</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: ".7rem", alignItems: "center", marginTop: ".7rem" }}>
                        <BotonAccion
                            as="a"
                            href="mailto:contacto@ciclodeconferencias.com"
                            color={colors.accent}
                        >
                            Email: contacto@ciclodeconferencias.com
                        </BotonAccion>
                        <BotonAccion
                            as="a"
                            href="https://twitter.com/ciclodeconf"
                            color={colors.accent}
                        >
                            Twitter: @ciclodeconf
                        </BotonAccion>
                    </div>
                </div>
                <footer
                    style={{
                        width: "100vw",
                        textAlign: "center",
                        fontSize: ".93rem",
                        color: colors.h2,
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
                    div[style*="max-width: 340px"] {
                        padding: 1rem .5rem 1rem .5rem !important;
                        border-radius: .7rem !important;
                        max-width: 98vw !important;
                    }
                    h2 {
                        font-size: 1.05rem !important;
                    }
                    p, li {
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

export default Sobre;
