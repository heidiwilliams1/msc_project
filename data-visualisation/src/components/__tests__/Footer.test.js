
import {render} from '@testing-library/react';
import Footer from "../Footer";

describe("Footer", () =>{
    it("renders correctly" , () => {
        const footer = render(<Footer />);
        expect(footer).toMatchSnapshot();
    })
})