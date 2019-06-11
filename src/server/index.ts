import { Module } from '@rxdi/core';
import { HambuergerController } from './hamburger.controller';
import { HambuergerControllerEffect } from './hamburger-controller.effect';

@Module({
  controllers: [HambuergerController],
  effects: [HambuergerControllerEffect]
})
export class HamburgerServerModule {}
