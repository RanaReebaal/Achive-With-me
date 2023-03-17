

import {Navbar} from "../index";
import {CardList} from "../index";
import {Footer} from "../index";

function universalRenderer(){
  return(
    <div>
      <>
      <Navbar/>
      <CardList/>
      <Footer/>
      </>
    </div>
  )
}
export default universalRenderer;