import React, { useState } from "react";
import styles from "./ClientSay.module.css";

// Import images directly from the images folder
import client1 from "./images/client1.png";
import client2 from "./images/client2.png";
import client3 from "./images/client3.png";

const ClientSay = () => {
  // Testimonials Data
  const testimonials = [
    {
      image: client1, // Imported image
      name: "Alice Johnson",
      company: "TechCorp Inc.",
      review:
      "Working with this team has been an absolute pleasure. From start to finish, their approach has been thorough and professional. Their ability to adapt to our changing needs and their quick response time made a huge difference in the success of our project.",
    },
    {
      image: client2, // Imported image
      name: "Bob Smith",
      company: "CreativeStudio",
      review:
      "This team is hands down the best we have worked with. Not only do they bring fresh ideas and creativity to the table, but they also ensure that the execution is flawless. Their team is always accessible."
    },
    {
      image: client3, // Imported image
      name: "Sophia Brown",
      company: "Innovatech Solutions",
      review:
      "I have worked with several agencies over the years, but none have impressed me as much as this one. Their deep understanding of the industry, paired with their ability to provide creative solutions, makes them an invaluable partner."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Start with middle testimonial (index 1)

  // Handle line button click or slide
  const handleTestimonialChange = (index) => {
    setActiveIndex(index);
  };

  return (
   <div className={styles.clientSayWrap}>
     <div className={styles.clientSay}>
      <h2 className={styles.heading}>Our Clients Say!</h2>

      {/* Display the three square images at the top */}
      <div className={styles.imageContainer}>
        {testimonials.map((testimonial, index) => (
          <img
            key={index}
            src={testimonial.image}
            alt={testimonial.name}
            className={`${styles.image} ${index === activeIndex ? styles.activeImage : ""}`}
            onClick={() => handleTestimonialChange(index)}
          />
        ))}
      </div>

      {/* Full-width Content (Testimonial Text) */}
      <div className={styles.testimonialContent}>
        <h3 className={styles.name}>{testimonials[activeIndex].name}</h3>
        <p className={styles.company}>{testimonials[activeIndex].company}</p>
        <p className={styles.review}>{testimonials[activeIndex].review}</p>
      </div>

      {/* Line Container for Active Testimonial Indicator */}
      <div className={styles.lineContainer}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.line} ${index === activeIndex ? styles.activeLine : ""}`}
            onClick={() => handleTestimonialChange(index)}
          ></button>
        ))}
      </div>
    </div>
   </div>
  );
};

export default ClientSay;
