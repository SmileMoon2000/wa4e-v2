import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement';

export class AppGeneric extends StyledElement {
  static get properties() {
    return {
      appWebComponents: { type: Object },
      title: { type: String },
      output: { type: Object },
      appTiles: { type: html },
      appCalc: { type: Function },
      resetApp: { type: Object },
    };
  }

  render() {
    return [
      super.render(),
      html`
        <div class="row">
          <header-element page-title=${this.title}></header-element>
        </div>
        <div class="container-fluid">${this.appTiles}</div>
        <footer-element></footer-element>
      `,
    ];
  }

  updateComponents() {
    this.output = this.appCalc(
      this.appWebComponents.find(element => element.type === 'input-tile'),
      0,
      0
    );
    // ToDo: these loops take an object from the math output and map it to a tiles fields, these could be functions.
    /* eslint-disable no-restricted-syntax */
    for (const [key, value] of Object.entries(this.output.derivedInputs)) {
      this.appWebComponents.find(
        element => element.type === 'derived-input-tile'
      ).fields[key][0] = value;
    }
    for (const [keyOuter, valueOuter] of Object.entries(this.output.outputs)) {
      for (const [keyInner, valueInner] of Object.entries(valueOuter)) {
        this.appWebComponents.find(
          element => element.type === 'output-tile'
        ).fields[keyOuter][keyInner][0] = valueInner;
      }
    }
    for (const [key, value] of Object.entries(this.output.graphData)) {
      this.appWebComponents.find(
        element => element.type === 'graph-tile'
      ).fields[key] = value;
    }
    /* eslint-enable no-restricted-syntax */
    // Launch new event to update child components
    this.childUpdate();
  }

  resetComponents() {
    this.appWebComponents = this.resetApp;
    this.childUpdate();
  }

  childUpdate() {
    const myEvent = new CustomEvent('update-children', {
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(myEvent);
  }

  /* eslint-disable no-nested-ternary */
  makeAppTiles() {
    return html`<div class="row">
      ${this.appWebComponents.map(
        (component, index) =>
          html`<div class="col-auto">
            ${component.type === 'input-tile'
              ? html`<input-tile
                  .appConf=${this.appWebComponents[index]}
                  @updated="${() => {
                    this.updateComponents();
                  }}"
                  @reset="${() => {
                    this.resetComponents();
                  }}"
                ></input-tile>`
              : component.type === 'derived-input-tile'
              ? html`<derived-input-tile
                  .appConf=${this.appWebComponents[index]}
                ></derived-input-tile>`
              : component.type === 'output-tile'
              ? html`<output-tile
                  .appConf=${this.appWebComponents[index]}
                ></output-tile>`
              : component.type === 'image-tile'
              ? html`<image-tile
                  .appConf=${this.appWebComponents[index]}
                ></image-tile>`
              : component.type === 'graph-tile'
              ? html`<graph-tile
                  .appConf=${this.appWebComponents[index]}
                ></graph-tile>`
              : component.type === 'coeff-tile'
              ? html`<coeff-tile
                  .appConf=${this.appWebComponents[index]}
                ></coeff-tile>`
              : component.type === 'optimisation-tile'
              ? html`<optimisation-tile
                  .appConf=${this.appWebComponents[index]}
                ></optimisation-tile>`
              : html`<p>Component ${component.type} Not Recognised</p>`}
          </div>`
      )}
    </div>`;
  }
  /* eslint-enable no-nested-ternary */
}
