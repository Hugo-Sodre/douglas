import React from "react";

const Card = ({ title, description, imageUrl, icon }) => {
  return (
    <div className="relative bg-orange-500 p-6 rounded-lg text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="relative z-10 flex items-center space-x-4">
        <div>{icon}</div>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function FourthSection() {
  return (
    <div
      className="w-full relative min-h-[200px] bg-contain bg-white lg:min-h-[500px] flex flex-col 
      items-center gap-8 px-8"
    >
      <span className="text-[#F36F21] text-bold p-8 text-3xl">
        Principais pautas
      </span>
      <div className=" flex items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            title="EDUCAÇÃO"
            description="Saiba mais"
            imageUrl="https://via.placeholder.com/600x300"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 20l9-5-9-5-9 5 9 5zm0-6V4l9 5-9 5-9-5 9-5z"
                />
              </svg>
            }
          />
          <Card
            title="TRANSPARÊNCIA"
            description="Saiba mais"
            imageUrl="https://via.placeholder.com/600x300"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.5V11c0-.667-.333-1.333-.833-1.75L14.333 7H10.5a2.5 2.5 0 00-5 0H4l.75 1.25L8 14.5V17h5v-2H9v-3h6v3zm-4-5h4v2h-4v-2z"
                />
              </svg>
            }
          />
          <Card
            title="DESBUROCRA"
            description="Saiba mais"
            imageUrl="https://via.placeholder.com/600x300"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5h6M9 12h6m-6 7h6m-3-10a3 3 0 110 6 3 3 0 010-6z"
                />
              </svg>
            }
          />
          <Card
            title="MOBILIDADE URBANA"
            description="Saiba mais"
            imageUrl="https://via.placeholder.com/600x300"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.5V11c0-.667-.333-1.333-.833-1.75L14.333 7H10.5a2.5 2.5 0 00-5 0H4l.75 1.25L8 14.5V17h5v-2H9v-3h6v3zm-4-5h4v2h-4v-2z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
