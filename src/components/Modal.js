import React, { useEffect, useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState()
  useEffect(() => {


    window.addEventListener("message", function (e) {
        setModalData(e.data)
      setShowModal(e.data.status);
    });
  }, []);


  return (
    <div>
      <iframe src="http://127.0.0.1:5555/"></iframe>
      {/* <button
        style={{ background: "red" }}
        onClick={() => setShowModal((prevState) => !prevState)}
      >
        open modal
      </button> */}
      {showModal && (
        <div className="bg-[rgba(0,0,0,0.6)] w-full h-full absolute right-0 top-0 bottom-0 left-0">
          <div className="flex justify-center items-center w-full mx-auto h-[100vh] ">
            <div className="bg-blue-200 w-1/3 h-80 rounded-lg mx-auto relative">
              <h1 className="text-black text-center mt-6">{modalData.title}</h1>
              <h1 className="text-black text-center mt-6">{modalData.message}</h1>
              <div
                className="text-black text-2xl absolute right-0 top-0"
                onClick={() => setShowModal((prevState) => !prevState)}
              >
                x
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
