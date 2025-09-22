import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Quantum?",
    answer: "Quantum is a cloud-based development platform that provides instant, pre-configured development environments. It allows developers to code, build, test, and deploy applications from any machine, with a consistent and powerful setup.",
  },
  {
    question: "How does Quantum improve collaboration?",
    answer: "Quantum enables real-time collaboration through shared environments. Team members can work on the same codebase simultaneously, review changes live, and ensure everyone is on the same page, eliminating environment drift.",
  },
  {
    question: "Is my code secure on Quantum?",
    answer: "Absolutely. Security is our top priority. All environments are isolated, and we provide enterprise-grade security features, including automated vulnerability scanning, secret management, and role-based access control.",
  },
  {
    question: "Which languages and frameworks are supported?",
    answer: "Quantum supports all major programming languages, frameworks, and databases. You can define your environment using a simple configuration file, allowing you to use any tool you need for your project.",
  },
  {
    question: "Can I integrate Quantum with my existing tools?",
    answer: "Yes, Quantum is designed to fit into your existing workflow. It integrates seamlessly with popular tools like Git, VS Code, JetBrains IDEs, and your existing CI/CD pipelines.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
