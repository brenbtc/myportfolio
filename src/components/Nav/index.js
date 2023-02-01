import './styles.css'

function Nav() {

    return (
      <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo"><i className="material-icons">person_outline</i></a>
        <ul id="nav-mobile" class="right">

          <li><a href="/.#about">About</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/.#projects">Projects</a></li>
          <li><a href="/.#contact">Contact</a></li>

        </ul>
      </div>
    </nav>
    );
  }

export default Nav