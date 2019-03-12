export type KeyType = undefined | number | string | number[] | string[];
export type KeysType = number[] | string[];

export type KeyPropsType = {
  activeKey?: KeyType,
  activeKeys?: KeysType,
  checkedKeys?: KeysType,
  expandedKeys?: KeysType,
  loadedKeys?: KeysType,
  selectedKeys?: KeysType,
  openKeys?: KeysType
};

export type VisiblePropsType = {
  visible: boolean
};

export type PaginationPropsType = {
  current: number,
  pageSize: number,
  total: number
};

export type FiltersType = {
  [propName: string]: string 
};

export type SorterType = {
  column: any,
  columnKey: string,
  field: string,
  order: "ascend" | "descend"
};

export type TablePropsType = {
  expandedRowKeys?: KeysType,
  pagination?: PaginationPropsType | false,
  filters?: FiltersType,
  sorter?: SorterType
};

export type FieldType = {
  name: string,
  value: any,
  errors?: string[],
  validating?: boolean,
  dirty?: boolean,
  touched?: boolean
};

export type FieldsType = {
  [propName: string]: FieldType
};

export type ValuesType = {
  [propName: string]: any 
};

export type ErrorsType = {
  [propName: string]: string[] | undefined
};

export type FieldStatusType = {
  [propName: string]: boolean
};

export type LoadPropsType = {
  loading: boolean
};

export type ModalPropsType = {
  visible: boolean, 
  [propName : string]: any
};