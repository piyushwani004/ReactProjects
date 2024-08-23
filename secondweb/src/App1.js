import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  let [uname, setUname] = useState("");
  let [pname, setPname] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="text-start my-3">
                <label>UserName</label>
                <input
                  type="type"
                  className="form-control"
                  onChange={(event) => setUname(event.target.value)}
                  value={uname}
                />
              </div>
              <div className="text-start my-3">
                <label>Password</label>
                <input
                  type="type"
                  className="form-control"
                  onChange={(event) => setPname(event.target.value)}
                  value={pname}
                />
              </div>
              <div className="text-start my-3">
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
