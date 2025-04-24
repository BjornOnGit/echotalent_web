"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="mr-4 bg-primary/10 p-3 rounded-full text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <p className="text-muted-foreground">hello@echotalent.com</p>
            <p className="text-muted-foreground">careers@echotalent.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="mr-4 bg-primary/10 p-3 rounded-full text-primary">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Phone</h4>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
            <p className="text-muted-foreground">+1 (555) 987-6543</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="mr-4 bg-primary/10 p-3 rounded-full text-primary">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Location</h4>
            <p className="text-muted-foreground">123 Creative Avenue</p>
            <p className="text-muted-foreground">New York, NY 10001</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Office Hours</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span>9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span>10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span>Closed</span>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="#"
            className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="#"
            className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
