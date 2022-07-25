

const Paciente = () => {
    return (
        <div className="bg-white shadow-md  mx-5 my-10 px-5 py-10 rounded-xl">

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {" "}
                <span className=" font-normal normal-case">Alpha</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {" "}
                <span className=" font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {" "}
                <span className=" font-normal normal-case">10 Diciembre 2022</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas: {" "}
                <span className=" font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit suscipit nam numquam voluptates? Placeat mollitia vitae incidunt distinctio? Tenetur nemo non tempore! Esse consequuntur laborum possimus ratione, blanditiis hic necessitatibus?</span>
            </p>

        </div>
    )
}

export default Paciente
