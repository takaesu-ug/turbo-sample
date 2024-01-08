import { Alert, AlertDescription, AlertTitle } from "@ui/components/alert";
import { Button } from "@ui/components/button";

export default function Page() {
  return (
    <>
      <h1>Web</h1>
      <Button>Click me</Button>

      <Alert>
        <AlertTitle>タイトル</AlertTitle>
        <AlertDescription>説明</AlertDescription>
      </Alert>
    </>
  );
}
