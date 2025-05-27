export const User = (props)=>{

  const userStyle = {
  marginBottom: "10px",
  backgroundColor: "#e3f2fd", // light blue
  color: "#0d47a1",           // dark blue
  borderRadius: "6px",
  fontFamily: "sans-serif",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  width: "100%",
  textAlign: "center",
  padding: "12px",
};
  return(
    <div className="App">
      <h3>Hello my name is {props.name}  and my age is {props.age}</h3>
    </div>
  )
}