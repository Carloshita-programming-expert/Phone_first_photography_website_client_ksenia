export const languages = {
  en: 'English',
  ru: 'Русский',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // Branding & Header
    'brand.name': 'Ksenia',
    'brand.tagline': 'Visual Stories',
    'brand.portfolio': 'Portfolio',
    'brand.curatedWorks': 'Curated Works',
    'brand.analogArchives': 'Analog Visual Archives',
    'nav.cmsAdmin': 'CMS Admin',

    // Navigation Tabs
    'nav.feed': 'Feed',
    'nav.collage': 'Collage',
    'nav.profile': 'Profile',

    // Layout Defaults
    'layout.title': 'Visual Stories | Photography Portfolio',
    'layout.description': 'Curated high-end photography portfolio featuring stories from Kyoto, Iceland, Berlin, Almaty, and Milos.',

    // Hero & Profile UI
    'hero.name': 'Ksenia',
    'hero.location': 'Berlin · Worldwide',
    'hero.discipline': 'Analog Works',
    'hero.availableBadge': 'Available for commissions',
    'hero.scrollCue': 'CURATED PHOTOGRAPHY',
    'hero.contactBtn': 'Initiate Inquiry',
    'hero.ariaScroll': 'Scroll down to curated photography',
    'hero.defaultBio': 'Visual artist and analog photographer based in Berlin. Exploring brutalist geometry, fleeting nocturnal light, and solitary landscapes across Europe and Central Asia using 35mm and medium format film.',

    // Desktop Filmstrip / Archives Section on Index
    'filmstrip.tag': 'Curated Photographic Works',
    'filmstrip.heading': 'The Filmstrip Archives',
    'filmstrip.desc': 'High-resolution 35mm and medium format captures arranged as an expansive contact sheet. Drag or scroll horizontally.',
    'filmstrip.stripBadge': '35mm Analog Contact Strip',
    'filmstrip.isoBadge': 'ISO 400 · Natural Grain',
    'filmstrip.curatedExposures': 'Curated Exposures',
    'filmstrip.dragWheelHint': 'Drag / Wheel ↔ Film Reel',
    'filmstrip.exp': 'EXP',

    // Collage Page
    'collage.title': 'Collage | Visual Stories',
    'collage.description': 'Full-archive masonry grid exhibiting analog photography studies across Europe and Asia.',
    'collage.tag': 'Curated Archives',
    'collage.heading': 'Photographic Collage',
    'collage.desc': 'A seamless composite of 35mm and medium format captures across all expeditions.',

    // Profile Page
    'profile.title': 'Ksenia | Profile & Contact',
    'profile.description': 'Editorial profile and contact info for Ksenia, visual artist and analog photographer.',
    'profile.location': 'Berlin · Worldwide',
    'profile.discipline': 'Analog Works',
    'profile.availableBadge': 'Available for assignments',
    'profile.mediaHeading': 'Primary Media',
    'profile.apparatusHeading': 'Apparatus',
    'profile.contactBtn': 'Initiate Inquiry',

    // Global Footer
    'footer.brandTag': 'Analog Visual Archives',
    'footer.ctaHeading': 'Available for Commissions & Worldwide Inquiries',
    'footer.ctaSub': 'Editorial assignments, architecture documentation, analog prints, and artistic collaborations.',
    'footer.contactBtn': 'Contact & Booking',
    'footer.copyright': 'All rights reserved. Curated 35mm works.',
    'footer.backToTop': 'Top',

    // Lightbox
    'lightbox.close': 'Close Lightbox',
  },
  ru: {
    // Branding & Header
    'brand.name': 'Ксения',
    'brand.tagline': 'Визуальные истории',
    'brand.portfolio': 'Портфолио',
    'brand.curatedWorks': 'Избранные работы',
    'brand.analogArchives': 'Аналоговый визуальный архив',
    'nav.cmsAdmin': 'CMS Админ',

    // Navigation Tabs
    'nav.feed': 'Лента',
    'nav.collage': 'Коллаж',
    'nav.profile': 'Профиль',

    // Layout Defaults
    'layout.title': 'Визуальные истории | Портфолио фотографии',
    'layout.description': 'Авторское фотографическое портфолио: серии из Киото, Исландии, Берлина, Алматы и Милоса.',

    // Hero & Profile UI
    'hero.name': 'Ксения',
    'hero.location': 'Берлин · Международные съемки',
    'hero.discipline': 'Пленочные работы',
    'hero.availableBadge': 'Доступна для съемок',
    'hero.scrollCue': 'КУРИРУЕМАЯ ФОТОГРАФИЯ',
    'hero.contactBtn': 'Связаться с автором',
    'hero.ariaScroll': 'Перейти к избранным фотографиям',
    'hero.defaultBio': 'Визуальный художник и пленочный фотограф из Берлина. Исследует геометрию брутализма, ускользающий ночной свет и уединенные пейзажи Европы и Центральной Азии на 35-миллиметровую и среднеформатную пленку.',

    // Desktop Filmstrip / Archives Section on Index
    'filmstrip.tag': 'Избранные авторские серии',
    'filmstrip.heading': 'Пленочный архив',
    'filmstrip.desc': 'Кадры высокого разрешения на 35мм и средний формат, оформленные в виде контактного листа. Перетягивайте мышью или крутите колесико.',
    'filmstrip.stripBadge': '35мм Аналоговый контактный лист',
    'filmstrip.isoBadge': 'ISO 400 · Естественное зерно',
    'filmstrip.curatedExposures': 'Экспозиций в архиве',
    'filmstrip.dragWheelHint': 'Тянуть / Колесико ↔ Пленка',
    'filmstrip.exp': 'КАДР',

    // Collage Page
    'collage.title': 'Коллаж | Визуальные истории',
    'collage.description': 'Архивная сетка аналоговых фотографических этюдов в экспедициях по Европе и Азии.',
    'collage.tag': 'Архив экспедиций',
    'collage.heading': 'Фотографический коллаж',
    'collage.desc': 'Бесшовная композиция кадров на 35мм и средний формат из всех фотопутешествий.',

    // Profile Page
    'profile.title': 'Ксения | Профиль и контакты',
    'profile.description': 'Авторский профиль и контакты Ксении, визуального художника и аналогового фотографа.',
    'profile.location': 'Берлин · Международные съемки',
    'profile.discipline': 'Пленочные работы',
    'profile.availableBadge': 'Доступна для съемок',
    'profile.mediaHeading': 'Основные пленки',
    'profile.apparatusHeading': 'Техника',
    'profile.contactBtn': 'Связаться с автором',

    // Global Footer
    'footer.brandTag': 'Аналоговый визуальный архив',
    'footer.ctaHeading': 'Открыта для коммерческих съемок и международных проектов',
    'footer.ctaSub': 'Редакционные съемки, архитектурная документалистика, авторские отпечатки и арт-коллаборации.',
    'footer.contactBtn': 'Связаться и забронировать',
    'footer.copyright': 'Все права защищены. Архив пленочных работ.',
    'footer.backToTop': 'Наверх',

    // Lightbox
    'lightbox.close': 'Закрыть просмотр',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang = defaultLang) {
  const currentLang = lang in ui ? lang : defaultLang;
  return function t(key: UIKey): string {
    return ui[currentLang]?.[key] ?? ui[defaultLang][key] ?? key;
  };
}
