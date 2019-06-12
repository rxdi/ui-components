import { Injector } from '@rxdi/core';
import { GraphqlClient } from '@rxdi/graphql-client';
import {
  QueryOptions,
  MutationOptions,
  SubscriptionOptions
} from 'apollo-boost';
// import { importQuery } from '@rxdi/graphql-client';
import { from, Observable } from 'rxjs';
import { LitElement } from '@rxdi/lit-html';
import { IQuery, ISubscription, IMutation } from '../../introspection';
// import { DocumentTypes } from '../../../../api-introspection/documentTypes';

export class BaseComponent extends LitElement {
  @Injector(GraphqlClient) public graphql: GraphqlClient;

  query<T = IQuery>(options: QueryOptions) {
    // options.query = importQuery(options.query);
    return from(this.graphql.query.bind(this.graphql)(
      options
    ) as any) as Observable<{ data: T }>;
  }

  mutate<T = IMutation>(options: MutationOptions) {
    // options.mutation = importQuery(options.mutation);
    return from(this.graphql.mutate.bind(this.graphql)(
      options
    ) as any) as Observable<{ data: T }>;
  }

  subscribe<T = ISubscription>(options: SubscriptionOptions) {
    // options.query = importQuery(options.query);
    return from(this.graphql.subscribe.bind(this.graphql)(
      options
    ) as any) as Observable<{ data: T }>;
  }
}

// interface ImportQueryMixin extends QueryOptions {
//   query: DocumentTypes;
// }

// interface ImportSubscriptionMixin extends SubscriptionOptions {
//   query: DocumentTypes;
// }

// interface ImportMutationMixin extends MutationOptions {
//   mutation: DocumentTypes;
// }
