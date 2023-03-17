import {Navbar} from "./index";
import {CardList} from "./index";
import {VideoSlider} from "./index";
import { Parallax } from "./index";
import {Footer} from "./index";

function universalRenderer(){
  return(
    <div>
      <>
      <Navbar/>
      <Parallax/>
      <CardList/>
      <VideoSlider/>
      <Footer/>
      </>
    </div>
  )
}
export default universalRenderer;