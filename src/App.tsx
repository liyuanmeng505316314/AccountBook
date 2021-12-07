import * as React from "react";
import {Routes, Route, Navigate,} from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav"


const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
`

const Header = styled.header`
  overflow: auto;
  text-align: center;
`

const Main = styled.main`
  overflow: auto;
  flex: 1;
`

const Footer = styled.footer`
  font-size: 16px;
`



function App() {
    return (
        < Wrapper className="App">

            <Header>
                <h2>小孟账本!</h2>
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
                <Nav/>
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