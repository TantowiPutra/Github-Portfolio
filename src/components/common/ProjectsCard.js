const ProjectsCard = ({ link, title, description }) => {
    const bannerStyling = {
        backgroundImage: "url('https://www.pngmart.com/files/21/Among-Us-Character-PNG-Isolated-Photo.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
    };

    return (
        <div className="max-w-sm rounded shadow-lg">
            <div className="w-full h-[200px] p-2" style={bannerStyling} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 overflow-auto">The Coldest Sunset</div>
                <p className="text-base text-white overflow-auto">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
                <div className="pr-6 pt-4 pb-2 flex w-[100%] overflow-auto scrollbar-thin scrollbar-webkit">
                    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#winter</span>
                    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#winter</span>
                    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#winter</span>
                    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#winter</span>
                    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#winter</span>
                    <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">#winter</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectsCard