import { useState } from "react";
import ModalBody from "./components/ModalBody";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ModalBody>
        <button
          onClick={() => setShowModal((prev) => !prev)}
          style={{ background: "red" }}
        >
          show modal
        </button>

        {showModal && (
          <div
            className="bg-[rgba(0,0,0,0.6)] opacity-100 w-full h-full absolute right-0 top-0 bottom-0 left-0"
            style={{ zIndex: 99 }}
          >
            <div
              className="flex justify-center items-center h-screen"
              style={{ zIndex: 9999 }}
            >
              <div className="w-[700px] bg-blue-200 text-center h-[70vh] rounded-md mx-auto flex justify-center items-center">
                <div>hell modal</div>
              </div>
            </div>
          </div>
        )}
      </ModalBody>
    </>
  );
};

export default App;
