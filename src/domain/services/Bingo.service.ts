import { BingoDatabaseRepository } from "@/infrastructure/db/BingoDatabase";

export class BingoService {
  static async create() {
    return await BingoDatabaseRepository.add();
  }
}
