import { a as p } from './470d2e29.js';
import { t as s } from './a37c4663.js';
import { A as t } from './c8c58915.js';
class e extends t {
  constructor() {
    super(),
      (this.appName = p.appName),
      (this.title = p.appPageTitle),
      (this.appWebComponents = p.appWebComponents),
      (this.resetApp = p.appWebComponents),
      (this.output = {}),
      (this.appTiles = this.makeAppTiles()),
      (this.appCalc = s);
  }
}
customElements.define(`${p.appName}-app`, e);
export { e as App };
