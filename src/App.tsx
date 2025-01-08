import { useState } from "react";
import { Ticket } from "./Ticket";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(true);

  return <>{isOpen ? <Ticket /> : null}</>;
}

export default App;
