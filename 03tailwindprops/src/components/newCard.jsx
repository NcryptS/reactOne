import React from "react";

export default function NewCard({ name, subject }) {
  // using destructuring
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        class="w-full h-auto rounded-t-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80"
        alt="Card Image"
      />
      <div class="p-4  ">
        <h3 class="font-semibold text-foreground">{name}</h3>
        <p class="mt-1 text-muted-foreground-1">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          {subject}
        </a>
      </div>
    </div>
  );
}
