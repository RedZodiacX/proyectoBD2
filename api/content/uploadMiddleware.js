const multer = require('multer');

// Configuración para el almacenamiento de archivos con Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Directorio de destino para guardar los archivos multimedia
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        // Nombre del archivo en el directorio
        const timestamp = Date.now();
        cb(null, `${timestamp}-${file.originalname}`);
    }
});

// Configurar Multer
const upload = multer({ storage });

module.exports = upload;
