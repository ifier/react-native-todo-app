export interface IAction<T extends string> {
  type: T;
}

export interface IActionWithPayload<T extends string, P> extends IAction<T> {
  payload: P;
}

export function createAction<T extends string>(type: T): IAction<T>;
export function createAction<T extends string, P>(
  type: T,
  payload: P
): IActionWithPayload<T, P>;
export function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
}

export type FunctionType = (...args: any[]) => any;
export interface IActionCreatorsMapObject {
  [actionCreator: string]: FunctionType;
}

export type ActionsUnion<A extends IActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;

export type Dispatch<A> = (action: A) => void;

export type BasicAction<T> = IActionWithPayload<string, T>;
