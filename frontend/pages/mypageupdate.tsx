/* eslint-disable */
import { FC } from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Grid,
  Box,
  TextField,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import { updateUserInfo } from "@/store/modules/user";
import { RootState } from "../store/modules";
import { connect } from "react-redux";
import defaultProfile from "../public/images/defaultProfile.png";
import Image from "next/image";

const mapStateToProps = (state: RootState) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    //   updateUserInfo: (paramsObj) => updateUserInfo(paramsObj),
  };
};

const MyPageUpdate: FC = () => {
  return (
    <div className="viewContainer">
      <Box
        sx={{
          alignItems: "center",
        }}
      >
        <Typography variant="h3" align="center" sx={{ mb: 10 }}>
          회원 정보 수정
        </Typography>
        <Stack
          direction="row"
          spacing={20}
          alignItems="center"
          justifyContent="center"
        >
          <Stack>
            <Image
              src={defaultProfile}
              alt="profile image"
              width="200px"
              height="200px"
            />
            <Button variant="contained" sx={{ mt: 5 }}>
              프로필 이미지 변경
            </Button>
          </Stack>
          <Stack>
            <Stack
              sx={{
                alignItems: "left",
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography sx={{ width: 50 }}>이름</Typography>
                <TextField defaultValue={"유저이름"}></TextField>
                <Button variant="contained">중복 확인</Button>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{ mt: 4 }}
                alignItems="center"
              >
                <Typography sx={{ width: 50 }}>소개글</Typography>
                <TextField defaultValue={"소개글"}></TextField>
              </Stack>
              <Grid
                direction="row"
                spacing={4}
                sx={{ mt: 4 }}
                alignItems="right"
              ></Grid>
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems="center" sx={{ mt: 10 }}>
          <Button variant="contained" sx={{ width: 150 }}>
            수정 완료
          </Button>
        </Stack>
      </Box>
      <style jsx>
        {`
          .viewContainer {
            padding: 150px 200px;
          }
        `}
      </style>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPageUpdate);