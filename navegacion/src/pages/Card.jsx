import '../components/Card.css'

const Card =({imagen, nombre, edad, datos})=>{

   

    return (
        <>
         <div className="custom-card">
<div className="custom-card-header">
<div className="decoracion"></div>
<img src={imagen} alt={nombre} className="custom-card-img" />
</div>
<div className="custom-card-body">
<h5 className="custom-card-title">{nombre}</h5>
<p className="custom-card-age">Edad: {edad} años</p>
<ul className="custom-card-list">
         {datos.map((dato, index) => (
<li key={index}>{dato}</li>
         ))}
</ul>
<button className="custom-card-btn">Ver perfil</button>
</div>
</div>
          
        </>
      )
}
export default Card;