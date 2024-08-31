import { GetExperiences } from "@/lib/utils/static.util";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Experiences: React.FC = () => {
  const experiencesData = GetExperiences();

  return (
    <section className="container mx-auto px-4 py-20 md:py-32 md:w-2/5 w-full sm:container">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Experiences</h2>
          <p className="text-muted-foreground">
            Check out my work history.
          </p>
        </div>
        <div className="space-y-6 mx-auto ml-6">
          <ol className="relative border-s border-x-gray-200 dark:border-gray-700">
            {experiencesData.map((experience, index) => (
              <li key={index} className="mb-10 ms-9">
                {/* <div className="absolute bg-gray-200 w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-400 dark:bg-gray-300" /> */}
                <div className="absolute w-9 h-9 mt-0 -start-5 rounded-full bg-current">
                  <Image
                    src={experience.company_logo}
                    alt={experience.company}
                    width={50}
                    height={50}
                    className="rounded-full"
                    // layout="cover"
                  />
                </div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-100">
                  {experience.start_date} - {experience.end_date}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {experience.role}
                </h3>
                <Link
                  href={experience.company_url}
                  prefetch={false}
                  className="text-base font-normal text-gray-500 dark:text-gray-400"
                >
                  <p>{experience.company}</p>
                </Link>
                <p className="text-base font-light text-gray-500 dark:text-gray-400">
                  {experience.location}
                </p>
              </li>
            ))}
          </ol>

          {/* <div className="grid gap-4 md:grid-cols-2">
            {experiencesData.map((experience, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold">{experience.role}</h3>
                <p className="text-muted-foreground">
                  <span className="font-semibold">
                    <Link
                      href={experience.company_url}
                      prefetch={false}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {experience.company}
                    </Link>{" "}
                    | {experience.location}
                  </span>
                </p>
                <p className="text-muted-foreground">
                  {experience.start_date}- {experience.end_date}
                </p>
                <ul className="mt-2 space-y-2 text-muted-foreground">
                  {experience.points.map((point, idx) => (
                    <li key={idx} className="list-disc list-inside">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

// const experiencesData = [
//   {
//     role: "DevOps Engineer",
//     company: "Acme Inc.",
//     duration: "2020 - Present",
//     points: [
//       "Designed and implemented a robust CI/CD pipeline, reducing deployment time by 50%.",
//       "Automated infrastructure provisioning and management using Terraform and Ansible, improving reliability and scalability.",
//       "Implemented a comprehensive monitoring and observability solution, providing real-time insights into system performance."
//     ]
//   },
//   {
//     role: "Site Reliability Engineer",
//     company: "Globex Corp.",
//     duration: "2018 - 2020",
//     points: [
//       "Developed and maintained a highly available and scalable infrastructure for a mission-critical web application.",
//       "Implemented automated incident response and remediation processes, reducing downtime by 80%.",
//       "Collaborated with cross-functional teams to identify and address performance bottlenecks, improving overall system reliability."
//     ]
//   }
// ];

export default Experiences;
