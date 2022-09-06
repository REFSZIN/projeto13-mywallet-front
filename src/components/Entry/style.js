import styled from 'styled-components';

export const MainToda  = styled.main`
    width: 100vw;
    height: fit-content;
    background-color: #E5E5E5;
    padding-top: 70px;
    padding-bottom: 70px;
`;

export const TopToda = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    align-items: flex-start;
    margin-top: 10px;
    margin-left: 5%;
    width: 90%;
    margin-right: 5%;
    margin-bottom: 20px;
    animation: slideInLeft 1s;
    z-index: 3;
`;
export const Day  = styled.h3`
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 30.976px;
    line-height: 29px;
    color: #126BA5;
    display: inline;
    width: 100%;
`;
export const NumberDay  = styled.span`
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 29px;
    color: #126BA5;
`;
export const DescDay = styled.span`
    height: 22px;
    margin-top: 10px;
    width: 100%;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
`;
export const DescqDay = styled.span`
    margin-left: 10px;
    margin-top: 10px;
    height: 12px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 27.976px;
    line-height: 22px;
    color: #126BA5;
    width: 100%;
`;
export const Habit  = styled.article`
    display: flex;
    width: 90%;
    margin-bottom: 10px;
    margin-left: 5%;
    margin-right: 5%;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: center;
    align-items: flex-start;
    animation: pulse 1s;
    z-index: 2;
    position: relative;
    @media only screen and (max-width: 370px) {
    width: 100%;
    margin: 0px;
    border-radius: 12px;
    margin-bottom: 5px;
    }
`;
export const TitleHabit  = styled.h4`
padding-bottom: 10px;
    height: 25px;
    width: 200px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-left: 20px;
    margin-bottom: 5px;
    @media only screen and (max-width: 370px) {
    margin-left: 15px;
    }
`;
export const ScoreHabitVerde  = styled.span`
    padding-top: 12px;
    width: 148px;
    height: 32px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #8FC549;
    margin-left: 20px;
    @media only screen and (max-width: 370px) {
    margin-right: 5px;
    }
`;
export const ScoreHabit  = styled.span`
    padding-top: 12px;
    width: 148px;
    height: 32px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
    margin-left: 20px;
    @media only screen and (max-width: 370px) {
    margin-right: 5px;
    }
`;
export const BoxChecked = styled.div`
display: flex;
width: 69px;
height: 69px;
background: #E7E7E7;
border-radius: 5px;
flex-wrap: nowrap;
align-content: center;
justify-content: center;
align-items: center;
margin-right: 20px;
@media only screen and (max-width: 370px) {
margin-left: 5px;
}
`;
export const BoxUnCheck = styled.div`
    display: flex;
    width: 69px;
    height: 69px;
    background: #8FC549;
    border-radius: 5px;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    @media only screen and (max-width: 370px) {
    margin-left: 5px;
    }
`;
export const DescDayOn  = styled.span`
    width: 100%;
    height: 22px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
    margin-left: 15px;
    margin-top: 4px;
`;