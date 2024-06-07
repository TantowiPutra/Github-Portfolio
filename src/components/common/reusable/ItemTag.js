const ItemTag = ({tag}) => {
    return (
        <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-slate-100 mr-2 mb-2 text-nowrap">
            {tag}
        </span>
    )
}

export default ItemTag