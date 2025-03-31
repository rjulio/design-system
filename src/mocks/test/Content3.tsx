import { Button } from "@components/Button";
import { Card } from "@components/Card";

export function Content3({ changeStep }: any) {
    return (
        <Card>
            <h1>3 Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <Button
                onClick={() => changeStep(4)}
                ariaLabel="wizard 3 button">Next step</Button>
        </Card>
    );
}