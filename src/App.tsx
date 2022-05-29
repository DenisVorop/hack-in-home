import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Frame from './components/_Frame/Frame';
import Account from './pages/Account/Account';
import Chat from './pages/Chat/Chat';
import Department from './pages/Department/Department';
import Institutes from './pages/Institutes/Institutes';
import Login from './pages/Login/Login';
import Master from './pages/Master/Master';
import NotFound from './pages/NotFound/NotFound';
import Questions from './pages/Questions/Questions';
import Teacher from './pages/Teacher/Teacher';
import Teachers from './pages/Teachers/Teachers';
import { useAppDispatch, useAppSelector } from './store/hooks/redux';
import { checkLogin } from './store/reducers/ActionCreators'

const App = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { user } = useAppSelector(state => state.authReducer)

  React.useEffect(() => {
    const localStorageToken = localStorage.getItem('token')
    const localStorageUser = localStorage.getItem('user')
    if (localStorageToken || localStorageUser)
      return dispatch(checkLogin())
    if (!localStorageToken || !localStorageUser)
      return navigate('/login')
  }, [])

  return (
    <div className="wrapper">
      <main>
        <div className="app">
          <div className="app__container">
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Frame />} >
                <Route index element={<Chat />} />
                <Route path='/teachers' element={<Teachers />} />
                <Route path='/teachers/:name' element={<Teacher />} />
                <Route path='/institutes' element={<Institutes />} />
                <Route path='/institutes/:department' element={<Department />} />
                <Route path='/account' element={<Account />} />
                <Route path='/questions' element={<Questions />} />
                <Route path='*' element={<NotFound />} />
                {user?.master ? <Route path='/master' element={<Master />} /> : null}
              </Route>
            </Routes>
          </div>
        </div>
      </main >
    </div >
  );
}

export default App;
