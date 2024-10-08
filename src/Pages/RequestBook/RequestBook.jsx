const RequestBook = () => {
  return (
    <div id="contact" className=" max-w-[940px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" text-center bg-gradient-to-r my-5 from-[#13547a] to-[#80d0c7] text-transparent bg-clip-text font-bold text-2xl ">
        Request a book?
      </h1>
      <h1 className=" text-center md:text-xl mb-10">
        Send us an email mentioning the book you want to add in our list
      </h1>
      <div className=" p-10  max-w-[740px] bg-emerald-200 rounded-lg shadow-lg">
        <form
          action="https://getform.io/f/8908e86b-d34d-4727-a557-591b833dc4c7"
          method="POST"
          encType="multipart/form-data"
        >
          <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="text-black uppercase  text-sm py-2">Name</label>
              <input
                className=" border-2 rounded-lg p-3 flex "
                type="text"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-black uppercase  text-sm py-2">Phone</label>
              <input
                className=" border-2 rounded-lg p-3 flex "
                type="text"
                name="phone"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="text-black uppercase  text-sm py-2">Email</label>
            <input
              className=" border-2 rounded-lg p-3 flex "
              type="email"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-black uppercase  text-sm py-2">Subject</label>
            <input
              className=" border-2 rounded-lg p-3 flex "
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-black uppercase  text-sm py-2">Message</label>
            <textarea
              className=" border-2 rounded-lg p-3 "
              rows={10}
              name="message"
              required
            ></textarea>
          </div>
          <button className=" btn w-full bg-white text-black btn-outline">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestBook;
