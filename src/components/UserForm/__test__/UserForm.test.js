import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import UserForm from "../UserForm";
import { reducer } from "../../../store";

const store = createStore(reducer);

describe("UserForm", () => {
  jest.spyOn(window, "alert").mockImplementation(() => {});
  it("renders UserForm component", () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Message")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("Form submission being handled successfully", () => {
    render(
      <Provider store={store}>
        <UserForm />
      </Provider>
    );

    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Smith" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Just a random text" },
    });
    fireEvent.click(screen.getByText("Submit"));

    expect(alert).toHaveBeenCalledWith(
      "Submitted succesfully. First name: John, Last name: Smith, Email: john@example.com, Message: Just a random text"
    );
  });
});
