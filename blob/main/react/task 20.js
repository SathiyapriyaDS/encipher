// app.js
import React from "react";

function HelloWorld() {
  return <h1>Hello World</h1>;
}

function City() {
  var city = "Chennai";
  return <p>Welcome to {city}</p>;
}

function AlertBtn() {
  function showAlert() {
    alert("Hello React");
  }
  return <button onClick={showAlert}>Click Me</button>;
}

function Sum() {
  return <p>5 + 10 = {5 + 10}</p>;
}

function UserStatus() {
  var isUser = false;
  if (isUser) {
    return <p>Logged User</p>;
  } else {
    return <p>Guest User</p>;
  }
}

function Greeting(props) {
  return <p>Hello {props.name}</p>;
}

function Product(props) {
  return (
    <p>
      {props.product} - ₹{props.price}
    </p>
  );
}

function ReButton(props) {
  return <button>{props.label}</button>;
}

function Names() {
  return (
    <div>
      <p>vijay</p>
      <p>Sathya</p>
      <p>Dharun</p>
    </div>
  );
}

function StyledText() {
  return <p style={{ color: "blue" }}>Style Text</p>;
}

function Person(props) {
  return (
    <p>
      {props.data.name} - {props.data.age}
    </p>
  );
}

function Child(props) {
  return <p>{props.text}</p>;
}

function Counter() {
  var state = React.useState(0);
  var count = state[0];
  var setCount = state[1];

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Clicked: {count} times</p>
      <button onClick={increase}>Click</button>
    </div>
  );
}

function SimpleCard(props) {
  return (
    <div style={{ border: "1px solid black", margin: 10, padding: 10 }}>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
}

function LoginStatus(props) {
  if (props.isLogin) {
    return <p>Welcome Back</p>;
  } else {
    return <p>Please Login</p>;
  }
}

function App() {
  var person = { name: "sathya", age: 22 };

  return (
    <div>
      <HelloWorld />
      <City />
      <AlertBtn />
      <Sum />
      <UserStatus />
      <Greeting name="Sathya" />
      <Product product="Mobile" price={15000} />
      <ReButton label="Login" />
      <ReButton label="Register" />
      <Names />
      <StyledText />
      <Person data={person} />
      <Child text="React Data from Parent" />
      <Counter />
      <SimpleCard title="Card One" desc="First Card" />
      <SimpleCard title="Card Two" desc="Second Card" />
      <LoginStatus isLogin={false} />
    </div>
  );
}


// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

var root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <React.StrictMode>
        <App />
       
    </React.StrictMode>
);

export default App;
