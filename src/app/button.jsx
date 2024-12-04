function HeaderButton(props) {
  return (
    <button
      type="button"
      className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-6 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {props.isApp ? "Get App" : "Explore"}
    </button>
  );
}

export default HeaderButton;
