import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import StudentRegistration from './StudentRegistration';
import TeacherRegistration from './TeacherRegistration';
import ProfesorDashboard from './ProfesorDashboard';
import ClassDetail from './ClassDetail'; // Importa el componente de detalles de la clase

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal (login) */}
        <Route path="/" element={<Login />} />

        {/* Ruta para el registro de estudiantes */}
        <Route path="/register" element={<StudentRegistration />} />

        {/* Ruta para el registro de profesores */}
        <Route path="/teacher-register" element={<TeacherRegistration />} />

        {/* Ruta para el dashboard del profesor */}
        <Route path="/profesor-dashboard" element={<ProfesorDashboard />} />

        {/* Ruta para los detalles de la clase */}
        <Route path="/class-detail/:id" element={<ClassDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
