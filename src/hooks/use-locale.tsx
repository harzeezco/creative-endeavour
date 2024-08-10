import { useLocale, useTranslations } from 'next-intl';

const useLocalize = (type: string) => {
  const t = useTranslations(type);
  const locale = useLocale();

  return { t, locale };
};

export default useLocalize;
