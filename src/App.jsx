import "./App.css";
import Card from "./components/Card";
import CardForm from "./components/CardForm";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import reactLogo from "./assets/react-logo.png";
import tailwindLogo from "./assets/tailwind-logo.png";
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  const defaultCards = [
    {
      id: 1,
      title: "React Development",
      description:
        "Learn how to build web applications with React and Tailwind CSS.",
      buttonText: "Learn More",
      imageUrl: reactLogo,
    },
    {
      id: 2,
      title: "Tailwind CSS Mastery",
      description: "Master the art of rapid UI development with Tailwind CSS.",
      buttonText: "Explore",
      imageUrl: tailwindLogo,
    },
  ];

  const [cardData, setCardData] = useState(() => {
    const savedCards = localStorage.getItem("cardData");
    if (savedCards) {
      return JSON.parse(savedCards);
    }
    return [...defaultCards];
  });

  useEffect(() => {
    localStorage.setItem("cardData", JSON.stringify(cardData));
  }, [cardData]);

  const addCard = (newCard) => {
    setCardData((prevCards) => [...prevCards, newCard]);
  };
  const clearCards = () => {
    if (cardData.length === 0) {
      return;
    }

    if (confirm("Are you sure you want to clear all cards?")) {
      setCardData([]);
    }
  };
  const resetDefault = () => {
    if (confirm("Are you sure you want to reset to default cards?")) {
      setCardData([...defaultCards]);
    }
  };
  const arr = [...cardData].reverse();
  return (
    <div className="container mx-auto p-4 dark:bg-gray-800 min-h-screen">
      <div className="flex flex-row justify-center items-center  gap-2">
        <Button
          Btext={darkMode === true ? "Light Mode" : "Dark Mode"}
          onClick={toggleDarkMode}
          type="button"
          className={
            "bg-blue-500 text-white px-4 py-2 font-bold rounded transition-transform duration-200 ease-out active:scale-95"
          }
        />
        <Button
          onClick={resetDefault}
          Btext={"Reset default"}
          type="button"
          className={
            " bg-red-500 text-white font-bold py-2 px-4 rounded transition-transform duration-200 ease-out active:scale-95"
          }
        />
        <Button
          Btext="Clear Cards"
          onClick={clearCards}
          type="button"
          className={
            "bg-red-500 text-white font-bold px-4 py-2 rounded transition-transform duration-200 ease-out active:scale-95"
          }
        />
      </div>
      <h1 className="text-3xl mt-5 font-bold text-center mb-8  dark:text-white">
        My Card Application
      </h1>
      {arr.length > 0 && (
        <div className="flex flex-row gap-4 snap-x snap-mandatory overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 p-4">
          {arr.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      )}
      <CardForm onAddCard={addCard} />
    </div>
  );
}

export default App;
