import { useState } from "react";
import theme from "../theme";

function guardarInscripcion(data) {
    // Simula una base de datos local usando localStorage
    const key = "inscripciones";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    prev.push(data);
    localStorage.setItem(key, JSON.stringify(prev));
}

function Inscripcion() {
    const colors = theme.colors;
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        ciclo: "",
        comentarios: ""
    });
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState("");

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setError("");
        if (!form.nombre || !form.email || !form.ciclo) {
            setError("Por favor, completa todos los campos obligatorios.");
            return;
        }
        guardarInscripcion({
            ...form,
            fecha: new Date().toISOString()
        });
        setEnviado(true);
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: colors.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div
                style={{
                    background: colors.card,
                    borderRadius: "1.1rem",
                    boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.18)",
                    maxWidth: 400,
                    width: "100%",
                    padding: "2rem 1.3rem 1.5rem 1.3rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    animation: "fadeincard 0.8s cubic-bezier(.4,0,.2,1)"
                }}
            >
                <h2 style={{ color: colors.h2, fontWeight: 700, fontSize: "1.2rem", marginBottom: ".7rem", textAlign: "center" }}>
                    Inscripción a Ciclo/Conferencia
                </h2>
                {enviado ? (
                    <div style={{ color: colors.h2, textAlign: "center", margin: "1.5rem 0" }}>
                        ¡Inscripción enviada correctamente!<br />
                        Te contactaremos por correo electrónico.
                    </div>
                ) : (
                    <form style={{ width: "100%" }} onSubmit={handleSubmit} autoComplete="off">
                        <div style={{ marginBottom: ".9rem" }}>
                            <label style={{ color: colors.h2, fontWeight: 600, display: "block", marginBottom: ".3rem" }}>
                                Nombre completo *
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                value={form.nombre}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: ".6rem",
                                    borderRadius: ".5rem",
                                    border: "1px solid #334155",
                                    background: "#18181b",
                                    color: colors.text,
                                    fontSize: ".97rem"
                                }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: ".9rem" }}>
                            <label style={{ color: colors.h2, fontWeight: 600, display: "block", marginBottom: ".3rem" }}>
                                Correo electrónico *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: ".6rem",
                                    borderRadius: ".5rem",
                                    border: "1px solid #334155",
                                    background: "#18181b",
                                    color: colors.text,
                                    fontSize: ".97rem"
                                }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: ".9rem" }}>
                            <label style={{ color: colors.h2, fontWeight: 600, display: "block", marginBottom: ".3rem" }}>
                                Ciclo o conferencia de interés *
                            </label>
                            <input
                                type="text"
                                name="ciclo"
                                value={form.ciclo}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: ".6rem",
                                    borderRadius: ".5rem",
                                    border: "1px solid #334155",
                                    background: "#18181b",
                                    color: colors.text,
                                    fontSize: ".97rem"
                                }}
                                required
                                placeholder="Ej: Ciberseguridad, Protección de Datos..."
                            />
                        </div>
                        <div style={{ marginBottom: ".9rem" }}>
                            <label style={{ color: colors.h2, fontWeight: 600, display: "block", marginBottom: ".3rem" }}>
                                Comentarios (opcional)
                            </label>
                            <textarea
                                name="comentarios"
                                value={form.comentarios}
                                onChange={handleChange}
                                style={{
                                    width: "100%",
                                    padding: ".6rem",
                                    borderRadius: ".5rem",
                                    border: "1px solid #334155",
                                    background: "#18181b",
                                    color: colors.text,
                                    fontSize: ".97rem",
                                    minHeight: "60px"
                                }}
                            />
                        </div>
                        {error && (
                            <div style={{ color: "#f87171", marginBottom: ".7rem", fontWeight: 600 }}>
                                {error}
                            </div>
                        )}
                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: ".7rem 0",
                                borderRadius: "2rem",
                                border: "none",
                                background: colors.button,
                                color: colors.buttonText,
                                fontWeight: 700,
                                fontSize: "1.07rem",
                                cursor: "pointer",
                                marginTop: ".5rem",
                                boxShadow: "0 2px 8px 0 rgba(99,102,241,0.10)",
                                transition: "background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s"
                            }}
                        >
                            Enviar inscripción
                        </button>
                    </form>
                )}
            </div>
            <style>
                {`
                @keyframes fadeincard {
                    from { opacity: 0; transform: translateY(30px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                `}
            </style>
        </div>
    );
}

export default Inscripcion;
