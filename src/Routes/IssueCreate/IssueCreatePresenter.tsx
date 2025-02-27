import React from "react";
import styled from "styled-components";
import Repository from "../../Components/Repository";
import Issue from "../../Components/Issue";

const Container = styled.div`
  width: 100%;
  align-items: center;
  height: 50rem;
`;

const IssueSelector = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 23.3rem;
  margin-bottom: 1rem;
`;

const RepositoryTitle = styled.div`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
`;

const IssueTitle = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
`;

const RepositoryContainer = styled.div`
  overflow-y: scroll;
  overflow-x: visible;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  unicode-bidi: bidi-override;
  direction: rtl;
  padding-left: 0.5rem;
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar {
    width: 0.5rem;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background-color: #ffc645;
  }
`;

const IssueContainer = styled.div`
  overflow-y: auto;
`;

const RestSelector = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProfileImage = styled.div`
  background-image: url(https://mblogthumb-phinf.pstatic.net/MjAxODA1MjhfMTA0/MDAxNTI3NDg3MTczOTY5.C2eXPMwTXPN7mN6rhXpLrbLAu36fyR7JDr3Ym8URGl8g.97dxz-n9zjbzgv8KbhDwrICDNbNierqWueC0aRsfgjIg.JPEG.ehfkdl8989/KakaoTalk_Moim_4UjmLsR1AohJhEmSqqNZkX7uHKU0kp.jpg?type=w800);
  background-position: center center;
  background-size: 100%;
  border-radius: 100%;
  height: 4rem;
  width: 4rem;
  margin: 1rem;
`;
const Nickname = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

interface Props {
  repositories: unknown[];
  issues: any;
  targetRepository: unknown;
  targetIssue: unknown;
  handleOnClickRepository: (repo: unknown) => void;
  handleOnClickIssue: (issue: unknown) => void;
}

const IssueCreatePresenter: React.SFC<Props> = ({
  repositories,
  issues,
  targetRepository,
  targetIssue,
  handleOnClickRepository,
  handleOnClickIssue
}) => {
  return (
    <Container>
      <IssueSelector>
        <RepositoryTitle>Your Repository</RepositoryTitle>
        <IssueTitle>Issue</IssueTitle>
        <RepositoryContainer>
          {repositories.map((repository: any, idx: number) => (
            <Repository
              isActive={repository.fullName === targetRepository}
              handleOnClickRepository={handleOnClickRepository}
              repository={repository}
              key={idx}
            />
          ))}
        </RepositoryContainer>
        <IssueContainer>
          {!issues ? (
            <div>this is issue section please select repository first</div>
          ) : (
            issues.map((issue: any, idx: number) => (
              <Issue
                isActive={issue === targetRepository}
                handleOnClickIssue={handleOnClickIssue}
                issue={issue}
                key={idx}
              />
            ))
          )}
        </IssueContainer>
      </IssueSelector>
      <RestSelector>
        <ProfileContainer>
          <ProfileImage />
          <Nickname>보노보노</Nickname>
        </ProfileContainer>
        selector
      </RestSelector>
    </Container>
  );
};

export default IssueCreatePresenter;
