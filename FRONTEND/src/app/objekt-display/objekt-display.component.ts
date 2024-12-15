import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Objekt } from '../shared/models/objekt';
import { AddObjekt } from '../shared/actions/objekt-actions';

@Component({
  selector: 'objekt-display',
  templateUrl: './objekt-display.component.html',
  styleUrl: './objekt-display.component.scss'
})
export class ObjektDisplayComponent implements OnInit {
  displayedObjekts: Objekt[] = [
    {
      name: "A better C++ teacher",
      unitPrice: 50000,
      numberToBuy: 1
    },
    {
      name: "Kitty cat treats",
      unitPrice: 3,
      numberToBuy: 1
    },
    {
      name: "A single banana",
      unitPrice: 15,
      numberToBuy: 1
    },
    {
      name: "Le pouler de pouler.fr",
      unitPrice: NaN,
      numberToBuy: 1
    },
    {
      name: "More style for this page",
      unitPrice: 500,
      numberToBuy: 1
    }
  ]

  constructor(private store: Store) {

  }

  ngOnInit(): void { }

  public addObjekt(newObjektForCart: Objekt) : void {
    this.store.dispatch(new AddObjekt(newObjektForCart));
    console.log("Should have sent objekt \"" + newObjektForCart.name + "\" to store...");
  }
}
