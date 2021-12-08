import { useEffect } from 'react'

const KakaoAuthHandle = (props) => {
  let code = new URL(window.location.href).searchParams.get('code')

  const kakaoLogin = () => {
    console.log(code)
  }

  useEffect(() => {
    kakaoLogin()
  })
  return <>loading</>
}

export default KakaoAuthHandle
