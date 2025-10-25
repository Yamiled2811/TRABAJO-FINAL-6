function Header() {
    return (
      <header className="bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Ícono del menú para móviles */}
          <div
            id="menu-icon"
            className="md:hidden text-white text-2xl cursor-pointer hover:text-blue-400 transition-colors duration-200"
          >
            <i className="fa-solid fa-bars"></i>
          </div>
  
          {/* Logo */}
          <h1 className="text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            JyV tours
          </h1>
  
          {/* Íconos con links */}
          <div className="flex items-center space-x-6 text-white text-xl">
            {/* 🔍 Buscador */}
            <a
              href="busqueda.html"
              className="hover:text-blue-400 transition-colors duration-200"
              title="Buscar"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
  
            {/* 🎧 Soporte */}
            <a
              href="atención.html"
              className="hover:text-blue-400 transition-colors duration-200"
              title="Soporte"
            >
              <i className="fa-solid fa-headset"></i>
            </a>
  
            <div class="flex items-center space-x-4">
  <a href="carrito.html" title="Carrito de Compras" class="hover:text-blue-400 transition-colors duration-200">
    </a>
  <svg xmlns="http://www.w3.org/2000/svg" 
       class="h-6 w-6 text-white cursor-pointer" 
       fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6H19m-12 0a1 1 0 11-2 0 1 1 0 012 0zm12 0a1 1 0 11-2 0 1 1 0 012 0z" />
  </svg>


  <div class="relative">
    <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">3</span>
  </div>
</div>

  
            {/* 👤 Usuario */}
            <a
              href="contacto.html"
              className="hover:text-blue-400 transition-colors duration-200"
              title="Perfil"
            >
              <i className="fa-solid fa-user"></i>
            </a>
          </div>
        </div>
      </header>
    );
  }
  
  ReactDOM.render(<Header />, document.getElementById("header"));
  
