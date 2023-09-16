import { signOutAction } from "@/services/actions/authActions"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function LogoutPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const logout = async () => {
      await signOutAction().then(() => {
        navigate('/')
      }).catch((error) => {
        console.log(error)
      })
    }
    logout()
    return () => {}
  }, [navigate])
  return <main>Logging out...</main>;
}
