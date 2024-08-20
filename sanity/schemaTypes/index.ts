import { type SchemaTypeDefinition } from 'sanity'
import altImage from './altImage'
import link from './link'
import blockContent from './blockContent';
import hero from './hero';
// import pageLink from './menuBuilder/pageLink';
import specialBlock from './contentBlock';
import menuItem from './menuBuilder/menuItem';
import merchBlock from './merchBlock';
import textOnly from './textOnly';
import siteSettings from './siteSettings/generalSettings';
import social from './siteSettings/social';
import contactInfo from './siteSettings/contactInfo';
import ticketOption from './siteSettings/ticketOption';
import tickets from './siteSettings/tickets';
import footerSettings from './siteSettings/footerSettings';
import footerLogo from './siteSettings/footerLogo';
import footerSponsor from './siteSettings/footerSponsor';
import connect from './siteSettings/connect';
import home from './pages/home';
import page from './pages/page';
import artist from './artist';
import scheduleItem from './pages/lineupPage/scheduleItem';
import schedule from './pages/lineupPage/schedule';
import lineupPage from './pages/lineupPage/lineup';
import faq from './faq';
import infoPage from './pages/info';
import fieldOptions from './forms/fieldOptions';
import textField from './forms/textField';
import textArea from './forms/textArea';
import emailField from './forms/emailField';
import phoneField from './forms/phoneField';
import addressField from './forms/addressField';
import checkBoxes from './forms/checkBoxes';
import radioButtons from './forms/radioButtons';
import selectField from './forms/selectField';
import fileUpload from './forms/fileUpload';
import timeField from './forms/timeField';
import dateField from './forms/dateField';
import dateTimeField from './forms/dateTimeField';
import forms from './forms/forms';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // General Objects
    altImage,
    link,
    blockContent,
    hero,
    // pageLink,
    specialBlock,
    menuItem,
    merchBlock,
    textOnly,

    // Site Settings
    //General Settings

    siteSettings,
    social,
    contactInfo,
    //Tickets Options
    ticketOption,
    tickets,
    // Footer Settings
    footerSettings,
    footerLogo,
    footerSponsor,
    // Connect Block
    connect,

    // Home Page
    home,

    page,
    // Lineup Page
    artist,
    scheduleItem,
    schedule,
    lineupPage,
    // Info Page
    faq,
    infoPage,
    // Forms
    fieldOptions,
    textField,
    textArea,
    emailField,
    phoneField,
    addressField,
    checkBoxes,
    radioButtons,
    selectField,
    fileUpload,
    timeField,
    dateField,
    dateTimeField,
    forms,
  ],
};
