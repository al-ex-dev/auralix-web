import { useNavigate } from "react-router-dom";

function Sobre() {
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
                <div
                    style={{
                        background: "#232336",
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
                    <h2 style={{ color: "#a5b4fc", fontSize: "1.2rem", marginBottom: ".7rem", textAlign: "center" }}>Sobre la organización</h2>
                    <p style={{ textAlign: "center", color: "#c7d2fe", marginBottom: "1.2rem" }}>
                        Este ciclo de conferencias es organizado por la Facultad de Tecnología y Sociedad. Nuestro objetivo es difundir conocimiento y conectar a la comunidad con expertos en áreas clave de la innovación.
                    </p>
                    <h3 style={{ marginTop: "1.2rem", color: "#a5b4fc", textAlign: "center" }}>Contacto</h3>
                    <ul style={{ color: "#f3f4f6", fontSize: "1.05rem", textAlign: "center", padding: 0, listStyle: "none" }}>
                        <li style={{ marginBottom: ".5rem" }}>Email: contacto@ciclodeconferencias.com</li>
                        <li>Twitter: <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#a5b4fc" }}>@ciclodeconf</a></li>
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
                    div[style*="max-width: 340px"] {
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
                `}
            </style>
        </div>
    );
}

export default Sobre;
