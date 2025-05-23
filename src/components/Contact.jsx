import { useState, useRef } from 'react'
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles";

import { EarthCanvas } from './canvas';
import { SectionWrapper } from "../hoc";

import { slideIn } from "../utils/motion";

//email template id
// template_geaxlac

//service id
// service_lkphffe

//API key
// _ho2Dd8pbxRfJ7GFr


const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [haiku, setHaiku] = useState("");
  const [fetchingHaiku, setFetchingHaiku] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_lkphffe',
      'template_geaxlac',
      {
        from_name: form.name,
        to_name: 'Parag',
        from_email: form.email,
        to_email: 'chimankarparag@gmail.com',
        message: form.message,
        date: new Date().toLocaleString(), 
      },
      '_ho2Dd8pbxRfJ7GFr'
    )
    .then(()=> {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: "",
        email: "",
        message: "",

      }),(error) =>{
        setLoading(false);
        console.log(error);
        alert('something went wrong.');
      }
    })
  }

  const getHaiku = async () => {
    try {
      setFetchingHaiku(true);
      console.log("Fetching haiku...");
      
      const res = await fetch("http://localhost:5001/api/haiku", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt: "write a haiku about AI" }),
      });
      
      console.log("Response status:", res.status);
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response:", errorText);
        throw new Error(`API request failed with status ${res.status}: ${errorText}`);
      }
      
      const data = await res.json();
      console.log("Haiku response:", data);
      setHaiku(data.haiku);
    } catch (error) {
      console.error("Error fetching haiku:", error);
      alert(`Failed to fetch haiku: ${error.message}`);
    } finally {
      setFetchingHaiku(false);
    }
  }

  return(
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className=" flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg 
              outlined-none 
              border-none 
              font-medium"
            />  

          </label>
          <label className=" flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg 
              outlined-none 
              border-none 
              font-medium"
            />  

          </label>
          <label className=" flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <input
              rows='7'
              type="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg 
              outlined-none 
              border-none 
              font-medium"
            />  

          </label>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
              {loading ? "Sending..." : "Send"}
            </button>
            
            <button
              type="button"
              onClick={getHaiku}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
              {fetchingHaiku ? "Loading..." : "Test Haiku API"}
            </button>
          </div>
          
          {haiku && (
            <div className="mt-4 p-4 bg-tertiary rounded-lg">
              <h4 className="text-white font-medium mb-2">Generated Haiku:</h4>
              <p className="text-white whitespace-pre-line">{haiku}</p>
            </div>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")