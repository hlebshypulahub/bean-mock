import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: 90
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        // position="fixed"
      >
        <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs>
                <Typography variant="h5" align="center">HASHOK - twój kompan do wyciepywania śmieci</Typography>
              </Grid>

              <Grid item>
                <Button
                  color="inherit"
                  startIcon={<LoginIcon />}
                  // component={Link}
                  // to="/login"
                >
                  Logowanie
                </Button>
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};
