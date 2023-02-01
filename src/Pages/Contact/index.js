import { useState } from "react"

function Contact() {

    return (
      <main id="contact">
        <h3>EMAIL ME</h3>
        <a  href="mailto:yanohb@yahoo.com?subject=Offer Inquiry" className="btn"> <i className="material-icons right">mail</i> Contact Me</a>
        <p> & Stay Connected</p>
        
        <ul>
            <a href='https://github.com/brenbtc' target='_blank' className="btn-flat"><li>Github</li></a>
            <a href='https://twitter.com/brndnle_' target='_blank' className="btn-flat"><li>Twitter</li></a>
            <a href='https://www.linkedin.com/in/bren-cowell/' target='_blank' className="btn-flat"><li>Linkedin</li></a>
            <a href='https://www.instagram.com/bren.btc/' target='_blank' className="btn-flat"><li>Instagram</li></a>
        </ul>
      </main>
    );
  }

export default Contact