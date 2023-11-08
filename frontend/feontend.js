document.getElementById('upload-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    try {
        const response = await fetch('/api/content/upload', {
            method: 'POST',
            body: form
        });

        if (response.status === 200) {
            alert('Contenido subido con éxito.');
            e.target.reset();
        } else {
            alert('Error al subir el contenido.');
        }
    } catch (error) {
        console.error(error);
    }
});
