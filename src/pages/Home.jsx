import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layers, Zap } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <section className="hero">
                <h1 className="hero-title">
                    Maîtrisez <span className="text-gradient">SwiftUI</span>
                </h1>
                <p className="hero-subtitle">
                    Créez de magnifiques applications iOS natives avec la syntaxe déclarative de Swift.
                    Un guide complet pour débutants et experts.
                </p>
                <div className="hero-actions">
                    <Link to="/foundations/setup" className="btn btn-primary">
                        Commencer l'apprentissage <ArrowRight size={18} />
                    </Link>
                    <a href="https://developer.apple.com/xcode/swiftui/" target="_blank" rel="noreferrer" className="btn btn-secondary">
                        Documentation Officielle
                    </a>
                </div>
            </section>

            <section className="features">
                <div className="feature-card">
                    <div className="feature-icon"><Layers size={24} /></div>
                    <h3>Syntaxe Déclarative</h3>
                    <p>Décrivez ce que votre interface doit faire. SwiftUI s'occupe du reste.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><Zap size={24} /></div>
                    <h3>Aperçus en direct</h3>
                    <p>Visualisez vos changements instantanément pendant que vous écrivez votre code.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon"><Code size={24} /></div>
                    <h3>Multi-plateforme</h3>
                    <p>Apprenez une fois, appliquez partout sur les plateformes Apple.</p>
                </div>
            </section>
             <section className='hero'>
             <p className="hero-subtitle">
                   <h3 className='text-gradient' >Attention</h3>
                   ce site ne replace pas Apical. Les exemples sont partiellement générés par l’IA. Si vous souhaitez consulter la source complète, vous devez vous référer au site original. <a href="https://apical.xyz/formations"> <b>apical</b> </a>
                </p>
                <br />
                <hr />
                <br />
                <p className='hero-subtitle'>Développé avec passion ☕ et beaucoup de café.
                    Par un étudiant de 2e année en Techniques de l’informatique — Cégep de Victoriaville.
                </p>
                <a className='text-gradient' href="https://www.linkedin.com/in/ahmed-ali-elamri-58612633a/">linkedin</a>  


             </section>
        </div>
    );
};

export default Home;
