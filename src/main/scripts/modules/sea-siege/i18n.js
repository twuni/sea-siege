import English from './i18n/en';

export default class I18n {

  static get availableTranslations() {
    return {
      'en': English
    };
  }

  static get defaultLanguage() {
    return 'en';
  }

  static get languages() {
    return _.uniq(_.compact(_.flatten([
      navigator.languages,
      [navigator.language],
      [navigator.userLanguage],
      [this.defaultLanguage]
    ])));
  }

  static get preferredLanguage() {
    return this.languages[0];
  }

  static get translations() {
    return _.compact(this.languages.map((language) => {
      return this.availableTranslations[language];
    }));
  }

  static translate(key, ...props) {
    for(let translation of this.translations) {
      let translator = translation[key];
      if(translator) {
        return translator.apply(undefined, props);
      }
    }
    return key;
  }

}
