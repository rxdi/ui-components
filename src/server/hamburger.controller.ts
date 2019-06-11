import { Controller } from '@rxdi/core';
import { Mutation } from '@rxdi/graphql';
import { Subscription, Subscribe, PubSubService } from '@rxdi/graphql-pubsub';
import { HambuergerStatisticsType } from './types/hambuerger-statistics.type';
import { IHambuergerStatisticsType } from '../api-introspection';
import { EffectTypes } from '../api-introspection/EffectTypes';

@Controller({
  type: HambuergerStatisticsType
})
export class HambuergerController {
  private payload: IHambuergerStatisticsType = { clicks: 1 };

  constructor(private pubsub: PubSubService) {}

  @Mutation()
  clickHamburgerButton(): IHambuergerStatisticsType {
    this.payload.clicks++;
    return this.payload;
  }

  @Subscribe(function(this: HambuergerController) {
    return this.pubsub.asyncIterator(EffectTypes.clickHamburgerButton);
  })
  @Subscription()
  subscribeToStatistics(payload: IHambuergerStatisticsType): IHambuergerStatisticsType {
    return payload;
  }
}
