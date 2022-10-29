import { getAuth } from "firebase/auth"; // Firebase v9+
import { getDatabase } from "firebase/database"; // Firebase v9+
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import {
  DatabaseProvider,
  AuthProvider,
  useFirebaseApp,
  // AppCheckProvider,
} from "reactfire";
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

  /*
  const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(APP_CHECK_TOKEN),
    isTokenAutoRefreshEnabled: true,
  });
  */

  return (
    <>
      <AuthProvider sdk={auth}>
        {/*<AppCheckProvider sdk={appCheck}>*/}
        <DatabaseProvider sdk={database}>
          <Navbar path={router.asPath} />
          <Background />
          <div className="mt-10">{children}</div>
          <Alerts />
        </DatabaseProvider>
        {/*</AppCheckProvider>*/}
      </AuthProvider>
    </>
  );
}

export default Main;
