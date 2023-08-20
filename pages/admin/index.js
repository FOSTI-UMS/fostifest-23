import GetDataWebinar from "@/components/elements/admin/get-data-webinar";
import GetDataLomba from "@/components/elements/admin/get-data-lomba";


export default function Home(){
    return(
        <div className="pt-5 mt-5">
            <h3>Selamat Datang, Admin!</h3>
            <hr/>
            <h5>Data Keseluruhan Peserta</h5>
            <GetDataLomba/>
            <GetDataWebinar/>
        </div>
    )
}