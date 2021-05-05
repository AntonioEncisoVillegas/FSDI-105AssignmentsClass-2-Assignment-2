var map = L.map('map').setView([32.528805,-166.987604, 13]);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([32.528805,-166.987604]).addTo(map)
    .bindPopup('<p>   The Fashon Pet   </p>')
    .openPopup();

    var circle = L.circle([32.528805,-166.987604], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);