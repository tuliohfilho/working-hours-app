import { createGlobalStyle} from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css';

import background from './../assets/os-x-degrade-wallpaper-preview.jpg';

export default createGlobalStyle`
body {
    margin: 0;
    margin-top: 60px;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${background});
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

.table td {
    vertical-align: middle;
}
`;