import { render } from "@testing-library/react";
import { Wizard } from ".";
import { Content1 } from "@mocks/test/Content1";
import { Content2 } from "@mocks/test/Content2";
import { Content3 } from "@mocks/test/Content3";
import { Content4 } from "@mocks/test/Content4";
import { Content5 } from "@mocks/test/Content5";
import { vi } from "vitest";

function makeComponent() {
   const changeStep = vi.fn();
   const setStep = vi.fn();
   const content = [
      <Content1 key={1} changeStep={changeStep} />,
      <Content2 key={2} changeStep={changeStep} />,
      <Content3 key={3} changeStep={changeStep} />,
      <Content4 key={4} changeStep={changeStep} />,
      <Content5 key={5} changeStep={changeStep} />
   ];
   const comp = render(
      <Wizard
         step={1}
         setStep={setStep}
         content={content}
         canChangeStep={false}
      />
   )

   return { comp, changeStep, setStep }
}

describe("Wizard", () => {
   it("should render the Wizard component", () => {
      const { comp } = makeComponent();
      expect(comp).toBeTruthy();
   });

   it("should render the first step", () => {
      const { comp } = makeComponent();
      expect(comp.getByText(/1 Rsbuild/)).toBeTruthy();
   });

   it("should call changeStep on clicking button", () => {
      const { comp, changeStep } = makeComponent();
      const button = comp.getByText(/Next/);
      button.click();
      expect(changeStep).toHaveBeenCalled();
   });
});