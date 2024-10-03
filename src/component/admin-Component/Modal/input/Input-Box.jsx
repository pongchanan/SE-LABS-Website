import React from "react";

function SubscriptionForm({ register, name }) {
  return (
    <>
      <label htmlFor="name" className="sr-only">
        Your Name
      </label>
      <input
        id="name"
        type="text"
        {...register(name, { required: true })}
        className="flex-1 shrink gap-2.5 self-stretch px-4 py-3.5 w-full bg-white rounded-lg border border-solid border-neutral-300 min-h-[44px] text-neutral-400"
      />
    </>
  );
}

export default SubscriptionForm;
