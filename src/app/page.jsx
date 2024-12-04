"use client";
import Head from "next/head";
import { useState } from "react";
import Avatar2 from "./assets/170958d0-8784-404d-98ef-d10c4592263e.jpeg";
import CardImg2 from "./assets/ben-griffiths-Bj6ENZDMSDY-unsplash.jpg";
import CardImg1 from "./assets/mohammad-rahmani-8qEB0fTe9Vw-unsplash.jpg";
import CardImg3 from "./assets/pankaj-patel-fvMeP4ml4bU-unsplash.jpg";
import Avatar1 from "./assets/WhatsApp Image 2024-06-03 at 16.37.24_9574b07c.jpg";
import Avatar3 from "./assets/WhatsApp Image 2024-06-03 at 16.37.25_f9a84384.jpg";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import ContactForm from "./form.jsx";
import Header from "./header.jsx";
import Herosection from "./hero.jsx";
import UserCard from "./usercard.jsx";
export default function Home() {
  const [showAleart, setshowAleart] = useState(false);

  // show alert massage
  const handleButtonClick = () => {
    setshowAleart(true); // Show the alert
    setTimeout(() => setshowAleart(false), 3000); // Hide the alert after 3 seconds
  };
  //user objects list
  const users = [
    {
      id: 1,
      name: "Lura Daniel",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      job: "artist",
      avatar: Avatar1,
    },
    {
      id: 1,
      name: "Kate Micheal",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      job: "designer",
      avatar: Avatar2,
    },
    {
      id: 1,
      name: "Eve wiley",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      job: "Accountant",
      avatar: Avatar3,
    },
  ];

  const userCardList = users.map((user) => (
    <UserCard
      id={user.id}
      image={user.avatar}
      name={user.name}
      job={user.job}
      discription={user.discription}
    />
  ));
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta name="discription" content="" />
        <link rel="icon" href="/favicon.ico/" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,500&display=swap');
        </style>
      </Head>
      <main className="font-poppins min-h-screen  dark:bg-slate-950">
        {/* aleart massage */}
        {showAleart && (
          <div
            className="fixed top-0 left-0 w-full grid-rows-1 z-0 text-center py-2flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline-flex w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Info alert!</span> Change a few
              things up and try submitting again.
            </div>
          </div>
        )}
        <Header />

        <Herosection />
        <div className="grid grid-cols-1 sm:place-content-center gap-8 sm:gap-6 sm:grid-cols-3  lg:py-6 lg:px-24 sm:py-4 align-middle place-content-center ">
          <Card
            onClick={handleButtonClick}
            image={CardImg1}
            title="New technology enchancement 2025"
            discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          />
          <Card
            onClick={handleButtonClick}
            image={CardImg2}
            title="New technology enchancement 2025"
            discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          />
          <Card
            onClick={handleButtonClick}
            image={CardImg3}
            title="New technology enchancement 2025"
            discription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          />
        </div>
        <div className="grid grid-cols-1 sm:place-content-center gap-8 sm:gap-6 sm:grid-cols-3  lg:py-6 lg:px-24 sm:py-4 align-middle place-content-center ">
          {userCardList}
        </div>
        {/* data form */}
        <div>
          <ContactForm />
        </div>
        <Footer />
      </main>
    </div>
  );
}
