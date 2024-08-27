// parse yml file

import { Experience, Project } from "@/models/static.model";
import fs from "fs";
import yaml from "js-yaml";

const parseYaml = (path: string): any => {
  const file = fs.readFileSync(path, "utf8");
  return yaml.load(file, { schema: yaml.JSON_SCHEMA });
};

const GetExperiences = (): Experience[] => {
  const path = "src/data/experiences.yml";

  const data = parseYaml(path) as { experiences: Experience[] };
  return data.experiences;
};

const GetProjects = (): Project[] => {
  const path = "src/data/projects.yml";

  const data = parseYaml(path) as { projects: Project[] };
  return data.projects;
};

export { GetExperiences, GetProjects };
