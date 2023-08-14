// Este evento se dispara cuando el DOM (la estructura de la página) ha sido completamente cargado.
document.addEventListener("DOMContentLoaded", function () {
    // Obtiene el elemento que contendrá la lista de productos.
    const catListContainer = document.getElementById("cat-list-container");
  
    // Define la URL de la API de productos (reemplaza con la URL real).
    const apiUrl = "https://japceibal.github.io/emercado-api/cats_products/101.json";
  
    // Realiza una petición a la API para obtener los datos de los productos.
    fetch(apiUrl)
      .then(response => response.json())  // Convierte la respuesta en formato JSON.
      .then(jsonData => {
        // Itera a través de cada producto en los datos JSON.
        jsonData.products.forEach(product => {
          // Crea un elemento contenedor para cada producto.
          const productElement = document.createElement("div");
          productElement.className = "col-md-12 mb-4";  // Aplica clases de Bootstrap para el diseño.
  
          // Crea un elemento de tarjeta para el producto.
          const cardElement = document.createElement("div");
          cardElement.className = "card";  // Aplica clases de Bootstrap para el estilo de tarjeta.
  
          // Crea un elemento de imagen y establece la ruta de la imagen del producto.
          const imageElement = document.createElement("img");
          imageElement.className = "card-img-top";  // Clase para la imagen superior de la tarjeta.
          imageElement.src = product.image;  // Establece la ruta de la imagen.
  
          // Crea un elemento para el cuerpo de la tarjeta.
          const cardBody = document.createElement("div");
          cardBody.className = "card-body";  // Aplica clases de Bootstrap para el cuerpo de la tarjeta.
  
          // Crea un elemento para el nombre del producto.
          const nameElement = document.createElement("h3");
          nameElement.className = "card-title";  // Clase para el título de la tarjeta.
          nameElement.textContent = product.name;  // Establece el nombre del producto.
  
          // Crea un elemento para la descripción del producto.
          const descriptionElement = document.createElement("p");
          descriptionElement.className = "card-text";  // Clase para el texto de la tarjeta.
          descriptionElement.textContent = product.description;  // Establece la descripción del producto.
  
          // Crea un elemento para el precio del producto.
          const priceElement = document.createElement("p");
          priceElement.className = "card-text";  // Clase para el texto de la tarjeta.
          priceElement.textContent = `Precio: ${product.cost} ${product.currency}`;  // Muestra el precio.
  
          // Crea un elemento para la cantidad vendida del producto.
          const soldElement = document.createElement("p");
          soldElement.className = "card-text";  // Clase para el texto de la tarjeta.
          soldElement.textContent = `Vendidos: ${product.soldCount}`;  // Muestra la cantidad vendida.
  
          // Agrega los elementos creados a la estructura de la tarjeta y del producto.
          cardBody.appendChild(nameElement);
          cardBody.appendChild(descriptionElement);
          cardBody.appendChild(priceElement);
          cardBody.appendChild(soldElement);
  
          cardElement.appendChild(imageElement);
          cardElement.appendChild(cardBody);
  
          productElement.appendChild(cardElement);
  
          // Agrega el producto completo al contenedor de productos.
          catListContainer.appendChild(productElement);
        });
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  });
  