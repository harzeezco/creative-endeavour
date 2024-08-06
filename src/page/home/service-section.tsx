import Image from 'next/image';

const Services = [
  {
    icon: 'audit.svg',
    head: 'Design Audit',
    text: "Uncover the hidden potential, refine your experience's essence – Design Audit as a Service, where every detail counts towards perfection.",
    content: [
      {
        title: 'Heuristic Evaluation',
      },
      {
        title: 'Accessibility Audit',
      },
      {
        title: 'DGA Compliance',
      },
    ],
  },
  {
    icon: 'design.svg',
    head: 'UI Design',
    text: 'Elevate your digital presence with intuitive brilliance – User Interface Design as a Service, where seamless experiences are crafted for humans.',
    content: [
      {
        title: 'UI Design',
      },
      {
        title: 'Design Systems',
      },
    ],
  },
  {
    icon: 'head.svg',
    head: 'Head Hunting',
    text: 'Discover the design stars that illuminate your team – Headhunting as a Service, where talent meets ambition.',
    content: [
      {
        title: 'Design Head Hunting',
      },
    ],
  },
];

export const ServiceSection = () => (
  <section className='mt-20 bg-tint-50 py-10'>
    <div className='container grid grid-cols-1 place-items-center gap-x-5 gap-y-3 sm:grid-cols-2 lg:grid-cols-3'>
      {
      Services.map(({ content, head, icon, text }) => (
        <div className='flex min-h-[400px] grow flex-col bg-white p-5'>
          <Image alt={text} height={25} src={`/icons/${icon}`} width={25} />

          <h2 className='mt-4 text-xl font-bold text-[#2D313A]'>{head}</h2>

          <p className='text-[#697485]'>{text}</p>

          <div className='mt-6 space-y-5'>
            {content.map(({ title }) => (
              <div className='border-b border-solid border-[#2D313A]'>
                <h3 className='pb-2 text-lg font-bold'>{title}</h3>
              </div>
          ))}
          </div>
        </div>
    ))
    }
    </div>
  </section>
);
