import { Button } from "@/components/ui/button";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-kn-black text-kn-white py-24 px-6 md:px-12">
        <div className="container mx-auto flex flex-col gap-24">
          {/* CTA Section within Footer */}
          <div className="flex flex-col items-center text-center space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter max-w-4xl">
              Let&apos;s Create Something That Matters.
            </h2>
            <Button
              variant="primary"
              className="bg-kn-white text-kn-black hover:bg-transparent hover:text-kn-white hover:border hover:border-kn-white"
            >
              Start a Project
            </Button>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-end border-t border-kn-gray-dark pt-12">
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold font-heading tracking-tight">
                Kn Agency
              </span>
              <p className="text-kn-gray text-sm">
                &copy; {new Date().getFullYear()} Kn Agency. All rights
                reserved.
              </p>
            </div>

            <div className="flex gap-8 mt-8 md:mt-0">
              {["Instagram", "Twitter"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-kn-gray hover:text-kn-white transition-colors uppercase tracking-widest"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
