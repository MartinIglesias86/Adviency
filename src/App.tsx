import './App.css'

function App() {
  const regalos: string[] = ['Mixer', 'Microondas', 'Freidora de aire']

  return (
    <>
      <h1>Regalos</h1>
      <div>
        {regalos.map((regalo) => (
          <li>{regalo}</li>
        ))}
      </div>
    </>
  );
}

export default App
