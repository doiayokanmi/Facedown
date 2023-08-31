import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/Components/ui/Accordion";
  import Link from "next/link";

const RightText = () => {
  return (
    <>
        <div className="basis-1/2 border border-slate-500">
          <h1 className="bg-primary-foreground p-4 text-white">
            Frequently Ask Questions
          </h1>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="px-4">
              <AccordionTrigger>Can I download Facebook video?</AccordionTrigger>
              <AccordionContent>
                Yes. Just paste the link in the box provided above and click on download.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="px-4">
              <AccordionTrigger>What about Reels, can I download it too?</AccordionTrigger>
              <AccordionContent>
                Definitely Yes. Just make sure the link is correct.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="px-4">
              <AccordionTrigger>Is the service free?</AccordionTrigger>
              <AccordionContent>
                Yes. It is free but you can help us improve by clicking on this <Link href='https://www.buymeacoffee.com/doiayokanmi' className="text-primary underline font-bold">link</Link> or the <span className='text-yellow-500 font-bold'>"Buy me a coffee"</span> button above
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
    </>
  )
}

export default RightText