import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { GetProjects } from "@/lib/utils/static.util";
import { FaGithub, FaGolang } from "react-icons/fa6";
import { GiSpiderWeb } from "react-icons/gi";
import { Button } from "../ui/button";

const Projects: React.FC = () => {
  let projects = GetProjects();

  // sort projects by date
  projects.sort((a, b) => {
    return new Date(b.start_date).getTime() - new Date(a.start_date).getTime();
  });

  // remove projects with `display="false"`
  projects = projects.filter((project) => project.display == true);

  return (
    <section className="bg-muted py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Recent Projects
            </h2>
            <p className="text-muted-foreground">
              Check out some of my recent work.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-md">
                    {project.abstract}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* list tech stack */}
                  <div>
                    {project.tech_stack.map((tech, idx) => (
                      <Button
                        key={idx}
                        className="mr-2 py-1 px-2"
                        variant="outline"
                        disabled={true}
                        size={"sm"}
                        color="primary"
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex flex-row gap-4">
                  {project.github_url && (
                    <Link
                      href={project.github_url}
                      prefetch={false}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="inline-block" size={20} />
                    </Link>
                  )}

                  {project.project_url && (
                    <Link
                      href={project.project_url}
                      prefetch={false}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GiSpiderWeb className="inline-block" size={20} />
                    </Link>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// const projectsData = [
//   {
//     title: "CI/CD Pipeline",
//     description:
//       "Designed and implemented a robust CI/CD pipeline for a large-scale web application, improving deployment efficiency and reducing manual errors.",
//     link: "#",
//   },
//   {
//     title: "Infrastructure Automation",
//     description:
//       "Developed a comprehensive infrastructure automation solution using Terraform and Ansible, enabling self-healing and scalable cloud environments.",
//     link: "#",
//   },
//   {
//     title: "Monitoring and Observability",
//     description:
//       "Implemented a robust monitoring and observability solution using Prometheus, Grafana, and Elasticsearch, providing real-time insights into system performance.",
//     link: "#",
//   },
//   {
//     title: "Monitoring and Observability",
//     description:
//       "Implemented a robust monitoring and observability solution using Prometheus, Grafana, and Elasticsearch, providing real-time insights into system performance.",
//     link: "#",
//   },
//   {
//     title: "Monitoring and Observability",
//     description:
//       "Implemented a robust monitoring and observability solution using Prometheus, Grafana, and Elasticsearch, providing real-time insights into system performance.",
//     link: "#",
//   },
//   {
//     title: "Monitoring and Observability",
//     description:
//       "Implemented a robust monitoring and observability solution using Prometheus, Grafana, and Elasticsearch, providing real-time insights into system performance.",
//     link: "#",
//   },
// ];

export default Projects;
