// app/experience/page.js

import WorkHistoryBlocks from "@/components/WorkHistoryBlocks";
import EducationBlocks from "@/components/EducationBlocks";
import AwardBlocks from "@/components/AwardBlocks";
import getExperienceMetadata from "@/utils/getExperienceMetadata";


export default async function ExperiencePage() {
  const workHistory = getExperienceMetadata({ experienceType: "workHistory" });
  const education = getExperienceMetadata({ experienceType: "education" });
  const awards = getExperienceMetadata({ experienceType: "awards" });  

  return (
    <main>
      <div className="text-sm md:text-base text-zinc-500 pb-8">
        <p>
          The technical background and experiences that have been 
          instrumental in shaping my career. It's forged my technical
          skills and given me the opportunity to work with some amazing
          people.
        </p>
      </div>
      <h1 className="text-2xl font-medium pb-3">Work History</h1>
      <WorkHistoryBlocks workHistory={workHistory} currentOnly={false} />
      <h1 className="text-2xl font-medium py-3">Education</h1>
      <EducationBlocks education={education} />
      <h1 className="text-2xl font-medium pt-8 py-3">Awards</h1>
      <AwardBlocks awards={awards} />
    </main>
  );
}
