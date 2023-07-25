"use client";
import { signOut } from "next-auth/react";

export default function SignOut() {
  return (
    <button
      className="text-blue-500 hover:text-slate-700 transition-all"
      onClick={() => signOut()}
    >
      Đăng xuất
    </button>
  );
}
