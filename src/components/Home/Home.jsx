import Main from "../Pages/Main";
import Main2 from "../Pages/Main2";
import Main3 from "../Pages/Main3";
import Main4 from "../Pages/Main4";
import Main5 from "../Pages/Main5";
import Main6 from "../Pages/Main6";
import Main7 from "../Pages/Main7";
import Main8 from "../Pages/Main8";
import Main9 from "../Pages/Main9";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import "../../App.css"

const Home = () => {
  const ref = useRef(null);

  const inInView = useInView(ref, { once: true });

  useEffect(() => {
    console.log(inInView);
  }, [inInView]);

  return (
    <div ref={ref} className="cover">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <Main />
        <Main2 />
        <Main3 />
        <Main4 />
        <Main5 />
        <Main6 />
        <Main7 />
        <Main8 />
        <Main9 />
      </motion.div>
    </div>
  );
};

export default Home;
