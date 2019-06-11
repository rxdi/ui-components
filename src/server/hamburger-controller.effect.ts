import { Effect } from '@rxdi/core';
import { PubSubService } from '@rxdi/graphql-pubsub';
import { OfType } from '@rxdi/graphql';
import { EffectTypes } from '../api-introspection/EffectTypes';
import { IHambuergerStatisticsType } from '../api-introspection';

@Effect()
export class HambuergerControllerEffect {

  constructor(private pubsub: PubSubService) {}

  @OfType(EffectTypes.clickHamburgerButton)
  clickHamburgerButtonAction(result: IHambuergerStatisticsType) {
    this.pubsub.publish(EffectTypes.clickHamburgerButton, result);
  }
}
