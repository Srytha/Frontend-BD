// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import StudentRegistration from './StudentRegistration';
import TeacherRegistration from './TeacherRegistration';
import ProfesorDashboard from './ProfesorDashboard';
import ClassDetail from './ClassDetail'; 
import Reportes from './Reportes'; 
import StudentView from './StudentView'; // Asegúrate de que la ruta sea correcta


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<StudentRegistration />} />
        <Route path="/teacher-register" element={<TeacherRegistration />} />
        <Route path="/profesor-dashboard" element={<ProfesorDashboard />} />
        <Route path="/class-detail/:id" element={<ClassDetail />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/estudiante" element={<StudentView />} />
        {/* Agregar ruta para configuración */}
        <Route path="/configuracion" element={<div>Configuración</div>} />
      </Routes>
    </Router>
  );
}

export default App;
