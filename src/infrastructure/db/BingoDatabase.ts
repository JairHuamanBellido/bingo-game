import Dexie, { Table } from "dexie";
import { BingoModel } from "../interface";
import { defaultNumberOptions } from "@/core/default-number-option";

class BingoDatabase extends Dexie {
  bingoDatabase!: Table<BingoModel, number>;

  constructor() {
    super("bingo");
    this.version(1).stores({
      bingoDatabase: "++id",
    });
  }

  async add() {
    return await this.bingoDatabase.add({
      available_numbers: defaultNumberOptions,
      last_selected_number: null,
      selected_numbers: [],
    });
  }
}

export const BingoDatabaseRepository = new BingoDatabase();
