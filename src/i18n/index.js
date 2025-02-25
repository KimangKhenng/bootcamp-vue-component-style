import { createI18n } from 'vue-i18n';
import en from '@/i18n/locales/en';
import km from '@/i18n/locales/km';

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: en,
        km: km
    }
})

export default i18n