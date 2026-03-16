import React, { SyntheticEvent } from "react";
import {
  createStyles,
  fade,
  Theme,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import createSvgIcon from "@material-ui/core/utils/createSvgIcon";
import IconButton from "@material-ui/core/IconButton";
import SuccessOutlineIcon from "./Icons/SuccessOutline";
import ErrorOutlineIcon from "./Icons/ErrorOutline";
import CloseIcon from "./Icons/Close";
import { useTheme } from "@material-ui/core/styles";
import emailjs from "emailjs-com";

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 1,
    },
    "& input:invalid + fieldset": {
      borderColor: "black",
      borderWidth: 1,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  },
})(TextField);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative",
    },
    buttonSuccess: {
      backgroundColor: green[500],
      "&:hover": {
        backgroundColor: green[700],
      },
    },
    buttonProgress: {
      color: green[500],
      marginRight: "12px",
    },
  })
);

interface MessageStatus {
  sending: boolean;
  success: boolean;
}

export const ContactForm = () => {
  const [open, setOpen] = React.useState(false);
  const [status, setStaus] = React.useState<MessageStatus>({
    sending: false,
    success: false,
  });

  const classes = useStyles();

  const statusMessage = {
    success: "Message sent successfully!",
    failed: "Faled to send message, please ty again!",
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function sendEmail(e: SyntheticEvent) {
    e.preventDefault();
    e.persist();
    console.log("sendig email");
    setStaus((prev) => ({ ...prev, sending: true }));
    emailjs
      .sendForm(
        "service_ojtb9bm",
        "template_apmj124",
        e.target as HTMLFormElement,
        "user_D8oxYR3cbLpD1nSDYJqsF"
      )
      .then(
        (result) => {
          console.log(result.text);

          console.log(result.status);
          if (result.status === 200) {
            setStaus((prev) => ({ sending: false, success: true }));
          } else {
            setStaus((prev) => ({ sending: false, success: false }));
          }
          setOpen((prev) => !prev);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        (e.target as HTMLFormElement).reset();
      });
  }
  return (
    <>
      <Paper elevation={2} square style={{ opacity: "0.95", padding: "16px" }}>
        <form onSubmit={(e) => sendEmail(e)}>
          <Grid
            style={{}}
            //alignItems="center"
            //direction="column"
            justify="space-around"
            spacing={2}
            container
          >
            <Grid item xs={12}>
              <h2>CONTACT FORM</h2>
            </Grid>
            <Grid xs={12} item>
              <ValidationTextField
                fullWidth
                label="Name"
                required
                variant="outlined"
                id="validation-outlined-input-name"
                name="name"
                autoComplete="on"
              />
            </Grid>
            <Grid xs={6} item>
              <ValidationTextField
                fullWidth
                label="Telephone"
                required
                variant="outlined"
                id="validation-outlined-input-phone"
                name="phone"
                autoComplete="on"
              />
            </Grid>
            <Grid xs={6} item>
              <ValidationTextField
                fullWidth
                label="Email"
                required
                variant="outlined"
                id="validation-outlined-input-email"
                name="email"
                autoComplete="on"
              />
            </Grid>
            <Grid xs={12} item>
              <ValidationTextField
                fullWidth
                label="A good time to contact you"
                required
                variant="outlined"
                id="validation-outlined-input-contatTime"
                name="contactTime"
              />
            </Grid>

            <Grid xs={12} item>
              <ValidationTextField
                fullWidth
                label="Describe your project"
                required
                variant="outlined"
                multiline
                id="validation-outlined-input-message"
                rows="8"
                name="message"
              />
            </Grid>
            <Grid xs={12} item style={{ position: "relative" }}>
              <Button
                type="submit"
                size="large"
                variant="contained"
                className="ac-button"
                value="SUBMIT MESSAGE"
                disabled={status.sending}
              >
                {status.sending ? (
                  <>
                    <CircularProgress
                      thickness={7}
                      size={22}
                      className={classes.buttonProgress}
                    />
                    SENDING
                  </>
                ) : (
                  "SUBMIT MESSAGE"
                )}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        aria-describedby="client-snackbar"
      >
        <SnackbarContent
          style={{
            backgroundColor: status.success ? "#4cb050" : "#f44236",
          }}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
          message={
            <div className="client-snackbar">
              {status.success ? (
                <SuccessOutlineIcon style={{ marginRight: "12px" }} />
              ) : (
                <ErrorOutlineIcon />
              )}
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                  letterSpacing: "0.08em",
                }}
              >
                {status.success ? statusMessage.success : statusMessage.failed}
              </div>
            </div>
          }
        />
      </Snackbar>
    </>
  );
};
