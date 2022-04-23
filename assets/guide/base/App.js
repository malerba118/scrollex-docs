import { Scroll } from "./scrollex";
import "./styles.css";

export default function App() {
  return (
    <Scroll.Container scrollAxis="y" className="h-screen">
      {/** content... */}
    </Scroll.Container>
  );
}
