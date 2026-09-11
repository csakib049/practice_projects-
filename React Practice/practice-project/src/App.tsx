import College from './College'
import { subjectContext } from './ContextData'

const App = () => {
  return (
    <div>
      <subjectContext.Provider value='shahriar'>
        <College/>
      </subjectContext.Provider>
      
    </div>
  )
}

export default App
