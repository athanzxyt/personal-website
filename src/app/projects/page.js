// app/projects/page.js

import ProjectCards from "@/components/ProjectCards";
import getProjectsMetadata from "@/utils/getProjectsMetadata";

export default function ProjectsPage() {
  const projects = getProjectsMetadata();

  return (
    <main>
      <div className="text-sm md:text-base text-zinc-500 pb-8">
        <p>
          The following are some of the projects I've worked on in the past. 
          I'm always looking for new opportunities to collaborate on 
          interesting projects, so feel free to reach out if you have any ideas!
        </p>
      </div>
      <ProjectCards projects={projects} featuredOnly={false}/>
    </main>
  );
}
