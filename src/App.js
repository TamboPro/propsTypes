import Profile from './profile/profile';
import pp from './images/profilePhoto.jpg';

function App() {
  const handleName = name =>  alert(name);
  //alert(pp);
  return (
    <div>
      <Profile fullName = "Gédeon NFONGYELE"  bio = "camerounais" profession = "Ingénieur Mécatronicien" handleName = {handleName}> {pp} </Profile>
    </div>
  );
}

export default App;
