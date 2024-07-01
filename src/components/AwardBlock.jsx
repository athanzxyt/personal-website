// AwardBlock.jsx

const AwardBlock = ({ award, organization, year, details }) => {
  return (
    <div className="pb-2">
      <h2 className="text-md">{organization}</h2>
      <p className="italic text-zinc-500 text-sm">{award}</p>
    </div>
  )
}

export default AwardBlock;