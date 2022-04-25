import { createGlobalStyle } from "styled-components";

export const light = {
    body: '#F2EBDC',
    div: '#F2E1C2',
    fontColor: '#8C673A',
}
export const dark = {

}
export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;