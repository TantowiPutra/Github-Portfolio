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
        <div className="h-content w-full rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl border-2 p-2 relative flex flex-col overflow-hidden fade-down">
            <ImageContainer 
                imgPath={imgPath} 
                classes={"p-2 rounded w-full"} 
                backgroundSize={"100% 100%"}
            />
            <div className="w-full h-full px-6 py-4 flex flex-col overflow-hidden">
                <div className="font-bold xl:text-xl lg:text-lg text-base mb-2 overflow-auto mb-5">{title}</div>
                <p className="xl:text-base lg:text-md text-sm text-white overflow-auto font-mono">
                    {description}
                </p>

                <div className="max-w-[95%] flex w-full overflow-auto scrollbar-thin scrollbar-webkit mt-auto h-content">
                    {techStackEntry}
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard