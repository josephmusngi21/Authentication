import { FormEvent } from "react";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const router = useRouter();
  // Other router methods include:
  // - router.replace(): Replaces the current route without adding a new entry in the history stack.
  // - router.back(): Navigates back in the history stack.
  // - router.reload(): Reloads the current page.
  // - router.prefetch(): Prefetches a page for faster navigation.

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Example: Navigate to a success page after form submission
    router.push("/success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />

      <button type="submit">Register</button>
    </form>
  );
}
