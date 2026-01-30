import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './main.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <section className="intro">
                    <h1>Welcome to My Portfolio</h1>
                    <p>
                        I am a passionate developer with a love for creating beautiful and functional web applications.
                    </p>
                </section>
                <section className="featured-projects">
                    <h2>Featured Projects</h2>
                    <ul>
                        <li>
                            <h3>Expense Tracker</h3>
                            <p>A web application to track personal expenses.</p>
                        </li>
                        <li>
                            <h3>Personal Blog</h3>
                            <p>A blog platform to share my thoughts and experiences.</p>
                        </li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;