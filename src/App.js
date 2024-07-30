import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Machine from './mechine'
import HistoryMachine from './HistoryMachine'
import FormChoose from './FormChoose'
import Cc from './Form/CC'
import Fpa from './Form/FPA'
import P from './Form/P'
import Rc from './Form/RC'
import S from './Form/S'
import Sr from './Form/SR'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path='/Machine' element={<Machine />} />
          <Route path='/HistoryMachine' element={<HistoryMachine />} />
          <Route path='/FormChoose' element={<FormChoose />} />
          <Route path='/FormL機+CC' element={<Cc />} />
          <Route path='/FormL機+FPA' element={<Fpa />} />
          <Route path='/FormL機+P' element={<P />} />
          <Route path='/FormL機+RC' element={<Rc />} />
          <Route path='/FormL機+S' element={<S />} />
          <Route path='/FormL機+SR' element={<Sr />} />
          <Route path='/Form一段式+CC' element={<Cc />} />
          <Route path='/Form一段式+FPA' element={<Fpa />} />
          <Route path='/Form一段式+P' element={<P />} />
          <Route path='/Form一段式+RC' element={<Rc />} />
          <Route path='/Form一段式+S' element={<S />} />
          <Route path='/Form一段式+SR' element={<Sr />} />
          <Route path='/Form鳳凰+CC' element={<Cc />} />
          <Route path='/Form鳳凰+FPA' element={<Fpa />} />
          <Route path='/Form鳳凰+P' element={<P />} />
          <Route path='/Form鳳凰+RC' element={<Rc />} />
          <Route path='/Form鳳凰+S' element={<S />} />
          <Route path='/Form鳳凰+SR' element={<Sr />} />
          <Route path='' element={<Login />}></Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

export default App
