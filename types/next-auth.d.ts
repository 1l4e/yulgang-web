import "next-auth/jwt"

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth/jwt" {
  interface JWT {
   user: {
    username: string,
    password:string
   }
    
  }
}
declare module "next-auth" {
  interface Session{
   user?: DefaultUser & {username: string,password:string}
  }
  interface User {
    username: string,
    password: string,
  }
}