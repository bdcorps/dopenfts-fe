export type UseTableOptions<D extends object> = {
  columns: any;
  data: any;
} & Partial<{
  initialState: any;
  stateReducer: any;
  useControlledState: any;
  defaultColumn: any;
  getSubRows: any;
  getRowId: any;
  autoResetHiddenColumns: any;
}>;
