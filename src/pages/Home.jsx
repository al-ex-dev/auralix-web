import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

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

    const colors = {
        h2: "#a5b4fc",
        card: "#232336",
        text: "#f3f4f6",
        accent: "#6366f1",
        button: "#4f46e5",
        bg: "#18181b"
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
                        borderRadius: "1.1rem",
                        boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.18)",
                        maxWidth: 420,
                        width: "100%",
                        padding: "2.2rem 1.3rem 2rem 1.3rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative",
                        transition: "box-shadow 0.3s",
                        animation: "fadeincard 0.8s cubic-bezier(.4,0,.2,1)"
                    }}
                >
                    <h2
                        style={{
                            color: colors.h2,
                            fontSize: "1.45rem",
                            marginBottom: ".7rem",
                            textAlign: "center",
                            fontWeight: 700,
                            letterSpacing: ".01em",
                            transition: "color 0.3s"
                        }}
                    >
                        Facultad de Tecnología y Sociedad
                    </h2>
                    <p
                        style={{
                            marginBottom: "1.1rem",
                            textAlign: "center",
                            fontSize: "1.08rem",
                            color: "#c7d2fe",
                            fontWeight: 400,
                            lineHeight: 1.7,
                            transition: "color 0.3s"
                        }}
                    >
                        Bienvenido al portal de conferencias. Nuestro objetivo es difundir conocimiento y conectar a la comunidad con expertos en áreas clave de la innovación.
                    </p>
                    <div style={{
                        width: "100%",
                        marginBottom: "1.1rem",
                        background: "#232336",
                        borderRadius: ".7rem",
                        padding: ".7rem 1rem",
                        boxShadow: "0 1px 4px 0 rgba(99,102,241,0.07)"
                    }}>
                        <strong style={{ color: colors.h2 }}>Contacto:</strong>
                        <ul style={{ color: "#c7d2fe", fontSize: ".98rem", margin: ".5rem 0 0 0", padding: 0, listStyle: "none" }}>
                            <li>Email: contacto@ciclodeconferencias.com</li>
                            <li>Twitter: <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#a5b4fc" }}>@ciclodeconf</a></li>
                        </ul>
                    </div>
                    <div style={{
                        width: "100%",
                        marginBottom: "1.1rem",
                        background: "#232336",
                        borderRadius: ".7rem",
                        padding: ".7rem 1rem",
                        boxShadow: "0 1px 4px 0 rgba(99,102,241,0.07)"
                    }}>
                        <strong style={{ color: colors.h2 }}>Navegación</strong>
                        <div style={{ display: "flex", flexDirection: "column", gap: ".7rem", marginTop: ".7rem" }}>
                            <button
                                style={{
                                    padding: ".55rem 1.2rem",
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
                                    position: "relative",
                                    overflow: "hidden",
                                    outline: "none",
                                    animation: "fadeinbtn 1.1s cubic-bezier(.4,0,.2,1)"
                                }}
                                onClick={() => navigate("/ciclos")}
                                onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
                                onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                            >
                                Ver ciclos de conferencias
                            </button>
                            <button
                                style={{
                                    padding: ".55rem 1.2rem",
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
                                    position: "relative",
                                    overflow: "hidden",
                                    outline: "none",
                                    animation: "fadeinbtn 1.1s cubic-bezier(.4,0,.2,1)"
                                }}
                                onClick={() => navigate("/conferencias")}
                                onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
                                onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                            >
                                Ver lista de conferencias
                            </button>
                        </div>
                    </div>
                </div>
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
                        max-width: 98vw !important;
                    }
                    h2 {
                        font-size: 1.05rem !important;
                    }
                    p, ul, li, strong {
                        font-size: .97rem !important;
                    }
                    button {
                        font-size: .97rem !important;
                        padding: .5rem .9rem !important;
                    }
                }
                @keyframes fadeincard {
                    from { opacity: 0; transform: translateY(30px) scale(0.98);}
                    to { opacity: 1; transform: translateY(0) scale(1);}
                }
                @keyframes fadeinbtn {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                `}
            </style>
        </div>
    );
}

// Si tienes errores de pantalla en blanco, revisa que el componente Home esté correctamente exportado y que las rutas sean correctas.

export default Home;
