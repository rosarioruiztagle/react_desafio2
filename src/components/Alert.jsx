// debo admitir que aqui me ayudo chatgpt //

const Alert = ({ tipo, mensaje }) => {
  let color;
  switch (tipo) {
    case "success":
      color = "success";
      break;
    case "warning":
      color = "warning";
      break;
    case "danger":
      color = "danger";
      break;
    default:
      color = "info";
  }

  return (
    <div className={`alert alert-${color}`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;
