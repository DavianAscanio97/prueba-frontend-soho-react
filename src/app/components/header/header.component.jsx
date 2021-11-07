import './header.component.sass';
export function Header() {
    return<> <header>
        <div className="contenedor">
            <div className="navbar">
                <h1 className="logo"><img src="assets/images/logo-soho.png" alt="" /></h1>
                <nav className="menu">
                    <a href="">inicio</a>
                    <a href="">nosotros</a>
                    <a href="">servicios</a>
                    <a href="">casos de exito</a>
                    <a href="">únete al equipo</a>
                    <a href="">contacto</a>
                    <a >iniciar sesión</a>
            </nav>
        </div>
        <div className="contenido-header">
            <h1 className="titulo-header">Nos especializamos en</h1>
            <h2 className="texto-header"><strong>interfaces digitales que los usuarios aman</strong></h2>
            <a href="" className="action-header">HABLEMOS DE TU PROYECTO</a>
        </div>
    </div>
</header ></>

}