import React from "react";
import Login from "./pages/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom"; 
import DashBoard from "./pages/DashBoard";
import Container from "./components/DashBoard/trainer/Container";
import TrainerList from "./components/DashBoard/trainer/TrainerList";
import AddTrainer from "./components/DashBoard/trainer/AddTrainer";
import Error404 from "./pages/Error";
import TrainAdd from "./components/DashBoard/trainer/TrainAdd";
import ContainerUser from "./components/DashBoard/users/ContainerUser";
import AddUser from "./components/DashBoard/users/AddUser";
import GenCode from "./components/DashBoard/users/GenCode";
import ChekUser from "./components/DashBoard/users/ChekUser";
import UserList from "./components/DashBoard/users/UserList";

function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <Login /> }/>

          <Route path="/" element={ < DashBoard /> } > 
            <Route path="trainer" element={ <Container />  } > 
              <Route path="trainerList" element={ <TrainerList /> } />
              <Route path="addTrainer" element={ <AddTrainer /> } />
              <Route path="writeTrainer" element={ <TrainAdd /> } />
            </Route>
            <Route path="users" element={ <ContainerUser /> }>
              <Route path="CreateUser" element={ <AddUser /> } />
              <Route path="genCode" element={ <GenCode /> } />
              <Route path="checkUser" element={ <ChekUser /> } />
              <Route path="userList" element={ <UserList /> } />
            </Route>
          </Route>

          <Route path="*" element={ <Error404 /> }/>

        </Routes>
      </BrowserRouter>
    );
}



export default App;
