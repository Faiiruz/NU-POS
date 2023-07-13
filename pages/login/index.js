import React, { useEffect, useState } from "react"
import Router, { useRouter } from 'next/router'
import Seo from "@/components/Seo"
import Link from "next/link"
import Logo from "@/components/Logo"
import { G } from "/global/global.min.js"
import AuthRepository from "@/repositories/AuthRepository"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const IndexPage = (props) => {
  const router = useRouter()
  const [defultLabel, setDefaultLabel] = useState("Next")
  const [checkedRemember, setCheckedRemember] = useState()
  const [loginStep, setLoginStep] = useState(1)
  const [userData, setUserData] = useState({ username: "", password: "" })
  const [isLogin, setLogin] = useState(false)
  const [isCheckLogin, setIsCheckLogin] = useState(1);

  useEffect(() => {
    console.log("13124");
    try {
      let token = localStorage.getItem("xa");
      let dataToken = JSON.parse(token);
      console.log(dataToken);
      AuthRepository.getStatus({
        XA: dataToken,
        param: "user",
      }).then((data) => {
        console.log(data);
        if (data.hasOwnProperty("status")) {
          console.log("123");
      } else {
          // if success login
          router.push("/");
      }
      });
    } catch (error) {
    }
  });

  const handlerSubmit = e => {
    e.preventDefault()
    if (loginStep == 1) {
      if (userData['username'] == "") {
        return toast.info(`username required`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setLoginStep(2)
      setDefaultLabel("Login")
    }
    if (loginStep == 2) {
      if(userData['password'] == ""){
        return  toast.info(`password required`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setLogin(true)
      setDefaultLabel("Loading...")

      let uus = G().enc(JSON.stringify({
        'user': userData.username,
        'pass': userData.password
      }), 2, 6)

      const pwd = G().rndStr(uus.length, 1, 6).substring(0, uus.length).replace(/\W/g, "")

      let payload = {
        'us': uus,
        'pass': pwd
      }
      AuthRepository.postLogin({ "uspw": JSON.stringify(payload) })
        .then(responseData => {
          // console.log(responseData)
          if (responseData.token) {
            localStorage.setItem("xa", JSON.stringify(responseData.token));
            toast.success('Success Login', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            // window.location('/dashboard')
            window.location.pathname = "/"
            // Router.push('/dashboard');
          } else {
            toast.error(responseData.msg, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setLogin(false)
            setDefaultLabel("Login")
          }
        })
    }
  }

  const handlerBack = e => {
    e.preventDefault()
    setLoginStep(1)
    setDefaultLabel("Next")
  }

  const handlerChange = e => {
    setUserData(prevUserData => ({
      ...prevUserData,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <>
      <Seo
        title="GNUSA GPT"
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* {
        isCheckLogin == 1 ?
          <AwaitData path={"/login"} /> : */}
          <section className="container h-screen mx-auto w-full bg-white px-0">
            <div className="h-full">
              <div className="g-6 flex h-full flex-wrap items-center justify-center">
                <div className="hidden shrink-1 mb-12 grow-0 basis-auto lg:block md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                  <img
                    src="/login-img.svg"
                    className="w-full"
                    alt="Login Image" />
                </div>

                <div className="mb-12 w-8/12 md:mb-0 md:w-8/12 lg:w-4/12 xl:w-4/12">
                  <form className="max-w-lg" onSubmit={handlerSubmit}>
                    <div className="flex flex-row items-center justify-center lg:justify-start mb-10">
                      <div className="mx-auto">
                        <Logo />
                      </div>
                    </div>
                    <div className="relative mb-6">
                      {
                        loginStep == 1 ? <input
                          type="text"
                          name="username"
                          required
                          onChange={handlerChange}
                          value={userData['username']}
                          className="block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none input-field"
                          placeholder="Username"
                        /> : <input
                          type="password"
                          name="password"
                          required
                          value={userData['password']}
                          onChange={handlerChange}
                          className="block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none input-field"
                          placeholder="Password"
                        />
                      }
                    </div>
                    <div className="mb-6 flex items-center justify-between">

                      <div className="mb-[0.125rem] block min-h-[1.5rem]">
                        <div className="flex items-center">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-100 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={checkedRemember}
                            onChange={() => setCheckedRemember(!checkedRemember)}
                          />
                          <label className="ml-2 hover:cursor-pointer" htmlFor="default-checkbox">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div>
                        <Link className="text-blue-500 hover:underline" href="#!">Forgot password?</Link>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex">
                        {loginStep === 2 && (
                          <button
                            type="button"
                            onClick={handlerBack}
                            disabled={isLogin}
                            className={`rounded bg-red-600 px-4 py-2 mr-4 text-sm font-medium uppercase leading-normal text-white w-18 focus:ring focus:ring-red-400 focus:outline-none ${isLogin ? 'opacity-50 cursor-not-allowed' : ''}`}
                          >
                            Back
                          </button>
                        )}
                        <button
                          type="submit"
                          disabled={isLogin}
                          onClick={handlerSubmit}
                          className={`rounded bg-blue-400 py-2 text-sm font-medium uppercase leading-normal text-white w-full focus:ring focus:ring-blue-400 focus:outline-none ${isLogin ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                          {defultLabel}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
      {/* } */}
    </>
  )
}

export default IndexPage
