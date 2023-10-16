import React from 'react'

const Movies = () => {
  const Rest_api_key='904fd08b4e6a09113ade39cbb38fe1dd' //REST API KEY
    const redirect_uri = 'http://localhost:3000/movies' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    
    <div class="login">
      <h2>서비스 이용을 위한 로그인이 필요합니다.</h2>
      <form>
          <input type="text" placeholder='아이디'/>
          <input type="password" placeholder='비밀번호'/>
      </form>
      <button onClick={handleLogin}></button>
    </div>
    )
}

export default Movies
