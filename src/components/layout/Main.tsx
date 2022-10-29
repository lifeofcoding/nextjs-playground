import { getAuth } from "firebase/auth"; // Firebase v9+
import { getDatabase } from "firebase/database"; // Firebase v9+

import { DatabaseProvider, AuthProvider, useFirebaseApp } from "reactfire";
import { NextRouter } from "next/router";
import Navbar from "./Navbar";
import Alerts from "./Alerts";
import Background from "./Background";

function Main({
  children,
  router,
}: {
  children: React.ReactNode;
  router: NextRouter;
}) {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth(app);
  return (
    <>
      <AuthProvider sdk={auth}>
        <DatabaseProvider sdk={database}>
          <Navbar path={router.asPath} />
          <Background />
          <div className="mt-10">{children}</div>
          <Alerts />
        </DatabaseProvider>
      </AuthProvider>
    </>
  );
}

export default Main;
