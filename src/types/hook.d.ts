export interface IUseSelectMaterialHook {
  (): [string[], (material: string) => void];
}

export interface IUseMapStringSearchHook {
  (seearchString: string): [Awaited<string[]>];
}
