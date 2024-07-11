import React from 'react';
import '../../styles/landing.css';
import '../../styles/responsive.css';
import logo from '../../images/logo.png';
import image2 from '../../images/image2.png';
import sampleVideo from '../../video/video.mp4';


export default function gallery() {
  return (
        <div style={{position: 'relative'}}>
            <nav className="navbar navbar-expand-lg netflix-navbar netflix-padding-left netflix-padding-right">
                <div className="container-fluid">
                <div className="netflix-row">
                    <div className="left d-flex align-items-center">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="hi"/>
                    </a>
                    <div  className="netflix-nav">
                        <section>
                            <button>Video</button>
                            <button className='mx-2'>Profile</button>
                            <button>Filmes</button>
                            <button className='mx-2'>Bombando</button>
                            <button>Minha Lista</button>
                            <button className='mx-2'>Navegar por Idiomas</button>
                        </section>
                    </div>
                    <div className="netflix-dropdown-box dropdown">
                        <button className="netflix-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Navegar
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="/">Início</a></li>
                            <li><a className="dropdown-item" href="/">Séries</a></li>
                            <li><a className="dropdown-item" href="/">Filmes</a></li>
                            <li><a className="dropdown-item" href="/">Bombando</a></li>
                            <li><a className="dropdown-item" href="/">Minha Lista</a></li>
                            <li><a className="dropdown-item" href="/">Navegar por Idiomas</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="right d-flex align-items-center">
                    <i className="bi bi-search"></i>
                    <i className="bi bi-bell-fill"></i>
                    <section className="netflix-profile">

                    </section>
                    </div>
                </div>
                </div>
            </nav>

            <div className="">
                <section className="netflix-home-video">
                <div className="top"></div>
                <div className="bottom"></div>
                <video src={sampleVideo} autoPlay loop muted></video>
                <div className="content">
                    <section className="left">
                    <img src={image2} alt="hi"/>

                    <div className="d-flex mt-2">
                        <button className="btn btn-light m-2" > <i className="bi bi-play-fill" style={{color: 'black',  padding: '0%'}}></i> Assista Agora </button>
                        <button className="btn btn-secondary m-2"><i className="bi bi-info-circle" style={{padding: '0%'}}></i> Mais Informações</button>
                    </div>
                    </section>
                </div>
                </section>
            </div>

            
            
            <div className="container footer">
                <div className="row">
                <div className="col-md-10 mx-auto">
                    <div className="row">
                    <div className="col-md-3">
                        <ul>
                        <li>Audio e Subtitulos</li>
                        <li>Centro de Mídias</li>
                        <li>Privacidade</li>
                        <li>Contato</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                        <li>Audio descrição</li>
                        <li>Relação investidor</li>
                        <li>Termos de Serviço</li>
                        <li>Noticias</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                        <li>Centro de Ajuda</li>
                        <li>Trabalho</li>

                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul>
                        <li>Cartão Presente</li>
                        <li>Se inscreva</li>

                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">

                    <div className="col">
                        <p className="copy-right">@netflix copyright</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}
