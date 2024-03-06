export function Tombol_2({ isiPesan, namaTombol }: { isiPesan: string, namaTombol: string }) {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={() => alert(isiPesan)}>
            {namaTombol}
        </button>
    );
}

export function Tombol_3({ isiPesan, namaTombol }: { isiPesan: string, namaTombol: string }) {
    return (
        <button
            className="bg-green-400 hover:bg-green-700 text-white p-2 rounded m-2"
            onClick={() => {
                alert(isiPesan);
            }}
        >
            {namaTombol}
        </button>
    );
}

export default function Tombol_l() {
    function HandleClick() {
        alert("Tombol telah ditekan!");
    }

    function HandleMouseLeave() {
        alert("Loh, kok sudah pergi!");
    }

    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={HandleClick}
            onMouseLeave={HandleMouseLeave}>
            Ini tombol
        </button>
    );
}