import Image from "next/image";
import Root from "@/public/blog/react/rootstructure.png";

const ReactImage = () => {
  return (
    <div className="flex">
      <Image
        src={Root}
        alt="root folder structure"
        className="hover:scale-105 focus:scale-105"
      />
    </div>
  );
};
export default ReactImage;
