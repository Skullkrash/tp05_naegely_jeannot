import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddObjekt, DelObjekt } from '../actions/objekt-actions';
import { ObjektStateModel } from './objekt-state-model';
import { Objekt } from '../models/objekt';

@State<ObjektStateModel>({
  name: 'objekts',
  defaults: {
    objekts: [],
  },
})

@Injectable()
export class ObjektState {

  @Selector()
  static getObjekts(state: ObjektStateModel): Objekt[] {
    return state.objekts;
  }

  @Selector()
  static getNbObjekts(state: ObjektStateModel) : number {
    return state.objekts.length;
  }

  @Action(AddObjekt)
    add(
      { getState, patchState }: StateContext<ObjektStateModel>,
      { payload }: AddObjekt
    ) {
    let state = getState();
    patchState({ objekts: [...state.objekts, payload] });
  }

  @Action(DelObjekt)
  del(
    { getState, patchState }: StateContext<ObjektStateModel>,
    { payload }: DelObjekt
  ) {
    const state = getState().objekts;
    patchState({ objekts: state.filter(
      objekt => !(payload.name == objekt.name)
    ) });
  }
}
