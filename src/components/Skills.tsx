import skills from "../config/skills";
import DecryptedText from "./React-Bits/DcryptedText";

const Skills = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-6">
                {skills.map((skill: string) => (
                    <div className="bg-gray-900 rounded-xl p-4 flex items-center justify-center transform transition-transform hover:scale-105 hover:bg-black">
                        {/* <span className="text-lg montserrat-regular ">{skill}</span> */}

                        <DecryptedText
                            text={skill}
                            animateOn="view"
                            revealDirection="center"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
