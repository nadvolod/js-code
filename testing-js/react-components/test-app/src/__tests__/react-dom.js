import React from 'react';
import { act } from "react-dom/test-utils";
import {FavoriteNumber} from '../components/function-component/favorite-number';
import { render, unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

//When the test ends, we want to “clean up” and unmount the tree from the document
// https://reactjs.org/docs/testing-recipes.html#rendering
afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// anfn tab
test('renders a number input with a label', ()=> {
    act(() => {
        render(<FavoriteNumber />, container);
      });
    console.log(container.innerHTML);
})