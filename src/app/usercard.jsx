import Image from "next/image";
function UserCard(props) {
  return (
    <div
      key={props.id}
      className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex flex-col items-center pb-4">
        <Image
          className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg"
          src={props.image}
          alt="card img"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {props.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {props.job}
        </span>

        <p className="p-4 font-normal text-gray-700 dark:text-gray-400">
          {props.discription}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
