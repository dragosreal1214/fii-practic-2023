import React, { useState } from "react"
import { Input } from "antd"
import AuthLayout from "../../common/components/layout/Auth"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signupError, setSignupError] = useState("")

  const handleLogin = () => {
    // TO DO: homework
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
