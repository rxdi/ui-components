import { Module } from '@rxdi/core';
import { HamburgerComponent } from './components/hamburger/hamburger.component';

@Module({
    components: [HamburgerComponent]
})
export class HamburgerClientModule {}
