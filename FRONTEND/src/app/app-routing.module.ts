import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjektDisplayComponent } from './objekt-display/objekt-display.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'objekts', component: ObjektDisplayComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '**', redirectTo: 'objekts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
