import styled from "styled-components";

export const StyledWindow = styled.div`
    height: 100%;
    border-top: 1px ${props => props.theme.tlWindowOuter} solid;
    border-left: 1px ${props => props.theme.tlWindowOuter} solid;
    border-bottom: 1px ${props => props.theme.rbWindowOuter} solid;
    border-right: 1px ${props => props.theme.rbWindowOuter} solid;
    background: ${props => props.theme.primaryColor};

    box-shadow:
        inset -1px 0 ${props => props.theme.rbWindowInner},
        inset -1px 1px ${props => props.theme.tlWindowInner},
        inset -1px -1px ${props => props.theme.rbWindowInner},
        inset 0 0 0 1px ${props => props.theme.tlWindowInner};
`;

export const StyledHeader = styled.div`
    background: linear-gradient(
        to right,
        ${props => props.theme.gradient1},
        ${props => props.theme.gradient2}
    );
    margin: 1px;
    padding: 2px;
    color: #fff;
    position: relative;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
`;

export const StyledAddress = styled.div`
    border-top: ${props => props.theme.tlContentOuter} 1px solid;
    border-left: ${props => props.theme.tlContentOuter} 1px solid;
    border-right: ${props => props.theme.rbContentOuter} 1px solid;
    border-bottom: ${props => props.theme.rbContentOuter} 1px solid;
    box-shadow:
        inset -1px 0 ${props => props.theme.rbContentInner},
        inset -1px 1px ${props => props.theme.tlContentInner},
        inset -1px -1px ${props => props.theme.rbContentInner},
        inset 0 0 0 1px ${props => props.theme.tlContentInner};
    margin: 1px;
    padding: 2px;

    display: flex;
    align-content: center;
    justify-content: space-between;
`;