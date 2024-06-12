import Skeleton from "react-loading-skeleton";
import classNames from "utils/classNames";

const ImageContainer = ({ imgPath, classes, backgroundSize, isLoading, width, height }) => {
    const bannerStyling = {
        backgroundImage: `url(${imgPath})`,
        backgroundSize: backgroundSize,
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
    };

    return (
        <div className={classNames("p-2 mx-auto", classes)} style={bannerStyling}>
            { isLoading ? <Skeleton width={width} height={height} /> : ''}
        </div>
    );
}

export default ImageContainer