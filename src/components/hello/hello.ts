import {
  LitElement,
  html,
  css,
  TemplateResult,
  CSSResultGroup
} from 'lit';

export class Hello extends LitElement {
  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <div class="hello">
        Hello world!
      </div>
    `
  }
}

