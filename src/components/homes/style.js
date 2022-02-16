import { createUseStyles } from "react-jss";

export const homesStyle = createUseStyles({
  homes: {
    padding: '0 105px',
    background: '#eaf0f9',
  },
  homes__h1: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '40px',
    lineHeight: '47px',
    color: '#383838',
    paddingTop: '120px',
    paddingBottom: '105px',
  },
  homes__slider: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '120px',
    '& img': {
      width: '296px',
      height: '296px',
      objectFit: 'cover',
    },
    '& a': {
      textDecoration: 'none',
    },
    '& div': {
      '&:last-child': {
        position: 'relative',
        '&:after': {
          content: 'url(./images/arrow.svg)',
          position: 'absolute',
          top: '125px',
          left: '270px',
        },
      },
    },
    '& p': {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '28px',
      color: '#3077c6',
      paddingTop: '24px',
      '&:last-child': {
        color: '#bfbfbf',
      },
    },
  },
  homes__slider_name: {
    color: '#3077c6 !important',
  },
  homes__available_hotel: {
    width: '192px',
    flexGrow: 1,
    height: '64px',
    marginTop: '45px',
    color: '#ffffff',
    background: '#3077c6',
    borderRadius: '8px',
    fontSize: '24px',
  },
  
  '@media (max-width: 859px)': {
    homes: {
      padding: 0,
    },
    homes__h1: {
      textAlign: 'center',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '28px',
      lineHeight: '33px',
      color: '#383838',
      paddingTop: '40px',
      paddingBottom: '32px',
    },
    homes__slider: {
      justifyContent: 'space-evenly',
      paddingBottom: '40px',
      '& div': {
        maxWidth: '156px',
        '&:nth-child(2)': {
          position: 'relative',
          '&::after': {
            content: 'url(./images/arrow_mobile.svg)',
            position: 'absolute',
            top: '60px',
            left: '135px',
          },
        },
        '&:nth-child(3)': {
          display: 'none',
        },
        '&:nth-child(4)': {
          display: 'none',
        },
      },
      '& p': {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '14px',
        paddingTop: '6px',
        '&:last-child': {
          paddingTop: '4px',
        }
      },
    },
  },
  // homes__available_hotel: {
  //   width: '192px',
  //   flexGrow: 1,
  //   height: '64px',
  //   marginTop: '45px',
  //   color: '#ffffff',
  //   background: '#3077c6',
  //   borderRadius: '8px',
  //   fontSize: '24px',
  // },
})