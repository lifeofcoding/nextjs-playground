import "../styles/globals.css";
import Layout from "../components/layout/Main";
import Auth from "../components/layout/Auth";
import { FirebaseAppProvider } from "reactfire";
import { AnimatePresence, motion } from "framer-motion";
import { AppProps } from "next/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYS3-j5NXoQbr7mOkYTMsUTa79ETzIoYI",
  authDomain: "vitopia-test.firebaseapp.com",
  projectId: "vitopia-test",
  storageBucket: "vitopia-test.appspot.com",
  messagingSenderId: "683260112548",
  appId: "1:683260112548:web:4fc82d4fca0fdb6b1c8031",
  measurementId: "G-5YN63EL37N",
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const MyApp = ({
  Component,
  pageProps,
  router,
}: AppProps<{ requiresLogin?: boolean }>) => {
  return (
    <>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Layout router={router}>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0 });
                // document?.querySelector("#page-viewport")?.scrollTo({ top: 0 });
              }
            }}
          >
            <motion.article
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.4, type: "easeInOut" }}
              key={router.route}
            >
              {pageProps.hasOwnProperty("requiresLogin") ? (
                <Auth>
                  <Component {...pageProps} />
                </Auth>
              ) : (
                <Component {...pageProps} />
              )}
            </motion.article>
          </AnimatePresence>
        </Layout>
      </FirebaseAppProvider>
    </>
  );
};

export default MyApp;
