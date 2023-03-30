import DragDropArea from "./components/DragDropArea";
import Header from "./components/Header";
function App() {
  return (
    <div className="inline-block">
      <Header />
      <div className="mx-2 p-8 bg-[#F0F0F0] ">

          <DragDropArea />

      </div>
    </div>
  );
}

export default App;
