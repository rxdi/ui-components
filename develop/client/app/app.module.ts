import { Module } from '@rxdi/core';
import { GraphqlModule } from '@rxdi/graphql-client';
import { AppComponent } from './app.component';
import { HamburgerComponent } from '../../../src/hamburger/client/hamburger.component';

@Module({
  components: [HamburgerComponent],
  imports: [
    GraphqlModule.forRoot(
      {
        uri: 'http://localhost:9000/graphql'
      },
      {}
    ),
    // RouterModule.forRoot(
    //   [
    //     {
    //       path: '/',
    //       component: HamburgerComponent
    //     }
    //   ],
    //   { log: true }
    // ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
