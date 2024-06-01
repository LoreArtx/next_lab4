import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return <>
    <h1>App Router</h1>
    <Navbar items={["Home", "About", "Contact Us"]} />
    <Label htmlFor="type">Type here</Label>
    <Input id="type"></Input>
    <Button>Submit</Button>
  </>
}
