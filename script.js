// duracion en segundos
const playlist = [
    {
        title: 'Thunderstruck',
        artist: 'AC/DC',
        duration: 130
    },
    {
        title: 'Under Pressure',
        artist: 'Queen',
        duration: 253
    }
];

// Devuelve el tiempo en minutos y segundos a partir de segundos
const tiempoDuracion = tiempoEnSeguntos => {
    const minutos = Math.floor(tiempoEnSeguntos / 60);
    const segundos = tiempoEnSeguntos - (minutos * 60);
    return `00:${minutos}:${segundos}`;
}

// genera la lista a partir de la data
const agregaItems = data => {
    // definimos el pricipio del template
    let template = '<ul class="playlist-items">';

    // ES6 => usamos map con arrow functions para recorrer la data
    data.map(cancion => {
        const { title, artist, duration } = cancion;

        template = `
            ${template}
            <li>
                <p>
                    <strong>${title}</strong>
                </p>
                <small class="playlist-meta playlist-artist">Artista: ${artist}</small>
                <small class="playlist-meta playlist-duracion">Duración: ${tiempoDuracion(duration)}</small>
            </li>
        `;
    });

    template = `${template}</ul>`;

    return template;
};

// inserta el HTML generado en la div contenedora
const container = document.getElementById('playlist-area');
container.innerHTML = agregaItems(playlist);

