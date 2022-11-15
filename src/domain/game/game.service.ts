import { Team } from "../team";
import { Game } from "./game.model";

export interface GameService {
  createMatch: (teams: [Team["id"], Team["id"]]) => Game;
  updateResult: (game: Game, result: Game["result"]) => void;
}
