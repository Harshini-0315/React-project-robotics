import "./Career.css"
import img15 from"../Assets/Images/Screenshot 2024-07-16 122145.png"
import { useFormik } from "formik";
import { basicSchema } from "../Schema/Schema"
import { useLocation } from "react-router-dom";
import React,{useEffect,useState} from "react";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

 



function Career(){


  const [str, setStr] = useState("")
  useEffect(() => {
      setTimeout(() => {
          setStr("Hiring")
      }, 5000)
  })


  const location=useLocation();
        let path=location.pathname
      
  //  <h1>Hiring</h1>
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
             
            },
            validationSchema: basicSchema,
            onSubmit,
          });
        
          console.log(errors);
        
          return (
            <div className="career_main">
                <div className="carrer_content">
                <p>{path}</p>
                <h2 className="carrer_heading">Hiring</h2>
                <h1 className="carrer_head">ARE YOU LOOKING FOR JOB?</h1>
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
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phonenumber && touched.phonenumber ? "input-error" : ""}
              />
              {errors.phonenumber && touched.phonenumber && <p className="error">{errors.phonenumber}</p>}
             
              <button  disabled={isSubmitting} type="submit">
                Submit
              </button>
            </form>
            
            <br />
            {/* <h1>{str} </h1> */}
            <div className="carrer_end">
            <img className="Screenshot_img" src={img15} />
            </div>
            </div>
          
            </div>
            
            )
}
export default Career;