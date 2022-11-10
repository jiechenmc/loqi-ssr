const Header = () => {
  return (
    <>
      <header class={"bg-green-200"}>
        <ul class="flex gap-2 justify-center text-2xl text-green-600">
          <li class="hover:bg-green-400">
            <a href="#">Here</a>
          </li>
          <li class="hover:bg-green-400">
            <a href="#">There</a>
          </li>
          <li class="hover:bg-green-400">
            <a href="#">Where</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
