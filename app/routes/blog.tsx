import { Outlet } from "@remix-run/react";

export default function BlogPage() {
  return (
    <div className="prose px-4 py-6 max-w-full prose-inline-code:p-[.2em_.4em] prose-inline-code:before:content-none prose-inline-code:after:content-none prose-inline-code:margin-0 prose-inline-code:text-[85%] prose-inline-code:whitespace-break-spaces prose-inline-code:rounded-md prose-inline-code:bg-[rgba(175,184,193,0.2)] prose-inline-code:text-inherit prose-inline-code:font-medium">
      <Outlet />
    </div>
  );
}
