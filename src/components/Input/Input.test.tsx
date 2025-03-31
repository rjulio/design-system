import { fireEvent, render } from "@testing-library/react";
import { Input } from ".";
import { vi } from "vitest";
import { InputProps } from "./type";

function makeComponent(props: Partial<InputProps> = {}) {
   const onChange = vi.fn();
   const defaultProps: InputProps = {
      label: "Name",
      id: "teste",
      placeholder: "placeholder test",
      value: "",
      onChange,
   };

   const comp = render(<Input {...defaultProps} {...props} />);

   return { comp, onChange };
}

describe("Input", () => {
   test("should render the input component", () => {
      const { comp } = makeComponent();

      expect(comp).toBeTruthy();
   });

   test("should call onChange when value changes", () => {
      const { comp, onChange } = makeComponent();

      const input = comp.getByPlaceholderText("placeholder test") as HTMLInputElement;

      fireEvent.change(input, { target: { value: "New Value" } });

      expect(onChange).toHaveBeenCalled();
   });

   test("should render the input component with error message", () => {
      const { comp } = makeComponent({ isInvalid: true, errorMessage: "Error occurred" });

      expect(comp.getByText("Error occurred")).toBeInTheDocument();
   });

   test("should render the input as disabled", () => {
      const { comp } = makeComponent({ isDisabled: true });

      const input = comp.getByPlaceholderText("placeholder test");
      expect(input).toBeDisabled();
   });
});