const CLIENT_ID = '61db540d862894225a4938d0133cb467'
const REDIRECT_URI = 'http://localhost:3000/user/kakao/callback'

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`
