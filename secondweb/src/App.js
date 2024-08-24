import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  let [form, setForm] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });

  let [userData, setUserData] = useState([]);

  let getValues = (event) => {
    let oldData = { ...form };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setForm(oldData);
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    let currentUserData = {
      uname: form.uname,
      uemail: form.uemail,
      uphone: form.uphone,
      umessage: form.umessage,
    };

    if (form.index === "") {
      let checkUserFilter = userData.filter(
        (v) => v.uemail === form.uemail || v.uphone === form.uphone
      );

      if (checkUserFilter.length > 0) {
        toast.error("Email or phone number already exists...");
      } else {
        setUserData((prevUserData) => {
          const newUserData = [...prevUserData, currentUserData];
          // console.log("Updated UserData: ", newUserData);
          return newUserData;
        });
        setForm({
          uname: "",
          uemail: "",
          uphone: "",
          umessage: "",
          index: "",
        });
      }
    } else {
      console.log("upate index " + form.index);
      let updateIndex = form.index;
      let oldData = userData;

      let checkUserFilter = userData.filter(
        (v, i) =>
          (v.uemail === form.uemail || v.uphone === form.uphone) &&
          i != updateIndex
      );

      if (checkUserFilter.length > 0) {
        toast.error("Email or phone number already exists...");
      } else {
        oldData[updateIndex]["uname"] = form.uname;
        oldData[updateIndex]["uemail"] = form.uemail;
        oldData[updateIndex]["uphone"] = form.uphone;
        oldData[updateIndex]["umessage"] = form.umessage;

        setUserData(oldData);
        setForm({
          uname: "",
          uemail: "",
          uphone: "",
          umessage: "",
          index: "",
        });
      }
    }
  };

  let deleteRow = (index) => {
    // alert(index);
    let filterDeleteDAta = userData.filter((v, i) => i != index);
    setUserData(filterDeleteDAta);
  };

  let updateRow = (index) => {
    // alert(index);
    let editData = userData.filter((v, i) => i == index)[0];
    // console.log(editData);
    editData["index"] = index;
    // console.log(editData);
    setForm(editData);
  };

  let onClearbtn = () => {
    // alert("sd");
    setForm({
      uname: "",
      uemail: "",
      uphone: "",
      umessage: "",
      index: "",
    });
  };

  return (
    <div className="App">
      <Container fluid>
        <ToastContainer />
        <Container>
          <Row>
            <Col className="text-center py-5">
              <h1>Enquiry Now!</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={5}>
              <form onSubmit={handleSubmit}>
                <div className="pb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="type"
                    value={form.uname}
                    onChange={getValues}
                    name="uname"
                    className="form-control"
                  />
                </div>
                <div className="pb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="type"
                    value={form.uemail}
                    onChange={getValues}
                    name="uemail"
                    className="form-control"
                  />
                </div>
                <div className="pb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="type"
                    value={form.uphone}
                    onChange={getValues}
                    name="uphone"
                    className="form-control"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    type="type"
                    className="form-control"
                    name="umessage"
                    onChange={getValues}
                    value={form.umessage}
                    id=""
                    rows={3}
                  />
                </div>

                <div className="pb-3">
                  <button className="btn btn-primary">
                    {form.index !== "" ? "Update" : "Save"}
                  </button>
                  {form.index !== "" ? (
                    <button
                      onClick={() => onClearbtn()}
                      style={{ margin: "10px" }}
                      className=" btn btn-primary"
                    >
                      Clear
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </form>
            </Col>
            <Col lg={7}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.length > 0 ? (
                    userData.map((obj, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{obj.uname}</td>
                          <td>{obj.uemail}</td>
                          <td>{obj.uphone}</td>
                          <td>{obj.umessage}</td>
                          <td>
                            <button onClick={() => deleteRow(i)}>Delete</button>
                            <button onClick={() => updateRow(i)}>Edit</button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6}>No Data Found</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
