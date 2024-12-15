import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObjektState } from '../shared/states/objekts-state';
import { ReplaySubject, takeUntil } from 'rxjs';
import { Objekt } from '../shared/models/objekt';
import { Store } from '@ngxs/store';
import { DelObjekt } from '../shared/actions/objekt-actions';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  Objekts: Objekt[] = [];
  totalPrice: number = 0;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(ObjektState.getObjekts)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(result => {
          this.Objekts = result;
          this.totalPrice = 0;
          this.Objekts.forEach(objekt => this.totalPrice += objekt.unitPrice);
        });
  }

  public removeObjekt(objektToRemove: Objekt) : void {
    this.store.dispatch(new DelObjekt(objektToRemove))
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
