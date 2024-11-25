import React from "react";
import SubscriptionForm from "./input/Input-Box";
import CloseButton from "./OK-btn";

function NewsletterSubscription() {
  return (
    <section className="flex pr-2.5">
      <div className="flex flex-col grow shrink-0 justify-center items-center px-10 py-9 mr-0 bg-white rounded-lg border border-solid shadow basis-0 border-zinc-200 w-fit">
        <div
          className="flex max-w-full rounded-xl bg-neutral-200 min-h-[158px] w-[385px]"
          role="img"
          aria-label="Newsletter subscription image"
        />
        <header className="flex flex-col items-center mt-6 max-w-full w-[385px]">
          <h2 className="text-xl font-semibold text-zinc-600">
            Subscribe to our Newsletter
          </h2>
          <p className="mt-2 text-sm leading-loose text-center text-zinc-600 text-opacity-60">
            Join thousands getting emails in their inbox.
          </p>
        </header>
        <SubscriptionForm />
      </div>
      <CloseButton />
    </section>
  );
}

export default NewsletterSubscription;
