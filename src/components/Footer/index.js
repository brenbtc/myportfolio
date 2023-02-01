import './styles.css'

function Footer() {
  return (
    <main>
      <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text"><strong>The End</strong></h5>
                <p class="grey-text text-lighten-4">Thank you for visiting Bren's portfolio. Feel free to reach out.</p>
              </div>
              <div class="col">
                <h5 class="white-text"><strong>Get Connected</strong></h5>
                <ul className="footer-links">
                  <li><a class="grey-text text-lighten-3" href="https://twitter.com/brndnle_" target='_blank'><ion-icon name="logo-twitter"></ion-icon></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/bren.btc/" target='_blank'><ion-icon name="logo-instagram"></ion-icon></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/bren-cowell/" target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a></li>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/brenbtc" target='_blank'><ion-icon name="logo-github"></ion-icon></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright Bren
            <a class="grey-text text-lighten-4 right" href="/"><ion-icon name="home-outline"></ion-icon></a>
            </div>
          </div>
        </footer>
    </main>
  );
}

export default Footer;
