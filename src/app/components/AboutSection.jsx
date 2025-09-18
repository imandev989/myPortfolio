"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Frontend",
    id: "Frontend",
    content: (
      <ul className="list-disc pl-2 w-full">
        <li>Next.js ( React.js )</li>
        <li>HTML</li>
        <li>Css</li>
        <li>TailwindCss</li>
        <li>Material UI, Radix UI, ShadCn, BootStrap</li>
      </ul>
    ),
  },
  {
    title: "Backend",
    id: "Backend",
    content: (
      <ul className="list-disc pl-2">
        <li>Express.js ( Node.js )</li>
        <li>Nest.js ( Node.js )</li>
      </ul>
    ),
  },
  {
    title: "DBMS",
    id: "DBMS",
    content: (
      <ul className="list-disc pl-2">
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>Hive</li>
        <li>SQLite</li>
      </ul>
    ),
  },
  {
    title: "Mobile",
    id: "Mobile",
    content: (
      <ul className="list-disc pl-2">
        <li>Flutter</li>
      </ul>
    ),
  },
  {
    title: "Others",
    id: "Others",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript</li>
        <li>Restful API</li>
        <li>Redis</li>
        <li>WebSockek</li>
        <li>Git</li>
        <li>Docker</li>
        <li>Linux</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Frontend");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/deskWork.webp"
          width={500}
          height={500}
          alt="codeImage"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            I am a Frontend Developer specializing in React and Next.js. My main
            focus is creating modern, responsive, and user-friendly web
            applications. In addition to my frontend expertise, I also have
            experience working with: - **Backend Development:** Node.js,
            Express, NestJS, MongoDB, PostgreSQL - **Mobile Development:**
            Flutter (Cross-Platform) - **Other Skills:** Linux System
            Administration, Git, Agile workflows I am always eager to learn new
            technologies and collaborate with teams to build high-quality
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Frontend")}
              active={tab === "Frontend"}
            >
              {" "}
              Frontend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Backend")}
              active={tab === "Backend"}
            >
              {" "}
              Backend{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Mobile")}
              active={tab === "Mobile"}
            >
              {" "}
              Mobile{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("DBMS")}
              active={tab === "DBMS"}
            >
              {" "}
              DBMS{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("Others")}
              active={tab === "Others"}
            >
              {" "}
              Others{" "}
            </TabButton>
          </div>
          <div className="mt-8 w-full">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
