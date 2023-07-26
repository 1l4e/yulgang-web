"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { characterLists } from "@/lib/utils/constant";

export const LoginButton = () => {

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      onClick={() => signIn()}
    >
      Đăng nhập
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      href="/register"
    >
      Đăng ký
    </Link>
  );
};

export const LogoutButton = () => {
  const random = Math.floor(Math.random() * characterLists.length)
  let image = characterLists[0]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {" "}
        <Avatar className="cursor-pointer">
          <AvatarImage src={image.image} />
          <AvatarFallback>Tài khoản</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Quản lý tài khoản</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Thông tin tài khoản</DropdownMenuItem>
        <DropdownMenuItem>Thông tin nhân vật</DropdownMenuItem>
        <DropdownMenuItem>Nạp thẻ</DropdownMenuItem>
        <DropdownMenuItem onClick={() => signOut()}>Đăng xuất</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const ProfileButton = () => {
  return <Link href="/dashboard">Dashboard</Link>;
};
