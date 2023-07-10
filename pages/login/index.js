import { useState } from "react";
import AuthRepository from "@/repositories/AuthRepository";
import { G } from "@/global/global.min.js";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [isUser, setIsUser] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isLogin, setLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlerChange = (e) => {
    if (e.target.name == "username") {
      setIsUser(e.target.value);
    }
    if (e.target.name == "password") {
      setIsPassword(e.target.value);
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(isUser, isPassword);
    setLogin(true);
    setLoading(true);
    // if (this.state.submitLogin == false) {
    let uus = G().enc(
      JSON.stringify({
        user: isUser,
        pass: isPassword,
      }),
      2,
      6
    );

    const pwd = G()
      .rndStr(uus.length, 1, 6)
      .substring(0, uus.length)
      .replace(/\W/g, "");

    let payload = {
      us: uus,
      pass: pwd,
    };

    // this.setState({ errorLogin: true });

    AuthRepository.postLogin({ uspw: JSON.stringify(payload) }).then(
      (responseData) => {
        console.log(responseData);
        if (responseData.token) {
          localStorage.setItem("xa", JSON.stringify(responseData.token));
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: "Berhasil login",
          //   showConfirmButton: false,
          //   timer: 3000,
          // });
          setLogin(false);
          setLoading(false);
          router.push("/");
        } else {
          // Swal.fire({
          //   icon: "error",
          //   title: "Username atau password salah",
          // });
          setLogin(false);
          setLoading(false);
          setErrorMessage("Username atau password salah.");
          // this.handleNotification("error", "Email atau Kata Sandi salah!")
        }
      }
    );
    // }
  };

  const handleCloseError = () => {
    setErrorMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-800">
      <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>
        {errorMessage && (
          <div className="bg-red-500 text-white px-4 py-2 rounded-md mb-4 flex justify-between items-center">
            <span>{errorMessage}</span>
            <button
              onClick={handleCloseError}
              className="ml-2 outline-none focus:outline-none border-none bg-transparent"
            >
              X
            </button>
          </div>
        )}
        <form>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              type="username"
              onChange={handlerChange}
              value={isUser}
              name="username"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              onChange={handlerChange}
              value={isPassword}
              name="password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="********"
            />
          </div>
          <button
            onClick={handlerSubmit}
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors duration-300"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}
