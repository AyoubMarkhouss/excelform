import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function App() {
  const router = useRouter();
  // function Submit(e) {
  //   e.preventDefault();
  //   const formEle = document.querySelector("form");
  //   const formDatab = new FormData(formEle);
  //   fetch(
  //     "https://script.google.com/macros/s/AKfycbwCqr14-uF37zfsq4yUYuVwrwxPuqpjJgqJhhQxzrI85KQCpuDmOAt9hfT3elJ4CsAH/exec",
  //     {
  //       method: "POST",
  //       body: formDatab,
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwCqr14-uF37zfsq4yUYuVwrwxPuqpjJgqJhhQxzrI85KQCpuDmOAt9hfT3elJ4CsAH/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      // Handle response if necessary
      const data = await response.json();
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      // Set loading to false when the request completes
      router.refresh();
    }
  }
  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2>
        This demonstrates how to send data from a website form to Google sheet
        in React or Vanilla jS
      </h2>
      <div>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <input
            placeholder="Your Name"
            name="Name"
            type="text"
            className="text-black"
          />
          <input
            placeholder="Your Email"
            name="Email"
            type="text"
            className="text-black"
          />
          <input
            placeholder="Your Message"
            name="Message"
            type="text"
            className="text-black"
          />
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}
