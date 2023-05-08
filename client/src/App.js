import React from 'react';
import AdminRoutes from './utils/AdminRoutes';
import PrivateRoutes from './utils/PrivateRoutes';
import GeneralRoutes from './utils/GeneralRoutes';
import Home from './pages/Home';
import HomeLoggedin from './pages/HomeLoggedin';
import HomeAdmin from './pages/HomeAdmin';
import About from './pages/About';
import AboutLoggedin from './pages/AboutLoggedin';
import AboutAdmin from './pages/AboutAdmin';
import Courses from './pages/Courses';
import CoursesLoggedin from './pages/CoursesLoggedin';
import CoursesAdmin from './pages/CoursesAdmin';
import Contact from './pages/Contact';
import ContactLoggedin from './pages/ContactLoggedin';
import Account from './pages/Account';
import AccountAdmin from './pages/AccountAdmin';
import UpdateProfile from './pages/UpdateProfilePage';
import UpdateProfileAdmin from './pages/UpdateProfileAdminPage';
import ChangePassword from './pages/ChangePasswordPage';
import ChangePasswordAdmin from './pages/ChangePasswordAdminPage';
import MyCourses from './pages/MyCourses';
import AddCourse from './pages/AddCoursePage';
import RegisterLogin from './pages/RegisterLoginPage';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<AdminRoutes/>}>
          <Route path="/admin/home" element={<HomeAdmin/>}/>
          <Route path="/admin/about" element={<AboutAdmin/>}/>
          <Route path="/admin/courses" element={<CoursesAdmin/>}/>
          <Route path="/admin/account" element={<AccountAdmin/>}/>       
          <Route path="/admin/account/update" element={<UpdateProfileAdmin/>}/>
          <Route path="/admin/account/changepassword" element={<ChangePasswordAdmin/>}/>
          <Route path="/admin/addcourse" element={<AddCourse/>}/>
        </Route>
        <Route element={<PrivateRoutes/>}>
          <Route path="/user/home" element={<HomeLoggedin/>}/>
          <Route path="/user/about" element={<AboutLoggedin/>}/>
          <Route path="/user/courses" element={<CoursesLoggedin/>}/>
          <Route path="/user/contact" element={<ContactLoggedin Us/>}/>
          <Route path="/user/account" element={<Account/>}/>
          <Route path="/user/account/update" element={<UpdateProfile/>}/>
          <Route path="/user/account/changepassword" element={<ChangePassword/>}/>
          <Route path="/user/mycourses" element={<MyCourses/>}/>
        </Route>
        <Route element={<GeneralRoutes/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/contact" element={<Contact Us/>}/>
          <Route path="/loginreg" element={<RegisterLogin/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
