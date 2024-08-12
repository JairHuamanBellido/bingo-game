export interface BingoNumbers {
  key: string;
  label: string;
}

export interface BingoModel {
  id?: number;
  available_numbers: BingoNumbers[];
  selected_numbers: BingoNumbers[];
  last_selected_number: BingoNumbers | null;
}
