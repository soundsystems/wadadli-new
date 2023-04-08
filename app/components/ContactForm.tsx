import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, formState } = useForm<FormData>();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const inputVariants = {
    focused: { scale: 1.05 },
    blurred: { scale: 1 },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto w-full max-w-md rounded-md bg-white p-4 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
        <div className="mb-4 flex flex-wrap">
<div className="mb-4 w-full pr-2 md:mb-0 md:w-1/2">
  <label htmlFor="firstName" className="mb-2 block text-sm font-bold">
    First Name
  </label>
  <motion.input
    {...register('firstName', { required: true })}
    variants={inputVariants}
    initial="blurred"
    whileFocus="focused"
    onBlur={() => {}}
    type="text"
    id="firstName"
    className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-orange-500 focus:shadow-orange-500 focus:outline-none"
    placeholder="First Name"
  />
  {formState.errors.firstName && <span className="text-xs text-red-500">This field is required</span>}
</div>
<div className="w-full pl-2 md:w-1/2">
  <label htmlFor="lastName" className="mb-2 block text-sm font-bold">
    Last Name
  </label>
  <motion.input
    {...register('lastName', { required: true })}
    variants={inputVariants}
    initial="blurred"
    whileFocus="focused"
    onBlur={() => {}}
    type="text"
    id="lastName"
    className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-orange-500 focus:shadow-orange-500 focus:outline-none"
    placeholder="Last Name"
  />
  {formState.errors.lastName && <span className="text-xs text-red-500">This field is required</span>}
</div>
</div>
<div className="mb-4">
<label htmlFor="email" className="mb-2 block text-sm font-bold">
  Email
</label>
<motion.input
  {...register('email', { required: true })}
  variants={inputVariants}
  initial="blurred"
  whileFocus="focused"
  onBlur={() => {}}
  type="email"
  id="email"
  className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-orange-500 focus:shadow-orange-500 focus:outline-none"
  placeholder="Email"
/>
{formState.errors.email && <span className="text-xs text-red-500">Please enter a valid email address</span>}
</div>
<div className="mb-4">
<label htmlFor="message" className="mb-2 block text-sm font-bold">
  Message
</label>
<motion.textarea
  {...register('message', { required: true })}
  variants={inputVariants}
  initial="blurred"
  whileFocus="focused"
  onBlur={() => {}}
  id="message"
  className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow outline-orange-500 focus:shadow-orange-500 focus:outline-none"
  placeholder="Message"
  rows={4}
></motion.textarea>
{formState.errors.message && <span className="text-xs text-red-500">Please enter a message</span>}
</div>
        <button type="submit" className="w-full rounded bg-orange-500 px-4 py-2 font-bold text-white focus:shadow-orange-500 focus:outline-none">
          Send Message
        </button>
      </form>

      <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-10 overflow-y-auto">
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <div className="my-8 inline-block w-full max-w-md overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
              Thank You
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
                We have received your message and will get back to you shortly.
              </p>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </motion.div>
  );
};

export default ContactForm;