import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import Stack from '../Stack';


import './styles.css'

function Home() {

    return (
      <main>
        <div className="main">
            <div className="container">
                <header className='section'>
                    <h3>Hello,</h3>
                    <h4> - I'm Bren Cowell </h4>
                    <h5>Full-Stack Blockchain Developer</h5>
                </header>
                <img  src='https://i.imgur.com/h94qfXw.jpg' className="brenpic"/>
            </div>
        </div>

    {/* About Section */}

        <section className='section'>
            <About />
        </section>

        {/* Stack Section */}
        <section>
            <Stack />
        </section>

        {/* Stack Section */}
        <section>
            <Projects />
        </section>
        {/* Contact Section */}
        <section>
          <Contact />
        </section>
      </main>
    );
  }

export default Home