const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

console.log('🚀 Iniciando proceso de exportación del proyecto...');

// Define output file path
const outputFile = path.join(__dirname, 'project_export.zip');
const output = fs.createWriteStream(outputFile);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`✅ Archivo exportado exitosamente!`);
  console.log(`📦 Tamaño total: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📁 Ubicación: ${outputFile}`);
});

output.on('end', () => {
  console.log('📤 Datos transferidos completamente');
});

archive.on('warning', err => {
  if (err.code === 'ENOENT') {
    console.warn('⚠️ Advertencia:', err);
  } else {
    throw err;
  }
});

archive.on('error', err => {
  console.error('❌ Error durante la exportación:', err);
  process.exit(1);
});

// Pipe archive data to the file
archive.pipe(output);

console.log('📂 Empaquetando archivos...');

// Archive all files except specified directories and zip file itself
archive.glob('**/*', {
  cwd: __dirname,
  ignore: [
    'node_modules/**',
    '.git/**',
    'project_export.zip',
    '.next/**',
    'dist/**',
    'build/**',
    '.env*',
    '*.log'
  ]
});

// Finalize the archive
archive.finalize();
