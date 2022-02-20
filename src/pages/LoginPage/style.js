import { createUseStyles } from "react-jss";

export const loginPageStyle = createUseStyles({
  header: {
    width: '100%',
    background: 'url(images/background_main.svg)',
    backgroundSize: 'cover',
  },
  header__main: {
    paddingTop: '51px',
    paddingLeft: '104px',
    paddingRight: '104px',
    height: '100vh',
      '& form': {
        display: 'flex',
        '& label': {
          color: '#ffffff',
          lineHeight: '21px',
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: '18px',
          marginBottom: '24px',
        },
        '& input': {
          height: '64px',
          width: '100%',
          paddingLeft: '24px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: '18px',
          lineHeight: '21px',
          color: '#383838',
          border: '3px solid #f3f3f4',
          borderLeft: 'none',
          borderRight: 'none',
        },
        '& button': {
          width: '320px',
          flexGrow: 1,
          height: '48px',
          marginTop: '24px',
          color: '#ffffff',
          background: '#3077c6',
          borderRadius: '8px',
          fontSize: '24px',
        }
      },
  },
  header__menu: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '202px',
    position: 'relative',
    '& ul': {
      listStyleType: 'none',
      display: 'flex',
      alignItems: 'center',
      '& li': {
        marginLeft: '25px',
        position: 'relative',
        '& a': {
          fontFamily: 'Roboto',
          fontWeight: 400,
          fontSize: '24px',
          listStyleType: 'none',
          textDecoration: 'none',
          color: '#ffffff',
        },
      },
    },
  },
  header__stays: {
    '&::after': {
      content: '',
      position: 'absolute',
      width: '100%',
      height: '4px',
      background: '#f5bd41',
      top: '38px',
      left: '0px',
    },
  },
  header__attractions: {
    '&:hover': {
      '&::after': {
        content: '',
        position: 'absolute',
        width: '100%',
        height: '4px',
        background: '#f5bd41',
        top: '38px',
        left: '0px',
      },
    },
  },
  header__night: {
    background: 'url(/images/png-sprite.png)',
    backgroundPosition: '-5px -90px',
    width: '30px',
    height: '30px',
    marginLeft: '48px',
  },
  header__account: {
    background: 'url(/images/png-sprite.png)',
    backgroundPosition: '-5px 0px',
    width: '40px',
    height: '40px',
    '&:hover': {
      background: 'url(/images/png-sprite.png)',
      backgroundPosition: '-5px -45px',
      width: '40px',
      height: '40px',
    },
  },
  header__login: {
    width: '400px',
    height: '364px',
    background: '#ffffff',
    margin: '0px auto',
    padding: '0 40px',
    '& form': {
      display: 'block !important',
      margin: '0px auto',
      width: '100%',
      '& p': {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '24px',
        lineHeight: '28px',
        textAlign: 'center',
        paddingTop: '36px',
        paddingBottom: '24fpx',
      },
      '& div': {
        margin: 0,
        '& p': {
          padding: '12px 0 8px 0',
          textAlign: 'left',
        },
        '& label': {
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '16px',
          lineHeight: '19px',
          color: 'black',
        },
        '& input': {
          border: '2px solid #cecece',
          borderRadius: '8px',
          width: '100%',
          padding: 0,
          height: '41px',
          paddingLeft: '10px',
        },
      } 
    },
  },
})