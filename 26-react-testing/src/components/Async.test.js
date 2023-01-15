import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if requests success", async () => {
    //Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async ()=> [{id:'p1', title:'first post'}],
    });
    render(<Async />);

    //Act

    //Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
