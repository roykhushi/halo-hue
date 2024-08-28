import CanvasModel from "./canvas/CanvasModel";
import Custom from "./pages/Custom";
import HomePage from "./pages/HomePage";

function App() {
 return (
    <>
      <main className="app transition-all ease-in">
        <HomePage />
        <CanvasModel />
        <Custom />
      </main>
    </>
  )
}

export default App
