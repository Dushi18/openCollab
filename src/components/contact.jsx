import React from "react";

export const Contact = () => {
  return (
    <div className="container">
      <div>
        <h2>Contact Form</h2>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text" id="name" name="name" placeholder="Your name.."/>
          </div>
          <div>
            <label>Email</label>
            <input type="text" id="email" name="email" placeholder="Your email.." />
          </div>

          <div>
            <label>Message</label>
            <input type="text" id="message" name="message" placeholder="Write something.." ></input>
          </div>

          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
