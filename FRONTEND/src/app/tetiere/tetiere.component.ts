import { Component, DestroyRef, OnInit, OnDestroy } from '@angular/core';
import { Observable, ReplaySubject, takeUntil } from 'rxjs';
import { ObjektState } from '../shared/states/objekts-state';
import { Store } from '@ngxs/store';
import { Objekt } from '../shared/models/objekt';

@Component({
  selector: 'tetiere',
  templateUrl: './tetiere.component.html',
  styleUrl: './tetiere.component.scss'
})
export class TetiereComponent implements OnInit, OnDestroy {
  badgenum: number = 2;
  nb$: Observable<number>;

  constructor(private store: Store) {
    this.nb$ = this.store.select(ObjektState.getNbObjekts);
  }

  ngOnInit(): void { }

  ngOnDestroy(): void { }
}
