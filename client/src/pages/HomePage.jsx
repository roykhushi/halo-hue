import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store/index";
import { CustomButton } from "../components";

const HomePage = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (

          <motion.section className="home" {...slideAnimation('left')}>
            <motion.header {...slideAnimation("down")}>
              <img src="./threejs.png" alt="logo" className="w-8 h-8 object-contain" />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">HALO-<br className="xl:block hidden" />HUE</h1>
              </motion.div>

            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">
              Create your unique and exclusive products with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "}and define your style
              </p>

              <CustomButton
                type="filled"
                title="Customize"
                handleClick ={()=> state.intro = false} //as soon as we click the button the intro property will be set false and we can no longer see the homepage
                customStyles = "w-fit px-4 py-2.5 font-bold text-sm" 
              />
            </motion.div>

            </motion.div>
          </motion.section>
        )}
    </AnimatePresence>
  )
}

export default HomePage



