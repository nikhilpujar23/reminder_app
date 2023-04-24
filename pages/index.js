import { Box, Text, Button, Image, LightMode } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
// import Image from "next/image";
import Link from "next/link";
import { CgNotes } from "react-icons/cg";
import { SiGooglemeet } from "react-icons/si";
import { MdOutlineNoteAlt } from "react-icons/md";
import { auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);
  return (
    <LightMode>
      <div className={styles.container}>
        <Head>
          <title>Reminder App</title>
          <meta
            name="description"
            content="Manage Your Reminders and view your progress"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          p="20px"
          className={styles.headDiv}
          flexWrap="wrap-reverse"
        >
          <Box
            w={{ lg: "50%", base: "90%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            p="35px"
            className={styles.intro}
            textAlign="center"
          >
            <Text fontSize="3xl" fontWeight="bold" my="15px">
              <span className={styles.highlighted}>Reminder App</span>
            </Text>
            <Text textAlign="center" my="15px" fontWeight="bold">
              Track Manage Reminders, with Login functionality
            </Text>
            <Button my="15px" size="lg">
              <Link href="/login">
                {user ? "Goto Dashboard" : "Get started"}
              </Link>
            </Button>
          </Box>
          <Image
            src={"/Home/progress_tracking.svg"}
            height="350px"
            width={{ lg: "40%", base: "80%" }}
            alt="Progress_tracking"
          />
        </Box>

       
      </div>
    </LightMode>
  );
}
