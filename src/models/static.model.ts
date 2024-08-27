interface Experience {
  role: string;
  display: boolean;
  company: string;
  company_url: string;
  company_logo: string;
  start_date: string;
  end_date: string;
  location: string;
  points: string[];
}

interface Project {
  display: boolean;
  title: string;
  abstract: string;
  start_date: string;
  status: "In Progress" | "Completed" | "On Hold";
  tech_stack: string[];
  github_url: string;
  project_url: string;
}

export type { Experience, Project };
