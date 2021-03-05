import antdHi from "../../../../node_modules/antd/lib/locale-provider/hi_IN";
import appLocaleData from "react-intl/locale-data/hi";
import enMessages from "../locales/hi_IN.json";

const HiLang = {
  messages: {
    ...enMessages
  },
  antd: antdHi,
  locale: 'hi',
  data: appLocaleData
};
export default HiLang;
