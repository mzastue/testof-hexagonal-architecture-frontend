import { Team } from "./team.model";

export interface TeamApi {
  create: (payload: Pick<Team, "name">) => Promise<Team>;
  findAll: () => Promise<Team[]>;
}
