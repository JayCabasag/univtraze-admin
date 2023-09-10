import Login from "@/components/login/Login";

export default function LoginPage() {
  const isUserLoggedIn = false;
  return (
    <main className="h-screen flex justify-center items-center ">
      {!isUserLoggedIn && <Login />}
    </main>
  );
}
