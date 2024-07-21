import"./Contact.css";


function Contact (){
    return(
        <div>
<div className="contact_main">
    <div className="address_main">
        <h1 className="address_head">Address</h1>
        <h1>🏢</h1>
        <p>No. 4-A, MKG Layout,<br />
          Near Govt ITI,<br />
         GN Mills Post,<br />
        Coimbatore- 641 029</p>
    </div>
    <div className="phone_main">
        <h1>Phone</h1>
        <p>📞</p>
     <p>+916380473177</p>
     <p>+91 790 710 8559</p>
    </div>
    <div className="mail_main">
     <h1>Mail us</h1>
     <p>📧</p>
     <p>support@robomiracle.com</p>
     <p>sales@robomiracle.com</p>
    <p>robomiracle.education@gmail.com</p>
    </div>
</div>
<iframe  className="contact_map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3792523482934!2d76.9469964748085!3d11.010145689153164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f9a58ec75ed3%3A0x58a146df0bf77d66!2sROBOMIRACLE!5e0!3m2!1sen!2sin!4v1721029678678!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
export default Contact;