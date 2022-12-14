import Message from "../components/Message.tsx";
import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import {
  ref,
  onValue,
  getDatabase,
} from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Loading from "../components/Loading.tsx";
import MessageInput from "./MessageInput.tsx";

export interface Msg {
  author: string;
  content: string;
  createdAt: number;
}

const firebaseConfig = {
  apiKey: "AIzaSyA2ffbETwL8hupSveo6d55YTOun0kYzCC4",
  authDomain: "loqi-loqi.firebaseapp.com",
  databaseURL: "https://loqi-loqi-default-rtdb.firebaseio.com",
  projectId: "loqi-loqi",
  storageBucket: "loqi-loqi.appspot.com",
  messagingSenderId: "622541820845",
  appId: "1:622541820845:web:e7b417188f959ea1c40724",
  measurementId: "G-HZDJC6PYH8",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export default function MessageBox() {
  const [msgs, setMsgs] = useState<JSX.Element[]>();

  const messagesRef = ref(
    database,
    `data/rooms/Stony Brook University/CSE214/messages`
  );

  useEffect(() => {
    onValue(messagesRef, (snapshot: any) => {
      const data = snapshot.val();
      if (data != null) {
        const vals = Object.values(data);
        const dt = vals.map((e) => {
          const msg = e as Msg;
          return (
            <Message
              content={msg.content}
              author={msg.author}
              createdAt={msg.createdAt}
            />
          );
        });
        setMsgs(dt.reverse());
      }
    });
  }, []);

  if (IS_BROWSER)
    return (
      <div class="flex-col gap-2  overflow-scroll">
        {msgs}
        <MessageInput />
      </div>
    );
  else
    return (
      <div class="w-full">
        <Loading />
      </div>
    );
}
