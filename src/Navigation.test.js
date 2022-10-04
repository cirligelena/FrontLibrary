import NavigationComponent from "./components/navigation/Navigation";
import {render as rtlRender} from "@testing-library/react";
import {store} from "./store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


export function render(component) {
    return (
        rtlRender(
            <BrowserRouter>
                <Provider store={store}>
                    {component}
                </Provider>
            </BrowserRouter>))
}

describe('Navigation component tests', () => {
    test('Matches Navigation Snapshot', async () => {
        const {baseElement} = render(<NavigationComponent/>);
        expect(baseElement).toMatchSnapshot();
    })
})


