import { createGlobalStyle} from 'styled-components'


export const lightTheme = {
  body: '#FFF',
  text: {
    thickText:'#021944',
    lightText:'#415373',
    normalText:'#000000',},
  toggleBorder: '#FFF',
  background: '#FFF',
  main_color:'#14A7E5',
  boxShadow:' rgba(33, 35, 38, 0.1)',
  type:'light'
}

export const darkTheme = {
  body: '#363537',
  text: {
    thickText:'#ffffff',
    lightText:'#e8e8e8',
    normalText:'white',},
  toggleBorder: '#6B8096',
  background: '#363537',
  main_color:'#14A7E5',
  boxShadow: '#FFFFFF85',
  type:'dark'
}


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Mulish', sans-serif !important;

}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  li{
  list-style-type: none;
}

a{
  text-decoration: none;
}

.Toastify__toast-icon svg{
  color: white !important;
  fill: white;
}

.toast-message {
    color: #fff;
    font-size: 20px;
    /* width: 34vw; */
    background-color:#14A7E5;
    min-width: 300px;
    padding: 1rem 1rem;
}
.toast-message-err{
    color: #fff;
    font-size: 20px;
    /* width: 34vw; */
    background-color: #e53e3e;
    min-width: 300px;
    padding: 1rem 1rem;
}
`
