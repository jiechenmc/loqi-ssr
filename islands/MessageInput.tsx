import { useEffect, useRef, useState } from "preact/hooks";
import { database } from "./MessageBox.tsx";
import {
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

const MessageInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const [message, setMessage] = useState("");

  const handleSend = (e: Event) => {
    if (inputRef.current) {
      setMessage(inputRef.current.value);
    }
    if (fileRef.current) {
      if (fileRef.current.value) {
        const payload = new FormData(e.target.form);
        fetch("/api/upload", {
          method: "POST",
          body: payload,
        }).then((r) =>
          r.text().then((text) => {
            const messageID = crypto.randomUUID();
            let authorName = "Jie Chen";
            const newMessagesRef = ref(
              database,
              `data/rooms/Stony Brook University/CSE214/messages/${messageID}`
            );

            set(newMessagesRef, {
              content: text.replaceAll('"', ""),
              author: authorName,
              createdAt: Date.now(),
            });
          })
        );
      }
    }
  };

  useEffect(() => {
    if (message) {
      const messageID = crypto.randomUUID();
      let authorName = "Jie Chen";

      const newMessagesRef = ref(
        database,
        `data/rooms/Stony Brook University/CSE214/messages/${messageID}`
      );

      set(newMessagesRef, {
        content: message,
        author: authorName,
        createdAt: Date.now(),
      });
    }
  }, [message]);

  return (
    <form encType="multipart/form-data" method="POST">
      <div class="flex justify-center gap-2">
        <div class="mb-3">
          <input
            type="text"
            class="
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            ref={inputRef}
            placeholder="message..."
          />
        </div>
        <input name="user_file" type="file" ref={fileRef}></input>
        <button type="button" class="hover:bg-gray-400" onClick={handleSend}>
          Send
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
