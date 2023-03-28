import { useForm } from 'react-hook-form'; 

interface FormData { 
  firstName: string; 
  lastName: string; 
  email: string; 
  message: string; 
}

const ContactForm = () => { 
  const { register, formState } = useForm<FormData>(); 
  
  return (
    <form action="https://submit-form.com/r0jnLVSk"> 
      <label htmlFor='name'>Name</label> 
      <input {...register("firstName", { required: true })} type='text' id='name' name="name" placeholder='First Name' />
      {formState.errors.firstName && <span>This field is required</span>}
      
      <input {...register("lastName", { required: true })} type='text' id='name' name="name" placeholder='Last Name' />
      {formState.errors.lastName && <span>This field is required</span>}
      
      <label htmlFor='email'>Email</label> 
      <input {...register("email", { required: true })} type="email" id='email' name="email" placeholder='Email' />
      {formState.errors.email && <span>Please enter a valid email address</span>}
      
      <label htmlFor='message'>Message</label> 
      <textarea {...register("message", { required: true })} id='message' name="message" placeholder='Message'></textarea>
      {formState.errors.message && <span>Please enter a message</span>}
      
      <button type="submit">Send Message</button> 
    </form> 
    ); 
}; 

export default ContactForm;