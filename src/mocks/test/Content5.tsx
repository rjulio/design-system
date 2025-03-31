import { Button } from "@components/Button";
import { Card } from "@components/Card";

export function Content5({ changeStep }: any) {
    return (
        <Card>
            <h1>5 Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <Button
                onClick={() => changeStep(1)}
                ariaLabel="wizard 5 button">Go back to 1</Button>
        </Card>
    );
}