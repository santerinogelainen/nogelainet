import React from "react";
import ProjectImage from "./ProjectImage";

type ProjectImagesProps = {
  images: string[];
  visible?: boolean;
};

const ProjectImages = ({ images, visible }: ProjectImagesProps) => {
  return (
    <div className="project-images">
      {images.map((img) => (
        <ProjectImage enabled={visible} src={img} key={img} />
      ))}
    </div>
  );
};

export default ProjectImages;
