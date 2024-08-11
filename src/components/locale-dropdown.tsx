import { cn } from '@/utils/cn';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

const LocaleSwitch = ({
  className,
  icon,
  textClass,
}: {
  className: string;
  icon: string;
  textClass: string;
}) => {
  const locale = useLocale();
  const router = useRouter();
  const [language, setLanguage] = useState(locale);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const onClick = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === 'en' ? 'ar' : 'en',
    );
  };

  useEffect(() => {
    startTransition(() => {
      router.replace(`/${language}/${pathname.replace(locale, '')}`);
    });
  }, [language, locale]);

  return (
    <div>
      <button
        className={cn('flex items-center gap-2', className)}
        disabled={isPending}
        type='button'
        onClick={onClick}
      >
        <span className={textClass}>
          {language === 'en' ? 'العربية' : 'English'}
        </span>
        <Image alt='globe icon' height={14} src={icon} width={14} />
      </button>
    </div>
  );
};

export default LocaleSwitch;
