import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent"></div>
      <div 
        className="absolute top-1/2 left-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        style={{
          filter: 'blur(100px)',
        }}
      ></div>
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center text-center px-4 md:px-6">
        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          The Future of <span className="text-primary">Cloud Development</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          Quantum provides a seamless, powerful, and scalable environment to build, test, and deploy your applications. Unleash your potential without managing infrastructure.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Button size="lg">Start Your Free Trial</Button>
          <Button size="lg" variant="outline">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};
