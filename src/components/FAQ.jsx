import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion"; // adjust path if needed

const Faq = () => {
  return (
    <section className="max-w-2xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-neutral-800">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            What technologies do you specialize in?
          </AccordionTrigger>
          <AccordionContent>
            I work mostly with the MERN stack — MongoDB, Express.js, React, and
            Node.js. I'm also experienced with Tailwind CSS, REST APIs, and
            version control using Git/GitHub.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            Are you available for freelance or contract work?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely. I take on freelance projects depending on availability.
            Reach out via the contact form or message me directly through Fiverr
            or LinkedIn.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            What’s your typical project turnaround time?
          </AccordionTrigger>
          <AccordionContent>
            Depends on the scope, but I aim to deliver most small to
            medium-sized projects within 1–3 weeks. Clear timelines are
            discussed upfront.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Do you provide post-launch support?
          </AccordionTrigger>
          <AccordionContent>
            Yes — I offer a support window after delivery for bug fixes and
            minor adjustments. Longer-term maintenance can also be arranged.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            Can you collaborate with teams or other developers?
          </AccordionTrigger>
          <AccordionContent>
            Definitely. I'm comfortable working solo or integrating into
            existing dev teams using tools like GitHub, Slack, and Trello for
            smooth collaboration.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
