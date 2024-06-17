import ItemTag from "components/common/reusable/ItemTag"
import ImageContainer from "./reusable/ImageContainer"

const ProjectsCard = ({ imgPath, title, description, techStack}) => {
    const techStackEntry = techStack.map((item) => (
        <ItemTag
            key={item}
            tag={item}
        />
    ))

    return (
        <div className="w-full rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl border-2 p-2 relative flex flex-col overflow-hidden fade-down">
            <ImageContainer 
                imgPath={imgPath} 
                classes={"p-2 rounded w-full aspect-square"} 
                backgroundSize={"100% 100%"}
            />
            <div className="w-full px-4 py-3 flex flex-col">
                <div className="font-bold xl:text-xl lg:text-lg text-base mb-2 overflow-auto mb-5">{title}</div>
                <p className="xl:text-base lg:text-md text-sm text-white overflow-auto font-mono">
                    {description}
                </p>
            </div>

            <div className="px-4 py-3 max-w-[95%] flex overflow-auto scrollbar-thin scrollbar-webkit h-content mt-auto">
                {techStackEntry}
            </div>
        </div>
    )
}

export default ProjectsCard