import { Navbar } from '@/components/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { useState } from 'react';

function App() {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');

  return (
    <main className="flex min-w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="rounded-md"
          name="command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <button
          onClick={async () => {
            const command = document.getElementById('command') as HTMLInputElement;
            const response = await fetch('http://acrobot.local/test-command', {
              method: 'POST',
              body: JSON.stringify({ command: command.value })
            });
            const json = await response.json();
            console.log(json);
            setResponse(JSON.stringify(json, null, 2));
          }}
        >
          Send test command
        </button>
        <textarea className="h-60 w-96 resize-none rounded-md" value={response}></textarea>
      </div>
    </main>
  );
}

export default App;
