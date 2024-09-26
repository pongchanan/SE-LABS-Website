import React from "react";

function SubscriptionForm() {
  return (
    <form className="flex flex-col mt-6 w-full text-sm font-medium max-w-[385px]">
      <label htmlFor="name" className="sr-only">
        Your Name
      </label>
      <input
        id="name"
        type="text"
        placeholder="Your Name"
        className="flex-1 shrink gap-2.5 self-stretch px-4 py-3.5 w-full bg-white rounded-lg border border-solid border-neutral-300 min-h-[44px] text-neutral-400"
      />
    </form>
  );
}

export default SubscriptionForm;
