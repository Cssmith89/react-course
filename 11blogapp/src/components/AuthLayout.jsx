import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentication = true}) {

  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate()
  const [loader, setLoader] = UseState(true)

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate('/login')
    } else is (!authentication && authStatus !== authentication); {
      navigate("/")
    }
    setLoader(false)
  }, [authStatus, authentication, navigate])

  return loader ? null : <>{children}</>
}


export default Protected


