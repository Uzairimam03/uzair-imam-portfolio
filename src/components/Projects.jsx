import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

           <motion.h3
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        className="h3"
        viewport={{ once: true }}
      >
        Click To See Live 
      </motion.h3>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.a
          href="https://crudapp-production-f446.up.railway.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card block cursor-pointer no-underline"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/crud_app.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>CRUD App</h3>
          <p>
            A full-stack CRUD app built with Node.js, Express, MongoDB, and EJS.
            It allows users to create, view, update, and delete data with
            server-side rendering.
          </p>
          <div className="project-tech">
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>EJS</span>
          </div>
        </motion.a>

        <motion.a
          href="https://tmdb-movieapp-react.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card block cursor-pointer no-underline"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/tmdb_movie.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>React Movie App</h3>
            <p>
              A responsive movie web app built with React and the TMDB API. It
              features real-time search, trending and popular movie listings,
              and detailed movie pages. Styled with Tailwind CSS and powered by
              dynamic API data integration.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>Tailwind CSS</span>
              <span>Appwrite</span>
            </div>
          </motion.div>
        </motion.a>

        <motion.a
          href="https://github.com/Uzairimam03/Kotlin_Firebase_CRUD"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card block cursor-pointer no-underline"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/Firebase-kotlin.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Firebase Realtime Databse</h3>
            <p>
              A lightweight Android app built with Kotlin and Firebase Realtime
              Database to demonstrate clean and functional CRUD operations.
              Designed with simplicity, real-time sync, and modern Android
              practices in mind.
            </p>
            <div className="project-tech">
              <span>Kotlin</span>
              <span>Firebase</span>
              <span>Android Studio</span>
            </div>
          </motion.div>
        </motion.a>
        {/* <motion.a
          href="https://realtime-chat-app-rtww.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-card block cursor-pointer no-underline"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <motion.div
              className="project-image"
              style={{
                backgroundImage: "url('/projects/realtime-chat-app.png')",
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>Realtime Chat App</h3>
            <p>
              A modern real-time chat application built using React.js, Tailwind
              CSS, and Socket.IO. This project demonstrates bi-directional
              messaging with live updates, responsive UI, and clean code
              architecture.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>TailwindCSS</span>
              <span>Node.js</span>
              <span>Socket.IO</span>
            </div>
          </motion.div>
        </motion.a> */}
      </motion.div>
    </motion.section>
  );
};
