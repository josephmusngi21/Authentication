import { FormEvent } from "react";
import { useRouter } from "next/router";

export default function RegisterPage() {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />

      <button type="submit">Register</button>
    </form>
  );
}
