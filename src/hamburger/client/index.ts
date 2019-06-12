import { Module } from '@rxdi/core';
import { HamburgerComponent } from './hamburger.component';

@Module({
  components: [HamburgerComponent]
})
export class HamburgerClientModule {}