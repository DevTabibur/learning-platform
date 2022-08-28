import React from "react";

const ModalOfBookdetails = ({bookDetailsModal, setBookDetailsModal}) => {
    const {idNo, writerName, bookName, uploadDate} = bookDetailsModal
  return (
    <>
      <>
        <input type="checkbox" id="books-details" className="modal-toggle" />
        <div className="modal cursor-pointer">
          <div className="modal-box relative">
            <label
              htmlFor="books-details"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">
             Details: {bookName} Book
            </h3>
            <p className="">Book Name: {bookName}</p>
            <p className="">Writer Name: {writerName}</p>
            <p className="">Published Date: {uploadDate}</p>
          </div>
        </div>
      </>
    </>
  );
};

export default ModalOfBookdetails;
