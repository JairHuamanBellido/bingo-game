import Dexie, { Table } from "dexie";
import { BingoModel } from "../interface";

class BingoDatabase extends Dexie {
  bingoDatabase!: Table<BingoModel, number>;

  constructor() {
    super("bingo");
    this.version(1).stores({
      bingoDatabase: "++id",
    });
  }
}

export const BingoDatabaseRepository = new BingoDatabase();
