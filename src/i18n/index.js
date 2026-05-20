import vi from './vi';
import en from './en';

const langs = { vi, en };
let currentLang = 'vi';

const strings = {
  setLanguage: (lang) => { currentLang = lang; },
  getLanguage: () => currentLang,
  getInterfaceLanguage: () => 'vi',
};

const proxy = new Proxy(strings, {
  get(target, prop) {
    if (prop in target) return target[prop];
    if (langs[currentLang] && prop in langs[currentLang]) {
      return langs[currentLang][prop];
    }
    return prop;
  }
});

export default proxy;
