import React, { useState } from "react";

function InputLong({ register, name }) {
  const [text, setText] = useState("");
  const [rows, setRows] = useState(5);

  const handleTextChange = (e) => {
    const textareaLineHeight = 24; // Adjust this based on your line-height setting in Tailwind
    const minRows = 5;

    const previousRows = e.target.rows;
    e.target.rows = minRows; // Reset number of rows to the minimum for auto height calculation

    const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    setRows(currentRows);
    setText(e.target.value);
  };

  return (
    <>
      <input
        id="name"
        type="text"
        placeholder="Your Name"
        {...register(name, { required: true })} //required:"Username is required"
        className="flex-1 shrink gap-2.5 self-stretch px-4 py-3.5 w-full bg-white rounded-lg border border-solid border-neutral-300 min-h-[44px] text-neutral-400"
      />

      <textarea
        id="message"
        rows={rows}
        value={text}
        {...register(name, { required: true })} //required:"Username is required"
        onChange={handleTextChange}
        placeholder="Your Message"
        className="flex-1 mt-4 resize-none overflow-hidden self-stretch px-4 py-3.5 w-full bg-white rounded-lg border border-solid border-neutral-300 min-h-[44px] text-neutral-400"
        style={{ lineHeight: "1.5rem" }} // Adjust this if needed to match your Tailwind setup
      />
    </>
  );
}

export default InputLong;
