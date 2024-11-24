const HeaderMenu = ({title}) => {
    return (
        <div>
            <div className="bg-slate-900 p-8">
                <h1 className="text-2xl font-bold text-white">{title}</h1>
            </div>
        </div>
    );
}

export default HeaderMenu