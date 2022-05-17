import Part from "./Part.js"

const Content = (props) => {
   return (
      <>
         <Part name={props.part1} number={props.exercize1} />
         <Part name={props.part2} number={props.exercize2} />
         <Part name={props.part3} number={props.exercize3} />
      </>
   )
}

export default Content