import { html, Component } from '@rxdi/lit-html';

/**
 * @customElement app-component
 */
@Component({
  selector: 'app-component',
  template: () => html`
    <!-- <router-outlet></router-outlet> -->
    <hamburger-component enableBackendStatistics=${true}></hamburger-component>
  `,
  container: document.body
})
export class AppComponent extends HTMLElement {}
