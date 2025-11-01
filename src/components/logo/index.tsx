// @ts-nocheck
import { Link } from "react-router-dom";
import { To } from "history";

// material-ui
import ButtonBase from "@mui/material/ButtonBase";
import { SxProps } from "@mui/system";
import logo from "assets/images/Smart Global__2_-removebg-preview.png";
import newLogo from "assets/images/Smart Global__4_-removebg-preview.png";
import logo2 from "assets/images/app/newlogo.png";

// project-imports
import Logo from "./LogoMain";

import useAuth from "hooks/useAuth";
import { APP_DEFAULT_PATH } from "config";
import Avatar from "components/@extended/Avatar";
import LogoIcon from "./LogoIcon";
import LogoSvg from "assets/svg/header";

interface Props {
  isIcon?: boolean;
  sx?: SxProps;
  to?: To;
}

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection({ isIcon, sx, to }: Props) {
  const { isLoggedIn } = useAuth();

  return (
    <ButtonBase
      disableRipple
      {...(isLoggedIn && {
        component: Link,
        to: !to ? APP_DEFAULT_PATH : to,
        sx,
      })}
    >
      {!isIcon ? (
        <img src={"/mainLogo.png"} width={160} />
      ) : (
        <Avatar
          alt="User 1"
          src={"/mainLogo.png"}
          variant="circular"
          size="lg"
          // width={10}
          sx={{ m: "0 auto", bgcolor: "transparent" }}
        />
      )}
    </ButtonBase>
  );
}
