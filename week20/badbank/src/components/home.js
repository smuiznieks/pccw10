import { Card } from "./context";
import bank from "./bank.png";

function Home(){
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src={bank} className="img-fluid" alt="Responsive"/>)}
    />    
  );  
}

export default Home;
