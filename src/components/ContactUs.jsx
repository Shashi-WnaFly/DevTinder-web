import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ContactUsForm from "./ContactUsForm";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col items-center text-black bg-gradient-to-b from-white to-gray-50 p-6 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left: Contact form */}
        <ContactUsForm />

        {/* Right: Contact details and map */}
        <aside className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-3">Get in touch</h3>
            <p className="text-sm text-muted-foreground mb-4">Prefer email? Use shshianand2600@gmail.com. Want faster support? Reach out on our socials below.</p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 text-indigo-600" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:shshianand2600@gmail.com" className="text-sm text-indigo-600 hover:underline">shshianand2600@gmail.com</a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 text-indigo-600" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+919931165218" className="text-sm text-gray-700 hover:underline">+91 9931165218</a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-indigo-600" />
                <div>
                  <p className="font-medium">Office</p>
                  <p className="text-sm text-gray-700">Patna, India • Remote-friendly</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium mb-2">Our location</h4>
            <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                title="office-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.123456789012!2d72.8776555!3d19.0759837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63c0a0a0a0%3A0x1234567890abcdef!2sPatna%2C%20Bihar%2C%20India!5e0!3m2!1sen!2sin!4v1600000000000"
                className="w-full h-40 border-0"
                loading="lazy"
              />
            </div>

            <div className="mt-4 flex items-center gap-3 text-sm text-gray-600">
              <a href="#" className="underline">Twitter</a>
              <span>•</span>
              <a href="#" className="underline">Instagram</a>
              <span>•</span>
              <a href="#" className="underline">LinkedIn</a>
            </div>
          </div>
        </aside>
      </motion.div>
      <Footer className={"w-full text-gray-500 bg-[#ffffff] border-t-1 border-gray-400 mt-4"}/>
    </div>
  );
}

export default ContactUs;