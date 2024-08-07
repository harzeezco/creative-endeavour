import Image from 'next/image';

const JoinNow = () => (
  <section className='container mt-20'>
    <div className='flex h-[350px] flex-col items-start justify-between bg-primary-300 p-10 shadow-sm'>
      <span className='size-6'>
        <Image
          alt='image'
          className='object-cover'
          height={350}
          src='icon/customArrow.svg'
          width={350}
        />
      </span>
      <div className='flex w-full items-end justify-between'>
        <div className='max-w-[606px]'>
          <h1 className='text-5xl font-medium text-primary-350'>
            Join us
          </h1>
          <p className='text-base text-primary-200'>
            Elevate user experiences with us – join Sanam and make
            every interaction unforgettable.
          </p>
        </div>
        <button className='bg-primary-50 px-6 py-3 text-white'>
          Join Sanam
        </button>
      </div>
    </div>
  </section>
);

export default JoinNow;
