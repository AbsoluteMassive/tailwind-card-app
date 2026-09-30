const Card = ({ imageUrl, title, description, buttonText }) => {
  return (
    <div className="w-80 shrink-0 rounded-lg bg-gray-100 p-4 shadow-md dark:bg-gray-900 hover:scale-105 transition-transform duration-200 ease-out">
      {imageUrl && <img className="w-full" src={imageUrl} alt={title} />}
      <div className="px-6 py-4">
        {title && (
          <div className="font-bold dark:text-white text-xl mb-2 break wrap-break-words">
            {title}
          </div>
        )}
        {description && (
          <p className="text-gray-700 dark:text-gray-400 text-base wrap-break-words">
            {description}
          </p>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        {buttonText && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded transition-transform duration-200 ease-out active:scale-95">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
