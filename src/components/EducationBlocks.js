// src/components/EducationBlocks.js

const EducationBlock = ({ school, years, degree, major }) => {
  return (
    <div className="pb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-base md:text-lg pb-1">{school}</h2>
        <p className="text-xs md:text-sm text-secondary">{years}</p>
      </div>
      <p className="text-xs md:text-sm text-zinc-500">{degree}</p>
      <p className="text-xs md:text-sm text-zinc-500 italic">{major}</p>
    </div>
  );
};

export default function EducationBlocks({ education }) {
  return (
    <>
      {education.map(educationItem => (
        <EducationBlock
          key={educationItem.school}
          school={educationItem.school}
          years={educationItem.years}
          degree={educationItem.degree}
          major={educationItem.major}
        />
      ))}
    </>
  )
};