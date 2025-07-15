import { Download } from "lucide-react";
import ScrambledText from "./React-Bits/ScrampledText";

const Resume = () => {
    return (
        <section className="w-full">
            <div className="flex justify-center">
                <a
                    href="resume.pdf"
                    download
                    className="flex items-center gap-3 px-6 py-4 bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors group"
                >
                    <Download className="w-6 h-6 text-gray-400 group-hover:text-white" />
                    {/* <span className="text-base sm:text-lg text-gray-300 group-hover:text-white font-medium">
                        Download Resume
                    </span> */}
                <ScrambledText
  className="scrambled-text-demo"
  radius={100}
  duration={1.2}
  speed={0.5} 
>
 Download Resume
</ScrambledText>
                </a>
            </div>
        </section>
    );
};

export default Resume;
