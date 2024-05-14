export default function Container(param) {
    return (
        // Should not cause any harm, since there's no user generated content 
        <div className="content mt-4 text-justify" dangerouslySetInnerHTML={{ __html:param.content }}/>
    )
}