// app/projects/page.js

import ProjectBoxes from "@/components/ProjectBoxes";

export default function ProjectsPage() {
  return (
    <main>
      <div className="text-sm md:text-base text-zinc-500 pb-8">
        <p>
          The following are some of the projects I've worked on in the past. 
          I'm always looking for new opportunities to collaborate on 
          interesting projects, so feel free to reach out if you have any ideas!
        </p>
      </div>
      {/* <ProjectBoxes projects={projects} featuredOnly={false}/> */}
    </main>
  );
}
