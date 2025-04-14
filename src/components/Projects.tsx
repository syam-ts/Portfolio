import projects from "../config/project";
import { bgColor } from "../config/project";
import { ExternalLink } from "lucide-react";

const Projects = () => {

    interface Projects {
        projectName: string
        websiteUrl: string
        description: string
        skills: string[]
    };

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {projects.map((pro: Projects) => (
                <div className="bg-gray-900 p-5 rounded-xl gradient-border w-[17rem] h-[17rem] shadow-lg border border-gray-800 transform transition-all">
                    <div className="flex justify-between items-start mb-4 ">
                        <h3 className="text-2xl font-bold text-gray-200 nunito-regular">
                            {pro.projectName}
                        </h3>
                        <a
                            href={pro.websiteUrl}
                            className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition-colors"
                        >
                            <ExternalLink size={16} />
                        </a>
                    </div>
                    <div className="py-3">
                        <p className="text-gray-400 mb-4 line-clamp-2 nunito-regular">{pro.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 line-clamp-1">
                        {pro.skills.map((skill: string, index: number) => (
                            <span
                                className={`px-3 py-1 ${bgColor[index]} bg-gray-800 text-xs rounded-full text-blue-400`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
