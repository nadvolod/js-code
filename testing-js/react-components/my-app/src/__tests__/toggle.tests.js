//https://reactjs.org/docs/testing-recipes.html#rendering
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { fireEvent,getByTestId } from '@testing-library/react'
import Toggle from "../components/Toggle";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("changes value when clicked", () => {
  const mockedOnChange = jest.fn();
  act(() => {
    render(<Toggle onChange={mockedOnChange} />, container);
  });

  // get ahold of the button element, and trigger some clicks on it
  const button = document.querySelector("[data-testid=toggle]");
  expect(button.innerHTML).toBe("Turn on");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(mockedOnChange).toHaveBeenCalledTimes(1);
  expect(button.innerHTML).toBe("Turn off");
});

it("dispatches correct number of events", () => {
    const mockedOnChange = jest.fn();
    act(() => {
      render(<Toggle onChange={mockedOnChange} />, container);
    });
  
    // get ahold of the button element, and trigger some clicks on it
    const button = document.querySelector("[data-testid=toggle]");
    expect(button.innerHTML).toBe("Turn on");
  
    act(() => {
      for (let i = 0; i < 5; i++) {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      }
    });
  
    expect(mockedOnChange).toHaveBeenCalledTimes(5);
    expect(button.innerHTML).toBe("Turn off");
  });

  //Simiar test using @testing-library
  it("works with testing-library", () => {
    const onChange = jest.fn();
    act(() => {
      render(<Toggle onChange={onChange} />, container);
    });
  

    // get ahold of the button element, and trigger some clicks on it
    const button = document.querySelector("[data-testid=toggle]");
    expect(button.innerHTML).toBe("Turn on");
  
    fireEvent(
        getByTestId(container, 'toggle'),
        new MouseEvent('click', {
        bubbles: true
        })
    )
  
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(button.innerHTML).toBe("Turn off");
  });