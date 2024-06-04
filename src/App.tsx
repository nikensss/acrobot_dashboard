import { useState } from "react";
import "./App.css";

function App() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

  return (
    <>
      <h1 className="my-12 ">Acrobot</h1>
      <div className="card flex flex-col gap-2">
        <input
          type="text"
          name="command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <button
          onClick={async () => {
            const command = document.getElementById(
              "command",
            ) as HTMLInputElement;
            const response = await fetch("http://acrobot.local/test-command", {
              method: "POST",
              body: JSON.stringify({ command: command.value }),
            });
            const json = await response.json();
            console.log(json);
            setResponse(JSON.stringify(json, null, 2));
          }}
        >
          Send test command
        </button>
        <textarea className="w-96 h-60" value={response}></textarea>
      </div>
    </>
  );
}

export default App;
