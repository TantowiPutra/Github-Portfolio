const Container = ({ children }) => {
    return (
        <div className="container h-content w-full text-white flex flex-col items-center ">
            {children}
        </div>
    );
}

export default Container;
