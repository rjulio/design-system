import { Button } from "@components/Button";
import { Card } from "@components/Card";

export function Content4({ changeStep }: any) {
    return (
        <Card>
            <h1>4 Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <Button
                onClick={() => changeStep(5)}
                ariaLabel="wizard 4 button">Next step</Button>
        </Card>
    );
}