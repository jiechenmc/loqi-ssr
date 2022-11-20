export default function Message({ author, content, createdAt }: any) {
  const date = new Date(createdAt).toUTCString();
  if (content.startsWith("https"))
    return (
      <div class="relative w-full h-full bg-blue-200 m-4 p-4 overflow-scroll">
        <img src={content} width={300} height={300} />
        <div class="absolute right-20">
          <small>{author}</small>
        </div>
        <div class="bottom-0">
          <small>{date}</small>
        </div>
      </div>
    );
  else {
    return (
      <div class="relative w-full h-20 bg-blue-200 m-4 p-4 overflow-scroll">
        <p class="text-xl">{content}</p>
        <div class="absolute right-20">
          <small>{author}</small>
        </div>
        <div class="bottom-0">
          <small>{date}</small>
        </div>
      </div>
    );
  }
}
