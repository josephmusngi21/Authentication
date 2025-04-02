import { FormEvent } from "react";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const router = useRouter();

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
