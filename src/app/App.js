import React from 'react';
import injectStyle from 'react-jss'

const AppRouter = props => {
  const { classes } = props
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.title}>Space Mayhem</h1>
        <button className={classes.button}>
          <span className={classes.span}>START</span>
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#232830',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: '#FFF',
    margin: '60px 0px',
  },
  button: {
    width: '50%',
    height: '50px',
    backgroundColor: 'grey',
    border: 'solid 5px black',
    boxShadow: '10px 10px',
    "&:active": {
      boxShadow: '5px 5px',
      marginTop: '5px',
      marginLeft: '5px'
    },
    "&:focus": {
      outline: 0,
    }
  },
  span: {
    fontSize: '20px',
  },
}

export default injectStyle(styles)(AppRouter);