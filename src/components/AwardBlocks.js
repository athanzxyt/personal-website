// src/components/AwardBlocks.js

const AwardBlock = ({ award, organization, year, details }) => {
  return (
    <div className="pb-2 md:pb-3">
      <h2 className="text-sm md:text-base">{organization}</h2>
      <p className="italic text-zinc-500 text-xs md:text-sm">{award}</p>
    </div>
  )
};

export default function AwardBlocks({ awards }) {
  return (
    <>
      {awards.map(award => (
        <AwardBlock
          award={award.award}
          organization={award.organization}
          year={award.year}
        />
      ))}
    </>
  )
};
