import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule, Store, Action, Selector, State, StateContext } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ObjektDisplayComponent } from './objekt-display/objekt-display.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ObjektState } from './shared/states/objekts-state';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    ShoppingCartComponent,
    ObjektDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot(
      [ObjektState]
    ),
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
