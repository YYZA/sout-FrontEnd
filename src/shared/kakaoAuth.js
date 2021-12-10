const CLIENT_ID = 'af4c2105b17debc9c5ba96f70c6ee0b9'
const REDIRECT_URI =
  'http://hanghae99-sout.s3-website.ap-northeast-2.amazonaws.com/user/kakao/callback'

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
