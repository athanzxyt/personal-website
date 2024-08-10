// src/app/page.js

import Image from "next/image";
import Link from "next/link";

import ProjectCards from "@/components/ProjectCards";
import WorkHistoryBlocks from "@/components/WorkHistoryBlocks";
import getProjectsMetadata from "@/utils/getProjectsMetadata";
import getExperienceMetadata from "@/utils/getExperienceMetadata";
import Navbar from "@/components/Navbar";

export default function Home() {
  const projects = getProjectsMetadata();
  const workHistory = getExperienceMetadata({ experienceType: "workHistory" });

  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <div className='text-sm md:text-base text-zinc-500'>
          <p>
            {`I'm currently an undergraduate at Princeton in an accelerated
            track studying Computer Science. Currently I'm helping build
            backend machine learning pipelines and advising with strategy at `}
            <Link href='https://vytal.ai' className="hover:text-purple-600 font-bold">Vytal</Link>
            {`, a startup I helped start with a few friends back in high school.`}
            <br />
            <br />
            {`On campus, I'm primarily involved with pursuing research in the
            field of Human-Computer Interaction and working at `}
            <Link href='pvc.vc' className="hover:text-orange-400 font-bold">Prospect Student Ventures</Link>
            {` (Princeton's student-run VC), as the Director of Founder Support. 
            In my free time, I enjoying training for triathlons (swim, bike, run),
            lifting, `}
            <Link href='https://www.goodreads.com/athanzhang' className="hover:text-red-600 font-bold">reading</Link>
            {` (or at least trying to), and `}
            <Link href='x.com' className="hover:text-blue-500 font-bold">following</Link>
            {` the latest trends in tech.`}
          </p>
        </div>

        <div className="grid grid-cols-2 grid-rows-4 md:grid-rows-3 md:grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="My team and I at the 2023 Wharton Investment Competition finals, where we won 1st place"
            src={'/gallery/investmentfinals.jpg'}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative md:row-span-2 row-span-1">
          <Image
            alt="Me and a friend at our high school graduation"
            src={'/gallery/hsgraduation.jpg'}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative">
          <Image
            alt="Me and the Singapore TigerLaunch delegation visiting a buddhist temple"
            src={'/gallery/temple.jpg'}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="Me at IBM's quantum computing lab in New York"
            src={'/gallery/quantumcomputer.jpg'}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative row-span-2">
          <Image
            alt="My friends and I finally becoming official Computer Science majors"
            src={'/gallery/majordeclaration.jpg'}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me moderating a startup panel at the 2023 TigerLaunch finals"
            src={'/gallery/moderating.jpg'}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>

        <div>
          <h1 className="font-serif text-lg md:text-2xl pb-3">Featured Projects</h1>
          <ProjectCards projects={projects} featuredOnly={true} />
        </div>

        <div>
          <h1 className="font-serif text-lg md:text-2xl pb-3">Currently Working At</h1>
          <WorkHistoryBlocks workHistory={workHistory} currentOnly={true} />
        </div>
      </main>    
    </>
  );
}
