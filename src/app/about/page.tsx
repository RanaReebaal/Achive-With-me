

import {Navbar} from "../index";
import { Parallax } from "../index";
import {Footer} from "../index";

function universalRenderer(){
  return(
    <div>
      <>
      <Navbar/>
      <Parallax/>
      <Footer/>
      </>
    </div>
  )
}
export default universalRenderer;