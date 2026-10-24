//EJERCICIO 1//
async function getAllBreeds() {
  const respuesta = await fetch("https://dog.ceo/api/breeds/list/all");
  const datos = await respuesta.json();
  return Object.keys(datos.message);
}

//EJERCICIO 2//
async function getRandomDog() {
  const respuesta = await fetch("https://dog.ceo/api/breeds/image/random");
  const datos = await respuesta.json();
  return datos.message;
}

//EJERCICIO 3//
async function getAllImagesByBreed() {
  const respuesta = await fetch("https://dog.ceo/api/breed/komondor/images");
  const datos = await respuesta.json();
  return datos.message;
}

//EJERCICIO 4//
async function getAllImagesByBreed2(breed) {
  console.log(breed);
}
getAllImagesByBreed2("pug");
async function getAllImagesByBreed2(breed) {
  const url = `https://dog.ceo/api/breed/${breed}/images`;
  console.log(url);
}
async function getAllImagesByBreed2(breed) {
  const url = `https://dog.ceo/api/breed/${breed}/images`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos.message;
}

//EJERCICIO 5//
async function getGitHubUserProfile(username) {
  const url = `https://api.github.com/users/${username}`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  return datos;
}

//EJERCICIO 6//
async function printGithubUserProfile(username) {
  const datos = await getGitHubUserProfile(username);
  console.log(datos);
}
async function printGithubUserProfile(username) {
  const datos = await getGitHubUserProfile(username);
  const img = datos.avatar_url;
  const name = datos.name;
  console.log(img, name);
}
async function printGithubUserProfile(username) {
  const datos = await getGitHubUserProfile(username);
  const img = datos.avatar_url;
  const name = datos.name;

  const imagen = document.createElement("img");
  imagen.src = img;

  const titulo = document.createElement("h2");
  titulo.textContent = name;

  document.body.appendChild(imagen);
  document.body.appendChild(titulo);
  return { img, name };
}
//EJERCICIO 7//
async function getAndPrintGitHubUserProfile(username) {
  const datos = await getGitHubUserProfile(username);
  return `<section>
    <img src="${datos.avatar_url}" alt="${datos.name}">
    <h1>${datos.name}</h1>
    <p>Public repos: ${datos.public_repos}</p>
</section>`;
}
//EJERCICIO 8//
async function fetchGithubUsers(userNames) {
  const promesas = userNames.map(name => getGitHubUserProfile(name));
  const usuarios = await Promise.all(promesas);
  usuarios.forEach(usuario => {
    console.log(usuario.html_url);
    console.log(usuario.name);
  });
  return usuarios.map(usuario => ({ html_url: usuario.html_url, name: usuario.name }));
}
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("username");
  const boton = document.getElementById("buscar");
  const resultado = document.getElementById("resultado");
  
  

  boton.addEventListener("click", async () => {
    const username = input.value;
    const tarjeta = await getAndPrintGitHubUserProfile (username);
    resultado.innerHTML = tarjeta;
  });
});