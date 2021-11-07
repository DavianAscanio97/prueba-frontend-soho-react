import './index.component.sass';
import ListProject from '../projects/components/list-project/list-project.component';

export function Index() {
    
    return<>
        <main>
            <section className="directo">
                <div className="contenedor-directo">
                    <div className="image-direct"></div>
                    <p className="directo-parrafo"><span className="bold">EN DIRECTO</span>-SOHO está presente en el <strong>DIGITALBANK MONTEVIDEO.</strong>"Experiencia de Usuario" por Alvaro Añón (SEO de Soho).</p>
                    <a href={'/'}  className="action-directo-evento">Ver evento</a>
                    <a href={'/'}  className="action-directo-proximo">Proximos eventos</a>
                </div>
            </section>

            <section className="experiencia">
                <div className="contenedor-experiencia">
                    <h3 className="experiencia-titulo">17 años de experiencia en pos de tu proyecto</h3>
                    <span className="linea-experiencia"></span>
                    <p className="experiencia-parrafo">Especializados desde 1996 en usabilidad, experiencia del usuario (UX) y diseño de experiencias de proyectos digitales. Aportamos estrategia e innovación centrada en el usuario y los objetivos de negocio de tu proyecto. Cotrabajando mejoraremos tu tasa de conversión, KPI´s, ROI y los resultados de tu actual publicidad PPC (pay per click).</p>
                </div>
            </section>

            <section className="servicios">
                <div className="contenedor-servicios">
                    <div className="contenido-servicios">
                        <div className="tarjeta-1">
                            <div className="contenido-tarjeta">
                                <h3 className="titulo-tarjeta">Estrategia, usabilidad & ux</h3>
                                <p className="parrafo-tarjeta" >Te ofrecemos excelente usabilidad y experiencia del usuario en tu proyecto, junto a una vision innovadora</p>
                            </div>
                        </div>
                        <div className="tarjeta-2">
                            <div className="contenido-tarjeta">
                                <h3 style={{ color: "#999999" }} className="titulo-tarjeta">Mejoramos la experiencia</h3>
                                <p style={{ color: "#999999" }} className="parrafo-tarjeta" >Tangilizamos tu proyecto digial a través de un diseño centrado en el usuario y tecnicas avanzadas.</p>
                            </div>
                        </div>
                        <div className="tarjeta-3">
                            <div className="contenido-tarjeta">
                                <h3 className="titulo-tarjeta">Medición continua de objetivos</h3>
                                <p style={{color: "#999999"}} className="parrafo-tarjeta">Implementación, testing con usuarios y medición continua son necesarias para garantizar el éxito de tu proyecto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="proyecto">
                <div className="contenedor-proyecto">
                    <h3 className="proyecto-titulo">Proyectos destacados</h3>
                    <span className="linea-proyecto"></span>
                    <p className="proyecto-parrafo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam deleniti impedit beatae laborum, est veritatis illum libero earum eum eos alias ad aspernatur repellendus dolor fugit, placeat mollitia quod.</p>
                </div>
            </section>

            <ListProject />
        </main>

    </>

    
}