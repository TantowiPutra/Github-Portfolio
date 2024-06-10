import classNames from "utils/classNames.";

const Badge = ({filter, onClick, active}) => {
    return (
        // Jika filter sedang aktif, tambahkan bg-slate-700s
        <button className={classNames("border border-white p-2", active && "bg-slate-700")} onClick={onClick}>
            {filter}
        </button>
    );
}

export default Badge;