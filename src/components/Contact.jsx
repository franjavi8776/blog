import axios from "axios";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      comments: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage("");

    try {
      const { data } = await axios.post(
        "https://formsubmit.co/ajax/calevigu@hotmail.com",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      //console.log(data.success);

      if (data.success) {
        setSuccessMessage("sent successfully");
      }
      resetForm();
    } catch (error) {
      console.error("Error sending form:", error.response || error);
      setSuccessMessage("Error sending form");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    }
  };

  return (
    <div id="contact" className="w-full h-[100vh] bg-primary  text-secondary">
      <h1 className="text-lg md:text-[35px] text-white font-title text-center pt-20 mb-20">
        <span className="text-shadow">CONTACT ME</span>
      </h1>
      <section className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="w-[350px] md:w-[600px] lg:w-[800px] text-3xl p-10 flex flex-col justify-center "
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-20">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={form.name}
              onChange={handleChange}
              className="w-[80%] pt-3 pb-2 pl-2  bg-primary placeholder-white placeholder:text-lg md:placeholder:text-3xl font-body border-b border-secondary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              className="w-[80%]  pt-3 pb-2 pl-2  bg-primary placeholder-white placeholder:text-lg md:placeholder:text-3xl font-body border-b  border-secondary"
              required
            />
          </div>
          <div className="my-10">
            <textarea
              name="comments"
              cols="50"
              rows="5"
              placeholder="Message*"
              value={form.comments}
              onChange={handleChange}
              className="w-[100%] pt-1 p-2  bg-primary placeholder-white placeholder:text-lg md:placeholder:text-3xl font-body border-b border-secondary"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="min-w-[100px] m-auto text-neutral text-sm  md:text-lg lg:text-[30px] px-6 py-3 rounded-md shadow-sm shadow-secondary border-t border-secondary cursor-pointer font-body hover:text-secondary"
            disabled={isLoading}
          >
            {isLoading ? "SENDING..." : "SEND"}
          </button>
        </form>
        {successMessage && (
          <div className="mt-4 text-white text-lg bg-secondary p-2 rounded">
            {successMessage}
          </div>
        )}
        <div>
          <div className="flex justify-center gap-20 text-white my-10">
            <div className="text-3xl md:text-[50px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                to="https://www.linkedin.com/in/francisco-villarroel-2945a1260/"
              >
                <BsLinkedin className="text-white cursor-pointer hover:text-secondary" />
              </a>
            </div>
            <div className="text-3xl md:text-[50px]">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/franCodeDev"
              >
                <FaTwitter className="text-white cursor-pointer hover:text-secondary " />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
