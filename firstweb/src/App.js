import "./App.css";
import Headers from "./Headers";
import Card from "react-bootstrap/Card";
import { todoItems } from "./Data/todo";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { tabs } from "./Data/tabs";

function App() {
  // let [pstatus, setPstatus] = useState(false);
  // let [menustatus, setMenustatus] = useState(false);
  // let [modelstatus, setModelstatus] = useState(false);

  // let showNotifications = (type) => {
  //   switch (type) {
  //     case "info":
  //       NotificationManager.info("Info message");
  //       break;
  //     case "success":
  //       NotificationManager.success("Success message", "Title here");
  //       break;
  //     case "warning":
  //       NotificationManager.warning(
  //         "Warning message",
  //         "Close after 3000ms",
  //         3000
  //       );
  //       break;
  //     case "error":
  //       NotificationManager.error("Error message", "Click me!", 5000, () => {
  //         alert("callback");
  //       });
  //       break;
  //   }
  // };

  let [todolist, setTodoList] = useState([]);
  let [activeTabs, setActiveTabs] = useState(0);
  let [activeContent, setActiveContent] = useState(tabs[0]);

  let onChnageButton = (index) => {
    setActiveTabs(index);
    setActiveContent(tabs[index]);
  };

  let saveToDoList = (event) => {
    // console.log("list before " + todolist);
    let todoname = event.target.todoname.value.trim();
    if (todoname !== null && todoname !== "") {
      let lowerCaseTodoName = todoname.toLowerCase();
      // alert(todoname);

      if (!todolist.some((todo) => todo.toLowerCase() === lowerCaseTodoName)) {
        let finalTodoList = [...todolist, todoname];
        setTodoList(finalTodoList);
        document.getElementById("TODOForm").reset();
      } else {
        alert("TODO Name " + todoname + " Aleady Exists...");
      }
    } else {
      alert("TODO Name cannot be blank.");
    }

    event.preventDefault();
    // console.log("list after " + todolist);
  };

  let list = todolist.map((value, index) => {
    return (
      <TodoListItem
        value={value}
        key={index}
        indexNo={index}
        todolist={todolist}
        setTodoList={setTodoList}
      />
    );
  });

  return (
    <div className="App">
      <div className="tabsouter">
        <h1 style={{ textAlign: "left" }}>Tab's Preview</h1>
        <ul>
          {tabs.map((items, index) => {
            return (
              <li>
                <button
                  className={activeTabs == index ? "activeButton" : ""}
                  onClick={() => onChnageButton(index)}
                >
                  {items.title}
                </button>
              </li>
            );
          })}
        </ul>
        {activeContent !== undefined ? <p>{activeContent.description}</p> : ""}
      </div>

      <h1>TODO List</h1>

      <form onSubmit={saveToDoList} id="TODOForm">
        <input type="text" name="todoname"></input>
        <button>Save</button>
      </form>

      <div className="outerDiv">
        <ul>{list}</ul>
      </div>

      {/* <Headers name="Props Tutorial" />

      <button onClick={() => setModelstatus(true)}>Enguiry Now</button>
      <div
        onClick={() => setModelstatus(false)}
        className={`modelOverlay ${modelstatus ? "modelShow" : ""} `}
      ></div>
      <div className={`modelDiv ${modelstatus ? "ShowmodelDiv" : ""} `}>
        <h3>
          Enguiry Now!{" "}
          <span onClick={() => setModelstatus(false)}>&times;</span>{" "}
        </h3>
      </div>

      <button className="micon" onClick={() => setMenustatus(!menustatus)}>
        {menustatus ? <span>&times;</span> : <span>&#9776;</span>}
      </button>
      <div className={`menu ${menustatus ? "activemenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Course</li>
          <li>Gallery</li>
          <li>Contact us</li>
        </ul>
      </div>

      <input type={pstatus ? "text" : "password"} />
      <button onClick={() => setPstatus(!pstatus)}>
        {pstatus ? "Hide" : "Show"}
      </button>

      <NotificationContainer />
      <Container>
        <Col>
          <Button
            className="btn btn-info"
            onClick={() => showNotifications("info")}
          >
            Info
          </Button>
          <hr />
          <button
            className="btn btn-success"
            onClick={() => showNotifications("success")}
          >
            Success
          </button>
          <hr />
          <button
            className="btn btn-warning"
            onClick={() => showNotifications("warning")}
          >
            Warning
          </button>
          <hr />
          <button
            className="btn btn-danger"
            onClick={() => showNotifications("error")}
          >
            Error
          </button>
        </Col>
      </Container> */}

      {/* for loop example */}
      {/* <Container>
        <Row>
          {
            todoItems.map((v, i) => {
              console.log({ v });
              return (
                <CardsExample v_todos={v} key={i} />
              )
            })
          }
        </Row>
      </Container> */}
    </div>
  );
}

export default App;

function TodoListItem({ value, key, indexNo, todolist, setTodoList }) {
  let [status, setStatus] = useState(false);

  let deleteRow = () => {
    // alert(indexNo);
    let finalData = todolist.filter((v, i) => i != indexNo);
    setTodoList(finalData);
  };

  let checkStatus = () => {
    // alert(value);
    setStatus(!status);
  };

  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {indexNo + 1}
      {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}

// function CardsExample({ v_todos }) {
//   console.log(v_todos);
//   return (
//     <Card style={{ width: "18rem" }}>
//       <Card.Body>
//         <Card.Title>{v_todos.todo}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">
//           {v_todos.completed}
//         </Card.Subtitle>
//         <Card.Text>{v_todos.todo}</Card.Text>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }
