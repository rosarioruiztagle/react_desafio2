import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
const Registro = ({ alerta, setAlerta }) => {
  return (
    <>
      <div className="registro">
        <h1>Crea una cuenta </h1>
        <SocialButton github={"github"} />
        <SocialButton facebook={"facebook"} />
        <SocialButton linkedin={"linkedin"} />
        <p> O usa tu email para crear una cuenta</p>
        <Formulario alerta={alerta} setAlerta={setAlerta} />
      </div>
    </>
  );
};

export default Registro;
