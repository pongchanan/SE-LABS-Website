import React from "react";
//need to fetch all possible gmails
function gmailCreateUser({ register, gmail }) {
  return (
    <>
      <label htmlFor="name" className="sr-only">
        Your Name
      </label>
      <input
        id="name"
        type="text"
        {...register(gmail, {
          required: "Username is required",
          //   validate: async (value) => {
          //     const isUsernameAvailable = await checkUsernameAvailability(value); // Your async check
          //     return isUsernameAvailable || "Username is taken";
          //   },
        })}
        className="flex-1 shrink gap-2.5 self-stretch px-4 py-3.5 w-full bg-white rounded-lg border border-solid border-neutral-300 min-h-[44px] text-neutral-400"
      />
    </>
  );
}

export default gmailCreateUser;
