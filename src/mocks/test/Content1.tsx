import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

export function Content1({ changeStep }: any) {
    return (
        <Card>
            <h1>1 Rsbuild with React</h1>
            <p>Start building amazing things with Rsbuild.</p>
            <Button onClick={() => changeStep(2) }>Next step</Button>
        </Card>
    );
}