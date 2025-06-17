import { useNavigate } from "react-router-dom";
import theme from "../theme";

function Header() {
    const navigate = useNavigate();
    const colors = theme.colors;

    // Botón reutilizable para acciones principales
    const BotonAccion = ({ children, onClick, color, ...props }) => {
        const baseStyle = {
            padding: "0.6rem 1.2rem",
            borderRadius: "2rem",
            border: "none",
            background: color || colors.button,
            color: colors.buttonText,
            fontWeight: 700,
            fontSize: "1rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px 0 rgba(99,102,241,0.10)",
            letterSpacing: ".01em",
            transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s",
            outline: "none"
        };

        const handleMouseOver = e => {
            e.currentTarget.style.background = colors.accent;
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.transform = "translateY(-2px) scale(1.04)";
            e.currentTarget.style.boxShadow = `0 6px 24px 0 ${colors.badgeBg}33,
                0 0 12px 2px ${colors.h2}88,
                0 0 24px 4px ${colors.accent}55`;
            e.currentTarget.style.zIndex = 1;
        };
        const handleMouseOut = e => {
            e.currentTarget.style.background = color || colors.button;
            e.currentTarget.style.color = colors.buttonText;
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

        return (
            <button
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
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 2rem",
                background: "#232336",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                position: "sticky",
                top: 0,
                zIndex: 1000
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer"
                }}
                onClick={() => navigate("/inicio")}
            >
                <img
                    src="/auralix.svg"
                    alt="Auralix Logo"
                    style={{ width: 40, height: 40, marginRight: "0.5rem" }}
                />
                <span style={{ color: "#a5b4fc", fontWeight: 700, fontSize: "1.2rem" }}>
                    Auralix
                </span>
            </div>
            <nav>
                <ul
                    style={{
                        display: "flex",
                        gap: "1.5rem",
                        listStyle: "none",
                        margin: 0,
                        padding: 0
                    }}
                >
                    <li style={{ cursor: "pointer", color: "#c7d2fe" }} onClick={() => navigate("/inicio")}>Inicio</li>
                    <li style={{ cursor: "pointer", color: "#c7d2fe" }} onClick={() => navigate("/ciclos")}>Ciclos</li>
                    <li style={{ cursor: "pointer", color: "#c7d2fe" }} onClick={() => navigate("/conferencias")}>Programa</li>
                    <li style={{ cursor: "pointer", color: "#c7d2fe" }} onClick={() => navigate("/profile")}>Ponentes</li>
                    <li style={{ cursor: "pointer", color: "#c7d2fe" }} onClick={() => navigate("/sobre")}>Contacto</li>
                </ul>
            </nav>
            <BotonAccion onClick={() => navigate("/inscripcion")}>
                Inscríbete
            </BotonAccion>
        </header>
    );
}

export default Header;
