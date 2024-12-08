import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { QRCodeCanvas } from "qrcode.react";  // Cambié la importación aquí
import "./ClassDetail.css";

function ClassDetail() {
  const { id } = useParams();
  const [classDetail, setClassDetail] = useState(null);
  const [showQRCode, setShowQRCode] = useState(false);  // Para controlar la visibilidad del QR
  const navigate = useNavigate();

  useEffect(() => {
    const storedClasses = JSON.parse(localStorage.getItem("classes"));
    const selectedClass = storedClasses.find((clase) => clase.id === parseInt(id));
    setClassDetail(selectedClass);
  }, [id]);

  return (
    <div className="class-detail-container">
      <div className="sidebar">
        <ul>
          <li onClick={() => navigate("/profesor-dashboard")}>Home</li>
          <li>Configuración</li>
          <li>Reportes</li>
          <li>Cerrar sesión</li>
        </ul>
      </div>
      <div className="main-content">
        {classDetail ? (
          <div>
            <div className="class-info">
              <h1>{classDetail.name}</h1>
              <p>Grupo: {classDetail.group}</p>
              <p>Código: {classDetail.code}</p>
            </div>

            <div className="line"></div>
            
            <div className="other-content">
              <button className="back-button" onClick={() => navigate("/profesor-dashboard")}>Volver al Dashboard</button>

              {/* Botón para mostrar/ocultar el QR */}
              <button className="attendance-button" onClick={() => setShowQRCode(!showQRCode)}>
                {showQRCode ? "Cerrar QR" : "Tomar Asistencia con QR"}
              </button>

              {/* Mostrar QR si el estado showQRCode es verdadero */}
              {showQRCode && (
                <div className="qr-container">
                  <QRCodeCanvas value={`http://example.com/attendance/${classDetail.id}`} size={256} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>Cargando clase...</p>
        )}
      </div>
    </div>
  );
}

export default ClassDetail;
