// scripts.js
// Crear el botón
const botonArriba = document.createElement("button");
botonArriba.innerText = "\u2191";
botonArriba.id = "boton-arriba";
document.body.appendChild(botonArriba);
// Estilos del botón
const estilosBoton = `
  #boton-arriba {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    background-color: #004080;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const estilo = document.createElement("style");
estilo.appendChild(document.createTextNode(estilosBoton));
document.head.appendChild(estilo);
// Mostrar u ocultar el botón según el scroll
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 200) botonArriba.style.display = "block";
    else botonArriba.style.display = "none";
});
// Evento para volver arriba
botonArriba.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//# sourceMappingURL=index.c6e193e7.js.map
