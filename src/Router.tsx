import React from "react";
import styled from "styled-components";
import { BackTop } from "antd";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import IssueDetail from "./Routes/IssueDetail";
import { SharedContainer, SharedInnerContainer } from "./sharedStyle";
import Oauth from "./Routes/Oauth";
import IssueCreate from "./Routes/IssueCreate";

const Container = styled(SharedContainer)`
  position: relative;
  z-index: 2;
`;

const InnerContainer = styled(SharedInnerContainer)`
  flex-direction: column;
  justify-content: flex-start;
  margin: 2rem 0 1rem;
`;

const SectionContainer = styled.section`
  width: 100%;
  position: absolute;
  top: 6rem;
`;
interface Props {}

const Router: React.SFC<Props> = () => (
  <>
    <BackTop />
    <Header />
    <SectionContainer>
      <Container>
        <InnerContainer>
          <Switch>
            <Route path="/oauth" component={Oauth} />
            <Route path="/issue-create" component={IssueCreate} />
            <Route path="/issue-detail/:issue_id" component={IssueDetail} />
            <Route path="/" component={Home} />
          </Switch>
        </InnerContainer>
      </Container>
    </SectionContainer>
  </>
);

export default Router;
