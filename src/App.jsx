import DragDropArea from "./components/DragDropArea";
import Header from "./components/Header";
function App() {
  return (
    <div className="inline-block">
      <Header />
      <div className="mx-2 p-8 bg-[#F0F0F0] ">
        
        <div className="flex py-4">
          <h2 className="text-2xl font-semibold">Заявки &bull; 22</h2>
        </div>

        <div className="inline-flex gap-x-8">

          <DragDropArea />

        </div>
      </div>
    </div>
  );
}

export default App;
