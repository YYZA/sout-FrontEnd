import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button, Grid, Input, Text } from "../elements";
import { userActions } from "../redux/modules/user";
import { instance } from "../shared/api";
import { KAKAO_AUTH_URL } from "../shared/kakaoAuth";

const SignIn = (props) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await axios
      .post("http://localhost:8080/user/login", {
        username: data.email,
        password: data.password,
      })
      .then((res) => {
        document.cookie = "x_auth" + "=" + res.headers.authorization;
        dispatch(
          userActions.setUser({
            username: data.email,
          })
        );
        props.history.push("/");
      })
      .catch((err) => {
        alert("아이디 혹은 비밀번호를 확인하세요.");
      });
  };
  const kakaoAuth = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Grid
      border="1px solid"
      bg="#fff"
      radius="5px"
      height="100%"
      max_width="50vw"
      margin="5vw auto 12vw auto"
      min_height="50%"
      min_width="360px"
      padding="30px 0px"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid flex padding="16px" margin="20px 0px 0px 0px">
          <Text fontSize="36px" bold>
            Sign In
          </Text>
          <Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>E-mail</Text>
              <InputBox
                placeholder="이메일을 입력해주세요!"
                {...register("email")}
              />
            </Grid>
            <Grid margin="10px 0px 0px 0px">
              <Text>Password</Text>
              <InputBox
                placeholder="패스워드를 입력해주세요!"
                {...register("password")}
              />
            </Grid>
            <Grid margin="20px 0px 0px 0px">
              <ButtonContainer flex>
                <Button type="submit" padding="10px" width="100%">
                  로그인
                </Button>
                <Button
                  _onClick={() => props.history.push("/signup")}
                  margin="0px 0px 0px 10px"
                  padding="10px"
                  width="100%"
                >
                  회원가입하러 가기
                </Button>
              </ButtonContainer>
            </Grid>
          </Grid>
        </Grid>
      </form>
      <Grid padding="0px 16px">
        <KakaoButton id="login-kakao-btn" onClick={kakaoAuth}>
          카카오로 시작하기
        </KakaoButton>
      </Grid>
    </Grid>
  );
};

const InputBox = styled.input`
  border-radius: 5px;
  margin: 10px 0px;
  border: 1px solid #ddc6b6;
  width: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const KakaoButton = styled.button`
  border-radius: 5px;
  width: 100%;
  background: #fae100;
  padding: 10px;
`;

export default SignIn;
