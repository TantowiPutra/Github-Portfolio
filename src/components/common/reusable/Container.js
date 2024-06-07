const Container = ({ children }) => {
    return (
        <div className="container mx-auto h-content max-w-[900px] w-full text-white flex flex-col items-center ">
            {children}
        </div>
    );
}

export default Container;
