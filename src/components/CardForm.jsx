import { useState } from "react";
import Button from "./Button";
const CardForm = ({ onAddCard }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [error, setError] = useState("");

  const resetCardForm = () => {
    setError("");
    setTitle("");
    setDescription("");
    setImageUrl("");
    setButtonText("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Please add a title.");
      return;
    }
    const newCard = {
      id: Date.now(),
      title: title.trim(),
      description,
      imageUrl: imageUrl || "https://placehold.co/100x50?text=Default+Image",
      buttonText,
    };
    onAddCard(newCard);
    resetCardForm();
  };
  return (
    <div className="mt-8">
      <form
        className="max-w-sm mx-auto bg-white dark:bg-gray-900 p-6 rounded shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Card Form</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 dark:bg-gray-800 leading-tight"
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter card title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 dark:bg-gray-800 leading-tight"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter card description (optional)"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
            htmlFor="imageUrl"
          >
            Image URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 dark:bg-gray-800 leading-tight"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL (optional)"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
            htmlFor="buttonText"
          >
            Button Text
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-400 dark:bg-gray-800 leading-tight"
            id="buttonText"
            type="text"
            placeholder="Enter button text (optional)"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
          />
          {error && <span className="text-red-500 text-sm mr-2">{error}</span>}
        </div>
        <Button
          Btext="Add Card"
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-transform duration-200 ease-out active:scale-95"
        />
      </form>
    </div>
  );
};

export default CardForm;
