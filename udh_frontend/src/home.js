
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <main className="page landing-page">
                // ...existing code...
            </main>
            <section className="portfolio-block website gradient">
                // ...existing code...
            </section>
        </div>
    );
}

ReactDOM.render(<Home />, document.getElementById('root'));