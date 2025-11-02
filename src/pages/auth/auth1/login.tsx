import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AuthWrapper2 from "sections/auth/AuthWrapper2";
import AuthLogin from "sections/auth/auth-forms/AuthLogin";

// ================================|| LOGIN ||================================ //

export default function Login() {
  return (
    <AuthWrapper2>
      <Grid container spacing={3}>
        <Grid
          item
          ml={14}
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ textAlign: "center" }}
        >
          <a
            className="flex items-center space-x-2 text-primary hover:text-primary-light transition-smooth group"
            href="/"
          >
            <div className="p-1.5 bg-[#334735] rounded-lg shadow-soft group-hover:shadow-glow transition-smooth">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-plane h-6 w-6 text-white"
              >
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
              </svg>
            </div>
            <span className="text-xl font-bold">Eat&amp;Fly</span>
          </a>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">Login</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthLogin forgot="/auth/forgot-password2" />
        </Grid>
      </Grid>
    </AuthWrapper2>
  );
}
