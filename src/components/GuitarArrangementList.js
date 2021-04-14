import GuitarArrangementCard from './GuitarArrangementCard';
import { guitarArrangements } from '../data';


export default function GuitarArrangementList(props) {
  const listItems = guitarArrangements.map((item) =>
    <GuitarArrangementCard key={item.name} name={item.name} description={item.description} pdf={item.pdf}/>
  );
  return (
    <div className="GuitarArrangementList">
      {listItems}
    </div>
  )
}