import './Header.css';


const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <img className="logo" src="https://logos-marques.com/wp-content/uploads/2022/03/Harry-Potter-Embleme.jpg" alt="Harry Potter Logo" />
        <h1>Bienvenue sur notre site Harry Potter</h1>
        <img className="logoHouses" src="https://logos-marques.com/wp-content/uploads/2022/03/Hogwarts-Logo.jpg" alt="Logo des 4 maisons" />
      </div>
    </header>
  );
};


export { Header };
