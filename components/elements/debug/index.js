export default async function Debugger() {
    const base_url = process.env.base_url;
    const sekarang = new Date().getTime();
    const d = await fetch(base_url + '/api/pendaftaran');
    const daftar = await d.json();

    return (
        <div>
            <p>{sekarang}</p>
            <p>----</p>
            <p>{daftar.timer.time_end.getTime()}</p>
        </div>
    );
}