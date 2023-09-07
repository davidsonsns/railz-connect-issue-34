"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Center, Code, Flex, Link } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const RailzButton = dynamic(
  () => import("./railz-button").then((mod) => mod.RailzButton),
  { ssr: false }
);

export default function Home() {
  return (
    <Flex
      as="main"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      minH="100vh"
      p="6rem"
    >
      <Flex
        flexDir={{ base: "column-reverse", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        fontSize="0.85rem"
        maxW="var(--max-width)"
        w="full"
        zIndex={2}
        fontFamily="var(--font-mono)"
        gap={6}
      >
        <Box
          pos="relative"
          margin={0}
          padding="1rem"
          backgroundColor="rgba(var(--callout-rgb), 0.5)"
          border="1px solid rgba(var(--callout-border-rgb), 0.3)"
          borderRadius="var(--border-radius)"
        >
          Get started by editing&nbsp;
          <Code>app/page.tsx</Code>
        </Box>
        <div>
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="0.5rem"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
      </Flex>

      <Center>
        <Flex flexDir="column" gap={6}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />

          <RailzButton />
        </Flex>
      </Center>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </Flex>
  );
}
