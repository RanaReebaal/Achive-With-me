

import { Navbar } from "../index";
import { Footer } from "../index";
import { Profile } from "./login-signup";
import { Personal_Information } from "./login-signup";
import { Notifications } from "./login-signup";




function universalRenderer() {
  return (
    <div>
      <>
        <Navbar />
        <Profile />
        <Personal_Information />
        <Notifications />
        <Footer />
      </>
    </div>
  )
}
export default universalRenderer;