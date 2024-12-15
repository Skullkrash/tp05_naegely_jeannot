import { Objekt } from "../models/objekt";

export class AddObjekt {
  static readonly type = '[Objekt] Add';
  constructor(public payload: Objekt) {}
}

export class DelObjekt {
  static readonly type = '[Objekt] Del';

  constructor(public payload: Objekt) {}
}
