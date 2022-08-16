const menu = document.querySelector('.hamburguesa');

const navegacion = document.querySelector('.navegacion');

const menuCategoria = document.querySelector('.menu')

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});


const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrarNav();
}

const botonCerrarNav =() =>{
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('pantalla-completa').length > 0)return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar,overlay);  
}

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    })
    overlay.onclick= function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove();
    }
}



    const div = document.createElement('div')
    div.classList.add('menu-ropa')
    div.innerHTML = `
        <h2 class="texto-ropa">Ropa popular</h2>
        <div class = "botones-ropa">
        <button class="todos btn btn-verde">Todos</button>
        <button class="buzos btn btn-verde">Buzos</button>
        <button class="calzas btn btn-verde">Calzas</button>
        <button class="camperas btn btn-verde">Camperas</button>
        </div>
    `

    menuCategoria.appendChild(div)