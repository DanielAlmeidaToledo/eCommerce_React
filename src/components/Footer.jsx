import {BsWhatsapp, BsLinkedin, BsGithub} from 'react-icons/bs'

import './Footer.css'

function Footer(){

    return (
        <div className='foot'> 
            <img className='nav-logo' src='/logo.png' />
            <hr />
            <div className='foot-bottom'>
                <div className='left'>
                    <h2>SOBRE</h2>
                    <span>
                        Esse e-commerce foi criado com o objetivo de fixar
                        e colocar em prática conhecimento adquiridos em
                        cursos e aulas sobre React.JS, utilizando um arquivo
                        JSON para manter os dados dos times e dos produtos.
                    </span>
                </div>
                <div className='right'>
                    <h2>CONTATO</h2>

                    <div className='divRight'>
                        <div>
                            <a href="https://wa.me/5515998485252" target={'_blank'}>
                                <BsWhatsapp className='icon' size={30}/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/danielalmeidadetoledo/" target={'_blank'}>
                                <BsLinkedin className='icon' size={30} href/>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/DanielAlmeidaToledo" target={'_blank'}>
                                <BsGithub className='icon' size={30}/>
                            </a>
                        </div>                        
                    </div>

                </div>
            </div>
            <p className='subFooter'>Esse site foi desenvolvido utilizando React.JS - &copy; Daniel Toledo</p>
        </div>
    )
}

export default Footer