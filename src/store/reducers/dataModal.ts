export interface baseStateModal {
  entitiesState: EntitiesStateModal;
  historyState: HistoryStateModal;
}

export interface EntitiesStateModal {
  entities: EntityModal[];
  selectedEntity?: EntityModal;
}

export interface EntityModal {
  title: string;
  code: string;
  link: string;
}

export interface EntityActionType {
  type: string;
  payload?: EntitiesStateModal
}

export interface HistoryStateModal {
  records: HistoryModal[];
  isLoading?: boolean;
}

export interface HistoryActionType {
  type: string;
  payload?: HistoryStateModal
}

export interface HistoryModal {
  Date: string;
  Open: number;
  High: number;
  Low: number;
  'Adj Close': number;
  Close: number;
  Volume: number;
}