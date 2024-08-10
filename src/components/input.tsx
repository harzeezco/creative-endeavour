import useLocalize from '@/hooks/use-locale';
import { cn } from '@/utils/cn';

const Input = ({ label, ...props }: { label: string }) => {
  const { locale } = useLocalize('Home');

  return (
    <div className='input-container'>
      <input required id='input' {...props} type='text' />
      <label
        className={cn(
          locale === 'ar' ? 'right-0' : 'left-0',
          'label absolute top-0',
        )}
        htmlFor='input'
      >
        {label}
      </label>
      <div className='underline' />
    </div>
  );
};

export default Input;
