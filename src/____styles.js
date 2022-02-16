import { createUseStyles } from "react-jss";

export const topSectionStyle = createUseStyles({
  header: {
    width: '100%',
    background: 'url(../../images/background_main.svg)',
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
        '& button:last-child': {
          width: '192px',
          flexGrow: 1,
          height: '64px',
          marginTop: '45px',
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
          color: #ffffff,
        },
      },
    },
  },
  header__signout: {
    height: '50px',
    width: '192px',
    backgroundColor: '#ffffff',
    display: 'flex',
    position: 'absolute',
    right: '0px',
    top: '70px',
    '& img': {
      height: '18px',
      width: '20px',
      margin: '16px 16px 16px 16px',
    },
    '& p': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '20px',
      lineHeight: '23px',
      display: 'flex',
      alignItems: 'center',
    },
  },
  header__search: {
    marginBottom: '120px',
  },
  header__destination: {
    flexGrow: 10,
    '& p': {
      paddingLeft: '20px',
    },
    '& input': {
      marginTop: '24px',
      borderRadius: '8px 0px 0px 8px',
      borderRight: 'none',
      '&::placeholder': {
        color: '#383838',
      },
    },
  },
  header__date: {
    '& p': {
      paddingLeft: '24px',
      color: '#ffffff',
    },
    '& input': {
      marginTop: '27px',
      borderLeft: 'none',
      borderRight: 'none',
    },
  },
  header__people: {
    flexGrow: 3,
    display: 'flex',
    paddingTop: '45px',
    '& input': {
      borderLeft: 'none',
      borderRadius: '0px 8px 8px 0px',
      '&::placeholder': {
        color: '#383838',
      },
    },
  },
  header__people_disabled: {
    border: '1px solid #cecece !important',
    color: '#cecece !important',
  },
  header__people_age: {
    '& div': {
      display: 'block',
    },
    '& span': {
      paddingTop: '16px',
      fontSize: '12px',
      width: 'auto',
      textAlign: 'left',
    },
    '& select': {
      marginTop: '12px',
      display: 'block',
      height: '30px',
      width: '99px',
      fontSize: '12px',
      border: '1px solid #3077c6',
    }
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
    background: 'url(./images/png-sprite.png)',
    backgroundPosition: '-5px -90px',
    width: '30px',
    height: '30px',
    marginLeft: '48px',
  },
  header__account: {
    background: 'url(./images/png-sprite.png)',
    backgroundPosition: '-5px 0px',
    width: '40px',
    height: '40px',
    '&:hover': {
      background: 'url(./images/png-sprite.png)',
      backgroundPosition: '-5px -45px',
      width: '40px',
      height: '40px',
    },
  },
  header__title: {
    display: 'flex',
    lineHeight: '59px',
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '50px',
    color: '#ffffff',
    paddingBottom: '100px',
  },
  header__in: {
    '& p': {
      textAlign: 'right',
      paddingRight: '5px',
    },
  },
  header__download: {
    display: 'flex',
    justifyContent: 'center',
    '& a': {
      paddingLeft: '8px',
      paddingRight: '8px',
    },
  },
  header__mobile: {
    display: 'none',
  },
  header__people_filter: {
    display: 'block',
    backgroundColor: '#ffffff',
    width: '259px',
    height: 'auto',
    position: 'absolute',
    top: '630px',
    right: '339px',
    borderRadius: '8px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '16px',
    color: '#333333',
    padding: '22px',
    '& div': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& label': {
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        color: '#333333',
      },
      '& span': {
        paddingBottom: '12px',
        width: '48px',
        height: '30px',
        marginTop: '0px',
        border: 'none',
        textAlign: 'center',
        paddingLeft: '0px',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        color: '#333333',
      },
      '& button': {
        width: '30px',
        height: '30px',
        marginTop: '0px',
        border: '1px solid #3077c6',
        color: '#3077c6',
        backgroundColor: '#ffffff',
        fontSize: '18px',
        borderRadius: '0px',
      },
      '& input': {
        width: '48px',
        height: '30px',
        marginTop: '0px',
        border: 'none',
        textAlign: 'center',
        paddingLeft: '0px',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: '16px',
        color: '#333333',
      }
    },
  },
  visible_filter: {
    display: 'block',
  },
  header__people_count: {
    paddingBottom: '12px',
    '& span': {
      paddingTop: '5px',
    },
  },
  header__people_children, header__people_rooms: {
    '& button.minus': {
      border: '1px solid #cecece',
      color: '#cecece',
    },
  },
  // header__people_rooms: {
  //   '& button.minus': {
  //     border: '1px solid #cecece',
  //     color: '#cecece',
  //   },
  // },
  
  '@media (max-width: 859px)': {
    header__main: {
      display: 'none',
    },
    header__mobile: {
      background: 'url(../../images/background_main.svg)',
      backgroundPosition: 'center',
      display: 'block',
      width: '100%',
      height: '533px',
      padding: '0px 15px',
    },
    header__menu_mobile: {
      display: 'flex',
      marginBottom: '52px',
      paddingTop: '12px',
    },
    header__logo_mobile: {
      display: 'flex',
      '& img': {
        width: '120px',
        height: '24px',
        display: 'flex',
      }
    },
    header__night_mobile: {
      background: 'url(./images/png-sprite.png)',
      backgroundPosition: '-5px -175px',
      width: '16px',
      height: '16px',
    },
    header__account_mobile: {
      background: 'url(./images/png-sprite.png)',
      backgroundPosition: '-5px -125px',
      width: '24px',
      height: '24px',
      marginLeft: '16px',
    },
    header__bar_mobile: {
      background: 'url(./images/png-sprite.png)',
      backgroundPosition: '-5px -154px',
      width: '24px',
      height: '16px',
      marginLeft: '16px',
    },
    header__buttons_mobile: {
      display: 'flex',
      paddingLeft: '102px',
      alignItems: 'center',
    },
    header__search_mobile: {
      display: 'block',
    },
    header__title_mobile: {
      paddingBottom: '31px',
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '30px',
      color: '#ffffff',
      display: 'block',
    },
    header__windows_mobile: {
      background: '#f5bd41',
      padding: '8px',
      display: 'block',
      '& input': {
        '&::placeholder': {
          color: '#383838',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: '18px',
        },
      },
      '& button': {
        margin: '0px',
        height: '48px',
        width: '100%',
        background: '#3077c6',
        border: 'none',
        borderRadius: '4px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '19px',
        lineHeight: '22px',
        color: '#ffffff',
      },
    },
    header__form_mobile: {
      display: 'block',
      paddingBottom: '32px',
    },
    header__destination_mobile: {
      display: 'flex',
      paddingBottom: '8px',
      '& label': {
        position: 'relative',
        '&::before': {
          position: 'absolute',
          content: 'url(./images/search.svg)',
          top: '16px',
          left: '12px',
        },
      },
      '& input': {
        height: '48px',
        border: 'none',
        borderRadius: '4px',
        paddingLeft: '36px',
        width: '100%',
      },
    },
    header__check_mobile: {
      display: 'flex',
    },
    header__in_mobile: {
      paddingBottom: '8px',
      position: 'relative',
      flex: 1,
      paddingRight: '8px',
      width: '50%',
      '& label': {
        color: '#383838',
        position: 'absolute',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        top: '6px',
        left: '8px',
      },
      '& input': {
        height: '48px',
        border: 'none',
        borderRadius: '4px',
        padding: '24px 0px 0px 8px',
        fontSize: '15px',
        lineHeight: '18px',
        width: '100%',
      },
    },
    header__out_mobile: {
      position: 'relative',
      paddingBottom: '8px',
      flex: 1,
      width: '50%',
      '& label': {
        color: '#383838',
        position: 'absolute',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        top: '6px',
        left: '8px',
      },
      '& input': {
        height: '48px',
        border: 'none',
        borderRadius: '4px',
        padding: '24px 0px 0px 8px',
        fontSize: '15px',
        lineHeight: '18px',
        width: '100%',
      }
    },
    header__people_mobile: {
      display: 'flex',
      paddingBottom: '8px',
    },
    header__aduls_mobile: {
      position: 'relative',
      flex: 1,
      '& input': {
        height: '48px',
        border: 'none',
        borderRadius: '4px 0px 0px 4px',
        padding: '16px 8px 0px 8px',
        width: '100%',
      },
      '& label': {
        color: '#383838',
        position: 'absolute',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        top: '6px',
        left: '8px',
      },
    },
    header__children_mobile: {
      position: 'relative',
      flex: 1,
      '& input': {
        height: '48px',
        border: 'none',
        padding: '16px 8px 0px 8px',
        width: '100%',
      },
      '& label': {
        position: 'absolute',
        color: '#383838',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        top: '6px',
        left: '8px',
      }
    },
    header__rooms_mobile: {
      position: 'relative',
      flex: 1,
      '& input': {
        height: '48px',
        border: 'none',
        borderRadius: '0px 4px 4px 0px',
        padding: '16px 8px 0px 8px',
        width: '100%',
      },
      '& label': {
        position: 'absolute',
        color: '#383838',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '14px',
        top: '6px',
        left: '8px',
      },
    },
    header__download_mobile: {
      paddingLeft: '40px',
    },
  },
  
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
})

