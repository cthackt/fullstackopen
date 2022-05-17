import Header from "./Header.js"
import Content from "./Content.js"
import Footer from "./Footer.js"

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  return (
    <>
      <Header course={course} />
      <Content 
        part1={part1} 
        exercises1={exercises1} 
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Footer 
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  )
}

export default App
