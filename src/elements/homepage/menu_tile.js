import { LitElement, html} from 'lit-element';
import { we4eStyles } from '../../styles/we4e-styles.js';


class menuTile extends LitElement {
  // Get the styles
  static get styles() {
    return [
      we4eStyles,
    ]
  }

  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      // use .appConf in the HTML tag to send a configuration JS object to
      // configure the tile the `.` tells the webcomponents not to serialise or
      // stringify the object
      appConf: {type: Object, attribute:false}
    };
  }

  constructor() {
    super();
    this.appConf = {};
  }

  render() {
    // create static data paths
    this.appPage = `/public/app_modules/${this.appConf.appName}/index.html`;
    this.appImg = `/public/img/${this.appConf.appName}.png`;
    return html`
        <a href=${this.appPage}>
        <div class='card'>
          <div>
            <img class="centred main-menu-figure" src=${this.appImg} alt="${this.appConf.appName} icon" />
          </div>
          <div class="main-menu-card-title">${this.appConf.appTitle}</div>
          <div class="main-menu-card-description">${this.appConf.appDescription}</div>
        </div>
        </a>
    `;
  }

}

customElements.define('menu-tile', menuTile);