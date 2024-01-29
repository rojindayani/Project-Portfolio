import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Education from '../src/education'
import Project from '../src/project'
import Contact from '../src/contact'
import Layout from './layout'
import About from '../src/about'

const MainRouter = () => {
    return (<div>
            <Layout/>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/education" element={<Education />} />
                <Route exact path="/project" element={<Project />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        {/* </Layout> */}
    </div>
    )
}
export default MainRouter
