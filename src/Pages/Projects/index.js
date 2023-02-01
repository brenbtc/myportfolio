
import './styles.css'


function Projects() {

  const cards = [
    {id: 1, img: 'https://i.imgur.com/xxC67Nu.jpg', title: 'oChain', content: 'MERN Stack that tracks NFT and Crypto data.', github: 'https://github.com/brenbtc/oChain', deployed: ''},
    {id: 2, img: 'https://i.imgur.com/lcZE66Q.png', title: 'SilqeeNFTs', content: 'EJS application that uses Multer to upload images.', github: 'https://github.com/brenbtc/NFT', deployed: ''},
    {id: 3, img: 'https://i.imgur.com/N0QmAQA.jpeg', title: 'Characterboxd', content: 'MERN Stack that tracks your reviews & favorite movies.', github: 'https://github.com/Kraven3030/Characterboxd', deployed: ''}


  ]

    return (
      <main id="projects">
        <h3>PROJECTS</h3>
        {cards.map((card) => (
          <div key={card.id} class="row">
            <div class="col">
              <div class="card medium">
                <div class="card-image">
                  <img src={card.img} id='cardimg'/>
                  <span class="card-title">{card.title}</span>
                </div>
                <div class="card-content">
                  <p>{card.content}</p>
                </div>
                <div class="card-action">
                  <a href={card.github} target='_blank'>github</a>
                </div>
              </div>
            </div>
          </div>
           ))}
      </main>
    ); 
  }

export default Projects