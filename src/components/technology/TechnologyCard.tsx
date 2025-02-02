import techImage from "../../assets/techImage.avif";

const TechnologyCard = ({
  technologies,
}: {
  technologies: { title: string; name: string; des1: string; des2: string };
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shadow-md p-6 rounded-lg mt-6">
      <div>
        <h3 className="text-xl text-blue-600 font-semibold pb-6">
          {technologies?.title}
        </h3>
        <h1 className="text-4xl font-semibold pb-6">{technologies?.name}</h1>
        <p>{technologies?.des1}</p>
        <p>{technologies?.des2}</p>
      </div>
      <div>
        <img src={techImage} alt="" />
      </div>
    </div>
  );
};

export default TechnologyCard;
