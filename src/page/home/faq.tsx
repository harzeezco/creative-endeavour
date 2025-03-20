'use client';

import { cn } from '@/utils/cn';
import { slideUp } from '@/utils/motion';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function FAQSection() {
  const ref = useRef(null);
  const title = 'الأسئلة الشائعة';
  const desc =
    'إليك قائمة بالأسئلة الشائعة حول منصة Teachr وكيفية عملها لكل من الطلاب والمعلمين';
  const isInView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section className='container mt-20'>
      <div
        ref={ref}
        className='mb-9 flex flex-col items-center justify-center text-center'
      >
        <h3
          className={cn(
            'text-[#253459] text-2xl max-w-xl sm:text-3xl lg:text-4xl font-nebulica font-medium md:!leading-[1.1]',
          )}
        >
          {title.split(' ').map((word, index) => (
            <span
              key={index}
              className='relative inline-flex overflow-hidden '
            >
              <motion.span
                key={index}
                animate={isInView ? 'open' : 'closed'}
                custom={index}
                variants={slideUp}
              >
                {word}
              </motion.span>
              <span className='inline-block'>&nbsp;</span>
            </span>
          ))}
        </h3>

        <p
          className={cn('mt-5 max-w-[650px] text-lg text-[#212121]')}
        >
          {desc.split(' ').map((word, index) => (
            <span
              key={index}
              className='relative inline-flex overflow-hidden'
            >
              <motion.span
                key={index}
                animate={isInView ? 'open' : 'closed'}
                custom={index}
                variants={slideUp}
              >
                {word}
              </motion.span>
              <span className='inline-block'>&nbsp;</span>
            </span>
          ))}
        </p>
      </div>

      <div className='mx-auto grid gap-4 p-4 text-end max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='rounded-lg border border-solid border-[#E8E8E8] bg-[#F7F6F7] p-4'>
          <h3 className='font-nebulica text-2xl font-medium text-[#282828]'>
            كيف أعثر على المعلم المناسب؟
          </h3>
          <p className='mt-4 rounded-lg bg-white px-2 py-4 text-[#212121]'>
            ابحث بسهولة، واختر معلمًا يطابق احتياجاتك التعليمية،
            وأسلوبك، وجدولك
          </p>
        </div>
        <div className=' rounded-lg bg-[#0020AC] p-4 text-white'>
          <div className='rounded-lg bg-[#F2F9FF] p-4 text-[#0020AC]'>
            <h3 className='font-nebulica text-2xl font-medium text-[#282828]'>
              هل أحتاج إلى الدفع للاشتراك؟
            </h3>
          </div>

          <p className='mt-4 rounded-lg px-2 text-white'>
            الاشتراك مجاني، تدفع فقط مقابل الدروس التي تحجزها
          </p>
        </div>
        <div className='rounded-lg border border-solid border-[#E8E8E8] bg-[#F7F6F7] p-4'>
          <h3 className='font-nebulica text-2xl font-medium text-[#282828]'>
            هل التطبيق آمن؟
          </h3>
          <p className='mt-4 rounded-lg bg-white px-2 py-4 text-[#212121]'>
            نعم، خصوصية معلوماتك الشخصية وأمن بياناتك هما أولويتنا
          </p>
        </div>
        <div className='rounded-lg border border-solid border-[#E8E8E8] bg-[#F7F6F7] p-4'>
          <h3 className='font-nebulica text-2xl font-medium text-[#282828]'>
            ما هي المواد التعليمية المتاحة؟
          </h3>
          <p className='mt-4 rounded-lg bg-white px-2 py-4 text-[#212121]'>
            نقدم مجموعة واسعة من المواد تشمل اللغات والعلوم والرياضيات
            وغيرها الكثير
          </p>
        </div>
        <div className='rounded-lg border border-solid border-[#E8E8E8] bg-[#F7F6F7] p-4'>
          <h3 className='font-nebulica text-2xl font-medium text-[#282828]'>
            كيف يستلم المعلمون مدفوعاتهم؟
          </h3>
          <p className='mt-4 rounded-lg bg-white px-2 py-4 text-[#212121]'>
            يمكن للمعلمين سحب أرباحهم فورًا وبسهولة إلى حسابهم البنكي
            الحالي
          </p>
        </div>
        <div className='rounded-lg border border-solid border-[#E8E8E8] bg-[#F7F6F7] p-4'>
          <h3 className='font-nebulica text-2xl font-medium text-[#282828]'>
            هل يمكنني تجربة درس مجاني؟
          </h3>
          <p className='mt-4 rounded-lg bg-white px-2 py-4 text-[#212121]'>
            نعم، نوفر للطلاب الجدد إمكانية تجربة درس مجاني مع أي معلم
            يختارونه
          </p>
        </div>
      </div>
    </section>
  );
}
