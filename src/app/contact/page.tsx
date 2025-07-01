'use client';
import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formRef.current,
      'YOUR_PUBLIC_KEY'
    ).then(
      () => setStatus('Message sent!'),
      () => setStatus('Failed to send.')
    );
  };

  return (
    <section id="contact" className="py-20 max-w-lg mx-auto">
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-4">
        <input name="user_name" placeholder="Your Name" required className="border p-2 rounded" />
        <input name="user_email" type="email" placeholder="Your Email" required className="border p-2 rounded" />
        <textarea name="message" placeholder="Your Message" rows={5} required className="border p-2 rounded" />
        <button type="submit" className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700">
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
}