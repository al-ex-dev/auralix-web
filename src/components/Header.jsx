import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

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
            <button
                style={{
                    padding: "0.6rem 1.2rem",
                    borderRadius: "2rem",
                    border: "none",
                    background: "#6366f1",
                    color: "#ffffff",
                    fontWeight: 700,
                    cursor: "pointer"
                }}
                onClick={() => navigate("/inscripcion")}
            >
                Inscríbete
            </button>
        </header>
    );
}

export default Header;
