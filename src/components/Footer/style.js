import { createUseStyles } from "react-jss";

export const footerStyle = createUseStyles({
    footer__mobile: {
      display: 'none'
    },
    footer__section: {
      background: '#10367c',
      height: '630px',
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '20px',
      lineHeight: '47px',
      textAlign: 'left',
      color: '#ffffff',
      display: 'flex',
      padding: '120px 104px',
      justifyContent: 'space-between',
    },
    footer__about: {
      listStyleType: 'none',
    },
    footer__property: {
      listStyleType: 'none',
    },
    footer__support: {
      listStyleType: 'none',
    },
    footer__header: {
      fontWeight: 600,
    },
    footer__copyright: {
      position: 'absolute',
      paddingTop: '374px',
      fontSize: '15px',
    },
    
    '@media (max-width: 859px)': {
      footer: {
        width: '100%',
        height: '203px',
      },
      footer__section: {
        display: 'none',
      },
      footer__mobile: {
        background: '#10367c',
        width: '100%',
        height: '203px',
        display: 'flex',
        padding: '40px 67px 0px',
        flexDirection: 'column',
      },
      footer__logo: {
        display: 'flex',
        height: '19px',
      },
      footer__links: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '18px',
        color: '#ffffff',
        textDecoration: 'underline',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '40px',
      },
      footer__copyright_mobile: {
        paddingTop: '32px',
        fontSize: '12px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: '18px',
        textAlign: 'center',
        color: '#ffffff',
      },
    },
})
