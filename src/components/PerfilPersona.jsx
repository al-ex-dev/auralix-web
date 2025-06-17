import React from "react";
import theme from "../theme"; // Añadido

function PersonProfile({ person, role }) {
    if (!person) return null;
    const colors = theme.colors; // Añadido
    return (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: ".7rem" }}>
            {person.photo && (
                <img
                    src={person.photo}
                    alt={person.name}
                    style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 2px 8px 0 rgba(99,102,241,0.10)"
                    }}
                />
            )}
            <div>
                <div style={{ fontWeight: 700, color: colors.h2, fontSize: "1.07rem", animation: "fadeInText 0.8s ease-in-out" }}>
                    {person.name} {role && <span style={{ color: "#818cf8", fontWeight: 500, fontSize: ".97rem" }}>({role})</span>}
                </div>
                {person.title && (
                    <div style={{ color: "#c7d2fe", fontSize: ".97rem" }}>{person.title}</div>
                )}
                {person.bio && (
                    <div style={{ color: "#c7d2fe", fontSize: ".95rem", marginTop: ".2rem" }}>{person.bio}</div>
                )}
                {person.universityDegree && (
                    <div style={{ color: "#c7d2fe", fontSize: ".95rem", marginTop: ".2rem" }}>
                        <b>Grado universitario:</b> {person.universityDegree}
                    </div>
                )}
                {Array.isArray(person.certifications) && person.certifications.length > 0 && (
                    <div style={{ marginTop: ".3rem", display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                        {person.certifications.map((cert, idx) => (
                            <span key={idx} style={{
                                background: "#312e81",
                                color: colors.h2,
                                borderRadius: "1rem",
                                padding: ".18rem .7rem",
                                fontSize: ".88rem",
                                fontWeight: 500,
                                boxShadow: "0 1px 4px 0 rgba(99,102,241,0.10)"
                            }}>{cert}</span>
                        ))}
                    </div>
                )}
                {Array.isArray(person.masters) && person.masters.length > 0 && (
                    <div style={{ marginTop: ".3rem", display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                        {person.masters.map((m, idx) => (
                            <span key={idx} style={{
                                background: "#0e7490",
                                color: "#f0fdfa",
                                borderRadius: "1rem",
                                padding: ".18rem .7rem",
                                fontSize: ".88rem",
                                fontWeight: 500
                            }}>{m}</span>
                        ))}
                    </div>
                )}
                {Array.isArray(person.diplomas) && person.diplomas.length > 0 && (
                    <div style={{ marginTop: ".3rem", display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                        {person.diplomas.map((d, idx) => (
                            <span key={idx} style={{
                                background: "#a21caf",
                                color: "#fce7f3",
                                borderRadius: "1rem",
                                padding: ".18rem .7rem",
                                fontSize: ".88rem",
                                fontWeight: 500
                            }}>{d}</span>
                        ))}
                    </div>
                )}
                {Array.isArray(person.courses) && person.courses.length > 0 && (
                    <div style={{ marginTop: ".3rem", display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                        {person.courses.map((c, idx) => (
                            <span key={idx} style={{
                                background: "#2563eb",
                                color: "#dbeafe",
                                borderRadius: "1rem",
                                padding: ".18rem .7rem",
                                fontSize: ".88rem",
                                fontWeight: 500
                            }}>{c}</span>
                        ))}
                    </div>
                )}
                {Array.isArray(person.postgraduates) && person.postgraduates.length > 0 && (
                    <div style={{ marginTop: ".3rem", display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
                        {person.postgraduates.map((p, idx) => (
                            <span key={idx} style={{
                                background: "#be185d",
                                color: "#fce7f3",
                                borderRadius: "1rem",
                                padding: ".18rem .7rem",
                                fontSize: ".88rem",
                                fontWeight: 500
                            }}>{p}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default PersonProfile;

<style>
    {`
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
