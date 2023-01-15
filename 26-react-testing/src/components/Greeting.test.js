import { render,screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greetings from "./Greeting";

describe('Greeting component',()=>{
    test('renders Hello World as a text', ()=> {
        //Arrange
        render(<Greetings/>);
    
        //Act
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });


    test('renders Glad to see you as a text if button is NOT clicked', ()=> {
        //Arrange
        render(<Greetings/>);

        //Act

        //Assert
        const changedAsElement = screen.getByText('Glad to see you');
        expect(changedAsElement).toBeInTheDocument();
    })

    test('renders Changed! if the button was clicked', ()=> {
        //Arrange
        render(<Greetings/>);


        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);


        //Assert
        const changedAsElement = screen.getByText('Changed!');
        expect(changedAsElement).toBeInTheDocument();
    })

    test('Do not renders Glad to see you if the button was clicked', ()=> {
        //Arrange
        render(<Greetings/>);


        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);


        //Assert
        const gladToSeeYouElement = screen.queryByText('Glad to see you');
        expect(gladToSeeYouElement).toBeNull();
    })
});

