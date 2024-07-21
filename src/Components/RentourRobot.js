import"./RentourRobot.css"
import img11 from"../Assets/Images/nila1.jpg"
import img12 from"../Assets/Images/nila2.jpg"
import { useFormik } from "formik";
import { basicSchema } from "../Schema/Schema"
import { useLocation } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function RentourRobot(){
  const location=useLocation();
  let path=location.pathname

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
     placeofevent: "",
     dateofevent:"",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  
  console.log(errors);


    return(
        <div className="rent__main">
           <p>{path}</p>
      <h1>Nila robot rental for your occasions</h1>
      <p>Introducing Nila, your personal AI companion and the epitome of modern hospitality.</p>
      <p>Nila seamlessly blends cutting-edge technology with warm hospitality. Imagine a friendly face that greets you with a choice of treats (think chocolates or delightful floral arrangements) while offering voice-activated assistance. Need help navigating your home? Nila's autonomous movement allows her to guide you effortlessly. Capture special moments instantly with Nila's built-in instant photography feature.</p>
      <p>Nila is more than just a robot; she's an extension of your thoughtful personality, creating a welcoming and technologically advanced environment.</p>
      <h2>Key points Highlighted:</h2>
      <ul>
        <li>Warm hospitality: Nila greets guests and offers treats, creating a welcoming atmosphere.</li>
        <li>AI companion: Voice-activated assistance makes Nila a helpful and interactive presence.</li>
        <li>Advanced technology: Autonomous movement and instant photography showcase Nila's capabilities.</li>
        <li>Personalized touch: Nila reflects your thoughtfulness with the choice of guest greetings.</li>
      </ul>
      <h1>Beautifil moments of nila with our Cilents</h1>
      <br />
      <div className="nila_whole">
     <div className="nila2">
      <img className="nila2_img" src={img12} />
      </div>
      <div className="nila1">
      <img className="nila1_img" src={img11} />
      </div>
      </div>
    
      
      
      <h1>Package details</h1>
      <ul>
        <li>2 Operators and their transportation included with this package</li>
        <li>Transportation charges (included already)</li>
        <li>Duration for an event: 3-4 hours</li>
        <li>Polaroid photos included ( 60 numbers)</li>
        <li>Additional photos 750/- per 10 photos</li>
        <li>Tray available for distributing sweets 😋 , flowers 💐</li>
        <li>Interaction with guests</li>
        <li>Inputs about Bride 👰‍♂ and Groom🤵‍♂ can be feeded to the Robot.</li>
      </ul>
      <h1>Account details</h1>
      <p>NAME: Robotics Technologies Private Limited</p>
      <p>ACCOUNT NO: 9009999909</p>
      <p>IFSC CODE: KKBK0008666</p>
      <p>Bank Name: KOTAK MAHINDRA BANK</p>
      <br />
      <br />
      <p>BRANCH: COIMBATORE</p>
      <p>UPI ID: kotakrbm@ybl</p>
      <p>Gpay: 7907108559</p>
      <p>Paytm: 7907108559</p>
      <p>Phonepe: 7907108559</p>
      <br />
      <h1>Fill your application here</h1>
      <h3>Booking Form</h3>


      {/* <h1>ARE YOU LOOKING FOR JOB?</h1> */}
                <form onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="name">Name</label>
              <input
                value={values.name}
                onChange={handleChange}
                id="name"
                type="name"
                placeholder="Enter your name"
                onBlur={handleBlur}
                className={errors.name && touched.name ? "input-error" : ""}
              />
              {errors.name && touched.name && <p className="error">{errors.name}</p>}
                <label htmlFor="Email">Email</label>
              <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
              />
              {errors.email && touched.email && <p className="error">{errors.email}</p>}
              <label htmlFor="phonenumber">Phone number</label>
              <input
                id="phonenumber"
                type="number"
                placeholder="Enter your phone number"
                value={values.phonenumber}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phonenumber && touched.phonenumber ? "input-error" : ""}
              />
              {errors.phonenumber && touched.phonenumber && <p className="error">{errors.phonenumber}</p>}
              <label htmlFor="placeofevent">Place of event</label>
              <input
                id="placeofevent"
                type="text"
                placeholder="Enter your place of event"
                value={values.placeofevent}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.placeofevent && touched.placeofevent? "input-error" : ""}
              />
              {errors.placeofevent && touched.placeofevent && <p className="error">{errors.placeofevent}</p>}

              <label htmlFor="dateofevent">Date of event</label>
              <input
                id="dateofevent"
                type="text"
                placeholder="Date of event"
                value={values.dateofevent}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.dateofevent && touched.dateofevent ? "input-error" : ""}
              />
              {errors.dateofeventofevent && touched.dateofevent && <p className="error">{errors.dateofevent}</p>}

              <label htmlFor="contactpersonforevent">Contact person for event</label>
              <input
                id="dateofevent"
                type="text"
                placeholder="Date of event"
                value={values.contactpersonforevent}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.contactpersonforevent && touched.contactpersonforevent ? "input-error" : ""}
              />
              {errors.contactpersonforevent && touched.contactpersonforevent && <p className="error">{errors.contactpersonforevent}</p>}


              <button  disabled={isSubmitting} type="submit">
                Submit
              </button>
            </form>
            </div>
       
    )
}
export default RentourRobot;