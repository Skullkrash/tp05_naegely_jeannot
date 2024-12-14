import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ObjektDisplayComponent } from './objekt-display/objekt-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    ShoppingCartComponent,
    ObjektDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
