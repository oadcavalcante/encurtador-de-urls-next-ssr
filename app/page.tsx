import URLForm from "./components/URLForm";

export default function HomePage() {
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-2">Centro de Computação da Aeronáutica de Brasília</h1>
              <h2 className="card-title text-center mb-2">Encurtador de URLs</h2>
              <URLForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
