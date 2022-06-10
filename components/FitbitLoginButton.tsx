import { Button } from "@mui/material";
import { ReactElement } from "react";

function FitbitLoginButton(): ReactElement {
    return (
        <Button variant="contained" href={"https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=" + process.env.NEXT_PUBLIC_CLIENT_ID + "&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Foauth&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight%20oxygen_saturation%20respiratory_rate&expires_in=604800"}>Login to Fitbit</Button>
    );
}

export default FitbitLoginButton;

