

import './styles.css'

function Stack() {

    
    const cards = [
        { id: 1, title: 'Back-End', content: [ 'MongoDB, ', ' PostgreSQL, ', ' Node, ', ' Solidity, ', ' Python, ', ' JavaScript ' ]},
        { id: 2, title: 'Front-End', content: [ 'Python, ' ,' JavaScript, ', ' ReactJS, ' ,' HTML, ', ' CSS, ', ' SASS, ', ' Tailwind, ', ' Bootstrap, ', ' Material UI ' ]},
        { id: 3, title: 'Tools', content: [ 'Git, ', ' Github, ', ' Heroku, ', ' Canva, ', ' Postman, ', ' DAOs ' ]},
        { id: 3, title: 'Learning', content: [ 'Rust, ', 'Lisp ' ]},

      ];
 
    return (
        <main className="home-page">
            <header className='homeTitle'>
                <h4><strong>Tech Stack</strong></h4>

            </header>
            <div className="options container">
            {cards.map((card) => (
                <div key={card.id} className="row">
                    <div className="card small">
                        <span className='Title'><h5><strong>{card.title}</strong></h5></span>
                        <div className="card-content">
                                <p>{card.content.join('\r\n')}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
      </main>
    )
}
export default Stack
