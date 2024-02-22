import { useState } from "react";
import PropTypes, { any, array } from "prop-types";

import "./App.css";

function App() {
  /**Ejercicio 1 */
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoggedIn() {
    setIsLoggedIn(!isLoggedIn);
  }

  /**
   * Ejercicio 2
   */
  const [nombres, setNombres] = useState([
    "Patrick",
    "Pepe",
    "Tarik",
    "Miguel",
  ]);
  const [inputValue, setInputValue] = useState("");

  function añadirNombre() {
    setNombres((nombres) => [...nombres, inputValue]);
  }

  function quitarNombre() {
    //Se puede mejorar con metodos inmutables.
    if (nombres.includes(inputValue)) {
      let indice = nombres.indexOf(inputValue);
      let arrayNombres = Array.from(nombres);
      arrayNombres.splice(indice, 1);
      setNombres(arrayNombres);
    }
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  /**
   * Ejercicio 3
   */

  function handleMensaje() {
    console.log(inputValue);
  }

  /**
   * Ejercicio 4
   */

  function Header({ title }) {
    return (
      <header>
        <h2 className="bg-blue-400  text-2xl	">{title}</h2>
      </header>
    );
  }

  /**
   * Ejercicio 6
   */

  function CustomButton({ colorFondo, texto, callback }) {
    const [colorFondoTw, setColorFondo] = useState("");
    const colores = {
      azul: "bg-blue-500",
      rojo: "bg-red-500",
      verde: "bg-green-500",
    };

    if (colorFondo in colores && colorFondoTw === "") {
      setColorFondo(colores[colorFondo]);
    }

    return (
      <button onClick={callback} className={`${colorFondoTw}`}>
        {texto}
      </button>
    );
  }

  CustomButton.propTypes = {
    colorFondo: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    callback: PropTypes.func,
  };

  function handleEvento() {
    console.log("evento ejercicio 6");
  }
  /**
   * Ejercicio 7
   */
  const [conditionRender, setConditionRender] = useState(false);

  function handleConditionRender() {
    setConditionRender(!conditionRender);
  }

  /**
   * Ejercicio 8
   */
  function Card({ title, body, footer }) {
    return (
      <div className="card bg-yellow-200 border-4 border-blue-200 rounded-xl">
        {title && <div className="card-title">{title}</div>}
        {body && <div className="card-body">{body}</div>}
        {footer && <div className="card-footer">{footer}</div>}
      </div>
    );
  }

  /**
   * Ejercicio 9
   */
  const [conditionRender2, setConditionRender2] = useState(false);

  function handleConditionRender2() {
    setConditionRender2(!conditionRender2);
  }

  Card.propTypes = {
    title: PropTypes.string,
    body: PropTypes.node,
    footer: PropTypes.node,
  };

  /**
   * Ejercicio 10
   */

  function UserList({ listaUsuarios }) {
    return (
      <ol>
        {listaUsuarios.map((usuario, index) => (
          <li key={index}>
            {usuario} indice : <a>{index}</a>
          </li>
        ))}
      </ol>
    );
  }

  /**
   * Ejercicio 11
   */

  function ConditionalRenderAdvanced({ userRole }) {
    return (
      <>
        <p>{isLoggedIn ? "Bienvenido" : "Por favor inicia sesión"}</p>
        {userRole === "admin" ? <p>Privilegios de administrador</p> : ""}
        <button onClick={handleLoggedIn}>Cambia booleano isLoggedIn</button>
      </>
    );
  }

  /**JSX */
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4  text-blue-700">Ejercicios JSX</h1>
      {/* Ejercicio 1 */}
      <Ejercicio
        style="flex"
        numero={1}
        enunciado={`Renderiza un elemento <p> con el texto "Bienvenido" si una variable isLoggedIn es true, de lo
contrario muestra "Por favor, inicia sesión".
`}
      >
        {isLoggedIn ? <p>Bienvenido</p> : <p>Por favor inicia sesión</p>}
        <button onClick={handleLoggedIn}>Cambia booleano isLoggedIn</button>
      </Ejercicio>
      {/* Ejercicio 2 */}
      <Ejercicio
        style="flex"
        numero={2}
        enunciado={`Renderiza una lista (<ul>) de elementos (<li>) usando map() en un array de nombres.`}
      >
        <div>
          <ul>
            {nombres.map((nombre) => (
              <li key={nombre}>{nombre}</li>
            ))}
          </ul>
          <label> Escribe el nombre </label>
          <input
            onChange={handleInputChange}
            className="border-2 bg-slate-200"
            type="text"
          />
          <button onClick={añadirNombre}>Añadir</button>
          <button onClick={quitarNombre}>Borrar</button>
        </div>
      </Ejercicio>
      {/* Ejercicio 3 */}
      <Ejercicio
        style="flex"
        numero={3}
        enunciado={`Añade un evento onClick a un botón que muestre un mensaje en la consola al ser presionado.
        `}
      >
        <input
          onChange={handleInputChange}
          className="border-2 bg-slate-200"
          type="text"
        />
        <button onClick={handleMensaje}>Mostrar mensaje consola</button>
      </Ejercicio>
      {/* Ejercicio 4 */}
      <Ejercicio
        style="flex"
        numero={4}
        enunciado={`Crea un componente Header que renderice un encabezado con un título.
`}
      >
        <Header title={"Solución del ejercicio 4"}></Header>
      </Ejercicio>
      {/* Ejercicio 5 */}
      <Ejercicio
        style="flex"
        numero={5}
        enunciado={`Aplica estilos en línea a un elemento usando el atributo style.
        `}
      >
        <h2
          className="text-xl font-black bg-purple-300  border-2	ring-offset-4
outline-slate-300	 rounded border-amber-600 shadow-2xl"
        >
          Estilos aplicados
        </h2>
      </Ejercicio>
      {/* Ejercicio 6 */}
      <Ejercicio
        style="flex"
        numero={6}
        enunciado={`Crea un componente CustomButton que acepte props para personalizar su apariencia. Debe admitir
        props para el color de fondo, el texto y un evento onClick.
        `}
      >
        <CustomButton
          colorFondo={"verde"}
          texto=" ejercicio 6 hola caracola "
          callback={handleEvento}
        ></CustomButton>
      </Ejercicio>

      {/* Ejercicio 7 */}
      <Ejercicio
        style="flex"
        numero={7}
        enunciado={`Crea un componente ConditionalRender que acepte una prop condition. Si condition es
        true, muestra un párrafo con el texto "Condición verdadera"; de lo contrario, muestra un párrafo
        con el texto "Condición falsa".
        
        `}
      >
        <button onClick={handleConditionRender}>
          {conditionRender ? "Condición verdadera" : "Condición falsa"}
        </button>
      </Ejercicio>

      {/* Ejercicio 8 */}
      <Ejercicio
        style="flex"
        numero={8}
        enunciado={`Crea un componente Card que acepte props para el título (title), el cuerpo (body) y un footer
        (footer). Este componente renderizará una tarjeta con las secciones de título, cuerpo y pie.
        `}
      >
        <Card
          title="Título de la Tarjeta"
          body={<p>Cuerpo de la Tarjeta</p>}
          footer={<button>Acción</button>}
        />
      </Ejercicio>

      <Ejercicio
        style="flex"
        numero={9}
        enunciado={`Crea un componente ToggleVisibility que al hacer clic en un botón muestre u oculte un
        elemento <p>.
        `}
      >
        <button onClick={handleConditionRender2}>Pulsa aquí</button>
        {conditionRender2 ? (
          <p>Hola, soy el elemento p del ejercicio 9</p>
        ) : null}
      </Ejercicio>

      <Ejercicio
        style="flex"
        numero={10}
        enunciado={`Crea un componente UserList que acepte una lista de usuarios como props y renderice una lista
        ordenada (<ol>) con los nombres de usuarios. Además, cada nombre de usuario debe estar rodeado
        por un Fragmento y un enlace (<a>) que muestre el índice del usuario.
        `}
      >
        <UserList listaUsuarios={nombres}></UserList>
      </Ejercicio>
      <Ejercicio
        style="flex"
        numero={11}
        enunciado={`Crea un componente ConditionalRenderAdvanced que acepte dos props: isLoggedIn
        (booleano) y userRole (cadena de texto). Este componente debe renderizar un mensaje diferente
        según las siguientes condiciones:
        Si isLoggedIn es true, muestra un mensaje de bienvenida para el usuario.
        Si isLoggedIn es false, muestra un mensaje solicitando al usuario que inicie sesión.
        Si el usuario está autenticado y
        `}
      >
        <ConditionalRenderAdvanced
          userRole={"admin"}
        ></ConditionalRenderAdvanced>
      </Ejercicio>
    </div>
  );
}

function Ejercicio({ numero, enunciado, children }) {
  return (
    <div className="border-8 border-orange-500 hyphens-auto">
      <h2 className="text-2xl font-bold mb-4">Ejercicio numero {numero}</h2>
      <h3>
        <em>{enunciado}</em>
      </h3>
      <p>
        <strong>Solucion:</strong>:
      </p>
      {children}
    </div>
  );
}

Ejercicio.propTypes = {
  numero: PropTypes.number.isRequired,
  enunciado: PropTypes.string.isRequired,
};
export default App;
