import React, { useEffect } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
import Menu from '../components/DashBoard/Menu'
import TrainerList from '../components/DashBoard/trainer/TrainerList';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
  const navigator = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('isLogin') == null) {
        navigator('/login')
    }
  }, [])

    return (
      <Div>
          <Menu />
          <Container>
              <Outlet />   
          </Container>    
      </Div> 
    )
}

const Div = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export default DashBoard