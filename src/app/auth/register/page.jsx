'use client'

import { authClient } from "@/lib/auth-client"

const RegisterPage = () => {

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // Safely extract values as explicit strings
    const name = formData.get("name")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const password = formData.get("password")?.toString() || ""
    const image = formData.get("image")?.toString() || undefined // Use undefined if empty

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: image || undefined, // Prevents sending empty strings
    });

    if (error) {
      console.error('Registration failed:', error.message)
      // Add user-facing error state handling here
    } else {
      console.log('Registration successful:', data)
    }
  }


  return (
    <div className="my-15 mx-auto">
      <h2 className="font-bold text-2xl text-center mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">

        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name" className="input validator" placeholder="name" required />
          <p className="validator-hint hidden">Required</p>
        </fieldset>

        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input validator" placeholder="Email" required />
          <p className="validator-hint hidden">Required</p>
        </fieldset>

        <fieldset className="fieldset">
          <label className="label">Photo URL</label>
          <input type="text" name="image" className="input validator" placeholder="photo url(link)" />
          <p className="validator-hint hidden">Required</p>
        </fieldset>

        <label className="fieldset">
          <span className="label">Password</span>
          <input type="password" name="password" className="input validator" placeholder="Password" required />
          <span className="validator-hint hidden">Required</span>
        </label>

        <button className="btn btn-neutral mt-4" type="submit">Register</button>
        <button className="btn btn-ghost mt-1" type="reset">Reset</button>
      </form>
    </div>
  )
}

export default RegisterPage