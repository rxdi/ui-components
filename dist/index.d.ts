import { HamburgerComponent } from './client/components/hamburger/hamburger.component';
export * from './client/index';
export * from './server/index';
declare global {
    interface HTMLElementTagNameMap {
        'hamburger-component': HamburgerComponent;
    }
}
