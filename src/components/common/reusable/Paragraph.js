const Paragprah = ({children}) => {
    return (
        <div className="first-paragprah mb-3 lg:text-lg md:text-md font-mono" dangerouslySetInnerHTML={{ __html: children }}></div>
    );
}

export default Paragprah;