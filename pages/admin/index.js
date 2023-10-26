import download from "@/components/elements/admin/dwnld";
import Statistics from "@/components/elements/admin/stat";

export default function Home() {
  return (
    <div className="container vh-100">
      <div className="row align-items-center h-100">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="fw-bold text-center">Selamat Datang Admin</h3>
          <p>Statistik:</p>
          <Statistics />
          <button className="btn btn-outline-primary text-center" onClick={download}>
            Download Data User
          </button>
        </div>
      </div>
    </div>
  );
}
