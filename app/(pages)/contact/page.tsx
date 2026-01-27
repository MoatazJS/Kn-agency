import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-kn-white pt-32 pb-16 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col mb-16">
          <h1 className="text-6xl md:text-9xl font-bold font-heading uppercase tracking-tighter mb-8 text-kn-black">
            Contact <br /> Us
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h3 className="text-sm font-bold font-heading uppercase tracking-[0.2em] text-kn-gray mb-6">
                Get in Touch
              </h3>
              <div className="space-y-2 text-xl md:text-2xl text-kn-black font-medium">
                <p>hello@knetwork.agency</p>
                <p>+20 123 456 7890</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold font-heading uppercase tracking-[0.2em] text-kn-gray mb-6">
                Located at
              </h3>
              <p className="text-xl md:text-2xl text-kn-black font-medium max-w-s">
                Egypt. UAE. Qatar.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold font-heading uppercase tracking-[0.2em] text-kn-gray mb-6">
                Socials
              </h3>
              <div className="flex flex-col space-y-2 text-lg text-kn-black">
                <a
                  href="#"
                  className="hover:text-kn-gray-light transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="hover:text-kn-gray-light transition-colors"
                >
                  Vimeo
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold uppercase tracking-widest text-kn-gray"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-kn-gray-light py-4 text-xl text-kn-black focus:outline-none focus:border-kn-black transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold uppercase tracking-widest text-kn-gray"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-kn-gray-light py-4 text-xl text-kn-black focus:outline-none focus:border-kn-black transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-bold uppercase tracking-widest text-kn-gray"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full bg-transparent border-b border-kn-gray-light py-4 text-xl text-kn-black focus:outline-none focus:border-kn-black transition-colors"
                >
                  <option>General Inquiry</option>
                  <option>New Project</option>
                  <option>Careers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold uppercase tracking-widest text-kn-gray"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-kn-gray-light py-4 text-xl text-kn-black focus:outline-none focus:border-kn-black transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="pt-8">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
