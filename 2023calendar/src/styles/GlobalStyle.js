import { createGlobalStyle } from 'styled-components';
import backimage from '../assets/img/backimage.jpeg';

export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        font-size: 0.9rem;
    }
    @font-face {
        //폰트
    }
    body {
        width: 100%;
    }
    @media only screen and (min-width: 375px) {
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(${backimage})
            //이미지 이렇게 불러와야 적용됨
        }
				//모바일 화면 크기 설정
        .App {
            width: 375px;
            height: 100vh;
            color: #FFF;
            & > {
            float: left;
            }
        }
    }
`;
export default GlobalStyle