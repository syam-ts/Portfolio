import skills from "../config/skills";

const Skills = () => {

    return (
        <div>
            <div className="grid grid-cols-2 gap-6">
                {skills.map((skill: string) => (
                    <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-center transform transition-transform hover:scale-105 hover:bg-black">
                        <span className="text-lg font-medium ">{skill}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
