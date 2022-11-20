import { useEffect, useRef, useState } from "preact/hooks";
import { database } from "./MessageBox.tsx";
import { ref, set } from "https://cdn.skypack.dev/firebase/database";

const MessageInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState("");
  const handleSend = () => {
    if (inputRef.current) {
      setMessage(inputRef.current.value);
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
      <button type="button" class="hover:bg-gray-400" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
