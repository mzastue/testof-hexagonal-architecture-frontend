import { Team } from "../team";

export interface Game {
  id: number;
  teams: [Team, Team];
  result: [number, number];
}
