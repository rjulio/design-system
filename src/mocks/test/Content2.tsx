import { Button } from "@components/Button";
import { Card } from "@components/Card";

export function Content2({ changeStep }: any) {
    return (
        <Card>
            <h1>2 Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <Button
                onClick={() => changeStep(3)}
                ariaLabel="wizard 2 button">Final step</Button>
        </Card>
    );
}