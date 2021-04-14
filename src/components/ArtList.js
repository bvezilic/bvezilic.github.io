import ArtCard from './ArtCard';
import { arts } from '../data';


export default function ArtList(props) {
  const listItems = arts.map((item) =>
    <ArtCard key={item.name} name={item.name} description={item.description} img={item.image}/>
  );
  return (
    <div className="GuitarArrangementList">
      {listItems}
    </div>
  )
}