import React from 'react'

const ModalOfMessage = (fm) => {
    // console.log('message', message)
    const {title, recipient, formattedToday, message, email} = fm?.fm;
    // console.log(fm?.fm.title, 'fm')
  return (
    <>
        {/* modal */}
      <input
        type="checkbox"
        id="message-title-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="message-title-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-accent">
           {title}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
    </>
  )
}

export default ModalOfMessage