const API_KEY = import.meta.env.VITE_NASA_API_KEY;

document.querySelector("#app").innerHTML = "<p>loading...</p>";

// Gunakan BACKTICK (``) untuk string interpolasi ${API_KEY}
fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  // Wajib konversi response ke JSON lebih dulu
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("#app").innerHTML = `
        <h1>${data.title}</h1>
        <img src="${data.url}" alt="${data.title}" />
        <p>${data.explanation}</p>
    `;
  })
  .catch((err) => {
    console.error(err);
    document.querySelector("#app").innerHTML = "<p>Gagal memuat data.</p>";
  });