import Section from "./section"


function Dashboard (props){
      
return(
       <div>
<div className="p">
       <Section items={props.products}/>
       <Section items={props.products}/>  
       <Section items={props.products}/>
              
            </div>
       <div className="myForm show">
myform
       </div>
       <div className="myForm delete">
delete
       </div>
       </div>
   
)
}
export default Dashboard