import * as React from "react";
import {Routes, Route, Link, Navigate,} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: darkcyan;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  background-color: aquamarine;
  overflow: auto;
`

const Main = styled.main`
  background-color: darkgray;
  overflow: auto;
  flex: 1;
`

const Footer = styled.footer`
  font-size: 40px;
`

const Nav = styled.nav`
  > ul {
    display: flex;
    > li {
      width: 33.33%;
      padding: 30px;
      text-align: center;
      >a{
        text-decoration: none;
        color: inherit;
      }
    }
  }
`

function App() {
    return (
        < Wrapper className="App">

            <Header>
                <h1>欢迎使用 ----小孟账本!</h1>
            </Header>

            <Main>
                {/* 这里通过Routes进行路由匹配，通过路径的不同，展示几个不同的页面*/}
                <Routes>
                    {/*routers下路展示的就是组件，以后通过模块化引进*/}
                    <Route path="/tags" element={<Tags/>}/>
                    <Route path="/account" element={<Account/>}/>
                    <Route path="/statistics" element={<Statistics/>}/>
                    <Route path="/" element={<Navigate to="/account"/>}/>
                    <Route path="*" element={<NoItem/>}/>
                </Routes>
            </Main>

            <Footer>
                <Nav>
                    <ul>
                        <li><Link to="/tags">标签</Link></li>
                        <li><Link to="/">记账</Link></li>
                        <li><Link to="/statistics">统计</Link></li>
                    </ul>
                </Nav>
            </Footer>

        </Wrapper>
    );
}

function Tags() {
    return (
        <>
            <h2>这里是标签</h2>
        </>
    );
}

function Account() {
    return (
        <>
            <h2>这里是记账</h2>
        </>
    );
}

function Statistics() {
    return (
        <>
            <h2>这里是统计</h2>
        </>
    );
}

function NoItem() {
    return (
        <>
            <h2>您的路径不存在</h2>
        </>
    );
}

export default App;