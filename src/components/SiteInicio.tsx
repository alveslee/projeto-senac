import './SiteInicio.css';

const SiteInicio = () => {
    return (
        <> 
        <div className="logo">
                <div className="menu">
                    <ul className="menu01">
                        <li><a href="#">☰</a>
                            <div className="menu01-menu">
                                <a href="">Serviço 1</a>
                                <a href="">Serviço 2</a>
                                <a href="">Serviço 3</a>
                        </div>
                    </li>      
                </ul>
            </div> 
                <img src="src/assets/logo.png" alt="logo" />
            <div className='caixa'>
                <input type="text" />
                <button>Procurar</button>
            </div>
        </div>
        <nav>
            <div className='cabecarios'>

                    <div className='cabecario1'>
                        <ul className="cafea">
                            <li><a href="#">Café da manhã</a>
                                <div className="cafea-menu">
                                    <a href="">Serviço 1</a>
                                    <a href="">Serviço 2</a>
                                    <a href="">Serviço 3</a>
                                 </div>
                            </li>      
                        </ul>
                     </div>

                    <div className='cabecario3'>
                        <ul className="almoco">
                            <li><a href="#">Almoço</a>
                                <div className="almoco-menu">
                                    <a href="">Serviço 1</a>
                                    <a href="">Serviço 2</a>
                                    <a href="">Serviço 3</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                     <div className='cabecario4'>
                     <ul className="cafe-da-tarde">
                            <li><a href="#">Café da tarde</a>
                                <div className="cafe-tarde-menu">
                                    <a href="">Serviço 1</a>
                                    <a href="">Serviço 2</a>
                                    <a href="">Serviço 3</a>
                                </div>
                            </li>
                        </ul>
                     </div>

                     <div className='cabecario5'>
                     <ul className="lanche-da-tarde">
                        <li><a href="#">Lanche da tarde</a>
                            <div className="lanche-tarde-menu">
                                <a href="">Serviço 1</a>
                                <a href="">Serviço 2</a>
                                <a href="">Serviço 3</a>
                            </div>
                        </li>
                     </ul>                   
                     </div>

                    <div className='cabecario6'>
                    <ul className="jantar">
                        <li><a href="#">Jantar</a>
                            <div className="janta-menu">
                                <a href="">Serviço 1</a>
                                <a href="">Serviço 2</a>
                                <a href="">Serviço 3</a>
                            </div>
                        </li>
                    </ul>                     
                    </div>

                    <div className='cabecario7'>
                    <ul className="doces">
                        <li><a href="#">Doces</a>
                            <div className="doces-menu">
                                <a href="">Serviço 1</a>
                                <a href="">Serviço 2</a>
                                <a href="">Serviço 3</a>
                            </div>    
                        </li>
                    </ul>
                    </div>
            </div>
        </nav>    
            <main>
                <section className="receitas">
                    <div className="receita1">
                        <img src="src/assets/bolo-de-chocolate.png"></img>
                    </div>
                    <div className="receita2">
                        <img src="src/assets/pao-de-queijo.png"/>
                    </div>
                    <div className="receita3">
                        <img src="src/assets/torta-de-frango.png"/>
                    </div>
                    <div className="receita4">
                        <img src="src/assets/pizza-caseira.png"/>

                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="container-footer">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Sobre Nós</h4>
                            <p>Explore uma variedade de receitas deliciosas e inspire-se na cozinha com o nosso site. Descubra novas maneiras de preparar pratos incríveis e compartilhe suas próprias criações culinárias.</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Links Úteis</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Receitas</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Conecte-se Conosco</h4>
                            <ul className="list-inline">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    &copy; 2024 Panela criativa. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
};

export default SiteInicio;
