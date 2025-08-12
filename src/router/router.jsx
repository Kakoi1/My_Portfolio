import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import MainLayout from '../assets/layout/MainLayout'
import { lazy } from "react";

const Home = lazy(()=> import('../assets/components/Sections/Home/Home'));
const Services = lazy(()=> import('../assets/components/Sections/Services/Services'));
const Skills = lazy(()=> import('../assets/components/Sections/Skills/Skills'));
const Contact = lazy(()=> import('../assets/components/Sections/Contact/Contact'));

<BrowserRouter>
<Routes>
    <Route element={MainLayout}>
        <Route  path='/'/>
    </Route>
</Routes>
</BrowserRouter>