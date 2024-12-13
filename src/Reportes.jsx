// Reportes.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Usamos el hook de navegación
import "./Reportes.css"; // Asegúrate de tener el archivo CSS

function Reportes() {
  const [reportes, setReportes] = useState([]);
  const navigate = useNavigate(); // Hook para redirigir a otra página

  useEffect(() => {
    // Cargar los reportes desde localStorage o simular datos
    const storedReportes = JSON.parse(localStorage.getItem("reportes"));
    if (storedReportes) {
      setReportes(storedReportes);
    } else {
      // Si no hay reportes, simulamos algunos datos
      const simulatedReportes = [
        { id: 1, title: "Reporte de Asistencia", description: "Detalles de asistencia de los estudiantes." },
        { id: 2, title: "Reporte de Calificaciones", description: "Resumen de las calificaciones de los estudiantes." },
      ];
      setReportes(simulatedReportes);
      localStorage.setItem("reportes", JSON.stringify(simulatedReportes)); // Guardar los reportes simulados
    }
  }, []);

  // Función para redirigir a Home
  const redirectToHome = () => {
    navigate("/profesor-dashboard"); // Redirige al home
  };

  // Función para navegar a diferentes secciones
  const handleNavigation = (path) => {
    navigate(path); // Redirige a la ruta deseada
  };

  return (
    <div className="reportes-container">
      {/* Menú lateral con las opciones */}
      <div className="sidebar">
        <ul>
          <li onClick={() => handleNavigation("/profesor-dashboard")}>Home</li>
          <li onClick={() => handleNavigation("/configuracion")}>Configuración</li>
          <li onClick={() => handleNavigation("/reportes")}>Reportes</li>
          <li onClick={() => handleNavigation("/")}>Cerrar sesión</li>
        </ul>
      </div>

      {/* Contenido principal de Reportes */}
      <div className="main-content">
        <h2>Reportes</h2>

        {/* Mostrar los reportes disponibles */}
        {reportes.length > 0 ? (
          <ul>
            {reportes.map((reporte) => (
              <li key={reporte.id}>
                <h3>{reporte.title}</h3>
                <p>{reporte.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay reportes disponibles.</p>
        )}

        {/* Botón para regresar a Home */}
        <button onClick={redirectToHome} className="btn-home">Volver a Home</button>
      </div>
    </div>
  );
}

export default Reportes;
