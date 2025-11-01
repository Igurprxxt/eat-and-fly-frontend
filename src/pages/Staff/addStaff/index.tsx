import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MainCard from "components/MainCard";
import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router";
import CapitalizeInput from "components/ui/CaptializeInput";
import EmailInput from "components/ui/emailInput";
import Dropdown from "components/ui/Dropdown";
import ThemeButton from "components/ui/Button";
import { inviteStaff } from "services/staff";
import { openSnackbar } from "api/snackbar";
import { SnackbarProps } from "types/snackbar";
import { InfoCircle } from "iconsax-react";
import { Autocomplete } from "@mui/material";
import { countriesPhone } from "utils/locales/phone";
import { OutlinedInput } from "@mui/material";
import { useRole } from "hooks/useAuth";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  countryCode: z.string().min(1, "Country code is required"),
  number: z.string().min(1, { message: "Phone number is required." }),
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Please enter a valid email address."),
  role: z
    .string()
    .or(z.number())
    .refine((value) => value !== undefined && value !== 0 && value !== "", {
      message: "Role selection is required.",
    }),
});

const AddStaff: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { roles }: any = useRole();
  const isMd = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      role: "",
      countryCode: "+1",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    setLoading(true);
    inviteStaff({
      body: { ...data, email: data?.email?.toLowerCase() },
    })
      ?.then((res) => {
        setLoading(false);
        navigate("/staff");
        openSnackbar({
          open: true,
          message: "Invite Send successfully.",
          variant: "alert",
          alert: {
            color: "success",
          },
        } as SnackbarProps);
      })
      .catch((err) => {
        setLoading(false);
        openSnackbar({
          open: true,
          message: err?.data?.error?.message || "Something went wrong",
          variant: "alert",
          alert: {
            color: "error",
            icon: <InfoCircle />,
          },
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        } as SnackbarProps);
      });
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Stack direction="column" spacing={2}>
          <Typography variant={isMd ? "h3" : "h4"} color="#394663">
            Add Staff
          </Typography>
        </Stack>
      </Grid>

      <Grid item xs={12} md={8}>
        <MainCard title="Staff Information">
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction={"row"} xs={12} spacing={2}>
              <Grid item xs={12} sm={6}>
                <CapitalizeInput
                  required
                  wordLimit={15}
                  control={control}
                  label={"First Name"}
                  name={"firstName"}
                  placeholder="Enter first name"
                  error={errors}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CapitalizeInput
                  required
                  wordLimit={15}
                  control={control}
                  label={"Last Name"}
                  name={"lastName"}
                  placeholder="Enter last name"
                  error={errors}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <FormLabel
                    required
                    sx={{
                      "& .MuiFormLabel-asterisk ": { color: "red" },
                      mb: 0.5,
                      color: "#5A667B",
                      fontWeight: 600,
                    }}
                  >
                    Phone Number
                  </FormLabel>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    width={"100%"}
                    gap={0}
                  >
                    <Controller
                      name="countryCode"
                      control={control}
                      render={({ field }) => (
                        <Autocomplete
                          id="country-select-demo"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 0,
                              borderTopLeftRadius: 6,
                              borderBottomLeftRadius: 6,
                            },
                            width: 70,
                          }}
                          disableClearable
                          options={countriesPhone}
                          onChange={(event, selectedOption: any) =>
                            field.onChange(selectedOption?.phone || "")
                          }
                          value={countriesPhone.find(
                            (option) => option.phone === field.value || null
                          )}
                          autoHighlight
                          getOptionLabel={(option: any) => option.phone}
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ "& > img": { mr: 1, flexShrink: 0 } }}
                              {...props}
                            >
                              {option.phone}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              name="countryCode"
                              sx={{ borderRadius: 0 }}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: "new-password",
                              }}
                            />
                          )}
                        />
                      )}
                    />

                    <Controller
                      name="number"
                      control={control}
                      render={({ field }) => (
                        <OutlinedInput
                          notched={false}
                          {...field}
                          placeholder="Enter phone number"
                          sx={{
                            height: "41px",
                            borderRadius: "0",
                            borderTopRightRadius: "6px",
                            borderBottomRightRadius: "6px",
                            borderTopLeftRadius: "0",
                            borderBottomLeftRadius: "0",
                          }}
                          fullWidth
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, "");
                            if (value.length <= 10) {
                              field.onChange(value);
                            }
                          }}
                        />
                      )}
                    />
                  </Stack>

                  {(errors?.number?.message && (
                    <FormHelperText sx={{ color: "red", marginTop: 1 }}>
                      {errors?.number?.message}
                    </FormHelperText>
                  )) ||
                    (errors?.countryCode?.message && (
                      <FormHelperText sx={{ color: "red", marginTop: 1 }}>
                        {errors?.countryCode?.message}
                      </FormHelperText>
                    ))}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <EmailInput
                  required
                  control={control}
                  label={"Email"}
                  name={"email"}
                  placeholder="Enter email"
                  error={errors}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Dropdown
                  required
                  control={control}
                  PlaceholderValue="Select role"
                  label="Role"
                  name="role"
                  options={roles?.map((ele: any) => {
                    return {
                      label: ele?.name,
                      value: ele?.uuid,
                    };
                  })}
                  error={errors}
                />
              </Grid>
              <Stack
                direction="row"
                justifyContent="flex-end"
                width="100%"
                mt={3}
                gap={2}
              >
                <ThemeButton
                  size="small"
                  onClick={() => {
                    navigate("/staff");
                  }}
                  variant="outlined"
                >
                  Cancel
                </ThemeButton>
                <ThemeButton
                  size="small"
                  loading={loading}
                  type="submit"
                  variant="contained"
                >
                  Add Staff
                </ThemeButton>
              </Stack>
            </Grid>
          </form>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default AddStaff;
