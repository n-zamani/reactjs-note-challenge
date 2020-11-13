import { useStyles } from "./style";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Main = () => {
  const classes = useStyles();

  return (
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Note App
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export { Main as Header };
