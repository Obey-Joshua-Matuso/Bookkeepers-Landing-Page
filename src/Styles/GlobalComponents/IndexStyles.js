import styled from 'styled-components'

// Section 
export const Section = styled.section`
    display: ${(props) => props.grid ? "grid" : "flex"};
    flex-direction: ${(props) => props.row ? "row" : "columns"};
    padding: ${(props) => props.nopadding ? "0" : "0px 0px 48px 0px"};
    margin: 0 auto;
    max-width: 100vw;
    box-sizing: content-box;

    @media ${(props) => props.theme.breakpoints.lg} {
        padding: ${(props) => props.nopadding ? "0" : "0px 48px 0px"};
        
`;

export const SectionTitle = styled.h2`
    font-weight: 600;
    font-size: ${(props) => props.main ? '65px' : '46px'};
    line-height: ${(props) => props.main ? '72px' : '45px'};
    width: fit-content;
    max-width: 100%;
    margin-bottom: 16px;
    padding: ${(props) => props.main ? '58px 0 16px' : '0'};
    
    @media ${props => props.theme.breakpoints.md}{
        font-size: ${(props) => props.main ? '56px' : '65px'};
        line-height: ${(props) => props.main ? '56px' : '68px'};
        padding: ${(props) => props.main ? '10px 0 19px' : '0'};
        width: 100%;
      }
    
`
export const SectionText = styled.p`
    max-width: fit-content;
    font-size: 20px;
    line-height: 1.5em;
    font-weight: 500;
    padding: 1.8rem;

    @media ${(props) => props.theme.breakpoints.md} {
        max-width: 670px;
        font-size: 20px;
      }

`;
export const SectionDivider = styled.div`
  width: 69px;
  height: 4.3px;
  margin: ${(props) => props.divider ? "4rem 0" : "0rem 2rem" };
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(144deg,rgba(119, 234, 251, 2.9), #5B42F3 40%,rgba(199, 234, 251, 2.9));'};


  @media ${(props) => props.theme.breakpoints.md} {
    width: 148px;
    height: 4px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 148px;
    height: 4px;
    margin: ${(props) => props.divider ? "4rem" : "0rem 6rem" };
  }  
`;

export const SecondaryBtn = styled.button`
  align-items: center;
  margin: 2rem;
  background-image: linear-gradient(144deg,rgba(119, 234, 400, 1.9), #5B42F3 40%,rgba(169, 234, 500));
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(119, 234, 251, 2.9) 0.1px 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 19px 24px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

.button-63:active,
.button-63:hover {
  outline: 0;
}

@media (min-width: 768px) {
  .button-63 {
    font-size: 24px;
    min-width: 196px;
  }
}


`;


