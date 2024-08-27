import Skeleton from "react-loading-skeleton";
import classNames from "utils/classNames";

const ImageContainer = ({ imgPath, classes, backgroundSize, isLoading, width, height, isBgHidden}) => {
    const bannerStyling = {
        backgroundImage: `url(${imgPath})`,
        backgroundSize: backgroundSize,
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat'
    };

    const imgStyling = {
        'width': width,
    };
    
    // KALAU BG HIDDEN, OTOMATIS SHOW GAMBAR SEBAGAI IMG ELEMENT (IDK THIS MIGHT NOT BE THE BEST PRACTICE LOL)
    const innerHtml = isBgHidden ? <img src={imgPath} alt="techStack" style={imgStyling}/> : '';

    return (
        // <div className={classNames("p-2 mx-auto", classes)} style={bannerStyling}>
        //     { isLoading ? <Skeleton width={width} height={height} /> : ''}
        // </div>

        <div className={classNames("p-2 mx-auto flex items-center justify-center", classes)} style={!isBgHidden ? bannerStyling : {}}>
            { isLoading ? <Skeleton width={width} height={height} /> : innerHtml}
        </div>
    );
}

export default ImageContainer