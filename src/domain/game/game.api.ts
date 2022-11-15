import { Game } from "./game.model";

export interface TeamApi {
  create: (payload: Pick<Game, "teams">) => Promise<Game>;
  updateResult: (gameId: Game["id"], result: Game["result"]) => Promise<void>;
  findAll: () => Promise<Game[]>;
}
