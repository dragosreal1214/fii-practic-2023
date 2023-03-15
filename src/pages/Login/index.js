import React, { useState } from "react"
import { Input } from "antd"
import AuthLayout from "../../common/components/layout/Auth"
import { auth, authService } from "../../utils/firebase"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signupError, setSignupError] = useState("")

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(authService, email, password)
    .then((userProfile) => {
      const user = userProfile.user;
      console.log(userProfile);
      navigate("/profile");
    })
    .catch((err) => setSignupError(err.message))
  }

  return (
    <AuthLayout
      errorMessage={signupError}
      submitText="Login"
      redirectLink="/auth/register"
      redirectLinkText="Register"
      handleSubmit={handleLogin}
    >
      <Input
        autoComplete="email"
        label="Email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        autoComplete="password"
        label="Password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </AuthLayout>
  )
}

export default Login
