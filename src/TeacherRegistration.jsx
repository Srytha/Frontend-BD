import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    documento: '',
    direccion: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [photo, setPhoto] = useState(null); // Nuevo estado para manejar la foto

  // Manejo de los cambios en los campos del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Manejo del formulario al ser enviado
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Datos del formulario:', formData);
    // Aquí puedes enviar los datos a la API o hacer lo que necesites.
  };

  // Manejo de la carga de la foto
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Almacenamos la imagen cargada
      };
      reader.readAsDataURL(file);
    }
  };

  // Función para abrir el input de archivo cuando el usuario haga clic en la foto
  const handleClickFileInput = () => {
    document.getElementById('fileInput').click(); // Simula un clic en el input file oculto
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.header}>Registro de Profesores</h1>

        <form onSubmit={handleSubmit}>
          {/* Sección de foto */}
          <div style={styles.photoSection}>
            <div
              style={{
                ...styles.photoCircle,
                backgroundImage: photo ? `url(${photo})` : undefined,
              }}
              onClick={handleClickFileInput}
            >
              {!photo && <span style={styles.photoIcon}>📷</span>}
            </div>
            <input
              type="file"
              id="fileInput"
              style={styles.hiddenInput}
              onChange={handleFileChange}
              accept="image/*"
            />
            <button type="button" onClick={handleClickFileInput} style={styles.uploadButton}>
              Subir Foto
            </button>
          </div>

          {/* Campos del formulario */}
          {['documento', 'direccion', 'email', 'password', 'confirmPassword'].map((field) => (
            <div key={field} style={styles.inputContainer}>
              <label style={styles.label}>{capitalizeFirstLetter(field.replace(/([A-Z])/g, ' $1'))}</label>
              <input
                type={field.includes('password') ? 'password' : 'text'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
          ))}

          {/* Botón de registro */}
          <button type="submit" style={styles.submitButton}>
            Registrarse
          </button>
        </form>

        {/* Enlace para iniciar sesión */}
        <p style={styles.footer}>
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" style={styles.link}>
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

// Estilos del formulario
const styles = {
  container: {
    minHeight: '100vh',
    background: '#f9fafb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  formContainer: {
    maxWidth: '400px',
    width: '100%',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '16px',
  },
  photoSection: {
    marginBottom: '16px',
    textAlign: 'center',
  },
  photoCircle: {
    width: '100px',
    height: '100px',
    background: '#e0e0e0',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    cursor: 'pointer',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  photoIcon: {
    fontSize: '24px',
    color: '#fff',
  },
  hiddenInput: {
    display: 'none',
  },
  uploadButton: {
    display: 'block',
    margin: '10px auto',
    padding: '8px 16px',
    backgroundColor: '#4a90e2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
  },
  inputContainer: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    background: '#4a90e2',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    marginTop: '16px',
    color: '#555',
  },
  link: {
    color: '#4a90e2',
    textDecoration: 'none',
  },
};

// Función para capitalizar la primera letra de cada palabra
const capitalizeFirstLetter = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export default RegisterForm;
