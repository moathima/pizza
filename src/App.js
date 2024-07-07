

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];




function App() {


  return (

   
    
  <div className="container header">
   <Header/>   
   <Menu/>
 
     <Footer/>
      </div>
  );
}


 function Header(){
  const style={}
  return(
     <header className="header">
    
     <h1 style={style}>Fast React Pizza Co.</h1>
    

     </header>  )
}


 function Menu(){

  const Pizzas=pizzaData;
  // const Pizzas=[];
  const numPizzas=Pizzas.length

 return(
     <main className="menu">
    <h2 >Our Menu</h2>


    {numPizzas > 0 ?(

<ul className="pizzas">



  {pizzaData.map((pizza)=>(
   <li className='pizza'>

   <img src={pizza.photoName} alt={pizza.name} />
 
 <div>
     <h3>{pizza.name}</h3>
     <p>{pizza.ingredients}</p>
     <span>{pizza.price}</span>

   </div>

   </li>

  ))}

</ul>
    ) :(<p> We are still working in menu come back later</p>)

 };


     </main>
 )


   


 }







 function Footer(){
 const hour=new Date().getHours();
 const openhour=20;
 const closehour=22;
 const isOpen=hour >= openhour && hour <= closehour;
 console.log(isOpen)

 return(
 <footer className="footer">

{ isOpen ? (
  <div className='order'>
  {isOpen && <p>We are open untit {closehour} come to visit</p>}

  <button className='btn'>Order</button>
  </div>

 ) :( <p> We are happy  to welcome between {openhour } to {closehour}</p>)

}
 </footer>
   )
 }

export default App;
