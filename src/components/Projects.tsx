import projects from "../config/project";
import { bgColor } from "../config/project";
import { ExternalLink } from "lucide-react";
import SpotlightCard from "./React-Bits/SpotLight";

const Projects = () => {
    interface Projects {
        projectName: string;
        websiteUrl: string;
        description: string;
        skills: string[];
    }

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {projects.map((pro: Projects) => (
                <div className="bg-gray-900 rounded-xl gradient-border w-[17rem] h-[17rem] shadow-lg border border-gray-800 transform transition-all">
                    <SpotlightCard
                        className="custom-spotlight-card"
                        spotlightColor="rgba( 39, 183, 212, 0.8)"
                    >
                        <div className="flex justify-between items-start px-5 pt-7">
                            <h3 className="text-2xl font-bold text-gray-200 nunito-regular">
                                {pro.projectName}
                            </h3>
                            <a
                                href={pro.websiteUrl}
                                target="blank"
                                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                            >
                                <ExternalLink size={16} />
                            </a>
                        </div>
                        <div className="py-3 px-5">
                            <p className="text-gray-400 mb-4 line-clamp-3 nunito-regular">
                                {pro.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 px-5 py-1 line-clamp-1">
                            {pro.skills.map((skill: string, index: number) => (
                                <span
                                    className={`px-3 py-1 ${bgColor[index]} bg-gray-800 text-xs rounded-full text-blue-400`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </SpotlightCard>
                </div>
            ))}
        </div>
    );
};

export default Projects;
