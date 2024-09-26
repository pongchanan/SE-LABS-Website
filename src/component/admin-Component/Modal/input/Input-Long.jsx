import React, { useState } from "react";

function InputLong() {
  const [text, setText] = useState("");
  const [rows, setRows] = useState(5);

  const handleTextChange = (e) => {
    const textareaLineHeight = 24; // Adjust this based on your line-height setting in Tailwind
    const minRows = 5;
    const maxRows = 15;

    const previousRows = e.target.rows;
    e.target.rows = minRows; // Reset number of rows to the minimum for auto height calculation

    const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      e.target.rows = maxRows;
      e.target.scrollTop = e.target.scrollHeight;
    }

    setRows(currentRows < maxRows ? currentRows : maxRows);
    setText(e.target.value);
  };

  return (
    <form className="flex flex-col mt-6 w-full text-sm font-medium max-w-[500px]">
      <label htmlFor="name" className="sr-only">
        Your Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="Your Name"
        className="flex-1 shrink gap-2.5 self-stretch px-4 py-3.5 w-full bg-white rounded-lg border border-solid border-neutral-300 min-h-[44px] text-neutral-400"
      />

      <label htmlFor="message" className="sr-only mt-4">
        Your Message
      </label>
      <textarea
        id="message"
        rows={rows}
        value={text}
        onChange={handleTextChange}
        placeholder="Your Message"
        className="flex-1 mt-4 resize-none overflow-hidden self-stretch px-4 py-3.5 w-full bg-white rounded-lg border border-solid border-neutral-300 min-h-[44px] text-neutral-400"
        style={{ lineHeight: "1.5rem" }} // Adjust this if needed to match your Tailwind setup
      />
    </form>
  );
}

export default InputLong;
