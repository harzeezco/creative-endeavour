import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const QASection = () => (
  <section className='mt-20'>
    <div className='container grid grid-cols-1 sm:grid-cols-2'>
      <div>
        <h1 className='mb-2 text-4xl font-bold'>Q&A</h1>
        <p className='text-lg text-[#697485]'>
          If you haven’t found an answer, Contact us.
        </p>
      </div>

      <div>
        <Accordion collapsible type='single'>
          <AccordionItem
            className='border-b-2 !border-[#2D313A] pb-2'
            value='item-1'
          >
            <AccordionTrigger>
              <span className='text-left'>
                The frequently asked question?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              This is the description of the questions
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className='border-b-2 !border-[#2D313A] pb-2'
            value='item-2'
          >
            <AccordionTrigger>
              <span className='text-left'>
                The frequently asked question?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              This is the description of the questions
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className='border-b-2 !border-[#2D313A] pb-2'
            value='item-3'
          >
            <AccordionTrigger>
              <span className='text-left'>
                The frequently asked question?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              This is the description of the questions
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className='border-b-2 !border-[#2D313A] pb-2'
            value='item-4'
          >
            <AccordionTrigger>
              <span className='text-left'>
                The frequently asked question?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              This is the description of the questions
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </section>
);
