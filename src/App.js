import './styles.css';

import Card from './components/Card';

const numbers = [1, 2, 3, 4, 5];

export default function App() {
  return (
    <main role="main">
      <Card listRating={numbers}/>
    </main>
  );
}


