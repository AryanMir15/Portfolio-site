import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion"; // adjust path if needed

const faqData = [
  {
    q: "What technologies do you specialize in?",
    a: "I work mostly with the MERN stack — MongoDB, Express.js, React, and Node.js. I'm also experienced with Tailwind CSS, REST APIs, and version control using Git/GitHub.",
  },
  {
    q: "Are you available for freelance or contract work?",
    a: "Absolutely. I take on freelance projects depending on availability. Reach out via the contact form or message me directly through Fiverr or LinkedIn.",
  },
  {
    q: "What’s your typical project turnaround time?",
    a: "Depends on the scope, but I aim to deliver most small to medium-sized projects within 1–3 weeks. Clear timelines are discussed upfront.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes — I offer a support window after delivery for bug fixes and minor adjustments. Longer-term maintenance can also be arranged.",
  },
  {
    q: "Can you collaborate with teams or other developers?",
    a: "Definitely. I'm comfortable working solo or integrating into existing dev teams using tools like GitHub, Slack, and Trello for smooth collaboration.",
  },
];

const Faq = () => {
  return (
    <section className="max-w-2xl mx-auto my-12 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6 text-center text-accent"
      >
        Frequently Asked Questions
      </motion.h2>

      <Accordion type="single" collapsible className="w-full">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 * index }}
          >
            <AccordionItem value={`item-${index + 1}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
